/**
 * `$wrapSelectionInTypedMarkNode()`: the bytes a wrap holds are exactly the bytes the range
 * names — split out on its own because of its size.
 */
import { $createCharNode, CharNode } from "../usj/CharNode.js";
import { NBSP } from "../usj/node-constants.js";
import { $createNoteNode, NoteNode } from "../usj/NoteNode.js";
import { $createMarkerTrailingSeparator } from "../usj/node.utils.js";
import { $createParaNode, ParaNode } from "../usj/ParaNode.js";
import { usjBaseNodes } from "../usj/index.js";
import { createBasicTestEnvironment } from "../usj/test.utils.js";
import type { DisplayAnnotation } from "./displayAnnotations.state.js";
import {
  $displayAnnotationsOf,
  getDisplayAnnotationRegistration,
} from "./displayAnnotations.utils.js";
import { $createImmutableTypedTextNode } from "./ImmutableTypedTextNode.js";
import { $createMarkerNode } from "./MarkerNode.js";
import { $isTypedMarkNode, TypedMarkNode } from "./TypedMarkNode.js";
import { $wrapSelectionInTypedMarkNode, TypedMarkWrapOptions } from "./typedMarkWrap.utils.js";
import {
  $createRangeSelection,
  $createTextNode,
  $getRoot,
  $isElementNode,
  LexicalNode,
  RangeSelection,
  TextNode,
} from "lexical";
import { vi } from "vitest";

const testType1 = "testType1";
const testID1 = "testID1";

