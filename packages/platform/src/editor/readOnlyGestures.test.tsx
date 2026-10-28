/**
 * Every gesture a user (or a host acting for one) can make in a read-only editor changes nothing:
 * not the editor's tree, not what `getUsj` returns, and no `onUsjChange` (so no ops) reaches the
 * host. Run in each of {@link READ_ONLY_VIEWS}, the read-only surfaces the app shows.
 *
 * Gestures go in the way a browser delivers them — key events and the `beforeinput` they make,
 * `paste`/`cut`/`drop` events on the editor root — and the way a host's menus and shortcuts do,
 * through the `EditorRef` methods. A ref method may refuse by throwing; that changes nothing too.
 *
 * Each gesture also runs once in the same view made editable, where it must change the document:
 * otherwise a read-only row passing would say nothing about the gesture.
 */
import {
  editorView,
  MountedEditor,
  mountInView,
  READ_ONLY_VIEWS,
} from "./editorViews.test-helpers";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { deepEqual } from "fast-equals";
import { $getRoot, LexicalEditor, SerializedEditorState } from "lexical";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";

// Lexical handles `beforeinput` only where `InputEvent.getTargetRanges` exists, which it checks
// once, as it loads; jsdom has none. `vi.hoisted` runs this before any import, so the input a
// gesture makes reaches the editor here as it does in a browser.
vi.hoisted(() => {
  Object.defineProperty(InputEvent.prototype, "getTargetRanges", {
    value: () => [],
    configurable: true,
  });
});

const scrRef = { book: "GEN", chapterNum: 1, verseNum: 1 };

const usj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: [] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [
        { type: "verse", marker: "v", number: "1" },
        "In the beginning ",
        { type: "char", marker: "nd", content: ["God"] },
        " created the heavens",
        {
          type: "note",
          marker: "f",
          caller: "+",
          content: [{ type: "char", marker: "ft", content: ["Or sky"] }],
        },
        " and the earth.",
      ],
    },
    {
      type: "para",
      marker: "p",
      content: [{ type: "verse", marker: "v", number: "2" }, "The earth was formless."],
    },
  ],
};

/** The ops a host would send: verse 2's text gains a word. */
const hostUpdate = [{ retain: 1 }, { insert: "x" }];

async function settle(): Promise<void> {
  await act(async () => {
    for (let i = 0; i < 5; i += 1) await new Promise((resolve) => setTimeout(resolve, 0));
  });
}

/** Selects `from`..`to` within the first text holding `text`, in the editor and in the DOM, as a
 * user's mouse selection does (a read-only text is still selectable, to copy from). */
async function select(editor: LexicalEditor, text: string, from: number, to = from) {
  let key: string | undefined;
  let start = 0;
  await act(async () => {
    editor.update(
      () => {
        const node = $getRoot()
          .getAllTextNodes()
          .find((candidate) => candidate.getTextContent().includes(text));
        if (!node) throw new Error(`no text holding ${JSON.stringify(text)}`);
        start = node.getTextContent().indexOf(text);
        key = node.getKey();
        node.select(start + from, start + to);
      },
      { discrete: true },
    );
  });
  const domText = key ? editor.getElementByKey(key)?.firstChild : undefined;
  if (domText)
    document.getSelection()?.setBaseAndExtent(domText, start + from, domText, start + to);
}

function rootOf(mounted: MountedEditor): HTMLElement {
  const root = mounted.lexical.getRootElement();
  if (!root) throw new Error("no editor root");
  return root;
}

/** A clipboard store with the given flavors, readable and writable as a browser's is. */
function clipboardData(flavors: { [format: string]: string } = {}) {
  const store = new Map(Object.entries(flavors));
  return {
    get types() {
      return [...store.keys()];
    },
    files: [],
    items: [],
    getData: (format: string) => store.get(format) ?? "",
    setData: (format: string, data: string) => store.set(format, data),
    clearData: () => store.clear(),
  };
}

