/**
 * A delete from a caret right against a construct standard view shows read-only — a figure, a
 * sidebar, a table — does nothing, in every structure protection mode.
 *
 * Left to the native delete, the first press steps into the construct and the second guts it: a
 * figure loses its caption, a sidebar's first paragraph is pulled out into the paragraph before it.
 * Views that hide these constructs ask the host before deleting them (`onHiddenContentDelete`); that
 * question is not asked in standard view, where they are shown.
 */
import { editorView, mountInView, MountedEditor } from "./editorViews.test-helpers";
import { installSelectionModify, press } from "./typingFidelityOracle.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getRoot,
  DELETE_LINE_COMMAND,
  DELETE_WORD_COMMAND,
  SELECTION_CHANGE_COMMAND,
} from "lexical";
import { StructureProtectionMode } from "shared-react";
import { describe, expect, it } from "vitest";

installSelectionModify();

function usjOf(content: MarkerContent[]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["Genesis"] },
      { type: "chapter", marker: "c", number: "1" },
      ...content,
    ],
  };
}

/** `src` is stored under USX/USJ's `file`, which the USJ type does not declare. */
const FIGURE = {
  type: "figure",
  marker: "fig",
  file: "a.jpg",
  content: ["caption"],
} as unknown as MarkerObject;

const DOCS: [string, Usj][] = [
  [
    "a sidebar",
    usjOf([
      { type: "para", marker: "p", content: ["one"] },
      {
        type: "sidebar",
        marker: "esb",
        content: [
          { type: "para", marker: "p", content: ["inside"] },
          { type: "para", marker: "p", content: ["more"] },
        ],
      },
      { type: "para", marker: "p", content: ["two"] },
    ]),
  ],
  ["a figure", usjOf([{ type: "para", marker: "p", content: ["one", FIGURE, "two"] }])],
  [
    "a table",
    usjOf([
      { type: "para", marker: "p", content: ["one"] },
      {
        type: "table",
        content: [
          {
            type: "table:row",
            marker: "tr",
            content: [{ type: "table:cell", marker: "tc1", align: "start", content: ["cell"] }],
          },
        ],
      },
      { type: "para", marker: "p", content: ["two"] },
    ]),
  ],
];

/** `undefined` is Power mode: no structure protection. */
const MODES: (StructureProtectionMode | undefined)[] = [undefined, "guarded", "protected"];

/** Places a collapsed caret in the text node reading exactly `text`, at `offset`. */
async function caretIn(m: MountedEditor, text: string, offset: number): Promise<void> {
  await act(async () => {
    m.lexical.update(() => {
      const node = $getRoot()
        .getAllTextNodes()
        .find((candidate) => candidate.getTextContent() === text);
      if (!node) throw new Error(`no text node reading "${text}"`);
      node.select(offset, offset);
      m.lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    });
    await Promise.resolve();
  });
}

describe("a delete against a read-only construct in standard view does nothing", () => {
  for (const mode of MODES) {
    describe(`with structure protection ${mode ?? "off"}`, () => {
      it.each(DOCS)("Delete just before %s, pressed three times", async (_, usj) => {
        const m = await mountInView(usj, editorView("standard"), {
          structureProtectionMode: mode,
        });
        await caretIn(m, "one", 3);
        for (let i = 0; i < 3; i++) {
          await press(m, "Delete");
          expect(m.ref.current?.getUsj()).toEqual(usj);
        }
        m.unmount();
      });

      it("Backspace just after a figure, pressed three times", async () => {
        const [, usj] = DOCS[1];
        const m = await mountInView(usj, editorView("standard"), {
          structureProtectionMode: mode,
        });
        await caretIn(m, "two", 0);
        for (let i = 0; i < 3; i++) {
          await press(m, "Backspace");
          expect(m.ref.current?.getUsj()).toEqual(usj);
        }
        m.unmount();
      });

      it.each([
        ["word", DELETE_WORD_COMMAND],
        ["line", DELETE_LINE_COMMAND],
      ] as const)("a forward %s delete just before a figure", async (_, command) => {
        const [, usj] = DOCS[1];
        const m = await mountInView(usj, editorView("standard"), {
          structureProtectionMode: mode,
        });
        await caretIn(m, "one", 3);
        await act(async () => {
          m.lexical.dispatchCommand(command, false);
          await Promise.resolve();
        });
        expect(m.ref.current?.getUsj()).toEqual(usj);
        m.unmount();
      });
    });
  }

  it("still deletes the text before a figure", async () => {
    const [, usj] = DOCS[1];
    const m = await mountInView(usj, editorView("standard"));
    await caretIn(m, "one", 2);
    await press(m, "Delete");
    expect(m.ref.current?.getUsj()).toEqual(
      usjOf([{ type: "para", marker: "p", content: ["on", FIGURE, "two"] }]),
    );
    m.unmount();
  });
});
