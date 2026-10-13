import {
  $createPoint,
  $getSelection,
  $isDecoratorNode,
  $isElementNode,
  $isLineBreakNode,
  $isRangeSelection,
  $isTextNode,
  isSelectionWithinEditor,
  LexicalEditor,
  LexicalNode,
  NodeKey,
  PointType,
  RangeSelection,
  TextNode,
} from "lexical";
import { $dfs, $findMatchingParent } from "@lexical/utils";
import { graphemeSegments } from "unicode-segmenter/grapheme";
import { $isChapterNode, $isGlyphTextNode, $isNoteNode, $isSomeChapterNode } from "shared";
import { $isImmutableNoteCallerNode, $isOpaqueBlockNode, $isSomeVerseNode } from "shared-react";

/**
 * Turns a copy limit from the host into a whole number of UTF-16 code units, as
 * `EditorOptions.copyLimit` describes. Only `undefined` means no limit and stays `undefined`. Any
 * other value that is not a finite number once converted, including `null`, a string that is not a
 * number, or an infinity, from an untyped caller, becomes `0`, so it blocks rather than lifting the
 * limit.
 */
export function normalizeCopyLimit(limit: number | undefined): number | undefined {
  if (limit === undefined) return undefined;
  const value = Number(limit);
  return Number.isFinite(value) ? Math.max(0, Math.floor(value)) : 0;
}

/**
 * Whether `event` is a browser clipboard event whose page selection starts or ends outside
 * `editor`, so the editor's own selection is not what the user selected and the copy is the page
 * guard's to write.
 */
export function isCopyFromOutsideEditor(
  editor: LexicalEditor,
  event: ClipboardEvent | KeyboardEvent | null | undefined,
): boolean {
  if (!event || !("clipboardData" in event)) return false;
  const domSelection = editor.getRootElement()?.ownerDocument.getSelection();
  const anchor = domSelection?.anchorNode;
  const focus = domSelection?.focusNode;
  return !!anchor && !!focus && !isSelectionWithinEditor(editor, anchor, focus);
}

/**
 * The start of `text`, at most `limit` UTF-16 code units long (the units `String.length` counts),
 * never ending partway through a grapheme cluster: a letter keeps its combining marks and a
 * character outside the Basic Multilingual Plane keeps both of its halves, or they are left out
 * together.
 *
 * @param limit - A whole number of UTF-16 code units, as {@link normalizeCopyLimit} returns.
 */
export function sliceToCopyLimit(text: string, limit: number): string {
  if (text.length <= limit) return text;
  return text.slice(0, graphemeBoundaryAtOrBefore(text, limit));
}

/**
 * The largest offset in `text` that is at most `offset` and falls between grapheme clusters, as
 * `unicode-segmenter` finds them, so text cut there keeps each letter with its combining marks and
 * each surrogate pair whole. Uses `unicode-segmenter` rather than `Intl.Segmenter`, whose answer
 * depends on the runtime's ICU data.
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

/** How {@link $limitSelectionLength} measures a selection. */
export interface SelectionLimitOptions {
  /**
   * How much a selection copies. Read-only; called inside the same update. Defaults to the length
   * of the selection's text ({@link $selectionShownText} with `$isHidden`).
   */
  $measure?: (selection: RangeSelection) => number;
  /** Nodes whose text the view does not show, which count for nothing. */
  $isHidden?: (node: LexicalNode) => boolean;
}

/**
 * Shortens the current range selection so that `$measure` of it is at most `limit`. The point
 * earliest in the document stays where it is and the later point moves back, whichever way the
 * selection was made. By default `$measure` is the selection's text length in UTF-16 code units,
 * counting the line breaks `getTextContent()` adds between blocks and leaving out the text of
 * nodes `$isHidden` picks.
 *
 * The end never splits a grapheme cluster, the boundary {@link sliceToCopyLimit} uses, even one
 * whose marks start the next text node. Atomic text ({@link $isAtomicText}), a note and an opaque
 * construct are kept whole or left out, so a cut of the shortened selection never removes part of
 * one; `EditorOptions.copyLimit` states the rest of the contract.
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
 * @returns `true` if the selection was changed.
 */
