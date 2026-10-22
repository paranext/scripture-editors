/**
 * Which USJ node a display byte belongs to, on trees the real USJ→editor adaptor builds: a closing
 * glyph that follows an element (`\f*` after a note's last `\ft`, `\wj*` after a nested `\+nd*`),
 * the `|` that opens a char span's attribute run, and a collapsed note's caller decorator.
 */
import { serializedState } from "../markerEdit/markerEdit.test-helpers";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import {
  $getRoot,
  $getState,
  $isElementNode,
  $isTextNode,
  LexicalEditor,
  LexicalNode,
} from "lexical";
import {
  $isCharNode,
  $isMarkerNode,
  $isMilestoneNode,
  $isNoteNode,
  $isVisibleMarkerNode,
  textTypeState,
  TypedMarkNode,
} from "shared";
import {
  $getLocationFromNode,
  $getNodeFromLocation,
  $getRangeFromUsjSelection,
  getViewOptions,
  PARAGRAPH_STRUCTURE_VIEW_MODE,
  STANDARD_VIEW_MODE,
  usjReactNodes,
  ViewOptions,
} from "shared-react";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { createBasicTestEnvironment } from "../../../../../libs/shared/src/nodes/usj/test.utils";

const standard = getViewOptions(STANDARD_VIEW_MODE) as ViewOptions;
/** The footnote editor's shape: Standard view with the note expanded inline. */
const standardExpanded: ViewOptions = { ...standard, noteMode: "expanded" };
/** paranext-core's non-power Markers view. */
const markersHidden: ViewOptions = {
  ...(getViewOptions(PARAGRAPH_STRUCTURE_VIEW_MODE) as ViewOptions),
  noteMode: "expanded",
};
/** paranext-core's power Markers view: read-only glyph decorators. */
const markersVisible: ViewOptions = {
  ...(getViewOptions() as ViewOptions),
  markerMode: "visible",
  noteMode: "expanded",
};

function doc(content: NonNullable<Usj["content"]>): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
      { type: "chapter", marker: "c", number: "1" },
      { type: "para", marker: "p", content },
    ],
  } as Usj;
}

function load(usj: Usj, options: ViewOptions): LexicalEditor {
  const { editor } = createBasicTestEnvironment([TypedMarkNode, ...usjReactNodes]);
  editor.setEditorState(editor.parseEditorState(serializedState(usj, options)));
  return editor;
}

function $all(nodes: LexicalNode[] = $getRoot().getChildren()): LexicalNode[] {
  return nodes.flatMap((node) => [node, ...($isElementNode(node) ? $all(node.getChildren()) : [])]);
}

/** The closing glyph that is a direct child of the first node `isOwner` matches. */
function $closingGlyphOf(isOwner: (node: LexicalNode) => boolean): LexicalNode {
  const owner = $all().find(isOwner);
  if (!$isElementNode(owner)) throw new Error("expected an element owner");
  const glyph = owner
    .getChildren()
    .find(
      (child) =>
        ($isMarkerNode(child) && child.getMarkerSyntax() === "closing") ||
        ($isVisibleMarkerNode(child) && child.getTextContent().endsWith("*")),
    );
  if (!glyph) throw new Error("expected a closing glyph");
  return glyph;
}

/** The element boundary directly in front of `node`. */
function $boundaryBefore(node: LexicalNode, options: ViewOptions) {
  const parent = node.getParent();
  if (!parent) throw new Error("expected a parent");
  return $getLocationFromNode(parent, node.getIndexWithinParent(), options);
}

// \p \v 1 text \f + \fr 1.1: \ft Some footnote text.\f* after \wj character \+nd Lord\+nd*\wj* end
// \qt-s |sid="q1"\*
const glyphUsj = doc([
  { type: "verse", marker: "v", number: "1" },
  "text ",
  {
    type: "note",
    marker: "f",
    caller: "+",
    content: [
      { type: "char", marker: "fr", content: ["1.1: "], closed: "false" },
      { type: "char", marker: "ft", content: ["Some footnote text."], closed: "false" },
    ],
  },
  " after ",
  {
    type: "char",
    marker: "wj",
    content: ["character ", { type: "char", marker: "nd", content: ["Lord"] }],
  },
  " end ",
  { type: "ms", marker: "qt-s", sid: "q1" },
] as NonNullable<Usj["content"]>);
const notePath = "$.content[2].content[2]";
const wjPath = "$.content[2].content[4]";
const ndPath = "$.content[2].content[4].content[1]";
const msPath = "$.content[2].content[6]";

const $noteCloser = () => $closingGlyphOf($isNoteNode);
const $wjCloser = () => $closingGlyphOf((node) => $isCharNode(node) && node.getMarker() === "wj");
const $ndCloser = () => $closingGlyphOf((node) => $isCharNode(node) && node.getMarker() === "nd");

describe.each([
  { name: "collapsed", options: standard },
  { name: "expanded", options: standardExpanded },
])("a note's `\\f*` after its last char span (Standard view, $name)", ({ options }) => {
  it("names the note's closing marker, not the char span before it", () => {
    const editor = load(glyphUsj, options);
    const locations = editor
      .getEditorState()
      .read(() => [0, 1, 2].map((offset) => $getLocationFromNode($noteCloser(), offset, options)));
    expect(locations).toEqual(
      [0, 1, 2].map((offset) => ({
        jsonPath: notePath,
        closingMarkerOffset: offset,
      })),
    );
  });

  it("resolves the note's closing marker to `\\f*` at the same offset", () => {
    const editor = load(glyphUsj, options);
    const landsInCloser = editor.getEditorState().read(() =>
      [0, 1, 2].map((offset) => {
        const [node, nodeOffset] = $getNodeFromLocation(
          { jsonPath: notePath, closingMarkerOffset: offset },
          options,
        );
        return !!node?.is($noteCloser()) && nodeOffset === offset;
      }),
    );
    expect(landsInCloser).toEqual([true, true, true]);
  });
});

