/**
 * Clipboard and range gestures in an annotated document, in the full editor, with the oracle's
 * whole annotation set (`$planAnnotations`) and without it: a cut, a copy pasted back, a plain-text
 * paste or a range edit made at a caret the annotations change the tree at must leave the same
 * document, screen and caret reports as in the document no annotation holds, at each spelling of
 * the caret. The transparency oracle runs these gestures at every such caret; these are the shapes
 * it first found apart.
 */
import {
  $globalSite,
  $planAnnotations,
  $spellings,
  observables,
} from "./annotationTransparency.oracle.test-helpers";
import { mountInView, ORACLE_TYPE } from "./annotationLocations.test-helpers";
import {
  $editableTexts,
  COPY_PASTE_KEYSTROKES,
  CUT_KEYSTROKES,
  OracleKeystroke,
  oracleRows,
  pendingOracleView,
  runKeystrokeCase,
  TRANSPARENCY_RANGE_KEYSTROKES,
} from "../markerEdit/pendingSettledOracle.test-helpers";
import { drainNativeSelectionChange } from "../editor-test.utils";
import { act } from "@testing-library/react";
import { $logicalText, NBSP } from "shared";
import { describe, expect, it } from "vitest";

/**
 * Run `keystroke` at byte `at` of the editable text spelled `text` in the `row` document of
 * `view`: in the document as loaded (`spelling` undefined), or with the oracle's annotation set
 * applied, at the caret's `spelling`-th spelling there. What the run reads, and the `text/plain`
 * its gesture wrote to the clipboard.
 */
async function gestureCase(
  view: string,
  row: string,
  text: string,
  at: number,
  keystroke: OracleKeystroke,
  spelling?: number,
): Promise<{ [name: string]: unknown }> {
  const usj = oracleRows(view).find(([name]) => name.startsWith(`${row} (`))?.[1];
  if (!usj) throw new Error(`no row ${row}`);
  const viewOptions = pendingOracleView(view);
  const mounted = await mountInView(usj, viewOptions);
  const site = mounted.lexical.getEditorState().read(() => {
    const index = $editableTexts().findIndex((node) => $logicalText(node) === text);
    if (index < 0) throw new Error(`no text ${JSON.stringify(text)}`);
    return $globalSite(index, at, false);
  });
  if (spelling !== undefined) {
    const plan = mounted.lexical.getEditorState().read(() => $planAnnotations(viewOptions));
    for (const { id, range } of plan)
      await act(async () => {
        mounted.ref.current?.setAnnotation(range, ORACLE_TYPE, id);
        await Promise.resolve();
      });
    await act(async () => {
      await drainNativeSelectionChange();
    });
  }
  const run = await runKeystrokeCase(
    mounted,
    view,
    () => $spellings(site)[spelling ?? 0],
    keystroke,
  );
  mounted.unmount();
  if (!run) return { applied: false };
  return {
    ...observables(run),
    clipboard: run.clipboard?.["text/plain"],
    clipboardNodes: nodesShape(run.clipboard?.["application/x-lexical-editor"]),
  };
}

/** A serialized clipboard node: its text, or its children. */
interface ClipboardNode {
  type: string;
  text?: string;
  children?: ClipboardNode[];
}

/** The nodes of a clipboard's `application/x-lexical-editor` flavor as their elements and text:
 * an element as `type(…)`, a text by its text, however a copy split the text into nodes. */
function nodesShape(lexical: string | undefined): string | undefined {
  if (lexical === undefined) return undefined;
  const parsed: { nodes: ClipboardNode[] } = JSON.parse(lexical);
  const shape = (nodes: ClipboardNode[]): string =>
    nodes
      .map((node) => (node.children ? `${node.type}(${shape(node.children)})` : (node.text ?? "")))
      .join("");
  return shape(parsed.nodes);
}

/** The keystroke of `keystrokes` called `name`. */
function named<T extends OracleKeystroke>(keystrokes: readonly T[], name: string): T {
  const found = keystrokes.find((keystroke) => keystroke.name === name);
  if (!found) throw new Error(`no keystroke ${name}`);
  return found;
}

describe("a copy pasted where an annotation mark starts", () => {
  it.each([
    // A copy holding a span's opener, pasted inside the span in front of a mark: Lexical splits
    // the span there, and its second half still holds the span's closer.
    [
      "standard",
      "closed char span",
      `${NBSP}grace`,
      1,
      "copy three bytes either side of the caret, then paste them at the caret",
    ],
    // A copy holding a whole span of the same marker, pasted in front of a mark inside the span:
    // the whole span lands between the two halves.
    [
      "standard",
      "closed char span",
      `${NBSP}grace`,
      5,
      "copy the whole block, then paste it at the caret",
    ],
  ] as const)(
    "%s view, %s: %j at %i, %s",
    async (view, row, text, at, name) => {
      const keystroke = named(COPY_PASTE_KEYSTROKES, name);
      const plain = await gestureCase(view, row, text, at, keystroke);
      expect(plain.applied, "the gesture applies in the document as loaded").not.toBe(false);
      for (const spelling of [0, 1])
        expect(
          await gestureCase(view, row, text, at, keystroke, spelling),
          `spelling ${spelling}`,
        ).toEqual(plain);
    },
    120_000,
  );
});

describe("a range with an end at a mark's edge beside a span", () => {
  it.each([
    // The range's start at the end of a mark, before a span: with no mark it starts inside the
    // span, and the cut takes the opener's byte only.
    ["standard", "closed char span", "In the ", 7, "cut the byte after the caret"],
    ["standard", "closed char span", "In the ", 7, 'Shift+Right, then type "x"'],
    ["standard", "closed char span", "In the ", 7, "Shift+Right, then Delete"],
    // The range's end at the start of a mark, after a paragraph marker's separator: with no mark
    // it ends in the separator.
    ["standard", "closed char span", "In the ", 0, 'Shift+Left, then type "x"'],
    // The range's end at the start of a mark, after a span: with no mark it ends inside the span.
    ["standard", "closed char span", " of God", 0, "cut the byte before the caret"],
  ] as const)(
    "%s view, %s: %j at %i, %s",
    async (view, row, text, at, name) => {
      const keystroke = named([...CUT_KEYSTROKES, ...TRANSPARENCY_RANGE_KEYSTROKES], name);
      const plain = await gestureCase(view, row, text, at, keystroke);
      expect(plain.applied, "the gesture applies in the document as loaded").not.toBe(false);
      expect(await gestureCase(view, row, text, at, keystroke, 0)).toEqual(plain);
    },
    120_000,
  );
});
