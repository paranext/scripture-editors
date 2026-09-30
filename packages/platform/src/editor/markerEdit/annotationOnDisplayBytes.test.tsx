/**
 * Annotations over the editor's DISPLAY bytes — an attribute run, a verse number, a milestone's
 * attribute, a note caller, a chapter glyph, a marker glyph — set through `EditorRef.setAnnotation`
 * with settled locations. Display bytes never move into a mark: the node holds the annotation, is
 * painted with the mark's class names, and the document is unchanged.
 *
 * Standard view.
 */
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import {
  $textContaining,
  contentPath,
  propertyPath,
  twoParaUsj,
  typeOver,
} from "../positions/positions.test-helpers";
import { $carrierHolding, displayAnnotated } from "./displayAnnotations.test-helpers";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $isElementNode,
  LexicalEditor,
  LexicalNode,
  UNDO_COMMAND,
} from "lexical";
import {
  $chapterGlyphTextNode,
  $isChapterNode,
  $isCharNode,
  $isTypedMarkNode,
  $isVerseNode,
  $ownerOfRunPiece,
  $wrapSelectionInTypedMarkNode,
  COMMENT_MARK_TYPE,
  NBSP,
  TypedMarkOnRemove,
} from "shared";
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

function markTexts(lexical: LexicalEditor): string[] {
  return lexical.getEditorState().read(() => {
    const texts: string[] = [];
    const walk = (node: LexicalNode): void => {
      if ($isTypedMarkNode(node)) texts.push(node.getTextContent());
      if ($isElementNode(node)) node.getChildren().forEach(walk);
    };
    walk($getRoot());
    return texts;
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

  it("marks none of the text in front of the verse when the range starts at that text's end", async () => {
    const mounted = await mountStandardViewEditor(usj);
    await annotate(mounted, {
      start: { jsonPath: contentPath([2, 0]), offset: "in the beginning ".length },
      end: { jsonPath: contentPath([2, 2]), offset: "and".length },
    });

    expect(markTexts(mounted.lexical)).toEqual(["and"]);
    // The verse's own trailing separator is never held.
    expect(displayAnnotated(mounted.lexical)).toEqual({ "1": ["\\v 2"] });
    expect(mounted.ref.current?.getUsj()).toEqual(usj);
  });

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

/** Settle the scope the way an abandoned edit does: blur, then commit the pending literal. */
function settle(mounted: Mounted): void {
  const rootElement = mounted.lexical.getRootElement();
  if (!rootElement) throw new Error("editor root not found");
  act(() => rootElement.blur());
  act(() => mounted.ref.current?.commitPendingMarkerEdits());
}

/** One display-byte kind: the document, the settled range naming its bytes, what the carrier
 * then holds, and the paragraph an unrelated literal is typed into to force a settle. */
interface Kind {
  name: string;
  usj: Usj;
  range: AnnotationRange;
  held: string[];
  /** Text in the first paragraph to type a literal after. */
  literalHost: string;
}

/** A `qt-s` milestone as USJ carries it: `who` is one of its attributes, which `MarkerObject`
 * leaves untyped. */
type QuoteMilestone = MarkerObject & { who?: string };

const verse2: MarkerObject = { type: "verse", marker: "v", number: "2", altnumber: "3" };
const quote: QuoteMilestone = { type: "ms", marker: "qt-s", who: "Pilate" };
const nd: MarkerObject = { type: "char", marker: "nd", content: ["LORD"] };
const verseUsj = twoParaUsj(["in the beginning ", verse2, "and the earth"]);
/** `2`, the verse's number. */
const verseNumberRange: AnnotationRange = {
  start: { jsonPath: propertyPath([2, 1], "number"), propertyOffset: 0 },
  end: { jsonPath: propertyPath([2, 1], "number"), propertyOffset: 1 },
};
/** `3`, the verse's alternate number. */
const altnumberRange: AnnotationRange = {
  start: { jsonPath: propertyPath([2, 1], "altnumber"), propertyOffset: 0 },
  end: { jsonPath: propertyPath([2, 1], "altnumber"), propertyOffset: 1 },
};
/** `1`, the chapter's number. */
const chapterNumberRange: AnnotationRange = {
  start: { jsonPath: propertyPath([1], "number"), propertyOffset: 0 },
  end: { jsonPath: propertyPath([1], "number"), propertyOffset: 1 },
};

const KINDS: Kind[] = [
  {
    name: "a char span's attribute value",
    usj: lemmaUsj,
    range: lemmaRange,
    held: ["grace"],
    literalHost: " of God made",
  },
  {
    name: "a verse number",
    usj: verseUsj,
    range: verseNumberRange,
    held: ["2"],
    literalHost: "and the earth",
  },
  {
    name: "a verse's alternate number",
    usj: verseUsj,
    range: altnumberRange,
    held: ["3"],
    literalHost: "and the earth",
  },
  {
    name: "a milestone's attribute",
    usj: twoParaUsj(["said to him ", quote, " What is truth?"]),
    range: {
      start: { jsonPath: propertyPath([2, 1], "who"), propertyOffset: 0 },
      end: { jsonPath: propertyPath([2, 1], "who"), propertyOffset: "Pilate".length },
    },
    held: ["Pilate"],
    literalHost: " What is truth?",
  },
  {
    name: "a chapter number",
    usj: twoParaUsj(["In the beginning"]),
    range: chapterNumberRange,
    held: ["1"],
    literalHost: "In the beginning",
  },
  {
    name: "a char span's opening marker",
    usj: twoParaUsj(["the ", nd, " made"]),
    range: {
      start: { jsonPath: contentPath([2, 1]) },
      end: { jsonPath: propertyPath([2, 1], "marker"), propertyOffset: "nd".length },
    },
    held: ["\\nd"],
    literalHost: " made",
  },
];

describe.each(KINDS)("an annotation on $name", ({ usj, range, held, literalHost }) => {
  it("is held on the display bytes and leaves the document and every mark alone", async () => {
    const mounted = await mountStandardViewEditor(usj);
    const displayBefore = paraText(mounted);
    await annotate(mounted, range);

    expect(displayAnnotated(mounted.lexical)).toEqual({ "1": held });
    expect(markCount(mounted.lexical)).toBe(0);
    expect(paraText(mounted)).toBe(displayBefore);
    expect(mounted.ref.current?.getUsj()).toEqual(usj);
  });

  it("reports a selection inside it exactly as it does without the annotation", async () => {
    const plain = await mountStandardViewEditor(usj);
    const annotated = await mountStandardViewEditor(usj);
    await annotate(annotated, range);
    for (const mounted of [plain, annotated])
      await act(async () => {
        mounted.ref.current?.setSelection({ start: range.end });
        await Promise.resolve();
      });
    expect(plain.ref.current?.getSelection()).toEqual({ start: range.end });
    expect(annotated.ref.current?.getSelection()).toEqual(plain.ref.current?.getSelection());
  });

  it("survives the display-run sync re-running on its owner", async () => {
    const mounted = await mountStandardViewEditor(usj);
    await annotate(mounted, range);
    await act(async () => {
      mounted.lexical.update(() => {
        const carrier = $carrierHolding("1");
        // A run's owner is found through the registry's owner walk (a value inside an
        // `AttributeRunNode` sits two levels below it); a glyph, verse or chapter text is owned by
        // itself or its parent.
        const owner = $ownerOfRunPiece(carrier)?.owner ?? carrier.getParent() ?? carrier;
        owner.markDirty();
        carrier.markDirty();
      });
      await Promise.resolve();
    });
    expect(displayAnnotated(mounted.lexical)).toEqual({ "1": held });
    expect(mounted.ref.current?.getUsj()).toEqual(usj);
  });

  it("is carried through a settle of its paragraph", async () => {
    const mounted = await mountStandardViewEditor(usj);
    await annotate(mounted, range);
    await typeOver(mounted.lexical, literalHost, `${literalHost} \\wj x\\wj*`);
    settle(mounted);

    expect(JSON.stringify(mounted.ref.current?.getUsj())).toContain('"marker":"wj"');
    expect(displayAnnotated(mounted.lexical)).toEqual({ "1": held });
  });
});

describe("a collapsed note's caller", () => {
  it("holds the annotation on its caller decorator", async () => {
    const note: MarkerObject = {
      type: "note",
      marker: "f",
      caller: "+",
      content: [{ type: "char", marker: "ft", content: ["note body"] }],
    };
    const usj = twoParaUsj(["before ", note, " after"]);
    const mounted = await mountStandardViewEditor(usj);
    await annotate(mounted, {
      start: { jsonPath: propertyPath([2, 1], "caller"), propertyOffset: 0 },
      end: { jsonPath: propertyPath([2, 1], "caller"), propertyOffset: 1 },
    });
    expect(Object.keys(displayAnnotated(mounted.lexical))).toEqual(["1"]);
    expect(mounted.ref.current?.getUsj()).toEqual(usj);
  });
});

describe("an annotated chapter number", () => {
  it("is carried through a settle of its chapter", async () => {
    const mounted = await mountStandardViewEditor(twoParaUsj(["In the beginning"]));
    await annotate(mounted, chapterNumberRange);
    await act(async () => {
      mounted.lexical.update(() => {
        const chapter = $getRoot().getChildren().find($isChapterNode);
        const glyph = chapter && $chapterGlyphTextNode(chapter);
        if (!glyph) throw new Error("no chapter glyph");
        glyph.setTextContent(`${glyph.getTextContent()}\\ca 5\\ca*`);
        glyph.select(glyph.getTextContentSize(), glyph.getTextContentSize());
      });
      await Promise.resolve();
      await Promise.resolve();
    });
    await act(async () => {
      mounted.lexical.update(() => $textContaining("depart here").select(1, 1));
      await Promise.resolve();
      await Promise.resolve();
    });

    expect(mounted.ref.current?.getUsj()?.content[1]).toEqual({
      type: "chapter",
      marker: "c",
      number: "1",
      altnumber: "5",
    });
    expect(displayAnnotated(mounted.lexical)).toEqual({ "1": ["1"] });
  });
});

describe("typing inside an annotated alternate number", () => {
  it("sends the same ops as it would without the annotation", async () => {
    const plainChange = vi.fn();
    const annotatedChange = vi.fn();
    const plain = await mountStandardViewEditor(verseUsj, { onUsjChange: plainChange });
    const annotated = await mountStandardViewEditor(verseUsj, { onUsjChange: annotatedChange });
    await annotate(annotated, altnumberRange);
    for (const mounted of [plain, annotated])
      await act(async () => {
        mounted.lexical.update(() => {
          const value = $getRoot()
            .getAllTextNodes()
            .find((node) => node.getTextContent() === `${NBSP}3`);
          if (!value) throw new Error("no \\va value");
          value.setTextContent(`${NBSP}34`);
          value.select(3, 3);
        });
        await Promise.resolve();
      });
    // An alternate number's bytes are display bytes, which the delta excludes, so the edit is
    // announced with no ops; the annotation must not add any.
    expect(plainChange).toHaveBeenCalledTimes(1);
    expect(annotatedChange).toHaveBeenCalledTimes(1);
    expect(annotatedChange.mock.calls.at(-1)?.[0]).toEqual(plainChange.mock.calls.at(-1)?.[0]);
    expect(annotatedChange.mock.calls.at(-1)?.[1]).toEqual(plainChange.mock.calls.at(-1)?.[1]);
    expect(displayAnnotated(annotated.lexical)).toEqual({ "1": ["3"] });
  });
});

describe("the display-run sync rewriting an annotated run to a new owner value", () => {
  /** Set the `\w` span's `lemma`, which the display-run sync writes into its run. */
  async function setLemma(mounted: Mounted, lemma: string): Promise<void> {
    await act(async () => {
      mounted.lexical.update(() => {
        const word = $carrierHolding("1").getParent();
        if (!$isCharNode(word)) throw new Error("no \\w span");
        word.setUnknownAttributes({ ...word.getUnknownAttributes(), lemma });
      });
      await Promise.resolve();
      await Promise.resolve();
    });
  }

  /** Set the verse's alternate number, which the display-run sync writes into its `\va` run. */
  async function setAltnumber(mounted: Mounted, altnumber: string): Promise<void> {
    await act(async () => {
      mounted.lexical.update(() => {
        const verse = $getRoot().getAllTextNodes().find($isVerseNode);
        if (!verse) throw new Error("no verse");
        verse.setAltnumber(altnumber);
      });
      await Promise.resolve();
      await Promise.resolve();
    });
  }

  function $annotatedRunText(mounted: Mounted): string {
    return mounted.lexical.getEditorState().read(() => $carrierHolding("1").getTextContent());
  }

  it("keeps the annotation on the value's surviving bytes, change after change", async () => {
    const onRemove: Mock<TypedMarkOnRemove> = vi.fn();
    const mounted = await mountStandardViewEditor(lemmaUsj);
    await annotate(mounted, lemmaRange, "1", onRemove);

    await setLemma(mounted, "gracious");
    expect($annotatedRunText(mounted)).toBe("|gracious");
    // `gracious` keeps `grac` of `grace`; its new bytes stay outside the range.
    expect(displayAnnotated(mounted.lexical)).toEqual({ "1": ["grac"] });

    // The range is measured against `|gracious` after the first change, so the `e` written back is
    // a new byte at its edge, outside it, as text typed beside a mark is.
    await setLemma(mounted, "grace");
    expect($annotatedRunText(mounted)).toBe("|grace");
    expect(displayAnnotated(mounted.lexical)).toEqual({ "1": ["grac"] });
    expect(onRemove).not.toHaveBeenCalled();
  });

  it("keeps the annotation on the surviving digit when a verse's alternate number changes", async () => {
    const onRemove: Mock<TypedMarkOnRemove> = vi.fn();
    const mounted = await mountStandardViewEditor(verseUsj);
    await annotate(mounted, altnumberRange, "1", onRemove);

    await setAltnumber(mounted, "34");
    expect($annotatedRunText(mounted)).toBe(`${NBSP}34`);
    expect(displayAnnotated(mounted.lexical)).toEqual({ "1": ["3"] });
    expect(onRemove).not.toHaveBeenCalled();
  });

  it("does not bring back an annotation whose bytes a rewrite dropped", async () => {
    const onRemove: Mock<TypedMarkOnRemove> = vi.fn();
    const mounted = await mountStandardViewEditor(verseUsj);
    await annotate(mounted, altnumberRange, "1", onRemove);

    await setAltnumber(mounted, "4");
    expect(displayAnnotated(mounted.lexical)).toEqual({});
    await setAltnumber(mounted, "3");
    expect(displayAnnotated(mounted.lexical)).toEqual({});
    expect(onRemove.mock.calls).toEqual([["external-test", "1", "destroyed", "3"]]);
  });
});

describe("typing content after an annotated verse", () => {
  it("sends the same ops as it would without the annotation", async () => {
    const plainChange = vi.fn();
    const annotatedChange = vi.fn();
    const plain = await mountStandardViewEditor(verseUsj, { onUsjChange: plainChange });
    const annotated = await mountStandardViewEditor(verseUsj, { onUsjChange: annotatedChange });
    await annotate(annotated, verseNumberRange);
    await annotate(annotated, altnumberRange, "2");
    for (const mounted of [plain, annotated])
      await typeOver(mounted.lexical, "and the earth", "and all the earth", "and all".length);

    const ops = plainChange.mock.calls.at(-1)?.[1];
    expect(ops?.length).toBeGreaterThan(0);
    expect(annotatedChange.mock.calls.at(-1)?.[1]).toEqual(ops);
    expect(displayAnnotated(annotated.lexical)).toEqual({ "1": ["2"], "2": ["3"] });
  });
});

describe("a comment mark that the settle leaves on display bytes alone", () => {
  it("reports its removal through its marks only, never through the carrier", async () => {
    const onRemove: Mock<TypedMarkOnRemove> = vi.fn();
    const bareWord: MarkerObject = { type: "char", marker: "w", content: ["grace"] };
    const mounted = await mountStandardViewEditor(twoParaUsj(["In the ", bareWord, " of God"]));
    const typed = '|lemma="grace"';
    await act(async () => {
      mounted.lexical.update(() => {
        const word = $textContaining("grace");
        word.setTextContent(`grace${typed}`);
        word.select(word.getTextContentSize(), word.getTextContentSize());
      });
      await Promise.resolve();
      await Promise.resolve();
    });
    await act(async () => {
      mounted.lexical.update(() => {
        const text = $textContaining(typed);
        const start = text.getTextContent().indexOf('|lemma="');
        const selection = $createRangeSelection();
        selection.anchor.set(text.getKey(), start, "text");
        selection.focus.set(text.getKey(), start + '|lemma="'.length, "text");
        $wrapSelectionInTypedMarkNode(selection, COMMENT_MARK_TYPE, "c1", undefined, onRemove);
        $textContaining("depart here").select(1, 1);
      });
      await Promise.resolve();
      await Promise.resolve();
    });
    // The settle re-spells `|lemma="grace"` as `|grace`: of the marked bytes only the `|` is kept,
    // so the comment is left on the run's `|` with no mark.
    settle(mounted);
    expect(markCount(mounted.lexical)).toBe(0);
    expect(displayAnnotated(mounted.lexical)).toEqual({ c1: ["|"] });
    const callsBefore = onRemove.mock.calls.length;

    await act(async () => {
      mounted.lexical.update(() => {
        const word = $carrierHolding("c1").getParent();
        if (!$isCharNode(word)) throw new Error("no \\w span");
        word.remove();
      });
      await Promise.resolve();
    });

    expect(displayAnnotated(mounted.lexical)).toEqual({});
    expect(onRemove.mock.calls.slice(callsBefore)).toEqual([]);
  });
});
