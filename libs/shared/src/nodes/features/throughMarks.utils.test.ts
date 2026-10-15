import { $createNoteNode } from "../usj/NoteNode.js";
import { $createParaNode } from "../usj/ParaNode.js";
import { usjBaseNodes } from "../usj/index.js";
import { createBasicTestEnvironment } from "../usj/test.utils.js";
import { $createVerseNode } from "../usj/VerseNode.js";
import { $createMarkerNode } from "./MarkerNode.js";
import {
  $isPlainTextNode,
  $isRangeSplitByMarks,
  $nextSiblingThroughMarks,
  $nodeAfterBoundaryThroughMarks,
  $nodeBeforeBoundaryThroughMarks,
  $previousSiblingThroughMarks,
  $restoreCaretAtMarkEnd,
  $textRunThroughMarks,
} from "./throughMarks.utils.js";
import { $createTypedMarkNode, TypedMarkNode } from "./TypedMarkNode.js";
import { displayPieceContinuationState } from "./displayPieces.state.js";
import {
  $createRangeSelection,
  $createTextNode,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $setState,
  ElementNode,
  LexicalNode,
  TextNode,
} from "lexical";
import { $createCharNode } from "../usj/CharNode.js";
import { textTypeState } from "../collab/delta.state.js";

const nodes = [TypedMarkNode, ...usjBaseNodes];

/** What a node is, for comparing answers: its text, or its type when it has none of its own. */
function name(node: LexicalNode | null): string {
  if (!node) return "null";
  return node instanceof ElementNode ? node.getType() : node.getTextContent();
}

describe("reading through annotation marks", () => {
  it("steps out of the marks a node ends and into the marks that start after it", () => {
    let a: TextNode;
    let b: TextNode;
    let c: TextNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      a = $createTextNode("a");
      b = $createTextNode("b");
      c = $createTextNode("c");
      $getRoot().append(
        $createParaNode().append(
          $createTypedMarkNode({ t: ["1"] }).append($createTypedMarkNode({ t: ["2"] }).append(a)),
          $createTypedMarkNode({ t: ["3"] }).append(b),
          c,
          $createNoteNode("f", "+"),
        ),
      );
    });

    editor.getEditorState().read(() => {
      expect(name($nextSiblingThroughMarks(a))).toBe("b");
      expect(name($nextSiblingThroughMarks(b))).toBe("c");
      expect(name($nextSiblingThroughMarks(c))).toBe("note");
      expect(name($previousSiblingThroughMarks(b))).toBe("a");
      expect(name($previousSiblingThroughMarks(c))).toBe("b");
      expect(name($previousSiblingThroughMarks(a))).toBe("null");
    });
  });

  it("never leaves a parent that is not a mark", () => {
    let inner: TextNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      inner = $createTextNode("in");
      $getRoot().append(
        $createParaNode().append(
          $createTextNode("before"),
          $createNoteNode("f", "+").append($createTypedMarkNode({ t: ["1"] }).append(inner)),
          $createTextNode("after"),
        ),
      );
    });

    editor.getEditorState().read(() => {
      expect($nextSiblingThroughMarks(inner)).toBeNull();
      expect($previousSiblingThroughMarks(inner)).toBeNull();
    });
  });

  it("reads a boundary of a mark or its parent as the unmarked tree does", () => {
    const { editor } = createBasicTestEnvironment(nodes, () => {
      $getRoot().append(
        $createParaNode().append(
          $createTextNode("x"),
          $createTypedMarkNode({ t: ["1"] }),
          $createTypedMarkNode({ t: ["2"] }).append($createTextNode("y")),
        ),
      );
    });

    editor.getEditorState().read(() => {
      const para = $getRoot().getFirstChildOrThrow<ElementNode>();
      const [, empty, mark] = para.getChildren<ElementNode>();
      // An empty mark holds nothing to stop at.
      expect(name($nodeAfterBoundaryThroughMarks(para, 1))).toBe("y");
      expect(name($nodeBeforeBoundaryThroughMarks(para, 2))).toBe("x");
      expect(name($nodeAfterBoundaryThroughMarks(empty, 0))).toBe("y");
      expect(name($nodeAfterBoundaryThroughMarks(mark, 1))).toBe("null");
      expect(name($nodeBeforeBoundaryThroughMarks(mark, 0))).toBe("x");
    });
  });

  it("reads a carrier cut into pieces as one node", () => {
    const { editor } = createBasicTestEnvironment(nodes, () => {
      const piece = $createVerseNode("1");
      $setState(piece, displayPieceContinuationState, true);
      $getRoot().append(
        $createParaNode().append(
          $createMarkerNode("p"),
          $createVerseNode("1"),
          piece,
          $createTypedMarkNode({ t: ["1"] }).append($createTextNode("text")),
        ),
      );
    });

    editor.getEditorState().read(() => {
      const [glyph, head, continuation, mark] = $getRoot()
        .getFirstChildOrThrow<ElementNode>()
        .getChildren();
      const text = (mark as ElementNode).getFirstChildOrThrow();
      expect($previousSiblingThroughMarks(text)?.is(head)).toBe(true);
      expect($nextSiblingThroughMarks(head)?.is(text)).toBe(true);
      expect($nextSiblingThroughMarks(glyph)?.is(head)).toBe(true);
      expect($previousSiblingThroughMarks(continuation)?.is(glyph)).toBe(true);
    });
  });

  it("collects the run of text a mark cut a text into", () => {
    let middle: TextNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      middle = $createTextNode(" o");
      $getRoot().append(
        $createParaNode().append(
          $createMarkerNode("w", "closing"),
          $createTextNode(" "),
          $createTypedMarkNode({ t: ["1"] }).append(middle),
          $createTextNode("f God"),
          $createNoteNode("f", "+"),
          $createTextNode("after the note"),
        ),
      );
    });

    editor.getEditorState().read(() => {
      expect($textRunThroughMarks(middle, $isPlainTextNode).map(name)).toEqual([
        " ",
        " o",
        "f God",
      ]);
    });
  });

  it("tells a range a mark splits from one that reaches across elements", () => {
    const { editor } = createBasicTestEnvironment(nodes, () => {
      $getRoot().append(
        $createParaNode().append(
          $createTextNode("before"),
          $createCharNode("w").append(
            $createMarkerNode("w"),
            $createTextNode("a"),
            $createTypedMarkNode({ t: ["1"] }).append($createTextNode("marked")),
            $createTextNode("b"),
          ),
        ),
      );
    });

    editor.getEditorState().read(() => {
      const text = (content: string) => {
        const found = $getRoot()
          .getAllTextNodes()
          .find((node) => node.getTextContent() === content);
        if (!found) throw new Error(content);
        return found;
      };
      const range = (from: TextNode, to: TextNode) => {
        const selection = $createRangeSelection();
        selection.anchor.set(from.getKey(), 0, "text");
        selection.focus.set(to.getKey(), to.getTextContentSize(), "text");
        return selection;
      };
      expect($isRangeSplitByMarks(range(text("marked"), text("b")))).toBe(true);
      expect($isRangeSplitByMarks(range(text("a"), text("marked")))).toBe(true);
      expect($isRangeSplitByMarks(range(text("a"), text("b")))).toBe(false);
      expect($isRangeSplitByMarks(range(text("before"), text("marked")))).toBe(false);
    });
  });
});

