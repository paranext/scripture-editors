/**
 * A host's "copy this note" button (the footnote editor's Copy button) copies through the editor's
 * own copy, not the display: it selects the whole note, calls `EditorRef.copy()`, and puts the
 * user's selection back with `EditorRef.setSelection()`. These pin that the sequence writes the
 * USFM a Ctrl+C of the note writes — no display NBSP, a stored NBSP spelled the project's way, the
 * copy limit applied — and leaves the document, the selection and any pending marker edit as they
 * were.
 */
import { editorView, mountInView, MountedEditor } from "./editorViews.test-helpers";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot } from "lexical";
import { getPendedDisplayOwners, NBSP, NBSP_STAND_IN } from "shared";
import { SelectionRange } from "shared-react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

/** What `execCommand("copy")` hands the page: a copy event whose data lands in `store`. jsdom has
 * neither `ClipboardEvent` nor `execCommand`. */
class StubClipboardEvent extends Event {
  readonly clipboardData: DataTransfer;
  constructor(type: string, store: Map<string, string>) {
    super(type, { bubbles: true, cancelable: true });
    this.clipboardData = {
      setData: (format: string, data: string) => store.set(format, data),
      getData: (format: string) => store.get(format) ?? "",
    } as unknown as DataTransfer;
  }
}

let clipboard = new Map<string, string>();

beforeEach(() => {
  clipboard = new Map();
  vi.stubGlobal("ClipboardEvent", StubClipboardEvent);
  Object.defineProperty(document, "execCommand", {
    configurable: true,
    writable: true,
    value: (command: string) => {
      if (command !== "copy") return false;
      const target = document.getSelection()?.anchorNode?.parentElement ?? document.body;
      target.dispatchEvent(new StubClipboardEvent("copy", clipboard));
      return true;
    },
  });
});

afterEach(() => {
  vi.unstubAllGlobals();
  Reflect.deleteProperty(document, "execCommand");
});

/** `\f + \fr 1:1 \ft see<NBSP>x \+nd L\+nd*<NBSP>z  w\f*`: a stored no-break space beside text
 * and beside a closing marker, a run of two spaces, and a marker's separator after each opener. */
function noteUsj({ isClosed = true, hasTail = false } = {}): Usj {
  const note: MarkerObject & { closed?: string } = {
    type: "note",
    marker: "f",
    caller: "+",
    ...(isClosed ? {} : { closed: "false" }),
    content: [
      { type: "char", marker: "fr", content: ["1:1 "] },
      {
        type: "char",
        marker: "ft",
        content: [`see${NBSP}x `, { type: "char", marker: "nd", content: ["L"] }, `${NBSP}z  w`],
      },
    ],
  };
  return {
    type: "USJ",
    version: "3.1",
    content: [{ type: "para", marker: "p", content: hasTail ? [note, "tail"] : [note] }],
  };
}

/** The whole note at `$.content[0].content[0]`: from in front of `\f` to just past `\f*`. */
const WHOLE_NOTE: SelectionRange = {
  start: { jsonPath: "$.content[0].content[0]" },
  end: { jsonPath: "$.content[0].content[0]", closingMarkerOffset: "\\f*".length },
};

/** Two characters of the `\ft` run's first text, `ee`. */
const RANGE_IN_NOTE: SelectionRange = {
  start: { jsonPath: "$.content[0].content[0].content[1].content[0]", offset: 1 },
  end: { jsonPath: "$.content[0].content[0].content[1].content[0]", offset: 3 },
};

async function mountNote(
  allowInvisibleCharacters: boolean,
  { copyLimit, usj = noteUsj() }: { copyLimit?: number; usj?: Usj } = {},
) {
  const onUsjChange = vi.fn();
  const mounted = await mountInView(
    usj,
    { ...editorView("footnotes-pane-row"), allowInvisibleCharacters },
    { onUsjChange, copyLimit },
  );
  return { ...mounted, onUsjChange };
}

/** The host's Copy button: select the note, copy it, put the selection back — in one handler. */
async function copyWholeNote(mounted: MountedEditor): Promise<void> {
  await act(async () => {
    const ref = mounted.ref.current;
    const selectionBefore = ref?.getSelection();
    ref?.setSelection(WHOLE_NOTE);
    ref?.copy();
    if (selectionBefore) ref?.setSelection(selectionBefore);
  });
}

async function select(mounted: MountedEditor, selection: SelectionRange): Promise<void> {
  await act(async () => mounted.ref.current?.setSelection(selection));
}

