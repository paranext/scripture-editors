import { describe, expect, it } from "vitest";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $createTextNode,
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  BLUR_COMMAND,
  CLICK_COMMAND,
  FOCUS_COMMAND,
  LexicalEditor,
  LexicalNode,
  SELECTION_CHANGE_COMMAND,
} from "lexical";
import {
  $createGutterMarkerNode,
  $createImmutableTypedTextNode,
  $createMarkerNode,
  $createParaNode,
  $createVerseNode,
  $selectParaMarker,
  registerParaMarkerSelectionOwner,
  CharNode,
  ImmutableTypedTextNode,
  MarkerNode,
  NBSP,
  ParaNode,
  VerseNode,
} from "shared";
import {
  $createImmutableVerseNode,
  $isCaretHost,
  EmptyVerseCaretGuardPlugin,
  getViewOptions,
  ImmutableVerseNode,
  PARAGRAPH_STRUCTURE_VIEW_MODE,
  SomeVerseNode,
} from "shared-react";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { createBasicTestEnvironment } from "../../../../libs/shared/src/nodes/usj/test.utils";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  baseTestEnvironment,
  settle,
} from "../../../../libs/shared-react/src/plugins/usj/react-test.utils";
import {
  $getActiveVerseKey,
  $getEmptyVerseStatus,
  $getParaFromSelection,
  ACTIVE_EMPTY_CLASS,
  ActiveTextPlugin,
  EMPTY_CLASS,
} from "./ActiveTextPlugin";

// jsdom has no `Range.getBoundingClientRect`; Lexical's post-commit scroll-into-view reads one once
// the root has focus. Stub it the same way the sibling editor tests do.
if (typeof Range.prototype.getBoundingClientRect !== "function")
  Range.prototype.getBoundingClientRect = () => new DOMRect();

const nodes = [
  ParaNode,
  VerseNode,
  ImmutableVerseNode,
  MarkerNode,
  ImmutableTypedTextNode,
  CharNode,
];

/**
 * The three realistic ParaNode shapes the plugin must handle, matching what
 * `usj-editor.adaptor.ts` produces for each set of view options.
 *
 * - `editable`: `markerMode: "editable"` — paragraph starts with a mutable `MarkerNode("\\p")`
 *   followed by a `TextNode(NBSP)` (the "marker-trailing-space"), and verses are mutable
 *   `VerseNode`s containing visible text like `"\\v 1 "`.
 * - `gutter-hidden`: `markerMode: "hidden"` + `hasGutterParaMarkers: true` (the Paragraph
 *   Structure view this plugin actually ships in) — paragraph starts with an
 *   `ImmutableTypedTextNode("marker", "\\p\\u00A0")` for the gutter, then `ImmutableVerseNode`s.
 * - `plain-hidden`: `markerMode: "hidden"` with no gutter — no paragraph-marker prefix at all,
 *   and verses are `ImmutableVerseNode`s.
 */
type ParaShape = "editable" | "gutter-hidden" | "plain-hidden";

/** Builds the leading paragraph-marker children for the given shape, or [] if the shape has none. */
function $createParaMarkerPrefixNodes(shape: ParaShape, marker: string): LexicalNode[] {
  if (shape === "editable") return [$createMarkerNode(marker), $createTextNode(NBSP)];
  if (shape === "gutter-hidden")
    return [$createImmutableTypedTextNode("marker", `\\${marker}${NBSP}`)];
  return [];
}

/** Creates the appropriate verse-number node type for the given shape. */
function $verseFor(shape: ParaShape, number: string) {
  return shape === "editable" ? $createVerseNode(number) : $createImmutableVerseNode(number);
}

