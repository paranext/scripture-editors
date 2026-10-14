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
  $isElementNode,
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
