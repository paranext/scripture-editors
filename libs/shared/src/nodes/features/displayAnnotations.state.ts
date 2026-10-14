/**
 * Annotations held ON a display-byte node (a marker glyph, an attribute run's text, a verse, a note
 * caller, a chapter glyph, a read-only glyph decorator). Such a node is never moved into a
 * `TypedMarkNode` or split by one: display runs are found by position and read as single nodes,
 * so the node keeps its place and carries the annotation as state instead.
 */

import { createState } from "lexical";

/**
 * One annotation on a carrier: `[start, end)` offsets into the carrier's text. A decorator's holds
 * are stored as offsets into the holdable bytes it stands for (`$decoratorHoldableText`), and read
 * (`$displayAnnotationsOf`) as offsets into the text it renders. `start === end === 0` holds a
 * decorator whole. `undisplayed` marks, as read, a decorator held only for bytes it stands for but
 * does not show (a verse's `\va` in a view that hides it): held, but never painted; its
 * `[start, end)` then still index the holdable bytes.
 */
export interface DisplayAnnotation {
  type: string;
  id: string;
  start: number;
  end: number;
  undisplayed?: boolean;
}

/** A carrier's annotations, and the text their stored offsets were measured against: a text
 * carrier's text, or a decorator's holdable bytes. */
export interface DisplayAnnotations {
  basis: string;
  annotations: DisplayAnnotation[];
}

function isDisplayAnnotation(value: unknown): value is DisplayAnnotation {
  if (typeof value !== "object" || value === null) return false;
  const { type, id, start, end, undisplayed } = value as { [key: string]: unknown };
  return (
    typeof type === "string" &&
    typeof id === "string" &&
    Number.isInteger(start) &&
    Number.isInteger(end) &&
    (undisplayed === undefined || typeof undisplayed === "boolean")
  );
}

export const displayAnnotationsState = createState("displayAnnotations", {
  parse: (value: unknown): DisplayAnnotations | undefined => {
    if (typeof value !== "object" || value === null) return undefined;
    const { basis, annotations } = value as { [key: string]: unknown };
    if (typeof basis !== "string" || !Array.isArray(annotations)) return undefined;
    if (!annotations.every(isDisplayAnnotation)) return undefined;
    return { basis, annotations };
  },
});

/** A range of held bytes, `[start, end)`. */
interface HeldRange {
  start: number;
  end: number;
}

/** Above this many table cells, the common prefix and suffix are matched one to one before the
 * table is built (but for {@link TRIM_MARGIN} bytes each side of the edit). Carrier texts (a
 * glyph, a number, an attribute list) are well below it. */
const FULL_TABLE_CELLS = 1 << 16;
/** How many bytes of a trimmed prefix or suffix stay in the table, so a hold can still choose
 * between the identical bytes beside an edit. */
const TRIM_MARGIN = 32;

/**
 * Each byte of `before` matched to its counterpart in `after` (its index there), or `undefined` for a
 * byte `after` no longer has. The alignment matches as many bytes as possible (a longest common
 * subsequence). Among the alignments of that length, `holds` (ranges of `before`) decide:
 *
 * 1. the most held bytes stay matched (a byte counts once per hold over it), so a rewrite that drops
 *    one of two identical bytes drops the unheld one;
 * 2. then the fewest bytes of `after` are inserted strictly inside a hold, so a byte typed beside an
 *    identical byte at a hold's edge is read as typed outside it, the way text typed at a mark's
 *    edge is outside the mark;
 * 3. then the earliest match.
 *
 * A byte typed beside an identical byte where no hold tells the two apart is still ambiguous: that
 * is what {@link remapAnnotations}' caret is for.
 */
export function alignCharacters(
  before: string,
  after: string,
  holds: readonly HeldRange[] = [],
): (number | undefined)[] {
  const matched: (number | undefined)[] = new Array<number | undefined>(before.length).fill(
    undefined,
  );
  const heldCount = new Array<number>(before.length).fill(0);
  // insideHold[g]: the gap before byte g of `before` lies strictly inside a hold.
  const insideHold = new Array<boolean>(before.length + 1).fill(false);
  for (const { start, end } of holds) {
    for (let index = Math.max(0, start); index < Math.min(end, before.length); index++)
      heldCount[index]++;
    for (let gap = Math.max(0, start + 1); gap < Math.min(end, before.length + 1); gap++)
      insideHold[gap] = true;
  }
  let head = 0;
  let tail = 0;
  if ((before.length + 1) * (after.length + 1) > FULL_TABLE_CELLS) {
    while (head < before.length && head < after.length && before[head] === after[head]) head++;
    while (
      tail < before.length - head &&
      tail < after.length - head &&
      before[before.length - 1 - tail] === after[after.length - 1 - tail]
    )
      tail++;
    head = Math.max(0, head - TRIM_MARGIN);
    tail = Math.max(0, tail - TRIM_MARGIN);
  }
  for (let index = 0; index < head; index++) matched[index] = index;
  for (let index = 0; index < tail; index++)
    matched[before.length - 1 - index] = after.length - 1 - index;
  const a = before.slice(head, before.length - tail);
  const b = after.slice(head, after.length - tail);
  // One score orders the three criteria: each match outweighs every held byte, and each held byte
  // outweighs every byte inserted inside a hold.
  const perHeld = b.length + 1;
  const perMatch = (heldCount.reduce((sum, count) => sum + count, 0) + 1) * perHeld;
  const insertCost = (i: number) => (insideHold[head + i] ? 1 : 0);
  const matchScore = (i: number) => perMatch + heldCount[head + i] * perHeld;
  // best[i][j]: the best score aligning a[i..] with b[j..].
  const best = Array.from({ length: a.length + 1 }, () => new Array<number>(b.length + 1).fill(0));
  for (let i = a.length; i >= 0; i--)
    for (let j = b.length; j >= 0; j--) {
      if (i === a.length && j === b.length) continue;
      let score = -Infinity;
      if (i < a.length && j < b.length && a[i] === b[j]) score = matchScore(i) + best[i + 1][j + 1];
      if (i < a.length) score = Math.max(score, best[i + 1][j]);
      if (j < b.length) score = Math.max(score, best[i][j + 1] - insertCost(i));
      best[i][j] = score;
    }
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j] && matchScore(i) + best[i + 1][j + 1] === best[i][j]) {
      matched[head + i] = head + j;
      i++;
      j++;
    } else if (best[i + 1][j] === best[i][j]) i++;
    else j++;
  }
  return matched;
}

