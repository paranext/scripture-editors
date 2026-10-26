import {
  $isArmedSelection,
  $mergeParaIntoPrevious,
  $placeCaretAfterParaChild,
  $placeCaretAtEnd,
  $sanitizeNodesForProtectedStructure,
  $selectionContainsVerseMarker,
  $shouldBlockSelectionReplacement,
  $shouldBlockStructuralEdit,
  $structuralDeleteTarget,
  ArmedDelete,
  CONFIRMED_DELETE_TAG,
  keyDownToIntent,
} from "./structureKeyboard.utils";
import { $generateNodesFromDOM } from "@lexical/html";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import DOMPurify from "dompurify";
import { mergeRegister } from "@lexical/utils";
import {
  $addUpdateTag,
  $createNodeSelection,
  $createRangeSelection,
  $getNodeByKey,
  $getSelection,
  $hasUpdateTag,
  $isRangeSelection,
  $isTextNode,
  $setSelection,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_HIGH,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  CUT_COMMAND,
  DELETE_CHARACTER_COMMAND,
  DRAGSTART_COMMAND,
  DROP_COMMAND,
  KEY_DOWN_COMMAND,
  PASTE_COMMAND,
} from "lexical";
import { useEffect, useRef, useState, useCallback } from "react";
import { $isSomeVerseNode, VERSE_SELECTED_CLASS_NAME } from "../../nodes/usj";
import { $isParaLikeNode, $isSomeParaNode } from "shared";
import { $narrowSelectionPastBookPrefix } from "./ParaMarkerPrefixCursorGuardPlugin";
import { StructureProtectionMode } from "./structure-protection.model";

/**
 * Governs structural keystrokes (Backspace/Delete/Enter/typing) at verse-, chapter- and
 * paragraph-marker boundaries. In `"protected"` mode, blocks them and sanitizes paste/drop payloads so structural
 * markers (paragraph breaks, verse markers, chapter markers) cannot be inserted — text, inline
 * character formatting, and notes are kept. In `"guarded"` mode, makes deletion a deliberate
 * two-step gesture instead: first press selects the marker/section, second press deletes it.
 * In `"off"` mode, no handlers are registered and editing is fully native.
 * Registers a KEY_DOWN handler at COMMAND_PRIORITY_HIGH, mirroring ArrowNavigationPlugin, and
 * the CUT refusal at COMMAND_PRIORITY_CRITICAL so it outranks the handlers that perform a cut.
 *
 * The armed state is published to the DOM (rather than rendered here) so the host app owns the
 * user-facing hint: the root element carries the `verse-delete-armed` class plus
 * `data-verse-delete-intent` (`deleteBackward` | `deleteForward`) and `data-verse-delete-kind`
 * (`verse` | `selection`), and the armed marker carries the `verse-selected` class. The host can
 * observe these to render a localized tooltip (see paranext-core's VerseDeleteTooltipOverlay). An
 * armed chapter carries the `verse-selected` class too, so it shows the same armed styling, but
 * publishes no hint kind: the host's hint names a verse marker or a selection, never a chapter.
 *
 * @param structureProtectionMode - `"off"` (e.g. the Power interface mode): the plugin registers
 *   no handlers and editing is fully native — no blocking, no two-step delete, no armed state.
 *   `"guarded"`: two-step intentional-delete behavior is active. `"protected"`: structural
 *   keystrokes and paste/drop of structural markers are blocked outright. Defaults to `"off"`.
 * @returns Always `null`; this plugin renders no UI, only editor behavior and DOM signals.
 */
