// Should only be used on nodes that are initialized in the test environment.
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { $createImmutableVerseNode, ImmutableVerseNode } from "../../nodes/usj";
import { PARA_MERGE_ARMED_CLASS_NAME, StructureKeyboardPlugin } from "./StructureKeyboardPlugin";
import { HistoryPlugin } from "../History/HistoryPlugin";
import { $isBookPrefixNode } from "./ParaMarkerPrefixCursorGuardPlugin";
import {
  $createBookLine,
  baseTestEnvironment,
  pressKey,
  updateSelection,
} from "./react-test.utils";
import { act } from "@testing-library/react";
import {
  $createNodeSelection,
  $getRoot,
  $createTextNode,
  $getSelection,
  $isNodeSelection,
  $isRangeSelection,
  $setSelection,
  LexicalEditor,
  LexicalNode,
  TextNode,
  COMMAND_PRIORITY_LOW,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  CUT_COMMAND,
  DRAGSTART_COMMAND,
  DROP_COMMAND,
  PASTE_COMMAND,
  UNDO_COMMAND,
  REDO_COMMAND,
} from "lexical";
import {
  $createBookNode,
  $createCaretHostNode,
  $createChapterNode,
  $createGutterMarkerNode,
  $createImmutableChapterNode,
  $createMarkerNode,
  $createMarkerTrailingSeparator,
  $createParaNode,
  $isBookNode,
  $isImpliedParaNode,
  $isParaNode,
  BookNode,
  createEmptyHistoryState,
  ParaNode,
} from "shared";

// NOTE: jsdom cannot drive collapsed mid-text deletes (domSelection.modify) or printable-char
// insertion via dispatchCommand, and IS_APPLE is false so Alt+Backspace is a no-op. Those cases
// (mid-text-allowed, Alt/Cmd+Backspace blocked, insertText-allowed, verse removal) are covered as
// deterministic unit tests in structureKeyboard.utils.test.ts. Behavior tests here cover only
// the jsdom-working paths: block-boundary merge and Enter split.
describe("StructureKeyboardPlugin — keyboard", () => {
  it("blocks Backspace-at-start merge when protected", async () => {
    let t2: TextNode;
    const { editor } = await protectedEnvironment(() => {
      t2 = $createTextNode("second");
      $getRoot().append(
        $createParaNode("p").append($createTextNode("first")),
        $createParaNode("q").append(t2),
      );
    });
    updateSelection(editor, t2!, 0);

    await pressKey(editor, "Backspace", 0);

    editor.getEditorState().read(() => {
      expect($getRoot().getChildrenSize()).toBe(2); // unchanged
    });
  });

  // The `\id` line's BookNode is content like any paragraph's — protected mode must recognize a
  // caret at the END of its own content as a block boundary too, or Delete there merges the
  // following paragraph straight into the line, exactly as if the line were not a block at all.
  it("blocks Delete at the end of the \\id line's content when protected", async () => {
    let bookText: TextNode;
    const { editor } = await protectedEnvironment(() => {
      bookText = $createTextNode("GenesisTitle");
      $getRoot().append(
        $createBookNode("GEN").append(bookText),
        $createParaNode("h").append($createTextNode("Genesis")),
      );
    });
    updateSelection(editor, bookText!, "GenesisTitle".length);

    await pressKey(editor, "Delete", 0);

    editor.getEditorState().read(() => {
      expect($getRoot().getChildrenSize()).toBe(2); // unchanged: the \h paragraph still stands
      const book = $getRoot().getChildren()[0];
      if (!$isBookNode(book)) throw new Error("expected the BookNode to remain");
      expect(book.getTextContent()).toBe("GenesisTitle");
    });
  });

  // Same rule, Rule-1 selection-replacement half: a selection from inside the line into the next
  // paragraph must not collapse the two blocks into one when protected.
  it("blocks controlled text insertion over a selection spanning from the \\id line into the next paragraph", async () => {
    let bookText: TextNode;
    let headingText: TextNode;
    const { editor } = await protectedEnvironment(() => {
      bookText = $createTextNode("Genesis");
      headingText = $createTextNode("Heading");
      $getRoot().append(
        $createBookNode("GEN").append(bookText),
        $createParaNode("h").append(headingText),
      );
    });
    updateSelection(editor, bookText!, 3, headingText!, 3);

    await act(async () => {
      editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "x");
    });

    editor.getEditorState().read(() => {
      expect($getRoot().getChildrenSize()).toBe(2); // not merged/replaced
    });
  });

  it("blocks Enter (paragraph split) when protected", async () => {
    let t1: TextNode;
    const { editor } = await protectedEnvironment(() => {
      t1 = $createTextNode("abcdef");
      $getRoot().append($createParaNode("p").append(t1));
    });
    updateSelection(editor, t1!, 3);

    await pressKey(editor, "Enter", 0);

    editor.getEditorState().read(() => {
      expect($getRoot().getChildrenSize()).toBe(1); // not split
    });
  });
});

describe("StructureKeyboardPlugin — non-keydown vectors", () => {
  it("blocks controlled text insertion over a selection spanning a block boundary when protected", async () => {
    let t1: TextNode;
    let t2: TextNode;
    const { editor } = await protectedEnvironment(() => {
      t1 = $createTextNode("first");
      t2 = $createTextNode("second");
      $getRoot().append($createParaNode("p").append(t1), $createParaNode("q").append(t2));
    });
    updateSelection(editor, t1!, 0, t2!, 6);

    await act(async () => {
      editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "x");
    });

    editor.getEditorState().read(() => {
      expect($getRoot().getChildrenSize()).toBe(2); // not merged/replaced
    });
  });

  it("blocks insertion over a selection containing a verse marker when protected", async () => {
    let para: ParaNode;
    let t1: TextNode;
    const { editor } = await protectedEnvironment(() => {
      para = $createParaNode("p");
      t1 = $createTextNode("text");
      $getRoot().append(para.append($createImmutableVerseNode("1"), t1));
    });
    updateSelection(editor, para!, 0, t1!, 4);

    await act(async () => {
      editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "x");
    });

    editor.getEditorState().read(() => {
      const firstBlock = $getRoot().getChildren()[0];
      if (!$isParaNode(firstBlock)) throw new Error("Expected a ParaNode");
      const hasVerse = firstBlock
        .getChildren()
        .some((n: LexicalNode) => n instanceof ImmutableVerseNode);
      expect(hasVerse).toBe(true); // verse marker survives
    });
  });

  it("consumes CUT over an unsafe selection when protected (low-priority spy not reached)", async () => {
    let t1: TextNode;
    let t2: TextNode;
    const { editor } = await protectedEnvironment(() => {
      t1 = $createTextNode("first");
      t2 = $createTextNode("second");
      $getRoot().append($createParaNode("p").append(t1), $createParaNode("q").append(t2));
    });
    updateSelection(editor, t1!, 0, t2!, 6);

    const spy = vi.fn(() => false);
    const unregister = editor.registerCommand(CUT_COMMAND, spy, COMMAND_PRIORITY_LOW);
    await act(async () => {
      editor.dispatchCommand(CUT_COMMAND, null);
    });
    unregister();

    expect(spy).not.toHaveBeenCalled(); // HIGH handler blocked propagation
  });

  it("consumes DRAGSTART over an unsafe selection when protected (low-priority spy not reached)", async () => {
    let t1: TextNode;
    let t2: TextNode;
    const { editor } = await protectedEnvironment(() => {
      t1 = $createTextNode("first");
      t2 = $createTextNode("second");
      $getRoot().append($createParaNode("p").append(t1), $createParaNode("q").append(t2));
    });
    updateSelection(editor, t1!, 0, t2!, 6);

    const spy = vi.fn(() => false);
    const unregister = editor.registerCommand(DRAGSTART_COMMAND, spy, COMMAND_PRIORITY_LOW);
    await act(async () => {
      editor.dispatchCommand(DRAGSTART_COMMAND, null as unknown as DragEvent);
    });
    unregister();

    expect(spy).not.toHaveBeenCalled(); // HIGH handler blocked propagation
  });
});

