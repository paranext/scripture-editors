/**
 * Two settles that rebuild more than a paragraph's or a note's content: the `\id` line's settle
 * (`$rebuildBook`), and closing an unclosed note at a closer the user typed into it, which ends the
 * note there and moves what followed the closer out after it. Each re-tokenizes its scope's bytes
 * and splices fresh nodes in, so an annotation in that scope survives only if the settle carries it
 * across by bytes, the way every other settle scope does (annotationSurvivesSettle.test.tsx).
 *
 * The rows pin that a comment over content and a hold on display bytes (a glyph, a caller) are
 * still on the same bytes once the settle has run, that the host is never told either was
 * destroyed, and that `getUsj()` taken while the edit was still pending already showed them there.
 *
 * Standard view, the view the marker-edit engine runs in, plus one row with expanded notes, where
 * the note stays expanded once it is closed.
 */
import { mountExpandedNoteEditor, mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { mountInView, oracleView } from "../annotationLocations/annotationLocations.test-helpers";
import { contentPath, propertyPath, $textContaining } from "../positions/positions.test-helpers";
import { displayAnnotated, settleByBlurAndCommit } from "./displayAnnotations.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $isElementNode,
  $setSelection,
  LexicalEditor,
  LexicalNode,
  TextNode,
} from "lexical";
import {
  $isBookNode,
  $isCharNode,
  $isNoteNode,
  $isTypedMarkNode,
  $reportDestroyedDisplayOwner,
  $wrapSelectionInTypedMarkNode,
  COMMENT_MARK_TYPE,
  TypedMarkNode,
  TypedMarkOnRemove,
} from "shared";
import { AnnotationRange } from "shared-react";
import { Mock, vi } from "vitest";

type Mounted = Pick<Awaited<ReturnType<typeof mountStandardViewEditor>>, "ref" | "lexical">;

/** Every `TypedMarkNode` in the tree, depth-first. */
function $marks(nodes: LexicalNode[] = $getRoot().getChildren()): TypedMarkNode[] {
  const out: TypedMarkNode[] = [];
  nodes.forEach((node) => {
    if ($isTypedMarkNode(node)) out.push(node);
    if ($isElementNode(node)) out.push(...$marks(node.getChildren()));
  });
  return out;
}

/** What each annotation mark wraps, per id, in document order. */
function annotatedText(lexical: LexicalEditor): { [id: string]: string[] } {
  return lexical.getEditorState().read(() => {
    const out: { [id: string]: string[] } = {};
    for (const mark of $marks())
      for (const ids of Object.values(mark.getTypedIDs()))
        for (const id of ids) (out[id] ??= []).push(mark.getTextContent());
    return out;
  });
}

/** Annotate `range` as a host would, through the public ref. */
async function annotate(
  mounted: Mounted,
  range: AnnotationRange,
  id: string,
  onRemove?: TypedMarkOnRemove,
): Promise<void> {
  await act(async () => {
    mounted.ref.current?.setAnnotation(range, "test", id, { onRemove });
    await Promise.resolve();
  });
}

/** Put comment `id` on `word` the way an in-editor comment surface does — a comment mark is the
 * annotation `getUsj()` writes into the document, as a milestone pair. */
async function comment(lexical: LexicalEditor, word: string, id: string): Promise<void> {
  await act(async () => {
    lexical.update(() => {
      const text = $textContaining(word);
      const start = text.getTextContent().indexOf(word);
      const selection = $createRangeSelection();
      selection.anchor.set(text.getKey(), start, "text");
      selection.focus.set(text.getKey(), start + word.length, "text");
      $wrapSelectionInTypedMarkNode(selection, COMMENT_MARK_TYPE, id);
    });
    await Promise.resolve();
  });
}

/** `word` between comment `id`'s milestones, the way `getUsj()` writes a comment. */
function commented(word: string, id: string): MarkerContent[] {
  return [
    { type: "ms", marker: "zmsc-s", sid: id },
    word,
    { type: "ms", marker: "zmsc-e", eid: id },
  ];
}

/** `usj` with every comment milestone a carried mark writes left out, so the rest of the document
 * can be compared with the one the edit alone produces. */
