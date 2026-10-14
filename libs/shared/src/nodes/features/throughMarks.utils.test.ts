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
  $textRunThroughMarks,
} from "./throughMarks.utils.js";
import { $createTypedMarkNode, TypedMarkNode } from "./TypedMarkNode.js";
import { displayPieceContinuationState } from "./displayPieces.state.js";
import {
  $createRangeSelection,
  $createTextNode,
  $getRoot,
  $setState,
  ElementNode,
  LexicalNode,
  TextNode,
} from "lexical";
import { $createCharNode } from "../usj/CharNode.js";

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
