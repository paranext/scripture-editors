import { describe, expect, it, vi } from "vitest";
import {
  $createRangeSelection,
  $createTextNode,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  CLICK_COMMAND,
  COMMAND_PRIORITY_EDITOR,
  COMMAND_PRIORITY_LOW,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  CUT_COMMAND,
  DELETE_LINE_COMMAND,
  DELETE_WORD_COMMAND,
  LexicalEditor,
  PASTE_COMMAND,
  RangeSelection,
  TextNode,
} from "lexical";
import {
  $createBookNode,
  $createGutterMarkerNode,
  $createImmutableTypedTextNode,
  $createMarkerNode,
  $createParaNode,
  $createVerseNode,
  $isBookNode,
  BookNode,
  ImmutableTypedTextNode,
  MarkerNode,
  NBSP,
  ParaNode,
  VerseNode,
} from "shared";
import { $createImmutableVerseNode, ImmutableVerseNode } from "../../nodes/usj";
// Reaching inside shared for test utilities — shared-react depends on shared, but these
// utilities are not part of the public API, so the module-boundary rule is suppressed.
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  $expectSelectionToBe,
  createBasicTestEnvironment,
  updateSelection,
} from "../../../../shared/src/nodes/usj/test.utils";
import {
  $advancePastParaPrefixes,
  $guardCursorAtGutterMarker,
  $guardCursorAtParaStart,
  $guardCursorOnClick,
  $narrowSelectionPastBookPrefix,
  $shouldRefuseBookPrefixDeletion,
  ParaMarkerPrefixCursorGuardPlugin,
} from "./ParaMarkerPrefixCursorGuardPlugin";
import { $createBookLine, baseTestEnvironment, pressKey } from "./react-test.utils";

const nodes = [
  BookNode,
  ParaNode,
  VerseNode,
  ImmutableVerseNode,
  MarkerNode,
  ImmutableTypedTextNode,
];

function runGuard(editor: LexicalEditor): boolean {
  let corrected = false;
  editor.update(
    () => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) corrected = $guardCursorAtParaStart(selection);
    },
    { discrete: true },
  );
  return corrected;
}

/** Runs the gutter-marker click correction against the glyph node's own rendered element. */
function runGutterGuard(editor: LexicalEditor, glyphKey: string): boolean {
  let corrected = false;
  editor.update(
    () => {
      corrected = $guardCursorAtGutterMarker(editor.getElementByKey(glyphKey));
    },
    { discrete: true },
  );
  return corrected;
}

