/**
 * Whitespace typed at the start of the text after a verse moves onto the verse's separator run
 * (`$moveLeadingSpaceOntoLeadingAttribute`) whether or not an annotation mark holds that text: the
 * mark is presentation, so the text is the same text right after the same verse.
 */
import { deserializeEditorState } from "../adaptors/editor-usj.adaptor";
import { testEnvironment, viewOptions } from "./markerEdit.test-helpers";
import { act } from "@testing-library/react";
import { $createTextNode, $getRoot, LexicalNode, TextNode } from "lexical";
import {
  $createMarkerNode,
  $createParaNode,
  $createTypedMarkNode,
  $createVerseNode,
  getVisibleOpenMarkerText,
  NBSP,
} from "shared";

/** What the paragraph `\p \v 1 In the beginning` shows and saves after a space is typed at the
 * start of `In`, with that text held by an annotation mark or not. */
async function spaceTypedAfterVerse(
  isMarked: boolean,
): Promise<{ screen: string; content: unknown }> {
  let text: TextNode | undefined;
  const { editor } = await testEnvironment(() => {
    text = $createTextNode("In the beginning");
    const held: LexicalNode = isMarked
      ? $createTypedMarkNode({ annotation: ["1"] }).append(text)
      : text;
    $getRoot().append(
      $createParaNode("p").append(
        $createMarkerNode("p"),
        $createTextNode(NBSP),
        $createVerseNode("1", getVisibleOpenMarkerText("v", "1")),
        held,
      ),
    );
  });
  await act(async () =>
    editor.update(() => {
      if (!text) return;
      text.setTextContent(` ${text.getTextContent()}`);
      text.select(1, 1);
    }),
  );
  const screen = editor.getEditorState().read(() => {
    const para = $getRoot().getFirstChildOrThrow();
    return para
      .getAllTextNodes()
      .map((node) => `[${node.getType()}:${node.getTextContent()}]`)
      .join("");
  });
  return { screen, content: deserializeEditorState(editor.getEditorState(), viewOptions)?.content };
}

describe("a space typed at the start of the text after a verse", () => {
  it("joins the verse's separator run when a mark holds the text, as when none does", async () => {
    const plain = await spaceTypedAfterVerse(false);
    const marked = await spaceTypedAfterVerse(true);
    expect(plain.screen).toContain(`[verse:${getVisibleOpenMarkerText("v", "1")} ]`);
    expect(marked.screen).toBe(plain.screen);
    expect(marked.content).toEqual(plain.content);
  });
});
