import { $createGutterMarkerNode } from "../features/ImmutableTypedTextNode.js";
import { $createMarkerNode } from "../features/MarkerNode.js";
import { textTypeState } from "../collab/delta.state.js";
import { $createCharNode } from "./CharNode.js";
import {
  $getNoteCallerPreviewText,
  getPreviewTextFromSerializedNodes,
  isSerializedSynthesizedMarkerNode,
} from "./node.utils.js";
import { $createParaNode } from "./ParaNode.js";
import { usjBaseNodes } from "./index.js";
import { createBasicTestEnvironment } from "./test.utils.js";
import { $createTypedMarkNode, TypedMarkNode } from "../features/TypedMarkNode.js";
import { NBSP } from "./node-constants.js";
import {
  $createTextNode,
  $getRoot,
  $isElementNode,
  $setState,
  LexicalNode,
  SerializedElementNode,
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