// The product rule is about ONE node at a time: a marker the view renders in the GUTTER is an aid,
// never a place the caret may rest, while a marker rendered as editable text IS content the user
// clicks into on purpose. Neither fact is a property of the view mode — a document can carry both
// flavors at once — so every test here states which flavor the paragraph's marker is and asserts
// the guard's answer for that flavor alone.
describe("which markers are caret territory is a per-node question", () => {
  describe("editable marker glyphs (a MarkerNode, e.g. Standard view)", () => {
    it("leaves an element-0 click alone instead of advancing past the marker prefix", () => {
      let para!: ParaNode;
      let content!: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        para = $createParaNode("q1");
        content = $createTextNode("Blessed is the man");
        $getRoot().append(para.append($createMarkerNode("q1"), $createTextNode(NBSP), content));
      });

      updateSelection(editor, para, 0);

      expect(runGuard(editor)).toBe(false);

      editor.getEditorState().read(() => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) throw new Error("no range selection");
        // Lexical resolves an element point at offset 0 onto the first child, so the caret sits in
        // the marker glyph — where the click aimed. What must NOT happen is the guard hauling it
        // past the prefix to the content, which is the correction the gutter views need.
        expect(selection.anchor.key).not.toBe(content.getKey());
      });
    });

    it("leaves a click INSIDE the glyph alone — it is editable text", () => {
      let glyph!: MarkerNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        glyph = $createMarkerNode("q1");
        const para = $createParaNode("q1");
        $getRoot().append(
          para.append(glyph, $createTextNode(NBSP), $createTextNode("Blessed is the man")),
        );
      });

      updateSelection(editor, glyph, 2);

      expect(runGuard(editor)).toBe(false);

      editor.getEditorState().read(() => {
        $expectSelectionToBe(glyph, 2);
      });
    });

    it("leaves a click on the glyph's own element alone — it is not a gutter marker", () => {
      let glyphKey = "";
      let glyph!: MarkerNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        glyph = $createMarkerNode("q1");
        glyphKey = glyph.getKey();
        const para = $createParaNode("q1");
        $getRoot().append(
          para.append(glyph, $createTextNode(NBSP), $createTextNode("Blessed is the man")),
        );
      });

      updateSelection(editor, glyph, 2);

      expect(runGutterGuard(editor, glyphKey)).toBe(false);

      editor.getEditorState().read(() => {
        $expectSelectionToBe(glyph, 2);
      });
    });
  });

  describe("gutter marker glyphs (the paragraph-structure aid)", () => {
    it("moves a click ON the glyph to the paragraph's content text", () => {
      let glyphKey = "";
      let content!: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        const gutterMarker = $createGutterMarkerNode(`\\q1${NBSP}`);
        glyphKey = gutterMarker.getKey();
        content = $createTextNode("Blessed is the man");
        $getRoot().append($createParaNode("q1").append(gutterMarker, content));
      });

      expect(runGutterGuard(editor, glyphKey)).toBe(true);

      editor.getEditorState().read(() => {
        $expectSelectionToBe(content, 0);
      });
    });

    it("moves a click ON the glyph past a leading verse marker too", () => {
      let glyphKey = "";
      let content!: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        const gutterMarker = $createGutterMarkerNode(`\\q1${NBSP}`);
        glyphKey = gutterMarker.getKey();
        content = $createTextNode("Blessed is the man");
        $getRoot().append(
          $createParaNode("q1").append(gutterMarker, $createImmutableVerseNode("1"), content),
        );
      });

      expect(runGutterGuard(editor, glyphKey)).toBe(true);

      editor.getEditorState().read(() => {
        $expectSelectionToBe(content, 0);
      });
    });

    it("moves a click on a book's gutter marker to the book's text", () => {
      let glyphKey = "";
      let content!: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        const gutterMarker = $createGutterMarkerNode(`\\id${NBSP}`);
        glyphKey = gutterMarker.getKey();
        content = $createTextNode("World English Bible");
        $getRoot().append($createBookNode("PSA").append(gutterMarker, content));
      });

      expect(runGutterGuard(editor, glyphKey)).toBe(true);

      editor.getEditorState().read(() => {
        $expectSelectionToBe(content, 0);
      });
    });

    it("moves an element-0 click in the paragraph to the content text", () => {
      let para!: ParaNode;
      let content!: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        content = $createTextNode("Blessed is the man");
        para = $createParaNode("q1");
        $getRoot().append(para.append($createGutterMarkerNode(`\\q1${NBSP}`), content));
      });

      // A click in the hanging indent resolves to the element point just before the glyph.
      updateSelection(editor, para, 0);

      expect(runGuard(editor)).toBe(true);

      editor.getEditorState().read(() => {
        $expectSelectionToBe(content, 0);
      });
    });
  });

  // markerMode "visible" renders the same node class INLINE among the words, so the node type alone
  // cannot tell the two apart — only the gutter metadata can, and only the gutter flavor is claimed.
  describe("inline immutable marker glyphs (markerMode visible)", () => {
    it("leaves a click on the glyph's own element alone", () => {
      let glyphKey = "";
      let content!: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        const inlineMarker = $createImmutableTypedTextNode("marker", `\\q1${NBSP}`);
        glyphKey = inlineMarker.getKey();
        content = $createTextNode("Blessed is the man");
        $getRoot().append($createParaNode("q1").append(inlineMarker, content));
      });

      updateSelection(editor, content, 4);

      expect(runGutterGuard(editor, glyphKey)).toBe(false);

      editor.getEditorState().read(() => {
        $expectSelectionToBe(content, 4);
      });
    });
  });
});

// Lexical's own click listener routes the browser event into `CLICK_COMMAND`, and the update it
// opens commits on a microtask — so each of these awaits one before reading the committed state.
describe("ParaMarkerPrefixCursorGuardPlugin click handling (real DOM click)", () => {
  it("moves the caret to content when the click lands on a gutter marker element", async () => {
    let glyphKey = "";
    let content!: TextNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      const gutterMarker = $createGutterMarkerNode(`\\q1${NBSP}`);
      glyphKey = gutterMarker.getKey();
      content = $createTextNode("Blessed is the man");
      $getRoot().append($createParaNode("q1").append(gutterMarker, content));
    });

    // The same registration the plugin mounts via useEffect.
    editor.registerCommand<MouseEvent>(
      CLICK_COMMAND,
      (event) => {
        $guardCursorOnClick(event);
        return false;
      },
      COMMAND_PRIORITY_EDITOR,
    );

    const glyphElement = editor.getElementByKey(glyphKey);
    if (!glyphElement) throw new Error("gutter marker element not rendered");
    // A click on the glyph itself: the browser draws a caret inside this decorator, and Lexical
    // cannot resolve that DOM position to any point in the tree — so the correction has to come
    // from the click's target, not from the (absent) selection.
    glyphElement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await Promise.resolve();

    editor.getEditorState().read(() => {
      $expectSelectionToBe(content, 0);
    });
  });

  it("leaves a click in ordinary content where it landed", async () => {
    let content!: TextNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      content = $createTextNode("Blessed is the man");
      $getRoot().append(
        $createParaNode("q1").append($createGutterMarkerNode(`\\q1${NBSP}`), content),
      );
    });

    editor.registerCommand<MouseEvent>(
      CLICK_COMMAND,
      (event) => {
        $guardCursorOnClick(event);
        return false;
      },
      COMMAND_PRIORITY_EDITOR,
    );

    updateSelection(editor, content, 7);
    const contentElement = editor.getElementByKey(content.getKey());
    if (!contentElement) throw new Error("content element not rendered");
    contentElement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await Promise.resolve();

    editor.getEditorState().read(() => {
      $expectSelectionToBe(content, 7);
    });
  });
});

