/**
 * Standard view's space-run display and collapse read a run of spaces that an annotation mark
 * cuts exactly as the uncut run: a mark is presentation, so typing a space beside a marked space
 * shows, saves and collapses the same bytes as typing it beside the same space with no mark.
 */
import { deserializeEditorState } from "../adaptors/editor-usj.adaptor";
import { testEnvironment, viewOptions } from "./markerEdit.test-helpers";
import { act } from "@testing-library/react";
import { $createTextNode, $getRoot, $setState, LexicalNode, TextNode } from "lexical";
import {
  $createMarkerNode,
  $createParaNode,
  $createTypedMarkNode,
  NBSP,
  textTypeState,
} from "shared";

/** Whether `x of God` is one text, or cut by a mark holding its ` o`. */
type Marking = "none" | "crossing";

/** `\p x of God` held as `marking` says; `first` receives the text that starts with `x`. */
function $build(marking: Marking, first: (text: TextNode) => void): void {
  const separator = $createTextNode(NBSP);
  $setState(separator, textTypeState, "marker-trailing-space");
  const texts: LexicalNode[] =
    marking === "none"
      ? [$createTextNode("x of God")]
      : [
          $createTextNode("x"),
          $createTypedMarkNode({ annotation: ["1"] }).append($createTextNode(" o")),
          $createTextNode("f God"),
        ];
  first(texts[0] as TextNode);
  $getRoot().append($createParaNode("p").append($createMarkerNode("p"), separator, ...texts));
}

/** What `marking`'s paragraph shows and saves after the bytes `typed` are typed right after its
 * `x`. */
async function typedBeside(
  marking: Marking,
  typed: string,
): Promise<{ screen: string; content: unknown }> {
  let first: TextNode | undefined;
  const { editor } = await testEnvironment(() =>
    $build(marking, (text) => {
      first = text;
    }),
  );
  await act(async () =>
    editor.update(() => {
      if (!first) return;
      const text = first.getTextContent();
      first.setTextContent(`x${typed}${text.slice(1)}`);
    }),
  );
  const screen = editor.getEditorState().read(() => $getRoot().getTextContent());
  const usj = deserializeEditorState(editor.getEditorState(), viewOptions);
  return { screen, content: usj?.content };
}

describe("a space run an annotation mark cuts", () => {
  it("displays a typed space beside a marked space as the uncut run displays it", async () => {
    const plain = await typedBeside("none", " ");
    const marked = await typedBeside("crossing", " ");
    expect(plain.screen).toContain(`x${NBSP}${NBSP}of God`);
    expect(marked.screen).toBe(plain.screen);
  });

  it("saves a run cut by a mark collapsed, as the uncut run saves", async () => {
    const plain = await typedBeside("none", " ");
    const marked = await typedBeside("crossing", " ");
    expect(JSON.stringify(plain.content)).toContain('"x of God"');
    expect(marked.content).toEqual(plain.content);
  });

  it("leaves a single space beside a mark alone", async () => {
    const plain = await typedBeside("none", "y");
    const marked = await typedBeside("crossing", "y");
    expect(plain.screen).toContain("xy of God");
    expect(marked.screen).toBe(plain.screen);
    expect(marked.content).toEqual(plain.content);
  });
});
