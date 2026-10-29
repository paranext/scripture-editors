/**
 * A paste or drop into a hidden-marker view keeps everything but `\` and `//`, which the view
 * cannot store as text, and tells the host once through `onUnstorableTextRemoved`. Standard view
 * stores a pasted `\` as the marker it spells, so nothing there is filtered or reported.
 */
import { MountedEditor, editorView, mountInView } from "./editorViews.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $setSelection,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  PASTE_COMMAND,
} from "lexical";
import { StructureProtectionMode, UnstorableTextRemovedHandler } from "shared-react";

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

/** A stand-in for a clipboard's or drop's data: jsdom has no `DataTransfer`. */
function transfer(flavors: Flavors): DataTransfer {
  return {
    types: Object.keys(flavors),
    files: [],
    getData: (type: string) => flavors[type] ?? "",
  } as unknown as DataTransfer;
}

async function mount(
  viewName: string,
  structureProtectionMode: StructureProtectionMode,
): Promise<{ mounted: MountedEditor; onRemoved: ReturnType<typeof vi.fn> }> {
  const onRemoved = vi.fn<UnstorableTextRemovedHandler>();
  const mounted = await mountInView(usj, editorView(viewName), {
    structureProtectionMode,
    onUnstorableTextRemoved: onRemoved,
  });
  // The caret after "first " in the verse's text.
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
  return { mounted, onRemoved };
}

async function paste({ lexical }: MountedEditor, flavors: Flavors): Promise<void> {
  const event = { clipboardData: transfer(flavors), preventDefault: vi.fn() };
  await act(async () => {
    lexical.dispatchCommand(PASTE_COMMAND, event as unknown as ClipboardEvent);
  });
}

/** What Lexical's `beforeinput` handler dispatches for a drop that is not files. */
async function drop({ lexical }: MountedEditor, flavors: Flavors): Promise<void> {
  const event = {
    inputType: "insertFromDrop",
    dataTransfer: transfer(flavors),
    preventDefault: vi.fn(),
  };
  await act(async () => {
    lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, event as unknown as InputEvent);
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

describe.each(["paragraph-structure", "formatted"])("pasting into %s view", (viewName) => {
  describe.each<StructureProtectionMode>(["off", "protected"])("with structure %s", (mode) => {
    it("pastes `and/or` as it is, telling no one", async () => {
      const { mounted, onRemoved } = await mount(viewName, mode);

      await paste(mounted, { "text/html": "<span>and/or </span>", "text/plain": "and/or " });

      // Lexical's html import trims the trailing space.
      expect(savedParas(mounted)).toEqual(["first and/orverse text"]);
      expect(onRemoved).not.toHaveBeenCalled();
    });

    it("pastes a URL without its `//`, and says so once", async () => {
      const { mounted, onRemoved } = await mount(viewName, mode);

      await paste(mounted, { "text/plain": "https://example.org " });

      expect(savedParas(mounted)).toEqual(["first https:example.org verse text"]);
      expect(onRemoved).toHaveBeenCalledTimes(1);
      expect(onRemoved).toHaveBeenCalledWith({ source: "paste", removed: ["//"] });
    });

    it("pastes html without its `\\`", async () => {
      const { mounted, onRemoved } = await mount(viewName, mode);

      await paste(mounted, { "text/html": "<p>a \\v 9 b</p>", "text/plain": "a \\v 9 b" });

      expect(savedParas(mounted)).toEqual(["first a v 9 bverse text"]);
      expect(onRemoved).toHaveBeenCalledTimes(1);
      expect(onRemoved).toHaveBeenCalledWith({ source: "paste", removed: ["\\"] });
    });

    it("drops plain text without its `\\`, and says it was a drop", async () => {
      const { mounted, onRemoved } = await mount(viewName, mode);

      await drop(mounted, { "text/plain": "a\\b " });

      expect(savedParas(mounted)).toEqual(["first ab verse text"]);
      expect(onRemoved).toHaveBeenCalledTimes(1);
      expect(onRemoved).toHaveBeenCalledWith({ source: "drop", removed: ["\\"] });
    });

    it("changes nothing for a paste of only `\\`, and says so once", async () => {
      const { mounted, onRemoved } = await mount(viewName, mode);

      await paste(mounted, { "text/plain": "\\" });

      expect(savedParas(mounted)).toEqual([VERSE_TEXT]);
      expect(onRemoved).toHaveBeenCalledTimes(1);
    });
  });

  it.each<StructureProtectionMode>(["off", "guarded"])(
    "makes a new paragraph of a plain-text paste's second line when structure is %s",
    async (mode) => {
      const { mounted } = await mount(viewName, mode);

      await paste(mounted, { "text/plain": "line one\nline two " });

      expect(savedParas(mounted)).toEqual(["first line one", "line two verse text"]);
    },
  );

  it("keeps a plain-text paste's lines in the paragraph when structure is protected", async () => {
    const { mounted, onRemoved } = await mount(viewName, "protected");

    await paste(mounted, { "text/plain": "line one\nline two " });

    expect(savedParas(mounted)).toEqual(["first line one line two verse text"]);
    expect(onRemoved).not.toHaveBeenCalled();
  });
});

describe("pasting into Standard view", () => {
  it("keeps a protected paste's `\\`, telling no one", async () => {
    const { mounted, onRemoved } = await mount("standard", "protected");

    await paste(mounted, {
      "text/html": "<span>\\nd Lord\\nd* </span>",
      "text/plain": "\\nd Lord\\nd* ",
    });

    expect(onRemoved).not.toHaveBeenCalled();
    const saved = JSON.stringify(mounted.ref.current?.getUsj());
    expect(saved).toContain("Lord");
    expect(saved).toContain('"marker":"nd"');
  });
});
