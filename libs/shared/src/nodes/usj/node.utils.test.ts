import {
  $createGutterMarkerNode,
  $createImmutableTypedTextNode,
  ImmutableTypedTextNode,
} from "../features/ImmutableTypedTextNode.js";
import { $createMarkerNode } from "../features/MarkerNode.js";
import { textTypeState } from "../collab/delta.state.js";
import { $createBookNode, BookNode } from "./BookNode.js";
import { $createCharNode } from "./CharNode.js";
import { $createImmutableTableCellNode } from "./ImmutableTableCellNode.js";
import { $createImmutableTableNode } from "./ImmutableTableNode.js";
import { $createImmutableTableRowNode } from "./ImmutableTableRowNode.js";
import { NBSP } from "./node-constants.js";
import {
  $getSelectableParaMarker,
  $getSelectedParaMarker,
  $selectParaMarker,
  getPreviewTextFromSerializedNodes,
} from "./node.utils.js";
import { $createParaNode, ParaNode } from "./ParaNode.js";
import { createBasicTestEnvironment } from "./test.utils.js";
import {
  $createNodeSelection,
  $createTextNode,
  $getRoot,
  $getSelection,
  $isNodeSelection,
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
    editor.update(() => content.select(2, 2), { discrete: true });

    editor.update(() => $selectParaMarker(glyph), { discrete: true });

    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isNodeSelection(selection)) throw new Error("expected a node selection");
      expect(selection.getNodes().map((node) => node.getKey())).toEqual([glyph.getKey()]);
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
