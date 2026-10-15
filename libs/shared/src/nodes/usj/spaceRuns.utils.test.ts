import { NBSP } from "./node-constants.js";
import { collapsedSpaceRunRanges, collapseSpaceRuns, endsInSpaceRun } from "./spaceRuns.utils.js";

describe("collapsedSpaceRunRanges", () => {
  it("drops every character of a run after its first", () => {
    expect(collapsedSpaceRunRanges(`a${NBSP}${NBSP}${NBSP}b`)).toEqual([[2, 4]]);
  });

  it("treats plain spaces and display NBSPs as one run", () => {
    expect(collapsedSpaceRunRanges(`a ${NBSP} b`)).toEqual([[2, 4]]);
  });

  it("finds no run in single spaces", () => {
    expect(collapsedSpaceRunRanges("a b c")).toEqual([]);
  });

  it("does not run through a displayed data NBSP", () => {
    expect(collapsedSpaceRunRanges(`a${NBSP}~${NBSP}b`)).toEqual([]);
  });

  it("reports several runs in ascending order, at either end of the text", () => {
    expect(collapsedSpaceRunRanges(`${NBSP}${NBSP}a${NBSP}${NBSP}${NBSP}b  `)).toEqual([
      [1, 2],
      [4, 6],
      [8, 9],
    ]);
  });
});

describe("collapseSpaceRuns", () => {
  it("keeps each run's first character", () => {
    expect(collapseSpaceRuns(`a${NBSP}${NBSP}b  c`)).toBe(`a${NBSP}b c`);
  });

  it("leaves text without a run untouched", () => {
    expect(collapseSpaceRuns(`a b~c${NBSP}d`)).toBe(`a b~c${NBSP}d`);
  });

  it("removes exactly the characters collapsedSpaceRunRanges reports", () => {
    const samples = [
      `a${NBSP}${NBSP}${NBSP}b`,
      `${NBSP}${NBSP}lead`,
      `tail ${NBSP}`,
      `a ${NBSP} b${NBSP}${NBSP}c`,
      `a${NBSP}~${NBSP}${NBSP}b`,
      "plain text",
    ];
    for (const text of samples) {
      const kept = [...text].filter(
        (_, index) =>
          !collapsedSpaceRunRanges(text).some(([start, end]) => index >= start && index < end),
      );
      expect(collapseSpaceRuns(text)).toBe(kept.join(""));
    }
  });
});

describe("a run that continues from the text before", () => {
  it("drops the leading spaces a run continued from the text before brings", () => {
    expect(collapsedSpaceRunRanges(`${NBSP} b`, true)).toEqual([[0, 2]]);
    expect(collapsedSpaceRunRanges(` b${NBSP}${NBSP}c`, true)).toEqual([
      [0, 1],
      [3, 4],
    ]);
    expect(collapsedSpaceRunRanges("b c", true)).toEqual([]);
  });

  it("collapses a run cut in two exactly as the uncut run", () => {
    for (const [before, after] of [
      [`a${NBSP}`, `${NBSP}b`],
      ["a ", " b"],
      [`a${NBSP}${NBSP}`, ` ${NBSP} b`],
      ["a~", " b"],
      ["a", " b"],
    ]) {
      const kept = (text: string, continuesRun: boolean) =>
        [...text]
          .filter(
            (_, index) =>
              !collapsedSpaceRunRanges(text, continuesRun).some(
                ([start, end]) => index >= start && index < end,
              ),
          )
          .join("");
      const first = kept(before, false);
      expect(first + kept(after, endsInSpaceRun(first))).toBe(collapseSpaceRuns(before + after));
    }
  });
});
