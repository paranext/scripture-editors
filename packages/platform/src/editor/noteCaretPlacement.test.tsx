/**
 * `EditorRef.selectNoteTextOffset` and `EditorRef.selectAfterNote`: the two caret placements a
 * host footnotes pane drives — landing in a note's text at a position the host captured over its
 * OWN rendering of that note, and parking the Scripture caret just past a note's caller.
 *
 * These render under `STANDARD_VIEW_MODE`, i.e. `markerMode: "editable"`, deliberately: that is
 * the mode where a note's opening glyphs are real editable text inside the char span and the
 * span's first text child carries the NBSP display separator as a prefix. A host counting the
 * note's CONTENT (`\fr 1:1 \ft alpha` reads as `1:1 alpha`) must not be charged for either.
 *
 * `STANDARD_VIEW_MODE` is also `noteMode: "collapsed"`, which is the Scripture text's own shape.
 * A host's note editor renders the SAME note expanded, where the adaptor builds a materially
 * different interior - the caller is a plain `TextNode` and a `\cat` category becomes an
 * attribute display run - so the offset origin is pinned under both note modes, in the
 * `expanded` describe block at the end.
 */
import Editorial from "../Editorial";
import { EditorOptions, EditorRef } from "./editor.model";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act, render } from "@testing-library/react";
import { afterAll, beforeAll } from "vitest";
import { createRef } from "react";
import {
  $getRoot,
  $getSelection,
  $isRangeSelection,
  LexicalEditor,
  SKIP_DOM_SELECTION_TAG,
} from "lexical";
import { $dfs, $findMatchingParent } from "@lexical/utils";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { getEmbeddedLexicalEditor } from "../../../../libs/shared-react/src/plugins/usj/react-test.utils";
import { $isNoteNode, NoteNode } from "shared";
import { getViewOptions, STANDARD_VIEW_MODE, UNFORMATTED_VIEW_MODE } from "shared-react";

function requireDefined<T>(value: T | undefined | null, message: string): T {
  if (value === undefined || value === null) throw new Error(message);
  return value;
}

// jsdom implements `getBoundingClientRect` on Element but not on Range, and Lexical measures the
// selection through a Range whenever it scrolls a collapsed caret into view after a commit — so
// the focused-editor cases below throw asynchronously, outside the test's own stack. Installed
// HERE rather than in test-setup.ts: `markerMenuContext.utils.test.tsx` asserts that a missing
// Range rect is what leaves `anchorRect` undefined headlessly, so this must not be global.
const originalRangeRect = Range.prototype.getBoundingClientRect;
beforeAll(() => {
  Range.prototype.getBoundingClientRect = () =>
    ({
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: 0,
      height: 0,
      toJSON: () => ({}),
    }) as DOMRect;
});
afterAll(() => {
  Range.prototype.getBoundingClientRect = originalRangeRect;
});

const options: EditorOptions = {
  hasSpellCheck: false,
  markerMenuTrigger: "\\",
  view: requireDefined(getViewOptions(STANDARD_VIEW_MODE), "standard view options"),
  hasExternalUI: true,
};

/** Content text: `1:1 alpha` — 4 code units of `\fr` run, then the `\ft` run. */
const note: MarkerObject = {
  type: "note",
  marker: "f",
  caller: "+",
  content: [
    { type: "char", marker: "fr", content: ["1:1 "] },
    { type: "char", marker: "ft", content: ["alpha"] },
  ],
};

const usj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["Test Book"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [{ type: "verse", marker: "v", number: "1" }, "before ", note, "after"],
    },
  ],
};

/** The same paragraph, but with the note ending its verse so a VERSE GLYPH follows it. */
const usjNoteBeforeVerse: Usj = {
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
        "before ",
        note,
        { type: "verse", marker: "v", number: "2" },
        "more",
      ],
    },
  ],
};

const scrRef = { book: "GEN", chapterNum: 1, verseNum: 1 };

async function renderEditor(defaultUsj: Usj = usj, editorOptions: EditorOptions = options) {
  const ref = createRef<EditorRef>();
  let container: HTMLElement | undefined;
  await act(async () => {
    const result = render(
      <Editorial
        ref={ref}
        defaultUsj={defaultUsj}
        scrRef={scrRef}
        onScrRefChange={() => undefined}
        options={editorOptions}
      />,
    );
    container = result.container;
  });
  return {
    editorRef: requireDefined(ref.current, "editor ref"),
    lexical: getEmbeddedLexicalEditor(container),
  };
}

function noteKeys(lexical: LexicalEditor): string[] {
  return lexical.getEditorState().read(() =>
    $dfs($getRoot())
      .map(({ node }) => node)
      .filter($isNoteNode)
      .map((n: NoteNode) => n.getKey()),
  );
}

/**
 * The collapsed caret as `{ text, offset }` of the node it sits in — the text is what makes a
 * failure readable ("landed in `\ft`" rather than "offset 3 of key 42").
 */
