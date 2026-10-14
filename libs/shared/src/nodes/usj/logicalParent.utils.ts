/**
 * Which element owns a node's logical content index. Annotation marks and the root's implied
 * paragraph are transparent in USJ, so the owner can be further up than the raw parent. Kept apart
 * from the node utilities so modules those utilities import can ask the same question.
 */

import { $isRootNode, ElementNode, LexicalNode } from "lexical";
import { $isTypedMarkNode } from "../features/TypedMarkNode.js";
import { $isImpliedParaNode, ImpliedParaNode } from "./ImpliedParaNode.js";

/**
 * Whether `node` is an implied paragraph the editor→USJ conversion splices away: one directly under
 * the root, where the loader puts content that comes before a document's first block. Its children
 * are the root's own content items in USJ, so it is as transparent to content indexes as an
 * annotation mark. The conversion splices root children only, so an implied paragraph anywhere
 * else keeps its index.
 */
export function $isSplicedImpliedPara(
  node: LexicalNode | null | undefined,
): node is ImpliedParaNode {
  return $isImpliedParaNode(node) && $isRootNode(node.getParent());
}

/** Whether `node` contributes no content item of its own, its children standing in its place: an
 * annotation mark, or an implied paragraph the conversion splices away. */
export function $isContentTransparent(node: LexicalNode | null | undefined): node is ElementNode {
  return $isTypedMarkNode(node) || $isSplicedImpliedPara(node);
}

/**
 * Gets the nearest ancestor that owns the node's logical content index — skipping annotation
 * wrappers and the root's implied paragraph, which are transparent in USJ.
 * @param node - The node to get the logical parent of.
 * @returns the logical parent element, or `null` at the root.
 */
export function $getLogicalParent(node: LexicalNode): ElementNode | null {
  let parent: ElementNode | null = node.getParent();
  while (parent && $isContentTransparent(parent)) parent = parent.getParent();
  return parent;
}

/**
 * The leaf beside `node` in reading order with every annotation mark unwrapped: a mark `node` ends
 * is stepped out of, a mark beside it is stepped into (to its last leaf before `node`, its first
 * after), and an empty mark is stepped over. `null` at the edge of the element the marks sit in.
 * Content an annotation wraps is cut into several text nodes where it would otherwise be one, so a
 * reader of "the text beside this one" reads through this to see what it sees without the mark.
 */
export function $leafBesideThroughMarks(
  node: LexicalNode,
  side: "previous" | "next",
): LexicalNode | null {
  const beside = (from: LexicalNode): LexicalNode | null =>
    side === "next" ? from.getNextSibling() : from.getPreviousSibling();
  // The leaf of `mark` nearest `node`, or `null` when the mark holds none.
  const edgeLeaf = (mark: ElementNode): LexicalNode | null => {
    const children = mark.getChildren();
    if (side === "previous") children.reverse();
    for (const child of children) {
      const leaf = $isTypedMarkNode(child) ? edgeLeaf(child) : child;
      if (leaf) return leaf;
    }
    return null;
  };
  let current = node;
  for (;;) {
    let sibling = beside(current);
    while (!sibling) {
      const parent = current.getParent();
      if (!$isTypedMarkNode(parent)) return null;
      current = parent;
      sibling = beside(current);
    }
    if (!$isTypedMarkNode(sibling)) return sibling;
    const leaf = edgeLeaf(sibling);
    if (leaf) return leaf;
    current = sibling;
  }
}
