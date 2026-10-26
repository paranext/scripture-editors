import { $isSomeVerseNode, SomeVerseNode } from "../../nodes/usj";
import { $rangeReachesIntoOpaqueBlock } from "./OpaqueBlockGuardPlugin";
import { $placeCaretAtParaContentStart } from "./ParaMarkerPrefixCursorGuardPlugin";
import { $findMatchingParent } from "@lexical/utils";
import {
  $createTextNode,
  $isElementNode,
  $isNodeSelection,
  $isRangeSelection,
  $isTextNode,
  BaseSelection,
  LexicalNode,
  NodeKey,
  PointType,
  RangeSelection,
} from "lexical";
import {
  $caretHostAtBoundary,
  $getSelectableParaMarker,
  $getSelectedParaMarkerPara,
  $isGutterMarkerNode,
  $isMarkerTrailingSeparator,
  $isParaLikeNode,
  $isParaNode,
  $isSomeChapterNode,
  $isSomeParaNode,
  $isSynthesizedMarkerNode,
  $placeCaretAtBoundary,
  ParaLikeNode,
  SomeParaNode,
} from "shared";

/**
 * Update tag for a delete the user has already confirmed: `StructureKeyboardPlugin`'s own fire of an
 * armed selection delete, and a delete replayed after the user answered a question about it (the
 * hidden-content guard's). Under `"guarded"` protection a `DELETE_CHARACTER_COMMAND` dispatched in an
 * update carrying it goes ahead rather than arming the two-step delete again. Add it with
 * `$addUpdateTag` inside the update that dispatches the delete.
 */
export const CONFIRMED_DELETE_TAG = "confirmed-delete";

/** Editing operations that can alter block structure. */
export type EditIntent = "insertParagraph" | "deleteBackward" | "deleteForward" | "insertText";

/** The editing operations that delete: Backspace and Delete. */
export type DeleteIntent = Extract<EditIntent, "deleteBackward" | "deleteForward">;

/** What a structural delete keystroke would act on. */
export type DeleteTarget =
  | { kind: "verse"; node: SomeVerseNode }
  | { kind: "para"; node: SomeParaNode };

/** A snapshot of one RangeSelection endpoint, used to detect whether a latched range still holds. */
export interface PointSnapshot {
  key: NodeKey;
  offset: number;
  type: "text" | "element";
}

/** A snapshot of a RangeSelection's two endpoints. */
export interface RangeSnapshot {
  anchor: PointSnapshot;
  focus: PointSnapshot;
}

/**
 * The endpoints of `selection` as they are now, unaffected by later moves of its points.
 *
 * Read-only: safe in any read — `editor.getEditorState().read()`, an `editor.update()`, or a
 * command handler.
 */
export function $rangeSnapshot({ anchor, focus }: RangeSelection): RangeSnapshot {
  const point = ({ key, offset, type }: PointSnapshot): PointSnapshot => ({ key, offset, type });
  return { anchor: point(anchor), focus: point(focus) };
}

/** Whether `point` (a live selection point, or another snapshot) is the one `snapshot` recorded. */
export function isSamePoint(point: PointSnapshot, snapshot: PointSnapshot): boolean {
  return (
    point.key === snapshot.key && point.offset === snapshot.offset && point.type === snapshot.type
  );
}

/** Snapshots `point`, so a later selection can be checked against it. */
export function snapshotPoint(point: PointSnapshot): PointSnapshot {
  return { key: point.key, offset: point.offset, type: point.type };
}

/**
 * What an armed paragraph delete will do, which the host names in its hint: join the paragraph to
 * the one before it, pull the next paragraph up into the current one, or remove an empty paragraph.
 */
export type ParaDeleteEffect = "joinPreviousPara" | "joinNextPara" | "removeEmptyPara";

