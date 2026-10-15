/**
 * A char span's opener separator (the NBSP after `\w`) that the user removes, by deleting it or by
 * typing over it. The bytes on screen decide what the span becomes: a missing separator is healed
 * back in place only when the bytes read the same without it (`\w` before `\`, `|` or more
 * whitespace); otherwise `\wgrace` IS a new marker name and settles as one — through
 * `EditorRef.getUsj()` while pending, and in the live tree once the caret departs. An annotation
 * that happens to touch the span must not change that outcome.
 *
 * Standard view. Typing is per-character `insertText` at the live selection; a Backspace is the
 * removal of the one character before the caret, as jsdom cannot run `deleteCharacter`.
 */
import {
  $heldBytes,
  HELD_TYPE,
  mountInView,
  ORACLE_TYPE,
  oracleView,
} from "../annotationLocations/annotationLocations.test-helpers";
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { $textContaining, contentPath, twoParaUsj } from "../positions/positions.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $isElementNode,
  $isTextNode,
  CLICK_COMMAND,
  LexicalEditor,
  LexicalNode,
  REDO_COMMAND,
  UNDO_COMMAND,
} from "lexical";
import {
  $isCharNode,
  $isMarkerNode,
  $isParaNode,
  $isTypedMarkNode,
  CharNode,
  canonicalAttributeText,
  defaultMarkerAttribute,
  getPendedDisplayOwners,
  NBSP,
  usfmFragmentToUsjContent,
} from "shared";
import { AnnotationRange } from "shared-react";
import { describe, expect, it } from "vitest";

type Mounted = Awaited<ReturnType<typeof mountStandardViewEditor>>;
/** What the settle helpers need from a mount, in Standard view or any other. */
type SettleMounted = Pick<Mounted, "ref" | "lexical">;

const WORD_PARA_INDEX = 2;

/** `\p In the \<marker> grace\<marker>* of God`, with `attributes` on the span. */
function wordUsj(marker: string, attributes: { [attribute: string]: string } = {}): Usj {
  return twoParaUsj([
    "In the ",
    { type: "char", marker, ...attributes, content: ["grace"] },
    " of God",
  ]);
}

/** `In`, the first two characters of the edited paragraph. */
const inRange: AnnotationRange = {
  start: { jsonPath: contentPath([WORD_PARA_INDEX, 0]), offset: 0 },
  end: { jsonPath: contentPath([WORD_PARA_INDEX, 0]), offset: "In".length },
};

async function annotate(mounted: Mounted, range: AnnotationRange, id = "a1"): Promise<void> {
  await act(async () => {
    mounted.ref.current?.setAnnotation(range, "test", id);
    await Promise.resolve();
  });
}

/** Select `[start, end)` of the first text node containing `needle`. */
async function selectIn(
  lexical: LexicalEditor,
  needle: string,
  start: number,
  end: number,
): Promise<void> {
  await act(async () => {
    lexical.update(() => $textContaining(needle).select(start, end));
    await Promise.resolve();
  });
}

/** Type `text` one character at a time at the live selection. */
async function typeChars(lexical: LexicalEditor, text: string, afterEach?: () => void) {
  for (const character of text) {
    await act(async () => {
      lexical.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) selection.insertText(character);
      });
      await Promise.resolve();
      await Promise.resolve();
    });
    afterEach?.();
  }
}

/** Click into the second paragraph, then settle the way an abandoned edit does: blur, then commit
 * whatever is still pending. The click is the user gesture a history restore waits for before it
 * settles anything. */
async function depart(mounted: SettleMounted): Promise<void> {
  await act(async () => {
    mounted.lexical.dispatchCommand(CLICK_COMMAND, new MouseEvent("click"));
    mounted.lexical.update(() => $textContaining("depart here").select(1, 1));
    await Promise.resolve();
    await Promise.resolve();
  });
  const rootElement = mounted.lexical.getRootElement();
  if (!rootElement) throw new Error("editor root not found");
  act(() => rootElement.blur());
  act(() => mounted.ref.current?.commitPendingMarkerEdits());
}

function paraOf(usj: Usj | undefined, marker: string): MarkerObject {
  const para = usj?.content.find(
    (item): item is MarkerObject =>
      typeof item !== "string" && item.type === "para" && item.marker === marker,
  );
  if (!para) throw new Error(`no ${marker} paragraph in ${JSON.stringify(usj?.content)}`);
  return para;
}

