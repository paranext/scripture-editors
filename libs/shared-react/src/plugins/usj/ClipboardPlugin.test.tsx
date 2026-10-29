import { ClipboardPlugin } from "./ClipboardPlugin";
import { copySelection, pasteNatively } from "./clipboard.utils";
import { baseTestEnvironment, settle } from "./react-test.utils";
import { act } from "@testing-library/react";
import {
  $createNodeSelection,
  $createTextNode,
  $getRoot,
  $setSelection,
  LexicalEditor,
  PASTE_COMMAND,
  TextNode,
} from "lexical";
import { useEffect, useState } from "react";
import {
  $createCharNode,
  $createImmutableTypedTextNode,
  $createNoteNode,
  $createParaNode,
  ParaNode,
} from "shared";

/**
 * `document.execCommand("copy")` is how a clipboard write reaches the browser when there is no real
 * clipboard event to fill in: `@lexical/clipboard` points the DOM selection at a hidden placeholder
 * element it appends to the editor and runs it to provoke one. jsdom implements no `execCommand` at
 * all, so these tests install a spy in its place — **called means a write reached the browser, not
 * called means the clipboard is untouched**. That is the observable throughout; the placeholder's
 * own content belongs to `@lexical/clipboard` and is never asserted on here.
 */
let execCommand: ReturnType<typeof vi.fn>;

beforeEach(() => {
  execCommand = vi.fn(() => true);
  Object.defineProperty(document, "execCommand", {
    configurable: true,
    writable: true,
    value: execCommand,
  });
  // `pasteSelection`/`pasteSelectionAsPlainText` read the async clipboard API, which jsdom also
  // does not implement. A read that never settles is enough for these tests: they assert only that
  // the paste keys still reach it, not what a paste does with what it finds.
  vi.stubGlobal("navigator", {
    ...navigator,
    clipboard: { read: vi.fn(() => new Promise(() => undefined)) },
  });
});

afterEach(async () => {
  // `@lexical/clipboard` keeps a MODULE-level timer handle while it waits for the clipboard event
  // its `execCommand` call should provoke, and refuses to start another copy until that handle
  // clears. A test that reaches the real copy path therefore silences the `execCommand` assertion
  // in the NEXT test unless the window is drained here — which would make a failure show up only in
  // whichever test happens to run first. The window is `EVENT_LATENCY`, 50ms.
  await new Promise((resolve) => setTimeout(resolve, 60));
  Reflect.deleteProperty(document, "execCommand");
  vi.unstubAllGlobals();
});

/** An editor holding one paragraph of text, with the clipboard key handling under test mounted. */
async function clipboardEnvironment(
  requestNativePaste?: () => Promise<boolean>,
): Promise<{ editor: LexicalEditor; text: TextNode }> {
  let text: TextNode | undefined;
  const { editor } = await baseTestEnvironment(
    () => {
      text = $createTextNode("In the beginning");
      $getRoot().append($createParaNode("p").append(text));
    },
    <ClipboardPlugin requestNativePaste={requestNativePaste} />,
  );
  if (!text) throw new Error("expected the initial text node to exist");
  return { editor, text };
}

/** Presses a clipboard shortcut on the editor's root element, where the plugin listens. */
async function pressShortcut(
  editor: LexicalEditor,
  key: string,
  shiftKey = false,
): Promise<KeyboardEvent> {
  const rootElement = editor.getRootElement();
  if (!rootElement) throw new Error("editor has no root element to press a key on");
  const event = new KeyboardEvent("keydown", {
    key,
    ctrlKey: true,
    shiftKey,
    bubbles: true,
    cancelable: true,
  });
  await act(async () => {
    rootElement.dispatchEvent(event);
  });
  return event;
}

describe("ClipboardPlugin — copy/cut with nothing selected", () => {
  it("leaves the clipboard untouched on Ctrl+C at a collapsed caret", async () => {
    const { editor, text } = await clipboardEnvironment();
    await act(async () => editor.update(() => text.select(3, 3)));

    await pressShortcut(editor, "c");

    expect(execCommand).not.toHaveBeenCalled();
  });

  it("leaves the clipboard untouched on Ctrl+X at a collapsed caret, and removes nothing", async () => {
    const { editor, text } = await clipboardEnvironment();
    await act(async () => editor.update(() => text.select(3, 3)));

    await pressShortcut(editor, "x");

    expect(execCommand).not.toHaveBeenCalled();
    editor.getEditorState().read(() => expect(text.getTextContent()).toBe("In the beginning"));
  });
});