/** A pending two-step delete: the armed target's kind + the intent that armed it. */
export interface ArmedDelete {
  kind: "verse" | "para" | "selection";
  intent: DeleteIntent;
  /** verse/para: the target node's key. selection: the first verse marker key in the range. */
  key: NodeKey;
  /** para only: what the second press will do. */
  paraEffect?: ParaDeleteEffect;
  /**
   * selection: the armed range's endpoints. para, when the paragraph shows no marker to select:
   * the caret's, which the arm leaves where it was.
   */
  anchor?: PointSnapshot;
  focus?: PointSnapshot;
}

/**
 * Maps a keydown to the structural edit it would cause, or undefined for non-editing keys.
 * Deliberately does NOT early-return on Alt/Ctrl/Meta for Backspace/Delete — Alt/Cmd+Backspace
 * (delete-word / delete-line) are destructive and must be classified as deletions.
 */
export function keyDownToIntent(event: KeyboardEvent): EditIntent | undefined {
  if (event.key === "Enter" && !event.shiftKey) return "insertParagraph";
  if (event.key === "Backspace") return "deleteBackward";
  if (event.key === "Delete") return "deleteForward";
  // Printable character with no command modifier. Alt allowed (special chars on some layouts).
  if (event.key.length === 1 && !event.ctrlKey && !event.metaKey) return "insertText";
  return undefined;
}

/**
 * Returns the block (ParaNode, ImpliedParaNode, or the `\id` line's BookNode) that contains
 * `node`, if any. `ParaLike`, not `SomePara`: the `\id` line is content like any paragraph's —
 * protected mode must recognize it as a block boundary too, or a Delete at the line's own end,
 * or a selection spanning from it into the next real paragraph, merges right through it.
 */
function $getParaAncestor(node: LexicalNode | null | undefined): LexicalNode | undefined {
  if (!node) return undefined;
  if ($isParaLikeNode(node)) return node;
  const para = $findMatchingParent(node, (n: LexicalNode) => $isParaLikeNode(n));
  return para ?? undefined;
}

/**
 * True when the selection covers more than one paragraph block, or covers a chapter marker — a
 * root-level block of its own that no paragraph contains, so the paragraph count alone misses it.
 *
 * Read-only: safe in any read — `editor.getEditorState().read()`, an `editor.update()`, or a
 * command handler.
 */
export function $selectionSpansBlockBoundary(selection: BaseSelection): boolean {
  if (!$isRangeSelection(selection)) return false;
  const paraKeys = new Set<string>();
  for (const node of selection.getNodes()) {
    if (!selection.isCollapsed() && $isSomeChapterNode(node)) return true;
    const para = $getParaAncestor(node);
    if (para) paraKeys.add(para.getKey());
  }
  return paraKeys.size > 1;
}

/**
 * Moves a NON-collapsed selection's earlier endpoint off the element point in FRONT of its
 * paragraph's gutter glyph — where a line delete's extension lands on a line with no verse — to the
 * content boundary just past the glyph, so removing the range removes only the line's text. Without
 * this the glyph goes too, and `ParaMarkerPrefixGuardPlugin` rebuilds it as a new node.
 *
 * Mutating: call inside `editor.update()` (a command listener already runs inside one).
 */
export function $narrowSelectionPastGutterGlyph(selection: RangeSelection): void {
  if (selection.isCollapsed()) return;
  $movePointPastGutterGlyph(selection.isBackward() ? selection.focus : selection.anchor);
}

/**
 * Moves a COLLAPSED caret at `(para, 0)` — in front of its paragraph's gutter glyph, where an arrow
 * key from the line before leaves it — to the content boundary just past the glyph, so a forward
 * delete from it removes the line's first character rather than the glyph (which
 * `ParaMarkerPrefixGuardPlugin` would rebuild as a new node, an edit with nothing to show for it).
 *
 * Mutating: call inside `editor.update()` (a command listener already runs inside one).
 *
 * @returns Whether the caret was moved.
 */