/** The USFM a writer emits for `item`: a marker and its separator space, then its content, then
 * the closer (and a char span's attributes in their canonical display form before it). */
function usfmOf(item: MarkerContent): string {
  if (typeof item === "string") return item;
  const { type, marker = "", content = [], closed, ...attributes } = item;
  const inner = content.map(usfmOf).join("");
  if (type === "unmatched") return `\\${marker}`;
  if (type === "para") return `\\${marker} ${inner}`;
  if (type === "char") {
    const attributeText = canonicalAttributeText(attributes, defaultMarkerAttribute(marker));
    const closer = closed === "false" ? "" : `\\${marker}*`;
    return `\\${marker} ${inner}${attributeText}${closer}`;
  }
  throw new Error(`no USFM written for a ${type}`);
}

/** The live bytes on screen for `node` (NBSP separators are the file's spaces). */
function screenBytes(lexical: LexicalEditor, $node: () => LexicalNode): string {
  return lexical.getEditorState().read(() => $node().getTextContent().replaceAll(NBSP, " "));
}

/** The live paragraph with `marker`. */
function $paraWithMarker(marker: string): LexicalNode {
  const para = $getRoot()
    .getChildren()
    .find((node) => $isParaNode(node) && node.getMarker() === marker);
  if (!para) throw new Error(`no live ${marker} paragraph`);
  return para;
}

/** Screen bytes == saved bytes: the live `marker` paragraph shows exactly what the file gets. */
function expectScreenIsSaved(mounted: SettleMounted, marker: string): void {
  const saved = paraOf(mounted.ref.current?.getUsj(), marker);
  expect(screenBytes(mounted.lexical, () => $paraWithMarker(marker))).toBe(usfmOf(saved));
}

/** The marker of the live span holding the caret, if the caret is inside one. */
function caretSpanMarker(lexical: LexicalEditor): string | undefined {
  return lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) return undefined;
    let node: LexicalNode | null = selection.anchor.getNode();
    while (node && !$isCharNode(node)) node = node.getParent();
    return node?.getMarker();
  });
}

/** The first live char span in document order, wherever it sits (a paragraph, a table cell). */
function $firstSpan(): CharNode {
  const find = (node: LexicalNode): CharNode | undefined => {
    if ($isCharNode(node)) return node;
    if (!$isElementNode(node)) return undefined;
    for (const child of node.getChildren()) {
      const span = find(child);
      if (span) return span;
    }
    return undefined;
  };
  const span = find($getRoot());
  if (!span) throw new Error("no live span");
  return span;
}

describe("an annotation touching a span whose separator the user replaced", () => {
  it("settles as the bytes say, the same as without the annotation", async () => {
    const saved: (Usj | undefined)[] = [];
    for (const withAnnotation of [false, true]) {
      const mounted = await mountStandardViewEditor(wordUsj("w"));
      await selectIn(mounted.lexical, "grace", 0, `${NBSP}grace`.length);
      await typeChars(mounted.lexical, 'grace|lemma="grace"');
      const pending = mounted.ref.current?.getUsj();
      if (withAnnotation) await annotate(mounted, inRange);
      await depart(mounted);

      const settled = mounted.ref.current?.getUsj();
      expect(paraOf(settled, "wgrace").content).toEqual([
        '|lemma="grace"',
        { type: "unmatched", marker: "w*" },
        " of God",
      ]);
      expect(settled).toEqual(pending);
      saved.push(settled);
      mounted.unmount();
    }
    expect(saved[1]).toEqual(saved[0]);
  });
});

