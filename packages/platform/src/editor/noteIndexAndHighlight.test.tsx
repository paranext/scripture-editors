/**
 * `EditorRef.getNoteIndex` and `EditorRef.highlightNote`: the two host-facing note affordances a
 * footnotes pane needs — the document-order index a USJ-built notes list addresses notes by, and
 * PT9's selected-caller highlight (`caller_highlight`) on one note's caller at a time.
 */
import Editorial from "../Editorial";
import { EditorRef } from "./editor.model";
import {
  note,
  noteKeys,
  options,
  renderEditor,
  requireDefined,
  scrRef,
} from "./noteEditorRef.test-helpers";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act, render } from "@testing-library/react";
import { createRef } from "react";
import { $getNodeByKey, $getRoot } from "lexical";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { getEmbeddedLexicalEditor } from "../../../../libs/shared-react/src/plugins/usj/react-test.utils";
import { $isNoteNode } from "shared";

const threeNotesUsj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["Test Book"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [
        { type: "verse", marker: "v", number: "1" },
        "first ",
        note("alpha"),
        "second ",
        note("beta"),
        "third ",
        note("gamma"),
        "end",
      ],
    },
  ],
};

const oneNoteUsj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "EXO", content: ["Other Book"] },
    { type: "chapter", marker: "c", number: "2" },
    {
      type: "para",
      marker: "p",
      content: [{ type: "verse", marker: "v", number: "1" }, "other ", note("delta"), "end"],
    },
  ],
};

describe("EditorRef.getNoteIndex", () => {
  it("returns the document-order index for each note key", async () => {
    const { editorRef, lexical } = await renderEditor(threeNotesUsj);
    const keys = noteKeys(lexical);
    expect(keys).toHaveLength(3);
    expect(keys.map((key) => editorRef.getNoteIndex(key))).toEqual([0, 1, 2]);
  });

  it("returns undefined for a key that is not a note", async () => {
    const { editorRef, lexical } = await renderEditor(threeNotesUsj);
    const rootKey = lexical.getEditorState().read(() => $getRoot().getKey());
    expect(editorRef.getNoteIndex(rootKey)).toBeUndefined();
    expect(editorRef.getNoteIndex("no-such-key")).toBeUndefined();
  });

  it("shifts later indexes down after an earlier note is removed", async () => {
    const { editorRef, lexical } = await renderEditor(threeNotesUsj);
    const [first, , third] = noteKeys(lexical);
    await act(async () => {
      editorRef.replaceEmbedUpdate(first, []);
    });
    expect(editorRef.getNoteIndex(third)).toBe(1);
    expect(editorRef.getNoteIndex(first)).toBeUndefined();
  });
});

describe("EditorRef.getNoteKey", () => {
  it("returns the key of the note at a document-order index and undefined past the end", async () => {
    const { editorRef, lexical } = await renderEditor(threeNotesUsj);
    const keys = noteKeys(lexical);
    expect([0, 1, 2].map((i) => editorRef.getNoteKey(i))).toEqual(keys);
    expect(editorRef.getNoteKey(3)).toBeUndefined();
    expect(editorRef.getNoteKey(-1)).toBeUndefined();
  });
});

const HIGHLIGHT_CLASS = "caller_highlight";

function highlightedCallers(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(`.note .${HIGHLIGHT_CLASS}`));
}

function callerOf(container: HTMLElement, noteIndex: number): HTMLElement {
  const notes = container.querySelectorAll<HTMLElement>(".note");
  return requireDefined(
    notes[noteIndex]?.querySelector<HTMLElement>(".immutable-note-caller"),
    `caller of note ${noteIndex}`,
  );
}

