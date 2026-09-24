import { $getEditor, LexicalEditor } from "lexical";

/**
 * How many `ParaMarkerSelectionPlugin`s are mounted on each editor. A count rather than a set so a
 * remount that registers before the previous instance unregisters (React strict mode, a re-keyed
 * plugin) never leaves the editor looking unowned.
 */
const ownerCounts = new WeakMap<LexicalEditor, number>();

/**
 * Records that `editor` protects a selected paragraph marker — refusing delete, cut, paste and
 * drop on it, and owning its keys. Called by `ParaMarkerSelectionPlugin`; the plugins that CREATE
 * the selection (a gutter click, an arrow key) ask {@link $canSelectParaMarker} first, so a marker
 * selection never exists in an editor that would let rich-text's default Backspace delete it.
 *
 * @returns a function that withdraws this registration.
 */
export function registerParaMarkerSelectionOwner(editor: LexicalEditor): () => void {
  ownerCounts.set(editor, (ownerCounts.get(editor) ?? 0) + 1);
  return () => {
    const count = (ownerCounts.get(editor) ?? 1) - 1;
    if (count > 0) ownerCounts.set(editor, count);
    else ownerCounts.delete(editor);
  };
}

/**
 * Whether the active editor may select a paragraph marker: it is editable, and a
 * `ParaMarkerSelectionPlugin` is mounted to protect the selection (see
 * {@link registerParaMarkerSelectionOwner}). A read-only editor never selects one: Lexical still
 * delivers clicks there but drops keydown, so a marker selected by a click could never be left by
 * keyboard, and there is nothing to change the marker to.
 *
 * Read-only, but needs an active editor: call inside `editor.update()` or a command handler (a
 * bare `editorState.read()` has no editor to ask).
 */
export function $canSelectParaMarker(): boolean {
  const editor = $getEditor();
  return editor.isEditable() && (ownerCounts.get(editor) ?? 0) > 0;
}