describe("$guardCursorAtParaStart", () => {
  describe("hidden mode: ImmutableVerseNode as first child (Simple view)", () => {
    it("moves element-0 cursor past the verse to the content TextNode", () => {
      let para!: ParaNode;
      let content!: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        content = $createTextNode("in the beginning");
        para = $createParaNode("li2");
        $getRoot().append(para.append($createImmutableVerseNode("7"), content));
      });

      updateSelection(editor, para, 0);

      // SUT
      expect(runGuard(editor)).toBe(true);

      editor.getEditorState().read(() => {
        $expectSelectionToBe(content, 0);
      });
    });

    it("is a no-op when the cursor is already in the content TextNode", () => {
      let content!: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        content = $createTextNode("in the beginning");
        const para = $createParaNode("li2");
        $getRoot().append(para.append($createImmutableVerseNode("7"), content));
      });

      updateSelection(editor, content, 3);

      expect(runGuard(editor)).toBe(false);

      editor.getEditorState().read(() => {
        $expectSelectionToBe(content, 3);
      });
    });

    it("is a no-op for a non-collapsed selection spanning verse and content", () => {
      let para!: ParaNode;
      let content!: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        content = $createTextNode("in the beginning");
        para = $createParaNode("li2");
        $getRoot().append(para.append($createImmutableVerseNode("7"), content));
      });

      updateSelection(editor, para, 0, content, 5);

      expect(runGuard(editor)).toBe(false);

      editor.getEditorState().read(() => {
        $expectSelectionToBe(para, 0, content, 5);
      });
    });
  });

  // An editable glyph is a TextNode: it hosts a caret, so nothing here is corrected — not even
  // with a verse marker sitting between the prefix and the content.
  describe("editable mode: MarkerNode as first child (Power view)", () => {
    it("is a no-op for an element-0 cursor before an editable marker prefix", () => {
      let para!: ParaNode;
      let marker!: MarkerNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        marker = $createMarkerNode("li2");
        para = $createParaNode("li2");
        $getRoot().append(
          para.append(
            marker,
            $createTextNode(NBSP),
            $createVerseNode("7"),
            $createTextNode("in the beginning"),
          ),
        );
      });

      updateSelection(editor, para, 0);

      // SUT
      expect(runGuard(editor)).toBe(false);

      editor.getEditorState().read(() => {
        // Lexical resolves an element point at offset 0 onto the first child, so the caret rests
        // in the marker glyph — the click's own target — rather than being hauled to the content.
        $expectSelectionToBe(marker, 0);
      });
    });

    it("is a no-op for a text cursor inside the MarkerNode (first child)", () => {
      let marker!: MarkerNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        marker = $createMarkerNode("li2");
        const para = $createParaNode("li2");
        $getRoot().append(
          para.append(
            marker,
            $createTextNode(NBSP),
            $createVerseNode("7"),
            $createTextNode("in the beginning"),
          ),
        );
      });

      updateSelection(editor, marker, 0);

      // SUT
      expect(runGuard(editor)).toBe(false);

      editor.getEditorState().read(() => {
        $expectSelectionToBe(marker, 0);
      });
    });

    it("is a no-op for a mid-marker text cursor", () => {
      let marker!: MarkerNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        marker = $createMarkerNode("li2");
        const para = $createParaNode("li2");
        $getRoot().append(
          para.append(
            marker,
            $createTextNode(NBSP),
            $createVerseNode("7"),
            $createTextNode("in the beginning"),
          ),
        );
      });

      updateSelection(editor, marker, 2);

      // SUT
      expect(runGuard(editor)).toBe(false);

      editor.getEditorState().read(() => {
        $expectSelectionToBe(marker, 2);
      });
    });

    it("is a no-op when cursor is at offset 1 in the NBSP trailing space", () => {
      let nbsp!: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        nbsp = $createTextNode(NBSP);
        const para = $createParaNode("li2");
        $getRoot().append(
          para.append(
            $createMarkerNode("li2"),
            nbsp,
            $createVerseNode("7"),
            $createTextNode("in the beginning"),
          ),
        );
      });

      updateSelection(editor, nbsp, 1);

      expect(runGuard(editor)).toBe(false);

      editor.getEditorState().read(() => {
        $expectSelectionToBe(nbsp, 1);
      });
    });

    it("is a no-op for a non-collapsed selection", () => {
      let marker!: MarkerNode;
      let content!: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        marker = $createMarkerNode("li2");
        content = $createTextNode("in the beginning");
        const para = $createParaNode("li2");
        $getRoot().append(
          para.append(marker, $createTextNode(NBSP), $createVerseNode("7"), content),
        );
      });

      updateSelection(editor, marker, 0, content, 3);

      expect(runGuard(editor)).toBe(false);

      editor.getEditorState().read(() => {
        $expectSelectionToBe(marker, 0, content, 3);
      });
    });
  });

  // Either flavor of immutable glyph — gutter aid or markerMode "visible" inline text — is a
  // decorator, so an element point before it renders no caret at all. That is what the element-0
  // correction is about, and it is a property of the node in the tree, not of the view.
  describe("gutter/visible mode: ImmutableTypedTextNode as first child", () => {
    it("moves element-0 cursor past the marker prefix and verse to content", () => {
      let para!: ParaNode;
      let content!: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        content = $createTextNode("in the beginning");
        para = $createParaNode("li2");
        $getRoot().append(
          para.append(
            $createImmutableTypedTextNode("marker", `\\li2${NBSP}`),
            $createImmutableVerseNode("7"),
            content,
          ),
        );
      });

      updateSelection(editor, para, 0);

      // SUT
      expect(runGuard(editor)).toBe(true);

      editor.getEditorState().read(() => {
        $expectSelectionToBe(content, 0);
      });
    });
  });

  // The `\id` line's own immutable `\id GEN ` decorator is the same shape as a paragraph's visible
  // marker prefix, but the line has no paragraph arm to fall back on — a click at (book, 0) (the
  // hanging edge of the line, or `Home`) must be corrected the same way.
  describe("book line: ImmutableTypedTextNode as the `\\id` prefix", () => {
    it("moves element-0 cursor past the prefix glyph to the line's content", () => {
      let book!: BookNode;
      let content!: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        content = $createTextNode("Genesis");
        book = $createBookLine("GEN", content);
        $getRoot().append(book);
      });

      updateSelection(editor, book, 0);

      // SUT
      expect(runGuard(editor)).toBe(true);

      editor.getEditorState().read(() => {
        $expectSelectionToBe(content, 0);
      });
    });
  });
});

