/**
 * A no-break space (U+00A0) inside a marker's attribute value — a character span's `|lemma`, a
 * milestone's `who`, a figure's `src`, a note's `\cat`, a verse's `\va`/`\vp`, a chapter's
 * `\ca`/`\cp` — is shown in Standard view the way the body text shows one (`~`, or the internal
 * stand-in where `ViewOptions.allowInvisibleCharacters` is on), because the engine reads an
 * on-screen U+00A0 as display spacing. It survives every re-read of the displayed bytes: a settle
 * of its paragraph, an edit to the value, an unsettled read, copy and paste, and the `|…` bytes a
 * span leaves behind when it is unwrapped. Unformatted view shows it as itself and its settle keeps
 * it too; the views that hide markers never show it at all.
 */
import {
  describeInView,
  EditorViewName,
  editorView,
  enabledViews,
  isViewEnabled,
  mountInView,
  MountedEditor,
} from "./editorViews.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  COPY_COMMAND,
  KEY_ENTER_COMMAND,
  LexicalEditor,
  PASTE_COMMAND,
  TextNode,
} from "lexical";
import { NBSP, NBSP_STAND_IN } from "shared";
import { ViewOptions } from "shared-react";
import { describe, expect, it } from "vitest";

const DEPART = "depart here";

function usjWith(para: MarkerContent[], chapter?: Partial<MarkerObject>): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
      { type: "chapter", marker: "c", number: "1", ...chapter },
      { type: "para", marker: "p", content: para },
      { type: "para", marker: "p", content: [DEPART] },
    ],
  };
}

/** A marker object holding attributes `MarkerObject` does not name. */
function withAttributes(
  object: MarkerObject,
  attributes: { [name: string]: string },
): MarkerObject {
  return Object.assign(object, attributes);
}

interface Shape {
  name: string;
  view: EditorViewName;
  usj: Usj;
  /** The displayed value text holding the no-break space, spelled with `spelling`. */
  shown: (spelling: string) => string;
  /** Where in {@link Shape.shown} to type, just after the no-break space. */
  typeAt: number;
  /** The document's attribute values, from a `getUsj()` result. */
  values: (usj: Usj | undefined) => unknown;
  /** What {@link Shape.values} gives: the value's U+00A0, with `typed` just after it. */
  expected: (typed?: string) => unknown;
  /** Body text to type a `\` into, so the owner's paragraph re-reads its bytes. */
  elsewhere?: string;
  /** Whether the shape lives in a paragraph a copy/paste of that paragraph can carry. */
  copies: boolean;
}

function paraContent(usj: Usj | undefined, index = 2): MarkerContent[] | undefined {
  const para = usj?.content[index];
  return typeof para === "object" ? para.content : undefined;
}

/** `usj` with its last block (where a paste of a whole paragraph ends up) in the first
 * paragraph's place, so a shape's {@link Shape.values} reads the pasted copy. */
function withLastParaFirst(usj: Usj | undefined): Usj | undefined {
  if (!usj) return usj;
  const content = [...usj.content];
  content[2] = content[content.length - 1];
  return { ...usj, content };
}

function objectIn(content: MarkerContent[] | undefined, type: string): MarkerObject | undefined {
  for (const item of content ?? []) {
    if (typeof item !== "object") continue;
    if (item.type === type) return item;
    const inner = objectIn(item.content, type);
    if (inner) return inner;
  }
  return undefined;
}

function pick(object: MarkerObject | undefined, names: string[]): { [name: string]: unknown } {
  const record: { [name: string]: unknown } = { ...object };
  return Object.fromEntries(names.map((name) => [name, record[name]]));
}

