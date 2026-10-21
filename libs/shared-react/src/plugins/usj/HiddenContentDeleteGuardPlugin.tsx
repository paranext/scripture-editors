import { hasCommandCharacter } from "./CommandMenuPlugin";
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
  $isInCaretContainer,
  $placeCaretPastHiddenRun,
  DeleteDirection,
  HiddenRun,
} from "./hiddenContentDelete.utils";
import { $narrowSelectionOutOfShell } from "./NoteShellCaretGuardPlugin";
import { $selectionReachesIntoOpaqueBlock, isEditingKey } from "./OpaqueBlockGuardPlugin";
import { $narrowSelectionPastBookPrefix } from "./ParaMarkerPrefixCursorGuardPlugin";
import { StructureProtectionMode } from "./structure-protection.model";
import {
  $shouldBlockSelectionReplacement,
  $shouldBlockStructuralEdit,
  isSamePoint,
  PointSnapshot,
} from "./structureKeyboard.utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { IS_APPLE, mergeRegister } from "@lexical/utils";
import {
  $createRangeSelection,
  $getNodeByKey,
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
  isExactShortcutMatch,
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

/** A delete keystroke: which way it deletes from a collapsed caret, and how far. */
interface DeleteChord {
  direction: DeleteDirection;
  granularity: DeleteGranularity;
}

/**
 * What Lexical inserts to open an IME composition over a selection (`COMPOSITION_START_CHAR`: a
 * zero-width space, or a no-break space in Firefox and WebKit).
 */
const COMPOSITION_PLACEHOLDERS = new Set(["​", " "]);

/** How long a question may stay open before the plugin logs that editing is still held. */
const LONG_PENDING_MS = 60_000;

/** A range's two ends, recorded to rebuild the range in a later update. */
interface RangeSnapshot {
  anchor: PointSnapshot;
  focus: PointSnapshot;
}

/** The selection an edit was held against and what it covered, to resume it only if neither moved. */
interface HeldEdit extends RangeSnapshot {
  hiddenKeys: NodeKey[];
  /** The ranges whose content {@link $coveredContent} fingerprints. */
  ranges: RangeSnapshot[];
  covered: string | undefined;
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
  /** Replays a selection edit on "delete", once that update has committed. Dispatches commands. */
  replay?: () => void;
}

/** A word or line delete's reach, as measured from the caret. */
interface DeleteExtent {
  hidden: UnknownNode[];
  /** The range the delete removes; absent where it removes only the hidden content. */
  range?: RangeSnapshot;
}

/**
 * Asks before an edit removes content the current view does not show: the figures, sidebars,
 * `\periph` and other constructs the editor carries as `UnknownNode`s, hidden in every marker mode
 * but `"editable"`. A delete that would reach one, and any edit over a selection holding one, is
 * consumed and put to the host's `onHiddenContentDelete`; what each answer does is on
 * {@link HiddenContentDeleteDecision} and {@link HiddenContentDeleteRequest}. While the question is
 * open, typing, deleting, pasting and cutting are refused. Dragging a selection that holds hidden
 * content is refused outright, and so is the removal half of a drag-move: neither can wait.
 *
 * Handlers run at CRITICAL, ahead of `StructureKeyboardPlugin`'s KEY_DOWN, and step aside where
 * `OpaqueBlockGuardPlugin` or protected structure refuse the edit. A guarded two-step selection
 * delete is asked about on the press that fires it, which reaches this plugin as a
 * `DELETE_CHARACTER_COMMAND`.
 *
 * Known gap: an IME composition started over a selection that holds hidden content is held like
 * typing, which ends the composition; on `"delete"` the user types the composed text again.
 *
 * @param isEnabled - Whether hidden content is hidden: true in every marker mode but `"editable"`,
 *   where it is shown and editing next to it is the marker-edit engine's business.
 * @param structureProtectionMode - The editor's structure protection, so this plugin can step
 *   aside where `"protected"` refuses an edit outright.
 * @param copyLimit - The editor's `copyLimit`.
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
        // Not called on the spot: the keystroke's dispatch and the update it runs in finish (and
        // commit) first, so the handler may read or update the editor, to place its dialog say,
        // without forcing that update to commit early.
        await new Promise((resolve) => setTimeout(resolve, 0));
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

    /**
     * Consumes an edit that would remove `hidden`, asks, and settles it once answered. `reach` is
     * what else the edit covers beyond the selection; a change to it while asking drops the edit.
     */
    const $hold = (
      selection: RangeSelection,
      hidden: UnknownNode[],
      action: HiddenContentDeleteAction,
      settlement: Settlement,
      reach: RangeSnapshot[] = [],
    ): true => {
      const ranges = [$rangeSnapshot(selection), ...reach];
      const held: HeldEdit = {
        ...ranges[0],
        hiddenKeys: hidden.map((node) => node.getKey()),
        ranges,
        covered: $coveredContent(ranges),
      };
      const request: HiddenContentDeleteRequest = {
        items: $hiddenContentItems(hidden),
        action,
        canSkip: !!settlement.$keep,
      };
      isPending = true;
      const longPendingTimer = setTimeout(
        () =>
          !isDisposed &&
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
      // Judged before focus comes back, which would otherwise put a caret into a document that has
      // since been replaced.
      const reason = editor.getEditorState().read(() => {
        if (!$isSelectionUnmoved(held)) return "the selection moved while asking";
        if (!$isStillCurrent(held)) return "the document changed while asking";
        return undefined;
      });
      if (reason) {
        logDrop(decision, reason);
        return;
      }
      if (!editor.getRootElement()) {
        logDrop(decision, "the editor has no root element to return focus to");
        return;
      }
      // The host's prompt took focus. Focus comes back first, so the held selection restored next
      // is the one that stands. Focus's callback runs mid-commit, where an update would only be
      // queued behind whatever runs next, so the edit settles from a fresh microtask instead.
      editor.focus(() => queueMicrotask(() => settle(held, decision, settlement)));
    };

    /**
     * Restores the held selection and applies the answer. Runs outside any update or listener, so
     * the update below commits on the spot, before a selection edit's replay runs against it.
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
          $setSelection($rangeFrom(held) ?? null);
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

    /**
     * A collapsed-caret delete: Backspace/Delete, or a word or line chord of either. On "delete" it
     * removes the hidden content, and a word or line delete the rest of its measured extent too, in
     * one update, so a single undo restores both.
     */
    const $holdCaretDelete = (
      selection: RangeSelection,
      direction: DeleteDirection,
      granularity: DeleteGranularity,
    ): boolean => {
      const run = $hiddenRunAtCaret(selection, direction);
      // A block run is the whole step, whatever the granularity: deleting past it would merge
      // paragraphs the user never asked to merge.
      const extent =
        granularity === "character" || run?.placement === "block"
          ? undefined
          : $deleteExtent(editor, selection, direction, granularity);
      const hidden = $inDocumentOrder([...(run?.nodes ?? []), ...(extent?.hidden ?? [])]);
      if (hidden.length === 0) return false;
      const keys = hidden.map((node) => node.getKey());
      // Skipping is only a fair "keep" when what stopped the delete is right at the caret and is
      // all the delete would have taken, and there is somewhere past it to go; otherwise "keep"
      // cancels rather than leaving the caret to ask again.
      const canSkip =
        !!run && hidden.length === run.nodes.length && $canPlaceCaretPastHiddenRun(run, direction);
      const runKeys = run?.nodes.map((node) => node.getKey()) ?? [];
      const range = extent?.range;
      return $hold(
        selection,
        hidden,
        direction === "backward" ? "deleteBackward" : "deleteForward",
        {
          $keep:
            run && canSkip
              ? () => $placeCaretPastHiddenRun($freshRun(run, runKeys), direction)
              : undefined,
          $delete: () => {
            if (range) $removeRange(range);
            $removeHidden(keys);
          },
        },
        [$reachOf(selection, hidden, direction), ...(range ? [range] : [])],
      );
    };

    /** An edit replacing a non-collapsed selection that holds `hidden`; replayed on "delete". */
    const $holdSelectionEdit = (
      selection: RangeSelection,
      hidden: UnknownNode[],
      replay: () => void,
    ): true => $hold(selection, hidden, "replaceSelection", { replay });

    /** The live range selection when this plugin should judge the edit at all. */
    const $judgedSelection = (): RangeSelection | undefined => {
      if (isBypassed || !editor.isEditable()) return undefined;
      const selection = $getSelection();
      if (!$isRangeSelection(selection) || $selectionReachesIntoOpaqueBlock()) return undefined;
      return selection;
    };

    /** `handler`, except that while a question is open its command is refused (its event too). */
    const refusedWhilePending =
      <P,>(handler: (payload: P) => boolean) =>
      (payload: P): boolean => {
        if (!isPending || isBypassed) return handler(payload);
        if (payload instanceof Event) payload.preventDefault();
        return true;
      };

    /** Whether protected structure refuses replacing this selection outright (it then answers). */
    const $isProtectedFromReplacement = (selection: RangeSelection): boolean =>
      structureProtectionModeRef.current === "protected" &&
      $shouldBlockSelectionReplacement(selection);

    /**
     * A caret delete is claimed at the keystroke, ahead of `StructureKeyboardPlugin`'s own KEY_DOWN
     * handling of the same press. A selection delete is left to the DELETE_*_COMMAND it becomes, so
     * a guarded two-step delete arms and cancels as it would without this plugin.
     */
    const $onKeyDown = (event: KeyboardEvent): boolean => {
      if (isBypassed) return false;
      const chord = deleteChordOf(event);
      if (isPending) {
        if (!chord && !isEditingKey(event)) return false;
        event.preventDefault();
        return true;
      }
      if (!chord) return false;
      const selection = $judgedSelection();
      if (!selection?.isCollapsed()) return false;
      const intent = chord.direction === "backward" ? "deleteBackward" : "deleteForward";
      if (
        structureProtectionModeRef.current === "protected" &&
        $shouldBlockStructuralEdit(selection, intent)
      )
        return false;
      const isHeld = $holdCaretDelete(selection, chord.direction, chord.granularity);
      if (isHeld) event.preventDefault();
      return isHeld;
    };

    const onDelete = (command: LexicalCommand<boolean>, granularity: DeleteGranularity) =>
      refusedWhilePending((isBackward: boolean): boolean => {
        const selection = $judgedSelection();
        if (!selection) return false;
        if (selection.isCollapsed())
          return $holdCaretDelete(selection, isBackward ? "backward" : "forward", granularity);
        const hidden = $hiddenNodesInSelection(selection);
        if (hidden.length === 0) return false;
        return $holdSelectionEdit(selection, hidden, () =>
          editor.dispatchCommand(command, isBackward),
        );
      });

    /** Enter over a selection: replayed as the same command on "delete". */
    const onBreakOverSelection = <P,>(command: LexicalCommand<P>) =>
      refusedWhilePending((payload: P): boolean => {
        const selection = $judgedSelection();
        if (!selection || selection.isCollapsed()) return false;
        const hidden = $hiddenNodesInSelection(selection);
        if (hidden.length === 0) return false;
        return $holdSelectionEdit(selection, hidden, () =>
          editor.dispatchCommand(command, payload),
        );
      });

    /**
     * Typing and IME input over a selection. Lexical hands some of these over as the live
     * `InputEvent`, whose data is gone once its dispatch ends, so the text is read out now and the
     * replay inserts it as plain text. A composition's opening placeholder is not the user's text:
     * its replay just removes the selection.
     */
    const $onTextInsertion = (payload: InputEvent | string): boolean => {
      const selection = $judgedSelection();
      if (!selection || selection.isCollapsed() || $isProtectedFromReplacement(selection))
        return false;
      const hidden = $hiddenNodesInSelection(selection);
      if (hidden.length === 0) return false;
      const text =
        typeof payload === "string"
          ? payload
          : (payload.data ?? payload.dataTransfer?.getData("text/plain") ?? "");
      const isCompositionStart = editor.isComposing() && COMPOSITION_PLACEHOLDERS.has(text);
      return $holdSelectionEdit(selection, hidden, () =>
        isCompositionStart || text === ""
          ? editor.dispatchCommand(DELETE_CHARACTER_COMMAND, true)
          : editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, text),
      );
    };

    /**
     * A drag of a selection holding hidden content is refused before it starts, and so is the
     * removal half of a drag-move or composition (`REMOVE_TEXT_COMMAND`) as a backstop: neither can
     * wait for an answer, and either would take the hidden content with it.
     */
    const $refuseRemovalOfHidden = (event: Event | null): boolean => {
      const selection = $judgedSelection();
      if (!selection || $hiddenNodesInSelection(selection).length === 0) return false;
      return preventAndClaim(event);
    };

    const $onPaste = (event: PasteCommandType): boolean => {
      const selection = $judgedSelection();
      if (!selection || selection.isCollapsed()) return false;
      const isProtected = structureProtectionModeRef.current === "protected";
      if ($isProtectedFromReplacement(selection) || pasteInsertsNothing(event, isProtected))
        return false;
      const hidden = $hiddenNodesInSelection(selection);
      if (hidden.length === 0) return false;
      // The clipboard is only readable while the paste event is being dispatched, so what it holds
      // is copied out now for the replay.
      const replayEvent = replayablePaste(event);
      preventAndClaim(event);
      return $holdSelectionEdit(selection, hidden, () =>
        editor.dispatchCommand(PASTE_COMMAND, replayEvent),
      );
    };

    const $onCut = (event: ClipboardEvent | KeyboardEvent | null): boolean => {
      const selection = $judgedSelection();
      if (!selection || selection.isCollapsed() || $isProtectedFromReplacement(selection))
        return false;
      // The guards that narrow a cut's range run after this one, and the copy below is taken now:
      // narrowed first, the copy and the removal are of the same range.
      $narrowEditRange(selection);
      if (selection.isCollapsed()) return false;
      const hidden = $hiddenNodesInSelection(selection);
      if (hidden.length === 0) return false;
      // A copy limit shortens what the copy takes, so the copy and the removal could not be kept
      // to the same text.
      if (copyLimitRef.current !== undefined) return preventAndClaim(event);
      // The clipboard can only be written while the cut event is being dispatched, so the copy half
      // of the cut happens now; only the removal waits for the answer. "Keep" leaves a plain copy.
      editor.dispatchCommand(COPY_COMMAND, event);
      preventAndClaim(event);
      return $holdSelectionEdit(selection, hidden, () =>
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
        refusedWhilePending($onTextInsertion),
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
      editor.registerCommand(
        PASTE_COMMAND,
        refusedWhilePending($onPaste),
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(CUT_COMMAND, refusedWhilePending($onCut), COMMAND_PRIORITY_CRITICAL),
    );
  }, [editor, isEnabled, hasHandler]);

  return null;
}

