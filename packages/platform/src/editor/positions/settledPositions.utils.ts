/**
 * Carrying a position between the SETTLED document and the LIVE tree, in both directions.
 *
 * A host's only view of the document is `getUsj()`, which is settled, so every position it hands
 * back addresses a document the editor is not currently showing — and every position the editor
 * hands it has to address that same settled document, or the host cannot resolve it. Outside a
 * rebuilt scope both directions are a matter of restating one top-level index; inside one, the
 * settled structure and the live structure genuinely disagree, and the only thing they still
 * share is the BYTES on screen — which is what the Tier-2 caret's whitespace-tolerant byte anchor
 * already carries a position across.
 *
 * So a position inside a rebuilt scope is reduced to a byte anchor over the tree it came from and
 * re-resolved against the other one, which for the settled side is that scope's rebuild
 * materialized in a scratch editor. Nodes the settle preserved verbatim — notes, unknown blocks,
 * verses and their display runs — cross by their own path instead: the settle handed the SAME
 * subtree through, so the position in it is unchanged.
 */

import {
  $buildNoteFragment,
  $caretSpanByteAnchor,
  $resolveFragmentByteAnchor,
  CaretByteAnchor,
  FragmentAccumulator,
  FragmentPoint,
  FragmentSpan,
  Tier2Context,
} from "../markerEdit/tier2Rebuild.utils";
import {
  SettledPositionContext,
  SettledRunMember,
  SettleScopePlan,
} from "./settledPositions.model";
import { PreparedScopes } from "./settledScopes.utils";
import {
  UsjDocumentLocation,
  indexesFromUsjJsonPath,
  isUsjTextContentLocation,
  usjJsonPathFromIndexes,
} from "@eten-tech-foundation/scripture-utilities";
import {
  $getNodeByKey,
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  LexicalNode,
  NodeKey,
} from "lexical";
import { $getLogicalContentItems, $isNoteNode } from "shared";
import {
  $getJsonPathIndexes,
  $getLocationFromNode,
  $getNodeFromLocation,
  $getUsjSelectionFromEditor,
  AnnotationRange,
  SelectionRange,
} from "shared-react";

/** Whitespace as the fragment layer means it — everything the display may add, move, or flatten
 * across a settle. */
const WHITESPACE = /\s/;

/** The `$.content[…]` prefix of a jsonPath, with any property suffix (`['marker']`) stripped. */
const CONTENT_PATH = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;

function contentPathOf(jsonPath: string): string {
  return CONTENT_PATH.exec(jsonPath)?.[1] ?? jsonPath;
}

/** `location` re-addressed at `indexes`, keeping its subtype, its offsets, and any property
 * suffix — the path is the only part a translation ever changes. */
function withContentIndexes<T extends UsjDocumentLocation>(location: T, indexes: number[]): T {
  const suffix = location.jsonPath.slice(contentPathOf(location.jsonPath).length);
  return { ...location, jsonPath: `${usjJsonPathFromIndexes(indexes)}${suffix}` } as T;
}

/** Where a settled location has to be resolved: against the live tree at a restated path, or
 * inside one rebuilt scope's settled tree. */
type SettledTarget =
  | { kind: "live"; location: UsjDocumentLocation }
  | {
      kind: "scope";
      plan: SettleScopePlan;
      scratchIndexes: number[];
      location: UsjDocumentLocation;
    };

/**
 * The note scope whose note the path crosses, and at what depth — the settle that rebuilt a note's
 * CONTENT leaves every index above the note untouched, so the live tree can be walked down to the
 * note and only the remainder of the path is in settled coordinates.
 */
function $noteScopeOnPath(
  prepared: PreparedScopes,
  liveIndexes: number[],
): { plan: SettleScopePlan; depth: number } | undefined {
  let node: LexicalNode = $getRoot();
  for (let depth = 0; depth < liveIndexes.length; depth += 1) {
    if (!$isElementNode(node)) return undefined;
    const item = $getLogicalContentItems(node)[liveIndexes[depth]];
    if (item?.type !== "element") return undefined;
    node = item.node;
    const plan = prepared.byFirstLiveKey.get(node.getKey());
    if (plan?.kind === "note") return { plan, depth };
  }
  return undefined;
}

