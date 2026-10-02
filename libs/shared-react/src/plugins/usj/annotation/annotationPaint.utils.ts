/**
 * Which characters of which leaves an annotation paints, beyond the `<mark>` elements that paint
 * themselves: the exact ranges its display-byte carriers hold, plus the interior gaps — the bytes no
 * range can hold (a separator, a char opener's no-break space, a glyph's own edge whitespace) that
 * lie between two of its held bytes in one block, so a highlight over `12 In` has no hole after
 * the number. Its edges are never painted.
 *
 * Read-only: call inside a read or update.
 */

import {
  $decoratorRenderedText,
  $carrierHoldableRange,
  $charSeparatorPrefixLength,
  $displayAnnotationsOf,
  $isDisplayAnnotationCarrier,
  $isMarkerTrailingSeparator,
  $isTypedMarkNode,
  trimmedTextRange,
  TypedMarkNode,
} from "shared";
import {
  $getNodeByKey,
  $isDecoratorNode,
  $isElementNode,
  $isTextNode,
  LexicalNode,
  NodeKey,
} from "lexical";

/** `[start, end)` character ranges of one leaf's rendered text. */
export type PaintIntervals = [number, number][];

/** The characters `leaf` renders: a text's own, a decorator's rendered text, else none. */
export function $paintText(leaf: LexicalNode): string {
  if ($isTextNode(leaf)) return leaf.getTextContent();
  return $decoratorRenderedText(leaf);
}

/** How many characters `leaf` renders ({@link $paintText}). */
export function $paintSize(leaf: LexicalNode): number {
  return $paintText(leaf).length;
}

/** Whether character `index` of `leaf`'s rendered text is a byte no range can hold. */
function $isFillerChar(leaf: LexicalNode, index: number): boolean {
  if ($isTextNode(leaf)) {
    if ($isMarkerTrailingSeparator(leaf)) return true;
    if ($isDisplayAnnotationCarrier(leaf)) {
      const [low, high] = $carrierHoldableRange(leaf);
      return index < low || index >= high;
    }
    return index < $charSeparatorPrefixLength(leaf);
  }
  const [low, high] = trimmedTextRange($decoratorRenderedText(leaf));
  return index < low || index >= high;
}

/** The nearest block element `node` sits in, by key; the root's key at the top. */
function $blockKeyOf(node: LexicalNode): NodeKey | undefined {
  for (let parent = node.getParent(); parent; parent = parent.getParent())
    if ($isElementNode(parent) && !parent.isInline()) return parent.getKey();
  return undefined;
}

function $firstLeaf(node: LexicalNode): LexicalNode {
  let leaf = node;
  while ($isElementNode(leaf)) {
    const child = leaf.getFirstChild();
    if (!child) return leaf;
    leaf = child;
  }
  return leaf;
}

function $nextLeaf(node: LexicalNode): LexicalNode | undefined {
  for (let current: LexicalNode | null = node; current; current = current.getParent()) {
    const sibling = current.getNextSibling();
    if (sibling) return $firstLeaf(sibling);
  }
  return undefined;
}

function $leavesOf(node: LexicalNode): LexicalNode[] {
  if (!$isElementNode(node)) return [node];
  return node.getChildren().flatMap($leavesOf);
}

/** One run of an annotation's held bytes on one leaf. `inMark`: a `<mark>` holds (and paints) it. */
interface HeldPiece {
  leaf: LexicalNode;
  start: number;
  end: number;
  inMark: boolean;
}

/** How far the gap walk looks between two held pieces; a longer gap is never all filler. */
const MAX_GAP_LEAVES = 64;

/**
 * The filler characters between `from` and `to`, per leaf, when every character between them is
 * filler, every leaf between them is in their block, and nothing between them renders a glyph CSS
 * draws (a decorator with no text of its own); otherwise `undefined`.
 */
function $gapBetween(from: HeldPiece, to: HeldPiece): Map<NodeKey, [number, number]> | undefined {
  const gap = new Map<NodeKey, [number, number]>();
  const $fill = (leaf: LexicalNode, start: number, end: number): boolean => {
    for (let index = start; index < end; index++) if (!$isFillerChar(leaf, index)) return false;
    if (end > start) gap.set(leaf.getKey(), [start, end]);
    return true;
  };
  if (from.leaf.is(to.leaf)) return $fill(from.leaf, from.end, to.start) ? gap : undefined;
  const block = $blockKeyOf(from.leaf);
  if (block !== $blockKeyOf(to.leaf)) return undefined;
  if (!$fill(from.leaf, from.end, $paintSize(from.leaf))) return undefined;
  let leaf = $nextLeaf(from.leaf);
  for (let steps = 0; leaf && !leaf.is(to.leaf); steps++, leaf = $nextLeaf(leaf)) {
    if (steps >= MAX_GAP_LEAVES || $blockKeyOf(leaf) !== block) return undefined;
    if ($isDecoratorNode(leaf) && $paintSize(leaf) === 0) return undefined;
    if (!$fill(leaf, 0, $paintSize(leaf))) return undefined;
  }
  if (!leaf) return undefined;
  return $fill(to.leaf, 0, to.start) ? gap : undefined;
}

