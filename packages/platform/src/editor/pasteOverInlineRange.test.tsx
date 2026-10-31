/**
 * A paste over a range that spans more than one text of a paragraph, in the views that hide markers.
 * It replaces only the selected text, as typing over the same range does: what follows the range
 * stays where it was, in its own order, whichever clipboard flavor the paste comes through.
 */
import { EDITING_VIEWS, forEachView, mountInView } from "./editorViews.test-helpers";
import { ContentJsonPath, MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { LexicalEditor, PASTE_COMMAND } from "lexical";
import { describe, expect, it } from "vitest";

const HIDDEN_MARKER_VIEWS = EDITING_VIEWS.filter(({ name }) => name !== "standard");

function oneParaUsj(content: MarkerContent[]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
      { type: "chapter", marker: "c", number: "1" },
      { type: "para", marker: "p", content },
    ],
  };
}

function char(marker: string, ...content: MarkerContent[]): MarkerContent {
  return { type: "char", marker, content };
}

/** One end of a range. */
interface RangeEnd {
  jsonPath: ContentJsonPath;
  offset: number;
}

/** A clipboard's flavors, by format. */
interface ClipboardFlavors {
  [format: string]: string;
}

const NESTED_SPAN = oneParaUsj([char("nd", "one ", char("wj", "two"), "three"), " b"]);
const NESTED_TWO: ContentJsonPath = "$.content[2].content[0].content[1].content[0]";
const NESTED_THREE: ContentJsonPath = "$.content[2].content[0].content[2]";
const AFTER_NESTED_SPAN: ContentJsonPath = "$.content[2].content[1]";

const SPAN_BETWEEN_PROSE = oneParaUsj(["abc", char("nd", "Lord"), " def"]);

const HTML_CLIPBOARD = { "text/html": "<span>X</span>", "text/plain": "X" };
const PLAIN_CLIPBOARD = { "text/plain": "X" };
const BOTH_CLIPBOARDS = [
  { flavor: "html", clipboard: HTML_CLIPBOARD },
  { flavor: "plain text", clipboard: PLAIN_CLIPBOARD },
];

function clipboardEvent(flavors: ClipboardFlavors): ClipboardEvent {
  const event = new ClipboardEvent("paste", { bubbles: true, cancelable: true });
  Object.defineProperty(event, "clipboardData", {
    value: {
      types: Object.keys(flavors),
      files: [],
      getData: (format: string) => flavors[format] ?? "",
      setData: () => undefined,
    },
  });
  return event;
}

async function paste(editor: LexicalEditor, flavors: ClipboardFlavors): Promise<void> {
  await act(async () =>
    editor.update(() => {
      editor.dispatchCommand(PASTE_COMMAND, clipboardEvent(flavors));
    }),
  );
  await act(async () => {
    for (let i = 0; i < 3; i += 1) await new Promise((resolve) => setTimeout(resolve, 0));
  });
}

forEachView(HIDDEN_MARKER_VIEWS, ({ view }) => {
  /** The document content after `flavors` is pasted over the given range of `usj`. */
  async function pastedOver(usj: Usj, start: RangeEnd, end: RangeEnd, flavors: ClipboardFlavors) {
    const mounted = await mountInView(usj, view);
    await act(async () => {
      mounted.ref.current?.setSelection({ start, end });
    });
    await paste(mounted.lexical, flavors);
    return { mounted, content: () => mounted.ref.current?.getUsj()?.content.slice(2) };
  }

  describe.each(BOTH_CLIPBOARDS)("a $flavor paste over a range", ({ clipboard }) => {
    it("from a nested span into its enclosing span keeps the text in order", async () => {
      const { content } = await pastedOver(
        NESTED_SPAN,
        { jsonPath: NESTED_TWO, offset: 2 },
        { jsonPath: NESTED_THREE, offset: 1 },
        clipboard,
      );

      expect(content()).toEqual([
        {
          type: "para",
          marker: "p",
          content: [char("nd", "one ", char("wj", "twX"), "hree"), " b"],
        },
      ]);
    });

    it("from a nested span to past its enclosing span leaves the rest outside", async () => {
      const { content } = await pastedOver(
        NESTED_SPAN,
        { jsonPath: NESTED_TWO, offset: 2 },
        { jsonPath: AFTER_NESTED_SPAN, offset: 1 },
        clipboard,
      );

      expect(content()).toEqual([
        { type: "para", marker: "p", content: [char("nd", "one ", char("wj", "twX")), "b"] },
      ]);
    });

    // A range starting where the prose meets the span starts in the span, as it does when typed over.
    it("from the end of prose across a whole span leaves the rest as prose", async () => {
      const { content } = await pastedOver(
        SPAN_BETWEEN_PROSE,
        { jsonPath: "$.content[2].content[0]", offset: 3 },
        { jsonPath: "$.content[2].content[2]", offset: 2 },
        clipboard,
      );

      expect(content()).toEqual([
        { type: "para", marker: "p", content: ["abc", char("nd", "X"), "ef"] },
      ]);
    });

    it("holding both edge texts whole keeps the text after the span outside it", async () => {
      const { content } = await pastedOver(
        NESTED_SPAN,
        { jsonPath: NESTED_TWO, offset: 0 },
        { jsonPath: NESTED_THREE, offset: 5 },
        clipboard,
      );

      expect(content()).toEqual([
        { type: "para", marker: "p", content: [char("nd", "one ", char("wj", "X")), " b"] },
      ]);
    });

    it("is taken back by one undo", async () => {
      const { mounted, content } = await pastedOver(
        NESTED_SPAN,
        { jsonPath: NESTED_TWO, offset: 2 },
        { jsonPath: NESTED_THREE, offset: 1 },
        clipboard,
      );

      await act(async () => mounted.ref.current?.undo());

      expect(content()).toEqual(NESTED_SPAN.content.slice(2));
    });
  });

  it("keeps the rest in place when several lines of plain text are pasted", async () => {
    const { content } = await pastedOver(
      NESTED_SPAN,
      { jsonPath: NESTED_TWO, offset: 2 },
      { jsonPath: AFTER_NESTED_SPAN, offset: 1 },
      { "text/plain": "X\nY" },
    );

    expect(content()).toEqual([
      { type: "para", marker: "p", content: [char("nd", "one ", char("wj", "twX"))] },
      { type: "para", marker: "p", content: ["Yb"] },
    ]);
  });

  it("leaves the range alone when the clipboard holds no text", async () => {
    const { content } = await pastedOver(
      NESTED_SPAN,
      { jsonPath: NESTED_TWO, offset: 2 },
      { jsonPath: AFTER_NESTED_SPAN, offset: 1 },
      {},
    );

    expect(content()).toEqual(NESTED_SPAN.content.slice(2));
  });
});
