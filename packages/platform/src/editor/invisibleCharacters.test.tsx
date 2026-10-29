/**
 * `ViewOptions.allowInvisibleCharacters`: a project that stores a no-break space as the literal
 * U+00A0 (Paratext's `AllowInvisibleChars` on). There `~` is an ordinary character, so Standard view
 * must neither read a `~` as a no-break space nor save a no-break space as anything else.
 */
import {
  describeInView,
  EditorViewName,
  editorView,
  enabledViews,
  mountInView,
  MountedEditor,
  paneRowScaffold,
  ReadOnlyViewName,
} from "./editorViews.test-helpers";
import { press } from "./typingFidelityOracle.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  COPY_COMMAND,
  LexicalEditor,
  PASTE_COMMAND,
  TextNode,
} from "lexical";
import { NBSP, NBSP_STAND_IN } from "shared";
import { hasStandardViewWhitespace, ViewOptions } from "shared-react";
import { describe, expect, it } from "vitest";

/** How Standard view shows a stored no-break space when `~` is an ordinary character. */
const NBSP_GLYPH = NBSP_STAND_IN;

/** `\id`, `\c 1`, one paragraph holding `content`, then a paragraph to move the caret to. */
function oneParaUsj(content: MarkerContent[]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
      { type: "chapter", marker: "c", number: "1" },
      { type: "para", marker: "p", content },
      { type: "para", marker: "p", content: ["depart here"] },
    ],
  };
}

function withInvisibleCharacters(
  name: EditorViewName | ReadOnlyViewName,
  allow = true,
): ViewOptions {
  return { ...editorView(name), allowInvisibleCharacters: allow };
}

const standardOn = withInvisibleCharacters("standard");

function firstParaContent(mounted: MountedEditor): MarkerContent[] | undefined {
  const para = mounted.ref.current?.getUsj()?.content[2];
  return typeof para === "object" ? para.content : undefined;
}

/** Every text the editor shows, in document order. */
function shownText(lexical: LexicalEditor): string {
  return lexical.getEditorState().read(() => $getRoot().getTextContent());
}

function $textNodeContaining(text: string): TextNode {
  const node = $getRoot()
    .getAllTextNodes()
    .find((candidate) => candidate.getTextContent().includes(text));
  if (!node) throw new Error(`no text node holding ${JSON.stringify(text)}`);
  return node;
}

async function placeCaret(lexical: LexicalEditor, text: string, offsetInText: number) {
  await act(async () =>
    lexical.update(() => {
      const node = $textNodeContaining(text);
      const offset = node.getTextContent().indexOf(text) + offsetInText;
      node.select(offset, offset);
    }),
  );
}

async function typeText(lexical: LexicalEditor, text: string) {
  for (const character of text)
    await act(async () => {
      lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, character);
    });
}

async function settle(): Promise<void> {
  await act(async () => {
    for (let i = 0; i < 3; i += 1) await new Promise((resolve) => setTimeout(resolve, 0));
  });
}

function clipboardEvent(store: Map<string, string>): ClipboardEvent {
  const event = new ClipboardEvent("paste", { bubbles: true, cancelable: true });
  Object.defineProperty(event, "clipboardData", {
    value: {
      get types() {
        return [...store.keys()];
      },
      files: [],
      getData: (type: string) => store.get(type) ?? "",
      setData: (type: string, data: string) => store.set(type, data),
    },
  });
  return event;
}

async function paste(lexical: LexicalEditor, text: string): Promise<void> {
  await act(async () =>
    lexical.update(() => {
      lexical.dispatchCommand(PASTE_COMMAND, clipboardEvent(new Map([["text/plain", text]])));
    }),
  );
  await settle();
}

/** Selects `text` (which must sit in one text node) and copies it; returns `text/plain`. */
async function copy(lexical: LexicalEditor, text: string): Promise<string> {
  return (await copyStore(lexical, text)).get("text/plain") ?? "";
}

/** Selects `text` (which must sit in one text node) and copies it; returns every flavor. */
async function copyStore(lexical: LexicalEditor, text: string): Promise<Map<string, string>> {
  let selected: { key: string; start: number } | undefined;
  await act(async () =>
    lexical.update(() => {
      const node = $textNodeContaining(text);
      const start = node.getTextContent().indexOf(text);
      node.select(start, start + text.length);
      selected = { key: node.getKey(), start };
    }),
  );
  // A read-only editor leaves the page's selection where it was; a user's copy is of what they
  // selected on the page.
  const domText = selected ? lexical.getElementByKey(selected.key)?.firstChild : undefined;
  if (selected && domText)
    document
      .getSelection()
      ?.setBaseAndExtent(domText, selected.start, domText, selected.start + text.length);
  const store = new Map<string, string>();
  await act(async () =>
    lexical.update(() => {
      if (!$isRangeSelection($getSelection())) throw new Error("no range selection to copy");
      lexical.dispatchCommand(COPY_COMMAND, clipboardEvent(store));
    }),
  );
  return store;
}

