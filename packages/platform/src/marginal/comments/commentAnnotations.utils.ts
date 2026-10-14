import { $getNodeByKey, $isTextNode, LexicalNode, NodeKey } from "lexical";
import {
  $carrierHoldableRange,
  $displayAnnotationIdsAt,
  $displayAnnotationsOf,
  $getMarkIDs,
  $removeDisplayAnnotation,
  $removeTypedMarkId,
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
  $removeTypedMarkId(COMMENT_MARK_TYPE, id, markKeys);
  for (const key of displayKeys) {
    const node = $getNodeByKey(key);
    if (node) $removeDisplayAnnotation(node, COMMENT_MARK_TYPE, id);
  }
}

/**
 * Select the start of comment `id` on the first of `carrierKeys`, in document order: a text point
 * at the start of the comment's own hold on a text carrier (never in front of its holdable range,
 * so past any edge separator), or an element point in front of a decorator, which has no text
 * point of its own. A no-op with no carrier. Mutating.
 */
export function $selectFirstCommentCarrier(id: string, carrierKeys: Iterable<NodeKey>): void {
  const carriers = Array.from(carrierKeys, (key) => $getNodeByKey(key)).filter(
    (node): node is LexicalNode => node !== null,
  );
  carriers.sort((a, b) => (a.isBefore(b) ? -1 : 1));
  const first = carriers[0];
  if (!first) return;
  if ($isTextNode(first)) {
    const hold = $displayAnnotationsOf(first).find(
      (annotation) => annotation.type === COMMENT_MARK_TYPE && annotation.id === id,
    );
    const start = Math.max($carrierHoldableRange(first)[0], hold?.start ?? 0);
    first.select(start, start);
    return;
  }
  const parent = first.getParent();
  if (parent) parent.select(first.getIndexWithinParent(), first.getIndexWithinParent());
}