function $settledTarget(prepared: PreparedScopes, location: UsjDocumentLocation): SettledTarget {
  const indexes = indexesFromUsjJsonPath(contentPathOf(location.jsonPath));
  // The document root addresses itself: no top-level index to restate.
  if (indexes.length === 0) return { kind: "live", location };
  const top = prepared.settledToLiveTopIndex(indexes[0]);
  if (top.plan)
    return {
      kind: "scope",
      plan: top.plan,
      scratchIndexes: [top.indexWithinScope, ...indexes.slice(1)],
      location,
    };
  const liveIndexes = [top.liveIndex, ...indexes.slice(1)];
  const note = $noteScopeOnPath(prepared, liveIndexes);
  // The settled note sits at the scratch root's only content index.
  if (note)
    return {
      kind: "scope",
      plan: note.plan,
      scratchIndexes: [0, ...indexes.slice(note.depth + 1)],
      location,
    };
  return { kind: "live", location: withContentIndexes(location, liveIndexes) };
}

/** Every key in `node`'s subtree, `node` included. */
function $collectKeys(node: LexicalNode, out: Set<NodeKey>): void {
  out.add(node.getKey());
  if ($isElementNode(node)) node.getChildren().forEach((child) => $collectKeys(child, out));
}

/** The span a `(key, offset)` pair addresses, if the fragment carries one for that node. */
function spanFor(
  fragment: FragmentAccumulator,
  key: NodeKey,
  offset: number,
): FragmentSpan | undefined {
  return fragment.spans.find(
    (span) => !span.isSentinel && span.key === key && offset <= span.end - span.start,
  );
}

/**
 * The byte anchor for a point in a fragment's own tree, plus the byte of `fragment.text` it
 * anchored at. A text point anchors on its own bytes; an ELEMENT point is a boundary between
 * children, which anchors at the END of the last byte before it — the one spelling that is stable
 * when the boundary happens to sit in front of a preserved node, whose inner bytes are not
 * addressable at all.
 *
 * Read-only: resolves span node keys, so call inside a read of the tree the fragment was built
 * over.
 */
function $anchorForPoint(
  fragment: FragmentAccumulator,
  node: LexicalNode,
  offset: number,
): { anchor: CaretByteAnchor; position: number } | undefined {
  const anchored = (key: NodeKey, keyOffset: number) => {
    const anchor = $caretSpanByteAnchor(fragment, key, keyOffset);
    const span = spanFor(fragment, key, keyOffset);
    return anchor && span ? { anchor, position: span.start + keyOffset } : undefined;
  };
  if (!$isElementNode(node)) return anchored(node.getKey(), offset);
  const before = new Set<NodeKey>();
  node
    .getChildren()
    .slice(0, offset)
    .forEach((child) => $collectKeys(child, before));
  const last = [...fragment.spans].reverse().find((span) => before.has(span.key));
  if (last) {
    // Deliberately not through `anchored`: the span before the boundary may be a preserved node's
    // one-byte SENTINEL, which `spanFor` refuses (its inner bytes are not addressable). The END of
    // that byte is exactly what this boundary means — just past the construct — and
    // `$caretSpanByteAnchor` spells a sentinel's end without trouble. A boundary in FRONT of a
    // sentinel is the case that genuinely has no spelling, and it is the fragment-start branch
    // below that refuses it.
    const keyOffset = last.end - last.start;
    const anchor = $caretSpanByteAnchor(fragment, last.key, keyOffset);
    return anchor ? { anchor, position: last.start + keyOffset } : undefined;
  }
  // Nothing before the boundary: it is the fragment's own start, which only a non-sentinel first
  // span can express — a sentinel anchor counts its placeholder byte and would land PAST the
  // construct rather than in front of it.
  const first = fragment.spans[0];
  return first && !first.isSentinel ? anchored(first.key, 0) : undefined;
}

/** What resolving a settled location inside a scope's scratch tree produced. Plain data only: a
 * live node must never be carried into a scratch read, nor a scratch node out of one. */
