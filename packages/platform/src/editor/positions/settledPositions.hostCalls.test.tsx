/**
 * The position API as a host drives it through `EditorRef`, around the edges of an update: what a
 * user edit right after `setSelection` reports, what a read-only editor reports for a placement, a
 * stylesheet that arrives while a scope is pending, `getSelection` in the same tick as an undo, a
 * caret at a paragraph's content start (which sits at the end of the space after the `\p` glyph),
 * typing over a selection that ends where a footnote's text does, and `selectNote` counting the
 * settled document's notes while one is still a typed literal.
 */
import { mountExpandedNoteEditor, mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { $textContaining, contentPath, twoParaUsj, typeOver } from "./positions.test-helpers";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { $findMatchingParent } from "@lexical/utils";
import { act } from "@testing-library/react";
import { $getRoot, $getSelection, $isElementNode, $isRangeSelection, LexicalNode } from "lexical";
import {
  $isNoteNode,
  $isTypedMarkNode,
  defaultStyleInfo,
  getPendedDisplayOwners,
  StyleInfo,
  TypedMarkNode,
} from "shared";
import { SelectionRange } from "shared-react";
import { vi } from "vitest";

function $marks(nodes: LexicalNode[] = $getRoot().getChildren()): TypedMarkNode[] {
  const out: TypedMarkNode[] = [];
  nodes.forEach((node) => {
    if ($isTypedMarkNode(node)) out.push(node);
    if ($isElementNode(node)) out.push(...$marks(node.getChildren()));
  });
  return out;
}

/** The text of `usj` from a text location onward — what a host reads at that position. */
function textFrom(usj: Usj | undefined, selection: SelectionRange | undefined): string | undefined {
  if (!usj || !selection || !("offset" in selection.start)) return undefined;
  let item: MarkerContent | Usj | undefined = usj;
  for (const match of selection.start.jsonPath.matchAll(/\[(\d+)\]/g))
    item = typeof item === "string" ? undefined : item?.content?.[Number(match[1])];
  return typeof item === "string" ? item.slice(selection.start.offset) : undefined;
}

describe("a user edit right after setSelection", () => {
  it.each<[string, SelectionRange]>([
    ["a caret", { start: { jsonPath: contentPath([2, 0]), offset: 3 } }],
    [
      "a range",
      {
        start: { jsonPath: contentPath([2, 0]), offset: 1 },
        end: { jsonPath: contentPath([2, 0]), offset: 4 },
      },
    ],
  ])("reaches the host when setSelection placed %s inside a text node", async (_label, range) => {
    const onUsjChange = vi.fn();
    const { ref, lexical } = await mountStandardViewEditor(twoParaUsj(["plain text"]), {
      onUsjChange,
    });
    await act(async () => {
      ref.current?.setSelection(range);
      await Promise.resolve();
    });
    await act(async () => {
      lexical.update(() => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
        selection.insertText("X");
      });
      await Promise.resolve();
    });

    const expected = range.end ? "pXn text" : "plaXin text";
    expect(onUsjChange).toHaveBeenCalled();
    expect(onUsjChange.mock.calls.at(-1)?.[0]?.content?.[2]?.content).toEqual([expected]);
    expect(ref.current?.getUsj()?.content?.[2]).toEqual({
      type: "para",
      marker: "p",
      content: [expected],
    });
  });
});

describe("setSelection in a read-only editor", () => {
  it.each([
    ["inside a text node", 2],
    ["at the end of a text node", 10],
  ])("reports a caret placed %s", async (_label, offset) => {
    const onSelectionChange = vi.fn();
    const { ref } = await mountStandardViewEditor(twoParaUsj(["plain text"]), {
      isReadonly: true,
      onSelectionChange,
    });
    onSelectionChange.mockClear();
    const placed = { start: { jsonPath: contentPath([2, 0]), offset } };
    await act(async () => {
      ref.current?.setSelection(placed);
      await Promise.resolve();
    });

    expect(onSelectionChange).toHaveBeenCalledTimes(1);
    expect(onSelectionChange).toHaveBeenCalledWith(placed);
  });
});

describe("a stylesheet that arrives while a paragraph is pending", () => {
  /** `\zz` is unknown to the default stylesheet, so a typed `\zz` splits its paragraph. */
  const withZzChar: StyleInfo = {
    ...defaultStyleInfo,
    markers: {
      ...defaultStyleInfo.markers,
      zz: { marker: "zz", styleType: "character", endMarker: "zz*" },
    },
  };

  it("translates positions by the new stylesheet's settle, not a plan cached under the old one", async () => {
    const mounted = await mountStandardViewEditor(twoParaUsj(["plain body"]), {
      styleInfo: defaultStyleInfo,
    });
    await typeOver(mounted.lexical, "plain body", "plain \\zz body");
    // Any translating call plans the pending paragraph — and caches that plan.
    mounted.ref.current?.getSelection();

    await mounted.rerenderWithStyleInfo(withZzChar);
    expect(getPendedDisplayOwners(mounted.lexical)?.size).toBeGreaterThan(0);
    const settled = mounted.ref.current?.getUsj();
    const departIndex = (settled?.content ?? []).findIndex(
      (item) => typeof item !== "string" && JSON.stringify(item).includes("depart here"),
    );
    await act(async () => {
      mounted.ref.current?.setAnnotation(
        {
          start: { jsonPath: contentPath([departIndex, 0]), offset: 0 },
          end: { jsonPath: contentPath([departIndex, 0]), offset: 4 },
        },
        "test",
        "1",
      );
      await Promise.resolve();
    });

    expect(
      mounted.lexical.getEditorState().read(() => $marks().map((mark) => mark.getTextContent())),
    ).toEqual(["depa"]);
  });
});

