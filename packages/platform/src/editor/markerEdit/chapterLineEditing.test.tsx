/**
 * Editing at an editable chapter line, through the whole Standard-view `Editor` and read back
 * through `EditorRef.getUsj()` — the document a host saves.
 *
 * A chapter line serializes as its number alone, so anything a gesture leaves INSIDE it is on
 * screen but never saved. A deletion from the chapter line into the text must therefore not merge
 * the rest of the paragraph into the chapter line: for every gesture that deletes a selection —
 * Delete, Backspace, typing over it, cut, Enter, and paste — it deletes the chapter marker, as it
 * does in the USFM text, and leaves the text after the selection in its own paragraph. The other
 * half pins editing on the chapter line itself:
 * it cannot be split, so Enter there starts a new paragraph after it, Shift+Enter does nothing, and
 * a paste or a drop goes in as it would be typed there.
 */
import { EditorRef } from "../editor.model";
import { getEnterMenuItems } from "../markerMenu/markerItemSource";
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
  UNDO_COMMAND,
} from "lexical";
import {
  $chapterGlyphTextNode,
  $isChapterNode,
  ChapterNode,
  getVisibleOpenMarkerText,
  NBSP,
  StyleInfo,
} from "shared";
import { describe, expect, it } from "vitest";

const CHAPTER_2: MarkerContent = { type: "chapter", marker: "c", number: "2" };
const VERSE_1_PARA: MarkerContent = {
  type: "para",
  marker: "p",
  content: [{ type: "verse", marker: "v", number: "1" }, "one two"],
};
const POETRY_PARA: MarkerContent = { type: "para", marker: "q1", content: ["poem"] };

const CHAPTER_2_GLYPH = requireDefined(getVisibleOpenMarkerText("c", "2"), "no chapter glyph text");
const GEN_2_1: SerializedVerseRef = { book: "GEN", chapterNum: 2, verseNum: 1 };

/**
 * Enough of a stylesheet to rank the Enter menu: `\ip` belongs to the book introduction (under
 * `\id`) and `\p` to a chapter (under `\c`).
 */
const PARAGRAPH_SHEET: StyleInfo = {
  markers: {
    id: { marker: "id", styleType: "paragraph" },
    c: { marker: "c", styleType: "paragraph", occursUnder: ["id"] },
    p: { marker: "p", styleType: "paragraph", occursUnder: ["c"], rank: 4 },
    ip: { marker: "ip", styleType: "paragraph", occursUnder: ["id"] },
  },
};

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

/** Types `text` at the caret, in an update of its own as a keystroke is. */
async function typeText(editor: LexicalEditor, text: string): Promise<void> {
  await act(async () =>
    editor.update(() => {
      editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, text);
    }),
  );
}

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

/**
 * A duck-typed drop carrying only `type`, as Lexical hands it on from the browser's
 * `insertFromDrop` input event (jsdom has no DataTransfer).
 */
