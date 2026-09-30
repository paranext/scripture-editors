/**
 * Two edits a user makes inside a note, in the Scripture text or in a host's note editor:
 *
 * - Typing the note's own closer (`\f*`) into an UNCLOSED note (written with no closer) closes the
 *   note there, as USFM means it: the text then shows it like any other closed note - its caller,
 *   in a view that collapses notes - and whatever followed the closer belongs to the paragraph.
 * - Committing an unknown marker (`\df `, as a marker palette's Space does) inside a note's run
 *   leaves the caret right after it, the same as for a known marker, so the next keystroke is note
 *   text the host saves rather than an edit to some glyph further along.
 */
import { EditorOptions, EditorRef } from "./editor.model";
import { noteKeys, options, renderEditor, requireDefined } from "./noteEditorRef.test-helpers";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { afterAll, beforeAll } from "vitest";
import {
  $getRoot,
  $getSelection,
  $isRangeSelection,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  LexicalEditor,
} from "lexical";
import { $dfs, $findMatchingParent } from "@lexical/utils";
import { $isMarkerNode, $isNoteNode, NoteNode } from "shared";

const originalRangeRect = Range.prototype.getBoundingClientRect;
beforeAll(() => {
  Range.prototype.getBoundingClientRect = () =>
    ({
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: 0,
      height: 0,
      toJSON: () => ({}),
    }) as DOMRect;
});
afterAll(() => {
  Range.prototype.getBoundingClientRect = originalRangeRect;
});

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
  },
};

function usjWith(noteObject: MarkerObject, after: string[] = []): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["Test Book"] },
      { type: "chapter", marker: "c", number: "1" },
      {
        type: "para",
        marker: "p",
        content: [{ type: "verse", marker: "v", number: "1" }, "before ", noteObject, ...after],
      },
    ],
  };
}

async function typeText(lexical: LexicalEditor, text: string) {
  for (const character of text)
    await act(async () => {
      lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, character);
    });
}

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

function caretText(lexical: LexicalEditor) {
  return lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) return undefined;
    const node = selection.anchor.getNode();
    return { text: node.getTextContent(), offset: selection.anchor.offset, type: node.getType() };
  });
}

function unclosedNote(text: string): MarkerObject {
  return {
    type: "note",
    marker: "f",
    caller: "+",
    closed: "false",
    content: [{ type: "char", marker: "ft", closed: "false", content: [text] }],
  } as MarkerObject;
}

function paraContent(usj: Usj | undefined) {
  const para = usj?.content[2];
  return typeof para === "object" ? para.content : undefined;
}

function $onlyNote(): NoteNode {
  const note = $dfs($getRoot())
    .map(({ node }) => node)
    .find($isNoteNode);
  return requireDefined(note, "note");
}

async function typeCloserAt(lexical: LexicalEditor, editorRef: EditorRef, offset: number) {
  await act(async () => editorRef.selectNoteTextOffset(0, offset));
  await restCaret(lexical);
  await typeText(lexical, "\\f*");
  await restCaret(lexical);
}

