import {
  $createTextNode,
  $isElementNode,
  $isRootNode,
  $isTextNode,
  LexicalNode,
  TextNode,
} from "lexical";
import { CURSOR_PLACEHOLDER_CHAR } from "./constants.js";
import { CursorData, CursorPosition } from "./CursorSelectionContext.js";

export function $createCursorPlaceholderNode() {
  return $createTextNode(CURSOR_PLACEHOLDER_CHAR);
}

export function $insertCursorPlaceholder(
  node: LexicalNode,
  position: CursorPosition.Start | CursorPosition.End,
  restoreSelection = false,
) {
  const cursorPlaceholderNode = $createCursorPlaceholderNode();
  if (position === CursorPosition.Start) node.insertBefore(cursorPlaceholderNode, restoreSelection);
  else node.insertAfter(cursorPlaceholderNode, restoreSelection);
  return cursorPlaceholderNode;
}

export function $removeCursorPlaceholder(node: TextNode) {
  const textContent = node.getTextContent();
  node.setTextContent(textContent.replaceAll(CURSOR_PLACEHOLDER_CHAR, ""));
}

/**
 * Whether `text` is non-empty and made up entirely of placeholder characters. This is a content-only
 * test: the placeholder is a zero-width space, which is also authored text (a Thai/Khmer/Lao line
 * break), so it cannot tell a transient caret host from an authored zero-width-space-only run.
 * Never use it to decide what to leave out of saved, sent or indexed content — that would drop the
 * authored run. Identify a host by its mark instead: `$isCaretHost` for a live node,
 * `isSerializedCaretHost` for a serialized one (both in `nodes/usj/transientCaretHost.utils`).
 *
 * It is right only where treating an authored zero-width space as a host loses nothing: choosing
 * where the caret rests, such as reusing an existing node at a boundary instead of stacking a new
 * host there.
 *
 * @param text - The text content to test.
 * @returns `true` when `text` is non-empty and every character is a cursor placeholder.
 */
export function isCursorPlaceholderOnly(text: string): boolean {
  // Fast path: the common case (no placeholder at all) short-circuits before any allocation, so
  // this stays cheap when called per text node.
  return (
    text.length > 0 &&
    text.includes(CURSOR_PLACEHOLDER_CHAR) &&
    text.replaceAll(CURSOR_PLACEHOLDER_CHAR, "") === ""
  );
}

/**
 * Whether `node` is a text node holding only cursor placeholder(s) — see {@link isCursorPlaceholderOnly}.
 *
 * @param node - The node to test; may be `null`/`undefined`.
 * @returns `true` when `node` is a `TextNode` whose content is entirely cursor placeholders.
 */
export function $isCursorPlaceholderOnlyText(
  node: LexicalNode | null | undefined,
): node is TextNode {
  return $isTextNode(node) && isCursorPlaceholderOnly(node.getTextContent());
}

export function $getValidAncestor(
  node: LexicalNode,
  cursor: CursorData,
  canHavePlaceholder: (node: LexicalNode) => boolean,
) {
  const ancestor = node.getParent();
  if (!ancestor || !$isElementNode(ancestor) || !ancestor.isInline()) {
    return { ancestor: null, ancestorSibling: null };
  }

  const ancestorParent = ancestor.getParent();
  if (!ancestorParent || $isRootNode(ancestorParent)) {
    return { ancestor: null, ancestorSibling: null };
  }

  const parentCanHavePlaceholder = canHavePlaceholder(ancestorParent);
  const canHavePlaceholderAsSibling = cursor.isMovingRight
    ? ancestor.canInsertTextAfter()
    : ancestor.canInsertTextBefore();

  const canInsert = parentCanHavePlaceholder && canHavePlaceholderAsSibling;

  const ancestorSibling = cursor.isMovingRight
    ? ancestor.getNextSibling()
    : ancestor.getPreviousSibling();

  if (!ancestorSibling && !canInsert) {
    return $getValidAncestor(ancestor, cursor, canHavePlaceholder);
  }

  if ($isTextNode(ancestorSibling) && !canInsert) {
    return { ancestor: null, ancestorSibling: null };
  }

  return { ancestor, ancestorSibling };
}

export function $findDescendantEligibleForPlaceholder(
  node: LexicalNode,
  cursor: CursorData,
  canHavePlaceholder: (node: LexicalNode) => boolean,
): LexicalNode | null {
  if (canHavePlaceholder(node)) {
    return node;
  }
  if ($isElementNode(node)) {
    const child = cursor.isMovingRight ? node.getFirstChild() : node.getLastChild();
    if (child) {
      return $findDescendantEligibleForPlaceholder(child, cursor, canHavePlaceholder);
    }
  }
  return null;
}
