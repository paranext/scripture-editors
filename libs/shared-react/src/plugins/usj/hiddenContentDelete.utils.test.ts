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

function $figure(caption = "caption"): UnknownNode {
  return $createUnknownNode("figure", "fig").append($createTextNode(caption).setMode("token"));
}

function $sidebar(text = "sidebar text"): UnknownNode {
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
      fig = $figure();
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
      fig = $figure();
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
      $getRoot().append($createParaNode("p").append($createTextNode("before"), $figure(), after));
    });
    updateSelection(editor, after!, 2);

    expect(readRun(editor, "backward")).toBeUndefined();
  });

  it("takes contiguous hidden constructs as one run, in document order", async () => {
    let fig1: UnknownNode;
    let fig2: UnknownNode;
    let after: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      fig1 = $figure("one");
      fig2 = $figure("two");
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
      fig = $figure();
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
      fig = $figure();
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
      fig = $figure();
      para = $createParaNode("p").append(fig);
      $getRoot().append(para);
    });
    updateSelection(editor, para!, 1);

    expect(readRunKeys(editor, "backward")?.keys).toEqual([fig!.getKey()]);
  });

  it("never walks out of a note", async () => {
    let noteText: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      noteText = $createTextNode("note text");
      $getRoot().append(
        $createParaNode("p").append($figure(), $createNoteNode("f", "+").append(noteText)),
      );
    });
    updateSelection(editor, noteText!, 0);

    expect(readRun(editor, "backward")).toBeUndefined();
  });

  it("finds a hidden sidebar before the paragraph when the caret is at its start", async () => {
    let sidebar: UnknownNode;
    let text: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      sidebar = $sidebar();
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

  it("counts a caret just past the paragraph's marker label as the paragraph start", async () => {
    let sidebar: UnknownNode;
    let text: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      sidebar = $sidebar();
      text = $createTextNode("text");
      $getRoot().append(
        $createParaNode("p").append($createTextNode("first")),
        sidebar,
        $createParaNode("q1").append($createImmutableTypedTextNode("marker", "\\q1 "), text),
      );
    });
    updateSelection(editor, text!, 0);

    expect(readRunKeys(editor, "backward")?.keys).toEqual([sidebar!.getKey()]);
  });

  it("finds a hidden sidebar after the paragraph when the caret is at its end", async () => {
    let sidebar: UnknownNode;
    let text: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      sidebar = $sidebar();
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
      fig = $figure();
      text = $createTextNode("text");
      $getRoot().append($sidebar(), $createParaNode("p").append(fig, text));
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
      $getRoot().append($createParaNode("p").append($figure(), text));
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
      fig = $figure();
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
      sidebar = $createUnknownNode("sidebar", "esb").append(
        $createParaNode("p").append($createTextNode("a"), $figure(), $createTextNode("b")),
      );
      first = $createTextNode("first");
      last = $createTextNode("last");
      $getRoot().append(
        $createParaNode("p").append(first),
        sidebar,
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
      $getRoot().append($createParaNode("p").append(text, $figure()));
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
      fig1 = $figure("one");
      fig2 = $figure("two");
      end = $createTextNode("end");
      $getRoot().append(
        $createParaNode("p").append(fig1, $createTextNode("middle"), fig2, end),
        $createParaNode("p").append($figure("elsewhere")),
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
      $getRoot().append($createParaNode("p").append(start, $createTextNode(" more")), $figure());
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
      $getRoot().append($createParaNode("p").append(before, $figure(), after));
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
      $getRoot().append($createParaNode("p").append(before, $figure(), after));
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
        $sidebar(),
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
        $sidebar(),
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

  it("leaves the caret alone when no paragraph lies beyond a block run", async () => {
    let text: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      text = $createTextNode("text");
      $getRoot().append($sidebar(), $createParaNode("q1").append(text));
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
      items = $hiddenContentItems([$figure(), $sidebar(), $createUnknownNode("periph")]);
    });
    expect(items).toEqual([
      { tag: "figure", marker: "fig" },
      { tag: "sidebar", marker: "esb" },
      { tag: "periph" },
    ]);
  });
});
