import { describe, expect, it } from "vitest";
import { act } from "@testing-library/react";
import {
  $createTextNode,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  LexicalNode,
  TextNode,
} from "lexical";
import {
  $createGutterMarkerNode,
  $createImmutableTypedTextNode,
  $createMarkerNode,
  $createParaNode,
  $isGutterMarkerNode,
  $isParaNode,
  CharNode,
  ImmutableTypedTextNode,
  MarkerNode,
  NBSP,
  ParaNode,
  VerseNode,
} from "shared";
import {
  getViewOptions,
  ImmutableVerseNode,
  PARAGRAPH_STRUCTURE_VIEW_MODE,
  STANDARD_VIEW_MODE,
} from "shared-react";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { createBasicTestEnvironment } from "../../../../libs/shared/src/nodes/usj/test.utils";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { baseTestEnvironment } from "../../../../libs/shared-react/src/plugins/usj/react-test.utils";
import {
  $resetMarkerIfPrefixDeleted,
  ParaMarkerPrefixGuardPlugin,
} from "./ParaMarkerPrefixGuardPlugin";

const nodes = [
  ParaNode,
  VerseNode,
  ImmutableVerseNode,
  MarkerNode,
  ImmutableTypedTextNode,
  CharNode,
];

/**
 * The marker-prefix shapes the adaptor injects in markerPrefix views. The transform must reset
 * markers regardless of which shape the prefix took.
 *
 * - `editable`: `markerMode: "editable"` — prefix is a mutable `MarkerNode("\\p")` followed by a
 *   `TextNode(NBSP)` (the "marker-trailing-space").
 * - `gutter-hidden`: `markerMode: "hidden"` + `hasGutterParaMarkers: true` — prefix is an
 *   `ImmutableTypedTextNode("marker", "\\p\\u00A0")`.
 */
type PrefixShape = "editable" | "gutter-hidden";

function $createParaMarkerPrefixNodes(shape: PrefixShape, marker: string): LexicalNode[] {
  if (shape === "editable") return [$createMarkerNode(marker), $createTextNode(NBSP)];
  return [$createImmutableTypedTextNode("marker", `\\${marker}${NBSP}`)];
}

describe("$resetMarkerIfPrefixDeleted", () => {
  const shapes: PrefixShape[] = ["editable", "gutter-hidden"];

  describe.each(shapes)("%s shape", (shape) => {
    it("resets a non-default paragraph's marker when the prefix has been removed", () => {
      let para: ParaNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        para = $createParaNode("q1");
        $getRoot().append(para.append($createTextNode("a poetry line")));
      });

      editor.update(() => $resetMarkerIfPrefixDeleted(para), { discrete: true });

      editor.getEditorState().read(() => {
        expect(para.getMarker()).toBe("p");
      });
    });

    it("does not reset when the prefix is still the first child", () => {
      let para: ParaNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        para = $createParaNode("q1");
        $getRoot().append(
          para.append(
            ...$createParaMarkerPrefixNodes(shape, "q1"),
            $createTextNode("a poetry line"),
          ),
        );
      });

      editor.update(() => $resetMarkerIfPrefixDeleted(para), { discrete: true });

      editor.getEditorState().read(() => {
        expect(para.getMarker()).toBe("q1");
      });
    });

    it("does not reset an empty paragraph (transient mid-edit state)", () => {
      let para: ParaNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        para = $createParaNode("q1");
        $getRoot().append(para);
      });

      editor.update(() => $resetMarkerIfPrefixDeleted(para), { discrete: true });

      editor.getEditorState().read(() => {
        expect(para.getMarker()).toBe("q1");
      });
    });

    it("does not reset a paragraph already at the default marker", () => {
      let para: ParaNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        para = $createParaNode("p");
        $getRoot().append(para.append($createTextNode("plain text")));
      });

      editor.update(() => $resetMarkerIfPrefixDeleted(para), { discrete: true });

      editor.getEditorState().read(() => {
        expect(para.getMarker()).toBe("p");
      });
    });
  });
});