describe("Standard view with allowInvisibleCharacters", () => {
  it.each<[string, string, string]>([
    ["a tilde", "a~b c", "a~b c"],
    ["a no-break space", `a${NBSP}b c`, `a${NBSP_GLYPH}b c`],
    ["both", `a~b${NBSP}c d`, `a~b${NBSP_GLYPH}c d`],
  ])("loads and saves %s unchanged, and shows each distinctly", async (_, text, shown) => {
    const mounted = await mountInView(oneParaUsj([text]), standardOn);

    expect(shownText(mounted.lexical)).toContain(shown);
    expect(firstParaContent(mounted)).toEqual([text]);
  });

  it("keeps a tilde and a no-break space when the paragraph is edited", async () => {
    const mounted = await mountInView(oneParaUsj([`a~b${NBSP}c d`]), standardOn);
    await placeCaret(mounted.lexical, " d", 2);

    await typeText(mounted.lexical, "x");

    expect(firstParaContent(mounted)).toEqual([`a~b${NBSP}c dx`]);
  });

  it("keeps a tilde inside a character span and a note", async () => {
    const content: MarkerContent[] = [
      "x ",
      { type: "char", marker: "nd", content: ["a~b"] },
      " y",
      {
        type: "note",
        marker: "f",
        caller: "+",
        content: [{ type: "char", marker: "ft", content: [`c~d${NBSP}e`] }],
      },
    ];
    for (const view of enabledViews(["standard", "standard+expandedNotes"] as const)) {
      const mounted = await mountInView(oneParaUsj(content), withInvisibleCharacters(view));
      expect(firstParaContent(mounted)).toEqual(content);
      mounted.unmount();
    }
    // The footnotes pane's row editor, where the app shows the note's text, holds it alone.
    const note = content[3];
    const paneRow = await mountInView(
      paneRowScaffold(note as MarkerObject),
      withInvisibleCharacters("footnotes-pane-row"),
    );
    expect(paneRow.ref.current?.getUsj()?.content).toEqual([
      { type: "para", marker: "p", content: [note] },
    ]);
    paneRow.unmount();
  });

  it("saves a typed tilde as a tilde", async () => {
    const mounted = await mountInView(oneParaUsj(["ab"]), standardOn);
    await placeCaret(mounted.lexical, "ab", 1);

    expect(await press(mounted, "~", "~")).toEqual([]);

    expect(firstParaContent(mounted)).toEqual(["a~b"]);
  });

  it("saves a typed no-break space as a no-break space and shows it", async () => {
    const mounted = await mountInView(oneParaUsj(["ab"]), standardOn);
    await placeCaret(mounted.lexical, "ab", 1);

    expect(await press(mounted, NBSP, NBSP)).toEqual([]);

    expect(shownText(mounted.lexical)).toContain(`a${NBSP_GLYPH}b`);
    expect(firstParaContent(mounted)).toEqual([`a${NBSP}b`]);
  });

  it("saves a no-break space the editor inserts as text", async () => {
    const mounted = await mountInView(oneParaUsj(["ab"]), standardOn);
    await placeCaret(mounted.lexical, "ab", 1);

    await typeText(mounted.lexical, `${NBSP}x`);

    expect(shownText(mounted.lexical)).toContain(`a${NBSP_GLYPH}xb`);
    expect(firstParaContent(mounted)).toEqual([`a${NBSP}xb`]);
  });

  it("saves a no-break space the browser inserts into a text node itself", async () => {
    const mounted = await mountInView(oneParaUsj(["ab"]), standardOn);
    await placeCaret(mounted.lexical, "ab", 1);
    const domText = mounted.lexical.getElementByKey(
      mounted.lexical.getEditorState().read(() => $textNodeContaining("ab").getKey()),
    )?.firstChild;
    if (!domText) throw new Error("no DOM text for the paragraph");

    await act(async () => {
      domText.dispatchEvent(
        new InputEvent("beforeinput", {
          inputType: "insertText",
          data: NBSP,
          bubbles: true,
          cancelable: true,
        }),
      );
    });

    expect(firstParaContent(mounted)).toEqual([`a${NBSP}b`]);
  });

  it.each<[string, string, string]>([
    ["a tilde", "x~y", "x~y"],
    ["a no-break space", `x${NBSP}y`, `x${NBSP}y`],
  ])("keeps a pasted %s", async (_, pasted, saved) => {
    const mounted = await mountInView(oneParaUsj(["ab"]), standardOn);
    await placeCaret(mounted.lexical, "ab", 1);

    await paste(mounted.lexical, pasted);

    expect(firstParaContent(mounted)).toEqual([`a${saved}b`]);
  });

  it("copies a tilde as a tilde and a no-break space as a no-break space", async () => {
    const mounted = await mountInView(oneParaUsj([`a~b${NBSP}c d`]), standardOn);

    expect(await copy(mounted.lexical, `a~b${NBSP_GLYPH}c`)).toBe(`a~b${NBSP}c`);
  });

  it("keeps a tilde and a no-break space when a typed marker rebuilds the paragraph", async () => {
    const mounted = await mountInView(oneParaUsj([`a~b${NBSP}c v 2 d`]), standardOn);
    await placeCaret(mounted.lexical, "v 2 d", 0);

    await typeText(mounted.lexical, "\\");
    await placeCaret(mounted.lexical, "depart here", 2);
    act(() => mounted.ref.current?.commitPendingMarkerEdits());

    expect(firstParaContent(mounted)).toEqual([
      `a~b${NBSP}c `,
      { type: "verse", marker: "v", number: "2" },
      "d",
    ]);
  });

  it("keeps a tilde and a no-break space in the read of a marker edit not yet settled", async () => {
    const mounted = await mountInView(oneParaUsj([`a~b${NBSP}c v 2 d`]), standardOn);
    await placeCaret(mounted.lexical, "v 2 d", 0);

    await typeText(mounted.lexical, "\\");

    expect(firstParaContent(mounted)).toEqual([
      `a~b${NBSP}c `,
      { type: "verse", marker: "v", number: "2" },
      "d",
    ]);
  });
});

