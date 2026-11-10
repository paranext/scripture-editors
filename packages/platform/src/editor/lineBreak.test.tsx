/**
 * A line break (Lexical's `LineBreakNode`) has no USFM representation: no paragraph saves one, so
 * the text either side of it saved run together. Shift+Enter, and every other way a line break is
 * requested, does what Enter does, as in Paratext 9; and a line break a paste or drop brings in
 * (html's `<br>`, a node copy) splits the paragraph as a pasted plain-text line break does, or is a
 * space where the paragraph cannot be split. So does a line break inside one string of typed text
 * (dictation, autocorrect, an extension's insertion).
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
  $getSelection,
  $isLineBreakNode,
  $isRangeSelection,
  $setCompositionKey,
  $setSelection,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  INSERT_LINE_BREAK_COMMAND,
  PASTE_COMMAND,
  REDO_COMMAND,
  TextNode,
  UNDO_COMMAND,
} from "lexical";
import { $dfs } from "@lexical/utils";
import {
  HIDDEN_VIEW_CLIPBOARD_NAMESPACE,
  StructureProtectionMode,
  UnstorableTextRemovedHandler,
} from "shared-react";

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

/** Each way a line break is written inside one string of text. */
const NEWLINES: [string, string][] = [
  ["\\n", "\n"],
  ["\\r\\n", "\r\n"],
  ["a lone \\r", "\r"],
];

/**
 * Unicode's line and paragraph separators, which are not line breaks: as in Paratext 9, each is a
 * character like any other, kept in the text where it is inserted and saved as it is.
 */
const SEPARATORS: [string, string][] = [
  ["U+2028 (line separator)", "\u2028"],
  ["U+2029 (paragraph separator)", "\u2029"],
];

/** A stand-in for the input event Lexical hands on for a replacement or a yank. */
function inputEvent(
  inputType: string,
  data: string | null,
  dataTransfer: DataTransfer | null = null,
): InputEvent {
  return {
    inputType,
    data,
    dataTransfer,
    preventDefault: () => undefined,
  } as unknown as InputEvent;
}

/** Dispatches `text` as a `beforeinput` `insertText` the browser would apply to the page itself. */
async function inputText({ lexical }: MountedEditor, text: string): Promise<void> {
  const root = lexical.getRootElement();
  if (!root) throw new Error("editor root not found");
  await act(async () => {
    root.dispatchEvent(
      new InputEvent("beforeinput", {
        inputType: "insertText",
        data: text,
        bubbles: true,
        cancelable: true,
      }),
    );
  });
}

/** The routes that carry one string of text, its line breaks and all. */
const TEXT_INSERTIONS: [string, (mounted: MountedEditor, text: string) => Promise<void>][] = [
  ["text inserted as a string (dictation, an extension)", type],
  ["a beforeinput insertText the browser would apply itself", inputText],
  [
    "an autocorrect or text replacement carrying its text as data",
    async ({ lexical }, text) => {
      await act(async () => {
        lexical.dispatchCommand(
          CONTROLLED_TEXT_INSERTION_COMMAND,
          inputEvent("insertReplacementText", text),
        );
      });
    },
  ],
  [
    "a text replacement carrying its text as a transfer (Chrome, Safari)",
    async ({ lexical }, text) => {
      await act(async () => {
        lexical.dispatchCommand(
          CONTROLLED_TEXT_INSERTION_COMMAND,
          inputEvent("insertReplacementText", null, transfer({ "text/plain": text })),
        );
      });
    },
  ],
  [
    "a yank (macOS Ctrl+Y)",
    async ({ lexical }, text) => {
      await act(async () => {
        lexical.dispatchCommand(
          CONTROLLED_TEXT_INSERTION_COMMAND,
          inputEvent("insertFromYank", text),
        );
      });
    },
  ],
];

