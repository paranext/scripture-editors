/**
 * Structure protection ("protected", the lock a Simple-mode project admin or user turns on) keeps
 * every paragraph's marker, end to end on the real platform `<Editor>` in the paragraph-structure
 * (gutter) view — the only view the lock applies in, since Simple mode never shows the Standard view.
 *
 * Two kinds of case. A REFUSAL leaves the document exactly as it was: same content, the same gutter
 * glyph node (not one deleted and rebuilt by `ParaMarkerPrefixGuardPlugin`'s restore), and no undo
 * step. Keys are pressed twice there, so the lock's refusal is told apart from the unlocked two-step
 * delete, whose first press only arms. An EDIT that the lock allows (removing or replacing a line's
 * text) must leave each paragraph's marker, and its label, in place.
 */
import Editor from "./Editor";
import { EditorRef } from "./editor.model";
import { flushQueuedEvents } from "./editor-test.utils";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { EditorRefPlugin } from "@lexical/react/LexicalEditorRefPlugin";
import { act, render } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  $setSelection,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  CUT_COMMAND,
  DELETE_CHARACTER_COMMAND,
  DELETE_LINE_COMMAND,
  DELETE_WORD_COMMAND,
  LexicalCommand,
  LexicalEditor,
  NodeKey,
  RangeSelection,
} from "lexical";
import { createRef, RefObject } from "react";
import {
  $isGutterMarkerNode,
  $isParaNode,
  BookNode,
  NBSP,
  openingMarkerText,
  ParaNode,
} from "shared";
import { getViewOptions, PARAGRAPH_STRUCTURE_VIEW_MODE } from "shared-react";
import { vi } from "vitest";

// jsdom has no `Range.getBoundingClientRect`; Lexical's post-commit scroll-into-view reads one once
// the root has focus. Stub it the same way the sibling editor tests do.
if (typeof Range.prototype.getBoundingClientRect !== "function")
  Range.prototype.getBoundingClientRect = () => new DOMRect();

const POETRY_TEXT = "nor stand on the path of sinners,";

// A `\q2` line with no verse between a verse-led `\q1` and a closing `\p`, a heading after a `\p`,
// and a second chapter — every paragraph has a neighbour it could be merged into, and the closing
// line a chapter marker it could swallow, if the lock let it.
const lockedUsj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "PSA", content: ["Test Book"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [{ type: "verse", marker: "v", number: "1" }, "Introductory text"],
    },
    { type: "para", marker: "s1", content: ["The Heading"] },
    {
      type: "para",
      marker: "q1",
      content: [{ type: "verse", marker: "v", number: "2" }, "Blessed is the man"],
    },
    { type: "para", marker: "q2", content: [POETRY_TEXT] },
    {
      type: "para",
      marker: "p",
      content: [{ type: "verse", marker: "v", number: "3" }, "Closing text"],
    },
    { type: "chapter", marker: "c", number: "2" },
    {
      type: "para",
      marker: "p",
      content: [{ type: "verse", marker: "v", number: "1" }, "Next chapter"],
    },
  ],
};

/** `lockedUsj` with `marker`'s paragraph loaded already empty. */
function lockedUsjWithEmpty(marker: string): Usj {
  return {
    ...lockedUsj,
    content: lockedUsj.content.map((node) =>
      typeof node === "object" && node.type === "para" && node.marker === marker
        ? { type: "para", marker, content: [] }
        : node,
    ),
  };
}

interface Mounted {
  ref: RefObject<EditorRef | null>;
  lexical: LexicalEditor;
  canUndo: () => boolean;
}

async function mountLocked(usj: Usj = lockedUsj): Promise<Mounted> {
  const ref = createRef<EditorRef>();
  const lexicalRef = createRef<LexicalEditor>();
  let canUndo = false;
  await act(async () => {
    render(
      <Editor
        ref={ref}
        defaultUsj={usj}
        options={{
          view: getViewOptions(PARAGRAPH_STRUCTURE_VIEW_MODE),
          structureProtectionMode: "protected",
        }}
        onStateChange={(state) => {
          canUndo = state.canUndo;
        }}
      >
        <EditorRefPlugin editorRef={lexicalRef} />
      </Editor>,
    );
  });
  await flushQueuedEvents();
  const lexical = lexicalRef.current;
  if (!ref.current || !lexical) throw new Error("editor did not mount");
  // Focused, as a user's editor is: an unfocused root lets a refusal's commit move jsdom's
  // selection, so a second press would not run from the caret the test placed.
  await act(async () => {
    lexical.getRootElement()?.focus();
  });
  await flushQueuedEvents();
  return { ref, lexical, canUndo: () => canUndo };
}

