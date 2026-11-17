import {
  $selectionSpansBookOrChapterLine,
  $removeBookAndChapterLines,
} from "./bookAndChapterLines.utils";
import { removeMarkerGlyphElements, withoutMarkerTokens } from "./clipboard.utils";
import {
  $nodesFromNodeCopy,
  HIDDEN_VIEW_CLIPBOARD_NAMESPACE,
  nodeCopyIn,
  withoutNodeCopy,
} from "./nodeCopy.utils";
import { UnstorableCharacter } from "./unstorable-text.model";
import {
  $insertsNothing,
  $removeUnstorableTextFromNodes,
  $textAroundSelection,
  removeUnstorableText,
} from "./unstorableText.utils";
import { $generateNodesFromDOM } from "@lexical/html";
import { $findMatchingParent } from "@lexical/utils";
import { LexicalEditor, LexicalNode, RangeSelection } from "lexical";
import { $isNoteNode, $isSomeParaNode } from "shared";

/**
 * What a line break between the characters `previous` and `next` becomes where the paragraph cannot
 * be split: a space, or nothing beside whitespace, which already separates them. With no text on a
 * side (`undefined` or `""`) it is still a space: the text it lands beside may be a word.
 */
export function joiningText(previous: string | undefined, next: string | undefined): string {
  return /\s/.test(previous ?? "") || /\s/.test(next ?? "") ? "" : " ";
}

/**
 * Whether a paragraph break may go at `node`: not under protected structure, and only in a
 * paragraph (`\p`, `\q1`, a line with no marker), outside any note. Where it may not, a pasted or
 * typed line break joins the text either side instead ({@link joiningText}), whichever flavor it
 * came in.
 *
 * Read-only: call inside `editor.getEditorState().read()`, an update, or a command handler.
 */
export function $canSplitAt(node: LexicalNode, isProtected: boolean): boolean {
  return (
    !isProtected &&
    ($isSomeParaNode(node) || !!$findMatchingParent(node, $isSomeParaNode)) &&
    !$isNoteNode(node) &&
    !$findMatchingParent(node, $isNoteNode)
  );
}

/**
 * Plain text as it goes into one paragraph, where its lines cannot split it
 * ({@link $canSplitAt}): each tab becomes a space, and each run of line breaks what
 * {@link joiningText} makes of it, judged by the characters either side — in the text, or in the
 * document at the caret (`before`, `after`) for a run at the text's start or end, so it neither
 * joins the pasted text to a word at the caret nor doubles a space there.
 */
export function joinLines(text: string, before: string, after: string): string {
  return text.replace(/\t/g, " ").replace(/[\r\n]+/g, (run, offset: number, whole: string) => {
    const previous = offset > 0 ? whole[offset - 1] : before;
    const next = offset + run.length < whole.length ? whole[offset + run.length] : after;
    return joiningText(previous, next);
  });
}

/**
 * The flavor `data` is inserted from in a hidden-marker view: a node copy from a hidden-marker view
 * ({@link HIDDEN_VIEW_CLIPBOARD_NAMESPACE}) first, then html, then plain text, as Lexical's
 * `$insertDataTransferForRichText` picks once any other node copy is hidden from it
 * ({@link withoutNodeCopy}).
 */
export function insertionRoute(data: DataTransfer): "lexical" | "html" | "plain" {
  if (nodeCopyIn(data, HIDDEN_VIEW_CLIPBOARD_NAMESPACE)) return "lexical";
  const html = data.getData("text/html");
  // Lexical skips html identical to the plain text.
  return html && html !== data.getData("text/plain") ? "html" : "plain";
}

/**
 * How `data` goes in at `selection` in a hidden-marker view when a paste or drop inserts it by its
 * plain text: the text as it is inserted and what that left out (`filtered`), and whether its lines
 * are joined into one paragraph (where the start of `selection` cannot be split, see
 * {@link $canSplitAt}), the selection keeps a book or chapter line it covers, and the text holds a
 * lone carriage return (an old Mac line ending). `undefined` when `data` goes in by another flavor,
 * or holds no text.
 *
 * Read-only: call inside `editor.update()`, `editor.getEditorState().read()` or a command handler.
 *
 * @param data - The pasted or dropped transfer.
 * @param selection - Where it goes in.
 * @param isProtected - Whether structure is protected.
 */