describe.each(VIEW_MODES)("in $view view with structure $mode", ({ view, mode }) => {
  /** Split as a pasted line break splits, or joined by a space where the split is refused. */
  const splitOrJoined = (split: [string, string][], joined: string): [string, string][] =>
    mode === "protected" ? [["q1", joined]] : split;

  async function savedAfterInserting(
    text: string,
    insert: (mounted: MountedEditor, text: string) => Promise<void> = type,
  ): Promise<[string, string][]> {
    const mounted = await mountInView(DOCUMENT, editorView(view), {
      structureProtectionMode: mode,
    });
    try {
      await caretAt(mounted, VERSE_TEXT, "first ");
      await insert(mounted, text);
      expect(lineBreaksIn(mounted)).toBe(0);
      return savedParagraphs(mounted);
    } finally {
      mounted.unmount();
    }
  }

  it.each(NEWLINES)(
    "%s inside typed text splits the paragraph as a pasted line break does",
    async (_name, newline) => {
      expect(await savedAfterInserting(`x${newline}y`)).toEqual(
        splitOrJoined(
          [
            ["q1", "first x"],
            ["q1", "yverse text"],
          ],
          "first x yverse text",
        ),
      );
    },
  );

  it.each(SEPARATORS)(
    "%s inside typed text stays in the text as a character, as in Paratext 9",
    async (_name, separator) => {
      expect(await savedAfterInserting(`x${separator}y`)).toEqual([
        ["q1", `first x${separator}yverse text`],
      ]);
    },
  );

  it.each(TEXT_INSERTIONS)("%s holding a line break splits the same way", async (_name, insert) => {
    expect(await savedAfterInserting("x\ny", insert)).toEqual(
      splitOrJoined(
        [
          ["q1", "first x"],
          ["q1", "yverse text"],
        ],
        "first x yverse text",
      ),
    );
  });

  it.each<[string, string, [string, string][], string]>([
    [
      "a leading line break",
      "\nx",
      [
        ["q1", "first "],
        ["q1", "xverse text"],
      ],
      "first xverse text",
    ],
    [
      "a trailing line break",
      "x\n",
      [
        ["q1", "first x"],
        ["q1", "verse text"],
      ],
      "first x verse text",
    ],
    [
      "a run of line breaks",
      "x\n\r\ny",
      [
        ["q1", "first x"],
        ["q1", ""],
        ["q1", "yverse text"],
      ],
      "first x yverse text",
    ],
    [
      "a line break beside a space",
      "x \ny",
      [
        ["q1", "first x "],
        ["q1", "yverse text"],
      ],
      "first x yverse text",
    ],
  ])(
    "%s in typed text never joins two words nor makes a double space",
    async (_name, text, split, joined) => {
      expect(await savedAfterInserting(text)).toEqual(splitOrJoined(split, joined));
    },
  );

  it("leaves a line break the document already holds in its text alone, on load and on an edit elsewhere", async () => {
    const mounted = await mountInView(
      chapterOneHolding({ type: "para", marker: "p", content: ["a\nb"] }),
      editorView(view),
      { structureProtectionMode: mode },
    );
    try {
      const loaded: [string, string][] = [
        ["q1", VERSE_TEXT],
        ["p", "a\nb"],
      ];
      expect(savedParagraphs(mounted)).toEqual(loaded);

      await caretAt(mounted, VERSE_TEXT, "first ");
      await type(mounted, "z");

      expect(savedParagraphs(mounted)).toEqual([["q1", "first zverse text"], loaded[1]]);
    } finally {
      mounted.unmount();
    }
  });

  // The typed text lands in the very text node holding the stored separator, so the node is dirty
  // in the update that splits at the typed line break.
  it.each<[string, string]>([
    ["U+2028", "\u2028"],
    ["U+2029", "\u2029"],
  ])(
    "keeps a %s the document stores in the text that typed text holding a line break lands in",
    async (_name, separator) => {
      const stored = `a${separator}b`;
      const mounted = await mountInView(
        chapterOneHolding({ type: "para", marker: "p", content: [stored] }),
        editorView(view),
        { structureProtectionMode: mode },
      );
      try {
        await caretAt(mounted, stored, stored);
        await type(mounted, "x\ny");

        expect(lineBreaksIn(mounted)).toBe(0);
        expect(savedParagraphs(mounted)).toEqual([
          ["q1", VERSE_TEXT],
          ...(mode === "protected"
            ? [["p", `${stored}x y`]]
            : [
                ["p", `${stored}x`],
                ["p", "y"],
              ]),
        ]);
      } finally {
        mounted.unmount();
      }
    },
  );

  it("leaves the caret after the typed text", async () => {
    const mounted = await mountInView(DOCUMENT, editorView(view), {
      structureProtectionMode: mode,
    });
    try {
      await caretAt(mounted, VERSE_TEXT, "first ");
      await type(mounted, "x\ny");
      await type(mounted, "z");

      expect(savedParagraphs(mounted)).toEqual(
        splitOrJoined(
          [
            ["q1", "first x"],
            ["q1", "yzverse text"],
          ],
          "first x yzverse text",
        ),
      );
    } finally {
      mounted.unmount();
    }
  });

  it.each<[string, [string, string], [string, string][], string]>([
    [
      "mid-paragraph",
      [VERSE_TEXT, "first "],
      [
        ["q1", "first x"],
        ["q1", "zverse text"],
      ],
      "first x zverse text",
    ],
    [
      "at the end of the paragraph",
      [VERSE_TEXT, VERSE_TEXT],
      [
        ["q1", "first verse textx"],
        ["q1", "z"],
      ],
      "first verse textx z",
    ],
  ])(
    "%s, leaves the caret after typed text ending in a line break",
    async (_where, [needle, after], split, joined) => {
      const mounted = await mountInView(DOCUMENT, editorView(view), {
        structureProtectionMode: mode,
      });
      try {
        await caretAt(mounted, needle, after);
        await type(mounted, "x\n");
        await type(mounted, "z");

        expect(savedParagraphs(mounted)).toEqual(splitOrJoined(split, joined));
      } finally {
        mounted.unmount();
      }
    },
  );

  it("typed text holding a line break is undone and redone in one step", async () => {
    const mounted = await mountInView(DOCUMENT, editorView(view), {
      structureProtectionMode: mode,
    });
    try {
      const before = saved(mounted);
      await caretAt(mounted, VERSE_TEXT, "first ");
      await type(mounted, "x\ny");
      const after = saved(mounted);

      await undo(mounted);
      expect(saved(mounted)).toEqual(before);

      await redo(mounted);
      expect(saved(mounted)).toEqual(after);
    } finally {
      mounted.unmount();
    }
  });

  it("a line break typed in a line with no marker makes a \\p, as a pasted one does", async () => {
    const mounted = await mountInView(WITH_UNMARKED_LINE, editorView(view), {
      structureProtectionMode: mode,
    });
    try {
      await caretAt(mounted, "unmarked line", "unmarked ");
      await type(mounted, "x\ny");

      expect(savedParagraphs(mounted)).toEqual(
        mode === "protected"
          ? [
              ["q1", VERSE_TEXT],
              ["", "unmarked x yline"],
            ]
          : [
              ["q1", VERSE_TEXT],
              ["", "unmarked x"],
              ["p", "yline"],
            ],
      );
    } finally {
      mounted.unmount();
    }
  });

  // Standard view's own paste replays its lines with paragraph breaks, which the book line takes
  // nowhere: the pasted lines would run together.
  const ID_LINE_INSERTIONS: [string, (mounted: MountedEditor) => Promise<void>][] = [
    ["typed", (mounted) => type(mounted, "x\ny")],
    ...(view === "standard"
      ? [
          [
            "pasted as plain text",
            (mounted: MountedEditor) => paste(mounted, { "text/plain": "x\ny" }),
          ] as [string, (mounted: MountedEditor) => Promise<void>],
        ]
      : []),
  ];

  it.each(ID_LINE_INSERTIONS)(
    "a line break %s on the \\id line is a space: the book line holds no paragraph break",
    async (_how, insert) => {
      const book: MarkerObject = { ...BOOK, content: ["test book"] };
      const mounted = await mountInView(
        { ...DOCUMENT, content: [book, ...DOCUMENT.content.slice(1)] },
        editorView(view),
        { structureProtectionMode: mode },
      );
      try {
        await caretAt(mounted, "test book", "test ");
        await insert(mounted);

        expect(lineBreaksIn(mounted)).toBe(0);
        expect(saved(mounted)?.slice(0, 2)).toEqual([
          { ...book, content: ["test x ybook"] },
          { type: "chapter", marker: "c", number: "1" },
        ]);
      } finally {
        mounted.unmount();
      }
    },
  );
});