/** A paragraph named by its marker (the first, if several share it) or by how its text ends. */
type ParaTarget = string | { endingWith: string };

/** The paragraph with `marker` (the first, if several share it). Read-only: call inside a read. */
function $paraOf(marker: string): ParaNode {
  const para = $getRoot()
    .getChildren()
    .find((node): node is ParaNode => $isParaNode(node) && node.getMarker() === marker);
  if (!para) throw new Error(`no \\${marker} paragraph`);
  return para;
}

/** The key of `target`'s gutter glyph, or undefined when its first child is not one. */
function glyphKeyOf(lexical: LexicalEditor, target: ParaTarget): NodeKey | undefined {
  return lexical.getEditorState().read(() => {
    const first = $paraFor(target).getFirstChild();
    return $isGutterMarkerNode(first) ? first.getKey() : undefined;
  });
}

/** Whether `marker`'s paragraph leads with a gutter glyph labelled with that marker. */
function showsOwnLabel(lexical: LexicalEditor, marker: string): boolean {
  return lexical.getEditorState().read(() => {
    const first = $paraOf(marker).getFirstChild();
    return (
      $isGutterMarkerNode(first) && first.getTextContent() === openingMarkerText(marker) + NBSP
    );
  });
}

/** The markers of the saved document's paragraphs, in order. */
function savedParaMarkers(ref: RefObject<EditorRef | null>): (string | undefined)[] {
  return (ref.current?.getUsj()?.content ?? []).flatMap((node) =>
    typeof node === "object" && node.type === "para" ? [node.marker] : [],
  );
}

/** The saved content of the first paragraph with `marker`. */
function savedContentOf(ref: RefObject<EditorRef | null>, marker: string): unknown {
  const para = ref.current
    ?.getUsj()
    ?.content.find(
      (node) => typeof node === "object" && node.type === "para" && node.marker === marker,
    );
  return typeof para === "object" ? (para.content ?? []) : undefined;
}

async function update(lexical: LexicalEditor, fn: () => void): Promise<void> {
  await act(async () => {
    lexical.update(fn);
  });
  await flushQueuedEvents();
}

/** The paragraph whose text ends with `text`. Read-only: call inside a read. */
function $paraEndingWith(text: string): ParaNode {
  const para = $getRoot()
    .getChildren()
    .find((node): node is ParaNode => $isParaNode(node) && node.getTextContent().endsWith(text));
  if (!para) throw new Error(`no paragraph ending "${text}"`);
  return para;
}

/** The paragraph `target` names. Read-only: call inside a read. */
function $paraFor(target: ParaTarget): ParaNode {
  return typeof target === "string" ? $paraOf(target) : $paraEndingWith(target.endingWith);
}

/**
 * Puts a collapsed caret at `offset` (`"end"` for its end) in the last text node of the paragraph
 * `target` names.
 */
async function placeCaret(
  lexical: LexicalEditor,
  target: ParaTarget,
  offset: number | "end",
): Promise<void> {
  await update(lexical, () => {
    const para = $paraFor(target);
    const text = para.getLastChild();
    if (!$isTextNode(text)) throw new Error("no text to put the caret in");
    const at = offset === "end" ? text.getTextContentSize() : offset;
    text.select(at, at);
  });
}

/** A triple-click's selection: the whole paragraph, from before its glyph to its end. */
async function selectWholeParagraph(lexical: LexicalEditor, marker: string): Promise<void> {
  await update(lexical, () => {
    const para = $paraOf(marker);
    para.select(0, para.getChildrenSize());
  });
}

async function dispatch<T>(
  lexical: LexicalEditor,
  command: LexicalCommand<T>,
  payload: T,
): Promise<void> {
  await update(lexical, () => {
    lexical.dispatchCommand(command, payload);
  });
}

/** Dispatches a real `keydown` to the editor root; throws if there is no root to receive it. */
async function pressKey(lexical: LexicalEditor, key: string): Promise<void> {
  const root = lexical.getRootElement();
  if (!root) throw new Error("editor has no root element to press a key on");
  await act(async () => {
    root.dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true }));
  });
  await flushQueuedEvents();
}

