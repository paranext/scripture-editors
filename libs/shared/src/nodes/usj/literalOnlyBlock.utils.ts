import { $isUnknownNode } from "../features/UnknownNode.js";
import { $isBookNode } from "./BookNode.js";
import { $isImmutableTableNode } from "./ImmutableTableNode.js";
import { LexicalNode } from "lexical";

/**
 * Whether `node` sits inside a block whose text the tokenizer keeps literal — a book id, an opaque
 * `UnknownNode` block (sidebar, periph, figure, …), or a table. These are the degradation-property
 * contexts no settle scope re-tokenizes (the marker-edit engine's paragraph guard rails and its
 * opaque-block bail), so a divergence there can never settle: whatever would re-tokenize elsewhere
 * must either be left alone or healed in place here, never pended.
 *
 * `book` has no settle scope, deliberately. Tables have none either: their cells hold ordinary
 * `TextNode`s, so the engine's text transform does run on them, and a key pended there would never
 * clear. Chapters are not in this list: `$rebuildChapter` is their settle scope.
 *
 * Read-only: call inside `editor.getEditorState().read(...)` or an update.
 */
export function $isInLiteralOnlyBlock(node: LexicalNode): boolean {
  for (let parent = node.getParent(); parent; parent = parent.getParent())
    if ($isBookNode(parent) || $isUnknownNode(parent) || $isImmutableTableNode(parent)) return true;
  return false;
}
