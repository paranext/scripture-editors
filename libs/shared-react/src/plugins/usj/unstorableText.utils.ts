import { UnstorableCharacter } from "./unstorable-text.model";
import {
  $createRangeSelection,
  $getState,
  $isElementNode,
  $isRootNode,
  $isTextNode,
  ElementNode,
  LexicalNode,
  PointType,
  RangeSelection,
  TextNode,
} from "lexical";
import {
  $hasAllSameCharAttributes,
  $isCaretHost,
  $isCharNode,
  $isGutterMarkerNode,
  $isNoteNode,
  $isParaLikeNode,
  $isTypedMarkNode,
  $isUnknownNode,
  $wereSplitFromOneSpan,
  charIdState,
} from "shared";

/** Which of a text's characters stay, and what the rest were. */
interface UnstorableTextMask {
  keep: boolean[];
  removed: UnstorableCharacter[];
}

/**
 * Works out which characters of `text` stay (see {@link removeUnstorableText}).
 *
 * @param text - The text about to be inserted.
 * @param before - The document text just before the insertion point.
 * @param after - The document text just after the insertion point.
 */
function unstorableTextMask(text: string, before = "", after = ""): UnstorableTextMask {
  const characters = Array.from(text);
  const keep = characters.map(() => true);
  const kept = (): number[] => keep.flatMap((isKept, index) => (isKept ? [index] : []));
  let firstBackslash: number | undefined;
  let firstSlash: number | undefined;
  const dropSlash = (index: number) => {
    keep[index] = false;
    firstSlash = Math.min(firstSlash ?? index, index);
  };

  characters.forEach((character, index) => {
    if (character !== "\\") return;
    keep[index] = false;
    firstBackslash ??= index;
  });
  const remaining = kept();
  for (let position = 0; position < remaining.length - 1; position++) {
    const [index, next] = [remaining[position], remaining[position + 1]];
    if (characters[index] !== "/" || characters[next] !== "/") continue;
    dropSlash(index);
    dropSlash(next);
    position++;
  }
  const leading = kept()[0];
  if (leading !== undefined && characters[leading] === "/" && before.endsWith("/"))
    dropSlash(leading);
  const trailing = kept().at(-1);
  if (trailing !== undefined && characters[trailing] === "/" && after.startsWith("/"))
    dropSlash(trailing);

  const firstMet: [number, UnstorableCharacter][] = [];
  if (firstBackslash !== undefined) firstMet.push([firstBackslash, "\\"]);
  if (firstSlash !== undefined) firstMet.push([firstSlash, "//"]);
  firstMet.sort(([a], [b]) => a - b);
  return { keep, removed: firstMet.map(([, character]) => character) };
}

/** `characters` without the ones `keep` drops, starting `keep` at `start`. */
function keptText(characters: string[], keep: boolean[], start = 0): string {
  return characters.filter((_, offset) => keep[start + offset]).join("");
}

/**
 * Removes from `text` what a hidden-marker view cannot store as text: every `\`; then every `//`,
 * pairing slashes from the left (so `///` leaves `/` and `////` nothing); then a `/` at either end
 * that would touch a `/` already in the document, since together they would make `//`. A lone `/`
 * (`and/or`, `1/2`) is kept, and no document character is ever removed.
 *
 * @param text - Text about to be pasted, dropped or typed.
 * @param before - The document text just before the insertion point; only its last character
 *   matters.
 * @param after - The document text just after the insertion point; only its first character
 *   matters.
 * @returns The text to insert, and what was removed: each kind once, ordered by where in `text`
 *   its first removed character was.
 */
export function removeUnstorableText(
  text: string,
  before?: string,
  after?: string,
): { text: string; removed: UnstorableCharacter[] } {
  const { keep, removed } = unstorableTextMask(text, before, after);
  return { text: keptText(Array.from(text), keep), removed };
}

/** Whether `node` is text the document stores as written, rather than display text or a glyph. */
function $isStoredText(node: LexicalNode | null | undefined): node is TextNode {
  return $isTextNode(node) && node.isSimpleText();
}

/** What the file stores for an optional line break, which a hidden-marker view does not show. */
const OPTBREAK_TEXT = "//";

