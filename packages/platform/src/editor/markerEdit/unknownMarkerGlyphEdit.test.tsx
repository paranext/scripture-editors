/**
 * Deleting the `\` from a char marker the stylesheet does not declare turns it back into text, the
 * same as for a declared one.
 *
 * An undeclared marker's span is otherwise kept whole through a Tier 2 rebuild (the tokenizer would
 * degrade the marker to literal text), so the rebuild has to tell an intact span, which it must
 * keep, from one whose glyph the user has edited, whose bytes are now the instruction.
 */
import {
  expectTier2FixedPoint,
  mountExpandedNoteEditor,
  mountStandardViewEditor,
} from "../settledGetUsj.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, $isElementNode, $isTextNode, LexicalEditor, LexicalNode } from "lexical";
import { $isMarkerNode } from "shared";

function paraUsj(inner: MarkerContent[]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [{ type: "para", marker: "p", content: ["start ", ...inner, " end"] }],
  };
}

const nestedUnknownUsj = paraUsj([
  {
    type: "char",
    marker: "wj",
    content: ["a ", { type: "char", marker: "df", content: ["name"] }],
  },
]);

const nestedKnownUsj = paraUsj([
  {
    type: "char",
    marker: "wj",
    content: ["a ", { type: "char", marker: "nd", content: ["name"] }],
  },
]);

const noteWithUnknownUsj = paraUsj([
  {
    type: "note",
    marker: "f",
    caller: "+",
    content: [
      {
        type: "char",
        marker: "ft",
        content: ["a ", { type: "char", marker: "df", content: ["name"] }],
      },
    ],
  },
]);

function $everyNode(node: LexicalNode, out: LexicalNode[] = []): LexicalNode[] {
  out.push(node);
  if ($isElementNode(node)) for (const child of node.getChildren()) $everyNode(child, out);
  return out;
}

/** Rewrite the opener glyph that currently reads `openerText`, leaving the caret in it. */
async function editOpener(editor: LexicalEditor, openerText: string, typed: string) {
  await act(async () =>
    editor.update(
      () => {
        const glyph = $everyNode($getRoot()).find(
          (node) => $isMarkerNode(node) && node.getTextContent().startsWith(openerText),
        );
        if (!glyph || !$isTextNode(glyph)) throw new Error(`no opener reading ${openerText}`);
        glyph.setTextContent(typed);
        glyph.select(typed.length, typed.length);
      },
      { discrete: true },
    ),
  );
}

/** Edit plain text in the paragraph, away from any glyph. */
async function typeAtStart(editor: LexicalEditor, typed: string) {
  await act(async () =>
    editor.update(
      () => {
        const text = $everyNode($getRoot()).find((node) => node.getTextContent() === "start ");
        if (!$isTextNode(text)) throw new Error("no start text");
        text.setTextContent(`${typed}start `);
        text.select(typed.length, typed.length);
      },
      { discrete: true },
    ),
  );
}

/** Move the caret out of the glyph, which is what settles a pending marker edit. */
async function departCaret(editor: LexicalEditor) {
  await act(async () =>
    editor.update(
      () => {
        const text = $everyNode($getRoot()).find((node) => node.getTextContent() === " end");
        if ($isTextNode(text)) text.select(0, 0);
      },
      { discrete: true },
    ),
  );
  await act(async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 50);
    });
  });
}

function paraContent(usj: Usj | undefined): MarkerContent[] | undefined {
  const para = usj?.content[0];
  return typeof para === "object" ? para.content : undefined;
}

function noteContent(usj: Usj | undefined): MarkerContent[] | undefined {
  const note = paraContent(usj)?.find(
    (item): item is MarkerObject => typeof item === "object" && item.type === "note",
  );
  return note?.content;
}

describe("deleting the backslash of an undeclared char marker", () => {
  it("turns the marker back into text, as it does for a declared one", async () => {
    const known = await mountStandardViewEditor(nestedKnownUsj);
    await editOpener(known.lexical, "\\+nd", "+nd ");
    await departCaret(known.lexical);

    const unknown = await mountStandardViewEditor(nestedUnknownUsj);
    await editOpener(unknown.lexical, "\\+df", "+df ");
    await departCaret(unknown.lexical);

    // The declared marker is the reference behavior: the opener's bytes become text in the `\wj`
    // run and the closers left behind match nothing.
    expect(paraContent(known.ref.current?.getUsj())).toEqual([
      "start ",
      { type: "char", marker: "wj", closed: "false", content: ["a +nd name"] },
      { type: "unmatched", marker: "+nd*" },
      { type: "unmatched", marker: "wj*" },
      " end",
    ]);
    expect(paraContent(unknown.ref.current?.getUsj())).toEqual([
      "start ",
      { type: "char", marker: "wj", closed: "false", content: ["a +df name"] },
      { type: "unmatched", marker: "+df*" },
      { type: "unmatched", marker: "wj*" },
      " end",
    ]);
    const settled = unknown.ref.current?.getUsj();
    if (settled) expectTier2FixedPoint(settled);
  });

  it("turns the marker back into text inside a note's run", async () => {
    const { ref, lexical } = await mountExpandedNoteEditor(noteWithUnknownUsj);

    await editOpener(lexical, "\\+df", "+df ");
    await departCaret(lexical);

    const content = noteContent(ref.current?.getUsj());
    expect(JSON.stringify(content)).not.toContain('"marker":"df"');
    expect(content?.[0]).toEqual({
      type: "char",
      marker: "ft",
      closed: "false",
      content: ["a +df name"],
    });
  });

  it("keeps an intact undeclared span whole through a rebuild of its paragraph", async () => {
    const { ref, lexical } = await mountStandardViewEditor(nestedUnknownUsj);

    await typeAtStart(lexical, "\\");
    await departCaret(lexical);

    expect(JSON.stringify(ref.current?.getUsj())).toContain(
      JSON.stringify({ type: "char", marker: "df", content: ["name"] }),
    );
  });
});
