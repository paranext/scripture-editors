// Should only be used on nodes that are initialized in the test environment.
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { $createImmutableVerseNode } from "../../nodes/usj";
import { baseTestEnvironment, sutUpdate, updateSelection } from "./react-test.utils";
import { UnstorableCharacter } from "./unstorable-text.model";
import {
  $deletionJoinsSlashes,
  $removeUnstorableTextFromNodes,
  $textAroundSelection,
  JudgedDeletion,
  removeUnstorableText,
} from "./unstorableText.utils";
import {
  $createRangeSelection,
  $createTextNode,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  ElementNode,
  LexicalEditor,
  LexicalNode,
  PointType,
  TextNode,
} from "lexical";
import {
  $createCharNode,
  $createGutterMarkerNode,
  $createImmutableTypedTextNode,
  $createImmutableUnmatchedNode,
  $createNoteNode,
  $createParaNode,
  $createTypedMarkNode,
  $createUnknownNode,
} from "shared";

describe("removeUnstorableText", () => {
  it.each<[string, string | undefined, string | undefined, string, UnstorableCharacter[]]>([
    ["and/or", undefined, undefined, "and/or", []],
    ["1/2", undefined, undefined, "1/2", []],
    ["https://example.org", undefined, undefined, "https:example.org", ["//"]],
    ["a///b", undefined, undefined, "a/b", ["//"]],
    ["a////b", undefined, undefined, "ab", ["//"]],
    ["\\v 9 x", undefined, undefined, "v 9 x", ["\\"]],
    ["\\nd y\\nd*", undefined, undefined, "nd ynd*", ["\\"]],
    ["x\\//y", undefined, undefined, "xy", ["\\", "//"]],
    ["/b", "a/", undefined, "b", ["//"]],
    ["a/", undefined, "/c", "a", ["//"]],
    ["//b", "a/", undefined, "b", ["//"]],
    // First met, by position in the pasted text.
    ["a//b\\c", undefined, undefined, "abc", ["//", "\\"]],
    // Removing a `\` brings two slashes together.
    ["a/\\/b", undefined, undefined, "ab", ["//", "\\"]],
    // Only a `/` touching the insertion point counts.
    ["/b", "a", "/", "/b", []],
    ["b/", "/", "c", "b/", []],
    ["/", "/", "/", "", ["//"]],
    ["", "/", "/", "", []],
  ])("%j (before %j, after %j) → %j", (text, before, after, expected, removed) => {
    expect(removeUnstorableText(text, before, after)).toEqual({ text: expected, removed });
  });
});

