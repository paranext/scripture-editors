/**
 * A line break (Lexical's `LineBreakNode`) has no USFM representation: no paragraph saves one, so
 * the text either side of it saved run together. Shift+Enter, and every other way a line break is
 * requested, does what Enter does, as in Paratext 9; and a line break a paste or drop brings in
 * (html's `<br>`, a node copy) splits the paragraph as a pasted plain-text line break does, or is a
 * space where the paragraph cannot be split.
 */
import {
  MountedEditor,
  editorView,
  enabledViews,
  footnotePopoverView,
  isPopoverHostEnabled,
  mountInPaneRow,
  mountInView,
} from "./editorViews.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $isLineBreakNode,
  $setSelection,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  INSERT_LINE_BREAK_COMMAND,
  PASTE_COMMAND,
  REDO_COMMAND,
  TextNode,
  UNDO_COMMAND,
} from "lexical";
import { $dfs } from "@lexical/utils";
import { HIDDEN_VIEW_CLIPBOARD_NAMESPACE, StructureProtectionMode } from "shared-react";

const VERSE_TEXT = "first verse text";

const BOOK: MarkerObject = { type: "book", marker: "id", code: "GEN", content: [] };

/** `\c 1`, then `\q1 \v 1 first verse text`, then `content`. */
function chapterOneHolding(...content: MarkerContent[]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      BOOK,
      { type: "chapter", marker: "c", number: "1" },
      {
        type: "para",
        marker: "q1",
        content: [{ type: "verse", marker: "v", number: "1" }, VERSE_TEXT],
      },
      ...content,
    ],
  };
}

const DOCUMENT = chapterOneHolding();

/** Text with no paragraph marker after the `\q1`: a line USFM holds with no marker. */
const WITH_UNMARKED_LINE = chapterOneHolding("unmarked line");

const NOTE: MarkerObject = {
  type: "note",
  marker: "f",
  caller: "+",
  content: [{ type: "char", marker: "ft", content: [VERSE_TEXT] }],
};

interface Flavors {
  [type: string]: string;
}

/** A stand-in for a clipboard's or drop's data: jsdom has no `DataTransfer`. */
function transfer(flavors: Flavors): DataTransfer {
  return {
    types: Object.keys(flavors),
    files: [],
    getData: (type: string) => flavors[type] ?? "",
  } as unknown as DataTransfer;
}

/** Puts the caret `after.length` characters into the first plain text holding `needle`. */
async function caretAt({ lexical }: MountedEditor, needle: string, after: string): Promise<void> {
  await act(async () =>
    lexical.update(
      () => {
        const node = $getRoot()
          .getAllTextNodes()
          .find(
            (text) =>
              text.getType() === TextNode.getType() && text.getTextContent().includes(needle),
          );
        if (!node) throw new Error(`no text holding "${needle}"`);
        const offset = node.getTextContent().indexOf(needle) + after.length;
        const selection = $createRangeSelection();
        selection.anchor.set(node.getKey(), offset, "text");
        selection.focus.set(node.getKey(), offset, "text");
        $setSelection(selection);
      },
      { discrete: true },
    ),
  );
}

async function pressEnter({ lexical }: MountedEditor, shiftKey = false): Promise<void> {
  await act(async () => {
    lexical
      .getRootElement()
      ?.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Enter", shiftKey, bubbles: true, cancelable: true }),
      );
  });
}

async function type({ lexical }: MountedEditor, text: string): Promise<void> {
  await act(async () => {
    lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, text);
  });
}

async function paste({ lexical }: MountedEditor, flavors: Flavors): Promise<void> {
  await act(async () => {
    lexical.dispatchCommand(PASTE_COMMAND, {
      clipboardData: transfer(flavors),
      preventDefault: () => undefined,
    } as unknown as ClipboardEvent);
  });
}

/** What Lexical's `beforeinput` handler dispatches for a drop that is not files. */
async function drop({ lexical }: MountedEditor, flavors: Flavors): Promise<void> {
  await act(async () => {
    lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, {
      inputType: "insertFromDrop",
      dataTransfer: transfer(flavors),
      preventDefault: () => undefined,
    } as unknown as InputEvent);
  });
}

async function undo({ lexical }: MountedEditor): Promise<void> {
  await act(async () => {
    lexical.dispatchCommand(UNDO_COMMAND, undefined);
  });
}

async function redo({ lexical }: MountedEditor): Promise<void> {
  await act(async () => {
    lexical.dispatchCommand(REDO_COMMAND, undefined);
  });
}

