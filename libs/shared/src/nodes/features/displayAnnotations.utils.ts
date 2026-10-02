/**
 * Reading and writing annotations held on display-byte nodes ("carriers"), and the per-editor
 * registration that keeps a display-held annotation's host callbacks. See
 * `displayAnnotations.state.ts` for why a carrier holds state instead of sitting in a mark.
 *
 * Kept apart from `TypedMarkNode.ts` because it reads display-run structure
 * (`attributeDisplay.utils.ts`), which itself imports `TypedMarkNode.ts`.
 */

import { textTypeState } from "../collab/delta.state.js";
import { $chapterGlyphTextNode, $noteEditableCallerNode } from "../usj/attributeDisplay.utils.js";
import { $isChapterNode } from "../usj/ChapterNode.js";
import { ImmutableChapterNode } from "../usj/ImmutableChapterNode.js";
import {
  IMMUTABLE_NOTE_CALLER_NODE_TYPE,
  IMMUTABLE_VERSE_NODE_TYPE,
  ZWSP,
} from "../usj/node-constants.js";
import { $isMarkerTrailingSeparator } from "../usj/node.utils.js";
import { $isNoteNode } from "../usj/NoteNode.js";
import { $isVerseNode, VerseNode } from "../usj/VerseNode.js";
import {
  DisplayAnnotation,
  DisplayAnnotations,
  displayAnnotationsState,
  mapRangeThroughAlignment,
  alignCharacters,
} from "./displayAnnotations.state.js";
import { $isImmutableUnmatchedNode } from "./ImmutableUnmatchedNode.js";
import { ImmutableTypedTextNode } from "./ImmutableTypedTextNode.js";
import { $isMarkerNode, MarkerNode } from "./MarkerNode.js";
import type {
  TypedMarkOnClick,
  TypedMarkOnMouseEnter,
  TypedMarkOnMouseLeave,
  TypedMarkOnRemove,
} from "./TypedMarkNode.js";
import { $isTypedMarkNode } from "./TypedMarkNode.js";
import type { Klass, LexicalEditor, LexicalNode } from "lexical";
import { $getEditor, $getState, $isDecoratorNode, $isTextNode, $setState, TextNode } from "lexical";

/** Decorators whose DOM is their display bytes, annotated as a whole node. */
const DISPLAY_ANNOTATION_DECORATOR_TYPES: ReadonlySet<string> = new Set([
  IMMUTABLE_NOTE_CALLER_NODE_TYPE,
  IMMUTABLE_VERSE_NODE_TYPE,
  ImmutableTypedTextNode.getType(),
  // A chapter in the views without editable markers: the same whole-node treatment as a verse.
  ImmutableChapterNode.getType(),
]);

/** Whether `node` is the text of an attribute display run — engine-owned display bytes, never
 * annotated content. */
export function $isAttributeDisplayRun(node: LexicalNode): boolean {
  return $isTextNode(node) && $getState(node, textTypeState) === "attribute";
}

/**
 * Whether `node` is the text an element owner's attribute display run is anchored after: a note's
 * editable caller (its `\cat` run follows it) or a chapter's `\c N` glyph text (its `\ca` run
 * follows it, and its `\cp` run follows that). Both runs are found beside the anchor, so an
 * anchor moved into a mark without its run reads as the run being missing, and the sync writes a
 * second one.
 */
export function $isElementOwnerRunAnchor(node: LexicalNode): boolean {
  if (!$isTextNode(node)) return false;
  let owner = node.getParent();
  while ($isTypedMarkNode(owner)) owner = owner.getParent();
  if ($isNoteNode(owner)) return $noteEditableCallerNode(owner)?.is(node) ?? false;
  if ($isChapterNode(owner)) return $chapterGlyphTextNode(owner)?.is(node) ?? false;
  return false;
}

