/**
 * Forward Delete through a char span's opening glyph, one character at a time from before its
 * backslash: each press deletes one character, the last glyph character unwraps the span (the
 * marker is gone) while its separator stays behind as the text's own space for the next press, and
 * the caret stays where the user is deleting.
 */
import { mountExpandedNoteEditor, mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  DELETE_CHARACTER_COMMAND,
  LexicalEditor,
  LexicalNode,
  TextNode,
} from "lexical";
import { NBSP } from "shared";

function paraUsj(inner: MarkerContent[]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
      { type: "chapter", marker: "c", number: "1" },
      { type: "para", marker: "p", content: ["a ", ...inner, " end"] },
      { type: "para", marker: "p", content: ["second"] },
    ],
  };
}

function $textNodes(node: LexicalNode, out: TextNode[] = []): TextNode[] {
  if ($isTextNode(node)) out.push(node);
  if ($isElementNode(node)) for (const child of node.getChildren()) $textNodes(child, out);
  return out;
}

async function caretAtGlyphStart(editor: LexicalEditor, glyphText: string) {
  await act(async () =>
    editor.update(
      () => {
        const glyph = $textNodes($getRoot()).find((node) => node.getTextContent() === glyphText);
        if (!glyph) throw new Error(`no glyph ${glyphText}`);
        glyph.select(0, 0);
      },
      { discrete: true },
    ),
  );
}

/**
 * One forward Delete that removes an ordinary character. jsdom cannot drive Lexical's own
 * collapsed-caret deletion (it needs the DOM selection's `modify`), so this is the one-character
 * range removal that deletion performs.
 */
async function deleteNextCharacter(editor: LexicalEditor) {
  await act(async () =>
    editor.update(
      () => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) throw new Error("no range selection");
        const { key, offset } = selection.anchor;
        selection.focus.set(key, offset + 1, "text");
        selection.removeText();
      },
      { discrete: true },
    ),
  );
}

/** The forward Delete that empties the glyph, through the real command the engine claims. */
async function deleteLastGlyphCharacter(editor: LexicalEditor) {
  let claimed = false;
  await act(async () =>
    editor.update(
      () => {
        claimed = editor.dispatchCommand(DELETE_CHARACTER_COMMAND, false);
      },
      { discrete: true },
    ),
  );
  expect(claimed).toBe(true);
}

/** Delete through a whole opening glyph from before its backslash. */
async function deleteGlyph(editor: LexicalEditor, glyph: string) {
  for (let press = 1; press < glyph.length; press += 1) await deleteNextCharacter(editor);
  await deleteLastGlyphCharacter(editor);
}

/** The paragraph's text, with NBSPs shown as spaces, and where the caret is in it. */
function textWithCaret(editor: LexicalEditor, paraIndex = 2): string {
  return editor.getEditorState().read(() => {
    const para = $getRoot().getChildren()[paraIndex];
    const selection = $getSelection();
    let out = "";
    for (const node of $textNodes(para)) {
      const text = node.getTextContent();
      if ($isRangeSelection(selection) && selection.anchor.key === node.getKey())
        out += `${text.slice(0, selection.anchor.offset)}|${text.slice(selection.anchor.offset)}`;
      else out += text;
    }
    return out.replaceAll(NBSP, " ");
  });
}

describe("forward Delete through an opening char glyph", () => {
  it.each<[string, MarkerContent, string]>([
    [
      "an unclosed span",
      { type: "char", marker: "wj", closed: "false", content: ["text"] } as MarkerContent,
      "\\wj",
    ],
    ["a closed span", { type: "char", marker: "wj", content: ["text"] }, "\\wj"],
    ["an undeclared marker's span", { type: "char", marker: "df", content: ["text"] }, "\\df"],
  ])("deletes one character per press in %s, the caret staying put", async (_l, char, glyph) => {
    const { ref, lexical } = await mountStandardViewEditor(paraUsj([char]));
    await caretAtGlyphStart(lexical, glyph);

    await deleteGlyph(lexical, glyph);

    // The marker is gone and its separator is the text's own space now, with the caret before it.
    // (Saved, a run of spaces is one space, as the file writes it.)
    expect(textWithCaret(lexical)).toMatch(/a \| text/);
    expect(ref.current?.getUsj()?.content[2]).toMatchObject({ content: ["a text end"] });

    await deleteNextCharacter(lexical);

    expect(textWithCaret(lexical)).toMatch(/a \|text/);
  });

  it("keeps the caret in place when a selected glyph of an unclosed span is deleted whole", async () => {
    const { lexical } = await mountStandardViewEditor(
      paraUsj([{ type: "char", marker: "wj", closed: "false", content: ["text"] }]),
    );

    await act(async () =>
      lexical.update(
        () => {
          const glyph = $textNodes($getRoot()).find((node) => node.getTextContent() === "\\wj");
          if (!glyph) throw new Error("no glyph");
          glyph.select(0, glyph.getTextContentSize());
          const selection = $getSelection();
          if ($isRangeSelection(selection)) selection.removeText();
        },
        { discrete: true },
      ),
    );

    // Deleting the marker all at once takes its separator with it, and the caret stays where the
    // marker was rather than at the end of what was the span.
    expect(textWithCaret(lexical)).toMatch(/a \|text end/);
  });

  it("does the same for a span inside a note", async () => {
    const noteUsj: Usj = {
      type: "USJ",
      version: "3.1",
      content: [
        { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
        { type: "chapter", marker: "c", number: "1" },
        {
          type: "para",
          marker: "p",
          content: [
            "a ",
            {
              type: "note",
              marker: "f",
              caller: "+",
              closed: "false",
              content: [
                { type: "char", marker: "ft", closed: "false", content: ["x "] },
                { type: "char", marker: "df", closed: "false", content: ["text"] },
              ],
            } as MarkerContent,
          ],
        },
      ],
    };
    const { ref, lexical } = await mountExpandedNoteEditor(noteUsj);
    await caretAtGlyphStart(lexical, "\\df");

    await deleteGlyph(lexical, "\\df");

    expect(textWithCaret(lexical)).toMatch(/x \| text/);
    expect(JSON.stringify(ref.current?.getUsj())).not.toContain('"marker":"df"');
  });
});
