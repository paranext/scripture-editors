/**
 * An optional line break pasted or dropped into a view that hides markers. The file stores the
 * break as a bare `//`, so against a `/` it would save `///`, which reads back differently: there
 * the break goes, with the notice any removed `//` gets. Anywhere else it goes in, and Standard
 * view, which shows markers, takes it as it is.
 */
import { editorView, MountedEditor, mountInView } from "./editorViews.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $setSelection,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  COPY_COMMAND,
  PASTE_COMMAND,
  SerializedLexicalNode,
  TextNode,
} from "lexical";
import {
  htmlWithNodeCopy,
  LEXICAL_CLIPBOARD_TYPE,
  StructureProtectionMode,
  UnstorableTextRemovedHandler,
} from "shared-react";

const PASTE_INTO = "two a/ and /b end";

const usj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: [] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [
        { type: "verse", marker: "v", number: "1" },
        "one",
        { type: "optbreak" },
        PASTE_INTO,
      ],
    },
  ],
};

interface Flavors {
  [type: string]: string;
}

/** A stand-in for a clipboard's or drop's data: jsdom has no `DataTransfer`. */
function transfer(store: Map<string, string>): DataTransfer {
  return {
    get types() {
      return [...store.keys()];
    },
    files: [],
    getData: (type: string) => store.get(type) ?? "",
    setData: (type: string, data: string) => store.set(type, data),
    clearData: () => store.clear(),
  } as unknown as DataTransfer;
}

async function settle(): Promise<void> {
  await act(async () => {
    for (let i = 0; i < 3; i += 1) await new Promise((resolve) => setTimeout(resolve, 0));
  });
}

/** The text node whose text starts with `text`, which must be the only one. */
function $textNode(text: string): TextNode {
  const hits = $getRoot()
    .getAllTextNodes()
    .filter((node) => node.getType() === "text" && node.getTextContent().startsWith(text));
  if (hits.length !== 1) throw new Error(`${hits.length} text nodes start with "${text}", not one`);
  return hits[0];
}

/** Selects from `fromOffset` into the text starting `from` to `toOffset` into the one starting `to`. */
async function select(
  { lexical }: MountedEditor,
  from: string,
  fromOffset: number,
  to = from,
  toOffset = fromOffset,
): Promise<void> {
  await act(async () =>
    lexical.update(
      () => {
        const selection = $createRangeSelection();
        selection.anchor.set($textNode(from).getKey(), fromOffset, "text");
        selection.focus.set($textNode(to).getKey(), toOffset, "text");
        $setSelection(selection);
      },
      { discrete: true },
    ),
  );
}

/** Copies `e`, the optional break and `t`, from `one` to `two`. */
async function copyOptbreak(mounted: MountedEditor): Promise<Map<string, string>> {
  await select(mounted, "one", 2, "two", 1);
  const store = new Map<string, string>();
  const event = new ClipboardEvent("copy", { bubbles: true, cancelable: true });
  Object.defineProperty(event, "clipboardData", { value: transfer(store) });
  await act(async () =>
    mounted.lexical.update(() => {
      mounted.lexical.dispatchCommand(COPY_COMMAND, event);
    }),
  );
  await settle();
  return store;
}

/**
 * A copy of `nodes` in the hidden-marker views' node copy, built from a real copy of an optional
 * break so its serialized shape is the editor's own: `|` stands for the break, any other string for
 * text.
 */
function nodeCopyOf(copied: Map<string, string>, nodes: string[]): string {
  const { namespace, nodes: serialized } = JSON.parse(copied.get(LEXICAL_CLIPBOARD_TYPE) ?? "") as {
    namespace: string;
    nodes: (SerializedLexicalNode & { tag?: string; text?: string })[];
  };
  const optbreak = serialized.find((node) => node.tag === "optbreak");
  const text = serialized.find((node) => node.type === "text");
  if (!optbreak || !text) throw new Error("the copy holds no optional break, or no text");
  return JSON.stringify({
    namespace,
    nodes: nodes.map((node) => (node === "|" ? optbreak : { ...text, text: node })),
  });
}

