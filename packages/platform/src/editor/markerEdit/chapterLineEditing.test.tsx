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
import { getUsjMarkerAction } from "../adaptors/usj-marker-action.utils";
import { EditorRef } from "../editor.model";
import { getEnterMenuItems, getMarkerMenuItems } from "../markerMenu/markerItemSource";
import {
  mountStandardViewEditor,
  mountViewEditor,
  requireStandardViewOptions,
} from "../settledGetUsj.test-helpers";
import { requireDefined } from "./markerEdit.test-helpers";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { SerializedVerseRef } from "@sillsdev/scripture";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
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
  $chapterAltnumberRunPieces,
  $chapterGlyphTextNode,
  $chapterPubnumberRunPieces,
  $isChapterNode,
  $isTypedMarkNode,
  ChapterNode,
  defaultStyleInfo,
  getVisibleOpenMarkerText,
  NBSP,
  StyleInfo,
  ZWSP,
} from "shared";
import {
  FORMATTED_VIEW_MODE,
  getViewOptions,
  PARAGRAPH_STRUCTURE_VIEW_MODE,
  ViewMode,
} from "shared-react";
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

/** Puts a collapsed caret just past the chapter's `\\ca` run, at the end of the chapter line. */
function $afterAltnumberRun(): void {
  const { closer } = $chapterAltnumberRunPieces($chapter());
  const end = requireDefined(closer, "no \\ca closer");
  end.select(end.getTextContentSize(), end.getTextContentSize());
}

