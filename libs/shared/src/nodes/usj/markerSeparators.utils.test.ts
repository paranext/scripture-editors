import { $createMarkerNode } from "../features/MarkerNode.js";
import { $createTypedMarkNode, TypedMarkNode } from "../features/TypedMarkNode.js";
import { $createCharNode, $isCharNode, CharNode } from "./CharNode.js";
import { usjBaseNodes } from "./index.js";
import { $hasUnsettledSeparatorGap, $syncOpenerSeparators } from "./markerSeparators.utils.js";
import { NBSP } from "./node-constants.js";
import { $createParaNode } from "./ParaNode.js";
import { registerPendedDisplayOwners } from "./pendedDisplayOwners.utils.js";
import { createBasicTestEnvironment } from "./test.utils.js";
import {
  $createTextNode,
  $getNodeByKey,
  $getRoot,
  LexicalEditor,
  LexicalNode,
  NodeKey,
  TextNode,
} from "lexical";
import { describe, expect, it } from "vitest";

const nodes = [...usjBaseNodes, TypedMarkNode];

/** `\p x \w <after> \w*` plus a second paragraph for a caret away from the span. */
function $buildSpan(after: LexicalNode): { char: CharNode; elsewhere: TextNode } {
  const char = $createCharNode("w").append(
    $createMarkerNode("w"),
    after,
    $createMarkerNode("w", "closing"),
  );
  const elsewhere = $createTextNode("depart here");
  $getRoot().append(
    $createParaNode("p").append($createTextNode("x "), char),
    $createParaNode("p").append(elsewhere),
  );
  return { char, elsewhere };
}

/** The text a gap's bytes start in: the node itself, or a mark's first leaf. */
function firstText(after: LexicalNode): TextNode {
  const leaf = after instanceof TypedMarkNode ? after.getFirstChild() : after;
  if (!(leaf instanceof TextNode)) throw new Error("no text after the opener");
  return leaf;
}

function $inMark(text: string): TypedMarkNode {
  return $createTypedMarkNode({ comment: ["c1"] }).append($createTextNode(text));
}

describe("$hasUnsettledSeparatorGap", () => {
  const rows: [
    name: string,
    after: () => LexicalNode,
    caret: "boundary" | "elsewhere",
    expected: boolean,
  ][] = [
    ["a letter, caret at the boundary", () => $createTextNode("grace"), "boundary", true],
    ["a backslash, caret at the boundary", () => $createTextNode("\\wj x"), "boundary", true],
    ["a pipe, caret at the boundary", () => $createTextNode("|x"), "boundary", true],
    ["whitespace, caret at the boundary", () => $createTextNode(" x"), "boundary", true],
    ["a star, caret at the boundary", () => $createTextNode("*x"), "boundary", true],
    ["nothing, caret at the boundary", () => $createTextNode(""), "boundary", true],
    ["a letter, caret elsewhere", () => $createTextNode("grace"), "elsewhere", true],
    ["a star, caret elsewhere", () => $createTextNode("*x"), "elsewhere", true],
    ["a backslash, caret elsewhere", () => $createTextNode("\\wj x"), "elsewhere", false],
    ["a pipe, caret elsewhere", () => $createTextNode("|x"), "elsewhere", false],
    ["whitespace, caret elsewhere", () => $createTextNode(" x"), "elsewhere", false],
    ["nothing, caret elsewhere", () => $createTextNode(""), "elsewhere", false],
    ["a separator in place", () => $createTextNode(`${NBSP}grace`), "elsewhere", false],
    ["a mark over a letter, caret elsewhere", () => $inMark("LO"), "elsewhere", true],
    ["a mark over a letter, caret at the mark's start", () => $inMark("LO"), "boundary", true],
    ["a mark over a pipe, caret elsewhere", () => $inMark("|x"), "elsewhere", false],
    ["a mark over the separator", () => $inMark(`${NBSP}LO`), "elsewhere", false],
  ];

  it.each(rows)("%s", (_name, after, caret, expected) => {
    const { editor } = createBasicTestEnvironment(nodes);
    let result: boolean | undefined;
    editor.update(
      () => {
        const afterNode = after();
        const { char, elsewhere } = $buildSpan(afterNode);
        if (caret === "boundary") firstText(afterNode).select(0, 0);
        else elsewhere.select(1, 1);
        result = $hasUnsettledSeparatorGap(char);
      },
      { discrete: true },
    );
    expect(result).toBe(expected);
  });
});

