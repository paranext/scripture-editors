/**
 * Pieces of an editable display-byte carrier. A carrier (a marker glyph, a verse, an attribute
 * run's text, a note's editable caller, a chapter's `\c N` glyph, an unmatched closer) that holds
 * an annotation over only PART of its text cannot be painted as one element — Lexical maps one DOM
 * text node to one `TextNode` — so it is split, at every hold boundary, into pieces: adjacent
 * siblings of the same class and identity, each held whole or not at all. The first piece is the
 * carrier's own node ("head"); every later one carries {@link displayPieceContinuationState}, and
 * every piece of a carrier cut into more than one piece carries the chain's
 * {@link displayPieceChainState} (a carrier in one piece carries none). The chain is the carrier:
 * what a reader of the carrier's text, of the node after it, or of a parent's children must see as
 * ONE node.
 *
 * This module holds the state and the chain primitives only. It imports nothing but Lexical and
 * the annotation state, so a node class can read its own chain without an import cycle; the
 * transform that keeps the chain normalized is in `displayPieces.utils.ts`.
 */

import {
  DisplayAnnotation,
  DisplayAnnotations,
  displayAnnotationsState,
  remapAnnotations,
} from "./displayAnnotations.state.js";
import {
  $addUpdateTag,
  $getEditor,
  $getNodeByKey,
  $getSelection,
  $getState,
  $isRangeSelection,
  $isTextNode,
  $setState,
  createState,
  ElementNode,
  LexicalNode,
  NODE_STATE_KEY,
  NodeKey,
  PointType,
  SerializedLexicalNode,
  TextNode,
} from "lexical";

/** `true` on every piece of a carrier but its first. */
export const displayPieceContinuationState = createState("displayPieceContinuation", {
  parse: (value: unknown): true | undefined => (value === true ? true : undefined),
});

/**
 * On every piece of a carrier cut into more than one piece: the chain's id, the key its head had
 * when it was first cut. A continuation continues only the piece before it that carries the same
 * id, so a continuation whose own head is gone never joins a neighbouring carrier of its class,
 * even one with the same marker or number. Copies of a piece (Lexical's own copies, a cut that
 * copies its piece) keep the id; a pasted copy is given its own ({@link $restatePastedPieces}).
 */
export const displayPieceChainState = createState("displayPieceChain", {
  parse: (value: unknown): string | undefined => (typeof value === "string" ? value : undefined),
});

/**
 * On every piece of a carrier in `token` mode that is cut into pieces (an atomic note shell glyph
 * or caller, an unmatched closer): the whole carrier's text. A token is atomic — Lexical removes
 * or replaces it whole — but each piece is a token of its own, so a deletion takes one piece only.
 * A piece whose recorded text is no longer its carrier's tells the piece transform a piece was
 * taken, and it removes the rest ({@link $removeBrokenTokenPieces}).
 */
export const displayPieceTokenTextState = createState("displayPieceTokenText", {
  parse: (value: unknown): string | undefined => (typeof value === "string" ? value : undefined),
});

/**
 * The update tag every cut, join or removal of pieces adds. Pieces are presentation: an update
 * that only re-cuts a carrier changes no byte of the document, and
 * `$joinUndoStepWhenOnlyPiecesChanged` reads this tag to keep such an update out of the undo
 * stack.
 */
export const DISPLAY_PIECES_CUT_TAG = "display-pieces-cut";

/** Whether `node` continues the carrier whose piece precedes it. */
export function $isPieceContinuation(node: LexicalNode | null | undefined): boolean {
  return !!node && $isTextNode(node) && $getState(node, displayPieceContinuationState) === true;
}

/**
 * Whether `node` is of `piece`'s chain: the same class (pieces are made by copying the head, and a
 * Lexical node type names exactly one class) and the same chain id
 * ({@link displayPieceChainState}).
 */
function $isSameChain<T extends LexicalNode>(node: LexicalNode | null, piece: T): node is T {
  return (
    node !== null &&
    node.getType() === piece.getType() &&
    $getState(node, displayPieceChainState) === $getState(piece, displayPieceChainState)
  );
}

