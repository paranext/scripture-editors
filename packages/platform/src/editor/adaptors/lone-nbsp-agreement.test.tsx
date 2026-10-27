/**
 * Text typed into presentation NBSP (the empty-char placeholder) must reach the saved USJ as plain
 * content, with the node no longer tagged.
 */
import Editor from "../Editor";
import { EditorRef } from "../editor.model";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { EditorRefPlugin } from "@lexical/react/LexicalEditorRefPlugin";
import { $dfs } from "@lexical/utils";
import { act, render } from "@testing-library/react";
import {
  $getRoot,
  $getSelection,
  $getState,
  $isRangeSelection,
  $isTextNode,
  LexicalEditor,
  TextNode,
} from "lexical";
import { createRef } from "react";
import { $isCharNode, EMPTY_CHAR_PLACEHOLDER_TEXT_TYPE, textTypeState } from "shared";
import { FORMATTED_VIEW_MODE, getViewOptions, ViewOptions } from "shared-react";

function requireViewOptions(viewMode: string): ViewOptions {
  const viewOptions = getViewOptions(viewMode);
  if (!viewOptions) throw new Error(`${viewMode} view options are required for these tests`);
  return viewOptions;
}

describe("text typed into presentation NBSP is saved as content", () => {
  it("keeps text typed into an empty span's placeholder, untagged (formatted)", async () => {
    const view = requireViewOptions(FORMATTED_VIEW_MODE);
    const usj: Usj = {
      type: "USJ",
      version: "3.1",
      content: [
        {
          type: "para",
          marker: "p",
          content: [
            { type: "verse", marker: "v", number: "1" },
            "Tell the ",
            { type: "char", marker: "nd" },
          ],
        },
      ],
    };
    const ref = createRef<EditorRef>();
    const lexicalRef = createRef<LexicalEditor>();
    await act(async () => {
      render(
        <Editor ref={ref} defaultUsj={usj} options={{ view }}>
          <EditorRefPlugin editorRef={lexicalRef} />
        </Editor>,
      );
    });
    const lexical = lexicalRef.current;
    if (!lexical || !ref.current) throw new Error("editor did not mount");
    const $findPlaceholder = (): TextNode | undefined =>
      $dfs($getRoot())
        .map(({ node }) => node)
        .filter($isTextNode)
        .find(
          (node) =>
            $isCharNode(node.getParent()) &&
            $getState(node, textTypeState) === EMPTY_CHAR_PLACEHOLDER_TEXT_TYPE,
        );
    const placeholderKey = lexical.getEditorState().read(() => $findPlaceholder()?.getKey());
    if (!placeholderKey) throw new Error("expected the empty-char placeholder");

    await act(async () => {
      lexical.update(
        () => {
          const placeholder = $findPlaceholder();
          if (!placeholder) throw new Error("expected the empty-char placeholder");
          placeholder.select(1, 1);
          const selection = $getSelection();
          if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
          selection.insertText("x");
        },
        { discrete: true },
      );
    });

    const saved = ref.current.getUsj();
    const para = saved?.content[0] as MarkerObject;
    expect(para.content?.[2]).toEqual({ type: "char", marker: "nd", content: ["x"] });
    lexical.getEditorState().read(() => {
      const typed = $dfs($getRoot())
        .map(({ node }) => node)
        .filter($isTextNode)
        .find((node) => node.getKey() === placeholderKey);
      if (!typed) throw new Error("expected the typed-into node");
      expect(typed.getTextContent()).toBe("x");
      expect($getState(typed, textTypeState)).toBeUndefined();
    });
  });
});
