import {
  HiddenContentDeleteAction,
  HiddenContentDeleteDecision,
  HiddenContentDeleteHandler,
  HiddenContentDeleteRequest,
} from "./hidden-content-delete.model";
import {
  $canPlaceCaretPastHiddenRun,
  $hiddenContentItems,
  $hiddenNodesInSelection,
  $hiddenNodesToParaEdge,
  $hiddenRunAtCaret,
  $placeCaretPastHiddenRun,
  DeleteDirection,
  HiddenRun,
} from "./hiddenContentDelete.utils";
import { $selectionReachesIntoOpaqueBlock, isEditingKey } from "./OpaqueBlockGuardPlugin";
import { StructureProtectionMode } from "./structure-protection.model";
import {
  $selectionContainsVerseMarker,
  $shouldBlockSelectionReplacement,
  $shouldBlockStructuralEdit,
  keyDownToIntent,
} from "./structureKeyboard.utils";
import { armedSelectionDeleteIntent } from "./StructureKeyboardPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { IS_APPLE, mergeRegister } from "@lexical/utils";
import {
  $createRangeSelection,
  $getNodeByKey,
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  $setSelection,
  COMMAND_PRIORITY_CRITICAL,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  COPY_COMMAND,
  CUT_COMMAND,
  DELETE_CHARACTER_COMMAND,
  DELETE_LINE_COMMAND,
  DELETE_WORD_COMMAND,
  DRAGSTART_COMMAND,
  INSERT_LINE_BREAK_COMMAND,
  INSERT_PARAGRAPH_COMMAND,
  KEY_DOWN_COMMAND,
  LexicalCommand,
  LexicalEditor,
  NodeKey,
  PASTE_COMMAND,
  PasteCommandType,
  RangeSelection,
  REMOVE_TEXT_COMMAND,
} from "lexical";
import { useEffect, useRef } from "react";
import { $isUnknownNode, LoggerBasic, UnknownNode } from "shared";

type DeleteGranularity = "character" | "word" | "line";

/**
 * What Lexical inserts to open an IME composition over a selection (`COMPOSITION_START_CHAR`: a
 * zero-width space, or a no-break space in Firefox and WebKit).
 */
const COMPOSITION_PLACEHOLDERS = new Set(["\u200b", "\u00a0"]);

/** How long a question may stay open before the plugin logs that editing is still held. */
const LONG_PENDING_MS = 60_000;

interface PointSnapshot {
  key: NodeKey;
  offset: number;
  type: "text" | "element";
}

/** The document and selection an edit was held against, to resume it only if nothing moved. */
interface HeldEdit {
  anchor: PointSnapshot;
  focus: PointSnapshot;
  hiddenKeys: NodeKey[];
  text: string;
}

/** What to do once the user answers. Each runs with the held selection restored. */
interface Settlement {
  /**
   * Moves the caret past the hidden content, inside the update that restores the selection. Its
   * presence is what the request reports as `canSkip`; without it, "keep" cancels the edit.
   */
  $keep?: () => void;
  /** Removes the hidden content on "delete", inside the update that restores the selection. */
  $delete?: () => void;
  /**
   * Replays the edit on "delete", once that update has committed: a word or line delete measures
   * its extent against the DOM, which must no longer hold the hidden content. Dispatches commands.
   */
  replay?: () => void;
}

