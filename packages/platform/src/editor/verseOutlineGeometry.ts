/**
 * Pure geometry for the active verse outline: turns the client rects of the active verse section's
 * text (from `Range.getClientRects()`, see `measureVerseSection`) into the boxes and edges that
 * together outline just that section. No DOM access, so every case can be unit tested with plain
 * numbers.
 *
 * Working from the text's own line boxes, rather than from where the verse markers sit, is what
 * lets one code path cover every shape a section takes — a single line, a sliver between two
 * markers, a "Z" that starts mid-line, one that also ends mid-line, hanging and first-line indents,
 * and RTL — without guessing lines from marker boxes, which are shorter than the line they sit on.
 *
 * All rects are in the same coordinate space (e.g. viewport pixels). Sides and corners are physical.
 */

export interface OutlineRect {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

export interface OutlineSides {
  top: boolean;
  right: boolean;
  bottom: boolean;
  left: boolean;
}

export interface OutlineCorners {
  topLeft: boolean;
  topRight: boolean;
  bottomRight: boolean;
  bottomLeft: boolean;
}

/**
 * One piece of the outline: a rect, which of its sides draw a border, and which corners round. A
 * piece with zero height is a horizontal edge — the step where one line of the section is wider
 * than the next — and draws only its top border.
 */
export interface OutlineSegment {
  rect: OutlineRect;
  borders: OutlineSides;
  corners: OutlineCorners;
}

export interface VerseOutlineInput {
  /**
   * The section text's client rects, in any order. Empty rects are ignored; a zero-width one only
   * makes its line taller (see {@link groupRectsIntoLines}).
   */
  rects: readonly OutlineRect[];
  /**
   * The paragraph's content box (inside its padding). A section line that wraps runs to the
   * content box's inline-end edge, and a line that continues the section from the line above starts
   * at its inline-start edge, so ragged line ends don't make the outline ragged.
   */
  contentBox: { left: number; right: number };
  /**
   * The box of what follows the section — the next verse marker. When it sits on the section's last
   * line, the section ends mid-line there and the outline stops at its text. Otherwise (or when
   * nothing follows) the section has that line to itself, so it too runs to the inline-end edge.
   */
  following?: OutlineRect;
  direction?: "ltr" | "rtl";
  /**
   * Outline each line's own text, without running lines out to the content box — for centered or
   * end-aligned paragraphs, whose lines don't start at the inline-start edge.
   */
  hugLines?: boolean;
  /** How far (px) the outline stands off the text on every side. */
  padding?: number;
}

/** Lines whose edges are this close (px) are drawn as one box. */
const SAME_EDGE_PX = 0.5;

/**
 * Computes the outline for a verse section from its text's client rects: one box per run of lines
 * that share their left and right edges, plus an edge piece wherever two runs' widths differ. The
 * result is a closed outline; only its four outermost corners round. A short section that wraps
 * without its two lines overlapping (it starts late on one line and ends early on the next) comes
 * out as two closed pieces that meet at no more than a corner, with square corners where they do.
 *
 * Returns no segments when there is no visible text to outline (no rects with width and height).
 */
export function computeVerseOutlineSegments({
  rects,
  contentBox,
  following,
  direction = "ltr",
  hugLines = false,
  padding = 0,
}: VerseOutlineInput): OutlineSegment[] {
  const lines = groupRectsIntoLines(rects);
  if (lines.length === 0) return [];

  const isRtl = direction === "rtl";
  const last = lines.length - 1;
  const endsMidLine = following !== undefined && isOnLine(following, lines[last]);
  // Every line but the section's last wraps, so it runs to the paragraph's inline end (as does the
  // last, when nothing follows on it); every line but its first carries on from the line above, so
  // it starts at the paragraph's inline start. Both are set to the edge exactly: under `pre-wrap`, a
  // wrapped line's hanging space measures past it. Hugged lines keep their own extent, but are cut
  // back to the inline-end edge for the same reason. A section that ends mid-line stops its padding
  // at the next verse number, which can sit right against its text, so the outline never covers it.
  const spans = lines.map((line, i) => {
    let { left, right } = line;
    if (hugLines) {
      if (isRtl) left = Math.max(left, contentBox.left);
      else right = Math.min(right, contentBox.right);
    } else {
      const wraps = i < last || !endsMidLine;
      const continues = i > 0;
      if (isRtl ? continues : wraps) right = contentBox.right;
      if (isRtl ? wraps : continues) left = contentBox.left;
    }
    const span = { left: left - padding, right: right + padding };
    if (following && endsMidLine && i === last) {
      if (isRtl) span.left = Math.max(span.left, following.right);
      else span.right = Math.min(span.right, following.left);
    }
    return span;
  });

  // Each line owns the space from halfway up the gap above it to halfway down the gap below, so
  // stacked boxes meet without a seam and borders run between lines, not through their text.
  const ys = [lines[0].top - padding];
  for (let i = 1; i < lines.length; i++) ys.push((lines[i - 1].bottom + lines[i].top) / 2);
  ys.push(lines[last].bottom + padding);

  // Runs of consecutive lines with the same edges become one box.
  const runs: { left: number; right: number; top: number; bottom: number }[] = [];
  spans.forEach((span, i) => {
    const run = runs.at(-1);
    if (run && sameEdge(run.left, span.left) && sameEdge(run.right, span.right)) {
      run.bottom = ys[i + 1];
    } else {
      runs.push({ ...span, top: ys[i], bottom: ys[i + 1] });
    }
  });

  const segments: OutlineSegment[] = [];
  runs.forEach((run, i) => {
    const isFirst = i === 0;
    const isLast = i === runs.length - 1;
    segments.push({
      rect: { ...run },
      borders: { top: isFirst, right: true, bottom: isLast, left: true },
      corners: { topLeft: isFirst, topRight: isFirst, bottomRight: isLast, bottomLeft: isLast },
    });
    if (isFirst) return;
    // Between two runs, the edge is drawn where one is wider than the other: the parts of each
    // run's span the other doesn't cover — both whole spans when the runs don't overlap.
    const above = runs[i - 1];
    for (const [left, right] of uncoveredIntervals(above, run)) {
      segments.push({
        rect: { left, right, top: run.top, bottom: run.top },
        borders: { top: true, right: false, bottom: false, left: false },
        corners: { topLeft: false, topRight: false, bottomRight: false, bottomLeft: false },
      });
    }
  });
  return segments;
}

/**
 * Groups client rects into one box per visual line, top to bottom. A rect joins a line when they
 * overlap vertically by more than half the shorter of the two, so a raised or taller inline on the
 * line (a verse number, a superscript note caller) stays on it, while a wrapped line — which at
 * most grazes the line above — starts a new one. Rects without width or height (caret hosts,
 * collapsed ranges) start no line and add no width. A zero-width one with height (the caret host
 * in an empty verse) can still make the line it sits on taller, so an empty verse's line is as tall
 * as the text that will be typed there, not just its verse number.
 */
export function groupRectsIntoLines(rects: readonly OutlineRect[]): OutlineRect[] {
  const lines: OutlineRect[] = [];
  const visible = rects
    .filter((rect) => rect.right > rect.left && rect.bottom > rect.top)
    // Tallest first, so each line is seeded by its main text rather than by a small inline.
    .sort((a, b) => b.bottom - b.top - (a.bottom - a.top));
  for (const rect of visible) {
    const line = lines.find((l) => isOnLine(rect, l));
    if (line) {
      line.left = Math.min(line.left, rect.left);
      line.right = Math.max(line.right, rect.right);
    } else {
      lines.push({ left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom });
    }
  }
  for (const rect of rects) {
    if (rect.right !== rect.left || rect.bottom <= rect.top) continue;
    const line = lines.find((l) => isOnLine(rect, l));
    if (!line) continue;
    line.top = Math.min(line.top, rect.top);
    line.bottom = Math.max(line.bottom, rect.bottom);
  }
  return lines.sort((a, b) => a.top - b.top);
}

/** Whether `rect` overlaps `line` vertically by more than half the shorter of the two. */
function isOnLine(rect: OutlineRect, line: OutlineRect): boolean {
  const overlap = Math.min(rect.bottom, line.bottom) - Math.max(rect.top, line.top);
  return overlap > Math.min(rect.bottom - rect.top, line.bottom - line.top) / 2;
}

function sameEdge(a: number, b: number): boolean {
  return Math.abs(a - b) < SAME_EDGE_PX;
}

/** The symmetric difference of two spans: the stretches only one of them covers. */
function uncoveredIntervals(
  a: { left: number; right: number },
  b: { left: number; right: number },
): [number, number][] {
  if (a.right <= b.left || b.right <= a.left) {
    return [
      [a.left, a.right],
      [b.left, b.right],
    ];
  }
  const intervals: [number, number][] = [];
  if (!sameEdge(a.left, b.left))
    intervals.push([Math.min(a.left, b.left), Math.max(a.left, b.left)]);
  if (!sameEdge(a.right, b.right))
    intervals.push([Math.min(a.right, b.right), Math.max(a.right, b.right)]);
  return intervals;
}