type ModifyArgs = Parameters<RangeSelection["modify"]>;

/**
 * Runs `gesture` with `RangeSelection.modify` reproducing where Chromium's extension lands (jsdom
 * has no `Selection.modify`), and checks the gesture asked for exactly the `expected` extension — a
 * stub that ignored its arguments would accept a "move" or the wrong granularity as readily.
 * `RangeSelection` is a type-only export, so its prototype is reached through an instance.
 */
async function withExtensionLandingAt(
  lexical: LexicalEditor,
  expected: ModifyArgs,
  $landing: (selection: RangeSelection) => void,
  gesture: () => Promise<void>,
): Promise<void> {
  const proto = lexical
    .getEditorState()
    .read(() => Object.getPrototypeOf($createRangeSelection()) as RangeSelection);
  const modifySpy = vi.spyOn(proto, "modify").mockImplementation(function (
    this: RangeSelection,
    ...args: ModifyArgs
  ) {
    expect(args).toEqual(expected);
    $landing(this);
  });
  try {
    await gesture();
    expect(modifySpy).toHaveBeenCalled();
  } finally {
    modifySpy.mockRestore();
  }
}

/** The caret as `key:offset:type`, so a refusal can be shown to leave it where it was. */
function caretOf(lexical: LexicalEditor): string {
  return lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) return "none";
    const { key, offset, type } = selection.focus;
    return `${key}:${offset}:${type}`;
  });
}

/**
 * Asserts a gesture was refused outright, twice running from the same caret: same document, same
 * glyph node, caret unmoved, no undo step.
 */
async function expectRefused(
  { ref, lexical, canUndo }: Mounted,
  target: ParaTarget,
  gesture: () => Promise<void>,
): Promise<void> {
  const before = ref.current?.getUsj();
  const glyphBefore = glyphKeyOf(lexical, target);
  const caretBefore = caretOf(lexical);
  expect(glyphBefore).toBeDefined();

  await gesture();
  expect(caretOf(lexical)).toBe(caretBefore);
  await gesture();

  expect(ref.current?.getUsj()).toEqual(before);
  expect(glyphKeyOf(lexical, target)).toBe(glyphBefore);
  expect(caretOf(lexical)).toBe(caretBefore);
  expect(canUndo()).toBe(false);
}

const ALL_MARKERS = ["p", "s1", "q1", "q2", "p", "p"];

