/**
 * Deleting in a hidden-marker view never joins two `/` into `//`: a delete whose result would put
 * a `/` against a `/` it was not already touching is refused, and the host is told once through
 * `onUnstorableTextRemoved`. Saved, `//` is USFM's optional line break, which these views hide, so
 * the text the user sees would change on the next load. Standard view saves a `//` as it is typed,
 * so nothing there is refused or reported.
 */
import { MountedEditor, editorView, enabledViews, mountInView } from "./editorViews.test-helpers";
import { installSelectionModify, press } from "./typingFidelityOracle.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $isTextNode,
  $setSelection,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  CUT_COMMAND,
  DELETE_CHARACTER_COMMAND,
  DELETE_LINE_COMMAND,
  DELETE_WORD_COMMAND,
  LexicalEditor,
  PASTE_COMMAND,
  RangeSelection,
  REMOVE_TEXT_COMMAND,
  TextNode,
} from "lexical";
import { $createTypedMarkNode, $isGutterMarkerNode, $isParaNode, $selectParaMarker } from "shared";
import { StructureProtectionMode, UnstorableTextRemovedHandler } from "shared-react";

installSelectionModify();

const VERSE_1: MarkerContent = { type: "verse", marker: "v", number: "1" };

/** `\id`, `\c 1`, then a `\p` per entry of `paras`, the first starting with `\v 1`. */
function usjWith(...paras: MarkerContent[][]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: [] },
      { type: "chapter", marker: "c", number: "1" },
      ...paras.map(
        (content, index): MarkerObject => ({
          type: "para",
          marker: "p",
          content: index === 0 ? [VERSE_1, ...content] : content,
        }),
      ),
    ],
  };
}

/** A place in the text: `offset` characters into the first stored text node holding `text`. */
interface At {
  text: string;
  offset: number;
}

function $textNodeHolding(text: string): TextNode {
  const node = $getRoot()
    .getAllTextNodes()
    .find((candidate) => candidate.getType() === "text" && candidate.getTextContent() === text);
  if (!node) throw new Error(`no text node holding ${JSON.stringify(text)}`);
  return node;
}

/** Selects from `from` to `to` (a caret when `to` is left out). */
async function select({ lexical }: MountedEditor, from: At, to: At = from): Promise<void> {
  await act(async () =>
    lexical.update(
      () => {
        const anchor = $textNodeHolding(from.text);
        const focus = $textNodeHolding(to.text);
        const selection = $createRangeSelection();
        selection.anchor.set(anchor.getKey(), from.offset, "text");
        selection.focus.set(focus.getKey(), to.offset, "text");
        $setSelection(selection);
      },
      { discrete: true },
    ),
  );
}

/**
 * Presses `key` to delete: once, and again when guarded structure only armed the delete on the
 * first press (its second press is the one that deletes).
 */
async function pressToDelete(mounted: MountedEditor, key: string): Promise<void> {
  expect(await press(mounted, key)).toEqual([]);
  if (mounted.lexical.getRootElement()?.classList.contains("verse-delete-armed"))
    expect(await press(mounted, key)).toEqual([]);
}

async function dispatch<P>(
  lexical: LexicalEditor,
  run: (editor: LexicalEditor) => P,
): Promise<P | undefined> {
  let result: P | undefined;
  await act(async () => {
    result = run(lexical);
    await Promise.resolve();
  });
  return result;
}

/** A clipboard event over an in-memory store, as the editor's copy and paste read and write it. */
function clipboardEvent(type: "cut" | "paste", store: Map<string, string>): ClipboardEvent {
  const event = new ClipboardEvent(type, { bubbles: true, cancelable: true });
  Object.defineProperty(event, "clipboardData", {
    value: {
      get types() {
        return [...store.keys()];
      },
      files: [],
      getData: (format: string) => store.get(format) ?? "",
      setData: (format: string, data: string) => store.set(format, data),
      clearData: () => store.clear(),
    },
  });
  return event;
}

