/**
 * Standard view's space-run collapse, as it applies to a text node's DISPLAY text. Standard view
 * shows each space of a run of two or more as NBSP, so the run stays visible while typing, and
 * serialization collapses the run back to one space. A data NBSP displays as `~`, so an NBSP in
 * display text is always a space, and `~` never belongs to a run.
 *
 * Serialization and the logical position model both read the collapse from here, so what
 * `getUsj()` emits and the offsets the model reports cannot disagree about which characters a
 * run loses. Callers pass the text AFTER removing a char span's structural separator prefix,
 * which serialization strips before collapsing.
 */

/** Two or more consecutive display spaces: plain spaces or NBSPs. */
const SPACE_RUN = /[ \u00A0]{2,}/g;

/**
 * Finds the characters the collapse drops: every character of a run after its first.
 *
 * A run can cross from one text node into the next (an annotation mark cuts a text into several
 * nodes, and the mark is presentation only), and is collapsed as ONE run: when `continuesRun` says
 * the text before this one ends in a display space, this text's leading spaces are that run's
 * later characters and all drop.
 *
 * @param displayText - A text node's display text, without a char span's separator prefix.
 * @param continuesRun - Whether the text this one follows in the same run of text ends in a
 *   display space ({@link endsInSpaceRun} of what it keeps).
 * @returns The dropped characters as ascending, non-overlapping `[start, end)` ranges.
 */
export function collapsedSpaceRunRanges(
  displayText: string,
  continuesRun = false,
): [number, number][] {
  // With the run's earlier space prepended, a run at `index` in the joined text drops
  // `[index + 1, index + length)` there, which is `[index, index + length - 1)` in this text.
  const shift = continuesRun ? 1 : 0;
  const text = continuesRun ? ` ${displayText}` : displayText;
  return [...text.matchAll(SPACE_RUN)].map((run) => [
    run.index + 1 - shift,
    run.index + run[0].length - shift,
  ]);
}

/** Whether display text ends in a display space, so a space run the next text starts with
 * continues it. */
export function endsInSpaceRun(displayText: string): boolean {
  return /[ \u00A0]$/.test(displayText);
}

/**
 * Collapses each run to its first character. Display NBSPs survive as NBSP; the display→data
 * inversion that follows in serialization turns them back into spaces.
 *
 * @param displayText - A text node's display text, without a char span's separator prefix.
 * @returns The display text with every run collapsed.
 */
export function collapseSpaceRuns(displayText: string): string {
  return displayText.replace(SPACE_RUN, (run) => run[0]);
}