/**
 * Whether `node` is an optional line break (`\optbreak`). The file stores it as the bare text
 * {@link OPTBREAK_TEXT}, so a `/` against it reads back as part of a `//`, though the view shows
 * nothing there.
 */
function $isOptbreak(node: LexicalNode | null | undefined): boolean {
  return $isUnknownNode(node) && node.getTag() === "optbreak";
}

/**
 * The first (or last) leaf of `nodes` that inserting them puts right at the insertion point.
 * Inserting merges a leading (or trailing) paragraph's content into the paragraph there, so the
 * walk goes down through blocks; never into an inline element, whose text its markers keep apart
 * from the document's. An annotation mark is walked through: it saves as nothing, so its text does
 * touch the document's.
 */
function $leafAtInsertionEdge(
  nodes: LexicalNode[],
  edge: "first" | "last",
): LexicalNode | undefined {
  let node = edge === "first" ? nodes[0] : nodes.at(-1);
  while (
    $isElementNode(node) &&
    (!node.isInline() || $isTypedMarkNode(node)) &&
    !$isUnknownNode(node)
  )
    node = (edge === "first" ? node.getFirstChild() : node.getLastChild()) ?? undefined;
  return node;
}

/** `nodes` with each annotation mark replaced by its children, however deeply marks nest. */
function $withoutMarks(nodes: LexicalNode[]): LexicalNode[] {
  return nodes.flatMap((node) =>
    $isTypedMarkNode(node) ? $withoutMarks(node.getChildren()) : node,
  );
}

/**
 * Each run of adjacent stored-text nodes among `siblings` and their descendants, in order. An
 * annotation mark does not break a run: it saves as nothing, so the text either side of its edge
 * ends up adjacent.
 */
function $storedTextRuns(siblings: LexicalNode[]): TextNode[][] {
  const runs: TextNode[][] = [];
  let run: TextNode[] = [];
  for (const node of $withoutMarks(siblings)) {
    if ($isStoredText(node)) {
      run.push(node);
      continue;
    }
    if (run.length > 0) runs.push(run);
    run = [];
    // A hidden construct's content is carried, not shown: the user could not see what went.
    if ($isElementNode(node) && !$isUnknownNode(node))
      runs.push(...$storedTextRuns(node.getChildren()));
  }
  if (run.length > 0) runs.push(run);
  return runs;
}

/**
 * Removes unstorable text (see {@link removeUnstorableText}) from nodes about to be pasted or
 * dropped, in place. Text in adjacent nodes is read as one string, so `a/` then `/b` is a `//`.
 * Leaves alone an unmatched marker's glyph, decorators, display text (token or segmented text,
 * such as a note caller) and the content of constructs the view hides. A text node left empty is
 * removed: from `nodes` when it is listed there, and from its parent when it has one.
 *
 * Mutating: call inside `editor.update()`.
 *
 * @param nodes - The nodes to be inserted, in order.
 * @param before - The document text just before the insertion point; only its last character
 *   matters.
 * @param after - The document text just after the insertion point; only its first character
 *   matters.
 * @returns What was removed: each kind once, in the order first met.
 */
export function $removeUnstorableTextFromNodes(
  nodes: LexicalNode[],
  before?: string,
  after?: string,
): UnstorableCharacter[] {
  const firstLeaf = $leafAtInsertionEdge(nodes, "first");
  const lastLeaf = $leafAtInsertionEdge(nodes, "last");
  const removed: UnstorableCharacter[] = [];
  for (const run of $storedTextRuns(nodes)) {
    const texts = run.map((node) => node.getTextContent());
    const mask = unstorableTextMask(
      texts.join(""),
      run[0] === firstLeaf ? before : undefined,
      run.at(-1) === lastLeaf ? after : undefined,
    );
    for (const character of mask.removed) if (!removed.includes(character)) removed.push(character);
    let start = 0;
    run.forEach((node, index) => {
      const characters = Array.from(texts[index]);
      const kept = keptText(characters, mask.keep, start);
      start += characters.length;
      if (kept === texts[index]) return;
      if (kept) {
        node.setTextContent(kept);
        return;
      }
      // A listed node can still be a child too: the protected-structure sanitizer lists a
      // paragraph's children without detaching them, and inserts whatever stays listed.
      const listedAt = nodes.indexOf(node);
      if (listedAt >= 0) nodes.splice(listedAt, 1);
      if (node.getParent()) node.remove();
    });
  }
  return removed;
}

