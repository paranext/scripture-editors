/**
 * Editing at an editable chapter line, through the whole Standard-view `Editor` and read back
 * through `EditorRef.getUsj()` — the document a host saves.
 *
 * A chapter line serializes as its number alone, so anything a gesture leaves INSIDE it is on
 * screen but never saved. Deleting from the chapter line into the text used to merge the rest of
 * the paragraph into the chapter line that way — kept on screen, silently dropped on save — for
 * every gesture that deletes a selection: Delete, Backspace, typing over it, cut, Enter, and paste.
 * Such a deletion now deletes the chapter marker, as it does in the USFM text, and leaves the text
 * after the selection in its own paragraph. The other half pins what must not change: a chapter
 * line cannot be split, so Enter and Shift+Enter there do nothing, and a paste goes in as one line.
 */
import { EditorRef } from "../editor.model";
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { requireDefined } from "./markerEdit.test-helpers";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { SerializedVerseRef } from "@sillsdev/scripture";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $isElementNode,
  $setSelection,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  CUT_COMMAND,
  INSERT_LINE_BREAK_COMMAND,
  KEY_DOWN_COMMAND,
  KEY_ENTER_COMMAND,
  LexicalEditor,
  LexicalNode,
  PASTE_COMMAND,
  TextNode,
} from "lexical";
import {
  $chapterGlyphTextNode,
  $isChapterNode,
  ChapterNode,
  getVisibleOpenMarkerText,
  NBSP,
} from "shared";
import { describe, expect, it } from "vitest";

const CHAPTER_2: MarkerContent = { type: "chapter", marker: "c", number: "2" };
const VERSE_1_PARA: MarkerContent = {
  type: "para",
  marker: "p",
  content: [{ type: "verse", marker: "v", number: "1" }, "one two"],
};
const POETRY_PARA: MarkerContent = { type: "para", marker: "q1", content: ["poem"] };

const GEN_2_1: SerializedVerseRef = { book: "GEN", chapterNum: 2, verseNum: 1 };

const chapterDoc: Usj = {
  type: "USJ",
  version: "3.1",
  content: [CHAPTER_2, VERSE_1_PARA, POETRY_PARA],
};

function $chapter(): ChapterNode {
  return requireDefined($getRoot().getChildren().find($isChapterNode), "chapter not found");
}

function $glyph(): TextNode {
  return requireDefined($chapterGlyphTextNode($chapter()), "chapter glyph not found");
}

/** The last leaf of `node` — the end of a paragraph's text. */
function $lastLeaf(node: LexicalNode): LexicalNode {
  const last = $isElementNode(node) ? node.getLastChild() : null;
  return last ? $lastLeaf(last) : node;
}

/** The verse-1 paragraph's text node, `"one two"`. */
function $verseText(): TextNode {
  const leaf = $lastLeaf(requireDefined($chapter().getNextSibling() ?? undefined, "no paragraph"));
  if (!(leaf instanceof TextNode)) throw new Error("expected the paragraph to end in text");
  return leaf;
}

const keyDown = (key: string, init: KeyboardEventInit = {}) =>
  new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true, ...init });

/** A duck-typed paste event carrying only text/plain (jsdom has no ClipboardEvent). */
function plainTextPaste(text: string): ClipboardEvent {
  return {
    clipboardData: {
      types: ["text/plain"],
      files: [],
      getData: (type: string) => (type === "text/plain" ? text : ""),
    },
    preventDefault: () => undefined,
  } as unknown as ClipboardEvent;
}

/** A duck-typed cut event whose clipboard accepts writes (jsdom has no ClipboardEvent). */
function cutEvent(): ClipboardEvent {
  return {
    clipboardData: { setData: () => undefined, getData: () => "", types: [], files: [] },
    preventDefault: () => undefined,
  } as unknown as ClipboardEvent;
}

/**
 * Selects from the start of the chapter line to just after `one` in verse 1 — the selection a
 * drag or a shift-extend over the top of the chapter produces — then runs `gesture`.
 */
