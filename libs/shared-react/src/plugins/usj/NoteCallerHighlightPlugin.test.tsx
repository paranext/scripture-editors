import {
  NOTE_CALLER_HIGHLIGHT_CLASS,
  NoteCallerHighlightHandle,
  NoteCallerHighlightPlugin,
} from "./NoteCallerHighlightPlugin";
import {
  baseTestEnvironment,
  countContinuationPieces,
  cutEveryCarrierIntoPieces,
} from "./react-test.utils";
import { act } from "@testing-library/react";
import { $createTextNode, $getRoot } from "lexical";
import { createRef } from "react";
import {
  $createCharNode,
  $createMarkerNode,
  $createNoteNode,
  $createParaNode,
  $isNoteNode,
  $noteEditableCallerNode,
  $pieces,
  getEditableCallerText,
  NBSP,
} from "shared";

describe("NoteCallerHighlightPlugin", () => {
  it("highlights the whole of an expanded caller an annotation cut into pieces", async () => {
    const ref = createRef<NoteCallerHighlightHandle>();
    const { editor } = await baseTestEnvironment(
      () => {
        $getRoot().append(
          $createParaNode().append(
            $createTextNode("In "),
            $createNoteNode("f", "+", false).append(
              $createMarkerNode("f"),
              $createTextNode(getEditableCallerText("+")).toggleUnmergeable(),
              $createCharNode("ft").append($createMarkerNode("ft"), $createTextNode(`${NBSP}text`)),
              $createMarkerNode("f", "closing"),
            ),
          ),
        );
      },
      <NoteCallerHighlightPlugin ref={ref} />,
    );
    await cutEveryCarrierIntoPieces(editor);
    expect(countContinuationPieces(editor)).toBeGreaterThan(0);

    await act(async () => {
      ref.current?.setHighlightedNote(0);
    });

    const elements = editor.getEditorState().read(() => {
      const note = $getRoot()
        .getAllTextNodes()
        .map((node) => node.getParent())
        .find($isNoteNode);
      const caller = note && $noteEditableCallerNode(note);
      if (!caller) throw new Error("no caller");
      return $pieces(caller).map((piece) => editor.getElementByKey(piece.getKey()));
    });
    expect(elements.length).toBeGreaterThan(1);
    expect(
      elements.map((element) => element?.classList.contains(NOTE_CALLER_HIGHLIGHT_CLASS)),
    ).toEqual(elements.map(() => true));

    await act(async () => {
      ref.current?.setHighlightedNote(undefined);
    });
    expect(
      elements.some((element) => element?.classList.contains(NOTE_CALLER_HIGHLIGHT_CLASS)),
    ).toBe(false);
  });
});
