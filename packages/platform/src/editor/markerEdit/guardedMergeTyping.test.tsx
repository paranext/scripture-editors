/**
 * Where text typed after a guarded two-step paragraph merge lands, in Standard view.
 *
 * Standard view's paragraph prefix is editable text (`MarkerNode` plus its separator), and Lexical
 * re-anchors a caret at the start of a paragraph's content onto the end of the text node before it
 * whenever it reads the DOM selection back. So the caret a merge places is not where it stays, and
 * asserting on it proves nothing. These tests assert what matters instead: the settled USJ after
 * typing, with the read-back given its chance to run first.
 */
import { EditorRef } from "../editor.model";
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { requireDefined } from "./markerEdit.test-helpers";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getRoot,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  KEY_DOWN_COMMAND,
  LexicalEditor,
} from "lexical";
import { RefObject } from "react";
import { $isMarkerNode, $isParaNode, ParaNode } from "shared";

if (typeof Element.prototype.getBoundingClientRect !== "function")
  Element.prototype.getBoundingClientRect = () => new DOMRect();

function usjOf(paras: { marker: string; content: MarkerContent[] }[]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
      { type: "chapter", marker: "c", number: "1" },
      ...paras.map(({ marker, content }) => ({ type: "para", marker, content })),
      { type: "para", marker: "p", content: ["depart here"] },
    ],
  };
}

/** Let queued macrotasks run: jsdom's native `selectionchange`, and the read-back it drives. */
async function flushMacrotasks(): Promise<void> {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
}

async function pressBackspace(lexical: LexicalEditor): Promise<void> {
  await act(async () => {
    lexical.dispatchCommand(
      KEY_DOWN_COMMAND,
      new KeyboardEvent("keydown", { key: "Backspace", bubbles: true, cancelable: true }),
    );
  });
}

/**
 * Puts the caret at the very start of the `marker` paragraph, before its editable marker, and
 * merges it into the paragraph before with guarded mode's two presses, then types `text`.
 */
async function mergeThenType(
  lexical: LexicalEditor,
  ref: RefObject<EditorRef | null>,
  marker: string,
  text: string,
): Promise<Usj | undefined> {
  await act(async () => {
    lexical.update(() => {
      const para = requireDefined(
        $getRoot()
          .getChildren()
          .find((node): node is ParaNode => $isParaNode(node) && node.getMarker() === marker),
        `no \\${marker} paragraph`,
      );
      const markerNode = para.getFirstChild();
      if (!$isMarkerNode(markerNode)) throw new Error("expected an editable marker");
      markerNode.select(0, 0);
    });
  });
  await pressBackspace(lexical);
  await pressBackspace(lexical);
  await flushMacrotasks();
  await act(async () => {
    lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, text);
  });
  await flushMacrotasks();
  // Leave the paragraph so its settle runs, then read what the host would save.
  await act(async () => {
    lexical.update(() => {
      requireDefined(
        $getRoot()
          .getAllTextNodes()
          .find((node) => node.getTextContent() === "depart here"),
        "departure target not found",
      ).select(0, 0);
    });
  });
  act(() => ref.current?.commitPendingMarkerEdits?.());
  await flushMacrotasks();
  return ref.current?.getUsj();
}

/** The settled paragraphs, without the departure paragraph. */
function parasOf(usj: Usj | undefined) {
  return usj?.content
    .filter((node) => typeof node !== "string" && node.type === "para")
    .slice(0, -1);
}

describe("Typing after a guarded paragraph merge in Standard view", () => {
  it("lands at the join, as content of the merged paragraph", async () => {
    const { ref, lexical } = await mountStandardViewEditor(
      usjOf([
        { marker: "p", content: ["first"] },
        { marker: "q1", content: ["second"] },
      ]),
      { structureProtectionMode: "guarded" },
    );

    const usj = await mergeThenType(lexical, ref, "q1", "X");

    expect(parasOf(usj)).toEqual([{ type: "para", marker: "p", content: ["firstXsecond"] }]);
  });

  it("lands as content when the previous paragraph holds only its marker", async () => {
    const { ref, lexical } = await mountStandardViewEditor(
      usjOf([
        { marker: "p", content: [] },
        { marker: "q1", content: ["second"] },
      ]),
      { structureProtectionMode: "guarded" },
    );

    const usj = await mergeThenType(lexical, ref, "q1", "X");

    expect(parasOf(usj)).toEqual([{ type: "para", marker: "p", content: ["Xsecond"] }]);
  });

  it("lands after a footnote that ends the previous paragraph, not in the note", async () => {
    const note = {
      type: "note",
      marker: "f",
      caller: "+",
      content: [{ type: "char", marker: "ft", content: ["a note"] }],
    };
    const { ref, lexical } = await mountStandardViewEditor(
      usjOf([
        { marker: "p", content: ["one", note] },
        { marker: "q1", content: ["two"] },
      ]),
      { structureProtectionMode: "guarded" },
    );

    const usj = await mergeThenType(lexical, ref, "q1", "X");

    expect(parasOf(usj)).toEqual([{ type: "para", marker: "p", content: ["one", note, "Xtwo"] }]);
  });
});