async function overChapterLineIntoText(
  editor: LexicalEditor,
  gesture: () => void,
  { backward = false } = {},
): Promise<void> {
  await act(async () =>
    editor.update(() => {
      const selection = $createRangeSelection();
      const start = { key: $glyph().getKey(), offset: 0 };
      const end = { key: $verseText().getKey(), offset: 3 };
      const [anchor, focus] = backward ? [end, start] : [start, end];
      selection.anchor.set(anchor.key, anchor.offset, "text");
      selection.focus.set(focus.key, focus.offset, "text");
      $setSelection(selection);
      gesture();
    }),
  );
}

/** Puts a collapsed caret in the chapter line, `fromEnd` characters before its end, then runs `gesture`. */
async function onChapterLine(
  editor: LexicalEditor,
  gesture: () => void,
  fromEnd = 0,
): Promise<void> {
  await act(async () =>
    editor.update(() => {
      const at = $glyph().getTextContentSize() - fromEnd;
      $glyph().select(at, at);
      gesture();
    }),
  );
}

describe("deleting from the chapter line into the text", () => {
  // What every gesture below must save: the chapter marker gone with its bytes, and the rest of
  // verse 1 kept, in its own paragraph. The marker itself is a writer concern — Paratext refuses a
  // later chapter without one, and the host puts it back on save.
  const REST_OF_VERSE_1: MarkerContent = { type: "para", marker: "p", content: [" two"] };

  it.each([
    ["Delete", () => keyDown("Delete")],
    ["Backspace", () => keyDown("Backspace")],
  ])("%s keeps the rest of the paragraph", async (_key, event) => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await overChapterLineIntoText(lexical, () =>
      lexical.dispatchCommand(KEY_DOWN_COMMAND, event()),
    );
    expect(ref.current?.getUsj()?.content).toEqual([REST_OF_VERSE_1, POETRY_PARA]);
  });

  it("keeps it for a selection made backward", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await overChapterLineIntoText(
      lexical,
      () => lexical.dispatchCommand(KEY_DOWN_COMMAND, keyDown("Delete")),
      { backward: true },
    );
    expect(ref.current?.getUsj()?.content).toEqual([REST_OF_VERSE_1, POETRY_PARA]);
  });

  it("keeps it, with the typed text, when typing over the selection", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await overChapterLineIntoText(lexical, () =>
      lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "new"),
    );
    expect(ref.current?.getUsj()?.content).toEqual([
      { type: "para", marker: "p", content: ["new two"] },
      POETRY_PARA,
    ]);
  });

  it("keeps the caret after each character typed over the selection", async () => {
    // Typing is one insertion per key: the first replaces the selection, the rest must follow it.
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await overChapterLineIntoText(lexical, () =>
      lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "n"),
    );
    for (const key of ["e", "w"])
      await act(async () =>
        lexical.update(() => {
          lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, key);
        }),
      );
    expect(ref.current?.getUsj()?.content).toEqual([
      { type: "para", marker: "p", content: ["new two"] },
      POETRY_PARA,
    ]);
  });

  it("keeps it when the selection is cut", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await overChapterLineIntoText(lexical, () => lexical.dispatchCommand(CUT_COMMAND, cutEvent()));
    expect(ref.current?.getUsj()?.content).toEqual([REST_OF_VERSE_1, POETRY_PARA]);
  });

  it("keeps it when Enter replaces the selection", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await overChapterLineIntoText(lexical, () =>
      lexical.dispatchCommand(KEY_ENTER_COMMAND, keyDown("Enter")),
    );
    expect(ref.current?.getUsj()?.content).toEqual([
      { type: "para", marker: "p" },
      REST_OF_VERSE_1,
      POETRY_PARA,
    ]);
  });

  it("keeps it, with every pasted line, when a multi-line paste replaces the selection", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await overChapterLineIntoText(lexical, () =>
      lexical.dispatchCommand(PASTE_COMMAND, plainTextPaste("aa\nbb")),
    );
    expect(ref.current?.getUsj()?.content).toEqual([
      { type: "para", marker: "p", content: ["aa"] },
      { type: "para", marker: "p", content: ["bb two"] },
      POETRY_PARA,
    ]);
  });

  it("keeps everything typed when the whole document is selected and typed over", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await act(async () =>
      lexical.update(() => {
        const selection = $createRangeSelection();
        const poem = $lastLeaf($getRoot());
        selection.anchor.set($glyph().getKey(), 0, "text");
        selection.focus.set(poem.getKey(), poem.getTextContentSize(), "text");
        $setSelection(selection);
        lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "replacement");
      }),
    );
    expect(ref.current?.getUsj()?.content).toEqual([
      { type: "para", marker: "p", content: ["replacement"] },
    ]);
  });

  it("merges nothing into a chapter line only partly selected", async () => {
    // From after `\c` to mid-verse: the chapter line keeps its unselected marker bytes (pending,
    // numberless until retyped) and the paragraph keeps its own tail — nothing moves between them.
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await act(async () =>
      lexical.update(() => {
        const selection = $createRangeSelection();
        selection.anchor.set($glyph().getKey(), 3, "text");
        selection.focus.set($verseText().getKey(), 3, "text");
        $setSelection(selection);
        lexical.dispatchCommand(KEY_DOWN_COMMAND, keyDown("Delete"));
      }),
    );
    lexical.getEditorState().read(() => expect($glyph().getTextContent()).toBe(`\\c${NBSP}`));
    expect(ref.current?.getUsj()?.content).toEqual([
      { type: "chapter", marker: "c", number: "" },
      REST_OF_VERSE_1,
      POETRY_PARA,
    ]);
  });

  it("removes the chapter when exactly its marker is deleted", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await act(async () =>
      lexical.update(() => {
        $glyph().select(0, $glyph().getTextContentSize());
        lexical.dispatchCommand(KEY_DOWN_COMMAND, keyDown("Delete"));
      }),
    );
    expect(ref.current?.getUsj()?.content).toEqual([VERSE_1_PARA, POETRY_PARA]);
  });
});

