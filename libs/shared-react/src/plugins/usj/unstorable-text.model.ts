/**
 * Text a hidden-marker view keeps out of what is pasted, dropped or typed into it, because saved it
 * would stop being text: `\` starts a USFM marker, and `//` is USFM's optional line break.
 */
export type UnstorableCharacter = "\\" | "//";

/**
 * Passed to {@link UnstorableTextRemovedHandler} when an edit's text lost unstorable characters, or
 * a delete or a drag-move was refused because it would have made or lost one.
 */
export interface UnstorableTextRemoved {
  /**
   * What brought the text in, or `"deletion"` for a delete refused because what it left would put
   * a `/` against another `/` (Backspace, Delete, a word or line delete, a cut, or the removal half
   * of a drag-move), or `"move"` for a drag-move refused whole, before anything was removed,
   * because the dragged text would have lost some of itself where it was dropped (a `/` landing
   * against a `/`, or a `\` dragged from content that can hold one). `"typing"` also covers a
   * refused transpose (macOS Ctrl+T) that would have put a `/` against another `/`. More sources
   * may be added; a host that branches on this should handle values it does not know.
   */
  readonly source: "paste" | "drop" | "typing" | "deletion" | "move";
  /**
   * What was removed or refused, each kind once, in the order first met. Never empty. A refused
   * deletion is always `["//"]`; a refused move names what the drop would have removed.
   */
  readonly removed: readonly UnstorableCharacter[];
}

/**
 * Told once per paste, drop or refused keystroke that removed or refused unstorable text, and once
 * per refused deletion or drag-move, so the host can tell the user why some of what they pasted,
 * dropped or typed is missing, or why a delete or a move did nothing.
 *
 * Called synchronously from inside the editor command or update that made the edit: report the
 * edit from here (show a notice, say) rather than change the editor.
 */
export type UnstorableTextRemovedHandler = (event: UnstorableTextRemoved) => void;
