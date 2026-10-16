/**
 * A host's note editor ("row editor": one prefix-less paragraph holding one note, shell NOT
 * editable) must protect the note's CLOSING glyph `\f*` the way it protects the opening shell:
 *
 * 1. Backspace from a caret after `\f*` never deletes it - the caret goes to the end of the content.
 * 2. Forward Delete from anywhere before `\f*` never deletes it.
 * 3. A range over `\f*` is narrowed to the content when it is typed or deleted over.
 *
 * And for an UNCLOSED note (no closer), a caret at the end of the row must still land inside the
 * note's content.
 */
import { EditorOptions } from "./editor.model";
import { noteKeys, options, renderEditor, requireDefined } from "./noteEditorRef.test-helpers";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { afterAll, beforeAll } from "vitest";
import { $dfs } from "@lexical/utils";
import {
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  COMMAND_PRIORITY_LOW,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  DELETE_CHARACTER_COMMAND,
  LexicalEditor,
  SELECTION_CHANGE_COMMAND,
  TextNode,
} from "lexical";
import { $isMarkerNode, $isNoteNode, NoteNode } from "shared";

const originalRangeRect = Range.prototype.getBoundingClientRect;
beforeAll(() => {
  Range.prototype.getBoundingClientRect = () => new DOMRect();
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
    showParaMarkerPrefixes: false,
  },
};

const noteEditorStartUsj: Usj = { type: "USJ", version: "3.1", content: [{ type: "para" }] };

function makeNote(isClosed: boolean, text: string): MarkerObject {
  return {
    type: "note",
    marker: "f",
    caller: "+",
    ...(isClosed ? {} : { closed: "false" }),
    content: [{ type: "char", marker: "ft", closed: "false", content: [text] }],
  } as MarkerObject;
}

function scriptureUsj(noteObject: MarkerObject): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["Test Book"] },
      { type: "chapter", marker: "c", number: "1" },
      {
        type: "para",
        marker: "p",
        content: [{ type: "verse", marker: "v", number: "1" }, "before ", noteObject],
      },
    ],
  };
}

/** Mount a note editor the way a host does: empty paragraph, then the note applied as an op. */
async function mountRow(isClosed: boolean, text = "ab") {
  const scripture = await renderEditor(scriptureUsj(makeNote(isClosed, text)));
  const [key] = noteKeys(scripture.lexical);
  const loaded = requireDefined(scripture.editorRef.getNoteOps(key), "note ops");
  const row = await renderEditor(noteEditorStartUsj, noteEditorOptions);
  await act(async () => row.editorRef.applyUpdate([loaded[0]]));
  // Emulate the browser's own one-character delete (jsdom has no `Selection.modify`) at LOW
  // priority: every CRITICAL/HIGH/NORMAL guard sees the command first, only the RichText default
  // at EDITOR is replaced.
  row.lexical.registerCommand(
    DELETE_CHARACTER_COMMAND,
    (isBackward: boolean) => {
      $emulateCharacterDelete(isBackward);
      return true;
    },
    COMMAND_PRIORITY_LOW,
  );
  return row;
}

function $allTextNodes(): TextNode[] {
  return $dfs($getRoot())
    .map(({ node }) => node)
    .filter($isTextNode);
}

function $emulateCharacterDelete(isBackward: boolean) {
  const selection = $getSelection();
  if (!$isRangeSelection(selection)) return;
  if (!selection.isCollapsed()) {
    selection.removeText();
    return;
  }
  const texts = $allTextNodes();
  let node: TextNode | undefined;
  let offset: number;
  const anchor = selection.anchor;
  if (anchor.type === "text") {
    node = anchor.getNode() as TextNode;
    offset = anchor.offset;
  } else {
    // An element point: resolve to the adjacent text node's edge.
    const element = anchor.getNode();
    const before = texts.filter(
      (text) =>
        element.isParentOf(text) &&
        text.getIndexWithinParent() < anchor.offset &&
        text.getParent()?.is(element),
    );
    const after = texts.filter(
      (text) =>
        element.isParentOf(text) &&
        text.getIndexWithinParent() >= anchor.offset &&
        text.getParent()?.is(element),
    );
    if (isBackward && before.length) {
      node = before[before.length - 1];
      offset = node.getTextContentSize();
    } else if (!isBackward && after.length) {
      node = after[0];
      offset = 0;
    } else {
      // Fall back to the last/first text node of the element's subtree.
      const inside = texts.filter((text) => element.isParentOf(text));
      node = isBackward ? inside[inside.length - 1] : inside[0];
      offset = node && isBackward ? node.getTextContentSize() : 0;
    }
  }
  if (!node) return;
  let index = texts.findIndex((text) => text.is(node));
  // Step over node edges.
  while (isBackward ? offset === 0 : offset === texts[index].getTextContentSize()) {
    index += isBackward ? -1 : 1;
    if (index < 0 || index >= texts.length) return;
    offset = isBackward ? texts[index].getTextContentSize() : 0;
  }
  const target = texts[index];
  selection.anchor.set(target.getKey(), offset, "text");
  selection.focus.set(target.getKey(), isBackward ? offset - 1 : offset + 1, "text");
  selection.removeText();
}

