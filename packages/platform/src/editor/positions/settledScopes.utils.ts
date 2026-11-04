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
  $buildImpliedParaFragment,
  $buildNodesFragment,
  $buildNoteFragment,
  $buildParaScopeFragment,
  $buildSettledRootFragment,
  $chapterAdjacentAttributeNodes,
  $exportSubtree,
  $settledChapterScopeFragment,
  $subtreeKeys,
  $subtreeNodesMatching,
  joinSerializedLeadingLineToPreviousParagraph,
  cutFragment,
  FragmentAccumulator,
  Tier2Context,
  withoutDroppedSentinels,
} from "../markerEdit/tier2Rebuild.utils";
import {
  $applySettledBookScope,
  $applySettledCharOpenerRename,
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
  $childPath,
  $liveRunSide,
  $preservedRunMember,
  $settledRunSide,
  pairRuns,
} from "../markerEdit/settledOnlyRuns.utils";
import {
  ClosedNoteLayout,
  SettledPositionContext,
  SettleScopePlan,
  TransientCut,
} from "./settledPositions.model";
import {
  $getNodeByKey,
  $getRoot,
  $isElementNode,
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
  BookNode,
  $isImpliedParaNode,
  $isNoteNode,
  $isParaNode,
  $noteOpeningGlyphCount,
  ChapterNode,
  getMarkerText,
  isSerializedNoteNode,
  ImpliedParaNode,
  LoggerBasic,
  LogicalContentItem,
  NoteNode,
  ParaNode,
} from "shared";
import { $getJsonPathIndexes, hasStandardViewWhitespace, ViewOptions } from "shared-react";

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
  /** Where a translation logs a basis the tree has moved on from, once it falls back to answering
   * from what is still there rather than refusing. */
  readonly logger: LoggerBasic | undefined;
  /**
   * The closing glyphs of char spans a pending opener rename renames in place, keyed by the
   * glyph's key, with the bytes the glyph shows and the bytes it settles to (`\+wj*` → `\+j*`).
   * Such a span keeps its place, so no plan covers it, but a position inside its closer counts
   * into different bytes on the two sides.
   */
  readonly renamedClosers: ReadonlyMap<NodeKey, RenamedCloser>;
  /** The plan of a note a typed closer closes whose scope runs on over `node` — a sibling after
   * the note — if any. Such a node's own plan, when it has one, settles inside that scope. */
  closedNoteScopeOver(node: LexicalNode): SettleScopePlan | undefined;
}

/** A closing glyph's bytes on screen and in the settled document. */
export interface RenamedCloser {
  readonly live: string;
  readonly settled: string;
}

/** One settled top-level content item's provenance. */
interface SettledTopIndex {
  liveIndex: number;
  plan?: SettleScopePlan;
  indexWithinScope: number;
}

/** The fragment over one scope's nodes, whichever kind of scope it is. The same builder runs over
 * the live nodes and over the scratch editor's root children, so the two sides' bytes are
 * comparable by construction — except where a paragraph's typed block marker settled into a
 * chapter, table, sidebar or other non-paragraph root child, which only the settled side has. */

function $buildScopeFragment(
  kind: SettleScopePlan["kind"],
  nodes: readonly LexicalNode[],
  tier2: Tier2Context,
): FragmentAccumulator | undefined {
  if (kind === "para") {
    const [first] = nodes;
    if (nodes.length === 1 && $isImpliedParaNode(first))
      return $buildImpliedParaFragment(first, tier2.getMarker, tier2.viewOptions);
    return nodes.every($isParaNode)
      ? $buildParaScopeFragment(nodes, tier2.getMarker, tier2.viewOptions)
      : $buildSettledRootFragment(nodes, tier2.getMarker, tier2.viewOptions);
  }
  if (kind === "chapter")
    return $settledChapterScopeFragment(nodes, tier2.getMarker, tier2.viewOptions);
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
  const nodes = liveNodes.flatMap((node) => [...$subtreeKeys(node)]).join(" ");
  // The declaration's own NODE is part of what it means: the same run at the same offset in a
  // different node is a different cut, and therefore a different settled scope.
  const declared = transient
    ? `${transient.node.getKey()}:${transient.run}@${transient.caretOffset}`
    : "";
  return [kind, view, fragmentText, content, nodes, declared].join(SIGNATURE_SEPARATOR);
}