describe("structure protection refuses a delete that would remove a paragraph's marker", () => {
  it("Backspace at the start of a line's text", async () => {
    const mounted = await mountLocked();
    await placeCaret(mounted.lexical, "q2", 0);

    await expectRefused(mounted, "q2", () => pressKey(mounted.lexical, "Backspace"));
  });

  it("Backspace with the caret in front of the line's glyph", async () => {
    const mounted = await mountLocked();
    await update(mounted.lexical, () => {
      const para = $paraOf("q2");
      para.select(0, 0);
    });

    await expectRefused(mounted, "q2", () => pressKey(mounted.lexical, "Backspace"));
  });

  it("Backspace in a heading whose text has been deleted", async () => {
    // Loaded already empty, so deleting the text is not itself an undo step before the key.
    const mounted = await mountLocked(lockedUsjWithEmpty("s1"));
    await update(mounted.lexical, () => {
      $paraOf("s1").selectEnd();
    });

    await expectRefused(mounted, "s1", () => pressKey(mounted.lexical, "Backspace"));
  });

  it("a backward delete with no Backspace keydown (macOS ⌃H) at the start of a line's text", async () => {
    const mounted = await mountLocked();
    await placeCaret(mounted.lexical, "q2", 0);

    await expectRefused(mounted, "q2", () =>
      dispatch(mounted.lexical, DELETE_CHARACTER_COMMAND, true),
    );
  });

  it("a forward delete with no Delete keydown (macOS ⌃D) at the end of the line before", async () => {
    const mounted = await mountLocked();
    await placeCaret(mounted.lexical, "q1", "end");

    await expectRefused(mounted, "q2", () =>
      dispatch(mounted.lexical, DELETE_CHARACTER_COMMAND, false),
    );
  });

  it("a forward delete in front of an empty line's glyph", async () => {
    const mounted = await mountLocked(lockedUsjWithEmpty("s1"));
    await update(mounted.lexical, () => {
      $paraOf("s1").select(0, 0);
    });

    await expectRefused(mounted, "s1", () => pressKey(mounted.lexical, "Delete"));
  });

  // Both are refused by the caret check before any extension: at a line's end, the next block is
  // all a forward line delete could reach.
  it("a forward line delete (macOS ⌃K) at the end of the line before", async () => {
    const mounted = await mountLocked();
    await placeCaret(mounted.lexical, "q1", "end");

    await expectRefused(mounted, "q2", () => dispatch(mounted.lexical, DELETE_LINE_COMMAND, false));
  });

  it("a forward line delete (macOS ⌃K) at the end of the line before a chapter", async () => {
    const mounted = await mountLocked();
    const closing = { endingWith: "Closing text" };
    await placeCaret(mounted.lexical, closing, "end");

    await expectRefused(mounted, closing, () =>
      dispatch(mounted.lexical, DELETE_LINE_COMMAND, false),
    );
  });

  it("Backspace over a range that reaches just past a chapter marker", async () => {
    const mounted = await mountLocked();
    const closing = { endingWith: "Closing text" };
    // Shift+ArrowRight at the end of "Closing text": a range from the line's end to just past
    // `\c 2` — no paragraph but this one, so only the chapter itself marks it as structural.
    await update(mounted.lexical, () => {
      const text = $paraFor(closing).getLastChild();
      if (!$isTextNode(text)) throw new Error("no closing text");
      const selection = $createRangeSelection();
      const size = text.getTextContentSize();
      selection.anchor.set(text.getKey(), size, "text");
      const chapterIndex = $paraFor(closing).getIndexWithinParent() + 1;
      selection.focus.set("root", chapterIndex + 1, "element");
      $setSelection(selection);
    });

    await expectRefused(mounted, closing, () => pressKey(mounted.lexical, "Backspace"));
  });

  it("a forward line delete (macOS ⌃K) at the end of the `\\id` line", async () => {
    const mounted = await mountLocked();
    await update(mounted.lexical, () => {
      $getRoot().getFirstChildOrThrow<BookNode>().selectEnd();
    });
    const before = mounted.ref.current?.getUsj();

    await dispatch(mounted.lexical, DELETE_LINE_COMMAND, false);
    await dispatch(mounted.lexical, DELETE_WORD_COMMAND, false);

    expect(mounted.ref.current?.getUsj()).toEqual(before);
    expect(mounted.canUndo()).toBe(false);
  });

  it("a backward word delete over a range that covers only a line's glyph", async () => {
    const mounted = await mountLocked();
    // Shift+ArrowLeft from the start of the line's text: the range covers the glyph and nothing else.
    await update(mounted.lexical, () => {
      const para = $paraOf("q2");
      const text = para.getLastChild();
      if (!$isTextNode(text)) throw new Error("no line text");
      const selection = $createRangeSelection();
      selection.anchor.set(text.getKey(), 0, "text");
      selection.focus.set(para.getKey(), 0, "element");
      $setSelection(selection);
    });

    await expectRefused(mounted, "q2", () => dispatch(mounted.lexical, DELETE_WORD_COMMAND, true));
  });

  it("a backward word delete that reaches back over a line's verse", async () => {
    const mounted = await mountLocked();
    await placeCaret(mounted.lexical, "q1", 1); // "B|lessed is the man"

    // The word extension steps back over the verse's span to the line's own start.
    await withExtensionLandingAt(
      mounted.lexical,
      ["extend", true, "word"],
      (selection) => {
        selection.focus.set($paraOf("q1").getKey(), 0, "element");
      },
      () =>
        expectRefused(mounted, "q1", () => dispatch(mounted.lexical, DELETE_WORD_COMMAND, true)),
    );
  });

  it("Cmd+Backspace mid-line on a line that starts with a verse", async () => {
    const mounted = await mountLocked();
    await placeCaret(mounted.lexical, "q1", 10); // "Blessed is| the man"

    // The line starts with the verse's contenteditable=false span, so Chromium's extension lands
    // at the end of the previous paragraph's text — measured in real Chrome.
    await withExtensionLandingAt(
      mounted.lexical,
      ["extend", true, "lineboundary"],
      (selection) => {
        const previous = $paraOf("s1").getLastChild();
        if (!$isTextNode(previous)) throw new Error("no heading text");
        selection.focus.set(previous.getKey(), previous.getTextContentSize(), "text");
      },
      () =>
        expectRefused(mounted, "q1", () => dispatch(mounted.lexical, DELETE_LINE_COMMAND, true)),
    );
  });

  it("Backspace at the start of a glyph-led paragraph that is the document's first block", async () => {
    const mounted = await mountLocked({
      type: "USJ",
      version: "3.1",
      content: [
        { type: "para", marker: "s1", content: ["The Heading"] },
        { type: "para", marker: "p", content: ["Some text"] },
      ],
    });
    await placeCaret(mounted.lexical, "s1", 0);

    await expectRefused(mounted, "s1", () => pressKey(mounted.lexical, "Backspace"));
  });

  it("a backward word delete whose extension reaches into a figure's caption", async () => {
    const mounted = await mountLocked({
      type: "USJ",
      version: "3.1",
      content: [
        {
          type: "para",
          marker: "p",
          content: [
            "Before ",
            { type: "figure", marker: "fig", file: "a.jpg", size: "col", content: ["My caption"] },
            " after",
          ],
        },
        { type: "para", marker: "q2", content: [POETRY_TEXT] },
      ],
    } as unknown as Usj);
    await placeCaret(mounted.lexical, "p", 1); // " |after", just past the figure

    // The caret is outside the figure, but the word extension lands inside its caption.
    await withExtensionLandingAt(
      mounted.lexical,
      ["extend", true, "word"],
      (selection) => {
        const caption = $getRoot()
          .getAllTextNodes()
          .find((node) => node.getTextContent() === "My caption");
        if (!caption) throw new Error("no caption text");
        selection.focus.set(caption.getKey(), 3, "text");
      },
      () => expectRefused(mounted, "p", () => dispatch(mounted.lexical, DELETE_WORD_COMMAND, true)),
    );
  });

  it("a backward word delete over a verse and a hidden figure, even if the host would confirm it", async () => {
    // A host that always answers "delete": the lock must refuse before the question is asked.
    const onHiddenContentDelete = vi.fn<HiddenContentDeleteHandler>(() => "delete");
    const mounted = await mountLocked(
      {
        ...lockedUsj,
        content: lockedUsj.content.map((node) =>
          typeof node === "object" && node.type === "para" && node.marker === "q1"
            ? {
                type: "para",
                marker: "q1",
                content: [
                  { type: "verse", marker: "v", number: "2" },
                  { type: "figure", marker: "fig", file: "a.jpg", content: ["Cap"] },
                  "Blessed is the man",
                ],
              }
            : node,
        ),
      } as unknown as Usj,
      onHiddenContentDelete,
    );
    await placeCaret(mounted.lexical, "q1", 1); // "B|lessed is the man"
    // The hidden-content guard only measures an extent where the browser has `Selection.modify`.
    const hadModify = typeof Selection.prototype.modify === "function";
    if (!hadModify) Selection.prototype.modify = () => undefined;

    try {
      // The word extension steps back over the figure and the verse to the line's own start.
      await withExtensionLandingAt(
        mounted.lexical,
        ["extend", true, "word"],
        (selection) => {
          selection.focus.set($paraOf("q1").getKey(), 0, "element");
        },
        () =>
          expectRefused(mounted, "q1", () => dispatch(mounted.lexical, DELETE_WORD_COMMAND, true)),
      );
    } finally {
      if (!hadModify) delete (Selection.prototype as Partial<Selection>).modify;
    }
    expect(onHiddenContentDelete).not.toHaveBeenCalled();
  });
});

