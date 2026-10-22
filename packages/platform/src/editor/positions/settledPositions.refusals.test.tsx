/**
 * The one kind of HOST location the settled-position translation refuses (`undefined`): a location
 * that names nothing in the document `getUsj()` returned. Every other settled location has a live
 * position, its own or where the bytes in front of it snap left to (settledPositions.snapLeft.test.tsx).
 * A refusal is one tick of a feature not firing, and the editor's public methods log it
 * (Editor.tsx).
 *
 * Each row names why the location names nothing, reaches it from a real pending state, and asserts
 * the refusal.
 *
 * The other direction has no refusals a real caret can reach: a live position always reports a
 * settled location — its own (settledPositions.noteBytes.test.tsx), or the nearest one at or before
 * it when its bytes have none (settledPositions.snapLeft.test.tsx) — or, for a plan the live tree
 * has moved on from under it, the nearest one a rebuilt basis can still answer from (below).
 */
import { mountExpandedNoteEditor, mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { $prepareSettleScopes } from "./settledScopes.utils";
import {
  $liveSelectionFromSettled,
  $livePointFromSettledLocation,
  $settledLocationFromLivePoint,
} from "./settledPositions.utils";
import {
  chapterCaCharUsj,
  contentPath,
  emptyOptbreakHusk,
  optbreakAndTwoNotesUsj,
  settledNoteIndexes,
  settledPara,
  settledPositionContext,
  settledTextIndex,
  twoParaUsj,
  typeChapterCaValue,
  typeOver,
} from "./positions.test-helpers";
import { $pendGlyphEdit } from "../markerEdit/markerEdit.test-helpers";
import { MarkerObject, Usj, UsjDocumentLocation } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createTextNode,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  LexicalEditor,
} from "lexical";
import {
  $getLogicalContentItems,
  $isMarkerNode,
  $isNoteNode,
  $isParaNode,
  $isTypedMarkNode,
  getPendedDisplayOwners,
  NBSP,
} from "shared";
import { hasStandardViewWhitespace } from "shared-react";

/** The first paragraph's top-level content index in every fixture here (book, chapter, para). */
const PARA_TOP_INDEX = 2;

/** A paragraph pending on a typed char literal — the ordinary pending state, whose scope the two
 * documents CAN be paired across. */
async function pendingCharLiteral() {
  const mounted = await mountStandardViewEditor(twoParaUsj(["In the beginning made"]));
  await typeOver(mounted.lexical, "In the beginning made", "In the beginning \\nd LORD\\nd* made");
  expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);
  const para = settledPara(mounted.ref.current?.getUsj(), PARA_TOP_INDEX);
  return { ...mounted, para, context: settledPositionContext(mounted.lexical) };
}