/**
 * The delete a keystroke asks for, matched exactly as Lexical's own `isDeleteBackward`,
 * `isDeleteWordBackward`, `isDeleteLineBackward` and their forward twins match it, or `undefined`
 * for any other chord: off Apple platforms Alt+Backspace is the browser's Undo and Shift+Delete its
 * cut, and neither deletes.
 */
function deleteChordOf(event: KeyboardEvent): DeleteChord | undefined {
  const wordMask = IS_APPLE ? { altKey: true } : { ctrlKey: true };
  const appleChord = (key: string) =>
    IS_APPLE && isExactShortcutMatch(event, key, { ctrlKey: true });
  if (isExactShortcutMatch(event, "Backspace", { shiftKey: "any" }) || appleChord("h"))
    return { direction: "backward", granularity: "character" };
  if (isExactShortcutMatch(event, "Delete", {}) || appleChord("d"))
    return { direction: "forward", granularity: "character" };
  if (isExactShortcutMatch(event, "Backspace", wordMask))
    return { direction: "backward", granularity: "word" };
  if (isExactShortcutMatch(event, "Delete", wordMask))
    return { direction: "forward", granularity: "word" };
  if (IS_APPLE && isExactShortcutMatch(event, "Backspace", { metaKey: true }))
    return { direction: "backward", granularity: "line" };
  if ((IS_APPLE && isExactShortcutMatch(event, "Delete", { metaKey: true })) || appleChord("k"))
    return { direction: "forward", granularity: "line" };
  return undefined;
}

