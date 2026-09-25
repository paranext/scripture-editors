/**
 * Lining up a settle scope's live bytes with its settled bytes: the preserved runs the two sides
 * share, and the typed literal bytes the settle turned into a preserved node — a `\f + \ft note\f*`
 * typed as plain text that settles into a note.
 *
 * Both sides are byte fragments (`FragmentAccumulator`, tier2Rebuild.utils.ts) over the same
 * displayed bytes, which is what lets a whitespace-tolerant byte anchor carry a position from one to
 * the other. They differ where the settle re-spells an attribute section, and where the live side
 * spells a literal byte for byte while the settled side spells the node it became as ONE placeholder
 * byte; a byte inside such a literal is a byte of the settled node's own spelling. The byte
 * alignment (usfmByteAlignment.utils.ts) accounts for both, and this module builds it from the two
 * fragments ({@link pairRuns}) and restates anchors through it, for everything that carries a live
 * position into a settled tree: the settled-position translation (positions/) and the rebuild's
 * caret and annotation carry (tier2Rebuild.utils.ts).
 */

import type { CaretByteAnchor, FragmentAccumulator } from "./tier2Rebuild.utils";
import {
  alignScopeBytes,
  ByteAlignment,
  mapCount,
  mapCountSnapped,
} from "./usfmByteAlignment.utils";
import { $isElementNode, $isTextNode, LexicalNode, NodeKey } from "lexical";
import {
  $isImmutableTypedTextNode,
  $isNoteNode,
  $noteCategoryRunPieces,
  $noteEditableCallerNode,
  NoteNode,
} from "shared";
import { $isImmutableNoteCallerNode } from "shared-react";

/** Whitespace for caret byte-anchoring: everything the fragment/display layer may add, move, or
 * flatten across a rebuild (the NBSP separators arrive here already flattened to spaces by
 * `toFragmentText`). The U+FFFC sentinel placeholder is deliberately NOT whitespace — it stands
 * for a preserved node and anchors like a document byte. */
export const FRAGMENT_WS = /\s/;

/**
 * A preserved run the settle introduced from literal bytes: the settled fragment spells it as one
 * placeholder byte, and the live fragment spells the literal it came from. Inside it the literal's
 * bytes are the settled run's own bytes, wherever the settle spells them back ({@link
 * SettledOnlyRun.inner}).
 */
export interface SettledOnlyRun {
  /** The run's index in the settled fragment's run list. */
  readonly sentinelIndex: number;
  /** Non-whitespace bytes of the live fragment before the literal's first byte. */
  readonly liveBefore: number;
  /** Non-whitespace bytes the literal itself spans in the live fragment. */
  readonly liveLength: number;
  /** Whitespace bytes of the live fragment directly in front of the literal. */
  readonly liveWsBefore: number;
  /** Non-whitespace bytes of the settled fragment before the run's placeholder. */
  readonly settledBefore: number;
  /** The run's own bytes as the settled tree spells them (spans keyed by that tree's keys). */
  readonly spelling: FragmentAccumulator;
  /**
   * How the literal's non-whitespace bytes (live, counted from its first one) line up with
   * `spelling`'s (settled). One for one where the settled node spells the typed bytes back; a
   * settle that re-spells part of it (a figure's typed `file="…"`, which the settled figure spells
   * `src="…"`) leaves those bytes with no counterpart.
   */
  readonly inner: ByteAlignment;
  /** The attributes `spelling` spells as bytes the settled tree does not display — see
   * {@link FoldedAttribute}. */
  readonly foldedAttributes: readonly FoldedAttribute[];
}

/**
 * An attribute a run's spelling spells as USFM bytes the settled tree does not display: a note's
 * `category`, which USFM writes as an attribute marker (`\cat x\cat*`) and a note shows as a display
 * run only in the expanded editable shape. A typed literal spells those bytes, so the spelling has
 * to as well, or a caret on them has nothing to cross to.
 *
 * The bytes are one span of the spelling recorded under the OWNER's key — a node that spells no
 * bytes of its own there, so the span is recognizable by its key alone.
 */
export interface FoldedAttribute {
  /** The node the attribute belongs to, whose key the span is recorded under. */
  readonly ownerKey: NodeKey;
  /** The attribute marker's name in USFM (`cat`). */
  readonly markerName: string;
  /** The attribute's name in USJ (`category`). */
  readonly keyName: string;
  /** How many bytes the attribute's value spells. */
  readonly valueLength: number;
}