describe("$removeUnstorableTextFromNodes", () => {
  async function inEditor<T>($fn: () => T): Promise<T> {
    const { editor } = await baseTestEnvironment();
    let result: T;
    await sutUpdate(editor, () => {
      result = $fn();
    });
    return result!;
  }

  it("filters a paragraph's text and leaves an unmatched marker's glyph alone", async () => {
    const { removed, text, unmatchedText } = await inEditor(() => {
      const unmatched = $createImmutableUnmatchedNode("*");
      const para = $createParaNode("p").append($createTextNode("a\\b"), unmatched);
      const removed = $removeUnstorableTextFromNodes([para]);
      return {
        removed,
        text: para.getFirstChildOrThrow<TextNode>().getTextContent(),
        unmatchedText: unmatched.getTextContent(),
      };
    });

    expect(removed).toEqual(["\\"]);
    expect(text).toBe("ab");
    expect(unmatchedText).toBe("\\*");
  });

  it("leaves display text and decorators alone", async () => {
    const { removed, texts } = await inEditor(() => {
      const nodes: LexicalNode[] = [
        $createTextNode("\\caller ").setMode("token"),
        $createTextNode("//seg").setMode("segmented"),
        $createImmutableTypedTextNode("marker", "\\q1 "),
      ];
      return { removed: $removeUnstorableTextFromNodes(nodes), texts: nodes.map(textOf) };
    });

    expect(removed).toEqual([]);
    expect(texts).toEqual(["\\caller ", "//seg", "\\q1 "]);
  });

  it("leaves a hidden construct's content alone", async () => {
    const { removed, text } = await inEditor(() => {
      const sidebar = $createUnknownNode("sidebar", "esb").append(
        $createParaNode("p").append($createTextNode("a//b")),
      );
      return { removed: $removeUnstorableTextFromNodes([sidebar]), text: sidebar.getTextContent() };
    });

    expect(removed).toEqual([]);
    expect(text).toBe("a//b");
  });

  it("filters text inside a character span", async () => {
    const { removed, text } = await inEditor(() => {
      const span = $createCharNode("nd").append($createTextNode("Lo\\rd"));
      return { removed: $removeUnstorableTextFromNodes([span]), text: span.getTextContent() };
    });

    expect(removed).toEqual(["\\"]);
    expect(text).toBe("Lord");
  });

  it("pairs slashes across adjacent text nodes", async () => {
    const { removed, texts } = await inEditor(() => {
      const nodes = [$createTextNode("a/"), $createTextNode("/b").toggleFormat("bold")];
      return { removed: $removeUnstorableTextFromNodes(nodes), texts: nodes.map(textOf) };
    });

    expect(removed).toEqual(["//"]);
    expect(texts).toEqual(["a", "b"]);
  });

  it("drops a pasted slash that would touch the document's slash on either side", async () => {
    const { removed, texts } = await inEditor(() => {
      const nodes = [$createParaNode("p").append($createTextNode("/b")), $createTextNode("c/")];
      return {
        removed: $removeUnstorableTextFromNodes(nodes, "a/", "/d"),
        texts: nodes.map(textOf),
      };
    });

    expect(removed).toEqual(["//"]);
    expect(texts).toEqual(["b", "c"]);
  });

  it("does not apply the insertion point's slash to text inside a character span", async () => {
    const { removed, text } = await inEditor(() => {
      const span = $createCharNode("nd").append($createTextNode("/b"));
      return { removed: $removeUnstorableTextFromNodes([span], "a/"), text: span.getTextContent() };
    });

    expect(removed).toEqual([]);
    expect(text).toBe("/b");
  });

  it("removes text nodes it empties, from the list and from their parents", async () => {
    const { removed, nodeCount, paraChildCount } = await inEditor(() => {
      const para = $createParaNode("p").append(
        $createTextNode("\\"),
        $createTextNode("x").toggleFormat("bold"),
      );
      const nodes: LexicalNode[] = [$createTextNode("//"), para];
      const removed = $removeUnstorableTextFromNodes(nodes);
      return { removed, nodeCount: nodes.length, paraChildCount: para.getChildrenSize() };
    });

    expect(removed).toEqual(["//", "\\"]);
    expect(nodeCount).toBe(1);
    expect(paraChildCount).toBe(1);
  });
});

describe("$removeUnstorableTextFromNodes — annotation marks", () => {
  it("reads text across a mark as one string", async () => {
    const { editor } = await baseTestEnvironment();
    let texts: string[] = [];
    let removed: UnstorableCharacter[] = [];
    await sutUpdate(editor, () => {
      const nodes = [$createTextNode("a/"), $createTypedMarkNode().append($createTextNode("/b"))];
      removed = $removeUnstorableTextFromNodes(nodes);
      texts = nodes.map(textOf);
    });

    expect(removed).toEqual(["//"]);
    expect(texts).toEqual(["a", "b"]);
  });

  it("judges a mark's text at the insertion edge against the document", async () => {
    const { editor } = await baseTestEnvironment();
    let text = "";
    let removed: UnstorableCharacter[] = [];
    await sutUpdate(editor, () => {
      const mark = $createTypedMarkNode().append($createTextNode("/b"));
      removed = $removeUnstorableTextFromNodes([mark], "/");
      text = mark.getTextContent();
    });

    expect(removed).toEqual(["//"]);
    expect(text).toBe("b");
  });
});

describe("$removeUnstorableTextFromNodes — listed children", () => {
  it("removes an emptied node from the list even when it is still a paragraph's child", async () => {
    const { editor } = await baseTestEnvironment();
    let result: { listed: string[]; paraChildren: string[]; removed: string[] } | undefined;
    await sutUpdate(editor, () => {
      const para = $createParaNode("p").append(
        $createTextNode("a"),
        $createTextNode("\\\\").toggleFormat("bold"),
      );
      // The protected-structure sanitizer lists a paragraph's children without detaching them.
      const nodes: LexicalNode[] = para.getChildren();
      const removed = $removeUnstorableTextFromNodes(nodes);
      result = {
        listed: nodes.map(textOf),
        paraChildren: para.getChildren().map(textOf),
        removed,
      };
    });

    expect(result).toEqual({ listed: ["a"], paraChildren: ["a"], removed: ["\\"] });
  });
});

