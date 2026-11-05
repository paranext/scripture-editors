/**
 * A char span Lexical tears in two to put nodes inside it: the first half keeps the opener and the
 * attributes, the second half the rest of the content, the attribute run and the closer. The
 * settle pairs the halves back into one span, and every rule that reads the pairing must find the
 * same two halves, or the screen shows bytes the file does not get.
 */
import { mountInView } from "../annotationLocations/annotationLocations.test-helpers";
import { $textContaining, twoParaUsj } from "../positions/positions.test-helpers";
import {
  $screenBytes,
  depart,
  pendingOracleView,
  savedBytes,
  withoutLineBreaks,
} from "./pendingSettledOracle.test-helpers";
import { act } from "@testing-library/react";
import { $createTextNode, $getSelection, $isRangeSelection } from "lexical";
import { $createCharNode, $createMarkerNode, NBSP } from "shared";
import { describe, expect, it } from "vitest";

describe("a whole span of the same marker put between a torn span's halves", () => {
  it("settles the halves into one span that spells its attribute once", async () => {
    const mounted = await mountInView(
      twoParaUsj(["a ", { type: "char", marker: "w", lemma: "g", content: ["grace"] }, " b"]),
      pendingOracleView("standard"),
    );
    await act(async () => {
      mounted.lexical.update(() => {
        $textContaining(`${NBSP}grace`).select(3, 3);
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
        selection.insertNodes([
          $createCharNode("w").append(
            $createMarkerNode("w"),
            $createTextNode(`${NBSP}z`),
            $createMarkerNode("w", "closing"),
          ),
        ]);
      });
      await Promise.resolve();
    });

    await depart(mounted);
    const saved = savedBytes(mounted.ref.current?.getUsj());
    const screen = mounted.lexical.getEditorState().read(() => $screenBytes());

    expect(saved.match(/\|g/g), saved).toHaveLength(1);
    expect(withoutLineBreaks(screen ?? "")).toBe(withoutLineBreaks(saved));
    mounted.unmount();
  });
});
