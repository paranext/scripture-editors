import { setDecoratorPaint } from "../features/decoratorPaint.js";
import { $createImmutableChapterNode, $isImmutableChapterNode } from "./ImmutableChapterNode.js";
import { createBasicTestEnvironment } from "./test.utils.js";
import { $getNodeByKey, $getRoot } from "lexical";
import { describe, expect, it } from "vitest";

describe("ImmutableChapterNode exportDOM", () => {
  it("writes the glyph as plain text however the live element is painted", () => {
    let key = "";
    const { editor } = createBasicTestEnvironment(undefined, () => {
      const chapter = $createImmutableChapterNode("1", true);
      key = chapter.getKey();
      $getRoot().append(chapter);
    });
    setDecoratorPaint(editor, key, [
      { start: 0, end: 2, classNames: ["painted-class"], annotationKeys: ["a"] },
    ]);

    const { element: exported, text } = editor.getEditorState().read(() => {
      const node = $getNodeByKey(key);
      if (!$isImmutableChapterNode(node)) throw new Error("no chapter");
      return {
        element: node.exportDOM(editor).element as HTMLElement,
        text: node.getRenderedText(),
      };
    });

    expect(exported.querySelector(".painted-class")).toBeNull();
    expect(exported.hasAttribute("data-painted")).toBe(false);
    expect(exported.textContent).toBe(text);
  });
});
