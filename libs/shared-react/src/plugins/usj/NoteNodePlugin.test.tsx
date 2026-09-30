import {
  $createImmutableNoteCallerNode,
  $isImmutableNoteCallerNode,
  defaultCrossRefCallers,
  defaultNoteCallers,
  ImmutableNoteCallerNode,
} from "../../nodes/usj/ImmutableNoteCallerNode";
import { $createImmutableVerseNode } from "../../nodes/usj/ImmutableVerseNode";
import { UsjNodeOptions } from "../../nodes/usj/usj-node-options.model";
import { ViewOptions } from "../../views/view-options.utils";
import { CounterStyleRuleLike, NoteNodePlugin } from "./NoteNodePlugin";
import { baseTestEnvironment } from "./react-test.utils";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $createTextNode,
  LexicalEditor,
  LexicalNode,
  TextNode,
  $isTextNode,
  $getNodeByKey,
} from "lexical";
import {
  $createCharNode,
  $createImmutableChapterNode,
  $createMarkerNode,
  $createMarkerTrailingSeparator,
  $createNoteNode,
  $createParaNode,
  $isCharNode,
  $isMarkerNode,
  $isMarkerTrailingSeparator,
  $isNoteNode,
  $isParaNode,
  EMPTY_CHAR_PLACEHOLDER_TEXT,
  GENERATOR_NOTE_CALLER,
  getEditableCallerText,
  NBSP,
  NoteNode,
} from "shared";
import { MockInstance } from "vitest";

let styleSheetsSpy: MockInstance;
let firstVerseTextNode: TextNode;
let firstNoteNode: NoteNode;
let secondNoteNode: NoteNode;
let thirdNoteNode: NoteNode;
let noteCallersRule: CounterStyleRuleLike;
let crossRefCallersRule: CounterStyleRuleLike;

const DEFAULT_NOTE_CALLERS_SYMBOLS =
  '"a" "b" "c" "d" "e" "f" "g" "h" "i" "j" "k" "l" "m" "n" "o" "p" "q" "r" "s" "t" "u" "v" "w" "x" "y" "z"';
const DEFAULT_CROSS_REF_CALLERS_SYMBOLS = '"†"';

function $createFootnoteNode(caller: string, reference: string, text: string) {
  const footnoteNode = $createNoteNode("f", GENERATOR_NOTE_CALLER);
  footnoteNode.append(
    $createImmutableNoteCallerNode(caller, `${reference} ${text}`),
    $createCharNode("fr").append($createTextNode(reference)),
    $createCharNode("ft").append($createTextNode(text)),
  );
  return footnoteNode;
}

function $defaultInitialEditorState() {
  const firstVerseNode = $createImmutableVerseNode("1");
  const secondVerseNode = $createImmutableVerseNode("2");
  const secondVerseTextNode = $createTextNode("second verse text ");
  const thirdVerseNode = $createImmutableVerseNode("3");
  const thirdVerseTextNode = $createTextNode("third verse text ");

  firstNoteNode = $createFootnoteNode("a", "1:1 ", "First footnote text ");
  firstVerseTextNode = $createTextNode("first verse text ");
  secondNoteNode = $createFootnoteNode("b", "1:2 ", "Second footnote text ");
  thirdNoteNode = $createFootnoteNode("c", "1:3 ", "Third footnote text ");

  $getRoot().append(
    $createImmutableChapterNode("1"),
    $createParaNode().append(firstVerseNode, firstNoteNode, firstVerseTextNode),
    $createParaNode().append(secondVerseNode, secondNoteNode, secondVerseTextNode),
    $createParaNode().append(thirdVerseNode, thirdNoteNode, thirdVerseTextNode),
  );
}

beforeAll(() => {
  noteCallersRule = {
    name: "note-callers",
    symbols: DEFAULT_NOTE_CALLERS_SYMBOLS,
    type: 11, // CSSRule.COUNTER_STYLE_RULE
  };
  crossRefCallersRule = {
    name: "cross-ref-callers",
    symbols: DEFAULT_CROSS_REF_CALLERS_SYMBOLS,
    type: 11, // CSSRule.COUNTER_STYLE_RULE
  };
  const fakeStyleSheet = {
    cssRules: [noteCallersRule, crossRefCallersRule],
    rules: [noteCallersRule, crossRefCallersRule],
  };
  styleSheetsSpy = vi
    .spyOn(document, "styleSheets", "get")
    // Simplify testing.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .mockImplementation(() => [fakeStyleSheet] as any);
});

