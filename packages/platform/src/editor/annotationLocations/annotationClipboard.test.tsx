/**
 * Clipboard and range gestures in an annotated document, in the full editor, with the oracle's
 * whole annotation set (`$planAnnotations`) and without it: a cut, a copy pasted back, a plain-text
 * paste or a range edit made at a caret the annotations change the tree at must leave the same
 * document, screen and caret reports as in the document no annotation holds, at each spelling of
 * the caret. The transparency oracle runs these gestures at every such caret; these are the shapes
 * it first found apart.
 */
import {
  $globalSite,
  $planAnnotations,
  $spellings,
  observables,
} from "./annotationTransparency.oracle.test-helpers";
import { $byteLoc, mountInView, ORACLE_TYPE } from "./annotationLocations.test-helpers";
import { copyEvent, pasteEvent } from "../markerEdit/markerEdit.test-helpers";
import { $textContaining } from "../positions/positions.test-helpers";
import {
  $editableTexts,
  COPY_PASTE_KEYSTROKES,
  CUT_KEYSTROKES,
  OracleKeystroke,
  oracleRows,
  pendingOracleView,
  PLAIN_PASTE_KEYSTROKES,
  runKeystrokeCase,
  TRANSPARENCY_RANGE_KEYSTROKES,
} from "../markerEdit/pendingSettledOracle.test-helpers";
import { drainNativeSelectionChange } from "../editor-test.utils";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $isElementNode,
  $setSelection,
  COPY_COMMAND,
  NodeKey,
  PASTE_COMMAND,
  TextNode,
} from "lexical";
import {
  $isCharNode,
  $isMarkerNode,
  $isTypedMarkNode,
  $lastPiece,
  $logicalText,
  $pieces,
  $wrapSelectionInTypedMarkNode,
  COMMENT_MARK_TYPE,
  MarkerNode,
  NBSP,
} from "shared";
import { $getRangeFromUsjSelection } from "shared-react";
import { describe, expect, it, vi } from "vitest";

/** The closing glyph of the char span whose content `text` is. */
function $closerOf(text: TextNode): MarkerNode {
  const closer = text.getParentOrThrow().getLastChild();
  if (!$isMarkerNode(closer)) throw new Error("no closing glyph");
  return $pieces(closer)[0];
}

/**
 * Run `keystroke` at byte `at` of the editable text spelled `text` in the `row` document of
 * `view`: in the document as loaded (`spelling` undefined), or with the oracle's annotation set
 * applied, at the caret's `spelling`-th spelling there. What the run reads, and the `text/plain`
 * its gesture wrote to the clipboard.
 */
async function gestureCase(
  view: string,
  row: string,
  text: string,
  at: number,
  keystroke: OracleKeystroke,
  spelling?: number,
): Promise<{ [name: string]: unknown }> {
  const usj = oracleRows(view).find(([name]) => name.startsWith(`${row} (`))?.[1];
  if (!usj) throw new Error(`no row ${row}`);
  const viewOptions = pendingOracleView(view);
  const mounted = await mountInView(usj, viewOptions);
  const site = mounted.lexical.getEditorState().read(() => {
    const index = $editableTexts().findIndex((node) => $logicalText(node) === text);
    if (index < 0) throw new Error(`no text ${JSON.stringify(text)}`);
    return $globalSite(index, at, false);
  });
  if (spelling !== undefined) {
    const plan = mounted.lexical.getEditorState().read(() => $planAnnotations(viewOptions));
    for (const { id, range } of plan)
      await act(async () => {
        mounted.ref.current?.setAnnotation(range, ORACLE_TYPE, id);
        await Promise.resolve();
      });
    await act(async () => {
      await drainNativeSelectionChange();
    });
  }
  const run = await runKeystrokeCase(
    mounted,
    view,
    () => $spellings(site)[spelling ?? 0],
    keystroke,
  );
  mounted.unmount();
  if (!run) return { applied: false };
  return {
    ...observables(run),
    clipboard: run.clipboard?.["text/plain"],
    clipboardNodes: nodesShape(run.clipboard?.["application/x-lexical-editor"]),
  };
}

/** A serialized clipboard node: its text, or its children. */
interface ClipboardNode {
  type: string;
  text?: string;
  children?: ClipboardNode[];
}

/** The nodes of a clipboard's `application/x-lexical-editor` flavor as their elements and text:
 * an element as `type(…)`, a text by its text, however a copy split the text into nodes. */
function nodesShape(lexical: string | undefined): string | undefined {
  if (lexical === undefined) return undefined;
  const parsed: { nodes: ClipboardNode[] } = JSON.parse(lexical);
  const shape = (nodes: ClipboardNode[]): string =>
    nodes
      .map((node) => (node.children ? `${node.type}(${shape(node.children)})` : (node.text ?? "")))
      .join("");
  return shape(parsed.nodes);
}

