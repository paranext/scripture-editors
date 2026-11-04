/**
 * Positions while the `\id` line has a typed block marker pending. The line's settle ends the line
 * at the marker and starts the new block after it (the book scope), so the settled document has
 * one more top-level item than the live tree until the caret leaves: a position in the text after
 * the line addresses a different content index on each side, and translating it as if nothing were
 * pending would put it in the wrong paragraph.
 */
import { mountInView, oracleView } from "../annotationLocations/annotationLocations.test-helpers";
import { enabledViews } from "../editorViews.test-helpers";
import { positionContext } from "../markerEdit/pendingSettledOracle.test-helpers";
import {
  $livePointFromSettledLocation,
  $settledLocationFromLivePoint,
} from "./settledPositions.utils";
import { $prepareSettleScopes } from "./settledScopes.utils";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, $isTextNode, TextNode } from "lexical";
import { $isBookNode } from "shared";
import { describe, expect, it } from "vitest";

const usj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["Genesis"] },
    { type: "chapter", marker: "c", number: "1" },
    { type: "para", marker: "p", content: ["In the beginning"] },
  ],
};

/** The text "In the beginning". */
function $paragraphText(): TextNode {
  const text = $getRoot()
    .getAllTextNodes()
    .find((node) => node.getTextContent() === "In the beginning");
  if (!text) throw new Error("expected the paragraph's text");
  return text;
}

describe.each(enabledViews(["standard", "unformatted"]))(
  "a block marker typed in the `\\id` line (%s view)",
  (view) => {
    it("carries a position after the line across the paragraph it starts", async () => {
      const mounted = await mountInView(usj, oracleView(view));
      await act(async () => {
        mounted.lexical.update(() => {
          const book = $getRoot().getChildren().find($isBookNode);
          const run = book?.getChildren().find((child): child is TextNode => $isTextNode(child));
          if (!run) throw new Error("expected the line's content");
          run.setTextContent("Gen\\q");
          run.select("Gen\\q".length, "Gen\\q".length);
        });
        await Promise.resolve();
      });
      // Still pending: the line holds the typed marker, and nothing has been split off yet.
      expect(
        mounted.lexical
          .getEditorState()
          .read(() => $getRoot().getChildren().find($isBookNode)?.getTextContent()),
      ).toContain("Gen\\q");
      const settled = mounted.ref.current?.getUsj();
      // The line's settle starts a paragraph after the book, ahead of the chapter.
      expect(settled?.content[1]).toMatchObject({ type: "para", marker: "q" });
      expect(settled?.content[3]).toEqual({
        type: "para",
        marker: "p",
        content: ["In the beginning"],
      });

      const context = positionContext(mounted.lexical, oracleView(view));
      const { reported, resolved } = mounted.lexical.getEditorState().read(() => {
        const prepared = $prepareSettleScopes(context);
        const text = $paragraphText();
        const point = $livePointFromSettledLocation(context, prepared, {
          jsonPath: "$.content[3].content[0]",
          offset: 2,
        });
        return {
          reported: $settledLocationFromLivePoint(prepared, text, 2),
          resolved: point && { key: point.key, offset: point.offset, textKey: text.getKey() },
        };
      });
      expect(reported).toEqual({ jsonPath: "$.content[3].content[0]", offset: 2 });
      expect(resolved?.key).toBe(resolved?.textKey);
      expect(resolved?.offset).toBe(2);
      mounted.unmount();
    });
  },
);
