// Should only be used on nodes that are initialized in the test environment.
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { $createImmutableVerseNode } from "../../nodes/usj";
import {
  PARA_MARKER_SELECTED_CLASS_NAME,
  ParaMarkerSelectionPlugin,
} from "./ParaMarkerSelectionPlugin";
import { TextDirectionPlugin } from "./TextDirectionPlugin";
import { baseTestEnvironment, sutUpdate, updateSelection } from "./react-test.utils";
import {
  $createTextNode,
  $getRoot,
  $getSelection,
  LexicalEditor,
  LexicalNode,
  TextNode,
} from "lexical";
import {
  $createGutterMarkerNode,
  $createParaNode,
  $getSelectedParaMarker,
  $isParaNode,
  $selectParaMarker,
  ImmutableTypedTextNode,
  NBSP,
  ParaNode,
} from "shared";

/** A paragraph as the paragraph-structure view builds it: its gutter marker glyph, then content. */
function $createGutterParaNode(marker: string, ...content: LexicalNode[]): ParaNode {
  return $createParaNode(marker).append($createGutterMarkerNode(`\\${marker}${NBSP}`), ...content);
}

/** The marker of the paragraph whose marker is selected, if any. */
function selectedMarkerOf(editor: LexicalEditor): string | undefined {
  return editor.getEditorState().read(() => {
    const owner = $getSelectedParaMarker($getSelection())?.getParent();
    return $isParaNode(owner) ? owner.getMarker() : undefined;
  });
}

/** Elements under the editor root carrying the selected-marker highlight. */
function highlightedElements(editor: LexicalEditor): Element[] {
  return Array.from(
    editor.getRootElement()?.querySelectorAll(`.${PARA_MARKER_SELECTED_CLASS_NAME}`) ?? [],
  );
}

interface Doc {
  p: ParaNode;
  li2: ParaNode;
  q1: ParaNode;
  firstText: TextNode;
  secondText: TextNode;
  thirdText: TextNode;
}

/** `\p \v 1 first`, `\li2 \v 2 second`, `\q1 third` — every paragraph with a gutter marker. */
async function environment(
  textDirection: "ltr" | "rtl" = "ltr",
  onParaMarkerMenuRequest?: () => void,
): Promise<{ editor: LexicalEditor } & Doc> {
  const doc = {} as Doc;
  const { editor } = await baseTestEnvironment(
    () => {
      doc.firstText = $createTextNode("first");
      doc.secondText = $createTextNode("second");
      doc.thirdText = $createTextNode("third");
      doc.p = $createGutterParaNode("p", $createImmutableVerseNode("1"), doc.firstText);
      doc.li2 = $createGutterParaNode("li2", $createImmutableVerseNode("2"), doc.secondText);
      doc.q1 = $createGutterParaNode("q1", doc.thirdText);
      $getRoot().append(doc.p, doc.li2, doc.q1);
    },
    <>
      <ParaMarkerSelectionPlugin onParaMarkerMenuRequest={onParaMarkerMenuRequest} />
      <TextDirectionPlugin textDirection={textDirection} />
    </>,
  );
  return { editor, ...doc };
}

/** Selects `para`'s gutter marker the way the click guard does. */
async function selectMarkerOf(editor: LexicalEditor, para: ParaNode): Promise<void> {
  await sutUpdate(editor, () => {
    const glyph = para.getFirstChild();
    if (!(glyph instanceof ImmutableTypedTextNode)) throw new Error("no gutter glyph");
    $selectParaMarker(glyph);
  });
}

describe("ParaMarkerSelectionPlugin — highlight", () => {
  it("marks the owning paragraph with the selected class and aria-selected", async () => {
    const { editor, li2 } = await environment();

    await selectMarkerOf(editor, li2);

    const element = editor.getElementByKey(li2.getKey());
    expect(element?.classList.contains(PARA_MARKER_SELECTED_CLASS_NAME)).toBe(true);
    expect(element?.getAttribute("aria-selected")).toBe("true");
    expect(highlightedElements(editor)).toHaveLength(1);
  });

  it("removes both when the selection leaves the marker", async () => {
    const { editor, li2, secondText } = await environment();
    await selectMarkerOf(editor, li2);

    updateSelection(editor, secondText, 0);

    const element = editor.getElementByKey(li2.getKey());
    expect(element?.classList.contains(PARA_MARKER_SELECTED_CLASS_NAME)).toBe(false);
    expect(element?.hasAttribute("aria-selected")).toBe(false);
    expect(highlightedElements(editor)).toHaveLength(0);
  });

  it("moves both to the new marker's paragraph", async () => {
    const { editor, p, li2 } = await environment();
    await selectMarkerOf(editor, li2);

    await selectMarkerOf(editor, p);

    expect(highlightedElements(editor)).toEqual([editor.getElementByKey(p.getKey())]);
    expect(editor.getElementByKey(li2.getKey())?.hasAttribute("aria-selected")).toBe(false);
  });

  // A retag replaces the paragraph node (new key, new element) and moves the glyph over with its
  // key intact, so the selection survives but the element it must be drawn on changes.
  it("recomputes the owner after a retag replaces the paragraph", async () => {
    const { editor, li2 } = await environment();
    await selectMarkerOf(editor, li2);

    await sutUpdate(editor, () => {
      li2.replace($createParaNode("q2"), true);
    });

    expect(selectedMarkerOf(editor)).toBe("q2");
    const retagged = editor.getEditorState().read(() =>
      $getRoot()
        .getChildren()
        .find((n) => $isParaNode(n) && n.getMarker() === "q2"),
    );
    const highlighted = highlightedElements(editor);
    expect(highlighted).toHaveLength(1);
    expect(highlighted[0]).toBe(editor.getElementByKey(retagged!.getKey()));
    expect(highlighted[0].getAttribute("aria-selected")).toBe("true");
  });

  it("leaves nothing behind when the selected paragraph is replaced by a reload", async () => {
    const { editor, li2 } = await environment();
    await selectMarkerOf(editor, li2);

    await sutUpdate(editor, () => {
      $getRoot()
        .clear()
        .append($createGutterParaNode("p", $createTextNode("fresh document")));
    });

    expect(selectedMarkerOf(editor)).toBeUndefined();
    expect(highlightedElements(editor)).toHaveLength(0);
    expect(editor.getRootElement()?.querySelectorAll("[aria-selected]")).toHaveLength(0);
  });
});

describe("ParaMarkerSelectionPlugin — browser caret", () => {
  // A click on the glyph leaves the browser's caret drawn inside it (a decorator Lexical cannot
  // address), and Lexical only removes DOM ranges for a non-range selection when the previous
  // selection was non-null — on the click path it is null.
  it("removes a DOM caret left inside the glyph when the marker is selected", async () => {
    const { editor, li2 } = await environment();
    const glyphKey = editor.getEditorState().read(() => li2.getFirstChild()!.getKey());
    const glyphElement = editor.getElementByKey(glyphKey)!;
    const range = document.createRange();
    range.setStart(glyphElement.firstChild!, 1);
    range.collapse(true);
    const domSelection = document.getSelection()!;
    domSelection.removeAllRanges();
    domSelection.addRange(range);

    await selectMarkerOf(editor, li2);

    const after = document.getSelection();
    const isCaretInGlyph =
      !!after && after.rangeCount > 0 && glyphElement.contains(after.getRangeAt(0).startContainer);
    expect(isCaretInGlyph).toBe(false);
  });
});
