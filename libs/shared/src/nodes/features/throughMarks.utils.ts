/**
 * Reading the tree as if annotation marks were not there. A `TypedMarkNode` is presentation only:
 * wrapping a range of content in one moves the content's text nodes into the mark and cuts a text
 * at the range's edges, but the document — and so every rule that reads "the node after this
 * one", "the text before the caret" or "the run of text this node is part of" — is the same as
 * with no mark at all. These helpers give such a rule the answer the unmarked tree gives: they
 * step into a mark that starts at a boundary and out of a mark that ends there, but never out of
 * any other parent, and they read a display-byte carrier cut into pieces as one node
 * (`displayPieces.state.ts`).
 *
 * Read-only: safe inside `editor.update()` or either read form.
 */

import { $lastPiece, $pieceHead } from "./displayPieces.state.js";
import { $isTypedMarkNode } from "./TypedMarkNode.js";
import {
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  ElementNode,
  LexicalNode,
  PointType,
  RangeSelection,
  TextNode,
} from "lexical";

/**
 * The first node at or after the child boundary `index` of `parent` that is not an annotation
 * mark: a mark that starts there is entered, and a mark that ends there is left — `parent` itself
 * included, when it is a mark — but no other element is. `null` when nothing but the end of the
 * nearest non-mark element follows.
 */
export function $nodeAfterBoundaryThroughMarks(
  parent: ElementNode,
  index: number,
): LexicalNode | null {
  let container: ElementNode | null = parent;
  let node: LexicalNode | null = parent.getChildAtIndex(index);
  for (;;) {
    if ($isTypedMarkNode(node)) {
      container = node;
      node = node.getFirstChild();
    } else if (node) return node;
    else if ($isTypedMarkNode(container)) {
      node = container.getNextSibling();
      container = container.getParent();
    } else return null;
  }
}

/**
 * The last node before the child boundary `index` of `parent` that is not an annotation mark — the
 * mirror of {@link $nodeAfterBoundaryThroughMarks}. A carrier cut into pieces is named by its
 * first piece.
 */
export function $nodeBeforeBoundaryThroughMarks(
  parent: ElementNode,
  index: number,
): LexicalNode | null {
  let container: ElementNode | null = parent;
  let node: LexicalNode | null = index > 0 ? parent.getChildAtIndex(index - 1) : null;
  for (;;) {
    if ($isTypedMarkNode(node)) {
      container = node;
      node = node.getLastChild();
    } else if (node) return $pieceHead(node);
    else if ($isTypedMarkNode(container)) {
      node = container.getPreviousSibling();
      container = container.getParent();
    } else return null;
  }
}

/**
 * The node after `node` as the tree without annotation marks has it: after `node`'s whole carrier
 * (its last piece), out of every mark `node` ends and into every mark that starts there. `null`
 * when `node` is the last thing in its nearest non-mark parent.
 */
export function $nextSiblingThroughMarks(node: LexicalNode): LexicalNode | null {
  const last = $lastPiece(node);
  const parent = last.getParent();
  return parent ? $nodeAfterBoundaryThroughMarks(parent, last.getIndexWithinParent() + 1) : null;
}

/**
 * The node before `node` as the tree without annotation marks has it — the mirror of
 * {@link $nextSiblingThroughMarks}. A carrier cut into pieces is named by its first piece.
 */
export function $previousSiblingThroughMarks(node: LexicalNode): LexicalNode | null {
  const head = $pieceHead(node);
  const parent = head.getParent();
  return parent ? $nodeBeforeBoundaryThroughMarks(parent, head.getIndexWithinParent()) : null;
}

/**
 * The run of text `node` is one node of, as the tree without annotation marks reads it: `node`
 * and every adjacent node on either side, through marks, that `isMember` accepts, in document
 * order. A mark cuts a text where its range starts or ends, so a text the unmarked tree holds as
 * ONE node is such a run of several; a rule that reads "this node's text" in the unmarked tree
 * reads the run's text here.
 *
 * @param node - A node of the run (it is included whether or not `isMember` accepts it).
 * @param isMember - Which neighbours continue the run.
 */
