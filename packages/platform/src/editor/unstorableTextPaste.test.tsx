/**
 * A paste or drop into a hidden-marker view keeps everything but `\` and `//`, which the view
 * cannot store as text, and tells the host once through `onUnstorableTextRemoved`. Standard view
 * stores a pasted `\` as the marker it spells, so nothing there is filtered or reported.
 */
import { MountedEditor, editorView, mountInView } from "./editorViews.test-helpers";
import { usfmToClipboardHtml } from "./markerEdit/whitespaceDisplay.plugin.utils";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $setSelection,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  COPY_COMMAND,
  ElementNode,
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

/** A paragraph's gutter marker glyph, as a hidden-marker view's own DOM serializes it. */
const PARA_GLYPH = '<span data-text-type="marker" class="marker">\\q1&nbsp;</span>';
/** An inline marker glyph, as the Markers view and older copies serialize one. */
const INLINE_GLYPH = '<span data-text-type="marker" class="marker">\\w&nbsp;</span>';
/** A selection across a paragraph break as the browser serializes it for a drag or html copy. */
const ACROSS_PARAS = { "text/html": `<p>a</p><p>${PARA_GLYPH}b</p>`, "text/plain": "a\n\\q1 b" };
const INLINE = {
  "text/html": `<p><span>x </span>${INLINE_GLYPH}<span>word</span></p>`,
  "text/plain": "x \\w word",
};

/** Every paragraph's saved text, run together, for checks that hold wherever the breaks fall. */
function savedText(mounted: MountedEditor): string {
  return savedParas(mounted).join("|");
}

describe.each<[string, StructureProtectionMode]>([
  ["paragraph-structure", "off"],
  ["paragraph-structure", "guarded"],
  ["formatted", "off"],
])("marker glyphs in html put into %s view with structure %s", (viewName, mode) => {
  it("drops a paragraph's glyph from a drop across a paragraph break, telling no one", async () => {
    const { mounted, onRemoved } = await mount(viewName, mode);

    await drop(mounted, ACROSS_PARAS);

    const saved = savedText(mounted);
    expect(saved).not.toContain("q1");
    expect(saved).not.toContain("\\");
    expect(saved).toContain("first a");
    expect(saved).toContain("bverse text");
    expect(onRemoved).not.toHaveBeenCalled();
  });

  it("drops a paragraph's glyph from an html paste across a paragraph break, telling no one", async () => {
    const { mounted, onRemoved } = await mount(viewName, mode);

    await paste(mounted, ACROSS_PARAS);

    const saved = savedText(mounted);
    expect(saved).not.toContain("q1");
    expect(saved).not.toContain("\\");
    expect(saved).toContain("first a");
    expect(saved).toContain("bverse text");
    expect(onRemoved).not.toHaveBeenCalled();
  });

  it("drops an inline glyph from an html paste, telling no one", async () => {
    const { mounted, onRemoved } = await mount(viewName, mode);

    await paste(mounted, INLINE);

    expect(savedParas(mounted)).toEqual(["first x wordverse text"]);
    expect(onRemoved).not.toHaveBeenCalled();
  });

  it("drops an inline glyph from a drop, telling no one", async () => {
    const { mounted, onRemoved } = await mount(viewName, mode);

    await drop(mounted, INLINE);

    expect(savedParas(mounted)).toEqual(["first x wordverse text"]);
    expect(onRemoved).not.toHaveBeenCalled();
  });

  it("changes nothing for html holding only a glyph, leaving the selection's text", async () => {
    const { mounted, onRemoved } = await mount(viewName, mode);
    await act(async () =>
      mounted.lexical.update(
        () => {
          const node = $getRoot()
            .getAllTextNodes()
            .find((text) => text.getTextContent().includes(VERSE_TEXT));
          if (!node) throw new Error("verse text not found");
          const start = node.getTextContent().indexOf(VERSE_TEXT);
          node.select(start, start + "first ".length);
        },
        { discrete: true },
      ),
    );

    await paste(mounted, { "text/html": `<p>${PARA_GLYPH}</p>`, "text/plain": "\\q1 " });

    expect(savedParas(mounted)).toEqual([VERSE_TEXT]);
    expect(onRemoved).not.toHaveBeenCalled();
  });
});

