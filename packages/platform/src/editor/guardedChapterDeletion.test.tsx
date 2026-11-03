/**
 * Backspace or Delete beside a chapter marker, in the views that show the chapter as an atomic
 * glyph (formatted and paragraph-structure).
 *
 * The caret cannot sit on that glyph, so no delete from the keyboard removes it: `"guarded"`
 * structure protection (Simple mode) and `"protected"` both refuse the key, leaving the document as
 * it was. With the guard `"off"` (Power mode) the keys behave natively. An empty paragraph beside a
 * chapter is a separate matter: it may go, and the chapter stays.
 */
import {
  EditingViewName,
  editorView,
  enabledViews,
  mountInView,
  MountedEditor,
} from "./editorViews.test-helpers";
import { installSelectionModify, press } from "./typingFidelityOracle.test-helpers";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $isElementNode,
  $isTextNode,
  $setSelection,
  DELETE_CHARACTER_COMMAND,
  DELETE_LINE_COMMAND,
  DELETE_WORD_COMMAND,
  ElementNode,
  LexicalCommand,
  SELECTION_CHANGE_COMMAND,
} from "lexical";
import { StructureProtectionMode } from "shared-react";
import { describe, expect, it } from "vitest";

installSelectionModify();

const BOOK: MarkerContent = { type: "book", marker: "id", code: "GEN", content: ["Genesis"] };

function usjOf(content: MarkerContent[]): Usj {
  return { type: "USJ", version: "3.1", content: [BOOK, ...content] };
}

const DOC = usjOf([
  { type: "chapter", marker: "c", number: "1" },
  { type: "para", marker: "p", content: [{ type: "verse", marker: "v", number: "1" }, "one"] },
  { type: "chapter", marker: "c", number: "2" },
  { type: "para", marker: "p", content: [{ type: "verse", marker: "v", number: "1" }, "two"] },
]);

/** `DOC` without chapter `number`'s marker, the paragraphs around it left as they were. */
function withoutChapter(number: string): Usj {
  return {
    ...DOC,
    content: DOC.content.filter(
      (item) => typeof item === "string" || item.type !== "chapter" || item.number !== number,
    ),
  };
}

/** Root child index of chapter `number`'s marker in `DOC`. */
const CHAPTER_INDEX: { readonly [number: string]: number } = { "1": 1, "2": 3 };

type Key = "Backspace" | "Delete";

/** A glyph that leads a block's content and is not a caret position in it. */
function isLeadingGlyph(type: string): boolean {
  return (
    type === "marker" ||
    type === "immutable-typed-text" ||
    type === "gutter-marker" ||
    type === "book-prefix"
  );
}

/**
 * Collapses the caret beside chapter `number`: at the content start of the block after it for
 * Backspace (before that block's verse marker), or at the very end of the block before it for
 * Delete.
 */
async function placeCaretBesideChapter(m: MountedEditor, number: string, key: Key) {
  await act(async () => {
    m.lexical.update(() => {
      const index = CHAPTER_INDEX[number] + (key === "Backspace" ? 1 : -1);
      const block = $getRoot().getChildAtIndex(index);
      if (!$isElementNode(block)) throw new Error(`no block at ${index}`);
      const offset = key === "Backspace" ? leadingGlyphCount(block) : block.getChildrenSize();
      const selection = $createRangeSelection();
      selection.anchor.set(block.getKey(), offset, "element");
      selection.focus.set(block.getKey(), offset, "element");
      $setSelection(selection);
      m.lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    });
    await Promise.resolve();
  });
}

/** Collapses the caret in the root's child `index`: at `offset`, or by default at its end. */
async function placeCaretInBlock(m: MountedEditor, index: number, offset?: number) {
  await act(async () => {
    m.lexical.update(() => {
      const block = $getRoot().getChildAtIndex(index);
      if (!$isElementNode(block)) throw new Error(`no block at ${index}`);
      block.select(offset ?? block.getChildrenSize(), offset ?? block.getChildrenSize());
      m.lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    });
    await Promise.resolve();
  });
}

/** Collapses the caret at `offset` in the text of the root's child `index`, as a click puts it. */
async function placeCaretInText(m: MountedEditor, index: number, offset: number) {
  await act(async () => {
    m.lexical.update(() => {
      const block = $getRoot().getChildAtIndex(index);
      if (!$isElementNode(block)) throw new Error(`no block at ${index}`);
      const text = block.getLastChild();
      if (!$isTextNode(text)) throw new Error(`block ${index} does not end in text`);
      text.select(offset, offset);
      m.lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    });
    await Promise.resolve();
  });
}

