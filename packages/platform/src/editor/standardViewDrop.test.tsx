/**
 * A drop into Standard view goes in as a paste of the same data does
 * (`$handleDropForStandardView`): control characters as spaces, no-break spaces resolved by
 * position, `\c`/`\id` stripped, lines replayed as paragraph splits, a structure-protected
 * document's refusal left to `StructureKeyboardPlugin`, an attribute run's bytes kept in the run,
 * and this editor's own node-tree flavor left to Lexical's insertion. Every row runs with
 * `ViewOptions.allowInvisibleCharacters` off and on, since the two spell a stored no-break space
 * differently.
 */
import { editorView, mountInView, MountedEditor } from "./editorViews.test-helpers";
import { $handleDropForStandardView } from "./markerEdit/whitespaceDisplay.plugin.utils";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createPoint,
  $createRangeSelection,
  $getRoot,
  $setSelection,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  LexicalEditor,
  TextNode,
} from "lexical";
import { NBSP } from "shared";
import { getNbspSpelling, ViewOptions } from "shared-react";
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

/** Every top-level item of the document after the chapter line. */
function body(mounted: MountedEditor): MarkerContent[] | undefined {
  return mounted.ref.current?.getUsj()?.content.slice(2);
}

function countOf(mounted: MountedEditor, type: string): number {
  return (mounted.ref.current?.getUsj()?.content ?? []).filter(
    (item) => typeof item !== "string" && item.type === type,
  ).length;
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

/** Selects from `from` in the text holding `fromText` to `to` in the text holding `toText`. */
async function selectAcross(
  lexical: LexicalEditor,
  [fromText, from]: [string, number],
  [toText, to]: [string, number],
) {
  await act(async () =>
    lexical.update(() => {
      const anchor = $textNodeContaining(fromText);
      const focus = $textNodeContaining(toText);
      const selection = $createRangeSelection();
      selection.anchor = $createPoint(
        anchor.getKey(),
        anchor.getTextContent().indexOf(fromText) + from,
        "text",
      );
      selection.focus = $createPoint(
        focus.getKey(),
        focus.getTextContent().indexOf(toText) + to,
        "text",
      );
      $setSelection(selection);
    }),
  );
}

async function settle(): Promise<void> {
  await act(async () => {
    for (let i = 0; i < 5; i += 1) await new Promise((resolve) => setTimeout(resolve, 0));
  });
}

/** A drop's data store as Lexical hands it on from the browser's `insertFromDrop` input event. */
function dataTransfer(flavors: { [format: string]: string }): DataTransfer {
  return {
    types: Object.keys(flavors),
    files: [],
    getData: (format: string) => flavors[format] ?? "",
  } as unknown as DataTransfer;
}

async function drop(lexical: LexicalEditor, flavors: { [format: string]: string }) {
  await act(async () => {
    lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, {
      dataTransfer: dataTransfer(flavors),
      inputType: "insertFromDrop",
      data: null,
      preventDefault: () => undefined,
    } as unknown as InputEvent);
  });
  await settle();
}

/** The `application/x-lexical-editor` flavor Lexical's own insertion reads as this editor's copy. */
function sameNamespaceFlavor(lexical: LexicalEditor): string {
  return JSON.stringify({ namespace: lexical._config.namespace, nodes: [] });
}

/**
 * Whether `$handleDropForStandardView` claims `flavors` dropped at the current selection. A claimed
 * drop is inserted, so check a claim last.
 */
function claims(
  lexical: LexicalEditor,
  view: ViewOptions,
  flavors: { [format: string]: string },
  isStructureProtected: boolean,
): boolean {
  let claimed: boolean | undefined;
  lexical.update(
    () => {
      claimed = $handleDropForStandardView(
        dataTransfer(flavors),
        isStructureProtected,
        () => undefined,
        () => undefined,
        getNbspSpelling(view),
      );
    },
    { discrete: true },
  );
  if (claimed === undefined) throw new Error("the drop handler never ran");
  return claimed;
}

function wordWithLemma(lemma: string, text: string): MarkerObject {
  return Object.assign({ type: "char", marker: "w", content: [text] }, { lemma });
}

