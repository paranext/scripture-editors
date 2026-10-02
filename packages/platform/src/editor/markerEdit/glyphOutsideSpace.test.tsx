/**
 * A space typed on the outer side of a marker glyph — in front of an opener or a milestone, or
 * behind a note's closer — is a space of the text beside the glyph: the caret there and the one at
 * that text's edge are one place on screen. Standard view keeps a typed whitespace run on screen
 * while the file collapses it (docs/standard-view-invariants.md §4), so the settle must keep both
 * spaces showing, not drop the typed one along with the glyph's divergence.
 */
import { mountInView, oracleView } from "../annotationLocations/annotationLocations.test-helpers";
import { $textContaining, twoParaUsj } from "../positions/positions.test-helpers";
import { MarkerContent } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, CLICK_COMMAND, LexicalEditor } from "lexical";
import { $isMarkerNode, NBSP } from "shared";
import { describe, expect, it } from "vitest";

/** The edited paragraph's bytes as the screen shows them, a no-break space read as a space. */
function screenOf(lexical: LexicalEditor): string {
  return lexical.getEditorState().read(() =>
    $getRoot()
      .getChildren()[2]
      .getAllTextNodes()
      .map((node) => node.getTextContent())
      .join("")
      .replaceAll(NBSP, " "),
  );
}

describe.each([
  {
    name: "in front of a char span's opener",
    view: "standard",
    content: ["In the ", { type: "char", marker: "w", content: ["grace"] }, " of God"],
    glyph: "\\w",
    at: "front",
    expected: "In the  \\w grace",
  },
  {
    name: "in front of an unclosed char span's opener",
    view: "standard",
    content: ["a ", { type: "char", marker: "bd", closed: "false", content: ["bold"] }],
    glyph: "\\bd",
    at: "front",
    expected: "a  \\bd bold",
  },
  {
    name: "in front of a nested char span's opener",
    view: "standard",
    content: [
      "a ",
      {
        type: "char",
        marker: "nd",
        content: ["one ", { type: "char", marker: "wj", content: ["two"] }, " three"],
      },
    ],
    glyph: "\\+wj",
    at: "front",
    expected: "one  \\+wj two",
  },
  {
    name: "in front of a milestone",
    view: "standard",
    content: ["a ", { type: "ms", marker: "qt-s" }, "b"],
    glyph: "\\qt-s",
    at: "front",
    expected: "a  \\qt-s",
  },
  {
    name: "behind a note's closer",
    view: "standard+expandedNotes",
    content: [
      "a",
      {
        type: "note",
        marker: "f",
        caller: "+",
        content: [{ type: "char", marker: "ft", content: ["n"] }],
      },
      " b",
    ],
    glyph: "\\f*",
    at: "back",
    expected: "\\f*  b",
  },
] as {
  name: string;
  view: string;
  content: MarkerContent[];
  glyph: string;
  at: "front" | "back";
  expected: string;
}[])("a space typed $name", ({ view, content, glyph, at, expected }) => {
  it("stays on screen after the settle, beside the glyph it was typed at", async () => {
    const mounted = await mountInView(twoParaUsj(content), oracleView(view));
    const loaded = mounted.ref.current?.getUsj();
    await act(async () => {
      mounted.lexical.update(() => {
        const node = $getRoot()
          .getChildren()[2]
          .getAllTextNodes()
          .find((text) => $isMarkerNode(text) && text.getTextContent() === glyph);
        if (!node) throw new Error(`glyph ${glyph} not found`);
        const text = node.getTextContent();
        node.setTextContent(at === "front" ? ` ${text}` : `${text} `);
        const caret = at === "front" ? 1 : text.length + 1;
        node.select(caret, caret);
      });
      await Promise.resolve();
      await Promise.resolve();
    });
    const pending = mounted.ref.current?.getUsj();
    expect(screenOf(mounted.lexical)).toContain(expected);

    await act(async () => {
      mounted.lexical.dispatchCommand(CLICK_COMMAND, new MouseEvent("click"));
      mounted.lexical.update(() => $textContaining("depart here").select(1, 1));
      await Promise.resolve();
      await Promise.resolve();
    });
    act(() => mounted.ref.current?.commitPendingMarkerEdits());

    expect(screenOf(mounted.lexical)).toContain(expected);
    // The file gets the space collapsed into the one beside it, so it is the file as loaded.
    expect(pending).toEqual(loaded);
    expect(mounted.ref.current?.getUsj()).toEqual(pending);
    mounted.unmount();
  });
});
