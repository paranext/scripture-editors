/**
 * Wrapping a selection in a `TypedMarkNode`, adapted from `$wrapSelectionInMarkNode` in
 * https://github.com/facebook/lexical/blob/92c47217244f9d3c22a59728633fb41a10420724/packages/lexical-mark/src/index.ts
 *
 * Kept apart from `TypedMarkNode.ts` because it reads display-run structure
 * (`attributeDisplay.utils.ts`), which itself imports `TypedMarkNode.ts`.
 */

import { $isAttributeRunNode } from "../usj/AttributeRunNode.js";
import { $charSeparatorPrefixLength } from "../usj/markerSeparators.utils.js";
import { $isMilestoneNode } from "../usj/MilestoneNode.js";
import { TYPED_MARK_WRAP_TAG } from "../usj/node-constants.js";
import { $isMarkerTrailingSeparator } from "../usj/node.utils.js";
import { $isVerseNode } from "../usj/VerseNode.js";
import {
  $addDisplayAnnotation,
  $carrierHoldableRange,
  $decoratorRenderedText,
  $isAttributeDisplayRun,
  $isDisplayAnnotationCarrier,
  $isElementOwnerRunAnchor,
  $registerDisplayAnnotation,
  trimmedTextRange,
} from "./displayAnnotations.utils.js";
import { $isImmutableUnmatchedNode } from "./ImmutableUnmatchedNode.js";
import { $isMarkerNode } from "./MarkerNode.js";
import {
  $createTypedMarkNode,
  $isTypedMarkNode,
  COMMENT_MARK_TYPE,
  TypedMarkOnClick,
  TypedMarkOnMouseEnter,
  TypedMarkOnMouseLeave,
  TypedMarkOnRemove,
} from "./TypedMarkNode.js";
import type { ElementNode, LexicalNode, NodeKey, PointType, RangeSelection } from "lexical";
import { $addUpdateTag, $isElementNode, $isTextNode } from "lexical";

/**
 * Whether `node` is part of a display owner's unit: the owner's `AttributeRunNode` wrapper(s) and
 * anything inside one, together with what the run is found beside — a verse or milestone the
 * wrapper directly follows (`\va 3\va*`, `|who="Pilate"`), or a note's caller or chapter's glyph
 * text ({@link $isElementOwnerRunAnchor}). The run belongs to its owner by position alone, so
 * moving either half into a mark without the other reads as the run having been deleted: the
 * display-run sync then removes a milestone, or writes a second run beside a caller. A verse and an
 * unmatched closer are also `TextNode`s, which the wrap would otherwise split like content.
 */
function $isDisplayOwnerUnit(node: LexicalNode): boolean {
  return (
    $isVerseNode(node) ||
    $isMilestoneNode(node) ||
    $isAttributeRunNode(node) ||
    $isAttributeRunNode(node.getParent()) ||
    $isElementOwnerRunAnchor(node) ||
    $isImmutableUnmatchedNode(node)
  );
}

/**
 * A caret between leaves: a text offset in a text leaf, or 0 (in front of) / 1 (behind) any other
 * leaf. Two spellings of one caret (the end of a text, the front of the next leaf) compare as
 * adjacent, never as reversed.
 */
interface LeafCaret {
  leaf: LexicalNode;
  offset: number;
}

