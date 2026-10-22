// Should only be used on nodes that are initialized in the test environment.
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { $createImmutableNoteCallerNode } from "../../nodes/usj";
import { getViewOptions } from "../../views/view-options.utils";
import { STANDARD_VIEW_MODE } from "../../views/view-mode.model";
import { ArrowNavigationPlugin } from "./ArrowNavigationPlugin";
import { baseTestEnvironment, pressKey, updateSelection } from "./react-test.utils";
import { TrailingNoteCaretGuardPlugin } from "./TrailingNoteCaretGuardPlugin";
import { act } from "@testing-library/react";
import {
  $createTextNode,
  $getRoot,
  $getSelection,
  $hasAncestor,
  $isRangeSelection,
  $isTextNode,
  KEY_DOWN_COMMAND,
  LexicalEditor,
  SELECTION_CHANGE_COMMAND,
  TextNode,
} from "lexical";
import {
  $createCharNode,
  $createMarkerNode,
  $createMarkerTrailingSeparator,
  $createNoteNode,
  $createParaNode,
  CharNode,
  CURSOR_PLACEHOLDER_CHAR,
  NoteNode,
} from "shared";

/** A collapsed `\f + \ft note body\f*` with editable markers. */
function $createCollapsedNote(): NoteNode {
  return $createNoteNode("f", "+", true).append(
    $createMarkerNode("f", "opening"),
    $createImmutableNoteCallerNode("+", "note preview"),
    $createMarkerTrailingSeparator(),
    $createCharNode("ft").append($createMarkerNode("ft", "opening"), $createTextNode("note body")),
    $createMarkerNode("f", "closing"),
  );
}

async function dispatchSelectionChange(editor: LexicalEditor) {
  await act(async () => {
    editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
  });
}

/**
 * `\p before \wj stuff |note|` - the note ends the `\wj` span, and when the span is unclosed
 * (`closed="false"`) nothing renders past the note on its line.
 */
async function spanEnvironment(closed: boolean) {
  let stuff: TextNode;
  let wj: CharNode;
  let note: NoteNode;
  const { editor } = await baseTestEnvironment(
    () => {
      note = $createCollapsedNote();
      stuff = $createTextNode("stuff ");
      wj = $createCharNode("wj", closed ? undefined : { closed: "false" });
      $getRoot().append(
        $createParaNode("p").append(
          $createTextNode("before "),
          wj.append(
            $createMarkerNode("wj", "opening"),
            stuff,
            note,
            ...(closed ? [$createMarkerNode("wj", "closing")] : []),
          ),
        ),
      );
    },
    <>
      <ArrowNavigationPlugin viewOptions={getViewOptions(STANDARD_VIEW_MODE)} />
      <TrailingNoteCaretGuardPlugin />
    </>,
  );
  const stuffEnd = editor.getEditorState().read(() => stuff.getTextContentSize());
  return { editor, stuff: stuff!, stuffEnd, wj: wj!, note: note! };
}

describe("ArrowNavigationPlugin: a collapsed note that ends an unclosed char span", () => {
  it("crosses the note whole on the forward press, landing past it in the span", async () => {
    const { editor, stuff, stuffEnd, wj, note } = await spanEnvironment(false);
    updateSelection(editor, stuff, stuffEnd);

    await pressKey(editor, "ArrowRight");
    await dispatchSelectionChange(editor);

    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      const anchorNode = selection.anchor.getNode();
      expect(note.is(anchorNode) || $hasAncestor(anchorNode, note)).toBe(false);
      const host = wj.getLastChild();
      if (!$isTextNode(host)) throw new Error("expected a text host past the note");
      expect(host.getTextContent()).toBe(CURSOR_PLACEHOLDER_CHAR);
      expect(selection.anchor.key).toBe(host.getKey());
      expect(note.getTextContent()).not.toContain(CURSOR_PLACEHOLDER_CHAR);
    });
  });

  it("crosses the note whole again on the backward press", async () => {
    const { editor, stuff, stuffEnd, note } = await spanEnvironment(false);
    updateSelection(editor, stuff, stuffEnd);
    await pressKey(editor, "ArrowRight");
    await dispatchSelectionChange(editor);

    // Read where the press itself lands; what happens once the host it leaves is taken away is the
    // guard's business, pinned with it. The press and the read therefore share one task, with no
    // `await` between them: the press's DOM selection write queues a `selectionchange` that jsdom
    // delivers on a timer, and when that runs first, the guard's removal commit makes Lexical focus
    // this never-focused editor, jsdom's `focus()` collapses the DOM selection to the editor's
    // start, and the caret follows it there.
    act(() => {
      editor.dispatchCommand(
        KEY_DOWN_COMMAND,
        new KeyboardEvent("keydown", { key: "ArrowLeft", bubbles: true, cancelable: true }),
      );
    });

    editor.read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      const anchorNode = selection.anchor.getNode();
      expect(note.is(anchorNode) || $hasAncestor(anchorNode, note)).toBe(false);
      // Before the note: the end of the text ahead of it, or the span's slot at the note.
      const atStuffEnd = anchorNode.is(stuff) && selection.anchor.offset === stuffEnd;
      const atNoteSlot =
        selection.anchor.type === "element" &&
        anchorNode.is(note.getParent()) &&
        selection.anchor.offset === note.getIndexWithinParent();
      expect(atStuffEnd || atNoteSlot).toBe(true);
    });
  });

  it("leaves a closed span, whose closing glyph renders past the note, to the glyph", async () => {
    const { editor, stuff, stuffEnd, wj, note } = await spanEnvironment(true);
    updateSelection(editor, stuff, stuffEnd);

    await pressKey(editor, "ArrowRight");
    await dispatchSelectionChange(editor);

    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      const anchorNode = selection.anchor.getNode();
      expect(note.is(anchorNode) || $hasAncestor(anchorNode, note)).toBe(false);
      expect(anchorNode.is(wj.getLastChild())).toBe(true);
      expect(
        wj.getChildren().some((child) => child.getTextContent().includes(CURSOR_PLACEHOLDER_CHAR)),
      ).toBe(false);
    });
  });
});
