/* eslint-disable @typescript-eslint/no-non-null-assertion */
/**
 * A selected paragraph marker must outlive every deferred clock the editor runs — jsdom's queued
 * native `selectionchange`, the verse-mutation dispatch, and the marker-edit idle settle clock —
 * rather than being cleared a beat after the click.
 */
import Editor from "../Editor";
import { EditorRef } from "../editor.model";
import { IDLE_SETTLE_DELAY_MS } from "./MarkerEditPlugin";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { EditorRefPlugin } from "@lexical/react/LexicalEditorRefPlugin";
import { act, render } from "@testing-library/react";
import { $getRoot, LexicalEditor } from "lexical";
import { createRef } from "react";
import { $isGutterMarkerNode, $isParaNode } from "shared";
import { getViewOptions, PARAGRAPH_STRUCTURE_VIEW_MODE } from "shared-react";

if (typeof Range.prototype.getBoundingClientRect !== "function")
  Range.prototype.getBoundingClientRect = () => new DOMRect();

beforeEach(() => {
  vi.useFakeTimers({ toFake: ["setTimeout", "clearTimeout", "Date"] });
});
afterEach(() => {
  vi.useRealTimers();
});

async function advance(ms: number): Promise<void> {
  await act(async () => {
    await vi.advanceTimersByTimeAsync(ms);
  });
}

const usj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["Test Book"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "li2",
      content: [{ type: "verse", marker: "v", number: "1" }, "verse text"],
    },
  ],
};

it("keeps a clicked paragraph marker selected past the idle settle delay", async () => {
  const ref = createRef<EditorRef>();
  const lexicalRef = createRef<LexicalEditor>();
  await act(async () => {
    render(
      <Editor
        ref={ref}
        defaultUsj={usj}
        options={{ view: getViewOptions(PARAGRAPH_STRUCTURE_VIEW_MODE) }}
      >
        <EditorRefPlugin editorRef={lexicalRef} />
      </Editor>,
    );
  });
  await advance(0);
  const lexical = lexicalRef.current!;
  const glyphKey = lexical.getEditorState().read(() => {
    const para = $getRoot().getChildren().find($isParaNode);
    const glyph = para?.getFirstChild();
    if (!$isGutterMarkerNode(glyph)) throw new Error("no gutter glyph");
    return glyph.getKey();
  });
  const glyphElement = lexical.getElementByKey(glyphKey)!;

  await act(async () => {
    glyphElement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(ref.current?.getSelectedParaMarker()).toBe("li2");

  await advance(IDLE_SETTLE_DELAY_MS * 2);

  expect(ref.current?.getSelectedParaMarker()).toBe("li2");
});
