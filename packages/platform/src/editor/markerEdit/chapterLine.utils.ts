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
 * document instead. Every split is therefore handled here before Lexical attempts it. A paragraph
 * split starts a new paragraph after the chapter line, which is what Enter after `\c N` does in the
 * USFM text; a line break is refused, since a chapter line cannot hold one; and a paste or a drop
 * goes in as the user would type it, its lines starting paragraphs after the chapter line.
 */

import { $setParaMarkerWithPrefix } from "./markerEditDeletion.utils";
import { $insertPastedText } from "./whitespaceDisplay.plugin.utils";
import { $findMatchingParent } from "@lexical/utils";
import { $getSelection, $isRangeSelection, LexicalNode, RangeSelection } from "lexical";
import { $createParaNode, $isChapterNode, ChapterNode } from "shared";
import { showParaMarkerPrefix, ViewOptions } from "shared-react";

/** The chapter line `node` is, or sits inside; `undefined` outside any chapter line. */
function $chapterLineOf(node: LexicalNode): ChapterNode | undefined {
  return $findMatchingParent(node, $isChapterNode) ?? undefined;
}

/** Whether any part of `selection` lies on a chapter line. */
function $selectionTouchesChapterLine(selection: RangeSelection): boolean {
  return [selection.anchor.getNode(), selection.focus.getNode(), ...selection.getNodes()].some(
    (node) => $chapterLineOf(node) !== undefined,
  );
}

/**
 * The chapter line a split or paste is requested on, if any. A selected range touching a chapter
 * line is deleted first: a selection that runs from the chapter line into the text is an ordinary
 * deletion (the chapter goes with its marker bytes), after which the caret may no longer be on a
 * chapter line at all, and the edit goes ahead like any other.
 *
 * Mutating: may delete the selection.
 */
function $chapterLineAtCaret(): ChapterNode | undefined {
  const selection = $getSelection();
  if (!$isRangeSelection(selection)) return undefined;
  if (!selection.isCollapsed()) {
    if (!$selectionTouchesChapterLine(selection)) return undefined;
    selection.removeText();
  }
  const caret = $getSelection();
  return $isRangeSelection(caret) ? $chapterLineOf(caret.focus.getNode()) : undefined;
}

/**
 * Handles a paragraph split requested at a chapter line: wherever the caret is on the line, a new
 * paragraph marked `marker` starts right after the chapter line, with the caret at its content
 * start. That is directly after the chapter even when a `\cp` paragraph follows it, as in Paratext
 * 9: a `\cp` can stand on its own, so the user may mean to put a paragraph between the two. With paragraph marker prefixes shown, the paragraph gets its visible prefix in the same
 * update, as a split paragraph does.
 *
 * Mutating: call from an `INSERT_PARAGRAPH_COMMAND` handler that runs before Lexical's own split,
 * and ahead of any split that bypasses that command.
 *
 * @param marker The paragraph marker for the new paragraph, e.g. `"p"`.
 * @param viewOptions The view's options, which decide whether the paragraph shows its marker.
 * @returns Whether the split was on a chapter line and so has been handled here.
 */
export function $splitOnChapterLine(marker: string, viewOptions: ViewOptions | undefined): boolean {
  const chapter = $chapterLineAtCaret();
  if (!chapter) return false;
  const para = $createParaNode(marker);
  chapter.insertAfter(para);
  if (showParaMarkerPrefix(viewOptions)) $setParaMarkerWithPrefix(para, marker);
  else para.selectStart();
  return true;
}

/**
 * Handles a line break requested at a chapter line, which is refused: a chapter line cannot hold
 * one, and a line break has no USFM representation of its own. A selection lying wholly on one
 * chapter line is left as it is — deleting it for a line break that is then refused would only take
 * bytes out of the marker.
 *
 * Mutating: call from an `INSERT_LINE_BREAK_COMMAND` handler that runs before Lexical's own.
 *
 * @returns Whether the line break was refused — the caret is on a chapter line, so the command is
 *   claimed.
 */
export function $refuseLineBreakOnChapterLine(): boolean {
  const selection = $getSelection();
  if ($isRangeSelection(selection) && !selection.isCollapsed()) {
    const anchorLine = $chapterLineOf(selection.anchor.getNode());
    if (anchorLine?.is($chapterLineOf(selection.focus.getNode()))) return true;
  }
  return $chapterLineAtCaret() !== undefined;
}

/**
 * Handles a paste or a drop at a chapter line: a selected range touching the chapter line is
 * deleted first, and text whose caret is still on the chapter line goes in exactly as an external
 * paste does anywhere in Standard view ({@link $insertPastedText}) — `\c`/`\id` dropped, NBSPs
 * normalized, and its lines replayed as typed, so each line after the first starts a paragraph
 * after the chapter line, as Enter there does (or, structure-protected, joined into one line).
 *
 * Claimed for every paste and drop that reaches a chapter line, internal ones included: Lexical's
 * own insertion of a rich payload, and structure protection's html sanitizer, both insert nodes
 * where the caret is, and with the caret in a chapter line there is no block to insert them into.
 *
 * Mutating: call from a `PASTE_COMMAND` handler that runs before Lexical's own paste and before
 * structure protection's, or from a `CONTROLLED_TEXT_INSERTION_COMMAND` handler (which is how a
 * drop arrives) that runs before Lexical's own insertion.
 *
 * @param text The pasted or dropped text, resolved as `getPastePayload` resolves it.
 * @param isStructureProtected Whether the document is structure-protected.
 * @param armSplitExpected Arms the engine's `splitExpected` flag for a multi-line replay.
 * @returns Whether the paste is claimed.
 */
export function $pasteOnChapterLine(
  text: string,
  isStructureProtected: boolean,
  armSplitExpected: () => void,
): boolean {
  if (!$chapterLineAtCaret()) return false;
  const caret = $getSelection();
  if (text && $isRangeSelection(caret))
    $insertPastedText(caret, text, isStructureProtected, armSplitExpected);
  return true;
}
