/**
 * An expanded note's editable caller text (` +⍽`) stays its own node. Lexical merges two adjacent
 * plain text nodes whenever either is edited, so content text that starts right after the caller
 * would otherwise be folded into it: the caller then no longer reads as one, and the saved note
 * carries the caller's bytes as content, writing the caller twice. And a deleted caller is shown
 * again: the note keeps its caller, and the screen shows what the file gets.
 */
import { mountInView, oracleView } from "../annotationLocations/annotationLocations.test-helpers";
import { IDLE_SETTLE_DELAY_MS } from "./MarkerEditPlugin";
import { $textContaining, twoParaUsj } from "../positions/positions.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import {
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  CLICK_COMMAND,
  LexicalEditor,
  REDO_COMMAND,
  TextNode,
  UNDO_COMMAND,
} from "lexical";
import {
  $isNoteNode,
  $noteEditableCallerNode,
  getEditableCallerText,
  NBSP,
  NoteNode,
} from "shared";
import Editor from "../Editor";
import { EditorRef } from "../editor.model";
import { EditorRefPlugin } from "@lexical/react/LexicalEditorRefPlugin";
import { act, render } from "@testing-library/react";
import Delta from "quill-delta";
import { createRef } from "react";
import { DeltaOpInsertNoteEmbed, getEditorDelta } from "shared-react";
import { describe, expect, it, vi } from "vitest";

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