function drop(type: "text/plain" | "text/html", data: string): InputEvent {
  return {
    dataTransfer: {
      types: [type],
      files: [],
      getData: (requested: string) => (requested === type ? data : ""),
    },
    inputType: "insertFromDrop",
    preventDefault: () => undefined,
  } as unknown as InputEvent;
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
  // A chapter line holds nothing but its own marker, so Enter cannot split it: wherever the caret
  // is on the line, Enter starts a new paragraph after it — the way a paragraph is added after
  // `\c N` in the USFM text — and the caret goes into that paragraph.
  it.each([
    ["at the end of the line", 0],
    ["in the middle of the marker", 2],
    ["at the start of the line", CHAPTER_2_GLYPH.length],
  ])("Enter %s starts a \\p paragraph after it", async (_label, fromEnd) => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await onChapterLine(
      lexical,
      () => lexical.dispatchCommand(KEY_ENTER_COMMAND, keyDown("Enter")),
      fromEnd,
    );
    await typeText(lexical, "new");
    expect(ref.current?.getUsj()?.content).toEqual([
      CHAPTER_2,
      { type: "para", marker: "p", content: ["new"] },
      VERSE_1_PARA,
      POETRY_PARA,
    ]);
  });

  it("Enter is undone in one step", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await onChapterLine(lexical, () =>
      lexical.dispatchCommand(KEY_ENTER_COMMAND, keyDown("Enter")),
    );
    expect(ref.current?.getUsj()?.content).toHaveLength(chapterDoc.content.length + 1);
    await act(async () => {
      lexical.dispatchCommand(UNDO_COMMAND, undefined);
    });
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

  // The selection is not deleted either: the line break that would replace it is refused, so all a
  // deletion could do is take the chapter's number out of its marker.
  it("Shift+Enter over a selection on the chapter line does nothing", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await act(async () =>
      lexical.update(() => {
        const numberAt = CHAPTER_2_GLYPH.indexOf("2");
        $glyph().select(numberAt, numberAt + 1);
        lexical.dispatchCommand(INSERT_LINE_BREAK_COMMAND, false);
      }),
    );
    lexical.getEditorState().read(() => expect($glyph().getTextContent()).toBe(CHAPTER_2_GLYPH));
    expect(ref.current?.getUsj()?.content).toEqual(chapterDoc.content);
  });

  // As in Paratext 9, the paragraph goes directly after the chapter even with a `\cp` paragraph
  // following it: a `\cp` can stand on its own, and the user may mean to put a paragraph between.
  it("Enter starts the paragraph before a following \\cp paragraph", async () => {
    const PUBLISHED_NUMBER: MarkerContent = { type: "para", marker: "cp", content: ["B"] };
    const { ref, lexical } = await mountStandardViewEditor({
      ...chapterDoc,
      content: [CHAPTER_2, PUBLISHED_NUMBER, VERSE_1_PARA],
    });
    await onChapterLine(lexical, () =>
      lexical.dispatchCommand(KEY_ENTER_COMMAND, keyDown("Enter")),
    );
    await typeText(lexical, "new");
    expect(ref.current?.getUsj()?.content).toEqual([
      CHAPTER_2,
      { type: "para", marker: "p", content: ["new"] },
      PUBLISHED_NUMBER,
      VERSE_1_PARA,
    ]);
  });

  // A host's marker menus apply a paragraph pick through the `EditorRef`, which splits without
  // dispatching INSERT_PARAGRAPH_COMMAND, so it has to start the paragraph after the chapter line
  // itself.
  it.each([
    ["an Enter-menu pick", (editor: EditorRef) => editor.splitParagraphWithMarker("q1")],
    [
      "a backslash-menu paragraph pick",
      (editor: EditorRef) =>
        editor.applyMarkerMenuSelection(
          { marker: "q1", kind: "paragraph", isBasic: false },
          { trigger: "backslash", literalPrefixLanded: false },
        ),
    ],
  ])("%s starts a paragraph with that marker after it", async (_label, pick) => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc, { scrRef: GEN_2_1 });
    await onChapterLine(lexical, () => undefined);
    await act(async () => {
      pick(requireDefined(ref.current ?? undefined, "editor ref not set"));
    });
    await typeText(lexical, "new");
    expect(ref.current?.getUsj()?.content).toEqual([
      CHAPTER_2,
      { type: "para", marker: "q1", content: ["new"] },
      VERSE_1_PARA,
      POETRY_PARA,
    ]);
  });

  // The paragraph Enter starts goes after the chapter, so the Enter menu ranks what may follow a
  // chapter first — `\p`, not the book introduction's `\ip`.
  it("puts the paragraph that follows a chapter first in the Enter menu", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc, { scrRef: GEN_2_1 });
    await onChapterLine(lexical, () => undefined);
    const context = requireDefined(ref.current?.getMarkerMenuContext(), "no marker menu context");
    expect(getEnterMenuItems(PARAGRAPH_SHEET, context)[0]?.marker).toBe("p");
  });

  // What typing the same text there does: the first line goes onto the chapter line, and each line
  // break starts a paragraph after it, as Enter there does.
  const TYPED_AA_BB = [
    CHAPTER_2,
    "aa",
    { type: "para", marker: "p", content: ["bb"] },
    VERSE_1_PARA,
    POETRY_PARA,
  ];

  it("takes a multi-line paste as it would be typed", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await onChapterLine(lexical, () =>
      lexical.dispatchCommand(PASTE_COMMAND, plainTextPaste("aa\nbb")),
    );
    expect(ref.current?.getUsj()?.content).toEqual(TYPED_AA_BB);
  });

  // A drop inserts through Lexical's clipboard path, not the paste command, so it needs a claim of
  // its own: without one the second line lands after the last paragraph of the chapter.
  it("takes a multi-line drop as it would be typed", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await onChapterLine(lexical, () =>
      lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, drop("text/plain", "aa\r\nbb")),
    );
    expect(ref.current?.getUsj()?.content).toEqual(TYPED_AA_BB);
  });

  // Some drag sources carry html alone; a paste falls back to its text, and a drop must too, or it
  // reaches Lexical's rich-text insertion with no block to insert into.
  it("takes an html-only drop as it would be typed", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await onChapterLine(lexical, () =>
      lexical.dispatchCommand(
        CONTROLLED_TEXT_INSERTION_COMMAND,
        drop("text/html", "<p>aa</p><p>bb</p>"),
      ),
    );
    expect(ref.current?.getUsj()?.content).toEqual(TYPED_AA_BB);
  });

  // A pasted `\c` would put a second chapter into the chapter, exactly as it would anywhere else.
  it("drops a pasted chapter marker, keeping the text after it", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await onChapterLine(lexical, () =>
      lexical.dispatchCommand(PASTE_COMMAND, plainTextPaste("\\c 5 aa")),
    );
    expect(ref.current?.getUsj()?.content).toEqual([CHAPTER_2, "aa", VERSE_1_PARA, POETRY_PARA]);
  });

  // A copy made in this editor carries its own rich payload, which structure protection's html
  // sanitizer would insert as nodes — and a chapter line has no block to insert them into, so left
  // to the sanitizer the paste throws and does nothing.
  it("takes an internal paste in a protected document as one line", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc, {
      structureProtectionMode: "protected",
    });
    const flavors: { [type: string]: string } = {
      "text/plain": "aa\nbb",
      "text/html": "<p>aa</p><p>bb</p>",
      "application/x-lexical-editor": JSON.stringify({
        namespace: lexical._config.namespace,
        nodes: [],
      }),
    };
    const internalPaste = {
      clipboardData: {
        types: Object.keys(flavors),
        files: [],
        getData: (type: string) => flavors[type] ?? "",
      },
      preventDefault: () => undefined,
    } as unknown as ClipboardEvent;
    await onChapterLine(lexical, () => lexical.dispatchCommand(PASTE_COMMAND, internalPaste));
    expect(ref.current?.getUsj()?.content).toEqual([CHAPTER_2, "aa bb", VERSE_1_PARA, POETRY_PARA]);
  });

  // In a structure-protected document a chapter's marker is structure, as a verse number is, so a
  // paste that would rewrite it changes nothing. Only just past the end of the line — where typing
  // adds text after the marker — does a paste go in.
  describe("in a structure-protected document", () => {
    const numberAt = CHAPTER_2_GLYPH.indexOf("2");

    it.each([
      ["over the chapter number", numberAt, numberAt + 1],
      ["with the caret inside the marker", numberAt, numberAt],
      ["over the whole chapter line", 0, CHAPTER_2_GLYPH.length],
    ])("refuses a paste %s", async (_label, anchor, focus) => {
      const { ref, lexical } = await mountStandardViewEditor(chapterDoc, {
        structureProtectionMode: "protected",
      });
      await act(async () =>
        lexical.update(() => {
          $glyph().select(anchor, focus);
          lexical.dispatchCommand(PASTE_COMMAND, plainTextPaste("5"));
        }),
      );
      expect(ref.current?.getUsj()?.content).toEqual(chapterDoc.content);
    });

    it("takes a paste just past the end of the line, as typing there would", async () => {
      const { ref, lexical } = await mountStandardViewEditor(chapterDoc, {
        structureProtectionMode: "protected",
      });
      await onChapterLine(lexical, () =>
        lexical.dispatchCommand(PASTE_COMMAND, plainTextPaste("aa\nbb")),
      );
      expect(ref.current?.getUsj()?.content).toEqual([
        CHAPTER_2,
        "aa bb",
        VERSE_1_PARA,
        POETRY_PARA,
      ]);
    });
  });
});
