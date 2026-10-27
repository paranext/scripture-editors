/**
 * What a pasted no-break space becomes in Standard view, with `ViewOptions.allowInvisibleCharacters`
 * off (a stored no-break space shows as `~`) and on (it shows as a blank internal stand-in, and `~`
 * is an ordinary character). Every paste here is a real paste event through the editor, read back
 * with `getUsj()`.
 *
 * A pasted U+00A0 is the user's character wherever it sits — alone, first or last in the paste or a
 * line of it, beside a space or another U+00A0, beside a closing marker or in front of a marker — and
 * is kept as a stored no-break space. The one place a pasted U+00A0 is read as a space is right after
 * an opening marker, where it is the marker's separator. Spaces in a run collapse to one space, as
 * data always does.
 */
import { editorView, mountInView, MountedEditor } from "./editorViews.test-helpers";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  COPY_COMMAND,
  LexicalEditor,
  PASTE_COMMAND,
  $setSelection,
  TextNode,
} from "lexical";
import { NBSP } from "shared";
import { ViewOptions } from "shared-react";
import { describe, expect, it } from "vitest";

function usjWith(paraContent: MarkerContent[]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
      { type: "chapter", marker: "c", number: "1" },
      { type: "para", marker: "p", content: paraContent },
      { type: "para", marker: "p", content: ["depart here"] },
    ],
  };
}

function standard(allowInvisibleCharacters: boolean): ViewOptions {
  return { ...editorView("standard"), allowInvisibleCharacters };
}

