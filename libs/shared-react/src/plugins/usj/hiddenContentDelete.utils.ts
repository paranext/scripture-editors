import { $advancePastParaPrefixes } from "./ParaMarkerPrefixCursorGuardPlugin";
import { $placeCaretAtEnd } from "./structureKeyboard.utils";
import { HiddenContentItem } from "./hidden-content-delete.model";
import { $findMatchingParent } from "@lexical/utils";
import {
  $isElementNode,
  $isRangeSelection,
  $isRootNode,
  $isTextNode,
  BaseSelection,
  LexicalNode,
  RangeSelection,
} from "lexical";
import {
  $isNoteNode,
  $isParaLikeNode,
  $isSynthesizedMarkerNode,
  $isUnknownNode,
  UnknownNode,
} from "shared";

/** Which way a delete keystroke removes content from a collapsed caret. */
export type DeleteDirection = "backward" | "forward";

/**
 * Hidden constructs lying directly against a collapsed caret, which the next delete would reach.
 *
 * - `"inline"`: inside the caret's paragraph (a figure in running text).
 * - `"block"`: the paragraph's own sibling blocks (a root-level sidebar or `\periph`), reached when
 *   the caret sits at the paragraph's visible edge.
 */
export interface HiddenRun {
  /** The contiguous hidden constructs, in document order. Never empty. */
  nodes: UnknownNode[];
  placement: "inline" | "block";
}

/**
 * Read-only.
 *
 * The run of hidden constructs a delete in `direction` would reach first from a collapsed caret,
 * or `undefined` when the delete would reach visible content (or nothing) first.
 *
 * Every `UnknownNode` is hidden in the views this applies to (any marker mode but `"editable"`), so
 * the user cannot see that a delete would reach one. Native deletion does not handle them safely:
 * a character delete empties a figure's caption and leaves an empty shell, and a delete at a
 * paragraph's edge merges the paragraph into an adjacent hidden sidebar or dissolves the sidebar
 * into the paragraph.
 *
 * The caret's paragraph is walked from the caret outward: inline wrappers (character styles) are
 * looked through, empty text is skipped, and the walk stops at a note's boundary. Contiguous hidden
 * constructs count as one run - none of them is visible, so stopping between them would leave the
 * user deleting things they cannot see one press at a time. When nothing but the paragraph's
 * leading marker label lies between the caret and the paragraph's edge, the hidden blocks right
 * beside the paragraph are the run.
 *
 * Word deletes are covered by the same check: the browser ends a word at a hidden construct, so a
 * word delete only reaches one that is directly against the caret.
 *
 * @param selection - The current selection. Only a collapsed range selection can have a run.
 * @param direction - `"backward"` for Backspace, `"forward"` for Delete.
 */
export function $hiddenRunAtCaret(
  selection: BaseSelection | null,
  direction: DeleteDirection,
): HiddenRun | undefined {
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return undefined;
  const { anchor } = selection;
  const node = anchor.getNode();

  // A caret between root children (Lexical's fallback when no text hosts it).
  if ($isRootNode(node)) {
    const child = node.getChildAtIndex(
      direction === "backward" ? anchor.offset - 1 : anchor.offset,
    );
    return $isUnknownNode(child) ? $siblingBlockRun(child, direction, true) : undefined;
  }

  const container = $caretContainer(node);
  if (!container) return undefined;

  if (anchor.type === "text") {
    const isAtEdge =
      direction === "backward" ? anchor.offset === 0 : anchor.offset === node.getTextContentSize();
    if (!isAtEdge) return undefined;
  }
  let leaf = $firstLeafFromCaret(selection, direction, container);

  const inline: UnknownNode[] = [];
  while (leaf) {
    if ($isUnknownNode(leaf)) inline.push(leaf);
    else if (!$isEmptyText(leaf)) break;
    leaf = $nextLeaf(leaf, direction, container);
  }
  if (inline.length > 0) {
    return { nodes: direction === "backward" ? inline.reverse() : inline, placement: "inline" };
  }

  // A paragraph's leading marker label (the gutter's `\q1`) is not content: a caret just past it
  // is at the paragraph's visible start.
  if (direction === "backward") {
    while (leaf && $isSynthesizedMarkerNode(leaf)) leaf = $nextLeaf(leaf, direction, container);
  }
  if (leaf || !$isParaLikeNode(container)) return undefined;
  return $siblingBlockRun(container, direction, false);
}