function caret(lexical: LexicalEditor): { text: string; offset: number } {
  return lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
    return { text: selection.anchor.getNode().getTextContent(), offset: selection.anchor.offset };
  });
}

/** The Lexical node type the caret's anchor sits in, for asserting WHAT it landed in. */
function caretAnchorType(lexical: LexicalEditor): string {
  return lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
    return selection.anchor.getNode().getType();
  });
}

/**
 * The caret's anchor offset paired with the note's own position among its parent's children, so a
 * test can say the caret is at the child slot immediately AFTER the note rather than merely "not
 * in the thing it used to land in".
 */
function caretOffsetAndNoteIndexInParent(lexical: LexicalEditor): {
  anchorOffset: number;
  noteIndexInParent: number;
} {
  return lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
    const noteNode = $dfs($getRoot())
      .map(({ node }) => node)
      .find($isNoteNode);
    if (!noteNode) throw new Error("expected a note in the document");
    return {
      anchorOffset: selection.anchor.offset,
      noteIndexInParent: noteNode.getIndexWithinParent(),
    };
  });
}

/** Collects the update tags of every commit that happens while `run` executes. */
async function tagsOfUpdatesDuring(lexical: LexicalEditor, run: () => void): Promise<Set<string>> {
  const seen = new Set<string>();
  const unregister = lexical.registerUpdateListener(({ tags }) => {
    tags.forEach((tag) => seen.add(tag));
  });
  await act(async () => {
    run();
  });
  unregister();
  return seen;
}

describe("EditorRef.selectNoteTextOffset", () => {
  it("counts the note's content only, skipping the marker glyph and its NBSP separator", async () => {
    const { editorRef, lexical } = await renderEditor();

    // 4 = length of the `\fr` run's content (`1:1 `), so this is the first character of `alpha`.
    await act(async () => editorRef.selectNoteTextOffset(0, 4));

    const { text, offset } = caret(lexical);
    // The `\ft` span's text still carries its display separator, so the caret sits just past it.
    expect(text.endsWith("alpha")).toBe(true);
    expect(text.slice(offset)).toBe("alpha");
  });

  it("lands inside a run at an offset that falls within it", async () => {
    const { editorRef, lexical } = await renderEditor();

    await act(async () => editorRef.selectNoteTextOffset(0, 6));

    const { text, offset } = caret(lexical);
    expect(text.slice(offset)).toBe("pha");
  });

  it("puts offset 0 at the first content character, not at the glyph", async () => {
    const { editorRef, lexical } = await renderEditor();

    await act(async () => editorRef.selectNoteTextOffset(0, 0));

    const { text, offset } = caret(lexical);
    expect(text.slice(offset)).toBe("1:1 ");
  });

  it("clamps an offset past the end of the note's text to the end", async () => {
    const { editorRef, lexical } = await renderEditor();

    await act(async () => editorRef.selectNoteTextOffset(0, 9999));

    const { text, offset } = caret(lexical);
    expect(offset).toBe(text.length);
    expect(text.endsWith("alpha")).toBe(true);
  });

  it("accepts a note key as well as an index", async () => {
    const { editorRef, lexical } = await renderEditor();
    const [key] = noteKeys(lexical);

    await act(async () => editorRef.selectNoteTextOffset(key, 4));

    expect(caret(lexical).text.endsWith("alpha")).toBe(true);
  });
});

describe("EditorRef.selectAfterNote", () => {
  it("puts the caret at the start of the text following the note", async () => {
    const { editorRef, lexical } = await renderEditor();

    await act(async () => editorRef.selectAfterNote(0));

    expect(caret(lexical)).toEqual({ text: "after", offset: 0 });
  });

  it("stays out of a glyph when the note is followed by one", async () => {
    // A note that ends a verse is followed by the next verse's glyph, whose bytes are a picture of
    // the verse's number rather than document text. Offset 0 of that node is INSIDE the picture,
    // where the next keystroke splits the verse marker; the caret belongs before it instead.
    const { editorRef, lexical } = await renderEditor(usjNoteBeforeVerse);

    await act(async () => editorRef.selectAfterNote(0));

    // Positively: the caret is an ELEMENT-anchored position at the child slot right after the
    // note. `not.toBe("verse")` alone would also pass for a caret left before the note, or back
    // in the preceding "before " text.
    expect(caretAnchorType(lexical)).toBe("para");
    const { anchorOffset, noteIndexInParent } = caretOffsetAndNoteIndexInParent(lexical);
    expect(anchorOffset).toBe(noteIndexInParent + 1);
  });

  it("does not pull DOM focus into an editor the user is not in", async () => {
    const { editorRef, lexical } = await renderEditor();
    const rootElement = requireDefined(lexical.getRootElement(), "root element");
    expect(rootElement.contains(rootElement.ownerDocument.activeElement)).toBe(false);

    const tags = await tagsOfUpdatesDuring(lexical, () => editorRef.selectAfterNote(0));

    expect(tags.has(SKIP_DOM_SELECTION_TAG)).toBe(true);
  });

  it("reconciles the DOM selection when the editor does hold focus", async () => {
    const { editorRef, lexical } = await renderEditor();
    const rootElement = requireDefined(lexical.getRootElement(), "root element");
    // jsdom only treats an element as focusable when it is explicitly in the tab order, so give
    // the root a tabindex to reproduce what a real contenteditable does on its own.
    rootElement.setAttribute("tabindex", "-1");
    rootElement.focus();

    const tags = await tagsOfUpdatesDuring(lexical, () => editorRef.selectAfterNote(0));

    expect(tags.has(SKIP_DOM_SELECTION_TAG)).toBe(false);
  });
});

