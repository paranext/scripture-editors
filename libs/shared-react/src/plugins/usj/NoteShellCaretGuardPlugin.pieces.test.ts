/**
 * The note-shell caret guard reads a protected note whose shell or closer an annotation has cut
 * into pieces (`displayPieces.state.ts`) exactly as it reads the uncut note: a caret anywhere in
 * the shell or the closer goes where it goes in the uncut note.
 */
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { createBasicTestEnvironment } from "../../../../../libs/shared/src/nodes/usj/test.utils";
import { usjReactNodes } from "../../nodes/usj";
import { $guardCaretOutOfNoteShell } from "./NoteShellCaretGuardPlugin";
import {
  $describeLogicalSelection,
  countContinuationPieces,
  cutEveryCarrierIntoPieces,
} from "./react-test.utils";
import { $createRangeSelection, $createTextNode, $getRoot, $setSelection, TextNode } from "lexical";
import {
  $createCharNode,
  $createMarkerNode,
  $createNoteNode,
  $createParaNode,
  $isNoteNode,
  $logicalText,
  $pieceAtLogicalOffset,
  getEditableCallerText,
  NBSP,
  TypedMarkNode,
} from "shared";

/** `In \f + \ft Hello\ft*\f* the` with its shell (`\f`, the caller) and closer in token mode, as
 * the adaptor builds a note whose host governs its shell (its caller unmergeable, as every note
 * builder makes it). */
function $build(): void {
  $getRoot().append(
    $createParaNode().append(
      $createTextNode("In "),
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
      $createTextNode(" the"),
    ),
  );
}

/** The note's child carrying `text` (its first piece). */
function $noteChild(text: string): TextNode {
  const child = $getRoot()
    .getAllTextNodes()
    .find((node) => $isNoteNode(node.getParent()) && $logicalText(node) === text);
  if (!child) throw new Error(`no ${text}`);
  return child;
}

/** Where the guard leaves a caret put at `offset` into the whole of the note's child `text`, in the
 * uncut note and in the note with every carrier cut into pieces. */
async function guarded(text: string, offset: number): Promise<string[]> {
  const answers: string[] = [];
  for (const cut of [false, true]) {
    const { editor } = createBasicTestEnvironment([TypedMarkNode, ...usjReactNodes], $build);
    if (cut) {
      await cutEveryCarrierIntoPieces(editor);
      expect(countContinuationPieces(editor)).toBeGreaterThan(3);
    }
    let answer = "";
    editor.update(
      () => {
        const [piece, local] = $pieceAtLogicalOffset($noteChild(text), offset);
        const selection = $createRangeSelection();
        selection.anchor.set(piece.getKey(), local, "text");
        selection.focus.set(piece.getKey(), local, "text");
        $setSelection(selection);
        $guardCaretOutOfNoteShell();
        answer = $describeLogicalSelection();
      },
      { discrete: true },
    );
    answers.push(answer);
  }
  return answers;
}

describe("a protected note whose shell is cut into pieces", () => {
  it("moves a caret in the opening glyph or the caller to the content's start", async () => {
    for (const [text, length] of [
      ["\\f", 2],
      [getEditableCallerText("+"), 3],
    ] as const)
      for (let offset = 0; offset <= length; offset++) {
        const [uncut, cut] = await guarded(text, offset);
        expect([text, offset, cut]).toEqual([text, offset, uncut]);
      }
  });

  it("moves a caret in the closer to the content's end", async () => {
    for (let offset = 0; offset <= 3; offset++) {
      const [uncut, cut] = await guarded("\\f*", offset);
      expect([offset, cut]).toEqual([offset, uncut]);
    }
  });

  it("keeps a selection of everything to the note's content", async () => {
    const answers: string[] = [];
    for (const cut of [false, true]) {
      const { editor } = createBasicTestEnvironment([TypedMarkNode, ...usjReactNodes], $build);
      if (cut) await cutEveryCarrierIntoPieces(editor);
      let answer = "";
      editor.update(
        () => {
          const texts = $getRoot().getAllTextNodes();
          const selection = $createRangeSelection();
          selection.anchor.set(texts[0].getKey(), 0, "text");
          const last = texts[texts.length - 1];
          selection.focus.set(last.getKey(), last.getTextContentSize(), "text");
          $setSelection(selection);
          $guardCaretOutOfNoteShell();
          answer = $describeLogicalSelection();
        },
        { discrete: true },
      );
      answers.push(answer);
    }
    expect(answers[1]).toEqual(answers[0]);
  });
});
