/**
 * Preparing the settled-vs-live basis: which regions of the document the settled output differs
 * from the live tree in, what each one settles TO, and how the two sides' bytes line up.
 *
 * Scope discovery and the per-scope rebuilds are the read-only settle's own
 * (`$collectSettleScopes`, `$settledParaScope` and kin, virtualSettle.utils.ts), so the regions a
 * position is carried across are by construction the regions `getUsj()` actually rebuilt. The one
 * thing this module adds is MATERIALIZATION: the settle produces serialized nodes, and a position
 * has to be resolved against a real tree, so each scope's rebuild is parsed into a scratch editor
 * whose root children are the settled replacement nodes.
 */

import {
  $buildChapterFragment,
  $buildImpliedParaFragment,
  $buildNoteFragment,
  $buildParaScopeFragment,
  $chapterAdjacentAttributeNodes,
  $exportSubtree,
  $isAttributeRunSpan,
  cutFragment,
  FRAGMENT_WS,
  FragmentAccumulator,
  Tier2Context,
} from "../markerEdit/tier2Rebuild.utils";
import {
  $applySettledNoteGlyphRename,
  $applySettledNoteScope,
  $collectSettleScopes,
  $settledChapterScope,
  $settledParaScope,
  $transientCutRange,
  $verifiedTransientLiteral,
  carriedPreservedRuns,
  CarriedPreservedRuns,
  SerializedSite,
  SettleScopes,
  TransientLiteral,
  $mapSerializedSites,
  spliceHusk,
} from "../markerEdit/virtualSettle.utils";
import {
  NonWsCounts,
  SettledOnlyRun,
  SettledPositionContext,
  SettledRunMember,
  SettleScopePlan,
  TransientCut,
} from "./settledPositions.model";
import {
  $getRoot,
  $isElementNode,
  $isTextNode,
  $parseSerializedNode,
  createEditor,
  Klass,
  LexicalEditor,
  LexicalNode,
  LexicalNodeReplacement,
  NodeKey,
  SerializedLexicalNode,
} from "lexical";
import {
  $getLogicalContentItems,
  $isChapterNode,
  $isImpliedParaNode,
  $isNoteNode,
  $isParaNode,
  ChapterNode,
  ImpliedParaNode,
  LogicalContentItem,
  NoteNode,
  ParaNode,
} from "shared";
import { $isImmutableNoteCallerNode, hasStandardViewWhitespace, ViewOptions } from "shared-react";

/** The settled document's top-level content indexes, expressed against the live tree's. */
export interface PreparedScopes {
  /** Scope plans keyed by their first live node key. */
  readonly byFirstLiveKey: ReadonlyMap<NodeKey, SettleScopePlan>;
  /** Live top-level logical index → settled top-level logical index of the same (or replacement)
   * node. */
  liveToSettledTopIndex(liveIndex: number): number;
  /** Settled top-level index → the live index it came from, the plan that replaced it (when one
   * did), and which of that plan's settled items this index is — or `undefined` for an index past
   * the settled document's end, which names nothing a host can have read even where the live tree
   * has an item at that index. */
  settledToLiveTopIndex(settledIndex: number):
    | {
        liveIndex: number;
        plan?: SettleScopePlan;
        indexWithinScope: number;
      }
    | undefined;
  /** The plan whose live nodes contain `node`, if any — the NEAREST one, so a note settling
   * inside a settling paragraph answers with the note. */
  planContaining(node: LexicalNode): SettleScopePlan | undefined;
  /** The view the scopes were prepared under, which also decides how live text maps to USJ
   * offsets. */
  readonly viewOptions: ViewOptions;
}

/** One settled top-level content item's provenance. */
interface SettledTopIndex {
  liveIndex: number;
  plan?: SettleScopePlan;
  indexWithinScope: number;
}

/** The fragment over one scope's nodes, whichever kind of scope it is. The same builder runs over
 * the live nodes and over the scratch editor's root children, so the two sides' bytes are
 * comparable by construction. */
