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
