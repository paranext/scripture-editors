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

/**
 * Each byte of `before` matched to its counterpart in `after` (its index there), or `undefined` for a
 * byte `after` no longer has: a longest-common-subsequence alignment, after the common prefix and
 * suffix are matched one to one. Ties go to the earliest match. So a byte typed right beside an
 * identical one may be read as either of the two; nothing else is ambiguous. Carrier texts are short
 * (a glyph, a number, an attribute list), and the trimmed middle is what the quadratic table is
 * built for.
 */
export function alignCharacters(before: string, after: string): (number | undefined)[] {
  const matched: (number | undefined)[] = new Array<number | undefined>(before.length).fill(
    undefined,
  );
  let head = 0;
  while (head < before.length && head < after.length && before[head] === after[head]) {
    matched[head] = head;
    head++;
  }
  let tail = 0;
  while (
    tail < before.length - head &&
    tail < after.length - head &&
    before[before.length - 1 - tail] === after[after.length - 1 - tail]
  ) {
    matched[before.length - 1 - tail] = after.length - 1 - tail;
    tail++;
  }
  const a = before.slice(head, before.length - tail);
  const b = after.slice(head, after.length - tail);
  // lcs[i][j]: the longest common subsequence of a[i..] and b[j..].
  const lcs = Array.from({ length: a.length + 1 }, () => new Array<number>(b.length + 1).fill(0));
  for (let i = a.length - 1; i >= 0; i--)
    for (let j = b.length - 1; j >= 0; j--)
      lcs[i][j] = a[i] === b[j] ? lcs[i + 1][j + 1] + 1 : Math.max(lcs[i + 1][j], lcs[i][j + 1]);
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      matched[head + i] = head + j;
      i++;
      j++;
    } else if (lcs[i + 1][j] >= lcs[i][j + 1]) i++;
    else j++;
  }
  return matched;
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
  return mapRangeThroughAlignment(alignCharacters(before, after), start, end);
}
