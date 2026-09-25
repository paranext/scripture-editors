/**
 * An annotation (`TypedMarkNode`, set through `EditorRef.setAnnotation`) lives inside the scope the
 * user is editing. A Tier-2 settle re-tokenizes that scope's displayed bytes and splices freshly
 * built nodes in place of its children, so anything the rebuild does not carry across is gone — and
 * a mark is transparent in the fragment (its text bytes belong to its children's spans, the wrapper
 * contributes none of its own), so re-tokenization alone cannot reproduce it.
 *
 * These rows pin that the rebuild carries a mark across by the same byte anchors it already carries
 * the caret with: the annotation still wraps the same text, still holds the same `typedIDs`, and
 * its host callbacks are never told it was destroyed.
 *
 * Standard view only — the marker-edit engine that settles a scope runs in no other view.
 */
import {
  mountExpandedNoteEditor,
  mountStandardViewEditor,
  requireStandardViewOptions,
} from "../settledGetUsj.test-helpers";
import {
  contentPath,
  twoParaUsj,
  typeOver,
  $textContaining,
} from "../positions/positions.test-helpers";
import { $pendGlyphEdit } from "./markerEdit.test-helpers";
import { $rebuildParas } from "./tier2Rebuild.utils";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  LexicalEditor,
  LexicalNode,
} from "lexical";
import {
  $chapterGlyphTextNode,
  $isChapterNode,
  $isCharNode,
  $isNoteNode,
  $isParaNode,
  $isTypedMarkNode,
  $wrapSelectionInTypedMarkNode,
  COMMENT_MARK_TYPE,
  getMarker as bundledGetMarker,
  getPendedDisplayOwners,
  NBSP,
  TypedIDs,
  TypedMarkNode,
  TypedMarkOnRemove,
} from "shared";
import { AnnotationRange } from "shared-react";
import { Mock, vi } from "vitest";

/** Every `TypedMarkNode` in the tree, depth-first. */
function $marks(nodes: LexicalNode[] = $getRoot().getChildren()): TypedMarkNode[] {
  const out: TypedMarkNode[] = [];
  nodes.forEach((node) => {
    if ($isTypedMarkNode(node)) out.push(node);
    if ($isElementNode(node)) out.push(...$marks(node.getChildren()));
  });
  return out;
}

/** What each annotation in the tree wraps. */
function annotatedText(lexical: LexicalEditor): string[] {
  return lexical.getEditorState().read(() => $marks().map((mark) => mark.getTextContent()));
}

/** Each annotation's type/id sets, so a carried mark can be shown to be the SAME annotation
 * rather than a fresh one over the same bytes. */
function annotatedIDs(lexical: LexicalEditor): TypedIDs[] {
  return lexical.getEditorState().read(() => $marks().map((mark) => mark.getTypedIDs()));
}

/** The same, with each type's ids sorted: the ORDER ids sit in within a type is an artifact of
 * how overlapping marks merged, and nothing a host can observe. */
function annotatedIDSets(lexical: LexicalEditor): TypedIDs[] {
  return annotatedIDs(lexical).map((typedIDs) =>
    Object.fromEntries(Object.entries(typedIDs).map(([type, ids]) => [type, [...ids].sort()])),
  );
}

/** Whether `predicate` holds anywhere in the tree. */
function treeHas(lexical: LexicalEditor, predicate: (node: LexicalNode) => boolean): boolean {
  return lexical.getEditorState().read(() => {
    const walk = (nodes: LexicalNode[]): boolean =>
      nodes.some((node) => predicate(node) || ($isElementNode(node) && walk(node.getChildren())));
    return walk($getRoot().getChildren());
  });
}

/** `EditorRef.setAnnotation` prefixes the host's type; the tree carries the prefixed one. */
function markType(type: string): string {
  return `external-${type}`;
}

const body = "alpha bravo charlie";
/** `bravo` alone, as an annotation range over the first paragraph's only text item. */
const bravoRange: AnnotationRange = {
  start: { jsonPath: contentPath([2, 0]), offset: body.indexOf("bravo") },
  end: { jsonPath: contentPath([2, 0]), offset: body.indexOf("bravo") + "bravo".length },
};
/** The typed marker literal the settle re-tokenizes, and the text node it is typed over. */
const literalHost = " charlie";
const withLiteral = " charlie \\nd LORD\\nd*";

type Mounted = Awaited<ReturnType<typeof mountStandardViewEditor>>;

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

/** Settle the scope the way an abandoned edit does: blur, then commit the pending literal. */
function settle(mounted: Mounted): void {
  const rootElement = mounted.lexical.getRootElement();
  if (!rootElement) throw new Error("editor root not found");
  act(() => rootElement.blur());
  act(() => mounted.ref.current?.commitPendingMarkerEdits());
}

/** The two-paragraph doc with `bravo` annotated and nothing pending yet. */
async function mountWithAnnotatedBravo(onRemove?: TypedMarkOnRemove): Promise<Mounted> {
  const mounted = await mountStandardViewEditor(twoParaUsj([body]));
  await annotate(mounted, bravoRange, "1", onRemove);
  return mounted;
}

