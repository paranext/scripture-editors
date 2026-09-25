/**
 * A paragraph's gutter marker as a selection target, end to end on the real platform `<Editor>`
 * in the paragraph-structure view: the click (through rich-text's own CLICK_COMMAND handling),
 * the consumers that read the selection, and the public API.
 */
import Editor from "./Editor";
import { EditorProps, EditorRef } from "./editor.model";
import { MarkerMenuItem } from "./markerMenu/markerItemSource";
import { flushQueuedEvents } from "./editor-test.utils";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { EditorRefPlugin } from "@lexical/react/LexicalEditorRefPlugin";
import { act, render } from "@testing-library/react";
import { $getRoot, $getSelection, KEY_DOWN_COMMAND, LexicalEditor } from "lexical";
import { createRef, ReactElement, RefObject } from "react";
import {
  $getSelectedParaMarker,
  $isGutterMarkerNode,
  $isParaNode,
  $selectParaMarker,
  ImmutableTypedTextNode,
  LoggerBasic,
  NBSP,
  ParaNode,
} from "shared";
import { BLOCK_VERSE_VIEW_MODE, getViewOptions, PARAGRAPH_STRUCTURE_VIEW_MODE } from "shared-react";
import { vi } from "vitest";

// jsdom has no `Range.getBoundingClientRect`; Lexical's post-commit scroll-into-view reads one once
// the root has focus. Stub it the same way the sibling editor tests do.
if (typeof Range.prototype.getBoundingClientRect !== "function")
  Range.prototype.getBoundingClientRect = () => new DOMRect();

const paragraphStructureUsj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["Test Book"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [{ type: "verse", marker: "v", number: "1" }, "first verse text"],
    },
    {
      type: "para",
      marker: "li2",
      content: [{ type: "verse", marker: "v", number: "2" }, "second verse text"],
    },
  ],
};

interface Mounted {
  ref: RefObject<EditorRef | null>;
  lexical: LexicalEditor;
}

async function mountParagraphStructure(
  props: Omit<EditorProps<LoggerBasic>, "defaultUsj"> = {},
): Promise<Mounted> {
  const ref = createRef<EditorRef>();
  const lexicalRef = createRef<LexicalEditor>();
  await act(async () => {
    render(
      <Editor
        ref={ref}
        defaultUsj={paragraphStructureUsj}
        {...props}
        options={{
          ...props.options,
          view: props.options?.view ?? getViewOptions(PARAGRAPH_STRUCTURE_VIEW_MODE),
        }}
      >
        <EditorRefPlugin editorRef={lexicalRef} />
      </Editor>,
    );
  });
  await flushQueuedEvents();
  if (!ref.current || !lexicalRef.current) throw new Error("editor did not mount");
  return { ref, lexical: lexicalRef.current };
}

/** The paragraph with `marker`. Read-only: call inside a read. */
function $paraOf(marker: string): ParaNode {
  const para = $getRoot()
    .getChildren()
    .find((node): node is ParaNode => $isParaNode(node) && node.getMarker() === marker);
  if (!para) throw new Error(`no \\${marker} paragraph`);
  return para;
}

/** The gutter glyph of the paragraph with `marker`. Read-only: call inside a read. */
function $gutterGlyphOf(marker: string): ImmutableTypedTextNode {
  const glyph = $paraOf(marker).getFirstChild();
  if (!$isGutterMarkerNode(glyph)) throw new Error(`no gutter glyph on \\${marker}`);
  return glyph;
}

function glyphElementOf(lexical: LexicalEditor, marker: string): HTMLElement {
  const key = lexical.getEditorState().read(() => $gutterGlyphOf(marker).getKey());
  const element = lexical.getElementByKey(key);
  if (!element) throw new Error(`glyph of \\${marker} not rendered`);
  return element;
}

function paraElementOf(lexical: LexicalEditor, marker: string): HTMLElement {
  const key = lexical.getEditorState().read(() => $paraOf(marker).getKey());
  const element = lexical.getElementByKey(key);
  if (!element) throw new Error(`\\${marker} paragraph not rendered`);
  return element;
}

/** The marker of the paragraph whose marker is selected, read from the editor state. */
function selectedMarker(lexical: LexicalEditor): string | undefined {
  return lexical.getEditorState().read(() => {
    const owner = $getSelectedParaMarker($getSelection())?.getParent();
    return $isParaNode(owner) ? owner.getMarker() : undefined;
  });
}

