import { $createRangeSelection, LexicalEditor, RangeSelection } from "lexical";

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

/**
 * Where a drop at `event`'s viewport point lands in `editor`, as a caret: the place the browser's
 * `insertFromDrop` inserts at. `undefined` where the browser cannot say, where the point is outside
 * the editor, and where Lexical resolves no point there (inside a decorator, such as a verse
 * number).
 *
 * Read-only: call inside `editor.update()`, an editor read, or a command handler; the selection it
 * returns is not set as the editor's.
 */
export function $selectionAtDropPoint(
  editor: LexicalEditor,
  event: Pick<DragEvent, "clientX" | "clientY">,
): RangeSelection | undefined {
  const root = editor.getRootElement();
  const domRange = root && domRangeFromPoint(root.ownerDocument, event.clientX, event.clientY);
  if (!root || !domRange || !root.contains(domRange.startContainer)) return undefined;
  const selection = $createRangeSelection();
  selection.applyDOMRange(domRange);
  // `applyDOMRange` sets no point when Lexical resolves none, leaving the selection at its
  // default: the root's start.
  const { anchor } = selection;
  if (anchor.key === "root" && anchor.offset === 0 && anchor.type === "element") return undefined;
  return selection;
}
