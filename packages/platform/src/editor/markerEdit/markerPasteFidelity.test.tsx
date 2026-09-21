/**
 * Multi-line marker-bearing paste semantics and the `\c`/`\id` strip.
 * A pasted line starting with its own paragraph-marker literal owns that marker instead of also
 * getting the host paragraph's cloned prefix; a marker-free line inherits the host's. `\c`/`\id`
 * never survive paste normalization — pasting either would otherwise reach an unsaveable
 * editor state (a second chapter/book-id node the PDP rejects on save). Kept separate from
 * `whitespaceDisplay.plugin.utils.test.tsx` (the NBSP/claim-policy contract) and
 * `clipboardCopyFidelity.test.tsx` (copy-side byte fidelity) so this file stays focused on the
 * paste-side STRUCTURAL outcome: which paragraphs/markers/nodes a marker-bearing paste produces.
 */
import { MarkerEditPlugin } from "./MarkerEditPlugin";
import {
  copyEvent,
  findOnlyNote,
  historyTestEnvironment,
  pasteEvent,
  serializedState,
  viewOptions,
} from "./markerEdit.test-helpers";
import {
  deserializeSerializedEditorState,
  initialize as initializeDeserialize,
} from "../adaptors/editor-usj.adaptor";
import { act } from "@testing-library/react";
// Reaching inside only for tests (same pattern as markerEdit.test-helpers).
// eslint-disable-next-line @nx/enforce-module-boundaries
import { baseTestEnvironment } from "../../../../../libs/shared-react/src/plugins/usj/react-test.utils";
import { MarkerObject, Usj, usxStringToUsj } from "@eten-tech-foundation/scripture-utilities";
import { $dfs } from "@lexical/utils";
import {
  $createTextNode,
  $getRoot,
  $isTextNode,
  $setState,
  COPY_COMMAND,
  LexicalEditor,
  PASTE_COMMAND,
  TextNode,
  UNDO_COMMAND,
} from "lexical";
import {
  $createMarkerNode,
  $createParaNode,
  $createVerseNode,
  $isCharNode,
  getVisibleOpenMarkerText,
  NBSP,
  textTypeState,
} from "shared";

/** Paste `text` at the caret, then flush the double microtask Tier 2's post-paste reconciliation
 * needs to settle — the same pattern every paste-adjacent suite in this directory uses. */
async function pasteAndSettle(
  editor: LexicalEditor,
  $select: () => void,
  text: string,
): Promise<void> {
  await act(async () =>
    editor.update(() => {
      $select();
      editor.dispatchCommand(PASTE_COMMAND, pasteEvent({ "text/plain": text }).event);
    }),
  );
  await act(async () => {
    await Promise.resolve();
    await Promise.resolve();
  });
}

/** Like `pasteAndSettle`, but takes the full clipboard payload map rather than assuming a bare
 * `text/plain` string — used by the paste-as-plain-text equivalence pins below to dispatch a
 * "full" (plain+html) payload and compare it against a plain-only one. */
async function pastePayloadAndSettle(
  editor: LexicalEditor,
  $select: () => void,
  payload: { [key: string]: string },
): Promise<void> {
  await act(async () =>
    editor.update(() => {
      $select();
      editor.dispatchCommand(PASTE_COMMAND, pasteEvent(payload).event);
    }),
  );
  await act(async () => {
    await Promise.resolve();
    await Promise.resolve();
  });
}

/** One UNDO_COMMAND dispatch, flushed the same way a paste is. */
async function undoAndSettle(editor: LexicalEditor): Promise<void> {
  await act(async () => editor.dispatchCommand(UNDO_COMMAND, undefined));
  await act(async () => {
    await Promise.resolve();
    await Promise.resolve();
  });
}

/** The current document as USJ, via the same `toJSON` → deserialize path every sibling suite
 * reads settled state through. */
function usjOf(editor: LexicalEditor): Usj {
  const usj = editor
    .getEditorState()
    .read(() => deserializeSerializedEditorState(editor.getEditorState().toJSON(), viewOptions));
  if (!usj) throw new Error("editor state did not serialize to USJ");
  return usj;
}

/** All plain-text content of a top-level `MarkerObject`, joined — ignores nested objects (verses,
 * notes); sufficient for the pure-text paragraphs these pins build. */
function textOf(content: MarkerObject): string {
  return (content.content ?? [])
    .filter((item): item is string => typeof item === "string")
    .join("");
}

/** `[marker, textOf(paragraph)]` for every top-level paragraph in `usj`. Fails loudly (rather than
 * silently reading `undefined` off a string via an unchecked cast) if any top-level entry is a
 * bare STRING instead of a paragraph-shaped object — a chapter/verse/book token splitting the
 * enclosing paragraph and stranding plain text outside it is exactly the poisoned-save shape a
 * leaked `\c`/`\id` produces (see the `\c/\id strip on paste` describe below), and a helper that
 * masked that shape instead of erroring could hide the very regression these pins exist to catch. */