/**
 * The first piece of the carrier `node` is a piece of: `node` itself unless it is a continuation
 * whose previous sibling is a piece of its chain. A continuation with no such sibling (its head was
 * deleted) is its own head; the piece transform promotes it.
 */
export function $pieceHead<T extends LexicalNode>(node: T): T {
  let head = node;
  while ($isPieceContinuation(head)) {
    const previous = head.getPreviousSibling();
    if (!$isSameChain(previous, head)) break;
    head = previous;
  }
  return head;
}

/** Every piece of `node`'s carrier, head first. */
export function $pieces<T extends LexicalNode>(node: T): T[] {
  const head = $pieceHead(node);
  const pieces = [head];
  for (
    let next = head.getNextSibling();
    $isSameChain(next, head) && $isPieceContinuation(next);
    next = next.getNextSibling()
  )
    pieces.push(next);
  return pieces;
}

/** The last piece of `node`'s carrier. */
export function $lastPiece<T extends LexicalNode>(node: T): T {
  const pieces = $pieces(node);
  return pieces[pieces.length - 1];
}

/** The whole carrier's text: every piece's text, in order. */
export function $logicalText(node: LexicalNode): string {
  return $pieces(node)
    .map((piece) => piece.getTextContent())
    .join("");
}

/**
 * The whole text of `node`'s carrier in the editor's last committed state — the state the active
 * update started from — or `undefined` when its head did not exist there. A per-node pass that
 * acts only on a change of a carrier's bytes compares against this, not against its node being
 * dirty: cutting or joining pieces beside a carrier dirties it (Lexical rewrites a neighbour's
 * sibling links) without changing a byte of it.
 *
 * Read-only: call inside `editor.update()`.
 */
export function $logicalTextBeforeUpdate(node: LexicalNode): string | undefined {
  const key = $pieceHead(node).getKey();
  return $getEditor()
    .getEditorState()
    .read(() => {
      const before = $getNodeByKey(key);
      return before ? $logicalText(before) : undefined;
    });
}

/** The node after `node`'s whole carrier (after its last piece). */
export function $logicalNextSibling(node: LexicalNode): LexicalNode | null {
  return $lastPiece(node).getNextSibling();
}

/** The node before `node`'s carrier, itself resolved to its head when it is a piece. */
export function $logicalPreviousSibling(node: LexicalNode): LexicalNode | null {
  const previous = $pieceHead(node).getPreviousSibling();
  return previous ? $pieceHead(previous) : null;
}

/** `element`'s children with every continuation piece left out: one node per carrier. */
export function $logicalChildren(element: ElementNode): LexicalNode[] {
  return element.getChildren().filter((child) => !$isPieceContinuation(child));
}

/** Whether `node` is one of the pieces of `carrier`'s carrier. */
export function $isPieceOf(node: LexicalNode | null | undefined, carrier: LexicalNode): boolean {
  return !!node && $pieces(carrier).some((piece) => piece.is(node));
}

/** Where piece `piece` starts in its whole carrier's text. */
export function $pieceStart(piece: LexicalNode): number {
  let start = 0;
  for (const other of $pieces(piece)) {
    if (other.is(piece)) break;
    start += other.getTextContentSize();
  }
  return start;
}

/**
 * The offset into `carrier`'s whole text that the text point at `offset` in node `key` names, or
 * `undefined` when `key` is no piece of `carrier`'s carrier. ({@link $logicalOffset} is the same
 * measure for a piece in hand.)
 */
export function $logicalPointOffset(
  carrier: LexicalNode,
  key: NodeKey,
  offset: number,
): number | undefined {
  let start = 0;
  for (const piece of $pieces(carrier)) {
    if (piece.getKey() === key) return start + offset;
    start += piece.getTextContentSize();
  }
  return undefined;
}

/**
 * For a node transform (or any per-node pass) over a carrier class: when `node` is a continuation
 * piece, mark its carrier's head dirty, so the head's own pass reads and writes the whole carrier,
 * and return `true` — the caller then leaves `node` alone. A continuation whose head is gone is a
 * carrier of its own and returns `false`. Mutating: call inside `editor.update()`.
 */