describe("an annotation inside a settling paragraph", () => {
  it("still wraps the same word after the paragraph settles", async () => {
    const mounted = await mountWithAnnotatedBravo();
    expect(annotatedText(mounted.lexical)).toEqual(["bravo"]);

    await typeOver(mounted.lexical, literalHost, withLiteral);
    expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);

    settle(mounted);

    // The settle really happened: the typed literal is a char span now.
    expect(treeHas(mounted.lexical, $isCharNode)).toBe(true);
    expect(annotatedText(mounted.lexical)).toEqual(["bravo"]);
    expect(annotatedIDs(mounted.lexical)).toEqual([{ [markType("test")]: ["1"] }]);
  });

  it("never tells the host its annotation was destroyed", async () => {
    const onRemove: Mock<TypedMarkOnRemove> = vi.fn();
    const mounted = await mountWithAnnotatedBravo(onRemove);

    await typeOver(mounted.lexical, literalHost, withLiteral);
    settle(mounted);

    // Positive controls first: `not.toHaveBeenCalled` is equally happy against a settle that never
    // ran and against a carry that dropped the mark without reporting it, so pin that the settle
    // DID rebuild the paragraph and that the annotation DID survive before reading the spy.
    expect(treeHas(mounted.lexical, $isCharNode)).toBe(true);
    expect(annotatedText(mounted.lexical)).toEqual(["bravo"]);
    expect(onRemove).not.toHaveBeenCalled();
  });

  it("leaves the paragraph a Tier-2 fixed point, annotation and all", async () => {
    const mounted = await mountWithAnnotatedBravo();
    await typeOver(mounted.lexical, literalHost, withLiteral);
    settle(mounted);

    let changed = false;
    act(() =>
      mounted.lexical.update(
        () => {
          const para = $getRoot().getChildren().filter($isParaNode)[0];
          changed = $rebuildParas([para], {
            viewOptions: requireStandardViewOptions(),
            getMarker: bundledGetMarker,
          });
        },
        { discrete: true },
      ),
    );

    // An annotation is a host overlay, not document content, so its presence must not keep the
    // paragraph perpetually unsettled: a scope that can never report a fixed point re-splices,
    // and re-notifies the host, on every settle it is driven through.
    expect(changed).toBe(false);
  });

  it("carries two annotations sharing one word", async () => {
    const mounted = await mountWithAnnotatedBravo();
    await annotate(mounted, bravoRange, "2");
    // Both ids share ONE mark node, so the carry has to re-wrap the same bytes twice.
    expect(annotatedIDSets(mounted.lexical)).toEqual([{ [markType("test")]: ["1", "2"] }]);

    await typeOver(mounted.lexical, literalHost, withLiteral);
    settle(mounted);

    expect(annotatedText(mounted.lexical)).toEqual(["bravo"]);
    expect(annotatedIDSets(mounted.lexical)).toEqual([{ [markType("test")]: ["1", "2"] }]);
  });

  it("drops an annotation whose own bytes became a marker glyph", async () => {
    // The literal is typed OVER the annotated word, so the annotated bytes ARE the bytes the
    // settle restructures: `\nd` and `\nd*` become the char span's glyphs and nothing of the
    // annotated range is document content any more. Re-wrapping from inside a glyph would tear
    // the span out of its own opener, so the carry refuses and the span is built intact.
    const mounted = await mountStandardViewEditor(twoParaUsj([body]));
    await annotate(mounted, bravoRange, "1");
    await typeOver(mounted.lexical, "bravo", "\\nd LORD\\nd*");

    settle(mounted);

    expect(treeHas(mounted.lexical, $isCharNode)).toBe(true);
    expect(annotatedText(mounted.lexical)).toEqual([]);
  });

  it("drops an annotation whose bytes the re-tokenization collapses away", async () => {
    // Re-tokenizing a run of spaces collapses it to ONE, so an annotation over the run's last two
    // (which the editor displays as non-breaking spaces) is left with no bytes at all and both
    // ends of the carry resolve to the same position. Wrapping a collapsed range would mark the
    // text in FRONT of it instead, so the carry refuses. A host cannot address those two spaces \u2014
    // the settled document it reads has already collapsed them \u2014 so the mark is wrapped straight
    // over the live range, the shape an in-editor surface such as `CommentPlugin` creates.
    const mounted = await mountStandardViewEditor(twoParaUsj(["alpha   bravo charlie"]));
    await act(async () => {
      mounted.lexical.update(() => {
        const text = $textContaining("bravo");
        const selection = $createRangeSelection();
        selection.anchor.set(text.getKey(), 6, "text");
        selection.focus.set(text.getKey(), 8, "text");
        $wrapSelectionInTypedMarkNode(selection, markType("test"), "1");
      });
      await Promise.resolve();
    });
    expect(annotatedText(mounted.lexical)).toEqual(["\u00a0\u00a0"]);

    await typeOver(mounted.lexical, "bravo charlie", "bravo charlie \\nd LORD\\nd*");
    settle(mounted);

    expect(treeHas(mounted.lexical, $isCharNode)).toBe(true);
    expect(annotatedText(mounted.lexical)).toEqual([]);
  });

  it("carries annotations at both ends of the paragraph", async () => {
    const mounted = await mountStandardViewEditor(twoParaUsj([body]));
    await annotate(mounted, atOffsets(0, "alpha".length), "start");
    await annotate(mounted, atOffsets(body.indexOf("charlie"), body.length), "end");
    expect(annotatedText(mounted.lexical)).toEqual(["alpha", "charlie"]);

    // Type the literal over the MIDDLE word, so neither annotated end is the edited node.
    await typeOver(mounted.lexical, " bravo ", " bravo \\nd LORD\\nd* ");
    settle(mounted);

    expect(treeHas(mounted.lexical, $isCharNode)).toBe(true);
    expect(annotatedText(mounted.lexical)).toEqual(["alpha", "charlie"]);
    expect(annotatedIDs(mounted.lexical)).toEqual([
      { [markType("test")]: ["start"] },
      { [markType("test")]: ["end"] },
    ]);
  });
});

/** `bravoRange`'s siblings: any offset pair over the first paragraph's only text item. */
function atOffsets(start: number, end: number): AnnotationRange {
  return {
    start: { jsonPath: contentPath([2, 0]), offset: start },
    end: { jsonPath: contentPath([2, 0]), offset: end },
  };
}

/** A paragraph whose annotated text is followed by a note — the preserved-node (sentinel) shape,
 * which rides across the splice whole while the text around it is re-tokenized. */
const noteInParaUsj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [
        "alpha bravo ",
        {
          type: "note",
          marker: "f",
          caller: "+",
          content: [{ type: "char", marker: "fr", content: ["1.1"] }, "note body"],
        },
        " charlie",
      ],
    },
    { type: "para", marker: "p", content: ["depart here"] },
  ],
};

describe("an annotation whose bytes include a preserved node", () => {
  it("still spans the note after the paragraph settles", async () => {
    const mounted = await mountStandardViewEditor(noteInParaUsj);
    await annotate(
      mounted,
      {
        start: { jsonPath: contentPath([2, 0]), offset: "alpha ".length },
        end: { jsonPath: contentPath([2, 2]), offset: " charlie".length },
      },
      "1",
    );
    const before = annotatedText(mounted.lexical);
    expect(before.join("")).toContain("bravo");

    await typeOver(mounted.lexical, " charlie", " charlie \\nd LORD\\nd*");
    settle(mounted);

    expect(treeHas(mounted.lexical, $isCharNode)).toBe(true);
    // The note itself is preserved whole, so the annotation's own text is unchanged apart from
    // the literal that re-tokenized out of its tail.
    expect(annotatedText(mounted.lexical)[0]).toContain("bravo");
    expect(annotatedIDs(mounted.lexical)).toEqual([{ [markType("test")]: ["1"] }]);
  });
});

