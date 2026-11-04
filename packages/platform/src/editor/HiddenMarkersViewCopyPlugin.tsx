import { $selectionPlainText, isCopyFromOutsideEditor } from "./copyLimit/copyLimit.utils";
import {
  $withStoredNbspsAsTilde,
  registerViewCopyWriter,
} from "./markerEdit/whitespaceDisplay.plugin.utils";
import { $getClipboardDataFromSelection } from "@lexical/clipboard";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { COMMAND_PRIORITY_LOW } from "lexical";
import { useEffect } from "react";

/**
 * Copies a hidden-marker view's selection the way Lexical's own copy does, except that `text/plain`
 * is {@link $selectionPlainText}: prose without the NBSP spacers the view lays out around a
 * collapsed note's caller and runs, which read as doubled spaces once pasted as plain text. With
 * `allowInvisibleCharacters` (`ViewOptions.allowInvisibleCharacters`) off, a no-break space the text
 * stores is written as `~`, as Paratext 9's views show and copy one; on, as itself.
 *
 * `text/html` and `application/x-lexical-editor` stay Lexical's own, layout bytes and all, because
 * the editor's own paste reads them back: Ctrl+V reads `text/html` (`navigator.clipboard.read()`
 * offers no internal flavor), and rebuilding a note from it relies on its spacers being there, so a
 * rich-text app such as Word still shows the note's spacers. They keep a stored no-break space as
 * U+00A0 too, since the editor's own paste would read a `~` back as a literal tilde.
 *
 * Declines, leaving the copy to Lexical's own, when the selection has no text to write (only a verse
 * number, say, which Lexical's flavors carry) or when a browser copy's page selection runs outside
 * the editor, which Lexical's copy leaves to the browser.
 *
 * A cut removes its range only in an editable editor, as `$writeCopyPayload` decides; Lexical's
 * own cut, which still takes the ranges this declines, does not check.
 *
 * Registered at `COMMAND_PRIORITY_LOW`: after the CRITICAL guards and copy-limit fit, and after
 * `CopyLimitPlugin`'s over-limit plain copy (NORMAL), but before Lexical's own copy (EDITOR), which
 * it replaces. So with `copyLimit` (`EditorOptions.copyLimit`) set, it only writes copies that fit:
 * one that does not is shortened by the fit and written by `CopyLimitPlugin`, which uses the same
 * prose. The limit is passed on only as `$writeCopyPayload`'s backstop. Mount it only for
 * `markerMode: "hidden"`.
 */
export function HiddenMarkersViewCopyPlugin({
  allowInvisibleCharacters,
  copyLimit,
}: {
  allowInvisibleCharacters?: boolean;
  copyLimit?: number;
}): null {
  const [editor] = useLexicalComposerContext();

  useEffect(
    () =>
      registerViewCopyWriter(
        editor,
        COMMAND_PRIORITY_LOW,
        (selection, event) => {
          if (isCopyFromOutsideEditor(editor, event)) return undefined;
          const plain = $selectionPlainText(
            selection,
            undefined,
            allowInvisibleCharacters ? undefined : $withStoredNbspsAsTilde,
          );
          if (plain === "") return undefined;
          return { ...$getClipboardDataFromSelection(selection), "text/plain": plain };
        },
        copyLimit,
      ),
    [editor, allowInvisibleCharacters, copyLimit],
  );

  return null;
}
