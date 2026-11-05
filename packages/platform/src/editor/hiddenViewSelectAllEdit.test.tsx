/**
 * An edit that replaces a selection running across the book (`\id`) line or the chapter line, in a
 * hidden-marker view: a delete, typed text, Enter, or a drag-move's removal of what it moved.
 * Select All is the common case. The chapter document holds one of each line, and such an edit
 * keeps both, whole, as a cut of the same selection does, and replaces the rest: typed text goes in
 * after the chapter line, never in the `\id` line. Chapter 1 also shows the lines between them
 * (`\h`, `\mt1`, an introduction), so every case runs on a chapter with that front matter and on
 * one without.
 */
import { editorView, MountedEditor, mountInView } from "./editorViews.test-helpers";
import { installSelectionModify, press } from "./typingFidelityOracle.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $setSelection,
  DELETE_LINE_COMMAND,
  INSERT_LINE_BREAK_COMMAND,
  REMOVE_TEXT_COMMAND,
  SELECT_ALL_COMMAND,
} from "lexical";
import { $isParaLikeNode } from "shared";
import { $placeCaretAtParaContentStart, StructureProtectionMode } from "shared-react";
import { describe, expect, it } from "vitest";

installSelectionModify();

const NOTE = {
  type: "note",
  marker: "f",
  caller: "+",
  content: [{ type: "char", marker: "ft", content: ["note text"] }],
} as MarkerObject;

const BOOK = { type: "book", marker: "id", code: "GEN", content: ["Genesis title"] };
const CHAPTER = { type: "chapter", marker: "c", number: "1" };
const FIRST = {
  type: "para",
  marker: "p",
  content: [{ type: "verse", marker: "v", number: "1" }, "first ", NOTE, " words"],
};
const SECOND = {
  type: "para",
  marker: "q1",
  content: [{ type: "verse", marker: "v", number: "2" }, "second line"],
};

/** Chapter 1's lines between the book line and the chapter line. */
const FRONT_MATTER: MarkerContent[] = [
  { type: "para", marker: "h", content: ["Genesis"] },
  { type: "para", marker: "mt1", content: ["The Book of Genesis"] },
  { type: "para", marker: "ip", content: ["An introduction to the book."] },
];

const CHAPTERS: { name: string; front: MarkerContent[] }[] = [
  { name: "a chapter with no front matter", front: [] },
  { name: "chapter 1 with its front matter", front: FRONT_MATTER },
];

async function settle(): Promise<void> {
  await act(async () => {
    for (let i = 0; i < 3; i += 1) await new Promise((resolve) => setTimeout(resolve, 0));
  });
}

async function selectAll({ lexical }: MountedEditor): Promise<void> {
  await act(async () => {
    lexical.dispatchCommand(SELECT_ALL_COMMAND, new KeyboardEvent("keydown"));
  });
  await settle();
}

function content({ ref }: MountedEditor): MarkerContent[] {
  return ref.current?.getUsj()?.content ?? [];
}

/**
 * Presses `key` as a delete: twice under `"guarded"` structure, whose first press over a selection
 * that holds a verse or chapter marker only arms the delete.
 */
async function deleteWith(
  mounted: MountedEditor,
  mode: StructureProtectionMode,
  key: string,
  modifiers: KeyboardEventInit = {},
): Promise<void> {
  const presses = mode === "guarded" ? 2 : 1;
  for (let i = 0; i < presses; i += 1) {
    await act(async () => {
      const root = mounted.lexical.getRootElement();
      root?.dispatchEvent(
        new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true, ...modifiers }),
      );
    });
    await settle();
  }
}

/** A paragraph with the first Scripture paragraph's marker and no content. */
const EMPTY_FIRST = { type: "para", marker: "p" };

const UNLOCKED: StructureProtectionMode[] = ["off", "guarded"];