/** Cuts the selection; returns what reached the clipboard. */
async function cut(mounted: MountedEditor): Promise<Map<string, string>> {
  const store = new Map<string, string>();
  await dispatch(mounted.lexical, (editor) =>
    editor.update(() => editor.dispatchCommand(CUT_COMMAND, clipboardEvent("cut", store))),
  );
  return store;
}

/** Pastes `text` as plain text over the selection. */
async function pastePlain(mounted: MountedEditor, text: string): Promise<void> {
  const store = new Map([["text/plain", text]]);
  await dispatch(mounted.lexical, (editor) =>
    editor.update(() => editor.dispatchCommand(PASTE_COMMAND, clipboardEvent("paste", store))),
  );
}

/**
 * Makes `RangeSelection.modify` extend a word or line delete by `units` characters, standing in
 * for the browser's word breaks and line wrapping, which jsdom has neither of. Character steps keep
 * their own `modify`. `RangeSelection` is a type-only export, so its prototype is reached through
 * an instance. Returns the restore.
 */
function stubWordAndLineExtent(lexical: LexicalEditor, units: number): () => void {
  const proto = lexical
    .getEditorState()
    .read(() => Object.getPrototypeOf($createRangeSelection()) as RangeSelection);
  const original = proto.modify;
  const spy = vi.spyOn(proto, "modify").mockImplementation(function (
    this: RangeSelection,
    ...args: Parameters<RangeSelection["modify"]>
  ) {
    const [alter, isBackward, granularity] = args;
    if (granularity === "character" || this.focus.type !== "text") {
      original.apply(this, args);
      return;
    }
    const { key, offset } = this.focus;
    const size = this.focus.getNode().getTextContentSize();
    const to = isBackward ? Math.max(0, offset - units) : Math.min(size, offset + units);
    this.focus.set(key, to, "text");
    if (alter === "move") this.anchor.set(key, to, "text");
  });
  return () => spy.mockRestore();
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

const REFUSED = { source: "deletion", removed: ["//"] };

interface Config {
  label: string;
  viewName: string;
  structureProtectionMode: StructureProtectionMode;
}

const CONFIGS: Config[] = [
  {
    label: "paragraph-structure, off",
    viewName: "paragraph-structure",
    structureProtectionMode: "off",
  },
  {
    label: "paragraph-structure, guarded",
    viewName: "paragraph-structure",
    structureProtectionMode: "guarded",
  },
  {
    label: "paragraph-structure, protected",
    viewName: "paragraph-structure",
    structureProtectionMode: "protected",
  },
  { label: "formatted", viewName: "formatted", structureProtectionMode: "off" },
];

describe.each(CONFIGS)("deleting in the $label view", ({ viewName, structureProtectionMode }) => {
  async function mount(
    ...paras: MarkerContent[][]
  ): Promise<{ mounted: MountedEditor; onRemoved: ReturnType<typeof vi.fn> }> {
    const onRemoved = vi.fn<UnstorableTextRemovedHandler>();
    const mounted = await mountInView(usjWith(...paras), editorView(viewName), {
      structureProtectionMode,
      onUnstorableTextRemoved: onRemoved,
    });
    return { mounted, onRemoved };
  }

  describe("refuses a delete that would join two `/`, and says so once", () => {
    it.each([
      ["Backspace", 3],
      ["Delete", 2],
    ])("%s of the character between them", async (key, offset) => {
      const { mounted, onRemoved } = await mount(["a/b/c"]);
      await select(mounted, { text: "a/b/c", offset });

      expect(await press(mounted, key)).toEqual([]);

      expect(savedParas(mounted)).toEqual(["a/b/c"]);
      expect(onRemoved).toHaveBeenCalledTimes(1);
      expect(onRemoved).toHaveBeenCalledWith(REFUSED);
    });

    it.each(["Backspace", "Delete"])("%s of a selection between them", async (key) => {
      const { mounted, onRemoved } = await mount(["a/bc/d"]);
      await select(mounted, { text: "a/bc/d", offset: 2 }, { text: "a/bc/d", offset: 4 });

      await press(mounted, key);

      expect(savedParas(mounted)).toEqual(["a/bc/d"]);
      expect(onRemoved).toHaveBeenCalledTimes(1);
      expect(onRemoved).toHaveBeenCalledWith(REFUSED);
    });

    it.each([
      ["backward", true, 3],
      ["forward", false, 2],
    ])(
      "a %s delete that arrives without a keydown (an input event, a menu)",
      async (_, isBackward, offset) => {
        const { mounted, onRemoved } = await mount(["a/b/c"]);
        await select(mounted, { text: "a/b/c", offset });

        await dispatch(mounted.lexical, (editor) =>
          editor.dispatchCommand(DELETE_CHARACTER_COMMAND, isBackward),
        );

        expect(savedParas(mounted)).toEqual(["a/b/c"]);
        expect(onRemoved).toHaveBeenCalledTimes(1);
        expect(onRemoved).toHaveBeenCalledWith(REFUSED);
      },
    );

    it.each([
      ["word", DELETE_WORD_COMMAND],
      ["line", DELETE_LINE_COMMAND],
    ])("a %s delete", async (_, command) => {
      const { mounted, onRemoved } = await mount(["x/ab/y"]);
      const restore = stubWordAndLineExtent(mounted.lexical, 2);
      try {
        await select(mounted, { text: "x/ab/y", offset: 4 });

        await dispatch(mounted.lexical, (editor) => editor.dispatchCommand(command, true));

        expect(savedParas(mounted)).toEqual(["x/ab/y"]);
        expect(onRemoved).toHaveBeenCalledTimes(1);
        expect(onRemoved).toHaveBeenCalledWith(REFUSED);
      } finally {
        restore();
      }
    });

    it("a cut, which copies nothing either", async () => {
      const { mounted, onRemoved } = await mount(["a/bc/d"]);
      await select(mounted, { text: "a/bc/d", offset: 2 }, { text: "a/bc/d", offset: 4 });

      const clipboard = await cut(mounted);

      expect(savedParas(mounted)).toEqual(["a/bc/d"]);
      expect(clipboard.size).toBe(0);
      expect(onRemoved).toHaveBeenCalledTimes(1);
      expect(onRemoved).toHaveBeenCalledWith(REFUSED);
    });

    it("the removal half of a drag-move", async () => {
      const { mounted, onRemoved } = await mount(["a/bc/d"]);
      await select(mounted, { text: "a/bc/d", offset: 2 }, { text: "a/bc/d", offset: 4 });

      await dispatch(mounted.lexical, (editor) =>
        editor.dispatchCommand(
          REMOVE_TEXT_COMMAND,
          new InputEvent("beforeinput", { inputType: "deleteByDrag", cancelable: true }),
        ),
      );

      expect(savedParas(mounted)).toEqual(["a/bc/d"]);
      expect(onRemoved).toHaveBeenCalledTimes(1);
      expect(onRemoved).toHaveBeenCalledWith(REFUSED);
    });

    it("across an annotation mark's edge", async () => {
      const { mounted, onRemoved } = await mount(["a/b/c"]);
      await act(async () =>
        mounted.lexical.update(
          () => {
            const [, marked] = $textNodeHolding("a/b/c").splitText(3);
            const mark = $createTypedMarkNode({ comment: ["c1"] });
            marked.replace(mark);
            mark.append(marked);
          },
          { discrete: true },
        ),
      );
      await select(mounted, { text: "a/b", offset: 3 });

      await press(mounted, "Backspace");

      expect(savedParas(mounted)).toEqual(["a/b/c"]);
      expect(onRemoved).toHaveBeenCalledTimes(1);
      expect(onRemoved).toHaveBeenCalledWith(REFUSED);
    });

    it("when the delete empties a character span between them", async () => {
      const { mounted, onRemoved } = await mount([
        "a/",
        { type: "char", marker: "nd", content: ["b"] },
        "/c",
      ]);
      await select(mounted, { text: "b", offset: 1 });

      await press(mounted, "Backspace");

      expect(savedParas(mounted)).toEqual(["a/b/c"]);
      expect(onRemoved).toHaveBeenCalledTimes(1);
      expect(onRemoved).toHaveBeenCalledWith(REFUSED);
    });
  });

  // Enter splits a paragraph only where structure is not protected.
  it.skipIf(structureProtectionMode === "protected")(
    "refuses a join that makes two pieces of one character span one again, `a/` against `/c`",
    async () => {
      const { mounted, onRemoved } = await mount([
        { type: "char", marker: "nd", content: ["a/b/c"] },
      ]);
      await select(mounted, { text: "a/b/c", offset: 2 });
      await pressToDelete(mounted, "Enter");
      await select(mounted, { text: "b/c", offset: 1 });
      await pressToDelete(mounted, "Backspace");
      expect(savedParas(mounted)).toEqual(["a/", "/c"]);
      expect(onRemoved).not.toHaveBeenCalled();

      await select(mounted, { text: "/c", offset: 0 });
      await pressToDelete(mounted, "Backspace");

      expect(savedParas(mounted)).toEqual(["a/", "/c"]);
      expect(onRemoved.mock.calls).toEqual([[REFUSED]]);
    },
  );

  // Protected structure refuses a paragraph join itself; the join is not reported as a `//`.
  describe("a paragraph join that would put `a/` against `/c`", () => {
    const isProtected = structureProtectionMode === "protected";

    it.each([
      ["Backspace at the start of the second", { text: "/c", offset: 0 }, "Backspace"],
      ["Delete at the end of the first", { text: "a/", offset: 2 }, "Delete"],
    ])("%s paragraph is refused", async (_, at, key) => {
      const { mounted, onRemoved } = await mount(["a/"], ["/c"]);
      await select(mounted, at);

      await pressToDelete(mounted, key);

      expect(savedParas(mounted)).toEqual(["a/", "/c"]);
      if (isProtected) expect(onRemoved).not.toHaveBeenCalled();
      else expect(onRemoved.mock.calls).toEqual([[REFUSED]]);
    });

    it("a selection across the paragraph break is refused", async () => {
      const { mounted, onRemoved } = await mount(["a/x"], ["y/c"]);
      await select(mounted, { text: "a/x", offset: 2 }, { text: "y/c", offset: 1 });

      await pressToDelete(mounted, "Backspace");

      expect(savedParas(mounted)).toEqual(["a/x", "y/c"]);
      if (isProtected) expect(onRemoved).not.toHaveBeenCalled();
      else expect(onRemoved.mock.calls).toEqual([[REFUSED]]);
    });
  });

  describe("deletes as before, telling no one", () => {
    it.each([
      ["a `/` and a space", "a/b c", 3, ["a/ c"]],
      ["a `/` and a letter", "a/bc/", 3, ["a/c/"]],
      ["a `//` already in the text", "a//bc", 5, ["a//b"]],
      ["one of two touching `/`", "a//c", 3, ["a/c"]],
    ])("between %s", async (_, text, offset, expected) => {
      const { mounted, onRemoved } = await mount([text]);
      await select(mounted, { text, offset });

      await press(mounted, "Backspace");

      expect(savedParas(mounted)).toEqual(expected);
      expect(onRemoved).not.toHaveBeenCalled();
    });

    it("a paragraph join that leaves a `/` beside a letter", async () => {
      const { mounted, onRemoved } = await mount(["a/"], ["c"]);
      await select(mounted, { text: "c", offset: 0 });

      await pressToDelete(mounted, "Backspace");

      expect(onRemoved).not.toHaveBeenCalled();
      if (structureProtectionMode !== "protected") expect(savedParas(mounted)).toEqual(["a/c"]);
    });
  });

  describe("replacing a selection between two `/`", () => {
    it("typing over it puts the typed text between them", async () => {
      const { mounted, onRemoved } = await mount(["a/b/c"]);
      await select(mounted, { text: "a/b/c", offset: 2 }, { text: "a/b/c", offset: 3 });

      await dispatch(mounted.lexical, (editor) =>
        editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "x"),
      );

      expect(savedParas(mounted)).toEqual(["a/x/c"]);
      expect(onRemoved).not.toHaveBeenCalled();
    });

    it("pasting over it puts the pasted text between them", async () => {
      const { mounted, onRemoved } = await mount(["a/b/c"]);
      await select(mounted, { text: "a/b/c", offset: 2 }, { text: "a/b/c", offset: 3 });

      await pastePlain(mounted, "x");

      expect(savedParas(mounted)).toEqual(["a/x/c"]);
      expect(onRemoved).not.toHaveBeenCalled();
    });

    it("a paste left with nothing to insert keeps the selection, reported as a paste", async () => {
      const { mounted, onRemoved } = await mount(["a/b/c"]);
      await select(mounted, { text: "a/b/c", offset: 2 }, { text: "a/b/c", offset: 3 });

      await pastePlain(mounted, "\\");

      expect(savedParas(mounted)).toEqual(["a/b/c"]);
      expect(onRemoved).toHaveBeenCalledTimes(1);
      expect(onRemoved).toHaveBeenCalledWith({ source: "paste", removed: ["\\"] });
    });
  });
});