describe("getSelection in the same tick as an undo", () => {
  it("reports coordinates the settled document resolves, after the undo re-pends a paragraph", async () => {
    const { ref, lexical } = await mountStandardViewEditor(twoParaUsj(["plain body"]));
    await typeOver(lexical, "plain body", "plain \\q1 body");
    // Past the split point, without leaving the node.
    await act(async () => {
      lexical.update(() => $textContaining("plain \\q1 body").select(12, 12));
      await Promise.resolve();
    });
    expect(getPendedDisplayOwners(lexical)?.size).toBeGreaterThan(0);
    // An edit elsewhere departs the pending paragraph, which settles it.
    await act(async () => {
      lexical.update(() => {
        $textContaining("depart here").select(11, 11);
        const selection = $getSelection();
        if ($isRangeSelection(selection)) selection.insertText("!");
      });
      await Promise.resolve();
      await Promise.resolve();
    });

    let reported: SelectionRange | undefined;
    await act(async () => {
      // Undoing puts the literal back and re-pends it as the undo COMMITS, so the question arrives
      // while that commit is still queued.
      ref.current?.undo();
      reported = ref.current?.getSelection();
      await Promise.resolve();
    });

    expect(textFrom(ref.current?.getUsj(), reported)).toBe("dy");
  });
});

describe("a caret at a paragraph's content start", () => {
  it("is reported as the start of the paragraph's first text, and set back there", async () => {
    const { ref } = await mountStandardViewEditor(twoParaUsj(["plain text"]));
    const contentStart = { start: { jsonPath: contentPath([2, 0]), offset: 0 } };
    await act(async () => {
      ref.current?.setSelection(contentStart);
      await Promise.resolve();
    });
    const reported = ref.current?.getSelection();
    expect(reported).toEqual(contentStart);

    // Somewhere else, then back to what was reported — how a host restores a lost selection.
    await act(async () => {
      ref.current?.setSelection({ start: { jsonPath: contentPath([3, 0]), offset: 3 } });
      await Promise.resolve();
    });
    await act(async () => {
      if (reported) ref.current?.setSelection(reported);
      await Promise.resolve();
    });

    expect(ref.current?.getSelection()).toEqual(contentStart);
  });

  it("anchors an annotation over a pending paragraph's first character on that character", async () => {
    const mounted = await mountStandardViewEditor(twoParaUsj(["plain body"]));
    await typeOver(mounted.lexical, "plain body", "plain \\q1 body");
    expect(getPendedDisplayOwners(mounted.lexical)?.size).toBeGreaterThan(0);
    await act(async () => {
      mounted.ref.current?.setAnnotation(
        {
          start: { jsonPath: contentPath([2, 0]), offset: 0 },
          end: { jsonPath: contentPath([2, 0]), offset: 1 },
        },
        "test",
        "1",
      );
      await Promise.resolve();
    });

    expect(
      mounted.lexical.getEditorState().read(() => $marks().map((mark) => mark.getTextContent())),
    ).toEqual(["p"]);
  });
});

describe("typing over a selection that ends where a footnote's text ends", () => {
  // `\p text \f + \ft note text.\f* after`: a host's USFM range over `text.` ends at `\f*`, the
  // note's closing marker, when `\ft` has no closer of its own — the usual footnote shape.
  it.each([
    [
      "the note's closer, after an unclosed last char span",
      { closed: "false" },
      { jsonPath: contentPath([2, 1]), closingMarkerOffset: 0 },
    ],
    [
      "the char span's own closer",
      {},
      { jsonPath: contentPath([2, 1, 0]), closingMarkerOffset: 0 },
    ],
  ])("at %s replaces only that text", async (_label, closedAttribute, end) => {
    const ft = { type: "char", marker: "ft", content: ["note text."], ...closedAttribute };
    const { ref, lexical } = await mountStandardViewEditor(
      twoParaUsj(["text ", { type: "note", marker: "f", caller: "+", content: [ft] }, " after"]),
    );
    await act(async () => {
      ref.current?.setSelection({
        start: { jsonPath: contentPath([2, 1, 0, 0]), offset: "note ".length },
        end,
      });
      await Promise.resolve();
    });
    await act(async () => {
      lexical.update(() => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
        selection.insertText("words.");
      });
      await Promise.resolve();
    });
    act(() => ref.current?.commitPendingMarkerEdits());

    expect(ref.current?.getUsj()?.content?.[2]).toEqual({
      type: "para",
      marker: "p",
      content: [
        "text ",
        {
          type: "note",
          marker: "f",
          caller: "+",
          content: [{ ...ft, content: ["note words."] }],
        },
        " after",
      ],
    });
  });
});

