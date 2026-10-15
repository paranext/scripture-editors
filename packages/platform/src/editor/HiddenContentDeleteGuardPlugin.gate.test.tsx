import Editor from "./Editor";
import { act, render } from "@testing-library/react";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { createRef } from "react";
import { $getRoot, COMMAND_PRIORITY_CRITICAL, KEY_DOWN_COMMAND, LexicalEditor } from "lexical";
import { EditorRefPlugin } from "@lexical/react/LexicalEditorRefPlugin";
import {
  FORMATTED_VIEW_MODE,
  getViewOptions,
  HiddenContentDeleteHandler,
  STANDARD_VIEW_MODE,
} from "shared-react";
import { describe, expect, it, vi } from "vitest";

// The Editor-level gate mounts shared-react's `HiddenContentDeleteGuardPlugin` enabled only where
// hidden content is hidden: every marker mode but "editable". Standard view shows a figure's
// markers as editable text, and editing next to them is the marker-edit engine's business, so the
// guard must never ask there. These tests render the real Editor (no mock) and press Backspace
// right after a figure, then check whether the host's handler was asked.

const usjWithFigure = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["Test Book"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [
        { type: "verse", marker: "v", number: "1" },
        "before",
        { type: "figure", marker: "fig", file: "pic.jpg", content: ["caption"] },
        "after",
      ],
    },
  ],
} as unknown as Usj;

// Never answers: only whether the guard asks is under test, and settling an answer focuses the
// editor, which scrolls through layout APIs jsdom does not implement.
function neverAnswering() {
  return vi.fn<HiddenContentDeleteHandler>(() => new Promise(() => undefined));
}

async function renderEditor(
  viewMode: string,
  onHiddenContentDelete: HiddenContentDeleteHandler,
): Promise<LexicalEditor> {
  const lexicalRef = createRef<LexicalEditor>();
  await act(async () => {
    render(
      <Editor
        defaultUsj={usjWithFigure}
        options={{ view: getViewOptions(viewMode), onHiddenContentDelete }}
      >
        <EditorRefPlugin editorRef={lexicalRef} />
      </Editor>,
    );
  });
  if (!lexicalRef.current) throw new Error("lexical editor was not captured");
  // Registered after the guard at the same priority, so it runs just after it: claims any press the
  // guard let through, keeping the rest of the editor's editing (and its jsdom-unsafe scrolling)
  // out of a test about the guard alone.
  lexicalRef.current.registerCommand(KEY_DOWN_COMMAND, () => true, COMMAND_PRIORITY_CRITICAL);
  return lexicalRef.current;
}

/** Puts the caret at the start of the text right after the figure and presses Backspace. */
async function backspaceAfterFigure(editor: LexicalEditor) {
  await act(async () => {
    editor.update(
      () => {
        const after = $getRoot()
          .getAllTextNodes()
          .find((node) => node.getTextContent().startsWith("after"));
        if (!after) throw new Error("no text after the figure");
        after.select(0, 0);
      },
      { discrete: true },
    );
  });
  await act(async () => {
    editor.dispatchCommand(
      KEY_DOWN_COMMAND,
      new KeyboardEvent("keydown", { key: "Backspace", bubbles: true, cancelable: true }),
    );
  });
}

describe("HiddenContentDeleteGuardPlugin view gate", () => {
  it("asks before Backspace reaches a hidden figure in Formatted view", async () => {
    const handler = neverAnswering();
    const editor = await renderEditor(FORMATTED_VIEW_MODE, handler);

    await backspaceAfterFigure(editor);

    expect(handler).toHaveBeenCalledWith(
      expect.objectContaining({ items: [expect.objectContaining({ marker: "fig" })] }),
    );
  });

  it("never asks in Standard view, where the figure's markers are shown", async () => {
    const handler = neverAnswering();
    const editor = await renderEditor(STANDARD_VIEW_MODE, handler);

    await backspaceAfterFigure(editor);

    expect(handler).not.toHaveBeenCalled();
  });
});
