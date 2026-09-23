/**
 * A caret with no text beside it — in front of a marker, inside an empty paragraph, at the end of a
 * paragraph that ends in a marker, at the end of the document — must be reported as the ONE USJ
 * location its USFM position has, never as a container plus a content index (`{ jsonPath:
 * "$.content[2]", offset: 0 }`) or the root plus one (`{ jsonPath: "$", offset: 3 }`): USJ gives
 * `offset` a meaning only on text.
 *
 * Every expected location below is what core's `UsjReaderWriter` maps that caret's USFM index to
 * (`usfmVerseLocationToUsjDocumentLocation`), which is the oracle for the rules:
 *
 * 1. A gap in front of a marker object is that marker's location (`{ jsonPath: <item> }`).
 * 2. The character AFTER a token that has no other home — the space after a marker name, a line's
 *    newline — is addressed on that token at its length: text `offset: length`, `['marker']`
 *    `propertyOffset: marker.length`, `closingMarkerOffset: <closing length>`.
 * 3. The end of the document is one past the final newline, on the last token: that token's rule-2
 *    form plus one.
 * 4. A root point between two blocks is the start of the next block.
 *
 * The editor keeps ACCEPTING the older `{ container, offset }` and `{ "$", offset }` shapes a host
 * may still hand it, but it only ever emits the forms above.
 */
import {
  initialize as initializeSerialize,
  reset,
  serializeEditorState,
} from "../adaptors/usj-editor.adaptor";
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { settledPositionContext, twoParaUsj, typeOver } from "./positions.test-helpers";
import {
  $livePointFromSettledLocation,
  $liveSelectionFromSettled,
  $settledLocationFromLivePoint,
} from "./settledPositions.utils";
import { $prepareSettleScopes } from "./settledScopes.utils";
import { MarkerContent, Usj, UsjDocumentLocation } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getNodeByKey,
  $getRoot,
  $isElementNode,
  $setSelection,
  ElementNode,
  LexicalEditor,
  LexicalNode,
  SELECTION_CHANGE_COMMAND,
} from "lexical";
import {
  $getLogicalContentItems,
  $isMarkerNode,
  $isVisibleMarkerNode,
  getPendedDisplayOwners,
  TypedMarkNode,
} from "shared";
import {
  $getLocationFromNode,
  $getRangeFromUsjSelection,
  $getUsjSelectionFromEditor,
  FORMATTED_VIEW_MODE,
  getViewOptions,
  hasStandardViewWhitespace,
  STANDARD_VIEW_MODE,
  UNFORMATTED_VIEW_MODE,
  usjReactNodes,
  ViewOptions,
} from "shared-react";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { createBasicTestEnvironment } from "../../../../../libs/shared/src/nodes/usj/test.utils";

function requireView(mode: string): ViewOptions {
  const options = getViewOptions(mode);
  if (!options) throw new Error(`no view options for ${mode}`);
  return options;
}

/** Every marker mode the editor renders, since each builds a different tree around the same gaps:
 * editable glyph text (Standard, Unformatted), read-only glyph decorators (visible), and no glyphs
 * at all (Formatted). */
const VIEWS: [string, ViewOptions][] = [
  ["Standard", requireView(STANDARD_VIEW_MODE)],
  ["Formatted", requireView(FORMATTED_VIEW_MODE)],
  ["Unformatted", requireView(UNFORMATTED_VIEW_MODE)],
  ["visible markers", { ...requireView(FORMATTED_VIEW_MODE), markerMode: "visible" }],
];

function doc(...content: MarkerContent[]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: [] },
      { type: "chapter", marker: "c", number: "1" },
      ...content,
    ],
  };
}

/** A note-content span the way ParatextData writes one that has no closer of its own. */
function noteChar(marker: string, content: MarkerContent[]): MarkerContent {
  return { type: "char", marker, closed: "false", content };
}

/** The document the reports were probed with. `UsjReaderWriter.toUsfm()`:
 * `\id GEN\n\c 1\n\p\n\v 1 In the beginning\f + \ft a note\f*\n\v 2 God said\n\b\n`. */