describe("$advancePastParaPrefixes", () => {
  it("places cursor at element-offset skipCount when no content TextNode exists yet", () => {
    let para!: ParaNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      para = $createParaNode("li2");
      // All-prefix para: no content TextNode, only structural nodes.
      $getRoot().append(
        para.append($createMarkerNode("li2"), $createTextNode(NBSP), $createVerseNode("7")),
      );
    });

    editor.update(
      () => {
        // SUT: called directly as ScriptureReferencePlugin would call it.
        $advancePastParaPrefixes(para);
      },
      { discrete: true },
    );

    // Cursor should land at element-offset 3 (after all three prefix children).
    editor.getEditorState().read(() => {
      $expectSelectionToBe(para, 3);
    });
  });
});

// Backspace/Delete's default handling removes an adjacent DecoratorNode outright regardless of
// `isKeyboardSelectable()` (see ImmutableTypedTextNode.ts), so a keystroke at the boundary of the
// `\id` line's own immutable prefix deletes the glyph from the screen while the file — which never
// stored the glyph as its own node — is unchanged. Refusing the underlying DELETE_CHARACTER_COMMAND
// (which both Backspace and Delete fall through to) keeps the keystroke a visible refusal instead
// of a silent, invisible loss.
//
// The integration tests below assert against the TREE, never `event.defaultPrevented`: Lexical's
// own KEY_BACKSPACE_COMMAND/KEY_DELETE_COMMAND handlers call `event.preventDefault()`
// unconditionally before ever dispatching DELETE_CHARACTER_COMMAND, so that flag is `true` for
// every Backspace/Delete press regardless of what this guard decides — it says nothing about
// refusal on its own. A press this guard does NOT refuse reaches Lexical's own
// `RangeSelection.deleteCharacter`, which this environment cannot run at all (jsdom has no
// `Selection.modify`) — so the "not refused" half is pinned directly against
// `$shouldRefuseBookPrefixDeletion`, the same exported-for-testing convention
// `$guardCursorAtParaStart` already uses, rather than through a real keypress.
describe("DELETE_CHARACTER_COMMAND refuses to remove the book's prefix glyph", () => {
  it("refuses Backspace at the start of the line's content", async () => {
    let content!: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        content = $createTextNode("Genesis");
        $getRoot().append($createBookLine("GEN", content));
      },
      <ParaMarkerPrefixCursorGuardPlugin />,
    );
    updateSelection(editor, content, 0);

    await pressKey(editor, "Backspace");

    editor.getEditorState().read(() => {
      const book = $getRoot().getFirstChild();
      if (!$isBookNode(book)) throw new Error("expected a BookNode");
      expect(book.getFirstChild()).toBeInstanceOf(ImmutableTypedTextNode);
      expect(book.getTextContent()).toBe(`\\id GEN${NBSP}Genesis`);
    });
  });

  it("refuses Delete when the caret sits right before the prefix (defense in depth)", async () => {
    let book!: BookNode;
    const { editor } = await baseTestEnvironment(
      () => {
        book = $createBookLine("GEN", $createTextNode("Genesis"));
        $getRoot().append(book);
      },
      <ParaMarkerPrefixCursorGuardPlugin />,
    );
    updateSelection(editor, book, 0);

    await pressKey(editor, "Delete");

    editor.getEditorState().read(() => {
      expect(book.getFirstChild()).toBeInstanceOf(ImmutableTypedTextNode);
    });
  });

  it("narrows a selection reaching from the prefix into the content, instead of refusing it", async () => {
    let book!: BookNode;
    let content!: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        content = $createTextNode("Genesis");
        book = $createBookLine("GEN", content);
        $getRoot().append(book);
      },
      <ParaMarkerPrefixCursorGuardPlugin />,
    );
    // An element point at (book, 0) — the caret resting right before the prefix, an ordinary
    // position `\` context/Home/click already resolve to — extended into the content.
    updateSelection(editor, book, 0, content, 3);

    await pressKey(editor, "Backspace");

    editor.getEditorState().read(() => {
      const rootBook = $getRoot().getFirstChild();
      if (!$isBookNode(rootBook)) throw new Error("expected a BookNode");
      // The prefix glyph survives; only the content the selection actually covered ("Gen") is
      // removed — refusing the whole delete would be a silent no-op against a selection that never
      // resolved to the prefix directly.
      expect(rootBook.getFirstChild()).toBeInstanceOf(ImmutableTypedTextNode);
      expect(rootBook.getTextContent()).toBe(`\\id GEN${NBSP}esis`);
    });
  });

  // A paragraph's own visible marker prefix takes the OPPOSITE, intentional path — deleting it is
  // a real marker-deletion gesture ($paraMarkerDeletionTransform), not something to refuse — so
  // this guard must not overreach onto it.
  it("does not refuse backward deletion at the start of an ORDINARY paragraph's content", () => {
    let content!: TextNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      $getRoot().append(
        $createParaNode("q1").append(
          $createImmutableTypedTextNode("marker", "\\q1 "),
          (content = $createTextNode("Blessed")),
        ),
      );
    });
    updateSelection(editor, content, 0);

    let refused = true;
    editor.update(
      () => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) refused = $shouldRefuseBookPrefixDeletion(true);
      },
      { discrete: true },
    );

    expect(refused).toBe(false);
  });

  it("does not refuse backward deletion inside plain content, away from any boundary", () => {
    let content!: TextNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      $getRoot().append($createBookLine("GEN", (content = $createTextNode("Genesis"))));
    });
    updateSelection(editor, content, 3);

    let refused = true;
    editor.update(
      () => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) refused = $shouldRefuseBookPrefixDeletion(true);
      },
      { discrete: true },
    );

    expect(refused).toBe(false);
  });

  it("does not refuse forward deletion (Delete) from inside the content, away from any boundary", () => {
    let content!: TextNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      $getRoot().append($createBookLine("GEN", (content = $createTextNode("Genesis"))));
    });
    updateSelection(editor, content, 3);

    let refused = true;
    editor.update(
      () => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) refused = $shouldRefuseBookPrefixDeletion(false);
      },
      { discrete: true },
    );

    expect(refused).toBe(false);
  });
});

