// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { createBasicTestEnvironment } from "../../../../../libs/shared/src/nodes/usj/test.utils";
import {
  $commentIdsAt,
  $removeCommentAnnotation,
  $selectFirstCommentCarrier,
} from "./commentAnnotations.utils";
import {
  $createRangeSelection,
  $createTextNode,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $setState,
  TextNode,
} from "lexical";
import {
  $addDisplayAnnotation,
  $createParaNode,
  $displayAnnotationsOf,
  $isTypedMarkNode,
  $wrapSelectionInTypedMarkNode,
  COMMENT_MARK_TYPE,
  textTypeState,
  TypedMarkNode,
  usjBaseNodes,
} from "shared";
import { $createImmutableVerseNode, ImmutableVerseNode } from "shared-react";

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

describe("$selectFirstCommentCarrier", () => {
  it("selects the start of a text carrier's holdable range, past its leading separator", () => {
    const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
    let run!: TextNode;
    editor.update(
      () => {
        run = $setState($createTextNode(" grace"), textTypeState, "attribute");
        $getRoot().append($createParaNode().append(run));
        $addDisplayAnnotation(run, COMMENT_MARK_TYPE, "c1", 0, run.getTextContentSize());
      },
      { discrete: true },
    );
    editor.update(
      () => {
        $selectFirstCommentCarrier([run.getKey()]);
      },
      { discrete: true },
    );
    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      expect(selection.isCollapsed()).toBe(true);
      expect(selection.anchor.type).toBe("text");
      expect(selection.anchor.key).toBe(run.getKey());
      expect(selection.anchor.offset).toBe(1);
    });
  });

  it("selects an element point in front of a decorator carrier, which has no text point", () => {
    const { editor } = createBasicTestEnvironment([
      ...usjBaseNodes,
      TypedMarkNode,
      ImmutableVerseNode,
    ]);
    let verse!: ImmutableVerseNode;
    editor.update(
      () => {
        verse = $createImmutableVerseNode("1");
        $getRoot().append($createParaNode().append(verse, $createTextNode("word")));
        $addDisplayAnnotation(verse, COMMENT_MARK_TYPE, "c1", 0, 0);
      },
      { discrete: true },
    );
    editor.update(
      () => {
        $selectFirstCommentCarrier([verse.getKey()]);
      },
      { discrete: true },
    );
    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      expect(selection.isCollapsed()).toBe(true);
      expect(selection.anchor.type).toBe("element");
      expect(selection.anchor.offset).toBe(verse.getLatest().getIndexWithinParent());
    });
  });

  it("picks the first carrier in document order, regardless of the order given", () => {
    const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
    let first!: TextNode;
    let second!: TextNode;
    editor.update(
      () => {
        first = $setState($createTextNode("|first"), textTypeState, "attribute");
        second = $setState($createTextNode("|second"), textTypeState, "attribute");
        $getRoot().append($createParaNode().append(first, second));
        $addDisplayAnnotation(first, COMMENT_MARK_TYPE, "c1", 0, first.getTextContentSize());
        $addDisplayAnnotation(second, COMMENT_MARK_TYPE, "c1", 0, second.getTextContentSize());
      },
      { discrete: true },
    );
    editor.update(
      () => {
        $selectFirstCommentCarrier([second.getKey(), first.getKey()]);
      },
      { discrete: true },
    );
    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      expect(selection.anchor.key).toBe(first.getKey());
    });
  });
});
