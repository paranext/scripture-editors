/**
 * A live position whose own bytes have no settled counterpart while an edit is pending reports the
 * NEAREST settled location at or before it — the same rule a USFM byte with no USJ representation
 * follows (`UsjReaderWriter` snaps it left, and so do the editor's own locations). So a live
 * position never reports `undefined` for want of a translation: `undefined` from `getSelection`
 * means there is no selection.
 *
 * The bytes that have no counterpart are the ones a pending settle spells differently from how
 * they were typed: a typed figure whose `file="…"` the settled figure spells `src="…"`, and
 * everything past the first of two such literals in one paragraph, where the two sides' preserved
 * runs cannot be put in correspondence at all. Every settled coordinate is read from the document
 * `getUsj()` returned.
 */
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { $prepareSettleScopes, PreparedScopes } from "./settledScopes.utils";
import {
  $liveSelectionFromSettled,
  $settledLocationFromLivePoint,
  $settledSelectionFromLive,
} from "./settledPositions.utils";
import {
  contentPath,
  settledPara,
  settledPositionContext,
  settledTextIndex,
  twoParaUsj,
  typeOver,
  $textContaining,
} from "./positions.test-helpers";
import { MarkerObject } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $createRangeSelection, $setSelection } from "lexical";
import { getPendedDisplayOwners } from "shared";

/** The first paragraph's top-level content index in every fixture here (book, chapter, para). */
const PARA_TOP_INDEX = 2;

/** Type `live` over the first paragraph and read the settled paragraph back. */
async function pending(live: string) {
  const mounted = await mountStandardViewEditor(twoParaUsj(["In the beginning made"]));
  const key = await typeOver(mounted.lexical, "In the beginning made", live);
  expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);
  const para = settledPara(mounted.ref.current?.getUsj(), PARA_TOP_INDEX);
  return { ...mounted, key, para, context: settledPositionContext(mounted.lexical) };
}

describe("a typed figure the settle spells differently from how it was typed", () => {
  // USJ names a figure's file `file` and USFM spells it `src`, so the settled figure spells this
  // literal's `file="x.jpg"` back as `src="x.jpg"`: the bytes of `file` have no settled byte, while
  // the bytes on either side of them do.
  const LITERAL = '\\fig a|file="x.jpg"\\fig*';
  const LIVE = `In ${LITERAL} made`;

  async function pendingFigure() {
    const mounted = await pending(LIVE);
    expect((mounted.para.content?.[1] as MarkerObject | undefined)?.type).toBe("figure");
    return { ...mounted, literalStart: LIVE.indexOf(LITERAL), figure: contentPath([2, 1]) };
  }

  it("reports a caret inside the re-spelled key at the nearest byte before it", async () => {
    const { lexical, context, literalStart, figure } = await pendingFigure();

    // Between the `fi` and the `le` of `file`: the nearest byte in front of it the settled figure
    // spells too is just past the `|`, the start of its file attribute's key.
    const location = lexical
      .getEditorState()
      .read(() =>
        $settledLocationFromLivePoint(
          $prepareSettleScopes(context),
          $textContaining(LIVE),
          literalStart + LITERAL.indexOf("file") + 2,
        ),
      );

    expect(location).toEqual({ jsonPath: figure, keyName: "file", keyOffset: 0 });
  });

  it("reports a caret on the bytes after the re-spelled key exactly", async () => {
    const { lexical, context, literalStart, figure } = await pendingFigure();

    // In front of the `=`: the settled figure spells everything from here on as it was typed.
    const location = lexical
      .getEditorState()
      .read(() =>
        $settledLocationFromLivePoint(
          $prepareSettleScopes(context),
          $textContaining(LIVE),
          literalStart + LITERAL.indexOf("="),
        ),
      );

    expect(location).toEqual({ jsonPath: figure, keyName: "file", keyOffset: 3 });
  });
});

