import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $createTextNode,
  $getNodeByKey,
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  BLUR_COMMAND,
  CLICK_COMMAND,
  FOCUS_COMMAND,
  LexicalEditor,
  LexicalNode,
  SELECTION_CHANGE_COMMAND,
  TextNode,
} from "lexical";
import {
  $createCharNode,
  $createGutterMarkerNode,
  $createImmutableTableCellNode,
  $createImmutableTableNode,
  $createImmutableTableRowNode,
  $createParaNode,
  $createVerseNode,
  $isCaretHost,
  $selectParaMarker,
  registerParaMarkerSelectionOwner,
  CharNode,
  ImmutableTableCellNode,
  ImmutableTableNode,
  ImmutableTableRowNode,
  ImmutableTypedTextNode,
  MarkerNode,
  NBSP,
  ParaNode,
  VerseNode,
} from "shared";
import {
  $createImmutableVerseNode,
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
  $getActiveVerseSection,
  $getEmptyVerseStatus,
  $getParaFromSelection,
  ACTIVE_EMPTY_CLASS,
  ActiveTextPlugin,
  EMPTY_CLASS,
  measureVerseSection,
} from "./ActiveTextPlugin";
import { $createMarkerPrefix } from "./markerEdit/markerEditDeletion.utils";

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
  ImmutableTableNode,
  ImmutableTableRowNode,
  ImmutableTableCellNode,
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
  if (shape === "editable") return $createMarkerPrefix(marker);
  if (shape === "gutter-hidden") return [$createGutterMarkerNode(`\\${marker}${NBSP}`)];
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

describe("$getActiveVerseKey with nested verses", () => {
  it("finds a verse nested in a char span, agreeing with the section at every caret position", () => {
    let v1!: SomeVerseNode;
    let v2!: SomeVerseNode;
    let v3!: SomeVerseNode;
    let wj!: CharNode;
    const texts: TextNode[] = [];
    const $text = (content: string) => {
      const node = $createTextNode(content);
      texts.push(node);
      return node;
    };
    const { editor } = createBasicTestEnvironment(nodes, () => {
      v1 = $verseFor("gutter-hidden", "1");
      v2 = $verseFor("gutter-hidden", "2");
      v3 = $verseFor("gutter-hidden", "3");
      wj = $createCharNode("wj");
      // `\p \v 1 He said, \wj "Come. \v 2 Follow me."\wj* \v 3 They went.`
      $getRoot().append(
        $createParaNode("p").append(
          ...$createParaMarkerPrefixNodes("gutter-hidden", "p"),
          v1,
          $text("He said, "),
          wj.append($text('"Come. '), v2, $text('Follow me."')),
          $text(" "),
          v3,
          $text("They went."),
        ),
      );
    });

    const expected = [v1, v1, v2, v2, v3].map((verse) => verse.getKey());
    texts.forEach((text, i) => {
      editor.update(() => $getNodeByKey(text.getKey())?.selectEnd(), { discrete: true });
      editor.getEditorState().read(() => {
        expect($getActiveVerseKey()).toBe(expected[i]);
        expect($getActiveVerseKey()).toBe($getActiveVerseSection()?.verseKey);
      });
    });
  });
});

