/**
 * The settled-vs-live basis: which regions differ, what each becomes, and how their bytes line up.
 *
 * A plan is only useful if the two fragments it pairs really do spell the same displayed bytes —
 * that is the whole premise of carrying a position across a settle — so the scope rows assert the
 * settled fragment against the live one rather than against a transcribed string.
 */
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { FragmentAccumulator } from "../markerEdit/tier2Rebuild.utils";
import { $prepareSettleScopes, cutFragment } from "./settledScopes.utils";
import { SettleScopePlan } from "./settledPositions.model";
import { settledPositionContext, twoParaUsj, $textContaining } from "./positions.test-helpers";
import { act } from "@testing-library/react";
import { LexicalEditor } from "lexical";
import { getPendedDisplayOwners } from "shared";

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