/**
 * Whether `node` is a display-byte node an annotation is held ON rather than wrapped: a marker
 * glyph, an attribute run's text, a verse, a note's editable caller, a chapter's `\c N` glyph, an
 * unmatched closer, or a read-only glyph, caller, verse or chapter decorator. Never a separator —
 * the engine-owned whitespace between a marker and its content has no position of its own — and
 * never a milestone or an `AttributeRunNode` wrapper, which spell no bytes themselves (their run
 * pieces do).
 */
export function $isDisplayAnnotationCarrier(node: LexicalNode): boolean {
  if ($isDecoratorNode(node)) return DISPLAY_ANNOTATION_DECORATOR_TYPES.has(node.getType());
  if (!$isTextNode(node) || $isMarkerTrailingSeparator(node)) return false;
  return (
    $isMarkerNode(node) ||
    $isVerseNode(node) ||
    $isAttributeDisplayRun(node) ||
    $isElementOwnerRunAnchor(node) ||
    // An unmatched closer (`ImmutableUnmatchedNode`) is a `TextNode` subclass, not a decorator, so
    // the decorator-type set above cannot reach it.
    $isImmutableUnmatchedNode(node)
  );
}

/**
 * The bytes of carrier `node` an annotation can hold: all of a decorator (`[0, 0]`, the whole
 * node), or a text carrier without the whitespace at its edges — a glyph's own separator (the
 * space in `\v 3 `, around a caller, after a run opener), which has no position of its own.
 */
export function $carrierHoldableRange(node: LexicalNode): [number, number] {
  if (!$isTextNode(node)) return [0, 0];
  if ($isImmutableUnmatchedNode(node)) return [0, node.getTextContentSize()];
  const text = node.getTextContent();
  const lead = text.length - text.trimStart().length;
  if (lead === text.length) return [lead, lead];
  return [lead, text.trimEnd().length];
}

function sameAnnotation(a: DisplayAnnotation, type: string, id: string): boolean {
  return a.type === type && a.id === id;
}

/** A carrier's text now, and for a decorator the holdable bytes it stands for now. */
interface CarrierNow {
  text: string;
  bytes: string | undefined;
}

/** Whether `held` was measured against the bytes `now` stands for, however they are drawn. */
function sameBytes(held: DisplayAnnotations, now: CarrierNow): boolean {
  if (held.bytes === undefined || now.bytes === undefined) return held.basis === now.text;
  return held.bytes === now.bytes;
}

/**
 * `held`'s annotations re-measured against the carrier as it is `now`.
 *
 * - An edit of the bytes (a text carrier's text, or the bytes a decorator stands for, as a
 *   collaborator's renumber changes them) maps each range through a character alignment, dropping
 *   any with no byte left (see `mapRangeThroughEdit`). An undisplayed hold maps through the
 *   decorator's holdable bytes the same way.
 * - A change only in how a decorator draws the same bytes (a hidden caller `-` shown as `*` while
 *   its note is collapsed, a caller CSS draws) keeps every hold: a range still drawn maps onto
 *   where it is drawn now, and one not drawn is held whole meanwhile. The stored basis is kept, so
 *   the range is exact again once the bytes are drawn as before.
 */
function remapped(held: DisplayAnnotations, now: CarrierNow): DisplayAnnotation[] {
  const unchanged = sameBytes(held, now);
  if (held.basis === now.text && unchanged) return held.annotations;
  const alignment = alignCharacters(held.basis, now.text);
  const byteAlignment =
    unchanged || held.bytes === undefined || now.bytes === undefined
      ? undefined
      : alignCharacters(held.bytes, now.bytes);
  return held.annotations.flatMap((annotation) => {
    if (annotation.undisplayed) {
      if (!byteAlignment) return [annotation];
      const mapped = mapRangeThroughAlignment(byteAlignment, annotation.start, annotation.end);
      return mapped ? [{ ...annotation, start: mapped[0], end: mapped[1] }] : [];
    }
    if (annotation.start === annotation.end) return [annotation];
    if (held.basis === now.text) return [annotation];
    const mapped = mapRangeThroughAlignment(alignment, annotation.start, annotation.end);
    if (mapped) return [{ ...annotation, start: mapped[0], end: mapped[1] }];
    return unchanged ? [{ ...annotation, start: 0, end: 0 }] : [];
  });
}