describe("a `\\wj*` after a nested `\\+nd*` (Standard view)", () => {
  it("names the wj span's closing marker and round-trips to `\\wj*`", () => {
    const editor = load(glyphUsj, standard);
    const result = editor.getEditorState().read(() => {
      const glyph = $wjCloser();
      const location = $getLocationFromNode(glyph, 2, standard);
      const [node, offset] = $getNodeFromLocation(location, standard);
      return { location, roundTrips: !!node?.is(glyph) && offset === 2 };
    });
    expect(result).toEqual({
      location: { jsonPath: wjPath, closingMarkerOffset: 2 },
      roundTrips: true,
    });
  });

  it("resolves the wj span's closing marker offset 0 to the start of `\\wj*`", () => {
    const editor = load(glyphUsj, standard);
    const landsAtStart = editor.getEditorState().read(() => {
      const [node, offset] = $getNodeFromLocation(
        { jsonPath: wjPath, closingMarkerOffset: 0 },
        standard,
      );
      return !!node?.is($wjCloser()) && offset === 0;
    });
    expect(landsAtStart).toBe(true);
  });

  it("still resolves the nested span's own `\\+nd*`", () => {
    const editor = load(glyphUsj, standard);
    const landsInNdCloser = editor.getEditorState().read(() => {
      const [node, offset] = $getNodeFromLocation(
        { jsonPath: ndPath, closingMarkerOffset: 1 },
        standard,
      );
      return !!node?.is($ndCloser()) && offset === 1;
    });
    expect(landsInNdCloser).toBe(true);
  });
});

describe("read-only glyph decorators (power Markers view)", () => {
  it("names the owner of the closer in front of each decorator boundary", () => {
    const editor = load(glyphUsj, markersVisible);
    const locations = editor.getEditorState().read(() => ({
      note: $boundaryBefore($noteCloser(), markersVisible),
      wj: $boundaryBefore($wjCloser(), markersVisible),
    }));
    expect(locations).toEqual({
      note: { jsonPath: notePath, closingMarkerOffset: 0 },
      wj: { jsonPath: wjPath, closingMarkerOffset: 0 },
    });
  });

  it("gives a milestone's loose `\\*` to the milestone it follows", () => {
    const editor = load(glyphUsj, markersVisible);
    const location = editor.getEditorState().read(() => {
      if (!$all().some($isMilestoneNode)) throw new Error("expected a milestone");
      const closer = $all().find(
        (node) => $isVisibleMarkerNode(node) && node.getTextContent() === "\\*",
      );
      if (!closer) throw new Error("expected a visible `\\*`");
      return $boundaryBefore(closer, markersVisible);
    });
    expect(location).toEqual({ jsonPath: msPath, closingMarkerOffset: 0 });
  });
});

describe("the `|` opening a char span's attribute run after a nested span (Standard view)", () => {
  const $attributeRun = () => {
    const run = $all().find(
      (node) => $isTextNode(node) && $getState(node, textTypeState) === "attribute",
    );
    if (!run) throw new Error("expected an attribute run");
    return run;
  };

  it("snaps to the end of the nested span's closer when text precedes the nested span", () => {
    // \w grace \+nd Lord\+nd*|lemma="x"\w*
    const editor = load(
      doc([
        {
          type: "char",
          marker: "w",
          lemma: "x",
          content: ["grace ", { type: "char", marker: "nd", content: ["Lord"] }],
        } as never,
      ]),
      standard,
    );
    const location = editor
      .getEditorState()
      .read(() => $getLocationFromNode($attributeRun(), 0, standard));
    expect(location).toEqual({
      jsonPath: "$.content[2].content[0].content[1]",
      closingMarkerOffset: 5,
    });
  });

  it("snaps to the end of the nested span's closer when nothing precedes the nested span", () => {
    // \w \+nd Lord\+nd*|lemma="x"\w*
    const editor = load(
      doc([
        {
          type: "char",
          marker: "w",
          lemma: "x",
          content: [{ type: "char", marker: "nd", content: ["Lord"] }],
        } as never,
      ]),
      standard,
    );
    const location = editor
      .getEditorState()
      .read(() => $getLocationFromNode($attributeRun(), 0, standard));
    expect(location).toEqual({
      jsonPath: "$.content[2].content[0].content[0]",
      closingMarkerOffset: 5,
    });
  });
});

describe.each([
  { name: "Standard view (collapsed notes)", options: standard },
  { name: "Markers view (hidden markers)", options: markersHidden },
  { name: "Markers view (visible markers)", options: markersVisible },
])("a range over a note's caller value ($name)", ({ options }) => {
  // \p text \f + \ft note text.\f* after
  const notePath = "$.content[2].content[1]";
  const callerAt = (propertyOffset: number) =>
    ({ jsonPath: `${notePath}['caller']`, propertyOffset }) as const;

  it("resolves, and neither end lands in a marker glyph", () => {
    const editor = load(
      doc([
        "text ",
        {
          type: "note",
          marker: "f",
          caller: "+",
          content: [{ type: "char", marker: "ft", content: ["note text."], closed: "false" }],
        } as never,
        " after",
      ]),
      options,
    );
    const ends = editor.getEditorState().read(() => {
      const range = $getRangeFromUsjSelection({ start: callerAt(0), end: callerAt(1) }, options);
      return range && [range.anchor.getNode(), range.focus.getNode()].map((node) => node.getType());
    });
    expect(ends).toBeDefined();
    expect(ends).not.toContain("marker");
  });
});
