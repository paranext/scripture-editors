import { removeMarkerGlyphElements } from "./clipboard.utils";
import { DeleteGranularity, deleteChordOf } from "./HiddenContentDeleteGuardPlugin";
import { StructureProtectionMode } from "./structure-protection.model";
import { $shouldBlockStructuralEdit, $shouldRefuseExtendedDelete } from "./structureKeyboard.utils";
import {
  UnstorableCharacter,
  UnstorableTextRemoved,
  UnstorableTextRemovedHandler,
} from "./unstorable-text.model";
import {
  $deletionJoinsSlashes,
  $insertsNothing,
  $removeUnstorableTextFromNodes,
  $textAroundSelection,
  JudgedDeletion,
  removeUnstorableText,
} from "./unstorableText.utils";
import { $insertDataTransferForRichText } from "@lexical/clipboard";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  $addUpdateTag,
  $createRangeSelection,
  $getSelection,
  $isNodeSelection,
  $isRangeSelection,
  BaseSelection,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_HIGH,
  COMMAND_PRIORITY_NORMAL,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  CUT_COMMAND,
  DELETE_CHARACTER_COMMAND,
  DELETE_LINE_COMMAND,
  DELETE_WORD_COMMAND,
  KEY_DOWN_COMMAND,
  LexicalCommand,
  LexicalEditor,
  LexicalNode,
  PASTE_COMMAND,
  PASTE_TAG,
  PasteCommandType,
  RangeSelection,
  REMOVE_TEXT_COMMAND,
  SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
} from "lexical";
import { useEffect, useRef } from "react";
import { $getSelectedParaMarkerPara, $isParaLikeNode, LoggerBasic } from "shared";

/** The clipboard flavor Lexical writes its own node copy to. */
const LEXICAL_CLIPBOARD_TYPE = "application/x-lexical-editor";

/** Logs and reports one removal. */
function reportRemoved(
  event: UnstorableTextRemoved,
  onRemoved: UnstorableTextRemovedHandler | undefined,
  logger: LoggerBasic | undefined,
): void {
  if (event.source === "deletion")
    logger?.info("UnstorableTextPlugin: refused a deletion that would join two / into //.");
  else {
    const from = event.source === "typing" ? "typed text" : `a ${event.source}`;
    logger?.info(`UnstorableTextPlugin: removed ${event.removed.join(" and ")} from ${from}.`);
  }
  onRemoved?.(event);
}

/**
 * Removes unstorable text (`\` and `//`, see {@link removeUnstorableText}) from nodes about to be
 * pasted or dropped at `selection`, and reports the removal once. For code that inserts pasted
 * nodes itself instead of through `SELECTION_INSERT_CLIPBOARD_NODES_COMMAND`, such as
 * `StructureKeyboardPlugin`'s protected-structure sanitizer.
 *
 * Mutating: call inside `editor.update()`.
 *
 * @param nodes - The nodes about to be inserted; changed in place, emptied text nodes removed.
 * @param selection - Where they will be inserted.
 * @param source - What brought them in.
 * @param onRemoved - Told when something was removed.
 * @param logger - Where a removal is logged, at `info`.
 * @returns What was removed; empty when nothing was.
 */
export function $filterUnstorablePastedNodes(
  nodes: LexicalNode[],
  selection: BaseSelection | null,
  source: UnstorableTextRemoved["source"],
  onRemoved?: UnstorableTextRemovedHandler,
  logger?: LoggerBasic,
): UnstorableCharacter[] {
  const { before, after } = $isRangeSelection(selection)
    ? $textAroundSelection(selection)
    : { before: "", after: "" };
  const removed = $removeUnstorableTextFromNodes(nodes, before, after);
  if (removed.length > 0) reportRemoved({ source, removed }, onRemoved, logger);
  return removed;
}

/**
 * `text` as typing it at the current selection would leave it (see {@link removeUnstorableText}),
 * judged by the document characters that will touch it: over a selection, the ones outside it,
 * since the typed text replaces what is selected.
 *
 * Read-only: call inside `editor.update()` or an editor read.
 */
function $filterTypedText(text: string): { text: string; removed: UnstorableCharacter[] } {
  const selection = $getSelection();
  const { before, after } = $isRangeSelection(selection)
    ? $textAroundSelection(selection)
    : { before: "", after: "" };
  return removeUnstorableText(text, before, after);
}

