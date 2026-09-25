/**
 * Lining up a settle scope's live bytes with its settled bytes, byte for byte.
 *
 * Both sides are the same USFM except where the settle re-spells an attribute section — a lone
 * default attribute written by name collapses to its bare value, a reserved key or an overridden
 * duplicate name is dropped, a figure's `file` is written `src` — and where the settled side spells
 * a preserved node as one placeholder byte that the live side spells out as the literal it came
 * from. Everything here is built from those two facts rather than guessed from a text diff, so a
 * repeated word can never be matched to the wrong occurrence.
 *
 * Inputs are NON-WHITESPACE bytes: a byte anchor counts only those, and the settle is free to move
 * whitespace.
 */

/** The byte a fragment spells a preserved node as — the same character as `ATOMIC_SENTINEL`
 * (settleShared.utils.ts), kept here so this module stays free of editor imports. */
export const PLACEHOLDER = "￼";

export interface AlignedSegment {
  readonly liveStart: number;
  readonly liveEnd: number;
  readonly settledStart: number;
  readonly settledEnd: number;
  /** The two sides spell the same bytes here, one for one. */
  readonly same: boolean;
}

/** Segments that tile both sides in order: each starts where the one before it ended. */
export interface ByteAlignment {
  readonly segments: readonly AlignedSegment[];
}

/** Where a settled placeholder's literal sits on the live side, and how its bytes line up with the
 * placeholder's spelling: `inner`'s live offsets count from the literal's first byte, and its
 * settled offsets count into the spelling. */
export interface SpelledLiteral {
  readonly liveStart: number;
  readonly liveEnd: number;
  readonly inner: ByteAlignment;
}

export interface ScopeAlignmentResult {
  readonly alignment: ByteAlignment;
  /** Keyed by the placeholder's index in the settled bytes. A placeholder past a divergence the
   * alignment cannot explain has no entry. */
  readonly literals: ReadonlyMap<number, SpelledLiteral>;
}

const ATTRIBUTE_START = "|";
const MARKER_START = "\\";
/** `name="value"` with whitespace already removed. */
const PAIR = /([-\w]+)="(.*?)"/g;
/** Names the settle never keeps: the tokenizer's reserved USJ keys (`RESERVED_NODE_KEYS`,
 * usfmFragmentToUsj.ts) and the ones the display never shows (`ATTRIBUTE_EXCLUDED_KEYS`,
 * attributeDisplay.utils.ts). */
const DROPPED_NAMES: ReadonlySet<string> = new Set(["type", "marker", "content", "closed"]);
/** Names the display writes differently from how they were typed: a figure's `file` is `src`. */
const RESPELLED_NAMES: ReadonlyMap<string, string> = new Map([["file", "src"]]);

class SegmentList {
  readonly segments: AlignedSegment[] = [];

  /** Differing segments are never merged: the boundary between two of them (two adjacent literals)
   * is a position both sides share. */
  push(
    liveStart: number,
    liveEnd: number,
    settledStart: number,
    settledEnd: number,
    same: boolean,
  ) {
    if (liveStart === liveEnd && settledStart === settledEnd) return;
    const last = this.segments[this.segments.length - 1];
    if (same && last?.same && last.liveEnd === liveStart && last.settledEnd === settledStart)
      this.segments[this.segments.length - 1] = { ...last, liveEnd, settledEnd };
    else this.segments.push({ liveStart, liveEnd, settledStart, settledEnd, same });
  }

  /** Two stretches that differ somewhere: the bytes both begin with, and then the bytes both end
   * with, line up one for one; what is left maps only its ends. */
  pushStretch(live: string, liveAt: number, settled: string, settledAt: number) {
    const limit = Math.min(live.length, settled.length);
    let prefix = 0;
    while (prefix < limit && live[prefix] === settled[prefix]) prefix += 1;
    let suffix = 0;
    while (
      suffix < limit - prefix &&
      live[live.length - 1 - suffix] === settled[settled.length - 1 - suffix]
    )
      suffix += 1;
    const liveEnd = liveAt + live.length;
    const settledEnd = settledAt + settled.length;
    this.push(liveAt, liveAt + prefix, settledAt, settledAt + prefix, true);
    this.push(liveAt + prefix, liveEnd - suffix, settledAt + prefix, settledEnd - suffix, false);
    this.push(liveEnd - suffix, liveEnd, settledEnd - suffix, settledEnd, true);
  }
}

/** Where an attribute section that starts at `start` (a `|`) ends: the next marker or placeholder,
 * or the end. A placeholder ends it too, because the live side may spell that node as a literal
 * starting with `\`, and the two sections must end at the same node. */
function sectionEnd(text: string, start: number): number {
  const ends = [text.indexOf(MARKER_START, start + 1), text.indexOf(PLACEHOLDER, start + 1)].filter(
    (index) => index >= 0,
  );
  return ends.length > 0 ? Math.min(...ends) : text.length;
}

interface ParsedAttribute {
  readonly name: string | undefined;
  readonly valueStart: number;
  readonly valueEnd: number;
  readonly value: string;
}

