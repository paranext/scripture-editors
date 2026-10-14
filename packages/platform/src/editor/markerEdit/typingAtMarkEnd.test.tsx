/**
 * A character typed at the end of a word an annotation mark holds, right before a closing glyph,
 * is content after the word — as it is with no mark there — never a byte of the glyph.
 *
 * Lexical re-reads the caret from the screen at the start of every update, and a caret at the end
 * of a mark's last text, with nothing after it in the mark, is read onto the start of the node
 * after the mark (a mark takes no text after it). There, the glyph is the node the caret is in.
 */
import { deserializeEditorState } from "../adaptors/editor-usj.adaptor";
import { testEnvironment, viewOptions } from "./markerEdit.test-helpers";
import { act } from "@testing-library/react";
import {
  $createTextNode,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  $setState,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  ElementNode,
  LexicalNode,
  TextNode,
} from "lexical";
import {
  $createCharNode,
  $createMarkerNode,
  $createParaNode,
  $createTypedMarkNode,
  $isCharNode,
  $isMarkerNode,
  $isTypedMarkNode,
  NBSP,
  textTypeState,
} from "shared";

type Shape = "closed" | "nested";

/** The word the caret ends, in each shape: its last letters are what a mark holds. */
const WORD = { closed: [`${NBSP}gra`, "ce"], nested: [" thr", "ee"] } as const;

/** `\p In the \w grace\w* of God` (closed), or `\p \nd one \+wj two\+wj* three\nd* x`
 * (nested), with the last letters of the word before the closer held by a mark or not. */
function $build(shape: Shape, isMarked: boolean): void {
  const separator = $createTextNode(NBSP);
  $setState(separator, textTypeState, "marker-trailing-space");
  const [head, tail] = WORD[shape];
  const word: LexicalNode[] = isMarked
    ? [
        $createTextNode(head),
        $createTypedMarkNode({ annotation: ["1"] }).append($createTextNode(tail)),
      ]
    : [$createTextNode(`${head}${tail}`)];
  const span =
    shape === "closed"
      ? $createCharNode("w").append(
          $createMarkerNode("w"),
          ...word,
          $createMarkerNode("w", "closing"),
        )
      : $createCharNode("nd").append(
          $createMarkerNode("nd"),
          $createTextNode(`${NBSP}one `),
          $createCharNode("wj").append(
            $createMarkerNode("wj", "opening", true),
            $createTextNode(`${NBSP}two`),
            $createMarkerNode("wj", "closing", true),
          ),
          ...word,
          $createMarkerNode("nd", "closing"),
        );
  $getRoot().append(
    $createParaNode("p").append(
      $createMarkerNode("p"),
      separator,
      $createTextNode(shape === "closed" ? "In the " : ""),
      span,
      $createTextNode(shape === "closed" ? " of God" : " x"),
    ),
  );
}

/** The paragraph's nodes as the unmarked tree has them: marks flattened, adjacent content texts
 * joined, each named by kind and text. */
function $paraShape(): string[] {
  const shape: string[] = [];
  const visit = (node: LexicalNode): void => {
    if ($isTypedMarkNode(node) || $isCharNode(node)) {
      (node as ElementNode).getChildren().forEach(visit);
      return;
    }
    const text = node.getTextContent();
    if (text === "") return;
    const kind = $isMarkerNode(node) ? "glyph" : "text";
    if (kind === "text" && shape.at(-1)?.startsWith("text:"))
      shape[shape.length - 1] = `${shape.at(-1)}${text}`;
    else shape.push(`${kind}:${text}`);
  };
  $getRoot().getFirstChildOrThrow<ElementNode>().getChildren().forEach(visit);
  return shape;
}

/** Put the caret at the end of the word — the end of the mark's text when one holds it — let the
 * editor commit it to the screen, then type `x` as the keyboard does, in an update of its own that
 * reads the caret back from the screen. */
async function editAtWordEnd(
  shape: Shape,
  isMarked: boolean,
): Promise<{ shape: string[]; content: unknown; caret: string }> {
  const { editor } = await testEnvironment(() => $build(shape, isMarked));
  const [head, tail] = WORD[shape];
  await act(async () => {
    editor.update(() => {
      const word = $getRoot()
        .getAllTextNodes()
        .find((node) => node.getTextContent() === (isMarked ? tail : `${head}${tail}`));
      if (!word) throw new Error("no word");
      word.select(word.getTextContentSize(), word.getTextContentSize());
    });
  });
  await act(async () => {
    editor.update(() => {
      editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "x");
    });
  });
  return editor.getEditorState().read(() => {
    const selection = $getSelection();
    const anchor = $isRangeSelection(selection) ? selection.anchor.getNode() : undefined;
    const caret =
      $isRangeSelection(selection) && $isTextNode(anchor)
        ? `${(anchor as TextNode).getTextContent().slice(0, selection.anchor.offset)}|`
        : "none";
    return {
      shape: $paraShape(),
      content: deserializeEditorState(editor.getEditorState(), viewOptions)?.content,
      caret,
    };
  });
}

describe("typing at the end of a marked word before a closing glyph", () => {
  it("types content after the word, as with no mark there", async () => {
    const plain = await editAtWordEnd("closed", false);
    const marked = await editAtWordEnd("closed", true);
    expect(plain.shape).toEqual([
      "glyph:\\p",
      `text:${NBSP}In the `,
      "glyph:\\w",
      `text:${NBSP}gracex`,
      "glyph:\\w*",
      "text: of God",
    ]);
    expect(marked.shape).toEqual(plain.shape);
    expect(marked.content).toEqual(plain.content);
    expect(marked.caret.endsWith("x|")).toBe(true);
  });

  it("types content after the word in a span nested inside another, as with no mark there", async () => {
    const plain = await editAtWordEnd("nested", false);
    const marked = await editAtWordEnd("nested", true);
    expect(plain.shape).toContain("text: threex");
    expect(marked.shape).toEqual(plain.shape);
    expect(marked.content).toEqual(plain.content);
    expect(marked.caret.endsWith("x|")).toBe(true);
  });
});