/** Puts a collapsed caret at the end of the chapter's `\\cp` run's value, the end of its line. */
function $afterPubnumberRun(): void {
  const { value } = $chapterPubnumberRunPieces($chapter());
  const end = requireDefined(value, "no \\cp value");
  end.select(end.getTextContentSize(), end.getTextContentSize());
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
  // later chapter without one, and the host puts it back on save. The space left in front of the
  // rest of the verse is not saved, as ParatextData does not keep a paragraph's leading space.
  const REST_OF_VERSE_1: MarkerContent = { type: "para", marker: "p", content: ["two"] };

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

describe("inline insertion with the caret on the chapter line", () => {
  // Content put after a chapter number goes where Paratext 9 puts it, which is also where typing it
  // puts it: on a markerless line straight after the chapter line. A `\ca` that followed the
  // chapter follows that content on the same line, and a `\cp` keeps its own line; neither is the
  // chapter's attribute any more. Each expected document below is what ParatextData itself makes of
  // the USFM in its label, read back as USJ (whitespace between items aside), so the editor and a
  // Paratext 9 round trip agree. The caret Platform.Bible leaves after a chapter-marker correction
  // sits on this line, just past the number.
  const CHAPTER_2_CA_3: MarkerContent = { ...CHAPTER_2, altnumber: "3" };
  const CHAPTER_2_CP_B: MarkerContent = { ...CHAPTER_2, pubnumber: "B" };
  const CA_3: MarkerContent = { type: "char", marker: "ca", content: ["3"] };
  const CP_B: MarkerContent = { type: "para", marker: "cp", content: ["B"] };
  const docOf = (...content: MarkerContent[]): Usj => ({ type: "USJ", version: "3.1", content });

  // The default content a fresh marker gets when inserted with no selected text to carry over.
  const FRESH_NOTE: MarkerContent = {
    type: "note",
    marker: "f",
    caller: "+",
    content: [
      { type: "char", marker: "fr", closed: "false", content: ["2:1 "] },
      { type: "char", marker: "ft", closed: "false" },
    ],
  };
  const FRESH_CHAR_ND: MarkerContent = { type: "char", marker: "nd" };
  const FRESH_VERSE_1: MarkerContent = { type: "verse", marker: "v", number: "1" };

  const insertions: [string, string, MarkerContent][] = [
    ["a note", "f", FRESH_NOTE],
    ["a character marker", "nd", FRESH_CHAR_ND],
    ["a verse", "v", FRESH_VERSE_1],
  ];

  describe.each(insertions)("%s", (_label, marker, inserted) => {
    it(`\\c 2 ^ → \\c 2 / ^: on a line of its own after the chapter line`, async () => {
      const { ref, lexical } = await mountStandardViewEditor(docOf(CHAPTER_2, VERSE_1_PARA), {
        scrRef: GEN_2_1,
      });
      await onChapterLine(lexical, () => undefined);
      await act(async () => {
        ref.current?.insertMarker(marker);
      });
      expect(ref.current?.getUsj()?.content).toEqual([CHAPTER_2, inserted, VERSE_1_PARA]);
    });

    it(`\\c 2 ^ / \\ca 3\\ca* → \\c 2 / ^\\ca 3\\ca*: ahead of the \\ca, which stops being the chapter's`, async () => {
      const { ref, lexical } = await mountStandardViewEditor(docOf(CHAPTER_2_CA_3, VERSE_1_PARA), {
        scrRef: GEN_2_1,
      });
      await onChapterLine(lexical, () => undefined);
      await act(async () => {
        ref.current?.insertMarker(marker);
      });
      expect(ref.current?.getUsj()?.content).toEqual([CHAPTER_2, inserted, CA_3, VERSE_1_PARA]);
    });

    it(`\\c 2 ^ / \\cp B → \\c 2 / ^ / \\cp B: between the chapter line and the \\cp`, async () => {
      const { ref, lexical } = await mountStandardViewEditor(docOf(CHAPTER_2_CP_B, VERSE_1_PARA), {
        scrRef: GEN_2_1,
      });
      await onChapterLine(lexical, () => undefined);
      await act(async () => {
        ref.current?.insertMarker(marker);
      });
      expect(ref.current?.getUsj()?.content).toEqual([CHAPTER_2, inserted, CP_B, VERSE_1_PARA]);
    });
  });

  // Where Platform.Bible leaves the caret after correcting a chapter marker, between the number
  // and the glyph's trailing separator: still after the number, so the same place.
  it("goes after the chapter number from a caret just past the number, too", async () => {
    const { ref, lexical } = await mountStandardViewEditor(docOf(CHAPTER_2, VERSE_1_PARA), {
      scrRef: GEN_2_1,
    });
    await onChapterLine(lexical, () => undefined, 1);
    await act(async () => {
      ref.current?.insertMarker("f");
    });
    expect(ref.current?.getUsj()?.content).toEqual([CHAPTER_2, FRESH_NOTE, VERSE_1_PARA]);
  });

  // Selecting part of the chapter number and inserting there is the same request: the marker's own
  // bytes are never operands, so the number stays whole rather than being wrapped or replaced.
  it.each(insertions.slice(0, 2))(
    "inserts %s after the chapter number over a selection inside the chapter glyph",
    async (_label, marker, inserted) => {
      const { ref, lexical } = await mountStandardViewEditor(docOf(CHAPTER_2, VERSE_1_PARA), {
        scrRef: GEN_2_1,
      });
      await act(async () =>
        lexical.update(() => {
          // The trailing glyph byte is the separator space; the number's digit sits just before it.
          const end = $glyph().getTextContentSize() - 1;
          $glyph().select(end - 1, end);
        }),
      );
      await act(async () => {
        ref.current?.insertMarker(marker);
      });
      expect(ref.current?.getUsj()?.content).toEqual([CHAPTER_2, inserted, VERSE_1_PARA]);
    },
  );

  // A private-use character is real text in some projects, so one elsewhere in the document must
  // be neither taken for the content's place nor lost.
  it("leaves a private-use character elsewhere in the document alone", async () => {
    const introPara: MarkerContent = { type: "para", marker: "ip", content: ["intro \uE000 pua"] };
    const { ref, lexical } = await mountStandardViewEditor(
      docOf(introPara, CHAPTER_2, VERSE_1_PARA),
      { scrRef: GEN_2_1 },
    );
    await onChapterLine(lexical, () => undefined);
    await act(async () => {
      ref.current?.insertMarker("f");
    });
    expect(ref.current?.getUsj()?.content).toEqual([
      introPara,
      CHAPTER_2,
      FRESH_NOTE,
      VERSE_1_PARA,
    ]);
  });

  // Typing after the `\ca` run keeps it the chapter's, so an insertion there does too.
  it.each(insertions)(
    "inserts %s after the chapter's \\ca run from a caret past it, keeping the alternate number",
    async (_label, marker, inserted) => {
      const { ref, lexical } = await mountStandardViewEditor(docOf(CHAPTER_2_CA_3, VERSE_1_PARA), {
        scrRef: GEN_2_1,
      });
      await act(async () => lexical.update(() => $afterAltnumberRun()));
      await act(async () => {
        ref.current?.insertMarker(marker);
      });
      expect(ref.current?.getUsj()?.content).toEqual([CHAPTER_2_CA_3, inserted, VERSE_1_PARA]);
    },
  );

  // Paratext 9 inserts the marker's bytes at the caret, `\cp B\f …\f*`, and ParatextData reads
  // that back as the chapter keeping its published number with the content after it.
  it.each(insertions)(
    "inserts %s after the chapter's \\cp run from a caret at its end, keeping the published number",
    async (_label, marker, inserted) => {
      const { ref, lexical } = await mountStandardViewEditor(docOf(CHAPTER_2_CP_B, VERSE_1_PARA), {
        scrRef: GEN_2_1,
      });
      await act(async () => lexical.update(() => $afterPubnumberRun()));
      await act(async () => {
        ref.current?.insertMarker(marker);
      });
      expect(ref.current?.getUsj()?.content).toEqual([CHAPTER_2_CP_B, inserted, VERSE_1_PARA]);
    },
  );

  it.each(insertions)(
    "inserts %s after both of the chapter's runs from a caret at the end of its \\cp run",
    async (_label, marker, inserted) => {
      const chapter: MarkerContent = { ...CHAPTER_2, altnumber: "3", pubnumber: "B" };
      const { ref, lexical } = await mountStandardViewEditor(docOf(chapter, VERSE_1_PARA), {
        scrRef: GEN_2_1,
      });
      await act(async () => lexical.update(() => $afterPubnumberRun()));
      await act(async () => {
        ref.current?.insertMarker(marker);
      });
      expect(ref.current?.getUsj()?.content).toEqual([chapter, inserted, VERSE_1_PARA]);
    },
  );

  // A chapter line whose glyph has lost its trailing separator still takes the insertion after
  // the number rather than joining the number's word.
  it.each(insertions.slice(0, 2))(
    "inserts %s after a chapter number with no separator after it",
    async (_label, marker, inserted) => {
      const { ref, lexical } = await mountStandardViewEditor(docOf(CHAPTER_2, VERSE_1_PARA), {
        scrRef: GEN_2_1,
      });
      await act(async () =>
        lexical.update(() => {
          const glyph = $glyph();
          glyph.setTextContent(glyph.getTextContent().trimEnd());
          glyph.select(glyph.getTextContentSize(), glyph.getTextContentSize());
        }),
      );
      await act(async () => {
        ref.current?.insertMarker(marker);
      });
      expect(ref.current?.getUsj()?.content).toEqual([CHAPTER_2, inserted, VERSE_1_PARA]);
    },
  );

  it("starts the chapter's text when nothing follows the chapter line", async () => {
    const { ref, lexical } = await mountStandardViewEditor(docOf(CHAPTER_2), { scrRef: GEN_2_1 });
    await onChapterLine(lexical, () => undefined);
    await act(async () => {
      ref.current?.insertMarker("f");
    });
    expect(ref.current?.getUsj()?.content).toEqual([CHAPTER_2, FRESH_NOTE]);
  });

  it("puts a note picked from the marker menu in the same place", async () => {
    const { ref, lexical } = await mountStandardViewEditor(docOf(CHAPTER_2_CA_3, VERSE_1_PARA), {
      scrRef: GEN_2_1,
    });
    await onChapterLine(lexical, () => undefined);
    await act(async () => {
      ref.current?.applyMarkerMenuSelection(
        { marker: "f", kind: "note", isBasic: true },
        { trigger: "backslash", literalPrefixLanded: false },
      );
    });
    expect(ref.current?.getUsj()?.content).toEqual([CHAPTER_2, FRESH_NOTE, CA_3, VERSE_1_PARA]);
  });

  // Typing is the reference the insertions above follow; pinned so the two cannot drift apart.
  it.each([
    ["no attribute", CHAPTER_2, [CHAPTER_2, "X", VERSE_1_PARA]],
    ["a \\ca", CHAPTER_2_CA_3, [CHAPTER_2, "X", CA_3, VERSE_1_PARA]],
    ["a \\cp", CHAPTER_2_CP_B, [CHAPTER_2, "X", CP_B, VERSE_1_PARA]],
  ])(
    "text typed after the chapter number with %s lands the same way",
    async (_label, chapter, expected) => {
      const { ref, lexical } = await mountStandardViewEditor(docOf(chapter, VERSE_1_PARA), {
        scrRef: GEN_2_1,
      });
      await onChapterLine(lexical, () => undefined);
      await act(async () => {
        lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "X");
      });
      await act(async () => {
        ref.current?.commitPendingMarkerEdits();
      });
      expect(ref.current?.getUsj()?.content).toEqual(expected);
    },
  );

  it("text typed after the chapter's \\ca run lands after it, keeping the alternate number", async () => {
    const { ref, lexical } = await mountStandardViewEditor(docOf(CHAPTER_2_CA_3, VERSE_1_PARA), {
      scrRef: GEN_2_1,
    });
    await act(async () => lexical.update(() => $afterAltnumberRun()));
    await act(async () => {
      lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "X");
    });
    await act(async () => {
      ref.current?.commitPendingMarkerEdits();
    });
    expect(ref.current?.getUsj()?.content).toEqual([CHAPTER_2_CA_3, "X", VERSE_1_PARA]);
  });
});

