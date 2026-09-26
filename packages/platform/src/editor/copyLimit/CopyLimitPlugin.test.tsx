import { CopyLimitPlugin } from "./CopyLimitPlugin";
import usjEditorAdaptor, {
  initialize as initializeSerialize,
  reset,
} from "../adaptors/usj-editor.adaptor";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { baseTestEnvironment } from "../../../../../libs/shared-react/src/plugins/usj/react-test.utils";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { IS_APPLE } from "@lexical/utils";
import {
  $createNodeSelection,
  $createParagraphNode,
  $createTextNode,
  $getNodeByKey,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $setSelection,
  COMMAND_PRIORITY_CRITICAL,
  COPY_COMMAND,
  CUT_COMMAND,
  LexicalEditor,
  SELECT_ALL_COMMAND,
  TextNode,
} from "lexical";
import { useEffect, useState } from "react";
import { $createImmutableVerseNode, getDefaultViewOptions } from "shared-react";

/**
 * A null-payload `COPY_COMMAND` dispatch that this plugin lets through (limit > 0) reaches
 * `@lexical/rich-text`'s own handler, which falls back to `document.execCommand('copy')` when it
 * has no real `ClipboardEvent` to write through — a browser API jsdom does not implement. Stubbing
 * it is enough: the fallback only fires a *second*, real `COPY_COMMAND` dispatch that these tests
 * never send, so the stub is never asked to do more than not throw.
 */
let originalExecCommand: Document["execCommand"];

beforeEach(() => {
  originalExecCommand = document.execCommand;
  document.execCommand = vi.fn();
});

afterEach(() => {
  document.execCommand = originalExecCommand;
});

function copyEvent(target?: EventTarget) {
  const store = new Map<string, string>();
  const setData = vi.fn((type: string, data: string) => {
    store.set(type, data);
  });
  const clipboardData = {
    getData: (type: string) => store.get(type) ?? "",
    setData,
    clearData: () => store.clear(),
  };
  const event = new Event("copy", { bubbles: true, cancelable: true }) as ClipboardEvent;
  Object.defineProperty(event, "clipboardData", { value: clipboardData });
  if (target) Object.defineProperty(event, "target", { value: target });
  return { event, getData: (type: string) => clipboardData.getData(type), setData };
}

async function mount(limit: number | undefined, content = "abcdefghij") {
  let text!: TextNode;
  const { editor } = await baseTestEnvironment(
    () => {
      text = $createTextNode(content);
      $getRoot().append($createParagraphNode().append(text));
    },
    <CopyLimitPlugin limit={limit} />,
  );
  await act(async () => editor.update(() => text.select(0, content.length)));
  return { editor };
}

/**
 * Mounts the plugin with no limit, under a host that can set one later, as an editor whose host
 * loads the limit after the first render does.
 */
async function mountWithLateLimit() {
  let setLimit!: (limit: number | undefined) => void;
  function LateLimitHost() {
    const [limit, setLimitState] = useState<number | undefined>(undefined);
    useEffect(() => {
      setLimit = setLimitState;
    }, []);
    return <CopyLimitPlugin limit={limit} />;
  }
  let text!: TextNode;
  const { editor } = await baseTestEnvironment(
    () => {
      text = $createTextNode("abcdefghij");
      $getRoot().append($createParagraphNode().append(text));
    },
    <LateLimitHost />,
  );
  await act(async () => editor.update(() => text.select(0, 10)));
  return { editor, setLimit };
}

/**
 * A real `ClipboardEvent` (the test setup supplies the class when jsdom lacks it) with a fake
 * `clipboardData`, so `@lexical/rich-text`'s handlers write through it instead of falling back to
 * `document.execCommand`.
 */
function clipboardEvent(type: "copy" | "cut") {
  const store = new Map<string, string>();
  const clipboardData = {
    getData: (format: string) => store.get(format) ?? "",
    setData: vi.fn((format: string, data: string) => {
      store.set(format, data);
    }),
    types: [],
    files: [],
  };
  const event = new ClipboardEvent(type, { bubbles: true, cancelable: true });
  Object.defineProperty(event, "clipboardData", { value: clipboardData });
  return { event, getData: clipboardData.getData, setData: clipboardData.setData };
}