function htmlPasteEvent(html: string, plain = ""): ClipboardEvent {
  return {
    clipboardData: { getData: (type: string) => (type === "text/html" ? html : plain) },
    preventDefault: vi.fn(),
  } as unknown as ClipboardEvent;
}

function htmlDropEvent(html: string, plain = ""): DragEvent {
  return {
    dataTransfer: { getData: (type: string) => (type === "text/html" ? html : plain) },
    preventDefault: vi.fn(),
  } as unknown as DragEvent;
}

const VERSE_HTML =
  '<p data-marker="p" class="para">' +
  '<span data-marker="v" data-number="2" class="verse">2</span>pasted</p>';

/** What Lexical's copy writes for a triple-clicked `\s1` heading: its gutter marker, then its words. */
const COPIED_HEADING_HTML =
  '<span data-text-type="marker" class="marker">\\s1&nbsp;</span><span>Heading</span>';

describe("StructureKeyboardPlugin — paste/drop payload sanitization", () => {
  it("strips a verse marker from pasted HTML, inserting text only, when protected", async () => {
    let t1: TextNode;
    const { editor } = await protectedEnvironment(() => {
      t1 = $createTextNode("hello world");
      $getRoot().append($createParaNode("p").append(t1));
    });
    updateSelection(editor, t1!, 5);

    await act(async () => {
      editor.update(() => {
        editor.dispatchCommand(PASTE_COMMAND, htmlPasteEvent(VERSE_HTML));
      });
    });

    editor.getEditorState().read(() => {
      expect($getRoot().getChildrenSize()).toBe(1); // no new paragraph
      const para = $getRoot().getChildren()[0];
      if (!$isParaNode(para)) throw new Error("Expected a ParaNode");
      const hasVerse = para.getChildren().some((n: LexicalNode) => n instanceof ImmutableVerseNode);
      expect(hasVerse).toBe(false); // verse marker stripped
      expect($getRoot().getTextContent()).toContain("pasted"); // text kept
    });
  });

  it("drops a copied heading's gutter marker from pasted HTML, inserting its words only, when protected", async () => {
    let t1: TextNode;
    const { editor } = await protectedEnvironment(() => {
      t1 = $createTextNode("hello world");
      $getRoot().append($createParaNode("p").append(t1));
    });
    updateSelection(editor, t1!, 6);

    await act(async () => {
      editor.update(() => {
        editor.dispatchCommand(PASTE_COMMAND, htmlPasteEvent(COPIED_HEADING_HTML));
      });
    });

    editor.getEditorState().read(() => {
      expect($getRoot().getChildrenSize()).toBe(1);
      expect($getRoot().getTextContent()).toBe("hello Headingworld");
    });
  });

  it("strips a verse marker from dropped HTML, inserting text only, when protected", async () => {
    let t1: TextNode;
    const { editor } = await protectedEnvironment(() => {
      t1 = $createTextNode("hello world");
      $getRoot().append($createParaNode("p").append(t1));
    });
    updateSelection(editor, t1!, 5);

    await act(async () => {
      editor.update(() => {
        editor.dispatchCommand(DROP_COMMAND, htmlDropEvent(VERSE_HTML));
      });
    });

    editor.getEditorState().read(() => {
      const para = $getRoot().getChildren()[0];
      if (!$isParaNode(para)) throw new Error("Expected a ParaNode");
      const hasVerse = para.getChildren().some((n: LexicalNode) => n instanceof ImmutableVerseNode);
      expect(hasVerse).toBe(false);
      expect($getRoot().getTextContent()).toContain("pasted");
    });
  });

  it("lets a plain-text-only paste pass through to the default handler when protected", async () => {
    let t1: TextNode;
    const { editor } = await protectedEnvironment(() => {
      t1 = $createTextNode("hello world");
      $getRoot().append($createParaNode("p").append(t1));
    });
    updateSelection(editor, t1!, 5);

    const spy = vi.fn(() => false);
    const unregister = editor.registerCommand(PASTE_COMMAND, spy, COMMAND_PRIORITY_LOW);
    await act(async () => {
      editor.dispatchCommand(PASTE_COMMAND, htmlPasteEvent("", "plain text"));
    });
    unregister();

    expect(spy).toHaveBeenCalled(); // our handler returned false; default reached
  });

  it("consumes paste when there is no range selection, inserting nothing (structure-safe silent drop)", async () => {
    let t1: TextNode;
    const { editor } = await protectedEnvironment(() => {
      t1 = $createTextNode("hello world");
      $getRoot().append($createParaNode("p").append(t1));
    });

    // Clear selection so $getSelection() returns null inside the command handler,
    // exercising the !$isRangeSelection branch in $sanitizeAndInsert.
    await act(async () => {
      editor.update(() => $setSelection(null), { discrete: true });
    });

    const spy = vi.fn(() => false);
    const unregister = editor.registerCommand(PASTE_COMMAND, spy, COMMAND_PRIORITY_LOW);
    await act(async () => {
      editor.update(() => {
        editor.dispatchCommand(PASTE_COMMAND, htmlPasteEvent(VERSE_HTML));
      });
    });
    unregister();

    expect(spy).not.toHaveBeenCalled(); // HIGH handler consumed the command
    editor.getEditorState().read(() => {
      // No verse node inserted and document text unchanged
      const para = $getRoot().getChildren()[0];
      if (!$isParaNode(para)) throw new Error("Expected a ParaNode");
      const hasVerse = para.getChildren().some((n: LexicalNode) => n instanceof ImmutableVerseNode);
      expect(hasVerse).toBe(false);
      expect($getRoot().getTextContent()).not.toContain("pasted");
    });
  });

  // A drop with no range to land at is refused, as a paste is: the default handler would let the
  // browser insert the payload itself, structure and all.
  it.each([
    ["no selection", () => $setSelection(null)],
    [
      "a node selection",
      () => {
        const selection = $createNodeSelection();
        const glyph = $getRoot().getFirstChildOrThrow<ParaNode>().getFirstChildOrThrow();
        selection.add(glyph.getKey());
        $setSelection(selection);
      },
    ],
  ])("refuses a drop from %s, inserting nothing, when protected", async (_name, $select) => {
    const { editor } = await protectedEnvironment(() => {
      $getRoot().append(
        $createParaNode("p").append(
          $createGutterMarkerNode("\\p\u00a0"),
          $createTextNode("hello world"),
        ),
      );
    });
    await act(async () => {
      editor.update($select, { discrete: true });
    });
    const before = JSON.stringify(editor.getEditorState().toJSON());
    const event = htmlDropEvent(VERSE_HTML);
    const spy = vi.fn(() => false);
    const unregister = editor.registerCommand(DROP_COMMAND, spy, COMMAND_PRIORITY_LOW);

    await act(async () => {
      editor.dispatchCommand(DROP_COMMAND, event);
    });
    unregister();

    expect(event.preventDefault).toHaveBeenCalled();
    expect(spy).not.toHaveBeenCalled();
    expect(JSON.stringify(editor.getEditorState().toJSON())).toBe(before);
  });

  it("still hard-blocks paste over a selection spanning a block boundary when protected", async () => {
    let t1: TextNode;
    let t2: TextNode;
    const { editor } = await protectedEnvironment(() => {
      t1 = $createTextNode("first");
      t2 = $createTextNode("second");
      $getRoot().append($createParaNode("p").append(t1), $createParaNode("q").append(t2));
    });
    updateSelection(editor, t1!, 0, t2!, 6);

    const spy = vi.fn(() => false);
    const unregister = editor.registerCommand(PASTE_COMMAND, spy, COMMAND_PRIORITY_LOW);
    await act(async () => {
      editor.dispatchCommand(PASTE_COMMAND, htmlPasteEvent(VERSE_HTML));
    });
    unregister();

    expect(spy).not.toHaveBeenCalled(); // HIGH handler consumed it
    editor.getEditorState().read(() => {
      expect($getRoot().getChildrenSize()).toBe(2); // unchanged
    });
  });
});

