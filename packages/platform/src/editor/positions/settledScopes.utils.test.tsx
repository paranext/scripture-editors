/**
 * The settled-vs-live basis: which regions differ, what each becomes, and how their bytes line up.
 *
 * A plan is only useful if the two fragments it pairs really do spell the same displayed bytes —
 * that is the whole premise of carrying a position across a settle — so the scope rows assert the
 * settled fragment against the live one rather than against a transcribed string.
 */
import { mountExpandedNoteEditor, mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { FragmentAccumulator } from "../markerEdit/tier2Rebuild.utils";
import { $prepareSettleScopes, cutFragment } from "./settledScopes.utils";
import { $livePointFromSettledLocation } from "./settledPositions.utils";
import { SettleScopePlan } from "./settledPositions.model";
import {
  emptyOptbreakHusk,
  optbreakAndTwoNotesUsj,
  settledPara,
  settledPositionContext,
  settledTextSite,
  twoParaUsj,
  $textContaining,
} from "./positions.test-helpers";
import { act } from "@testing-library/react";
import { $getRoot, LexicalEditor } from "lexical";
import {
  $isCharNode,
  $isMarkerNode,
  $isNoteNode,
  $isParaNode,
  $isTypedMarkNode,
  getPendedDisplayOwners,
} from "shared";
import { $pendGlyphEdit } from "../markerEdit/markerEdit.test-helpers";
import { usjJsonPathFromIndexes } from "@eten-tech-foundation/scripture-utilities";

/** Type `text` into the paragraph's body and leave the caret at its start — the shape that keeps a
 * terminated literal PENDING instead of re-tokenizing inline in the same commit (see the
 * "marker literal typed mid-paragraph" shape in settledGetUsj.test.tsx). */
async function typeLiteral(lexical: LexicalEditor, needle: string, text: string): Promise<void> {
  await act(async () => {
    lexical.update(() => {
      const node = $textContaining(needle);
      node.setTextContent(text);
      node.select(0, 0);
    });
    await Promise.resolve();
    await Promise.resolve();
  });
  expect(getPendedDisplayOwners(lexical)?.size ?? 0).toBeGreaterThan(0);
}

/** The single plan the rows below expect, with the count asserted so a row can never pass against
 * an empty or ambiguous basis. */
function onlyPlan(plans: ReadonlyMap<string, SettleScopePlan>): SettleScopePlan {
  expect(plans.size).toBe(1);
  const [plan] = [...plans.values()];
  return plan;
}

describe("cutFragment", () => {
  const fragment: FragmentAccumulator = {
    text: "abcdefghij",
    spans: [
      { key: "before", start: 0, end: 3, isSentinel: false },
      { key: "around", start: 3, end: 8, isSentinel: false },
      { key: "after", start: 8, end: 10, isSentinel: false },
    ],
    sentinels: [],
  };

  it("removes the bytes and restates every span in the shortened text", () => {
    // Cut "ef" — inside the "around" span, which keeps its start and loses the cut's length.
    const cut = cutFragment(fragment, 4, 6);
    expect(cut.text).toBe("abcdghij");
    expect(cut.spans).toEqual([
      { key: "before", start: 0, end: 3, isSentinel: false },
      { key: "around", start: 3, end: 6, isSentinel: false },
      { key: "after", start: 6, end: 8, isSentinel: false },
    ]);
  });

  it("collapses a span the cut swallows entirely rather than dropping it", () => {
    const cut = cutFragment(fragment, 3, 8);
    expect(cut.text).toBe("abcij");
    expect(cut.spans).toEqual([
      { key: "before", start: 0, end: 3, isSentinel: false },
      { key: "around", start: 3, end: 3, isSentinel: false },
      { key: "after", start: 3, end: 5, isSentinel: false },
    ]);
  });

  it("is a no-op for an empty range", () => {
    expect(cutFragment(fragment, 5, 5)).toBe(fragment);
  });
});

describe("$prepareSettleScopes", () => {
  it("is the identity basis when nothing is pending", async () => {
    const { lexical } = await mountStandardViewEditor(twoParaUsj(["plain body"]));
    const context = settledPositionContext(lexical);
    const prepared = lexical.getEditorState().read(() => $prepareSettleScopes(context));

    expect(prepared.byFirstLiveKey.size).toBe(0);
    expect(prepared.settledToLiveTopIndex(3)).toEqual({ liveIndex: 3, indexWithinScope: 0 });
    expect(prepared.liveToSettledTopIndex(3)).toBe(3);
  });

  it("plans the one paragraph a typed literal is pending in", async () => {
    const { lexical } = await mountStandardViewEditor(twoParaUsj(["plain body"]));
    await typeLiteral(lexical, "plain body", "plain \\nd body\\nd* tail");
    const context = settledPositionContext(lexical);
    const prepared = lexical.getEditorState().read(() => $prepareSettleScopes(context));

    const plan = onlyPlan(prepared.byFirstLiveKey);
    expect(plan.kind).toBe("para");
    // The literal re-tokenizes into a char span WITHIN the paragraph, so the paragraph is still
    // one top-level item and nothing after it shifts.
    expect(plan.settledCount).toBe(1);
    expect(prepared.settledToLiveTopIndex(3)).toMatchObject({ liveIndex: 3 });
    // Settling is re-tokenization of DISPLAYED bytes: the settled scope spells what the live one
    // spells, which is what makes a byte anchor able to cross between them at all.
    expect(plan.scratchFragment?.text).toBe(plan.liveFragment?.text);
  });

  it("counts the extra paragraph a typed block marker splits out, and shifts what follows", async () => {
    const { lexical } = await mountStandardViewEditor(twoParaUsj(["plain body"]));
    await typeLiteral(lexical, "plain body", "plain \\q1 body");
    const context = settledPositionContext(lexical);
    const prepared = lexical.getEditorState().read(() => $prepareSettleScopes(context));

    const plan = onlyPlan(prepared.byFirstLiveKey);
    expect(plan.settledCount).toBe(2);
    // The paragraph at live index 2 becomes settled items 2 and 3, so the paragraph after it —
    // live index 3 — is settled index 4.
    expect(prepared.liveToSettledTopIndex(3)).toBe(4);
    expect(prepared.settledToLiveTopIndex(4)).toEqual({ liveIndex: 3, indexWithinScope: 0 });
    expect(prepared.settledToLiveTopIndex(3)).toMatchObject({ liveIndex: 2, indexWithinScope: 1 });
  });

  it("answers which scope a node is in, and nothing for one outside every scope", async () => {
    const { lexical } = await mountStandardViewEditor(twoParaUsj(["plain body"]));
    await typeLiteral(lexical, "plain body", "plain \\nd body\\nd* tail");
    const context = settledPositionContext(lexical);

    const { planned, inside, outside } = lexical.getEditorState().read(() => {
      const prepared = $prepareSettleScopes(context);
      return {
        planned: onlyPlan(prepared.byFirstLiveKey),
        inside: prepared.planContaining($textContaining("plain ")),
        outside: prepared.planContaining($textContaining("depart here")),
      };
    });

    expect(inside).toBe(planned);
    expect(outside).toBeUndefined();
  });

  it("reuses a cached plan while the scope's bytes are unchanged", async () => {
    const { lexical } = await mountStandardViewEditor(twoParaUsj(["plain body"]));
    await typeLiteral(lexical, "plain body", "plain \\nd body\\nd* tail");
    const cache = { entries: new Map() };
    const context = settledPositionContext(lexical, { cache });
    const first = lexical.getEditorState().read(() => $prepareSettleScopes(context));
    const second = lexical.getEditorState().read(() => $prepareSettleScopes(context));

    expect(onlyPlan(second.byFirstLiveKey)).toBe(onlyPlan(first.byFirstLiveKey));
  });

  it("rebuilds the plan once the scope's bytes change", async () => {
    const { lexical } = await mountStandardViewEditor(twoParaUsj(["plain body"]));
    await typeLiteral(lexical, "plain body", "plain \\nd body\\nd* tail");
    const cache = { entries: new Map() };
    const before = lexical
      .getEditorState()
      .read(() => $prepareSettleScopes(settledPositionContext(lexical, { cache })));
    const beforePlan = onlyPlan(before.byFirstLiveKey);

    await typeLiteral(lexical, "plain \\nd body", "plain \\nd other\\nd* tail");
    const after = lexical
      .getEditorState()
      .read(() => $prepareSettleScopes(settledPositionContext(lexical, { cache })));

    const afterPlan = onlyPlan(after.byFirstLiveKey);
    expect(afterPlan).not.toBe(beforePlan);
    expect(afterPlan.scratchFragment?.text).toContain("other");
  });

  it("rebuilds the plan once the scope's nodes change under unchanged bytes", async () => {
    // Annotating text splits its text node and changes no displayed byte, so a plan memoized on
    // bytes alone outlives the nodes it pairs with the settled tree — and carries a position onto
    // the split node's old extent, past its new end. The paragraph is pending on an emptied
    // optbreak husk, which an annotation elsewhere in it leaves pending.
    const { ref, lexical } = await mountExpandedNoteEditor(optbreakAndTwoNotesUsj());
    await emptyOptbreakHusk(lexical);
    const tail = settledTextSite(settledPara(ref.current?.getUsj(), 2), "tail text");
    const cache = { entries: new Map() };
    const context = settledPositionContext(lexical, { cache });
    const before = lexical.getEditorState().read(() => $prepareSettleScopes(context));

    await act(async () => {
      ref.current?.setAnnotation(
        {
          start: { jsonPath: usjJsonPathFromIndexes([2, tail.index]), offset: tail.offset },
          end: { jsonPath: usjJsonPathFromIndexes([2, tail.index]), offset: tail.offset + 4 },
        },
        "spelling",
        "s1",
      );
      await Promise.resolve();
    });
    // The premise: the annotation landed, and the paragraph is still pending.
    expect(lexical.getEditorState().read(() => $textContaining("tail").getParent())).toSatisfy(
      $isTypedMarkNode,
    );
    expect(getPendedDisplayOwners(lexical)?.size ?? 0).toBeGreaterThan(0);

    const [plan, point, text] = lexical.getEditorState().read(() => {
      const prepared = $prepareSettleScopes(context);
      const textNode = $textContaining(" text");
      return [
        onlyPlan(prepared.byFirstLiveKey),
        // The `x` of "tail text", past the annotated "tail".
        $livePointFromSettledLocation(context, prepared, {
          jsonPath: usjJsonPathFromIndexes([2, tail.index]),
          offset: tail.offset + "tail te".length,
        }),
        { key: textNode.getKey(), offset: textNode.getTextContent().indexOf("x") },
      ] as const;
    });

    expect(plan).not.toBe(onlyPlan(before.byFirstLiveKey));
    expect(point).toEqual({ ...text, type: "text" });
  });

  it("materializes a note's pending marker rename, as the settled document carries it", async () => {
    // The note's own opening glyph is retyped to another note marker while its content is also
    // pending, so the note is planned — and its scratch tree must be the note `getUsj()` returns.
    const { ref, lexical } = await mountExpandedNoteEditor(
      twoParaUsj([
        "before ",
        {
          type: "note",
          marker: "f",
          caller: "+",
          content: [{ type: "char", marker: "fr", content: ["1.1"] }, "note body"],
        },
        " after",
      ]),
    );
    await act(async () => {
      lexical.update(() => {
        const note = $getRoot()
          .getChildren()
          .filter($isParaNode)[0]
          .getChildren()
          .find($isNoteNode);
        const glyph = note?.getFirstChild();
        const reference = note?.getChildren().find($isCharNode);
        const glyphs = reference?.getChildren().filter($isMarkerNode) ?? [];
        if (!$isMarkerNode(glyph) || glyphs.length < 2) throw new Error("unexpected note shape");
        $pendGlyphEdit(glyph, "\\fe");
        $pendGlyphEdit(glyphs[0], "\\fq");
        $pendGlyphEdit(glyphs[glyphs.length - 1], "\\fq*");
      });
      await Promise.resolve();
      await Promise.resolve();
    });
    const settledNote = settledPara(ref.current?.getUsj(), 2).content?.[1];
    if (!settledNote || typeof settledNote === "string") throw new Error("expected a settled note");

    const scratchMarker = lexical.getEditorState().read(() => {
      const plan = onlyPlan($prepareSettleScopes(settledPositionContext(lexical)).byFirstLiveKey);
      return plan.scratch
        .getEditorState()
        .read(() => $getRoot().getChildren().find($isNoteNode)?.getMarker());
    });

    expect(settledNote.marker).toBe("fe");
    expect(scratchMarker).toBe(settledNote.marker);
  });

  it("drops a cached entry once its scope stops being pending", async () => {
    const { ref, lexical } = await mountStandardViewEditor(twoParaUsj(["plain body"]));
    await typeLiteral(lexical, "plain body", "plain \\nd body\\nd* tail");
    const cache = { entries: new Map() };
    lexical
      .getEditorState()
      .read(() => $prepareSettleScopes(settledPositionContext(lexical, { cache })));
    expect(cache.entries.size).toBe(1);

    // Depart the paragraph and commit: the engine settles it for real, and nothing is pending any
    // more. Mirrors the settled-output suites' own departure (settledGetUsj.test.tsx).
    await act(async () => {
      lexical.update(() => {
        $textContaining("depart here").select(0, 0);
      });
      await Promise.resolve();
      await Promise.resolve();
    });
    act(() => ref.current?.commitPendingMarkerEdits());
    expect(getPendedDisplayOwners(lexical)?.size ?? 0).toBe(0);

    const prepared = lexical
      .getEditorState()
      .read(() => $prepareSettleScopes(settledPositionContext(lexical, { cache })));

    expect(prepared.byFirstLiveKey.size).toBe(0);
    expect(cache.entries.size).toBe(0);
  });
});