describe("Standard view without allowInvisibleCharacters", () => {
  it.each<[string, ViewOptions]>([
    ["unset", editorView("standard")],
    ["false", withInvisibleCharacters("standard", false)],
  ])("reads `~` as a no-break space (%s)", async (_, view) => {
    const mounted = await mountInView(oneParaUsj([`a${NBSP}b`]), view);

    expect(shownText(mounted.lexical)).toContain("a~b");
    expect(firstParaContent(mounted)).toEqual([`a${NBSP}b`]);
  });
});

describe.each(enabledViews<EditorViewName>(["formatted", "paragraph-structure"]))(
  "%s view with allowInvisibleCharacters",
  (name) => {
    it("keeps a tilde and a no-break space when the paragraph is edited", async () => {
      const mounted = await mountInView(
        oneParaUsj([`a~b${NBSP}c d`]),
        withInvisibleCharacters(name),
      );
      await placeCaret(mounted.lexical, " d", 2);

      await typeText(mounted.lexical, "x");

      expect(firstParaContent(mounted)).toEqual([`a~b${NBSP}c dx`]);
    });
  },
);

describeInView("unformatted")("Unformatted view with allowInvisibleCharacters", () => {
  it("keeps a tilde and a no-break space when a typed marker rebuilds the paragraph", async () => {
    const mounted = await mountInView(
      oneParaUsj([`a~b${NBSP}c v 2 d`]),
      withInvisibleCharacters("unformatted"),
    );
    await placeCaret(mounted.lexical, "v 2 d", 0);

    await typeText(mounted.lexical, "\\");
    await placeCaret(mounted.lexical, "depart here", 2);
    act(() => mounted.ref.current?.commitPendingMarkerEdits());

    expect(firstParaContent(mounted)).toEqual([
      `a~b${NBSP}c `,
      { type: "verse", marker: "v", number: "2" },
      "d",
    ]);
  });
});

describeInView("visible")("Markers view with allowInvisibleCharacters", () => {
  it("copies a tilde as a tilde and a no-break space as a no-break space", async () => {
    const mounted = await mountInView(
      oneParaUsj([`a~b${NBSP}c d`]),
      withInvisibleCharacters("visible"),
    );

    expect(await copy(mounted.lexical, `a~b${NBSP}c`)).toBe(`a~b${NBSP}c`);
  });
});

// Paratext 9 parity for typed, pasted and copied invisible characters, in every view a user enters
// text in.

/** The views text is typed and pasted in: the app's editable ones and the library's. */
const ENTRY_VIEWS = enabledViews<EditorViewName>([
  "standard",
  "footnotes-pane-row",
  "formatted",
  "paragraph-structure",
  "unformatted",
]);

