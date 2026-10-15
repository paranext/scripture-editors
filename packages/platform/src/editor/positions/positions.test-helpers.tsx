/**
 * Shared harness for the settled-position suites: a {@link SettledPositionContext} built from a
 * mounted editor exactly as `Editor.tsx` builds its own, plus the small tree lookups the rows
 * need. A plain helper module rather than an export from one of the suites, so a suite that needs
 * it does not re-register the other suite's tests by importing it.
 */
import { requireStandardViewOptions } from "../settledGetUsj.test-helpers";
import { $pendGlyphEdit } from "../markerEdit/markerEdit.test-helpers";
import { AnchoredTransientInput } from "../markerEdit/virtualSettle.utils";
import { SettledPositionContext, SettledScopeCache } from "./settledPositions.model";
import {
  ContentJsonPath,
  MarkerObject,
  PropertyJsonPath,
  Usj,
  usjJsonPathFromIndexes,
} from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, $isTextNode, LexicalEditor, NodeKey, TextNode } from "lexical";
import {
  $getLogicalContentItems,
  $isCharNode,
  $isMarkerNode,
  $isNoteNode,
  $isParaNode,
  $isUnknownNode,
  createMarkerLookup,
  defaultStyleInfo,
  getPendedDisplayOwners,
  TypedMarkNode,
} from "shared";
import { hasStandardViewWhitespace, usjReactNodes } from "shared-react";

/** A doc shaped like the settled-output suites': a book, a chapter, `content` as the first
 * paragraph, and a second paragraph to depart to. */
export function twoParaUsj(content: Usj["content"]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
      { type: "chapter", marker: "c", number: "1" },
      { type: "para", marker: "p", content },
      { type: "para", marker: "p", content: ["depart here"] },
    ],
  };
}

/** A note whose reference span keeps its body text off the caller's own slot, so retyping the body
 * cannot coalesce into the caller and cost the note its recognizable shape. */
function noteMarkerObject(reference: string, body: string): MarkerObject {
  return {
    type: "note",
    marker: "f",
    caller: "+",
    content: [{ type: "char", marker: "fr", content: [reference] }, body],
  };
}

/** An optbreak followed by two identically-shaped notes in one paragraph — the shape in which the
 * settle drops a preserved node the live tree still carries, so each side's preserved runs are a
 * different list. The two notes are shape-compatible on purpose: a run crossed at the wrong index
 * then walks successfully instead of failing loudly. */
export function optbreakAndTwoNotesUsj(): Usj {
  return twoParaUsj([
    "head ",
    { type: "optbreak" },
    " first ",
    noteMarkerObject("1.1", "note one"),
    " second ",
    noteMarkerObject("1.2", "note two"),
    " tail text",
  ]);
}

/** Delete the optbreak's `//` display token — the whole of what backspace does to a token-mode
 * child, which Lexical removes outright — leaving the empty `UnknownNode` husk pended with the
 * caret inside it, where the deletion leaves it and where the settle's grace pass keeps it until
 * the caret departs. */
export async function emptyOptbreakHusk(lexical: LexicalEditor): Promise<NodeKey> {
  let key = "";
  await act(async () => {
    lexical.update(() => {
      const para = $getRoot().getChildren().filter($isParaNode)[0];
      const husk = para.getChildren().find($isUnknownNode);
      if (!husk) throw new Error("no optbreak to empty");
      husk.getChildren().forEach((child) => child.remove());
      husk.select(0, 0);
      key = husk.getKey();
    });
    await Promise.resolve();
    await Promise.resolve();
  });
  return key;
}

/** The content indexes of a settled paragraph's notes, in document order. */
export function settledNoteIndexes(para: MarkerObject): number[] {
  const indexes: number[] = [];
  para.content?.forEach((item, index) => {
    if (typeof item !== "string" && item.type === "note") indexes.push(index);
  });
  return indexes;
}

/** A first-class `\ca` span sitting at root beside its chapter — the shape a chapter's alternate
 * number takes before it folds. The chapter scope's rebuild folds the span onto the chapter's
 * `altnumber`, so the two top-level items it spans settle to one. */
export function chapterCaCharUsj(): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
      { type: "chapter", marker: "c", number: "1" },
      { type: "char", marker: "ca", content: ["3"] },
      { type: "para", marker: "p", content: ["body text"] },
      { type: "para", marker: "p", content: ["depart here"] },
    ],
  };
}

/** Retype the root-level `\ca` span's value, leaving the caret on it: the edit that pends the
 * chapter scope. `value` carries the NBSP separator the display run renders. */
