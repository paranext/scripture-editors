/**
 * Editor-scoped record of how the editor's display text spells a stored no-break space (U+00A0).
 * Standard view's engine reads every on-screen U+00A0 as display spacing, so it shows a stored one
 * as `~` in body text, or as `NBSP_STAND_IN` where `~` is an ordinary character (shared-react's
 * `getNbspSpelling`), and always as `NBSP_STAND_IN` in an attribute value
 * ({@link ATTRIBUTE_NBSP_SPELLING}); other views show it as itself. The editor that knows its view
 * options registers the body text's spelling here so the display-run syncs and the other
 * node-state-to-display-text writers in `shared` — which never see view options — draw a value the
 * way the adaptor first built it. Keyed per editor (the main editor and the footnote popover each
 * register their own).
 */
import { $getEditor, LexicalEditor } from "lexical";
import { NBSP, NBSP_STAND_IN } from "./node-constants.js";

const nbspDisplaySpellings = new WeakMap<LexicalEditor, string>();

/**
 * How Standard view spells a stored no-break space in an attribute value — a char span's `|…` list,
 * a milestone's or figure's attributes, a note's or sidebar's `\cat`, a verse's `\va`/`\vp`, a
 * chapter's `\ca`/`\cp` — on screen and in the fragment its settle re-tokenizes, whatever the body
 * text's spelling. Paratext reads `~` as a no-break space only in body text and keeps every byte of
 * an attribute value as it is, so a value's `~` is an ordinary character in every project, and only
 * `NBSP_STAND_IN` can stand for the value's U+00A0 without colliding with one.
 */
export const ATTRIBUTE_NBSP_SPELLING = NBSP_STAND_IN;

/**
 * Records that `editor` displays a stored no-break space in body text as `nbspSpelling`, and so an
 * attribute value's as {@link ATTRIBUTE_NBSP_SPELLING}, or both as themselves when it is
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
 * What the active editor displays a stored no-break space in body text as, or `undefined` when it
 * displays one as itself. A bare `editorState.read()` has no active editor and gets `undefined`, so
 * a caller comparing display bytes must read through the editor (`editor.read()`, an update, a
 * transform).
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
 * What the active editor displays a stored no-break space in an attribute value as:
 * {@link ATTRIBUTE_NBSP_SPELLING} where it respells a no-break space at all, else `undefined` (it
 * displays one as itself). Read it the way {@link $getNbspDisplaySpelling} must be read.
 */
export function $getAttributeNbspDisplaySpelling(): string | undefined {
  return $getNbspDisplaySpelling() === undefined ? undefined : ATTRIBUTE_NBSP_SPELLING;
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
