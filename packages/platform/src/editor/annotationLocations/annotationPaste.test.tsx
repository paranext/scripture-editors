/**
 * A copy of a display carrier's byte pasted back inside the carrier, in the full editor, with the
 * carrier cut into pieces by annotations set through `setAnnotation` and without them: the paste
 * must produce the same document, the same screen and the same caret reports either way, at each
 * spelling of a caret on a cut (the end of the piece before it, the start of the piece after).
 * The byte is copied the way a user copies it (the copy command, every flavor it writes) and
 * pasted with the paste command. The transparency oracle runs the same case at every site inside
 * a carrier; these are the shapes it first found apart, by carrier kind.
 */
import {
  $planAnnotations,
  $globalSite,
  $spellings,
} from "./annotationTransparency.oracle.test-helpers";
import { $byteLoc, mountInView, ORACLE_TYPE } from "./annotationLocations.test-helpers";
import {
  $editableTexts,
  CaseRun,
  oracleRows,
  PASTE_KEYSTROKES,
  pendingOracleView,
  PositionReport,
  runKeystrokeCase,
} from "../markerEdit/pendingSettledOracle.test-helpers";
import { drainNativeSelectionChange } from "../editor-test.utils";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $logicalText, NBSP } from "shared";
import { StructureProtectionMode } from "shared-react";
import { describe, expect, it, vi } from "vitest";

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

/** What a paste case reads: the documents, the screens and the caret reports. */
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
    pasteErrors: run.pasteErrors,
  };
}

/**
 * Paste the byte `copies` the caret at byte `at` of the carrier spelled `carrier` in the
 * `row` document of `view` (with `structureProtectionMode`, off when not given): in the document as
 * loaded (`spelling` undefined), or with every carrier of the edited paragraph cut by the oracle's
 * ranges over it, at the caret's `spelling`-th spelling there.
 */
async function pasteCase(
  view: string,
  row: string,
  carrier: string,
  at: number,
  copies: "before" | "after",
  spelling?: number,
  structureProtectionMode?: StructureProtectionMode,
): Promise<{ [name: string]: unknown }> {
  const usj: Usj | undefined = oracleRows(view).find(([name]) => name.startsWith(`${row} (`))?.[1];
  if (!usj) throw new Error(`no row ${row}`);
  const viewOptions = pendingOracleView(view);
  const mounted = await mountInView(usj, viewOptions, structureProtectionMode);
  const site = mounted.lexical.getEditorState().read(() => {
    const index = $editableTexts().findIndex((text) => $logicalText(text) === carrier);
    if (index < 0) throw new Error(`no carrier ${JSON.stringify(carrier)}`);
    return $globalSite(index, at, false);
  });
  if (spelling !== undefined) {
    const plan = mounted.lexical
      .getEditorState()
      .read(() => $planAnnotations(viewOptions))
      .filter(({ bytes }) => typeof bytes === "string");
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
      "the annotations cut the carrier at the caret",
    ).toBe(2);
  }
  const keystroke = PASTE_KEYSTROKES.find((each) => each.copies === copies);
  if (!keystroke) throw new Error(`no paste copying the byte ${copies} the caret`);
  const run = await runKeystrokeCase(
    mounted,
    view,
    () => $spellings(site)[spelling ?? 0],
    keystroke,
  );
  mounted.unmount();
  return observed(run);
}

describe("a byte of a carrier pasted inside it, between the pieces annotations cut it into", () => {
  it.each([
    // A closing glyph: the paste splits it, and the bytes after the caret are text of their own.
    ["standard", "char span with an attribute", "\\w*", 1, "before"],
    // A note's content opener.
    ["standard+expandedNotes", "note", "\\ft", 2, "after"],
    // A verse's glyph: the content the split leaves before the verse is spaced as unheld text is.
    ["standard", "verse", `\\v${NBSP}1 `, 1, "before"],
    // A verse number's byte.
    ["standard", "verse", `\\v${NBSP}1 `, 4, "before"],
    // An attribute run's `|`, pasted as the editor's own copy outside Standard view's plain-text
    // attribute paste: the copy joins the run as it joins the run no annotation cuts.
    ["unformatted", "char span with an attribute", "|g", 1, "before"],
    // A note's caller: the bytes the split moves out of the caller's slot are content.
    ["standard+expandedNotes", "note", ` +${NBSP}`, 2, "before"],
    // A glyph with no paragraph around it, where the paste falls back to the editor's own ways.
    ["standard", "\\ca span beside its chapter", "\\ca", 1, "after"],
  ] as const)(
    "%s view, %s: %j at %i, the byte %s it",
    async (view, row, carrier, at, copies) => {
      const plain = await pasteCase(view, row, carrier, at, copies);
      expect(plain.applied, "the paste applies in the document as loaded").not.toBe(false);
      for (const spelling of [0, 1])
        expect(
          await pasteCase(view, row, carrier, at, copies, spelling),
          `spelling ${spelling}`,
        ).toEqual(plain);
    },
    120_000,
  );
});

