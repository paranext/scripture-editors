/**
 * The note-shell caret guard reads a protected note whose neighbouring text an annotation mark
 * wraps exactly as it reads the unmarked note: the text a mark holds is the same text beside the
 * same note, so a caret at its edge goes where it goes with no mark there.
 */
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { createBasicTestEnvironment } from "../../../../../libs/shared/src/nodes/usj/test.utils";
import { usjReactNodes } from "../../nodes/usj";
import { $guardCaretOutOfNoteShell } from "./NoteShellCaretGuardPlugin";
import { $describeLogicalSelection } from "./react-test.utils";
import {
  $createRangeSelection,
  $createTextNode,
  $getRoot,
  $setSelection,
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
