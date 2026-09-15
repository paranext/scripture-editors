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
import { contentPath, twoParaUsj, typeOver } from "../positions/positions.test-helpers";
import { $rebuildParas } from "./tier2Rebuild.utils";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, $isElementNode, LexicalEditor, LexicalNode } from "lexical";
import {
  $isCharNode,
  $isNoteNode,
  $isParaNode,
  $isTypedMarkNode,
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

describe("an annotation inside settling note content", () => {
  it("still wraps the same word after the note's content settles", async () => {
    const mounted = await mountExpandedNoteEditor(expandedNoteUsj);
    await annotate(
      mounted,
      {
        start: { jsonPath: contentPath([2, 1, 1]), offset: body.indexOf("bravo") },
        end: { jsonPath: contentPath([2, 1, 1]), offset: body.indexOf("bravo") + "bravo".length },
      },
      "1",
    );
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
});
