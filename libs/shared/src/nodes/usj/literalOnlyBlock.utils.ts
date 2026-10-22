import { $isUnknownNode } from "../features/UnknownNode.js";
import { $isImmutableTableNode } from "./ImmutableTableNode.js";
import { LexicalNode } from "lexical";

/**
 * Whether `node` sits inside a block whose text the tokenizer keeps literal — an opaque
 * `UnknownNode` block (sidebar, periph, figure, …) or a table. These are the degradation-property
 * contexts no settle scope re-tokenizes (the marker-edit engine's paragraph guard rails and its
 * opaque-block bail), so a divergence there can never settle: whatever would re-tokenize elsewhere
 * must either be left alone or healed in place here, never pended.
 *
 * Tables have no settle scope: their cells hold ordinary `TextNode`s, so the engine's text
 * transform does run on them, and a cell whose text contains `//` (a URL, say — the tokenizer
 * reads `//` as an optbreak wherever it appears) would otherwise pend a key nothing can ever
 * settle. Chapters and books are not in this list: `$rebuildChapter` and `$rebuildBook` are their
 * settle scopes, so a chapter's display bytes and the `\id` line's content pend and settle like
 * any paragraph's.
 *
 * Read-only: call inside `editor.getEditorState().read(...)` or an update.
 */
export function $isInLiteralOnlyBlock(node: LexicalNode): boolean {
  for (let parent = node.getParent(); parent; parent = parent.getParent())
    if ($isUnknownNode(parent) || $isImmutableTableNode(parent)) return true;
  return false;
}
