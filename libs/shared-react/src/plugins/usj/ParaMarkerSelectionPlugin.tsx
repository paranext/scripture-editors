import { isEditingKey } from "./OpaqueBlockGuardPlugin";
import { $advancePastParaPrefixes } from "./ParaMarkerPrefixCursorGuardPlugin";
import { registerParaMarkerSelectionOwner } from "./paraMarkerSelectionOwner";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  $getNearestNodeFromDOMNode,
  $getSelection,
  COMMAND_PRIORITY_CRITICAL,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  COPY_COMMAND,
  CUT_COMMAND,
  DRAGSTART_COMMAND,
  DROP_COMMAND,
  KEY_DOWN_COMMAND,
  KEY_ESCAPE_COMMAND,
  LexicalEditor,
  NodeKey,
  PASTE_COMMAND,
} from "lexical";
import { useEffect, useRef } from "react";
import {
  $getSelectedParaMarker,
  $isSomeParaNode,
  $placeCaretAtBoundary,
  ImmutableTypedTextNode,
  SomeParaNode,
} from "shared";

/**
 * The class the paragraph whose marker is selected carries. The selection is exposed to assistive
 * technology through `aria-activedescendant` on the editor root, naming the selected glyph.
 */
export const PARA_MARKER_SELECTED_CLASS_NAME = "psc-para-marker-selected";

