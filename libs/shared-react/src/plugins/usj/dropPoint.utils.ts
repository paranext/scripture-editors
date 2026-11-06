/**
 * The collapsed DOM range at viewport point (`x`, `y`) — where a drop there lands — or `undefined`
 * where the browser offers no way to ask.
 *
 * Read-only: safe anywhere; it reads only the DOM.
 */
export function domRangeFromPoint(
  document: Document,
  x: number,
  y: number,
): StaticRange | undefined {
  if (typeof document.caretRangeFromPoint === "function")
    return document.caretRangeFromPoint(x, y) ?? undefined;
  if (typeof document.caretPositionFromPoint !== "function") return undefined;
  const position = document.caretPositionFromPoint(x, y);
  if (!position) return undefined;
  const range = document.createRange();
  range.setStart(position.offsetNode, position.offset);
  range.collapse(true);
  return range;
}
