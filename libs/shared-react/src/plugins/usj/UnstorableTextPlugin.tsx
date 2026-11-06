import {
  $chapterLineToSplitAt,
  $isFirstChapterLine,
  $lineToJoinBeforeChapter,
  $pasteAroundChapterLine,
  $removeBookAndChapterLines,
  $removeTextKeepingBookAndChapterLines,
  $selectionSpansBookOrChapterLine,
  $takeStartsMidParagraph,
} from "./bookAndChapterLines.utils";
import {
  $nodesFromNodeCopy,
  HIDDEN_VIEW_CLIPBOARD_NAMESPACE,
  nodeCopyIn,
  removeMarkerGlyphElements,
  withoutMarkerTokens,
  withoutNodeCopy,
} from "./clipboard.utils";
import { $selectionAtDropPoint } from "./dropPoint.utils";
import { DeleteGranularity, deleteChordOf } from "./HiddenContentDeleteGuardPlugin";
import { $probeDeleteExtent } from "./hiddenContentDelete.utils";
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
  $transposeJoinsSlashes,
  JudgedDeletion,
  removeUnstorableText,
} from "./unstorableText.utils";
import { $insertDataTransferForRichText, $insertGeneratedNodes } from "@lexical/clipboard";
import { $generateNodesFromDOM } from "@lexical/html";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $findMatchingParent, IS_APPLE, mergeRegister } from "@lexical/utils";
import {
  $addUpdateTag,
  $createRangeSelection,
  $getSelection,
  $isNodeSelection,
  $isRangeSelection,
  $setSelection,
  BaseSelection,
  CommandListener,
  CommandListenerPriority,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_HIGH,
  COMMAND_PRIORITY_NORMAL,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  CUT_COMMAND,
  DELETE_CHARACTER_COMMAND,
  DELETE_LINE_COMMAND,
  DELETE_WORD_COMMAND,
  DROP_COMMAND,
  isDOMNode,
  isHTMLElement,
  isSelectionCapturedInDecoratorInput,
  KEY_DOWN_COMMAND,
  LexicalCommand,
  LexicalNode,
  PASTE_COMMAND,
  PASTE_TAG,
  PasteCommandType,
  PointType,
  RangeSelection,
  REMOVE_TEXT_COMMAND,
  SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
} from "lexical";
import { useEffect, useRef } from "react";
import { $getSelectedParaMarkerPara, $isBookNode, $isParaLikeNode, LoggerBasic } from "shared";

/** Logs and reports one removal. */
function reportRemoved(
  event: UnstorableTextRemoved,
  onRemoved: UnstorableTextRemovedHandler | undefined,
  logger: LoggerBasic | undefined,
): void {
  if (event.source === "deletion")
    logger?.info("UnstorableTextPlugin: refused a deletion that would join two / into //.");
  else if (event.source === "move")
    logger?.info(
      `UnstorableTextPlugin: refused a drag-move whose drop would remove ${event.removed.join(" and ")}.`,
    );
  else {
    const from = event.source === "typing" ? "typed text" : `a ${event.source}`;
    logger?.info(`UnstorableTextPlugin: removed ${event.removed.join(" and ")} from ${from}.`);
  }
  onRemoved?.(event);
}

/**
 * Removes unstorable text (`\` and `//`, see {@link removeUnstorableText}) from nodes about to be
 * pasted or dropped at `selection`, and reports the removal once. For code that inserts pasted
 * nodes itself instead of through `SELECTION_INSERT_CLIPBOARD_NODES_COMMAND`, and for
 * `StructureKeyboardPlugin`'s protected-structure sanitizer: it inserts through that command, but
 * for a drop as well as a paste, and only a filter given the source reports a drop as one.
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
 * The flavor `data` is inserted from in a hidden-marker view: a node copy from a hidden-marker view
 * ({@link HIDDEN_VIEW_CLIPBOARD_NAMESPACE}) first, then html, then plain text, as Lexical's
 * `$insertDataTransferForRichText` picks once any other node copy is hidden from it
 * ({@link withoutNodeCopy}).
 */
