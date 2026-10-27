/**
 * Two adjacent char spans of one marker are two spans: two `\w` words, each with its own `lemma`,
 * or two `\nd` names. Paratext never joins them, and neither may the editor when content holding
 * them arrives as ops, in any view a user edits Scripture in.
 */
import { EDITING_VIEWS, editorView, mountInView, MountedEditor } from "./editorViews.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, $isElementNode, $isTextNode, LexicalNode, TextNode } from "lexical";
import { $getOTPositionOfNode } from "shared-react";
import { describe, expect, it } from "vitest";

function doc(content: MarkerContent[]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
      { type: "chapter", marker: "c", number: "1" },
      {
        type: "para",
        marker: "p",
        content: [{ type: "verse", marker: "v", number: "1" }, "pre ", ...content, " post"],
      },
    ],
  };
}

function char(
  marker: string,
  text: string,
  attributes: { [name: string]: string } = {},
): MarkerObject {
  return { type: "char", marker, ...attributes, content: [text] } as MarkerObject;
}

/** The char spans of the document's one paragraph. */
function spansOf(mounted: MountedEditor): MarkerContent[] {
  const para = mounted.ref.current?.getUsj()?.content[2];
  if (typeof para !== "object") throw new Error("no paragraph");
  return (para.content ?? []).filter((item) => typeof item === "object" && item.type === "char");
}

/** The one plain text node whose text holds `text`. */
function $textNodeHolding(text: string): TextNode {
  const hits: TextNode[] = [];
  const walk = (node: LexicalNode) => {
    if ($isTextNode(node) && node.getType() === "text" && node.getTextContent().includes(text))
      hits.push(node);
    if ($isElementNode(node)) node.getChildren().forEach(walk);
  };
  walk($getRoot());
  if (hits.length !== 1) throw new Error(`"${text}" is in ${hits.length} text nodes, not one`);
  return hits[0];
}

describe("applying ops for a span right before a span of the same marker", () => {
  describe.each(EDITING_VIEWS)("in $name view", ({ name: view }) => {
    it.each([
      ["a span", { style: "w", lemma: "x" }, char("w", "a", { lemma: "x" })],
      [
        "a nested span",
        [{ style: "w", lemma: "x" }, { style: "nd" }],
        { type: "char", marker: "w", lemma: "x", content: [char("nd", "a")] } as MarkerObject,
      ],
    ])("keeps %s of another lemma apart", async (_, charAttribute, inserted) => {
      const mounted = await mountInView(doc([char("w", "b", { lemma: "y" })]), editorView(view));
      const position = mounted.lexical
        .getEditorState()
        .read(() => $getOTPositionOfNode($textNodeHolding("pre "), "apply"));
      if (position === undefined) throw new Error("no position for the text before the span");

      act(() =>
        mounted.ref.current?.applyUpdate([
          { retain: position + "pre ".length },
          { insert: "a", attributes: { char: charAttribute } },
        ]),
      );

      expect(spansOf(mounted)).toEqual([inserted, char("w", "b", { lemma: "y" })]);
    });
  });
});
