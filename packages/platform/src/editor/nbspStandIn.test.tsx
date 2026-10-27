/**
 * Standard view holds a stored no-break space as an internal stand-in (`NBSP_STAND_IN`, U+001A)
 * where `ViewOptions.allowInvisibleCharacters` is on. That stand-in is the editor's own business: a
 * real U+00A0 crosses every boundary in and out of the editor, the stand-in never does, and a
 * U+001A (or any other C0 control character but tab, line feed and carriage return) that comes in
 * from outside comes in as a space, so it can never be saved as a no-break space.
 */
import { EditorViewName, editorView, mountInView, MountedEditor } from "./editorViews.test-helpers";
import { press } from "./typingFidelityOracle.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $getSelection,
  $isRangeSelection,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  COPY_COMMAND,
  CUT_COMMAND,
  DRAGSTART_COMMAND,
  LexicalEditor,
  PASTE_COMMAND,
  TextNode,
} from "lexical";
import { NBSP, NBSP_STAND_IN, TypedMarkOnRemove } from "shared";
import { $getOTPositionOfNode, DeltaOp, ViewOptions } from "shared-react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { NBSP_STAND_IN_FONT_FAMILY } from "./markerEdit/nbspStandInFont";

const SCR_REF = { book: "GEN", chapterNum: 1, verseNum: 1 };

function usjWith(paraContent: MarkerContent[], book: MarkerContent[] = ["GEN"]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: book },
      { type: "chapter", marker: "c", number: "1" },
      { type: "para", marker: "p", content: paraContent },
      { type: "para", marker: "p", content: ["depart here"] },
    ],
  };
}

/** A book and one paragraph holding `paraContent`: no chapter line, whose glyph would count in the
 * document's delta but not where ops apply. */
function chapterlessUsj(paraContent: MarkerContent[]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
      { type: "para", marker: "p", content: paraContent },
    ],
  };
}

function paraOf(mounted: MountedEditor, index = 1): MarkerContent[] | undefined {
  const para = mounted.ref.current?.getUsj()?.content[index];
  return typeof para === "object" ? para.content : undefined;
}

function view(name: EditorViewName, allow = true): ViewOptions {
  return { ...editorView(name), allowInvisibleCharacters: allow };
}

const standardOn = view("standard");

/** No stand-in anywhere in `value`, however deep. */
function expectNoStandIn(value: unknown): void {
  expect(JSON.stringify(value ?? null)).not.toMatch(/\\u001a/i);
  expect(JSON.stringify(value ?? null)).not.toContain(NBSP_STAND_IN);
}

function firstPara(mounted: MountedEditor): MarkerContent[] | undefined {
  const para = mounted.ref.current?.getUsj()?.content[2];
  return typeof para === "object" ? para.content : undefined;
}

function shownText(lexical: LexicalEditor): string {
  return lexical.getEditorState().read(() => $getRoot().getTextContent());
}

function $textNodeContaining(text: string): TextNode {
  const node = $getRoot()
    .getAllTextNodes()
    .find((candidate) => candidate.getTextContent().includes(text));
  if (!node) throw new Error(`no text node holding ${JSON.stringify(text)}`);
  return node;
}

async function select(lexical: LexicalEditor, text: string, from: number, to = from) {
  await act(async () =>
    lexical.update(() => {
      const node = $textNodeContaining(text);
      const start = node.getTextContent().indexOf(text);
      node.select(start + from, start + to);
    }),
  );
}

async function settle(): Promise<void> {
  await act(async () => {
    for (let i = 0; i < 5; i += 1) await new Promise((resolve) => setTimeout(resolve, 0));
  });
}

async function commit(mounted: MountedEditor): Promise<void> {
  await select(mounted.lexical, "depart here", 2);
  act(() => mounted.ref.current?.commitPendingMarkerEdits());
}

