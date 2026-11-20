import { ClipboardPlugin } from "./ClipboardPlugin";
import { copySelection, PlainTextPasteTransform } from "./clipboard.utils";
import { baseTestEnvironment } from "./react-test.utils";
import { act } from "@testing-library/react";
import {
  $createNodeSelection,
  $createTextNode,
  $getRoot,
  $setSelection,
  LexicalEditor,
  COMMAND_PRIORITY_CRITICAL,
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
async function clipboardEnvironment(): Promise<{ editor: LexicalEditor; text: TextNode }> {
  let text: TextNode | undefined;
  const { editor } = await baseTestEnvironment(
    () => {
      text = $createTextNode("In the beginning");
      $getRoot().append($createParaNode("p").append(text));
    },
    <ClipboardPlugin />,
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

/** Stands in the async clipboard the paste shortcuts read, holding `text` as its one flavor. */
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
    },
    permissions: { query: async () => ({ state: "granted" }) },
  });
}

describe("ClipboardPlugin — Paste as Plain Text through a transform", () => {
  const upperCase: PlainTextPasteTransform = (text) => text.toUpperCase();

  /** Mounts the plugin over a clipboard holding a tab and a backslash. `setTransform` swaps the
   * transform on the mounted plugin; `pasted` collects the `text/plain` of each paste the editor
   * is asked to take. */
  async function transformEnvironment(transform?: PlainTextPasteTransform) {
    stubAsyncClipboard("a\tb\\c");
    const handle: { set?: (next: PlainTextPasteTransform | undefined) => void } = {};
    function Controlled() {
      const [current, set] = useState<PlainTextPasteTransform | undefined>(() => transform);
      useEffect(() => {
        handle.set = (next) => set(() => next);
      }, []);
      return <ClipboardPlugin plainTextPasteTransform={current} />;
    }
    const { editor } = await baseTestEnvironment(
      () => {
        $getRoot().append($createParaNode("p").append($createTextNode("In the beginning")));
      },
      <Controlled />,
    );
    const pasted: string[] = [];
    editor.registerCommand(
      PASTE_COMMAND,
      (event) => {
        pasted.push((event as ClipboardEvent).clipboardData?.getData("text/plain") ?? "");
        return true;
      },
      COMMAND_PRIORITY_CRITICAL,
    );
    return {
      editor,
      pasted,
      setTransform: (next: PlainTextPasteTransform | undefined) =>
        act(async () => handle.set?.(next)),
    };
  }

  async function settlePaste(): Promise<void> {
    await act(async () => {
      for (let i = 0; i < 3; i += 1) await new Promise((resolve) => setTimeout(resolve, 0));
    });
  }

  it("Ctrl+Shift+V pastes the transformed text", async () => {
    const { editor, pasted } = await transformEnvironment(upperCase);

    await pressShortcut(editor, "v", true);
    await settlePaste();

    expect(pasted).toEqual(["A B\\C"]);
  });

  it("Ctrl+V is not transformed", async () => {
    const { editor, pasted } = await transformEnvironment(upperCase);

    await pressShortcut(editor, "v");
    await settlePaste();

    expect(pasted).toEqual(["a b\\c"]);
  });

  it("a transform given after mount is used", async () => {
    const { editor, pasted, setTransform } = await transformEnvironment();
    await setTransform(upperCase);

    await pressShortcut(editor, "v", true);
    await settlePaste();

    expect(pasted).toEqual(["A B\\C"]);
  });

  it("without a transform Ctrl+Shift+V pastes the cleaned text unchanged", async () => {
    const { editor, pasted } = await transformEnvironment();

    await pressShortcut(editor, "v", true);
    await settlePaste();

    expect(pasted).toEqual(["a b\\c"]);
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
