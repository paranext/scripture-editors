/**
 * What a copy or cut in a hidden-marker view writes to the clipboard: the text the view shows,
 * without a paragraph's gutter marker glyph or the text of a construct the view hides (a figure's
 * caption), and with the text of a collapsed note, which a plain-text paste needs; and the view's
 * own node copy, tagged so only a hidden-marker view reads it back.
 */
import { editorView, enabledViews, mountInView } from "./editorViews.test-helpers";
import { $hiddenViewLexicalFlavor } from "./hiddenViewCopy.utils";
import { $generateJSONFromSelectedNodes } from "@lexical/clipboard";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $setSelection,
  COPY_COMMAND,
  CUT_COMMAND,
  LexicalEditor,
  TextNode,
} from "lexical";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { HIDDEN_VIEW_CLIPBOARD_NAMESPACE, StructureProtectionMode } from "shared-react";

// Located relative to the working directory, as the other testUSFM corpus suites do: the platform
// project root under nx, the repo root otherwise.
const CORPUS_DIR = [
  "../../libs/shared/src/converters/usfm/testUsfmCorpus",
  "libs/shared/src/converters/usfm/testUsfmCorpus",
].find((dir) => existsSync(dir));

function readFixture(name: string): Usj {
  if (!CORPUS_DIR) throw new Error("testUsfmCorpus fixture directory not found from cwd");
  return JSON.parse(readFileSync(join(CORPUS_DIR, name), "utf8")) as Usj;
}

const matthew = readFixture("web-matthew-1-and-2.usj");
const samuel = readFixture("testUSFM-2SA-1.usj");

const LEXICAL_FLAVOR = "application/x-lexical-editor";

interface SerializedNode {
  type: string;
  children?: SerializedNode[];
  [key: string]: unknown;
}

/** The node copy a copy wrote: its namespace and its nodes, every depth flattened. */
function nodeCopy(store: Map<string, string>): { namespace: string; nodes: SerializedNode[] } {
  const payload = JSON.parse(store.get(LEXICAL_FLAVOR) ?? "{}") as {
    namespace: string;
    nodes: SerializedNode[];
  };
  const flatten = (nodes: SerializedNode[]): SerializedNode[] =>
    nodes.flatMap((node) => [node, ...flatten(node.children ?? [])]);
  return { namespace: payload.namespace, nodes: flatten(payload.nodes ?? []) };
}

/** The one plain text node whose text `matches`. */
function $textNode(matches: (text: string) => boolean): TextNode {
  const hits = $getRoot()
    .getAllTextNodes()
    .filter((node) => node.getType() === "text" && matches(node.getTextContent()));
  if (hits.length !== 1) throw new Error(`${hits.length} text nodes match, not one`);
  return hits[0];
}

/** A text point: the text node holding `text`, at `offset` into `text` (negative counts from its
 * end). */
interface At {
  text: string;
  offset: number;
}

function $point({ text, offset }: At): [TextNode, number] {
  const node = $textNode((content) => content.includes(text));
  const start = node.getTextContent().indexOf(text);
  return [node, start + (offset < 0 ? text.length + offset : offset)];
}

async function select(editor: LexicalEditor, from: At, to: At = from): Promise<void> {
  await act(async () =>
    editor.update(
      () => {
        const [anchorNode, anchorOffset] = $point(from);
        const [focusNode, focusOffset] = $point(to);
        const selection = $createRangeSelection();
        selection.anchor.set(anchorNode.getKey(), anchorOffset, "text");
        selection.focus.set(focusNode.getKey(), focusOffset, "text");
        $setSelection(selection);
      },
      { discrete: true },
    ),
  );
}

function clipboardEvent(store: Map<string, string>): ClipboardEvent {
  const event = new ClipboardEvent("copy", { bubbles: true, cancelable: true });
  Object.defineProperty(event, "clipboardData", {
    value: {
      get types() {
        return [...store.keys()];
      },
      files: [],
      getData: (type: string) => store.get(type) ?? "",
      setData: (type: string, data: string) => store.set(type, data),
      clearData: () => store.clear(),
    },
  });
  return event;
}

