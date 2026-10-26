/**
 * Keystrokes the typing-fidelity oracle (typingFidelityOracle.test-helpers.tsx) found changing
 * more than they typed, each pinned as the gesture a user makes, in every view a user edits in.
 */
import {
  EDITING_VIEWS,
  editorView,
  forEachView,
  MountedEditor,
  mountInView,
  NamedView,
} from "./editorViews.test-helpers";
import { EditorRef } from "./editor.model";
import { installSelectionModify, press } from "./typingFidelityOracle.test-helpers";
import { ContentJsonPath, MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, $isElementNode, UNDO_COMMAND } from "lexical";
import { NBSP } from "shared";
import { StructureProtectionMode } from "shared-react";
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

/** The hidden-marker editing views, and paragraph-structure as Simple mode edits in it, where a
 * join of two paragraphs is armed by the first press of the key and made by the second. */
const HIDDEN_MARKER_AND_GUARDED_VIEWS: (NamedView<string> & {
  structureProtectionMode?: StructureProtectionMode;
  presses: number;
})[] = [
  ...HIDDEN_MARKER_VIEWS.map((entry) => ({ ...entry, presses: 1 })),
  {
    name: "paragraph-structure (guarded)",
    view: editorView("paragraph-structure"),
    structureProtectionMode: "guarded",
    presses: 2,
  },
];

/** What the editor shows for the paragraphs after the chapter of `usj` loaded as is. */
async function renderedParagraphs(usj: Usj, view: NamedView<string>["view"]): Promise<string[]> {
  const mounted = await mountInView(usj, view);
  const texts = paragraphTexts(mounted);
  mounted.unmount();
  return texts;
}

/** The text of each paragraph after the chapter, as the editor holds it. */
function paragraphTexts(mounted: MountedEditor): string[] {
  return mounted.lexical.getEditorState().read(() =>
    $getRoot()
      .getChildren()
      .slice(2)
      .map((node) => node.getTextContent()),
  );
}

/** `\id`, `\c 1`, then `\p text`: what joining the paragraph into the blank line leaves. */
const PARAGRAPH_ONLY: Usj = {
  ...BLANK_LINE_THEN_PARAGRAPH,
  content: BLANK_LINE_THEN_PARAGRAPH.content.filter(
    (item) => typeof item !== "object" || item.marker !== "b",
  ),
};

for (const { name, view, structureProtectionMode, presses } of HIDDEN_MARKER_AND_GUARDED_VIEWS) {
  // Paratext 9's formatted view joins two paragraphs the way its HTML editor (Gecko) joins two
  // blocks: the second block survives and takes in the first's content (`JoinNodeTransaction`
  // keeps the right node). Joined with the empty blank line before it, a paragraph keeps its own
  // marker and the blank line is gone.
  describe(`in ${name} view: joining a paragraph with an empty blank line before it`, () => {
    it.each<[string, Parameters<EditorRef["setSelection"]>[0], string]>([
      [
        "Backspace at the paragraph's start",
        { start: { jsonPath: "$.content[3].content[0]", offset: 0 } },
        "Backspace",
      ],
      ["Delete in the blank line", { start: { jsonPath: "$.content[2]", offset: 0 } }, "Delete"],
    ])("%s drops the blank line and keeps the paragraph", async (_, selection, key) => {
      const mounted = await mountInView(BLANK_LINE_THEN_PARAGRAPH, view, {
        structureProtectionMode,
      });
      await act(async () => {
        mounted.ref.current?.setSelection(selection);
      });

      for (let count = 0; count < presses; count++) expect(await press(mounted, key)).toEqual([]);

      expect(paragraphsAfterChapter(mounted.ref.current?.getUsj())).toEqual([
        { marker: "p", text: "text" },
      ]);
      expect(paragraphTexts(mounted)).toEqual(await renderedParagraphs(PARAGRAPH_ONLY, view));
    });

    it("typing over a range from the blank line into the paragraph keeps the rest", async () => {
      const mounted = await mountInView(BLANK_LINE_THEN_PARAGRAPH, view, {
        structureProtectionMode,
      });
      await act(async () => {
        mounted.ref.current?.setSelection({
          start: { jsonPath: "$.content[2]", offset: 0 },
          end: { jsonPath: "$.content[3].content[0]", offset: 1 },
        });
      });

      expect(await press(mounted, "x", "x")).toEqual([]);

      expect(paragraphsAfterChapter(mounted.ref.current?.getUsj())).toEqual([
        { marker: "p", text: "xext" },
      ]);
    });
  });
}

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