export async function typeChapterCaValue(lexical: LexicalEditor, value: string): Promise<void> {
  await act(async () => {
    lexical.update(() => {
      const span = $getRoot().getChildren().find($isCharNode);
      if (!span) throw new Error("no root-level \\ca span");
      const text = span
        .getChildren()
        .find((child): child is TextNode => $isTextNode(child) && !$isMarkerNode(child));
      if (!text) throw new Error("no \\ca value text");
      text.setTextContent(value);
      text.select(text.getTextContentSize(), text.getTextContentSize());
    });
    await Promise.resolve();
    await Promise.resolve();
  });
}

/** The top-level content index of the settled document's chapter. */
export function settledChapterIndex(usj: Usj | undefined): number {
  const index =
    usj?.content?.findIndex((item) => typeof item !== "string" && item.type === "chapter") ?? -1;
  if (index < 0) throw new Error("no settled chapter");
  return index;
}

/** The top-level content index of the settled paragraph whose first content item is `text`. */
export function settledParaIndex(usj: Usj | undefined, text: string): number {
  const index =
    usj?.content?.findIndex(
      (item) => typeof item !== "string" && item.type === "para" && item.content?.[0] === text,
    ) ?? -1;
  if (index < 0) throw new Error(`no settled paragraph starting ${JSON.stringify(text)}`);
  return index;
}

/** The top-level LOGICAL index of the live element whose text contains `needle` — what the settled
 * index is compared against to show a region actually collapsed. */
export function $liveTopIndexContaining(needle: string): number {
  const index = $getLogicalContentItems(
    $getRoot(),
    hasStandardViewWhitespace(requireStandardViewOptions()),
  ).findIndex((item) => item.type === "element" && item.node.getTextContent().includes(needle));
  if (index < 0) throw new Error(`no top-level live item containing ${JSON.stringify(needle)}`);
  return index;
}

/** The marker lookup `Editor.tsx` classifies with when the host passes no stylesheet. */
const editorMarkerLookup = createMarkerLookup(defaultStyleInfo);

/** Build the context `Editor.tsx` builds for its own position translation. Call outside a read —
 * `getPendedDisplayOwners` reads the engine's ledger, not the tree. */
export function settledPositionContext(
  lexical: LexicalEditor,
  options: {
    cache?: SettledScopeCache;
    transientInput?: AnchoredTransientInput;
  } = {},
): SettledPositionContext {
  return {
    pendedKeys: getPendedDisplayOwners(lexical) ?? new Set<string>(),
    transientInput: options.transientInput,
    lastKnownCaret: undefined,
    tier2: { viewOptions: requireStandardViewOptions(), getMarker: editorMarkerLookup },
    nodes: [TypedMarkNode, ...usjReactNodes],
    cache: options.cache ?? { entries: new Map() },
  };
}

/** The first text node whose content includes `needle`. */
export function $textContaining(needle: string): TextNode {
  const node = $getRoot()
    .getAllTextNodes()
    .find((text) => text.getTextContent().includes(needle));
  if (!node) throw new Error(`no text node containing ${JSON.stringify(needle)}`);
  return node;
}

/** A `$.content[…]` path built from computed indexes — the declared literal-template type cannot
 * describe one, so the rows build theirs here. */
export function contentPath(indexes: number[]): ContentJsonPath {
  return usjJsonPathFromIndexes(indexes);
}

/** The same, with a `['property']` suffix. */
export function propertyPath(indexes: number[], property: string): PropertyJsonPath {
  return `${usjJsonPathFromIndexes(indexes)}['${property}']` as PropertyJsonPath;
}

/** The paragraph at `index` of a settled document, as a `MarkerObject`. */
export function settledPara(usj: Usj | undefined, index: number): MarkerObject {
  const para = usj?.content?.[index];
  if (!para || typeof para === "string") throw new Error(`no paragraph at content[${index}]`);
  return para;
}

/** The index of the settled content item that is exactly `text`, so a row's settled coordinates
 * come from the document the host would actually have read. */
export function settledTextIndex(para: MarkerObject, text: string): number {
  const index = para.content?.findIndex((item) => item === text) ?? -1;
  if (index < 0)
    throw new Error(`no settled text item ${JSON.stringify(text)} in ${JSON.stringify(para)}`);
  return index;
}

/** The settled content item whose string CONTAINS `needle`, and where `needle` starts inside it.
 * A settle that splices a node out rejoins the text it split, so a row cannot assume the settled
 * paragraph breaks its text into the same items the live tree does. */
