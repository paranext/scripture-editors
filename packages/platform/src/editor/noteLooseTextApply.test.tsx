/**
 * A note editor's apply carries text written directly in the note - between the caller and the
 * first run, after a run, or with no run at all (`\f + x\ft a\f*`, `\f + x\f*`) - and the editor the
 * note is applied to keeps it, even while it shows its notes collapsed.
 *
 * Losing it is worse than one dropped edit: the apply still replaces the note node, so the key a
 * note editor holds for its note stops resolving and every later apply from it is dropped too.
 */
import { note, noteKeys, renderEditor, requireDefined } from "./noteEditorRef.test-helpers";
import { DeltaOp } from "shared-react";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";

const oneNoteUsj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["Test Book"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [{ type: "verse", marker: "v", number: "1" }, "first ", note("alpha"), "end"],
    },
  ],
};

/** The note op a note editor applies, with the note's contents replaced by `contentOps`. */
function noteOpWithContents(baseOps: DeltaOp[], contentOps: DeltaOp[]): DeltaOp[] {
  const [noteOp] = baseOps;
  const insert = requireDefined(
    typeof noteOp?.insert === "object" ? (noteOp.insert as { note?: object }) : undefined,
    "note insert op",
  );
  return [{ ...noteOp, insert: { note: { ...insert.note, contents: { ops: contentOps } } } }];
}

function onlyNoteContent(usj: Usj | undefined): MarkerContent[] | undefined {
  const para = usj?.content[2];
  if (typeof para !== "object") return undefined;
  const found = para.content?.find(
    (item): item is MarkerObject => typeof item === "object" && item.type === "note",
  );
  return found?.content;
}

const ftRun = (text: string): DeltaOp => ({ insert: text, attributes: { char: { style: "ft" } } });

describe("applying a note with text written directly in it", () => {
  it.each([
    ["before its first run", [{ insert: "x" }, ftRun("a")], ["x", "a"]],
    ["after its last run", [ftRun("a"), { insert: "x" }], ["a", "x"]],
    ["with no run at all", [{ insert: "x" }], ["x"]],
  ] as const)("keeps the text %s", async (_label, contentOps, expectedText) => {
    const reported: (string | undefined)[] = [];
    const { editorRef, lexical } = await renderEditor(
      oneNoteUsj,
      undefined,
      undefined,
      (_usj, _ops, _source, insertedNodeKey) => reported.push(insertedNodeKey),
    );
    const [key] = noteKeys(lexical);
    const ops = requireDefined(editorRef.getNoteOps(key), "note ops");

    await act(async () => {
      editorRef.replaceEmbedUpdate(key, noteOpWithContents(ops, [...contentOps]));
    });

    const content = onlyNoteContent(editorRef.getUsj());
    const texts = (content ?? []).map((item) =>
      typeof item === "string" ? item : item.content?.join(""),
    );
    expect(texts).toEqual(expectedText);
    // The host follows the note to its new key through the change it is told about.
    const newKey = reported.at(-1);
    expect(newKey).toBeDefined();
    expect(editorRef.getNoteIndex(requireDefined(newKey, "new key"))).toBe(0);
  });

  it("keeps later applies from the same note editor landing", async () => {
    const reported: (string | undefined)[] = [];
    const { editorRef, lexical } = await renderEditor(
      oneNoteUsj,
      undefined,
      undefined,
      (_usj, _ops, _source, insertedNodeKey) => reported.push(insertedNodeKey),
    );
    const [key] = noteKeys(lexical);
    const ops = requireDefined(editorRef.getNoteOps(key), "note ops");

    await act(async () => {
      editorRef.replaceEmbedUpdate(key, noteOpWithContents(ops, [{ insert: "x" }, ftRun("a")]));
    });
    const nextKey = requireDefined(reported.at(-1), "key after the first apply");
    await act(async () => {
      editorRef.replaceEmbedUpdate(
        nextKey,
        noteOpWithContents(ops, [{ insert: "xy" }, ftRun("a")]),
      );
    });

    expect(onlyNoteContent(editorRef.getUsj())?.[0]).toBe("xy");
  });
});