/**
 * Read-only.
 *
 * The hidden constructs a non-collapsed range selection covers, outermost only (a figure inside a
 * hidden sidebar is reported as the sidebar), in document order. Empty for a collapsed caret or a
 * non-range selection.
 *
 * @param selection - The current selection.
 */
export function $hiddenNodesInSelection(selection: BaseSelection | null): UnknownNode[] {
  if (!$isRangeSelection(selection) || selection.isCollapsed()) return [];
  const result: UnknownNode[] = [];
  for (const node of selection.getNodes()) {
    const outermost = $outermostUnknown(node);
    if (outermost && !result.some((found) => found.is(outermost))) result.push(outermost);
  }
  return result;
}

/**
 * Read-only.
 *
 * Every hidden construct between a collapsed caret and its paragraph's edge in `direction`. The
 * fallback for a line delete where the visual line's extent cannot be measured (no
 * `Selection.modify`, as in jsdom): a line never extends past its paragraph, so this covers at
 * least everything the line delete could reach.
 *
 * @param selection - The current selection. Only a collapsed range selection is considered.
 * @param direction - `"backward"` toward the paragraph start, `"forward"` toward its end.
 */
export function $hiddenNodesToParaEdge(
  selection: BaseSelection | null,
  direction: DeleteDirection,
): UnknownNode[] {
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return [];
  const container = $caretContainer(selection.anchor.getNode());
  if (!container) return [];
  const found: UnknownNode[] = [];
  let leaf = $firstLeafFromCaret(selection, direction, container);
  while (leaf) {
    if ($isUnknownNode(leaf)) found.push(leaf);
    leaf = $nextLeaf(leaf, direction, container);
  }
  return direction === "backward" ? found.reverse() : found;
}

/**
 * Mutating: call inside `editor.update()`.
 *
 * Moves the caret to the far side of `run` without removing anything - the "keep it" answer for a
 * collapsed caret. An inline run puts the caret just before (backward) or after (forward) the run
 * in the same paragraph; a block run puts it at the end of the block before the run (backward) or
 * at the start of the block after it (forward), past that block's leading marker label.
 *
 * @param run - The run the caret skips, as found by {@link $hiddenRunAtCaret}.
 * @param direction - The direction of the delete that found it.
 * @returns Whether the caret moved. A block run with no paragraph on its far side leaves the caret
 *   where it is.
 */
export function $placeCaretPastHiddenRun(run: HiddenRun, direction: DeleteDirection): boolean {
  const first = run.nodes[0];
  const last = run.nodes[run.nodes.length - 1];
  if (run.placement === "inline") {
    if (direction === "backward") $selectBefore(first);
    else $selectAfter(last);
    return true;
  }
  if (direction === "backward") {
    const before = first.getPreviousSibling();
    if (!$isParaLikeNode(before)) return false;
    $placeCaretAtEnd(before);
    return true;
  }
  const after = last.getNextSibling();
  if (!$isParaLikeNode(after)) return false;
  if (!$advancePastParaPrefixes(after)) after.selectStart();
  return true;
}

/**
 * Read-only.
 *
 * Describes hidden constructs for the host's confirmation prompt.
 *
 * @param nodes - The hidden constructs, in document order.
 */
export function $hiddenContentItems(nodes: UnknownNode[]): HiddenContentItem[] {
  return nodes.map((node) => {
    const marker = node.getMarker();
    return marker ? { tag: node.getTag(), marker } : { tag: node.getTag() };
  });
}

/** The nearest paragraph or note holding `node`: the walk from a caret never leaves it. */
function $caretContainer(node: LexicalNode): LexicalNode | undefined {
  if ($isParaLikeNode(node) || $isNoteNode(node)) return node;
  return $findMatchingParent(node, (n) => $isParaLikeNode(n) || $isNoteNode(n)) ?? undefined;
}

/**
 * The first leaf a walk in `direction` meets from a collapsed caret. For a text point that is the
 * leaf past the caret's own text node - the caller decides whether the rest of that text is in the
 * way.
 */