const saved = ({ ref }: MountedEditor) => ref.current?.getUsj()?.content;

function lineBreaksIn({ lexical }: MountedEditor): number {
  return lexical
    .getEditorState()
    .read(() => $dfs().filter(({ node }) => $isLineBreakNode(node)).length);
}

/** The paragraphs the editor saves after the chapter line, as `[marker, text]`. */
function savedParagraphs(mounted: MountedEditor): [string, string][] {
  const textOf = (content: MarkerContent[] | undefined): string =>
    (content ?? [])
      .map((item) =>
        typeof item === "string" ? item : item.type === "char" ? textOf(item.content) : "",
      )
      .join("");
  return (saved(mounted) ?? [])
    .slice(2)
    .map((item) =>
      typeof item === "string" ? ["", item] : [item.marker ?? "", textOf(item.content)],
    );
}

const MODES: StructureProtectionMode[] = ["off", "guarded", "protected"];

const VIEW_MODES = enabledViews(["standard", "formatted", "paragraph-structure"]).flatMap((view) =>
  MODES.map((mode) => ({ view, mode })),
);

/** The ways a line break is requested, each as Shift+Enter is. */
const LINE_BREAK_REQUESTS: [string, (mounted: MountedEditor) => Promise<void>][] = [
  ["Shift+Enter", (mounted) => pressEnter(mounted, true)],
  [
    "a line break requested with no keystroke (a beforeinput insertLineBreak, a typed \\n)",
    async ({ lexical }) => {
      await act(async () => {
        lexical.dispatchCommand(INSERT_LINE_BREAK_COMMAND, false);
      });
    },
  ],
  [
    "macOS Ctrl+O",
    async ({ lexical }) => {
      await act(async () => {
        lexical.dispatchCommand(INSERT_LINE_BREAK_COMMAND, true);
      });
    },
  ],
];

/** Mounts `usj`, puts the caret `after` into `needle`, runs `act`, then types `x`. */
async function savedAfter(
  usj: Usj,
  view: string,
  mode: StructureProtectionMode,
  [needle, after]: [string, string],
  run: (mounted: MountedEditor) => Promise<void>,
): Promise<{ content: MarkerContent[] | undefined; lineBreaks: number }> {
  const mounted = await mountInView(usj, editorView(view), { structureProtectionMode: mode });
  try {
    await caretAt(mounted, needle, after);
    await run(mounted);
    await type(mounted, "x");
    return { content: saved(mounted), lineBreaks: lineBreaksIn(mounted) };
  } finally {
    mounted.unmount();
  }
}

describe.each(VIEW_MODES)("in $view view with structure $mode", ({ view, mode }) => {
  describe.each(LINE_BREAK_REQUESTS)("%s", (_name, request) => {
    it.each<[string, Usj, [string, string]]>([
      ["mid-verse", DOCUMENT, [VERSE_TEXT, "first "]],
      ["in a line with no marker", WITH_UNMARKED_LINE, ["unmarked line", "unmarked "]],
    ])("%s, does what Enter does", async (_where, usj, caret) => {
      const enter = await savedAfter(usj, view, mode, caret, (mounted) => pressEnter(mounted));
      const lineBreak = await savedAfter(usj, view, mode, caret, request);

      expect(lineBreak.lineBreaks).toBe(0);
      expect(lineBreak.content).toEqual(enter.content);
    });
  });

  it("Shift+Enter splits the paragraph wherever Enter does", async () => {
    const mounted = await mountInView(DOCUMENT, editorView(view), {
      structureProtectionMode: mode,
    });
    try {
      await caretAt(mounted, VERSE_TEXT, "first ");
      await pressEnter(mounted, true);
      await type(mounted, "x");

      // Protected structure refuses Enter: the text stays in its paragraph, unsplit.
      if (mode === "protected")
        expect(savedParagraphs(mounted)).toEqual([["q1", "first xverse text"]]);
      else
        expect(savedParagraphs(mounted)).toEqual([
          ["q1", "first "],
          ["q1", "xverse text"],
        ]);
    } finally {
      mounted.unmount();
    }
  });

  it.skipIf(mode === "protected")("Shift+Enter is undone and redone whole", async () => {
    const mounted = await mountInView(DOCUMENT, editorView(view), {
      structureProtectionMode: mode,
    });
    try {
      const before = saved(mounted);
      await caretAt(mounted, VERSE_TEXT, "first ");
      await pressEnter(mounted, true);
      const split = saved(mounted);
      expect(savedParagraphs(mounted)).toHaveLength(2);

      await undo(mounted);
      expect(saved(mounted)).toEqual(before);

      await redo(mounted);
      expect(saved(mounted)).toEqual(split);
    } finally {
      mounted.unmount();
    }
  });
});