// Backspace/Delete are not the only keys that fall through to a delete command: Ctrl/Alt+Backspace
// dispatches DELETE_WORD_COMMAND and Cmd+Backspace dispatches DELETE_LINE_COMMAND, and rich-text
// handles both through `deleteWord`/`deleteLine` without ever going through
// DELETE_CHARACTER_COMMAND. Guarding only the character command left both open: a collapsed
// word/line delete at the same boundary falls back to `RangeSelection.deleteCharacter`, which
// removes the adjacent DecoratorNode outright the same way plain Backspace could before that
// guard existed.
describe("DELETE_WORD_COMMAND and DELETE_LINE_COMMAND refuse to remove the book's prefix glyph", () => {
  it("refuses DELETE_WORD_COMMAND at the start of the line's content", async () => {
    let content!: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        content = $createTextNode("Genesis");
        $getRoot().append($createBookLine("GEN", content));
      },
      <ParaMarkerPrefixCursorGuardPlugin />,
    );
    updateSelection(editor, content, 0);

    editor.update(
      () => {
        editor.dispatchCommand(DELETE_WORD_COMMAND, true);
      },
      { discrete: true },
    );

    editor.getEditorState().read(() => {
      const book = $getRoot().getFirstChild();
      if (!$isBookNode(book)) throw new Error("expected a BookNode");
      expect(book.getFirstChild()).toBeInstanceOf(ImmutableTypedTextNode);
      expect(book.getTextContent()).toBe(`\\id GEN${NBSP}Genesis`);
    });
  });

  // jsdom has no `Selection.modify`, which `deleteLine`'s line-boundary extension calls before a
  // collapsed selection ever reaches the `deleteCharacter` fallback this guard is meant to
  // intercept; without a stub the call throws before that fallback runs at all. Stubbed as a
  // no-op, the collapsed selection stays put and `deleteLine` takes the same fallback a real
  // browser's selection would take once it finds nothing left to extend into.
  it("refuses DELETE_LINE_COMMAND at the start of the line's content", async () => {
    Selection.prototype.modify = vi.fn();
    try {
      let content!: TextNode;
      const { editor } = await baseTestEnvironment(
        () => {
          content = $createTextNode("Genesis");
          $getRoot().append($createBookLine("GEN", content));
        },
        <ParaMarkerPrefixCursorGuardPlugin />,
      );
      updateSelection(editor, content, 0);

      editor.update(
        () => {
          editor.dispatchCommand(DELETE_LINE_COMMAND, true);
        },
        { discrete: true },
      );

      editor.getEditorState().read(() => {
        const book = $getRoot().getFirstChild();
        if (!$isBookNode(book)) throw new Error("expected a BookNode");
        expect(book.getFirstChild()).toBeInstanceOf(ImmutableTypedTextNode);
        expect(book.getTextContent()).toBe(`\\id GEN${NBSP}Genesis`);
      });
    } finally {
      delete (Selection.prototype as { modify?: () => void }).modify;
    }
  });
});

