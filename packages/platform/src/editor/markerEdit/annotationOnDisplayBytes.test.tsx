/**
 * Annotations over the editor's DISPLAY bytes — an attribute run, a verse number, a milestone's
 * attribute, a note caller, a chapter glyph, a marker glyph — set through `EditorRef.setAnnotation`
 * with settled locations. Display bytes never move into a mark: the node holds the annotation, is
 * painted with the mark's class names, and the document is unchanged.
 *
 * Standard view.
 */
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { contentPath, propertyPath, twoParaUsj } from "../positions/positions.test-helpers";
import { $carrierHolding, displayAnnotated } from "./displayAnnotations.test-helpers";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, $isElementNode, LexicalEditor, LexicalNode, UNDO_COMMAND } from "lexical";
import { $isTypedMarkNode, $isVerseNode, TypedMarkOnRemove } from "shared";
import { AnnotationRange } from "shared-react";
import { Mock, vi } from "vitest";

type Mounted = Awaited<ReturnType<typeof mountStandardViewEditor>>;

/** A `\w` span as USJ carries it: `lemma` is one of its attributes, which `MarkerObject` leaves
 * untyped. */
type WordChar = MarkerObject & { lemma?: string };

const lemmaWord: WordChar = { type: "char", marker: "w", lemma: "grace", content: ["grace"] };
const lemmaUsj: Usj = twoParaUsj(["In the ", lemmaWord, " of God made"]);
/** `grace`, the `\w` span's `lemma` value. */
const lemmaRange: AnnotationRange = {
  start: { jsonPath: propertyPath([2, 1], "lemma"), propertyOffset: 0 },
  end: { jsonPath: propertyPath([2, 1], "lemma"), propertyOffset: "grace".length },
};

async function annotate(
  mounted: Mounted,
  range: AnnotationRange,
  id = "1",
  onRemove?: TypedMarkOnRemove,
): Promise<void> {
  await act(async () => {
    mounted.ref.current?.setAnnotation(range, "test", id, { onRemove });
    await Promise.resolve();
  });
}

function markCount(lexical: LexicalEditor): number {
  return lexical.getEditorState().read(() => {
    let count = 0;
    const walk = (node: LexicalNode): void => {
      if ($isTypedMarkNode(node)) count++;
      if ($isElementNode(node)) node.getChildren().forEach(walk);
    };
    walk($getRoot());
    return count;
  });
}

function paraText(mounted: Mounted): string {
  return mounted.lexical
    .getEditorState()
    .read(() => $getRoot().getChildren()[2]?.getTextContent() ?? "");
}

describe("an annotation on a char span's attribute value", () => {
  it("is held on the run, painted like a mark, and changes neither the display nor getUsj()", async () => {
    const mounted = await mountStandardViewEditor(lemmaUsj);
    const displayBefore = paraText(mounted);
    await annotate(mounted, lemmaRange);

    expect(displayAnnotated(mounted.lexical)).toEqual({ "1": ["grace"] });
    expect(markCount(mounted.lexical)).toBe(0);
    expect(paraText(mounted)).toBe(displayBefore);
    expect(mounted.ref.current?.getUsj()).toEqual(lemmaUsj);
    const element = mounted.lexical
      .getEditorState()
      .read(() => mounted.lexical.getElementByKey($carrierHolding("1").getKey()));
    expect(element?.classList.contains("annotationId-1")).toBe(true);
    expect(element?.classList.contains("editor-typed-mark-external-test")).toBe(true);
  });

  it("reports its removal once, as removed", async () => {
    const onRemove: Mock<TypedMarkOnRemove> = vi.fn();
    const mounted = await mountStandardViewEditor(lemmaUsj);
    await annotate(mounted, lemmaRange, "1", onRemove);
    await act(async () => mounted.ref.current?.removeAnnotation("test", "1"));

    expect(displayAnnotated(mounted.lexical)).toEqual({});
    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onRemove).toHaveBeenCalledWith("external-test", "1", "removed", "grace");
  });

  it("moves to a new range when set again with the same id", async () => {
    const mounted = await mountStandardViewEditor(lemmaUsj);
    await annotate(mounted, lemmaRange);
    await annotate(mounted, {
      start: { jsonPath: propertyPath([2, 1], "lemma"), propertyOffset: 0 },
      end: { jsonPath: propertyPath([2, 1], "lemma"), propertyOffset: 2 },
    });
    expect(displayAnnotated(mounted.lexical)).toEqual({ "1": ["gr"] });
  });
});