const probeUsj = doc(
  {
    type: "para",
    marker: "p",
    content: [
      { type: "verse", marker: "v", number: "1" },
      "In the beginning",
      { type: "note", marker: "f", caller: "+", content: [noteChar("ft", ["a note"])] },
      { type: "verse", marker: "v", number: "2" },
      "God said",
    ],
  },
  { type: "para", marker: "b", content: [] },
);

/** One paragraph per shape a paragraph can end in, plus the empty spans. `UsjReaderWriter.toUsfm()`:
 * `…\p\n\v 1 a\f + \ft n\f*\n\p b\n\v 2\n\p c\nd \nd*d\nd e\nd*\n\p f\f + \f*g\wj h\+nd i\+nd*\wj*\n`
 * `\p j\x - \xt \x*\n\p k\f + \ft z\f*\n`. */
const shapesUsj = doc(
  {
    type: "para",
    marker: "p",
    content: [
      { type: "verse", marker: "v", number: "1" },
      "a",
      { type: "note", marker: "f", caller: "+", content: [noteChar("ft", ["n"])] },
    ],
  },
  { type: "para", marker: "p", content: ["b", { type: "verse", marker: "v", number: "2" }] },
  {
    type: "para",
    marker: "p",
    content: [
      "c",
      { type: "char", marker: "nd", content: [] },
      "d",
      { type: "char", marker: "nd", content: ["e"] },
    ],
  },
  {
    type: "para",
    marker: "p",
    content: [
      "f",
      { type: "note", marker: "f", caller: "+", content: [] },
      "g",
      {
        type: "char",
        marker: "wj",
        content: ["h", { type: "char", marker: "nd", content: ["i"] }],
      },
    ],
  },
  {
    type: "para",
    marker: "p",
    content: ["j", { type: "note", marker: "x", caller: "-", content: [noteChar("xt", [])] }],
  },
  {
    type: "para",
    marker: "p",
    content: ["k", { type: "note", marker: "f", caller: "+", content: [noteChar("ft", ["z"])] }],
  },
);

function load(usj: Usj, view: ViewOptions): LexicalEditor {
  initializeSerialize(undefined, undefined);
  reset();
  const state = serializeEditorState(usj, view);
  const { editor } = createBasicTestEnvironment([TypedMarkNode, ...usjReactNodes]);
  editor.setEditorState(editor.parseEditorState(JSON.stringify({ root: state.root })));
  return editor;
}

/** The live node of the marker object at a content path. */
function $nodeAt(indexes: number[], view: ViewOptions): LexicalNode {
  let node: LexicalNode = $getRoot();
  for (const index of indexes) {
    if (!$isElementNode(node)) throw new Error(`no element to descend into at ${indexes}`);
    const item = $getLogicalContentItems(node, hasStandardViewWhitespace(view))[index];
    if (item?.type !== "element") throw new Error(`no marker object at ${indexes}`);
    node = item.node;
  }
  return node;
}

/** The live element at a content path. */
function $elementAt(indexes: number[], view: ViewOptions): ElementNode {
  const node = $nodeAt(indexes, view);
  if (!$isElementNode(node)) throw new Error(`the item at ${indexes} is not an element`);
  return node;
}

/** Where a point sits, as a tree position. */
type Point = (view: ViewOptions) => [LexicalNode, number];

/** The element point in front of `container`'s content item `index`. */
function before(containerIndexes: number[], index: number): Point {
  return (view) => {
    const container = $elementAt(containerIndexes, view);
    const target = $nodeAt([...containerIndexes, index], view);
    let child: LexicalNode = target;
    while (!child.getParent()?.is(container)) {
      const parent = child.getParent();
      if (!parent) throw new Error("target is not inside its container");
      child = parent;
    }
    return [container, child.getIndexWithinParent()];
  };
}

/** The element point at the end of `container`'s CONTENT — in front of its closing glyph when the
 * view renders one, since past the glyph is outside the container. */
