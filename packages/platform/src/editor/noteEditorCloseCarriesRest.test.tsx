/**
 * Closing an unclosed note mid-note in a host's own note editor: typing the note's closer (`\f*`)
 * there ends the note at that point, and what followed it leaves the note for the paragraph. The
 * note editor's paragraph holds nothing but the note, so `EditorRef.getOpsAfterNote` is how the
 * host reads that text back, to apply it after the note in the Scripture text.
 */
import { EditorOptions } from "./editor.model";
import { noteKeys, options, renderEditor, requireDefined } from "./noteEditorRef.test-helpers";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { afterAll, beforeAll } from "vitest";
import {
  $getSelection,
  $isRangeSelection,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  LexicalEditor,
} from "lexical";

const originalRangeRect = Range.prototype.getBoundingClientRect;
beforeAll(() => {
  Range.prototype.getBoundingClientRect = () => new DOMRect();
});
afterAll(() => {
  Range.prototype.getBoundingClientRect = originalRangeRect;
});

// jsdom's `focus()` collapses the document selection; keep it, as a browser does.
const originalFocus = HTMLElement.prototype.focus;
beforeAll(() => {
  HTMLElement.prototype.focus = function focus(focusOptions?: FocusOptions) {
    const selection = document.getSelection();
    const range = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : undefined;
    originalFocus.call(this, focusOptions);
    if (range && selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };
});
afterAll(() => {
  HTMLElement.prototype.focus = originalFocus;
});

const noteEditorOptions: EditorOptions = {
  ...options,
  view: {
    markerMode: "editable",
    noteMode: "expanded",
    hasSpacing: true,
    isFormattedFont: true,
    isNoteShellEditable: false,
    // As a host's note editor renders its wrapper paragraph: no marker prefix.
    showParaMarkerPrefixes: false,
  },
};

/** A host's note editor starts from one empty paragraph and receives the note as an op. */
const noteEditorStartUsj: Usj = { type: "USJ", version: "3.1", content: [{ type: "para" }] };

const unclosedNote = {
  type: "note",
  marker: "f",
  caller: "+",
  closed: "false",
  content: [{ type: "char", marker: "ft", closed: "false", content: ["alpha beta"] }],
} as MarkerObject;

const scriptureUsj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["Test Book"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [{ type: "verse", marker: "v", number: "1" }, "before ", unclosedNote],
    },
  ],
};

async function syncDomSelection(lexical: LexicalEditor) {
  const point = lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) return undefined;
    const { key, offset, type } = selection.anchor;
    return { key, offset, type };
  });
  if (!point) return;
  const element = requireDefined(lexical.getElementByKey(point.key), "caret element");
  const domNode =
    point.type === "text" ? requireDefined(element.firstChild, "caret text") : element;
  await act(async () => {
    document.getSelection()?.collapse(domNode, point.offset);
  });
}

async function restCaret(lexical: LexicalEditor) {
  await syncDomSelection(lexical);
  await act(async () => {
    document.dispatchEvent(new Event("selectionchange"));
  });
  await syncDomSelection(lexical);
}

async function typeText(lexical: LexicalEditor, text: string) {
  for (const character of text)
    await act(async () => {
      lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, character);
    });
}

