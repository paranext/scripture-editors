import { ViewOptions } from "../../../views/view-options.utils";
import { useDisplayAnnotationIndex } from "./displayAnnotations.index";
import { AnnotationRange } from "./selection.model";
import { $getRangeFromUsjSelection } from "./selection.utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister, registerNestedElementResolver } from "@lexical/utils";
import { $getNodeByKey, LexicalEditor, NodeKey } from "lexical";
import { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useMemo } from "react";
import {
  $coveredDisplayText,
  $createTypedMarkNode,
  $displayAnnotationsOf,
  $isTypedMarkNode,
  $removeDisplayAnnotation,
  $removeTypedMarkId,
  $wrapSelectionInTypedMarkNode,
  ANNOTATION_CHANGE_TAG,
  DecoratorHold,
  deleteDisplayAnnotationRegistration,
  getDisplayAnnotationRegistration,
  LoggerBasic,
  TypedIDs,
  TypedMarkNode,
  TypedMarkOnClick,
  TypedMarkOnMouseEnter,
  TypedMarkOnMouseLeave,
  TypedMarkOnRemove,
} from "shared";

/** Forward reference for annotations. */
export interface AnnotationRef {
  setAnnotation(
    selection: AnnotationRange,
    type: string,
    id: string,
    onClick?: TypedMarkOnClick,
    onRemove?: TypedMarkOnRemove,
    onMouseEnter?: TypedMarkOnMouseEnter,
    onMouseLeave?: TypedMarkOnMouseLeave,
  ): void;
  removeAnnotation(type: string, id: string): void;
  /** DOM ranges over everything `type`/`id` paints, in document order (see
   * `DisplayAnnotationIndex.rangesFor`). */
  getAnnotationRanges(type: string, id: string): Range[];
}

function getTypeIDMapKey(type: string, id: string): string {
  return `${type}:${id}`;
}

function useAnnotations(editor: LexicalEditor, markNodeMap: Map<string, Set<NodeKey>>) {
  useEffect(() => {
    if (!editor.hasNodes([TypedMarkNode])) {
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    }

    const markNodeKeysToTypedIDs = new Map<NodeKey, TypedIDs>();

    return mergeRegister(
      registerNestedElementResolver<TypedMarkNode>(
        editor,
        TypedMarkNode,
        (from: TypedMarkNode) => {
          return $createTypedMarkNode(
            from.getTypedIDs(),
            from.getTypedOnClicks(),
            from.getTypedOnRemoves(),
            from.getTypedOnMouseEnters(),
            from.getTypedOnMouseLeaves(),
          );
        },
        (from: TypedMarkNode, to: TypedMarkNode) => {
          // Merge the IDs
          const fromOnClicks = from.getTypedOnClicks();
          const fromOnRemoves = from.getTypedOnRemoves();
          const fromOnMouseEnters = from.getTypedOnMouseEnters();
          const fromOnMouseLeaves = from.getTypedOnMouseLeaves();
          for (const [type, ids] of Object.entries(from.getTypedIDs())) {
            ids.forEach((id) => {
              const onClick = fromOnClicks[type]?.[id];
              const onRemove = fromOnRemoves[type]?.[id];
              const onMouseEnter = fromOnMouseEnters[type]?.[id];
              const onMouseLeave = fromOnMouseLeaves[type]?.[id];
              to.addID(type, id, onClick, onRemove, onMouseEnter, onMouseLeave);
            });
          }

          // The resolver replaces the original node with a new one; suppress callbacks so the
          // transferred IDs do not emit "destroyed" notifications during the teardown.
          from.getWritable().__suppressOnRemoveCallbacks = true;
        },
      ),
      editor.registerMutationListener(
        TypedMarkNode,
        (mutations) => {
          editor.getEditorState().read(() => {
            // Keep track of mutated mark node keys so they can be removed later.
            for (const [key, mutation] of mutations) {
              const node = $getNodeByKey<TypedMarkNode>(key);
              let typedIDs: TypedIDs = {};

              if (mutation === "destroyed") {
                typedIDs = markNodeKeysToTypedIDs.get(key) ?? {};
              } else if ($isTypedMarkNode(node)) {
                typedIDs = node.getTypedIDs();
              }

              for (const [type, ids] of Object.entries(typedIDs)) {
                // Skip reserved types as they will handle their own keys.
                if (TypedMarkNode.isReservedType(type)) continue;

                for (const id of ids) {
                  let markNodeKeys = markNodeMap.get(getTypeIDMapKey(type, id));
                  typedIDs[type] = ids;
                  markNodeKeysToTypedIDs.set(key, typedIDs);

                  if (mutation === "destroyed") {
                    if (markNodeKeys !== undefined) {
                      markNodeKeys.delete(key);
                      if (markNodeKeys.size === 0) {
                        markNodeMap.delete(getTypeIDMapKey(type, id));
                      }
                    }
                  } else {
                    if (markNodeKeys === undefined) {
                      markNodeKeys = new Set();
                      markNodeMap.set(getTypeIDMapKey(type, id), markNodeKeys);
                    }
                    if (!markNodeKeys.has(key)) {
                      markNodeKeys.add(key);
                    }
                  }
                }
              }
            }
          });
        },
        { skipInitialization: true },
      ),
    );
  }, [editor, markNodeMap]);
}