function paraMarkerText(usj: Usj): [string | undefined, string][] {
  return usj.content.map((content, index) => {
    if (typeof content === "string")
      throw new Error(
        `expected a paragraph-shaped object at usj.content[${index}], found a bare string: ${JSON.stringify(content)}`,
      );
    return [content.marker, textOf(content)];
  });
}

/** A realistic book+chapter+paragraph document (`usxStringToUsj`, not the bare single-paragraph
 * fixture `singleParaHost` builds) — needed for chapter/book-COUNT assertions, which are
 * meaningless without a real chapter/book already present for a pasted `\c`/`\id` to (not)
 * duplicate. Returns the editor and the paragraph's own text node ("before after"). */
async function bookChapterParaHost(): Promise<{ editor: LexicalEditor; text: TextNode }> {
  initializeDeserialize(undefined);
  const usx = usxStringToUsj(
    `<usx version="3.0"><book code="RUT" style="id">Ruth</book><chapter number="1" style="c" />` +
      `<para style="p">before after</para></usx>`,
  );
  const { editor } = await baseTestEnvironment(
    serializedState(usx),
    <MarkerEditPlugin viewOptions={viewOptions} />,
  );
  let text: TextNode | undefined;
  editor.getEditorState().read(() => {
    text = $dfs($getRoot())
      .map(({ node }) => node)
      .filter($isTextNode)
      .find((node) => node.getTextContent().includes("before"));
  });
  if (!text) throw new Error("host text node not found in the book/chapter/paragraph fixture");
  return { editor, text };
}

/** Every top-level bare STRING entry in `usj.content` — should always be empty. A non-empty
 * result means a chapter/verse/book token split the enclosing paragraph and stranded plain text
 * outside it: the poisoned-save shape a leaked `\c`/`\id` produces. */
function topLevelBareStrings(usj: Usj): string[] {
  return usj.content.filter((item): item is string => typeof item === "string");
}

/** A fresh single-paragraph `\p A` host, with `HistoryPlugin` mounted so undo is available. */
async function singleParaHost(): Promise<{ editor: LexicalEditor; text: TextNode }> {
  initializeDeserialize(undefined);
  let text!: TextNode;
  const { editor } = await historyTestEnvironment(() => {
    const para = $createParaNode("p");
    text = $createTextNode("A");
    $getRoot().append(para.append($createMarkerNode("p"), text));
  });
  return { editor, text };
}