/** A `paste` or `cut` event carrying `data`, as a browser fires one on the editor root. */
function clipboardEvent(type: "paste" | "cut", data = clipboardData()): ClipboardEvent {
  const event = new ClipboardEvent(type, { bubbles: true, cancelable: true });
  Object.defineProperty(event, "clipboardData", { value: data });
  return event;
}

/** A `beforeinput` whose content comes in a data transfer (a paste or a drop). */
function transferInput(inputType: string, flavors: { [format: string]: string }): InputEvent {
  const event = new InputEvent("beforeinput", { inputType, bubbles: true, cancelable: true });
  Object.defineProperty(event, "dataTransfer", { value: clipboardData(flavors) });
  return event;
}

/** Whether a browser would insert the text itself: only into an element it can edit. */
function isDomEditable(root: HTMLElement): boolean {
  return root.getAttribute("contenteditable") === "true";
}

/** A key press as a browser delivers it: the keydown, then, for a key that inputs, its
 * `beforeinput` and — when no handler claimed it and the element is editable — the insertion. */
async function press(
  mounted: MountedEditor,
  key: string,
  modifiers: { ctrlKey?: boolean; shiftKey?: boolean } = {},
  input?: { inputType: string; data?: string },
): Promise<void> {
  const root = rootOf(mounted);
  await act(async () => {
    const keydown = new KeyboardEvent("keydown", {
      key,
      ...modifiers,
      bubbles: true,
      cancelable: true,
    });
    root.dispatchEvent(keydown);
    if (!input || keydown.defaultPrevented) return;
    const beforeInput = new InputEvent("beforeinput", {
      ...input,
      bubbles: true,
      cancelable: true,
    });
    root.dispatchEvent(beforeInput);
    if (beforeInput.defaultPrevented || !isDomEditable(root)) return;
    const selection = document.getSelection();
    const range = selection?.rangeCount ? selection.getRangeAt(0) : undefined;
    const text = range?.startContainer;
    if (!range || !(text instanceof Text)) return;
    if (input.data !== undefined) text.insertData(range.startOffset, input.data);
    else if (input.inputType === "deleteContentBackward" && range.startOffset > 0)
      text.deleteData(range.startOffset - 1, 1);
    else if (input.inputType === "deleteContentForward") text.deleteData(range.startOffset, 1);
    else return;
    root.dispatchEvent(new InputEvent("input", { ...input, bubbles: true }));
  });
  await settle();
}

async function dispatch(mounted: MountedEditor, event: Event): Promise<void> {
  await act(async () => {
    rootOf(mounted).dispatchEvent(event);
  });
  await settle();
}

/** Stands in the async clipboard the ref's paste and the paste shortcuts read, holding `text`. */
function stubAsyncClipboard(text: string): void {
  class FakeDataTransfer {
    private readonly store = new Map<string, string>();
    readonly files = [];
    get types() {
      return [...this.store.keys()];
    }
    setData(format: string, data: string) {
      this.store.set(format, data);
    }
    getData(format: string) {
      return this.store.get(format) ?? "";
    }
  }
  class FakeClipboardEvent extends Event {
    readonly clipboardData: FakeDataTransfer;
    constructor(type: string, init: { clipboardData: FakeDataTransfer }) {
      super(type);
      this.clipboardData = init.clipboardData;
    }
  }
  vi.stubGlobal("DataTransfer", FakeDataTransfer);
  vi.stubGlobal("ClipboardEvent", FakeClipboardEvent);
  vi.stubGlobal("navigator", {
    ...navigator,
    clipboard: {
      read: async () => [
        { types: ["text/plain"], getType: async () => ({ text: async () => text }) },
      ],
      readText: async () => text,
      write: async () => undefined,
      writeText: async () => undefined,
    },
    permissions: { query: async () => ({ state: "granted" }) },
  });
}