describe("$getEmptyVerseStatus", () => {
  const shapes: ParaShape[] = ["editable", "gutter-hidden", "plain-hidden"];

  describe.each(shapes)("%s shape", (shape) => {
    it("marks the verse empty when it has no body text", () => {
      let para: ParaNode;
      let v1: SomeVerseNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        v1 = $verseFor(shape, "1");
        para = $createParaNode("p");
        $getRoot().append(para.append(...$createParaMarkerPrefixNodes(shape, "p"), v1));
      });

      editor.getEditorState().read(() => {
        const result = $getEmptyVerseStatus(para);

        expect(result.emptyKeys).toEqual([v1.getKey()]);
        expect(result.nonEmptyKeys).toEqual([]);
      });
    });

    it("marks the verse non-empty when it has body text", () => {
      let para: ParaNode;
      let v1: SomeVerseNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        v1 = $verseFor(shape, "1");
        para = $createParaNode("p");
        $getRoot().append(
          para.append(
            ...$createParaMarkerPrefixNodes(shape, "p"),
            v1,
            $createTextNode("In the beginning"),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const result = $getEmptyVerseStatus(para);

        expect(result.emptyKeys).toEqual([]);
        expect(result.nonEmptyKeys).toEqual([v1.getKey()]);
      });
    });

    it("marks the verse empty when it is followed by whitespace only", () => {
      let para: ParaNode;
      let v1: SomeVerseNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        v1 = $verseFor(shape, "1");
        para = $createParaNode("p");
        $getRoot().append(
          para.append(...$createParaMarkerPrefixNodes(shape, "p"), v1, $createTextNode("   ")),
        );
      });

      editor.getEditorState().read(() => {
        const result = $getEmptyVerseStatus(para);

        expect(result.emptyKeys).toEqual([v1.getKey()]);
        expect(result.nonEmptyKeys).toEqual([]);
      });
    });

    it("marks only the empty verse when one of two verses in the paragraph has no body", () => {
      let para: ParaNode;
      let v1: SomeVerseNode;
      let v2: SomeVerseNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        v1 = $verseFor(shape, "1");
        v2 = $verseFor(shape, "2");
        para = $createParaNode("p");
        $getRoot().append(
          para.append(
            ...$createParaMarkerPrefixNodes(shape, "p"),
            v1,
            v2,
            $createTextNode("In the beginning"),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const result = $getEmptyVerseStatus(para);

        expect(result.emptyKeys).toEqual([v1.getKey()]);
        expect(result.nonEmptyKeys).toEqual([v2.getKey()]);
      });
    });

    it("marks the trailing verse empty when it has no body after a non-empty preceding verse", () => {
      let para: ParaNode;
      let v1: SomeVerseNode;
      let v2: SomeVerseNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        v1 = $verseFor(shape, "1");
        v2 = $verseFor(shape, "2");
        para = $createParaNode("p");
        $getRoot().append(
          para.append(
            ...$createParaMarkerPrefixNodes(shape, "p"),
            v1,
            $createTextNode("text one"),
            v2,
          ),
        );
      });

      editor.getEditorState().read(() => {
        const result = $getEmptyVerseStatus(para);

        expect(result.emptyKeys).toEqual([v2.getKey()]);
        expect(result.nonEmptyKeys).toEqual([v1.getKey()]);
      });
    });

    it("returns no keys for a paragraph with no verses", () => {
      let para: ParaNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        para = $createParaNode("q2");
        $getRoot().append(
          para.append(
            ...$createParaMarkerPrefixNodes(shape, "q2"),
            $createTextNode("continuation"),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const result = $getEmptyVerseStatus(para);

        expect(result.emptyKeys).toEqual([]);
        expect(result.nonEmptyKeys).toEqual([]);
      });
    });

    it("ignores text before the first verse (intro text does not affect classification)", () => {
      let para: ParaNode;
      let v1: SomeVerseNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        v1 = $verseFor(shape, "1");
        para = $createParaNode("p");
        $getRoot().append(
          para.append(
            ...$createParaMarkerPrefixNodes(shape, "p"),
            $createTextNode("pre-verse intro"),
            v1,
          ),
        );
      });

      editor.getEditorState().read(() => {
        const result = $getEmptyVerseStatus(para);

        expect(result.emptyKeys).toEqual([v1.getKey()]);
        expect(result.nonEmptyKeys).toEqual([]);
      });
    });
  });
});

