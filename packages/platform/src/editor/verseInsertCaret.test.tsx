/**
 * Inserting a verse number leaves the caret at the start of the NEW verse's content, so typing
 * starts the new verse: not extending the previous one when nothing follows the number, and not
 * inside a footnote that does. With the markers hidden (the view Platform.Bible's Simple mode uses)
 * the number is an immutable decorator, and at the end of a paragraph the caret rests in the host
 * `EmptyVerseCaretGuardPlugin` puts after it.
 */
import { mountViewEditor, requireViewOptions } from "./settledGetUsj.test-helpers";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { SerializedVerseRef } from "@sillsdev/scripture";
import { $findMatchingParent } from "@lexical/utils";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  LexicalEditor,
  SELECTION_CHANGE_COMMAND,
} from "lexical";
import { $isCaretHost, $isNoteNode, $isParaNode, $isVerseNode } from "shared";
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

/** Verse 1's text, then `following` - content the new verse will open with. */
function verseFollowedByUsj(following: MarkerContent): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
      { type: "chapter", marker: "c", number: "1" },
      {
        type: "para",
        marker: "p",
        content: [{ type: "verse", marker: "v", number: "1" }, "hello world", following],
      },
    ],
  };
}

const footnote: MarkerContent = {
  type: "note",
  marker: "f",
  caller: "+",
  content: [{ type: "char", marker: "ft", content: ["a note"] }],
};

const wordSpan: MarkerContent = { type: "char", marker: "w", content: ["word"] };

/** Mount `usj` under `viewMode` and insert a verse at the end of verse 1's "hello world" text. */
async function insertVerseAtEndOfLastVerse(
  viewMode: string,
  onScrRefChange?: (scrRef: SerializedVerseRef) => void,
  usj: Usj = lastVerseUsj,
) {
  const mounted = await mountViewEditor(usj, requireViewOptions(viewMode), {
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

describe("inserting a verse right before content the new verse opens with", () => {
  it.each([
    ["a footnote", "hidden (Simple)", footnote, PARAGRAPH_STRUCTURE_VIEW_MODE],
    ["a footnote", "editable (Standard)", footnote, STANDARD_VIEW_MODE],
    ["a character span", "hidden (Simple)", wordSpan, PARAGRAPH_STRUCTURE_VIEW_MODE],
    ["a character span", "editable (Standard)", wordSpan, STANDARD_VIEW_MODE],
  ])(
    "before %s with markers %s, keeps the caret in the new verse and out of any note",
    async (_content, _view, following, viewMode) => {
      const { ref, lexical } = await insertVerseAtEndOfLastVerse(
        viewMode,
        undefined,
        verseFollowedByUsj(following),
      );

      lexical.getEditorState().read(() => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) throw new Error("Expected a range selection");
        expect($findMatchingParent(selection.focus.getNode(), $isNoteNode)).toBeNull();
      });

      await act(async () => {
        lexical.update(() => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) selection.insertText("abc");
        });
      });

      const para = ref.current
        ?.getUsj()
        ?.content?.find((node) => typeof node !== "string" && node.type === "para");
      if (!para || typeof para === "string") throw new Error("Expected a para");
      const content = para.content ?? [];
      const newVerseIndex = content.findIndex(
        (node) => typeof node !== "string" && node.type === "verse" && node.number === "2",
      );
      expect(newVerseIndex).toBeGreaterThan(0);
      expect(content.slice(0, newVerseIndex)).toEqual([
        { type: "verse", marker: "v", number: "1" },
        "hello world ",
      ]);
      // The typed text opens the new verse, and none of it went into the note.
      expect(JSON.stringify(content.slice(newVerseIndex + 1))).toContain("abc");
      const note = content.find((node) => typeof node !== "string" && node.type === "note");
      expect(JSON.stringify(note ?? {})).not.toContain("abc");
    },
  );
});