/** A scope's settled fragment, read off its scratch tree, and — for a note a typed closer closes —
 * where the settled note sits there. */
interface SettledSideLayout {
  readonly fragment: FragmentAccumulator | undefined;
  readonly closedNote?: ClosedNoteLayout;
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
  $settledSide: () => SettledSideLayout | undefined = () => ({
    fragment: $buildScopeFragment(kind, $getRoot().getChildren(), context.tier2),
  }),
): SettleScopePlan | undefined {
  const scratch = materializeScratch(context.nodes, rebuilt);
  if (!scratch) return undefined;
  return $planOver(kind, liveNodes, liveFragment, liveCut, scratch, carried, context, $settledSide);
}

/** {@link $planFrom} over a scratch tree already materialized. */
function $planOver(
  kind: SettleScopePlan["kind"],
  liveNodes: readonly LexicalNode[],
  liveFragment: FragmentAccumulator | undefined,
  liveCut: TransientCut | undefined,
  scratch: LexicalEditor,
  carried: Pick<CarriedPreservedRuns, "live"> | undefined,
  context: SettledPositionContext,
  $settledSide: () => SettledSideLayout | undefined,
): SettleScopePlan | undefined {
  const built = scratch.getEditorState().read(() => {
    const layout = $settledSide();
    if (!layout) return undefined;
    const { fragment } = layout;
    return {
      settledCount: $getLogicalContentItems(
        $getRoot(),
        hasStandardViewWhitespace(context.tier2.viewOptions),
      ).length,
      scratchFragment: fragment,
      settledSide: fragment && $settledRunSide(fragment),
      closedNote: layout.closedNote,
    };
  });
  if (!built) return undefined;
  const { settledCount, scratchFragment, settledSide, closedNote } = built;
  const base = {
    kind,
    liveNodes,
    liveCut,
    scratch,
    scratchFragment,
    settledCount,
    ...(closedNote && { closedNote }),
  };
  // Nothing preserved on either side: the run correspondence is vacuous, not unknown, and the
  // bytes still line up.
  if ((liveFragment?.sentinels.length ?? 0) === 0 && (settledSide?.runs.length ?? 0) === 0) {
    const alignment =
      liveFragment &&
      settledSide &&
      pairRuns($liveRunSide(liveFragment, []), settledSide).alignment;
    return { ...base, liveFragment, sentinelMap: [], settledOnlyRuns: [], alignment };
  }
  const paired = liveFragment && carried && withoutDroppedSentinels(liveFragment, carried.live);
  const pairing =
    paired && settledSide && pairRuns($liveRunSide(paired, carried.live), settledSide);
  if (!pairing)
    return {
      ...base,
      liveFragment,
      sentinelMap: undefined,
      settledOnlyRuns: [],
      alignment: undefined,
    };
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

/** Every pending in-place rename — a note's own marker, a char span's opener — applied to a
 * scope's serialized copy the way the read-only settle applies it to the whole document, so the
 * scratch tree is what `getUsj()` returns rather than one still carrying the old marker. A rename
 * whose node is not in `sites` is not this scope's, and is a no-op. */
function $applyInPlaceRenames(scopes: SettleScopes, sites: Map<NodeKey, SerializedSite>): void {
  for (const rename of scopes.noteGlyphRenames.values())
    $applySettledNoteGlyphRename(rename, sites);
  for (const rename of scopes.charOpenerRenames.values())
    $applySettledCharOpenerRename(rename, sites);
}

/** A scope's serialized copy of `nodes`, the site of every live node in it, and every pending
 * in-place rename applied to it ({@link $applyInPlaceRenames}). */
function $serializedSites(
  nodes: LexicalNode[],
  scopes: SettleScopes,
): { serialized: SerializedLexicalNode[]; sites: Map<NodeKey, SerializedSite> } {
  const serialized = nodes.map((node) => $exportSubtree(node));
  const sites = new Map<NodeKey, SerializedSite>();
  $mapSerializedSites(nodes, serialized, sites);
  $applyInPlaceRenames(scopes, sites);
  return { serialized, sites };
}

/** `note`'s settle applied to the serialized copy `sites` maps — `false` when the settle refuses,
 * leaving the copy as it was. */
function $applyNoteScope(
  note: NoteNode,
  sites: Map<NodeKey, SerializedSite>,
  scopes: SettleScopes,
  context: SettledPositionContext,
  transient: TransientLiteral | undefined,
): boolean {
  return $applySettledNoteScope(
    note,
    sites,
    context.tier2,
    scopes.huskKeys,
    transient,
    scopes.charOpenerRenames,
  );
}

/** {@link $serializedSites}, then the settle of every note settling inside `nodes` (other than
 * `except`) applied to the copy — renames first, then notes, mirroring the read-only settle's own
 * notes-before-blocks order, so a block's rebuild over the copy carries each settled note rather
 * than the pending one. */
function $serializedSettleSites(
  nodes: LexicalNode[],
  scopes: SettleScopes,
  context: SettledPositionContext,
  transient: TransientLiteral | undefined,
  except?: NoteNode,
): { serialized: SerializedLexicalNode[]; sites: Map<NodeKey, SerializedSite> } {
  const serializedSites = $serializedSites(nodes, scopes);
  $subtreeNodesMatching(nodes, $isNoteNode)
    .filter((note) => !note.is(except) && scopes.noteScopes.has(note.getKey()))
    .forEach((note) => $applyNoteScope(note, serializedSites.sites, scopes, context, transient));
  return serializedSites;
}

/** Whether `block` is in a paragraph or `\id` line scope of its own, whose plan carries the
 * settle of every note inside it. */
function isInSettlingBlock(block: LexicalNode, scopes: SettleScopes): boolean {
  const key = block.getKey();
  return (
    scopes.bookScopes.has(key) ||
    [...scopes.paraScopes.values(), ...scopes.bookTrailingParas.values()].some((paras) =>
      paras.some((para) => para.getKey() === key),
    )
  );
}

/** A note's children past its opening glyphs and its caller: its content and its closing glyph —
 * or `undefined` when there is no caller where one belongs. */
function $noteBytesPastCaller(note: NoteNode): LexicalNode[] | undefined {
  const children = note.getChildren();
  const start = $noteOpeningGlyphCount(children);
  return start < children.length ? children.slice(start + 1) : undefined;
}

/**
 * The plan for an unclosed note whose settle closes it at a closer typed into it
 * (`splitUnclosedNoteAtOwnCloser`), or `undefined` when it does not close that way or its bytes
 * cannot be lined up. What followed the closer moves out of the note into its parent, after it, so
 * the scope runs past the note: its live nodes are the note and every sibling after it, and its
 * scratch holds the note's whole top-level block as it settles, so the moved bytes have the paths
 * they settle at. Both fragments spell the note's content and those siblings — the typed closer is
 * among the live content's bytes and is the settled note's closing glyph.
 *
 * A note in a block that settles itself is planned over that block's plan instead
 * ({@link $planForClosedNoteIn}), which carries the note's settle.
 */
function $planForClosedNote(
  note: NoteNode,
  scopes: SettleScopes,
  context: SettledPositionContext,
  transient: TransientLiteral | undefined,
): SettleScopePlan | undefined {
  const { getMarker, viewOptions } = context.tier2;
  if (note.getUnknownAttributes()?.closed !== "false") return undefined;
  const block = note.getTopLevelElement();
  const path = block && $childPath(block, note);
  const contentNodes = $buildNoteFragment(note, getMarker, viewOptions)?.contentNodes;
  if (!block || !path || !contentNodes || isInSettlingBlock(block, scopes)) return undefined;
  const following = note.getNextSiblings();
  const built = $buildNodesFragment([...contentNodes, ...following], getMarker, viewOptions);
  const { serialized, sites } = $serializedSettleSites([block], scopes, context, transient, note);
  if (!$applyNoteScope(note, sites, scopes, context, transient)) return undefined;
  // The settle that closes the note at the typed closer is the one that drops its `closed`.
  const settled = sites.get(note.getKey())?.node;
  if (!isSerializedNoteNode(settled) || settled.unknownAttributes?.closed === "false")
    return undefined;
  const { liveFragment, liveCut } = $cutLiveFragment(built, transient);
  const carried = carriedPreservedRuns(built, sites, scopes.huskKeys);
  return $planFrom(
    "note",
    [note, ...following],
    liveFragment,
    liveCut,
    serialized,
    carried,
    context,
    () => {
      let settledNote: LexicalNode | null = $getRoot().getFirstChild();
      for (const index of path)
        settledNote = $isElementNode(settledNote) ? settledNote.getChildAtIndex(index) : null;
      return $isNoteNode(settledNote) ? $closedNoteLayout(settledNote, context.tier2) : undefined;
    },
  );
}

/**
 * The settled side of a note a typed closer closes, read off the scratch tree holding `settledNote`:
 * the fragment over its content, its closer and everything after it in its parent, and where it
 * sits. Call inside a read of the scratch tree.
 */
function $closedNoteLayout(
  settledNote: NoteNode,
  { getMarker, viewOptions }: Tier2Context,
): SettledSideLayout | undefined {
  const bytes = $noteBytesPastCaller(settledNote);
  const parent = settledNote.getParent();
  if (!bytes || !parent) return undefined;
  const scratchNotePath = $getJsonPathIndexes(settledNote, hasStandardViewWhitespace(viewOptions));
  const noteIndex = scratchNotePath.at(-1);
  if (noteIndex === undefined) return undefined;
  // The root's implied paragraph has no path of its own: its items are the root's.
  const pathParent = scratchNotePath.length === 1 ? $getRoot() : parent;
  const items = $getLogicalContentItems(pathParent, hasStandardViewWhitespace(viewOptions));
  return {
    fragment: $buildNodesFragment(
      [...bytes, ...settledNote.getNextSiblings()],
      getMarker,
      viewOptions,
    ),
    closedNote: { scratchNotePath, settledItemsFromNote: items.length - noteIndex },
  };
}

/**
 * The plan for a note a typed closer closes inside a block that settles itself (`enclosing`, the
 * block's plan) — or `undefined` when the note does not close that way there, or its bytes cannot
 * be lined up. The block's settle carries the note's, so the note's settled self and the content
 * moved after it are in the block plan's scratch, which this plan shares: the settled note is the
 * one the block's preserved-run pairing carries the live note to.
 */
function $planForClosedNoteIn(
  enclosing: SettleScopePlan,
  note: NoteNode,
  scopes: SettleScopes,
  context: SettledPositionContext,
  transient: TransientLiteral | undefined,
): SettleScopePlan | undefined {
  const { getMarker, viewOptions } = context.tier2;
  const { liveFragment: blockFragment, sentinelMap, scratchFragment } = enclosing;
  const member = blockFragment && $preservedRunMember(blockFragment, note);
  const settled =
    member && member.member.is(note)
      ? sentinelMap?.[member.sentinelIndex]?.[member.memberIndex]
      : undefined;
  const contentNodes = $buildNoteFragment(note, getMarker, viewOptions)?.contentNodes;
  if (!settled || !scratchFragment || !contentNodes) return undefined;
  const following = note.getNextSiblings();
  const built = $buildNodesFragment([...contentNodes, ...following], getMarker, viewOptions);
  const { liveFragment, liveCut } = $cutLiveFragment(built, transient);
  const carried = {
    live: built.sentinels.map((run) => run.filter((node) => !scopes.huskKeys.has(node.getKey()))),
  };
  return $planOver(
    "note",
    [note, ...following],
    liveFragment,
    liveCut,
    enclosing.scratch,
    carried,
    context,
    () => {
      const settledNote = scratchFragment.sentinels[settled.sentinelIndex]?.[settled.memberIndex];
      // The settle that closes the note at the typed closer is the one that drops its `closed`.
      if (!$isNoteNode(settledNote) || settledNote.getUnknownAttributes()?.closed === "false")
        return undefined;
      return $closedNoteLayout(settledNote, context.tier2);
    },
  );
}

/** The note scope's plan: the note's own serialized form with its settled content spliced in. */
function $planForNote(
  note: NoteNode,
  built: FragmentAccumulator | undefined,
  scopes: SettleScopes,
  context: SettledPositionContext,
  transient: TransientLiteral | undefined,
): SettleScopePlan | undefined {
  const closed = $planForClosedNote(note, scopes, context, transient);
  if (closed) return closed;
  const { liveFragment, liveCut } = $cutLiveFragment(built, transient);
  const {
    serialized: [serializedNote],
    sites,
  } = $serializedSites([note], scopes);
  // A refusal leaves the serialized note untouched, which is the settle saying this scope is
  // already what it settles to — no plan, so positions in it address the live tree directly.
  if (!$applyNoteScope(note, sites, scopes, context, transient)) return undefined;
  const carried = built && carriedPreservedRuns(built, sites, scopes.huskKeys);
  // The note alone, in an array of its own: the scope's live side is just the note, and a settle
  // that closes it at a typed closer splices what followed the closer into `serialized` after it.
  return $planFrom("note", [note], liveFragment, liveCut, [serializedNote], carried, context);
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
  const { sites } = $serializedSettleSites(paras, scopes, context, transient);
  const rebuilt = $settledParaScope(
    paras,
    sites,
    context.tier2,
    scopes.huskKeys,
    transient,
    scopes.charOpenerRenames,
  );
  if (!rebuilt) return undefined;
  const carried = built && carriedPreservedRuns(built, sites, scopes.huskKeys);
  return $planFrom("para", paras, liveFragment, liveCut, rebuilt, carried, context);
}

/** The `\id` line scope's plan, over the book and the paragraphs a rejoin widens it by: the book
 * with its settled content, then whatever blocks the line's settle starts after it. Any note
 * settling inside the line is settled into the serialized copy first, for the reason
 * {@link $planForParas} gives. */
function $planForBook(
  book: BookNode,
  trailingParas: ParaNode[],
  built: FragmentAccumulator | undefined,
  scopes: SettleScopes,
  context: SettledPositionContext,
  transient: TransientLiteral | undefined,
): SettleScopePlan | undefined {
  const { liveFragment, liveCut } = $cutLiveFragment(built, transient);
  const liveNodes = [book, ...trailingParas];
  const { serialized, sites } = $serializedSettleSites(liveNodes, scopes, context, transient);
  if (
    !$applySettledBookScope(
      book,
      trailingParas,
      sites,
      context.tier2,
      scopes.huskKeys,
      transient,
      scopes.charOpenerRenames,
    )
  )
    return undefined;
  const carried = built && carriedPreservedRuns(built, sites, scopes.huskKeys);
  return $planFrom("para", liveNodes, liveFragment, liveCut, serialized, carried, context);
}

/** The chapter scope's plan, over the whole region the chapter rebuild replaces (the chapter plus
 * the adjacent first-class `\ca`/`\cp` nodes `$buildChapterFragment` reads).
 *
 * A markerless line the region settles into first joins the paragraph before the chapter, as the
 * settle and `getUsj()` both put it (`joinSerializedLeadingLineToPreviousParagraph`). That
 * paragraph is then part of the plan on both sides, so the items after it keep their indexes. */
function $planForChapter(
  chapter: ChapterNode,
  built: FragmentAccumulator | undefined,
  scopes: SettleScopes,
  context: SettledPositionContext,
  transient: TransientLiteral | undefined,
): SettleScopePlan | undefined {
  const rebuilt = $settledChapterScope(chapter, context.tier2, transient, scopes.charOpenerRenames);
  if (!rebuilt) return undefined;
  const region = [chapter, ...$chapterAdjacentAttributeNodes(chapter)];
  const previous = chapter.getPreviousSibling();
  const isPreviousPending = [...scopes.paraScopes.values()].some((paras) =>
    paras.some((para) => para.is(previous)),
  );
  if (($isParaNode(previous) || $isImpliedParaNode(previous)) && !isPreviousPending) {
    const withPrevious = [$exportSubtree(previous), ...rebuilt];
    joinSerializedLeadingLineToPreviousParagraph(withPrevious, 1);
    if (withPrevious.length === rebuilt.length) {
      const liveNodes = [previous, ...region];
      const { liveFragment, liveCut } = $cutLiveFragment(
        $settledChapterScopeFragment(liveNodes, context.tier2.getMarker, context.tier2.viewOptions),
        transient,
      );
      return $planFrom(
        "chapter",
        liveNodes,
        liveFragment,
        liveCut,
        withPrevious,
        undefined,
        context,
      );
    }
  }
  const { liveFragment, liveCut } = $cutLiveFragment(built, transient);
  // A chapter region with any preserved node at all is refused outright by `$buildChapterFragment`,
  // so a chapter scope has no preserved runs to pair.
  return $planFrom("chapter", region, liveFragment, liveCut, rebuilt, undefined, context);
}

/** The plan for a paragraph whose only pending change is an emptied optbreak husk — nothing
 * re-tokenizes, the dead husk is simply spliced out and the text it split is rejoined, exactly as
 * the read-only settle's own husk pass does it. A note settling inside the paragraph is settled
 * into the serialized copy first, for the same reason {@link $planForParas} does it: the note
 * rides through as a preserved node, and a settled path into it is resolved against THIS tree, so
 * a paragraph carrying the pending note resolves the note's settled content indexes against the
 * wrong children. A char span renamed in place needs no plan of its own: it keeps its place and
 * its content, so a position in it addresses the same content either side of the settle. */
function $planForHuskOnlyPara(
  para: ParaNode | ImpliedParaNode,
  liveFragment: FragmentAccumulator | undefined,
  husks: readonly LexicalNode[],
  scopes: SettleScopes,
  context: SettledPositionContext,
  transient: TransientLiteral | undefined,
): SettleScopePlan | undefined {
  const { serialized, sites } = $serializedSettleSites([para], scopes, context, transient);
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
  return $planFrom("para", [para], liveFragment, undefined, serialized, carried, context);
}

/** Whether any scope already planned covers `node` — its own key or an ancestor's. */
function $isPlanned(node: LexicalNode, byLiveKey: ReadonlyMap<NodeKey, SettleScopePlan>): boolean {
  for (let current: LexicalNode | null = node; current; current = current.getParent())
    if (byLiveKey.has(current.getKey())) return true;
  return false;
}

/** The identity basis: the settled document IS the live tree, index for index. */
function identityPrepared(
  viewOptions: ViewOptions,
  logger: LoggerBasic | undefined,
  renamedClosers: ReadonlyMap<NodeKey, RenamedCloser> = new Map(),
): PreparedScopes {
  return {
    renamedClosers,
    closedNoteScopeOver: () => undefined,
    byFirstLiveKey: new Map(),
    liveToSettledTopIndex: (liveIndex) => liveIndex,
    settledToLiveTopIndex: (settledIndex) => ({ liveIndex: settledIndex, indexWithinScope: 0 }),
    planContaining: () => undefined,
    viewOptions,
    logger,
  };
}

/**
 * Whether a plan's live nodes still describe the CURRENT live tree: every live node is attached,
 * and every live-fragment span still resolves to a node by key. A cached plan is reused only when
 * this holds — otherwise the cache treats it as a miss and rebuilds, rather than handing back a
 * plan the tree has moved on from.
 */
function $isPlanFresh(plan: SettleScopePlan): boolean {
  if (!plan.liveNodes.every((node) => node.isAttached())) return false;
  const spans = plan.liveFragment?.spans ?? [];
  return spans.every((span) => $getNodeByKey(span.key) !== null);
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
  addedAfter: ReadonlyMap<NodeKey, number> = new Map(),
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
      // Past the last item of a root child a note in it adds items to, those items follow. A
      // settled index there is the note's scope's, which resolves it before asking this mapping,
      // so it names the live item that follows them.
      const next = liveItems[index] && $rootChildOf(liveItems[index]);
      const added = rootChild && !next?.is(rootChild) ? addedAfter.get(rootChild.getKey()) : 0;
      for (let extra = 0; extra < (added ?? 0); extra += 1) {
        settledToLive.push({ liveIndex: index, indexWithinScope: 0 });
        settledIndex += 1;
      }
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
 * The root items each note a typed closer closes adds to the document, keyed by the root child
 * the note sits in: only a note in the root's implied paragraph, whose items are the root's own,
 * adds any. The items after its last one move down by as many.
 */
function $rootItemsAddedByClosedNotes(
  plans: ReadonlyMap<NodeKey, SettleScopePlan>,
  collapsesSpaceRuns: boolean,
): Map<NodeKey, number> {
  const added = new Map<NodeKey, number>();
  for (const plan of plans.values()) {
    const note = plan.liveNodes[0];
    const settledItems = plan.closedNote?.settledItemsFromNote;
    const block = note.getTopLevelElement();
    if (settledItems === undefined || !$isImpliedParaNode(block) || !note.isAttached()) continue;
    const [noteIndex, ...below] = $getJsonPathIndexes(note, collapsesSpaceRuns);
    if (noteIndex === undefined || below.length > 0) continue;
    const liveItems = $getLogicalContentItems($getRoot(), collapsesSpaceRuns)
      .slice(noteIndex)
      .filter((item) => $rootChildOf(item)?.is(block)).length;
    if (settledItems > liveItems) added.set(block.getKey(), settledItems - liveItems);
  }
  return added;
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
    return identityPrepared(context.tier2.viewOptions, context.tier2.logger);
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
    // A scope's own node is always its own plan's: a note a typed closer closes counts the
    // siblings after it as its scope's, and a settling note among them keeps its own plan.
    plan.liveNodes.forEach((node, index) => {
      if (index === 0 || !byLiveKey.has(node.getKey())) byLiveKey.set(node.getKey(), plan);
    });
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
    if (cached?.signature === signature && $isPlanFresh(cached.plan)) return cached.plan;
    const plan = build(liveFragment);
    if (plan) context.cache.entries.set(key, { signature, plan });
    else context.cache.entries.delete(key);
    return plan;
  };

  // Notes first: a note settling inside a settling paragraph has to be settled into the
  // paragraph's serialized copy before the paragraph itself is rebuilt around it.
  // An unclosed note's plan can run past it (`$planForClosedNote`), so what follows it is part of
  // what the plan is memoized on.
  for (const note of scopes.noteScopes.values())
    record(
      planned(
        note.getKey(),
        "note",
        note.getUnknownAttributes()?.closed === "false"
          ? [note, ...note.getNextSiblings()]
          : [note],
        (fragment) => $planForNote(note, fragment, scopes, context, transient),
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
  // The `\id` line is a root child like a paragraph, and its settle can start blocks after it, so
  // its plan is a top-level one: everything after it shifts by what the line settles into.
  for (const book of scopes.bookScopes.values()) {
    const trailingParas = scopes.bookTrailingParas.get(book.getKey()) ?? [];
    record(
      planned(book.getKey(), "para", [book, ...trailingParas], (fragment) =>
        $planForBook(book, trailingParas, fragment, scopes, context, transient),
      ),
      true,
    );
  }
  for (const chapter of scopes.chapterScopes.values())
    record(
      planned(
        chapter.getKey(),
        "chapter",
        [chapter, ...$chapterAdjacentAttributeNodes(chapter)],
        (fragment) => $planForChapter(chapter, fragment, scopes, context, transient),
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

  // A note a typed closer closes inside a block that settles itself: the block's plan holds where
  // the note and what moved out of it settle, so the note's plan is built over that plan's scratch.
  for (const note of scopes.noteScopes.values()) {
    if (note.getUnknownAttributes()?.closed !== "false") continue;
    const block = note.getTopLevelElement();
    const enclosing = block ? topPlans.get(block.getKey()) : undefined;
    const plan = enclosing && $planForClosedNoteIn(enclosing, note, scopes, context, transient);
    if (!plan) continue;
    const replaced = byFirstLiveKey.get(note.getKey());
    byFirstLiveKey.set(note.getKey(), plan);
    plan.liveNodes.forEach((node, index) => {
      const current = byLiveKey.get(node.getKey());
      if (index === 0 || !current || current === replaced) byLiveKey.set(node.getKey(), plan);
    });
  }
  const closedNoteRuns = new Map<NodeKey, SettleScopePlan>();
  for (const plan of byFirstLiveKey.values())
    if (plan.closedNote)
      plan.liveNodes.slice(1).forEach((node) => closedNoteRuns.set(node.getKey(), plan));

  for (const key of [...context.cache.entries.keys()])
    if (!stillPending.has(key)) context.cache.entries.delete(key);

  const renamedClosers = new Map<NodeKey, RenamedCloser>();
  for (const { closer, newMarker } of scopes.charOpenerRenames.values())
    if (closer)
      renamedClosers.set(closer.getKey(), {
        live: closer.getTextContent(),
        settled: getMarkerText(newMarker, "closing", closer.getNested()),
      });
  if (byFirstLiveKey.size === 0)
    return identityPrepared(context.tier2.viewOptions, context.tier2.logger, renamedClosers);

  const collapsesSpaceRuns = hasStandardViewWhitespace(context.tier2.viewOptions);
  const { liveToSettled, settledToLive } = $mapTopIndexes(
    topPlans,
    collapsesSpaceRuns,
    $rootItemsAddedByClosedNotes(byFirstLiveKey, collapsesSpaceRuns),
  );
  return {
    byFirstLiveKey,
    renamedClosers,
    closedNoteScopeOver: (node) => closedNoteRuns.get(node.getKey()),
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
    logger: context.tier2.logger,
  };
}