/** The text a carrier's offsets measure: a text's own, or what a decorator renders. */
function $carrierText(node: LexicalNode): string {
  return $isDecoratorNode(node) ? $decoratorRenderedText(node) : node.getTextContent();
}

function $carrierNow(node: LexicalNode): CarrierNow {
  return {
    text: $carrierText(node),
    bytes: $isDecoratorNode(node) ? $decoratorHoldableText(node) : undefined,
  };
}

/** The annotations `node` holds, measured against its CURRENT text. Read-only. */
export function $displayAnnotationsOf(node: LexicalNode): DisplayAnnotation[] {
  const held = $getState(node, displayAnnotationsState);
  if (!held) return [];
  return remapped(held, $carrierNow(node));
}

function $writeAnnotations(node: LexicalNode, annotations: DisplayAnnotation[]): void {
  if (annotations.length === 0) {
    $setState(node, displayAnnotationsState, undefined);
    return;
  }
  const { text, bytes } = $carrierNow(node);
  $setState(
    node,
    displayAnnotationsState,
    bytes === undefined ? { basis: text, annotations } : { basis: text, bytes, annotations },
  );
}

/** Reads the holdable bytes a decorator stands for; see {@link setDecoratorHoldableTextReader}. */
export type DecoratorHoldableTextReader = (decorator: LexicalNode) => string;

/** What a decorator displays without edge whitespace; what it renders, for one whose own text is
 * empty (a chapter number). */
function $displayedHoldableText(decorator: LexicalNode): string {
  const own = $decoratorDisplayText(decorator).trim();
  if (own) return own;
  const rendered = $decoratorRenderedText(decorator);
  const [start, end] = trimmedTextRange(rendered);
  return rendered.slice(start, end);
}

let holdableTextReader: DecoratorHoldableTextReader = $displayedHoldableText;

/**
 * Set how the holdable bytes a decorator stands for are read: the bytes positions inside it count
 * in, and an undisplayed hold indexes. Those bytes depend on display structure this package does
 * not know (a verse's `\va` tokens, an empty span's attributes), so the package that does sets
 * it once; until then, a decorator stands for what it displays, without edge whitespace. The
 * reader must be a pure function of the node. `undefined` restores that default.
 */
export function setDecoratorHoldableTextReader(
  reader: DecoratorHoldableTextReader | undefined,
): void {
  holdableTextReader = reader ?? $displayedHoldableText;
}

/** The holdable bytes `decorator` stands for ({@link setDecoratorHoldableTextReader}). */
export function $decoratorHoldableText(decorator: LexicalNode): string {
  return holdableTextReader(decorator);
}

/**
 * Hold `type`/`id` on `node` over `[start, end)` (`0, 0` for a whole decorator), merged with any
 * range of the same annotation it overlaps or touches. `undisplayed` holds a decorator for bytes it
 * does not show, `[start, end)` of its holdable bytes (see `DisplayAnnotation`), merged with any
 * such hold of the same annotation; a displayed range of the same annotation on the node replaces
 * it. Mutating: call inside `editor.update()`.
 */
export function $addDisplayAnnotation(
  node: LexicalNode,
  type: string,
  id: string,
  start: number,
  end: number,
  options: { undisplayed?: boolean } = {},
): void {
  const held = $displayAnnotationsOf(node);
  if (options.undisplayed) {
    const same = held.filter((annotation) => sameAnnotation(annotation, type, id));
    if (same.some((annotation) => !annotation.undisplayed)) return;
    const merged: DisplayAnnotation = {
      type,
      id,
      start: Math.min(start, ...same.map((annotation) => annotation.start)),
      end: Math.max(end, ...same.map((annotation) => annotation.end)),
      undisplayed: true,
    };
    const others = held.filter((annotation) => !sameAnnotation(annotation, type, id));
    $writeAnnotations(node, [...others, merged]);
    return;
  }
  let merged: DisplayAnnotation = { type, id, start, end };
  const others: DisplayAnnotation[] = [];
  for (const annotation of held) {
    if (sameAnnotation(annotation, type, id) && annotation.undisplayed) continue;
    if (
      sameAnnotation(annotation, type, id) &&
      annotation.start <= merged.end &&
      merged.start <= annotation.end
    )
      merged = {
        ...merged,
        start: Math.min(merged.start, annotation.start),
        end: Math.max(merged.end, annotation.end),
      };
    else others.push(annotation);
  }
  $writeAnnotations(node, [...others, merged]);
}

