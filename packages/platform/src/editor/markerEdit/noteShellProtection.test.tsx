/**
 * `ViewOptions.isNoteShellEditable: false` — an expanded note's opening glyph and caller are
 * governed by the host's UI (Paratext 10's footnote editor has a dropdown for each, as does
 * Paratext 9), so the caret must not be able to enter them and typing must not be able to change
 * them.
 *
 * Left editable, that slot is not merely cosmetic: an edit to it looks accepted and does not
 * persist, and the note-scoped Tier-2 rebuild refuses a caller it cannot recognize — so anything
 * else typed there (a `\cat` category run, which Paratext 9 puts exactly there) is dropped with
 * it. Routing such typing to the note's CONTENT is what makes it fold, which is what
 * noteCategoryTyping.test.tsx covers from the other side.
 *
 * The assertions here are deliberately about what the DOCUMENT does under a keystroke, not about
 * how the shell is marked. `token` mode is necessary but not sufficient: Lexical redirects an
 * insertion at a token node's BOUNDARY, but a caret strictly inside one replaces the whole node
 * with the typed character, and nothing about the mode keeps a caret from landing there. A test
 * that asserts only the mode therefore says nothing about whether the shell is protected — so
 * each case here puts a caret somewhere in the shell, types, and checks the note.
 */
import {
  $noteContentText,
  findOnlyNote,
  findUsjNote,
  noteUsx,
  requireDefined,
  viewOptions,
} from "./markerEdit.test-helpers";
import { MarkerEditPlugin } from "./MarkerEditPlugin";
import {
  initialize as initializeSerialize,
  reset,
  serializeEditorState,
} from "../adaptors/usj-editor.adaptor";
import editorUsjAdaptor, {
  initialize as initializeDeserialize,
} from "../adaptors/editor-usj.adaptor";
import { act } from "@testing-library/react";
import {
  $createTextNode,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  $selectAll,
  KEY_DOWN_COMMAND,
  LexicalEditor,
  SELECT_ALL_COMMAND,
  SELECTION_CHANGE_COMMAND,
  TextNode,
} from "lexical";
import {
  $isMarkerNode,
  $isNoteNode,
  $noteEditableCallerNode,
  getEditableCallerText,
  NBSP,
  NoteNode,
} from "shared";
import { $isLiteralNoteShell } from "./tier2Rebuild.utils";
import { NoteShellCaretGuardPlugin, ViewOptions } from "shared-react";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { baseTestEnvironment } from "../../../../../libs/shared-react/src/plugins/usj/react-test.utils";

// jsdom doesn't implement `getBoundingClientRect` on `Range`; moving the caret gives the editor
// root DOM focus, and Lexical's post-commit scroll-into-view reads a Range rect. Stub it (a zero
// rect nothing here asserts on), same as the sibling marker-edit tests.
if (typeof Range.prototype.getBoundingClientRect !== "function")
  Range.prototype.getBoundingClientRect = () => new DOMRect();

const expandedEditable: ViewOptions = { ...viewOptions, noteMode: "expanded" };
const protectedShell: ViewOptions = { ...expandedEditable, isNoteShellEditable: false };

/** `serializedState` from the shared helpers always uses the default view options; these cases
 * differ ONLY in the view options, so the state has to be built with the one under test. */
async function mount(view: ViewOptions, noteAttrs = `closed="false"`) {
  initializeSerialize(undefined, undefined);
  initializeDeserialize(undefined);
  reset();
  const state = serializeEditorState(noteUsx(noteAttrs), view);
  return baseTestEnvironment(
    JSON.stringify({ root: state.root }),
    <>
      <MarkerEditPlugin viewOptions={view} />
      <NoteShellCaretGuardPlugin />
    </>,
  );
}

/** The note's opening glyph and caller text node — the two nodes that make up its shell. */
function $shellModes() {
  const note = findOnlyNote($getRoot());
  const children = note.getChildren();
  const opener = children.find((child) => $isMarkerNode(child));
  const caller = children.find(
    (child) => $isTextNode(child) && !$isMarkerNode(child) && child.getTextContent().includes("+"),
  );
  return {
    opener: $isTextNode(opener) ? opener.getMode() : undefined,
    caller: $isTextNode(caller) ? caller.getMode() : undefined,
  };
}

