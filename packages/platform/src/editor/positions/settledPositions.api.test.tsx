/**
 * The public position API, end to end: a host holds a `jsonPath` it read from `getUsj()` and hands
 * it straight back to `setAnnotation`. While an edit is pending those are two different documents,
 * and the top-level indexes of one do not name the same paragraphs as the other — so an untranslated
 * path either fails to resolve or, worse, resolves onto the wrong paragraph.
 *
 * Both rows annotate a paragraph OUTSIDE the pending one, to isolate the path translation from
 * what the rebuild itself does to a mark: a Tier-2 rebuild replaces its paragraph's children
 * wholesale and carries annotations across by byte anchor wherever their bytes survive the
 * re-tokenization as content (bytes that became a marker glyph, an anchor that no longer resolves,
 * and a range the rebuild collapses to nothing are each refused instead), which is a property of
 * the rebuild rather than of this translation and is pinned with it
 * (markerEdit/annotationSurvivesSettle.test.tsx). The translation's own behavior INSIDE a pending
 * paragraph is asserted in settledPositions.inbound.test.tsx, against the same
 * `$liveSelectionFromSettled` output these methods consume.
 */
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import {
  contentPath,
  settledPara,
  twoParaUsj,
  typeOver,
  $textContaining,
} from "./positions.test-helpers";
import {
  indexesFromUsjJsonPath,
  MarkerObject,
  Usj,
} from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  LexicalEditor,
  LexicalNode,
  SELECTION_CHANGE_COMMAND,
} from "lexical";
import { $isParaNode, $isTypedMarkNode, getPendedDisplayOwners, NBSP, TypedMarkNode } from "shared";
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
 * `insertNote`'s `selection` argument is host-facing SETTLED coordinates (see `EditorRef.insertNote`'s
 * TSDoc): a host that read a text offset from `getUsj()` and calls back with it expects the note to
 * land at that offset, not wherever the editor's own caret happens to be.
 */
