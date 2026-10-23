/**
 * Spaces right after a marker's separator are not content. Paratext 9's tokenizer skips all
 * whitespace after a paragraph marker's separator and after a verse number (`\p  \w a\w*` reads
 * as `\p \w a\w*`, `\v 2  x` as `\v 2 x`), so a space left there — typed, or a deleted char
 * marker's separator — is shown while editing and dropped by `getUsj()`, the way a typed space run
 * is shown and saved as one space. Positions report into the saved USJ, so they skip the dropped
 * spaces too.
 */
import { mountInView, oracleView } from "./annotationLocations/annotationLocations.test-helpers";
import { mountStandardViewEditor } from "./settledGetUsj.test-helpers";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { flushQueuedEvents } from "./editor-test.utils";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  DELETE_CHARACTER_COMMAND,
  LexicalEditor,
  LexicalNode,
  TextNode,
} from "lexical";
import {
  $isCharNode,
  $isMarkerNode,
  $isMarkerTrailingSeparator,
  $isVerseNode,
  CharNode,
  NBSP,
} from "shared";

function usjWith(block: Usj["content"][number]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
      { type: "chapter", marker: "c", number: "1" },
      block,
      { type: "para", marker: "p", content: ["second"] },
    ],
  };
}

function paraUsj(content: MarkerContent[], marker = "p"): Usj {
  return usjWith({ type: "para", marker, content });
}

function $textNodes(node: LexicalNode, out: TextNode[] = []): TextNode[] {
  if ($isTextNode(node)) out.push(node);
  if ($isElementNode(node)) for (const child of node.getChildren()) $textNodes(child, out);
  return out;
}

/** The first text in the block at `blockIndex` that is neither a marker glyph nor its separator
 * and starts with `text`, NBSPs read as spaces. */
function $contentTextStarting(text: string, blockIndex = 2): TextNode {
  const node = $textNodes($getRoot().getChildren()[blockIndex]).find(
    (candidate) =>
      !$isMarkerNode(candidate) &&
      !$isMarkerTrailingSeparator(candidate) &&
      candidate.getTextContent().replaceAll(NBSP, " ").startsWith(text),
  );
  if (!node) throw new Error(`no text starting ${JSON.stringify(text)}`);
  return node;
}

async function placeCaret(editor: LexicalEditor, $node: () => TextNode, offset: number) {
  await act(async () => editor.update(() => $node().select(offset, offset), { discrete: true }));
}

async function typeSpaces(editor: LexicalEditor, count: number) {
  for (let press = 0; press < count; press += 1)
    await act(async () =>
      editor.update(
        () => {
          const selection = $getSelection();
          if (!$isRangeSelection(selection)) throw new Error("no range selection");
          selection.insertText(" ");
        },
        { discrete: true },
      ),
    );
}

/** One forward Delete of an ordinary character (jsdom cannot drive Lexical's own). */
async function deleteNextCharacter(editor: LexicalEditor) {
  await act(async () =>
    editor.update(
      () => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) throw new Error("no range selection");
        const { key, offset } = selection.anchor;
        selection.focus.set(key, offset + 1, "text");
        selection.removeText();
      },
      { discrete: true },
    ),
  );
}

/** Forward Delete through a whole opening glyph from before its backslash. */
async function deleteGlyph(editor: LexicalEditor, glyph: string) {
  for (let press = 1; press < glyph.length; press += 1) await deleteNextCharacter(editor);
  await act(async () =>
    editor.update(() => void editor.dispatchCommand(DELETE_CHARACTER_COMMAND, false), {
      discrete: true,
    }),
  );
}

const ndAtParaStart = paraUsj([
  { type: "char", marker: "nd", content: [{ type: "char", marker: "w", content: ["a"] }, " b"] },
  " z",
]);

async function mountWithNdDeleted() {
  const mounted = await mountStandardViewEditor(ndAtParaStart);
  await placeCaret(
    mounted.lexical,
    () => $textNodes($getRoot()).find((node) => node.getTextContent() === "\\nd") as TextNode,
    0,
  );
  await deleteGlyph(mounted.lexical, "\\nd");
  return mounted;
}