function contentEnd(containerIndexes: number[]): Point {
  return (view) => {
    const container = $elementAt(containerIndexes, view);
    const children = container.getChildren();
    const closer = children.findLastIndex(
      (child) =>
        ($isMarkerNode(child) && child.getMarkerSyntax() === "closing") ||
        ($isVisibleMarkerNode(child) && child.getTextContent().endsWith("*")),
    );
    return [container, closer >= 0 ? closer : children.length];
  };
}

/** A point on the root, between (or after) its top-level blocks. */
function rootAt(offset: number | "end"): Point {
  return () => {
    const root = $getRoot();
    return [root, offset === "end" ? root.getChildrenSize() : offset];
  };
}

interface Row {
  caret: string;
  usj: Usj;
  point: Point;
  location: UsjDocumentLocation;
}

const ROWS: Row[] = [
  // The reported shapes.
  {
    caret: "in front of \\v 1",
    usj: probeUsj,
    point: before([2], 0),
    location: { jsonPath: "$.content[2].content[0]" },
  },
  {
    caret: "between \\f* and \\v 2",
    usj: probeUsj,
    point: before([2], 3),
    location: { jsonPath: "$.content[2].content[3]" },
  },
  {
    caret: "inside the empty \\b",
    usj: probeUsj,
    point: contentEnd([3]),
    location: { jsonPath: "$.content[3]['marker']", propertyOffset: 1 },
  },
  {
    caret: "on the root between the two paragraphs",
    usj: probeUsj,
    point: rootAt(3),
    location: { jsonPath: "$.content[3]" },
  },
  {
    caret: "on the root at the end of a document ending in an empty paragraph",
    usj: probeUsj,
    point: rootAt("end"),
    location: { jsonPath: "$.content[3]['marker']", propertyOffset: 2 },
  },
  // What each kind of last token makes of the paragraph end (rule 2).
  {
    caret: "at the end of a paragraph ending in a note",
    usj: shapesUsj,
    point: contentEnd([2]),
    location: { jsonPath: "$.content[2].content[2]", closingMarkerOffset: 3 },
  },
  {
    caret: "at the end of a paragraph ending in a verse with no text",
    usj: shapesUsj,
    point: contentEnd([3]),
    location: { jsonPath: "$.content[3].content[1]['number']", propertyOffset: 1 },
  },
  {
    caret: "at the end of a paragraph ending in a char span",
    usj: shapesUsj,
    point: contentEnd([4]),
    location: { jsonPath: "$.content[4].content[3]", closingMarkerOffset: 4 },
  },
  {
    caret: "at the end of a paragraph ending in nested char spans",
    usj: shapesUsj,
    point: contentEnd([5]),
    location: { jsonPath: "$.content[5].content[3]", closingMarkerOffset: 4 },
  },
  // Empty and nested containers: the content end of a span with a closer is that closer's start.
  {
    caret: "inside an empty char span",
    usj: shapesUsj,
    point: contentEnd([4, 1]),
    location: { jsonPath: "$.content[4].content[1]", closingMarkerOffset: 0 },
  },
  {
    caret: "inside an empty note",
    usj: shapesUsj,
    point: contentEnd([5, 1]),
    location: { jsonPath: "$.content[5].content[1]", closingMarkerOffset: 0 },
  },
  {
    caret: "at the end of a char span ending in a nested span",
    usj: shapesUsj,
    point: contentEnd([5, 3]),
    location: { jsonPath: "$.content[5].content[3]", closingMarkerOffset: 0 },
  },
  {
    caret: "inside an empty closer-less note span, which ends where its note closes",
    usj: shapesUsj,
    point: contentEnd([6, 1, 0]),
    location: { jsonPath: "$.content[6].content[1]", closingMarkerOffset: 0 },
  },
  // The document end on each kind of last token (rule 3).
  {
    caret: "at the end of a document ending in a note",
    usj: shapesUsj,
    point: rootAt("end"),
    location: { jsonPath: "$.content[7].content[1]", closingMarkerOffset: 4 },
  },
  {
    caret: "at the end of a document ending in text",
    usj: doc({
      type: "para",
      marker: "p",
      content: [{ type: "verse", marker: "v", number: "1" }, "God said"],
    }),
    point: rootAt("end"),
    location: { jsonPath: "$.content[2].content[1]", offset: 9 },
  },
  {
    caret: "at the end of a document ending in a verse with no text",
    usj: doc({
      type: "para",
      marker: "p",
      content: ["x", { type: "verse", marker: "v", number: "2" }],
    }),
    point: rootAt("end"),
    location: { jsonPath: "$.content[2].content[1]['number']", propertyOffset: 2 },
  },
  {
    caret: "at the end of a document ending in a char span",
    usj: doc({
      type: "para",
      marker: "p",
      content: ["x", { type: "char", marker: "nd", content: ["y"] }],
    }),
    point: rootAt("end"),
    location: { jsonPath: "$.content[2].content[1]", closingMarkerOffset: 5 },
  },
  {
    caret: "at the end of a document ending in an empty note",
    usj: doc({
      type: "para",
      marker: "p",
      content: ["x", { type: "note", marker: "f", caller: "+", content: [] }],
    }),
    point: rootAt("end"),
    location: { jsonPath: "$.content[2].content[1]", closingMarkerOffset: 4 },
  },
  {
    caret: "at the end of a paragraph ending in a verse with an alternate number",
    usj: doc(
      {
        type: "para",
        marker: "p",
        content: ["x", { type: "verse", marker: "v", number: "2", altnumber: "3" }],
      },
      { type: "para", marker: "q1", content: ["y"] },
    ),
    point: contentEnd([2]),
    // `\v 2 \va 3\va*` then the newline.
    location: {
      jsonPath: "$.content[2].content[1]",
      keyName: "altnumber",
      keyClosingMarkerOffset: 4,
    },
  },
  {
    caret: "at the end of a document ending in a verse with a published number",
    usj: doc({
      type: "para",
      marker: "q1",
      content: ["y", { type: "verse", marker: "v", number: "4", pubnumber: "B" }],
    }),
    point: rootAt("end"),
    location: {
      jsonPath: "$.content[2].content[1]",
      keyName: "pubnumber",
      keyClosingMarkerOffset: 5,
    },
  },
  {
    caret: "at the end of a document ending in a chapter with an alternate number",
    // `\c 1 \ca 2\ca*` then the newline.
    usj: {
      type: "USJ",
      version: "3.1",
      content: [
        { type: "book", marker: "id", code: "GEN", content: [] },
        { type: "chapter", marker: "c", number: "1", altnumber: "2" },
      ],
    },
    point: rootAt("end"),
    location: { jsonPath: "$.content[1]", keyName: "altnumber", keyClosingMarkerOffset: 5 },
  },
  {
    caret: "at the end of a document ending in a milestone",
    usj: doc({
      type: "para",
      marker: "p",
      content: ["x", { type: "ms", marker: "qt-s", sid: "a" }],
    }),
    point: rootAt("end"),
    // `\qt-s |sid="a"\*` then the newline.
    location: { jsonPath: "$.content[2].content[1]", closingMarkerOffset: 3 },
  },
  {
    caret: "at the end of a document ending in a chapter",
    usj: doc(),
    point: rootAt("end"),
    location: { jsonPath: "$.content[1]['number']", propertyOffset: 2 },
  },
];

