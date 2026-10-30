/**
 * The editor's own clipboard format reaches a paste through the copy's html.
 *
 * `navigator.clipboard.read()`, which Ctrl+V, the context menu's Paste and `EditorRef.paste()` start
 * with, returns plain text and html alone. So these tests paste what that read delivers, with no
 * `application/x-lexical-editor` flavor: a hidden-marker view's node copy rides an attribute of its
 * html, and a view that shows markers marks its html as USFM.
 */
import { editorView, MountedEditor, mountInView } from "./editorViews.test-helpers";
import { usfmToClipboardHtml } from "./markerEdit/whitespaceDisplay.plugin.utils";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $setSelection,
  COPY_COMMAND,
  PASTE_COMMAND,
  TextNode,
} from "lexical";
import {
  HIDDEN_VIEW_CLIPBOARD_NAMESPACE,
  NODE_COPY_HTML_ATTRIBUTE,
  StructureProtectionMode,
  UnstorableTextRemovedHandler,
} from "shared-react";

const LEXICAL_FLAVOR = "application/x-lexical-editor";

const LEMMA = 'a"b<c>&amp;\\d \u05D1\u05B0\u05BC\u05E8\u05B5\u05D0\u05E9\u05C1\u05B4\u05D9\u05EA';
const WORD = { type: "char", marker: "w", content: ["word"], lemma: LEMMA } as MarkerObject;
const NOTE = {
  type: "note",
  marker: "f",
  caller: "+",
  category: "People",
  content: [{ type: "char", marker: "ft", content: ["note text"] }],
} as MarkerObject;

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
        "first ",
        WORD,
        " then ",
        NOTE,
        " last",
      ],
    },
  ],
};