export function $deferToPieceHead(node: LexicalNode): boolean {
  if (!$isPieceContinuation(node)) return false;
  const head = $pieceHead(node);
  if (head.is(node)) return false;
  head.markDirty();
  return true;
}

/**
 * Where offset `offset` into piece `node` falls in its whole carrier's text: the texts of the
 * pieces before it, plus `offset`. `offset` itself for a carrier in one piece.
 */
export function $logicalOffset(node: LexicalNode, offset: number): number {
  let start = 0;
  for (const piece of $pieces(node)) {
    if (piece.is(node)) break;
    start += piece.getTextContentSize();
  }
  return start + offset;
}

/**
 * The piece of `node`'s carrier holding offset `offset` into the whole carrier's text, and the
 * offset into that piece. An offset on a cut is the end of the piece before it (the side a split
 * keeps a point on); an offset past the end is the end of the last piece.
 */
export function $pieceAtLogicalOffset<T extends LexicalNode>(node: T, offset: number): [T, number] {
  const pieces = $pieces(node);
  let start = 0;
  for (const piece of pieces) {
    const size = piece.getTextContentSize();
    if (offset <= start + size) return [piece, Math.max(0, offset - start)];
    start += size;
  }
  const last = pieces[pieces.length - 1];
  return [last, last.getTextContentSize()];
}

/** Whether `node` is split into more than one piece. */
export function $isSplitCarrier(node: LexicalNode): boolean {
  return $pieces(node).length > 1;
}

/** The annotations in `annotations` as sorted JSON `[type, id]` keys, one per annotation. */
export function pieceHoldKeys(annotations: readonly DisplayAnnotation[]): string[] {
  return [...new Set(annotations.map((a) => JSON.stringify([a.type, a.id])))].sort();
}

function sortedAnnotations(annotations: DisplayAnnotation[]): DisplayAnnotation[] {
  return [...annotations].sort((a, b) => a.start - b.start || a.end - b.end);
}

/** `annotations` with every two ranges of one annotation that touch or overlap joined. */
export function coalesceAnnotations(annotations: DisplayAnnotation[]): DisplayAnnotation[] {
  const out: DisplayAnnotation[] = [];
  for (const annotation of sortedAnnotations(annotations)) {
    const same = out.find(
      (other) =>
        other.type === annotation.type &&
        other.id === annotation.id &&
        other.start <= annotation.end &&
        annotation.start <= other.end,
    );
    if (same) {
      same.start = Math.min(same.start, annotation.start);
      same.end = Math.max(same.end, annotation.end);
    } else out.push({ ...annotation });
  }
  return sortedAnnotations(out);
}

/** The offset of the collapsed caret when it is a text point in `node`; otherwise `undefined`. */
export function $caretOffsetIn(node: LexicalNode): number | undefined {
  const selection = $getSelection();
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return undefined;
  const { anchor } = selection;
  return anchor.type === "text" && anchor.key === node.getKey() ? anchor.offset : undefined;
}

/**
 * The holds stored on text node `node`, measured against its current text. When the caret is in
 * `node`, a change since the holds were measured is read as the user's edit at the caret
 * ({@link remapAnnotations}), so a byte typed beside an identical held one stays outside the hold.
 * Read-only.
 */
export function $textHolds(node: LexicalNode): DisplayAnnotation[] {
  const held: DisplayAnnotations | undefined = $getState(node, displayAnnotationsState);
  return held ? remapAnnotations(held, node.getTextContent(), $caretOffsetIn(node)) : [];
}

/** The holds stored on text piece `piece`, measured against its current text. */
function $pieceHolds(piece: LexicalNode): DisplayAnnotation[] {
  return $textHolds(piece);
}

/** Move the selection's text points on `from` to `to`, `shift` bytes further in. */
function $movePoints(from: LexicalNode, to: LexicalNode, shift: number): void {
  const selection = $getSelection();
  if (!$isRangeSelection(selection)) return;
  const fromKey = from.getKey();
  for (const point of [selection.anchor, selection.focus])
    if (point.type === "text" && point.key === fromKey)
      point.set(to.getKey(), point.offset + shift, "text");
}

