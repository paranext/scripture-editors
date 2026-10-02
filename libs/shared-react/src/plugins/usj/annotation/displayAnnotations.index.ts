/**
 * The per-editor index of annotations held on display-byte nodes (`displayAnnotationsState`):
 * which nodes hold each `type`/`id`, their painting, their click and hover callbacks, and the
 * one-time "destroyed" report for an annotation whose last holder — a mark or a display byte —
 * left without the host hearing of it. One acquisition per editor, reference-counted, because both
 * `AnnotationPlugin` and `CommentPlugin` need it.
 */

import { ImmutableNoteCallerNode } from "../../../nodes/usj/ImmutableNoteCallerNode";
import { ImmutableVerseNode } from "../../../nodes/usj/ImmutableVerseNode";
import { $renderedOffsetOf } from "./decoratorHolds.utils";
import { $readDecoratorHoldableText } from "./selection.utils";
import {
  AnnotationHighlighter,
  getHighlightApi,
  LeafHighlight,
  rangeContainsPoint,
  rangeOverText,
} from "./annotationHighlights";
import { $paintIntervalsOf, $paintText, leafPaint, PaintIntervals } from "./annotationPaint.utils";
import { addClassNamesToElement, mergeRegister, removeClassNamesFromElement } from "@lexical/utils";
import { useLayoutEffect, useMemo, useRef } from "react";
import {
  $getNearestNodeFromDOMNode,
  $getNodeByKey,
  COMMAND_PRIORITY_CRITICAL,
  HISTORIC_TAG,
  Klass,
  LexicalEditor,
  LexicalNode,
  NodeKey,
  NodeMutation,
  SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
  TextNode,
  $isElementNode,
  $setState,
} from "lexical";
import {
  $coveredDisplayText,
  $displayAnnotationsOf,
  $isTypedMarkNode,
  deleteDisplayAnnotationRegistration,
  DisplayAnnotation,
  displayAnnotationsState,
  EXTERNAL_USJ_MUTATION_TAG,
  getDisplayAnnotationRegistration,
  ImmutableChapterNode,
  ImmutableTypedTextNode,
  ImmutableUnmatchedNode,
  MarkerNode,
  registerDisplayAnnotationBasis,
  setDecoratorBytesReader,
  clearTypedMarkRemovalSilences,
  forgetTypedMarkCallbacks,
  listenForTypedMarkRemovalReports,
  setTypedMarkRemovalSilenced,
  takeTypedMarkRemovalReports,
  TypedIDs,
  typedMarkClassNames,
  TypedMarkNode,
  TypedMarkOnRemove,
  VerseNode,
} from "shared";

/** The class every display-byte node holding an annotation is painted with. */
export const DISPLAY_ANNOTATION_CLASS_NAME = "display-annotation";

export interface DisplayAnnotationIndex {
  /** The keys of the display-byte nodes holding `type`/`id`. */
  keysFor(type: string, id: string): ReadonlySet<NodeKey>;
  /** Record that the host set `type`/`id` in the current update, so the loss of its last holder
   * is reported afresh even if an earlier range's was. Call inside the update. */
  noteSet(type: string, id: string): void;
  /** Record that the host has just been told `type`/`id` was removed, in the current update. */
  noteReported(type: string, id: string): void;
  /** Whether the host has been told `type`/`id` was removed since it was last set — by a mark or
   * by this index, in an earlier commit or earlier in the current update. */
  hasReported(type: string, id: string): boolean;
  /** Add (`on`) or remove the state class `name` (such as `selected`) to everything `type`/`id`
   * paints outside its marks, which style themselves. Call outside an update. */
  setStateClass(type: string, id: string, name: string, on: boolean): void;
  /** DOM ranges over everything `type`/`id` paints — its marks and the exact parts of its display
   * bytes — in document order. Call outside an update. */
  rangesFor(type: string, id: string): Range[];
}

/** Every node class a carrier can be (`$isDisplayAnnotationCarrier`). */
const CARRIER_KLASSES: Klass<LexicalNode>[] = [
  TextNode,
  MarkerNode,
  VerseNode,
  ImmutableTypedTextNode,
  ImmutableNoteCallerNode,
  ImmutableVerseNode,
  ImmutableChapterNode,
  ImmutableUnmatchedNode,
];