/** Drop every range of `type`/`id` from `node`; `true` when there was one. Mutating. */
export function $removeDisplayAnnotation(node: LexicalNode, type: string, id: string): boolean {
  const annotations = $displayAnnotationsOf(node);
  const kept = annotations.filter((annotation) => !sameAnnotation(annotation, type, id));
  if (kept.length === annotations.length) return false;
  $writeAnnotations(node, kept);
  return true;
}

/** The text a display-byte node shows: its own text, except that a collapsed caller (a decorator
 * whose own text is empty) shows its note's caller. */
export function $decoratorDisplayText(node: LexicalNode): string {
  if (node.getType() !== IMMUTABLE_NOTE_CALLER_NODE_TYPE) return node.getTextContent();
  const note = node.getParent();
  return $isNoteNode(note) ? note.getCaller() : "";
}

/** A decorator that reports the text it shows on screen. */
interface RenderedTextSource {
  getRenderedText(): unknown;
}

function hasRenderedText(node: LexicalNode): node is LexicalNode & RenderedTextSource {
  return "getRenderedText" in node && typeof node.getRenderedText === "function";
}

/**
 * The text a display-byte decorator shows on screen — what its element's DOM text reads once
 * rendered. Empty for a decorator whose glyph CSS generates (a collapsed note's `+` caller) and for
 * any other node.
 */
export function $decoratorRenderedText(node: LexicalNode): string {
  if (!$isDecoratorNode(node) || !hasRenderedText(node)) return "";
  const text = node.getRenderedText();
  return typeof text === "string" ? text : "";
}

/** Whitespace, or the zero-width space a verse number is padded with: bytes at the edge of a
 * glyph that name nothing. */
function isEdgeFiller(char: string): boolean {
  return char === ZWSP || /\s/u.test(char);
}

/** The `[start, end)` of `text` without the whitespace and zero-width spaces at its edges;
 * `[0, 0]` when nothing else is left. */
export function trimmedTextRange(text: string): [number, number] {
  let start = 0;
  while (start < text.length && isEdgeFiller(text[start])) start++;
  if (start === text.length) return [0, 0];
  let end = text.length;
  while (end > start && isEdgeFiller(text[end - 1])) end--;
  return [start, end];
}

/**
 * The bytes `annotation` holds on `node`: its range of the node's text, or of what a decorator
 * renders; for a hold on bytes a decorator does not show, those bytes; for a decorator held whole,
 * all it renders without its edge whitespace, or the glyph it shows when it renders no text (a
 * collapsed note's caller).
 */
export function $coveredDisplayText(node: LexicalNode, annotation: DisplayAnnotation): string {
  if (annotation.undisplayed)
    return $decoratorHoldableText(node).slice(annotation.start, annotation.end);
  if (annotation.start !== annotation.end)
    return $carrierText(node).slice(annotation.start, annotation.end);
  const rendered = $decoratorRenderedText(node);
  const [start, end] = trimmedTextRange(rendered);
  return end > start ? rendered.slice(start, end) : $decoratorDisplayText(node);
}

/** The ids of `type` whose range on `node` holds the caret offset `offset`. */
export function $displayAnnotationIdsAt(node: LexicalNode, type: string, offset: number): string[] {
  return $displayAnnotationsOf(node)
    .filter(
      (annotation) =>
        annotation.type === type &&
        (annotation.undisplayed ||
          annotation.start === annotation.end ||
          (annotation.start <= offset && offset <= annotation.end)),
    )
    .map((annotation) => annotation.id);
}