/**
 * Run `mutate`, which cuts or joins the pieces right after child `index` of `parent`, and keep
 * every selection point on `parent` itself (a caret at a boundary between its children) at the
 * same place: a point after the changed run is moved by `delta` (the children `mutate` adds, or
 * minus the ones it removes); a point between two joined pieces (`index` < offset ≤
 * `index - delta`, for a join) is put on the joined node where the boundary was, through `inside`.
 * Lexical moves no such point when a piece is inserted without restoring the selection, and on a
 * removal it may re-anchor one onto a neighbouring text, so the points are restated here. Mutating.
 */
export function $keepParentPoints(
  parent: ElementNode | null,
  index: number,
  delta: number,
  mutate: () => void,
  inside?: (offset: number) => [LexicalNode, number],
): void {
  const selection = $getSelection();
  const kept: { point: PointType; offset: number }[] = [];
  if (parent && $isRangeSelection(selection))
    for (const point of [selection.anchor, selection.focus])
      if (point.type === "element" && point.key === parent.getKey() && point.offset > index)
        kept.push({ point, offset: point.offset });
  mutate();
  if (!parent) return;
  for (const { point, offset } of kept) {
    if (delta < 0 && offset <= index - delta && inside) {
      const [node, at] = inside(offset);
      point.set(node.getKey(), at, "text");
    } else point.set(parent.getKey(), offset + delta, "element");
  }
}

/**
 * Join consecutive pieces `pieces` (the first one first) into one node: the first takes every
 * later piece's text and holds (each hold restated at its offset in the joined text, ranges of one
 * annotation that then touch joined), the selection and composition move with their bytes, and
 * the later pieces are removed. Returns the first piece, writable. Mutating.
 */
export function $joinPieces<T extends LexicalNode>(pieces: readonly T[]): T {
  const [head, ...rest] = pieces;
  if (rest.length === 0 || !$isTextNode(head)) return head;
  const annotations: DisplayAnnotation[] = [];
  let text = "";
  for (const piece of pieces) {
    const offset = text.length;
    for (const held of $pieceHolds(piece))
      annotations.push({ ...held, start: held.start + offset, end: held.end + offset });
    text += piece.getTextContent();
  }
  let offset = head.getTextContentSize();
  for (const piece of rest) {
    $movePoints(piece, head, offset);
    offset += piece.getTextContentSize();
  }
  const writable = head.setTextContent(text);
  const joined = coalesceAnnotations(annotations);
  $setState(
    writable,
    displayAnnotationsState,
    joined.length > 0 ? { basis: text, annotations: joined } : undefined,
  );
  // The joined node is not the chain it recorded; the piece transform records the chain anew.
  $setState(writable, displayPieceTokenTextState, undefined);
  $addUpdateTag(DISPLAY_PIECES_CUT_TAG);
  // A boundary between pieces is a place in the joined text: the end of the piece before it.
  const ends: number[] = [];
  let end = 0;
  for (const piece of pieces.slice(0, -1)) ends.push((end += piece.getTextContentSize()));
  const index = writable.getIndexWithinParent();
  $keepParentPoints(
    writable.getParent(),
    index,
    -rest.length,
    () => {
      for (const piece of rest) piece.remove();
    },
    (offset) => [writable, ends[offset - index - 1]],
  );
  return writable;
}

/**
 * When `node` is a piece of a `token` carrier that has lost a piece (its recorded whole text,
 * {@link displayPieceTokenTextState}, is no longer its carrier's), remove every piece that
 * recorded it, as Lexical removes a token whole: what is left is what removing the unsplit token
 * leaves. A node that recorded nothing (text typed in place of a piece) stays. Returns whether
 * anything was removed. Mutating.
 */