describe("typing over a span's separator", () => {
  const rows: [
    name: string,
    marker: string,
    attributes: { [attribute: string]: string },
    rest: MarkerContent[],
  ][] = [
    ["w", "w", {}, []],
    ["nd", "nd", {}, []],
    ["add", "add", {}, []],
    ["wj", "wj", {}, []],
    ['w lemma="gracious"', "w", { lemma: "gracious" }, ["|gracious"]],
  ];

  it.each(rows)(
    "renames the marker, as deleting it does (%s)",
    async (_name, marker, attributes, rest) => {
      const mounted = await mountStandardViewEditor(wordUsj(marker, attributes));
      await selectIn(mounted.lexical, "grace", 0, 1);
      await typeChars(mounted.lexical, "x");
      const renamed = `${marker}xgrace`;
      const expected = [...rest, { type: "unmatched", marker: `${marker}*` }, " of God"];
      const pending = mounted.ref.current?.getUsj();
      expect(paraOf(pending, renamed).content).toEqual(expected);

      await depart(mounted);
      const settled = mounted.ref.current?.getUsj();
      expect(paraOf(settled, renamed).content).toEqual(expected);
      expect(settled).toEqual(pending);
      expectScreenIsSaved(mounted, renamed);
    },
  );

  it("types a closer when the character is a `*`, never healing the separator back", async () => {
    const mounted = await mountStandardViewEditor(wordUsj("w"));
    await selectIn(mounted.lexical, "grace", 0, 1);
    await typeChars(mounted.lexical, "*");
    const pending = mounted.ref.current?.getUsj();

    await depart(mounted);
    const settled = mounted.ref.current?.getUsj();
    expect(paraOf(settled, "p").content).toEqual([
      "In the ",
      { type: "unmatched", marker: "w*" },
      "grace",
      { type: "unmatched", marker: "w*" },
      " of God",
    ]);
    expect(settled).toEqual(pending);
    expectScreenIsSaved(mounted, "p");
  });

  it("keeps typing inside the live span until the caret departs", async () => {
    const mounted = await mountStandardViewEditor(wordUsj("w"));
    await selectIn(mounted.lexical, "grace", 0, 1);
    const spans: (string | undefined)[] = [];
    await typeChars(mounted.lexical, "xyz", () => spans.push(caretSpanMarker(mounted.lexical)));
    expect(spans).toEqual(["w", "w", "w"]);

    await depart(mounted);
    expect(paraOf(mounted.ref.current?.getUsj(), "wxyzgrace").content).toEqual([
      { type: "unmatched", marker: "w*" },
      " of God",
    ]);
  });

  it("settles to the rename again after an undo and a redo", async () => {
    const mounted = await mountStandardViewEditor(wordUsj("w"));
    await selectIn(mounted.lexical, "grace", 0, 1);
    await typeChars(mounted.lexical, "x");
    await depart(mounted);
    const renamed = mounted.ref.current?.getUsj();
    expect(paraOf(renamed, "wxgrace")).toBeDefined();

    await act(async () => {
      mounted.lexical.dispatchCommand(UNDO_COMMAND, undefined);
      await Promise.resolve();
    });
    await act(async () => {
      mounted.lexical.dispatchCommand(REDO_COMMAND, undefined);
      await Promise.resolve();
    });
    await depart(mounted);

    const settled = mounted.ref.current?.getUsj();
    expect(settled).toEqual(renamed);
    expectScreenIsSaved(mounted, "wxgrace");
  });

  it("still renames after an undo and a redo of the unsettled type-over", async () => {
    const mounted = await mountStandardViewEditor(wordUsj("w"));
    await selectIn(mounted.lexical, "grace", 0, 1);
    await typeChars(mounted.lexical, "x");
    const pending = mounted.ref.current?.getUsj();
    await act(async () => {
      mounted.lexical.dispatchCommand(UNDO_COMMAND, undefined);
      await Promise.resolve();
    });
    await act(async () => {
      mounted.lexical.dispatchCommand(REDO_COMMAND, undefined);
      await Promise.resolve();
    });
    // The redone gap was restored without transforms; the engine must still hold it pending.
    expect(mounted.ref.current?.getUsj()).toEqual(pending);

    await depart(mounted);
    const settled = mounted.ref.current?.getUsj();
    expect(paraOf(settled, "wxgrace").content).toEqual([
      { type: "unmatched", marker: "w*" },
      " of God",
    ]);
    expect(settled).toEqual(pending);
    expectScreenIsSaved(mounted, "wxgrace");
  });

  it("heals the separator back in front of a space typed over it, keeping the space", async () => {
    // `\w grace` reads the same with the space as the separator, so the NBSP is restored in place
    // and the typed space stays content: the screen shows `\w⍽ grace`, the writer `\w  grace`.
    const mounted = await mountStandardViewEditor(wordUsj("w"));
    await selectIn(mounted.lexical, "grace", 0, 1);
    await typeChars(mounted.lexical, " a");
    const spanText = (): string =>
      mounted.lexical.getEditorState().read(() => $textContaining("agrace").getTextContent());
    expect(spanText()).toBe(`${NBSP} agrace`);
    const pending = mounted.ref.current?.getUsj();

    await depart(mounted);
    const settled = mounted.ref.current?.getUsj();
    expect(paraOf(settled, "p").content).toEqual([
      "In the ",
      { type: "char", marker: "w", content: [" agrace"] },
      " of God",
    ]);
    expect(settled).toEqual(pending);
    expect(spanText()).toBe(`${NBSP} agrace`);
    expectScreenIsSaved(mounted, "p");
  });

  it("heals the separator back when a `|` is typed over it, and settles the `|…` it starts", async () => {
    // `\w|grace` reads the same as `\w |grace`, so the separator is healed at once, before
    // departure; the bare `|grace` before `\w*` is then the span's default attribute.
    const mounted = await mountStandardViewEditor(wordUsj("w"));
    await selectIn(mounted.lexical, "grace", 0, 1);
    await typeChars(mounted.lexical, "|");
    expect(
      mounted.lexical.getEditorState().read(() => $textContaining("|grace").getTextContent()),
    ).toBe(`${NBSP}|grace`);
    const pending = mounted.ref.current?.getUsj();
    expect(paraOf(pending, "p").content).toEqual([
      "In the ",
      { type: "char", marker: "w", lemma: "grace" },
      " of God",
    ]);

    await depart(mounted);
    expect(mounted.ref.current?.getUsj()).toEqual(pending);
    expectScreenIsSaved(mounted, "p");
  });

  it("settles a `\\` typed over it as the marker it starts", async () => {
    // `\w\grace\w*`: the name scan stops at the `\` either way, and `\grace` is an unknown
    // marker, which body text resolves as a paragraph.
    const mounted = await mountStandardViewEditor(wordUsj("w"));
    await selectIn(mounted.lexical, "grace", 0, 1);
    await typeChars(mounted.lexical, "\\");
    const pending = mounted.ref.current?.getUsj();

    await depart(mounted);
    const settled = mounted.ref.current?.getUsj();
    expect(paraOf(settled, "grace").content).toEqual([
      { type: "unmatched", marker: "w*" },
      " of God",
    ]);
    expect(settled).toEqual(pending);
    expectScreenIsSaved(mounted, "p");
    expectScreenIsSaved(mounted, "grace");
  });
});

