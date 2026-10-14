/**
 * An annotation changes no byte and moves no caret, so it changes nothing about which marker edits
 * the engine holds pending: an edit that stays pending in a document with no annotation stays
 * pending in the same document with one, and settles on the same caret move.
 *
 * Each row runs the same steps twice, plain and annotated, and requires the same outcome.
 */
import {
  $byteLoc,
  mountInView,
  MountedInView,
} from "../annotationLocations/annotationLocations.test-helpers";
import { $addCommentAnnotation } from "../../marginal/comments/commentAnnotations.utils";
import { $textContaining, twoParaUsj, typeOver } from "../positions/positions.test-helpers";
import { settleByBlurAndCommit } from "./displayAnnotations.test-helpers";
import { pendingOracleView } from "./pendingSettledOracle.test-helpers";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  LexicalNode,
} from "lexical";
import {
  $isCharNode,
  $isMarkerNode,
  $isTypedMarkNode,
  $logicalText,
  $pieces,
  $setLogicalText,
  getPendedDisplayOwners,
} from "shared";
import { AnnotationRange } from "shared-react";

const view = pendingOracleView("standard");

/** `\c 1` with a `\cp A\cp*` span beside it, then a paragraph to depart to. */
const cpSpanUsj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
    { type: "chapter", marker: "c", number: "1" },
    { type: "char", marker: "cp", content: ["A"] },
    { type: "para", marker: "p", content: ["depart here"] },
  ],
};

function $find<T extends LexicalNode>(guard: (node: LexicalNode) => node is T): T {
  let found: T | undefined;
  const walk = (node: LexicalNode): void => {
    if (found) return;
    if (guard(node)) found = node;
    else if ($isElementNode(node)) node.getChildren().forEach(walk);
  };
  walk($getRoot());
  if (!found) throw new Error("not found");
  return found;
}

/** The range over bytes `[start, end)` of the text node `$node` finds, as a host spells it. */
function rangeOver(
  mounted: MountedInView,
  $node: () => LexicalNode,
  start: number,
  end: number,
): AnnotationRange {
  return mounted.lexical.getEditorState().read(() => ({
    start: $byteLoc($node(), start, false, view),
    end: $byteLoc($node(), end - 1, true, view),
  }));
}

async function annotate(mounted: MountedInView, range: AnnotationRange, id: string): Promise<void> {
  await act(async () => {
    mounted.ref.current?.setAnnotation(range, "test", id);
    await Promise.resolve();
  });
}

/** Run `edit` as one user commit and let the engine's deferred work drain. */
async function commit(mounted: MountedInView, edit: () => void): Promise<void> {
  await act(async () => {
    mounted.lexical.update(edit);
    await Promise.resolve();
    await Promise.resolve();
  });
}

function isPending(mounted: MountedInView): boolean {
  return (getPendedDisplayOwners(mounted.lexical)?.size ?? 0) > 0;
}

function documentText(mounted: MountedInView): string {
  return mounted.lexical.getEditorState().read(() => $getRoot().getTextContent());
}

