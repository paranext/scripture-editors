import { $createTextNode, $getRoot, LexicalNode, TextNode } from "lexical";
import { describe, expect, it } from "vitest";
import { $createImpliedParaNode, $isImpliedParaNode } from "./ImpliedParaNode.js";
import { $isParaNode } from "./ParaNode.js";
import { createBasicTestEnvironment } from "./test.utils.js";

/** Each top-level line as `marker: text`, `implied` for a line with no marker. */
function $lines(): string[] {
  return $getRoot()
    .getChildren()
    .map((line: LexicalNode) => {
      const kind = $isImpliedParaNode(line)
        ? "implied"
        : $isParaNode(line)
          ? line.getMarker()
          : line.getType();
      return `${kind}: ${line.getTextContent()}`;
    });
}

describe("ImpliedParaNode.insertNewAfter", () => {
  it.each<[string, number, string[]]>([
    ["the middle", 1, ["implied: a", "p: b"]],
    ["the start", 0, ["implied: ", "p: ab"]],
    ["the end", 2, ["implied: ab", "p: "]],
  ])(
    "split at %s of a line with no marker, puts a `\\p` paragraph after it",
    (_where, offset, expected) => {
      let text: TextNode | undefined;
      const { editor } = createBasicTestEnvironment(undefined, () => {
        text = $createTextNode("ab");
        $getRoot().append($createImpliedParaNode().append(text));
      });

      editor.update(() => text?.select(offset, offset).insertParagraph(), { discrete: true });

      expect(editor.read($lines)).toEqual(expected);
    },
  );
});
