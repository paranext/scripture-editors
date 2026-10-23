/**
 * Keystrokes the typing-fidelity oracle (typingFidelityOracle.test-helpers.tsx) found changing
 * more than they typed, each pinned as the gesture a user makes, in every view a user edits in.
 */
import { EDITING_VIEWS, editorView, forEachView, mountInView } from "./editorViews.test-helpers";
import { installSelectionModify, press } from "./typingFidelityOracle.test-helpers";
import { ContentJsonPath, MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { UNDO_COMMAND } from "lexical";
import { NBSP } from "shared";
import { describe, expect, it } from "vitest";

installSelectionModify();

/** `\id`, `\c 1`, then one paragraph holding `content`. */
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

const NOTE: MarkerContent = {
  type: "note",
  marker: "f",
  caller: "+",
  content: [{ type: "char", marker: "ft", content: ["note text"] }],
};

forEachView(EDITING_VIEWS, ({ view }) => {
  describe("Delete just before a collapsed note", () => {
    it("removes the note whole and keeps the text around it", async () => {
      const mounted = await mountInView(oneParaUsj(["a", NOTE, " b"]), view);
      const { ref } = mounted;
      await act(async () => {
        ref.current?.setSelection({ start: { jsonPath: "$.content[2].content[0]", offset: 1 } });
      });

      const thrown = await press(mounted, "Delete");

      expect(thrown).toEqual([]);
      expect(ref.current?.getUsj()?.content[2]).toEqual({
        type: "para",
        marker: "p",
        content: ["a b"],
      });
    });
  });
});

/** `\id`, `\c 1`, an empty `\b`, then `\p text`. */
const BLANK_LINE_THEN_PARAGRAPH: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
    { type: "chapter", marker: "c", number: "1" },
    { type: "para", marker: "b" },
    { type: "para", marker: "p", content: ["text"] },
  ],
};

/** The editing views whose markers are hidden: a caret at a paragraph's text start is past no
 * marker glyph. */
const HIDDEN_MARKER_VIEWS = EDITING_VIEWS.filter(({ name }) => name !== "standard");

/** The paragraphs after the chapter, each as its marker and its text. */
function paragraphsAfterChapter(usj: Usj | undefined): { marker?: string; text: string }[] {
  return (usj?.content ?? []).slice(2).map((item) => ({
    marker: typeof item === "object" ? item.marker : undefined,
    text: typeof item === "object" ? (item.content ?? []).join("") : item,
  }));
}

forEachView(HIDDEN_MARKER_VIEWS, ({ view }) => {
  // The joined paragraph keeps the blank line's marker, as joining any two paragraphs keeps the
  // first one's; what matters here is that no text is lost.
  describe("joining a paragraph with an empty blank line before it", () => {
    it("Backspace at the paragraph's start keeps its text", async () => {
      const mounted = await mountInView(BLANK_LINE_THEN_PARAGRAPH, view);
      await act(async () => {
        mounted.ref.current?.setSelection({
          start: { jsonPath: "$.content[3].content[0]", offset: 0 },
        });
      });

      expect(await press(mounted, "Backspace")).toEqual([]);

      expect(paragraphsAfterChapter(mounted.ref.current?.getUsj())).toEqual([
        { marker: "b", text: "text" },
      ]);
    });

    it("typing over a range from the blank line into the paragraph keeps the rest", async () => {
      const mounted = await mountInView(BLANK_LINE_THEN_PARAGRAPH, view);
      await act(async () => {
        mounted.ref.current?.setSelection({
          start: { jsonPath: "$.content[2]", offset: 0 },
          end: { jsonPath: "$.content[3].content[0]", offset: 1 },
        });
      });

      expect(await press(mounted, "x", "x")).toEqual([]);

      expect(paragraphsAfterChapter(mounted.ref.current?.getUsj())).toEqual([
        { marker: "b", text: "xext" },
      ]);
    });
  });
});

forEachView(EDITING_VIEWS, ({ view }) => {
  describe("Undo after Enter in front of a char span or a note", () => {
    const bold: MarkerContent = { type: "char", marker: "nd", content: ["bold"] };
    it.each<[string, MarkerContent[], ContentJsonPath, number]>([
      ["a char span", ["a ", bold], "$.content[2].content[1].content[0]", 0],
      ["a note", ["a ", NOTE], "$.content[2].content[0]", 2],
    ])("brings back the one paragraph (%s)", async (_, content, jsonPath, offset) => {
      const usj = oneParaUsj(content);
      const mounted = await mountInView(usj, view);
      await act(async () => {
        mounted.ref.current?.setSelection({
          start: { jsonPath, offset },
        });
      });
      expect(await press(mounted, "Enter")).toEqual([]);
      expect(mounted.ref.current?.getUsj()?.content).toHaveLength(4);

      await act(async () => {
        mounted.lexical.dispatchCommand(UNDO_COMMAND, undefined);
      });

      expect(mounted.ref.current?.getUsj()).toEqual(usj);
    });
  });
});

/** The editing views, and the visible-marker view whose spans have no separator either. */
const NBSP_VIEWS = [...EDITING_VIEWS, { name: "visible", view: editorView("visible") }];

/** `\p a \nd <content>\nd* b`. */
function spanUsj(content: MarkerContent[]): Usj {
  return oneParaUsj(["a ", { type: "char", marker: "nd", content }, " b"]);
}

forEachView(NBSP_VIEWS, ({ view }) => {
  describe("an author's no-break space left alone in a span", () => {
    it("is saved when the text after it is deleted", async () => {
      const mounted = await mountInView(spanUsj([`${NBSP}x`]), view);
      await act(async () => {
        mounted.ref.current?.setSelection({
          start: { jsonPath: "$.content[2].content[1].content[0]", offset: 2 },
        });
      });

      expect(await press(mounted, "Backspace")).toEqual([]);

      expect(mounted.ref.current?.getUsj()).toEqual(spanUsj([NBSP]));
    });

    it("is saved when the text before it is deleted", async () => {
      const mounted = await mountInView(spanUsj([`x${NBSP}`]), view);
      await act(async () => {
        mounted.ref.current?.setSelection({
          start: { jsonPath: "$.content[2].content[1].content[0]", offset: 1 },
        });
      });

      expect(await press(mounted, "Backspace")).toEqual([]);

      expect(mounted.ref.current?.getUsj()).toEqual(spanUsj([NBSP]));
    });
  });
});

// Standard view shows a typed space run with no-break spaces so it stays visible, and saves an NBSP
// typed there as a space; these views save what is typed.
forEachView(
  NBSP_VIEWS.filter(({ name }) => name !== "standard"),
  ({ view }) => {
    describe("a no-break space typed into an empty span", () => {
      it("is saved", async () => {
        const mounted = await mountInView(spanUsj([]), view);
        await act(async () => {
          mounted.ref.current?.setSelection({
            start: { jsonPath: "$.content[2].content[1]", offset: 0 },
          });
        });

        expect(await press(mounted, NBSP, NBSP)).toEqual([]);

        expect(mounted.ref.current?.getUsj()).toEqual(spanUsj([NBSP]));
      });
    });
  },
);
