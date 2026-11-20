/**
 * Paste as Plain Text in Standard view, where markers are editable text. A copied footnote is USFM
 * on the clipboard; Paste rebuilds it as a footnote, while Paste as Plain Text puts its words in the
 * line. Every way to ask for one (the editor ref, Ctrl+Shift+V, the context menu) pastes the same.
 */
import { editorView, MountedEditor, mountInView } from "./editorViews.test-helpers";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

const FOOTNOTE_USFM = "\\f + \\fr 1:2 \\ft “Yahweh” is God’s proper Name.\\f*";
const PROSE = "1:2 “Yahweh” is God’s proper Name.";

const hostUsj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
    { type: "chapter", marker: "c", number: "1" },
    { type: "para", marker: "p", content: ["Yahweh’s law."] },
  ],
};
const PARA_TEXT: `$.content[${number}].content[${number}]` = "$.content[2].content[0]";
const AFTER_POSSESSIVE = { jsonPath: PARA_TEXT, offset: "Yahweh’s".length };

async function settle(): Promise<void> {
  await act(async () => {
    for (let i = 0; i < 5; i += 1) await new Promise((resolve) => setTimeout(resolve, 0));
  });
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

afterEach(() => {
  vi.unstubAllGlobals();
});

function rootOf(mounted: MountedEditor): HTMLElement {
  const root = mounted.lexical.getRootElement();
  if (!root) throw new Error("no editor root");
  return root;
}

async function mountWithCaret(view = editorView("standard")): Promise<MountedEditor> {
  stubAsyncClipboard(FOOTNOTE_USFM);
  const mounted = await mountInView(hostUsj, view);
  await act(async () => {
    mounted.ref.current?.setSelection({ start: AFTER_POSSESSIVE, end: AFTER_POSSESSIVE });
  });
  return mounted;
}

async function pressCtrlShiftV(mounted: MountedEditor): Promise<void> {
  await act(async () => {
    rootOf(mounted).dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "v",
        ctrlKey: true,
        shiftKey: true,
        bubbles: true,
        cancelable: true,
      }),
    );
  });
  await settle();
}

/** Opens the context menu on the first line and chooses Paste as Plain Text, the way a keyboard
 * user does: it is the fourth built-in option, after Cut, Copy and Paste. */
async function chooseMenuPasteAsPlainText(mounted: MountedEditor): Promise<void> {
  const target = rootOf(mounted).firstElementChild;
  if (!target) throw new Error("no content to right-click");
  await act(async () => {
    target.dispatchEvent(new MouseEvent("contextmenu", { bubbles: true, cancelable: true }));
  });
  for (let step = 0; step < 4; step += 1) {
    await act(async () => {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }));
    });
  }
  await act(async () => {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
  });
  await settle();
}

/** The content of the host paragraph, which is the document after the book and chapter. */
function paraContent(mounted: MountedEditor): MarkerContent[] {
  const para = mounted.ref.current?.getUsj()?.content[2];
  if (!para || typeof para === "string" || para.type !== "para")
    throw new Error("expected the third content entry to be a para");
  return para.content ?? [];
}

function paraText(mounted: MountedEditor): string {
  const content = paraContent(mounted);
  if (!content.every((entry) => typeof entry === "string"))
    throw new Error(`expected only text in the paragraph, got ${JSON.stringify(content)}`);
  return content.join("");
}

const EXPECTED_TEXT = `Yahweh’s${PROSE} law.`;

describe("Paste as Plain Text in Standard view", () => {
  it("pastePlainText puts the footnote's words in the line", async () => {
    const mounted = await mountWithCaret();

    await act(async () => mounted.ref.current?.pastePlainText());
    await settle();

    expect(paraText(mounted)).toBe(EXPECTED_TEXT);
  });

  it("paste still rebuilds the footnote", async () => {
    const mounted = await mountWithCaret();

    await act(async () => mounted.ref.current?.paste());
    await settle();

    const notes = paraContent(mounted).filter(
      (entry) => typeof entry !== "string" && entry.type === "note",
    );
    expect(notes).toHaveLength(1);
    expect(notes[0]).toMatchObject({ type: "note", marker: "f" });
  });

  it("Ctrl+Shift+V pastes the same as pastePlainText", async () => {
    const mounted = await mountWithCaret();

    await pressCtrlShiftV(mounted);

    expect(paraText(mounted)).toBe(EXPECTED_TEXT);
  });

  it("the context menu's Paste as Plain Text pastes the same as pastePlainText", async () => {
    const mounted = await mountWithCaret();

    await chooseMenuPasteAsPlainText(mounted);

    expect(paraText(mounted)).toBe(EXPECTED_TEXT);
  });

  it("one undo restores the pre-paste document", async () => {
    const mounted = await mountWithCaret();
    const before = mounted.ref.current?.getUsj();

    await act(async () => mounted.ref.current?.pastePlainText());
    await settle();
    expect(paraText(mounted)).toBe(EXPECTED_TEXT);
    await act(async () => mounted.ref.current?.undo());
    await settle();

    expect(mounted.ref.current?.getUsj()).toEqual(before);
  });

  it("switching from Formatted to Standard after mount converts", async () => {
    const mounted = await mountWithCaret(editorView("formatted"));
    await mounted.rerenderWithView(editorView("standard"));
    await settle();
    await act(async () => {
      mounted.ref.current?.setSelection({ start: AFTER_POSSESSIVE, end: AFTER_POSSESSIVE });
    });

    await pressCtrlShiftV(mounted);

    expect(paraText(mounted)).toBe(EXPECTED_TEXT);
  });

  // A view with hidden markers refuses a paste holding a backslash (the command menu's gate), so
  // there is nothing to convert and nothing is pasted. This pins that the transform is not what
  // changed that: the document is left as it was.
  it("Formatted view is not converted: the paste gate still refuses the text", async () => {
    const mounted = await mountWithCaret(editorView("formatted"));
    const before = mounted.ref.current?.getUsj();

    await pressCtrlShiftV(mounted);

    expect(mounted.ref.current?.getUsj()).toEqual(before);
  });
});