// Paratext 9's Standard view saves every U+00A0 in its editor as a space when the project stores a
// no-break space as `~` (`UsfmHtmlUtilities.LegacyPostprocessUsfm`): one typed there is display
// spacing, not data, and the author's no-break space is typed as `~`.
describe("in standard view: a no-break space typed as a character", () => {
  it.each<[string, MarkerContent[], ContentJsonPath, number, MarkerContent[]]>([
    ["between two letters", ["ab"], "$.content[2].content[0]", 1, ["a b"]],
    ["after a space", ["a b"], "$.content[2].content[0]", 2, ["a b"]],
    [
      "at a span's start",
      ["a ", { type: "char", marker: "nd", content: ["x"] }, " b"],
      "$.content[2].content[1].content[0]",
      0,
      ["a ", { type: "char", marker: "nd", content: ["x"] }, " b"],
    ],
  ])("is saved as a space (%s)", async (_, content, jsonPath, offset, saved) => {
    const mounted = await mountInView(oneParaUsj(content), editorView("standard"));
    await act(async () => {
      mounted.ref.current?.setSelection({ start: { jsonPath, offset } });
    });

    expect(await press(mounted, NBSP, NBSP)).toEqual([]);

    expect(mounted.ref.current?.getUsj()).toEqual(oneParaUsj(saved));
  });

  it("is saved as `~` when typed as `~`", async () => {
    const mounted = await mountInView(oneParaUsj(["ab"]), editorView("standard"));
    await act(async () => {
      mounted.ref.current?.setSelection({
        start: { jsonPath: "$.content[2].content[0]", offset: 1 },
      });
    });

    expect(await press(mounted, "~", "~")).toEqual([]);

    expect(mounted.ref.current?.getUsj()).toEqual(oneParaUsj([`a${NBSP}b`]));
  });
});

/** `\p a \nd one \+wj two\+wj* three\nd* b`. */
const NESTED_SPAN: Usj = oneParaUsj([
  "a ",
  {
    type: "char",
    marker: "nd",
    content: ["one ", { type: "char", marker: "wj", content: ["two"] }, " three"],
  },
  " b",
]);

/** The path of the text "two" in {@link NESTED_SPAN}. */
const NESTED_TWO = "$.content[2].content[1].content[1].content[0]";

forEachView(HIDDEN_MARKER_VIEWS, ({ view }) => {
  describe("a range from inside a nested span to outside it", () => {
    it("typed over within the enclosing span takes only the selected text", async () => {
      const mounted = await mountInView(NESTED_SPAN, view);
      await act(async () => {
        mounted.ref.current?.setSelection({
          start: { jsonPath: NESTED_TWO, offset: 2 },
          end: { jsonPath: "$.content[2].content[1].content[2]", offset: 1 },
        });
      });

      expect(await press(mounted, "x", "x")).toEqual([]);

      expect(mounted.ref.current?.getUsj()?.content[2]).toEqual({
        type: "para",
        marker: "p",
        content: [
          "a ",
          {
            type: "char",
            marker: "nd",
            content: ["one ", { type: "char", marker: "wj", content: ["twx"] }, "three"],
          },
          " b",
        ],
      });
    });

    it("deleted into the text after the enclosing span leaves that text outside it", async () => {
      const mounted = await mountInView(NESTED_SPAN, view);
      await act(async () => {
        mounted.ref.current?.setSelection({
          start: { jsonPath: NESTED_TWO, offset: 2 },
          end: { jsonPath: "$.content[2].content[2]", offset: 1 },
        });
      });

      expect(await press(mounted, "Backspace")).toEqual([]);

      expect(mounted.ref.current?.getUsj()?.content[2]).toEqual({
        type: "para",
        marker: "p",
        content: [
          "a ",
          {
            type: "char",
            marker: "nd",
            content: ["one ", { type: "char", marker: "wj", content: ["tw"] }],
          },
          "b",
        ],
      });
    });
  });
});

