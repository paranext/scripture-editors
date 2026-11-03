/**
 * A Standard-view copy of a range whose ends are element points — on the root between two
 * paragraphs, or inside a paragraph between two of its children — writes the same USFM as the
 * same range with its ends in the text, and a cut of it pastes back as it was. Lexical's
 * `$getCharacterOffsets` answers 0 for an element point short of its element's end, which the copy
 * walker read as "none of this text", while the cut, which is Lexical's `removeText`, removed it.
 */
import { editorView, MountedEditor, mountInView } from "../editorViews.test-helpers";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $isElementNode,
  $isTextNode,
  $setSelection,
  COPY_COMMAND,
  CUT_COMMAND,
  ElementNode,
  PASTE_COMMAND,
  PointType,
} from "lexical";
import { describe, expect, it } from "vitest";

const usj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["Test"] },
    { type: "chapter", marker: "c", number: "1" },
    { type: "para", marker: "p", content: [{ type: "verse", marker: "v", number: "1" }, "one"] },
    {
      type: "para",
      marker: "q1",
      content: [
        "two ",
        { type: "char", marker: "nd", content: ["Lord"] },
        " and ",
        {
          type: "note",
          marker: "f",
          caller: "+",
          content: [{ type: "char", marker: "ft", content: ["note"] }],
        },
        " end",
      ],
    },
    { type: "para", marker: "p", content: ["three"] },
    { type: "para", marker: "p", content: ["four"] },
  ],
};

function clipboardEvent(store: Map<string, string>): ClipboardEvent {
  const event = new ClipboardEvent("copy", { bubbles: true, cancelable: true });
  Object.defineProperty(event, "clipboardData", {
    value: {
      get types() {
        return [...store.keys()];
      },
      files: [],
      getData: (type: string) => store.get(type) ?? "",
      setData: (type: string, data: string) => store.set(type, data),
      clearData: () => store.clear(),
    },
  });
  return event;
}

async function settle(): Promise<void> {
  await act(async () => {
    for (let i = 0; i < 3; i += 1) await new Promise((resolve) => setTimeout(resolve, 0));
  });
}

interface PointSpec {
  key: string;
  offset: number;
  type: "text" | "element";
}

async function select(
  { lexical }: MountedEditor,
  points: () => { anchor: PointSpec; focus: PointSpec },
): Promise<void> {
  await act(async () =>
    lexical.update(
      () => {
        const { anchor, focus } = points();
        const selection = $createRangeSelection();
        selection.anchor.set(anchor.key, anchor.offset, anchor.type);
        selection.focus.set(focus.key, focus.offset, focus.type);
        $setSelection(selection);
      },
      { discrete: true },
    ),
  );
  await settle();
}

async function clip(
  { lexical }: MountedEditor,
  command: typeof COPY_COMMAND | typeof CUT_COMMAND,
): Promise<Map<string, string>> {
  const store = new Map<string, string>();
  await act(async () =>
    lexical.update(() => {
      lexical.dispatchCommand(command, clipboardEvent(store));
    }),
  );
  await settle();
  return store;
}

async function settledContent(mounted: MountedEditor): Promise<MarkerContent[]> {
  await act(async () => mounted.lexical.update(() => $getRoot().selectEnd(), { discrete: true }));
  act(() => mounted.ref.current?.commitPendingMarkerEdits());
  await settle();
  return mounted.ref.current?.getUsj()?.content ?? [];
}

const $rootPoint = (offset: number): PointSpec => ({
  key: $getRoot().getKey(),
  offset,
  type: "element",
});

function $block(index: number): ElementNode {
  const node = $getRoot().getChildAtIndex(index);
  if (!$isElementNode(node)) throw new Error(`no block at ${index}`);
  return node;
}

/** The point at `point`'s position, as a text point when one sits there. */
function spec(point: PointType): PointSpec {
  return { key: point.key, offset: point.offset, type: point.type };
}

/** Paragraphs `first`..`last` of the document, the range's ends inside them. */
function $inParagraphs(first: number, last: number): { anchor: PointSpec; focus: PointSpec } {
  const range = $createRangeSelection();
  const end = $block(last);
  range.anchor.set($block(first).getKey(), 0, "element");
  range.focus.set(end.getKey(), end.getChildrenSize(), "element");
  return { anchor: spec(range.anchor), focus: spec(range.focus) };
}

describe("a Standard-view copy whose ends are element points", () => {
  let mounted: MountedEditor;
  beforeEach(async () => {
    mounted = await mountInView(usj, editorView("standard"));
  });
  afterEach(() => mounted.unmount());

  // Root children: 0 book, 1 chapter, 2..5 the paragraphs.
  it.each([
    [2, 3],
    [3, 4],
    [2, 4],
    [3, 3],
  ])("on the root, paragraphs %i to %i, copies them whole", async (first, last) => {
    await select(mounted, () => $inParagraphs(first, last));
    const expected = (await clip(mounted, COPY_COMMAND)).get("text/plain");

    await select(mounted, () => ({ anchor: $rootPoint(first), focus: $rootPoint(last + 1) }));
    const store = await clip(mounted, COPY_COMMAND);

    expect(store.get("text/plain")).toBe(expected);
  });

  it("on the root, backward, copies the paragraphs whole", async () => {
    await select(mounted, () => $inParagraphs(3, 4));
    const expected = (await clip(mounted, COPY_COMMAND)).get("text/plain");

    await select(mounted, () => ({ anchor: $rootPoint(5), focus: $rootPoint(3) }));

    expect((await clip(mounted, COPY_COMMAND)).get("text/plain")).toBe(expected);
  });

  it("inside a paragraph, between two of its children, copies from that child on", async () => {
    // The q1 paragraph's children: its marker glyph and space, then "two ", the char span, ...
    await select(mounted, () => {
      const para = $block(3);
      const two = para.getAllTextNodes().find((node) => node.getTextContent() === "two ");
      if (!$isTextNode(two)) throw new Error("no text");
      return {
        anchor: { key: two.getKey(), offset: 0, type: "text" },
        focus: $inParagraphs(4, 4).focus,
      };
    });
    const expected = (await clip(mounted, COPY_COMMAND)).get("text/plain");

    await select(mounted, () => {
      const para = $block(3);
      const two = para.getAllTextNodes().find((node) => node.getTextContent() === "two ");
      if (!two) throw new Error("no text");
      return {
        anchor: { key: para.getKey(), offset: two.getIndexWithinParent(), type: "element" },
        focus: $inParagraphs(4, 4).focus,
      };
    });

    expect((await clip(mounted, COPY_COMMAND)).get("text/plain")).toBe(expected);
    expect(expected).toContain("two \\nd Lord\\nd*");
  });

  it("on the root, cut and pasted back, restores the document", async () => {
    await select(mounted, () => ({ anchor: $rootPoint(3), focus: $rootPoint(5) }));
    const store = await clip(mounted, CUT_COMMAND);

    await act(async () =>
      mounted.lexical.update(() => {
        mounted.lexical.dispatchCommand(
          PASTE_COMMAND,
          clipboardEvent(
            new Map([
              ["text/html", store.get("text/html") ?? ""],
              ["text/plain", store.get("text/plain") ?? ""],
            ]),
          ),
        );
      }),
    );
    await settle();

    expect(await settledContent(mounted)).toEqual(usj.content);
  });
});