type ScratchResolution =
  | {
      kind: "anchor";
      anchor: CaretByteAnchor;
      /** Whether the settled byte the anchor names is NOT whitespace, so a live position that
       * lands inside a whitespace run the settle normalized has to keep going to the word. */
      atWordByte: boolean;
    }
  | {
      kind: "preserved";
      /** Which of the fragment's preserved node runs the point landed in. */
      sentinelIndex: number;
      /** Which node of that run. */
      memberIndex: number;
      /** Child indexes from that node down to the point's own node. */
      path: number[];
      offset: number;
      type: "text" | "element";
      /** The same point as a byte anchor over the member note's content, for the case where the
       * live note is settling too and its content is therefore NOT the same subtree. */
      noteAnchor: CaretByteAnchor | undefined;
    };

/** The preserved run member whose subtree holds `node`, if any. */
function $preservedRunMember(
  fragment: FragmentAccumulator,
  node: LexicalNode,
): { sentinelIndex: number; memberIndex: number; member: LexicalNode } | undefined {
  const members = new Map<
    NodeKey,
    { sentinelIndex: number; memberIndex: number; member: LexicalNode }
  >();
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

/** Child indexes from `ancestor` down to `node`, or `undefined` when `node` is not under it. */
function $childPath(ancestor: LexicalNode, node: LexicalNode): number[] | undefined {
  const path: number[] = [];
  for (let current: LexicalNode | null = node; current; current = current.getParent()) {
    if (current.is(ancestor)) return path;
    path.unshift(current.getIndexWithinParent());
  }
  return undefined;
}

/** Resolve a settled location inside `plan`'s scratch tree. Call inside a read of that tree. */
function $resolveInScratch(
  fragment: FragmentAccumulator,
  location: UsjDocumentLocation,
  tier2: Tier2Context,
): ScratchResolution | undefined {
  const [node, offset] = $getNodeFromLocation(location);
  if (!node || offset === undefined) return undefined;
  const preserved = $preservedRunMember(fragment, node);
  if (!preserved) {
    const anchored = $anchorForPoint(fragment, node, offset);
    if (!anchored) return undefined;
    const byte = fragment.text[anchored.position];
    return {
      kind: "anchor",
      anchor: anchored.anchor,
      atWordByte: byte !== undefined && !WHITESPACE.test(byte),
    };
  }
  const path = $childPath(preserved.member, node);
  if (!path) return undefined;
  const noteContent = $isNoteNode(preserved.member)
    ? $buildNoteFragment(preserved.member, tier2.getMarker, tier2.viewOptions)?.out
    : undefined;
  return {
    kind: "preserved",
    sentinelIndex: preserved.sentinelIndex,
    memberIndex: preserved.memberIndex,
    path,
    offset,
    type: $isElementNode(node) ? "element" : "text",
    noteAnchor: noteContent && $anchorForPoint(noteContent, node, offset)?.anchor,
  };
}

/**
 * Move a live point forward over whitespace the settle normalized away. A settled position that
 * names a word's first byte must name that byte live too — the cut a transient declaration leaves
 * behind can put two spaces where the settled document shows one, and the byte anchor's
 * whitespace tolerance then stops inside the run rather than at the word.
 */
function advancePastWhitespace(fragment: FragmentAccumulator, point: FragmentPoint): FragmentPoint {
  if (point.type !== "text") return point;
  const span = spanFor(fragment, point.key, point.offset);
  if (!span) return point;
  const length = span.end - span.start;
  let offset = point.offset;
  while (offset < length && WHITESPACE.test(fragment.text[span.start + offset])) offset += 1;
  return offset === point.offset ? point : { ...point, offset };
}

/**
 * Restate a live point in the live node's OWN coordinates when the scope's declared transient
 * bytes were cut out of its fragment: the mapping ran over a fragment those bytes were missing
 * from, so every offset at or past the cut is short by their length.
 */
function cutCorrected(
  plan: SettleScopePlan,
  point: FragmentPoint | undefined,
): FragmentPoint | undefined {
  const cut = plan.liveCut;
  if (!point || !cut || point.type !== "text" || point.key !== cut.key) return point;
  return point.offset >= cut.nodeOffset ? { ...point, offset: point.offset + cut.length } : point;
}

/**
 * The live preserved-run member a settled one came from — {@link SettleScopePlan.sentinelMap} read
 * backwards. `undefined` when the settled document's run is one the live tree has no counterpart
 * for, which is a position no live node can answer.
 */
function liveRunMember(
  sentinelMap: readonly (readonly (SettledRunMember | undefined)[])[],
  settled: SettledRunMember,
): SettledRunMember | undefined {
  for (let sentinelIndex = 0; sentinelIndex < sentinelMap.length; sentinelIndex += 1) {
    const run = sentinelMap[sentinelIndex];
    for (let memberIndex = 0; memberIndex < run.length; memberIndex += 1) {
      const entry = run[memberIndex];
      if (
        entry?.sentinelIndex === settled.sentinelIndex &&
        entry.memberIndex === settled.memberIndex
      )
        return { sentinelIndex, memberIndex };
    }
  }
  return undefined;
}

/** The live point for a settled point that landed inside a preserved node run. */
function $livePointInPreservedRun(
  prepared: PreparedScopes,
  plan: SettleScopePlan,
  sentinelMap: readonly (readonly (SettledRunMember | undefined)[])[],
  resolved: Extract<ScratchResolution, { kind: "preserved" }>,
): FragmentPoint | undefined {
  const live = liveRunMember(sentinelMap, resolved);
  const member = live && plan.liveFragment?.sentinels[live.sentinelIndex]?.[live.memberIndex];
  // A memoized plan holds live node references, and the tree can have moved on under it (an undo,
  // a host `setUsj`). Refuse such a position rather than walk a detached node, whose ancestors and
  // offsets no longer describe anything the host can resolve against.
  if (!member?.isAttached()) return undefined;
  // A note that is ALSO settling was handed through this scope as its SETTLED self, so its live
  // content is not the same subtree — that one crosses by its own fragment bytes instead, and
  // REFUSES when it has no bytes to cross by. Falling through to the child walk below would spell
  // a SETTLED child path against LIVE children, which resolves to whatever node happens to sit at
  // that index.
  const notePlan = prepared.byFirstLiveKey.get(member.getKey());
  if (notePlan?.kind === "note")
    return resolved.noteAnchor && notePlan.liveFragment
      ? cutCorrected(
          notePlan,
          $resolveFragmentByteAnchor(notePlan.liveFragment, resolved.noteAnchor),
        )
      : undefined;
  let node: LexicalNode = member;
  for (const index of resolved.path) {
    if (!$isElementNode(node)) return undefined;
    const child = node.getChildAtIndex(index);
    if (!child) return undefined;
    node = child;
  }
  return { key: node.getKey(), offset: resolved.offset, type: resolved.type };
}

/** The live point for a settled location inside a rebuilt scope. */
function $livePointInScope(
  context: SettledPositionContext,
  prepared: PreparedScopes,
  target: Extract<SettledTarget, { kind: "scope" }>,
): FragmentPoint | undefined {
  const { plan } = target;
  const { liveFragment, scratchFragment, sentinelMap } = plan;
  // No correspondence between the two sides' preserved runs means no shared byte coordinates
  // either: refuse the whole scope rather than answer a position the two documents disagree about.
  if (!liveFragment || !scratchFragment || !sentinelMap) return undefined;
  const scratchLocation = withContentIndexes(target.location, target.scratchIndexes);
  const resolved = plan.scratch
    .getEditorState()
    .read(() => $resolveInScratch(scratchFragment, scratchLocation, context.tier2));
  if (!resolved) return undefined;
  if (resolved.kind === "preserved")
    return $livePointInPreservedRun(prepared, plan, sentinelMap, resolved);
  // A location that names USFM bytes rather than USJ content wants those bytes back, including
  // the ones no caret can rest in; a text location wants the caret's own addressing.
  const point = $resolveFragmentByteAnchor(liveFragment, resolved.anchor, {
    addressDisplayBytes: !isUsjTextContentLocation(target.location),
  });
  if (!point) return undefined;
  return cutCorrected(
    plan,
    resolved.atWordByte ? advancePastWhitespace(liveFragment, point) : point,
  );
}

/**
 * The live node and offset a SETTLED location addresses, or `undefined` when it cannot be carried
 * across (a scope whose bytes could not be fragmented, or a path that does not resolve in the
 * settled document either).
 *
 * Call inside a read of the LIVE editor state, with `prepared` from the same read.
 */
export function $livePointFromSettledLocation(
  context: SettledPositionContext,
  prepared: PreparedScopes,
  location: UsjDocumentLocation,
): FragmentPoint | undefined {
  const target = $settledTarget(prepared, location);
  if (target.kind === "scope") return $livePointInScope(context, prepared, target);
  const [node, offset] = $getNodeFromLocation(target.location);
  if (!node || offset === undefined) return undefined;
  return { key: node.getKey(), offset, type: $isElementNode(node) ? "element" : "text" };
}

/** The same location, addressed against the live document. */
function $liveLocationFromSettled(
  context: SettledPositionContext,
  prepared: PreparedScopes,
  location: UsjDocumentLocation,
): UsjDocumentLocation | undefined {
  const target = $settledTarget(prepared, location);
  // Outside every rebuilt scope only the top-level index moves, and restating it keeps the
  // location's own subtype and offsets exactly as the host wrote them — resolving and
  // re-reporting it would put it through the snapping rules a second time.
  if (target.kind === "live") return target.location;
  const point = $livePointInScope(context, prepared, target);
  const node = point && $getNodeByKey(point.key);
  return node ? $getLocationFromNode(node, point.offset) : undefined;
}

/**
 * `settled` restated in LIVE coordinates, so the editor's existing resolvers
 * (`$getRangeFromUsjSelection`, the annotation plugin, `$insertNote`) consume it unchanged — or
 * `undefined` when an endpoint cannot be carried across, which a caller must treat as "refuse",
 * never as "resolve it anyway".
 *
 * Call inside a read of the LIVE editor state, with `prepared` from the same read.
 */
export function $liveSelectionFromSettled<T extends SelectionRange | AnnotationRange>(
  context: SettledPositionContext,
  prepared: PreparedScopes,
  settled: T,
): T | undefined {
  // Nothing was rebuilt, so the settled document IS the live tree and the host's own coordinates
  // already address it.
  if (prepared.byFirstLiveKey.size === 0) return settled;
  const start = $liveLocationFromSettled(context, prepared, settled.start);
  if (!start) return undefined;
  if (!settled.end) return { ...settled, start };
  const end = $liveLocationFromSettled(context, prepared, settled.end);
  if (!end) return undefined;
  return { ...settled, start, end };
}

/** `location`'s top-level index restated in settled coordinates. Nothing below the top level
 * moves: a scope the settle did not rebuild keeps its own structure, and only how many settled
 * items each PRECEDING pending scope becomes can shift it. */
function settledTopTranslated<T extends UsjDocumentLocation>(
  prepared: PreparedScopes,
  location: T,
): T {
  const indexes = indexesFromUsjJsonPath(contentPathOf(location.jsonPath));
  if (indexes.length === 0) return location;
  return withContentIndexes(location, [
    prepared.liveToSettledTopIndex(indexes[0]),
    ...indexes.slice(1),
  ]);
}

/** The scope `plan`'s own nodes ride INSIDE, if any — never `plan` itself. A note is the only
 * scope kind that can be nested: paragraphs and chapters are top-level. */
function $enclosingPlan(
  prepared: PreparedScopes,
  plan: SettleScopePlan,
): SettleScopePlan | undefined {
  const parent = plan.liveNodes[0].getParent();
  const enclosing = parent ? prepared.planContaining(parent) : undefined;
  return enclosing === plan ? undefined : enclosing;
}

/**
 * Where a scope's own settled content sits, in settled content indexes — or `undefined` when that
 * cannot be determined, which a caller must treat as "refuse".
 *
 * For a scope nothing encloses, that is the scope's live path (the same walk
 * `$getLocationFromNode` builds a `jsonPath` from) with its top-level index restated: the scope
 * settles in place, so only the index above it moves.
 *
 * A note settling inside a settling paragraph is NOT that case. It rides through the paragraph's
 * rebuild as a preserved node, and the rebuild re-indexes the paragraph's content around it — a
 * spliced-out husk before the note, a literal that tokenizes into several items — so the note's
 * live index within its paragraph names a DIFFERENT settled item. Ask the enclosing scope where
 * the note actually landed, through the same preserved-run correspondence every other position in
 * that scope crosses by. Terminates: each step moves strictly up the tree.
 */
function $settledScopePath(prepared: PreparedScopes, plan: SettleScopePlan): number[] | undefined {
  const node = plan.liveNodes[0];
  const enclosing = $enclosingPlan(prepared, plan);
  if (enclosing) {
    const located = $settledLocationInScope(prepared, enclosing, node, 0);
    return located && indexesFromUsjJsonPath(contentPathOf(located.jsonPath));
  }
  const indexes = $getJsonPathIndexes(node);
  if (indexes.length === 0) return indexes;
  return [prepared.liveToSettledTopIndex(indexes[0]), ...indexes.slice(1)];
}

/**
 * A scratch-relative path restated against the settled document. A paragraph or chapter scope's
 * scratch root children ARE settled top-level items, so the scope's own top index counts them
 * off; a note scope's scratch root holds the one settled note, which sits exactly where the live
 * note sat.
 */
function settledPathFromScratch(
  plan: SettleScopePlan,
  scopePath: number[] | undefined,
  scratchIndexes: number[],
): number[] | undefined {
  if (!scopePath) return undefined;
  const [scratchTop, ...rest] = scratchIndexes;
  if (scratchTop === undefined) return undefined;
  if (plan.kind === "note") return scratchTop === 0 ? [...scopePath, ...rest] : undefined;
  const top = scopePath[0];
  return top === undefined ? undefined : [top + scratchTop, ...rest];
}

/**
 * A live offset restated in the scope's CUT fragment coordinates — the inverse of
 * {@link cutCorrected}. The declared transient bytes were removed from the fragment the two sides
 * are paired through, so an offset past them is that much further along in the node's own text
 * than it is in the fragment. An offset INSIDE the declared run has no fragment byte at all,
 * those bytes being absent from the settled document, so it collapses onto where the run started.
 */
function cutFragmentOffset(plan: SettleScopePlan, node: LexicalNode, offset: number): number {
  const cut = plan.liveCut;
  if (!cut || node.getKey() !== cut.key || offset <= cut.nodeOffset) return offset;
  return Math.max(cut.nodeOffset, offset - cut.length);
}

/** The settled location for a live point inside a preserved node run: the settle handed the same
 * subtree through, so only which run member it is and the child path down to it cross over. Call
 * inside a read of the scratch tree. */
function $settledLocationInPreservedRun(
  scratchFragment: FragmentAccumulator,
  settled: SettledRunMember,
  path: readonly number[],
  offset: number,
): UsjDocumentLocation | undefined {
  let node = scratchFragment.sentinels[settled.sentinelIndex]?.[settled.memberIndex];
  if (!node) return undefined;
  for (const index of path) {
    if (!$isElementNode(node)) return undefined;
    const child = node.getChildAtIndex(index);
    if (!child) return undefined;
    node = child;
  }
  return $getLocationFromNode(node, offset);
}

/** Where a live point lands in its scope's settled tree, in that tree's OWN coordinates. */
function $scratchLocationFromLivePoint(
  plan: SettleScopePlan,
  sentinelMap: readonly (readonly (SettledRunMember | undefined)[])[],
  liveFragment: FragmentAccumulator,
  scratchFragment: FragmentAccumulator,
  node: LexicalNode,
  offset: number,
): UsjDocumentLocation | undefined {
  const preserved = $preservedRunMember(liveFragment, node);
  if (preserved) {
    const path = $childPath(preserved.member, node);
    if (!path) return undefined;
    const settled = sentinelMap[preserved.sentinelIndex]?.[preserved.memberIndex];
    if (!settled) return undefined;
    // Plain data only across the scratch boundary: a live node must never be carried into a
    // scratch read.
    return plan.scratch
      .getEditorState()
      .read(() => $settledLocationInPreservedRun(scratchFragment, settled, path, offset));
  }
  const anchored = $anchorForPoint(liveFragment, node, cutFragmentOffset(plan, node, offset));
  if (!anchored) return undefined;
  const { anchor } = anchored;
  // The mirror of the inbound addressing choice, decided the same way: a live position that names
  // USFM bytes wants the settled spelling of those bytes, including the ones no caret can rest
  // in; a position in ordinary content is a caret, and keeps the caret's own addressing — which
  // at an exact boundary spells itself as the end of the run it is leaving rather than as the
  // construct that happens to start there.
  const addressDisplayBytes = !isUsjTextContentLocation($getLocationFromNode(node, offset));
  return plan.scratch.getEditorState().read(() => {
    const point = $resolveFragmentByteAnchor(scratchFragment, anchor, { addressDisplayBytes });
    const settledNode = point && $getNodeByKey(point.key);
    return settledNode ? $getLocationFromNode(settledNode, point.offset) : undefined;
  });
}

/** The settled location for a live point inside a rebuilt scope. */
function $settledLocationInScope(
  prepared: PreparedScopes,
  plan: SettleScopePlan,
  node: LexicalNode,
  offset: number,
): UsjDocumentLocation | undefined {
  const { liveFragment, scratchFragment, sentinelMap } = plan;
  // Same refusal as the inbound side, for the same reason: without a run correspondence the two
  // sides share no byte coordinates to report a position in.
  if (!liveFragment || !scratchFragment || !sentinelMap) return undefined;
  const scratchLocation = $scratchLocationFromLivePoint(
    plan,
    sentinelMap,
    liveFragment,
    scratchFragment,
    node,
    offset,
  );
  if (!scratchLocation) return undefined;
  const indexes = settledPathFromScratch(
    plan,
    $settledScopePath(prepared, plan),
    indexesFromUsjJsonPath(contentPathOf(scratchLocation.jsonPath)),
  );
  return indexes && withContentIndexes(scratchLocation, indexes);
}

/**
 * The SETTLED location a live point addresses — what a host, whose only view of the document is
 * `getUsj()`, can actually resolve — or `undefined` when the position cannot be carried across (a
 * scope whose bytes could not be fragmented, or a point the scope's settled tree has no byte for).
 *
 * Call inside a read of the LIVE editor state, with `prepared` from the same read.
 */
export function $settledLocationFromLivePoint(
  prepared: PreparedScopes,
  node: LexicalNode,
  offset: number,
): UsjDocumentLocation | undefined {
  const plan = prepared.planContaining(node);
  if (plan) return $settledLocationInScope(prepared, plan, node, offset);
  return settledTopTranslated(prepared, $getLocationFromNode(node, offset));
}

/**
 * The editor's current selection in SETTLED coordinates — `undefined` when there is no selection
 * to report, when the layout has no USJ locations at all, or when an endpoint cannot be carried
 * across, which a caller must treat as "refuse" rather than report a position that names the
 * wrong bytes.
 *
 * Call inside a read of the LIVE editor state, with `prepared` from the same read.
 */
export function $settledSelectionFromLive(prepared: PreparedScopes): SelectionRange | undefined {
  // Called even when a translation follows, and deliberately: "there is no range selection" and
  // "this layout has no USJ locations at all" are both properties of the live tree that a settle
  // cannot change, so they stay the editor's own reporter's answers rather than being restated
  // here. Two extra location reports is nothing beside preparing a scope.
  const live = $getUsjSelectionFromEditor();
  // Nothing was rebuilt, so the live tree IS the settled document and that reporter already
  // addressed it.
  if (!live || prepared.byFirstLiveKey.size === 0) return live;
  const selection = $getSelection();
  if (!$isRangeSelection(selection)) return undefined;
  const backward = selection.isBackward();
  const first = backward ? selection.focus : selection.anchor;
  const start = $settledLocationFromLivePoint(prepared, first.getNode(), first.offset);
  if (!start) return undefined;
  if (selection.isCollapsed()) return { start };
  const last = backward ? selection.anchor : selection.focus;
  const end = $settledLocationFromLivePoint(prepared, last.getNode(), last.offset);
  if (!end) return undefined;
  return { start, end };
}