describe("$textAroundSelection", () => {
  it("reads one character either side of a caret in text", async () => {
    let text: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      text = $createTextNode("ab/cd");
      $getRoot().append($createParaNode("p").append(text));
    });
    updateSelection(editor, text!, 3);

    expect(readAround()).toEqual({ before: "/", after: "c" });

    function readAround() {
      return editor.getEditorState().read(() => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) throw new Error("no range selection");
        return $textAroundSelection(selection);
      });
    }
  });

  it("reads outside a selection, whichever way it was made", async () => {
    let text: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      text = $createTextNode("a/xyz/b");
      $getRoot().append($createParaNode("p").append(text));
    });
    updateSelection(editor, text!, 5, text!, 2);

    const around = editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("no range selection");
      return $textAroundSelection(selection);
    });

    expect(around).toEqual({ before: "/", after: "/" });
  });

  it("reads into a neighbouring text node at a text node's edge", async () => {
    let first: TextNode;
    let second: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      first = $createTextNode("a/");
      second = $createTextNode("/b").toggleFormat("bold");
      $getRoot().append($createParaNode("p").append(first, second));
    });
    updateSelection(editor, second!, 0);

    const around = editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("no range selection");
      return $textAroundSelection(selection);
    });

    expect(around.after).toBe("/");
    expect(around.before).toBe("/");
  });

  it("reads across an annotation mark's edge, from outside it and from inside it", async () => {
    let before: TextNode;
    let marked: TextNode;
    let after: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      before = $createTextNode("a/");
      marked = $createTextNode("xyz");
      after = $createTextNode("/b");
      $getRoot().append(
        $createParaNode("p").append(before, $createTypedMarkNode().append(marked), after),
      );
    });
    const readAround = () =>
      editor.getEditorState().read(() => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) throw new Error("no range selection");
        return $textAroundSelection(selection);
      });

    updateSelection(editor, marked!, 0);
    expect(readAround().before).toBe("/");
    updateSelection(editor, marked!, 3);
    expect(readAround().after).toBe("/");
    updateSelection(editor, before!, 2);
    expect(readAround().after).toBe("x");
    updateSelection(editor, after!, 0);
    expect(readAround().before).toBe("z");
  });

  it("does not read an unmatched marker's glyph as text", async () => {
    let after: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      after = $createTextNode("b");
      $getRoot().append($createParaNode("p").append($createImmutableUnmatchedNode("x/"), after));
    });
    updateSelection(editor, after!, 0);

    const around = editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("no range selection");
      return $textAroundSelection(selection);
    });

    expect(around).toEqual({ before: "", after: "b" });
  });

  it("reads an optional line break, which shows nothing, as the `/` the file stores", async () => {
    let before: TextNode;
    let after: TextNode;
    const { editor } = await baseTestEnvironment(() => {
      before = $createTextNode("and");
      after = $createTextNode("or");
      $getRoot().append($createParaNode("p").append(before, $createUnknownNode("optbreak"), after));
    });
    const readAt = (node: TextNode, offset: number) => {
      updateSelection(editor, node, offset);
      return editor.getEditorState().read(() => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) throw new Error("no range selection");
        return $textAroundSelection(selection);
      });
    };

    expect(readAt(before!, 3)).toEqual({ before: "d", after: "/" });
    expect(readAt(after!, 0)).toEqual({ before: "/", after: "o" });
  });
});

