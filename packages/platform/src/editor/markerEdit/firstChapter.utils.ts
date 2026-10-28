/**
 * Starting chapter 1 in a book that has no chapters — the one place a chapter marker is inserted
 * rather than typed. Every other chapter document already carries its own `\c`, and the host's save
 * removes a second one, so nothing here applies to them.
 *
 * Every way of asking for the chapter inserts it the same way: the `\` menu's `\c` pick
 * (`$applyMarkerMenuSelection`), the `\c` marker action (`getUsjMarkerAction`, behind both
 * `EditorRef.insertMarker("c")`, the host's menu outside Standard view, and the editor's own marker
 * menu), and `EditorRef.insertFirstChapter` (the host's "Add chapter number" button, which also
 * wants empty verses).
 */
import usjEditorAdaptor from "../adaptors/usj-editor.adaptor";
import { $dfsIterator } from "@lexical/utils";
import { displayTextToUsj } from "./whitespaceDisplay.utils";
import {
  $getParaTagMarker,
  buildParaStack,
  isParagraphTagValid,
  paraStackAfterChapter,
  replayParaTag,
  toStackEntry,
} from "./markerValidation.utils";
import { MarkerContent, USJ_TYPE, USJ_VERSION } from "@eten-tech-foundation/scripture-utilities";
import { Canon } from "@sillsdev/scripture";
import {
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  $parseSerializedNode,
  LexicalNode,
} from "lexical";
import {
  $findFirstAncestorNoteNode,
  $isBookNode,
  $isDisplayAnnotationCarrier,
  $isImpliedParaNode,
  $isMilestoneNode,
  $isNoteNode,
  $isParaNode,
  $isSomeChapterNode,
  $isUnknownNode,
  defaultStyleInfo,
  StyleInfo,
  ZWSP,
} from "shared";
import { $isSomeVerseNode, hasStandardViewWhitespace, ViewOptions } from "shared-react";

/**
 * Whether the document's book holds chapters. A peripheral book (FRT, INT, BAK, OTH, CNC, GLO,
 * TDX, NDX) never does: it is the extra material outside the Extra books (XXA–XXG), which hold
 * chapters like any other book. The host's book and chapter control draws the same line. A document
 * with no `\id` line names no book, so nothing rules chapters out.
 *
 * Read-only: call inside `editor.getEditorState().read(...)` or an update.
 */
export function $bookHoldsChapters(): boolean {
  const code = $getRoot().getChildren().find($isBookNode)?.getCode();
  return !code || !Canon.isExtraMaterial(code) || Canon.extraBooks().includes(code);
}

/**
 * Whether a chapter marker can be inserted in the document: it is chapter 1 of a book that holds
 * chapters ({@link $bookHoldsChapters}) and holds no chapter yet, as an empty book does. Chapter 0
 * (front matter) never holds one.
 *
 * Read-only: call inside `editor.getEditorState().read(...)` or an update.
 */
export function $canInsertChapter(chapterNum: number | undefined): boolean {
  return (
    chapterNum === 1 && $bookHoldsChapters() && !$getRoot().getChildren().some($isSomeChapterNode)
  );
}

/**
 * Whether a chapter marker can be inserted from where the user is: {@link $canInsertChapter}, and
 * not over a text selection (a chapter does not wrap text) or inside a note (a chapter cannot start
 * in one). The `\` menu and the `\c` marker action ask this, so both refuse the same places; the
 * host's "Add chapter number" button does not act at the selection, so it asks
 * {@link $canInsertChapter} alone.
 *
 * Where the chapter goes does not depend on the selection, so a selected node, such as a paragraph
 * marker, or no selection at all, as after the editor loses focus, does not stop it.
 *
 * Read-only: call inside `editor.getEditorState().read(...)` or an update.
 */
export function $canInsertChapterAtSelection(chapterNum: number | undefined): boolean {
  if (!$canInsertChapter(chapterNum)) return false;
  const selection = $getSelection();
  if ($isRangeSelection(selection))
    return selection.isCollapsed() && !$findFirstAncestorNoteNode(selection.focus.getNode());
  return !selection?.getNodes().some((node) => $findFirstAncestorNoteNode(node));
}

/**
 * The first block of chapter content, which `\c 1` goes before; `undefined` when the document is
 * all front matter.
 *
 * The PT9 paragraph validator decides: chapter content starts at the first paragraph that needs a
 * chapter, one the validator rejects where it stands but accepts right after a `\c`, such as a `\s1`
 * or a `\p`. Everything before it is front matter: the `\id` line, the running header, table of
 * contents, titles and introduction. A front-matter paragraph out of order, such as an `\ie` after
 * an `\imte`, is rejected after a `\c` too, so it stays before the chapter rather than splitting the
 * introduction.
 *
 * The validator cannot place a paragraph the stylesheet does not declare, or one it declares valid
 * anywhere, so those start the chapter content, as does text in no paragraph at all. A `\c` closes
 * the introduction whatever its rank in the stylesheet (see {@link paraStackAfterChapter}).
 */
