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
import { EditorOptions, EditorRef } from "./editor.model";
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
import { afterAll, beforeAll, vi } from "vitest";
import {
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  CONTROLLED_TEXT_INSERTION_COMMAND,
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

  // The move writes no DOM selection, which is what `onSelectionChange` normally follows, and the
  // host acts "at the selection" (inserting a comment) from wherever the user is.
  it("reports the parked caret to the host while unfocused", async () => {
    const onSelectionChange = vi.fn();
    const { editorRef } = await renderEditor(usj, options, onSelectionChange);
    onSelectionChange.mockClear();

    await act(async () => {
      editorRef.selectAfterNote(0);
    });

    expect(onSelectionChange).toHaveBeenCalledTimes(1);
    expect(onSelectionChange.mock.calls[0][0]).toEqual(editorRef.getSelection());
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

/**
 * The shape a host's own note editor renders the note in: expanded, editable markers, and the
 * note's opening marker and caller protected from typing (the host governs them with its own UI).
 */
const noteEditorOptions: EditorOptions = {
  ...options,
  view: {
    markerMode: "editable",
    noteMode: "expanded",
    hasSpacing: true,
    isFormattedFont: true,
    isNoteShellEditable: false,
  },
};

/** The first note's content as the editor would save it. */
function savedNoteContent(editorRef: EditorRef): unknown {
  const para = editorRef.getUsj()?.content[2];
  if (!para || typeof para === "string" || !("content" in para)) return undefined;
  const noteObject = para.content?.find(
    (child): child is MarkerObject => typeof child !== "string" && child.type === "note",
  );
  return noteObject?.content ?? [];
}

/** Types `text` at the caret, the way the editor receives typed characters. */
async function typeText(lexical: LexicalEditor, text: string) {
  for (const character of text)
    await act(async () => {
      lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, character);
    });
}

/**
 * Puts the document selection on the editor's caret, as a browser's reconcile leaves it. jsdom can
 * leave it at the start of the editor, and every keystroke reads the caret back from it.
 */
async function syncDomSelection(lexical: LexicalEditor) {
  const point = lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) return undefined;
    const { key, offset, type } = selection.anchor;
    return { key, offset, type };
  });
  if (!point) throw new Error("expected a range caret");
  const element = requireDefined(lexical.getElementByKey(point.key), "caret element");
  // A text point addresses the node's DOM text; an element point, its DOM children.
  const domNode =
    point.type === "text" ? requireDefined(element.firstChild, "caret text") : element;
  await act(async () => {
    document.getSelection()?.collapse(domNode, point.offset);
  });
}

/**
 * Lets the caret come to rest as it does in a browser: the document selection on the caret, then
 * the `selectionchange` the editor's caret guards run from (jsdom delivers its own only sometimes),
 * then the document selection on wherever the guards put the caret.
 */
async function restCaret(lexical: LexicalEditor) {
  await syncDomSelection(lexical);
  await act(async () => {
    document.dispatchEvent(new Event("selectionchange"));
  });
  await syncDomSelection(lexical);
}

describe("typing into a note with no content (`\\f + \\f*`)", () => {
  // jsdom's `focus()` collapses the document selection to the start of the focused element, where a
  // browser keeps it; Lexical focuses the root on reconciles here, and every keystroke reads the
  // caret back from that selection. Keep it, as ScriptureReferencePlugin.test.tsx does.
  const originalFocus = HTMLElement.prototype.focus;
  beforeAll(() => {
    HTMLElement.prototype.focus = function focus(focusOptions?: FocusOptions) {
      const selection = document.getSelection();
      const range = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : undefined;
      originalFocus.call(this, focusOptions);
      if (range && selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    };
  });
  afterAll(() => {
    HTMLElement.prototype.focus = originalFocus;
  });

  it("makes what is typed the note's own content, with no run marker added", async () => {
    const { editorRef, lexical } = await renderEditor(usjEmptyNote, noteEditorOptions);
    await act(async () => editorRef.selectNote(0));
    await restCaret(lexical);

    await typeText(lexical, "xy");

    expect(savedNoteContent(editorRef)).toEqual(["xy"]);
  });

  // A browser can report the boundary as the start of the closing glyph, which is where an
  // unguarded keystroke used to land: inside the glyph's bytes, shown but never saved.
  it("takes the text when the caret is reported at the start of the closing glyph", async () => {
    const { editorRef, lexical } = await renderEditor(usjEmptyNote, noteEditorOptions);
    await act(async () => {
      lexical.update(
        () => {
          const noteNode = requireDefined(
            $dfs($getRoot())
              .map(({ node }) => node)
              .find($isNoteNode),
            "note",
          );
          const closer = requireDefined(noteNode.getLastChild(), "closing glyph");
          if (!$isTextNode(closer)) throw new Error("expected the closing glyph to be text");
          closer.select(0, 0);
        },
        { discrete: true },
      );
    });
    await restCaret(lexical);

    await typeText(lexical, "x");

    expect(savedNoteContent(editorRef)).toEqual(["x"]);
  });

  it("leaves nothing behind when the caret moves on without typing", async () => {
    const { editorRef, lexical } = await renderEditor(usjEmptyNote, noteEditorOptions);
    await act(async () => editorRef.selectNote(0));

    await act(async () => {
      lexical.update(
        () => {
          const after = requireDefined(
            $getRoot()
              .getAllTextNodes()
              .find((node) => node.getTextContent() === "after"),
            "text after the note",
          );
          after.select(0, 0);
        },
        { discrete: true },
      );
    });

    expect(savedNoteContent(editorRef)).toEqual([]);
    const noteText = lexical.getEditorState().read(() =>
      $dfs($getRoot())
        .map(({ node }) => node)
        .find($isNoteNode)
        ?.getTextContent(),
    );
    expect(noteText).not.toContain("\u200b");
  });
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