/**
 * The shape a host's own note editor renders: `markerMode: "editable"` with the note EXPANDED, so
 * the adaptor builds the caller as a plain `TextNode` and folds a `\cat` category into an
 * `attribute` display run. Both are display, not content, and the offset origin has to skip them
 * exactly as it skips the marker glyphs under the collapsed shape above.
 */
const expandedOptions: EditorOptions = {
  ...options,
  view: requireDefined(getViewOptions(UNFORMATTED_VIEW_MODE), "unformatted view options"),
};

/** `\f + \cat People\cat* \fr 1:1 \ft alpha` — content text is still just `1:1 alpha`. */
const categorizedNote: MarkerObject = { ...note, category: "People" };

const usjCategorizedNote: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["Test Book"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [{ type: "verse", marker: "v", number: "1" }, "before ", categorizedNote, "after"],
    },
  ],
};

/**
 * A note split across paragraphs by `\fp`, which the adaptor renders as further char runs the
 * offset walk counts. Content text is `1:1 alpha` + `beta` = `1:1 alphabeta`, so an offset that
 * crosses the `\fp` boundary is the shape most likely to expose an off-by-one between runs.
 */
const multiParagraphNote: MarkerObject = {
  type: "note",
  marker: "f",
  caller: "+",
  content: [
    { type: "char", marker: "fr", content: ["1:1 "] },
    { type: "char", marker: "ft", content: ["alpha"] },
    { type: "char", marker: "fp", content: [] },
    { type: "char", marker: "ft", content: ["beta"] },
  ],
};

const usjMultiParagraphNote: Usj = {
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
        "before ",
        multiParagraphNote,
        "after",
      ],
    },
  ],
};

/** A note with a caller and nothing else — the no-content-text fallback's input. */
const usjEmptyNote: Usj = {
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
        "before ",
        { type: "note", marker: "f", caller: "+", content: [] },
        "after",
      ],
    },
  ],
};

describe("EditorRef.selectNoteTextOffset in an expanded note (a host's own note editor)", () => {
  it("counts the note's content only, skipping the caller the expanded shape spells out", async () => {
    const { editorRef, lexical } = await renderEditor(usj, expandedOptions);

    // 4 = the `\fr` run's content (`1:1 `), so this is the first character of `alpha`. The
    // expanded caller (`+`) sits ahead of it as ordinary text and must not be charged for.
    await act(async () => editorRef.selectNoteTextOffset(0, 4));

    const { text, offset } = caret(lexical);
    expect(text.slice(offset)).toBe("alpha");
  });

  it("skips a \\cat category run, which is a field on the note rather than its content", async () => {
    const { editorRef, lexical } = await renderEditor(usjCategorizedNote, expandedOptions);

    await act(async () => editorRef.selectNoteTextOffset(0, 4));

    // `People` rides between the caller and the first content run; counting it would push the
    // caret six characters past where the host clicked.
    const { text, offset } = caret(lexical);
    expect(text.slice(offset)).toBe("alpha");
  });

  it("carries the offset across a \\fp paragraph break", async () => {
    const { editorRef, lexical } = await renderEditor(usjMultiParagraphNote, expandedOptions);

    // 9 = `1:1 ` (4) + `alpha` (5), so this is the first character of the second paragraph's run.
    await act(async () => editorRef.selectNoteTextOffset(0, 9));

    const { text, offset } = caret(lexical);
    expect(text.slice(offset)).toBe("beta");
  });

  it("falls back to selecting the note when it has no content text at all", async () => {
    const { editorRef, lexical } = await renderEditor(usjEmptyNote, expandedOptions);

    await act(async () => editorRef.selectNoteTextOffset(0, 3));

    // Documented fallback: an offset into a note with nothing to offset into still leaves the
    // caret somewhere inside that note rather than wherever it happened to be.
    const insideNote = lexical.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      return !!$findMatchingParent(selection.anchor.getNode(), $isNoteNode);
    });
    expect(insideNote).toBe(true);
  });
});