describe.each(HIDDEN_VIEW_MODES)("in $view view with structure $mode", ({ view, mode }) => {
  async function typedWithNotices(
    text: string,
    insert: (mounted: MountedEditor, text: string) => Promise<void> = type,
  ): Promise<{ paragraphs: [string, string][]; onRemoved: ReturnType<typeof vi.fn> }> {
    const onRemoved = vi.fn<UnstorableTextRemovedHandler>();
    const mounted = await mountInView(DOCUMENT, editorView(view), {
      structureProtectionMode: mode,
      onUnstorableTextRemoved: onRemoved,
    });
    try {
      await caretAt(mounted, VERSE_TEXT, "first ");
      await insert(mounted, text);
      expect(lineBreaksIn(mounted)).toBe(0);
      return { paragraphs: savedParagraphs(mounted), onRemoved };
    } finally {
      mounted.unmount();
    }
  }

  it.each(TEXT_INSERTIONS)(
    "%s holding a line break and a \\ and a // loses both, splits, and says so once",
    async (_name, insert) => {
      const { paragraphs, onRemoved } = await typedWithNotices("a\\b\nc//d", insert);

      expect(paragraphs).toEqual(
        mode === "protected"
          ? [["q1", "first ab cdverse text"]]
          : [
              ["q1", "first ab"],
              ["q1", "cdverse text"],
            ],
      );
      expect(onRemoved).toHaveBeenCalledTimes(1);
      expect(onRemoved.mock.calls[0][0].source).toBe("typing");
      expect([...onRemoved.mock.calls[0][0].removed].sort()).toEqual(["//", "\\"]);
    },
  );

  it("a / either side of a typed line break is kept: the break keeps them apart", async () => {
    const { paragraphs, onRemoved } = await typedWithNotices("x/\n/y");

    expect(paragraphs).toEqual(
      mode === "protected"
        ? [["q1", "first x/ /yverse text"]]
        : [
            ["q1", "first x/"],
            ["q1", "/yverse text"],
          ],
    );
    expect(onRemoved).not.toHaveBeenCalled();
  });
});