/** How a paste or drop delivers a node copy. */
const ROUTES = {
  /** A paste the browser runs, carrying the node copy as its own flavor. */
  "a paste of the node copy flavor": async (mounted: MountedEditor, nodeCopy: string) =>
    paste(mounted, { [LEXICAL_CLIPBOARD_TYPE]: nodeCopy, "text/html": "", "text/plain": "" }),
  /** Ctrl+V, whose async clipboard read returns html and plain text alone. */
  "Ctrl+V, through the html": async (mounted: MountedEditor, nodeCopy: string) =>
    paste(mounted, { "text/html": htmlWithNodeCopy("<span>x</span>", nodeCopy), "text/plain": "" }),
  "a drop": async ({ lexical }: MountedEditor, nodeCopy: string) => {
    const event = {
      inputType: "insertFromDrop",
      dataTransfer: transfer(new Map([[LEXICAL_CLIPBOARD_TYPE, nodeCopy]])),
      preventDefault: vi.fn(),
    };
    await act(async () => {
      lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, event as unknown as InputEvent);
    });
    await settle();
  },
} as const;

async function paste({ lexical }: MountedEditor, flavors: Flavors): Promise<void> {
  const event = new ClipboardEvent("paste", { bubbles: true, cancelable: true });
  Object.defineProperty(event, "clipboardData", {
    value: transfer(new Map(Object.entries(flavors))),
  });
  await act(async () =>
    lexical.update(() => {
      lexical.dispatchCommand(PASTE_COMMAND, event);
    }),
  );
  await settle();
}

/** The saved paragraph's content, `optbreak` for each optional break, verses left out. */
function savedContent({ ref }: MountedEditor, optbreak = "|"): string {
  const para = ref.current
    ?.getUsj()
    ?.content.find(
      (item): item is MarkerObject => typeof item !== "string" && item.type === "para",
    );
  if (!para) throw new Error("no paragraph");
  const shape = (content: MarkerContent[] | undefined): string =>
    (content ?? [])
      .map((item) => {
        if (typeof item === "string") return item;
        if (item.type === "optbreak") return optbreak;
        return item.type === "verse" ? "" : shape(item.content);
      })
      .join("");
  return shape(para.content);
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
  return { mounted, onRemoved };
}

const AFTER_SLASH = "two a/".length;
const BEFORE_SLASH = "two a/ and ".length;
const BESIDE_TEXT = "two".length;

describe.each(["paragraph-structure", "formatted"])(
  "an optional break put into %s view",
  (view) => {
    describe.each<StructureProtectionMode>(["off", "guarded", "protected"])(
      "with structure %s",
      (mode) => {
        describe.each(Object.keys(ROUTES) as (keyof typeof ROUTES)[])("by %s", (route) => {
          it.each<[string, number, string[], string]>([
            ["after the text's `a/`", AFTER_SLASH, ["|"], "one|two a/ and /b end"],
            ["before the text's `/b`", BEFORE_SLASH, ["|"], "one|two a/ and /b end"],
            [
              "between its own `x/` and `y`",
              BESIDE_TEXT,
              ["x/", "|", "y"],
              "one|twox/y a/ and /b end",
            ],
          ])("goes %s, with the notice", async (_, offset, copied, saved) => {
            const { mounted, onRemoved } = await mount(view, mode);
            try {
              const nodeCopy = nodeCopyOf(await copyOptbreak(mounted), copied);
              await select(mounted, "two", offset);

              await ROUTES[route](mounted, nodeCopy);

              expect(savedContent(mounted)).toBe(saved);
              expect(onRemoved).toHaveBeenCalledExactlyOnceWith({
                source: route === "a drop" ? "drop" : "paste",
                removed: ["//"],
              });
            } finally {
              mounted.unmount();
            }
          });

          it.each<[string, number, string[], string]>([
            ["beside plain text", BESIDE_TEXT, ["|"], "one|two| a/ and /b end"],
            ["beside another", BESIDE_TEXT, ["x", "|", "|", "y"], "one|twox||y a/ and /b end"],
          ])("stays %s, telling no one", async (_, offset, copied, saved) => {
            const { mounted, onRemoved } = await mount(view, mode);
            try {
              const nodeCopy = nodeCopyOf(await copyOptbreak(mounted), copied);
              await select(mounted, "two", offset);

              await ROUTES[route](mounted, nodeCopy);

              expect(savedContent(mounted)).toBe(saved);
              expect(onRemoved).not.toHaveBeenCalled();
            } finally {
              mounted.unmount();
            }
          });
        });
      },
    );
  },
);

// Standard view shows the break as the `//` the file stores, so what is put in is what is saved.
describe("a `//` pasted into Standard view", () => {
  it("goes in after a `/` as it is, telling no one", async () => {
    const { mounted, onRemoved } = await mount("standard", "off");
    try {
      await select(mounted, "two", AFTER_SLASH);

      await paste(mounted, { "text/plain": "//" });

      expect(savedContent(mounted, "//")).toBe("one//two a/// and /b end");
      expect(onRemoved).not.toHaveBeenCalled();
    } finally {
      mounted.unmount();
    }
  });
});
