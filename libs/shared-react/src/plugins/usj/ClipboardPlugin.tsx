import {
  copySelection,
  cutSelection,
  pasteSelection,
  pasteSelectionAsPlainText,
  registerEmptyCopyGuard,
  registerInlineProsePaste,
  registerPasteAsClipboardRead,
  registerTabsAsSpaces,
} from "./clipboard.utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { IS_APPLE, mergeRegister } from "@lexical/utils";
import { useEffect, useRef } from "react";
import { LoggerBasic } from "shared";

/**
 * Takes the editor's copy, cut and paste shortcuts (Ctrl/Cmd+C, X, V and Shift+V), guards
 * copies of nothing, and turns every tab node a paste makes into a space
 * ({@link registerTabsAsSpaces}).
 *
 * Mount it before every other plugin that handles a paste: with `pastesAsClipboardRead`, it takes
 * the editor's node copy flavor out of a paste before they read it
 * ({@link registerPasteAsClipboardRead}).
 *
 * @param pastesAsClipboardRead - Whether every paste takes only what reading the clipboard gives,
 *   as Ctrl+V does, without the node copy flavor (`application/x-lexical-editor`) a paste the
 *   browser delivers itself also carries. Defaults to `false`.
 * @param logger - Where a paste shortcut's failed clipboard read is logged; the console when
 *   omitted.
 */
export function ClipboardPlugin({
  pastesAsClipboardRead = false,
  logger,
}: {
  pastesAsClipboardRead?: boolean;
  logger?: LoggerBasic;
} = {}): null {
  const [editor] = useLexicalComposerContext();
  // Refs, so changing them does not register the paste handler again behind the others.
  const pastesAsClipboardReadRef = useRef(pastesAsClipboardRead);
  const loggerRef = useRef(logger);
  useEffect(() => {
    pastesAsClipboardReadRef.current = pastesAsClipboardRead;
    loggerRef.current = logger;
  }, [pastesAsClipboardRead, logger]);

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
        event.preventDefault();
        if (shiftKey) pasteSelectionAsPlainText(editor, loggerRef.current);
        else pasteSelection(editor, loggerRef.current);
      }
    };

    return mergeRegister(
      registerPasteAsClipboardRead(editor, () => pastesAsClipboardReadRef.current),
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      registerEmptyCopyGuard(editor),
      registerInlineProsePaste(editor),
      registerTabsAsSpaces(editor),
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
