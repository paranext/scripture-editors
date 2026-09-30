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

/** `held`'s annotations re-measured against `text` through a character alignment, dropping any
 * with no byte left (see `mapRangeThroughEdit`). */
function remapped(held: DisplayAnnotations, text: string): DisplayAnnotation[] {
  if (held.basis === text) return held.annotations;
  const alignment = alignCharacters(held.basis, text);
  return held.annotations.flatMap((annotation) => {
    if (annotation.start === annotation.end) return [annotation];
    const mapped = mapRangeThroughAlignment(alignment, annotation.start, annotation.end);
    return mapped ? [{ ...annotation, start: mapped[0], end: mapped[1] }] : [];
  });
}

/** The annotations `node` holds, measured against its CURRENT text. Read-only. */
export function $displayAnnotationsOf(node: LexicalNode): DisplayAnnotation[] {
  const held = $getState(node, displayAnnotationsState);
  if (!held) return [];
  return remapped(held, node.getTextContent());
}

function $writeAnnotations(node: LexicalNode, annotations: DisplayAnnotation[]): void {
  $setState(
    node,
    displayAnnotationsState,
    annotations.length > 0 ? { basis: node.getTextContent(), annotations } : undefined,
  );
}

/**
 * Hold `type`/`id` on `node` over `[start, end)` (`0, 0` for a whole decorator), merged with any
 * range of the same annotation it overlaps or touches. Mutating: call inside `editor.update()`.
 */
export function $addDisplayAnnotation(
  node: LexicalNode,
  type: string,
  id: string,
  start: number,
  end: number,
): void {
  let merged: DisplayAnnotation = { type, id, start, end };
  const others: DisplayAnnotation[] = [];
  for (const annotation of $displayAnnotationsOf(node)) {
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

/** The bytes `annotation` covers on `node` — the node's whole text for a decorator. */
export function $coveredDisplayText(node: LexicalNode, annotation: DisplayAnnotation): string {
  const text = node.getTextContent();
  return annotation.start === annotation.end ? text : text.slice(annotation.start, annotation.end);
}

/** The ids of `type` whose range on `node` holds the caret offset `offset`. */
export function $displayAnnotationIdsAt(node: LexicalNode, type: string, offset: number): string[] {
  return $displayAnnotationsOf(node)
    .filter(
      (annotation) =>
        annotation.type === type &&
        (annotation.start === annotation.end ||
          (annotation.start <= offset && offset <= annotation.end)),
    )
    .map((annotation) => annotation.id);
}

/**
 * Re-measure `node`'s annotations against its current text and store that text as their basis, so
 * a range follows its bytes through typing, a sync rewrite, or a split. Idempotent. The body of the
 * node transform `registerDisplayAnnotationBasis` registers; mutating.
 */
export function $syncDisplayAnnotationBasis(node: TextNode): void {
  const held = $getState(node, displayAnnotationsState);
  if (!held || held.basis === node.getTextContent()) return;
  $writeAnnotations(node, remapped(held, node.getTextContent()));
}

/** Host callbacks for an annotation held on display bytes, which has no mark node to keep them. */
export interface DisplayAnnotationCallbacks {
  onClick?: TypedMarkOnClick;
  onRemove?: TypedMarkOnRemove;
  onMouseEnter?: TypedMarkOnMouseEnter;
  onMouseLeave?: TypedMarkOnMouseLeave;
}

/** An annotation's registration: its callbacks, and whether a `TypedMarkNode` ever held it — an
 * annotation that did reports its removal through its marks alone. */
export interface DisplayAnnotationRegistration extends DisplayAnnotationCallbacks {
  hadMarks: boolean;
}

const registrations = new WeakMap<LexicalEditor, Map<string, DisplayAnnotationRegistration>>();

function registrationKey(type: string, id: string): string {
  return `${type}\u0000${id}`;
}

/**
 * Record `type`/`id` for the active editor: callbacks given here replace the ones held, and
 * `heldMark` latches `hadMarks`. Call inside an update or read of the editor.
 */
export function $registerDisplayAnnotation(
  type: string,
  id: string,
  callbacks: DisplayAnnotationCallbacks,
  heldMark: boolean,
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
  byKey.set(key, {
    ...previous,
    ...defined,
    hadMarks: (previous?.hadMarks ?? false) || heldMark,
  });
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
 * chapter's glyph; `MarkerNode` and `VerseNode` register their own transforms. Returns the
 * unregister function.
 */
export function registerDisplayAnnotationBasis(editor: LexicalEditor): () => void {
  const klasses: Klass<TextNode>[] = [TextNode, MarkerNode, VerseNode];
  const unregisters = klasses
    .filter((klass) => editor.hasNodes([klass]))
    .map((klass) => editor.registerNodeTransform(klass, $syncDisplayAnnotationBasis));
  return () => unregisters.forEach((unregister) => unregister());
}
