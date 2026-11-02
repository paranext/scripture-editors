import { ZWSP } from "./node-constants.js";
import { $createParaNode } from "./ParaNode.js";
import { createBasicTestEnvironment } from "./test.utils.js";
import {
  $createCaretHostNode,
  caretHostState,
  isSerializedCaretHost,
} from "./transientCaretHost.utils.js";
import {
  $createTextNode,
  $getRoot,
  $setState,
  NODE_STATE_KEY,
  SerializedTextNode,
  TextNode,
} from "lexical";
import { describe, expect, it } from "vitest";

/** Serializes the text node `$build` makes, through Lexical's own `exportJSON()`. */
function exportTextNode($build: () => TextNode): SerializedTextNode {
  const { editor } = createBasicTestEnvironment();
  let serialized!: SerializedTextNode;
  editor.update(
    () => {
      const node = $build();
      $getRoot().append($createParaNode().append(node));
      serialized = node.exportJSON();
    },
    { discrete: true },
  );
  return serialized;
}

describe("isSerializedCaretHost", () => {
  it.each([
    { name: "a bare host", $build: () => $createCaretHostNode(), expected: true },
    { name: "an unmarked zero-width space", $build: () => $createTextNode(ZWSP), expected: false },
    {
      name: "a host a second zero-width space was typed into",
      $build: () => $createCaretHostNode().setTextContent(ZWSP + ZWSP),
      expected: false,
    },
    {
      name: "a host other text landed in",
      $build: () => $createCaretHostNode().setTextContent(`${ZWSP}a`),
      expected: false,
    },
    {
      name: "a host whose mark was cleared",
      $build: () => $setState($createCaretHostNode(), caretHostState, false),
      expected: false,
    },
  ])("is $expected for $name", ({ $build, expected }) => {
    expect(isSerializedCaretHost(exportTextNode($build))).toBe(expected);
  });

  it("is false for a zero-width space with no node state at all", () => {
    const serialized = exportTextNode(() => $createTextNode(ZWSP));

    expect(serialized[NODE_STATE_KEY]).toBeUndefined();
    expect(isSerializedCaretHost(serialized)).toBe(false);
  });

  it("reads the mark from the key Lexical exports it under", () => {
    const serialized = exportTextNode(() => $createCaretHostNode());

    expect(serialized[NODE_STATE_KEY]).toEqual({ [caretHostState.key]: true });
  });
});

describe("caretHostState", () => {
  it.each([
    {
      name: "before",
      $build: () => [$createTextNode("alpha"), $createCaretHostNode()],
      texts: ["alpha", ZWSP],
    },
    {
      name: "after",
      $build: () => [$createCaretHostNode(), $createTextNode("alpha")],
      texts: [ZWSP, "alpha"],
    },
  ])("keeps unmarked text $name a host from merging with it", ({ $build, texts }) => {
    const { editor } = createBasicTestEnvironment(undefined, () => {
      $getRoot().append($createParaNode().append(...$build()));
    });

    editor.getEditorState().read(() => {
      expect(
        $getRoot()
          .getAllTextNodes()
          .map((node) => node.getTextContent()),
      ).toEqual(texts);
    });
  });
});