function selectAllKeyDown({ key = "a", code = "KeyA" }: { key?: string; code?: string } = {}) {
  return new KeyboardEvent("keydown", {
    key,
    code,
    ctrlKey: !IS_APPLE,
    metaKey: IS_APPLE,
    bubbles: true,
    cancelable: true,
  });
}

/** Makes the DOM selection cover the given range. */
function selectInDom(setRange: (range: Range) => void) {
  const range = document.createRange();
  setRange(range);
  const domSelection = document.getSelection();
  domSelection?.removeAllRanges();
  domSelection?.addRange(range);
}

/** Selects `root` itself, so the DOM selection covers every character in the editor. */
const selectRootInDom = (root: HTMLElement) => selectInDom((range) => range.selectNode(root));

/** Selects all of `editor` in the page and fires a browser copy from a button outside it. */
function browserCopyOfWholeEditor(editor: LexicalEditor) {
  const root = editor.getRootElement();
  if (!root) throw new Error("editor root not mounted");
  selectRootInDom(root);
  const outside = document.createElement("button");
  document.body.append(outside);
  const copy = copyEvent(outside);
  outside.dispatchEvent(copy.event);
  outside.remove();
  return copy;
}

const rootText = (editor: LexicalEditor) =>
  editor.getEditorState().read(() => $getRoot().getTextContent());

const selectedText = (editor: LexicalEditor) =>
  editor.getEditorState().read(() => {
    const selection = $getSelection();
    return $isRangeSelection(selection) ? selection.getTextContent() : "";
  });