export function $plainInsertion(
  data: DataTransfer,
  selection: RangeSelection,
  isProtected: boolean,
) {
  if (insertionRoute(data) !== "plain") return undefined;
  const text = data.getData("text/plain") || data.getData("text/uri-list");
  if (!text) return undefined;
  const keepsLines = $selectionSpansBookOrChapterLine(selection);
  // A selection that keeps the book or chapter line puts the text after the chapter line, where it
  // splits as anywhere in the Scripture text.
  const start = selection.isBackward() ? selection.focus : selection.anchor;
  const joinsLines =
    /[\r\n]/.test(text) &&
    (isProtected || (!keepsLines && !$canSplitAt(start.getNode(), isProtected)));
  const hasLoneReturn = /\r(?!\n)/.test(text);
  const { before, after } = $textAroundSelection(selection);
  const lines = hasLoneReturn ? text.replace(/\r(?!\n)/g, "\n") : text;
  const filtered = removeUnstorableText(
    joinsLines ? joinLines(lines, before, after) : lines,
    before,
    after,
  );
  return { filtered, joinsLines, keepsLines, hasLoneReturn };
}

/**
 * What a hidden-marker view's paste or drop of `transfer` at `at` would do, read as
 * `UnstorableTextPlugin` inserts it: by the flavor it goes in by, without its marker tokens and its
 * own book and chapter lines, judged by the document characters at `at`. `removed` is what its
 * filter would leave out ({@link removeUnstorableText}), empty when nothing; `insertsNothing`
 * whether the paste or drop would change nothing: it is claimed with nothing left to insert, so a
 * selection it was to replace stays.
 *
 * Mutating only in that it creates the nodes a node copy or html would insert, which are never
 * attached, so the update discards them: call inside `editor.update()` (a command handler runs
 * inside one).
 *
 * @param editor - The editor the transfer goes into.
 * @param transfer - The pasted or dropped transfer.
 * @param at - Where it goes in.
 * @param isProtected - Whether structure is protected.
 */
export function $predictInsertion(
  editor: LexicalEditor,
  transfer: DataTransfer,
  at: RangeSelection,
  isProtected: boolean,
): { removed: UnstorableCharacter[]; insertsNothing: boolean } {
  const nodeCopy = nodeCopyIn(transfer, HIDDEN_VIEW_CLIPBOARD_NAMESPACE);
  let nodes = nodeCopy && $nodesFromNodeCopy(nodeCopy);
  if (!nodes) {
    const stripped = withoutMarkerTokens(transfer);
    if (!stripped) return { removed: [], insertsNothing: true };
    const data = withoutNodeCopy(stripped);
    const plain = $plainInsertion(data, at, isProtected);
    if (plain) return { removed: plain.filtered.removed, insertsNothing: !plain.filtered.text };
    // An empty transfer goes in as Lexical's own paste of nothing, which still replaces a selection.
    if (insertionRoute(data) !== "html") return { removed: [], insertsNothing: false };
    const dom = new DOMParser().parseFromString(data.getData("text/html"), "text/html");
    removeMarkerGlyphElements(dom);
    nodes = $generateNodesFromDOM(editor, dom);
  }
  const { isRemoved } = $removeBookAndChapterLines(nodes);
  const { before, after } = $textAroundSelection(at);
  const removed = $removeUnstorableTextFromNodes(nodes, before, after);
  // As `UnstorableTextPlugin` decides it: only nodes it took something out of go in as nothing;
  // otherwise Lexical inserts them, replacing a selection.
  return { removed, insertsNothing: (removed.length > 0 || isRemoved) && $insertsNothing(nodes) };
}
