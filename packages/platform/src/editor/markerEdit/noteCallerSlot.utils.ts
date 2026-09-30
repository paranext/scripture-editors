import { LexicalNode } from "lexical";
import { $isMarkerNode, $isNoteNode, leadingAttributeNames } from "shared";

/**
 * Whether `node` sits in an expanded note's caller slot: the first child after the note's
 * opening glyph(s), where an editable note spells its caller out as text between two separators
 * (`getEditableCallerText`). Positional, so it holds while the caller is mid-edit or deleted
 * outright, when the text no longer matches the stored caller.
 *
 * Only a note whose marker declares a leading caller has the slot (the markers map, never a local
 * list: `f`/`fe`/`ef`/`efe`/`x`/`ex`), and a collapsed note never does - its caller is an atomic
 * `ImmutableNoteCallerNode`.
 *
 * Read-only: call inside `editor.read()` or an update.
 */
export function $isNoteCallerSlot(node: LexicalNode): boolean {
  const note = node.getParent();
  if (!$isNoteNode(note) || note.getIsCollapsed() !== false) return false;
  if (!leadingAttributeNames(note.getMarker())?.includes("caller")) return false;
  const children = note.getChildren();
  let slot = 0;
  while (slot < children.length) {
    const child = children[slot];
    if (!$isMarkerNode(child) || child.getMarkerSyntax() !== "opening") break;
    slot++;
  }
  return node.is(children[slot]);
}
