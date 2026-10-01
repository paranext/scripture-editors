import { usjReactNodes } from "../../../nodes/usj";
import { annotationHighlightClassNames } from "./annotationHighlights";
import {
  acquireDisplayAnnotationIndex,
  DISPLAY_ANNOTATION_CLASS_NAME,
} from "./displayAnnotations.index";
import {
  $addUpdateTag,
  $createRangeSelection,
  $createTextNode,
  $getRoot,
  $getSelection,
  $setState,
  COMMAND_PRIORITY_HIGH,
  createEditor,
  HISTORIC_TAG,
  LexicalEditor,
  SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
  TextNode,
} from "lexical";
import {
  $addDisplayAnnotation,
  $createCharNode,
  $createMarkerNode,
  $createParaNode,
  $createTypedMarkNode,
  $displayAnnotationsOf,
  $registerDisplayAnnotation,
  $removeDisplayAnnotation,
  $wrapSelectionInTypedMarkNode,
  DELTA_CHANGE_TAG,
  EXTERNAL_USJ_MUTATION_TAG,
  getDisplayAnnotationRegistration,
  textTypeState,
  TypedMarkNode,
  TypedMarkOnClick,
  TypedMarkOnMouseEnter,
  TypedMarkOnMouseLeave,
  TypedMarkOnRemove,
} from "shared";
import { vi } from "vitest";

/** The platform editor's own theme names for `typedMark`/`typedMarkOverlap`; the painter reads
 * them from the editor's theme exactly as `TypedMarkNode.createDOM` does. */
const THEME = { typedMark: "editor-typed-mark", typedMarkOverlap: "editor-typed-markOverlap" };

/** The container and release function `setup` most recently created, so `afterEach` can clean up
 * a test that forgot either — a plain function return gives the test its own copy to call, but
 * nothing else sees whether it did. */
let lastContainer: HTMLElement | undefined;
let lastRelease: (() => void) | undefined;

function setup(
  onError: (error: Error) => void = (error) => {
    throw error;
  },
) {
  const editor = createEditor({
    namespace: "DisplayAnnotationIndexTest",
    nodes: [TypedMarkNode, ...usjReactNodes],
    theme: THEME,
    onError,
  });
  const container = document.createElement("div");
  lastContainer = container;
  document.body.appendChild(container);
  editor.setRootElement(container);
  const { index, release } = acquireDisplayAnnotationIndex(editor);
  lastRelease = release;
  let run!: TextNode;
  editor.update(
    () => {
      run = $setState($createTextNode("|grace"), textTypeState, "attribute");
      $getRoot().append($createParaNode().append($createTextNode("In the "), run));
    },
    { discrete: true },
  );
  return { editor, run, index, release };
}

afterEach(() => {
  lastRelease?.();
  lastContainer?.remove();
  lastRelease = undefined;
  lastContainer = undefined;
});

function classesOf(editor: LexicalEditor, node: TextNode): string[] {
  return [...(editor.getElementByKey(node.getKey())?.classList ?? [])];
}

/** Every piece of text an editor highlight paints, with the class names it paints it with. */
function highlighted(): { text: string; classNames: string[] }[] {
  return [...CSS.highlights].flatMap(([name, highlight]) =>
    [...highlight].map((range) => ({
      text: range instanceof Range ? range.toString() : "",
      classNames: [...(annotationHighlightClassNames(name) ?? [])].sort(),
    })),
  );
}

/** Wrap `type`/`id` over `[from, to)` of `node` through the real wrap, with `callbacks`. */
function wrap(
  editor: LexicalEditor,
  node: TextNode,
  from: number,
  to: number,
  type: string,
  id: string,
  callbacks: {
    onClick?: TypedMarkOnClick;
    onRemove?: TypedMarkOnRemove;
    onMouseEnter?: TypedMarkOnMouseEnter;
    onMouseLeave?: TypedMarkOnMouseLeave;
  } = {},
) {
  editor.update(
    () => {
      const selection = $createRangeSelection();
      selection.anchor.set(node.getKey(), from, "text");
      selection.focus.set(node.getKey(), to, "text");
      $wrapSelectionInTypedMarkNode(
        selection,
        type,
        id,
        callbacks.onClick,
        callbacks.onRemove,
        callbacks.onMouseEnter,
        callbacks.onMouseLeave,
      );
    },
    { discrete: true },
  );
}

