/**
 * Which characters of a read-only decorator an annotation range ending inside it holds. Positions
 * inside a decorator are counted in the holdable bytes it stands for (`selection.utils.ts`): its own
 * displayed bytes first, then any bytes it stands for but does not show. A hold is measured in the
 * text the decorator renders, so painting can cover exactly those characters.
 */

import { $isImmutableVerseNode } from "../../../nodes/usj/ImmutableVerseNode";
import { LexicalNode } from "lexical";
import {
  $decoratorDisplayText,
  $decoratorRenderedText,
  $isImmutableChapterNode,
  DecoratorHold,
} from "shared";

/**
 * Where holdable byte `index` of `decorator` renders: an offset into its rendered text,
 * `"drawn"` when it is shown but not as text (a caller CSS draws, a hidden caller shown as `*`), or
 * `undefined` when the decorator does not show it.
 */
function $renderedOffsetOf(decorator: LexicalNode, index: number): number | "drawn" | undefined {
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

/**
 * What a range holds of `decorator` from holdable byte `from` up to `to`: the rendered characters of
 * the bytes it shows; `undefined` when one of them is shown without text, so the decorator is held
 * whole; and `start === end` when it shows none of them.
 */
export function $renderedDecoratorHold(
  decorator: LexicalNode,
  from: number,
  to: number,
): DecoratorHold | undefined {
  let start: number | undefined;
  let end: number | undefined;
  for (let index = from; index < to; index++) {
    const offset = $renderedOffsetOf(decorator, index);
    if (offset === "drawn") return undefined;
    if (offset === undefined) continue;
    start = Math.min(start ?? offset, offset);
    end = Math.max(end ?? offset + 1, offset + 1);
  }
  return start === undefined || end === undefined ? { start: 0, end: 0 } : { start, end };
}