describe("multi-line marker-bearing paste semantics (live-verified 2026-08-07)", () => {
  it('paste "\\p one\\n\\p two" at end of "\\p A": no doubled markers, no empty stray paragraph', async () => {
    const { editor, text } = await singleParaHost();
    await pasteAndSettle(editor, () => text.select(1, 1), "\\p one\n\\p two");

    expect(paraMarkerText(usjOf(editor))).toEqual([
      ["p", "A"],
      ["p", "one"],
      ["p", "two"],
    ]);
  });

  it('undo after "\\p one\\n\\p two" restores the exact pre-paste USJ in one step', async () => {
    const { editor, text } = await singleParaHost();
    const preUsj = usjOf(editor);

    await pasteAndSettle(editor, () => text.select(1, 1), "\\p one\n\\p two");
    await undoAndSettle(editor);

    expect(usjOf(editor)).toEqual(preUsj);
  });

  it('paste marker-free "one\\ntwo" at end of "\\p A": both lines inherit the host marker (existing behavior, re-pinned)', async () => {
    const { editor, text } = await singleParaHost();
    await pasteAndSettle(editor, () => text.select(1, 1), "one\ntwo");

    expect(paraMarkerText(usjOf(editor))).toEqual([
      ["p", "Aone"],
      ["p", "two"],
    ]);
  });

  it('undo after marker-free "one\\ntwo" restores the exact pre-paste USJ in one step', async () => {
    const { editor, text } = await singleParaHost();
    const preUsj = usjOf(editor);

    await pasteAndSettle(editor, () => text.select(1, 1), "one\ntwo");
    await undoAndSettle(editor);

    expect(usjOf(editor)).toEqual(preUsj);
  });

  it('paste "tail\\n\\q1 line" at end of "\\p A": first line merges into the host, second owns its own marker', async () => {
    const { editor, text } = await singleParaHost();
    await pasteAndSettle(editor, () => text.select(1, 1), "tail\n\\q1 line");

    expect(paraMarkerText(usjOf(editor))).toEqual([
      ["p", "Atail"],
      ["q1", "line"],
    ]);
  });

  it('undo after "tail\\n\\q1 line" restores the exact pre-paste USJ in one step', async () => {
    const { editor, text } = await singleParaHost();
    const preUsj = usjOf(editor);

    await pasteAndSettle(editor, () => text.select(1, 1), "tail\n\\q1 line");
    await undoAndSettle(editor);

    expect(usjOf(editor)).toEqual(preUsj);
  });

  /** A `\p` host with a verse, for the note/verse-materialization pins below. */
  async function versedHost(): Promise<{ editor: LexicalEditor; text: TextNode }> {
    initializeDeserialize(undefined);
    let text!: TextNode;
    const { editor } = await historyTestEnvironment(() => {
      const para = $createParaNode("p");
      const verse = $createVerseNode("1", getVisibleOpenMarkerText("v", "1"));
      text = $createTextNode("In the beginning God created");
      $getRoot().append(para.append($createMarkerNode("p"), verse, text));
    });
    return { editor, text };
  }

  it('paste "\\f + \\ft note\\f*" mid-verse: a collapsed NoteNode materializes with USJ caller "+"', async () => {
    const { editor, text } = await versedHost();
    await pasteAndSettle(editor, () => text.select(9, 9), "\\f + \\ft note\\f*"); // "In the be|ginning..."

    editor.getEditorState().read(() => {
      const note = findOnlyNote($getRoot());
      expect(note.getMarker()).toBe("f");
      expect(note.getCaller()).toBe("+");
      expect(note.getIsCollapsed()).toBe(true);
    });
    const para = (usjOf(editor).content as MarkerObject[])[0];
    const note = para.content?.find(
      (item): item is MarkerObject => typeof item !== "string" && item.type === "note",
    );
    expect(note).toBeDefined();
    expect(note?.marker).toBe("f");
    expect(note?.caller).toBe("+");
  });

  it('undo after "\\f + \\ft note\\f*" mid-verse restores the exact pre-paste USJ in one step', async () => {
    const { editor, text } = await versedHost();
    const preUsj = usjOf(editor);

    await pasteAndSettle(editor, () => text.select(9, 9), "\\f + \\ft note\\f*");
    await undoAndSettle(editor);

    expect(usjOf(editor)).toEqual(preUsj);
  });

  it('paste "\\v 2 rest" at paragraph end: a real VerseNode is created, the verse sequence stays sane', async () => {
    const { editor, text } = await versedHost();
    const end = "In the beginning God created".length;
    await pasteAndSettle(editor, () => text.select(end, end), "\\v 2 rest");

    const para = (usjOf(editor).content as MarkerObject[])[0];
    const verses = (para.content ?? []).filter(
      (item): item is MarkerObject => typeof item !== "string" && item.type === "verse",
    );
    expect(verses.map((verse) => verse.number)).toEqual(["1", "2"]);
  });

  it('undo after "\\v 2 rest" restores the exact pre-paste USJ in one step', async () => {
    const { editor, text } = await versedHost();
    const preUsj = usjOf(editor);
    const end = "In the beginning God created".length;

    await pasteAndSettle(editor, () => text.select(end, end), "\\v 2 rest");
    await undoAndSettle(editor);

    expect(usjOf(editor)).toEqual(preUsj);
  });
});

