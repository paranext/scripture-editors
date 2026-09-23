/**
 * Lining up a settle scope's live bytes with its settled bytes when the settle turned typed literal
 * bytes into a preserved node — a `\f + \ft note\f*` typed as plain text that settles into a note.
 *
 * Both sides are byte fragments (`FragmentAccumulator`, tier2Rebuild.utils.ts) over the same
 * displayed bytes, which is what lets a whitespace-tolerant byte anchor carry a position from one to
 * the other. A preserved node is the exception: a fragment spells it as ONE placeholder byte. So
 * where the live side spells a literal byte for byte and the settled side spells the node it became
 * as one placeholder, every byte past it sits a literal's length further along live than settled,
 * and a byte inside it is a byte of the settled node's own spelling. This module finds those runs
 * ({@link pairRuns}) and restates anchors across them, for everything that carries a live position
 * into a settled tree: the settled-position translation (positions/) and the rebuild's annotation
 * carry (tier2Rebuild.utils.ts).
 */

import type { CaretByteAnchor, FragmentAccumulator, FragmentSpan } from "./tier2Rebuild.utils";
import { $getNodeByKey, $getState, $isElementNode, $isTextNode, LexicalNode } from "lexical";
import { $isMarkerNode, $isNoteNode, textTypeState } from "shared";
import { $isImmutableNoteCallerNode } from "shared-react";

/** Whitespace for caret byte-anchoring: everything the fragment/display layer may add, move, or
 * flatten across a rebuild (the NBSP separators arrive here already flattened to spaces by
 * `toFragmentText`). The U+FFFC sentinel placeholder is deliberately NOT whitespace — it stands
 * for a preserved node and anchors like a document byte. */
export const FRAGMENT_WS = /\s/;

/**
 * Whether a span is an engine-owned ATTRIBUTE display run (`|who="stuff"`, `|sid="q1"`) rather
 * than ordinary document content.
 *
 * These bytes are the one part of the fragment the settle re-SPELLS without the user touching
 * them: a lone default attribute renders bare (`|stuff`) while any other set renders explicit
 * (`|who="stuff" sid="q1"`), so re-tokenizing an attribute run legitimately changes its LENGTH.
 * A caret anchored by a raw byte count over the whole fragment therefore drifts by that length
 * difference whenever it sits AFTER a run that re-spelled — which is the caret-jump this
 * predicate exists to prevent (Invariant II: display bytes are excluded from document positions).
 *
 * Read-only: resolves the span's node key, so call inside `editor.update()` or an editor-state read.
 */
export function $isAttributeRunSpan(span: FragmentSpan): boolean {
  if (span.isSentinel) return false;
  const node = $getNodeByKey(span.key);
  return (
    $isTextNode(node) && !$isMarkerNode(node) && $getState(node, textTypeState) === "attribute"
  );
}

/**
 * How many non-whitespace bytes of a fragment precede a position, in both coordinate systems a
 * byte anchor can be read in (`CaretByteAnchor`, tier2Rebuild.utils.ts): every byte (`full`), and
 * attribute display runs stepped over (`document`).
 */
export interface NonWsCounts {
  readonly full: number;
  readonly document: number;
}

/**
 * A preserved run the settle introduced from literal bytes: the settled fragment spells it as one
 * placeholder byte, and the live fragment spells the literal it came from. Outside it the two
 * fragments spell the same bytes, the live one `liveLength - 1` bytes longer past it; inside it
 * the literal's bytes are the settled run's own bytes, wherever the settle spells them back.
 */