const EMPTY: ReadonlySet<NodeKey> = new Set();

function indexKey(type: string, id: string): string {
  return JSON.stringify([type, id]);
}

function isTypeIdPair(value: unknown): value is [string, string] {
  return (
    Array.isArray(value) &&
    value.length === 2 &&
    typeof value[0] === "string" &&
    typeof value[1] === "string"
  );
}

/** The `type`/`id` an {@link indexKey} was built from. A type or id may itself contain the NUL
 * character a naive delimiter join would use, so the key is JSON, not a joined string. */
function parseIndexKey(key: string): [string, string] {
  const parsed: unknown = JSON.parse(key);
  if (!isTypeIdPair(parsed)) throw new Error(`not an annotation index key: ${key}`);
  return parsed;
}

/** Remove `displayAnnotationsState` from `node` and its whole subtree. Mutating. */
function $stripDisplayAnnotations(node: LexicalNode): void {
  $setState(node, displayAnnotationsState, undefined);
  if ($isElementNode(node)) node.getChildren().forEach($stripDisplayAnnotations);
}

interface Entry {
  index: DisplayAnnotationIndex;
  references: number;
  unregister: () => void;
}

const entries = new WeakMap<LexicalEditor, Entry>();

function createIndex(editor: LexicalEditor): Entry {
  setDecoratorBytesReader({
    holdableText: $readDecoratorHoldableText,
    renderedOffset: $renderedOffsetOf,
  });
  const keysByAnnotation = new Map<string, Set<NodeKey>>();
  const annotationsByKey = new Map<NodeKey, DisplayAnnotation[]>();
  /** The marks holding each annotation, and the annotations each mark holds. */
  const marksByAnnotation = new Map<string, Set<NodeKey>>();
  const annotationsByMark = new Map<NodeKey, string[]>();
  /** A mark's `onRemove` per annotation, which an annotation held only by marks has nowhere else. */
  const markOnRemove = new Map<string, TypedMarkOnRemove>();
  /** Each annotation's covered text: every mark's and carrier's text joined in document order, as
   * of the last commit that touched a holder while one was still attached. */
  const coveredText = new Map<string, string>();
  // The maps above keep an entry for an annotation whose holders an undo took away, for the redo
  // that brings them back; the history stack gives no word when that redo is gone for good, so
  // they hold at most one entry per annotation set since the last `setUsj` load, which clears
  // them.
  /** Annotations whose removal the host has heard of since they were last set, from a mark or from
   * here. Cleared by a `setUsj` load. */
  const reported = new Set<string>();
  /** Annotations whose removal the host heard of in the commit being made. */
  let heardThisCommit = new Set<string>();
  /** The marks that left the document in the commit being made, per annotation they held. */
  let droppedMarks = new Map<string, NodeKey[]>();
  const painted = new WeakMap<HTMLElement, string[]>();
  const wired = new WeakSet<HTMLElement>();
  /** Removes every pointer listener this index added once it is released, so an index acquired
   * later for the same editor is the only one dispatching. */
  const listeners = new AbortController();
  /** The annotations each wired element's pointer is over now, with the bytes each covers. */
  const hovered = new WeakMap<
    HTMLElement,
    Map<string, { annotation: DisplayAnnotation; text: string }>
  >();
  /** What each annotation paints outside its marks, per leaf ({@link $paintIntervalsOf}). */
  const paintByAnnotation = new Map<string, Map<NodeKey, PaintIntervals>>();
  /** The annotations painting each leaf. */
  const annotationsByLeaf = new Map<NodeKey, Set<string>>();
  /** The element each painted leaf was last painted on, to repaint one Lexical re-creates. */
  const leafElement = new Map<NodeKey, HTMLElement>();
  /** The leaves whose element is painted whole. */
  const wholeLeaves = new Set<NodeKey>();
  /** Extra class names the host's state adds to an annotation's painting (`selected`). */
  const stateClasses = new Map<string, Set<string>>();
  /** Leaves whose element did not render all the text a piece paints (a decorator's portal
   * renders after the commit that created it). */
  const incomplete = new Set<NodeKey>();
  /** Watches the editable content for text that changes outside a commit, so highlights move
   * with it. */
  let contentObserver: MutationObserver | undefined;
  /** Set once the index is released: nothing paints after that. */
  let disposed = false;
  const highlightApi = getHighlightApi();
  const highlighter = highlightApi
    ? new AnnotationHighlighter(highlightApi, () => editor.getRootElement()?.parentElement ?? null)
    : undefined;
  let emptied = new Set<string>();
  const theme = editor._config.theme;

  function holderCount(annotationKey: string): number {
    return (
      (keysByAnnotation.get(annotationKey)?.size ?? 0) +
      (marksByAnnotation.get(annotationKey)?.size ?? 0)
    );
  }

  function addHolder(holders: Map<string, Set<NodeKey>>, annotationKey: string, key: NodeKey) {
    let keys = holders.get(annotationKey);
    if (!keys) holders.set(annotationKey, (keys = new Set()));
    keys.add(key);
  }

  function dropHolder(holders: Map<string, Set<NodeKey>>, annotationKey: string, key: NodeKey) {
    const keys = holders.get(annotationKey);
    if (!keys?.delete(key)) return;
    if (keys.size === 0) holders.delete(annotationKey);
    if (holderCount(annotationKey) === 0) emptied.add(annotationKey);
  }

  /** Re-note the covered text of every annotation `mark` holds, now that what it holds changed. */
  function $noteMarkText(mark: TypedMarkNode): void {
    for (const [type, ids] of Object.entries(mark.getTypedIDs()))
      for (const id of ids) $noteCoveredText(indexKey(type, id), type, id);
  }

  /**
   * Note `type`/`id`'s covered text as it is now: every mark and carrier still holding it, in
   * document order, each read for its own text and joined. Nothing is noted while nothing holds
   * it, so the report of its last holder's loss names what the holders covered before they left.
   */
  function $noteCoveredText(annotationKey: string, type: string, id: string): void {
    const keys = new Set([
      ...(marksByAnnotation.get(annotationKey) ?? []),
      ...(keysByAnnotation.get(annotationKey) ?? []),
    ]);
    const holders = Array.from(keys, (key) => $getNodeByKey(key)).filter(
      (node): node is LexicalNode =>
        node !== null &&
        node.isAttached() &&
        // A holder inside another holder is already in that one's text.
        !node.getParents().some((parent) => keys.has(parent.getKey())),
    );
    if (holders.length === 0) return;
    holders.sort((a, b) => (a.isBefore(b) ? -1 : 1));
    const text = holders
      .map((node) => {
        if ($isTypedMarkNode(node)) return node.getTextContent();
        const annotation = $displayAnnotationsOf(node).find(
          (candidate) => candidate.type === type && candidate.id === id,
        );
        return annotation ? $coveredDisplayText(node, annotation) : "";
      })
      .join("");
    coveredText.set(annotationKey, text);
  }

  /** Whether pointer `event` on leaf `key` falls on the part annotation `annotationKey` paints
   * there — anywhere on an element painted whole. Never for an annotation that paints nothing
   * there, such as one held only for bytes a decorator does not show. */
  function hits(key: NodeKey, annotationKey: string, event: MouseEvent): boolean {
    if (!annotationsByLeaf.get(key)?.has(annotationKey)) return false;
    if (wholeLeaves.has(key)) return true;
    return (highlighter?.leafHighlights(key) ?? []).some(
      (piece) =>
        piece.annotations.includes(annotationKey) &&
        rangeContainsPoint(piece.range, event.clientX, event.clientY),
    );
  }

  /** The annotations `node` holds that `event` points at, each with the bytes it covers there. */
  function $pointedAt(
    node: LexicalNode,
    event: MouseEvent,
  ): Map<string, { annotation: DisplayAnnotation; text: string }> {
    const pointed = new Map<string, { annotation: DisplayAnnotation; text: string }>();
    for (const annotation of $displayAnnotationsOf(node)) {
      const annotationKey = indexKey(annotation.type, annotation.id);
      if (pointed.has(annotationKey) || !hits(node.getKey(), annotationKey, event)) continue;
      pointed.set(annotationKey, { annotation, text: $coveredDisplayText(node, annotation) });
    }
    return pointed;
  }

  function dispatch(element: HTMLElement, event: MouseEvent, pick: "onClick" | "move" | "leave") {
    // `$getNearestNodeFromDOMNode` looks the element up in the ACTIVE editor, so the read names it.
    editor.getEditorState().read(
      () => {
        const node = $getNearestNodeFromDOMNode(element);
        if (!node) return;
        const pointed = pick === "leave" ? new Map() : $pointedAt(node, event);
        const call = (
          name: "onClick" | "onMouseEnter" | "onMouseLeave",
          { annotation, text }: { annotation: DisplayAnnotation; text: string },
        ) =>
          getDisplayAnnotationRegistration(editor, annotation.type, annotation.id)?.[name]?.(
            event,
            annotation.type,
            annotation.id,
            text,
          );
        if (pick === "onClick") {
          pointed.forEach((target) => call("onClick", target));
          return;
        }
        // Enter and leave per annotation, as the pointer moves onto and off the part it paints.
        const before = hovered.get(element) ?? new Map();
        for (const [annotationKey, target] of before)
          if (!pointed.has(annotationKey)) call("onMouseLeave", target);
        for (const [annotationKey, target] of pointed)
          if (!before.has(annotationKey)) call("onMouseEnter", target);
        hovered.set(element, pointed);
      },
      { editor },
    );
  }

  /** The class names an element or highlight painted by `annotationKeys` gets. */
  function classNamesFor(annotationKeys: Iterable<string>): string[] {
    const typedIds: TypedIDs = {};
    const states = new Set<string>();
    for (const annotationKey of annotationKeys) {
      const [type, id] = parseIndexKey(annotationKey);
      const ids = (typedIds[type] ??= []);
      if (!ids.includes(id)) ids.push(id);
      stateClasses.get(annotationKey)?.forEach((name) => states.add(name));
    }
    if (Object.keys(typedIds).length === 0) return [];
    // Split into tokens as `addClassNamesToElement` does for a `<mark>`: an id or a theme name
    // may hold whitespace, and `painted` must record exactly the tokens that were added.
    return [
      ...typedMarkClassNames(theme, typedIds),
      DISPLAY_ANNOTATION_CLASS_NAME,
      ...states,
    ].flatMap((name) => name.match(/\S+/g) ?? []);
  }

  function paintElement(element: HTMLElement, next: string[]): void {
    const previous = painted.get(element) ?? [];
    removeClassNamesFromElement(element, ...previous.filter((name) => !next.includes(name)));
    addClassNamesToElement(element, ...next);
    painted.set(element, next);
  }

  function wire(element: HTMLElement): void {
    if (wired.has(element)) return;
    wired.add(element);
    const { signal } = listeners;
    element.addEventListener("click", (event) => dispatch(element, event, "onClick"), { signal });
    element.addEventListener("mouseenter", (event) => dispatch(element, event, "move"), { signal });
    element.addEventListener("mousemove", (event) => dispatch(element, event, "move"), { signal });
    element.addEventListener("mouseleave", (event) => dispatch(element, event, "leave"), {
      signal,
    });
  }

  /** Paint leaf `key` from what every annotation paints on it: its element whole, or highlights
   * over exactly the painted characters. */
  function $repaintLeaf(key: NodeKey): void {
    const node = $getNodeByKey(key);
    const element = editor.getElementByKey(key);
    const annotationKeys = annotationsByLeaf.get(key);
    const previous = leafElement.get(key);
    if (previous && previous !== element) paintElement(previous, []);
    incomplete.delete(key);
    if (!node || !element || !annotationKeys || annotationKeys.size === 0) {
      if (element) paintElement(element, []);
      highlighter?.clearLeaf(key);
      leafElement.delete(key);
      wholeLeaves.delete(key);
      return;
    }
    leafElement.set(key, element);
    const byAnnotation = new Map(
      [...annotationKeys].map((annotationKey) => [
        annotationKey,
        paintByAnnotation.get(annotationKey)?.get(key) ?? [],
      ]),
    );
    const holds = $displayAnnotationsOf(node).length > 0;
    const text = $paintText(node);
    let plan = leafPaint(text.length, byAnnotation);
    // Without a highlight API, a display byte that holds an annotation is painted whole, and a
    // filler byte only partly painted is not painted at all.
    if (!plan.whole && !highlighter)
      plan = holds ? { whole: true } : { whole: false, segments: [] };
    if (holds) wire(element);
    if (plan.whole) {
      highlighter?.clearLeaf(key);
      wholeLeaves.add(key);
      paintElement(element, classNamesFor(annotationKeys));
      return;
    }
    wholeLeaves.delete(key);
    paintElement(element, []);
    if (!highlighter) return;
    const pieces: LeafHighlight[] = [];
    for (const { start, end, annotations } of plan.segments) {
      const range = rangeOverText(element, start, end);
      if (!range) incomplete.add(key);
      else
        pieces.push({
          classNames: classNamesFor(annotations),
          annotations,
          range,
          text: text.slice(start, end),
        });
    }
    highlighter.setLeaf(key, pieces);
  }

  /**
   * Whether leaf `key`'s highlights no longer cover the text they were made for. A range over a
   * text node collapses when the node's whole value is rewritten in place — Lexical does that for
   * every text it reconciles in a whole-state replacement (undo, redo), and a decorator's portal
   * does it when it re-renders after the commit — and is left behind when the node is replaced.
   */
  function isStale(key: NodeKey): boolean {
    if (incomplete.has(key)) return true;
    const element = editor.getElementByKey(key);
    return (highlighter?.leafHighlights(key) ?? []).some(
      ({ range, text }) =>
        !element ||
        !element.contains(range.startContainer) ||
        !element.contains(range.endContainer) ||
        range.toString() !== text,
    );
  }

  function $staleLeaves(): NodeKey[] {
    return [...incomplete, ...(highlighter?.leafKeys() ?? [])].filter(isStale);
  }

  /** Repaint every leaf whose highlights the DOM moved out from under, outside a commit. */
  function repaintStale(): void {
    if (disposed) return;
    editor.getEditorState().read(() => new Set($staleLeaves()).forEach($repaintLeaf), { editor });
  }

  function observeContent(root: HTMLElement | null): void {
    contentObserver?.disconnect();
    contentObserver = undefined;
    const view = root?.ownerDocument.defaultView;
    if (!root || !view || !highlighter) return;
    contentObserver = new view.MutationObserver(repaintStale);
    contentObserver.observe(root, { childList: true, characterData: true, subtree: true });
  }

  /**
   * Recompute what every annotation that can paint outside its marks paints — one with a
   * display-byte holder, or with two marks a gap may join — and repaint each leaf whose painting
   * changed, which `dirty` names, or whose element Lexical re-created.
   */
  function $refreshPaint(dirty: Iterable<NodeKey>): void {
    const affected = new Set<NodeKey>();
    for (const key of dirty) if (annotationsByLeaf.has(key)) affected.add(key);
    const candidates = new Set([...keysByAnnotation.keys(), ...paintByAnnotation.keys()]);
    for (const [annotationKey, marks] of marksByAnnotation)
      if (marks.size >= 2) candidates.add(annotationKey);
    for (const annotationKey of candidates) {
      const [type, id] = parseIndexKey(annotationKey);
      const next = $paintIntervalsOf(
        type,
        id,
        keysByAnnotation.get(annotationKey) ?? [],
        marksByAnnotation.get(annotationKey) ?? [],
      );
      const previous = paintByAnnotation.get(annotationKey) ?? new Map<NodeKey, PaintIntervals>();
      for (const key of new Set([...previous.keys(), ...next.keys()]))
        if (JSON.stringify(previous.get(key)) !== JSON.stringify(next.get(key))) affected.add(key);
      for (const key of previous.keys()) {
        if (next.has(key)) continue;
        const keys = annotationsByLeaf.get(key);
        keys?.delete(annotationKey);
        if (keys?.size === 0) annotationsByLeaf.delete(key);
      }
      for (const key of next.keys()) {
        let keys = annotationsByLeaf.get(key);
        if (!keys) annotationsByLeaf.set(key, (keys = new Set()));
        keys.add(annotationKey);
      }
      if (next.size > 0) paintByAnnotation.set(annotationKey, next);
      else paintByAnnotation.delete(annotationKey);
    }
    for (const [key, element] of leafElement)
      if (editor.getElementByKey(key) !== element) affected.add(key);
    for (const key of $staleLeaves()) affected.add(key);
    for (const key of affected) $repaintLeaf(key);
  }

  function refreshPaint(dirty: Iterable<NodeKey>): void {
    if (disposed) return;
    editor.getEditorState().read(() => $refreshPaint(dirty), { editor });
  }

  /** DOM ranges over everything `type`/`id` paints, in document order. */
  function rangesFor(type: string, id: string): Range[] {
    const annotationKey = indexKey(type, id);
    const ranges: Range[] = [];
    const whole = (element: HTMLElement) => {
      const range = element.ownerDocument.createRange();
      range.selectNodeContents(element);
      ranges.push(range);
    };
    for (const key of marksByAnnotation.get(annotationKey) ?? []) {
      const element = editor.getElementByKey(key);
      if (element) whole(element);
    }
    for (const [key, intervals] of paintByAnnotation.get(annotationKey) ?? []) {
      const element = editor.getElementByKey(key);
      if (!element) continue;
      if (wholeLeaves.has(key) || !highlighter) {
        whole(element);
        continue;
      }
      for (const [start, end] of intervals) {
        const range = rangeOverText(element, start, end);
        if (range) ranges.push(range);
      }
    }
    return ranges.sort((a, b) => a.compareBoundaryPoints(Range.START_TO_START, b));
  }

  function setStateClass(type: string, id: string, name: string, on: boolean): void {
    const annotationKey = indexKey(type, id);
    const names = stateClasses.get(annotationKey) ?? new Set<string>();
    if (names.has(name) === on) return;
    if (on) names.add(name);
    else names.delete(name);
    if (names.size > 0) stateClasses.set(annotationKey, names);
    else stateClasses.delete(annotationKey);
    refreshPaint(paintByAnnotation.get(annotationKey)?.keys() ?? []);
  }

  function onMutations(mutations: Map<NodeKey, NodeMutation>): void {
    editor.getEditorState().read(
      () => {
        const touched = new Set<string>();
        for (const [key, mutation] of mutations) {
          const node = mutation === "destroyed" ? null : $getNodeByKey(key);
          const after = node ? $displayAnnotationsOf(node) : [];
          const before = annotationsByKey.get(key) ?? [];
          for (const { type, id } of before) {
            const annotationKey = indexKey(type, id);
            touched.add(annotationKey);
            if (!after.some((kept) => kept.type === type && kept.id === id))
              dropHolder(keysByAnnotation, annotationKey, key);
          }
          for (const annotation of after) {
            const annotationKey = indexKey(annotation.type, annotation.id);
            touched.add(annotationKey);
            addHolder(keysByAnnotation, annotationKey, key);
          }
          if (after.length > 0) annotationsByKey.set(key, after);
          else annotationsByKey.delete(key);
          // A mark's own mutations miss an edit of the text inside it.
          for (let parent = node?.getParent(); parent; parent = parent.getParent())
            if ($isTypedMarkNode(parent)) $noteMarkText(parent);
        }
        // Re-join the text of every holder of a touched annotation still holding it, so a later
        // loss of the last one reports the full text.
        for (const annotationKey of touched) {
          const [type, id] = parseIndexKey(annotationKey);
          $noteCoveredText(annotationKey, type, id);
        }
      },
      { editor },
    );
  }

  function onMarkMutations(mutations: Map<NodeKey, NodeMutation>): void {
    editor.getEditorState().read(() => {
      for (const [key, mutation] of mutations) {
        const node = mutation === "destroyed" ? null : $getNodeByKey(key);
        const mark = $isTypedMarkNode(node) ? node : undefined;
        const typedIds = mark ? Object.entries(mark.getTypedIDs()) : [];
        const after = typedIds.flatMap(([type, ids]) => ids.map((id) => indexKey(type, id)));
        for (const annotationKey of annotationsByMark.get(key) ?? []) {
          if (after.includes(annotationKey)) continue;
          dropHolder(marksByAnnotation, annotationKey, key);
          if (!mark)
            droppedMarks.set(annotationKey, [...(droppedMarks.get(annotationKey) ?? []), key]);
        }
        for (const annotationKey of after) addHolder(marksByAnnotation, annotationKey, key);
        if (after.length > 0) annotationsByMark.set(key, after);
        else annotationsByMark.delete(key);
        if (!mark) continue;
        $noteMarkText(mark);
        const onRemoves = mark.getTypedOnRemoves();
        for (const [type, ids] of typedIds)
          for (const id of ids) {
            const onRemove = onRemoves[type]?.[id];
            if (onRemove) markOnRemove.set(indexKey(type, id), onRemove);
          }
      }
    });
  }

  function forget(annotationKey: string, type: string, id: string): void {
    deleteDisplayAnnotationRegistration(editor, type, id);
    markOnRemove.delete(annotationKey);
    coveredText.delete(annotationKey);
  }

  /** Take the removals marks have reported since the last take as heard. */
  function takeMarkReports(): void {
    for (const [type, id] of takeTypedMarkRemovalReports(editor)) hear(type, id);
  }

  function hear(type: string, id: string): void {
    const annotationKey = indexKey(type, id);
    reported.add(annotationKey);
    heardThisCommit.add(annotationKey);
  }

  /** Forget everything a `setUsj` load drops: it removes every annotation and clears undo. */
  function forgetAll(): void {
    reported.clear();
    clearTypedMarkRemovalSilences(editor);
    for (const annotationKey of new Set([...markOnRemove.keys(), ...coveredText.keys()])) {
      if (holderCount(annotationKey) > 0) continue;
      const [type, id] = parseIndexKey(annotationKey);
      forget(annotationKey, type, id);
    }
  }

  /**
   * After every mutation listener of the commit has run: report, once, each annotation whose last
   * holder (a mark or a display byte) left without the host hearing of it. A mark reports its own
   * `remove()` (one call per mark), and `setAnnotation` and `removeAnnotation` report what they
   * take away, so an annotation the host has heard of since it was last set is not reported again.
   * Once reported here, no mark reports it either, so a mark an undo brings back stays quiet. A
   * whole-state replacement reports nothing, because marks do not report there either
   * (`TypedMarkNode.remove` never runs): a `setUsj` load forgets every annotation, and undo or
   * redo keeps the callbacks for the redo that brings the holders back. A settle that discards an
   * annotation's bytes, a collaborator's apply, and a selection delete that drops an emptied mark
   * without `remove()` all report.
   */
  function reportDestroyed({ tags }: { tags: Set<string> }): void {
    takeMarkReports();
    const candidates = emptied;
    const heard = heardThisCommit;
    const dropped = droppedMarks;
    emptied = new Set();
    heardThisCommit = new Set();
    droppedMarks = new Map();
    if (tags.has(EXTERNAL_USJ_MUTATION_TAG)) {
      forgetAll();
      return;
    }
    if (tags.has(HISTORIC_TAG)) return;
    const errors: unknown[] = [];
    for (const annotationKey of candidates) {
      if (holderCount(annotationKey) > 0) continue;
      const [type, id] = parseIndexKey(annotationKey);
      const onRemove =
        getDisplayAnnotationRegistration(editor, type, id)?.onRemove ??
        markOnRemove.get(annotationKey);
      const text = coveredText.get(annotationKey) ?? "";
      forget(annotationKey, type, id);
      if (!onRemove || reported.has(annotationKey) || heard.has(annotationKey)) continue;
      reported.add(annotationKey);
      setTypedMarkRemovalSilenced(editor, type, id, true);
      for (const key of dropped.get(annotationKey) ?? []) forgetTypedMarkCallbacks(key, type, id);
      try {
        onRemove(type, id, "destroyed", text);
      } catch (error) {
        errors.push(error);
      }
    }
    // Thrown from here, a host's error would skip the commit's later update listeners, its
    // deferred `onUpdate` callbacks and its queued updates. The editor's error handler gets it
    // once the commit is done instead.
    for (const error of errors)
      queueMicrotask(() =>
        editor._onError(error instanceof Error ? error : new Error(String(error))),
      );
  }

  /** `setAnnotation` begins a new lifecycle: its loss is reported afresh. */
  function noteSet(type: string, id: string): void {
    takeMarkReports();
    const annotationKey = indexKey(type, id);
    reported.delete(annotationKey);
    setTypedMarkRemovalSilenced(editor, type, id, false);
  }

  const unregister = mergeRegister(
    ...CARRIER_KLASSES.filter((klass) => editor.hasNodes([klass])).map((klass) =>
      editor.registerMutationListener(klass, onMutations, { skipInitialization: false }),
    ),
    editor.hasNodes([TypedMarkNode])
      ? editor.registerMutationListener(TypedMarkNode, onMarkMutations, {
          skipInitialization: false,
        })
      : () => undefined,
    listenForTypedMarkRemovalReports(editor),
    editor.registerUpdateListener(reportDestroyed),
    registerDisplayAnnotationBasis(editor, [ImmutableVerseNode, ImmutableNoteCallerNode]),
    editor.registerUpdateListener(({ dirtyLeaves, dirtyElements }) => {
      // A rule a host inserts or a stylesheet it adopts changes no DOM an observer could see.
      highlighter?.noticeStylesheetChanges();
      if (dirtyLeaves.size === 0 && dirtyElements.size === 0) return;
      refreshPaint([...dirtyLeaves, ...dirtyElements.keys()]);
      // That checked every highlight against the DOM the commit (and any decorator it rendered)
      // left, so the content observer need not check them again for those writes.
      contentObserver?.takeRecords();
    }),
    // Also paints what the mutation listeners above found already in the document.
    editor.registerRootListener((root) => {
      observeContent(root);
      if (root) refreshPaint([...annotationsByLeaf.keys()]);
    }),
    () => {
      disposed = true;
      listeners.abort();
      highlighter?.dispose();
      contentObserver?.disconnect();
    },
    editor.registerCommand(
      SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
      ({ nodes }) => {
        // A check result or a comment names one place; a pasted copy of its bytes is not it.
        nodes.forEach($stripDisplayAnnotations);
        return false;
      },
      // Critical, and never handling the command, so a handler that does handle it cannot skip the
      // strip.
      COMMAND_PRIORITY_CRITICAL,
    ),
  );

  return {
    index: {
      keysFor: (type, id) => keysByAnnotation.get(indexKey(type, id)) ?? EMPTY,
      noteSet,
      noteReported: hear,
      hasReported: (type, id) => {
        takeMarkReports();
        return reported.has(indexKey(type, id));
      },
      setStateClass,
      rangesFor,
    },
    references: 0,
    unregister,
  };
}