describe("$getActiveVerseSection", () => {
  const shapes: ParaShape[] = ["editable", "gutter-hidden", "plain-hidden"];

  it("returns undefined when there is no range selection", () => {
    const { editor } = createBasicTestEnvironment(nodes, () => {
      $getRoot().append($createParaNode("p").append($verseFor("gutter-hidden", "1")));
    });

    editor.getEditorState().read(() => {
      expect($getActiveVerseSection()).toBeUndefined();
    });
  });

  it("reports no verses for a paragraph without verse markers", () => {
    let para: ParaNode;
    let heading: LexicalNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      heading = $createTextNode("Heading");
      para = $createParaNode("s");
      $getRoot().append(
        para.append(...$createParaMarkerPrefixNodes("gutter-hidden", "s"), heading),
      );
      heading.selectStart();
    });

    editor.getEditorState().read(() => {
      expect($getActiveVerseSection()).toEqual({
        paraKey: para.getKey(),
        verseKey: undefined,
        nextVerseKey: undefined,
        startKey: heading.getKey(),
      });
    });
  });

  it("finds a verse nested in a char span that crosses the verse break", () => {
    let v1: SomeVerseNode;
    let v2: SomeVerseNode;
    let v3: SomeVerseNode;
    let come: LexicalNode;
    let followMe: LexicalNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      v1 = $verseFor("gutter-hidden", "1");
      v2 = $verseFor("gutter-hidden", "2");
      v3 = $verseFor("gutter-hidden", "3");
      come = $createTextNode('"Come. ');
      followMe = $createTextNode('Follow me."');
      // `\p \v 1 He said, \wj "Come. \v 2 Follow me."\wj* \v 3 They went.`
      $getRoot().append(
        $createParaNode("p").append(
          ...$createParaMarkerPrefixNodes("gutter-hidden", "p"),
          v1,
          $createTextNode("He said, "),
          $createCharNode("wj").append(come, v2, followMe),
          $createTextNode(" "),
          v3,
          $createTextNode("They went."),
        ),
      );
    });

    editor.update(() => $getNodeByKey(followMe.getKey())?.selectStart(), { discrete: true });
    editor.getEditorState().read(() => {
      const section = $getActiveVerseSection();
      expect(section?.verseKey).toBe(v2.getKey());
      expect(section?.nextVerseKey).toBe(v3.getKey());
      expect(section?.startKey).toBe(v2.getKey());
    });

    editor.update(() => $getNodeByKey(come.getKey())?.selectEnd(), { discrete: true });
    editor.getEditorState().read(() => {
      const section = $getActiveVerseSection();
      expect(section?.verseKey).toBe(v1.getKey());
      expect(section?.nextVerseKey).toBe(v2.getKey());
    });
  });

  it("starts an intro inside a char span at its first leaf", () => {
    let come!: TextNode;
    let v1!: SomeVerseNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      come = $createTextNode('"Come. ');
      v1 = $verseFor("gutter-hidden", "1");
      // `\p \wj "Come. \v 1 Follow me."\wj*`
      $getRoot().append(
        $createParaNode("p").append(
          ...$createParaMarkerPrefixNodes("gutter-hidden", "p"),
          $createCharNode("wj").append(come, v1, $createTextNode('Follow me."')),
        ),
      );
      come.select(1, 1);
    });

    editor.getEditorState().read(() => {
      const section = $getActiveVerseSection();
      expect(section?.startKey).toBe(come.getKey());
      expect(section?.nextVerseKey).toBe(v1.getKey());
    });
  });

  it("gives no start to an empty intro whose char span opens with the first verse", () => {
    let wj!: CharNode;
    let v1!: SomeVerseNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      v1 = $verseFor("gutter-hidden", "1");
      wj = $createCharNode("wj");
      // `\p \wj \v 1 Follow me.\wj*`
      $getRoot().append(
        $createParaNode("p").append(
          ...$createParaMarkerPrefixNodes("gutter-hidden", "p"),
          wj.append(v1, $createTextNode("Follow me.")),
        ),
      );
      wj.select(0, 0);
    });

    editor.getEditorState().read(() => {
      const section = $getActiveVerseSection();
      expect(section?.verseKey).toBeUndefined();
      expect(section?.nextVerseKey).toBe(v1.getKey());
      expect(section?.startKey).toBeUndefined();
    });
  });

  it("puts an element point at a char span's end after the verse nested in it", () => {
    let wj!: CharNode;
    let v2!: SomeVerseNode;
    let v3!: SomeVerseNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      v2 = $verseFor("gutter-hidden", "2");
      v3 = $verseFor("gutter-hidden", "3");
      wj = $createCharNode("wj");
      $getRoot().append(
        $createParaNode("p").append(
          ...$createParaMarkerPrefixNodes("gutter-hidden", "p"),
          $verseFor("gutter-hidden", "1"),
          // The span ends with the verse, so the point can't be normalized into a text node.
          wj.append($createTextNode("Come. "), v2),
          v3,
          $createTextNode("They went."),
        ),
      );
      wj.select(wj.getChildrenSize(), wj.getChildrenSize());
    });

    editor.getEditorState().read(() => {
      const section = $getActiveVerseSection();
      expect(section?.verseKey).toBe(v2.getKey());
      expect(section?.nextVerseKey).toBe(v3.getKey());
    });
  });

  it("reports no section for a caret in a table, whose top-level element is a row", () => {
    let cellText!: TextNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      cellText = $createTextNode("Nahshon son of Amminadab");
      // `\tr \tc1 \v 12 Day 1 \tc2 \v 13 Nahshon son of Amminadab`
      $getRoot().append(
        $createImmutableTableNode().append(
          $createImmutableTableRowNode("tr").append(
            $createImmutableTableCellNode("tc1", "start").append(
              $verseFor("gutter-hidden", "12"),
              $createTextNode("Day 1"),
            ),
            $createImmutableTableCellNode("tc2", "start").append(
              $verseFor("gutter-hidden", "13"),
              cellText,
            ),
          ),
        ),
      );
      cellText.select(3, 3);
    });

    editor.getEditorState().read(() => {
      expect($getActiveVerseSection()).toBeUndefined();
      expect($getActiveVerseKey()).toBeUndefined();
    });
  });

  it("gives an intro of only whitespace no start", () => {
    let space!: TextNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      space = $createTextNode(" ");
      $getRoot().append(
        $createParaNode("p").append(
          ...$createParaMarkerPrefixNodes("gutter-hidden", "p"),
          space,
          $verseFor("gutter-hidden", "2"),
          $createTextNode("The earth"),
        ),
      );
      space.select(0, 0);
    });

    editor.getEditorState().read(() => {
      expect($getActiveVerseSection()?.startKey).toBeUndefined();
    });
  });

  it("starts an intro before a span it opens with that lies wholly in the intro", () => {
    let bd!: CharNode;
    let rest!: TextNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      bd = $createCharNode("bd");
      rest = $createTextNode(" and more");
      // `\p \bd Bold\bd* and more \v 1 one`
      $getRoot().append(
        $createParaNode("p").append(
          ...$createParaMarkerPrefixNodes("gutter-hidden", "p"),
          bd.append($createTextNode("Bold")),
          rest,
          $verseFor("gutter-hidden", "1"),
          $createTextNode("one"),
        ),
      );
      rest.select(2, 2);
    });

    editor.getEditorState().read(() => {
      expect($getActiveVerseSection()?.startKey).toBe(bd.getKey());
    });
  });

  it("reads the caret from the anchor, as the toolbar's verse reference does", () => {
    let v3: SomeVerseNode;
    let s: ParaNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      v3 = $verseFor("gutter-hidden", "3");
      const body2 = $createTextNode("body two");
      const body3 = $createTextNode("body three");
      const heading = $createTextNode("Heading");
      s = $createParaNode("s");
      $getRoot().append(
        s.append(...$createParaMarkerPrefixNodes("gutter-hidden", "s"), heading),
        $createParaNode("p").append(
          ...$createParaMarkerPrefixNodes("gutter-hidden", "p"),
          $verseFor("gutter-hidden", "2"),
          body2,
          v3,
          body3,
        ),
      );
      // Shift+Up from v3's body into the heading above: the anchor stays put, the focus moves.
      const selection = body3.select(4, 4);
      selection.focus.set(heading.getKey(), 2, "text");
    });

    editor.getEditorState().read(() => {
      expect($getActiveVerseSection()?.verseKey).toBe(v3.getKey());
      expect($getParaFromSelection($getSelection() ?? undefined)?.getKey()).not.toBe(s.getKey());
    });
  });

  it("closes a selected paragraph marker's section at the verse after the one its content starts in", () => {
    let glyph!: ImmutableTypedTextNode;
    let v2!: SomeVerseNode;
    let v3!: SomeVerseNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      glyph = $createGutterMarkerNode(`\\li2${NBSP}`);
      v2 = $createImmutableVerseNode("2");
      v3 = $createImmutableVerseNode("3");
      $getRoot().append(
        $createParaNode("li2").append(glyph, v2, $createTextNode("two"), v3, $createTextNode("3")),
      );
    });

    registerParaMarkerSelectionOwner(editor);
    editor.update(() => $selectParaMarker(glyph), { discrete: true });

    editor.getEditorState().read(() => {
      const section = $getActiveVerseSection();
      expect(section?.verseKey).toBe(v2.getKey());
      expect(section?.nextVerseKey).toBe(v3.getKey());
    });
  });

  describe.each(shapes)("%s shape", (shape) => {
    it("starts the intro section after the marker prefix and closes it at the first verse", () => {
      let para: ParaNode;
      let intro: LexicalNode;
      let v1: SomeVerseNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        intro = $createTextNode("Intro");
        v1 = $verseFor(shape, "1");
        para = $createParaNode("p");
        $getRoot().append(
          para.append(...$createParaMarkerPrefixNodes(shape, "p"), intro, v1, $createTextNode("a")),
        );
        intro.selectStart();
      });

      editor.getEditorState().read(() => {
        expect($getActiveVerseSection()).toEqual({
          paraKey: para.getKey(),
          verseKey: undefined,
          nextVerseKey: v1.getKey(),
          startKey: intro.getKey(),
        });
      });
    });

    it("gives an empty intro no start", () => {
      let v1: SomeVerseNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        v1 = $verseFor(shape, "1");
        const para = $createParaNode("p");
        $getRoot().append(para.append(...$createParaMarkerPrefixNodes(shape, "p"), v1));
        para.select(0, 0);
      });

      editor.getEditorState().read(() => {
        const section = $getActiveVerseSection();
        expect(section?.verseKey).toBeUndefined();
        expect(section?.nextVerseKey).toBe(v1.getKey());
        expect(section?.startKey).toBeUndefined();
      });
    });

    it("starts a verse's section at its marker", () => {
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
        expect($getActiveVerseSection()?.startKey).toBe(v1.getKey());
      });
    });

    it("pairs the cursor's verse with the verse after it", () => {
      let v2: SomeVerseNode;
      let v3: SomeVerseNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        v2 = $verseFor(shape, "2");
        v3 = $verseFor(shape, "3");
        const body2 = $createTextNode("body two");
        $getRoot().append(
          $createParaNode("p").append(
            ...$createParaMarkerPrefixNodes(shape, "p"),
            $verseFor(shape, "1"),
            $createTextNode("body one"),
            v2,
            body2,
            v3,
            $createTextNode("body three"),
          ),
        );
        body2.select();
      });

      editor.getEditorState().read(() => {
        const section = $getActiveVerseSection();
        expect(section?.verseKey).toBe(v2.getKey());
        expect(section?.nextVerseKey).toBe(v3.getKey());
      });
    });

    it("pairs an element selection right after a verse marker with the verse after it", () => {
      let v1: SomeVerseNode;
      let v2: SomeVerseNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        v1 = $verseFor(shape, "1");
        v2 = $verseFor(shape, "2");
        const para = $createParaNode("p");
        $getRoot().append(para.append(...$createParaMarkerPrefixNodes(shape, "p"), v1, v2));
        const after = v1.getIndexWithinParent() + 1;
        para.select(after, after);
      });

      editor.getEditorState().read(() => {
        const section = $getActiveVerseSection();
        expect(section?.verseKey).toBe(v1.getKey());
        expect(section?.nextVerseKey).toBe(v2.getKey());
      });
    });

    it("leaves the last verse's section open to the paragraph's end", () => {
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
        const section = $getActiveVerseSection();
        expect(section?.verseKey).toBe(v2.getKey());
        expect(section?.nextVerseKey).toBeUndefined();
      });
    });
  });
});