describe("deleting a selected paragraph marker in the paragraph-structure view", () => {
  it.each<StructureProtectionMode>(["off", "guarded"])(
    "is refused under %s structure when the join would put `a/` against `/c`",
    async (structureProtectionMode) => {
      const onRemoved = vi.fn<UnstorableTextRemovedHandler>();
      const mounted = await mountInView(
        usjWith(["a/"], ["/c"]),
        editorView("paragraph-structure"),
        { structureProtectionMode, onUnstorableTextRemoved: onRemoved },
      );
      await act(async () =>
        mounted.lexical.update(
          () => {
            const glyph = $getRoot().getChildren().filter($isParaNode)[1]?.getFirstChild();
            if (!$isGutterMarkerNode(glyph)) throw new Error("no gutter glyph on the paragraph");
            $selectParaMarker(glyph);
          },
          { discrete: true },
        ),
      );

      await pressToDelete(mounted, "Backspace");

      expect(savedParas(mounted)).toEqual(["a/", "/c"]);
      expect(onRemoved.mock.calls).toEqual([[REFUSED]]);
    },
  );
});

describe("deleting a selected paragraph marker after the editor switches into paragraph-structure", () => {
  it("is refused as in an editor mounted in that view", async () => {
    const onRemoved = vi.fn<UnstorableTextRemovedHandler>();
    const mounted = await mountInView(usjWith(["a/"], ["/c"]), editorView("standard"), {
      structureProtectionMode: "off",
      onUnstorableTextRemoved: onRemoved,
    });
    try {
      await mounted.rerenderWithView(editorView("paragraph-structure"));
      await act(async () =>
        mounted.lexical.update(
          () => {
            const glyph = $getRoot().getChildren().filter($isParaNode)[1]?.getFirstChild();
            if (!$isGutterMarkerNode(glyph)) throw new Error("no gutter glyph on the paragraph");
            $selectParaMarker(glyph);
          },
          { discrete: true },
        ),
      );

      await pressToDelete(mounted, "Backspace");

      expect(savedParas(mounted)).toEqual(["a/", "/c"]);
      expect(onRemoved.mock.calls).toEqual([[REFUSED]]);
    } finally {
      mounted.unmount();
    }
  });
});