/** Whether `node` holds nothing to insert: an element with no leaf anywhere inside it. */
function $holdsNoLeaf(node: LexicalNode): boolean {
  return $isElementNode(node) && node.getChildren().every($holdsNoLeaf);
}

/**
 * Whether inserting `nodes` would put nothing into the document: there are none, or each is an
 * element with no leaf anywhere inside it (a character span emptied by
 * {@link $removeUnstorableTextFromNodes}, say). Inserting such nodes over a selection would still
 * delete the selection.
 *
 * Read-only: safe inside `editor.getEditorState().read()`, an `editor.update()`, or a command
 * handler.
 *
 * @param nodes - Nodes about to be pasted or dropped.
 */
export function $insertsNothing(nodes: LexicalNode[]): boolean {
  return nodes.every($holdsNoLeaf);
}

/**
 * The node next to `node` on `side`, reading through annotation marks, which save as nothing: out
 * of one `node` is at the edge of, and into one beside it.
 */
function $neighbourThroughMarks(
  node: LexicalNode,
  side: "before" | "after",
): LexicalNode | undefined {
  let current = node;
  let neighbour = side === "before" ? current.getPreviousSibling() : current.getNextSibling();
  while (!neighbour) {
    const parent = current.getParent();
    if (!$isTypedMarkNode(parent)) return undefined;
    current = parent;
    neighbour = side === "before" ? current.getPreviousSibling() : current.getNextSibling();
  }
  while ($isTypedMarkNode(neighbour))
    neighbour = side === "before" ? neighbour.getLastChild() : neighbour.getFirstChild();
  return neighbour ?? undefined;
}

/**
 * The stored-text character next to `point` on `side`, or `""` where there is none. An optional
 * line break beside it reads as the `/` the file stores for it.
 */
function $characterBeside(point: PointType, side: "before" | "after"): string {
  if (point.type !== "text") return "";
  const node = point.getNode();
  if (!$isStoredText(node)) return "";
  const text = node.getTextContent();
  if (side === "before" && point.offset > 0) return text[point.offset - 1];
  if (side === "after" && point.offset < text.length) return text[point.offset];
  const sibling = $neighbourThroughMarks(node, side);
  if ($isOptbreak(sibling)) return "/";
  if (!$isStoredText(sibling)) return "";
  const siblingText = sibling.getTextContent();
  return (side === "before" ? siblingText.at(-1) : siblingText[0]) ?? "";
}

/**
 * The document characters touching what `selection` would insert: the one before its start and
 * the one after its end. Read only from stored text, so `""` beside a glyph, a decorator or an
 * element point; an optional line break reads as the `/` the file stores for it.
 *
 * Read-only: safe inside `editor.getEditorState().read()`, an `editor.update()`, or a command
 * handler.
 *
 * @param selection - Where text is about to be inserted.
 */
export function $textAroundSelection(selection: RangeSelection): { before: string; after: string } {
  const [start, end] = selection.isBackward()
    ? [selection.focus, selection.anchor]
    : [selection.anchor, selection.focus];
  return { before: $characterBeside(start, "before"), after: $characterBeside(end, "after") };
}

/**
 * What a delete removes, for {@link $deletionJoinsSlashes}:
 *
 * - `range`: everything from `start` to `end` (in document order), joining their paragraphs when
 *   they are in different ones.
 * - `character`: the one character (or other unit a caret steps over: a verse, a note, a hidden
 *   construct) beside `caret` on the side the delete goes, or, at the edge of a paragraph, the
 *   break between it and the paragraph on that side.
 * - `join`: the break between paragraph `first` and the paragraph `second` after it.
 */
export type JudgedDeletion =
  | { kind: "range"; start: PointType; end: PointType }
  | { kind: "character"; caret: PointType; isBackward: boolean }
  | { kind: "join"; first: ElementNode; second: ElementNode };

/** Where a deletion starts or ends, or the caret a character deletion goes from. */
interface Boundary {
  which: "start" | "end" | "caret";
  point: PointType;
  isPlaced?: boolean;
}

