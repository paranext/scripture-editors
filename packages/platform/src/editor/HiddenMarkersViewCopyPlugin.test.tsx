import usjEditorAdaptor, {
  initialize as initializeSerialize,
  reset,
} from "./adaptors/usj-editor.adaptor";
import { $isInCollapsedNote, $selectionPlainText } from "./copyLimit/copyLimit.utils";
import { CopyLimitPlugin } from "./copyLimit/CopyLimitPlugin";
import { HiddenMarkersViewCopyPlugin } from "./HiddenMarkersViewCopyPlugin";
import { copyEvent } from "./markerEdit/markerEdit.test-helpers";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { baseTestEnvironment } from "../../../../libs/shared-react/src/plugins/usj/react-test.utils";
import { $getClipboardDataFromSelection, LexicalClipboardData } from "@lexical/clipboard";
import { $dfs } from "@lexical/utils";
import { usxStringToUsj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createPoint,
  $createRangeSelection,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $setSelection,
  COMMAND_PRIORITY_CRITICAL,
  COPY_COMMAND,
  CUT_COMMAND,
  LexicalEditor,
  TextNode,
} from "lexical";
import { $isMarkerTrailingSeparator, NBSP } from "shared";
import {
  $isSomeVerseNode,
  FORMATTED_VIEW_MODE,
  getViewOptions,
  PARAGRAPH_STRUCTURE_VIEW_MODE,
} from "shared-react";

// Mocked so a null-payload dispatch (Ctrl+C, the context menu, EditorRef) can be read back: jsdom
// has no `execCommand` for the real one to write through. The rest of the module stays real.
const copyToClipboardSpy = vi.hoisted(() =>
  vi.fn<
    (
      editor: LexicalEditor,
      event: null | ClipboardEvent,
      data?: LexicalClipboardData,
    ) => Promise<boolean>
  >(async () => true),
);
vi.mock("@lexical/clipboard", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@lexical/clipboard")>();
  return { ...actual, copyToClipboard: copyToClipboardSpy };
});

const NOTE =
  `<note style="f" caller="+"><char style="fr" closed="false">1:2 </char>` +
  `<char style="ft" closed="false">“Yahweh” is God’s proper Name.</char></note>`;

/** WEB Psalm 1:2, with an NBSP the text itself holds after the note. */
const PSALM_1_2 =
  `<para style="q1"><verse number="2" style="v" />but his delight is in Yahweh’s${NOTE} law.` +
  ` Day${NBSP}and night.</para>`;

const MARK_RUNS = `<char style="fr" closed="false">1:2 </char><char style="ft" closed="false">text</char>`;

const PSALM_1_2_PROSE = `but his delight is in Yahweh’s 1:2 “Yahweh” is God’s proper Name. law.`;

function usx(paras: string): string {
  return (
    `<usx version="3.0"><book code="PSA" style="id">Psalms</book>` +
    `<chapter number="1" style="c" />${paras}</usx>`
  );
}

async function renderEditor(
  paras = PSALM_1_2,
  {
    allowInvisibleCharacters = true,
    copyLimit,
    viewMode = PARAGRAPH_STRUCTURE_VIEW_MODE,
  }: { allowInvisibleCharacters?: boolean; copyLimit?: number; viewMode?: string } = {},
) {
  // Invisible characters are allowed unless a test says otherwise, so a stored no-break space
  // copies as itself and the spacing rules can be read off the plain text.
  const defaultOptions = getViewOptions(viewMode);
  if (!defaultOptions) throw new Error(`${viewMode} view options are required`);
  const viewOptions = { ...defaultOptions, allowInvisibleCharacters };
  initializeSerialize(undefined, undefined);
  reset();
  const state = usjEditorAdaptor.serializeEditorState(usxStringToUsj(usx(paras)), viewOptions);
  return baseTestEnvironment(
    JSON.stringify({ root: state.root }),
    <>
      <CopyLimitPlugin limit={copyLimit} viewOptions={viewOptions} />
      <HiddenMarkersViewCopyPlugin allowInvisibleCharacters={allowInvisibleCharacters} />
    </>,
  );
}

function $textNodes(): TextNode[] {
  return $getRoot().getAllTextNodes();
}

/** The first text node that holds `text`. */
function $textNode(text: string): TextNode {
  const node = $textNodes().find((candidate) => candidate.getTextContent().includes(text));
  if (!node) throw new Error(`fixture has no text node holding "${text}"`);
  return node;
}

