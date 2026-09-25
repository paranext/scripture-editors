/**
 * Wrapping a selection in a `TypedMarkNode`, adapted from `$wrapSelectionInMarkNode` in
 * https://github.com/facebook/lexical/blob/92c47217244f9d3c22a59728633fb41a10420724/packages/lexical-mark/src/index.ts
 *
 * Kept apart from `TypedMarkNode.ts` because it reads display-run structure
 * (`attributeDisplay.utils.ts`), which itself imports `TypedMarkNode.ts`.
 */

import { textTypeState } from "../collab/delta.state.js";
import { $isAttributeRunNode } from "../usj/AttributeRunNode.js";
import { $chapterGlyphTextNode, $noteEditableCallerNode } from "../usj/attributeDisplay.utils.js";
import { $isChapterNode } from "../usj/ChapterNode.js";
import { $isMilestoneNode } from "../usj/MilestoneNode.js";
import { $isNoteNode } from "../usj/NoteNode.js";
import { $isVerseNode } from "../usj/VerseNode.js";
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
import type { LexicalNode, RangeSelection } from "lexical";
import { $getState, $isElementNode, $isTextNode } from "lexical";

/** Whether `node` is the text of an attribute display run — engine-owned display bytes, never
 * annotated content. */
function $isAttributeDisplayRun(node: LexicalNode): boolean {
  return $isTextNode(node) && $getState(node, textTypeState) === "attribute";
}

/**
 * Whether `node` is the text an element owner's attribute display run is anchored after: a note's
 * editable caller (its `\cat` run follows it) or a chapter's `\c N` glyph text (its `\ca` run
 * follows it, and its `\cp` run follows that). Both runs are found beside the anchor, so an
 * anchor moved into a mark without its run reads as the run being missing, and the sync writes a
 * second one.
 */
function $isElementOwnerRunAnchor(node: LexicalNode): boolean {
  if (!$isTextNode(node)) return false;
  let owner = node.getParent();
  while ($isTypedMarkNode(owner)) owner = owner.getParent();
  if ($isNoteNode(owner)) return $noteEditableCallerNode(owner)?.is(node) ?? false;
  if ($isChapterNode(owner)) return $chapterGlyphTextNode(owner)?.is(node) ?? false;
  return false;
}

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

export function $wrapSelectionInTypedMarkNode(
  selection: RangeSelection,
  type: string,
  id: string,
  onClick?: TypedMarkOnClick,
  onRemove?: TypedMarkOnRemove,
  onMouseEnter?: TypedMarkOnMouseEnter,
  onMouseLeave?: TypedMarkOnMouseLeave,
): void {
  const nodes = selection.getNodes();
  const anchorOffset = selection.anchor.offset;
  const focusOffset = selection.focus.offset;
  const nodesLength = nodes.length;
  const isBackward = selection.isBackward();
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
    if ($isMarkerNode(node) || $isAttributeDisplayRun(node) || $isDisplayOwnerUnit(node)) {
      // A marker glyph is display bytes its construct owns, never annotated content: moving one
      // into a mark takes it out of the construct's own children, which the marker-edit engine
      // reads as the marker having been deleted (a char span or note loses its closer, a note its
      // opener) and settles by dissolving or deleting the construct. So end the current mark at
      // the glyph, and start any later content in a new one. Remember the glyph's parent, though:
      // it is the element the selection is inside, which must not then be wrapped whole.
      //
      // An attribute display run (`|grace`, `|who="Pilate"`) is the same kind of bytes and gets
      // the same treatment, never split or moved: a mark over part of it splits its text node,
      // after which the display-run sync no longer recognizes the run and rebuilds it beside the
      // split-off piece — and the next settle reads both into the attribute's value.
      //
      // A display owner (or a run's anchor text) and its run wrapper are one unit: the selection
      // lists the wrapper ELEMENT before its children, so the glyph guard alone never sees it.
      // Neither half is ever moved or split, so the unit stays together outside the mark.
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
      const startTextOffset = isFirstNode ? startOffset : 0;
      const endTextOffset = isLastNode ? endOffset : textContentSize;
      if (startTextOffset === 0 && endTextOffset === 0) {
        continue;
      }
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
      }

      // Add the target node to be wrapped in the latest created mark node
      lastCreatedMarkNode.append(targetNode);
    } else {
      // If we don't have a target node to wrap we can clear our state and continue on with the next
      // node
      currentNodeParent = undefined;
      lastCreatedMarkNode = undefined;
    }
  }
  // Make selection collapsed at the end for comments.
  if (type === COMMENT_MARK_TYPE && $isElementNode(lastCreatedMarkNode)) {
    if (isBackward) lastCreatedMarkNode.selectStart();
    else lastCreatedMarkNode.selectEnd();
  }
}