function $buildScopeFragment(
  kind: SettleScopePlan["kind"],
  nodes: readonly LexicalNode[],
  tier2: Tier2Context,
): FragmentAccumulator | undefined {
  if (kind === "para") {
    const [first] = nodes;
    return nodes.length === 1 && $isImpliedParaNode(first)
      ? $buildImpliedParaFragment(first, tier2.getMarker, tier2.viewOptions)
      : $buildParaScopeFragment(nodes, tier2.getMarker, tier2.viewOptions);
  }
  if (kind === "chapter") {
    const chapter = nodes.find($isChapterNode);
    return chapter && $buildChapterFragment(chapter, tier2.getMarker, tier2.viewOptions);
  }
  const note = nodes.find($isNoteNode);
  return note && $buildNoteFragment(note, tier2.getMarker, tier2.viewOptions)?.out;
}

/**
 * A headless editor holding `rebuilt` as its root children, or `undefined` when the rebuild will
 * not parse (a node kind the registry does not carry, or one the root refuses).
 *
 * The scratch never renders — it has no root element, so its commit skips reconciliation
 * entirely — and exists only so the settled nodes can be walked by the same `$` functions that
 * walk the live tree. `discrete: true` commits it synchronously, so its state is readable the
 * moment this returns.
 */
function materializeScratch(
  nodes: readonly (Klass<LexicalNode> | LexicalNodeReplacement)[],
  rebuilt: SerializedLexicalNode[],
): LexicalEditor | undefined {
  const scratch = createEditor({
    nodes: [...nodes],
    onError: (error) => {
      throw error;
    },
  });
  try {
    scratch.update(
      () => {
        const root = $getRoot();
        rebuilt.forEach((child) => root.append($parseSerializedNode(child)));
      },
      { discrete: true },
    );
  } catch {
    return undefined;
  }
  return scratch;
}

/** Separates a signature's fields so two different splits of the same characters can never read
 * as the same signature. */
const SIGNATURE_SEPARATOR = "\u0000";

/** Every key in `nodes`' subtrees, depth-first. */
function $subtreeKeys(nodes: readonly LexicalNode[], out: NodeKey[] = []): NodeKey[] {
  for (const node of nodes) {
    out.push(node.getKey());
    if ($isElementNode(node)) $subtreeKeys(node.getChildren(), out);
  }
  return out;
}

/**
 * The signature a plan is memoized on: the same displayed bytes under the same view, with the same
 * declaration over them, settle to the same thing — and the same NODES hold them. A plan keeps live
 * node references and pairs them with the settled tree by position, so an edit that changes no
 * displayed byte but splits, wraps or replaces a node (annotating text does exactly that) must not
 * reuse it: its spans would still claim the split node's old extent.
 */
function $planSignature(
  kind: SettleScopePlan["kind"],
  liveNodes: readonly LexicalNode[],
  fragmentText: string,
  tier2: Tier2Context,
  transient: TransientLiteral | undefined,
): string {
  const view = `${tier2.viewOptions.markerMode}/${tier2.viewOptions.noteMode}`;
  const content = liveNodes.map((node) => node.getTextContent()).join(SIGNATURE_SEPARATOR);
  const nodes = $subtreeKeys(liveNodes).join(" ");
  // The declaration's own NODE is part of what it means: the same run at the same offset in a
  // different node is a different cut, and therefore a different settled scope.
  const declared = transient
    ? `${transient.node.getKey()}:${transient.run}@${transient.caretOffset}`
    : "";
  return [kind, view, fragmentText, content, nodes, declared].join(SIGNATURE_SEPARATOR);
}

/** Every NoteNode under `nodes`, depth-first. */
function $notesWithin(nodes: readonly LexicalNode[], out: NoteNode[] = []): NoteNode[] {
  for (const node of nodes) {
    if ($isNoteNode(node)) out.push(node);
    if ($isElementNode(node)) $notesWithin(node.getChildren(), out);
  }
  return out;
}

/**
 * `fragment` with the placeholder byte of every run the settled side carries nothing of removed.
 *
 * A dropped run still spells a U+FFFC in the live fragment's text, and the byte anchor the two
 * sides are otherwise paired through counts a placeholder as an ordinary document byte — it is
 * deliberately NOT whitespace (`$resolveFragmentByteAnchor`, tier2Rebuild.utils.ts). Left in, every
 * live position past it answers a settled position one byte away, silently. Cut, the two fragments
 * spell the same document bytes again, which is the property the anchor relies on.
 *
 * The run's own span stays in the list, emptied, so the dropped node is still findable by key and
 * a position INSIDE it still resolves to the run it belongs to — which reports it at the boundary
 * where the run stood, the settled document having no node for it.
 */
