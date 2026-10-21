/**
 * Positions in the block verse layout, mapped to and from the USJ it displays.
 *
 * The layout regroups a chapter into one block per verse, cutting a paragraph that spans verses
 * into one fragment per verse (verse-block.utils.ts in platform). Every cut falls immediately
 * before a verse opener, which is always an element content item of its own, so no text run
 * straddles two fragments: a source paragraph's content items are its fragments' items end to
 * end. Mapping a location is therefore rewriting its leading indexes; everything below a unit is
 * unchanged. The layout has no pending edits, so there is no settled translation on top of this.
 */
import {
  indexesFromUsjJsonPath,
  isUsjTextContentLocation,
  usjJsonPathFromIndexes,
  type UsjDocumentLocation,
} from "@eten-tech-foundation/scripture-utilities";
import { $getRoot, $getState, $isElementNode, ElementNode, LexicalNode } from "lexical";
import {
  $getLogicalContentItems,
  $isImpliedParaNode,
  $isVerseBlockNode,
  $shouldIgnoreNodeForContentIndexes,
  verseBlockSourceState,
} from "shared";

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

/** One root-level unit of the block tree: a verse block's child, or a root child outside any block. */
export interface BlockUnit {
  node: LexicalNode;
  /** Path to the unit in the block tree; `[]` for an implied paragraph spliced into the root. */
  blockPrefix: number[];
  /** Index of the unit's first item under `blockPrefix` (non-zero only when spliced). */
  blockBase: number;
  /** How many content items the unit holds. */
  count: number;
  /** Path to the unit's source in the USJ; `[]` for an implied paragraph, whose items are root items. */
  usjPrefix: number[];
  /** Index, under `usjPrefix`, of the unit's first item. */
  usjBase: number;
  /** Whether this is its source's first unit — the only one that stands for the whole paragraph. */
  isSourceStart: boolean;
  /** Whether this is its source's last unit — the only one whose end is the paragraph's end. */
  isSourceEnd: boolean;
}

/** Every unit of the block tree, in document order. Call inside a read of that tree. */
export function $getBlockUnits(collapsesSpaceRuns: boolean): BlockUnit[] {
  const placed: Pick<BlockUnit, "node" | "blockPrefix" | "blockBase">[] = [];
  let rootIndex = 0;
  for (const child of $getRoot().getChildren()) {
    if ($shouldIgnoreNodeForContentIndexes(child)) continue;
    if ($isVerseBlockNode(child)) {
      const blockIndex = rootIndex;
      child
        .getChildren()
        .filter((unit) => !$shouldIgnoreNodeForContentIndexes(unit))
        .forEach((unit, index) =>
          placed.push({ node: unit, blockPrefix: [blockIndex, index], blockBase: 0 }),
        );
      rootIndex += 1;
    } else if ($isImpliedParaNode(child)) {
      // Content-transparent at the root: its items are root items of the block tree too.
      placed.push({ node: child, blockPrefix: [], blockBase: rootIndex });
      rootIndex += $getLogicalContentItems(child, collapsesSpaceRuns).length;
    } else {
      placed.push({ node: child, blockPrefix: [rootIndex], blockBase: 0 });
      rootIndex += 1;
    }
  }
  const units: BlockUnit[] = [];
  let nextTop = 0;
  let sourceTop = 0;
  let itemsInSource = 0;
  let previousSource: number | undefined;
  for (const unit of placed) {
    const count = $isElementNode(unit.node)
      ? $getLogicalContentItems(unit.node, collapsesSpaceRuns).length
      : 0;
    const source = $getState(unit.node, verseBlockSourceState);
    const isImplied = $isImpliedParaNode(unit.node);
    const isSourceStart = source === undefined || source !== previousSource;
    if (isSourceStart) {
      if (units.length > 0) units[units.length - 1].isSourceEnd = true;
      sourceTop = nextTop;
      itemsInSource = 0;
      if (!isImplied) nextTop += 1;
    }
    units.push({
      ...unit,
      count,
      usjPrefix: isImplied ? [] : [sourceTop],
      usjBase: isImplied ? sourceTop + itemsInSource : itemsInSource,
      isSourceStart,
      isSourceEnd: false,
    });
    if (isImplied) nextTop += count;
    itemsInSource += count;
    previousSource = source;
  }
  if (units.length > 0) units[units.length - 1].isSourceEnd = true;
  return units;
}

function startsWith(indexes: number[], prefix: number[]): boolean {
  return (
    indexes.length >= prefix.length && prefix.every((index, depth) => indexes[depth] === index)
  );
}

/**
 * The USJ location a block-tree location names, or `undefined` when it names no unit.
 *
 * @param $locateContentStart - The location of the start of a unit's content (the caller's
 *   `$getLocationFromNode(unit, 0, …)`), for a unit whose own path has no USJ counterpart.
 */