describe("$getActiveVerseKey", () => {
  const shapes: ParaShape[] = ["editable", "gutter-hidden", "plain-hidden"];

  it("returns undefined when there is no range selection", () => {
    const { editor } = createBasicTestEnvironment(nodes, () => {
      $getRoot().append(
        $createParaNode("p").append(
          ...$createParaMarkerPrefixNodes("gutter-hidden", "p"),
          $verseFor("gutter-hidden", "1"),
        ),
      );
    });

    editor.getEditorState().read(() => {
      const result = $getActiveVerseKey();

      expect(result).toBeUndefined();
    });
  });

  it("returns undefined when cursor is in a non-verse paragraph (e.g. \\s heading)", () => {
    const { editor } = createBasicTestEnvironment(nodes, () => {
      const heading = $createTextNode("Heading");
      $getRoot().append(
        $createParaNode("s").append(...$createParaMarkerPrefixNodes("gutter-hidden", "s"), heading),
      );
      heading.select();
    });

    editor.getEditorState().read(() => {
      const result = $getActiveVerseKey();

      expect(result).toBeUndefined();
    });
  });

  describe.each(shapes)("%s shape", (shape) => {
    it("returns undefined when cursor sits before the first verse marker", () => {
      let para: ParaNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        para = $createParaNode("p");
        $getRoot().append(
          para.append(...$createParaMarkerPrefixNodes(shape, "p"), $verseFor(shape, "1")),
        );
        para.select(0, 0);
      });

      editor.getEditorState().read(() => {
        const result = $getActiveVerseKey();

        expect(result).toBeUndefined();
      });
    });

    it("returns the verse key when an element selection sits immediately after its marker", () => {
      let v1: SomeVerseNode;
      let para: ParaNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        v1 = $verseFor(shape, "1");
        para = $createParaNode("p");
        $getRoot().append(para.append(...$createParaMarkerPrefixNodes(shape, "p"), v1));
        // Mimic placeCursorAfterEmptyVerse: drop the caret immediately after the verse marker.
        const after = v1.getIndexWithinParent() + 1;
        para.select(after, after);
      });

      editor.getEditorState().read(() => {
        const result = $getActiveVerseKey();

        expect(result).toBe(v1.getKey());
      });
    });

    it("returns the verse key when the cursor sits in body text after the verse", () => {
      let v1: SomeVerseNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        v1 = $verseFor(shape, "1");
        const body = $createTextNode("In the beginning");
        $getRoot().append(
          $createParaNode("p").append(...$createParaMarkerPrefixNodes(shape, "p"), v1, body),
        );
        body.select();
      });

      editor.getEditorState().read(() => {
        const result = $getActiveVerseKey();

        expect(result).toBe(v1.getKey());
      });
    });

    it("returns the second verse's key when the cursor sits in its section", () => {
      let v2: SomeVerseNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        v2 = $verseFor(shape, "2");
        const body2 = $createTextNode("body two");
        $getRoot().append(
          $createParaNode("p").append(
            ...$createParaMarkerPrefixNodes(shape, "p"),
            $verseFor(shape, "1"),
            $createTextNode("body one"),
            v2,
            body2,
          ),
        );
        body2.select();
      });

      editor.getEditorState().read(() => {
        const result = $getActiveVerseKey();

        expect(result).toBe(v2.getKey());
      });
    });
  });
});

describe("$getParaFromSelection", () => {
  it("returns undefined for an undefined selection", () => {
    expect($getParaFromSelection(undefined)).toBeUndefined();
  });

  it("returns the paragraph when cursor is in a verse paragraph (gutter-hidden shape)", () => {
    let para: ParaNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      const textNode = $createTextNode("Hello world");
      para = $createParaNode("p");
      $getRoot().append(
        para.append(
          ...$createParaMarkerPrefixNodes("gutter-hidden", "p"),
          $verseFor("gutter-hidden", "1"),
          textNode,
        ),
      );
      textNode.select();
    });

    editor.getEditorState().read(() => {
      const result = $getParaFromSelection($getSelection() ?? undefined);

      expect(result?.getKey()).toBe(para.getKey());
    });
  });

  it("returns the paragraph when cursor is in a non-verse para (e.g. \\s heading)", () => {
    let para: ParaNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      const textNode = $createTextNode("Heading");
      para = $createParaNode("s");
      $getRoot().append(
        para.append(...$createParaMarkerPrefixNodes("gutter-hidden", "s"), textNode),
      );
      textNode.select();
    });

    editor.getEditorState().read(() => {
      const result = $getParaFromSelection($getSelection() ?? undefined);

      expect(result?.getKey()).toBe(para.getKey());
    });
  });
});

describe("a selected paragraph marker", () => {
  it("keeps its paragraph the active one", () => {
    let para!: ParaNode;
    let glyph!: ImmutableTypedTextNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      glyph = $createGutterMarkerNode(`\\li2${NBSP}`);
      para = $createParaNode("li2");
      $getRoot().append(para.append(glyph, $createImmutableVerseNode("2"), $createTextNode("two")));
    });

    registerParaMarkerSelectionOwner(editor);
    editor.update(() => $selectParaMarker(glyph), { discrete: true });

    editor.getEditorState().read(() => {
      expect($getParaFromSelection($getSelection() ?? undefined)?.getKey()).toBe(para.getKey());
    });
  });

  it("treats the verse its content starts in as the active verse", () => {
    let glyph!: ImmutableTypedTextNode;
    let v2!: SomeVerseNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      glyph = $createGutterMarkerNode(`\\li2${NBSP}`);
      v2 = $createImmutableVerseNode("2");
      $getRoot().append($createParaNode("li2").append(glyph, v2));
    });

    registerParaMarkerSelectionOwner(editor);
    editor.update(() => $selectParaMarker(glyph), { discrete: true });

    editor.getEditorState().read(() => {
      expect($getActiveVerseKey()).toBe(v2.getKey());
    });
  });
});