/**
 * Asks before an edit removes content the current view does not show.
 *
 * Figures, sidebars, `\periph` and every other construct the editor carries as an `UnknownNode` are
 * hidden in every marker mode but `"editable"`, so the user cannot see that a keystroke is about to
 * reach one. Left to native editing, such a keystroke loses content silently:
 *
 * - Backspace just after a figure, or Delete just before one, empties its caption and leaves an
 *   empty shell, and the caret is then stuck inside the shell.
 * - Backspace at the start of the paragraph after a hidden sidebar merges the paragraph INTO the
 *   sidebar, so the paragraph disappears from view; Delete at the end of the paragraph before one
 *   dissolves the sidebar into the paragraph, losing its markup and exposing its text.
 * - A word or line delete, and any edit over a selection, removes whatever hidden content it covers.
 *
 * This plugin catches each of those before it happens, consumes it, and asks the host through
 * `onHiddenContentDelete` (see {@link HiddenContentDeleteHandler}).
 *
 * - On `"delete"` the edit goes ahead deliberately. A character delete, and any delete that stops
 *   at a paragraph's edge, removes exactly the hidden run: never a paragraph merge, never a
 *   dissolve. A word or line delete inside a paragraph removes the hidden content it covers, then
 *   carries on. An edit over a selection (delete, typing, Enter, paste, cut) is replayed.
 * - On `"keep"` nothing is removed. When the only hidden content the delete would reach is the run
 *   right at the caret, and there is somewhere past it to go, the caret moves past it so the next
 *   press reaches visible content; otherwise the edit is cancelled. The request's `canSkip` says
 *   which.
 *
 * Dragging a selection that holds hidden content is refused outright, and so is the removal half of
 * a drag-move or composition: neither can wait for an answer.
 *
 * The edit is resumed only against the document and selection it was held against, and only while
 * the editor is still editable. It is dropped, and the drop logged, if the document's text changed
 * or the held nodes were removed while the host was asking (an undo, a host update), if the
 * selection was moved, or if the editor became read-only. While a question is open, typing,
 * deleting, pasting and cutting are refused so that the document rarely changes; the host's prompt
 * should be modal, and must settle (see {@link HiddenContentDeleteHandler}).
 *
 * Its handlers run at CRITICAL so that they precede `StructureKeyboardPlugin`'s KEY_DOWN handler and
 * native handling. For CUT and PASTE, which `OpaqueBlockGuardPlugin` and `StructureKeyboardPlugin`
 * also register at CRITICAL, it runs first by being mounted first, and it also steps aside
 * explicitly for the two refusals that already protect this content: a selection reaching INTO a
 * construct (`OpaqueBlockGuardPlugin`), and an edit protected mode blocks outright. Guarded mode's
 * two-step delete of a selection holding a verse marker keeps both its steps: the press that arms
 * it, and a press in the other direction that cancels it, are left to `StructureKeyboardPlugin`, and
 * the question is asked on the press that would delete.
 *
 * A cut is held after its copy half has run, since the clipboard cannot be written later. Under a
 * copy limit a cut over hidden content is refused instead: the limit shortens what a copy takes, so
 * the copy and the removal could not be kept to the same text.
 *
 * Known gap: an IME composition started over a selection that holds hidden content is held like
 * typing, which ends the composition; on `"delete"` the selection is removed and the user types the
 * composed text again.
 *
 * @param isEnabled - Whether hidden content is hidden: true in every marker mode but `"editable"`,
 *   where it is shown and editing next to it is the marker-edit engine's business.
 * @param structureProtectionMode - The editor's structure protection, so this plugin can step
 *   aside where `"protected"` blocks an edit outright.
 * @param copyLimit - The editor's `copyLimit`; see above.
 * @param onHiddenContentDelete - Asks the user; see {@link HiddenContentDeleteHandler}. Without it
 *   this plugin does nothing and editing is native.
 * @param logger - Where handler failures, dropped answers, and long-open questions are reported.
 */
