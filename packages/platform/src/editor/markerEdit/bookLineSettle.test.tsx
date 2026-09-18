/**
 * Integration regressions for the BOOK settle scope — the `\id` line's own content.
 *
 * The line's text is content like any paragraph's: PT9 accepts char spans and notes there, and
 * our own tokenizer parses them back as real markers on the next load. Without a settle scope the
 * editor kept them literal on screen while the save wrote real markers, so what the user typed and
 * what the file held disagreed until a reload. These pins are what make the line's bytes settle
 * like every other content run's — and what hold the line's own boundary: the immutable
 * `\id GEN ` prefix is never re-derived from bytes, and a typed block marker (`\p`, `\ip`, `\c`)
 * ends the line exactly where the file bytes would, starting the new block after it.
 */

import { testEnvironment, viewOptions } from "./markerEdit.test-helpers";
import { $settledUsj } from "./virtualSettle.utils";
import { Tier2Context, tokenizedBookLine } from "./tier2Rebuild.utils";
import { deserializeSerializedEditorState } from "../adaptors/editor-usj.adaptor";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createTextNode,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  KEY_ENTER_COMMAND,
  LexicalEditor,
  TextNode,
} from "lexical";
import {
  $createBookNode,
  $createImmutableTypedTextNode,
  $isBookNode,
  $isChapterNode,
  $isCharNode,
  $isNoteNode,
  $isParaNode,
  BookNode,
  getMarker as bundledGetMarker,
  getPendedDisplayOwners,
  NBSP,
} from "shared";

// jsdom implements no layout, so `Range.prototype.getBoundingClientRect` is absent and Lexical's
// post-commit scroll-into-view throws from outside any test's promise chain. Same stub the sibling
// marker-edit tests use.
if (typeof Range.prototype.getBoundingClientRect !== "function")
  Range.prototype.getBoundingClientRect = () => new DOMRect();

const context: Tier2Context = { viewOptions, getMarker: bundledGetMarker };

/** The `\id` line as `createBook` builds it in markerMode "editable": one immutable `\id GEN `
 * glyph decorator, then the line's own content. */
function $buildBookLine(content: string): void {
  $getRoot().append(
    $createBookNode("GEN").append(
      $createImmutableTypedTextNode("marker", `\\id GEN${NBSP}`),
      $createTextNode(content),
    ),
  );
}

function $bookLine(): BookNode {
  const book = $getRoot().getChildren().find($isBookNode);
  if (!book) throw new Error("expected a BookNode");
  return book;
}

/** Retype the `\id` line's content run, leaving the collapsed caret at `caretOffset` — its end by
 * default, the way typing does. */
async function typeInBookLine(
  editor: LexicalEditor,
  text: string,
  caretOffset = text.length,
): Promise<void> {
  await act(async () =>
    editor.update(() => {
      const run = $bookLine().getChildren().find($isTextNode) as TextNode | undefined;
      if (!run) throw new Error("expected the book line's content run");
      run.setTextContent(text);
      run.select(caretOffset, caretOffset);
    }),
  );
}

/**
 * Where the collapsed caret sits: whether it is inside the `\id` line, and the text on either side
 * of it. A caret at a text node's edge reads the flanking sibling's text instead, since the same
 * boundary can be hosted by either node.
 */
function $caretContext(): { inBook: boolean; before: string; after: string } {
  const selection = $getSelection();
  if (!$isRangeSelection(selection) || !selection.isCollapsed())
    throw new Error("expected a collapsed caret");
  const node = selection.anchor.getNode();
  if (!$isTextNode(node)) throw new Error("expected the caret on text");
  const text = node.getTextContent();
  const { offset } = selection.anchor;
  return {
    inBook: $bookLine().isParentOf(node),
    before:
      offset > 0 ? text.slice(0, offset) : (node.getPreviousSibling()?.getTextContent() ?? ""),
    after:
      offset < text.length ? text.slice(offset) : (node.getNextSibling()?.getTextContent() ?? ""),
  };
}