/** The note's opening `\f` glyph. */
function $opener(note: NoteNode): TextNode {
  const opener = note.getChildren().find((child) => $isMarkerNode(child));
  return requireDefined($isTextNode(opener) ? opener : undefined, "opening glyph not found");
}

/** The whole document as USJ — what the file would get. */
function usjOf(editor: LexicalEditor) {
  initializeDeserialize(undefined);
  return editorUsjAdaptor.deserializeEditorState(editor.getEditorState(), viewOptions);
}

/**
 * Put the caret at `offset` of the shell node `pick` returns, announcing the move the way a click
 * or an arrow press does — through `SELECTION_CHANGE_COMMAND`, which is where the guard listens.
 */
async function placeCaretInShell(
  editor: LexicalEditor,
  pick: (note: NoteNode) => TextNode,
  offset: number,
): Promise<void> {
  await act(async () => {
    editor.update(() => {
      const node = pick(findOnlyNote($getRoot()));
      node.select(offset, offset);
      // Dispatched INSIDE the update the move happens in, which is where Lexical dispatches it
      // for a real caret move — and the only way `$getPreviousSelection()` still reports where
      // the caret came FROM rather than where it just went.
      editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    });
  });
}

/**
 * Put the caret at `offset` of a shell node the way a CLICK does: the pointer is down when the
 * selection lands, which is the order a real click delivers (`pointerdown`, selection change,
 * `pointerup`).
 */
async function clickCaretInShell(
  editor: LexicalEditor,
  pick: (note: NoteNode) => TextNode,
  offset: number,
): Promise<void> {
  const doc = editor.getRootElement()?.ownerDocument ?? document;
  await act(async () => {
    doc.dispatchEvent(new Event("pointerdown", { bubbles: true }));
    editor.update(() => {
      const node = pick(findOnlyNote($getRoot()));
      node.select(offset, offset);
      editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    });
    doc.dispatchEvent(new Event("pointerup", { bubbles: true }));
  });
}

/**
 * Park the caret past the note's content, which is where a popover's `focus()` leaves it when it
 * has no selection to restore: `focus()` falls back to the document END, and the popover's document
 * holds nothing but the note.
 */
async function focusPastNoteContent(editor: LexicalEditor): Promise<void> {
  await act(async () => {
    editor.update(() => {
      findOnlyNote($getRoot()).getLastChild()?.selectEnd();
    });
  });
}

/** Type `text` one character at a time as a user gesture. */
async function typeText(editor: LexicalEditor, text: string): Promise<void> {
  for (const ch of text) {
    await act(async () => {
      editor.dispatchCommand(KEY_DOWN_COMMAND, new KeyboardEvent("keydown", { key: ch }));
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) selection.insertText(ch);
      });
    });
  }
}

