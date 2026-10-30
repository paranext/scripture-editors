// Should only be used on nodes that are initialized in the test environment.
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { baseTestEnvironment, sutUpdate, updateSelection } from "./react-test.utils";
import { $createImmutableVerseNode, $isSomeVerseNode } from "../../nodes/usj";
import {
  $adjacentVerseMarker,
  $caretAdjacentToVerseMarker,
  $caretAtParaEnd,
  $caretAtParaStart,
  $isArmedSelection,
  $isParaEmpty,
  $isUnmergeableParaStart,
  $mergeParaIntoPrevious,
  $moveCaretPastGutterGlyph,
  $narrowSelectionPastGutterGlyph,
  $paraDeleteEffect,
  $sanitizeNodesForProtectedStructure,
  $selectionContainsVerseMarker,
  $selectionSpansBlockBoundary,
  $shouldBlockSelectionReplacement,
  $shouldBlockStructuralEdit,
  $shouldRefuseExtendedDelete,
  $structuralDeleteTarget,
  keyDownToIntent,
} from "./structureKeyboard.utils";
import { $createCaretHostNode } from "./transientCaretHost";
import {
  $createNodeSelection,
  $createRangeSelection,
  $getRoot,
  $getSelection,
  $createTextNode,
  $isRangeSelection,
  $isTextNode,
  $setSelection,
  LexicalEditor,
  RangeSelection,
  TextNode,
} from "lexical";
import {
  $createChapterNode,
  $createCharNode,
  $createGutterMarkerNode,
  $createImmutableChapterNode,
  $createMarkerNode,
  $createMarkerTrailingSeparator,
  $createNoteNode,
  $createParaNode,
  $createImpliedParaNode,
  $createMilestoneNode,
  $createUnknownNode,
  $createVerseNode,
  $isCharNode,
  $isNoteNode,
  $isGutterMarkerNode,
  $isMarkerNode,
  $isMarkerTrailingSeparator,
  $isSomeParaNode,
  ImpliedParaNode,
  NBSP,
  ParaNode,
} from "shared";

describe("structureKeyboard.utils", () => {
  it("$selectionSpansBlockBoundary: true across two paragraphs", async () => {
    let t1: TextNode;
    let t2: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      t1 = $createTextNode("first");
      t2 = $createTextNode("second");
      $getRoot().append($createParaNode("p").append(t1), $createImpliedParaNode().append(t2));
    });
    updateSelection(editor, t1!, 0, t2!, 6);
    editor.getEditorState().read(() => {
      expect($selectionSpansBlockBoundary($getSelection()!)).toBe(true);
    });
  });

  it("$selectionSpansBlockBoundary: false within one paragraph", async () => {
    let t1: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      t1 = $createTextNode("first");
      $getRoot().append($createParaNode("p").append(t1));
    });
    updateSelection(editor, t1!, 0, t1!, 5);
    editor.getEditorState().read(() => {
      expect($selectionSpansBlockBoundary($getSelection()!)).toBe(false);
    });
  });

  it("$selectionContainsVerseMarker: true when range includes a verse", async () => {
    let para: ParaNode;
    let t1: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      para = $createParaNode("p");
      t1 = $createTextNode("text");
      $getRoot().append(para.append($createImmutableVerseNode("1"), t1));
    });
    updateSelection(editor, para!, 0, t1!, 4);
    editor.getEditorState().read(() => {
      expect($selectionContainsVerseMarker($getSelection()!)).toBe(true);
    });
  });

  it("$selectionContainsVerseMarker: true for NodeSelection containing a verse node", async () => {
    let verseNode: ReturnType<typeof $createImmutableVerseNode>;
    const { editor } = await baseTestEnvironment(() => {
      verseNode = $createImmutableVerseNode("1");
      $getRoot().append($createParaNode("p").append(verseNode, $createTextNode("text")));
    });
    await sutUpdate(
      editor,
      () => {
        const ns = $createNodeSelection();
        ns.add(verseNode.getKey());
        $setSelection(ns);
      },
      { discrete: true },
    );
    editor.getEditorState().read(() => {
      expect($selectionContainsVerseMarker($getSelection()!)).toBe(true);
    });
  });

  it("$caretAtParaStart: true at offset 0 of first text, false mid-text", async () => {
    let t1: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      t1 = $createTextNode("first");
      $getRoot().append($createParaNode("p").append(t1));
    });
    updateSelection(editor, t1!, 0);
    editor.getEditorState().read(() => {
      expect($caretAtParaStart($getSelection()!)).toBe(true);
    });
    updateSelection(editor, t1!, 2);
    editor.getEditorState().read(() => {
      expect($caretAtParaStart($getSelection()!)).toBe(false);
    });
  });

  it("$caretAtParaEnd: true at end of last text, false mid-text", async () => {
    let t1: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      t1 = $createTextNode("first");
      $getRoot().append($createParaNode("p").append(t1));
    });
    updateSelection(editor, t1!, 5);
    editor.getEditorState().read(() => {
      expect($caretAtParaEnd($getSelection()!)).toBe(true);
    });
    updateSelection(editor, t1!, 2);
    editor.getEditorState().read(() => {
      expect($caretAtParaEnd($getSelection()!)).toBe(false);
    });
  });

  it.each([0, 1])(
    "a caret host ending a paragraph is at its end from either offset (%i)",
    async (offset) => {
      let host: TextNode;
      const { editor } = await baseTestEnvironment(() => {
        host = $createCaretHostNode();
        $getRoot().append($createParaNode("p").append($createImmutableVerseNode("3"), host));
      });
      updateSelection(editor, host!, offset);
      editor.getEditorState().read(() => {
        expect($caretAtParaEnd($getSelection()!)).toBe(true);
      });
    },
  );

  it.each([0, 1])(
    "a caret host starting a paragraph is at its start from either offset (%i)",
    async (offset) => {
      let host: TextNode;
      const { editor } = await baseTestEnvironment(() => {
        host = $createCaretHostNode();
        $getRoot().append(
          $createParaNode("q").append($createTextNode("prev")),
          $createParaNode("p").append(host, $createImmutableVerseNode("4")),
        );
      });
      updateSelection(editor, host!, offset);
      editor.getEditorState().read(() => {
        expect($caretAtParaStart($getSelection()!)).toBe(true);
      });
    },
  );

  it("empty paragraph: caret is both at start and at end", async () => {
    let para: ParaNode;
    const { editor } = await baseTestEnvironment(() => {
      para = $createParaNode("p");
      $getRoot().append($createParaNode("q").append($createTextNode("prev")), para);
    });
    updateSelection(editor, para!, 0);
    editor.getEditorState().read(() => {
      const sel = $getSelection()!;
      expect($caretAtParaStart(sel)).toBe(true);
      expect($caretAtParaEnd(sel)).toBe(true);
    });
  });

  it("$caretAdjacentToVerseMarker backward: true when caret immediately follows a verse", async () => {
    let para: ParaNode;
    let t1: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      para = $createParaNode("p");
      t1 = $createTextNode("text");
      $getRoot().append(para.append($createImmutableVerseNode("1"), t1));
    });
    updateSelection(editor, t1!, 0);
    editor.getEditorState().read(() => {
      expect($caretAdjacentToVerseMarker($getSelection()!, "backward")).toBe(true);
      expect($caretAdjacentToVerseMarker($getSelection()!, "forward")).toBe(false);
    });
  });
});

