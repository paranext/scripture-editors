import { $advancePastParaPrefixes } from "./ParaMarkerPrefixCursorGuardPlugin";
import { HiddenContentItem } from "./hidden-content-delete.model";
import { $findMatchingParent } from "@lexical/utils";
import {
  $createRangeSelection,
  $isElementNode,
  $isRangeSelection,
  $isRootNode,
  $isTextNode,
  $setSelection,
  BaseSelection,
  ElementNode,
  LexicalNode,
  PointType,
  RangeSelection,
} from "lexical";
import { $isNoteNode, $isParaLikeNode, $isUnknownNode, UnknownNode } from "shared";

/** Which way a delete keystroke removes content from a collapsed caret. */
export type DeleteDirection = "backward" | "forward";

/**
 * Hidden constructs lying directly against a collapsed caret, which the next delete would reach.
 *
 * - `"inline"`: inside the caret's paragraph or note (a figure in running text).
 * - `"block"`: the paragraph's own sibling blocks (a root-level sidebar or `\periph`), reached when
 *   the caret sits at the paragraph's visible edge.
 */
export interface HiddenRun {
  /** The contiguous hidden constructs, in document order. Never empty. */
  nodes: UnknownNode[];
  placement: "inline" | "block";
}

/**
 * Read-only: safe inside `editor.getEditorState().read()`, an `editor.update()`, or a command
 * handler.
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
 * looked through, empty text is skipped, and a note is never entered. A caret inside an expanded
 * note walks to the note's edge and, when nothing in the note is in the way, on into the paragraph
 * holding it, as the delete would. Contiguous hidden constructs count as one run - none of them is
 * visible, so stopping between them would leave the user deleting things they cannot see one press
 * at a time. When nothing lies between the caret and the paragraph's edge, the hidden blocks right
 * beside the paragraph are the run. A paragraph's leading marker label (the gutter's `\q1`) is in
 * the way: Backspace just past it removes the label.
 *
 * Word and line deletes can reach hidden content further along; their callers measure that extent
 * separately.
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

  let container = $caretContainer(node);
  if (!container) return undefined;

  if (anchor.type === "text") {
    const isAtEdge =
      direction === "backward" ? anchor.offset === 0 : anchor.offset === node.getTextContentSize();
    if (!isAtEdge) return undefined;
  }
  let leaf = $firstLeafFromCaret(selection, direction, container);

  const inline: UnknownNode[] = [];
  for (;;) {
    while (leaf) {
      if ($isUnknownNode(leaf)) inline.push(leaf);
      else if (!$isEmptyText(leaf)) break;
      leaf = $nextLeaf(leaf, direction, container);
    }
    // An expanded note's text runs on into its paragraph's: a delete at the note's edge leaves it.
    if (leaf || !$isNoteNode(container)) break;
    const outer = $caretContainer(container.getParentOrThrow());
    if (!outer) return undefined;
    leaf = $nextLeaf(container, direction, outer);
    container = outer;
  }
  if (inline.length > 0) {
    return { nodes: direction === "backward" ? inline.reverse() : inline, placement: "inline" };
  }
  if (leaf || !$isParaLikeNode(container)) return undefined;
  return $siblingBlockRun(container, direction, false);
}

/**
 * Read-only: safe inside `editor.getEditorState().read()`, an `editor.update()`, or a command
 * handler.
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
 * Read-only: safe inside `editor.getEditorState().read()`, an `editor.update()`, or a command
 * handler.
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
 * in the same paragraph; a block run puts it at the visible end of the block before the run
 * (backward) or the visible start of the block after it (forward), past that block's leading marker
 * label. The caret never lands inside a hidden construct or a note: it passes over hidden content
 * ending the block before the run, and rests just past a note opening the block after it.
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
    const container = $caretContainer(first);
    if (!container) return false;
    if (direction === "backward") $selectBefore(first, container);
    else $selectAfter(last, container);
    return true;
  }
  if (direction === "backward") {
    const before = first.getPreviousSibling();
    if (!$isParaLikeNode(before)) return false;
    $placeCaretAtVisibleEnd(before);
    return true;
  }
  const after = last.getNextSibling();
  if (!$isParaLikeNode(after)) return false;
  if (!$advancePastParaPrefixes(after)) $placeCaretAtVisibleStart(after);
  return true;
}

/**
 * Read-only: safe inside `editor.getEditorState().read()`, an `editor.update()`, or a command
 * handler.
 *
 * Whether {@link $placeCaretPastHiddenRun} has somewhere to put the caret: always for an inline
 * run, and for a block run only when a paragraph lies on its far side.
 *
 * @param run - The run the caret would skip, as found by {@link $hiddenRunAtCaret}.
 * @param direction - The direction of the delete that found it.
 */