export function $moveCaretPastGutterGlyph(selection: RangeSelection): boolean {
  if (!selection.isCollapsed() || !$movePointPastGutterGlyph(selection.anchor)) return false;
  const { key, offset, type } = selection.anchor;
  selection.focus.set(key, offset, type);
  return true;
}

/** Moves `point` off `(para, 0)` in front of a gutter glyph to just past it; true if it moved. */
function $movePointPastGutterGlyph(point: PointType): boolean {
  const para = point.getNode();
  if (point.type !== "element" || point.offset !== 0 || !$isParaNode(para)) return false;
  if (!$isGutterMarkerNode(para.getFirstChild())) return false;
  const host = $caretHostAtBoundary(para, 1);
  if (host) point.set(host.getKey(), 0, "text");
  else point.set(para.getKey(), 1, "element");
  return true;
}

/**
 * True when the selection includes any verse marker node. A collapsed caret at an element-type
 * point never counts — that is adjacency, not containment (see {@link $adjacentVerseMarker}).
 */
export function $selectionContainsVerseMarker(selection: BaseSelection): boolean {
  // A collapsed range covers no nodes, so a non-empty getNodes() for one is Lexical emulating "the
  // descendant at the caret" — that is adjacency, not containment, and must not block editing.
  // An element-type point is the only collapsed point that can reach that emulation: it is what
  // Lexical falls back to when there is no TextNode to host the caret, as in an empty verse (a verse
  // marker holds no text of its own, and ImmutableVerseNode is a childless decorator leaf, so an
  // empty verse has no text node at all).
  // Text-type points are excluded deliberately: the mutable VerseNode IS a TextNode, so a caret
  // inside one is genuine containment — editing there would rewrite the verse number, which must
  // stay blocked. Widening this to every collapsed caret reopens exactly that.
  // Adjacency for deletes is decided separately by $adjacentVerseMarker, which reads child indices
  // rather than relying on this emulation.
  if (
    $isRangeSelection(selection) &&
    selection.isCollapsed() &&
    selection.anchor.type === "element"
  )
    return false;
  if (!$isRangeSelection(selection) && !$isNodeSelection(selection)) return false;
  return selection.getNodes().some((n) => $isSomeVerseNode(n));
}

/**
 * True when a collapsed caret sits at the very start of its paragraph. A paragraph's own gutter
 * marker glyph is not content, so a caret just past it counts as the start too.
 */
export function $caretAtParaStart(selection: BaseSelection): boolean {
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return false;
  const { anchor } = selection;
  const node = anchor.getNode();
  const para = $getParaAncestor(node);
  if (!para || !$isElementNode(para)) return false;
  const leadingGlyphs = $isGutterMarkerNode(para.getFirstChild()) ? 1 : 0;
  if (node.is(para)) return anchor.offset <= leadingGlyphs;
  if (anchor.offset !== 0) return false;
  // No content between the caret and the paragraph start.
  let current: LexicalNode | null = node;
  while (current && current.getKey() !== para.getKey()) {
    const previous = current.getPreviousSibling();
    if (previous && !(leadingGlyphs && previous.is(para.getFirstChild()))) return false;
    current = current.getParent();
  }
  return true;
}

/**
 * The paragraph a Backspace from `selection` would remove the gutter marker of: one led by a
 * selectable gutter glyph (see `$getSelectableParaMarker` — so never a paragraph inside a hidden
 * construct such as a sidebar), with a collapsed caret at its start (see {@link $caretAtParaStart})
 * — past the glyph, or before it.
 *
 * Read-only: safe in any read — `editor.getEditorState().read()`, an `editor.update()`, or a
 * command handler.
 */
export function $getGutterParaWithCaretAtStart(
  selection: BaseSelection | null,
): SomeParaNode | undefined {
  if (!selection || !$caretAtParaStart(selection) || !$isRangeSelection(selection)) return;
  const para = $getParaAncestor(selection.anchor.getNode());
  return $isParaNode(para) && $getSelectableParaMarker(para) ? para : undefined;
}