describe("closing an unclosed note in the middle, in a note editor", () => {
  it("reports what followed the closer, and it lands after the note in the text", async () => {
    const text = await renderEditor(scriptureUsj);
    const [key] = noteKeys(text.lexical);
    const loaded = requireDefined(text.editorRef.getNoteOps(key), "note ops");

    const row = await renderEditor(noteEditorStartUsj, noteEditorOptions);
    await act(async () => row.editorRef.applyUpdate([loaded[0]]));
    expect(row.editorRef.getOpsAfterNote(0)).toEqual([]);

    await act(async () => row.editorRef.selectNoteTextOffset(0, 5));
    await restCaret(row.lexical);
    await typeText(row.lexical, "\\f*");
    await restCaret(row.lexical);

    const noteOp = requireDefined(row.editorRef.getNoteOps(0), "note ops")[0];
    const after = requireDefined(row.editorRef.getOpsAfterNote(0), "ops after the note");
    expect(after.length).toBeGreaterThan(0);

    await act(async () => text.editorRef.replaceEmbedUpdate(key, [noteOp, ...after]));

    const para = text.editorRef.getUsj()?.content[2];
    expect(typeof para === "object" ? para.content : undefined).toEqual([
      { type: "verse", marker: "v", number: "1" },
      "before ",
      {
        type: "note",
        marker: "f",
        caller: "+",
        content: [{ type: "char", marker: "ft", closed: "false", content: ["alpha"] }],
      },
      " beta",
    ]);
  });

  it("reports nothing after a note that still holds all its text", async () => {
    const row = await renderEditor(noteEditorStartUsj, noteEditorOptions);
    const text = await renderEditor(scriptureUsj);
    const loaded = requireDefined(text.editorRef.getNoteOps(0), "note ops");
    await act(async () => row.editorRef.applyUpdate([loaded[0]]));
    await act(async () => row.editorRef.selectNoteTextOffset(0, 5));
    await restCaret(row.lexical);
    await typeText(row.lexical, "x");
    await restCaret(row.lexical);

    expect(row.editorRef.getOpsAfterNote(0)).toEqual([]);
    expect(row.editorRef.getOpsAfterNote(5)).toBeUndefined();
  });

  it("takes what followed the closer out, and one undo puts the closer and the text back", async () => {
    const text = await renderEditor(scriptureUsj);
    const [key] = noteKeys(text.lexical);
    const loaded = requireDefined(text.editorRef.getNoteOps(key), "note ops");
    const row = await renderEditor(noteEditorStartUsj, noteEditorOptions);
    await act(async () => row.editorRef.applyUpdate([loaded[0]]));
    const openNote = requireDefined(row.editorRef.getNoteOps(0), "note ops")[0];

    await act(async () => row.editorRef.selectNoteTextOffset(0, 5));
    await restCaret(row.lexical);
    await typeText(row.lexical, "\\f*");
    await restCaret(row.lexical);
    const closedNote = requireDefined(row.editorRef.getNoteOps(0), "note ops")[0];

    let taken: ReturnType<typeof row.editorRef.takeOpsAfterNote>;
    await act(async () => {
      taken = row.editorRef.takeOpsAfterNote(0);
    });
    expect(taken).toEqual([{ insert: " beta" }]);
    expect(row.editorRef.getOpsAfterNote(0)).toEqual([]);
    expect(row.editorRef.getNoteOps(0)?.[0]).toEqual(closedNote);

    await act(async () => row.editorRef.undo());
    expect(row.editorRef.getNoteOps(0)?.[0]).toEqual(openNote);
    expect(row.editorRef.getOpsAfterNote(0)).toEqual([]);

    await act(async () => row.editorRef.redo());
    expect(row.editorRef.getNoteOps(0)?.[0]).toEqual(closedNote);
    expect(row.editorRef.getOpsAfterNote(0)).toEqual([]);
  });

  it("takes nothing from a note with nothing after it, and nothing from a missing note", async () => {
    const row = await renderEditor(noteEditorStartUsj, noteEditorOptions);
    const text = await renderEditor(scriptureUsj);
    const loaded = requireDefined(text.editorRef.getNoteOps(0), "note ops");
    await act(async () => row.editorRef.applyUpdate([loaded[0]]));

    expect(row.editorRef.takeOpsAfterNote(0)).toEqual([]);
    expect(row.editorRef.takeOpsAfterNote(5)).toBeUndefined();
  });
});

describe("closing an unclosed note in the middle, in the text", () => {
  it("one undo takes the typed closer away and opens the note again", async () => {
    const text = await renderEditor(scriptureUsj);
    const [key] = noteKeys(text.lexical);
    const before = text.editorRef.getUsj();

    await act(async () => text.editorRef.selectNoteTextOffset(key, 5));
    await restCaret(text.lexical);
    await typeText(text.lexical, "\\f*");
    await restCaret(text.lexical);
    const para = text.editorRef.getUsj()?.content[2];
    expect(typeof para === "object" ? para.content : undefined).toEqual([
      { type: "verse", marker: "v", number: "1" },
      "before ",
      {
        type: "note",
        marker: "f",
        caller: "+",
        content: [{ type: "char", marker: "ft", closed: "false", content: ["alpha"] }],
      },
      " beta",
    ]);

    await act(async () => text.editorRef.undo());
    expect(text.editorRef.getUsj()).toEqual(before);
  });
});
