/**
 * `ViewOptions.allowInvisibleCharacters`: a project that stores a no-break space as the literal
 * U+00A0 (Paratext's `AllowInvisibleChars` on). There `~` is an ordinary character, so Standard view
 * must neither read a `~` as a no-break space nor save a no-break space as anything else.
 */
import { EditorViewName, editorView, mountInView, MountedEditor } from "./editorViews.test-helpers";
import { press } from "./typingFidelityOracle.test-helpers";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $getSelection,
  $isRangeSelection,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  COPY_COMMAND,
  LexicalEditor,
  PASTE_COMMAND,
  TextNode,
} from "lexical";
import { NBSP } from "shared";
import { ViewOptions } from "shared-react";
import { describe, expect, it } from "vitest";

/** How Standard view shows a stored no-break space when `~` is an ordinary character. */
const NBSP_GLYPH = "⍽";

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

function withInvisibleCharacters(name: EditorViewName, allow = true): ViewOptions {
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
  await act(async () =>
    lexical.update(() => {
      const node = $textNodeContaining(text);
      const start = node.getTextContent().indexOf(text);
      node.select(start, start + text.length);
    }),
  );
  const store = new Map<string, string>();
  await act(async () =>
    lexical.update(() => {
      if (!$isRangeSelection($getSelection())) throw new Error("no range selection to copy");
      lexical.dispatchCommand(COPY_COMMAND, clipboardEvent(store));
    }),
  );
  return store.get("text/plain") ?? "";
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
    for (const view of [standardOn, withInvisibleCharacters("standard+expandedNotes")]) {
      const mounted = await mountInView(oneParaUsj(content), view);
      expect(firstParaContent(mounted)).toEqual(content);
      mounted.unmount();
    }
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

describe.each<EditorViewName>(["formatted", "paragraph-structure"])(
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

describe("Unformatted view with allowInvisibleCharacters", () => {
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

describe("Markers view with allowInvisibleCharacters", () => {
  it("copies a tilde as a tilde and a no-break space as a no-break space", async () => {
    const mounted = await mountInView(
      oneParaUsj([`a~b${NBSP}c d`]),
      withInvisibleCharacters("visible"),
    );

    expect(await copy(mounted.lexical, `a~b${NBSP}c`)).toBe(`a~b${NBSP}c`);
  });
});
