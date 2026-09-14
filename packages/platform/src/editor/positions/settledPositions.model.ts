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
   * Live fragment over `liveNodes` (spans keyed by LIVE keys), declared transient bytes already
   * cut. `undefined` when the scope's live bytes cannot be fragmented, which leaves the scope's
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
}

/**
 * Plans memoized on their scope's content, so repeated position calls against an unchanged
 * pending state reuse one basis rather than re-running the settle and rebuilding a scratch editor
 * per call. Keyed by the scope's first live node; entries whose scope is no longer pending are
 * dropped on the next preparation.
 */
export interface SettledScopeCache {
  entries: Map<NodeKey, { signature: string; plan: SettleScopePlan }>;
}
