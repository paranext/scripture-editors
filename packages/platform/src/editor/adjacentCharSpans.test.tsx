/**
 * Two adjacent char spans of one marker are two spans: two `\w` words, each with its own `lemma`,
 * or two `\nd` names. Paratext never joins them, and neither may the editor when content holding
 * them arrives — pasted from a copy, or applied as ops — or when a marker is applied to the text
 * right after a span of the same marker, in any view a user edits Scripture in.
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
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  $setSelection,
  COPY_COMMAND,
  LexicalEditor,
  LexicalNode,
  PASTE_COMMAND,
  TextNode,
} from "lexical";
import { $getOTPositionOfNode, StructureProtectionMode } from "shared-react";
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
        content: [{ type: "verse", marker: "v", number: "1" }, "pre ", ...content, " post"],
      },
    ],
  };
}

function char(
  marker: string,
  text: string,
  attributes: { [name: string]: string } = {},
): MarkerObject {
  return { type: "char", marker, ...attributes, content: [text] } as MarkerObject;
}

/** The char spans of the document's one paragraph. */
function spansOf(mounted: MountedEditor): MarkerContent[] {
  const para = mounted.ref.current?.getUsj()?.content[2];
  if (typeof para !== "object") throw new Error("no paragraph");
  return (para.content ?? []).filter((item) => typeof item === "object" && item.type === "char");
}

/** The one plain text node whose text holds `text`. */
function $textNodeHolding(text: string): TextNode {
  const hits: TextNode[] = [];
  const walk = (node: LexicalNode) => {
    if ($isTextNode(node) && node.getType() === "text" && node.getTextContent().includes(text))
      hits.push(node);
    if ($isElementNode(node)) node.getChildren().forEach(walk);
  };
  walk($getRoot());
  if (hits.length !== 1) throw new Error(`"${text}" is in ${hits.length} text nodes, not one`);
  return hits[0];
}

/** Selects from `startOffset` into the text node holding `start` to `endOffset` into the one
 * holding `end`, in its own committed update so the DOM selection follows before a copy. */
async function select(
  editor: LexicalEditor,
  [start, startOffset]: [string, number],
  [end, endOffset]: [string, number] = [start, startOffset],
): Promise<void> {
  await act(async () =>
    editor.update(
      () => {
        const anchor = $textNodeHolding(start);
        const focus = $textNodeHolding(end);
        const selection = $createRangeSelection();
        selection.anchor.set(anchor.getKey(), startOffset, "text");
        selection.focus.set(focus.getKey(), endOffset, "text");
        $setSelection(selection);
      },
      { discrete: true },
    ),
  );
}

function clipboardEvent(store: Map<string, string>, type: "copy" | "paste"): ClipboardEvent {
  const event = new ClipboardEvent(type, { bubbles: true, cancelable: true });
  Object.defineProperty(event, "clipboardData", {
    value: {
      get types() {
        return [...store.keys()];
      },
      files: [],
      getData: (format: string) => store.get(format) ?? "",
      setData: (format: string, data: string) => store.set(format, data),
    },
  });
  return event;
}

async function settle(): Promise<void> {
  await act(async () => {
    for (let i = 0; i < 3; i += 1) await new Promise((resolve) => setTimeout(resolve, 0));
  });
}

async function copy(editor: LexicalEditor): Promise<Map<string, string>> {
  const store = new Map<string, string>();
  await act(async () =>
    editor.update(() => {
      if (!$isRangeSelection($getSelection())) throw new Error("no range selection to copy");
      editor.dispatchCommand(COPY_COMMAND, clipboardEvent(store, "copy"));
    }),
  );
  await settle();
  return store;
}

async function paste(editor: LexicalEditor, payload: Map<string, string>): Promise<void> {
  await act(async () =>
    editor.update(() => {
      editor.dispatchCommand(PASTE_COMMAND, clipboardEvent(new Map(payload), "paste"));
    }),
  );
  await settle();
}

/** What the editor's copy of `spans` (selected from inside the text either side of them) holds,
 * in `view`. */
async function copyOf(spans: MarkerContent[], view: EditingViewName): Promise<Map<string, string>> {
  const source = await mountInView(doc(spans), editorView(view));
  await select(source.lexical, ["pre ", 3], [" post", 1]);
  const copied = await copy(source.lexical);
  source.unmount();
  return copied;
}

/** Pastes `payload` at the end of the paragraph of an editor holding no spans, and returns the
 * spans the paragraph then holds. */