/**
 * `RangeSelection` is a TYPE-only export of `lexical` — its class is never assigned to the
 * package's runtime `exports`, only declared in its `.d.ts` — so `RangeSelection.prototype` is
 * `undefined` at runtime and cannot be spied on directly. Every instance still shares the SAME
 * prototype object, so creating one throwaway instance and reading its prototype off is how these
 * tests reach the method every real selection instance will call.
 */
function $rangeSelectionPrototype(): RangeSelection {
  return Object.getPrototypeOf($createRangeSelection()) as RangeSelection;
}

// A COLLAPSED caret already past the boundary $shouldRefuseBookPrefixDeletion refuses at — mid-
// content, never at offset 0 — reaches DELETE_LINE_COMMAND's own clamp instead. Lexical's own
// `deleteLine` extends the selection to the DOM's own visual line boundary
// (`RangeSelection.modify('extend', isBackward, 'lineboundary')`) before removing it, and jsdom has
// no `Selection.modify` for that extension to call. Each test here stubs the shared
// `RangeSelection.prototype.modify` directly (not the native `Selection.modify` the other
// DELETE_LINE_COMMAND tests stub) to reproduce a specific Chromium OUTCOME — where the extension
// leaves the selection's focus — rather than the DOM mechanics that would produce it.
describe("DELETE_LINE_COMMAND clamps a collapsed mid-content caret past the prefix", () => {
  it("clamps to just past the prefix when the extended selection reaches (book, 0) — a short line", async () => {
    let book!: BookNode;
    let content!: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        content = $createTextNode("Genesis");
        book = $createBookLine("GEN", content);
        $getRoot().append(book);
      },
      <ParaMarkerPrefixCursorGuardPlugin />,
    );
    // Collapsed mid-content caret: "Gene|sis" — not the offset-0 boundary case.
    updateSelection(editor, content, 4);

    let rangeSelectionProto!: RangeSelection;
    editor.update(
      () => {
        rangeSelectionProto = $rangeSelectionPrototype();
      },
      { discrete: true },
    );
    const modifySpy = vi.spyOn(rangeSelectionProto, "modify").mockImplementation(function (
      this: RangeSelection,
    ) {
      // The whole line fits on one visual line, so the native extension's far endpoint lands
      // right at the book's own element point (book, 0) — the bug this clamp exists for.
      this.focus.set(book.getKey(), 0, "element");
    });
    try {
      editor.update(
        () => {
          editor.dispatchCommand(DELETE_LINE_COMMAND, true);
        },
        { discrete: true },
      );
    } finally {
      modifySpy.mockRestore();
    }

    editor.getEditorState().read(() => {
      const rootBook = $getRoot().getFirstChild();
      if (!$isBookNode(rootBook)) throw new Error("expected a BookNode");
      // The glyph survives; only the content before the caret ("Gene") is removed.
      expect(rootBook.getFirstChild()).toBeInstanceOf(ImmutableTypedTextNode);
      expect(rootBook.getTextContent()).toBe(`\\id GEN${NBSP}sis`);
    });
  });

  it("clamps to the wrapped visual line's own start, never the prefix, when the extended selection stays inside the content", async () => {
    let book!: BookNode;
    let content!: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        content = $createTextNode("one two three");
        book = $createBookLine("GEN", content);
        $getRoot().append(book);
      },
      <ParaMarkerPrefixCursorGuardPlugin />,
    );
    updateSelection(editor, content, 13); // caret at the very end ("one two three" is 13 chars)

    let rangeSelectionProto!: RangeSelection;
    editor.update(
      () => {
        rangeSelectionProto = $rangeSelectionPrototype();
      },
      { discrete: true },
    );
    const modifySpy = vi.spyOn(rangeSelectionProto, "modify").mockImplementation(function (
      this: RangeSelection,
    ) {
      // A long description wraps the line onto a second visual line, so the native extension's
      // far endpoint stops at THAT line's own start — mid-content, never the prefix.
      this.focus.set(content.getKey(), 8, "text");
    });
    try {
      editor.update(
        () => {
          editor.dispatchCommand(DELETE_LINE_COMMAND, true);
        },
        { discrete: true },
      );
    } finally {
      modifySpy.mockRestore();
    }

    editor.getEditorState().read(() => {
      const rootBook = $getRoot().getFirstChild();
      if (!$isBookNode(rootBook)) throw new Error("expected a BookNode");
      // Only "three" (the wrapped line's own content) is removed — "one two " survives, and so
      // does the glyph, which the extension never reached.
      expect(rootBook.getFirstChild()).toBeInstanceOf(ImmutableTypedTextNode);
      expect(rootBook.getTextContent()).toBe(`\\id GEN${NBSP}one two `);
    });
  });
});