function paraContent(mounted: MountedEditor, index = 2): MarkerContent[] | undefined {
  const para = mounted.ref.current?.getUsj()?.content[index];
  return typeof para === "object" ? para.content : undefined;
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

/** Moves the caret out of the edited paragraph and commits, so the paragraph's USJ is settled. */
async function commit(mounted: MountedEditor): Promise<void> {
  await select(mounted.lexical, "depart here", 2);
  act(() => mounted.ref.current?.commitPendingMarkerEdits());
  await settle();
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

/**
 * Copies `length` display characters starting `from` characters into the text node holding
 * `anchorText`, and returns the text flavors written — the internal Lexical flavor left out, as a
 * real Ctrl+V reads the clipboard through `navigator.clipboard.read()`, which never carries it.
 */
async function copyTextFlavors(
  lexical: LexicalEditor,
  anchorText: string,
  from: number,
  length: number,
): Promise<{ [format: string]: string }> {
  await select(lexical, anchorText, from, from + length);
  const store = new Map<string, string>();
  await act(async () =>
    lexical.update(() => {
      if (!$isRangeSelection($getSelection())) throw new Error("no range selection");
      lexical.dispatchCommand(COPY_COMMAND, clipboardEvent(store, "copy"));
    }),
  );
  store.delete("application/x-lexical-editor");
  return Object.fromEntries(store);
}

/** Pastes `flavors` between `a` and `b` of a paragraph `ab`, and returns that paragraph's USJ. */
async function pasteIntoAb(
  allowInvisibleCharacters: boolean,
  flavors: { [format: string]: string },
): Promise<MarkerContent[] | undefined> {
  const mounted = await mountInView(usjWith(["ab"]), standard(allowInvisibleCharacters));
  await select(mounted.lexical, "ab", 1);
  await pasteFlavors(mounted.lexical, flavors);
  await commit(mounted);
  return paraContent(mounted);
}

/** `[label, pasted text, paragraph text after the paste]` — the same in both settings. */
const SETTING_INDEPENDENT_TEXT_CASES: [string, string, string][] = [
  ["a lone U+00A0", NBSP, `a${NBSP}b`],
  ["a U+00A0 first, before text", `${NBSP}cd`, `a${NBSP}cdb`],
  ["a U+00A0 last, after text", `cd${NBSP}`, `acd${NBSP}b`],
  ["a U+00A0 between words", `c${NBSP}d`, `ac${NBSP}db`],
  ["a space, then a U+00A0", ` ${NBSP}`, `a ${NBSP}b`],
  ["a U+00A0, then a space", `${NBSP} `, `a${NBSP} b`],
  ["two U+00A0s", `${NBSP}${NBSP}`, `a${NBSP}${NBSP}b`],
  ["a run of plain spaces, which collapses to one", "c   d", "ac db"],
  ["U+001A, which comes in as a space", "\u001A", "a b"],
];

describe.each<[string, boolean]>([
  ["off", false],
  ["on", true],
])("a no-break space pasted into Standard view, allowInvisibleCharacters %s", (_, allow) => {
  describe("from a foreign app's text/plain", () => {
    it.each(SETTING_INDEPENDENT_TEXT_CASES)("%s", async (_label, pasted, expected) => {
      expect((await pasteIntoAb(allow, { "text/plain": pasted }))?.[0]).toBe(expected);
    });

    it("keeps a U+00A0 first on a later line, on that line", async () => {
      const mounted = await mountInView(usjWith(["ab"]), standard(allow));
      await select(mounted.lexical, "ab", 1);
      await pasteFlavors(mounted.lexical, { "text/plain": `c\n${NBSP}d` });
      await commit(mounted);

      expect(paraContent(mounted, 3)).toEqual([`${NBSP}db`]);
    });

    it("reads `~` as the project spells it", async () => {
      expect(await pasteIntoAb(allow, { "text/plain": "c~d" })).toEqual([
        allow ? "ac~db" : `ac${NBSP}db`,
      ]);
    });
  });

  describe("from a foreign app's text/html with no text/plain", () => {
    it.each<[string, string, string]>([
      ["a lone &nbsp;", "<span>&nbsp;</span>", `a${NBSP}b`],
      ["an &nbsp; first in a block", "<p>&nbsp;cd</p>", `a${NBSP}cdb`],
      ["an &nbsp; between words", "<p>c&nbsp;d</p>", `ac${NBSP}db`],
      // A browser writes `&nbsp;` for a space its html would otherwise collapse; html is read only
      // when the clipboard has no text/plain, and the NBSP is then kept rather than guessed away.
      ["an &nbsp; beside a space", "<p>c&nbsp; d</p>", `ac${NBSP} db`],
    ])("%s", async (_label, html, expected) => {
      expect((await pasteIntoAb(allow, { "text/html": html }))?.[0]).toBe(expected);
    });
  });

  describe("next to a marker token", () => {
    it("after an opener, as the marker's separator", async () => {
      expect(await pasteIntoAb(allow, { "text/plain": `\\nd${NBSP}Lord\\nd*` })).toEqual([
        "a",
        { type: "char", marker: "nd", content: ["Lord"] },
        "b",
      ]);
    });

    it("a `~` right after an opener, which is no separator, loses no text", async () => {
      // `~` is not whitespace, so the tokenizer reads `\\nd~Lord` as one marker name, as
      // ParatextData does: every byte survives, in the marker's name.
      const mounted = await mountInView(usjWith(["ab"]), standard(allow));
      await select(mounted.lexical, "ab", 1);
      await pasteFlavors(mounted.lexical, { "text/plain": "\\nd~Lord\\nd*" });
      await commit(mounted);

      expect(mounted.ref.current?.getUsj()?.content.slice(2, 4)).toEqual([
        { type: "para", marker: "p", content: ["a"] },
        { type: "para", marker: "nd~Lord", content: [{ type: "unmatched", marker: "nd*" }, "b"] },
      ]);
    });

    it("before a closer, as a stored no-break space", async () => {
      expect(await pasteIntoAb(allow, { "text/plain": `\\nd Lord${NBSP}\\nd*` })).toEqual([
        "a",
        { type: "char", marker: "nd", content: [`Lord${NBSP}`] },
        "b",
      ]);
    });
  });
});

describe.each<[string, boolean]>([
  ["off", false],
  ["on", true],
])("Standard view's own copy pasted back, allowInvisibleCharacters %s", (_, allow) => {
  /**
   * Loads `stored` (which starts with `q`) as a paragraph, copies `length` characters of it from
   * `from` characters past the `q`, pastes the copy's `flavors` between `a` and `b` of the next
   * paragraph, and returns that paragraph's USJ.
   */
  async function roundTrip(
    stored: string,
    from: number,
    length: number,
    flavors: readonly string[],
  ): Promise<MarkerContent[] | undefined> {
    const usj = usjWith([stored]);
    usj.content.splice(3, 0, { type: "para", marker: "p", content: ["ab"] });
    const mounted = await mountInView(usj, standard(allow));
    const copied = await copyTextFlavors(mounted.lexical, "q", from, length);
    await select(mounted.lexical, "ab", 1);
    await pasteFlavors(
      mounted.lexical,
      Object.fromEntries(Object.entries(copied).filter(([format]) => flavors.includes(format))),
    );
    await commit(mounted);
    return paraContent(mounted, 3);
  }

  describe.each<[string, readonly string[]]>([
    ["text/plain and text/html", ["text/plain", "text/html"]],
    ["text/html alone", ["text/html"]],
  ])("its %s", (_flavorLabel, flavors) => {
    it.each<[string, string, number, number, string]>([
      ["a stored no-break space alone", `q${NBSP}y`, 1, 1, `a${NBSP}b`],
      ["a stored no-break space first", `q${NBSP}cd`, 1, 3, `a${NBSP}cdb`],
      ["a stored no-break space last", `qcd${NBSP}x`, 1, 3, `acd${NBSP}b`],
      ["a stored no-break space after a space", `q ${NBSP}y`, 1, 2, `a ${NBSP}b`],
      ["a stored no-break space before a space", `q${NBSP} y`, 1, 2, `a${NBSP} b`],
      ["a displayed run of spaces, which collapses to one", "qx   y", 1, 5, "ax yb"],
    ])("%s", async (_label, stored, from, length, expected) => {
      expect(await roundTrip(stored, from, length, flavors)).toEqual([expected]);
    });
  });

  /**
   * Loads `stored` as a paragraph, copies from just after its leading `q` to the end of the text
   * node holding `z`, pastes the copy's text flavors between `a` and `b` of the next paragraph, and
   * returns that paragraph's USJ.
   */
  async function roundTripAcrossNodes(
    stored: MarkerContent[],
  ): Promise<{ copied: string | undefined; pasted: MarkerContent[] | undefined }> {
    const usj = usjWith(stored);
    usj.content.splice(3, 0, { type: "para", marker: "p", content: ["ab"] });
    const mounted = await mountInView(usj, standard(allow));
    await act(async () =>
      mounted.lexical.update(() => {
        const first = $textNodeContaining("q");
        const last = $textNodeContaining("z");
        const selection = $createRangeSelection();
        selection.anchor.set(first.getKey(), first.getTextContent().indexOf("q") + 1, "text");
        selection.focus.set(last.getKey(), last.getTextContentSize(), "text");
        $setSelection(selection);
      }),
    );
    const store = new Map<string, string>();
    await act(async () =>
      mounted.lexical.update(() => {
        mounted.lexical.dispatchCommand(COPY_COMMAND, clipboardEvent(store, "copy"));
      }),
    );
    store.delete("application/x-lexical-editor");
    await select(mounted.lexical, "ab", 1);
    await pasteFlavors(mounted.lexical, Object.fromEntries(store));
    await commit(mounted);
    return { copied: store.get("text/plain"), pasted: paraContent(mounted, 3) };
  }

  const nd: MarkerContent = { type: "char", marker: "nd", content: ["L"] };
  // With the setting on, the copy writes a stored no-break space as U+00A0, beside the marker as
  // anywhere else; only a U+00A0 right after an opening marker is read back as its separator.
  it.each<[string, MarkerContent[], MarkerContent[]]>([
    ["a stored no-break space right after a closer", ["q", nd, `${NBSP}z`], ["a", nd, `${NBSP}zb`]],
    [
      "a stored no-break space right before an opener",
      [`qy${NBSP}`, nd, "z"],
      [`ay${NBSP}`, nd, "zb"],
    ],
  ])("%s", async (_label, stored, expected) => {
    expect(await roundTripAcrossNodes(stored)).toMatchObject({ pasted: expected });
  });
});
