// Should only be used on nodes that are initialized in the test environment.
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { $createImmutableVerseNode, ImmutableVerseNode } from "../../nodes/usj";
import { EmptyNoteCaretGuardPlugin } from "./EmptyNoteCaretGuardPlugin";
import { EmptyVerseCaretGuardPlugin } from "./EmptyVerseCaretGuardPlugin";
import { baseTestEnvironment, deleteTextAtSelection, settle } from "./react-test.utils";
import { TextSpacingPlugin } from "./TextSpacingPlugin";
import { TrailingNoteCaretGuardPlugin } from "./TrailingNoteCaretGuardPlugin";
import { createEmptyHistoryState, HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $createTextNode,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  $setSelection,
  BLUR_COMMAND,
  FOCUS_COMMAND,
  LexicalEditor,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  SKIP_DOM_SELECTION_TAG,
  TextNode,
  UNDO_COMMAND,
} from "lexical";
import { $createParaNode, CURSOR_CHANGE_TAG, CURSOR_PLACEHOLDER_CHAR, ParaNode } from "shared";

// jsdom implements no layout: Lexical reads a Range rect when it writes the DOM selection.
if (typeof Range.prototype.getBoundingClientRect !== "function") {
  Range.prototype.getBoundingClientRect = function getBoundingClientRect(): DOMRect {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      toJSON() {
        return this;
      },
    };
  };
}

async function guardedEnvironment($initialEditorState?: () => void) {
  return baseTestEnvironment($initialEditorState, <EmptyVerseCaretGuardPlugin />);
}

/** Fire the selection-change command the plugin listens on, inside act. */
async function dispatchSelectionChange(editor: LexicalEditor) {
  await act(async () => {
    editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
  });
}