describe("typing between a span's glyph and its separator", () => {
  // The caret right after `\w` (in front of the separator) extends the marker NAME: the screen reads
  // `\wx grace\w*`, and an opener rename renames its closer, so the span settles as
  // `\wx grace\wx*`. The typed byte can land in the glyph (`\wx` + `⍽grace`) or at the start of
  // the content text (`\w` + `x⍽grace`) depending on where the editor resolves the caret; the
  // same screen bytes settle the same way from both, and `getUsj()` while the edit is pending
  // already returns that settled document.
  const rows: [shape: string, view: string, character: string][] = [
    ["glyph", "standard", "x"],
    ["content", "standard", "x"],
    ["glyph", "standard", "j"],
    ["content", "standard", "j"],
    ["glyph", "unformatted", "x"],
    ["content", "unformatted", "x"],
  ];

  it.each(rows)(
    "renames the opener and its closer (typed into the %s, %s view, `%s`)",
    async (shape, view, character) => {
      const mounted: SettleMounted =
        view === "standard"
          ? await mountStandardViewEditor(wordUsj("w"))
          : await mountInView(wordUsj("w"), oracleView(view));
      await act(async () => {
        mounted.lexical.update(() => {
          const content = $textContaining("grace");
          if (shape === "content") {
            content.setTextContent(`${character}${NBSP}grace`);
            content.select(1, 1);
            return;
          }
          content.select(0, 0);
          const selection = $getSelection();
          if ($isRangeSelection(selection)) selection.insertText(character);
        });
        await Promise.resolve();
        await Promise.resolve();
      });
      const renamed = `w${character}`;
      const expected = [
        "In the ",
        { type: "char", marker: renamed, content: ["grace"] },
        " of God",
      ];
      const pending = mounted.ref.current?.getUsj();
      expect(paraOf(pending, "p").content).toEqual(expected);

      await depart(mounted);
      const settled = mounted.ref.current?.getUsj();
      expect(paraOf(settled, "p").content).toEqual(expected);
      expect(settled).toEqual(pending);
      expect(screenBytes(mounted.lexical, $firstSpan)).toBe(`\\${renamed} grace\\${renamed}*`);
      expectScreenIsSaved(mounted, "p");
    },
  );

  it.each(["standard", "standard+expandedNotes", "unformatted"])(
    "reads and places positions in the span's text against the settled span (%s view)",
    async (view) => {
      const mounted = await mountInView(wordUsj("w"), oracleView(view));
      await act(async () => {
        mounted.lexical.update(() => {
          const content = $textContaining("grace");
          content.setTextContent(`x${NBSP}grace`);
          content.select(1, 1);
        });
        await Promise.resolve();
      });
      const settledText = contentPath([WORD_PARA_INDEX, 1, 0]);

      // The caret after `gr` reports the settled `gr|ace`.
      await act(async () => {
        mounted.lexical.update(() => {
          const content = $textContaining("grace");
          const offset = content.getTextContent().indexOf("grace") + "gr".length;
          content.select(offset, offset);
        });
        await Promise.resolve();
      });
      expect(mounted.ref.current?.getSelection()?.start).toEqual({
        jsonPath: settledText,
        offset: "gr".length,
      });

      // The settled `gr|ace` places the caret there.
      await act(async () => {
        mounted.ref.current?.setSelection({ start: { jsonPath: settledText, offset: 2 } });
        await Promise.resolve();
      });
      const caret = mounted.lexical.getEditorState().read(() => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) return undefined;
        const node = selection.anchor.getNode();
        return node.getTextContent().slice(0, selection.anchor.offset);
      });
      expect(caret?.endsWith("gr")).toBe(true);

      // An annotation on the settled `rac` holds exactly those bytes.
      await act(async () => {
        mounted.ref.current?.setAnnotation(
          {
            start: { jsonPath: settledText, offset: 1 },
            end: { jsonPath: settledText, offset: 4 },
          },
          ORACLE_TYPE,
          "rac",
        );
        await Promise.resolve();
      });
      expect(mounted.lexical.getEditorState().read(() => $heldBytes(HELD_TYPE, "rac"))).toBe("rac");
    },
  );

  it("ends the new name at the separator in the unformatted view", async () => {
    // `\wj b\wj*` with `a` typed in front of the separator: the name is `wja`, never `wja b`.
    const mounted = await mountInView(
      twoParaUsj(["x ", { type: "char", marker: "wj", content: ["b"] }, " y"]),
      oracleView("unformatted"),
    );
    await act(async () => {
      mounted.lexical.update(() => {
        const content = $textContaining("b");
        content.setTextContent(`a${NBSP}b`);
        content.select(1, 1);
      });
      await Promise.resolve();
    });
    const expected = ["x ", { type: "char", marker: "wja", content: ["b"] }, " y"];
    const pending = mounted.ref.current?.getUsj();
    expect(paraOf(pending, "p").content).toEqual(expected);

    await depart(mounted);
    const settled = mounted.ref.current?.getUsj();
    expect(paraOf(settled, "p").content).toEqual(expected);
    expect(settled).toEqual(pending);
    expectScreenIsSaved(mounted, "p");
  });
});

