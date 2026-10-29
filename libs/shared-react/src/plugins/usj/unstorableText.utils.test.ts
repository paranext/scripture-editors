// Should only be used on nodes that are initialized in the test environment.
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { baseTestEnvironment, sutUpdate, updateSelection } from "./react-test.utils";
import { UnstorableCharacter } from "./unstorable-text.model";
import {
  $removeUnstorableTextFromNodes,
  $textAroundSelection,
  removeUnstorableText,
} from "./unstorableText.utils";
import {
  $createTextNode,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  LexicalNode,
  TextNode,
} from "lexical";
import {
  $createCharNode,
  $createImmutableTypedTextNode,
  $createImmutableUnmatchedNode,
  $createParaNode,
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
});

function textOf(node: LexicalNode): string {
  return node.getTextContent();
}
