import {
  copySelection,
  cutSelection,
  pasteSelection,
  PlainTextPasteTransform,
  pasteSelectionAsPlainText,
  registerEmptyCopyGuard,
  registerInlineProsePaste,
} from "./clipboard.utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { IS_APPLE, mergeRegister } from "@lexical/utils";
import { isExactShortcutMatch } from "lexical";
import { useEffect, useLayoutEffect, useRef } from "react";
import { LoggerBasic } from "shared";

/** The modifier that makes a key a clipboard shortcut: Cmd on Apple platforms, Ctrl elsewhere. */
const CONTROL_OR_META = { ctrlKey: !IS_APPLE, metaKey: IS_APPLE };

/**
 * Wires the clipboard shortcuts (copy, cut, paste, paste as plain text) to the editor.
 *
 * A shortcut is matched as Lexical's `isExactShortcutMatch` matches one: by the letter the key
 * types, or, on a keyboard layout whose letters are not Latin (Russian, Greek, Arabic), by the
 * physical key a Latin layout types that letter on. Otherwise Ctrl+Shift+V there would reach the
 * browser's own paste, which knows nothing of `plainTextPasteTransform`.
 *
 * `plainTextPasteTransform` rewrites the text Ctrl+Shift+V pastes. It is read when the key is
 * pressed, so a new one takes effect without the listeners below being registered again. `logger`
 * is told when the transform throws (the text is then pasted as it is) or the paste fails.
 */
export function ClipboardPlugin({
  plainTextPasteTransform,
  logger,
}: {
  plainTextPasteTransform?: PlainTextPasteTransform;
  logger?: LoggerBasic;
} = {}): null {
  const [editor] = useLexicalComposerContext();
  // Held in refs because the effect below must register once per editor: registering again would
  // move this plugin's command listeners behind later-registered ones of the same priority.
  const plainTextPasteTransformRef = useRef(plainTextPasteTransform);
  const loggerRef = useRef(logger);
  useLayoutEffect(() => {
    plainTextPasteTransformRef.current = plainTextPasteTransform;
    loggerRef.current = logger;
  }, [plainTextPasteTransform, logger]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (isExactShortcutMatch(event, "c", CONTROL_OR_META)) {
        event.preventDefault();
        copySelection(editor);
        return;
      }
      const isCut = isExactShortcutMatch(event, "x", CONTROL_OR_META);
      const isPaste = isExactShortcutMatch(event, "v", CONTROL_OR_META);
      const isPlainTextPaste = isExactShortcutMatch(event, "v", {
        ...CONTROL_OR_META,
        shiftKey: true,
      });
      // This listener is the plugin's own, so Lexical's read-only gate on root events does not
      // cover it: a read-only text copies, but neither cuts nor takes a paste.
      if (!editor.isEditable() || !(isCut || isPaste || isPlainTextPaste)) return;
      event.preventDefault();
      if (isCut) cutSelection(editor);
      else if (isPlainTextPaste)
        pasteSelectionAsPlainText(editor, plainTextPasteTransformRef.current, loggerRef.current);
      else pasteSelection(editor);
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