describe("\\c/\\id strip on paste", () => {
  it('paste "\\c 5" on its own line mid-chapter: no chapter node created, no "\\c" survives, content unchanged', async () => {
    const { editor, text } = await singleParaHost();
    await pasteAndSettle(editor, () => text.select(1, 1), "\\c 5");

    const usj = usjOf(editor);
    expect(paraMarkerText(usj)).toEqual([["p", "A"]]);
    editor.getEditorState().read(() => {
      expect($getRoot().getTextContent()).not.toContain("\\c");
    });
  });

  it('undo after pasting bare "\\c 5" (a no-op paste) leaves the USJ unchanged', async () => {
    const { editor, text } = await singleParaHost();
    const preUsj = usjOf(editor);

    await pasteAndSettle(editor, () => text.select(1, 1), "\\c 5");
    await undoAndSettle(editor);

    expect(usjOf(editor)).toEqual(preUsj);
  });

  it('paste "\\id GEN" is stripped the same way as "\\c"', async () => {
    const { editor, text } = await singleParaHost();
    await pasteAndSettle(editor, () => text.select(1, 1), "\\id GEN");

    const usj = usjOf(editor);
    expect(paraMarkerText(usj)).toEqual([["p", "A"]]);
    editor.getEditorState().read(() => {
      expect($getRoot().getTextContent()).not.toContain("\\id");
    });
  });

  it('paste "before\\n\\c 5\\nafter": the "\\c" line vanishes, "before"/"after" paste per the normal multi-line rules', async () => {
    const { editor, text } = await singleParaHost();
    await pasteAndSettle(editor, () => text.select(1, 1), "before\n\\c 5\nafter");

    expect(paraMarkerText(usjOf(editor))).toEqual([
      ["p", "Abefore"],
      ["p", "after"],
    ]);
    editor.getEditorState().read(() => {
      expect($getRoot().getTextContent()).not.toContain("\\c");
    });
  });

  it('undo after "before\\n\\c 5\\nafter" restores the exact pre-paste USJ in one step', async () => {
    const { editor, text } = await singleParaHost();
    const preUsj = usjOf(editor);

    await pasteAndSettle(editor, () => text.select(1, 1), "before\n\\c 5\nafter");
    await undoAndSettle(editor);

    expect(usjOf(editor)).toEqual(preUsj);
  });

  it("a pasted \\c never leaves the editor in the unsaveable state the live repro produced: exactly one chapter survives, no bare top-level string strands outside the paragraph", async () => {
    // A pasted bare `\c 2` mid-chapter must not put a second chapter node into a real
    // book/chapter/paragraph document: the PDP rejects a save with a second chapter marker
    // ("Multiple chapter markers present"), and that failure surfaces only in the renderer log —
    // disk and other editors would silently stop reflecting further edits. Reproduced here in a
    // realistic book+chapter+paragraph document (not the bare single-paragraph fixture the pins
    // above use) so the chapter-count assertion means something.
    const { editor, text } = await bookChapterParaHost();

    await pasteAndSettle(editor, () => text.select(7, 7), "\\c 5");

    const usj = usjOf(editor);
    const chapters = usj.content.filter(
      (item): item is MarkerObject => typeof item !== "string" && item.type === "chapter",
    );
    expect(chapters).toHaveLength(1);
    expect(chapters[0].number).toBe("1"); // the ORIGINAL chapter, untouched — not the pasted "5"
    // A bare top-level string is the other half of the poisoned shape: a chapter token closes the
    // enclosing paragraph the same way it does on a real load, stranding whatever text followed
    // it outside any paragraph at all.
    expect(topLevelBareStrings(usj)).toEqual([]);
  });

  it('paste "x \\c 5 y" mid-paragraph (the token is NOT at the start of its line): still exactly one chapter, no stranded top-level string', async () => {
    // The `\c`/`\id` strip is not anchored to a line's start — a token can land mid-sentence
    // (a paste that doesn't happen to fall on a line boundary), and an anchored strip would miss
    // it entirely: the unstripped shape reproduces the SAME poisoning (a second chapter node) PLUS
    // a bare top-level string for whatever followed the marker's payload, since a chapter token
    // still closes the enclosing paragraph wherever it lands.
    const { editor, text } = await bookChapterParaHost();

    await pasteAndSettle(editor, () => text.select(7, 7), "x \\c 5 y");

    const usj = usjOf(editor);
    const chapters = usj.content.filter(
      (item): item is MarkerObject => typeof item !== "string" && item.type === "chapter",
    );
    expect(chapters).toHaveLength(1);
    expect(chapters[0].number).toBe("1");
    // Not asserting `not.toContain("\\c")` on the whole document here: this fixture's OWN book
    // legitimately carries a real "\c 1" glyph, unlike the bare single-paragraph fixture the
    // earlier pins use — the chapter-count and paragraph-content assertions already cover what
    // matters (the pasted "\c 5" left no trace, structural or textual, inside the paragraph).
    expect(topLevelBareStrings(usj)).toEqual([]);
    // The strip takes the marker and its chapter NUMBER, and stops there: the trailing "y" is
    // ordinary content the user pasted and survives. ("yafter" only because this fixture splits
    // "before after" at offset 7 and the payload lands between the halves.) Assert the whole
    // paragraph, not just that "y" appears somewhere, so a strip that widened again — back to
    // eating to the newline — fails here rather than passing on the untouched "before ".
    expect((usj.content[2] as MarkerObject).content).toEqual(["before x yafter"]);
  });

  it('paste "text \\id GEN more" mid-paragraph: still exactly one book id, one chapter, no stranded top-level string', async () => {
    const { editor, text } = await bookChapterParaHost();

    await pasteAndSettle(editor, () => text.select(7, 7), "text \\id GEN more");

    const usj = usjOf(editor);
    const books = usj.content.filter(
      (item): item is MarkerObject => typeof item !== "string" && item.type === "book",
    );
    const chapters = usj.content.filter(
      (item): item is MarkerObject => typeof item !== "string" && item.type === "chapter",
    );
    expect(books).toHaveLength(1);
    expect(books[0].code).toBe("RUT"); // the ORIGINAL book, untouched — not the pasted "GEN"
    expect(chapters).toHaveLength(1);
    expect(topLevelBareStrings(usj)).toEqual([]);
    expect((usj.content[2] as MarkerObject).content).toEqual(["before text after"]);
  });

  it.each([["\\c 5"], ["\\id MAT"], ["\\c 5\n\\id MAT"]])(
    "a paste of %j over a selection is a no-op: nothing survives the strip, so nothing replaces the selection",
    async (payload) => {
      // The strip leaves nothing to insert, so the paste has nothing to replace the selection
      // WITH. Declining is not an option either — it would hand the raw `\c` to Lexical's own
      // paste — so the paste is claimed and changes nothing.
      const { editor, text } = await singleParaHost();
      await pasteAndSettle(editor, () => text.select(0, 1), payload);

      expect(paraMarkerText(usjOf(editor))).toEqual([["p", "A"]]);
    },
  );

  it('paste "before\\n\\c 5 \\nafter" — the chapter line as this editor copies it, trailing separator included: no near-empty paragraph where the chapter was', async () => {
    // A chapter line copies as `\c 5 ` (its glyph's trailing separator becomes a plain space), so
    // stripping the token leaves a lone space. That residue is the token's own separator, not
    // content, and the line goes with the token exactly as a separator-less `\c 5` line does.
    const { editor, text } = await singleParaHost();
    await pasteAndSettle(editor, () => text.select(1, 1), "before\n\\c 5 \nafter");

    expect(paraMarkerText(usjOf(editor))).toEqual([
      ["p", "Abefore"],
      ["p", "after"],
    ]);
  });

  it("a native paste of this editor's own copy of a chapter line adds no chapter or book node", async () => {
    // Ctrl+V reaches the editor through `navigator.clipboard.read()`, which cannot carry the
    // private `application/x-lexical-editor` flavor, but a paste that arrives as a real
    // `ClipboardEvent` (Shift+Insert, the browser's own context-menu Paste) still has it — and
    // that flavor would rebuild the copied `ChapterNode`/`BookNode` verbatim, past the `\c`/`\id`
    // strip. So the copy omits the flavor for a selection touching either, and this payload is
    // every flavor that copy actually wrote.
    const { editor, text } = await bookChapterParaHost();
    await act(async () =>
      editor.update(() => {
        const root = $getRoot();
        root.select(0, root.getChildrenSize());
      }),
    );
    const { event: copy, getData } = copyEvent();
    await act(async () => editor.dispatchCommand(COPY_COMMAND, copy));
    const payload = Object.fromEntries(
      ["text/plain", "text/html", "application/x-lexical-editor"]
        .map((type) => [type, getData(type)])
        .filter(([, value]) => value !== ""),
    );
    expect(payload["text/plain"]).toContain("\\c 1");

    await pastePayloadAndSettle(editor, () => text.select(7, 7), payload);

    const usj = usjOf(editor);
    const ofType = (type: string) =>
      usj.content.filter(
        (item): item is MarkerObject => typeof item !== "string" && item.type === type,
      );
    expect(ofType("chapter")).toHaveLength(1);
    expect(ofType("book")).toHaveLength(1);
    expect(topLevelBareStrings(usj)).toEqual([]);
  });
});