describe("a settled location the settled document does not have", () => {
  it("refuses a path past the end of a pending scope's settled content", async () => {
    const { lexical, para, context } = await pendingCharLiteral();
    const pastEnd = { jsonPath: contentPath([PARA_TOP_INDEX, para.content?.length ?? 0]) };

    const [point, range] = lexical.getEditorState().read(() => {
      const prepared = $prepareSettleScopes(context);
      return [
        $livePointFromSettledLocation(context, prepared, pastEnd),
        $liveSelectionFromSettled(context, prepared, { start: pastEnd }),
      ] as const;
    });

    expect(point).toBeUndefined();
    expect(range).toBeUndefined();
  });

  it("refuses a text offset past the end of its settled item", async () => {
    const { lexical, para, context } = await pendingCharLiteral();
    const head = settledTextIndex(para, "In the beginning ");

    const point = lexical.getEditorState().read(() =>
      $livePointFromSettledLocation(context, $prepareSettleScopes(context), {
        jsonPath: contentPath([PARA_TOP_INDEX, head]),
        offset: "In the beginning ".length + 1,
      }),
    );

    expect(point).toBeUndefined();
  });

  it("refuses a path outside every scope that the live tree cannot resolve either", async () => {
    const { lexical, context } = await pendingCharLiteral();

    // The second paragraph is not pending, so its settled path is the live one — and it has a
    // single content item.
    const point = lexical.getEditorState().read(() =>
      $livePointFromSettledLocation(context, $prepareSettleScopes(context), {
        jsonPath: contentPath([PARA_TOP_INDEX + 1, 5]),
        offset: 0,
      }),
    );

    expect(point).toBeUndefined();
  });

  it("refuses a top-level index past the settled document's end, even where the live tree has one", async () => {
    // A pending chapter region CONTRACTS on settling (the `\ca` span folds onto the chapter), so
    // the live tree has one more top-level item than the settled document. The index one past the
    // settled end names nothing a host can have read — while live it names the last paragraph.
    const mounted = await mountStandardViewEditor(chapterCaCharUsj());
    await typeChapterCaValue(mounted.lexical, `${NBSP}4`);
    const context = settledPositionContext(mounted.lexical);
    const settledLength = mounted.ref.current?.getUsj()?.content.length ?? 0;
    const pastEnd = { jsonPath: contentPath([settledLength]) };

    const [liveLength, point, range] = mounted.lexical.getEditorState().read(() => {
      const prepared = $prepareSettleScopes(context);
      return [
        $getLogicalContentItems($getRoot(), hasStandardViewWhitespace(prepared.viewOptions)).length,
        $livePointFromSettledLocation(context, prepared, pastEnd),
        $liveSelectionFromSettled(context, prepared, { start: pastEnd }),
      ] as const;
    });

    expect(liveLength).toBeGreaterThan(settledLength);
    expect(point).toBeUndefined();
    expect(range).toBeUndefined();
  });

  it("refuses a location that names nothing in getUsj()", async () => {
    const { lexical, para, context, ref } = await pendingCharLiteral();
    const head = settledTextIndex(para, "In the beginning ");
    const locations: UsjDocumentLocation[] = [
      // A top-level index past the settled document's end.
      { jsonPath: contentPath([ref.current?.getUsj()?.content.length ?? 0]) },
      // A child index past the pending paragraph's settled content.
      { jsonPath: contentPath([PARA_TOP_INDEX, para.content?.length ?? 0]), offset: 0 },
      // A text offset past its settled item's end.
      {
        jsonPath: contentPath([PARA_TOP_INDEX, head]),
        offset: "In the beginning ".length + 1,
      },
    ];

    const ranges = lexical.getEditorState().read(() => {
      const prepared = $prepareSettleScopes(context);
      return locations.map((start) => $liveSelectionFromSettled(context, prepared, { start }));
    });

    expect(ranges).toEqual([undefined, undefined, undefined]);
  });

  it("refuses the whole range when either endpoint cannot be carried across", async () => {
    const { lexical, para, context } = await pendingCharLiteral();
    const good = {
      jsonPath: contentPath([PARA_TOP_INDEX, settledTextIndex(para, " made")]),
      offset: 1,
    };
    const bad = { jsonPath: contentPath([PARA_TOP_INDEX, para.content?.length ?? 0]) };

    const [badEnd, badStart, control] = lexical.getEditorState().read(() => {
      const prepared = $prepareSettleScopes(context);
      return [
        $liveSelectionFromSettled(context, prepared, { start: good, end: bad }),
        $liveSelectionFromSettled(context, prepared, { start: bad, end: good }),
        $liveSelectionFromSettled(context, prepared, { start: good, end: good }),
      ] as const;
    });

    expect(badEnd).toBeUndefined();
    expect(badStart).toBeUndefined();
    // The good endpoint is carried on its own, so the refusals above are the bad endpoint's.
    expect(control?.start).toBeDefined();
  });
});