async function selectMarker(lexical: LexicalEditor, marker: string): Promise<void> {
  await act(async () => {
    lexical.update(() => $selectParaMarker($gutterGlyphOf(marker)));
  });
}

async function pressKeyOn(
  lexical: LexicalEditor,
  init: KeyboardEventInit & { key: string },
): Promise<KeyboardEvent> {
  const event = new KeyboardEvent("keydown", { bubbles: true, cancelable: true, ...init });
  await act(async () => {
    lexical.dispatchCommand(KEY_DOWN_COMMAND, event);
  });
  return event;
}

async function clickElement(element: HTMLElement, detail = 1): Promise<void> {
  await act(async () => {
    element.dispatchEvent(new MouseEvent("click", { bubbles: true, detail }));
  });
}

describe("formatPara with a selected paragraph marker", () => {
  it("retags only the owning paragraph and keeps its marker selected", async () => {
    const { ref, lexical } = await mountParagraphStructure();
    await selectMarker(lexical, "li2");

    await act(async () => {
      ref.current?.formatPara("q1");
      await Promise.resolve();
      await Promise.resolve();
    });

    lexical.getEditorState().read(() => {
      const markers = $getRoot()
        .getChildren()
        .filter($isParaNode)
        .map((para) => para.getMarker());
      expect(markers).toEqual(["p", "q1"]);
      const glyph = $getSelectedParaMarker($getSelection());
      expect(glyph?.getTextContent()).toBe(`\\q1${NBSP}`);
    });
    expect(selectedMarker(lexical)).toBe("q1");
    expect(ref.current?.getUsj()?.content[3]).toMatchObject({ type: "para", marker: "q1" });
  });

  it("retags the paragraph in place, keeping its node and attributes", async () => {
    const { ref, lexical } = await mountParagraphStructure();
    await act(async () => {
      lexical.update(() => $paraOf("li2").setUnknownAttributes({ "x-note": "kept" }));
    });
    const keyBefore = lexical.getEditorState().read(() => $paraOf("li2").getKey());
    await selectMarker(lexical, "li2");

    await act(async () => {
      ref.current?.formatPara("q1");
      await Promise.resolve();
      await Promise.resolve();
    });

    lexical.getEditorState().read(() => {
      const para = $paraOf("q1");
      expect(para.getKey()).toBe(keyBefore);
      expect(para.getUnknownAttributes()).toEqual({ "x-note": "kept" });
    });
  });

  it("is refused in a read-only editor, where no marker can be selected either", async () => {
    const { ref, lexical } = await mountParagraphStructure({ options: { isReadonly: true } });
    await selectMarker(lexical, "li2");

    expect(selectedMarker(lexical)).toBeUndefined();
    expect(() => ref.current?.formatPara("q1")).toThrow(/readonly/);
  });

  it("is refused in the block verse layout", async () => {
    const { ref } = await mountParagraphStructure({
      options: { isReadonly: true, view: getViewOptions(BLOCK_VERSE_VIEW_MODE) },
    });

    expect(() => ref.current?.formatPara("q1")).toThrow(/block verse layout/);
  });
});

describe("consumers of a selected paragraph marker", () => {
  it("reports the owning paragraph's marker through onStateChange", async () => {
    const onStateChange = vi.fn();
    const { lexical } = await mountParagraphStructure({ onStateChange });

    await clickElement(glyphElementOf(lexical, "li2"));

    const { calls } = onStateChange.mock;
    expect(calls[calls.length - 1][0]).toMatchObject({ blockMarker: "li2" });
  });

  it("keeps the owning paragraph's active-text focus box", async () => {
    const { lexical } = await mountParagraphStructure();

    await clickElement(glyphElementOf(lexical, "li2"));

    expect(paraElementOf(lexical, "li2").classList.contains("psc-active-text")).toBe(true);
  });

  it("does not move the scripture reference on select, nor when an arrow returns to the text", async () => {
    const onScrRefChange = vi.fn();
    // Start settled in verse 2's own content, inside the paragraph whose marker gets selected. The
    // \li2 gutter glyph precedes \v 2, so without the $resolvePosition guard, selecting it would
    // resolve to verse 1 — a real, detectable move away from where the caret already is.
    const { lexical } = await mountParagraphStructure({
      scrRef: { book: "GEN", chapterNum: 1, verseNum: 2 },
      onScrRefChange,
    });
    // Real input ends the plugin's settling window; what follows is the user's.
    act(() => {
      lexical.getRootElement()?.dispatchEvent(new Event("pointerdown", { bubbles: true }));
    });
    onScrRefChange.mockClear();

    await clickElement(glyphElementOf(lexical, "li2"));
    await flushQueuedEvents();
    expect(selectedMarker(lexical)).toBe("li2");
    expect(onScrRefChange).not.toHaveBeenCalled();

    // ArrowLeft is the arrow whose ordinary movement would leave \li2 for verse 1. From a selected
    // marker it only returns the caret to \li2's content, still in verse 2, so nothing is reported.
    await pressKeyOn(lexical, { key: "ArrowLeft" });
    await flushQueuedEvents();
    expect(selectedMarker(lexical)).toBeUndefined();
    expect(onScrRefChange).not.toHaveBeenCalled();
  });
});