describe("StructureKeyboardPlugin — two-step delete (unprotected)", () => {
  it("verse Backspace: first press node-selects the verse, second press removes it", async () => {
    let verse: ImmutableVerseNode;
    let t1: TextNode;
    const { editor } = await guardedEnvironment(() => {
      verse = $createImmutableVerseNode("1");
      t1 = $createTextNode("text");
      $getRoot().append($createParaNode("p").append(verse, t1));
    });
    updateSelection(editor, t1!, 0);

    await pressKey(editor, "Backspace", 0);
    editor.getEditorState().read(() => {
      const sel = $getSelection();
      expect($isNodeSelection(sel)).toBe(true);
      expect(sel!.getNodes().some((n) => n instanceof ImmutableVerseNode)).toBe(true);
      // not yet deleted
      const para = $getRoot().getChildren()[0];
      const hasVerse =
        "getChildren" in para &&
        (para as ParaNode).getChildren().some((n) => n instanceof ImmutableVerseNode);
      expect(hasVerse).toBe(true);
    });

    await pressKey(editor, "Backspace", 0);
    editor.getEditorState().read(() => {
      const para = $getRoot().getChildren()[0] as ParaNode;
      expect(para.getChildren().some((n) => n instanceof ImmutableVerseNode)).toBe(false);
      expect(para.getTextContent()).toBe("text");
    });
  });

  it("verse Delete (forward): first press selects, second removes the following verse", async () => {
    let verse: ImmutableVerseNode;
    let t1: TextNode;
    const { editor } = await guardedEnvironment(() => {
      t1 = $createTextNode("text");
      verse = $createImmutableVerseNode("2");
      $getRoot().append($createParaNode("p").append(t1, verse));
    });
    updateSelection(editor, t1!, 4);

    await pressKey(editor, "Delete", 0);
    editor.getEditorState().read(() => {
      expect($isNodeSelection($getSelection())).toBe(true);
    });

    await pressKey(editor, "Delete", 0);
    editor.getEditorState().read(() => {
      const para = $getRoot().getChildren()[0] as ParaNode;
      expect(para.getChildren().some((n) => n instanceof ImmutableVerseNode)).toBe(false);
    });
  });

  it("paragraph Backspace at start: first press arms without selecting the text, second merges into previous", async () => {
    let q: ParaNode;
    let t2: TextNode;
    const { editor } = await guardedEnvironment(() => {
      q = $createParaNode("q");
      t2 = $createTextNode("second");
      $getRoot().append($createParaNode("p").append($createTextNode("first")), q.append(t2));
    });
    updateSelection(editor, t2!, 0);

    await pressKey(editor, "Backspace", 0);
    editor.getEditorState().read(() => {
      // Armed, with the caret left where it was: the paragraph's text is not selected.
      const sel = $getSelection();
      expect($isRangeSelection(sel) && sel.isCollapsed()).toBe(true);
      expect($isRangeSelection(sel) && sel.anchor.key).toBe(t2!.getKey());
      expect($getRoot().getChildrenSize()).toBe(2); // not yet merged
    });

    await pressKey(editor, "Backspace", 0);
    editor.getEditorState().read(() => {
      expect($getRoot().getChildrenSize()).toBe(1);
      const merged = $getRoot().getChildren()[0] as ParaNode;
      expect(merged.getMarker()).toBe("p");
      expect(merged.getTextContent()).toBe("firstsecond");
    });
  });

  // The `\id` line's BookNode is a valid merge target too, the same as a paragraph — the line is
  // content like any paragraph's (docs/standard-view-invariants.md), and a paragraph directly
  // below it merges INTO it when its whole marker is deleted. Before this fix, the confirming
  // Backspace here matched the two-step gate but did nothing (the merge only recognized a
  // ParaNode predecessor): a third, un-gated Backspace then erased the paragraph's own text via
  // Lexical's default handling of the still-live range selection from the first press.
  it("paragraph Backspace at start merges into the \\id line's BookNode", async () => {
    let book: BookNode;
    let t2: TextNode;
    const { editor } = await guardedEnvironment(() => {
      book = $createBookNode("GEN");
      t2 = $createTextNode("second");
      $getRoot().append(book.append($createTextNode("first")), $createParaNode("q").append(t2));
    });
    updateSelection(editor, t2!, 0);

    await pressKey(editor, "Backspace", 0);
    editor.getEditorState().read(() => {
      // Armed, with the caret left where it was: the paragraph's text is not selected.
      const sel = $getSelection();
      expect($isRangeSelection(sel) && sel.isCollapsed()).toBe(true);
      expect($isRangeSelection(sel) && sel.anchor.key).toBe(t2!.getKey());
      expect($getRoot().getChildrenSize()).toBe(2); // not yet merged
    });

    await pressKey(editor, "Backspace", 0);
    editor.getEditorState().read(() => {
      expect($getRoot().getChildrenSize()).toBe(1);
      const merged = $getRoot().getChildren()[0];
      if (!$isBookNode(merged)) throw new Error("expected the BookNode to remain");
      expect(merged.getTextContent()).toBe("firstsecond");
    });
  });

  // markerMode "editable" renders a paragraph's marker as a leading [MarkerNode, trailing
  // separator] prefix inside the paragraph itself (markerEditDeletion.utils.ts's
  // `$createMarkerPrefix`). Unlike that file's own merge, guarded structure-protection mode's
  // merge runs straight off the keystroke with no earlier pass to strip the marker text, so the
  // prefix is still there to drop. The caret starts as an element point on the paragraph itself
  // (offset 0, before the prefix) — the true structural start `$caretAtParaStart` arms on; the
  // position right after the prefix has a previous sibling (the prefix) and does not arm.
  it("paragraph Backspace at start drops the merging paragraph's own marker prefix, not just the separator", async () => {
    let q: ParaNode;
    const { editor } = await guardedEnvironment(() => {
      q = $createParaNode("q");
      $getRoot().append(
        $createParaNode("p").append($createTextNode("first")),
        q.append(
          $createMarkerNode("q"),
          $createMarkerTrailingSeparator(),
          $createTextNode("second"),
        ),
      );
    });
    updateSelection(editor, q!, 0);

    await pressKey(editor, "Backspace", 0);
    await pressKey(editor, "Backspace", 0);

    editor.getEditorState().read(() => {
      expect($getRoot().getChildrenSize()).toBe(1);
      const merged = $getRoot().getChildren()[0] as ParaNode;
      expect(merged.getMarker()).toBe("p");
      // No fused marker glyph (`\q`) or leftover separator between the two paragraphs' text.
      expect(merged.getTextContent()).toBe("firstsecond");
    });
  });

  it("paragraph Backspace at start drops the marker prefix when merging into the \\id line's BookNode", async () => {
    let book: BookNode;
    let q: ParaNode;
    const { editor } = await guardedEnvironment(() => {
      q = $createParaNode("h");
      book = $createBookNode("GEN");
      $getRoot().append(
        book.append($createTextNode("first")),
        q.append(
          $createMarkerNode("h"),
          $createMarkerTrailingSeparator(),
          $createTextNode("second"),
        ),
      );
    });
    updateSelection(editor, q!, 0);

    await pressKey(editor, "Backspace", 0);
    await pressKey(editor, "Backspace", 0);

    editor.getEditorState().read(() => {
      expect($getRoot().getChildrenSize()).toBe(1);
      const merged = $getRoot().getChildren()[0];
      if (!$isBookNode(merged)) throw new Error("expected the BookNode to remain");
      // No fused marker glyph (`\h`) or leftover separator between the line and the paragraph.
      expect(merged.getTextContent()).toBe("firstsecond");
    });
  });

  it("Backspace twice removes an empty paragraph with no children", async () => {
    let empty: ParaNode;
    const { editor } = await guardedEnvironment(() => {
      empty = $createParaNode("p");
      $getRoot().append($createParaNode("p").append($createTextNode("first")), empty);
    });
    updateSelection(editor, empty!, 0);

    await pressKey(editor, "Backspace", 0);
    expect(editor.getRootElement()?.getAttribute("data-verse-delete-kind")).toBe("removeEmptyPara");
    await pressKey(editor, "Backspace", 0);

    editor.getEditorState().read(() => {
      expect($getRoot().getChildrenSize()).toBe(1);
      expect($getRoot().getTextContent()).toBe("first");
    });
  });

  it("paragraph Delete at end: first press arms the next paragraph, second merges it up", async () => {
    let t1: TextNode;
    const { editor } = await guardedEnvironment(() => {
      t1 = $createTextNode("first");
      $getRoot().append(
        $createParaNode("p").append(t1),
        $createParaNode("q").append($createTextNode("second")),
      );
    });
    updateSelection(editor, t1!, 5);

    await pressKey(editor, "Delete", 0);
    await pressKey(editor, "Delete", 0);
    editor.getEditorState().read(() => {
      expect($getRoot().getChildrenSize()).toBe(1);
      expect(($getRoot().getChildren()[0] as ParaNode).getTextContent()).toBe("firstsecond");
    });
  });

  it("mid-text Backspace does nothing structural (handler returns false)", async () => {
    let t1: TextNode;
    const { editor } = await guardedEnvironment(() => {
      t1 = $createTextNode("abcdef");
      $getRoot().append($createParaNode("p").append(t1));
    });
    updateSelection(editor, t1!, 3);

    // jsdom does not implement domSelection.modify, so the RichText plugin's deleteCharacter
    // call throws when it falls through after the plugin returns false. Catch the jsdom error
    // and verify our plugin did NOT arm (no NodeSelection, no block select).
    try {
      await pressKey(editor, "Backspace", 0);
    } catch (e) {
      // jsdom does not implement domSelection.modify; the RichText fallthrough throws when the
      // handler returns false and Lexical attempts a native collapsed delete. Anything else is real.
      if (!(e instanceof Error) || !e.message.includes("domSelection.modify")) throw e;
    }
    editor.getEditorState().read(() => {
      // No arm: selection stays a collapsed range caret (no NodeSelection, no block select).
      const sel = $getSelection();
      expect($isNodeSelection(sel)).toBe(false);
      expect(sel && !sel.isCollapsed()).toBe(false);
    });
  });
});

