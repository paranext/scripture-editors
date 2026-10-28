/**
 * Applying a character marker to a selection that reaches a char span's border, through the two
 * ways a user applies one: the marker menu and the host's `insertMarker`. A span the selection
 * holds whole moves into the new span; in Standard view, where the selection can hold part of a
 * span's marker glyphs, a selection that crosses a border is refused. Either way the editor must
 * not freeze, lose a span, move text, or leave a marker unmatched.
 */
import {
  EDITING_VIEWS,
  EditingViewName,
  editorView,
  mountInView,
  MountedEditor,
} from "./editorViews.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $isElementNode,
  $isTextNode,
  $setSelection,
  LexicalEditor,
  LexicalNode,
  TextNode,
} from "lexical";
import { describe, expect, it } from "vitest";

const scrRef = { book: "GEN", chapterNum: 1, verseNum: 1 };

function doc(content: MarkerContent[]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
      { type: "chapter", marker: "c", number: "1" },
      {
        type: "para",
        marker: "p",
        content: [{ type: "verse", marker: "v", number: "1" }, ...content],
      },
    ],
  };
}

function char(marker: string, ...content: MarkerContent[]): MarkerObject {
  return { type: "char", marker, content };
}

/** `a \nd Lord\nd* God b` */
const line: MarkerContent[] = ["a ", char("nd", "Lord"), " God b"];

/** The content of the document's one paragraph, after its verse marker. */
function paragraphOf(mounted: MountedEditor): MarkerContent[] {
  const para = mounted.ref.current?.getUsj()?.content[2];
  if (typeof para !== "object") throw new Error("no paragraph");
  return (para.content ?? []).slice(1);
}

/** The one text node — content or marker glyph — whose text is `text`, or else holds it. */
function $textNode(text: string): TextNode {
  const all: TextNode[] = [];
  const walk = (node: LexicalNode) => {
    if ($isTextNode(node)) all.push(node);
    if ($isElementNode(node)) node.getChildren().forEach(walk);
  };
  walk($getRoot());
  const exact = all.filter((node) => node.getTextContent() === text);
  const hits =
    exact.length > 0 ? exact : all.filter((node) => node.getTextContent().includes(text));
  if (hits.length !== 1) throw new Error(`"${text}" is in ${hits.length} text nodes, not one`);
  return hits[0];
}

type Endpoint = [string, number];

/** Where `text` ends in the text node holding it: past the separator a span's content starts with
 * in Standard view, so one offset names the same character in every view. */
function $offsetIn(node: TextNode, [text, offset]: Endpoint): number {
  const start = node.getTextContent().indexOf(text);
  return (start < 0 ? 0 : start) + offset;
}

async function select(editor: LexicalEditor, start: Endpoint, end: Endpoint): Promise<void> {
  await act(async () =>
    editor.update(
      () => {
        const anchor = $textNode(start[0]);
        const focus = $textNode(end[0]);
        const selection = $createRangeSelection();
        selection.anchor.set(anchor.getKey(), $offsetIn(anchor, start), "text");
        selection.focus.set(focus.getKey(), $offsetIn(focus, end), "text");
        $setSelection(selection);
      },
      { discrete: true },
    ),
  );
}

async function settle(): Promise<void> {
  await act(async () => {
    for (let i = 0; i < 3; i += 1) await new Promise((resolve) => setTimeout(resolve, 0));
  });
}

const applyPaths: [string, (mounted: MountedEditor, marker: string) => void][] = [
  [
    "the marker menu",
    (mounted, marker) =>
      mounted.ref.current?.applyMarkerMenuSelection(
        { marker, kind: "character", isBasic: false },
        { trigger: "backslash", literalPrefixLanded: false },
      ),
  ],
  ["insertMarker", (mounted, marker) => mounted.ref.current?.insertMarker(marker)],
];

async function applied(
  view: EditingViewName,
  apply: (mounted: MountedEditor, marker: string) => void,
  marker: string,
  start: Endpoint,
  end: Endpoint,
  content: MarkerContent[] = line,
): Promise<{ paragraph: MarkerContent[]; logs: string[] }> {
  const mounted = await mountInView(doc(content), editorView(view), { scrRef });
  await select(mounted.lexical, start, end);
  act(() => apply(mounted, marker));
  await settle();
  const result = { paragraph: paragraphOf(mounted), logs: [...mounted.logs] };
  mounted.unmount();
  return result;
}