/** The keystroke of `keystrokes` called `name`. */
function named<T extends OracleKeystroke>(keystrokes: readonly T[], name: string): T {
  const found = keystrokes.find((keystroke) => keystroke.name === name);
  if (!found) throw new Error(`no keystroke ${name}`);
  return found;
}

describe("a copy pasted where an annotation mark starts", () => {
  it.each([
    // A copy holding a span's opener, pasted inside the span in front of a mark: Lexical splits
    // the span there, and its second half still holds the span's closer.
    [
      "standard",
      "closed char span",
      `${NBSP}grace`,
      1,
      "copy three bytes either side of the caret, then paste them at the caret",
    ],
    // A copy holding a whole span of the same marker, pasted in front of a mark inside the span:
    // the whole span lands between the two halves.
    [
      "standard",
      "closed char span",
      `${NBSP}grace`,
      5,
      "copy the whole block, then paste it at the caret",
    ],
  ] as const)(
    "%s view, %s: %j at %i, %s",
    async (view, row, text, at, name) => {
      const keystroke = named(COPY_PASTE_KEYSTROKES, name);
      const plain = await gestureCase(view, row, text, at, keystroke);
      expect(plain.applied, "the gesture applies in the document as loaded").not.toBe(false);
      for (const spelling of [0, 1])
        expect(
          await gestureCase(view, row, text, at, keystroke, spelling),
          `spelling ${spelling}`,
        ).toEqual(plain);
    },
    120_000,
  );
});

describe("a range with an end at a mark's edge beside a span", () => {
  it.each([
    // The range's start at the end of a mark, before a span: with no mark it starts inside the
    // span, and the cut takes the opener's byte only.
    ["standard", "closed char span", "In the ", 7, "cut the byte after the caret"],
    ["standard", "closed char span", "In the ", 7, 'Shift+Right, then type "x"'],
    ["standard", "closed char span", "In the ", 7, "Shift+Right, then Delete"],
    // The range's end at the start of a mark, after a paragraph marker's separator: with no mark
    // it ends in the separator.
    ["standard", "closed char span", "In the ", 0, 'Shift+Left, then type "x"'],
    // A range from the end of a paragraph into the next one's marker, its start at a mark's end:
    // with no mark the marker's remaining byte is pending under the caret, and becomes text.
    ["standard", "char span with an attribute", " b", 2, "Shift+Right, then Delete"],
    ["standard", "char span with an attribute", " b", 2, "Shift+Right, then Backspace"],
    // The range's end at the start of a mark, after a span: with no mark it ends inside the span.
    ["standard", "closed char span", " of God", 0, "cut the byte before the caret"],
  ] as const)(
    "%s view, %s: %j at %i, %s",
    async (view, row, text, at, name) => {
      const keystroke = named([...CUT_KEYSTROKES, ...TRANSPARENCY_RANGE_KEYSTROKES], name);
      const plain = await gestureCase(view, row, text, at, keystroke);
      expect(plain.applied, "the gesture applies in the document as loaded").not.toBe(false);
      expect(await gestureCase(view, row, text, at, keystroke, 0)).toEqual(plain);
    },
    120_000,
  );
});

describe("a line break pasted in a cut glyph with no block around it", () => {
  it("splits the glyph's text as in the glyph no annotation cuts", async () => {
    const view = "standard";
    const row = "\\ca span beside its chapter";
    const keystroke = named(
      PLAIN_PASTE_KEYSTROKES,
      'paste "p", a line break and "q" as plain text',
    );
    const plain = await gestureCase(view, row, "\\ca*", 2, keystroke);
    expect(plain.applied, "the gesture applies in the document as loaded").not.toBe(false);
    expect(await gestureCase(view, row, "\\ca*", 2, keystroke, 0)).toEqual(plain);
  }, 120_000);
});

describe("a line break pasted between the pieces of a glyph", () => {
  it.each([
    // Enter in a glyph splits its text, as in any text: the bytes after the caret are content of
    // the next paragraph, however an annotation cut the glyph.
    ["standard", "closed char span", "\\w*", 2],
    ["standard", "closed char span", "\\w*", 1],
    ["standard", "closed char span", "\\w", 1],
    ["standard", "closed char span", "\\p", 1],
  ] as const)(
    "%s view, %s: %j at %i",
    async (view, row, text, at) => {
      const keystroke = named(
        PLAIN_PASTE_KEYSTROKES,
        'paste "p", a line break and "q" as plain text',
      );
      const plain = await gestureCase(view, row, text, at, keystroke);
      expect(plain.applied, "the gesture applies in the document as loaded").not.toBe(false);
      for (const spelling of [0, 1])
        expect(
          await gestureCase(view, row, text, at, keystroke, spelling),
          `spelling ${spelling}`,
        ).toEqual(plain);
    },
    120_000,
  );
});