describe("EmptyVerseCaretGuardPlugin", () => {
  it("hosts the caret in a verse whose text was fully deleted", async () => {
    let content: TextNode;
    const { editor } = await guardedEnvironment(() => {
      content = $createTextNode("hello");
      $getRoot().append($createParaNode("p").append($createImmutableVerseNode("1"), content));
    });

    // Delete all of verse 1's text: the caret collapses to a hostless element point.
    await deleteTextAtSelection(editor, content!, 0, content!, 5);
    await dispatchSelectionChange(editor);

    editor.getEditorState().read(() => {
      const para = $getRoot().getFirstChild() as ParaNode;
      const children = para.getChildren();
      // A single zero-width-space host now follows the verse marker.
      expect(children.length).toBe(2);
      expect(children[0]).toBeInstanceOf(ImmutableVerseNode);
      expect($isTextNode(children[1])).toBe(true);
      expect(children[1].getTextContent()).toBe(CURSOR_PLACEHOLDER_CHAR);
      // The caret rests inside that host, so it is visible and typing lands in the verse.
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      expect(selection.isCollapsed()).toBe(true);
      expect(selection.anchor.key).toBe(children[1].getKey());
    });
  });

  it("does not add a host when the verse still has text", async () => {
    let content: TextNode;
    const { editor } = await guardedEnvironment(() => {
      content = $createTextNode("hello");
      $getRoot().append($createParaNode("p").append($createImmutableVerseNode("1"), content));
    });

    // Delete only part of the text, then collapse the caret into the remaining text.
    await deleteTextAtSelection(editor, content!, 0, content!, 2);
    await dispatchSelectionChange(editor);

    editor.getEditorState().read(() => {
      const para = $getRoot().getFirstChild() as ParaNode;
      const hasPlaceholder = para
        .getChildren()
        .some((n) => $isTextNode(n) && n.getTextContent().includes(CURSOR_PLACEHOLDER_CHAR));
      expect(hasPlaceholder).toBe(false);
    });
  });

  it("strips the placeholder once real text is typed into the host", async () => {
    let content: TextNode;
    const { editor } = await guardedEnvironment(() => {
      content = $createTextNode("hi");
      $getRoot().append($createParaNode("p").append($createImmutableVerseNode("1"), content));
    });
    await deleteTextAtSelection(editor, content!, 0, content!, 2);
    await dispatchSelectionChange(editor);

    // Type into the host: its placeholder should be dropped, leaving only the typed text.
    await act(async () => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) selection.insertText("X");
      });
    });

    editor.getEditorState().read(() => {
      const para = $getRoot().getFirstChild() as ParaNode;
      const text = para.getChildren().find((n): n is TextNode => $isTextNode(n));
      expect(text?.getTextContent()).toBe("X");
    });
  });

  it("removes the host when the caret leaves the empty verse", async () => {
    let v1Content: TextNode;
    let v2Content: TextNode;
    const { editor } = await guardedEnvironment(() => {
      v1Content = $createTextNode("hi");
      v2Content = $createTextNode("there");
      $getRoot().append(
        $createParaNode("p").append(
          $createImmutableVerseNode("1"),
          v1Content,
          $createImmutableVerseNode("2"),
          v2Content,
        ),
      );
    });

    // Empty verse 1 → a host is added and the caret rests in it.
    await deleteTextAtSelection(editor, v1Content!, 0, v1Content!, 2);
    await dispatchSelectionChange(editor);
    editor.getEditorState().read(() => {
      const para = $getRoot().getFirstChild() as ParaNode;
      expect(
        para
          .getChildren()
          .some((n) => $isTextNode(n) && n.getTextContent() === CURSOR_PLACEHOLDER_CHAR),
      ).toBe(true);
    });

    // Move the caret into verse 2's text: the now-stale host should be cleaned up.
    await act(async () => {
      editor.update(() => {
        v2Content!.select(0, 0);
      });
    });
    await dispatchSelectionChange(editor);

    editor.getEditorState().read(() => {
      const para = $getRoot().getFirstChild() as ParaNode;
      const hasPlaceholder = para
        .getChildren()
        .some((n) => $isTextNode(n) && n.getTextContent().includes(CURSOR_PLACEHOLDER_CHAR));
      expect(hasPlaceholder).toBe(false);
    });
  });

  it("removes the host once a range selection spans the emptied verse (so copy/cut can't include it)", async () => {
    // The clipboard path (ClipboardPlugin -> Lexical's COPY/CUT) serializes the node tree, not USJ,
    // so it has no placeholder awareness. Copying requires a range selection, and the host only
    // exists while the caret rests collapsed in the empty verse — so extending the selection across
    // the verse (what a user does before Ctrl+C/Ctrl+X) must remove it first.
    let para: ParaNode;
    let v1Content: TextNode;
    let v2Content: TextNode;
    const { editor } = await guardedEnvironment(() => {
      v1Content = $createTextNode("hi");
      v2Content = $createTextNode("there");
      para = $createParaNode("p");
      $getRoot().append(
        para.append(
          $createImmutableVerseNode("1"),
          v1Content,
          $createImmutableVerseNode("2"),
          v2Content,
        ),
      );
    });

    // Empty verse 1 → host added while the caret rests in it.
    await deleteTextAtSelection(editor, v1Content!, 0, v1Content!, 2);
    await dispatchSelectionChange(editor);
    editor.getEditorState().read(() => {
      expect(
        para!
          .getChildren()
          .some((n) => $isTextNode(n) && n.getTextContent() === CURSOR_PLACEHOLDER_CHAR),
      ).toBe(true);
    });

    // Drag-select across the emptied verse into verse 2.
    await act(async () => {
      editor.update(() => {
        const range = $createRangeSelection();
        range.anchor.set(para!.getKey(), 0, "element");
        range.focus.set(v2Content!.getKey(), 5, "text");
        $setSelection(range);
      });
    });
    await dispatchSelectionChange(editor);

    editor.getEditorState().read(() => {
      const hasPlaceholder = para!
        .getChildren()
        .some((n) => $isTextNode(n) && n.getTextContent().includes(CURSOR_PLACEHOLDER_CHAR));
      expect(hasPlaceholder).toBe(false);
      // What the clipboard would serialize from this selection carries no placeholder.
      const selection = $getSelection();
      expect($isRangeSelection(selection) ? selection.getTextContent() : "").not.toContain(
        CURSOR_PLACEHOLDER_CHAR,
      );
    });
  });
});

