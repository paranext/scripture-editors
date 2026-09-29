import { isEditingKey } from "./OpaqueBlockGuardPlugin";
import {
  $advancePastParaPrefixes,
  $placeCaretAtParaContentStart,
  REPAIR_PARA_MARKER_SELECTION_COMMAND,
} from "./ParaMarkerPrefixCursorGuardPlugin";
import { StructureProtectionMode } from "./structure-protection.model";
import {
  $getGutterParaWithCaretAtStart,
  $mergeParaIntoPrevious,
  $placeCaretAfterParaChild,
} from "./structureKeyboard.utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { IS_APPLE, mergeRegister } from "@lexical/utils";
import {
  $createRangeSelection,
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
  COMPOSITION_START_COMMAND,
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
  $getSelectedParaMarkerPara,
  $isGutterMarkerNode,
  $isSomeParaNode,
  $placeCaretAtBoundary,
  $selectParaMarker,
  ParaNode,
  registerParaMarkerSelectionOwner,
  SomeParaNode,
} from "shared";

/**
 * The class the paragraph whose marker is selected carries. The selection is exposed to assistive
 * technology through `aria-activedescendant` on the editor root, naming the selected glyph.
 */
export const PARA_MARKER_SELECTED_CLASS_NAME = "psc-para-marker-selected";

/**
 * Keys that begin text input without announcing a character: an IME's first composition keystroke
 * (`Process`) and a dead key.
 */
const COMPOSITION_KEYS = new Set(["Process", "Dead"]);

/**
 * Input types whose event carries the range they act on — a spellcheck suggestion's word, a drop
 * point — rather than acting at the selection.
 */
const TARGETED_INPUT_TYPES = new Set([
  "insertReplacementText",
  "insertFromDrop",
  "insertFromYank",
  "insertFromPaste",
  "insertFromPasteAsQuotation",
]);

