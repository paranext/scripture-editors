import {
  $getSelection,
  $isDecoratorNode,
  $isElementNode,
  $isLineBreakNode,
  $isRangeSelection,
  $isTextNode,
  LexicalNode,
  NodeKey,
  PointType,
  RangeSelection,
  TextNode,
} from "lexical";
import { $findMatchingParent } from "@lexical/utils";
import { graphemeSegments } from "unicode-segmenter/grapheme";
import { $isImmutableUnmatchedNode, $isMarkerNode, $isNoteNode, $isVerseNode } from "shared";
import { $isOpaqueBlockNode } from "shared-react";

/**
 * Turns a copy limit from the host into a whole number of UTF-16 code units: fractions round down,
 * and a negative or `NaN` limit becomes `0`. Only `undefined` means no limit and stays `undefined`;
 * any other value, including `null` from an untyped caller, is floored and clamped like other
 * invalid input, so it blocks rather than lifting the limit.
 */
export function normalizeCopyLimit(limit: number | undefined): number | undefined {
  if (limit === undefined) return undefined;
  return Number.isNaN(limit) ? 0 : Math.max(0, Math.floor(limit));
}

/**
 * The start of `text`, at most `limit` UTF-16 code units long (the units `String.length` counts),
 * never ending partway through a user-perceived character: a letter keeps its combining marks and
 * a character outside the Basic Multilingual Plane keeps both of its halves, or they are left out
 * together.
 *
 * @param limit - A whole number of UTF-16 code units, as {@link normalizeCopyLimit} returns.
 */
export function sliceToCopyLimit(text: string, limit: number): string {
  if (text.length <= limit) return text;
  return text.slice(0, graphemeBoundaryAtOrBefore(text, limit));
}

/**
 * The largest offset in `text` that is at most `offset` and falls between user-perceived
 * characters, so text cut there keeps each letter with its combining marks, each conjunct and each
 * surrogate pair whole. Uses `unicode-segmenter` rather than `Intl.Segmenter`, whose answer depends
 * on the runtime's ICU data and can split conjuncts.
 */
function graphemeBoundaryAtOrBefore(text: string, offset: number): number {
  if (offset >= text.length) return text.length;
  // The segments are produced lazily, so this reads only as far as `offset`.
  let boundary = 0;
  for (const { index, segment } of graphemeSegments(text)) {
    if (index + segment.length > offset) break;
    boundary = index + segment.length;
  }
  return boundary;
}

/**
 * Most times {@link $limitSelectionLength} re-measures a shortened selection while searching for
 * one that fits; enough for a binary search over any selection up to 65,536 characters. Past that,
 * the search stops early with a shorter selection that still fits.
 */
const MAX_FIT_ATTEMPTS = 16;

/**
 * Shortens the current range selection so that `$measure` of it is at most `limit`. The point
 * earliest in the document stays where it is and the later point moves back, whichever way the
 * selection was made. By default `$measure` is the selection's text length in UTF-16 code units,
 * counting the line breaks `getTextContent()` adds between blocks.
 *
 * The end never falls partway through a user-perceived character within a text node (a letter and
 * its combining marks, or both halves of a surrogate pair), the same boundary
 * {@link sliceToCopyLimit} uses, so the shortened selection's text is what a limited copy of it
 * writes, including a character whose marks start the next text node. A marker glyph, a verse
 * glyph, a token-mode text node, a note and an opaque construct (a table, a figure, a sidebar) are
 * kept whole or left out, so a cut of the shortened selection never removes part of one.
 *
 * A `$measure` that counts more than the selected text (a copy written as USFM) is met by
 * searching for the longest shortened selection whose measure fits, re-measuring at most
 * {@link MAX_FIT_ATTEMPTS} times. The result may hold less than the limit, possibly nothing, in
 * which case the selection collapses onto its start.
 *
 * Mutating: call inside `editor.update()` or a command listener.
 *
 * @param limit - Maximum measure to leave selected; `0` or less collapses the selection onto its
 *   start.
 * @param $measure - How much a selection copies. Read-only; called inside the same update.
 * @returns `true` if the selection was changed.
 */
