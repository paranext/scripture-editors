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
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { $textContaining, contentPath, twoParaUsj } from "../positions/positions.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $getSelection,
  $isRangeSelection,
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
  getMarker,
  NBSP,
  usfmFragmentToUsjContent,
} from "shared";
import { AnnotationRange } from "shared-react";
import { describe, expect, it } from "vitest";

type Mounted = Awaited<ReturnType<typeof mountStandardViewEditor>>;

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
async function depart(mounted: Mounted): Promise<void> {
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

/** The paragraph as the tokenizer reads the live tree's bytes for it (NBSP separators are the
 * file's spaces) — what the screen says the paragraph is. */
function screenPara(lexical: LexicalEditor, marker: string): MarkerContent | undefined {
  const bytes = lexical.getEditorState().read(() => {
    const para = $getRoot()
      .getChildren()
      .find((node) => $isParaNode(node) && node.getMarker() === marker);
    if (!para) throw new Error(`no live ${marker} paragraph`);
    return para.getTextContent().replaceAll(NBSP, " ");
  });
  return usfmFragmentToUsjContent(bytes, { getMarker })[0];
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

function $firstSpan(): CharNode {
  const span = $getRoot()
    .getChildren()
    .filter($isParaNode)
    .flatMap((para) => para.getChildren())
    .find($isCharNode);
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
      expect(screenPara(mounted.lexical, renamed)).toEqual(paraOf(settled, renamed));
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
    expect(screenPara(mounted.lexical, "p")).toEqual(paraOf(settled, "p"));
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
    expect(screenPara(mounted.lexical, "wxgrace")).toEqual(paraOf(settled, "wxgrace"));
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
    expect(screenPara(mounted.lexical, "wxgrace")).toEqual(paraOf(settled, "wxgrace"));
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
    expect(screenPara(mounted.lexical, "ndLORD")).toEqual(paraOf(settled, "ndLORD"));
  });
});
