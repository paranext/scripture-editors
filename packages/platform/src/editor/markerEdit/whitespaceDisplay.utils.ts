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
 *   `NBSP_SYMBOL` with the setting on — `getNbspSpelling`), visible and editable, and spaces
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

import { NBSP } from "shared";

/**
 * Data → display: NBSP → `nbspSpelling`; spaces in runs of 2+ → NBSP. Paragraph-leading
 * single-space display is NOT handled here — `createPara` (usj-editor.adaptor.ts) applies it to the
 * first content text node directly, where "first in the paragraph" is actually known.
 *
 * @param text - USJ text content.
 * @param nbspSpelling - What a stored NBSP displays as (`getNbspSpelling`); `~` by default.
 */
export function usjTextToDisplay(text: string, nbspSpelling = "~"): string {
  const result = text.replaceAll(NBSP, nbspSpelling);
  return result.replace(/ {2,}/g, (run) => NBSP.repeat(run.length));
}

/**
 * Display → data: `nbspSpelling` → NBSP; display-NBSP → plain space. Does not collapse runs.
 *
 * @param text - Display text.
 * @param nbspSpelling - What a stored NBSP displays as (`getNbspSpelling`); `~` by default.
 */
export function displayTextToUsj(text: string, nbspSpelling = "~"): string {
  return text.replaceAll(NBSP, " ").replaceAll(nbspSpelling, NBSP);
}
