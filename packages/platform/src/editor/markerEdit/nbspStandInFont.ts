/**
 * The font that draws Standard view's stand-in for a stored no-break space (`NBSP_STAND_IN`,
 * U+001A, used where `ViewOptions.allowInvisibleCharacters` is on) as what it stands for: a blank
 * the width of a space. Without it a browser draws a C0 control character as a visible box.
 */

import { LexicalEditor } from "lexical";

/**
 * The font family that draws the stand-in Standard view holds for a stored no-break space where
 * `ViewOptions.allowInvisibleCharacters` is on (U+001A) as a blank a quarter of an em wide, the
 * width of a space in a typical Scripture font. Its one face covers U+001A alone
 * (`unicode-range: U+1A`), so it changes nothing else. A browser draws a control character itself
 * unless the FIRST family in the font stack has a glyph for it, so it must lead every
 * `font-family` that applies to Scripture text: `generateUsjCss` puts it first in each family it
 * emits, and a host stylesheet that sets its own Scripture font stack names
 * `PlatformEditorNbspStandIn` first there too — the name is part of the editor's contract with its
 * hosts, so it must not change. The editor adds the face to its document itself.
 */
export const NBSP_STAND_IN_FONT_FAMILY = "PlatformEditorNbspStandIn";

/**
 * A TrueType font with one empty glyph, 250 units wide on a 1000-unit em, mapped from U+001A only.
 * Built with fontTools' `FontBuilder`: glyph order `.notdef` and `nbspstandin`, both empty and 250
 * wide; cmap {U+001A: `nbspstandin`}; ascent 800, descent 200.
 */
const FONT_BASE64 =
  "AAEAAAAKAIAAAwAgT1MvMkT6QrAAAAEoAAAAYGNtYXAADABtAAABkAAAADRnbHlmAAAAAAAAAcwAAAABaGVhZC0hTTIAAACsAAAANmhoZWEDIgA0AAAA5AAAACRobXR4APoAAAAAAYgAAAAGbG9jYQAAAAAAAAHEAAAABm1heHAAAwACAAABCAAAACBuYW1lvKLY4AAAAdAAAABscG9zdEFI6kUAAAI8AAAAMgABAAAAAQAAvTP1ql8PPPUAAwPoAAAAAOcFhikAAAAA5wWGKQAAAAAAAAAAAAAAAwACAAAAAAAAAAEAAAMg/zgAAAD6AAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAEAAAACAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAwD6AZAABQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAPz8/PwAAABoAGgMg/zgAAAMgAMgAAAAAAAAAAAAAAAAAAAAgAAAA+gAAAAAAAAAAAAIAAAADAAAAFAADAAEAAAAUAAQAIAAAAAQABAABAAAAGv//AAAAGv///+cAAQAAAAAAAAAAAAAAAAAAAAAAAAAEADYAAQAAAAAAAQALAAAAAQAAAAAAAgAHAAsAAwABBAkAAQAWABIAAwABBAkAAgAOAChOYnNwU3RhbmRJblJlZ3VsYXIATgBiAHMAcABTAHQAYQBuAGQASQBuAFIAZQBnAHUAbABhAHIAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAABAgtuYnNwc3RhbmRpbgAA";

/** The documents the face has been added to. */
const documentsWithFace = new WeakSet<Document>();

/** Adds the stand-in's face to `document`, once; does nothing where the CSS Font Loading API is not. */
function addNbspStandInFace(document: Document): void {
  if (documentsWithFace.has(document)) return;
  const FontFaceClass = document.defaultView?.FontFace;
  if (!FontFaceClass || !document.fonts) return;
  documentsWithFace.add(document);
  const bytes = Uint8Array.from(atob(FONT_BASE64), (character) => character.charCodeAt(0));
  // From the bytes rather than a `data:` URL, so no content security policy has to allow it.
  const face = new FontFaceClass(NBSP_STAND_IN_FONT_FAMILY, bytes, { unicodeRange: "U+1A" });
  document.fonts.add(face);
}

/**
 * Adds the stand-in's face to the document of whatever element the editor is mounted on.
 *
 * @param editor - The editor.
 * @returns The teardown (the face stays: other editors in the document may use it).
 */
export function registerNbspStandInFont(editor: LexicalEditor): () => void {
  return editor.registerRootListener((root) => {
    if (root) addNbspStandInFace(root.ownerDocument);
  });
}
