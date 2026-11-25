/**
 * A line break written in text: `\r\n`, `\n`, or a lone `\r` (an old Mac line ending). No loaded
 * text holds one, since ParatextData reads each as a space, so splitting at one only ever splits
 * text the user just inserted, never text the file stores.
 *
 * Unicode's line and paragraph separators (U+2028, U+2029) are not line breaks here: as in
 * Paratext 9, they are characters like any other, kept in the text on paste, drop and typing, and
 * ParatextData saves them as they are. A file may store one, so treating one as a line break
 * would also split stored text.
 */
export const LINE_BREAK_IN_TEXT = /\r\n|[\n\r]/;

/** `text` with each line break written in it ({@link LINE_BREAK_IN_TEXT}) as a bare `\n`. */
export function withNewlineLineBreaks(text: string): string {
  return text.replace(/\r\n?/g, "\n");
}