/** An inline element (a character span) whose edges the check reads. */
interface Span {
  node: ElementNode;
  isRemoved: boolean;
}

/**
 * A stretch of a paragraph as the file stores it, in order: stored text, an edge of a character
 * span, an atom (anything else the file stores: a verse, a note, a hidden construct, a decorator),
 * or a boundary. Annotation marks, gutter glyphs and caret hosts save as nothing, so they leave no
 * piece; an authored zero-width space is text. An atom the file stores as bare text, an optional
 * line break, carries that `text`: a delete takes it whole, but a `/` it is brought against still
 * makes `///`.
 */
type Piece =
  | { kind: "text"; text: string; isRemoved: boolean }
  | { kind: "atom"; text?: string; isRemoved: boolean }
  | { kind: "edge"; span: Span; isOpening: boolean; isInRange: boolean }
  | { kind: "boundary"; which: Boundary["which"] };

/** The paragraph (or note) `point` is in, or `undefined` when it is in neither. */
function $containerOf(point: PointType): ElementNode | undefined {
  return $containerOfNode(point.getNode());
}

/** The paragraph (or note) `node` is, or is in; `undefined` when it is in neither. */
function $containerOfNode(start: LexicalNode | null): ElementNode | undefined {
  let node = start;
  while (node && !($isElementNode(node) && (!node.isInline() || $isNoteNode(node))))
    node = node.getParent();
  return node && !$isRootNode(node) ? node : undefined;
}

/**
 * The paragraph a note `container` is in, and any other container as it is. A range that runs
 * across a note's edge takes only the note's text on its side: the note stays, its markers between
 * what is left either side, so the range is judged in the paragraph, where the note is an atom it
 * starts or ends inside.
 */
function $outsideNote(container: ElementNode): ElementNode | undefined {
  return $isNoteNode(container) ? $containerOfNode(container.getParent()) : container;
}

/**
 * `container`'s content as {@link Piece}s, with each of `boundaries` that falls in it placed among
 * them. Text and atoms between a `start` and an `end` boundary are marked removed; `isInRange` says
 * whether the read starts inside such a range (a range that began in the paragraph before).
 */
function $readPieces(container: ElementNode, boundaries: Boundary[], isInRange = false): Piece[] {
  const pieces: Piece[] = [];
  const place = (boundary: Boundary) => {
    boundary.isPlaced = true;
    pieces.push({ kind: "boundary", which: boundary.which });
    if (boundary.which === "start") isInRange = true;
    else if (boundary.which === "end") isInRange = false;
  };
  const placeWhere = (isHere: (boundary: Boundary) => boolean) => {
    for (const boundary of boundaries) if (!boundary.isPlaced && isHere(boundary)) place(boundary);
  };
  const isElementPoint =
    (element: ElementNode, index: number) =>
    ({ point }: Boundary) =>
      point.type === "element" && point.key === element.getKey() && point.offset === index;
  const visitChildren = (element: ElementNode) => {
    element.getChildren().forEach((child, index) => {
      placeWhere(isElementPoint(element, index));
      visit(child);
    });
    placeWhere(isElementPoint(element, element.getChildrenSize()));
  };
  const visit = (node: LexicalNode) => {
    if ($isTypedMarkNode(node)) {
      visitChildren(node);
      return;
    }
    if ($isGutterMarkerNode(node) || $isCaretHost(node)) {
      placeWhere(({ point }) => point.key === node.getKey());
      return;
    }
    if ($isStoredText(node)) {
      const text = node.getTextContent();
      const here = boundaries
        .filter((boundary) => !boundary.isPlaced && boundary.point.key === node.getKey())
        .sort((a, b) => a.point.offset - b.point.offset);
      let from = 0;
      for (const boundary of here) {
        const to = Math.min(Math.max(boundary.point.offset, from), text.length);
        if (to > from)
          pieces.push({ kind: "text", text: text.slice(from, to), isRemoved: isInRange });
        from = to;
        place(boundary);
      }
      if (from < text.length)
        pieces.push({ kind: "text", text: text.slice(from), isRemoved: isInRange });
      return;
    }
    if ($isElementNode(node) && node.isInline() && !$isNoteNode(node) && !$isUnknownNode(node)) {
      const span: Span = { node, isRemoved: false };
      pieces.push({ kind: "edge", span, isOpening: true, isInRange });
      visitChildren(node);
      pieces.push({ kind: "edge", span, isOpening: false, isInRange });
      return;
    }
    // An atom goes whole or not at all. A range that ends inside one stops in front of it, and one
    // that starts inside one starts after it, so it stays.
    const isInside = ({ point }: Boundary) => {
      const pointNode = point.getNode();
      return node.is(pointNode) || ($isElementNode(node) && node.isParentOf(pointNode));
    };
    const isAtStart = ({ point }: Boundary) =>
      point.key === node.getKey() && point.type === "text" && point.offset === 0;
    placeWhere(
      (boundary) => isAtStart(boundary) || (isInside(boundary) && boundary.which === "end"),
    );
    pieces.push({
      kind: "atom",
      ...($isOptbreak(node) ? { text: OPTBREAK_TEXT } : {}),
      isRemoved: isInRange,
    });
    placeWhere(isInside);
  };
  visitChildren(container);
  return pieces;
}

