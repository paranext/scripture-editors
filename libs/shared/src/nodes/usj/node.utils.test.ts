import { $createGutterMarkerNode } from "../features/ImmutableTypedTextNode.js";
import { $createMarkerNode } from "../features/MarkerNode.js";
import { textTypeState } from "../collab/delta.state.js";
import { $createCharNode } from "./CharNode.js";
import {
  getPreviewTextFromSerializedNodes,
  isSerializedSynthesizedMarkerNode,
} from "./node.utils.js";
import { $createParaNode } from "./ParaNode.js";
import { createBasicTestEnvironment } from "./test.utils.js";
import { $createTextNode, $getRoot, $setState, SerializedElementNode } from "lexical";
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
