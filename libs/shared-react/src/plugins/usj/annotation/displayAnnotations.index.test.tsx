import { usjReactNodes } from "../../../nodes/usj";
import { $createImmutableNoteCallerNode } from "../../../nodes/usj/ImmutableNoteCallerNode";
import {
  $createImmutableVerseNode,
  ImmutableVerseNode,
} from "../../../nodes/usj/ImmutableVerseNode";
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
  LexicalNode,
  SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
  TextNode,
} from "lexical";
import {
  $addDisplayAnnotation,
  $createCharNode,
  $pieces,
  getDecoratorPaint,
  $createMarkerNode,
  $createNoteNode,
  $createParaNode,
  $createTypedMarkNode,
  $displayAnnotationsOf,
  $isNoteNode,
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

/** Every element painted outside a mark — a carrier piece painted whole, a decorator's sub-span —
 * with its text and the class names it is painted with. */
function painted(editor: LexicalEditor): { text: string; classNames: string[] }[] {
  const root = editor.getRootElement();
  return [...(root?.querySelectorAll(`.${DISPLAY_ANNOTATION_CLASS_NAME}`) ?? [])].map(
    (element) => ({
      text: element.textContent ?? "",
      classNames: [...element.classList].sort(),
    }),
  );
}

/** The element painted with `text` ({@link painted}). */
function paintedElement(editor: LexicalEditor, text: string): HTMLElement {
  const root = editor.getRootElement();
  const element = [...(root?.querySelectorAll(`.${DISPLAY_ANNOTATION_CLASS_NAME}`) ?? [])].find(
    (candidate) => candidate.textContent === text,
  );
  if (!(element instanceof HTMLElement)) throw new Error(`nothing painted reads ${text}`);
  return element;
}

/** Drop `type`/`id` from every piece of the carrier `node` is a piece of, as `removeAnnotation`
 * does through the index's holder keys. Mutating. */
function $removeFromCarrier(node: TextNode, type: string, id: string): void {
  for (const piece of $pieces(node.getLatest())) $removeDisplayAnnotation(piece, type, id);
}

/** Remove every piece of the carrier `node` is a piece of. Mutating. */
function $removeCarrier(node: TextNode): void {
  for (const piece of $pieces(node.getLatest())) piece.remove();
}

/** The text point `offset` bytes into the carrier `node` is a piece of, on the piece holding it. */
function $pointInCarrier(node: TextNode, offset: number): [string, number] {
  let at = offset;
  const pieces = $pieces(node.getLatest());
  for (const piece of pieces) {
    if (at <= piece.getTextContentSize()) return [piece.getKey(), at];
    at -= piece.getTextContentSize();
  }
  throw new Error(`offset ${offset} is past the carrier`);
}

/** Wrap `type`/`id` over `[from, to)` of the carrier `node` is a piece of, through the real wrap,
 * with `callbacks`. */
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
      selection.anchor.set(...$pointInCarrier(node, from), "text");
      selection.focus.set(...$pointInCarrier(node, to), "text");
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

  it("dispatches a click once after the index is released and acquired again", () => {
    const { editor, run, release } = setup();
    const onClick = vi.fn();
    wrap(editor, run, 0, 6, "external-spelling", "a", { onClick });
    release();
    const again = acquireDisplayAnnotationIndex(editor);
    lastRelease = again.release;
    editor.getElementByKey(run.getKey())?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(onClick).toHaveBeenCalledTimes(1);
    again.release();
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
    editor.update(() => $removeFromCarrier(run, "external-spelling", "a"), {
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
    expect(painted(editor)).toEqual([
      {
        text: "grace",
        classNames: [
          "annotationId-a",
          DISPLAY_ANNOTATION_CLASS_NAME,
          "editor-typed-mark-external-spelling",
        ],
      },
    ]);
    editor.update(() => $removeFromCarrier(run, "external-spelling", "a"), {
      discrete: true,
    });
    expect(painted(editor)).toEqual([]);
    expect(classesOf(editor, run)).toEqual([]);
    release();
  });

  it("paints the overlap class on exactly the characters two ids of one type share", () => {
    const { editor, run, release } = setup();
    wrap(editor, run, 1, 6, "external-spelling", "a");
    wrap(editor, run, 1, 4, "external-spelling", "b");
    expect(painted(editor)).toEqual(
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
    expect(painted(editor)).toHaveLength(2);
    editor.update(() => $removeFromCarrier(run, "external-spelling", "a"), {
      discrete: true,
    });
    expect(painted(editor)).toEqual([
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
    expect(painted(editor).map(({ text }) => text)).toEqual(["gr", "ce"]);
    expect(painted(editor).flatMap(({ classNames }) => classNames)).not.toContain(
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
    editor.update(() => $removeFromCarrier(run, "external-spelling", "a b"), {
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
    function setupTwo() {
      const fixture = setup();
      const callbacks = {
        a: { onClick: vi.fn(), onMouseEnter: vi.fn(), onMouseLeave: vi.fn() },
        b: { onClick: vi.fn(), onMouseEnter: vi.fn(), onMouseLeave: vi.fn() },
      };
      wrap(fixture.editor, fixture.run, 1, 3, "external-spelling", "a", callbacks.a);
      wrap(fixture.editor, fixture.run, 4, 6, "external-spelling", "b", callbacks.b);
      return {
        ...fixture,
        callbacks,
        gr: paintedElement(fixture.editor, "gr"),
        ce: paintedElement(fixture.editor, "ce"),
      };
    }

    it("cuts the carrier into a piece per held part, each painted whole", () => {
      const { editor, run, release } = setupTwo();
      expect(
        editor.getEditorState().read(() => $pieces(run.getLatest()).map((p) => p.getTextContent())),
      ).toEqual(["|", "gr", "a", "ce"]);
      expect(painted(editor).map(({ text }) => text)).toEqual(["gr", "ce"]);
      release();
    });

    it("calls only the click callback of the annotation painted where the pointer is", () => {
      const { callbacks, gr, release } = setupTwo();
      gr.dispatchEvent(new MouseEvent("click"));
      expect(callbacks.a.onClick).toHaveBeenCalledWith(
        expect.any(MouseEvent),
        "external-spelling",
        "a",
        "gr",
      );
      expect(callbacks.b.onClick).not.toHaveBeenCalled();
      release();
    });

    it("enters and leaves each annotation as the pointer moves over the part it paints", () => {
      const { callbacks, gr, ce, release } = setupTwo();
      gr.dispatchEvent(new MouseEvent("mouseenter"));
      expect(callbacks.a.onMouseEnter).toHaveBeenCalledTimes(1);
      expect(callbacks.b.onMouseEnter).not.toHaveBeenCalled();
      gr.dispatchEvent(new MouseEvent("mousemove"));
      expect(callbacks.a.onMouseEnter).toHaveBeenCalledTimes(1);
      gr.dispatchEvent(new MouseEvent("mouseleave"));
      ce.dispatchEvent(new MouseEvent("mouseenter"));
      expect(callbacks.a.onMouseLeave).toHaveBeenCalledTimes(1);
      expect(callbacks.b.onMouseEnter).toHaveBeenCalledTimes(1);
      ce.dispatchEvent(new MouseEvent("mouseleave"));
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
      const { editor, index, release } = setupTwo();
      index.setStateClass("external-spelling", "a", "selected", true);
      expect(painted(editor)).toEqual(
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
      expect(painted(editor).flatMap(({ classNames }) => classNames)).not.toContain("selected");
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

  it("repaints the held piece of a carrier on an element Lexical re-creates", () => {
    const { editor, run, release } = setup();
    wrap(editor, run, 1, 6, "external-spelling", "a");
    const before = paintedElement(editor, "grace");
    editor.update(
      () => {
        const [, held] = $pieces(run.getLatest());
        held.setFormat("code");
      },
      { discrete: true },
    );
    const after = paintedElement(editor, "grace");
    expect(after).not.toBe(before);
    expect(after.tagName).toBe("CODE");
    release();
  });

  it("keeps a partial paint on the same bytes as the carrier's text is typed into", () => {
    const { editor, run, release } = setup();
    wrap(editor, run, 1, 6, "external-spelling", "a");
    // Typed in front of the held bytes: the head piece grows, the held piece stays.
    editor.update(() => run.getLatest().setTextContent("|x"), { discrete: true });
    expect(painted(editor).map(({ text }) => text)).toEqual(["grace"]);
    // Typed at the held piece's end: a byte at a hold's edge stays outside it.
    editor.update(
      () => {
        const [, held] = $pieces(run.getLatest());
        held.setTextContent("gracey");
      },
      { discrete: true },
    );
    expect(painted(editor).map(({ text }) => text)).toEqual(["grace"]);
    expect(
      editor.getEditorState().read(() => $pieces(run.getLatest()).map((p) => p.getTextContent())),
    ).toEqual(["|x", "grace", "y"]);
    release();
  });

  it("keeps a partial paint on its bytes when a whole-state replacement rewrites the carrier's text", () => {
    const { editor, run, release } = setup();
    wrap(editor, run, 1, 6, "external-spelling", "a");
    const annotated = editor.getEditorState();
    // An edit outside the range: what the annotation paints stays `grace`.
    editor.update(() => run.getLatest().setTextContent("X"), { discrete: true });
    expect(painted(editor).map(({ text }) => text)).toEqual(["grace"]);

    // Undo and redo replace the whole state: the pieces come back as they were.
    editor.setEditorState(annotated);
    expect(painted(editor).map(({ text }) => text)).toEqual(["grace"]);
    release();
  });

  it("gives a decorator a paint over exactly the characters it holds, and follows them through a renumber", () => {
    const { editor, release } = setup();
    let verse!: ImmutableVerseNode;
    editor.update(
      () => {
        verse = $createImmutableVerseNode("12");
        $getRoot().append($createParaNode().append(verse));
        // `1` of the number: a verse stands for `\v 12`, whatever it renders.
        $addDisplayAnnotation(verse, "external-spelling", "a", 3, 4);
      },
      { discrete: true },
    );
    const paintedChars = () =>
      getDecoratorPaint(editor, verse.getKey()).map(({ start, end, classNames }) => ({
        text: editor
          .getEditorState()
          .read(() => verse.getLatest().getRenderedText().slice(start, end)),
        classNames: [...classNames].sort(),
      }));
    expect(paintedChars()).toEqual([
      {
        text: "1",
        classNames: [
          "annotationId-a",
          DISPLAY_ANNOTATION_CLASS_NAME,
          "editor-typed-mark-external-spelling",
        ],
      },
    ]);

    editor.update(() => verse.getLatest().setNumber("13"), { discrete: true });
    expect(paintedChars()).toEqual([expect.objectContaining({ text: "1" })]);

    editor.update(() => $removeDisplayAnnotation(verse.getLatest(), "external-spelling", "a"), {
      discrete: true,
    });
    expect(paintedChars()).toEqual([]);
    release();
  });

  it("keeps a hold on a hidden caller through collapsing and expanding its note, reporting nothing", () => {
    const { editor, release } = setup();
    const onRemove = vi.fn();
    let caller!: LexicalNode;
    let note!: LexicalNode;
    editor.update(
      () => {
        // `-` shows as `-` while the note is expanded and as `*` while it is collapsed.
        caller = $createImmutableNoteCallerNode("-");
        note = $createNoteNode("f", "-", false).append(caller);
        $getRoot().append($createParaNode().append(note));
        $addDisplayAnnotation(caller, "external-spelling", "a", 0, 1);
        $registerDisplayAnnotation("external-spelling", "a", { onRemove });
      },
      { discrete: true },
    );
    const held = () =>
      editor.getEditorState().read(() => $displayAnnotationsOf(caller.getLatest()));
    const toggle = () =>
      editor.update(
        () => {
          const latest = note.getLatest();
          if ($isNoteNode(latest)) latest.toggleIsCollapsed();
          // The caller renders from its note, so it is drawn again with it.
          caller.getLatest().markDirty();
        },
        { discrete: true },
      );

    toggle();
    expect(held()).toEqual([expect.objectContaining({ id: "a", start: 0, end: 0 })]);
    toggle();
    expect(held()).toEqual([expect.objectContaining({ id: "a", start: 0, end: 1 })]);
    expect(onRemove).not.toHaveBeenCalled();
    release();
  });

  it("keeps a hold on a hidden caller exact through another hold added while its note is collapsed", () => {
    const { editor, release } = setup();
    let caller!: LexicalNode;
    let note!: LexicalNode;
    editor.update(
      () => {
        caller = $createImmutableNoteCallerNode("-");
        note = $createNoteNode("f", "-", false).append(caller);
        $getRoot().append($createParaNode().append(note));
        $addDisplayAnnotation(caller, "external-spelling", "a", 0, 1);
      },
      { discrete: true },
    );
    const toggle = () =>
      editor.update(
        () => {
          const latest = note.getLatest();
          if ($isNoteNode(latest)) latest.toggleIsCollapsed();
          caller.getLatest().markDirty();
        },
        { discrete: true },
      );
    toggle();
    // While the note is collapsed (`-` drawn as `*`), another annotation is set on the caller.
    editor.update(() => $addDisplayAnnotation(caller.getLatest(), "external-spelling", "b", 0, 1), {
      discrete: true,
    });
    toggle();
    expect(editor.getEditorState().read(() => $displayAnnotationsOf(caller.getLatest()))).toEqual([
      expect.objectContaining({ id: "a", start: 0, end: 1 }),
      expect.objectContaining({ id: "b", start: 0, end: 1 }),
    ]);
    release();
  });

  it("reports a display-only annotation destroyed once, when its last carrier leaves", () => {
    const { editor, run, release } = setup();
    const onRemove = vi.fn();
    wrap(editor, run, 1, 6, "external-spelling", "a", { onRemove });
    editor.update(() => $removeCarrier(run), { discrete: true });
    editor.update(() => $getRoot().clear(), { discrete: true });
    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onRemove).toHaveBeenCalledWith("external-spelling", "a", "destroyed", "grace");
    release();
  });

  it("reports every hold of one annotation on a decorator, in document order, once it leaves", () => {
    const { editor, release } = setup();
    const onRemove = vi.fn();
    let verse!: ImmutableVerseNode;
    editor.update(
      () => {
        // A verse stands for `\v 12\va12a\va*`: the `1` of its number and its alternate number,
        // set in reverse order and apart, so two holds.
        verse = $createImmutableVerseNode("12").setAltnumber("12a");
        $getRoot().append($createParaNode().append(verse));
        $addDisplayAnnotation(verse, "external-spelling", "a", 8, 11);
        $addDisplayAnnotation(verse, "external-spelling", "a", 3, 4);
        $registerDisplayAnnotation("external-spelling", "a", { onRemove });
      },
      { discrete: true },
    );
    editor.update(() => verse.getLatest().remove(), { discrete: true });
    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onRemove).toHaveBeenCalledWith("external-spelling", "a", "destroyed", "112a");
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

  /** `alpha` in a mark holding `m`, then the carrier `|grace` holding `m` whole. */
  function $markThenCarrier(onRemove: TypedMarkOnRemove): { word: TextNode; carrier: TextNode } {
    const mark = $createTypedMarkNode({});
    mark.addID("external-spelling", "m", undefined, onRemove);
    const word = $createTextNode("alpha");
    const carrier = $setState($createTextNode("|grace"), textTypeState, "attribute");
    $getRoot().append($createParaNode().append(mark.append(word), carrier));
    $addDisplayAnnotation(carrier, "external-spelling", "m", 0, carrier.getTextContentSize());
    $registerDisplayAnnotation("external-spelling", "m", { onRemove });
    return { word, carrier };
  }

  it("reports a mark a selection delete empties once, with its own text, while a carrier still holds the annotation, and nothing when the carrier goes later", () => {
    const { editor, release } = setup();
    const onRemove = vi.fn<TypedMarkOnRemove>();
    let word!: TextNode;
    let carrier!: TextNode;
    editor.update(
      () => {
        $getRoot().clear();
        ({ word, carrier } = $markThenCarrier(onRemove));
      },
      { discrete: true },
    );

    // Lexical drops the emptied mark without calling its `remove()`.
    editor.update(
      () => {
        const selection = $createRangeSelection();
        selection.anchor.set(word.getKey(), 0, "text");
        selection.focus.set(word.getKey(), word.getTextContentSize(), "text");
        selection.removeText();
      },
      { discrete: true },
    );

    expect(onRemove.mock.calls).toEqual([["external-spelling", "m", "destroyed", "alpha"]]);
    expect(
      editor.getEditorState().read(() => $displayAnnotationsOf(carrier.getLatest()).length),
    ).toBe(1);

    editor.update(() => $removeCarrier(carrier), { discrete: true });

    expect(onRemove).toHaveBeenCalledTimes(1);
    release();
  });

  it("reports nothing when a mark is dropped in the commit a carrier begins holding its annotation", () => {
    const { editor, release } = setup();
    const onRemove = vi.fn<TypedMarkOnRemove>();
    let word!: TextNode;
    editor.update(
      () => {
        $getRoot().clear();
        const mark = $createTypedMarkNode({});
        mark.addID("external-spelling", "m", undefined, onRemove);
        word = $createTextNode("|grace");
        $getRoot().append($createParaNode().append(mark.append(word)));
      },
      { discrete: true },
    );

    // A settle re-spelling the marked bytes as a display byte: the mark's paragraph is rebuilt
    // and the new carrier holds the annotation.
    editor.update(
      () => {
        const para = word.getLatest().getTopLevelElementOrThrow();
        const carrier = $setState($createTextNode("|grace"), textTypeState, "attribute");
        para.replace($createParaNode().append(carrier));
        $addDisplayAnnotation(carrier, "external-spelling", "m", 0, carrier.getTextContentSize());
        $registerDisplayAnnotation("external-spelling", "m", { onRemove });
      },
      { discrete: true },
    );

    expect(onRemove).not.toHaveBeenCalled();
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
    editor.update(() => $removeCarrier(run), { discrete: true });
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
          $removeCarrier(run);
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
        $removeCarrier(run);
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
