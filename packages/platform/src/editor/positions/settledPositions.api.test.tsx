/**
 * The public position API, end to end: a host holds a `jsonPath` it read from `getUsj()` and hands
 * it straight back to `setAnnotation`. While an edit is pending those are two different documents,
 * and the top-level indexes of one do not name the same paragraphs as the other — so an untranslated
 * path either fails to resolve or, worse, resolves onto the wrong paragraph.
 *
 * Both rows annotate a paragraph OUTSIDE the pending one, and deliberately so: a Tier-2 rebuild
 * replaces its paragraph's children wholesale, and a `TypedMarkNode` is not among the nodes it
 * preserves — so an annotation placed inside the paragraph that is settling does land on the right
 * bytes, and is then discarded when that paragraph settles. That is true with nothing pending at
 * all (annotate, then pend and settle in the same paragraph), so it is a property of the rebuild
 * rather than of this translation, and pinning it belongs with the rebuild. The translation's own
 * behavior INSIDE a pending paragraph is asserted in settledPositions.inbound.test.tsx, against
 * the same `$liveSelectionFromSettled` output these methods consume.
 */
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { contentPath, twoParaUsj, typeOver, $textContaining } from "./positions.test-helpers";
import {
  indexesFromUsjJsonPath,
  MarkerObject,
  Usj,
} from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $isElementNode,
  $isTextNode,
  LexicalEditor,
  LexicalNode,
  SELECTION_CHANGE_COMMAND,
} from "lexical";
import { $isParaNode, $isTypedMarkNode, getPendedDisplayOwners, TypedMarkNode } from "shared";
import { SelectionRange } from "shared-react";

/** Every `TypedMarkNode` in the tree, depth-first. */
function $marks(nodes: LexicalNode[] = $getRoot().getChildren()): TypedMarkNode[] {
  const out: TypedMarkNode[] = [];
  nodes.forEach((node) => {
    if ($isTypedMarkNode(node)) out.push(node);
    if ($isElementNode(node)) out.push(...$marks(node.getChildren()));
  });
  return out;
}

/** What the annotation ended up wrapping. */
function annotatedText(lexical: LexicalEditor): string[] {
  return lexical.getEditorState().read(() => $marks().map((mark) => mark.getTextContent()));
}

/** The markers of a settled document's top-level content, so a row can show the document the host
 * would actually have been reading. */
function settledMarkers(usj: Usj | undefined): (string | undefined)[] {
  return (usj?.content ?? []).map((item) =>
    typeof item === "string" ? undefined : (item as MarkerObject).marker,
  );
}