describe.each(VIEWS)("reporting a caret with no text beside it (%s)", (_name, view) => {
  it.each(ROWS)("reports a caret $caret as its USFM position", ({ usj, point, location }) => {
    const editor = load(usj, view);
    const reported = editor.getEditorState().read(() => {
      const [node, offset] = point(view);
      return $getLocationFromNode(node, offset, view);
    });
    expect(reported).toEqual(location);
  });
});

describe.each(VIEWS)("resolving a canonical location (%s)", (_name, view) => {
  it.each(ROWS)(
    "puts the caret for the location of a caret $caret where it reports that location again",
    ({ usj, location }) => {
      const editor = load(usj, view);
      const reported = editor.getEditorState().read(() => {
        const range = $getRangeFromUsjSelection({ start: location }, view);
        if (!range) return undefined;
        return $getLocationFromNode(range.anchor.getNode(), range.anchor.offset, view);
      });
      expect(reported).toEqual(location);
    },
  );
});

describe.each(VIEWS)("resolving the shapes hosts wrote before (%s)", (_name, view) => {
  it.each<{ shape: string; legacy: UsjDocumentLocation; canonical: UsjDocumentLocation }>([
    {
      shape: "a container and the index of the item after the gap",
      legacy: { jsonPath: "$.content[2]", offset: 0 },
      canonical: { jsonPath: "$.content[2].content[0]" },
    },
    {
      shape: "an empty container and index 0",
      legacy: { jsonPath: "$.content[3]", offset: 0 },
      canonical: { jsonPath: "$.content[3]['marker']", propertyOffset: 1 },
    },
    {
      shape: "the root and the index of the next block",
      legacy: { jsonPath: "$", offset: 3 },
      canonical: { jsonPath: "$.content[3]" },
    },
    {
      shape: "the root and its item count",
      legacy: { jsonPath: "$", offset: 4 },
      canonical: { jsonPath: "$.content[3]['marker']", propertyOffset: 2 },
    },
  ])("still resolves $shape, and reports the caret canonically", ({ legacy, canonical }) => {
    const editor = load(probeUsj, view);
    const reported = editor.getEditorState().read(() => {
      const range = $getRangeFromUsjSelection({ start: legacy }, view);
      if (!range) return undefined;
      return $getLocationFromNode(range.anchor.getNode(), range.anchor.offset, view);
    });
    expect(reported).toEqual(canonical);
  });
});