describe("StructureKeyboardPlugin — two-step delete guards", () => {
  it("latch resets when the caret moves between presses (no delete)", async () => {
    let verse: ImmutableVerseNode;
    let t1: TextNode;
    const { editor } = await guardedEnvironment(() => {
      verse = $createImmutableVerseNode("1");
      t1 = $createTextNode("text");
      $getRoot().append($createParaNode("p").append(verse, t1));
    });
    updateSelection(editor, t1!, 0);

    await pressKey(editor, "Backspace", 0); // arm
    updateSelection(editor, t1!, 2); // move caret away → latch clears
    // Second Backspace is now mid-text (latch cleared) → plugin returns false → native delete →
    // jsdom throws because domSelection.modify is not implemented.
    try {
      await pressKey(editor, "Backspace", 0); // should NOT fire the armed delete
    } catch (e) {
      if (!(e instanceof Error) || !e.message.includes("domSelection.modify")) throw e;
    }

    editor.getEditorState().read(() => {
      const para = $getRoot().getChildren()[0] as ParaNode;
      expect(para.getChildren().some((n) => n instanceof ImmutableVerseNode)).toBe(true);
    });
  });

  it("mismatched direction cancels without deleting", async () => {
    let verse: ImmutableVerseNode;
    let t1: TextNode;
    const { editor } = await guardedEnvironment(() => {
      verse = $createImmutableVerseNode("1");
      t1 = $createTextNode("text");
      $getRoot().append($createParaNode("p").append(verse, t1));
    });
    updateSelection(editor, t1!, 0);

    await pressKey(editor, "Backspace", 0); // arm backward
    // Mismatched direction: plugin handles this (preventDefault, returns true), no native path hit.
    await pressKey(editor, "Delete", 0); // forward → cancel, no delete

    editor.getEditorState().read(() => {
      const para = $getRoot().getChildren()[0] as ParaNode;
      expect(para.getChildren().some((n) => n instanceof ImmutableVerseNode)).toBe(true);
    });
  });

  it("no-neighbor paragraph boundary does not arm (first para start)", async () => {
    let t1: TextNode;
    const { editor } = await guardedEnvironment(() => {
      t1 = $createTextNode("first");
      $getRoot().append($createParaNode("p").append(t1));
    });
    updateSelection(editor, t1!, 0);

    // No previous para to arm against → plugin returns false → native delete → jsdom may throw.
    try {
      await pressKey(editor, "Backspace", 0);
    } catch (e) {
      if (!(e instanceof Error) || !e.message.includes("domSelection.modify")) throw e;
    }
    editor.getEditorState().read(() => {
      expect($isNodeSelection($getSelection())).toBe(false);
      expect($getRoot().getChildrenSize()).toBe(1);
    });
  });

  it.each([
    ["with a gutter marker", true],
    ["with no marker shown", false],
  ])(
    "Backspace at the start of a chapter's first paragraph (%s) is refused, not armed",
    async (_label, hasGutterMarker) => {
      let para: ParaNode;
      let t1: TextNode;
      const { editor } = await guardedEnvironment(() => {
        t1 = $createTextNode("first");
        para = $createParaNode("p");
        $getRoot().append(
          $createChapterNode("1"),
          hasGutterMarker ? para.append($createGutterMarkerNode("\\p "), t1) : para.append(t1),
        );
      });
      updateSelection(editor, t1!, 0);
      const before = JSON.stringify(editor.getEditorState().toJSON());

      // Claimed by the plugin (preventDefault, returns true), so no native path is hit.
      await pressKey(editor, "Backspace", 0);
      await pressKey(editor, "Backspace", 0);

      expect(JSON.stringify(editor.getEditorState().toJSON())).toBe(before);
      expect(editor.getRootElement()?.classList.contains("verse-delete-armed")).toBe(false);
    },
  );

  it("protected mode never runs the two-step path (boundary delete is blocked)", async () => {
    let t2: TextNode;
    const { editor } = await protectedEnvironment(() => {
      t2 = $createTextNode("second");
      $getRoot().append(
        $createParaNode("p").append($createTextNode("first")),
        $createParaNode("q").append(t2),
      );
    });
    updateSelection(editor, t2!, 0);

    // Protected mode: plugin blocks this (preventDefault, returns true) — no native path hit.
    await pressKey(editor, "Backspace", 0);
    editor.getEditorState().read(() => {
      // Blocked, not armed: still two paragraphs, selection stays a collapsed caret.
      expect($getRoot().getChildrenSize()).toBe(2);
      expect($isNodeSelection($getSelection())).toBe(false);
    });
  });

  it("manual whole-paragraph selection + Backspace is NOT hijacked into a merge", async () => {
    let q: ParaNode;
    let t2: TextNode;
    const { editor } = await guardedEnvironment(() => {
      q = $createParaNode("q");
      t2 = $createTextNode("second");
      $getRoot().append($createParaNode("p").append($createTextNode("first")), q.append(t2));
    });
    // User selects the whole second paragraph by hand (latch is empty).
    updateSelection(editor, t2!, 0, t2!, 6);

    // No latch → plugin's FIRE branch is skipped; ARM requires collapsed selection → also skipped.
    // Plugin returns false → native range delete → jsdom does not implement this either → may throw.
    try {
      await pressKey(editor, "Backspace", 0);
    } catch (e) {
      if (!(e instanceof Error) || !e.message.includes("domSelection.modify")) throw e;
    }
    editor.getEditorState().read(() => {
      // With no latch, the handler does not treat this as an armed merge; both paras remain
      // (jsdom does not perform the native range delete, so structure is unchanged here —
      // the point is that OUR merge did not run and "first" was not joined with leftover text).
      const root = $getRoot();
      expect(root.getChildrenSize()).toBe(2);
      expect((root.getChildren()[0] as ParaNode).getTextContent()).toBe("first");
    });
  });

  it.each([
    ["Delete", 0],
    ["Backspace", 1],
  ] as const)(
    "%s from inside an empty verse's caret host arms the neighboring verse",
    async (key, offset) => {
      // The empty-verse guard rests the caret in a placeholder-only host between two verses. Each
      // key starts from the offset facing the placeholder, so it would delete the placeholder
      // rather than reach the verse if the host's two offsets were not read as one position.
      let host: TextNode;
      const { editor } = await guardedEnvironment(() => {
        host = $createCaretHostNode();
        $getRoot().append(
          $createParaNode("p").append(
            $createImmutableVerseNode("3"),
            host,
            $createImmutableVerseNode("4"),
            $createTextNode("four"),
          ),
        );
      });
      updateSelection(editor, host!, offset);

      await pressKey(editor, key, 0);

      expect(editor.getRootElement()?.classList.contains("verse-delete-armed")).toBe(true);
      editor.getEditorState().read(() => {
        // Nothing was deleted: the host and both verses are still there.
        expect($getRoot().getFirstChildOrThrow<ParaNode>().getChildrenSize()).toBe(4);
      });
    },
  );
});