/** Where the document's DOM caret is, if it is inside `element`. */
function isDomCaretInside(element: HTMLElement): boolean {
  const domSelection = document.getSelection();
  return (
    !!domSelection &&
    domSelection.rangeCount > 0 &&
    element.contains(domSelection.getRangeAt(0).startContainer)
  );
}

/** Stands in for the browser drawing its caret inside the glyph on mousedown. */
function placeDomCaretIn(element: HTMLElement): void {
  const text = element.firstChild;
  if (!text) throw new Error("glyph has no text");
  const range = document.createRange();
  range.setStart(text, 1);
  range.collapse(true);
  const domSelection = document.getSelection();
  domSelection?.removeAllRanges();
  domSelection?.addRange(range);
}

describe("clicking gutter markers on the real editor", () => {
  it("selects A, then B, keeps B through a double-click and a re-click, and leaves no DOM caret", async () => {
    const { ref, lexical } = await mountParagraphStructure();

    const glyphP = glyphElementOf(lexical, "p");
    placeDomCaretIn(glyphP);
    await clickElement(glyphP);
    expect(ref.current?.getSelectedParaMarker()).toBe("p");
    expect(isDomCaretInside(glyphP)).toBe(false);

    const glyphLi2 = glyphElementOf(lexical, "li2");
    placeDomCaretIn(glyphLi2);
    await clickElement(glyphLi2);
    expect(ref.current?.getSelectedParaMarker()).toBe("li2");
    expect(isDomCaretInside(glyphLi2)).toBe(false);

    await clickElement(glyphLi2, 1);
    await clickElement(glyphLi2, 2);
    await act(async () => {
      glyphLi2.dispatchEvent(new MouseEvent("dblclick", { bubbles: true, detail: 2 }));
    });
    expect(ref.current?.getSelectedParaMarker()).toBe("li2");

    await clickElement(glyphLi2);
    expect(ref.current?.getSelectedParaMarker()).toBe("li2");
    expect(lexical.getRootElement()?.getAttribute("aria-activedescendant")).toBe(glyphLi2.id);
  });
});

describe("clicking gutter markers in a read-only editor", () => {
  // There is nothing to change a marker to in a read-only editor, so the click places a caret at
  // the start of the paragraph's text — past its leading verse number — instead.
  it("places the caret in the paragraph's text, past its verse number, instead of selecting its marker", async () => {
    const { ref, lexical } = await mountParagraphStructure({ options: { isReadonly: true } });

    await clickElement(glyphElementOf(lexical, "li2"));

    expect(ref.current?.getSelectedParaMarker()).toBeUndefined();
    expect(ref.current?.getSelection()?.start).toEqual({
      jsonPath: "$.content[3].content[1]",
      offset: 0,
    });
    expect(paraElementOf(lexical, "li2").classList.contains("psc-para-marker-selected")).toBe(
      false,
    );
  });
});