export function settledTextSite(
  para: MarkerObject,
  needle: string,
): { index: number; offset: number } {
  const index =
    para.content?.findIndex((item) => typeof item === "string" && item.includes(needle)) ?? -1;
  const item = para.content?.[index];
  if (index < 0 || typeof item !== "string")
    throw new Error(`no settled text item containing ${JSON.stringify(needle)}`);
  return { index, offset: item.indexOf(needle) };
}

/** The index of the settled content item that is a `char` span. */
export function settledCharIndex(para: MarkerObject): number {
  const index =
    para.content?.findIndex((item) => typeof item !== "string" && item.type === "char") ?? -1;
  if (index < 0) throw new Error(`no settled char span in ${JSON.stringify(para)}`);
  return index;
}

/** Type `text` over the node containing `needle` and leave the caret at `caretOffset` (the start
 * of the paragraph by default — the shape that keeps a terminated literal pending rather than
 * re-tokenizing it inline in the same commit). */
export async function typeOver(
  lexical: LexicalEditor,
  needle: string,
  text: string,
  caretOffset = 0,
): Promise<NodeKey> {
  let key = "";
  await act(async () => {
    lexical.update(() => {
      const node = $textContaining(needle);
      node.setTextContent(text);
      node.select(caretOffset, caretOffset);
      key = node.getKey();
    });
    await Promise.resolve();
    await Promise.resolve();
  });
  return key;
}

/**
 * A paragraph carrying, in order, text, an optbreak, a note, and more text. The optbreak is what
 * makes the note's index within the paragraph differ between the two documents: a settle splices
 * an emptied husk out, so the note that is the paragraph's THIRD live content item is its SECOND
 * settled one.
 */
export function huskBeforeNoteUsj(): Usj {
  return twoParaUsj([
    "before ",
    { type: "optbreak" },
    {
      type: "note",
      marker: "f",
      caller: "+",
      // The reference span keeps the body text off the caller's own slot, so an edit to the body
      // cannot coalesce into the caller and cost the note its recognizable shape. The note's OWN
      // optbreak does for the note's content indexes what the paragraph's does for the
      // paragraph's: settled, the body text is the note's SECOND item; live it is the third.
      content: [
        { type: "char", marker: "fr", content: ["1.1"] },
        { type: "optbreak" },
        "note body",
      ],
    },
    " after",
  ]);
}

/**
 * Pend a NOTE scope and its own PARAGRAPH's scope at the same time, with the paragraph's emptied
 * optbreak husk pending too — the three-way shape that makes the note's settled index differ from
 * its live one.
 *
 * Every pend is ledger-recorded rather than caret-held (`$pendGlyphEdit`): a caret can hold only
 * one pend at a time, since departing the first to make the second settles it.
 *
 * @param pendParaGlyph - When false, the paragraph gets no pend of its own, so the emptied husk is
 *   the ONLY thing planning it — the husk-only paragraph scope.
 */
export async function pendNoteInsideSettlingPara(
  lexical: LexicalEditor,
  { pendParaGlyph = true }: { pendParaGlyph?: boolean } = {},
): Promise<void> {
  await act(async () => {
    lexical.update(() => {
      const para = $getRoot().getChildren().filter($isParaNode)[0];
      if (pendParaGlyph) {
        const glyph = para.getFirstChild();
        if (!$isMarkerNode(glyph)) throw new Error("no paragraph prefix glyph");
        $pendGlyphEdit(glyph, "\\q1");
      }

      const note = para.getChildren().find($isNoteNode);
      if (!note) throw new Error("no note");

      // Both optbreaks: the paragraph's own (which moves the note) and the note's (which moves
      // the note's body text).
      const husks = [para, note].map((owner) => {
        const husk = owner.getChildren().find($isUnknownNode);
        if (!husk) throw new Error("no optbreak to empty");
        return husk;
      });
      husks.forEach((husk) => husk.getChildren().forEach((child) => child.remove()));

      const reference = note.getChildren().find($isCharNode);
      if (!reference) throw new Error("no reference span in the note");
      const glyphs = reference.getChildren().filter($isMarkerNode);
      if (glyphs.length < 2) throw new Error("expected the reference span's glyph pair");
      $pendGlyphEdit(glyphs[0], "\\fq");
      $pendGlyphEdit(glyphs[glyphs.length - 1], "\\fq*");
    });
    await Promise.resolve();
    await Promise.resolve();
  });
}

/** The content index of the settled paragraph's one note. */
export function settledNoteIndex(para: MarkerObject): number {
  const [index, ...rest] = settledNoteIndexes(para);
  if (index === undefined || rest.length > 0)
    throw new Error(`expected exactly one settled note in ${JSON.stringify(para)}`);
  return index;
}