function clipboardEvent(store: Map<string, string>, type = "paste"): ClipboardEvent {
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

async function pasteFlavors(lexical: LexicalEditor, flavors: { [format: string]: string }) {
  await act(async () =>
    lexical.update(() => {
      lexical.dispatchCommand(PASTE_COMMAND, clipboardEvent(new Map(Object.entries(flavors))));
    }),
  );
  await settle();
}

/** Selects `text` in one text node and copies (or cuts) it; returns every flavor written. */
async function copyFlavors(
  lexical: LexicalEditor,
  text: string,
  command: typeof COPY_COMMAND | typeof CUT_COMMAND = COPY_COMMAND,
): Promise<Map<string, string>> {
  await act(async () =>
    lexical.update(() => {
      const node = $textNodeContaining(text);
      const start = node.getTextContent().indexOf(text);
      node.select(start, start + text.length);
    }),
  );
  const store = new Map<string, string>();
  await act(async () =>
    lexical.update(() => {
      if (!$isRangeSelection($getSelection())) throw new Error("no range selection");
      lexical.dispatchCommand(command, clipboardEvent(store, "copy"));
    }),
  );
  return store;
}

/** A drop as Lexical hands it on from the browser's `insertFromDrop` input event. */
function dropEvent(flavors: { [format: string]: string }): InputEvent {
  return {
    dataTransfer: {
      types: Object.keys(flavors),
      files: [],
      getData: (format: string) => flavors[format] ?? "",
    },
    inputType: "insertFromDrop",
    data: null,
    preventDefault: () => undefined,
  } as unknown as InputEvent;
}

/** A `\w` span with a `lemma` attribute, which `MarkerObject` holds but does not name. */
function wordWithLemma(lemma: string, text: string): MarkerObject {
  return Object.assign({ type: "char", marker: "w", content: [text] }, { lemma });
}

const noteWithNbsp: MarkerObject = {
  type: "note",
  marker: "f",
  caller: "+",
  content: [{ type: "char", marker: "ft", content: [`g${NBSP}h`] }],
};

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("the stand-in for a stored no-break space", () => {
  describe("load and save", () => {
    it("is what Standard view holds, and getUsj and onUsjChange give U+00A0", async () => {
      const changes: Usj[] = [];
      const mounted = await mountInView(usjWith([`a${NBSP}b c`]), standardOn, {
        onUsjChange: (usj) => changes.push(usj),
      });
      expect(shownText(mounted.lexical)).toContain(`a${NBSP_STAND_IN}b`);

      await select(mounted.lexical, " c", 2);
      await act(async () => {
        mounted.lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "x");
      });

      expect(firstPara(mounted)).toEqual([`a${NBSP}b cx`]);
      expect(changes.length).toBeGreaterThan(0);
      expectNoStandIn(changes);
      expectNoStandIn(mounted.ref.current?.getUsj());
    });

    it("comes from setUsj too", async () => {
      const mounted = await mountInView(usjWith(["x"]), standardOn);
      act(() => mounted.ref.current?.setUsj(usjWith([`a${NBSP}b`])));
      await settle();

      expect(shownText(mounted.lexical)).toContain(`a${NBSP_STAND_IN}b`);
      expect(firstPara(mounted)).toEqual([`a${NBSP}b`]);
    });

    it("keeps U+00A0 in a note, a character span and an attribute value, and through a settle", async () => {
      const content: MarkerContent[] = [
        "x ",
        wordWithLemma(`h${NBSP}i`, `d${NBSP}e`),
        " y",
        noteWithNbsp,
      ];
      const mounted = await mountInView(usjWith(content), standardOn);
      expect(firstPara(mounted)).toEqual(content);

      // A typed marker re-reads the paragraph, attribute value and all.
      await select(mounted.lexical, " y", 2);
      await act(async () => {
        mounted.lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "\\");
      });
      await commit(mounted);

      expectNoStandIn(mounted.ref.current?.getUsj());
      const para = JSON.stringify(firstPara(mounted));
      expect(para).toContain(`d${NBSP}e`);
      expect(para).toContain(`g${NBSP}h`);
    });

    it("keeps U+00A0 on the \\id line through a settle of that line", async () => {
      const mounted = await mountInView(usjWith(["a"], [`GEN a${NBSP}b`]), standardOn);
      await select(mounted.lexical, `a${NBSP_STAND_IN}b`, 3);
      await act(async () => {
        mounted.lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "c");
      });
      await commit(mounted);

      const book = mounted.ref.current?.getUsj()?.content[0];
      expect(typeof book === "object" ? book.content : undefined).toEqual([`GEN a${NBSP}bc`]);
    });

    it("keeps U+00A0 in a chapter's published number through a settle of the chapter line", async () => {
      const chapter: MarkerObject = {
        type: "chapter",
        marker: "c",
        number: "1",
        pubnumber: `I${NBSP}A`,
      };
      const usj: Usj = {
        type: "USJ",
        version: "3.1",
        content: [
          { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
          chapter,
          { type: "para", marker: "p", content: ["text"] },
          { type: "para", marker: "p", content: ["depart here"] },
        ],
      };
      const mounted = await mountInView(usj, standardOn);
      expect(shownText(mounted.lexical)).toContain(`I${NBSP_STAND_IN}A`);
      await select(mounted.lexical, `I${NBSP_STAND_IN}A`, 3);
      await act(async () => {
        mounted.lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "B");
      });
      await commit(mounted);

      expect(mounted.ref.current?.getUsj()?.content[1]).toEqual({
        ...chapter,
        pubnumber: `I${NBSP}AB`,
      });
    });
  });

  describe("incoming control characters become spaces", () => {
    it.each<[string, string]>([
      ["U+001A", "\u001A"],
      ["U+0001", "\u0001"],
      ["U+001F", "\u001F"],
    ])("in a loaded document (%s)", async (_, control) => {
      const mounted = await mountInView(
        usjWith([`a${control}b`, wordWithLemma(`c${control}d`, "e")]),
        standardOn,
      );

      expect(firstPara(mounted)).toEqual(["a b", wordWithLemma("c d", "e")]);
    });

    it("keeps tab, line feed and carriage return to the rules they already had", async () => {
      const mounted = await mountInView(usjWith([`a\tb`]), standardOn);

      expect(JSON.stringify(firstPara(mounted))).not.toContain(NBSP);
    });

    it("in a paste, in every flavor", async () => {
      const mounted = await mountInView(usjWith(["ab"]), standardOn);
      await select(mounted.lexical, "ab", 1);

      await pasteFlavors(mounted.lexical, { "text/plain": `x\u001Ay${NBSP}z` });

      expect(firstPara(mounted)).toEqual([`ax y${NBSP}zb`]);
    });

    it("in a paste that only carries html", async () => {
      const mounted = await mountInView(usjWith(["ab"]), standardOn);
      await select(mounted.lexical, "ab", 1);

      await pasteFlavors(mounted.lexical, { "text/html": `<span>x\u001Ay&nbsp;z</span>` });

      expect(firstPara(mounted)).toEqual([`ax y${NBSP}zb`]);
    });

    it("in typed text, by both input routes", async () => {
      const mounted = await mountInView(usjWith(["ab"]), standardOn);
      await select(mounted.lexical, "ab", 1);

      await act(async () => {
        mounted.lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "\u001A");
      });
      expect(await press(mounted, "\u001A", "\u001A")).toEqual([]);

      // Two spaces, which the save collapses to one.
      expect(firstPara(mounted)).toEqual(["a b"]);
      expectNoStandIn(mounted.ref.current?.getUsj());
    });

    it("in applied delta ops", async () => {
      const mounted = await mountInView(chapterlessUsj(["ab"]), standardOn);
      const position = deltaPositionOf(mounted, "ab") + 1;

      act(() => mounted.ref.current?.applyUpdate([{ retain: position }, { insert: "x\u001Ay" }]));

      expect(paraOf(mounted)).toEqual(["ax yb"]);
    });
  });

  describe("delta ops", () => {
    it("go out with U+00A0 for a typed no-break space", async () => {
      const opsSeen: DeltaOp[][] = [];
      const mounted = await mountInView(usjWith(["ab"]), standardOn, {
        onUsjChange: (_, ops) => {
          if (ops) opsSeen.push(ops);
        },
      });
      await select(mounted.lexical, "ab", 1);

      expect(await press(mounted, NBSP, NBSP)).toEqual([]);

      expect(opsSeen.flat()).toContainEqual({ insert: NBSP });
      expectNoStandIn(opsSeen);
    });

    it("come in with U+00A0 as a stored no-break space", async () => {
      const mounted = await mountInView(chapterlessUsj(["ab"]), standardOn);
      const position = deltaPositionOf(mounted, "ab") + 1;

      act(() => mounted.ref.current?.applyUpdate([{ retain: position }, { insert: `x${NBSP}y` }]));

      expect(shownText(mounted.lexical)).toContain(`ax${NBSP_STAND_IN}yb`);
      expect(paraOf(mounted)).toEqual([`ax${NBSP}yb`]);
    });

    it("give a note's ops with U+00A0, and a space where the view shows a run", async () => {
      const mounted = await mountInView(
        usjWith([
          "a ",
          {
            ...noteWithNbsp,
            content: [{ type: "char", marker: "ft", content: [`g${NBSP}h  i`] }],
          },
        ]),
        standardOn,
      );

      const ops = mounted.ref.current?.getNoteOps(0);

      expectNoStandIn(ops);
      expect(JSON.stringify(ops)).toContain(JSON.stringify(`g${NBSP}h  i`).slice(1, -1));
    });

    it("carry a note through the footnote editor's round trip unchanged", async () => {
      const main = await mountInView(usjWith(["a ", noteWithNbsp, " b"]), standardOn);
      const pane = await mountInView(chapterlessUsj(["x"]), standardOn);
      const noteOps = main.ref.current?.getNoteOps(0);
      if (!noteOps) throw new Error("no note ops");

      act(() =>
        pane.ref.current?.applyUpdate([{ retain: deltaPositionOf(pane, "x") + 1 }, ...noteOps]),
      );
      expect(JSON.stringify(paraOf(pane))).toContain(`g${NBSP}h`);
      const edited = pane.ref.current?.getNoteOps(0);
      if (!edited) throw new Error("no note ops in the pane");
      expectNoStandIn(edited);

      const key = main.ref.current?.getNoteKey(0);
      if (!key) throw new Error("no note key");
      act(() => main.ref.current?.replaceEmbedUpdate(key, edited));

      expect(firstPara(main)).toEqual(["a ", noteWithNbsp, " b"]);
      expect(shownText(main.lexical)).toContain(`g${NBSP_STAND_IN}h`);
    });
  });

  describe("clipboard", () => {
    it("copies U+00A0 in text/plain and text/html, with no internal flavor holding the stand-in", async () => {
      const mounted = await mountInView(usjWith([`a${NBSP}b c`]), standardOn);

      const store = await copyFlavors(mounted.lexical, `a${NBSP_STAND_IN}b`);

      expect(store.get("text/plain")).toBe(`a${NBSP}b`);
      expect(store.get("text/html")).toMatch(new RegExp(`a(${NBSP}|&nbsp;)b`));
      expectNoStandIn([...store.values()]);
    });

    it("still writes the internal flavor for a selection without one", async () => {
      const mounted = await mountInView(usjWith([`a${NBSP}b cd`]), standardOn);

      const store = await copyFlavors(mounted.lexical, "cd");

      expect(store.has("application/x-lexical-editor")).toBe(true);
    });

    it("cuts U+00A0 out and leaves the rest", async () => {
      const mounted = await mountInView(usjWith([`a${NBSP}b c`]), standardOn);

      const store = await copyFlavors(mounted.lexical, `a${NBSP_STAND_IN}b`, CUT_COMMAND);

      expect(store.get("text/plain")).toBe(`a${NBSP}b`);
      expectNoStandIn([...store.values()]);
      // The space left at the start of the paragraph is not content.
      expect(firstPara(mounted)).toEqual(["c"]);
    });

    it("pastes its own copy back as a stored no-break space", async () => {
      const mounted = await mountInView(usjWith([`a${NBSP}b c`]), standardOn);
      const store = await copyFlavors(mounted.lexical, `a${NBSP_STAND_IN}b`);
      await select(mounted.lexical, " c", 2);

      await pasteFlavors(mounted.lexical, Object.fromEntries(store));

      expect(firstPara(mounted)).toEqual([`a${NBSP}b ca${NBSP}b`]);
    });

    it("pastes through the async clipboard read the same way", async () => {
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
            {
              types: ["text/plain"],
              getType: async () => ({ text: async () => `x${NBSP}y\u001Az` }),
            },
          ],
        },
        permissions: { query: async () => ({ state: "granted" }) },
      });
      const mounted = await mountInView(usjWith(["ab"]), standardOn);
      await select(mounted.lexical, "ab", 1);

      await act(async () => {
        mounted.ref.current?.paste();
      });
      await settle();

      expect(firstPara(mounted)).toEqual([`ax${NBSP}y zb`]);
    });

    it("drops U+00A0 in as a stored no-break space, as a paste does", async () => {
      const mounted = await mountInView(usjWith(["ab"]), standardOn);
      await select(mounted.lexical, "ab", 1);

      await act(async () => {
        mounted.lexical.dispatchCommand(
          CONTROLLED_TEXT_INSERTION_COMMAND,
          dropEvent({ "text/plain": `x${NBSP}y` }),
        );
      });
      await settle();

      expect(shownText(mounted.lexical)).toContain(`ax${NBSP_STAND_IN}yb`);
      expect(firstPara(mounted)).toEqual([`ax${NBSP}yb`]);
    });

    it("drags out U+00A0 and drops it back in as a stored no-break space", async () => {
      const mounted = await mountInView(usjWith([`a${NBSP}b cd`]), standardOn);
      await select(mounted.lexical, `a${NBSP_STAND_IN}b`, 0, 3);
      const dragged = new Map<string, string>();
      await act(async () => {
        const dataTransfer = {
          setData: (format: string, data: string) => dragged.set(format, data),
          clearData: () => dragged.clear(),
          getData: (format: string) => dragged.get(format) ?? "",
        };
        mounted.lexical.dispatchCommand(DRAGSTART_COMMAND, {
          dataTransfer,
        } as unknown as DragEvent);
      });
      expect(dragged.get("text/plain")).toBe(`a${NBSP}b`);
      expectNoStandIn([...dragged.values()]);

      await select(mounted.lexical, "cd", 1);
      await act(async () => {
        mounted.lexical.dispatchCommand(
          CONTROLLED_TEXT_INSERTION_COMMAND,
          dropEvent({ "text/plain": `${dragged.get("text/plain")}\u001Ax` }),
        );
      });
      await settle();

      expect(firstPara(mounted)).toEqual([`a${NBSP}b ca${NBSP}b xd`]);
    });
  });

  describe("typing", () => {
    it("of U+00A0 is saved as one and undoes and redoes as one", async () => {
      const mounted = await mountInView(usjWith(["ab"]), standardOn);
      await select(mounted.lexical, "ab", 1);
      expect(await press(mounted, NBSP, NBSP)).toEqual([]);
      expect(firstPara(mounted)).toEqual([`a${NBSP}b`]);

      await settle();
      await act(async () => {
        mounted.ref.current?.undo();
        await Promise.resolve();
      });
      expect(firstPara(mounted)).toEqual(["ab"]);
      await act(async () => {
        mounted.ref.current?.redo();
        await Promise.resolve();
      });
      expect(firstPara(mounted)).toEqual([`a${NBSP}b`]);
      expect(shownText(mounted.lexical)).toContain(`a${NBSP_STAND_IN}b`);
    });
  });

  describe("positions and annotations", () => {
    it("count the stand-in as the one character it stands for", async () => {
      const mounted = await mountInView(usjWith([`a${NBSP}bcd`]), standardOn);
      const jsonPath = "$.content[2].content[0]";
      act(() =>
        mounted.ref.current?.setSelection({
          start: { jsonPath, offset: 3 },
          end: { jsonPath, offset: 4 },
        }),
      );

      expect(mounted.ref.current?.getSelection()).toMatchObject({
        start: { jsonPath, offset: 3 },
        end: { jsonPath, offset: 4 },
      });
      expect(mounted.lexical.getEditorState().read(() => $getSelection()?.getTextContent())).toBe(
        "c",
      );
    });

    it("annotate the right characters and report U+00A0 in an annotation's text", async () => {
      const mounted = await mountInView(usjWith([`a${NBSP}bcd`]), standardOn);
      const jsonPath = "$.content[2].content[0]";
      const onRemove = vi.fn<TypedMarkOnRemove>();
      await act(async () => {
        mounted.ref.current?.setAnnotation(
          { start: { jsonPath, offset: 0 }, end: { jsonPath, offset: 3 } },
          "test",
          "1",
          { onRemove },
        );
        await Promise.resolve();
      });

      const ranges = mounted.ref.current?.getAnnotationRanges("test", "1") ?? [];
      expect(ranges.map((range) => range.toString()).join("")).toBe(`a${NBSP_STAND_IN}b`);

      act(() => mounted.ref.current?.removeAnnotation("test", "1"));
      await settle();

      expect(onRemove).toHaveBeenCalled();
      const reported = onRemove.mock.calls.map((call) => call[3]).join("");
      expect(reported).toBe(`a${NBSP}b`);
    });
  });

  describe("note callers", () => {
    it("hand a click handler the note's ops with U+00A0", async () => {
      let clickedOps: unknown;
      const mounted = await mountInView(usjWith(["a ", noteWithNbsp, " b"]), standardOn, {
        nodes: {
          noteCallerOnClick: (_event, _key, _collapsed, _getCaller, _setCaller, getNoteOps) => {
            clickedOps = getNoteOps();
          },
        },
      });
      const caller = mounted.lexical.getRootElement()?.querySelector("button[data-caller-id]");
      if (!(caller instanceof HTMLElement)) throw new Error("no note caller button");

      await act(async () => caller.click());

      expect(JSON.stringify(clickedOps)).toContain(`g${NBSP}h`);
      expectNoStandIn(clickedOps);
    });

    it("preview a note's text with U+00A0", async () => {
      const mounted = await mountInView(usjWith(["a ", noteWithNbsp, " b"]), standardOn);

      const caller = mounted.lexical.getRootElement()?.querySelector("[data-preview-text]");
      expect(caller?.getAttribute("data-preview-text")).toBe(`g${NBSP}h`);
    });
  });

  describe("font", () => {
    it("is added to the editor's document, covering U+001A alone", async () => {
      const faces: { family: string; source: unknown; descriptors: unknown }[] = [];
      class FakeFontFace {
        readonly family: string;
        constructor(family: string, source: unknown, descriptors: unknown) {
          this.family = family;
          faces.push({ family, source, descriptors });
        }
      }
      const added: unknown[] = [];
      vi.stubGlobal("FontFace", FakeFontFace);
      Object.defineProperty(document, "fonts", {
        configurable: true,
        value: { add: (face: unknown) => added.push(face) },
      });
      try {
        await mountInView(usjWith(["a"]), standardOn);
      } finally {
        Reflect.deleteProperty(document, "fonts");
      }

      expect(faces).toHaveLength(1);
      expect(faces[0].family).toBe(NBSP_STAND_IN_FONT_FAMILY);
      expect(faces[0].descriptors).toEqual({ unicodeRange: "U+1A" });
      expect(added).toHaveLength(1);
      const bytes = faces[0].source as Uint8Array;
      // A TrueType font (sfnt version 1.0) whose cmap maps U+001A.
      expect([...bytes.slice(0, 4)]).toEqual([0, 1, 0, 0]);
    });
  });

  describe("EditorRef methods that make text", () => {
    it("insertNote keeps the paragraph's no-break spaces", async () => {
      const mounted = await mountInView(usjWith([`a${NBSP}b c${NBSP}d`]), standardOn, {
        scrRef: SCR_REF,
      });
      await select(mounted.lexical, " c", 1);

      act(() => mounted.ref.current?.insertNote("f"));
      await commit(mounted);

      const text = JSON.stringify(firstPara(mounted));
      expect(text).toContain(`a${NBSP}b`);
      expect(text).toContain(`c${NBSP}d`);
      expectNoStandIn(mounted.ref.current?.getUsj());
    });

    it("insertMarker wraps a selection holding one and keeps it", async () => {
      const mounted = await mountInView(usjWith([`a${NBSP}b c`]), standardOn, {
        scrRef: SCR_REF,
      });
      await select(mounted.lexical, `a${NBSP_STAND_IN}b`, 0, 3);

      act(() => {
        mounted.ref.current?.insertMarker("nd");
      });
      await commit(mounted);

      expect(firstPara(mounted)).toEqual([
        { type: "char", marker: "nd", content: [`a${NBSP}b`] },
        " c",
      ]);
    });

    it("splitParagraphWithMarker keeps them on both sides of the split", async () => {
      const mounted = await mountInView(usjWith([`a${NBSP}b c${NBSP}d`]), standardOn, {
        scrRef: SCR_REF,
      });
      await select(mounted.lexical, " c", 1);

      act(() => mounted.ref.current?.splitParagraphWithMarker("q1"));
      await commit(mounted);

      const usj = mounted.ref.current?.getUsj();
      expectNoStandIn(usj);
      expect(usj?.content.slice(2, 4)).toEqual([
        { type: "para", marker: "p", content: [`a${NBSP}b `] },
        { type: "para", marker: "q1", content: [`c${NBSP}d`] },
      ]);
    });
  });

  describe.each<EditorViewName>(["formatted", "paragraph-structure"])(
    "%s view with the option on",
    (name) => {
      it("takes and gives U+00A0 as itself", async () => {
        const opsSeen: DeltaOp[][] = [];
        const mounted = await mountInView(chapterlessUsj([`a${NBSP}b`]), view(name), {
          onUsjChange: (_, ops) => {
            if (ops) opsSeen.push(ops);
          },
        });
        const position = deltaPositionOf(mounted, `a${NBSP}b`) + 3;

        act(() =>
          mounted.ref.current?.applyUpdate([{ retain: position }, { insert: `x${NBSP} y` }]),
        );

        expect(shownText(mounted.lexical)).toContain(`a${NBSP}bx${NBSP} y`);
        expect(paraOf(mounted)).toEqual([`a${NBSP}bx${NBSP} y`]);
        expectNoStandIn(opsSeen);
      });
    },
  );
});

/** Where the text node holding `text` starts, in the "apply" coordinates `applyUpdate` reads. */
function deltaPositionOf(mounted: MountedEditor, text: string): number {
  const position = mounted.lexical
    .getEditorState()
    .read(() => $getOTPositionOfNode($textNodeContaining(text), "apply"));
  if (position === undefined) throw new Error(`no position for ${JSON.stringify(text)}`);
  return position + textOffsetIn(mounted, text);
}

/** Where `text` starts inside the text node holding it. */
function textOffsetIn(mounted: MountedEditor, text: string): number {
  return mounted.lexical
    .getEditorState()
    .read(() => $textNodeContaining(text).getTextContent().indexOf(text));
}
