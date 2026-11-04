// Should only be used on nodes that are initialized in the test environment.
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { $createImmutableVerseNode } from "../../nodes/usj";
import { baseTestEnvironment, sutUpdate, updateSelection } from "./react-test.utils";
import { UnstorableCharacter } from "./unstorable-text.model";
import {
  $deletionJoinsSlashes,
  $removeUnstorableTextFromNodes,
  $textAroundSelection,
  $transposeJoinsSlashes,
  JudgedDeletion,
  removeUnstorableText,
} from "./unstorableText.utils";
import {
  $createRangeSelection,
  $createTextNode,
  $getRoot,
  $getSelection,
  $isElementNode,
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
  $isUnknownNode,
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

/**
 * The file stores an optional line break as a bare `//`, so one against a `/` saves `///`, which
 * reads back differently. A pasted break goes there, and stays anywhere else.
 */
describe("$removeUnstorableTextFromNodes — optional line breaks", () => {
  const $optbreak = () => $createUnknownNode("optbreak");
  /** What is left of `nodes`: `|` for an optional break, `[…]` for an element, else the text. */
  const shapeOf = (nodes: LexicalNode[]): string[] =>
    nodes.map((node) =>
      $isUnknownNode(node) && node.getTag() === "optbreak"
        ? "|"
        : $isElementNode(node)
          ? `[${shapeOf(node.getChildren()).join(",")}]`
          : node.getTextContent(),
    );

  async function filtered(
    $nodes: () => LexicalNode[],
    before?: string,
    after?: string,
  ): Promise<{ shape: string[]; removed: UnstorableCharacter[] }> {
    const { editor } = await baseTestEnvironment();
    let result: { shape: string[]; removed: UnstorableCharacter[] } | undefined;
    await sutUpdate(editor, () => {
      const nodes = $nodes();
      const removed = $removeUnstorableTextFromNodes(nodes, before, after);
      result = { shape: shapeOf(nodes), removed };
    });
    return result!;
  }

  it.each<[string, () => LexicalNode[], string | undefined, string | undefined, string[]]>([
    ["after the document's `a/`", () => [$optbreak()], "a/", undefined, []],
    ["before the document's `/b`", () => [$optbreak()], undefined, "/b", []],
    [
      "between pasted `x/` and `y`",
      () => [$createTextNode("x/"), $optbreak(), $createTextNode("y")],
      undefined,
      undefined,
      ["x/", "y"],
    ],
    [
      "between pasted `x` and `/y`",
      () => [$createTextNode("x"), $optbreak(), $createTextNode("/y")],
      undefined,
      undefined,
      ["x", "/y"],
    ],
    [
      "in a pasted paragraph, after the document's `/`",
      () => [$createParaNode("p").append($optbreak(), $createTextNode("y"))],
      "/",
      undefined,
      ["[y]"],
    ],
    [
      "across an annotation mark from a pasted `/`",
      () => [$createTypedMarkNode().append($createTextNode("x/")), $optbreak()],
      undefined,
      undefined,
      ["[x/]"],
    ],
  ])(
    "removes a pasted optional break %s, reporting `//`",
    async (_, $nodes, before, after, shape) => {
      expect(await filtered($nodes, before, after)).toEqual({ shape, removed: ["//"] });
    },
  );

  it.each<[string, () => LexicalNode[], string | undefined, string | undefined, string[]]>([
    [
      "beside plain text",
      () => [$createTextNode("x"), $optbreak(), $createTextNode("y")],
      "a",
      "b",
      ["x", "|", "y"],
    ],
    ["at the insertion point, between plain text", () => [$optbreak()], "a", "b", ["|"]],
    [
      "beside another pasted break",
      () => [$createTextNode("x"), $optbreak(), $optbreak(), $createTextNode("y")],
      undefined,
      undefined,
      ["x", "|", "|", "y"],
    ],
    [
      "at the end of a pasted paragraph that another follows",
      () => [
        $createParaNode("p").append($createTextNode("x"), $optbreak()),
        $createParaNode("p").append($createTextNode("y")),
      ],
      undefined,
      "/",
      ["[x,|]", "[y]"],
    ],
    // The document reads an optional break beside the insertion point as the `//` it stores.
    ["beside the document's break", () => [$optbreak()], "//", "//", ["|"]],
    [
      "across a character span's edge from a `/`",
      () => [$createCharNode("nd").append($createTextNode("x/")), $optbreak()],
      undefined,
      undefined,
      ["[x/]", "|"],
    ],
    [
      "inside a character span, at the insertion point",
      () => [$createCharNode("nd").append($optbreak(), $createTextNode("y"))],
      "/",
      undefined,
      ["[|,y]"],
    ],
  ])("keeps a pasted optional break %s", async (_, $nodes, before, after, shape) => {
    expect(await filtered($nodes, before, after)).toEqual({ shape, removed: [] });
  });

  it("keeps the content of a hidden construct the paste carries", async () => {
    expect(
      await filtered(() => [
        $createUnknownNode("sidebar", "esb").append(
          $createParaNode("p").append($createTextNode("x/"), $optbreak()),
        ),
      ]),
    ).toEqual({ shape: ["[[x/,|]]"], removed: [] });
  });

  it("keeps a break that the removal of a pasted `//` leaves beside plain text", async () => {
    expect(
      await filtered(() => [$createTextNode("x//"), $optbreak(), $createTextNode("y")]),
    ).toEqual({ shape: ["x", "|", "y"], removed: ["//"] });
  });

  it("then filters a pasted `/` that a removed break left against the document's `/`", async () => {
    expect(await filtered(() => [$optbreak(), $createTextNode("/y")], "a/")).toEqual({
      shape: ["y"],
      removed: ["//"],
    });
  });

  it("removes each of two breaks that a `/` reaches in turn", async () => {
    expect(await filtered(() => [$optbreak(), $optbreak(), $createTextNode("y")], "/")).toEqual({
      shape: ["y"],
      removed: ["//"],
    });
  });

  it("orders what it removed by where it was first met", async () => {
    expect(await filtered(() => [$optbreak(), $createTextNode("a\\b")], "/")).toEqual({
      shape: ["ab"],
      removed: ["//", "\\"],
    });
    expect(await filtered(() => [$createTextNode("a\\b/"), $optbreak()])).toEqual({
      shape: ["ab/"],
      removed: ["\\", "//"],
    });
    for (const [text, removed] of [
      ["a\\b//c", ["\\", "//"]],
      ["a//b\\c", ["//", "\\"]],
    ] as const)
      expect(await filtered(() => [$createTextNode(text)])).toEqual({ shape: ["abc"], removed });
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

  it("reads an optional line break, which shows nothing, as the `//` the file stores", async () => {
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

    expect(readAt(before!, 3)).toEqual({ before: "d", after: "//" });
    expect(readAt(after!, 0)).toEqual({ before: "//", after: "o" });
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

describe("$transposeJoinsSlashes", () => {
  /**
   * Builds one paragraph of `children`, selects from `anchor` to `focus` (a caret when `focus` is
   * left out) in its text node holding `text`, and judges a transpose there.
   */
  async function judge(
    $children: () => LexicalNode[],
    text: string,
    anchor: number,
    focus = anchor,
  ): Promise<boolean> {
    let node: TextNode | undefined;
    const { editor } = await baseTestEnvironment(() => {
      const children = $children();
      $getRoot().append($createParaNode("p").append(...children));
      node = $getRoot()
        .getAllTextNodes()
        .find((candidate) => candidate.getTextContent() === text);
    });
    if (!node) throw new Error(`no text ${text}`);
    updateSelection(editor, node, anchor, node, focus);
    return editor.read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("no range selection");
      return $transposeJoinsSlashes(selection);
    });
  }

  it.each<[string, number, boolean]>([
    // Swapping `x` and the second `/` would save `//x`.
    ["/x/", 2, true],
    // Swapping the first `/` and `x` brings that `/` against the second.
    ["/x/", 1, true],
    ["ab", 1, false],
    ["and/or", 4, false],
    ["and/or", 3, false],
    ["a/b", 2, false],
    // At the end of a paragraph the two characters before the caret swap: `/x/` → `//x`.
    ["/x/", 3, true],
    ["a/b", 3, false],
    // Two `/` swapped with each other change nothing.
    ["a//", 2, false],
  ])("a caret in %j at %d → %s", async (text, offset, expected) => {
    expect(await judge(() => [$createTextNode(text)], text, offset)).toBe(expected);
  });

  it.each<[string, number, number, boolean]>([
    ["/x/", 1, 3, true],
    ["/x/", 0, 2, true],
    ["abc", 0, 2, false],
    // Not two characters: no transpose to judge.
    ["/x/y", 1, 4, false],
  ])(
    "the two characters the browser selects in %j, %d to %d → %s",
    async (text, anchor, focus, expected) => {
      expect(await judge(() => [$createTextNode(text)], text, anchor, focus)).toBe(expected);
    },
  );

  it("reads an optional line break as the `//` the file stores", async () => {
    // The break, then `x/`: swapping `x` and `/` puts that `/` against the break.
    expect(
      await judge(() => [$createUnknownNode("optbreak"), $createTextNode("x/")], "x/", 1),
    ).toBe(true);
    // `/x`, then the break, the caret at the end of the text: the browser swaps `/` and `x`, which
    // brings the `/` against the break.
    expect(
      await judge(() => [$createTextNode("/x"), $createUnknownNode("optbreak")], "/x", 2),
    ).toBe(true);
    expect(
      await judge(() => [$createUnknownNode("optbreak"), $createTextNode("ab")], "ab", 1),
    ).toBe(false);
  });

  it("judges nothing across a paragraph's edge, which a transpose never joins", async () => {
    let first: TextNode | undefined;
    const { editor } = await baseTestEnvironment(() => {
      first = $createTextNode("a/");
      $getRoot().append(
        $createParaNode("p").append(first),
        $createParaNode("p").append($createTextNode("/b")),
      );
    });
    if (!first) throw new Error("no text");
    updateSelection(editor, first, 2);

    expect(
      editor.read(() => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) throw new Error("no range selection");
        return $transposeJoinsSlashes(selection);
      }),
    ).toBe(false);
  });

  it("does not join a `/` to one a character span keeps apart", async () => {
    expect(
      await judge(
        () => [$createTextNode("a/"), $createCharNode("nd").append($createTextNode("x/"))],
        "x/",
        1,
      ),
    ).toBe(false);
  });
});

function textOf(node: LexicalNode): string {
  return node.getTextContent();
}