describe("$narrowSelectionPastBookPrefix", () => {
  const nodesForBook = [BookNode, ImmutableTypedTextNode, TextNode];

  it("narrows the ANCHOR when it is the earlier endpoint (a forward selection)", () => {
    let book!: BookNode;
    let content!: TextNode;
    const { editor } = createBasicTestEnvironment(nodesForBook, () => {
      content = $createTextNode("Genesis");
      book = $createBookLine("GEN", content);
      $getRoot().append(book);
    });
    updateSelection(editor, book, 0, content, 3);

    let narrowed = false;
    editor.update(
      () => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) narrowed = $narrowSelectionPastBookPrefix(selection);
      },
      { discrete: true },
    );

    expect(narrowed).toBe(true);
    editor.getEditorState().read(() => {
      $expectSelectionToBe(content, 0, content, 3);
    });
  });

  it("narrows the FOCUS when it is the earlier endpoint (a backward selection)", () => {
    let book!: BookNode;
    let content!: TextNode;
    const { editor } = createBasicTestEnvironment(nodesForBook, () => {
      content = $createTextNode("Genesis");
      book = $createBookLine("GEN", content);
      $getRoot().append(book);
    });
    updateSelection(editor, content, 3, book, 0);

    let narrowed = false;
    editor.update(
      () => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) narrowed = $narrowSelectionPastBookPrefix(selection);
      },
      { discrete: true },
    );

    expect(narrowed).toBe(true);
    editor.getEditorState().read(() => {
      // Document order (start, end), not anchor/focus directly: the focus moved from (book, 0) to
      // (content, 0), so the selection is still backward, spanning content offsets 0 to 3.
      $expectSelectionToBe(content, 0, content, 3);
    });
  });

  it("is a no-op for a selection that does not touch the prefix", () => {
    let content!: TextNode;
    const { editor } = createBasicTestEnvironment(nodesForBook, () => {
      content = $createTextNode("Genesis");
      $getRoot().append($createBookLine("GEN", content));
    });
    updateSelection(editor, content, 1, content, 4);

    let narrowed = true;
    editor.update(
      () => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) narrowed = $narrowSelectionPastBookPrefix(selection);
      },
      { discrete: true },
    );

    expect(narrowed).toBe(false);
    editor.getEditorState().read(() => {
      $expectSelectionToBe(content, 1, content, 4);
    });
  });

  it("collapses (and still reports narrowed) when the selection spans only the prefix", () => {
    let book!: BookNode;
    let content!: TextNode;
    const { editor } = createBasicTestEnvironment(nodesForBook, () => {
      content = $createTextNode("Genesis");
      book = $createBookLine("GEN", content);
      $getRoot().append(book);
    });
    updateSelection(editor, book, 0, book, 1); // exactly the prefix, nothing else

    let narrowed = false;
    editor.update(
      () => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) narrowed = $narrowSelectionPastBookPrefix(selection);
      },
      { discrete: true },
    );

    expect(narrowed).toBe(true);
    editor.getEditorState().read(() => {
      $expectSelectionToBe(content, 0);
    });
  });
});