describe("a `|…` after the separator that is not an attribute list", () => {
  // `\w |lemma="g"grace\w*`: the `|…` tail before the closer is not a whole attribute list, so
  // Paratext 9 keeps all of it as the span's text — none of it is attributes, and none is dropped.
  const expected = [
    "In the ",
    { type: "char", marker: "w", content: ['|lemma="g"grace'] },
    " of God",
  ];

  it("survives a load and a save unchanged", async () => {
    const mounted = await mountStandardViewEditor(twoParaUsj(expected));
    expect(paraOf(mounted.ref.current?.getUsj(), "p").content).toEqual(expected);
    expectScreenIsSaved(mounted, "p");
  });

  it.each([
    ["typed after the separator", 1, 1],
    ["typed over the separator", 0, 1],
  ])("stays the span's text when %s", async (_name, start, end) => {
    const mounted = await mountStandardViewEditor(wordUsj("w"));
    await selectIn(mounted.lexical, "grace", start, end);
    await typeChars(mounted.lexical, '|lemma="g"');
    const pending = mounted.ref.current?.getUsj();
    expect(paraOf(pending, "p").content).toEqual(expected);
    expectScreenIsSaved(mounted, "p");

    await depart(mounted);
    const settled = mounted.ref.current?.getUsj();
    expect(paraOf(settled, "p").content).toEqual(expected);
    expect(settled).toEqual(pending);
    expectScreenIsSaved(mounted, "p");
  });
});