export function $textRunThroughMarks(
  node: TextNode,
  isMember: (candidate: LexicalNode) => candidate is TextNode,
): TextNode[] {
  const run = [node];
  for (
    let previous = $previousSiblingThroughMarks(node);
    previous && isMember(previous);
    previous = $previousSiblingThroughMarks(previous)
  )
    run.unshift(previous);
  for (
    let next = $nextSiblingThroughMarks(node);
    next && isMember(next);
    next = $nextSiblingThroughMarks(next)
  )
    run.push(next);
  return run;
}

/** A caret position: a node and an offset into it. */
export interface CaretPlace {
  node: LexicalNode;
  offset: number;
}

/**
 * Where the caret at `point` is in the tree without annotation marks. Lexical resolves a caret it
 * reads at the start of a text node onto the end of the text node directly before it, so with no
 * mark there a caret at the start of a glyph or an attribute value right after content is at the
 * end of that content. Across a mark it cannot: the caret stays at the start of the node after the
 * mark. Read here, that caret is at the end of the text node before it through marks
 * ({@link $previousSiblingThroughMarks}), as the unmarked tree has it; any other point is where it
 * is.
 */
export function $caretPlaceThroughMarks(point: PointType): CaretPlace {
  const node = point.getNode();
  if (point.type === "text" && point.offset === 0 && !$isTextNode(node.getPreviousSibling())) {
    const before = $previousSiblingThroughMarks(node);
    if ($isTextNode(before)) {
      const end = $lastPiece(before);
      return { node: end, offset: end.getTextContentSize() };
    }
  }
  return { node, offset: point.offset };
}

/**
 * Move a collapsed caret to where {@link $caretPlaceThroughMarks} reads it: what Lexical's own
 * resolution does to the same caret, read from the DOM, in a tree with no annotation marks. A
 * no-op for any other selection. Mutating (the selection only): call inside an update.
 */
export function $restCaretThroughMarks(): void {
  const selection = $getSelection();
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return;
  const { node, offset } = $caretPlaceThroughMarks(selection.anchor);
  if (node.is(selection.anchor.getNode())) return;
  selection.anchor.set(node.getKey(), offset, "text");
  selection.focus.set(node.getKey(), offset, "text");
}

/**
 * Restate the ends of a range Lexical read from the screen beside an annotation mark as Lexical
 * reads them in the tree without marks. Lexical moves a range's start at the end of a text into an
 * inline element the text is followed by, and its end at the start of a text into one the text
 * follows, so a range from the end of a word up to the middle of a char span's opener selects
 * from inside the span. A mark ending at the word, or starting at the text after a span, hides that
 * neighbour from the rule: the start stays outside the span, and a cut or copy of the range then
 * takes the span's element along. Read through marks ({@link $nextSiblingThroughMarks},
 * {@link $previousSiblingThroughMarks}), the start moves into the span as without the mark, and so
 * does the end; a display-byte carrier cut into pieces is one node. A collapsed caret is left alone
 * ({@link $restoreCaretAtMarkEnd} restates that). Mutating (the selection only).
 *
 * @returns Whether an end moved.
 */
export function $resolveRangeEndsThroughMarks(selection: RangeSelection): boolean {
  if (selection.isCollapsed()) return false;
  const [start, end] = selection.isBackward()
    ? [selection.focus, selection.anchor]
    : [selection.anchor, selection.focus];
  let moved = false;
  const isHiddenInlineElement = (
    node: LexicalNode | null,
    rawNeighbour: LexicalNode | null,
  ): node is ElementNode =>
    $isElementNode(node) && !$isTypedMarkNode(node) && node.isInline() && !node.is(rawNeighbour);
  if (start.type === "text") {
    const node = start.getNode();
    if (start.offset === node.getTextContentSize() && $lastPiece(node).is(node)) {
      const next = $nextSiblingThroughMarks(node);
      if (isHiddenInlineElement(next, node.getNextSibling())) {
        start.set(next.getKey(), 0, "element");
        moved = true;
      }
    }
  }
  if (end.type === "text") {
    const node = end.getNode();
    if (end.offset === 0 && $pieceHead(node).is(node)) {
      const previous = $previousSiblingThroughMarks(node);
      if (isHiddenInlineElement(previous, node.getPreviousSibling())) {
        end.set(previous.getKey(), previous.getChildrenSize(), "element");
        moved = true;
      }
    }
  }
  return moved;
}

/** Whether `node` is a plain content `TextNode` (not a subclass such as a marker glyph or a
 * verse), the kind of node a mark cuts content text into. */