describe("a paste carrying Lexical's own flavor beside glyph-bearing html", () => {
  it("inserts what was copied, ignoring the html and plain text, telling no one", async () => {
    const { mounted, onRemoved } = await mount("paragraph-structure", "off");
    const selectInVerse = (from: number, to: number) =>
      act(async () =>
        mounted.lexical.update(
          () => {
            const node = $getRoot()
              .getAllTextNodes()
              .find((text) => text.getTextContent().includes(VERSE_TEXT));
            if (!node) throw new Error("verse text not found");
            const start = node.getTextContent().indexOf(VERSE_TEXT);
            node.select(start + from, start + to);
          },
          { discrete: true },
        ),
      );
    // A real copy of "verse", so the flavor carries this editor's namespace.
    await selectInVerse("first ".length, "first verse".length);
    const copied = new Map<string, string>();
    const copyEvent = new ClipboardEvent("copy", { bubbles: true, cancelable: true });
    Object.defineProperty(copyEvent, "clipboardData", {
      value: {
        types: [],
        files: [],
        getData: (type: string) => copied.get(type) ?? "",
        setData: (type: string, data: string) => copied.set(type, data),
        clearData: () => copied.clear(),
      },
    });
    await act(async () => {
      mounted.lexical.dispatchCommand(COPY_COMMAND, copyEvent);
    });
    const lexicalFlavor = copied.get("application/x-lexical-editor");
    expect(lexicalFlavor).toContain("platformEditor");
    await selectInVerse(0, 0);

    await paste(mounted, {
      "application/x-lexical-editor": lexicalFlavor,
      "text/html": `<p>${PARA_GLYPH}other</p>`,
      "text/plain": "\\q1 other",
    });

    expect(savedParas(mounted)).toEqual(["versefirst verse text"]);
    expect(onRemoved).not.toHaveBeenCalled();
  });
});

/**
 * A copy from a view that shows markers writes USFM as its html and plain text. Its node copy
 * tells a hidden-marker view so, and the view takes the marker tokens out rather than leaving each
 * marker's name behind as a word: they are markup the view never asked the user to type, so nobody
 * is told. Only the markers go: a note's caller, a verse's number and an attribute list stay.
 */
describe.each<StructureProtectionMode>(["off", "guarded", "protected"])(
  "a marker view's copy pasted into paragraph-structure view, structure %s",
  (mode) => {
    /** The flavors a copy of `usfm` writes in a view that shows markers. */
    const markerViewCopy = (usfm: string): Flavors => ({
      "application/x-lexical-editor": JSON.stringify({ namespace: "platformEditor", nodes: [] }),
      "text/html": usfmToClipboardHtml(usfm),
      "text/plain": usfm,
    });

    it.each([
      ["an opening marker", "1 \\ft TR and ", "1 TR and "],
      ["a closer and a nested marker", "\\nd Lord \\+wj x\\+wj*\\nd* y", "Lord x y"],
      ["the nameless marker", "\\ a", "a"],
      ["a whole note", "\\f + \\fr 1:1 \\ft note\\f*", "+ 1:1 note"],
      ["a whole verse", "\\v 2 two", "2 two"],
    ])("leaves out %s, telling no one", async (_name, usfm, inserted) => {
      const { mounted, onRemoved } = await mount("paragraph-structure", mode);
      try {
        await paste(mounted, markerViewCopy(usfm));

        expect(savedParas(mounted)).toEqual([`first ${inserted}verse text`]);
        expect(onRemoved).not.toHaveBeenCalled();
      } finally {
        mounted.unmount();
      }
    });

    it("still tells the host about a `//` it filters", async () => {
      const { mounted, onRemoved } = await mount("paragraph-structure", mode);
      try {
        await paste(mounted, markerViewCopy("\\ft a // b "));

        expect(savedParas(mounted)).toEqual(["first a  b verse text"]);
        expect(onRemoved).toHaveBeenCalledExactlyOnceWith({ source: "paste", removed: ["//"] });
      } finally {
        mounted.unmount();
      }
    });

    it("changes nothing for a copy of nothing but a marker, leaving the selection's text", async () => {
      const { mounted, onRemoved } = await mount("paragraph-structure", mode);
      try {
        await act(async () =>
          mounted.lexical.update(
            () => {
              const node = $getRoot()
                .getAllTextNodes()
                .find((text) => text.getTextContent().includes(VERSE_TEXT));
              if (!node) throw new Error("verse text not found");
              const start = node.getTextContent().indexOf(VERSE_TEXT);
              node.select(start, start + "first".length);
            },
            { discrete: true },
          ),
        );

        await paste(mounted, markerViewCopy("\\ft "));

        expect(savedParas(mounted)).toEqual([VERSE_TEXT]);
        expect(onRemoved).not.toHaveBeenCalled();
      } finally {
        mounted.unmount();
      }
    });

    it("keeps a paste with no node copy as it was, with the notice", async () => {
      const { mounted, onRemoved } = await mount("paragraph-structure", mode);
      try {
        await paste(mounted, { "text/plain": "\\v 9 x " });

        expect(savedParas(mounted)).toEqual(["first v 9 x verse text"]);
        expect(onRemoved).toHaveBeenCalledExactlyOnceWith({ source: "paste", removed: ["\\"] });
      } finally {
        mounted.unmount();
      }
    });

    it("keeps html with no node copy as it was, with the notice", async () => {
      const { mounted, onRemoved } = await mount("paragraph-structure", mode);
      try {
        await paste(mounted, {
          "text/html": usfmToClipboardHtml("\\v 9 x "),
          "text/plain": "\\v 9 x ",
        });

        expect(savedParas(mounted)).toEqual(["first v 9 x verse text"]);
        expect(onRemoved).toHaveBeenCalledExactlyOnceWith({ source: "paste", removed: ["\\"] });
      } finally {
        mounted.unmount();
      }
    });
  },
);