function withoutAnnotationMilestones(content: MarkerContent[] | undefined): MarkerContent[] {
  return (content ?? []).flatMap((item): MarkerContent[] => {
    if (typeof item === "string") return [item];
    if (item.type === "ms" && /^zmsc-[se]$/.test(item.marker ?? "")) return [];
    return [
      { ...item, ...(item.content && { content: withoutAnnotationMilestones(item.content) }) },
    ];
  });
}

/** Adjacent strings joined, the way a document without the milestones between them reads. */
function joinedStrings(content: MarkerContent[]): MarkerContent[] {
  const out: MarkerContent[] = [];
  for (const item of content) {
    const previous = out[out.length - 1];
    if (typeof item === "string" && typeof previous === "string") out[out.length - 1] += item;
    else
      out.push(
        typeof item === "string" || !item.content
          ? item
          : { ...item, content: joinedStrings(item.content) },
      );
  }
  return out;
}

function documentOf(usj: Usj | undefined): MarkerContent[] {
  return joinedStrings(withoutAnnotationMilestones(usj?.content));
}

/** Replace `needle` in the text node holding it with `typed`, the caret left after `typed`. */
async function retype(lexical: LexicalEditor, needle: string, typed: string): Promise<void> {
  await act(async () => {
    lexical.update(() => {
      const node: TextNode = $textContaining(needle);
      const text = node.getTextContent();
      const caret = text.indexOf(needle) + typed.length;
      node.setTextContent(text.replace(needle, typed));
      node.select(caret, caret);
    });
    await Promise.resolve();
    await Promise.resolve();
  });
}

// ---------------------------------------------------------------------------------------------
// The `\id` line
// ---------------------------------------------------------------------------------------------

const bookLineUsj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    {
      type: "book",
      marker: "id",
      code: "GEN",
      content: ["Genesis ", { type: "char", marker: "nd", content: ["Lord"] }, " edition text"],
    },
    { type: "chapter", marker: "c", number: "1" },
    { type: "para", marker: "p", content: ["body"] },
  ],
};

/** `Genesis` in the line's first text. */
const genesisRange: AnnotationRange = {
  start: { jsonPath: contentPath([0, 0]), offset: 0 },
  end: { jsonPath: contentPath([0, 0]), offset: "Genesis".length },
};

/** The line's char span's opening glyph. */
const ndOpenerRange: AnnotationRange = {
  start: { jsonPath: contentPath([0, 1]) },
  end: { jsonPath: propertyPath([0, 1], "marker"), propertyOffset: "nd".length },
};

/** Type a terminated char marker at the end of the line, which settles the line at once. */
async function typeCharMarkerInBookLine(mounted: Mounted): Promise<void> {
  await retype(mounted.lexical, " text", " text \\wj x\\wj*");
}

/** Type a paragraph marker into the line, which ends the line there and starts a paragraph. */
async function typeParaMarkerInBookLine(mounted: Mounted): Promise<void> {
  await retype(mounted.lexical, " edition ", " edition \\p ");
}

function bookContent(usj: Usj | undefined): MarkerContent[] | undefined {
  const book = usj?.content[0];
  return typeof book === "object" ? book.content : undefined;
}

