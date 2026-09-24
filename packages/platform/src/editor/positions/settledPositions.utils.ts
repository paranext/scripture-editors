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
  $isClosingMarkerSpan,
  $pointAfterClosingSpan,
  $resolveFragmentByteAnchor,
  CaretByteAnchor,
  FragmentAccumulator,
  FragmentPoint,
  FragmentSpan,
  Tier2Context,
} from "../markerEdit/tier2Rebuild.utils";
import {
  acrossLiteral,
  anchorAcrossLiteralsSnapped,
  FoldedAttribute,
  FRAGMENT_WS,
  literalContaining,
  literalStartingAt,
  SettledOnlyRun,
  SettledRunMember,
} from "../markerEdit/settledOnlyRuns.utils";
import { ByteAlignment, mapCount, mapCountSnapped } from "../markerEdit/usfmByteAlignment.utils";
import { SettledPositionContext, SettleScopePlan } from "./settledPositions.model";
import { PreparedScopes } from "./settledScopes.utils";
import {
  ContentJsonPath,
  PropertyJsonPath,
  UsjDocumentLocation,
  indexesFromUsjJsonPath,
  isUsjAttributeKeyLocation,
  isUsjAttributeMarkerLocation,
  isUsjClosingAttributeMarkerLocation,
  isUsjClosingMarkerLocation,
  isUsjMarkerLocation,
  isUsjPropertyValueLocation,
  isUsjTextContentLocation,
  usjJsonPathFromIndexes,
} from "@eten-tech-foundation/scripture-utilities";
import {
  $getNodeByKey,
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isRootNode,
  $isTextNode,
  LexicalNode,
  NodeKey,
} from "lexical";
import { LoggerBasic } from "shared";
import {
  $getLogicalContentItems,
  $getLogicalPointFromElementPoint,
  $isImpliedParaNode,
  $isMarkerNode,
  $isNoteNode,
} from "shared";
import {
  $getJsonPathIndexes,
  $getLocationFromNode,
  $getNodeFromLocation,
  $getUsjSelectionFromEditor,
  AnnotationRange,
  hasStandardViewWhitespace,
  SelectionRange,
  ViewOptions,
} from "shared-react";

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

/** Whether two index paths name the same node. */
function isSamePath(first: readonly number[], second: readonly number[]): boolean {
  return first.length === second.length && first.every((index, depth) => index === second[depth]);
}

/**
 * Whether `location` names bytes a note carries itself rather than through its content: its
 * marker, its caller, or its closing marker. A settle that rebuilds a note's CONTENT hands those
 * through unchanged, so a location on them means the same bytes on both sides.
 */
function isNoteOwnBytesLocation(location: UsjDocumentLocation): boolean {
  if (isUsjMarkerLocation(location) || isUsjClosingMarkerLocation(location)) return true;
  const property = propertyNameOf(location);
  return property === "marker" || property === "caller";
}

/** The `['property']` suffix of a property path, bracket spelling. */
const PROPERTY_SUFFIX = /^\['([^']+)'\]$/;

/** The property a property-value location names, or `undefined` for any other location. */
function propertyNameOf(location: UsjDocumentLocation): string | undefined {
  if (!isUsjPropertyValueLocation(location)) return undefined;
  return PROPERTY_SUFFIX.exec(
    location.jsonPath.slice(contentPathOf(location.jsonPath).length),
  )?.[1];
}

/** Whether `location` names `note`'s own marker, caller or closing marker. */
function $isOwnBytesLocationOf(location: UsjDocumentLocation, note: LexicalNode): boolean {
  return (
    isNoteOwnBytesLocation(location) &&
    isSamePath(indexesFromUsjJsonPath(contentPathOf(location.jsonPath)), $getJsonPathIndexes(note))
  );
}

/** The live point a location on a note's own bytes names, resolved against the LIVE note. */
function $livePointOnNoteOwnBytes(
  note: LexicalNode,
  location: UsjDocumentLocation,
  viewOptions: ViewOptions,
): FragmentPoint | undefined {
  // A memoized plan holds live node references the tree may have moved on from.
  if (!note.isAttached()) return undefined;
  const [node, offset] = $getNodeFromLocation(
    withContentIndexes(location, $getJsonPathIndexes(note)),
    viewOptions,
  );
  if (!node || offset === undefined) return undefined;
  return { key: node.getKey(), offset, type: $isElementNode(node) ? "element" : "text" };
}

/**
 * The byte `anchor` names when it lands INSIDE a closing (or self-closing) marker glyph's own
 * bytes — `offset > 0` in a `MarkerNode` whose syntax is not `"opening"`. A caret there rests on
 * that closer itself: caret addressing moves such a position past the glyph to the content after
 * it, which is right for continued typing but wrong for reporting where the caret actually is.
 * `undefined` for every other position, including offset 0 of a closer (the front of its own
 * glyph, indistinguishable from the position in front of it). Call inside a read of the tree
 * `fragment` was built over.
 */
function $closingGlyphByte(
  fragment: { text: string; spans: FragmentSpan[] },
  anchor: CaretByteAnchor,
): FragmentPoint | undefined {
  const byte = $resolveFragmentByteAnchor(fragment, anchor, { addressDisplayBytes: true });
  const glyph = byte && $getNodeByKey(byte.key);
  return byte && byte.offset > 0 && $isMarkerNode(glyph) && glyph.getMarkerSyntax() !== "opening"
    ? byte
    : undefined;
}

/**
 * The point just past a closing glyph that DIRECTLY precedes ANOTHER closing glyph `anchor`'s
 * target byte lands at the front of — offset 0 of a closer with no closer of its own to report
 * ({@link $closingGlyphByte} answers only `offset > 0`), such as a char span's `\w*` immediately
 * followed by its note's own `\f*`. Caret addressing skips both closers, and
 * `$resolveFragmentByteAnchor`'s own "ran past every addressable span" fallback only ever tries
 * the FRAGMENT's last span for a point past it ({@link $pointAfterClosingSpan}) — which fails
 * here, since a note's own closer has no enclosing char span to report a point past — so the
 * closer immediately before it never gets asked. A position just past a construct's bytes is
 * exact, so the answer is that PRECEDING closer's own "just past" point.
 *
 * Deliberately narrow: only when the byte's OWN target span is ALSO a closer. Offset 0 of an
 * ordinary span (plain content, or an opener) directly after a closer is already answered
 * correctly by the caret-addressed resolve — landing on that span's own front is exactly right
 * there, and routing it through the preceding closer's "just past" point instead would change a
 * working case's reported shape for no reason.
 *
 * `undefined` when the byte does not land at such a front, or the preceding span is not a closer
 * with one.
 */