/** The attributes of a section (`|…`), with each value's offsets in the section, or `undefined`
 * when it is not an attribute list the tokenizer accepts (the settle then keeps it literally). */
function parseSection(section: string): ParsedAttribute[] | undefined {
  const body = section.slice(1);
  const pairs = [...body.matchAll(PAIR)];
  if (pairs.length > 0) {
    if (pairs.map((pair) => pair[0]).join("") !== body) return undefined;
    if (pairs.some((pair) => pair[2] === "")) return undefined;
    return pairs.map((pair) => {
      const valueStart = 1 + (pair.index ?? 0) + pair[1].length + 2;
      return { name: pair[1], valueStart, valueEnd: valueStart + pair[2].length, value: pair[2] };
    });
  }
  return body
    ? [{ name: undefined, valueStart: 1, valueEnd: section.length, value: body }]
    : undefined;
}

/**
 * Which live attribute each settled attribute's value came from, as `[live, settled]` index pairs
 * increasing on both sides. A live attribute can only be the source when the settle keeps it: its
 * name is not dropped, and no later attribute of the same name overrides it. A settled attribute
 * whose source would break the order (a duplicate name keeps its FIRST slot with its LAST value) is
 * left unpaired, so its bytes map only as the ends of what differs.
 */
function matchAttributes(live: ParsedAttribute[], settled: ParsedAttribute[]): [number, number][] {
  const isKept = live.map(
    (attribute, index) =>
      attribute.name === undefined ||
      (!DROPPED_NAMES.has(attribute.name) &&
        !live.slice(index + 1).some((later) => later.name === attribute.name)),
  );
  const isSource = (candidate: ParsedAttribute, wanted: ParsedAttribute): boolean =>
    candidate.value === wanted.value &&
    (wanted.name === undefined ||
      candidate.name === wanted.name ||
      (candidate.name !== undefined && RESPELLED_NAMES.get(candidate.name) === wanted.name));
  const matches: [number, number][] = [];
  let floor = -1;
  settled.forEach((wanted, settledIndex) => {
    const source = live.findIndex(
      (candidate, index) => isKept[index] && isSource(candidate, wanted),
    );
    if (source <= floor) return;
    matches.push([source, settledIndex]);
    floor = source;
  });
  return matches;
}

function alignAttributeSection(
  live: string,
  settled: string,
  out: SegmentList,
  liveAt: number,
  settledAt: number,
): void {
  if (live === settled) {
    out.push(liveAt, liveAt + live.length, settledAt, settledAt + settled.length, true);
    return;
  }
  out.push(liveAt, liveAt + 1, settledAt, settledAt + 1, true); // the `|`
  const liveAttributes = parseSection(live);
  const settledAttributes = parseSection(settled);
  if (!liveAttributes || !settledAttributes) {
    out.pushStretch(live.slice(1), liveAt + 1, settled.slice(1), settledAt + 1);
    return;
  }
  let liveCursor = 1;
  let settledCursor = 1;
  for (const [l, s] of matchAttributes(liveAttributes, settledAttributes)) {
    const liveValue = liveAttributes[l];
    const settledValue = settledAttributes[s];
    out.pushStretch(
      live.slice(liveCursor, liveValue.valueStart),
      liveAt + liveCursor,
      settled.slice(settledCursor, settledValue.valueStart),
      settledAt + settledCursor,
    );
    out.push(
      liveAt + liveValue.valueStart,
      liveAt + liveValue.valueEnd,
      settledAt + settledValue.valueStart,
      settledAt + settledValue.valueEnd,
      true,
    );
    liveCursor = liveValue.valueEnd;
    settledCursor = settledValue.valueEnd;
  }
  out.pushStretch(
    live.slice(liveCursor),
    liveAt + liveCursor,
    settled.slice(settledCursor),
    settledAt + settledCursor,
  );
}

/**
 * Walk `live` from `liveAt` against `settled` from its start. In `prefix` mode the walk stops as
 * soon as `settled` is used up and returns how far into `live` it got — that is how a literal's
 * extent is found from its spelling; its segments' `settled*` offsets count into the spelling and
 * its `live*` offsets stay absolute. Otherwise both sides are walked to their ends.
 */
