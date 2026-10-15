/**
 * Scribe's two USJ adaptors build an expanded note's editable caller text (` +⍽`) the way the
 * platform adaptor does: as a node Lexical never merges with the plain content text beside it.
 * Merged, the caller no longer reads as one and the note saves its caller's bytes as content.
 */
import {
  initialize as initializeNoteAdaptor,
  reset as resetNoteAdaptor,
  serializeEditorState as serializeNoteEditorState,
} from "./note-usj-editor.adaptor";
import { initialize, reset, serializeEditorState } from "./usj-editor.adaptor";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { $getRoot, $isTextNode, SerializedEditorState } from "lexical";
import { $isNoteNode, getEditableCallerText, TypedMarkNode } from "shared";
import { getViewOptions, UNFORMATTED_VIEW_MODE, usjReactNodes } from "shared-react";
import { describe, expect, it } from "vitest";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { createBasicTestEnvironment } from "../../../../../libs/shared/src/nodes/usj/test.utils";

const usj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    {
      type: "para",
      marker: "p",
      content: ["a", { type: "note", marker: "f", caller: "+", content: ["note text"] }, " b"],
    },
  ],
};

const viewOptions = getViewOptions(UNFORMATTED_VIEW_MODE);

describe.each([
  [
    "usj-editor.adaptor",
    (): SerializedEditorState => {
      initialize(undefined, undefined);
      reset();
      return serializeEditorState(usj, viewOptions);
    },
  ],
  [
    "note-usj-editor.adaptor",
    (): SerializedEditorState => {
      initializeNoteAdaptor(undefined, undefined);
      resetNoteAdaptor();
      return serializeNoteEditorState(usj, viewOptions);
    },
  ],
])("%s: an expanded note's caller beside plain content", (_name, serialize) => {
  it("stays the caller when the content beside it is edited", () => {
    const state = serialize();
    const { editor } = createBasicTestEnvironment([TypedMarkNode, ...usjReactNodes]);
    editor.setEditorState(editor.parseEditorState(JSON.stringify({ root: state.root })));

    editor.update(
      () => {
        const content = $getRoot()
          .getAllTextNodes()
          .find((node) => node.getTextContent() === "note text");
        if (!content) throw new Error("expected the note's content text");
        content.setTextContent("note texts");
      },
      { discrete: true },
    );

    const caller = editor.getEditorState().read(() => {
      const note = $getRoot()
        .getAllTextNodes()
        .map((node) => node.getParent())
        .find($isNoteNode);
      return note
        ?.getChildren()
        .filter($isTextNode)
        .map((node) => node.getTextContent());
    });
    expect(caller).toContain(getEditableCallerText("+"));
    expect(caller).toContain("note texts");
  });
});
