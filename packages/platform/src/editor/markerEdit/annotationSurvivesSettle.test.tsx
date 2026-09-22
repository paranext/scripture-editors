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
import { $rebuildParas } from "./tier2Rebuild.utils";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
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
  $isCharNode,
  $isNoteNode,
  $isParaNode,
  $isTypedMarkNode,
  $wrapSelectionInTypedMarkNode,
  COMMENT_MARK_TYPE,
  getMarker as bundledGetMarker,
  getPendedDisplayOwners,
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

    // The span's glyphs and separator are display, not content.
    expect(
      annotatedText(mounted.lexical)
        .join("")
        .replace(/\\nd\*?/g, "")
        .trim(),
    ).toBe("name end");
    expect(annotatedIDs(mounted.lexical)).toEqual(
      annotatedText(mounted.lexical).map(() => ({ [markType("test")]: ["1"] })),
    );
  });
});