describe("an annotation in the `\\id` line", () => {
  it("still wraps the same word after a typed char marker settles the line", async () => {
    const onRemove: Mock<TypedMarkOnRemove> = vi.fn();
    const mounted = await mountStandardViewEditor(bookLineUsj);
    await annotate(mounted, genesisRange, "c1", onRemove);
    await comment(mounted.lexical, "edition", "k1");
    expect(annotatedText(mounted.lexical)).toEqual({ c1: ["Genesis"], k1: ["edition"] });

    await typeCharMarkerInBookLine(mounted);
    const pending = mounted.ref.current?.getUsj();
    settleByBlurAndCommit(mounted);
    const settled = mounted.ref.current?.getUsj();

    // The line really settled: the typed marker is a char span in the book's content.
    expect(
      mounted.lexical.getEditorState().read(() =>
        $getRoot()
          .getChildren()
          .filter($isBookNode)[0]
          .getChildren()
          .some((child) => $isCharNode(child) && child.getMarker() === "wj"),
      ),
    ).toBe(true);
    expect(annotatedText(mounted.lexical)).toEqual({ c1: ["Genesis"], k1: ["edition"] });
    expect(onRemove).not.toHaveBeenCalled();
    expect(bookContent(settled)?.slice(3, 6)).toEqual(commented("edition", "k1"));
    expect(pending).toEqual(settled);
  });

  it("still wraps the same word after a typed paragraph marker ends the line", async () => {
    const onRemove: Mock<TypedMarkOnRemove> = vi.fn();
    const mounted = await mountStandardViewEditor(bookLineUsj);
    await annotate(mounted, genesisRange, "c1", onRemove);
    await comment(mounted.lexical, "text", "k2");
    expect(annotatedText(mounted.lexical)).toEqual({ c1: ["Genesis"], k2: ["text"] });

    await typeParaMarkerInBookLine(mounted);
    const pending = mounted.ref.current?.getUsj();
    settleByBlurAndCommit(mounted);
    const settled = mounted.ref.current?.getUsj();

    // The line really settled: what followed the typed `\p` is a paragraph after the line.
    expect(documentOf(settled)[1]).toEqual({ type: "para", marker: "p", content: ["text"] });
    expect(settled?.content[1]).toEqual({
      type: "para",
      marker: "p",
      content: commented("text", "k2"),
    });
    expect(annotatedText(mounted.lexical)).toEqual({ c1: ["Genesis"], k2: ["text"] });
    expect(onRemove).not.toHaveBeenCalled();
    expect(pending).toEqual(settled);
  });

  it("is already on its word in getUsj() while a marker typed in the line is still pending", async () => {
    const mounted = await mountStandardViewEditor(bookLineUsj);
    await comment(mounted.lexical, "edition", "k1");

    // An unterminated marker stays literal until the edit is committed.
    await retype(mounted.lexical, " text", " text \\wj");
    expect(
      mounted.lexical
        .getEditorState()
        .read(() => $getRoot().getChildren().filter($isBookNode)[0].getTextContent()),
    ).toContain("\\wj");
    const pending = mounted.ref.current?.getUsj();
    settleByBlurAndCommit(mounted);
    const settled = mounted.ref.current?.getUsj();

    expect(JSON.stringify(settled)).toContain('"marker":"wj"');
    expect(annotatedText(mounted.lexical)).toEqual({ k1: ["edition"] });
    expect(bookContent(settled)?.slice(3, 6)).toEqual(commented("edition", "k1"));
    expect(pending).toEqual(settled);
  });

  it("holds a char span's glyph across a settle of the line", async () => {
    const onRemove: Mock<TypedMarkOnRemove> = vi.fn();
    const mounted = await mountStandardViewEditor(bookLineUsj);
    await annotate(mounted, ndOpenerRange, "1", onRemove);
    expect(displayAnnotated(mounted.lexical)).toEqual({ "1": ["\\nd"] });

    await typeCharMarkerInBookLine(mounted);
    settleByBlurAndCommit(mounted);

    expect(JSON.stringify(mounted.ref.current?.getUsj())).toContain('"marker":"wj"');
    expect(displayAnnotated(mounted.lexical)).toEqual({ "1": ["\\nd"] });
    expect(onRemove).not.toHaveBeenCalled();
  });
});

// ---------------------------------------------------------------------------------------------
// A note closed at a closer typed into it
// ---------------------------------------------------------------------------------------------

const noteText = "alpha gap beta delta";

/** `\p before \f + \ft alpha gap beta delta` with the note written without its closer, then ` after`. */
const unclosedNoteUsj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [
        "before ",
        {
          type: "note",
          marker: "f",
          caller: "+",
          closed: "false",
          content: [{ type: "char", marker: "ft", closed: "false", content: [noteText] }],
        } as MarkerObject,
        " after",
      ],
    },
    { type: "para", marker: "p", content: ["depart here"] },
  ],
};

/** `word` in the note's `\ft` text. */
function noteWordRange(word: string): AnnotationRange {
  const offset = noteText.indexOf(word);
  return {
    start: { jsonPath: contentPath([2, 1, 0, 0]), offset },
    end: { jsonPath: contentPath([2, 1, 0, 0]), offset: offset + word.length },
  };
}