describe("a chapter line whose bytes are no longer a chapter marker", () => {
  // Whatever is typed or deleted on the chapter line stays, and is saved as what it now is, as
  // Paratext 9 saves the bytes it holds; the host puts a marker the chapter needs back above it.

  /** Replaces the chapter glyph's text with what `edit` makes of it, leaving the caret at `caret`. */
  async function editGlyph(
    editor: LexicalEditor,
    edit: (text: string) => string,
    caret: number,
  ): Promise<void> {
    await act(async () =>
      editor.update(() => {
        const glyph = $glyph();
        glyph.setTextContent(edit(glyph.getTextContent()));
        glyph.select(caret, caret);
      }),
    );
  }

  const rest = [VERSE_1_PARA, POETRY_PARA];
  // A bare backslash is a marker with no name, as ParatextData reads `\\ 2`.
  const NAMELESS_2: MarkerContent = { type: "para", marker: "", content: ["2"] };
  const NAMELESS: MarkerContent = { type: "para", marker: "" };

  it.each([
    [
      "deleting the c",
      (text: string) => text.slice(0, 1) + text.slice(2),
      1,
      [NAMELESS_2, ...rest],
    ],
    ["deleting the backslash", (text: string) => text.slice(1), 0, ["c 2", ...rest]],
    [
      "deleting the c and the number",
      (text: string) => text.slice(0, 1) + text.slice(4),
      1,
      [NAMELESS, ...rest],
    ],
    ["deleting all but the trailing space", (text: string) => text.slice(4), 0, rest],
    ["typing before the backslash", (text: string) => `X${text}`, 1, ["X", CHAPTER_2, ...rest]],
  ])("saves what %s leaves, while the caret is still there", async (_label, edit, caret, saved) => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await editGlyph(lexical, edit, caret);
    expect(ref.current?.getUsj()?.content).toEqual(saved);
  });

  it("keeps the bytes as a nameless paragraph once the caret leaves", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await editGlyph(lexical, (text) => text.slice(0, 1) + text.slice(2), 1);
    await act(async () => lexical.update(() => $verseText().select(1, 1)));
    await act(async () => {
      ref.current?.commitPendingMarkerEdits();
    });
    lexical.getEditorState().read(() => {
      expect($getRoot().getChildren().some($isChapterNode)).toBe(false);
      expect($getRoot().getFirstChild()?.getTextContent()).toBe(`\\${NBSP}2`);
    });
    expect(ref.current?.getUsj()?.content).toEqual([NAMELESS_2, ...rest]);
  });

  it("keeps a paragraph marker typed over the chapter marker", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await editGlyph(lexical, (text) => `\\q1${text.slice(2)}`, 3);
    expect(ref.current?.getUsj()?.content).toEqual([
      { type: "para", marker: "q1", content: ["2 "] },
      ...rest,
    ]);
  });
});