describe("keyDownToIntent — modifier mapping", () => {
  const ev = (key: string, mods: KeyboardEventInit = {}) =>
    new KeyboardEvent("keydown", { key, ...mods });

  it("maps plain and modified Backspace/Delete to deletions (NOT skipped on modifiers)", () => {
    expect(keyDownToIntent(ev("Backspace"))).toBe("deleteBackward");
    expect(keyDownToIntent(ev("Backspace", { altKey: true }))).toBe("deleteBackward");
    expect(keyDownToIntent(ev("Backspace", { metaKey: true }))).toBe("deleteBackward");
    expect(keyDownToIntent(ev("Backspace", { ctrlKey: true }))).toBe("deleteBackward");
    expect(keyDownToIntent(ev("Delete"))).toBe("deleteForward");
    expect(keyDownToIntent(ev("Delete", { altKey: true }))).toBe("deleteForward");
  });

  it("maps plain Enter to insertParagraph, Shift+Enter to undefined", () => {
    expect(keyDownToIntent(ev("Enter"))).toBe("insertParagraph");
    expect(keyDownToIntent(ev("Enter", { shiftKey: true }))).toBeUndefined();
  });

  it("maps a printable char to insertText, but command-modified/non-editing keys to undefined", () => {
    expect(keyDownToIntent(ev("a"))).toBe("insertText");
    expect(keyDownToIntent(ev("a", { ctrlKey: true }))).toBeUndefined();
    expect(keyDownToIntent(ev("c", { metaKey: true }))).toBeUndefined();
    expect(keyDownToIntent(ev("ArrowLeft"))).toBeUndefined();
  });
});

describe("$shouldBlockStructuralEdit (decision logic)", () => {
  it("blocks deleteBackward at paragraph start with a previous block", async () => {
    let t2: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      t2 = $createTextNode("second");
      $getRoot().append(
        $createParaNode("p").append($createTextNode("first")),
        $createParaNode("q").append(t2),
      );
    });
    updateSelection(editor, t2!, 0);
    editor.getEditorState().read(() => {
      expect($shouldBlockStructuralEdit($getSelection()!, "deleteBackward")).toBe(true);
    });
  });

  it("ALLOWS deleteBackward mid-text (regression: normal editing not blocked)", async () => {
    let t1: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      t1 = $createTextNode("abcdef");
      $getRoot().append($createParaNode("p").append(t1));
    });
    updateSelection(editor, t1!, 3);
    editor.getEditorState().read(() => {
      expect($shouldBlockStructuralEdit($getSelection()!, "deleteBackward")).toBe(false);
    });
  });

  it("ALLOWS deleteBackward at the first paragraph start (nothing to merge)", async () => {
    let t1: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      t1 = $createTextNode("first");
      $getRoot().append($createParaNode("p").append(t1));
    });
    updateSelection(editor, t1!, 0);
    editor.getEditorState().read(() => {
      expect($shouldBlockStructuralEdit($getSelection()!, "deleteBackward")).toBe(false);
    });
  });

  it("blocks deleteBackward when the caret is immediately after a verse marker", async () => {
    let para: ParaNode;
    let t1: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      para = $createParaNode("p");
      t1 = $createTextNode("text");
      $getRoot().append(
        $createParaNode("q").append($createTextNode("prev")),
        para.append($createImmutableVerseNode("1"), t1),
      );
    });
    updateSelection(editor, t1!, 0);
    editor.getEditorState().read(() => {
      expect($shouldBlockStructuralEdit($getSelection()!, "deleteBackward")).toBe(true);
    });
  });

  it("always blocks insertParagraph (Enter) at a collapsed caret", async () => {
    let t1: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      t1 = $createTextNode("abcdef");
      $getRoot().append($createParaNode("p").append(t1));
    });
    updateSelection(editor, t1!, 3);
    editor.getEditorState().read(() => {
      expect($shouldBlockStructuralEdit($getSelection()!, "insertParagraph")).toBe(true);
    });
  });

  it("ALLOWS insertText at a collapsed caret (typing a character is fine)", async () => {
    let t1: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      t1 = $createTextNode("abcdef");
      $getRoot().append($createParaNode("p").append(t1));
    });
    updateSelection(editor, t1!, 3);
    editor.getEditorState().read(() => {
      expect($shouldBlockStructuralEdit($getSelection()!, "insertText")).toBe(false);
    });
  });

  it("blocks any intent over a selection spanning a block boundary", async () => {
    let t1: TextNode;
    let t2: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      t1 = $createTextNode("first");
      t2 = $createTextNode("second");
      $getRoot().append($createParaNode("p").append(t1), $createParaNode("q").append(t2));
    });
    updateSelection(editor, t1!, 0, t2!, 6);
    editor.getEditorState().read(() => {
      expect($shouldBlockStructuralEdit($getSelection()!, "insertText")).toBe(true);
    });
  });
});