describe("CopyLimitPlugin", () => {
  it("shortens the selection before an over-limit copy, and copies what it keeps", async () => {
    const { editor } = await mount(4);
    const { event, getData } = copyEvent();
    await act(async () => {
      editor.dispatchCommand(COPY_COMMAND, event);
    });
    expect(selectedText(editor)).toBe("abcd");
    expect(getData("text/plain")).toBe("abcd");
  });

  it("gives the same result when the copy is dispatched twice", async () => {
    const { editor } = await mount(4);
    await act(async () => {
      editor.dispatchCommand(COPY_COMMAND, null);
      editor.dispatchCommand(COPY_COMMAND, copyEvent().event);
    });
    expect(selectedText(editor)).toBe("abcd");
  });

  it("copies nothing when the limit is 0", async () => {
    const { editor } = await mount(0);
    const { event, getData } = copyEvent();
    let handled = false;
    await act(async () => {
      handled = editor.dispatchCommand(COPY_COMMAND, event);
    });
    expect(handled).toBe(true);
    expect(event.defaultPrevented).toBe(true);
    expect(getData("text/plain")).toBe("");
  });

  it("swallows Select All", async () => {
    const { editor } = await mount(4);
    let handled = false;
    await act(async () => {
      handled = editor.dispatchCommand(SELECT_ALL_COMMAND, new KeyboardEvent("keydown"));
    });
    expect(handled).toBe(true);
  });

  it("shortens a browser copy that starts outside the editor", async () => {
    const { editor } = await mount(4);
    const root = editor.getRootElement();
    if (!root) throw new Error("editor root not mounted");
    const outside = document.createElement("button");
    document.body.append(outside);
    const domSelection = document.getSelection();
    // `selectAllChildren(root)` puts the range's boundary points INSIDE root, so jsdom's
    // `containsNode(root, true)` — which asks whether root is covered BY the selection, not the
    // other way around — reports false even though every character is selected. Selecting root
    // itself (boundary points in root's parent) keeps the same selected text but is what
    // `containsNode` actually recognizes as covering root, matching browser behavior for a
    // Select-All-from-outside-the-editor gesture.
    const range = document.createRange();
    range.selectNode(root);
    domSelection?.removeAllRanges();
    domSelection?.addRange(range);
    const { event, getData } = copyEvent(outside);
    outside.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
    expect(getData("text/plain")).toBe("abcd");
    outside.remove();
  });

  it("leaves the clipboard untouched for a browser copy outside the editor when the limit is 0", async () => {
    const { editor } = await mount(0);
    const root = editor.getRootElement();
    if (!root) throw new Error("editor root not mounted");
    const outside = document.createElement("button");
    document.body.append(outside);
    const domSelection = document.getSelection();
    const range = document.createRange();
    range.selectNode(root);
    domSelection?.removeAllRanges();
    domSelection?.addRange(range);
    const { event, getData, setData } = copyEvent(outside);
    outside.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
    expect(setData).not.toHaveBeenCalled();
    expect(getData("text/plain")).toBe("");
    outside.remove();
  });

  it("shortens a browser copy that starts in the editor and ends outside it", async () => {
    const { editor } = await mount(4);
    const root = editor.getRootElement();
    if (!root) throw new Error("editor root not mounted");
    const after = document.createElement("p");
    after.textContent = "klmnop";
    document.body.append(after);
    selectInDom((range) => {
      range.setStart(root, 0);
      range.setEnd(after, 1);
    });
    const inside = root.querySelector("p") ?? root;
    // A real `ClipboardEvent`, as the browser sends: the editor then declines the copy because the
    // page selection runs outside it, instead of taking its synthetic-copy fallback.
    const { event, getData } = clipboardEvent("copy");
    inside.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
    expect(getData("text/plain")).toHaveLength(4);
    after.remove();
  });

  it.each([
    [6, 4],
    [4, 6],
  ])(
    "applies the smaller limit when two editors' guards see one copy (limits %i then %i)",
    async (firstLimit, secondLimit) => {
      const first = await mount(firstLimit);
      const second = await mount(secondLimit);
      const firstRoot = first.editor.getRootElement();
      const secondRoot = second.editor.getRootElement();
      if (!firstRoot || !secondRoot) throw new Error("editor root not mounted");
      selectInDom((range) => {
        range.setStartBefore(firstRoot);
        range.setEndAfter(secondRoot);
      });
      const outside = document.createElement("button");
      document.body.append(outside);
      const { event, getData } = copyEvent(outside);
      outside.dispatchEvent(event);
      expect(event.defaultPrevented).toBe(true);
      expect(getData("text/plain")).toBe("abcd");
      outside.remove();
    },
  );

  it("clears text an earlier editor's guard wrote when this guard's limit is 0", async () => {
    const first = await mount(4);
    const second = await mount(0);
    const firstRoot = first.editor.getRootElement();
    const secondRoot = second.editor.getRootElement();
    if (!firstRoot || !secondRoot) throw new Error("editor root not mounted");
    selectInDom((range) => {
      range.setStartBefore(firstRoot);
      range.setEndAfter(secondRoot);
    });
    const outside = document.createElement("button");
    document.body.append(outside);
    const { event, getData } = copyEvent(outside);
    outside.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
    expect(getData("text/plain")).toBe("");
    outside.remove();
  });

  it("leaves copies the editor already handled to the editor", async () => {
    const { editor } = await mount(4);
    const root = editor.getRootElement();
    if (!root) throw new Error("editor root not mounted");
    selectRootInDom(root);
    const { event, setData } = copyEvent(root);
    event.preventDefault();
    document.dispatchEvent(event);
    expect(setData).not.toHaveBeenCalled();
  });

  it("cuts only up to the limit, removing exactly what it copies", async () => {
    const { editor } = await mount(4);
    // The editor declines a cut whose page selection runs outside it; clear any left by earlier
    // tests.
    document.getSelection()?.removeAllRanges();
    const { event, getData } = clipboardEvent("cut");
    await act(async () => {
      editor.dispatchCommand(CUT_COMMAND, event);
    });
    expect(getData("text/plain")).toBe("abcd");
    expect(rootText(editor)).toBe("efghij");
  });

  it("cuts a selection within the limit", async () => {
    const { editor } = await mount(10);
    document.getSelection()?.removeAllRanges();
    const { event, getData } = clipboardEvent("cut");
    await act(async () => {
      editor.dispatchCommand(CUT_COMMAND, event);
    });
    expect(getData("text/plain")).toBe("abcdefghij");
    expect(rootText(editor)).toBe("");
  });

  it("copies the shortened text and removes nothing on a read-only cut over the limit", async () => {
    const { editor } = await mount(4);
    await act(async () => editor.setEditable(false));
    document.getSelection()?.removeAllRanges();
    const { event, getData } = clipboardEvent("cut");
    await act(async () => {
      editor.dispatchCommand(CUT_COMMAND, event);
    });
    expect(getData("text/plain")).toBe("abcd");
    expect(rootText(editor)).toBe("abcdefghij");
  });

  it("cuts nothing when the limit is 0", async () => {
    const { editor } = await mount(0);
    document.getSelection()?.removeAllRanges();
    const { event, setData } = clipboardEvent("cut");
    let handled = false;
    await act(async () => {
      handled = editor.dispatchCommand(CUT_COMMAND, event);
    });
    expect(handled).toBe(true);
    expect(event.defaultPrevented).toBe(true);
    expect(setData).not.toHaveBeenCalled();
    expect(rootText(editor)).toBe("abcdefghij");
  });

  it("blocks the Select All shortcut in a read-only editor", async () => {
    const { editor } = await mount(4);
    await act(async () => editor.setEditable(false));
    const event = selectAllKeyDown();
    document.body.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
  });

  it("allows the Select All shortcut while an input has focus", async () => {
    const { editor } = await mount(4);
    await act(async () => editor.setEditable(false));
    const input = document.createElement("input");
    document.body.append(input);
    input.focus();
    const event = selectAllKeyDown();
    input.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(false);
    input.remove();
  });

  it("blocks the Select All shortcut while a checkbox has focus", async () => {
    const { editor } = await mount(4);
    await act(async () => editor.setEditable(false));
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    document.body.append(checkbox);
    checkbox.focus();
    const event = selectAllKeyDown();
    checkbox.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
    checkbox.remove();
  });

  it("allows the Select All shortcut while a textarea has focus", async () => {
    const { editor } = await mount(4);
    await act(async () => editor.setEditable(false));
    const textarea = document.createElement("textarea");
    document.body.append(textarea);
    textarea.focus();
    const event = selectAllKeyDown();
    textarea.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(false);
    textarea.remove();
  });

  it("allows the Select All shortcut in another editable element, but not in this editor", async () => {
    const { editor } = await mount(4);
    const root = editor.getRootElement();
    if (!root) throw new Error("editor root not mounted");
    // jsdom doesn't implement `isContentEditable`, so both elements declare it explicitly.
    Object.defineProperty(root, "isContentEditable", { configurable: true, value: true });
    const other = document.createElement("div");
    other.contentEditable = "true";
    other.tabIndex = 0;
    Object.defineProperty(other, "isContentEditable", { configurable: true, value: true });
    document.body.append(other);

    other.focus();
    const otherEvent = selectAllKeyDown();
    other.dispatchEvent(otherEvent);
    expect(otherEvent.defaultPrevented).toBe(false);

    // Dispatched on the page rather than on the root, so only the page listener can block it —
    // Lexical's own Select All handling on the root would block it whatever focus says.
    root.focus();
    expect(document.activeElement).toBe(root);
    const rootEvent = selectAllKeyDown();
    document.body.dispatchEvent(rootEvent);
    expect(rootEvent.defaultPrevented).toBe(true);
    other.remove();
  });

  it("cuts no part of a token node the limit would split", async () => {
    let first!: TextNode;
    let last!: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        first = $createTextNode("ab");
        last = $createTextNode("gh");
        $getRoot().append(
          $createParagraphNode().append(first, $createTextNode("cdef").setMode("token"), last),
        );
      },
      <CopyLimitPlugin limit={4} />,
    );
    await act(async () =>
      editor.update(() => {
        const selection = first.select(0, 0);
        selection.focus.set(last.getKey(), 2, "text");
      }),
    );
    document.getSelection()?.removeAllRanges();
    const { event, getData } = clipboardEvent("cut");
    await act(async () => {
      editor.dispatchCommand(CUT_COMMAND, event);
    });
    expect(getData("text/plain")).toBe("ab");
    expect(rootText(editor)).toBe("cdefgh");
  });

  it("blocks a cut when not even the first whole piece of the selection fits", async () => {
    let token!: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        token = $createTextNode("cdef").setMode("token");
        $getRoot().append($createParagraphNode().append(token, $createTextNode("gh")));
      },
      <CopyLimitPlugin limit={2} />,
    );
    await act(async () => editor.update(() => token.select(0, 4)));
    document.getSelection()?.removeAllRanges();
    const { event, setData } = clipboardEvent("cut");
    let handled = false;
    await act(async () => {
      handled = editor.dispatchCommand(CUT_COMMAND, event);
    });
    expect(handled).toBe(true);
    expect(event.defaultPrevented).toBe(true);
    expect(setData).not.toHaveBeenCalled();
    expect(rootText(editor)).toBe("cdefgh");
  });

  it("writes only the limited plain text for a copy no view-specific handler claims", async () => {
    // A Formatted-view footnote: its caller shows no characters, but Lexical's own export would
    // carry the whole note in the HTML and internal flavors.
    initializeSerialize(undefined, undefined);
    reset();
    const usj = {
      type: "USJ",
      version: "3.1",
      content: [
        {
          type: "para",
          marker: "p",
          content: [
            "abcdefghij",
            {
              type: "note",
              marker: "f",
              caller: "+",
              content: [{ type: "char", marker: "ft", content: ["Secret note text."] }],
            },
            " klm",
          ],
        },
      ],
    } as unknown as Usj;
    const state = usjEditorAdaptor.serializeEditorState(usj, getDefaultViewOptions());
    const { editor } = await baseTestEnvironment(
      JSON.stringify({ root: state.root }),
      <CopyLimitPlugin limit={12} />,
    );
    await act(async () =>
      editor.update(() => {
        const root = $getRoot();
        root.select(0, root.getChildrenSize());
      }),
    );
    document.getSelection()?.removeAllRanges();
    const { event, getData } = clipboardEvent("copy");
    await act(async () => {
      editor.dispatchCommand(COPY_COMMAND, event);
    });
    expect(event.defaultPrevented).toBe(true);
    expect(getData("text/plain").length).toBeLessThanOrEqual(12);
    expect(getData("text/html")).not.toContain("Secret");
    expect(getData("application/x-lexical-editor")).toBe("");
  });

  it("blocks the Select All shortcut on a keyboard layout whose A key types another letter", async () => {
    const { editor } = await mount(4);
    await act(async () => editor.setEditable(false));
    const event = selectAllKeyDown({ key: "ф" });
    document.body.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
  });

  it("leaves the clipboard untouched when one editor's limit is 0 and its guard runs first", async () => {
    const first = await mount(0);
    const second = await mount(4);
    const firstRoot = first.editor.getRootElement();
    const secondRoot = second.editor.getRootElement();
    if (!firstRoot || !secondRoot) throw new Error("editor root not mounted");
    selectInDom((range) => {
      range.setStartBefore(firstRoot);
      range.setEndAfter(secondRoot);
    });
    const outside = document.createElement("button");
    document.body.append(outside);
    const { event, setData } = copyEvent(outside);
    outside.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
    expect(setData).not.toHaveBeenCalled();
    outside.remove();
  });

  it("does not end a browser copy inside a character outside the Basic Multilingual Plane", async () => {
    const { editor } = await mount(3, `ab${String.fromCodePoint(0x1f600)}cd`);
    const { getData } = browserCopyOfWholeEditor(editor);
    expect(getData("text/plain")).toBe("ab");
  });

  it("treats a NaN limit as 0 for a browser copy", async () => {
    const { editor } = await mount(Number.NaN);
    const { event, setData } = browserCopyOfWholeEditor(editor);
    expect(event.defaultPrevented).toBe(true);
    expect(setData).not.toHaveBeenCalled();
  });

  it("rounds a fractional limit down to a whole character", async () => {
    const { editor } = await mount(3.5);
    // Read the selection inside the copy, as the handlers that write the clipboard see it: once
    // the update commits, the editor re-reads the selection from the page, which rounds on its own.
    let focusOffset: number | undefined;
    const unregister = editor.registerCommand(
      COPY_COMMAND,
      () => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) focusOffset = selection.focus.offset;
        return true;
      },
      COMMAND_PRIORITY_CRITICAL,
    );
    await act(async () => {
      editor.dispatchCommand(COPY_COMMAND, copyEvent().event);
    });
    unregister();
    expect(focusOffset).toBe(3);
  });

  it("copies no part of a token node the limit would split", async () => {
    let first!: TextNode;
    let last!: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        first = $createTextNode("ab");
        last = $createTextNode("gh");
        $getRoot().append(
          $createParagraphNode().append(first, $createTextNode("cdef").setMode("token"), last),
        );
      },
      <CopyLimitPlugin limit={4} />,
    );
    await act(async () =>
      editor.update(() => {
        const selection = first.select(0, 0);
        selection.focus.set(last.getKey(), 2, "text");
      }),
    );
    const { event, getData } = copyEvent();
    await act(async () => {
      editor.dispatchCommand(COPY_COMMAND, event);
    });
    expect(selectedText(editor)).toBe("ab");
    expect(getData("text/plain")).toBe("ab");
  });

  it("keeps a letter with its marks in both the selection and the copy", async () => {
    // Bet (U+05D1) followed by its dagesh (U+05BC): a limit of 3 falls between them.
    const { editor } = await mount(3, "\u05D0\u05B4\u05D1\u05BC");
    const { event, getData } = copyEvent();
    await act(async () => {
      editor.dispatchCommand(COPY_COMMAND, event);
    });
    expect(selectedText(editor)).toBe("\u05D0\u05B4");
    expect(getData("text/plain")).toBe(selectedText(editor));
  });

  describe("with no limit", () => {
    it("copies the whole selection", async () => {
      const { editor } = await mount(undefined);
      await act(async () => {
        editor.dispatchCommand(COPY_COMMAND, copyEvent().event);
      });
      expect(selectedText(editor)).toBe("abcdefghij");
    });

    it("leaves Select All to the editor", async () => {
      const { editor } = await mount(undefined);
      await act(async () =>
        editor.update(() => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) selection.focus.set(selection.anchor.key, 2, "text");
        }),
      );
      await act(async () => {
        editor.dispatchCommand(SELECT_ALL_COMMAND, new KeyboardEvent("keydown"));
      });
      expect(selectedText(editor)).toBe("abcdefghij");
    });

    it("allows the Select All shortcut in a read-only editor", async () => {
      const { editor } = await mount(undefined);
      await act(async () => editor.setEditable(false));
      const event = selectAllKeyDown();
      document.body.dispatchEvent(event);
      expect(event.defaultPrevented).toBe(false);
    });

    it("leaves a browser copy to the browser", async () => {
      const { editor } = await mount(undefined);
      const { event, setData } = browserCopyOfWholeEditor(editor);
      expect(event.defaultPrevented).toBe(false);
      expect(setData).not.toHaveBeenCalled();
    });
  });

  it("shortens a cut before other cut handlers see it when the limit arrives after mount", async () => {
    const { editor, setLimit } = await mountWithLateLimit();
    // Another plugin's handler at the same priority, registered after this plugin mounted.
    let textSeenByOtherHandler: string | undefined;
    const unregister = editor.registerCommand(
      CUT_COMMAND,
      () => {
        const selection = $getSelection();
        textSeenByOtherHandler = $isRangeSelection(selection) ? selection.getTextContent() : "";
        return true;
      },
      COMMAND_PRIORITY_CRITICAL,
    );
    await act(async () => setLimit(4));
    await act(async () => {
      editor.dispatchCommand(CUT_COMMAND, clipboardEvent("cut").event);
    });
    unregister();
    expect(textSeenByOtherHandler).toBe("abcd");
  });

  it("adds no page listeners until a limit is set, then blocks the Select All shortcut", async () => {
    const addListener = vi.spyOn(document, "addEventListener");
    const pageListenerCalls = () =>
      addListener.mock.calls.filter(([type]) => type === "copy" || type === "keydown");
    const { editor, setLimit } = await mountWithLateLimit();
    expect(pageListenerCalls()).toEqual([]);

    await act(async () => setLimit(4));
    await act(async () => editor.setEditable(false));
    const event = selectAllKeyDown();
    document.body.dispatchEvent(event);
    addListener.mockRestore();
    expect(event.defaultPrevented).toBe(true);
  });

  it("stops listening to the page when the limit is removed", async () => {
    const { editor, setLimit } = await mountWithLateLimit();
    await act(async () => setLimit(4));
    await act(async () => setLimit(undefined));
    await act(async () => editor.setEditable(false));
    const event = selectAllKeyDown();
    document.body.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(false);
  });

  it("leaves the clipboard alone for a copy with only a caret in the editor", async () => {
    // jsdom's `containsNode(node, true)` is false for a caret inside `node`; browsers answer by
    // overlap, which is true.
    const containsNode = vi.spyOn(Selection.prototype, "containsNode").mockReturnValue(true);
    const { editor } = await mount(4);
    const textElement = editor.getRootElement()?.querySelector("span")?.firstChild;
    if (!textElement) throw new Error("editor text not rendered");
    selectInDom((range) => {
      range.setStart(textElement, 2);
      range.setEnd(textElement, 2);
    });
    const outside = document.createElement("button");
    document.body.append(outside);
    const { event, setData } = copyEvent(outside);
    outside.dispatchEvent(event);
    outside.remove();
    containsNode.mockRestore();
    expect(event.defaultPrevented).toBe(false);
    expect(setData).not.toHaveBeenCalled();
  });

  it("claims a browser copy whose selection covers no text but writes nothing", async () => {
    const containsNode = vi.spyOn(Selection.prototype, "containsNode").mockReturnValue(true);
    await mount(4);
    const empty = document.createElement("div");
    document.body.append(empty);
    selectInDom((range) => range.selectNode(empty));
    const outside = document.createElement("button");
    document.body.append(outside);
    const { event, setData } = copyEvent(outside);
    outside.dispatchEvent(event);
    outside.remove();
    empty.remove();
    containsNode.mockRestore();
    expect(event.defaultPrevented).toBe(true);
    expect(setData).not.toHaveBeenCalled();
  });

  it("does not end a browser copy between a letter and its marks", async () => {
    // Bet (U+05D1) followed by its dagesh (U+05BC): a limit of 3 falls between them.
    const { editor } = await mount(3, "\u05D0\u05B4\u05D1\u05BC");
    const { getData } = browserCopyOfWholeEditor(editor);
    expect(getData("text/plain")).toBe("\u05D0\u05B4");
  });

  it("removes a selected verse marker, which has no text, on a limited cut", async () => {
    let verseKey!: string;
    const { editor } = await baseTestEnvironment(
      () => {
        const verse = $createImmutableVerseNode("2");
        verseKey = verse.getKey();
        $getRoot().append(
          $createParagraphNode().append($createTextNode("ab"), verse, $createTextNode("cd")),
        );
      },
      <CopyLimitPlugin limit={4} />,
    );
    await act(async () =>
      editor.update(() => {
        const selection = $createNodeSelection();
        selection.add(verseKey);
        $setSelection(selection);
      }),
    );
    document.getSelection()?.removeAllRanges();
    const { event, setData } = clipboardEvent("cut");
    await act(async () => {
      editor.dispatchCommand(CUT_COMMAND, event);
    });
    expect(setData).not.toHaveBeenCalled();
    expect(editor.getEditorState().read(() => $getNodeByKey(verseKey))).toBeNull();
  });

  it.each([
    ["removes a selected node that fits whole", 10, "abcdefghij", ""],
    ["cuts nothing when a selected node does not fit whole", 4, "", "abcdefghij"],
  ])("%s", async (_label, limit, clipboard, remaining) => {
    const { editor } = await mount(limit);
    await act(async () =>
      editor.update(() => {
        const selection = $createNodeSelection();
        selection.add($getRoot().getAllTextNodes()[0].getKey());
        $setSelection(selection);
      }),
    );
    document.getSelection()?.removeAllRanges();
    const { event, getData, setData } = clipboardEvent("cut");
    await act(async () => {
      editor.dispatchCommand(CUT_COMMAND, event);
    });
    expect(getData("text/plain")).toBe(clipboard);
    if (!clipboard) expect(setData).not.toHaveBeenCalled();
    expect(rootText(editor)).toBe(remaining);
  });

  it.each([
    [10, "abcdefghij"],
    [4, ""],
  ])(
    "copies a selected node whole as plain text only, or nothing (limit %i)",
    async (limit, expected) => {
      const { editor } = await mount(limit);
      await act(async () =>
        editor.update(() => {
          const selection = $createNodeSelection();
          const text = $getRoot().getAllTextNodes()[0];
          selection.add(text.getKey());
          $setSelection(selection);
        }),
      );
      document.getSelection()?.removeAllRanges();
      const { event, getData } = clipboardEvent("copy");
      await act(async () => {
        editor.dispatchCommand(COPY_COMMAND, event);
      });
      expect(event.defaultPrevented).toBe(true);
      expect(getData("text/plain")).toBe(expected);
      expect(getData("text/html")).toBe("");
      expect(getData("application/x-lexical-editor")).toBe("");
    },
  );
});