describe.each(VIEW_MODES)("in $view view with structure $mode", ({ view, mode }) => {
  /** Split as Enter splits, or joined where protected structure refuses the split. */
  const splitOrJoined = (split: [string, string][], joined: string): [string, string][] =>
    mode === "protected" ? [["q1", joined]] : split;

  const PLAIN_TEXT_ROUTES: [string, (mounted: MountedEditor, text: string) => Promise<void>][] = [
    ["pasted", (mounted, text) => paste(mounted, { "text/plain": text })],
    ["dropped", (mounted, text) => drop(mounted, { "text/plain": text })],
  ];

  describe.each(PLAIN_TEXT_ROUTES)("plain text %s", (_route, insert) => {
    it.each<[string, string, [string, string], [string, string][], string]>([
      [
        "ending in a line break",
        "x\n",
        [VERSE_TEXT, "first "],
        [
          ["q1", "first x"],
          ["q1", "verse text"],
        ],
        "first x verse text",
      ],
      [
        "starting with a line break",
        "\nx",
        [VERSE_TEXT, "first"],
        [
          ["q1", "first"],
          ["q1", "x verse text"],
        ],
        "first x verse text",
      ],
      [
        "ending in a Windows line break",
        "x\r\n",
        [VERSE_TEXT, "first "],
        [
          ["q1", "first x"],
          ["q1", "verse text"],
        ],
        "first x verse text",
      ],
      [
        "starting with a line break beside a space",
        "\nx",
        [VERSE_TEXT, "first "],
        [
          ["q1", "first "],
          ["q1", "xverse text"],
        ],
        "first xverse text",
      ],
      [
        "ending in a line break beside a space",
        "x\n",
        [VERSE_TEXT, "first"],
        [
          ["q1", "firstx"],
          // The split drops the new paragraph's leading space.
          ["q1", "verse text"],
        ],
        "firstx verse text",
      ],
      [
        "holding a line break beside a space",
        "x \ny",
        [VERSE_TEXT, "first "],
        [
          ["q1", "first x "],
          ["q1", "yverse text"],
        ],
        "first x yverse text",
      ],
    ])(
      "%s never joins two words nor makes a double space",
      async (_name, text, [needle, after], split, joined) => {
        const mounted = await mountInView(DOCUMENT, editorView(view), {
          structureProtectionMode: mode,
        });
        try {
          await caretAt(mounted, needle, after);
          await insert(mounted, text);

          expect(savedParagraphs(mounted)).toEqual(splitOrJoined(split, joined));
        } finally {
          mounted.unmount();
        }
      },
    );

    it.each(SEPARATORS)(
      "holding a %s keeps it in the text as a character, as in Paratext 9",
      async (_name, separator) => {
        const mounted = await mountInView(DOCUMENT, editorView(view), {
          structureProtectionMode: mode,
        });
        try {
          await caretAt(mounted, VERSE_TEXT, "first ");
          await insert(mounted, `x${separator}y`);

          expect(lineBreaksIn(mounted)).toBe(0);
          expect(savedParagraphs(mounted)).toEqual([["q1", `first x${separator}yverse text`]]);
        } finally {
          mounted.unmount();
        }
      },
    );

    it("holding a line break, on the \\id line, joins its lines with a space", async () => {
      const book: MarkerObject = { ...BOOK, content: ["test book"] };
      const mounted = await mountInView(
        { ...DOCUMENT, content: [book, ...DOCUMENT.content.slice(1)] },
        editorView(view),
        { structureProtectionMode: mode },
      );
      try {
        await caretAt(mounted, "test book", "test ");
        await insert(mounted, "x\ny");

        expect(saved(mounted)?.slice(0, 2)).toEqual([
          { ...book, content: ["test x ybook"] },
          { type: "chapter", marker: "c", number: "1" },
        ]);
      } finally {
        mounted.unmount();
      }
    });
  });
});

