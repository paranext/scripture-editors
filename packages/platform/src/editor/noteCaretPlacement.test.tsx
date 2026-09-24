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
import { EditorOptions } from "./editor.model";
import {
  note,
  noteKeys,
  options,
  renderEditor,
  requireDefined,
  tagsOfUpdatesDuring,
} from "./noteEditorRef.test-helpers";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { afterAll, beforeAll } from "vitest";
import {
  $getRoot,
  $getSelection,
  $isRangeSelection,
  LexicalEditor,
  SKIP_DOM_SELECTION_TAG,
} from "lexical";
import { $dfs, $findMatchingParent } from "@lexical/utils";
import { $isNoteNode } from "shared";
import { getViewOptions, UNFORMATTED_VIEW_MODE } from "shared-react";

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

const usj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["Test Book"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [{ type: "verse", marker: "v", number: "1" }, "before ", note("alpha"), "after"],
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
        note("alpha"),
        { type: "verse", marker: "v", number: "2" },
        "more",
      ],
    },
  ],
};

/**
 * The collapsed caret as `{ text, offset }` of the node it sits in — the text is what makes a
 * failure readable ("landed in `\ft`" rather than "offset 3 of key 42").
 */
function caret(lexical: LexicalEditor): { text: string; offset: number } {
  return lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
    expect(selection.isCollapsed()).toBe(true);
    return { text: selection.focus.getNode().getTextContent(), offset: selection.focus.offset };
  });
}

/** The Lexical node type the caret's focus sits in, for asserting WHAT it landed in. */
function caretFocusType(lexical: LexicalEditor): string {
  return lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
    expect(selection.isCollapsed()).toBe(true);
    return selection.focus.getNode().getType();
  });
}

/**
 * The caret's focus offset paired with the note's own position among its parent's children, so a
 * test can say the caret is at the child slot immediately AFTER the note rather than merely "not
 * in the thing it used to land in".
 */
function caretOffsetAndNoteIndexInParent(lexical: LexicalEditor): {
  focusOffset: number;
  noteIndexInParent: number;
} {
  return lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
    expect(selection.isCollapsed()).toBe(true);
    const noteNode = $dfs($getRoot())
      .map(({ node }) => node)
      .find($isNoteNode);
    if (!noteNode) throw new Error("expected a note in the document");
    return {
      focusOffset: selection.focus.offset,
      noteIndexInParent: noteNode.getIndexWithinParent(),
    };
  });
}

describe("EditorRef.selectNoteTextOffset", () => {
  it("counts the note's content only, skipping the marker glyph and its NBSP separator", async () => {
    const { editorRef, lexical } = await renderEditor(usj);

    // 4 = length of the `\fr` run's content (`1:1 `), so this is the first character of `alpha`.
    await act(async () => editorRef.selectNoteTextOffset(0, 4));

    const { text, offset } = caret(lexical);
    // The `\ft` span's text still carries its display separator, so the caret sits just past it.
    expect(text.endsWith("alpha")).toBe(true);
    expect(text.slice(offset)).toBe("alpha");
  });

  it("lands inside a run at an offset that falls within it", async () => {
    const { editorRef, lexical } = await renderEditor(usj);

    await act(async () => editorRef.selectNoteTextOffset(0, 6));

    const { text, offset } = caret(lexical);
    expect(text.slice(offset)).toBe("pha");
  });

  it("puts offset 0 at the first content character, not at the glyph", async () => {
    const { editorRef, lexical } = await renderEditor(usj);

    await act(async () => editorRef.selectNoteTextOffset(0, 0));

    const { text, offset } = caret(lexical);
    expect(text.slice(offset)).toBe("1:1 ");
  });

  it("clamps an offset past the end of the note's text to the end", async () => {
    const { editorRef, lexical } = await renderEditor(usj);

    await act(async () => editorRef.selectNoteTextOffset(0, 9999));

    const { text, offset } = caret(lexical);
    expect(offset).toBe(text.length);
    expect(text.endsWith("alpha")).toBe(true);
  });

  it("accepts a note key as well as an index", async () => {
    const { editorRef, lexical } = await renderEditor(usj);
    const [key] = noteKeys(lexical);

    await act(async () => editorRef.selectNoteTextOffset(key, 4));

    expect(caret(lexical).text.endsWith("alpha")).toBe(true);
  });
});