describe("a pasted marker literal splits rather than retagging the host", () => {
  it('paste "\\zz one two" at a "\\p" host\'s content start: the host stays a `\\p`, the pasted marker gets its own paragraph', async () => {
    // A paste inserts what was pasted and nothing more. The host paragraph keeps the marker it
    // had — deleting it would be destroying a byte the user never selected — so the line splits,
    // leaving the (now empty) host ahead of the pasted paragraph. Paratext 9 reads the same bytes
    // the same way: `NormalizeTokenUsfm` (ParatextData/UsfmToken.cs) writes a line break before a
    // Paragraph token whenever the output already has content (its legacy USFM-2.0-conversion mode
    // aside), which is exactly this two-markers-in-a-row case. An UNKNOWN marker is paragraph-kind
    // here, same as everywhere else in the engine, so `\zz` behaves exactly as `\q1` would.
    initializeDeserialize(undefined);
    let sep!: TextNode;
    const { editor } = await historyTestEnvironment(() => {
      const para = $createParaNode("p");
      sep = $createTextNode(NBSP);
      $setState(sep, textTypeState, "marker-trailing-space");
      $getRoot().append(para.append($createMarkerNode("p"), sep));
    });

    await pasteAndSettle(
      editor,
      () => sep.select(sep.getTextContentSize(), sep.getTextContentSize()),
      "\\zz one two",
    );

    expect(paraMarkerText(usjOf(editor))).toEqual([
      ["p", ""],
      ["zz", "one two"],
    ]);
  });

  it("a multi-line paste never invents a `\\p` for a line that already carries its own marker", async () => {
    // A multi-line paste replays each line break as a paragraph split, and the engine injects a
    // marker prefix onto every fresh split paragraph (`$paraMarkerDeletionTransform`, the
    // `splitExpected` branch) so it is not read as marker-deleted and merged back. A pasted line
    // carrying its OWN marker needs no such prefix, and injecting one anyway put a `\p ` glyph in
    // front of the marker the user pasted — settling as a stray empty `\p` ahead of the real
    // paragraph.
    //
    // `\b` is the case that shows it: a blank-line marker carries no content and no separator, so
    // the line is nothing but its marker and there is no terminated literal for Tier 2 to resolve
    // in the paste's own update. Before the guard, every `\b` in a pasted document gained an empty
    // `\p` in front of it — 16 of them in this repo's one real-world fixture (2sa).
    initializeDeserialize(undefined);
    let sep!: TextNode;
    const { editor } = await historyTestEnvironment(() => {
      const para = $createParaNode("p");
      sep = $createTextNode(NBSP);
      $setState(sep, textTypeState, "marker-trailing-space");
      $getRoot().append(para.append($createMarkerNode("p"), sep));
    });

    await pasteAndSettle(
      editor,
      () => sep.select(sep.getTextContentSize(), sep.getTextContentSize()),
      "\\p one\n\\b\n\\q1 two",
    );

    // The empty host the paste landed in, then exactly the three pasted paragraphs — no invented
    // `\p` anywhere, `\b` included.
    expect(paraMarkerText(usjOf(editor))).toEqual([
      ["p", ""],
      ["p", "one"],
      ["b", ""],
      ["q1", "two"],
    ]);
  });

  it('paste "\\zbold* rest" into an "\\s1" host: a CLOSER is not the pasted paragraph\'s own marker, so the host keeps its glyph', async () => {
    // The dedup only fires for a pasted PARAGRAPH-marker OPENER. Its literal pattern accepts the
    // marker name followed by a separator and nothing else: allow a closer's `*` there and
    // `\zbold*` reads as the marker `zbold`, which `isParaKindMarker` calls a paragraph (unknown
    // markers are paragraphs), so the host's own `\s1` glyph is dropped as "redundant" and the
    // paragraph silently loses its real marker. Reachable in any project with a custom.sty char
    // style: copy from just before a `\zbold*` closing glyph to end of line, paste at the content
    // start of a section heading.
    initializeDeserialize(undefined);
    let sep!: TextNode;
    const { editor } = await historyTestEnvironment(() => {
      const para = $createParaNode("s1");
      sep = $createTextNode(NBSP);
      $setState(sep, textTypeState, "marker-trailing-space");
      $getRoot().append(para.append($createMarkerNode("s1"), sep));
    });

    await pasteAndSettle(
      editor,
      () => sep.select(sep.getTextContentSize(), sep.getTextContentSize()),
      "\\zbold* rest",
    );

    const paras = paraMarkerText(usjOf(editor));
    expect(paras).toHaveLength(1);
    expect(paras[0][0]).toBe("s1");
    expect(paras[0][1]).toContain("rest");
  });
});