/** Read the settled USJ exactly as `Editor.tsx`'s `getUsj()` does. */
function settledUsjOf(editor: LexicalEditor): Usj | undefined {
  const editorState = editor.getEditorState();
  const serializedState = editorState.toJSON();
  const pendedKeys = getPendedDisplayOwners(editor) ?? new Set<string>();
  return editorState.read(() => $settledUsj(serializedState, pendedKeys, context));
}

/** The plain editor->USJ conversion, with no settle logic — what a refusing scope must match. */
function unsettledUsjOf(editor: LexicalEditor): Usj | undefined {
  const editorState = editor.getEditorState();
  return editorState.read(() =>
    deserializeSerializedEditorState(editorState.toJSON(), viewOptions),
  );
}

/** The first USJ content entry, which is always the book. */
function bookUsj(usj: Usj | undefined): MarkerObject | undefined {
  const entry = usj?.content[0];
  return entry && typeof entry !== "string" ? (entry as MarkerObject) : undefined;
}

describe("the `\\id` line's settle scope", () => {
  it("re-tokenizes a TERMINATED typed char marker into a real span", async () => {
    const { editor } = await testEnvironment(() => $buildBookLine("Genesis"));

    await typeInBookLine(editor, "Genesis \\nd Lord\\nd* text");

    editor.getEditorState().read(() => {
      const spans = $bookLine().getChildren().filter($isCharNode);
      expect(spans).toHaveLength(1);
      expect(spans[0].getMarker()).toBe("nd");
      expect(spans[0].getTextContent()).toContain("Lord");
      // The immutable prefix is never re-derived from bytes — it is preserved across the rebuild.
      expect($bookLine().getCode()).toBe("GEN");
      expect($bookLine().getTextContent()).toContain(`\\id GEN${NBSP}`);
    });
    expect(JSON.stringify(editor.getEditorState().toJSON())).not.toContain("\\\\nd ");
  });

  it("re-tokenizes a typed FOOTNOTE in the line (PT9 accepts a note in `\\id` text)", async () => {
    const { editor } = await testEnvironment(() => $buildBookLine("Genesis"));

    await typeInBookLine(editor, "Genesis \\f + \\ft a note\\f* text");

    editor.getEditorState().read(() => {
      const notes = $bookLine().getChildren().filter($isNoteNode);
      expect(notes).toHaveLength(1);
      expect(notes[0].getMarker()).toBe("f");
    });
  });

  it("leaves an UNTERMINATED backslash run pending until Enter, then settles it", async () => {
    const { editor } = await testEnvironment(() => $buildBookLine("Genesis"));

    await typeInBookLine(editor, "Genesis \\nd");
    expect(JSON.stringify(editor.getEditorState().toJSON())).toContain("\\\\nd");

    await act(async () => {
      editor.dispatchCommand(KEY_ENTER_COMMAND, null);
    });

    editor.getEditorState().read(() => {
      const spans = $bookLine().getChildren().filter($isCharNode);
      expect(spans).toHaveLength(1);
      expect(spans[0].getMarker()).toBe("nd");
    });
  });

  it("displays a typed space RUN as NBSP, like content anywhere else", async () => {
    // The USJ->editor adaptor already display-maps the line's text on load; mapping while typing is
    // what keeps the live shape and the loaded one the same.
    const { editor } = await testEnvironment(() => $buildBookLine("Genesis"));

    await typeInBookLine(editor, "Genesis  two");

    editor.getEditorState().read(() => {
      const text = $bookLine().getTextContent();
      expect(text).toContain(`Genesis${NBSP}${NBSP}two`);
      expect(text).not.toContain("Genesis  two");
    });
  });

  it("splits a typed `\\p` into a new paragraph AFTER the line, like a paragraph split", async () => {
    // A `\p` in the line starts a new PARAGRAPH in the file. PT9 ends the `\id` line there, and
    // our own tokenizer reads the saved bytes back that way, so the screen must show the same split
    // the moment the marker is terminated — not keep a literal the next load turns into a paragraph.
    const { editor } = await testEnvironment(() => $buildBookLine("Genesis"));

    await typeInBookLine(editor, "Genesis \\p more");

    editor.getEditorState().read(() => {
      const blocks = $getRoot().getChildren();
      expect(blocks).toHaveLength(2);
      expect($isBookNode(blocks[0])).toBe(true);
      expect($bookLine().getCode()).toBe("GEN");
      expect($bookLine().getTextContent()).toMatch(new RegExp(`^\\\\id GEN${NBSP}Genesis\\s?$`));
      const para = blocks[1];
      if (!$isParaNode(para)) throw new Error("expected the split-off paragraph");
      expect(para.getMarker()).toBe("p");
      expect(para.getTextContent()).toContain("more");
      // The caret follows its byte into the new paragraph: typing continues after "more".
      expect($caretContext()).toEqual({ inBook: false, before: "more", after: "" });
    });
  });

  it("moves the tail after a typed mid-line `\\ip` into the new paragraph, caret before it", async () => {
    const { editor } = await testEnvironment(() => $buildBookLine("Genesis"));

    // Caret right after the typed `\ip ` separator, the tail still to its right.
    await typeInBookLine(editor, "Gen \\ip esis", "Gen \\ip ".length);

    editor.getEditorState().read(() => {
      const blocks = $getRoot().getChildren();
      expect(blocks).toHaveLength(2);
      expect($bookLine().getTextContent()).toMatch(new RegExp(`^\\\\id GEN${NBSP}Gen\\s?$`));
      const para = blocks[1];
      if (!$isParaNode(para)) throw new Error("expected the split-off paragraph");
      expect(para.getMarker()).toBe("ip");
      expect(para.getTextContent()).toContain("esis");
      expect($caretContext()).toMatchObject({ inBook: false, after: "esis" });
    });
  });

  it("leaves the line EMPTY when the paragraph marker is typed at the start of its content", async () => {
    // Bytes that literally open with `\p` tokenize to a wrapper indistinguishable from the
    // tokenizer's own implied `\p` — this is the case that proves the typed one is not mistaken for
    // it and folded back into the line.
    const { editor } = await testEnvironment(() => $buildBookLine("Genesis"));

    await typeInBookLine(editor, "\\p more");

    editor.getEditorState().read(() => {
      const blocks = $getRoot().getChildren();
      expect(blocks).toHaveLength(2);
      expect($bookLine().getTextContent()).toBe(`\\id GEN${NBSP}`);
      const para = blocks[1];
      if (!$isParaNode(para)) throw new Error("expected the split-off paragraph");
      expect(para.getMarker()).toBe("p");
      expect(para.getTextContent()).toContain("more");
    });
  });

  it("starts a chapter after the line for a typed `\\c`", async () => {
    const { editor } = await testEnvironment(() => $buildBookLine("Genesis"));

    await typeInBookLine(editor, "Genesis \\c 2 ");

    editor.getEditorState().read(() => {
      const blocks = $getRoot().getChildren();
      expect($isBookNode(blocks[0])).toBe(true);
      expect($bookLine().getTextContent()).not.toContain("\\c");
      const chapter = blocks.find($isChapterNode);
      expect(chapter?.getNumber()).toBe("2");
    });
  });

  it("settles the line in the READ-ONLY output without touching the editor", async () => {
    const { editor } = await testEnvironment(() => $buildBookLine("Genesis"));

    // Unterminated (no separator after the marker name yet): pends, so the editor still shows the
    // literal while the settled USJ must already carry the span a caret departure would produce.
    await typeInBookLine(editor, "Genesis \\nd");

    const settledBook = bookUsj(settledUsjOf(editor));
    expect(settledBook?.type).toBe("book");
    expect(settledBook?.code).toBe("GEN");
    const span = settledBook?.content?.find(
      (item) => typeof item !== "string" && item.type === "char",
    );
    expect(span).toBeDefined();
    if (span && typeof span !== "string") expect(span.marker).toBe("nd");

    // The editor itself is unchanged: the literal is still on screen.
    editor.getEditorState().read(() => {
      expect($bookLine().getChildren().filter($isCharNode)).toHaveLength(0);
      expect($bookLine().getTextContent()).toContain("\\nd");
    });
  });

  it("splits the line in the READ-ONLY output for a pending paragraph marker", async () => {
    const { editor } = await testEnvironment(() => $buildBookLine("Genesis"));

    // Unterminated: pends, so the editor still shows the literal while the settled USJ must already
    // carry the paragraph a caret departure would split off.
    await typeInBookLine(editor, "Genesis \\ip");

    const settled = settledUsjOf(editor);
    expect(bookUsj(settled)?.code).toBe("GEN");
    expect(JSON.stringify(bookUsj(settled))).not.toContain("\\\\ip");
    expect(settled?.content[1]).toMatchObject({ type: "para", marker: "ip" });
    editor.getEditorState().read(() => {
      expect($getRoot().getChildren()).toHaveLength(1);
      expect($bookLine().getTextContent()).toContain("\\ip");
    });
  });

  it("contributes the line AS-IS to the read-only output when the rebuild refuses", async () => {
    const { editor } = await testEnvironment(() => $buildBookLine("Genesis"));

    // A bare backslash is one of the tokenizer's literal-degradation cases: it re-tokenizes to
    // itself, so the settle refuses at the fixed point.
    await typeInBookLine(editor, "Genesis \\ more");

    // A refusal contributes the unsettled shape, never a partial patch.
    expect(bookUsj(settledUsjOf(editor)) ?? bookUsj(unsettledUsjOf(editor))).toEqual(
      bookUsj(unsettledUsjOf(editor)),
    );
  });
});