function withoutDroppedSentinels(
  fragment: FragmentAccumulator,
  carried: CarriedPreservedRuns,
): FragmentAccumulator {
  const droppedKeys = fragment.sentinels
    .filter((run, index) => run.length > 0 && (carried.live[index]?.length ?? 0) === 0)
    .map((run) => run[0].getKey());
  // Later runs first: a cut only restates the positions after it, so each span's start is still
  // the one this loop looked it up by.
  return droppedKeys.reverse().reduce((cut, key) => {
    const span = cut.spans.find((candidate) => candidate.isSentinel && candidate.key === key);
    return span ? cutFragment(cut, span.start, span.end) : cut;
  }, fragment);
}

/** Non-whitespace bytes of `fragment` before `position`, counted over its spans exactly as a byte
 * anchor counts them. Read-only: call inside a read of the tree the fragment was built over. */
function $nonWsBefore(fragment: FragmentAccumulator, position: number): NonWsCounts {
  let full = 0;
  let document = 0;
  for (const span of fragment.spans) {
    const end = Math.min(span.end, position);
    let count = 0;
    for (let index = span.start; index < end; index += 1)
      if (!FRAGMENT_WS.test(fragment.text[index])) count += 1;
    full += count;
    if (!$isAttributeRunSpan(span)) document += count;
  }
  return { full, document };
}

/** How many whitespace bytes of `fragment`'s spans sit directly in front of `position`, back to
 * the last non-whitespace byte — the `wsRun` a byte anchor at `position` carries. */
function wsRunBefore(fragment: FragmentAccumulator, position: number): number {
  let run = 0;
  for (const span of fragment.spans)
    for (let index = span.start; index < Math.min(span.end, position); index += 1)
      run = FRAGMENT_WS.test(fragment.text[index]) ? run + 1 : 0;
  return run;
}

/** Every non-whitespace byte of `fragment`'s spans, in order, with where it sits in the text —
 * the bytes a byte anchor's `nonWsBefore` counts, in every-byte coordinates. */