describe("EditorRef edits with a selected paragraph marker", () => {
  const scrRef = { book: "GEN", chapterNum: 1, verseNum: 2 };
  const ndItem: MarkerMenuItem = { marker: "nd", kind: "character", isBasic: true };

  /** The `\li2` paragraph's USJ, which every edit below must leave a `\li2`. */
  function li2Usj(ref: RefObject<EditorRef | null>) {
    return ref.current?.getUsj()?.content[3];
  }

  it.each([
    ["insertMarker('wj')", "wj", (ref: EditorRef) => ref.insertMarker("wj")],
    [
      "applyMarkerMenuSelection(\\nd)",
      "nd",
      (ref: EditorRef) =>
        ref.applyMarkerMenuSelection(ndItem, { trigger: "backslash", literalPrefixLanded: false }),
    ],
  ])("%s acts at the paragraph's text, never on the marker", async (_name, marker, edit) => {
    const { ref, lexical } = await mountParagraphStructure({ scrRef });
    await selectMarker(lexical, "li2");

    await act(async () => {
      if (ref.current) edit(ref.current);
    });
    await flushQueuedEvents();

    const li2 = li2Usj(ref);
    expect(li2).toMatchObject({ type: "para", marker: "li2" });
    expect(JSON.stringify(li2)).toContain(`"marker":"${marker}"`);
    lexical.getEditorState().read(() => {
      expect($isGutterMarkerNode($paraOf("li2").getFirstChild())).toBe(true);
    });
  });

  it("insertNote acts at the paragraph's text, never on the marker", async () => {
    const { ref, lexical } = await mountParagraphStructure({ scrRef });
    await selectMarker(lexical, "li2");

    await act(async () => {
      ref.current?.insertNote("f");
    });
    await flushQueuedEvents();

    const li2 = li2Usj(ref);
    expect(li2).toMatchObject({ type: "para", marker: "li2" });
    expect(JSON.stringify(li2)).toContain('"type":"note"');
  });
});

describe("EditorRef.focus with a selected paragraph marker", () => {
  it("returns keyboard focus to the editor from a host control", async () => {
    const { ref, lexical } = await mountParagraphStructure();
    await selectMarker(lexical, "li2");
    const hostControl = document.createElement("button");
    document.body.append(hostControl);
    hostControl.focus();

    await act(async () => {
      ref.current?.focus();
    });
    hostControl.remove();

    expect(document.activeElement).toBe(lexical.getRootElement());
    expect(ref.current?.getSelectedParaMarker()).toBe("li2");
  });
});

describe("host navigation with a selected paragraph marker", () => {
  it("moves to the verse before the selected paragraph, rather than reading it as already there", async () => {
    const ref = createRef<EditorRef>();
    const lexicalRef = createRef<LexicalEditor>();
    // The editor tracks the scripture reference only for a host that listens for it.
    const onScrRefChange = vi.fn();
    const renderAt = (verseNum: number) => (
      <Editor
        ref={ref}
        defaultUsj={paragraphStructureUsj}
        scrRef={{ book: "GEN", chapterNum: 1, verseNum }}
        onScrRefChange={onScrRefChange}
        options={{ view: getViewOptions(PARAGRAPH_STRUCTURE_VIEW_MODE) }}
      >
        <EditorRefPlugin editorRef={lexicalRef} />
      </Editor>
    );
    let rerender!: (ui: ReactElement) => void;
    await act(async () => {
      ({ rerender } = render(renderAt(2)));
    });
    await flushQueuedEvents();
    const lexical = lexicalRef.current;
    if (!lexical) throw new Error("editor did not mount");
    await selectMarker(lexical, "li2");

    await act(async () => rerender(renderAt(1)));
    await flushQueuedEvents();

    expect(ref.current?.getSelectedParaMarker()).toBeUndefined();
    lexical.getEditorState().read(() => {
      const selection = $getSelection();
      expect(selection?.getNodes()[0]?.getTopLevelElement()?.is($paraOf("p"))).toBe(true);
    });
  });
});

describe("EditorRef.getSelectedParaMarker while read-only", () => {
  it("reports nothing once the editor turns read-only, and the marker again when editable", async () => {
    const { ref, lexical } = await mountParagraphStructure();
    await selectMarker(lexical, "li2");

    act(() => lexical.setEditable(false));
    expect(ref.current?.getSelectedParaMarker()).toBeUndefined();

    act(() => lexical.setEditable(true));
    expect(ref.current?.getSelectedParaMarker()).toBe("li2");
  });
});