describe("a byte of a carrier pasted inside it in a structure-protected document", () => {
  // Protection inserts a paste the Standard-view handler declines (the editor's own copy, outside
  // an attribute run) from its `text/html`, through its own insertion.
  it.each([
    ["standard", "char span with an attribute", "\\w*", 1, "before"],
    ["standard", "verse", `\\v${NBSP}1 `, 4, "before"],
    ["standard+expandedNotes", "note", "\\ft", 2, "after"],
    ["unformatted", "char span with an attribute", "|g", 1, "before"],
  ] as const)(
    "%s view, %s: %j at %i, the byte %s it",
    async (view, row, carrier, at, copies) => {
      const plain = await pasteCase(view, row, carrier, at, copies, undefined, "protected");
      expect(plain.applied, "the paste applies in the document as loaded").not.toBe(false);
      for (const spelling of [0, 1])
        expect(
          await pasteCase(view, row, carrier, at, copies, spelling, "protected"),
          `spelling ${spelling}`,
        ).toEqual(plain);
    },
    120_000,
  );
});

describe("an annotation over bytes a paste splits off a carrier", () => {
  // Bytes a paste splits off a glyph are content, which holds no display annotation: an
  // annotation over them alone holds nothing more and is reported removed, once; one that keeps
  // bytes in the glyph keeps them and hears nothing.
  it.each([
    ["the closer's `w*` alone", "char span with an attribute", "\\w*", 1, 3, 1, ["destroyed"]],
    ["the closer whole", "char span with an attribute", "\\w*", 0, 3, 1, []],
    // Split off with the rest of the glyph, the number is read back into a verse, held.
    ["a verse's number", "verse", `\\v${NBSP}1 `, 3, 4, 1, []],
  ] as const)(
    "%s (%s: %j bytes %i to %i, a paste at %i)",
    async (_, row, carrier, from, to, at, reports) => {
      const view = "standard";
      const usj = oracleRows(view).find(([name]) => name.startsWith(`${row} (`))?.[1];
      if (!usj) throw new Error(`no row ${row}`);
      const viewOptions = pendingOracleView(view);
      const mounted = await mountInView(usj, viewOptions);
      const { range, site } = mounted.lexical.getEditorState().read(() => {
        const index = $editableTexts().findIndex((text) => $logicalText(text) === carrier);
        const node = $editableTexts()[index];
        return {
          range: {
            start: $byteLoc(node, from, false, viewOptions),
            end: $byteLoc(node, to, false, viewOptions),
          },
          site: $globalSite(index, at, false),
        };
      });
      const onRemove = vi.fn();
      await act(async () => {
        mounted.ref.current?.setAnnotation(range, ORACLE_TYPE, "held", { onRemove });
        await Promise.resolve();
      });
      const text = () =>
        (mounted.ref.current?.getAnnotationRanges(ORACLE_TYPE, "held") ?? [])
          .map((each) => each.toString())
          .join("");
      const held = text();
      expect(held).not.toBe("");
      const run = await runKeystrokeCase(
        mounted,
        view,
        () => $spellings(site)[0],
        PASTE_KEYSTROKES[0],
      );
      expect(run, "the paste applies").toBeDefined();
      expect(onRemove.mock.calls.map(([, , reason]) => reason)).toEqual(reports);
      if (reports.length > 0) expect(text()).toBe("");
      else expect(text()).not.toBe("");
      mounted.unmount();
    },
    120_000,
  );
});
