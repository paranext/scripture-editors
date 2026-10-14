/**
 * The note-shell caret guard reads a protected note whose neighbouring text an annotation mark
 * wraps exactly as it reads the unmarked note: the text a mark holds is the same text beside the
 * same note, so a caret at its edge goes where it goes with no mark there.
 */
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { createBasicTestEnvironment } from "../../../../../libs/shared/src/nodes/usj/test.utils";
import { usjReactNodes } from "../../nodes/usj";
import { $guardCaretOutOfNoteShell, NoteShellCaretGuardPlugin } from "./NoteShellCaretGuardPlugin";
import { $describeLogicalSelection, baseTestEnvironment } from "./react-test.utils";
import { act } from "@testing-library/react";
import { createElement } from "react";
import {
  $createRangeSelection,
  $createTextNode,
  $getRoot,
  $isElementNode,
  $setSelection,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  LexicalNode,
  TextNode,
} from "lexical";
import {
  $createCharNode,
  $createMarkerNode,
  $createNoteNode,
  $createParaNode,
  $createTypedMarkNode,
  getEditableCallerText,
  NBSP,
  TypedMarkNode,
} from "shared";

/** How the paragraph's text around the note is held by annotation marks. */
type Marking = "none" | "whole" | "crossing";

/** `In` and ` the` as `marking` holds them: unmarked, each wrapped whole in a mark, or each cut by
 * a mark that runs from inside it to its edge at the note. */
function $texts(marking: Marking): { before: LexicalNode[]; after: LexicalNode[] } {
  let id = 0;
  const mark = (...children: LexicalNode[]) =>
    $createTypedMarkNode({ annotation: [String((id += 1))] }).append(...children);
  switch (marking) {
    case "none":
      return { before: [$createTextNode("In")], after: [$createTextNode(" the")] };
    case "whole":
      return {
        before: [mark($createTextNode("In"))],
        after: [mark($createTextNode(" the"))],
      };
    case "crossing":
      return {
        before: [$createTextNode("I"), mark($createTextNode("n"))],
        after: [mark($createTextNode(" t")), $createTextNode("he")],
      };
  }
}

/** `In\f + \ft Hello\ft*\f* the` with its shell (`\f`, the caller) and closer in token mode, as
 * the adaptor builds a note whose host governs its shell. */
function $build(marking: Marking): () => void {
  return () => {
    const { before, after } = $texts(marking);
    $getRoot().append(
      $createParaNode().append(
        ...before,
        $createNoteNode("f", "+", false).append(
          $createMarkerNode("f").setMode("token"),
          $createTextNode(getEditableCallerText("+")).setMode("token").toggleUnmergeable(),
          $createCharNode("ft").append(
            $createMarkerNode("ft"),
            $createTextNode(`${NBSP}Hello`),
            $createMarkerNode("ft", "closing"),
          ),
          $createMarkerNode("f", "closing").setMode("token"),
        ),
        ...after,
      ),
    );
  };
}

/** The paragraph's own text nodes (outside the note), in order. */
function $paragraphTexts(): TextNode[] {
  return $getRoot()
    .getAllTextNodes()
    .filter((node) => !node.getParents().some((parent) => parent.getType() === "note"));
}

/** Where the guard leaves a caret put at `offset` into the paragraph text `which` (0: before the
 * note, 1: after it) — the offset counted in the whole unmarked text — for every marking. */
function guarded(which: 0 | 1, offset: number): string[] {
  return (["none", "whole", "crossing"] as const).map((marking) => {
    const { editor } = createBasicTestEnvironment(
      [TypedMarkNode, ...usjReactNodes],
      $build(marking),
    );
    let answer = "";
    editor.update(
      () => {
        // The text nodes of the one unmarked text, in order, and where `offset` falls in them.
        const texts = $paragraphTexts();
        const run = which === 0 ? texts.slice(0, texts.length / 2) : texts.slice(texts.length / 2);
        let rest = offset;
        let node = run[0];
        for (const candidate of run) {
          node = candidate;
          if (rest <= candidate.getTextContentSize()) break;
          rest -= candidate.getTextContentSize();
        }
        // The spelling at a cut's edge that is in the node before it, the one the oracle types at.
        const selection = $createRangeSelection();
        selection.anchor.set(node.getKey(), rest, "text");
        selection.focus.set(node.getKey(), rest, "text");
        $setSelection(selection);
        $guardCaretOutOfNoteShell();
        answer = $describeLogicalSelection();
      },
      { discrete: true },
    );
    return answer;
  });
}