async function syncDomSelection(lexical: LexicalEditor) {
  const point = lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) return undefined;
    const { key, offset, type } = selection.anchor;
    return { key, offset, type };
  });
  if (!point) return;
  const element = lexical.getElementByKey(point.key);
  if (!element) return;
  const domNode = point.type === "text" ? (element.firstChild ?? element) : element;
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

function $onlyNote(): NoteNode {
  return requireDefined(
    $dfs($getRoot())
      .map(({ node }) => node)
      .find($isNoteNode),
    "note",
  );
}

function $closer(note: NoteNode): TextNode | undefined {
  const last = note.getLastChild();
  return $isMarkerNode(last) && last.getMarkerSyntax() === "closing" ? last : undefined;
}

function $contentText(note: NoteNode, text: string): TextNode {
  return requireDefined(
    note
      .getAllTextNodes()
      .find((node) => !$isMarkerNode(node) && node.getTextContent().includes(text)),
    `content text ${text}`,
  );
}

/** Place a collapsed caret as a keyboard move or click does: through SELECTION_CHANGE_COMMAND. */
async function placeCaret(
  lexical: LexicalEditor,
  pick: () => { key: string; offset: number; type: "text" | "element" },
  isClick = false,
) {
  const doc = lexical.getRootElement()?.ownerDocument ?? document;
  await act(async () => {
    if (isClick) doc.dispatchEvent(new Event("pointerdown", { bubbles: true }));
    lexical.update(() => {
      const point = pick();
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) $onlyNote().selectStart();
      const range = $getSelection();
      if (!$isRangeSelection(range)) throw new Error("expected a range");
      range.anchor.set(point.key, point.offset, point.type);
      range.focus.set(point.key, point.offset, point.type);
      lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    });
    if (isClick) doc.dispatchEvent(new Event("pointerup", { bubbles: true }));
  });
}

async function press(lexical: LexicalEditor, isBackward: boolean, times: number) {
  for (let i = 0; i < times; i += 1) {
    await act(async () => {
      lexical.update(() => {
        lexical.dispatchCommand(DELETE_CHARACTER_COMMAND, isBackward);
      });
    });
    await restCaret(lexical);
  }
}

function expectCloserIntact(lexical: LexicalEditor) {
  lexical.getEditorState().read(() => {
    const note = $onlyNote();
    expect(requireDefined($closer(note), "closing glyph").getTextContent()).toBe("\\f*");
    // Nothing after the note in the row.
    expect(note.getNextSibling()).toBeNull();
  });
}

function expectCaretInsideContent(lexical: LexicalEditor) {
  lexical.getEditorState().read(() => {
    const note = $onlyNote();
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
    const node = selection.anchor.getNode();
    const closer = $closer(note);
    // Inside the note…
    expect(note.is(node) || note.isParentOf(node)).toBe(true);
    // …and not inside or after its closer.
    if (closer) {
      const inCloser = closer.is(node) && selection.anchor.offset > 0;
      expect(inCloser).toBe(false);
      if (note.is(node)) expect(selection.anchor.offset).toBeLessThan(note.getChildrenSize());
    }
  });
}

