/**
 * Bytes typed into an expanded note's own `\f`/`\f*` glyph, or deleted from it, reach the file.
 * A glyph whose bytes no longer spell its note's marker (and do not spell another note marker the
 * note can be renamed to) is a literal, exactly as a damaged char-span glyph is: the paragraph
 * re-tokenizes with the note's bytes inline, and what the tokenizer makes of them is what the
 * screen shows and the file gets.
 */
import { mountInView, oracleView } from "../annotationLocations/annotationLocations.test-helpers";
import { $textContaining, twoParaUsj } from "../positions/positions.test-helpers";
import { MarkerObject } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, CLICK_COMMAND, TextNode } from "lexical";
import { $isMarkerNode, NBSP, usfmFragmentToUsjContent } from "shared";
import { describe, expect, it } from "vitest";

/** `\p a\f + \ft note text\ft*\f* b`. */
const noteUsj = twoParaUsj([
  "a",
  {
    type: "note",
    marker: "f",
    caller: "+",
    content: [{ type: "char", marker: "ft", content: ["note text"] }],
  },
  " b",
]);

/** The note's own glyph spelled `glyph`. */
function $noteGlyph(glyph: string): TextNode {
  const found = $getRoot()
    .getAllTextNodes()
    .find((node) => $isMarkerNode(node) && node.getTextContent() === glyph);
  if (!found) throw new Error(`no glyph ${glyph}`);
  return found;
}

const edits: { name: string; glyph: string; text: string; caret: number }[] = [
  { name: "x typed into the closer", glyph: "\\f*", text: "\\fx*", caret: 3 },
  { name: "| typed into the opener", glyph: "\\f", text: "\\|f", caret: 2 },
  { name: "the opener's backslash deleted", glyph: "\\f", text: "f", caret: 0 },
  { name: "the closer's star deleted", glyph: "\\f*", text: "\\f", caret: 2 },
  // The tokenizer keeps the typed `\` as text in front of the note; the settle must not add a
  // space between the two, here or on any later pass over the paragraph.
  { name: "a backslash typed in front of the opener", glyph: "\\f", text: "\\\\f", caret: 1 },
];

describe.each(
  ["standard+expandedNotes", "unformatted"].flatMap((view) =>
    edits.map((edit) => ({ view, ...edit })),
  ),
)("a note glyph with $name ($view view)", ({ view, glyph, text, caret }) => {
  it("settles the paragraph as the tokenizer reads the screen", async () => {
    const mounted = await mountInView(noteUsj, oracleView(view));
    await act(async () => {
      mounted.lexical.update(() => {
        const node = $noteGlyph(glyph);
        node.setTextContent(text);
        node.select(caret, caret);
      });
      await Promise.resolve();
      await Promise.resolve();
    });
    const shown = mounted.lexical
      .getEditorState()
      .read(() => $getRoot().getChildren()[2].getTextContent().replaceAll(NBSP, " "));
    const pending = mounted.ref.current?.getUsj();

    await act(async () => {
      mounted.lexical.dispatchCommand(CLICK_COMMAND, new MouseEvent("click"));
      mounted.lexical.update(() => $textContaining("depart here").select(1, 1));
      await Promise.resolve();
      await Promise.resolve();
    });
    act(() => mounted.ref.current?.commitPendingMarkerEdits());

    const settled = mounted.ref.current?.getUsj();
    const [expected] = usfmFragmentToUsjContent(shown) as MarkerObject[];
    expect(settled?.content[2]).toEqual(expected);
    expect(pending).toEqual(settled);
    mounted.unmount();
  });
});