/**
 * Settles which character spans go: one the range covers whole, and one left with nothing in it,
 * since a span cannot be empty (`CharNode.canBeEmpty`) and Lexical removes it with its last child.
 */
function settleSpans(pieces: Piece[]): void {
  const open: { span: Span; isInRange: boolean; items: number; removed: number }[] = [];
  const count = (isRemoved: boolean) => {
    const parent = open.at(-1);
    if (!parent) return;
    parent.items += 1;
    if (isRemoved) parent.removed += 1;
  };
  for (const piece of pieces) {
    if (piece.kind === "text" || piece.kind === "atom") count(piece.isRemoved);
    if (piece.kind !== "edge") continue;
    if (piece.isOpening) {
      open.push({ span: piece.span, isInRange: piece.isInRange, items: 0, removed: 0 });
      continue;
    }
    const frame = open.pop();
    if (!frame) continue;
    frame.span.isRemoved =
      (frame.isInRange && piece.isInRange) || (frame.items > 0 && frame.removed === frame.items);
    count(frame.span.isRemoved);
  }
}

/**
 * Whether character spans `preceding` and `following`, brought together, become one again:
 * `CharNodePlugin` combines two pieces of one span that a split cut apart (Enter, then a join
 * back), so their edges go and their text meets. Spans the document already held apart stay two.
 */
function $combineAgain(preceding: ElementNode, following: ElementNode): boolean {
  return (
    $isCharNode(preceding) &&
    $isCharNode(following) &&
    preceding.getMarker() !== "fp" &&
    $wereSplitFromOneSpan(preceding, following) &&
    $hasAllSameCharAttributes(
      { style: preceding.getMarker(), cid: $getState(preceding, charIdState) },
      preceding.getUnknownAttributes(),
      following,
    )
  );
}

/** Whether what is left of `pieces` puts a `/` against a `/` that something removed stood between. */
function $joinsSlashes(pieces: Piece[]): boolean {
  settleSpans(pieces);
  const left: { piece: Piece; isAfterRemoved: boolean }[] = [];
  let isAfterRemoved = false;
  for (const piece of pieces) {
    if (piece.kind === "boundary") continue;
    const isRemoved = piece.kind === "edge" ? piece.span.isRemoved : piece.isRemoved;
    if (isRemoved) {
      isAfterRemoved = true;
      continue;
    }
    const previous = left.at(-1)?.piece;
    if (
      isAfterRemoved &&
      previous?.kind === "edge" &&
      !previous.isOpening &&
      piece.kind === "edge" &&
      piece.isOpening &&
      $combineAgain(previous.span.node, piece.span.node)
    ) {
      left.pop();
      continue;
    }
    left.push({ piece, isAfterRemoved });
    isAfterRemoved = false;
  }
  return left.some(({ piece, isAfterRemoved: isJoined }, index) => {
    const previous = left[index - 1]?.piece;
    return (
      isJoined &&
      !!previous &&
      storedTextOf(previous)?.endsWith("/") === true &&
      storedTextOf(piece)?.startsWith("/") === true
    );
  });
}