describe("a span in a table cell, which no settle re-tokenizes", () => {
  const tableUsj: Usj = {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
      { type: "chapter", marker: "c", number: "1" },
      {
        type: "table",
        content: [
          {
            type: "table:row",
            marker: "tr",
            content: [
              {
                type: "table:cell",
                marker: "tc1",
                align: "start",
                content: ["In the ", { type: "char", marker: "w", content: ["grace"] }, " of God"],
              },
            ],
          },
        ],
      },
      { type: "para", marker: "p", content: ["depart here"] },
    ],
  };

  /** The first `char` in `usj`, wherever it is nested. */
  function savedSpan(usj: Usj | undefined): MarkerObject {
    const find = (items: MarkerContent[] | undefined): MarkerObject | undefined => {
      for (const item of items ?? []) {
        if (typeof item === "string") continue;
        if (item.type === "char") return item;
        const found = find(item.content);
        if (found) return found;
      }
      return undefined;
    };
    const span = find(usj?.content);
    if (!span) throw new Error("no saved span");
    return span;
  }

  function expectSpanScreenIsSaved(mounted: Mounted, text: string): void {
    const saved = savedSpan(mounted.ref.current?.getUsj());
    expect(saved.content).toEqual([text]);
    expect(screenBytes(mounted.lexical, $firstSpan)).toBe(usfmOf(saved));
    expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBe(0);
  }

  it("heals a separator typed over, since nothing could settle a new marker name there", async () => {
    const mounted = await mountStandardViewEditor(tableUsj);
    await selectIn(mounted.lexical, "grace", 0, 1);
    await typeChars(mounted.lexical, "x");
    await depart(mounted);
    expectSpanScreenIsSaved(mounted, "xgrace");
  });

  it("heals a deleted separator once the caret departs", async () => {
    const mounted = await mountStandardViewEditor(tableUsj);
    await act(async () => {
      mounted.lexical.update(() => {
        const content = $textContaining("grace");
        content.setTextContent("grace");
        content.select(0, 0);
      });
      await Promise.resolve();
    });
    await depart(mounted);
    expectSpanScreenIsSaved(mounted, "grace");
  });
});

describe("deleting a span's separator", () => {
  it("renames the marker on departure while the caret held the deletion site", async () => {
    const mounted = await mountStandardViewEditor(wordUsj("w"));
    await act(async () => {
      mounted.lexical.update(() => {
        const content = $textContaining("grace");
        content.setTextContent("grace");
        content.select(0, 0);
      });
      await Promise.resolve();
    });
    expect(mounted.lexical.getEditorState().read(() => $firstSpan().getTextContent())).toBe(
      "\\wgrace\\w*",
    );

    await depart(mounted);
    expect(paraOf(mounted.ref.current?.getUsj(), "wgrace").content).toEqual([
      { type: "unmatched", marker: "w*" },
      " of God",
    ]);
  });

  it("heals the spacer before a nested span in place once the caret is elsewhere", async () => {
    const usj = twoParaUsj([
      "In the ",
      {
        type: "char",
        marker: "nd",
        content: [{ type: "char", marker: "wj", content: ["on"] }, "e"],
      },
      " God",
    ]);
    const mounted = await mountStandardViewEditor(usj);
    const loaded = mounted.ref.current?.getUsj();
    await act(async () => {
      mounted.lexical.update(() => {
        const [opener, spacer] = $firstSpan().getChildren();
        if (!$isMarkerNode(opener) || !$isTextNode(spacer) || spacer.getTextContent() !== NBSP)
          throw new Error("expected `\\nd` and its spacer");
        spacer.remove();
        $textContaining("depart here").select(1, 1);
      });
      await Promise.resolve();
    });

    const children = mounted.lexical.getEditorState().read(() =>
      $firstSpan()
        .getChildren()
        .map((child) => child.getTextContent()),
    );
    expect(children.slice(0, 2)).toEqual(["\\nd", NBSP]);
    await depart(mounted);
    expect(mounted.ref.current?.getUsj()).toEqual(loaded);
  });

  it("keeps the gap in front of an annotation mark while the caret is at the mark's start", async () => {
    const usj = twoParaUsj(["In the ", { type: "char", marker: "nd", content: ["LORD"] }, " God"]);
    const mounted = await mountStandardViewEditor(usj);
    await annotate(mounted, {
      start: { jsonPath: contentPath([WORD_PARA_INDEX, 0]), offset: "In ".length },
      end: { jsonPath: contentPath([WORD_PARA_INDEX, 1, 0]), offset: "LO".length },
    });
    const shape = (): string[] =>
      mounted.lexical.getEditorState().read(() =>
        $firstSpan()
          .getChildren()
          .map((child) =>
            $isTypedMarkNode(child) ? `mark(${child.getTextContent()})` : child.getTextContent(),
          ),
      );
    expect(shape()).toEqual(["\\nd", NBSP, "mark(LO)", "RD", "\\nd*"]);

    await act(async () => {
      mounted.lexical.update(() => {
        const [, spacer, mark] = $firstSpan().getChildren();
        if (!$isTypedMarkNode(mark)) throw new Error("expected the mark after the spacer");
        const lo = mark.getFirstChild();
        if (!$isTextNode(lo)) throw new Error("expected text in the mark");
        spacer.remove();
        lo.select(0, 0);
      });
      await Promise.resolve();
      await Promise.resolve();
    });
    expect(shape()).toEqual(["\\nd", "mark(LO)", "RD", "\\nd*"]);
    const pending = mounted.ref.current?.getUsj();

    await depart(mounted);
    const settled = mounted.ref.current?.getUsj();
    expect(paraOf(settled, "ndLORD").content).toEqual([
      { type: "unmatched", marker: "nd*" },
      " God",
    ]);
    expect(settled).toEqual(pending);
    expectScreenIsSaved(mounted, "ndLORD");
  });
});

