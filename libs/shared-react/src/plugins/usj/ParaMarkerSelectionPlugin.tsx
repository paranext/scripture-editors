import { getEditorTextDirection, isMovingForward } from "./ArrowNavigationPlugin";
import { isEditingKey } from "./OpaqueBlockGuardPlugin";
import { $advancePastParaPrefixes } from "./ParaMarkerPrefixCursorGuardPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  $getSelection,
  $isTextNode,
  COMMAND_PRIORITY_CRITICAL,
  KEY_DOWN_COMMAND,
  KEY_ESCAPE_COMMAND,
  LexicalEditor,
  LexicalNode,
  NodeKey,
} from "lexical";
import { useEffect, useRef } from "react";
import {
  $findFirstAncestorNoteNode,
  $getSelectableParaMarker,
  $getSelectedParaMarker,
  $isSomeParaNode,
  $placeCaretAtBoundary,
  $selectParaMarker,
  ImmutableTypedTextNode,
  SomeParaNode,
} from "shared";

/** The class the paragraph whose marker is selected carries (with `aria-selected="true"`). */
export const PARA_MARKER_SELECTED_CLASS_NAME = "psc-para-marker-selected";

/**
 * Keys that begin text input without announcing a character: an IME's first composition keystroke
 * (`Process`), a dead key, and the `Unidentified` some platforms report while composing.
 */
const COMPOSITION_KEYS = new Set(["Process", "Dead", "Unidentified"]);

/**
 * Owns a selected paragraph marker for as long as it is selected: the row highlight, the
 * accessibility state, and every key and command that reaches it.
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
 * Registers its key handling at `COMMAND_PRIORITY_CRITICAL`, ahead of `ArrowNavigationPlugin`,
 * `StructureKeyboardPlugin` and `MarkerEditPlugin` (all HIGH), so a selected marker owns the key
 * before those plugins see it: arrows leave or walk the marker column (mirrored for RTL via
 * {@link getEditorTextDirection}/{@link isMovingForward}), Enter and Alt+ArrowDown ask the host for
 * the marker menu, Escape returns the caret to the paragraph's content, and typing collapses to the
 * content and lets the keystroke proceed there.
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

    /** Hands the request to the host outside this update, so its work never runs mid-commit. */
    const requestMenu = () => {
      // A read-only editor offers nothing to change the marker to.
      if (!editor.isEditable()) return;
      queueMicrotask(() => onMenuRequestRef.current?.());
    };

    const $handleKeyDown = (event: KeyboardEvent): boolean => {
      const glyph = $getSelectedParaMarker($getSelection());
      const para = glyph?.getParent();
      if (!glyph || !$isSomeParaNode(para)) return false;

      switch (event.key) {
        case "Enter":
          event.preventDefault();
          requestMenu();
          return true;
        case "ArrowDown":
          event.preventDefault();
          if (event.altKey) requestMenu();
          else $selectSiblingParaMarker(para, "next");
          return true;
        case "ArrowUp":
          event.preventDefault();
          $selectSiblingParaMarker(para, "previous");
          return true;
        case "ArrowLeft":
        case "ArrowRight": {
          event.preventDefault();
          const root = editor.getRootElement();
          const direction = root ? getEditorTextDirection(root) : "ltr";
          if (isMovingForward(direction, event.key)) $selectParaContentStart(para, glyph);
          else $selectEndOfPreviousPara(para);
          return true;
        }
        default:
          // Typing lands in the paragraph's text: collapse to its first content position and let
          // the keystroke proceed there (typing, IME composition) — never claimed.
          if (isEditingKey(event) || COMPOSITION_KEYS.has(event.key))
            $selectParaContentStart(para, glyph);
          return false;
      }
    };

    // Escape arrives as its own command only when no KEY_DOWN handler claimed it. Claimed here so
    // the editor's blur-on-Escape default never runs, but neither prevented nor stopped, so host
    // dismiss listeners still see the key.
    const $handleEscape = (): boolean => {
      const glyph = $getSelectedParaMarker($getSelection());
      const para = glyph?.getParent();
      if (!glyph || !$isSomeParaNode(para)) return false;
      $selectParaContentStart(para, glyph);
      return true;
    };

    const unregister = mergeRegister(
      editor.registerCommand(KEY_DOWN_COMMAND, $handleKeyDown, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(KEY_ESCAPE_COMMAND, $handleEscape, COMMAND_PRIORITY_CRITICAL),
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

/** The root-level sibling of `node` one step in `direction`. */
function $siblingOf(node: LexicalNode, direction: "previous" | "next"): LexicalNode | null {
  return direction === "next" ? node.getNextSibling() : node.getPreviousSibling();
}

/**
 * The marker glyph of the nearest root-level sibling of `para`, in `direction`, whose marker can be
 * selected — the next stop when ↑/↓ walk the marker column. Chapter numbers, the book `\id` line,
 * tables and paragraphs without a gutter glyph are stepped over.
 *
 * Read-only: safe in any read — `editor.getEditorState().read()`, an `editor.update()`, or a
 * command handler.
 */
export function $findSiblingParaMarker(
  para: SomeParaNode,
  direction: "previous" | "next",
): ImmutableTypedTextNode | undefined {
  for (
    let sibling = $siblingOf(para, direction);
    sibling;
    sibling = $siblingOf(sibling, direction)
  ) {
    const glyph = $getSelectableParaMarker(sibling);
    if (glyph) return glyph;
  }
  return undefined;
}

/**
 * The nearest root-level paragraph before `para` — where ← out of a selected marker puts the
 * caret. Any paragraph can hold a caret; chapter numbers, the book `\id` line and tables are
 * stepped over.
 *
 * Read-only: safe in any read — `editor.getEditorState().read()`, an `editor.update()`, or a
 * command handler.
 */
export function $findPreviousCaretPara(para: SomeParaNode): SomeParaNode | undefined {
  for (let sibling = para.getPreviousSibling(); sibling; sibling = sibling.getPreviousSibling())
    if ($isSomeParaNode(sibling)) return sibling;
  return undefined;
}

/** Mutating: selects the nearest sibling marker in `direction`, or leaves the selection alone. */
function $selectSiblingParaMarker(para: SomeParaNode, direction: "previous" | "next"): void {
  const target = $findSiblingParaMarker(para, direction);
  if (target) $selectParaMarker(target);
}

/**
 * Mutating: the caret at `para`'s first content position — the placement
 * `$advancePastParaPrefixes` computes, so the marker and verse-skip rules stay in one place.
 */
function $selectParaContentStart(para: SomeParaNode, glyph: ImmutableTypedTextNode): void {
  if (!$advancePastParaPrefixes(para))
    $placeCaretAtBoundary(para, glyph.getIndexWithinParent() + 1);
}

/** Mutating: the caret at the end of the nearest previous paragraph, or nothing when there is none. */
function $selectEndOfPreviousPara(para: SomeParaNode): void {
  const previous = $findPreviousCaretPara(para);
  if (previous) $selectParaEnd(previous);
}

/**
 * Mutating: collapses the caret at the end of `para`'s content — the end of its last text, or the
 * element point past its last child when that text would be inside a note (a collapsed note's
 * content is hidden) or there is no text at all (an empty or verse-only paragraph).
 */
function $selectParaEnd(para: SomeParaNode): void {
  const last = para.getLastDescendant();
  if ($isTextNode(last) && !$findFirstAncestorNoteNode(last)) {
    const end = last.getTextContentSize();
    last.select(end, end);
    return;
  }
  const size = para.getChildrenSize();
  para.select(size, size);
}