/**
 * The alignment of a pure insertion or deletion that left the caret at `caret` (an offset into
 * `after`), when `before` and `after` are exactly that edit: an insertion of `n` bytes ending at
 * the caret (`[caret - n, caret)` of `after`), or a deletion of `n` bytes starting at it
 * (`[caret, caret + n)` of `before`) — where typing, Backspace and Delete leave the caret.
 * `undefined` when the texts are not that edit.
 */
export function alignEditAtCaret(
  before: string,
  after: string,
  caret: number,
): (number | undefined)[] | undefined {
  const grown = after.length - before.length;
  if (grown > 0) {
    const start = caret - grown;
    if (start < 0 || caret > after.length) return undefined;
    if (
      after.slice(0, start) !== before.slice(0, start) ||
      after.slice(caret) !== before.slice(start)
    )
      return undefined;
    return Array.from(before, (_, index) => (index < start ? index : index + grown));
  }
  if (grown < 0) {
    const removed = -grown;
    if (caret < 0 || caret + removed > before.length) return undefined;
    if (after !== before.slice(0, caret) + before.slice(caret + removed)) return undefined;
    return Array.from(before, (_, index) => {
      if (index < caret) return index;
      return index < caret + removed ? undefined : index - removed;
    });
  }
  return undefined;
}

/** `[start, end)` through `alignment` (from {@link alignCharacters}). See {@link mapRangeThroughEdit}. */
export function mapRangeThroughAlignment(
  alignment: readonly (number | undefined)[],
  start: number,
  end: number,
): [number, number] | undefined {
  let first: number | undefined;
  let last: number | undefined;
  for (let index = start; index < end; index++) {
    const to = alignment[index];
    if (to === undefined) continue;
    first ??= to;
    last = to;
  }
  return first === undefined || last === undefined ? undefined : [first, last + 1];
}

/**
 * Where the range `[start, end)` of `before` lands in `after`: from its first byte `after` still has
 * to just past its last. Only matched bytes bound the result. So a byte typed strictly inside the
 * range is inside it, a byte typed at either edge stays outside it (as text typed beside a mark
 * does), and a re-spelling keeps the bytes both spellings share. With no byte left, the range is
 * `undefined` — dropped, never moved onto other bytes.
 */
export function mapRangeThroughEdit(
  before: string,
  after: string,
  start: number,
  end: number,
): [number, number] | undefined {
  return mapRangeThroughAlignment(alignCharacters(before, after, [{ start, end }]), start, end);
}

/**
 * `held`'s ranges re-measured against `basis`, the carrier's storage text now, dropping any with no
 * byte left (see {@link mapRangeThroughEdit}). A whole-decorator hold (`[0, 0]`) stays whole.
 *
 * The bytes are matched by `caret` when it is given and names the edit — the caret of a user's
 * edit in this carrier, right after it ({@link alignEditAtCaret}): a byte typed at a hold's edge
 * is outside the hold even beside an identical held byte, and a deleted byte is the one the user
 * deleted. Otherwise (a rewrite, or a caret the texts do not agree with) by the hold-weighted
 * alignment ({@link alignCharacters}): the held bytes are the ones kept.
 */
export function remapAnnotations(
  held: DisplayAnnotations,
  basis: string,
  caret?: number,
): DisplayAnnotation[] {
  if (held.basis === basis) return held.annotations;
  const ranges = held.annotations.filter((annotation) => annotation.start !== annotation.end);
  const alignment =
    (caret === undefined ? undefined : alignEditAtCaret(held.basis, basis, caret)) ??
    alignCharacters(held.basis, basis, ranges);
  return held.annotations.flatMap((annotation) => {
    if (annotation.start === annotation.end) return [annotation];
    const mapped = mapRangeThroughAlignment(alignment, annotation.start, annotation.end);
    return mapped ? [{ ...annotation, start: mapped[0], end: mapped[1] }] : [];
  });
}