/** The same paragraph shape, with an expanded note whose CONTENT is its own settle scope. */
const expandedNoteUsj: Usj = {
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
          content: [{ type: "char", marker: "fr", content: ["1.1"] }, body],
        },
        " after",
      ],
    },
    { type: "para", marker: "p", content: ["depart here"] },
  ],
};

/** The expanded-note doc with `bravo` in the note's own content annotated and nothing pending. */
async function mountWithAnnotatedNoteBody(onRemove?: TypedMarkOnRemove): Promise<Mounted> {
  const mounted = await mountExpandedNoteEditor(expandedNoteUsj);
  await annotate(
    mounted,
    {
      start: { jsonPath: contentPath([2, 1, 1]), offset: body.indexOf("bravo") },
      end: { jsonPath: contentPath([2, 1, 1]), offset: body.indexOf("bravo") + "bravo".length },
    },
    "1",
    onRemove,
  );
  return mounted;
}

describe("an annotation inside settling note content", () => {
  it("still wraps the same word after the note's content settles", async () => {
    const mounted = await mountWithAnnotatedNoteBody();
    expect(annotatedText(mounted.lexical)).toEqual(["bravo"]);

    await typeOver(mounted.lexical, literalHost, withLiteral);
    settle(mounted);

    // The note's own content re-tokenized: the literal is a char span inside the note.
    expect(
      treeHas(mounted.lexical, (node) => $isNoteNode(node) && node.getChildren().some($isCharNode)),
    ).toBe(true);
    expect(annotatedText(mounted.lexical)).toEqual(["bravo"]);
    expect(annotatedIDs(mounted.lexical)).toEqual([{ [markType("test")]: ["1"] }]);
  });

  it("never tells the host its annotation was destroyed", async () => {
    const onRemove: Mock<TypedMarkOnRemove> = vi.fn();
    const mounted = await mountWithAnnotatedNoteBody(onRemove);

    await typeOver(mounted.lexical, literalHost, withLiteral);
    settle(mounted);

    // Positive controls first — see the paragraph row of the same name. A note's mark is removed
    // DIRECTLY by the rebuild (it is one of the note's own children), so the suppression this row
    // guards is the only thing between a surviving annotation and a spurious "destroyed".
    expect(treeHas(mounted.lexical, $isCharNode)).toBe(true);
    expect(annotatedText(mounted.lexical)).toEqual(["bravo"]);
    expect(onRemove).not.toHaveBeenCalled();
  });
});

/** Where the collapsed caret sits, as the text it is in plus its offset — `undefined` for no
 * selection at all. */
function caretAt(lexical: LexicalEditor): string | undefined {
  return lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) return undefined;
    return `${selection.anchor.getNode().getTextContent()}@${selection.anchor.offset}`;
  });
}

describe("a comment mark in a settling paragraph", () => {
  it("carries the comment without moving the caret out of the paragraph the user is in", async () => {
    // A comment mark is the one type whose wrap collapses the document selection onto itself
    // (`$wrapSelectionInTypedMarkNode`'s COMMENT_MARK_TYPE branch). Settling a paragraph the caret
    // has already LEFT must not drag it back: the caret restore deliberately does nothing when the
    // caret was parked outside the rebuilt scope, so nothing downstream would undo it.
    const mounted = await mountStandardViewEditor(twoParaUsj([body]));
    // The shape `CommentPlugin` creates: a reserved-type mark wrapped straight over a text range.
    await act(async () => {
      mounted.lexical.update(() => {
        const text = $textContaining(body);
        const selection = $createRangeSelection();
        selection.anchor.set(text.getKey(), body.indexOf("bravo"), "text");
        selection.focus.set(text.getKey(), body.indexOf("bravo") + "bravo".length, "text");
        $wrapSelectionInTypedMarkNode(selection, COMMENT_MARK_TYPE, "c1");
      });
      await Promise.resolve();
    });
    expect(annotatedText(mounted.lexical)).toEqual(["bravo"]);
    expect(annotatedIDs(mounted.lexical)).toEqual([{ [COMMENT_MARK_TYPE]: ["c1"] }]);

    await typeOver(mounted.lexical, literalHost, withLiteral);
    // Moving the caret into the other paragraph is what settles the one it left.
    await act(async () => {
      mounted.lexical.update(() => {
        $textContaining("depart here").select(2, 2);
      });
      await Promise.resolve();
      await Promise.resolve();
    });

    expect(treeHas(mounted.lexical, $isCharNode)).toBe(true);
    expect(annotatedText(mounted.lexical)).toEqual(["bravo"]);
    expect(annotatedIDs(mounted.lexical)).toEqual([{ [COMMENT_MARK_TYPE]: ["c1"] }]);
    expect(caretAt(mounted.lexical)).toBe("depart here@2");
  });
});

