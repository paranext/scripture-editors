import { $createTypedMarkNode, TypedMarkNode } from "../features/TypedMarkNode.js";
import { $createCharNode } from "./CharNode.js";
import { usjBaseNodes } from "./index.js";
import { $leafBesideThroughMarks } from "./logicalParent.utils.js";
import { $createParaNode } from "./ParaNode.js";
import { createBasicTestEnvironment } from "./test.utils.js";
import { $createTextNode, $getRoot, LexicalEditor, LexicalNode } from "lexical";

function mount(): LexicalEditor {
  return createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]).editor;
}

const $mark = () => $createTypedMarkNode({ test: ["1"] });

/** Every leaf reached from `start` stepping to `side` until `null`, as its text. */
function $walk(start: LexicalNode, side: "previous" | "next"): string[] {
  const out: string[] = [];
  for (
    let leaf = $leafBesideThroughMarks(start, side);
    leaf;
    leaf = $leafBesideThroughMarks(leaf, side)
  )
    out.push(leaf.getTextContent());
  return out;
}

describe("$leafBesideThroughMarks", () => {
  it("reads text a mark cuts as the one run it is without the mark", () => {
    const editor = mount();
    editor.update(
      () => {
        // `In the beginning` with `I` and `e b` marked, and an empty mark between.
        const first = $createTextNode("I");
        const middle = $createTextNode("n th");
        const last = $createTextNode("eginning");
        $getRoot().append(
          $createParaNode().append(
            $mark().append(first),
            middle,
            $mark(),
            $mark().append($mark().append($createTextNode("e ")), $createTextNode("b")),
            last,
          ),
        );
        expect($walk(first, "next")).toEqual(["n th", "e ", "b", "eginning"]);
        expect($walk(last, "previous")).toEqual(["b", "e ", "n th", "I"]);
      },
      { discrete: true },
    );
  });

  it("stops at the edge of the element the marks sit in", () => {
    const editor = mount();
    editor.update(
      () => {
        const inner = $createTextNode("grace");
        const before = $createTextNode("In the ");
        $getRoot().append(
          $createParaNode().append(
            before,
            $createCharNode("w").append($mark().append(inner)),
            $createTextNode(" of God"),
          ),
        );
        expect($leafBesideThroughMarks(inner, "previous")).toBeNull();
        expect($leafBesideThroughMarks(inner, "next")).toBeNull();
        expect($leafBesideThroughMarks(before, "next")?.getType()).toBe("char");
      },
      { discrete: true },
    );
  });
});
