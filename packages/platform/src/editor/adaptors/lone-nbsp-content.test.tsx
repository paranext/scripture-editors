/**
 * A content string that is exactly one no-break space (USFM `~`) against the engine's own lone-NBSP
 * text nodes (separators, spacers, the empty span's placeholder). The editor→USJ conversion has to
 * keep the first and drop the second, in every view — outside Standard view there is no `~`
 * display mapping to tell them apart by bytes, so position and the forward adaptor's tag decide.
 */
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { createBasicTestEnvironment } from "../../../../../libs/shared/src/nodes/usj/test.utils";
import { ROUND_TRIP_VIEW_CONFIGS } from "../editorViews.test-helpers";
import editorUsjAdaptor, { initialize as initializeDeserialize } from "./editor-usj.adaptor";
import {
  initialize as initializeSerialize,
  reset,
  serializeEditorState,
} from "./usj-editor.adaptor";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { $createTextNode, $getRoot, LexicalNode } from "lexical";
import {
  $createCharNode,
  $createMarkerNode,
  $createMarkerTrailingSeparator,
  $createNoteNode,
  $createParaNode,
  NBSP,
  TypedMarkNode,
} from "shared";
import {
  $createImmutableNoteCallerNode,
  FORMATTED_VIEW_MODE,
  getViewOptions,
  UNFORMATTED_VIEW_MODE,
  usjReactNodes,
  ViewOptions,
} from "shared-react";

const nodes = [TypedMarkNode, ...usjReactNodes];

/** Every round-trip view, plus markerMode "visible" (read-only glyphs around a span's content). */
const VIEWS: { label: string; viewOptions: ViewOptions | undefined }[] = [
  ...ROUND_TRIP_VIEW_CONFIGS,
  {
    label: "visible",
    viewOptions: {
      markerMode: "visible",
      noteMode: "collapsed",
      hasSpacing: true,
      isFormattedFont: true,
    },
  },
];

function usjOf(...content: MarkerContent[]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [{ type: "para", marker: "p", content } as MarkerObject],
  };
}

const ft = (text: string): MarkerObject => ({ type: "char", marker: "ft", content: [text] });

/** Authored shapes whose content includes a string that is exactly one NBSP. */
const AUTHORED: { name: string; usj: Usj }[] = [
  {
    name: "a char span whose whole content is `~`",
    usj: usjOf("a ", { type: "char", marker: "nd", content: [NBSP] }, " b"),
  },
  {
    name: "a char span's `~` before a nested span",
    usj: usjOf({
      type: "char",
      marker: "nd",
      content: [NBSP, { type: "char", marker: "w", content: ["x"] }],
    }),
  },
  {
    name: "a nested span whose whole content is `~`",
    usj: usjOf({
      type: "char",
      marker: "nd",
      content: ["x", { type: "char", marker: "w", content: [NBSP] }],
    }),
  },
  {
    name: "a char span's `~` after a nested span",
    usj: usjOf({
      type: "char",
      marker: "nd",
      content: [{ type: "char", marker: "w", content: ["x"] }, NBSP],
    }),
  },
  { name: "a paragraph whose whole content is `~`", usj: usjOf(NBSP) },
  {
    name: "a paragraph-leading `~` before a verse",
    usj: usjOf(NBSP, { type: "verse", marker: "v", number: "1" }, "in the days"),
  },
  {
    name: "a `~` between two char spans",
    usj: usjOf({ type: "char", marker: "w", content: ["a"] }, NBSP, {
      type: "char",
      marker: "w",
      content: ["b"],
    }),
  },
  {
    name: "a `~` between a note and a verse",
    usj: usjOf(
      "a",
      { type: "note", marker: "f", caller: "+", content: [ft("x")] },
      NBSP,
      { type: "verse", marker: "v", number: "2" },
      "b",
    ),
  },
  {
    name: "a `~` directly inside a note, between its spans",
    usj: usjOf("a", { type: "note", marker: "f", caller: "+", content: [ft("x"), NBSP, ft("y")] }),
  },
  {
    name: "a note whose whole content is `~`",
    usj: usjOf("a", { type: "note", marker: "f", caller: "+", content: [NBSP] }),
  },
];

/** Shapes with no lone-NBSP content, whose engine-made lone NBSPs must never be saved. */
const STRUCTURAL: { name: string; usj: Usj }[] = [
  { name: "an empty char span", usj: usjOf("a ", { type: "char", marker: "nd" }, " b") },
  {
    name: "an empty nested span",
    usj: usjOf({ type: "char", marker: "nd", content: ["x", { type: "char", marker: "w" }] }),
  },
  {
    name: "a char span that starts with a nested span",
    usj: usjOf({
      type: "char",
      marker: "nd",
      content: [{ type: "char", marker: "w", content: ["x"] }, "y"],
    }),
  },
  {
    name: "a note made of spans",
    usj: usjOf("a", { type: "note", marker: "f", caller: "+", content: [ft("x"), ft("y")] }),
  },
];

