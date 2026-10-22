/**
 * The editor moves the caret itself when the host navigates it (ScriptureReferencePlugin). That
 * move must not cost the user's next edit its `onUsjChange`: the host schedules its saves from that
 * callback, so a single edit made right after a navigation, and then left, would never be saved.
 */
import { mountStandardViewEditor } from "./settledGetUsj.test-helpers";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, COMMAND_PRIORITY_LOW } from "lexical";
import { APP_PLACED_CARET_COMMAND } from "shared";
import { vi } from "vitest";

const twoVerseUsj: Usj = {
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
        "In the beginning ",
        { type: "verse", marker: "v", number: "2" },
        "the earth was",
      ],
    },
  ],
};

describe("an edit right after the host navigates the editor", () => {
  it("reaches onUsjChange", async () => {
    const onUsjChange = vi.fn();
    const mounted = await mountStandardViewEditor(twoVerseUsj, {
      onUsjChange,
      scrRef: { book: "GEN", chapterNum: 1, verseNum: 1 },
      onScrRefChange: vi.fn(),
    });

    // The move is still announced as the editor's own, which is what keeps the marker-edit engine
    // from reading it as the user leaving a pending edit.
    const announced = vi.fn(() => false);
    const unregister = mounted.lexical.registerCommand(
      APP_PLACED_CARET_COMMAND,
      announced,
      COMMAND_PRIORITY_LOW,
    );
    await mounted.rerenderWithScrRef({ book: "GEN", chapterNum: 1, verseNum: 2 });
    unregister();
    expect(announced).toHaveBeenCalledTimes(1);
    onUsjChange.mockClear();

    // The user's next edit. Where it lands does not matter — any edit after the navigation is the
    // one the navigation's commit could hide.
    await act(async () => {
      mounted.lexical.update(() => {
        const text = $getRoot()
          .getAllTextNodes()
          .find((node) => node.getTextContent() === "the earth was");
        if (!text) throw new Error("expected the verse text");
        text.setTextContent("the earth was!");
      });
      await Promise.resolve();
      await Promise.resolve();
    });

    expect(onUsjChange).toHaveBeenCalled();
    expect(JSON.stringify(onUsjChange.mock.calls.at(-1)?.[0])).toContain("the earth was!");
  });
});