function walk(
  live: string,
  liveAt: number,
  settled: string,
  out: SegmentList,
  options: {
    prefix: boolean;
    spellings?: ReadonlyMap<number, string>;
    literals?: Map<number, SpelledLiteral>;
  },
): number {
  let i = liveAt;
  let j = 0;
  while (i < live.length && j < settled.length) {
    const spelling =
      settled[j] === PLACEHOLDER && live[i] !== PLACEHOLDER ? options.spellings?.get(j) : undefined;
    if (spelling !== undefined) {
      const inner = new SegmentList();
      const end = walk(live, i, spelling, inner, { prefix: true });
      options.literals?.set(j, {
        liveStart: i,
        liveEnd: end,
        inner: { segments: rebase(inner.segments, i) },
      });
      out.push(i, end, j, j + 1, false);
      i = end;
      j += 1;
      continue;
    }
    if (live[i] === ATTRIBUTE_START && settled[j] === ATTRIBUTE_START) {
      const liveEnd = sectionEnd(live, i);
      const settledEnd = sectionEnd(settled, j);
      alignAttributeSection(live.slice(i, liveEnd), settled.slice(j, settledEnd), out, i, j);
      i = liveEnd;
      j = settledEnd;
      continue;
    }
    if (live[i] === settled[j]) {
      out.push(i, i + 1, j, j + 1, true);
      i += 1;
      j += 1;
      continue;
    }
    // A divergence nothing above explains. In prefix mode the literal ends with the next copy of
    // the spelling's closing marker; with none to find (or the divergence inside that marker), the
    // rest of the spelling has no live bytes and the literal ends here. Otherwise the rest lines
    // up from the back.
    if (options.prefix) {
      const closerAt = settled.lastIndexOf(MARKER_START);
      const closer = closerAt >= j ? settled.slice(closerAt) : undefined;
      const found = closer === undefined ? -1 : live.indexOf(closer, i);
      if (closer === undefined || found < 0) {
        out.push(i, i, j, settled.length, false);
        return i;
      }
      out.push(i, found, j, closerAt, false);
      out.push(found, found + closer.length, closerAt, settled.length, true);
      return found + closer.length;
    }
    out.pushStretch(live.slice(i), i, settled.slice(j), j);
    return live.length;
  }
  const end = options.prefix ? i : live.length;
  out.push(i, end, j, settled.length, false);
  return end;
}

/** Shift a literal's inner segments so their live side counts from the literal's own start. */
function rebase(segments: readonly AlignedSegment[], liveOffset: number): AlignedSegment[] {
  return segments.map((segment) => ({
    ...segment,
    liveStart: segment.liveStart - liveOffset,
    liveEnd: segment.liveEnd - liveOffset,
  }));
}

export function alignUsfmBytes(live: string, settled: string): ByteAlignment {
  const out = new SegmentList();
  walk(live, 0, settled, out, { prefix: false });
  return { segments: out.segments };
}

export function alignScopeBytes(
  live: string,
  settled: string,
  spellings: ReadonlyMap<number, string>,
): ScopeAlignmentResult {
  const out = new SegmentList();
  const literals = new Map<number, SpelledLiteral>();
  walk(live, 0, settled, out, { prefix: false, spellings, literals });
  return { alignment: { segments: out.segments }, literals };
}

function sides(segment: AlignedSegment, from: "live" | "settled") {
  return from === "live"
    ? {
        start: segment.liveStart,
        end: segment.liveEnd,
        otherStart: segment.settledStart,
        otherEnd: segment.settledEnd,
      }
    : {
        start: segment.settledStart,
        end: segment.settledEnd,
        otherStart: segment.liveStart,
        otherEnd: segment.liveEnd,
      };
}

/** The segment whose `from` side contains the byte `count` sits in front of. A segment with no
 * bytes on that side contains none, so it is never the answer. */
function containing(
  alignment: ByteAlignment,
  count: number,
  from: "live" | "settled",
): AlignedSegment | undefined {
  return alignment.segments.find((segment) => {
    const { start, end } = sides(segment, from);
    return start <= count && count < end;
  });
}

/** Both sides' lengths, `from` side first. */
function lengths(alignment: ByteAlignment, from: "live" | "settled"): [number, number] {
  const last = alignment.segments[alignment.segments.length - 1];
  if (!last) return [0, 0];
  const { end, otherEnd } = sides(last, from);
  return [end, otherEnd];
}

/**
 * The count on the other side that `count` on side `from` stands for, or `undefined` when it has
 * none. A count names the byte in front of which it sits, and maps through the segment whose
 * `from` side contains that byte: one for one where the two sides spell the same bytes, and to
 * nothing where they differ. So where one side has bytes the other has none of, the count in front
 * of them has no counterpart, while the count just past them maps to the other side's count in
 * front of what follows. The count past the last byte maps to the other side's length.
 */
export function mapCount(
  alignment: ByteAlignment,
  count: number,
  from: "live" | "settled",
): number | undefined {
  const segment = containing(alignment, count, from);
  if (segment) {
    const { start, otherStart } = sides(segment, from);
    return segment.same ? otherStart + (count - start) : undefined;
  }
  const [fromLength, otherLength] = lengths(alignment, from);
  return count === fromLength ? otherLength : undefined;
}

/** {@link mapCount}, with a count in front of differing bytes snapped LEFT to where the other
 * side's differing bytes start, and a count past the end to the other side's length. */
export function mapCountSnapped(
  alignment: ByteAlignment,
  count: number,
  from: "live" | "settled",
): number {
  const segment = containing(alignment, count, from);
  if (segment) {
    const { start, otherStart } = sides(segment, from);
    return segment.same ? otherStart + (count - start) : otherStart;
  }
  return lengths(alignment, from)[1];
}