/** A `\p` host holding "A", plus a second paragraph to depart into. Returns the host's content
 * text node (the caret target: a paste at "A"'s offset 0 is a paste at the paragraph's content
 * start) and the departure paragraph's text node. */
async function deferredSettleHost(): Promise<{
  editor: LexicalEditor;
  content: TextNode;
  departure: TextNode;
}> {
  initializeDeserialize(undefined);
  let content!: TextNode;
  let departure!: TextNode;
  const { editor } = await historyTestEnvironment(() => {
    const host = $createParaNode("p");
    const separator = $createTextNode(NBSP);
    $setState(separator, textTypeState, "marker-trailing-space");
    content = $createTextNode("A");
    const departurePara = $createParaNode("p");
    departure = $createTextNode("depart here");
    $getRoot().append(
      host.append($createMarkerNode("p"), separator, content),
      departurePara.append($createMarkerNode("p"), departure),
    );
  });
  return { editor, content, departure };
}

/** Moves the caret out of the host paragraph and flushes the settle it triggers. */
async function departAndSettle(editor: LexicalEditor, departure: TextNode): Promise<void> {
  await act(async () => editor.update(() => departure.select(0, 0)));
  await act(async () => {
    await Promise.resolve();
    await Promise.resolve();
  });
}

describe("a DEFERRED settle treats pasted and typed bytes identically", () => {
  // Bytes whose rebuild would EJECT content out of a milestone deliberately do NOT settle in the
  // update that produced them (`markerEditTier2Trigger.utils.ts`: ejection rearranges the line
  // under a caret the user is still on) — they pend until caret departure. That is the one shape
  // where a paste reaches its rebuild in a LATER update than the one that inserted it, so it is
  // where a paste-only rule would have had to carry provenance across the gap. There is no such
  // rule: the settle rebuilds what the paragraph holds, however those bytes arrived.
  const EJECTING_LINE = '\\p \\qt1-s\\*|who=""\\*';
  /** What loading `EJECTING_LINE` produces: the ejected fixed point — the milestone closed, the
   * attribute list it could not hold left outside it, and the author's own `\*` stranded. */
  const EJECTED_PARA = {
    type: "para",
    marker: "p",
    content: [{ type: "ms", marker: "qt1-s" }, '|who=""', { type: "unmatched", marker: "*" }, "A"],
  };
  const DEPARTURE_PARA = { type: "para", marker: "p", content: ["depart here"] };
  /** The host paragraph, left empty ahead of the pasted/typed one by the split. */
  const EMPTY_HOST_PARA = { type: "para", marker: "p" };

  it("paste at an existing paragraph's content start: the bytes pend, then split on caret departure", async () => {
    const { editor, content, departure } = await deferredSettleHost();

    await pasteAndSettle(editor, () => content.select(0, 0), EJECTING_LINE);
    // The paste's own update inserted the bytes and stopped: the paragraph still holds them as
    // literal text. Asserted so this pin cannot pass through the immediate-rebuild path it exists
    // to look past.
    expect(usjOf(editor).content).toEqual([
      { type: "para", marker: "p", content: [`${EJECTING_LINE}A`] },
      DEPARTURE_PARA,
    ]);

    await departAndSettle(editor, departure);

    expect(usjOf(editor).content).toEqual([EMPTY_HOST_PARA, EJECTED_PARA, DEPARTURE_PARA]);
  });

  it("the same bytes TYPED settle to the identical document — paste has no rule of its own here", async () => {
    const { editor, content, departure } = await deferredSettleHost();

    await act(async () =>
      editor.update(() => {
        const selection = content.select(0, 0);
        selection.insertText(EJECTING_LINE);
      }),
    );
    await departAndSettle(editor, departure);

    expect(usjOf(editor).content).toEqual([EMPTY_HOST_PARA, EJECTED_PARA, DEPARTURE_PARA]);
  });
});