/** What deleting `selection` removes, from its start to its end in document order. */
function rangeDeletion(selection: RangeSelection): JudgedDeletion {
  const [start, end] = selection.isBackward()
    ? [selection.focus, selection.anchor]
    : [selection.anchor, selection.focus];
  return { kind: "range", start, end };
}

/**
 * Whether `event` is a shortcut chord rather than a typed character: Ctrl or Cmd held without Alt.
 * Ctrl+Alt is AltGr on Windows, which some keyboard layouts type `\` with.
 */
function isShortcutChord(event: KeyboardEvent): boolean {
  return (event.ctrlKey || event.metaKey) && !event.altKey;
}

/**
 * The flavor Lexical inserts `data` from (`$insertDataTransferForRichText`): a node copy from an
 * editor of this namespace first, then html, then plain text.
 */
function insertionRoute(data: DataTransfer, editor: LexicalEditor): "lexical" | "html" | "plain" {
  const lexicalString = data.getData(LEXICAL_CLIPBOARD_TYPE);
  if (lexicalString) {
    try {
      const payload: unknown = JSON.parse(lexicalString);
      if (
        payload &&
        typeof payload === "object" &&
        "namespace" in payload &&
        "nodes" in payload &&
        payload.namespace === editor._config.namespace &&
        Array.isArray(payload.nodes)
      )
        return "lexical";
    } catch {
      // Unreadable: Lexical falls through to html and plain text too.
    }
  }
  const html = data.getData("text/html");
  // Lexical skips html identical to the plain text.
  return html && html !== data.getData("text/plain") ? "html" : "plain";
}

/**
 * `html` without its marker glyphs (see {@link removeMarkerGlyphElements}), or `undefined` when it
 * holds none.
 */
function htmlWithoutMarkerGlyphs(html: string): string | undefined {
  const dom = new DOMParser().parseFromString(html, "text/html");
  return removeMarkerGlyphElements(dom) ? dom.documentElement.outerHTML : undefined;
}

/**
 * Plain text as protected structure inserts it, in the paragraph at the caret: each run of line
 * breaks becomes one space, except a trailing one, which goes, since under protection it would
 * only split the paragraph; and each tab becomes a space.
 */
function joinLines(text: string): string {
  return text
    .replace(/[\r\n]+$/, "")
    .replace(/[\r\n]+/g, " ")
    .replace(/\t/g, " ");
}

