import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import { $getSelection, LexicalEditor, NodeKey } from "lexical";
import { useEffect, useRef } from "react";
import { $getSelectedParaMarker } from "shared";

/** The class the paragraph whose marker is selected carries (with `aria-selected="true"`). */
export const PARA_MARKER_SELECTED_CLASS_NAME = "psc-para-marker-selected";

/**
 * Owns a selected paragraph marker for as long as it is selected: the row highlight, the
 * accessibility state, and (from later tasks) every key and command that reaches it.
 *
 * A paragraph marker is selected by a `NodeSelection` of its gutter glyph
 * (`$getSelectedParaMarker`, shared). Nothing here creates one — a click
 * (`ParaMarkerPrefixCursorGuardPlugin`) or an arrow key (`ArrowNavigationPlugin`) does — and
 * everything here is inert unless one exists, so the plugin is mounted unconditionally: selection
 * targets only exist where gutter glyphs do.
 *
 * On every update it recomputes the owning paragraph — a retag replaces the paragraph node, so its
 * key and element change while the glyph keeps its key — and toggles
 * {@link PARA_MARKER_SELECTED_CLASS_NAME} and `aria-selected` on that element with plain DOM
 * calls (no nested `editor.update`). While a marker is selected it also removes any DOM range left
 * inside the editor, so no browser caret stays drawn in the glyph.
 *
 * @param onParaMarkerMenuRequest - Called when the user asks, by keyboard, to change the selected
 *   marker.
 * @returns Always `null`; the highlight and signals are published to the DOM.
 */
export function ParaMarkerSelectionPlugin({
  onParaMarkerMenuRequest,
}: {
  onParaMarkerMenuRequest?: () => void;
}): null {
  const [editor] = useLexicalComposerContext();
  const onMenuRequestRef = useRef(onParaMarkerMenuRequest);
  useEffect(() => {
    onMenuRequestRef.current = onParaMarkerMenuRequest;
  }, [onParaMarkerMenuRequest]);

  useEffect(() => {
    let highlightedOwnerKey: NodeKey | undefined;

    const unregister = mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        const ownerKey = editorState.read(() =>
          $getSelectedParaMarker($getSelection())?.getParent()?.getKey(),
        );
        if (highlightedOwnerKey !== ownerKey) setOwnerHighlight(editor, highlightedOwnerKey, false);
        highlightedOwnerKey = ownerKey;
        // Re-applied on every update, not only on change: an idempotent add keeps a re-created
        // element highlighted too.
        setOwnerHighlight(editor, ownerKey, true);
        if (ownerKey !== undefined) removeDomRangesInside(editor.getRootElement());
      }),
    );

    return () => {
      unregister();
      setOwnerHighlight(editor, highlightedOwnerKey, false);
    };
  }, [editor]);

  return null;
}

/** Toggles the selected-marker highlight on the element of the paragraph `key` names, if rendered. */
function setOwnerHighlight(
  editor: LexicalEditor,
  key: NodeKey | undefined,
  isSelected: boolean,
): void {
  if (key === undefined) return;
  const element = editor.getElementByKey(key);
  if (!element) return;
  element.classList.toggle(PARA_MARKER_SELECTED_CLASS_NAME, isSelected);
  if (isSelected) element.setAttribute("aria-selected", "true");
  else element.removeAttribute("aria-selected");
}

/**
 * Removes the document's DOM ranges when they sit inside the editor root. Lexical cannot address a
 * position inside the glyph, so a caret the browser drew there on a click would otherwise stay on
 * screen beside a selection that has no caret.
 */
function removeDomRangesInside(root: HTMLElement | null): void {
  if (!root) return;
  const domSelection = root.ownerDocument.defaultView?.getSelection();
  if (!domSelection || domSelection.rangeCount === 0) return;
  if (domSelection.anchorNode && root.contains(domSelection.anchorNode))
    domSelection.removeAllRanges();
}