function leadingGlyphCount(block: ElementNode): number {
  const children = block.getChildren();
  let count = 0;
  while (count < children.length && isLeadingGlyph(children[count].getType())) count += 1;
  return count;
}

async function mount(view: EditingViewName, mode: StructureProtectionMode | undefined) {
  return mountInView(DOC, editorView(view), { structureProtectionMode: mode });
}

const GESTURES: { key: Key; number: string; name: string }[] = [
  { key: "Backspace", number: "1", name: "Backspace at the start of the paragraph after \\c 1" },
  { key: "Backspace", number: "2", name: "Backspace at the start of the paragraph after \\c 2" },
  { key: "Delete", number: "1", name: "Delete at the end of the \\id line before \\c 1" },
  { key: "Delete", number: "2", name: "Delete at the end of the paragraph before \\c 2" },
];

const GUARDED_VIEWS = ["paragraph-structure", "formatted"] as const;

/** Presses `key` on the editor root, and says whether the editor claimed the keydown. */
function pressClaimed(m: MountedEditor, key: Key): Promise<boolean> {
  return act(async () => {
    const keydown = new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true });
    m.lexical.getRootElement()?.dispatchEvent(keydown);
    await Promise.resolve();
    return keydown.defaultPrevented;
  });
}

const COMMAND_DELETES: [string, LexicalCommand<boolean>][] = [
  ["a character delete", DELETE_CHARACTER_COMMAND],
  ["a word delete", DELETE_WORD_COMMAND],
  ["a line delete", DELETE_LINE_COMMAND],
];

describe("guarded: a chapter beside the caret is never deleted", () => {
  for (const view of enabledViews(GUARDED_VIEWS)) {
    describe(`in ${view} view`, () => {
      for (const { key, number, name } of GESTURES) {
        it(`${name}: both presses are refused`, async () => {
          const m = await mount(view, "guarded");
          await placeCaretBesideChapter(m, number, key);

          expect(await pressClaimed(m, key)).toBe(true);
          expect(m.ref.current?.getUsj()).toEqual(DOC);
          // Nothing is armed, so the host shows no "press again" hint.
          const root = m.lexical.getRootElement();
          expect(root?.classList.contains("verse-delete-armed")).toBe(false);
          expect(root?.hasAttribute("data-verse-delete-kind")).toBe(false);

          expect(await pressClaimed(m, key)).toBe(true);
          expect(m.ref.current?.getUsj()).toEqual(DOC);
          m.unmount();
        });

        it.each(COMMAND_DELETES)(
          `${name}: %s with no keydown, as a mapped shortcut delivers one, is refused`,
          async (_, command) => {
            const m = await mount(view, "guarded");
            await placeCaretBesideChapter(m, number, key);

            for (let count = 0; count < 2; count++)
              await act(async () => {
                m.lexical.dispatchCommand(command, key === "Backspace");
              });

            expect(m.ref.current?.getUsj()).toEqual(DOC);
            m.unmount();
          },
        );
      }

      describe("the text beside a chapter stays editable", () => {
        const usj = usjOf([
          { type: "chapter", marker: "c", number: "1" },
          { type: "para", marker: "p", content: ["one"] },
          { type: "chapter", marker: "c", number: "2" },
          { type: "para", marker: "p", content: ["two"] },
        ]);
        /** `usj` with the paragraph before \\c 2 reading `first`, and the one after it `second`. */
        function withTexts(first: string, second: string): Usj {
          return usjOf([
            { type: "chapter", marker: "c", number: "1" },
            { type: "para", marker: "p", content: [first] },
            { type: "chapter", marker: "c", number: "2" },
            { type: "para", marker: "p", content: [second] },
          ]);
        }
        const BEFORE_CHAPTER = 2;
        const AFTER_CHAPTER = 4;

        it.each<[string, number, number, Key, Usj]>([
          [
            "Backspace at the end of a chapter",
            BEFORE_CHAPTER,
            3,
            "Backspace",
            withTexts("on", "two"),
          ],
          [
            "Delete before a chapter's last letter",
            BEFORE_CHAPTER,
            2,
            "Delete",
            withTexts("on", "two"),
          ],
          ["Delete at the start of a chapter", AFTER_CHAPTER, 0, "Delete", withTexts("one", "wo")],
          [
            "Backspace after a chapter's first letter",
            AFTER_CHAPTER,
            1,
            "Backspace",
            withTexts("one", "wo"),
          ],
        ])("%s deletes the letter", async (_, block, offset, key, expected) => {
          const m = await mountInView(usj, editorView(view), {
            structureProtectionMode: "guarded",
          });
          await placeCaretInText(m, block, offset);

          await press(m, key);

          expect(m.ref.current?.getUsj()).toEqual(expected);
          m.unmount();
        });

        it.each<[string, number, number, Key]>([
          ["Delete at the end of a chapter", BEFORE_CHAPTER, 3, "Delete"],
          ["Backspace at the start of a chapter", AFTER_CHAPTER, 0, "Backspace"],
        ])("%s, with the caret in the text, is refused", async (_, block, offset, key) => {
          const m = await mountInView(usj, editorView(view), {
            structureProtectionMode: "guarded",
          });
          await placeCaretInText(m, block, offset);

          expect(await pressClaimed(m, key)).toBe(true);
          expect(m.ref.current?.getUsj()).toEqual(usj);
          m.unmount();
        });
      });

      it("Delete in an empty paragraph right before \\c 2 is refused", async () => {
        const usj = usjOf([
          { type: "chapter", marker: "c", number: "1" },
          { type: "para", marker: "p", content: ["one"] },
          { type: "para", marker: "s" },
          { type: "chapter", marker: "c", number: "2" },
          { type: "para", marker: "p", content: ["two"] },
        ]);
        const m = await mountInView(usj, editorView(view), {
          structureProtectionMode: "guarded",
        });
        // Both places a caret can be in that paragraph: past its marker, and in front of it.
        for (const offset of [undefined, 0]) {
          await placeCaretInBlock(m, 3, offset);

          await press(m, "Delete");
          await press(m, "Delete");

          expect(m.ref.current?.getUsj()).toEqual(usj);
        }
        m.unmount();
      });

      describe("an empty paragraph with a chapter on both sides", () => {
        const usj = usjOf([
          { type: "chapter", marker: "c", number: "1" },
          { type: "para", marker: "p" },
          { type: "chapter", marker: "c", number: "2" },
          { type: "para", marker: "p", content: ["two"] },
        ]);
        const withoutPara = {
          ...usj,
          content: usj.content.filter((item) => typeof item === "string" || item.type !== "para"),
        };
        withoutPara.content.push({ type: "para", marker: "p", content: ["two"] });

        it("Delete blanks it; another Delete in the blank line leaves the document alone", async () => {
          const m = await mountInView(usj, editorView(view), {
            structureProtectionMode: "guarded",
          });
          await placeCaretInBlock(m, 2);

          // The first press arms the paragraph; the second blanks it, and the blank saves as nothing.
          await press(m, "Delete");
          expect(m.ref.current?.getUsj()).toEqual(usj);
          await press(m, "Delete");
          expect(m.ref.current?.getUsj()).toEqual(withoutPara);

          expect(await pressClaimed(m, "Delete")).toBe(true);
          expect(await pressClaimed(m, "Delete")).toBe(true);
          expect(m.ref.current?.getUsj()).toEqual(withoutPara);
          m.unmount();
        });
      });
    });
  }
});

