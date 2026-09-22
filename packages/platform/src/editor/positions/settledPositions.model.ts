/**
 * The state a settled↔live position translation needs, and the per-scope basis it computes from
 * that state.
 *
 * `getUsj()` hands a host the SETTLED document — the one a Tier-2 settle would produce — while the
 * user's pending edits stay pending on screen (virtualSettle.utils.ts). Every position a host can
 * construct is therefore settled-derived, and every position API resolves against the LIVE tree.
 * While anything is pending the two documents differ, so a position has to be carried across the
 * difference before it can be resolved.
 */

import { FragmentAccumulator, Tier2Context } from "../markerEdit/tier2Rebuild.utils";
import { AnchoredTransientInput, LastKnownCaret } from "../markerEdit/virtualSettle.utils";
import { Klass, LexicalEditor, LexicalNode, LexicalNodeReplacement, NodeKey } from "lexical";

/** Everything the translation needs about the editor's current pending state. */
export interface SettledPositionContext {
  /** The display owners the marker-edit engine currently holds a pend for. */
  readonly pendedKeys: ReadonlySet<NodeKey>;
  /** The in-progress input an in-editor command surface has declared, if any. */
  readonly transientInput: AnchoredTransientInput | undefined;
  /** The last collapsed text caret the editor observed — `$verifiedTransientLiteral`'s fallback
   * when the live selection is absent. */
  readonly lastKnownCaret: LastKnownCaret | undefined;
  readonly tier2: Tier2Context;
  /** The live editor's node registry, for scratch editors. */
  readonly nodes: readonly (Klass<LexicalNode> | LexicalNodeReplacement)[];
  readonly cache: SettledScopeCache;
}

/**
 * Live ≡ settled: nothing pending, nothing declared, so a settled position addresses the live tree
 * unchanged and no translation is needed at all. The predicate a caller can check WITHOUT an
 * editor-state read — the same one `Editor.tsx`'s settled read uses to skip its own recompute.
 */
export function isLiveSettledIdentical(context: SettledPositionContext): boolean {
  return context.pendedKeys.size === 0 && !context.transientInput;
}

/**
 * Where a scope's declared transient bytes sat in its live fragment, so a position mapped through
 * the CUT fragment can be restated in real live coordinates.
 *
 * The cut removes the declared bytes from the middle of one node's span (`$transientCutRange`,
 * virtualSettle.utils.ts), so every live offset at or past the cut is short by the run's length —
 * the offsets in the node's own text still count the bytes the settled document was built
 * without.
 */
export interface TransientCut {
  /** The live TextNode the declared bytes were typed into. */
  readonly key: NodeKey;
  /** The offset within that node's text where the declared bytes start. */
  readonly nodeOffset: number;
  /** How many bytes were declared. */
  readonly length: number;
}

/**
 * One settle scope, prepared for position mapping: the live nodes the settle replaces, the settled
 * nodes it replaces them with (materialized into a scratch editor so they can be walked like any
 * other tree), and the two byte fragments that pair the two sides up.
 *
 * The fragments are the joint. Settling is re-tokenization of DISPLAYED bytes, so the live scope
 * and its settled replacement spell the same bytes in the same order while their structures
 * differ — which is exactly what the Tier-2 caret's whitespace-tolerant byte anchor already
 * carries a position across (`$caretSpanByteAnchor` / `$resolveFragmentByteAnchor`,
 * tier2Rebuild.utils.ts).
 */
export interface SettleScopePlan {
  readonly kind: "para" | "note" | "chapter";
  /** Live nodes the scope replaces: the paragraph(s) / the chapter region / [the note]. */
  readonly liveNodes: readonly LexicalNode[];
  /**
   * Live fragment over `liveNodes` (spans keyed by LIVE keys), with the declared transient bytes
   * and the placeholder byte of every preserved run the settled side dropped already cut out.
   * `undefined` when the scope's live bytes cannot be fragmented, which leaves the scope's
   * top-level index shift usable while refusing positions INSIDE it.
   */
  readonly liveFragment: FragmentAccumulator | undefined;
  /** Where the declared bytes were cut out of `liveFragment`, when they were. */
  readonly liveCut: TransientCut | undefined;
  /** Headless editor whose root children are the settled replacement nodes (para/chapter) or the
   *  single settled note (note). Fragment spans keyed by SCRATCH keys. */
  readonly scratch: LexicalEditor;
  /** Settled fragment over the scratch root, or `undefined` for the same reason
   * {@link SettleScopePlan.liveFragment} can be. */
  readonly scratchFragment: FragmentAccumulator | undefined;
  /** How many top-level settled content items the scope becomes (para/chapter); 1 for a note. */
  readonly settledCount: number;
  /**
   * Where each live preserved-run member sits in {@link SettleScopePlan.scratchFragment}'s own run
   * list, indexed `[live run][live member]` — `undefined` for a member the settled side has no
   * counterpart for, and `undefined` wholesale when the two sides' runs cannot be put in
   * correspondence at all, which refuses the scope.
   *
   * The two run lists are built by the same builder over DIFFERENT trees, so a construct that
   * needs a preserved run on one side but not the other — a dead optbreak husk the settle splices
   * out, a char span whose sentinel condition the rebuild resolves — shifts every run after it by
   * one. Crossing by raw index would then reach some other construct entirely, and where its shape
   * happens to match (two notes in one paragraph is an ordinary document) the walk succeeds and
   * the position lands silently in the wrong one.
   *
   * A dropped run also costs {@link SettleScopePlan.liveFragment} its placeholder byte, so the two
   * sides' byte anchors keep addressing the same document bytes.
   */
  readonly sentinelMap: readonly (readonly (SettledRunMember | undefined)[])[] | undefined;
}

/** One preserved-node run member, named by its run's index in a fragment's run list and its own
 * index within that run. */
export interface SettledRunMember {
  readonly sentinelIndex: number;
  readonly memberIndex: number;
}

/**
 * Plans memoized on their scope's content and nodes, so repeated position calls against an
 * unchanged pending state reuse one basis rather than re-running the settle and rebuilding a
 * scratch editor per call. Keyed by the scope's first live node; entries whose scope is no longer
 * pending are dropped on the next preparation.
 */
export interface SettledScopeCache {
  entries: Map<NodeKey, { signature: string; plan: SettleScopePlan }>;
  /**
   * The marker lookup the entries were planned under. A stylesheet change re-tokenizes the same
   * bytes differently without touching the tree — so without changing any entry's signature — and
   * so clears every entry.
   */
  getMarker?: Tier2Context["getMarker"];
}