describe("getUsj() drops a paragraph's leading spaces (Standard view)", () => {
  it("saves a deleted char marker's separator at the paragraph start as nothing", async () => {
    const { ref, lexical } = await mountWithNdDeleted();

    // The separator stays on screen as the text's own space while the user edits.
    expect([" ", NBSP]).toContain(
      lexical.getEditorState().read(() => $contentTextStarting(" ").getTextContent()),
    );
    expect(ref.current?.getUsj()?.content[2]).toEqual({
      type: "para",
      marker: "p",
      content: [{ type: "char", marker: "w", content: ["a"] }, " b z"],
    });
  });

  it("saves spaces typed after the paragraph marker as nothing", async () => {
    const { ref, lexical } = await mountStandardViewEditor(paraUsj(["text here"]));
    await placeCaret(lexical, () => $contentTextStarting("text"), 0);

    await typeSpaces(lexical, 2);

    expect(ref.current?.getUsj()?.content[2]).toEqual({
      type: "para",
      marker: "p",
      content: ["text here"],
    });
  });

  it("drops them from a poetry line too", async () => {
    const { ref, lexical } = await mountStandardViewEditor(paraUsj(["line"], "q1"));
    await placeCaret(lexical, () => $contentTextStarting("line"), 0);

    await typeSpaces(lexical, 1);

    expect(ref.current?.getUsj()?.content[2]).toEqual({
      type: "para",
      marker: "q1",
      content: ["line"],
    });
  });

  it("saves a paragraph holding only spaces as an empty paragraph", async () => {
    const { ref, lexical } = await mountStandardViewEditor(paraUsj(["x"]));
    await placeCaret(lexical, () => $contentTextStarting("x"), 0);
    await typeSpaces(lexical, 3);
    await act(async () =>
      lexical.update(
        () => {
          const node = $contentTextStarting("   ");
          const size = node.getTextContentSize();
          node.select(size - 1, size);
          const selection = $getSelection();
          if ($isRangeSelection(selection)) selection.removeText();
        },
        { discrete: true },
      ),
    );

    expect(ref.current?.getUsj()?.content[2]).toEqual({ type: "para", marker: "p" });
  });

  it("drops an implied paragraph's leading spaces", async () => {
    const { ref, lexical } = await mountStandardViewEditor(usjWith("implied text"));
    await placeCaret(lexical, () => $contentTextStarting("implied"), 0);

    await typeSpaces(lexical, 2);

    expect(ref.current?.getUsj()?.content[2]).toBe("implied text");
  });

  it("keeps a leading no-break space, which is data", async () => {
    const usj = paraUsj([`${NBSP}kept`]);
    const { ref } = await mountStandardViewEditor(usj);

    expect(ref.current?.getUsj()?.content[2]).toEqual(usj.content[2]);
  });

  it("keeps a space that does not start the paragraph's content", async () => {
    const usj = paraUsj([{ type: "char", marker: "w", content: ["x"] }, " b"]);
    const { ref } = await mountStandardViewEditor(usj);

    expect(ref.current?.getUsj()?.content[2]).toEqual(usj.content[2]);
  });

  it("keeps the spaces after a chapter's \\ca, which follow its closing marker", async () => {
    const usj: Usj = {
      type: "USJ",
      version: "3.1",
      content: [
        { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
        { type: "chapter", marker: "c", number: "1", altnumber: "2" },
        " after ca",
      ],
    };
    const { ref } = await mountStandardViewEditor(usj);

    expect(ref.current?.getUsj()?.content[2]).toBe(" after ca");
  });
});

/** The text of the span with `marker` in the edited block: the separator NBSP and its content. */
function $spanContentText(marker: string): TextNode {
  const node = $textNodes($getRoot().getChildren()[2]).find(
    (candidate) =>
      !$isMarkerNode(candidate) &&
      $isCharNode(candidate.getParent()) &&
      (candidate.getParent() as CharNode).getMarker() === marker,
  );
  if (!node) throw new Error(`no content text in a \\${marker} span`);
  return node;
}

describe("getUsj() drops a char span's leading spaces (Standard view)", () => {
  it("saves a span holding only spaces as an empty span, as Paratext 9 saves it", async () => {
    // A selected space wrapped in `\nd`: Paratext 9 skips all whitespace after an opener, so
    // `one\nd  \nd*two` saves as `one\nd \nd*two` and the words join in the file.
    const { ref, lexical } = await mountStandardViewEditor(
      paraUsj(["one", { type: "char", marker: "nd", content: [" "] }, "two"]),
    );

    expect(lexical.getEditorState().read(() => $spanContentText("nd").getTextContent())).toBe(
      `${NBSP} `,
    );
    expect(ref.current?.getUsj()?.content[2]).toEqual({
      type: "para",
      marker: "p",
      content: ["one", { type: "char", marker: "nd" }, "two"],
    });
  });

  it.each([
    ["a span that starts with one", [`${NBSP}lead`]],
    ["a span holding only one", [NBSP]],
  ])("keeps a leading no-break space, which is data, in %s", async (_name, content) => {
    const usj = paraUsj(["a ", { type: "char", marker: "nd", content }, " b"]);
    const { ref, lexical } = await mountStandardViewEditor(usj);
    expect(ref.current?.getUsj()?.content[2]).toEqual(usj.content[2]);

    // A space typed after the separator, in front of the no-break space, is dropped; the
    // no-break space is not.
    await placeCaret(lexical, () => $spanContentText("nd"), 1);
    await typeSpaces(lexical, 1);

    expect(ref.current?.getUsj()?.content[2]).toEqual(usj.content[2]);
  });
});

const verse1 = { type: "verse", marker: "v", number: "1" } as const;

describe("getUsj() drops the spaces after a verse number (Standard view)", () => {
  it("saves the spaces a text after a verse number starts with as nothing", async () => {
    const { ref } = await mountStandardViewEditor(paraUsj([verse1, "  text"]));

    expect(ref.current?.getUsj()?.content[2]).toEqual({
      type: "para",
      marker: "p",
      content: [verse1, "text"],
    });
  });

  it("drops the space typed after a verse number at the paragraph's end", async () => {
    const usj = paraUsj([verse1, "In the ", { type: "verse", marker: "v", number: "2" }]);
    const { ref, lexical } = await mountStandardViewEditor(usj);
    await act(async () =>
      lexical.update(() => $getRoot().getAllTextNodes().filter($isVerseNode)[1].select(4, 4), {
        discrete: true,
      }),
    );

    for (const character of [" ", " ", "x"]) {
      await act(async () => {
        lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, character);
      });
      await flushQueuedEvents();
    }

    const para = ref.current?.getUsj()?.content[2];
    const text = typeof para === "object" ? para.content?.[3] : undefined;
    expect(text).toMatch(/^x/);
  });

  it("keeps the spaces after a verse's \\vp, which follow its closing marker", async () => {
    const usj = paraUsj([{ ...verse1, pubnumber: "1a" }, " text"]);
    const { ref } = await mountStandardViewEditor(usj);

    expect(ref.current?.getUsj()?.content[2]).toEqual(usj.content[2]);
  });
});