describe("applying a marker over a whole span from the text before it", () => {
  describe.each(EDITING_VIEWS)("in $name view", ({ name: view }) => {
    it.each(applyPaths)("moves the span into the new span through %s", async (_, apply) => {
      const { paragraph } = await applied(view, apply, "wj", ["a ", 2], [" God b", 1]);

      expect(paragraph).toEqual(["a ", char("wj", char("nd", "Lord"), " "), "God b"]);
    });

    it.each(applyPaths)("applies the span's own marker through %s", async (_, apply) => {
      const { paragraph } = await applied(view, apply, "nd", ["a ", 2], [" God b", 1]);

      // Standard view nests the span in the new one; the views that hide markers extend it.
      expect(paragraph).toEqual(
        view === "standard"
          ? ["a ", char("nd", char("nd", "Lord"), " "), "God b"]
          : ["a ", char("nd", "Lord "), "God b"],
      );
    });
  });

  it.each(applyPaths)(
    "moves a span selected from its opening glyph to its closing glyph into the new span in standard view through %s",
    async (_, apply) => {
      const { paragraph } = await applied("standard", apply, "wj", ["a ", 2], [" God b", 0]);

      expect(paragraph).toEqual(["a ", char("wj", char("nd", "Lord")), " God b"]);
    },
  );
});

/** Selections that cross a border of the `\nd` span in `a \nd Lord\nd* God b`, each of which
 * Standard view refuses. */
const crossingCases: [string, string, Endpoint, Endpoint][] = [
  ["\\nd from inside the span to inside the word after it", "nd", ["Lord", 2], ["God", 2]],
  ["\\nd from the span's opening glyph to inside the word after it", "nd", ["\\nd", 0], ["God", 2]],
  [
    "\\nd from the start of the span's text to inside the word after it",
    "nd",
    ["Lord", 0],
    ["God", 2],
  ],
  [
    "\\nd from the end of the span's text to inside the word after it",
    "nd",
    ["Lord", 4],
    ["God", 3],
  ],
  ["\\wj from inside the span to inside the word after it", "wj", ["Lord", 2], ["God", 2]],
  ["\\wj from the text before the span to inside it", "wj", ["a ", 1], ["Lord", 2]],
  ["\\nd from the text before the span to inside it", "nd", ["a ", 1], ["Lord", 2]],
  ["\\wj from inside the span's closing glyph", "wj", ["\\nd*", 2], ["God", 2]],
];

/** Selections next to, inside, or around the span that Standard view still applies. */
const applyingCases: [string, string, Endpoint, Endpoint, MarkerContent[]][] = [
  [
    "\\nd on the word after the span",
    "nd",
    ["God", 0],
    ["God", 3],
    ["a ", char("nd", "Lord"), " ", char("nd", "God"), " b"],
  ],
  [
    "\\nd on the word before the span",
    "nd",
    ["a ", 0],
    ["a ", 1],
    [char("nd", "a"), " ", char("nd", "Lord"), " God b"],
  ],
  [
    "\\wj wholly inside the span",
    "wj",
    ["Lord", 1],
    ["Lord", 3],
    ["a ", char("nd", "L", char("wj", "or"), "d"), " God b"],
  ],
];

describe("applying a marker across a span's border in standard view", () => {
  describe.each(applyPaths)("through %s", (_, apply) => {
    it.each(crossingCases)("refuses %s", async (__, marker, start, end) => {
      const { paragraph, logs } = await applied("standard", apply, marker, start, end);

      expect(paragraph).toEqual(line);
      expect(logs).toContainEqual(expect.stringContaining("crosses the border of a character"));
    });

    it.each(applyingCases)("still applies %s", async (__, marker, start, end, expected) => {
      const { paragraph, logs } = await applied("standard", apply, marker, start, end);

      expect(paragraph).toEqual(expected);
      expect(logs).not.toContainEqual(expect.stringContaining("was not applied"));
    });
  });
});
