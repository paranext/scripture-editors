/**
 * Lining up a settle scope's live bytes with its settled bytes, byte for byte.
 *
 * Both sides are the same USFM except where the settle re-spells an attribute section — a lone
 * default attribute written by name collapses to its bare value, a reserved key or an overridden
 * duplicate name is dropped, a duplicate name's survivor takes the first duplicate's slot (so it
 * can move ahead of attributes typed before it), a figure's `file` is written `src` — where it adds
 * or drops a marker's nesting `+` (`\+wj` un-nested to `\wj`), and where the settled side spells
 * a preserved node as one placeholder byte that the live side spells out as the literal it came
 * from. Everything here is built from those two facts rather than guessed from a
 * text diff, so a repeated word can never be matched to the wrong occurrence.
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
  /** A nesting `+` one side's marker has and the other's does not. */
  readonly nesting?: boolean;
}

/**
 * Segments that tile each side exactly once, with no gaps or overlaps. They run in settled order,
 * and their live sides ascend too everywhere except inside an attribute section the settle
 * reorders. A differing segment's other-side start is where a count in front of its bytes snaps to
 * ({@link mapCountSnapped}).
 */
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
/** The byte that marks a char marker as nested inside another span (`\+wj`). */
const NESTING = "+";
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
    nesting = false,
  ) {
    if (liveStart === liveEnd && settledStart === settledEnd) return;
    const last = this.segments[this.segments.length - 1];
    if (same && last?.same && last.liveEnd === liveStart && last.settledEnd === settledStart)
      this.segments[this.segments.length - 1] = { ...last, liveEnd, settledEnd };
    else
      this.segments.push({
        liveStart,
        liveEnd,
        settledStart,
        settledEnd,
        same,
        ...(nesting ? { nesting } : {}),
      });
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
  /** Where the attribute's bytes sit in the section: all of `name="value"`, or a bare value. */
  readonly start: number;
  readonly end: number;
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
      const start = 1 + (pair.index ?? 0);
      const valueStart = start + pair[1].length + 2;
      return {
        name: pair[1],
        start,
        end: start + pair[0].length,
        valueStart,
        valueEnd: valueStart + pair[2].length,
        value: pair[2],
      };
    });
  }
  return body
    ? [
        {
          name: undefined,
          start: 1,
          end: section.length,
          valueStart: 1,
          valueEnd: section.length,
          value: body,
        },
      ]
    : undefined;
}

/**
 * Which live attribute each settled attribute's value came from, as `[live, settled]` index pairs
 * in settled order. A live attribute can only be the source when the settle keeps it: its name is
 * not dropped, and no later attribute of the same name overrides it. The pairs need not increase on
 * the live side: a duplicate name keeps its FIRST slot with its LAST value, so the survivor's
 * settled place can come before attributes that were typed ahead of it.
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
  const used = new Set<number>();
  const matches: [number, number][] = [];
  settled.forEach((wanted, settledIndex) => {
    const source = live.findIndex(
      (candidate, index) => isKept[index] && !used.has(index) && isSource(candidate, wanted),
    );
    if (source < 0) return;
    used.add(source);
    matches.push([source, settledIndex]);
  });
  return matches;
}

/**
 * Where bytes on side `from` that have no counterpart snap to on the other side: just past the
 * other side's counterpart of the nearest byte in front of them that both sides spell the same.
 * In an attribute section that is never missing: the `|` both sides start with is one.
 */
function snapTarget(
  segments: readonly AlignedSegment[],
  start: number,
  from: "live" | "settled",
): number {
  let target = 0;
  let nearest = -1;
  for (const segment of segments) {
    if (!segment.same) continue;
    const { end, otherEnd } = sides(segment, from);
    if (end <= start && end > nearest) {
      nearest = end;
      target = otherEnd;
    }
  }
  return target;
}