describe.each(CHAPTERS)("an edit over Select All in $name", ({ front }) => {
  const usj: Usj = {
    type: "USJ",
    version: "3.1",
    content: [BOOK, ...front, CHAPTER, FIRST, SECOND],
  };
  /** The index of the document's chapter line. */
  const chapterAt = 1 + front.length;

  describe.each(["paragraph-structure", "formatted"])("in the %s view", (viewName) => {
    describe.each(UNLOCKED)("structure %s", (mode) => {
      let mounted: MountedEditor;
      beforeEach(async () => {
        mounted = await mountInView(usj, editorView(viewName), { structureProtectionMode: mode });
      });
      afterEach(() => mounted.unmount());

      it.each(["Backspace", "Delete"])(
        "%s keeps the book and chapter lines and empties the rest",
        async (key) => {
          await selectAll(mounted);

          await deleteWith(mounted, mode, key);

          expect(content(mounted)).toEqual([BOOK, CHAPTER, EMPTY_FIRST]);
        },
      );

      describe("over a range holding the chapter line alone", () => {
        beforeEach(async () => {
          await act(async () =>
            mounted.lexical.update(
              () => {
                const selection = $createRangeSelection();
                selection.anchor.set($getRoot().getKey(), chapterAt, "element");
                selection.focus.set($getRoot().getKey(), chapterAt + 1, "element");
                $setSelection(selection);
              },
              { discrete: true },
            ),
          );
        });

        it.each(["Backspace", "Delete"])("%s keeps it", async (key) => {
          // One press in either mode: the range holds no verse, so guarded structure arms nothing.
          await deleteWith(mounted, "off", key);

          expect(content(mounted)).toEqual(usj.content);
        });

        it("typing keeps it and goes in at the start of the line after it", async () => {
          await press(mounted, "x", "x");
          await settle();

          expect(content(mounted)).toEqual([
            BOOK,
            ...front,
            CHAPTER,
            { ...FIRST, content: [FIRST.content[0], "xfirst ", ...FIRST.content.slice(2)] },
            SECOND,
          ]);
        });
      });

      it("a word delete keeps the book and chapter lines and empties the rest", async () => {
        await selectAll(mounted);

        await deleteWith(mounted, mode, "Backspace", { ctrlKey: true });

        expect(content(mounted)).toEqual([BOOK, CHAPTER, EMPTY_FIRST]);
      });

      it("typing replaces everything after the chapter line, not the book line", async () => {
        await selectAll(mounted);

        await press(mounted, "x", "x");
        await settle();

        expect(content(mounted)).toEqual([
          BOOK,
          CHAPTER,
          { type: "para", marker: "p", content: ["x"] },
        ]);
      });

      it("Enter keeps the book and chapter lines and leaves two empty paragraphs", async () => {
        await selectAll(mounted);

        await press(mounted, "Enter");
        await settle();

        expect(content(mounted)).toEqual([BOOK, CHAPTER, EMPTY_FIRST, EMPTY_FIRST]);
      });

      it.each([
        ["A line delete", DELETE_LINE_COMMAND, true],
        ["A line break", INSERT_LINE_BREAK_COMMAND, false],
      ] as const)(
        "%s keeps the book and chapter lines and empties the rest",
        async (_name, command, payload) => {
          await selectAll(mounted);

          await act(async () => {
            mounted.lexical.update(() => {
              mounted.lexical.dispatchCommand(command, payload);
            });
          });
          await settle();

          expect(content(mounted)).toEqual([BOOK, CHAPTER, EMPTY_FIRST]);
        },
      );

      it("a drag-move's removal keeps the book and chapter lines", async () => {
        await selectAll(mounted);

        await act(async () => {
          mounted.lexical.update(() => {
            mounted.lexical.dispatchCommand(REMOVE_TEXT_COMMAND, null);
          });
        });
        await settle();

        expect(content(mounted)).toEqual([BOOK, CHAPTER, EMPTY_FIRST]);
      });

      it("typing over a selection from inside the book line keeps that line whole", async () => {
        await act(async () =>
          mounted.lexical.update(
            () => {
              const title = $getRoot()
                .getAllTextNodes()
                .find((node) => node.getTextContent().includes("Genesis title"));
              const first = $getRoot()
                .getAllTextNodes()
                .find((node) => node.getTextContent().startsWith("first"));
              if (!title || !first) throw new Error("fixture text not found");
              const selection = $createRangeSelection();
              selection.anchor.set(title.getKey(), 3, "text");
              selection.focus.set(first.getKey(), "first ".length, "text");
              $setSelection(selection);
            },
            { discrete: true },
          ),
        );

        await press(mounted, "x", "x");
        await settle();

        expect(content(mounted)).toEqual([
          BOOK,
          CHAPTER,
          { ...FIRST, content: ["x", ...FIRST.content.slice(2)] },
          SECOND,
        ]);
      });
    });

    describe.each(UNLOCKED)("structure %s, a selection from a line's start", (mode) => {
      let mounted: MountedEditor;
      beforeEach(async () => {
        mounted = await mountInView(usj, editorView(viewName), { structureProtectionMode: mode });
      });
      afterEach(() => mounted.unmount());

      it("typing takes the line before the chapter line whole, gutter marker and all", async () => {
        // The last line before the chapter line: the book line itself when there is no front
        // matter, which is never removed.
        const lastBefore = front.length > 0 ? chapterAt - 1 : 0;
        await act(async () =>
          mounted.lexical.update(
            () => {
              const line = $getRoot().getChildAtIndex(lastBefore);
              const first = $getRoot()
                .getAllTextNodes()
                .find((node) => node.getTextContent().startsWith("first"));
              if (!$isParaLikeNode(line) || !first) throw new Error("fixture not found");
              // Where a click at the line's start leaves the caret: past its gutter marker glyph.
              $placeCaretAtParaContentStart(line);
              const selection = $getSelection();
              if (!$isRangeSelection(selection)) throw new Error("no caret");
              selection.focus.set(first.getKey(), "first ".length, "text");
            },
            { discrete: true },
          ),
        );

        await press(mounted, "x", "x");
        await settle();

        expect(content(mounted)).toEqual([
          BOOK,
          ...front.slice(0, -1),
          CHAPTER,
          { ...FIRST, content: ["x", ...FIRST.content.slice(2)] },
          SECOND,
        ]);
      });
    });

    describe("structure protected", () => {
      let mounted: MountedEditor;
      beforeEach(async () => {
        mounted = await mountInView(usj, editorView(viewName), {
          structureProtectionMode: "protected",
        });
      });
      afterEach(() => mounted.unmount());

      it("refuses Backspace", async () => {
        await selectAll(mounted);

        await deleteWith(mounted, "protected", "Backspace");

        expect(content(mounted)).toEqual(usj.content);
      });

      it("refuses typing", async () => {
        await selectAll(mounted);

        await press(mounted, "x", "x");
        await settle();

        expect(content(mounted)).toEqual(usj.content);
      });
    });
  });
});