describe.each([
  { setting: "off", allowInvisibleCharacters: false, stored: "~" },
  { setting: "on", allowInvisibleCharacters: true, stored: NBSP },
])(
  "copying a whole note through EditorRef.copy() with allowInvisibleCharacters $setting",
  ({ allowInvisibleCharacters, stored }) => {
    it("writes the note's USFM with no display NBSP, and the stored no-break space as the project spells it", async () => {
      const mounted = await mountNote(allowInvisibleCharacters);
      // A positive control: the display carries NBSPs the copy must not.
      expect(mounted.lexical.getEditorState().read(() => $getRoot().getTextContent())).toContain(
        `\\fr${NBSP}`,
      );
      await select(mounted, RANGE_IN_NOTE);

      await copyWholeNote(mounted);

      const usfm = `\\f + \\fr 1:1 \\fr*\\ft see${stored}x \\+nd L\\+nd*${stored}z  w\\ft*\\f*`;
      expect(clipboard.get("text/plain")).toBe(usfm);
      expect(clipboard.get("text/html")).toContain("\\f + \\fr 1:1");
      expect(clipboard.get("text/plain")).not.toContain(NBSP_STAND_IN);
    });

    it("leaves out a closing marker the note does not have and text after the note", async () => {
      const mounted = await mountNote(allowInvisibleCharacters, {
        usj: noteUsj({ isClosed: false, hasTail: true }),
      });
      await select(mounted, RANGE_IN_NOTE);

      await copyWholeNote(mounted);

      expect(clipboard.get("text/plain")).toBe(
        `\\f + \\fr 1:1 \\fr*\\ft see${stored}x \\+nd L\\+nd*${stored}z  w\\ft*`,
      );
    });

    it("puts the selection back as it was and changes nothing in the document", async () => {
      const mounted = await mountNote(allowInvisibleCharacters);
      await select(mounted, RANGE_IN_NOTE);
      const usjBefore = mounted.ref.current?.getUsj();
      const changesBefore = mounted.onUsjChange.mock.calls.length;

      await copyWholeNote(mounted);

      // A positive control: the copy really ran over the whole note.
      expect(clipboard.get("text/plain")).toContain("\\f*");
      expect(mounted.ref.current?.getSelection()).toEqual(RANGE_IN_NOTE);
      expect(mounted.ref.current?.getUsj()).toEqual(usjBefore);
      expect(mounted.onUsjChange.mock.calls.length).toBe(changesBefore);
    });
  },
);

describe("copying a whole note through EditorRef.copy() under a copy limit", () => {
  it("copies nothing when the whole note does not fit, and still puts the selection back", async () => {
    const mounted = await mountNote(false, { copyLimit: 20 });
    await select(mounted, RANGE_IN_NOTE);

    await copyWholeNote(mounted);

    expect(clipboard.size).toBe(0);
    expect(mounted.ref.current?.getSelection()).toEqual(RANGE_IN_NOTE);
  });

  it("copies the whole note when it fits", async () => {
    const mounted = await mountNote(false, { copyLimit: 1000 });
    await select(mounted, RANGE_IN_NOTE);

    await copyWholeNote(mounted);

    expect(clipboard.get("text/plain")).toBe(
      "\\f + \\fr 1:1 \\fr*\\ft see~x \\+nd L\\+nd*~z  w\\ft*\\f*",
    );
  });
});

describe("copying a whole note through EditorRef.copy() while a marker edit is pending", () => {
  it("leaves the pending edit pending and reports no change", async () => {
    const mounted = await mountNote(false);
    // A marker literal typed at the end of the `\ft` run's last text stays pending under the caret.
    await act(async () => {
      mounted.lexical.update(
        () => {
          const text = $getRoot()
            .getAllTextNodes()
            .find((node) => node.getTextContent().endsWith("w"));
          if (!text) throw new Error("the note's last text is missing");
          text.setTextContent(`${text.getTextContent()} \\nd`);
          const end = text.getTextContentSize();
          text.select(end, end);
        },
        { discrete: true },
      );
    });
    const pendingBefore = getPendedDisplayOwners(mounted.lexical)?.size ?? 0;
    // A positive control: there is a pending edit for a caret departure to settle.
    expect(pendingBefore).toBeGreaterThan(0);
    const selectionBefore = mounted.ref.current?.getSelection();
    const changesBefore = mounted.onUsjChange.mock.calls.length;

    await copyWholeNote(mounted);

    expect(clipboard.get("text/plain")).toContain("\\nd");
    expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBe(pendingBefore);
    expect(mounted.onUsjChange.mock.calls.length).toBe(changesBefore);
    expect(mounted.ref.current?.getSelection()).toEqual(selectionBefore);
  });
});