describe("$adjacentVerseMarker", () => {
  it("backward: returns the verse immediately before a collapsed caret", async () => {
    let verse: ReturnType<typeof $createImmutableVerseNode>;
    let t1: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      verse = $createImmutableVerseNode("1");
      t1 = $createTextNode("text");
      $getRoot().append($createParaNode("p").append(verse, t1));
    });
    updateSelection(editor, t1!, 0);
    editor.getEditorState().read(() => {
      expect($adjacentVerseMarker($getSelection()!, "backward")?.getKey()).toBe(verse!.getKey());
      expect($adjacentVerseMarker($getSelection()!, "forward")).toBeUndefined();
    });
  });

  it("forward: returns the verse immediately after a collapsed caret", async () => {
    let verse: ReturnType<typeof $createImmutableVerseNode>;
    let t1: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      t1 = $createTextNode("text");
      verse = $createImmutableVerseNode("2");
      $getRoot().append($createParaNode("p").append(t1, verse));
    });
    updateSelection(editor, t1!, 4);
    editor.getEditorState().read(() => {
      expect($adjacentVerseMarker($getSelection()!, "forward")?.getKey()).toBe(verse!.getKey());
      expect($adjacentVerseMarker($getSelection()!, "backward")).toBeUndefined();
    });
  });

  it("returns undefined mid-text", async () => {
    let t1: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      t1 = $createTextNode("text");
      $getRoot().append($createParaNode("p").append($createImmutableVerseNode("1"), t1));
    });
    updateSelection(editor, t1!, 2);
    editor.getEditorState().read(() => {
      expect($adjacentVerseMarker($getSelection()!, "backward")).toBeUndefined();
      expect($adjacentVerseMarker($getSelection()!, "forward")).toBeUndefined();
    });
  });
});

describe("$adjacentVerseMarker from inside a caret host", () => {
  // The empty-verse guard rests the caret in a placeholder-only text node between two verse
  // markers. Either offset in it is the same screen position, right next to both verses.
  it.each([0, 1])("sees both neighboring verses from offset %i", async (offset) => {
    let v3: ReturnType<typeof $createImmutableVerseNode>;
    let v4: ReturnType<typeof $createImmutableVerseNode>;
    let host: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      v3 = $createImmutableVerseNode("3");
      v4 = $createImmutableVerseNode("4");
      host = $createCaretHostNode();
      $getRoot().append($createParaNode("p").append(v3, host, v4));
    });
    updateSelection(editor, host!, offset);
    editor.getEditorState().read(() => {
      expect($adjacentVerseMarker($getSelection()!, "backward")?.getKey()).toBe(v3!.getKey());
      expect($adjacentVerseMarker($getSelection()!, "forward")?.getKey()).toBe(v4!.getKey());
    });
  });
});

describe("$structuralDeleteTarget", () => {
  it("deleteBackward after a verse → that verse", async () => {
    let verse: ReturnType<typeof $createImmutableVerseNode>;
    let t1: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      verse = $createImmutableVerseNode("1");
      t1 = $createTextNode("text");
      $getRoot().append($createParaNode("p").append(verse, t1));
    });
    updateSelection(editor, t1!, 0);
    editor.getEditorState().read(() => {
      const target = $structuralDeleteTarget($getSelection()!, "deleteBackward");
      expect(target).toEqual({ kind: "verse", node: expect.anything() });
      expect(target?.node.getKey()).toBe(verse!.getKey());
    });
  });

  it("deleteBackward at para start with a previous block → current para", async () => {
    let para: ParaNode;
    let t2: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      para = $createParaNode("q");
      t2 = $createTextNode("second");
      $getRoot().append($createParaNode("p").append($createTextNode("first")), para.append(t2));
    });
    updateSelection(editor, t2!, 0);
    editor.getEditorState().read(() => {
      const target = $structuralDeleteTarget($getSelection()!, "deleteBackward");
      expect(target?.kind).toBe("para");
      expect(target?.node.getKey()).toBe(para!.getKey());
    });
  });

  it("deleteForward at para end with a next block → the NEXT para", async () => {
    let next: ParaNode;
    let t1: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      t1 = $createTextNode("first");
      next = $createParaNode("q");
      $getRoot().append($createParaNode("p").append(t1), next.append($createTextNode("second")));
    });
    updateSelection(editor, t1!, 5);
    editor.getEditorState().read(() => {
      const target = $structuralDeleteTarget($getSelection()!, "deleteForward");
      expect(target?.kind).toBe("para");
      expect(target?.node.getKey()).toBe(next!.getKey());
    });
  });

  it("returns undefined at the first para start (nothing to merge)", async () => {
    let t1: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      t1 = $createTextNode("first");
      $getRoot().append($createParaNode("p").append(t1));
    });
    updateSelection(editor, t1!, 0);
    editor.getEditorState().read(() => {
      expect($structuralDeleteTarget($getSelection()!, "deleteBackward")).toBeUndefined();
    });
  });

  it("returns undefined at the start of a para after a chapter (nothing it can merge into)", async () => {
    let t1: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      t1 = $createTextNode("first");
      $getRoot().append($createChapterNode("2"), $createParaNode("p").append(t1));
    });
    updateSelection(editor, t1!, 0);
    editor.getEditorState().read(() => {
      expect($structuralDeleteTarget($getSelection()!, "deleteBackward")).toBeUndefined();
    });
  });

  it("returns an empty para after a chapter, when a paragraph follows it", async () => {
    let empty: ParaNode;
    const { editor } = await baseTestEnvironment(() => {
      empty = $createParaNode("s");
      $getRoot().append(
        $createImmutableChapterNode("1"),
        empty,
        $createParaNode("p").append($createTextNode("first")),
      );
    });
    updateSelection(editor, empty!, 0);
    editor.getEditorState().read(() => {
      expect($structuralDeleteTarget($getSelection()!, "deleteBackward")?.node.getKey()).toBe(
        empty.getKey(),
      );
      expect($isUnmergeableParaStart($getSelection()!)).toBe(false);
    });
  });

  it.each(["deleteBackward", "deleteForward"] as const)(
    "%s returns an empty para alone in its chapter",
    async (intent) => {
      let empty: ParaNode;
      const { editor } = await baseTestEnvironment(() => {
        empty = $createParaNode("s");
        $getRoot().append(
          $createImmutableChapterNode("1"),
          empty,
          $createImmutableChapterNode("2"),
        );
      });
      updateSelection(editor, empty!, 0);
      editor.getEditorState().read(() => {
        expect($structuralDeleteTarget($getSelection()!, intent)?.node.getKey()).toBe(
          empty.getKey(),
        );
        expect($isUnmergeableParaStart($getSelection()!)).toBe(false);
      });
    },
  );

  it("returns undefined for a blank line with no marker alone in its chapter", async () => {
    let blank: ImpliedParaNode;
    const { editor } = await baseTestEnvironment(() => {
      blank = $createImpliedParaNode();
      $getRoot().append($createImmutableChapterNode("1"), blank, $createImmutableChapterNode("2"));
    });
    updateSelection(editor, blank!, 0);
    editor.getEditorState().read(() => {
      expect($structuralDeleteTarget($getSelection()!, "deleteBackward")).toBeUndefined();
      expect($isUnmergeableParaStart($getSelection()!)).toBe(true);
    });
  });

  it("deleteBackward at the start of a para after an empty para → the EMPTY para", async () => {
    let empty: ParaNode;
    let t2: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      empty = $createParaNode("s");
      t2 = $createTextNode("second");
      $getRoot().append(
        $createParaNode("p").append($createTextNode("first")),
        empty,
        $createParaNode("q1").append(t2),
      );
    });
    updateSelection(editor, t2!, 0);
    editor.getEditorState().read(() => {
      expect($structuralDeleteTarget($getSelection()!, "deleteBackward")?.node.getKey()).toBe(
        empty!.getKey(),
      );
    });
  });

  it("deleteForward in an empty para with a next para → the empty para itself", async () => {
    let empty: ParaNode;
    const { editor } = await baseTestEnvironment(() => {
      empty = $createParaNode("s");
      $getRoot().append(
        $createParaNode("p").append($createTextNode("first")),
        empty,
        $createParaNode("q1").append($createTextNode("second")),
      );
    });
    updateSelection(editor, empty!, 0);
    editor.getEditorState().read(() => {
      expect($structuralDeleteTarget($getSelection()!, "deleteForward")?.node.getKey()).toBe(
        empty.getKey(),
      );
    });
  });

  it("returns undefined mid-text", async () => {
    let t1: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      t1 = $createTextNode("abcdef");
      $getRoot().append($createParaNode("p").append(t1));
    });
    updateSelection(editor, t1!, 3);
    editor.getEditorState().read(() => {
      expect($structuralDeleteTarget($getSelection()!, "deleteBackward")).toBeUndefined();
      expect($structuralDeleteTarget($getSelection()!, "deleteForward")).toBeUndefined();
    });
  });
});

