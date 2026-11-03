/**
 * Select All in a hidden-marker view takes in the book (`\id`) line and the chapter line, which USFM
 * allows once each per chapter document. A copy of it carries both, and a paste or cut must neither
 * add a second one nor remove the ones there. Chapter 1 also shows the lines between them (`\h`,
 * `\mt1`, an introduction), which a paste must keep before the chapter line and the Scripture text
 * after it, so every case runs on a chapter with that front matter and on one without.
 *
 * Every paste here is what an async clipboard read delivers (Ctrl+V, the context menu's Paste):
 * html and plain text alone, the node copy riding an attribute of the html.
 */
import { editorView, MountedEditor, mountInView } from "./editorViews.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $isElementNode,
  $setSelection,
  COPY_COMMAND,
  CUT_COMMAND,
  PASTE_COMMAND,
  SELECT_ALL_COMMAND,
} from "lexical";
import { $isParaLikeNode } from "shared";
import {
  $placeCaretAtParaContentStart,
  NODE_COPY_HTML_ATTRIBUTE,
  StructureProtectionMode,
} from "shared-react";

const NOTE = {
  type: "note",
  marker: "f",
  caller: "+",
  category: "People",
  content: [{ type: "char", marker: "ft", content: ["note text"] }],
} as MarkerObject;

const BOOK = { type: "book", marker: "id", code: "GEN", content: ["Genesis title"] };
const CHAPTER = { type: "chapter", marker: "c", number: "1" };
const FIRST = {
  type: "para",
  marker: "p",
  content: [{ type: "verse", marker: "v", number: "1" }, "first ", NOTE, " words"],
};
const SECOND = {
  type: "para",
  marker: "q1",
  content: [{ type: "verse", marker: "v", number: "2" }, "second line"],
};

/** Chapter 1's lines between the book line and the chapter line. */
const FRONT_MATTER: MarkerContent[] = [
  { type: "para", marker: "h", content: ["Genesis"] },
  { type: "para", marker: "mt1", content: ["The Book of Genesis"] },
  { type: "para", marker: "ip", content: ["An introduction to the book."] },
];

const CHAPTERS: { name: string; front: MarkerContent[] }[] = [
  { name: "a chapter with no front matter", front: [] },
  { name: "chapter 1 with its front matter", front: FRONT_MATTER },
];

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

async function selectAll({ lexical }: MountedEditor): Promise<void> {
  await act(async () => {
    lexical.dispatchCommand(SELECT_ALL_COMMAND, new KeyboardEvent("keydown"));
  });
  await settle();
}

async function caretAtEnd({ lexical }: MountedEditor): Promise<void> {
  await act(async () => lexical.update(() => $getRoot().selectEnd(), { discrete: true }));
  await settle();
}

async function copyOrCut(
  { lexical }: MountedEditor,
  command: typeof COPY_COMMAND | typeof CUT_COMMAND,
): Promise<Map<string, string>> {
  const store = new Map<string, string>();
  await act(async () =>
    lexical.update(() => {
      lexical.dispatchCommand(command, clipboardEvent(store));
    }),
  );
  await settle();
  return store;
}

/** Pastes what an async clipboard read delivers of `store`: its html and plain text alone. */
async function ctrlV({ lexical }: MountedEditor, store: Map<string, string>): Promise<void> {
  const delivered = new Map([
    ["text/html", store.get("text/html") ?? ""],
    ["text/plain", store.get("text/plain") ?? ""],
  ]);
  await pasteFlavors({ lexical } as MountedEditor, delivered);
}

/** `html` without the node copy its attribute carries: html as another program would write it. */
function withoutNodeCopyAttribute(html: string): string {
  const dom = new DOMParser().parseFromString(html, "text/html");
  dom
    .querySelectorAll(`[${NODE_COPY_HTML_ATTRIBUTE}]`)
    .forEach((carrier) => carrier.removeAttribute(NODE_COPY_HTML_ATTRIBUTE));
  return dom.body.innerHTML;
}

async function pasteFlavors(
  { lexical }: MountedEditor,
  delivered: Map<string, string>,
): Promise<void> {
  await act(async () =>
    lexical.update(() => {
      lexical.dispatchCommand(PASTE_COMMAND, clipboardEvent(delivered));
    }),
  );
  await settle();
}