describe("expanded note shell", () => {
  it("is atomic when the host governs the marker and caller", async () => {
    const { editor } = await mount(protectedShell);
    editor.getEditorState().read(() => {
      // `token` is Lexical's atomic text mode, and the mode the caret guard reads to know which
      // nodes it is protecting. It is necessary, not sufficient — see the cases below.
      expect($shellModes()).toEqual({ opener: "token", caller: "token" });
    });
  });

  it("stays editable by default, for a view whose only way to edit a note is as text", async () => {
    // The main editor's Markers view expands notes precisely so the marker and caller can be
    // typed. Defaulting to atomic would take that away.
    const { editor } = await mount(expandedEditable);
    editor.getEditorState().read(() => {
      expect($shellModes()).toEqual({ opener: "normal", caller: "normal" });
    });
  });

  describe("under a keystroke", () => {
    it.each([
      [
        "inside the caller",
        (note: NoteNode) => requireDefined($noteEditableCallerNode(note), "caller"),
        1,
      ],
      [
        "at the caller's start",
        (note: NoteNode) => requireDefined($noteEditableCallerNode(note), "caller"),
        0,
      ],
      ["inside the opening glyph", $opener, 1],
      ["at the opening glyph's start", $opener, 0],
      ["at the seam between the glyph and the caller", $opener, 2],
    ])("keeps the note whole with the caret %s", async (_label, pick, offset) => {
      const { editor } = await mount(protectedShell);

      await placeCaretInShell(editor, pick, offset);
      await typeText(editor, "X");

      editor.getEditorState().read(() => {
        const note = findOnlyNote($getRoot());
        // The shell itself is untouched: the glyph and the caller still read as they did, and the
        // note's own caller never took the keystroke.
        expect($opener(note).getTextContent()).toBe("\\f");
        expect($noteEditableCallerNode(note)?.getTextContent()).toBe(
          getEditableCallerText(note.getCaller()),
        );
        expect(note.getCaller()).toBe("+");
      });
      // And the keystroke landed in the note's CONTENT, at its start — the position the shell's
      // trailing edge hands typing to, and where a `\cat` run belongs. Never a lost caller, a
      // character leaked into the caller slot, or (for the glyph) a note unwrapped as damage.
      const note = findUsjNote(usjOf(editor)?.content);
      expect(note.marker).toBe("f");
      expect(note.caller).toBe("+");
      expect(note.content?.[0]).toBe("X");
    });
  });

  it("moves a caret that lands in the shell to the one position just past it", async () => {
    const { editor } = await mount(protectedShell);

    await placeCaretInShell(
      editor,
      (note) => requireDefined($noteEditableCallerNode(note), "caller"),
      1,
    );

    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      const caller = requireDefined($noteEditableCallerNode(findOnlyNote($getRoot())), "caller");
      // The shell's trailing edge: the caller's own end, which is the only offset in the shell
      // where a keystroke is redirected FORWARD into the note's content instead of rewriting a
      // shell node. On screen it is the position immediately after `\f + `.
      expect(selection.anchor.getNode().is(caller)).toBe(true);
      expect(selection.anchor.offset).toBe(caller.getTextContentSize());
    });
  });

  it("sends a CLICK in the shell to the note's content, wherever the caret was before", async () => {
    const { editor } = await mount(protectedShell);

    // The popover focuses its editor with no selection, which parks the caret at the document
    // end — inside this very note, past its content. Read as a direction that says "moving left
    // out of the note", and the click that follows lands past the whole note instead of in it.
    // A pointer names a destination, so it is not a direction at all.
    await focusPastNoteContent(editor);
    await clickCaretInShell(editor, $opener, 1);

    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      const caller = requireDefined($noteEditableCallerNode(findOnlyNote($getRoot())), "caller");
      expect(selection.anchor.getNode().is(caller)).toBe(true);
      expect(selection.anchor.offset).toBe(caller.getTextContentSize());
    });
  });

  // The popover saves only the note, so a caret in front of it would type bytes the popover's Save
  // drops. Every way of reaching that place lands at the start of the note's content instead.
  it.each([
    ["a click at the shell's very front", true, (note: NoteNode) => $opener(note).select(0, 0)],
    [
      "a click at the end of the text before the note",
      true,
      (note: NoteNode) => {
        const before = note.getPreviousSibling();
        if (!$isTextNode(before)) throw new Error("expected text before the note");
        before.select(before.getTextContentSize(), before.getTextContentSize());
      },
    ],
    [
      "a click on the paragraph's boundary right before the note",
      true,
      (note: NoteNode) => {
        const para = requireDefined(note.getParent() ?? undefined, "note paragraph");
        para.select(note.getIndexWithinParent(), note.getIndexWithinParent());
      },
    ],
    [
      "a keyboard move back out of the note's content, into the caller",
      false,
      (note: NoteNode) => requireDefined($noteEditableCallerNode(note), "caller").select(2, 2),
    ],
  ])("never rests the caret in front of it: %s", async (_label, isClick, place) => {
    const { editor } = await mount(protectedShell);
    // Start in the note's content, as a leftward arrow press out of the note does.
    await act(async () => {
      editor.update(() => $noteContentText(findOnlyNote($getRoot())).select(1, 1));
    });
    const doc = editor.getRootElement()?.ownerDocument ?? document;
    await act(async () => {
      if (isClick) doc.dispatchEvent(new Event("pointerdown", { bubbles: true }));
      editor.update(() => {
        place(findOnlyNote($getRoot()));
        editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
      });
      if (isClick) doc.dispatchEvent(new Event("pointerup", { bubbles: true }));
    });
    await typeText(editor, "X");

    const usj = usjOf(editor);
    const note = findUsjNote(usj?.content);
    expect(note.content?.[0]).toBe("X");
    const para = usj?.content.find((item) => typeof item === "object" && item.type === "para");
    expect(typeof para === "object" ? para.content : undefined).toContain("text");
  });

  it("puts its opening glyph back when Delete in front of the note removes it", async () => {
    const { editor } = await mount(protectedShell);
    // Lexical's `deleteCharacter` extends the selection one character into the glyph and removes
    // the range, which takes a `token` node whole.
    await act(async () => {
      editor.update(() => {
        const opener = $opener(findOnlyNote($getRoot()));
        opener.select(0, 0);
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
        selection.focus.set(opener.getKey(), 1, "text");
        selection.removeText();
      });
    });

    editor.getEditorState().read(() => {
      const note = findOnlyNote($getRoot());
      expect($opener(note).getTextContent()).toBe("\\f");
      expect($opener(note).getMode()).toBe("token");
    });
    const note = findUsjNote(usjOf(editor)?.content);
    expect(note).toMatchObject({ marker: "f", caller: "+" });
  });

  it("unwraps an editable note whose opener is deleted, whatever its content's text modes", async () => {
    const { editor } = await mount(expandedEditable);
    // Only the note's own shell says whether the host governs it: an atomic text in the content
    // does not make an editable shell a protected one.
    await act(async () => {
      editor.update(() => {
        const note = findOnlyNote($getRoot());
        const caller = requireDefined($noteEditableCallerNode(note), "caller");
        caller.insertAfter($createTextNode("x").setMode("token"));
        $opener(note).remove();
      });
    });

    editor.getEditorState().read(() => {
      expect(
        $getRoot()
          .getAllTextNodes()
          .some((node) => $isNoteNode(node.getParent())),
      ).toBe(false);
    });
  });

  it("leaves an editable shell alone, caret and keystroke both", async () => {
    const { editor } = await mount(expandedEditable);

    await placeCaretInShell(
      editor,
      (note) => requireDefined($noteEditableCallerNode(note), "caller"),
      1,
    );
    await typeText(editor, "X");

    editor.getEditorState().read(() => {
      // The Markers view edits the caller as text on purpose, and the engine folds what was typed
      // onto the note's own caller. The guard must be a no-op there, so that still happens.
      const note = findOnlyNote($getRoot());
      expect(note.getCaller()).toBe("X+");
      expect($noteEditableCallerNode(note)?.getTextContent()).toBe(getEditableCallerText("X+"));
    });
  });
});

