import { $selectParaMarker, registerParaMarkerSelectionOwner } from "./paraMarkerSelection.utils";
import {
  $createTextNode,
  $getRoot,
  $getSelection,
  $isNodeSelection,
  $isRangeSelection,
  TextNode,
} from "lexical";
import {
  $createGutterMarkerNode,
  $createParaNode,
  $createUnknownNode,
  ImmutableTypedTextNode,
  NBSP,
} from "shared";
// Reaching inside shared for test utilities — shared-react depends on shared, but these
// utilities are not part of the public API, so the module-boundary rule is suppressed.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { createBasicTestEnvironment } from "../../../../shared/src/nodes/usj/test.utils";
import { describe, expect, it } from "vitest";

describe("$selectParaMarker", () => {
  it("replaces the selection with a node selection of exactly the glyph", () => {
    let glyph!: ImmutableTypedTextNode;
    let content!: TextNode;
    const { editor } = createBasicTestEnvironment(undefined, () => {
      glyph = $createGutterMarkerNode(`\\li2${NBSP}`);
      content = $createTextNode("text");
      $getRoot().append($createParaNode("li2").append(glyph, content));
    });
    registerParaMarkerSelectionOwner(editor);
    editor.update(() => content.select(2, 2), { discrete: true });

    let isSelected = false;
    editor.update(() => (isSelected = $selectParaMarker(glyph)), { discrete: true });

    expect(isSelected).toBe(true);
    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isNodeSelection(selection)) throw new Error("expected a node selection");
      expect(selection.getNodes().map((node) => node.getKey())).toEqual([glyph.getKey()]);
    });
  });

  // The single gate for creating a marker selection: without an owner nothing handles the keys
  // that reach it, and a read-only editor has nothing to change the marker to.
  it.each([
    ["no owner is registered", { isOwned: false, isEditable: true, isHidden: false }],
    ["the editor is read-only", { isOwned: true, isEditable: false, isHidden: false }],
    [
      "the paragraph is inside a hidden construct",
      { isOwned: true, isEditable: true, isHidden: true },
    ],
  ])("refuses, changing nothing, when %s", (_name, { isOwned, isEditable, isHidden }) => {
    let glyph!: ImmutableTypedTextNode;
    let content!: TextNode;
    const { editor } = createBasicTestEnvironment(undefined, () => {
      glyph = $createGutterMarkerNode(`\\li2${NBSP}`);
      content = $createTextNode("text");
      const para = $createParaNode("li2");
      $getRoot().append(
        isHidden
          ? $createUnknownNode("sidebar", "esb").append(para.append(glyph, content))
          : para.append(glyph, content),
      );
    });
    if (isOwned) registerParaMarkerSelectionOwner(editor);
    editor.update(() => content.select(2, 2), { discrete: true });
    editor.setEditable(isEditable);

    let isSelected = true;
    editor.update(() => (isSelected = $selectParaMarker(glyph)), { discrete: true });

    expect(isSelected).toBe(false);
    editor.getEditorState().read(() => {
      expect($isRangeSelection($getSelection())).toBe(true);
    });
  });
});
