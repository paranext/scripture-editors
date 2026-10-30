/**
 * A paragraph's gutter marker keeps up with edits that create or retag paragraphs, end to end on
 * the real platform `<Editor>` as Platform.Bible's Simple mode runs it: the paragraph-structure
 * view with guarded structure protection. The gutter only shows a glyph the editor has put at the
 * front of the paragraph, so a paragraph made or retagged after load must get its glyph, or have it
 * relabelled, in the same update — otherwise the gutter stays blank, or names the old marker, until
 * the host next reloads the document.
 */
import Editor from "./Editor";
import { EditorRef } from "./editor.model";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { EditorRefPlugin } from "@lexical/react/LexicalEditorRefPlugin";
import { act, render } from "@testing-library/react";
import { $getRoot, $getSelection, $isRangeSelection, LexicalEditor } from "lexical";
import { createRef, RefObject } from "react";
import {
  $isGutterMarkerNode,
  $isImpliedParaNode,
  $isParaNode,
  $selectParaMarker,
  NBSP,
} from "shared";
import { getEditorDelta, getViewOptions, PARAGRAPH_STRUCTURE_VIEW_MODE } from "shared-react";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { pressKeyThroughDom } from "../../../../libs/shared-react/src/plugins/usj/react-test.utils";
import { describe, expect, it } from "vitest";

/**
 * The per-paragraph half of the `usj-nodes.css` rule that moves a paragraph's leading marker glyph
 * into the gutter. The rule's other half, the `psc-gutter-markers` class on the editor root, is
 * checked once in {@link mountSimple}. jsdom applies no stylesheet, so `usj-nodes.css.test.ts` pins
 * the rule to this selector.
 */
const GUTTER_GLYPH_SELECTOR = ":scope > .marker:not(.verse):not(.chapter):first-child";

const usj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["Test Book"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [{ type: "verse", marker: "v", number: "1" }, "first verse text"],
    },
    {
      type: "para",
      marker: "q1",
      content: [{ type: "verse", marker: "v", number: "2" }, "second verse text"],
    },
  ],
};

/** An empty section heading, as a USJ paragraph. */
const emptyHeading: MarkerObject = { type: "para", marker: "s", content: [] };

/** {@link usj} with an empty `\s` right after `\c 1`. */
const headingAfterChapterUsj: Usj = {
  ...usj,
  content: [...usj.content.slice(0, 2), emptyHeading, ...usj.content.slice(2)],
};

/** {@link usj} with an empty `\s` between its `\p` and its `\q1`. */
const headingBetweenParasUsj: Usj = {
  ...usj,
  content: [...usj.content.slice(0, 3), emptyHeading, ...usj.content.slice(3)],
};

/** {@link usj} with an empty `\s` as the only paragraph after `\c 1`. */
const headingAloneUsj: Usj = { ...usj, content: [...usj.content.slice(0, 2), emptyHeading] };

/** {@link usj} cut off after `\c 1`, so the chapter has no line after it. */
const bareChapterUsj: Usj = { ...usj, content: usj.content.slice(0, 2) };

/** {@link usj} with a `\c 1` that has no line after it, before its own `\c 2`. */
const bareChapterBeforeAnotherUsj: Usj = {
  ...usj,
  content: [
    ...bareChapterUsj.content,
    { type: "chapter", marker: "c", number: "2" },
    usj.content[2],
  ],
};

/** {@link usj} with a second paragraph that has no verse and starts with a space. */
const leadingSpaceUsj: Usj = {
  ...usj,
  content: [...usj.content.slice(0, 3), { type: "para", marker: "q1", content: [" leading text"] }],
};

