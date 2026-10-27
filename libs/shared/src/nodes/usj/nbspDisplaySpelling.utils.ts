/**
 * Editor-scoped record of how the editor's display text spells a stored no-break space (U+00A0)
 * that is part of an attribute value or other node state it renders as text. Standard view's
 * engine reads every on-screen U+00A0 as display spacing, so it shows a stored one as `~`, or as
 * `NBSP_STAND_IN` where `~` is an ordinary character (shared-react's `getNbspSpelling`); other
 * views show it as itself. The editor that knows its view options registers the spelling here so
 * the display-run syncs and the other node-state-to-display-text writers in `shared` — which never
 * see view options — draw a value the way the adaptor first built it. Keyed per editor (the main
 * editor and the footnote popover each register their own).
 */
import { $getEditor, LexicalEditor } from "lexical";
import { NBSP } from "./node-constants.js";

const nbspDisplaySpellings = new WeakMap<LexicalEditor, string>();

/**
 * Records that `editor` displays a stored no-break space as `nbspSpelling`, or as itself when it is
 * `undefined`.
 *
 * @returns A function that removes the record, if it is still the registered one.
 */
export function registerNbspDisplaySpelling(
  editor: LexicalEditor,
  nbspSpelling: string | undefined,
): () => void {
  if (nbspSpelling === undefined || nbspSpelling === NBSP) {
    nbspDisplaySpellings.delete(editor);
    return () => undefined;
  }
  nbspDisplaySpellings.set(editor, nbspSpelling);
  return () => {
    if (nbspDisplaySpellings.get(editor) === nbspSpelling) nbspDisplaySpellings.delete(editor);
  };
}

/**
 * What the active editor displays a stored no-break space as, or `undefined` when it displays one
 * as itself. A bare `editorState.read()` has no active editor and gets `undefined`, so a caller
 * comparing display bytes must read through the editor (`editor.read()`, an update, a transform).
 */
export function $getNbspDisplaySpelling(): string | undefined {
  let editor: LexicalEditor;
  try {
    editor = $getEditor();
  } catch {
    return undefined;
  }
  return nbspDisplaySpellings.get(editor);
}

/**
 * `value` (node state: an attribute value, a verse's `\vp`, a note's `\cat`, …) as display text:
 * each stored no-break space spelled `nbspSpelling`. Length-preserving, so offsets into the value
 * hold for its display text.
 *
 * @param value - The stored value.
 * @param nbspSpelling - The display spelling of a no-break space; `undefined` keeps U+00A0.
 */
export function nbspValueToDisplay(value: string, nbspSpelling: string | undefined): string {
  return nbspSpelling === undefined ? value : value.replaceAll(NBSP, nbspSpelling);
}
