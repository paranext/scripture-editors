import {
  $addUpdateTag,
  $getNodeByKey,
  $isRangeSelection,
  $isTextNode,
  BaseSelection,
  HISTORY_MERGE_TAG,
  LexicalNode,
  NodeKey,
} from "lexical";
import {
  $carrierHoldableRange,
  $displayAnnotationIdsAt,
  $getMarkIDs,
  $removeDisplayAnnotation,
  $removeTypedMarkId,
  $wrapSelectionInTypedMarkNode,
  ANNOTATION_MARKS_TAG,
  COMMENT_MARK_TYPE,
} from "shared";

/** The comment ids at a caret `offset` into `node`: from a mark around it, and from the display
 * bytes it holds itself. Read-only. */
export function $commentIdsAt(node: LexicalNode, offset: number): string[] {
  const fromMark = $isTextNode(node) ? ($getMarkIDs(node, COMMENT_MARK_TYPE, offset) ?? []) : [];
  const fromBytes = $displayAnnotationIdsAt(node, COMMENT_MARK_TYPE, offset);
  return [...new Set([...fromMark, ...fromBytes])];
}

/**
 * Hold comment `id` over `selection`: a mark over its content, holds on its display bytes. Tags the
 * update {@link ANNOTATION_MARKS_TAG}, so nothing reads the nodes the wrap splits as edited, and
 * `HISTORY_MERGE_TAG`, so it joins the current undo step rather than making one of its own. A no-op
 * for a selection that is not a range. Mutating.
 */
export function $addCommentAnnotation(
  selection: BaseSelection | null | undefined,
  id: string,
): void {
  if (!$isRangeSelection(selection)) return;
  $addUpdateTag(ANNOTATION_MARKS_TAG);
  $addUpdateTag(HISTORY_MERGE_TAG);
  $wrapSelectionInTypedMarkNode(selection, COMMENT_MARK_TYPE, id);
}

/**
 * Remove comment `id` from the marks and the display-byte nodes holding it. Tags the update
 * {@link ANNOTATION_MARKS_TAG} and `HISTORY_MERGE_TAG`, as {@link $addCommentAnnotation} does.
 * Mutating.
 */
export function $removeCommentAnnotation(
  id: string,
  markKeys: Iterable<NodeKey>,
  displayKeys: Iterable<NodeKey>,
): void {
  $addUpdateTag(ANNOTATION_MARKS_TAG);
  $addUpdateTag(HISTORY_MERGE_TAG);
  $removeTypedMarkId(COMMENT_MARK_TYPE, id, markKeys);
  for (const key of displayKeys) {
    const node = $getNodeByKey(key);
    if (node) $removeDisplayAnnotation(node, COMMENT_MARK_TYPE, id);
  }
}

/**
 * Select the start of the first of `carrierKeys`, in document order: `node.select(start, start)`
 * for a text carrier (at its holdable range's start, past any edge separator), or an element point
 * in front of it for a decorator, which has no text point of its own. A no-op with no carrier.
 * Mutating.
 */
export function $selectFirstCommentCarrier(carrierKeys: Iterable<NodeKey>): void {
  const carriers = Array.from(carrierKeys, (key) => $getNodeByKey(key)).filter(
    (node): node is LexicalNode => node !== null,
  );
  carriers.sort((a, b) => (a.isBefore(b) ? -1 : 1));
  const first = carriers[0];
  if (!first) return;
  if ($isTextNode(first)) {
    const [start] = $carrierHoldableRange(first);
    first.select(start, start);
    return;
  }
  const parent = first.getParent();
  if (parent) parent.select(first.getIndexWithinParent(), first.getIndexWithinParent());
}
