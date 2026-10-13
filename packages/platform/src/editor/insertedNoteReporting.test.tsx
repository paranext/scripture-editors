/**
 * `onUsjChange`'s `insertedNodeKey` names a node the change ADDED. An edit inside a note that is
 * already there - typing in a note Standard view shows expanded because it is unclosed - diffs as
 * that note replaced by its new self, and reporting it as inserted is how a host comes to open a
 * new-note editor on the note the user is typing in.
 */
import { renderEditor, requireDefined } from "./noteEditorRef.test-helpers";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { CONTROLLED_TEXT_INSERTION_COMMAND } from "lexical";

const unclosedNote = {
  type: "note",
  marker: "f",
  caller: "+",
  closed: "false",
  content: [{ type: "char", marker: "ft", content: ["alpha"] }],
} as MarkerObject & { closed: string };

const usjWithUnclosedNote: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["Test Book"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [{ type: "verse", marker: "v", number: "1" }, "before ", unclosedNote],
    },
  ],
};

describe("onUsjChange's insertedNodeKey", () => {
  it("is not reported for typing inside a note that was already there", async () => {
    const reports: { insertedNodeKey: string | undefined; text: string }[] = [];
    const { editorRef, lexical } = await renderEditor(
      usjWithUnclosedNote,
      undefined,
      undefined,
      (usj, _ops, _source, insertedNodeKey) =>
        reports.push({ insertedNodeKey, text: JSON.stringify(usj) }),
    );

    await act(async () => editorRef.selectNoteTextOffset(0, 2));
    await act(async () => {
      lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "x");
    });

    const typed = requireDefined(
      reports.find((report) => report.text.includes("alxpha")),
      "the change the keystroke reported",
    );
    expect(typed.insertedNodeKey).toBeUndefined();
  });

  it("is still reported for a note the change inserts", async () => {
    const reports: (string | undefined)[] = [];
    const { editorRef } = await renderEditor(
      usjWithUnclosedNote,
      undefined,
      undefined,
      (_usj, _ops, _source, insertedNodeKey) => reports.push(insertedNodeKey),
    );

    await act(async () => editorRef.selectAfterNote(0));
    await act(async () => editorRef.insertNote("f"));

    const insertedKey = requireDefined(reports.at(-1), "inserted note key");
    expect(editorRef.getNoteIndex(insertedKey)).toBe(1);
  });
});