/** Type the note's own closer after `gap`, so `beta delta` is what followed it. */
async function typeCloserAfterGap(mounted: Mounted): Promise<void> {
  await retype(mounted.lexical, " gap ", " gap\\f* ");
}

/**
 * The same closer, as an undo brings it back: the bytes restored with no transform running and the
 * edit recorded as pending (see `$pendGlyphEdit`), so the close waits for the next commit — and
 * `getUsj()` in the meantime has to read the note as that settle will leave it. Typed live, a
 * terminated closer settles at once, so this is the shape a pending close takes.
 */
async function pendCloserAfterGap(mounted: Mounted): Promise<void> {
  await act(async () => {
    mounted.lexical.update(
      () => {
        const gap = $textContaining(" gap ");
        gap.setTextContent(gap.getTextContent().replace(" gap ", " gap\\f* "));
        $reportDestroyedDisplayOwner(gap);
        $setSelection(null);
      },
      { skipTransforms: true },
    );
    await Promise.resolve();
    await Promise.resolve();
  });
}

/** The settled paragraph's content, comment milestones left out. */
function paraDocument(usj: Usj | undefined): MarkerContent[] | undefined {
  const para = documentOf(usj)[2];
  return typeof para === "object" ? para.content : undefined;
}

const closedPara: MarkerContent[] = [
  "before ",
  {
    type: "note",
    marker: "f",
    caller: "+",
    content: [{ type: "char", marker: "ft", closed: "false", content: ["alpha gap"] }],
  },
  " beta delta after",
];