afterAll(() => {
  if (styleSheetsSpy) {
    styleSheetsSpy.mockRestore();
  }
});

beforeEach(() => {
  // Reset symbols between tests since `updateCounterStyleSymbols` mutates the rule in place.
  noteCallersRule.symbols = DEFAULT_NOTE_CALLERS_SYMBOLS;
  crossRefCallersRule.symbols = DEFAULT_CROSS_REF_CALLERS_SYMBOLS;
});

describe("NoteNodePlugin", () => {
  it("should load default initialEditorState (sanity check)", async () => {
    const { editor } = await testEnvironment();

    editor.getEditorState().read(() => {
      expect($getRoot().getTextContent()).toBe(
        `${NBSP}1:1 ${NBSP}First footnote text ${NBSP}first verse text \n\n` +
          `${NBSP}1:2 ${NBSP}Second footnote text ${NBSP}second verse text \n\n` +
          `${NBSP}1:3 ${NBSP}Third footnote text ${NBSP}third verse text `,
      );
      expect(getNoteCaller(firstNoteNode)).toBe("a");
      expect(getNoteCaller(secondNoteNode)).toBe("b");
      expect(getNoteCaller(thirdNoteNode)).toBe("c");
    });
  });

  describe("Counter style rewriting", () => {
    it("should rewrite note-callers counter-style symbols from nodeOptions.noteCallers", async () => {
      await testEnvironment({ noteCallers: ["one", "two", "three"] });

      expect(noteCallersRule.symbols).toBe('"one" "two" "three"');
    });

    it("should rewrite cross-ref-callers counter-style symbols from nodeOptions.crossRefCallers", async () => {
      await testEnvironment({ crossRefCallers: ["‡"] });

      expect(crossRefCallersRule.symbols).toBe('"‡"');
    });

    it("should default cross-ref-callers counter-style symbols to '†' when crossRefCallers is not set", async () => {
      // Seed a non-default value so a pass requires the plugin to actively write the default —
      // the beforeEach seeds the default itself, which would also satisfy a no-op plugin.
      crossRefCallersRule.symbols = '"sentinel"';

      await testEnvironment({ noteCallers: defaultNoteCallers });

      expect(defaultCrossRefCallers).toEqual(["†"]);
      expect(crossRefCallersRule.symbols).toBe(DEFAULT_CROSS_REF_CALLERS_SYMBOLS);
    });
  });

  describe("Note Caller Preview Text", () => {
    it("should update preview text", async () => {
      const { editor } = await testEnvironment();
      editor.getEditorState().read(() => {
        expect(getPreviewText(firstNoteNode)).toBe("1:1  First footnote text");
      });

      await updateNoteNodeText(editor, firstNoteNode, 2, 0, "1:1a ");

      editor.getEditorState().read(() => {
        expect(getPreviewText(firstNoteNode)).toBe("1:1a  First footnote text");
      });
    });

    it("should update preview text when 'empty' placeholder text", async () => {
      const { editor } = await testEnvironment(undefined, undefined, () => {
        firstNoteNode = $createNoteNode("f", GENERATOR_NOTE_CALLER);
        $getRoot().append(
          $createParaNode().append(
            firstNoteNode.append(
              $createImmutableNoteCallerNode("a", ""),
              $createCharNode("fr").append($createTextNode("1:1 ")),
              $createCharNode("ft").append($createTextNode(EMPTY_CHAR_PLACEHOLDER_TEXT)),
            ),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const para = $getRoot().getFirstChild();
        if (!$isParaNode(para)) throw new Error("Expected a ParaNode");

        const note = para.getFirstChild();
        if (!$isNoteNode(note)) throw new Error("Expected a NoteNode");
        expect(getPreviewText(note)).toBe("1:1");
      });
    });

    it("should remove 'empty' placeholder text once content exists", async () => {
      const { editor } = await testEnvironment(undefined, undefined, () => {
        firstNoteNode = $createNoteNode("f", GENERATOR_NOTE_CALLER);
        $getRoot().append(
          $createParaNode().append(
            firstNoteNode.append(
              $createImmutableNoteCallerNode("a", ""),
              $createCharNode("fr").append($createTextNode("1:1 ")),
              $createCharNode("ft").append($createTextNode(EMPTY_CHAR_PLACEHOLDER_TEXT)),
            ),
          ),
        );
      });

      await updateNoteNodeText(
        editor,
        firstNoteNode,
        4,
        0,
        `${EMPTY_CHAR_PLACEHOLDER_TEXT}Updated text`,
      );

      editor.getEditorState().read(() => {
        const para = $getRoot().getFirstChild();
        if (!$isParaNode(para)) throw new Error("Expected a ParaNode");

        const note = para.getFirstChild();
        if (!$isNoteNode(note)) throw new Error("Expected a NoteNode");
        expect(getPreviewText(note)).toBe("1:1  Updated text");

        const ftChar = note.getChildAtIndex(4);
        if (!$isCharNode(ftChar)) throw new Error("Expected a CharNode");
        expect(ftChar.getMarker()).toBe("ft");

        const textNode = ftChar.getFirstChild();
        if (!$isTextNode(textNode)) throw new Error("Expected a TextNode");
        expect(textNode.getTextContent()).toBe("Updated text");
      });
    });

    it("should remove CharNode when content is cleared", async () => {
      const { editor } = await testEnvironment(undefined, undefined, () => {
        firstNoteNode = $createNoteNode("f", GENERATOR_NOTE_CALLER);
        $getRoot().append(
          $createParaNode().append(
            firstNoteNode.append(
              $createImmutableNoteCallerNode("a", ""),
              $createCharNode("fr").append($createTextNode("1:1 ")),
              $createCharNode("ft").append($createTextNode("Some content")),
            ),
          ),
        );
      });

      await updateNoteNodeText(editor, firstNoteNode, 4, 0, "");

      editor.getEditorState().read(() => {
        const para = $getRoot().getFirstChild();
        if (!$isParaNode(para)) throw new Error("Expected a ParaNode");

        const note = para.getFirstChild();
        if (!$isNoteNode(note)) throw new Error("Expected a NoteNode");
        expect(getPreviewText(note)).toBe("1:1");

        const charNodes = note.getChildren().filter($isCharNode);
        const markers = charNodes.map((child) => child.getMarker());
        expect(markers, JSON.stringify(markers)).not.toContain("ft");

        const frChar = charNodes.find((child) => child.getMarker() === "fr");
        if (!$isCharNode(frChar)) throw new Error("Expected a CharNode");

        const frText = frChar.getFirstChild();
        if (!$isTextNode(frText)) throw new Error("Expected a TextNode");
        expect(frText.getTextContent()).toBe("1:1 ");
      });
    });
  });

  describe("Deleted Note Caller", () => {
    it("should remove NoteNode without caller when markerMode is not 'editable'", async () => {
      let noteNodeWithoutCallerKey: string | undefined;
      const { editor } = await testEnvironment(
        undefined,
        // viewOptions (`markerMode` is not 'editable')
        { markerMode: "visible", hasSpacing: true, isFormattedFont: true }, // Explicitly non-editable
        () => {
          const noteNodeWithoutCaller = $createNoteNode("f", GENERATOR_NOTE_CALLER);
          // Add some other nodes, but not an ImmutableNoteCallerNode
          noteNodeWithoutCaller.append(
            $createCharNode("fr").append($createTextNode("1:1a ")),
            $createCharNode("ft").append($createTextNode("Some text")),
          );
          noteNodeWithoutCallerKey = noteNodeWithoutCaller.getKey();
          $getRoot().append($createParaNode().append(noteNodeWithoutCaller));
        },
      );

      editor.getEditorState().read(() => {
        // Node should be removed
        expect($getNodeByKey(noteNodeWithoutCallerKey as string)).toBeNull();
      });
    });

    it("should not remove NoteNode without caller when markerMode is 'editable'", async () => {
      let noteNodeKey: string;
      const { editor } = await testEnvironment(
        undefined,
        { markerMode: "editable", hasSpacing: false, isFormattedFont: false },
        () => {
          const noteNode = $createNoteNode("f", GENERATOR_NOTE_CALLER);
          noteNode.append(
            $createTextNode(NBSP + "a "),
            $createCharNode("fr").append($createTextNode("1:1a ")),
            $createCharNode("ft").append($createTextNode("Some text")),
          );
          noteNodeKey = noteNode.getKey();
          $getRoot().append($createParaNode().append(noteNode));
        },
      );

      editor.getEditorState().read(() => {
        const noteNode = $getNodeByKey(noteNodeKey);
        // Node should not be removed
        expect(noteNode).not.toBeNull();
        expect(noteNode?.isAttached()).toBe(true);
      });
    });
  });

  describe("Expanded editable caller retention", () => {
    it("does not eject the editable caller text out of an expanded note", async () => {
      // Editable+expanded: once the opening `\f` glyph is deleted, the caller TextNode
      // (` caller<NBSP>`, see getEditableCallerText) becomes the note's FIRST child. The
      // leading-text salvage must not eject it into the paragraph — doing so plants the caller
      // word in body text (live-observed as a repeated `word~` spray), and MarkerEditPlugin's
      // note-deletion transform needs the caller in place to recognize the damaged note.
      let noteKey: string;
      const callerText = getEditableCallerText("+");
      const { editor } = await testEnvironment(
        undefined,
        { markerMode: "editable", noteMode: "expanded", hasSpacing: false, isFormattedFont: false },
        () => {
          const note = $createNoteNode("f", "+", false);
          note.append(
            $createTextNode(callerText), // opener glyph already deleted — caller is first
            $createCharNode("ft").append($createMarkerNode("ft"), $createTextNode(`${NBSP}text`)),
          );
          noteKey = note.getKey();
          $getRoot().append(
            $createParaNode().append($createTextNode("before "), note, $createTextNode(" after")),
          );
        },
      );

      editor.getEditorState().read(() => {
        const note = $getNodeByKey<NoteNode>(noteKey);
        expect(note?.isAttached()).toBe(true);
        // The caller text stays INSIDE the note...
        const noteTexts = note
          ?.getChildren()
          .filter((child): child is TextNode => $isTextNode(child))
          .map((child) => child.getTextContent());
        expect(noteTexts).toContain(callerText);
        // ...and never appears as a direct child of the paragraph.
        const para = $getRoot().getChildren().filter($isParaNode)[0];
        const paraTexts = para
          .getChildren()
          .filter((child): child is TextNode => $isTextNode(child) && !$isNoteNode(child))
          .map((child) => child.getTextContent());
        expect(paraTexts).not.toContain(callerText);
      });
    });

    it("still ejects stray typed text at the start of a note (salvage preserved)", async () => {
      let noteKey: string;
      const { editor } = await testEnvironment(
        undefined,
        { markerMode: "editable", noteMode: "expanded", hasSpacing: false, isFormattedFont: false },
        () => {
          const note = $createNoteNode("f", "+", false);
          note.append(
            $createTextNode("zz"), // user-typed stray text, NOT the caller shape
            $createMarkerNode("f"),
            $createTextNode(getEditableCallerText("+")),
            $createCharNode("ft").append($createMarkerNode("ft"), $createTextNode(`${NBSP}text`)),
          );
          noteKey = note.getKey();
          $getRoot().append($createParaNode().append($createTextNode("before "), note));
        },
      );

      editor.getEditorState().read(() => {
        const note = $getNodeByKey<NoteNode>(noteKey);
        expect(note?.isAttached()).toBe(true);
        // The stray text was moved out to the paragraph, ahead of the note.
        const para = $getRoot().getChildren().filter($isParaNode)[0];
        const paraTexts = para
          .getChildren()
          .filter((child): child is TextNode => $isTextNode(child) && !$isNoteNode(child))
          .map((child) => child.getTextContent());
        expect(paraTexts.some((text) => text.includes("zz"))).toBe(true);
      });
    });
  });

  describe("Note content text", () => {
    /** `\x - \xo 1.2\xo* \xt Gen 1:1\xt*\x*` in the collapsed layout: the space between the two
     * spans is the note's own content, directly inside it, with a separator after every child. */
    function $createCrossRefNote(): NoteNode {
      return $createNoteNode("x", "-").append(
        $createImmutableNoteCallerNode("-", ""),
        $createMarkerTrailingSeparator(),
        $createCharNode("xo").append($createTextNode("1.2")),
        $createMarkerTrailingSeparator(),
        $createTextNode(" "),
        $createMarkerTrailingSeparator(),
        $createCharNode("xt").append($createTextNode("Gen 1:1")),
        $createMarkerTrailingSeparator(),
      );
    }

    it("keeps a content space when its text node is edited", async () => {
      let noteKey = "";
      const { editor } = await testEnvironment(undefined, undefined, () => {
        const note = $createCrossRefNote();
        noteKey = note.getKey();
        $getRoot().append($createParaNode().append($createTextNode("see "), note));
      });

      // What an annotation's split and re-merge leaves behind: the text node marked dirty.
      await act(async () => {
        editor.update(() => {
          const space = $getNodeByKey<NoteNode>(noteKey)?.getChildAtIndex(4);
          if (!$isTextNode(space)) throw new Error("Expected the note's content space");
          space.markDirty();
        });
      });

      editor.getEditorState().read(() => {
        expect(noteLayout($getNodeByKey<NoteNode>(noteKey))).toEqual(
          `caller|sep|char:xo|sep|text:" "|sep|char:xt|sep`,
        );
      });
    });

    it("keeps content text typed into a content space", async () => {
      let noteKey = "";
      const { editor } = await testEnvironment(undefined, undefined, () => {
        const note = $createCrossRefNote();
        noteKey = note.getKey();
        $getRoot().append($createParaNode().append($createTextNode("see "), note));
      });

      await act(async () => {
        editor.update(() => {
          const space = $getNodeByKey<NoteNode>(noteKey)?.getChildAtIndex(4);
          if (!$isTextNode(space)) throw new Error("Expected the note's content space");
          space.setTextContent(" a ");
        });
      });

      editor.getEditorState().read(() => {
        expect(noteLayout($getNodeByKey<NoteNode>(noteKey))).toEqual(
          `caller|sep|char:xo|sep|text:" a "|sep|char:xt|sep`,
        );
      });
    });

    it("keeps content text right after a span, putting the span's separator in front of it", async () => {
      let noteKey = "";
      const { editor } = await testEnvironment(undefined, undefined, () => {
        const note = $createNoteNode("x", "-").append(
          $createImmutableNoteCallerNode("-", ""),
          $createCharNode("xo").append($createTextNode("1.2")),
          $createTextNode(" "),
          $createCharNode("xt").append($createTextNode("Gen 1:1")),
        );
        noteKey = note.getKey();
        $getRoot().append($createParaNode().append(note));
      });

      editor.getEditorState().read(() => {
        expect(noteLayout($getNodeByKey<NoteNode>(noteKey))).toEqual(
          `caller|sep|char:xo|sep|text:" "|char:xt|sep`,
        );
      });
    });

    it("keeps content text right after the caller, putting the caller's separator in front of it", async () => {
      let noteKey = "";
      const { editor } = await testEnvironment(undefined, undefined, () => {
        const note = $createNoteNode("f", "+").append(
          $createImmutableNoteCallerNode("+", ""),
          $createTextNode("note text"),
        );
        noteKey = note.getKey();
        $getRoot().append($createParaNode().append(note));
      });

      editor.getEditorState().read(() => {
        expect(noteLayout($getNodeByKey<NoteNode>(noteKey))).toEqual(`caller|sep|text:"note text"`);
      });
    });

    it("keeps the closing glyph right after a span, putting the span's separator in front of it", async () => {
      let noteKey = "";
      const { editor } = await testEnvironment(
        undefined,
        { markerMode: "editable", noteMode: "collapsed", hasSpacing: true, isFormattedFont: true },
        () => {
          const note = $createNoteNode("f", "+").append(
            $createMarkerNode("f", "opening"),
            $createImmutableNoteCallerNode("+", ""),
            $createMarkerTrailingSeparator(),
            $createCharNode("ft").append(
              $createMarkerNode("ft", "opening"),
              $createTextNode(`${NBSP}body`),
            ),
            $createMarkerNode("f", "closing"),
          );
          noteKey = note.getKey();
          $getRoot().append($createParaNode().append(note));
        },
      );

      editor.getEditorState().read(() => {
        expect(noteLayout($getNodeByKey<NoteNode>(noteKey))).toEqual(
          `marker:\\f|caller|sep|char:ft|sep|marker:\\f*`,
        );
      });
    });

    it.each<{ shape: string; typed: string; layout: string }>([
      {
        shape: "NBSP + x",
        typed: `${NBSP}x`,
        layout: `caller|sep|char:xo|sep|text:"x "|sep|char:xt|sep`,
      },
      {
        shape: "a + NBSP + b",
        typed: `a${NBSP}b`,
        layout: `caller|sep|char:xo|sep|text:"ab "|sep|char:xt|sep`,
      },
    ])(
      "restores a separator whose text became $shape, keeping the added text as content",
      async ({ typed, layout }) => {
        let noteKey = "";
        const { editor } = await testEnvironment(undefined, undefined, () => {
          const note = $createCrossRefNote();
          noteKey = note.getKey();
          $getRoot().append($createParaNode().append(note));
        });

        await act(async () => {
          editor.update(() => {
            const separator = $getNodeByKey<NoteNode>(noteKey)?.getChildAtIndex(3);
            if (!$isMarkerTrailingSeparator(separator) || !$isTextNode(separator))
              throw new Error("Expected a separator");
            separator.setTextContent(typed);
          });
        });

        editor.getEditorState().read(() => {
          expect(noteLayout($getNodeByKey<NoteNode>(noteKey))).toEqual(layout);
        });
      },
    );

    it("makes a bare NBSP after the caller or a span the tagged separator", async () => {
      let noteKey = "";
      const { editor } = await testEnvironment(undefined, undefined, () => {
        const note = $createNoteNode("x", "-").append(
          $createImmutableNoteCallerNode("-", ""),
          $createTextNode(NBSP),
          $createCharNode("xo").append($createTextNode("1.2")),
          $createTextNode(NBSP),
        );
        noteKey = note.getKey();
        $getRoot().append($createParaNode().append(note));
      });

      editor.getEditorState().read(() => {
        expect(noteLayout($getNodeByKey<NoteNode>(noteKey))).toEqual(`caller|sep|char:xo|sep`);
      });
    });
  });
});

async function testEnvironment(
  nodeOptions: UsjNodeOptions = { noteCallers: defaultNoteCallers },
  viewOptions: ViewOptions = { markerMode: "hidden", hasSpacing: true, isFormattedFont: true },
  $initialEditorState: () => void = $defaultInitialEditorState,
) {
  // Create a ref for expanded note key - using a simple object to simulate useRef behavior in tests
  const expandedNoteKeyRef = { current: undefined as string | undefined };

  return baseTestEnvironment(
    $initialEditorState,
    <NoteNodePlugin
      expandedNoteKeyRef={expandedNoteKeyRef}
      nodeOptions={nodeOptions}
      viewOptions={viewOptions}
      logger={console}
    />,
  );
}

/**
 * Updates the text content of a CharNode within a NoteNode.
 *
 * @param editor - The LexicalEditor instance where the NoteNode is located.
 * @param noteNode - The NoteNode instance containing the CharNode to update.
 * @param charNodeIndex - The index of the CharNode within the NoteNode's children.
 * @param textNodeIndex - The index of the TextNode within the CharNode's children.
 * @param text - The new text content to set on the CharNode.
 * @returns A promise that resolves once the text content has been updated.
 */
async function updateNoteNodeText(
  editor: LexicalEditor,
  noteNode: NoteNode,
  charNodeIndex: number,
  textNodeIndex: number,
  text: string,
) {
  await act(async () => {
    editor.update(() => {
      const noteNodeChild = noteNode.getChildAtIndex(charNodeIndex);
      if (!$isCharNode(noteNodeChild)) throw new Error("Expected CharNode");

      const charNodeChild = noteNodeChild.getChildAtIndex(textNodeIndex);
      if (!$isTextNode(charNodeChild)) throw new Error("Expected TextNode");

      charNodeChild.setTextContent(text);
    });
  });
}

function getNoteCaller(noteNode: NoteNode | undefined): string | undefined {
  return noteNode?.getChildAtIndex<ImmutableNoteCallerNode>(0)?.getCaller();
}

function getPreviewText(noteNode: NoteNode | undefined): string | undefined {
  return noteNode?.getChildAtIndex<ImmutableNoteCallerNode>(0)?.getPreviewText();
}

/** A note's direct children, one token each: a separator must be the tagged engine separator and
 * hold exactly one NBSP to read as `sep`, and any other NBSP reads as `<nbsp>`. Call inside a read
 * or update. */
function noteLayout(note: NoteNode | null | undefined): string {
  return (note?.getChildren() ?? [])
    .map((child: LexicalNode) => {
      if ($isImmutableNoteCallerNode(child)) return "caller";
      if ($isMarkerNode(child)) return `marker:${visible(child.getTextContent())}`;
      if ($isMarkerTrailingSeparator(child) && child.getTextContent() === NBSP) return "sep";
      if ($isCharNode(child)) return `char:${child.getMarker()}`;
      if ($isTextNode(child)) return `text:${JSON.stringify(visible(child.getTextContent()))}`;
      return child.getType();
    })
    .join("|");
}

function visible(text: string): string {
  return text.replaceAll(NBSP, "<nbsp>");
}