const ZWNBSP = "﻿";

/** A footnote whose `\ft` text is `text`. */
function noteHolding(text: string): MarkerObject {
  return {
    type: "note",
    marker: "f",
    caller: "+",
    content: [{ type: "char", marker: "ft", content: [text] }],
  };
}

/** `text` mounted where `name` edits it: a paragraph, or the `\ft` of the pane row's note. */
async function mountText(
  name: EditorViewName,
  text: string,
  allow: boolean,
): Promise<{ mounted: MountedEditor; saved: () => unknown }> {
  const view = withInvisibleCharacters(name, allow);
  if (name === "footnotes-pane-row") {
    const mounted = await mountInView(paneRowScaffold(noteHolding(text)), view);
    const saved = () => {
      const para = mounted.ref.current?.getUsj()?.content[0];
      const note = typeof para === "object" ? para.content?.[0] : undefined;
      const ft = typeof note === "object" ? note.content?.[0] : undefined;
      return typeof ft === "object" ? ft.content : ft;
    };
    return { mounted, saved };
  }
  const mounted = await mountInView(oneParaUsj([text]), view);
  return { mounted, saved: () => firstParaContent(mounted) };
}

async function pasteFlavors(lexical: LexicalEditor, flavors: [string, string][]): Promise<void> {
  await act(async () =>
    lexical.update(() => {
      lexical.dispatchCommand(PASTE_COMMAND, clipboardEvent(new Map(flavors)));
    }),
  );
  await settle();
}

async function dropText(lexical: LexicalEditor, text: string): Promise<void> {
  const dataTransfer = { types: ["text/plain"], files: [], getData: () => text };
  const event = new InputEvent("beforeinput", { inputType: "insertFromDrop", cancelable: true });
  Object.defineProperty(event, "dataTransfer", { value: dataTransfer });
  await act(async () => {
    lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, event);
  });
  await settle();
}

describe.each(ENTRY_VIEWS)("%s view: invisible characters entered as in Paratext 9", (name) => {
  it("saves a no-break space typed with allowInvisibleCharacters off as a space", async () => {
    const pressed = await mountText(name, "ab", false);
    await placeCaret(pressed.mounted.lexical, "ab", 1);
    expect(await press(pressed.mounted, NBSP, NBSP)).toEqual([]);
    expect(pressed.saved()).toEqual(["a b"]);

    const inserted = await mountText(name, "ab", false);
    await placeCaret(inserted.mounted.lexical, "ab", 1);
    await typeText(inserted.mounted.lexical, NBSP);
    expect(inserted.saved()).toEqual(["a b"]);
  });

  it("saves a no-break space typed with allowInvisibleCharacters on as one", async () => {
    const { mounted, saved } = await mountText(name, "ab", true);
    await placeCaret(mounted.lexical, "ab", 1);

    expect(await press(mounted, NBSP, NBSP)).toEqual([]);

    expect(saved()).toEqual([`a${NBSP}b`]);
  });

  it.each([false, true])(
    "keeps a pasted no-break space as one (allowInvisibleCharacters %s)",
    async (allow) => {
      const { mounted, saved } = await mountText(name, "ab", allow);
      await placeCaret(mounted.lexical, "ab", 1);

      await paste(mounted.lexical, `x${NBSP}y`);

      expect(saved()).toEqual([`ax${NBSP}yb`]);
    },
  );

  it.each([false, true])(
    "drops a typed zero-width no-break space (allowInvisibleCharacters %s)",
    async (allow) => {
      const pressed = await mountText(name, "ab", allow);
      await placeCaret(pressed.mounted.lexical, "ab", 1);
      expect(await press(pressed.mounted, ZWNBSP, ZWNBSP)).toEqual([]);
      expect(pressed.saved()).toEqual(["ab"]);

      const inserted = await mountText(name, "ab", allow);
      await placeCaret(inserted.mounted.lexical, "ab", 1);
      await typeText(inserted.mounted.lexical, `x${ZWNBSP}`);
      expect(inserted.saved()).toEqual(["axb"]);
    },
  );

  it.each([false, true])(
    "drops a zero-width no-break space pasted or dropped (allowInvisibleCharacters %s)",
    async (allow) => {
      const plain = await mountText(name, "ab", allow);
      await placeCaret(plain.mounted.lexical, "ab", 1);
      await paste(plain.mounted.lexical, `x${ZWNBSP}y`);
      expect(plain.saved()).toEqual(["axyb"]);

      const html = await mountText(name, "ab", allow);
      await placeCaret(html.mounted.lexical, "ab", 1);
      await pasteFlavors(html.mounted.lexical, [["text/html", `<span>x${ZWNBSP}y</span>`]]);
      expect(html.saved()).toEqual(["axyb"]);

      const dropped = await mountText(name, "ab", allow);
      await placeCaret(dropped.mounted.lexical, "ab", 1);
      await dropText(dropped.mounted.lexical, `x${ZWNBSP}y`);
      expect(dropped.saved()).toEqual(["axyb"]);
    },
  );

  it.each([false, true])(
    "keeps a zero-width no-break space the text holds when it is edited (allowInvisibleCharacters %s)",
    async (allow) => {
      const { mounted, saved } = await mountText(name, `a${ZWNBSP}b cd`, allow);
      expect(saved()).toEqual([`a${ZWNBSP}b cd`]);
      await placeCaret(mounted.lexical, "cd", 1);

      await typeText(mounted.lexical, "x");

      expect(saved()).toEqual([`a${ZWNBSP}b cxd`]);
    },
  );
});