// What jsdom lacks and the gestures reach in an editable editor: a cut copies through
// `document.execCommand("copy")`, and a collapsed delete extends the selection by a character with
// `Selection.modify` before removing it.
beforeAll(() => {
  Object.defineProperty(document, "execCommand", { value: () => true, configurable: true });
  if (typeof Selection.prototype.modify !== "function")
    Selection.prototype.modify = function modify(alter, direction, granularity) {
      const node = this.focusNode;
      if (granularity !== "character" || !(node instanceof Text)) return;
      const step = direction === "backward" || direction === "left" ? -1 : 1;
      const offset = Math.min(Math.max(this.focusOffset + step, 0), node.length);
      if (alter === "extend") this.extend(node, offset);
      else this.collapse(node, offset);
    };
});

afterEach(() => {
  vi.unstubAllGlobals();
});

/** Runs `fn`, treating a refusal (a thrown error) as the gesture doing nothing. */
async function refusable(fn: () => void): Promise<void> {
  await act(async () => {
    try {
      fn();
    } catch {
      // A read-only editor may refuse a host's call by throwing.
    }
  });
  await settle();
}

interface Gesture {
  name: string;
  /** Where the selection is when the gesture is made. */
  at: { text: string; from: number; to?: number };
  run: (mounted: MountedEditor) => Promise<void>;
  /** Why the gesture cannot be shown to edit an editable editor in jsdom, when it cannot. */
  unprovable?: string;
}

const IN_BEGINNING = { text: "beginning", from: 3 };
const OVER_BEGINNING = { text: "beginning", from: 0, to: 9 };
const IN_GOD = { text: "God", from: 1 };
const OVER_GOD = { text: "God", from: 0, to: 3 };