describe("ActiveTextPlugin empty-verse classes", () => {
  it("swaps the cursor's empty verse to the active class, and restores it when the cursor leaves", async () => {
    let para!: ParaNode;
    let v3!: SomeVerseNode;
    let v4!: SomeVerseNode;
    let v5!: SomeVerseNode;
    const { editor } = await baseTestEnvironment(
      () => {
        para = $createParaNode("p");
        v3 = $createImmutableVerseNode("3");
        v4 = $createImmutableVerseNode("4");
        v5 = $createImmutableVerseNode("5");
        $getRoot().append(para.append(v3, v4, v5, $createTextNode("five")));
      },
      <ActiveTextPlugin viewOptions={getViewOptions(PARAGRAPH_STRUCTURE_VIEW_MODE)} />,
    );
    const classesOf = (verse: SomeVerseNode) => {
      const classList = editor.getElementByKey(verse.getKey())?.classList;
      return {
        empty: classList?.contains("psc-empty-text"),
        active: classList?.contains("psc-empty-text-active"),
      };
    };

    // The cursor rests right after verse 3's marker.
    await act(async () => {
      editor.update(() => para.select(1, 1));
    });
    // The active empty verse is marked, not just unmarked, so the stylesheet can keep its
    // ellipsis's width and the line doesn't reflow.
    expect(classesOf(v3)).toEqual({ empty: false, active: true });
    expect(classesOf(v4)).toEqual({ empty: true, active: false });
    expect(classesOf(v5)).toEqual({ empty: false, active: false });

    // Moving to verse 4 hands the active class over.
    await act(async () => {
      editor.update(() => para.select(2, 2));
    });
    expect(classesOf(v3)).toEqual({ empty: true, active: false });
    expect(classesOf(v4)).toEqual({ empty: false, active: true });
  });

  it("clears the active class once the verse gets body text", async () => {
    let para!: ParaNode;
    let v3!: SomeVerseNode;
    const { editor } = await baseTestEnvironment(
      () => {
        para = $createParaNode("p");
        v3 = $createImmutableVerseNode("3");
        $getRoot().append(para.append(v3, $createImmutableVerseNode("4")));
      },
      <ActiveTextPlugin viewOptions={getViewOptions(PARAGRAPH_STRUCTURE_VIEW_MODE)} />,
    );
    await act(async () => {
      editor.update(() => para.select(1, 1));
    });

    await act(async () => {
      editor.update(() => {
        const text = $createTextNode("typed");
        v3.insertAfter(text);
        text.select(5, 5);
      });
    });

    const classList = editor.getElementByKey(v3.getKey())?.classList;
    expect(classList?.contains("psc-empty-text")).toBe(false);
    expect(classList?.contains("psc-empty-text-active")).toBe(false);
  });
});

/**
 * Focuses the editor for real, as it is while the user clicks: Lexical then writes each selection to
 * the DOM, and an update made outside any event reads it back from there.
 */
async function focusEditor(editor: LexicalEditor) {
  await act(async () => {
    editor.getRootElement()?.focus();
  });
  await settle();
}

/**
 * Dispatches the click Lexical turns a DOM click on `element` into, and returns the selection that
 * click committed. The selectionchange its DOM write queues is withheld from Lexical: read back, it
 * would resolve the caret again, and the test would grade that rather than the click.
 */
async function clickOn(
  editor: LexicalEditor,
  element: Element | null | undefined,
  {
    detail = 1,
    $mousedown,
  }: {
    detail?: number;
    /** Puts the caret where the click's mousedown resolved it, in the click's own update. */
    $mousedown?: () => void;
  } = {},
) {
  if (!element) throw new Error("expected an element to click");
  const event = new MouseEvent("click", { detail });
  Object.defineProperty(event, "target", { value: element });
  const withhold = (e: Event) => e.stopPropagation();
  window.addEventListener("selectionchange", withhold, true);
  try {
    await act(async () => {
      editor.update(() => {
        $mousedown?.();
        editor.dispatchCommand(CLICK_COMMAND, event);
      });
    });
    await settle();
  } finally {
    window.removeEventListener("selectionchange", withhold, true);
  }
}

