import { $limitSelectionLength, normalizeCopyLimit, sliceToCopyLimit } from "./copyLimit.utils";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { baseTestEnvironment } from "../../../../../libs/shared-react/src/plugins/usj/react-test.utils";
import usjEditorAdaptor, {
  initialize as initializeSerialize,
  reset,
} from "../adaptors/usj-editor.adaptor";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $opaqueBlockAncestor, getViewOptions, STANDARD_VIEW_MODE } from "shared-react";
import {
  $createParagraphNode,
  $createTextNode,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  LexicalEditor,
  TextNode,
} from "lexical";

/** The text of `editor`'s range selection; empty when it has none. */
const selectedText = (editor: LexicalEditor) =>
  editor.getEditorState().read(() => {
    const selection = $getSelection();
    return $isRangeSelection(selection) ? selection.getTextContent() : "";
  });

async function selectedTextAfterLimit(
  build: () => { first: TextNode; last: TextNode },
  select: (first: TextNode, last: TextNode) => void,
  limit: number,
) {
  let nodes!: { first: TextNode; last: TextNode };
  const { editor } = await baseTestEnvironment(() => {
    nodes = build();
  });
  let changed = false;
  await act(async () => editor.update(() => select(nodes.first, nodes.last)));
  const original = selectedText(editor);
  await act(async () => editor.update(() => (changed = $limitSelectionLength(limit))));
  return { changed, text: selectedText(editor), original };
}

const $oneParagraph = () => {
  const first = $createTextNode("abcdefghij");
  $getRoot().append($createParagraphNode().append(first));
  return { first, last: first };
};

const $twoParagraphs = () => {
  const first = $createTextNode("abcdef");
  const last = $createTextNode("ghijkl");
  $getRoot().append($createParagraphNode().append(first), $createParagraphNode().append(last));
  return { first, last };
};

/** Builds one paragraph per text and returns the first and last text nodes. */
const $paragraphs = (...texts: string[]) => {
  const textNodes = texts.map((text) => $createTextNode(text));
  $getRoot().append(...textNodes.map((node) => $createParagraphNode().append(node)));
  return { first: textNodes[0], last: textNodes[textNodes.length - 1] };
};

/** Selects from `startOffset` in the first text node to the end of the last one. */
const selectToEnd = (startOffset: number) => (first: TextNode, last: TextNode) => {
  const selection = first.select(startOffset, startOffset);
  selection.focus.set(last.getKey(), last.getTextContentSize(), "text");
};

