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
  createEditor,
  HISTORIC_TAG,
  LexicalEditor,
  SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
  TextNode,
} from "lexical";
import {
  $addDisplayAnnotation,
  $createMarkerNode,
  $createParaNode,
  $createTypedMarkNode,
  $displayAnnotationsOf,
  $removeDisplayAnnotation,
  $wrapSelectionInTypedMarkNode,
  DELTA_CHANGE_TAG,
  EXTERNAL_USJ_MUTATION_TAG,
  getDisplayAnnotationRegistration,
  textTypeState,
  TypedMarkNode,
} from "shared";
import { vi } from "vitest";

/** The mark theme names the platform editor uses (`editor.theme.ts:6-7`); the painter reads them
 * from the editor's theme exactly as `TypedMarkNode.createDOM` does. */
const THEME = { typedMark: "editor-typed-mark", typedMarkOverlap: "editor-typed-markOverlap" };

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
  document.body.appendChild(container);
  editor.setRootElement(container);
  const { release } = acquireDisplayAnnotationIndex(editor);
  let run!: TextNode;
  editor.update(
    () => {
      run = $setState($createTextNode("|grace"), textTypeState, "attribute");
      $getRoot().append($createParaNode().append($createTextNode("In the "), run));
    },
    { discrete: true },
  );
  return { editor, run, release };
}

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
  callbacks: { onClick?: () => void; onRemove?: () => void } = {},
) {
  editor.update(
    () => {
      const selection = $createRangeSelection();
      selection.anchor.set(node.getKey(), from, "text");
      selection.focus.set(node.getKey(), to, "text");
      $wrapSelectionInTypedMarkNode(selection, type, id, callbacks.onClick, callbacks.onRemove);
    },
    { discrete: true },
  );
}

describe("the display-annotation index", () => {
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
});
