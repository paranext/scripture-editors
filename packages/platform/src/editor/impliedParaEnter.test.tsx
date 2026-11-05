/**
 * A line with no paragraph marker (an implied paragraph): the blank line a chapter line nothing
 * follows shows, and text USFM holds with no paragraph marker. Enter splits it as it splits any
 * paragraph, and the line after the break is a `\p` paragraph: lines with no marker save run
 * together, so a second one would lose the break.
 */
import { MountedEditor, editorView, mountInView } from "./editorViews.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $isElementNode,
  $isTextNode,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  LexicalNode,
  REDO_COMMAND,
  UNDO_COMMAND,
} from "lexical";
import {
  $isImpliedParaNode,
  $isParaNode,
  $isSomeChapterNode,
  $isSynthesizedMarkerNode,
} from "shared";
import { StructureProtectionMode } from "shared-react";

const BOOK: MarkerObject = { type: "book", marker: "id", code: "GEN", content: [] };
const CHAPTER_ONE: MarkerContent[] = [
  { type: "chapter", marker: "c", number: "1" },
  { type: "para", marker: "p", content: [{ type: "verse", marker: "v", number: "1" }, "verse"] },
];

/** A `\p` paragraph holding `text`, or nothing. */
const p = (text?: string): MarkerContent => ({
  type: "para",
  marker: "p",
  ...(text === undefined ? {} : { content: [text] }),
});

/** Chapter 2 holding `content`, and chapter 3 right after it. */
function chapterTwoHolding(content: MarkerContent[]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      BOOK,
      ...CHAPTER_ONE,
      { type: "chapter", marker: "c", number: "2" },
      ...content,
      { type: "chapter", marker: "c", number: "3" },
    ],
  };
}

/** What the editor saves between chapter 2's line and chapter 3's. */
function savedInChapterTwo({ ref }: MountedEditor): MarkerContent[] {
  const content = ref.current?.getUsj()?.content ?? [];
  const at = (number: string) =>
    content.findIndex(
      (item) => typeof item !== "string" && item.type === "chapter" && item.number === number,
    );
  return content.slice(at("2") + 1, at("3"));
}

/**
 * Puts the caret `offset` characters into the text of chapter 2's `nth` line with no marker, or at
 * its end when `offset` is left out.
 */
async function caretInUnmarkedLine(
  { lexical }: MountedEditor,
  offset?: number,
  nth = 0,
): Promise<void> {
  await act(async () =>
    lexical.update(
      () => {
        const children = $getRoot().getChildren();
        const chapterAt = children.findIndex(
          (node) => $isSomeChapterNode(node) && node.getNumber() === "2",
        );
        const line = children
          .slice(chapterAt + 1)
          .filter((node: LexicalNode) => $isImpliedParaNode(node))
          .at(nth);
        if (!$isImpliedParaNode(line)) throw new Error("no line with no marker in chapter 2");
        const text = line.getChildren().find($isTextNode);
        if (offset === undefined || !text) line.selectEnd();
        else text.select(offset, offset);
      },
      { discrete: true },
    ),
  );
}

/** Presses Enter as the browser reports it: a `keydown` on the editor, which every keystroke guard
 * sees before Lexical turns it into a split. */
async function pressEnter({ lexical }: MountedEditor, shiftKey = false): Promise<void> {
  const root = lexical.getRootElement();
  if (!root) throw new Error("no editor root");
  await act(async () => {
    root.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Enter", shiftKey, bubbles: true, cancelable: true }),
    );
  });
}

async function type({ lexical }: MountedEditor, text: string): Promise<void> {
  await act(async () => {
    lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, text);
  });
}

