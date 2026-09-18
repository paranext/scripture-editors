/**
 * Editing at an editable chapter line — the `\c N` glyph a `ChapterNode` holds.
 *
 * A chapter line is not a paragraph: it holds its own marker bytes and nothing else, and it
 * serializes as its number alone. `ChapterNode` therefore reports that it cannot be empty, which is
 * what stops Lexical from merging a following paragraph into it when a deletion starts on the
 * chapter line (the merged text was kept on screen and silently dropped on save), and what removes
 * the chapter once every byte of its marker is deleted.
 *
 * Not being a block has one cost this module pays: with the caret inside a chapter line, Lexical
 * has no block to split, so a paragraph or line break requested there would land at the end of the
 * document instead. Those splits are refused here before Lexical attempts them, the same way Enter
 * inside a marker glyph is refused — and a paste there goes in as one line of text.
 */

import { $getSelection, $isRangeSelection, LexicalNode, RangeSelection } from "lexical";
import { $isChapterNode, ChapterNode } from "shared";

/** The chapter line `node` is, or sits inside; `undefined` outside any chapter line. */
function $chapterLineOf(node: LexicalNode): ChapterNode | undefined {
  for (let current: LexicalNode | null = node; current; current = current.getParent()) {
    if ($isChapterNode(current)) return current;
  }
  return undefined;
}

/** Whether any part of `selection` lies on a chapter line. */
function $selectionTouchesChapterLine(selection: RangeSelection): boolean {
  return [selection.anchor.getNode(), selection.focus.getNode(), ...selection.getNodes()].some(
    (node) => $chapterLineOf(node) !== undefined,
  );
}

/**
 * Handles a paragraph or line-break split requested at a chapter line. A selected range touching
 * the chapter line is deleted first: a selection that runs from the chapter line into the text is
 * an ordinary deletion (the chapter goes with its marker bytes), after which the split happens at
 * the collapsed caret like any other. A split whose caret is still on the chapter line is refused,
 * since a chapter line cannot be split.
 *
 * Mutating: call from an `INSERT_PARAGRAPH_COMMAND` / `INSERT_LINE_BREAK_COMMAND` handler that
 * runs before Lexical's own split.
 *
 * @returns Whether the split was refused — the caret is on a chapter line, so the command is
 *   claimed.
 */
export function $refuseSplitOnChapterLine(): boolean {
  const selection = $getSelection();
  if (!$isRangeSelection(selection)) return false;
  if (!selection.isCollapsed()) {
    if (!$selectionTouchesChapterLine(selection)) return false;
    selection.removeText();
  }
  const caret = $getSelection();
  return $isRangeSelection(caret) && $chapterLineOf(caret.focus.getNode()) !== undefined;
}

/**
 * Handles a paste at a chapter line: a selected range touching the chapter line is deleted first,
 * and a paste whose caret is still on the chapter line is inserted there as one line of plain text
 * — its line breaks become spaces, as they would in USFM — since a chapter line cannot be split.
 *
 * Mutating: call from a `PASTE_COMMAND` handler that runs before Lexical's own paste.
 *
 * @param text The pasted plain text, if the paste carries any.
 * @returns Whether the paste is claimed.
 */
export function $pasteOnChapterLine(text: string | undefined): boolean {
  if (!$refuseSplitOnChapterLine()) return false;
  const caret = $getSelection();
  if (text && $isRangeSelection(caret)) caret.insertText(text.replace(/\n/g, " "));
  return true;
}