describe("a comment mark over typed attribute bytes the settle re-spells away", () => {
  it("is dropped, never moved onto the bytes around them", async () => {
    // `|lemma="grace"` typed after a `\w` span's word settles to the bare default `|grace`, so
    // the typed `lemma="` has no settled bytes at all: both ends of a mark over it snap to the
    // same position, in front of the value. Wrapping there would mark the bytes in front of it.
    const mounted = await mountStandardViewEditor(
      twoParaUsj(["In the ", { type: "char", marker: "w", content: ["grace"] }, " of God made"]),
    );
    const typed = '|lemma="grace"';
    await act(async () => {
      mounted.lexical.update(() => {
        const word = $textContaining("grace");
        const text = `${word.getTextContent()}${typed}`;
        word.setTextContent(text);
        word.select(text.length, text.length);
      });
      await Promise.resolve();
      await Promise.resolve();
    });
    expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);

    // The shape `CommentPlugin` creates, over `lemma="` alone, with the caret back at the end of
    // what was typed.
    await act(async () => {
      mounted.lexical.update(() => {
        const text = $textContaining(typed);
        const start = text.getTextContent().indexOf("lemma=");
        const selection = $createRangeSelection();
        selection.anchor.set(text.getKey(), start, "text");
        selection.focus.set(text.getKey(), start + 'lemma="'.length, "text");
        $wrapSelectionInTypedMarkNode(selection, COMMENT_MARK_TYPE, "c1");
        const tail = $textContaining('grace"');
        tail.select(tail.getTextContentSize(), tail.getTextContentSize());
      });
      await Promise.resolve();
      await Promise.resolve();
    });
    settle(mounted);

    // The settle really happened: the attribute is the span's own now.
    expect(mounted.ref.current?.getUsj()?.content[2]).toEqual({
      type: "para",
      marker: "p",
      content: [
        "In the ",
        { type: "char", marker: "w", lemma: "grace", content: ["grace"] },
        " of God made",
      ],
    });
    expect(annotatedText(mounted.lexical)).toEqual([]);
  });

  it("is dropped rather than re-wrapped onto the text span in front of it", async () => {
    // Beside a mark over `grace|`, the mark over `lemma="` has its start resolve to the start of
    // the settled attribute run and its end to the end of the word in front of it — the same byte
    // count, two different points. Wrapping between them would mark the whole word's span.
    const mounted = await mountStandardViewEditor(
      twoParaUsj(["In the ", { type: "char", marker: "w", content: ["grace"] }, " of God made"]),
    );
    const typed = '|lemma="grace"';
    await act(async () => {
      mounted.lexical.update(() => {
        const word = $textContaining("grace");
        const text = `${word.getTextContent()}${typed}`;
        word.setTextContent(text);
        word.select(text.length, text.length);
      });
      await Promise.resolve();
      await Promise.resolve();
    });
    expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);

    await act(async () => {
      mounted.lexical.update(() => {
        const text = $textContaining(typed);
        const content = text.getTextContent();
        const wrap = (from: number, to: number, id: string) => {
          const selection = $createRangeSelection();
          selection.anchor.set(text.getKey(), from, "text");
          selection.focus.set(text.getKey(), to, "text");
          $wrapSelectionInTypedMarkNode(selection, COMMENT_MARK_TYPE, id);
        };
        const attribute = content.indexOf("lemma=");
        // The later range first, so the earlier one's offsets still address the same node.
        wrap(attribute, attribute + 'lemma="'.length, "c2");
        wrap(content.indexOf("grace"), attribute, "c1");
      });
      await Promise.resolve();
      await Promise.resolve();
    });
    settle(mounted);

    // The mark over `grace|` keeps its word; the settled `|` is the attribute run's own display
    // byte, which a mark never splits off.
    expect(annotatedText(mounted.lexical)).toEqual(["grace"]);
    expect(annotatedIDs(mounted.lexical)).toEqual([{ [COMMENT_MARK_TYPE]: ["c1"] }]);
    // `getUsj()` writes a comment mark as a milestone pair carrying its id.
    const usj = JSON.stringify(mounted.ref.current?.getUsj());
    expect(usj).toContain('"c1"');
    expect(usj).not.toContain('"c2"');
  });
});

/** A paragraph whose annotated range BEGINS at a note: `alpha ` sits outside the mark, the note and
 * `bravo` inside it. */
const markOverNoteUsj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [
        "alpha ",
        {
          type: "note",
          marker: "f",
          caller: "+",
          content: [{ type: "char", marker: "fr", content: ["1.1"] }, "note body"],
        },
        `bravo${literalHost}`,
      ],
    },
    { type: "para", marker: "p", content: ["depart here"] },
  ],
};

describe("an annotation that begins on a preserved node", () => {
  it("still wraps the note and the text after it once the paragraph settles", async () => {
    const mounted = await mountStandardViewEditor(markOverNoteUsj);
    await annotate(
      mounted,
      {
        start: { jsonPath: contentPath([2, 2]), offset: 0 },
        end: { jsonPath: contentPath([2, 2]), offset: "bravo".length },
      },
      "1",
    );
    // A USJ location naming the note resolves INSIDE it, so a range starting at a note is not
    // something `setAnnotation` can spell; the shape is reached the way a user reaches it, by
    // taking the mark's leading text out of it — here, by moving the note in.
    await act(async () => {
      mounted.lexical.update(() => {
        const para = $getRoot().getChildren().find($isParaNode);
        const note = para?.getChildren().find($isNoteNode);
        const target = para?.getChildren().find($isTypedMarkNode)?.getFirstChild();
        if (!note || !target) throw new Error("expected a note and a mark in the paragraph");
        target.insertBefore(note);
      });
      await Promise.resolve();
    });
    const before = annotatedText(mounted.lexical);
    expect(before).toHaveLength(1);
    expect(before[0]).toContain("note body");
    expect(before[0]).toContain("bravo");

    await typeOver(mounted.lexical, literalHost, withLiteral);
    settle(mounted);

    expect(treeHas(mounted.lexical, $isCharNode)).toBe(true);
    // The note is preserved whole across the splice, and the mark it started on still holds it —
    // its placeholder byte cannot express a position in front of it, so the run is pulled back in.
    expect(annotatedText(mounted.lexical)).toEqual(before);
    expect(annotatedIDs(mounted.lexical)).toEqual([{ [markType("test")]: ["1"] }]);
  });

  it("carries two annotations that begin on the same note", async () => {
    // Each annotation re-wraps against the tree the one before it already changed: the first pulls
    // the note into its mark, so the second's start has to find the note there.
    const mounted = await mountStandardViewEditor(markOverNoteUsj);
    for (const id of ["1", "2"])
      await annotate(
        mounted,
        {
          start: { jsonPath: contentPath([2, 2]), offset: 0 },
          end: { jsonPath: contentPath([2, 2]), offset: "bravo".length },
        },
        id,
      );
    await act(async () => {
      mounted.lexical.update(() => {
        const para = $getRoot().getChildren().find($isParaNode);
        const note = para?.getChildren().find($isNoteNode);
        const target = para?.getChildren().find($isTypedMarkNode)?.getFirstChild();
        if (!note || !target) throw new Error("expected a note and a mark in the paragraph");
        target.insertBefore(note);
      });
      await Promise.resolve();
    });
    const before = annotatedText(mounted.lexical);
    expect(before).toHaveLength(1);
    expect(before[0]).toContain("note body");
    expect(annotatedIDSets(mounted.lexical)).toEqual([{ [markType("test")]: ["1", "2"] }]);

    await typeOver(mounted.lexical, literalHost, withLiteral);
    settle(mounted);

    expect(treeHas(mounted.lexical, $isCharNode)).toBe(true);
    expect(annotatedText(mounted.lexical)).toEqual(before);
    expect(annotatedIDSets(mounted.lexical)).toEqual([{ [markType("test")]: ["1", "2"] }]);
  });

  it("still wraps a note it holds alone once the paragraph settles", async () => {
    const onRemove = vi.fn();
    const mounted = await mountStandardViewEditor(markOverNoteUsj);
    await annotate(
      mounted,
      {
        start: { jsonPath: contentPath([2, 2]), offset: 0 },
        end: { jsonPath: contentPath([2, 2]), offset: "bravo".length },
      },
      "1",
      onRemove,
    );
    // The shape a comment on nothing but a footnote leaves: move the note into the mark, then the
    // mark's own text back out of it.
    await act(async () => {
      mounted.lexical.update(() => {
        const para = $getRoot().getChildren().find($isParaNode);
        const note = para?.getChildren().find($isNoteNode);
        const mark = para?.getChildren().find($isTypedMarkNode);
        const text = mark?.getFirstChild();
        if (!note || !mark || !text) throw new Error("expected a note and a mark in the paragraph");
        text.insertBefore(note);
        mark.insertAfter(text);
      });
      await Promise.resolve();
    });
    const before = annotatedText(mounted.lexical);
    expect(before).toHaveLength(1);
    expect(before[0]).toContain("note body");
    expect(before[0]).not.toContain("bravo");

    await typeOver(mounted.lexical, literalHost, `bravo${withLiteral}`);
    settle(mounted);

    expect(treeHas(mounted.lexical, $isCharNode)).toBe(true);
    // Both ends of a mark over nothing but a preserved node anchor just past it, so there is no
    // byte range to re-wrap; the node itself, which the splice carries across whole, is the range.
    expect(annotatedText(mounted.lexical)).toEqual(before);
    expect(annotatedIDs(mounted.lexical)).toEqual([{ [markType("test")]: ["1"] }]);
    expect(
      treeHas(
        mounted.lexical,
        (node) => $isTypedMarkNode(node) && $isNoteNode(node.getFirstChild()),
      ),
    ).toBe(true);
    expect(onRemove).not.toHaveBeenCalled();
  });
});