describe("$syncOpenerSeparators", () => {
  /** Mount the sync as CharNodePlugin does, with a marker-edit engine's pend set registered. */
  function syncEnvironment(pended: Set<NodeKey> | undefined): LexicalEditor {
    const { editor } = createBasicTestEnvironment(nodes);
    if (pended) registerPendedDisplayOwners(editor, pended);
    editor.registerNodeTransform(CharNode, $syncOpenerSeparators);
    return editor;
  }

  /** Build `\w <text> \w*` with the caret in the other paragraph; returns the span and text keys. */
  function build(editor: LexicalEditor, text: string, pended?: Set<NodeKey>) {
    let charKey = "";
    let textKey = "";
    editor.update(
      () => {
        const content = $createTextNode(text);
        const { char, elsewhere } = $buildSpan(content);
        elsewhere.select(1, 1);
        charKey = char.getKey();
        textKey = content.getKey();
        pended?.add(charKey);
      },
      { discrete: true },
    );
    return { charKey, textKey };
  }

  function textOf(editor: LexicalEditor, key: NodeKey): string | undefined {
    return editor.getEditorState().read(() => $getNodeByKey(key)?.getTextContent());
  }

  function dirty(editor: LexicalEditor, charKey: NodeKey): void {
    editor.update(() => $getNodeByKey(charKey)?.markDirty(), { discrete: true });
  }

  it("leaves a pended span's gap for the engine, however often the span is dirtied", () => {
    const pended = new Set<NodeKey>();
    const editor = syncEnvironment(pended);
    const { charKey, textKey } = build(editor, "|x", pended);
    dirty(editor, charKey);
    expect(textOf(editor, textKey)).toBe("|x");
  });

  it("reports a gap whose bytes rename the marker to the engine instead of healing it", () => {
    const pended = new Set<NodeKey>();
    const editor = syncEnvironment(pended);
    const { charKey, textKey } = build(editor, "grace");
    expect(textOf(editor, textKey)).toBe("grace");
    expect(pended.has(charKey)).toBe(true);
  });

  it("heals a gap whose bytes read the same without the separator", () => {
    const pended = new Set<NodeKey>();
    const editor = syncEnvironment(pended);
    const { charKey, textKey } = build(editor, "|x");
    expect(textOf(editor, textKey)).toBe(`${NBSP}|x`);
    expect(pended.has(charKey)).toBe(false);
  });

  it("heals every gap when no marker-edit engine is mounted", () => {
    const editor = syncEnvironment(undefined);
    const { textKey } = build(editor, "grace");
    expect(textOf(editor, textKey)).toBe(`${NBSP}grace`);
  });

  it("reports a gap in front of a mark over a renaming letter instead of healing it", () => {
    const pended = new Set<NodeKey>();
    const editor = syncEnvironment(pended);
    let charKey = "";
    editor.update(
      () => {
        const { char, elsewhere } = $buildSpan($inMark("LO"));
        elsewhere.select(1, 1);
        charKey = char.getKey();
      },
      { discrete: true },
    );
    expect(pended.has(charKey)).toBe(true);
    const texts = editor.getEditorState().read(() => {
      const char = $getNodeByKey(charKey);
      if (!$isCharNode(char)) throw new Error("the span is gone");
      return char.getChildren().map((child) => child.getTextContent());
    });
    expect(texts).toEqual(["\\w", "LO", "\\w*"]);
  });
});