describe("EditorRef.highlightNote", () => {
  it("adds caller_highlight to the addressed note's caller and nowhere else", async () => {
    const { editorRef, container } = await renderEditor(threeNotesUsj);
    await act(async () => {
      editorRef.highlightNote(1);
    });
    expect(highlightedCallers(container)).toEqual([callerOf(container, 1)]);
  });

  it("accepts a note key, moves the highlight when re-addressed, and clears on undefined", async () => {
    const { editorRef, lexical, container } = await renderEditor(threeNotesUsj);
    const [, , third] = noteKeys(lexical);
    await act(async () => {
      editorRef.highlightNote(third);
    });
    expect(highlightedCallers(container)).toEqual([callerOf(container, 2)]);
    await act(async () => {
      editorRef.highlightNote(0);
    });
    expect(highlightedCallers(container)).toEqual([callerOf(container, 0)]);
    await act(async () => {
      editorRef.highlightNote(undefined);
    });
    expect(highlightedCallers(container)).toEqual([]);
  });

  it("survives the note being re-keyed by replaceEmbedUpdate", async () => {
    const { editorRef, lexical, container } = await renderEditor(threeNotesUsj);
    const [, second] = noteKeys(lexical);
    await act(async () => {
      editorRef.highlightNote(second);
    });
    const ops = requireDefined(editorRef.getNoteOps(second), "note ops");
    await act(async () => {
      editorRef.replaceEmbedUpdate(second, ops);
    });
    // The note has a new key but is the same note, recovered at its document-order index.
    expect(highlightedCallers(container)).toEqual([callerOf(container, 1)]);
  });

  it("clears when the highlighted note leaves the document", async () => {
    const { editorRef, lexical, container } = await renderEditor(threeNotesUsj);
    const [first] = noteKeys(lexical);
    await act(async () => {
      editorRef.highlightNote(first);
    });
    // Without this the empty expectation below would also pass against a highlight that never
    // applied at all.
    expect(highlightedCallers(container)).toEqual([callerOf(container, 0)]);
    await act(async () => {
      editorRef.replaceEmbedUpdate(first, []);
    });
    expect(highlightedCallers(container)).toEqual([]);
  });

  // The highlight is applied through `classList`, never through node state, so it must not commit
  // an editor update at all. `onUsjChange` alone cannot prove that: it fires only when the
  // DESERIALIZED USJ differs, so a highlight held in node state would dirty the editor and still
  // produce identical USJ. Count commits, and assert the highlight really landed - otherwise a
  // `highlightNote` that did nothing would pass this test twice over.
  it("applies the highlight without committing an editor update", async () => {
    const ref = createRef<EditorRef>();
    const onUsjChange = vi.fn();
    let container: HTMLElement | undefined;
    await act(async () => {
      const result = render(
        <Editorial
          ref={ref}
          defaultUsj={threeNotesUsj}
          scrRef={scrRef}
          onScrRefChange={() => undefined}
          onUsjChange={onUsjChange}
          options={options}
        />,
      );
      container = result.container;
    });
    // This test mounts its own <Editorial> (for onUsjChange) rather than the shared renderEditor,
    // which strips `children`, so the cleaner EditorRefPlugin-child handle isn't reachable — read
    // the editor off the mounted DOM.
    const lexical = getEmbeddedLexicalEditor(container);
    onUsjChange.mockClear();
    let commits = 0;
    const unregister = lexical.registerUpdateListener(() => {
      commits += 1;
    });
    await act(async () => {
      requireDefined(ref.current, "ref").highlightNote(1);
    });
    unregister();

    expect(highlightedCallers(requireDefined(container, "container"))).toEqual([
      callerOf(requireDefined(container, "container"), 1),
    ]);
    expect(commits).toBe(0);
    expect(onUsjChange).not.toHaveBeenCalled();
  });

  it("clears when the document is reloaded, whose notes are a different chapter's", async () => {
    const { editorRef, lexical, container } = await renderEditor(threeNotesUsj);
    const [first] = noteKeys(lexical);
    await act(async () => {
      editorRef.highlightNote(first);
    });
    expect(highlightedCallers(container)).toEqual([callerOf(container, 0)]);
    await act(async () => {
      editorRef.setUsj(oneNoteUsj);
    });
    expect(container.querySelectorAll(".note")).toHaveLength(1);
    expect(highlightedCallers(container)).toEqual([]);
  });

  it("survives the note DOM being recreated by a collapse toggle", async () => {
    const { editorRef, lexical, container } = await renderEditor(threeNotesUsj);
    const [, second] = noteKeys(lexical);
    await act(async () => {
      editorRef.highlightNote(second);
    });
    const before = callerOf(container, 1);
    await act(async () => {
      lexical.update(() => {
        const noteNode = $getNodeByKey(second);
        if (!$isNoteNode(noteNode)) throw new Error("note not found");
        noteNode.setIsCollapsed(false);
      });
    });
    const after = callerOf(container, 1);
    expect(after).not.toBe(before);
    expect(highlightedCallers(container)).toEqual([after]);
  });

  // An unclosed note renders expanded even in Standard view, so its caller is the note's plain
  // caller text rather than an immutable caller element.
  it("highlights the caller of a note built expanded", async () => {
    const unclosedNote: MarkerObject = { ...note("alpha"), closed: "false" };
    const { editorRef, container } = await renderEditor({
      ...threeNotesUsj,
      content: [
        { type: "book", marker: "id", code: "GEN", content: ["Test Book"] },
        { type: "chapter", marker: "c", number: "1" },
        {
          type: "para",
          marker: "p",
          content: [{ type: "verse", marker: "v", number: "1" }, "first ", unclosedNote],
        },
      ],
    });
    expect(container.querySelector(".note .immutable-note-caller")).toBeNull();

    await act(async () => {
      editorRef.highlightNote(0);
    });

    const highlighted = highlightedCallers(container);
    expect(highlighted).toHaveLength(1);
    expect(highlighted[0].textContent?.trim()).toBe("+");
  });

  // A host callback can run inside one of the editor's own updates (`onSelectionChange` runs from a
  // command the update dispatches). Committing there would freeze the update in progress, so its
  // next write would throw.
  it("reads and highlights from inside an update without committing it", async () => {
    const { editorRef, lexical, container } = await renderEditor(threeNotesUsj);
    const [first, second, third] = noteKeys(lexical);
    let index: number | undefined;
    let key: string | undefined;
    await act(async () => {
      lexical.update(() => {
        $getNodeByKey(first)?.remove();
        index = editorRef.getNoteIndex(second);
        key = editorRef.getNoteKey(1);
        editorRef.highlightNote(0);
        const thirdNote = $getNodeByKey(third);
        if ($isNoteNode(thirdNote)) thirdNote.setIsCollapsed(false);
      });
    });
    expect(index).toBe(0);
    expect(key).toBe(third);
    expect(highlightedCallers(container)).toEqual([callerOf(container, 0)]);
  });

  // A host that edits and then highlights by index in the same turn means the note at that index
  // AFTER its edit, not the one that sat there before it.
  it("resolves an index against an edit still in flight", async () => {
    const { editorRef, lexical, container } = await renderEditor(threeNotesUsj);
    const [first] = noteKeys(lexical);
    await act(async () => {
      lexical.update(() => {
        $getNodeByKey(first)?.remove();
      });
      editorRef.highlightNote(0);
    });
    expect(container.querySelectorAll(".note")).toHaveLength(2);
    expect(highlightedCallers(container)).toEqual([callerOf(container, 0)]);
  });
});