describe("$limitSelectionLength", () => {
  it("leaves a selection within the limit alone", async () => {
    const result = await selectedTextAfterLimit($oneParagraph, (n) => n.select(2, 6), 10);
    expect(result).toMatchObject({ changed: false, text: "cdef" });
  });

  it("keeps the start and drops the end of a forward selection", async () => {
    const result = await selectedTextAfterLimit($oneParagraph, (n) => n.select(1, 9), 3);
    expect(result).toMatchObject({ changed: true, text: "bcd" });
  });

  it("keeps the earliest point of a backward selection", async () => {
    const result = await selectedTextAfterLimit($oneParagraph, (n) => n.select(9, 1), 3);
    expect(result).toMatchObject({ changed: true, text: "bcd" });
  });

  it("stays within the limit across a paragraph break", async () => {
    const result = await selectedTextAfterLimit(
      $twoParagraphs,
      (first, last) => {
        const selection = first.select(0, 0);
        selection.focus.set(last.getKey(), 6, "text");
      },
      8,
    );
    expect(result.changed).toBe(true);
    expect(result.text.length).toBeLessThanOrEqual(8);
    expect(result.text.startsWith("abcdef")).toBe(true);
  });

  it("collapses the selection for a limit of 0", async () => {
    const result = await selectedTextAfterLimit($oneParagraph, (n) => n.select(0, 10), 0);
    expect(result).toMatchObject({ changed: true, text: "" });
  });

  it("ends inside a later paragraph with exactly the limit selected", async () => {
    const result = await selectedTextAfterLimit(
      () => $paragraphs("abcdef", "ghijkl", "mnopqr"),
      selectToEnd(0),
      16,
    );
    expect(result.original).toBe("abcdef\nghijkl\nmnopqr");
    expect(result.changed).toBe(true);
    expect(result.text).toBe(result.original.slice(0, 16));
  });

  it("counts only the text after the start when the selection starts inside a paragraph", async () => {
    const result = await selectedTextAfterLimit(
      () => $paragraphs("abcdef", "ghijkl", "mnopqr"),
      selectToEnd(3),
      9,
    );
    expect(result.original).toBe("def\nghijkl\nmnopqr");
    expect(result.changed).toBe(true);
    expect(result.text).toBe(result.original.slice(0, 9));
  });

  it("keeps a paragraph break that the limit's last character reaches", async () => {
    // `getTextContent()` adds the line break between paragraphs as soon as the selection reaches
    // into the next paragraph, so a limit that runs out exactly on the break ends the selection at
    // the start of the next paragraph's text, with the break as its last character.
    const result = await selectedTextAfterLimit(
      () => $paragraphs("abcdef", "ghijkl"),
      selectToEnd(0),
      7,
    );
    expect(result.original).toBe("abcdef\nghijkl");
    expect(result.changed).toBe(true);
    expect(result.text).toBe(result.original.slice(0, 7));
  });

  it("lands exactly on the limit across many paragraphs", async () => {
    // One letter per paragraph makes every other character a line break.
    const letters = "abcdefghijklmnopqrst".split("");
    const result = await selectedTextAfterLimit(() => $paragraphs(...letters), selectToEnd(0), 31);
    expect(result.original).toBe(letters.join("\n"));
    expect(result.changed).toBe(true);
    expect(result.text).toBe(result.original.slice(0, 31));
  });

  it("does not end the selection inside a character outside the Basic Multilingual Plane", async () => {
    // U+1F600 is two UTF-16 code units, so a limit of 3 falls between them.
    const result = await selectedTextAfterLimit(
      () => $paragraphs(`ab${String.fromCodePoint(0x1f600)}cd`),
      selectToEnd(0),
      3,
    );
    expect(result.changed).toBe(true);
    expect(result.text).toBe("ab");
  });
});

describe("$limitSelectionLength with a token node", () => {
  /** `ab`, then a token node `cdef` (which Lexical selects and deletes whole), then `gh`. */
  const $withToken = () => {
    const first = $createTextNode("ab");
    const last = $createTextNode("gh");
    $getRoot().append(
      $createParagraphNode().append(first, $createTextNode("cdef").setMode("token"), last),
    );
    return { first, last };
  };

  it("leaves out a token node the limit would split", async () => {
    const result = await selectedTextAfterLimit($withToken, selectToEnd(0), 4);
    expect(result.original).toBe("abcdefgh");
    expect(result).toMatchObject({ changed: true, text: "ab" });
  });

  it("keeps a token node that fits whole", async () => {
    const result = await selectedTextAfterLimit($withToken, selectToEnd(0), 7);
    expect(result).toMatchObject({ changed: true, text: "abcdefg" });
  });
});

describe("$limitSelectionLength with combining marks", () => {
  it("does not end the selection between a letter and its marks", async () => {
    // Alef + hiriq, then bet + dagesh: a limit of 3 falls between the bet and its dagesh.
    const result = await selectedTextAfterLimit(() => $paragraphs("אִבּ"), selectToEnd(0), 3);
    expect(result.changed).toBe(true);
    expect(result.text).toBe("אִ");
    expect(result.text).toBe(sliceToCopyLimit(result.original, 3));
  });
});

describe("$limitSelectionLength across text nodes", () => {
  it("does not end between a letter and a mark that starts the next text node", async () => {
    // Bet ends the first node and its dagesh starts the second; they differ in format, so they
    // stay separate nodes. A limit of 3 lands at the end of the first node.
    const result = await selectedTextAfterLimit(
      () => {
        const first = $createTextNode("\u05D0\u05B4\u05D1");
        const last = $createTextNode("\u05BCgh").setFormat("bold");
        $getRoot().append($createParagraphNode().append(first, last));
        return { first, last };
      },
      selectToEnd(0),
      3,
    );
    expect(result.changed).toBe(true);
    expect(result.text).toBe("\u05D0\u05B4");
  });
});