export interface SettledOnlyRun {
  /** The run's index in the settled fragment's run list. */
  readonly sentinelIndex: number;
  /** Non-whitespace bytes of the live fragment before the literal's first byte. */
  readonly liveBefore: NonWsCounts;
  /** Non-whitespace bytes the literal itself spans in the live fragment. */
  readonly liveLength: NonWsCounts;
  /** Whitespace bytes of the live fragment directly in front of the literal. */
  readonly liveWsBefore: number;
  /** Non-whitespace bytes of the settled fragment before the run's placeholder. */
  readonly settledBefore: NonWsCounts;
  /** The run's own bytes as the settled tree spells them (spans keyed by that tree's keys). */
  readonly spelling: FragmentAccumulator;
  /** How many non-whitespace bytes `spelling` has. */
  readonly spelledLength: number;
  /**
   * How many of the literal's leading non-whitespace bytes `spelling` spells identically, and how
   * many trailing ones besides — the bytes a position inside the literal crosses by. Together they
   * cover the whole literal when the settled node spells the typed bytes back one for one; a
   * settle that re-spells part of it (a `\cat` folded into the note's category, an attribute list
   * shortened) leaves the bytes between them with no settled counterpart.
   */
  readonly sharedPrefix: number;
  readonly sharedSuffix: number;
}

/** One preserved-node run member, named by its run's index in a fragment's run list and its own
 * index within that run. */
export interface SettledRunMember {
  readonly sentinelIndex: number;
  readonly memberIndex: number;
}

/** How one scope's two run lists correspond. */
export interface RunPairing {
  /** Where each live run member sits in the settled run list, indexed `[live run][live member]`;
   * `undefined` for a member the settled side has no counterpart for. */
  sentinelMap: (SettledRunMember | undefined)[][];
  /** The settled runs no live run became, in settled fragment order. */
  settledOnlyRuns: SettledOnlyRun[];
}

/** One byte of a fragment's spans, as plain data — readable after the nodes it came from are
 * gone, which the rebuild's annotation carry needs across its splice. */
interface SpanByte {
  byte: string;
  position: number;
  isWs: boolean;
  isAttributeRun: boolean;
}

/** A fragment's span bytes in order, and where each preserved run's placeholder starts. */
interface FragmentBytes {
  bytes: SpanByte[];
  placeholders: number[];
}

/** `fragment`'s bytes as plain data. Read-only: call inside a read of the tree the fragment was
 * built over. */
function $fragmentBytes(fragment: FragmentAccumulator): FragmentBytes {
  const bytes: SpanByte[] = [];
  for (const span of fragment.spans) {
    const isAttributeRun = $isAttributeRunSpan(span);
    for (let position = span.start; position < span.end; position += 1) {
      const byte = fragment.text[position];
      bytes.push({ byte, position, isWs: FRAGMENT_WS.test(byte), isAttributeRun });
    }
  }
  // `pushSentinel` records a run and its placeholder span together, so the n-th sentinel span is
  // the n-th run's placeholder.
  const placeholders = fragment.spans.filter((span) => span.isSentinel).map((span) => span.start);
  return { bytes, placeholders };
}

/** Non-whitespace bytes before `position`, counted the way a byte anchor counts them. */
function nonWsBefore({ bytes }: FragmentBytes, position: number): NonWsCounts {
  let full = 0;
  let document = 0;
  for (const byte of bytes) {
    if (byte.position >= position || byte.isWs) continue;
    full += 1;
    if (!byte.isAttributeRun) document += 1;
  }
  return { full, document };
}

/** How many whitespace bytes sit directly in front of `position`, back to the last
 * non-whitespace byte — the `wsRun` a byte anchor at `position` carries. */
function wsRunBefore({ bytes }: FragmentBytes, position: number): number {
  let run = 0;
  for (const byte of bytes) if (byte.position < position) run = byte.isWs ? run + 1 : 0;
  return run;
}

/** Every non-whitespace byte, in order — the bytes a byte anchor's `nonWsBefore` counts, in
 * every-byte coordinates. */
function nonWsBytes({ bytes }: FragmentBytes): SpanByte[] {
  return bytes.filter((byte) => !byte.isWs);
}

/**
 * How many leading bytes two strings share, and how many trailing ones. Where the two overlap — a
 * byte the front can claim and the back can too, which happens when the bytes one side re-spelled
 * begin with the byte that follows them on the other — neither is sure which byte it is, so
 * neither claims it.
 */