describe("deleting the separator of a span whose text holds an authored no-break space", () => {
  // Unformatted shows an authored no-break space as the byte itself, so `\w Lord~God\w*` with its
  // separator deleted reads `\wLord⍽God` — the same screen as `\w Lord God\w*` with its separator
  // deleted, and the two settle alike: the name ends at the space, as a new paragraph marker.
  it.each([
    ["an authored no-break space", `Lord${NBSP}God`],
    ["a space", "Lord God"],
  ])("settles as the name the bytes spell (%s)", async (_name, text) => {
    const mounted = await mountInView(
      twoParaUsj(["In the ", { type: "char", marker: "w", content: [text] }, " of old"]),
      oracleView("unformatted"),
    );
    await act(async () => {
      mounted.lexical.update(() => {
        const content = $textContaining("God");
        expect(content.getTextContent().startsWith(NBSP)).toBe(true);
        content.setTextContent(content.getTextContent().slice(1));
        content.select(0, 0);
      });
      await Promise.resolve();
    });
    const pending = mounted.ref.current?.getUsj();

    await depart(mounted);
    const settled = mounted.ref.current?.getUsj();
    expect(paraOf(settled, "wLord").content).toEqual([
      "God",
      { type: "unmatched", marker: "w*" },
      " of old",
    ]);
    expect(settled).toEqual(pending);
  });
});

describe.each(["standard", "unformatted"])(
  "a char opener's separator deleted, then a name byte typed (%s view)",
  (view) => {
    it("settles as the bytes the screen shows, not as a rename beside a missing separator", async () => {
      // `\w grace\w*`: Delete takes the separator, and `x` typed at the caret lands at the glyph's
      // end. The screen shows `\wxgrace\w*` — one marker name running into the content — so the
      // file gets that, not `\wx grace\wx*`.
      const usj = twoParaUsj([
        "In the ",
        { type: "char", marker: "w", content: ["grace"] },
        " of God",
      ]);
      const mounted = await mountInView(usj, oracleView(view));
      await act(async () => {
        mounted.lexical.update(() => {
          const content = $textContaining("grace");
          content.setTextContent("grace");
          content.select(0, 0);
        });
        await Promise.resolve();
      });
      await act(async () => {
        mounted.lexical.update(() => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) selection.insertText("x");
        });
        await Promise.resolve();
        await Promise.resolve();
      });
      const pending = mounted.ref.current?.getUsj()?.content[2];
      await act(async () => {
        mounted.lexical.dispatchCommand(CLICK_COMMAND, new MouseEvent("click"));
        mounted.lexical.update(() => $textContaining("depart here").select(1, 1));
        await Promise.resolve();
        await Promise.resolve();
      });
      act(() => mounted.ref.current?.commitPendingMarkerEdits());
      const settled = mounted.ref.current?.getUsj()?.content[2];
      expect(settled).toEqual(usfmFragmentToUsjContent("\\p In the \\wxgrace\\w* of God")[0]);
      expect(pending).toEqual(settled);
      mounted.unmount();
    });
  },
);