function $afterPrecedingClosingGlyph(
  fragment: { text: string; spans: FragmentSpan[] },
  anchor: CaretByteAnchor,
): FragmentPoint | undefined {
  const byte = $resolveFragmentByteAnchor(fragment, anchor, { addressDisplayBytes: true });
  if (!byte || byte.offset !== 0) return undefined;
  const index = fragment.spans.findIndex((span) => span.key === byte.key);
  const target = fragment.spans[index];
  const previous = index > 0 ? fragment.spans[index - 1] : undefined;
  if (
    !target ||
    !$isClosingMarkerSpan(target) ||
    !previous ||
    previous.end !== target.start ||
    !$isClosingMarkerSpan(previous)
  )
    return undefined;
  return $pointAfterClosingSpan(previous);
}

/**
 * The scratch point a position inside a settled-only run's literal names in that run's spelling.
 * The literal is plain text the caret can rest anywhere in, including between the bytes of a
 * closing marker, which caret addressing would move past; so a byte that lands inside a closing
 * glyph keeps that byte, and every other position keeps the caret's own addressing. Call inside a
 * read of the scratch tree.
 */
function $pointInSpelling(
  spelling: FragmentAccumulator,
  within: CaretByteAnchor,
): FragmentPoint | undefined {
  const glyph = $closingGlyphByte(spelling, within);
  if (glyph) return glyph;
  const afterPrevious = $afterPrecedingClosingGlyph(spelling, within);
  if (afterPrevious) return afterPrevious;
  const point = $resolveFragmentByteAnchor(spelling, within);
  return point && pointAtSpanBoundary(spelling, point);
}

/**
 * `point` as the ONE location its USFM position has, when it sits at the very end of a span and so
 * names the same position as the start of the next one. A position in front of a marker is that
 * marker's (the next span starts with a backslash), and the position past the separator a span
 * ends in is where the content after it starts; anywhere else it is the end of its own span. The
 * caret's own addressing always prefers the end of the span it is leaving, which is right for a
 * caret and wrong for these two.
 */
function pointAtSpanBoundary(spelling: FragmentAccumulator, point: FragmentPoint): FragmentPoint {
  if (point.type !== "text") return point;
  const index = spelling.spans.findIndex((span) => span.key === point.key);
  const span = spelling.spans[index];
  const next = spelling.spans[index + 1];
  if (!span || !next || span.end === span.start || point.offset !== span.end - span.start)
    return point;
  const isInFrontOfMarker = spelling.text[next.start] === "\\";
  const isPastSeparator = FRAGMENT_WS.test(spelling.text[span.end - 1]);
  return isInFrontOfMarker || isPastSeparator ? { key: next.key, offset: 0, type: "text" } : point;
}

/**
 * Where the parts of a folded attribute's bytes start within them: `\cat x\cat*` is the attribute
 * marker's `\`, its name and the separator after it, the value, and the closing attribute marker.
 */
function foldedAttributeLayout(folded: FoldedAttribute) {
  const valueStart = folded.markerName.length + 2;
  const closerStart = valueStart + folded.valueLength;
  return { valueStart, closerStart, closerLength: folded.markerName.length + 2 };
}

/** The location of the byte `offset` into a folded attribute's bytes, on the owner at `jsonPath`.
 * A position in front of the closing attribute marker is that marker's, not the value's end. */
function foldedAttributeLocation(
  folded: FoldedAttribute,
  jsonPath: ContentJsonPath,
  offset: number,
): UsjDocumentLocation {
  const { keyName } = folded;
  const { valueStart, closerStart } = foldedAttributeLayout(folded);
  if (offset === 0) return { jsonPath, keyName };
  if (offset < valueStart) return { jsonPath, keyName, keyOffset: offset - 1 };
  if (offset < closerStart)
    return {
      jsonPath: `${jsonPath}['${keyName}']` as PropertyJsonPath,
      propertyOffset: offset - valueStart,
    };
  return { jsonPath, keyName, keyClosingMarkerOffset: offset - closerStart };
}

/** The byte `location` names within a folded attribute's bytes, or `undefined` when it names no
 * byte of them — an offset past the part it counts into. */
function foldedAttributeOffset(
  folded: FoldedAttribute,
  location: UsjDocumentLocation,
): number | undefined {
  const { valueStart, closerStart, closerLength } = foldedAttributeLayout(folded);
  const within = (offset: number, length: number, start: number) =>
    offset >= 0 && offset <= length ? start + offset : undefined;
  if (isUsjAttributeKeyLocation(location))
    return within(location.keyOffset, folded.markerName.length, 1);
  if (isUsjClosingAttributeMarkerLocation(location))
    return within(location.keyClosingMarkerOffset, closerLength, closerStart);
  if (isUsjAttributeMarkerLocation(location)) return 0;
  if (isUsjPropertyValueLocation(location))
    return within(location.propertyOffset, folded.valueLength, valueStart);
  return undefined;
}

/** The attribute a location names: its `keyName`, or the property a property value belongs to. */
function attributeNameOf(location: UsjDocumentLocation): string | undefined {
  if (
    isUsjAttributeKeyLocation(location) ||
    isUsjClosingAttributeMarkerLocation(location) ||
    isUsjAttributeMarkerLocation(location)
  )
    return location.keyName;
  return propertyNameOf(location);
}

/**
 * The settled location of a position inside a settled-only run's literal, given as a byte anchor
 * over the run's spelling. Call inside a read of the scratch tree.
 */
function $settledLocationInSpelling(
  run: SettledOnlyRun,
  within: CaretByteAnchor,
  viewOptions: ViewOptions,
): UsjDocumentLocation | undefined {
  const point = $pointInSpelling(run.spelling, within);
  const node = point && $getNodeByKey(point.key);
  if (!point || !node) return undefined;
  const folded = run.foldedAttributes.find((attribute) => attribute.ownerKey === point.key);
  if (folded)
    return foldedAttributeLocation(
      folded,
      usjJsonPathFromIndexes($getJsonPathIndexes(node)),
      point.offset,
    );
  return $getLocationFromNode(node, point.offset, viewOptions);
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
    const item = $getLogicalContentItems(node, hasStandardViewWhitespace(prepared.viewOptions))[
      liveIndexes[depth]
    ];
    if (item?.type !== "element") return undefined;
    node = item.node;
    const plan = prepared.byFirstLiveKey.get(node.getKey());
    if (plan?.kind === "note") return { plan, depth };
  }
  return undefined;
}

/** Where `location` has to be resolved, or `undefined` when its top-level index names no item of
 * the settled document at all. */
