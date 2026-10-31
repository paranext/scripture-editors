/**
 * Standard-view whitespace display/data mapping — the PURE string half of the whitespace feature;
 * the live-editing half is `whitespaceDisplay.plugin.utils.ts` beside this file.
 *
 * The whole feature in one map. Three representations:
 *
 * - USFM bytes (host side): `~` means NBSP unless the project stores invisible characters literally
 *   (`ViewOptions.allowInvisibleCharacters`, PT9 `AllowInvisibleChars`), where `~` is an ordinary
 *   character and NBSP is U+00A0 itself; ParatextData collapses space runs on reformat.
 * - USJ: a real NBSP (U+00A0) for a no-break space; plain spaces for spaces; with the setting on,
 *   `~` for a literal tilde.
 * - Standard-view editor DOM: DISPLAY text — a stored NBSP renders as its spelling (`~`, or
 *   `NBSP_STAND_IN` with the setting on — `getNbspSpelling`), visible and editable, and spaces
 *   inside a run of 2+ render as NBSP so they stay visible while typing instead of HTML-collapsing.
 *   Runs exist transiently: normalization is an event (serialization, Tier-2 rebuilds — matching
 *   PT9's on-reformat timing), not an invariant.
 *
 * Five boundaries, and who owns each:
 *
 * 1. Document LOAD (data → display): the forward adaptor calls {@link usjTextToDisplay} on text
 *    content. A paragraph-leading single space is special-cased in `createPara`
 *    (usj-editor.adaptor.ts), where "first in the paragraph" is actually known.
 * 2. Live TYPING: `$displayWhitespaceTransform` (plugin utils) keeps a run's spaces displayed as
 *    NBSP incrementally and length-preservingly, so the caret stays valid mid-keystroke.
 * 3. COPY/CUT: display-NBSP → plain space in the clipboard payload, wholesale — and `text/html`
 *    carries those same inverted bytes as escaped html rather than a DOM export, so no NBSP reaches
 *    either readable flavor and both decode to one document (plugin utils).
 * 4. PASTE: external NBSP (including `&nbsp;` in text/html) → the display spelling (plugin
 *    utils).
 * 5. SERIALIZATION (display → data): the reverse adaptor strips a char span's structural leading
 *    NBSP separator, then collapses runs via `collapseSpaceRuns` (in `shared`, beside the run
 *    ranges the logical position model drops, so `getUsj()` and reported offsets agree), then
 *    inverts via {@link displayTextToUsj}.
 *
 * The split between the two files: these functions are pure whole-string transforms for the
 * load/serialize boundaries; the plugin utils are `$`-prefixed tree/clipboard-event code for the
 * typing/copy/paste boundaries. Both are gated to Standard view by their callers via the
 * `hasStandardViewWhitespace` capability fingerprint (never the named mode). Not to be confused
 * with the fragment tokenizer's own spelling → NBSP handling (usfmFragmentToUsj.ts) — that is USFM
 * BYTE semantics during tokenization, not display mapping; the marker settle hands it the same
 * spelling, so the two agree.
 */

import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { ATTRIBUTE_NBSP_SPELLING, NBSP } from "shared";
import { getNbspSpelling, hasStandardViewWhitespace, ViewOptions } from "shared-react";

/** Whether `code` is a C0 control character other than tab, line feed and carriage return. */
function isIncomingControlCharacter(code: number): boolean {
  return code >= 0x01 && code <= 0x1f && code !== 0x09 && code !== 0x0a && code !== 0x0d;
}

/**
 * Turns each C0 control character other than tab, line feed and carriage return (U+0001-U+0008,
 * U+000B, U+000C, U+000E-U+001F) into a space. Paratext's reader (`ScrText.GetText`) turns
 * U+0001-U+0008 and U+000E-U+001F into spaces, so a project can never hold one of those; it keeps
 * U+000B and U+000C, which become spaces here on purpose, since JavaScript reads them as
 * whitespace (`\s`). Run on all text that comes into Standard view (a load, a paste, a drop,
 * typing, applied delta ops) before anything else, because U+001A is the editor's own stand-in for
 * a stored no-break space (`NBSP_STAND_IN`): one that came in from outside would otherwise be saved
 * as a no-break space.
 *
 * @param text - Incoming text.
 * @returns The text with those characters as spaces; `text` itself when it has none.
 */
