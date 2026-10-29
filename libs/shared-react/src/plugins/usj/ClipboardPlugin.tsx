import {
  copySelection,
  cutSelection,
  pasteNatively,
  pasteSelectionAsPlainText,
  registerEmptyCopyGuard,
  registerInlineProsePaste,
} from "./clipboard.utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { IS_APPLE, mergeRegister } from "@lexical/utils";
import { useEffect, useRef } from "react";

/**
 * Takes the editor's copy, cut and paste shortcuts (Ctrl/Cmd+C, X, V and Shift+V) and guards
 * copies of nothing.
 *
 * @param requestNativePaste - When set, Ctrl/Cmd+V asks the host to run its native paste, which
 *   carries every clipboard format; resolving `false` falls back to reading the clipboard. Without
 *   it, Ctrl/Cmd+V reads the clipboard. See {@link pasteNatively}.
 */
export function ClipboardPlugin({
  requestNativePaste,
}: {
  requestNativePaste?: () => Promise<boolean>;
} = {}): null {
  const [editor] = useLexicalComposerContext();
  // A ref, so a host handing a fresh callback each render does not re-register the guards below
  // (which would move them to the end of their priority and flip same-priority ties).
  const requestNativePasteRef = useRef(requestNativePaste);
  useEffect(() => {
    requestNativePasteRef.current = requestNativePaste;
  }, [requestNativePaste]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const { key, shiftKey, metaKey, ctrlKey, altKey } = event;
      if (!(IS_APPLE ? metaKey : ctrlKey) || altKey) return;

      if (!shiftKey && key.toLowerCase() === "c") {
        event.preventDefault();
        copySelection(editor);
        return;
      }
      // This listener is the plugin's own, so Lexical's read-only gate on root events does not
      // cover it: a read-only text copies, but neither cuts nor takes a paste.
      if (!editor.isEditable()) return;
      if (!shiftKey && key.toLowerCase() === "x") {
        event.preventDefault();
        cutSelection(editor);
      } else if (key.toLowerCase() === "v") {
        // Claimed even when the host pastes natively: the host's paste replaces the keystroke's,
        // and on macOS a prevented Cmd+V also never reaches the app menu's own Paste.
        event.preventDefault();
        if (shiftKey) pasteSelectionAsPlainText(editor);
        else pasteNatively(editor, requestNativePasteRef.current);
      }
    };

    return mergeRegister(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      registerEmptyCopyGuard(editor),
      registerInlineProsePaste(editor),
      editor.registerRootListener(
        (rootElement: HTMLElement | null, prevRootElement: HTMLElement | null) => {
          if (prevRootElement !== null) {
            prevRootElement.removeEventListener("keydown", onKeyDown);
          }
          if (rootElement !== null) {
            rootElement.addEventListener("keydown", onKeyDown);
          }
        },
      ),
    );
  }, [editor]);

  return null;
}