describe("EmptyVerseCaretGuardPlugin with TextSpacingPlugin", () => {
  it("keeps the host in an empty verse followed by another verse", async () => {
    // The real editor mounts TextSpacingPlugin too. A host sits directly before the next verse
    // marker, which is where that plugin adds its structural trailing space — and a space would
    // make the host look typed into, so it was stripped and removed, dropping the caret back to
    // the hostless element point it exists to repair.
    let para: ParaNode;
    const { editor } = await baseTestEnvironment(
      () => {
        para = $createParaNode("p");
        $getRoot().append(
          para.append($createImmutableVerseNode("3"), $createImmutableVerseNode("4")),
        );
      },
      <>
        <TextSpacingPlugin />
        <EmptyVerseCaretGuardPlugin />
      </>,
    );

    // Rest the caret right after verse 3's marker, as a click on its ellipsis does.
    await act(async () => {
      editor.update(() => {
        para!.select(1, 1);
      });
    });
    await dispatchSelectionChange(editor);

    editor.getEditorState().read(() => {
      const children = para!.getChildren();
      expect(children.length).toBe(3);
      expect(children[1].getTextContent()).toBe(CURSOR_PLACEHOLDER_CHAR);
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      expect(selection.isCollapsed()).toBe(true);
      expect(selection.focus.key).toBe(children[1].getKey());
    });
  });

  it("still spaces typed text before the next verse once it replaces the host", async () => {
    let para: ParaNode;
    const { editor } = await baseTestEnvironment(
      () => {
        para = $createParaNode("p");
        $getRoot().append(
          para.append($createImmutableVerseNode("3"), $createImmutableVerseNode("4")),
        );
      },
      <>
        <TextSpacingPlugin />
        <EmptyVerseCaretGuardPlugin />
      </>,
    );
    await act(async () => {
      editor.update(() => para!.select(1, 1));
    });
    await dispatchSelectionChange(editor);

    await act(async () => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) selection.insertText("a");
      });
    });

    expect(editor.getEditorState().read(() => para!.getChildAtIndex(1)?.getTextContent())).toBe(
      "a ",
    );
  });

  it("spaces text pasted in front of the host against the next verse in the paste's own commit", async () => {
    let para: ParaNode;
    const { editor } = await baseTestEnvironment(
      () => {
        para = $createParaNode("p");
        $getRoot().append(
          para.append($createImmutableVerseNode("3"), $createImmutableVerseNode("4")),
        );
      },
      <>
        <TextSpacingPlugin />
        <EmptyVerseCaretGuardPlugin />
      </>,
    );
    await act(async () => {
      editor.update(() => para!.select(1, 1));
    });
    await dispatchSelectionChange(editor);

    // A rich paste inserts nodes before the host rather than typing into it.
    await act(async () => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) selection.insertNodes([$createTextNode("pasted")]);
      });
    });

    // The structural space before verse 4 is part of the paste's commit, which the host
    // application hears about — not of the later commit that removes the host, which it doesn't.
    expect(editor.getEditorState().read(() => para!.getTextContent())).toContain("pasted ");
  });

  it("keeps a single trailing space on text that lands in the host, whichever transform runs first", async () => {
    let para: ParaNode;
    const { editor } = await baseTestEnvironment(
      () => {
        para = $createParaNode("p");
        $getRoot().append(
          para.append($createImmutableVerseNode("3"), $createImmutableVerseNode("4")),
        );
      },
      // TextSpacingPlugin's transform registered before the guard's.
      <>
        <TextSpacingPlugin />
        <EmptyVerseCaretGuardPlugin />
      </>,
    );
    await act(async () => {
      editor.update(() => para!.select(1, 1));
    });
    await dispatchSelectionChange(editor);

    await act(async () => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) selection.insertText("word ");
      });
    });

    expect(editor.getEditorState().read(() => para!.getChildAtIndex(1)?.getTextContent())).toBe(
      "word ",
    );
  });
});