export function controlCharactersToSpaces(text: string): string {
  let index = 0;
  while (index < text.length && !isIncomingControlCharacter(text.charCodeAt(index))) index += 1;
  if (index === text.length) return text;
  let result = text.slice(0, index);
  for (; index < text.length; index += 1)
    result += isIncomingControlCharacter(text.charCodeAt(index)) ? " " : text[index];
  return result;
}

/** The zero-width no-break space (U+FEFF), also read as a byte order mark. */
export const ZERO_WIDTH_NO_BREAK_SPACE = "\uFEFF";

/**
 * Drops every zero-width no-break space (U+FEFF) from text the user enters — typed, pasted or
 * dropped, in every view and whatever the project's `AllowInvisibleChars`. Paratext 9's editor uses
 * the character only to position its caret and removes every one when it saves, so one entered
 * there never reaches the file; one the text already holds is not this function's to remove.
 *
 * @param text - Entered text.
 * @returns The text without U+FEFF; `text` itself when it has none.
 */
export function withoutZeroWidthNoBreakSpaces(text: string): string {
  return text.includes(ZERO_WIDTH_NO_BREAK_SPACE)
    ? text.replaceAll(ZERO_WIDTH_NO_BREAK_SPACE, "")
    : text;
}

/**
 * {@link controlCharactersToSpaces} over every string of a USJ document: text content and
 * attribute values alike, since Standard view shows both as text it re-reads. Objects without such
 * a character are returned as they are.
 *
 * @param usj - The document coming into Standard view.
 * @returns The document with those characters as spaces.
 */
export function usjWithoutControlCharacters(usj: Usj): Usj {
  const content = contentWithoutControlCharacters(usj.content);
  return content === usj.content ? usj : { ...usj, content };
}

function contentWithoutControlCharacters(content: MarkerContent[]): MarkerContent[] {
  let changed = false;
  const mapped = content.map((item) => {
    const next =
      typeof item === "string"
        ? controlCharactersToSpaces(item)
        : objectWithoutControlCharacters(item);
    if (next !== item) changed = true;
    return next;
  });
  return changed ? mapped : content;
}

function objectWithoutControlCharacters(object: MarkerObject): MarkerObject {
  const changes: { [key: string]: unknown } = {};
  for (const [key, value] of Object.entries(object)) {
    if (typeof value !== "string") continue;
    const next = controlCharactersToSpaces(value);
    if (next !== value) changes[key] = next;
  }
  if (object.content) {
    const content = contentWithoutControlCharacters(object.content);
    if (content !== object.content) changes.content = content;
  }
  return Object.keys(changes).length > 0 ? Object.assign({}, object, changes) : object;
}

/**
 * Data → display: NBSP → `nbspSpelling`; spaces in runs of 2+ → NBSP. Paragraph-leading
 * single-space display is NOT handled here — `createPara` (usj-editor.adaptor.ts) applies it to the
 * first content text node directly, where "first in the paragraph" is actually known.
 *
 * @param text - USJ text content.
 * @param nbspSpelling - What a stored NBSP displays as (`getNbspSpelling`); `~` by default.
 */
export function usjTextToDisplay(text: string, nbspSpelling = "~"): string {
  const result = controlCharactersToSpaces(text).replaceAll(NBSP, nbspSpelling);
  return result.replace(/ {2,}/g, (run) => NBSP.repeat(run.length));
}

/**
 * Display → data: `nbspSpelling` → NBSP; display-NBSP → plain space. Does not collapse runs. The
 * attribute-value spelling (`ATTRIBUTE_NBSP_SPELLING`) is never data either, so a value's bytes
 * that end up in body text read it as NBSP too.
 *
 * @param text - Display text.
 * @param nbspSpelling - What a stored NBSP displays as (`getNbspSpelling`); `~` by default.
 */