describe("gutter paragraph markers in Simple mode", () => {
  it("shows the paragraph an Enter splits off with its own marker", async () => {
    const { lexical } = await mountSimple();
    await placeCaret(lexical, 1, "second ".length);

    await pressKeyThroughDom(lexical, "Enter");

    expect(gutterRows(lexical)).toEqual([gutterRow("p"), gutterRow("q1"), gutterRow("q1")]);
  });

  it("shows the empty paragraph an Enter at the end opens with its marker", async () => {
    const { lexical } = await mountSimple();
    await placeCaret(lexical, 1, "end");

    await pressKeyThroughDom(lexical, "Enter");

    expect(gutterRows(lexical)).toEqual([gutterRow("p"), gutterRow("q1"), gutterRow("q1")]);
  });

  it("drops the space a split leaves at the start of the new paragraph", async () => {
    const { ref, lexical } = await mountSimple();
    await placeCaret(lexical, 1, "second".length);

    await pressKeyThroughDom(lexical, "Enter");

    expect(ref.current?.getUsj()?.content.slice(3)).toEqual([
      {
        type: "para",
        marker: "q1",
        content: [{ type: "verse", marker: "v", number: "2" }, "second"],
      },
      { type: "para", marker: "q1", content: ["verse text"] },
    ]);
  });

  // The glyph has to arrive in the split's own update: one added in a later update would be its
  // own undo step, so this one undo would leave a paragraph with no gutter marker behind.
  it("undoes an Enter split, gutter marker and all, in one step", async () => {
    const { ref, lexical } = await mountSimple();
    await placeCaret(lexical, 1, "second ".length);
    await pressKeyThroughDom(lexical, "Enter");

    await act(async () => ref.current?.undo());

    expect(gutterRows(lexical)).toEqual([gutterRow("p"), gutterRow("q1")]);
  });

  it("relabels the caret's paragraph in the gutter in the retag's own update", async () => {
    const { ref, lexical } = await mountSimple();
    await placeCaret(lexical, 0, "first ".length);

    const rows = await retag(ref, lexical, "q2");

    expect(rows).toEqual([gutterRow("q2"), gutterRow("q1")]);
  });

  it("relabels a paragraph Enter just made in the retag's own update", async () => {
    const { ref, lexical } = await mountSimple();
    await placeCaret(lexical, 1, "second ".length);
    await pressKeyThroughDom(lexical, "Enter");

    const rows = await retag(ref, lexical, "q2");

    expect(rows).toEqual([gutterRow("p"), gutterRow("q1"), gutterRow("q2")]);
  });

  // A selected marker is retagged in place, so its glyph keeps its element and only its text
  // changes — unlike a caret retag, which moves the glyph into a fresh paragraph and so renders it
  // anew.
  it("relabels a selected paragraph marker in the gutter in the retag's own update", async () => {
    const { ref, lexical } = await mountSimple();
    await act(async () => {
      lexical.update(() => {
        const glyph = $getRoot().getChildren().filter($isParaNode)[0]?.getFirstChild();
        if (!$isGutterMarkerNode(glyph)) throw new Error("no gutter glyph on the first paragraph");
        $selectParaMarker(glyph);
      });
    });

    const rows = await retag(ref, lexical, "q2");

    expect(rows).toEqual([gutterRow("q2"), gutterRow("q1")]);
  });

  // A caret retag moves the paragraph's content into a fresh paragraph, which is trimmed like the
  // new paragraph of a split, as it is in the formatted and standard views. The caret sits at the
  // end, which the trim would leave past the end of the shorter text unless it moves the caret too.
  it("drops a paragraph's leading space when a caret retag replaces it", async () => {
    const { ref, lexical } = await mountSimple(leadingSpaceUsj);
    await placeCaret(lexical, 1, "end");

    await retag(ref, lexical, "q2");

    expect(ref.current?.getUsj()?.content.at(-1)).toEqual({
      type: "para",
      marker: "q2",
      content: ["leading text"],
    });
  });

  it("keeps the leading space of a paragraph an applied update adds", async () => {
    const { ref, lexical } = await mountSimple();
    const length = getEditorDelta(lexical.getEditorState()).length();

    await act(async () =>
      ref.current?.applyUpdate(
        [
          { retain: length },
          { insert: " leading text" },
          { insert: "\n", attributes: { para: { style: "q2" } } },
        ],
        "remote",
      ),
    );

    expect(ref.current?.getUsj()?.content.at(-1)).toEqual({
      type: "para",
      marker: "q2",
      content: [" leading text"],
    });
    expect(gutterRows(lexical).at(-1)).toEqual(gutterRow("q2"));
  });
});

