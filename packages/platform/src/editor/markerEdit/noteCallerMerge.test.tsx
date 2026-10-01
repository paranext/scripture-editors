/**
 * An expanded note's editable caller text (` +⍽`) stays its own node. Lexical merges two adjacent
 * plain text nodes whenever either is edited, so content text that starts right after the caller
 * would otherwise be folded into it: the caller then no longer reads as one, and the saved note
 * carries the caller's bytes as content, writing the caller twice. And a deleted caller is shown
 * again: the note keeps its caller, and the screen shows what the file gets.
 */
import { mountInView, oracleView } from "../annotationLocations/annotationLocations.test-helpers";
import { $textContaining, twoParaUsj } from "../positions/positions.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  LexicalEditor,
  TextNode,
} from "lexical";
import { $isNoteNode, $noteEditableCallerNode, getEditableCallerText, NoteNode } from "shared";
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

/** The live note. */
function $liveNote(): NoteNode {
  const note = $getRoot()
    .getAllTextNodes()
    .map((text) => text.getParent())
    .find((parent): parent is NoteNode => $isNoteNode(parent));
  if (!note) throw new Error("no live note");
  return note;
}

/** The live note's caller-slot text: the child after its opening glyph. */
function $callerSlot(): TextNode {
  const slot = $liveNote().getChildren()[1];
  if (!$isTextNode(slot)) throw new Error("expected the caller text after the opening glyph");
  return slot;
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

/** The note contents the caller-deletion rows run over. */
const noteContents: { contentName: string; content: MarkerContent[] }[] = [
  { contentName: "plain content", content: ["note text"] },
  {
    contentName: "a char span",
    content: [{ type: "char", marker: "ft", content: ["note text"] }],
  },
];

describe.each(
  ["standard+expandedNotes", "unformatted"].flatMap((view) =>
    noteContents.flatMap(({ contentName, content }) =>
      ["emptied", "removed"].map((how) => ({ view, contentName, content, how })),
    ),
  ),
)("a note's caller deleted ($how, $contentName, $view view)", ({ view, content, how }) => {
  it("shows the caller again, so the screen is what the file gets", async () => {
    const usj = twoParaUsj(["a", { type: "note", marker: "f", caller: "+", content }, " b"]);
    const mounted = await mountInView(usj, oracleView(view));
    const loaded = savedNote(mounted.ref.current?.getUsj());

    await act(async () => {
      mounted.lexical.update(() => {
        const caller = $callerSlot();
        if (how === "emptied") {
          caller.setTextContent("");
          caller.select(0, 0);
          return;
        }
        const glyph = caller.getPreviousSibling();
        caller.remove();
        if ($isTextNode(glyph))
          glyph.select(glyph.getTextContentSize(), glyph.getTextContentSize());
      });
      await Promise.resolve();
      await Promise.resolve();
    });

    expect(callerText(mounted.lexical)).toBe(getEditableCallerText("+"));
    expect(savedNote(mounted.ref.current?.getUsj())).toEqual(loaded);
  });
});