describe("positions in a paragraph whose leading spaces getUsj() drops", () => {
  it("reports a caret after the dropped spaces at the saved text's start", async () => {
    const { ref, lexical } = await mountStandardViewEditor(paraUsj(["text here"]));
    await placeCaret(lexical, () => $contentTextStarting("text"), 0);
    await typeSpaces(lexical, 2);

    expect(ref.current?.getSelection()).toEqual({
      start: { jsonPath: "$.content[2].content[0]", offset: 0 },
    });

    await placeCaret(lexical, () => $contentTextStarting("  text"), 1);
    expect(ref.current?.getSelection()).toEqual({
      start: { jsonPath: "$.content[2].content[0]", offset: 0 },
    });

    await placeCaret(lexical, () => $contentTextStarting("  text"), 4);
    expect(ref.current?.getSelection()).toEqual({
      start: { jsonPath: "$.content[2].content[0]", offset: 2 },
    });
  });

  it("indexes the paragraph's items without the dropped separator", async () => {
    const { ref, lexical } = await mountWithNdDeleted();

    // In the dropped space, either side of it, is the paragraph's content start: the `\w` span.
    for (const offset of [0, 1]) {
      await placeCaret(lexical, () => $contentTextStarting(" "), offset);
      expect(ref.current?.getSelection()).toEqual({
        start: { jsonPath: "$.content[2].content[0]" },
      });
    }
    await placeCaret(lexical, () => $contentTextStarting(" b z"), 2);
    expect(ref.current?.getSelection()).toEqual({
      start: { jsonPath: "$.content[2].content[1]", offset: 2 },
    });
  });

  it("resolves a saved location back onto the text after the dropped spaces", async () => {
    const { ref, lexical } = await mountWithNdDeleted();

    await act(async () =>
      ref.current?.setSelection({ start: { jsonPath: "$.content[2].content[1]", offset: 2 } }),
    );

    const caret = lexical.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) return undefined;
      const text = selection.anchor.getNode().getTextContent();
      return `${text.slice(0, selection.anchor.offset)}|${text.slice(selection.anchor.offset)}`;
    });
    expect(caret).toBe(" b| z");
  });

  it("reports a caret after spaces dropped after a verse number at the text's start", async () => {
    const { ref, lexical } = await mountStandardViewEditor(paraUsj([verse1, "  text"]));

    for (const [offset, saved] of [
      [1, 0],
      [2, 0],
      [4, 2],
    ]) {
      await placeCaret(lexical, () => $contentTextStarting("  text"), offset);
      expect(ref.current?.getSelection()).toEqual({
        start: { jsonPath: "$.content[2].content[1]", offset: saved },
      });
    }
  });

  it("indexes the root's items without an implied paragraph's dropped spaces", async () => {
    const { ref, lexical } = await mountStandardViewEditor(usjWith("implied text"));
    await placeCaret(lexical, () => $contentTextStarting("implied"), 0);
    await typeSpaces(lexical, 2);

    await placeCaret(lexical, () => $contentTextStarting("  implied"), 4);
    expect(ref.current?.getSelection()).toEqual({
      start: { jsonPath: "$.content[2]", offset: 2 },
    });
  });
});

describe("other views keep a paragraph's leading spaces as typed", () => {
  it.each(["unformatted", "formatted", "visible"])("%s", async (name) => {
    const { ref, lexical, unmount } = await mountInView(paraUsj(["text"]), oracleView(name));
    await placeCaret(lexical, () => $contentTextStarting("text"), 0);

    await typeSpaces(lexical, 1);

    expect(ref.current?.getUsj()?.content[2]).toEqual({
      type: "para",
      marker: "p",
      content: [" text"],
    });
    unmount();
  });
});