describe("ClipboardPlugin — copy/cut with a selection", () => {
  it("copies on Ctrl+C", async () => {
    const { editor, text } = await clipboardEnvironment();
    await act(async () => editor.update(() => text.select(0, text.getTextContentSize())));

    await pressShortcut(editor, "c");

    expect(execCommand).toHaveBeenCalledWith("copy");
  });

  it("cuts on Ctrl+X", async () => {
    const { editor, text } = await clipboardEnvironment();
    await act(async () => editor.update(() => text.select(0, text.getTextContentSize())));

    await pressShortcut(editor, "x");

    expect(execCommand).toHaveBeenCalledWith("copy");
  });

  it("copies a node selection — the guard is about having nothing to copy, not about ranges", async () => {
    // A node selection covers real content and is not collapsed, so it copies like any other. The
    // guard tests "is there anything here", NOT "is this a range": narrowing it to range selections
    // would silently swallow this copy.
    const { editor } = await clipboardEnvironment();
    await act(async () =>
      editor.update(() => {
        const decorator = $createImmutableTypedTextNode("marker", "\\p");
        $getRoot().getFirstChild()?.insertBefore?.($createParaNode("p").append(decorator));
        const nodeSelection = $createNodeSelection();
        nodeSelection.add(decorator.getKey());
        $setSelection(nodeSelection);
      }),
    );

    await pressShortcut(editor, "c");

    expect(execCommand).toHaveBeenCalledWith("copy");
  });
});

describe("ClipboardPlugin — the guard reads the live selection, not the committed one", () => {
  // Lexical commits on a microtask, so the last COMMITTED selection lags a selection made earlier
  // in the same synchronous tick. A guard that read the committed state would see "nothing
  // selected" here and silently copy nothing — and this is the ordinary shape of the public
  // `EditorRef.copy()` path: select something programmatically, then copy it.
  it("copies a selection made earlier in the same synchronous tick", async () => {
    const { editor, text } = await clipboardEnvironment();

    await act(async () => {
      editor.update(() => text.select(0, text.getTextContentSize()));
      copySelection(editor);
    });

    expect(execCommand).toHaveBeenCalledWith("copy");
  });

  it("copies a selection made inside the same editor.update() as the copy call", async () => {
    const { editor, text } = await clipboardEnvironment();

    await act(async () =>
      editor.update(() => {
        text.select(0, text.getTextContentSize());
        copySelection(editor);
      }),
    );

    expect(execCommand).toHaveBeenCalledWith("copy");
  });
});

describe("ClipboardPlugin — paste keys are unaffected", () => {
  it("claims Ctrl+V and Ctrl+Shift+V regardless of the selection", async () => {
    const { editor, text } = await clipboardEnvironment();
    await act(async () => editor.update(() => text.select(3, 3)));

    // A collapsed caret is exactly where a paste belongs, so the empty-selection rule copy and cut
    // now follow must not reach these.
    expect((await pressShortcut(editor, "v")).defaultPrevented).toBe(true);
    expect((await pressShortcut(editor, "v", true)).defaultPrevented).toBe(true);
  });
});

/** The async clipboard read `pasteSelection`/`pasteSelectionAsPlainText` start with. */
function clipboardRead() {
  return vi.mocked(navigator.clipboard.read);
}