// Standard view pastes and drops USFM text (its own tokenizer), where a line break is already a
// paragraph break; these are the views whose paste inserts html as Lexical parses it.
const HIDDEN_VIEW_MODES = enabledViews(["formatted", "paragraph-structure"]).flatMap((view) =>
  MODES.map((mode) => ({ view, mode })),
);

/** A node copy from a view that hides markers, holding each of `texts` with a line break between. */
function nodeCopyWithLineBreaks(...texts: string[]): string {
  const text = (value: string) => ({
    type: "text",
    text: value,
    detail: 0,
    format: 0,
    mode: "normal",
    style: "",
    version: 1,
  });
  return JSON.stringify({
    namespace: HIDDEN_VIEW_CLIPBOARD_NAMESPACE,
    nodes: texts.flatMap((value, index) =>
      index === 0 ? [text(value)] : [{ type: "linebreak", version: 1 }, text(value)],
    ),
  });
}

const NODE_COPY_WITH_LINE_BREAK = nodeCopyWithLineBreaks("x", "y");

describe.each(HIDDEN_VIEW_MODES)("in $view view with structure $mode", ({ view, mode }) => {
  /** Split like Enter, or joined by a space where protected structure refuses the split. */
  const expected: [string, string][] =
    mode === "protected"
      ? [["q1", "first x yverse text"]]
      : [
          ["q1", "first x"],
          ["q1", "yverse text"],
        ];

  it.each<[string, (mounted: MountedEditor) => Promise<void>]>([
    [
      "pasted html's <br>",
      (m) => paste(m, { "text/html": "<span>x<br>y</span>", "text/plain": "x\ny" }),
    ],
    [
      "a <br> inside a pasted html paragraph",
      (m) => paste(m, { "text/html": "<p>x<br>y</p>", "text/plain": "x\ny" }),
    ],
    [
      "dropped html's <br>",
      (m) => drop(m, { "text/html": "<span>x<br>y</span>", "text/plain": "x\ny" }),
    ],
    [
      "a line break in a pasted node copy",
      (m) =>
        paste(m, {
          "application/x-lexical-editor": NODE_COPY_WITH_LINE_BREAK,
          "text/plain": "x\ny",
        }),
    ],
    ["a lone carriage return in pasted plain text", (m) => paste(m, { "text/plain": "x\ry" })],
  ])("%s splits the paragraph as a plain-text line break does", async (_name, insert) => {
    const mounted = await mountInView(DOCUMENT, editorView(view), {
      structureProtectionMode: mode,
    });
    try {
      await caretAt(mounted, VERSE_TEXT, "first ");
      await insert(mounted);

      expect(lineBreaksIn(mounted)).toBe(0);
      expect(savedParagraphs(mounted)).toEqual(expected);
    } finally {
      mounted.unmount();
    }
  });

  it("leaves the caret after what was pasted", async () => {
    const mounted = await mountInView(DOCUMENT, editorView(view), {
      structureProtectionMode: mode,
    });
    try {
      await caretAt(mounted, VERSE_TEXT, "first ");
      await paste(mounted, { "text/html": "<span>x<br>y</span>", "text/plain": "x\ny" });
      await type(mounted, "z");

      expect(savedParagraphs(mounted)).toEqual(
        expected.map(([marker, text]) => [marker, text.replace("yverse", "yzverse")]),
      );
    } finally {
      mounted.unmount();
    }
  });

  it("a pasted <br> is undone and redone with the paste", async () => {
    const mounted = await mountInView(DOCUMENT, editorView(view), {
      structureProtectionMode: mode,
    });
    try {
      const before = saved(mounted);
      await caretAt(mounted, VERSE_TEXT, "first ");
      await paste(mounted, { "text/html": "<span>x<br>y</span>", "text/plain": "x\ny" });
      expect(savedParagraphs(mounted)).toEqual(expected);

      await undo(mounted);
      expect(saved(mounted)).toEqual(before);

      await redo(mounted);
      expect(savedParagraphs(mounted)).toEqual(expected);
    } finally {
      mounted.unmount();
    }
  });

  it("a <br> ending pasted html does not join the last word to the text after the caret", async () => {
    const mounted = await mountInView(DOCUMENT, editorView(view), {
      structureProtectionMode: "protected",
    });
    try {
      await caretAt(mounted, VERSE_TEXT, "first ");
      await paste(mounted, { "text/html": "<span>x<br></span>", "text/plain": "x\n" });

      expect(savedParagraphs(mounted)).toEqual([["q1", "first x verse text"]]);
    } finally {
      mounted.unmount();
    }
  });

  it("a run of line breaks in a node copy, or one beside a space, makes no double space where it joins", async () => {
    const mounted = await mountInView(DOCUMENT, editorView(view), {
      structureProtectionMode: "protected",
    });
    try {
      await caretAt(mounted, VERSE_TEXT, "first ");
      await paste(mounted, {
        "application/x-lexical-editor": nodeCopyWithLineBreaks("x ", "", "y"),
        "text/plain": "x \n\ny",
      });

      expect(savedParagraphs(mounted)).toEqual([["q1", "first x yverse text"]]);
    } finally {
      mounted.unmount();
    }
  });

  it.each([
    ["<span>x <br><br>y</span>", "pasted text"],
    ["<p>x <br><br>y</p>", "a pasted html paragraph"],
  ])(
    "a run of <br>, or one beside a space, in %s (%s) makes no double space where it joins",
    async (html) => {
      const mounted = await mountInView(DOCUMENT, editorView(view), {
        structureProtectionMode: "protected",
      });
      try {
        await caretAt(mounted, VERSE_TEXT, "first ");
        await paste(mounted, { "text/html": html, "text/plain": "x \n\ny" });

        expect(savedParagraphs(mounted)).toEqual([["q1", "first x yverse text"]]);
      } finally {
        mounted.unmount();
      }
    },
  );
});

