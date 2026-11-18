/**
 * A copy or cut of a range that lies wholly inside one collapsed note takes the whole note. Such a
 * note shows only its caller, so a range inside it cannot be a choice of part of it: copying that
 * part put `\f - \cat things\cat*` on the clipboard with the rest of the note missing, and the cut
 * then removed the whole note, so cutting and pasting back lost everything after the category.
 */
import { editorView, MountedEditor, mountInView } from "./editorViews.test-helpers";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $setSelection,
  COPY_COMMAND,
  CUT_COMMAND,
  PASTE_COMMAND,
} from "lexical";
import { $isNoteNode, NoteNode } from "shared";
import { describe, expect, it } from "vitest";

const usj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["Test"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [
        { type: "verse", marker: "v", number: "1" },
        "before",
        {
          type: "note",
          marker: "f",
          caller: "-",
          category: "things",
          content: [
            { type: "char", marker: "fr", closed: "false", content: ["1.3 "] },
            { type: "char", marker: "fq", closed: "false", content: ["light"] },
            {
              type: "char",
              marker: "ft",
              closed: "false",
              content: ["A ", { type: "char", marker: "nd", content: ["ho"] }],
            },
            { type: "char", marker: "ft", closed: "false", content: ["B"] },
          ],
        },
        " after",
      ],
    },
  ],
};

function clipboardEvent(store: Map<string, string>): ClipboardEvent {
  const event = new ClipboardEvent("copy", { bubbles: true, cancelable: true });
  Object.defineProperty(event, "clipboardData", {
    value: {
      get types() {
        return [...store.keys()];
      },
      files: [],
      getData: (type: string) => store.get(type) ?? "",
      setData: (type: string, data: string) => store.set(type, data),
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

function $note(): NoteNode {
  const note = $getRoot()
    .getAllTextNodes()
    .map((node) => node.getParent())
    .find($isNoteNode);
  if (!note) throw new Error("no note in the document");
  return note;
}

/** From the start of the note's children to the start of its last one, both ends inside it. */
function $selectInsideNote(): void {
  const note = $note();
  const selection = $createRangeSelection();
  selection.anchor.set(note.getKey(), 0, "element");
  selection.focus.set(note.getKey(), note.getChildrenSize() - 1, "element");
  $setSelection(selection);
}

/** The note itself, from its parent's slot before it to the slot past it. */
function $selectWholeNote(): void {
  const note = $note();
  const parent = note.getParentOrThrow();
  const index = note.getIndexWithinParent();
  const selection = $createRangeSelection();
  selection.anchor.set(parent.getKey(), index, "element");
  selection.focus.set(parent.getKey(), index + 1, "element");
  $setSelection(selection);
}

async function clip(
  { lexical }: MountedEditor,
  $select: () => void,
  command: typeof COPY_COMMAND | typeof CUT_COMMAND,
): Promise<Map<string, string>> {
  await act(async () => lexical.update($select, { discrete: true }));
  await settle();
  const store = new Map<string, string>();
  await act(async () =>
    lexical.update(() => {
      lexical.dispatchCommand(command, clipboardEvent(store));
    }),
  );
  await settle();
  return store;
}

async function settledContent(mounted: MountedEditor): Promise<MarkerContent[]> {
  await act(async () => mounted.lexical.update(() => $getRoot().selectEnd(), { discrete: true }));
  act(() => mounted.ref.current?.commitPendingMarkerEdits());
  await settle();
  return mounted.ref.current?.getUsj()?.content ?? [];
}

// The app's two editable surfaces with collapsed notes: Power mode's Standard view and Simple mode.
describe.each(["standard", "paragraph-structure"])(
  "a range inside a collapsed note in the %s view",
  (viewName) => {
    it("copies the whole note", async () => {
      const whole = await mountInView(usj, editorView(viewName));
      const wholeCopy = await clip(whole, $selectWholeNote, COPY_COMMAND);
      whole.unmount();
      const inside = await mountInView(usj, editorView(viewName));
      const insideCopy = await clip(inside, $selectInsideNote, COPY_COMMAND);
      inside.unmount();

      expect(insideCopy.get("text/plain")).toBe(wholeCopy.get("text/plain"));
    });

    it("cuts the whole note, which pastes back as it was", async () => {
      const mounted = await mountInView(usj, editorView(viewName));
      const store = await clip(mounted, $selectInsideNote, CUT_COMMAND);
      await act(async () =>
        mounted.lexical.update(() => {
          mounted.lexical.dispatchCommand(
            PASTE_COMMAND,
            clipboardEvent(
              new Map([
                ["text/html", store.get("text/html") ?? ""],
                ["text/plain", store.get("text/plain") ?? ""],
              ]),
            ),
          );
        }),
      );
      await settle();

      expect(await settledContent(mounted)).toEqual(usj.content);
      mounted.unmount();
    });
  },
);
