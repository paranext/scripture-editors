import { $limitSelectionLength, normalizeCopyLimit, sliceToCopyLimit } from "./copyLimit.utils";
import {
  $writeClipboardData,
  $writeCopyPayload,
} from "../markerEdit/whitespaceDisplay.plugin.utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { IS_APPLE, mergeRegister } from "@lexical/utils";
import {
  $getSelection,
  $isNodeSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_NORMAL,
  COPY_COMMAND,
  CUT_COMMAND,
  isExactShortcutMatch,
  SELECT_ALL_COMMAND,
} from "lexical";
import { useEffect, useRef } from "react";

/**
 * Copy events a copy-limit page guard has already claimed, with the smallest limit any guard has
 * applied to each and the text that limit leaves. Every editor with a limit adds its own guard to
 * the page, so a selection that spans several editors reaches several guards; whichever order they
 * run in, the smallest limit wins.
 */
const guardedCopies = new WeakMap<Event, { limit: number; text: string }>();

/**
 * Limits how much text can be copied or cut out of the editor at once, counted in UTF-16 code
 * units. A copy or cut over the limit first shortens the selection to the limit, keeping its start
 * and never ending inside a marker or a character, then copies or cuts what is left, silently, so
 * a cut removes exactly what it puts on the clipboard. In a read-only editor a cut removes nothing
 * and copies like a copy. The Select All shortcut is disabled while focus is anywhere but another
 * text field. Copies the browser makes itself — a selection that starts or ends outside the
 * editor, or follows a Select All the shortcut block doesn't reach, such as the macOS Edit menu's —
 * are shortened too.
 *
 * Where a copy writes more than the selected text (USFM in Standard view and the Markers view),
 * `MarkerEditPlugin` and `MarkersViewCopyPlugin` shorten the selection further until it fits, so a
 * copy or cut may take less than the limit, possibly nothing.
 *
 * A copy or cut that no view-specific handler claims is written as plain text only, since the
 * editor's own copy would also write HTML and an internal flavor that can carry more than the
 * limit.
 *
 * With no limit (`undefined`) the plugin does nothing and adds no listeners to the page. It
 * registers its command handlers once, when it mounts, and reads the limit when each copy or cut
 * happens, so a limit that arrives or changes later still runs ahead of other plugins' handlers at
 * the same priority.
 */