describe("StructureKeyboardPlugin — two-step delete for range selections with verse markers", () => {
  it("first Backspace arms (no delete), second Backspace deletes the whole selection", async () => {
    let t1: TextNode;
    let verse: ImmutableVerseNode;
    let t2: TextNode;
    const { editor } = await guardedEnvironment(() => {
      t1 = $createTextNode("ab");
      verse = $createImmutableVerseNode("2");
      t2 = $createTextNode("cd");
      $getRoot().append($createParaNode("p").append(t1, verse, t2));
    });
    // Select from inside "ab" across the verse marker into "cd".
    updateSelection(editor, t1!, 1, t2!, 1);

    await pressKey(editor, "Backspace", 0); // arm
    editor.getEditorState().read(() => {
      const para = $getRoot().getChildren()[0] as ParaNode;
      expect(para.getChildren().some((n) => n instanceof ImmutableVerseNode)).toBe(true); // not yet deleted
    });

    await pressKey(editor, "Backspace", 0); // fire
    editor.getEditorState().read(() => {
      const para = $getRoot().getChildren()[0] as ParaNode;
      expect(para.getChildren().some((n) => n instanceof ImmutableVerseNode)).toBe(false); // verse gone
      expect(para.getTextContent()).toBe("ad"); // "b", verse, and "c" removed
    });
  });

  // The fire narrows the armed range itself before deleting it, rather than relying on the prefix
  // guard being mounted: a range starting before the `\id` line's immutable prefix (Ctrl+A
  // normalizes to exactly that) would otherwise lose the glyph along with the content.
  it("second Backspace keeps the \\id line's prefix when the armed range starts before it", async () => {
    let book: BookNode;
    let t2: TextNode;
    const { editor } = await guardedEnvironment(() => {
      book = $createBookLine("GEN");
      t2 = $createTextNode("cd");
      $getRoot().append(
        book.append($createTextNode("Genesis")),
        $createParaNode("p").append($createImmutableVerseNode("1"), t2),
      );
    });
    updateSelection(editor, book!, 0, t2!, 1);

    await pressKey(editor, "Backspace", 0); // arm
    await pressKey(editor, "Backspace", 0); // fire

    editor.getEditorState().read(() => {
      const first = $getRoot().getFirstChild();
      if (!$isBookNode(first)) throw new Error("expected the BookNode to remain");
      expect($isBookPrefixNode(first.getFirstChild())).toBe(true);
      expect(first.getTextContent()).not.toContain("Genesis");
      expect($getRoot().getTextContent()).not.toContain("Genesis");
      expect($getRoot().getTextContent()).toContain("d");
    });
  });

  it("toggles the verse-delete-armed class on the editor root while armed", async () => {
    let t1: TextNode;
    let verse: ImmutableVerseNode;
    let t2: TextNode;
    const { editor } = await guardedEnvironment(() => {
      t1 = $createTextNode("ab");
      verse = $createImmutableVerseNode("2");
      t2 = $createTextNode("cd");
      $getRoot().append($createParaNode("p").append(t1, verse, t2));
    });
    updateSelection(editor, t1!, 1, t2!, 1);

    await pressKey(editor, "Backspace", 0); // arm
    expect(editor.getRootElement()?.classList.contains("verse-delete-armed")).toBe(true);
  });

  it("mismatched direction cancels the armed range without deleting", async () => {
    let t1: TextNode;
    let verse: ImmutableVerseNode;
    let t2: TextNode;
    const { editor } = await guardedEnvironment(() => {
      t1 = $createTextNode("ab");
      verse = $createImmutableVerseNode("2");
      t2 = $createTextNode("cd");
      $getRoot().append($createParaNode("p").append(t1, verse, t2));
    });
    updateSelection(editor, t1!, 1, t2!, 1);

    await pressKey(editor, "Backspace", 0); // arm backward
    await pressKey(editor, "Delete", 0); // forward → cancel
    editor.getEditorState().read(() => {
      const para = $getRoot().getChildren()[0] as ParaNode;
      expect(para.getChildren().some((n) => n instanceof ImmutableVerseNode)).toBe(true); // survived
      expect(para.getTextContent()).toBe("abcd");
    });
  });
});