export function displayTextToUsj(text: string, nbspSpelling = "~"): string {
  return text
    .replaceAll(NBSP, " ")
    .replaceAll(nbspSpelling, NBSP)
    .replaceAll(ATTRIBUTE_NBSP_SPELLING, NBSP);
}

/**
 * Respells the no-break spaces in text a host takes from the editor's display — a DOM selection or
 * an element's `textContent`, for a copy or a search — the way the project's USFM spells them.
 * Standard view shows a stored no-break space in body text as `~` while
 * `ViewOptions.allowInvisibleCharacters` is off, which is already the USFM spelling, so that is left
 * as it is. With it on, and in an attribute value under either setting, the editor holds a no-break
 * space as an internal stand-in it draws as a blank the width of a space; each one becomes U+00A0
 * here, and `~` stays an ordinary character. Other display characters (the no-break spaces a space
 * run or a marker separator shows as) are left as they are.
 *
 * Expected to be removed once Standard view holds a stored no-break space as itself (PT-4931):
 * display text will then already carry the project's spelling.
 *
 * @param displayText - Text read from the editor's display.
 * @param viewOptions - The editor's view options.
 * @returns The text with the project's spelling of a no-break space.
 * @experimental This member is unstable and may change shape or disappear without notice.
 *
 * @public
 */
export function toUsfmNbspSpelling(
  displayText: string,
  viewOptions: ViewOptions | undefined,
): string {
  const nbspSpelling = getNbspSpelling(viewOptions);
  const withBodySpelling =
    nbspSpelling === "~" ? displayText : displayText.replaceAll(nbspSpelling, NBSP);
  return withBodySpelling.replaceAll(ATTRIBUTE_NBSP_SPELLING, NBSP);
}

/** An opening marker glyph (`\nd`, `\+nd`, `\c`) at the end of a text; a closer ends in `*`. */
const OPENING_GLYPH_AT_END = /\\\+?[^\s\\|*]+$/;

/**
 * Whether the NBSP at `index` of `text` (display text in Standard view, as delta ops carry it) is
 * the separator or spacer after an opening marker glyph (`\nd`, `\+nd`, `\c`) — the NBSPs that are
 * part of how the view lays markers out, as opposed to a space shown as an NBSP because it is in a
 * run. A glyph is usually an op of its own (each text node is one op), so an NBSP at the start of
 * an op is structural when the op before it ends in an opening glyph. A closing glyph (`\nd*`) has
 * no separator after it.
 *
 * Nothing else makes an NBSP structural: a note's contents ops carry no glyphs, separators or
 * spacers, and a lone NBSP op anywhere else is a no-break space, which the editor itself only ever
 * holds as its spelling.
 *
 * @param text - The op's text.
 * @param index - Where the NBSP is in `text`.
 * @param previousText - The text of the op before this one in the same ops list, if that op is a
 *   text insert.
 */
function isStructuralDisplayNbsp(text: string, index: number, previousText = ""): boolean {
  return OPENING_GLYPH_AT_END.test(index === 0 ? previousText : text.slice(0, index));
}

/**
 * Text of a delta op going out of Standard view: each stored no-break space (shown as
 * `nbspSpelling`) becomes U+00A0, and an NBSP the view shows for a space (in a run of spaces)
 * becomes that space, so the ops read as USJ text does, the way every other view's ops do: no
 * U+00A0 in them is anything but a no-break space or a marker's own separator. Length-preserving,
 * so op positions are unchanged.
 */
function opTextOut(text: string, previousText: string | undefined, nbspSpelling: string): string {
  let out = "";
  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    if (character === nbspSpelling) out += NBSP;
    else if (character === NBSP && !isStructuralDisplayNbsp(text, index, previousText)) out += " ";
    else out += character;
  }
  return out;
}

/**
 * Text of a delta op coming into Standard view: control characters become spaces
 * ({@link controlCharactersToSpaces}), and each U+00A0 that is not a marker's separator or spacer
 * becomes `nbspSpelling`, the reverse of {@link opTextOut}.
 */