const GESTURES: Gesture[] = [
  {
    name: "typing a character",
    at: IN_BEGINNING,
    run: (m) => press(m, "x", {}, { inputType: "insertText", data: "x" }),
  },
  {
    name: "typing over a selection",
    at: OVER_BEGINNING,
    run: (m) => press(m, "x", {}, { inputType: "insertText", data: "x" }),
  },
  {
    name: "Enter",
    at: IN_BEGINNING,
    run: (m) => press(m, "Enter", {}, { inputType: "insertParagraph" }),
  },
  {
    name: "Shift+Enter",
    at: IN_BEGINNING,
    run: (m) => press(m, "Enter", { shiftKey: true }, { inputType: "insertLineBreak" }),
  },
  {
    name: "Backspace",
    at: IN_BEGINNING,
    run: (m) => press(m, "Backspace", {}, { inputType: "deleteContentBackward" }),
  },
  {
    name: "Delete",
    at: IN_BEGINNING,
    run: (m) => press(m, "Delete", {}, { inputType: "deleteContentForward" }),
  },
  {
    name: "Backspace over a selection",
    at: OVER_BEGINNING,
    run: (m) => press(m, "Backspace", {}, { inputType: "deleteContentBackward" }),
  },
  {
    name: "pasting plain text",
    at: IN_BEGINNING,
    run: (m) => dispatch(m, clipboardEvent("paste", clipboardData({ "text/plain": "x" }))),
  },
  {
    name: "pasting USFM",
    at: IN_BEGINNING,
    run: (m) =>
      dispatch(m, clipboardEvent("paste", clipboardData({ "text/plain": "\\nd x\\nd* \\v 9 y" }))),
  },
  {
    name: "pasting HTML",
    at: IN_BEGINNING,
    run: (m) =>
      dispatch(
        m,
        clipboardEvent("paste", clipboardData({ "text/html": "<b>x</b>", "text/plain": "x" })),
      ),
  },
  {
    name: "cutting",
    at: OVER_BEGINNING,
    run: (m) => dispatch(m, clipboardEvent("cut")),
  },
  {
    name: "Ctrl+X",
    at: OVER_BEGINNING,
    run: (m) => press(m, "x", { ctrlKey: true }),
  },
  {
    name: "Ctrl+V",
    at: IN_BEGINNING,
    run: async (m) => {
      stubAsyncClipboard("x");
      await press(m, "v", { ctrlKey: true });
    },
  },
  {
    name: "Ctrl+Shift+V",
    at: IN_BEGINNING,
    run: async (m) => {
      stubAsyncClipboard("x");
      await press(m, "v", { ctrlKey: true, shiftKey: true });
    },
  },
  {
    name: "a drop event",
    at: IN_BEGINNING,
    run: async (m) => {
      const drop = new Event("drop", { bubbles: true, cancelable: true });
      Object.defineProperty(drop, "dataTransfer", { value: clipboardData({ "text/plain": "x" }) });
      await dispatch(m, drop);
    },
    unprovable: "a drop lands at the point under the pointer, and jsdom has no caretFromPoint",
  },
  {
    name: "the input a drop makes",
    at: IN_BEGINNING,
    run: (m) => dispatch(m, transferInput("insertFromDrop", { "text/plain": "x" })),
  },
  {
    name: "the ref's cut",
    at: OVER_BEGINNING,
    run: async (m) => {
      stubAsyncClipboard("");
      await refusable(() => m.ref.current?.cut());
    },
  },
  {
    name: "the ref's paste",
    at: IN_BEGINNING,
    run: async (m) => {
      stubAsyncClipboard("x");
      await refusable(() => m.ref.current?.paste());
    },
  },
  {
    name: "the ref's plain-text paste",
    at: IN_BEGINNING,
    run: async (m) => {
      stubAsyncClipboard("x");
      await refusable(() => m.ref.current?.pastePlainText());
    },
  },
  {
    name: "insertMarker",
    at: IN_BEGINNING,
    run: (m) => refusable(() => m.ref.current?.insertMarker("nd")),
  },
  {
    name: "insertMarker over a selection",
    at: OVER_BEGINNING,
    run: (m) => refusable(() => m.ref.current?.insertMarker("wj")),
  },
  {
    name: "the marker menu applying a character marker",
    at: OVER_BEGINNING,
    run: (m) =>
      refusable(() =>
        m.ref.current?.applyMarkerMenuSelection(
          { marker: "wj", kind: "character", isBasic: true },
          { trigger: "backslash", literalPrefixLanded: false },
        ),
      ),
  },
  {
    name: "the marker menu applying a paragraph marker",
    at: IN_BEGINNING,
    run: (m) =>
      refusable(() =>
        m.ref.current?.applyMarkerMenuSelection(
          { marker: "q1", kind: "paragraph", isBasic: true },
          { trigger: "backslash", literalPrefixLanded: false },
        ),
      ),
  },
  {
    name: "the marker menu applying a note",
    at: IN_BEGINNING,
    run: (m) =>
      refusable(() =>
        m.ref.current?.applyMarkerMenuSelection(
          { marker: "f", kind: "note", isBasic: true },
          { trigger: "backslash", literalPrefixLanded: false },
        ),
      ),
  },
  {
    name: "the Enter menu's paragraph split",
    at: IN_BEGINNING,
    run: (m) => refusable(() => m.ref.current?.splitParagraphWithMarker("q1")),
  },
  {
    name: "formatPara",
    at: IN_BEGINNING,
    run: (m) => refusable(() => m.ref.current?.formatPara("q1")),
  },
  {
    name: "insertNote",
    at: IN_BEGINNING,
    run: (m) => refusable(() => m.ref.current?.insertNote("f")),
  },
  {
    name: "removeCharacterMarker",
    at: IN_GOD,
    run: (m) => refusable(() => m.ref.current?.removeCharacterMarker("nd")),
  },
  {
    name: "replaceCharacterMarker",
    at: IN_GOD,
    run: (m) => refusable(() => m.ref.current?.replaceCharacterMarker("wj", "nd")),
  },
  {
    name: "extendCharacterMarker",
    at: OVER_GOD,
    run: (m) => refusable(() => m.ref.current?.extendCharacterMarker("wj")),
  },
  {
    name: "commitTypedMarker",
    at: IN_BEGINNING,
    run: (m) => refusable(() => m.ref.current?.commitTypedMarker("q1")),
  },
];