forEachView(HIDDEN_MARKER_VIEWS, ({ view }) => {
  describe("a range across a collapsed note", () => {
    it("typed over keeps the typed text and the text after the range", async () => {
      const usj = oneParaUsj(["a", NOTE, " b"]);
      usj.content.push({ type: "para", marker: "p", content: ["next"] });
      const mounted = await mountInView(usj, view);
      // A click after the `a`, then a Shift-click into the text after the note.
      await act(async () => {
        mounted.ref.current?.setSelection({
          start: { jsonPath: "$.content[2].content[0]", offset: 1 },
        });
      });
      await act(async () => {
        mounted.ref.current?.setSelection({
          start: { jsonPath: "$.content[2].content[0]", offset: 1 },
          end: { jsonPath: "$.content[2].content[2]", offset: 1 },
        });
      });

      expect(await press(mounted, "x", "x")).toEqual([]);

      expect(mounted.ref.current?.getUsj()?.content[2]).toEqual({
        type: "para",
        marker: "p",
        content: ["axb"],
      });
    });
  });
});

forEachView(HIDDEN_MARKER_VIEWS, ({ view }) => {
  describe("Backspace with the caret between a char span and a collapsed note", () => {
    it("removes the span's last letter, not nothing", async () => {
      const span: MarkerContent = { type: "char", marker: "wj", content: ["murder;’"] };
      const mounted = await mountInView(oneParaUsj([span, NOTE, " b"]), view);
      // The paragraph-level caret Lexical holds after the span. Its DOM position reads back as a
      // caret inside the note, which removes nothing when the key acts there.
      await act(async () => {
        mounted.lexical.update(() => {
          const paragraph = $getRoot().getLastChild();
          if (!$isElementNode(paragraph)) throw new Error("no paragraph");
          const afterSpan =
            paragraph.getChildren().findIndex((child) => child.getType() === "char") + 1;
          paragraph.select(afterSpan, afterSpan);
        });
      });

      expect(await press(mounted, "Backspace")).toEqual([]);

      expect(mounted.ref.current?.getUsj()?.content[2]).toEqual({
        type: "para",
        marker: "p",
        content: [{ ...span, content: ["murder;"] }, NOTE, " b"],
      });
    });
  });
});

forEachView(HIDDEN_MARKER_VIEWS, ({ view }) => {
  describe("a no-break space typed into a span, then left alone in it", () => {
    it("is saved as the span's content", async () => {
      const span: MarkerContent = { type: "char", marker: "nd", content: ["ab"] };
      const mounted = await mountInView(oneParaUsj(["a ", span, " b"]), view);
      const spanText = "$.content[2].content[1].content[0]";
      await act(async () => {
        mounted.ref.current?.setSelection({ start: { jsonPath: spanText, offset: 2 } });
      });
      expect(await press(mounted, NBSP, NBSP)).toEqual([]);
      await act(async () => {
        mounted.ref.current?.setSelection({
          start: { jsonPath: spanText, offset: 0 },
          end: { jsonPath: spanText, offset: 2 },
        });
      });

      expect(await press(mounted, "Backspace")).toEqual([]);

      expect(mounted.ref.current?.getUsj()?.content[2]).toEqual({
        type: "para",
        marker: "p",
        content: ["a ", { ...span, content: [NBSP] }, " b"],
      });
    });
  });
});

forEachView(HIDDEN_MARKER_VIEWS, ({ view }) => {
  describe("Enter in front of a span's last no-break space", () => {
    // The break moves the `~` into a new text node, one the document never held, so only the mark
    // it carries from the load says it is the author's.
    it("keeps the `~` as the new paragraph's span content", async () => {
      const span: MarkerContent = { type: "char", marker: "nd", content: [`ab${NBSP}`] };
      const mounted = await mountInView(oneParaUsj([span]), view);
      await act(async () => {
        mounted.ref.current?.setSelection({
          start: { jsonPath: "$.content[2].content[0].content[0]", offset: 2 },
        });
      });

      expect(await press(mounted, "Enter")).toEqual([]);

      expect(mounted.ref.current?.getUsj()?.content.slice(2)).toEqual([
        { type: "para", marker: "p", content: [{ ...span, content: ["ab"] }] },
        { type: "para", marker: "p", content: [{ ...span, content: [NBSP] }] },
      ]);
    });
  });
});

