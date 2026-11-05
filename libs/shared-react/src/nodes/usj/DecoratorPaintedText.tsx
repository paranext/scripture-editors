import { LexicalEditor, NodeKey } from "lexical";
import { Fragment, ReactElement, ReactNode, useCallback, useSyncExternalStore } from "react";
import {
  DECORATOR_PAINT_ATTRIBUTE,
  DecoratorPaint,
  getDecoratorPaint,
  subscribeDecoratorPaint,
} from "shared";

/** The paint of decorator `nodeKey` in `editor`, kept current (see `decoratorPaint.ts`). */
export function useDecoratorPaint(editor: LexicalEditor, nodeKey: NodeKey): DecoratorPaint {
  const subscribe = useCallback(
    (listener: () => void) => subscribeDecoratorPaint(editor, nodeKey, listener),
    [editor, nodeKey],
  );
  return useSyncExternalStore(subscribe, () => getDecoratorPaint(editor, nodeKey));
}

/**
 * `text` with every run its decorator's paint names wrapped in a sub-span carrying the
 * annotations' class names — the React twin of `renderDecoratorPaint`, for a decorator that
 * renders through a portal.
 */
export function DecoratorPaintedText({
  editor,
  nodeKey,
  text,
}: {
  editor: LexicalEditor;
  nodeKey: NodeKey;
  text: string;
}): ReactNode {
  const paint = useDecoratorPaint(editor, nodeKey);
  if (paint.length === 0) return text;
  const parts: ReactElement[] = [];
  let at = 0;
  paint.forEach((segment, index) => {
    const start = Math.max(at, Math.min(segment.start, text.length));
    const end = Math.max(start, Math.min(segment.end, text.length));
    if (start > at) parts.push(<Fragment key={`t${index}`}>{text.slice(at, start)}</Fragment>);
    if (end > start)
      parts.push(
        <span
          key={`p${index}`}
          className={segment.classNames.join(" ")}
          {...{ [DECORATOR_PAINT_ATTRIBUTE]: JSON.stringify(segment.annotationKeys) }}
        >
          {text.slice(start, end)}
        </span>,
      );
    at = end;
  });
  if (at < text.length) parts.push(<Fragment key="tail">{text.slice(at)}</Fragment>);
  return parts;
}