/** Every text node's text run together: marker glyphs and all, in a view that shows markers. */
function shownText({ lexical }: MountedEditor): string {
  return lexical.getEditorState().read(() =>
    $getRoot()
      .getAllTextNodes()
      .filter($isTextNode)
      .map((node) => node.getTextContent())
      .join(""),
  );
}

describe.each(enabledViews(["standard", "visible"]))(
  "deleting in the %s view, which shows markers",
  (viewName) => {
    async function mount(
      ...paras: MarkerContent[][]
    ): Promise<{ mounted: MountedEditor; onRemoved: ReturnType<typeof vi.fn> }> {
      const onRemoved = vi.fn<UnstorableTextRemovedHandler>();
      const mounted = await mountInView(usjWith(...paras), editorView(viewName), {
        onUnstorableTextRemoved: onRemoved,
      });
      return { mounted, onRemoved };
    }

    it.each([
      ["Backspace", 3],
      ["Delete", 2],
    ])("%s joins two `/` as asked, telling no one", async (key, offset) => {
      const { mounted, onRemoved } = await mount(["a/b/c"]);
      await select(mounted, { text: "a/b/c", offset });

      await press(mounted, key);

      expect(shownText(mounted)).toContain("a//c");
      expect(onRemoved).not.toHaveBeenCalled();
    });

    it.each([
      ["backward", true, 3],
      ["forward", false, 2],
    ])(
      "a %s delete that arrives without a keydown joins two `/`, telling no one",
      async (_, isBackward, offset) => {
        const { mounted, onRemoved } = await mount(["a/b/c"]);
        await select(mounted, { text: "a/b/c", offset });

        await dispatch(mounted.lexical, (editor) =>
          editor.dispatchCommand(DELETE_CHARACTER_COMMAND, isBackward),
        );

        expect(shownText(mounted)).toContain("a//c");
        expect(onRemoved).not.toHaveBeenCalled();
      },
    );

    it.each([
      ["word", DELETE_WORD_COMMAND],
      ["line", DELETE_LINE_COMMAND],
    ])("a %s delete joins two `/`, telling no one", async (_, command) => {
      const { mounted, onRemoved } = await mount(["x/ab/y"]);
      const restore = stubWordAndLineExtent(mounted.lexical, 2);
      try {
        await select(mounted, { text: "x/ab/y", offset: 4 });

        await dispatch(mounted.lexical, (editor) => editor.dispatchCommand(command, true));

        expect(shownText(mounted)).toContain("x//y");
        expect(onRemoved).not.toHaveBeenCalled();
      } finally {
        restore();
      }
    });

    it("a cut joins two `/`, telling no one", async () => {
      const { mounted, onRemoved } = await mount(["a/bc/d"]);
      await select(mounted, { text: "a/bc/d", offset: 2 }, { text: "a/bc/d", offset: 4 });

      const clipboard = await cut(mounted);

      expect(shownText(mounted)).toContain("a//d");
      expect(clipboard.get("text/plain")).toBe("bc");
      expect(onRemoved).not.toHaveBeenCalled();
    });

    it("the removal half of a drag-move joins two `/`, telling no one", async () => {
      const { mounted, onRemoved } = await mount(["a/bc/d"]);
      await select(mounted, { text: "a/bc/d", offset: 2 }, { text: "a/bc/d", offset: 4 });

      await dispatch(mounted.lexical, (editor) =>
        editor.dispatchCommand(
          REMOVE_TEXT_COMMAND,
          new InputEvent("beforeinput", { inputType: "deleteByDrag", cancelable: true }),
        ),
      );

      expect(shownText(mounted)).toContain("a//d");
      expect(onRemoved).not.toHaveBeenCalled();
    });
  },
);

describe("deleting after the editor switches from paragraph-structure into Standard view", () => {
  it("joins two `/` as asked, telling no one", async () => {
    const onRemoved = vi.fn<UnstorableTextRemovedHandler>();
    const mounted = await mountInView(usjWith(["a/b/c"]), editorView("paragraph-structure"), {
      onUnstorableTextRemoved: onRemoved,
    });
    try {
      await mounted.rerenderWithView(editorView("standard"));
      await select(mounted, { text: "a/b/c", offset: 3 });

      await press(mounted, "Backspace");

      expect(shownText(mounted)).toContain("a//c");
      expect(onRemoved).not.toHaveBeenCalled();
    } finally {
      mounted.unmount();
    }
  });
});