/**
 * The views a copy is taken from: every entry view, and Power mode's read-only Preview, less the
 * Unformatted view, which only the library offers and whose copy writes the text as it shows it.
 */
const COPY_VIEWS = [
  ...ENTRY_VIEWS.filter((name) => name !== "unformatted"),
  ...enabledViews(["preview"] as const),
];

describe.each(COPY_VIEWS)("%s view: a no-break space copied as in Paratext 9", (name) => {
  it.each<[boolean, string]>([
    [false, "a~b"],
    [true, `a${NBSP}b`],
  ])("allowInvisibleCharacters %s copies it as %j", async (allow, copied) => {
    const view = withInvisibleCharacters(name, allow);
    const text = `a${NBSP}b c`;
    const mounted =
      name === "footnotes-pane-row"
        ? await mountInView(paneRowScaffold(noteHolding(text)), view)
        : await mountInView(oneParaUsj([text]), view, { isReadonly: name === "preview" });
    const shownNbsp = hasStandardViewWhitespace(view) ? (allow ? NBSP_GLYPH : "~") : NBSP;

    const store = await copyStore(mounted.lexical, `a${shownNbsp}b`);

    expect(store.get("text/plain")).toBe(copied);
    expect(store.get("text/html") ?? "").not.toContain(NBSP_STAND_IN);
  });
});

/** The views that hide markers, whose copy writes the text as they show it. */
const HIDDEN_MARKER_COPY_VIEWS = enabledViews([
  "formatted",
  "paragraph-structure",
  "preview",
] as const);

describe.each(HIDDEN_MARKER_COPY_VIEWS)("%s view: a copy of a whole paragraph", (name) => {
  it("writes only a stored no-break space as `~` in its plain text", async () => {
    const content: MarkerContent[] = [
      `a${NBSP}b `,
      { type: "char", marker: "nd", content: [] },
      " y",
      noteHolding("note"),
      " z",
    ];
    const copyParagraph = async (allow: boolean) => {
      const mounted = await mountInView(oneParaUsj(content), withInvisibleCharacters(name, allow), {
        isReadonly: name === "preview",
      });
      let paraKey = "";
      await act(async () =>
        mounted.lexical.update(() => {
          const para = $getRoot().getChildren()[2];
          if (!$isElementNode(para)) throw new Error("no paragraph to copy");
          para.select(0, para.getChildrenSize());
          paraKey = para.getKey();
        }),
      );
      // A read-only editor leaves the page's selection where it was; a user's copy is of what
      // they selected on the page.
      const paraElement = mounted.lexical.getElementByKey(paraKey);
      if (!paraElement) throw new Error("the paragraph is not rendered");
      document.getSelection()?.selectAllChildren(paraElement);
      const store = new Map<string, string>();
      await act(async () =>
        mounted.lexical.update(() => {
          mounted.lexical.dispatchCommand(COPY_COMMAND, clipboardEvent(store));
        }),
      );
      mounted.unmount();
      return store;
    };
    // With the setting on nothing is respelled, so that copy shows where the layout spacing is.
    const asShown = await copyParagraph(true);
    const plainShown = asShown.get("text/plain") ?? "";
    expect(plainShown.split(NBSP).length).toBeGreaterThan(2);

    const copied = await copyParagraph(false);

    expect(copied.get("text/plain")).toBe(plainShown.replace(`a${NBSP}b`, "a~b"));
    // The html is what the view's own paste reads, where a `~` would come back a literal tilde.
    expect(copied.get("text/html")).toBe(asShown.get("text/html"));
  });
});
