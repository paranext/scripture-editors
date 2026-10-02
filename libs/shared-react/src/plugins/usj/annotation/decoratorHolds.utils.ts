/**
 * Where each holdable byte of a read-only decorator is drawn. A decorator's holds are kept in the
 * holdable bytes it stands for (`$readDecoratorHoldableText` in `selection.utils.ts`): its own
 * displayed bytes first, then any it stands for but does not show. Reading a hold maps it onto the
 * text the decorator renders now, so painting covers exactly those characters.
 */

import { $isImmutableVerseNode } from "../../../nodes/usj/ImmutableVerseNode";
import { LexicalNode } from "lexical";
import { $decoratorDisplayText, $decoratorRenderedText, $isImmutableChapterNode } from "shared";

/**
 * Where holdable byte `index` of `decorator` renders: an offset into its rendered text,
 * `"drawn"` when it is shown but not as text (a caller CSS draws, a hidden caller shown as `*`), or
 * `undefined` when the decorator does not show it.
 */
export function $renderedOffsetOf(
  decorator: LexicalNode,
  index: number,
): number | "drawn" | undefined {
  const rendered = $decoratorRenderedText(decorator);
  if ($isImmutableVerseNode(decorator) || $isImmutableChapterNode(decorator)) {
    // `\`, then the marker name with its space, then the number, then `\va`/`\vp`/`\ca`/`\cp`.
    const markerLength = 1 + decorator.getMarker().length + 1;
    const number = decorator.getNumber();
    if (decorator.getShowMarker()) return index < markerLength + number.length ? index : undefined;
    if (index < markerLength || index >= markerLength + number.length) return undefined;
    const at = rendered.indexOf(number);
    return at < 0 ? "drawn" : at + index - markerLength;
  }
  const own = $decoratorDisplayText(decorator);
  const lead = own.length - own.trimStart().length;
  const holdable = own.trim().length;
  if (index >= holdable) return undefined;
  return own === rendered ? lead + index : "drawn";
}