describe("$isArmedSelection", () => {
  it("verse: true when a NodeSelection holds the armed verse key", async () => {
    let verse: ReturnType<typeof $createImmutableVerseNode>;
    const { editor } = await baseTestEnvironment(() => {
      verse = $createImmutableVerseNode("1");
      $getRoot().append($createParaNode("p").append(verse, $createTextNode("text")));
    });
    await sutUpdate(
      editor,
      () => {
        const ns = $createNodeSelection();
        ns.add(verse.getKey());
        $setSelection(ns);
      },
      { discrete: true },
    );
    editor.getEditorState().read(() => {
      expect(
        $isArmedSelection($getSelection(), {
          key: verse.getKey(),
          kind: "verse",
          intent: "deleteBackward",
        }),
      ).toBe(true);
      expect(
        $isArmedSelection($getSelection(), {
          key: "nonexistent",
          kind: "verse",
          intent: "deleteBackward",
        }),
      ).toBe(false);
    });
  });

  it("para: true while the caret stays where a paragraph with no marker was armed, false once it moves", async () => {
    let para: ParaNode;
    let t1: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      para = $createParaNode("p");
      t1 = $createTextNode("hello");
      $getRoot().append(para.append(t1));
    });
    const caretAt = (offset: number) => ({ key: t1!.getKey(), offset, type: "text" as const });
    const armed = {
      key: para!.getKey(),
      kind: "para" as const,
      intent: "deleteBackward" as const,
      anchor: caretAt(0),
      focus: caretAt(0),
    };

    updateSelection(editor, t1!, 0);
    editor.getEditorState().read(() => {
      expect($isArmedSelection($getSelection(), armed)).toBe(true);
    });

    updateSelection(editor, t1!, 0, t1!, 5);
    editor.getEditorState().read(() => {
      expect($isArmedSelection($getSelection(), armed)).toBe(false);
    });
  });

  it("para: false for a collapsed caret (nothing armed)", async () => {
    let para: ParaNode;
    let t1: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      para = $createParaNode("p");
      t1 = $createTextNode("hello");
      $getRoot().append(para.append(t1));
    });
    updateSelection(editor, t1!, 0);
    editor.getEditorState().read(() => {
      expect(
        $isArmedSelection($getSelection(), {
          key: para!.getKey(),
          kind: "para",
          intent: "deleteBackward",
        }),
      ).toBe(false);
    });
  });

  it("$isArmedSelection: selection kind matches the same live range", async () => {
    let t1: TextNode;
    let t2: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      t1 = $createTextNode("text");
      t2 = $createTextNode("more");
      $getRoot().append($createParaNode("p").append(t1, $createImmutableVerseNode("1"), t2));
    });
    // Endpoints are text points on the flanking text nodes — never on the verse DecoratorNode.
    updateSelection(editor, t1!, 0, t2!, 2);

    editor.getEditorState().read(() => {
      const sel = $getSelection();
      if (!$isRangeSelection(sel)) throw new Error("expected a RangeSelection");
      const armed = {
        kind: "selection" as const,
        intent: "deleteBackward" as const,
        key: "anchor-verse",
        anchor: { key: sel.anchor.key, offset: sel.anchor.offset, type: sel.anchor.type },
        focus: { key: sel.focus.key, offset: sel.focus.offset, type: sel.focus.type },
      };
      expect($isArmedSelection(sel, armed)).toBe(true);
    });
  });

  it("$isArmedSelection: selection kind is false once the range moves", async () => {
    let t1: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      t1 = $createTextNode("hello");
      $getRoot().append($createParaNode("p").append(t1));
    });
    updateSelection(editor, t1!, 0, t1!, 3);

    const armed = {
      kind: "selection" as const,
      intent: "deleteBackward" as const,
      key: "x",
      anchor: { key: "different", offset: 0, type: "text" as const },
      focus: { key: "different", offset: 3, type: "text" as const },
    };
    editor.getEditorState().read(() => {
      expect($isArmedSelection($getSelection(), armed)).toBe(false);
    });
  });
});