function sharedEnds(first: string, second: string): { prefix: number; suffix: number } {
  if (first === second) return { prefix: first.length, suffix: 0 };
  const limit = Math.min(first.length, second.length);
  let prefix = 0;
  while (prefix < limit && first[prefix] === second[prefix]) prefix += 1;
  let suffix = 0;
  while (suffix < limit && first[first.length - 1 - suffix] === second[second.length - 1 - suffix])
    suffix += 1;
  return prefix + suffix > limit
    ? { prefix: limit - suffix, suffix: limit - prefix }
    : { prefix, suffix };
}

/**
 * A preserved run's own bytes as its nodes spell them: every text node in order, marker glyphs
 * included, and a collapsed note's caller — a decorator with no text of its own — as the caller
 * value it stands for, which is what a typed literal spells in that slot. Read-only.
 */
function $runSpelling(members: readonly LexicalNode[]): FragmentAccumulator {
  const out: FragmentAccumulator = { text: "", spans: [], sentinels: [] };
  const push = (node: LexicalNode, text: string): void => {
    out.spans.push({
      key: node.getKey(),
      start: out.text.length,
      end: out.text.length + text.length,
      isSentinel: false,
    });
    out.text += text;
  };
  const visit = (node: LexicalNode): void => {
    if ($isImmutableNoteCallerNode(node)) {
      const note = node.getParent();
      push(node, $isNoteNode(note) ? note.getCaller() : "");
    } else if ($isTextNode(node)) push(node, node.getTextContent());
    else if ($isElementNode(node)) node.getChildren().forEach(visit);
  };
  members.forEach(visit);
  return out;
}

/** What the pairing needs to know about one of the settled fragment's preserved runs. */
interface SettledRunFacts {
  memberCount: number;
  /** Non-whitespace bytes of the settled fragment before the run's placeholder. */
  before: NonWsCounts;
  spelling: FragmentAccumulator;
  /** `spelling`'s non-whitespace bytes, in order. */
  spelled: string;
}

/** The SETTLED half of a pairing: every preserved run of the settled fragment, described, and the
 * fragment's non-whitespace bytes. */
export interface SettledRunSide {
  runs: SettledRunFacts[];
  bytes: string;
}

/** `fragment`'s settled half of a pairing. Read-only: call inside a read of the SETTLED tree. */
export function $settledRunSide(fragment: FragmentAccumulator): SettledRunSide {
  const facts = $fragmentBytes(fragment);
  return {
    runs: fragment.sentinels.map((run, index) => {
      const spelling = $runSpelling(run);
      return {
        memberCount: run.length,
        before: nonWsBefore(facts, facts.placeholders[index] ?? fragment.text.length),
        spelling,
        spelled: nonWsBytes($fragmentBytes(spelling))
          .map(({ byte }) => byte)
          .join(""),
      };
    }),
    bytes: nonWsBytes(facts)
      .map(({ byte }) => byte)
      .join(""),
  };
}

/** The LIVE half of a pairing, as plain data: the live fragment's bytes, and which members of
 * each of its preserved runs reach the settled side. */
export interface LiveRunSide {
  facts: FragmentBytes;
  carried: boolean[][];
}

/**
 * `fragment`'s live half of a pairing. `carried` lists, per run of `fragment.sentinels`, the
 * members the settle carries into its output — a member it drops (an emptied optbreak husk) is
 * left out.
 *
 * Read-only: call inside a read of the LIVE tree, before anything the fragment was built over is
 * spliced away.
 */
export function $liveRunSide(
  fragment: FragmentAccumulator,
  carried: readonly (readonly LexicalNode[])[],
): LiveRunSide {
  return {
    facts: $fragmentBytes(fragment),
    carried: fragment.sentinels.map((run, index) => {
      const keys = new Set(carried[index]?.map((node) => node.getKey()));
      return run.map((node) => keys.has(node.getKey()));
    }),
  };
}