describe("where the `\\id` line's bytes end the line", () => {
  // The tokenizer wraps the line's leading inline content in an implied `\p` that looks exactly like
  // a `\p` the author typed first, so the split re-reads the bytes to tell them apart. Every row is
  // a place that re-reading could disagree with the tokenizer: the leading whitespace it keeps as
  // content or drops as structure, and the characters that end a marker name.
  it.each([
    { name: "a typed `\\p` then a space", bytes: "\\p more", line: [], next: ["more"] },
    { name: "a line break ahead of the `\\p`", bytes: "\n\\p more", line: [], next: ["more"] },
    { name: "a space ahead of the `\\p`", bytes: " \\p more", line: [" "], next: ["more"] },
    { name: "an NBSP ahead of the `\\p`", bytes: `${NBSP}\\p more`, line: [NBSP], next: ["more"] },
    { name: "a tab ahead of the `\\p`", bytes: "\t\\p more", line: [" "], next: ["more"] },
    {
      name: "a `\\p` ended by the next marker's backslash",
      bytes: "\\p\\bd Genesis\\bd*",
      line: [],
      next: [{ type: "char", marker: "bd", content: ["Genesis"] }],
    },
    { name: "a `\\p` ended by a ZWSP", bytes: "\\p\u200Bmore", line: [], next: ["more"] },
    { name: "a `\\p` ended by a pipe", bytes: "\\p|x", line: [], next: ["|x"] },
  ])("$name", ({ bytes, line, next }) => {
    const { lineContent, followingBlocks } = tokenizedBookLine(bytes, bundledGetMarker);

    expect(lineContent).toEqual(line);
    expect(followingBlocks).toEqual([{ type: "para", marker: "p", content: next }]);
  });

  it("keeps a closing `\\p*` in the line: it is a different marker, not the author's `\\p`", () => {
    const { lineContent, followingBlocks } = tokenizedBookLine("\\p*x", bundledGetMarker);

    expect(lineContent).toEqual([{ type: "unmatched", marker: "p*" }, "x"]);
    expect(followingBlocks).toEqual([]);
  });
});