describe("an annotation and the marker edits the engine holds pending", () => {
  for (const annotated of [false, true])
    it(`keeps a name typed in front of a span's glyph pending (${annotated ? "annotated" : "plain"})`, async () => {
      const mounted = await mountInView(cpSpanUsj, view);
      const $glyph = () => $find($isMarkerNode);
      if (annotated) {
        // The glyph's `\` alone, so the glyph is cut into pieces, and a crossing from its `p`
        // into the span's content.
        await annotate(mounted, rangeOver(mounted, $glyph, 0, 1), "backslash");
        await annotate(
          mounted,
          mounted.lexical.getEditorState().read(() => {
            const content = $textContaining("A");
            const offset = content.getTextContent().indexOf("A");
            return {
              start: $byteLoc($glyph(), 2, false, view),
              end: $byteLoc(content, offset, true, view),
            };
          }),
          "crossing",
        );
        mounted.lexical.getEditorState().read(() => expect($pieces($glyph()).length).toBe(3));
        expect(isPending(mounted)).toBe(false);
      }
      const before = documentText(mounted);
      await commit(mounted, () => {
        const glyph = $glyph();
        $setLogicalText(glyph, `x${$logicalText(glyph)}`).select(1, 1);
      });
      expect(isPending(mounted)).toBe(true);
      // Still the span as loaded, with the typed byte in its glyph: nothing settled.
      mounted.lexical.getEditorState().read(() => {
        expect($logicalText($find($isMarkerNode))).toBe("x\\cp");
        expect($isCharNode($getRoot().getChildren()[2])).toBe(true);
      });
      expect(documentText(mounted)).not.toBe(before);
      mounted.unmount();
    });

  for (const annotated of [false, true])
    it(`keeps a backslash typed into content pending while the caret stays beside it (${annotated ? "annotated" : "plain"})`, async () => {
      const mounted = await mountInView(twoParaUsj(["In the beginning"]), view);
      if (annotated)
        await annotate(
          mounted,
          rangeOver(mounted, () => $textContaining("In the"), 0, 1),
          "first-letter",
        );
      // Type `\` right after the `I` — inside the mark, when there is one.
      await commit(mounted, () => {
        const text = $textContaining("I");
        const typed = `I\\${text.getTextContent().slice(1)}`;
        if (annotated) {
          expect($isTypedMarkNode(text.getParent())).toBe(true);
          text.setTextContent("I\\").select(2, 2);
        } else text.setTextContent(typed).select(2, 2);
      });
      expect(isPending(mounted)).toBe(true);
      // The same caret position, read as the start of the text after the mark: Lexical resolves a
      // caret at a mark's end there.
      await commit(mounted, () => {
        const after = $textContaining("n the");
        const offset = after.getTextContent().indexOf("n the");
        after.select(offset, offset);
      });
      expect(isPending(mounted)).toBe(true);
      expect(documentText(mounted)).toContain("I\\n the beginning");
      mounted.unmount();
    });

  it("settles a `\\ca` span's typed value as the plain document does, its glyph cut or not", async () => {
    const caSpanUsj: Usj = {
      ...cpSpanUsj,
      content: cpSpanUsj.content.map((item) =>
        typeof item === "object" && item.type === "char"
          ? { ...item, marker: "ca", content: ["3"] }
          : item,
      ),
    };
    const pendingUsj: string[] = [];
    for (const annotated of [false, true]) {
      const mounted = await mountInView(caSpanUsj, view);
      if (annotated) {
        await annotate(
          mounted,
          rangeOver(mounted, () => $find($isMarkerNode), 0, 1),
          "backslash",
        );
        mounted.lexical
          .getEditorState()
          .read(() => expect($pieces($find($isMarkerNode)).length).toBe(2));
        // Cutting the glyph is no edit of it.
        expect(isPending(mounted)).toBe(false);
      }
      await commit(mounted, () => {
        const value = $textContaining("3");
        const text = `${value.getTextContent()}x`;
        value.setTextContent(text).select(text.length, text.length);
      });
      expect(isPending(mounted)).toBe(true);
      pendingUsj.push(JSON.stringify(mounted.ref.current?.getUsj()));
      mounted.unmount();
    }
    expect(pendingUsj[1]).toBe(pendingUsj[0]);
    expect(pendingUsj[0]).toContain('"altnumber":"3x"');
  });

  it("keeps a typed literal pending when a comment is set over it, and settles it as it read", async () => {
    const mounted = await mountInView(twoParaUsj(["plain body"]), view);
    await typeOver(mounted.lexical, "plain body", "plain \\q1 body", 7);
    expect(isPending(mounted)).toBe(true);
    // The comment panel's own wrap, over `pl`, with the caret left where it was.
    await commit(mounted, () => {
      const literal = $textContaining("plain");
      const range = $createRangeSelection();
      range.anchor.set(literal.getKey(), 0, "text");
      range.focus.set(literal.getKey(), 2, "text");
      $addCommentAnnotation(range, "c1");
    });
    expect(isPending(mounted)).toBe(true);
    const pending = JSON.stringify(mounted.ref.current?.getUsj());
    settleByBlurAndCommit(mounted);
    expect(isPending(mounted)).toBe(false);
    expect(JSON.stringify(mounted.ref.current?.getUsj())).toBe(pending);
    mounted.unmount();
  });

  it("still pends a keystroke that one commit batches with an annotation", async () => {
    const mounted = await mountInView(twoParaUsj(["plain body"]), view);
    const range = rangeOver(mounted, () => $textContaining("plain body"), 0, 2);
    await commit(mounted, () => {
      $textContaining("plain body").select(6, 6);
      const selection = $getSelection();
      if ($isRangeSelection(selection)) selection.insertText("\\");
      // Lexical runs an update requested inside another in the same commit, with both tag sets.
      mounted.ref.current?.setAnnotation(range, "test", "batched");
    });
    expect(mounted.lexical.getEditorState().read(() => $getRoot().getTextContent())).toContain(
      "plain \\body",
    );
    expect(isPending(mounted)).toBe(true);
    mounted.unmount();
  });
});
