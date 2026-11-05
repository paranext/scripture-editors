import {
  $addDisplayAnnotation,
  registerDisplayAnnotationBasis,
} from "../features/displayAnnotations.utils.js";
import { $pieces } from "../features/displayPieces.state.js";
import { getVisibleOpenMarkerText } from "./node.utils.js";
import { $createParaNode } from "./ParaNode.js";
import { createBasicTestEnvironment } from "./test.utils.js";
import { $createVerseNode, VerseNode } from "./VerseNode.js";
import { $getRoot } from "lexical";
import { describe, expect, it } from "vitest";

describe("VerseNode cut into pieces", () => {
  it("gives every piece the fields set on any one of them", () => {
    const { editor } = createBasicTestEnvironment();
    registerDisplayAnnotationBasis(editor);
    let verse!: VerseNode;
    editor.update(
      () => {
        verse = $createVerseNode("12", getVisibleOpenMarkerText("v", "12"), "GEN 1:12");
        $getRoot().append($createParaNode().append(verse));
        $addDisplayAnnotation(verse, "check", "a", 3, 4);
      },
      { discrete: true },
    );
    editor.update(
      () => {
        const [head, middle, last] = $pieces(verse);
        head.setNumber("13");
        middle.setSid("GEN 1:13");
        last.setAltnumber("2");
        head.setPubnumber("B");
        middle.setUnknownAttributes({ x: "y" });
      },
      { discrete: true },
    );
    editor.getEditorState().read(() => {
      const fields = $pieces(verse).map((piece) => [
        piece.getNumber(),
        piece.getSid(),
        piece.getAltnumber(),
        piece.getPubnumber(),
        piece.getUnknownAttributes(),
      ]);
      expect(fields.length).toBe(3);
      for (const field of fields) expect(field).toEqual(["13", "GEN 1:13", "2", "B", { x: "y" }]);
    });
  });
});