function merge(intervals: PaintIntervals): PaintIntervals {
  const sorted = [...intervals].sort(([a], [b]) => a - b);
  const out: PaintIntervals = [];
  for (const [start, end] of sorted) {
    const last = out[out.length - 1];
    if (last && start <= last[1]) last[1] = Math.max(last[1], end);
    else out.push([start, end]);
  }
  return out;
}

/**
 * What annotation `type`/`id` paints outside its marks, per leaf key: each carrier's held range (a
 * decorator held whole, `[0, 0]`, paints all it renders; one held for bytes it does not show
 * paints nothing) and every interior gap between two held pieces, the marks' pieces included. `carrierKeys` and `markKeys` are the nodes holding it.
 */
export function $paintIntervalsOf(
  type: string,
  id: string,
  carrierKeys: Iterable<NodeKey>,
  markKeys: Iterable<NodeKey>,
): Map<NodeKey, PaintIntervals> {
  const pieces: HeldPiece[] = [];
  for (const key of carrierKeys) {
    const node = $getNodeByKey(key);
    if (!node?.isAttached()) continue;
    for (const annotation of $displayAnnotationsOf(node)) {
      // Held for bytes the decorator does not show: nothing on screen is the annotation's.
      if (annotation.type !== type || annotation.id !== id || annotation.undisplayed) continue;
      const whole = annotation.start === annotation.end;
      pieces.push({
        leaf: node,
        start: whole ? 0 : annotation.start,
        end: whole ? $paintSize(node) : annotation.end,
        inMark: false,
      });
    }
  }
  for (const key of markKeys) {
    const mark = $getNodeByKey<TypedMarkNode>(key);
    if (!$isTypedMarkNode(mark) || !mark.isAttached()) continue;
    for (const leaf of $leavesOf(mark))
      pieces.push({ leaf, start: 0, end: $paintSize(leaf), inMark: true });
  }
  pieces.sort((a, b) => {
    if (a.leaf.is(b.leaf)) return a.start - b.start;
    return a.leaf.isBefore(b.leaf) ? -1 : 1;
  });

  const byLeaf = new Map<NodeKey, PaintIntervals>();
  const add = (key: NodeKey, start: number, end: number) => {
    const list = byLeaf.get(key) ?? [];
    list.push([start, end]);
    byLeaf.set(key, list);
  };
  pieces.forEach((piece, index) => {
    if (!piece.inMark) add(piece.leaf.getKey(), piece.start, piece.end);
    const next = pieces[index + 1];
    if (!next) return;
    for (const [key, [start, end]] of $gapBetween(piece, next) ?? []) add(key, start, end);
  });
  for (const [key, intervals] of byLeaf) byLeaf.set(key, merge(intervals));
  return byLeaf;
}

/** How one leaf is painted: its element whole, or segments of its rendered text, each with the
 * annotations painting it. */
export type LeafPaint =
  | { whole: true }
  | { whole: false; segments: { start: number; end: number; annotations: string[] }[] };

/**
 * Whole when every annotation paints all `size` characters (or the leaf renders none, so only its
 * element can be painted); otherwise the leaf's text cut at every annotation's edges.
 */
export function leafPaint(size: number, byAnnotation: Map<string, PaintIntervals>): LeafPaint {
  const all = [...byAnnotation.values()];
  if (
    size === 0 ||
    all.every(
      (intervals) => intervals.length === 1 && intervals[0][0] <= 0 && intervals[0][1] >= size,
    )
  )
    return { whole: true };
  const cuts = new Set<number>();
  for (const intervals of all)
    for (const [start, end] of intervals) {
      cuts.add(Math.max(0, Math.min(start, size)));
      cuts.add(Math.max(0, Math.min(end, size)));
    }
  const points = [...cuts].sort((a, b) => a - b);
  const segments: { start: number; end: number; annotations: string[] }[] = [];
  for (let i = 0; i + 1 < points.length; i++) {
    const [start, end] = [points[i], points[i + 1]];
    const annotations = [...byAnnotation]
      .filter(([, intervals]) => intervals.some(([low, high]) => low <= start && end <= high))
      .map(([annotation]) => annotation);
    if (annotations.length > 0) segments.push({ start, end, annotations });
  }
  return { whole: false, segments };
}
