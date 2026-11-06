/**
 * A note pasted in the editor opens like any other: clicking its caller calls the host's
 * `noteCallerOnClick`. A node copy cannot carry a click handler, so a pasted caller gets the editor's
 * own.
 */
import { editorView, enabledViews, mountInView } from "./editorViews.test-helpers";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $setSelection,
  COPY_COMMAND,
  LexicalEditor,
  PASTE_COMMAND,
  TextNode,
} from "lexical";
import { NoteCallerOnClick } from "shared-react";

const usj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    {
      type: "para",
      marker: "p",
      content: [
        "Before the note ",
        {
          type: "note",
          marker: "f",
          caller: "+",
          content: [
            { type: "char", marker: "fr", content: ["1:1 "] },
            { type: "char", marker: "ft", content: ["The note text."] },
          ],
        },
        " after the note.",
      ],
    },
    { type: "para", marker: "p", content: ["The destination paragraph."] },
  ],
};

/** The one text node whose text contains `text`, and where `offset` into `text` falls in it. */
function $at(text: string, offset: number): [TextNode, number] {
  const hits = $getRoot()
    .getAllTextNodes()
    .filter((node) => node.getTextContent().includes(text));
  if (hits.length !== 1) throw new Error(`${hits.length} text nodes hold "${text}", not one`);
  return [hits[0], hits[0].getTextContent().indexOf(text) + offset];
}

async function select(editor: LexicalEditor, from: [string, number], to = from): Promise<void> {
  await act(async () =>
    editor.update(
      () => {
        const [anchorNode, anchorOffset] = $at(...from);
        const [focusNode, focusOffset] = $at(...to);
        const selection = $createRangeSelection();
        selection.anchor.set(anchorNode.getKey(), anchorOffset, "text");
        selection.focus.set(focusNode.getKey(), focusOffset, "text");
        $setSelection(selection);
      },
      { discrete: true },
    ),
  );
}

function clipboardEvent(type: string, store: Map<string, string>): ClipboardEvent {
  const event = new ClipboardEvent(type, { bubbles: true, cancelable: true });
  Object.defineProperty(event, "clipboardData", {
    value: {
      get types() {
        return [...store.keys()];
      },
      files: [],
      getData: (format: string) => store.get(format) ?? "",
      setData: (format: string, data: string) => store.set(format, data),
      clearData: () => store.clear(),
    },
  });
  return event;
}

async function settle(): Promise<void> {
  await act(async () => {
    for (let i = 0; i < 3; i += 1) await new Promise((resolve) => setTimeout(resolve, 0));
  });
}

describe.each([...enabledViews(["paragraph-structure", "standard"] as const)])(
  "a note pasted in the %s view",
  (viewName) => {
    it("opens through the host's noteCallerOnClick, as the copied one does", async () => {
      const noteCallerOnClick = vi.fn<NoteCallerOnClick>();
      const mounted = await mountInView(usj, editorView(viewName), {
        nodes: { noteCallerOnClick },
      });
      try {
        const { lexical } = mounted;
        await select(lexical, ["Before the note ", 7], [" after the note.", 6]);
        const store = new Map<string, string>();
        await act(async () =>
          lexical.update(() => {
            lexical.dispatchCommand(COPY_COMMAND, clipboardEvent("copy", store));
          }),
        );
        await settle();
        expect(store.has("application/x-lexical-editor")).toBe(true);

        await select(lexical, ["The destination paragraph.", "The destination paragraph.".length]);
        await act(async () =>
          lexical.update(() => {
            lexical.dispatchCommand(PASTE_COMMAND, clipboardEvent("paste", new Map(store)));
          }),
        );
        await settle();

        const callers = [
          ...(lexical.getRootElement()?.querySelectorAll("button[data-caller-id]") ?? []),
        ];
        expect(callers).toHaveLength(2);
        for (const caller of callers) {
          if (!(caller instanceof HTMLElement)) throw new Error("a note caller is no element");
          await act(async () => caller.click());
        }

        // Once for the copied note, once for the pasted one.
        expect(noteCallerOnClick).toHaveBeenCalledTimes(2);
        const [copiedNote, pastedNote] = noteCallerOnClick.mock.calls.map((call) => call[1]);
        expect(pastedNote).not.toBe(copiedNote);
      } finally {
        mounted.unmount();
      }
    });
  },
);