function content({ ref }: MountedEditor): MarkerContent[] {
  return ref.current?.getUsj()?.content ?? [];
}

const UNLOCKED: StructureProtectionMode[] = ["off", "guarded"];

describe.each(CHAPTERS)("Select All in $name", ({ front }) => {
  const usj: Usj = {
    type: "USJ",
    version: "3.1",
    content: [BOOK, ...front, CHAPTER, FIRST, SECOND],
  };
  /** The index of the document's chapter line. */
  const chapterAt = 1 + front.length;

  describe.each(["paragraph-structure", "formatted"])("in the %s view", (viewName) => {
    describe.each(UNLOCKED)("structure %s", (mode) => {
      let mounted: MountedEditor;
      beforeEach(async () => {
        mounted = await mountInView(usj, editorView(viewName), { structureProtectionMode: mode });
      });
      afterEach(() => mounted.unmount());

      it("copies a node copy, whose paste at the end adds no second book or chapter line", async () => {
        await selectAll(mounted);
        const store = await copyOrCut(mounted, COPY_COMMAND);
        await caretAtEnd(mounted);

        await ctrlV(mounted, store);

        // Everything goes in at the caret, the copy's front matter included: the selection the paste
        // replaces holds no chapter line, so nothing says the copy belongs on either side of one.
        // The first pasted paragraph joins the one at the caret, and the editor puts its own space
        // before a verse that now follows text.
        const [firstPasted, ...restPasted] = [...front, FIRST, SECOND] as (typeof FIRST)[];
        const joined =
          front.length > 0
            ? ["second line" + String(firstPasted.content[0])]
            : ["second line ", ...firstPasted.content];
        expect(content(mounted)).toEqual([
          BOOK,
          ...front,
          CHAPTER,
          FIRST,
          { ...SECOND, content: [SECOND.content[0], ...joined] },
          ...restPasted,
        ]);
      });

      it("copies a node copy, in the flavor and in the html", async () => {
        await selectAll(mounted);

        const store = await copyOrCut(mounted, COPY_COMMAND);

        expect(store.get("application/x-lexical-editor")).toContain("immutable-chapter");
        expect(store.get("text/html")).toContain(NODE_COPY_HTML_ATTRIBUTE);
      });

      it("pastes the html alone at the end with no second book or chapter line", async () => {
        await selectAll(mounted);
        const store = await copyOrCut(mounted, COPY_COMMAND);
        await caretAtEnd(mounted);

        await pasteFlavors(
          mounted,
          new Map([["text/html", withoutNodeCopyAttribute(store.get("text/html") ?? "")]]),
        );

        // The caret is nowhere near the chapter line, so the copy's front matter goes in there too.
        const after = content(mounted);
        expect(after.slice(0, chapterAt + 2)).toEqual([BOOK, ...front, CHAPTER, FIRST]);
        const lines = after.flatMap((item) =>
          typeof item !== "string" && (item.type !== "para" || item.marker === "id") ? [item] : [],
        );
        expect(lines).toEqual([BOOK, CHAPTER]);
        expect(JSON.stringify(after)).not.toMatch(/Genesis title.*Genesis title/);
        expect(after).toHaveLength(5 + 2 * front.length);
      });

      it("pasted right after the chapter line, puts the copy's front matter before it", async () => {
        await selectAll(mounted);
        const store = await copyOrCut(mounted, COPY_COMMAND);
        await act(async () =>
          mounted.lexical.update(
            () => {
              // Where a click at the start of the first Scripture line leaves the caret: past its
              // gutter marker glyph and its verse number.
              const line = $getRoot().getChildAtIndex(chapterAt + 1);
              if (!$isParaLikeNode(line)) throw new Error("no line after the chapter line");
              $placeCaretAtParaContentStart(line);
            },
            { discrete: true },
          ),
        );

        await ctrlV(mounted, store);

        const after = content(mounted);
        expect(after.slice(0, chapterAt + front.length + 1)).toEqual([
          BOOK,
          ...front,
          ...front,
          CHAPTER,
        ]);
        const lines = after.filter((item) => typeof item !== "string" && item.type !== "para");
        expect(lines).toEqual([BOOK, CHAPTER]);
      });

      it("pasted right before the chapter line, puts the copy's Scripture text after it", async () => {
        await selectAll(mounted);
        const store = await copyOrCut(mounted, COPY_COMMAND);
        await act(async () =>
          mounted.lexical.update(
            () => {
              // The end of the line before the chapter line: the book line when there is no front
              // matter.
              const line = $getRoot().getChildAtIndex(chapterAt - 1);
              if (!$isElementNode(line)) throw new Error("no line before the chapter line");
              line.selectEnd();
            },
            { discrete: true },
          ),
        );

        await ctrlV(mounted, store);

        expect(content(mounted)).toEqual([
          BOOK,
          ...front,
          ...front,
          CHAPTER,
          FIRST,
          SECOND,
          FIRST,
          SECOND,
        ]);
      });

      it("pastes plain text over Select All in place of everything after the chapter line", async () => {
        await selectAll(mounted);

        await pasteFlavors(mounted, new Map([["text/plain", "replacement"]]));

        expect(content(mounted)).toEqual([
          BOOK,
          CHAPTER,
          { type: "para", marker: "p", content: ["replacement"] },
        ]);
      });

      it("pastes over a selection from the book line to the chapter line at the next paragraph's start", async () => {
        await act(async () =>
          mounted.lexical.update(
            () => {
              const title = $getRoot()
                .getAllTextNodes()
                .find((node) => node.getTextContent().includes("Genesis title"));
              if (!title) throw new Error("no book title text");
              const selection = $createRangeSelection();
              selection.anchor.set(title.getKey(), 0, "text");
              selection.focus.set($getRoot().getKey(), chapterAt + 1, "element");
              $setSelection(selection);
            },
            { discrete: true },
          ),
        );

        await pasteFlavors(mounted, new Map([["text/plain", "pasted "]]));

        expect(content(mounted)).toEqual([
          BOOK,
          CHAPTER,
          { ...FIRST, content: [FIRST.content[0], "pasted first ", ...FIRST.content.slice(2)] },
          SECOND,
        ]);
      });

      it("pasted over the same Select All, leaves the document as it was", async () => {
        await selectAll(mounted);
        const store = await copyOrCut(mounted, COPY_COMMAND);
        await selectAll(mounted);

        await ctrlV(mounted, store);

        expect(content(mounted)).toEqual(usj.content);
      });

      it("cut keeps the book and chapter lines, and its paste back restores the document", async () => {
        await selectAll(mounted);
        const store = await copyOrCut(mounted, CUT_COMMAND);

        expect(content(mounted).slice(0, 2)).toEqual([BOOK, CHAPTER]);
        expect(JSON.stringify(content(mounted).slice(2))).not.toMatch(/first|second|Genesis/);

        await ctrlV(mounted, store);

        expect(content(mounted)).toEqual(usj.content);
      });
    });

    describe("structure protected", () => {
      let mounted: MountedEditor;
      beforeEach(async () => {
        mounted = await mountInView(usj, editorView(viewName), {
          structureProtectionMode: "protected",
        });
      });
      afterEach(() => mounted.unmount());

      it("refuses a paste over the selection", async () => {
        await selectAll(mounted);
        const store = await copyOrCut(mounted, COPY_COMMAND);
        await selectAll(mounted);

        await ctrlV(mounted, store);

        expect(content(mounted)).toEqual(usj.content);
      });

      it("refuses the cut", async () => {
        await selectAll(mounted);

        await copyOrCut(mounted, CUT_COMMAND);

        expect(content(mounted)).toEqual(usj.content);
      });

      it("pastes a copy at the end flattened, with no book or chapter line", async () => {
        await selectAll(mounted);
        const store = await copyOrCut(mounted, COPY_COMMAND);
        await caretAtEnd(mounted);

        await ctrlV(mounted, store);

        const after = content(mounted);
        expect(after.slice(0, chapterAt + 2)).toEqual([BOOK, ...front, CHAPTER, FIRST]);
        expect(after).toHaveLength(chapterAt + 3);
        expect(JSON.stringify(after)).not.toMatch(/Genesis title.*Genesis title/);
      });
    });
  });
});