/**
 * Where each live preserved-run member sits in the settled fragment's own run list, plus the
 * settled runs no live run became — or `undefined` when the two sides' runs cannot be put in
 * correspondence at all.
 *
 * A rebuild splices the members it carries back into its output in fragment order, so the settled
 * fragment lists those same nodes in that same order with the dropped ones missing — which pairs
 * the two sides off member for member.
 *
 * A settled list LONGER than that has runs the rebuild made from literal bytes: a typed
 * `\f + \ft note\f*` tokenizes into a note, which the settled fragment spells as a placeholder.
 * Those are found by walking both fragments' runs in order: a carried run's placeholder sits at
 * the same non-whitespace byte count on both sides (less what the literals before it spelled
 * beyond their one placeholder byte), and a settled run with no live placeholder there must be
 * spelled out, byte for byte, by the live bytes at that count. A run neither accounts for is a
 * shape the pairing cannot describe, and the answer is nothing rather than a construct the two
 * sides disagree about.
 *
 * The live fragment must already be without the placeholders of the runs the settle dropped.
 */
export function pairRuns(live: LiveRunSide, settled: SettledRunSide): RunPairing | undefined {
  const sentinelMap: (SettledRunMember | undefined)[][] = live.carried.map((run) =>
    run.map(() => undefined),
  );
  /** Pair one live run's carried members with one settled run's members, in order. */
  const pairRun = (liveIndex: number, sentinelIndex: number): void => {
    let memberIndex = 0;
    live.carried[liveIndex].forEach((isCarried, liveMember) => {
      if (!isCarried) return;
      sentinelMap[liveIndex][liveMember] = { sentinelIndex, memberIndex };
      memberIndex += 1;
    });
  };
  const carriedIn = (run: readonly boolean[]): number => run.filter(Boolean).length;

  const carriedCount = live.carried.reduce((count, run) => count + carriedIn(run), 0);
  const settledCount = settled.runs.reduce((count, run) => count + run.memberCount, 0);
  if (carriedCount > settledCount) return undefined;
  if (carriedCount === settledCount) {
    // Every settled member is a carried one: pair the two flattened lists off in order.
    const members = settled.runs.flatMap((run, sentinelIndex) =>
      Array.from({ length: run.memberCount }, (_, memberIndex) => ({ sentinelIndex, memberIndex })),
    );
    let next = 0;
    live.carried.forEach((run, liveIndex) =>
      run.forEach((isCarried, liveMember) => {
        if (isCarried) sentinelMap[liveIndex][liveMember] = members[next++];
      }),
    );
    return { sentinelMap, settledOnlyRuns: [] };
  }

  // The live runs that reach the settled side, in order, with where their placeholders sit.
  const liveRuns = live.carried
    .map((_, index) => ({
      index,
      before: nonWsBefore(live.facts, live.facts.placeholders[index] ?? 0),
    }))
    .filter(({ index }) => carriedIn(live.carried[index]) > 0);
  const liveBytes = nonWsBytes(live.facts);
  const liveText = liveBytes.map(({ byte }) => byte).join("");
  const settledOnlyRuns: SettledOnlyRun[] = [];
  let shift = 0;
  let nextLive = 0;
  for (let sentinelIndex = 0; sentinelIndex < settled.runs.length; sentinelIndex += 1) {
    const facts = settled.runs[sentinelIndex];
    const liveRun = liveRuns[nextLive];
    if (liveRun?.before.full === facts.before.full + shift) {
      if (carriedIn(live.carried[liveRun.index]) !== facts.memberCount) return undefined;
      pairRun(liveRun.index, sentinelIndex);
      nextLive += 1;
      continue;
    }
    const start = facts.before.full + shift;
    let end = start + facts.spelled.length;
    if (liveText.slice(start, end) !== facts.spelled) {
      // The settled node does not spell the typed bytes back (a `\cat` folded into the note's
      // category, an attribute list re-spelled in its short form), so the literal's extent comes
      // from the other side of it: everything after it is the same bytes on both sides.
      const settledAfter = settled.bytes.slice(facts.before.full + 1);
      end = liveText.length - settledAfter.length;
      if (end <= start || liveText.slice(end) !== settledAfter) return undefined;
    }
    const literal = { start: liveBytes[start].position, end: liveBytes[end - 1].position + 1 };
    const liveBefore = nonWsBefore(live.facts, literal.start);
    const liveAfter = nonWsBefore(live.facts, literal.end);
    const shared = sharedEnds(liveText.slice(start, end), facts.spelled);
    settledOnlyRuns.push({
      sentinelIndex,
      liveBefore,
      liveLength: {
        full: liveAfter.full - liveBefore.full,
        document: liveAfter.document - liveBefore.document,
      },
      liveWsBefore: wsRunBefore(live.facts, literal.start),
      settledBefore: facts.before,
      spelling: facts.spelling,
      spelledLength: facts.spelled.length,
      sharedPrefix: shared.prefix,
      sharedSuffix: shared.suffix,
    });
    shift += end - start - 1;
  }
  return nextLive === liveRuns.length ? { sentinelMap, settledOnlyRuns } : undefined;
}

