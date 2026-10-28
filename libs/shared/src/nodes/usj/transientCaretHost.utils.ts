/**
 * What a transient caret host IS, as editor state: the identity every consumer that must leave a
 * host out — the USJ serializer, the collab ops stream and its positions, annotation content
 * indexes — reads, rather than recognizing a host by its text. The host's lifecycle (when one is
 * created, moved into, and removed) lives with the guards that need one, in shared-react's
 * `transientCaretHost.ts`.
 *
 * A host is a single zero-width space, and so is authored text: ZWSP marks line-break
 * opportunities in Thai, Khmer and Lao, and a run of it lands in a text node of its own wherever
 * the text around it is split. Content alone cannot tell the two apart, so a host is recognized
 * only by its mark.
 */

import { CURSOR_PLACEHOLDER_CHAR } from "../../plugins/CursorHandler/core/utils/constants.js";
import { $createCursorPlaceholderNode } from "../../plugins/CursorHandler/core/utils/index.js";
import {
  $getState,
  $isTextNode,
  $setState,
  createState,
  LexicalNode,
  NODE_STATE_KEY,
  SerializedTextNode,
  TextNode,
} from "lexical";

/**
 * Marks a text node as a caret host from the moment it is created until text lands in it. It is
 * what recognizes a host from the node itself — after an undo brings one back, in every guard
 * instance at once, and in a serialized editor state — rather than by the key one guard instance
 * happens to track. A text node whose state differs from its neighbor's is not merged with it
 * either, so the mark also keeps Lexical from folding text pasted beside the caret into the host.
 */
export const caretHostState = createState("isCaretHost", {
  parse: (value) => value === true,
});

/**
 * A new caret host: a single placeholder character, marked as a host.
 *
 * Mutating: call inside `editor.update()`.
 */
export function $createCaretHostNode(): TextNode {
  return $setState($createCursorPlaceholderNode(), caretHostState, true);
}

/**
 * Whether `node` is a caret host nothing has landed in yet: a marked text node holding exactly its
 * own placeholder. A second zero-width space is one the user typed, which makes it content.
 *
 * Read-only: safe in any read.
 */
export function $isCaretHost(node: LexicalNode | null | undefined): boolean {
  return (
    $isTextNode(node) &&
    $getState(node, caretHostState) &&
    node.getTextContent() === CURSOR_PLACEHOLDER_CHAR
  );
}

/**
 * Whether `node` carries the caret-host mark — a bare host, or one text has landed in that this
 * update's transforms have not yet turned into content. A transform that must leave a host alone
 * (`TextSpacingPlugin`'s) asks this rather than {@link $isCaretHost}, so its answer does not
 * depend on whether the host's own transform ran first.
 *
 * Read-only: safe in any read.
 */
export function $hasCaretHostMark(node: LexicalNode | null | undefined): boolean {
  return $isTextNode(node) && $getState(node, caretHostState);
}

/**
 * The serialized twin of {@link $isCaretHost}, for consumers that walk `editorState.toJSON()`.
 *
 * @param node - A serialized text node.
 * @returns `true` when `node` is a bare caret host.
 */
export function isSerializedCaretHost(node: SerializedTextNode): boolean {
  return (
    node[NODE_STATE_KEY]?.[caretHostState.key] === true && node.text === CURSOR_PLACEHOLDER_CHAR
  );
}
