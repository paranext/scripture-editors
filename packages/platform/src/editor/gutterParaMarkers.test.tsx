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
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { EditorRefPlugin } from "@lexical/react/LexicalEditorRefPlugin";
import { act, render } from "@testing-library/react";
import { $getRoot, LexicalEditor } from "lexical";
import { createRef, RefObject } from "react";
import { $isGutterMarkerNode, $isParaNode, $selectParaMarker, NBSP } from "shared";
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