describe("text typed ahead of a chapter marker", () => {
  // USFM puts text that stands behind a line break with no marker of its own into the paragraph
  // before it, which is where the chapter's save and reload put it and where Paratext 9 keeps it.

  const NOTE: MarkerContent = {
    type: "note",
    marker: "f",
    caller: "+",
    content: [{ type: "char", marker: "ft", content: ["note"] }],
  };
  const VERSE_2: MarkerContent = { type: "verse", marker: "v", number: "2" };

  /** Types `typed` at the very start of the chapter line, ahead of its backslash. */
  async function typeAheadOfChapter(editor: LexicalEditor, typed: string): Promise<void> {
    await act(async () => editor.update(() => $glyph().select(0, 0)));
    await typeText(editor, typed);
  }

  it.each([
    ["ends in text", ["stuff"], "x", ["stuff x"]],
    ["ends in a space", ["stuff "], "x", ["stuff x"]],
    ["ends in a note", ["stuff", NOTE], "x", ["stuff", NOTE, " x"]],
    ["ends in a verse marker", [VERSE_2], "x", [VERSE_2, "x"]],
    ["is empty", [], "x", ["x"]],
    ["ends in text, joined by text that starts with a space", ["stuff"], " x", ["stuff x"]],
  ])(
    "joins the paragraph before it, when that paragraph %s",
    async (_label, before, typed, after) => {
      const doc: Usj = {
        type: "USJ",
        version: "3.1",
        content: [{ type: "para", marker: "toc1", content: before }, CHAPTER_2, VERSE_1_PARA],
      };
      const joined = [{ type: "para", marker: "toc1", content: after }, CHAPTER_2, VERSE_1_PARA];
      const { ref, lexical } = await mountStandardViewEditor(doc);
      await typeAheadOfChapter(lexical, typed);
      expect(ref.current?.getUsj()?.content).toEqual(joined);
      await act(async () => {
        ref.current?.commitPendingMarkerEdits();
      });
      expect(ref.current?.getUsj()?.content).toEqual(joined);
      lexical.getEditorState().read(() => {
        expect($getRoot().getChildrenSize()).toBe(3);
        expect($isChapterNode($getRoot().getChildAtIndex(1))).toBe(true);
      });
    },
  );

  it("joins a markerless line before it", async () => {
    const doc: Usj = { type: "USJ", version: "3.1", content: ["loose", CHAPTER_2, VERSE_1_PARA] };
    const { ref, lexical } = await mountStandardViewEditor(doc);
    await typeAheadOfChapter(lexical, "x");
    await act(async () => {
      ref.current?.commitPendingMarkerEdits();
    });
    expect(ref.current?.getUsj()?.content).toEqual(["loose x", CHAPTER_2, VERSE_1_PARA]);
  });

  it("keeps the caret just past the typed text", async () => {
    const doc: Usj = {
      type: "USJ",
      version: "3.1",
      content: [{ type: "para", marker: "toc1", content: ["stuff"] }, CHAPTER_2, VERSE_1_PARA],
    };
    const { ref, lexical } = await mountStandardViewEditor(doc);
    await typeAheadOfChapter(lexical, "xy");
    await act(async () => {
      ref.current?.commitPendingMarkerEdits();
    });
    lexical.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      const text = selection.anchor.getNode().getTextContent();
      expect(text.slice(0, selection.anchor.offset)).toBe("stuff xy");
    });
  });

  it("stays a line of its own when nothing comes before the chapter", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await typeAheadOfChapter(lexical, "x");
    await act(async () => {
      ref.current?.commitPendingMarkerEdits();
    });
    expect(ref.current?.getUsj()?.content).toEqual(["x", CHAPTER_2, VERSE_1_PARA, POETRY_PARA]);
  });
});

