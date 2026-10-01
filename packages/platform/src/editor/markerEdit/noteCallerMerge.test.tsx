/**
 * An expanded note's editable caller text (` +⍽`) stays its own node. Lexical merges two adjacent
 * plain text nodes whenever either is edited, so content text that starts right after the caller
 * would otherwise be folded into it: the caller then no longer reads as one, and the saved note
 * carries the caller's bytes as content, writing the caller twice.
 */
import { mountInView, oracleView } from "../annotationLocations/annotationLocations.test-helpers";
import { $textContaining, twoParaUsj } from "../positions/positions.test-helpers";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, $getSelection, $isRangeSelection, LexicalEditor } from "lexical";
import { $isNoteNode, $noteEditableCallerNode, NoteNode } from "shared";
import { describe, expect, it } from "vitest";

/** `\p a\f + note text\f* b`: the note's content starts with plain text. */
const plainNoteUsj = twoParaUsj([
  "a",
  { type: "note", marker: "f", caller: "+", content: ["note text"] },
  " b",
]);

/** The saved note. */
function savedNote(usj: Usj | undefined): MarkerObject {
  const para = usj?.content[2];
  const note =
    typeof para === "object"
      ? para.content?.find((item) => typeof item === "object" && item.type === "note")
      : undefined;
  if (!note || typeof note !== "object") throw new Error("no saved note");
  return note;
}

/** The live note's caller text, or `undefined` when it no longer reads as the caller. */
function callerText(lexical: LexicalEditor): string | undefined {
  return lexical.getEditorState().read(() => {
    const note = $getRoot()
      .getAllTextNodes()
      .map((text) => text.getParent())
      .find((parent): parent is NoteNode => $isNoteNode(parent));
    return note && $noteEditableCallerNode(note)?.getTextContent();
  });
}

describe.each(["standard+expandedNotes", "unformatted"])(
  "a note's caller beside plain content (%s view)",
  (view) => {
    it("keeps typed content out of the caller", async () => {
      const mounted = await mountInView(plainNoteUsj, oracleView(view));
      const caller = callerText(mounted.lexical);
      expect(caller).toBeDefined();

      await act(async () => {
        mounted.lexical.update(() => {
          $textContaining("note text").select("note text".length, "note text".length);
          const selection = $getSelection();
          if ($isRangeSelection(selection)) selection.insertText("s");
        });
        await Promise.resolve();
      });

      expect(callerText(mounted.lexical)).toBe(caller);
      const note = savedNote(mounted.ref.current?.getUsj());
      expect(note.caller).toBe("+");
      expect(note.content).toEqual(["note texts"]);
    });
  },
);