describe("the display-annotation index", () => {
  it("keeps painting while one of two acquisitions is still held, and stops once both release", () => {
    const { editor, run, release: firstRelease } = setup();
    const second = acquireDisplayAnnotationIndex(editor);
    wrap(editor, run, 0, 6, "external-spelling", "a");
    expect(classesOf(editor, run)).toContain(DISPLAY_ANNOTATION_CLASS_NAME);

    second.release();
    wrap(editor, run, 0, 6, "external-spelling", "c");
    expect(classesOf(editor, run)).toContain("annotationId-c");

    firstRelease();
    wrap(editor, run, 0, 6, "external-spelling", "d");
    expect(classesOf(editor, run)).not.toContain("annotationId-d");
  });

  it("paints a carrier held whole with the class names a mark gets, and unpaints it when the annotation goes", () => {
    const { editor, run, release } = setup();
    wrap(editor, run, 0, 6, "external-spelling", "a");
    expect(classesOf(editor, run)).toEqual(
      expect.arrayContaining([
        "editor-typed-mark-external-spelling",
        "annotationId-a",
        DISPLAY_ANNOTATION_CLASS_NAME,
      ]),
    );
    editor.update(() => $removeDisplayAnnotation(run.getLatest(), "external-spelling", "a"), {
      discrete: true,
    });
    expect(classesOf(editor, run)).not.toContain("annotationId-a");
    expect(classesOf(editor, run)).not.toContain(DISPLAY_ANNOTATION_CLASS_NAME);
    release();
  });

  it("paints only the held part of a carrier, with the class names a mark gets", () => {
    const { editor, run, release } = setup();
    wrap(editor, run, 1, 6, "external-spelling", "a");
    expect(classesOf(editor, run)).toEqual([]);
    expect(highlighted()).toEqual([
      {
        text: "grace",
        classNames: [
          "annotationId-a",
          DISPLAY_ANNOTATION_CLASS_NAME,
          "editor-typed-mark-external-spelling",
        ],
      },
    ]);
    editor.update(() => $removeDisplayAnnotation(run.getLatest(), "external-spelling", "a"), {
      discrete: true,
    });
    expect(highlighted()).toEqual([]);
    expect(classesOf(editor, run)).toEqual([]);
    release();
  });

  it("paints the overlap class on exactly the characters two ids of one type share", () => {
    const { editor, run, release } = setup();
    wrap(editor, run, 1, 6, "external-spelling", "a");
    wrap(editor, run, 1, 4, "external-spelling", "b");
    expect(highlighted()).toEqual(
      expect.arrayContaining([
        {
          text: "gra",
          classNames: [
            "annotationId-a",
            "annotationId-b",
            DISPLAY_ANNOTATION_CLASS_NAME,
            "editor-typed-mark-external-spelling",
            "editor-typed-markOverlap-external-spelling",
          ],
        },
        {
          text: "ce",
          classNames: [
            "annotationId-a",
            DISPLAY_ANNOTATION_CLASS_NAME,
            "editor-typed-mark-external-spelling",
          ],
        },
      ]),
    );
    expect(highlighted()).toHaveLength(2);
    editor.update(() => $removeDisplayAnnotation(run.getLatest(), "external-spelling", "a"), {
      discrete: true,
    });
    expect(highlighted()).toEqual([
      {
        text: "gra",
        classNames: [
          "annotationId-b",
          DISPLAY_ANNOTATION_CLASS_NAME,
          "editor-typed-mark-external-spelling",
        ],
      },
    ]);
    release();
  });

  it("never paints the overlap class where two ids of one type hold different parts", () => {
    const { editor, run, release } = setup();
    wrap(editor, run, 1, 3, "external-spelling", "a");
    wrap(editor, run, 4, 6, "external-spelling", "b");
    expect(highlighted().map(({ text }) => text)).toEqual(["gr", "ce"]);
    expect(highlighted().flatMap(({ classNames }) => classNames)).not.toContain(
      "editor-typed-markOverlap-external-spelling",
    );
    expect(classesOf(editor, run)).toEqual([]);
    release();
  });

  it("paints an id containing a space with the tokens a mark gets, and unpaints them all", () => {
    const { editor, run, release } = setup();
    let markTokens: string[] = [];
    editor.update(
      () => {
        const mark = $createTypedMarkNode({ "external-spelling": ["a b"] });
        markTokens = [...mark.createDOM(editor._config, editor).classList];
      },
      { discrete: true },
    );
    wrap(editor, run, 0, 6, "external-spelling", "a b");
    expect(classesOf(editor, run)).toEqual(
      expect.arrayContaining([...markTokens, DISPLAY_ANNOTATION_CLASS_NAME]),
    );
    editor.update(() => $removeDisplayAnnotation(run.getLatest(), "external-spelling", "a b"), {
      discrete: true,
    });
    expect(classesOf(editor, run)).toEqual([]);
    release();
  });

  it("calls the annotation's click callback with the bytes it covers", () => {
    const { editor, run, release } = setup();
    const onClick = vi.fn();
    wrap(editor, run, 0, 6, "external-spelling", "a", { onClick });
    editor.getElementByKey(run.getKey())?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(onClick).toHaveBeenCalledWith(
      expect.any(MouseEvent),
      "external-spelling",
      "a",
      "|grace",
    );
    release();
  });

  it("calls the annotation's hover callbacks with the bytes it covers", () => {
    const { editor, run, release } = setup();
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();
    wrap(editor, run, 0, 6, "external-spelling", "a", { onMouseEnter, onMouseLeave });
    const element = editor.getElementByKey(run.getKey());
    element?.dispatchEvent(new MouseEvent("mouseenter"));
    element?.dispatchEvent(new MouseEvent("mouseleave"));
    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(onMouseEnter).toHaveBeenCalledWith(
      expect.any(MouseEvent),
      "external-spelling",
      "a",
      "|grace",
    );
    expect(onMouseLeave).toHaveBeenCalledTimes(1);
    expect(onMouseLeave).toHaveBeenCalledWith(
      expect.any(MouseEvent),
      "external-spelling",
      "a",
      "|grace",
    );
    release();
  });

  describe("over a carrier two annotations each hold part of", () => {
    /** Where each painted text sits on screen: `gr` from x 0 to 10, `ce` from x 20 to 30. */
    const rectsByText: { [text: string]: DOMRect } = {
      gr: new DOMRect(0, 0, 10, 10),
      ce: new DOMRect(20, 0, 10, 10),
    };
    beforeEach(() => {
      Object.defineProperty(Range.prototype, "getClientRects", {
        configurable: true,
        value(this: Range): DOMRect[] {
          const rect = rectsByText[this.toString()];
          return rect ? [rect] : [];
        },
      });
    });
    afterEach(() => {
      Reflect.deleteProperty(Range.prototype, "getClientRects");
    });

    function setupTwo() {
      const fixture = setup();
      const callbacks = {
        a: { onClick: vi.fn(), onMouseEnter: vi.fn(), onMouseLeave: vi.fn() },
        b: { onClick: vi.fn(), onMouseEnter: vi.fn(), onMouseLeave: vi.fn() },
      };
      wrap(fixture.editor, fixture.run, 1, 3, "external-spelling", "a", callbacks.a);
      wrap(fixture.editor, fixture.run, 4, 6, "external-spelling", "b", callbacks.b);
      const element = fixture.editor.getElementByKey(fixture.run.getKey());
      if (!element) throw new Error("the run renders");
      return { ...fixture, callbacks, element };
    }

    it("calls only the click callback of the annotation painted where the pointer is", () => {
      const { callbacks, element, release } = setupTwo();
      element.dispatchEvent(new MouseEvent("click", { clientX: 5, clientY: 5 }));
      expect(callbacks.a.onClick).toHaveBeenCalledWith(
        expect.any(MouseEvent),
        "external-spelling",
        "a",
        "gr",
      );
      expect(callbacks.b.onClick).not.toHaveBeenCalled();

      element.dispatchEvent(new MouseEvent("click", { clientX: 15, clientY: 5 }));
      expect(callbacks.a.onClick).toHaveBeenCalledTimes(1);
      expect(callbacks.b.onClick).not.toHaveBeenCalled();
      release();
    });

    it("enters and leaves each annotation as the pointer moves over the part it paints", () => {
      const { callbacks, element, release } = setupTwo();
      element.dispatchEvent(new MouseEvent("mouseenter", { clientX: 15, clientY: 5 }));
      expect(callbacks.a.onMouseEnter).not.toHaveBeenCalled();
      element.dispatchEvent(new MouseEvent("mousemove", { clientX: 5, clientY: 5 }));
      element.dispatchEvent(new MouseEvent("mousemove", { clientX: 6, clientY: 5 }));
      expect(callbacks.a.onMouseEnter).toHaveBeenCalledTimes(1);
      element.dispatchEvent(new MouseEvent("mousemove", { clientX: 25, clientY: 5 }));
      expect(callbacks.a.onMouseLeave).toHaveBeenCalledTimes(1);
      expect(callbacks.b.onMouseEnter).toHaveBeenCalledTimes(1);
      element.dispatchEvent(new MouseEvent("mouseleave", { clientX: 40, clientY: 5 }));
      expect(callbacks.b.onMouseLeave).toHaveBeenCalledTimes(1);
      expect(callbacks.b.onMouseLeave).toHaveBeenCalledWith(
        expect.any(MouseEvent),
        "external-spelling",
        "b",
        "ce",
      );
      release();
    });

    it("adds a state class only to the parts its annotation paints", () => {
      const { index, release } = setupTwo();
      index.setStateClass("external-spelling", "a", "selected", true);
      expect(highlighted()).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ text: "gr", classNames: expect.arrayContaining(["selected"]) }),
          {
            text: "ce",
            classNames: [
              "annotationId-b",
              DISPLAY_ANNOTATION_CLASS_NAME,
              "editor-typed-mark-external-spelling",
            ],
          },
        ]),
      );
      index.setStateClass("external-spelling", "a", "selected", false);
      expect(highlighted().flatMap(({ classNames }) => classNames)).not.toContain("selected");
      release();
    });

    it("gives ranges over exactly what each annotation paints", () => {
      const { index, release } = setupTwo();
      expect(index.rangesFor("external-spelling", "a").map((range) => range.toString())).toEqual([
        "gr",
      ]);
      expect(index.rangesFor("external-spelling", "b").map((range) => range.toString())).toEqual([
        "ce",
      ]);
      release();
    });
  });

  it("repaints an annotation on an element Lexical re-creates", () => {
    const { editor, run, release } = setup();
    wrap(editor, run, 0, 6, "external-spelling", "a");
    const before = editor.getElementByKey(run.getKey());
    expect(before?.classList.contains("annotationId-a")).toBe(true);

    // "code" format changes the node's own DOM tag, which forces Lexical to create a new element
    // rather than update the old one.
    editor.update(() => run.getLatest().setFormat("code"), { discrete: true });

    const after = editor.getElementByKey(run.getKey());
    expect(after).not.toBe(before);
    expect(after?.tagName).toBe("CODE");
    expect(after?.classList.contains("annotationId-a")).toBe(true);
    expect(after?.classList.contains(DISPLAY_ANNOTATION_CLASS_NAME)).toBe(true);
    release();
  });

  it("moves a partial highlight onto the text of an element Lexical re-creates", () => {
    const { editor, run, release } = setup();
    wrap(editor, run, 1, 6, "external-spelling", "a");
    editor.update(() => run.getLatest().setFormat("code"), { discrete: true });
    const after = editor.getElementByKey(run.getKey());
    const ranges = [...CSS.highlights.values()].flatMap((highlight) => [...highlight]);
    expect(ranges).toHaveLength(1);
    expect(ranges[0].toString()).toBe("grace");
    expect(after?.contains(ranges[0].startContainer)).toBe(true);
    release();
  });

  it("keeps a partial highlight on the same bytes as the carrier's text is typed into", () => {
    const { editor, run, release } = setup();
    wrap(editor, run, 1, 6, "external-spelling", "a");
    editor.update(() => run.getLatest().setTextContent("|xgrace"), { discrete: true });
    expect(highlighted().map(({ text }) => text)).toEqual(["grace"]);
    release();
  });

  it("reports a display-only annotation destroyed once, when its last carrier leaves", () => {
    const { editor, run, release } = setup();
    const onRemove = vi.fn();
    wrap(editor, run, 1, 6, "external-spelling", "a", { onRemove });
    editor.update(() => run.getLatest().remove(), { discrete: true });
    editor.update(() => $getRoot().clear(), { discrete: true });
    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onRemove).toHaveBeenCalledWith("external-spelling", "a", "destroyed", "grace");
    release();
  });

  it("reports the full covered text of every carrier, joined in document order, once the last one leaves", () => {
    const { editor, release } = setup();
    const onRemove = vi.fn();
    let first!: TextNode;
    let second!: TextNode;
    editor.update(
      () => {
        first = $setState($createTextNode("|first"), textTypeState, "attribute");
        second = $setState($createTextNode("|second"), textTypeState, "attribute");
        $getRoot().append($createParaNode().append(first, second));
        $addDisplayAnnotation(first, "external-spelling", "b", 0, first.getTextContentSize());
        $addDisplayAnnotation(second, "external-spelling", "b", 0, second.getTextContentSize());
        $registerDisplayAnnotation("external-spelling", "b", { onRemove });
      },
      { discrete: true },
    );
    editor.update(() => $getRoot().clear(), { discrete: true });
    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onRemove).toHaveBeenCalledWith("external-spelling", "b", "destroyed", "|first|second");
    release();
  });

  it("reports the text of every mark and carrier, joined in document order, once the last one leaves", () => {
    const { editor, release } = setup();
    const onRemove = vi.fn();
    editor.update(
      () => {
        const first = $createTypedMarkNode({});
        first.addID("external-spelling", "m", undefined, onRemove);
        const second = $createTypedMarkNode({});
        second.addID("external-spelling", "m", undefined, onRemove);
        const carrier = $setState($createTextNode("|grace"), textTypeState, "attribute");
        $getRoot().append(
          $createParaNode().append(
            first.append($createTextNode("alpha ")),
            carrier,
            $createTextNode(" beta "),
            second.append($createTextNode("gamma")),
          ),
        );
        $addDisplayAnnotation(carrier, "external-spelling", "m", 0, carrier.getTextContentSize());
        $registerDisplayAnnotation("external-spelling", "m", { onRemove });
      },
      { discrete: true },
    );
    editor.update(() => $getRoot().clear(), { discrete: true });
    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onRemove).toHaveBeenCalledWith(
      "external-spelling",
      "m",
      "destroyed",
      "alpha |gracegamma",
    );
    release();
  });

  it("keeps a type and an id apart even when both contain the NUL character", () => {
    const { editor, release } = setup();
    const nul = String.fromCharCode(0);
    const onRemoveA = vi.fn();
    const onRemoveB = vi.fn();
    let nodeA!: TextNode;
    let nodeB!: TextNode;
    editor.update(
      () => {
        nodeA = $setState($createTextNode("|alpha"), textTypeState, "attribute");
        nodeB = $setState($createTextNode("|beta"), textTypeState, "attribute");
        $getRoot().append($createParaNode().append(nodeA, nodeB));
        $addDisplayAnnotation(nodeA, "t", `a${nul}b`, 0, nodeA.getTextContentSize());
        $addDisplayAnnotation(nodeB, `t${nul}a`, "b", 0, nodeB.getTextContentSize());
        $registerDisplayAnnotation("t", `a${nul}b`, { onRemove: onRemoveA });
        $registerDisplayAnnotation(`t${nul}a`, "b", { onRemove: onRemoveB });
      },
      { discrete: true },
    );
    editor.update(() => $getRoot().clear(), { discrete: true });
    expect(onRemoveA).toHaveBeenCalledTimes(1);
    expect(onRemoveA).toHaveBeenCalledWith("t", `a${nul}b`, "destroyed", "|alpha");
    expect(onRemoveB).toHaveBeenCalledTimes(1);
    expect(onRemoveB).toHaveBeenCalledWith(`t${nul}a`, "b", "destroyed", "|beta");
    release();
  });

  it("still reports the second annotation, and hands the first's error to the editor after the commit, when the first's onRemove throws", async () => {
    const onError = vi.fn();
    const { editor, release } = setup(onError);
    const error = new Error("boom");
    const onRemoveA = vi.fn(() => {
      throw error;
    });
    const onRemoveB = vi.fn();
    let nodeA!: TextNode;
    let nodeB!: TextNode;
    editor.update(
      () => {
        nodeA = $setState($createTextNode("|alpha"), textTypeState, "attribute");
        nodeB = $setState($createTextNode("|beta"), textTypeState, "attribute");
        $getRoot().append($createParaNode().append(nodeA, nodeB));
        $addDisplayAnnotation(nodeA, "external-spelling", "a", 0, nodeA.getTextContentSize());
        $addDisplayAnnotation(nodeB, "external-spelling", "b", 0, nodeB.getTextContentSize());
        $registerDisplayAnnotation("external-spelling", "a", { onRemove: onRemoveA });
        $registerDisplayAnnotation("external-spelling", "b", { onRemove: onRemoveB });
      },
      { discrete: true },
    );
    // Registered after the index's own listener, so it runs after the report in the same commit.
    const laterListener = vi.fn();
    const unregisterLater = editor.registerUpdateListener(laterListener);
    const onUpdate = vi.fn();

    editor.update(() => $getRoot().clear(), { discrete: true, onUpdate });

    expect(onRemoveA).toHaveBeenCalledTimes(1);
    expect(onRemoveB).toHaveBeenCalledTimes(1);
    expect(laterListener).toHaveBeenCalledTimes(1);
    expect(onUpdate).toHaveBeenCalledTimes(1);
    expect(editor.getEditorState().read(() => $getRoot().getChildrenSize())).toBe(0);
    await Promise.resolve();
    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledWith(error);
    unregisterLater();
    release();
  });

  it("carries the new carrier's text, not a stale one, when the same id is set again elsewhere", () => {
    const { editor, index, release } = setup();
    const onRemove = vi.fn();
    let first!: TextNode;
    editor.update(
      () => {
        first = $setState($createTextNode("|first"), textTypeState, "attribute");
        $getRoot().append($createParaNode().append(first));
        $addDisplayAnnotation(first, "external-spelling", "a", 0, first.getTextContentSize());
        $registerDisplayAnnotation("external-spelling", "a", { onRemove });
      },
      { discrete: true },
    );
    editor.update(() => first.getLatest().remove(), { discrete: true });
    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onRemove).toHaveBeenLastCalledWith("external-spelling", "a", "destroyed", "|first");

    // A fresh `setAnnotation` on the same id starts a new report lifecycle.
    index.noteSet("external-spelling", "a");
    let second!: TextNode;
    editor.update(
      () => {
        second = $setState($createTextNode("|second"), textTypeState, "attribute");
        $getRoot().append($createParaNode().append(second));
        $addDisplayAnnotation(second, "external-spelling", "a", 0, second.getTextContentSize());
        $registerDisplayAnnotation("external-spelling", "a", { onRemove });
      },
      { discrete: true },
    );
    editor.update(() => second.getLatest().remove(), { discrete: true });
    expect(onRemove).toHaveBeenCalledTimes(2);
    expect(onRemove).toHaveBeenLastCalledWith("external-spelling", "a", "destroyed", "|second");
    release();
  });

  it("never reports an annotation destroyed from its carriers once a mark held it", () => {
    const { editor, run, release } = setup();
    const onRemove = vi.fn();
    const words = editor.getEditorState().read(() => $getRoot().getAllTextNodes()[0]);
    // From inside `In the ` through the run: a mark over the words, and state on the run.
    editor.update(
      () => {
        const selection = $createRangeSelection();
        selection.anchor.set(words.getKey(), 3, "text");
        selection.focus.set(run.getKey(), 6, "text");
        $wrapSelectionInTypedMarkNode(selection, "external-spelling", "a", undefined, onRemove);
      },
      { discrete: true },
    );
    editor.update(() => run.getLatest().remove(), { discrete: true });
    expect(onRemove).not.toHaveBeenCalled();
    release();
  });

  it("does not report an annotation that moves to a new carrier in the same commit", () => {
    const { editor, run, release } = setup();
    const onRemove = vi.fn();
    wrap(editor, run, 0, 1, "external-spelling", "a", { onRemove });
    editor.update(
      () => {
        const glyph = $createMarkerNode("w", "closing");
        run.getLatest().replace(glyph);
        $addDisplayAnnotation(glyph, "external-spelling", "a", 0, 1);
      },
      { discrete: true },
    );
    expect(onRemove).not.toHaveBeenCalled();
    release();
  });

  it.each([EXTERNAL_USJ_MUTATION_TAG, HISTORIC_TAG])(
    "reports nothing when a %s commit drops a display-only annotation's carriers",
    (tag) => {
      const { editor, run, release } = setup();
      const onRemove = vi.fn();
      wrap(editor, run, 1, 6, "external-spelling", "a", { onRemove });
      editor.update(
        () => {
          $addUpdateTag(tag);
          run.getLatest().remove();
        },
        { discrete: true },
      );
      expect(onRemove).not.toHaveBeenCalled();
      // A reload forgets the annotation; history keeps it for the redo that brings it back.
      expect(getDisplayAnnotationRegistration(editor, "external-spelling", "a") !== undefined).toBe(
        tag === HISTORIC_TAG,
      );
      release();
    },
  );

  it("reports a display-only annotation destroyed when a collaborator's edit removes it", () => {
    const { editor, run, release } = setup();
    const onRemove = vi.fn();
    wrap(editor, run, 1, 6, "external-spelling", "a", { onRemove });
    editor.update(
      () => {
        $addUpdateTag(DELTA_CHANGE_TAG);
        run.getLatest().remove();
      },
      { discrete: true },
    );
    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onRemove).toHaveBeenCalledWith("external-spelling", "a", "destroyed", "grace");
    release();
  });

  it("strips display annotations from pasted nodes", () => {
    const { editor, run, release } = setup();
    wrap(editor, run, 1, 6, "external-spelling", "a");
    editor.update(
      () => {
        const pasted = $setState($createTextNode("|grace"), textTypeState, "attribute");
        $addDisplayAnnotation(pasted, "external-spelling", "a", 1, 6);
        const selection = $getSelection() ?? $createRangeSelection();
        editor.dispatchCommand(SELECTION_INSERT_CLIPBOARD_NODES_COMMAND, {
          nodes: [pasted],
          selection,
        });
        expect($displayAnnotationsOf(pasted)).toEqual([]);
      },
      { discrete: true },
    );
    release();
  });

  it("strips display annotations from an element subtree pasted with the rest", () => {
    const { editor, release } = setup();
    editor.update(
      () => {
        const glyph = $createMarkerNode("w");
        $addDisplayAnnotation(glyph, "external-spelling", "a", 0, glyph.getTextContentSize());
        const span = $createCharNode("w").append(glyph);
        const selection = $getSelection() ?? $createRangeSelection();
        editor.dispatchCommand(SELECTION_INSERT_CLIPBOARD_NODES_COMMAND, {
          nodes: [span],
          selection,
        });
        expect($displayAnnotationsOf(glyph)).toEqual([]);
      },
      { discrete: true },
    );
    release();
  });

  it("strips them even when a higher-priority handler handles the paste", () => {
    const { editor, release } = setup();
    const unregister = editor.registerCommand(
      SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
      () => true,
      COMMAND_PRIORITY_HIGH,
    );
    editor.update(
      () => {
        const pasted = $setState($createTextNode("|grace"), textTypeState, "attribute");
        $addDisplayAnnotation(pasted, "external-spelling", "a", 1, 6);
        editor.dispatchCommand(SELECTION_INSERT_CLIPBOARD_NODES_COMMAND, {
          nodes: [pasted],
          selection: $getSelection() ?? $createRangeSelection(),
        });
        expect($displayAnnotationsOf(pasted)).toEqual([]);
      },
      { discrete: true },
    );
    unregister();
    release();
  });
});