describe("protected: a chapter beside the caret is never deleted", () => {
  for (const view of enabledViews(GUARDED_VIEWS)) {
    describe(`in ${view} view`, () => {
      for (const { key, number, name } of GESTURES) {
        it(`${name}: both presses are refused`, async () => {
          const m = await mount(view, "protected");
          await placeCaretBesideChapter(m, number, key);

          await press(m, key);
          await press(m, key);

          expect(m.ref.current?.getUsj()).toEqual(DOC);
          m.unmount();
        });
      }
    });
  }
});

/**
 * Power mode (guard off) keeps native editing: formatted view deletes the chapter glyph on the
 * first press either way; paragraph-structure view's own Backspace handling at a paragraph's
 * content start leaves the document alone, and its Delete is native.
 */
describe("off: the keys keep their native behavior", () => {
  const FIRST_PRESS_DELETES: {
    readonly [View in (typeof GUARDED_VIEWS)[number]]: { readonly [K in Key]: boolean };
  } = {
    formatted: { Backspace: true, Delete: true },
    "paragraph-structure": { Backspace: false, Delete: true },
  };
  for (const view of enabledViews(GUARDED_VIEWS)) {
    describe(`in ${view} view`, () => {
      for (const { key, number, name } of GESTURES) {
        const deletes = FIRST_PRESS_DELETES[view][key];
        it(`${name}: the first press ${deletes ? "deletes the chapter" : "does nothing"}`, async () => {
          const m = await mount(view, undefined);
          await placeCaretBesideChapter(m, number, key);

          await press(m, key);

          expect(m.ref.current?.getUsj()).toEqual(deletes ? withoutChapter(number) : DOC);
          expect(m.lexical.getRootElement()?.classList.contains("verse-delete-armed")).toBe(false);
          m.unmount();
        });
      }
    });
  }
});
