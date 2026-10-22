/**
 * What a user's gestures save around a content string that is exactly one no-break space (USFM
 * `~`), in every view, through the real `Editor` and its `getUsj` — what a host saves. The two
 * rules under test: an author's `~` is never dropped, and the engine's own lone-NBSP placeholder
 * (an empty char span's caret host) never reaches the saved document.
 */
import { EDITOR_VIEWS, mountInView, MountedEditor } from "../editorViews.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  LexicalNode,
  TextNode,
} from "lexical";
import { $isCharNode, CharNode, NBSP } from "shared";

const scrRef = { book: "GEN", chapterNum: 1, verseNum: 1 };

function usjOf(...content: MarkerContent[]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [{ type: "para", marker: "p", content } as MarkerObject],
  };
}

const nd = (...content: MarkerContent[]): MarkerObject =>
  content.length > 0 ? { type: "char", marker: "nd", content } : { type: "char", marker: "nd" };
const w = (...content: MarkerContent[]): MarkerObject => ({ type: "char", marker: "w", content });
const footnote = (...content: MarkerContent[]): MarkerObject => ({
  type: "note",
  marker: "f",
  caller: "+",
  content,
});
const ft = (...content: MarkerContent[]): MarkerObject =>
  content.length > 0 ? { type: "char", marker: "ft", content } : { type: "char", marker: "ft" };

/** How many NBSPs `usj` holds anywhere in its content. */
function nbspCount(usj: Usj | undefined): number {
  return JSON.stringify(usj).split(NBSP).length - 1;
}

/** The first paragraph's content in `usj`. */
function paraContent(usj: Usj | undefined): MarkerContent[] | undefined {
  return (usj?.content[0] as MarkerObject | undefined)?.content;
}

async function mount(usj: Usj, name: string): Promise<MountedEditor> {
  const view = EDITOR_VIEWS.find((entry) => entry.name === name)?.view;
  if (!view) throw new Error(`unknown view ${name}`);
  return mountInView(usj, view, { scrRef });
}

async function update(editor: MountedEditor, $fn: () => void): Promise<void> {
  await act(async () => {
    editor.lexical.update($fn, { discrete: true });
  });
}

/** Dirties every node, so every transform runs over the whole document. */
function $markAllDirty(node: LexicalNode): void {
  node.markDirty();
  if ($isElementNode(node)) node.getChildren().forEach($markAllDirty);
}

/** The plain content texts (not glyphs or other text subclasses) of the char spans `marker`. */
function $spanTexts(marker: string): TextNode[] {
  return $getRoot()
    .getAllTextNodes()
    .filter((node) => {
      const parent = node.getParent();
      return (
        node.getType() === "text" &&
        $isCharNode(parent) &&
        (parent satisfies CharNode).getMarker() === marker
      );
    });
}

/** Puts the caret at the end of the last content text of the `marker` span. */
function $caretAtEndOfSpan(marker: string): void {
  const text = $spanTexts(marker).at(-1);
  if (!text) throw new Error(`no ${marker} text`);
  text.select(text.getTextContentSize(), text.getTextContentSize());
}

function $insertText(text: string): void {
  const selection = $getSelection();
  if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
  selection.insertText(text);
}

const VIEW_NAMES = EDITOR_VIEWS.map((entry) => entry.name);

