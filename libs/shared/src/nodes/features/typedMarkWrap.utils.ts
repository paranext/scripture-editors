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
  $isAttributeDisplayRun,
  $isDisplayAnnotationCarrier,
  $isElementOwnerRunAnchor,
  $registerDisplayAnnotation,
} from "./displayAnnotations.utils.js";
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
import type { LexicalNode, PointType, RangeSelection } from "lexical";
import { $addUpdateTag, $isElementNode, $isTextNode } from "lexical";

/**
 * Whether `node` is part of a display owner's unit: the owner's `AttributeRunNode` wrapper(s) and
 * anything inside one, together with what the run is found beside — a verse or milestone the
 * wrapper directly follows (`\va 3\va*`, `|who="Pilate"`), or a note's caller or chapter's glyph
 * text ({@link $isElementOwnerRunAnchor}). The run belongs to its owner by position alone, so
 * moving either half into a mark without the other reads as the run having been deleted: the
 * display-run sync then removes a milestone, or writes a second run beside a caller. A verse is
 * also a `TextNode`, which the wrap would otherwise split like content.
 */
function $isDisplayOwnerUnit(node: LexicalNode): boolean {
  return (
    $isVerseNode(node) ||
    $isMilestoneNode(node) ||
    $isAttributeRunNode(node) ||
    $isAttributeRunNode(node.getParent()) ||
    $isElementOwnerRunAnchor(node)
  );
}

/**
 * The `[start, end)` bytes of carrier `node` a selection from `start` to `end` covers, or
 * `undefined` when it covers none. A decorator is covered whole (`[0, 0]`). An end point on
 * another node leaves this node covered to that side's edge.
 */
function $coveredCarrierRange(
  node: LexicalNode,
  start: PointType,
  end: PointType,
): [number, number] | undefined {
  if (!$isDisplayAnnotationCarrier(node)) return undefined;
  if (!$isTextNode(node)) return [0, 0];
  const from = start.type === "text" && start.key === node.getKey() ? start.offset : 0;
  const to =
    end.type === "text" && end.key === node.getKey() ? end.offset : node.getTextContentSize();
  return to > from ? [from, to] : undefined;
}

export function $wrapSelectionInTypedMarkNode(
  selection: RangeSelection,
  type: string,
  id: string,
  onClick?: TypedMarkOnClick,
  onRemove?: TypedMarkOnRemove,
  onMouseEnter?: TypedMarkOnMouseEnter,
  onMouseLeave?: TypedMarkOnMouseLeave,
): void {
  $addUpdateTag(TYPED_MARK_WRAP_TAG);
  const nodes = selection.getNodes();
  const anchorOffset = selection.anchor.offset;
  const focusOffset = selection.focus.offset;
  const nodesLength = nodes.length;
  const isBackward = selection.isBackward();
  const [startPoint, endPoint] = isBackward
    ? [selection.focus, selection.anchor]
    : [selection.anchor, selection.focus];
  let markCreated = false;
  let carrierAnnotated = false;
  const $annotateCarrier = (node: LexicalNode) => {
    const covered = $coveredCarrierRange(node, startPoint, endPoint);
    if (!covered) return;
    $addDisplayAnnotation(node, type, id, covered[0], covered[1]);
    carrierAnnotated = true;
  };
  const startOffset = isBackward ? focusOffset : anchorOffset;
  const endOffset = isBackward ? anchorOffset : focusOffset;
  let currentNodeParent;
  let lastCreatedMarkNode;

  // We only want wrap adjacent text nodes, line break nodes and inline element nodes. For decorator
  // nodes and block element nodes, we step out of their boundary and start again after, if there
  // are more nodes.
  for (let i = 0; i < nodesLength; i++) {
    const node = nodes[i];
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
    const isFirstNode = i === 0;
    const isLastNode = i === nodesLength - 1;
    let targetNode: LexicalNode | null = null;

    if ($isTextNode(node)) {
      // Case 1: The node is a text node and we can split it
      const textContentSize = node.getTextContentSize();
      // A char span opener's separator is the first byte of the text right after the glyph —
      // either the prefix of the span's first content text or, in front of a nested span, a
      // standalone NBSP spacer. That byte is the glyph's display, so the mark starts after it; a
      // spacer holds nothing else and stays out of the mark whole. Only that place qualifies: an
      // NBSP anywhere else in the span is content.
      const separatorLength = $charSeparatorPrefixLength(node);
      const startTextOffset = Math.max(isFirstNode ? startOffset : 0, separatorLength);
      const endTextOffset = isLastNode ? endOffset : textContentSize;
      // A text node the range covers no byte of stays out of the mark: the range starts at its end
      // (a position in front of a verse or a closing glyph names the text before it), ends at its
      // start, or covers only the separator prefix. `splitText` never returns an empty piece, so
      // wrapping here would mark the whole node.
      if (startTextOffset >= endTextOffset) continue;
      const splitNodes = node.splitText(startTextOffset, endTextOffset);
      targetNode =
        splitNodes.length > 1 &&
        (splitNodes.length === 3 ||
          (isFirstNode && !isLastNode) ||
          endTextOffset === textContentSize)
          ? splitNodes[1]
          : splitNodes[0];
    } else if ($isTypedMarkNode(node)) {
      // Case 2: the node is a mark node and we can ignore it as a target, moving on to its
      // children. Note that when we make a mark inside another mark, it may ultimately be un-nested
      // by a call to `registerNestedElementResolver<TypedMarkNode>` somewhere else in the
      // codebase.

      continue;
    } else if ($isElementNode(node) && node.isInline()) {
      // Case 3: inline element nodes can be added in their entirety to the new mark
      targetNode = node;
    }

    if (targetNode !== null) {
      // Now that we have a target node for wrapping with a mark, we can run through special cases.
      if (targetNode && targetNode.is(currentNodeParent)) {
        // The current node is a child of the target node to be wrapped, there is nothing to do
        // here.
        continue;
      }
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
        markCreated = true;
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
    $registerDisplayAnnotation(
      type,
      id,
      { onClick, onRemove, onMouseEnter, onMouseLeave },
      markCreated,
    );
  // Make selection collapsed at the end for comments.
  if (type === COMMENT_MARK_TYPE && $isElementNode(lastCreatedMarkNode)) {
    if (isBackward) lastCreatedMarkNode.selectStart();
    else lastCreatedMarkNode.selectEnd();
  }
}
