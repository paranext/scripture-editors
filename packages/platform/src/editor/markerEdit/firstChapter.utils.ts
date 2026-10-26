/**
 * Starting chapter 1 in a book that has no chapters — the one place a chapter marker is inserted
 * rather than typed. Every other chapter document already carries its own `\c`, and the host's save
 * removes a second one, so nothing here applies to them.
 *
 * Every way of asking for the chapter inserts it the same way: the `\` menu's `\c` pick
 * (`$applyMarkerMenuSelection`), `EditorRef.insertMarker("c")` (the host's menu outside Standard
 * view), and `EditorRef.insertFirstChapter` (the host's "Add chapter number" button, which also
 * wants empty verses).
 */
import usjEditorAdaptor from "../adaptors/usj-editor.adaptor";
import { MarkerContent, USJ_TYPE, USJ_VERSION } from "@eten-tech-foundation/scripture-utilities";
import { $getRoot, $isElementNode, $parseSerializedNode, LexicalNode } from "lexical";
import { $isBookNode, $isParaNode, $isSomeChapterNode, defaultStyleInfo, StyleInfo } from "shared";
import { ViewOptions } from "shared-react";

/**
 * Whether a chapter marker can be inserted in the document: it is chapter 1 and holds no chapter
 * yet, as an empty book does. Chapter 0 (front matter) never holds one.
 *
 * Read-only: call inside `editor.getEditorState().read(...)` or an update.
 */
export function $canInsertChapter(chapterNum: number | undefined): boolean {
  return chapterNum === 1 && !$getRoot().getChildren().some($isSomeChapterNode);
}

/**
 * Whether `node` is part of the book's front matter, which comes before chapter 1: the `\id` line,
 * and each paragraph whose marker the stylesheet allows under `\id` (headings, titles, the
 * introduction). Anything else is chapter content.
 */
function $isFrontMatter(node: LexicalNode, styleInfo: StyleInfo): boolean {
  if ($isBookNode(node)) return true;
  if (!$isParaNode(node)) return false;
  const marker = node.getMarker();
  const entry = Object.hasOwn(styleInfo.markers, marker) ? styleInfo.markers[marker] : undefined;
  return !!entry?.occursUnder?.includes("id");
}

/**
 * Inserts chapter 1, with `verseCount` empty verses after it, where USFM puts it: after the front
 * matter (see {@link $isFrontMatter}), before any chapter content. The caret goes on the chapter
 * line. Only where {@link $canInsertChapter} allows a chapter.
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

  const content: MarkerContent[] = [{ type: "chapter", marker: "c", number: `${chapterNum}` }];
  for (let verse = 1; verse <= verseCount; verse += 1)
    content.push({ type: "verse", marker: "v", number: `${verse}` });
  const serialized = usjEditorAdaptor.serializeEditorState(
    { type: USJ_TYPE, version: USJ_VERSION, content },
    viewOptions,
  );
  const nodes = serialized.root.children.map((child) => $parseSerializedNode(child));

  const firstChapterContent = $getRoot()
    .getChildren()
    .find((child) => !$isFrontMatter(child, styleInfo));
  for (const node of nodes) {
    if (firstChapterContent) firstChapterContent.insertBefore(node);
    else $getRoot().append(node);
  }

  const chapter = nodes[0];
  if ($isElementNode(chapter)) chapter.selectEnd();
  else chapter.selectNext(0, 0);
  return true;
}
