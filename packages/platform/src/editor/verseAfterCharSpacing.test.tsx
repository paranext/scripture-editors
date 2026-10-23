/**
 * A verse that a settle creates right after a char span gets a space in front of it, and
 * `getUsj()` reports that space while the edit is still pending, not only once it settles.
 *
 * Paratext 9 always has a space there: `UsfmToken.Tokenize` inserts one between a closing marker
 * and a following `\v` whenever it reads the file, so `\w grace\w*\v 2` loads as
 * `<char>grace</char> <verse/>`. Saving writes the same bytes either way (the writer puts a line
 * break before `\v`), so this is about the document the editor reports: once the verse settles,
 * `TextSpacingPlugin` adds the space; the pending read has to agree, or a host reading the
 * document mid-edit sees one shape and then another for the same bytes.
 */
import { mountStandardViewEditor } from "./settledGetUsj.test-helpers";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, CONTROLLED_TEXT_INSERTION_COMMAND, LexicalEditor, TextNode } from "lexical";

// jsdom implements no layout; a settle can place the caret and trip Lexical's post-commit
// scroll-into-view, which reads a Range rect.
if (typeof Range.prototype.getBoundingClientRect !== "function")
  Range.prototype.getBoundingClientRect = () => new DOMRect();

function documentWith(content: MarkerContent[]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
      { type: "chapter", marker: "c", number: "1" },
      { type: "para", marker: "p", content },
      { type: "para", marker: "p", content: ["depart here"] },
    ],
  };
}

async function typeText(lexical: LexicalEditor, text: string) {
  for (const character of text)
    await act(async () => {
      lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, character);
    });
}

function $textNode(text: string): TextNode {
  const node = $getRoot()
    .getAllTextNodes()
    .find((candidate) => candidate.getTextContent() === text);
  if (!node) throw new Error(`no text node ${JSON.stringify(text)}`);
  return node;
}

/** The edited paragraph's content. */
function firstParaContent(usj: Usj | undefined): MarkerContent[] | undefined {
  const para = usj?.content[2];
  return typeof para === "object" ? para.content : undefined;
}

describe("a verse a settle creates right after a char span", () => {
  it("is spaced from the span in the pending read exactly as once it settles", async () => {
    const { ref, lexical } = await mountStandardViewEditor(
      documentWith([
        { type: "verse", marker: "v", number: "1" },
        "a ",
        { type: "char", marker: "w", content: ["grace"] },
        "v 2 b",
      ]),
    );
    lexical.getRootElement()?.focus();
    // A `\` typed in front of `v 2 b` makes those bytes a verse marker — a verse the settle creates
    // directly after the `\w` span.
    await act(async () => lexical.update(() => $textNode("v 2 b").select(0, 0)));
    await typeText(lexical, "\\");

    const pending = firstParaContent(ref.current?.getUsj());

    await act(async () => lexical.update(() => $textNode("depart here").select(2, 2)));
    act(() => ref.current?.commitPendingMarkerEdits());
    const settled = firstParaContent(ref.current?.getUsj());

    const expected: MarkerContent[] = [
      { type: "verse", marker: "v", number: "1" },
      "a ",
      { type: "char", marker: "w", content: ["grace"] },
      " ",
      { type: "verse", marker: "v", number: "2" },
      "b",
    ];
    expect(settled).toEqual(expected);
    expect(pending).toEqual(expected);
  });

  it("leaves a span and a verse that already touch alone when nothing re-creates the verse", async () => {
    // Only a verse a settle creates gets the space, on both sides: renaming the paragraph marker
    // re-tokenizes nothing here, so neither read adds one.
    const { ref, lexical } = await mountStandardViewEditor(
      documentWith([
        { type: "verse", marker: "v", number: "1" },
        "a ",
        { type: "char", marker: "w", content: ["grace"] },
        { type: "verse", marker: "v", number: "2" },
        "b",
      ]),
    );
    lexical.getRootElement()?.focus();
    await act(async () =>
      lexical.update(() => {
        const glyph = $getRoot()
          .getAllTextNodes()
          .find((candidate) => candidate.getTextContent().startsWith("\\p"));
        if (!glyph) throw new Error("no paragraph glyph");
        glyph.select(2, 2);
      }),
    );
    await typeText(lexical, "x");

    const pending = firstParaContent(ref.current?.getUsj());
    await act(async () => lexical.update(() => $textNode("depart here").select(2, 2)));
    act(() => ref.current?.commitPendingMarkerEdits());
    const settled = firstParaContent(ref.current?.getUsj());

    expect(pending).toEqual(settled);
    expect(settled).toEqual([
      { type: "verse", marker: "v", number: "1" },
      "a ",
      { type: "char", marker: "w", content: ["grace"] },
      { type: "verse", marker: "v", number: "2" },
      "b",
    ]);
  });
});