describe.each(enabledViews(["formatted"]))("in %s view", (view) => {
  // Splitting the paragraph under a live composition would lose the input method's place in it.
  it.each<[string, (mounted: MountedEditor) => Promise<void>]>([
    [
      "text inserted while an input method composes",
      async (mounted) => {
        await act(async () =>
          mounted.lexical.update(
            () => {
              const selection = $getSelection();
              if ($isRangeSelection(selection)) $setCompositionKey(selection.anchor.key);
            },
            { discrete: true },
          ),
        );
        await type(mounted, "x\ny");
      },
    ],
    [
      "an input method's commit (insertFromComposition)",
      async ({ lexical }) => {
        await act(async () => {
          lexical.dispatchCommand(
            CONTROLLED_TEXT_INSERTION_COMMAND,
            inputEvent("insertFromComposition", "x\ny"),
          );
        });
      },
    ],
  ])("%s is left alone", async (_name, insert) => {
    const mounted = await mountInView(DOCUMENT, editorView(view));
    try {
      await caretAt(mounted, VERSE_TEXT, "first ");
      await insert(mounted);

      expect(savedParagraphs(mounted)).toEqual([["q1", "first x\nyverse text"]]);
    } finally {
      mounted.unmount();
    }
  });

  it.each<[string, InputEventInit]>([
    ["of \\n alone, which Lexical runs as a line break", { data: "\n" }],
    ["of \\n\\n alone, which Lexical runs as a paragraph break", { data: "\n\n" }],
    ["while an input method composes", { data: "x\ny", isComposing: true }],
  ])("a beforeinput insertText %s is left to Lexical", async (_name, init) => {
    const mounted = await mountInView(DOCUMENT, editorView(view));
    try {
      await caretAt(mounted, VERSE_TEXT, "first ");
      const event = new InputEvent("beforeinput", {
        inputType: "insertText",
        bubbles: true,
        cancelable: true,
        ...init,
      });
      await act(async () => {
        mounted.lexical.getRootElement()?.dispatchEvent(event);
      });

      expect(event.defaultPrevented).toBe(false);
    } finally {
      mounted.unmount();
    }
  });
});

