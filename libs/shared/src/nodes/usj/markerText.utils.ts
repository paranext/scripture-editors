/**
 * The display text of USFM markers and note callers: pure string builders with no node
 * dependencies, kept in a module of their own so node classes and the node utilities can both use
 * them without importing each other.
 */

import { NBSP } from "./node-constants.js";

/**
 * Gets the opening marker text.
 * @param marker - The USFM marker.
 * @param nested - Whether the span nests inside another char span. A nested span's marker carries
 *   the `+` prefix (`\+w`) — ParatextData's writer rule and PT9's on-screen display for USFM ≤3.0,
 *   where `+` is what makes a bare char marker nest instead of closing the enclosing span. The
 *   glyph must show it so a re-tokenization of the visible text reproduces the same nesting.
 * @returns the opening marker text.
 */
export function openingMarkerText(marker: string, nested = false): string {
  return `\\${nested ? "+" : ""}${marker}`;
}

/**
 * Gets the closing marker text.
 * @param marker - The USFM marker.
 * @param nested - Whether the span nests inside another char span (see {@link openingMarkerText}).
 * @returns the closing marker text.
 */
export function closingMarkerText(marker: string, nested = false): string {
  return `\\${nested ? "+" : ""}${marker}*`;
}

/**
 * Gets the open marker text with the marker visible.
 * @param marker - Verse marker.
 * @param content - Content such as chapter or verse number.
 * @returns the marker text with the open marker visible.
 */
export function getVisibleOpenMarkerText(marker: string, content: string | undefined): string {
  let text = openingMarkerText(marker);
  if (content) text += `${NBSP}${content}`;
  text += " ";
  return text;
}

/**
 * Get editable note caller text.
 * @param noteCaller - Note caller.
 * @returns caller text.
 */
export function getEditableCallerText(noteCaller: string): string {
  return " " + noteCaller + NBSP;
}

/** Whether `a` and `b` are the same caller-text byte: a space and a no-break space are both the
 * whitespace around the caller, whichever the view displays. */
function isSameCallerByte(a: string, b: string): boolean {
  return a === b || ((a === " " || a === NBSP) && (b === " " || b === NBSP));
}

/**
 * Where the bytes typed into an expanded note's editable caller text start and end, and whether
 * any of the caller's own bytes are gone: what is left of `text` once the bytes it still starts
 * and ends with, from the caller's own spelling ({@link getEditableCallerText}), are set aside.
 * The caller's bytes are `missing` when those leading and trailing bytes are not its whole
 * spelling — some were deleted or typed over.
 */
export function typedCallerRange(
  text: string,
  caller: string,
): { start: number; end: number; missing: boolean } {
  const canonical = getEditableCallerText(caller);
  let start = 0;
  while (
    start < text.length &&
    start < canonical.length &&
    isSameCallerByte(text[start], canonical[start])
  )
    start += 1;
  let kept = 0;
  while (
    kept < text.length - start &&
    kept < canonical.length - start &&
    isSameCallerByte(text[text.length - 1 - kept], canonical[canonical.length - 1 - kept])
  )
    kept += 1;
  return { start, end: text.length - kept, missing: start + kept < canonical.length };
}

/**
 * The bytes typed into an expanded note's editable caller text, spelled as the note's content
 * reads them (a no-break space as the space it stands for): what a caller that is not put back as
 * a caller word gives its note's content. See {@link typedCallerRange}.
 */
export function typedCallerBytes(text: string, caller: string): string {
  const { start, end } = typedCallerRange(text, caller);
  return text.slice(start, end).replaceAll(NBSP, " ");
}