describe("an annotation across content and a verse number", () => {
  const verse: MarkerObject = { type: "verse", marker: "v", number: "2" };
  const usj = twoParaUsj(["in the beginning ", verse, "and the earth"]);
  const across: AnnotationRange = {
    start: { jsonPath: contentPath([2, 0]), offset: "in the ".length },
    end: { jsonPath: contentPath([2, 2]), offset: "and".length },
  };
  /** The same content with no display bytes in between: the control for onRemove counts. */
  const contentOnly: AnnotationRange = {
    start: { jsonPath: contentPath([2, 0]), offset: "in the ".length },
    end: { jsonPath: contentPath([2, 0]), offset: "in the beginning".length },
  };

  it("reports its removal no more often than its marks do", async () => {
    const mixed: Mock<TypedMarkOnRemove> = vi.fn();
    const control: Mock<TypedMarkOnRemove> = vi.fn();
    const mounted = await mountStandardViewEditor(usj);
    await annotate(mounted, across, "mixed", mixed);
    const marksBefore = markCount(mounted.lexical);
    const second = await mountStandardViewEditor(usj);
    await annotate(second, contentOnly, "control", control);
    expect(displayAnnotated(mounted.lexical).mixed?.join("")).toContain("2");

    await act(async () => mounted.ref.current?.removeAnnotation("test", "mixed"));
    await act(async () => second.ref.current?.removeAnnotation("test", "control"));

    expect(displayAnnotated(mounted.lexical)).toEqual({});
    expect(mixed.mock.calls.every(([, , cause]) => cause === "removed")).toBe(true);
    // The mixed annotation's marks report it (one call per mark, PT-4804); its verse adds none.
    expect(mixed).toHaveBeenCalledTimes(marksBefore);
    expect(control).toHaveBeenCalledTimes(1);
  });
});

describe("undoing the deletion of an annotated verse", () => {
  it("reports destroyed once, and the undo brings the annotation back without another report", async () => {
    const onRemove: Mock<TypedMarkOnRemove> = vi.fn();
    const verse: MarkerObject = { type: "verse", marker: "v", number: "2" };
    const mounted = await mountStandardViewEditor(twoParaUsj(["in the beginning ", verse, "and"]));
    await annotate(
      mounted,
      {
        start: { jsonPath: propertyPath([2, 1], "number"), propertyOffset: 0 },
        end: { jsonPath: propertyPath([2, 1], "number"), propertyOffset: 1 },
      },
      "1",
      onRemove,
    );
    expect(displayAnnotated(mounted.lexical)).toEqual({ "1": ["2"] });

    await act(async () => {
      mounted.lexical.update(() => {
        $getRoot()
          .getAllTextNodes()
          .find((node) => $isVerseNode(node))
          ?.remove();
      });
      await Promise.resolve();
    });
    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onRemove).toHaveBeenCalledWith("external-test", "1", "destroyed", "2");

    await act(async () => mounted.lexical.dispatchCommand(UNDO_COMMAND, undefined));
    expect(displayAnnotated(mounted.lexical)).toEqual({ "1": ["2"] });
    expect(onRemove).toHaveBeenCalledTimes(1);
  });
});

describe("a display-only annotation dropped by a whole-state replacement", () => {
  it("reports nothing when setUsj reloads the document", async () => {
    const onRemove: Mock<TypedMarkOnRemove> = vi.fn();
    const mounted = await mountStandardViewEditor(lemmaUsj);
    await annotate(mounted, lemmaRange, "1", onRemove);
    await act(async () => {
      mounted.ref.current?.setUsj(twoParaUsj(["In the beginning"]));
      // LoadStatePlugin applies the load in a microtask.
      await Promise.resolve();
      await Promise.resolve();
    });
    expect(displayAnnotated(mounted.lexical)).toEqual({});
    expect(onRemove).not.toHaveBeenCalled();
  });

  it("reports nothing when the commit that set it is undone", async () => {
    const onRemove: Mock<TypedMarkOnRemove> = vi.fn();
    const mounted = await mountStandardViewEditor(lemmaUsj);
    await annotate(mounted, lemmaRange, "1", onRemove);
    await act(async () => mounted.lexical.dispatchCommand(UNDO_COMMAND, undefined));
    expect(onRemove).not.toHaveBeenCalled();
  });
});