describe("lone-NBSP gestures", () => {
  describe("applying a span's style right after a span of the same style", () => {
    // Where spans merge (the views without editable glyphs), the new span's placeholder must not
    // land in the merged span's content, wherever that content ends.
    const SHAPES = [
      { name: "a span ending in a nested span", usj: usjOf("a ", nd("x ", w("y")), " b") },
      { name: "a span ending in text", usj: usjOf("a ", nd("x"), " b") },
      { name: "a span whose whole content is `~`", usj: usjOf("a ", nd(NBSP), " b") },
    ];

    it.each(VIEW_NAMES.flatMap((view) => SHAPES.map((shape) => ({ ...shape, view }))))(
      "saves no placeholder after $name, before or after typing ($view)",
      async ({ usj, view }) => {
        const editor = await mount(usj, view);
        const authored = nbspCount(usj);
        await update(editor, () => {
          const after = $getRoot()
            .getAllTextNodes()
            .find((node) => node.getTextContent() === " b");
          if (!after) throw new Error("no ` b` text");
          after.select(0, 0);
        });
        await act(async () => {
          editor.ref.current?.insertMarker("nd");
        });
        expect(nbspCount(editor.ref.current?.getUsj())).toBe(authored);

        await update(editor, () => $insertText("z"));
        const saved = editor.ref.current?.getUsj();
        expect(nbspCount(saved)).toBe(authored);
        expect(JSON.stringify(saved)).toContain("z");
      },
    );
  });

  describe("adjacent spans of the same style, one of them empty", () => {
    const SHAPES = [
      { name: "a nested-span-ending span, then an empty one", usj: usjOf(nd("x ", w("y")), nd()) },
      { name: "a text span, then an empty one", usj: usjOf(nd("x"), nd()) },
      { name: "a `~` span, then an empty one", usj: usjOf(nd(NBSP), nd()) },
      { name: "an empty span, then a `~` one", usj: usjOf(nd(), nd(NBSP)) },
    ];

    it.each(VIEW_NAMES.flatMap((view) => SHAPES.map((shape) => ({ ...shape, view }))))(
      "keeps every `~` and adds none when $name is edited ($view)",
      async ({ usj, view }) => {
        const editor = await mount(usj, view);
        await update(editor, () => $markAllDirty($getRoot()));
        expect(nbspCount(editor.ref.current?.getUsj())).toBe(nbspCount(usj));
      },
    );
  });

  it.each(VIEW_NAMES)("keeps a `~` span's content when its style is removed (%s)", async (view) => {
    const editor = await mount(usjOf("a ", nd(NBSP), " b"), view);
    await update(editor, () => $caretAtEndOfSpan("nd"));
    await act(async () => {
      editor.ref.current?.removeCharacterMarker("nd");
    });
    const content = paraContent(editor.ref.current?.getUsj()) ?? [];
    expect(content.every((item) => typeof item === "string")).toBe(true);
    expect(content.join("")).toBe(`a ${NBSP} b`);
  });

  it.each(VIEW_NAMES)(
    "removes an empty span outright when its style is removed (%s)",
    async (view) => {
      const editor = await mount(usjOf("a ", nd(), " b"), view);
      await update(editor, () => $caretAtEndOfSpan("nd"));
      await act(async () => {
        editor.ref.current?.removeCharacterMarker("nd");
      });
      const saved = editor.ref.current?.getUsj();
      expect(paraContent(saved)?.every((item) => typeof item === "string")).toBe(true);
      expect(nbspCount(saved)).toBe(0);
    },
  );

  it.each(VIEW_NAMES)("keeps the `~` when text is typed after it in a span (%s)", async (view) => {
    const editor = await mount(usjOf("a ", nd(NBSP), " b"), view);
    await update(editor, () => $caretAtEndOfSpan("nd"));
    await update(editor, () => $insertText("xy"));
    expect(paraContent(editor.ref.current?.getUsj())).toEqual(["a ", nd(`${NBSP}xy`), " b"]);
  });

  describe("a footnote's text span", () => {
    it.each(VIEW_NAMES)("keeps a `~` the user types after (%s)", async (view) => {
      const editor = await mount(usjOf("a", footnote(ft(NBSP))), view);
      await update(editor, () => $caretAtEndOfSpan("ft"));
      await update(editor, () => $insertText("y"));
      expect(paraContent(editor.ref.current?.getUsj())).toEqual(["a", footnote(ft(`${NBSP}y`))]);
    });

    it.each(
      VIEW_NAMES.flatMap((view) => [
        { name: "a leading `~`", content: `${NBSP}x`, view },
        { name: "a lone `~`", content: NBSP, view },
      ]),
    )("keeps $name through an edit ($view)", async ({ content, view }) => {
      const usj = usjOf("a", footnote(ft(content)));
      const editor = await mount(usj, view);
      await update(editor, () => $markAllDirty($getRoot()));
      expect(editor.ref.current?.getUsj()).toEqual(usj);
    });

    it.each(VIEW_NAMES)(
      "drops an empty span's placeholder once text is typed (%s)",
      async (view) => {
        const editor = await mount(usjOf("a", footnote(ft())), view);
        await update(editor, () => $caretAtEndOfSpan("ft"));
        await update(editor, () => $insertText("y"));
        expect(paraContent(editor.ref.current?.getUsj())).toEqual(["a", footnote(ft("y"))]);
      },
    );
  });

  describe("closing a `~` span after its `~` with a style that cannot nest in it", () => {
    const SHAPES = [
      { name: "a paragraph's span", usj: usjOf("a ", nd(NBSP), " b"), host: "nd", marker: "iqt" },
      { name: "a footnote's span", usj: usjOf("a", footnote(ft(NBSP))), host: "ft", marker: "fk" },
    ];

    it.each(VIEW_NAMES.flatMap((view) => SHAPES.map((shape) => ({ ...shape, view }))))(
      "keeps the `~` of $name ($view)",
      async ({ usj, host, marker, view }) => {
        const editor = await mount(usj, view);
        await update(editor, () => $caretAtEndOfSpan(host));
        await act(async () => {
          editor.ref.current?.insertMarker(marker);
        });
        expect(nbspCount(editor.ref.current?.getUsj())).toBe(1);
      },
    );
  });
});
