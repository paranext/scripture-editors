/**
 * A no-break space (U+00A0) inside a marker's attribute value — a character span's `|lemma`, a
 * milestone's `who`, a figure's `src`, a note's `\cat`, a verse's `\va`/`\vp`, a chapter's
 * `\ca`/`\cp` — is shown in Standard view as the internal stand-in under either
 * `ViewOptions.allowInvisibleCharacters` setting, because the engine reads an on-screen U+00A0 as
 * display spacing, and a `~` beside it is an ordinary character either way: Paratext keeps an
 * attribute value's bytes as they are, reading `~` as a no-break space only in body text. Both
 * survive every re-read of the displayed bytes: a settle of its paragraph, an edit to the value, an
 * unsettled read, and copy and paste. The `|…` bytes a span leaves behind when it is unwrapped are
 * body text, so they spell a no-break space the way body text does. Unformatted view shows the
 * value as it is and its settle keeps both too; the views that hide markers never show it at all.
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
  /** The displayed value text, its no-break space spelled `spelling`. */
  shown: (spelling: string) => string;
  /** Where in {@link Shape.shown} to type, just after the no-break space. */
  typeAt: number;
  /** The document's attribute values, from a `getUsj()` result. */
  values: (usj: Usj | undefined) => unknown;
  /** What {@link Shape.values} gives: the value's U+00A0 and `~`, with `typed` just after the
   * U+00A0. */
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

/** `value` with every U+00A0 in its strings, however deep, spelled `~`. */
function withNbspAsTilde<T>(value: T): T {
  return JSON.parse(JSON.stringify(value).replaceAll(NBSP, "~"));
}

const SHAPES: Shape[] = [
  {
    name: "a character span's default attribute",
    view: "standard",
    usj: usjWith([
      "x ",
      withAttributes({ type: "char", marker: "w", content: ["word"] }, { lemma: `h${NBSP}i~j` }),
      " y",
    ]),
    shown: (spelling) => `|h${spelling}i~j`,
    typeAt: 3,
    values: (usj) => pick(objectIn(paraContent(usj), "char"), ["lemma"]),
    expected: (typed = "") => ({ lemma: `h${NBSP}${typed}i~j` }),
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
        { lemma: `h${NBSP}i~j`, strong: `H${NBSP}1~2` },
      ),
      " y",
    ]),
    shown: (spelling) => `|lemma="h${spelling}i~j" strong="H${spelling}1~2"`,
    typeAt: 10,
    values: (usj) => pick(objectIn(paraContent(usj), "char"), ["lemma", "strong"]),
    expected: (typed = "") => ({ lemma: `h${NBSP}${typed}i~j`, strong: `H${NBSP}1~2` }),
    elsewhere: " y",
    copies: true,
  },
  {
    name: "a milestone's attribute",
    view: "standard",
    usj: usjWith([
      "x ",
      withAttributes({ type: "ms", marker: "qt-s" }, { who: `A${NBSP}B~C` }),
      "y z",
    ]),
    shown: (spelling) => `|A${spelling}B~C`,
    typeAt: 3,
    values: (usj) => pick(objectIn(paraContent(usj), "ms"), ["who"]),
    expected: (typed = "") => ({ who: `A${NBSP}${typed}B~C` }),
    elsewhere: "y z",
    copies: true,
  },
  {
    name: "a verse's \\va and \\vp",
    view: "standard",
    usj: usjWith([
      {
        type: "verse",
        marker: "v",
        number: "1",
        altnumber: `1${NBSP}a~b`,
        pubnumber: `2${NBSP}b~c`,
      },
      "verse y",
    ]),
    shown: (spelling) => `2${spelling}b~c`,
    typeAt: 2,
    values: (usj) => pick(objectIn(paraContent(usj), "verse"), ["altnumber", "pubnumber"]),
    expected: (typed = "") => ({ altnumber: `1${NBSP}a~b`, pubnumber: `2${NBSP}${typed}b~c` }),
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
        category: `c${NBSP}d~e`,
        content: [{ type: "char", marker: "ft", content: ["note"] }],
      },
      " y",
    ]),
    shown: (spelling) => `c${spelling}d~e`,
    typeAt: 2,
    values: (usj) => pick(objectIn(paraContent(usj), "note"), ["category"]),
    expected: (typed = "") => ({ category: `c${NBSP}${typed}d~e` }),
    elsewhere: "note",
    copies: true,
  },
  {
    name: "a chapter's \\ca and \\cp",
    view: "standard",
    usj: usjWith(["text"], { altnumber: `3${NBSP}c~d`, pubnumber: `I${NBSP}A~B` }),
    shown: (spelling) => `I${spelling}A~B`,
    typeAt: 2,
    values: (usj) => {
      const chapter = usj?.content[1];
      return pick(typeof chapter === "object" ? chapter : undefined, ["altnumber", "pubnumber"]);
    },
    expected: (typed = "") => ({ altnumber: `3${NBSP}c~d`, pubnumber: `I${NBSP}${typed}A~B` }),
    copies: false,
  },
];