describe("paste-as-plain-text equivalence: no literal mode, plain always wins", () => {
  // Paste-as-plain-text (docs/clipboard-semantics.md): Ctrl+Shift+V / "paste as plain
  // text" narrows the clipboard payload down to `text/plain` only, but `$handlePasteForStandardView`
  // reads `text/plain` unconditionally whenever it is present — the `text/html` leg only comes into
  // play when `text/plain` is ABSENT (`htmlPasteText(html)` fallback). So a full (plain+html) paste
  // and a plain-only paste of the SAME `text/plain` bytes must produce byte-identical final USJ: by
  // construction, not by coincidence. Each pin below dispatches the same paste text twice, on two
  // fresh hosts — once with a DELIBERATELY mismatched `text/html` alongside it (proving html is
  // ignored outright, not merely equivalent to plain here) and once with `text/plain` alone — then
  // asserts the two final documents are identical. There is no separate "paste literally, don't
  // tokenize markers" code path in Standard view (matching P9, which has no Paste Special either):
  // the second pin below additionally asserts a plain-only paste still tokenizes a marker pair into
  // a real CharNode rather than leaving it as literal `\marker` text.
  const MISMATCHED_HTML = "<p>this text must never appear in the pasted result</p>";

  it('"\\p one\\n\\p two" (multi-line paragraph split): full (plain+html) payload and plain-only payload paste identically', async () => {
    const hostA = await singleParaHost();
    const hostB = await singleParaHost();
    const text = "\\p one\n\\p two";

    await pastePayloadAndSettle(hostA.editor, () => hostA.text.select(1, 1), {
      "text/plain": text,
      "text/html": MISMATCHED_HTML,
    });
    await pastePayloadAndSettle(hostB.editor, () => hostB.text.select(1, 1), {
      "text/plain": text,
    });

    const usjA = usjOf(hostA.editor);
    const usjB = usjOf(hostB.editor);
    expect(usjA).toEqual(usjB);
    // Matches the multi-line marker-bearing paste pin above for this exact fixture: no doubled
    // markers, no stray empty paragraph.
    expect(paraMarkerText(usjA)).toEqual([
      ["p", "A"],
      ["p", "one"],
      ["p", "two"],
    ]);
    hostA.editor.getEditorState().read(() => {
      expect($getRoot().getTextContent()).not.toContain("must never appear");
    });
  });

  it('"\\nd Lord\\nd* " (marker-bearing inline span): full (plain+html) payload and plain-only payload paste identically, and the plain-only payload still tokenizes — there is no literal mode', async () => {
    const hostA = await singleParaHost();
    const hostB = await singleParaHost();
    const text = "\\nd Lord\\nd* ";

    await pastePayloadAndSettle(hostA.editor, () => hostA.text.select(1, 1), {
      "text/plain": text,
      "text/html": MISMATCHED_HTML,
    });
    await pastePayloadAndSettle(hostB.editor, () => hostB.text.select(1, 1), {
      "text/plain": text,
    });

    const usjA = usjOf(hostA.editor);
    const usjB = usjOf(hostB.editor);
    expect(usjA).toEqual(usjB);
    hostA.editor.getEditorState().read(() => {
      expect($getRoot().getTextContent()).not.toContain("must never appear");
    });
    // "No literal mode": the plain-only payload's `\nd`…`\nd*` pair must be recognized by Tier 2
    // and rebuilt as a real CharNode, not survive as unrecognized literal marker text.
    hostB.editor.getEditorState().read(() => {
      const chars = $dfs($getRoot())
        .map(({ node }) => node)
        .filter($isCharNode);
      const ndChars = chars.filter((char) => char.getMarker() === "nd");
      expect(ndChars).toHaveLength(1);
      expect(ndChars[0].getTextContent()).toContain("Lord");
    });
  });
});

