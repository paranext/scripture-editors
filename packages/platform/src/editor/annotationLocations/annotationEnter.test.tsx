/**
 * Enter and Shift+Enter pressed at a caret in a document whose display carriers annotations cut
 * into pieces and whose content they cut with marks, and in the same document with no annotations:
 * the key must produce the same document, the same screen and the same caret reports either way,
 * at each spelling of the caret where a cut or a mark's edge spells it twice. The key is pressed
 * the way the transparency oracle presses it (the caret placed, then the key's command). These are
 * the shapes the oracle first found apart, one per cause.
 */
import {
  $globalSite,
  $planAnnotations,
  $spellings,
} from "./annotationTransparency.oracle.test-helpers";
import { mountInView, ORACLE_TYPE } from "./annotationLocations.test-helpers";
import {
  $editableTexts,
  $screenBytes,
  CaseRun,
  depart,
  ENTER_KEYSTROKES,
  oracleRows,
  pendingOracleView,
  PositionReport,
  runKeystrokeCase,
  savedBytes,
} from "../markerEdit/pendingSettledOracle.test-helpers";
import { drainNativeSelectionChange } from "../editor-test.utils";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { KEY_ENTER_COMMAND } from "lexical";
import { $logicalText, NBSP } from "shared";

/** Each document position's reported locations, as one sorted set per position: a cut spells a
 * boundary position twice, and both spellings report the same places. */
function positionSets(reports: readonly PositionReport[]): string[] {
  const byPosition = new Map<number, Set<string>>();
  for (const { position, location } of reports) {
    let set = byPosition.get(position);
    if (!set) byPosition.set(position, (set = new Set()));
    set.add(location ?? "");
  }
  return [...byPosition]
    .sort(([a], [b]) => a - b)
    .map(([position, set]) => `${position}: ${[...set].sort().join(" | ")}`);
}

/** What an Enter case reads: the documents, the screens and the caret reports. */
function observed(run: CaseRun | undefined): { [name: string]: unknown } {
  if (!run) return { applied: false };
  return {
    pending: run.pending,
    settled: run.settled,
    pendingText: run.before.text,
    pendingScreen: run.before.screen,
    pendingPositions: positionSets(run.before.reported),
    settledScreen: run.shownLines,
    settledText: run.after.text,
    settledPositions: positionSets(run.after.reported),
  };
}

/**
 * Press Enter (Shift+Enter when `isShift`) with the caret at byte `at` of the editable text spelled
 * `text` in the `row` document of `view`: in the document as loaded (`spelling` undefined), or with
 * the oracle's annotations set, at the caret's `spelling`-th spelling there.
 */
async function enterCase(
  view: string,
  row: string,
  text: string,
  at: number,
  isShift: boolean,
  spelling?: number,
): Promise<{ [name: string]: unknown }> {
  const usj: Usj | undefined = oracleRows(view).find(([name]) => name.startsWith(`${row} (`))?.[1];
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
    expect(
      mounted.lexical.getEditorState().read(() => $spellings(site).length),
      "the caret has the spelling asked for",
    ).toBeGreaterThan(spelling);
  }
  const keystroke = ENTER_KEYSTROKES.find((each) => each.isShift === isShift);
  if (!keystroke) throw new Error("no Enter keystroke");
  const run = await runKeystrokeCase(
    mounted,
    view,
    () => $spellings(site)[spelling ?? 0],
    keystroke,
  );
  mounted.unmount();
  return observed(run);
}

/** Expect Enter (or Shift+Enter) at each of `spellings` to do what it does with no annotation. */
async function expectTransparent(
  view: string,
  row: string,
  text: string,
  at: number,
  isShift: boolean,
  spellings: readonly number[],
): Promise<void> {
  const plain = await enterCase(view, row, text, at, isShift);
  expect(plain.applied, "the key applies in the document as loaded").not.toBe(false);
  for (const spelling of spellings)
    expect(await enterCase(view, row, text, at, isShift, spelling), `spelling ${spelling}`).toEqual(
      plain,
    );
}

describe("Enter in a note's glyph an annotation cuts into pieces", () => {
  // The note's `\fp` break goes after the whole glyph the caret is on, as after the uncut glyph.
  it.each([
    ["standard+expandedNotes", "\\f", 0, false, [0]],
    ["standard+expandedNotes", "\\f", 1, false, [0, 1]],
    ["standard+expandedNotes", "\\f*", 1, false, [0, 1]],
    ["unformatted", "\\f", 0, true, [0]],
  ] as const)(
    "%s view: %j at %i (Shift: %s)",
    async (view, text, at, isShift, spellings) => {
      await expectTransparent(view, "note", text, at, isShift, spellings);
    },
    120_000,
  );
});

