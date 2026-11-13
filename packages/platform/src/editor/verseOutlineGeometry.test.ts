import { describe, expect, it } from "vitest";
import { computeVerseOutlineBoxes, groupRectsIntoLines, OutlineRect } from "./verseOutlineGeometry";

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

  it("gives an empty verse's line the text height of its caret host, not the number's", () => {
    const caretHost = { left: 109, right: 109, top: 54, bottom: 70 };
    expect(groupRectsIntoLines([verseNumber(0, 100), caretHost])).toEqual([
      { left: 100, right: 109, top: 54, bottom: 70 },
    ]);
  });

  it("lets a caret host make its line taller but never wider or shorter", () => {
    const tallHost = { left: 300, right: 300, top: 52, bottom: 72 };
    const shortHost = { left: 90, right: 90, top: 58, bottom: 66 };
    expect(groupRectsIntoLines([text(0, 130, 200), tallHost, shortHost])).toEqual([
      { left: 130, right: 200, top: 52, bottom: 72 },
    ]);
  });

  it("doesn't let a caret host on another line stretch this one", () => {
    const hostBelow = { left: 150, right: 150, top: 78, bottom: 94 };
    expect(groupRectsIntoLines([verseNumber(0, 100), hostBelow])).toEqual([verseNumber(0, 100)]);
  });
});