describe("StructureKeyboardPlugin — per-edit undo/redo for a run of verse deletions", () => {
  it("restores and re-deletes verses one at a time via Undo/Redo, with no data loss", async () => {
    let tailText: TextNode;
    const historyState = createEmptyHistoryState();
    const { editor } = await baseTestEnvironment(
      () => {
        tailText = $createTextNode("text");
        $getRoot().append(
          $createParaNode("p").append(
            $createImmutableVerseNode("1"),
            $createImmutableVerseNode("2"),
            $createImmutableVerseNode("3"),
            tailText,
          ),
        );
      },
      <>
        <StructureKeyboardPlugin structureProtectionMode="guarded" />
        <HistoryPlugin externalHistoryState={historyState} />
      </>,
    );
    updateSelection(editor, tailText!, 0);

    // Delete verse 3, then verse 2, then verse 1 - each via the two-step Backspace gesture.
    await pressKey(editor, "Backspace", 0); // arm verse 3
    await pressKey(editor, "Backspace", 0); // fire: verse 3 removed
    await pressKey(editor, "Backspace", 0); // arm verse 2
    await pressKey(editor, "Backspace", 0); // fire: verse 2 removed
    await pressKey(editor, "Backspace", 0); // arm verse 1
    await pressKey(editor, "Backspace", 0); // fire: verse 1 removed

    // Reads both the verse-marker numbers present AND the paragraph's full text content.
    // ImmutableVerseNode contributes no text of its own (a DecoratorNode), so the text should
    // always equal exactly "text" (the trailing TextNode) - a dropped or duplicated tail node
    // would show up here even though every verse-number assertion below still passed.
    const readState = () =>
      editor.getEditorState().read(() => {
        const para = $getRoot().getChildren()[0] as ParaNode;
        const verseNumbers = para
          .getChildren()
          .filter((n): n is ImmutableVerseNode => n instanceof ImmutableVerseNode)
          .map((n) => n.getNumber());
        return { verseNumbers, text: para.getTextContent() };
      });

    expect(readState()).toEqual({ verseNumbers: [], text: "text" });

    // Each Undo press restores exactly the deletion it corresponds to, LIFO - proving no deletion
    // (including the FIRST one, verse 3) is ever permanently lost from the undo stack.
    await act(async () => {
      editor.dispatchCommand(UNDO_COMMAND, undefined);
    });
    expect(readState()).toEqual({ verseNumbers: ["1"], text: "text" });

    await act(async () => {
      editor.dispatchCommand(UNDO_COMMAND, undefined);
    });
    expect(readState()).toEqual({ verseNumbers: ["1", "2"], text: "text" });

    await act(async () => {
      editor.dispatchCommand(UNDO_COMMAND, undefined);
    });
    expect(readState()).toEqual({ verseNumbers: ["1", "2", "3"], text: "text" });

    // A further Undo is a no-op - nothing left to undo.
    await act(async () => {
      editor.dispatchCommand(UNDO_COMMAND, undefined);
    });
    expect(readState()).toEqual({ verseNumbers: ["1", "2", "3"], text: "text" });

    // Redo walks back through the same sequence in reverse, fully symmetric.
    await act(async () => {
      editor.dispatchCommand(REDO_COMMAND, undefined);
    });
    expect(readState()).toEqual({ verseNumbers: ["1", "2"], text: "text" });

    await act(async () => {
      editor.dispatchCommand(REDO_COMMAND, undefined);
    });
    expect(readState()).toEqual({ verseNumbers: ["1"], text: "text" });

    await act(async () => {
      editor.dispatchCommand(REDO_COMMAND, undefined);
    });
    expect(readState()).toEqual({ verseNumbers: [], text: "text" });
  });
});

/** Each top-level block's marker (`c` for a chapter, none for a line with no marker) and text. */
function blocksOf(editor: LexicalEditor) {
  return editor.getEditorState().read(() =>
    $getRoot()
      .getChildren()
      .map((block) => ({
        marker: $isParaNode(block)
          ? block.getMarker()
          : $isImpliedParaNode(block)
            ? undefined
            : "c",
        text: block.getTextContent(),
      })),
  );
}

/** Asserts the caret is collapsed in a line with no marker. */
function expectCaretInBlankLine(editor: LexicalEditor) {
  editor.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
    expect(selection.isCollapsed()).toBe(true);
    expect($isImpliedParaNode(selection.focus.getNode().getTopLevelElementOrThrow())).toBe(true);
  });
}

/** Asserts the caret is collapsed somewhere in `para`. */
function expectCaretIn(editor: LexicalEditor, para: ParaNode) {
  editor.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
    expect(selection.isCollapsed()).toBe(true);
    expect(selection.focus.getNode().getTopLevelElementOrThrow().getKey()).toBe(para.getKey());
  });
}

// A paragraph right after a chapter has nothing before it to merge into. An empty one loses
// nothing by going, so it is removed instead, when a paragraph after it in the chapter can take the
// caret.
describe("StructureKeyboardPlugin — an empty paragraph after a chapter", () => {
  it.each([
    ["with its marker shown", true],
    ["with no marker shown", false],
  ])(
    "Backspace twice removes it (%s) and leaves the caret in the paragraph after it",
    async (_label, hasGutterMarker) => {
      let empty: ParaNode;
      let next: ParaNode;
      const { editor } = await guardedEnvironment(() => {
        empty = $createParaNode("s");
        next = $createParaNode("p");
        $getRoot().append(
          $createImmutableChapterNode("1"),
          hasGutterMarker ? empty.append($createGutterMarkerNode("\\s ")) : empty,
          next.append($createTextNode("first")),
        );
      });
      updateSelection(editor, empty!, hasGutterMarker ? 1 : 0);

      await pressKey(editor, "Backspace", 0);
      expect(editor.getRootElement()?.getAttribute("data-verse-delete-kind")).toBe(
        "removeEmptyPara",
      );
      await pressKey(editor, "Backspace", 0);

      expect(blocksOf(editor)).toEqual([
        { marker: "c", text: "" },
        { marker: "p", text: "first" },
      ]);
      expectCaretIn(editor, next!);
    },
  );

  it("Delete twice removes it and keeps the next paragraph's marker", async () => {
    let empty: ParaNode;
    let next: ParaNode;
    const { editor } = await guardedEnvironment(() => {
      empty = $createParaNode("s");
      next = $createParaNode("p");
      $getRoot().append(
        $createImmutableChapterNode("1"),
        empty.append($createGutterMarkerNode("\\s ")),
        next.append($createTextNode("first")),
      );
    });
    updateSelection(editor, empty!, 1);

    await pressKey(editor, "Delete", 0);
    expect(editor.getRootElement()?.getAttribute("data-verse-delete-kind")).toBe("removeEmptyPara");
    await pressKey(editor, "Delete", 0);

    expect(blocksOf(editor)).toEqual([
      { marker: "c", text: "" },
      { marker: "p", text: "first" },
    ]);
    expectCaretIn(editor, next!);
  });

  // Alone in its chapter, it leaves a blank line with no marker, where the user picks one.
  describe.each([
    ["the next chapter", () => [$createImmutableChapterNode("2")], [{ marker: "c", text: "" }]],
    ["the end of the book", () => [], []],
  ])("when %s follows it", (_label, $following, following) => {
    it.each(["Backspace", "Delete"])(
      "%s twice leaves a blank line with no marker and the caret in it",
      async (key) => {
        let empty: ParaNode;
        const { editor } = await guardedEnvironment(() => {
          empty = $createParaNode("s");
          $getRoot().append(
            $createImmutableChapterNode("1"),
            empty.append($createGutterMarkerNode("\\s ")),
            ...$following(),
          );
        });
        updateSelection(editor, empty!, 1);

        await pressKey(editor, key, 0);
        expect(editor.getRootElement()?.getAttribute("data-verse-delete-kind")).toBe(
          "removeEmptyPara",
        );
        await pressKey(editor, key, 0);

        expect(blocksOf(editor)).toEqual([
          { marker: "c", text: "" },
          { marker: undefined, text: "" },
          ...following,
        ]);
        expectCaretInBlankLine(editor);
      },
    );

    it("Backspace in the blank line it leaves is refused, not armed", async () => {
      let empty: ParaNode;
      const { editor } = await guardedEnvironment(() => {
        empty = $createParaNode("s");
        $getRoot().append(
          $createImmutableChapterNode("1"),
          empty.append($createGutterMarkerNode("\\s ")),
          ...$following(),
        );
      });
      updateSelection(editor, empty!, 1);
      await pressKey(editor, "Backspace", 0);
      await pressKey(editor, "Backspace", 0);
      const before = JSON.stringify(editor.getEditorState().toJSON());

      await pressKey(editor, "Backspace", 0);
      await pressKey(editor, "Backspace", 0);

      expect(JSON.stringify(editor.getEditorState().toJSON())).toBe(before);
      expect(editor.getRootElement()?.classList.contains("verse-delete-armed")).toBe(false);
    });
  });

  it("is refused under protected structure", async () => {
    let empty: ParaNode;
    const { editor } = await protectedEnvironment(() => {
      empty = $createParaNode("s");
      $getRoot().append(
        $createImmutableChapterNode("1"),
        empty.append($createGutterMarkerNode("\\s ")),
        $createParaNode("p").append($createTextNode("first")),
      );
    });
    updateSelection(editor, empty!, 1);
    const before = JSON.stringify(editor.getEditorState().toJSON());

    await pressKey(editor, "Backspace", 0);
    await pressKey(editor, "Backspace", 0);

    expect(JSON.stringify(editor.getEditorState().toJSON())).toBe(before);
  });

  it("two in a row go one at a time, the caret moving down to the next each time", async () => {
    let first: ParaNode;
    let second: ParaNode;
    let next: ParaNode;
    const { editor } = await guardedEnvironment(() => {
      first = $createParaNode("s");
      second = $createParaNode("s2");
      next = $createParaNode("p");
      $getRoot().append(
        $createImmutableChapterNode("1"),
        first.append($createGutterMarkerNode("\\s ")),
        second.append($createGutterMarkerNode("\\s2 ")),
        next.append($createTextNode("first")),
      );
    });
    updateSelection(editor, first!, 1);

    await pressKey(editor, "Backspace", 0);
    await pressKey(editor, "Backspace");

    expect(blocksOf(editor).map(({ marker }) => marker)).toEqual(["c", "s2", "p"]);
    expectCaretIn(editor, second!);

    await pressKey(editor, "Backspace", 0);
    await pressKey(editor, "Backspace");

    expect(blocksOf(editor).map(({ marker }) => marker)).toEqual(["c", "p"]);
    expectCaretIn(editor, next!);
  });

  it("Undo restores the removed paragraph in one step", async () => {
    let empty: ParaNode;
    const { editor } = await baseTestEnvironment(
      () => {
        empty = $createParaNode("s");
        $getRoot().append(
          $createImmutableChapterNode("1"),
          empty.append($createGutterMarkerNode("\\s ")),
          $createParaNode("p").append($createTextNode("first")),
        );
      },
      <>
        <StructureKeyboardPlugin structureProtectionMode="guarded" />
        <HistoryPlugin externalHistoryState={createEmptyHistoryState()} />
      </>,
    );
    updateSelection(editor, empty!, 1);
    const before = blocksOf(editor);

    await pressKey(editor, "Backspace", 0);
    await pressKey(editor, "Backspace", 0);
    expect(blocksOf(editor)).toEqual([
      { marker: "c", text: "" },
      { marker: "p", text: "first" },
    ]);

    await act(async () => {
      editor.dispatchCommand(UNDO_COMMAND, undefined);
    });

    expect(blocksOf(editor)).toEqual(before);
  });
});