/** The committed caret, as the text it sits in and its offset there. */
function caretOf(editor: LexicalEditor): { text: string; offset: number } | undefined {
  return editor.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection) || !selection.isCollapsed()) return undefined;
    return { text: selection.anchor.getNode().getTextContent(), offset: selection.anchor.offset };
  });
}

describe("$mergeParaIntoPrevious", () => {
  it("moves children into the previous block, drops the merged para and its marker, preserves text", async () => {
    let p: ParaNode;
    let q: ParaNode;
    const { editor } = await baseTestEnvironment(() => {
      p = $createParaNode("p");
      q = $createParaNode("q");
      $getRoot().append(p.append($createTextNode("first")), q.append($createTextNode("second")));
    });

    await sutUpdate(editor, () => {
      $mergeParaIntoPrevious(q!);
    });

    editor.getEditorState().read(() => {
      const root = $getRoot();
      expect(root.getChildrenSize()).toBe(1);
      const merged = root.getChildren()[0] as ParaNode;
      expect(merged.getKey()).toBe(p!.getKey());
      expect(merged.getMarker()).toBe("p"); // previous block's marker kept; "q" gone
      expect(merged.getTextContent()).toBe("firstsecond");
    });
    expect(caretOf(editor)).toEqual({ text: "firstsecond", offset: 5 });
  });

  // In the paragraph-structure view each paragraph leads with its marker glyph in the gutter. The
  // merged paragraph's marker is the one being removed, so its glyph goes with it.
  it("drops the merged paragraph's gutter marker glyph instead of moving it into the previous one", async () => {
    let li1: ParaNode;
    let q1: ParaNode;
    const { editor } = await baseTestEnvironment(() => {
      li1 = $createParaNode("li1");
      q1 = $createParaNode("q1");
      $getRoot().append(
        li1.append($createGutterMarkerNode(`\\li1${NBSP}`), $createTextNode("first")),
        q1.append(
          $createGutterMarkerNode(`\\q1${NBSP}`),
          $createImmutableVerseNode("2"),
          $createTextNode("second"),
        ),
      );
    });

    await sutUpdate(editor, () => {
      $mergeParaIntoPrevious(q1!);
    });

    editor.getEditorState().read(() => {
      const merged = li1!.getChildren();
      expect(merged.filter($isGutterMarkerNode).map((n) => n.getTextContent())).toEqual([
        `\\li1${NBSP}`,
      ]);
      expect(merged[0].getTextContent()).toBe(`\\li1${NBSP}`);
      expect(li1!.getTextContent()).toContain("first");
      expect(merged.some($isSomeVerseNode)).toBe(true);
      expect(li1!.getTextContent()).toContain("second");
    });
    expect(caretOf(editor)).toEqual({ text: "first", offset: 5 });
  });

  it("merges an empty para by simply removing it", async () => {
    let p: ParaNode;
    let empty: ParaNode;
    const { editor } = await baseTestEnvironment(() => {
      p = $createParaNode("p");
      empty = $createParaNode("q");
      $getRoot().append(p.append($createTextNode("text")), empty);
    });

    await sutUpdate(editor, () => {
      $mergeParaIntoPrevious(empty!);
    });

    editor.getEditorState().read(() => {
      expect($getRoot().getChildrenSize()).toBe(1);
      expect(($getRoot().getChildren()[0] as ParaNode).getTextContent()).toBe("text");
    });
    expect(caretOf(editor)).toEqual({ text: "text", offset: 4 });
  });

  // Standard view: each paragraph opens with its marker as editable text. The caret must never
  // land in a marker or its separator, where the next keystroke would rename the marker.
  it("lands past a note that ends the previous paragraph, not in the merged marker", async () => {
    let p: ParaNode;
    let q1: ParaNode;
    let two: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      p = $createParaNode("p");
      q1 = $createParaNode("q1");
      two = $createTextNode("two");
      $getRoot().append(
        p.append(
          $createMarkerNode("p"),
          $createMarkerTrailingSeparator(),
          $createTextNode("one"),
          $createNoteNode("f", "+").append($createTextNode("note")),
        ),
        q1.append($createMarkerNode("q1"), $createMarkerTrailingSeparator(), two),
      );
    });

    await sutUpdate(editor, () => {
      $mergeParaIntoPrevious(q1!);
    });

    expect(caretOf(editor)).toEqual({ text: "two", offset: 0 });
    editor.getEditorState().read(() => {
      expect(p!.getChildren().filter($isMarkerNode)).toHaveLength(1);
    });
  });

  it("lands at the merged text when the previous paragraph holds only its marker", async () => {
    let p: ParaNode;
    let q1: ParaNode;
    const { editor } = await baseTestEnvironment(() => {
      p = $createParaNode("p");
      q1 = $createParaNode("q1");
      $getRoot().append(
        p.append($createMarkerNode("p"), $createMarkerTrailingSeparator()),
        q1.append(
          $createMarkerNode("q1"),
          $createMarkerTrailingSeparator(),
          $createTextNode("two"),
        ),
      );
    });

    // Check the caret inside the update that places it. Once committed, Lexical may read the DOM
    // selection back and move a caret at content start onto the end of the separator before it, so
    // a check after the commit races that read-back. Typing from the real landing is pinned
    // end-to-end by the guarded-merge typing tests.
    await sutUpdate(editor, () => {
      $mergeParaIntoPrevious(q1!);

      const selection = $getSelection();
      expect($isRangeSelection(selection) && selection.isCollapsed()).toBe(true);
      const { anchor } = selection as RangeSelection;
      expect(anchor.getNode().getTextContent()).toBe("two");
      expect(anchor.offset).toBe(0);
      expect($isMarkerNode(anchor.getNode()) || $isMarkerTrailingSeparator(anchor.getNode())).toBe(
        false,
      );
    });
  });
});