describe("computeVerseOutlineBoxes", () => {
  it("draws nothing when the section has no visible text", () => {
    expect(computeVerseOutlineBoxes({ rects: [], contentBox: CONTENT })).toEqual([]);
  });

  it("outlines an empty verse at the text's height, so typing into it doesn't resize it", () => {
    const empty = computeVerseOutlineBoxes({
      rects: [verseNumber(0, 250), { left: 259, right: 259, top: 54, bottom: 70 }],
      contentBox: CONTENT,
      following: verseNumber(0, 280),
    });
    const typed = computeVerseOutlineBoxes({
      rects: [verseNumber(0, 250), text(0, 259, 268)],
      contentBox: CONTENT,
      following: verseNumber(0, 280),
    });
    expect(empty).toEqual([{ left: 250, right: 259, top: 54, bottom: 70 }]);
    expect(typed).toEqual([{ left: 250, right: 268, top: 54, bottom: 70 }]);
  });

  it("stops a one-line section at the next verse marker, not the paragraph's edge", () => {
    expect(
      computeVerseOutlineBoxes({
        rects: [verseNumber(0, 100), text(0, 109, 240)],
        contentBox: CONTENT,
        following: verseNumber(0, 244),
      }),
    ).toEqual([{ left: 100, right: 240, top: 54, bottom: 70 }]);
  });

  it("outlines a sliver between two verse markers in the middle of a line", () => {
    expect(
      computeVerseOutlineBoxes({
        rects: [verseNumber(1, 250), text(1, 259, 360)],
        contentBox: CONTENT,
        following: verseNumber(1, 364),
      }),
    ).toEqual([{ left: 250, right: 360, top: 78, bottom: 94 }]);
  });

  it("ends a paragraph's only verse where its text ends, not at the paragraph's edge", () => {
    // Nothing follows the section, but the blank after its last line is left out.
    expect(
      computeVerseOutlineBoxes({
        rects: [verseNumber(0, 100), text(0, 109, 488), text(1, 100, 493), text(2, 100, 310)],
        contentBox: CONTENT,
      }),
    ).toEqual([
      { left: 100, right: 493, top: 54, bottom: between(2) },
      { left: 100, right: 310, top: between(2), bottom: 118 },
    ]);
  });

  it("runs the inline-end side straight down at the longest line, not stepping at each", () => {
    expect(
      computeVerseOutlineBoxes({
        rects: [verseNumber(0, 100), text(0, 109, 470), text(1, 100, 493), text(2, 100, 480)],
        contentBox: CONTENT,
        following: verseNumber(3, 100),
      }),
    ).toEqual([
      { left: 100, right: 493, top: 54, bottom: between(2) },
      { left: 100, right: 480, top: between(2), bottom: 118 },
    ]);
  });

  it("ends where the text ends when the next verse opens the following line", () => {
    expect(
      computeVerseOutlineBoxes({
        rects: [verseNumber(0, 100), text(0, 109, 488), text(1, 100, 470)],
        contentBox: CONTENT,
        following: verseNumber(2, 100),
      }),
    ).toEqual([
      { left: 100, right: 488, top: 54, bottom: between(1) },
      { left: 100, right: 470, top: between(1), bottom: 94 },
    ]);
  });

  it("closes a mid-line verse at its text when the next verse opens the following line", () => {
    expect(
      computeVerseOutlineBoxes({
        rects: [verseNumber(0, 250), text(0, 259, 470)],
        contentBox: CONTENT,
        following: verseNumber(1, 100),
      }),
    ).toEqual([{ left: 250, right: 470, top: 54, bottom: 70 }]);
  });

  it("draws a Z for a section that starts mid-line, with a step under the line before it", () => {
    expect(
      computeVerseOutlineBoxes({
        rects: [verseNumber(0, 250), text(0, 259, 490), text(1, 100, 495), text(2, 100, 480)],
        contentBox: CONTENT,
        following: verseNumber(3, 100),
      }),
    ).toEqual([
      { left: 250, right: 495, top: 54, bottom: between(1) },
      { left: 100, right: 495, top: between(1), bottom: between(2) },
      { left: 100, right: 480, top: between(2), bottom: 118 },
    ]);
  });

  it("draws the section's partial last line when the next verse starts mid-line on it", () => {
    expect(
      computeVerseOutlineBoxes({
        rects: [verseNumber(0, 100), text(0, 109, 490), text(1, 100, 495), text(2, 100, 300)],
        contentBox: CONTENT,
        following: verseNumber(2, 304),
      }),
    ).toEqual([
      { left: 100, right: 495, top: 54, bottom: between(2) },
      { left: 100, right: 300, top: between(2), bottom: 118 },
    ]);
  });

  it("draws a section that starts and ends mid-line as three boxes", () => {
    expect(
      computeVerseOutlineBoxes({
        rects: [verseNumber(0, 250), text(0, 259, 490), text(1, 100, 495), text(2, 100, 300)],
        contentBox: CONTENT,
        following: verseNumber(2, 304),
      }),
    ).toEqual([
      { left: 250, right: 495, top: 54, bottom: between(1) },
      { left: 100, right: 495, top: between(1), bottom: between(2) },
      { left: 100, right: 300, top: between(2), bottom: 118 },
    ]);
  });

  it("runs the inline-start side straight down from a hanging first line", () => {
    // `\q1` style: the first line hangs 30px into the margin; the second starts at the content box.
    expect(
      computeVerseOutlineBoxes({
        rects: [text(0, 70, 480), text(1, 100, 260)],
        contentBox: CONTENT,
        following: verseNumber(2, 70),
      }),
    ).toEqual([
      { left: 70, right: 480, top: 54, bottom: between(1) },
      { left: 70, right: 260, top: between(1), bottom: 94 },
    ]);
  });

  it("steps in at a first-line indent and runs straight down after it", () => {
    expect(
      computeVerseOutlineBoxes({
        rects: [verseNumber(0, 130), text(0, 139, 490), text(1, 100, 260)],
        contentBox: CONTENT,
        following: verseNumber(1, 264),
      }),
    ).toEqual([
      { left: 130, right: 490, top: 54, bottom: between(1) },
      { left: 100, right: 260, top: between(1), bottom: 94 },
    ]);
  });

  it("sets a wrapped line's end to the content edge, though its hanging space measures past it", () => {
    expect(
      computeVerseOutlineBoxes({
        rects: [verseNumber(0, 100), text(0, 109, 500.6), text(1, 100, 502), text(2, 100, 300)],
        contentBox: CONTENT,
        following: verseNumber(2, 304),
      }),
    ).toEqual([
      { left: 100, right: 500, top: 54, bottom: between(2) },
      { left: 100, right: 300, top: between(2), bottom: 118 },
    ]);
  });

  it("hugs each line of a centered paragraph instead of running it to the edges", () => {
    expect(
      computeVerseOutlineBoxes({
        rects: [text(0, 150, 450), text(1, 200, 400)],
        contentBox: CONTENT,
        hugLines: true,
      }),
    ).toEqual([
      { left: 150, right: 450, top: 54, bottom: between(1) },
      { left: 200, right: 400, top: between(1), bottom: 94 },
    ]);
  });

  it("cuts an end-aligned paragraph's wrapped line back to the edge its hanging space runs past", () => {
    // Under `pre-wrap` the space a line wraps at hangs past the content box as a rect of its own.
    const hangingSpace = { left: 500, right: 504, top: 54, bottom: 70 };
    expect(
      computeVerseOutlineBoxes({
        rects: [text(0, 288, 500), hangingSpace, text(1, 300, 500)],
        contentBox: CONTENT,
        hugLines: true,
      }),
    ).toEqual([
      { left: 288, right: 500, top: 54, bottom: between(1) },
      { left: 300, right: 500, top: between(1), bottom: 94 },
    ]);
  });

  it("draws a short section that wraps without its lines overlapping as two closed pieces", () => {
    // Verse 6 starts near the end of one line and ends early on the next.
    expect(
      computeVerseOutlineBoxes({
        rects: [verseNumber(0, 400), text(0, 409, 480), text(1, 100, 160)],
        contentBox: CONTENT,
        following: verseNumber(1, 164),
      }),
    ).toEqual([
      { left: 400, right: 480, top: 54, bottom: between(1) },
      { left: 100, right: 160, top: between(1), bottom: 94 },
    ]);
  });

  it("stands the outline off the text by the padding on every side", () => {
    expect(
      computeVerseOutlineBoxes({
        rects: [text(0, 120, 300)],
        contentBox: CONTENT,
        following: verseNumber(0, 304),
        padding: 2,
      }),
    ).toEqual([{ left: 118, right: 302, top: 52, bottom: 72 }]);
  });

  it("stops the padding at the next verse number, so the outline never covers it", () => {
    expect(
      computeVerseOutlineBoxes({
        rects: [text(0, 120, 300)],
        contentBox: CONTENT,
        following: verseNumber(0, 300),
        padding: 2,
      }),
    ).toEqual([{ left: 118, right: 300, top: 52, bottom: 72 }]);
  });

  describe("RTL", () => {
    it("stops the padding at the next verse number on the left", () => {
      // The next verse's number runs from x=171 to x=180, right up against the text.
      expect(
        computeVerseOutlineBoxes({
          rects: [text(0, 180, 300)],
          contentBox: CONTENT,
          following: verseNumber(0, 171),
          direction: "rtl",
          padding: 2,
        }),
      ).toEqual([{ left: 180, right: 302, top: 52, bottom: 72 }]);
    });

    it("wraps a mid-line start down the left side and ends mid-line on the right", () => {
      // The verse starts mid-line at x=380, wraps at x=112, and the next verse follows at x=250 on
      // the second line.
      expect(
        computeVerseOutlineBoxes({
          rects: [verseNumber(0, 371), text(0, 112, 371), text(1, 250, 500)],
          contentBox: CONTENT,
          following: verseNumber(1, 238),
          direction: "rtl",
        }),
      ).toEqual([
        { left: 112, right: 380, top: 54, bottom: between(1) },
        { left: 250, right: 500, top: between(1), bottom: 94 },
      ]);
    });

    it("draws a short section that wraps without its lines overlapping as two closed pieces", () => {
      // The verse starts late on the first line, at its left end, and ends early on the next.
      expect(
        computeVerseOutlineBoxes({
          rects: [verseNumber(0, 191), text(0, 112, 191), text(1, 430, 500)],
          contentBox: CONTENT,
          following: verseNumber(1, 420),
          direction: "rtl",
        }),
      ).toEqual([
        { left: 112, right: 200, top: 54, bottom: between(1) },
        { left: 430, right: 500, top: between(1), bottom: 94 },
      ]);
    });

    it("cuts a hugged wrapped line back to the left edge its hanging space runs past", () => {
      const hangingSpace = { left: 96, right: 100, top: 54, bottom: 70 };
      expect(
        computeVerseOutlineBoxes({
          rects: [hangingSpace, text(0, 100, 312), text(1, 100, 300)],
          contentBox: CONTENT,
          direction: "rtl",
          hugLines: true,
        }),
      ).toEqual([
        { left: 100, right: 312, top: 54, bottom: between(1) },
        { left: 100, right: 300, top: between(1), bottom: 94 },
      ]);
    });

    it("ends a last line with nothing after it where its text ends", () => {
      expect(
        computeVerseOutlineBoxes({
          rects: [text(0, 112, 500), text(1, 300, 500)],
          contentBox: CONTENT,
          direction: "rtl",
        }),
      ).toEqual([
        { left: 112, right: 500, top: 54, bottom: between(1) },
        { left: 300, right: 500, top: between(1), bottom: 94 },
      ]);
    });
  });
});