describe("$limitSelectionLength with an opaque construct", () => {
  it("ends before a table the limit would run out inside", async () => {
    initializeSerialize(undefined, undefined);
    reset();
    const usj = {
      type: "USJ",
      version: "3.1",
      content: [
        { type: "para", marker: "p", content: ["Before."] },
        {
          type: "table",
          content: [
            {
              type: "table:row",
              marker: "tr",
              content: [
                { type: "table:cell", marker: "tc1", align: "start", content: ["cell one"] },
              ],
            },
          ],
        },
        { type: "para", marker: "p", content: ["After."] },
      ],
    } as unknown as Usj;
    const viewOptions = getViewOptions(STANDARD_VIEW_MODE);
    const state = usjEditorAdaptor.serializeEditorState(usj, viewOptions);
    const { editor } = await baseTestEnvironment(JSON.stringify({ root: state.root }));
    await act(async () =>
      editor.update(() => {
        const root = $getRoot();
        root.select(0, root.getChildrenSize());
      }),
    );
    const whole = selectedText(editor);
    // A limit that runs out partway through the cell's text.
    const limit = whole.indexOf("cell one") + 4;
    expect(limit).toBeGreaterThan(4);
    await act(async () => editor.update(() => $limitSelectionLength(limit)));
    const { text, focusInside } = editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) return { text: "", focusInside: true };
      return {
        text: selection.getTextContent(),
        focusInside: $opaqueBlockAncestor(selection.focus.getNode()) !== undefined,
      };
    });
    expect(focusInside).toBe(false);
    expect(text).not.toContain("cell");
    expect(text).toContain("Before.");
  });
});

describe("$limitSelectionLength with a selection starting inside a construct", () => {
  /** Renders `usj` in Standard view and returns the editor. */
  async function renderStandardView(usj: Usj) {
    initializeSerialize(undefined, undefined);
    reset();
    const state = usjEditorAdaptor.serializeEditorState(usj, getViewOptions(STANDARD_VIEW_MODE));
    const { editor } = await baseTestEnvironment(JSON.stringify({ root: state.root }));
    return editor;
  }

  /** Selects from where `startText` begins to the end of the document. */
  async function selectFrom(editor: LexicalEditor, startText: string) {
    await act(async () =>
      editor.update(() => {
        const start = $getRoot()
          .getAllTextNodes()
          .find((node) => node.getTextContent().includes(startText));
        if (!start) throw new Error(`no text node holding "${startText}"`);
        const offset = start.getTextContent().indexOf(startText);
        const root = $getRoot();
        const selection = start.select(offset, offset);
        selection.focus.set(root.getKey(), root.getChildrenSize(), "element");
      }),
    );
  }

  const noteUsj = {
    type: "USJ",
    version: "3.1",
    content: [
      {
        type: "para",
        marker: "p",
        content: [
          "Before ",
          {
            type: "note",
            marker: "f",
            caller: "+",
            content: [
              { type: "char", marker: "ft", content: ["Long note body."], closed: "false" },
            ],
          },
          " after.",
        ],
      },
    ],
  } as unknown as Usj;

  const tableUsj = {
    type: "USJ",
    version: "3.1",
    content: [
      {
        type: "table",
        content: [
          {
            type: "table:row",
            marker: "tr",
            content: [{ type: "table:cell", marker: "tc1", align: "start", content: ["cell one"] }],
          },
        ],
      },
      { type: "para", marker: "p", content: ["After."] },
    ],
  } as unknown as Usj;

  it("keeps the start of a selection that starts inside a note", async () => {
    const editor = await renderStandardView(noteUsj);
    await selectFrom(editor, "Long note body.");
    await act(async () => editor.update(() => $limitSelectionLength(4)));
    expect(selectedText(editor)).toBe("Long");
  });

  it("leaves out a figure whose closing part fits but whose next character does not", async () => {
    const editor = await renderStandardView({
      type: "USJ",
      version: "3.1",
      content: [
        {
          type: "para",
          marker: "p",
          content: [
            "Before ",
            { type: "figure", marker: "fig", file: "a.jpg", size: "col", content: ["Cap"] },
          ],
        },
        { type: "para", marker: "p", content: ["After."] },
      ],
    } as unknown as Usj);
    await act(async () =>
      editor.update(() => {
        const root = $getRoot();
        root.select(0, root.getChildrenSize());
      }),
    );
    const whole = selectedText(editor);
    // The limit runs out exactly at the end of the figure's closing marker, so the paragraph
    // break after it does not fit.
    const limit = whole.indexOf("\\fig*") + "\\fig*".length;
    expect(limit).toBeGreaterThan("\\fig*".length);
    await act(async () => editor.update(() => $limitSelectionLength(limit)));
    const { text, focusInside } = editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) return { text: "", focusInside: true };
      return {
        text: selection.getTextContent(),
        focusInside: $opaqueBlockAncestor(selection.focus.getNode()) !== undefined,
      };
    });
    expect(focusInside).toBe(false);
    expect(text).not.toContain("\\fig");
    expect(text).toContain("Before");
  });

  it("keeps a note whole when the selection starts at the note's first character", async () => {
    const editor = await renderStandardView(noteUsj);
    await selectFrom(editor, "\\f");
    await act(async () => editor.update(() => $limitSelectionLength(4)));
    expect(selectedText(editor)).toBe("");
  });

  it("keeps the start of a selection that starts inside a table", async () => {
    const editor = await renderStandardView(tableUsj);
    await selectFrom(editor, "cell one");
    await act(async () => editor.update(() => $limitSelectionLength(4)));
    expect(selectedText(editor)).toBe("cell");
  });

  it("ends in the text after the construct a selection starts inside", async () => {
    const editor = await renderStandardView(noteUsj);
    await selectFrom(editor, "Long note body.");
    const whole = selectedText(editor);
    const limit = whole.indexOf("after") + 2;
    expect(limit).toBeGreaterThan(2);
    await act(async () => editor.update(() => $limitSelectionLength(limit)));
    expect(selectedText(editor)).toBe(whole.slice(0, limit));
  });
});