describe("$wrapSelectionInTypedMarkNode() covers exactly the bytes the range names", () => {
  /** What `node` holds for testType1/testID1, as `[start, end]` pairs. */
  function $held(node: LexicalNode | null | undefined): [number, number][] {
    if (!node) throw new Error("expected a node");
    return $displayAnnotationsOf(node)
      .filter((annotation: DisplayAnnotation) => annotation.id === testID1)
      .map((annotation) => [annotation.start, annotation.end]);
  }

  /** The text of every `TypedMarkNode` under `root`, in document order. */
  function $markTextsIn(root: LexicalNode): string[] {
    const texts: string[] = [];
    const walk = (node: LexicalNode): void => {
      if ($isTypedMarkNode(node)) texts.push(node.getTextContent());
      if ($isElementNode(node)) node.getChildren().forEach(walk);
    };
    walk(root);
    return texts;
  }

  /** Whether any node under `root` holds testType1/testID1 as carrier state. */
  function $anythingHeld(root: LexicalNode): boolean {
    if ($held(root).length > 0) return true;
    return $isElementNode(root) && root.getChildren().some($anythingHeld);
  }

  /** The pieces of `In the \nd LORD\nd* God`. */
  interface NdSpan {
    para: ParaNode;
    before: TextNode;
    char: CharNode;
    opener: LexicalNode;
    content: TextNode;
    closer: LexicalNode;
    after: TextNode;
  }

  /** Builds `In the \nd LORD\nd* God`, wraps the range `select` sets, and returns the editor
   * and the pieces. */
  function wrapNd(select: (span: NdSpan, selection: RangeSelection) => void) {
    const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
    let span!: NdSpan;
    editor.update(
      () => {
        const before = $createTextNode("In the ");
        const opener = $createMarkerNode("nd");
        const content = $createTextNode(`${NBSP}LORD`);
        const closer = $createMarkerNode("nd", "closing");
        const char = $createCharNode("nd").append(opener, content, closer);
        const after = $createTextNode(" God");
        const para = $createParaNode().append(before, char, after);
        $getRoot().append(para);
        span = { para, before, char, opener, content, closer, after };
        const selection = $createRangeSelection();
        select(span, selection);
        $wrapSelectionInTypedMarkNode(selection, testType1, testID1);
      },
      { discrete: true },
    );
    return { editor, span };
  }

  it("leaves a span the range ends inside of in place, marking only its named text", () => {
    const { editor, span } = wrapNd(({ before, content }, selection) => {
      selection.anchor.set(before.getKey(), 3, "text");
      selection.focus.set(content.getKey(), 3, "text");
    });
    editor.getEditorState().read(() => {
      expect($markTextsIn($getRoot())).toEqual(["the ", "LO"]);
      expect(span.char.getParent()?.is(span.para)).toBe(true);
      expect($held(span.opener)).toEqual([[0, 3]]);
      expect($held(span.closer)).toEqual([]);
    });
  });

  it("leaves a span the range starts inside of in place, marking only its named text", () => {
    const { editor, span } = wrapNd(({ content, after }, selection) => {
      selection.anchor.set(content.getKey(), 3, "text");
      selection.focus.set(after.getKey(), 2, "text");
    });
    editor.getEditorState().read(() => {
      expect($markTextsIn($getRoot())).toEqual(["RD", " G"]);
      expect(span.char.getParent()?.is(span.para)).toBe(true);
      expect($held(span.closer)).toEqual([[0, 4]]);
      expect($held(span.opener)).toEqual([]);
    });
  });

  it("marks nothing for a range that ends at a span's start and so names no byte", () => {
    const { editor, span } = wrapNd(({ before, char }, selection) => {
      selection.anchor.set(before.getKey(), "In the ".length, "text");
      selection.focus.set(char.getKey(), 0, "element");
    });
    editor.getEditorState().read(() => {
      expect($markTextsIn($getRoot())).toEqual([]);
      expect(span.char.getParent()?.is(span.para)).toBe(true);
      expect($anythingHeld($getRoot())).toBe(false);
    });
  });

  it("moves a span the range covers whole into the mark, its separator with it", () => {
    const { editor, span } = wrapNd(({ before, after }, selection) => {
      selection.anchor.set(before.getKey(), 3, "text");
      selection.focus.set(after.getKey(), 2, "text");
    });
    editor.getEditorState().read(() => {
      const marks = span.para.getChildren().filter($isTypedMarkNode);
      expect(marks).toHaveLength(1);
      const children = marks[0].getChildren();
      expect(children.map((child) => child.getTextContent())).toEqual([
        "the ",
        `\\nd${NBSP}LORD\\nd*`,
        " G",
      ]);
      expect(children[1].is(span.char)).toBe(true);
      expect($held(span.opener)).toEqual([]);
      expect($held(span.closer)).toEqual([]);
    });
  });

  /** The pieces of `x \add a \+nd b\+nd* c\add* y`. */
  interface NestedSpan {
    para: ParaNode;
    before: TextNode;
    add: CharNode;
    addOpener: LexicalNode;
    first: TextNode;
    nested: CharNode;
    tail: TextNode;
    addCloser: LexicalNode;
  }

  /** Builds `x \add a \+nd b\+nd* c\add* y`, wraps the range `select` sets, and returns the
   * editor and the pieces. */
  function wrapNested(select: (span: NestedSpan, selection: RangeSelection) => void) {
    const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
    let span!: NestedSpan;
    editor.update(
      () => {
        const addOpener = $createMarkerNode("add");
        const addCloser = $createMarkerNode("add", "closing");
        const first = $createTextNode(`${NBSP}a `);
        const nested = $createCharNode("nd").append(
          $createMarkerNode("nd", "opening", true),
          $createTextNode(`${NBSP}b`),
          $createMarkerNode("nd", "closing", true),
        );
        const tail = $createTextNode(" c");
        const add = $createCharNode("add").append(addOpener, first, nested, tail, addCloser);
        const before = $createTextNode("x ");
        const para = $createParaNode().append(before, add, $createTextNode(" y"));
        $getRoot().append(para);
        span = { para, before, add, addOpener, first, nested, tail, addCloser };
        const selection = $createRangeSelection();
        select(span, selection);
        $wrapSelectionInTypedMarkNode(selection, testType1, testID1);
      },
      { discrete: true },
    );
    return { editor, span };
  }

  it("moves a nested span it covers whole, but not the span around it", () => {
    const { editor, span } = wrapNested(({ first, tail }, selection) => {
      selection.anchor.set(first.getKey(), 1, "text");
      selection.focus.set(tail.getKey(), 0, "text");
    });
    editor.getEditorState().read(() => {
      expect(span.add.getParent()?.is(span.para)).toBe(true);
      const marks = span.add.getChildren().filter($isTypedMarkNode);
      expect(marks).toHaveLength(1);
      const children = marks[0].getChildren();
      expect(children[0].getTextContent()).toBe("a ");
      expect(children[1]?.is(span.nested)).toBe(true);
      expect(children).toHaveLength(2);
      expect($held(span.addOpener)).toEqual([]);
      expect($held(span.addCloser)).toEqual([]);
      expect(span.tail.getParent()?.is(span.add)).toBe(true);
      expect($markTextsIn($getRoot())).toEqual([`a \\+nd${NBSP}b\\+nd*`]);
    });
  });

  it("moves a nested span it covers whole when it starts before the span around it", () => {
    const { editor, span } = wrapNested(({ before, tail }, selection) => {
      selection.anchor.set(before.getKey(), 1, "text");
      selection.focus.set(tail.getKey(), 0, "text");
    });
    editor.getEditorState().read(() => {
      expect(span.add.getParent()?.is(span.para)).toBe(true);
      expect($markTextsIn($getRoot())).toEqual([" ", `a \\+nd${NBSP}b\\+nd*`]);
      const inner = span.add.getChildren().filter($isTypedMarkNode);
      expect(inner).toHaveLength(1);
      expect(inner[0].getChildren()[1]?.is(span.nested)).toBe(true);
      expect($held(span.addOpener)).toEqual([[0, "\\add".length]]);
      expect($held(span.addCloser)).toEqual([]);
      expect(span.tail.getParent()?.is(span.add)).toBe(true);
    });
  });

  /** Wraps `x`, a note whose layout ends with a separator, ` after` from the start of `x` to
   * `end`; returns the marks' text and whether the note is still a child of the paragraph. */
  function wrapToNoteEnd(end: "separator end" | "after"): {
    marks: string[];
    noteInPlace: boolean;
  } {
    const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
    let para!: ParaNode;
    let note!: NoteNode;
    editor.update(
      () => {
        const x = $createTextNode("x");
        const separator = $createMarkerTrailingSeparator();
        note = $createNoteNode("f", "+", true).append($createTextNode("body"), separator);
        const after = $createTextNode(" after");
        para = $createParaNode().append(x, note, after);
        $getRoot().append(para);
        const selection = $createRangeSelection();
        selection.anchor.set(x.getKey(), 0, "text");
        if (end === "after") selection.focus.set(after.getKey(), 2, "text");
        else selection.focus.set(separator.getKey(), separator.getTextContentSize(), "text");
        $wrapSelectionInTypedMarkNode(selection, testType1, testID1);
      },
      { discrete: true },
    );
    return editor.getEditorState().read(() => ({
      marks: $markTextsIn($getRoot()),
      noteInPlace: note.getParent()?.is(para) ?? false,
    }));
  }

  it("leaves an element in place when its closing separator would end the mark", () => {
    expect(wrapToNoteEnd("separator end")).toEqual({
      marks: ["x", "body"],
      noteInPlace: true,
    });
  });

  it("moves an element ending in a separator whole when the range goes on past it", () => {
    expect(wrapToNoteEnd("after")).toEqual({
      marks: [`xbody${NBSP} a`],
      noteInPlace: false,
    });
  });

  it("reads an end point after the document's last block as the end of its last text", () => {
    const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
    editor.update(
      () => {
        const root = $getRoot();
        ["one", "two", "three", "four"].forEach((text) =>
          root.append($createParaNode().append($createTextNode(text))),
        );
        const last = $createTextNode("last");
        root.append($createParaNode().append(last));
        const selection = $createRangeSelection();
        selection.anchor.set(last.getKey(), 2, "text");
        selection.focus.set(root.getKey(), 5, "element");
        $wrapSelectionInTypedMarkNode(selection, testType1, testID1);
      },
      { discrete: true },
    );
    editor.getEditorState().read(() => {
      expect($markTextsIn($getRoot())).toEqual(["st"]);
    });
  });

  it("reads a start element point as the front of the child it names", () => {
    const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
    editor.update(
      () => {
        const done = $createTextNode(" done");
        const para = $createParaNode().append(
          $createTextNode("Then "),
          $createTextNode("said"),
          done,
        );
        $getRoot().append(para);
        // Backward: the focus is the document-order start.
        const selection = $createRangeSelection();
        selection.anchor.set(done.getKey(), 4, "text");
        selection.focus.set(para.getKey(), 2, "element");
        $wrapSelectionInTypedMarkNode(selection, testType1, testID1);
      },
      { discrete: true },
    );
    editor.getEditorState().read(() => {
      expect($markTextsIn($getRoot())).toEqual([" don"]);
    });
  });

  it("annotates nothing, and registers nothing, for a collapsed element point", () => {
    const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
    editor.update(
      () => {
        const root = $getRoot();
        root.append(
          $createParaNode().append(
            $createMarkerNode("p"),
            $createMarkerTrailingSeparator(),
            $createTextNode("text"),
          ),
        );
        const selection = $createRangeSelection();
        selection.anchor.set(root.getKey(), 0, "element");
        selection.focus.set(root.getKey(), 0, "element");
        $wrapSelectionInTypedMarkNode(selection, testType1, testID1, undefined, vi.fn());
      },
      { discrete: true },
    );
    editor.getEditorState().read(() => {
      expect($markTextsIn($getRoot())).toEqual([]);
      expect($anythingHeld($getRoot())).toBe(false);
    });
    expect(getDisplayAnnotationRegistration(editor, testType1, testID1)).toBeUndefined();
  });

  /** Builds `x`, a display-byte decorator, `y` in one paragraph, wraps the range `select`
   * sets, and returns what the decorator holds. */
  function wrapBesideDecorator(
    select: (
      pieces: { para: ParaNode; x: TextNode; y: TextNode },
      selection: RangeSelection,
    ) => void,
    glyph = "\\w*",
    options: TypedMarkWrapOptions | ((decorator: LexicalNode) => TypedMarkWrapOptions) = {},
  ): DisplayAnnotation[] {
    const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
    let decorator!: LexicalNode;
    editor.update(
      () => {
        const x = $createTextNode("x");
        decorator = $createImmutableTypedTextNode("marker", glyph);
        const y = $createTextNode("y");
        const para = $createParaNode().append(x, decorator, y);
        $getRoot().append(para);
        const selection = $createRangeSelection();
        select({ para, x, y }, selection);
        $wrapSelectionInTypedMarkNode(
          selection,
          testType1,
          testID1,
          undefined,
          undefined,
          undefined,
          undefined,
          typeof options === "function" ? options(decorator) : options,
        );
      },
      { discrete: true },
    );
    return editor
      .getEditorState()
      .read(() =>
        $displayAnnotationsOf(decorator).filter((annotation) => annotation.id === testID1),
      );
  }

  /** Selects from in front of the decorator to behind it. */
  const overDecorator = ({ para }: { para: ParaNode }, selection: RangeSelection) => {
    selection.anchor.set(para.getKey(), 1, "element");
    selection.focus.set(para.getKey(), 2, "element");
  };

  const at = (annotations: DisplayAnnotation[]) =>
    annotations.map(({ start, end, undisplayed }) => ({ start, end, undisplayed }));

  it("holds nothing on a decorator for a range collapsed in front of it", () => {
    expect(
      wrapBesideDecorator(({ para }, selection) => {
        selection.anchor.set(para.getKey(), 1, "element");
        selection.focus.set(para.getKey(), 1, "element");
      }),
    ).toEqual([]);
  });

  it("holds all a decorator the range passes over renders", () => {
    expect(at(wrapBesideDecorator(overDecorator))).toEqual([
      { start: 0, end: 3, undisplayed: undefined },
    ]);
  });

  it("never holds the space a decorator the range passes over ends in", () => {
    expect(at(wrapBesideDecorator(overDecorator, "\\p "))).toEqual([
      { start: 0, end: 2, undisplayed: undefined },
    ]);
  });

  it("holds the part of a decorator the range ends inside of", () => {
    const holds = (decorator: LexicalNode) => ({
      decoratorHolds: new Map([[decorator.getKey(), { start: 1, end: 3 }]]),
    });
    expect(at(wrapBesideDecorator(overDecorator, "\\w*", holds))).toEqual([
      { start: 1, end: 3, undisplayed: undefined },
    ]);
  });

  it("holds a decorator, undisplayed, for a range naming only bytes it does not show", () => {
    const holds = (decorator: LexicalNode) => ({
      decoratorHolds: new Map([[decorator.getKey(), { start: 2, end: 2 }]]),
    });
    expect(at(wrapBesideDecorator(overDecorator, "\\w*", holds))).toEqual([
      { start: 0, end: 0, undisplayed: true },
    ]);
  });

  it("registers callbacks for a decorator carrier reached through the wrap's else-branch", () => {
    const onClick = vi.fn();
    const onRemove = vi.fn();
    const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
    let decorator!: LexicalNode;
    editor.update(
      () => {
        const x = $createTextNode("x");
        decorator = $createImmutableTypedTextNode("marker", "\\w*");
        const y = $createTextNode("y");
        const para = $createParaNode().append(x, decorator, y);
        $getRoot().append(para);
        const selection = $createRangeSelection();
        selection.anchor.set(para.getKey(), 1, "element");
        selection.focus.set(para.getKey(), 2, "element");
        $wrapSelectionInTypedMarkNode(selection, testType1, testID1, onClick, onRemove);
      },
      { discrete: true },
    );
    editor.getEditorState().read(() => {
      expect($held(decorator)).toEqual([[0, 3]]);
    });
    expect(getDisplayAnnotationRegistration(editor, testType1, testID1)).toEqual({
      onClick,
      onRemove,
    });
  });

  it("holds nothing on a decorator the range ends in front of", () => {
    expect(
      wrapBesideDecorator(({ para, x }, selection) => {
        selection.anchor.set(x.getKey(), 1, "text");
        selection.focus.set(para.getKey(), 1, "element");
      }),
    ).toEqual([]);
  });
});