/** Click into the second paragraph and commit whatever is still pending — the caret departing. */
async function depart(mounted: Awaited<ReturnType<typeof mountInView>>): Promise<void> {
  await act(async () => {
    mounted.lexical.dispatchCommand(CLICK_COMMAND, new MouseEvent("click"));
    mounted.lexical.update(() => $textContaining("depart here").select(1, 1));
    await Promise.resolve();
    await Promise.resolve();
  });
  act(() => mounted.ref.current?.commitPendingMarkerEdits());
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

    // An emptied caller text waits for the caret to leave; a removed one has nothing to wait in.
    expect(savedNote(mounted.ref.current?.getUsj())).toEqual(loaded);
    if (how === "emptied") await depart(mounted);
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

    // While the caret is at the caller, a caller with its own bytes damaged waits as typed — the
    // next keystroke may make it a caller word again — and the document already reads as the
    // departure settles it.
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
        const pending = savedNote(mounted.ref.current?.getUsj());
        expect(pending.caller).toBe("+");
        expect(pending.content).toEqual([content]);
        await depart(mounted);
        const saved = savedNote(mounted.ref.current?.getUsj());
        expect(saved).toEqual(pending);
        expect(callerText(mounted.lexical)).toBe(getEditableCallerText("+"));
        expectNoteScreenIsSaved(mounted.lexical, saved);
      },
    );

    it("moves only the typed backslash into content when it is typed in front of the caller word", async () => {
      // A `\` cannot start a word, so ` \+⍽` is no retag; the caller's own `+` stays the caller's.
      const mounted = await damage(` \\+${NBSP}`, 2);
      const pending = savedNote(mounted.ref.current?.getUsj());
      await depart(mounted);
      const saved = savedNote(mounted.ref.current?.getUsj());
      expect(saved).toEqual(pending);
      expect(saved.caller).toBe("+");
      expect(callerText(mounted.lexical)).toBe(getEditableCallerText("+"));
      expect(mounted.lexical.getEditorState().read($noteScreen)).toBe("\\f + \\note text\\f*");
      expectNoteScreenIsSaved(mounted.lexical, saved);
    });

    it("takes the word typed next as the caller once the caller is deleted, as Paratext 9 does", async () => {
      const mounted = await damage(` ${NBSP}`, 1);
      await act(async () => {
        mounted.lexical.update(() => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) selection.insertText("a");
        });
        await Promise.resolve();
        await Promise.resolve();
      });
      expect(savedNote(mounted.ref.current?.getUsj())).toMatchObject({
        caller: "a",
        content: ["note text"],
      });
      await depart(mounted);
      const saved = savedNote(mounted.ref.current?.getUsj());
      expect(saved).toMatchObject({ caller: "a", content: ["note text"] });
      expect(callerText(mounted.lexical)).toBe(getEditableCallerText("a"));
      expectNoteScreenIsSaved(mounted.lexical, saved);
    });

    it.each([
      ["in the caller", 1 as const],
      ["at the content's start", "content" as const],
    ])("keeps an emptied caller waiting through a pause with the caret %s", async (_at, caret) => {
      vi.useFakeTimers({ toFake: ["setTimeout", "clearTimeout", "Date"] });
      try {
        const mounted = await damage(` ${NBSP}`, caret);
        await act(async () => {
          await vi.advanceTimersByTimeAsync(IDLE_SETTLE_DELAY_MS * 3);
        });
        expect(callerText(mounted.lexical)).not.toBe(getEditableCallerText("+"));
        expect(savedNote(mounted.ref.current?.getUsj())).toMatchObject({
          caller: "+",
          content: ["note text"],
        });
      } finally {
        vi.useRealTimers();
      }
    });

    it.each([
      ["in front of the slot's space", 1, "def note text"],
      ["behind the slot's space", 2, "defnote text"],
    ])(
      "takes the first of several words pasted into an emptied caller as the caller, %s",
      async (_at, caret, content) => {
        const mounted = await damage(` ${NBSP}`, caret);
        await act(async () => {
          mounted.lexical.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) selection.insertText("abc def");
          });
          await Promise.resolve();
          await Promise.resolve();
        });
        // Paratext 9 reads the caller as the next word after the marker; what follows it is the
        // note's content, with the gap the screen shows between them and the old content.
        const pending = savedNote(mounted.ref.current?.getUsj());
        expect(pending).toMatchObject({ caller: "abc", content: [content] });
        expectNoteScreenIsSaved(mounted.lexical, pending);
        await depart(mounted);
        const saved = savedNote(mounted.ref.current?.getUsj());
        expect(saved).toEqual(pending);
        expect(callerText(mounted.lexical)).toBe(getEditableCallerText("abc"));
        expectNoteScreenIsSaved(mounted.lexical, saved);
      },
    );

    it.each(["Undo", "Undo, then Redo"])(
      "settles a waiting caller that %s brings back once the caret leaves",
      async (gesture) => {
        vi.useFakeTimers({ toFake: ["setTimeout", "clearTimeout", "Date"] });
        try {
          // Delete the caller, pause, type a new one, and leave: three history entries, the middle
          // one a caller waiting for its next keystroke.
          const mounted = await damage(` ${NBSP}`, 1);
          await act(async () => {
            await vi.advanceTimersByTimeAsync(1500);
          });
          await act(async () => {
            mounted.lexical.update(() => {
              const selection = $getSelection();
              if ($isRangeSelection(selection)) selection.insertText("a");
            });
            await Promise.resolve();
          });
          await act(async () => {
            await vi.advanceTimersByTimeAsync(1500);
          });
          await depart(mounted);
          expect(callerText(mounted.lexical)).toBe(getEditableCallerText("a"));

          // Back to the waiting caller: a restored state runs no transforms, so only the re-pend
          // scan can tell the next departure there is a caller to put back.
          const press = async (command: typeof UNDO_COMMAND) => {
            await act(async () => {
              mounted.lexical.dispatchCommand(command, undefined);
              await Promise.resolve();
            });
          };
          await press(UNDO_COMMAND);
          if (gesture === "Undo, then Redo") {
            await press(UNDO_COMMAND);
            await press(REDO_COMMAND);
          }
          expect(callerText(mounted.lexical)).not.toBe(getEditableCallerText("a"));
          await depart(mounted);

          const saved = savedNote(mounted.ref.current?.getUsj());
          expect(saved).toMatchObject({ caller: "+", content: ["note text"] });
          expect(callerText(mounted.lexical)).toBe(getEditableCallerText("+"));
          expectNoteScreenIsSaved(mounted.lexical, saved);
        } finally {
          vi.useRealTimers();
        }
      },
    );

    it("leaves an emptied caller as the user left it while the caret is there", async () => {
      const mounted = await damage(` ${NBSP}`, 1);
      expect(
        mounted.lexical.getEditorState().read(() => $callerSlot().getTextContent()),
      ).not.toContain("+");
      const pending = savedNote(mounted.ref.current?.getUsj());
      expect(pending).toMatchObject({ caller: "+", content: ["note text"] });
      await depart(mounted);
      expect(savedNote(mounted.ref.current?.getUsj())).toEqual(pending);
      expect(callerText(mounted.lexical)).toBe(getEditableCallerText("+"));
    });

    it("moves bytes typed into an emptied caller that make no caller word to the content", async () => {
      const mounted = await damage(" ", 1);
      await act(async () => {
        mounted.lexical.update(() => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) selection.insertText("x");
        });
        await Promise.resolve();
        await Promise.resolve();
      });
      const pending = savedNote(mounted.ref.current?.getUsj());
      expect(pending).toMatchObject({ caller: "+", content: ["xnote text"] });
      await depart(mounted);
      const saved = savedNote(mounted.ref.current?.getUsj());
      expect(saved).toEqual(pending);
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