export function $removeBrokenTokenPieces(node: LexicalNode): boolean {
  if (!$isTextNode(node)) return false;
  // Cheap for plain text: only a piece that recorded its token's text can find it broken. Text
  // typed in place of a piece records nothing and carries no chain id, so it is no piece of the
  // token's chain. The piece left next to it is transformed too (its sibling changed) and removes
  // its own chain's broken pieces.
  if ($getState(node, displayPieceTokenTextState) === undefined) return false;
  const pieces = $pieces(node);
  const text = $logicalText(node);
  const broken = pieces.filter((piece) => {
    const recorded = $getState(piece, displayPieceTokenTextState);
    return recorded !== undefined && recorded !== text;
  });
  if (broken.length === 0) return false;
  $addUpdateTag(DISPLAY_PIECES_CUT_TAG);
  for (const piece of broken) piece.remove();
  return true;
}

/**
 * Record `node`'s carrier's whole text on each of its pieces when it is a `token` carrier cut into
 * pieces, and clear the record from a carrier in one piece ({@link displayPieceTokenTextState}).
 * Writes only what changes. Mutating.
 */
export function $recordTokenPieces(node: LexicalNode): void {
  const pieces = $pieces(node);
  const head = pieces[0];
  const text =
    pieces.length > 1 && $isTextNode(head) && head.isToken() ? $logicalText(head) : undefined;
  for (const piece of pieces)
    if ($getState(piece, displayPieceTokenTextState) !== text)
      $setState(piece, displayPieceTokenTextState, text);
}

/**
 * Record `node`'s carrier's chain id on each of its pieces when it is cut into more than one piece
 * — the id its head carries, or the head's key for a carrier cut for the first time — and clear it
 * from a carrier in one piece ({@link displayPieceChainState}). Writes only what changes. Mutating.
 */
export function $recordPieceChain(node: LexicalNode): void {
  const pieces = $pieces(node);
  const [head] = pieces;
  const id =
    pieces.length > 1 ? ($getState(head, displayPieceChainState) ?? head.getKey()) : undefined;
  for (const piece of pieces)
    if ($getState(piece, displayPieceChainState) !== id)
      $setState(piece, displayPieceChainState, id);
}

/**
 * Make the pieces among pasted sibling `nodes` (in paste order) pieces of the paste alone: a
 * continuation pasted right after a piece of its chain stays that piece's continuation, under a
 * chain id of the pasted head's own, so the copy never continues the carrier it was copied from,
 * wherever it lands; a continuation pasted without its head is a carrier of its own, keeping its
 * class and state; a node pasted alone carries no chain id; and no piece keeps the token record of
 * the chain it came from. Where a pasted copy then joins a carrier is the piece transform's to
 * decide, as Lexical decides it for text no annotation holds: beside a text Lexical would merge it
 * with, it is joined into that carrier (`$joinMergeableNeighbours`), and nowhere else. One sibling
 * list only, not the nodes' children; each node may have been built from the clipboard's JSON in
 * this update ({@link $parsePastedPieceStates}). Mutating: call inside `editor.update()`.
 */
export function $restatePastedPieces(nodes: readonly LexicalNode[]): void {
  nodes.forEach($parsePastedPieceStates);
  // The pasted chains, each a head and the continuations pasted right after it.
  const chains: LexicalNode[][] = [];
  let previous: { node: LexicalNode; chain: string | undefined } | undefined;
  for (const node of nodes) {
    const chain = $getState(node, displayPieceChainState);
    const continues =
      $isPieceContinuation(node) &&
      previous !== undefined &&
      previous.node.getType() === node.getType() &&
      previous.chain === chain;
    if (continues) chains[chains.length - 1].push(node);
    else {
      if ($isPieceContinuation(node)) $setState(node, displayPieceContinuationState, undefined);
      chains.push([node]);
    }
    if ($getState(node, displayPieceTokenTextState) !== undefined)
      $setState(node, displayPieceTokenTextState, undefined);
    previous = { node, chain };
  }
  // A chain of more than one piece takes its pasted head's key as its id; a node pasted alone is
  // no chain, and carries none (a stale id would keep Lexical from merging it with equal text).
  for (const pieces of chains) {
    const id = pieces.length > 1 ? pieces[0].getKey() : undefined;
    for (const piece of pieces)
      if ($getState(piece, displayPieceChainState) !== id)
        $setState(piece, displayPieceChainState, id);
  }
}