// A view without spacing lays out a line break before each verse and saves none, so it is left as
// it was: a line break in typed text stays in the text there.
describe.each(enabledViews(["unformatted"]))("in %s view", (view) => {
  it("typed text holding a line break goes in as typed", async () => {
    const mounted = await mountInView(DOCUMENT, editorView(view));
    try {
      await caretAt(mounted, VERSE_TEXT, "first ");
      await type(mounted, "x\ny");

      expect(savedParagraphs(mounted)).toEqual([["q1", "first x\nyverse text"]]);
    } finally {
      mounted.unmount();
    }
  });
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

describe("in the footnotes pane's row editor", () => {
  it.each(NEWLINES)(
    "%s inside typed text makes the footnote paragraph break a pasted one makes",
    async (_name, newline) => {
      const mounted = await mountInPaneRow(NOTE);
      try {
        await caretAt(mounted, VERSE_TEXT, "first ");
        await type(mounted, `x${newline}y`);

        expect(lineBreaksIn(mounted)).toBe(0);
        expect(savedNote(mounted)).toEqual([
          ["ft", "first x"],
          ["fp", "y"],
          ["ft", "verse text"],
        ]);
      } finally {
        mounted.unmount();
      }
    },
  );

  it.each(SEPARATORS)(
    "%s inside typed text stays in the text as a character, as in Paratext 9",
    async (_name, separator) => {
      const mounted = await mountInPaneRow(NOTE);
      try {
        await caretAt(mounted, VERSE_TEXT, "first ");
        await type(mounted, `x${separator}y`);

        expect(lineBreaksIn(mounted)).toBe(0);
        expect(savedNote(mounted)).toEqual([["ft", `first x${separator}yverse text`]]);
      } finally {
        mounted.unmount();
      }
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

  it.each(NEWLINES)(
    "%s inside typed text is a space: a note holds no paragraph break here",
    async (_name, newline) => {
      const mounted = await mountPopover();
      try {
        await type(mounted, `x${newline}y`);

        expect(lineBreaksIn(mounted)).toBe(0);
        expect(savedNote(mounted)).toEqual([["ft", "first x yverse text"]]);
      } finally {
        mounted.unmount();
      }
    },
  );

  it.each(SEPARATORS)(
    "%s inside typed text stays in the text as a character, as in Paratext 9",
    async (_name, separator) => {
      const mounted = await mountPopover();
      try {
        await type(mounted, `x${separator}y`);

        expect(lineBreaksIn(mounted)).toBe(0);
        expect(savedNote(mounted)).toEqual([["ft", `first x${separator}yverse text`]]);
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
