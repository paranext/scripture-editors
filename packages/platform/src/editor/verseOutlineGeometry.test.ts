import { describe, expect, it } from "vitest";
import {
  computeVerseOutlineSegments,
  groupRectsIntoLines,
  OutlineRect,
  OutlineSegment,
} from "./verseOutlineGeometry";

// A paragraph whose content box runs from x=100 to x=500, with 24px lines from y=50. As in real
// layout, a run of text's box (16px) is shorter than its line, and a verse number's (13px) shorter
// still and offset within it.
const CONTENT = { left: 100, right: 500 };
const LINE_PITCH = 24;

/** The box of a run of text on 0-based line `line`. */
function text(line: number, left: number, right: number): OutlineRect {
  const top = 50 + line * LINE_PITCH + 4;
  return { left, right, top, bottom: top + 16 };
}

/** The box of a verse number starting at `left` on 0-based line `line`. */
function verseNumber(line: number, left: number): OutlineRect {
  const top = 50 + line * LINE_PITCH + 6;
  return { left, right: left + 9, top, bottom: top + 13 };
}

/** Where two consecutive lines' boxes meet: halfway across the gap between their text. */
function between(line: number): number {
  return (text(line - 1, 0, 0).bottom + text(line, 0, 0).top) / 2;
}

const NO_CORNERS = { topLeft: false, topRight: false, bottomRight: false, bottomLeft: false };

function box(rect: OutlineRect, top: boolean, bottom: boolean): OutlineSegment {
  return {
    rect,
    borders: { top, right: true, bottom, left: true },
    corners: { topLeft: top, topRight: top, bottomRight: bottom, bottomLeft: bottom },
  };
}

function edge(left: number, right: number, y: number): OutlineSegment {
  return {
    rect: { left, right, top: y, bottom: y },
    borders: { top: true, right: false, bottom: false, left: false },
    corners: NO_CORNERS,
  };
}

describe("groupRectsIntoLines", () => {
  it("merges the rects on one line, a shorter verse number included", () => {
    expect(
      groupRectsIntoLines([text(0, 130, 200), verseNumber(0, 120), text(0, 200, 260)]),
    ).toEqual([{ left: 120, right: 260, top: 54, bottom: 70 }]);
  });

  it("orders lines top to bottom whatever order the rects come in", () => {
    expect(groupRectsIntoLines([text(1, 100, 200), text(0, 300, 480)])).toEqual([
      text(0, 300, 480),
      text(1, 100, 200),
    ]);
  });

  it("keeps a raised note caller on its line, even when it is listed first", () => {
    const caller = { left: 262, right: 268, top: 51, bottom: 61 };
    expect(groupRectsIntoLines([caller, text(0, 130, 260), text(1, 100, 200)])).toEqual([
      text(0, 130, 268),
      text(1, 100, 200),
    ]);
  });

  it("drops rects without width or height", () => {
    const caretHost = { left: 200, right: 200, top: 54, bottom: 70 };
    const collapsed = { left: 210, right: 240, top: 60, bottom: 60 };
    expect(groupRectsIntoLines([caretHost, collapsed])).toEqual([]);
  });
});