/** Selects from `anchorOffset` in `anchor` to `focusOffset` in `focus` (a negative offset counts
 * back from the node's end, so -1 is the end itself). */
function $select(anchor: TextNode, anchorOffset: number, focus: TextNode, focusOffset: number) {
  const at = (node: TextNode, offset: number) =>
    $createPoint(
      node.getKey(),
      offset < 0 ? node.getTextContentSize() + offset + 1 : offset,
      "text",
    );
  const selection = $createRangeSelection();
  selection.anchor = at(anchor, anchorOffset);
  selection.focus = at(focus, focusOffset);
  $setSelection(selection);
}

/** Selects from the start of the node holding `from` to the end of the node holding `to`. */
function $selectBetween(from: string, to: string) {
  $select($textNode(from), 0, $textNode(to), -1);
}

async function copy(editor: LexicalEditor, command = COPY_COMMAND) {
  const { event, getData } = copyEvent();
  await act(async () => editor.dispatchCommand(command, event));
  return { event, getData };
}

/**
 * Dispatches `COPY_COMMAND` with a real `ClipboardEvent` (the test setup supplies the class), so
 * Lexical's own copy, if it runs, writes through the event rather than `document.execCommand`.
 */
async function copyWithLexicalFallback(editor: LexicalEditor, command = COPY_COMMAND) {
  const store = new Map<string, string>();
  const clipboardData = {
    getData: (format: string) => store.get(format) ?? "",
    setData: (format: string, data: string) => {
      store.set(format, data);
    },
    types: [],
    files: [],
  };
  const type = command === CUT_COMMAND ? "cut" : "copy";
  const event = new ClipboardEvent(type, { bubbles: true, cancelable: true });
  Object.defineProperty(event, "clipboardData", { value: clipboardData });
  await act(async () => editor.dispatchCommand(command, event));
  return { event, getData: clipboardData.getData };
}