/**
 * Line up one attribute section (`|…`) of each side. Each settled attribute's bytes line up with
 * the live attribute its value came from — `name="value"` one for one, a re-spelled name or a
 * collapsed default mapping only its ends — wherever the two sit in their sections, so an
 * attribute the settle moves keeps every byte exact. A live attribute the settle drops, and a
 * settled one no live attribute accounts for, map to nothing and snap LEFT ({@link snapTarget}).
 * The segments are emitted in settled order; inside a section the settle reorders, their live
 * sides do not ascend.
 */
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
  const liveAttributes = parseSection(live);
  const settledAttributes = parseSection(settled);
  if (!liveAttributes || !settledAttributes) {
    out.push(liveAt, liveAt + 1, settledAt, settledAt + 1, true); // the `|`
    out.pushStretch(live.slice(1), liveAt + 1, settled.slice(1), settledAt + 1);
    return;
  }
  const section = new SegmentList();
  section.push(0, 1, 0, 1, true); // the `|`
  const matches = matchAttributes(liveAttributes, settledAttributes);
  for (const [l, s] of matches) {
    const from = liveAttributes[l];
    const to = settledAttributes[s];
    section.pushStretch(
      live.slice(from.start, from.valueStart),
      from.start,
      settled.slice(to.start, to.valueStart),
      to.start,
    );
    section.push(from.valueStart, from.valueEnd, to.valueStart, to.valueEnd, true);
    section.pushStretch(
      live.slice(from.valueEnd, from.end),
      from.valueEnd,
      settled.slice(to.valueEnd, to.end),
      to.valueEnd,
    );
  }
  const paired = [...section.segments];
  const pairedLive = new Set(matches.map(([l]) => l));
  liveAttributes.forEach((attribute, index) => {
    if (pairedLive.has(index)) return;
    const at = snapTarget(paired, attribute.start, "live");
    section.push(attribute.start, attribute.end, at, at, false);
  });
  const pairedSettled = new Set(matches.map(([, s]) => s));
  settledAttributes.forEach((attribute, index) => {
    if (pairedSettled.has(index)) return;
    const at = snapTarget(paired, attribute.start, "settled");
    section.push(at, at, attribute.start, attribute.end, false);
  });
  section.segments
    .sort(
      (a, b) =>
        a.settledStart - b.settledStart || a.settledEnd - b.settledEnd || a.liveStart - b.liveStart,
    )
    .forEach((segment) =>
      out.push(
        liveAt + segment.liveStart,
        liveAt + segment.liveEnd,
        settledAt + segment.settledStart,
        settledAt + segment.settledEnd,
        segment.same,
      ),
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
    // A marker the settled side spells twice in a row where the live side spells it once: the
    // tokenizer supplied the first copy (` \p` settles as a `\p` paragraph holding the space,
    // ahead of the paragraph the typed glyph still opens), so the live marker is the second.
    const supplied =
      settled[j] === MARKER_START
        ? suppliedMarkerAt(live, i, settled, j) ||
          suppliedMarkerBeforeLiteral(live, i, settled, j, options.spellings)
        : 0;
    if (supplied > 0) {
      out.push(i, i, j, j + supplied, false);
      j += supplied;
      continue;
    }
    if (live[i] === settled[j]) {
      out.push(i, i + 1, j, j + 1, true);
      i += 1;
      j += 1;
      continue;
    }
    // A nesting `+` one side's marker has and the other's does not: the settle un-nests a span
    // whose enclosing span is gone (`\+wj` → `\wj`) and nests one a span now encloses. The `+`
    // has no counterpart; the marker's name and everything after it still line up.
    if (
      live[i - 1] === MARKER_START &&
      settled[j - 1] === MARKER_START &&
      (live[i] === NESTING) !== (settled[j] === NESTING)
    ) {
      if (live[i] === NESTING) {
        out.push(i, i + 1, j, j, false, true);
        i += 1;
      } else {
        out.push(i, i, j, j + 1, false, true);
        j += 1;
      }
      continue;
    }
    // A divergence nothing above explains. In prefix mode the literal ends with the next copy of
    // the spelling's closing marker, and the bytes up to it line up by the ends they share; with
    // none to find (or the divergence inside that marker), the rest of the spelling has no live
    // bytes and the literal ends here. Otherwise the rest lines up from the back.
    if (options.prefix) {
      const closerAt = settled.lastIndexOf(MARKER_START);
      const closer = closerAt >= j ? settled.slice(closerAt) : undefined;
      const found = closer === undefined ? -1 : live.indexOf(closer, i);
      if (closer === undefined || found < 0) {
        out.push(i, i, j, settled.length, false);
        return i;
      }
      out.pushStretch(live.slice(i, found), i, settled.slice(j, closerAt), j);
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

/** A marker token — `\`, an optional nesting `+`, a name — starting at a position. */
const MARKER_TOKEN = /\\\+?[\w-]+/y;

/**
 * The length of the marker token at `settled[j]` when the settled side spells it twice in a row and
 * the live side, at `live[i]`, only once — the first settled copy is one the tokenizer supplied —
 * or 0.
 */
function suppliedMarkerAt(live: string, i: number, settled: string, j: number): number {
  MARKER_TOKEN.lastIndex = j;
  const token = MARKER_TOKEN.exec(settled)?.[0];
  // Only a token the next marker ends — nothing between it and its copy — is one spelled twice:
  // these are non-whitespace bytes, so a name runs straight on into content that follows it.
  if (!token || settled[j + token.length] !== MARKER_START) return 0;
  return settled.startsWith(token, j + token.length) &&
    live.startsWith(token, i) &&
    !live.startsWith(token, i + token.length)
    ? token.length
    : 0;
}

/**
 * The length of the marker token at `settled[j]` when the tokenizer supplied it in front of a node
 * the live side spells as literal bytes — `\p` opening a paragraph for a `\x …` typed where the
 * paragraph's own marker was, which settles as a note — or 0. The settled side then spells the
 * token and the node's placeholder, and the live side only the literal, starting with the node's
 * own first marker rather than the token.
 */
function suppliedMarkerBeforeLiteral(
  live: string,
  i: number,
  settled: string,
  j: number,
  spellings: ReadonlyMap<number, string> | undefined,
): number {
  MARKER_TOKEN.lastIndex = j;
  const token = MARKER_TOKEN.exec(settled)?.[0];
  if (!token || settled[j + token.length] !== PLACEHOLDER) return 0;
  const spelling = spellings?.get(j + token.length);
  if (spelling === undefined || live.startsWith(token, i)) return 0;
  MARKER_TOKEN.lastIndex = 0;
  const first = MARKER_TOKEN.exec(spelling)?.[0];
  return first !== undefined && live.startsWith(first, i) ? token.length : 0;
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

/** Both sides' lengths, `from` side first: where each side's last byte ends, whichever segment
 * holds it. */
function lengths(alignment: ByteAlignment, from: "live" | "settled"): [number, number] {
  let fromLength = 0;
  let otherLength = 0;
  for (const segment of alignment.segments) {
    const { end, otherEnd } = sides(segment, from);
    fromLength = Math.max(fromLength, end);
    otherLength = Math.max(otherLength, otherEnd);
  }
  return [fromLength, otherLength];
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

/**
 * {@link mapCount}, with a count in front of differing bytes snapped LEFT to where the other side's
 * differing bytes start, and a count past the end to the other side's length. Where the bytes pair
 * with differently spelled ones (a re-spelled name), that is the start of those; where they have no
 * counterpart at all (a dropped attribute), it is the count just past the other side's counterpart
 * of the nearest byte in front of them, on their own side, that both sides spell the same. In an
 * attribute section the settle reorders, that counterpart can sit anywhere in the other side's
 * section: the snap follows the order of the side the count is on.
 */
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

/**
 * {@link mapCountSnapped} from the settled side to the live side, landing in FRONT of a nesting
 * `+` the settled side does not have rather than past it: the settled count in front of a marker
 * name stands for both live counts around the `+`, and the closest one to the left is in front of
 * it (`\wj*` offset 1 is `\+wj*` offset 1, behind the `\`).
 */
export function mapSettledCountBeforeNesting(alignment: ByteAlignment, count: number): number {
  const live = mapCountSnapped(alignment, count, "settled");
  const nesting = alignment.segments.find(
    (segment) =>
      segment.nesting &&
      segment.settledStart === count &&
      segment.settledEnd === count &&
      segment.liveEnd === live,
  );
  return nesting ? nesting.liveStart : live;
}
