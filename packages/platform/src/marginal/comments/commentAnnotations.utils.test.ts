// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { createBasicTestEnvironment } from "../../../../../libs/shared/src/nodes/usj/test.utils";
import { $commentIdsAt, $removeCommentAnnotation } from "./commentAnnotations.utils";
import { $createRangeSelection, $createTextNode, $getRoot, $setState, TextNode } from "lexical";
import {
  $createParaNode,
  $displayAnnotationsOf,
  $isTypedMarkNode,
  $wrapSelectionInTypedMarkNode,
  COMMENT_MARK_TYPE,
  textTypeState,
  TypedMarkNode,
  usjBaseNodes,
} from "shared";

describe("comments held on display bytes", () => {
  function setup() {
    const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
    let word!: TextNode;
    let run!: TextNode;
    editor.update(
      () => {
        word = $createTextNode("grace");
        run = $setState($createTextNode("|grace"), textTypeState, "attribute");
        $getRoot().append($createParaNode().append(word, run));
        const selection = $createRangeSelection();
        selection.anchor.set(word.getKey(), 2, "text");
        selection.focus.set(run.getKey(), 3, "text");
        $wrapSelectionInTypedMarkNode(selection, COMMENT_MARK_TYPE, "c1");
      },
      { discrete: true },
    );
    return { editor, word, run };
  }

  it("names the comment at a caret inside its mark and inside its display bytes", () => {
    const { editor, run } = setup();
    editor.getEditorState().read(() => {
      expect($commentIdsAt(run.getLatest(), 2)).toEqual(["c1"]);
      const markText = $getRoot()
        .getAllTextNodes()
        .find((node) => $isTypedMarkNode(node.getParent()));
      if (!markText) throw new Error("expected the comment's mark over the word");
      expect($commentIdsAt(markText, 1)).toEqual(["c1"]);
    });
  });

  it("removes the comment from its marks and its display bytes", () => {
    const { editor, run } = setup();
    editor.update(
      () => {
        const markKeys = $getRoot()
          .getAllTextNodes()
          .map((node) => node.getParent())
          .filter($isTypedMarkNode)
          .map((mark) => mark.getKey());
        $removeCommentAnnotation("c1", markKeys, [run.getKey()]);
      },
      { discrete: true },
    );
    editor.getEditorState().read(() => {
      expect(
        $getRoot()
          .getAllTextNodes()
          .some((node) => $isTypedMarkNode(node.getParent())),
      ).toBe(false);
      expect($displayAnnotationsOf(run.getLatest())).toEqual([]);
    });
  });
});
