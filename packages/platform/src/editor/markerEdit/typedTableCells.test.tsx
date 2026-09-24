/**
 * Typing a table row into a paragraph settles it as ParatextData parses it, with the stylesheet the
 * editor actually classifies markers by. usfm.sty declares every cell marker a Character style, so
 * the settle must build `table:cell`s from character-classified cell markers, not only from the
 * paragraph-classified ones a sheet without table markers produces.
 */
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { twoParaUsj, typeOver } from "../positions/positions.test-helpers";

describe("typed table row settles under the editor's own stylesheet", () => {
  it("builds table:cell nodes for \\tc1 and \\tc2", async () => {
    const { ref, lexical } = await mountStandardViewEditor(twoParaUsj(["In the beginning made"]));
    await typeOver(lexical, "In the beginning made", "In the \\tr \\tc1 a \\tc2 b");

    const settled = ref.current?.getUsj();

    // ParatextData: `\p In the \tr \tc1 a \tc2 b` →
    // {para p ["In the"]}, {table [{table:row tr [{table:cell tc1 start ["a "]},
    // {table:cell tc2 start ["b"]}]}]}. ParatextData also trims the space before `\tr`; the
    // settle keeps it, and this row expects the settle's own spelling there.
    expect(settled?.content.slice(2, 4)).toEqual([
      { type: "para", marker: "p", content: ["In the "] },
      {
        type: "table",
        content: [
          {
            type: "table:row",
            marker: "tr",
            content: [
              { type: "table:cell", marker: "tc1", align: "start", content: ["a "] },
              { type: "table:cell", marker: "tc2", align: "start", content: ["b"] },
            ],
          },
        ],
      },
    ]);
  });
});