/** The node states a cut or a hold puts on a text: everything a text no annotation holds lacks. */
const PIECE_STATES = [
  displayPieceContinuationState,
  displayPieceChainState,
  displayPieceTokenTextState,
  displayAnnotationsState,
] as const;

/** The keys of {@link PIECE_STATES}. */
const PIECE_STATE_KEYS: ReadonlySet<string> = new Set(PIECE_STATES.map(({ key }) => key));

/**
 * Make the piece and hold states ({@link PIECE_STATES}) that `node`, built from a clipboard's JSON
 * in this update, was copied with writable. Lexical parses a state a node's JSON brings only once
 * the editor knows that state for nodes of its type; until then the value stays in the node's
 * record of unparsed states, which `$getState` falls back to whenever the parsed value is the
 * default, until the node is next copied. So in an editor that has not yet read a state on a node
 * of the pasted node's type (a fresh editor, another editor on the page), `$setState(node, state,
 * undefined)` would not take: the paste would keep the holds and the chain it was copied with, and
 * a transform clearing them would run forever. Reading each state makes it known; re-reading the
 * node from its own JSON then parses it out of the unparsed record. Mutating.
 */
function $parsePastedPieceStates(node: LexicalNode): void {
  const json = node.exportJSON();
  const state = json[NODE_STATE_KEY];
  if (!state || !Object.keys(state).some((key) => PIECE_STATE_KEYS.has(key))) return;
  for (const config of PIECE_STATES) $getState(node, config);
  node.updateFromJSON(json);
}

/** `node`'s node state without {@link PIECE_STATE_KEYS}, as one comparable string. */
function baseStateOf(node: TextNode): string {
  const state = node.exportJSON()[NODE_STATE_KEY] ?? {};
  return JSON.stringify(
    Object.entries(state)
      .filter(([key]) => !PIECE_STATE_KEYS.has(key))
      .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)),
  );
}

/**
 * Whether neighbouring texts `before` and `after` are two Lexical merges into one
 * (`$normalizeTextNode`: both simple text, neither unmergeable, with the same mode, format, style
 * and node state) once the states a cut or a hold puts on them are set aside. Symmetric, as
 * Lexical's rule is in effect: `$canSimpleTextNodesBeMerged` also merges whenever the first node's
 * `__state` is `null`, but a node's state starts `undefined` and is never set to `null`, and a
 * state holding only defaults compares equal to none. The displayPieces tests compare this with
 * Lexical's own merge for each pair of states, in both orders.
 */
function $isMergeableButForPieces(before: LexicalNode | null, after: LexicalNode | null): boolean {
  return (
    $isTextNode(before) &&
    $isTextNode(after) &&
    before.isSimpleText() &&
    after.isSimpleText() &&
    !before.isUnmergeable() &&
    !after.isUnmergeable() &&
    before.getMode() === after.getMode() &&
    before.getFormat() === after.getFormat() &&
    before.getStyle() === after.getStyle() &&
    baseStateOf(before) === baseStateOf(after)
  );
}

/** Whether `node` is a text a cut or a hold has put state on ({@link PIECE_STATE_KEYS}). */
export function $hasPieceState(node: LexicalNode | null): boolean {
  return (
    $isTextNode(node) &&
    ($getState(node, displayAnnotationsState) !== undefined ||
      $getState(node, displayPieceChainState) !== undefined)
  );
}

/**
 * Join `node`'s carrier with each neighbouring text Lexical would merge it with but for pieces
 * and holds ({@link $isMergeableButForPieces}), as one carrier: Lexical merges two neighbouring
 * simple texts with the same state, and the states a cut or a hold puts on a text would otherwise
 * keep a carrier apart from text a document holding no annotation merges into it — a copy pasted
 * beside it, the bytes a paste split off it. The joined text keeps every hold on its own bytes
 * ({@link $joinPieces}), and the piece transform cuts it again where a hold ends. Returns the
 * joined carrier's head. Mutating.
 */
export function $joinMergeableNeighbours(node: LexicalNode): LexicalNode {
  let head = $pieceHead(node);
  for (;;) {
    const before = head.getPreviousSibling();
    if (before && $isMergeableButForPieces(before, head)) {
      head = $joinPieces([...$pieces(before), ...$pieces(head)]);
      continue;
    }
    const last = $lastPiece(head);
    const after = last.getNextSibling();
    if (after && $isMergeableButForPieces(last, after)) {
      head = $joinPieces([...$pieces(head), ...$pieces(after)]);
      continue;
    }
    return head;
  }
}

