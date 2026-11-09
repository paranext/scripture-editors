import { describe, expect, it } from "vitest";
import { outlinePathData } from "./verseOutlinePath";

// A Z: verse 2 starts at x=50 on the first line and fills the second.
const Z = [
  { left: 50, right: 110, top: 20, bottom: 40 },
  { left: 10, right: 110, top: 40, bottom: 60 },
];

describe("outlinePathData", () => {
  it("draws nothing for no boxes", () => {
    expect(outlinePathData([], "outward", 4)).toBe("");
  });

  it("rounds all four corners of a single box, clockwise from its top right", () => {
    expect(outlinePathData([{ left: 10, right: 110, top: 20, bottom: 40 }], "ends", 4)).toBe(
      "M106,20Q110,20 110,24L110,36Q110,40 106,40L14,40Q10,40 10,36L10,24Q10,20 14,20Z",
    );
  });

  it("traces a Z as one shape, down its right side and back up its left", () => {
    expect(outlinePathData(Z, "all", 0)).toBe("M110,20L110,60L10,60L10,40L50,40L50,20Z");
  });

  it("rounds only the top and bottom corners in the ends style", () => {
    const d = outlinePathData(Z, "ends", 4);
    expect(d).toContain("L10,40L50,40");
    expect(d.match(/Q/g)).toHaveLength(4);
  });

  it("rounds every outward corner, but not the inward one at the step, in the outward style", () => {
    const d = outlinePathData(Z, "outward", 4);
    expect(d).toContain("Q10,40 14,40");
    expect(d).toContain("L50,40");
    expect(d.match(/Q/g)).toHaveLength(5);
  });

  it("rounds the inward corner too in the all style", () => {
    const d = outlinePathData(Z, "all", 4);
    expect(d).toContain("Q50,40 50,36");
    expect(d.match(/Q/g)).toHaveLength(6);
  });

  it("draws boxes that don't overlap side to side as two shapes", () => {
    const d = outlinePathData(
      [
        { left: 400, right: 480, top: 20, bottom: 40 },
        { left: 100, right: 160, top: 40, bottom: 60 },
      ],
      "all",
      0,
    );
    expect(d).toBe("M480,20L480,40L400,40L400,20ZM160,40L160,60L100,60L100,40Z");
  });

  it("rounds a short side's corners by no more than half its length", () => {
    expect(outlinePathData([{ left: 10, right: 110, top: 20, bottom: 23 }], "ends", 4)).toBe(
      "M108.5,20Q110,20 110,21.5L110,21.5Q110,23 108.5,23L11.5,23Q10,23 10,21.5L10,21.5Q10,20 11.5,20Z",
    );
  });
});