function opTextIn(text: string, previousText: string | undefined, nbspSpelling: string): string {
  const sanitized = controlCharactersToSpaces(text);
  if (!sanitized.includes(NBSP)) return sanitized;
  let result = "";
  for (let index = 0; index < sanitized.length; index += 1) {
    const character = sanitized[index];
    result +=
      character === NBSP && !isStructuralDisplayNbsp(sanitized, index, previousText)
        ? nbspSpelling
        : character;
  }
  return result;
}

/**
 * Maps the text of every insert in `ops`, including the ops inside an embed's `contents`. `map` is
 * also given the original text of the op before, when that op is a text insert.
 */
function mapOpsText<T extends { insert?: unknown }>(
  ops: T[],
  map: (text: string, previousText: string | undefined) => string,
): T[] {
  return ops.map((op, index) => {
    const { insert } = op;
    if (typeof insert === "string") {
      const previousInsert = index > 0 ? ops[index - 1].insert : undefined;
      const text = map(insert, typeof previousInsert === "string" ? previousInsert : undefined);
      return text === insert ? op : { ...op, insert: text };
    }
    if (!insert || typeof insert !== "object") return op;
    let changed = false;
    const embed: { [kind: string]: unknown } = {};
    for (const [kind, value] of Object.entries(insert)) {
      embed[kind] = value;
      if (!value || typeof value !== "object" || !("contents" in value)) continue;
      const { contents } = value;
      if (!contents || typeof contents !== "object" || !("ops" in contents)) continue;
      const contentsOps: unknown = contents.ops;
      if (!Array.isArray(contentsOps)) continue;
      const mapped = mapOpsText<{ insert?: unknown }>(contentsOps, map);
      embed[kind] = { ...value, contents: { ...contents, ops: mapped } };
      changed = true;
    }
    return changed ? { ...op, insert: embed } : op;
  });
}

/**
 * Delta ops on their way out of the editor (`onUsjChange`, `getNoteOps` and the other note-op
 * getters). Standard view holds display text, so its ops are given as USJ text, the way every
 * other view's are: a stored no-break space goes out as U+00A0 and never as its display spelling
 * (`~`, or the internal stand-in with `ViewOptions.allowInvisibleCharacters` on), and an NBSP the
 * view shows for a space in a run goes out as that space (see `opTextOut` in this file). That is
 * what lets a note move between Standard view and another view (Simple mode's footnotes pane edits
 * a paragraph-structure editor's notes in Standard view). Other views' ops are returned as they
 * are.
 *
 * @param ops - The editor's own ops.
 * @param viewOptions - The editor's view options.
 * @returns The ops a host is given.
 */
export function opsForHost<T extends { insert?: unknown }>(
  ops: T[],
  viewOptions: ViewOptions | undefined,
): T[] {
  if (!hasStandardViewWhitespace(viewOptions)) return ops;
  const nbspSpelling = getNbspSpelling(viewOptions);
  return mapOpsText(ops, (text, previousText) => opTextOut(text, previousText, nbspSpelling));
}

/**
 * Delta ops on their way into the editor (`applyUpdate`, `replaceEmbedUpdate`), the reverse of
 * {@link opsForHost}: in Standard view, control characters become spaces, and each U+00A0 that is
 * not the separator or spacer after an opening marker glyph becomes the display spelling of a
 * stored no-break space. Other views take the ops as they are.
 *
 * @param ops - The host's ops.
 * @param viewOptions - The editor's view options.
 * @returns The ops the editor applies.
 */
export function opsFromHost<T extends { insert?: unknown }>(
  ops: T[],
  viewOptions: ViewOptions | undefined,
): T[] {
  if (!hasStandardViewWhitespace(viewOptions)) return ops;
  const nbspSpelling = getNbspSpelling(viewOptions);
  return mapOpsText(ops, (text, previousText) => opTextIn(text, previousText, nbspSpelling));
}