// The paragraph-structure view's two-step paragraph delete: the first press arms, the second
// deletes. An empty paragraph goes whole rather than lending its marker to the text next to it.
describe("deleting an empty paragraph in Simple mode", () => {
  it("removes an empty paragraph right after a chapter with two Backspaces, and one undo restores it", async () => {
    const { ref, lexical } = await mountSimple(headingAfterChapterUsj);
    const before = ref.current?.getUsj();
    await placeCaretAtParaStart(lexical, 0);

    await pressKeyThroughDom(lexical, "Backspace");
    await pressKeyThroughDom(lexical, "Backspace");

    expect(ref.current?.getUsj()).toEqual(usj);
    await act(async () => ref.current?.undo());
    expect(ref.current?.getUsj()).toEqual(before);
  });

  it("removes an empty paragraph between two others with two Deletes, and one undo restores it", async () => {
    const { ref, lexical } = await mountSimple(headingBetweenParasUsj);
    const before = ref.current?.getUsj();
    await placeCaretAtParaStart(lexical, 1);

    await pressKeyThroughDom(lexical, "Delete");
    await pressKeyThroughDom(lexical, "Delete");

    expect(ref.current?.getUsj()).toEqual(usj);
    await act(async () => ref.current?.undo());
    expect(ref.current?.getUsj()).toEqual(before);
  });

  it("removes an empty paragraph with two Backspaces from the start of the one after it, and one undo restores it", async () => {
    const { ref, lexical } = await mountSimple(headingBetweenParasUsj);
    const before = ref.current?.getUsj();
    await placeCaretAtParaStart(lexical, 2);

    await pressKeyThroughDom(lexical, "Backspace");
    await pressKeyThroughDom(lexical, "Backspace");

    expect(ref.current?.getUsj()).toEqual(usj);
    await act(async () => ref.current?.undo());
    expect(ref.current?.getUsj()).toEqual(before);
  });

  it("leaves a blank line in place of an empty paragraph alone in its chapter, and one undo restores it", async () => {
    const { ref, lexical } = await mountSimple(headingAloneUsj);
    const before = ref.current?.getUsj();
    await placeCaretAtParaStart(lexical, 0);

    await pressKeyThroughDom(lexical, "Backspace");
    await pressKeyThroughDom(lexical, "Backspace");

    expect(ref.current?.getUsj()).toEqual({ ...usj, content: usj.content.slice(0, 2) });
    expect(isCaretInBlankLine(lexical)).toBe(true);
    await act(async () => ref.current?.undo());
    expect(ref.current?.getUsj()).toEqual(before);
  });

  it("gives that blank line the marker the host's paragraph-style dropdown picks", async () => {
    const { ref, lexical } = await mountSimple(headingAloneUsj);
    const before = ref.current?.getUsj();
    await placeCaretAtParaStart(lexical, 0);
    await pressKeyThroughDom(lexical, "Backspace");
    await pressKeyThroughDom(lexical, "Backspace");

    const rows = await retag(ref, lexical, "s");

    expect(rows).toEqual([gutterRow("s")]);
    expect(ref.current?.getUsj()).toEqual(before);
  });

  // Arming the empty paragraph's removal must not move the caret into it, or the key typed next
  // would land in the heading.
  it("keeps the caret in the paragraph after an empty one when a key is typed after one Backspace", async () => {
    const { lexical } = await mountSimple(headingBetweenParasUsj);
    await placeCaretAtParaStart(lexical, 2);

    await pressKeyThroughDom(lexical, "Backspace");
    await pressKeyThroughDom(lexical, "x");

    expect(caretParaIndex(lexical)).toBe(2);
  });
});

// Without a line after the chapter, a click below its number puts the caret before the chapter.
describe("a chapter with no line after it in Simple mode", () => {
  it("loads with a blank line after it, which saves as nothing", async () => {
    const { ref, lexical } = await mountSimple(bareChapterUsj);

    const isLastLineBlank = lexical.getEditorState().read(() => {
      const last = $getRoot().getLastChild();
      return $isImpliedParaNode(last) && last.isEmpty();
    });
    expect(isLastLineBlank).toBe(true);
    expect(ref.current?.getUsj()).toEqual(bareChapterUsj);
  });

  it("loads the same delta as deleting its only paragraph leaves", async () => {
    const { lexical: deleted } = await mountSimple(headingAloneUsj);
    await placeCaretAtParaStart(deleted, 0);
    await pressKeyThroughDom(deleted, "Backspace");
    await pressKeyThroughDom(deleted, "Backspace");

    const { lexical: reloaded } = await mountSimple(bareChapterUsj);

    expect(getEditorDelta(reloaded.getEditorState())).toEqual(
      getEditorDelta(deleted.getEditorState()),
    );
  });

  it("keeps an annotation in the next chapter on the text the host names", async () => {
    const { ref } = await mountSimple(bareChapterBeforeAnotherUsj);
    const text = "first verse text";

    await act(async () => {
      ref.current?.setAnnotation(
        {
          start: { jsonPath: "$.content[3].content[1]", offset: 0 },
          end: { jsonPath: "$.content[3].content[1]", offset: text.length },
        },
        "highlight",
        "id-1",
      );
    });

    expect(document.querySelector("mark")?.textContent).toBe(text);
  });
});

