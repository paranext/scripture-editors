// Should only be used on nodes that are initialized in the test environment.
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { baseTestEnvironment, sutUpdate, updateSelection } from "./react-test.utils";
import {
  $hiddenContentItems,
  $hiddenNodesInSelection,
  $hiddenNodesToParaEdge,
  $hiddenRunAtCaret,
  $placeCaretPastHiddenRun,
  DeleteDirection,
  HiddenRun,
} from "./hiddenContentDelete.utils";
import {
  $createTextNode,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  LexicalEditor,
  TextNode,
} from "lexical";
import {
  $createCharNode,
  $createImmutableTypedTextNode,
  $createNoteNode,
  $createParaNode,
  $createUnknownNode,
  ParaNode,
  UnknownNode,
} from "shared";

/** A hidden `\fig`, its caption token-mode text as the editor loads it. */
function $createFigureNode(caption = "caption"): UnknownNode {
  return $createUnknownNode("figure", "fig").append($createTextNode(caption).setMode("token"));
}

/** A hidden `\esb` sidebar holding one paragraph. */
function $createSidebarNode(text = "sidebar text"): UnknownNode {
  return $createUnknownNode("sidebar", "esb").append(
    $createParaNode("p").append($createTextNode(text)),
  );
}

function readRun(editor: LexicalEditor, direction: DeleteDirection): HiddenRun | undefined {
  return editor.getEditorState().read(() => $hiddenRunAtCaret($getSelection(), direction));
}

function readRunKeys(editor: LexicalEditor, direction: DeleteDirection) {
  const run = readRun(editor, direction);
  return run && { keys: run.nodes.map((node) => node.getKey()), placement: run.placement };
}