/** The class the editor root carries while a refused keystroke's hint should show. */
export const PARA_MARKER_REFUSED_CLASS_NAME = "psc-para-marker-refused";
/** Root attribute naming which delete key was refused. */
export const PARA_MARKER_REFUSED_INTENT_ATTRIBUTE = "data-para-marker-refused-intent";
/** The refused delete direction published in {@link PARA_MARKER_REFUSED_INTENT_ATTRIBUTE}. */
export type ParaMarkerRefusedIntent = "deleteBackward" | "deleteForward";

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
 * (`$getSelectedParaMarker`, shared). Nothing here creates one — a click on the glyph
 * (`ParaMarkerPrefixCursorGuardPlugin`) does — and everything here is inert unless one exists, so
 * the plugin is mounted unconditionally: selection targets only exist where gutter glyphs do.
 *
 * A marker is deliberately not reachable by keyboard: no arrow key stops on it. Keyboard selection
 * is left to the arrow-navigation work, which owns how the caret moves between paragraphs.
 *
 * On every update it recomputes the owning paragraph — an undo, or a structural edit elsewhere, can
 * re-create the paragraph's node and element while the glyph keeps its key — and toggles
 * {@link PARA_MARKER_SELECTED_CLASS_NAME} on that element with plain DOM calls (no nested
 * `editor.update`). The root's `aria-activedescendant` points at the selected glyph, so a screen
 * reader announces the marker the way it would an option in a list: the editor root is a
 * `textbox`, which supports that attribute, while a paragraph's `<p>` supports no selection
 * state at all. While a marker is selected it also removes any DOM range left inside the editor,
 * so no browser caret stays drawn in the glyph.
 *
 * It also registers the editor as able to hold a marker selection
 * (`registerParaMarkerSelectionOwner`). The click guard creates one only in an editor that has
 * it, so a marker is never selected where nothing refuses its deletion. Nor in a read-only editor,
 * where Lexical drops keydown and a selected marker could not be left by keyboard; if the editor
 * turns read-only while one is selected, its highlight is hidden until it is editable again.
 *
 * Registers its key handling at `COMMAND_PRIORITY_CRITICAL`, ahead of `ArrowNavigationPlugin`,
 * `StructureKeyboardPlugin` and `MarkerEditPlugin` (all HIGH), so a selected marker owns the key
 * before those plugins see it. Enter and Alt+ArrowDown ask the host for the marker menu. Every
 * other arrow key, whatever its direction or modifiers, returns the caret to the start of the
 * paragraph's content and stops there: the arrow's own movement does not follow, so the caret and
 * the scripture reference land exactly where a click at that position would put them. Escape
 * returns to the same place, and typing collapses there and lets the keystroke proceed.
 *
 * Deleting the marker is refused, visibly: the editor ships no user-facing strings, so a refused
 * Backspace/Delete publishes a transient signal on the editor root —
 * {@link PARA_MARKER_REFUSED_CLASS_NAME} plus {@link PARA_MARKER_REFUSED_INTENT_ATTRIBUTE} — for
 * the host to render a hint from, cleared on the next selection change (the same pattern as
 * `StructureKeyboardPlugin`'s armed-delete signal). Cut, copy, paste, drag and drop are refused
 * too: rich-text would export the glyph node on copy, and pasting it would insert a glyph into
 * content. Drop is judged by the drop target rather than the live selection, so only a drop onto
 * the selected glyph itself is refused — a drop elsewhere in the document goes through.
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
    let refusedGlyphKey: NodeKey | undefined;

    /** Hands the request to the host outside this update, so its work never runs mid-commit. */
    const requestMenu = () => {
      queueMicrotask(() => onMenuRequestRef.current?.());
    };

    const publishRefusal = (glyphKey: NodeKey, intent: ParaMarkerRefusedIntent) => {
      refusedGlyphKey = glyphKey;
      const root = editor.getRootElement();
      root?.classList.add(PARA_MARKER_REFUSED_CLASS_NAME);
      root?.setAttribute(PARA_MARKER_REFUSED_INTENT_ATTRIBUTE, intent);
    };

    const clearRefusal = () => {
      refusedGlyphKey = undefined;
      const root = editor.getRootElement();
      root?.classList.remove(PARA_MARKER_REFUSED_CLASS_NAME);
      root?.removeAttribute(PARA_MARKER_REFUSED_INTENT_ATTRIBUTE);
    };

    // `unknown` because one guard serves commands with different payloads: an Event for cut,
    // copy, paste and drag-start (prevented here), an `InputEvent | string` for controlled text
    // insertion.
    const $refuseWhileSelected = (payload: unknown): boolean => {
      if (!$getSelectedParaMarker($getSelection())) return false;
      if (payload instanceof Event) payload.preventDefault();
      return true;
    };

    // DROP is judged by the drop TARGET, not the live selection, mirroring
    // `OpaqueBlockGuardPlugin`'s DROP_COMMAND handler: Lexical dispatches DROP_COMMAND straight
    // from the DOM handler with no selection update, so at drop time `$getSelection()` still
    // holds whatever was selected before the drag — not necessarily where this drop lands. A
    // drop elsewhere in the document (e.g. into another paragraph's text) must go through; only a
    // drop ONTO the selected glyph is refused.
    const $refuseDropOnMarker = (event: unknown): boolean => {
      if (!(event instanceof Event) || !(event.target instanceof Node)) return false;
      const glyph = $getSelectedParaMarker($getSelection());
      if (!glyph) return false;
      const targetNode = $getNearestNodeFromDOMNode(event.target);
      if (!targetNode || targetNode.getKey() !== glyph.getKey()) return false;
      event.preventDefault();
      return true;
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
        case "ArrowUp":
        case "ArrowLeft":
        case "ArrowRight":
          event.preventDefault();
          // Alt+ArrowDown opens the marker menu; every other arrow, with any modifier, only returns
          // to the paragraph's text — the arrow's own movement does not follow.
          if (event.key === "ArrowDown" && event.altKey) requestMenu();
          else $selectParaContentStart(para, glyph);
          return true;
        case "Backspace":
        case "Delete":
          event.preventDefault();
          // Invariant I forbids a silent no-op, so the refusal is published for the host to show.
          publishRefusal(
            glyph.getKey(),
            event.key === "Backspace" ? "deleteBackward" : "deleteForward",
          );
          return true;
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

    /** Brings the highlight and the root's active descendant in line with `glyphKey`/`ownerKey`. */
    const syncHighlight = (glyphKey: NodeKey | undefined, ownerKey: NodeKey | undefined) => {
      // Hidden while read-only: nothing can be done with the marker there.
      if (!editor.isEditable()) glyphKey = ownerKey = undefined;
      if (highlightedOwnerKey !== ownerKey) setOwnerHighlight(editor, highlightedOwnerKey, false);
      highlightedOwnerKey = ownerKey;
      // Re-applied on every update, not only on change: an idempotent add keeps a re-created
      // element highlighted too.
      setOwnerHighlight(editor, ownerKey, true);
      setActiveDescendant(editor, glyphKey);
    };

    const readSelectedKeys = (editorState = editor.getEditorState()) =>
      editorState.read(() => {
        const glyph = $getSelectedParaMarker($getSelection());
        return { glyphKey: glyph?.getKey(), ownerKey: glyph?.getParent()?.getKey() };
      });

    const unregister = mergeRegister(
      registerParaMarkerSelectionOwner(editor),
      editor.registerEditableListener(() => {
        const { glyphKey, ownerKey } = readSelectedKeys();
        syncHighlight(glyphKey, ownerKey);
      }),
      editor.registerCommand(KEY_DOWN_COMMAND, $handleKeyDown, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(KEY_ESCAPE_COMMAND, $handleEscape, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(CUT_COMMAND, $refuseWhileSelected, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(COPY_COMMAND, $refuseWhileSelected, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(PASTE_COMMAND, $refuseWhileSelected, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(DRAGSTART_COMMAND, $refuseWhileSelected, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(DROP_COMMAND, $refuseDropOnMarker, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(
        CONTROLLED_TEXT_INSERTION_COMMAND,
        $refuseWhileSelected,
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerUpdateListener(({ editorState }) => {
        const { glyphKey, ownerKey } = readSelectedKeys(editorState);
        syncHighlight(glyphKey, ownerKey);
        if (refusedGlyphKey !== undefined && refusedGlyphKey !== glyphKey) clearRefusal();
        if (ownerKey !== undefined) removeDomRangesInside(editor.getRootElement());
      }),
    );

    return () => {
      unregister();
      setOwnerHighlight(editor, highlightedOwnerKey, false);
      setActiveDescendant(editor, undefined);
      clearRefusal();
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
}

/** Prefix of the ids given to glyph elements so the root's `aria-activedescendant` can name them. */
const GLYPH_ID_PREFIX = "psc-para-marker-";
let nextGlyphId = 0;

/**
 * Points the editor root's `aria-activedescendant` at the element of glyph `key`, giving the element
 * an id if it has none, or removes the attribute when `key` is `undefined` or not rendered.
 */
function setActiveDescendant(editor: LexicalEditor, key: NodeKey | undefined): void {
  const root = editor.getRootElement();
  if (!root) return;
  const element = key === undefined ? null : editor.getElementByKey(key);
  if (!element) {
    root.removeAttribute("aria-activedescendant");
    return;
  }
  if (!element.id) element.id = `${GLYPH_ID_PREFIX}${nextGlyphId++}`;
  root.setAttribute("aria-activedescendant", element.id);
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

/**
 * Mutating: the caret at `para`'s first content position — the placement
 * `$advancePastParaPrefixes` computes, so the marker and verse-skip rules stay in one place.
 */
function $selectParaContentStart(para: SomeParaNode, glyph: ImmutableTypedTextNode): void {
  if (!$advancePastParaPrefixes(para))
    $placeCaretAtBoundary(para, glyph.getIndexWithinParent() + 1);
}