async function spansAfterPasting(
  payload: Map<string, string>,
  view: EditingViewName,
  structureProtectionMode?: StructureProtectionMode,
): Promise<MarkerContent[]> {
  const target = await mountInView(doc([]), editorView(view), { structureProtectionMode });
  await select(target.lexical, [" post", " post".length]);
  await paste(target.lexical, payload);
  const spans = spansOf(target);
  target.unmount();
  return spans;
}

const separateSpans: [string, MarkerContent[]][] = [
  ["two \\w words", [char("w", "a"), char("w", "b")]],
  [
    "two \\w words of different lemmas",
    [char("w", "a", { lemma: "x" }), char("w", "b", { lemma: "y" })],
  ],
  ["two \\nd names", [char("nd", "A"), char("nd", "B")]],
];

/** The rows whose spans differ in nothing but their text. The HTML flavor of a copy carries a
 * span's marker but none of its other attributes, so a lemma cannot survive a paste of it. */
const markerOnlySpans = separateSpans.filter(([, spans]) =>
  spans.every((span) => typeof span === "object" && !("lemma" in span)),
);

const hiddenMarkerViews = EDITING_VIEWS.filter(({ name }) => name !== "standard");

describe("pasting adjacent spans of one marker", () => {
  describe.each(EDITING_VIEWS)("in $name view", ({ name: view }) => {
    it.each(separateSpans)("keeps %s from the editor's own copy apart", async (_, spans) => {
      const copied = await copyOf(spans, view);

      expect(await spansAfterPasting(copied, view)).toEqual(spans);
    });
  });

  describe("in standard view", () => {
    it.each(separateSpans)("keeps %s from USFM text apart", async (_, spans) => {
      const usfm = (await copyOf(spans, "standard")).get("text/plain");
      if (!usfm?.includes("\\")) throw new Error(`Standard view copied no USFM: ${usfm}`);

      expect(await spansAfterPasting(new Map([["text/plain", usfm]]), "standard")).toEqual(spans);
    });
  });

  describe.each(hiddenMarkerViews)("in $name view", ({ name: view }) => {
    it.each(markerOnlySpans)("keeps %s from the copy's HTML apart", async (_, spans) => {
      const html = (await copyOf(spans, view)).get("text/html");
      if (!html) throw new Error("the copy holds no HTML");

      expect(await spansAfterPasting(new Map([["text/html", html]]), view)).toEqual(spans);
    });

    it.each(markerOnlySpans)("keeps %s apart in a protected document", async (_, spans) => {
      const copied = await copyOf(spans, view);

      expect(await spansAfterPasting(copied, view, "protected")).toEqual(spans);
    });

    it("joins a piece of a span pasted inside a span of the same marker", async () => {
      const source = await mountInView(doc([char("nd", "LORD")]), editorView(view));
      await select(source.lexical, ["LORD", 1], ["LORD", 3]);
      const copied = await copy(source.lexical);
      source.unmount();

      const target = await mountInView(doc([char("nd", "LORD")]), editorView(view));
      await select(target.lexical, ["LORD", 2]);
      await paste(target.lexical, copied);

      expect(spansOf(target)).toEqual([char("nd", "LOORRD")]);
    });
  });
});

describe("applying ops for a span right before a span of the same marker", () => {
  describe.each(EDITING_VIEWS)("in $name view", ({ name: view }) => {
    it.each([
      ["a span", { style: "w", lemma: "x" }, char("w", "a", { lemma: "x" })],
      [
        "a nested span",
        [{ style: "w", lemma: "x" }, { style: "nd" }],
        { type: "char", marker: "w", lemma: "x", content: [char("nd", "a")] } as MarkerObject,
      ],
    ])("keeps %s of another lemma apart", async (_, charAttribute, inserted) => {
      const mounted = await mountInView(doc([char("w", "b", { lemma: "y" })]), editorView(view));
      const position = mounted.lexical
        .getEditorState()
        .read(() => $getOTPositionOfNode($textNodeHolding("pre "), "apply"));
      if (position === undefined) throw new Error("no position for the text before the span");

      act(() =>
        mounted.ref.current?.applyUpdate([
          { retain: position + "pre ".length },
          { insert: "a", attributes: { char: charAttribute } },
        ]),
      );

      expect(spansOf(mounted)).toEqual([inserted, char("w", "b", { lemma: "y" })]);
    });
  });
});

const scrRef = { book: "GEN", chapterNum: 1, verseNum: 1 };

type Endpoint = [string, number];
type MarkingCase = [string, string, MarkerContent[], Endpoint, Endpoint, MarkerContent[]];