/** True when a collapsed caret sits at the very end of its paragraph. */
export function $caretAtParaEnd(selection: BaseSelection): boolean {
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return false;
  const { anchor } = selection;
  const node = anchor.getNode();
  const para = $getParaAncestor(node);
  if (!para) return false;
  if ($isElementNode(node)) {
    if (anchor.offset !== node.getChildrenSize()) return false;
  } else if (anchor.offset !== node.getTextContentSize()) {
    return false;
  }
  let current: LexicalNode | null = node;
  while (current && current.getKey() !== para.getKey()) {
    if (current.getNextSibling()) return false;
    current = current.getParent();
  }
  return true;
}

/**
 * True when the node immediately before/after a collapsed caret is a verse marker.
 *
 * @param selection - The current selection; only a collapsed RangeSelection can be adjacent.
 * @param direction - `"backward"` checks the node before the caret; `"forward"` the node after.
 * @returns Whether a verse marker sits immediately in that direction.
 */
export function $caretAdjacentToVerseMarker(
  selection: BaseSelection,
  direction: "backward" | "forward",
): boolean {
  return !!$adjacentVerseMarker(selection, direction);
}

/**
 * The verse marker immediately before/after a collapsed caret, or undefined.
 * Node-returning sibling of `$caretAdjacentToVerseMarker`.
 *
 * @param selection - The current selection; only a collapsed RangeSelection can be adjacent.
 * @param direction - `"backward"` looks before the caret; `"forward"` looks after it.
 * @returns The adjacent verse marker node, or undefined when none is adjacent.
 */
export function $adjacentVerseMarker(
  selection: BaseSelection,
  direction: "backward" | "forward",
): SomeVerseNode | undefined {
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return undefined;
  const { anchor } = selection;
  const node = anchor.getNode();
  if (anchor.type === "element" && $isElementNode(node)) {
    const children = node.getChildren();
    const idx = direction === "backward" ? anchor.offset - 1 : anchor.offset;
    if (idx < 0) return undefined;
    const candidate = children[idx];
    return $isSomeVerseNode(candidate) ? candidate : undefined;
  }
  if (direction === "backward") {
    if (anchor.offset !== 0) return undefined;
    const prev = node.getPreviousSibling();
    return $isSomeVerseNode(prev) ? prev : undefined;
  }
  if (anchor.offset !== node.getTextContentSize()) return undefined;
  const next = node.getNextSibling();
  return $isSomeVerseNode(next) ? next : undefined;
}

/** True when the paragraph holding the caret has a preceding block sibling. */
function $hasNeighborBlock(selection: BaseSelection, direction: "backward" | "forward"): boolean {
  if (!$isRangeSelection(selection)) return false;
  const para = $getParaAncestor(selection.anchor.getNode());
  if (!para) return false;
  return !!(direction === "backward" ? para.getPreviousSibling() : para.getNextSibling());
}

/**
 * Rule 1 (all input vectors): block when the given selection spans a block boundary or
 * touches a verse marker. Used by paste/cut/drop/IME guards.
 *
 * Read-only: safe in any read — `editor.getEditorState().read()`, an `editor.update()`, or a
 * command handler.
 */
export function $shouldBlockSelectionReplacement(selection: BaseSelection): boolean {
  return $selectionContainsVerseMarker(selection) || $selectionSpansBlockBoundary(selection);
}

/**
 * Full keyboard decision: combines Rule 1 with collapsed-caret structural rules.
 *
 * Read-only: safe in any read — `editor.getEditorState().read()`, an `editor.update()`, or a
 * command handler. `selection` need not be the current one: a word or line delete's measured extent
 * is judged by it before anything is removed.
 *
 * @param selection - The selection to evaluate.
 * @param intent - The structural edit the keystroke would cause (see {@link keyDownToIntent}).
 * @returns Whether the edit should be blocked in a structure-protected document.
 */
