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

/** The alignment of `before` with `n` bytes inserted (`n` > 0) at, or removed (`n` < 0) from,
 * offset `at`. */
function alignedAround(before: string, at: number, n: number): (number | undefined)[] {
  return Array.from(before, (_, index) => {
    if (index < at) return index;
    if (n < 0 && index < at - n) return undefined;
    return index + n;
  });
}

/**
 * Where `after` is `before` with ONE run of bytes inserted or removed, and that run could sit at
 * more than one offset (it slides over identical bytes: `\v` from `\v` by deleting either `\`),
 * the offset `holds` (ranges of `before`) prefer: the one that keeps the most held bytes (a byte
 * counts once per hold over it), then the one that inserts no byte strictly inside a hold, then
 * the latest (where a common-prefix match puts it). `undefined` for any other kind of change.
 */
function singleEditOffset(
  before: string,
  after: string,
  holds: readonly HeldRange[],
): number | undefined {
  const n = after.length - before.length;
  if (n === 0) return undefined;
  const shorter = Math.min(before.length, after.length);
  let head = 0;
  while (head < shorter && before[head] === after[head]) head++;
  let tail = 0;
  while (tail < shorter && before[before.length - 1 - tail] === after[after.length - 1 - tail])
    tail++;
  // The run can start at `at` when the bytes before it are a common prefix and the ones after it
  // a common suffix.
  const first = Math.max(0, Math.max(before.length, after.length) - tail - Math.abs(n));
  if (first > head) return undefined;
  if (first === head || holds.length === 0) return head;
  const score = (at: number): [number, number] => {
    let kept = 0;
    let inside = 0;
    for (const { start, end } of holds) {
      if (n < 0)
        kept += Math.max(0, end - start) - Math.max(0, Math.min(end, at - n) - Math.max(start, at));
      else if (start < at && at < end) inside++;
    }
    return [kept, -inside];
  };
  let best = head;
  let bestScore = score(head);
  for (let at = head - 1; at >= first; at--) {
    const candidate = score(at);
    if (
      candidate[0] > bestScore[0] ||
      (candidate[0] === bestScore[0] && candidate[1] > bestScore[1])
    ) {
      best = at;
      bestScore = candidate;
    }
  }
  return best;
}

/**
 * Each byte of `before` matched to its counterpart in `after` (its index there), or `undefined` for a
 * byte `after` no longer has. When `after` is `before` with one run of bytes inserted or removed,
 * that is the alignment, with the run placed where `holds` (ranges of `before`) prefer when it
 * could sit at more than one offset over identical bytes: keeping the most held bytes (a rewrite
 * that drops one of two identical bytes drops the unheld one), then inserting no byte strictly
 * inside a hold (a byte typed beside an identical one at a hold's edge is outside it, as text typed
 * at a mark's edge is), then where a common-prefix match puts it. A hold only chooses among those
 * slides: bytes it lost are never matched to identical bytes elsewhere. Any other change is a
 * longest-common-subsequence alignment after the common prefix and suffix are matched one to one,
 * ties to the earliest match. Carrier texts are short (a glyph, a number, an attribute list), and
 * the trimmed middle is what the quadratic table is built for.
 *
 * A byte typed beside an identical byte where no hold tells the two apart is still ambiguous: that
 * is what {@link remapAnnotations}' caret is for.
 */
export function alignCharacters(
  before: string,
  after: string,
  holds: readonly HeldRange[] = [],
): (number | undefined)[] {
  const single = singleEditOffset(before, after, holds);
  if (single !== undefined) return alignedAround(before, single, after.length - before.length);
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
    return alignedAround(before, start, grown);
  }
  if (grown < 0) {
    if (caret < 0 || caret - grown > before.length) return undefined;
    if (after !== before.slice(0, caret) + before.slice(caret - grown)) return undefined;
    return alignedAround(before, caret, grown);
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