describe("typing a note's own closer into an unclosed note", () => {
  it("closes the note, which the text then shows as its caller", async () => {
    const changes: Usj[] = [];
    const { editorRef, lexical } = await renderEditor(
      usjWith(unclosedNote("alpha")),
      undefined,
      undefined,
      (usj) => changes.push(usj),
    );

    await typeCloserAt(lexical, editorRef, 5);

    const closedNote = {
      type: "note",
      marker: "f",
      caller: "+",
      content: [{ type: "char", marker: "ft", closed: "false", content: ["alpha"] }],
    };
    expect(paraContent(editorRef.getUsj())).toEqual([
      { type: "verse", marker: "v", number: "1" },
      "before ",
      closedNote,
    ]);
    expect(paraContent(changes.at(-1))).toContainEqual(closedNote);
    lexical.getEditorState().read(() => {
      expect($onlyNote().getIsCollapsed()).toBe(true);
      // The caret is where the user was typing: past the note, not inside its hidden content.
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      expect($findMatchingParent(selection.anchor.getNode(), $isNoteNode)).toBeNull();
    });
  });

  it("is an edit to the note, not a new note: the note keeps its key", async () => {
    const insertedKeys: (string | undefined)[] = [];
    const { editorRef, lexical } = await renderEditor(
      usjWith(unclosedNote("alpha beta")),
      undefined,
      undefined,
      (_usj, _ops, _source, insertedNodeKey) => insertedKeys.push(insertedNodeKey),
    );
    const [key] = noteKeys(lexical);

    await act(async () => editorRef.selectNoteTextOffset(key, 5));
    await restCaret(lexical);
    await act(async () => {
      editorRef.commitTypedCloser("f");
    });
    await restCaret(lexical);

    expect(noteKeys(lexical)).toEqual([key]);
    lexical.getEditorState().read(() => expect($onlyNote().getIsCollapsed()).toBe(true));
    expect(insertedKeys.length).toBeGreaterThan(0);
    expect(insertedKeys.filter((insertedKey) => insertedKey !== undefined)).toEqual([]);
  });

  it("moves what followed the closer out of the note, into the paragraph", async () => {
    const { editorRef, lexical } = await renderEditor(usjWith(unclosedNote("alpha beta")));

    await typeCloserAt(lexical, editorRef, 5);

    expect(paraContent(editorRef.getUsj())).toEqual([
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

  it("closes it in a note editor too, and the text it is applied to shows it closed", async () => {
    const row = await renderEditor(usjWith(unclosedNote("alpha")), noteEditorOptions);
    await typeCloserAt(row.lexical, row.editorRef, 5);

    const [noteOp] = requireDefined(row.editorRef.getNoteOps(0), "note ops");
    expect((noteOp.insert as { note?: object }).note).not.toHaveProperty("closed");
    row.lexical.getEditorState().read(() => {
      const note = $onlyNote();
      expect(note.getIsCollapsed()).toBe(false);
      const last = note.getLastChild();
      expect($isMarkerNode(last) && last.getMarkerSyntax() === "closing").toBe(true);
    });

    const text = await renderEditor(usjWith(unclosedNote("alpha")));
    const [key] = noteKeys(text.lexical);
    await act(async () => text.editorRef.replaceEmbedUpdate(key, [noteOp]));

    const appliedNote = paraContent(text.editorRef.getUsj())?.find(
      (item): item is MarkerObject => typeof item === "object" && item.type === "note",
    );
    expect(appliedNote).not.toHaveProperty("closed");
    text.lexical.getEditorState().read(() => expect($onlyNote().getIsCollapsed()).toBe(true));
  });

  it("leaves a second closer typed into a closed note unmatched", async () => {
    const closed = {
      type: "note",
      marker: "f",
      caller: "+",
      content: [{ type: "char", marker: "ft", closed: "false", content: ["alpha beta"] }],
    } as MarkerObject;
    const { editorRef, lexical } = await renderEditor(usjWith(closed), noteEditorOptions);

    await typeCloserAt(lexical, editorRef, 5);

    expect(JSON.stringify(paraContent(editorRef.getUsj()))).toContain(
      '{"type":"unmatched","marker":"f*"}',
    );
  });
});

describe("committing an unknown marker inside a note's run", () => {
  it.each([
    ["without a category", undefined],
    ["with a \\cat category", "People"],
  ])("keeps the caret after it and saves what is typed next, %s", async (_label, category) => {
    const withCategory = {
      type: "note",
      marker: "f",
      caller: "+",
      ...(category !== undefined && { category }),
      content: [{ type: "char", marker: "ft", content: ["alpha beta"] }],
    } as MarkerObject;
    const { editorRef, lexical } = await renderEditor(usjWith(withCategory), noteEditorOptions);
    await act(async () => editorRef.selectNoteTextOffset(0, 6));
    await restCaret(lexical);

    await act(async () => {
      editorRef.commitTypedMarker("df");
    });
    await restCaret(lexical);
    await typeText(lexical, "Z");
    await restCaret(lexical);

    const typed = requireDefined(caretText(lexical), "caret");
    expect(typed.text.slice(0, typed.offset).endsWith("Z")).toBe(true);
    const [noteOp] = requireDefined(editorRef.getNoteOps(0), "note ops");
    expect(JSON.stringify(noteOp)).toContain(
      '{"insert":"Zbeta","attributes":{"char":{"style":"df","closed":"false"}}}',
    );
  });
});
