import { LexicalEditor, NodeKey } from "lexical";
import { Fragment, ReactNode, useCallback, useSyncExternalStore } from "react";
import {
  DECORATOR_PAINT_ATTRIBUTE,
  DecoratorPaint,
  getDecoratorPaint,
  paintRuns,
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
  return paintRuns(text, paint).map(({ start, text: runText, segment }) =>
    segment ? (
      <span
        key={start}
        className={segment.classNames.join(" ")}
        {...{ [DECORATOR_PAINT_ATTRIBUTE]: JSON.stringify(segment.annotationKeys) }}
      >
        {runText}
      </span>
    ) : (
      <Fragment key={start}>{runText}</Fragment>
    ),
  );
}
