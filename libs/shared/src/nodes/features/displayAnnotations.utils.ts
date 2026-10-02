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

/**
 * `held`'s ranges re-measured against `basis`, the carrier's storage text now, through a character
 * alignment, dropping any with no byte left (see `mapRangeThroughEdit`). A whole-decorator hold
 * (`[0, 0]`) stays whole.
 */
function remapped(held: DisplayAnnotations, basis: string): DisplayAnnotation[] {
  if (held.basis === basis) return held.annotations;
  const alignment = alignCharacters(held.basis, basis);
  return held.annotations.flatMap((annotation) => {
    if (annotation.start === annotation.end) return [annotation];
    const mapped = mapRangeThroughAlignment(alignment, annotation.start, annotation.end);
    return mapped ? [{ ...annotation, start: mapped[0], end: mapped[1] }] : [];
  });
}

/**
 * The text a carrier's stored ranges index: a text's own, or the holdable bytes a decorator stands
 * for ({@link $decoratorHoldableText}). A decorator's holds are kept in its bytes, not in what it
 * renders, so a change only in how it draws them (a hidden caller `-` drawn as `*` while its note
 * is collapsed) never moves or widens one, whatever is written meanwhile.
 */
function $storageText(node: LexicalNode): string {
  return $isDecoratorNode(node) ? $decoratorHoldableText(node) : node.getTextContent();
}

/** The text a carrier's offsets measure as read: a text's own, or what a decorator renders. */
function $carrierText(node: LexicalNode): string {
  return $isDecoratorNode(node) ? $decoratorRenderedText(node) : node.getTextContent();
}

/** `node`'s holds as stored, measured against its current storage text ({@link $storageText}). */
function $storedAnnotations(node: LexicalNode): DisplayAnnotation[] {
  const held = $getState(node, displayAnnotationsState);
  return held ? remapped(held, $storageText(node)) : [];
}

/**
 * A decorator's hold of holdable bytes `[start, end)` as it is drawn now: the rendered characters
 * of the bytes it shows; whole (`[0, 0]`) when one of them is drawn without text (a caller CSS
 * draws, a hidden caller drawn as `*`); and, when it shows none of them, the same holdable range
 * marked `undisplayed`.
 */
function $drawnHold(node: LexicalNode, annotation: DisplayAnnotation): DisplayAnnotation {
  if (annotation.start === annotation.end) return annotation;
  let start: number | undefined;
  let end: number | undefined;
  for (let index = annotation.start; index < annotation.end; index++) {
    const offset = bytesReader.renderedOffset(node, index);
    if (offset === "drawn") return { type: annotation.type, id: annotation.id, start: 0, end: 0 };
    if (offset === undefined) continue;
    start = Math.min(start ?? offset, offset);
    end = Math.max(end ?? offset + 1, offset + 1);
  }
  if (start === undefined || end === undefined) return { ...annotation, undisplayed: true };
  return { type: annotation.type, id: annotation.id, start, end };
}

/**
 * The annotations `node` holds, measured against its CURRENT text — for a decorator, against what
 * it renders now ({@link $drawnHold}). Read-only.
 */
export function $displayAnnotationsOf(node: LexicalNode): DisplayAnnotation[] {
  const stored = $storedAnnotations(node);
  if (!$isDecoratorNode(node)) return stored;
  return stored.map((annotation) => $drawnHold(node, annotation));
}

/** Store `annotations` on `node` in the order their bytes come (a whole hold first), so a reader
 * that joins them gets them in document order. */
function $writeAnnotations(node: LexicalNode, annotations: DisplayAnnotation[]): void {
  const ordered = [...annotations].sort((a, b) => a.start - b.start || a.end - b.end);
  $setState(
    node,
    displayAnnotationsState,
    ordered.length > 0 ? { basis: $storageText(node), annotations: ordered } : undefined,
  );
}