export function $blockToUsj(
  location: UsjDocumentLocation,
  units: BlockUnit[],
  $locateContentStart: (unit: ElementNode) => UsjDocumentLocation,
  mayDescend = true,
): UsjDocumentLocation | undefined {
  const suffix = location.jsonPath.slice(contentPathOf(location.jsonPath).length);
  let indexes = indexesFromUsjJsonPath(contentPathOf(location.jsonPath));
  // A verse block has no USJ counterpart: naming one names its first unit.
  if (
    indexes.length === 1 &&
    units.some((unit) => unit.blockPrefix.length === 2 && unit.blockPrefix[0] === indexes[0])
  )
    indexes = [indexes[0], 0];
  for (const unit of units) {
    if (!startsWith(indexes, unit.blockPrefix)) continue;
    const rest = indexes.slice(unit.blockPrefix.length);
    if (rest.length === 0) {
      if (unit.blockPrefix.length === 0) continue;
      // Only a source's first fragment stands for the paragraph. Any other fragment, and an
      // implied paragraph (which USJ has no object for), starts at its first item.
      if (
        mayDescend &&
        suffix === "" &&
        $isElementNode(unit.node) &&
        (!unit.isSourceStart || $isImpliedParaNode(unit.node))
      )
        return $blockToUsj($locateContentStart(unit.node), units, $locateContentStart, false);
      return withContentIndexes(location, unit.usjPrefix);
    }
    if (rest[0] < unit.blockBase || rest[0] >= unit.blockBase + unit.count) continue;
    return withContentIndexes(location, [
      ...unit.usjPrefix,
      rest[0] - unit.blockBase + unit.usjBase,
      ...rest.slice(1),
    ]);
  }
  return undefined;
}

/** The block-tree spelling of `{ "$", offset }`: the gap in front of USJ top-level item `offset`. */
function $rootGapToBlock(
  offset: number,
  units: BlockUnit[],
  collapsesSpaceRuns: boolean,
): UsjDocumentLocation {
  for (const unit of units) {
    if (unit.usjPrefix.length === 0) {
      // An implied paragraph's items are root items of the USJ.
      if (offset < unit.usjBase || offset >= unit.usjBase + unit.count) continue;
      const item = offset - unit.usjBase + unit.blockBase;
      return unit.blockPrefix.length === 0
        ? { jsonPath: "$", offset: item }
        : { jsonPath: usjJsonPathFromIndexes(unit.blockPrefix), offset: item };
    }
    if (!unit.isSourceStart || unit.usjPrefix[0] !== offset) continue;
    const [top, within] = unit.blockPrefix;
    return within === undefined
      ? { jsonPath: "$", offset: top }
      : { jsonPath: usjJsonPathFromIndexes([top]), offset: within };
  }
  // Past the last item: the end of the document.
  return { jsonPath: "$", offset: $getLogicalContentItems($getRoot(), collapsesSpaceRuns).length };
}

/** The block-tree location a USJ location names, or `undefined` when it names nothing. */
export function $usjToBlock(
  location: UsjDocumentLocation,
  units: BlockUnit[],
  collapsesSpaceRuns: boolean,
): UsjDocumentLocation | undefined {
  const indexes = indexesFromUsjJsonPath(contentPathOf(location.jsonPath));
  if (indexes.length === 0)
    return isUsjTextContentLocation(location)
      ? $rootGapToBlock(location.offset, units, collapsesSpaceRuns)
      : location;
  for (const unit of units) {
    if (!startsWith(indexes, unit.usjPrefix)) continue;
    const rest = indexes.slice(unit.usjPrefix.length);
    if (rest.length === 0) {
      if (unit.usjPrefix.length === 0) continue;
      // The older `{ container, offset }` spelling: the gap before item `offset` of the paragraph,
      // in whichever fragment holds that item (its end only in the last fragment). An offset past
      // even the last fragment's own count still names the same "end of container" position every
      // other out-of-range index there does (mirroring `$contentEndLocation`'s clamp), rather than
      // naming nothing: a comment milestone consumed into the surrounding text run, say, can leave
      // the source's logical item count short of the raw USJ item count that produced the offset.
      if (isUsjTextContentLocation(location)) {
        const item = location.offset - unit.usjBase;
        if (item < 0 || (!unit.isSourceEnd && item >= unit.count)) continue;
        return {
          ...withContentIndexes(location, unit.blockPrefix),
          offset: Math.min(item, unit.count) + unit.blockBase,
        };
      }
      if (!unit.isSourceStart) continue;
      return withContentIndexes(location, unit.blockPrefix);
    }
    if (rest[0] < unit.usjBase || rest[0] >= unit.usjBase + unit.count) continue;
    return withContentIndexes(location, [
      ...unit.blockPrefix,
      rest[0] - unit.usjBase + unit.blockBase,
      ...rest.slice(1),
    ]);
  }
  return undefined;
}