/** An expanded note whose content is `\fr 1.1` then `body` as a direct text child, and optionally a
 * preserved span (an unknown char marker, carried across the splice whole) inside that text. */
function directTextNoteUsj(noteContent: NonNullable<Usj["content"]>): Usj {
  return {
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
          { type: "note", marker: "f", caller: "+", content: noteContent },
          " after",
        ],
      },
      { type: "para", marker: "p", content: ["depart here"] },
    ],
  };
}

describe("annotations in a note's direct text", () => {
  it("carries every annotation, not just the first, when the note's content settles", async () => {
    const mounted = await mountExpandedNoteEditor(
      directTextNoteUsj([{ type: "char", marker: "fr", content: ["1.1"] }, body]),
    );
    for (const word of ["alpha", "bravo"])
      await annotate(
        mounted,
        {
          start: { jsonPath: contentPath([2, 1, 1]), offset: body.indexOf(word) },
          end: { jsonPath: contentPath([2, 1, 1]), offset: body.indexOf(word) + word.length },
        },
        word,
      );
    expect(annotatedText(mounted.lexical)).toEqual(["alpha", "bravo"]);

    await typeOver(mounted.lexical, literalHost, withLiteral);
    settle(mounted);

    expect(treeHas(mounted.lexical, $isCharNode)).toBe(true);
    expect(annotatedText(mounted.lexical)).toEqual(["alpha", "bravo"]);
  });

  describe("after a preserved span", () => {
    const preservedUsj = directTextNoteUsj([
      { type: "char", marker: "fr", content: ["1.1 "] },
      "aa ",
      { type: "char", marker: "zcustom", content: ["x"] },
      " bb cc ee",
    ]);

    it("carries an annotation when the note's content settles", async () => {
      const mounted = await mountExpandedNoteEditor(preservedUsj);
      await annotate(
        mounted,
        {
          start: { jsonPath: contentPath([2, 1, 3]), offset: 1 },
          end: { jsonPath: contentPath([2, 1, 3]), offset: 3 },
        },
        "1",
      );
      expect(annotatedText(mounted.lexical)).toEqual(["bb"]);

      await typeOver(mounted.lexical, " cc ee", " cc ee \\nd LORD\\nd*");
      settle(mounted);

      expect(annotatedText(mounted.lexical)).toEqual(["bb"]);
    });

    it("puts the caret back where it was when the note's content settles", async () => {
      const mounted = await mountExpandedNoteEditor(preservedUsj);
      await typeOver(mounted.lexical, " bb cc ee", " bb cc ee \\nd LORD\\nd*", " bb cc".length);
      act(() => mounted.ref.current?.commitPendingMarkerEdits());

      expect(caretAt(mounted.lexical)).toBe(" bb cc ee @6");
    });
  });
});

describe("an annotation that begins with a whole char span", () => {
  it("still wraps the span's text and what follows it once the paragraph settles", async () => {
    const mounted = await mountStandardViewEditor(
      twoParaUsj(["start ", { type: "char", marker: "nd", content: ["name"] }, " end words"]),
    );
    await annotate(
      mounted,
      {
        start: { jsonPath: contentPath([2, 0]), offset: 2 },
        end: { jsonPath: contentPath([2, 2]), offset: 4 },
      },
      "1",
    );
    // The shape a user leaves by deleting the mark's leading text: the char span is now the mark's
    // first child.
    await act(async () => {
      mounted.lexical.update(() => {
        const lead = $marks()[0]?.getFirstChild();
        if (!lead || $isCharNode(lead)) throw new Error("expected leading text in the mark");
        lead.remove();
      });
      await Promise.resolve();
    });
    expect(
      treeHas(
        mounted.lexical,
        (node) => $isTypedMarkNode(node) && $isCharNode(node.getFirstChild()),
      ),
    ).toBe(true);

    await typeOver(mounted.lexical, " words", " words \\wj x\\wj*");
    settle(mounted);

    // The span's glyphs and separator are display, not content: the carried mark covers the
    // span's text and what follows it, and the separator stays the span's own.
    expect(annotatedText(mounted.lexical)).toEqual(["name", " end"]);
    expect(mounted.ref.current?.getUsj()?.content[2]).toEqual({
      type: "para",
      marker: "p",
      content: [
        "st",
        { type: "char", marker: "nd", content: ["name"] },
        " end words ",
        { type: "char", marker: "wj", content: ["x"] },
      ],
    });
    expect(annotatedIDs(mounted.lexical)).toEqual(
      annotatedText(mounted.lexical).map(() => ({ [markType("test")]: ["1"] })),
    );
  });
});

