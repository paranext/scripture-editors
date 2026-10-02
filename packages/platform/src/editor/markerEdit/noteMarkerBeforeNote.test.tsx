/**
 * A paragraph's `\p` retyped as a note marker, in front of a note the paragraph rebuild keeps as a
 * preserved node: `\x a\f + \ft note text\f* b`. ParatextData reads those bytes as an `\x` note
 * whose caller is `a`, closed by the `\f` that follows it, beside that footnote. The settle must
 * read them the same way, so the screen shows what the file gets and the pending document is the
 * settled one.
 */
import { mountInView, oracleView } from "../annotationLocations/annotationLocations.test-helpers";
import { twoParaUsj } from "../positions/positions.test-helpers";
import { $settledLocationFromLivePoint } from "../positions/settledPositions.utils";
import { $prepareSettleScopes } from "../positions/settledScopes.utils";
import {
  $screenBytes,
  depart,
  positionContext,
  savedBytes,
  withoutLineBreaks,
} from "./pendingSettledOracle.test-helpers";
import { act } from "@testing-library/react";
import { $getRoot, $getSelection, $isElementNode, $isRangeSelection, TextNode } from "lexical";
import { $isMarkerNode } from "shared";
import { describe, expect, it } from "vitest";

const noteUsj = twoParaUsj([
  "a",
  {
    type: "note",
    marker: "f",
    caller: "+",
    content: [{ type: "char", marker: "ft", content: ["note text"] }],
  },
  " b",
]);

/** The paragraph's `\\p` retyped `\\x`: the `p` deleted, then `x` typed where it stood. */
async function retypeParaMarker(mounted: Awaited<ReturnType<typeof mountInView>>): Promise<void> {
  await act(async () => {
    mounted.lexical.update(() => {
      const glyph = $paraMarkerGlyph();
      const text = glyph.getTextContent();
      expect(text.slice(0, 2)).toBe("\\p");
      glyph.setTextContent(text.slice(0, 1) + text.slice(2));
      glyph.select(1, 1);
    });
    await Promise.resolve();
  });
  await act(async () => {
    mounted.lexical.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) selection.insertText("x");
    });
    await Promise.resolve();
  });
}

/** The edited paragraph's opening marker glyph. */
function $paraMarkerGlyph(): TextNode {
  const para = $getRoot().getChildren()[2];
  const first = $isElementNode(para) ? para.getFirstDescendant() : undefined;
  if (!$isMarkerNode(first)) throw new Error("expected the paragraph's marker glyph");
  return first;
}

describe.each(["standard+expandedNotes", "unformatted"])(
  "a paragraph marker retyped as a note marker in front of a note (%s view)",
  (view) => {
    it("the p deleted, then x typed: the screen shows what the file gets", async () => {
      const mounted = await mountInView(noteUsj, oracleView(view));
      await retypeParaMarker(mounted);
      const pending = mounted.ref.current?.getUsj();

      await depart(mounted);
      const settled = mounted.ref.current?.getUsj();
      const screen = mounted.lexical.getEditorState().read(() => $screenBytes());

      expect(settled?.content[2]).toEqual({
        type: "para",
        marker: "p",
        content: [
          { type: "note", marker: "x", caller: "a", closed: "false" },
          {
            type: "note",
            marker: "f",
            caller: "+",
            content: [{ type: "char", marker: "ft", content: ["note text"] }],
          },
          " b",
        ],
      });
      expect(withoutLineBreaks(screen ?? "")).toBe(withoutLineBreaks(savedBytes(settled)));
      expect(pending).toEqual(settled);
      mounted.unmount();
    });

    // The caller's last byte is the last byte of the `\\x` note, which has no closing marker: the
    // place after it is the place in front of the footnote, not past the footnote.
    it("a caret after the caller reports the place in front of the footnote", async () => {
      const mounted = await mountInView(noteUsj, oracleView(view));
      await retypeParaMarker(mounted);
      const context = positionContext(mounted.lexical, oracleView(view));

      const reported = mounted.lexical.getEditorState().read(() => {
        const caller = $getRoot()
          .getAllTextNodes()
          .find((text) => text.getTextContent() === "a");
        if (!caller) throw new Error("expected the caller text");
        return $settledLocationFromLivePoint($prepareSettleScopes(context), caller, 1);
      });

      expect(reported).toEqual({ jsonPath: "$.content[2].content[1]" });
      mounted.unmount();
    });
  },
);