/**
 * Split `node`'s carrier at `offset` into its whole text as `TextNode.splitText` splits a text in
 * one piece — the split an insertion of nodes at a caret inside a text makes
 * (`RangeSelection.insertNodes`). In a carrier cut into pieces that caret may sit between two
 * pieces, where the insertion finds no text to split and would leave the pieces after it the same
 * carrier as those before. So the pieces are joined first ({@link $mergePieces}) and the joined
 * text is split by `splitText` itself: the bytes before `offset` stay the carrier, and the bytes
 * after become a `TextNode` with the carrier's format, style and node state, whatever the
 * carrier's class, exactly as when no annotation cuts it. Each part keeps the holds over its own
 * bytes; the piece transform cuts each again where a hold ends inside it, and drops the holds of
 * a part that is no carrier (the bytes split off a glyph, a verse or a caller are content). A
 * selection point in the carrier moves with its bytes; one at `offset` ends on the part before it.
 * Returns that part, or `undefined` when `offset` is not strictly inside the carrier's text.
 * Mutating.
 */
export function $splitCarrierAt(node: LexicalNode, offset: number): TextNode | undefined {
  if (!$isTextNode(node)) return undefined;
  const size = $logicalText(node).length;
  if (offset <= 0 || offset >= size) return undefined;
  const head = $mergePieces(node);
  const held = $textHolds(head);
  const [before, after] = head.splitText(offset);
  const parts: [TextNode, number, number][] = [
    [before, 0, offset],
    [after, offset, size],
  ];
  for (const [part, from, to] of parts) {
    const annotations = held
      .filter((annotation) => annotation.start < to && from < annotation.end)
      .map((annotation) => ({
        ...annotation,
        start: Math.max(annotation.start, from) - from,
        end: Math.min(annotation.end, to) - from,
      }));
    $setState(
      part,
      displayAnnotationsState,
      annotations.length > 0 ? { basis: part.getTextContent(), annotations } : undefined,
    );
    // Each part is a carrier of its own; the piece transform records a chain for one it cuts.
    $setState(part, displayPieceChainState, undefined);
  }
  return before;
}

/**
 * Join `node`'s whole carrier back into one node ({@link $joinPieces}). Returns the head; a
 * carrier in one piece is returned untouched. Mutating.
 */
export function $mergePieces<T extends LexicalNode>(node: T): T {
  return $joinPieces($pieces(node));
}

/**
 * Set the whole carrier's text: the chain is joined first ({@link $mergePieces}), so a hold on any
 * piece is carried through the rewrite the way a hold on an unsplit carrier is (by the basis
 * remap), and the piece transform splits the result again where a hold ends inside it.
 * Returns the head. Mutating.
 */
export function $setLogicalText<T extends LexicalNode>(node: T, text: string): T {
  const head = $mergePieces(node);
  if (!$isTextNode(head) || head.getTextContent() === text) return head;
  // The holds as the text stands before the rewrite (a user's edit since they were measured read
  // at the caret), then re-measured across the rewrite here rather than by the basis transform:
  // the rewrite is not the user's edit, so a caret left in the carrier must not be read as where
  // it happened.
  const before = head.getTextContent();
  const held = $getState(head, displayAnnotationsState) ? $textHolds(head) : undefined;
  const writable = head.setTextContent(text);
  if (!held) return writable;
  const annotations = remapAnnotations({ basis: before, annotations: held }, text).sort(
    (a, b) => a.start - b.start || a.end - b.end,
  );
  $setState(
    writable,
    displayAnnotationsState,
    annotations.length > 0 ? { basis: text, annotations } : undefined,
  );
  return writable;
}

/** A serialized node's text, when it is a serialized text node. */
function serializedText(node: SerializedLexicalNode): string | undefined {
  return "text" in node && typeof node.text === "string" ? node.text : undefined;
}

