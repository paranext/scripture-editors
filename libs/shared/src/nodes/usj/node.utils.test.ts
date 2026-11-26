import {
  $createGutterMarkerNode,
  $createImmutableTypedTextNode,
  ImmutableTypedTextNode,
} from "../features/ImmutableTypedTextNode.js";
import { $createMarkerNode } from "../features/MarkerNode.js";
import { $createUnknownNode } from "../features/UnknownNode.js";
import { textTypeState } from "../collab/delta.state.js";
import { $createBookNode, BookNode } from "./BookNode.js";
import { $createCharNode } from "./CharNode.js";
import { $createImmutableTableCellNode } from "./ImmutableTableCellNode.js";
import { $createImmutableTableNode } from "./ImmutableTableNode.js";
import { $createImmutableTableRowNode } from "./ImmutableTableRowNode.js";
import { NBSP } from "./node-constants.js";
import {
  $getNoteCallerPreviewText,
  $getSelectableParaMarker,
  $getSelectedParaMarker,
  $selectParaMarker,
  getPreviewTextFromSerializedNodes,
  isSerializedSynthesizedMarkerNode,
  registerParaMarkerSelectionOwner,
} from "./node.utils.js";
import { $createParaNode, ParaNode } from "./ParaNode.js";
import { usjBaseNodes } from "./index.js";
import { createBasicTestEnvironment } from "./test.utils.js";
import { $createTypedMarkNode, TypedMarkNode } from "../features/TypedMarkNode.js";
import {
  $createNodeSelection,
  $createTextNode,
  $getRoot,
  $getSelection,
  $isElementNode,
  $isNodeSelection,
  $isRangeSelection,
  $setSelection,
  $setState,
  LexicalEditor,
  LexicalNode,
  SerializedElementNode,
  TextNode,
} from "lexical";
import { describe, expect, it } from "vitest";

describe("getPreviewTextFromSerializedNodes", () => {
  it("excludes a char span's attribute display run from note-preview text", () => {
    // A collapsed note containing `\w word|gloss\w*`: the `|gloss` display run is engine-owned
    // presentation (textType "attribute"), not note content, so it must not appear in the preview.
    const { editor } = createBasicTestEnvironment(undefined, () => {
      const char = $createCharNode("w", { lemma: "gloss" });
      const run = $createTextNode("|gloss");
      $setState(run, textTypeState, "attribute");
      char.append(
        $createMarkerNode("w"),
        $createTextNode("word"),
        run,
        $createMarkerNode("w", "closing"),
      );
      $getRoot().append($createParaNode("p").append(char));
    });

    const serialized = editor.getEditorState().toJSON();
    const para = serialized.root.children[0] as SerializedElementNode;
    const preview = getPreviewTextFromSerializedNodes(para.children);

    expect(preview).toBe("word");
    expect(preview).not.toContain("|gloss");
  });
});

/** The note-preview text of the paragraph `$children` builds, from its serialized children. */
function previewOf($children: () => LexicalNode[]): string {
  const { editor } = createBasicTestEnvironment([TypedMarkNode, ...usjBaseNodes], () => {
    $getRoot().append($createParaNode("p").append(...$children()));
  });
  const para = editor.getEditorState().toJSON().root.children[0] as SerializedElementNode;
  return getPreviewTextFromSerializedNodes(para.children);
}

/** An annotation mark holding `text`. */
function $marked(text: string): LexicalNode {
  return $createTypedMarkNode({ annotation: ["1"] }).append($createTextNode(text));
}

describe("getPreviewTextFromSerializedNodes with annotation marks", () => {
  it("reads a span's text a mark holds part of as the span's text with no mark", () => {
    const $span = (...content: LexicalNode[]) =>
      $createCharNode("ft").append(
        $createMarkerNode("ft"),
        ...content,
        $createMarkerNode("ft", "closing"),
      );
    const plain = previewOf(() => [$span($createTextNode("some text"))]);
    const marked = previewOf(() => [$span($createTextNode("some "), $marked("text"))]);
    expect(plain).toBe("some text");
    expect(marked).toBe(plain);
  });

  it("reads text a mark splits outside any span as the same text with no mark", () => {
    const plain = previewOf(() => [$createTextNode("a b")]);
    const marked = previewOf(() => [$createTextNode("a "), $marked("b")]);
    expect(plain).toBe("a b");
    expect(marked).toBe(plain);
  });

  it("keeps a no-break space a mark holds alone, as the same text with no mark keeps it", () => {
    const plain = previewOf(() => [$createTextNode(`a${NBSP}b`)]);
    const marked = previewOf(() => [$createTextNode("a"), $marked(NBSP), $createTextNode("b")]);
    expect(plain).toBe(`a${NBSP}b`);
    expect(marked).toBe(plain);
  });
});