const SHAPES: Shape[] = [
  {
    name: "a character span's default attribute",
    view: "standard",
    usj: usjWith([
      "x ",
      withAttributes({ type: "char", marker: "w", content: ["word"] }, { lemma: `h${NBSP}i` }),
      " y",
    ]),
    shown: (spelling) => `|h${spelling}i`,
    typeAt: 3,
    values: (usj) => pick(objectIn(paraContent(usj), "char"), ["lemma"]),
    expected: (typed = "") => ({ lemma: `h${NBSP}${typed}i` }),
    elsewhere: " y",
    copies: true,
  },
  {
    name: "a character span's named attributes",
    view: "standard",
    usj: usjWith([
      "x ",
      withAttributes(
        { type: "char", marker: "w", content: ["word"] },
        { lemma: `h${NBSP}i`, strong: `H${NBSP}1` },
      ),
      " y",
    ]),
    shown: (spelling) => `|lemma="h${spelling}i" strong="H${spelling}1"`,
    typeAt: 10,
    values: (usj) => pick(objectIn(paraContent(usj), "char"), ["lemma", "strong"]),
    expected: (typed = "") => ({ lemma: `h${NBSP}${typed}i`, strong: `H${NBSP}1` }),
    elsewhere: " y",
    copies: true,
  },
  {
    name: "a milestone's attribute",
    view: "standard",
    usj: usjWith([
      "x ",
      withAttributes({ type: "ms", marker: "qt-s" }, { who: `A${NBSP}B` }),
      "y z",
    ]),
    shown: (spelling) => `|A${spelling}B`,
    typeAt: 3,
    values: (usj) => pick(objectIn(paraContent(usj), "ms"), ["who"]),
    expected: (typed = "") => ({ who: `A${NBSP}${typed}B` }),
    elsewhere: "y z",
    copies: true,
  },
  {
    name: "a verse's \\va and \\vp",
    view: "standard",
    usj: usjWith([
      { type: "verse", marker: "v", number: "1", altnumber: `1${NBSP}a`, pubnumber: `2${NBSP}b` },
      "verse y",
    ]),
    shown: (spelling) => `2${spelling}b`,
    typeAt: 2,
    values: (usj) => pick(objectIn(paraContent(usj), "verse"), ["altnumber", "pubnumber"]),
    expected: (typed = "") => ({ altnumber: `1${NBSP}a`, pubnumber: `2${NBSP}${typed}b` }),
    elsewhere: "verse y",
    copies: true,
  },
  {
    name: "a note's \\cat",
    view: "standard+expandedNotes",
    usj: usjWith([
      "x ",
      {
        type: "note",
        marker: "f",
        caller: "+",
        category: `c${NBSP}d`,
        content: [{ type: "char", marker: "ft", content: ["note"] }],
      },
      " y",
    ]),
    shown: (spelling) => `c${spelling}d`,
    typeAt: 2,
    values: (usj) => pick(objectIn(paraContent(usj), "note"), ["category"]),
    expected: (typed = "") => ({ category: `c${NBSP}${typed}d` }),
    elsewhere: "note",
    copies: true,
  },
  {
    name: "a chapter's \\ca and \\cp",
    view: "standard",
    usj: usjWith(["text"], { altnumber: `3${NBSP}c`, pubnumber: `I${NBSP}A` }),
    shown: (spelling) => `I${spelling}A`,
    typeAt: 2,
    values: (usj) => {
      const chapter = usj?.content[1];
      return pick(typeof chapter === "object" ? chapter : undefined, ["altnumber", "pubnumber"]);
    },
    expected: (typed = "") => ({ altnumber: `3${NBSP}c`, pubnumber: `I${NBSP}${typed}A` }),
    copies: false,
  },
];

const FIGURE = withAttributes(
  { type: "figure", marker: "fig", content: ["cap"] },
  { file: `a${NBSP}b.jpg`, size: "col", ref: "1.1" },
);

/** What a paste is handed: everything the copy wrote, or only its plain text (another app's copy
 * of the same bytes). */
const PASTED_FLAVORS = [
  { label: "every flavor", pick: (flavors: Map<string, string>) => flavors },
  {
    label: "plain text alone",
    pick: (flavors: Map<string, string>) =>
      new Map([["text/plain", flavors.get("text/plain") ?? ""]]),
  },
];

function viewWith(name: EditorViewName, allow: boolean): ViewOptions {
  return { ...editorView(name), allowInvisibleCharacters: allow };
}

const SETTINGS = [
  { label: "allowInvisibleCharacters off", allow: false, spelling: "~" },
  { label: "allowInvisibleCharacters on", allow: true, spelling: NBSP_STAND_IN },
];

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