describe("a comment mark in a chapter's settle region", () => {
  /** A chapter beside an unclosed `\ca` span: unclosed, the span does not fold onto the chapter,
   * so it stays content inside the region the chapter's rebuild replaces. */
  const unfoldedCaUsj: Usj = {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
      { type: "chapter", marker: "c", number: "1" },
      { type: "char", marker: "ca", content: ["alt"], closed: "false" },
      { type: "para", marker: "p", content: ["plain body"] },
    ],
  };

  it("survives renumbering the chapter, and getUsj() while pending agrees", async () => {
    const mounted = await mountStandardViewEditor(unfoldedCaUsj);
    await act(async () => {
      mounted.lexical.update(() => {
        const text = $textContaining("alt");
        const start = text.getTextContent().indexOf("alt");
        const selection = $createRangeSelection();
        selection.anchor.set(text.getKey(), start, "text");
        selection.focus.set(text.getKey(), start + "alt".length, "text");
        $wrapSelectionInTypedMarkNode(selection, COMMENT_MARK_TYPE, "c1");
        const chapter = $getRoot().getChildren().find($isChapterNode);
        const glyph = chapter && $chapterGlyphTextNode(chapter);
        if (!glyph) throw new Error("expected the chapter glyph text");
        $pendGlyphEdit(glyph, "\\c 2");
      });
      await Promise.resolve();
      await Promise.resolve();
    });
    const pending = mounted.ref.current?.getUsj();

    settle(mounted);
    const settled = mounted.ref.current?.getUsj();

    expect(annotatedText(mounted.lexical)).toEqual(["alt"]);
    expect(annotatedIDs(mounted.lexical)).toEqual([{ [COMMENT_MARK_TYPE]: ["c1"] }]);
    expect((settled?.content[1] as MarkerObject | undefined)?.number).toBe("2");
    expect(settled?.content[2]).toEqual({
      type: "char",
      marker: "ca",
      closed: "false",
      content: [
        { type: "ms", marker: "zmsc-s", sid: "c1" },
        "alt",
        { type: "ms", marker: "zmsc-e", eid: "c1" },
      ],
    });
    expect(pending).toEqual(settled);
  });
});

describe("a comment mark after a declared transient literal", () => {
  it("stays on its word in getUsj() while the literal is cut out of the settled document", async () => {
    const mounted = await mountStandardViewEditor(twoParaUsj([body]));
    await act(async () => {
      mounted.lexical.update(() => {
        const text = $textContaining(body);
        const selection = $createRangeSelection();
        selection.anchor.set(text.getKey(), body.indexOf("charlie"), "text");
        selection.focus.set(text.getKey(), body.length, "text");
        $wrapSelectionInTypedMarkNode(selection, COMMENT_MARK_TYPE, "c1");
        // The wrap parks the caret on the comment; a declaration is anchored to the caret's node.
        $textContaining("alpha").select("alpha".length, "alpha".length);
      });
      await Promise.resolve();
    });
    act(() => mounted.ref.current?.setTransientInput({ kind: "marker-literal", run: "\\q1" }));
    // A palette's trigger typed after `alpha`, with the caret after it — the bytes the settled
    // document leaves out, three characters IN FRONT of the mark.
    await act(async () => {
      mounted.lexical.update(() => {
        const lead = $textContaining("alpha");
        const typed = lead.getTextContent().replace("alpha", "alpha\\q1");
        lead.setTextContent(typed);
        lead.select("alpha\\q1".length, "alpha\\q1".length);
      });
      await Promise.resolve();
      await Promise.resolve();
    });

    const settled = mounted.ref.current?.getUsj();

    expect(settled?.content[2]).toEqual({
      type: "para",
      marker: "p",
      content: [
        "alpha bravo ",
        { type: "ms", marker: "zmsc-s", sid: "c1" },
        "charlie",
        { type: "ms", marker: "zmsc-e", eid: "c1" },
      ],
    });
  });
});

/**
 * A footnote typed as plain text settles into a real note. Live, the literal spells every one of
 * its bytes; settled, the new note is one preserved node — so a byte past the literal sits a
 * literal's length further along live than settled, and a byte inside it is a byte of the new
 * note. The carry has to line the two up rather than count bytes straight across.
 */