describe("closed note: the closing glyph is protected in a note editor", () => {
  it("a caret parked after \\f* (end of closer text) is moved before it", async () => {
    const row = await mountRow(true);
    await placeCaret(row.lexical, () => {
      const closer = requireDefined($closer($onlyNote()), "closer");
      return { key: closer.getKey(), offset: closer.getTextContentSize(), type: "text" };
    });
    expectCaretInsideContent(row.lexical);
  });

  it("a click after \\f* is moved before it", async () => {
    const row = await mountRow(true);
    await placeCaret(
      row.lexical,
      () => {
        const closer = requireDefined($closer($onlyNote()), "closer");
        return { key: closer.getKey(), offset: closer.getTextContentSize(), type: "text" };
      },
      true,
    );
    expectCaretInsideContent(row.lexical);
  });

  it("a caret at the row end (paragraph element end) is moved before \\f*", async () => {
    const row = await mountRow(true);
    await placeCaret(row.lexical, () => {
      const para = $onlyNote().getParentOrThrow();
      return { key: para.getKey(), offset: para.getChildrenSize(), type: "element" };
    });
    expectCaretInsideContent(row.lexical);
  });

  it("repeated Backspace from after \\f* never deletes it", async () => {
    const row = await mountRow(true);
    await placeCaret(row.lexical, () => {
      const closer = requireDefined($closer($onlyNote()), "closer");
      return { key: closer.getKey(), offset: closer.getTextContentSize(), type: "text" };
    });
    await press(row.lexical, true, 3);
    expectCloserIntact(row.lexical);
  });

  it("Backspace with the caret inside \\f* (after its backslash) never deletes it", async () => {
    const row = await mountRow(true);
    await placeCaret(row.lexical, () => {
      const closer = requireDefined($closer($onlyNote()), "closer");
      return { key: closer.getKey(), offset: 2, type: "text" };
    });
    await press(row.lexical, true, 2);
    expectCloserIntact(row.lexical);
  });

  it("forward Delete at the end of the content never deletes \\f*", async () => {
    const row = await mountRow(true);
    await placeCaret(row.lexical, () => {
      const text = $contentText($onlyNote(), "ab");
      return { key: text.getKey(), offset: text.getTextContent().indexOf("ab") + 2, type: "text" };
    });
    await press(row.lexical, false, 3);
    expectCloserIntact(row.lexical);
  });

  it("repeated forward Delete from the content start never deletes \\f*", async () => {
    const row = await mountRow(true);
    await placeCaret(row.lexical, () => {
      const text = $contentText($onlyNote(), "ab");
      return { key: text.getKey(), offset: text.getTextContent().indexOf("ab"), type: "text" };
    });
    await press(row.lexical, false, 12);
    expectCloserIntact(row.lexical);
  });

  it("forward Delete from the closer's leading edge never deletes it", async () => {
    const row = await mountRow(true);
    await placeCaret(row.lexical, () => {
      const closer = requireDefined($closer($onlyNote()), "closer");
      return { key: closer.getKey(), offset: 0, type: "text" };
    });
    await press(row.lexical, false, 3);
    expectCloserIntact(row.lexical);
  });

  describe("a range over \\f*", () => {
    async function selectRange(
      lexical: LexicalEditor,
      pick: () => [[string, number, "text" | "element"], [string, number, "text" | "element"]],
      narrowFirst: boolean,
    ) {
      await act(async () => {
        lexical.update(() => {
          const [anchor, focus] = pick();
          const selection = $getSelection();
          if (!$isRangeSelection(selection)) $onlyNote().selectStart();
          const range = $getSelection();
          if (!$isRangeSelection(range)) throw new Error("expected a range");
          range.anchor.set(...anchor);
          range.focus.set(...focus);
          if (narrowFirst) lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
        });
      });
    }
    const $fromContentToCloserEnd = (): [[string, number, "text"], [string, number, "text"]] => {
      const note = $onlyNote();
      const text = $contentText(note, "ab");
      const closer = requireDefined($closer(note), "closer");
      return [
        [text.getKey(), text.getTextContent().indexOf("ab") + 1, "text"],
        [closer.getKey(), closer.getTextContentSize(), "text"],
      ];
    };
    const $fromContentToRowEnd = (): [[string, number, "text"], [string, number, "element"]] => {
      const note = $onlyNote();
      const text = $contentText(note, "ab");
      const para = note.getParentOrThrow();
      return [
        [text.getKey(), text.getTextContent().indexOf("ab") + 1, "text"],
        [para.getKey(), para.getChildrenSize(), "element"],
      ];
    };
    const $insideCloser = (): [[string, number, "text"], [string, number, "text"]] => {
      const closer = requireDefined($closer($onlyNote()), "closer");
      return [
        [closer.getKey(), 1, "text"],
        [closer.getKey(), 3, "text"],
      ];
    };

    it.each([
      ["content->closer end, narrowed, typed", $fromContentToCloserEnd, true, "type"],
      ["content->closer end, unnarrowed, typed", $fromContentToCloserEnd, false, "type"],
      ["content->closer end, narrowed, deleted", $fromContentToCloserEnd, true, "delete"],
      ["content->closer end, unnarrowed, deleted", $fromContentToCloserEnd, false, "delete"],
      ["content->row end, narrowed, typed", $fromContentToRowEnd, true, "type"],
      ["content->row end, unnarrowed, deleted", $fromContentToRowEnd, false, "delete"],
      ["inside closer, narrowed, typed", $insideCloser, true, "type"],
      ["inside closer, unnarrowed, deleted", $insideCloser, false, "delete"],
    ] as const)("%s keeps \\f*", async (_label, pick, narrowFirst, action) => {
      const row = await mountRow(true);
      await selectRange(row.lexical, pick, narrowFirst);
      await act(async () => {
        row.lexical.update(() => {
          if (action === "type")
            row.lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "Z");
          else row.lexical.dispatchCommand(DELETE_CHARACTER_COMMAND, true);
        });
      });
      await restCaret(row.lexical);
      expectCloserIntact(row.lexical);
    });
  });
});