function roundTrip(usj: Usj, viewOptions: ViewOptions | undefined): Usj | undefined {
  reset();
  initializeSerialize(undefined, undefined);
  initializeDeserialize(undefined);
  const { editor } = createBasicTestEnvironment(nodes);
  const editorState = editor.parseEditorState(serializeEditorState(usj, viewOptions));
  return editorUsjAdaptor.deserializeEditorState(editorState, viewOptions);
}

describe("lone-NBSP content", () => {
  it.each(VIEWS.flatMap((view) => AUTHORED.map((shape) => ({ ...shape, ...view }))))(
    "keeps $name ($label)",
    ({ usj, viewOptions }) => {
      expect(roundTrip(usj, viewOptions)).toEqual(usj);
    },
  );

  it.each(VIEWS.flatMap((view) => STRUCTURAL.map((shape) => ({ ...shape, ...view }))))(
    "saves $name without an NBSP ($label)",
    ({ usj, viewOptions }) => {
      expect(roundTrip(usj, viewOptions)).toEqual(usj);
    },
  );
});

/** The paragraph content `$build`'s tree saves as in `view`. */
function savedParaContent(view: string, $build: () => LexicalNode): MarkerContent[] | undefined {
  initializeDeserialize(undefined);
  const { editor } = createBasicTestEnvironment(nodes);
  editor.update(() => $getRoot().append($createParaNode("p").append($build())), {
    discrete: true,
  });
  const usj = editorUsjAdaptor.deserializeEditorState(
    editor.getEditorState(),
    getViewOptions(view),
  );
  return (usj?.content?.[0] as MarkerObject).content;
}

/** A text that a neighbouring plain text cannot merge into. */
function $unmergeable(text: string): LexicalNode {
  return $createTextNode(text).toggleFormat("bold");
}

describe("lone NBSPs the engine strands", () => {
  it("drops a placeholder the span gained while edited (formatted)", () => {
    expect(
      savedParaContent(FORMATTED_VIEW_MODE, () =>
        $createCharNode("nd").append($createTextNode(NBSP)),
      ),
    ).toEqual([{ type: "char", marker: "nd" }]);
  });

  it("drops a separator a split left on its own after the opening glyph (unformatted)", () => {
    expect(
      savedParaContent(UNFORMATTED_VIEW_MODE, () =>
        $createCharNode("nd").append(
          $createMarkerNode("nd"),
          $createTextNode(NBSP),
          $unmergeable("abc"),
          $createMarkerNode("nd", "closing"),
        ),
      ),
    ).toEqual([{ type: "char", marker: "nd", content: ["abc"] }]);
  });

  it("drops the spacer that leads a span whose opening glyph was deleted (unformatted)", () => {
    expect(
      savedParaContent(UNFORMATTED_VIEW_MODE, () =>
        $createCharNode("nd").append(
          $createTextNode(NBSP),
          $createCharNode("w").append(
            $createMarkerNode("w"),
            $createTextNode(`${NBSP}x`),
            $createMarkerNode("w", "closing"),
          ),
          $createMarkerNode("nd", "closing"),
        ),
      ),
    ).toEqual([
      { type: "char", marker: "nd", content: [{ type: "char", marker: "w", content: ["x"] }] },
    ]);
  });

  it("drops a paragraph separator that lost its tag (unformatted)", () => {
    initializeDeserialize(undefined);
    const { editor } = createBasicTestEnvironment(nodes);
    editor.update(
      () =>
        $getRoot().append(
          $createParaNode("p").append(
            $createMarkerNode("p"),
            $createTextNode(NBSP),
            $unmergeable("text"),
          ),
        ),
      { discrete: true },
    );
    const usj = editorUsjAdaptor.deserializeEditorState(
      editor.getEditorState(),
      getViewOptions(UNFORMATTED_VIEW_MODE),
    );
    expect((usj?.content?.[0] as MarkerObject).content).toEqual(["text"]);
  });

  it.each([
    {
      name: "after the caller",
      $children: () => [$createTextNode(NBSP), $createCharNode("ft").append($createTextNode("x"))],
    },
    {
      name: "after a span",
      $children: () => [
        $createMarkerTrailingSeparator(),
        $createCharNode("ft").append($createTextNode("x")),
        $createTextNode(NBSP),
      ],
    },
  ])("drops a collapsed note's untagged separator $name (formatted)", ({ $children }) => {
    expect(
      savedParaContent(FORMATTED_VIEW_MODE, () =>
        $createNoteNode("f", "+", true).append($createImmutableNoteCallerNode("+"), ...$children()),
      ),
    ).toEqual([
      {
        type: "note",
        marker: "f",
        caller: "+",
        content: [{ type: "char", marker: "ft", content: ["x"] }],
      },
    ]);
  });
});
