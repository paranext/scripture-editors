import { ParaNodePlugin } from "./ParaNodePlugin";
import { baseTestEnvironment, pressEnterAtSelection, sutUpdate } from "./react-test.utils";
import { $deletePara, DeleteIntent } from "./structureKeyboard.utils";
import {
  $createRangeSelection,
  $createTextNode,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $setSelection,
  LexicalEditor,
  TextNode,
} from "lexical";
import {
  $createGutterMarkerNode,
  $createTypedMarkNode,
  $createImmutableChapterNode,
  $createParaNode,
  $isImmutableChapterNode,
  $isParaNode,
  markApplyingUpdate,
  ParaNode,
} from "shared";

let firstVerseTextNode: TextNode;

function $defaultInitialEditorState() {
  const secondVerseTextNode = $createTextNode("second verse text ");
  firstVerseTextNode = $createTextNode("first verse text ");
  $getRoot().append(
    $createImmutableChapterNode("1"),
    $createParaNode().append(firstVerseTextNode),
    $createParaNode().append(secondVerseTextNode),
  );
}

describe("ParaNodePlugin", () => {
  it("should load default initialEditorState (sanity check)", async () => {
    const { editor } = await testEnvironment();

    editor.getEditorState().read(() => {
      const root = $getRoot();
      const children = root.getChildren();
      expect(root.getTextContent()).toBe("first verse text \n\nsecond verse text ");
      expect(children.length).toBe(3);
      if (!$isImmutableChapterNode(children[0]))
        throw new Error("First item is not an ImmutableChapterNode");
      if (!$isParaNode(children[1])) throw new Error("First child after chapter is not a ParaNode");
      expect(children[1].getChildrenSize()).toBe(1);
    });
  });

  it("should insert ParaNode without leading space", async () => {
    const { editor } = await testEnvironment();

    await pressEnterAtSelection(editor, firstVerseTextNode, 6);

    editor.getEditorState().read(() => {
      const root = $getRoot();
      const children = root.getChildren();
      expect(children.length).toBe(4);
      const firstPara = children[1];
      if (!$isParaNode(firstPara)) throw new Error("First child after chapter is not a ParaNode");
      expect(firstPara.getTextContent()).toBe("first ");
      const secondPara = children[2];
      if (!$isParaNode(secondPara)) throw new Error("Second child after chapter is not a ParaNode");
      expect(secondPara.getTextContent()).toBe("verse text ");
    });
  });

  it("should insert ParaNode with leading space and remove it", async () => {
    const { editor } = await testEnvironment();

    await pressEnterAtSelection(editor, firstVerseTextNode, 5);

    editor.getEditorState().read(() => {
      const root = $getRoot();
      const children = root.getChildren();
      expect(children.length).toBe(4);
      const firstPara = children[1];
      if (!$isParaNode(firstPara)) throw new Error("First child after chapter is not a ParaNode");
      expect(firstPara.getTextContent()).toBe("first");
      const secondPara = children[2];
      if (!$isParaNode(secondPara)) throw new Error("Second child after chapter is not a ParaNode");
      expect(secondPara.getTextContent()).toBe("verse text ");
    });
  });

  it("should remove the leading space past a gutter marker glyph", async () => {
    const { editor } = await testEnvironment();

    await sutUpdate(editor, () => {
      $getRoot().append(
        $createParaNode("q1").append($createGutterMarkerNode("\\q1 "), $createTextNode(" text")),
      );
    });

    editor.getEditorState().read(() => {
      expect($getRoot().getLastChild()?.getTextContent()).toBe("\\q1 text");
    });
  });

  // A mark holding the new paragraph's first text is presentation: the space goes as it goes with
  // no mark.
  it.each([
    ["holds the space and the text after it", [" God"], " b"],
    ["holds only the space", [" "], "God b"],
  ])("should remove the leading space a mark %s", async (_, held, after) => {
    const { editor } = await testEnvironment();

    await sutUpdate(editor, () => {
      $getRoot().append(
        $createParaNode("p").append(
          $createTypedMarkNode({ spelling: ["s1"] }).append(
            ...held.map((text) => $createTextNode(text)),
          ),
          $createTextNode(after),
        ),
      );
    });

    editor.getEditorState().read(() => {
      expect($getRoot().getLastChild()?.getTextContent()).toBe("God b");
    });
  });

  it("should keep the leading space of a ParaNode an applied update creates", async () => {
    const { editor } = await testEnvironment();

    await sutUpdate(editor, () => {
      markApplyingUpdate(editor, "remote");
      $getRoot().append($createParaNode().append($createTextNode(" text")));
    });
    markApplyingUpdate(editor, undefined);

    editor.getEditorState().read(() => {
      expect($getRoot().getLastChild()?.getTextContent()).toBe(" text");
    });
  });

  describe("a blank line followed by a paragraph that goes away", () => {
    let blank: ParaNode;
    let following: ParaNode;
    let content: TextNode;

    function $blankLineThenParagraphs() {
      content = $createTextNode("more");
      blank = $createParaNode("b");
      following = $createParaNode("q1");
      $getRoot().append(
        $createImmutableChapterNode("1"),
        blank.append($createGutterMarkerNode("\\b ")),
        following.append($createGutterMarkerNode("\\q1 "), content),
        $createParaNode("p").append($createTextNode("last")),
      );
    }

    async function markers(editor: LexicalEditor): Promise<string[]> {
      return editor.getEditorState().read(() =>
        $getRoot()
          .getChildren()
          .filter($isParaNode)
          .map((para) => para.getMarker()),
      );
    }

    it("keeps the blank line when an applied update removes a paragraph with content", async () => {
      const { editor } = await testEnvironment($blankLineThenParagraphs);

      await sutUpdate(editor, () => {
        markApplyingUpdate(editor, "remote");
        following.remove();
      });
      markApplyingUpdate(editor, undefined);

      expect(await markers(editor)).toEqual(["b", "p"]);
    });

    it("keeps the blank line when an applied update removes an empty paragraph", async () => {
      const { editor } = await testEnvironment(() => {
        $blankLineThenParagraphs();
        content.remove();
      });

      await sutUpdate(editor, () => {
        markApplyingUpdate(editor, "remote");
        following.remove();
      });
      markApplyingUpdate(editor, undefined);

      expect(await markers(editor)).toEqual(["b", "p"]);
    });

    it("takes the paragraph's marker when its content moves into the blank line", async () => {
      const { editor } = await testEnvironment($blankLineThenParagraphs);

      await sutUpdate(editor, () => {
        blank.append(content);
        following.remove();
      });

      expect(await markers(editor)).toEqual(["q1", "p"]);
    });

    it("keeps the blank line when an empty paragraph after it is removed by an edit", async () => {
      const { editor } = await testEnvironment(() => {
        $blankLineThenParagraphs();
        content.remove();
      });

      await sutUpdate(editor, () => {
        following.remove();
      });

      expect(await markers(editor)).toEqual(["b", "p"]);
    });

    it.each<DeleteIntent>(["deleteForward", "deleteBackward"])(
      "keeps the blank line when a paragraph delete (%s) removes the empty paragraph after it",
      async (intent) => {
        const { editor } = await testEnvironment(() => {
          $blankLineThenParagraphs();
          content.remove();
        });

        await sutUpdate(editor, () => {
          $deletePara(following, intent);
        });

        expect(await markers(editor)).toEqual(["b", "p"]);
      },
    );

    it("takes the surviving paragraph's marker when a range across the break is typed over", async () => {
      const { editor } = await testEnvironment($blankLineThenParagraphs);

      await sutUpdate(editor, () => {
        const selection = $createRangeSelection();
        selection.anchor.set(blank.getKey(), 0, "element");
        selection.focus.set(content.getKey(), 2, "text");
        $setSelection(selection);
      });
      await sutUpdate(editor, () => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) selection.insertText("x");
      });

      expect(await markers(editor)).toEqual(["q1", "p"]);
    });
  });
});

async function testEnvironment($initialEditorState: () => void = $defaultInitialEditorState) {
  return baseTestEnvironment($initialEditorState, <ParaNodePlugin />);
}