export function $limitSelectionLength(
  limit: number,
  { $isHidden, $measure }: SelectionLimitOptions = {},
): boolean {
  const $textLength = (current: RangeSelection) =>
    $isHidden ? $selectionShownText(current, $isHidden).length : current.getTextContent().length;
  $measure ??= $textLength;
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
  // The construct the selection starts strictly inside, if any, is not kept whole: there is nothing
  // of it before the start to fall back to, so the end falls inside it like in ordinary text. One
  // the selection starts at, or before, is kept whole like any other.
  const firstGroup = nodes.length > 0 ? groups.get(nodes[0].getKey()) : undefined;
  const startGroup =
    firstGroup && $isStrictlyInside(startPoint, firstGroup) ? firstGroup : undefined;

  // Selects from the start up to `textLimit` characters of text; `false` if no text fits.
  const selectUpTo = (textLimit: number): boolean => {
    const end =
      textLimit > 0
        ? $findEnd(nodes, groups, startGroup, startOffset, endOffset, textLimit, $isHidden)
        : undefined;
    selection.anchor.set(start.key, start.offset, start.type);
    if (end) selection.focus.set(end.node.getKey(), end.offset, "text");
    else selection.focus.set(start.key, start.offset, start.type);
    // A point that was assigned rather than created by the selection (as `EditorRef.setSelection`
    // does) does not clear the selection's cached nodes when it is set.
    selection.setCachedNodes(null);
    return !!end;
  };

  // The text limit is the first guess, and exact when `$measure` counts the selected text. When it
  // counts more, search for the most text whose measure still fits: the measure grows with the
  // text selected.
  let high = Math.min(limit, $textLength(selection));
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
 * Whether `node` is text that a limited copy or cut takes whole or not at all: a token-mode node,
 * which Lexical selects and deletes whole; glyph text (`$isGlyphTextNode`), which pictures a node's
 * own state; or a chapter line's `\c` text, whose partial removal would break the chapter it
 * spells.
 */
function $isAtomicText(node: TextNode): boolean {
  return node.isToken() || $isGlyphTextNode(node) || $isChapterNode(node.getParent());
}

/**
 * Whether `point` falls after the start of `group`'s first text, so some of the construct comes
 * before it.
 */
function $isStrictlyInside(point: PointType, group: LexicalNode): boolean {
  const first = $isElementNode(group) ? group.getAllTextNodes()[0] : undefined;
  return !!first && $createPoint(first.getKey(), 0, "text").isBefore(point);
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
 * point, a construct that fits is kept only once text after it fits too. `startGroup`, the one the
 * selection starts inside, is exempt, so its start is kept; `groups` maps each node's key to its
 * construct. The end never splits a grapheme cluster, even one whose marks start the next text
 * node ({@link $endOnClusterBoundary}), and moving it back for that never re-enters a
 * construct. Nodes `$isHidden` picks count for nothing. Returns `undefined` if no text fits.
 */
function $findEnd(
  nodes: LexicalNode[],
  groups: Map<NodeKey, LexicalNode | undefined>,
  startGroup: LexicalNode | undefined,
  startOffset: number,
  endOffset: number,
  limit: number,
  $isHidden: ((node: LexicalNode) => boolean) | undefined,
): { node: TextNode; offset: number } | undefined {
  const lastIndex = nodes.length - 1;
  let count = 0;
  let prevWasElement = true;
  let lastTextEnd: { node: TextNode; offset: number } | undefined;
  // The outermost note or opaque construct the walk is inside, and the end to fall back to if the
  // limit runs out in it.
  let openGroup: { node: LexicalNode; endBefore: typeof lastTextEnd } | undefined;
  // The end before each construct the walk has entered, keyed by the construct's key.
  const endsBefore = new Map<NodeKey, typeof lastTextEnd>();
  const keptWholeGroupOf = (node: LexicalNode) => {
    const found = groups.get(node.getKey());
    return found && startGroup?.is(found) ? undefined : found;
  };
  const end = (point: typeof lastTextEnd) => {
    let candidate = openGroup ? openGroup.endBefore : point;
    for (;;) {
      const onBoundary = $endOnClusterBoundary(candidate, nodes, startOffset);
      if (!onBoundary || !candidate || onBoundary.node.is(candidate.node)) return onBoundary;
      // Moved back into the node before, which may be the last text of a construct kept whole.
      const group = keptWholeGroupOf(onBoundary.node);
      if (!group || group.is(keptWholeGroupOf(candidate.node))) return onBoundary;
      candidate = endsBefore.get(group.getKey());
    }
  };

  for (let i = 0; i <= lastIndex; i++) {
    const node = nodes[i];
    const group = keptWholeGroupOf(node);
    if (openGroup && !openGroup.node.is(group)) {
      // Leaving a construct: its last text is not its end (a figure's closing marker, a table's
      // cell glyphs follow it), so an end there would still split it. Until more text fits, the
      // end falls back to before the construct.
      if (lastTextEnd && openGroup.node.isParentOf(lastTextEnd.node))
        lastTextEnd = openGroup.endBefore;
      openGroup = undefined;
    }
    if (group && !openGroup) {
      openGroup = { node: group, endBefore: lastTextEnd };
      endsBefore.set(group.getKey(), lastTextEnd);
    }
    if ($isHidden?.(node)) continue;
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
 * Moves an end point back so it does not fall inside a grapheme cluster whose parts sit in
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

/**
 * The selection's text as the view shows it: `RangeSelection.getTextContent()`, built the same way,
 * without the text of nodes `$isHidden` picks.
 *
 * Read-only: call inside `editor.getEditorState().read()`, an update, or a command handler.
 */
export function $selectionShownText(
  selection: RangeSelection,
  $isHidden: (node: LexicalNode) => boolean,
): string {
  const nodes = selection.getNodes();
  const lastIndex = nodes.length - 1;
  const [startPoint, endPoint] = selection.isBackward()
    ? [selection.focus, selection.anchor]
    : [selection.anchor, selection.focus];
  const isElementRangeInOneNode =
    lastIndex === 0 &&
    startPoint.type === "element" &&
    endPoint.type === "element" &&
    startPoint.offset !== endPoint.offset;
  let text = "";
  let prevWasElement = true;
  nodes.forEach((node, i) => {
    if ($isHidden(node)) return;
    if ($isElementNode(node) && !node.isInline()) {
      if (!prevWasElement) text += "\n";
      prevWasElement = !node.isEmpty();
      return;
    }
    prevWasElement = false;
    if ($isTextNode(node)) {
      const content = node.getTextContent();
      if (isElementRangeInOneNode) text += content;
      else
        text += content.slice(
          i === 0 ? $characterOffset(startPoint) : 0,
          i === lastIndex ? $characterOffset(endPoint) : content.length,
        );
    } else if (
      ($isDecoratorNode(node) || $isLineBreakNode(node)) &&
      (i !== lastIndex || !selection.isCollapsed())
    ) {
      text += node.getTextContent();
    }
  });
  return text;
}

/**
 * Whether `node` sits inside a collapsed note, whose text the view does not show.
 *
 * Read-only: call inside `editor.getEditorState().read()`, an update, or a command handler.
 */
export function $isInCollapsedNote(node: LexicalNode): boolean {
  const parent = node.getParent();
  return (
    !!parent &&
    $findMatchingParent(parent, (current) => $isNoteNode(current) && !!current.getIsCollapsed()) !==
      null
  );
}

/**
 * How many UTF-16 code units of note preview text the note callers among `nodes`, or inside them,
 * carry. A caller's HTML and internal clipboard flavors carry its note's whole text.
 *
 * Read-only: call inside `editor.getEditorState().read()`, an update, or a command handler.
 */
export function $notePreviewLength(nodes: LexicalNode[]): number {
  const callers = new Map<NodeKey, number>();
  const add = (node: LexicalNode) => {
    if ($isImmutableNoteCallerNode(node)) callers.set(node.getKey(), node.getPreviewText().length);
  };
  for (const node of nodes) {
    add(node);
    if ($isElementNode(node)) for (const { node: descendant } of $dfs(node)) add(descendant);
  }
  let length = 0;
  for (const size of callers.values()) length += size;
  return length;
}

/**
 * Whether the selection covers structure that plain text cannot carry: a verse or chapter marker,
 * a note, an opaque construct, or any other decorator.
 *
 * Read-only: call inside `editor.getEditorState().read()`, an update, or a command handler.
 */
export function $selectionHoldsStructure(selection: RangeSelection): boolean {
  return selection
    .getNodes()
    .some(
      (node) =>
        $isDecoratorNode(node) ||
        $isNoteNode(node) ||
        $isSomeVerseNode(node) ||
        $isSomeChapterNode(node) ||
        $isOpaqueBlockNode(node),
    );
}

/** Mirrors how `RangeSelection.getTextContent()` turns a point into a character offset. */
function $characterOffset(point: PointType): number {
  if (point.type === "text") return point.offset;
  const parent = point.getNode();
  return $isElementNode(parent) && point.offset === parent.getChildrenSize()
    ? parent.getTextContent().length
    : 0;
}