export function $shouldBlockStructuralEdit(selection: BaseSelection, intent: EditIntent): boolean {
  if ($selectionContainsVerseMarker(selection) || $selectionSpansBlockBoundary(selection)) {
    return true;
  }
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return false;
  switch (intent) {
    case "insertParagraph":
      return true;
    case "deleteBackward":
      // With no previous block there is nothing to merge into, but a gutter glyph would still be
      // deleted (and restored at once, leaving an empty undo step) — so refuse that start too.
      return (
        !!$getGutterParaWithCaretAtStart(selection) ||
        ($caretAtParaStart(selection) && $hasNeighborBlock(selection, "backward")) ||
        $caretAdjacentToVerseMarker(selection, "backward")
      );
    case "deleteForward":
      return (
        ($caretAtParaEnd(selection) && $hasNeighborBlock(selection, "forward")) ||
        $caretAdjacentToVerseMarker(selection, "forward")
      );
    case "insertText":
      return false;
  }
}

/**
 * Whether protected structure refuses a word or line delete that would remove `extent`, the range
 * its extension reaches: one that crosses a block or touches a verse ({@link
 * $shouldBlockStructuralEdit}), or one that ends partway into an opaque construct such as a
 * figure's caption. Both handlers that act on such a delete judge it by this, so they agree.
 *
 * Read-only: safe in any read — `editor.getEditorState().read()`, an `editor.update()`, or a
 * command handler. `extent` need not be the current selection.
 */
export function $shouldRefuseExtendedDelete(
  extent: RangeSelection,
  intent: "deleteBackward" | "deleteForward",
): boolean {
  return $rangeReachesIntoOpaqueBlock(extent) || $shouldBlockStructuralEdit(extent, intent);
}

/**
 * The marker/section a delete keystroke would remove at a structural boundary, or undefined
 * when there is nothing it can remove there: ordinary editing, or a boundary
 * {@link $isUnmergeableParaStart} refuses.
 *
 * Backward: the adjacent verse, else the current paragraph (when it has a paragraph or the `\id`
 * line before it to merge into).
 * Forward: the adjacent verse, else the NEXT paragraph (when a next block exists) — the block
 * whose marker the merge removes.
 * A selected gutter marker (either direction): its paragraph, when there is one before it to merge
 * into.
 */
export function $structuralDeleteTarget(
  selection: BaseSelection,
  intent: EditIntent,
): DeleteTarget | undefined {
  const markerPara = $getSelectedParaMarkerPara(selection);
  if (markerPara) {
    return $canMergeIntoPrevious(markerPara) ? { kind: "para", node: markerPara } : undefined;
  }
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return undefined;
  if (intent === "deleteBackward") {
    const verse = $adjacentVerseMarker(selection, "backward");
    if (verse) return { kind: "verse", node: verse };
    if ($caretAtParaStart(selection)) {
      const para = $getParaAncestor(selection.anchor.getNode());
      if ($isSomeParaNode(para) && $canMergeIntoPrevious(para)) return { kind: "para", node: para };
    }
    return undefined;
  }
  if (intent === "deleteForward") {
    const verse = $adjacentVerseMarker(selection, "forward");
    if (verse) return { kind: "verse", node: verse };
    if ($caretAtParaEnd(selection) && $hasNeighborBlock(selection, "forward")) {
      const para = $getParaAncestor(selection.anchor.getNode());
      const next = para?.getNextSibling();
      if ($isSomeParaNode(next)) return { kind: "para", node: next };
    }
    return undefined;
  }
  return undefined;
}

/**
 * True when a collapsed caret sits at the start of a paragraph that has a block before it but
 * cannot merge into it — a chapter marker, say. A Backspace there has nothing it may remove, and
 * left to the native delete it would remove that block, so it must be refused.
 *
 * Read-only: safe in any read or update.
 */