function $findChapterContentStart(styleInfo: StyleInfo): LexicalNode | undefined {
  const afterChapter = paraStackAfterChapter(styleInfo);
  // Seeded with the `\id` line, so a document without one still starts there.
  const stack = buildParaStack(styleInfo, ["id"]);
  return $getRoot()
    .getChildren()
    .find((child) => {
      if ($isBookNode(child)) return false;
      const marker = $getParaTagMarker(child);
      if (marker === undefined) return true;
      const verdict = replayParaTag(stack, styleInfo, marker);
      const tag = toStackEntry(styleInfo, marker);
      if (!tag || tag.occursUnder.length === 0) return true;
      return verdict === "invalid" && isParagraphTagValid(afterChapter, tag);
    });
}

/**
 * Whether `node` is text of the document: not a display glyph such as a marker or an attribute
 * run (see {@link $isDisplayAnnotationCarrier}), and not only whitespace or the zero-width spaces that
 * hold a caret. Where Standard view shows a no-break space as `~`, that counts as whitespace too,
 * so every view gives the same answer.
 */
function $isDocumentText(node: LexicalNode, viewOptions: ViewOptions | undefined): boolean {
  if (!$isTextNode(node) || $isDisplayAnnotationCarrier(node)) return false;
  const text = hasStandardViewWhitespace(viewOptions)
    ? displayTextToUsj(node.getTextContent())
    : node.getTextContent();
  return text.replaceAll(ZWSP, "").trim() !== "";
}

/**
 * Whether the chapter content, from `start` to the end of the document, already holds anything
 * verses would go above, as a book typed or imported without chapter markers does: text (see
 * {@link $isDocumentText}), a verse, a note, a milestone, or a figure, table or other block the
 * editor keeps whole. Any text counts, a section heading or a remark included.
 */
function $holdsChapterContent(start: LexicalNode, viewOptions: ViewOptions | undefined): boolean {
  for (const { node } of $dfsIterator(start, $getRoot().getLastDescendant() ?? start))
    if (
      $isSomeVerseNode(node) ||
      $isNoteNode(node) ||
      $isMilestoneNode(node) ||
      $isUnknownNode(node) ||
      $isDocumentText(node, viewOptions)
    )
      return true;
  return false;
}

/**
 * Inserts chapter 1, with `verseCount` empty verses after it, where USFM puts it: after the front
 * matter, before any chapter content (see {@link $findChapterContentStart}). When that content
 * already holds anything, such as text or a verse (see {@link $holdsChapterContent}), the chapter
 * goes in without verses: they would go above the existing content, leaving all of it in the last
 * verse. Where the markers show, the caret goes at the end of the chapter line. Where they are
 * hidden there is no chapter line, so the caret goes after verse 1, or with no verses to the start
 * of the paragraph that follows; with neither, it stays where it was. Only where
 * {@link $canInsertChapter} allows a chapter.
 *
 * The nodes come from the same conversion that loads a document, so they match a loaded `\c 1` in
 * every view.
 *
 * Mutating: call inside `editor.update()`.
 *
 * @returns `false`, changing nothing, when no chapter can be inserted.
 */
export function $insertFirstChapter({
  chapterNum,
  verseCount = 0,
  viewOptions,
  styleInfo = defaultStyleInfo,
}: {
  chapterNum: number;
  verseCount?: number;
  viewOptions?: ViewOptions;
  styleInfo?: StyleInfo;
}): boolean {
  if (!$canInsertChapter(chapterNum)) return false;

  const chapterContentStart = $findChapterContentStart(styleInfo);
  const versesToAdd =
    verseCount > 0 && chapterContentStart && $holdsChapterContent(chapterContentStart, viewOptions)
      ? 0
      : verseCount;

  const content: MarkerContent[] = [{ type: "chapter", marker: "c", number: `${chapterNum}` }];
  for (let verse = 1; verse <= versesToAdd; verse += 1)
    content.push({ type: "verse", marker: "v", number: `${verse}` });
  const serialized = usjEditorAdaptor.serializeEditorState(
    { type: USJ_TYPE, version: USJ_VERSION, content },
    viewOptions,
  );
  const nodes = serialized.root.children.map((child) => $parseSerializedNode(child));

  for (const node of nodes) {
    if (chapterContentStart) chapterContentStart.insertBefore(node);
    else $getRoot().append(node);
  }

  // Where the markers show, the chapter line is text, so the caret goes at its end. Where they are
  // hidden the chapter is a decorator with no line to type on, so the caret goes after verse 1, or
  // with no verses to the start of the chapter content's first paragraph. With neither it stays
  // where it was, rather than between blocks or inside a table or an opaque block.
  const [chapter, verses] = nodes;
  const firstVerse = $isElementNode(verses) ? verses.getFirstChild() : undefined;
  if ($isElementNode(chapter)) chapter.selectEnd();
  else if (firstVerse) firstVerse.selectNext();
  else if ($isParaNode(chapterContentStart) || $isImpliedParaNode(chapterContentStart))
    chapterContentStart.select(0, 0);
  return true;
}