describe("structure protection keeps the marker when a line's text is edited", () => {
  it("Cmd+Backspace mid-line removes back to the text's start, leaving the glyph untouched", async () => {
    const { ref, lexical } = await mountLocked();
    await placeCaret(lexical, "q2", 9); // "nor stand| on the path of sinners,"
    const glyphBefore = glyphKeyOf(lexical, "q2");

    // With no verse in the way, the extension stops at the line's own start, in front of the glyph.
    await withExtensionLandingAt(
      lexical,
      ["extend", true, "lineboundary"],
      (selection) => {
        selection.focus.set($paraOf("q2").getKey(), 0, "element");
      },
      () => dispatch(lexical, DELETE_LINE_COMMAND, true),
    );

    expect(savedParaMarkers(ref)).toEqual(ALL_MARKERS);
    expect(savedContentOf(ref, "q2")).toEqual([" on the path of sinners,"]);
    expect(glyphKeyOf(lexical, "q2")).toBe(glyphBefore); // removed around, not deleted and rebuilt
  });

  it("Delete in front of a line's glyph deletes the text's first character", async () => {
    const { ref, lexical } = await mountLocked();
    // Where ArrowRight from the end of the line before leaves the caret.
    await update(lexical, () => {
      $paraOf("q2").select(0, 0);
    });
    const glyphBefore = glyphKeyOf(lexical, "q2");

    // Lexical's own delete extends by one character from wherever the caret now is — past the
    // glyph, so over the text's "n".
    await withExtensionLandingAt(
      lexical,
      ["extend", false, "character"],
      (selection) => {
        const text = $paraOf("q2").getLastChild();
        if (!$isTextNode(text)) throw new Error("no line text");
        expect(selection.anchor.key).toBe(text.getKey());
        selection.focus.set(text.getKey(), selection.anchor.offset + 1, "text");
      },
      () => pressKey(lexical, "Delete"),
    );

    expect(savedParaMarkers(ref)).toEqual(ALL_MARKERS);
    expect(savedContentOf(ref, "q2")).toEqual([POETRY_TEXT.slice(1)]);
    expect(glyphKeyOf(lexical, "q2")).toBe(glyphBefore);
  });

  it("a forward line delete (macOS ⌃K) in front of a line's glyph removes the line's text", async () => {
    const { ref, lexical } = await mountLocked();
    await update(lexical, () => {
      $paraOf("q2").select(0, 0);
    });
    const glyphBefore = glyphKeyOf(lexical, "q2");

    await withExtensionLandingAt(
      lexical,
      ["extend", false, "lineboundary"],
      (selection) => {
        const text = $paraOf("q2").getLastChild();
        if (!$isTextNode(text)) throw new Error("no line text");
        selection.focus.set(text.getKey(), text.getTextContentSize(), "text");
      },
      () => dispatch(lexical, DELETE_LINE_COMMAND, false),
    );

    expect(savedParaMarkers(ref)).toEqual(ALL_MARKERS);
    expect(savedContentOf(ref, "q2")).toEqual([]);
    expect(glyphKeyOf(lexical, "q2")).toBe(glyphBefore);
  });

  it("Backspace over a triple-clicked line removes its text", async () => {
    const { ref, lexical } = await mountLocked();
    await selectWholeParagraph(lexical, "q2");
    // The range really does reach the glyph, as a triple-click's does.
    expect(
      lexical.getEditorState().read(() => !!$getSelection()?.getNodes().some($isGutterMarkerNode)),
    ).toBe(true);

    await pressKey(lexical, "Backspace");

    expect(savedParaMarkers(ref)).toEqual(ALL_MARKERS);
    expect(savedContentOf(ref, "q2")).toEqual([]);
    expect(showsOwnLabel(lexical, "q2")).toBe(true);
  });

  it("typing over a triple-clicked line replaces its text", async () => {
    const { ref, lexical } = await mountLocked();
    await selectWholeParagraph(lexical, "q2");

    await dispatch(lexical, CONTROLLED_TEXT_INSERTION_COMMAND, "x");

    expect(savedParaMarkers(ref)).toEqual(ALL_MARKERS);
    expect(savedContentOf(ref, "q2")).toEqual(["x"]);
    expect(showsOwnLabel(lexical, "q2")).toBe(true);
  });

  it("cutting a triple-clicked line removes its text", async () => {
    const { ref, lexical } = await mountLocked();
    await selectWholeParagraph(lexical, "q2");
    // The browser's own cut event, carrying the clipboard Lexical writes to (Editor.test.tsx's
    // recipe); a cut with no event would go through `document.execCommand`, which jsdom lacks.
    const store = new Map<string, string>();
    const event = new ClipboardEvent("cut", { bubbles: true, cancelable: true });
    Object.defineProperty(event, "clipboardData", {
      value: {
        getData: (type: string) => store.get(type) ?? "",
        setData: (type: string, data: string) => store.set(type, data),
      },
    });

    await dispatch(lexical, CUT_COMMAND, event);

    expect(store.get("text/plain")).toContain("nor stand");
    expect(savedParaMarkers(ref)).toEqual(ALL_MARKERS);
    expect(savedContentOf(ref, "q2")).toEqual([]);
    expect(showsOwnLabel(lexical, "q2")).toBe(true);
  });
});