function leafSize(node: LexicalNode): number {
  return $isTextNode(node) ? node.getTextContentSize() : 1;
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

function $lastLeaf(node: LexicalNode): LexicalNode {
  let leaf = node;
  while ($isElementNode(leaf)) {
    const child = leaf.getLastChild();
    if (!child) return leaf;
    leaf = child;
  }
  return leaf;
}

/**
 * The caret a selection point stands for. An element point `(E, i)` is in front of child `i`'s
 * first leaf, or behind E's last leaf when `i` is past its children — never a text offset.
 */
function $caretOf(point: PointType): LeafCaret {
  const node = point.getNode();
  if (!$isElementNode(node))
    return { leaf: node, offset: $isTextNode(node) ? point.offset : Math.min(point.offset, 1) };
  const child = node.getChildAtIndex(point.offset);
  if (child) return { leaf: $firstLeaf(child), offset: 0 };
  const last = node.getLastChild();
  if (!last) return { leaf: node, offset: 0 };
  const leaf = $lastLeaf(last);
  return { leaf, offset: leafSize(leaf) };
}

function compareCarets(a: LeafCaret, b: LeafCaret): number {
  if (a.leaf.is(b.leaf)) return a.offset - b.offset;
  return a.leaf.isBefore(b.leaf) ? -1 : 1;
}

/** The `[from, to)` offsets of `leaf` the range from `start` to `end` covers (`from === to`: none). */
function $coveredOffsets(leaf: LexicalNode, start: LeafCaret, end: LeafCaret): [number, number] {
  const size = leafSize(leaf);
  let from = size;
  if (start.leaf.is(leaf)) from = start.offset;
  else if (start.leaf.isBefore(leaf)) from = 0;
  let to = 0;
  if (end.leaf.is(leaf)) to = end.offset;
  else if (leaf.isBefore(end.leaf)) to = size;
  return [from, Math.max(from, to)];
}

/** The first leaf after `node` in document order, if any. */
function $leafAfter(node: LexicalNode): LexicalNode | undefined {
  for (let current: LexicalNode | null = node; current; current = current.getParent()) {
    const sibling = current.getNextSibling();
    if (sibling) return $firstLeaf(sibling);
  }
  return undefined;
}

/**
 * Whether the range covers `element` from in front of its first leaf through behind its last.
 *
 * An element that ends with a separator (a collapsed note's layout does) counts as covered only
 * when the range also goes on past it: moved into a mark, the separator then sits between held
 * bytes. A range that stops at the element's end leaves it in place, since its mark would
 * otherwise end in a separator with nothing held beyond it.
 */
function $coversWhole(element: ElementNode, start: LeafCaret, end: LeafCaret): boolean {
  const first = $firstLeaf(element);
  const last = $lastLeaf(element);
  if (compareCarets(start, { leaf: first, offset: 0 }) > 0) return false;
  if (compareCarets(end, { leaf: last, offset: leafSize(last) }) < 0) return false;
  if ($isMarkerTrailingSeparator(last)) {
    const after = $leafAfter(element);
    if (!after || compareCarets(end, { leaf: after, offset: 0 }) <= 0) return false;
  }
  return true;
}

/**
 * Where a range holds a read-only decorator it ends inside of, in the decorator's rendered text:
 * `[start, end)`, or `start === end` when the range names none of the bytes it shows (only bytes it
 * stands for, such as a hidden `\va`).
 */
export interface DecoratorHold {
  start: number;
  end: number;
  /** For a hold showing none of its bytes (`start === end`): which of the decorator's holdable
   * bytes it holds, `[start, end)` (`$decoratorHoldableText`). */
  undisplayed?: [number, number];
}

/** How {@link $wrapSelectionInTypedMarkNode} holds what a selection cannot point inside of. */
export interface TypedMarkWrapOptions {
  /** By decorator key: the part of a read-only decorator an end of the range falls inside of.
   * A decorator not listed is held over all it renders. */
  decoratorHolds?: ReadonlyMap<NodeKey, DecoratorHold>;
}

/**
 * The `[start, end)` bytes of carrier `node` the range from `start` to `end` covers, or
 * `undefined` when it covers none; `{ undisplayed }`, naming which of its holdable bytes, for a decorator held only
 * for bytes it does not show. A decorator is covered only when the range passes over it: over the part `holds` names, or
 * all the text it renders without its edge whitespace (whole, `[0, 0]`, when it renders none, as a
 * caller CSS draws). A text carrier's covered bytes are clamped to its holdable range
 * ({@link $carrierHoldableRange}), so a glyph's own edge whitespace is never held.
 */
function $coveredCarrierRange(
  node: LexicalNode,
  start: LeafCaret,
  end: LeafCaret,
  holds: ReadonlyMap<NodeKey, DecoratorHold> | undefined,
): [number, number] | { undisplayed: [number, number] } | undefined {
  if (!$isDisplayAnnotationCarrier(node)) return undefined;
  const [from, to] = $coveredOffsets(node, start, end);
  if (to <= from) return undefined;
  if (!$isTextNode(node)) {
    const hold = holds?.get(node.getKey());
    if (hold)
      return hold.end > hold.start
        ? [hold.start, hold.end]
        : { undisplayed: hold.undisplayed ?? [0, 0] };
    return trimmedTextRange($decoratorRenderedText(node));
  }
  const [low, high] = $carrierHoldableRange(node);
  const clamped: [number, number] = [Math.max(from, low), Math.min(to, high)];
  return clamped[1] > clamped[0] ? clamped : undefined;
}

export function $wrapSelectionInTypedMarkNode(
  selection: RangeSelection,
  type: string,
  id: string,
  onClick?: TypedMarkOnClick,
  onRemove?: TypedMarkOnRemove,
  onMouseEnter?: TypedMarkOnMouseEnter,
  onMouseLeave?: TypedMarkOnMouseLeave,
  options: TypedMarkWrapOptions = {},
): void {
  // A collapsed range names no byte, so it holds nothing — not even the node beside it.
  if (selection.isCollapsed()) return;
  const nodes = selection.getNodes();
  const isBackward = selection.isBackward();
  const [startPoint, endPoint] = isBackward
    ? [selection.focus, selection.anchor]
    : [selection.anchor, selection.focus];
  // Measured before the loop splits anything: `splitText` keeps the original key on the first
  // piece and ordering reads the live tree, so each caret keeps naming the same place.
  const startCaret = $caretOf(startPoint);
  const endCaret = $caretOf(endPoint);
  if (compareCarets(startCaret, endCaret) >= 0) return;
  let carrierAnnotated = false;
  const $annotateCarrier = (node: LexicalNode) => {
    const covered = $coveredCarrierRange(node, startCaret, endCaret, options.decoratorHolds);
    if (!covered) return;
    // Tagged here, at the wrap's first actual mutation, never unconditionally at the top of the
    // function: an update's tags survive only as long as the commit that carries them changes a
    // node (see `CURSOR_CHANGE_TAG` in `node-constants.ts`), so a call that ends up covering no
    // byte must never add this tag, or it rides into the update's own selection-only commit and
    // then onto whatever the user's NEXT edit turns out to be.
    $addUpdateTag(TYPED_MARK_WRAP_TAG);
    if (Array.isArray(covered)) $addDisplayAnnotation(node, type, id, covered[0], covered[1]);
    else {
      const [from, to] = covered.undisplayed;
      $addDisplayAnnotation(node, type, id, from, to, { undisplayed: true });
    }
    carrierAnnotated = true;
  };
  let currentNodeParent;
  let lastCreatedMarkNode;

  // We only want wrap adjacent text nodes, line break nodes and inline element nodes. For decorator
  // nodes and block element nodes, we step out of their boundary and start again after, if there
  // are more nodes.
  for (const node of nodes) {
    if ($isElementNode(lastCreatedMarkNode) && lastCreatedMarkNode.isParentOf(node)) {
      // If the current node is a child of the last created mark node, there is nothing to do here
      continue;
    }
    if (
      $isMarkerNode(node) ||
      $isMarkerTrailingSeparator(node) ||
      $isAttributeDisplayRun(node) ||
      $isDisplayOwnerUnit(node)
    ) {
      // A display-byte node — a marker glyph, a separator, an attribute run's text, a display
      // owner or the text its run is anchored after — is never moved into a mark or split by one.
      //
      // A marker glyph is display bytes its construct owns, never annotated content: moving one
      // into a mark takes it out of the construct's own children, which the marker-edit engine
      // reads as the marker having been deleted (a char span or note loses its closer, a note its
      // opener) and settles by dissolving or deleting the construct. So end the current mark at
      // the glyph, and start any later content in a new one. Remember the glyph's parent, though:
      // it is the element the selection is inside, which must not then be wrapped whole.
      //
      // The engine-owned separator after a `\p`, `\tr` or `\tc` glyph, and a collapsed note's
      // layout separators, are display bytes too. Moved into a mark, a separator no longer sits
      // where its glyph expects it, so the glyph reads as missing one and gets a second. (A char
      // span opener's separator is text, not a tagged node: the text case below leaves it out.)
      //
      // An attribute display run (`|grace`, `|who="Pilate"`) is the same kind of bytes and gets
      // the same treatment, never split or moved: a mark over part of it splits its text node,
      // after which the display-run sync no longer recognizes the run and rebuilds it beside the
      // split-off piece — and the next settle reads both into the attribute's value.
      //
      // A display owner (or a run's anchor text) and its run wrapper are one unit: the selection
      // lists the wrapper ELEMENT before its children, so the glyph guard alone never sees it.
      // Neither half is ever moved or split, so the unit stays together outside the mark.
      //
      // The annotation is held ON the node instead (`displayAnnotationsState`), for the bytes the
      // selection covers on it; a separator holds nothing (see `$isDisplayAnnotationCarrier`).
      $annotateCarrier(node);
      currentNodeParent = node.getParent();
      lastCreatedMarkNode = undefined;
      continue;
    }
    let targetNode: LexicalNode | null = null;

    if ($isTextNode(node)) {
      // Case 1: The node is a text node and we can split it
      const [from, to] = $coveredOffsets(node, startCaret, endCaret);
      // A char span opener's separator is the first byte of the text right after the glyph —
      // either the prefix of the span's first content text or, in front of a nested span, a
      // standalone NBSP spacer. That byte is the glyph's display, so the mark starts after it; a
      // spacer holds nothing else and stays out of the mark whole. Only that place qualifies: an
      // NBSP anywhere else in the span is content.
      const startTextOffset = Math.max(from, $charSeparatorPrefixLength(node));
      // A text node the range covers no byte of stays out of the mark: the range starts at its end
      // (a position in front of a verse or a closing glyph names the text before it), ends at its
      // start, or covers only the separator prefix. `splitText` never returns an empty piece, so
      // wrapping here would mark the whole node.
      if (startTextOffset >= to) continue;
      // Tagged here, at the split that is about to happen — see the tag's other call site below
      // for why it is never added unconditionally.
      $addUpdateTag(TYPED_MARK_WRAP_TAG);
      const splitNodes = node.splitText(startTextOffset, to);
      // `splitText` drops a cut at either end, so the covered piece is the second when the range
      // starts inside the node and the first otherwise.
      targetNode = splitNodes[startTextOffset > 0 ? 1 : 0];
    } else if ($isTypedMarkNode(node)) {
      // Case 2: the node is a mark node and we can ignore it as a target, moving on to its
      // children. Note that when we make a mark inside another mark, it may ultimately be un-nested
      // by a call to `registerNestedElementResolver<TypedMarkNode>` somewhere else in the
      // codebase.

      continue;
    } else if ($isElementNode(node) && node.isInline()) {
      // Case 3: an inline element moves into the mark whole only when the range covers all of it,
      // opening glyph through closing glyph (its opener's separator goes with it, between held
      // bytes). A range that starts or ends inside it leaves it in place: its listed content text
      // is wrapped piece by piece and its glyphs hold the annotation as carriers, so no byte the
      // range does not name is marked.
      if (!$coversWhole(node, startCaret, endCaret)) continue;
      targetNode = node;
    }

    if (targetNode !== null) {
      // Now that we have a target node for wrapping with a mark, we can run through special cases.
      if (targetNode && targetNode.is(currentNodeParent)) {
        // The current node is a child of the target node to be wrapped, there is nothing to do
        // here. This is also why a range starting ON an inline element's opening glyph never moves
        // the element whole, even when the range covers it in full: the glyph branch above already
        // set `currentNodeParent` to the element, so this guard is true the moment Case 3 considers
        // the element itself as a target. The whole-element move and this glyph-start case hold the
        // same bytes either way; they are deliberately uneven in mark count, not a gap to close.
        continue;
      }
      // Tagged here too, for Case 3's whole-element move (Case 1 already tagged its own split
      // above; adding the tag again here is a no-op).
      $addUpdateTag(TYPED_MARK_WRAP_TAG);
      const parentNode = targetNode.getParent();
      if (parentNode == null || !parentNode.is(currentNodeParent)) {
        // If the parent node is not the current node's parent node, we can clear the last created
        // mark node.
        lastCreatedMarkNode = undefined;
      }

      currentNodeParent = parentNode;

      if (lastCreatedMarkNode === undefined) {
        lastCreatedMarkNode = $createTypedMarkNode();
        lastCreatedMarkNode.addID(type, id, onClick, onRemove, onMouseEnter, onMouseLeave);
        targetNode.insertBefore(lastCreatedMarkNode);
      }

      // Add the target node to be wrapped in the latest created mark node
      lastCreatedMarkNode.append(targetNode);
    } else {
      // A decorator or block element is never wrapped; a display-byte decorator holds the
      // annotation instead.
      $annotateCarrier(node);
      // If we don't have a target node to wrap we can clear our state and continue on with the next
      // node
      currentNodeParent = undefined;
      lastCreatedMarkNode = undefined;
    }
  }
  if (carrierAnnotated)
    $registerDisplayAnnotation(type, id, { onClick, onRemove, onMouseEnter, onMouseLeave });
  // Make selection collapsed at the end for comments.
  if (type === COMMENT_MARK_TYPE && $isElementNode(lastCreatedMarkNode)) {
    if (isBackward) lastCreatedMarkNode.selectStart();
    else lastCreatedMarkNode.selectEnd();
  }
}
