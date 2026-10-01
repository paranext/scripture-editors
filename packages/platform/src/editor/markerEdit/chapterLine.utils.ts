/**
 * Editing at an editable chapter line — the `\c N` glyph a `ChapterNode` holds.
 *
 * A chapter line is not a paragraph: it holds its own marker bytes and nothing else, and it
 * serializes as its number alone. `ChapterNode` therefore reports that it cannot be empty, which is
 * what stops Lexical from merging a following paragraph into it when a deletion starts on the
 * chapter line (the merged text was kept on screen and silently dropped on save), and what removes
 * the chapter once every byte of its marker is deleted.
 *
 * Not being a block has two costs this module pays. First: with the caret inside a chapter line,
 * Lexical has no block to split, so a paragraph or line break requested there would land at the end
 * of the document instead. Every split is therefore handled here before Lexical attempts it. A
 * paragraph split starts a new paragraph after the chapter line, which is what Enter after `\c N`
 * does in the USFM text; a line break is refused, since a chapter line cannot hold one; and a paste
 * or a drop goes in as the user would type it, its lines starting paragraphs after the chapter line.
 * Second: an INLINE insertion (a note, a character marker, a verse, a milestone — anything built on
 * `RangeSelection.insertNodes`) throws when the caret is on a chapter line, because Lexical requires
 * a block `ElementNode` ancestor to splice into and a chapter line is not one.
 * `$moveCaretOffChapterLine` first moves the caret to where that content goes, as typing it would.
 */

import { $setParaMarkerWithPrefix } from "./markerEditDeletion.utils";
import { $rebuildChapter, Tier2Context } from "./tier2Rebuild.utils";
import { $insertPastedText } from "./whitespaceDisplay.plugin.utils";
import { $findMatchingParent } from "@lexical/utils";
import { $getRoot, $getSelection, $isRangeSelection, LexicalNode, RangeSelection } from "lexical";
import {
  $chapterGlyphTextNode,
  $createParaNode,
  $isChapterNode,
  ChapterNode,
  MarkerLookup,
} from "shared";
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
 * 9: a `\cp` can stand on its own, so the user may mean to put a paragraph between the two. With
 * paragraph marker prefixes shown, the paragraph gets its visible prefix in the same update, as a
 * split paragraph does.
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
 * Whether a structure-protected document must refuse a paste or drop at the selection because it
 * would rewrite a chapter's marker: a range touching a chapter line, or a caret anywhere on the
 * line but just past its end. Just past the end is where typing adds text after the marker without
 * touching it, so a paste there goes in as typing would.
 */
function $wouldRewriteChapterMarker(selection: RangeSelection): boolean {
  if (!$selectionTouchesChapterLine(selection)) return false;
  if (!selection.isCollapsed()) return true;
  const caretNode = selection.focus.getNode();
  const chapter = $chapterLineOf(caretNode);
  const glyph = chapter && $chapterGlyphTextNode(chapter);
  return !(glyph?.is(caretNode) && selection.focus.offset === glyph.getTextContentSize());
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
 * In a structure-protected document the chapter's marker is structure, so a paste that would
 * rewrite it — anywhere but just past the end of the line — is claimed and refused, changing
 * nothing, as pasting over a verse number is.
 *
 * Mutating: call from a `PASTE_COMMAND` handler that runs before Lexical's own paste and before
 * structure protection's, or from a `CONTROLLED_TEXT_INSERTION_COMMAND` handler (which is how a
 * drop arrives) that runs before Lexical's own insertion.
 *
 * @param text The pasted or dropped text, resolved as `getPastePayload` resolves it.
 * @param isStructureProtected Whether the document is structure-protected.
 * @param armSplitExpected Arms the engine's `splitExpected` flag for a multi-line replay.
 * @param getMarker The editor's stylesheet lookup, which says which pasted markers are structure.
 * @returns Whether the paste is claimed.
 */