describe("a caret on the chapter line", () => {
  it.each([
    ["Enter in the middle of the marker", 2],
    ["Enter at the end of the line", 0],
  ])("%s does nothing", async (_label, fromEnd) => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await onChapterLine(
      lexical,
      () => lexical.dispatchCommand(KEY_ENTER_COMMAND, keyDown("Enter")),
      fromEnd,
    );
    lexical.getEditorState().read(() => expect($getRoot().getChildrenSize()).toBe(3));
    expect(ref.current?.getUsj()?.content).toEqual(chapterDoc.content);
  });

  it("Shift+Enter does nothing", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await onChapterLine(lexical, () => lexical.dispatchCommand(INSERT_LINE_BREAK_COMMAND, false));
    lexical
      .getEditorState()
      .read(() => expect($glyph().getTextContent()).toBe(getVisibleOpenMarkerText("c", "2")));
    expect(ref.current?.getUsj()?.content).toEqual(chapterDoc.content);
  });

  // A host's marker menus apply a paragraph pick through the `EditorRef`, which splits without
  // dispatching INSERT_PARAGRAPH_COMMAND, so the chapter line's refusal has to hold there too.
  it.each([
    ["an Enter-menu pick", (editor: EditorRef) => editor.splitParagraphWithMarker("p")],
    [
      "a backslash-menu paragraph pick",
      (editor: EditorRef) =>
        editor.applyMarkerMenuSelection(
          { marker: "p", kind: "paragraph", isBasic: true },
          { trigger: "backslash", literalPrefixLanded: false },
        ),
    ],
  ])("%s does nothing", async (_label, pick) => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc, { scrRef: GEN_2_1 });
    await onChapterLine(lexical, () => undefined);
    await act(async () => {
      pick(requireDefined(ref.current ?? undefined, "editor ref not set"));
    });
    lexical.getEditorState().read(() => expect($getRoot().getChildrenSize()).toBe(3));
    expect(ref.current?.getUsj()?.content).toEqual(chapterDoc.content);
  });

  it("takes a multi-line paste as one line of text", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await onChapterLine(lexical, () =>
      lexical.dispatchCommand(PASTE_COMMAND, plainTextPaste("aa\nbb")),
    );
    lexical.getEditorState().read(() => expect($getRoot().getChildrenSize()).toBe(3));
    expect(ref.current?.getUsj()?.content).toEqual([CHAPTER_2, "aa bb", VERSE_1_PARA, POETRY_PARA]);
  });
});
