/**
 * The per-editor index of annotations held on display-byte nodes (`displayAnnotationsState`):
 * which nodes hold each `type`/`id`, their painting, their click and hover callbacks, and the
 * one-time "destroyed" report for an annotation whose last holder — a mark or a display byte —
 * left without the host hearing of it. One acquisition per editor, reference-counted, because both
 * `AnnotationPlugin` and `CommentPlugin` need it.
 *
 * Painting is by element only. A text leaf is always painted whole — an editable carrier is cut
 * into pieces where a hold ends (`displayPieces.state.ts`), so what an annotation paints on it is
 * either all of a piece or none. A read-only decorator held in part paints sub-spans of its own
 * rendered text, through the paint store in `decoratorPaint.ts`.
 */

import { ImmutableNoteCallerNode } from "../../../nodes/usj/ImmutableNoteCallerNode";
import { ImmutableVerseNode } from "../../../nodes/usj/ImmutableVerseNode";
import { $renderedOffsetOf } from "./decoratorHolds.utils";
import { $readDecoratorHoldableText } from "./selection.utils";
import { $paintIntervalsOf, $paintText, leafPaint, PaintIntervals } from "./annotationPaint.utils";
import { addClassNamesToElement, mergeRegister, removeClassNamesFromElement } from "@lexical/utils";
import { useLayoutEffect, useMemo, useRef } from "react";
import {
  BaseSelection,
  $findMatchingParent,
  INTERNAL_$isBlock,
  $getNearestNodeFromDOMNode,
  $getNodeByKey,
  $getSelection,
  $isDecoratorNode,
  $isRangeSelection,
  $isTextNode,
  COMMAND_PRIORITY_CRITICAL,
  EditorState,
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
  clearDecoratorPaints,
  DECORATOR_PAINT_ATTRIBUTE,
  DecoratorPaint,
  deleteDisplayAnnotationRegistration,
  DisplayAnnotation,
  displayAnnotationsState,
  EXTERNAL_USJ_MUTATION_TAG,
  isDomPaintedDecorator,
  paintedPieceKeys,
  paintedPieceOf,
  renderDecoratorPaint,
  setDecoratorPaint,
  getDisplayAnnotationRegistration,
  ImmutableChapterNode,
  ImmutableTypedTextNode,
  ImmutableUnmatchedNode,
  MarkerNode,
  registerDisplayAnnotationBasis,
  $restatePastedPieces,
  $isSplitCarrier,
  $logicalOffset,
  $splitCarrierAt,
  setDecoratorBytesReader,
  clearTypedMarkRemovalSilences,
  forgetTypedMarkCallbacks,
  listenForTypedMarkRemovalReports,
  setTypedMarkRemovalSilenced,
  takeRemovedTypedMarks,
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

/** Remove `displayAnnotationsState` from pasted sibling `nodes` and their whole subtrees, and
 * make the pieces among them pieces of the paste alone (`$restatePastedPieces`): a carrier pasted
 * whole stays one carrier, which the piece transform joins once the holds are gone, and a piece
 * pasted without its head is a carrier of its own. Mutating. */
function $stripDisplayAnnotations(nodes: readonly LexicalNode[]): void {
  $restatePastedPieces(nodes);
  for (const node of nodes) {
    $setState(node, displayAnnotationsState, undefined);
    if ($isElementNode(node)) $stripDisplayAnnotations(node.getChildren());
  }
}

/**
 * Before pasted nodes go in at the caret, split the carrier the caret is inside where the insertion
 * splits a text (`$splitCarrierAt`): `RangeSelection.insertNodes` splits the text node at the
 * caret, but in a carrier cut into pieces the caret may sit between two of them, where no text is
 * left to split, and in one holding an annotation each part would re-measure the holds it copied
 * rather than keep its own. Only what the insertion itself does first is done here: nothing for no
 * nodes (it returns before touching the document), else a range removed. Mutating. */
function $splitCarrierAtInsertion(
  nodes: readonly LexicalNode[],
  insertion: BaseSelection | null,
): void {
  if (nodes.length === 0 || !$isRangeSelection(insertion)) return;
  if (!insertion.isCollapsed()) insertion.removeText();
  // The insertion splits the text at the editor's own range selection when there is one (Lexical's
  // `$removeTextAndSplitBlock`), else at its own anchor.
  const current = $getSelection();
  const at = $isRangeSelection(current) ? current : insertion;
  const { anchor } = at;
  // A caret on the parent between two pieces is the end of the piece before it.
  const node =
    anchor.type === "text"
      ? anchor.getNode()
      : $isElementNode(anchor.getNode())
        ? anchor.getNode().getChildAtIndex(anchor.offset - 1)
        : null;
  if (!$isTextNode(node)) return;
  if (!$isSplitCarrier(node) && $displayAnnotationsOf(node).length === 0) return;
  // Inline nodes go into the block the caret is in; with no block there the insertion refuses,
  // splitting nothing.
  const isInline = (pasted: LexicalNode) =>
    !($isElementNode(pasted) || $isDecoratorNode(pasted)) || pasted.isInline();
  if (nodes.every(isInline) && !$isElementNode($findMatchingParent(node, INTERNAL_$isBlock)))
    return;
  const offset = anchor.type === "text" ? anchor.offset : node.getTextContentSize();
  const isCollapsed = at.isCollapsed();
  const before = $splitCarrierAt(node, $logicalOffset(node, offset));
  if (!before) return;
  // The split moves the editor's selection with its bytes and no other, so the point the insertion
  // reads is restated on the split: the end of the part before the caret.
  const points = isCollapsed ? [at.anchor, at.focus] : [at.anchor];
  for (const point of points) point.set(before.getKey(), before.getTextContentSize(), "text");
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
  /** Set once the index is released: nothing paints after that. */
  let disposed = false;
  let emptied = new Set<string>();
  /** Annotations a node began holding in the commit being made. */
  let gainedHolder = new Set<string>();
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
    if (keys.has(key)) return;
    keys.add(key);
    gainedHolder.add(annotationKey);
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
        // Every hold of it on the node, in the order their bytes come.
        return $displayAnnotationsOf(node)
          .filter((candidate) => candidate.type === type && candidate.id === id)
          .map((annotation) => $coveredDisplayText(node, annotation))
          .join("");
      })
      .join("");
    coveredText.set(annotationKey, text);
  }

  /** Whether pointer `event` on leaf `key` falls on the part annotation `annotationKey` paints
   * there — anywhere on an element painted whole, or on the sub-span of a decorator it paints.
   * Never for an annotation that paints nothing there, such as one held only for bytes a
   * decorator does not show. */
  function hits(key: NodeKey, annotationKey: string, event: MouseEvent): boolean {
    if (!annotationsByLeaf.get(key)?.has(annotationKey)) return false;
    if (wholeLeaves.has(key)) return true;
    const target = event.target instanceof Node ? event.target : null;
    return paintedPieceKeys(paintedPieceOf(target) ?? null).includes(annotationKey);
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

  /**
   * Paint leaf `key` from what every annotation paints on it: its element whole, or — for a
   * read-only decorator — sub-spans over exactly the painted characters. A text leaf is never
   * painted in part: its carrier is cut where a hold ends, so a plan that is not whole there is a
   * defect; it is painted whole and reported to the editor's error handler.
   */
  function $repaintLeaf(key: NodeKey): void {
    const node = $getNodeByKey(key);
    const element = editor.getElementByKey(key);
    const annotationKeys = annotationsByLeaf.get(key);
    const previous = leafElement.get(key);
    if (previous && previous !== element) paintElement(previous, []);
    if (!node || !element || !annotationKeys || annotationKeys.size === 0) {
      if (element) paintElement(element, []);
      if (node && $isDecoratorNode(node)) $paintDecorator(node, element, []);
      else setDecoratorPaint(editor, key, []);
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
    if (!plan.whole && !$isDecoratorNode(node)) {
      editor._onError(
        new Error(
          `annotation painting: text leaf ${node.getType()} ${JSON.stringify(text)} is painted in part ` +
            `(${JSON.stringify(plan.segments)}); its carrier should have been cut where the hold ends`,
        ),
      );
      plan = { whole: true };
    }
    if (holds) wire(element);
    if (plan.whole) {
      wholeLeaves.add(key);
      $paintDecorator(node, element, []);
      paintElement(element, classNamesFor(annotationKeys));
      return;
    }
    wholeLeaves.delete(key);
    paintElement(element, []);
    $paintDecorator(
      node,
      element,
      plan.segments.map(({ start, end, annotations }) => ({
        start,
        end,
        classNames: classNamesFor(annotations),
        annotationKeys: annotations,
      })),
    );
  }

  /** Give decorator `node` its sub-span paint: through the store for one React renders, and
   * straight into its element for one that writes its own bytes. */
  function $paintDecorator(node: LexicalNode, element: HTMLElement | null, paint: DecoratorPaint) {
    if (!$isDecoratorNode(node)) return;
    setDecoratorPaint(editor, node.getKey(), paint);
    if (element && isDomPaintedDecorator(element))
      renderDecoratorPaint(element, $paintText(node), paint);
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
    for (const key of paintByAnnotation.get(annotationKey)?.keys() ?? []) {
      const element = editor.getElementByKey(key);
      if (!element) continue;
      if (wholeLeaves.has(key)) {
        whole(element);
        continue;
      }
      // A decorator painted in part: the sub-spans carrying this annotation.
      for (const piece of element.querySelectorAll(`[${DECORATOR_PAINT_ATTRIBUTE}]`))
        if (paintedPieceKeys(piece).includes(annotationKey) && piece instanceof HTMLElement)
          whole(piece);
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
   *
   * A mark Lexical drops without `remove()` (an emptied mark a selection delete takes away) cannot
   * make its own report, so it is made here for it, with its own text — even while display bytes
   * still hold the annotation, as a mark's own report is. Not when the annotation was handed on
   * rather than lost: while another mark still holds it, or when a node began holding it in the
   * same commit (a settle that re-spells a mark's bytes as a display byte, which then holds them).
   * A cut that gives a held carrier a new piece in that commit also counts as a hand-on, so such a
   * drop is left to the last holder's report.
   */
  function reportDestroyed({
    tags,
    prevEditorState,
  }: {
    tags: Set<string>;
    prevEditorState: EditorState;
  }): void {
    takeMarkReports();
    const candidates = emptied;
    const heard = heardThisCommit;
    const dropped = droppedMarks;
    const removedMarks = takeRemovedTypedMarks(editor);
    const gained = gainedHolder;
    gainedHolder = new Set();
    emptied = new Set();
    heardThisCommit = new Set();
    droppedMarks = new Map();
    if (tags.has(EXTERNAL_USJ_MUTATION_TAG)) {
      forgetAll();
      return;
    }
    if (tags.has(HISTORIC_TAG)) return;
    const errors: unknown[] = [];
    const report = (onRemove: TypedMarkOnRemove, type: string, id: string, text: string) => {
      const annotationKey = indexKey(type, id);
      reported.add(annotationKey);
      setTypedMarkRemovalSilenced(editor, type, id, true);
      for (const key of dropped.get(annotationKey) ?? []) forgetTypedMarkCallbacks(key, type, id);
      try {
        onRemove(type, id, "destroyed", text);
      } catch (error) {
        errors.push(error);
      }
    };
    for (const annotationKey of candidates) {
      if (holderCount(annotationKey) > 0) continue;
      const [type, id] = parseIndexKey(annotationKey);
      const onRemove =
        getDisplayAnnotationRegistration(editor, type, id)?.onRemove ??
        markOnRemove.get(annotationKey);
      const text = coveredText.get(annotationKey) ?? "";
      forget(annotationKey, type, id);
      if (!onRemove || reported.has(annotationKey) || heard.has(annotationKey)) continue;
      report(onRemove, type, id, text);
    }
    for (const [annotationKey, keys] of dropped) {
      if (holderCount(annotationKey) === 0 || (marksByAnnotation.get(annotationKey)?.size ?? 0) > 0)
        continue;
      if (gained.has(annotationKey) || reported.has(annotationKey) || heard.has(annotationKey))
        continue;
      const silent = keys.filter((key) => !removedMarks.has(key));
      const onRemove = markOnRemove.get(annotationKey);
      if (silent.length === 0 || !onRemove) continue;
      const [type, id] = parseIndexKey(annotationKey);
      const text = prevEditorState.read(() =>
        silent.map((key) => $getNodeByKey(key)?.getTextContent() ?? "").join(""),
      );
      report(onRemove, type, id, text);
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
      if (dirtyLeaves.size === 0 && dirtyElements.size === 0) return;
      refreshPaint([...dirtyLeaves, ...dirtyElements.keys()]);
    }),
    // Also paints what the mutation listeners above found already in the document.
    editor.registerRootListener((root) => {
      if (root) refreshPaint([...annotationsByLeaf.keys()]);
    }),
    () => {
      disposed = true;
      listeners.abort();
      clearDecoratorPaints(editor);
    },
    editor.registerCommand(
      SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
      ({ nodes, selection }) => {
        // A check result or a comment names one place; a pasted copy of its bytes is not it.
        $stripDisplayAnnotations(nodes);
        $splitCarrierAtInsertion(nodes, selection);
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