async function select(lexical: LexicalEditor, text: string, offset: number) {
  await act(async () =>
    lexical.update(() => {
      const node = $textNodeContaining(text);
      const start = node.getTextContent().indexOf(text) + offset;
      node.select(start, start);
    }),
  );
}

async function type(lexical: LexicalEditor, text: string) {
  await act(async () => {
    lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, text);
  });
}

async function commit(mounted: MountedEditor): Promise<void> {
  await select(mounted.lexical, DEPART, 2);
  act(() => mounted.ref.current?.commitPendingMarkerEdits());
}

async function settle(): Promise<void> {
  await act(async () => {
    for (let i = 0; i < 5; i += 1) await new Promise((resolve) => setTimeout(resolve, 0));
  });
}

function clipboardEvent(store: Map<string, string>, type: string): ClipboardEvent {
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

/** Copies the whole of the root's `index`th block and returns every flavor written. */
async function copyBlock(lexical: LexicalEditor, index: number): Promise<Map<string, string>> {
  await act(async () =>
    lexical.update(() => {
      const block = $getRoot().getChildAtIndex(index);
      if (!$isElementNode(block)) throw new Error("no block there");
      block.select(0, block.getChildrenSize());
    }),
  );
  const store = new Map<string, string>();
  await act(async () =>
    lexical.update(() => {
      if (!$isRangeSelection($getSelection())) throw new Error("no range selection");
      lexical.dispatchCommand(COPY_COMMAND, clipboardEvent(store, "copy"));
    }),
  );
  return store;
}

async function paste(lexical: LexicalEditor, flavors: Map<string, string>) {
  await act(async () =>
    lexical.update(() => {
      lexical.dispatchCommand(PASTE_COMMAND, clipboardEvent(new Map(flavors), "paste"));
    }),
  );
  await settle();
}

/** No stand-in anywhere in `value`, however deep. */
function expectNoStandIn(value: unknown): void {
  expect(JSON.stringify(value ?? null)).not.toMatch(/\\u001a/i);
}

for (const { label, allow, spelling } of SETTINGS)
  describe(`an attribute value's no-break space in Standard view, ${label}`, () => {
    for (const shape of SHAPES.filter(({ view }) => isViewEnabled(view)))
      describe(`in ${shape.name}`, () => {
        const mount = () => mountInView(shape.usj, viewWith(shape.view, allow));

        it("shows as the body text's spelling and loads as U+00A0", async () => {
          const mounted = await mount();
          expect(shownText(mounted.lexical)).toContain(shape.shown(spelling));
          expect(shape.values(mounted.ref.current?.getUsj())).toEqual(shape.expected());
        });

        if (shape.elsewhere) {
          const { elsewhere } = shape;
          it("survives a settle of its paragraph", async () => {
            const mounted = await mount();
            await select(mounted.lexical, elsewhere, elsewhere.length);
            await type(mounted.lexical, "\\");
            await commit(mounted);

            const usj = mounted.ref.current?.getUsj();
            expect(shape.values(usj)).toEqual(shape.expected());
            expectNoStandIn(usj);
            expect(shownText(mounted.lexical)).toContain(shape.shown(spelling));
          });
        }

        it("survives an edit to the value, read before and after it settles", async () => {
          const mounted = await mount();
          await select(mounted.lexical, shape.shown(spelling), shape.typeAt);
          await type(mounted.lexical, "x");

          const unsettled = mounted.ref.current?.getUsj();
          expect(shape.values(unsettled)).toEqual(shape.expected("x"));
          expectNoStandIn(unsettled);

          await commit(mounted);
          const usj = mounted.ref.current?.getUsj();
          expect(shape.values(usj)).toEqual(shape.expected("x"));
          expectNoStandIn(usj);
          expect(shownText(mounted.lexical)).toContain(
            shape.shown(spelling).replace(`${spelling}`, `${spelling}x`),
          );
        });

        if (shape.copies)
          for (const flavor of PASTED_FLAVORS)
            it(`copies and pastes back as U+00A0, ${flavor.label}`, async () => {
              const mounted = await mount();
              const flavors = await copyBlock(mounted.lexical, 2);
              expectNoStandIn([...flavors.values()]);
              await select(mounted.lexical, DEPART, DEPART.length);
              await paste(mounted.lexical, flavor.pick(flavors));
              await commit(mounted);

              const usj = mounted.ref.current?.getUsj();
              expectNoStandIn(usj);
              expect(shape.values(withLastParaFirst(usj))).toEqual(shape.expected());
            });
      });

    describe("in a figure's attributes", () => {
      const mount = () => mountInView(usjWith(["x ", FIGURE, " y"]), viewWith("standard", allow));

      it("shows as the body text's spelling and survives a settle of its paragraph", async () => {
        const mounted = await mount();
        expect(shownText(mounted.lexical)).toContain(`src="a${spelling}b.jpg"`);

        await select(mounted.lexical, " y", 2);
        await type(mounted.lexical, "\\");
        await commit(mounted);
        expect(objectIn(paraContent(mounted.ref.current?.getUsj()), "figure")).toEqual(FIGURE);
      });

      for (const flavor of PASTED_FLAVORS)
        it(`copies and pastes back as U+00A0, ${flavor.label}`, async () => {
          const mounted = await mount();
          const flavors = await copyBlock(mounted.lexical, 2);
          expectNoStandIn([...flavors.values()]);
          await select(mounted.lexical, DEPART, DEPART.length);
          await paste(mounted.lexical, flavor.pick(flavors));
          await commit(mounted);

          const usj = mounted.ref.current?.getUsj();
          expectNoStandIn(usj);
          expect(objectIn(paraContent(withLastParaFirst(usj)), "figure")).toEqual(FIGURE);
        });
    });
  });

describe("a collapsed note's \\cat no-break space", () => {
  for (const { label, allow } of SETTINGS)
    it(`copies the way the rest of the copy spells one, ${label}`, async () => {
      const note: MarkerObject = {
        type: "note",
        marker: "f",
        caller: "+",
        category: `c${NBSP}d`,
        content: [{ type: "char", marker: "ft", content: [`n${NBSP}e`] }],
      };
      const mounted = await mountInView(usjWith(["x ", note, " y"]), viewWith("standard", allow));
      const flavors = await copyBlock(mounted.lexical, 2);
      const spelled = allow ? NBSP : "~";
      expect(flavors.get("text/plain")).toContain(`\\cat c${spelled}d\\cat*`);
      expect(flavors.get("text/plain")).toContain(`n${spelled}e`);
    });
});

describe("an attribute value's no-break space when its span is unwrapped", () => {
  for (const { label, allow } of SETTINGS)
    it(`stays U+00A0 in the bytes the span leaves behind, ${label}`, async () => {
      const word = withAttributes(
        { type: "char", marker: "w", content: ["word"] },
        { lemma: `h${NBSP}i` },
      );
      const mounted = await mountInView(usjWith(["x ", word, " y"]), viewWith("standard", allow));
      await act(async () =>
        mounted.lexical.update(
          () => {
            const glyph = $getRoot()
              .getAllTextNodes()
              .find((node) => node.getTextContent() === "\\w");
            if (!glyph) throw new Error("no opening glyph");
            glyph.select(0, glyph.getTextContentSize());
            const selection = $getSelection();
            if (!$isRangeSelection(selection)) throw new Error("no range selection");
            selection.removeText();
          },
          { discrete: true },
        ),
      );
      await commit(mounted);

      const usj = mounted.ref.current?.getUsj();
      expectNoStandIn(usj);
      expect(JSON.stringify(paraContent(usj))).toContain(`|h${NBSP}i`);
      expect(objectIn(paraContent(usj), "char")).toBeUndefined();
    });
});

describe("an attribute value's no-break space when a paragraph break empties its span", () => {
  for (const { label, allow } of SETTINGS)
    it(`stays U+00A0 in the bytes the emptied span leaves behind, ${label}`, async () => {
      const word = withAttributes(
        { type: "char", marker: "w", content: ["word"] },
        { lemma: `h${NBSP}i` },
      );
      const mounted = await mountInView(usjWith(["x ", word, " y"]), viewWith("standard", allow));
      // Just after the opening glyph's separator, before the span's first character.
      await select(mounted.lexical, "word", 0);
      await act(async () => {
        mounted.lexical.dispatchCommand(KEY_ENTER_COMMAND, null);
      });
      await commit(mounted);

      const usj = mounted.ref.current?.getUsj();
      expectNoStandIn(usj);
      expect(paraContent(usj, 3)).toEqual([
        { type: "char", marker: "w", content: ["word"] },
        `|h${NBSP}i y`,
      ]);
    });
});

describeInView("unformatted")(
  "an attribute value's no-break space in Unformatted view, where it shows as itself",
  () => {
    const word = withAttributes(
      { type: "char", marker: "w", content: ["word"] },
      { lemma: `h${NBSP}i` },
    );
    const milestone = withAttributes({ type: "ms", marker: "qt-s" }, { who: `A${NBSP}B` });
    const verse: MarkerObject = { type: "verse", marker: "v", number: "1", pubnumber: `2${NBSP}b` };
    const content: MarkerContent[] = [verse, "x ", word, " y", milestone, "z"];

    for (const { label, allow } of SETTINGS) {
      it(`survives a settle of its paragraph, ${label}`, async () => {
        const mounted = await mountInView(usjWith(content), viewWith("unformatted", allow));
        expect(shownText(mounted.lexical)).toContain(`|h${NBSP}i`);
        await select(mounted.lexical, " y", 2);
        await type(mounted.lexical, "\\");
        await commit(mounted);

        const para = paraContent(mounted.ref.current?.getUsj());
        expect(objectIn(para, "verse")).toEqual(verse);
        expect(objectIn(para, "char")).toEqual(word);
        expect(objectIn(para, "ms")).toEqual(milestone);
      });

      it(`survives an edit to the value, ${label}`, async () => {
        const mounted = await mountInView(usjWith(content), viewWith("unformatted", allow));
        await select(mounted.lexical, `|A${NBSP}B`, 3);
        await type(mounted.lexical, "x");
        await commit(mounted);

        expect(objectIn(paraContent(mounted.ref.current?.getUsj()), "ms")).toEqual(
          withAttributes({ type: "ms", marker: "qt-s" }, { who: `A${NBSP}xB` }),
        );
      });
    }
  },
);

describe("an attribute value's no-break space in the views that do not show attributes", () => {
  for (const name of enabledViews(["formatted", "paragraph-structure"] as const))
    for (const { label, allow } of SETTINGS)
      it(`stays U+00A0 through an edit in ${name} view, ${label}`, async () => {
        const word = withAttributes(
          { type: "char", marker: "w", content: ["word"] },
          { lemma: `h${NBSP}i` },
        );
        const milestone = withAttributes({ type: "ms", marker: "qt-s" }, { who: `A${NBSP}B` });
        const mounted = await mountInView(
          usjWith(["x ", word, " y", milestone, "z"]),
          viewWith(name, allow),
        );
        expect(shownText(mounted.lexical)).not.toContain(`h${NBSP}i`);
        await select(mounted.lexical, " y", 2);
        await type(mounted.lexical, "q");

        const content = paraContent(mounted.ref.current?.getUsj());
        expect(objectIn(content, "char")).toEqual(word);
        expect(objectIn(content, "ms")).toEqual(milestone);
      });
});

describe("an author's literal `~` in a milestone's attribute value in Standard view, allowInvisibleCharacters off", () => {
  // ParatextData keeps a `~` in an attribute value as `~`: only body text and `\vp` read it as a
  // no-break space. Standard view shows a value's no-break space as `~` too, so a settle of the
  // paragraph cannot tell the two apart and reads the author's `~` back as U+00A0. Char-span
  // attributes, `\cat`, `\ca`/`\cp` and `\va` do the same. The fix is a product call: row O-12 of
  // paranext-core's Scripture-Data-Fidelity-Catalog.md.
  it.fails("keeps the `~` through a settle of its paragraph", async () => {
    const mounted = await mountInView(
      usjWith(["x ", withAttributes({ type: "ms", marker: "qt-s" }, { who: "A~B" }), "y z"]),
      viewWith("standard", false),
    );
    await select(mounted.lexical, "y z", 3);
    await type(mounted.lexical, "\\");
    await commit(mounted);

    expect(pick(objectIn(paraContent(mounted.ref.current?.getUsj()), "ms"), ["who"])).toEqual({
      who: "A~B",
    });
  });
});
