/**
 * Turns the boxes of a verse outline (from `computeVerseOutlineSegments`) into an SVG path: each
 * stack of boxes that touch is traced as one closed shape, and its corners are rounded by the
 * chosen style. No DOM access.
 */

import { OutlineRect, OutlineSegment } from "./verseOutlineGeometry";

/**
 * Which corners of the outline round:
 * - `ends`: only each shape's top and bottom corners.
 * - `outward`: every corner that points out of the shape; the inward corners at its steps stay
 *   square.
 * - `all`: every corner, the inward ones included.
 */
export type OutlineCornerStyle = "ends" | "outward" | "all";

type Point = [x: number, y: number];

/** Points closer than this (px) are one point. */
const SAME_POINT_PX = 0.01;

/**
 * The SVG path data (`d`) for an outline's segments, or an empty string when there is nothing to
 * draw. The geometry's edge pieces are not needed: tracing the boxes draws the steps between them.
 */
export function outlinePathData(
  segments: readonly OutlineSegment[],
  cornerStyle: OutlineCornerStyle,
  radius: number,
): string {
  const boxes = segments.map((segment) => segment.rect).filter((rect) => rect.bottom > rect.top);
  return touchingStacks(boxes)
    .map((stack) => shapePath(traceStack(stack), cornerStyle, radius))
    .join("");
}

/**
 * Splits boxes, top to bottom, into stacks whose neighbours overlap side to side. A section that
 * starts late on one line and ends early on the next is two shapes, not one joined by a line.
 */
function touchingStacks(boxes: readonly OutlineRect[]): OutlineRect[][] {
  const stacks: OutlineRect[][] = [];
  for (const box of boxes) {
    const above = stacks.at(-1)?.at(-1);
    if (above && above.right > box.left && box.right > above.left)
      stacks[stacks.length - 1].push(box);
    else stacks.push([box]);
  }
  return stacks;
}

/**
 * The corners of a stack of boxes, clockwise on screen from the top box's top right: down the
 * right side, back up the left. Repeated and in-line points are dropped.
 */
function traceStack(stack: readonly OutlineRect[]): Point[] {
  const points: Point[] = [];
  for (const box of stack) points.push([box.right, box.top], [box.right, box.bottom]);
  for (const box of [...stack].reverse()) points.push([box.left, box.bottom], [box.left, box.top]);

  const distinct: Point[] = [];
  for (const point of points) {
    const last = distinct.at(-1);
    if (!last || !isSamePoint(last, point)) distinct.push(point);
  }
  if (distinct.length > 1 && isSamePoint(distinct[0], distinct[distinct.length - 1]))
    distinct.pop();
  return distinct.filter((point, i) => {
    const before = distinct.at(i - 1) ?? point;
    const after = distinct[(i + 1) % distinct.length];
    const isInLine =
      (isSame(before[0], point[0]) && isSame(after[0], point[0])) ||
      (isSame(before[1], point[1]) && isSame(after[1], point[1]));
    return !isInLine;
  });
}

/** A closed path through `points`, rounding the corners `cornerStyle` picks by up to `radius`. */
function shapePath(
  points: readonly Point[],
  cornerStyle: OutlineCornerStyle,
  radius: number,
): string {
  if (points.length < 3) return "";
  const ys = points.map(([, y]) => y);
  const top = Math.min(...ys);
  const bottom = Math.max(...ys);
  let d = "";
  points.forEach((point, i) => {
    const before = points[(i - 1 + points.length) % points.length];
    const after = points[(i + 1) % points.length];
    // Clockwise on screen (y runs down), a right turn — a positive cross product — points outward.
    const cross =
      (point[0] - before[0]) * (after[1] - point[1]) -
      (point[1] - before[1]) * (after[0] - point[0]);
    const isOutward = cross > 0;
    const isEnd = isSame(point[1], top) || isSame(point[1], bottom);
    const rounds = cornerStyle === "all" || (isOutward && (cornerStyle === "outward" || isEnd));
    const toBefore = Math.hypot(before[0] - point[0], before[1] - point[1]);
    const toAfter = Math.hypot(after[0] - point[0], after[1] - point[1]);
    // No more than half of either side, so two rounded corners on a short side don't overlap.
    const r = rounds ? Math.min(radius, toBefore / 2, toAfter / 2) : 0;
    const start = towards(point, before, r / toBefore);
    const end = towards(point, after, r / toAfter);
    d += `${i === 0 ? "M" : "L"}${format(start)}`;
    if (r > 0) d += `Q${format(point)} ${format(end)}`;
  });
  return `${d}Z`;
}

/** The point `fraction` of the way from `from` to `to`. */
function towards(from: Point, to: Point, fraction: number): Point {
  return [from[0] + (to[0] - from[0]) * fraction, from[1] + (to[1] - from[1]) * fraction];
}

function format([x, y]: Point): string {
  return `${round(x)},${round(y)}`;
}

/** To 1/100 px, which is finer than any screen draws, so paths stay short and stable in tests. */
function round(value: number): number {
  return Math.round(value * 100) / 100;
}

function isSame(a: number, b: number): boolean {
  return Math.abs(a - b) < SAME_POINT_PX;
}

function isSamePoint(a: Point, b: Point): boolean {
  return isSame(a[0], b[0]) && isSame(a[1], b[1]);
}