/**
 * Owns a selected paragraph marker: how it is selected, its highlight and accessibility state, and
 * every key and command that reaches it.
 *
 * A marker is selected by a `NodeSelection` of its gutter glyph (`$getSelectedParaMarker`, shared),
 * made only by clicking the glyph; arrow keys never stop on it. Mounting registers the editor with
 * `registerParaMarkerSelectionOwner`, which is what lets `$selectParaMarker` select at all.
 * Everywhere else a selected marker counts as a caret at the start of its paragraph's content.
 *
 * - Highlight: {@link PARA_MARKER_SELECTED_CLASS_NAME} on the selected marker's paragraph,
 *   recomputed every update, plus the root's `aria-activedescendant` naming the glyph, which
 *   carries `role="option"` and `aria-selected` while selected. Hidden while read-only.
 * - Keys (CRITICAL): Enter and Alt+↓ call `onParaMarkerMenuRequest` when it is set; without it,
 *   Enter splits at the content start and Alt+↓ acts like any other arrow. Every arrow, Escape,
 *   typing and text input collapse to the content start; an input aimed at a range of its own (a
 *   spellcheck replacement, a drop) acts there instead.
 * - Removing the marker (Backspace/Delete, by key, command or input event, or a Backspace from the
 *   start of the text of a paragraph with no leading verse) merges its paragraph into the one
 *   before (`$mergeParaIntoPrevious`) — a no-op with nothing before it, and refused under
 *   `"protected"`, as `StructureKeyboardPlugin` refuses the same merge from a caret. Under
 *   `"guarded"`, selecting the marker is the arming step, so one press merges.
 * - Pointer and clipboard: a click elsewhere, or a cut, copy or paste after the browser's selection
 *   moved elsewhere, uses that selection; otherwise paste lands at the content start and cut, copy
 *   and drag-start are refused (the glyph is not content). A drop lands at its drop point, and is
 *   refused only onto the glyph.
 * - Recovery: if a remote edit removes the paragraph, the selection collapses to a neighbour on the
 *   next key, input or `$collapseParaMarkerSelection`.
 *
 * @param onParaMarkerMenuRequest - Called when the user asks, by keyboard, to change the selected
 *   marker.
 * @param structureProtectionMode - The editor's structure protection; `"protected"` refuses the
 *   merge that removing the marker would perform. Defaults to `"off"`.
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
    let highlightedParaKey: NodeKey | undefined;
    let activeDescendantKey: NodeKey | undefined;
    // The last committed marker selection and the paragraphs beside its own, so a selection
    // orphaned by a later update (a remote delete, say) knows where to collapse to.
    let lastSelected: SelectedMarkerKeys | undefined;
    // Set while a pointer is pressed on the root: the focus that press brings places its own caret.
    let isPointerPressed = false;

    /** Hands the request to the host outside this update, so its work never runs mid-commit. */
    const requestMenu = () => {
      queueMicrotask(() => onMenuRequestRef.current?.());
    };

    /** The selected marker's paragraph, while it can be acted on. */
    const $getActivePara = (): ParaNode | undefined =>
      editor.isEditable() ? $getSelectedParaMarkerPara($getSelection()) : undefined;

    // Removing the marker merges its paragraph into the previous one — the paragraph is the
    // operand, never the glyph. Refused under "protected", as `StructureKeyboardPlugin` refuses
    // the same merge from a caret.
    const $removeMarker = (para: SomeParaNode) => {
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

    /**
     * Makes `domRange` the editor's selection, if it lies in the editor and off the glyph.
     *
     * @returns `true` if the editor's selection is now `domRange`.
     */
    const $adoptDomRange = (domRange: StaticRange | undefined, glyphKey: NodeKey): boolean => {
      const container = domRange?.startContainer;
      if (!domRange || !container || !editor.getRootElement()?.contains(container)) return false;
      if (editor.getElementByKey(glyphKey)?.contains(container)) return false;
      const range = $createRangeSelection();
      range.applyDOMRange(domRange);
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
      const para = glyph?.getParent();
      if (!glyph || !$isSomeParaNode(para) || !target) return false;
      if ($adoptDomSelectionElsewhere(glyph.getKey()) || !$isDecoratorNode(target)) return false;
      // Just past a verse number in its paragraph; a chapter number has no paragraph to hold the
      // caret, so the selection collapses as it would for any other edit.
      const parent = target.getParent();
      if ($isSomeParaNode(parent)) $placeCaretAtBoundary(parent, target.getIndexWithinParent() + 1);
      else $placeCaretAtParaContentStart(para);
      return false;
    };

    const $handleKeyDown = (event: KeyboardEvent): boolean => {
      if (typeof event.key !== "string") return false;
      // The key then acts from the repaired caret, as it would from any other.
      if ($repairOrphanedSelection()) return false;
      const para = $getActivePara();
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
        // A virtual keyboard names no key; the `beforeinput` that follows says what it does.
        case "Unidentified":
          return false;
        default:
          if (!isTypingKey(event)) return false;
      }
      // Typing (and Enter without a menu) lands in the paragraph's text: collapse to its first
      // content position and let the keystroke proceed there — never claimed.
      $advancePastParaPrefixes(para);
      return false;
    };

    // Deletion that arrives without a Backspace/Delete keydown (a mapped shortcut such as macOS
    // Ctrl+H / Ctrl+D, or a programmatic dispatch) removes a selected marker. So does a backward
    // delete from the start of the text of a paragraph with no leading verse (a `\q2` line, say),
    // which would otherwise delete the gutter glyph before the caret.
    const $handleDeleteCharacter = (isBackward: boolean): boolean => {
      const para =
        $getActivePara() ??
        (isBackward ? $getGutterParaWithCaretAtStart($getSelection()) : undefined);
      if (!para) return false;
      $removeMarker(para);
      return true;
    };

    // Input with no ordinary keydown (dictation, the emoji picker, a virtual keyboard) lands in the
    // paragraph's text, like typing, unless it is aimed at a range of its own; a delete input
    // removes the marker.
    const $handleBeforeInput = (event: InputEvent): boolean => {
      if ($repairOrphanedSelection()) return false;
      const para = $getActivePara();
      if (!para) return false;
      const { inputType } = event;
      if (inputType.startsWith("delete")) {
        event.preventDefault();
        $removeMarker(para);
        return true;
      }
      if (!inputType.startsWith("insert")) return false;
      const glyphKey = para.getFirstChildOrThrow().getKey();
      const isAimed =
        TARGETED_INPUT_TYPES.has(inputType) &&
        ($adoptDomRange(event.getTargetRanges?.()[0], glyphKey) ||
          $adoptDomSelectionElsewhere(glyphKey));
      if (!isAimed) $advancePastParaPrefixes(para);
      return false;
    };

    // Text inserted by command, and an IME composition starting, land in the paragraph's text.
    // A composition (Android's keyboards compose ordinary typing) needs its own hook:
    // `insertCompositionText` never reaches BEFORE_INPUT_COMMAND.
    const $handleTextInsertion = (): boolean => {
      const para = $getActivePara();
      if (para) $advancePastParaPrefixes(para);
      return false;
    };

    // Paste lands where the browser's selection moved to, or else in the paragraph's text; it is
    // never claimed, so the paste itself is left to whichever handler would run from a caret.
    const $handlePaste = (): boolean => {
      const para = $getActivePara();
      if (!para) return false;
      if (!$adoptDomSelectionElsewhere(para.getFirstChildOrThrow().getKey()))
        $advancePastParaPrefixes(para);
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
    // holds whatever was selected before the drag. A drop ONTO the selected glyph is refused; any
    // other drop moves the selection to its drop point, so the handlers after this one (protected
    // structure's sanitizing insert, say) act there rather than at the marker.
    const $handleDrop = (event: DragEvent): boolean => {
      if (!isDOMNode(event.target)) return false;
      const glyph = $getSelectedParaMarker($getSelection());
      if (!glyph) return false;
      if ($getNearestNodeFromDOMNode(event.target)?.is(glyph)) {
        event.preventDefault();
        return true;
      }
      const document = editor.getRootElement()?.ownerDocument;
      $adoptDomRange(
        document && domRangeFromPoint(document, event.clientX, event.clientY),
        glyph.getKey(),
      );
      return false;
    };

    // Escape arrives as its own command only when no KEY_DOWN handler claimed it. Claimed here so
    // the editor's blur-on-Escape default never runs, but neither prevented nor stopped, so host
    // dismiss listeners still see the key.
    const $handleEscape = (): boolean => {
      const para = $getActivePara();
      if (!para) return false;
      $advancePastParaPrefixes(para);
      return true;
    };

    const isMarkerSelected = () =>
      editor.getEditorState().read(() => $getSelectedParaMarker($getSelection()) !== undefined);

    // Focus that returns without a click (Tab, or a host's `root.focus()` when its dropdown
    // closes) makes the browser draw a caret of its own, usually at the document start, while the
    // marker stays selected. Remove it so the only thing on screen is the marker highlight. Focus
    // a pointer press brings is left alone: that press is placing the caret the user asked for.
    const handleFocus = (): boolean => {
      if (isPointerPressed || !editor.isEditable() || !isMarkerSelected()) return false;
      const root = editor.getRootElement();
      removeDomRangesInside(root);
      // The browser can place its caret after the focus event has been dispatched; by then the
      // marker may no longer be selected.
      root?.ownerDocument.defaultView?.setTimeout(() => {
        if (!isPointerPressed && isMarkerSelected()) removeDomRangesInside(root);
      });
      return false;
    };

    const handlePointerDown = () => {
      isPointerPressed = true;
    };
    const handlePointerUp = () => {
      isPointerPressed = false;
    };

    /**
     * Collapses a marker selection whose paragraph a remote edit removed (or whose glyph stopped
     * being selectable). Run when the user next acts rather than in the update that orphaned it:
     * Lexical runs no transform for a parent made dirty only by a child's removal.
     *
     * @returns `true` if an orphaned selection was collapsed.
     */
    const $repairOrphanedSelection = (): boolean => {
      const selection = $getSelection();
      if (!lastSelected || !$isOrphanedFrom(selection, lastSelected.glyphKey)) return false;
      const { paraKey, previousKey, nextKey } = lastSelected;
      lastSelected = undefined;
      const para = $getNodeByKey(paraKey);
      const previous = previousKey ? $getNodeByKey(previousKey) : null;
      const next = nextKey ? $getNodeByKey(nextKey) : null;
      if ($isSomeParaNode(para) && para.isAttached()) $placeCaretAtParaContentStart(para);
      else if ($isSomeParaNode(previous) && previous.isAttached())
        $placeCaretAfterParaChild(previous, previous.getLastChild());
      else if ($isSomeParaNode(next) && next.isAttached()) $placeCaretAtParaContentStart(next);
      else $setSelection(null);
      return true;
    };

    /** Brings the highlight and the root's active descendant in line with the selected keys. */
    const syncHighlight = (keys: SelectedMarkerKeys | undefined) => {
      // Hidden while read-only: nothing can be done with the marker there.
      const visible = editor.isEditable() ? keys : undefined;
      const paraKey = visible?.paraKey;
      if (highlightedParaKey !== paraKey) setParaHighlight(editor, highlightedParaKey, false);
      highlightedParaKey = paraKey;
      // Re-applied on every update, not only on change: an idempotent add keeps a re-created
      // element highlighted too.
      setParaHighlight(editor, paraKey, true);
      activeDescendantKey = setActiveDescendant(editor, activeDescendantKey, visible?.glyphKey);
    };

    const readSelectedKeys = (editorState = editor.getEditorState()) =>
      editorState.read((): SelectedMarkerKeys | undefined => {
        const glyph = $getSelectedParaMarker($getSelection());
        const para = glyph?.getParent();
        if (!glyph || !para) return undefined;
        return {
          glyphKey: glyph.getKey(),
          paraKey: para.getKey(),
          previousKey: para.getPreviousSibling()?.getKey(),
          nextKey: para.getNextSibling()?.getKey(),
        };
      });

    const unregister = mergeRegister(
      registerParaMarkerSelectionOwner(editor),
      editor.registerEditableListener(() => syncHighlight(readSelectedKeys())),
      editor.registerRootListener((root, previousRoot) => {
        previousRoot?.removeEventListener("pointerdown", handlePointerDown, true);
        root?.addEventListener("pointerdown", handlePointerDown, true);
        // On the document, so a release outside the editor still ends the press.
        previousRoot?.ownerDocument.removeEventListener("pointerup", handlePointerUp, true);
        root?.ownerDocument.addEventListener("pointerup", handlePointerUp, true);
      }),
      () => {
        const root = editor.getRootElement();
        root?.removeEventListener("pointerdown", handlePointerDown, true);
        root?.ownerDocument.removeEventListener("pointerup", handlePointerUp, true);
      },
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
        COMPOSITION_START_COMMAND,
        $handleTextInsertion,
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(
        CONTROLLED_TEXT_INSERTION_COMMAND,
        $handleTextInsertion,
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(PASTE_COMMAND, $handlePaste, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(CUT_COMMAND, $refuseUnlessElsewhere, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(COPY_COMMAND, $refuseUnlessElsewhere, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(DRAGSTART_COMMAND, $refuseUnlessElsewhere, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(DROP_COMMAND, $handleDrop, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(FOCUS_COMMAND, handleFocus, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(
        REPAIR_PARA_MARKER_SELECTION_COMMAND,
        $repairOrphanedSelection,
        COMMAND_PRIORITY_CRITICAL,
      ),
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
      setParaHighlight(editor, highlightedParaKey, false);
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
  paraKey: NodeKey;
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
function setParaHighlight(
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

/**
 * The collapsed DOM range at viewport point (`x`, `y`) — where a drop there lands — or `undefined`
 * where the browser offers no way to ask.
 */
function domRangeFromPoint(document: Document, x: number, y: number): StaticRange | undefined {
  if (typeof document.caretRangeFromPoint === "function")
    return document.caretRangeFromPoint(x, y) ?? undefined;
  if (typeof document.caretPositionFromPoint !== "function") return undefined;
  const position = document.caretPositionFromPoint(x, y);
  if (!position) return undefined;
  const range = document.createRange();
  range.setStart(position.offsetNode, position.offset);
  range.collapse(true);
  return range;
}