function preventAndClaim(event: Event | null): true {
  event?.preventDefault();
  return true;
}

/**
 * Whether a paste would insert nothing, leaving nothing to ask about: a clipboard of files alone, or
 * text holding a `\` or `/`, which `CommandMenuPlugin` refuses after this plugin has run. That
 * plugin is mounted in every view this one guards; protected structure's sanitizer inserts an html
 * flavor ahead of its refusal.
 */
function pasteInsertsNothing(event: PasteCommandType, isProtected: boolean): boolean {
  if (typeof ClipboardEvent === "undefined" || !(event instanceof ClipboardEvent)) return false;
  const data = event.clipboardData;
  if (!data) return false;
  if (Array.from(data.types).every((type) => type === "Files")) return true;
  if (isProtected && data.getData("text/html")) return false;
  return hasCommandCharacter(data.getData("text/plain"));
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
 * What a word or line delete in `direction` would remove. Its extent is the browser's to say - word
 * breaks depend on the script, a visual line on wrapping - so it is measured the way Lexical's own
 * `deleteWord` and `deleteLine` measure it, by extending a copy of the selection. An extent that
 * leaves the caret's paragraph (or note) would merge it, so the delete stops at that edge instead and
 * takes only the hidden content there. Where the browser cannot measure (no `Selection.modify`, as in
 * jsdom), only hidden content is reported: for a line everything to the paragraph's edge, for a word
 * nothing beyond the caret's own run.
 */
function $deleteExtent(
  editor: LexicalEditor,
  selection: RangeSelection,
  direction: DeleteDirection,
  granularity: "word" | "line",
): DeleteExtent {
  const domSelection = editor.getRootElement()?.ownerDocument.defaultView?.getSelection();
  if (!domSelection || typeof domSelection.modify !== "function")
    return { hidden: granularity === "line" ? $hiddenNodesToParaEdge(selection, direction) : [] };
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
  if (!$isInCaretContainer(probe.focus, selection))
    return { hidden: $hiddenNodesToParaEdge(selection, direction) };
  return {
    hidden: $hiddenNodesInSelection(probe),
    range: probe.isCollapsed() ? undefined : $rangeSnapshot(probe),
  };
}

/**
 * Mutating: call inside `editor.update()`. Removes a word or line delete's measured extent, narrowed
 * as the guards on every edit's range narrow it: past the `\id` line's prefix, and out of a note's
 * shell.
 */
function $removeRange(snapshot: RangeSnapshot): void {
  const range = $rangeFrom(snapshot);
  if (!range) return;
  $narrowEditRange(range);
  if (range.isCollapsed()) return;
  $setSelection(range);
  range.removeText();
}

/**
 * Mutating: call inside `editor.update()`. Narrows `selection` as the guards that run after this
 * plugin narrow an edit's range, for an edit that acts on it before they do.
 */
function $narrowEditRange(selection: RangeSelection): void {
  $narrowSelectionPastBookPrefix(selection);
  $narrowSelectionOutOfShell(selection);
}

/** Mutating: call inside `editor.update()`. Removes the hidden constructs still attached. */
function $removeHidden(keys: NodeKey[]): void {
  for (const key of keys) {
    const node = $getNodeByKey(key);
    if ($isUnknownNode(node) && node.isAttached()) node.remove();
  }
}

/** `nodes` without repeats, in document order. */
function $inDocumentOrder(nodes: UnknownNode[]): UnknownNode[] {
  const unique = nodes.filter((node, index) => nodes.findIndex((n) => n.is(node)) === index);
  return unique.sort((a, b) => (a.isBefore(b) ? -1 : 1));
}

function $rangeSnapshot({ anchor, focus }: RangeSelection): RangeSnapshot {
  const point = ({ key, offset, type }: PointSnapshot): PointSnapshot => ({ key, offset, type });
  return { anchor: point(anchor), focus: point(focus) };
}

/** The range `snapshot` recorded, or `undefined` when one of its points no longer exists. */
function $rangeFrom({ anchor, focus }: RangeSnapshot): RangeSelection | undefined {
  const isPointValid = ({ key, offset, type }: PointSnapshot) => {
    const node = $getNodeByKey(key);
    if (!node || !node.isAttached()) return false;
    if (type === "element") return $isElementNode(node) && offset <= node.getChildrenSize();
    return $isTextNode(node) && offset <= node.getTextContentSize();
  };
  if (!isPointValid(anchor) || !isPointValid(focus)) return undefined;
  const range = $createRangeSelection();
  range.anchor.set(anchor.key, anchor.offset, anchor.type);
  range.focus.set(focus.key, focus.offset, focus.type);
  return range;
}

/**
 * The stretch from a collapsed caret to the far side of the hidden content a delete from it would
 * remove, so that content inserted between them while asking counts as a change.
 */
function $reachOf(
  caret: RangeSelection,
  hidden: UnknownNode[],
  direction: DeleteDirection,
): RangeSnapshot {
  const farthest = direction === "backward" ? hidden[0] : hidden[hidden.length - 1];
  const index = farthest.getIndexWithinParent() + (direction === "backward" ? 0 : 1);
  const edge: PointSnapshot = {
    key: farthest.getParentOrThrow().getKey(),
    offset: index,
    type: "element",
  };
  const { anchor } = $rangeSnapshot(caret);
  return { anchor, focus: edge };
}

/**
 * What `ranges` cover, as one string to compare later: each node's key, and each text node's text.
 * A change inside them - text typed or removed, a node added (a verse marker has no text) or
 * replaced - changes it; a change elsewhere in the document does not. `undefined` when a range no
 * longer exists.
 */
function $coveredContent(ranges: RangeSnapshot[]): string | undefined {
  const parts: string[] = [];
  for (const snapshot of ranges) {
    const range = $rangeFrom(snapshot);
    if (!range) return undefined;
    for (const node of range.getNodes())
      parts.push(node.getKey(), $isTextNode(node) ? node.getTextContent() : "");
  }
  return parts.join("\u0000");
}

function $isStillCurrent(held: HeldEdit): boolean {
  return (
    held.hiddenKeys.every((key) => $getNodeByKey(key)?.isAttached()) &&
    held.covered !== undefined &&
    $coveredContent(held.ranges) === held.covered
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
  return isSamePoint(selection.anchor, held.anchor) && isSamePoint(selection.focus, held.focus);
}

/**
 * `run` with its nodes re-read by key, for use in a later update. Only call once
 * {@link $isStillCurrent} has confirmed every held key is still attached: a run must not be empty.
 */
function $freshRun(run: HiddenRun, keys: NodeKey[]): HiddenRun {
  const nodes = keys.map((key) => $getNodeByKey(key)).filter($isUnknownNode);
  return { nodes, placement: run.placement };
}