describe("walking the text a mark cuts", () => {
  const $mark = () => $createTypedMarkNode({ test: ["1"] });

  /** Every node reached from `start` stepping to `side` until `null`, as its text. */
  function $walk(start: LexicalNode, side: "previous" | "next"): string[] {
    const step = side === "next" ? $nextSiblingThroughMarks : $previousSiblingThroughMarks;
    const out: string[] = [];
    for (let node = step(start); node; node = step(node)) out.push(node.getTextContent());
    return out;
  }

  it("reads text a mark cuts as the one run it is without the mark", () => {
    const { editor } = createBasicTestEnvironment(nodes);
    editor.update(
      () => {
        // `In the beginning` with `I` and `e b` marked, and an empty mark between.
        const first = $createTextNode("I");
        const last = $createTextNode("eginning");
        $getRoot().append(
          $createParaNode().append(
            $mark().append(first),
            $createTextNode("n th"),
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
    const { editor } = createBasicTestEnvironment(nodes);
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
        expect($previousSiblingThroughMarks(inner)).toBeNull();
        expect($nextSiblingThroughMarks(inner)).toBeNull();
        expect($nextSiblingThroughMarks(before)?.getType()).toBe("char");
      },
      { discrete: true },
    );
  });
});

describe("restoring a caret Lexical read past a mark's end", () => {
  /** Where `$restoreCaretAtMarkEnd` puts a caret at the start of `after`, the node right after a
   * mark holding `grace`'s last byte inside `\w grace…\w*`: the caret's node and offset, and
   * whether it moved. */
  function restoredFrom(after: () => TextNode): string {
    const { editor } = createBasicTestEnvironment(nodes);
    let out = "";
    editor.update(
      () => {
        const node = after();
        $getRoot().append(
          $createParaNode().append(
            $createCharNode("w").append(
              $createMarkerNode("w"),
              $createTextNode("grac"),
              $createTypedMarkNode({ t: ["1"] }).append($createTextNode("e")),
              node,
              $createMarkerNode("w", "closing"),
            ),
          ),
        );
        node.select(0, 0);
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) throw new Error("no range selection");
        const moved = $restoreCaretAtMarkEnd(selection);
        out = `${moved} ${selection.anchor.getNode().getTextContent()}@${selection.anchor.offset}`;
      },
      { discrete: true },
    );
    return out;
  }

  it("puts it at the end of the mark's content, whatever node follows the mark", () => {
    // With no mark, Lexical reads a caret at the start of each of these onto the end of `grace`.
    expect(restoredFrom(() => $createMarkerNode("w", "closing"))).toBe("true e@1");
    expect(
      restoredFrom(() => {
        const run = $createTextNode("|g");
        $setState(run, textTypeState, "attribute");
        return run;
      }),
    ).toBe("true e@1");
    expect(restoredFrom(() => $createTextNode(" more"))).toBe("true e@1");
  });

  it("leaves a caret alone that is not at the start of the node after a mark", () => {
    const { editor } = createBasicTestEnvironment(nodes);
    editor.update(
      () => {
        const run = $createTextNode("|g");
        $setState(run, textTypeState, "attribute");
        $getRoot().append(
          $createParaNode().append(
            $createCharNode("w").append($createTextNode("grace"), run, $createMarkerNode("w")),
          ),
        );
        run.select(0, 0);
        let selection = $getSelection();
        if (!$isRangeSelection(selection)) throw new Error("no range selection");
        expect($restoreCaretAtMarkEnd(selection)).toBe(false);
        run.select(1, 1);
        selection = $getSelection();
        if (!$isRangeSelection(selection)) throw new Error("no range selection");
        expect($restoreCaretAtMarkEnd(selection)).toBe(false);
        expect(selection.anchor.getNode().is(run)).toBe(true);
      },
      { discrete: true },
    );
  });
});