/**
 * Keeps text a hidden-marker view cannot store out of every paste, drop and keystroke: each `\` and
 * each `//` goes and the rest goes in (see {@link removeUnstorableText}), and the host is told once
 * per paste, drop or refused keystroke through `onRemoved`. A paste or drop left with nothing to
 * insert changes nothing. A delete that would make a `//` out of two `/` is refused (below).
 *
 * Covers each route Lexical inserts by: a node copy from an editor of this namespace and html
 * (through `SELECTION_INSERT_CLIPBOARD_NODES_COMMAND`), and plain text, pasted (`PASTE_COMMAND`) or
 * dropped (`CONTROLLED_TEXT_INSERTION_COMMAND` with an `insertFromDrop` event). Under `"protected"`
 * structure, `StructureKeyboardPlugin` inserts html pastes and drops itself; give it
 * {@link $filterUnstorablePastedNodes} as its `$filterPastedNodes` to cover those too.
 *
 * Html pasted or dropped loses every marker glyph element (`data-text-type="marker"`) before it is
 * parsed, as protected structure's sanitizer drops them: a glyph is presentation, and parsed back
 * it would be marker text. A node copy is not touched.
 *
 * Typing a `\` is refused, and so is typing a `/` that would touch a `/` beside it (over a
 * selection, one outside it); a lone `/` goes in. A keystroke is refused at its `keydown`
 * (`KEY_DOWN_COMMAND`; a shortcut chord such as Ctrl+/ is let through), so the browser never
 * inputs it. Typed text that arrives without a `keydown` — a virtual keyboard, autocorrect or a
 * spelling replacement — is filtered on its way in, whichever route carries it:
 * `CONTROLLED_TEXT_INSERTION_COMMAND` (a string, or an `insertReplacementText` or `insertFromYank`
 * event), or a `beforeinput` `insertText` the browser would apply to the DOM itself, which is
 * claimed in the capture phase ahead of Lexical's own listener and inserted through the command.
 * Text that loses a character still puts in the rest, and is reported once. Text being composed by
 * an input method is not filtered, so a `\` or `//` an IME commits goes in.
 *
 * Under `"protected"` structure a plain-text paste or drop goes into the paragraph at the caret,
 * its lines joined by one space each, as protected structure's html route joins paragraphs:
 * Lexical would otherwise make each line a paragraph of its own.
 *
 * A delete is refused, and reported with `source: "deletion"`, when what it leaves would put a `/`
 * against a `/` it was not already touching (see {@link $deletionJoinsSlashes}): Backspace, Delete
 * and their word and line chords at the keystroke (`KEY_DOWN_COMMAND`, at `CRITICAL`, ahead of
 * guarded structure's arming press and the hidden-content question), the same deletes without one
 * (`DELETE_CHARACTER_COMMAND`, `DELETE_WORD_COMMAND`, `DELETE_LINE_COMMAND`), a cut, and the removal
 * half of a drag-move (`REMOVE_TEXT_COMMAND`); a paragraph join and a selected paragraph marker
 * among them. A word or line delete is judged by the extent the browser's `Selection.modify` gives,
 * so where there is none it is not judged. A delete protected structure refuses outright is left to
 * that refusal, and a composition's deletes are not judged.
 *
 * @param structureProtectionMode - The editor's structure protection.
 * @param onRemoved - Told once per paste, drop or keystroke that lost or refused unstorable text,
 *   and once per refused delete.
 * @param logger - Where each removal is logged, at `info`.
 * @returns `null`. This plugin has no DOM presence.
 */
