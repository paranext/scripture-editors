import Editor from "./Editor";
import { act, render } from "@testing-library/react";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { createRef } from "react";
import {
  $getRoot,
  COMMAND_PRIORITY_CRITICAL,
  KEY_DOWN_COMMAND,
  LexicalEditor,
  PASTE_COMMAND,
} from "lexical";
import { EditorRefPlugin } from "@lexical/react/LexicalEditorRefPlugin";
import {
  FORMATTED_VIEW_MODE,
  getViewOptions,
  HiddenContentDeleteHandler,
  STANDARD_VIEW_MODE,
  StructureProtectionMode,
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
  structureProtectionMode?: StructureProtectionMode,
): Promise<LexicalEditor> {
  const lexicalRef = createRef<LexicalEditor>();
  await act(async () => {
    render(
      <Editor
        defaultUsj={usjWithFigure}
        options={{ view: getViewOptions(viewMode), structureProtectionMode, onHiddenContentDelete }}
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

/**
 * Puts the caret at the start of the text right after the figure, presses Backspace, and waits the
 * task after which the guard asks.
 */
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
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
}

/** Selects from inside the text before the figure to inside the text after it, pastes `html`, and
 * waits the task after which the guard asks. */
async function pasteHtmlOverFigure(editor: LexicalEditor, html: string) {
  await act(async () => {
    editor.update(
      () => {
        const texts = $getRoot().getAllTextNodes();
        const before = texts.find((node) => node.getTextContent().startsWith("before"));
        const after = texts.find((node) => node.getTextContent().startsWith("after"));
        if (!before || !after) throw new Error("no text either side of the figure");
        before.select(3, 3).focus.set(after.getKey(), 2, "text");
      },
      { discrete: true },
    );
  });
  // jsdom's `ClipboardEvent` drops `clipboardData` from its init.
  const event = new ClipboardEvent("paste", { cancelable: true });
  const flavors: { [type: string]: string } = { "text/html": html, "text/plain": "" };
  Object.defineProperty(event, "clipboardData", {
    value: {
      types: Object.keys(flavors),
      files: [],
      getData: (type: string) => flavors[type] ?? "",
    },
  });
  await act(async () => {
    editor.dispatchCommand(PASTE_COMMAND, event);
    await new Promise((resolve) => setTimeout(resolve, 0));
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

  // Protected structure's sanitizer puts a space between the pasted paragraphs, which is left once
  // their `\` are filtered out, so the paste still replaces the figure.
  it("asks before a paste of paragraphs holding only `\\` replaces a figure under protected structure", async () => {
    const handler = neverAnswering();
    const editor = await renderEditor(FORMATTED_VIEW_MODE, handler, "protected");

    await pasteHtmlOverFigure(editor, "<p>\\</p><p>\\</p>");

    expect(handler).toHaveBeenCalledWith(
      expect.objectContaining({ items: [expect.objectContaining({ marker: "fig" })] }),
    );
  });

  it("does not ask about a paste of one paragraph holding only `\\` under protected structure, which inserts nothing", async () => {
    const handler = neverAnswering();
    const editor = await renderEditor(FORMATTED_VIEW_MODE, handler, "protected");

    await pasteHtmlOverFigure(editor, "<p>\\</p>");

    expect(handler).not.toHaveBeenCalled();
  });
});
