/**
 * A pasted tab is saved as a space in every view. USJ has no tab, and Lexical turns a tab in pasted
 * plain text, or in html whose whitespace is preformatted, into a tab node, which nothing saves:
 * left alone, `word1⇥word2` would save as `word1word2`.
 */
import { MountedEditor, editorView, enabledViews, mountInView } from "./editorViews.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $isTabNode,
  $setSelection,
  PASTE_COMMAND,
} from "lexical";
import { StructureProtectionMode } from "shared-react";

const VERSE_TEXT = "first verse text";

const usj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: [] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [{ type: "verse", marker: "v", number: "1" }, VERSE_TEXT],
    },
  ],
};

interface Flavors {
  [type: string]: string | undefined;
}

/** A stand-in for a clipboard's data: jsdom has no `DataTransfer`. */
function transfer(flavors: Flavors): DataTransfer {
  return {
    types: Object.keys(flavors),
    files: [],
    getData: (type: string) => flavors[type] ?? "",
  } as unknown as DataTransfer;
}

/** Mounts `viewName` with the caret after "first " in the verse's text. */
async function mount(
  viewName: string,
  structureProtectionMode: StructureProtectionMode,
): Promise<MountedEditor> {
  const mounted = await mountInView(usj, editorView(viewName), { structureProtectionMode });
  await act(async () =>
    mounted.lexical.update(
      () => {
        const node = $getRoot()
          .getAllTextNodes()
          .find((text) => text.getType() === "text" && text.getTextContent().includes(VERSE_TEXT));
        if (!node) throw new Error("verse text not found");
        const offset = node.getTextContent().indexOf(VERSE_TEXT) + "first ".length;
        const selection = $createRangeSelection();
        selection.anchor.set(node.getKey(), offset, "text");
        selection.focus.set(node.getKey(), offset, "text");
        $setSelection(selection);
      },
      { discrete: true },
    ),
  );
  return mounted;
}

/** A paste event as the browser's own paste delivers it: no clipboard read, no cleanup. */
async function paste({ lexical }: MountedEditor, flavors: Flavors): Promise<void> {
  const event = { clipboardData: transfer(flavors), preventDefault: vi.fn() };
  await act(async () => {
    lexical.dispatchCommand(PASTE_COMMAND, event as unknown as ClipboardEvent);
  });
}

function textOf(content: MarkerContent[] | undefined): string {
  return (content ?? [])
    .map((item) =>
      typeof item === "string" ? item : item.type === "char" ? textOf(item.content) : "",
    )
    .join("");
}

/** The text of each `\p` paragraph the editor would save. */
function savedParas({ ref }: MountedEditor): string[] {
  const saved = ref.current?.getUsj();
  if (!saved) throw new Error("no USJ");
  return saved.content
    .filter((item): item is MarkerObject => typeof item !== "string" && item.type === "para")
    .map((para) => textOf(para.content));
}

function holdsTabNode({ lexical }: MountedEditor): boolean {
  return lexical.getEditorState().read(() =>
    $getRoot()
      .getAllTextNodes()
      .some((node) => $isTabNode(node)),
  );
}

const PASTES: { name: string; flavors: Flavors }[] = [
  { name: "plain text", flavors: { "text/plain": "a\tb " } },
  {
    name: "preformatted html",
    flavors: { "text/html": "<pre>a\tb </pre>", "text/plain": "a\tb " },
  },
];

describe.each(enabledViews(["formatted", "paragraph-structure"]))(
  "pasting a tab into %s view",
  (viewName) => {
    describe.each<StructureProtectionMode>(["off", "guarded", "protected"])(
      "with structure %s",
      (mode) => {
        it.each(PASTES)("saves a tab in $name as a space", async ({ flavors }) => {
          const mounted = await mount(viewName, mode);

          await paste(mounted, flavors);

          expect(savedParas(mounted)).toEqual(["first a b verse text"]);
          expect(holdsTabNode(mounted)).toBe(false);
          expect(mounted.logs.filter((line) => line.startsWith("E "))).toEqual([]);
        });
      },
    );

    it("joins a protected plain-text paste's lines and tabs with spaces", async () => {
      const mounted = await mount(viewName, "protected");

      await paste(mounted, { "text/plain": "a\tb\nc\td " });

      expect(savedParas(mounted)).toEqual(["first a b c d verse text"]);
    });

    it("types on after a pasted tab, next to the space it became", async () => {
      const mounted = await mount(viewName, "off");
      await paste(mounted, { "text/plain": "a\t" });

      await act(async () =>
        mounted.lexical.update(
          () => {
            const selection = $getSelection();
            if (!$isRangeSelection(selection)) throw new Error("no caret");
            selection.insertText("b ");
          },
          { discrete: true },
        ),
      );

      expect(savedParas(mounted)).toEqual(["first a b verse text"]);
      expect(holdsTabNode(mounted)).toBe(false);
    });
  },
);

describe("pasting a tab into Standard view", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("saves a tab as a space when the paste reads the clipboard itself", async () => {
    class FakeDataTransfer {
      readonly store = new Map<string, string>();
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
    class FakeClipboardEvent {
      readonly clipboardData: FakeDataTransfer;
      constructor(_type: string, init: { clipboardData: FakeDataTransfer }) {
        this.clipboardData = init.clipboardData;
      }
      preventDefault() {
        return undefined;
      }
    }
    vi.stubGlobal("DataTransfer", FakeDataTransfer);
    vi.stubGlobal("ClipboardEvent", FakeClipboardEvent);
    vi.stubGlobal("navigator", {
      ...navigator,
      clipboard: {
        read: async () => [
          { types: ["text/plain"], getType: async () => ({ text: async () => "a\tb " }) },
        ],
      },
      permissions: { query: async () => ({ state: "granted" }) },
    });
    const mounted = await mount("standard", "off");

    await act(async () => {
      mounted.ref.current?.paste();
    });
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(savedParas(mounted)).toEqual(["first a b verse text"]);
  });

  // Standard view reads a paste's text as USFM (`getDataTransferPayload`), which keeps a tab, so
  // the browser's own paste stores the tab itself; no tab node is made, and no word boundary lost.
  it.each(PASTES)("keeps a tab in $name pasted by the browser", async ({ flavors }) => {
    const mounted = await mount("standard", "off");

    await paste(mounted, flavors);

    expect(savedParas(mounted)).toEqual(["first a\tb verse text"]);
    expect(holdsTabNode(mounted)).toBe(false);
  });
});