describe("ClipboardPlugin — the host's native paste", () => {
  it("asks the host to paste on Ctrl+V, reading no clipboard itself when the host pastes", async () => {
    const requestNativePaste = vi.fn(() => Promise.resolve(true));
    const { editor, text } = await clipboardEnvironment(requestNativePaste);
    await act(async () => editor.update(() => text.select(3, 3)));

    const event = await pressShortcut(editor, "v");
    await settle();

    // The keystroke stays claimed, so the browser's own paste never runs alongside the host's.
    expect(event.defaultPrevented).toBe(true);
    expect(requestNativePaste).toHaveBeenCalledTimes(1);
    expect(clipboardRead()).not.toHaveBeenCalled();
  });

  it("asks with focus in the editor, where the native paste lands", async () => {
    let focusedWhenAsked: Element | null = null;
    const requestNativePaste = vi.fn(() => {
      focusedWhenAsked = document.activeElement;
      return Promise.resolve(true);
    });
    const { editor, text } = await clipboardEnvironment(requestNativePaste);
    await act(async () => editor.update(() => text.select(3, 3)));

    await pressShortcut(editor, "v");

    expect(focusedWhenAsked).toBe(editor.getRootElement());
  });

  it("asks outside any editor update, once the refocus has committed", async () => {
    let updatingWhenAsked: boolean | undefined;
    let hadFocusWhenAsked: boolean | undefined;
    const { editor, text } = await clipboardEnvironment(() => {
      updatingWhenAsked = editor._updating;
      hadFocusWhenAsked = document.hasFocus();
      return Promise.resolve(true);
    });
    await act(async () => editor.update(() => text.select(3, 3)));

    await pressShortcut(editor, "v");

    expect(updatingWhenAsked).toBe(false);
    expect(hadFocusWhenAsked).toBe(true);
  });

  it("reads the clipboard itself when the host's callback throws", async () => {
    const requestNativePaste = vi.fn((): Promise<boolean> => {
      throw new Error("host unavailable");
    });
    const { editor, text } = await clipboardEnvironment(requestNativePaste);
    await act(async () => editor.update(() => text.select(3, 3)));

    await pressShortcut(editor, "v");
    await settle();

    expect(requestNativePaste).toHaveBeenCalledTimes(1);
    expect(clipboardRead()).toHaveBeenCalledTimes(1);
  });

  it("reads the clipboard itself when the host declines the paste", async () => {
    const requestNativePaste = vi.fn(() => Promise.resolve(false));
    const { editor, text } = await clipboardEnvironment(requestNativePaste);
    await act(async () => editor.update(() => text.select(3, 3)));

    await pressShortcut(editor, "v");
    await settle();

    expect(requestNativePaste).toHaveBeenCalledTimes(1);
    expect(clipboardRead()).toHaveBeenCalledTimes(1);
  });

  it("reads the clipboard itself when the host's paste request fails", async () => {
    const requestNativePaste = vi.fn(() => Promise.reject(new Error("host unavailable")));
    const { editor, text } = await clipboardEnvironment(requestNativePaste);
    await act(async () => editor.update(() => text.select(3, 3)));

    await pressShortcut(editor, "v");
    await settle();

    expect(clipboardRead()).toHaveBeenCalledTimes(1);
  });

  it("pastes as plain text on Ctrl+Shift+V without asking the host", async () => {
    const requestNativePaste = vi.fn(() => Promise.resolve(true));
    const { editor, text } = await clipboardEnvironment(requestNativePaste);
    await act(async () => editor.update(() => text.select(3, 3)));

    const event = await pressShortcut(editor, "v", true);
    await settle();

    expect(event.defaultPrevented).toBe(true);
    expect(requestNativePaste).not.toHaveBeenCalled();
    expect(clipboardRead()).toHaveBeenCalledTimes(1);
  });

  it("reads the clipboard itself on Ctrl+V when the host offers no native paste", async () => {
    const { editor, text } = await clipboardEnvironment();
    await act(async () => editor.update(() => text.select(3, 3)));

    const event = await pressShortcut(editor, "v");
    await settle();

    expect(event.defaultPrevented).toBe(true);
    expect(clipboardRead()).toHaveBeenCalledTimes(1);
  });

  it("asks through the latest callback the host handed over, keeping its guards registered once", async () => {
    const first = vi.fn(() => Promise.resolve(true));
    const second = vi.fn(() => Promise.resolve(true));
    let setCallback: ((callback: () => Promise<boolean>) => void) | undefined;
    function Host() {
      const [callback, setState] = useState<() => Promise<boolean>>(() => first);
      useEffect(() => {
        setCallback = (next) => setState(() => next);
      }, []);
      return <ClipboardPlugin requestNativePaste={callback} />;
    }
    const { editor } = await baseTestEnvironment(
      () => {
        $getRoot().append($createParaNode("p").append($createTextNode("In the beginning")));
      },
      <Host />,
    );
    const registerCommand = vi.spyOn(editor, "registerCommand");

    await act(async () => setCallback?.(second));
    await pressShortcut(editor, "v");

    expect(second).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
    expect(registerCommand).not.toHaveBeenCalled();
  });

  it("takes no paste in a read-only editor, so the host is never asked", async () => {
    const requestNativePaste = vi.fn(() => Promise.resolve(true));
    const { editor, text } = await clipboardEnvironment(requestNativePaste);
    await act(async () => editor.update(() => text.select(3, 3)));
    await act(async () => editor.setEditable(false));

    await pressShortcut(editor, "v");
    await settle();

    expect(requestNativePaste).not.toHaveBeenCalled();
    expect(clipboardRead()).not.toHaveBeenCalled();
  });
});