async function mountSimple(initialUsj: Usj = usj): Promise<{
  ref: RefObject<EditorRef | null>;
  lexical: LexicalEditor;
}> {
  const ref = createRef<EditorRef>();
  const lexicalRef = createRef<LexicalEditor>();
  await act(async () => {
    render(
      <Editor
        ref={ref}
        defaultUsj={initialUsj}
        options={{
          view: getViewOptions(PARAGRAPH_STRUCTURE_VIEW_MODE),
          structureProtectionMode: "guarded",
        }}
      >
        <EditorRefPlugin editorRef={lexicalRef} />
      </Editor>,
    );
  });
  const lexical = lexicalRef.current;
  if (!ref.current || !lexical) throw new Error("editor did not mount");
  if (!lexical.getRootElement()?.classList.contains("psc-gutter-markers"))
    throw new Error("editor root does not lay its markers out in the gutter");
  return { ref, lexical };
}

/** Puts a collapsed caret in the text of the `paraIndex`th paragraph, `offset` into its last run. */
async function placeCaret(
  lexical: LexicalEditor,
  paraIndex: number,
  offset: number | "end",
): Promise<void> {
  await act(async () => {
    lexical.update(() => {
      const para = $getRoot().getChildren().filter($isParaNode)[paraIndex];
      const text = para?.getAllTextNodes().at(-1);
      if (!text) throw new Error(`no text in paragraph ${paraIndex}`);
      const at = offset === "end" ? text.getTextContentSize() : offset;
      text.select(at, at);
    });
  });
}

/**
 * Puts a collapsed caret at the start of the `paraIndex`th paragraph: just past its gutter glyph,
 * and before anything else, a leading verse included.
 */
async function placeCaretAtParaStart(lexical: LexicalEditor, paraIndex: number): Promise<void> {
  await act(async () => {
    lexical.update(() => {
      const para = $getRoot().getChildren().filter($isParaNode)[paraIndex];
      if (!para) throw new Error(`no paragraph ${paraIndex}`);
      const at = $isGutterMarkerNode(para.getFirstChild()) ? 1 : 0;
      para.select(at, at);
    });
  });
}

/** The index, among the paragraphs, of the one the caret is in; undefined with no caret. */
function caretParaIndex(lexical: LexicalEditor): number | undefined {
  return lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) return undefined;
    const focus = selection.focus.getNode();
    return $getRoot()
      .getChildren()
      .filter($isParaNode)
      .findIndex((para) => para.is(focus) || para.isParentOf(focus));
  });
}

/** True when the caret is in a line with no marker. */
function isCaretInBlankLine(lexical: LexicalEditor): boolean {
  return lexical.getEditorState().read(() => {
    const selection = $getSelection();
    return (
      $isRangeSelection(selection) &&
      $isImpliedParaNode(selection.focus.getNode().getTopLevelElement())
    );
  });
}

/**
 * Retags the selected paragraph through `EditorRef.formatPara`, the call the host's paragraph-style
 * dropdown makes once it has put the selection back.
 *
 * @returns the gutter rows as they stand straight after the retag's own update.
 */
async function retag(
  ref: RefObject<EditorRef | null>,
  lexical: LexicalEditor,
  marker: string,
): Promise<GutterRow[]> {
  let rows: GutterRow[] = [];
  await act(async () => {
    ref.current?.formatPara(marker);
    rows = gutterRows(lexical);
  });
  return rows;
}

/** A paragraph's marker, as its node and its element carry it, beside what its gutter shows. */
interface GutterRow {
  marker: string;
  elementMarker: string | undefined;
  isGutterGlyphFirst: boolean;
  gutter: string | undefined;
}

/** The row of a paragraph whose gutter correctly shows `marker`. */
function gutterRow(marker: string): GutterRow {
  return {
    marker,
    elementMarker: marker,
    isGutterGlyphFirst: true,
    gutter: `\\${marker}${NBSP}`,
  };
}

function gutterRows(lexical: LexicalEditor): GutterRow[] {
  return lexical.getEditorState().read(() =>
    $getRoot()
      .getChildren()
      .filter($isParaNode)
      .map((para) => {
        const element = lexical.getElementByKey(para.getKey());
        return {
          marker: para.getMarker(),
          elementMarker: element?.getAttribute("data-marker") ?? undefined,
          isGutterGlyphFirst: $isGutterMarkerNode(para.getFirstChild()),
          gutter: element?.querySelector(GUTTER_GLYPH_SELECTOR)?.textContent ?? undefined,
        };
      }),
  );
}