/** How the bytes a decorator stands for are read; see {@link setDecoratorBytesReader}. */
export interface DecoratorBytesReader {
  /** The holdable bytes the decorator stands for: the bytes positions inside it count in. */
  holdableText(decorator: LexicalNode): string;
  /** Where holdable byte `index` renders: an offset into the decorator's rendered text, `"drawn"`
   * when it is shown but not as text, or `undefined` when the decorator does not show it. */
  renderedOffset(decorator: LexicalNode, index: number): number | "drawn" | undefined;
}

/** What a decorator displays without edge whitespace; what it renders, for one whose own text is
 * empty (a chapter number). */
function $displayedHoldableText(decorator: LexicalNode): string {
  const own = $decoratorDisplayText(decorator).trim();
  if (own) return own;
  const rendered = $decoratorRenderedText(decorator);
  const [start, end] = trimmedTextRange(rendered);
  return rendered.slice(start, end);
}

/** A decorator stands for what it displays, drawn where its rendered text spells it. */
const displayedBytesReader: DecoratorBytesReader = {
  holdableText: $displayedHoldableText,
  renderedOffset: (decorator, index) => {
    const holdable = $displayedHoldableText(decorator);
    if (index >= holdable.length) return undefined;
    const rendered = $decoratorRenderedText(decorator);
    const [lead] = trimmedTextRange(rendered);
    return rendered.slice(lead, lead + holdable.length) === holdable ? lead + index : "drawn";
  },
};

let bytesReader: DecoratorBytesReader = displayedBytesReader;

/**
 * Set how the bytes a decorator stands for are read and where each is drawn. They depend on display
 * structure this package does not know (a verse's `\va` tokens, an empty span's attributes), so the
 * package that does sets it once; until then, a decorator stands for what it displays, without edge
 * whitespace. The reader must be a pure function of the node. `undefined` restores that default.
 */
export function setDecoratorBytesReader(reader: DecoratorBytesReader | undefined): void {
  bytesReader = reader ?? displayedBytesReader;
}

/** The holdable bytes `decorator` stands for ({@link setDecoratorBytesReader}). */
export function $decoratorHoldableText(decorator: LexicalNode): string {
  return bytesReader.holdableText(decorator);
}

/**
 * Hold `type`/`id` on `node` over `[start, end)`, merged with any range of the same annotation it
 * overlaps or touches. On a decorator, `[start, end)` index the holdable bytes it stands for
 * ({@link $decoratorHoldableText}), shown or not, and `0, 0` holds it whole. Every other hold on
 * the node is kept exactly as stored. Mutating: call inside `editor.update()`.
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
  for (const annotation of $storedAnnotations(node)) {
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
  const annotations = $storedAnnotations(node);
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
 * The bytes `annotation` (as {@link $displayAnnotationsOf} reads it) holds on `node`: its range of
 * the node's text, or of what a decorator renders; for a hold on bytes a decorator does not show,
 * those bytes; for a decorator held whole, the bytes it stands for (a collapsed note's caller, not
 * the `*` or nothing drawn for it), or what it renders when it stands for none.
 */
export function $coveredDisplayText(node: LexicalNode, annotation: DisplayAnnotation): string {
  if (annotation.undisplayed)
    return $decoratorHoldableText(node).slice(annotation.start, annotation.end);
  if (annotation.start !== annotation.end)
    return $carrierText(node).slice(annotation.start, annotation.end);
  const holdable = $decoratorHoldableText(node);
  if (holdable) return holdable;
  const rendered = $decoratorRenderedText(node);
  const [start, end] = trimmedTextRange(rendered);
  return rendered.slice(start, end);
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
 * Re-measure `node`'s annotations against its current storage text (a decorator's holdable bytes)
 * and store that text as their basis, so a range follows its bytes through typing, a sync rewrite, a split or
 * a collaborator's renumber, and a range its bytes left stays dropped. Idempotent. The body of the
 * node transform `registerDisplayAnnotationBasis` registers; mutating.
 */
export function $syncDisplayAnnotationBasis(node: LexicalNode): void {
  const held = $getState(node, displayAnnotationsState);
  if (!held || held.basis === $storageText(node)) return;
  $writeAnnotations(node, remapped(held, $storageText(node)));
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