export function StructureKeyboardPlugin({
  structureProtectionMode = "off",
}: {
  structureProtectionMode?: StructureProtectionMode;
}): null {
  const [editor] = useLexicalComposerContext();
  const armedRef = useRef<ArmedDelete | undefined>(undefined);
  const [armed, setArmed] = useState<ArmedDelete | undefined>(undefined);
  const setArmedState = useCallback((next: ArmedDelete | undefined) => {
    armedRef.current = next;
    setArmed(next);
  }, []);

  useEffect(() => {
    // Feature off (e.g. Power mode): register nothing so editing stays fully native.
    if (structureProtectionMode === "off") return undefined;

    const $handleKeyDown = (event: KeyboardEvent): boolean => {
      const intent = keyDownToIntent(event);
      if (!intent) return false;
      const selection = $getSelection();
      if (structureProtectionMode === "protected") {
        if (selection && $shouldBlockStructuralEdit(selection, intent)) {
          event.preventDefault();
          return true;
        }
        return false;
      }
      // Guarded: two-step intentional delete (delete intents only).
      if (intent !== "deleteBackward" && intent !== "deleteForward") return false;
      return $handleTwoStepDelete(intent, event);
    };

    const $handleTwoStepDelete = (
      intent: "deleteBackward" | "deleteForward",
      event: KeyboardEvent | undefined,
    ): boolean => {
      const selection = $getSelection();
      const armed = armedRef.current;

      // FIRE / cancel: a target is armed.
      if (armed && selection && $isArmedSelection(selection, armed)) {
        setArmedState(undefined);
        event?.preventDefault();
        if (intent !== armed.intent) return true; // mismatched direction: cancel, no delete
        const node = $getNodeByKey(armed.key) ?? undefined;
        if (armed.kind === "verse") {
          if (node) {
            const parent = node.getParent();
            const prev = node.getPreviousSibling();
            const next = node.getNextSibling();
            node.remove();
            if (prev) $placeCaretAtEnd(prev);
            else if (next && $isTextNode(next)) next.select(0, 0);
            else parent?.selectStart();
          }
        } else if (armed.kind === "chapter") {
          if (node) {
            // The caret goes back where the arming press found it: the content start of the
            // block after the chapter (Backspace) or the end of the block before it (Delete).
            const prev = node.getPreviousSibling();
            const next = node.getNextSibling();
            node.remove();
            if (intent === "deleteBackward" && $isParaLikeNode(next))
              $placeCaretAfterParaChild(next, null);
            else if ($isParaLikeNode(prev)) $placeCaretAfterParaChild(prev, prev.getLastChild());
          }
        } else if (armed.kind === "selection") {
          // Deletes the whole range, verse included, through the command every selection delete
          // reaches, so the guards on one judge this one too (the question before hidden content
          // goes, among them). Tagged as confirmed, so this plugin's own command handler lets it
          // through rather than arming again. A range that starts before the `\id` line's prefix
          // is kept off the glyph here as well, so this fire never relies on the prefix guard.
          if ($isRangeSelection(selection)) {
            $narrowSelectionPastBookPrefix(selection);
            $addUpdateTag(CONFIRMED_DELETE_TAG);
            editor.dispatchCommand(DELETE_CHARACTER_COMMAND, intent === "deleteBackward");
          }
        } else if ($isSomeParaNode(node)) {
          // Only paragraphs merge into paragraphs; never merge some other ElementNode.
          $mergeParaIntoPrevious(node);
        }
        return true;
      }

      // ARM: caret at a structural boundary, or a range selection containing a verse marker.
      if (!selection) return false;
      const target = $structuralDeleteTarget(selection, intent);
      if (target) {
        if (target.kind === "verse" || target.kind === "chapter") {
          const ns = $createNodeSelection();
          ns.add(target.node.getKey());
          $setSelection(ns);
        } else {
          const range = $createRangeSelection();
          range.anchor.set(target.node.getKey(), 0, "element");
          range.focus.set(target.node.getKey(), target.node.getChildrenSize(), "element");
          $setSelection(range);
        }
        setArmedState({ key: target.node.getKey(), kind: target.kind, intent });
        event?.preventDefault();
        return true;
      }
      // Range/text selection that includes a verse marker: arm without altering the selection.
      if (
        $isRangeSelection(selection) &&
        !selection.isCollapsed() &&
        $selectionContainsVerseMarker(selection)
      ) {
        const verseKeys = selection
          .getNodes()
          .filter($isSomeVerseNode)
          .map((n) => n.getKey());
        const { anchor, focus } = selection;
        setArmedState({
          kind: "selection",
          intent,
          key: verseKeys[0],
          anchor: { key: anchor.key, offset: anchor.offset, type: anchor.type },
          focus: { key: focus.key, offset: focus.offset, type: focus.type },
        });
        event?.preventDefault();
        return true;
      }
      return false;
    };

    // Guard for vectors that bypass KEY_DOWN (cut, dragstart, IME-composed input).
    // Rule 1: block when the selection spans a boundary or contains a verse marker.
    // `payload` is `unknown` because this guard serves commands with differing payload
    // types: CUT/DRAGSTART carry an `Event` (which we preventDefault), while
    // CONTROLLED_TEXT_INSERTION carries a string. We only call preventDefault for Events.
    const $blockUnsafeSelection = (payload: unknown): boolean => {
      if (structureProtectionMode !== "protected") return false;
      const selection = $getSelection();
      if (!selection || !$shouldBlockSelectionReplacement(selection)) return false;
      if (payload instanceof Event) payload.preventDefault();
      return true;
    };

    // Sanitize a paste/drop payload: strip structural markers from the HTML and insert the rest.
    // Returns true (consume) when we handled an HTML payload; false to let the default handler run.
    const $sanitizeAndInsert = (html: string | undefined, event: Event): boolean => {
      if (!html) return false; // plain-text-only (or empty) payload carries no markers
      // Sanitize untrusted clipboard/drop HTML before parsing — strips scripts, event
      // handlers, and javascript: URLs so they can never reach the DOM (defense in depth;
      // Lexical only reconstructs known node types, but this also clears the taint flow).
      const safeHtml = DOMPurify.sanitize(html);
      const dom = new DOMParser().parseFromString(safeHtml, "text/html");
      const sanitized = $sanitizeNodesForProtectedStructure($generateNodesFromDOM(editor, dom));
      // For DROP, the browser pre-positions the DOM selection at the drop point before the event fires, so $getSelection() reflects the drop target.
      const selection = $getSelection();
      if ($isRangeSelection(selection)) selection.insertNodes(sanitized);
      event.preventDefault();
      return true;
    };

    const $handlePaste = (event: ClipboardEvent): boolean => {
      if (structureProtectionMode !== "protected") return false;
      const selection = $getSelection();
      if (selection && $shouldBlockSelectionReplacement(selection)) {
        event.preventDefault();
        return true;
      }
      return $sanitizeAndInsert(event.clipboardData?.getData("text/html"), event);
    };

    const $handleDrop = (event: DragEvent): boolean => {
      if (structureProtectionMode !== "protected") return false;
      const selection = $getSelection();
      if (selection && $shouldBlockSelectionReplacement(selection)) {
        event.preventDefault();
        return true;
      }
      // With no range to land at, `$sanitizeAndInsert` inserts nothing but still claims the drop:
      // the default handler would let the browser insert the payload itself, structure and all.
      // (A selected paragraph marker has already moved the selection to the drop point.)
      return $sanitizeAndInsert(event.dataTransfer?.getData("text/html"), event);
    };

    // A delete that arrives with no Backspace/Delete keydown (macOS Ctrl+H / Ctrl+D map to none,
    // and a programmatic dispatch has none) gets the answer that keydown would have: refused under
    // "protected", armed and then fired under "guarded". After a keydown this plugin claimed, the
    // only delete command that follows is its own fire, tagged as confirmed; after one it let
    // through, this finds nothing to arm either. A delete replayed once the user confirmed it
    // carries the same tag, and goes ahead under "guarded".
    const $handleDeleteCharacter = (isBackward: boolean): boolean => {
      if (!editor.isEditable()) return false;
      const intent = isBackward ? "deleteBackward" : "deleteForward";
      if (structureProtectionMode === "protected") {
        const selection = $getSelection();
        return !!selection && $shouldBlockStructuralEdit(selection, intent);
      }
      if ($hasUpdateTag(CONFIRMED_DELETE_TAG)) return false;
      return $handleTwoStepDelete(intent, undefined);
    };

    // Drop the latch as soon as the live selection no longer encodes the armed target
    // (arrow key, click, typing, etc.). Reads only; never mutates the editor.
    const clearStaleLatch = () => {
      const armed = armedRef.current;
      if (!armed) return;
      editor.getEditorState().read(() => {
        if (!$isArmedSelection($getSelection(), armed)) setArmedState(undefined);
      });
    };

    return mergeRegister(
      editor.registerCommand(KEY_DOWN_COMMAND, $handleKeyDown, COMMAND_PRIORITY_HIGH),
      editor.registerCommand(
        DELETE_CHARACTER_COMMAND,
        $handleDeleteCharacter,
        COMMAND_PRIORITY_HIGH,
      ),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      editor.registerCommand(CUT_COMMAND, $blockUnsafeSelection, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(PASTE_COMMAND, $handlePaste, COMMAND_PRIORITY_HIGH),
      editor.registerCommand(DRAGSTART_COMMAND, $blockUnsafeSelection, COMMAND_PRIORITY_HIGH),
      editor.registerCommand(DROP_COMMAND, $handleDrop, COMMAND_PRIORITY_HIGH),
      editor.registerCommand(
        CONTROLLED_TEXT_INSERTION_COMMAND,
        $blockUnsafeSelection,
        COMMAND_PRIORITY_HIGH,
      ),
      editor.registerUpdateListener(clearStaleLatch),
    );
  }, [editor, structureProtectionMode, setArmedState]);

  // Publish the armed state onto the editor root: the class gates the CSS blink to armed markers,
  // and the data attributes let the host app render a localized destructive hint. `para` merges
  // and chapters expose no hint kind (the host's hint is verse-marker scope). A chapter glyph has no
  // selection rendering of its own (unlike a verse's decorator), so its armed class is set here.
  useEffect(() => {
    const root = editor.getRootElement();
    if (!root) return;
    const showHint = !!armed && (armed.kind === "verse" || armed.kind === "selection");
    const armedChapter =
      armed?.kind === "chapter" ? (editor.getElementByKey(armed.key) ?? undefined) : undefined;
    armedChapter?.classList.add(VERSE_SELECTED_CLASS_NAME);
    root.classList.toggle("verse-delete-armed", !!armed);
    if (showHint) {
      root.setAttribute("data-verse-delete-intent", armed.intent);
      root.setAttribute("data-verse-delete-kind", armed.kind);
    } else {
      root.removeAttribute("data-verse-delete-intent");
      root.removeAttribute("data-verse-delete-kind");
    }
    return () => {
      armedChapter?.classList.remove(VERSE_SELECTED_CLASS_NAME);
      root.classList.remove("verse-delete-armed");
      root.removeAttribute("data-verse-delete-intent");
      root.removeAttribute("data-verse-delete-kind");
    };
  }, [editor, armed]);

  // Renders no UI: the armed hint is owned by the host app (see this component's JSDoc).
  return null;
}