describe("$getNoteCallerPreviewText with annotation marks", () => {
  it("reads a span a mark wraps whole as the same span with no mark", () => {
    const { editor } = createBasicTestEnvironment([TypedMarkNode, ...usjBaseNodes], () => {
      const $span = () =>
        $createCharNode("ft").append(
          $createMarkerNode("ft"),
          $createTextNode("some text"),
          $createMarkerNode("ft", "closing"),
        );
      $getRoot().append(
        $createParaNode("p").append($span()),
        $createParaNode("p").append($createTypedMarkNode({ annotation: ["1"] }).append($span())),
      );
    });
    const [plain, marked] = editor.getEditorState().read(() =>
      $getRoot()
        .getChildren()
        .map((para) => $getNoteCallerPreviewText($isElementNode(para) ? para.getChildren() : [])),
    );
    expect(plain).toBe("some text");
    expect(marked).toBe(plain);
  });
});

/** Replaces the selection with a node selection of exactly `nodes`. */
function selectNodes(editor: LexicalEditor, ...nodes: LexicalNode[]): void {
  editor.update(
    () => {
      const selection = $createNodeSelection();
      nodes.forEach((node) => selection.add(node.getKey()));
      $setSelection(selection);
    },
    { discrete: true },
  );
}

/** The key of the paragraph marker the editor's committed selection has selected, if any. */
function selectedParaMarkerKey(editor: LexicalEditor): string | undefined {
  return editor.getEditorState().read(() => $getSelectedParaMarker($getSelection())?.getKey());
}

describe("$getSelectedParaMarker", () => {
  it("recognizes a node selection of a paragraph's gutter marker", () => {
    let glyph!: ImmutableTypedTextNode;
    const { editor } = createBasicTestEnvironment(undefined, () => {
      glyph = $createGutterMarkerNode(`\\li2${NBSP}`);
      $getRoot().append($createParaNode("li2").append(glyph, $createTextNode("text")));
    });

    selectNodes(editor, glyph);

    expect(selectedParaMarkerKey(editor)).toBe(glyph.getKey());
  });

  it("ignores markerMode visible's inline glyph, which is not a gutter marker", () => {
    let glyph!: ImmutableTypedTextNode;
    const { editor } = createBasicTestEnvironment(undefined, () => {
      glyph = $createImmutableTypedTextNode("marker", `\\li2${NBSP}`);
      $getRoot().append($createParaNode("li2").append(glyph, $createTextNode("text")));
    });

    selectNodes(editor, glyph);

    expect(selectedParaMarkerKey(editor)).toBeUndefined();
  });

  it("ignores a book's gutter marker — the \\id line has no paragraph to retag", () => {
    let glyph!: ImmutableTypedTextNode;
    const { editor } = createBasicTestEnvironment(undefined, () => {
      glyph = $createGutterMarkerNode(`\\id${NBSP}`);
      $getRoot().append($createBookNode("GEN").append(glyph, $createTextNode("Test Book")));
    });

    selectNodes(editor, glyph);

    expect(selectedParaMarkerKey(editor)).toBeUndefined();
  });

  it("ignores a table cell's gutter marker", () => {
    let glyph!: ImmutableTypedTextNode;
    const { editor } = createBasicTestEnvironment(undefined, () => {
      glyph = $createGutterMarkerNode(`\\tc1${NBSP}`);
      $getRoot().append(
        $createImmutableTableNode().append(
          $createImmutableTableRowNode("tr").append(
            $createImmutableTableCellNode("tc1").append(glyph, $createTextNode("cell")),
          ),
        ),
      );
    });

    selectNodes(editor, glyph);

    expect(selectedParaMarkerKey(editor)).toBeUndefined();
  });

  it("ignores a node selection holding more than one node", () => {
    let first!: ImmutableTypedTextNode;
    let second!: ImmutableTypedTextNode;
    const { editor } = createBasicTestEnvironment(undefined, () => {
      first = $createGutterMarkerNode(`\\p${NBSP}`);
      second = $createGutterMarkerNode(`\\q1${NBSP}`);
      $getRoot().append(
        $createParaNode("p").append(first, $createTextNode("one")),
        $createParaNode("q1").append(second, $createTextNode("two")),
      );
    });

    selectNodes(editor, first, second);

    expect(selectedParaMarkerKey(editor)).toBeUndefined();
  });

  it("ignores a range selection and an absent selection", () => {
    let content!: TextNode;
    const { editor } = createBasicTestEnvironment(undefined, () => {
      content = $createTextNode("text");
      $getRoot().append(
        $createParaNode("li2").append($createGutterMarkerNode(`\\li2${NBSP}`), content),
      );
    });

    editor.update(() => content.select(0, 0), { discrete: true });
    expect(selectedParaMarkerKey(editor)).toBeUndefined();

    editor.update(() => $setSelection(null), { discrete: true });
    expect(selectedParaMarkerKey(editor)).toBeUndefined();
  });
});

