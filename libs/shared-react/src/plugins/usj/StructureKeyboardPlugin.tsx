import {
  $isArmedSelection,
  $mergeParaIntoPrevious,
  $paraDeleteEffect,
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
import { $isSomeVerseNode } from "../../nodes/usj";
import {
  $getSelectableParaMarker,
  $getSelectedParaMarkerPara,
  $isSomeParaNode,
  $selectParaMarker,
} from "shared";
import { $narrowSelectionPastBookPrefix } from "./ParaMarkerPrefixCursorGuardPlugin";
import { StructureProtectionMode } from "./structure-protection.model";

/** Where an armed gutter marker's text starts, relative to the marker's own box. */
const MARKER_TEXT_LEFT_PROPERTY = "--para-merge-armed-text-left";
/** How wide an armed gutter marker's text is, without its trailing space. */
const MARKER_TEXT_WIDTH_PROPERTY = "--para-merge-armed-text-width";

/**
 * Publishes where a gutter marker's text sits as {@link MARKER_TEXT_LEFT_PROPERTY} and
 * {@link MARKER_TEXT_WIDTH_PROPERTY}, so the stylesheet can draw the armed highlight around the
 * text alone. The text does not sit inside the marker's box: the paragraph's first-line indent
 * carries over to it.
 */
function publishMarkerTextBounds(marker: HTMLElement): void {
  const text = marker.firstChild;
  if (text?.nodeType !== Node.TEXT_NODE) return;
  const range = document.createRange();
  range.setStart(text, 0);
  range.setEnd(text, (text.textContent ?? "").trimEnd().length);
  // jsdom has no layout, so no Range geometry.
  if (typeof range.getBoundingClientRect !== "function") return;
  const textBounds = range.getBoundingClientRect();
  const markerBounds = marker.getBoundingClientRect();
  marker.style.setProperty(MARKER_TEXT_LEFT_PROPERTY, `${textBounds.left - markerBounds.left}px`);
  marker.style.setProperty(MARKER_TEXT_WIDTH_PROPERTY, `${textBounds.width}px`);
}

/**
 * Class on an armed paragraph's gutter marker (or, when it shows none, on the paragraph) while a
 * two-step paragraph delete is pending.
 */
export const PARA_MERGE_ARMED_CLASS_NAME = "para-merge-armed";

/**
 * Governs structural keystrokes (Backspace/Delete/Enter/typing) at verse- and paragraph-marker
 * boundaries. In `"protected"` mode, blocks them and sanitizes paste/drop payloads so structural
 * markers (paragraph breaks, verse markers, chapter markers) cannot be inserted — text, inline
 * character formatting, and notes are kept. In `"guarded"` mode, makes deletion a deliberate
 * two-step gesture instead: first press selects the marker/section, second press deletes it.
 * In `"off"` mode, no handlers are registered and editing is fully native.
 * Registers a KEY_DOWN handler at COMMAND_PRIORITY_HIGH, mirroring ArrowNavigationPlugin, and
 * the CUT refusal at COMMAND_PRIORITY_CRITICAL so it outranks the handlers that perform a cut.
 *
 * A paragraph merge (Backspace at a paragraph's start, Delete at the end of the one before, or
 * either on a selected gutter marker) is two-step too: the first press marks the marker it
 * removes — never the paragraph's text, which stays — and the second merges. A Backspace arm
 * selects that marker; a Delete arm leaves the caret where it is.
 *
 * The armed state is published to the DOM (rather than rendered here) so the host app owns the
 * user-facing hint: the root element carries the `verse-delete-armed` class plus
 * `data-verse-delete-intent` (`deleteBackward` | `deleteForward`) and `data-verse-delete-kind`
 * (`verse` | `selection`, or for a paragraph what the second press does: `joinPreviousPara` |
 * `joinNextPara` | `removeEmptyPara`). An armed verse marker carries the `verse-selected` class, and
 * an armed paragraph's gutter marker {@link PARA_MERGE_ARMED_CLASS_NAME}. The host can observe these to
 * render a localized tooltip (see paranext-core's TwoStepDeleteTooltipOverlay).
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
        if (target.kind === "verse") {
          const ns = $createNodeSelection();
          ns.add(target.node.getKey());
          $setSelection(ns);
          setArmedState({ key: target.node.getKey(), kind: target.kind, intent });
        } else {
          // A merge removes only the paragraph's marker; its text stays. So a Backspace arm selects
          // the marker, as a click on it would, and never the text. Removing a selected marker joins
          // its paragraph to the one before, whichever key was pressed. A Delete arm keeps the
          // caret at the end of its paragraph: selecting the NEXT paragraph's marker would move the
          // caret there, so typing or an arrow key after the arm would act in that paragraph. With
          // no marker selected, the caret stays where it is, and the armed class (still on the
          // marker, when there is one) and the host's hint say what is armed.
          const isMarkerSelected = !!$getSelectedParaMarkerPara(selection);
          const glyph =
            intent === "deleteBackward" ? $getSelectableParaMarker(target.node) : undefined;
          const isMarkerArmed = isMarkerSelected || (!!glyph && $selectParaMarker(glyph));
          const caret = !isMarkerArmed && $isRangeSelection(selection) ? selection : undefined;
          setArmedState({
            key: target.node.getKey(),
            kind: target.kind,
            intent,
            paraEffect: $paraDeleteEffect(
              target.node,
              isMarkerSelected ? "deleteBackward" : intent,
            ),
            ...(caret && {
              anchor: {
                key: caret.anchor.key,
                offset: caret.anchor.offset,
                type: caret.anchor.type,
              },
              focus: { key: caret.focus.key, offset: caret.focus.offset, type: caret.focus.type },
            }),
          });
        }
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
      // Every marker glyph is presentation, not content: a paragraph's gutter marker (a triple-clicked
      // heading copies its `\s1`) and an inline marker glyph alike. Parsed back, each would arrive as
      // plain text such as `\s1 ` or `\w `, and saved, as a real marker — so all of them are dropped.
      dom.querySelectorAll('[data-text-type="marker"]').forEach((glyph) => glyph.remove());
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
  // and the data attributes let the host app render a localized destructive hint. The `verse-`
  // names predate paragraph arms; they cover every two-step delete. An armed paragraph's gutter
  // marker gets PARA_MERGE_ARMED_CLASS_NAME, which the stylesheet tints and the hint anchors to —
  // or, with no marker shown, the paragraph itself, which nothing tints. The caret stays put then,
  // so the host can anchor its hint there.
  useEffect(() => {
    const root = editor.getRootElement();
    if (!root) return;
    root.classList.toggle("verse-delete-armed", !!armed);
    if (armed) {
      root.setAttribute("data-verse-delete-intent", armed.intent);
      root.setAttribute("data-verse-delete-kind", armed.paraEffect ?? armed.kind);
    } else {
      root.removeAttribute("data-verse-delete-intent");
      root.removeAttribute("data-verse-delete-kind");
    }
    const armedKey =
      armed?.kind === "para"
        ? editor
            .getEditorState()
            .read(() => $getSelectableParaMarker($getNodeByKey(armed.key))?.getKey() ?? armed.key)
        : undefined;
    const armedElement = armedKey ? editor.getElementByKey(armedKey) : undefined;
    armedElement?.classList.add(PARA_MERGE_ARMED_CLASS_NAME);
    if (armedKey !== armed?.key && armedElement) publishMarkerTextBounds(armedElement);
    return () => {
      root.classList.remove("verse-delete-armed");
      root.removeAttribute("data-verse-delete-intent");
      root.removeAttribute("data-verse-delete-kind");
      armedElement?.classList.remove(PARA_MERGE_ARMED_CLASS_NAME);
      armedElement?.style.removeProperty(MARKER_TEXT_LEFT_PROPERTY);
      armedElement?.style.removeProperty(MARKER_TEXT_WIDTH_PROPERTY);
    };
  }, [editor, armed]);

  // Renders no UI: the armed hint is owned by the host app (see this component's JSDoc).
  return null;
}