describe("a basis the tree has moved on under", () => {
  /**
   * A memoized plan (`SettledScopeCache`) holds live node references across reads. The cache
   * rebuilds a plan once any node in its scope changes (settledScopes.utils.test.tsx); these rows
   * instead reuse a basis prepared BEFORE a change in a read AFTER it, so the translation itself has
   * to notice mid-walk that its plan no longer describes the live tree and answer from what the
   * tree still has — the scope's own front, for a byte alignment that can no longer be walked at
   * all — rather than refuse outright.
   *
   * The paragraph is pending only on its emptied optbreak husk, so both notes ride through its
   * rebuild as preserved runs and cross by their child paths.
   */
  async function staleBasis(change: (lexical: LexicalEditor) => void) {
    const mounted = await mountExpandedNoteEditor(optbreakAndTwoNotesUsj());
    await emptyOptbreakHusk(mounted.lexical);
    const usj: Usj | undefined = mounted.ref.current?.getUsj();
    const para = settledPara(usj, PARA_TOP_INDEX);
    const context = settledPositionContext(mounted.lexical);
    const prepared = mounted.lexical.getEditorState().read(() => $prepareSettleScopes(context));
    await act(async () => {
      mounted.lexical.update(() => change(mounted.lexical), { discrete: true });
      await Promise.resolve();
    });
    const [noteIndex] = settledNoteIndexes(para);
    const note = para.content?.[noteIndex] as MarkerObject;
    /** The settled location of `offset` in the first note's body text. */
    const inFirstNoteBody = (offset: number): UsjDocumentLocation => ({
      jsonPath: contentPath([PARA_TOP_INDEX, noteIndex, settledTextIndex(note, "note one")]),
      offset,
    });
    /** The pending paragraph's own live key — where a rebuilt scope's front lands. */
    const paraKey = mounted.lexical
      .getEditorState()
      .read(() => $getRoot().getChildren().filter($isParaNode)[0].getKey());
    return { ...mounted, context, prepared, inFirstNoteBody, paraKey };
  }

  /** The first note in the first paragraph. */
  function $firstNote() {
    const note = $getRoot().getChildren().filter($isParaNode)[0].getChildren().find($isNoteNode);
    if (!note) throw new Error("no note");
    return note;
  }

  /** The second note in the first paragraph. */
  function $secondNote() {
    const notes = $getRoot().getChildren().filter($isParaNode)[0].getChildren().filter($isNoteNode);
    const note = notes[1];
    if (!note) throw new Error("no second note");
    return note;
  }

  it("rebuilds a live point in a preserved node that has since been removed, from the scope's front", async () => {
    const { lexical, context, prepared, inFirstNoteBody, paraKey } = await staleBasis(() =>
      $firstNote().remove(),
    );

    const point = lexical
      .getEditorState()
      .read(() => $livePointFromSettledLocation(context, prepared, inFirstNoteBody(2)));

    expect(point).toEqual({ key: paraKey, offset: 0, type: "element" });
  });

  it("rebuilds a live point whose settled child path no longer exists in the live node, from the scope's front", async () => {
    const { lexical, context, prepared, inFirstNoteBody, paraKey } = await staleBasis(() => {
      // The body text and everything after it, so the body's child index names no child at all.
      const children = $firstNote().getChildren();
      const body = children.findIndex(
        (child) => $isTextNode(child) && child.getTextContent().includes("note one"),
      );
      if (body < 0) throw new Error("no note body text");
      children.slice(body).forEach((child) => child.remove());
    });

    const point = lexical
      .getEditorState()
      .read(() => $livePointFromSettledLocation(context, prepared, inFirstNoteBody(2)));

    expect(point).toEqual({ key: paraKey, offset: 0, type: "element" });
  });

  it("rebuilds a settled location for a live point in a child the settled node does not have", async () => {
    const { lexical, prepared } = await staleBasis(() =>
      $firstNote().append($createTextNode(" added")),
    );

    const location = lexical.getEditorState().read(() => {
      const added = $firstNote().getLastChild();
      if (!added) throw new Error("no added child");
      return $settledLocationFromLivePoint(prepared, added, 1);
    });

    expect(location).toBeDefined();
  });

  it("rebuilds a settled location for a live point in a SECOND preserved run's new content", async () => {
    // The same guard as the row above, exercised on a different preserved run in the same scope —
    // the fix is not specific to whichever run happens to be first.
    const { lexical, prepared } = await staleBasis(() =>
      $secondNote().append($createTextNode(" added")),
    );

    const location = lexical.getEditorState().read(() => {
      const added = $secondNote().getLastChild();
      if (!added) throw new Error("no added child");
      return $settledLocationFromLivePoint(prepared, added, 1);
    });

    expect(location).toBeDefined();
  });
});