function $settledTarget(
  prepared: PreparedScopes,
  location: UsjDocumentLocation,
): SettledTarget | undefined {
  const indexes = indexesFromUsjJsonPath(contentPathOf(location.jsonPath));
  if (indexes.length === 0) {
    // The document root addresses itself: no top-level index to restate — except in the older
    // root-and-index spelling of a gap between blocks, whose index is a top-level index like any
    // other.
    if (!isUsjTextContentLocation(location)) return { kind: "live", location };
    const next = prepared.settledToLiveTopIndex(location.offset);
    // Past the settled document's last block is the end of the document, live as well.
    if (!next) {
      const liveCount = $getLogicalContentItems(
        $getRoot(),
        hasStandardViewWhitespace(prepared.viewOptions),
      ).length;
      return { kind: "live", location: { ...location, offset: liveCount } };
    }
    // In front of a block a settle rebuilt is in front of whatever that block's settled start is.
    if (next.plan && next.indexWithinScope > 0)
      return $settledTarget(prepared, { jsonPath: usjJsonPathFromIndexes([location.offset]) });
    return { kind: "live", location: { ...location, offset: next.liveIndex } };
  }
  const top = prepared.settledToLiveTopIndex(indexes[0]);
  if (!top) return undefined;
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
 * addressable at all. A boundary in front of all of an element's own content is where that
 * element starts, so it anchors on the element's first byte when there is one to anchor on.
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
  // Deliberately not through `anchored`: the span before the boundary may be a preserved node's
  // one-byte SENTINEL, which `spanFor` refuses (its inner bytes are not addressable). The END of
  // that byte is exactly what the boundary means — just past the construct — and
  // `$caretSpanByteAnchor` spells a sentinel's end without trouble. A boundary in FRONT of a
  // sentinel is the case that genuinely has no spelling, and it is the fragment-start branch
  // below that refuses it.
  const anchoredAfter = (span: FragmentSpan) => {
    const keyOffset = span.end - span.start;
    const anchor = $caretSpanByteAnchor(fragment, span.key, keyOffset);
    return anchor ? { anchor, position: span.start + keyOffset } : undefined;
  };
  if (!$isElementNode(node)) return anchored(node.getKey(), offset);
  const before = new Set<NodeKey>();
  node
    .getChildren()
    .slice(0, offset)
    .forEach((child) => $collectKeys(child, before));
  const last = [...fragment.spans].reverse().find((span) => before.has(span.key));
  if (last) return anchoredAfter(last);

  // Nothing of the element's own is before the boundary, so it sits where the element starts —
  // the fragment's start only when the element opens the fragment. In front of the element's
  // first byte is the precise spelling: a boundary past the previous paragraph's last byte would
  // resolve into that paragraph wherever the two are joined by whitespace.
  const inside = new Set<NodeKey>();
  $collectKeys(node, inside);
  const firstInside = fragment.spans.find((span) => inside.has(span.key));
  if (firstInside && !firstInside.isSentinel) return anchored(firstInside.key, 0);
  // An element that opens with a preserved node, or holds no bytes at all, has no first byte to
  // stand in front of, so the boundary is spelled from the byte before the element instead.
  const lastOutside = [...fragment.spans]
    .reverse()
    .find((span) => !inside.has(span.key) && $getNodeByKey(span.key)?.isBefore(node));
  if (lastOutside) return anchoredAfter(lastOutside);
  // Nothing before the element either: it is the fragment's own start, which only a non-sentinel
  // first span can express — a sentinel anchor counts its placeholder byte and would land PAST the
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
      noteAnchor: { anchor: CaretByteAnchor; atWordByte: boolean } | undefined;
      /** Whether the location names the member note's own marker, caller or closing marker,
       * which a settle of the note's content hands through unchanged. */
      isNoteOwnBytes: boolean;
    }
  | {
      kind: "literal";
      /** The settled-only run the point landed in. */
      run: SettledOnlyRun;
      /** The point as a byte anchor over the run's spelling. */
      anchor: CaretByteAnchor;
      atWordByte: boolean;
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

/**
 * A settled location on a folded attribute's bytes ({@link FoldedAttribute}) — bytes the scratch
 * tree does not display, so `$getNodeFromLocation` has nothing to resolve them against — as a byte
 * of the literal that spells them. `undefined` when the location names no folded attribute;
 * `resolution` is `undefined` when it names one but no byte of it. Call inside a read of the
 * scratch tree.
 */
function $resolveFoldedAttribute(
  settledOnlyRuns: readonly SettledOnlyRun[],
  location: UsjDocumentLocation,
): { resolution: ScratchResolution | undefined } | undefined {
  const keyName = attributeNameOf(location);
  if (keyName === undefined) return undefined;
  const path = indexesFromUsjJsonPath(contentPathOf(location.jsonPath));
  for (const run of settledOnlyRuns)
    for (const folded of run.foldedAttributes) {
      const owner = $getNodeByKey(folded.ownerKey);
      if (folded.keyName !== keyName || !owner || !isSamePath($getJsonPathIndexes(owner), path))
        continue;
      const offset = foldedAttributeOffset(folded, location);
      const span = run.spelling.spans.find((candidate) => candidate.key === folded.ownerKey);
      const anchor =
        offset !== undefined && span
          ? $caretSpanByteAnchor(run.spelling, folded.ownerKey, offset)
          : undefined;
      if (offset === undefined || !span || !anchor) return { resolution: undefined };
      return {
        resolution: {
          kind: "literal",
          run,
          anchor,
          atWordByte: isWordByte(run.spelling, span.start + offset),
        },
      };
    }
  return undefined;
}

/** Resolve a settled location inside `plan`'s scratch tree. Call inside a read of that tree. */
function $resolveInScratch(
  fragment: FragmentAccumulator,
  settledOnlyRuns: readonly SettledOnlyRun[],
  location: UsjDocumentLocation,
  tier2: Tier2Context,
): ScratchResolution | undefined {
  const folded = $resolveFoldedAttribute(settledOnlyRuns, location);
  if (folded) return folded.resolution;
  const [node, offset] = $getNodeFromLocation(location, tier2.viewOptions);
  if (!node || offset === undefined) return undefined;
  const preserved = $preservedRunMember(fragment, node);
  const literal =
    preserved && settledOnlyRuns.find((run) => run.sentinelIndex === preserved.sentinelIndex);
  if (literal) {
    // The live side spells this run as literal bytes, so the point crosses by its byte in them.
    const anchored = $anchorForPoint(literal.spelling, node, offset);
    return (
      anchored && {
        kind: "literal",
        run: literal,
        anchor: anchored.anchor,
        atWordByte: isWordByte(literal.spelling, anchored.position),
      }
    );
  }
  if (!preserved) {
    const anchored = $anchorForPoint(fragment, node, offset);
    if (!anchored) return undefined;
    return {
      kind: "anchor",
      anchor: anchored.anchor,
      atWordByte: isWordByte(fragment, anchored.position),
    };
  }
  const path = $childPath(preserved.member, node);
  if (!path) return undefined;
  const noteContent = $isNoteNode(preserved.member)
    ? $buildNoteFragment(preserved.member, tier2.getMarker, tier2.viewOptions)?.out
    : undefined;
  const noteAnchored = noteContent && $anchorForPoint(noteContent, node, offset);
  return {
    kind: "preserved",
    sentinelIndex: preserved.sentinelIndex,
    memberIndex: preserved.memberIndex,
    path,
    offset,
    type: $isElementNode(node) ? "element" : "text",
    noteAnchor: noteAnchored && {
      anchor: noteAnchored.anchor,
      atWordByte: isWordByte(noteContent, noteAnchored.position),
    },
    isNoteOwnBytes:
      $isNoteNode(preserved.member) && $isOwnBytesLocationOf(location, preserved.member),
  };
}

/**
 * Whether a settled location names anything in `plan`'s scratch tree — the settled document's own
 * copy of the scope. A location that names nothing there names nothing a host can have read from
 * `getUsj()`, and is the one kind of settled location with no live point. Call inside a read of
 * the scratch tree.
 */
function $namesSomethingInScratch(
  settledOnlyRuns: readonly SettledOnlyRun[],
  location: UsjDocumentLocation,
  viewOptions: ViewOptions,
): boolean {
  const folded = $resolveFoldedAttribute(settledOnlyRuns, location);
  if (folded) return folded.resolution !== undefined;
  const [node, offset] = $getNodeFromLocation(location, viewOptions);
  return node !== undefined && offset !== undefined;
}

/** Whether the byte at `position` is part of a word rather than whitespace. */
function isWordByte(fragment: FragmentAccumulator, position: number): boolean {
  const byte = fragment.text[position];
  return byte !== undefined && !FRAGMENT_WS.test(byte);
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
  while (offset < length && FRAGMENT_WS.test(fragment.text[span.start + offset])) offset += 1;
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
 * for.
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

/** A plan's two fragments and the correspondence between them, when it has all of them. */
interface PairedSides {
  liveFragment: FragmentAccumulator;
  scratchFragment: FragmentAccumulator;
  sentinelMap: readonly (readonly (SettledRunMember | undefined)[])[];
  alignment: ByteAlignment;
}

function pairedSides(plan: SettleScopePlan): PairedSides | undefined {
  const { liveFragment, scratchFragment, sentinelMap, alignment } = plan;
  return liveFragment && scratchFragment && sentinelMap && alignment
    ? { liveFragment, scratchFragment, sentinelMap, alignment }
    : undefined;
}

/**
 * The live point at the front of a scope: the start of a paragraph or chapter's content, or in
 * front of a note. Where a settled location inside the scope lands when the scope's bytes cannot
 * be lined up with the settled ones — a fragment builder that does not cover the scope's shape —
 * so the host's position still reaches the scope it named rather than being dropped. `undefined`
 * only for a memoized plan whose nodes the tree has moved on from.
 */
function $liveScopeFront(
  plan: SettleScopePlan,
  logger: LoggerBasic | undefined,
): FragmentPoint | undefined {
  logger?.warn(
    `[positions] A settled location in a pending ${plan.kind} scope could not be lined up with ` +
      "its live bytes; it resolves to the front of the scope.",
  );
  const first = plan.liveNodes[0];
  if (!first.isAttached()) return undefined;
  if (plan.kind !== "note" && $isElementNode(first))
    return { key: first.getKey(), offset: 0, type: "element" };
  const parent = first.getParent();
  return parent
    ? { key: parent.getKey(), offset: first.getIndexWithinParent(), type: "element" }
    : undefined;
}

/** How many non-whitespace bytes of `fragment` precede each preserved run's placeholder, or
 * `undefined` for a run whose placeholder was cut out (a run the settle dropped). */
function placeholderCounts(fragment: FragmentAccumulator): (number | undefined)[] {
  const counts: (number | undefined)[] = [];
  let count = 0;
  for (const span of fragment.spans) {
    if (span.isSentinel) counts.push(span.end > span.start ? count : undefined);
    for (let position = span.start; position < span.end; position += 1)
      if (!FRAGMENT_WS.test(fragment.text[position])) count += 1;
  }
  return counts;
}

/**
 * The live point for a settled point inside a preserved run the live side has no member for: a
 * run the pairing could not match up, or one the settle made from typed bytes that the alignment
 * could not find a literal for. It lands in front of the live run whose placeholder lines up with
 * the settled one, when there is one, and otherwise in front of whatever live byte the settled
 * placeholder lines up with, snapping left.
 */
function $livePointForUnpairedRun(
  plan: SettleScopePlan,
  sides: PairedSides,
  sentinelIndex: number,
  logger: LoggerBasic | undefined,
): FragmentPoint | undefined {
  const { liveFragment, scratchFragment, alignment } = sides;
  const settledCount = placeholderCounts(scratchFragment)[sentinelIndex];
  if (settledCount === undefined) return $liveScopeFront(plan, logger);
  const liveIndex = placeholderCounts(liveFragment).findIndex(
    (count) => count !== undefined && mapCount(alignment, count, "live") === settledCount,
  );
  const first = liveIndex < 0 ? undefined : liveFragment.sentinels[liveIndex]?.[0];
  const parent = first?.isAttached() ? first.getParent() : undefined;
  if (first && parent)
    return { key: parent.getKey(), offset: first.getIndexWithinParent(), type: "element" };
  const point = $resolveFragmentByteAnchor(liveFragment, {
    nonWsBefore: mapCountSnapped(alignment, settledCount, "settled"),
    wsRun: 0,
    attributeRunSpans: 0,
  });
  return point ? cutCorrected(plan, point) : $liveScopeFront(plan, logger);
}

/**
 * The live point a byte anchor over `plan`'s SETTLED fragment names, through the plan's byte
 * alignment — snapping left when the byte it sits in front of has no live counterpart. `location`
 * is the settled location the anchor came from: one that names USFM bytes rather than USJ content
 * wants those bytes back, including the ones no caret can rest in, and a text location wants the
 * caret's own addressing. A plan that cannot line its bytes up answers with the scope's front.
 */
function $livePointFromAnchor(
  plan: SettleScopePlan,
  anchor: CaretByteAnchor,
  atWordByte: boolean,
  location: UsjDocumentLocation,
  logger: LoggerBasic | undefined,
): FragmentPoint | undefined {
  const sides = pairedSides(plan);
  if (!sides) return $liveScopeFront(plan, logger);
  const addressDisplayBytes = !isUsjTextContentLocation(location);
  const liveAnchor = $withWsRunIn(
    sides.liveFragment,
    anchorAcrossLiteralsSnapped(sides.alignment, anchor, "toLive"),
    addressDisplayBytes,
  );
  const point = $resolveFragmentByteAnchor(sides.liveFragment, liveAnchor, {
    addressDisplayBytes,
  });
  if (!point) return $liveScopeFront(plan, logger);
  return cutCorrected(plan, atWordByte ? advancePastWhitespace(sides.liveFragment, point) : point);
}

/** The live point for a settled point that landed inside a preserved node run. */
function $livePointInPreservedRun(
  prepared: PreparedScopes,
  plan: SettleScopePlan,
  sides: PairedSides,
  resolved: Extract<ScratchResolution, { kind: "preserved" }>,
  location: UsjDocumentLocation,
  logger: LoggerBasic | undefined,
): FragmentPoint | undefined {
  const live = liveRunMember(sides.sentinelMap, resolved);
  if (!live) return $livePointForUnpairedRun(plan, sides, resolved.sentinelIndex, logger);
  const member = sides.liveFragment.sentinels[live.sentinelIndex]?.[live.memberIndex];
  // A memoized plan holds live node references, and the tree can have moved on under it (an undo,
  // a host `setUsj`). Refuse such a position rather than walk a detached node, whose ancestors and
  // offsets no longer describe anything the host can resolve against.
  if (!member?.isAttached()) return undefined;
  // A note that is ALSO settling was handed through this scope as its SETTLED self, so its live
  // content is not the same subtree — that one crosses by its own fragment bytes instead, and lands
  // at the note's front when it has no bytes to cross by. Falling through to the child walk below
  // would spell a SETTLED child path against LIVE children, which resolves to whatever node happens
  // to sit at that index.
  const notePlan = prepared.byFirstLiveKey.get(member.getKey());
  // The note's own marker, caller and closing glyph are outside its content, and a content settle
  // hands them through unchanged: resolve them against the live note itself.
  if (notePlan?.kind === "note" && resolved.isNoteOwnBytes)
    return $livePointOnNoteOwnBytes(member, location, prepared.viewOptions);
  if (notePlan?.kind === "note")
    return resolved.noteAnchor
      ? $livePointFromAnchor(
          notePlan,
          resolved.noteAnchor.anchor,
          resolved.noteAnchor.atWordByte,
          location,
          logger,
        )
      : $liveScopeFront(notePlan, logger);
  let node: LexicalNode = member;
  for (const index of resolved.path) {
    if (!$isElementNode(node)) return undefined;
    const child = node.getChildAtIndex(index);
    if (!child) return undefined;
    node = child;
  }
  return { key: node.getKey(), offset: resolved.offset, type: resolved.type };
}

/**
 * The live point past a top-level scope's last node, when `scratchLocation` is the end of the
 * scope's settled tree — one past its last token, which is how the end of the document is spelled
 * when the scope is the document's last. No byte anchor can spell it: it lies past every byte the
 * scope has.
 */
function $livePointPastScope(
  plan: SettleScopePlan,
  scratchLocation: UsjDocumentLocation,
  viewOptions: ViewOptions,
): FragmentPoint | undefined {
  const isScratchEnd = plan.scratch.getEditorState().read(() => {
    const [node, offset] = $getNodeFromLocation(scratchLocation, viewOptions);
    return $isRootNode(node) && offset !== undefined && offset >= node.getChildrenSize();
  });
  if (!isScratchEnd) return undefined;
  const last = plan.liveNodes[plan.liveNodes.length - 1];
  const parent = last.getParent();
  if (!$isRootNode(parent)) return undefined;
  return { key: parent.getKey(), offset: last.getIndexWithinParent() + 1, type: "element" };
}

/**
 * The live point for a settled location inside a rebuilt scope — `undefined` only when the
 * location names nothing in the scope's settled tree (or, as a backstop, when a memoized plan no
 * longer describes the live tree). Every location that does name something has a live point: its
 * own bytes' counterpart, or where the bytes in front of it snap LEFT to.
 */
function $livePointInScope(
  context: SettledPositionContext,
  prepared: PreparedScopes,
  target: Extract<SettledTarget, { kind: "scope" }>,
): FragmentPoint | undefined {
  const { plan } = target;
  const { logger, viewOptions } = context.tier2;
  // A location on the note's own bytes names the note itself, not a byte of its content fragment,
  // so it needs no byte correspondence at all.
  if (
    plan.kind === "note" &&
    target.scratchIndexes.length === 1 &&
    isNoteOwnBytesLocation(target.location)
  )
    return $livePointOnNoteOwnBytes(plan.liveNodes[0], target.location, prepared.viewOptions);
  const scratchLocation = withContentIndexes(target.location, target.scratchIndexes);
  const namesSomething = plan.scratch
    .getEditorState()
    .read(() => $namesSomethingInScratch(plan.settledOnlyRuns, scratchLocation, viewOptions));
  if (!namesSomething) return undefined;
  const pastScope = $livePointPastScope(plan, scratchLocation, viewOptions);
  if (pastScope) return pastScope;
  const sides = pairedSides(plan);
  if (!sides) return $liveScopeFront(plan, logger);
  const resolved = plan.scratch
    .getEditorState()
    .read(() =>
      $resolveInScratch(
        sides.scratchFragment,
        plan.settledOnlyRuns,
        scratchLocation,
        context.tier2,
      ),
    );
  if (!resolved) return $liveScopeFront(plan, logger);
  if (resolved.kind === "preserved")
    return $livePointInPreservedRun(prepared, plan, sides, resolved, target.location, logger);
  if (resolved.kind === "literal") {
    const { run, anchor } = resolved;
    // Over the literal's bytes in the live fragment. A point in front of the run's first byte
    // stands in front of the literal, past any whitespace the live bytes put before it; a byte
    // the settle spelled differently from what was typed snaps left to where the typed bytes it
    // stands for start.
    const count =
      acrossLiteral(run, anchor.nonWsBefore, "toLiteral") ??
      mapCountSnapped(run.inner, anchor.nonWsBefore, "settled");
    const addressDisplayBytes = !isUsjTextContentLocation(target.location);
    const liveAnchor = $withWsRunIn(
      sides.liveFragment,
      {
        nonWsBefore: run.liveBefore.full + count,
        wsRun: anchor.nonWsBefore === 0 ? run.liveWsBefore + anchor.wsRun : anchor.wsRun,
        attributeRunSpans: 0,
      },
      addressDisplayBytes,
    );
    const point = $resolveFragmentByteAnchor(sides.liveFragment, liveAnchor, {
      addressDisplayBytes,
    });
    if (!point) return $liveScopeFront(plan, logger);
    return cutCorrected(
      plan,
      resolved.atWordByte ? advancePastWhitespace(sides.liveFragment, point) : point,
    );
  }
  return $livePointFromAnchor(plan, resolved.anchor, resolved.atWordByte, target.location, logger);
}

/**
 * The live node and offset a SETTLED location addresses, or `undefined` when the location names
 * nothing in the settled document (or, as a backstop, when a memoized plan no longer describes the
 * live tree).
 *
 * Call inside a read of the LIVE editor state, with `prepared` from the same read.
 */
export function $livePointFromSettledLocation(
  context: SettledPositionContext,
  prepared: PreparedScopes,
  location: UsjDocumentLocation,
): FragmentPoint | undefined {
  const target = $settledTarget(prepared, location);
  if (!target) return undefined;
  if (target.kind === "scope") return $livePointInScope(context, prepared, target);
  const [node, offset] = $getNodeFromLocation(target.location, prepared.viewOptions);
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
  if (!target) return undefined;
  // Outside every rebuilt scope only the top-level index moves, and restating it keeps the
  // location's own subtype and offsets exactly as the host wrote them — resolving and
  // re-reporting it would put it through the snapping rules a second time. It is resolved only to
  // find out whether it names anything.
  if (target.kind === "live") {
    const [node, offset] = $getNodeFromLocation(target.location, prepared.viewOptions);
    return node && offset !== undefined ? target.location : undefined;
  }
  const point = $livePointInScope(context, prepared, target);
  const node = point && $getNodeByKey(point.key);
  return node ? $getLocationFromNode(node, point.offset, prepared.viewOptions) : undefined;
}

/**
 * `settled` restated in LIVE coordinates, so the editor's existing resolvers
 * (`$getRangeFromUsjSelection`, the annotation plugin, `$insertNote`) consume it unchanged — or
 * `undefined` when an endpoint names nothing in the settled document (or, as a backstop, when a
 * memoized plan no longer describes the live tree), which a caller must treat as "refuse", never
 * as "resolve it anyway". Every other endpoint has a live position: its own bytes' counterpart, or
 * where the bytes in front of it snap LEFT to while an edit is pending.
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
    // The exact location only: a location snapped left names something in front of the note.
    const located = $exactSettledLocationInScope(prepared, enclosing, node, 0);
    return typeof located === "object"
      ? indexesFromUsjJsonPath(contentPathOf(located.jsonPath))
      : undefined;
  }
  const indexes = $scopeStartIndexes(node, prepared.viewOptions);
  if (indexes.length === 0) return indexes;
  return [prepared.liveToSettledTopIndex(indexes[0]), ...indexes.slice(1)];
}

/** The live path to where a scope's first node starts. The root's implied paragraph has no path
 * of its own — USJ splices it away, and its children are the root's items — so its scope starts at
 * the root index of its first item. */
function $scopeStartIndexes(node: LexicalNode, viewOptions: ViewOptions): number[] {
  if (!$isImpliedParaNode(node) || !$isRootNode(node.getParent())) return $getJsonPathIndexes(node);
  return [$getLogicalPointFromElementPoint(node, 0, hasStandardViewWhitespace(viewOptions)).index];
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

/**
 * What a live point's exact translation refuses with when the plan no longer describes the tree it
 * was prepared over — a node the settled side has no counterpart for only because the live tree
 * moved on under a memoized plan. Every plan is prepared in the same read that uses it, so this is
 * a backstop rather than a path production takes, and it stays a refusal: snapping left across a
 * stale basis would answer from nodes that no longer mean what the plan paired them with.
 */
const STALE_BASIS = "stale-basis";

/** A live point's settled location through its scope's byte alignment, `undefined` when the scope
 * cannot line its bytes up or the point has no settled node to land on, or {@link STALE_BASIS}. */
type ExactLocation = UsjDocumentLocation | typeof STALE_BASIS | undefined;

/** The settled location for a live point inside a preserved node run: the settle handed the same
 * subtree through, so only which run member it is and the child path down to it cross over. Call
 * inside a read of the scratch tree. */
function $settledLocationInPreservedRun(
  scratchFragment: FragmentAccumulator,
  settled: SettledRunMember,
  path: readonly number[],
  offset: number,
  viewOptions: ViewOptions,
): UsjDocumentLocation | undefined {
  let node = scratchFragment.sentinels[settled.sentinelIndex]?.[settled.memberIndex];
  if (!node) return undefined;
  for (const index of path) {
    if (!$isElementNode(node)) return undefined;
    const child = node.getChildAtIndex(index);
    if (!child) return undefined;
    node = child;
  }
  return $getLocationFromNode(node, offset, viewOptions);
}

/**
 * The settled-only run a live anchor lies in the literal of, and the anchor restated over the
 * run's own spelling. In front of the literal's first byte is in front of the node it became, so
 * it counts as inside; inside it, the literal's bytes are that node's own bytes, so the anchor lands
 * on the same byte of the settled node — and a byte the settle spelled differently snaps left to
 * where the settled node's differing bytes start.
 */
function withinLiteral(
  runs: readonly SettledOnlyRun[],
  anchor: CaretByteAnchor,
): { run: SettledOnlyRun; within: CaretByteAnchor } | undefined {
  const front = literalStartingAt(runs, anchor);
  if (front)
    return {
      run: front,
      within: { nonWsBefore: 0, wsRun: anchor.wsRun - front.liveWsBefore, attributeRunSpans: 0 },
    };
  const inside = literalContaining(runs, anchor);
  if (!inside) return undefined;
  return {
    run: inside.run,
    within: inside.within ?? {
      nonWsBefore: mapCountSnapped(inside.run.inner, inside.count, "live"),
      wsRun: anchor.wsRun,
      attributeRunSpans: 0,
    },
  };
}

/**
 * Whether a position can rest in front of `span`'s first byte: not a preserved node's placeholder,
 * whose inner bytes are not addressable, and — for a caret — not a closing marker, which a caret
 * never enters. Read-only: resolves the span's key.
 */
function $canRestInFront(span: FragmentSpan, addressDisplayBytes: boolean): boolean {
  if (span.isSentinel) return false;
  if (addressDisplayBytes) return true;
  const node = $getNodeByKey(span.key);
  return !($isMarkerNode(node) && node.getMarkerSyntax() !== "opening");
}

/**
 * `anchor` fitted to the whitespace `fragment` actually has after its non-whitespace bytes. A
 * position carried to the other side can count whitespace that side does not spell there — the
 * settle drops the spaces in `| lemma = "b" ` — and is then resolved in front of the next byte.
 * Where no position can rest in front of that byte ({@link $canRestInFront}), the resolver would
 * carry on past the construct onto the content after it; such a position keeps only the
 * whitespace that is there, and so stays at the end of what precedes it.
 *
 * Read-only: call inside a read of the tree `fragment` was built over.
 */
function $withWsRunIn(
  fragment: { text: string; spans: FragmentSpan[] },
  anchor: CaretByteAnchor,
  addressDisplayBytes: boolean,
): CaretByteAnchor {
  let nonWs = 0;
  let ws = 0;
  for (const span of fragment.spans)
    for (let position = span.start; position < span.end; position += 1) {
      const isWs = FRAGMENT_WS.test(fragment.text[position]);
      if (nonWs < anchor.nonWsBefore) {
        if (!isWs) nonWs += 1;
      } else if (isWs) ws += 1;
      else if (ws >= anchor.wsRun || $canRestInFront(span, addressDisplayBytes)) return anchor;
      else return { ...anchor, wsRun: ws };
    }
  return anchor;
}

/**
 * Where a live point lands in its scope's settled tree, in that tree's OWN coordinates. A byte the
 * settled side has no counterpart for snaps LEFT through the scope's byte alignment, to where the
 * settled side's differing bytes start: a caret on the `lemma="` of a pending `|lemma="grace"`
 * reports the settled `|grace`'s value start.
 */
function $scratchLocationFromLivePoint(
  plan: SettleScopePlan,
  sides: PairedSides,
  node: LexicalNode,
  offset: number,
  viewOptions: ViewOptions,
): ExactLocation {
  const { liveFragment, scratchFragment, sentinelMap, alignment } = sides;
  const preserved = $preservedRunMember(liveFragment, node);
  if (preserved) {
    const run = liveFragment.sentinels[preserved.sentinelIndex];
    // A run the settled document dropped entirely (an emptied optbreak husk, which the settle
    // splices out) has no node there, but the place it stood does: the boundary in front of it,
    // where the text on either side meets once it is gone. It is where the caret sits after the
    // user deletes an optbreak's `//`. A run the pairing could not match with a settled one has no
    // counterpart either, and crosses the same way.
    if (!sentinelMap[preserved.sentinelIndex]?.some((member) => member !== undefined)) {
      const parent = run[0].getParent();
      return parent
        ? $scratchLocationFromLivePoint(
            plan,
            sides,
            parent,
            run[0].getIndexWithinParent(),
            viewOptions,
          )
        : STALE_BASIS;
    }
    const path = $childPath(preserved.member, node);
    if (!path) return STALE_BASIS;
    // One member of a run the settle dropped while keeping the rest: it has no settled node, and
    // the bytes around it are the answer.
    const settled = sentinelMap[preserved.sentinelIndex]?.[preserved.memberIndex];
    if (!settled) return undefined;
    // Plain data only across the scratch boundary: a live node must never be carried into a
    // scratch read. The settle handed this subtree through unchanged, so a child path it does not
    // have means the plan no longer describes the live tree.
    return (
      plan.scratch
        .getEditorState()
        .read(() =>
          $settledLocationInPreservedRun(scratchFragment, settled, path, offset, viewOptions),
        ) ?? STALE_BASIS
    );
  }
  const anchored = $anchorForPoint(liveFragment, node, cutFragmentOffset(plan, node, offset));
  if (!anchored) return undefined;
  const literal = withinLiteral(plan.settledOnlyRuns, anchored.anchor);
  if (literal)
    return plan.scratch
      .getEditorState()
      .read(() => $settledLocationInSpelling(literal.run, literal.within, viewOptions));
  const crossed = anchorAcrossLiteralsSnapped(alignment, anchored.anchor, "toSettled");
  // The mirror of the inbound addressing choice, decided the same way: a live position that names
  // USFM bytes wants the settled spelling of those bytes, including the ones no caret can rest
  // in; a position in ordinary content is a caret, and keeps the caret's own addressing — which
  // at an exact boundary spells itself as the end of the run it is leaving rather than as the
  // construct that happens to start there.
  const addressDisplayBytes = !isUsjTextContentLocation(
    $getLocationFromNode(node, offset, viewOptions),
  );
  return plan.scratch.getEditorState().read(() => {
    // A byte inside a typed closing glyph reports that closer, ahead of the caret addressing
    // below, which would move it past the glyph onto the content after it.
    const glyph = $closingGlyphByte(scratchFragment, crossed);
    const glyphNode = glyph && $getNodeByKey(glyph.key);
    if (glyphNode) return $getLocationFromNode(glyphNode, glyph.offset, viewOptions);
    // A byte directly between two closers with nothing between them reports the position just
    // past the FIRST one, ahead of the caret addressing below, which would otherwise skip past
    // BOTH to land on whatever addressable content follows the second.
    const afterPrevious = $afterPrecedingClosingGlyph(scratchFragment, crossed);
    const afterPreviousNode = afterPrevious && $getNodeByKey(afterPrevious.key);
    if (afterPreviousNode)
      return $getLocationFromNode(afterPreviousNode, afterPrevious.offset, viewOptions);
    const anchor = $withWsRunIn(scratchFragment, crossed, addressDisplayBytes);
    const point = $resolveFragmentByteAnchor(scratchFragment, anchor, { addressDisplayBytes });
    return point && $scratchPointLocation(point, viewOptions);
  });
}

/**
 * A resolved scratch point's location. The scratch holds one scope's settled root children and
 * nothing after them, so the boundary past its last child — where a position past a root-level
 * preserved run such as a sidebar lands — is the scratch's document end, which
 * `$getLocationFromNode` spells one past the final newline. In the settled document the scope need
 * not be last, so that boundary is spelled where the scope's last byte ends instead: at the end of
 * its last leaf.
 *
 * Read-only: call inside a read of the scratch tree.
 */
function $scratchPointLocation(
  point: FragmentPoint,
  viewOptions: ViewOptions,
): UsjDocumentLocation | undefined {
  const node = $getNodeByKey(point.key);
  if (!node) return undefined;
  const last =
    $isRootNode(node) && point.offset >= node.getChildrenSize() && node.getLastDescendant();
  if (last)
    return $getLocationFromNode(
      last,
      $isElementNode(last) ? last.getChildrenSize() : last.getTextContentSize(),
      viewOptions,
    );
  return $getLocationFromNode(node, point.offset, viewOptions);
}

/** The settled location for a live point inside a rebuilt scope, through the scope's byte
 * alignment — `undefined` when the scope cannot line its bytes up, or the point has no settled
 * node to land on. */
function $exactSettledLocationInScope(
  prepared: PreparedScopes,
  plan: SettleScopePlan,
  node: LexicalNode,
  offset: number,
): ExactLocation {
  if (plan.kind === "note") {
    // The note's own marker, caller and closing glyph are outside the content fragment, and a
    // content settle hands them through unchanged: the same location, at the note's settled path.
    const location = $getLocationFromNode(node, offset, prepared.viewOptions);
    if ($isOwnBytesLocationOf(location, plan.liveNodes[0])) {
      const settledPath = $settledScopePath(prepared, plan);
      return settledPath && withContentIndexes(location, settledPath);
    }
  }
  // Without the two fragments and their alignment there are no byte coordinates to report a
  // position in; the caller snaps it to the scope's front.
  const sides = pairedSides(plan);
  if (!sides) return undefined;
  const scratchLocation = $scratchLocationFromLivePoint(
    plan,
    sides,
    node,
    offset,
    prepared.viewOptions,
  );
  if (typeof scratchLocation !== "object") return scratchLocation;
  const indexes = settledPathFromScratch(
    plan,
    $settledScopePath(prepared, plan),
    indexesFromUsjJsonPath(contentPathOf(scratchLocation.jsonPath)),
  );
  return indexes && withContentIndexes(scratchLocation, indexes);
}

/** Every point in a scope's live nodes, in document order: each text offset, and each boundary
 * between an element's children. */
function $scopePoints(plan: SettleScopePlan): { node: LexicalNode; offset: number }[] {
  const points: { node: LexicalNode; offset: number }[] = [];
  const visit = (node: LexicalNode): void => {
    if ($isElementNode(node)) {
      node.getChildren().forEach((child, index) => {
        points.push({ node, offset: index });
        visit(child);
      });
      points.push({ node, offset: node.getChildrenSize() });
    } else if ($isTextNode(node))
      for (let offset = 0; offset <= node.getTextContentSize(); offset += 1)
        points.push({ node, offset });
  };
  plan.liveNodes.forEach(visit);
  return points;
}

/**
 * The settled location in front of a scope: the start of its settled content. A note the
 * enclosing scope cannot place exactly has no settled path of its own to start from, so its front
 * is the point in front of it in that enclosing scope, answered the same way as any other; a
 * top-level scope with no settled content to start is in front of whatever follows it.
 */
function $settledScopeFront(
  prepared: PreparedScopes,
  plan: SettleScopePlan,
): UsjDocumentLocation | undefined {
  const scratchStart = plan.scratch
    .getEditorState()
    .read(() => $getLocationFromNode($getRoot(), 0, prepared.viewOptions));
  const indexes = settledPathFromScratch(
    plan,
    $settledScopePath(prepared, plan),
    indexesFromUsjJsonPath(contentPathOf(scratchStart.jsonPath)),
  );
  if (indexes) return withContentIndexes(scratchStart, indexes);
  const first = plan.liveNodes[0];
  const parent = first.getParent();
  if (!parent) return undefined;
  const enclosing = $enclosingPlan(prepared, plan);
  if (enclosing)
    return $settledLocationInScope(prepared, enclosing, parent, first.getIndexWithinParent());
  return settledTopTranslated(
    prepared,
    $getLocationFromNode(parent, first.getIndexWithinParent(), prepared.viewOptions),
  );
}

/**
 * The settled location nearest at or before a live point that has none of its own: walk back
 * through the scope's live points until one translates, and failing every one, the front of the
 * scope. A USFM byte with no USJ representation snaps LEFT (`UsjReaderWriter` does, and so do the
 * editor's own locations), and so does a point the scope's byte alignment cannot place — a member
 * of a run the settle dropped, or anywhere in a scope whose bytes could not be lined up at all.
 *
 * `before` is the point to walk back from, or `undefined` to walk back from the scope's end.
 */
function $snappedLeftInScope(
  prepared: PreparedScopes,
  plan: SettleScopePlan,
  before: { node: LexicalNode; offset: number } | undefined,
): UsjDocumentLocation | undefined {
  const points = $scopePoints(plan);
  const at = before
    ? points.findIndex((point) => point.node.is(before.node) && point.offset === before.offset)
    : -1;
  for (let index = (at < 0 ? points.length : at) - 1; index >= 0; index -= 1) {
    const { node, offset } = points[index];
    const location = $exactSettledLocationInScope(prepared, plan, node, offset);
    if (typeof location === "object") return location;
  }
  return $settledScopeFront(prepared, plan);
}

/** The settled location for a live point inside a rebuilt scope: where the scope's byte alignment
 * carries it, or — for a point the alignment cannot place — the nearest one at or before it
 * ({@link $snappedLeftInScope}). `undefined` only when the plan no longer describes the live tree
 * ({@link STALE_BASIS}). */
function $settledLocationInScope(
  prepared: PreparedScopes,
  plan: SettleScopePlan,
  node: LexicalNode,
  offset: number,
): UsjDocumentLocation | undefined {
  const exact = $exactSettledLocationInScope(prepared, plan, node, offset);
  if (exact === STALE_BASIS) return undefined;
  return exact ?? $snappedLeftInScope(prepared, plan, { node, offset });
}

/**
 * The SETTLED location a live point addresses — what a host, whose only view of the document is
 * `getUsj()`, can actually resolve. A point in front of bytes that have no settled counterpart
 * while an edit is pending snaps LEFT, to where the settled side's differing bytes start;
 * `undefined` only when a memoized plan no longer describes the live tree, which a plan prepared
 * in the same read never is.
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
  // The document end is spelled on the document's last token, which a pending last block settles
  // into a different one.
  const lastBlock = $isRootNode(node) && offset >= node.getChildrenSize() && node.getLastChild();
  const endPlan = lastBlock ? prepared.planContaining(lastBlock) : undefined;
  if (endPlan)
    return (
      $settledDocumentEnd(prepared, endPlan) ?? $snappedLeftInScope(prepared, endPlan, undefined)
    );
  return settledTopTranslated(prepared, $getLocationFromNode(node, offset, prepared.viewOptions));
}

/**
 * The end of the SETTLED document when its last block is in `plan`'s scope: spelled on the last
 * token, which is the scope's settled last token rather than the live one.
 */
function $settledDocumentEnd(
  prepared: PreparedScopes,
  plan: SettleScopePlan,
): UsjDocumentLocation | undefined {
  const scratchEnd = plan.scratch.getEditorState().read(() => {
    const root = $getRoot();
    return $getLocationFromNode(root, root.getChildrenSize(), prepared.viewOptions);
  });
  const indexes = settledPathFromScratch(
    plan,
    $settledScopePath(prepared, plan),
    indexesFromUsjJsonPath(contentPathOf(scratchEnd.jsonPath)),
  );
  return indexes && withContentIndexes(scratchEnd, indexes);
}

/**
 * The editor's current selection in SETTLED coordinates — `undefined` only when there is no
 * selection to report or the layout has no USJ locations at all (or, as a backstop, when a
 * memoized basis no longer describes the live tree). An endpoint in front of bytes that have no
 * settled counterpart while an edit is pending snaps LEFT, each end of a range on its own
 * ({@link $settledLocationFromLivePoint}).
 *
 * Call inside a read of the LIVE editor state, with `prepared` from the same read.
 */
export function $settledSelectionFromLive(prepared: PreparedScopes): SelectionRange | undefined {
  // Called even when a translation follows, and deliberately: "there is no range selection" and
  // "this layout has no USJ locations at all" are both properties of the live tree that a settle
  // cannot change, so they stay the editor's own reporter's answers rather than being restated
  // here. Two extra location reports is nothing beside preparing a scope.
  const live = $getUsjSelectionFromEditor(prepared.viewOptions);
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