describe("measureVerseSection", () => {
  // jsdom has no layout: stand in for `Range.getClientRects()`, keeping the range it was asked of.
  const textRects = [new DOMRect(110, 24, 180, 16)];
  let clientRects: DOMRect[] | ((range: Range) => DOMRect[]);
  let measured: Range | undefined;
  const hadClientRects = Object.prototype.hasOwnProperty.call(Range.prototype, "getClientRects");
  const originalClientRects = Range.prototype.getClientRects;
  beforeEach(() => {
    measured = undefined;
    clientRects = textRects;
    Range.prototype.getClientRects = function (this: Range) {
      // The section's own range is measured first; whitespace runs may be measured after it.
      measured ??= this.cloneRange();
      const rects = typeof clientRects === "function" ? clientRects(this) : clientRects;
      return rects as unknown as DOMRectList;
    };
  });
  afterEach(() => {
    vi.restoreAllMocks();
    if (hadClientRects) Range.prototype.getClientRects = originalClientRects;
    else delete (Range.prototype as Partial<Range>).getClientRects;
  });

  /** A paragraph `\p \v 1 one \v 2 two` with the caret in the body of verse `caretIn`. */
  function setUp(caretIn: 1 | 2) {
    let v1!: SomeVerseNode;
    let v2!: SomeVerseNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      v1 = $verseFor("gutter-hidden", "1");
      v2 = $verseFor("gutter-hidden", "2");
      const body1 = $createTextNode("one");
      const body2 = $createTextNode("two");
      $getRoot().append(
        $createParaNode("p").append(
          ...$createParaMarkerPrefixNodes("gutter-hidden", "p"),
          v1,
          body1,
          v2,
          body2,
        ),
      );
      (caretIn === 1 ? body1 : body2).select(1, 1);
    });
    const section = editor.getEditorState().read($getActiveVerseSection);
    if (!section) throw new Error("expected a verse section");
    const paraEl = editor.getElementByKey(section.paraKey);
    const v1El = editor.getElementByKey(v1.getKey());
    const v2El = editor.getElementByKey(v2.getKey());
    if (!paraEl || !v1El || !v2El) throw new Error("expected the paragraph to be rendered");
    return { editor, section, paraEl, v1El, v2El };
  }

  it("measures from the verse marker to just before the next one", () => {
    const { editor, section, paraEl, v1El, v2El } = setUp(1);
    paraEl.style.padding = "0px 4px 0px 8px";
    paraEl.style.borderLeft = "1px solid";
    paraEl.getBoundingClientRect = () => new DOMRect(100, 20, 400, 48);
    v1El.style.margin = "0px 3px 0px 2px";
    v1El.getClientRects = () => [new DOMRect(110, 26, 9, 13)] as unknown as DOMRectList;
    const nextBox = new DOMRect(300, 26, 9, 13);
    v2El.getBoundingClientRect = () => nextBox;

    const measurement = measureVerseSection(editor, section);

    expect(measured?.startContainer).toBe(paraEl);
    expect(paraEl.childNodes[measured?.startOffset ?? -1]).toBe(v1El);
    expect(measured?.endContainer).toBe(paraEl);
    expect(paraEl.childNodes[measured?.endOffset ?? -1]).toBe(v2El);
    // Copied out of the DOMRects, whose sides are getters that spreading doesn't see.
    expect(measurement?.rects[0]).toEqual({ left: 110, right: 290, top: 24, bottom: 40 });
    // The verse number's margin box, so its margin sits inside the outline.
    expect(measurement?.rects[1]).toEqual({ left: 108, right: 122, top: 26, bottom: 39 });
    expect(measurement?.rects).toHaveLength(2);
    expect(measurement?.following).toEqual({ left: 300, right: 309, top: 26, bottom: 39 });
    expect(measurement?.contentBox).toEqual({ left: 109, right: 496 });
    expect(measurement?.direction).toBe("ltr");
    expect(measurement?.hugLines).toBe(false);
  });

  it("measures the last verse to the paragraph's end, with nothing following", () => {
    const { editor, section, paraEl, v2El } = setUp(2);
    paraEl.style.direction = "rtl";

    const measurement = measureVerseSection(editor, section);

    expect(paraEl.childNodes[measured?.startOffset ?? -1]).toBe(v2El);
    expect(measured?.endContainer).toBe(paraEl);
    expect(measured?.endOffset).toBe(paraEl.childNodes.length);
    expect(measurement?.following).toBeUndefined();
    expect(measurement?.direction).toBe("rtl");
  });

  it("scales the paragraph's computed lengths by its CSS zoom", () => {
    const { editor, section, paraEl, v1El } = setUp(1);
    Object.defineProperty(paraEl, "currentCSSZoom", { value: 2 });
    paraEl.style.padding = "0px 4px 0px 8px";
    paraEl.getBoundingClientRect = () => new DOMRect(100, 20, 400, 48);
    v1El.style.margin = "0px 3px 0px 2px";
    v1El.getClientRects = () => [new DOMRect(110, 26, 9, 13)] as unknown as DOMRectList;

    const measurement = measureVerseSection(editor, section);

    expect(measurement?.contentBox).toEqual({ left: 116, right: 492 });
    expect(measurement?.rects[1]).toEqual({ left: 106, right: 125, top: 26, bottom: 39 });
  });

  it("measures an intro from its first leaf, without a margin box for its wrapping span", () => {
    let come!: TextNode;
    let v1!: SomeVerseNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      come = $createTextNode('"Come. ');
      v1 = $verseFor("gutter-hidden", "1");
      $getRoot().append(
        $createParaNode("p").append(
          ...$createParaMarkerPrefixNodes("gutter-hidden", "p"),
          $createCharNode("wj").append(come, v1, $createTextNode('Follow me."')),
        ),
      );
      come.select(1, 1);
    });
    const section = editor.getEditorState().read($getActiveVerseSection);
    if (!section) throw new Error("expected a verse section");
    const comeEl = editor.getElementByKey(come.getKey());
    const v1El = editor.getElementByKey(v1.getKey());
    // Its box spans every line it wraps over; it must not reach the outline.
    if (comeEl) comeEl.getBoundingClientRect = () => new DOMRect(100, 20, 400, 90);

    const measurement = measureVerseSection(editor, section);

    expect(measured?.startContainer.childNodes[measured.startOffset]).toBe(comeEl);
    expect(measured?.endContainer.childNodes[measured.endOffset]).toBe(v1El);
    expect(measurement?.rects).toHaveLength(1);
    expect(measurement?.rects[0]).toEqual({ left: 110, right: 290, top: 24, bottom: 40 });
  });

  it("leaves an intro with nothing visible, such as a lone milestone, to the whole-paragraph outline", () => {
    let intro!: TextNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      intro = $createTextNode("x");
      $getRoot().append(
        $createParaNode("p").append(
          ...$createParaMarkerPrefixNodes("gutter-hidden", "p"),
          intro,
          $verseFor("gutter-hidden", "1"),
        ),
      );
      intro.select(0, 0);
    });
    const section = editor.getEditorState().read($getActiveVerseSection);
    if (!section) throw new Error("expected a verse section");
    // A milestone renders as an empty span: its range has only rects without width.
    clientRects = [new DOMRect(110, 24, 0, 16)];

    expect(measureVerseSection(editor, section)).toBeUndefined();
    expect(measured).toBeDefined();
  });

  it("measures nothing when the next verse is rendered outside the paragraph", () => {
    const { editor, section } = setUp(1);
    let elsewhere!: SomeVerseNode;
    editor.update(
      () => {
        elsewhere = $verseFor("gutter-hidden", "9");
        $getRoot().append($createParaNode("p").append(elsewhere));
      },
      { discrete: true },
    );

    expect(
      measureVerseSection(editor, { ...section, nextVerseKey: elsewhere.getKey() }),
    ).toBeUndefined();
    expect(measured).toBeUndefined();
  });

  it("measures nothing without a layout engine", () => {
    const { editor, section } = setUp(1);
    delete (Range.prototype as Partial<Range>).getClientRects;

    expect(measureVerseSection(editor, section)).toBeUndefined();
  });

  it("takes in each line of a verse number that wraps", () => {
    const { editor, section, v1El } = setUp(1);
    v1El.style.margin = "0px 2px";
    v1El.getClientRects = () =>
      [new DOMRect(470, 26, 30, 13), new DOMRect(100, 50, 12, 13)] as unknown as DOMRectList;

    const measurement = measureVerseSection(editor, section);

    expect(measurement?.rects.slice(1)).toEqual([
      { left: 468, right: 502, top: 26, bottom: 39 },
      { left: 98, right: 114, top: 50, bottom: 63 },
    ]);
  });

  it("drops a centered paragraph's hanging spaces, but keeps them where lines run to the edge", () => {
    const { editor, section, paraEl } = setUp(1);
    editor.update(
      () => {
        const body = $getNodeByKey(section.verseKey ?? "")?.getNextSibling();
        if ($isTextNode(body)) body.setTextContent("one more");
      },
      { discrete: true },
    );
    const hang = new DOMRect(290, 24, 4, 16);
    // A whitespace run's own range starts in its text node.
    clientRects = (range) =>
      range.startContainer.nodeType === Node.TEXT_NODE ? [hang] : [textRects[0], hang];

    expect(measureVerseSection(editor, section)?.rects).toEqual([
      { left: 110, right: 290, top: 24, bottom: 40 },
      { left: 290, right: 294, top: 24, bottom: 40 },
    ]);

    paraEl.style.textAlign = "center";

    expect(measureVerseSection(editor, section)?.rects).toEqual([
      { left: 110, right: 290, top: 24, bottom: 40 },
    ]);
  });

  it.each([
    ["-webkit-left", false],
    ["-webkit-right", true],
  ])("reads Chromium's computed text-align %s like the plain keyword", (textAlign, hugs) => {
    const { editor, section, paraEl } = setUp(1);
    // jsdom drops the `-webkit-` keywords when they're set, so report one as Chromium would.
    const getComputedStyle = window.getComputedStyle.bind(window);
    vi.spyOn(window, "getComputedStyle").mockImplementation((element) => {
      const style = getComputedStyle(element);
      if (element !== paraEl) return style;
      return new Proxy(style, {
        get: (target, key) => (key === "textAlign" ? textAlign : Reflect.get(target, key)),
      });
    });

    expect(measureVerseSection(editor, section)?.hugLines).toBe(hugs);
  });

  it.each([
    ["right", "rtl", false],
    ["left", "rtl", true],
    ["end", "ltr", true],
  ])("hugs lines for text-align %s in %s: %s", (textAlign, direction, hugs) => {
    const { editor, section, paraEl } = setUp(1);
    paraEl.style.textAlign = textAlign;
    paraEl.style.direction = direction;

    expect(measureVerseSection(editor, section)?.hugLines).toBe(hugs);
  });

  it("hugs the lines of a centered paragraph", () => {
    const { editor, section, paraEl } = setUp(1);
    paraEl.style.textAlign = "center";

    expect(measureVerseSection(editor, section)?.hugLines).toBe(true);
  });

  it("measures nothing for an intro with no content", () => {
    const { editor, section } = setUp(1);

    expect(
      measureVerseSection(editor, { ...section, verseKey: undefined, startKey: undefined }),
    ).toBeUndefined();
    expect(measured).toBeUndefined();
  });

  it("leaves a paragraph without verse markers to the whole-paragraph outline", () => {
    let para!: ParaNode;
    let heading!: LexicalNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      heading = $createTextNode("Heading");
      para = $createParaNode("s");
      $getRoot().append(
        para.append(...$createParaMarkerPrefixNodes("gutter-hidden", "s"), heading),
      );
    });
    const section = {
      paraKey: para.getKey(),
      verseKey: undefined,
      nextVerseKey: undefined,
      startKey: heading.getKey(),
    };

    expect(measureVerseSection(editor, section)).toBeUndefined();
    expect(measured).toBeUndefined();
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
