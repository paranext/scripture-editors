import { UnstorableCharacter } from "./unstorable-text.model";
import {
  $isElementNode,
  $isTextNode,
  LexicalNode,
  PointType,
  RangeSelection,
  TextNode,
} from "lexical";
import { $isUnknownNode } from "shared";

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

/**
 * The first (or last) leaf of `nodes` that inserting them puts right at the insertion point.
 * Inserting merges a leading (or trailing) paragraph's content into the paragraph there, so the
 * walk goes down through blocks; never into an inline element, whose text its markers keep apart
 * from the document's.
 */
function $leafAtInsertionEdge(
  nodes: LexicalNode[],
  edge: "first" | "last",
): LexicalNode | undefined {
  let node = edge === "first" ? nodes[0] : nodes.at(-1);
  while ($isElementNode(node) && !node.isInline() && !$isUnknownNode(node))
    node = (edge === "first" ? node.getFirstChild() : node.getLastChild()) ?? undefined;
  return node;
}

/** Each run of adjacent stored-text nodes among `siblings` and their descendants, in order. */
function $storedTextRuns(siblings: LexicalNode[]): TextNode[][] {
  const runs: TextNode[][] = [];
  let run: TextNode[] = [];
  for (const node of siblings) {
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
 * @param nodes - Nodes about to be pasted or dropped.
 */
export function $insertsNothing(nodes: LexicalNode[]): boolean {
  return nodes.every($holdsNoLeaf);
}

/** The stored-text character next to `point` on `side`, or `""` where there is none. */
function $characterBeside(point: PointType, side: "before" | "after"): string {
  if (point.type !== "text") return "";
  const node = point.getNode();
  if (!$isStoredText(node)) return "";
  const text = node.getTextContent();
  if (side === "before" && point.offset > 0) return text[point.offset - 1];
  if (side === "after" && point.offset < text.length) return text[point.offset];
  const sibling = side === "before" ? node.getPreviousSibling() : node.getNextSibling();
  if (!$isStoredText(sibling)) return "";
  const siblingText = sibling.getTextContent();
  return (side === "before" ? siblingText.at(-1) : siblingText[0]) ?? "";
}

/**
 * The document characters touching what `selection` would insert: the one before its start and
 * the one after its end. Read only from stored text, so `""` beside a glyph, a decorator or an
 * element point.
 *
 * @param selection - Where text is about to be inserted.
 */
export function $textAroundSelection(selection: RangeSelection): { before: string; after: string } {
  const [start, end] = selection.isBackward()
    ? [selection.focus, selection.anchor]
    : [selection.anchor, selection.focus];
  return { before: $characterBeside(start, "before"), after: $characterBeside(end, "after") };
}