/** The two ways a user applies a character marker to a selection: the marker menu, and the
 * host's insert-marker call the toolbar makes. */
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

async function spansAfterMarking(
  view: EditingViewName,
  apply: (mounted: MountedEditor, marker: string) => void,
  [, marker, content, start, end]: MarkingCase,
): Promise<MarkerContent[]> {
  const mounted = await mountInView(doc(content), editorView(view), { scrRef });
  await select(mounted.lexical, start, end);
  act(() => apply(mounted, marker));
  await settle();
  const spans = spansOf(mounted);
  mounted.unmount();
  return spans;
}

/** Text marked right after a span of the same marker, the selection not reaching into it: a new
 * span, as in Paratext 9 and Standard view. */
const besideCases: MarkingCase[] = [
  [
    "\\nd on the word right after an \\nd span",
    "nd",
    [char("nd", "Lord"), "God"],
    ["God", 0],
    ["God", 3],
    [char("nd", "Lord"), char("nd", "God")],
  ],
  [
    "\\w on the word right after a \\w word",
    "w",
    [char("w", "a"), "b"],
    ["b", 0],
    ["b", 1],
    [char("w", "a"), char("w", "b")],
  ],
  [
    "\\w on a space and a word right after a \\w word",
    "w",
    [char("w", "a"), " b"],
    [" b", 0],
    [" b", 2],
    [char("w", "a"), char("w", "b")],
  ],
];

/** The same, with the selection starting at the end of the span's own text — where a selection
 * dragged from right after the span's closer can start. */
const besideFromSpanEndCases: MarkingCase[] = [
  [
    "\\nd on the word after an \\nd span, selected from the span's end",
    "nd",
    [char("nd", "Lord"), "God"],
    ["Lord", 4],
    ["God", 3],
    [char("nd", "Lord"), char("nd", "God")],
  ],
];

/** Text marked over part of a span of the same marker: the span is extended to cover the
 * selection. Paratext 9 mangles the line in this case (it can replace the selection with a closing
 * marker); the editor extends the span instead (TJ, 2026-10-27). */
const overlapCases: MarkingCase[] = [
  [
    "\\nd over the end of an \\nd span and the word after it",
    "nd",
    [char("nd", "Lord"), "God"],
    ["Lord", 2],
    ["God", 3],
    [char("nd", "LordGod")],
  ],
  [
    "\\nd over a whole \\nd span and the word after it",
    "nd",
    [char("nd", "Lord"), "God"],
    ["Lord", 0],
    ["God", 3],
    [char("nd", "LordGod")],
  ],
];

describe("marking text beside a span of the same marker", () => {
  describe.each(EDITING_VIEWS)("in $name view", ({ name: view }) => {
    describe.each(applyPaths)("through %s", (_, apply) => {
      it.each(besideCases)("keeps %s a span of its own", async (...markingCase) => {
        expect(await spansAfterMarking(view, apply, markingCase)).toEqual(markingCase[5]);
      });
    });
  });

  describe.each(hiddenMarkerViews)("in $name view", ({ name: view }) => {
    describe.each(applyPaths)("through %s", (_, apply) => {
      it.each(besideFromSpanEndCases)("keeps %s a span of its own", async (...markingCase) => {
        expect(await spansAfterMarking(view, apply, markingCase)).toEqual(markingCase[5]);
      });

      // Paratext 9 mangles the line here; the span is extended instead.
      it.each(overlapCases)("extends the span for %s", async (...markingCase) => {
        expect(await spansAfterMarking(view, apply, markingCase)).toEqual(markingCase[5]);
      });
    });

    // Each selected piece takes the marker where it sits, the part inside the span nested in it.
    it.each(applyPaths)(
      "marks a selection leaving a span of another marker through %s",
      async (_, apply) => {
        const spans = await spansAfterMarking(view, apply, [
          "",
          "w",
          [char("nd", "Lord"), "God"],
          ["Lord", 2],
          ["God", 3],
          [],
        ]);

        expect(spans).toEqual([
          { type: "char", marker: "nd", content: ["Lo", char("w", "rd")] },
          char("w", "God"),
        ]);
      },
    );

    it("extends a span over the word right after it on an explicit extend", async () => {
      const mounted = await mountInView(doc([char("nd", "Lord"), "God"]), editorView(view));
      await select(mounted.lexical, ["God", 0], ["God", 3]);

      act(() => {
        mounted.ref.current?.extendCharacterMarker("nd");
      });
      await settle();

      expect(spansOf(mounted)).toEqual([char("nd", "LordGod")]);
    });
  });
});