/** The text the file stores for `piece` where that is bare text: a text, or an optional break. */
function storedTextOf(piece: Piece): string | undefined {
  if (piece.kind === "text") return piece.text;
  return piece.kind === "atom" ? piece.text : undefined;
}

/**
 * Segments text into user-perceived characters, where the runtime has `Intl.Segmenter`; where it
 * does not, {@link edgeGrapheme} falls back to code points.
 */
const graphemeSegmenter: Intl.Segmenter | undefined =
  typeof Intl !== "undefined" && "Segmenter" in Intl
    ? new Intl.Segmenter(undefined, { granularity: "grapheme" })
    : undefined;

/** The last (or first) user-perceived character of `text`. */
function edgeGrapheme(text: string, edge: "first" | "last"): string {
  const segments = graphemeSegmenter
    ? Array.from(graphemeSegmenter.segment(text), (s) => String(s.segment))
    : Array.from(text);
  return (edge === "first" ? segments[0] : segments.at(-1)) ?? "";
}

/**
 * Marks removed the unit a character delete from the boundary at `caretAt` takes: the nearest
 * character or atom on that side, reading through span edges. Returns `false` when the paragraph
 * has none on that side.
 */
function removeUnitBeside(pieces: Piece[], caretAt: number, isBackward: boolean): boolean {
  const step = isBackward ? -1 : 1;
  for (let index = caretAt + step; index >= 0 && index < pieces.length; index += step) {
    const piece = pieces[index];
    if (piece.kind === "atom") {
      piece.isRemoved = true;
      return true;
    }
    if (piece.kind !== "text") continue;
    const unit = edgeGrapheme(piece.text, isBackward ? "last" : "first");
    const rest = isBackward ? piece.text.slice(0, -unit.length) : piece.text.slice(unit.length);
    const removed: Piece = { kind: "text", text: unit, isRemoved: true };
    const kept: Piece[] = rest ? [{ kind: "text", text: rest, isRemoved: false }] : [];
    pieces.splice(index, 1, ...(isBackward ? [...kept, removed] : [removed, ...kept]));
    return true;
  }
  return false;
}

/** The break between two paragraphs, which a join removes. */
function joinedBreak(): Piece {
  return { kind: "atom", isRemoved: true };
}

/** Whether any of `containers` holds a `/` in its text, without which nothing can join. */
function $holdsSlash(...containers: ElementNode[]): boolean {
  return containers.some((container) => container.getTextContent().includes("/"));
}

/**
 * Whether `deletion` would leave a `/` directly against a `/` it was not already touching, which a
 * hidden-marker view must not save: `//` is USFM's optional line break, which those views hide.
 *
 * Reads what the file stores on either side of what goes: through annotation marks, gutter glyphs
 * and caret hosts, which save as nothing; through a character span the delete empties,
 * which goes with its last child; and through the edges of two pieces of one span that a join
 * brings back together, which `CharNodePlugin` makes one span again. Any other span edge that
 * stays keeps the two apart (its marker is between them in the file), and so does anything else
 * the file stores, such as a verse or a note, except an optional line break: the file stores it
 * as a bare `//`, so a `/` brought against it joins it too. Two `/` already touching are not
 * joined by anything, so a delete beside a `//` already in the text is not counted.
 *
 * Read-only: call inside `editor.update()`, `editor.read()` or a command handler, which have the
 * active editor it needs.
 *
 * @param deletion - What the delete removes.
 */
export function $deletionJoinsSlashes(deletion: JudgedDeletion): boolean {
  if (deletion.kind === "join") {
    if (!$holdsSlash(deletion.first, deletion.second)) return false;
    return $joinsSlashes([
      ...$readPieces(deletion.first, []),
      joinedBreak(),
      ...$readPieces(deletion.second, []),
    ]);
  }
  if (deletion.kind === "range") {
    let first = $containerOf(deletion.start);
    let last = $containerOf(deletion.end);
    if (first && last && !first.is(last)) [first, last] = [$outsideNote(first), $outsideNote(last)];
    if (!first || !last || !$holdsSlash(first, last)) return false;
    const boundaries: Boundary[] = [
      { which: "start", point: deletion.start },
      { which: "end", point: deletion.end },
    ];
    if (first.is(last)) return $joinsSlashes($readPieces(first, boundaries));
    return $joinsSlashes([
      ...$readPieces(first, boundaries),
      joinedBreak(),
      ...$readPieces(last, boundaries, true),
    ]);
  }
  return $characterDeletionJoinsSlashes(deletion.caret, deletion.isBackward, true);
}