describe("getUsj after an annotation settles a pending paragraph", () => {
  it("returns the settled paragraphs, not the literal the paragraph held before", async () => {
    const { ref, lexical } = await mountStandardViewEditor(twoParaUsj(["plain body"]));
    await typeOver(lexical, "plain body", "plain \\q1 body");
    expect(getPendedDisplayOwners(lexical)?.size).toBeGreaterThan(0);
    const settled = ref.current?.getUsj()?.content?.slice(2);
    expect(settled).toEqual([
      { type: "para", marker: "p", content: ["plain "] },
      { type: "para", marker: "q1", content: ["body"] },
      { type: "para", marker: "p", content: ["depart here"] },
    ]);

    // Wrapping the pending text splits it, and the marker-edit engine settles the paragraph inside
    // the annotation's own update, which never reaches the editor's change handler.
    await act(async () => {
      ref.current?.setAnnotation(
        {
          start: { jsonPath: contentPath([3, 0]), offset: 0 },
          end: { jsonPath: contentPath([3, 0]), offset: 2 },
        },
        "test",
        "1",
      );
      await Promise.resolve();
    });
    expect(getPendedDisplayOwners(lexical)?.size ?? 0).toBe(0);

    expect(ref.current?.getUsj()?.content?.slice(2)).toEqual(settled);
  });
});

describe("selectNote(index) counts the settled document's notes", () => {
  /** The literal typed in front of the paragraph's existing note — settles to the paragraph's
   * FIRST note, ahead of the second, carried note the settle leaves untouched. */
  const LITERAL = "\\f + \\fr 1.1 \\ft typed\\f*";

  /** Whether the live selection's anchor sits inside (or on) a note whose text contains `needle`. */
  function $selectionInsideNoteContaining(needle: string): boolean {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) return false;
    const anchorNode = selection.anchor.getNode();
    const note = $isNoteNode(anchorNode)
      ? anchorNode
      : $findMatchingParent(anchorNode, $isNoteNode);
    return note ? note.getTextContent().includes(needle) : false;
  }

  /** A pending note literal typed in front of an existing note the paragraph already carries, so
   * the settled document has two notes — the literal's (first) and the existing one (second) —
   * while the live tree still spells the first as plain text. */
  async function literalBeforeCarriedNote() {
    const mounted = await mountExpandedNoteEditor(
      twoParaUsj([
        "head made text ",
        {
          type: "note",
          marker: "f",
          caller: "+",
          content: [{ type: "char", marker: "fr", content: ["1.1"] }, "existing body"],
        },
        " after",
      ]),
    );
    await typeOver(mounted.lexical, "head made text ", `head ${LITERAL} text `);
    expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);
    return mounted;
  }

  it("selects the settled second note — the carried note — with the caret inside it", async () => {
    const { ref, lexical } = await literalBeforeCarriedNote();

    await act(async () => {
      ref.current?.selectNote(1);
      await Promise.resolve();
    });

    expect(
      lexical.getEditorState().read(() => $selectionInsideNoteContaining("existing body")),
    ).toBe(true);
  });

  it("puts a collapsed caret at the settled first note's `\\`, while it is still a typed literal", async () => {
    const { ref, lexical } = await literalBeforeCarriedNote();
    const literal = lexical.getEditorState().read(() => ({
      key: $textContaining(LITERAL).getKey(),
      offset: $textContaining(LITERAL).getTextContent().indexOf(LITERAL),
    }));

    await act(async () => {
      ref.current?.selectNote(0);
      await Promise.resolve();
    });

    const caret = lexical.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection) || !selection.isCollapsed()) return undefined;
      return { key: selection.anchor.getNode().getKey(), offset: selection.anchor.offset };
    });
    expect(caret).toEqual(literal);
  });

  it("with nothing pending, selects the note at that index unchanged", async () => {
    const { ref, lexical } = await mountStandardViewEditor(
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
      ref.current?.selectNote(0);
      await Promise.resolve();
    });

    // The default (collapsed) note mode selects the end of the node before the note, not its
    // inside — `$selectNote`'s own collapsed behavior, unaffected by which document the index
    // counted against when nothing is pending.
    const caret = lexical.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection) || !selection.isCollapsed()) return undefined;
      return {
        text: selection.anchor.getNode().getTextContent(),
        offset: selection.anchor.offset,
      };
    });
    expect(caret).toEqual({ text: "before ", offset: "before ".length });
  });
});