// Delete in an empty paragraph removes that paragraph, as Backspace does: merging the next
// paragraph up into it would give the next paragraph's text the empty one's marker.
describe("StructureKeyboardPlugin — Delete in an empty paragraph", () => {
  it("Delete twice removes the empty paragraph and keeps the next paragraph's marker", async () => {
    let empty: ParaNode;
    let next: ParaNode;
    const { editor } = await guardedEnvironment(() => {
      empty = $createParaNode("s");
      next = $createParaNode("q1");
      $getRoot().append(
        $createParaNode("p").append($createTextNode("first")),
        empty.append($createGutterMarkerNode("\\s ")),
        next.append($createTextNode("second")),
      );
    });
    updateSelection(editor, empty!, 1);

    await pressKey(editor, "Delete", 0);
    expect(editor.getRootElement()?.getAttribute("data-verse-delete-kind")).toBe("removeEmptyPara");
    await pressKey(editor, "Delete", 0);

    expect(blocksOf(editor)).toEqual([
      { marker: "p", text: "first" },
      { marker: "q1", text: "second" },
    ]);
    expectCaretIn(editor, next!);
  });

  it("Delete twice at the end of the paragraph before it removes it and leaves the caret there", async () => {
    let first: TextNode;
    const { editor } = await guardedEnvironment(() => {
      first = $createTextNode("first");
      $getRoot().append(
        $createParaNode("p").append(first),
        $createParaNode("s").append($createGutterMarkerNode("\\s ")),
        $createParaNode("q1").append($createTextNode("second")),
      );
    });
    updateSelection(editor, first!, 5);

    await pressKey(editor, "Delete", 0);
    expect(editor.getRootElement()?.getAttribute("data-verse-delete-kind")).toBe("removeEmptyPara");
    await pressKey(editor, "Delete");

    expect(blocksOf(editor)).toEqual([
      { marker: "p", text: "first" },
      { marker: "q1", text: "second" },
    ]);
    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      expect(selection.isCollapsed()).toBe(true);
      expect(selection.focus.key).toBe(first!.getKey());
      expect(selection.focus.offset).toBe(5);
    });
  });

  it("Delete in one right before a chapter does not remove it", async () => {
    let empty: ParaNode;
    const { editor } = await guardedEnvironment(() => {
      empty = $createParaNode("s");
      $getRoot().append(
        $createParaNode("p").append($createTextNode("first")),
        empty.append($createGutterMarkerNode("\\s ")),
        $createImmutableChapterNode("2"),
        $createParaNode("p").append($createTextNode("second")),
      );
    });
    updateSelection(editor, empty!, 1);

    await pressKey(editor, "Delete", 0);
    await pressKey(editor, "Delete", 0);

    expect(blocksOf(editor).map(({ marker }) => marker)).toEqual(["p", "s", "c", "p"]);
  });
});

// Backspace from the start of a paragraph after an empty one removes the empty one, as Delete in it
// does: merging this paragraph into it would give this paragraph's text the empty one's marker.
describe("StructureKeyboardPlugin — Backspace after an empty paragraph", () => {
  it.each([
    ["with its marker shown", true],
    ["with no marker shown", false],
  ])(
    "Backspace twice removes the empty paragraph (%s) and keeps this paragraph's marker",
    async (_label, hasGutterMarker) => {
      let empty: ParaNode;
      let second: ParaNode;
      let secondText: TextNode;
      const { editor } = await guardedEnvironment(() => {
        empty = $createParaNode("s");
        second = $createParaNode("q1");
        secondText = $createTextNode("second");
        $getRoot().append(
          $createParaNode("p").append($createTextNode("first")),
          hasGutterMarker ? empty.append($createGutterMarkerNode("\\s ")) : empty,
          second.append(secondText),
        );
      });
      updateSelection(editor, secondText!, 0);

      await pressKey(editor, "Backspace", 0);
      expect(editor.getRootElement()?.getAttribute("data-verse-delete-kind")).toBe(
        "removeEmptyPara",
      );
      await pressKey(editor, "Backspace");

      expect(blocksOf(editor)).toEqual([
        { marker: "p", text: "first" },
        { marker: "q1", text: "second" },
      ]);
      expectCaretIn(editor, second!);
    },
  );

  // Selecting the empty paragraph's marker would move the caret into that paragraph, so a key
  // typed after the arm would land there instead of here.
  it("the first Backspace leaves the caret where it is, not on the empty paragraph's marker", async () => {
    let secondText: TextNode;
    const { editor } = await guardedEnvironment(() => {
      secondText = $createTextNode("second");
      $getRoot().append(
        $createParaNode("p").append($createTextNode("first")),
        $createParaNode("s").append($createGutterMarkerNode("\\s ")),
        $createParaNode("q1").append(secondText),
      );
    });
    updateSelection(editor, secondText!, 0);

    await pressKey(editor, "Backspace", 0);

    expect(editor.getRootElement()?.classList.contains("verse-delete-armed")).toBe(true);
    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      expect(selection.isCollapsed()).toBe(true);
      expect(selection.focus.key).toBe(secondText!.getKey());
      expect(selection.focus.offset).toBe(0);
    });
  });
});