/** The chain id serialized `node` carries ({@link displayPieceChainState}), if any. */
function serializedChainId(node: SerializedLexicalNode): unknown {
  return node[NODE_STATE_KEY]?.[displayPieceChainState.key];
}

/** Whether serialized `node` is a continuation piece ({@link displayPieceContinuationState}). */
export function isSerializedPieceContinuation(node: SerializedLexicalNode): boolean {
  return (
    serializedText(node) !== undefined &&
    node[NODE_STATE_KEY]?.[displayPieceContinuationState.key] === true
  );
}

/** The holds a serialized text piece stores, measured against its own text. */
function serializedPieceHolds(node: SerializedLexicalNode): DisplayAnnotation[] {
  const held = displayAnnotationsState.parse(node[NODE_STATE_KEY]?.[displayAnnotationsState.key]);
  const text = serializedText(node);
  return held && text !== undefined ? remapAnnotations(held, text) : [];
}

/** Serialized `pieces` (a head, then its continuations) as the one node {@link $joinPieces} makes
 * of them: the head with the chain's text and every piece's holds restated in it. */
function joinSerializedChain(pieces: readonly SerializedLexicalNode[]): SerializedLexicalNode {
  const [head] = pieces;
  const annotations: DisplayAnnotation[] = [];
  let text = "";
  for (const piece of pieces) {
    const offset = text.length;
    for (const held of serializedPieceHolds(piece))
      annotations.push({ ...held, start: held.start + offset, end: held.end + offset });
    text += serializedText(piece) ?? "";
  }
  const state: { [key: string]: unknown } = Object.fromEntries(
    Object.entries(head[NODE_STATE_KEY] ?? {}).filter(
      ([key]) =>
        key !== displayPieceContinuationState.key &&
        key !== displayPieceChainState.key &&
        key !== displayPieceTokenTextState.key &&
        key !== displayAnnotationsState.key,
    ),
  );
  const joined = coalesceAnnotations(annotations);
  if (joined.length > 0) state[displayAnnotationsState.key] = { basis: text, annotations: joined };
  const node: SerializedLexicalNode & { text: string } = {
    ...head,
    text,
    [NODE_STATE_KEY]: Object.keys(state).length > 0 ? state : undefined,
  };
  return node;
}

/**
 * The serialized twin of {@link $logicalChildren} and {@link $logicalText}, at every depth:
 * `nodes` (as `exportJSON`/`EditorState.toJSON()` write them) with each carrier's chain — a node
 * followed by its continuation pieces of the same `type` and chain id — written as ONE node, the
 * one {@link $mergePieces} would leave: the head, carrying the chain's whole text and every hold
 * restated in it. A reader of a serialized tree that must see one node per carrier (an exporter, a
 * comparison against a fresh, never-split build) reads it through this. Nodes that are not part of
 * a chain, and subtrees with no chain in them, are returned as the same objects (and `nodes`
 * itself when nothing in it is a chain); nothing passed in is modified.
 */
export function joinSerializedPieces(
  nodes: readonly SerializedLexicalNode[],
): readonly SerializedLexicalNode[] {
  const out: SerializedLexicalNode[] = [];
  let changed = false;
  for (let index = 0; index < nodes.length; index++) {
    const node = nodes[index];
    const chain = [node];
    while (
      index + 1 < nodes.length &&
      nodes[index + 1].type === node.type &&
      isSerializedPieceContinuation(nodes[index + 1]) &&
      serializedChainId(nodes[index + 1]) === serializedChainId(node)
    )
      chain.push(nodes[++index]);
    let joined = chain.length > 1 ? joinSerializedChain(chain) : node;
    if ("children" in joined && Array.isArray(joined.children)) {
      const children: SerializedLexicalNode[] = joined.children;
      const joinedChildren = joinSerializedPieces(children);
      if (joinedChildren !== children) {
        const withChildren: SerializedLexicalNode & {
          children: readonly SerializedLexicalNode[];
        } = { ...joined, children: joinedChildren };
        joined = withChildren;
      }
    }
    if (joined !== node) changed = true;
    out.push(joined);
  }
  return changed ? out : nodes;
}