/** Undo and redo, with and without a history to act on. */
const HISTORY_GESTURES: { name: string; run: (m: MountedEditor) => Promise<void> }[] = [
  { name: "Ctrl+Z", run: (m) => press(m, "z", { ctrlKey: true }) },
  { name: "Ctrl+Y", run: (m) => press(m, "y", { ctrlKey: true }) },
  { name: "Ctrl+Shift+Z", run: (m) => press(m, "z", { ctrlKey: true, shiftKey: true }) },
  {
    name: "an undo input event",
    run: (m) =>
      dispatch(
        m,
        new InputEvent("beforeinput", {
          inputType: "historyUndo",
          bubbles: true,
          cancelable: true,
        }),
      ),
  },
  { name: "the ref's undo", run: (m) => refusable(() => m.ref.current?.undo()) },
  { name: "the ref's redo", run: (m) => refusable(() => m.ref.current?.redo()) },
];

interface Snapshot {
  tree: SerializedEditorState;
  usj: Usj | undefined;
}

function snapshot(mounted: MountedEditor): Snapshot {
  return {
    tree: mounted.lexical.getEditorState().toJSON(),
    usj: mounted.ref.current?.getUsj(),
  };
}

async function mount(view: (typeof READ_ONLY_VIEWS)[number], isReadonly: boolean) {
  const onUsjChange = vi.fn();
  const mounted = await mountInView(usj, view.view, { scrRef, isReadonly, onUsjChange });
  await settle();
  return { mounted, onUsjChange };
}

describe.each(READ_ONLY_VIEWS)("in the $name view, read-only", (view) => {
  it.each(GESTURES)("$name changes nothing", async ({ at, run }) => {
    const { mounted, onUsjChange } = await mount(view, true);
    await select(mounted.lexical, at.text, at.from, at.to);
    const before = snapshot(mounted);
    onUsjChange.mockClear();

    await run(mounted);

    expect(snapshot(mounted)).toEqual(before);
    expect(onUsjChange).not.toHaveBeenCalled();
  });

  it.each(HISTORY_GESTURES)("$name after a gesture changes nothing", async ({ run }) => {
    const { mounted, onUsjChange } = await mount(view, true);
    await select(mounted.lexical, IN_BEGINNING.text, IN_BEGINNING.from);
    await press(mounted, "x", {}, { inputType: "insertText", data: "x" });
    const before = snapshot(mounted);
    onUsjChange.mockClear();

    await run(mounted);

    expect(snapshot(mounted)).toEqual(before);
    expect(onUsjChange).not.toHaveBeenCalled();
  });

  // A host may write into a read-only text (a collaborator's edit arriving); undo is the user's
  // and must not take the host's write back out.
  if (view.name !== "block-verse")
    it.each(HISTORY_GESTURES)("$name after a host's update changes nothing", async ({ run }) => {
      const { mounted, onUsjChange } = await mount(view, true);
      await act(async () => mounted.ref.current?.applyUpdate(hostUpdate, "remote"));
      await settle();
      await select(mounted.lexical, IN_BEGINNING.text, IN_BEGINNING.from);
      const before = snapshot(mounted);
      onUsjChange.mockClear();

      await run(mounted);

      expect(snapshot(mounted)).toEqual(before);
      expect(onUsjChange).not.toHaveBeenCalled();
    });
});

// The read-only rows prove something only if each gesture, as this suite makes it, does edit an
// editable editor. Block verse has no editable form, so the preview's options stand in, and
// Standard view's for the gestures formatted view declines by design (a typed or pasted `\`).
describe("editable", () => {
  const editableViews = [READ_ONLY_VIEWS[0].view, editorView("standard")];

  it.each(GESTURES.filter(({ unprovable }) => !unprovable))(
    "$name changes the document in an editable view",
    async ({ at, run }) => {
      const changedIn: boolean[] = [];
      for (const view of editableViews) {
        const mounted = await mountInView(usj, view, { scrRef });
        await settle();
        await select(mounted.lexical, at.text, at.from, at.to);
        const before = snapshot(mounted);
        await run(mounted);
        changedIn.push(!deepEqual(snapshot(mounted).tree, before.tree));
        mounted.unmount();
      }

      expect(changedIn).toContain(true);
    },
  );
});