const FIGURE = withAttributes(
  { type: "figure", marker: "fig", content: ["cap"] },
  { file: `a${NBSP}b~c.jpg`, size: "col", ref: "1.1" },
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

/** `copiedBody` is how the USFM a copy writes spells a no-break space in body text; an attribute
 * value's no-break space copies as U+00A0 under either setting. */
const SETTINGS = [
  { label: "allowInvisibleCharacters off", allow: false, copiedBody: "~" },
  { label: "allowInvisibleCharacters on", allow: true, copiedBody: NBSP },
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

for (const { label, allow } of SETTINGS)
  describe(`an attribute value's no-break space and \`~\` in Standard view, ${label}`, () => {
    for (const shape of SHAPES.filter(({ view }) => isViewEnabled(view)))
      describe(`in ${shape.name}`, () => {
        const mount = (options?: Parameters<typeof mountInView>[2]) =>
          mountInView(shape.usj, viewWith(shape.view, allow), options);

        it("shows the no-break space as the stand-in and loads both as they are", async () => {
          const mounted = await mount();
          expect(shownText(mounted.lexical)).toContain(shape.shown(NBSP_STAND_IN));
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
            expect(shownText(mounted.lexical)).toContain(shape.shown(NBSP_STAND_IN));
          });
        }

        it("survives an edit to the value, read before and after it settles", async () => {
          const changes: unknown[] = [];
          const mounted = await mount({
            onUsjChange: (usj, ops) => changes.push(usj, ops),
          });
          await select(mounted.lexical, shape.shown(NBSP_STAND_IN), shape.typeAt);
          await type(mounted.lexical, "x");

          const unsettled = mounted.ref.current?.getUsj();
          expect(shape.values(unsettled)).toEqual(shape.expected("x"));
          expectNoStandIn(unsettled);

          await commit(mounted);
          const usj = mounted.ref.current?.getUsj();
          expect(shape.values(usj)).toEqual(shape.expected("x"));
          expectNoStandIn(usj);
          expectNoStandIn(changes);
          expect(shownText(mounted.lexical)).toContain(
            shape.shown(NBSP_STAND_IN).replace(NBSP_STAND_IN, `${NBSP_STAND_IN}x`),
          );
        });

        if (shape.copies)
          for (const flavor of PASTED_FLAVORS)
            it(`copies U+00A0 and \`~\` as they are and pastes them back, ${flavor.label}`, async () => {
              const mounted = await mount();
              const flavors = await copyBlock(mounted.lexical, 2);
              expectNoStandIn([...flavors.values()]);
              expect(flavors.get("text/plain")).toContain(shape.shown(NBSP));
              await select(mounted.lexical, DEPART, DEPART.length);
              await paste(mounted.lexical, flavor.pick(flavors));
              await commit(mounted);

              const usj = mounted.ref.current?.getUsj();
              expectNoStandIn(usj);
              // A pasted U+00A0 is a stored no-break space where the project stores one as itself;
              // otherwise a paste takes it as `~`, as Paratext 9 does, and in a value that is a `~`.
              expect(shape.values(withLastParaFirst(usj))).toEqual(
                allow ? shape.expected() : withNbspAsTilde(shape.expected()),
              );
            });
      });

    describe("in a figure's attributes", () => {
      const mount = () => mountInView(usjWith(["x ", FIGURE, " y"]), viewWith("standard", allow));

      it("shows as the stand-in and survives a settle of its paragraph", async () => {
        const mounted = await mount();
        expect(shownText(mounted.lexical)).toContain(`src="a${NBSP_STAND_IN}b~c.jpg"`);

        await select(mounted.lexical, " y", 2);
        await type(mounted.lexical, "\\");
        await commit(mounted);
        expect(objectIn(paraContent(mounted.ref.current?.getUsj()), "figure")).toEqual(FIGURE);
      });

      for (const flavor of PASTED_FLAVORS)
        it(`copies U+00A0 and \`~\` as they are and pastes them back, ${flavor.label}`, async () => {
          const mounted = await mount();
          const flavors = await copyBlock(mounted.lexical, 2);
          expectNoStandIn([...flavors.values()]);
          expect(flavors.get("text/plain")).toContain(`src="a${NBSP}b~c.jpg"`);
          await select(mounted.lexical, DEPART, DEPART.length);
          await paste(mounted.lexical, flavor.pick(flavors));
          await commit(mounted);

          const usj = mounted.ref.current?.getUsj();
          expectNoStandIn(usj);
          expect(objectIn(paraContent(withLastParaFirst(usj)), "figure")).toEqual(
            allow ? FIGURE : withNbspAsTilde(FIGURE),
          );
        });
    });
  });

describe("text entered into an attribute value", () => {
  const milestone = withAttributes({ type: "ms", marker: "qt-s" }, { who: "AB" });
  const mount = (allow: boolean) =>
    mountInView(usjWith(["x ", milestone, "y z"]), viewWith("standard", allow));
  const who = (mounted: MountedEditor) =>
    pick(objectIn(paraContent(mounted.ref.current?.getUsj()), "ms"), ["who"]);

  for (const { label, allow } of SETTINGS) {
    it(`keeps a typed \`~\` as \`~\`, ${label}`, async () => {
      const mounted = await mount(allow);
      await select(mounted.lexical, "|AB", 2);
      await type(mounted.lexical, "~");
      await commit(mounted);
      expect(who(mounted)).toEqual({ who: "A~B" });
    });

    it(`keeps a \`~\` pasted inside a value, and reads a pasted U+00A0 as Paratext 9 does, ${label}`, async () => {
      const mounted = await mount(allow);
      await select(mounted.lexical, "|AB", 2);
      await paste(mounted.lexical, new Map([["text/plain", `p~q${NBSP}r`]]));
      await commit(mounted);
      const usj = mounted.ref.current?.getUsj();
      expectNoStandIn(usj);
      expect(pick(objectIn(paraContent(usj), "ms"), ["who"])).toEqual({
        who: allow ? `Ap~q${NBSP}rB` : "Ap~q~rB",
      });
    });
  }
});

describe("a collapsed note's \\cat no-break space", () => {
  for (const { label, allow, copiedBody } of SETTINGS)
    it(`copies as U+00A0, while the note's body text copies as body text does, ${label}`, async () => {
      const note: MarkerObject = {
        type: "note",
        marker: "f",
        caller: "+",
        category: `c${NBSP}d~e`,
        content: [{ type: "char", marker: "ft", content: [`n${NBSP}e`] }],
      };
      const mounted = await mountInView(usjWith(["x ", note, " y"]), viewWith("standard", allow));
      const flavors = await copyBlock(mounted.lexical, 2);
      expectNoStandIn([...flavors.values()]);
      expect(flavors.get("text/plain")).toContain(`\\cat c${NBSP}d~e\\cat*`);
      expect(flavors.get("text/plain")).toContain(`n${copiedBody}e`);
    });
});

describe("an attribute value's no-break space when its span is unwrapped", () => {
  // The bytes are body text once the span is gone, as they are in Paratext 9's file, so a `~` among
  // them is a no-break space wherever body text spells one that way.
  for (const { label, allow } of SETTINGS)
    it(`is a no-break space in the bytes the span leaves behind, ${label}`, async () => {
      const word = withAttributes(
        { type: "char", marker: "w", content: ["word"] },
        { lemma: `h${NBSP}i~j` },
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
      expect(JSON.stringify(paraContent(usj))).toContain(
        allow ? `|h${NBSP}i~j` : `|h${NBSP}i${NBSP}j`,
      );
      expect(objectIn(paraContent(usj), "char")).toBeUndefined();
    });
});

describe("an attribute value's no-break space when a paragraph break empties its span", () => {
  for (const { label, allow } of SETTINGS)
    it(`is a no-break space in the bytes the emptied span leaves behind, ${label}`, async () => {
      const word = withAttributes(
        { type: "char", marker: "w", content: ["word"] },
        { lemma: `h${NBSP}i~j` },
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
        allow ? `|h${NBSP}i~j y` : `|h${NBSP}i${NBSP}j y`,
      ]);
    });
});

describeInView("unformatted")(
  "an attribute value's no-break space and `~` in Unformatted view, where they show as themselves",
  () => {
    const word = withAttributes(
      { type: "char", marker: "w", content: ["word"] },
      { lemma: `h${NBSP}i~j` },
    );
    const milestone = withAttributes({ type: "ms", marker: "qt-s" }, { who: `A${NBSP}B~C` });
    const verse: MarkerObject = {
      type: "verse",
      marker: "v",
      number: "1",
      altnumber: `1${NBSP}a~b`,
      pubnumber: `2${NBSP}b~c`,
    };
    const content: MarkerContent[] = [verse, "x ", word, " y", milestone, "z"];

    for (const { label, allow } of SETTINGS) {
      it(`survives a settle of its paragraph, ${label}`, async () => {
        const mounted = await mountInView(usjWith(content), viewWith("unformatted", allow));
        expect(shownText(mounted.lexical)).toContain(`|h${NBSP}i~j`);
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
        await select(mounted.lexical, `|A${NBSP}B~C`, 3);
        await type(mounted.lexical, "x");
        await commit(mounted);

        expect(objectIn(paraContent(mounted.ref.current?.getUsj()), "ms")).toEqual(
          withAttributes({ type: "ms", marker: "qt-s" }, { who: `A${NBSP}xB~C` }),
        );
      });
    }
  },
);

describe("an attribute value's no-break space and `~` in the views that do not show attributes", () => {
  for (const name of enabledViews(["formatted", "paragraph-structure"] as const))
    for (const { label, allow } of SETTINGS)
      it(`stay as they are through an edit in ${name} view, ${label}`, async () => {
        const word = withAttributes(
          { type: "char", marker: "w", content: ["word"] },
          { lemma: `h${NBSP}i~j` },
        );
        const milestone = withAttributes({ type: "ms", marker: "qt-s" }, { who: `A${NBSP}B~C` });
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