describe("$isParaEmpty", () => {
  it("is true for a paragraph with nothing but its gutter marker, or with no children", async () => {
    const { editor } = await baseTestEnvironment();
    await sutUpdate(editor, () => {
      expect($isParaEmpty($createParaNode("s1").append($createGutterMarkerNode("\\s1 ")))).toBe(
        true,
      );
      expect($isParaEmpty($createParaNode("p"))).toBe(true);
    });
  });

  it("is false once the paragraph has text after its marker", async () => {
    const { editor } = await baseTestEnvironment();
    await sutUpdate(editor, () => {
      const para = $createParaNode("s1").append(
        $createGutterMarkerNode("\\s1 "),
        $createTextNode("Heading"),
      );
      expect($isParaEmpty(para)).toBe(false);
    });
  });
});

describe("$paraDeleteEffect", () => {
  it("names a Backspace merge, a Delete merge and an empty paragraph's removal", async () => {
    const { editor } = await baseTestEnvironment();
    await sutUpdate(editor, () => {
      const full = $createParaNode("p").append($createTextNode("second"));
      const empty = $createParaNode("p").append($createGutterMarkerNode("\\p "));
      expect($paraDeleteEffect(full, "deleteBackward")).toBe("joinPreviousPara");
      expect($paraDeleteEffect(full, "deleteForward")).toBe("joinNextPara");
      expect($paraDeleteEffect(empty, "deleteBackward")).toBe("removeEmptyPara");
      expect($paraDeleteEffect(empty, "deleteForward")).toBe("removeEmptyPara");
    });
  });
});

describe("$sanitizeNodesForProtectedStructure", () => {
  it("flattens a paragraph to its text content", async () => {
    const { editor } = await baseTestEnvironment();
    await sutUpdate(editor, () => {
      const para = $createParaNode("p").append($createTextNode("hello"));
      const result = $sanitizeNodesForProtectedStructure([para]);
      expect(result).toHaveLength(1);
      expect($isTextNode(result[0])).toBe(true);
      expect(result[0].getTextContent()).toBe("hello");
      expect(result.some((n) => $isSomeParaNode(n))).toBe(false);
    });
  });

  it("removes a verse marker entirely", async () => {
    const { editor } = await baseTestEnvironment();
    await sutUpdate(editor, () => {
      const verse = $createImmutableVerseNode("1");
      const result = $sanitizeNodesForProtectedStructure([verse]);
      expect(result).toHaveLength(0);
    });
  });

  it("removes a chapter marker entirely", async () => {
    const { editor } = await baseTestEnvironment();
    await sutUpdate(editor, () => {
      const chapter = $createChapterNode("1");
      const result = $sanitizeNodesForProtectedStructure([chapter]);
      expect(result).toHaveLength(0);
    });
  });

  it("preserves an inline CharNode", async () => {
    const { editor } = await baseTestEnvironment();
    await sutUpdate(editor, () => {
      const para = $createParaNode("p").append(
        $createCharNode("wj").append($createTextNode("words")),
      );
      const result = $sanitizeNodesForProtectedStructure([para]);
      expect(result).toHaveLength(1);
      expect($isCharNode(result[0])).toBe(true);
      expect(result[0].getTextContent()).toBe("words");
    });
  });

  it("preserves a NoteNode", async () => {
    const { editor } = await baseTestEnvironment();
    await sutUpdate(editor, () => {
      const para = $createParaNode("p").append($createNoteNode("f"));
      const result = $sanitizeNodesForProtectedStructure([para]);
      expect(result).toHaveLength(1);
      expect($isNoteNode(result[0])).toBe(true);
    });
  });

  it("joins two paragraphs with a single space", async () => {
    const { editor } = await baseTestEnvironment();
    await sutUpdate(editor, () => {
      const result = $sanitizeNodesForProtectedStructure([
        $createParaNode("p").append($createTextNode("a")),
        $createParaNode("q").append($createTextNode("b")),
      ]);
      expect(result.map((n) => n.getTextContent())).toEqual(["a", " ", "b"]);
    });
  });

  it("strips a verse marker nested inside a paragraph but keeps the text", async () => {
    const { editor } = await baseTestEnvironment();
    await sutUpdate(editor, () => {
      const para = $createParaNode("p").append(
        $createImmutableVerseNode("2"),
        $createTextNode("after"),
      );
      const result = $sanitizeNodesForProtectedStructure([para]);
      expect(result).toHaveLength(1);
      expect(result[0].getTextContent()).toBe("after");
    });
  });

  it("returns an empty array when the entire payload is structural markers", async () => {
    const { editor } = await baseTestEnvironment();
    await sutUpdate(editor, () => {
      const result = $sanitizeNodesForProtectedStructure([$createImmutableVerseNode("1")]);
      expect(result).toHaveLength(0);
    });
  });
});