// The plugin renders no UI; it publishes the armed state to the editor root so the host app can
// render a localized hint (see paranext-core's TwoStepDeleteTooltipOverlay). These assert that
// DOM contract: `data-verse-delete-intent` + `data-verse-delete-kind` for every arm, cleared
// otherwise, plus PARA_MERGE_ARMED_CLASS_NAME on an armed paragraph's marker (or the paragraph).
function armedParaElements(editor: LexicalEditor): Element[] {
  return Array.from(
    editor.getRootElement()?.querySelectorAll(`.${PARA_MERGE_ARMED_CLASS_NAME}`) ?? [],
  );
}

describe("StructureKeyboardPlugin — armed DOM signals for the host hint", () => {
  it("Backspace-armed verse marks intent=deleteBackward, kind=verse", async () => {
    let t1: TextNode;
    const { editor } = await guardedEnvironment(() => {
      t1 = $createTextNode("text");
      $getRoot().append($createParaNode("p").append($createImmutableVerseNode("1"), t1));
    });
    updateSelection(editor, t1!, 0);

    await pressKey(editor, "Backspace", 0); // arm the verse marker
    const root = editor.getRootElement();
    expect(root?.getAttribute("data-verse-delete-intent")).toBe("deleteBackward");
    expect(root?.getAttribute("data-verse-delete-kind")).toBe("verse");
  });

  it("Delete-armed range selection marks intent=deleteForward, kind=selection", async () => {
    let t1: TextNode;
    let t2: TextNode;
    const { editor } = await guardedEnvironment(() => {
      t1 = $createTextNode("ab");
      t2 = $createTextNode("cd");
      $getRoot().append($createParaNode("p").append(t1, $createImmutableVerseNode("2"), t2));
    });
    updateSelection(editor, t1!, 1, t2!, 1);

    await pressKey(editor, "Delete", 0); // arm the range selection
    const root = editor.getRootElement();
    expect(root?.getAttribute("data-verse-delete-intent")).toBe("deleteForward");
    expect(root?.getAttribute("data-verse-delete-kind")).toBe("selection");
  });

  it("Backspace-armed paragraph merge marks kind=joinPreviousPara on the merging paragraph", async () => {
    let second: ParaNode;
    let t2: TextNode;
    const { editor } = await guardedEnvironment(() => {
      t2 = $createTextNode("second");
      second = $createParaNode("p");
      $getRoot().append($createParaNode("p").append($createTextNode("first")), second.append(t2));
    });
    updateSelection(editor, t2!, 0); // caret at start of the second paragraph

    await pressKey(editor, "Backspace", 0); // arm the paragraph merge
    const root = editor.getRootElement();
    expect(root?.getAttribute("data-verse-delete-intent")).toBe("deleteBackward");
    expect(root?.getAttribute("data-verse-delete-kind")).toBe("joinPreviousPara");
    expect(armedParaElements(editor)).toEqual([editor.getElementByKey(second!.getKey())]);
  });

  it("Delete-armed paragraph merge marks kind=joinNextPara on the next paragraph", async () => {
    let t1: TextNode;
    let second: ParaNode;
    const { editor } = await guardedEnvironment(() => {
      t1 = $createTextNode("first");
      second = $createParaNode("p");
      $getRoot().append($createParaNode("p").append(t1), second.append($createTextNode("second")));
    });
    updateSelection(editor, t1!, 5); // caret at end of the first paragraph

    await pressKey(editor, "Delete", 0);
    const root = editor.getRootElement();
    expect(root?.getAttribute("data-verse-delete-intent")).toBe("deleteForward");
    expect(root?.getAttribute("data-verse-delete-kind")).toBe("joinNextPara");
    expect(armedParaElements(editor)).toEqual([editor.getElementByKey(second!.getKey())]);
  });

  it("an armed empty paragraph marks kind=removeEmptyPara", async () => {
    let empty: ParaNode;
    const { editor } = await guardedEnvironment(() => {
      empty = $createParaNode("p");
      $getRoot().append(
        $createParaNode("p").append($createTextNode("first")),
        empty.append($createGutterMarkerNode("\\p ")),
      );
    });
    updateSelection(editor, empty!, 1); // caret just past the empty paragraph's gutter marker

    await pressKey(editor, "Backspace", 0);
    expect(editor.getRootElement()?.getAttribute("data-verse-delete-kind")).toBe("removeEmptyPara");

    await pressKey(editor, "Backspace", 0);
    editor.getEditorState().read(() => {
      expect($getRoot().getChildrenSize()).toBe(1);
      expect($getRoot().getTextContent()).toBe("first");
    });
  });

  it("clears para-merge-armed and the hint when the arm is cancelled", async () => {
    let t1: TextNode;
    let t2: TextNode;
    const { editor } = await guardedEnvironment(() => {
      t1 = $createTextNode("first");
      t2 = $createTextNode("second");
      $getRoot().append($createParaNode("p").append(t1), $createParaNode("p").append(t2));
    });
    updateSelection(editor, t2!, 0);
    await pressKey(editor, "Backspace", 0);
    expect(armedParaElements(editor)).toHaveLength(1);

    updateSelection(editor, t1!, 2); // move the caret away

    const root = editor.getRootElement();
    expect(armedParaElements(editor)).toHaveLength(0);
    expect(root?.getAttribute("data-verse-delete-kind")).toBeNull();
  });

  it("sets no hint attributes when nothing is armed", async () => {
    const { editor } = await guardedEnvironment(() => {
      $getRoot().append(
        $createParaNode("p").append($createImmutableVerseNode("1"), $createTextNode("text")),
      );
    });
    const root = editor.getRootElement();
    expect(root?.getAttribute("data-verse-delete-intent")).toBeNull();
    expect(root?.getAttribute("data-verse-delete-kind")).toBeNull();
  });
});

// structureProtectionMode="off" (e.g. the Power interface mode): the feature is off, so the
// plugin registers no handlers and editing is fully native — no blocking, no two-step arming.
describe('StructureKeyboardPlugin — feature off (structureProtectionMode="off")', () => {
  it("does not arm the two-step delete at a verse boundary", async () => {
    let t1: TextNode;
    const { editor } = await inactiveEnvironment(() => {
      t1 = $createTextNode("text");
      $getRoot().append($createParaNode("p").append($createImmutableVerseNode("1"), t1));
    });
    updateSelection(editor, t1!, 0);

    // Handler is not registered, so the key falls through to native handling; jsdom lacks
    // domSelection.modify and throws — catching it confirms the plugin did NOT consume the key.
    try {
      await pressKey(editor, "Backspace", 0);
    } catch (e) {
      if (!(e instanceof Error) || !e.message.includes("domSelection.modify")) throw e;
    }
    const root = editor.getRootElement();
    expect(root?.classList.contains("verse-delete-armed")).toBe(false);
    expect(root?.getAttribute("data-verse-delete-kind")).toBeNull();
  });

  it("does not block structural edits: Enter splits the paragraph natively", async () => {
    let t1: TextNode;
    const { editor } = await inactiveEnvironment(() => {
      t1 = $createTextNode("abcdef");
      $getRoot().append($createParaNode("p").append(t1));
    });
    updateSelection(editor, t1!, 3);

    await pressKey(editor, "Enter", 0);

    editor.getEditorState().read(() => {
      expect($getRoot().getChildrenSize()).toBe(2);
    });
  });
});

async function protectedEnvironment($initialEditorState: () => void) {
  return baseTestEnvironment(
    $initialEditorState,
    <StructureKeyboardPlugin structureProtectionMode="protected" />,
  );
}

async function guardedEnvironment($initialEditorState: () => void) {
  return baseTestEnvironment(
    $initialEditorState,
    <StructureKeyboardPlugin structureProtectionMode="guarded" />,
  );
}

async function inactiveEnvironment($initialEditorState: () => void) {
  return baseTestEnvironment(
    $initialEditorState,
    <StructureKeyboardPlugin structureProtectionMode="off" />,
  );
}