describe("EditorRef.selectAfterNote", () => {
  it("puts the caret at the start of the text following the note", async () => {
    const { editorRef, lexical } = await renderEditor(usj);

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
    expect(caretFocusType(lexical)).toBe("para");
    const { focusOffset, noteIndexInParent } = caretOffsetAndNoteIndexInParent(lexical);
    expect(focusOffset).toBe(noteIndexInParent + 1);
  });

  it("does not pull DOM focus into an editor the user is not in", async () => {
    const { editorRef, lexical } = await renderEditor(usj);
    const rootElement = requireDefined(lexical.getRootElement(), "root element");
    expect(rootElement.contains(rootElement.ownerDocument.activeElement)).toBe(false);

    const tags = await tagsOfUpdatesDuring(lexical, () => editorRef.selectAfterNote(0));

    expect(tags.has(SKIP_DOM_SELECTION_TAG)).toBe(true);
  });

  // Parked while the user is elsewhere, the caret must still be the one the host's later
  // `focus()` lands on: neither the skipped DOM write's tag nor the DOM selection it left behind
  // may outlive the commit.
  it("leaves a caret parked while unfocused for a later focus() to land on", async () => {
    const { editorRef, lexical } = await renderEditor(usj);
    const rootElement = requireDefined(lexical.getRootElement(), "root element");
    rootElement.setAttribute("tabindex", "-1");
    const button = document.body.appendChild(document.createElement("button"));
    button.focus();
    // Focusing a button leaves a browser's document selection where it was - inside the editor.
    // jsdom moves it, so put it back.
    const domSelection = requireDefined(document.getSelection(), "document selection");
    domSelection.collapse(rootElement, 0);

    await act(async () => {
      editorRef.selectAfterNote(0);
    });
    await act(async () => {
      editorRef.focus();
    });

    expect(caret(lexical)).toEqual({ text: "after", offset: 0 });
    // Writing the DOM selection into the root is what focuses it in a browser (jsdom does not
    // model that side effect), so the write reaching the parked caret is the focus landing there.
    expect(domSelection.anchorNode?.textContent).toBe("after");
    expect(domSelection.anchorOffset).toBe(0);
    button.remove();
  });

  it("reconciles the DOM selection when the editor does hold focus", async () => {
    const { editorRef, lexical } = await renderEditor(usj);
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
const categorizedNote: MarkerObject = { ...note("alpha"), category: "People" };

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

/** Whether the caret sits inside the note and ahead of the note's closing glyph. */
function isCaretBeforeNoteCloser(lexical: LexicalEditor): boolean {
  return lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
    expect(selection.isCollapsed()).toBe(true);
    const focusNode = selection.focus.getNode();
    const noteNode = $isNoteNode(focusNode)
      ? focusNode
      : $findMatchingParent(focusNode, $isNoteNode);
    const closer = requireDefined(noteNode, "the caret is not in a note").getLastChild();
    if (!closer) throw new Error("the note has no children");
    if (focusNode.is(noteNode)) return selection.focus.offset <= closer.getIndexWithinParent();
    if (focusNode.is(closer)) return selection.focus.offset === 0;
    return focusNode.isBefore(closer);
  });
}

describe("EditorRef.selectNote on a note with no content run", () => {
  it.each(["editable", "visible"] as const)(
    "lands ahead of the closing glyph with %s markers",
    async (markerMode) => {
      const { editorRef, lexical } = await renderEditor(usjEmptyNote, {
        ...options,
        view: { markerMode, noteMode: "expanded", hasSpacing: false, isFormattedFont: false },
      });

      await act(async () => editorRef.selectNote(0));

      expect(isCaretBeforeNoteCloser(lexical)).toBe(true);
    },
  );
});

/** A document holding `noteObject` in verse 1's paragraph. */
function usjWithNote(noteObject: MarkerObject): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["Test Book"] },
      { type: "chapter", marker: "c", number: "1" },
      {
        type: "para",
        marker: "p",
        content: [{ type: "verse", marker: "v", number: "1" }, "before ", noteObject, "after"],
      },
    ],
  };
}

describe("EditorRef.selectNote in an expanded note", () => {
  // `note`'s runs carry no `closed: "false"`, so each is explicitly closed and its `\ft*` glyph
  // follows the run's text inside the span. Past that glyph is outside the run.
  it("lands ahead of an explicitly closed last run's closing glyph", async () => {
    const { editorRef, lexical } = await renderEditor(usj, expandedOptions);

    await act(async () => editorRef.selectNote(0));

    const { text, offset } = caret(lexical);
    expect(text.trim()).toBe("alpha");
    expect(offset).toBe(text.length);
  });
});

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

  it("counts text written directly in the note, outside any run", async () => {
    const directTextNote: MarkerObject = {
      type: "note",
      marker: "f",
      caller: "+",
      content: ["direct ", { type: "char", marker: "ft", content: ["alpha"] }],
    };
    const { editorRef, lexical } = await renderEditor(usjWithNote(directTextNote), expandedOptions);

    await act(async () => editorRef.selectNoteTextOffset(0, 2));
    expect(caret(lexical)).toEqual({ text: "direct ", offset: 2 });

    // 7 = `direct `, so this is the first character of the run after it.
    await act(async () => editorRef.selectNoteTextOffset(0, 7));
    const { text, offset } = caret(lexical);
    expect(text.slice(offset)).toBe("alpha");
  });

  it("does not count an unmatched closer's glyph as text", async () => {
    const noteWithUnmatched: MarkerObject = {
      type: "note",
      marker: "f",
      caller: "+",
      content: [
        {
          type: "char",
          marker: "ft",
          content: ["alpha", { type: "unmatched", marker: "nd*" }, " beta"],
        },
      ],
    };
    const { editorRef, lexical } = await renderEditor(
      usjWithNote(noteWithUnmatched),
      expandedOptions,
    );

    // 7 = `alpha` + 2, so two characters into ` beta`.
    await act(async () => editorRef.selectNoteTextOffset(0, 7));

    expect(caret(lexical)).toEqual({ text: " beta", offset: 2 });
  });

  it("falls back to selecting the note when it has no content text at all", async () => {
    const { editorRef, lexical } = await renderEditor(usjEmptyNote, expandedOptions);

    await act(async () => editorRef.selectNoteTextOffset(0, 3));

    // Documented fallback: an offset into a note with nothing to offset into still leaves the
    // caret somewhere inside that note rather than wherever it happened to be.
    const insideNote = lexical.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      expect(selection.isCollapsed()).toBe(true);
      return !!$findMatchingParent(selection.focus.getNode(), $isNoteNode);
    });
    expect(insideNote).toBe(true);
  });
});