describe("insertNote honours the selection it was given", () => {
  it("inserts at the given location, not the caret", async () => {
    const { ref, lexical } = await mountStandardViewEditor(twoParaUsj(["plain body text"]));
    await act(async () => {
      lexical.update(() => {
        // The caret sits at the very start of the paragraph — the wrong place an unfixed
        // insertion would land the note.
        $textContaining("plain body text").select(0, 0);
      });
      await Promise.resolve();
    });

    await act(async () => {
      ref.current?.insertNote("f", undefined, {
        start: { jsonPath: contentPath([2, 0]), offset: 6 },
      });
      await Promise.resolve();
    });

    const para = settledPara(ref.current?.getUsj(), 2);
    expect(para.content?.[0]).toBe("plain ");
    expect((para.content?.[1] as MarkerObject)?.type).toBe("note");
    expect(para.content?.[2]).toBe("body text");
  });

  it("translates a settled location the pend elsewhere pushed down onto the live paragraph it names", async () => {
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
    // The typed `\q1` has already become a paragraph of its own, so "depart here" is settled index
    // 4 while the live tree still has it at 3 (the same shift the `setAnnotation` suite above pins).
    expect(settledMarkers(ref.current?.getUsj())).toEqual(["id", "c", "p", "q1", "p"]);

    await act(async () => {
      ref.current?.insertNote("f", undefined, {
        start: { jsonPath: contentPath([4, 0]), offset: 7 },
      });
      await Promise.resolve();
    });

    const para = settledPara(ref.current?.getUsj(), 4);
    expect(para.content?.[0]).toBe("depart ");
    expect((para.content?.[1] as MarkerObject)?.type).toBe("note");
    expect(para.content?.[2]).toBe("here");
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

/**
 * `setSelection` places the caret by writing the Lexical model directly, not by driving the
 * browser's own Selection object the way a click or arrow key does. A host that calls it needs to
 * hear the placement back through `onSelectionChange` the same way it hears any other caret move —
 * regardless of where inside a text run the caret landed.
 */
describe("setSelection reports the selection it placed", () => {
  it("reports a collapsed caret placed in the interior of a text node", async () => {
    const onSelectionChange = vi.fn();
    const { ref } = await mountStandardViewEditor(twoParaUsj(["plain text"]), {
      onSelectionChange,
    });
    onSelectionChange.mockClear();

    const location = { start: { jsonPath: contentPath([2, 0]), offset: 2 } };
    await act(async () => {
      ref.current?.setSelection(location);
      await Promise.resolve();
    });

    expect(onSelectionChange).toHaveBeenCalledWith(location);
  });

  it("reports a range whose both endpoints sit in the interior of a text node", async () => {
    const onSelectionChange = vi.fn();
    const { ref } = await mountStandardViewEditor(twoParaUsj(["plain text"]), {
      onSelectionChange,
    });
    onSelectionChange.mockClear();

    const location = {
      start: { jsonPath: contentPath([2, 0]), offset: 2 },
      end: { jsonPath: contentPath([2, 0]), offset: 4 },
    };
    await act(async () => {
      ref.current?.setSelection(location);
      await Promise.resolve();
    });

    expect(onSelectionChange).toHaveBeenCalledWith(location);
  });

  it("reports a caret placed at a text boundary exactly once", async () => {
    const onSelectionChange = vi.fn();
    const { ref } = await mountStandardViewEditor(twoParaUsj(["plain text"]), {
      onSelectionChange,
    });
    onSelectionChange.mockClear();

    // "plain text" is 10 characters — offset 10 is the text's end, a boundary Lexical's own
    // selectionchange listener never skips.
    const location = { start: { jsonPath: contentPath([2, 0]), offset: 10 } };
    await act(async () => {
      ref.current?.setSelection(location);
      await Promise.resolve();
    });

    expect(onSelectionChange).toHaveBeenCalledTimes(1);
    expect(onSelectionChange).toHaveBeenCalledWith(location);
  });
});

/**
 * Standard view shows a typed run of two or more spaces as NBSPs, so the run stays visible, and
 * serialization collapses it to one space. A run is not marker syntax, so nothing is pending: these
 * positions take the path that answers from the live tree directly.
 */
describe("positions past a space run the user typed", () => {
  const settled = "In the beginning made";
  const live = "In the   beginning made";
  const liveM = live.indexOf(" made") + 1;
  const settledMade = settled.indexOf("made");

  async function typedRun(onSelectionChange?: (s: SelectionRange | undefined) => void) {
    const mounted = await mountStandardViewEditor(twoParaUsj([settled]), { onSelectionChange });
    await typeOver(mounted.lexical, settled, live);
    // The shape typing leaves: the run displayed as NBSPs, nothing pending, and a settled document
    // that already has the run collapsed.
    const liveText = mounted.lexical
      .getEditorState()
      .read(() => $textContaining("beginning").getTextContent());
    expect(liveText).toBe(`In the${NBSP}${NBSP}${NBSP}beginning made`);
    expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBe(0);
    expect(settledPara(mounted.ref.current?.getUsj(), 2).content).toEqual([settled]);
    return mounted;
  }

  async function moveCaretToMade(lexical: LexicalEditor) {
    await act(async () => {
      lexical.update(() => {
        $textContaining("beginning").select(liveM, liveM);
        lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
      });
      await Promise.resolve();
      await Promise.resolve();
    });
  }

  it("getSelection reports the settled character the caret is on", async () => {
    const { ref, lexical } = await typedRun();
    await moveCaretToMade(lexical);

    const selection = ref.current?.getSelection();

    if (!selection?.start) throw new Error("no selection");
    expect(settledCharacterAt(ref.current?.getUsj(), selection.start)).toBe("m");
  });

  it("onSelectionChange reports the same coordinates getSelection does", async () => {
    const onSelectionChange = vi.fn();
    const { ref, lexical } = await typedRun(onSelectionChange);
    onSelectionChange.mockClear();

    await moveCaretToMade(lexical);

    expect(onSelectionChange).toHaveBeenCalled();
    const reported = onSelectionChange.mock.calls[onSelectionChange.mock.calls.length - 1][0];
    expect(reported).toEqual(ref.current?.getSelection());
    expect(settledCharacterAt(ref.current?.getUsj(), reported.start)).toBe("m");
  });

  it("setAnnotation wraps the characters its settled range names", async () => {
    const { ref, lexical } = await typedRun();

    await act(async () => {
      ref.current?.setAnnotation(
        {
          start: { jsonPath: contentPath([2, 0]), offset: settledMade },
          end: { jsonPath: contentPath([2, 0]), offset: settledMade + "made".length },
        },
        "test",
        "1",
      );
      await Promise.resolve();
    });

    expect(annotatedText(lexical)).toEqual(["made"]);
  });

  it("setSelection places the caret on the character its settled offset names", async () => {
    const { ref, lexical } = await typedRun();

    await act(async () => {
      ref.current?.setSelection({ start: { jsonPath: contentPath([2, 0]), offset: settledMade } });
      await Promise.resolve();
    });

    const caret = lexical.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) return undefined;
      return selection.anchor.getNode().getTextContent()[selection.anchor.offset];
    });
    expect(caret).toBe("m");
  });
});