describe("unclosed note: the end of the note in a note editor", () => {
  it("a caret at the row end (after the note) lands inside the note's content", async () => {
    const row = await mountRow(false);
    await placeCaret(row.lexical, () => {
      const para = $onlyNote().getParentOrThrow();
      return { key: para.getKey(), offset: para.getChildrenSize(), type: "element" };
    });
    expectCaretInsideContent(row.lexical);
  });

  it("repeated Backspace from the note end deletes content only, never the shell", async () => {
    const row = await mountRow(false);
    await placeCaret(row.lexical, () => {
      const text = $contentText($onlyNote(), "ab");
      return { key: text.getKey(), offset: text.getTextContent().indexOf("ab") + 2, type: "text" };
    });
    await press(row.lexical, true, 8);
    row.lexical.getEditorState().read(() => {
      const note = $onlyNote();
      expect(note.getFirstChild()?.getTextContent()).toBe("\\f");
      expect(note.getNextSibling()).toBeNull();
    });
  });

  it("forward Delete at the note end leaves the note alone", async () => {
    const row = await mountRow(false);
    await placeCaret(row.lexical, () => {
      const text = $contentText($onlyNote(), "ab");
      return { key: text.getKey(), offset: text.getTextContent().indexOf("ab") + 2, type: "text" };
    });
    await press(row.lexical, false, 3);
    row.lexical.getEditorState().read(() => {
      const note = $onlyNote();
      expect(note.getTextContent()).toContain("ab");
    });
  });
});

describe("a note ending in a closed span", () => {
  it("a row-end caret goes before the note's closer, and typing there joins the note", async () => {
    const scripture = await renderEditor(
      scriptureUsj({
        type: "note",
        marker: "f",
        caller: "+",
        content: [
          { type: "char", marker: "ft", closed: "false", content: ["ab "] },
          { type: "char", marker: "fq", content: ["y"] },
        ],
      } as MarkerObject),
    );
    const [key] = noteKeys(scripture.lexical);
    const loaded = requireDefined(scripture.editorRef.getNoteOps(key), "note ops");
    const row = await renderEditor(noteEditorStartUsj, noteEditorOptions);
    await act(async () => row.editorRef.applyUpdate([loaded[0]]));
    await placeCaret(row.lexical, () => {
      const para = $onlyNote().getParentOrThrow();
      return { key: para.getKey(), offset: para.getChildrenSize(), type: "element" };
    });
    await restCaret(row.lexical);
    for (const character of "Z")
      await act(async () => {
        row.lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, character);
      });
    await restCaret(row.lexical);
    expectCloserIntact(row.lexical);
    expect(row.editorRef.getNoteOps(0)?.[0]).toEqual({
      insert: {
        note: {
          style: "f",
          caller: "+",
          contents: {
            ops: [
              { insert: "ab ", attributes: { char: { style: "ft", closed: "false" } } },
              { insert: "y", attributes: { char: { style: "fq" } } },
              { insert: "Z" },
            ],
          },
        },
      },
    });
  });
});
