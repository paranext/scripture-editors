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
import {
  isParagraphTagValid,
  ParaStackEntry,
  pushParaTagIfValid,
  toStackEntry,
} from "./markerValidation.utils";
import { MarkerContent, USJ_TYPE, USJ_VERSION } from "@eten-tech-foundation/scripture-utilities";
import { $getRoot, $isElementNode, $parseSerializedNode, LexicalNode } from "lexical";
import {
  $isBookNode,
  $isImpliedParaNode,
  $isParaNode,
  $isSomeChapterNode,
  defaultStyleInfo,
  StyleInfo,
} from "shared";
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
 * anywhere, so those start the chapter content, as does text in no paragraph at all.
 */
function $findChapterContentStart(styleInfo: StyleInfo): LexicalNode | undefined {
  const id = toStackEntry(styleInfo, "id") ?? { marker: "id", rank: 0, occursUnder: [] };
  const chapter = toStackEntry(styleInfo, "c") ?? { marker: "c", rank: 0, occursUnder: ["id"] };
  // A `\c` closes everything above the `\id` line, so this is the stack after any chapter marker.
  const afterChapter: readonly ParaStackEntry[] = [id, chapter];
  const stack: ParaStackEntry[] = [id];
  return $getRoot()
    .getChildren()
    .find((child) => {
      if ($isBookNode(child)) return false;
      if (!$isParaNode(child)) return true;
      const tag = toStackEntry(styleInfo, child.getMarker());
      if (!tag || tag.occursUnder.length === 0) return true;
      if (pushParaTagIfValid(stack, tag)) return false;
      return isParagraphTagValid(afterChapter, tag);
    });
}

/**
 * Inserts chapter 1, with `verseCount` empty verses after it, where USFM puts it: after the front
 * matter, before any chapter content (see {@link $findChapterContentStart}). Where the markers show,
 * the caret goes at the end of the chapter line. Where they are hidden there is no chapter line, so
 * the caret goes after verse 1, or with no verses to the start of the paragraph that follows; with
 * neither, it stays where it was. Only where {@link $canInsertChapter} allows a chapter.
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

  const chapterContentStart = $findChapterContentStart(styleInfo);
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