/** The editing views, and paragraph-structure as Simple mode edits in it, where a deletion that
 * joins two paragraphs is made by a second press of the key. */
const EDITING_AND_GUARDED_VIEWS: (NamedView<string> & {
  structureProtectionMode?: StructureProtectionMode;
})[] = [
  ...EDITING_VIEWS,
  {
    name: "paragraph-structure (guarded)",
    view: editorView("paragraph-structure"),
    structureProtectionMode: "guarded",
  },
];

/** A `\w` word with a lemma: two of them side by side are two words, not one. */
function word(text: string): MarkerContent {
  // `lemma` is an attribute the USJ type does not name; a char marker may carry any attribute.
  const span = { type: "char", marker: "w", lemma: "grace", content: [text] };
  return span;
}

for (const { name, view, structureProtectionMode } of EDITING_AND_GUARDED_VIEWS) {
  describe(`in ${name} view: two alike spans left side by side by a deletion stay two spans, as in Standard view`, () => {
    it("deleting the space between them", async () => {
      const mounted = await mountInView(oneParaUsj([word("one"), " ", word("two")]), view, {
        structureProtectionMode,
      });
      await act(async () => {
        mounted.ref.current?.setSelection({
          start: { jsonPath: "$.content[2].content[1]", offset: 1 },
        });
      });

      expect(await press(mounted, "Backspace")).toEqual([]);

      expect(mounted.ref.current?.getUsj()?.content[2]).toEqual({
        type: "para",
        marker: "p",
        content: [word("one"), word("two")],
      });
    });

    it("joining the paragraphs they end and start", async () => {
      const usj = oneParaUsj([word("one")]);
      usj.content.push({ type: "para", marker: "p", content: [word("two")] });
      const mounted = await mountInView(usj, view, { structureProtectionMode });
      // The caret at the first paragraph's end, after its span (and, in Standard view, after the
      // span's closing marker).
      await act(async () => {
        mounted.lexical.update(() => {
          const paragraph = $getRoot().getChildAtIndex(2);
          if (!$isElementNode(paragraph)) throw new Error("no paragraph");
          const end = paragraph.getChildrenSize();
          paragraph.select(end, end);
        });
      });

      expect(await press(mounted, "Delete")).toEqual([]);
      // A guarded join is armed by the first press and made by the second.
      if (mounted.ref.current?.getUsj()?.content.length === 4)
        expect(await press(mounted, "Delete")).toEqual([]);

      expect(mounted.ref.current?.getUsj()?.content.slice(2)).toEqual([
        { type: "para", marker: "p", content: [word("one"), word("two")] },
      ]);
    });
  });
}

// The paragraph-structure view's gutter glyph leads the new paragraph, ahead of its text; the
// break's space must still go, as it does in the other views.
forEachView(EDITING_VIEWS, ({ view }) => {
  describe("Enter at a word break", () => {
    it.each<[string, StructureProtectionMode | undefined]>([
      ["unguarded", undefined],
      ["guarded", "guarded"],
    ])(
      "saves the second paragraph without the break's space (%s)",
      async (_, structureProtectionMode) => {
        const mounted = await mountInView(oneParaUsj(["In the beginning"]), view, {
          structureProtectionMode,
        });
        await act(async () => {
          mounted.ref.current?.setSelection({
            start: { jsonPath: "$.content[2].content[0]", offset: 2 },
          });
        });

        expect(await press(mounted, "Enter")).toEqual([]);

        expect(mounted.ref.current?.getUsj()?.content.slice(2)).toEqual([
          { type: "para", marker: "p", content: ["In"] },
          { type: "para", marker: "p", content: ["the beginning"] },
        ]);
      },
    );
  });
});