describe.each(["standard", "paragraph-structure", "formatted"])("Enter in %s view", (viewName) => {
  it("with structure protected, is refused, as in any paragraph", async () => {
    const mounted = await mountInView(chapterTwoHolding(["ab"]), editorView(viewName), {
      structureProtectionMode: "protected",
    });
    try {
      await caretInUnmarkedLine(mounted, 1);

      await pressEnter(mounted);
      await type(mounted, "x");

      expect(savedInChapterTwo(mounted)).toEqual(["axb"]);
    } finally {
      mounted.unmount();
    }
  });

  describe.each<StructureProtectionMode>(["off", "guarded"])("with structure %s", (mode) => {
    async function mount(content: MarkerContent[]): Promise<MountedEditor> {
      return mountInView(chapterTwoHolding(content), editorView(viewName), {
        structureProtectionMode: mode,
      });
    }

    let mounted: MountedEditor | undefined;
    afterEach(() => mounted?.unmount());

    // Standard view shows no blank line after a chapter line nothing follows.
    it.skipIf(viewName === "standard")(
      "in the blank line after a chapter line, keeps the line typed before it and makes a `\\p` of the one after",
      async () => {
        mounted = await mount([]);
        await caretInUnmarkedLine(mounted);

        await type(mounted, "one");
        await pressEnter(mounted);
        await type(mounted, "two");

        expect(savedInChapterTwo(mounted)).toEqual(["one", p("two")]);
      },
    );

    it("in the middle of text with no marker, makes a `\\p` of the text after the caret", async () => {
      mounted = await mount(["ab"]);
      await caretInUnmarkedLine(mounted, 1);

      await pressEnter(mounted);

      expect(savedInChapterTwo(mounted)).toEqual(["a", p("b")]);
      // Its marker shows as any `\p`'s does: as text in Standard view, in the gutter in
      // paragraph-structure, not at all in formatted.
      const showsMarker = mounted.lexical.getEditorState().read(() => {
        const line = $getRoot()
          .getChildren()
          .find((node) => $isParaNode(node) && node.getTextContent().endsWith("b"));
        return $isSynthesizedMarkerNode($isElementNode(line) ? line.getFirstChild() : undefined);
      });
      expect(showsMarker).toBe(viewName !== "formatted");
    });

    it("at the end of text with no marker, makes an empty `\\p` the caret goes into", async () => {
      mounted = await mount(["ab"]);
      await caretInUnmarkedLine(mounted);

      await pressEnter(mounted);
      expect(savedInChapterTwo(mounted)).toEqual(["ab", p()]);
      await type(mounted, "c");

      expect(savedInChapterTwo(mounted)).toEqual(["ab", p("c")]);
    });

    it("at the start of text with no marker, makes a `\\p` of all of it, the caret at its start", async () => {
      mounted = await mount(["ab"]);
      await caretInUnmarkedLine(mounted, 0);

      await pressEnter(mounted);
      await type(mounted, "x");

      expect(savedInChapterTwo(mounted)).toEqual([p("xab")]);
    });

    it.skipIf(viewName === "standard")(
      "in an empty blank line, makes an empty `\\p` the caret goes into",
      async () => {
        mounted = await mount([]);
        await caretInUnmarkedLine(mounted);

        await pressEnter(mounted);
        await type(mounted, "x");

        expect(savedInChapterTwo(mounted)).toEqual([p("x")]);
      },
    );

    it("in text with no marker after a paragraph, makes a `\\p` of the text after the caret", async () => {
      mounted = await mount([p("before"), "ab"]);
      await caretInUnmarkedLine(mounted, 1);

      await pressEnter(mounted);

      expect(savedInChapterTwo(mounted)).toEqual([p("before"), "a", p("b")]);
    });

    // A line break is not a split: Lexical puts a line break node in the line, which no paragraph,
    // marked or not, saves.
    it("with Shift, makes no paragraph", async () => {
      mounted = await mount(["ab"]);
      await caretInUnmarkedLine(mounted, 1);

      await pressEnter(mounted, true);
      await type(mounted, "x");

      expect(savedInChapterTwo(mounted)).toEqual(["axb"]);
    });

    it("from the Enter menu, makes a paragraph of the marker picked from the text after the caret", async () => {
      mounted = await mount(["ab"]);
      await caretInUnmarkedLine(mounted, 1);

      await act(async () => mounted?.ref.current?.splitParagraphWithMarker("q1"));

      expect(savedInChapterTwo(mounted)).toEqual([
        "a",
        { type: "para", marker: "q1", content: ["b"] },
      ]);
    });

    it("is undone and redone whole", async () => {
      mounted = await mount(["ab"]);
      await caretInUnmarkedLine(mounted, 1);
      await pressEnter(mounted);

      await act(async () => {
        mounted?.lexical.dispatchCommand(UNDO_COMMAND, undefined);
      });
      expect(savedInChapterTwo(mounted)).toEqual(["ab"]);

      await act(async () => {
        mounted?.lexical.dispatchCommand(REDO_COMMAND, undefined);
      });
      expect(savedInChapterTwo(mounted)).toEqual(["a", p("b")]);
    });
  });
});
