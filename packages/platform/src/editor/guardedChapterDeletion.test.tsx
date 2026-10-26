/**
 * Backspace or Delete beside a chapter marker, in the views that show the chapter as an atomic
 * glyph (formatted and paragraph-structure).
 *
 * Under `"guarded"` structure protection (Simple mode) a structural deletion is a deliberate
 * two-press gesture: the first press arms the target and the second deletes it. A chapter is a
 * structural target like a paragraph or a verse, so a press beside it arms the CHAPTER — never
 * deletes it outright, and never arms the neighboring paragraph instead (a paragraph cannot merge
 * across a chapter, so that arm would lead nowhere). `"protected"` refuses both presses, and with
 * the guard `"off"` (Power mode) the keys behave natively.
 */
import {
  EditingViewName,
  editorView,
  mountInView,
  MountedEditor,
} from "./editorViews.test-helpers";
import { installSelectionModify, press } from "./typingFidelityOracle.test-helpers";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $getSelection,
  $isElementNode,
  $isNodeSelection,
  $isRangeSelection,
  $setSelection,
  ElementNode,
  SELECTION_CHANGE_COMMAND,
} from "lexical";
import { $isSomeChapterNode } from "shared";
import { StructureProtectionMode, VERSE_SELECTED_CLASS_NAME } from "shared-react";
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

function leadingGlyphCount(block: ElementNode): number {
  const children = block.getChildren();
  let count = 0;
  while (count < children.length && isLeadingGlyph(children[count].getType())) count += 1;
  return count;
}

/** Whether chapter `number` is node-selected and shown as armed. */
function isChapterArmed(m: MountedEditor, number: string): boolean {
  const key = m.lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isNodeSelection(selection)) return undefined;
    const [node] = selection.getNodes();
    return $isSomeChapterNode(node) && node.getNumber() === number ? node.getKey() : undefined;
  });
  if (!key) return false;
  const root = m.lexical.getRootElement();
  const element = m.lexical.getElementByKey(key);
  return (
    !!root?.classList.contains("verse-delete-armed") &&
    !!element?.classList.contains(VERSE_SELECTED_CLASS_NAME)
  );
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

describe("guarded: a chapter beside the caret is armed, then deleted", () => {
  for (const view of GUARDED_VIEWS) {
    describe(`in ${view} view`, () => {
      for (const { key, number, name } of GESTURES) {
        it(`${name}: the first press arms the chapter, the second deletes it`, async () => {
          const m = await mount(view, "guarded");
          await placeCaretBesideChapter(m, number, key);

          expect(await press(m, key)).toEqual([]);
          expect(m.ref.current?.getUsj()).toEqual(DOC);
          expect(isChapterArmed(m, number)).toBe(true);
          // The host's hint names a verse marker or a selection; a chapter publishes none.
          expect(m.lexical.getRootElement()?.hasAttribute("data-verse-delete-kind")).toBe(false);

          expect(await press(m, key)).toEqual([]);
          expect(m.ref.current?.getUsj()).toEqual(withoutChapter(number));
          expect(m.lexical.getRootElement()?.classList.contains("verse-delete-armed")).toBe(false);
          // The caret is left in the text, so the next keystroke has somewhere to go.
          const isCollapsedCaret = m.lexical.getEditorState().read(() => {
            const selection = $getSelection();
            return $isRangeSelection(selection) && selection.isCollapsed();
          });
          expect(isCollapsedCaret).toBe(true);
          m.unmount();
        });
      }

      it("the opposite key cancels an armed chapter without deleting it", async () => {
        const m = await mount(view, "guarded");
        await placeCaretBesideChapter(m, "2", "Backspace");

        await press(m, "Backspace");
        expect(isChapterArmed(m, "2")).toBe(true);
        await press(m, "Delete");

        expect(m.ref.current?.getUsj()).toEqual(DOC);
        expect(m.lexical.getRootElement()?.classList.contains("verse-delete-armed")).toBe(false);
        m.unmount();
      });
    });
  }
});

describe("protected: a chapter beside the caret is never deleted", () => {
  for (const view of GUARDED_VIEWS) {
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
  for (const view of GUARDED_VIEWS) {
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
