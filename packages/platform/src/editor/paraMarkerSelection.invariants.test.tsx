/**
 * Invariant regression for paragraph-marker selection: selecting a marker and leaving it again —
 * by click and by keyboard — must not change the document, must emit no delta ops, and must never
 * hand the glyph to the display-byte position helpers (glyphPositions.utils.ts, shared), because a
 * node selection carries no offsets and no glyph byte may become a document position.
 *
 * The spy only sees calls routed through the `shared` package entry, which is how every consumer
 * outside libs/shared reaches those helpers; calls made inside libs/shared by relative import are
 * not observed.
 */
import Editor from "./Editor";
import { EditorRef } from "./editor.model";
import { flushQueuedEvents } from "./editor-test.utils";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { EditorRefPlugin } from "@lexical/react/LexicalEditorRefPlugin";
import { act, render } from "@testing-library/react";
import {
  $getRoot,
  $isRangeSelection,
  BaseSelection,
  KEY_DOWN_COMMAND,
  LexicalEditor,
  LexicalNode,
} from "lexical";
import { createRef } from "react";
import { $isGutterMarkerNode, $isImmutableTypedTextNode, $isParaNode } from "shared";
import { getViewOptions, PARAGRAPH_STRUCTURE_VIEW_MODE } from "shared-react";

const glyphHelperCalls = vi.hoisted(() => [] as unknown[][]);

vi.mock("shared", async (importOriginal) => {
  const actual = await importOriginal<typeof import("shared")>();
  function record<A extends unknown[], R>(fn: (...args: A) => R): (...args: A) => R {
    return (...args: A) => {
      glyphHelperCalls.push(args);
      return fn(...args);
    };
  }
  return {
    ...actual,
    $isGlyphTextNode: record(actual.$isGlyphTextNode),
    $isPointInMarkerGlyphText: record(actual.$isPointInMarkerGlyphText),
    $normalizeSelectionOutOfGlyphText: record(actual.$normalizeSelectionOutOfGlyphText),
  };
});

if (typeof Range.prototype.getBoundingClientRect !== "function")
  Range.prototype.getBoundingClientRect = () => new DOMRect();

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

async function press(lexical: LexicalEditor, key: string): Promise<void> {
  await act(async () => {
    lexical.dispatchCommand(
      KEY_DOWN_COMMAND,
      new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true }),
    );
  });
}

it("selecting and leaving a marker changes no USJ, emits no ops, and never passes the glyph to the position helpers", async () => {
  const onUsjChange = vi.fn();
  const ref = createRef<EditorRef>();
  const lexicalRef = createRef<LexicalEditor>();
  await act(async () => {
    render(
      <Editor
        ref={ref}
        defaultUsj={usj}
        onUsjChange={onUsjChange}
        options={{ view: getViewOptions(PARAGRAPH_STRUCTURE_VIEW_MODE) }}
      >
        <EditorRefPlugin editorRef={lexicalRef} />
      </Editor>,
    );
  });
  await flushQueuedEvents();
  const lexical = lexicalRef.current;
  if (!lexical) throw new Error("editor did not mount");
  const before = ref.current?.getUsj();
  onUsjChange.mockClear();
  glyphHelperCalls.length = 0;
  const glyphKey = lexical.getEditorState().read(() => {
    const glyph = $getRoot().getChildren().find($isParaNode)?.getFirstChild();
    if (!$isGutterMarkerNode(glyph)) throw new Error("no gutter glyph");
    return glyph.getKey();
  });

  // By click, then out by keyboard.
  const glyphElement = lexical.getElementByKey(glyphKey);
  if (!glyphElement) throw new Error("glyph not rendered");
  await act(async () => {
    glyphElement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(ref.current?.getSelectedParaMarker()).toBe("li2");
  await press(lexical, "ArrowRight");
  // By keyboard, in and out.
  await press(lexical, "ArrowLeft");
  expect(ref.current?.getSelectedParaMarker()).toBe("li2");
  await press(lexical, "ArrowRight");
  await flushQueuedEvents();

  expect(ref.current?.getUsj()).toEqual(before);
  expect(onUsjChange).not.toHaveBeenCalled();

  // Positive control: prove the spies actually intercept calls the editor makes through the
  // real `shared` module entry — otherwise the assertion below (no recorded call named the
  // glyph) would pass vacuously, either because selecting/leaving the marker never calls these
  // helpers at all, or because the mock failed to wire up. `$getMarkerMenuContext`
  // (markerMenuContext.utils.ts) unconditionally calls `$isPointInMarkerGlyphText` for any live
  // range selection, and bails out with no call at all for a node selection — so first
  // re-selecting the marker (a definite node selection) and confirming a still-selected read
  // makes zero recorded calls, then moving an ordinary caret into the paragraph's own text and
  // reading `EditorRef.getMarkerMenuContext()` again — a routed public-API path, not a direct
  // call into the mocked module — is a call the editor is guaranteed to make through the
  // intercepted binding. Checkpointed (not cleared) so the calls recorded above, from selecting
  // and leaving the marker the first time, are still covered by the "never named the glyph"
  // check below.
  await act(async () => {
    glyphElement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(ref.current?.getSelectedParaMarker()).toBe("li2");
  const callsWithMarkerSelected = glyphHelperCalls.length;
  expect(ref.current?.getMarkerMenuContext()).toBeUndefined();
  expect(glyphHelperCalls.length).toBe(callsWithMarkerSelected);

  await act(async () => {
    lexical.update(() => {
      $getRoot().getChildren().find($isParaNode)?.selectEnd();
    });
  });
  const context = ref.current?.getMarkerMenuContext();
  expect(context).toBeDefined();
  expect(glyphHelperCalls.length).toBeGreaterThan(callsWithMarkerSelected);

  lexical.getEditorState().read(() => {
    for (const rawArg of glyphHelperCalls.flat()) {
      // `rawArg` is `unknown` (the recorded call args cover every helper's own param type);
      // narrow to a local before each guard, since a guard over an inline cast expression
      // doesn't narrow the loop variable itself.
      const node = rawArg as LexicalNode | null | undefined;
      if ($isImmutableTypedTextNode(node)) expect(node.getKey()).not.toBe(glyphKey);
      const selection = rawArg as BaseSelection | null | undefined;
      if ($isRangeSelection(selection)) {
        expect(selection.anchor.key).not.toBe(glyphKey);
        expect(selection.focus.key).not.toBe(glyphKey);
      }
    }
  });
});