function $firstLeafFromCaret(
  selection: RangeSelection,
  direction: DeleteDirection,
  container: LexicalNode,
): LexicalNode | undefined {
  const { anchor } = selection;
  const node = anchor.getNode();
  if (anchor.type === "text" || !$isElementNode(node)) return $nextLeaf(node, direction, container);
  const child = node.getChildAtIndex(direction === "backward" ? anchor.offset - 1 : anchor.offset);
  if (child) return $resolveLeaf(child, direction, container);
  return node.is(container) ? undefined : $nextLeaf(node, direction, container);
}

/**
 * The node next to `node` in `direction`, climbing out of inline wrappers but never out of
 * `container`. `undefined` at the container's edge.
 */
function $siblingWithin(
  node: LexicalNode,
  direction: DeleteDirection,
  container: LexicalNode,
): LexicalNode | undefined {
  let current = node;
  for (;;) {
    const sibling =
      direction === "backward" ? current.getPreviousSibling() : current.getNextSibling();
    if (sibling) return sibling;
    const parent = current.getParent();
    if (!parent || parent.is(container)) return undefined;
    current = parent;
  }
}

/**
 * The leaf a walk in `direction` meets on entering `node`: hidden constructs and notes are leaves
 * (never entered), inline wrappers are entered from the near side, and an empty wrapper is passed
 * over.
 */
function $resolveLeaf(
  node: LexicalNode,
  direction: DeleteDirection,
  container: LexicalNode,
): LexicalNode | undefined {
  let current: LexicalNode | undefined = node;
  while (current) {
    if ($isUnknownNode(current) || $isNoteNode(current) || !$isElementNode(current)) return current;
    const child: LexicalNode | null =
      direction === "backward" ? current.getLastChild() : current.getFirstChild();
    current = child ?? $siblingWithin(current, direction, container);
  }
  return undefined;
}

/** The next leaf after `node` in `direction` within `container`. */
function $nextLeaf(
  node: LexicalNode,
  direction: DeleteDirection,
  container: LexicalNode,
): LexicalNode | undefined {
  const sibling = $siblingWithin(node, direction, container);
  return sibling ? $resolveLeaf(sibling, direction, container) : undefined;
}

/** The hidden blocks beside `block` in `direction` (including `block` itself when asked). */
function $siblingBlockRun(
  block: LexicalNode,
  direction: DeleteDirection,
  includeSelf: boolean,
): HiddenRun | undefined {
  const nodes: UnknownNode[] = [];
  let current: LexicalNode | null = includeSelf
    ? block
    : direction === "backward"
      ? block.getPreviousSibling()
      : block.getNextSibling();
  while ($isUnknownNode(current)) {
    nodes.push(current);
    current = direction === "backward" ? current.getPreviousSibling() : current.getNextSibling();
  }
  if (nodes.length === 0) return undefined;
  return { nodes: direction === "backward" ? nodes.reverse() : nodes, placement: "block" };
}

function $isEmptyText(node: LexicalNode): boolean {
  return $isTextNode(node) && node.getTextContentSize() === 0;
}

function $outermostUnknown(node: LexicalNode): UnknownNode | undefined {
  let outermost: UnknownNode | undefined = $isUnknownNode(node) ? node : undefined;
  for (const ancestor of node.getParents()) {
    if ($isUnknownNode(ancestor)) outermost = ancestor;
  }
  return outermost;
}

/** Collapses the caret just before `node`, in the text before it when there is any. */
function $selectBefore(node: LexicalNode): void {
  const previous = node.getPreviousSibling();
  if ($isTextNode(previous) && !previous.isToken()) {
    const size = previous.getTextContentSize();
    previous.select(size, size);
    return;
  }
  const index = node.getIndexWithinParent();
  node.getParentOrThrow().select(index, index);
}

/** Collapses the caret just after `node`, in the text after it when there is any. */
function $selectAfter(node: LexicalNode): void {
  const next = node.getNextSibling();
  if ($isTextNode(next) && !next.isToken()) {
    next.select(0, 0);
    return;
  }
  const index = node.getIndexWithinParent() + 1;
  node.getParentOrThrow().select(index, index);
}