describe("$limitSelectionLength with Standard-view glyph text", () => {
  /** Renders `usj` in Standard view with the whole document selected, and returns its text. */
  async function selectWholeStandardView(usj: Usj) {
    initializeSerialize(undefined, undefined);
    reset();
    const state = usjEditorAdaptor.serializeEditorState(usj, getViewOptions(STANDARD_VIEW_MODE));
    const { editor } = await baseTestEnvironment(JSON.stringify({ root: state.root }));
    await act(async () =>
      editor.update(() => {
        const root = $getRoot();
        root.select(0, root.getChildrenSize());
      }),
    );
    return { editor, whole: selectedText(editor) };
  }

  it("does not end inside a chapter line", async () => {
    const { editor, whole } = await selectWholeStandardView({
      type: "USJ",
      version: "3.1",
      content: [
        { type: "chapter", marker: "c", number: "12", sid: "GEN 12" },
        { type: "para", marker: "p", content: ["abc"] },
      ],
    } as unknown as Usj);
    // Standard view shows the spaces as no-break spaces.
    expect(whole).toMatch(/^\\c\s12\s/);
    await act(async () => editor.update(() => $limitSelectionLength(4)));
    expect(selectedText(editor)).toBe("");
  });

  it("does not end inside a character span's attribute", async () => {
    const { editor, whole } = await selectWholeStandardView({
      type: "USJ",
      version: "3.1",
      content: [
        {
          type: "para",
          marker: "p",
          content: [{ type: "char", marker: "w", content: ["word"], gloss: "abcdefgh" }, " tail"],
        },
      ],
    } as unknown as Usj);
    const attributeStart = whole.indexOf("|gloss");
    expect(attributeStart).toBeGreaterThan(0);
    await act(async () => editor.update(() => $limitSelectionLength(attributeStart + 5)));
    expect(selectedText(editor)).toBe(whole.slice(0, attributeStart));
  });

  it("does not step back into a note when the text after it starts with a mark", async () => {
    const { editor, whole } = await selectWholeStandardView({
      type: "USJ",
      version: "3.1",
      content: [
        {
          type: "para",
          marker: "p",
          content: [
            "Before ",
            {
              type: "note",
              marker: "f",
              caller: "+",
              content: [{ type: "char", marker: "ft", content: ["note"] }],
            },
            "\u05BCafter",
          ],
        },
      ],
    } as unknown as Usj);
    // The limit runs out exactly at the end of the note, and the next character is a mark that
    // joins the note's last character.
    const noteEnd = whole.indexOf("\u05BC");
    expect(noteEnd).toBeGreaterThan(0);
    await act(async () => editor.update(() => $limitSelectionLength(noteEnd)));
    expect(selectedText(editor)).toBe(whole.slice(0, whole.indexOf("\\f")));
  });
});

