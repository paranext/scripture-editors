/**
 * Removing or replacing a character marker over a selection that ends — or starts — at a span's
 * edge, where Lexical expresses the point on the span element itself rather than in its text: a
 * double-click or drag over a whole span ends there, at the start of the text after it. The
 * marker must come off, or change on, the whole selected text, in every view that offers it.
 */
import { editorView, enabledViews, mountInView, MountedEditor } from "./editorViews.test-helpers";
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
  PointType,
  TextNode,
} from "lexical";
import { $isCharNode } from "shared";
import { describe, expect, it } from "vitest";

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

/** `a \nd Lord\nd*\add God\add* b` */
const adjacentSpans: MarkerContent[] = ["a ", char("nd", "Lord"), char("add", "God"), " b"];
/** `a \nd Lord\nd* God b` */
const oneSpan: MarkerContent[] = ["a ", char("nd", "Lord"), " God b"];
/** `a \nd Lord\+wj x\+wj*\nd* God b` */
const nestedSpan: MarkerContent[] = ["a ", char("nd", "Lord", char("wj", "x")), " God b"];

/** The content of the document's one paragraph, after its verse marker. */
function paragraphOf(mounted: MountedEditor): MarkerContent[] {
  const para = mounted.ref.current?.getUsj()?.content[2];
  if (typeof para !== "object") throw new Error("no paragraph");
  return (para.content ?? []).slice(1);
}

/** The one plain text node that is `text`, or else holds it. */
function $textNode(text: string): TextNode {
  const all: TextNode[] = [];
  const walk = (node: LexicalNode) => {
    if ($isTextNode(node) && node.getType() === "text") all.push(node);
    if ($isElementNode(node)) node.getChildren().forEach(walk);
  };
  walk($getRoot());
  const exact = all.filter((node) => node.getTextContent() === text);
  const hits =
    exact.length > 0 ? exact : all.filter((node) => node.getTextContent().includes(text));
  if (hits.length !== 1) throw new Error(`"${text}" is in ${hits.length} text nodes, not one`);
  return hits[0];
}

/** A point in the text node holding `text`, `offset` characters into `text`; or an element point
 * after the last child of the span holding the text `endOfSpanHolding`. */
type Endpoint = [string, number] | { endOfSpanHolding: string };

function $setPoint(point: PointType, endpoint: Endpoint): void {
  if (!Array.isArray(endpoint)) {
    const span = $textNode(endpoint.endOfSpanHolding).getParent();
    if (!$isCharNode(span)) throw new Error(`"${endpoint.endOfSpanHolding}" is not in a span`);
    point.set(span.getKey(), span.getChildrenSize(), "element");
    return;
  }
  const [text, offset] = endpoint;
  const node = $textNode(text);
  point.set(node.getKey(), Math.max(0, node.getTextContent().indexOf(text)) + offset, "text");
}

async function select(editor: LexicalEditor, start: Endpoint, end: Endpoint): Promise<void> {
  await act(async () =>
    editor.update(
      () => {
        const selection = $createRangeSelection();
        $setPoint(selection.anchor, start);
        $setPoint(selection.focus, end);
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

type Edit = (mounted: MountedEditor) => void;
const removeAny: Edit = (mounted) => mounted.ref.current?.removeCharacterMarker();
const removeNd: Edit = (mounted) => mounted.ref.current?.removeCharacterMarker("nd");
const replaceWithBd: Edit = (mounted) => mounted.ref.current?.replaceCharacterMarker("bd");
const replaceNdWithAdd: Edit = (mounted) =>
  mounted.ref.current?.replaceCharacterMarker("add", "nd");

const cases: [string, MarkerContent[], Endpoint, Endpoint, Edit, MarkerContent[]][] = [
  [
    "removes the marker from a whole span selected up to the text after it",
    adjacentSpans,
    ["God", 0],
    [" b", 0],
    removeAny,
    ["a ", char("nd", "Lord"), "God b"],
  ],
  [
    "removes the markers from two whole spans selected up to the text after them",
    adjacentSpans,
    ["Lord", 0],
    [" b", 0],
    removeAny,
    ["a LordGod b"],
  ],
  [
    "replaces the marker on a whole span selected up to the text after it",
    adjacentSpans,
    ["God", 0],
    [" b", 0],
    replaceWithBd,
    ["a ", char("nd", "Lord"), char("bd", "God"), " b"],
  ],
  [
    "removes a named marker from a whole span holding a nested one",
    nestedSpan,
    ["Lord", 0],
    [" God b", 0],
    removeNd,
    ["a Lord", char("wj", "x"), " God b"],
  ],
  [
    "removes a named marker from a whole span selected up to the text after it",
    oneSpan,
    ["Lord", 0],
    [" God b", 0],
    removeNd,
    ["a Lord God b"],
  ],
  [
    "removes a named marker from a whole span selected to the span's own end",
    oneSpan,
    ["Lord", 0],
    { endOfSpanHolding: "Lord" },
    removeNd,
    ["a Lord God b"],
  ],
  [
    "replaces a named marker on a whole span selected up to the text after it",
    oneSpan,
    ["Lord", 0],
    [" God b", 0],
    replaceNdWithAdd,
    ["a ", char("add", "Lord"), " God b"],
  ],
];

describe.each(enabledViews(["formatted", "paragraph-structure"]))("in %s view", (view) => {
  it.each(cases)("%s", async (_, content, start, end, edit, expected) => {
    const mounted = await mountInView(doc(content), editorView(view));
    await select(mounted.lexical, start, end);
    act(() => edit(mounted));
    await settle();
    const paragraph = paragraphOf(mounted);
    mounted.unmount();

    expect(paragraph).toEqual(expected);
  });
});
