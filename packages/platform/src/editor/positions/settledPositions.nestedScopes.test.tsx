/**
 * Nested settle scopes: a NOTE settling inside its own settling PARAGRAPH.
 *
 * Both scopes rebuild at once, and the paragraph's rebuild re-indexes its content — so the note
 * does not sit at the same content index in the two documents. A position inside that note has to
 * be reported at the note's SETTLED index, which is the only one a host reading `getUsj()` can
 * resolve; reporting the live one names a different item of the same paragraph, silently.
 *
 * The suite also covers what the module does when it CANNOT carry a position across: every such
 * path must refuse (`undefined`), never answer approximately. A wrong position annotates or
 * selects the wrong text with no signal; a refusal is one tick of a feature not firing.
 */
import { mountExpandedNoteEditor, requireStandardViewOptions } from "../settledGetUsj.test-helpers";
import { $prepareSettleScopes } from "./settledScopes.utils";
import {
  $livePointFromSettledLocation,
  $settledLocationFromLivePoint,
} from "./settledPositions.utils";
import {
  $textContaining,
  contentPath,
  huskBeforeNoteUsj,
  pendNoteInsideSettlingPara,
  settledNoteIndex,
  settledPara,
  settledPositionContext,
  settledTextIndex,
} from "./positions.test-helpers";
import { MarkerObject } from "@eten-tech-foundation/scripture-utilities";
import { $getNodeByKey, $getRoot } from "lexical";
import { $getLogicalContentItems, $isNoteNode, $isParaNode } from "shared";
import { hasStandardViewWhitespace } from "shared-react";

/** The paragraph's own top-level content index — the same in both documents (nothing above it
 * settles, so no top-level index moves). Named rather than inlined so the rows read as
 * "paragraph, note, item" instead of a bare 2. */
const PARA_TOP_INDEX = 2;

/** Mount the fixture and pend the note, its paragraph, and the paragraph's optbreak husk. */
async function nested({ pendParaGlyph = true }: { pendParaGlyph?: boolean } = {}) {
  const mounted = await mountExpandedNoteEditor(huskBeforeNoteUsj());
  await pendNoteInsideSettlingPara(mounted.lexical, { pendParaGlyph });
  const context = settledPositionContext(mounted.lexical);
  const para = settledPara(mounted.ref.current?.getUsj(), 2);
  const noteIndex = settledNoteIndex(para);
  const note = para.content?.[noteIndex];
  if (!note || typeof note === "string") throw new Error("expected a settled note");
  return { ...mounted, context, para, noteIndex, note };
}

/**
 * The live LOGICAL content index of the paragraph's note — the coordinate space the settled index
 * is also in, so the premise assertion below compares like with like. The RAW child index is not:
 * it counts the paragraph's `\p` marker glyph, which carries no content, so it differs from the
 * settled index for every fixture and would make that assertion hold whatever the husk did.
 */
function $liveNoteIndexWithinPara(): number {
  const para = $getRoot().getChildren().filter($isParaNode)[0];
  const index = $getLogicalContentItems(
    para,
    hasStandardViewWhitespace(requireStandardViewOptions()),
  ).findIndex((item) => item.type === "element" && $isNoteNode(item.node));
  if (index < 0) throw new Error("no live note");
  return index;
}

describe("a note settling inside its own settling paragraph", () => {
  it("reports a point in the note's content at the note's SETTLED index", async () => {
    const { lexical, context, note, noteIndex } = await nested();
    const bodyIndex = settledTextIndex(note as MarkerObject, "note body");

    const location = lexical.getEditorState().read(() => {
      const prepared = $prepareSettleScopes(context);
      // The premise: the two documents disagree about where the note sits, so a translation that
      // restates only the TOP index cannot be right by accident.
      expect(noteIndex).not.toBe($liveNoteIndexWithinPara());
      return $settledLocationFromLivePoint(prepared, $textContaining("note body"), 5);
    });

    expect(location).toEqual({
      jsonPath: contentPath([PARA_TOP_INDEX, noteIndex, bodyIndex]),
      offset: 5,
    });
  });

  it("resolves a settled location inside the note back to the live node", async () => {
    const { lexical, context, note, noteIndex } = await nested();
    const bodyIndex = settledTextIndex(note as MarkerObject, "note body");

    const [key, offset] = lexical.getEditorState().read(() => {
      const prepared = $prepareSettleScopes(context);
      const point = $livePointFromSettledLocation(context, prepared, {
        jsonPath: contentPath([PARA_TOP_INDEX, noteIndex, bodyIndex]),
        offset: 5,
      });
      return [point?.key, point?.offset] as const;
    });

    const text = lexical.getEditorState().read(() => $getNodeByKey(key ?? "")?.getTextContent());
    expect(text).toContain("note body");
    expect(offset).toBe(5);
  });
});

