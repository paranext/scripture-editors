/**
 * Inserting a verse number at the end of a paragraph leaves the caret in the NEW verse, so typing
 * starts the new verse rather than extending the previous one. With the markers hidden (the view
 * Platform.Bible's Simple mode uses) the number is an immutable decorator, and the caret rests in
 * the host `EmptyVerseCaretGuardPlugin` puts after it.
 */
import { mountViewEditor, requireViewOptions } from "./settledGetUsj.test-helpers";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { SerializedVerseRef } from "@sillsdev/scripture";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  LexicalEditor,
  SELECTION_CHANGE_COMMAND,
} from "lexical";
import { $isCaretHost, $isParaNode, $isVerseNode } from "shared";
import {
  $isImmutableVerseNode,
  PARAGRAPH_STRUCTURE_VIEW_MODE,
  STANDARD_VIEW_MODE,
} from "shared-react";
import { describe, expect, it } from "vitest";

const scrRef = { book: "GEN", chapterNum: 1, verseNum: 1 };

const lastVerseUsj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [{ type: "verse", marker: "v", number: "1" }, "hello world"],
    },
  ],
};

/** jsdom fires no DOM `selectionchange`, which is what reaches the caret-host plugins in an app. */
async function dispatchSelectionChange(lexical: LexicalEditor): Promise<void> {
  await act(async () => {
    lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
  });
}

/** Mount `lastVerseUsj` under `viewMode` and insert a verse at the end of verse 1's text. */
async function insertVerseAtEndOfLastVerse(
  viewMode: string,
  onScrRefChange?: (scrRef: SerializedVerseRef) => void,
) {
  const mounted = await mountViewEditor(lastVerseUsj, requireViewOptions(viewMode), {
    scrRef,
    onScrRefChange,
  });
  const { ref, lexical } = mounted;
  await act(async () =>
    lexical.update(() => {
      const text = $getRoot()
        .getAllTextNodes()
        .find((node) => node.getTextContent() === "hello world");
      if (!$isTextNode(text)) throw new Error("fixture text node not found");
      text.selectEnd();
    }),
  );
  await act(async () => {
    ref.current?.insertMarker("v");
  });
  await dispatchSelectionChange(lexical);
  return mounted;
}

describe("inserting a verse at the end of a paragraph", () => {
  it.each([
    ["hidden (Simple)", PARAGRAPH_STRUCTURE_VIEW_MODE],
    ["editable (Standard)", STANDARD_VIEW_MODE],
  ])("reports the new verse as the current reference with markers %s", async (_label, viewMode) => {
    const reported: SerializedVerseRef[] = [];
    await insertVerseAtEndOfLastVerse(viewMode, (changed) => reported.push(changed));

    // The caret is in the new verse, so the host's scroll group (and linked views) follow it.
    expect(reported.at(-1)).toMatchObject({ book: "GEN", chapterNum: 1, verseNum: 2 });
  });

  it("hosts the caret right after the new verse number when markers are hidden", async () => {
    const { lexical } = await insertVerseAtEndOfLastVerse(PARAGRAPH_STRUCTURE_VIEW_MODE);

    lexical.getEditorState().read(() => {
      const para = $getRoot().getChildren().find($isParaNode);
      if (!para) throw new Error("Expected a ParaNode");
      const newVerse = para.getChildren().filter($isImmutableVerseNode).at(-1);
      if (!newVerse) throw new Error("Expected an inserted verse node");
      expect(newVerse.getNumber()).toBe("2");
      const host = newVerse.getNextSibling();
      expect($isCaretHost(host)).toBe(true);
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("Expected a range selection");
      expect(selection.isCollapsed()).toBe(true);
      expect(selection.focus.key).toBe(host?.getKey());
    });
  });

  it("rests the caret at the end of the new verse's marker text when markers are editable", async () => {
    const { lexical } = await insertVerseAtEndOfLastVerse(STANDARD_VIEW_MODE);

    lexical.getEditorState().read(() => {
      const para = $getRoot().getChildren().find($isParaNode);
      if (!para) throw new Error("Expected a ParaNode");
      const newVerse = para.getLastChild();
      if (!$isVerseNode(newVerse)) throw new Error("Expected an inserted editable verse");
      expect(newVerse.getNumber()).toBe("2");
      // An editable marker's own text hosts the caret, so no caret host is added after it.
      expect(para.getChildren().some($isCaretHost)).toBe(false);
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("Expected a range selection");
      expect(selection.isCollapsed()).toBe(true);
      expect(selection.focus.key).toBe(newVerse.getKey());
      expect(selection.focus.offset).toBe(newVerse.getTextContentSize());
    });
  });

  it.each([
    ["hidden (Simple)", PARAGRAPH_STRUCTURE_VIEW_MODE],
    ["editable (Standard)", STANDARD_VIEW_MODE],
  ])(
    "puts typed text in the new verse with markers %s, leaving the previous verse alone",
    async (_label, viewMode) => {
      const { ref, lexical } = await insertVerseAtEndOfLastVerse(viewMode);

      await act(async () => {
        lexical.update(() => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) selection.insertText("abc");
        });
      });

      const para = ref.current
        ?.getUsj()
        ?.content?.find((node) => typeof node !== "string" && node.type === "para");
      expect(para).toEqual({
        type: "para",
        marker: "p",
        content: [
          { type: "verse", marker: "v", number: "1" },
          "hello world ",
          { type: "verse", marker: "v", number: "2" },
          "abc",
        ],
      });
    },
  );
});
