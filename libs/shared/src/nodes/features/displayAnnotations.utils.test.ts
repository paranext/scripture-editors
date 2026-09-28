import { $createAttributeRunNode } from "../usj/AttributeRunNode.js";
import { usjBaseNodes } from "../usj/index.js";
import { $createMilestoneNode } from "../usj/MilestoneNode.js";
import { NBSP } from "../usj/node-constants.js";
import { $createMarkerTrailingSeparator } from "../usj/node.utils.js";
import { getVisibleOpenMarkerText } from "../usj/markerText.utils.js";
import { $createParaNode } from "../usj/ParaNode.js";
import { createBasicTestEnvironment } from "../usj/test.utils.js";
import { $createVerseNode } from "../usj/VerseNode.js";
import { textTypeState } from "../collab/delta.state.js";
import { displayAnnotationsState, mapRangeThroughEdit } from "./displayAnnotations.state.js";
import {
  $addDisplayAnnotation,
  $coveredDisplayText,
  $displayAnnotationIdsAt,
  $displayAnnotationsOf,
  $isDisplayAnnotationCarrier,
  $registerDisplayAnnotation,
  $removeDisplayAnnotation,
  deleteDisplayAnnotationRegistration,
  getDisplayAnnotationRegistration,
  registerDisplayAnnotationBasis,
} from "./displayAnnotations.utils.js";
import { $createImmutableTypedTextNode } from "./ImmutableTypedTextNode.js";
import { $createMarkerNode } from "./MarkerNode.js";
import { TypedMarkNode } from "./TypedMarkNode.js";
import { $createTextNode, $getRoot, $getState, $setState, TextNode } from "lexical";
import { vi } from "vitest";

describe("mapRangeThroughEdit", () => {
  it.each<[string, string, number, number, [number, number] | undefined]>([
    // typing strictly inside a range grows it
    ["abcdef", "abcXdef", 1, 5, [1, 6]],
    // typing at a range's front edge stays outside it
    ["abcdef", "abcXdef", 3, 6, [4, 7]],
    // typing at a range's back edge stays outside it
    ["abcdef", "abcXdef", 0, 3, [0, 3]],
    // a range whose bytes are all deleted is dropped
    ["abcdef", "abef", 2, 4, undefined],
    // a range that loses some bytes keeps the ones it still has
    ["abcdef", "abef", 1, 5, [1, 3]],
    // the head and the tail of a split each keep their own bytes
    ["abcdef", "abc", 1, 5, [1, 3]],
    ["abcdef", "def", 1, 5, [0, 2]],
    ["abcdef", "cd", 0, 6, [0, 2]],
    // a re-spelling keeps the bytes it re-spells, in both directions
    ["|grace", '|lemma="grace"', 1, 6, [8, 13]],
    ['|lemma="grace"', "|grace", 8, 13, [1, 6]],
    // bytes a re-spelling discards: dropped, never moved onto the bytes around them
    ['|lemma="grace"', "|grace", 1, 8, undefined],
    // kept and discarded bytes together: the kept ones stay
    ['|lemma="grace"', "|grace", 0, 10, [0, 3]],
    // a replaced value is dropped, never moved onto its replacement
    [`${NBSP}3`, `${NBSP}4`, 1, 2, undefined],
    // an attribute the re-spelling moves keeps its value
    ['|lemma="a" strong="G5485" lemma="b"', '|lemma="b" strong="G5485"', 19, 24, [19, 24]],
  ])("%j -> %j maps [%i, %i) to %j", (before, after, start, end, expected) => {
    expect(mapRangeThroughEdit(before, after, start, end)).toEqual(expected);
  });
});