describe("annotations around a typed footnote literal", () => {
  const footnote = "\\f + \\ft note text\\f*";
  const fourWords = "alpha bravo charlie delta";

  /** Each mark's children, a note shown as `<note>` — so a note carried INSIDE a mark shows. */
  function markShapes(lexical: LexicalEditor): string[] {
    return lexical.getEditorState().read(() =>
      $marks().map((mark) =>
        mark
          .getChildren()
          .map((child) => ($isNoteNode(child) ? "<note>" : child.getTextContent()))
          .join(""),
      ),
    );
  }

  /** Whether the tree holds a note — every fixture here starts without one, so the literal
   * really settled. */
  function hasSettledNote(lexical: LexicalEditor): boolean {
    return treeHas(lexical, $isNoteNode);
  }

  /** Whether every mark in the tree sits inside a note. */
  function marksAreInNotes(lexical: LexicalEditor): boolean {
    return lexical
      .getEditorState()
      .read(() => $marks().every((mark) => mark.getParents().some($isNoteNode)));
  }

  /** Wrap `type`/`id` over `needle`, which must sit in one text node. */
  function $wrapLive(needle: string, type: string, id: string): void {
    const text = $textContaining(needle);
    const start = text.getTextContent().indexOf(needle);
    const selection = $createRangeSelection();
    selection.anchor.set(text.getKey(), start, "text");
    selection.focus.set(text.getKey(), start + needle.length, "text");
    $wrapSelectionInTypedMarkNode(selection, type, id);
  }

  describe("host annotations", () => {
    it("carries a mark after the literal onto the same text, and one before it unchanged", async () => {
      const mounted = await mountStandardViewEditor(twoParaUsj([body]));
      await annotate(mounted, atOffsets(0, "alpha".length), "before");
      await annotate(mounted, atOffsets(body.indexOf("charlie"), body.length), "after");

      await typeOver(mounted.lexical, " bravo ", ` bravo ${footnote} `);
      expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);
      settle(mounted);

      expect(hasSettledNote(mounted.lexical)).toBe(true);
      expect(markShapes(mounted.lexical)).toEqual(["alpha", "charlie"]);
      expect(annotatedIDs(mounted.lexical)).toEqual([
        { [markType("test")]: ["before"] },
        { [markType("test")]: ["after"] },
      ]);
    });

    it("carries a mark spanning the literal with both ends in place and the new note inside it", async () => {
      const mounted = await mountStandardViewEditor(twoParaUsj([fourWords]));
      await annotate(
        mounted,
        atOffsets(fourWords.indexOf("bravo"), fourWords.indexOf(" delta")),
        "1",
      );
      expect(annotatedText(mounted.lexical)).toEqual(["bravo charlie"]);

      await typeOver(mounted.lexical, "bravo charlie", `bravo ${footnote} charlie`);
      expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);
      settle(mounted);

      expect(markShapes(mounted.lexical)).toEqual(["bravo <note> charlie"]);
      expect(annotatedIDs(mounted.lexical)).toEqual([{ [markType("test")]: ["1"] }]);
    });

    it("lands a mark set on the pending note's content on that content once it settles", async () => {
      // The host addresses the SETTLED note, so the mark lands on the literal's own bytes — and
      // splitting the literal around it settles the paragraph there and then.
      const mounted = await mountStandardViewEditor(twoParaUsj([fourWords]));
      await typeOver(mounted.lexical, fourWords, `alpha ${footnote} delta`);
      const pending = mounted.ref.current?.getUsj();
      expect(JSON.stringify(pending?.content[2])).toContain('"note text"');
      const notePath = [2, 1, 0, 0];

      await annotate(
        mounted,
        {
          start: { jsonPath: contentPath(notePath), offset: 0 },
          end: { jsonPath: contentPath(notePath), offset: "note".length },
        },
        "1",
      );
      settle(mounted);

      expect(hasSettledNote(mounted.lexical)).toBe(true);
      expect(annotatedText(mounted.lexical)).toEqual(["note"]);
      expect(marksAreInNotes(mounted.lexical)).toBe(true);
      expect(annotatedIDs(mounted.lexical)).toEqual([{ [markType("test")]: ["1"] }]);
    });
    it("carries a mark in a note's content past a note literal typed there", async () => {
      // The note's content is its own settle scope, and a note typed inside it settles into a
      // note nested in the note — a preserved node the scope's live bytes spell as a literal.
      const mounted = await mountExpandedNoteEditor(expandedNoteUsj);
      await annotate(
        mounted,
        {
          start: { jsonPath: contentPath([2, 1, 1]), offset: body.indexOf("charlie") },
          end: { jsonPath: contentPath([2, 1, 1]), offset: body.length },
        },
        "1",
      );
      expect(annotatedText(mounted.lexical)).toEqual(["charlie"]);

      await typeOver(mounted.lexical, "alpha bravo ", "alpha \\fe + \\ft x\\fe* bravo ");
      expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);
      settle(mounted);

      expect(
        treeHas(
          mounted.lexical,
          (node) => $isNoteNode(node) && node.getParents().some($isNoteNode),
        ),
      ).toBe(true);
      expect(markShapes(mounted.lexical)).toEqual(["charlie"]);
      expect(annotatedIDs(mounted.lexical)).toEqual([{ [markType("test")]: ["1"] }]);
    });
  });

  describe("comment marks", () => {
    /** Settle, and hand back `getUsj()` read while still pending and read after the settle. */
    function pendingAndSettledUsj(mounted: Mounted) {
      expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);
      const pending = mounted.ref.current?.getUsj();
      settle(mounted);
      return { pending, settled: mounted.ref.current?.getUsj() };
    }

    /** `fourWords` with a comment over `words`. */
    async function mountWithComment(words: string): Promise<Mounted> {
      const mounted = await mountStandardViewEditor(twoParaUsj([fourWords]));
      await act(async () => {
        mounted.lexical.update(() => $wrapLive(words, COMMENT_MARK_TYPE, "c1"));
        await Promise.resolve();
      });
      expect(annotatedText(mounted.lexical)).toEqual([words]);
      return mounted;
    }

    it("carries a comment after the literal, and getUsj() while pending agrees", async () => {
      const mounted = await mountWithComment("charlie");
      await typeOver(mounted.lexical, " bravo ", ` bravo ${footnote} `);

      const { pending, settled } = pendingAndSettledUsj(mounted);

      expect(hasSettledNote(mounted.lexical)).toBe(true);
      expect(markShapes(mounted.lexical)).toEqual(["charlie"]);
      expect(annotatedIDs(mounted.lexical)).toEqual([{ [COMMENT_MARK_TYPE]: ["c1"] }]);
      expect(JSON.stringify(settled)).toContain('"sid":"c1"');
      expect(pending).toEqual(settled);
    });

    it("carries a comment spanning the literal, and getUsj() while pending agrees", async () => {
      const mounted = await mountWithComment("bravo charlie");
      await typeOver(mounted.lexical, "bravo charlie", `bravo ${footnote} charlie`);

      const { pending, settled } = pendingAndSettledUsj(mounted);

      expect(markShapes(mounted.lexical)).toEqual(["bravo <note> charlie"]);
      expect(JSON.stringify(settled)).toContain('"sid":"c1"');
      expect(pending).toEqual(settled);
    });

    it("carries a comment on the literal's note content onto that content in the new note", async () => {
      // A comment inside the literal splits it, so it cannot sit pending: the paragraph settles
      // as the literal is typed around it.
      const mounted = await mountWithComment("charlie");
      await typeOver(mounted.lexical, "alpha bravo ", "alpha \\f + \\ft ");
      await typeOver(mounted.lexical, " delta", " text\\f* delta");
      settle(mounted);

      expect(hasSettledNote(mounted.lexical)).toBe(true);
      expect(annotatedText(mounted.lexical)).toEqual(["charlie"]);
      expect(marksAreInNotes(mounted.lexical)).toBe(true);
      expect(JSON.stringify(mounted.ref.current?.getUsj())).toContain('"sid":"c1"');
    });
  });
});