/** The text of the note's `\ft`, and every other char span after it, as `[marker, text]`. */
function savedNote(mounted: MountedEditor): [string, string][] {
  const para = saved(mounted)?.find(
    (item): item is MarkerObject => typeof item !== "string" && item.type === "para",
  );
  const note = para?.content?.find(
    (item): item is MarkerObject => typeof item !== "string" && item.type === "note",
  );
  return (note?.content ?? []).map((item) =>
    typeof item === "string"
      ? ["", item]
      : [item.marker ?? "", (item.content ?? []).filter((c) => typeof c === "string").join("")],
  );
}

describe("in the footnotes pane's row editor", () => {
  it.each(LINE_BREAK_REQUESTS)(
    "%s makes the footnote paragraph break Enter makes",
    async (_name, request) => {
      const after = async (run: (mounted: MountedEditor) => Promise<void>) => {
        const mounted = await mountInPaneRow(NOTE);
        try {
          await caretAt(mounted, VERSE_TEXT, "first ");
          await run(mounted);
          await type(mounted, "x");
          return { note: savedNote(mounted), lineBreaks: lineBreaksIn(mounted) };
        } finally {
          mounted.unmount();
        }
      };
      const enter = await after((mounted) => pressEnter(mounted));
      const lineBreak = await after(request);

      expect(enter.note.map(([marker]) => marker)).toContain("fp");
      expect(lineBreak).toEqual(enter);
    },
  );
});

const POPOVER_HOSTS = ["formatted", "paragraph-structure"].filter(isPopoverHostEnabled);

describe.each(POPOVER_HOSTS)("in the footnote popover over %s view", (host) => {
  async function mountPopover(): Promise<MountedEditor> {
    const mounted = await mountInView(
      { type: "USJ", version: "3.1", content: [{ type: "para", marker: "p", content: [NOTE] }] },
      footnotePopoverView(editorView(host)),
    );
    await caretAt(mounted, VERSE_TEXT, "first ");
    return mounted;
  }

  it.each(LINE_BREAK_REQUESTS)(
    "%s does nothing, as Enter does in a note there",
    async (_name, request) => {
      const mounted = await mountPopover();
      try {
        await request(mounted);
        await type(mounted, "x");

        expect(lineBreaksIn(mounted)).toBe(0);
        expect(savedNote(mounted)).toEqual([["ft", "first xverse text"]]);
      } finally {
        mounted.unmount();
      }
    },
  );

  it("pasted html's <br> is a space: a note holds no paragraph break here", async () => {
    const mounted = await mountPopover();
    try {
      await paste(mounted, { "text/html": "<span>x<br>y</span>", "text/plain": "x\ny" });

      expect(lineBreaksIn(mounted)).toBe(0);
      expect(savedNote(mounted)).toEqual([["ft", "first x yverse text"]]);
    } finally {
      mounted.unmount();
    }
  });
});