interface Flavors {
  [type: string]: string;
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

/** The text node holding `text`, which must be the only one. */
function $textNode(text: string): TextNode {
  const hits = $getRoot()
    .getAllTextNodes()
    .filter((node) => node.getType() === "text" && node.getTextContent().includes(text));
  if (hits.length !== 1) throw new Error(`${hits.length} text nodes hold "${text}", not one`);
  return hits[0];
}

/** Selects from `fromOffset` into `from` to `toOffset` into `to`. */
async function select(
  { lexical }: MountedEditor,
  from: string,
  fromOffset: number,
  to: string,
  toOffset: number,
): Promise<void> {
  await act(async () =>
    lexical.update(
      () => {
        const selection = $createRangeSelection();
        const fromNode = $textNode(from);
        const toNode = $textNode(to);
        selection.anchor.set(
          fromNode.getKey(),
          fromNode.getTextContent().indexOf(from) + fromOffset,
          "text",
        );
        selection.focus.set(
          toNode.getKey(),
          toNode.getTextContent().indexOf(to) + toOffset,
          "text",
        );
        $setSelection(selection);
      },
      { discrete: true },
    ),
  );
}

async function copy({ lexical }: MountedEditor): Promise<Map<string, string>> {
  const store = new Map<string, string>();
  await act(async () =>
    lexical.update(() => {
      lexical.dispatchCommand(COPY_COMMAND, clipboardEvent(store));
    }),
  );
  await settle();
  return store;
}

async function paste({ lexical }: MountedEditor, flavors: Flavors): Promise<void> {
  await act(async () =>
    lexical.update(() => {
      lexical.dispatchCommand(PASTE_COMMAND, clipboardEvent(new Map(Object.entries(flavors))));
    }),
  );
  await settle();
}

/** What an async clipboard read delivers of `store`. */
function ctrlV(store: Map<string, string>): Flavors {
  return { "text/html": store.get("text/html") ?? "", "text/plain": store.get("text/plain") ?? "" };
}

function paragraph({ ref }: MountedEditor): MarkerObject {
  const para = ref.current
    ?.getUsj()
    ?.content.find(
      (item): item is MarkerObject => typeof item !== "string" && item.type === "para",
    );
  if (!para) throw new Error("no paragraph");
  return para;
}

async function mount(
  viewName: string,
  structureProtectionMode: StructureProtectionMode = "off",
): Promise<{ mounted: MountedEditor; onRemoved: ReturnType<typeof vi.fn> }> {
  const onRemoved = vi.fn<UnstorableTextRemovedHandler>();
  const mounted = await mountInView(usj, editorView(viewName), {
    structureProtectionMode,
    onUnstorableTextRemoved: onRemoved,
  });
  return { mounted, onRemoved };
}

const PROTECTIONS: StructureProtectionMode[] = ["off", "guarded", "protected"];

describe.each(PROTECTIONS)("a hidden-marker view's copy and Ctrl+V, structure %s", (mode) => {
  it("reproduces what was copied, with no node copy flavor on the paste", async () => {
    const { mounted } = await mount("paragraph-structure", mode);
    try {
      await select(mounted, "first ", 0, " last", 5);
      const store = await copy(mounted);
      await select(mounted, " last", 5, " last", 5);

      await paste(mounted, ctrlV(store));

      expect(paragraph(mounted).content).toEqual([
        { type: "verse", marker: "v", number: "1" },
        "first ",
        WORD,
        " then ",
        NOTE,
        " lastfirst ",
        WORD,
        " then ",
        NOTE,
        " last",
      ]);
    } finally {
      mounted.unmount();
    }
  });

  it("falls back to the html when the attribute's JSON does not parse", async () => {
    const { mounted } = await mount("paragraph-structure", mode);
    try {
      await select(mounted, " last", 5, " last", 5);

      await paste(mounted, {
        "text/html": `<span ${NODE_COPY_HTML_ATTRIBUTE}="{not json"><span>pasted</span></span>`,
        "text/plain": "plain",
      });

      expect(paragraph(mounted).content?.at(-1)).toBe(" lastpasted");
    } finally {
      mounted.unmount();
    }
  });

  it("falls back to the plain text when a malformed attribute is all the html holds", async () => {
    const { mounted } = await mount("paragraph-structure", mode);
    try {
      await select(mounted, " last", 5, " last", 5);

      await paste(mounted, {
        "text/html": `<span ${NODE_COPY_HTML_ATTRIBUTE}="{not json"></span>`,
        "text/plain": "plain",
      });

      expect(paragraph(mounted).content?.at(-1)).toBe(" lastplain");
    } finally {
      mounted.unmount();
    }
  });

  it("falls back to the html when the attribute's node copy makes no nodes", async () => {
    const { mounted } = await mount("paragraph-structure", mode);
    try {
      await select(mounted, " last", 5, " last", 5);
      const nodeCopy = JSON.stringify({
        namespace: HIDDEN_VIEW_CLIPBOARD_NAMESPACE,
        nodes: [{ type: "not-a-registered-node", version: 1 }],
      }).replaceAll('"', "&quot;");

      await paste(mounted, {
        "text/html": `<span ${NODE_COPY_HTML_ATTRIBUTE}="${nodeCopy}"><span>pasted</span></span>`,
        "text/plain": "plain",
      });

      expect(paragraph(mounted).content?.at(-1)).toBe(" lastpasted");
    } finally {
      mounted.unmount();
    }
  });

  it("takes an ordinary paste's html as before", async () => {
    const { mounted } = await mount("paragraph-structure", mode);
    try {
      await select(mounted, " last", 5, " last", 5);

      await paste(mounted, { "text/html": "<span>pasted</span>", "text/plain": "plain" });

      expect(paragraph(mounted).content?.at(-1)).toBe(" lastpasted");
    } finally {
      mounted.unmount();
    }
  });

  it("still filters a `//` the node copy holds, telling the host once", async () => {
    const { mounted, onRemoved } = await mount("paragraph-structure", mode);
    try {
      await select(mounted, " last", 5, " last", 5);
      const nodeCopy = JSON.stringify({
        namespace: HIDDEN_VIEW_CLIPBOARD_NAMESPACE,
        nodes: [
          {
            type: "text",
            version: 1,
            text: "a//b",
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
          },
        ],
      }).replaceAll('"', "&quot;");

      await paste(mounted, {
        "text/html": `<span ${NODE_COPY_HTML_ATTRIBUTE}="${nodeCopy}"><span>a//b</span></span>`,
        "text/plain": "a//b",
      });

      expect(paragraph(mounted).content?.at(-1)).toBe(" lastab");
      expect(onRemoved).toHaveBeenCalledExactlyOnceWith({ source: "paste", removed: ["//"] });
    } finally {
      mounted.unmount();
    }
  });
});

describe("the html a hidden-marker view's copy writes", () => {
  it("holds the node copy flavor's bytes in its attribute, and the same shown text", async () => {
    const { mounted } = await mount("paragraph-structure");
    try {
      await select(mounted, "first ", 0, " last", 5);

      const store = await copy(mounted);

      const { body } = new DOMParser().parseFromString(store.get("text/html") ?? "", "text/html");
      const carrier = body.querySelector(`[${NODE_COPY_HTML_ATTRIBUTE}]`);
      expect(carrier?.getAttribute(NODE_COPY_HTML_ATTRIBUTE)).toBe(store.get(LEXICAL_FLAVOR));
      expect(JSON.parse(store.get(LEXICAL_FLAVOR) ?? "{}").namespace).toBe(
        HIDDEN_VIEW_CLIPBOARD_NAMESPACE,
      );
      expect(body.textContent).toContain("first word then");
    } finally {
      mounted.unmount();
    }
  });
});

describe.each(PROTECTIONS)(
  "a view that shows markers, copied and pasted into paragraph-structure with Ctrl+V, structure %s",
  (mode) => {
    const SOURCE_USFM = "1 \\ft TR and ";

    it("loses the marker tokens of Standard view's copy, through its html and plain text alone", async () => {
      const source = await mount("standard");
      let store: Map<string, string>;
      try {
        await select(source.mounted, "first ", 0, " then ", 6);
        store = await copy(source.mounted);
        source.mounted.unmount();
      } catch (error) {
        source.mounted.unmount();
        throw error;
      }
      expect(store.get("text/plain")).toContain("\\w ");
      const { mounted, onRemoved } = await mount("paragraph-structure", mode);
      try {
        await select(mounted, " last", 5, " last", 5);

        await paste(mounted, ctrlV(store));

        const text = JSON.stringify(paragraph(mounted).content);
        expect(text).toContain(" lastfirst word");
        expect(text).not.toContain("w word");
        expect(onRemoved).not.toHaveBeenCalled();
      } finally {
        mounted.unmount();
      }
    });

    it("loses the marker tokens of a row editor's copy of note text", async () => {
      const { mounted, onRemoved } = await mount("paragraph-structure", mode);
      try {
        await select(mounted, " last", 5, " last", 5);

        await paste(mounted, {
          "text/html": usfmToClipboardHtml(SOURCE_USFM),
          "text/plain": SOURCE_USFM,
        });

        expect(paragraph(mounted).content?.at(-1)).toBe(" last1 TR and ");
        expect(onRemoved).not.toHaveBeenCalled();
      } finally {
        mounted.unmount();
      }
    });

    it("changes nothing for a copy of nothing but marker tokens, over a selection", async () => {
      const { mounted, onRemoved } = await mount("paragraph-structure", mode);
      try {
        const before = paragraph(mounted).content;
        await select(mounted, " last", 1, " last", 3);

        await paste(mounted, {
          "text/html": usfmToClipboardHtml("\\ft "),
          "text/plain": "\\ft ",
        });

        expect(paragraph(mounted).content).toEqual(before);
        expect(onRemoved).not.toHaveBeenCalled();
      } finally {
        mounted.unmount();
      }
    });
  },
);

describe("Standard view's own Ctrl+V", () => {
  const markLessly = (html: string) => {
    const dom = new DOMParser().parseFromString(html, "text/html");
    dom.querySelectorAll("p").forEach((para) => {
      [...para.attributes].forEach(({ name }) => para.removeAttribute(name));
    });
    return dom.body.innerHTML;
  };

  it.each(PROTECTIONS)(
    "pastes a copy exactly as it would without the html's mark, structure %s",
    async (mode) => {
      const results: unknown[] = [];
      for (const prepare of [(html: string) => html, markLessly]) {
        // Each paste in an editor of its own, the two compared to each other.
        const { mounted } = await mount("standard", mode);
        try {
          await select(mounted, "first ", 0, " then ", 6);
          const store = await copy(mounted);
          await select(mounted, " last", 5, " last", 5);
          const flavors = ctrlV(store);
          await paste(mounted, { ...flavors, "text/html": prepare(flavors["text/html"]) });
          results.push(mounted.ref.current?.getUsj());
        } finally {
          mounted.unmount();
        }
      }

      expect(results[0]).toEqual(results[1]);
      expect(JSON.stringify(results[0]).split(" then ")).toHaveLength(3);
    },
  );

  it("marks its html without changing the text a consumer reads", () => {
    const html = usfmToClipboardHtml("\\p one\n\\q1 two");

    const { body } = new DOMParser().parseFromString(html, "text/html");

    expect(body.textContent).toBe("\\p one\\q1 two");
    expect(body.querySelectorAll("p")).toHaveLength(2);
  });
});

describe("a Standard view copy through every flavor, as a native paste delivers", () => {
  it("still does not rebuild Standard view's nodes in a hidden-marker view", async () => {
    const source = await mount("standard");
    let store: Map<string, string>;
    try {
      await select(source.mounted, "first ", 0, " then ", 6);
      store = await copy(source.mounted);
    } finally {
      source.mounted.unmount();
    }
    expect(JSON.parse(store.get(LEXICAL_FLAVOR) ?? "{}").namespace).toBe("platformEditor");
    const native = await mount("paragraph-structure");
    const ctrlVMount = await mount("paragraph-structure");
    try {
      await select(native.mounted, " last", 5, " last", 5);
      await paste(native.mounted, Object.fromEntries(store));
      await select(ctrlVMount.mounted, " last", 5, " last", 5);
      await paste(ctrlVMount.mounted, ctrlV(store));

      expect(paragraph(native.mounted).content).toEqual(paragraph(ctrlVMount.mounted).content);
    } finally {
      native.mounted.unmount();
      ctrlVMount.mounted.unmount();
    }
  });
});