describe("a comment mark across a leaf display owner and its attribute run", () => {
  /** Wrap a comment from `startOffset` in the text holding `startNeedle` to `endOffset` in the text
   * holding `endNeedle` — the shape `CommentPlugin` creates over a range crossing the owner. */
  async function commentAcross(
    mounted: Mounted,
    [startNeedle, startOffset]: [string, number],
    [endNeedle, endOffset]: [string, number],
  ): Promise<void> {
    await act(async () => {
      mounted.lexical.update(() => {
        const selection = $createRangeSelection();
        selection.anchor.set($textContaining(startNeedle).getKey(), startOffset, "text");
        selection.focus.set($textContaining(endNeedle).getKey(), endOffset, "text");
        $wrapSelectionInTypedMarkNode(selection, COMMENT_MARK_TYPE, "c1");
      });
      await Promise.resolve();
      await Promise.resolve();
    });
  }

  /** The first paragraph's settled content with the comment's own `zmsc` milestones left out and
   * the text on either side of each rejoined, so it reads as the document text the comment covers. */
  function settledContentWithoutComments(mounted: Mounted): MarkerContent[] {
    const para = mounted.ref.current?.getUsj()?.content[2];
    if (typeof para !== "object" || !para.content) throw new Error("expected the first paragraph");
    const out: MarkerContent[] = [];
    para.content.forEach((item) => {
      if (typeof item === "object" && item.marker?.startsWith("zmsc")) return;
      const last = out[out.length - 1];
      if (typeof item === "string" && typeof last === "string") out[out.length - 1] = last + item;
      else out.push(item);
    });
    return out;
  }

  /** The first paragraph's content items of `type`, in the settled document. */
  function settledItems(mounted: Mounted, type: string): MarkerObject[] {
    const para = mounted.ref.current?.getUsj()?.content[2];
    if (typeof para !== "object" || !para.content) throw new Error("expected the first paragraph");
    return para.content.filter(
      (item): item is MarkerObject => typeof item === "object" && item.type === type,
    );
  }

  it("keeps a quote milestone through the display-run sync and a later settle", async () => {
    const quote = { type: "ms", marker: "qt-s", who: "Pilate" };
    const mounted = await mountStandardViewEditor(
      twoParaUsj(["said to him ", quote, " What is truth?"]),
    );
    expect(settledItems(mounted, "ms").filter((ms) => ms.marker === "qt-s")).toEqual([quote]);

    await commentAcross(mounted, ["said to him", 5], ["What is truth", 5]);

    expect(annotatedText(mounted.lexical)).toEqual(["to him ", " What"]);
    expect(settledContentWithoutComments(mounted)).toEqual([
      "said to him ",
      quote,
      " What is truth?",
    ]);

    await typeOver(mounted.lexical, " is truth?", " is truth? \\nd LORD\\nd*");
    settle(mounted);

    expect(treeHas(mounted.lexical, $isCharNode)).toBe(true);
    expect(settledItems(mounted, "ms").filter((ms) => ms.marker === "qt-s")).toEqual([quote]);
    expect(annotatedIDs(mounted.lexical)).toEqual([
      { [COMMENT_MARK_TYPE]: ["c1"] },
      { [COMMENT_MARK_TYPE]: ["c1"] },
    ]);
  });

  it("keeps a verse with its alternate number, and adds no space in front of it", async () => {
    const verse: MarkerObject = { type: "verse", marker: "v", number: "2", altnumber: "3" };
    const mounted = await mountStandardViewEditor(
      twoParaUsj(["in the beginning ", verse, "and the earth"]),
    );
    expect(settledItems(mounted, "verse")).toEqual([verse]);

    await commentAcross(mounted, ["in the beginning", 7], ["and the earth", 3]);

    expect(annotatedText(mounted.lexical)).toEqual(["beginning ", "and"]);
    // The text in front of the verse already ends in its space, so the comment's end beside the
    // verse must not add another.
    expect(settledContentWithoutComments(mounted)).toEqual([
      "in the beginning ",
      verse,
      "and the earth",
    ]);
  });
});

describe("a comment mark across a paragraph boundary", () => {
  /** Wrap a comment from `charlie` in the first paragraph to the end of `depart` in the second —
   * the selection running backward (anchor after focus) when `backward`. */
  async function commentAcrossParagraphs(backward = false): Promise<Mounted> {
    const mounted = await mountStandardViewEditor(twoParaUsj([body]));
    await act(async () => {
      mounted.lexical.update(() => {
        const start = [$textContaining(body).getKey(), body.indexOf("charlie"), "text"] as const;
        const end = [$textContaining("depart here").getKey(), "depart".length, "text"] as const;
        const selection = $createRangeSelection();
        selection.anchor.set(...(backward ? end : start));
        selection.focus.set(...(backward ? start : end));
        $wrapSelectionInTypedMarkNode(selection, COMMENT_MARK_TYPE, "c1");
      });
      await Promise.resolve();
      await Promise.resolve();
    });
    return mounted;
  }

  it("leaves the next paragraph's separator out of the mark and adds no space", async () => {
    const mounted = await commentAcrossParagraphs();

    const paragraphText = (index: number): string => {
      const para = mounted.ref.current?.getUsj()?.content[index];
      if (typeof para !== "object" || !para.content) throw new Error(`no paragraph at ${index}`);
      return para.content.filter((item) => typeof item === "string").join("");
    };
    expect(paragraphText(2)).toBe(body);
    expect(paragraphText(3)).toBe("depart here");
    // The second paragraph still displays its `\p` and ONE separator space.
    expect(
      mounted.lexical
        .getEditorState()
        .read(() => $textContaining("depart").getTopLevelElementOrThrow().getTextContent()),
    ).toBe(`\\p${NBSP}depart here`);
    // The space after the second paragraph's `\p` is its display separator, not document text.
    expect(annotatedText(mounted.lexical)).toEqual(["charlie", "depart"]);
  });

  it("reports a location for the caret a backward wrap leaves", async () => {
    const mounted = await commentAcrossParagraphs(true);
    expect(annotatedText(mounted.lexical)).toEqual(["charlie", "depart"]);
    // The wrap collapses the caret onto the start of the last mark it made.
    expect(mounted.ref.current?.getSelection()).toEqual({
      start: { jsonPath: contentPath([3, 0]), offset: 0 },
    });
  });
});
