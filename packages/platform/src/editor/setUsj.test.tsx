/**
 * `EditorRef.setUsj` while a marker edit is pending — the state in which the document on screen
 * (what `getUsj()` settles) and the editor's node state (its record from before the edit) disagree.
 *
 * Handed either of those, `setUsj` has nothing to load, and loading would throw the edit in
 * progress away. But a host correcting the screen can hand back exactly the node state:
 * paranext-core puts a chapter's number back when the user deletes it, because Paratext refuses a
 * later chapter without one, and the number the user backspaced out of the glyph is still in the
 * chapter's node state. Only the host knows which it means, so a correction is forced.
 */
import { mountStandardViewEditor } from "./settledGetUsj.test-helpers";
import { requireDefined } from "./markerEdit/markerEdit.test-helpers";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, KEY_DOWN_COMMAND, LexicalEditor, TextNode } from "lexical";
import { $chapterGlyphTextNode, $isChapterNode, NBSP } from "shared";
import { describe, expect, it } from "vitest";

const CHAPTER_2: MarkerContent = { type: "chapter", marker: "c", number: "2" };
const VERSE_1_PARA: MarkerContent = {
  type: "para",
  marker: "p",
  content: [{ type: "verse", marker: "v", number: "1" }, "one two"],
};

const chapterDoc: Usj = { type: "USJ", version: "3.1", content: [CHAPTER_2, VERSE_1_PARA] };

/** Just past the number in `\c 2 `: the backslash, the marker, the separator, and the number. */
const AFTER_NUMBER = { start: { jsonPath: "$.content[0].content[0]", offset: 4 } } as const;

function $glyph(): TextNode {
  const chapter = requireDefined($getRoot().getChildren().find($isChapterNode), "no chapter");
  return requireDefined($chapterGlyphTextNode(chapter), "no chapter glyph");
}

const glyphText = (lexical: LexicalEditor) =>
  lexical.getEditorState().read(() => $glyph().getTextContent());

/** Deletes the chapter number and the space after it, leaving the caret in the glyph. */
async function deleteChapterNumber(lexical: LexicalEditor): Promise<void> {
  await act(async () =>
    lexical.update(() => {
      $glyph().select(3, 5);
      lexical.dispatchCommand(
        KEY_DOWN_COMMAND,
        new KeyboardEvent("keydown", { key: "Delete", bubbles: true, cancelable: true }),
      );
    }),
  );
}

describe("setUsj while a marker edit is pending", () => {
  it("loads a forced document that puts back what the edit removed", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await deleteChapterNumber(lexical);
    // Precondition: the edit is pending — on screen and in `getUsj()`, not yet in node state.
    expect(glyphText(lexical)).toBe(`\\c${NBSP}`);
    expect(ref.current?.getUsj()?.content[0]).toEqual({ ...CHAPTER_2, number: "" });

    await act(async () => ref.current?.setUsj(chapterDoc, { force: true }));

    expect(glyphText(lexical)).toBe(`\\c${NBSP}2 `);
    expect(ref.current?.getUsj()).toEqual(chapterDoc);
    // What the host does next, and what could not happen while the number was missing.
    await act(async () => ref.current?.setSelection(AFTER_NUMBER));
    expect(ref.current?.getSelection()).toEqual(AFTER_NUMBER);
  });

  it("leaves the edit and its caret alone when handed the document on screen", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await deleteChapterNumber(lexical);
    const caret = ref.current?.getSelection();
    expect(caret).toBeDefined();

    await act(async () => ref.current?.setUsj(requireDefined(ref.current?.getUsj(), "no USJ")));

    expect(glyphText(lexical)).toBe(`\\c${NBSP}`);
    expect(ref.current?.getSelection()).toEqual(caret);
  });

  // The same document, unforced, is a host re-sending the text as it was before the edit: the edit
  // in progress survives it.
  it("keeps the edit in progress when handed the document from before it", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await deleteChapterNumber(lexical);
    const caret = ref.current?.getSelection();

    await act(async () => ref.current?.setUsj(chapterDoc));

    expect(glyphText(lexical)).toBe(`\\c${NBSP}`);
    expect(ref.current?.getSelection()).toEqual(caret);
  });

  it("loads any other document", async () => {
    const { ref, lexical } = await mountStandardViewEditor(chapterDoc);
    await deleteChapterNumber(lexical);
    const otherDoc: Usj = { ...chapterDoc, content: [{ ...CHAPTER_2, number: "3" }, VERSE_1_PARA] };

    await act(async () => ref.current?.setUsj(otherDoc));

    expect(ref.current?.getUsj()).toEqual(otherDoc);
  });
});
