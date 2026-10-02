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
import {
  $isNoteNode,
  $noteEditableCallerNode,
  getEditableCallerText,
  NBSP,
  NoteNode,
} from "shared";
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

/** The bytes the live note shows, with display no-break spaces read as the spaces they stand for
 * and whitespace runs collapsed, as USFM reads them. */
function $noteScreen(): string {
  return $liveNote().getTextContent().replaceAll(NBSP, " ").replace(/\s+/g, " ");
}

/** The USFM the saved note writes, whitespace runs collapsed. */
function noteUsfm(note: MarkerObject): string {
  const inner = (items: MarkerContent[] | undefined): string =>
    (items ?? [])
      .map((item) =>
        typeof item === "string"
          ? item
          : `\\${item.marker} ${inner(item.content)}${item.closed === "false" ? "" : `\\${item.marker}*`}`,
      )
      .join("");
  return `\\${note.marker} ${note.caller} ${inner(note.content)}\\${note.marker}*`.replace(
    /\s+/g,
    " ",
  );
}

/** The screen shows what the file gets, and the caller's bytes are the caller's only. */
function expectNoteScreenIsSaved(lexical: LexicalEditor, saved: MarkerObject): void {
  expect(lexical.getEditorState().read($noteScreen)).toBe(noteUsfm(saved));
}

describe.each(["standard+expandedNotes", "unformatted"])(
  "a note's caller partly damaged (%s view)",
  (view) => {
    /** Rewrite the caller text to `damaged`, caret at `caret` in it (or at the content's start). */
    async function damage(damaged: string, caret: number | "content") {
      const mounted = await mountInView(plainNoteUsj, oracleView(view));
      await act(async () => {
        mounted.lexical.update(() => {
          const caller = $callerSlot();
          caller.setTextContent(damaged);
          if (caret === "content") $textContaining("note text").select(0, 0);
          else caller.select(caret, caret);
        });
        await Promise.resolve();
        await Promise.resolve();
      });
      return mounted;
    }

    it.each([
      ["its separator deleted", " +", "content" as const, "note text"],
      ["its caller deleted too", " ", "content" as const, "note text"],
      ["a byte typed after its separator", ` +${NBSP}x`, 4, "xnote text"],
      ["the whole caller typed over", "x", 1, "xnote text"],
      ["a byte typed onto the caller word", " +x", 3, "xnote text"],
    ])(
      "keeps the caller and moves no caller byte into content: %s",
      async (_name, damaged, caret, content) => {
        const mounted = await damage(damaged, caret);
        const saved = savedNote(mounted.ref.current?.getUsj());
        expect(saved.caller).toBe("+");
        expect(saved.content).toEqual([content]);
        expect(callerText(mounted.lexical)).toBe(getEditableCallerText("+"));
        expectNoteScreenIsSaved(mounted.lexical, saved);
      },
    );

    it("lands the caret at the content's start once the caller is put back, so typing is content", async () => {
      const mounted = await damage(" ", 1);
      await act(async () => {
        mounted.lexical.update(() => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) selection.insertText("x");
        });
        await Promise.resolve();
        await Promise.resolve();
      });
      const saved = savedNote(mounted.ref.current?.getUsj());
      expect(saved).toMatchObject({ caller: "+", content: ["xnote text"] });
      expectNoteScreenIsSaved(mounted.lexical, saved);
    });
  },
);

describe.each(["standard+expandedNotes", "unformatted"])(
  "a note's caller removed beside content that reads like a caller (%s view)",
  (view) => {
    it("never takes the content for the caller", async () => {
      const usj = twoParaUsj([
        "a",
        { type: "note", marker: "f", caller: "+", content: [" q "] },
        " b",
      ]);
      const mounted = await mountInView(usj, oracleView(view));
      await act(async () => {
        mounted.lexical.update(() => {
          const caller = $callerSlot();
          const glyph = caller.getPreviousSibling();
          caller.remove();
          if ($isTextNode(glyph))
            glyph.select(glyph.getTextContentSize(), glyph.getTextContentSize());
        });
        await Promise.resolve();
        await Promise.resolve();
      });
      const saved = savedNote(mounted.ref.current?.getUsj());
      expect(saved).toMatchObject({ caller: "+", content: [" q "] });
      expectNoteScreenIsSaved(mounted.lexical, saved);
    });
  },
);
