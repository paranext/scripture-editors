import { $createCharNode, CharNode } from "./CharNode.js";
import { $syncOpenerSeparators } from "./markerSeparators.utils.js";
import { $isMarkerTrailingSeparator, $isPresentationNbsp } from "./node.utils.js";
import { NBSP } from "./node-constants.js";
import { $createParaNode } from "./ParaNode.js";
import { createBasicTestEnvironment } from "./test.utils.js";
import { $createMarkerNode } from "../features/MarkerNode.js";
import { $createTextNode, $getRoot, TextNode } from "lexical";
import { describe, expect, it } from "vitest";

describe("$syncOpenerSeparators", () => {
  it("inserts a tagged token-mode spacer between an opener and a nested char span", () => {
    const { editor } = createBasicTestEnvironment();
    let outer!: CharNode;
    editor.update(
      () => {
        outer = $createCharNode("nd");
        $getRoot().append(
          $createParaNode("p").append(
            outer.append(
              $createMarkerNode("nd", "opening"),
              $createCharNode("wj").append($createTextNode("inner")),
              $createMarkerNode("nd", "closing"),
            ),
          ),
        );
      },
      { discrete: true },
    );

    editor.update(() => $syncOpenerSeparators(outer), { discrete: true });

    editor.getEditorState().read(() => {
      const spacer = outer.getChildAtIndex(1);
      expect(spacer).toBeInstanceOf(TextNode);
      expect(spacer?.getTextContent()).toBe(NBSP);
      expect($isMarkerTrailingSeparator(spacer)).toBe(true);
      expect($isPresentationNbsp(spacer)).toBe(true);
      expect((spacer as TextNode).getMode()).toBe("token");
    });
  });
});