describe("setAnnotation while a paragraph is pending", () => {
  it("follows a settled index the split pushed down", async () => {
    const { ref, lexical } = await mountStandardViewEditor(twoParaUsj(["plain body"]));
    await act(async () => {
      lexical.update(() => {
        const node = $textContaining("plain body");
        node.setTextContent("plain \\q1 body");
        node.select(0, 0);
      });
      await Promise.resolve();
      await Promise.resolve();
    });
    expect(getPendedDisplayOwners(lexical)?.size ?? 0).toBeGreaterThan(0);
    // The host's view: the typed `\q1` has already become a paragraph of its own, so the last
    // paragraph is at settled index 4 while the live tree still has it at 3.
    expect(settledMarkers(ref.current?.getUsj())).toEqual(["id", "c", "p", "q1", "p"]);

    await act(async () => {
      ref.current?.setAnnotation(
        {
          start: { jsonPath: contentPath([4, 0]), offset: 0 },
          end: { jsonPath: contentPath([4, 0]), offset: 6 },
        },
        "test",
        "1",
      );
      await Promise.resolve();
    });

    expect(annotatedText(lexical)).toEqual(["depart"]);
  });

  it("follows a settled index the rejoin pulled up, rather than the paragraph that index names live", async () => {
    const { ref, lexical } = await mountStandardViewEditor({
      type: "USJ",
      version: "3.1",
      content: [
        { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
        { type: "chapter", marker: "c", number: "1" },
        { type: "para", marker: "p", content: ["stuff"] },
        { type: "para", marker: "asdf", content: ["more"] },
        { type: "para", marker: "p", content: ["depart here"] },
      ],
    });
    // Losing its backslash dissolves the unknown-split artifact back into the paragraph before it.
    await act(async () => {
      lexical.update(() => {
        const para = $getRoot().getChildren().filter($isParaNode)[1];
        const glyph = para.getFirstChild();
        if (!$isTextNode(glyph)) throw new Error("expected a prefix glyph");
        glyph.setTextContent("asdf");
        glyph.selectEnd();
      });
      await Promise.resolve();
      await Promise.resolve();
    });
    expect(settledMarkers(ref.current?.getUsj())).toEqual(["id", "c", "p", "p"]);

    await act(async () => {
      ref.current?.setAnnotation(
        {
          start: { jsonPath: contentPath([3, 0]), offset: 0 },
          end: { jsonPath: contentPath([3, 0]), offset: 4 },
        },
        "test",
        "1",
      );
      await Promise.resolve();
    });

    // Live index 3 is the artifact paragraph, whose own `"more"` is four characters long — so an
    // untranslated path resolves happily onto the wrong paragraph. This is the silent mis-anchor,
    // not a failure to resolve.
    expect(annotatedText(lexical)).toEqual(["depa"]);
  });
});

/**
 * The host's own resolution: walk a settled `jsonPath` down the document `getUsj()` returned, the
 * way a consumer holding that path would. A location the editor reports is only useful if this
 * lands on the item the caret was actually in.
 */
function usjContentAt(usj: Usj | undefined, jsonPath: string): MarkerObject | string | undefined {
  let content = usj?.content;
  let item: MarkerObject | string | undefined;
  for (const index of indexesFromUsjJsonPath(jsonPath)) {
    item = content?.[index];
    if (item === undefined) return undefined;
    content = typeof item === "string" ? undefined : item.content;
  }
  return item;
}

/** The character a settled text location names in the settled document. */
function settledCharacterAt(usj: Usj | undefined, location: SelectionRange["start"]): string {
  const item = usjContentAt(usj, location.jsonPath);
  if (typeof item !== "string") throw new Error(`${location.jsonPath} is not settled text`);
  const offset = "offset" in location ? location.offset : undefined;
  if (offset === undefined) throw new Error("expected a text content location");
  return item[offset];
}

describe("reporting the selection while a literal is pending", () => {
  const live = "In the beginning \\nd LORD\\nd* made";

  /** The paragraph's literal is pending, and the caret sits on the `m` of `made` — a live offset
   * that does not exist in the settled paragraph's first content item at all. */
  async function pendingSpanWithCaret(onSelectionChange?: (s: SelectionRange | undefined) => void) {
    const mounted = await mountStandardViewEditor(twoParaUsj(["In the beginning made"]), {
      onSelectionChange,
    });
    await typeOver(mounted.lexical, "In the beginning made", live);
    expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);
    return mounted;
  }

  /** Move the caret onto the `m` of `made` and tell the editor the selection moved, the way the
   * browser's own selectionchange does — from inside the update that moved it. */
  async function moveCaretToMade(lexical: LexicalEditor) {
    await act(async () => {
      lexical.update(() => {
        const node = $textContaining(live);
        if (!$isTextNode(node)) throw new Error("expected a text node");
        node.select(live.indexOf(" made") + 1, live.indexOf(" made") + 1);
        lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
      });
      await Promise.resolve();
      await Promise.resolve();
    });
  }

  it("getSelection reports coordinates the settled document resolves", async () => {
    const { ref, lexical } = await pendingSpanWithCaret();
    await moveCaretToMade(lexical);

    const selection = ref.current?.getSelection();

    expect(selection?.start).toBeDefined();
    if (!selection?.start) throw new Error("no selection");
    // Live the paragraph is one 33-character text node; settled it is three content items, and
    // offset 30 does not exist in the first of them. The reported path has to name the item the
    // caret is actually in.
    expect(settledCharacterAt(ref.current?.getUsj(), selection.start)).toBe("m");
  });

  it("onSelectionChange reports the same coordinates getSelection does", async () => {
    const onSelectionChange = vi.fn();
    const { ref, lexical } = await pendingSpanWithCaret(onSelectionChange);
    onSelectionChange.mockClear();

    await moveCaretToMade(lexical);

    expect(onSelectionChange).toHaveBeenCalled();
    const reported = onSelectionChange.mock.calls[onSelectionChange.mock.calls.length - 1][0];
    expect(reported).toEqual(ref.current?.getSelection());
    expect(settledCharacterAt(ref.current?.getUsj(), reported.start)).toBe("m");
  });

  it("reports the committed selection, once, for a move the dispatch preceded", async () => {
    const onSelectionChange = vi.fn();
    const { ref, lexical } = await pendingSpanWithCaret(onSelectionChange);
    onSelectionChange.mockClear();

    await act(async () => {
      lexical.update(() => {
        // Dispatched BEFORE the caret moves: a reporter that answers from inside the update sees
        // the OLD selection, because the move below has not happened yet. The report has to come
        // from the committed state instead — where the move HAS happened — which is also the only
        // state a settle scope may be prepared against, since preparing one creates nodes.
        lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
        const node = $textContaining(live);
        if (!$isTextNode(node)) throw new Error("expected a text node");
        node.select(live.indexOf(" made") + 1, live.indexOf(" made") + 1);
      });
      expect(onSelectionChange).not.toHaveBeenCalled();
      await Promise.resolve();
      await Promise.resolve();
    });

    expect(onSelectionChange).toHaveBeenCalledTimes(1);
    const reported = onSelectionChange.mock.calls[0][0];
    expect(settledCharacterAt(ref.current?.getUsj(), reported.start)).toBe("m");
  });

  it("does not report once the editor has unmounted", async () => {
    const onSelectionChange = vi.fn();
    const { lexical, unmount } = await pendingSpanWithCaret(onSelectionChange);
    onSelectionChange.mockClear();

    await act(async () => {
      lexical.update(() => {
        const node = $textContaining(live);
        if (!$isTextNode(node)) throw new Error("expected a text node");
        node.select(live.indexOf(" made") + 1, live.indexOf(" made") + 1);
        lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
      });
      // The report is queued and has not run. Tearing the view down before it drains has to
      // cancel it: the deferred read force-commits the editor, and a host that has thrown the
      // view away must not be told where the caret is in it.
      unmount();
      await Promise.resolve();
      await Promise.resolve();
    });

    expect(onSelectionChange).not.toHaveBeenCalled();
  });

  it("reports synchronously when nothing is pending", async () => {
    const onSelectionChange = vi.fn();
    const { lexical } = await mountStandardViewEditor(twoParaUsj(["In the beginning made"]), {
      onSelectionChange,
    });
    onSelectionChange.mockClear();

    let reportedInsideUpdate = false;
    await act(async () => {
      lexical.update(() => {
        const node = $textContaining("In the beginning made");
        if (!$isTextNode(node)) throw new Error("expected a text node");
        node.select(3, 3);
        lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
        reportedInsideUpdate = onSelectionChange.mock.calls.length > 0;
      });
      await Promise.resolve();
    });

    // Live IS settled with nothing pending, so the report costs one predicate and keeps the
    // editor's own timing: the host hears about the move inside the dispatch that carried it.
    expect(reportedInsideUpdate).toBe(true);
  });
});