describe("$selectParaMarker", () => {
  it("replaces the selection with a node selection of exactly the glyph", () => {
    let glyph!: ImmutableTypedTextNode;
    let content!: TextNode;
    const { editor } = createBasicTestEnvironment(undefined, () => {
      glyph = $createGutterMarkerNode(`\\li2${NBSP}`);
      content = $createTextNode("text");
      $getRoot().append($createParaNode("li2").append(glyph, content));
    });
    registerParaMarkerSelectionOwner(editor);
    editor.update(() => content.select(2, 2), { discrete: true });

    let isSelected = false;
    editor.update(() => (isSelected = $selectParaMarker(glyph)), { discrete: true });

    expect(isSelected).toBe(true);
    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isNodeSelection(selection)) throw new Error("expected a node selection");
      expect(selection.getNodes().map((node) => node.getKey())).toEqual([glyph.getKey()]);
    });
  });

  // The single gate for creating a marker selection: without an owner nothing handles the keys
  // that reach it, and a read-only editor has nothing to change the marker to.
  it.each([
    ["no owner is registered", { isOwned: false, isEditable: true, isHidden: false }],
    ["the editor is read-only", { isOwned: true, isEditable: false, isHidden: false }],
    [
      "the paragraph is inside a hidden construct",
      { isOwned: true, isEditable: true, isHidden: true },
    ],
  ])("refuses, changing nothing, when %s", (_name, { isOwned, isEditable, isHidden }) => {
    let glyph!: ImmutableTypedTextNode;
    let content!: TextNode;
    const { editor } = createBasicTestEnvironment(undefined, () => {
      glyph = $createGutterMarkerNode(`\\li2${NBSP}`);
      content = $createTextNode("text");
      const para = $createParaNode("li2");
      $getRoot().append(
        isHidden
          ? $createUnknownNode("sidebar", "esb").append(para.append(glyph, content))
          : para.append(glyph, content),
      );
    });
    if (isOwned) registerParaMarkerSelectionOwner(editor);
    editor.update(() => content.select(2, 2), { discrete: true });
    editor.setEditable(isEditable);

    let isSelected = true;
    editor.update(() => (isSelected = $selectParaMarker(glyph)), { discrete: true });

    expect(isSelected).toBe(false);
    editor.getEditorState().read(() => {
      expect($isRangeSelection($getSelection())).toBe(true);
    });
  });
});

describe("$getSelectableParaMarker", () => {
  it("returns a paragraph's leading gutter marker", () => {
    let para!: ParaNode;
    let glyph!: ImmutableTypedTextNode;
    const { editor } = createBasicTestEnvironment(undefined, () => {
      para = $createParaNode("q1");
      glyph = $createGutterMarkerNode(`\\q1${NBSP}`);
      $getRoot().append(para.append(glyph, $createTextNode("text")));
    });

    editor.getEditorState().read(() => {
      expect($getSelectableParaMarker(para)?.getKey()).toBe(glyph.getKey());
    });
  });

  it("returns undefined for a paragraph without a gutter marker, a book, and nothing", () => {
    let inlinePara!: ParaNode;
    let barePara!: ParaNode;
    let book!: BookNode;
    const { editor } = createBasicTestEnvironment(undefined, () => {
      inlinePara = $createParaNode("q1");
      barePara = $createParaNode("p");
      book = $createBookNode("GEN");
      $getRoot().append(
        book.append($createGutterMarkerNode(`\\id${NBSP}`), $createTextNode("Test Book")),
        inlinePara.append(
          $createImmutableTypedTextNode("marker", `\\q1${NBSP}`),
          $createTextNode("inline"),
        ),
        barePara.append($createTextNode("bare")),
      );
    });

    editor.getEditorState().read(() => {
      expect($getSelectableParaMarker(inlinePara)).toBeUndefined();
      expect($getSelectableParaMarker(barePara)).toBeUndefined();
      expect($getSelectableParaMarker(book)).toBeUndefined();
      expect($getSelectableParaMarker(undefined)).toBeUndefined();
    });
  });
});

describe("isSerializedSynthesizedMarkerNode", () => {
  it("recognizes a serialized MarkerNode", () => {
    const { editor } = createBasicTestEnvironment(undefined, () => {
      $getRoot().append($createParaNode("p").append($createMarkerNode("p")));
    });
    const serialized = editor.getEditorState().toJSON();
    const para = serialized.root.children[0] as SerializedElementNode;

    expect(isSerializedSynthesizedMarkerNode(para.children[0])).toBe(true);
  });

  it("recognizes a marker-typed serialized ImmutableTypedTextNode", () => {
    const { editor } = createBasicTestEnvironment(undefined, () => {
      $getRoot().append($createParaNode("p").append($createGutterMarkerNode("\\p ")));
    });
    const serialized = editor.getEditorState().toJSON();
    const para = serialized.root.children[0] as SerializedElementNode;

    expect(isSerializedSynthesizedMarkerNode(para.children[0])).toBe(true);
  });

  it("does not flag plain text", () => {
    const { editor } = createBasicTestEnvironment(undefined, () => {
      $getRoot().append($createParaNode("p").append($createTextNode("word")));
    });
    const serialized = editor.getEditorState().toJSON();
    const para = serialized.root.children[0] as SerializedElementNode;

    expect(isSerializedSynthesizedMarkerNode(para.children[0])).toBe(false);
  });
});