export function $isUnmergeableParaStart(selection: BaseSelection): boolean {
  if (!$caretAtParaStart(selection) || !$hasNeighborBlock(selection, "backward")) return false;
  if (!$isRangeSelection(selection)) return false;
  const para = $getParaAncestor(selection.anchor.getNode());
  return !$isSomeParaNode(para) || !$canMergeIntoPrevious(para);
}

/** True when the live selection still encodes the armed target. */
export function $isArmedSelection(selection: BaseSelection | null, armed: ArmedDelete): boolean {
  if (!selection) return false;
  if (armed.kind === "verse") {
    return $isNodeSelection(selection) && selection.has(armed.key);
  }
  if (armed.kind === "selection") {
    return (
      $isRangeSelection(selection) && !selection.isCollapsed() && $isAtSnapshot(selection, armed)
    );
  }
  // A paragraph armed on its gutter marker stays armed while that marker stays selected; one that
  // shows no marker, while the caret stays where it was.
  if ($getSelectedParaMarkerPara(selection)?.getKey() === armed.key) return true;
  return $isRangeSelection(selection) && $isAtSnapshot(selection, armed);
}

/** True when `selection` has exactly the endpoints `armed` recorded. */
function $isAtSnapshot(selection: RangeSelection, armed: ArmedDelete): boolean {
  if (!armed.anchor || !armed.focus) return false;
  return isSamePoint(selection.anchor, armed.anchor) && isSamePoint(selection.focus, armed.focus);
}

/**
 * True when `para` has nothing but its own marker prefix (a gutter marker, say), or nothing.
 *
 * Read-only: safe in any read or update.
 */
export function $isParaEmpty(para: SomeParaNode): boolean {
  return para
    .getChildren()
    .every(
      (child) =>
        $isGutterMarkerNode(child) ||
        $isSynthesizedMarkerNode(child) ||
        $isMarkerTrailingSeparator(child),
    );
}

/**
 * What the second press of an armed paragraph delete will do to `para`, the paragraph the merge
 * removes: the current one for a Backspace (or a selected gutter marker), the next one for a
 * Delete.
 *
 * Read-only: safe in any read or update.
 */
export function $paraDeleteEffect(para: SomeParaNode, intent: DeleteIntent): ParaDeleteEffect {
  if ($isParaEmpty(para)) return "removeEmptyPara";
  return intent === "deleteForward" ? "joinNextPara" : "joinPreviousPara";
}

/** Collapses the caret to the end of `node` (end of its text for a TextNode). */
export function $placeCaretAtEnd(node: LexicalNode): void {
  if ($isTextNode(node)) {
    const size = node.getTextContentSize();
    node.select(size, size);
  } else if ($isElementNode(node)) {
    node.selectEnd();
  } else {
    node.selectNext(0, 0);
  }
}

/**
 * True when `para` has something right before it to merge into: a paragraph, or the `\id` line —
 * the only case {@link $mergeParaIntoPrevious} acts on.
 *
 * Read-only: safe in any read or update.
 */
export function $canMergeIntoPrevious(para: SomeParaNode): boolean {
  return $isParaLikeNode(para.getPreviousSibling());
}

/**
 * Merge-into-previous semantics for a paragraph delete: move `para`'s children into its
 * previous sibling (which keeps ITS marker), remove `para` (dropping its marker), and place the
 * caret at the junction. Text is never lost. A paragraph merges into a paragraph
 * (ParaNode/ImpliedParaNode either way) or into the `\id` line's BookNode — mirroring
 * markerEditDeletion.utils.ts's marker-deletion merge, which already treats the two the same
 * way, since the line is content like any paragraph's; any other previous sibling is a no-op
 * (see {@link $canMergeIntoPrevious}).
 *
 * Mutating: call inside `editor.update()` (dispatched from StructureKeyboardPlugin.tsx).
 *
 * @param para - The paragraph whose marker is being removed by merging it into its predecessor.
 */
