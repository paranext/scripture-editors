/**
 * A space typed on the outer side of a marker glyph — in front of an opener or a milestone, or
 * behind a note's closer — is a space of the text beside the glyph: the caret there and the one at
 * that text's edge are one place on screen. Standard view keeps a typed whitespace run on screen
 * while the file collapses it (docs/standard-view-invariants.md §4), so the settle must keep both
 * spaces showing, not drop the typed one along with the glyph's divergence.
 *
 * Where the glyph has another glyph beside it instead of text — a verse, a note's caller — the
 * same place on screen is that glyph's edge, so the space must save what typing there saves, and
 * never a whitespace-only text a reader skips (ParatextData's `GetNextWord`) and a reload drops.
 */
import { mountInView, oracleView } from "../annotationLocations/annotationLocations.test-helpers";
import { $textContaining, twoParaUsj } from "../positions/positions.test-helpers";
import { MarkerContent } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, $isElementNode, CLICK_COMMAND, LexicalEditor, TextNode } from "lexical";
import { $isMarkerNode, $isVerseNode, NBSP } from "shared";
import { describe, expect, it } from "vitest";

/** The edited paragraph's text nodes, in document order. */
function $editedTexts(): TextNode[] {
  const para = $getRoot().getChildren()[2];
  if (!$isElementNode(para)) throw new Error("expected the edited paragraph");
  return para.getAllTextNodes();
}

/** The edited paragraph's bytes as the screen shows them, a no-break space read as a space. */
function screenOf(lexical: LexicalEditor): string {
  return lexical.getEditorState().read(() =>
    $editedTexts()
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
        const node = $editedTexts().find(
          (text) => $isMarkerNode(text) && text.getTextContent() === glyph,
        );
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

/**
 * Type a space at the edge of the edited paragraph's text node `pick` finds — its front or its end
 * — leave, and return the paragraph the file then gets.
 */
async function savedAfterSpace(
  view: string,
  content: MarkerContent[],
  pick: (text: TextNode) => boolean,
  at: "front" | "end",
): Promise<unknown> {
  const mounted = await mountInView(twoParaUsj(content), oracleView(view));
  await act(async () => {
    mounted.lexical.update(() => {
      const node = $editedTexts().find(pick);
      if (!node) throw new Error("text to type at not found");
      const text = node.getTextContent();
      node.setTextContent(at === "front" ? ` ${text}` : `${text} `);
      const caret = at === "front" ? 1 : text.length + 1;
      node.select(caret, caret);
    });
    await Promise.resolve();
    await Promise.resolve();
  });
  await act(async () => {
    mounted.lexical.dispatchCommand(CLICK_COMMAND, new MouseEvent("click"));
    mounted.lexical.update(() => $textContaining("depart here").select(1, 1));
    await Promise.resolve();
    await Promise.resolve();
  });
  act(() => mounted.ref.current?.commitPendingMarkerEdits());
  const saved = mounted.ref.current?.getUsj()?.content[2];
  mounted.unmount();
  return saved;
}

const isGlyph = (spelled: string) => (text: TextNode) =>
  ($isMarkerNode(text) || $isVerseNode(text)) &&
  text.getTextContent().replaceAll(NBSP, " ") === spelled;

const note = {
  type: "note",
  marker: "f",
  caller: "+",
  content: [{ type: "char", marker: "ft", content: ["n"] }],
};

describe.each([
  {
    name: "in front of a char span's opener right after a verse",
    view: "standard",
    content: [
      { type: "verse", marker: "v", number: "1" },
      { type: "char", marker: "w", content: ["g"] },
    ],
    glyph: { pick: isGlyph("\\w"), at: "front" },
    neighbor: { pick: isGlyph("\\v 1 "), at: "end" },
  },
  {
    name: "in front of a note's first span, right after its caller",
    view: "standard+expandedNotes",
    content: ["a", note, " b"],
    glyph: { pick: isGlyph("\\ft"), at: "front" },
    neighbor: {
      pick: (text: TextNode) => text.isUnmergeable() && text.getTextContent().includes("+"),
      at: "end",
    },
  },
  {
    name: "at the start of the text right after a verse",
    view: "standard",
    content: [{ type: "verse", marker: "v", number: "1" }, "In the beginning"],
    glyph: { pick: (text: TextNode) => text.getTextContent() === "In the beginning", at: "front" },
    neighbor: { pick: isGlyph("\\v 1 "), at: "end" },
  },
  {
    name: "behind a note's closer, right before a verse",
    view: "standard+expandedNotes",
    content: ["a", note, { type: "verse", marker: "v", number: "2" }, "b"],
    glyph: { pick: isGlyph("\\f*"), at: "end" },
    neighbor: { pick: isGlyph("\\v 2 "), at: "front" },
  },
] as {
  name: string;
  view: string;
  content: MarkerContent[];
  glyph: { pick: (text: TextNode) => boolean; at: "front" | "end" };
  neighbor: { pick: (text: TextNode) => boolean; at: "front" | "end" };
}[])("a space typed $name, with no plain text beside it", ({ view, content, glyph, neighbor }) => {
  it("saves what the same place at the neighbor's edge saves, with no whitespace node", async () => {
    const atGlyph = await savedAfterSpace(view, content, glyph.pick, glyph.at);
    const atNeighbor = await savedAfterSpace(view, content, neighbor.pick, neighbor.at);
    expect(atGlyph).toEqual(atNeighbor);
    // A whitespace-only text between two markers is a byte a reader skips: a reload drops it.
    expect(JSON.stringify(atGlyph)).not.toMatch(/[[,]" +"[,\]]/);
  });
});
