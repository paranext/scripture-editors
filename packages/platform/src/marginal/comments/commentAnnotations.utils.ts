import { $getNodeByKey, $isTextNode, LexicalNode, NodeKey } from "lexical";
import {
  $displayAnnotationIdsAt,
  $getMarkIDs,
  $isTypedMarkNode,
  $removeDisplayAnnotation,
  $unwrapTypedMarkNode,
  COMMENT_MARK_TYPE,
} from "shared";

/** The comment ids at a caret `offset` into `node`: from a mark around it, and from the display
 * bytes it holds itself. Read-only. */
export function $commentIdsAt(node: LexicalNode, offset: number): string[] {
  const fromMark = $isTextNode(node) ? ($getMarkIDs(node, COMMENT_MARK_TYPE, offset) ?? []) : [];
  const fromBytes = $displayAnnotationIdsAt(node, COMMENT_MARK_TYPE, offset);
  return [...new Set([...fromMark, ...fromBytes])];
}

/** Remove comment `id` from the marks and the display-byte nodes holding it. Mutating. */
export function $removeCommentAnnotation(
  id: string,
  markKeys: Iterable<NodeKey>,
  displayKeys: Iterable<NodeKey>,
): void {
  for (const key of markKeys) {
    const node = $getNodeByKey(key);
    if (!$isTypedMarkNode(node)) continue;
    node.deleteID(COMMENT_MARK_TYPE, id);
    if (node.hasNoIDsForEveryType()) $unwrapTypedMarkNode(node);
  }
  for (const key of displayKeys) {
    const node = $getNodeByKey(key);
    if (node) $removeDisplayAnnotation(node, COMMENT_MARK_TYPE, id);
  }
}