// Ctrl+A's selection normalizes to an anchor at (book, 0) — the whole line, prefix included — so
// Backspace and typing over the selection both used to lose the glyph along with the content (the
// non-collapsed branches $narrowSelectionPastBookPrefix now fixes). Constructed directly rather
// than dispatched through SELECT_ALL_COMMAND: the shape under test is the resulting selection, not
// Lexical's own $selectAll().
describe("a non-collapsed selection spanning the prefix narrows instead of losing it", () => {
  it("Backspace over the whole line removes only the content; typing after that lands past the prefix", async () => {
    let book!: BookNode;
    let content!: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        content = $createTextNode("Genesis");
        book = $createBookLine("GEN", content);
        $getRoot().append(book);
      },
      <ParaMarkerPrefixCursorGuardPlugin />,
    );
    updateSelection(editor, book, 0, content, 7); // "Genesis" is 7 chars

    await pressKey(editor, "Backspace");

    editor.getEditorState().read(() => {
      const rootBook = $getRoot().getFirstChild();
      if (!$isBookNode(rootBook)) throw new Error("expected a BookNode");
      expect(rootBook.getFirstChild()).toBeInstanceOf(ImmutableTypedTextNode);
      expect(rootBook.getTextContent()).toBe(`\\id GEN${NBSP}`);
    });

    editor.update(
      () => {
        editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "x");
      },
      { discrete: true },
    );

    editor.getEditorState().read(() => {
      const rootBook = $getRoot().getFirstChild();
      if (!$isBookNode(rootBook)) throw new Error("expected a BookNode");
      expect(rootBook.getFirstChild()).toBeInstanceOf(ImmutableTypedTextNode);
      expect(rootBook.getTextContent()).toBe(`\\id GEN${NBSP}x`);
    });
  });

  it("typing over the whole line replaces only the content; the prefix is still the book's first child", async () => {
    let book!: BookNode;
    let content!: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        content = $createTextNode("Genesis");
        book = $createBookLine("GEN", content);
        $getRoot().append(book);
      },
      <ParaMarkerPrefixCursorGuardPlugin />,
    );
    updateSelection(editor, book, 0, content, 7); // "Genesis" is 7 chars

    editor.update(
      () => {
        editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "x");
      },
      { discrete: true },
    );

    editor.getEditorState().read(() => {
      const rootBook = $getRoot().getFirstChild();
      if (!$isBookNode(rootBook)) throw new Error("expected a BookNode");
      expect(rootBook.getFirstChild()).toBeInstanceOf(ImmutableTypedTextNode);
      expect(rootBook.getTextContent()).toBe(`\\id GEN${NBSP}x`);
    });
  });

  // No paste test harness exists in this file yet; PASTE_COMMAND and CUT_COMMAND share the same
  // $narrowSelectionBeforeCommand registration CONTROLLED_TEXT_INSERTION_COMMAND uses above, so
  // these pin the WIRING — the selection is narrowed before any other handler for the command
  // runs — rather than re-exercising Lexical's own paste/cut mechanics.
  it("narrows the selection before a lower-priority PASTE_COMMAND handler runs", async () => {
    let book!: BookNode;
    let content!: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        content = $createTextNode("Genesis");
        book = $createBookLine("GEN", content);
        $getRoot().append(book);
      },
      <ParaMarkerPrefixCursorGuardPlugin />,
    );
    updateSelection(editor, book, 0, content, 7); // "Genesis" is 7 chars

    let sawAnchorKey = "";
    const unregister = editor.registerCommand(
      PASTE_COMMAND,
      () => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) sawAnchorKey = selection.anchor.getNode().getKey();
        return true; // claim it — nothing here exercises Lexical's own paste handling
      },
      COMMAND_PRIORITY_LOW,
    );
    try {
      editor.update(
        () => {
          editor.dispatchCommand(PASTE_COMMAND, new KeyboardEvent("paste"));
        },
        { discrete: true },
      );
    } finally {
      unregister();
    }

    expect(sawAnchorKey).toBe(content.getKey());
  });

  it("narrows the selection before a lower-priority CUT_COMMAND handler runs", async () => {
    let book!: BookNode;
    let content!: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        content = $createTextNode("Genesis");
        book = $createBookLine("GEN", content);
        $getRoot().append(book);
      },
      <ParaMarkerPrefixCursorGuardPlugin />,
    );
    updateSelection(editor, book, 0, content, 7); // "Genesis" is 7 chars

    let sawAnchorKey = "";
    const unregister = editor.registerCommand(
      CUT_COMMAND,
      () => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) sawAnchorKey = selection.anchor.getNode().getKey();
        return true; // claim it — nothing here exercises Lexical's own cut handling
      },
      COMMAND_PRIORITY_LOW,
    );
    try {
      editor.update(
        () => {
          editor.dispatchCommand(CUT_COMMAND, null);
        },
        { discrete: true },
      );
    } finally {
      unregister();
    }

    expect(sawAnchorKey).toBe(content.getKey());
  });
});

describe("ParaMarkerPrefixCursorGuardPlugin (CLICK_COMMAND integration)", () => {
  it("corrects element-0 cursor when CLICK_COMMAND fires", () => {
    let para!: ParaNode;
    let content!: TextNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      content = $createTextNode("in the beginning");
      para = $createParaNode("li2");
      $getRoot().append(para.append($createImmutableVerseNode("7"), content));
    });

    // Register the same CLICK_COMMAND handler the plugin mounts via useEffect.
    editor.registerCommand<MouseEvent>(
      CLICK_COMMAND,
      (event) => {
        $guardCursorOnClick(event);
        return false;
      },
      COMMAND_PRIORITY_EDITOR,
    );

    // Put cursor in the bad position a click in the hanging-indent gutter produces.
    updateSelection(editor, para, 0);

    // Wrapping dispatchCommand in a discrete update forces Lexical to run the command handlers
    // synchronously (Lexical only runs them inline when editor._updating is true). Outside an
    // active update, dispatchCommand is scheduled asynchronously.
    editor.update(
      () => {
        editor.dispatchCommand(CLICK_COMMAND, new MouseEvent("click"));
      },
      { discrete: true },
    );

    editor.getEditorState().read(() => {
      $expectSelectionToBe(content, 0);
    });
  });

  it("is a no-op when cursor is already past all prefix nodes", () => {
    let content!: TextNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      content = $createTextNode("in the beginning");
      const para = $createParaNode("li2");
      $getRoot().append(para.append($createImmutableVerseNode("7"), content));
    });

    editor.registerCommand<MouseEvent>(
      CLICK_COMMAND,
      (event) => {
        $guardCursorOnClick(event);
        return false;
      },
      COMMAND_PRIORITY_EDITOR,
    );

    updateSelection(editor, content, 4);
    editor.update(
      () => {
        editor.dispatchCommand(CLICK_COMMAND, new MouseEvent("click"));
      },
      { discrete: true },
    );

    editor.getEditorState().read(() => {
      $expectSelectionToBe(content, 4);
    });
  });
});