describe("$isDisplayAnnotationCarrier", () => {
  it("names the nodes that spell display bytes, and neither separators nor content", () => {
    const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
    editor.update(
      () => {
        const separator = $createMarkerTrailingSeparator();
        const content = $createTextNode("grace");
        const glyph = $createMarkerNode("nd");
        const run = $setState($createTextNode("|grace"), textTypeState, "attribute");
        const verse = $createVerseNode("2", getVisibleOpenMarkerText("v", "2"));
        const milestone = $createMilestoneNode("qt-s");
        const wrapper = $createAttributeRunNode("milestone");
        const readOnlyGlyph = $createImmutableTypedTextNode("marker", "\\nd");
        $getRoot().append(
          $createParaNode().append(
            separator,
            content,
            glyph,
            run,
            verse,
            milestone,
            wrapper,
            readOnlyGlyph,
          ),
        );
        expect([glyph, run, verse, readOnlyGlyph].map($isDisplayAnnotationCarrier)).toEqual([
          true,
          true,
          true,
          true,
        ]);
        expect([separator, content, milestone, wrapper].map($isDisplayAnnotationCarrier)).toEqual([
          false,
          false,
          false,
          false,
        ]);
      },
      { discrete: true },
    );
  });
});

describe("annotations held on a carrier", () => {
  function $run(text = "|grace"): TextNode {
    const run = $setState($createTextNode(text), textTypeState, "attribute");
    $getRoot().append($createParaNode().append(run));
    return run;
  }

  it("merges an overlapping range of the same annotation and keeps other annotations apart", () => {
    const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
    editor.update(
      () => {
        const run = $run();
        $addDisplayAnnotation(run, "spelling", "a", 1, 3);
        $addDisplayAnnotation(run, "spelling", "a", 2, 6);
        $addDisplayAnnotation(run, "grammar", "b", 0, 1);
        expect($displayAnnotationsOf(run)).toEqual([
          { type: "spelling", id: "a", start: 1, end: 6 },
          { type: "grammar", id: "b", start: 0, end: 1 },
        ]);
        expect($displayAnnotationIdsAt(run, "spelling", 4)).toEqual(["a"]);
        expect($displayAnnotationIdsAt(run, "grammar", 4)).toEqual([]);
      },
      { discrete: true },
    );
  });

  it("reads every range against the carrier's current text", () => {
    const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
    editor.update(
      () => {
        const run = $run("|grace");
        $addDisplayAnnotation(run, "spelling", "a", 1, 6);
        run.setTextContent('|lemma="grace"');
        const [annotation] = $displayAnnotationsOf(run);
        expect($coveredDisplayText(run, annotation)).toBe("grace");
      },
      { discrete: true },
    );
  });

  it("drops a range whose bytes were all replaced", () => {
    const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
    editor.update(
      () => {
        const run = $run(`${NBSP}3`);
        $addDisplayAnnotation(run, "spelling", "a", 1, 2);
        run.setTextContent(`${NBSP}4`);
        expect($displayAnnotationsOf(run)).toEqual([]);
      },
      { discrete: true },
    );
  });

  it("removes one annotation and leaves the others", () => {
    const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
    editor.update(
      () => {
        const run = $run();
        $addDisplayAnnotation(run, "spelling", "a", 1, 3);
        $addDisplayAnnotation(run, "spelling", "b", 1, 3);
        expect($removeDisplayAnnotation(run, "spelling", "a")).toBe(true);
        expect($removeDisplayAnnotation(run, "spelling", "a")).toBe(false);
        expect($displayAnnotationsOf(run).map((annotation) => annotation.id)).toEqual(["b"]);
      },
      { discrete: true },
    );
  });

  it("holds a decorator's annotation as the whole node", () => {
    const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
    editor.update(
      () => {
        const glyph = $createImmutableTypedTextNode("marker", "\\nd");
        $getRoot().append($createParaNode().append(glyph));
        $addDisplayAnnotation(glyph, "spelling", "a", 0, 0);
        expect($displayAnnotationsOf(glyph)).toEqual([
          { type: "spelling", id: "a", start: 0, end: 0 },
        ]);
        expect($coveredDisplayText(glyph, $displayAnnotationsOf(glyph)[0])).toBe("\\nd");
      },
      { discrete: true },
    );
  });
});