function nonWsBytes(fragment: FragmentAccumulator): { byte: string; position: number }[] {
  const bytes: { byte: string; position: number }[] = [];
  for (const span of fragment.spans)
    for (let position = span.start; position < span.end; position += 1) {
      const byte = fragment.text[position];
      if (!FRAGMENT_WS.test(byte)) bytes.push({ byte, position });
    }
  return bytes;
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

/** What the pairing needs to know about one of the scratch fragment's preserved runs, gathered
 * inside a read of the scratch tree. */
interface ScratchRunFacts {
  memberCount: number;
  /** Non-whitespace bytes of the scratch fragment before the run's placeholder. */
  before: NonWsCounts;
  spelling: FragmentAccumulator;
  /** `spelling`'s non-whitespace bytes, in order. */
  spelled: string;
}

/** Every preserved run of the scratch fragment, described. Read-only: call inside a read of the
 * scratch tree. */
function $scratchRunFacts(fragment: FragmentAccumulator): ScratchRunFacts[] {
  // `pushSentinel` records a run and its placeholder span together, so the n-th sentinel span is
  // the n-th run's placeholder.
  const placeholders = fragment.spans.filter((span) => span.isSentinel);
  return fragment.sentinels.map((run, index) => {
    const spelling = $runSpelling(run);
    return {
      memberCount: run.length,
      before: $nonWsBefore(fragment, placeholders[index]?.start ?? fragment.text.length),
      spelling,
      spelled: nonWsBytes(spelling)
        .map(({ byte }) => byte)
        .join(""),
    };
  });
}

/** How one scope's two run lists correspond. */
interface RunPairing {
  sentinelMap: (SettledRunMember | undefined)[][];
  settledOnlyRuns: SettledOnlyRun[];
}

/**
 * Where each live preserved-run member sits in the settled fragment's own run list, in
 * {@link SettleScopePlan.sentinelMap}'s shape, plus the settled runs no live run became — or
 * `undefined` when the two sides' runs cannot be put in correspondence at all.
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
 * shape the pairing cannot describe, and the scope answers nothing rather than answer a construct
 * the two sides disagree about.
 *
 * `liveFragment` is already without the placeholders of the runs the settle dropped. Read-only:
 * call inside a read of the LIVE tree.
 */
function $pairRuns(
  liveFragment: FragmentAccumulator,
  carried: CarriedPreservedRuns,
  scratchRuns: readonly ScratchRunFacts[],
  scratchBytes: string,
): RunPairing | undefined {
  const sentinelMap: (SettledRunMember | undefined)[][] = liveFragment.sentinels.map((run) =>
    run.map(() => undefined),
  );
  /** Pair one live run's carried members with one settled run's members, in order. */
  const pairRun = (liveIndex: number, sentinelIndex: number): void => {
    const carriedKeys = new Set(carried.live[liveIndex]?.map((node) => node.getKey()));
    let memberIndex = 0;
    liveFragment.sentinels[liveIndex].forEach((node, liveMember) => {
      if (!carriedKeys.has(node.getKey())) return;
      sentinelMap[liveIndex][liveMember] = { sentinelIndex, memberIndex };
      memberIndex += 1;
    });
  };

  const carriedCount = carried.live.reduce((count, run) => count + run.length, 0);
  const settledCount = scratchRuns.reduce((count, run) => count + run.memberCount, 0);
  if (carriedCount > settledCount) return undefined;
  if (carriedCount === settledCount) {
    // Every settled member is a carried one: pair the two flattened lists off in order.
    const settled = scratchRuns.flatMap((run, sentinelIndex) =>
      Array.from({ length: run.memberCount }, (_, memberIndex) => ({ sentinelIndex, memberIndex })),
    );
    let next = 0;
    liveFragment.sentinels.forEach((run, liveIndex) => {
      const carriedKeys = new Set(carried.live[liveIndex]?.map((node) => node.getKey()));
      run.forEach((node, liveMember) => {
        if (carriedKeys.has(node.getKey())) sentinelMap[liveIndex][liveMember] = settled[next++];
      });
    });
    return { sentinelMap, settledOnlyRuns: [] };
  }

  // The live runs that reach the settled side, in order, with where their placeholders sit.
  const placeholders = liveFragment.spans.filter((span) => span.isSentinel);
  const liveRuns = liveFragment.sentinels
    .map((_, index) => ({
      index,
      before: $nonWsBefore(liveFragment, placeholders[index]?.start ?? 0),
    }))
    .filter(({ index }) => (carried.live[index]?.length ?? 0) > 0);
  const liveBytes = nonWsBytes(liveFragment);
  const liveText = liveBytes.map(({ byte }) => byte).join("");
  const settledOnlyRuns: SettledOnlyRun[] = [];
  let shift = 0;
  let nextLive = 0;
  for (let sentinelIndex = 0; sentinelIndex < scratchRuns.length; sentinelIndex += 1) {
    const facts = scratchRuns[sentinelIndex];
    const live = liveRuns[nextLive];
    if (live?.before.full === facts.before.full + shift) {
      if (carried.live[live.index].length !== facts.memberCount) return undefined;
      pairRun(live.index, sentinelIndex);
      nextLive += 1;
      continue;
    }
    const start = facts.before.full + shift;
    let end = start + facts.spelled.length;
    if (liveText.slice(start, end) !== facts.spelled) {
      // The settled node does not spell the typed bytes back (a `\cat` folded into the note's
      // category, an attribute list re-spelled in its short form), so the literal's extent comes
      // from the other side of it: everything after it is the same bytes on both sides.
      const settledAfter = scratchBytes.slice(facts.before.full + 1);
      end = liveText.length - settledAfter.length;
      if (end <= start || liveText.slice(end) !== settledAfter) return undefined;
    }
    const literal = { start: liveBytes[start].position, end: liveBytes[end - 1].position + 1 };
    const liveBefore = $nonWsBefore(liveFragment, literal.start);
    const liveAfter = $nonWsBefore(liveFragment, literal.end);
    const shared = sharedEnds(liveText.slice(start, end), facts.spelled);
    settledOnlyRuns.push({
      sentinelIndex,
      liveBefore,
      liveLength: {
        full: liveAfter.full - liveBefore.full,
        document: liveAfter.document - liveBefore.document,
      },
      liveWsBefore: wsRunBefore(liveFragment, literal.start),
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

/** Build the plan for one scope from its settled serialized nodes, or `undefined` when they will
 * not materialize. `carried` is the rebuild's own account of which preserved-run members reached
 * its output, which is what pairs the two sides' run lists up. */
function $planFrom(
  kind: SettleScopePlan["kind"],
  liveNodes: readonly LexicalNode[],
  liveFragment: FragmentAccumulator | undefined,
  liveCut: TransientCut | undefined,
  rebuilt: SerializedLexicalNode[],
  carried: CarriedPreservedRuns | undefined,
  context: SettledPositionContext,
): SettleScopePlan | undefined {
  const scratch = materializeScratch(context.nodes, rebuilt);
  if (!scratch) return undefined;
  const { settledCount, scratchFragment, scratchRuns } = scratch.getEditorState().read(() => {
    const fragment = $buildScopeFragment(kind, $getRoot().getChildren(), context.tier2);
    return {
      settledCount: $getLogicalContentItems(
        $getRoot(),
        hasStandardViewWhitespace(context.tier2.viewOptions),
      ).length,
      scratchFragment: fragment,
      scratchRuns: fragment ? $scratchRunFacts(fragment) : [],
    };
  });
  const scratchBytes = scratchFragment
    ? nonWsBytes(scratchFragment)
        .map(({ byte }) => byte)
        .join("")
    : "";
  const base = { kind, liveNodes, liveCut, scratch, scratchFragment, settledCount };
  // Nothing preserved on either side: the correspondence is vacuous, not unknown.
  if ((liveFragment?.sentinels.length ?? 0) === 0 && scratchRuns.length === 0)
    return { ...base, liveFragment, sentinelMap: [], settledOnlyRuns: [] };
  const paired = liveFragment && carried && withoutDroppedSentinels(liveFragment, carried);
  const pairing = paired && $pairRuns(paired, carried, scratchRuns, scratchBytes);
  if (!pairing) return { ...base, liveFragment, sentinelMap: undefined, settledOnlyRuns: [] };
  return { ...base, liveFragment: paired, ...pairing };
}

/** The live fragment for a scope with the declared bytes cut out of it, plus where that cut was. */
function $cutLiveFragment(
  fragment: FragmentAccumulator | undefined,
  transient: TransientLiteral | undefined,
): { liveFragment: FragmentAccumulator | undefined; liveCut: TransientCut | undefined } {
  if (!fragment || !transient) return { liveFragment: fragment, liveCut: undefined };
  const range = $transientCutRange(fragment, transient);
  if (!range) return { liveFragment: fragment, liveCut: undefined };
  return {
    liveFragment: cutFragment(fragment, range.start, range.end),
    liveCut: {
      key: transient.node.getKey(),
      nodeOffset: transient.caretOffset - transient.run.length,
      length: transient.run.length,
    },
  };
}

/** Every pending note-marker rename, applied to a scope's serialized copy the way the read-only
 * settle applies it to the whole document, so the scratch tree is the note `getUsj()` returns
 * rather than one still carrying the old marker. A rename whose note is not in `sites` is not this
 * scope's, and is a no-op. */
function $applyNoteGlyphRenames(scopes: SettleScopes, sites: Map<NodeKey, SerializedSite>): void {
  for (const rename of scopes.noteGlyphRenames.values())
    $applySettledNoteGlyphRename(rename, sites);
}

/** The note scope's plan: the note's own serialized form with its settled content spliced in. */
function $planForNote(
  note: NoteNode,
  built: FragmentAccumulator | undefined,
  scopes: SettleScopes,
  context: SettledPositionContext,
  transient: TransientLiteral | undefined,
): SettleScopePlan | undefined {
  const { liveFragment, liveCut } = $cutLiveFragment(built, transient);
  const serialized = $exportSubtree(note);
  const sites = new Map<NodeKey, SerializedSite>();
  $mapSerializedSites([note], [serialized], sites);
  $applyNoteGlyphRenames(scopes, sites);
  // A refusal leaves the serialized note untouched, which is the settle saying this scope is
  // already what it settles to — no plan, so positions in it address the live tree directly.
  if (!$applySettledNoteScope(note, sites, context.tier2, scopes.huskKeys, transient))
    return undefined;
  const carried = built && carriedPreservedRuns(built, sites, scopes.huskKeys);
  return $planFrom("note", [note], liveFragment, liveCut, [serialized], carried, context);
}

/** The paragraph scope's plan. Any note settling INSIDE the scope is settled into the serialized
 * copy first, mirroring the read-only settle's own notes-before-paragraphs order: a settling note
 * rides through the paragraph's rebuild as a preserved node, so the paragraph's settled output
 * must carry the settled note rather than the pending one. */
function $planForParas(
  paras: ParaNode[],
  built: FragmentAccumulator | undefined,
  scopes: SettleScopes,
  context: SettledPositionContext,
  transient: TransientLiteral | undefined,
): SettleScopePlan | undefined {
  const { liveFragment, liveCut } = $cutLiveFragment(built, transient);
  const serialized = paras.map($exportSubtree);
  const sites = new Map<NodeKey, SerializedSite>();
  $mapSerializedSites(paras, serialized, sites);
  $applyNoteGlyphRenames(scopes, sites);
  $notesWithin(paras)
    .filter((note) => scopes.noteScopes.has(note.getKey()))
    .forEach((note) =>
      $applySettledNoteScope(note, sites, context.tier2, scopes.huskKeys, transient),
    );
  const rebuilt = $settledParaScope(paras, sites, context.tier2, scopes.huskKeys, transient);
  if (!rebuilt) return undefined;
  const carried = built && carriedPreservedRuns(built, sites, scopes.huskKeys);
  return $planFrom("para", paras, liveFragment, liveCut, rebuilt, carried, context);
}

/** The chapter scope's plan, over the whole region the chapter rebuild replaces (the chapter plus
 * the adjacent first-class `\ca`/`\cp` nodes `$buildChapterFragment` reads). */
function $planForChapter(
  chapter: ChapterNode,
  built: FragmentAccumulator | undefined,
  context: SettledPositionContext,
  transient: TransientLiteral | undefined,
): SettleScopePlan | undefined {
  const { liveFragment, liveCut } = $cutLiveFragment(built, transient);
  const rebuilt = $settledChapterScope(chapter, context.tier2, transient);
  if (!rebuilt) return undefined;
  const liveNodes = [chapter, ...$chapterAdjacentAttributeNodes(chapter)];
  // A chapter region with any preserved node at all is refused outright by `$buildChapterFragment`,
  // so a chapter scope has no preserved runs to pair.
  return $planFrom("chapter", liveNodes, liveFragment, liveCut, rebuilt, undefined, context);
}

/** The plan for a paragraph whose only pending change is an emptied optbreak husk — nothing
 * re-tokenizes, the dead husk is simply spliced out and the text it split is rejoined, exactly as
 * the read-only settle's own husk pass does it. A note settling inside the paragraph is settled
 * into the serialized copy first, for the same reason {@link $planForParas} does it: the note
 * rides through as a preserved node, and a settled path into it is resolved against THIS tree, so
 * a paragraph carrying the pending note resolves the note's settled content indexes against the
 * wrong children. */
function $planForHuskOnlyPara(
  para: ParaNode | ImpliedParaNode,
  liveFragment: FragmentAccumulator | undefined,
  husks: readonly LexicalNode[],
  scopes: SettleScopes,
  context: SettledPositionContext,
  transient: TransientLiteral | undefined,
): SettleScopePlan | undefined {
  const serialized = $exportSubtree(para);
  const sites = new Map<NodeKey, SerializedSite>();
  $mapSerializedSites([para], [serialized], sites);
  $applyNoteGlyphRenames(scopes, sites);
  $notesWithin([para])
    .filter((note) => scopes.noteScopes.has(note.getKey()))
    .forEach((note) =>
      $applySettledNoteScope(note, sites, context.tier2, scopes.huskKeys, transient),
    );
  const splicedKeys = new Set<NodeKey>();
  for (const husk of husks) {
    const site = sites.get(husk.getKey());
    if (!site) continue;
    const index = site.siblings.indexOf(site.node);
    if (index < 0) continue;
    spliceHusk(site.siblings, index);
    splicedKeys.add(husk.getKey());
  }
  if (splicedKeys.size === 0) return undefined;
  const carried = liveFragment && carriedPreservedRuns(liveFragment, sites, splicedKeys);
  return $planFrom("para", [para], liveFragment, undefined, [serialized], carried, context);
}

/** Whether any scope already planned covers `node` — its own key or an ancestor's. */
function $isPlanned(node: LexicalNode, byLiveKey: ReadonlyMap<NodeKey, SettleScopePlan>): boolean {
  for (let current: LexicalNode | null = node; current; current = current.getParent())
    if (byLiveKey.has(current.getKey())) return true;
  return false;
}

/** The identity basis: the settled document IS the live tree, index for index. */
function identityPrepared(viewOptions: ViewOptions): PreparedScopes {
  return {
    byFirstLiveKey: new Map(),
    liveToSettledTopIndex: (liveIndex) => liveIndex,
    settledToLiveTopIndex: (settledIndex) => ({ liveIndex: settledIndex, indexWithinScope: 0 }),
    planContaining: () => undefined,
    viewOptions,
  };
}

/** The root child an item of the root's logical content sits in. That is the item's own node,
 * except inside the root's implied paragraph, which USJ splices away: its CHILDREN are the root's
 * items, and the paragraph is the root child they belong to. */
function $rootChildOf(item: LogicalContentItem): LexicalNode | null {
  const node = item.type === "element" ? item.node : item.segments[0]?.node;
  return node?.getTopLevelElement() ?? null;
}

/**
 * Pair the live top-level content indexes with the settled ones by walking the root's logical
 * items once: the items a plan replaces contribute that plan's settled item count, everything else
 * contributes itself. A paragraph that splits therefore pushes everything after it DOWN, and a
 * rejoin pulls everything after it UP, by exactly what the settled output does.
 *
 * A scope is a run of ROOT CHILDREN, and an item belongs to the scope whose root child holds it —
 * not the scope whose node it is — because a scope can include the root's implied paragraph, which
 * has no item of its own.
 */
function $mapTopIndexes(
  topPlans: ReadonlyMap<NodeKey, SettleScopePlan>,
  collapsesSpaceRuns: boolean,
): {
  liveToSettled: number[];
  settledToLive: SettledTopIndex[];
} {
  const liveItems = $getLogicalContentItems($getRoot(), collapsesSpaceRuns);
  const liveToSettled: number[] = [];
  const settledToLive: SettledTopIndex[] = [];
  let settledIndex = 0;
  for (let index = 0; index < liveItems.length; ) {
    const rootChild = $rootChildOf(liveItems[index]);
    const plan = rootChild && topPlans.get(rootChild.getKey());
    if (!plan) {
      liveToSettled[index] = settledIndex;
      settledToLive.push({ liveIndex: index, indexWithinScope: 0 });
      settledIndex += 1;
      index += 1;
      continue;
    }
    const scopeKeys = new Set(plan.liveNodes.map((scopeNode) => scopeNode.getKey()));
    let consumed = 0;
    while (index + consumed < liveItems.length) {
      const candidate = $rootChildOf(liveItems[index + consumed]);
      if (!candidate || !scopeKeys.has(candidate.getKey())) break;
      consumed += 1;
    }
    for (let offset = 0; offset < consumed; offset += 1)
      liveToSettled[index + offset] = settledIndex;
    for (let within = 0; within < plan.settledCount; within += 1)
      settledToLive.push({ liveIndex: index, plan, indexWithinScope: within });
    settledIndex += plan.settledCount;
    index += consumed;
  }
  return { liveToSettled, settledToLive };
}

/**
 * The settled-vs-live basis for the editor's current pending state. Call inside a read of the LIVE
 * editor state.
 *
 * Identity when nothing is pending and nothing is declared — the overwhelmingly common case, which
 * costs one predicate and allocates nothing. Otherwise every scope the read-only settle would
 * rebuild is rebuilt here too, memoized on its content so arrow-key navigation through a pending
 * paragraph reuses one basis.
 */
export function $prepareSettleScopes(context: SettledPositionContext): PreparedScopes {
  const transient = $verifiedTransientLiteral(context.transientInput, context.lastKnownCaret);
  if (context.pendedKeys.size === 0 && !transient) {
    // Nothing is pending, so no cached plan can still be valid — and each one holds a scratch
    // editor plus references to live nodes the tree may have since replaced.
    context.cache.entries.clear();
    return identityPrepared(context.tier2.viewOptions);
  }
  if (context.cache.getMarker !== context.tier2.getMarker) {
    context.cache.entries.clear();
    context.cache.getMarker = context.tier2.getMarker;
  }

  const scopes = $collectSettleScopes(context.pendedKeys, context.tier2, transient);
  const byFirstLiveKey = new Map<NodeKey, SettleScopePlan>();
  const byLiveKey = new Map<NodeKey, SettleScopePlan>();
  const topPlans = new Map<NodeKey, SettleScopePlan>();
  const stillPending = new Set<NodeKey>();

  const record = (plan: SettleScopePlan | undefined, isTopLevel: boolean): void => {
    if (!plan) return;
    const firstKey = plan.liveNodes[0].getKey();
    byFirstLiveKey.set(firstKey, plan);
    plan.liveNodes.forEach((node) => byLiveKey.set(node.getKey(), plan));
    if (isTopLevel) plan.liveNodes.forEach((node) => topPlans.set(node.getKey(), plan));
  };

  const planned = (
    key: NodeKey,
    kind: SettleScopePlan["kind"],
    liveNodes: readonly LexicalNode[],
    build: (liveFragment: FragmentAccumulator | undefined) => SettleScopePlan | undefined,
  ): SettleScopePlan | undefined => {
    stillPending.add(key);
    const liveFragment = $buildScopeFragment(kind, liveNodes, context.tier2);
    const signature = $planSignature(
      kind,
      liveNodes,
      liveFragment?.text ?? "",
      context.tier2,
      transient,
    );
    const cached = context.cache.entries.get(key);
    if (cached?.signature === signature) return cached.plan;
    const plan = build(liveFragment);
    if (plan) context.cache.entries.set(key, { signature, plan });
    else context.cache.entries.delete(key);
    return plan;
  };

  // Notes first: a note settling inside a settling paragraph has to be settled into the
  // paragraph's serialized copy before the paragraph itself is rebuilt around it.
  for (const note of scopes.noteScopes.values())
    record(
      planned(note.getKey(), "note", [note], (fragment) =>
        $planForNote(note, fragment, scopes, context, transient),
      ),
      false,
    );
  for (const paras of scopes.paraScopes.values())
    record(
      planned(paras[0].getKey(), "para", paras, (fragment) =>
        $planForParas(paras, fragment, scopes, context, transient),
      ),
      true,
    );
  for (const chapter of scopes.chapterScopes.values())
    record(
      planned(
        chapter.getKey(),
        "chapter",
        [chapter, ...$chapterAdjacentAttributeNodes(chapter)],
        (fragment) => $planForChapter(chapter, fragment, context, transient),
      ),
      true,
    );
  // A husk whose own paragraph settles for some other reason is already gone from that
  // paragraph's rebuild; only a husk removed on its own needs a plan of its own.
  // The root's implied paragraph is a paragraph for this purpose too: `$settledUsj` splices a husk
  // out of it like any other, so its top-level items shift just the same.
  const huskParas = new Map<NodeKey, { para: ParaNode | ImpliedParaNode; husks: LexicalNode[] }>();
  for (const husk of scopes.husks) {
    const para = husk.getTopLevelElement();
    if (!($isParaNode(para) || $isImpliedParaNode(para)) || $isPlanned(husk, byLiveKey)) continue;
    const entry = huskParas.get(para.getKey()) ?? { para, husks: [] };
    entry.husks.push(husk);
    huskParas.set(para.getKey(), entry);
  }
  for (const [key, { para, husks }] of huskParas)
    record(
      planned(key, "para", [para], (fragment) =>
        $planForHuskOnlyPara(para, fragment, husks, scopes, context, transient),
      ),
      true,
    );

  for (const key of [...context.cache.entries.keys()])
    if (!stillPending.has(key)) context.cache.entries.delete(key);

  if (byFirstLiveKey.size === 0) return identityPrepared(context.tier2.viewOptions);

  const { liveToSettled, settledToLive } = $mapTopIndexes(
    topPlans,
    hasStandardViewWhitespace(context.tier2.viewOptions),
  );
  return {
    byFirstLiveKey,
    liveToSettledTopIndex: (liveIndex) => liveToSettled[liveIndex] ?? liveIndex,
    settledToLiveTopIndex: (settledIndex) => settledToLive[settledIndex],
    planContaining: (node) => {
      for (let current: LexicalNode | null = node; current; current = current.getParent()) {
        const plan = byLiveKey.get(current.getKey());
        if (plan) return plan;
      }
      return undefined;
    },
    viewOptions: context.tier2.viewOptions,
  };
}
