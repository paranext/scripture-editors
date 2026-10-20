/**
 * A verse or chapter marker whose number is still to be typed shows the separator the number goes
 * after, wherever the marker sits — including the end of a paragraph.
 *
 * A verse glyph renders `white-space: nowrap` (`.verse` and `.usfm_v` in usj-nodes.css, and the
 * host's vendored copy), and under `nowrap` a plain space at the end of a line is removed from
 * rendering: the browser draws no space and cannot show a caret after it. A glyph that spells its
 * empty number slot with a plain space (`\v `) therefore shows nothing at all after `\v` at the end
 * of a paragraph, however many times Space is pressed, and the number typed next lands visually
 * glued to the marker (`\v2`). The marker/number separator is a NO-BREAK space instead, exactly as
 * it is in a numbered glyph (`\v` + NBSP + `2` + space): an empty glyph is `\v` + NBSP, so the slot
 * is visible and the caret sits right after it. The separator is display only: the file gets
 * `\v 2`, never a stray byte.
 *
 * The trailing plain space after a NUMBER stays as it is — at a paragraph end it is invisible, and
 * End, a click, or an arrow key all put the caret right after the number, where typing extends it
 * and a Space then a word types the verse's text.
 */
import { mountStandardViewEditor, expectTier2FixedPoint } from "../settledGetUsj.test-helpers";
import { IDLE_SETTLE_DELAY_MS } from "./MarkerEditPlugin";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getNodeByKey,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  LexicalEditor,
  LexicalNode,
} from "lexical";
import { $isChapterNode, $isVerseNode, NBSP } from "shared";
import { afterEach, describe, expect, it, vi } from "vitest";

const BODY = "hello world ";

function usj(content: MarkerContent[]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
      { type: "chapter", marker: "c", number: "1" },
      { type: "para", marker: "p", content },
    ],
  };
}

const verseOne = { type: "verse", marker: "v", number: "1" } as const;
const verseTwo = { type: "verse", marker: "v", number: "2" } as const;
const bodyUsj = usj([verseOne, BODY]);

async function caretAtParaEnd(lexical: LexicalEditor): Promise<void> {
  await act(async () =>
    lexical.update(() => {
      const text = $getRoot()
        .getAllTextNodes()
        .find((node) => node.getTextContent() === BODY);
      if (!text) throw new Error("fixture text missing");
      text.select(BODY.length, BODY.length);
    }),
  );
}

/** Type `text` one keystroke at a time at the caret. */
async function type(lexical: LexicalEditor, text: string): Promise<void> {
  for (const character of text)
    await act(async () =>
      lexical.update(() => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
        selection.insertText(character);
      }),
    );
  await act(async () => Promise.resolve());
}

async function idle(): Promise<void> {
  await act(async () => {
    vi.advanceTimersByTime(IDLE_SETTLE_DELAY_MS + 50);
    await Promise.resolve();
  });
}

/** The last node of the document matching `is`, with its text, its DOM classes, and the caret
 * offset inside it (`undefined` when the caret is elsewhere). */
function glyph(
  lexical: LexicalEditor,
  is: (node: LexicalNode) => boolean,
): { text: string; classes: string[]; caret: number | undefined } {
  return lexical.getEditorState().read(() => {
    const node = $getRoot()
      .getAllTextNodes()
      .filter((text) => is(text) || is(text.getParent() ?? text))
      .at(-1);
    if (!node) throw new Error("glyph missing");
    const owner = is(node) ? node : $getNodeByKey(node.getParent()?.getKey() ?? "");
    const element = lexical.getElementByKey(owner?.getKey() ?? "");
    const selection = $getSelection();
    const caret =
      $isRangeSelection(selection) &&
      selection.isCollapsed() &&
      selection.anchor.key === node.getKey()
        ? selection.anchor.offset
        : undefined;
    return { text: node.getTextContent(), classes: [...(element?.classList ?? [])], caret };
  });
}

const verseGlyph = (lexical: LexicalEditor) => glyph(lexical, $isVerseNode);
const chapterGlyph = (lexical: LexicalEditor) => glyph(lexical, $isChapterNode);

/** Settle every pending edit the way a departure does, and return what the file then gets. */
async function settle(ref: Awaited<ReturnType<typeof mountStandardViewEditor>>["ref"]) {
  await act(async () => {
    ref.current?.commitPendingMarkerEdits();
    await Promise.resolve();
  });
  return ref.current?.getUsj();
}