describe("a closed note's closing glyph, with the shell protected", () => {
  /** The note's closing `\\f*` glyph. */
  function $closer(note: NoteNode): TextNode {
    const closer = note
      .getChildren()
      .find((child) => $isMarkerNode(child) && child.getMarkerSyntax() === "closing");
    return requireDefined($isTextNode(closer) ? closer : undefined, "closing glyph not found");
  }

  it.each([1, 2])(
    "keeps the note closed and whole, and the keystroke, with the caret inside it at %i",
    async (offset) => {
      const { editor } = await mount(protectedShell, "");

      await placeCaretInShell(editor, $closer, offset);
      await typeText(editor, "X");

      editor.getEditorState().read(() => {
        const note = findOnlyNote($getRoot());
        expect($closer(note).getTextContent()).toBe("\\f*");
        expect($closer(note).getMode()).toBe("token");
      });
      // The keystroke is the note's content: at its end, in front of the closer it was typed in —
      // the end of the `\ft` span, which shows no closer of its own.
      const note = findUsjNote(usjOf(editor)?.content);
      expect(note).not.toHaveProperty("closed");
      expect(note.content?.at(-1)).toEqual({
        type: "char",
        marker: "ft",
        closed: "false",
        content: ["A noteX"],
      });
    },
  );

  /** Whether the caret rests at the closer's front: the end of the note's content. */
  function $isAtCloserFront(): boolean {
    const selection = $getSelection();
    if (!$isRangeSelection(selection) || !selection.isCollapsed()) return false;
    const closer = $closer(findOnlyNote($getRoot()));
    return selection.anchor.getNode().is(closer) && selection.anchor.offset === 0;
  }

  // The popover saves only the note, so a caret that rests past the closer would type bytes the
  // popover's Save drops. Every way of reaching that place lands at the closer's front instead.
  it.each([
    [
      "a keyboard move out of the note's content, into the closer",
      false,
      (note: NoteNode) => $closer(note).select(1, 1),
    ],
    [
      "a keyboard move onto the closer's end",
      false,
      (note: NoteNode) => {
        const closer = $closer(note);
        closer.select(closer.getTextContentSize(), closer.getTextContentSize());
      },
    ],
    [
      "a click on the closer's end",
      true,
      (note: NoteNode) => {
        const closer = $closer(note);
        closer.select(closer.getTextContentSize(), closer.getTextContentSize());
      },
    ],
    [
      "a click at the start of the text after the note",
      true,
      (note: NoteNode) => {
        const after = note.getNextSibling();
        if (!$isTextNode(after)) throw new Error("expected text after the note");
        after.select(0, 0);
      },
    ],
    [
      "a click on the paragraph's boundary right after the note",
      true,
      (note: NoteNode) => {
        const para = requireDefined(note.getParent() ?? undefined, "note paragraph");
        para.select(note.getIndexWithinParent() + 1, note.getIndexWithinParent() + 1);
      },
    ],
  ])("never rests the caret past it: %s", async (_label, isClick, place) => {
    const { editor } = await mount(protectedShell, "");
    await act(async () => {
      editor.update(() => {
        const closer = $closer(findOnlyNote($getRoot()));
        closer.getPreviousSibling()?.selectEnd();
      });
    });
    const doc = editor.getRootElement()?.ownerDocument ?? document;
    await act(async () => {
      if (isClick) doc.dispatchEvent(new Event("pointerdown", { bubbles: true }));
      editor.update(() => {
        place(findOnlyNote($getRoot()));
        editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
      });
      if (isClick) doc.dispatchEvent(new Event("pointerup", { bubbles: true }));
    });

    expect(editor.getEditorState().read($isAtCloserFront)).toBe(true);
    await typeText(editor, "X");
    const { note, tail } = savedNoteAndTail(editor);
    expect(note.content).toEqual([
      { type: "char", marker: "ft", closed: "false", content: ["A noteX"] },
    ]);
    expect(tail).toEqual([" after"]);
  });

  /** The paragraph holding the note as the screen shows it, a no-break space read as a space. */
  function $noteParagraphText(): string {
    const para = requireDefined(
      findOnlyNote($getRoot()).getParent() ?? undefined,
      "note paragraph",
    );
    return para
      .getAllTextNodes()
      .map((node) => node.getTextContent())
      .join("")
      .replaceAll(NBSP, " ");
  }

  /** What the file gets for the note and the text after it: the note, and the paragraph's tail. */
  function savedNoteAndTail(editor: LexicalEditor) {
    const usj = usjOf(editor);
    const para = requireDefined(
      usj?.content.find(
        (item) =>
          typeof item === "object" &&
          item.type === "para" &&
          item.content?.some((child) => typeof child === "object" && child.type === "note"),
      ),
      "note paragraph in USJ",
    );
    if (typeof para !== "object") throw new Error("expected the paragraph object");
    const content = para.content ?? [];
    const noteIndex = content.findIndex(
      (child) => typeof child === "object" && child.type === "note",
    );
    return { note: findUsjNote(content), tail: content.slice(noteIndex + 1) };
  }

  /**
   * Remove one character of the closer the way Backspace or Delete does: Lexical's
   * `deleteCharacter` extends the selection over the next character with the native selection's
   * `modify` — which jsdom does not implement — and then removes the range. The range is that
   * extension: `[from, to]` offsets into the closer, from the caret's side.
   */
  async function deleteCloserCharacter(
    editor: LexicalEditor,
    anchor: (note: NoteNode) => { node: TextNode; offset: number },
    focusOffset: (closer: TextNode) => number,
  ): Promise<void> {
    await act(async () => {
      editor.update(() => {
        const note = findOnlyNote($getRoot());
        const from = anchor(note);
        const closer = $closer(note);
        from.node.select(from.offset, from.offset);
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
        selection.focus.set(closer.getKey(), focusOffset(closer), "text");
        selection.removeText();
      });
    });
  }

  it.each([
    [
      "Delete at the end of the note's text",
      (note: NoteNode) => {
        const node = $noteContentText(note);
        return { node, offset: node.getTextContentSize() };
      },
      () => 1,
    ],
    [
      "Backspace at its end",
      (note: NoteNode) => {
        const node = $closer(note);
        return { node, offset: node.getTextContentSize() };
      },
      (closer: TextNode) => closer.getTextContentSize() - 1,
    ],
  ])("is still there, on screen as in the file, after %s", async (_label, anchor, focusOffset) => {
    const { editor } = await mount(protectedShell, "");

    await deleteCloserCharacter(editor, anchor, focusOffset);

    editor.getEditorState().read(() => {
      const note = findOnlyNote($getRoot());
      expect($closer(note).getMode()).toBe("token");
      expect($noteParagraphText()).toMatch(/\\ft A note\\f\* after$/);
      // The caret is left in the note, in front of the closer: the next Backspace reaches the
      // note's text rather than the closer again.
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      const { anchor } = selection;
      const closer = $closer(note);
      expect(
        anchor.getNode().is(note)
          ? anchor.offset <= closer.getIndexWithinParent()
          : note.isParentOf(anchor.getNode()) && anchor.getNode().isBefore(closer),
      ).toBe(true);
    });
    const { note, tail } = savedNoteAndTail(editor);
    expect(note).not.toHaveProperty("closed");
    expect(note.content).toEqual([
      { type: "char", marker: "ft", closed: "false", content: ["A note"] },
    ]);
    expect(tail).toEqual([" after"]);
  });

  it("keeps text that still arrives behind it in the note's content, where the screen shows it", async () => {
    const { editor } = await mount(protectedShell, "");
    // Typed in the same update the caret is put there, before any selection listener can move it.
    await act(async () => {
      editor.update(() => {
        $closer(findOnlyNote($getRoot())).selectEnd();
        const selection = $getSelection();
        if ($isRangeSelection(selection)) selection.insertText("X");
      });
    });

    editor.getEditorState().read(() => {
      expect($noteParagraphText()).toMatch(/\\ft A noteX\\f\* after$/);
      expect($isMarkerNode(findOnlyNote($getRoot()).getLastChild())).toBe(true);
    });
    const { note, tail } = savedNoteAndTail(editor);
    expect(note.content).toEqual([
      { type: "char", marker: "ft", closed: "false", content: ["A noteX"] },
    ]);
    expect(tail).toEqual([" after"]);
  });

  it("puts text typed at its front in the span the screen shows it in", async () => {
    const { editor } = await mount(protectedShell, "");
    await act(async () => {
      editor.update(() => {
        $closer(findOnlyNote($getRoot())).select(0, 0);
        const selection = $getSelection();
        if ($isRangeSelection(selection)) selection.insertText("X");
      });
    });

    editor.getEditorState().read(() => {
      expect($noteParagraphText()).toMatch(/\\ft A noteX\\f\* after$/);
    });
    // The `\ft` has no closer of its own, so its bytes run on to the note's: a reload reads `X` as
    // the end of that span, and so must the file now.
    const { note } = savedNoteAndTail(editor);
    expect(note.content).toEqual([
      { type: "char", marker: "ft", closed: "false", content: ["A noteX"] },
    ]);
  });

  it("is never re-tokenized as a damaged literal", async () => {
    const { editor } = await mount(protectedShell, "");
    // Bytes no keystroke can put there: the shell is the host's, so its glyphs are not text a
    // settle reads back. Asked in the same update, before any transform can heal the bytes.
    let isLiteral: boolean | undefined;
    await act(async () => {
      editor.update(() => {
        const note = findOnlyNote($getRoot());
        $closer(note).setTextContent("\\xf*");
        isLiteral = $isLiteralNoteShell(note);
      });
    });
    expect(isLiteral).toBe(false);
  });
});

