import { $createNodeSelection, $getEditor, $setSelection, LexicalEditor } from "lexical";
import { $getSelectableParaMarker, ImmutableTypedTextNode } from "shared";

/**
 * How many owners (`ParaMarkerSelectionPlugin`) are mounted on each editor. A count rather than a
 * set so a remount that registers before the previous instance unregisters (React strict mode, a
 * re-keyed plugin) never leaves the editor looking unowned.
 */
const paraMarkerSelectionOwnerCounts = new WeakMap<LexicalEditor, number>();

/**
 * Records that `editor` has an owner for a selected paragraph marker — the plugin that handles
 * every key and command reaching it. {@link $selectParaMarker} selects only in an editor that has
 * one, so rich-text's default handling (Backspace deleting the glyph) never sees the selection.
 *
 * @param editor - The editor the owner is mounted on.
 * @returns a function that withdraws this registration.
 */
export function registerParaMarkerSelectionOwner(editor: LexicalEditor): () => void {
  paraMarkerSelectionOwnerCounts.set(editor, (paraMarkerSelectionOwnerCounts.get(editor) ?? 0) + 1);
  return () => {
    const count = (paraMarkerSelectionOwnerCounts.get(editor) ?? 1) - 1;
    if (count > 0) paraMarkerSelectionOwnerCounts.set(editor, count);
    else paraMarkerSelectionOwnerCounts.delete(editor);
  };
}

/**
 * Whether the active editor may select a paragraph marker: it is editable, and an owner is
 * registered ({@link registerParaMarkerSelectionOwner}). A read-only editor never selects one:
 * there is nothing to change the marker to.
 *
 * Read-only, but needs an active editor: call inside `editor.update()` or a command handler (a
 * bare `editorState.read()` has no editor to ask).
 */
export function $canSelectParaMarker(): boolean {
  const editor = $getEditor();
  return editor.isEditable() && (paraMarkerSelectionOwnerCounts.get(editor) ?? 0) > 0;
}

/**
 * Selects a paragraph's gutter marker glyph, replacing the current selection — see
 * `$getSelectedParaMarker` (shared) for what that selection means. The single gate for creating
 * one: it selects only a glyph {@link $getSelectableParaMarker} offers, in an editor that
 * {@link $canSelectParaMarker}.
 *
 * Mutating: call inside `editor.update()` (a command handler already runs inside one).
 *
 * @param glyph - The paragraph's gutter marker glyph.
 * @returns `true` if the glyph is now selected, `false` if it was refused (nothing changed).
 */
export function $selectParaMarker(glyph: ImmutableTypedTextNode): boolean {
  if (!$getSelectableParaMarker(glyph.getParent())?.is(glyph) || !$canSelectParaMarker())
    return false;
  const selection = $createNodeSelection();
  selection.add(glyph.getKey());
  $setSelection(selection);
  return true;
}