describe("a verse marker whose number is still to be typed, at the end of a paragraph", () => {
  afterEach(() => vi.useRealTimers());

  type Mounted = Awaited<ReturnType<typeof mountStandardViewEditor>>;
  /** Each way a number-less verse marker arrives at the caret, and the glyph it leaves there. */
  const entryPaths: [string, (mounted: Mounted) => Promise<void>, string][] = [
    ["typed `\\v ` in one go", async ({ lexical }) => type(lexical, "\\v "), `\\v${NBSP}`],
    [
      "typed `\\v`, left to settle, then Space",
      async ({ lexical }) => {
        await type(lexical, "\\v");
        // The settle turns `\\v` into a verse whose separator lands after the caret, so the Space
        // typed next is a second, visible one in front of it.
        await idle();
        expect(verseGlyph(lexical)).toMatchObject({ text: `\\v${NBSP}`, caret: 2 });
        await type(lexical, " ");
      },
      `\\v ${NBSP}`,
    ],
    [
      "committed from the marker palette with Space",
      async ({ ref }) => {
        await act(async () => {
          expect(ref.current?.commitTypedMarker("v")).toBe(true);
        });
        await act(async () => Promise.resolve());
      },
      `\\v${NBSP}`,
    ],
  ];

  async function enterVerse(enter: (mounted: Mounted) => Promise<void>): Promise<Mounted> {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const mounted = await mountStandardViewEditor(bodyUsj);
    await caretAtParaEnd(mounted.lexical);
    await enter(mounted);
    return mounted;
  }

  it.each(entryPaths)(
    "%s: shows a no-break separator with the caret after it",
    async (_, enter, glyphText) => {
      const mounted = await enterVerse(enter);
      // The glyph ends in the visible no-break separator, and the caret rests right after the
      // separator run, the place the number is typed. The glyph is a verse element, which renders
      // `nowrap`.
      expect(verseGlyph(mounted.lexical)).toEqual({
        text: glyphText,
        classes: expect.arrayContaining(["verse"]),
        caret: 3,
      });

      await type(mounted.lexical, "2");
      expect(verseGlyph(mounted.lexical)).toMatchObject({
        text: `${glyphText.slice(0, 3)}2${glyphText.slice(3)}`,
        caret: 4,
      });
      const pending = mounted.ref.current?.getUsj();
      expect(pending?.content[2]).toEqual(usj([verseOne, BODY, verseTwo]).content[2]);
      const settled = await settle(mounted.ref);
      expect(settled).toEqual(pending);
      if (settled) expectTier2FixedPoint(settled);
      mounted.unmount();
    },
  );

  it.each(entryPaths)("%s: the number and then the verse text", async (_, enter) => {
    const mounted = await enterVerse(enter);
    await type(mounted.lexical, "2 text");
    const pending = mounted.ref.current?.getUsj();
    expect(pending?.content[2]).toEqual(usj([verseOne, BODY, verseTwo, "text"]).content[2]);
    const settled = await settle(mounted.ref);
    expect(settled).toEqual(pending);
    if (settled) expectTier2FixedPoint(settled);
    mounted.unmount();
  });

  it("keeps the separator visible when Space is pressed again", async () => {
    const mounted = await mountStandardViewEditor(bodyUsj);
    await caretAtParaEnd(mounted.lexical);
    await type(mounted.lexical, "\\v  ");
    expect(verseGlyph(mounted.lexical).text.startsWith(`\\v${NBSP}`)).toBe(true);

    await type(mounted.lexical, "2 text");
    const pending = mounted.ref.current?.getUsj();
    expect(pending?.content[2]).toEqual(usj([verseOne, BODY, verseTwo, "text"]).content[2]);
    expect(await settle(mounted.ref)).toEqual(pending);
    mounted.unmount();
  });

  it("loads a verse with no number with the same visible separator, and saves it unchanged", async () => {
    const loaded = usj([verseOne, BODY, { type: "verse", marker: "v", number: "" }]);
    const mounted = await mountStandardViewEditor(loaded);
    expect(verseGlyph(mounted.lexical).text).toBe(`\\v${NBSP}`);
    expect(mounted.ref.current?.getUsj()).toEqual(loaded);
    mounted.unmount();
  });

  it("keeps a numbered verse's plain trailing space after the number", async () => {
    const mounted = await mountStandardViewEditor(bodyUsj);
    expect(verseGlyph(mounted.lexical).text).toBe(`\\v${NBSP}1 `);
    mounted.unmount();
  });
});

describe("a chapter marker whose number is still to be typed, at the end of a paragraph", () => {
  it("shows a no-break separator with the caret after it, and takes the typed number", async () => {
    const mounted = await mountStandardViewEditor(bodyUsj);
    await caretAtParaEnd(mounted.lexical);
    await type(mounted.lexical, "\\c ");
    expect(chapterGlyph(mounted.lexical)).toMatchObject({ text: `\\c${NBSP}`, caret: 3 });

    await type(mounted.lexical, "2");
    expect(chapterGlyph(mounted.lexical)).toMatchObject({ text: `\\c${NBSP}2`, caret: 4 });
    const pending = mounted.ref.current?.getUsj();
    expect(pending?.content.slice(2)).toEqual([
      { type: "para", marker: "p", content: [verseOne, BODY] },
      { type: "chapter", marker: "c", number: "2" },
    ]);
    const settled = await settle(mounted.ref);
    expect(settled).toEqual(pending);
    if (settled) expectTier2FixedPoint(settled);
    mounted.unmount();
  });
});

describe("the verse text typed after a number at the end of a paragraph", () => {
  // End, a click, or an arrow key puts the caret right after the number, in front of the glyph's
  // trailing separator: the Space typed there joins that separator, and the word typed next is
  // the verse's text, typed in order.
  it("with the caret right after the number", async () => {
    const mounted = await mountStandardViewEditor(usj([verseOne, BODY, verseTwo]));
    await act(async () =>
      mounted.lexical.update(() => {
        const verse = $getRoot().getAllTextNodes().filter($isVerseNode).at(-1);
        if (!verse) throw new Error("verse missing");
        verse.select(4, 4);
      }),
    );
    await type(mounted.lexical, " text");
    const pending = mounted.ref.current?.getUsj();
    expect(pending?.content[2]).toEqual(usj([verseOne, BODY, verseTwo, "text"]).content[2]);
    const settled = await settle(mounted.ref);
    expect(settled).toEqual(pending);
    if (settled) expectTier2FixedPoint(settled);
    mounted.unmount();
  });
});
