/**
 * How a read-only decorator (a verse number, a note caller, a chapter glyph, a read-only marker
 * glyph) paints the annotations it holds in part: as sub-spans of its own rendered text, each
 * carrying the class names a `<mark>` would. The per-editor annotation index computes each
 * decorator's paint plan after every commit and writes it here; a decorator that renders through
 * React subscribes to its own key, and one that writes its bytes straight into its element
 * ({@link markDomPaintedDecorator}) is repainted by the index through {@link renderDecoratorPaint},
 * which its `createDOM`/`updateDOM` call too. Either way the decorator's element never carries a
 * partial paint of its own: a decorator held whole is painted on its element like any other leaf.
 */

import type { LexicalEditor, NodeKey } from "lexical";

/** One painted run of a decorator's rendered text. */
export interface DecoratorPaintSegment {
  start: number;
  end: number;
  /** The class names of every annotation painting the run, plus their state classes. */
  classNames: readonly string[];
  /** The index keys (`JSON [type, id]`) of the annotations painting the run. */
  annotationKeys: readonly string[];
}

/** A decorator's paint: the runs of its rendered text painted as sub-spans, in order. */
export type DecoratorPaint = readonly DecoratorPaintSegment[];

/** The attribute a painted sub-span carries, holding its annotation keys as JSON. */
export const DECORATOR_PAINT_ATTRIBUTE = "data-annotation-keys";

interface PaintStore {
  paints: Map<NodeKey, DecoratorPaint>;
  listeners: Map<NodeKey, Set<() => void>>;
}

const stores = new WeakMap<LexicalEditor, PaintStore>();

function storeOf(editor: LexicalEditor): PaintStore {
  let store = stores.get(editor);
  if (!store) {
    store = { paints: new Map(), listeners: new Map() };
    stores.set(editor, store);
  }
  return store;
}

const NO_PAINT: DecoratorPaint = [];

/** The paint of decorator `key` in `editor`: no segments when nothing paints part of it. */
export function getDecoratorPaint(editor: LexicalEditor, key: NodeKey): DecoratorPaint {
  return stores.get(editor)?.paints.get(key) ?? NO_PAINT;
}

function samePaint(a: DecoratorPaint, b: DecoratorPaint): boolean {
  return (
    a.length === b.length &&
    a.every((segment, index) => {
      const other = b[index];
      return (
        segment.start === other.start &&
        segment.end === other.end &&
        segment.classNames.join(" ") === other.classNames.join(" ") &&
        segment.annotationKeys.join("\u0000") === other.annotationKeys.join("\u0000")
      );
    })
  );
}

/** Set the paint of decorator `key` and tell its subscribers when it changed. */
export function setDecoratorPaint(
  editor: LexicalEditor,
  key: NodeKey,
  paint: DecoratorPaint,
): void {
  const store = storeOf(editor);
  const previous = store.paints.get(key) ?? NO_PAINT;
  if (samePaint(previous, paint)) return;
  if (paint.length > 0) store.paints.set(key, paint);
  else store.paints.delete(key);
  store.listeners.get(key)?.forEach((listener) => listener());
}

/** Forget every paint of `editor` (the index was released). */
export function clearDecoratorPaints(editor: LexicalEditor): void {
  const store = stores.get(editor);
  if (!store) return;
  const keys = [...store.paints.keys()];
  store.paints.clear();
  for (const key of keys) store.listeners.get(key)?.forEach((listener) => listener());
}

/** Call `listener` whenever decorator `key`'s paint changes; returns the unsubscribe. */
export function subscribeDecoratorPaint(
  editor: LexicalEditor,
  key: NodeKey,
  listener: () => void,
): () => void {
  const store = storeOf(editor);
  let listeners = store.listeners.get(key);
  if (!listeners) store.listeners.set(key, (listeners = new Set()));
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) store.listeners.delete(key);
  };
}

const domPainted = new WeakSet<HTMLElement>();

/** Declare that `element`'s decorator writes its bytes into the element itself (no React
 * portal), so the index may repaint it through {@link renderDecoratorPaint}. */
export function markDomPaintedDecorator(element: HTMLElement): void {
  domPainted.add(element);
}

/** Whether `element` was declared by {@link markDomPaintedDecorator}. */
export function isDomPaintedDecorator(element: HTMLElement): boolean {
  return domPainted.has(element);
}

/** The annotation keys a painted sub-span carries, or none for any other node. */
export function paintedPieceKeys(node: Node | null): readonly string[] {
  if (!(node instanceof Element)) return [];
  const raw = node.getAttribute(DECORATOR_PAINT_ATTRIBUTE);
  if (!raw) return [];
  const parsed: unknown = JSON.parse(raw);
  return Array.isArray(parsed)
    ? parsed.filter((key): key is string => typeof key === "string")
    : [];
}

/** The painted sub-span `node` is in, if any. */
export function paintedPieceOf(node: Node | null): Element | undefined {
  const element = node instanceof Element ? node : node?.parentElement;
  return element?.closest(`[${DECORATOR_PAINT_ATTRIBUTE}]`) ?? undefined;
}

/**
 * Write `text` into `element` as plain text with each segment of `paint` wrapped in a sub-span
 * carrying its class names and {@link DECORATOR_PAINT_ATTRIBUTE}. Writes nothing when the element
 * already shows exactly that.
 */
export function renderDecoratorPaint(
  element: HTMLElement,
  text: string,
  paint: DecoratorPaint,
): void {
  const wanted = paint.length > 0 ? paintSignature(text, paint) : null;
  if (element.getAttribute(PAINTED_ATTRIBUTE) === wanted && element.textContent === text) return;
  element.replaceChildren();
  let at = 0;
  const document = element.ownerDocument;
  for (const segment of paint) {
    const start = Math.max(at, Math.min(segment.start, text.length));
    const end = Math.max(start, Math.min(segment.end, text.length));
    if (start > at) element.append(document.createTextNode(text.slice(at, start)));
    if (end > start) {
      const span = document.createElement("span");
      span.setAttribute(DECORATOR_PAINT_ATTRIBUTE, JSON.stringify(segment.annotationKeys));
      for (const className of segment.classNames) span.classList.add(className);
      span.textContent = text.slice(start, end);
      element.append(span);
    }
    at = end;
  }
  if (at < text.length) element.append(document.createTextNode(text.slice(at)));
  if (wanted !== null) element.setAttribute(PAINTED_ATTRIBUTE, wanted);
  else element.removeAttribute(PAINTED_ATTRIBUTE);
}

/** Records on a DOM-painted element what {@link renderDecoratorPaint} last wrote, so an unchanged
 * paint writes nothing. */
const PAINTED_ATTRIBUTE = "data-painted";

function paintSignature(text: string, paint: DecoratorPaint): string {
  return JSON.stringify([text, paint.map((s) => [s.start, s.end, s.classNames, s.annotationKeys])]);
}