/** The USFM bytes of an attribute marker run: `\cat x\cat*`. */
function foldedAttributeText(markerName: string, value: string): string {
  return `\\${markerName} ${value}\\${markerName}*`;
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
  /** The settled runs no live run became that the live side spells as a literal, in settled
   * fragment order. */
  settledOnlyRuns: SettledOnlyRun[];
  /** The live fragment's non-whitespace bytes lined up with the settled fragment's, every byte
   * counted — the coordinates a byte anchor's `nonWsBefore` counts in. */
  alignment: ByteAlignment;
}

/** One byte of a fragment's spans, as plain data — readable after the nodes it came from are
 * gone, which the rebuild's annotation carry needs across its splice. */
interface SpanByte {
  byte: string;
  position: number;
  isWs: boolean;
}

/** A fragment's span bytes in order, and where each preserved run's placeholder starts. */
interface FragmentBytes {
  bytes: SpanByte[];
  placeholders: number[];
}

/** `fragment`'s bytes as plain data. */
function fragmentBytes(fragment: FragmentAccumulator): FragmentBytes {
  const bytes: SpanByte[] = [];
  for (const span of fragment.spans)
    for (let position = span.start; position < span.end; position += 1) {
      const byte = fragment.text[position];
      bytes.push({ byte, position, isWs: FRAGMENT_WS.test(byte) });
    }
  // `pushSentinel` records a run and its placeholder span together, so the n-th sentinel span is
  // the n-th run's placeholder.
  const placeholders = fragment.spans.filter((span) => span.isSentinel).map((span) => span.start);
  return { bytes, placeholders };
}