export function $pasteOnChapterLine(
  text: string,
  isStructureProtected: boolean,
  armSplitExpected: () => void,
  getMarker: MarkerLookup,
): boolean {
  const selection = $getSelection();
  if (isStructureProtected && $isRangeSelection(selection) && $wouldRewriteChapterMarker(selection))
    return true;
  if (!$chapterLineAtCaret()) return false;
  const caret = $getSelection();
  if (text && $isRangeSelection(caret))
    $insertPastedText(caret, text, isStructureProtected, armSplitExpected, getMarker);
  return true;
}

/**
 * Stands in for the content an insertion puts after a chapter number while the chapter's bytes are
 * re-tokenized (see {@link $moveCaretOffChapterLine}). A private-use character: the tokenizer reads
 * it as ordinary text, and no real text holds it for the search that finds it again.
 */
const INSERTION_PLACEHOLDER = "\uE000";

/**
 * Prepares an inline insertion (a note, a character marker, a verse, a milestone — anything that
 * isn't a paragraph split, which `$splitOnChapterLine` handles) requested with the caret on a
 * chapter line, by moving the caret to where that content goes. A chapter line is not a block
 * `ElementNode` (`ChapterNode.canBeEmpty()` is `false`), so `RangeSelection.insertNodes` throws —
 * "Expected node TextNode of type text to have a block ElementNode ancestor" — when asked to splice
 * inline content at a caret inside one.
 *
 * Content put after a chapter number goes where Paratext 9 puts it, which is also where typing it
 * puts it: on a line of its own, with no paragraph marker, straight after the chapter line. A `\ca`
 * that followed the chapter then follows that content on the same line, and a `\cp` stays on the
 * next line; neither is the chapter's attribute any more, since something now stands between it and
 * the `\c`. So `\c 1 ^\n\ca 2\ca*` becomes `\c 1\n^\ca 2\ca*`, and `\c 1 ^\n\cp 2` becomes
 * `\c 1\n^\n\cp 2`. Rather than build that shape by hand, the chapter's bytes are re-tokenized with
 * one character standing in for the content at the end of the chapter glyph (`$rebuildChapter`,
 * the same settle that typing there runs), and the caret then takes that character's place.
 *
 * The content goes after the chapter number wherever on the line the caret is, and a selection
 * lying wholly on the chapter line is treated the same way: the bytes of the marker itself are
 * never operands for an insertion. A selection that runs from a chapter line into the text is left
 * as it is; the insertions already step its ends out of the glyph text and act on the text it
 * covers.
 *
 * Returns `true` when the insertion may go ahead — the caret was moved, or was never on a chapter
 * line — and `false` when the chapter could not be re-tokenized (it carries attributes its bytes
 * cannot re-derive), in which case the caller must insert nothing.
 *
 * Mutating: call inside `editor.update()`, before any inline insertion that assumes the caret
 * already sits in a block's content.
 *
 * @param context What the chapter re-tokenize needs: the view's options, the stylesheet lookup,
 *   and a logger.
 */
export function $moveCaretOffChapterLine(context: Tier2Context): boolean {
  const selection = $getSelection();
  if (!$isRangeSelection(selection)) return true;
  const chapter = $chapterLineOf(selection.focus.getNode());
  if (!chapter || !chapter.is($chapterLineOf(selection.anchor.getNode()))) return true;
  const glyph = $chapterGlyphTextNode(chapter);
  if (!glyph) return false;

  glyph.setTextContent(glyph.getTextContent() + INSERTION_PLACEHOLDER);
  if (!$rebuildChapter(chapter, context)) {
    glyph.setTextContent(glyph.getTextContent().slice(0, -INSERTION_PLACEHOLDER.length));
    return false;
  }
  const holder = $getRoot()
    .getAllTextNodes()
    .find((node) => node.getTextContent().includes(INSERTION_PLACEHOLDER));
  if (!holder) return false;
  const offset = holder.getTextContent().indexOf(INSERTION_PLACEHOLDER);
  holder.setTextContent(holder.getTextContent().replace(INSERTION_PLACEHOLDER, ""));
  holder.select(offset, offset);
  return true;
}
