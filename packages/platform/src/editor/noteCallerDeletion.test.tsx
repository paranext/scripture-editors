/**
 * An unclosed note's caller is ordinary text in Standard view (the note renders expanded, as
 * Paratext 9's `opennote` does), so deleting it deletes it: the note is left with an empty caller.
 *
 * Paratext 9 keeps both separators around the now-empty caller slot on screen (`\f  \fr …`) and
 * writes `\f \fr …` to the file, which reads back as a note with an empty caller (its tokenizer
 * takes the caller as the next WORD after `\f`, and stops at the `\`). The editor must show the
 * same two separators and report the empty caller, so the save and the reload agree with it.
 */
import { renderEditor, requireDefined } from "./noteEditorRef.test-helpers";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $dfs } from "@lexical/utils";
import { $getRoot, CONTROLLED_TEXT_INSERTION_COMMAND, LexicalEditor } from "lexical";
import { $isNoteNode, $noteEditableCallerNode, NBSP } from "shared";
import { DeltaOpInsertNoteEmbed } from "shared-react";

/** `\f + \fr 1:1 \ft alpha` with no `\f*` — the text shows it expanded, its caller as text. */
function unclosedNote(caller: string): MarkerObject {
  return {
    type: "note",
    marker: "f",
    caller,
    closed: "false",
    content: [
      { type: "char", marker: "fr", content: ["1:1 "] },
      { type: "char", marker: "ft", content: ["alpha"] },
    ],
  } as MarkerObject;
}

function usjWithUnclosedNote(caller: string): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["Test Book"] },
      { type: "chapter", marker: "c", number: "1" },
      {
        type: "para",
        marker: "p",
        content: [{ type: "verse", marker: "v", number: "1" }, "before ", unclosedNote(caller)],
      },
    ],
  };
}

function noteObjectOf(usj: Usj | undefined): MarkerObject | undefined {
  const para = usj?.content[2];
  if (!para || typeof para === "string" || !("content" in para)) return undefined;
  return para.content?.find(
    (child): child is MarkerObject => typeof child !== "string" && child.type === "note",
  );
}

/** The note's caller text as the editor shows it. */
function callerText(lexical: LexicalEditor): string | undefined {
  return lexical.getEditorState().read(() => {
    const note = $dfs($getRoot())
      .map(({ node }) => node)
      .find($isNoteNode);
    return note ? $noteEditableCallerNode(note)?.getTextContent() : undefined;
  });
}

/** Put the caret at `offset` in the note's caller text. */
async function caretInCaller(lexical: LexicalEditor, offset: number) {
  await act(async () => {
    lexical.update(
      () => {
        const note = requireDefined(
          $dfs($getRoot())
            .map(({ node }) => node)
            .find($isNoteNode),
          "note",
        );
        const caller = requireDefined($noteEditableCallerNode(note), "editable caller");
        caller.select(offset, offset);
      },
      { discrete: true },
    );
  });
}

describe("deleting an unclosed note's caller in Standard view", () => {
  it("leaves the note with an empty caller, both separators still showing", async () => {
    const { editorRef, lexical } = await renderEditor(usjWithUnclosedNote("+"));

    // What Backspace just past the `+` leaves (jsdom has no `Selection.modify`, which Lexical's
    // own character deletion needs): the caller's two separators, the caret between them.
    await act(async () => {
      lexical.update(
        () => {
          const note = requireDefined(
            $dfs($getRoot())
              .map(({ node }) => node)
              .find($isNoteNode),
            "note",
          );
          const caller = requireDefined($noteEditableCallerNode(note), "editable caller");
          caller.setTextContent(` ${NBSP}`);
          caller.select(1, 1);
        },
        { discrete: true },
      );
    });

    expect(callerText(lexical)).toBe(` ${NBSP}`);
    const note = noteObjectOf(editorRef.getUsj());
    expect(note?.caller).toBe("");
    expect(note?.content).toEqual(unclosedNote("").content);
    const noteOp = editorRef.getNoteOps(0)?.[0] as DeltaOpInsertNoteEmbed | undefined;
    expect(noteOp?.insert.note?.caller).toBe("");
  });

  it("shows a note loaded with an empty caller the same way, and saves it unchanged", async () => {
    const { editorRef, lexical } = await renderEditor(usjWithUnclosedNote(""));

    expect(callerText(lexical)).toBe(` ${NBSP}`);
    expect(noteObjectOf(editorRef.getUsj())).toEqual(unclosedNote(""));
  });

  it("keeps the empty caller's slot when a note editor's edit is applied to it", async () => {
    const { editorRef, lexical } = await renderEditor(usjWithUnclosedNote(""));
    const key = requireDefined(editorRef.getNoteKey(0), "note key");
    const ops = requireDefined(editorRef.getNoteOps(key), "note ops");

    await act(async () => {
      editorRef.replaceEmbedUpdate(key, ops);
    });

    expect(callerText(lexical)).toBe(` ${NBSP}`);
    expect(noteObjectOf(editorRef.getUsj())).toEqual(unclosedNote(""));
  });

  it("takes a caller typed back into the empty slot", async () => {
    const { editorRef, lexical } = await renderEditor(usjWithUnclosedNote(""));
    // Between the two separators.
    await caretInCaller(lexical, 1);

    await act(async () => {
      lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "a");
    });

    expect(noteObjectOf(editorRef.getUsj())?.caller).toBe("a");
    expect(callerText(lexical)).toBe(` a${NBSP}`);
  });
});
