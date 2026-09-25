import { isEditingKey } from "./OpaqueBlockGuardPlugin";
import { $advancePastParaPrefixes } from "./ParaMarkerPrefixCursorGuardPlugin";
import { StructureProtectionMode } from "./structure-protection.model";
import { $mergeParaIntoPrevious } from "./structureKeyboard.utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { IS_APPLE, mergeRegister } from "@lexical/utils";
import {
  $createRangeSelectionFromDom,
  $getNearestNodeFromDOMNode,
  $getNodeByKey,
  $getSelection,
  $isDecoratorNode,
  $isNodeSelection,
  $setSelection,
  BaseSelection,
  BEFORE_INPUT_COMMAND,
  CLICK_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  COPY_COMMAND,
  CUT_COMMAND,
  DELETE_CHARACTER_COMMAND,
  DRAGSTART_COMMAND,
  DROP_COMMAND,
  EditorState,
  FOCUS_COMMAND,
  getDOMSelection,
  isDOMNode,
  KEY_DOWN_COMMAND,
  KEY_ESCAPE_COMMAND,
  LexicalEditor,
  NodeKey,
  PASTE_COMMAND,
} from "lexical";
import { useEffect, useRef } from "react";
import {
  $getSelectedParaMarker,
  $getSelectedParaMarkerOwner,
  $isGutterMarkerNode,
  $isSomeParaNode,
  $placeCaretAtBoundary,
  $selectParaMarker,
  ParaNode,
  registerParaMarkerSelectionOwner,
} from "shared";

/**
 * The class the paragraph whose marker is selected carries. The selection is exposed to assistive
 * technology through `aria-activedescendant` on the editor root, naming the selected glyph.
 */
export const PARA_MARKER_SELECTED_CLASS_NAME = "psc-para-marker-selected";

/**
 * Keys that begin text input without announcing a character: an IME's first composition keystroke
 * (`Process`), a dead key, and the `Unidentified` some platforms report while composing.
 */
const COMPOSITION_KEYS = new Set(["Process", "Dead", "Unidentified"]);

/**
 * Owns a selected paragraph marker: how it is selected, its highlight and accessibility state, and
 * every key and command that reaches it.
 *
 * A marker is selected by a `NodeSelection` of its gutter glyph (`$getSelectedParaMarker`, shared),
 * made only by a click on the glyph — no arrow key stops on it; keyboard selection is left to the
 * arrow-navigation work. Mounting registers the editor as an owner
 * (`registerParaMarkerSelectionOwner`), which is what lets `$selectParaMarker` select at all.
 * Everywhere else a selected marker counts as a caret at the start of its paragraph's content.
 *
 * - Highlight: {@link PARA_MARKER_SELECTED_CLASS_NAME} on the owning paragraph, recomputed every
 *   update, plus the root's `aria-activedescendant` naming the glyph, which carries
 *   `role="option"` and `aria-selected` while selected. Hidden while read-only.
 * - Keys (CRITICAL): Enter and Alt+↓ call `onParaMarkerMenuRequest`, or without one act as they
 *   would at the content start; every other arrow, Escape, typing and text input collapse to the
 *   content start. Backspace/Delete, by key, command or input event, merge the paragraph into the
 *   one before (`$mergeParaIntoPrevious`) — a no-op with nothing before it, refused where
 *   structure is protected.
 * - Pointer and clipboard: a click elsewhere, or a cut, copy or paste after the browser's selection
 *   moved elsewhere, uses that selection; otherwise paste lands at the content start and cut, copy
 *   and drag-start are refused (the glyph is not content). A drop is refused only onto the glyph.
 * - Recovery: a selection whose glyph is removed or stops being selectable (a remote edit) collapses
 *   on the next key or input to the paragraph's content, or to a neighbour when the paragraph is
 *   gone too.
 *
 * @param onParaMarkerMenuRequest - Called when the user asks, by keyboard, to change the selected
 *   marker.
 * @param structureProtectionMode - The editor's structure protection; `"protected"` refuses the
 *   merge that Backspace/Delete would perform. Defaults to `"off"`.
 * @returns Always `null`; the highlight is published to the DOM.
 */