export function $limitSelectionLength(
  limit: number,
  $measure: (selection: RangeSelection) => number = (selection) =>
    selection.getTextContent().length,
): boolean {
  const selection = $getSelection();
  if (!$isRangeSelection(selection) || selection.isCollapsed()) return false;
  if ($measure(selection) <= limit) return false;

  const [startPoint, endPoint] = selection.isBackward()
    ? [selection.focus, selection.anchor]
    : [selection.anchor, selection.focus];
  const start = { key: startPoint.key, offset: startPoint.offset, type: startPoint.type };
  const startOffset = $characterOffset(startPoint);
  const endOffset = $characterOffset(endPoint);
  const nodes = selection.getNodes();
  // Which note or opaque construct each node belongs to does not depend on the limit, so it is
  // worked out once for every attempt below.
  const groups = new Map(nodes.map((node) => [node.getKey(), $outermostWholeGroup(node)]));

  // Selects from the start up to `textLimit` characters of text; `false` if no text fits.
  const selectUpTo = (textLimit: number): boolean => {
    const end =
      textLimit > 0 ? $findEnd(nodes, groups, startOffset, endOffset, textLimit) : undefined;
    selection.anchor.set(start.key, start.offset, start.type);
    if (end) selection.focus.set(end.node.getKey(), end.offset, "text");
    else selection.focus.set(start.key, start.offset, start.type);
    return !!end;
  };

  // The text limit is the first guess, and exact when `$measure` counts the selected text. When it
  // counts more, search for the most text whose measure still fits: the measure grows with the
  // text selected.
  let high = Math.min(limit, selection.getTextContent().length);
  if (selectUpTo(high) && $measure(selection) <= limit) return true;
  let low = 0;
  let best = 0;
  high -= 1;
  for (let attempt = 0; attempt < MAX_FIT_ATTEMPTS && low <= high; attempt++) {
    const middle = Math.floor((low + high) / 2);
    if (selectUpTo(middle) && $measure(selection) <= limit) {
      best = middle;
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  selectUpTo(best);
  return true;
}

/**
 * Shortens the current selection until `$measure` of it — how much its copy writes — fits
 * `copyLimit`, for a view whose copy writes more than the selected text (USFM). Run after
 * `CopyLimitPlugin` has shortened the selection by its text, so what stays selected is exactly
 * what is copied or cut.
 *
 * Mutating: call inside an update — in practice, a `COPY_COMMAND` or `CUT_COMMAND` handler ahead of
 * the one that writes the clipboard.
 *
 * @returns `true` if nothing fits, so the selection collapsed and the copy or cut must be blocked.
 */
function $fitSelectionToCopyLimit(
  copyLimit: number | undefined,
  $measure: (selection: RangeSelection) => number,
): boolean {
  const limit = normalizeCopyLimit(copyLimit);
  if (limit === undefined || limit <= 0) return false;
  if (!$limitSelectionLength(limit, $measure)) return false;
  const selection = $getSelection();
  return $isRangeSelection(selection) && selection.isCollapsed();
}

/**
 * A `COPY_COMMAND` or `CUT_COMMAND` handler body for a view whose copy writes more than the
 * selected text: fits the selection with {@link $fitSelectionToCopyLimit}, and when nothing fits
 * blocks the copy or cut (`preventDefault`, and claims the command), since letting it through
 * would have the browser copy, or cut, the whole selection it still shows.
 *
 * Mutating: call inside an update — in practice, as the whole of a `COMMAND_PRIORITY_CRITICAL`
 * `COPY_COMMAND` or `CUT_COMMAND` handler.
 *
 * @returns Whether the command is claimed (nothing fits).
 */
export function $fitOrBlock(
  event: ClipboardEvent | KeyboardEvent | null,
  copyLimit: number | undefined,
  $measure: (selection: RangeSelection) => number,
): boolean {
  if (!$fitSelectionToCopyLimit(copyLimit, $measure)) return false;
  event?.preventDefault();
  return true;
}

/**
 * Whether `node` is text that a limited copy or cut takes whole or not at all: a token-mode node,
 * which Lexical selects and deletes whole, or a marker or verse glyph, whose partial removal would
 * break the structure it spells.
 */
function $isAtomicText(node: TextNode): boolean {
  return (
    node.isToken() || $isMarkerNode(node) || $isVerseNode(node) || $isImmutableUnmatchedNode(node)
  );
}

/**
 * Walks the selected nodes once, counting UTF-16 code units exactly as
 * `RangeSelection.getTextContent()` builds its string, and returns the text point where `limit` of
 * them have been counted. That method concatenates the (clipped) text of text nodes, the text of
 * decorator and line-break nodes, and one `"\n"` before each block element unless the node just
 * before it was a non-empty block element. Nested blocks follow the same rule because the node
 * list is flat.
 *
 * The returned point is always inside a text node, so a limit that runs out on a line break,
 * decorator or atomic text node ({@link $isAtomicText}) ends at the previous text instead, under
 * the limit. A note or an opaque construct (a table, a figure, a sidebar) that the selection runs
 * into is kept whole or left out the same way: ending inside one would leave a cut removing, or
 * damaging, the whole construct while copying only part of it. Since the end is always a text
 * point, a construct that fits is kept only once text after it fits too. The one the selection
 * starts inside is exempt, so its start is kept; `groups` maps each node's key to its construct.
 * The end never falls inside a user-perceived character, even one whose marks start the next text
 * node ({@link $endOnClusterBoundary}). Returns `undefined` if no text fits.
 */
function $findEnd(
  nodes: LexicalNode[],
  groups: Map<NodeKey, LexicalNode | undefined>,
  startOffset: number,
  endOffset: number,
  limit: number,
): { node: TextNode; offset: number } | undefined {
  const lastIndex = nodes.length - 1;
  let count = 0;
  let prevWasElement = true;
  let lastTextEnd: { node: TextNode; offset: number } | undefined;
  // The outermost note or opaque construct the walk is inside, and the end to fall back to if the
  // limit runs out in it.
  let openGroup: { node: LexicalNode; endBefore: typeof lastTextEnd } | undefined;
  const end = (point: typeof lastTextEnd) =>
    $endOnClusterBoundary(openGroup ? openGroup.endBefore : point, nodes, startOffset);
  // The construct the selection starts inside, if any, is not kept whole: there is nothing before
  // it to fall back to, so the end falls inside it like in ordinary text.
  const startGroup = nodes.length > 0 ? groups.get(nodes[0].getKey()) : undefined;

  for (let i = 0; i <= lastIndex; i++) {
    const node = nodes[i];
    const found = groups.get(node.getKey());
    const group = found && startGroup?.is(found) ? undefined : found;
    if (openGroup && !openGroup.node.is(group)) {
      // Leaving a construct: its last text is not its end (a figure's closing marker, a table's
      // cell glyphs follow it), so an end there would still split it. Until more text fits, the
      // end falls back to before the construct.
      if (lastTextEnd && openGroup.node.isParentOf(lastTextEnd.node))
        lastTextEnd = openGroup.endBefore;
      openGroup = undefined;
    }
    if (group && !openGroup) openGroup = { node: group, endBefore: lastTextEnd };
    if ($isElementNode(node) && !node.isInline()) {
      if (!prevWasElement) {
        if (count + 1 > limit) return end(lastTextEnd);
        count += 1;
      }
      prevWasElement = !node.isEmpty();
      continue;
    }
    prevWasElement = false;
    if ($isTextNode(node)) {
      const from = i === 0 ? startOffset : 0;
      const to = i === lastIndex ? endOffset : node.getTextContentSize();
      const available = to - from;
      const isAtomic = $isAtomicText(node);
      if (isAtomic && count + available > limit) return end(lastTextEnd);
      if (!isAtomic && count + available >= limit) {
        const boundary = graphemeBoundaryAtOrBefore(node.getTextContent(), from + (limit - count));
        return end({ node, offset: Math.max(from, boundary) });
      }
      count += available;
      lastTextEnd = { node, offset: to };
    } else if ($isDecoratorNode(node) || $isLineBreakNode(node)) {
      const size = node.getTextContentSize();
      if (count + size > limit) return end(lastTextEnd);
      count += size;
    }
  }
  return end(lastTextEnd);
}

/**
 * The outermost note or opaque construct (see `$isOpaqueBlockNode`) that `node` is, or is
 * inside; `undefined` if none.
 */
function $outermostWholeGroup(node: LexicalNode): LexicalNode | undefined {
  let group: LexicalNode | undefined;
  for (let current: LexicalNode | null = node; current; current = current.getParent())
    if ($isNoteNode(current) || $isOpaqueBlockNode(current)) group = current;
  return group;
}

/**
 * Moves an end point back so it does not fall inside a user-perceived character whose parts sit in
 * neighbouring text nodes (a letter ending one node, its marks starting the next). The text around
 * the point is taken from the text nodes of its block, one node either side. The end moves back
 * within its own node, or into the node before it when that node is selected too; `undefined` if
 * no selected text is left before the character.
 */
function $endOnClusterBoundary(
  point: { node: TextNode; offset: number } | undefined,
  nodes: LexicalNode[],
  startOffset: number,
): { node: TextNode; offset: number } | undefined {
  if (!point) return point;
  const block = $findMatchingParent(point.node, (node) => $isElementNode(node) && !node.isInline());
  const texts = $isElementNode(block) ? block.getAllTextNodes() : [point.node];
  const index = texts.findIndex((text) => text.is(point.node));
  if (index < 0) return point;
  const first = Math.max(0, index - 1);
  const last = Math.min(texts.length - 1, index + 1);
  let around = "";
  const starts: number[] = [];
  for (let k = first; k <= last; k++) {
    starts.push(around.length);
    around += texts[k].getTextContent();
  }
  const ownStart = starts[index - first];
  const position = ownStart + point.offset;
  const boundary = graphemeBoundaryAtOrBefore(around, position);
  if (boundary === position) return point;

  const isStart = (node: TextNode) => nodes[0]?.is(node) ?? false;
  // An atomic node is kept whole, so the end moves to before all of it.
  if ($isAtomicText(point.node)) return { ...point, offset: isStart(point.node) ? startOffset : 0 };
  if (boundary >= ownStart) {
    const offset = boundary - ownStart;
    return offset >= (isStart(point.node) ? startOffset : 0) ? { ...point, offset } : undefined;
  }
  const previous = index > first ? texts[index - 1] : undefined;
  if (!previous || !nodes.some((node) => node.is(previous))) return undefined;
  if ($isAtomicText(previous))
    return { node: previous, offset: isStart(previous) ? startOffset : 0 };
  const offset = boundary - starts[0];
  return offset >= (isStart(previous) ? startOffset : 0) ? { node: previous, offset } : undefined;
}

/** Mirrors how `RangeSelection.getTextContent()` turns a point into a character offset. */
function $characterOffset(point: PointType): number {
  if (point.type === "text") return point.offset;
  const parent = point.getNode();
  return $isElementNode(parent) && point.offset === parent.getChildrenSize()
    ? parent.getTextContent().length
    : 0;
}
