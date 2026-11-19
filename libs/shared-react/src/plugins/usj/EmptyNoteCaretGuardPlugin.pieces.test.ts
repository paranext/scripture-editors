/**
 * An empty note whose shell or closer an annotation has cut into pieces (`displayPieces.state.ts`)
 * takes its caret host where the uncut note takes it: just past the whole caller.
 */
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { createBasicTestEnvironment } from "../../../../../libs/shared/src/nodes/usj/test.utils";
import { usjReactNodes } from "../../nodes/usj";
import { $emptyNoteContentAnchor } from "./EmptyNoteCaretGuardPlugin";
import {
  $describeLogicalPoint,
  countContinuationPieces,
  cutEveryCarrierIntoPieces,
} from "./react-test.utils";
import { $createTextNode, $getRoot } from "lexical";
import {
  $createMarkerNode,
  $createNoteNode,
  $createParaNode,
  $isNoteNode,
  $pieceHead,
  getEditableCallerText,
  NoteNode,
  TypedMarkNode,
} from "shared";

/** `In \f + \f* the`, its shell protected (token mode) as a host's note editor builds it. */
function $build(): void {
  $getRoot().append(
    $createParaNode().append(
      $createTextNode("In "),
      $createNoteNode("f", "+", false).append(
        $createMarkerNode("f").setMode("token"),
        $createTextNode(getEditableCallerText("+")).setMode("token").toggleUnmergeable(),
        $createMarkerNode("f", "closing").setMode("token"),
      ),
      $createTextNode(" the"),
    ),
  );
}

function $note(): NoteNode {
  const note = $getRoot()
    .getAllTextNodes()
    .map((node) => node.getParent())
    .find($isNoteNode);
  if (!note) throw new Error("no note");
  return note;
}

describe("an empty note whose carriers are cut into pieces", () => {
  it("anchors the typing slot's caret host past the whole caller", async () => {
    const answers: string[] = [];
    for (const cut of [false, true]) {
      const { editor } = createBasicTestEnvironment([TypedMarkNode, ...usjReactNodes], $build);
      if (cut) {
        await cutEveryCarrierIntoPieces(editor);
        expect(countContinuationPieces(editor)).toBeGreaterThan(2);
      }
      let answer = "";
      editor.update(
        () => {
          const note = $note();
          // The caret at the closer's front, the slot an empty note's content goes in.
          const closer = $pieceHead(note.getLastChildOrThrow());
          note.select(closer.getIndexWithinParent(), closer.getIndexWithinParent());
          const anchor = $emptyNoteContentAnchor();
          answer = anchor ? $describeLogicalPoint(anchor, anchor.getTextContentSize()) : "none";
        },
        { discrete: true },
      );
      answers.push(answer);
    }
    expect(answers[0]).not.toBe("none");
    expect(answers[1]).toEqual(answers[0]);
  });
});
