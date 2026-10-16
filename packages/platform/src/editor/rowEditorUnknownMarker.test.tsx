/**
 * An unknown marker committed inside a note's run, in a host's note editor that loads the note the
 * way the footnotes pane's row editor does: into an empty wrapper paragraph, through
 * `applyUpdate` of the note op the Scripture text gives for it. With a `\cat` category in the
 * note, the note's content is re-tokenized after the commit, and the unknown marker's span must
 * stay where it was typed - a sibling of the run it ended, not nested inside it (`\+df`) - with
 * the caret still right after it, so what is typed next is saved in it.
 */
import { EditorOptions } from "./editor.model";
import { options, renderEditor, requireDefined } from "./noteEditorRef.test-helpers";
import { getViewOptions, STANDARD_VIEW_MODE } from "shared-react";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { afterAll, beforeAll } from "vitest";
import {
  $getSelection,
  $isRangeSelection,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  LexicalEditor,
} from "lexical";

const originalRangeRect = Range.prototype.getBoundingClientRect;
beforeAll(() => {
  Range.prototype.getBoundingClientRect = () =>
    ({
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: 0,
      height: 0,
      toJSON: () => ({}),
    }) as DOMRect;
});
afterAll(() => {
  Range.prototype.getBoundingClientRect = originalRangeRect;
});

const originalFocus = HTMLElement.prototype.focus;
beforeAll(() => {
  HTMLElement.prototype.focus = function focus(focusOptions?: FocusOptions) {
    const selection = document.getSelection();
    const range = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : undefined;
    originalFocus.call(this, focusOptions);
    if (range && selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };
});
afterAll(() => {
  HTMLElement.prototype.focus = originalFocus;
});

const rowEditorOptions: EditorOptions = {
  ...options,
  view: {
    ...requireDefined(getViewOptions(STANDARD_VIEW_MODE), "standard view options"),
    noteMode: "expanded",
    isNoteShellEditable: false,
    showParaMarkerPrefixes: false,
  },
};

function usjWith(noteObject: MarkerObject): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["Test Book"] },
      { type: "chapter", marker: "c", number: "1" },
      {
        type: "para",
        marker: "p",
        content: [{ type: "verse", marker: "v", number: "1" }, "before ", noteObject],
      },
    ],
  };
}

async function typeText(lexical: LexicalEditor, text: string) {
  for (const character of text)
    await act(async () => {
      lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, character);
    });
}

async function syncDomSelection(lexical: LexicalEditor) {
  const point = lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) return undefined;
    const { key, offset, type } = selection.anchor;
    return { key, offset, type };
  });
  if (!point) return;
  const element = requireDefined(lexical.getElementByKey(point.key), "caret element");
  const domNode =
    point.type === "text" ? requireDefined(element.firstChild, "caret text") : element;
  await act(async () => {
    document.getSelection()?.collapse(domNode, point.offset);
  });
}

async function restCaret(lexical: LexicalEditor) {
  await syncDomSelection(lexical);
  await act(async () => {
    document.dispatchEvent(new Event("selectionchange"));
  });
  await syncDomSelection(lexical);
}

/** The text before the caret in the node the caret is in. */
function textBeforeCaret(lexical: LexicalEditor): string | undefined {
  return lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) return undefined;
    return selection.anchor.getNode().getTextContent().slice(0, selection.anchor.offset);
  });
}

function noteContent(usj: Usj | undefined): MarkerObject | undefined {
  const para = usj?.content[0];
  if (typeof para !== "object") return undefined;
  return para.content?.find(
    (item): item is MarkerObject => typeof item === "object" && item.type === "note",
  );
}

describe("committing an unknown marker in a note editor loaded like the row editor", () => {
  it.each([
    ["without a category", undefined],
    ["with a \\cat category", "People"],
  ])("keeps it where it was typed and saves what follows, %s", async (_label, category) => {
    const note = {
      type: "note",
      marker: "f",
      caller: "+",
      ...(category !== undefined && { category }),
      content: [
        { type: "char", marker: "fr", closed: "false", content: ["1.8 "] },
        { type: "char", marker: "ft", closed: "false", content: ["asdf"] },
      ],
    } as MarkerObject;
    const text = await renderEditor(usjWith(note));
    const [noteOp] = requireDefined(text.editorRef.getNoteOps(0), "note op");
    const { editorRef, lexical } = await renderEditor(
      { type: "USJ", version: "3.1", content: [{ type: "para" } as MarkerObject] },
      rowEditorOptions,
    );
    await act(async () => editorRef.applyUpdate([noteOp]));
    // The end of `asdf`: `1.8 ` is the `\fr` run's text.
    await act(async () => editorRef.selectNoteTextOffset(0, 8));
    await restCaret(lexical);
    await typeText(lexical, " ");
    await restCaret(lexical);

    await act(async () => {
      editorRef.commitTypedMarker("df");
    });
    await restCaret(lexical);
    await typeText(lexical, "Z");
    await restCaret(lexical);

    expect(textBeforeCaret(lexical)?.endsWith("Z")).toBe(true);
    // The caret moving on settles whatever is left pending, and the span must not move then.
    await act(async () => editorRef.selectNoteTextOffset(0, 2));
    await restCaret(lexical);
    await act(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 1200);
      });
    });

    const saved = noteContent(editorRef.getUsj());
    expect(saved?.content).toEqual([
      { type: "char", marker: "fr", closed: "false", content: ["1.8 "] },
      { type: "char", marker: "ft", closed: "false", content: ["asdf "] },
      { type: "char", marker: "df", closed: "false", content: ["Z"] },
    ]);
    if (category !== undefined) expect(saved).toMatchObject({ category });
  });
});