describe("the caret on a chapter line that is no longer a chapter", () => {
  // Once a chapter line's bytes stop reading as a chapter marker (`\ 2` after its `c` is deleted,
  // `\sc 2` after an `s` is typed into it), the line saves as what it now is. The caret is
  // reported in that saved document, at its exact place in the line, so a host that replaces the
  // document can put it back there.
  async function deleteTheC(lexical: LexicalEditor): Promise<void> {
    await act(async () =>
      lexical.update(() => {
        $glyph().select(1, 2);
        lexical.dispatchCommand(KEY_DOWN_COMMAND, keyDown("Delete"));
      }),
    );
  }

  async function caretInGlyph(lexical: LexicalEditor, offset: number): Promise<void> {
    await act(async () => lexical.update(() => $glyph().select(offset, offset)));
  }

  const NAMELESS_2: MarkerContent = { type: "para", marker: "", content: ["2"] };

  it.each([
    ["right after the backslash", 1, { jsonPath: "$.content[0]['marker']", propertyOffset: 0 }],
    ["in front of the number", 2, { jsonPath: "$.content[0].content[0]", offset: 0 }],
    ["right after the number", 3, { jsonPath: "$.content[0].content[0]", offset: 1 }],
  ])("`\\ 2` with the caret %s", async (_label, offset, location) => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await deleteTheC(lexical);
    await caretInGlyph(lexical, offset);

    expect(ref.current?.getUsj()?.content[0]).toEqual(NAMELESS_2);
    expect(ref.current?.getSelection()).toEqual({ start: location });
  });

  it("`\\ 2y` with the caret after the typed letter", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await deleteTheC(lexical);
    await caretInGlyph(lexical, 3);
    await typeText(lexical, "y");

    expect(ref.current?.getUsj()?.content[0]).toEqual({ ...NAMELESS_2, content: ["2y"] });
    expect(ref.current?.getSelection()).toEqual({
      start: { jsonPath: "$.content[0].content[0]", offset: 2 },
    });
  });

  // In chapter 1 a paragraph can come before the chapter line, and text typed ahead of the marker
  // joins the end of it, as the save and the reload put it.
  describe("with a paragraph before the chapter line", () => {
    const TITLE: MarkerContent = { type: "para", marker: "mt1", content: ["Ruth"] };
    const CHAPTER_1: MarkerContent = { type: "chapter", marker: "c", number: "1" };
    const titledDoc: Usj = {
      type: "USJ",
      version: "3.1",
      content: [TITLE, CHAPTER_1, VERSE_1_PARA],
    };

    async function typeAheadOfTheMarker(lexical: LexicalEditor): Promise<void> {
      await caretInGlyph(lexical, 0);
      await typeText(lexical, "X");
    }

    it("reports a caret after the typed text in the paragraph it joins", async () => {
      const { ref, lexical } = await mountStandardViewEditor(titledDoc);
      await typeAheadOfTheMarker(lexical);

      expect(ref.current?.getUsj()?.content.slice(0, 2)).toEqual([
        { ...TITLE, content: ["Ruth X"] },
        CHAPTER_1,
      ]);
      expect(ref.current?.getSelection()).toEqual({
        start: { jsonPath: "$.content[1]" },
      });
    });

    it("places a host's annotation on the paragraph after the chapter at its own index", async () => {
      const { ref, lexical } = await mountStandardViewEditor(titledDoc);
      await typeAheadOfTheMarker(lexical);

      // `one` in verse 1, which is `$.content[2]` in the document the host reads.
      await act(async () => {
        ref.current?.setAnnotation(
          {
            start: { jsonPath: "$.content[2].content[1]", offset: 0 },
            end: { jsonPath: "$.content[2].content[1]", offset: 3 },
          },
          "test",
          "1",
        );
        await Promise.resolve();
      });

      expect(
        lexical.getEditorState().read(() =>
          $getRoot()
            .getAllTextNodes()
            .filter((node) => $isTypedMarkNode(node.getParent()))
            .map((node) => node.getTextContent()),
        ),
      ).toEqual(["one"]);
    });
  });

  it("`\\sc 2` with the caret between the s and the c", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await caretInGlyph(lexical, 1);
    await typeText(lexical, "s");

    expect(ref.current?.getUsj()?.content[0]).toMatchObject({ marker: "sc" });
    expect(ref.current?.getSelection()).toEqual({
      start: { jsonPath: "$.content[0]['marker']", propertyOffset: 1 },
    });
  });
});