describe("ActiveTextPlugin with the empty-verse caret guard", () => {
  /** Verse 3 is empty, verse 4 has text, and the caret is hosted right after verse 3's number. */
  async function hostedEmptyVerse() {
    let para!: ParaNode;
    let v3!: SomeVerseNode;
    const { editor } = await baseTestEnvironment(
      () => {
        para = $createParaNode("p");
        v3 = $createImmutableVerseNode("3");
        $getRoot().append(para.append(v3, $createImmutableVerseNode("4"), $createTextNode("four")));
      },
      <>
        <EmptyVerseCaretGuardPlugin />
        <ActiveTextPlugin viewOptions={getViewOptions(PARAGRAPH_STRUCTURE_VIEW_MODE)} />
      </>,
    );
    await focusEditor(editor);
    await act(async () => {
      editor.update(() => para.select(1, 1));
    });
    await act(async () => {
      editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    });
    return { editor, para, v3 };
  }

  it("draws no focus box or active verse after a blur, though the blur's host removal commits", async () => {
    const { editor, para, v3 } = await hostedEmptyVerse();
    const paraClasses = () => editor.getElementByKey(para.getKey())?.classList;
    const verseClasses = () => editor.getElementByKey(v3.getKey())?.classList;
    expect(paraClasses()?.contains("psc-active-text")).toBe(true);
    expect(verseClasses()?.contains(ACTIVE_EMPTY_CLASS)).toBe(true);

    await act(async () => {
      editor.dispatchCommand(BLUR_COMMAND, new FocusEvent("blur"));
    });

    expect(editor.getEditorState().read(() => para.getChildren().some($isCaretHost))).toBe(false);
    expect(paraClasses()?.contains("psc-active-text")).toBe(false);
    expect(verseClasses()?.contains(ACTIVE_EMPTY_CLASS)).toBe(false);
    expect(verseClasses()?.contains(EMPTY_CLASS)).toBe(true);

    // Focus returning draws them again.
    await act(async () => {
      editor.dispatchCommand(FOCUS_COMMAND, new FocusEvent("focus"));
    });
    await settle();
    expect(paraClasses()?.contains("psc-active-text")).toBe(true);
    expect(verseClasses()?.contains(ACTIVE_EMPTY_CLASS)).toBe(true);
  });

  it("puts the caret into the host when the active empty verse's ellipsis is clicked", async () => {
    const { editor, para, v3 } = await hostedEmptyVerse();

    // The click on the ellipsis lands on the element point in front of the host.
    await clickOn(editor, editor.getElementByKey(v3.getKey()), {
      $mousedown: () => para.select(1, 1),
    });

    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      expect($isCaretHost(selection.anchor.getNode())).toBe(true);
      expect(selection.anchor.getNode().getPreviousSibling()?.is(v3)).toBe(true);
    });
  });

  it("leaves a double-click's selection alone", async () => {
    const { editor, para, v3 } = await hostedEmptyVerse();
    await act(async () => {
      editor.update(() => {
        const four = para.getLastChild();
        if ($isTextNode(four)) four.select(0, 4);
      });
    });

    await clickOn(editor, editor.getElementByKey(v3.getKey()), { detail: 2 });

    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      expect(selection.isCollapsed()).toBe(false);
    });
  });
});

describe("ActiveTextPlugin with editable verse markers", () => {
  it("leaves a click inside an empty verse's marker text where it landed", async () => {
    let v2!: VerseNode;
    const { editor } = await baseTestEnvironment(
      () => {
        // The visible marker text the adaptor gives an editable verse.
        v2 = $createVerseNode("2", "\\v 2 ");
        $getRoot().append(
          $createParaNode("p").append(
            ...$createParaMarkerPrefixNodes("editable", "p"),
            v2,
            $verseFor("editable", "3"),
            $createTextNode("three"),
          ),
        );
      },
      <ActiveTextPlugin viewOptions={getViewOptions(PARAGRAPH_STRUCTURE_VIEW_MODE)} />,
    );
    await focusEditor(editor);
    // Lexical resolves the click to a caret inside `\v 2 `, which makes verse 2 the active one.
    await act(async () => {
      editor.update(() => v2.select(1, 1));
    });
    const element = editor.getElementByKey(v2.getKey());
    expect(element?.classList.contains(ACTIVE_EMPTY_CLASS)).toBe(true);

    await clickOn(editor, element);

    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      expect(selection.anchor.key).toBe(v2.getKey());
      expect(selection.anchor.offset).toBe(1);
    });
  });
});