describe("ParaMarkerPrefixGuardPlugin enablement", () => {
  it("does not reset the marker in editable mode (MarkerEditPlugin owns deletion there)", async () => {
    let para: ParaNode, marker: MarkerNode;
    const { editor } = await baseTestEnvironment(
      () => {
        para = $createParaNode("q1");
        marker = $createMarkerNode("q1");
        $getRoot().append(
          para.append(marker, $createTextNode(NBSP), $createTextNode("a poetry line")),
        );
      },
      <ParaMarkerPrefixGuardPlugin viewOptions={getViewOptions(STANDARD_VIEW_MODE)} />,
    );
    await act(async () => editor.update(() => marker.remove()));
    editor.getEditorState().read(() => {
      expect(para.getMarker()).toBe("q1"); // unchanged: this guard is disabled in editable mode
    });
  });

  it("restores a missing glyph for the paragraph's own marker in the gutter view (Paragraph Structure view)", async () => {
    let para: ParaNode;
    const { editor } = await baseTestEnvironment(
      () => {
        para = $createParaNode("q1");
        $getRoot().append(
          para.append(
            $createImmutableTypedTextNode("marker", `\\q1${NBSP}`),
            $createTextNode("a poetry line"),
          ),
        );
      },
      <ParaMarkerPrefixGuardPlugin viewOptions={getViewOptions(PARAGRAPH_STRUCTURE_VIEW_MODE)} />,
    );
    await act(async () => editor.update(() => para.getFirstChild()?.remove()));
    editor.getEditorState().read(() => {
      expect(para.getMarker()).toBe("q1");
      const glyph = para.getFirstChild();
      expect($isGutterMarkerNode(glyph)).toBe(true);
      expect(glyph?.getTextContent()).toBe(`\\q1${NBSP}`);
    });
  });

  it("gives a paragraph the editor creates (an Enter split) its gutter glyph", async () => {
    let para: ParaNode;
    let text: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        para = $createParaNode("li2");
        text = $createTextNode("one two");
        $getRoot().append(para.append($createGutterMarkerNode(`\\li2${NBSP}`), text));
      },
      <ParaMarkerPrefixGuardPlugin viewOptions={getViewOptions(PARAGRAPH_STRUCTURE_VIEW_MODE)} />,
    );

    await act(async () =>
      editor.update(() => {
        text.select(3, 3);
        const selection = $getSelection();
        if ($isRangeSelection(selection)) selection.insertParagraph();
      }),
    );

    editor.getEditorState().read(() => {
      const paras = $getRoot().getChildren().filter($isParaNode);
      expect(paras.map((p) => p.getMarker())).toEqual(["li2", "li2"]);
      expect(paras.map((p) => $isGutterMarkerNode(p.getFirstChild()))).toEqual([true, true]);
      expect(paras[1].getTextContent()).toBe(`\\li2${NBSP} two`);
    });
  });

  it("moves the paragraph's own glyph back to the front when text lands before it, rather than adding another", async () => {
    let para: ParaNode;
    let glyph: ImmutableTypedTextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        para = $createParaNode("q2");
        glyph = $createGutterMarkerNode(`\\q2${NBSP}`);
        $getRoot().append(para.append(glyph, $createTextNode("a poetry line")));
      },
      <ParaMarkerPrefixGuardPlugin viewOptions={getViewOptions(PARAGRAPH_STRUCTURE_VIEW_MODE)} />,
    );

    // Typing at the paragraph's very start, before its glyph (an element point at offset 0).
    await act(async () => editor.update(() => glyph.insertBefore($createTextNode("Z"))));

    editor.getEditorState().read(() => {
      const children = para.getChildren();
      expect(children.filter($isGutterMarkerNode)).toHaveLength(1);
      expect(children[0].is(glyph)).toBe(true);
      expect(para.getTextContent()).toBe(`\\q2${NBSP}Za poetry line`);
    });
  });
});
