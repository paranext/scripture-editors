/**
 * Edits that reach the editor as commands with no keydown (an input method's insertion, macOS
 * Ctrl+H) over a range that holds a verse marker, in the views that hide markers. The inline-range
 * edits are mounted ahead of the structure keyboard guards, so each case pins that the guards still
 * decide: `"protected"` refuses, `"guarded"` arms a two-step delete and lets the confirmed one go.
 */
import { EDITING_VIEWS, forEachView, mountInView } from "./editorViews.test-helpers";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  CONTROLLED_TEXT_INSERTION_COMMAND,
  DELETE_CHARACTER_COMMAND,
  LexicalEditor,
} from "lexical";
import { StructureProtectionMode } from "shared-react";
import { describe, expect, it } from "vitest";

const HIDDEN_MARKER_VIEWS = EDITING_VIEWS.filter(({ name }) => name !== "standard");

const BETWEEN_VERSES: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [
        { type: "verse", marker: "v", number: "1" },
        "abc ",
        { type: "verse", marker: "v", number: "2" },
        "def",
      ],
    },
  ],
};

forEachView(HIDDEN_MARKER_VIEWS, ({ view }) => {
  /** Mounts `BETWEEN_VERSES` with the range from inside "abc " to inside "def" selected. */
  async function mountWithRange(structureProtectionMode: StructureProtectionMode) {
    const mounted = await mountInView(BETWEEN_VERSES, view, { structureProtectionMode });
    await act(async () => {
      mounted.ref.current?.setSelection({
        start: { jsonPath: "$.content[2].content[1]", offset: 1 },
        end: { jsonPath: "$.content[2].content[3]", offset: 1 },
      });
    });
    return mounted;
  }

  async function dispatch(editor: LexicalEditor, run: () => void) {
    await act(async () => editor.update(run));
    await act(async () => {
      for (let i = 0; i < 3; i += 1) await new Promise((resolve) => setTimeout(resolve, 0));
    });
  }

  const verseNumbers = (usj: Usj | undefined) =>
    JSON.stringify(usj?.content)
      .match(/"number":"\d+"/g)
      ?.slice(1);

  describe("protected", () => {
    it("keeps both verses when text is inserted over the range without a keydown", async () => {
      const m = await mountWithRange("protected");

      await dispatch(m.lexical, () =>
        m.lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "x"),
      );

      expect(verseNumbers(m.ref.current?.getUsj())).toEqual(['"number":"1"', '"number":"2"']);
      expect(JSON.stringify(m.ref.current?.getUsj())).not.toContain("axef");
      m.unmount();
    });

    it("keeps both verses when a character delete arrives without a keydown", async () => {
      const m = await mountWithRange("protected");

      await dispatch(m.lexical, () => m.lexical.dispatchCommand(DELETE_CHARACTER_COMMAND, true));

      expect(verseNumbers(m.ref.current?.getUsj())).toEqual(['"number":"1"', '"number":"2"']);
      m.unmount();
    });
  });

  describe("guarded", () => {
    it("arms a delete without a keydown instead of removing the verse", async () => {
      const m = await mountWithRange("guarded");

      await dispatch(m.lexical, () => m.lexical.dispatchCommand(DELETE_CHARACTER_COMMAND, true));

      expect(verseNumbers(m.ref.current?.getUsj())).toEqual(['"number":"1"', '"number":"2"']);
      expect(m.lexical.getRootElement()?.classList.contains("verse-delete-armed")).toBe(true);
      m.unmount();
    });

    it("removes the verse when that delete is confirmed", async () => {
      const m = await mountWithRange("guarded");

      await dispatch(m.lexical, () => m.lexical.dispatchCommand(DELETE_CHARACTER_COMMAND, true));
      await dispatch(m.lexical, () => m.lexical.dispatchCommand(DELETE_CHARACTER_COMMAND, true));

      expect(verseNumbers(m.ref.current?.getUsj())).toEqual(['"number":"1"']);
      expect(JSON.stringify(m.ref.current?.getUsj())).toContain("aef");
      m.unmount();
    });

    it("lets typed text replace the range", async () => {
      const m = await mountWithRange("guarded");

      await dispatch(m.lexical, () =>
        m.lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "x"),
      );

      expect(JSON.stringify(m.ref.current?.getUsj())).toContain("axef");
      m.unmount();
    });
  });
});