async function settle(): Promise<void> {
  await act(async () => {
    for (let i = 0; i < 3; i += 1) await new Promise((resolve) => setTimeout(resolve, 0));
  });
}

/** Dispatches `command` with a clipboard event; what reached the clipboard, and whether the
 * command was claimed. */
async function dispatchClipboard(
  editor: LexicalEditor,
  command: typeof COPY_COMMAND | typeof CUT_COMMAND,
): Promise<{ store: Map<string, string>; isClaimed: boolean }> {
  const store = new Map<string, string>();
  let isClaimed = false;
  await act(async () =>
    editor.update(() => {
      isClaimed = editor.dispatchCommand(command, clipboardEvent(store));
    }),
  );
  await settle();
  return { store, isClaimed };
}

/** The end of Matthew 2:6's second line and the start of its third, a `\q2` then a `\q1`. */
const ACROSS_PARAGRAPHS = {
  from: { text: "princes of Judah;", offset: -2 },
  to: { text: "for out of you", offset: 2 },
};

const MATTHEW_LINE_2 = matthew.content[23] as MarkerObject;
const MATTHEW_LINE_3 = matthew.content[24] as MarkerObject;

describe("HiddenViewCopyPlugin", () => {
  it("paragraph-structure copy across a paragraph break writes no gutter glyph text", async () => {
    const mounted = await mountInView(matthew, editorView("paragraph-structure"));
    try {
      await select(mounted.lexical, ACROSS_PARAGRAPHS.from, ACROSS_PARAGRAPHS.to);
      const { store } = await dispatchClipboard(mounted.lexical, COPY_COMMAND);
      expect(store.get("text/plain")).toBe("h;\nfo");
      const html = store.get("text/html") ?? "";
      expect(html).toContain("h;");
      expect(html).toContain("fo");
      expect(html).not.toContain('data-text-type="marker"');
      const lexicalFlavor = store.get(LEXICAL_FLAVOR);
      expect(lexicalFlavor).toBeTruthy();
      expect(JSON.parse(lexicalFlavor ?? "{}").nodes.length).toBeGreaterThan(0);
    } finally {
      mounted.unmount();
    }
  });

  // 2 Samuel 1's second figure paragraph: text, a figure with a caption, text.
  const figureParagraph = (samuel.content[92] as MarkerObject).content ?? [];
  const beforeFigure = figureParagraph[0] as string;
  const afterFigure = figureParagraph[2] as string;
  const figureViews = enabledViews(["formatted", "paragraph-structure", "preview"] as const);

  it.each(figureViews)("%s copy over a figure leaves out its caption", async (viewName) => {
    const mounted = await mountInView(samuel, editorView(viewName));
    try {
      await act(async () =>
        mounted.lexical.update(
          () => {
            const start = $textNode((text) => text === beforeFigure);
            const end = $textNode((text) => text === afterFigure);
            const selection = $createRangeSelection();
            selection.anchor.set(start.getKey(), 0, "text");
            selection.focus.set(end.getKey(), end.getTextContentSize(), "text");
            $setSelection(selection);
          },
          { discrete: true },
        ),
      );
      const { store } = await dispatchClipboard(mounted.lexical, COPY_COMMAND);
      expect(store.get("text/plain")).toBe(beforeFigure + afterFigure);
    } finally {
      mounted.unmount();
    }
  });

  it.each(enabledViews(["formatted", "paragraph-structure"] as const))(
    "%s copy writes its node copy tagged for hidden-marker views, without gutter glyphs",
    async (viewName) => {
      const mounted = await mountInView(matthew, editorView(viewName));
      try {
        await select(mounted.lexical, ACROSS_PARAGRAPHS.from, ACROSS_PARAGRAPHS.to);
        const { store } = await dispatchClipboard(mounted.lexical, COPY_COMMAND);
        const { namespace, nodes } = nodeCopy(store);
        expect(namespace).toBe(HIDDEN_VIEW_CLIPBOARD_NAMESPACE);
        expect(nodes.filter((node) => node.type === "para")).toHaveLength(2);
        expect(nodes.filter((node) => node.type === "immutable-typed-text")).toEqual([]);
      } finally {
        mounted.unmount();
      }
    },
  );

  // The node copy is built by a walk of its own, which must stay Lexical's own serialization but
  // for the two things it changes; a Lexical upgrade that changes Lexical's walk fails here.
  it("writes Lexical's own serialization where there is no gutter glyph or childless construct", async () => {
    // The formatted view builds no gutter glyphs, and Matthew holds no unknown construct.
    const mounted = await mountInView(matthew, editorView("formatted"));
    try {
      await select(
        mounted.lexical,
        { text: "But when he thought about these things", offset: 4 },
        { text: "is of the Holy Spirit. ", offset: -3 },
      );
      const { ours, lexicals } = mounted.lexical.read(() => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) throw new Error("no range selection");
        return {
          ours: JSON.parse($hiddenViewLexicalFlavor(selection) ?? "{}") as { nodes: unknown[] },
          lexicals: $generateJSONFromSelectedNodes(mounted.lexical, selection),
        };
      });
      expect(JSON.stringify(lexicals.nodes)).toContain('"note"');
      expect(JSON.stringify(lexicals.nodes)).not.toContain("isGutterMarker");
      // As Lexical's own copy writes them (`$getLexicalContent` stringifies them too).
      expect(ours.nodes).toEqual(JSON.parse(JSON.stringify(lexicals.nodes)));
    } finally {
      mounted.unmount();
    }
  });

  // 2 Samuel 1's first figure paragraph: text, a figure with no caption, text.
  const captionlessParagraph = (samuel.content[91] as MarkerObject).content ?? [];
  const beforeCaptionless = captionlessParagraph[0] as string;
  const captionless = captionlessParagraph[1] as MarkerObject;

  it.each(enabledViews(["formatted", "paragraph-structure"] as const))(
    "%s copy over a caption-less figure keeps the figure in its node copy",
    async (viewName) => {
      const mounted = await mountInView(samuel, editorView(viewName));
      try {
        await select(
          mounted.lexical,
          { text: beforeCaptionless, offset: -4 },
          { text: captionlessParagraph[2] as string, offset: 4 },
        );
        const { store } = await dispatchClipboard(mounted.lexical, COPY_COMMAND);
        const figures = nodeCopy(store).nodes.filter((node) => node.tag === "figure");
        expect(figures).toHaveLength(1);
        expect(figures[0]).toMatchObject({
          marker: captionless.marker,
          unknownAttributes: {
            file: Reflect.get(captionless, "file"),
            size: Reflect.get(captionless, "size"),
            ref: Reflect.get(captionless, "ref"),
          },
        });
      } finally {
        mounted.unmount();
      }
    },
  );

  it("a copy ending inside a figure's caption writes no node copy", async () => {
    const mounted = await mountInView(samuel, editorView("formatted"));
    try {
      await act(async () =>
        mounted.lexical.update(
          () => {
            const start = $textNode((text) => text === beforeFigure);
            const caption = $textNode((text) => text.startsWith("Caption"));
            const selection = $createRangeSelection();
            selection.anchor.set(start.getKey(), 0, "text");
            selection.focus.set(caption.getKey(), 3, "text");
            $setSelection(selection);
          },
          { discrete: true },
        ),
      );
      const { store } = await dispatchClipboard(mounted.lexical, COPY_COMMAND);
      expect(store.get("text/plain")).toBeTruthy();
      expect(store.has(LEXICAL_FLAVOR)).toBe(false);
    } finally {
      mounted.unmount();
    }
  });

  it("a copy across a chapter line writes no node copy", async () => {
    const mounted = await mountInView(matthew, editorView("paragraph-structure"));
    try {
      await select(
        mounted.lexical,
        { text: "He named him Jesus.", offset: -2 },
        { text: "Now when Jesus was born in Bethlehem", offset: 2 },
      );
      const { store } = await dispatchClipboard(mounted.lexical, COPY_COMMAND);
      expect(store.get("text/plain")).toBeTruthy();
      expect(store.has(LEXICAL_FLAVOR)).toBe(false);
    } finally {
      mounted.unmount();
    }
  });

  it("copy over a collapsed footnote keeps the note text", async () => {
    const mounted = await mountInView(matthew, editorView("paragraph-structure"));
    try {
      await select(
        mounted.lexical,
        { text: "But when he thought about these things", offset: 0 },
        { text: "is of the Holy Spirit. ", offset: -1 },
      );
      const { store } = await dispatchClipboard(mounted.lexical, COPY_COMMAND);
      const plain = store.get("text/plain") ?? "";
      expect(plain).toContain("But when he thought about these things, behold,");
      expect(plain).toContain("“Behold”, from");
      expect(plain).toContain("is of the Holy Spirit.");
    } finally {
      mounted.unmount();
    }
  });

  it("over the copy limit, writes the shown text only", async () => {
    const mounted = await mountInView(matthew, editorView("paragraph-structure"), {
      copyLimit: 20,
    });
    try {
      await select(
        mounted.lexical,
        { text: "of Judah;", offset: 0 },
        { text: "for out of you shall come a governor", offset: 36 },
      );
      const { store } = await dispatchClipboard(mounted.lexical, COPY_COMMAND);
      // Twenty characters of the text the view shows; the `\q1 ` glyph counts for nothing.
      expect(store.get("text/plain")).toBe("of Judah;\nfor out of");
      expect(store.has("text/html")).toBe(false);
      expect(store.has(LEXICAL_FLAVOR)).toBe(false);
    } finally {
      mounted.unmount();
    }
  });

  it("a collapsed selection copies nothing", async () => {
    const mounted = await mountInView(matthew, editorView("paragraph-structure"));
    try {
      await select(mounted.lexical, { text: "princes of Judah;", offset: 3 });
      const { store, isClaimed } = await dispatchClipboard(mounted.lexical, COPY_COMMAND);
      expect(isClaimed).toBe(true);
      expect(store.size).toBe(0);
    } finally {
      mounted.unmount();
    }
  });

  it.each(["guarded", "off"] as StructureProtectionMode[])(
    "cut removes exactly the copied range (%s)",
    async (structureProtectionMode) => {
      const mounted = await mountInView(matthew, editorView("paragraph-structure"), {
        structureProtectionMode,
      });
      try {
        await select(mounted.lexical, ACROSS_PARAGRAPHS.from, ACROSS_PARAGRAPHS.to);
        const { store } = await dispatchClipboard(mounted.lexical, CUT_COMMAND);
        expect(store.get("text/plain")).toBe("h;\nfo");
        const content = mounted.ref.current?.getUsj()?.content ?? [];
        const line2Text = MATTHEW_LINE_2.content?.[0] as string;
        const line3Text = MATTHEW_LINE_3.content?.[0] as string;
        expect(content).toEqual([
          ...matthew.content.slice(0, 23),
          { ...MATTHEW_LINE_2, content: [line2Text.slice(0, -2) + line3Text.slice(2)] },
          ...matthew.content.slice(25),
        ]);
      } finally {
        mounted.unmount();
      }
    },
  );

  it("Standard view copy is unchanged", async () => {
    const mounted = await mountInView(matthew, editorView("standard"));
    try {
      await select(mounted.lexical, ACROSS_PARAGRAPHS.from, ACROSS_PARAGRAPHS.to);
      const { store } = await dispatchClipboard(mounted.lexical, COPY_COMMAND);
      // Standard view copies USFM, the paragraph marker included.
      expect(store.get("text/plain")).toBe("h;\n\\q1 fo");
    } finally {
      mounted.unmount();
    }
  });
});