describe("EditorRef.getSelectedParaMarker", () => {
  it("is undefined for a caret and names the marker for a marker selection", async () => {
    const { ref, lexical } = await mountParagraphStructure();
    await act(async () => {
      lexical.update(() => $paraOf("li2").selectEnd());
    });
    expect(ref.current?.getSelectedParaMarker()).toBeUndefined();

    await selectMarker(lexical, "li2");

    expect(ref.current?.getSelectedParaMarker()).toBe("li2");
    // The USJ selection API cannot express a node selection, and says so.
    expect(ref.current?.getSelection()).toBeUndefined();
  });

  it("is undefined in the block verse layout, which renders no gutter markers", async () => {
    const { ref } = await mountParagraphStructure({
      options: { isReadonly: true, view: getViewOptions(BLOCK_VERSE_VIEW_MODE) },
    });

    expect(ref.current?.getSelectedParaMarker()).toBeUndefined();
  });

  it("survives focus leaving for a host popover and coming back through focus()", async () => {
    const { ref, lexical } = await mountParagraphStructure();
    await act(async () => {
      ref.current?.focus();
    });
    await selectMarker(lexical, "li2");

    await act(async () => {
      lexical.getRootElement()?.blur();
    });
    await act(async () => {
      ref.current?.focus();
    });
    await flushQueuedEvents();

    expect(ref.current?.getSelectedParaMarker()).toBe("li2");
    expect(paraElementOf(lexical, "li2").classList.contains("psc-para-marker-selected")).toBe(true);
  });

  it("comes back with the marker still selected when a retag is undone", async () => {
    const { ref, lexical } = await mountParagraphStructure();
    await selectMarker(lexical, "li2");
    await act(async () => {
      ref.current?.formatPara("q1");
      await Promise.resolve();
      await Promise.resolve();
    });
    expect(ref.current?.getSelectedParaMarker()).toBe("q1");

    await act(async () => {
      ref.current?.undo();
    });
    await flushQueuedEvents();

    expect(ref.current?.getSelectedParaMarker()).toBe("li2");
    lexical.getEditorState().read(() => {
      expect(
        $getRoot()
          .getChildren()
          .filter($isParaNode)
          .map((para) => para.getMarker()),
      ).toEqual(["p", "li2"]);
    });
  });
});

describe("EditorProps.onParaMarkerMenuRequest", () => {
  it.each([[{ key: "Enter" }], [{ key: "ArrowDown", altKey: true }]])(
    "fires on %o with a marker selected, keeping the selection",
    async (init) => {
      const onParaMarkerMenuRequest = vi.fn();
      const { ref, lexical } = await mountParagraphStructure({ onParaMarkerMenuRequest });
      await clickElement(glyphElementOf(lexical, "li2"));

      await pressKeyOn(lexical, init);

      expect(onParaMarkerMenuRequest).toHaveBeenCalledTimes(1);
      expect(ref.current?.getSelectedParaMarker()).toBe("li2");
    },
  );
});

describe("Backspace/Delete on a selected paragraph marker", () => {
  const view = getViewOptions(PARAGRAPH_STRUCTURE_VIEW_MODE);

  it.each(["Backspace", "Delete"])(
    "%s merges the paragraph into the previous one, and a single undo restores the document",
    async (key) => {
      const { ref, lexical } = await mountParagraphStructure({
        options: { view, structureProtectionMode: "guarded" },
      });
      const before = ref.current?.getUsj();
      await clickElement(glyphElementOf(lexical, "li2"));

      await pressKeyOn(lexical, { key });
      await flushQueuedEvents();

      expect(ref.current?.getUsj()?.content.slice(2)).toEqual([
        {
          type: "para",
          marker: "p",
          content: [
            { type: "verse", marker: "v", number: "1" },
            // The editor's usual spacing before a verse that follows text.
            "first verse text ",
            { type: "verse", marker: "v", number: "2" },
            "second verse text",
          ],
        },
      ]);
      expect(ref.current?.getSelectedParaMarker()).toBeUndefined();

      await act(async () => {
        ref.current?.undo();
      });
      await flushQueuedEvents();

      expect(ref.current?.getUsj()).toEqual(before);
    },
  );

  it("changes nothing where structure is protected", async () => {
    const { ref, lexical } = await mountParagraphStructure({
      options: { view, structureProtectionMode: "protected" },
    });
    const before = ref.current?.getUsj();
    await clickElement(glyphElementOf(lexical, "li2"));

    const event = await pressKeyOn(lexical, { key: "Backspace" });
    await flushQueuedEvents();

    expect(event.defaultPrevented).toBe(true);
    expect(ref.current?.getUsj()).toEqual(before);
    expect(ref.current?.getSelectedParaMarker()).toBe("li2");
  });
});