export function HiddenContentDeleteGuardPlugin({
  isEnabled,
  structureProtectionMode = "off",
  copyLimit,
  onHiddenContentDelete,
  logger,
}: {
  isEnabled: boolean;
  structureProtectionMode?: StructureProtectionMode;
  copyLimit?: number;
  onHiddenContentDelete?: HiddenContentDeleteHandler;
  logger?: LoggerBasic;
}): null {
  const [editor] = useLexicalComposerContext();
  // A ref, so a host handing a fresh handler each render does not re-register every command (which
  // would move this plugin's handlers to the end of their priority and flip same-priority ties).
  const handlerRef = useRef(onHiddenContentDelete);
  // Refs for the same reason: handlers registered once keep their place among their peers.
  const structureProtectionModeRef = useRef(structureProtectionMode);
  const copyLimitRef = useRef(copyLimit);
  const loggerRef = useRef(logger);
  useEffect(() => {
    handlerRef.current = onHiddenContentDelete;
    structureProtectionModeRef.current = structureProtectionMode;
    copyLimitRef.current = copyLimit;
    loggerRef.current = logger;
  }, [onHiddenContentDelete, structureProtectionMode, copyLimit, logger]);

  const hasHandler = !!onHiddenContentDelete;

  useEffect(() => {
    if (!isEnabled || !hasHandler) return undefined;

    let isBypassed = false;
    let isPending = false;
    let isDisposed = false;

    const runBypassed = (action: () => void) => {
      isBypassed = true;
      try {
        action();
      } finally {
        isBypassed = false;
      }
    };

    const ask = async (
      request: HiddenContentDeleteRequest,
    ): Promise<HiddenContentDeleteDecision> => {
      const handler = handlerRef.current;
      if (!handler) return "keep";
      try {
        const decision = await handler(request);
        if (decision !== "delete" && decision !== "keep")
          loggerRef.current?.warn(
            `[HiddenContentDeleteGuard] onHiddenContentDelete answered ${JSON.stringify(decision)}, which is neither "delete" nor "keep"; keeping the hidden content.`,
          );
        return decision === "delete" ? "delete" : "keep";
      } catch (error) {
        loggerRef.current?.error(
          "[HiddenContentDeleteGuard] onHiddenContentDelete failed; keeping the hidden content.",
          error,
        );
        return "keep";
      }
    };

    /** Logs why an answered question changed nothing. */
    const logDrop = (decision: HiddenContentDeleteDecision, reason: string) =>
      loggerRef.current?.info(
        `[HiddenContentDeleteGuard] Dropped the "${decision}" answer: ${reason}. Nothing was changed.`,
      );

    /** Consumes an edit that would remove `hidden`, asks, and settles it once answered. */
    const $hold = (
      selection: RangeSelection,
      hidden: UnknownNode[],
      action: HiddenContentDeleteAction,
      settlement: Settlement,
    ): true => {
      const held = $snapshot(selection, hidden);
      const request: HiddenContentDeleteRequest = {
        items: $hiddenContentItems(hidden),
        action,
        canSkip: !!settlement.$keep,
      };
      isPending = true;
      const longPendingTimer = setTimeout(
        () =>
          loggerRef.current?.warn(
            `[HiddenContentDeleteGuard] onHiddenContentDelete has not answered after ${LONG_PENDING_MS / 1000}s; editing stays held until it does.`,
          ),
        LONG_PENDING_MS,
      );
      void ask(request).then((decision) => {
        clearTimeout(longPendingTimer);
        isPending = false;
        if (isDisposed) logDrop(decision, "the editor's guard was torn down while asking");
        else resume(held, decision, settlement);
      });
      return true;
    };

    /** Resumes a held edit once the host has answered, unless the user has moved on since. */
    const resume = (
      held: HeldEdit,
      decision: HiddenContentDeleteDecision,
      settlement: Settlement,
    ) => {
      if (!editor.getEditorState().read(() => $isSelectionUnmoved(held))) {
        logDrop(decision, "the selection moved while asking");
        return;
      }
      // The host's prompt took focus. Focus comes back first, so the held selection restored next
      // is the one that stands. Focus's callback runs mid-commit, where an update would only be
      // queued behind whatever runs next, so the edit settles from a fresh microtask instead.
      editor.focus(() => queueMicrotask(() => settle(held, decision, settlement)));
    };

    /**
     * Restores the held selection and applies the answer. Runs outside any update or listener, so
     * each update below commits on the spot and in order: the replay measures and edits a document
     * the hidden content has already left.
     */
    const settle = (
      held: HeldEdit,
      decision: HiddenContentDeleteDecision,
      settlement: Settlement,
    ) => {
      if (isDisposed) {
        logDrop(decision, "the editor's guard was torn down while asking");
        return;
      }
      let isResumed = false;
      editor.update(
        () => {
          if (!editor.isEditable()) {
            logDrop(decision, "the editor became read-only while asking");
            return;
          }
          if (!$isStillCurrent(held)) {
            logDrop(decision, "the document changed while asking");
            return;
          }
          $restoreSelection(held);
          if (decision === "keep") {
            settlement.$keep?.();
            return;
          }
          settlement.$delete?.();
          isResumed = true;
        },
        { discrete: true },
      );
      const { replay } = settlement;
      if (isResumed && replay) runBypassed(replay);
    };

    const $removeHidden = (keys: NodeKey[]) => {
      for (const key of keys) {
        const node = $getNodeByKey(key);
        if ($isUnknownNode(node) && node.isAttached()) node.remove();
      }
    };

    /** A collapsed-caret delete: Backspace/Delete, or a word or line chord of either. */
    const $holdCaretDelete = (
      selection: RangeSelection,
      direction: DeleteDirection,
      granularity: DeleteGranularity,
    ): boolean => {
      const isBackward = direction === "backward";
      const action = isBackward ? "deleteBackward" : "deleteForward";
      const run = $hiddenRunAtCaret(selection, direction);
      if (run?.placement === "block") {
        // A block run is the whole step, whatever the granularity: deleting past it would merge
        // paragraphs the user never asked to merge.
        const keys = run.nodes.map((node) => node.getKey());
        return $hold(selection, run.nodes, action, {
          // With no paragraph on the far side (a chapter marker, the document's edge) there is
          // nowhere to skip to, so "keep" cancels rather than leaving the caret to ask again.
          $keep: $canPlaceCaretPastHiddenRun(run, direction)
            ? () => $placeCaretPastHiddenRun($freshRun(run, keys), direction)
            : undefined,
          $delete: () => $removeHidden(keys),
        });
      }
      const extent =
        granularity === "character"
          ? []
          : $hiddenNodesInDeleteExtent(editor, selection, direction, granularity);
      const hidden = $inDocumentOrder([...(run?.nodes ?? []), ...extent]);
      if (hidden.length === 0) return false;
      const keys = hidden.map((node) => node.getKey());
      // Skipping is only a fair "keep" when what stopped the delete is right at the caret and is
      // all the delete would have taken; hidden content further along a word or line cancels it.
      const isOnlyTheRun = !!run && hidden.length === run.nodes.length;
      const runKeys = run?.nodes.map((node) => node.getKey()) ?? [];
      return $hold(selection, hidden, action, {
        $keep:
          run && isOnlyTheRun
            ? () => $placeCaretPastHiddenRun($freshRun(run, runKeys), direction)
            : undefined,
        $delete: () => $removeHidden(keys),
        replay:
          granularity === "character"
            ? undefined
            : () => editor.dispatchCommand(granularityCommand(granularity), isBackward),
      });
    };

    /** An edit replacing a non-collapsed selection; on "delete" the edit itself is replayed. */
    const $holdSelectionEdit = (selection: RangeSelection, replay: () => void): boolean => {
      const hidden = $hiddenNodesInSelection(selection);
      if (hidden.length === 0) return false;
      return $hold(selection, hidden, "replaceSelection", { replay });
    };

    /** The live range selection when this plugin should judge the edit at all. */
    const $judgedSelection = (): RangeSelection | undefined => {
      if (isBypassed) return undefined;
      const selection = $getSelection();
      if (!$isRangeSelection(selection) || $selectionReachesIntoOpaqueBlock()) return undefined;
      return selection;
    };

    const $onKeyDown = (event: KeyboardEvent): boolean => {
      if (isBypassed) return false;
      const intent = keyDownToIntent(event);
      const isDelete = intent === "deleteBackward" || intent === "deleteForward";
      if (isPending) {
        if (!isDelete && !isEditingKey(event)) return false;
        event.preventDefault();
        return true;
      }
      if (!isDelete) return false;
      // Shift+Delete is the cut chord off Apple platforms; the cut handler judges it.
      if (!IS_APPLE && event.key === "Delete" && event.shiftKey) return false;
      const selection = $judgedSelection();
      if (!selection) return false;
      if (
        structureProtectionModeRef.current === "protected" &&
        $shouldBlockStructuralEdit(selection, intent)
      )
        return false;
      const isBackward = intent === "deleteBackward";
      if (
        !selection.isCollapsed() &&
        structureProtectionModeRef.current === "guarded" &&
        $selectionContainsVerseMarker(selection) &&
        armedSelectionDeleteIntent(editor) !== intent
      )
        // In guarded mode a press that arms the delete, or a press in the other direction that
        // cancels it, removes nothing; leave both to StructureKeyboardPlugin and ask only on the
        // press that fires.
        return false;
      const isHeld = selection.isCollapsed()
        ? $holdCaretDelete(selection, isBackward ? "backward" : "forward", granularityOf(event))
        : // Claimed here rather than left to DELETE_CHARACTER_COMMAND: in guarded mode
          // StructureKeyboardPlugin removes an armed selection itself, straight off the keystroke.
          $holdSelectionEdit(selection, () =>
            editor.dispatchCommand(DELETE_CHARACTER_COMMAND, isBackward),
          );
      if (isHeld) event.preventDefault();
      return isHeld;
    };

    const onDelete =
      (command: LexicalCommand<boolean>, granularity: DeleteGranularity) =>
      (isBackward: boolean): boolean => {
        if (isPending && !isBypassed) return true;
        const selection = $judgedSelection();
        if (!selection) return false;
        if (selection.isCollapsed())
          return $holdCaretDelete(selection, isBackward ? "backward" : "forward", granularity);
        if ($isProtectedFromReplacement(selection)) return false;
        return $holdSelectionEdit(selection, () => editor.dispatchCommand(command, isBackward));
      };

    /** Enter over a selection: replayed as the same command on "delete". */
    const onBreakOverSelection =
      <P,>(command: LexicalCommand<P>) =>
      (payload: P): boolean => {
        if (isPending && !isBypassed) return true;
        const selection = $judgedSelection();
        if (!selection || selection.isCollapsed() || $isProtectedFromReplacement(selection))
          return false;
        return $holdSelectionEdit(selection, () => editor.dispatchCommand(command, payload));
      };

    /**
     * Typing and IME input over a selection. Lexical hands some of these over as the live
     * `InputEvent`, whose data is gone once its dispatch ends, so the text is read out now and the
     * replay inserts it as plain text. A composition's opening placeholder is not the user's text:
     * its replay just removes the selection.
     */
    const $onTextInsertion = (payload: InputEvent | string): boolean => {
      if (isPending && !isBypassed) return true;
      const selection = $judgedSelection();
      if (!selection || selection.isCollapsed() || $isProtectedFromReplacement(selection))
        return false;
      const text =
        typeof payload === "string"
          ? payload
          : (payload.data ?? payload.dataTransfer?.getData("text/plain") ?? "");
      const isCompositionStart = editor.isComposing() && COMPOSITION_PLACEHOLDERS.has(text);
      return $holdSelectionEdit(selection, () =>
        isCompositionStart || text === ""
          ? editor.dispatchCommand(DELETE_CHARACTER_COMMAND, true)
          : editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, text),
      );
    };

    /** Whether protected structure refuses replacing this selection outright (it then answers). */
    const $isProtectedFromReplacement = (selection: RangeSelection): boolean =>
      structureProtectionModeRef.current === "protected" &&
      $shouldBlockSelectionReplacement(selection);

    /**
     * A drag of a selection holding hidden content is refused before it starts, and so is the
     * removal half of a drag-move or composition (`REMOVE_TEXT_COMMAND`) as a backstop: neither can
     * wait for an answer, and either would take the hidden content with it.
     */
    const $refuseRemovalOfHidden = (event: Event | null): boolean => {
      if (isBypassed) return false;
      const selection = $judgedSelection();
      if (!selection || $hiddenNodesInSelection(selection).length === 0) return false;
      return preventAndClaim(event);
    };

    const $onPaste = (event: PasteCommandType): boolean => {
      if (isPending && !isBypassed) return preventAndClaim(event);
      const selection = $judgedSelection();
      if (!selection || selection.isCollapsed()) return false;
      if ($isProtectedFromReplacement(selection)) return false;
      // The clipboard is only readable while the paste event is being dispatched, so what it holds
      // is copied out now for the replay.
      const replayEvent = replayablePaste(event);
      const isHeld = $holdSelectionEdit(selection, () =>
        editor.dispatchCommand(PASTE_COMMAND, replayEvent),
      );
      if (isHeld) preventAndClaim(event);
      return isHeld;
    };

    const $onCut = (event: ClipboardEvent | KeyboardEvent | null): boolean => {
      if (isPending && !isBypassed) return preventAndClaim(event);
      const selection = $judgedSelection();
      if (!selection || selection.isCollapsed()) return false;
      if ($isProtectedFromReplacement(selection)) return false;
      if ($hiddenNodesInSelection(selection).length === 0) return false;
      if (copyLimitRef.current !== undefined) return preventAndClaim(event);
      // The clipboard can only be written while the cut event is being dispatched, so the copy half
      // of the cut happens now; only the removal waits for the answer. "Keep" leaves a plain copy.
      editor.dispatchCommand(COPY_COMMAND, event);
      preventAndClaim(event);
      return $holdSelectionEdit(selection, () =>
        editor.dispatchCommand(DELETE_CHARACTER_COMMAND, true),
      );
    };

    return mergeRegister(
      () => {
        isDisposed = true;
      },
      editor.registerCommand(KEY_DOWN_COMMAND, $onKeyDown, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(
        DELETE_CHARACTER_COMMAND,
        onDelete(DELETE_CHARACTER_COMMAND, "character"),
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(
        DELETE_WORD_COMMAND,
        onDelete(DELETE_WORD_COMMAND, "word"),
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(
        DELETE_LINE_COMMAND,
        onDelete(DELETE_LINE_COMMAND, "line"),
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(
        CONTROLLED_TEXT_INSERTION_COMMAND,
        $onTextInsertion,
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(
        INSERT_PARAGRAPH_COMMAND,
        onBreakOverSelection(INSERT_PARAGRAPH_COMMAND),
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(
        INSERT_LINE_BREAK_COMMAND,
        onBreakOverSelection(INSERT_LINE_BREAK_COMMAND),
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(DRAGSTART_COMMAND, $refuseRemovalOfHidden, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(
        REMOVE_TEXT_COMMAND,
        $refuseRemovalOfHidden,
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(PASTE_COMMAND, $onPaste, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(CUT_COMMAND, $onCut, COMMAND_PRIORITY_CRITICAL),
    );
  }, [editor, isEnabled, hasHandler]);

  return null;
}

/** Lexical's own chord mapping (`isDeleteWordBackward`, `isDeleteLineBackward`, ...). */
function granularityOf(event: KeyboardEvent): DeleteGranularity {
  if (IS_APPLE) {
    if (event.metaKey) return "line";
    if (event.altKey) return "word";
    return "character";
  }
  return event.ctrlKey ? "word" : "character";
}

function granularityCommand(granularity: DeleteGranularity): LexicalCommand<boolean> {
  if (granularity === "word") return DELETE_WORD_COMMAND;
  if (granularity === "line") return DELETE_LINE_COMMAND;
  return DELETE_CHARACTER_COMMAND;
}

function preventAndClaim(event: Event | null): true {
  event?.preventDefault();
  return true;
}

/**
 * A paste event that can be dispatched again after the original has finished: the browser empties
 * a `ClipboardEvent`'s data once its dispatch ends. Where `DataTransfer` cannot be constructed the
 * original is returned as is.
 */
function replayablePaste(event: PasteCommandType): PasteCommandType {
  if (
    typeof ClipboardEvent === "undefined" ||
    typeof DataTransfer === "undefined" ||
    !(event instanceof ClipboardEvent) ||
    !event.clipboardData
  )
    return event;
  const data = new DataTransfer();
  for (const type of event.clipboardData.types) {
    if (type === "Files") continue;
    data.setData(type, event.clipboardData.getData(type));
  }
  for (const file of Array.from(event.clipboardData.files)) data.items.add(file);
  return new ClipboardEvent("paste", { clipboardData: data, cancelable: true });
}

/**
 * Mutating (it moves the DOM selection and marks `selection` dirty): call from a command handler.
 *
 * The hidden constructs a word or line delete in `direction` would remove. Its extent is the
 * browser's to say - word breaks depend on the script, a visual line on wrapping - so it is
 * measured the way Lexical's own `deleteWord` and `deleteLine` measure it, by extending a copy of
 * the selection. Where the browser cannot (no `Selection.modify`, as in jsdom), a line counts as
 * everything to the paragraph's edge and a word as nothing beyond the caret's own run.
 */
function $hiddenNodesInDeleteExtent(
  editor: LexicalEditor,
  selection: RangeSelection,
  direction: DeleteDirection,
  granularity: "word" | "line",
): UnknownNode[] {
  const domSelection = editor.getRootElement()?.ownerDocument.defaultView?.getSelection();
  if (!domSelection || typeof domSelection.modify !== "function")
    return granularity === "line" ? $hiddenNodesToParaEdge(selection, direction) : [];
  const probe = selection.clone();
  // Dirty makes `modify` start from the probe's own points rather than the DOM's.
  probe.dirty = true;
  probe.modify(
    "extend",
    direction === "backward",
    granularity === "line" ? "lineboundary" : "word",
  );
  // The probe moved the DOM selection; dirty makes the next `modify` (the native delete's own, when
  // nothing is hidden) start from the live caret again rather than from the probe's extent.
  selection.dirty = true;
  return $hiddenNodesInSelection(probe);
}

/** `nodes` without repeats, in document order. */
function $inDocumentOrder(nodes: UnknownNode[]): UnknownNode[] {
  const unique = nodes.filter((node, index) => nodes.findIndex((n) => n.is(node)) === index);
  return unique.sort((a, b) => (a.isBefore(b) ? -1 : 1));
}

function $snapshot(selection: RangeSelection, hidden: UnknownNode[]): HeldEdit {
  const point = ({ key, offset, type }: PointSnapshot): PointSnapshot => ({ key, offset, type });
  return {
    anchor: point(selection.anchor),
    focus: point(selection.focus),
    hiddenKeys: hidden.map((node) => node.getKey()),
    text: $getRoot().getTextContent(),
  };
}

function $isStillCurrent(held: HeldEdit): boolean {
  const isPointValid = ({ key, offset, type }: PointSnapshot) => {
    const node = $getNodeByKey(key);
    if (!node || !node.isAttached()) return false;
    if (type === "element") return $isElementNode(node) && offset <= node.getChildrenSize();
    return $isTextNode(node) && offset <= node.getTextContentSize();
  };
  return (
    isPointValid(held.anchor) &&
    isPointValid(held.focus) &&
    held.hiddenKeys.every((key) => $getNodeByKey(key)?.isAttached()) &&
    $getRoot().getTextContent() === held.text
  );
}

/**
 * Whether the selection is still where the edit was held. A caret the user moved while the question
 * was open is their newer intent, and so is a click that selected a node (a verse marker, a note
 * caller); no selection at all is not a move (the editor lost focus to the host's prompt). Read
 * from the committed state: a fresh update takes its selection from the DOM, which the prompt may
 * hold.
 */
function $isSelectionUnmoved(held: HeldEdit): boolean {
  const selection = $getSelection();
  if (!selection) return true;
  if (!$isRangeSelection(selection)) return false;
  const isHeldPoint = (point: PointSnapshot, other: PointSnapshot) =>
    point.key === other.key && point.offset === other.offset && point.type === other.type;
  return isHeldPoint(selection.anchor, held.anchor) && isHeldPoint(selection.focus, held.focus);
}

function $restoreSelection(held: HeldEdit): void {
  const selection = $createRangeSelection();
  selection.anchor.set(held.anchor.key, held.anchor.offset, held.anchor.type);
  selection.focus.set(held.focus.key, held.focus.offset, held.focus.type);
  $setSelection(selection);
}

/**
 * `run` with its nodes re-read by key, for use in a later update. Only call once
 * {@link $isStillCurrent} has confirmed every held key is still attached: a run must not be empty.
 */
function $freshRun(run: HiddenRun, keys: NodeKey[]): HiddenRun {
  const nodes = keys.map((key) => $getNodeByKey(key)).filter($isUnknownNode);
  return { nodes, placement: run.placement };
}