describe("a husk-only paragraph scope carrying a settling note", () => {
  it("reports a point in the note's content against the note's SETTLED content", async () => {
    // No pend on the paragraph itself: the emptied husk is the only thing planning it, which
    // routes the paragraph through a different plan builder than the one the case above uses.
    const { lexical, context, note, noteIndex } = await nested({ pendParaGlyph: false });
    const bodyIndex = settledTextIndex(note as MarkerObject, "note body");

    const location = lexical.getEditorState().read(() => {
      const prepared = $prepareSettleScopes(context);
      return $settledLocationFromLivePoint(prepared, $textContaining("note body"), 5);
    });

    expect(location).toEqual({
      jsonPath: contentPath([PARA_TOP_INDEX, noteIndex, bodyIndex]),
      offset: 5,
    });
  });

  it("resolves a settled location inside the note back to the live node", async () => {
    // The paragraph's settled tree is what a settled path inside it is resolved against, and the
    // note it carries must be the note's SETTLED self — the note's own rebuild changed how many
    // content items it has, so a paragraph holding the pending note cannot resolve the settled
    // index at all.
    const { lexical, context, note, noteIndex } = await nested({ pendParaGlyph: false });
    const bodyIndex = settledTextIndex(note as MarkerObject, "note body");

    const [key, offset] = lexical.getEditorState().read(() => {
      const prepared = $prepareSettleScopes(context);
      const point = $livePointFromSettledLocation(context, prepared, {
        jsonPath: contentPath([PARA_TOP_INDEX, noteIndex, bodyIndex]),
        offset: 5,
      });
      return [point?.key, point?.offset] as const;
    });

    const text = lexical.getEditorState().read(() => $getNodeByKey(key ?? "")?.getTextContent());
    expect(text).toContain("note body");
    expect(offset).toBe(5);
  });
});

describe("an element boundary beside a preserved node", () => {
  it("reports the boundary right after the note", async () => {
    // An element point is a boundary between children, and the child before this one is the note
    // — a preserved node, whose inner bytes the scope's fragment does not spell out at all. The
    // boundary still has a settled position: just past the construct.
    const { lexical, context, para } = await nested();

    const location = lexical.getEditorState().read(() => {
      const prepared = $prepareSettleScopes(context);
      const paraNode = $getRoot().getChildren().filter($isParaNode)[0];
      const afterNote = paraNode.getChildren().findIndex($isNoteNode) + 1;
      return $settledLocationFromLivePoint(prepared, paraNode, afterNote);
    });

    expect(location).toEqual({
      jsonPath: contentPath([PARA_TOP_INDEX, settledTextIndex(para, " after")]),
      offset: 0,
    });
  });
});

describe("refusing rather than answering approximately", () => {
  it("refuses a settled point in a co-settling note whose live bytes cannot be paired", async () => {
    // The note rides through the paragraph's rebuild as its SETTLED self, so its live content is
    // not the same subtree: the only thing the two sides still share is bytes. Without the note's
    // own live fragment there is nothing to resolve those bytes against, and walking the settled
    // child path down the LIVE note instead lands on whatever child happens to sit at that index.
    // Reproduced by removing the correspondence the plan would normally carry.
    const { lexical, context, note, noteIndex } = await nested();
    const bodyIndex = settledTextIndex(note as MarkerObject, "note body");

    const point = lexical.getEditorState().read(() => {
      const prepared = $prepareSettleScopes(context);
      const notePlan = [...prepared.byFirstLiveKey.values()].find((plan) => plan.kind === "note");
      if (!notePlan) throw new Error("expected a note plan");
      // Writing a plan field directly is the only way to reach this branch: every natural path
      // that drops the live fragment also drops the plan.
      (notePlan as { liveFragment?: unknown }).liveFragment = undefined;
      return $livePointFromSettledLocation(context, prepared, {
        jsonPath: contentPath([PARA_TOP_INDEX, noteIndex, bodyIndex]),
        offset: 5,
      });
    });

    expect(point).toBeUndefined();
  });
});