export function acquireDisplayAnnotationIndex(editor: LexicalEditor): {
  index: DisplayAnnotationIndex;
  release: () => void;
} {
  let entry = entries.get(editor);
  if (!entry) {
    entry = createIndex(editor);
    entries.set(editor, entry);
  }
  entry.references++;
  const acquired = entry;
  let released = false;
  return {
    index: acquired.index,
    release: () => {
      if (released) return;
      released = true;
      acquired.references--;
      if (acquired.references > 0) return;
      acquired.unregister();
      entries.delete(editor);
    },
  };
}

/**
 * {@link acquireDisplayAnnotationIndex} for a component's lifetime. Acquired in a layout effect
 * (safe under StrictMode's double effects), so it is already attached by the time any passive
 * effect — where a host sets its first annotation through a ref — runs.
 */
export function useDisplayAnnotationIndex(editor: LexicalEditor): DisplayAnnotationIndex {
  const current = useRef<DisplayAnnotationIndex | undefined>(undefined);
  useLayoutEffect(() => {
    const acquired = acquireDisplayAnnotationIndex(editor);
    current.current = acquired.index;
    return () => {
      current.current = undefined;
      acquired.release();
    };
  }, [editor]);
  return useMemo(
    () => ({
      keysFor: (type, id) => current.current?.keysFor(type, id) ?? EMPTY,
      noteSet: (type, id) => current.current?.noteSet(type, id),
      noteReported: (type, id) => current.current?.noteReported(type, id),
      setStateClass: (type, id, name, on) => current.current?.setStateClass(type, id, name, on),
      rangesFor: (type, id) => current.current?.rangesFor(type, id) ?? [],
      hasReported: (type, id) => current.current?.hasReported(type, id) ?? false,
    }),
    [],
  );
}