/**
 * Re-measure `node`'s annotations against its current text (a decorator's rendered text) and store
 * that text as their basis, so a range follows its bytes through typing, a sync rewrite, a split or
 * a collaborator's renumber, and a range its bytes left stays dropped. Idempotent. The body of the
 * node transform `registerDisplayAnnotationBasis` registers; mutating.
 */
export function $syncDisplayAnnotationBasis(node: LexicalNode): void {
  const held = $getState(node, displayAnnotationsState);
  if (!held) return;
  const now = $carrierNow(node);
  // Only drawn differently: the stored basis keeps each range exact for when it is drawn as before.
  if (sameBytes(held, now)) return;
  $writeAnnotations(node, remapped(held, now));
}

/** Host callbacks for an annotation held on display bytes, which has no mark node to keep them. */
export interface DisplayAnnotationCallbacks {
  onClick?: TypedMarkOnClick;
  onRemove?: TypedMarkOnRemove;
  onMouseEnter?: TypedMarkOnMouseEnter;
  onMouseLeave?: TypedMarkOnMouseLeave;
}

/** The host callbacks registered for an annotation display bytes hold. */
export type DisplayAnnotationRegistration = DisplayAnnotationCallbacks;

const registrations = new WeakMap<LexicalEditor, Map<string, DisplayAnnotationRegistration>>();

/** A type or id may itself contain the NUL character a delimiter join would use, so the key is
 * JSON, not a joined string. */
function registrationKey(type: string, id: string): string {
  return JSON.stringify([type, id]);
}

/**
 * Record `type`/`id` for the active editor: callbacks given here replace the ones held. Call
 * inside an update or read of the editor.
 */
export function $registerDisplayAnnotation(
  type: string,
  id: string,
  callbacks: DisplayAnnotationCallbacks,
): void {
  const editor = $getEditor();
  let byKey = registrations.get(editor);
  if (!byKey) {
    byKey = new Map();
    registrations.set(editor, byKey);
  }
  const key = registrationKey(type, id);
  const previous = byKey.get(key);
  const defined = Object.fromEntries(
    Object.entries(callbacks).filter(([, callback]) => callback !== undefined),
  );
  byKey.set(key, { ...previous, ...defined });
}

export function getDisplayAnnotationRegistration(
  editor: LexicalEditor,
  type: string,
  id: string,
): DisplayAnnotationRegistration | undefined {
  return registrations.get(editor)?.get(registrationKey(type, id));
}

export function deleteDisplayAnnotationRegistration(
  editor: LexicalEditor,
  type: string,
  id: string,
): void {
  registrations.get(editor)?.delete(registrationKey(type, id));
}

/**
 * Keep every carrier's ranges measured against its current text, so an annotation follows its
 * bytes the way a mark follows its text. `TextNode` covers attribute runs, a note's caller and a
 * chapter's glyph; `MarkerNode` and `VerseNode` register their own transforms, as do the
 * decorator carriers defined here and any in `decoratorKlasses` (those `shared-react` defines).
 * Returns the unregister function.
 *
 * Registering a transform marks every existing node of the class dirty once, so each mount runs
 * one extra pass over them (a decorator's is decorated again); `$syncDisplayAnnotationBasis`
 * reads no state for a node without carrier state and writes nothing, so the pass costs a tree
 * walk and nothing more.
 */
export function registerDisplayAnnotationBasis(
  editor: LexicalEditor,
  decoratorKlasses: Klass<LexicalNode>[] = [],
): () => void {
  const klasses: Klass<LexicalNode>[] = [
    TextNode,
    MarkerNode,
    VerseNode,
    ImmutableTypedTextNode,
    ImmutableChapterNode,
    ...decoratorKlasses,
  ];
  const unregisters = klasses
    .filter((klass) => editor.hasNodes([klass]))
    .map((klass) => editor.registerNodeTransform(klass, $syncDisplayAnnotationBasis));
  return () => unregisters.forEach((unregister) => unregister());
}