describe("the editor API", () => {
  const view = VIEWS[0][1];

  /** Put the caret on the root at `offset`, telling the editor it moved. */
  async function caretOnRoot(lexical: LexicalEditor, offset: number | "end") {
    await act(async () => {
      lexical.update(() => {
        const root = $getRoot();
        const at = offset === "end" ? root.getChildrenSize() : offset;
        const selection = $createRangeSelection();
        selection.anchor.set(root.getKey(), at, "element");
        selection.focus.set(root.getKey(), at, "element");
        $setSelection(selection);
        lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
      });
      await Promise.resolve();
      await Promise.resolve();
    });
  }

  it.each<[number | "end", UsjDocumentLocation]>([
    [3, { jsonPath: "$.content[3]" }],
    ["end", { jsonPath: "$.content[3]['marker']", propertyOffset: 2 }],
  ])(
    "getSelection and onSelectionChange report a root caret at %s canonically",
    async (offset, location) => {
      const onSelectionChange = vi.fn();
      const { ref, lexical } = await mountStandardViewEditor(probeUsj, { onSelectionChange });
      await caretOnRoot(lexical, offset);

      expect(ref.current?.getSelection()).toEqual({ start: location });
      expect(onSelectionChange).toHaveBeenLastCalledWith({ start: location });
    },
  );

  it.each<[string, UsjDocumentLocation]>([
    ["the document end", { jsonPath: "$.content[3]['marker']", propertyOffset: 2 }],
    ["the older root-and-count spelling of the document end", { jsonPath: "$", offset: 4 }],
  ])("setSelection puts the caret at %s", async (_name, location) => {
    const { ref, lexical } = await mountStandardViewEditor(probeUsj);

    await act(async () => {
      ref.current?.setSelection({ start: location });
      await Promise.resolve();
    });

    const reported = lexical.getEditorState().read(() => $getUsjSelectionFromEditor(view));
    expect(reported).toEqual({ start: { jsonPath: "$.content[3]['marker']", propertyOffset: 2 } });
  });
});