describe.each([false, true])("a drop into Standard view, allowInvisibleCharacters %s", (allow) => {
  const view: ViewOptions = { ...editorView("standard"), allowInvisibleCharacters: allow };

  it("drops one line in as a stored no-break space and a control character as a space", async () => {
    const mounted = await mountInView(usjWith(["ab"]), view);
    await select(mounted.lexical, "ab", 1);

    await drop(mounted.lexical, { "text/plain": `x${NBSP}y\u001Az` });

    expect(body(mounted)?.[0]).toMatchObject({ content: [`ax${NBSP}y zb`] });
  });

  it("drops a tilde as the project spells it", async () => {
    const mounted = await mountInView(usjWith(["ab"]), view);
    await select(mounted.lexical, "ab", 1);

    await drop(mounted.lexical, { "text/plain": "x~y" });

    // Off, `~` is the project's spelling of a no-break space; on, it is an ordinary character.
    expect(body(mounted)?.[0]).toMatchObject({ content: [`ax${allow ? "~" : NBSP}yb`] });
  });

  it("replays a multi-line drop as paragraph splits", async () => {
    const mounted = await mountInView(usjWith(["ab"]), view);
    await select(mounted.lexical, "ab", 1);

    await drop(mounted.lexical, { "text/plain": `one${NBSP}x\ntwo` });

    expect(body(mounted)).toEqual([
      { type: "para", marker: "p", content: [`aone${NBSP}x`] },
      { type: "para", marker: "p", content: ["twob"] },
      { type: "para", marker: "p", content: ["depart here"] },
    ]);
  });

  it("strips a dropped `\\c`, keeping the text around it", async () => {
    const mounted = await mountInView(usjWith(["ab"]), view);
    await select(mounted.lexical, "ab", 1);

    await drop(mounted.lexical, { "text/plain": "x \\c 7 y" });

    expect(countOf(mounted, "chapter")).toBe(1);
    expect(body(mounted)?.[0]).toMatchObject({ content: ["ax yb"] });
  });

  it.each(["\\id MAT", "\\c 5\n\\id MAT"])(
    "takes a drop of %j over a selection as nothing at all",
    async (payload) => {
      const mounted = await mountInView(usjWith(["ab"]), view);
      await select(mounted.lexical, "ab", 0, 1);

      await drop(mounted.lexical, { "text/plain": payload });

      expect(countOf(mounted, "chapter")).toBe(1);
      expect(countOf(mounted, "book")).toBe(1);
      expect(body(mounted)?.[0]).toMatchObject({ content: ["ab"] });
    },
  );

  it("keeps a drop into an attribute run in the run, its lines joined", async () => {
    const mounted = await mountInView(usjWith(["x ", wordWithLemma("grace", "gracious")]), view);
    // `lemma` is `\w`'s default attribute, so the run shows as `|grace`.
    await select(mounted.lexical, "|grace", "|grace".length);

    await drop(mounted.lexical, { "text/plain": "ful\nly" });

    expect(body(mounted)).toEqual([
      { type: "para", marker: "p", content: ["x ", wordWithLemma("graceful ly", "gracious")] },
      { type: "para", marker: "p", content: ["depart here"] },
    ]);

    // Even this editor's own node-tree flavor is taken as text there: Lexical's insertion would
    // merge the run into the text around it.
    const internal = {
      "application/x-lexical-editor": sameNamespaceFlavor(mounted.lexical),
      "text/plain": "x",
    };
    expect(claims(mounted.lexical, view, internal, false)).toBe(true);
  });

  it("leaves a drop carrying this editor's own node-tree flavor to Lexical's insertion", async () => {
    const mounted = await mountInView(usjWith(["ab"]), view);
    await select(mounted.lexical, "ab", 1);
    const flavors = {
      "application/x-lexical-editor": sameNamespaceFlavor(mounted.lexical),
      "text/plain": "x",
    };

    expect(claims(mounted.lexical, view, flavors, false)).toBe(false);
    // Lexical rebuilds the flavor's nodes (none here) and never reads its `text/plain`.
    await drop(mounted.lexical, flavors);
    expect(body(mounted)?.[0]).toMatchObject({ content: ["ab"] });

    // Protected, the node tree would reach the html sanitizer, so the text is taken instead.
    expect(claims(mounted.lexical, view, flavors, true)).toBe(true);
  });

  describe("structure-protected", () => {
    it("joins a multi-line drop's lines with spaces instead of splitting", async () => {
      const mounted = await mountInView(usjWith(["ab"]), view, {
        structureProtectionMode: "protected",
      });
      await select(mounted.lexical, "ab", 1);

      await drop(mounted.lexical, { "text/plain": "one\ntwo" });

      expect(body(mounted)).toEqual([
        { type: "para", marker: "p", content: ["aone twob"] },
        { type: "para", marker: "p", content: ["depart here"] },
      ]);
    });

    it("declines a selection across paragraphs, leaving the refusal to StructureKeyboardPlugin", async () => {
      const mounted = await mountInView(usjWith(["ab"]), view, {
        structureProtectionMode: "protected",
      });
      await selectAcross(mounted.lexical, ["ab", 1], ["depart here", 2]);

      expect(claims(mounted.lexical, view, { "text/plain": "x" }, true)).toBe(false);

      await drop(mounted.lexical, { "text/plain": "x" });
      expect(body(mounted)).toEqual([
        { type: "para", marker: "p", content: ["ab"] },
        { type: "para", marker: "p", content: ["depart here"] },
      ]);
    });
  });
});
