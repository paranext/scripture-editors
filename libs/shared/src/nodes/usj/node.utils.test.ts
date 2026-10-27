import { $createMarkerNode } from "../features/MarkerNode.js";
import { textTypeState } from "../collab/delta.state.js";
import { $createCharNode } from "./CharNode.js";
import {
  $createEmptyCharPlaceholder,
  $createMarkerTrailingSeparator,
  $isMarkerTrailingSeparator,
  $isPresentationNbsp,
  $markEmptyCharPlaceholder,
  $markPresentationSpacer,
  getPreviewTextFromSerializedNodes,
  isSerializedPresentationNbsp,
} from "./node.utils.js";
import { NBSP } from "./node-constants.js";
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

describe("presentation NBSP tags", () => {
  function inEditor(fn: () => void) {
    const { editor } = createBasicTestEnvironment();
    editor.update(fn, { discrete: true });
  }

  it("recognizes the marker-trailing separator", () => {
    inEditor(() => {
      expect($isPresentationNbsp($createMarkerTrailingSeparator())).toBe(true);
    });
  });

  it("recognizes the empty-char placeholder and keeps it in normal mode", () => {
    inEditor(() => {
      const placeholder = $createEmptyCharPlaceholder();
      expect($isPresentationNbsp(placeholder)).toBe(true);
      expect(placeholder.getMode()).toBe("normal");
    });
  });

  it("treats an untagged NBSP node as content", () => {
    inEditor(() => {
      expect($isPresentationNbsp($createTextNode(NBSP))).toBe(false);
    });
  });

  it("treats a placeholder that was typed into as content", () => {
    inEditor(() => {
      const placeholder = $createEmptyCharPlaceholder();
      placeholder.setTextContent(NBSP + "a");
      expect($isPresentationNbsp(placeholder)).toBe(false);
    });
  });

  it("agrees between the live and serialized predicates", () => {
    inEditor(() => {
      const typedInto = $createEmptyCharPlaceholder();
      typedInto.setTextContent(NBSP + "a");
      const nodes = [
        $createMarkerTrailingSeparator(),
        $createEmptyCharPlaceholder(),
        $createTextNode(NBSP),
        typedInto,
      ];
      expect(nodes.map((node) => isSerializedPresentationNbsp(node.exportJSON()))).toEqual(
        nodes.map((node) => $isPresentationNbsp(node)),
      );
      expect(nodes.map((node) => $isPresentationNbsp(node))).toEqual([true, true, false, false]);
    });
  });

  it("marks an existing node as a presentation spacer in token mode", () => {
    inEditor(() => {
      const node = $createTextNode(NBSP);
      $markPresentationSpacer(node);
      expect(node.getMode()).toBe("token");
      expect($isMarkerTrailingSeparator(node)).toBe(true);
    });
  });

  it("marks an existing node as an empty-char placeholder", () => {
    inEditor(() => {
      const node = $createTextNode(NBSP);
      $markEmptyCharPlaceholder(node);
      expect(node.getMode()).toBe("normal");
      expect($isPresentationNbsp(node)).toBe(true);
    });
  });
});