export function CopyLimitPlugin({ limit }: { limit: number | undefined }): null {
  const [editor] = useLexicalComposerContext();
  const limitRef = useRef(normalizeCopyLimit(limit));
  // Re-attaches or removes the page listeners to match the current limit; set by the registration
  // effect below.
  const syncPageListenersRef = useRef<(() => void) | undefined>(undefined);

  useEffect(() => {
    limitRef.current = normalizeCopyLimit(limit);
    syncPageListenersRef.current?.();
  }, [limit]);

  useEffect(() => {
    let rootDocument: Document | undefined;
    let listeningDocument: Document | undefined;

    const onDocumentCopy = (event: ClipboardEvent) => {
      const currentLimit = limitRef.current;
      if (currentLimit === undefined) return;
      const claimedEarlier = guardedCopies.get(event);
      // The editor calls `preventDefault` synchronously whenever it writes the copy itself, and it
      // has already applied the limit to what it wrote.
      if (event.defaultPrevented && !claimedEarlier) return;
      const root = editor.getRootElement();
      if (!root) return;
      const domSelection = root.ownerDocument.getSelection();
      if (!domSelection || domSelection.rangeCount === 0) return;
      // A caret copies nothing, so the browser's own copy leaves the clipboard alone.
      if (domSelection.isCollapsed) return;
      if (!domSelection.containsNode(root, true)) return;
      // Always claim the event — otherwise the browser copies the full selection natively. When
      // nothing is left to write (a limit of 0, or a selection with no text), nothing is written,
      // so the clipboard keeps what it held before, not an empty string; anything an earlier guard
      // wrote is cleared.
      event.preventDefault();
      const smallest = Math.min(claimedEarlier?.limit ?? currentLimit, currentLimit);
      const text = sliceToCopyLimit(claimedEarlier?.text ?? domSelection.toString(), smallest);
      guardedCopies.set(event, { limit: smallest, text });
      const clipboardData = event.clipboardData;
      if (!clipboardData) return;
      if (!text) {
        if (claimedEarlier) clipboardData.clearData();
        return;
      }
      clipboardData.setData("text/plain", text);
    };

    const onDocumentKeyDown = (event: KeyboardEvent) => {
      if (limitRef.current === undefined) return;
      // Matches on `event.code` too, so layouts whose A key types another letter are covered.
      if (!isExactShortcutMatch(event, "a", { ctrlKey: !IS_APPLE, metaKey: IS_APPLE })) return;
      if (isOtherTextField(listeningDocument?.activeElement, editor.getRootElement())) return;
      event.preventDefault();
    };

    const removePageListeners = () => {
      listeningDocument?.removeEventListener("copy", onDocumentCopy);
      listeningDocument?.removeEventListener("keydown", onDocumentKeyDown, true);
      listeningDocument = undefined;
    };

    // The page listeners are attached only while there is a limit, to the document the editor's
    // root is in.
    const syncPageListeners = () => {
      const wanted = limitRef.current === undefined ? undefined : rootDocument;
      if (wanted === listeningDocument) return;
      removePageListeners();
      listeningDocument = wanted;
      listeningDocument?.addEventListener("copy", onDocumentCopy);
      listeningDocument?.addEventListener("keydown", onDocumentKeyDown, true);
    };
    syncPageListenersRef.current = syncPageListeners;

    // Shortens the selection to the limit (its start kept) and lets the copy or cut go ahead, so
    // what is left selected is what is copied or cut; the handlers below still shorten what they
    // write, for a copy whose clipboard form is longer than its text. Blocks it when nothing is
    // left to copy — a limit of 0, or a selection whose first piece does not fit — since letting
    // the event through would have the browser copy, or cut, the whole selection it still shows.
    const $limitOrBlock = (event: ClipboardEvent | KeyboardEvent | null) => {
      const currentLimit = limitRef.current;
      if (currentLimit === undefined) return false;
      if (currentLimit > 0) {
        const selection = $getSelection();
        const wasCollapsed = $isRangeSelection(selection) && selection.isCollapsed();
        $limitSelectionLength(currentLimit);
        if (wasCollapsed || !$isRangeSelection(selection) || !selection.isCollapsed()) return false;
      }
      event?.preventDefault();
      return true;
    };

    // Writes a limited copy or cut that no view-specific handler claimed (those run at HIGH), as
    // plain text only. Lexical's own copy would also write HTML and its internal flavor, which can
    // carry text the selection shows no characters for, such as a footnote behind its caller.
    const $writePlainCopy = (event: ClipboardEvent | KeyboardEvent | null, isCut: boolean) => {
      const currentLimit = limitRef.current;
      if (currentLimit === undefined) return false;
      // Duck-checked rather than `instanceof ClipboardEvent`, which jsdom lacks.
      const clipboardEvent =
        event && typeof event === "object" && "clipboardData" in event ? event : null;
      const selection = $getSelection();
      if ($isNodeSelection(selection)) {
        // Written and removed here, since claiming the command stops Lexical's own copy and cut:
        // `$writeCopyPayload` takes only a range. The selected nodes are copied whole or not at all,
        // and a cut removes them only when they were copied.
        const content = selection.getTextContent();
        const fits = content.length <= currentLimit;
        const text = fits ? content : "";
        // A node with no text, such as a verse marker, fits and is removed like any other.
        const shouldRemove = fits && isCut && editor.isEditable();
        return $writeClipboardData(
          clipboardEvent,
          editor,
          { "text/plain": text },
          shouldRemove
            ? () => {
                for (const node of selection.getNodes()) node.remove();
              }
            : undefined,
        );
      }
      if (!$isRangeSelection(selection) || selection.isCollapsed()) return false;
      return $writeCopyPayload(
        clipboardEvent,
        editor,
        selection,
        { "text/plain": selection.getTextContent() },
        isCut,
        { copyLimit: currentLimit },
      );
    };

    const unregister = mergeRegister(
      editor.registerCommand(COPY_COMMAND, $limitOrBlock, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(CUT_COMMAND, $limitOrBlock, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(
        COPY_COMMAND,
        (event) => $writePlainCopy(event, false),
        COMMAND_PRIORITY_NORMAL,
      ),
      editor.registerCommand(
        CUT_COMMAND,
        (event) => $writePlainCopy(event, true),
        COMMAND_PRIORITY_NORMAL,
      ),
      // A read-only editor never dispatches this — the document key-down listener covers it.
      editor.registerCommand(
        SELECT_ALL_COMMAND,
        (event) => {
          if (limitRef.current === undefined) return false;
          event?.preventDefault();
          return true;
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerRootListener((rootElement) => {
        rootDocument = rootElement?.ownerDocument ?? undefined;
        syncPageListeners();
      }),
    );

    return () => {
      unregister();
      syncPageListenersRef.current = undefined;
      removePageListeners();
    };
  }, [editor]);

  return null;
}

/** Input types whose own text Select All selects, rather than the page. */
const TEXT_INPUT_TYPES = new Set(["text", "search", "email", "url", "tel", "password", "number"]);

/**
 * Whether `element` is a text field other than the editor, where Select All should select only that
 * field's own text.
 */
function isOtherTextField(element: Element | null | undefined, root: HTMLElement | null): boolean {
  if (!element) return false;
  if (element instanceof HTMLTextAreaElement) return true;
  if (element instanceof HTMLInputElement) return TEXT_INPUT_TYPES.has(element.type);
  if (!(element instanceof HTMLElement) || !element.isContentEditable) return false;
  return !root?.contains(element);
}