describe("a chapter inserted into a book with no chapters", () => {
  // An empty book's chapter 1 is its `\id` line and nothing else, so there is no chapter line to
  // type `\c` into. Each way of asking for one inserts it, and the chapter edits and saves like a
  // loaded one.
  const BOOK: MarkerContent = { type: "book", marker: "id", code: "GEN", content: ["Genesis"] };
  const CHAPTER_1: MarkerContent = { type: "chapter", marker: "c", number: "1" };
  const emptyBook: Usj = { type: "USJ", version: "3.1", content: [BOOK] };
  const GEN_1_1: SerializedVerseRef = { book: "GEN", chapterNum: 1, verseNum: 1 };

  /** Mounts `usj` (the empty book) at `scrRef` with the caret at the end of the `\id` line's text. */
  async function mountEmptyBook(
    scrRef: SerializedVerseRef = GEN_1_1,
    view = requireStandardViewOptions(),
    usj = emptyBook,
  ) {
    const mounted = await mountViewEditor(usj, view, { scrRef });
    await act(async () =>
      mounted.lexical.update(() => {
        const book = requireDefined($getRoot().getFirstChild() ?? undefined, "no book");
        $lastLeaf(book).selectEnd();
      }),
    );
    return mounted;
  }

  /** The `\` menu's items at the caret. */
  function menuItems(ref: { current: EditorRef | null }) {
    const context = requireDefined(ref.current?.getMarkerMenuContext(), "no menu context");
    return getMarkerMenuItems(defaultStyleInfo, context);
  }

  /** Picks the `\` menu's `\c`, as the host's palette does. */
  async function pickChapterFromMenu(ref: { current: EditorRef | null }): Promise<void> {
    const chapterItem = requireDefined(
      menuItems(ref).find((item) => item.marker === "c"),
      "the menu offers no `c`",
    );
    await act(async () => {
      ref.current?.applyMarkerMenuSelection(chapterItem, {
        trigger: "backslash",
        literalPrefixLanded: false,
      });
    });
  }

  it("is offered by the `\\` menu and saves as chapter 1 after the `\\id` line", async () => {
    const { ref } = await mountEmptyBook();

    await pickChapterFromMenu(ref);

    expect(ref.current?.getUsj()?.content).toEqual([BOOK, CHAPTER_1]);
  });

  // Enter on the chapter line is the host's Enter palette, whose pick splits through
  // `splitParagraphWithMarker`; the new paragraph has to start after the chapter line.
  it("starts a paragraph after it from the Enter palette, and takes typing there", async () => {
    const { ref, lexical } = await mountEmptyBook();
    await pickChapterFromMenu(ref);

    await act(async () => {
      ref.current?.splitParagraphWithMarker("p");
    });
    await typeText(lexical, "new");

    expect(ref.current?.getUsj()?.content).toEqual([
      BOOK,
      CHAPTER_1,
      { type: "para", marker: "p", content: ["new"] },
    ]);
  });

  // The host's marker menu outside Standard view inserts through `insertMarker`.
  it("is inserted by `insertMarker`, as by the menu", async () => {
    const { ref } = await mountEmptyBook();

    await act(async () => {
      ref.current?.insertMarker("c");
    });

    expect(ref.current?.getUsj()?.content).toEqual([BOOK, CHAPTER_1]);
  });

  // The editor's own marker menu, shown when the host has no marker UI of its own, runs the same
  // marker action as `insertMarker`.
  it("is inserted after the front matter by the `\\c` marker action", async () => {
    const title: MarkerContent = { type: "para", marker: "mt1", content: ["Genesis"] };
    const text: MarkerContent = { type: "para", marker: "p", content: ["Text"] };
    const view = requireStandardViewOptions();
    const { ref, lexical } = await mountEmptyBook(GEN_1_1, view, {
      ...emptyBook,
      content: [BOOK, title, text],
    });

    await act(async () => {
      getUsjMarkerAction(
        "c",
        { current: undefined },
        view,
        undefined,
        undefined,
        undefined,
        defaultStyleInfo,
      ).action({ editor: lexical, reference: GEN_1_1 });
    });

    expect(ref.current?.getUsj()?.content).toEqual([BOOK, title, CHAPTER_1, text]);
    // `getUsj()` reads the same whichever chapter node was built, so check that it is Standard
    // view's editable chapter line (`$chapter` finds only that kind) and that the caret is on it.
    lexical.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a caret");
      expect(selection.isCollapsed()).toBe(true);
      expect(selection.focus.getNode().getTopLevelElement()?.is($chapter())).toBe(true);
    });
  });

  it("is inserted with empty verses by `insertFirstChapter`", async () => {
    const { ref } = await mountEmptyBook();

    let inserted: boolean | undefined;
    await act(async () => {
      inserted = ref.current?.insertFirstChapter(2);
    });

    expect(inserted).toBe(true);
    expect(ref.current?.getUsj()?.content).toEqual([
      BOOK,
      CHAPTER_1,
      { type: "verse", marker: "v", number: "1" },
      { type: "verse", marker: "v", number: "2" },
    ]);
  });

  // Verses go above the chapter content, so over existing content they would leave all of it in
  // the last verse.
  describe("over content already in the chapter, as a book without chapter markers has", () => {
    const V1: MarkerContent = { type: "verse", marker: "v", number: "1" };
    const V2: MarkerContent = { type: "verse", marker: "v", number: "2" };

    async function insertWithVerses(content: MarkerContent[]) {
      const { ref } = await mountEmptyBook(GEN_1_1, requireStandardViewOptions(), {
        ...emptyBook,
        content,
      });
      await act(async () => {
        ref.current?.insertFirstChapter(2);
      });
      return ref.current?.getUsj()?.content;
    }

    it("adds no verses above text", async () => {
      const text: MarkerContent = { type: "para", marker: "p", content: ["Text"] };

      expect(await insertWithVerses([BOOK, text])).toEqual([BOOK, CHAPTER_1, text]);
    });

    // `\b` needs a chapter, so the chapter content starts there, and `\ip` after it is text in
    // that content, whatever it would be ahead of a chapter.
    it("adds no verses above text after the paragraph the chapter content starts with", async () => {
      const title: MarkerContent = { type: "para", marker: "mt1", content: ["Genesis"] };
      const blank: MarkerContent = { type: "para", marker: "b" };
      const intro: MarkerContent = { type: "para", marker: "ip", content: ["Intro text"] };

      expect(await insertWithVerses([BOOK, title, blank, intro])).toEqual([
        BOOK,
        title,
        CHAPTER_1,
        blank,
        intro,
      ]);
    });

    it("adds no verses above a verse", async () => {
      const para: MarkerContent = { type: "para", marker: "p", content: [V1] };

      expect(await insertWithVerses([BOOK, para])).toEqual([BOOK, CHAPTER_1, para]);
    });

    it("adds verses above a paragraph holding only whitespace and a caret's zero-width space", async () => {
      const blank: MarkerContent = { type: "para", marker: "p", content: [` ${ZWSP} `] };

      // Loading normalizes the paragraph's whitespace, so only what goes above it is compared.
      expect((await insertWithVerses([BOOK, blank]))?.slice(0, 4)).toEqual([
        BOOK,
        CHAPTER_1,
        V1,
        V2,
      ]);
    });

    // Only the chapter content counts: text in the front matter above it does not.
    it("adds verses below a titled front matter", async () => {
      const title: MarkerContent = { type: "para", marker: "mt1", content: ["Genesis"] };
      const empty: MarkerContent = { type: "para", marker: "p" };

      expect(await insertWithVerses([BOOK, title, empty])).toEqual([
        BOOK,
        title,
        CHAPTER_1,
        V1,
        V2,
        empty,
      ]);
    });

    // Standard view shows the `\p` as text, which is a marker, not the chapter's text.
    it("adds verses above an empty paragraph", async () => {
      const empty: MarkerContent = { type: "para", marker: "p" };

      expect(await insertWithVerses([BOOK, empty])).toEqual([BOOK, CHAPTER_1, V1, V2, empty]);
    });
  });

  // Where the markers are hidden the chapter is a decorator, with no line to put the caret on.
  describe.each<ViewMode>([FORMATTED_VIEW_MODE, PARAGRAPH_STRUCTURE_VIEW_MODE])(
    "with the markers hidden (%s view)",
    (viewMode) => {
      const mountHiddenMarkers = (usj = emptyBook) =>
        mountEmptyBook(GEN_1_1, requireDefined(getViewOptions(viewMode), "no view options"), usj);

      it("puts the caret after verse 1, so typing goes into verse 1", async () => {
        const { ref, lexical } = await mountHiddenMarkers();

        await act(async () => {
          ref.current?.insertFirstChapter(2);
        });
        await typeText(lexical, "In the beginning");

        expect(ref.current?.getUsj()?.content).toEqual([
          BOOK,
          CHAPTER_1,
          { type: "verse", marker: "v", number: "1" },
          // The space is the editor's, ahead of the next verse, as when typing in a loaded chapter.
          "In the beginning ",
          { type: "verse", marker: "v", number: "2" },
        ]);
      });

      it("puts the caret after a single verse", async () => {
        const { ref, lexical } = await mountHiddenMarkers();

        await act(async () => {
          ref.current?.insertFirstChapter(1);
        });
        await typeText(lexical, "In the beginning");

        expect(ref.current?.getUsj()?.content).toEqual([
          BOOK,
          CHAPTER_1,
          { type: "verse", marker: "v", number: "1" },
          "In the beginning",
        ]);
      });

      it("puts the caret at the start of the chapter content when there are no verses", async () => {
        const text: MarkerContent = { type: "para", marker: "p", content: ["Text"] };
        const { ref, lexical } = await mountHiddenMarkers({ ...emptyBook, content: [BOOK, text] });

        await act(async () => {
          ref.current?.insertFirstChapter();
        });
        await typeText(lexical, "New ");

        expect(ref.current?.getUsj()?.content).toEqual([
          BOOK,
          CHAPTER_1,
          { type: "para", marker: "p", content: ["New Text"] },
        ]);
      });

      it("adds no verses above text", async () => {
        const text: MarkerContent = { type: "para", marker: "p", content: ["Text"] };
        const { ref } = await mountHiddenMarkers({ ...emptyBook, content: [BOOK, text] });

        await act(async () => {
          ref.current?.insertFirstChapter(2);
        });

        expect(ref.current?.getUsj()?.content).toEqual([BOOK, CHAPTER_1, text]);
      });

      it("leaves the caret where it was when nothing follows the chapter", async () => {
        const { ref, lexical } = await mountHiddenMarkers();
        const $caret = () => {
          const selection = $getSelection();
          if (!$isRangeSelection(selection)) throw new Error("expected a caret");
          return { key: selection.focus.key, offset: selection.focus.offset };
        };
        const before = lexical.getEditorState().read($caret);

        await act(async () => {
          ref.current?.insertFirstChapter();
        });

        expect(ref.current?.getUsj()?.content).toEqual([BOOK, CHAPTER_1]);
        expect(lexical.getEditorState().read($caret)).toEqual(before);
      });
    },
  );

  it("is not offered or inserted in a chapter after the first", async () => {
    const { ref } = await mountEmptyBook({ book: "GEN", chapterNum: 2, verseNum: 1 });

    expect(menuItems(ref).map((item) => item.marker)).not.toContain("c");
    let inserted: boolean | undefined;
    await act(async () => {
      inserted = ref.current?.insertFirstChapter();
    });
    expect(inserted).toBe(false);
    expect(ref.current?.getUsj()?.content).toEqual([BOOK]);
  });

  /** Asks for `\c` at the selection through the `\` menu's pick and `insertMarker`. */
  async function askAtSelection(ref: { current: EditorRef | null }): Promise<void> {
    const context = requireDefined(ref.current?.getMarkerMenuContext(), "no menu context");
    // The menu does not offer `\c` here, so pick the item it would have offered.
    const chapterItem = requireDefined(
      getMarkerMenuItems(defaultStyleInfo, { ...context, canInsertChapter: true }).find(
        (item) => item.marker === "c",
      ),
      "no `c` item",
    );
    await act(async () => {
      ref.current?.applyMarkerMenuSelection(chapterItem, {
        trigger: "backslash",
        literalPrefixLanded: false,
      });
    });
    await act(async () => {
      ref.current?.insertMarker("c");
    });
  }

  // The `\` menu, its pick and `insertMarker` act at the selection, so they refuse where a chapter
  // cannot start. The host's button does not act at the selection, so it still inserts.
  describe.each<[string, () => void, MarkerContent[]]>([
    [
      "inside a note",
      () =>
        requireDefined(
          $getRoot()
            .getAllTextNodes()
            .find((node) => node.getTextContent().includes("note body")),
          "no note text",
        ).select(1, 1),
      [
        BOOK,
        {
          type: "para",
          marker: "ip",
          content: [
            "Intro",
            {
              type: "note",
              marker: "f",
              caller: "+",
              content: [{ type: "char", marker: "ft", content: ["note body"] }],
            },
          ],
        },
      ],
    ],
    [
      "over a text selection",
      () => {
        const book = requireDefined($getRoot().getFirstChild() ?? undefined, "no book");
        const text = $lastLeaf(book);
        if (!(text instanceof TextNode)) throw new Error("expected the `\\id` line's text");
        text.select(0, text.getTextContentSize());
      },
      [BOOK],
    ],
  ])("%s", (_, $select, content) => {
    async function mountWithSelection() {
      const mounted = await mountEmptyBook(GEN_1_1, requireStandardViewOptions(), {
        ...emptyBook,
        content,
      });
      await act(async () => mounted.lexical.update($select));
      return mounted;
    }

    it("is not offered by the menu, or inserted by its pick or `insertMarker`", async () => {
      const { ref } = await mountWithSelection();
      const before = ref.current?.getUsj();

      expect(menuItems(ref).map((item) => item.marker)).not.toContain("c");
      await askAtSelection(ref);

      expect(ref.current?.getUsj()).toEqual(before);
    });

    it("is still inserted by `insertFirstChapter`", async () => {
      const { ref } = await mountWithSelection();

      let inserted: boolean | undefined;
      await act(async () => {
        inserted = ref.current?.insertFirstChapter();
      });

      expect(inserted).toBe(true);
      expect(ref.current?.getUsj()?.content).toEqual([...content, CHAPTER_1]);
    });
  });

  // Front and back matter, introductions, glossaries, concordances and indexes never hold chapters.
  it("is not offered or inserted in a peripheral book", async () => {
    const frontMatter: MarkerContent = { ...BOOK, code: "FRT", content: ["Front matter"] };
    const { ref } = await mountEmptyBook(
      { book: "FRT", chapterNum: 1, verseNum: 1 },
      requireStandardViewOptions(),
      { ...emptyBook, content: [frontMatter] },
    );

    expect(menuItems(ref).map((item) => item.marker)).not.toContain("c");
    await askAtSelection(ref);
    let inserted: boolean | undefined;
    await act(async () => {
      inserted = ref.current?.insertFirstChapter();
    });

    expect(inserted).toBe(false);
    expect(ref.current?.getUsj()?.content).toEqual([frontMatter]);
  });

  // The Extra books (XXA–XXG) hold chapters like any other book.
  it("is offered and inserted in an Extra book", async () => {
    const extraBook: MarkerContent = { ...BOOK, code: "XXA", content: ["Extra A"] };
    const { ref } = await mountEmptyBook(
      { book: "XXA", chapterNum: 1, verseNum: 1 },
      requireStandardViewOptions(),
      { ...emptyBook, content: [extraBook] },
    );

    await pickChapterFromMenu(ref);

    expect(ref.current?.getUsj()?.content).toEqual([extraBook, CHAPTER_1]);
  });
});