describe("two typed literals the settle spells differently, in one paragraph", () => {
  // Each figure's `file=` is re-spelled, and with two of them the literal extents cannot be found:
  // the bytes after the first one are not the settled document's bytes after it. The two sides'
  // runs are paired only in front of the first literal.
  const LIVE = 'In \\fig a|file="x.jpg"\\fig* the \\fig b|file="y.jpg"\\fig* made';

  async function pendingFigures() {
    const mounted = await pending(LIVE);
    const head = settledTextIndex(mounted.para, "In ");
    return { ...mounted, head: contentPath([PARA_TOP_INDEX, head]) };
  }

  it("reports a caret in front of the literals exactly", async () => {
    const { lexical, context, head } = await pendingFigures();

    const location = lexical
      .getEditorState()
      .read(() =>
        $settledLocationFromLivePoint($prepareSettleScopes(context), $textContaining(LIVE), 1),
      );

    expect(location).toEqual({ jsonPath: head, offset: 1 });
  });

  it.each([
    ["inside the first literal", LIVE.indexOf("a|file")],
    ["between the literals", LIVE.indexOf(" the ") + 2],
    ["inside the second literal", LIVE.indexOf("y.jpg")],
    ["past both literals", LIVE.indexOf(" made") + 3],
  ])(
    "reports a caret %s at the nearest position before them that has a settled location",
    async (_, offset) => {
      const { lexical, context, head } = await pendingFigures();

      const location = lexical
        .getEditorState()
        .read(() =>
          $settledLocationFromLivePoint(
            $prepareSettleScopes(context),
            $textContaining(LIVE),
            offset,
          ),
        );

      expect(location).toEqual({ jsonPath: head, offset: "In ".length });
    },
  );

  it("snaps each end of a range left on its own", async () => {
    const { lexical, context, head } = await pendingFigures();
    await act(async () => {
      lexical.update(() => {
        const node = $textContaining(LIVE);
        const selection = $createRangeSelection();
        selection.anchor.set(node.getKey(), 1, "text");
        selection.focus.set(node.getKey(), LIVE.indexOf(" made") + 3, "text");
        $setSelection(selection);
      });
      await Promise.resolve();
    });

    const selection = lexical
      .getEditorState()
      .read(() => $settledSelectionFromLive($prepareSettleScopes(context)));

    expect(selection).toEqual({
      start: { jsonPath: head, offset: 1 },
      end: { jsonPath: head, offset: "In ".length },
    });
  });

  it("still refuses a settled location in the paragraph, in front of the literals too", async () => {
    // A host location is carried across exactly or refused — never approximated — so a pairing
    // that holds for only part of the scope carries none of it inbound.
    const { lexical, context, head } = await pendingFigures();

    const range = lexical.getEditorState().read(() =>
      $liveSelectionFromSettled(context, $prepareSettleScopes(context), {
        start: { jsonPath: head, offset: 1 },
      }),
    );

    expect(range).toBeUndefined();
  });
});

describe("two typed literals the settle spells differently, after a note the paragraph has", () => {
  // The note is carried through the paragraph's rebuild and paired in front of the literals, so a
  // caret in it crosses by the note's own path — and a host location in it is still refused.
  const LITERALS = ' \\fig a|file="x.jpg"\\fig* the \\fig b|file="y.jpg"\\fig* made';

  async function pendingAfterNote() {
    const mounted = await mountStandardViewEditor(
      twoParaUsj([
        "In",
        {
          type: "note",
          marker: "f",
          caller: "+",
          content: [{ type: "char", marker: "fr", content: ["1.1"] }, "note body"],
        },
        " the beginning made",
      ]),
    );
    await typeOver(mounted.lexical, " the beginning made", LITERALS);
    expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);
    const para = settledPara(mounted.ref.current?.getUsj(), PARA_TOP_INDEX);
    const note = para.content?.[1] as MarkerObject;
    expect(note.type).toBe("note");
    return {
      ...mounted,
      context: settledPositionContext(mounted.lexical),
      body: contentPath([PARA_TOP_INDEX, 1, settledTextIndex(note, "note body")]),
    };
  }

  it("reports a caret in the note exactly", async () => {
    const { lexical, context, body } = await pendingAfterNote();

    const location = lexical
      .getEditorState()
      .read(() =>
        $settledLocationFromLivePoint(
          $prepareSettleScopes(context),
          $textContaining("note body"),
          2,
        ),
      );

    expect(location).toEqual({ jsonPath: body, offset: 2 });
  });

  it("still refuses a settled location in the note", async () => {
    const { lexical, context, body } = await pendingAfterNote();

    const range = lexical.getEditorState().read(() =>
      $liveSelectionFromSettled(context, $prepareSettleScopes(context), {
        start: { jsonPath: body, offset: 2 },
      }),
    );

    expect(range).toBeUndefined();
  });
});

describe("a scope whose runs cannot be paired at all", () => {
  it("reports a caret anywhere in it at the front of the scope", async () => {
    // No real pending state leaves a scope with no pairing at all, so the basis is built from a
    // real one with its pairing taken away: nothing in the scope has a settled counterpart, and
    // the nearest location in front of every position is where the scope starts.
    const live = "In the beginning \\nd LORD\\nd* made";
    const { lexical, context } = await pending(live);

    const location = lexical.getEditorState().read(() => {
      const prepared = $prepareSettleScopes(context);
      const [plan] = [...prepared.byFirstLiveKey.values()];
      const unpaired = { ...plan, sentinelMap: undefined };
      const withoutPairing: PreparedScopes = {
        ...prepared,
        planContaining: (node) =>
          prepared.planContaining(node) === plan ? unpaired : prepared.planContaining(node),
      };
      return $settledLocationFromLivePoint(
        withoutPairing,
        $textContaining(live),
        live.indexOf("made"),
      );
    });

    expect(location).toEqual({ jsonPath: contentPath([PARA_TOP_INDEX]) });
  });
});