// An empty verse has no TextNode to host the caret: a verse marker holds no text of its own,
// ImmutableVerseNode is a childless DecoratorNode, and TextSpacingPlugin deliberately inserts no
// spacer between two verse markers. Lexical therefore places the caret at a collapsed ELEMENT-type
// point on the paragraph, where getNodes() reports the ADJACENT node — so these carets are the ones
// where adjacency can be mistaken for containment, and typing must still be allowed.
//
// Build the caret with `updateSelection(editor, para, childIndex)`: passing the paragraph yields the
// element-type point these tests are about. Passing a TextNode yields a text point instead, which
// exercises a different code path and will pass regardless of the behavior under test.
describe("empty verse carets", () => {
  /** `verse(1) | verse(2) text` — caret in empty verse 1, between the two markers. */
  async function shapeAdjacentEmptyVerses() {
    let para: ParaNode;
    const { editor } = await baseTestEnvironment(() => {
      para = $createParaNode("p");
      $getRoot().append(
        para.append(
          $createImmutableVerseNode("1"),
          $createImmutableVerseNode("2"),
          $createTextNode("second verse text "),
        ),
      );
    });
    updateSelection(editor, para!, 1);
    return { editor, para: para! };
  }

  /** `text verse(5) |` — caret in verse 5's empty body, at the end of the paragraph. */
  async function shapeTrailingEmptyVerse() {
    let para: ParaNode;
    const { editor } = await baseTestEnvironment(() => {
      para = $createParaNode("p");
      $getRoot().append(para.append($createTextNode("some text "), $createImmutableVerseNode("5")));
    });
    updateSelection(editor, para!, 2);
    return { editor, para: para! };
  }

  /** `verse(1) |` — caret in an empty verse that is its paragraph's only child. */
  async function shapeLoneVerse() {
    let para: ParaNode;
    const { editor } = await baseTestEnvironment(() => {
      para = $createParaNode("p");
      $getRoot().append(para.append($createImmutableVerseNode("1")));
    });
    updateSelection(editor, para!, 1);
    return { editor, para: para! };
  }

  const shapes = [
    ["between two adjacent empty verses", shapeAdjacentEmptyVerses],
    ["in verse 5's empty body at para end", shapeTrailingEmptyVerse],
    ["in an empty verse that is the para's only child", shapeLoneVerse],
  ] as const;

  describe.each(shapes)("caret %s", (_label, buildShape) => {
    it("$selectionContainsVerseMarker is false (adjacency is not containment)", async () => {
      const { editor } = await buildShape();
      editor.getEditorState().read(() => {
        expect($selectionContainsVerseMarker($getSelection()!)).toBe(false);
      });
    });

    it("ALLOWS insertText (the user-facing symptom: typing must work)", async () => {
      const { editor } = await buildShape();
      editor.getEditorState().read(() => {
        expect($shouldBlockStructuralEdit($getSelection()!, "insertText")).toBe(false);
      });
    });

    it("ALLOWS selection replacement (paste/cut/drop/IME)", async () => {
      const { editor } = await buildShape();
      editor.getEditorState().read(() => {
        expect($shouldBlockSelectionReplacement($getSelection()!)).toBe(false);
      });
    });

    it("still BLOCKS insertParagraph (Enter) and deleteBackward", async () => {
      const { editor } = await buildShape();
      editor.getEditorState().read(() => {
        expect($shouldBlockStructuralEdit($getSelection()!, "insertParagraph")).toBe(true);
        expect($shouldBlockStructuralEdit($getSelection()!, "deleteBackward")).toBe(true);
      });
    });
  });

  it("still BLOCKS deleteForward when a verse marker follows the caret", async () => {
    const { editor } = await shapeAdjacentEmptyVerses();
    editor.getEditorState().read(() => {
      expect($shouldBlockStructuralEdit($getSelection()!, "deleteForward")).toBe(true);
    });
  });

  // Carries more weight than its permissive assertion suggests. This shape ([text, verse], caret at
  // the end) is the only one where a forward off-by-one in $adjacentVerseMarker's element branch is
  // observable: in the adjacent-verses shape, an off-by-one still lands on a verse marker, so the
  // test above stays green either way. It also pins the $hasNeighborBlock half of the deleteForward
  // rule — there is no next block to merge here. Keep it even though it asserts the permissive
  // direction.
  it("ALLOWS deleteForward at the end of the last paragraph (no block to merge)", async () => {
    const { editor } = await shapeTrailingEmptyVerse();
    editor.getEditorState().read(() => {
      expect($shouldBlockStructuralEdit($getSelection()!, "deleteForward")).toBe(false);
    });
  });

  // Characterizes Lexical's element-point insertion rather than this module's decision logic (the
  // describe.each above covers that). It answers what a boolean guard assertion cannot: once typing
  // is allowed, does the text land in the RIGHT verse? That is why the body calls nothing from
  // structureKeyboard.utils, and why it is insensitive to changes in this repo's own logic — it will
  // trip on a change in Lexical's insertion behavior instead.
  it("insertText lands in the first verse's slot, keeping both markers intact", async () => {
    const { editor, para } = await shapeAdjacentEmptyVerses();
    await sutUpdate(
      editor,
      () => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) selection.insertText("X");
      },
      { discrete: true },
    );
    editor.getEditorState().read(() => {
      const children = para.getChildren();
      expect(children.map((n) => n.getType())).toEqual([
        "immutable-verse",
        "text",
        "immutable-verse",
        "text",
      ]);
      expect(children[1].getTextContent()).toBe("X");
      // Not just "two markers survive" but the same two, still numbered 1 and 2, with verse 2's text
      // untouched — a marker replaced or renumbered by the insertion would pass a types-only check.
      expect(children.filter($isSomeVerseNode).map((verse) => verse.getNumber())).toEqual([
        "1",
        "2",
      ]);
      expect(children[3].getTextContent()).toBe("second verse text ");
    });
  });

  // The mutable VerseNode extends TextNode, so unlike ImmutableVerseNode a caret CAN sit inside it,
  // as a text-type point. That is real containment: editing there would rewrite the verse number, so
  // it must stay blocked. This is the boundary that keeps $selectionContainsVerseMarker's collapsed
  // exemption limited to element-type points — widening it to every collapsed caret breaks this.
  it("still BLOCKS edits with the caret inside a mutable VerseNode", async () => {
    let verse: ReturnType<typeof $createVerseNode>;
    const { editor } = await baseTestEnvironment(() => {
      verse = $createVerseNode("12");
      $getRoot().append(
        $createParaNode("q").append($createTextNode("prev")),
        $createParaNode("p").append(verse, $createTextNode("text ")),
      );
    });
    // One character into the marker's own text ("12"), so this is a text-type point.
    updateSelection(editor, verse!, 1);
    editor.getEditorState().read(() => {
      const selection = $getSelection()!;
      expect($selectionContainsVerseMarker(selection)).toBe(true);
      expect($shouldBlockStructuralEdit(selection, "insertText")).toBe(true);
      expect($shouldBlockStructuralEdit(selection, "deleteBackward")).toBe(true);
    });
  });
});

describe("$isUnmergeableParaStart", () => {
  it("is true at the start of a para after a chapter, and false mid-text", async () => {
    let t1: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      t1 = $createTextNode("first");
      $getRoot().append($createChapterNode("2"), $createParaNode("p").append(t1));
    });
    updateSelection(editor, t1!, 0);
    editor.getEditorState().read(() => {
      expect($isUnmergeableParaStart($getSelection()!)).toBe(true);
    });
    updateSelection(editor, t1!, 2);
    editor.getEditorState().read(() => {
      expect($isUnmergeableParaStart($getSelection()!)).toBe(false);
    });
  });

  it("is false at the start of a para that can merge, and of the first block", async () => {
    let t1: TextNode;
    let t2: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      t1 = $createTextNode("first");
      t2 = $createTextNode("second");
      $getRoot().append($createParaNode("p").append(t1), $createParaNode("p").append(t2));
    });
    updateSelection(editor, t2!, 0);
    editor.getEditorState().read(() => {
      expect($isUnmergeableParaStart($getSelection()!)).toBe(false);
    });
    updateSelection(editor, t1!, 0);
    editor.getEditorState().read(() => {
      expect($isUnmergeableParaStart($getSelection()!)).toBe(false);
    });
  });
});