describe("$hiddenRunAtCaret", () => {
  it("finds a figure directly before the caret (Backspace)", async () => {
    let fig: UnknownNode;
    let after: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      fig = $createFigureNode();
      after = $createTextNode("after");
      $getRoot().append($createParaNode("p").append($createTextNode("before"), fig, after));
    });
    updateSelection(editor, after!, 0);

    expect(readRunKeys(editor, "backward")).toEqual({ keys: [fig!.getKey()], placement: "inline" });
    expect(readRun(editor, "forward")).toBeUndefined();
  });

  it("finds a figure directly after the caret (Delete)", async () => {
    let fig: UnknownNode;
    let before: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      fig = $createFigureNode();
      before = $createTextNode("before");
      $getRoot().append($createParaNode("p").append(before, fig, $createTextNode("after")));
    });
    updateSelection(editor, before!, "before".length);

    expect(readRunKeys(editor, "forward")).toEqual({ keys: [fig!.getKey()], placement: "inline" });
    expect(readRun(editor, "backward")).toBeUndefined();
  });

  it("ignores a figure that visible text separates from the caret", async () => {
    let after: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      after = $createTextNode("after");
      $getRoot().append(
        $createParaNode("p").append($createTextNode("before"), $createFigureNode(), after),
      );
    });
    updateSelection(editor, after!, 2);

    expect(readRun(editor, "backward")).toBeUndefined();
  });

  it("takes contiguous hidden constructs as one run, in document order", async () => {
    let fig1: UnknownNode;
    let fig2: UnknownNode;
    let after: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      fig1 = $createFigureNode("one");
      fig2 = $createFigureNode("two");
      after = $createTextNode("after");
      $getRoot().append(
        $createParaNode("p").append(
          $createTextNode("before"),
          fig1,
          $createTextNode(""),
          fig2,
          after,
        ),
      );
    });
    updateSelection(editor, after!, 0);

    expect(readRunKeys(editor, "backward")?.keys).toEqual([fig1!.getKey(), fig2!.getKey()]);
  });

  it("looks through a character style the caret sits at the edge of", async () => {
    let fig: UnknownNode;
    let styled: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      fig = $createFigureNode();
      styled = $createTextNode("styled");
      $getRoot().append(
        $createParaNode("p").append(
          $createTextNode("before"),
          fig,
          $createCharNode("nd").append(styled),
        ),
      );
    });
    updateSelection(editor, styled!, 0);

    expect(readRunKeys(editor, "backward")?.keys).toEqual([fig!.getKey()]);
  });

  it("finds a figure that ends a character style before the caret", async () => {
    let fig: UnknownNode;
    let after: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      fig = $createFigureNode();
      after = $createTextNode("after");
      $getRoot().append(
        $createParaNode("p").append($createCharNode("nd").append($createTextNode("x"), fig), after),
      );
    });
    updateSelection(editor, after!, 0);

    expect(readRunKeys(editor, "backward")?.keys).toEqual([fig!.getKey()]);
  });

  it("finds a figure from an element-point caret", async () => {
    let fig: UnknownNode;
    let para: ParaNode;
    const { editor } = await baseTestEnvironment(() => {
      fig = $createFigureNode();
      para = $createParaNode("p");
      $getRoot().append(para.append(fig));
    });
    updateSelection(editor, para!, 1);

    expect(readRunKeys(editor, "backward")?.keys).toEqual([fig!.getKey()]);
  });

  it("stops at what in a note lies between the caret and the note's edge", async () => {
    let noteText: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      noteText = $createTextNode("note text");
      $getRoot().append(
        $createParaNode("p").append(
          $createFigureNode(),
          $createNoteNode("f", "+").append($createTextNode("+ ").setMode("token"), noteText),
        ),
      );
    });
    updateSelection(editor, noteText!, 0);

    expect(readRun(editor, "backward")).toBeUndefined();
  });

  it("walks on out of an expanded note's far edge into its paragraph's neighbors", async () => {
    let sidebar: UnknownNode;
    let noteText: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      sidebar = $createSidebarNode();
      noteText = $createTextNode("note text");
      $getRoot().append(
        $createParaNode("p").append(
          $createTextNode("text"),
          $createNoteNode("f", "+").append($createTextNode("+ ").setMode("token"), noteText),
        ),
        sidebar,
        $createParaNode("p").append($createTextNode("next")),
      );
    });
    updateSelection(editor, noteText!, "note text".length);

    expect(readRunKeys(editor, "forward")).toEqual({
      keys: [sidebar!.getKey()],
      placement: "block",
    });
  });

  it("finds a hidden block from a caret between root children", async () => {
    let sidebar: UnknownNode;
    const { editor } = await baseTestEnvironment(() => {
      sidebar = $createSidebarNode();
      $getRoot().append($createParaNode("p").append($createTextNode("first")), sidebar);
    });
    await sutUpdate(editor, () => {
      $getRoot().select(1, 1);
    });

    expect(readRunKeys(editor, "forward")).toEqual({
      keys: [sidebar!.getKey()],
      placement: "block",
    });
  });

  it("looks past empty text between the caret and a figure", async () => {
    let fig: UnknownNode;
    let after: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      fig = $createFigureNode();
      after = $createTextNode("after");
      $getRoot().append(
        $createParaNode("p").append($createTextNode("before"), fig, $createTextNode(""), after),
      );
    });
    updateSelection(editor, after!, 0);

    expect(readRunKeys(editor, "backward")?.keys).toEqual([fig!.getKey()]);
  });

  it("finds a hidden sidebar before the paragraph when the caret is at its start", async () => {
    let sidebar: UnknownNode;
    let text: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      sidebar = $createSidebarNode();
      text = $createTextNode("text");
      $getRoot().append(
        $createParaNode("p").append($createTextNode("first")),
        sidebar,
        $createParaNode("q1").append(text),
      );
    });
    updateSelection(editor, text!, 0);

    expect(readRunKeys(editor, "backward")).toEqual({
      keys: [sidebar!.getKey()],
      placement: "block",
    });
  });

  it("stops at the paragraph's marker label, which a Backspace just past it removes", async () => {
    let text: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      text = $createTextNode("text");
      $getRoot().append(
        $createParaNode("p").append($createTextNode("first")),
        $createSidebarNode(),
        $createParaNode("q1").append($createImmutableTypedTextNode("marker", "\\q1 "), text),
      );
    });
    updateSelection(editor, text!, 0);

    expect(readRun(editor, "backward")).toBeUndefined();
  });

  it("finds a hidden sidebar after the paragraph when the caret is at its end", async () => {
    let sidebar: UnknownNode;
    let text: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      sidebar = $createSidebarNode();
      text = $createTextNode("text");
      $getRoot().append(
        $createParaNode("p").append(text),
        sidebar,
        $createParaNode("q1").append($createTextNode("next")),
      );
    });
    updateSelection(editor, text!, "text".length);

    expect(readRunKeys(editor, "forward")).toEqual({
      keys: [sidebar!.getKey()],
      placement: "block",
    });
  });

  it("prefers a figure inside the paragraph over a sidebar beyond it", async () => {
    let fig: UnknownNode;
    let text: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      fig = $createFigureNode();
      text = $createTextNode("text");
      $getRoot().append($createSidebarNode(), $createParaNode("p").append(fig, text));
    });
    updateSelection(editor, text!, 0);

    expect(readRunKeys(editor, "backward")).toEqual({ keys: [fig!.getKey()], placement: "inline" });
  });

  it("ignores ordinary paragraph neighbors", async () => {
    let text: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      text = $createTextNode("text");
      $getRoot().append(
        $createParaNode("p").append($createTextNode("first")),
        $createParaNode("q1").append(text),
      );
    });
    updateSelection(editor, text!, 0);

    expect(readRun(editor, "backward")).toBeUndefined();
  });

  it("ignores a range selection", async () => {
    let text: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      text = $createTextNode("text");
      $getRoot().append($createParaNode("p").append($createFigureNode(), text));
    });
    updateSelection(editor, text!, 0, text!, 2);

    expect(readRun(editor, "backward")).toBeUndefined();
  });
});