/**
 * `anchor` over one side's fragment restated over the other's, across every settled-only run it
 * lies past: the live fragment spells each such run's literal where the settled fragment spells one
 * placeholder byte. Each coordinate system is restated in its own counts.
 */
export function anchorAcrossLiterals(
  runs: readonly SettledOnlyRun[],
  anchor: CaretByteAnchor,
  direction: "toSettled" | "toLive",
): CaretByteAnchor {
  if (runs.length === 0) return anchor;
  const restate = (count: number, coordinates: "full" | "document"): number => {
    let shift = 0;
    for (const run of runs) {
      const extra = run.liveLength[coordinates] - 1;
      const isPast =
        direction === "toSettled"
          ? count >= run.liveBefore[coordinates] + run.liveLength[coordinates]
          : count >= run.settledBefore[coordinates] + 1;
      if (isPast) shift += extra;
    }
    return direction === "toSettled" ? count - shift : count + shift;
  };
  return {
    ...anchor,
    nonWsBefore: restate(anchor.nonWsBefore, "full"),
    documentCoords: anchor.documentCoords && {
      ...anchor.documentCoords,
      nonWsBefore: restate(anchor.documentCoords.nonWsBefore, "document"),
    },
  };
}

/**
 * A count of non-whitespace bytes into one side of a settled-only run — the live literal, or the
 * run's spelling — restated as a count into the other, or `undefined` for a byte the settle
 * re-spelled, which the other side has no counterpart for. Bytes up to the shared prefix line up
 * from the front, and bytes from the shared suffix on line up from the back.
 */
export function acrossLiteral(
  run: SettledOnlyRun,
  count: number,
  direction: "toSpelling" | "toLiteral",
): number | undefined {
  const [fromLength, toLength] =
    direction === "toSpelling"
      ? [run.liveLength.full, run.spelledLength]
      : [run.spelledLength, run.liveLength.full];
  if (count <= run.sharedPrefix) return count;
  if (count >= fromLength - run.sharedSuffix) return toLength - (fromLength - count);
  return undefined;
}

/**
 * The settled-only run whose live literal a live anchor lies strictly inside, and the anchor
 * restated over that run's own spelling — `within` is `undefined` for a byte the settle re-spelled.
 * Full bytes only: the literal is plain text, and the spelling counts every byte it has.
 */
export function literalContaining(
  runs: readonly SettledOnlyRun[],
  anchor: CaretByteAnchor,
): { run: SettledOnlyRun; within: CaretByteAnchor | undefined } | undefined {
  for (const run of runs) {
    const count = anchor.nonWsBefore - run.liveBefore.full;
    if (count <= 0 || count >= run.liveLength.full) continue;
    const within = acrossLiteral(run, count, "toSpelling");
    return {
      run,
      within:
        within === undefined
          ? undefined
          : { nonWsBefore: within, wsRun: anchor.wsRun, attributeRunSpans: 0 },
    };
  }
  return undefined;
}