describe("HiddenMarkersViewCopyPlugin", () => {
  beforeEach(() => copyToClipboardSpy.mockClear());

  it("copies a note's layout spacers as single spaces, not NBSPs beside spaces", async () => {
    const { editor } = await renderEditor();
    await act(async () => editor.update(() => $selectBetween("but his", "night.")));
    const { getData } = await copy(editor);

    expect(getData("text/plain")).toBe(`${PSALM_1_2_PROSE} Day${NBSP}and night.`);
  });

  it("keeps Lexical's own html and internal flavors, which the editor's own paste reads", async () => {
    const { editor } = await renderEditor();
    await act(async () => editor.update(() => $selectBetween("but his", "night.")));
    const expected = editor
      .getEditorState()
      .read(() => $getClipboardDataFromSelection($getSelection()), { editor });
    const { getData } = await copy(editor);

    expect(getData("text/html")).toBe(expected["text/html"]);
    expect(getData("application/x-lexical-editor")).toBe(expected["application/x-lexical-editor"]);
  });

  it("writes the same flavors for a Ctrl+C, which dispatches no clipboard event", async () => {
    const { editor } = await renderEditor();
    await act(async () => editor.update(() => $selectBetween("but his", "night.")));
    const expected = editor
      .getEditorState()
      .read(() => $getClipboardDataFromSelection($getSelection()), { editor });
    await act(async () => editor.dispatchCommand(COPY_COMMAND, null));

    expect(copyToClipboardSpy.mock.calls.at(-1)?.[2]).toEqual({
      "text/html": expected["text/html"],
      "application/x-lexical-editor": expected["application/x-lexical-editor"],
      "text/plain": `${PSALM_1_2_PROSE} Day${NBSP}and night.`,
    });
  });

  it("keeps an NBSP the text itself holds, even beside a note", async () => {
    const { editor } = await renderEditor(
      `<para style="q1">Yahweh’s${NBSP}${NOTE}${NBSP}law.</para>`,
    );
    await act(async () => editor.update(() => $selectBetween("Yahweh’s", "law.")));
    const { getData } = await copy(editor);

    expect(getData("text/plain")).toBe(
      `Yahweh’s${NBSP}1:2 “Yahweh” is God’s proper Name.${NBSP}law.`,
    );
  });

  it("writes a stored no-break space as `~` when invisible characters are not allowed", async () => {
    const { editor } = await renderEditor(
      `<para style="q1">Yahweh’s${NBSP}${NOTE}${NBSP}law.</para>`,
      { allowInvisibleCharacters: false },
    );
    await act(async () => editor.update(() => $selectBetween("Yahweh’s", "law.")));
    const { getData } = await copy(editor);

    // Still the whitespace it stands for, so no space is added beside the note either.
    expect(getData("text/plain")).toBe("Yahweh’s~1:2 “Yahweh” is God’s proper Name.~law.");
    // The html is what the editor's own paste reads, where a `~` would come back a literal tilde.
    expect(getData("text/html")).not.toContain("~");
  });

  it.each([
    [true, `left${NBSP}right`],
    [false, "left~right"],
  ])(
    "keeps an author's `~` that is a span's whole content (invisible characters allowed: %s)",
    async (allowInvisibleCharacters, expected) => {
      const { editor } = await renderEditor(
        `<para style="p">left<char style="nd" closed="false">${NBSP}</char>right</para>`,
        { allowInvisibleCharacters, viewMode: FORMATTED_VIEW_MODE },
      );
      await act(async () => editor.update(() => $selectBetween("left", "right")));
      const { getData } = await copy(editor);

      expect(getData("text/plain")).toBe(expected);
    },
  );

  it("weighs a note's spacing past text that displays as nothing", async () => {
    const { editor } = await renderEditor(
      `<para style="p"><char style="nd" closed="false">LORD </char>\u200F${NOTE}\u200F` +
        `<char style="nd" closed="false"> Almighty</char></para>`,
      { viewMode: FORMATTED_VIEW_MODE },
    );
    await act(async () => editor.update(() => $selectBetween("LORD", " Almighty")));
    const { getData } = await copy(editor);

    expect(getData("text/plain")).toBe(
      "LORD \u200F1:2 “Yahweh” is God’s proper Name.\u200F Almighty",
    );
  });

  it.each([
    { edge: "opens", inner: `\u200F${MARK_RUNS}`, expected: "Word \u200F1:2 text rest." },
    { edge: "closes", inner: `${MARK_RUNS}\u200F`, expected: "Word 1:2 text\u200F rest." },
  ])(
    "keeps a direction mark that $edge a note on its own side of the space",
    async ({ inner, expected }) => {
      const { editor } = await renderEditor(
        `<para style="p">Word<note style="f" caller="+" closed="false">${inner}</note>rest.</para>`,
      );
      await act(async () => editor.update(() => $selectBetween("Word", "rest.")));
      const { getData } = await copy(editor);

      expect(getData("text/plain")).toBe(expected);
    },
  );

  it("adds no space where the copy starts or ends at a spacer", async () => {
    const { editor } = await renderEditor();
    await act(async () =>
      editor.update(() => {
        // From the end of "Yahweh’s" (the caller and its spacer come next) to the end of the
        // note's last spacer.
        const spacers = $textNodes().filter($isMarkerTrailingSeparator);
        const lastSpacer = spacers[spacers.length - 1];
        $select($textNode("Yahweh’s"), -1, lastSpacer, -1);
      }),
    );
    const { getData } = await copy(editor);

    expect(getData("text/plain")).toBe("1:2 “Yahweh” is God’s proper Name.");
  });

  it("adds nothing between a note's runs, where the file has nothing", async () => {
    const { editor } = await renderEditor(
      `<para style="p">See<note style="x" caller="-"><char style="xo" closed="false">1:2 </char>` +
        `<char style="xt" closed="false">Gen 1:1</char>, <char style="xt" closed="false">` +
        `Exo 2:3</char></note> here.</para>`,
    );
    await act(async () => editor.update(() => $selectBetween("See", "here.")));
    const { getData } = await copy(editor);

    expect(getData("text/plain")).toBe("See 1:2 Gen 1:1, Exo 2:3 here.");
  });

  it("leaves out an empty span's placeholder", async () => {
    const { editor } = await renderEditor(
      `<para style="p">Word<note style="f" caller="+"><char style="fr" closed="false">3:2 </char>` +
        `<char style="fk" closed="false"></char><char style="ft" closed="false">The Hebrew word.` +
        `</char></note> rest.</para>`,
    );
    await act(async () => editor.update(() => $selectBetween("Word", "rest.")));
    const { getData } = await copy(editor);

    expect(getData("text/plain")).toBe("Word 3:2 The Hebrew word. rest.");
  });

  it("adds no space where a note ends its paragraph", async () => {
    const { editor } = await renderEditor(
      `<para style="p">Yahweh’s${NOTE}</para><para style="p">Next line.</para>`,
      { viewMode: FORMATTED_VIEW_MODE },
    );
    await act(async () => editor.update(() => $selectBetween("Yahweh’s", "Next line.")));
    const { getData } = await copy(editor);

    expect(getData("text/plain")).toBe("Yahweh’s 1:2 “Yahweh” is God’s proper Name.\nNext line.");
  });

  it("adds no space for a note with no text", async () => {
    const { editor } = await renderEditor(
      `<para style="p">Yahweh<note style="f" caller="+"><char style="ft" closed="false"></char>` +
        `</note>, the God.</para>`,
      { viewMode: FORMATTED_VIEW_MODE },
    );
    await act(async () => editor.update(() => $selectBetween("Yahweh", "the God.")));
    const { getData } = await copy(editor);

    expect(getData("text/plain")).toBe("Yahweh, the God.");
  });

  it("sees past invisible format characters on either side of a note", async () => {
    const { editor } = await renderEditor(
      `<para style="p">Word\uFEFF${NOTE} rest.</para><para style="p">Spaced \uFEFF${NOTE}` +
        `\u200F rest.</para>`,
      { viewMode: FORMATTED_VIEW_MODE },
    );
    await act(async () => editor.update(() => $selectBetween("Word", "\u200F rest.")));
    const { getData } = await copy(editor);

    // A format character displays as nothing: it is no space itself, and it hides none.
    expect(getData("text/plain")).toBe(
      "Word\uFEFF 1:2 “Yahweh” is God’s proper Name. rest.\n" +
        "Spaced \uFEFF1:2 “Yahweh” is God’s proper Name.\u200F rest.",
    );
  });

  it("writes the same plain text on a cut, and removes the range", async () => {
    const { editor } = await renderEditor();
    await act(async () => editor.update(() => $selectBetween("but his", "night.")));
    const { getData } = await copy(editor, CUT_COMMAND);

    expect(getData("text/plain")).toBe(`${PSALM_1_2_PROSE} Day${NBSP}and night.`);
    expect(editor.getEditorState().read(() => $getRoot().getTextContent())).not.toContain(
      "delight",
    );
  });

  it("leaves a selection with no text, such as a verse number, to Lexical's own copy", async () => {
    const { editor } = await renderEditor();
    await act(async () =>
      editor.update(() => {
        const verse = $dfs()
          .map(({ node }) => node)
          .find($isSomeVerseNode);
        if (!verse) throw new Error("fixture has no verse");
        const para = verse.getParentOrThrow();
        const selection = $createRangeSelection();
        selection.anchor = $createPoint(para.getKey(), verse.getIndexWithinParent(), "element");
        selection.focus = $createPoint(para.getKey(), verse.getIndexWithinParent() + 1, "element");
        $setSelection(selection);
      }),
    );
    const { event, getData } = await copyWithLexicalFallback(editor);

    // Lexical's copy wrote the verse in its own flavors.
    expect(event.defaultPrevented).toBe(true);
    expect(getData("application/x-lexical-editor")).toContain('"number":"2"');
  });

  it("leaves a copy whose page selection runs outside the editor to Lexical's own copy", async () => {
    const { editor } = await renderEditor();
    await act(async () => editor.update(() => $selectBetween("but his", "night.")));
    const outside = document.createElement("p");
    outside.textContent = "Outside the editor";
    document.body.append(outside);
    let hadEditorRange = false;
    const unregister = editor.registerCommand(
      COPY_COMMAND,
      () => {
        const selection = $getSelection();
        hadEditorRange = $isRangeSelection(selection) && !selection.isCollapsed();
        return false;
      },
      COMMAND_PRIORITY_CRITICAL,
    );
    let result: Awaited<ReturnType<typeof copyWithLexicalFallback>>;
    try {
      const range = document.createRange();
      range.selectNodeContents(outside);
      document.getSelection()?.removeAllRanges();
      document.getSelection()?.addRange(range);
      result = await copyWithLexicalFallback(editor);
    } finally {
      unregister();
      document.getSelection()?.removeAllRanges();
      outside.remove();
    }
    const { event, getData } = result;

    // Lexical's copy declines it too, so the browser copies what the page has selected.
    expect(hadEditorRange).toBe(true);
    expect(getData("text/plain")).toBe("");
    expect(event.defaultPrevented).toBe(false);
  });

  it("writes a cut whose page selection runs outside the editor, since Lexical's cut removes it", async () => {
    const { editor } = await renderEditor(PSALM_1_2, { allowInvisibleCharacters: false });
    await act(async () => editor.update(() => $selectBetween("but his", "night.")));
    const outside = document.createElement("p");
    outside.textContent = "Outside the editor";
    document.body.append(outside);
    let result: Awaited<ReturnType<typeof copyWithLexicalFallback>>;
    try {
      const range = document.createRange();
      range.selectNodeContents(outside);
      document.getSelection()?.removeAllRanges();
      document.getSelection()?.addRange(range);
      result = await copyWithLexicalFallback(editor, CUT_COMMAND);
    } finally {
      document.getSelection()?.removeAllRanges();
      outside.remove();
    }
    const { event, getData } = result;

    expect(event.defaultPrevented).toBe(true);
    expect(getData("text/plain")).toBe(`${PSALM_1_2_PROSE} Day~and night.`);
    expect(editor.getEditorState().read(() => $getRoot().getTextContent())).not.toContain(
      "delight",
    );
  });

  it.each([
    {
      name: "counts empty spans' placeholders for nothing as it fits a copy to the limit",
      paras:
        `<para style="p">aaaa<char style="w" closed="false"></char>` +
        `<char style="nd" closed="false"></char><char style="wj" closed="false"></char>` +
        `bbbbbbbbbbbb</para>`,
      from: "aaaa",
      limit: 10,
      expected: "aaaabbbbbb",
    },
    {
      name: "fits text, not placeholders, when a limited copy starts at an empty span",
      paras:
        `<para style="p">Word<char style="w" closed="false"></char>` +
        `<char style="nd" closed="false"></char>abcdef</para>`,
      from: NBSP,
      limit: 2,
      expected: "ab",
    },
  ])("$name", async ({ paras, from, limit, expected }) => {
    const { editor } = await renderEditor(paras, {
      copyLimit: limit,
      viewMode: FORMATTED_VIEW_MODE,
    });
    await act(async () =>
      editor.update(() => {
        const start =
          $textNodes().find((node) => node.getTextContent() === from) ?? $textNode(from);
        const end = $textNodes().at(-1);
        if (!end) throw new Error("fixture has no text");
        $select(start, 0, end, -1);
      }),
    );
    const { getData } = await copy(editor);

    expect(getData("text/plain")).toBe(expected);
  });

  it("keeps an over-limit copy of only layout bytes within the limit", async () => {
    const { editor } = await renderEditor(
      `<para style="p">Word<char style="w" closed="false"></char>` +
        `<char style="nd" closed="false"></char> rest.</para>`,
      { copyLimit: 1, viewMode: FORMATTED_VIEW_MODE },
    );
    await act(async () =>
      editor.update(() => {
        const placeholders = $textNodes().filter((node) => node.getTextContent() === NBSP);
        if (placeholders.length !== 2) throw new Error("expected two empty-span placeholders");
        $select(placeholders[0], 0, placeholders[1], -1);
      }),
    );
    const { getData } = await copy(editor);

    expect(getData("text/plain").length).toBeLessThanOrEqual(1);
  });

  it("is what an over-limit copy writes too", async () => {
    // A note that is not collapsed (an unclosed one) keeps its text, and its spacers, in the
    // over-limit copy. The limit is the length of the selection's prose, shorter than its shown
    // text, so the whole selection fits.
    const unclosedNote = NOTE.replace('caller="+"', 'caller="+" closed="false"');
    const paras = `<para style="q1">but his delight is in Yahweh’s${unclosedNote} law.</para>`;
    const { editor: measured } = await renderEditor(paras);
    await act(async () => measured.update(() => $selectBetween("but his", " law.")));
    const limit = measured.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      return $selectionPlainText(selection, $isInCollapsedNote).length;
    });

    const { editor } = await renderEditor(paras, { copyLimit: limit });
    await act(async () => editor.update(() => $selectBetween("but his", " law.")));
    const { getData } = await copy(editor);

    expect(getData("text/plain")).toBe(PSALM_1_2_PROSE);
    expect(getData("text/html")).toBe("");
  });
});