describe("$hiddenNodesInSelection", () => {
  it("reports a figure the selection covers", async () => {
    let fig: UnknownNode;
    let before: TextNode;
    let after: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      fig = $createFigureNode();
      before = $createTextNode("before");
      after = $createTextNode("after");
      $getRoot().append($createParaNode("p").append(before, fig, after));
    });
    updateSelection(editor, before!, 2, after!, 2);

    const keys = editor
      .getEditorState()
      .read(() => $hiddenNodesInSelection($getSelection()).map((node) => node.getKey()));
    expect(keys).toEqual([fig!.getKey()]);
  });

  it("reports only the outermost of nested hidden constructs", async () => {
    let sidebar: UnknownNode;
    let first: TextNode;
    let last: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      sidebar = $createUnknownNode("sidebar", "esb");
      first = $createTextNode("first");
      last = $createTextNode("last");
      $getRoot().append(
        $createParaNode("p").append(first),
        sidebar.append(
          $createParaNode("p").append(
            $createTextNode("a"),
            $createFigureNode(),
            $createTextNode("b"),
          ),
        ),
        $createParaNode("p").append(last),
      );
    });
    updateSelection(editor, first!, 1, last!, 1);

    const keys = editor
      .getEditorState()
      .read(() => $hiddenNodesInSelection($getSelection()).map((node) => node.getKey()));
    expect(keys).toEqual([sidebar!.getKey()]);
  });

  it("reports nothing for a selection of visible text", async () => {
    let text: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      text = $createTextNode("text");
      $getRoot().append($createParaNode("p").append(text, $createFigureNode()));
    });
    updateSelection(editor, text!, 0, text!, 3);

    const nodes = editor.getEditorState().read(() => $hiddenNodesInSelection($getSelection()));
    expect(nodes).toEqual([]);
  });
});

describe("$hiddenNodesToParaEdge", () => {
  it("finds every hidden construct between the caret and the paragraph start", async () => {
    let fig1: UnknownNode;
    let fig2: UnknownNode;
    let end: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      fig1 = $createFigureNode("one");
      fig2 = $createFigureNode("two");
      end = $createTextNode("end");
      $getRoot().append(
        $createParaNode("p").append(fig1, $createTextNode("middle"), fig2, end),
        $createParaNode("p").append($createFigureNode("elsewhere")),
      );
    });
    updateSelection(editor, end!, 3);

    const keys = editor
      .getEditorState()
      .read(() => $hiddenNodesToParaEdge($getSelection(), "backward").map((node) => node.getKey()));
    expect(keys).toEqual([fig1!.getKey(), fig2!.getKey()]);
  });

  it("finds nothing toward an edge with no hidden content", async () => {
    let start: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      start = $createTextNode("start");
      $getRoot().append(
        $createParaNode("p").append(start, $createTextNode(" more")),
        $createFigureNode(),
      );
    });
    updateSelection(editor, start!, 2);

    const nodes = editor
      .getEditorState()
      .read(() => $hiddenNodesToParaEdge($getSelection(), "forward"));
    expect(nodes).toEqual([]);
  });
});

