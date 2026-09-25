/**
 * An annotation range that reaches past a marker glyph — out of a char span, or onto a note's
 * opener, caller, or closer. A glyph is display bytes its construct owns, so the mark has to go
 * AROUND it: a glyph moved into a mark reads to the marker-edit engine as a deleted marker, which
 * it settles by dissolving or deleting the construct — and re-wrapping the same range on that
 * settle takes the glyph again, endlessly.
 *
 * Standard view, the view the marker-edit engine runs in.
 */
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import {
  contentPath,
  propertyPath,
  twoParaUsj,
  typeOver,
} from "../positions/positions.test-helpers";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, $isElementNode, LexicalEditor, LexicalNode } from "lexical";
import { $isMarkerNode, $isTypedMarkNode, NBSP, TypedMarkNode } from "shared";
import { AnnotationRange } from "shared-react";
import { vi } from "vitest";

type Mounted = Awaited<ReturnType<typeof mountStandardViewEditor>>;

function $marks(nodes: LexicalNode[] = $getRoot().getChildren()): TypedMarkNode[] {
  const out: TypedMarkNode[] = [];
  nodes.forEach((node) => {
    if ($isTypedMarkNode(node)) out.push(node);
    if ($isElementNode(node)) out.push(...$marks(node.getChildren()));
  });
  return out;
}

function annotatedText(lexical: LexicalEditor): string[] {
  return lexical.getEditorState().read(() => $marks().map((mark) => mark.getTextContent()));
}

function markHoldsGlyph(lexical: LexicalEditor): boolean {
  return lexical
    .getEditorState()
    .read(() => $marks().some((mark) => mark.getChildren().some($isMarkerNode)));
}

async function annotate(mounted: Mounted, range: AnnotationRange): Promise<void> {
  await act(async () => {
    mounted.ref.current?.setAnnotation(range, "test", "1");
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

/** An ordinary edit in the second paragraph, which a wedged editor would silently drop. */
async function editSecondParagraph(mounted: Mounted): Promise<void> {
  await typeOver(mounted.lexical, "depart here", "depart here!");
}

const charParaUsj: Usj = twoParaUsj([
  "start ",
  { type: "char", marker: "nd", content: ["name"] },
  " end words",
]);
/** From the start of `name` into ` end words`. */
const outOfCharRange: AnnotationRange = {
  start: { jsonPath: contentPath([2, 1, 0]), offset: 0 },
  end: { jsonPath: contentPath([2, 2]), offset: 4 },
};

describe("an annotation that runs out of a char span", () => {
  it("wraps the text on both sides of the closer, leaving the closer in its span", async () => {
    const mounted = await mountStandardViewEditor(charParaUsj);
    await annotate(mounted, outOfCharRange);

    expect(annotatedText(mounted.lexical).join("")).toContain("name");
    expect(annotatedText(mounted.lexical).join("")).toContain(" end");
    expect(markHoldsGlyph(mounted.lexical)).toBe(false);
    expect(mounted.ref.current?.getUsj()?.content?.[2]).toEqual(
      (charParaUsj.content as Usj["content"])[2],
    );
  });

  it("leaves the editor accepting edits", async () => {
    const onUsjChange = vi.fn();
    const mounted = await mountStandardViewEditor(charParaUsj, { onUsjChange });
    await annotate(mounted, outOfCharRange);
    await editSecondParagraph(mounted);

    expect(mounted.ref.current?.getUsj()?.content?.[3]).toEqual({
      type: "para",
      marker: "p",
      content: ["depart here!"],
    });
    expect(onUsjChange).toHaveBeenCalled();
  });

  it("is carried unchanged across a settle of its paragraph", async () => {
    const mounted = await mountStandardViewEditor(charParaUsj);
    await annotate(mounted, outOfCharRange);
    const before = annotatedText(mounted.lexical);
    await typeOver(mounted.lexical, " words", " words \\wj x\\wj*");
    settle(mounted);

    expect(annotatedText(mounted.lexical)).toEqual(before);
  });

  it("is carried across a settle when it starts at the span's opening marker", async () => {
    const mounted = await mountStandardViewEditor(charParaUsj);
    await annotate(mounted, {
      start: { jsonPath: contentPath([2, 1]) },
      end: { jsonPath: contentPath([2, 2]), offset: 4 },
    });
    // The span's separator space is display, not content: whether the carried mark begins before
    // or after it is not something a host can observe.
    const trimmed = (texts: string[]) => texts.map((text) => text.trim());
    const before = trimmed(annotatedText(mounted.lexical));
    expect(before).toContain("name");
    await typeOver(mounted.lexical, " words", " words \\wj x\\wj*");
    settle(mounted);

    expect(trimmed(annotatedText(mounted.lexical))).toEqual(before);
  });
});

// \p before \f + \ft note body\f* after — a closed note, collapsed in Standard view.
const noteUsj: Usj = twoParaUsj([
  "before ",
  {
    type: "note",
    marker: "f",
    caller: "+",
    content: [{ type: "char", marker: "ft", content: ["note body"] }],
  },
  " after",
]);
const notePath = [2, 1];

/**
 * Each row names the text the mark must end up holding, so a regression that refuses the range
 * outright cannot pass: with no mark at all `markHoldsGlyph` is `false` and the note's USJ is
 * untouched, which is exactly what the two assertions below would otherwise check.
 */
describe.each<[string, AnnotationRange, string[]]>([
  [
    "starts at the note's opening marker",
    {
      start: { jsonPath: contentPath(notePath) },
      end: { jsonPath: contentPath([2, 2]), offset: 3 },
    },
    [`\\ft${NBSP}note body\\ft*`, " af"],
  ],
  [
    "starts at the note's caller",
    {
      start: { jsonPath: propertyPath(notePath, "caller"), propertyOffset: 0 },
      end: { jsonPath: contentPath([2, 2]), offset: 3 },
    },
    [`\\ft${NBSP}note body\\ft*`, " af"],
  ],
  [
    "spans the note's caller value",
    {
      start: { jsonPath: propertyPath(notePath, "caller"), propertyOffset: 0 },
      end: { jsonPath: propertyPath(notePath, "caller"), propertyOffset: 1 },
    },
    // Standard view renders the caller as a DECORATOR, so the range covers no text node to mark.
    [],
  ],
  [
    "ends at the note's closing marker",
    {
      start: { jsonPath: contentPath([2, 1, 0, 0]), offset: 5 },
      end: { jsonPath: contentPath(notePath), closingMarkerOffset: 0 },
    },
    ["body"],
  ],
])("an annotation that %s", (_label, range, expectedAnnotated) => {
  it("keeps the footnote", async () => {
    const mounted = await mountStandardViewEditor(noteUsj);
    await annotate(mounted, range);
    await editSecondParagraph(mounted);

    expect(annotatedText(mounted.lexical)).toEqual(expectedAnnotated);
    expect(markHoldsGlyph(mounted.lexical)).toBe(false);
    expect(mounted.ref.current?.getUsj()?.content?.[2]).toEqual(
      (noteUsj.content as Usj["content"])[2],
    );
  });
});