describe("computeVerseOutlineSegments", () => {
  it("draws nothing when the section has no visible text", () => {
    expect(computeVerseOutlineSegments({ rects: [], contentBox: CONTENT })).toEqual([]);
  });

  it("stops a one-line section at the next verse marker, not the paragraph's edge", () => {
    expect(
      computeVerseOutlineSegments({
        rects: [verseNumber(0, 100), text(0, 109, 240)],
        contentBox: CONTENT,
        following: verseNumber(0, 244),
      }),
    ).toEqual([box({ left: 100, right: 240, top: 54, bottom: 70 }, true, true)]);
  });

  it("outlines a sliver between two verse markers in the middle of a line", () => {
    expect(
      computeVerseOutlineSegments({
        rects: [verseNumber(1, 250), text(1, 259, 360)],
        contentBox: CONTENT,
        following: verseNumber(1, 364),
      }),
    ).toEqual([box({ left: 250, right: 360, top: 78, bottom: 94 }, true, true)]);
  });

  it("outlines a paragraph's only verse as one box to the paragraph's end", () => {
    // The last line is ragged, but nothing follows the section on it.
    expect(
      computeVerseOutlineSegments({
        rects: [verseNumber(0, 100), text(0, 109, 488), text(1, 100, 493), text(2, 100, 310)],
        contentBox: CONTENT,
      }),
    ).toEqual([box({ left: 100, right: 500, top: 54, bottom: 118 }, true, true)]);
  });

  it("ends at the line break when the next verse opens the following line", () => {
    expect(
      computeVerseOutlineSegments({
        rects: [verseNumber(0, 100), text(0, 109, 488), text(1, 100, 470)],
        contentBox: CONTENT,
        following: verseNumber(2, 100),
      }),
    ).toEqual([box({ left: 100, right: 500, top: 54, bottom: 94 }, true, true)]);
  });

  it("closes a mid-line verse on its own line when the next verse opens the following line", () => {
    expect(
      computeVerseOutlineSegments({
        rects: [verseNumber(0, 250), text(0, 259, 470)],
        contentBox: CONTENT,
        following: verseNumber(1, 100),
      }),
    ).toEqual([box({ left: 250, right: 500, top: 54, bottom: 70 }, true, true)]);
  });

  it("draws a Z for a section that starts mid-line, with a step under the line before it", () => {
    expect(
      computeVerseOutlineSegments({
        rects: [verseNumber(0, 250), text(0, 259, 490), text(1, 100, 495), text(2, 100, 480)],
        contentBox: CONTENT,
        following: verseNumber(3, 100),
      }),
    ).toEqual([
      box({ left: 250, right: 500, top: 54, bottom: between(1) }, true, false),
      box({ left: 100, right: 500, top: between(1), bottom: 118 }, false, true),
      edge(100, 250, between(1)),
    ]);
  });

  it("draws the section's partial last line when the next verse starts mid-line on it", () => {
    expect(
      computeVerseOutlineSegments({
        rects: [verseNumber(0, 100), text(0, 109, 490), text(1, 100, 495), text(2, 100, 300)],
        contentBox: CONTENT,
        following: verseNumber(2, 304),
      }),
    ).toEqual([
      box({ left: 100, right: 500, top: 54, bottom: between(2) }, true, false),
      box({ left: 100, right: 300, top: between(2), bottom: 118 }, false, true),
      edge(300, 500, between(2)),
    ]);
  });

  it("draws a section that starts and ends mid-line as three boxes", () => {
    expect(
      computeVerseOutlineSegments({
        rects: [verseNumber(0, 250), text(0, 259, 490), text(1, 100, 495), text(2, 100, 300)],
        contentBox: CONTENT,
        following: verseNumber(2, 304),
      }),
    ).toEqual([
      box({ left: 250, right: 500, top: 54, bottom: between(1) }, true, false),
      box({ left: 100, right: 500, top: between(1), bottom: between(2) }, false, false),
      edge(100, 250, between(1)),
      box({ left: 100, right: 300, top: between(2), bottom: 118 }, false, true),
      edge(300, 500, between(2)),
    ]);
  });

  it("takes in a hanging first line that starts left of the content box", () => {
    // `\q1` style: the first line hangs 30px into the margin; the second starts at the content box.
    expect(
      computeVerseOutlineSegments({
        rects: [text(0, 70, 480), text(1, 100, 260)],
        contentBox: CONTENT,
        following: verseNumber(2, 70),
      }),
    ).toEqual([
      box({ left: 70, right: 500, top: 54, bottom: between(1) }, true, false),
      box({ left: 100, right: 500, top: between(1), bottom: 94 }, false, true),
      edge(70, 100, between(1)),
    ]);
  });

  it("sets a wrapped line's end to the content edge, though its hanging space measures past it", () => {
    expect(
      computeVerseOutlineSegments({
        rects: [verseNumber(0, 100), text(0, 109, 500.6), text(1, 100, 502), text(2, 100, 300)],
        contentBox: CONTENT,
        following: verseNumber(2, 304),
      }),
    ).toEqual([
      box({ left: 100, right: 500, top: 54, bottom: between(2) }, true, false),
      box({ left: 100, right: 300, top: between(2), bottom: 118 }, false, true),
      edge(300, 500, between(2)),
    ]);
  });

  it("hugs each line of a centered paragraph instead of running it to the edges", () => {
    expect(
      computeVerseOutlineSegments({
        rects: [text(0, 150, 450), text(1, 200, 400)],
        contentBox: CONTENT,
        hugLines: true,
      }),
    ).toEqual([
      box({ left: 150, right: 450, top: 54, bottom: between(1) }, true, false),
      box({ left: 200, right: 400, top: between(1), bottom: 94 }, false, true),
      edge(150, 200, between(1)),
      edge(400, 450, between(1)),
    ]);
  });

  it("cuts an end-aligned paragraph's wrapped line back to the edge its hanging space runs past", () => {
    // Under `pre-wrap` the space a line wraps at hangs past the content box as a rect of its own.
    const hangingSpace = { left: 500, right: 504, top: 54, bottom: 70 };
    expect(
      computeVerseOutlineSegments({
        rects: [text(0, 288, 500), hangingSpace, text(1, 300, 500)],
        contentBox: CONTENT,
        hugLines: true,
      }),
    ).toEqual([
      box({ left: 288, right: 500, top: 54, bottom: between(1) }, true, false),
      box({ left: 300, right: 500, top: between(1), bottom: 94 }, false, true),
      edge(288, 300, between(1)),
    ]);
  });

  it("draws a short section that wraps without its lines overlapping as two closed pieces", () => {
    // Verse 6 starts near the end of one line and ends early on the next.
    expect(
      computeVerseOutlineSegments({
        rects: [verseNumber(0, 400), text(0, 409, 480), text(1, 100, 160)],
        contentBox: CONTENT,
        following: verseNumber(1, 164),
      }),
    ).toEqual([
      box({ left: 400, right: 500, top: 54, bottom: between(1) }, true, false),
      box({ left: 100, right: 160, top: between(1), bottom: 94 }, false, true),
      edge(400, 500, between(1)),
      edge(100, 160, between(1)),
    ]);
  });

  it("stands the outline off the text by the padding on every side", () => {
    expect(
      computeVerseOutlineSegments({
        rects: [text(0, 120, 300)],
        contentBox: CONTENT,
        following: verseNumber(0, 304),
        padding: 2,
      }),
    ).toEqual([box({ left: 118, right: 302, top: 52, bottom: 72 }, true, true)]);
  });

  it("returns fresh objects, so editing one result can't change the next", () => {
    const input = { rects: [text(0, 120, 300)], contentBox: CONTENT };
    const [first] = computeVerseOutlineSegments(input);
    first.borders.bottom = false;
    first.corners.topLeft = false;
    const [second] = computeVerseOutlineSegments(input);
    expect(second.borders.bottom).toBe(true);
    expect(second.corners.topLeft).toBe(true);
  });

  describe("RTL", () => {
    it("wraps a mid-line start to the left edge and ends mid-line on the right", () => {
      // The verse starts mid-line at x=380, wraps at the left edge, and the next verse follows at
      // x=250 on the second line.
      expect(
        computeVerseOutlineSegments({
          rects: [verseNumber(0, 371), text(0, 112, 371), text(1, 250, 500)],
          contentBox: CONTENT,
          following: verseNumber(1, 238),
          direction: "rtl",
        }),
      ).toEqual([
        box({ left: 100, right: 380, top: 54, bottom: between(1) }, true, false),
        box({ left: 250, right: 500, top: between(1), bottom: 94 }, false, true),
        edge(100, 250, between(1)),
        edge(380, 500, between(1)),
      ]);
    });

    it("draws a short section that wraps without its lines overlapping as two closed pieces", () => {
      // The verse starts late on the first line, at its left end, and ends early on the next.
      expect(
        computeVerseOutlineSegments({
          rects: [verseNumber(0, 191), text(0, 112, 191), text(1, 430, 500)],
          contentBox: CONTENT,
          following: verseNumber(1, 420),
          direction: "rtl",
        }),
      ).toEqual([
        box({ left: 100, right: 200, top: 54, bottom: between(1) }, true, false),
        box({ left: 430, right: 500, top: between(1), bottom: 94 }, false, true),
        edge(100, 200, between(1)),
        edge(430, 500, between(1)),
      ]);
    });

    it("cuts a hugged wrapped line back to the left edge its hanging space runs past", () => {
      const hangingSpace = { left: 96, right: 100, top: 54, bottom: 70 };
      expect(
        computeVerseOutlineSegments({
          rects: [hangingSpace, text(0, 100, 312), text(1, 100, 300)],
          contentBox: CONTENT,
          direction: "rtl",
          hugLines: true,
        }),
      ).toEqual([
        box({ left: 100, right: 312, top: 54, bottom: between(1) }, true, false),
        box({ left: 100, right: 300, top: between(1), bottom: 94 }, false, true),
        edge(300, 312, between(1)),
      ]);
    });

    it("runs a last line with nothing after it to the left edge", () => {
      expect(
        computeVerseOutlineSegments({
          rects: [text(0, 112, 500), text(1, 300, 500)],
          contentBox: CONTENT,
          direction: "rtl",
        }),
      ).toEqual([box({ left: 100, right: 500, top: 54, bottom: 94 }, true, true)]);
    });
  });
});