/**
 * What a whole-verse and a whole-note copy made in Standard view itself bring across. Each carries
 * the view's real flavors, so this pins the writer's namespace and bytes along with the reader.
 */
describe.each<StructureProtectionMode>(["off", "guarded", "protected"])(
  "a real Standard-view copy pasted into paragraph-structure view, structure %s",
  (mode) => {
    const noteUsj: Usj = {
      type: "USJ",
      version: "3.1",
      content: [
        {
          type: "para",
          marker: "p",
          content: [
            { type: "verse", marker: "v", number: "1" },
            "one",
            {
              type: "note",
              marker: "f",
              caller: "+",
              content: [
                { type: "char", marker: "fr", content: ["1:1 "] },
                { type: "char", marker: "ft", content: ["note"] },
              ],
            },
          ],
        },
      ],
    };

    async function copyWholeParagraph(): Promise<Map<string, string>> {
      const source = await mountInView(noteUsj, editorView("standard"));
      try {
        await act(async () =>
          source.lexical.update(
            () => {
              const para = $getRoot().getFirstChildOrThrow<ElementNode>();
              para.select(0, para.getChildrenSize());
            },
            { discrete: true },
          ),
        );
        const copied = new Map<string, string>();
        const copyEvent = new ClipboardEvent("copy", { bubbles: true, cancelable: true });
        Object.defineProperty(copyEvent, "clipboardData", {
          value: {
            types: [],
            files: [],
            getData: (type: string) => copied.get(type) ?? "",
            setData: (type: string, data: string) => copied.set(type, data),
            clearData: () => copied.clear(),
          },
        });
        await act(async () => {
          source.lexical.dispatchCommand(COPY_COMMAND, copyEvent);
        });
        return copied;
      } finally {
        source.unmount();
      }
    }

    it("leaves the verse number and the note's caller as text, and no marker name", async () => {
      const copied = await copyWholeParagraph();
      expect(copied.get("text/plain")).toBe("\\p \\v 1 one\\f + \\fr 1:1 \\fr*\\ft note\\ft*\\f*");
      expect(copied.get("application/x-lexical-editor")).toContain('"namespace":"platformEditor"');
      const { mounted, onRemoved } = await mount("paragraph-structure", mode);
      try {
        await paste(mounted, Object.fromEntries(copied));

        expect(savedParas(mounted)).toEqual(["first 1 one+ 1:1 noteverse text"]);
        expect(onRemoved).not.toHaveBeenCalled();
      } finally {
        mounted.unmount();
      }
    });
  },
);

/**
 * Standard view reads the text flavor as USFM, so a glyph's bytes become the marker they spell
 * there; nothing in the hidden-marker views' handling of glyphs reaches it.
 */
describe("marker glyphs in html put into Standard view", () => {
  const verseOne = { type: "verse", marker: "v", number: "1" };
  const expected: { [flavors: string]: MarkerContent[] } = {
    across: [
      { type: "para", marker: "p", content: [verseOne, "first a"] },
      { type: "para", marker: "q1", content: ["bverse text"] },
    ],
    inline: [
      {
        type: "para",
        marker: "p",
        content: [
          verseOne,
          "first x ",
          { type: "char", marker: "w", closed: "false", content: ["wordverse text"] },
        ],
      },
    ],
  };

  describe.each<[string, (mounted: MountedEditor, flavors: Flavors) => Promise<void>]>([
    ["paste", paste],
    ["drop", drop],
  ])("by %s", (_route, putIn) => {
    it.each<[string, Flavors]>([
      ["across", ACROSS_PARAS],
      ["inline", INLINE],
    ])("stores the %s glyph as the marker it spells", async (name, flavors) => {
      const { mounted, onRemoved } = await mount("standard", "off");

      await putIn(mounted, flavors);

      expect(onRemoved).not.toHaveBeenCalled();
      expect(mounted.ref.current?.getUsj()?.content.slice(2)).toEqual(expected[name]);
    });
  });
});
