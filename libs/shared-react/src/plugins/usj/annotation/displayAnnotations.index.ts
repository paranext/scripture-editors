/**
 * The per-editor index of annotations held on display-byte nodes (`displayAnnotationsState`):
 * which nodes hold each `type`/`id`, their painting, their click and hover callbacks, and the
 * one-time "destroyed" report for an annotation held only on display bytes. One acquisition per
 * editor, reference-counted, because both `AnnotationPlugin` and `CommentPlugin` need it.
 */

import { ImmutableNoteCallerNode } from "../../../nodes/usj/ImmutableNoteCallerNode";
import { ImmutableVerseNode } from "../../../nodes/usj/ImmutableVerseNode";
import {
  $dfsIterator,
  addClassNamesToElement,
  mergeRegister,
  removeClassNamesFromElement,
} from "@lexical/utils";
import { useEffect, useMemo, useRef } from "react";
import {
  $getNearestNodeFromDOMNode,
  $getNodeByKey,
  COMMAND_PRIORITY_LOW,
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
  ImmutableTypedTextNode,
  MarkerNode,
  registerDisplayAnnotationBasis,
  TypedIDs,
  typedMarkClassNames,
  VerseNode,
} from "shared";

/** The class every display-byte node holding an annotation is painted with. */
export const DISPLAY_ANNOTATION_CLASS_NAME = "display-annotation";

export interface DisplayAnnotationIndex {
  /** The keys of the display-byte nodes holding `type`/`id`. */
  keysFor(type: string, id: string): ReadonlySet<NodeKey>;
}

/** Every node class a carrier can be (`$isDisplayAnnotationCarrier`). */
const CARRIER_KLASSES: Klass<LexicalNode>[] = [
  TextNode,
  MarkerNode,
  VerseNode,
  ImmutableTypedTextNode,
  ImmutableNoteCallerNode,
  ImmutableVerseNode,
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
  const lastText = new Map<string, string>();
  const painted = new WeakMap<HTMLElement, string[]>();
  const wired = new WeakSet<HTMLElement>();
  let emptied = new Set<string>();
  const theme = editor._config.theme;

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
        for (const { type, id } of before) {
          const annotationKey = indexKey(type, id);
          if (after.some((kept) => kept.type === type && kept.id === id)) continue;
          const keys = keysByAnnotation.get(annotationKey);
          keys?.delete(key);
          if (keys && keys.size === 0) emptied.add(annotationKey);
        }
        for (const annotation of after) {
          const annotationKey = indexKey(annotation.type, annotation.id);
          let keys = keysByAnnotation.get(annotationKey);
          if (!keys) keysByAnnotation.set(annotationKey, (keys = new Set()));
          keys.add(key);
          if (node) lastText.set(annotationKey, $coveredDisplayText(node, annotation));
        }
        if (after.length > 0) annotationsByKey.set(key, after);
        else annotationsByKey.delete(key);
        if (node) paint(key, after);
      }
    });
  }

  /**
   * After every mutation listener of the commit has run: report each display-only annotation whose
   * last carrier left. An annotation a mark ever held is reported by its marks alone. A whole-state
   * replacement reports nothing, because marks do not report there either (`TypedMarkNode.remove`
   * never runs): a `setUsj` load forgets the annotation, and undo or redo keeps its registration for
   * the redo that brings the carriers back. A collaborator's apply removes nodes through
   * `remove()`, as a local edit does, so it reports.
   */
  function reportDestroyed({ tags }: { tags: Set<string> }): void {
    const candidates = emptied;
    emptied = new Set();
    const isReload = tags.has(EXTERNAL_USJ_MUTATION_TAG);
    const isHistory = tags.has(HISTORIC_TAG);
    for (const annotationKey of candidates) {
      if ((keysByAnnotation.get(annotationKey)?.size ?? 0) > 0) continue;
      keysByAnnotation.delete(annotationKey);
      const [type, id] = annotationKey.split("\u0000");
      if (isHistory) continue;
      if (isReload) {
        deleteDisplayAnnotationRegistration(editor, type, id);
        continue;
      }
      const registration = getDisplayAnnotationRegistration(editor, type, id);
      if (!registration || registration.hadMarks) continue;
      const markHolds = editor.getEditorState().read(() => {
        for (const { node } of $dfsIterator())
          if ($isTypedMarkNode(node) && node.hasID(type, id)) return true;
        return false;
      });
      if (markHolds) continue;
      deleteDisplayAnnotationRegistration(editor, type, id);
      registration.onRemove?.(type, id, "destroyed", lastText.get(annotationKey) ?? "");
    }
  }

  const unregister = mergeRegister(
    ...CARRIER_KLASSES.filter((klass) => editor.hasNodes([klass])).map((klass) =>
      editor.registerMutationListener(klass, onMutations, { skipInitialization: false }),
    ),
    editor.registerUpdateListener(reportDestroyed),
    registerDisplayAnnotationBasis(editor),
    editor.registerCommand(
      SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
      ({ nodes }) => {
        // A check result or a comment names one place; a pasted copy of its bytes is not it.
        nodes.forEach($stripDisplayAnnotations);
        return false;
      },
      COMMAND_PRIORITY_LOW,
    ),
  );

  return {
    index: {
      keysFor: (type, id) => keysByAnnotation.get(indexKey(type, id)) ?? EMPTY,
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
    () => ({ keysFor: (type, id) => current.current?.keysFor(type, id) ?? EMPTY }),
    [],
  );
}
