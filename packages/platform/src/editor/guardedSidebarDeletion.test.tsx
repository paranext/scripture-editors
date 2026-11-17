/**
 * Delete at the end of a paragraph right before a block that is not a paragraph: a sidebar, or a
 * table.
 *
 * There is no paragraph after the caret for a Delete to merge up, so `"guarded"` structure
 * protection (Simple mode) and `"protected"` both refuse the key, leaving the document as it was.
 * Left to the native delete, it would pull the sidebar's first paragraph out of the sidebar and
 * into the paragraph before it.
 */
import {
  EDITING_VIEW_NAMES,
  editorView,
  enabledViews,
  mountInView,
} from "./editorViews.test-helpers";
import { installSelectionModify, press } from "./typingFidelityOracle.test-helpers";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, $isElementNode, $isTextNode, SELECTION_CHANGE_COMMAND } from "lexical";
import { StructureProtectionMode } from "shared-react";
import { describe, expect, it } from "vitest";

installSelectionModify();

function usjOf(block: MarkerContent): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["Genesis"] },
      { type: "chapter", marker: "c", number: "1" },
      { type: "para", marker: "p", content: ["one"] },
      block,
      { type: "para", marker: "p", content: ["two"] },
    ],
  };
}

const BLOCKS: [string, Usj][] = [
  [
    "a sidebar",
    usjOf({
      type: "sidebar",
      marker: "esb",
      content: [
        { type: "para", marker: "p", content: ["inside"] },
        { type: "para", marker: "p", content: ["more"] },
      ],
    }),
  ],
  [
    "a table",
    usjOf({
      type: "table",
      content: [
        {
          type: "table:row",
          marker: "tr",
          content: [{ type: "table:cell", marker: "tc1", align: "start", content: ["cell"] }],
        },
      ],
    }),
  ],
];

/** Root child index of the paragraph `"one"` before the block. */
const BEFORE_BLOCK = 2;

const MODES: StructureProtectionMode[] = ["guarded", "protected"];

describe("Delete at the end of a paragraph before a non-paragraph block is refused", () => {
  for (const view of enabledViews(EDITING_VIEW_NAMES)) {
    describe(`in ${view} view`, () => {
      for (const mode of MODES) {
        it.each(BLOCKS)(
          `${mode}: before %s, both presses leave the document alone`,
          async (_, usj) => {
            const m = await mountInView(usj, editorView(view), { structureProtectionMode: mode });
            await act(async () => {
              m.lexical.update(() => {
                const block = $getRoot().getChildAtIndex(BEFORE_BLOCK);
                if (!$isElementNode(block)) throw new Error(`no block at ${BEFORE_BLOCK}`);
                const text = block.getLastChild();
                if (!$isTextNode(text))
                  throw new Error(`block ${BEFORE_BLOCK} does not end in text`);
                text.select(text.getTextContentSize(), text.getTextContentSize());
                m.lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
              });
              await Promise.resolve();
            });

            await press(m, "Delete");
            expect(m.ref.current?.getUsj()).toEqual(usj);
            // Nothing is armed, so the host shows no "press again" hint.
            expect(m.lexical.getRootElement()?.classList.contains("verse-delete-armed")).toBe(
              false,
            );
            await press(m, "Delete");
            expect(m.ref.current?.getUsj()).toEqual(usj);
            m.unmount();
          },
        );
      }
    });
  }
});
