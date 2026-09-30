/**
 * The per-editor index of annotations held on display-byte nodes (`displayAnnotationsState`):
 * which nodes hold each `type`/`id`, their painting, their click and hover callbacks, and the
 * one-time "destroyed" report for an annotation whose last holder — a mark or a display byte —
 * left without the host hearing of it. One acquisition per editor, reference-counted, because both
 * `AnnotationPlugin` and `CommentPlugin` need it.
 */

import { ImmutableNoteCallerNode } from "../../../nodes/usj/ImmutableNoteCallerNode";
import { ImmutableVerseNode } from "../../../nodes/usj/ImmutableVerseNode";
import { addClassNamesToElement, mergeRegister, removeClassNamesFromElement } from "@lexical/utils";
import { useEffect, useMemo, useRef } from "react";
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
  clearTypedMarkRemovalSilences,
  forgetTypedMarkCallbacks,
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
  return `${type}\u0000${id}`;
}

function typedIdsOf(annotations: DisplayAnnotation[]): TypedIDs {
  const out: TypedIDs = {};
  for (const { type, id } of annotations) {
    const ids = (out[type] ??= []);
    if (!ids.includes(id)) ids.push(id);
  }
  return out;
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
  const keysByAnnotation = new Map<string, Set<NodeKey>>();
  const annotationsByKey = new Map<NodeKey, DisplayAnnotation[]>();
  /** The marks holding each annotation, and the annotations each mark holds. */
  const marksByAnnotation = new Map<string, Set<NodeKey>>();
  const annotationsByMark = new Map<NodeKey, string[]>();
  /** A mark's `onRemove` per annotation, which an annotation held only by marks has nowhere else. */
  const markOnRemove = new Map<string, TypedMarkOnRemove>();
  const lastText = new Map<string, string>();
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

  /** Remember what `mark` holds now, as the text a later report of its annotations names. */
  function $noteMarkText(mark: TypedMarkNode): void {
    const text = mark.getTextContent();
    for (const [type, ids] of Object.entries(mark.getTypedIDs()))
      for (const id of ids) lastText.set(indexKey(type, id), text);
  }

  function dispatch(
    element: HTMLElement,
    event: MouseEvent,
    pick: "onClick" | "onMouseEnter" | "onMouseLeave",
  ): void {
    // `$getNearestNodeFromDOMNode` looks the element up in the ACTIVE editor, so the read names it.
    editor.getEditorState().read(
      () => {
        const node = $getNearestNodeFromDOMNode(element);
        if (!node) return;
        for (const annotation of $displayAnnotationsOf(node)) {
          const callback = getDisplayAnnotationRegistration(
            editor,
            annotation.type,
            annotation.id,
          )?.[pick];
          callback?.(event, annotation.type, annotation.id, $coveredDisplayText(node, annotation));
        }
      },
      { editor },
    );
  }

  function paint(key: NodeKey, annotations: DisplayAnnotation[]): void {
    const element = editor.getElementByKey(key);
    if (!element) return;
    // Split into tokens as `addClassNamesToElement` does for a `<mark>`: an id or a theme name
    // may hold whitespace, and `painted` must record exactly the tokens that were added.
    const next =
      annotations.length > 0
        ? [
            ...typedMarkClassNames(theme, typedIdsOf(annotations)),
            DISPLAY_ANNOTATION_CLASS_NAME,
          ].flatMap((name) => name.match(/\S+/g) ?? [])
        : [];
    const previous = painted.get(element) ?? [];
    removeClassNamesFromElement(element, ...previous.filter((name) => !next.includes(name)));
    addClassNamesToElement(element, ...next);
    painted.set(element, next);
    if (next.length > 0 && !wired.has(element)) {
      wired.add(element);
      element.addEventListener("click", (event) => dispatch(element, event, "onClick"));
      element.addEventListener("mouseenter", (event) => dispatch(element, event, "onMouseEnter"));
      element.addEventListener("mouseleave", (event) => dispatch(element, event, "onMouseLeave"));
    }
  }

  function onMutations(mutations: Map<NodeKey, NodeMutation>): void {
    editor.getEditorState().read(() => {
      for (const [key, mutation] of mutations) {
        const node = mutation === "destroyed" ? null : $getNodeByKey(key);
        const after = node ? $displayAnnotationsOf(node) : [];
        const before = annotationsByKey.get(key) ?? [];
        for (const { type, id } of before)
          if (!after.some((kept) => kept.type === type && kept.id === id))
            dropHolder(keysByAnnotation, indexKey(type, id), key);
        for (const annotation of after) {
          const annotationKey = indexKey(annotation.type, annotation.id);
          addHolder(keysByAnnotation, annotationKey, key);
          if (node) lastText.set(annotationKey, $coveredDisplayText(node, annotation));
        }
        if (after.length > 0) annotationsByKey.set(key, after);
        else annotationsByKey.delete(key);
        if (node) paint(key, after);
        // A mark's own mutations miss an edit of the text inside it.
        for (let parent = node?.getParent(); parent; parent = parent.getParent())
          if ($isTypedMarkNode(parent)) $noteMarkText(parent);
      }
    });
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
    lastText.delete(annotationKey);
  }

  /** Take the removals marks have reported since the last take as heard. */
  function takeMarkReports(): void {
    for (const [type, id] of takeTypedMarkRemovalReports(editor)) hear(indexKey(type, id));
  }

  function hear(annotationKey: string): void {
    reported.add(annotationKey);
    heardThisCommit.add(annotationKey);
  }

  /** Forget everything a `setUsj` load drops: it removes every annotation and clears undo. */
  function forgetAll(): void {
    reported.clear();
    clearTypedMarkRemovalSilences(editor);
    for (const annotationKey of new Set([...markOnRemove.keys(), ...lastText.keys()])) {
      if (holderCount(annotationKey) > 0) continue;
      const [type, id] = annotationKey.split("\u0000");
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
    for (const annotationKey of candidates) {
      if (holderCount(annotationKey) > 0) continue;
      const [type, id] = annotationKey.split("\u0000");
      const onRemove =
        getDisplayAnnotationRegistration(editor, type, id)?.onRemove ??
        markOnRemove.get(annotationKey);
      const text = lastText.get(annotationKey) ?? "";
      forget(annotationKey, type, id);
      if (!onRemove || reported.has(annotationKey) || heard.has(annotationKey)) continue;
      reported.add(annotationKey);
      setTypedMarkRemovalSilenced(editor, type, id, true);
      for (const key of dropped.get(annotationKey) ?? []) forgetTypedMarkCallbacks(key, type, id);
      onRemove(type, id, "destroyed", text);
    }
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
    editor.registerUpdateListener(reportDestroyed),
    registerDisplayAnnotationBasis(editor),
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
      noteReported: (type, id) => hear(indexKey(type, id)),
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
 * {@link acquireDisplayAnnotationIndex} for a component's lifetime. Acquired in an effect (safe
 * under StrictMode's double effects); the returned index is stable and reads empty until then,
 * which no caller can observe — annotations are set through a ref after mount.
 */
export function useDisplayAnnotationIndex(editor: LexicalEditor): DisplayAnnotationIndex {
  const current = useRef<DisplayAnnotationIndex | undefined>(undefined);
  useEffect(() => {
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
    }),
    [],
  );
}