export function $mergeParaIntoPrevious(para: SomeParaNode): void {
  const prev = para.getPreviousSibling();
  if (!$isParaLikeNode(prev)) return;
  const junction = prev.getLastChild();
  const leadingPrefix = para.getFirstChild();
  const dropsLeadingPrefix = $isSynthesizedMarkerNode(leadingPrefix);
  // A trailing marker separator has no meaning once it is no longer the last thing before a
  // dissolving paragraph's own (now-removed) marker — markerEditDeletion.utils.ts drops the same
  // orphaned separator for the identical reason. Unlike that transform, this merge runs directly
  // off the keystroke with no prior pass to remove the marker text first, so `para`'s own leading
  // prefix glyph (markerMode "editable"'s MarkerNode, or the "visible" mode's marker-typed
  // ImmutableTypedTextNode) is still its first child here; moving it into `prev` would fuse it
  // onto `prev`'s trailing text as a literal marker byte (e.g. `first\qsecond`), so it is dropped
  // along with the separator instead of moved.
  const moved = para
    .getChildren()
    .filter(
      (child) =>
        !$isMarkerTrailingSeparator(child) && !(dropsLeadingPrefix && child.is(leadingPrefix)),
    );
  prev.append(...moved);
  para.remove();
  // The caret lands where the two paragraphs joined, not at the end.
  $placeCaretAfterParaChild(prev, junction);
}

/**
 * Collapses the caret just past `child` of `para`: the end of its text when it is a text node, or
 * the boundary after it otherwise — never inside it, so never inside a collapsed note's hidden
 * body. With no `child`, or only the paragraph's marker (a gutter glyph, or Standard view's editable
 * marker and its separator), the paragraph has no content before that point, and the caret goes to
 * its content start: never into the marker, where the next keystroke would rename it.
 *
 * Mutating: call inside `editor.update()`.
 *
 * @param para - The paragraph to place the caret in.
 * @param child - The child of `para` the caret follows.
 */
export function $placeCaretAfterParaChild(para: ParaLikeNode, child: LexicalNode | null): void {
  if (!child || $isSynthesizedMarkerNode(child) || $isMarkerTrailingSeparator(child))
    $placeCaretAtParaContentStart(para);
  else if ($isTextNode(child)) $placeCaretAtEnd(child);
  else $placeCaretAtBoundary(para, child.getIndexWithinParent() + 1);
}

/**
 * Flattens one pasted/dropped node for a structure-protected document: verse and chapter
 * markers vanish (leaf markers), paragraph wrappers are removed but their children kept,
 * and all other (inline) nodes pass through unchanged.
 */
function $flattenForProtectedStructure(node: LexicalNode): LexicalNode[] {
  if ($isSomeVerseNode(node) || $isSomeChapterNode(node)) return [];
  if ($isSomeParaNode(node)) return node.getChildren().flatMap($flattenForProtectedStructure);
  return [node];
}

/**
 * Sanitizes a flat array of pasted/dropped nodes for a structure-protected document by
 * stripping structural markers (paragraph breaks, verse markers, chapter markers) while
 * preserving text, inline character formatting, and notes. A removed top-level paragraph
 * boundary is replaced with a single space so words from adjacent paragraphs do not fuse;
 * nested paragraphs are flattened without inserting a separator.
 *
 * @param nodes - The top-level nodes produced from the payload (e.g. via `$generateNodesFromDOM`).
 * @returns A new flat array of inline nodes safe to insert without altering document structure.
 */
export function $sanitizeNodesForProtectedStructure(nodes: LexicalNode[]): LexicalNode[] {
  const result: LexicalNode[] = [];
  for (const node of nodes) {
    const flattened = $flattenForProtectedStructure(node);
    if (flattened.length === 0) continue;
    if ($isSomeParaNode(node) && result.length > 0) result.push($createTextNode(" "));
    result.push(...flattened);
  }
  return result;
}