export function $isPlainTextNode(node: LexicalNode | null | undefined): node is TextNode {
  return $isTextNode(node) && node.getType() === TextNode.getType();
}

/** The nearest ancestor of `node` that is not an annotation mark. */
export function $parentOutsideMarks(node: LexicalNode): ElementNode | null {
  let parent = node.getParent();
  while ($isTypedMarkNode(parent)) parent = parent.getParent();
  return parent;
}

/** The element a selection point's node sits in: the node itself for an element point. */
function $pointParent(point: PointType): ElementNode | null {
  const node = point.getNode();
  return point.type === "element" && $isElementNode(node) ? node : node.getParent();
}

/**
 * Whether `selection`'s two ends sit in different parents only because an annotation mark holds
 * one or both of them: the parents differ, but their nearest non-mark ancestors are one element.
 *
 * The unmarked document has both ends in that one element. Lexical's `insertText` over a range
 * whose ends sit in different INLINE parents treats it as reaching across elements: it climbs to
 * the enclosing block and moves the block's content after the range's end into the start's
 * parent, so a range inside a char span, cut by a mark at either end, pulls the paragraph's text
 * after the span into the span. Removing such a range first (`RangeSelection.removeText`, which
 * walks the range node by node) leaves a caret the insertion then types at, as in the unmarked
 * document.
 */
export function $isRangeSplitByMarks(selection: RangeSelection): boolean {
  const anchorParent = $pointParent(selection.anchor);
  const focusParent = $pointParent(selection.focus);
  if (!anchorParent || !focusParent || anchorParent.is(focusParent)) return false;
  if (!$isTypedMarkNode(anchorParent) && !$isTypedMarkNode(focusParent)) return false;
  const anchorOutside = $isTypedMarkNode(anchorParent)
    ? $parentOutsideMarks(anchorParent)
    : anchorParent;
  const focusOutside = $isTypedMarkNode(focusParent)
    ? $parentOutsideMarks(focusParent)
    : focusParent;
  return !!anchorOutside && !!focusOutside && anchorOutside.is(focusOutside);
}

/**
 * Remove `selection`'s range when its ends sit in different parents only because of annotation
 * marks ({@link $isRangeSplitByMarks}), leaving a collapsed caret, so that an insertion replacing
 * the range types at that caret instead of through Lexical's range `insertText`, which climbs out
 * of such a range. `RangeSelection.removeText` walks the range node by node and climbs nothing.
 *
 * Mutating: call inside `editor.update()`, before the insertion that replaces the range.
 *
 * @returns Whether the range was removed.
 */
export function $removeRangeSplitByMarks(selection: RangeSelection): boolean {
  if (selection.isCollapsed() || !$isRangeSplitByMarks(selection)) return false;
  selection.removeText();
  return true;
}

/**
 * Put a collapsed caret Lexical read onto the start of the text node right after an annotation
 * mark back at the end of the mark's content, where it is in the document
 * ({@link $caretPlaceThroughMarks}). Returns whether it moved.
 *
 * Lexical reads the caret back from the screen after every commit. A caret at the end of an inline
 * element's last text, when the element takes no text after it (a mark does not), is read onto the
 * start of the text node after the element, and a caret placed at that start stays there, since
 * the node before it is the mark, not a text. When that node is a glyph or an attribute run, its
 * start is a different place from the content's end: what the caret reports, what a delete from it
 * removes and where a typed byte goes (into the run, pending it) would be the display bytes'. With
 * no mark there, the same caret is read back to the end of the content text (Lexical moves a caret
 * at a text's start onto the end of the text before it), which is where this puts it. Text typed
 * at a glyph's start in the same update, before any handler runs, still goes before the glyph, not
 * into it (`MarkerNode.canInsertTextBefore`).
 *
 * Mutating: call where the selection may be changed (a selection-change or insertion command
 * handler).
 */
export function $restoreCaretAtMarkEnd(selection: RangeSelection): boolean {
  const { anchor } = selection;
  if (!selection.isCollapsed() || anchor.type !== "text" || anchor.offset !== 0) return false;
  if (!$isTypedMarkNode(anchor.getNode().getPreviousSibling())) return false;
  const { node, offset } = $caretPlaceThroughMarks(anchor);
  if (node.is(anchor.getNode())) return false;
  anchor.set(node.getKey(), offset, "text");
  selection.focus.set(node.getKey(), offset, "text");
  return true;
}
