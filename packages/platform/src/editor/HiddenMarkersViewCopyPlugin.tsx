import { $selectionPlainText, isCopyFromOutsideEditor } from "./copyLimit/copyLimit.utils";
import { $uncutClipboardData } from "./markerEdit/uncutClipboard.utils";
import {
  hiddenViewCopySpelling,
  registerViewCopyWriter,
} from "./markerEdit/whitespaceDisplay.plugin.utils";
import { $getClipboardDataFromSelection } from "@lexical/clipboard";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { COMMAND_PRIORITY_LOW } from "lexical";
import { useEffect } from "react";
import { LoggerBasic } from "shared";

/**
 * Copies a hidden-marker view's selection the way Lexical's own copy does, except that `text/plain`
 * is {@link $selectionPlainText}: prose without the NBSP spacers the view lays out around a
 * collapsed note's caller and runs, which read as doubled spaces once pasted as plain text. With
 * `allowInvisibleCharacters` (`ViewOptions.allowInvisibleCharacters`) off, a no-break space the text
 * stores is written as `~`, as Paratext 9's views show and copy one; on, as itself.
 *
 * `text/html` and `application/x-lexical-editor` stay Lexical's own (written from the tree without
 * annotations when the selection touches one, `$uncutClipboardData`, so a mark or a cut carrier
 * does not paste back as separate spans or pieces), because the editor's own paste
 * reads them back: Ctrl+V reads `text/html` (`navigator.clipboard.read()` offers no internal
 * flavor) and rebuilds notes from it. They still carry the note spacers, which that paste saves as
 * NBSPs into a note holding loose text; leaving them out of `text/html` is a separate fix. They keep
 * a stored no-break space as U+00A0 too, since the editor's own paste would read a `~` back as a
 * literal tilde.
 *
 * Declines, leaving the command to Lexical's own handler, when the selection has no text to write
 * (only a verse number, say, which Lexical's flavors carry), and declines a copy, not a cut, when a
 * browser copy's page selection runs outside the editor, which Lexical's copy leaves to the
 * browser. Lexical's cut still removes its own range then, so this writes that range rather than
 * let it go uncopied, unless a copy limit is set: the fit does not shorten a range the page
 * selection does not match, so `$writeCopyPayload` declines it rather than write it whole.
 *
 * A cut removes its range only in an editable editor, as `$writeCopyPayload` decides.
 *
 * Registered at `COMMAND_PRIORITY_LOW`: after the CRITICAL guards and copy-limit fit, and after
 * `CopyLimitPlugin`'s over-limit plain copy (NORMAL), but before Lexical's own copy (EDITOR), which
 * it replaces. So with `EditorOptions.copyLimit` set, it only writes copies that fit: one that does
 * not is shortened by the fit and written by `CopyLimitPlugin`, which writes the same prose except
 * that it leaves out the text of collapsed notes, as the view shows them. The limit is passed on as
 * `$writeCopyPayload`'s backstop, which also declines the outside-the-editor cut above. Mount it
 * only for `markerMode: "hidden"`.
 */
export function HiddenMarkersViewCopyPlugin({
  allowInvisibleCharacters,
  copyLimit,
  logger,
}: {
  allowInvisibleCharacters?: boolean;
  copyLimit?: number;
  /** Told when an annotated copy cannot be written without its annotations. */
  logger?: LoggerBasic;
}): null {
  const [editor] = useLexicalComposerContext();

  useEffect(
    () =>
      registerViewCopyWriter(
        editor,
        COMMAND_PRIORITY_LOW,
        (selection, event, isCut) => {
          if (!isCut && isCopyFromOutsideEditor(editor, event)) return undefined;
          const plain = $selectionPlainText(
            selection,
            undefined,
            hiddenViewCopySpelling(allowInvisibleCharacters),
          );
          if (plain === "") return undefined;
          const flavors =
            $uncutClipboardData(editor, selection, logger) ??
            $getClipboardDataFromSelection(selection);
          return { ...flavors, "text/plain": plain };
        },
        copyLimit,
      ),
    [editor, allowInvisibleCharacters, copyLimit, logger],
  );

  return null;
}
