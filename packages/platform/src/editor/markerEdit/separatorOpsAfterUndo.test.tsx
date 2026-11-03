/**
 * The delta ops a host is given after an undo keep a char span's separator as U+00A0.
 *
 * In Standard view a char span's glyph (`\nd`) and its content text (`<separator>grace`) are
 * separate nodes. Deleting the content and undoing inserts the text back as an op that follows a
 * retain, so the op before it is not a text insert and the separator's glyph is only in the
 * document. A host that is handed that separator as a space has a leading content space in the
 * span.
 */

import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { requireDefined } from "./markerEdit.test-helpers";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $getSelection,
  $isRangeSelection,
  LexicalEditor,
  TextNode,
  UNDO_COMMAND,
} from "lexical";
import { NBSP } from "shared";
import { DeltaOp } from "shared-react";

// Undo restores a collapsed selection under the editor root, and Lexical's scroll-into-view reads
// a rect off the selection target; jsdom implements neither.
const zeroRect = (): DOMRect => ({
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  toJSON() {
    return this;
  },
});
if (typeof Range.prototype.getBoundingClientRect !== "function")
  Range.prototype.getBoundingClientRect = zeroRect;
if (typeof Element.prototype.getBoundingClientRect !== "function")
  Element.prototype.getBoundingClientRect = zeroRect;

const usj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: ["In the ", { type: "char", marker: "nd", content: ["grace"] }, " of God made"],
    },
  ],
};

/** The text node holding the span's separator and content. */
function $spanText(): TextNode {
  return requireDefined(
    $getRoot()
      .getAllTextNodes()
      .find((node) => node.getTextContent() === `${NBSP}grace`),
    "span content not found",
  );
}

/** Delete `from` to `to` of the span's text, as a selection delete does. */
async function deleteInSpan(lexical: LexicalEditor, from: number, to: number): Promise<void> {
  await act(async () => {
    lexical.update(() => {
      $spanText().select(from, to);
      const selection = $getSelection();
      if ($isRangeSelection(selection)) selection.removeText();
    });
    await Promise.resolve();
    await Promise.resolve();
  });
}

async function undo(lexical: LexicalEditor): Promise<void> {
  await act(async () => {
    lexical.dispatchCommand(UNDO_COMMAND, undefined);
    await Promise.resolve();
    await Promise.resolve();
  });
}

/** The text of every string insert in `ops`, in order. */
function insertedTexts(ops: DeltaOp[][]): string[] {
  return ops.flat().flatMap(({ insert }) => (typeof insert === "string" ? [insert] : []));
}

describe("an undo that restores a char span's separator", () => {
  it("sends the separator and the text to the host as U+00A0 and the text", async () => {
    const opsSeen: DeltaOp[][] = [];
    const { lexical } = await mountStandardViewEditor(usj, {
      onUsjChange: (_, ops) => {
        if (ops) opsSeen.push(ops);
      },
    });
    await deleteInSpan(lexical, 0, `${NBSP}grace`.length);
    opsSeen.length = 0;

    await undo(lexical);

    expect(insertedTexts(opsSeen)).toContain(`${NBSP}grace`);
  });

  it("sends a restored separator alone as U+00A0", async () => {
    const opsSeen: DeltaOp[][] = [];
    const { lexical } = await mountStandardViewEditor(usj, {
      onUsjChange: (_, ops) => {
        if (ops) opsSeen.push(ops);
      },
    });
    await deleteInSpan(lexical, 0, 1);
    opsSeen.length = 0;

    await undo(lexical);

    expect(insertedTexts(opsSeen)).toContain(NBSP);
  });
});