describe.each(["standard+expandedNotes", "unformatted"])(
  "a byte typed between a note's opening glyph and its caller (%s view)",
  (view) => {
    // The caret between `\f` and its caller text can sit at the glyph's end or at the caller text's
    // front, and a selection listener moves the second onto the first before the next keystroke.
    // The two look the same on screen, so a byte typed at either saves the same file: a name byte
    // or `*` reads with the marker in front of it; `\`, `|` and a space go to the caller's side,
    // where a byte that makes no caller word is content and the caller keeps its own.
    const usj = twoParaUsj([
      "a",
      {
        type: "note",
        marker: "f",
        caller: "+",
        content: [{ type: "char", marker: "ft", content: ["note text"] }],
      },
      " b",
    ]);
    const span = { type: "char", marker: "ft", content: ["note text"] };
    it.each([
      ["x", undefined],
      ["*", undefined],
      ["\\", { caller: "+", content: ["\\", span] }],
      ["|", { caller: "+", content: ["|", span] }],
      [" ", { caller: "+", content: [span] }],
    ])("%j saves the same at the glyph's end and at the caller's front", async (byte, note) => {
      const saved: unknown[] = [];
      for (const caret of ["glyph end", "caller front"]) {
        const mounted = await mountInView(usj, oracleView(view));
        await act(async () => {
          mounted.lexical.update(() => {
            const caller = $callerSlot();
            if (caret === "caller front") {
              caller.setTextContent(byte + caller.getTextContent());
              caller.select(1, 1);
              return;
            }
            const glyph = caller.getPreviousSibling();
            if (!$isTextNode(glyph)) throw new Error("expected the note's opening glyph");
            glyph.setTextContent(glyph.getTextContent() + byte);
            glyph.select(glyph.getTextContentSize(), glyph.getTextContentSize());
          });
          await Promise.resolve();
          await Promise.resolve();
        });
        await depart(mounted);
        saved.push(mounted.ref.current?.getUsj()?.content[2]);
        mounted.unmount();
      }
      expect(saved[0]).toEqual(saved[1]);
      const para = saved[0];
      if (note && typeof para === "object" && para !== null && "content" in para)
        expect(
          (para.content as MarkerContent[]).find(
            (item) => typeof item === "object" && item.type === "note",
          ),
        ).toMatchObject(note);
    });
  },
);

describe.each(["standard+expandedNotes", "unformatted"])(
  "a waiting note caller's change ops (%s view)",
  (view) => {
    /** Mount `usj`, composing every change op it announces through `onUsjChange` onto the
     * document's ops at load, the way a collaborating peer's copy is kept. */
    async function mountComposing(usj: Usj) {
      const ref = createRef<EditorRef>();
      const lexicalRef = createRef<LexicalEditor>();
      const peer: { doc: Delta } = { doc: new Delta() };
      let unmount: (() => void) | undefined;
      await act(async () => {
        ({ unmount } = render(
          <Editor
            ref={ref}
            defaultUsj={usj}
            options={{ view: oracleView(view) }}
            onUsjChange={(_usj, ops) => {
              if (ops) peer.doc = peer.doc.compose(new Delta(ops));
            }}
          >
            <EditorRefPlugin editorRef={lexicalRef} />
          </Editor>,
        ));
      });
      const lexical = lexicalRef.current;
      if (!lexical || !unmount) throw new Error("mount failed");
      peer.doc = getEditorDelta(lexical.getEditorState());
      return { ref, lexical, peer, unmount };
    }

    /** The peer's note: its caller and its content's text, as the ops spell them. */
    function peerNote(doc: Delta): { caller?: string; text: string } {
      const embed = doc.ops.find((op) => typeof op.insert === "object" && "note" in op.insert);
      const note = (embed as DeltaOpInsertNoteEmbed | undefined)?.insert.note;
      if (!note) throw new Error("no note embed in the peer's ops");
      const text = (note.contents?.ops ?? [])
        .map((op) => (typeof op.insert === "string" ? op.insert : ""))
        .join("");
      return { caller: note.caller, text };
    }

    /** The saved note: its caller and its (plain) content's text. */
    function usjNote(usj: Usj | undefined): { caller?: string; text: string } {
      const note = savedNote(usj);
      return {
        caller: note.caller,
        text: (note.content ?? []).map((item) => (typeof item === "string" ? item : "")).join(""),
      };
    }

    it.each([
      ["its caller deleted", ` ${NBSP}`, 1],
      ["its separator deleted", " +", 2],
      ["its caller deleted and a byte typed behind its slot", ` ${NBSP}x`, 3],
      ["a byte typed after its separator", ` +${NBSP}x`, 4],
      ["the whole caller typed over", "x", 1],
      ["a byte typed onto the caller word", ` +x${NBSP}`, 3],
    ])(
      "reproduce getUsj() while it waits and once it settles: %s",
      async (_name, damaged, caret) => {
        const mounted = await mountComposing(plainNoteUsj);
        await act(async () => {
          mounted.lexical.update(() => {
            const caller = $callerSlot();
            caller.setTextContent(damaged);
            caller.select(caret, caret);
          });
          await Promise.resolve();
          await Promise.resolve();
        });
        // The ops agree with the document they are diffs of, and with what `getUsj()` reads.
        expect(mounted.peer.doc).toEqual(getEditorDelta(mounted.lexical.getEditorState()));
        expect(peerNote(mounted.peer.doc)).toEqual(usjNote(mounted.ref.current?.getUsj()));

        await act(async () => {
          mounted.lexical.dispatchCommand(CLICK_COMMAND, new MouseEvent("click"));
          mounted.lexical.update(() => $textContaining("depart here").select(1, 1));
          await Promise.resolve();
          await Promise.resolve();
        });
        act(() => mounted.ref.current?.commitPendingMarkerEdits());
        expect(mounted.peer.doc).toEqual(getEditorDelta(mounted.lexical.getEditorState()));
        expect(peerNote(mounted.peer.doc)).toEqual(usjNote(mounted.ref.current?.getUsj()));
        mounted.unmount();
      },
    );
  },
);