export function $canPlaceCaretPastHiddenRun(run: HiddenRun, direction: DeleteDirection): boolean {
  if (run.placement === "inline") return true;
  const beyond =
    direction === "backward"
      ? run.nodes[0].getPreviousSibling()
      : run.nodes[run.nodes.length - 1].getNextSibling();
  return $isParaLikeNode(beyond);
}

/**
 * Read-only: safe inside `editor.getEditorState().read()`, an `editor.update()`, or a command
 * handler.
 *
 * Whether `point` lies in the paragraph (or note) holding the collapsed caret `caret`. A word or
 * line delete measured past that edge would merge the paragraph, or leave the note.
 *
 * @param point - A point the delete's extent reaches.
 * @param caret - The collapsed caret the delete starts from.
 */
export function $isInCaretContainer(point: PointType, caret: RangeSelection): boolean {
  const container = $caretContainer(caret.anchor.getNode());
  const node = point.getNode();
  return !!container && (container.is(node) || container.isParentOf(node));
}

/**
 * Read-only: safe inside `editor.getEditorState().read()`, an `editor.update()`, or a command
 * handler.
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

/**
 * Collapses the caret just before `node`: at the end of the editable text before it within
 * `container` (looking out of a character span `node` starts), or at the boundary when there is none.
 */
function $selectBefore(node: LexicalNode, container: LexicalNode): void {
  const previous = $nextLeaf(node, "backward", container);
  if ($isTextNode(previous) && !previous.isToken())
    previous.select(previous.getTextContentSize(), previous.getTextContentSize());
  else $collapseAtBoundary(node.getParentOrThrow(), node.getIndexWithinParent());
}

/**
 * Collapses the caret just after `node`: at the start of the editable text after it within
 * `container` (looking out of a character span `node` ends), or at the boundary when there is none.
 */
function $selectAfter(node: LexicalNode, container: LexicalNode): void {
  const next = $nextLeaf(node, "forward", container);
  if ($isTextNode(next) && !next.isToken()) next.select(0, 0);
  else $collapseAtBoundary(node.getParentOrThrow(), node.getIndexWithinParent() + 1);
}

/**
 * Collapses the caret to `parent`'s element point at `index`, the fallback where no text hosts the
 * position. Set directly: `ElementNode.select` would carry it into the child at that boundary when
 * `parent` cannot be empty (a character span), and that child may be a hidden construct or a note.
 * A text point is preferred wherever there is one, because Lexical's normalization of a point read
 * back from the DOM likewise descends into the element at a boundary.
 */
function $collapseAtBoundary(parent: ElementNode, index: number): void {
  const selection = $createRangeSelection();
  selection.anchor.set(parent.getKey(), index, "element");
  selection.focus.set(parent.getKey(), index, "element");
  $setSelection(selection);
}

/**
 * Collapses the caret at the end of `block`'s last visible text, or just past the note or decorator
 * that ends it. Hidden content ending the block is passed over: no text hosts the position past it,
 * so typing there would land before it anyway, and the caret goes where the typing will.
 */
function $placeCaretAtVisibleEnd(block: ElementNode): void {
  const last = block.getLastChild();
  let leaf = last ? $resolveLeaf(last, "backward", block) : undefined;
  while ($isUnknownNode(leaf)) leaf = $nextLeaf(leaf, "backward", block);
  if (!leaf) $collapseAtBoundary(block, 0);
  else if ($isTextNode(leaf)) leaf.select(leaf.getTextContentSize(), leaf.getTextContentSize());
  else $selectAfter(leaf, block);
}

/**
 * Collapses the caret at the start of `block`'s first visible text, or just before what starts it.
 * A block that opens with a note has no position before the note the browser can hold (typing there
 * is lost), so the caret goes just past the note instead.
 */
function $placeCaretAtVisibleStart(block: ElementNode): void {
  const first = block.getFirstChild();
  const leaf = first ? $resolveLeaf(first, "forward", block) : undefined;
  if (!leaf) $collapseAtBoundary(block, 0);
  else if ($isTextNode(leaf)) leaf.select(0, 0);
  else if ($isNoteNode(leaf)) $selectAfter(leaf, block);
  else $selectBefore(leaf, block);
}
