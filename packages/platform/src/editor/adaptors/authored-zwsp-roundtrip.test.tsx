/**
 * A zero-width space is authored content in Thai, Khmer and Lao, where it marks a line-break
 * opportunity. When the text around one is split — an annotation boundary is the everyday cause —
 * it lands in a text node of its own, holding nothing but that zero-width space: byte for byte the
 * same as a caret guard's transient host. These rows pin that save tells the two apart by the
 * host's identity, so the authored one round-trips unchanged.
 */
import { mountViewEditor, requireViewOptions } from "../settledGetUsj.test-helpers";
import { contentPath, twoParaUsj } from "../positions/positions.test-helpers";
import { act } from "@testing-library/react";
import { $dfs } from "@lexical/utils";
import { $isTypedMarkNode, ZWSP } from "shared";
import { FORMATTED_VIEW_MODE, STANDARD_VIEW_MODE } from "shared-react";

const verseText = `alpha${ZWSP}beta `;
const usj = twoParaUsj([
  { type: "verse", marker: "v", number: "1" },
  verseText,
  { type: "verse", marker: "v", number: "2" },
  "beta",
]);

describe("an authored zero-width space split into a run of its own", () => {
  it.each([FORMATTED_VIEW_MODE, STANDARD_VIEW_MODE])(
    "round-trips through save unchanged in %s view",
    async (mode) => {
      const mounted = await mountViewEditor(usj, requireViewOptions(mode));
      const offset = verseText.indexOf(ZWSP);
      await act(async () => {
        mounted.ref.current?.setAnnotation(
          {
            start: { jsonPath: contentPath([2, 1]), offset },
            end: { jsonPath: contentPath([2, 1]), offset: offset + 1 },
          },
          "test",
          "1",
        );
        await Promise.resolve();
      });

      // Positive control: the annotation really did split the zero-width space into its own run.
      const annotated = mounted.lexical.getEditorState().read(() =>
        $dfs()
          .map(({ node }) => node)
          .filter($isTypedMarkNode)
          .map((mark) => mark.getTextContent()),
      );
      expect(annotated).toEqual([ZWSP]);

      expect(mounted.ref.current?.getUsj()).toEqual(usj);
    },
  );
});