export function UnstorableTextPlugin({
  structureProtectionMode = "off",
  onRemoved,
  logger,
}: {
  structureProtectionMode?: StructureProtectionMode;
  onRemoved?: UnstorableTextRemovedHandler;
  logger?: LoggerBasic;
}): null {
  const [editor] = useLexicalComposerContext();
  // Refs, so a host handing fresh props each render does not re-register every command (which
  // would move this plugin's handlers to the end of their priority and flip same-priority ties).
  const structureProtectionModeRef = useRef(structureProtectionMode);
  const onRemovedRef = useRef(onRemoved);
  const loggerRef = useRef(logger);
  useEffect(() => {
    structureProtectionModeRef.current = structureProtectionMode;
    onRemovedRef.current = onRemoved;
    loggerRef.current = logger;
  }, [structureProtectionMode, onRemoved, logger]);

  useEffect(() => {
    // Set while a drop that Lexical inserts as nodes is being inserted: its nodes reach
    // `SELECTION_INSERT_CLIPBOARD_NODES_COMMAND` from the same, synchronous dispatch, which is over
    // by the next microtask. This relies on Lexical dispatching that insertion synchronously.
    let isDropping = false;
    // Set while typed text that lost unstorable characters goes in, so what is left is not
    // filtered, or reported, again.
    let isInsertingFiltered = false;
    // Set while html that lost its marker glyphs goes in, so nodes left with nothing to insert
    // change nothing, as a filtered paste left with nothing does.
    let isInsertingWithoutGlyphs = false;

    /**
     * Filters typed `text` at the selection. When it loses anything, puts in what is left, reports
     * the loss, and returns `true`; otherwise returns `false`, leaving the insertion to Lexical.
     */
    const $insertTypedText = (text: string): boolean => {
      const filtered = $filterTypedText(text);
      if (filtered.removed.length === 0) return false;
      if (filtered.text) {
        isInsertingFiltered = true;
        try {
          editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, filtered.text);
        } finally {
          isInsertingFiltered = false;
        }
      }
      reportRemoved(
        { source: "typing", removed: filtered.removed },
        onRemovedRef.current,
        loggerRef.current,
      );
      return true;
    };

    /** A `beforeinput` the browser would apply itself, without telling Lexical in a command. */
    const onBeforeInput = (event: InputEvent) => {
      if (event.inputType !== "insertText" || !editor.isEditable() || editor.isComposing()) return;
      const text = event.data ?? event.dataTransfer?.getData("text/plain");
      // The test comes first because `editor.read` commits pending updates, which ordinary typing
      // should not pay for on every keystroke.
      if (!text || !/[\\/]/.test(text)) return;
      if (editor.read(() => $filterTypedText(text)).removed.length === 0) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, text);
    };

    /**
     * Inserts a plain-text paste or drop itself when it needs filtering, or line breaks joining
     * under protected structure. Returns whether it did; otherwise Lexical's own insertion runs.
     */
    const $insertPlainTransfer = (
      data: DataTransfer,
      source: UnstorableTextRemoved["source"],
    ): boolean => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection) || insertionRoute(data, editor) !== "plain") return false;
      const text = data.getData("text/plain") || data.getData("text/uri-list");
      if (!text) return false;
      const joinsLines = structureProtectionModeRef.current === "protected" && /[\r\n]/.test(text);
      const { before, after } = $textAroundSelection(selection);
      const filtered = removeUnstorableText(joinsLines ? joinLines(text) : text, before, after);
      if (filtered.removed.length === 0 && !joinsLines) return false;
      if (source === "paste") $addUpdateTag(PASTE_TAG);
      if (filtered.text) {
        // Lexical reads only `getData` from the transfer, and finds no flavor here but plain text,
        // so its own plain-text insertion runs on the filtered text; a real `DataTransfer` cannot
        // be constructed everywhere this runs.
        const plainOnly = {
          getData: (type: string) => (type === "text/plain" ? filtered.text : ""),
        } as Pick<DataTransfer, "getData"> as DataTransfer;
        $insertDataTransferForRichText(plainOnly, selection, editor);
      }
      if (filtered.removed.length > 0)
        reportRemoved(
          { source, removed: filtered.removed },
          onRemovedRef.current,
          loggerRef.current,
        );
      return true;
    };

    /**
     * Inserts an html paste or drop itself, without its marker glyphs, when its html holds any: a
     * glyph is presentation, so it would otherwise go in as marker text such as `\q1 `, which the
     * filter would then leave as `q1 `. The browser's own serialization of a drag-move across a
     * paragraph break carries the next paragraph's gutter glyph, and a Markers-view copy carries
     * every marker as one. Returns whether it inserted; otherwise Lexical's own insertion runs.
     */
    const $insertHtmlWithoutGlyphs = (
      data: DataTransfer,
      source: UnstorableTextRemoved["source"],
    ): boolean => {
      const selection = $getSelection();
      if (!selection || insertionRoute(data, editor) !== "html") return false;
      const html = htmlWithoutMarkerGlyphs(data.getData("text/html"));
      if (html === undefined) return false;
      if (source === "paste") $addUpdateTag(PASTE_TAG);
      // As for plain text above: Lexical reads only `getData`, and finds the same flavors as
      // before but for the html.
      const withoutGlyphs = {
        getData: (type: string) => (type === "text/html" ? html : data.getData(type)),
      } as Pick<DataTransfer, "getData"> as DataTransfer;
      isInsertingWithoutGlyphs = true;
      try {
        $insertDataTransferForRichText(withoutGlyphs, selection, editor);
      } finally {
        isInsertingWithoutGlyphs = false;
      }
      return true;
    };

    /**
     * What a word or line delete from the caret `selection` would remove, measured as Lexical's own
     * delete measures it, by extending a copy of the selection with the browser's
     * `Selection.modify`; `undefined` where it reaches nothing or the browser cannot measure.
     *
     * Mutating: it moves the DOM selection and marks `selection` dirty, as
     * `HiddenContentDeleteGuardPlugin` does measuring the same extent.
     */
    const $measureExtent = (
      selection: RangeSelection,
      isBackward: boolean,
      granularity: "word" | "line",
    ): RangeSelection | undefined => {
      const domSelection = editor.getRootElement()?.ownerDocument.defaultView?.getSelection();
      if (!domSelection || typeof domSelection.modify !== "function") return undefined;
      const probe = selection.clone();
      // Dirty makes `modify` start from the probe's own points rather than the DOM's.
      probe.dirty = true;
      probe.modify("extend", isBackward, granularity === "line" ? "lineboundary" : "word");
      // The probe moved the DOM selection; dirty makes the delete's own `modify` start from the
      // live caret again.
      selection.dirty = true;
      return probe.isCollapsed() ? undefined : probe;
    };

    /**
     * What a delete of `granularity` from the current selection would remove. Empty where it
     * removes nothing this plugin judges, and where protected structure refuses the delete outright,
     * so that the user meets that refusal rather than this one.
     */
    const $deletionsAtSelection = (
      isBackward: boolean,
      granularity: DeleteGranularity,
    ): JudgedDeletion[] => {
      const selection = $getSelection();
      if (!selection) return [];
      const isProtected = structureProtectionModeRef.current === "protected";
      const intent = isBackward ? "deleteBackward" : "deleteForward";
      if (isProtected && $shouldBlockStructuralEdit(selection, intent)) return [];
      if ($isNodeSelection(selection)) {
        // A selected paragraph marker goes by joining its paragraph to the one before, which
        // protected structure refuses.
        const para = $getSelectedParaMarkerPara(selection);
        if (para) {
          const previous = para.getPreviousSibling();
          return !isProtected && $isParaLikeNode(previous)
            ? [{ kind: "join", first: previous, second: para }]
            : [];
        }
        return selection.getNodes().flatMap((node): JudgedDeletion[] => {
          const parent = node.getParent();
          if (!parent) return [];
          const index = node.getIndexWithinParent();
          const around = $createRangeSelection();
          around.anchor.set(parent.getKey(), index, "element");
          around.focus.set(parent.getKey(), index + 1, "element");
          return [rangeDeletion(around)];
        });
      }
      if (!$isRangeSelection(selection)) return [];
      if (!selection.isCollapsed()) return [rangeDeletion(selection)];
      if (granularity === "character")
        return [{ kind: "character", caret: selection.anchor, isBackward }];
      const extent = $measureExtent(selection, isBackward, granularity);
      if (!extent || (isProtected && $shouldRefuseExtendedDelete(extent))) return [];
      return [rangeDeletion(extent)];
    };

    /** Whether a delete is this plugin's to judge: not in a read-only editor or an IME composition. */
    const isJudgingDeletes = () => editor.isEditable() && !editor.isComposing();

    /**
     * Refuses `deletions` when what they leave would put a `/` against another `/`, and reports the
     * refusal. Returns whether it refused.
     */
    const $refuseSlashJoin = (deletions: JudgedDeletion[]): boolean => {
      if (!deletions.some($deletionJoinsSlashes)) return false;
      reportRemoved(
        { source: "deletion", removed: ["//"] },
        onRemovedRef.current,
        loggerRef.current,
      );
      return true;
    };

    /** A `DELETE_*_COMMAND` handler, judging the delete at `granularity`. */
    const onDeleteCommand = (granularity: DeleteGranularity) => (isBackward: boolean) =>
      isJudgingDeletes() && $refuseSlashJoin($deletionsAtSelection(isBackward, granularity));

    /** A cut, or the removal half of a drag-move: the selection goes as it stands. */
    const $onSelectionRemoval = (event: Event | null): boolean => {
      if (!isJudgingDeletes()) return false;
      const selection = $getSelection();
      if (!$isRangeSelection(selection) || selection.isCollapsed()) return false;
      if (!$refuseSlashJoin([rangeDeletion(selection)])) return false;
      event?.preventDefault();
      return true;
    };

    const deleteCommands: [LexicalCommand<boolean>, DeleteGranularity][] = [
      [DELETE_CHARACTER_COMMAND, "character"],
      [DELETE_WORD_COMMAND, "word"],
      [DELETE_LINE_COMMAND, "line"],
    ];

    return mergeRegister(
      editor.registerCommand(
        SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
        ({ nodes, selection }) => {
          const removed = $filterUnstorablePastedNodes(
            nodes,
            selection,
            isDropping ? "drop" : "paste",
            onRemovedRef.current,
            loggerRef.current,
          );
          // Claimed only when nothing is left: inserting nothing over a selection would delete it.
          return (removed.length > 0 || isInsertingWithoutGlyphs) && $insertsNothing(nodes);
        },
        // Critical, so a handler that does insert the nodes cannot insert them unfiltered.
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(
        PASTE_COMMAND,
        (event: PasteCommandType) => {
          const data = "clipboardData" in event ? event.clipboardData : null;
          if (!data) return false;
          if (!$insertPlainTransfer(data, "paste") && !$insertHtmlWithoutGlyphs(data, "paste"))
            return false;
          event.preventDefault();
          return true;
        },
        // Below the guards that refuse a paste outright, and below protected structure's
        // sanitizer, which takes html pastes first.
        COMMAND_PRIORITY_NORMAL,
      ),
      editor.registerCommand(
        CONTROLLED_TEXT_INSERTION_COMMAND,
        (payload) => {
          if (typeof payload === "string" || payload.inputType !== "insertFromDrop") return false;
          const data = payload.dataTransfer;
          if (!data) return false;
          if ($insertPlainTransfer(data, "drop")) return true;
          isDropping = true;
          queueMicrotask(() => {
            isDropping = false;
          });
          return $insertHtmlWithoutGlyphs(data, "drop");
        },
        // Below the guards that refuse an insertion outright (several at HIGH), above Lexical's own.
        COMMAND_PRIORITY_NORMAL,
      ),
      editor.registerCommand(
        KEY_DOWN_COMMAND,
        (event: KeyboardEvent) => {
          if (event.key !== "\\" && event.key !== "/") return false;
          if (isShortcutChord(event) || event.isComposing || editor.isComposing()) return false;
          const { removed } = $filterTypedText(event.key);
          if (removed.length === 0) return false;
          event.preventDefault();
          reportRemoved({ source: "typing", removed }, onRemovedRef.current, loggerRef.current);
          return true;
        },
        COMMAND_PRIORITY_NORMAL,
      ),
      editor.registerCommand(
        CONTROLLED_TEXT_INSERTION_COMMAND,
        (payload) => {
          if (isInsertingFiltered || editor.isComposing()) return false;
          const text =
            typeof payload === "string"
              ? payload
              : payload.inputType === "insertReplacementText" ||
                  payload.inputType === "insertFromYank"
                ? (payload.data ?? payload.dataTransfer?.getData("text/plain"))
                : undefined;
          return !!text && $insertTypedText(text);
        },
        // Critical, so no handler that inserts typed text can insert it unfiltered.
        COMMAND_PRIORITY_CRITICAL,
      ),
      // Every delete keystroke, judged before anything acts on it: protected structure's refusal,
      // guarded structure's first press (which arms a join the second press carries out), the
      // hidden-content question and the paragraph-marker merge all come after this.
      editor.registerCommand(
        KEY_DOWN_COMMAND,
        (event: KeyboardEvent) => {
          const chord = deleteChordOf(event);
          if (!chord || event.isComposing || !isJudgingDeletes()) return false;
          const isBackward = chord.direction === "backward";
          if (!$refuseSlashJoin($deletionsAtSelection(isBackward, chord.granularity))) return false;
          event.preventDefault();
          return true;
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
      // A delete that arrives without a keystroke: a `beforeinput` delete, a menu, a replay.
      ...deleteCommands.map(([command, granularity]) =>
        editor.registerCommand(command, onDeleteCommand(granularity), COMMAND_PRIORITY_CRITICAL),
      ),
      // HIGH: after the guards that narrow or refuse a cut (CRITICAL; a copy limit shortens it),
      // ahead of the copy that performs it (NORMAL).
      editor.registerCommand(CUT_COMMAND, $onSelectionRemoval, COMMAND_PRIORITY_HIGH),
      // A drag-move's removal of its source (`deleteByDrag`), after the guards that narrow it and
      // ahead of Lexical's own. The drop's insertion is an input event of its own, so a refused
      // removal leaves the dragged text in both places rather than losing any. A composition's
      // removal is left alone, as composed text is.
      editor.registerCommand(
        REMOVE_TEXT_COMMAND,
        (event: InputEvent | null) =>
          event?.inputType !== "deleteByComposition" && $onSelectionRemoval(event),
        COMMAND_PRIORITY_HIGH,
      ),
      editor.registerRootListener((root, previousRoot) => {
        previousRoot?.removeEventListener("beforeinput", onBeforeInput, true);
        root?.addEventListener("beforeinput", onBeforeInput, true);
      }),
      () => editor.getRootElement()?.removeEventListener("beforeinput", onBeforeInput, true),
    );
  }, [editor]);

  return null;
}