describe("Paratext 9 clipboard html (P9→P10 paste)", () => {
  // P9's `text/plain` for a collapsed note is the rendered caller GLYPH alone — the note's real
  // bytes ride its html as an escaped `<!--usfm:…-->` comment inside a span P9 marks `exclude`
  // (`Standard.xslt`). Reading the plain carrier therefore pasted one stray character where a
  // footnote belonged. `getPastePayload` (`whitespaceDisplay.plugin.utils.ts`) decodes a P9-flavoured
  // html instead, and the decoder's own unit pins live in `paratext9Clipboard.utils.test.ts`; these
  // pins are the end-to-end half — the paste really materializes a NoteNode with P9's caller and
  // body. A NON-P9 html alongside `text/plain` is unaffected and still ignored outright (the
  // `MISMATCHED_HTML` pins in the paste-as-plain-text equivalence describe above).

  /** P9's `XsltExtensions.EscapeComment`: every character except `a-zA-Z` becomes `%` plus four
   * uppercase hex digits, because an html comment may contain neither `--` nor `>`. Duplicated from
   * `paratext9Clipboard.utils.test.ts` so this suite's fixture states the USFM it means rather than
   * a wall of hex. */
  function escapeComment(data: string): string {
    return data
      .split("")
      .map((char) =>
        /[a-zA-Z]/.test(char)
          ? char
          : `%${char.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`,
      )
      .join("");
  }

  /** P9's collapsed-note html: the caller glyph as the span's only visible text, the note's USFM as
   * the last of its five comments. Shape taken from P9's own test corpus
   * (`ParatextInternalShared.Tests/UsfmUtils/UsfmUtilsTests.cs`). */
  function p9NoteHtml(style: string, caller: string, body: string, glyph: string): string {
    const usfm = `\\${style} ${caller} ${body}\\${style}*`;
    return (
      `<span class="caller caller_big exclude showtooltip " id="caller_ID0EHB" attachmentid=""` +
      ` contenteditable="false">` +
      `<!--note--><!--${style}--><!--${escapeComment(caller)}--><!--${escapeComment(body)}-->` +
      `<!--usfm:${escapeComment(usfm)}-->${glyph}</span>`
    );
  }

  /** A `\p` host with a verse, matching the note-materialization pins above. */
  async function versedHost(): Promise<{ editor: LexicalEditor; text: TextNode }> {
    initializeDeserialize(undefined);
    let text!: TextNode;
    const { editor } = await historyTestEnvironment(() => {
      const para = $createParaNode("p");
      const verse = $createVerseNode("1", getVisibleOpenMarkerText("v", "1"));
      text = $createTextNode("In the beginning God created");
      $getRoot().append(para.append($createMarkerNode("p"), verse, text));
    });
    return { editor, text };
  }

  it("materializes P9's footnote from the html carrier instead of pasting the caller glyph its text/plain carries", async () => {
    const { editor, text } = await versedHost();
    await pastePayloadAndSettle(editor, () => text.select(9, 9), {
      "text/plain": "a",
      "text/html": p9NoteHtml("f", "+", "\\fr 1.1 \\ft text", "a"),
    });

    editor.getEditorState().read(() => {
      const note = findOnlyNote($getRoot());
      expect(note.getMarker()).toBe("f");
      expect(note.getCaller()).toBe("+");
      expect(note.getIsCollapsed()).toBe(true);
    });
    const para = (usjOf(editor).content as MarkerObject[])[0];
    const note = para.content?.find(
      (item): item is MarkerObject => typeof item !== "string" && item.type === "note",
    );
    expect(note?.caller).toBe("+");
    // The body P9's `usfm:` comment carried, re-tokenized into real note children — `\fr` and
    // `\ft` both unclosed, the shape ParatextData itself produces for footnote content.
    expect(note?.content).toEqual([
      { type: "char", marker: "fr", closed: "false", content: ["1.1 "] },
      { type: "char", marker: "ft", closed: "false", content: ["text"] },
    ]);
    // The glyph the plain carrier offered is nowhere in the document: had the presence rule won,
    // `In the be|ginning` would read "In the bea ginning" with no note at all.
    const paragraphText = (para.content ?? [])
      .filter((item): item is string => typeof item === "string")
      .join("");
    expect(paragraphText).toBe("In the beginning God created");
  });

  it("materializes a cross-reference's `-` caller, which P9 renders as the glyph `*`", async () => {
    const { editor, text } = await versedHost();
    await pastePayloadAndSettle(editor, () => text.select(9, 9), {
      "text/plain": "*",
      "text/html": p9NoteHtml("x", "-", "\\xo 1:26: \\xo*\\xt 1Cor 11:7\\xt*", "*"),
    });

    editor.getEditorState().read(() => {
      const note = findOnlyNote($getRoot());
      expect(note.getMarker()).toBe("x");
      expect(note.getCaller()).toBe("-");
    });
  });
});