describe("a protected note beside text an annotation mark holds", () => {
  it("moves a caret at the end of the text before the note to the content's start", () => {
    const [none, whole, crossing] = guarded(0, 2);
    expect(none).not.toContain('>"In"');
    expect(whole).toBe(none);
    expect(crossing).toBe(none);
  });

  it("moves a caret at the start of the text after the note to the content's end", () => {
    const [none, whole, crossing] = guarded(1, 0);
    expect(none).not.toContain('" the"');
    expect(whole).toBe(none);
    expect(crossing).toBe(none);
  });

  it("leaves a caret inside the text beside the note where it is", () => {
    for (const [which, offset] of [
      [0, 1],
      [1, 1],
    ] as const) {
      const [none, whole, crossing] = guarded(which, offset);
      expect(whole).toBe(none);
      expect(crossing).toBe(none);
    }
  });
});

/** `In\f + \ft Hello\ft*\f* the`, its shell and closer in token mode, with `Hello` held by an
 * annotation mark or not. */
function $buildWithContent(isMarked: boolean): void {
  const hello = $createTextNode("Hello");
  $getRoot().append(
    $createParaNode().append(
      $createTextNode("In"),
      $createNoteNode("f", "+", false).append(
        $createMarkerNode("f").setMode("token"),
        $createTextNode(getEditableCallerText("+")).setMode("token").toggleUnmergeable(),
        $createCharNode("ft").append(
          $createMarkerNode("ft"),
          ...(isMarked
            ? [$createTextNode(NBSP), $createTypedMarkNode({ annotation: ["1"] }).append(hello)]
            : [$createTextNode(`${NBSP}Hello`)]),
          $createMarkerNode("ft", "closing"),
        ),
        $createMarkerNode("f", "closing").setMode("token"),
      ),
      $createTextNode(" the"),
    ),
  );
}

/** The paragraph's children and the note's, by type and text, after `x` is typed over the note's
 * content from `Hello` to the end of `\ft*` — with the range's start where Lexical re-reads it from
 * the screen: inside the mark that holds `Hello`, when one does. */
async function typedOverContent(isMarked: boolean): Promise<string> {
  const { editor } = await baseTestEnvironment(
    () => $buildWithContent(isMarked),
    createElement(NoteShellCaretGuardPlugin),
  );
  await act(async () => {
    editor.update(() => {
      const texts = $getRoot().getAllTextNodes();
      const start = isMarked
        ? texts.find((node) => node.getTextContent() === "Hello")
        : texts.find((node) => node.getTextContent() === `${NBSP}Hello`);
      const closer = texts.find((node) => node.getTextContent() === "\\ft*");
      if (!start || !closer) throw new Error("content not found");
      const selection = $createRangeSelection();
      selection.anchor.set(start.getKey(), isMarked ? 0 : 1, "text");
      selection.focus.set(closer.getKey(), closer.getTextContentSize(), "text");
      $setSelection(selection);
      editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "x");
    });
  });
  return editor.getEditorState().read(() => {
    const describe = (node: LexicalNode): string =>
      $isElementNode(node)
        ? `${node.getType()}(${node
            .getChildren()
            .filter((child) => child.getType() !== "typed-mark" || child.getTextContentSize() > 0)
            .map(describe)
            .join(" ")})`
        : JSON.stringify(node.getTextContent());
    const para = $getRoot().getFirstChildOrThrow();
    return describe(para).replaceAll(/typed-mark\(([^()]*)\)/g, "$1");
  });
}

describe("typing over a protected note's content that an annotation mark starts", () => {
  it("replaces the content as with no mark, leaving the paragraph's text after the note alone", async () => {
    const plain = await typedOverContent(false);
    const marked = await typedOverContent(true);
    expect(plain).toContain('" the")');
    expect(marked).toBe(plain);
  });
});