describe("$limitSelectionLength next to an atomic node", () => {
  it("does not end inside a token node when the text after it starts with a mark", async () => {
    // "ab " is a token node; the dagesh starting the next token node joins its trailing space.
    const result = await selectedTextAfterLimit(
      () => {
        const first = $createTextNode("ab ").setMode("token");
        const last = $createTextNode("\u05BCxy").setMode("token");
        $getRoot().append($createParagraphNode().append(first, last));
        return { first, last };
      },
      selectToEnd(0),
      3,
    );
    expect(result.changed).toBe(true);
    expect(result.text).toBe("");
  });

  it("does not select backwards when a selection starts inside a token node", async () => {
    const result = await selectedTextAfterLimit(
      () => {
        const first = $createTextNode("ab ").setMode("token");
        const last = $createTextNode("\u05BCxy");
        $getRoot().append($createParagraphNode().append(first, last));
        return { first, last };
      },
      selectToEnd(1),
      2,
    );
    expect(result.changed).toBe(true);
    expect(result.text).toBe("");
  });
});

describe("sliceToCopyLimit", () => {
  it("leaves text within the limit alone", () => {
    expect(sliceToCopyLimit("abcd", 4)).toBe("abcd");
  });

  it("keeps the start of text over the limit", () => {
    expect(sliceToCopyLimit("abcdef", 4)).toBe("abcd");
  });

  it("does not end inside a character outside the Basic Multilingual Plane", () => {
    expect(sliceToCopyLimit(`ab${String.fromCodePoint(0x1f600)}cd`, 3)).toBe("ab");
  });

  it("returns nothing for a limit of 0", () => {
    expect(sliceToCopyLimit("abcd", 0)).toBe("");
  });

  it.each([
    // Alef + hiriq, then bet + dagesh.
    [1, ""],
    [2, "\u05D0\u05B4"],
    [3, "\u05D0\u05B4"],
    [4, "\u05D0\u05B4\u05D1\u05BC"],
  ])("does not end between a letter and its marks (limit %i)", (limit, expected) => {
    expect(sliceToCopyLimit("\u05D0\u05B4\u05D1\u05BC", limit)).toBe(expected);
  });
});

describe("sliceToCopyLimit with a runtime that splits conjuncts", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.resetModules();
  });

  it("keeps a Khmer conjunct whole whatever the runtime's own segmenter does", async () => {
    // Stands in for a runtime whose `Intl.Segmenter` splits a Khmer conjunct after its coeng
    // (U+17D2), leaving the coeng dangling at the end of the first piece.
    const RealSegmenter = Intl.Segmenter;
    class ConjunctSplittingSegmenter extends RealSegmenter {
      override segment(input: string) {
        const pieces: Intl.SegmentData[] = [];
        for (const data of super.segment(input)) {
          const coeng = data.segment.indexOf("\u17D2");
          if (coeng < 0 || coeng === data.segment.length - 1) {
            pieces.push(data);
            continue;
          }
          const head = data.segment.slice(0, coeng + 1);
          pieces.push({ ...data, segment: head });
          pieces.push({
            ...data,
            segment: data.segment.slice(head.length),
            index: data.index + head.length,
          });
        }
        return pieces as unknown as Intl.Segments;
      }
    }
    vi.stubGlobal("Intl", { ...Intl, Segmenter: ConjunctSplittingSegmenter });
    vi.resetModules();
    const { sliceToCopyLimit: sliceWithStub } = await import("./copyLimit.utils");

    // Ka, coeng, ka, aa: one user-perceived character, four code units.
    expect(sliceWithStub("\u1780\u17D2\u1780\u17B6", 2)).toBe("");
    expect(sliceWithStub("\u1780\u17D2\u1780\u17B6", 4)).toBe("\u1780\u17D2\u1780\u17B6");
  });
});

describe("normalizeCopyLimit", () => {
  it.each([
    [undefined, undefined],
    [4, 4],
    [0, 0],
    [3.7, 3],
    [-2, 0],
    [Number.NaN, 0],
    [Number.POSITIVE_INFINITY, 0],
    ["5,000", 0],
    ["12.5", 12],
    [null, 0],
  ])("turns %s into %s", (limit, expected) => {
    expect(normalizeCopyLimit(limit as number | undefined)).toBe(expected);
  });
});
