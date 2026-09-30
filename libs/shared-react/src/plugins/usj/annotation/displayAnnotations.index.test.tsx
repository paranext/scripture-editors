import { usjReactNodes } from "../../../nodes/usj";
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

function setup() {
  const editor = createEditor({
    namespace: "DisplayAnnotationIndexTest",
    nodes: [TypedMarkNode, ...usjReactNodes],
    theme: THEME,
    onError: (error) => {
      throw error;
    },
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
    wrap(editor, run, 1, 6, "external-spelling", "a");
    expect(classesOf(editor, run)).toContain(DISPLAY_ANNOTATION_CLASS_NAME);

    second.release();
    wrap(editor, run, 1, 4, "external-spelling", "c");
    expect(classesOf(editor, run)).toContain("annotationId-c");

    firstRelease();
    wrap(editor, run, 0, 1, "external-spelling", "d");
    expect(classesOf(editor, run)).not.toContain("annotationId-d");
  });

  it("paints a carrier with the class names a mark gets, and unpaints it when the annotation goes", () => {
    const { editor, run, release } = setup();
    wrap(editor, run, 1, 6, "external-spelling", "a");
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

  it("paints two ids of one type with the overlap class, and keeps the other when one goes", () => {
    const { editor, run, release } = setup();
    wrap(editor, run, 1, 6, "external-spelling", "a");
    wrap(editor, run, 1, 4, "external-spelling", "b");
    expect(classesOf(editor, run)).toEqual(
      expect.arrayContaining(["annotationId-a", "annotationId-b"]),
    );
    // Two ids of one type held on one carrier: the overlap class, whether or not their ranges on
    // it overlap (the carrier is painted whole).
    expect(classesOf(editor, run)).toContain("editor-typed-markOverlap-external-spelling");
    editor.update(() => $removeDisplayAnnotation(run.getLatest(), "external-spelling", "a"), {
      discrete: true,
    });
    expect(classesOf(editor, run)).toContain("annotationId-b");
    expect(classesOf(editor, run)).not.toContain("editor-typed-markOverlap-external-spelling");
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
    wrap(editor, run, 1, 6, "external-spelling", "a b");
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
    wrap(editor, run, 1, 6, "external-spelling", "a", { onClick });
    editor.getElementByKey(run.getKey())?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(onClick).toHaveBeenCalledWith(expect.any(MouseEvent), "external-spelling", "a", "grace");
    release();
  });

  it("calls the annotation's hover callbacks with the bytes it covers", () => {
    const { editor, run, release } = setup();
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();
    wrap(editor, run, 1, 6, "external-spelling", "a", { onMouseEnter, onMouseLeave });
    const element = editor.getElementByKey(run.getKey());
    element?.dispatchEvent(new MouseEvent("mouseenter"));
    element?.dispatchEvent(new MouseEvent("mouseleave"));
    expect(onMouseEnter).toHaveBeenCalledWith(
      expect.any(MouseEvent),
      "external-spelling",
      "a",
      "grace",
    );
    expect(onMouseLeave).toHaveBeenCalledWith(
      expect.any(MouseEvent),
      "external-spelling",
      "a",
      "grace",
    );
    release();
  });

  it("repaints an annotation on an element Lexical re-creates", () => {
    const { editor, run, release } = setup();
    wrap(editor, run, 1, 6, "external-spelling", "a");
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

  it("still reports the second annotation, and re-throws, when the first's onRemove throws", () => {
    const { editor, release } = setup();
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
    expect(() => {
      editor.update(() => $getRoot().clear(), { discrete: true });
    }).toThrow(error);
    expect(onRemoveA).toHaveBeenCalledTimes(1);
    expect(onRemoveB).toHaveBeenCalledTimes(1);
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