describe("a pasted copy of annotated bytes", () => {
  /** The comment milestones of `id` in `usj`, `zmsc-s` and `zmsc-e`, in document order. */
  function commentMilestones(usj: Usj | undefined, id: string): string[] {
    const out: string[] = [];
    const visit = (content: MarkerContent[] | undefined): void => {
      for (const item of content ?? []) {
        if (typeof item === "string") continue;
        const ids: { sid?: unknown; eid?: unknown } = item;
        if (item.marker?.startsWith("zmsc-") && (ids.sid === id || ids.eid === id))
          out.push(item.marker);
        visit(item.content);
      }
    };
    visit(usj?.content);
    return out;
  }

  it.each([
    ["the annotated bytes", true],
    ["the whole paragraph", false],
  ] as const)(
    "is not the annotated place (copying %s)",
    async (_, range) => {
      const view = "standard";
      const usj = oracleRows(view).find(([name]) => name.startsWith("closed char span ("))?.[1];
      if (!usj) throw new Error("no row");
      const viewOptions = pendingOracleView(view);
      const mounted = await mountInView(usj, viewOptions);
      // `grace` and the closer after it: a mark over the content, a hold on the glyph's bytes.
      const annotated = mounted.lexical.getEditorState().read(() => {
        const text = $editableTexts().find((node) => $logicalText(node) === `${NBSP}grace`);
        if (!text) throw new Error("no span content");
        const closer = $closerOf(text);
        return {
          start: $byteLoc(text, 1, false, viewOptions),
          end: $byteLoc(closer, closer.getTextContentSize() - 1, true, viewOptions),
        };
      });
      const onRemove = vi.fn();
      await act(async () => {
        mounted.ref.current?.setAnnotation(annotated, ORACLE_TYPE, "a", undefined, onRemove);
        mounted.lexical.update(() => {
          const selection = $getRangeFromUsjSelection(annotated, viewOptions);
          if (!selection) throw new Error("the range did not resolve");
          $wrapSelectionInTypedMarkNode(selection, COMMENT_MARK_TYPE, "c1");
        });
        await Promise.resolve();
        await drainNativeSelectionChange();
      });
      const held = () =>
        (mounted.ref.current?.getAnnotationRanges(ORACLE_TYPE, "a") ?? [])
          .map((each) => each.toString())
          .join("|");
      const heldBefore = held();
      expect(heldBefore).toBe(`grace|\\w*`);
      expect(commentMilestones(mounted.ref.current?.getUsj(), "c1")).toEqual(["zmsc-s", "zmsc-e"]);

      // Copy the bytes, or the paragraph, and paste the copy into the next paragraph.
      const { event, getData } = copyEvent({ native: true });
      await act(async () => {
        mounted.lexical.update(() => {
          const para = $getRoot().getChildren()[2];
          if (!$isElementNode(para)) throw new Error("no paragraph");
          if (!range) {
            para.select(0, para.getChildrenSize());
            return;
          }
          // From the mark's first text, the `g`, through the closer's last piece.
          const char = para.getChildren().find($isCharNode);
          const first = char?.getAllTextNodes().find((node) => $isTypedMarkNode(node.getParent()));
          const last = char?.getLastChild();
          if (!first || !$isMarkerNode(last)) throw new Error("no annotated span");
          const closer = $lastPiece(last);
          const selection = $createRangeSelection();
          selection.anchor.set(first.getKey(), 0, "text");
          selection.focus.set(closer.getKey(), closer.getTextContentSize(), "text");
          $setSelection(selection);
        });
        await drainNativeSelectionChange();
      });
      await act(async () => {
        mounted.lexical.dispatchCommand(COPY_COMMAND, event);
        await drainNativeSelectionChange();
      });
      const payload = Object.fromEntries(
        ["application/x-lexical-editor", "text/html", "text/plain"]
          .map((flavor) => [flavor, getData(flavor)])
          .filter(([, data]) => data !== ""),
      );
      expect(Object.keys(payload)).toContain("application/x-lexical-editor");
      let target!: NodeKey;
      await act(async () => {
        mounted.lexical.update(() => {
          const depart = $textContaining("depart here");
          target = depart.getParentOrThrow().getKey();
          depart.select(3, 3);
        });
        await drainNativeSelectionChange();
      });
      await act(async () => {
        mounted.lexical.dispatchCommand(PASTE_COMMAND, pasteEvent(payload).event);
        await Promise.resolve();
        await drainNativeSelectionChange();
      });

      expect(held(), "the annotation holds only its own bytes").toBe(heldBefore);
      expect(onRemove).not.toHaveBeenCalled();
      const pasted = mounted.lexical.getElementByKey(target);
      expect(pasted?.textContent, "the copy was pasted").toContain("grace");
      expect(
        pasted?.querySelectorAll(".annotationId-a, .annotationId-c1, [data-annotation-keys]")
          .length,
        "nothing pasted is painted",
      ).toBe(0);
      expect(commentMilestones(mounted.ref.current?.getUsj(), "c1")).toEqual(["zmsc-s", "zmsc-e"]);
      mounted.unmount();
    },
    120_000,
  );
});