describe("pasteNatively — waiting for focus to come back", () => {
  /** Something outside the editor that takes focus the way a menu returning it to a trigger does. */
  function outsideButton(): HTMLButtonElement {
    const button = document.createElement("button");
    document.body.append(button);
    return button;
  }

  it("asks the host only once focus is back in the editor", async () => {
    const requestNativePaste = vi.fn(() => Promise.resolve(true));
    const { editor, text } = await clipboardEnvironment();
    await act(async () => editor.update(() => text.select(3, 3)));
    const rootElement = editor.getRootElement();
    if (!rootElement) throw new Error("editor has no root element");
    const button = outsideButton();
    // The refocus is undone straight away, as a closing menu's focus return would undo it.
    vi.spyOn(rootElement, "focus").mockImplementation(() => button.focus());
    button.focus();

    await act(async () => pasteNatively(editor, requestNativePaste));
    await settle();
    expect(requestNativePaste).not.toHaveBeenCalled();

    await act(async () => HTMLElement.prototype.focus.call(rootElement));
    expect(requestNativePaste).toHaveBeenCalledTimes(1);
    expect(clipboardRead()).not.toHaveBeenCalled();
    button.remove();
  });

  it("reads the clipboard itself when focus does not come back in time, and never asks the host", async () => {
    const requestNativePaste = vi.fn(() => Promise.resolve(true));
    const { editor, text } = await clipboardEnvironment();
    await act(async () => editor.update(() => text.select(3, 3)));
    const rootElement = editor.getRootElement();
    if (!rootElement) throw new Error("editor has no root element");
    const button = outsideButton();
    vi.spyOn(rootElement, "focus").mockImplementation(() => button.focus());
    button.focus();

    vi.useFakeTimers({ toFake: ["setTimeout", "clearTimeout"] });
    try {
      await act(async () => pasteNatively(editor, requestNativePaste));
      expect(clipboardRead()).not.toHaveBeenCalled();
      await act(async () => vi.advanceTimersByTime(500));
    } finally {
      vi.useRealTimers();
    }
    expect(clipboardRead()).toHaveBeenCalledTimes(1);

    // A focus return after the fallback ran does not paste a second time.
    await act(async () => HTMLElement.prototype.focus.call(rootElement));
    expect(requestNativePaste).not.toHaveBeenCalled();
    button.remove();
  });
});

describe("ClipboardPlugin — text pasted inside a char span or note stays there", () => {
  /** A paste event carrying `payload`, shaped the way `@lexical/rich-text`'s handler reads one. */
  function pasteEventWith(payload: { [type: string]: string }): ClipboardEvent {
    const event = new ClipboardEvent("paste", { bubbles: true, cancelable: true });
    Object.defineProperty(event, "clipboardData", {
      value: {
        types: Object.keys(payload),
        files: [],
        getData: (type: string) => payload[type] ?? "",
      },
    });
    return event;
  }

  /** `Before ` + `\nd Lord\nd*` + ` after`, or that span inside a footnote. */
  async function spanEnvironment(inNote: boolean): Promise<{
    editor: LexicalEditor;
    spanText: TextNode;
  }> {
    let spanText: TextNode | undefined;
    const { editor } = await baseTestEnvironment(
      () => {
        spanText = $createTextNode("Lord");
        const span = $createCharNode("nd");
        $getRoot().append(
          $createParaNode("p").append(
            $createTextNode("Before "),
            inNote
              ? $createNoteNode("f", "+").append(span.append(spanText))
              : span.append(spanText),
            $createTextNode(" after"),
          ),
        );
      },
      <ClipboardPlugin />,
    );
    if (!spanText) throw new Error("expected the span's text node to exist");
    return { editor, spanText };
  }

  /** A paste of the text `XY` in `flavor`. Ctrl+V delivers html: `navigator.clipboard.read()`
   * exposes no private flavor. */
  function payloadOf(
    flavor: "internal" | "html",
    editor: LexicalEditor,
  ): { [type: string]: string } {
    if (flavor === "html")
      return { "text/html": '<span style="white-space: pre-wrap;">XY</span>', "text/plain": "XY" };
    return {
      "application/x-lexical-editor": JSON.stringify({
        namespace: editor._config.namespace,
        nodes: [serializedTextNode("XY")],
      }),
      "text/plain": "XY",
    };
  }

  for (const inNote of [false, true])
    for (const flavor of ["internal", "html"] as const)
      it(`keeps ${flavor}-flavor text in the span it is pasted into${inNote ? ", inside a note" : ""}`, async () => {
        const { editor, spanText } = await spanEnvironment(inNote);
        await act(async () => editor.update(() => spanText.select(2, 2)));

        await act(async () => {
          editor.dispatchCommand(PASTE_COMMAND, pasteEventWith(payloadOf(flavor, editor)));
        });

        editor.getEditorState().read(() => {
          const para = $getRoot().getFirstChildOrThrow<ParaNode>();
          const texts = para.getAllTextNodes().map((node) => node.getTextContent());
          expect(texts).toEqual(["Before ", "LoXYrd", " after"]);
          expect(spanText.getLatest().getTextContent()).toBe("LoXYrd");
        });
      });
});

/** A serialized plain text node holding `text`. */
function serializedTextNode(text: string) {
  return {
    detail: 0,
    format: 0,
    mode: "normal",
    style: "",
    text,
    type: "text",
    version: 1,
  };
}
