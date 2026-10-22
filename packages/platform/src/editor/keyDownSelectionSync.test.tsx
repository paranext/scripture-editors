/**
 * A key acts on the caret the user can see. The browser moves the caret itself for most keys and
 * reports the move to Lexical only through `selectionchange`, which it fires asynchronously; a key
 * pressed before that event is handled reads the position Lexical held BEFORE the move. Pressing
 * Home then ArrowRight quickly on a chapter line jumped to the next paragraph: the arrow handler saw
 * the caret still at the end of the line. Each test leaves Lexical's selection behind the DOM's, as
 * that race does (jsdom fires no `selectionchange` for a selection set from script), and presses a
 * key through the DOM, as the browser delivers it.
 */
import { mountStandardViewEditor } from "./settledGetUsj.test-helpers";
import { requireDefined } from "./markerEdit/markerEdit.test-helpers";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, $getSelection, $isRangeSelection, LexicalEditor, TextNode } from "lexical";
import { $chapterGlyphTextNode, $isChapterNode } from "shared";
import { describe, expect, it } from "vitest";

const doc: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "chapter", marker: "c", number: "2" } as MarkerContent,
    {
      type: "para",
      marker: "p",
      content: [{ type: "verse", marker: "v", number: "1" }, "one two"],
    },
  ],
};

function $glyph(): TextNode {
  const chapter = requireDefined($getRoot().getChildren().find($isChapterNode), "no chapter");
  return requireDefined($chapterGlyphTextNode(chapter), "no chapter glyph");
}

/** Puts Lexical's caret in the chapter glyph at `lexicalOffset`, then moves only the DOM's. */
async function caretsDisagree(
  lexical: LexicalEditor,
  lexicalOffset: number,
  domOffset: number,
): Promise<void> {
  await act(async () => lexical.update(() => $glyph().select(lexicalOffset, lexicalOffset)));
  const glyphText = requireDefined(
    lexical.getEditorState().read(() => lexical.getElementByKey($glyph().getKey()))?.firstChild ??
      undefined,
    "no glyph DOM text",
  );
  const domSelection = requireDefined(document.getSelection() ?? undefined, "no DOM selection");
  domSelection.setBaseAndExtent(glyphText, domOffset, glyphText, domOffset);
}

/** Presses `key` on the editor's root element, as the browser delivers a key press. */
async function pressKeyThroughDom(lexical: LexicalEditor, key: string): Promise<void> {
  const rootElement = requireDefined(lexical.getRootElement() ?? undefined, "no root element");
  await act(async () => {
    rootElement.dispatchEvent(
      new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true }),
    );
  });
}

const lexicalCaret = (lexical: LexicalEditor) =>
  lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) return undefined;
    const node = selection.anchor.getNode();
    return { inChapter: node.is($glyph()), offset: selection.anchor.offset };
  });

describe("a key pressed before Lexical has caught up with the caret", () => {
  it("ArrowRight at the start of a chapter line stays on the line", async () => {
    const { lexical } = await mountStandardViewEditor(doc);
    // Lexical still at the end of `\c 2 `, where it would hop to the next paragraph.
    await caretsDisagree(lexical, 5, 0);

    await pressKeyThroughDom(lexical, "ArrowRight");

    expect(lexicalCaret(lexical)).toEqual({ inChapter: true, offset: 0 });
  });

  it("leaves a caret alone that is where the DOM's is", async () => {
    const { lexical } = await mountStandardViewEditor(doc);
    await caretsDisagree(lexical, 2, 2);

    await pressKeyThroughDom(lexical, "ArrowRight");

    expect(lexicalCaret(lexical)).toEqual({ inChapter: true, offset: 2 });
  });
});