/**
 * Whether deleting the unit beside `caret` (see {@link JudgedDeletion}'s `character`) would join
 * two `/`, as {@link $deletionJoinsSlashes} judges it. At the edge of a paragraph the delete joins
 * it to the paragraph on that side when `mayJoinParagraphs` is set, and removes nothing otherwise.
 */
function $characterDeletionJoinsSlashes(
  caret: PointType,
  isBackward: boolean,
  mayJoinParagraphs: boolean,
): boolean {
  const container = $containerOf(caret);
  if (!container) return false;
  const neighbour = isBackward ? container.getPreviousSibling() : container.getNextSibling();
  const canJoin = mayJoinParagraphs && $isParaLikeNode(container) && $isParaLikeNode(neighbour);
  if (!$holdsSlash(container, ...(canJoin ? [neighbour] : []))) return false;
  const pieces = $readPieces(container, [{ which: "caret", point: caret }]);
  const caretAt = pieces.findIndex((piece) => piece.kind === "boundary");
  if (caretAt < 0) return false;
  if (removeUnitBeside(pieces, caretAt, isBackward)) return $joinsSlashes(pieces);
  if (!canJoin) return false;
  const beside = $readPieces(neighbour, []);
  return $joinsSlashes(
    isBackward ? [...beside, joinedBreak(), ...pieces] : [...pieces, joinedBreak(), ...beside],
  );
}

/** The point `offset` characters into the text node `point` is in. */
function $textPointAt(point: PointType, offset: number): PointType {
  const { anchor } = $createRangeSelection();
  anchor.set(point.key, offset, "text");
  return anchor;
}

/**
 * The carets whose two neighbouring characters a transpose at `selection` may swap. The browser
 * (macOS Ctrl+T, a `beforeinput` `insertTranspose`) swaps the characters either side of a caret,
 * or at the end of a paragraph the two before it; it selects the two before it asks, so a
 * selection of two characters stands for the caret between them. An optional line break shows
 * nothing, so a caret before one at the end of a paragraph may be at its end in the browser's
 * eyes: both readings are kept for a caret at the end of its text.
 */
function $transposeCarets(selection: RangeSelection): PointType[] {
  const [start, end] = selection.isBackward()
    ? [selection.focus, selection.anchor]
    : [selection.anchor, selection.focus];
  if (!selection.isCollapsed())
    return start.type === "text" && start.key === end.key && end.offset - start.offset === 2
      ? [$textPointAt(start, start.offset + 1)]
      : [];
  if (start.type !== "text" || start.offset === 0) return [start];
  return start.offset === start.getNode().getTextContentSize()
    ? [start, $textPointAt(start, start.offset - 1)]
    : [start];
}

/**
 * Whether transposing at `selection` (see {@link $transposeCarets}) would put a `/` against a `/`
 * it was not already touching, which a hidden-marker view must not save: `//` is USFM's optional
 * line break, which those views hide.
 *
 * Swapping the characters either side of a caret makes two new neighbours: the one before the
 * caret's left character with its right character, and the left character with the one after the
 * right character. Those are exactly the neighbours a Backspace and a Delete at that caret would
 * make within the paragraph, so each is judged as one (see {@link $deletionJoinsSlashes}), reading
 * what the file stores the same way: an optional line break as the `//` the file stores, and a
 * character span's edge as keeping the two apart. A transpose never joins paragraphs, so a caret
 * at a paragraph's edge judges nothing across it.
 *
 * Read-only: call inside `editor.update()`, `editor.read()` or a command handler.
 *
 * @param selection - The selection the transpose is asked at.
 */
export function $transposeJoinsSlashes(selection: RangeSelection): boolean {
  return $transposeCarets(selection).some((caret) =>
    [true, false].some((isBackward) => $characterDeletionJoinsSlashes(caret, isBackward, false)),
  );
}