describe("a range selection beside a protected note shell", () => {
  /** The note's content text node (`A note`), and where a range starts in it. */
  function $contentText(note: NoteNode): TextNode {
    return $noteContentText(note);
  }

  /** The paragraph holding the note, in USJ, with the note itself taken out. */
  function outsideTheNote(editor: LexicalEditor) {
    const para = usjOf(editor)?.content.find(
      (item) =>
        typeof item === "object" &&
        item.type === "para" &&
        item.content?.some((child) => typeof child === "object" && child.type === "note"),
    );
    if (typeof para !== "object") throw new Error("the note's paragraph is gone");
    return (para.content ?? []).filter(
      (child) => typeof child !== "object" || child.type !== "note",
    );
  }

  /**
   * Make a range the way a keyboard extension or a select-all does — the selection changed in one
   * update, announced as a selection change — and then edit it in the next: type `X` or press
   * Backspace (`removeText`, which is what Backspace does to a range).
   */
  async function selectThenEdit(
    editor: LexicalEditor,
    select: (note: NoteNode) => void,
    edit: "type" | "backspace",
  ): Promise<void> {
    await act(async () => {
      editor.update(() => {
        select(findOnlyNote($getRoot()));
        editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
      });
    });
    await act(async () => {
      editor.update(() => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
        if (edit === "type") selection.insertText("X");
        else selection.removeText();
      });
    });
  }

  /** A range from the note content's `offset` to `focus`. */
  function rangeFrom(
    offset: number,
    focus: (note: NoteNode) => { key: string; offset: number; type: "text" | "element" },
  ) {
    return (note: NoteNode) => {
      const text = $contentText(note);
      text.select(offset, offset);
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      const to = focus(note);
      selection.focus.set(to.key, to.offset, to.type);
    };
  }

  const $paragraphStart = (note: NoteNode) => ({
    key: requireDefined(note.getParent() ?? undefined, "paragraph").getKey(),
    offset: 0,
    type: "element" as const,
  });
  const $paragraphEnd = (note: NoteNode) => {
    const para = requireDefined(note.getParent() ?? undefined, "paragraph");
    return { key: para.getKey(), offset: para.getChildrenSize(), type: "element" as const };
  };
  const $intoTheCaller = (note: NoteNode) => ({
    key: requireDefined($noteEditableCallerNode(note), "caller").getKey(),
    offset: 1,
    type: "text" as const,
  });
  const $intoTheCloser = (note: NoteNode) => {
    const closer = note.getLastChild();
    if (!$isMarkerNode(closer)) throw new Error("expected the closing glyph");
    return { key: closer.getKey(), offset: 2, type: "text" as const };
  };

  // The popover saves only the note, so a range that reaches past the note's content would edit or
  // remove bytes the popover's Save drops — or the note itself. Each range is kept to the content.
  it.each([
    ["Shift+Left into the caller, then typing", rangeFrom(0, $intoTheCaller), "type"],
    ["Shift+Home, then typing", rangeFrom(1, $paragraphStart), "type"],
    ["Shift+Home, then Backspace", rangeFrom(1, $paragraphStart), "backspace"],
    ["Shift+Right into the closer, then typing", rangeFrom(6, $intoTheCloser), "type"],
    ["Shift+End, then Backspace", rangeFrom(1, $paragraphEnd), "backspace"],
    ["Shift+End, then typing", rangeFrom(1, $paragraphEnd), "type"],
    ["select-all, then typing", () => $selectAll(), "type"],
    ["select-all, then Backspace", () => $selectAll(), "backspace"],
  ] as const)("keeps the note and what is outside it: %s", async (_label, select, edit) => {
    const { editor } = await mount(protectedShell, "");
    const outside = outsideTheNote(editor);

    await selectThenEdit(editor, select, edit);

    expect(outsideTheNote(editor)).toEqual(outside);
    const note = findUsjNote(usjOf(editor)?.content);
    expect(note).toMatchObject({ marker: "f", caller: "+" });
    expect(note).not.toHaveProperty("closed");
    editor.getEditorState().read(() => {
      const live = findOnlyNote($getRoot());
      expect($opener(live).getTextContent()).toBe("\\f");
      expect($noteEditableCallerNode(live)?.getTextContent()).toBe(getEditableCallerText("+"));
      expect($isMarkerNode(live.getLastChild())).toBe(true);
    });
    if (edit === "type") expect(JSON.stringify(note.content)).toContain("X");
  });

  it("confines Ctrl+A before the edit that follows it, with no selection change in between", async () => {
    const { editor } = await mount(protectedShell, "");
    const outside = outsideTheNote(editor);
    await act(async () => {
      editor.dispatchCommand(SELECT_ALL_COMMAND, undefined);
    });
    await act(async () => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) selection.insertText("X");
      });
    });

    expect(outsideTheNote(editor)).toEqual(outside);
    expect(findUsjNote(usjOf(editor)?.content)).toMatchObject({ caller: "+", content: ["X"] });
  });
});