describe("an annotation in a note closed at a typed closer", () => {
  it("stays on the note's content and on the content the close moved out after the note", async () => {
    const onRemove: Mock<TypedMarkOnRemove> = vi.fn();
    const mounted = await mountStandardViewEditor(unclosedNoteUsj);
    await annotate(mounted, noteWordRange("alpha"), "in", onRemove);
    await annotate(mounted, noteWordRange("delta"), "out", onRemove);
    await comment(mounted.lexical, "beta", "k1");
    expect(annotatedText(mounted.lexical)).toEqual({ in: ["alpha"], k1: ["beta"], out: ["delta"] });

    await typeCloserAfterGap(mounted);
    const pending = mounted.ref.current?.getUsj();
    settleByBlurAndCommit(mounted);
    const settled = mounted.ref.current?.getUsj();

    // The note really closed there: `beta` left the note for the paragraph.
    expect(paraDocument(settled)).toEqual(closedPara);
    expect(
      mounted.lexical.getEditorState().read(() => {
        const beta = $textContaining("beta");
        return beta.getParents().some($isNoteNode);
      }),
    ).toBe(false);
    expect(annotatedText(mounted.lexical)).toEqual({ in: ["alpha"], k1: ["beta"], out: ["delta"] });
    expect(onRemove).not.toHaveBeenCalled();
    const para = settled?.content[2];
    expect(typeof para === "object" ? para.content?.slice(2) : undefined).toEqual([
      " ",
      ...commented("beta", "k1"),
      " delta after",
    ]);
    expect(pending).toEqual(settled);
  });

  it("is already where the close leaves it in getUsj() while the close is pending", async () => {
    const mounted = await mountStandardViewEditor(unclosedNoteUsj);
    await comment(mounted.lexical, "alpha", "k0");
    await comment(mounted.lexical, "beta", "k1");

    await pendCloserAfterGap(mounted);
    expect(
      mounted.lexical.getEditorState().read(() => $textContaining("\\f*").getTextContent()),
    ).toBe(" gap\\f* ");
    const pending = mounted.ref.current?.getUsj();
    settleByBlurAndCommit(mounted);
    const settled = mounted.ref.current?.getUsj();

    expect(paraDocument(settled)).toEqual(closedPara);
    expect(annotatedText(mounted.lexical)).toEqual({ k0: ["alpha"], k1: ["beta"] });
    const para = settled?.content[2];
    expect(typeof para === "object" ? para.content?.slice(2) : undefined).toEqual([
      " ",
      ...commented("beta", "k1"),
      " delta after",
    ]);
    expect(pending).toEqual(settled);
  });

  it("holds the note's caller across the close", async () => {
    const onRemove: Mock<TypedMarkOnRemove> = vi.fn();
    const mounted = await mountStandardViewEditor(unclosedNoteUsj);
    await annotate(
      mounted,
      {
        start: { jsonPath: propertyPath([2, 1], "caller"), propertyOffset: 0 },
        end: { jsonPath: propertyPath([2, 1], "caller"), propertyOffset: 1 },
      },
      "1",
      onRemove,
    );
    const held = displayAnnotated(mounted.lexical);
    expect(held["1"]?.join("").trim()).toBe("+");

    await typeCloserAfterGap(mounted);
    settleByBlurAndCommit(mounted);

    expect(paraDocument(mounted.ref.current?.getUsj())).toEqual(closedPara);
    expect(displayAnnotated(mounted.lexical)["1"]?.join("").trim()).toBe("+");
    expect(onRemove).not.toHaveBeenCalled();
  });

  it("holds the note's opening glyph across the close", async () => {
    const onRemove: Mock<TypedMarkOnRemove> = vi.fn();
    const mounted = await mountStandardViewEditor(unclosedNoteUsj);
    await annotate(
      mounted,
      {
        start: { jsonPath: contentPath([2, 1]) },
        end: { jsonPath: propertyPath([2, 1], "marker"), propertyOffset: 1 },
      },
      "1",
      onRemove,
    );
    expect(displayAnnotated(mounted.lexical)).toEqual({ "1": ["\\f"] });

    await typeCloserAfterGap(mounted);
    settleByBlurAndCommit(mounted);

    expect(paraDocument(mounted.ref.current?.getUsj())).toEqual(closedPara);
    expect(displayAnnotated(mounted.lexical)).toEqual({ "1": ["\\f"] });
    expect(onRemove).not.toHaveBeenCalled();
  });

  it("stays on both sides of the closer when notes stay expanded", async () => {
    const onRemove: Mock<TypedMarkOnRemove> = vi.fn();
    const mounted = await mountExpandedNoteEditor(unclosedNoteUsj);
    await annotate(mounted, noteWordRange("alpha"), "in", onRemove);
    await annotate(mounted, noteWordRange("delta"), "out", onRemove);
    await comment(mounted.lexical, "beta", "k1");

    await typeCloserAfterGap(mounted);
    const pending = mounted.ref.current?.getUsj();
    settleByBlurAndCommit(mounted);
    const settled = mounted.ref.current?.getUsj();

    expect(paraDocument(settled)).toEqual(closedPara);
    expect(annotatedText(mounted.lexical)).toEqual({ in: ["alpha"], k1: ["beta"], out: ["delta"] });
    expect(onRemove).not.toHaveBeenCalled();
    expect(pending).toEqual(settled);
  });
});

describe.each(["standard", "standard+expandedNotes", "unformatted"])(
  "an annotation on the text a typed closer moves out of its note (%s view)",
  (viewName) => {
    it("follows its bytes into the paragraph when set before the closer is typed", async () => {
      const onRemove: Mock<TypedMarkOnRemove> = vi.fn();
      const mounted = await mountInView(unclosedNoteUsj, oracleView(viewName));
      await annotate(mounted, noteWordRange("delta"), "out", onRemove);

      await typeCloserAfterGap(mounted);
      settleByBlurAndCommit(mounted);

      expect(paraDocument(mounted.ref.current?.getUsj())).toEqual(closedPara);
      expect(annotatedText(mounted.lexical)).toEqual({ out: ["delta"] });
      expect(onRemove).not.toHaveBeenCalled();
    });

    it("follows its bytes into the paragraph when the close is pending", async () => {
      const onRemove: Mock<TypedMarkOnRemove> = vi.fn();
      const mounted = await mountInView(unclosedNoteUsj, oracleView(viewName));
      await annotate(mounted, noteWordRange("delta"), "out", onRemove);

      await pendCloserAfterGap(mounted);
      settleByBlurAndCommit(mounted);

      expect(paraDocument(mounted.ref.current?.getUsj())).toEqual(closedPara);
      expect(annotatedText(mounted.lexical)).toEqual({ out: ["delta"] });
      expect(onRemove).not.toHaveBeenCalled();
    });
  },
);