describe("a pend the settle has nothing to rebuild for", () => {
  it("prepares no scope, so a position addresses the live tree unchanged", async () => {
    // Retyping a paragraph glyph to the marker it already has pends it, but the paragraph's
    // settled self is its live self — there is nothing to translate, and the translation answers
    // exactly as if nothing were pending, rather than refusing.
    const mounted = await mountStandardViewEditor(twoParaUsj(["In the beginning made"]));
    await act(async () => {
      mounted.lexical.update(() => {
        const glyph = $getRoot().getChildren().filter($isParaNode)[0].getFirstChild();
        if (!$isMarkerNode(glyph)) throw new Error("no paragraph glyph");
        $pendGlyphEdit(glyph, "\\p");
      });
      await Promise.resolve();
      await Promise.resolve();
    });
    const context = settledPositionContext(mounted.lexical);
    const settled = {
      start: { jsonPath: contentPath([PARA_TOP_INDEX, 0]), offset: 3 },
    };

    const [plans, range] = mounted.lexical.getEditorState().read(() => {
      const prepared = $prepareSettleScopes(context);
      return [prepared.byFirstLiveKey.size, $liveSelectionFromSettled(context, prepared, settled)];
    });

    expect(context.pendedKeys.size).toBeGreaterThan(0);
    expect(plans).toBe(0);
    expect(range).toBe(settled);
  });
});

describe("the public methods, when the translation refuses", () => {
  /** A logger whose warnings a row can read back. */
  function warningLogger() {
    const warnings: string[] = [];
    const logger = {
      error: () => undefined,
      warn: (message: string) => {
        warnings.push(message);
      },
      info: () => undefined,
      debug: () => undefined,
    };
    return { logger, warnings };
  }

  /** The settled range one past the pending paragraph's last content item. */
  function pastEndOf(para: MarkerObject) {
    const pastEnd = { jsonPath: contentPath([PARA_TOP_INDEX, para.content?.length ?? 0]) };
    return { start: pastEnd, end: pastEnd };
  }

  async function pendingLiteralWithLogger() {
    const { logger, warnings } = warningLogger();
    const mounted = await mountStandardViewEditor(twoParaUsj(["In the beginning made"]), {
      logger,
    });
    await typeOver(
      mounted.lexical,
      "In the beginning made",
      "In the beginning \\nd LORD\\nd* made",
    );
    const para = settledPara(mounted.ref.current?.getUsj(), PARA_TOP_INDEX);
    return { ...mounted, para, warnings };
  }

  it("setAnnotation logs the refusal and annotates nothing", async () => {
    const { ref, lexical, para, warnings } = await pendingLiteralWithLogger();

    await act(async () => {
      ref.current?.setAnnotation(pastEndOf(para), "spelling", "s1");
      await Promise.resolve();
    });

    const marks = lexical.getEditorState().read(() =>
      $getRoot()
        .getAllTextNodes()
        .filter((text) => $isTypedMarkNode(text.getParent())),
    );
    expect(marks).toEqual([]);
    expect(warnings).toContainEqual(
      expect.stringContaining('setAnnotation refused for spelling "s1"'),
    );
  });

  it("setSelection logs the refusal and leaves the selection where it was", async () => {
    const { ref, lexical, para, warnings } = await pendingLiteralWithLogger();
    const $caret = () => {
      const selection = $getSelection();
      return $isRangeSelection(selection)
        ? [
            selection.anchor.key,
            selection.anchor.offset,
            selection.focus.key,
            selection.focus.offset,
          ]
        : undefined;
    };
    const before = lexical.getEditorState().read($caret);

    await act(async () => {
      ref.current?.setSelection(pastEndOf(para));
      await Promise.resolve();
    });

    expect(before).toBeDefined();
    expect(lexical.getEditorState().read($caret)).toEqual(before);
    expect(warnings).toContainEqual(expect.stringContaining("setSelection refused"));
  });

  it("insertNote logs the refusal and inserts nothing", async () => {
    const { ref, lexical, para, warnings } = await pendingLiteralWithLogger();
    const $noteCount = () =>
      $getRoot()
        .getChildren()
        .filter($isParaNode)
        .flatMap((paragraph) => paragraph.getChildren())
        .filter($isNoteNode).length;
    const before = lexical.getEditorState().read($noteCount);

    await act(async () => {
      ref.current?.insertNote("f", "+", pastEndOf(para));
      await Promise.resolve();
    });

    expect(lexical.getEditorState().read($noteCount)).toBe(before);
    expect(warnings).toContainEqual(expect.stringContaining("insertNote refused for \\f"));
  });
});
