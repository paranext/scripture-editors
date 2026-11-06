/**
 * A line break written in text: `\r\n`, `\n`, a lone `\r` (an old Mac line ending), or Unicode's
 * line and paragraph separators (U+2028, U+2029). No paragraph stores one: ParatextData saves the
 * first three as a space and keeps the separators as invisible characters.
 */
export const LINE_BREAK_IN_TEXT = /\r\n|[\n\r\u2028\u2029]/;

/** `text` with each line break written in it ({@link LINE_BREAK_IN_TEXT}) as a bare `\n`. */
export function withNewlineLineBreaks(text: string): string {
  return text.replace(/\r\n|[\r\u2028\u2029]/g, "\n");
}