export const AnnotationPlugin = forwardRef(function AnnotationPlugin<TLogger extends LoggerBasic>(
  {
    logger,
    viewOptions,
  }: {
    logger?: TLogger;
    /** The editor's view options, which decide how its text maps to USJ offsets. */
    viewOptions: ViewOptions | undefined;
  },
  ref: ForwardedRef<AnnotationRef>,
) {
  const [editor] = useLexicalComposerContext();
  const markNodeMap = useMemo<Map<string, Set<NodeKey>>>(() => {
    return new Map();
  }, []);
  useAnnotations(editor, markNodeMap);
  const displayIndex = useDisplayAnnotationIndex(editor);

  /**
   * Removes every mark and every display-byte range for the type/id pair. Each mark reports its
   * removal itself (`deleteID`, one call per mark); an annotation no mark holds reports it here,
   * once — unless the host has already heard of its removal since it was last set (a mark that
   * held it reported its own deletion).
   *
   * @param nodeKeys - The caller's own snapshot of the mark keys, when it already has one (from
   *   `markNodeMap`); omitted, this looks the keys up itself.
   */
  const $removeAnnotationNodes = (type: string, id: string, nodeKeys?: Set<NodeKey>) => {
    const markKeys = Array.from(nodeKeys ?? markNodeMap.get(getTypeIDMapKey(type, id)) ?? []);
    $removeTypedMarkId(type, id, markKeys);
    const covered: string[] = [];
    for (const key of Array.from(displayIndex.keysFor(type, id))) {
      const node = $getNodeByKey(key);
      if (!node) continue;
      const held = $displayAnnotationsOf(node).filter(
        (annotation) => annotation.type === type && annotation.id === id,
      );
      if ($removeDisplayAnnotation(node, type, id))
        covered.push(...held.map((annotation) => $coveredDisplayText(node, annotation)));
    }
    const registration = getDisplayAnnotationRegistration(editor, type, id);
    deleteDisplayAnnotationRegistration(editor, type, id);
    // Without this, a host's removeAnnotation on an annotation held only on display bytes would
    // report nothing, and core would never call the extension's interactionCommand.
    if (
      covered.length > 0 &&
      registration &&
      markKeys.length === 0 &&
      !displayIndex.hasReported(type, id)
    ) {
      displayIndex.noteReported(type, id);
      registration.onRemove?.(type, id, "removed", covered.join(""));
    }
  };

  useImperativeHandle(ref, () => ({
    setAnnotation(
      selection,
      type,
      id,
      onClick?: TypedMarkOnClick,
      onRemove?: TypedMarkOnRemove,
      onMouseEnter?: TypedMarkOnMouseEnter,
      onMouseLeave?: TypedMarkOnMouseLeave,
    ) {
      if (TypedMarkNode.isReservedType(type))
        throw new Error(
          `setAnnotation: Can't directly set this reserved annotation type '${type}'.` +
            " Use the appropriate plugin instead.",
        );

      editor.update(
        () => {
          // Apply the annotation to the selected range.
          const decoratorHolds = new Map<NodeKey, DecoratorHold>();
          const editorSelection = $getRangeFromUsjSelection(selection, viewOptions, {
            forAnnotation: true,
            decoratorHolds,
          });
          if (editorSelection === undefined) {
            logger?.error("Failed to find start or end node of the annotation.");
            return;
          }

          $removeAnnotationNodes(type, id);
          displayIndex.noteSet(type, id);

          $wrapSelectionInTypedMarkNode(
            editorSelection,
            type,
            id,
            onClick,
            onRemove,
            onMouseEnter,
            onMouseLeave,
            { decoratorHolds },
          );
        },
        { tag: ANNOTATION_CHANGE_TAG },
      );
    },

    removeAnnotation(type, id) {
      if (TypedMarkNode.isReservedType(type))
        throw new Error(
          `removeAnnotation: Can't directly remove this reserved annotation type '${type}'.` +
            " Use the appropriate plugin instead.",
        );

      const markNodeKeys = markNodeMap.get(getTypeIDMapKey(type, id));
      const noMarks = markNodeKeys === undefined || markNodeKeys.size === 0;
      if (noMarks && displayIndex.keysFor(type, id).size === 0) return;

      editor.update(
        () => {
          $removeAnnotationNodes(type, id, markNodeKeys);
        },
        { tag: ANNOTATION_CHANGE_TAG },
      );
    },

    getAnnotationRanges(type, id) {
      return displayIndex.rangesFor(type, id);
    },
  }));

  return null;
});