describe("$deletionJoinsSlashes", () => {
  /** A point `offset` characters into `node`. */
  function $at(node: TextNode, offset: number): PointType {
    const selection = $createRangeSelection();
    selection.anchor.set(node.getKey(), offset, "text");
    return selection.anchor;
  }

  /** Builds `paras` (each a list of children) and judges `$deletion` against them. */
  async function judge(
    $paras: () => LexicalNode[][],
    $deletion: (paras: ElementNode[]) => JudgedDeletion,
  ): Promise<boolean> {
    let paras: ElementNode[] = [];
    const { editor }: { editor: LexicalEditor } = await baseTestEnvironment(() => {
      paras = $paras().map((children) => $createParaNode("p").append(...children));
      $getRoot().append(...paras);
    });
    return editor.read(() => $deletionJoinsSlashes($deletion(paras)));
  }

  /** The first text node of `para` holding `text`. */
  function $text(para: ElementNode, text: string): TextNode {
    const node = para.getAllTextNodes().find((candidate) => candidate.getTextContent() === text);
    if (!node) throw new Error(`no text ${text}`);
    return node;
  }

  it.each<[string, number, number, boolean]>([
    ["a/bc/d", 2, 4, true],
    ["a/bc/d", 1, 2, false],
    ["a/bc/d", 3, 4, false],
    ["a/b c/d", 2, 3, false],
    // A `//` already in the text is not a join.
    ["a//bc", 3, 5, false],
    // Removing the middle of `///` joins the outer two.
    ["a///b", 2, 3, true],
  ])("a range: %j from %d to %d → %s", async (text, start, end, expected) => {
    expect(
      await judge(
        () => [[$createTextNode(text)]],
        ([para]) => ({
          kind: "range",
          start: $at($text(para, text), start),
          end: $at($text(para, text), end),
        }),
      ),
    ).toBe(expected);
  });

  it.each<[string, number, boolean, boolean]>([
    ["a/b/c", 3, true, true],
    ["a/b/c", 2, false, true],
    ["a/b/c", 2, true, false],
    ["a/bc/", 3, true, false],
    ["a//bc", 5, true, false],
  ])("a character: %j from %d, backward %s → %s", async (text, offset, isBackward, expected) => {
    expect(
      await judge(
        () => [[$createTextNode(text)]],
        ([para]) => ({ kind: "character", caret: $at($text(para, text), offset), isBackward }),
      ),
    ).toBe(expected);
  });

  it("takes a whole user-perceived character", async () => {
    expect(
      await judge(
        () => [[$createTextNode("a/e\u0301/c")]],
        ([para]) => ({
          kind: "character",
          caret: $at($text(para, "a/e\u0301/c"), 4),
          isBackward: true,
        }),
      ),
    ).toBe(true);
  });

  it("reads through a character span the delete empties", async () => {
    expect(
      await judge(
        () => [
          [
            $createTextNode("a/"),
            $createCharNode("nd").append($createTextNode("b")),
            $createTextNode("/c"),
          ],
        ],
        ([para]) => ({ kind: "character", caret: $at($text(para, "b"), 1), isBackward: true }),
      ),
    ).toBe(true);
  });

  it("keeps two `/` apart across a character span's edge that stays", async () => {
    expect(
      await judge(
        () => [
          [
            $createCharNode("nd").append($createTextNode("a/")),
            $createTextNode("x"),
            $createCharNode("nd").append($createTextNode("/c")),
          ],
        ],
        ([para]) => ({ kind: "character", caret: $at($text(para, "x"), 1), isBackward: true }),
      ),
    ).toBe(false);
  });

  it("reads across an annotation mark's edge", async () => {
    expect(
      await judge(
        () => [
          [
            $createTextNode("a/b"),
            $createTypedMarkNode({ comment: ["c1"] }).append($createTextNode("/c")),
          ],
        ],
        ([para]) => ({ kind: "character", caret: $at($text(para, "a/b"), 3), isBackward: true }),
      ),
    ).toBe(true);
  });

  it("joins across what goes but not across what stays, such as a hidden construct", async () => {
    const $paras = () => [
      [
        $createTextNode("a/"),
        $createUnknownNode("figure", "fig").append($createTextNode("caption")),
        $createTextNode("/c"),
      ],
    ];
    expect(
      await judge($paras, ([para]) => ({
        kind: "character",
        caret: $at($text(para, "/c"), 0),
        isBackward: true,
      })),
    ).toBe(true);
    expect(
      await judge($paras, ([para]) => ({
        kind: "range",
        start: $at($text(para, "a/"), 1),
        end: $at($text(para, "a/"), 2),
      })),
    ).toBe(false);
  });

  it("joins paragraphs: a join, a character delete at either edge, a range across the break", async () => {
    const $paras = () => [[$createTextNode("a/")], [$createTextNode("/c")]];
    expect(await judge($paras, ([first, second]) => ({ kind: "join", first, second }))).toBe(true);
    expect(
      await judge($paras, ([, second]) => ({
        kind: "character",
        caret: $at($text(second, "/c"), 0),
        isBackward: true,
      })),
    ).toBe(true);
    expect(
      await judge($paras, ([first]) => ({
        kind: "character",
        caret: $at($text(first, "a/"), 2),
        isBackward: false,
      })),
    ).toBe(true);
    expect(
      await judge(
        () => [[$createTextNode("a/x")], [$createTextNode("y/c")]],
        ([first, second]) => ({
          kind: "range",
          start: $at($text(first, "a/x"), 2),
          end: $at($text(second, "y/c"), 1),
        }),
      ),
    ).toBe(true);
  });

  it("reads past a gutter glyph, which saves as nothing", async () => {
    expect(
      await judge(
        () => [[$createTextNode("a/")], [$createGutterMarkerNode("\\p "), $createTextNode("/c")]],
        ([, second]) => ({
          kind: "character",
          caret: $at($text(second, "/c"), 0),
          isBackward: true,
        }),
      ),
    ).toBe(true);
  });

  it("does not join a paragraph to one it leaves a letter against", async () => {
    expect(
      await judge(
        () => [[$createTextNode("a/")], [$createTextNode("c")]],
        ([first, second]) => ({ kind: "join", first, second }),
      ),
    ).toBe(false);
  });

  it.each<[string, () => LexicalNode]>([
    ["a verse", () => $createImmutableVerseNode("2")],
    ["a note", () => $createNoteNode("f", "+").append($createTextNode("note text"))],
  ])("keeps two `/` apart across %s that stays, and joins them when it goes", async (_, $atom) => {
    expect(
      await judge(
        () => [[$createTextNode("a/x"), $atom(), $createTextNode("/c")]],
        ([para]) => ({ kind: "character", caret: $at($text(para, "a/x"), 3), isBackward: true }),
      ),
    ).toBe(false);
    expect(
      await judge(
        () => [[$createTextNode("a/"), $atom(), $createTextNode("/c")]],
        ([para]) => ({ kind: "character", caret: $at($text(para, "/c"), 0), isBackward: true }),
      ),
    ).toBe(true);
  });

  it("keeps a note that a range starts or ends inside, so the `/` either side stay apart", async () => {
    const $note = () => $createNoteNode("f", "+").append($createTextNode("note text"));
    expect(
      await judge(
        () => [[$createTextNode("a/x"), $note(), $createTextNode("/c")]],
        ([para]) => ({
          kind: "range",
          start: $at($text(para, "a/x"), 2),
          end: $at($text(para, "note text"), 4),
        }),
      ),
    ).toBe(false);
    expect(
      await judge(
        () => [[$createTextNode("a/"), $note(), $createTextNode("x/c")]],
        ([para]) => ({
          kind: "range",
          start: $at($text(para, "note text"), 4),
          end: $at($text(para, "x/c"), 1),
        }),
      ),
    ).toBe(false);
  });

  it("joins a `/` to an optional line break, which the file stores as a bare `//`", async () => {
    // `a/ ///b` loads as `a/ `, an optional break, then `/b`: the view shows `a/ /b`. Deleting the
    // space would save `a////b`, which reads back as two optional breaks.
    expect(
      await judge(
        () => [[$createTextNode("a/ "), $createUnknownNode("optbreak"), $createTextNode("/b")]],
        ([para]) => ({ kind: "character", caret: $at($text(para, "a/ "), 3), isBackward: true }),
      ),
    ).toBe(true);
    // A `/` already against one is not joined by a delete elsewhere.
    expect(
      await judge(
        () => [[$createTextNode("xa/"), $createUnknownNode("optbreak"), $createTextNode("b")]],
        ([para]) => ({ kind: "character", caret: $at($text(para, "xa/"), 1), isBackward: true }),
      ),
    ).toBe(false);
  });

  it("judges a delete inside an expanded note's text within the note", async () => {
    expect(
      await judge(
        () => [
          [
            $createTextNode("a"),
            $createNoteNode("f", "+").append(
              $createCharNode("ft").append($createTextNode("n/b/c")),
            ),
          ],
        ],
        ([para]) => ({ kind: "character", caret: $at($text(para, "n/b/c"), 3), isBackward: true }),
      ),
    ).toBe(true);
  });
});

function textOf(node: LexicalNode): string {
  return node.getTextContent();
}