describe("Enter inside a verse or an attribute run an annotation cuts into pieces", () => {
  // The bytes after the caret leave the carrier as the split of the uncut carrier leaves them.
  it.each([
    ["standard", "verse", `\\v${NBSP}1 `, 1, false],
    ["standard", "verse", `\\v${NBSP}1 `, 4, false],
    ["standard", "verse", `\\v${NBSP}1 `, 1, true],
    ["standard", "char span with an attribute", "|g", 1, true],
  ] as const)(
    "%s view, %s: %j at %i (Shift: %s)",
    async (view, row, text, at, isShift) => {
      await expectTransparent(view, row, text, at, isShift, [0, 1]);
    },
    120_000,
  );
});

describe("Shift+Enter in a char span's content at an annotation mark's edge", () => {
  // The line break tears the span in two; the halves settle as the uncut span's halves do.
  it.each([
    ["standard", "closed char span", `${NBSP}grace`, 1],
    ["standard", "nested char span", `${NBSP}two`, 1],
    // A span with an attribute run: the half that keeps the run has no attributes of its own.
    ["standard", "char span with an attribute", `${NBSP}grace`, 1],
    ["unformatted", "char span with an attribute", `${NBSP}grace`, 5],
  ] as const)(
    "%s view, %s: %j at %i",
    async (view, row, text, at) => {
      await expectTransparent(view, row, text, at, true, [0, 1]);
    },
    120_000,
  );
});

describe("Enter in a chapter's `\\ca`/`\\cp` span at an annotation mark's edge", () => {
  // The span beside the chapter tears in two as one in a paragraph does, and settles the same.
  it.each([
    ["\\ca span beside its chapter", `${NBSP}3`, 1],
    ["\\cp span beside its chapter", `${NBSP}A`, 1],
  ] as const)(
    "standard view, %s: %j at %i",
    async (row, text, at) => {
      await expectTransparent("standard", row, text, at, false, [0, 1]);
    },
    120_000,
  );
});

describe("Shift+Enter in a chapter's `\\ca`/`\\cp` span, where no paragraph holds the caret", () => {
  // A line break goes into a block; with none around the caret the key does nothing.
  it.each([
    ["\\ca span beside its chapter", `${NBSP}3`, 1],
    ["\\cp span beside its chapter", `${NBSP}A`, 2],
  ] as const)(
    "standard view, %s: %j at %i",
    async (row, text, at) => {
      await expectTransparent("standard", row, text, at, true, [0]);
    },
    120_000,
  );
});

/**
 * In `view`'s `\\w grace|g\\w*` paragraph, with no annotation, Shift+Enter with the caret at byte
 * `at` of the span's content: the bytes the screen shows and the document saves, while the edit
 * waits and once the caret has left.
 */
async function shiftEnterInAttributeSpan(
  view: string,
  at: number,
): Promise<{ pendingScreen?: string; pending: string; settledScreen?: string; settled: string }> {
  const usj = oracleRows(view).find(([name]) => name.startsWith("char span with an attribute ("));
  if (!usj) throw new Error("no attribute row");
  const mounted = await mountInView(usj[1], pendingOracleView(view));
  await act(async () => {
    mounted.lexical.update(() => {
      $editableTexts()
        .find((node) => $logicalText(node) === `${NBSP}grace`)
        ?.select(at, at);
    });
    await drainNativeSelectionChange();
  });
  await act(async () => {
    mounted.lexical.update(() => {
      mounted.lexical.dispatchCommand(
        KEY_ENTER_COMMAND,
        new KeyboardEvent("keydown", { key: "Enter", shiftKey: true }),
      );
    });
    await drainNativeSelectionChange();
  });
  const pendingScreen = mounted.lexical.getEditorState().read(() => $screenBytes());
  const pending = savedBytes(mounted.ref.current?.getUsj());
  await depart(mounted);
  const settledScreen = mounted.lexical.getEditorState().read(() => $screenBytes());
  const settled = savedBytes(mounted.ref.current?.getUsj());
  mounted.unmount();
  return { pendingScreen, pending, settledScreen, settled };
}

describe("Shift+Enter inside a char span's content before its attribute run", () => {
  // The line break tears the span in two, the run and the closer in the second half; settled, the
  // span is whole again, its attribute spelled once, and the screen shows what the file saves.
  it.each([
    ["standard", 1],
    ["standard", 5],
    ["standard", 6],
    ["unformatted", 6],
  ] as const)("%s view, at %i: saves the attribute once, as shown", async (view, at) => {
    const bytes = await shiftEnterInAttributeSpan(view, at);
    expect(bytes.pending.split("|g").length - 1).toBe(1);
    expect(bytes.settled.split("|g").length - 1).toBe(1);
    expect(bytes.pending).toContain("\\w*");
    expect(bytes.pendingScreen).toBe(bytes.pending);
    expect(bytes.settledScreen).toBe(bytes.settled);
  });
});