describe("EmptyVerseCaretGuardPlugin host lifecycle", () => {
  /**
   * Verse 3 is empty and verse 4 follows it; the caret is hosted right after verse 3's marker.
   * Every caret guard the platform editor mounts is mounted, since each instance runs the host
   * lifecycle on the same nodes.
   */
  async function hostedEmptyVerse(extraPlugins?: JSX.Element) {
    let para!: ParaNode;
    const { editor } = await baseTestEnvironment(
      () => {
        para = $createParaNode("p");
        $getRoot().append(
          para.append($createImmutableVerseNode("3"), $createImmutableVerseNode("4")),
        );
      },
      <>
        <EmptyNoteCaretGuardPlugin />
        <EmptyVerseCaretGuardPlugin />
        <TrailingNoteCaretGuardPlugin />
        {extraPlugins}
      </>,
    );
    // The editor has focus, as it does while the user types: jsdom resets the DOM selection to the
    // start of an editor Lexical has to focus itself (an undo does), which a browser does not.
    await act(async () => {
      editor.getRootElement()?.focus();
    });
    await settle();
    await act(async () => {
      editor.update(() => para.select(1, 1));
    });
    await dispatchSelectionChange(editor);
    await settle();
    const host = editor.getEditorState().read(() => para.getChildAtIndex(1));
    if (!$isTextNode(host)) throw new Error("expected the guard to host the caret");
    return { editor, para, host };
  }

  async function insertText(editor: LexicalEditor, text: string) {
    await act(async () => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) selection.insertText(text);
      });
    });
  }

  /** A Thai phrase whose zero-width space is a real word break. */
  const thai = `ภาษา${CURSOR_PLACEHOLDER_CHAR}ไทย`;

  /** The text of every node in `para` that carries a placeholder alongside other text. */
  function leakedPlaceholders(editor: LexicalEditor, para: ParaNode): string[] {
    return editor.getEditorState().read(() =>
      para
        .getChildren()
        .filter((n): n is TextNode => $isTextNode(n))
        .map((n) => n.getTextContent())
        .filter(
          (text) => text.includes(CURSOR_PLACEHOLDER_CHAR) && text !== CURSOR_PLACEHOLDER_CHAR,
        ),
    );
  }

  it("keeps pasted nodes from merging with the host", async () => {
    const { editor, para } = await hostedEmptyVerse();

    // A rich paste inserts nodes at the caret rather than typing into the host.
    await act(async () => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) selection.insertNodes([$createTextNode("pasted")]);
      });
    });

    expect(leakedPlaceholders(editor, para)).toEqual([]);
    expect(editor.getEditorState().read(() => para.getTextContent())).toContain("pasted");
  });

  it("strips only the host's own placeholder from text that lands in it", async () => {
    const { editor, para } = await hostedEmptyVerse();

    await insertText(editor, thai);

    expect(editor.getEditorState().read(() => para.getTextContent())).toBe(thai);
  });

  it("strips the placeholder from a host that undo restored", async () => {
    const historyState = createEmptyHistoryState();
    const { editor, para } = await hostedEmptyVerse(
      <HistoryPlugin externalHistoryState={historyState} />,
    );

    await insertText(editor, "a");
    await settle();
    await act(async () => {
      editor.dispatchCommand(UNDO_COMMAND, undefined);
    });
    await settle();
    // Undo brings the bare host back. In a browser the caret comes back inside it with the state's
    // own selection; jsdom loses that selection, so put the caret back where undo leaves it.
    await act(async () => {
      editor.update(() => {
        const restored = para.getChildAtIndex(1);
        if (!$isTextNode(restored)) throw new Error("expected undo to restore the host");
        restored.select(0, 0);
      });
    });
    await insertText(editor, "b");

    expect(leakedPlaceholders(editor, para)).toEqual([]);
  });

  it("keeps every line's own zero-width spaces when a multi-line paste lands in the host", async () => {
    const { editor } = await hostedEmptyVerse();
    const secondLine = `บรรทัด${CURSOR_PLACEHOLDER_CHAR}สอง`;

    // A plain-text paste of two lines: Lexical splits the host to insert the line break, and the
    // split piece inherits the host's mark.
    await act(async () => {
      editor.update(() => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) return;
        selection.insertText(thai);
        selection.insertParagraph();
        selection.insertText(secondLine);
      });
    });

    editor.getEditorState().read(() => {
      const paras = $getRoot().getChildren();
      expect(paras.map((p) => p.getTextContent())).toEqual([thai, secondLine]);
    });
  });

  it("removes nothing when the host's selected placeholder is replaced", async () => {
    const { editor, para, host } = await hostedEmptyVerse();
    // A selection over the placeholder that no selectionchange has reported yet: what lands
    // replaces it.
    await act(async () => {
      editor.update(() => {
        const range = $createRangeSelection();
        range.anchor.set(host.getKey(), 0, "text");
        range.focus.set(host.getKey(), 1, "text");
        $setSelection(range);
      });
    });

    await insertText(editor, thai);

    expect(editor.getEditorState().read(() => para.getTextContent())).toBe(thai);
  });

  it("keeps a zero-width space typed as the host's first character", async () => {
    const { editor, para } = await hostedEmptyVerse();
    const khmer = "ក";

    // On the Khmer NIDA layout a zero-width space is typed with Space.
    await insertText(editor, CURSOR_PLACEHOLDER_CHAR);
    await insertText(editor, khmer);

    expect(editor.getEditorState().read(() => para.getTextContent())).toBe(
      CURSOR_PLACEHOLDER_CHAR + khmer,
    );
  });

  it("keeps a zero-width space typed after undo and redo through the host", async () => {
    const historyState = createEmptyHistoryState();
    const { editor, para } = await hostedEmptyVerse(
      <HistoryPlugin externalHistoryState={historyState} />,
    );

    await insertText(editor, "a");
    await settle();
    await act(async () => {
      editor.dispatchCommand(UNDO_COMMAND, undefined);
    });
    await settle();
    // The caret comes back into the restored host, and the guards take it over.
    await act(async () => {
      editor.update(() => {
        const restored = para.getChildAtIndex(1);
        if ($isTextNode(restored)) restored.select(0, 0);
      });
    });
    await dispatchSelectionChange(editor);
    await act(async () => {
      editor.dispatchCommand(REDO_COMMAND, undefined);
    });
    await settle();
    await act(async () => {
      editor.update(() => {
        const typed = para.getChildAtIndex(1);
        if ($isTextNode(typed)) typed.select(1, 1);
      });
    });
    await dispatchSelectionChange(editor);
    await insertText(editor, thai);

    expect(editor.getEditorState().read(() => para.getTextContent())).toBe("a" + thai);
  });

  it("leaves the redo stack alone when the caret leaves a host undo restored", async () => {
    const historyState = createEmptyHistoryState();
    const { editor, para } = await hostedEmptyVerse(
      <HistoryPlugin externalHistoryState={historyState} />,
    );

    await insertText(editor, "a");
    await settle();
    await act(async () => {
      editor.dispatchCommand(UNDO_COMMAND, undefined);
    });
    await settle();
    await act(async () => {
      editor.update(() => {
        const restored = para.getChildAtIndex(1);
        if (!$isTextNode(restored)) throw new Error("expected undo to restore the host");
        restored.select(0, 0);
      });
    });
    await dispatchSelectionChange(editor);
    expect(historyState.redoStack.length).toBe(1);

    // The caret leaves for the start of the paragraph: the restored host, which the guards took
    // over, is removed without that removal becoming an undo step of its own.
    await act(async () => {
      editor.update(() => para.select(0, 0));
    });
    await dispatchSelectionChange(editor);

    expect(editor.getEditorState().read(() => para.getChildrenSize())).toBe(2);
    expect(historyState.redoStack.length).toBe(1);
  });

  it("removes the host on blur without moving the DOM selection back into the editor", async () => {
    const { editor, para } = await hostedEmptyVerse();
    const tagsOfUpdates: string[][] = [];
    const unregister = editor.registerUpdateListener(({ tags }) => {
      tagsOfUpdates.push([...tags]);
    });

    await act(async () => {
      editor.dispatchCommand(BLUR_COMMAND, new FocusEvent("blur"));
    });
    unregister();

    expect(editor.getEditorState().read(() => para.getChildrenSize())).toBe(2);
    // Without the tag Lexical writes the selection back to the DOM, which refocuses the editor
    // and steals focus from whatever the user moved to.
    expect(tagsOfUpdates.some((tags) => tags.includes(SKIP_DOM_SELECTION_TAG))).toBe(true);
  });

  it("re-hosts the caret when the editor regains focus without a selection change", async () => {
    const { editor, para } = await hostedEmptyVerse();
    await act(async () => {
      editor.dispatchCommand(BLUR_COMMAND, new FocusEvent("blur"));
    });
    expect(editor.getEditorState().read(() => para.getChildrenSize())).toBe(2);

    // A host application refocusing the editor, or a menu closing, sends no selectionchange.
    await act(async () => {
      editor.dispatchCommand(FOCUS_COMMAND, new FocusEvent("focus"));
    });

    editor.getEditorState().read(() => {
      const host = para.getChildAtIndex(1);
      expect(host?.getTextContent()).toBe(CURSOR_PLACEHOLDER_CHAR);
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      expect(selection.focus.key).toBe(host?.getKey());
    });
  });

  it("leaves a hosted caret where it is on focus, whatever the DOM selection says", async () => {
    const { editor, host } = await hostedEmptyVerse();
    // Right after a focus the DOM selection may not yet hold the selection just committed (jsdom
    // puts it at the start of the editor). An update made then would resolve the caret from it.
    // The selectionchange the move queues is withheld from Lexical, as it hasn't arrived yet.
    const root = editor.getRootElement();
    if (!root) throw new Error("expected a root element");
    const withhold = (event: Event) => event.stopPropagation();
    window.addEventListener("selectionchange", withhold, true);
    try {
      window.getSelection()?.collapse(root, 0);
      // A real focus event, as the browser sends: Lexical reads no selection from the DOM during
      // one, only in an update made outside any event.
      await act(async () => {
        root.dispatchEvent(new FocusEvent("focus"));
      });
      await settle();
    } finally {
      window.removeEventListener("selectionchange", withhold, true);
    }

    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      expect(selection.focus.key).toBe(host.getKey());
    });
  });

  it("strips the placeholder when text is typed after it, at the host's offset 1", async () => {
    const { editor, para, host } = await hostedEmptyVerse();
    // ArrowRight inside the host, or a click landing past the placeholder.
    await act(async () => {
      editor.update(() => host.select(1, 1));
    });

    await insertText(editor, "a");

    expect(editor.getEditorState().read(() => para.getTextContent())).toBe("a");
  });

  it("keeps a blur from a hosted caret out of undo and the USJ-change handler", async () => {
    const historyState = createEmptyHistoryState();
    const { editor, para } = await hostedEmptyVerse(
      <HistoryPlugin externalHistoryState={historyState} />,
    );
    const undoSteps = historyState.undoStack.length;
    const tagsOfUpdates: string[][] = [];
    const unregister = editor.registerUpdateListener(({ tags, dirtyLeaves, dirtyElements }) => {
      if (dirtyLeaves.size > 0 || dirtyElements.size > 0) tagsOfUpdates.push([...tags]);
    });

    await act(async () => {
      editor.dispatchCommand(BLUR_COMMAND, new FocusEvent("blur"));
    });
    unregister();

    expect(editor.getEditorState().read(() => para.getChildrenSize())).toBe(2);
    expect(historyState.undoStack.length).toBe(undoSteps);
    // CURSOR_CHANGE_TAG is blacklisted, so the host application's onUsjChange never sees it.
    expect(tagsOfUpdates.length).toBeGreaterThan(0);
    expect(tagsOfUpdates.every((tags) => tags.includes(CURSOR_CHANGE_TAG))).toBe(true);
  });

  describe("a host undo restored, which no selection change has adopted", () => {
    async function restoredHost() {
      const historyState = createEmptyHistoryState();
      const hosted = await hostedEmptyVerse(<HistoryPlugin externalHistoryState={historyState} />);
      const { editor, para } = hosted;
      await insertText(editor, "a");
      await settle();
      await act(async () => {
        editor.dispatchCommand(UNDO_COMMAND, undefined);
      });
      // Undo brings the host back with the caret in it, and dispatches no selection change.
      await act(async () => {
        editor.update(() => {
          const restored = para.getChildAtIndex(1);
          if (!$isTextNode(restored)) throw new Error("expected undo to restore the host");
          restored.select(0, 0);
        });
      });
      return hosted;
    }

    it("is removed on blur", async () => {
      const { editor, para } = await restoredHost();

      await act(async () => {
        editor.dispatchCommand(BLUR_COMMAND, new FocusEvent("blur"));
      });

      expect(editor.getEditorState().read(() => para.getChildrenSize())).toBe(2);
    });

    it("is removed on blur after the queued selection events arrive", async () => {
      const { editor, para } = await restoredHost();
      await settle();

      await act(async () => {
        editor.dispatchCommand(BLUR_COMMAND, new FocusEvent("blur"));
      });

      expect(editor.getEditorState().read(() => para.getChildrenSize())).toBe(2);
    });

    it("is removed when the caret leaves it", async () => {
      const { editor, para } = await restoredHost();

      // The browser moves the caret to the paragraph's start, as a click there does.
      const paraDom = editor.getElementByKey(para.getKey());
      if (!paraDom) throw new Error("expected the paragraph's element");
      await act(async () => {
        window.getSelection()?.collapse(paraDom, 0);
      });
      await settle();

      expect(editor.getEditorState().read(() => para.getChildrenSize())).toBe(2);
    });
  });

  it("removes the host once its placeholder is selected", async () => {
    const { editor, host } = await hostedEmptyVerse();

    // Shift+ArrowRight from offset 0 selects the host's own placeholder. Kept, it would be
    // copied, or quoted by a footnote inserted over the selection, as content.
    await act(async () => {
      editor.update(() => {
        const range = $createRangeSelection();
        range.anchor.set(host.getKey(), 0, "text");
        range.focus.set(host.getKey(), 1, "text");
        $setSelection(range);
      });
    });
    await dispatchSelectionChange(editor);

    // The host is removed, and nothing is selected.
    editor.getEditorState().read(() => {
      expect(host.isAttached()).toBe(false);
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      expect(selection.isCollapsed()).toBe(true);
    });
  });
});
