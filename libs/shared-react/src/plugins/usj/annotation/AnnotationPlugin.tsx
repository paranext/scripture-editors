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
  $unwrapTypedMarkNode,
  $wrapSelectionInTypedMarkNode,
  ANNOTATION_CHANGE_TAG,
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
   * Removes every mark and every display-byte range for the type/id pair. An annotation a mark
   * ever held reports its removal through its marks (`deleteID`, one call per mark); one held only
   * on display bytes reports it here, once.
   */
  const $removeAnnotationNodes = (type: string, id: string, nodeKeys?: Set<NodeKey>) => {
    const markKeys = Array.from(nodeKeys ?? markNodeMap.get(getTypeIDMapKey(type, id)) ?? []);
    for (const key of markKeys) {
      const node: TypedMarkNode | null = $getNodeByKey(key);
      if ($isTypedMarkNode(node)) {
        node.deleteID(type, id);
        if (node.hasNoIDsForEveryType()) $unwrapTypedMarkNode(node);
      }
    }
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
    // `hadMarks` governs only "destroyed". An annotation that began as a mark but settled into
    // display bytes alone has no mark left to report through, so "removed" fires whenever the
    // carriers were the only thing holding it — otherwise a host's removeAnnotation on such an
    // annotation would report nothing and core would never call the extension's interactionCommand.
    if (covered.length > 0 && registration && markKeys.length === 0)
      registration.onRemove?.(type, id, "removed", covered.join(""));
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
          const editorSelection = $getRangeFromUsjSelection(selection, viewOptions);
          if (editorSelection === undefined) {
            logger?.error("Failed to find start or end node of the annotation.");
            return;
          }

          $removeAnnotationNodes(type, id);

          $wrapSelectionInTypedMarkNode(
            editorSelection,
            type,
            id,
            onClick,
            onRemove,
            onMouseEnter,
            onMouseLeave,
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
  }));

  return null;
});