function insertionRoute(data: DataTransfer): "lexical" | "html" | "plain" {
  if (nodeCopyIn(data, HIDDEN_VIEW_CLIPBOARD_NAMESPACE)) return "lexical";
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
 * Whether `event`, a drop, is a copy rather than a move: the key the browser copies on is held
 * (Option on macOS, Ctrl elsewhere), so it removes nothing from where the drag started.
 */
function isCopyDrop(event: DragEvent): boolean {
  return IS_APPLE ? event.altKey : event.ctrlKey;
}

/**
 * Whether `node`, where a drag started, is in editable content, which a drop elsewhere in the same
 * document moves rather than copies: the browser removes the dragged text from there.
 */
function isInEditableContent(node: Node): boolean {
  const element = isHTMLElement(node) ? node : node.parentElement;
  return isHTMLElement(element) && element.isContentEditable;
}

/**
 * Whether points `a` and `b` are the same place in the text: equal, or one at the end of a text
 * node and the other at the start of the text node right after it.
 */
function $isSamePlace(a: PointType, b: PointType): boolean {
  if (a.is(b)) return true;
  const [first, second] = a.isBefore(b) ? [a, b] : [b, a];
  if (first.type !== "text" || second.type !== "text" || second.offset !== 0) return false;
  const node = first.getNode();
  return (
    first.offset === node.getTextContentSize() &&
    (node.getNextSibling()?.is(second.getNode()) ?? false)
  );
}

/**
 * Whether `caret` is inside `range` or at either of its ends, where dropping what `range` holds
 * puts it back where it was. Not at an end that only a paragraph break or other content separates
 * it from.
 */
function $isAtOrInside(caret: PointType, range: RangeSelection): boolean {
  const [start, end] = range.isBackward()
    ? [range.focus, range.anchor]
    : [range.anchor, range.focus];
  return (
    (!caret.isBefore(start) && !end.isBefore(caret)) ||
    $isSamePlace(caret, start) ||
    $isSamePlace(caret, end)
  );
}

/**
 * Plain text as it goes into one paragraph, where its lines cannot split it (protected structure,
 * the `\id` line): each tab becomes a space, and each run of line breaks one space, or nothing
 * where whitespace is already beside it — in the text, or in the document at the caret (`before`,
 * `after`). A run at the text's start or end is judged the same way, so it neither joins the
 * pasted text to a word at the caret nor doubles a space there. With nothing stored beside it (a
 * paragraph's edge, a span's edge), a run is still a space: the text there may be a word.
 */
function joinLines(text: string, before: string, after: string): string {
  return text.replace(/\t/g, " ").replace(/[\r\n]+/g, (run, offset: number, whole: string) => {
    const previous = offset > 0 ? whole[offset - 1] : before;
    const next = offset + run.length < whole.length ? whole[offset + run.length] : after;
    return /\s/.test(previous) || /\s/.test(next) ? "" : " ";
  });
}

/**
 * Keeps text a hidden-marker view cannot store out of every paste, drop and keystroke: each `\` and
 * each `//` goes and the rest goes in (see {@link removeUnstorableText}), and the host is told once
 * per paste, drop or refused keystroke through `onRemoved`. A paste or drop left with nothing to
 * insert changes nothing. A delete that would make a `//` out of two `/` is refused, and so is a
 * drag-move that would lose a character where it lands (below).
 *
 * Reads a node copy (`application/x-lexical-editor`, or an attribute of the html: see
 * {@link nodeCopyIn}) only from a hidden-marker view, which tags it
 * {@link HIDDEN_VIEW_CLIPBOARD_NAMESPACE}: pasted, it goes in exactly as copied, attributes, notes
 * and figures included. A node copy from any other view, such as Standard view, whose node shapes
 * differ, is passed over for its html or plain text. A copy from a view that shows markers, known by
 * that node copy or by a mark on its html, is USFM, so its marker tokens go first
 * ({@link withoutMarkerTokens}), unreported: they are markup, not text the user was asked to type. A
 * `\` in any other paste could be anything, so it goes alone, and is reported.
 *
 * Covers each route a paste or drop inserts by: a node copy and html (through
 * `SELECTION_INSERT_CLIPBOARD_NODES_COMMAND`), and plain text, pasted (`PASTE_COMMAND`) or dropped
 * (`CONTROLLED_TEXT_INSERTION_COMMAND` with an `insertFromDrop` event). Under `"protected"`
 * structure, `StructureKeyboardPlugin` takes node copies, html pastes and drops first and inserts
 * them through that command too; give it {@link $filterUnstorablePastedNodes} as its
 * `$filterPastedNodes` so a drop it inserts is reported as a drop.
 *
 * Html pasted or dropped loses every marker glyph element (`data-text-type="marker"`) before it is
 * parsed, as protected structure's sanitizer drops them: a glyph is presentation, and parsed back
 * it would be marker text. A node copy is not touched.
 *
 * No paste or drop inserts a book (`\id`) or chapter line, from a node copy or from html
 * ({@link $removeBookAndChapterLines}): the chapter document has its own, and a copy of Select All
 * carries both. Such a copy splits around the document's chapter line only over a selection that
 * held that line or from a caret right beside it ({@link $chapterLineToSplitAt}): what it held
 * before its chapter line, chapter 1's front matter, goes before the document's, and the rest after
 * ({@link $pasteAroundChapterLine}); in a chapter other than chapter 1, that front matter goes after
 * the chapter line with the rest. A copy that starts partway into its first paragraph joins that
 * paragraph to the line a paste that did not split would have joined it to
 * ({@link $lineToJoinBeforeChapter}). Any other paste puts it all at the caret. A paste over a
 * selection that runs across a book or chapter line keeps it, and replaces the rest of the
 * selection ({@link $removeTextKeepingBookAndChapterLines}), whichever flavor it inserts; what has
 * no front matter of its own (plain text, another program's html) goes after the chapter line.
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
 * an input method is not filtered, so a `\` or `//` an IME commits goes in. A transpose (macOS
 * Ctrl+T, a `beforeinput` `insertTranspose`) that would put a `/` against a `/` is refused, and
 * reported as typing.
 *
 * Under `"protected"` structure, and on the `\id` line in any, a plain-text paste or drop goes into
 * the paragraph at the caret, its lines joined by a space, as protected structure's html route joins
 * paragraphs: Lexical would otherwise make each line a paragraph of its own, and on the `\id` line
 * run them together. A line break at either end, or beside a space, adds no second space and joins
 * no two words ({@link joinLines}).
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
 * A drag-move whose text would lose a character where it is dropped (a `/` landing against a `/`,
 * or against an optional line break) is refused whole at its drop (`DROP_COMMAND`), and reported
 * with `source: "move"`: the browser removes the dragged text before it inserts it, and the filter
 * above would then leave that character out, so it would be gone from both places. The drop is
 * judged as its insertion will be, at the place the drop lands ({@link $selectionAtDropPoint}), and
 * a drop at or inside what was dragged, which puts it back as it was, is not judged. A drag is a
 * move when it started in editable content of the editor's document (this editor or another) and
 * the copy key (Ctrl; Option on macOS) is not held; a copy-drop, and a drop from another document
 * or program, remove nothing, so they are only filtered.
 *
 * Mount it whatever the view, and say with `isEnabled` whether it acts: its handlers are
 * registered once, so a view that starts or stops hiding markers leaves them where they are among
 * the other plugins' handlers of the same priority, which run in the order they were registered.
 *
 * @param isEnabled - Whether it acts: only in a view that hides markers, since a view that shows
 *   them needs a typed or pasted `\`. Asked on each command and event. Defaults to `true`.
 * @param structureProtectionMode - The editor's structure protection.
 * @param onRemoved - Told once per paste, drop or keystroke that lost or refused unstorable text
 *   (a refused transpose among them), and once per refused delete or drag-move.
 * @param logger - Where each removal is logged, at `info`.
 * @returns `null`. This plugin has no DOM presence.
 */
export function UnstorableTextPlugin({
  isEnabled = true,
  structureProtectionMode = "off",
  onRemoved,
  logger,
}: {
  isEnabled?: boolean;
  structureProtectionMode?: StructureProtectionMode;
  onRemoved?: UnstorableTextRemovedHandler;
  logger?: LoggerBasic;
}): null {
  const [editor] = useLexicalComposerContext();
  // Refs, so a host handing fresh props each render does not re-register every command (which
  // would move this plugin's handlers to the end of their priority and flip same-priority ties).
  const isEnabledRef = useRef(isEnabled);
  const structureProtectionModeRef = useRef(structureProtectionMode);
  const onRemovedRef = useRef(onRemoved);
  const loggerRef = useRef(logger);
  useEffect(() => {
    isEnabledRef.current = isEnabled;
    structureProtectionModeRef.current = structureProtectionMode;
    onRemovedRef.current = onRemoved;
    loggerRef.current = logger;
  }, [isEnabled, structureProtectionMode, onRemoved, logger]);

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
    // The `dragstart` of the drag under way in the editor's document, until it is dropped or ends:
    // a drop knows from it whether the browser removes what was dragged before inserting it.
    let dragStart: DragEvent | undefined;
    const onDragStart = (event: DragEvent) => {
      dragStart = event;
    };
    const onDragFinished = () => {
      dragStart = undefined;
    };

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

    /**
     * Refuses a transpose (macOS Ctrl+T) that would put a `/` against a `/` (see
     * {@link $transposeJoinsSlashes}), and reports it as a refused keystroke. The browser selects
     * the two characters before it asks, so the caret is put back where it was.
     */
    const onTranspose = (event: InputEvent) => {
      const caret = editor.read(() => {
        const selection = $getSelection();
        return $isRangeSelection(selection) && $transposeJoinsSlashes(selection)
          ? selection.clone()
          : undefined;
      });
      if (!caret) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      editor.update(() => $setSelection(caret));
      reportRemoved({ source: "typing", removed: ["//"] }, onRemovedRef.current, loggerRef.current);
    };

    /** A `beforeinput` the browser would apply itself, without telling Lexical in a command. */
    const onBeforeInput = (event: InputEvent) => {
      if (!isEnabledRef.current || !editor.isEditable() || editor.isComposing()) return;
      if (event.inputType === "insertTranspose") {
        onTranspose(event);
        return;
      }
      if (event.inputType !== "insertText") return;
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
     * How `data` goes in at `selection` when a paste or drop inserts it by its plain text: the text
     * as it is inserted and what that left out (`filtered`), and whether its lines are joined into
     * one paragraph (under protected structure, or on the `\id` line), the selection keeps a book
     * or chapter line it covers, and the text holds a lone carriage return (an old Mac line ending).
     * `undefined` when `data` goes in by another flavor, or holds no text.
     *
     * Read-only: call inside `editor.update()`, an editor read, or a command handler.
     */
    const $plainInsertion = (data: DataTransfer, selection: RangeSelection) => {
      if (insertionRoute(data) !== "plain") return undefined;
      const text = data.getData("text/plain") || data.getData("text/uri-list");
      if (!text) return undefined;
      const keepsLines = $selectionSpansBookOrChapterLine(selection);
      // A selection that keeps the book line puts the text after the chapter line instead; any
      // other selection touching the book line lies wholly inside it.
      const joinsLines =
        /[\r\n]/.test(text) &&
        (structureProtectionModeRef.current === "protected" ||
          (!keepsLines && !!$findMatchingParent(selection.anchor.getNode(), $isBookNode)));
      const hasLoneReturn = /\r(?!\n)/.test(text);
      const { before, after } = $textAroundSelection(selection);
      const lines = hasLoneReturn ? text.replace(/\r(?!\n)/g, "\n") : text;
      const filtered = removeUnstorableText(
        joinsLines ? joinLines(lines, before, after) : lines,
        before,
        after,
      );
      return { filtered, joinsLines, keepsLines, hasLoneReturn };
    };

    /**
     * Inserts a plain-text paste or drop itself when it needs filtering, line breaks joining (under
     * protected structure, or on the `\id` line), or a lone carriage return reading as the line
     * break it is: Lexical's own insertion splits only at `\n` and `\r\n`, and leaves a lone `\r`
     * in the text. Returns whether it did; otherwise Lexical's own insertion runs.
     */
    const $insertPlainTransfer = (
      data: DataTransfer,
      source: UnstorableTextRemoved["source"],
    ): boolean => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) return false;
      const insertion = $plainInsertion(data, selection);
      if (!insertion) return false;
      const { filtered, joinsLines, keepsLines, hasLoneReturn } = insertion;
      if (filtered.removed.length === 0 && !joinsLines && !keepsLines && !hasLoneReturn)
        return false;
      if (source === "paste") $addUpdateTag(PASTE_TAG);
      if (filtered.text) {
        if (keepsLines) $removeTextKeepingBookAndChapterLines(selection);
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
      if (!selection || insertionRoute(data) !== "html") return false;
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
     * What a word or line delete from the caret `selection` would remove (see
     * {@link $probeDeleteExtent}); `undefined` where it reaches nothing or the browser cannot
     * measure. Mutating, as that is.
     */
    const $measureExtent = (
      selection: RangeSelection,
      isBackward: boolean,
      granularity: "word" | "line",
    ): RangeSelection | undefined => {
      const probe = $probeDeleteExtent(editor, selection, isBackward, granularity);
      return probe && !probe.isCollapsed() ? probe : undefined;
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

    // Drags are followed across the whole document, so a drag from other editable content there is
    // known for the move it is. A drag ends at its drop as well as at its `dragend`, which never
    // reaches the document when a move removed the element it started on. The drop is cleared in
    // the bubble phase, after the editor's own drop handling has read it.
    const listenForDrags = (document: Document) => {
      document.addEventListener("dragstart", onDragStart, true);
      document.addEventListener("dragend", onDragFinished, true);
      document.addEventListener("drop", onDragFinished);
    };
    const unlistenForDrags = (document: Document) => {
      document.removeEventListener("dragstart", onDragStart, true);
      document.removeEventListener("dragend", onDragFinished, true);
      document.removeEventListener("drop", onDragFinished);
    };

    const deleteCommands: [LexicalCommand<boolean>, DeleteGranularity][] = [
      [DELETE_CHARACTER_COMMAND, "character"],
      [DELETE_WORD_COMMAND, "word"],
      [DELETE_LINE_COMMAND, "line"],
    ];

    /**
     * Inserts a paste or drop itself where a hidden-marker view has to, and returns whether it did;
     * otherwise Lexical's own insertion runs:
     * - a node copy from a hidden-marker view ({@link HIDDEN_VIEW_CLIPBOARD_NAMESPACE}), which
     *   Lexical does not read (its namespace is not the editor's). It goes in as Lexical inserts its
     *   own node copy, through `SELECTION_INSERT_CLIPBOARD_NODES_COMMAND`, so the filter there sees
     *   it;
     * - a transfer with any other node copy — another view's, such as Standard view's (tagged with
     *   the editor's own namespace), or one that makes no nodes ({@link $nodesFromNodeCopy}) — by
     *   its html or plain text, so another view's node shapes are never rebuilt here;
     * - a marker-showing view's copy, known by its node copy or its html's mark, without its marker
     *   tokens ({@link withoutMarkerTokens}), changing nothing if nothing else is left;
     * - plain text or html that the filter or the glyph strip changes.
     */
    const $insertTransfer = (
      transfer: DataTransfer,
      source: UnstorableTextRemoved["source"],
    ): boolean => {
      const selection = $getSelection();
      if (!selection) return false;
      const nodeCopy = nodeCopyIn(transfer, HIDDEN_VIEW_CLIPBOARD_NAMESPACE);
      const nodes = nodeCopy && $nodesFromNodeCopy(nodeCopy, loggerRef.current);
      if (nodes) {
        if (source === "paste") $addUpdateTag(PASTE_TAG);
        $insertGeneratedNodes(editor, nodes, selection);
        return true;
      }
      const stripped = withoutMarkerTokens(transfer);
      if (!stripped) return true;
      const data = withoutNodeCopy(stripped);
      if ($insertPlainTransfer(data, source) || $insertHtmlWithoutGlyphs(data, source)) return true;
      if (data === transfer) return false;
      if (source === "paste") $addUpdateTag(PASTE_TAG);
      $insertDataTransferForRichText(data, selection, editor);
      return true;
    };

    /**
     * What dropping `transfer` at the caret `at` would leave out (see {@link removeUnstorableText}),
     * read as {@link $insertTransfer} and the filter it inserts through read it: by the flavor it
     * goes in by, without the transfer's own book and chapter lines, judged by the document
     * characters at `at`. Empty when nothing would be.
     *
     * Mutating only in that it creates the nodes a node copy or html would insert, which are never
     * attached, so the update discards them: call inside `editor.update()` (a command handler runs
     * inside one).
     */
    const $unstorableInDrop = (
      transfer: DataTransfer,
      at: RangeSelection,
    ): UnstorableCharacter[] => {
      const nodeCopy = nodeCopyIn(transfer, HIDDEN_VIEW_CLIPBOARD_NAMESPACE);
      let nodes = nodeCopy && $nodesFromNodeCopy(nodeCopy);
      if (!nodes) {
        const stripped = withoutMarkerTokens(transfer);
        if (!stripped) return [];
        const data = withoutNodeCopy(stripped);
        const plain = $plainInsertion(data, at);
        if (plain) return plain.filtered.removed;
        if (insertionRoute(data) !== "html") return [];
        const dom = new DOMParser().parseFromString(data.getData("text/html"), "text/html");
        removeMarkerGlyphElements(dom);
        nodes = $generateNodesFromDOM(editor, dom);
      }
      $removeBookAndChapterLines(nodes);
      const { before, after } = $textAroundSelection(at);
      return $removeUnstorableTextFromNodes(nodes, before, after);
    };

    /**
     * Where the browser removes what a drop moves, before it inserts it: `"here"`, from this
     * editor; `"elsewhere"`, from other editable content of its document; `undefined` when the drop
     * removes nothing — a copy, a drag from another document or program, or from content no one can
     * edit.
     */
    const dragMoveSource = (event: DragEvent): "here" | "elsewhere" | undefined => {
      const target = dragStart?.target;
      if (!dragStart || dragStart.defaultPrevented || !isDOMNode(target) || isCopyDrop(event))
        return undefined;
      if (editor.getRootElement()?.contains(target)) return "here";
      return isInEditableContent(target) ? "elsewhere" : undefined;
    };

    /**
     * Refuses a drag-move whose text would lose a character where it is dropped (see
     * {@link $unstorableInDrop}), and reports it once: the browser removes the dragged text before
     * it inserts it, and the insertion's filter would then leave that character out, so it would be
     * gone from both places. Refused here, at the drop, nothing is removed. A drop at or inside
     * what was dragged puts it back where it was, so it is not judged.
     */
    const $refuseLossyMove = (event: DragEvent): boolean => {
      const data = event.dataTransfer;
      const source = dragMoveSource(event);
      if (!data || !source || !isJudgingDeletes()) return false;
      const at = $selectionAtDropPoint(editor, event);
      if (!at) return false;
      // At the drop, the selection is still what the drag started from.
      const dragged = $getSelection();
      if (source === "here" && $isRangeSelection(dragged) && $isAtOrInside(at.anchor, dragged))
        return false;
      const removed = $unstorableInDrop(data, at);
      if (removed.length === 0) return false;
      event.preventDefault();
      reportRemoved({ source: "move", removed }, onRemovedRef.current, loggerRef.current);
      return true;
    };

    /** Registers `listener` for `command`, acting only while the plugin is enabled. */
    const register = <P,>(
      command: LexicalCommand<P>,
      listener: CommandListener<P>,
      priority: CommandListenerPriority,
    ) =>
      editor.registerCommand(
        command,
        (payload, commandEditor) => isEnabledRef.current && listener(payload, commandEditor),
        priority,
      );

    return mergeRegister(
      register(
        SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
        ({ nodes, selection }) => {
          const first = nodes[0];
          const startsMidParagraph = $takeStartsMidParagraph(nodes);
          const {
            isRemoved: isLineRemoved,
            holdsChapterLine,
            beforeChapter,
          } = $removeBookAndChapterLines(nodes);
          const removed = $filterUnstorablePastedNodes(
            nodes,
            selection,
            isDropping ? "drop" : "paste",
            onRemovedRef.current,
            loggerRef.current,
          );
          // Claimed only when nothing is left: inserting nothing over a selection would delete it.
          if (
            (removed.length > 0 || isLineRemoved || isInsertingWithoutGlyphs) &&
            $insertsNothing(nodes)
          )
            return true;
          if (!$isRangeSelection(selection)) return false;
          // A copy holding a chapter line splits around the document's, but only over a selection
          // that held it or from a caret right beside it, where the user put it there: anywhere
          // else the whole copy goes in at the caret, as any paste does.
          const chapter = holdsChapterLine ? $chapterLineToSplitAt(selection) : undefined;
          const joinLine =
            chapter && startsMidParagraph
              ? $lineToJoinBeforeChapter(selection, chapter)
              : undefined;
          // Lexical goes on to insert over this same selection, which is collapsed by then.
          if ($selectionSpansBookOrChapterLine(selection))
            $removeTextKeepingBookAndChapterLines(selection);
          if (chapter) {
            // Only chapter 1 has lines before its chapter line; in any other chapter the copy's
            // front matter is more text, and goes after the chapter line with the rest.
            const frontMatter = $isFirstChapterLine(chapter)
              ? beforeChapter.filter((node) => nodes.includes(node))
              : [];
            // Only the copy's own first paragraph started partway in; a book line it started in
            // is gone, and what follows that is whole.
            const joinsFirst = frontMatter[0] === first ? joinLine : undefined;
            if ($pasteAroundChapterLine(nodes, frontMatter, chapter, selection, joinsFirst))
              return true;
          }
          return false;
        },
        // Critical, so a handler that does insert the nodes cannot insert them unfiltered.
        COMMAND_PRIORITY_CRITICAL,
      ),
      register(
        PASTE_COMMAND,
        (event: PasteCommandType) => {
          const data = "clipboardData" in event ? event.clipboardData : null;
          if (!data) return false;
          // A paste into an input inside a decorator is that input's own, as Lexical's paste
          // leaves it.
          if (isDOMNode(event.target) && isSelectionCapturedInDecoratorInput(event.target))
            return false;
          if (!$insertTransfer(data, "paste")) return false;
          event.preventDefault();
          return true;
        },
        // Below the guards that refuse a paste outright, and below protected structure's
        // sanitizer, which takes node copies and html pastes first.
        COMMAND_PRIORITY_NORMAL,
      ),
      // Below the guards that refuse a drop outright, and below protected structure's sanitizer,
      // which inserts a drop itself, removing nothing; above Lexical's own.
      register(DROP_COMMAND, $refuseLossyMove, COMMAND_PRIORITY_NORMAL),
      register(
        CONTROLLED_TEXT_INSERTION_COMMAND,
        (payload) => {
          if (typeof payload === "string" || payload.inputType !== "insertFromDrop") return false;
          const data = payload.dataTransfer;
          if (!data) return false;
          isDropping = true;
          queueMicrotask(() => {
            isDropping = false;
          });
          return $insertTransfer(data, "drop");
        },
        // Below the guards that refuse an insertion outright (several at HIGH), above Lexical's own.
        COMMAND_PRIORITY_NORMAL,
      ),
      register(
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
      register(
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
      register(
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
        register(command, onDeleteCommand(granularity), COMMAND_PRIORITY_CRITICAL),
      ),
      // HIGH: after the guards that narrow or refuse a cut (CRITICAL; a copy limit shortens it),
      // ahead of the copy that performs it (NORMAL).
      register(CUT_COMMAND, $onSelectionRemoval, COMMAND_PRIORITY_HIGH),
      // A drag-move's removal of its source (`deleteByDrag`), after the guards that narrow it and
      // ahead of Lexical's own. The drop's insertion is an input event of its own, so a refused
      // removal leaves the dragged text in both places rather than losing any. A composition's
      // removal is left alone, as composed text is.
      register(
        REMOVE_TEXT_COMMAND,
        (event: InputEvent | null) =>
          event?.inputType !== "deleteByComposition" && $onSelectionRemoval(event),
        COMMAND_PRIORITY_HIGH,
      ),
      editor.registerRootListener((root, previousRoot) => {
        previousRoot?.removeEventListener("beforeinput", onBeforeInput, true);
        if (previousRoot) unlistenForDrags(previousRoot.ownerDocument);
        root?.addEventListener("beforeinput", onBeforeInput, true);
        if (root) listenForDrags(root.ownerDocument);
      }),
      () => {
        const root = editor.getRootElement();
        root?.removeEventListener("beforeinput", onBeforeInput, true);
        if (root) unlistenForDrags(root.ownerDocument);
      },
    );
  }, [editor]);

  return null;
}