describe("$placeCaretPastHiddenRun", () => {
  async function caretAfterSkip(
    editor: LexicalEditor,
    direction: DeleteDirection,
  ): Promise<{ key: string; offset: number; type: string } | undefined> {
    let moved = false;
    await sutUpdate(editor, () => {
      const run = $hiddenRunAtCaret($getSelection(), direction);
      if (run) moved = $placeCaretPastHiddenRun(run, direction);
    });
    if (!moved) return undefined;
    return editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) return undefined;
      const { key, offset, type } = selection.anchor;
      return { key, offset, type };
    });
  }

  it("puts the caret at the end of the text before an inline run (backward)", async () => {
    let before: TextNode;
    let after: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      before = $createTextNode("before");
      after = $createTextNode("after");
      $getRoot().append($createParaNode("p").append(before, $createFigureNode(), after));
    });
    updateSelection(editor, after!, 0);

    expect(await caretAfterSkip(editor, "backward")).toEqual({
      key: before!.getKey(),
      offset: "before".length,
      type: "text",
    });
  });

  it("puts the caret at the start of the text after an inline run (forward)", async () => {
    let before: TextNode;
    let after: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      before = $createTextNode("before");
      after = $createTextNode("after");
      $getRoot().append($createParaNode("p").append(before, $createFigureNode(), after));
    });
    updateSelection(editor, before!, "before".length);

    expect(await caretAfterSkip(editor, "forward")).toEqual({
      key: after!.getKey(),
      offset: 0,
      type: "text",
    });
  });

  it("puts the caret at the end of the paragraph before a block run (backward)", async () => {
    let first: TextNode;
    let text: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      first = $createTextNode("first");
      text = $createTextNode("text");
      $getRoot().append(
        $createParaNode("p").append(first),
        $createSidebarNode(),
        $createParaNode("q1").append(text),
      );
    });
    updateSelection(editor, text!, 0);

    expect(await caretAfterSkip(editor, "backward")).toEqual({
      key: first!.getKey(),
      offset: "first".length,
      type: "text",
    });
  });

  it("puts the caret at the start of the paragraph after a block run (forward)", async () => {
    let text: TextNode;
    let next: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      text = $createTextNode("text");
      next = $createTextNode("next");
      $getRoot().append(
        $createParaNode("p").append(text),
        $createSidebarNode(),
        $createParaNode("q1").append(next),
      );
    });
    updateSelection(editor, text!, "text".length);

    expect(await caretAfterSkip(editor, "forward")).toEqual({
      key: next!.getKey(),
      offset: 0,
      type: "text",
    });
  });

  it("puts the caret beside, never inside, a figure ending the paragraph before a block run", async () => {
    let para: ParaNode;
    let text: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      para = $createParaNode("p");
      text = $createTextNode("text");
      $getRoot().append(
        para.append($createTextNode("first"), $createFigureNode()),
        $createSidebarNode(),
        $createParaNode("p").append(text),
      );
    });
    updateSelection(editor, text!, 0);

    expect(await caretAfterSkip(editor, "backward")).toEqual({
      key: para!.getKey(),
      offset: 2,
      type: "element",
    });
  });

  it("puts the caret beside, never inside, a note ending the paragraph before a block run", async () => {
    let para: ParaNode;
    let text: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      para = $createParaNode("p");
      text = $createTextNode("text");
      $getRoot().append(
        para.append(
          $createTextNode("first"),
          $createNoteNode("f", "+").append($createTextNode("note text")),
        ),
        $createSidebarNode(),
        $createParaNode("p").append(text),
      );
    });
    updateSelection(editor, text!, 0);

    expect(await caretAfterSkip(editor, "backward")).toEqual({
      key: para!.getKey(),
      offset: 2,
      type: "element",
    });
  });

  it("puts the caret beside, never inside, a figure starting the paragraph after a block run", async () => {
    let para: ParaNode;
    let text: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      para = $createParaNode("p");
      text = $createTextNode("text");
      $getRoot().append(
        $createParaNode("p").append(text),
        $createSidebarNode(),
        para.append($createFigureNode(), $createTextNode("next")),
      );
    });
    updateSelection(editor, text!, "text".length);

    expect(await caretAfterSkip(editor, "forward")).toEqual({
      key: para!.getKey(),
      offset: 0,
      type: "element",
    });
  });

  it("puts the caret in the text before a character span an inline run starts, never inside the run", async () => {
    let before: TextNode;
    let word: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      before = $createTextNode("before ");
      word = $createTextNode("word");
      $getRoot().append(
        $createParaNode("p").append(
          before,
          $createCharNode("nd").append($createFigureNode(), word),
        ),
      );
    });
    updateSelection(editor, word!, 0);

    expect(await caretAfterSkip(editor, "backward")).toEqual({
      key: before!.getKey(),
      offset: "before ".length,
      type: "text",
    });
  });

  it("leaves the caret alone when no paragraph lies beyond a block run", async () => {
    let text: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      text = $createTextNode("text");
      $getRoot().append($createSidebarNode(), $createParaNode("q1").append(text));
    });
    updateSelection(editor, text!, 0);

    expect(await caretAfterSkip(editor, "backward")).toBeUndefined();
  });
});

describe("$hiddenContentItems", () => {
  it("describes each construct by tag and marker", async () => {
    const { editor } = await baseTestEnvironment();
    let items: ReturnType<typeof $hiddenContentItems> = [];
    await sutUpdate(editor, () => {
      items = $hiddenContentItems([
        $createFigureNode(),
        $createSidebarNode(),
        $createUnknownNode("periph"),
      ]);
    });
    expect(items).toEqual([
      { tag: "figure", marker: "fig" },
      { tag: "sidebar", marker: "esb" },
      { tag: "periph" },
    ]);
  });
});