/** Non-whitespace bytes before `position`, counted the way a byte anchor counts them. */
function nonWsBefore({ bytes }: FragmentBytes, position: number): number {
  return bytes.filter((byte) => byte.position < position && !byte.isWs).length;
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

/** The USFM attribute marker a note's `category` is written as. */
const CATEGORY_MARKER = "cat";
const CATEGORY_KEY = "category";

/** Whether `node` spells no bytes but whitespace — the separator a note shows after its caller. */
function $isWhitespaceText(node: LexicalNode): boolean {
  return $isTextNode(node) && node.getTextContent().trim() === "";
}

/**
 * A preserved run's own bytes, spelled the way USFM writes them — which is what a typed literal
 * spells, byte for byte, when the settle hands it back unchanged:
 *
 * - every text node in order, marker glyphs included;
 * - every read-only display byte a decorator renders (a figure's `\fig `, `|src="…"`, `\fig*`);
 * - a collapsed note's caller — a decorator with no text of its own — as the caller value it
 *   stands for;
 * - a note's `category` where USFM writes it, after the caller and the separator that follows
 *   it, when the tree does not display it ({@link FoldedAttribute}).
 *
 * Read-only.
 */
function $runSpelling(members: readonly LexicalNode[]): {
  spelling: FragmentAccumulator;
  foldedAttributes: FoldedAttribute[];
} {
  const out: FragmentAccumulator = { text: "", spans: [], sentinels: [] };
  const foldedAttributes: FoldedAttribute[] = [];
  const push = (node: LexicalNode, text: string): void => {
    out.spans.push({
      key: node.getKey(),
      start: out.text.length,
      end: out.text.length + text.length,
      isSentinel: false,
    });
    out.text += text;
  };
  const pushCategory = (note: NoteNode, category: string): void => {
    push(note, foldedAttributeText(CATEGORY_MARKER, category));
    foldedAttributes.push({
      ownerKey: note.getKey(),
      markerName: CATEGORY_MARKER,
      keyName: CATEGORY_KEY,
      valueLength: category.length,
    });
  };
  const visitNote = (note: NoteNode): void => {
    const pieces = $noteCategoryRunPieces(note);
    const displayed = pieces.opener ?? pieces.value ?? pieces.closer;
    let category = displayed ? undefined : note.getCategory();
    const editableCaller = $noteEditableCallerNode(note);
    let isPastCaller = false;
    for (const child of note.getChildren()) {
      if (category !== undefined && isPastCaller && !$isWhitespaceText(child)) {
        pushCategory(note, category);
        category = undefined;
      }
      visit(child);
      // The editable caller can sit inside an annotation mark.
      if (
        $isImmutableNoteCallerNode(child) ||
        (editableCaller && (editableCaller.is(child) || child.isParentOf(editableCaller)))
      )
        isPastCaller = true;
    }
    if (category !== undefined) pushCategory(note, category);
  };
  const visit = (node: LexicalNode): void => {
    if ($isImmutableNoteCallerNode(node)) {
      const note = node.getParent();
      push(node, $isNoteNode(note) ? note.getCaller() : "");
    } else if ($isTextNode(node)) push(node, node.getTextContent());
    else if ($isImmutableTypedTextNode(node)) push(node, node.getTextContent());
    else if ($isNoteNode(node)) visitNote(node);
    else if ($isElementNode(node)) node.getChildren().forEach(visit);
  };
  members.forEach(visit);
  return { spelling: out, foldedAttributes };
}

/** What the pairing needs to know about one of the settled fragment's preserved runs. */
interface SettledRunFacts {
  memberCount: number;
  /** Non-whitespace bytes of the settled fragment before the run's placeholder. */
  before: number;
  spelling: FragmentAccumulator;
  foldedAttributes: FoldedAttribute[];
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
  const facts = fragmentBytes(fragment);
  return {
    runs: fragment.sentinels.map((run, index) => {
      const { spelling, foldedAttributes } = $runSpelling(run);
      return {
        memberCount: run.length,
        before: nonWsBefore(facts, facts.placeholders[index] ?? fragment.text.length),
        spelling,
        foldedAttributes,
        spelled: nonWsBytes(fragmentBytes(spelling))
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
    facts: fragmentBytes(fragment),
    carried: fragment.sentinels.map((run, index) => {
      const keys = new Set(carried[index]?.map((node) => node.getKey()));
      return run.map((node) => keys.has(node.getKey()));
    }),
  };
}

/**
 * How the two sides of one scope correspond: where each live preserved-run member sits in the
 * settled fragment's own run list, the settled runs the live side spells as literals, and how the
 * two fragments' bytes line up.
 *
 * A rebuild splices the members it carries back into its output in fragment order, so when the
 * settled fragment lists no other runs, it lists those same nodes in that same order with the
 * dropped ones missing — which pairs the two sides off member for member.
 *
 * A settled list LONGER than that has runs the rebuild made from literal bytes: a typed
 * `\f + \ft note\f*` tokenizes into a note, which the settled fragment spells as a placeholder.
 * Those are found by the byte alignment, which spells each settled placeholder the live side has no
 * placeholder for out as its run's own bytes: a live run is paired with the settled run its
 * placeholder lines up with, and a settled run the live side spells out byte for byte is a
 * {@link SettledOnlyRun}. A run neither accounts for — one past a divergence the alignment cannot
 * explain — is left without a counterpart, so a position in it has none either, while the rest of
 * the scope still pairs.
 *
 * The live fragment must already be without the placeholders of the runs the settle dropped.
 */
export function pairRuns(live: LiveRunSide, settled: SettledRunSide): RunPairing {
  const sentinelMap: (SettledRunMember | undefined)[][] = live.carried.map((run) =>
    run.map(() => undefined),
  );
  const liveBytes = nonWsBytes(live.facts);
  const { alignment, literals } = alignScopeBytes(
    liveBytes.map(({ byte }) => byte).join(""),
    settled.bytes,
    new Map(settled.runs.map((run) => [run.before, run.spelled])),
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
    return { sentinelMap, settledOnlyRuns: [], alignment };
  }

  // Each settled run by where its placeholder sits in the settled bytes.
  const settledAt = new Map(settled.runs.map((run, sentinelIndex) => [run.before, sentinelIndex]));
  live.carried.forEach((run, liveIndex) => {
    const placeholder = live.facts.placeholders[liveIndex];
    if (placeholder === undefined || carriedIn(run) === 0) return;
    const count = mapCount(alignment, nonWsBefore(live.facts, placeholder), "live");
    const sentinelIndex = count === undefined ? undefined : settledAt.get(count);
    if (sentinelIndex === undefined || settled.runs[sentinelIndex].memberCount !== carriedIn(run))
      return;
    pairRun(liveIndex, sentinelIndex);
  });

  const settledOnlyRuns: SettledOnlyRun[] = [];
  for (const [placeholder, literal] of literals) {
    const sentinelIndex = settledAt.get(placeholder);
    if (sentinelIndex === undefined) continue;
    const facts = settled.runs[sentinelIndex];
    // Where the literal's first byte sits in the live fragment, and where its last one ends; a
    // literal with no bytes at all sits where its first byte would.
    const start = liveBytes[literal.liveStart]?.position ?? Number.POSITIVE_INFINITY;
    const end =
      literal.liveEnd > literal.liveStart ? liveBytes[literal.liveEnd - 1].position + 1 : start;
    const liveBefore = nonWsBefore(live.facts, start);
    settledOnlyRuns.push({
      sentinelIndex,
      liveBefore,
      liveLength: nonWsBefore(live.facts, end) - liveBefore,
      liveWsBefore: wsRunBefore(live.facts, start),
      settledBefore: facts.before,
      spelling: facts.spelling,
      inner: literal.inner,
      foldedAttributes: facts.foldedAttributes,
    });
  }
  return { sentinelMap, settledOnlyRuns, alignment };
}

/**
 * `anchor` over one side's fragment restated over the other's, through the scope's byte
 * {@link RunPairing.alignment}. An anchor whose byte has no counterpart on the other side snaps
 * LEFT to where the other side's differing bytes start (`mapCountSnapped`,
 * usfmByteAlignment.utils.ts). Every byte counts, attribute sections included: the alignment
 * already accounts for every one the settle re-spelled.
 */
export function anchorAcrossLiteralsSnapped(
  alignment: ByteAlignment,
  anchor: CaretByteAnchor,
  direction: "toSettled" | "toLive",
): CaretByteAnchor {
  return {
    nonWsBefore: mapCountSnapped(
      alignment,
      anchor.nonWsBefore,
      direction === "toSettled" ? "live" : "settled",
    ),
    wsRun: anchor.wsRun,
  };
}

/**
 * A count of non-whitespace bytes into one side of a settled-only run — the live literal, or the
 * run's spelling — restated as a count into the other, or `undefined` for a byte the settle
 * re-spelled, which the other side has no counterpart for.
 */
export function acrossLiteral(
  run: SettledOnlyRun,
  count: number,
  direction: "toSpelling" | "toLiteral",
): number | undefined {
  return mapCount(run.inner, count, direction === "toSpelling" ? "live" : "settled");
}

/**
 * The settled-only run whose live literal a live anchor sits directly in front of: at the
 * literal's first byte, past any whitespace in front of it. The literal's first byte is the first
 * byte of the node it became, so the anchor stands in front of that node.
 */
export function literalStartingAt(
  runs: readonly SettledOnlyRun[],
  anchor: CaretByteAnchor,
): SettledOnlyRun | undefined {
  return runs.find(
    (run) => anchor.nonWsBefore === run.liveBefore && anchor.wsRun >= run.liveWsBefore,
  );
}

/**
 * The settled-only run whose live literal a live anchor lies strictly inside, how far into the
 * literal it lies (`count`), and the anchor restated over that run's own spelling — `within` is
 * `undefined` for a byte the settle re-spelled.
 */
export function literalContaining(
  runs: readonly SettledOnlyRun[],
  anchor: CaretByteAnchor,
): { run: SettledOnlyRun; count: number; within: CaretByteAnchor | undefined } | undefined {
  for (const run of runs) {
    const count = anchor.nonWsBefore - run.liveBefore;
    if (count <= 0 || count >= run.liveLength) continue;
    const within = acrossLiteral(run, count, "toSpelling");
    return {
      run,
      count,
      within: within === undefined ? undefined : { nonWsBefore: within, wsRun: anchor.wsRun },
    };
  }
  return undefined;
}

/** The preserved run member whose subtree holds `node`, if any, named by its run's index in
 * `fragment`'s run list and its own index within that run. Read-only. */
export function $preservedRunMember(
  fragment: FragmentAccumulator,
  node: LexicalNode,
): (SettledRunMember & { member: LexicalNode }) | undefined {
  const members = new Map<NodeKey, SettledRunMember & { member: LexicalNode }>();
  fragment.sentinels.forEach((run, sentinelIndex) =>
    run.forEach((member, memberIndex) =>
      members.set(member.getKey(), { sentinelIndex, memberIndex, member }),
    ),
  );
  for (let current: LexicalNode | null = node; current; current = current.getParent()) {
    const hit = members.get(current.getKey());
    if (hit) return hit;
  }
  return undefined;
}

/** Child indexes from `ancestor` down to `node`, or `undefined` when `node` is not under it.
 * Read-only. */
export function $childPath(ancestor: LexicalNode, node: LexicalNode): number[] | undefined {
  const path: number[] = [];
  for (let current: LexicalNode | null = node; current; current = current.getParent()) {
    if (current.is(ancestor)) return path;
    path.unshift(current.getIndexWithinParent());
  }
  return undefined;
}