describe("forward deletes and extents around a line's gutter marker", () => {
  /** A paragraph led by its gutter marker glyph, as the paragraph-structure view shows it. */
  const $createMarkedPara = (marker: string) =>
    $createParaNode(marker).append($createGutterMarkerNode(`\\${marker}${NBSP}`));

  /** Mounts `line` (built by `$build`) before a closing paragraph, caret in front of its marker. */
  async function caretInFrontOfMarker($build: (line: ParaNode) => void) {
    let line: ParaNode;
    const { editor } = await baseTestEnvironment(() => {
      line = $createMarkedPara("q2");
      $build(line);
      $getRoot().append(line, $createParaNode("p").append($createTextNode("closing")));
    });
    await sutUpdate(editor, () => line!.select(0, 0));
    return { editor, line: line! };
  }

  const blocksForwardDelete = (editor: LexicalEditor) =>
    editor
      .getEditorState()
      .read(() => $shouldBlockStructuralEdit($getSelection()!, "deleteForward"));

  it("judges a forward delete from past the marker: allowed into the line's text", async () => {
    const { editor } = await caretInFrontOfMarker((line) => line.append($createTextNode("text")));
    expect(blocksForwardDelete(editor)).toBe(false);
  });

  it("refuses a forward delete onto a verse marker past the marker", async () => {
    const { editor } = await caretInFrontOfMarker((line) =>
      line.append($createImmutableVerseNode("1"), $createTextNode("text")),
    );
    expect(blocksForwardDelete(editor)).toBe(true);
  });

  it("refuses a forward delete onto a milestone past the marker, which renders nothing", async () => {
    const { editor } = await caretInFrontOfMarker((line) =>
      line.append($createMilestoneNode("qt-s"), $createTextNode("text")),
    );
    expect(blocksForwardDelete(editor)).toBe(true);
  });

  it("refuses a forward delete onto a hidden construct past the marker", async () => {
    const { editor } = await caretInFrontOfMarker((line) =>
      line.append($createUnknownNode("figure", "fig"), $createTextNode("text")),
    );
    expect(blocksForwardDelete(editor)).toBe(true);
  });

  it("refuses a forward delete in front of an empty line's marker, which would merge the next line", async () => {
    const { editor } = await caretInFrontOfMarker(() => undefined);
    expect(blocksForwardDelete(editor)).toBe(true);
  });

  it("moves a caret past the marker only where a forward delete may start", async () => {
    const { editor: withText } = await caretInFrontOfMarker((para) =>
      para.append($createTextNode("text")),
    );
    await sutUpdate(withText, () => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("no range selection");
      expect($moveCaretPastGutterGlyph(selection)).toBe(true);
      expect(selection.anchor.getNode().getTextContent()).toBe("text");
      expect(selection.anchor.offset).toBe(0);
      expect(selection.isCollapsed()).toBe(true);
    });

    const { editor: withVerse } = await caretInFrontOfMarker((para) =>
      para.append($createImmutableVerseNode("1")),
    );
    await sutUpdate(withVerse, () => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("no range selection");
      expect($moveCaretPastGutterGlyph(selection)).toBe(false);
      expect(selection.anchor.offset).toBe(0);
    });
  });

  it("narrows a range that starts in front of the marker to start past it", async () => {
    const { editor, line } = await caretInFrontOfMarker((para) =>
      para.append($createTextNode("text")),
    );
    await sutUpdate(editor, () => {
      const text = line.getLastChild();
      if (!$isTextNode(text)) throw new Error("no line text");
      const selection = $createRangeSelection();
      selection.anchor.set(line.getKey(), 0, "element");
      selection.focus.set(text.getKey(), 4, "text");
      $narrowSelectionPastGutterGlyph(selection);
      expect(selection.anchor.key).toBe(text.getKey());
      expect(selection.anchor.offset).toBe(0);
    });
  });
});

describe("$shouldRefuseExtendedDelete and the chapter rule", () => {
  it("refuses an extent over a verse, or one that ends inside a hidden construct", async () => {
    let line: ParaNode;
    let before: TextNode;
    let after: TextNode;
    let caption: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      line = $createParaNode("p");
      before = $createTextNode("before ");
      after = $createTextNode(" after");
      caption = $createTextNode("caption");
      $getRoot().append(
        line.append(
          before,
          $createImmutableVerseNode("2"),
          after,
          $createUnknownNode("figure", "fig").append(caption),
        ),
      );
    });
    editor.getEditorState().read(() => {
      const range = (anchor: [TextNode, number], focus: [TextNode, number]) => {
        const selection = $createRangeSelection();
        selection.anchor.set(anchor[0].getKey(), anchor[1], "text");
        selection.focus.set(focus[0].getKey(), focus[1], "text");
        return selection;
      };
      expect($shouldRefuseExtendedDelete(range([before, 2], [after, 2]))).toBe(true);
      expect($shouldRefuseExtendedDelete(range([after, 2], [caption, 3]))).toBe(true);
      expect($shouldRefuseExtendedDelete(range([after, 1], [after, 4]))).toBe(false);
    });
  });

  it("counts a range covering a chapter marker as crossing a block, but not a caret beside one", async () => {
    let closing: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      closing = $createTextNode("closing");
      $getRoot().append(
        $createParaNode("p").append(closing),
        $createImmutableChapterNode("2"),
        $createParaNode("p").append($createTextNode("next")),
      );
    });
    editor.getEditorState().read(() => {
      const range = $createRangeSelection();
      range.anchor.set(closing.getKey(), "closing".length, "text");
      range.focus.set("root", 2, "element");
      expect($selectionSpansBlockBoundary(range)).toBe(true);

      const caret = $createRangeSelection();
      caret.anchor.set(closing.getKey(), "closing".length, "text");
      caret.focus.set(closing.getKey(), "closing".length, "text");
      expect($selectionSpansBlockBoundary(caret)).toBe(false);
    });
  });
});