describe("a caret with no text beside it while a paragraph is pending", () => {
  /** `plain body` retyped as `plain \q1 body`: settled, the one live paragraph is two, so every
   * top-level index after it is one higher settled than live. */
  async function splitPending() {
    const mounted = await mountStandardViewEditor(twoParaUsj(["plain body"]));
    await typeOver(mounted.lexical, "plain body", "plain \\q1 body");
    expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);
    const settled = mounted.ref.current?.getUsj()?.content ?? [];
    expect(settled.map((item) => (typeof item === "string" ? item : item.marker))).toEqual([
      "id",
      "c",
      "p",
      "q1",
      "p",
    ]);
    return { ...mounted, context: settledPositionContext(mounted.lexical) };
  }

  /** The LAST paragraph retyped as `depart \q1 here`, so the document's last token is in the
   * pending scope and is a different token settled (`here`) than live (`depart \q1 here`). */
  async function lastParagraphPending() {
    const mounted = await mountStandardViewEditor(twoParaUsj(["first"]));
    await typeOver(mounted.lexical, "depart here", "depart \\q1 here");
    expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);
    const settled = mounted.ref.current?.getUsj()?.content ?? [];
    expect(settled[settled.length - 1]).toMatchObject({ marker: "q1", content: ["here"] });
    return { ...mounted, context: settledPositionContext(mounted.lexical) };
  }

  it("reports a root caret in front of a block after the pending one at the block's settled index", async () => {
    const { lexical } = await splitPending();

    const location = lexical
      .getEditorState()
      .read(() =>
        $settledLocationFromLivePoint(
          $prepareSettleScopes(settledPositionContext(lexical)),
          $getRoot(),
          3,
        ),
      );

    expect(location).toEqual({ jsonPath: "$.content[4]" });
  });

  it("reports the document end on the SETTLED last token when the last paragraph is pending", async () => {
    const { lexical, context } = await lastParagraphPending();

    const location = lexical.getEditorState().read(() => {
      const root = $getRoot();
      return $settledLocationFromLivePoint(
        $prepareSettleScopes(context),
        root,
        root.getChildrenSize(),
      );
    });

    // Rule 3 on the settled document's last token: `here`, one past its newline.
    expect(location).toEqual({ jsonPath: "$.content[4].content[0]", offset: "here".length + 1 });
  });

  it("resolves the SETTLED document end to the live document end when the last paragraph is pending", async () => {
    const { lexical, context } = await lastParagraphPending();

    const [point, rootKey, rootSize] = lexical.getEditorState().read(() => {
      const root = $getRoot();
      return [
        $livePointFromSettledLocation(context, $prepareSettleScopes(context), {
          jsonPath: "$.content[4].content[0]",
          offset: "here".length + 1,
        }),
        root.getKey(),
        root.getChildrenSize(),
      ] as const;
    });

    expect(point).toEqual({ key: rootKey, offset: rootSize, type: "element" });
  });

  it.each<[string, UsjDocumentLocation, UsjDocumentLocation]>([
    // Settled 4 is the paragraph after the split, which is live 3.
    ["a block after the pending one", { jsonPath: "$", offset: 4 }, { jsonPath: "$.content[3]" }],
    // Settled 5 is the settled item count: the document end.
    [
      "the document end",
      { jsonPath: "$", offset: 5 },
      { jsonPath: "$.content[3].content[0]", offset: "depart here".length + 1 },
    ],
  ])(
    "translates the older root-and-index spelling of %s like any top-level index",
    async (_name, settled, live) => {
      const { lexical, context } = await splitPending();

      const reported = lexical.getEditorState().read(() => {
        const prepared = $prepareSettleScopes(context);
        const point = $livePointFromSettledLocation(context, prepared, settled);
        const node = point && $getNodeByKey(point.key);
        // What setSelection and setAnnotation resolve: the translated location, in the live tree.
        const translated = $liveSelectionFromSettled(context, prepared, { start: settled });
        const range = translated && $getRangeFromUsjSelection(translated, prepared.viewOptions);
        return [
          node && $getLocationFromNode(node, point.offset, prepared.viewOptions),
          range &&
            $getLocationFromNode(range.anchor.getNode(), range.anchor.offset, prepared.viewOptions),
        ];
      });

      expect(reported).toEqual([live, live]);
    },
  );
});