describe("display-annotation registration", () => {
  it("is kept per editor, remembers a mark once seen, and can be forgotten", () => {
    const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
    const onRemove = vi.fn();
    editor.update(
      () => {
        $registerDisplayAnnotation("spelling", "a", { onRemove }, false);
        $registerDisplayAnnotation("spelling", "a", {}, true);
        $registerDisplayAnnotation("spelling", "a", {}, false);
      },
      { discrete: true },
    );
    expect(getDisplayAnnotationRegistration(editor, "spelling", "a")).toEqual({
      onRemove,
      hadMarks: true,
    });
    const { editor: other } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
    expect(getDisplayAnnotationRegistration(other, "spelling", "a")).toBeUndefined();
    deleteDisplayAnnotationRegistration(editor, "spelling", "a");
    expect(getDisplayAnnotationRegistration(editor, "spelling", "a")).toBeUndefined();
  });
});

describe("registerDisplayAnnotationBasis", () => {
  it("re-measures a carrier's ranges when its text changes, so they follow their bytes", () => {
    const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
    const unregister = registerDisplayAnnotationBasis(editor);
    let run!: TextNode;
    editor.update(
      () => {
        run = $setState($createTextNode("|grace"), textTypeState, "attribute");
        $getRoot().append($createParaNode().append(run));
        $addDisplayAnnotation(run, "spelling", "a", 1, 6);
      },
      { discrete: true },
    );
    editor.update(() => run.getLatest().setTextContent('|lemma="grace"'), { discrete: true });

    editor.getEditorState().read(() => {
      expect($getState(run.getLatest(), displayAnnotationsState)).toEqual({
        basis: '|lemma="grace"',
        annotations: [{ type: "spelling", id: "a", start: 8, end: 13 }],
      });
    });
    // And back: the re-spelling the settle writes keeps the value's bytes, so the range follows.
    editor.update(() => run.getLatest().setTextContent("|grace"), { discrete: true });
    editor.getEditorState().read(() => {
      expect($getState(run.getLatest(), displayAnnotationsState)).toEqual({
        basis: "|grace",
        annotations: [{ type: "spelling", id: "a", start: 1, end: 6 }],
      });
    });
    unregister();
  });

  it("drops a range whose bytes were all replaced", () => {
    const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
    const unregister = registerDisplayAnnotationBasis(editor);
    let value!: TextNode;
    editor.update(
      () => {
        value = $setState($createTextNode(`${NBSP}3`), textTypeState, "attribute");
        $getRoot().append($createParaNode().append(value));
        $addDisplayAnnotation(value, "spelling", "a", 1, 2);
      },
      { discrete: true },
    );
    editor.update(() => value.getLatest().setTextContent(`${NBSP}4`), { discrete: true });

    editor.getEditorState().read(() => {
      expect($getState(value.getLatest(), displayAnnotationsState)).toBeUndefined();
    });
    unregister();
  });

  it("re-measures a marker glyph and a verse too", () => {
    const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
    const unregister = registerDisplayAnnotationBasis(editor);
    const verseText = getVisibleOpenMarkerText("v", "2");
    let glyph!: TextNode;
    let verse!: TextNode;
    editor.update(
      () => {
        glyph = $createMarkerNode("nd");
        verse = $createVerseNode("2", verseText);
        $getRoot().append($createParaNode().append(glyph, verse));
        $addDisplayAnnotation(glyph, "spelling", "a", 1, 3);
        $addDisplayAnnotation(verse, "spelling", "b", 3, 4);
      },
      { discrete: true },
    );
    editor.update(
      () => {
        glyph.getLatest().setTextContent("\\ndx");
        // `1` typed in front of the annotated `2`: at the range's front edge, so outside it.
        verse.getLatest().setTextContent(`${verseText.slice(0, 3)}1${verseText.slice(3)}`);
      },
      { discrete: true },
    );

    editor.getEditorState().read(() => {
      expect($getState(glyph.getLatest(), displayAnnotationsState)?.annotations).toEqual([
        { type: "spelling", id: "a", start: 1, end: 3 },
      ]);
      expect($getState(verse.getLatest(), displayAnnotationsState)?.annotations).toEqual([
        { type: "spelling", id: "b", start: 4, end: 5 },
      ]);
    });
    unregister();
  });
});