export function ParaMarkerSelectionPlugin({
  onParaMarkerMenuRequest,
  structureProtectionMode = "off",
}: {
  onParaMarkerMenuRequest?: () => void;
  structureProtectionMode?: StructureProtectionMode;
}): null {
  const [editor] = useLexicalComposerContext();
  const onMenuRequestRef = useRef(onParaMarkerMenuRequest);
  useEffect(() => {
    onMenuRequestRef.current = onParaMarkerMenuRequest;
  }, [onParaMarkerMenuRequest]);
  const structureProtectionModeRef = useRef(structureProtectionMode);
  useEffect(() => {
    structureProtectionModeRef.current = structureProtectionMode;
  }, [structureProtectionMode]);

  useEffect(() => {
    let highlightedOwnerKey: NodeKey | undefined;
    let activeDescendantKey: NodeKey | undefined;
    // The last committed marker selection and the paragraphs beside its owner, so a selection
    // orphaned by a later update (a remote delete, say) knows where to collapse to.
    let lastSelected: SelectedMarkerKeys | undefined;

    /** Hands the request to the host outside this update, so its work never runs mid-commit. */
    const requestMenu = () => {
      queueMicrotask(() => onMenuRequestRef.current?.());
    };

    /** The selected marker's paragraph, while it can be acted on. */
    const $getActiveOwner = (): ParaNode | undefined =>
      editor.isEditable() ? $getSelectedParaMarkerOwner($getSelection()) : undefined;

    // Both keys remove the marker, which merges its paragraph into the one before — the paragraph
    // is the operand, never the glyph. Refused where structure is protected, as
    // `StructureKeyboardPlugin` refuses the same merge from a caret.
    const $removeMarker = (para: ParaNode) => {
      if (structureProtectionModeRef.current !== "protected") $mergeParaIntoPrevious(para);
    };

    /**
     * Adopts the browser's selection when it has moved off the glyph — a right-click on other text,
     * say, which Lexical does not turn into a selection of its own.
     *
     * @returns `true` if the editor's selection now follows the browser's.
     */
    const $adoptDomSelectionElsewhere = (glyphKey: NodeKey): boolean => {
      const root = editor.getRootElement();
      const domSelection = getDOMSelection(root?.ownerDocument.defaultView ?? null);
      const anchorNode = domSelection?.anchorNode;
      if (!domSelection || !anchorNode || !root?.contains(anchorNode)) return false;
      if (editor.getElementByKey(glyphKey)?.contains(anchorNode)) return false;
      const range = $createRangeSelectionFromDom(domSelection, editor);
      if (!range) return false;
      $setSelection(range);
      return true;
    };

    const $handleClick = (event: MouseEvent): boolean => {
      const target = isDOMNode(event.target) ? $getNearestNodeFromDOMNode(event.target) : null;
      if ($isGutterMarkerNode(target)) return $selectParaMarker(target);
      // A click elsewhere while a marker is selected ends the selection where the click landed.
      // Lexical does not rebuild the selection from a press on a decorator (a verse or chapter
      // number), and rich-text would then clear the marker selection and leave none at all.
      const glyph = $getSelectedParaMarker($getSelection());
      if (!glyph || !target) return false;
      if ($adoptDomSelectionElsewhere(glyph.getKey())) return false;
      const parent = target.getParent();
      if ($isDecoratorNode(target) && parent)
        $placeCaretAtBoundary(parent, target.getIndexWithinParent() + 1);
      return false;
    };

    const $handleKeyDown = (event: KeyboardEvent): boolean => {
      if (typeof event.key !== "string") return false;
      // The key then acts from the repaired caret, as it would from any other.
      if ($repairOrphanedSelection()) return false;
      const para = $getActiveOwner();
      if (!para) return false;

      const hasMenu = onMenuRequestRef.current !== undefined;
      switch (event.key) {
        case "Enter":
          if (!hasMenu) break;
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
          if (event.key === "ArrowDown" && event.altKey && hasMenu) requestMenu();
          else $advancePastParaPrefixes(para);
          return true;
        case "Backspace":
        case "Delete":
          event.preventDefault();
          $removeMarker(para);
          return true;
        default:
          if (!isTypingKey(event)) return false;
      }
      // Typing (and Enter without a menu) lands in the paragraph's text: collapse to its first
      // content position and let the keystroke proceed there — never claimed.
      $advancePastParaPrefixes(para);
      return false;
    };

    // Deletion that arrives without a Backspace/Delete keydown: a mapped shortcut (macOS Ctrl+H /
    // Ctrl+D), a programmatic dispatch, or a virtual keyboard's `beforeinput`.
    const $handleDeleteCharacter = (): boolean => {
      const para = $getActiveOwner();
      if (!para) return false;
      $removeMarker(para);
      return true;
    };

    // Input with no ordinary keydown (dictation, the emoji picker, IME commits) lands in the
    // paragraph's text, like typing; a delete input removes the marker.
    const $handleBeforeInput = (event: InputEvent): boolean => {
      if ($repairOrphanedSelection()) return false;
      const para = $getActiveOwner();
      if (!para) return false;
      if (event.inputType.startsWith("delete")) {
        event.preventDefault();
        $removeMarker(para);
        return true;
      }
      if (event.inputType.startsWith("insert")) $advancePastParaPrefixes(para);
      return false;
    };

    const $handleTextInsertion = (): boolean => {
      const para = $getActiveOwner();
      if (para) $advancePastParaPrefixes(para);
      return false;
    };

    // Paste lands where the browser's selection moved to, or else in the paragraph's text; it is
    // never claimed, so the paste itself is left to whichever handler would run from a caret.
    const $handlePaste = (): boolean => {
      const glyph = editor.isEditable() ? $getSelectedParaMarker($getSelection()) : undefined;
      const para = glyph?.getParent();
      if (!glyph || !$isSomeParaNode(para)) return false;
      if (!$adoptDomSelectionElsewhere(glyph.getKey())) $advancePastParaPrefixes(para);
      return false;
    };

    // `unknown` because one guard serves commands with different payloads: a `ClipboardEvent` for
    // cut and copy, a `DragEvent` for drag-start.
    const $refuseUnlessElsewhere = (payload: unknown): boolean => {
      const glyph = $getSelectedParaMarker($getSelection());
      if (!glyph || !editor.isEditable()) return false;
      if ($adoptDomSelectionElsewhere(glyph.getKey())) return false;
      if (isPreventable(payload)) payload.preventDefault();
      return true;
    };

    // DROP is judged by the drop TARGET, not the live selection, mirroring
    // `OpaqueBlockGuardPlugin`'s DROP_COMMAND handler: Lexical dispatches DROP_COMMAND straight
    // from the DOM handler with no selection update, so at drop time `$getSelection()` still
    // holds whatever was selected before the drag. Only a drop ONTO the selected glyph is refused.
    const $refuseDropOnMarker = (event: DragEvent): boolean => {
      if (!isDOMNode(event.target)) return false;
      const glyph = $getSelectedParaMarker($getSelection());
      if (!glyph) return false;
      if (!$getNearestNodeFromDOMNode(event.target)?.is(glyph)) return false;
      event.preventDefault();
      return true;
    };

    // Escape arrives as its own command only when no KEY_DOWN handler claimed it. Claimed here so
    // the editor's blur-on-Escape default never runs, but neither prevented nor stopped, so host
    // dismiss listeners still see the key.
    const $handleEscape = (): boolean => {
      const para = $getActiveOwner();
      if (!para) return false;
      $advancePastParaPrefixes(para);
      return true;
    };

    // Focus that returns without a click (Tab, or a host's `root.focus()` when its dropdown
    // closes) makes the browser draw a caret of its own, usually at the document start, while the
    // marker stays selected. Remove it so the only thing on screen is the marker highlight.
    const handleFocus = (): boolean => {
      const isSelected = editor
        .getEditorState()
        .read(() => $getSelectedParaMarker($getSelection()) !== undefined);
      if (isSelected && editor.isEditable()) {
        const root = editor.getRootElement();
        removeDomRangesInside(root);
        // The browser can place its caret after the focus event has been dispatched.
        root?.ownerDocument.defaultView?.setTimeout(() => removeDomRangesInside(root));
      }
      return false;
    };

    /**
     * Collapses a marker selection whose glyph is gone or no longer selectable — after a remote
     * delete, say. Run when the user next acts rather than in the update that orphaned it: Lexical
     * runs no transform for a parent made dirty only by a child's removal.
     *
     * @returns `true` if an orphaned selection was collapsed.
     */
    const $repairOrphanedSelection = (): boolean => {
      const selection = $getSelection();
      if (!lastSelected || !$isOrphanedFrom(selection, lastSelected.glyphKey)) return false;
      const { ownerKey, previousKey, nextKey } = lastSelected;
      lastSelected = undefined;
      const owner = $getNodeByKey(ownerKey);
      const previous = previousKey ? $getNodeByKey(previousKey) : null;
      const next = nextKey ? $getNodeByKey(nextKey) : null;
      if ($isSomeParaNode(owner) && owner.isAttached()) {
        if (!$advancePastParaPrefixes(owner)) owner.selectStart();
      } else if (previous?.isAttached()) previous.selectEnd();
      else if ($isSomeParaNode(next) && next.isAttached()) {
        if (!$advancePastParaPrefixes(next)) next.selectStart();
      } else $setSelection(null);
      return true;
    };

    /** Brings the highlight and the root's active descendant in line with the selected keys. */
    const syncHighlight = (keys: SelectedMarkerKeys | undefined) => {
      // Hidden while read-only: nothing can be done with the marker there.
      const visible = editor.isEditable() ? keys : undefined;
      const ownerKey = visible?.ownerKey;
      if (highlightedOwnerKey !== ownerKey) setOwnerHighlight(editor, highlightedOwnerKey, false);
      highlightedOwnerKey = ownerKey;
      // Re-applied on every update, not only on change: an idempotent add keeps a re-created
      // element highlighted too.
      setOwnerHighlight(editor, ownerKey, true);
      activeDescendantKey = setActiveDescendant(editor, activeDescendantKey, visible?.glyphKey);
    };

    const readSelectedKeys = (editorState = editor.getEditorState()) =>
      editorState.read((): SelectedMarkerKeys | undefined => {
        const glyph = $getSelectedParaMarker($getSelection());
        const owner = glyph?.getParent();
        if (!glyph || !owner) return undefined;
        return {
          glyphKey: glyph.getKey(),
          ownerKey: owner.getKey(),
          previousKey: owner.getPreviousSibling()?.getKey(),
          nextKey: owner.getNextSibling()?.getKey(),
        };
      });

    const unregister = mergeRegister(
      registerParaMarkerSelectionOwner(editor),
      editor.registerEditableListener(() => syncHighlight(readSelectedKeys())),
      editor.registerCommand(CLICK_COMMAND, $handleClick, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(KEY_DOWN_COMMAND, $handleKeyDown, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(KEY_ESCAPE_COMMAND, $handleEscape, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(
        DELETE_CHARACTER_COMMAND,
        $handleDeleteCharacter,
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(BEFORE_INPUT_COMMAND, $handleBeforeInput, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(
        CONTROLLED_TEXT_INSERTION_COMMAND,
        $handleTextInsertion,
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(PASTE_COMMAND, $handlePaste, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(CUT_COMMAND, $refuseUnlessElsewhere, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(COPY_COMMAND, $refuseUnlessElsewhere, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(DRAGSTART_COMMAND, $refuseUnlessElsewhere, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(DROP_COMMAND, $refuseDropOnMarker, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(FOCUS_COMMAND, handleFocus, COMMAND_PRIORITY_CRITICAL),
      editor.registerUpdateListener(({ editorState }) => {
        const keys = readSelectedKeys(editorState);
        // Kept past an update that orphans the selection, so the repair knows where it was.
        if (keys || !isOrphaned(editorState, lastSelected?.glyphKey)) lastSelected = keys;
        syncHighlight(keys);
        if (keys && editor.isEditable()) removeDomRangesInside(editor.getRootElement());
      }),
    );

    return () => {
      unregister();
      setOwnerHighlight(editor, highlightedOwnerKey, false);
      setActiveDescendant(editor, activeDescendantKey, undefined);
    };
  }, [editor]);

  return null;
}

/**
 * Whether `selection` is a marker selection of `glyphKey` that no longer selects a marker: a node
 * selection still naming the glyph, or left naming nothing once the glyph was removed.
 *
 * Read-only: safe in any read.
 */
function $isOrphanedFrom(selection: BaseSelection | null, glyphKey: NodeKey): boolean {
  if (!$isNodeSelection(selection) || $getSelectedParaMarker(selection)) return false;
  return selection.has(glyphKey) || selection.getNodes().length === 0;
}

/** Whether `editorState`'s selection is orphaned from the marker selection of `glyphKey`. */
function isOrphaned(editorState: EditorState, glyphKey: NodeKey | undefined): boolean {
  if (glyphKey === undefined) return false;
  return editorState.read(() => $isOrphanedFrom($getSelection(), glyphKey));
}

/** The keys of a selected marker's glyph and paragraph, and of the paragraph's siblings. */
interface SelectedMarkerKeys {
  glyphKey: NodeKey;
  ownerKey: NodeKey;
  previousKey: NodeKey | undefined;
  nextKey: NodeKey | undefined;
}

/**
 * Whether a keydown types text: anything `isEditingKey` counts, a composition key, or a single
 * character `isEditingKey` misses — one outside the BMP (an emoji, Adlam), or one typed with
 * macOS's Option key, which Chromium reports only as Alt.
 */
function isTypingKey(event: KeyboardEvent): boolean {
  if (isEditingKey(event) || COMPOSITION_KEYS.has(event.key)) return true;
  if (event.ctrlKey || event.metaKey || (event.altKey && !IS_APPLE)) return false;
  return isOneCharacter(event.key);
}

/** Whether `key` is one character, counting a surrogate pair (an emoji, Adlam) as one. */
function isOneCharacter(key: string): boolean {
  return [...key].length === 1;
}

/** Whether `payload` is an event that can be prevented — duck-typed so a cross-window event counts. */
function isPreventable(payload: unknown): payload is { preventDefault(): void } {
  return (
    typeof payload === "object" &&
    payload !== null &&
    typeof (payload as { preventDefault?: unknown }).preventDefault === "function"
  );
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

/**
 * Points the editor root's `aria-activedescendant` at the element of glyph `key`, marking it as the
 * selected option, and withdraws that from the glyph `previousKey` named. Leaves the attribute
 * alone when this plugin never set it.
 *
 * @returns the key now named, or `undefined` when none is.
 */
function setActiveDescendant(
  editor: LexicalEditor,
  previousKey: NodeKey | undefined,
  key: NodeKey | undefined,
): NodeKey | undefined {
  const root = editor.getRootElement();
  const element = key === undefined ? null : editor.getElementByKey(key);
  const previous = previousKey === undefined ? null : editor.getElementByKey(previousKey);
  if (previous && previous !== element) {
    previous.removeAttribute("role");
    previous.removeAttribute("aria-selected");
  }
  if (!root) return undefined;
  if (!element || key === undefined) {
    if (previousKey !== undefined) root.removeAttribute("aria-activedescendant");
    return undefined;
  }
  if (!element.id) element.id = `${GLYPH_ID_PREFIX}${editor.getKey()}-${key}`;
  element.setAttribute("role", "option");
  element.setAttribute("aria-selected", "true");
  root.setAttribute("aria-activedescendant", element.id);
  return key;
}

/**
 * Removes the document's DOM ranges when they sit inside the editor root. Lexical cannot address a
 * position inside the glyph, so a caret the browser drew there on a click would otherwise stay on
 * screen beside a selection that has no caret.
 */
function removeDomRangesInside(root: HTMLElement | null | undefined): void {
  if (!root) return;
  const domSelection = root.ownerDocument.defaultView?.getSelection();
  if (!domSelection || domSelection.rangeCount === 0) return;
  if (domSelection.anchorNode && root.contains(domSelection.anchorNode))
    domSelection.removeAllRanges();
}
