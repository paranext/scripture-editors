import { $selectionShownText } from "./copyLimit/copyLimit.utils";
import { $hiddenViewLexicalFlavor, $isLeftOutOfHiddenViewCopy } from "./hiddenViewCopy.utils";
import { $writeCopyPayload } from "./markerEdit/whitespaceDisplay.plugin.utils";
import { $getHtmlContent, LexicalClipboardData } from "@lexical/clipboard";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_NORMAL,
  COPY_COMMAND,
  CUT_COMMAND,
} from "lexical";
import { useEffect } from "react";

/**
 * Copies a hidden-marker view's selection as the text it shows. Lexical's own copy would write
 * every selected node's text, putting a paragraph's gutter marker glyph (`\q1 `) and the caption of
 * a figure the view hides into the plain text, and the glyph into the HTML.
 *
 * Writes three flavors:
 * - `text/plain`: the selection's text without what {@link $isLeftOutOfHiddenViewCopy} picks. A
 *   collapsed note's text stays in.
 * - `text/html`: Lexical's HTML export, which leaves out gutter glyphs and hidden constructs
 *   through their own `exportDOM`.
 * - `application/x-lexical-editor`: {@link $hiddenViewLexicalFlavor}.
 *
 * A cut in a read-only editor copies but removes nothing (`$writeCopyPayload` owns that rule).
 *
 * `copyLimit` is `EditorOptions.copyLimit`; `CopyLimitPlugin` has already fitted the selection to
 * it, and its own writer claims an over-limit copy before this one runs.
 *
 * Registered at `COMMAND_PRIORITY_NORMAL`: below `CopyLimitPlugin`'s fit, above the empty-copy guard
 * (LOW) and Lexical's own copy (EDITOR). Mount it only for `markerMode: "hidden"`, after
 * `CopyLimitPlugin`, so that plugin's same-priority over-limit writer runs first.
 */
export function HiddenViewCopyPlugin({ copyLimit }: { copyLimit?: number }): null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const $copy = (event: ClipboardEvent | KeyboardEvent | null, isCut: boolean): boolean => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection) || selection.isCollapsed()) return false;
      const data: LexicalClipboardData = {
        "text/plain": $selectionShownText(selection, $isLeftOutOfHiddenViewCopy),
        "text/html": $getHtmlContent(editor, selection),
      };
      const lexicalFlavor = $hiddenViewLexicalFlavor(editor, selection);
      if (lexicalFlavor !== undefined) data["application/x-lexical-editor"] = lexicalFlavor;
      return $writeCopyPayload(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`; this duck-checks the
        // one property `$writeCopyPayload` needs, as `MarkersViewCopyPlugin` does. `in` throws on
        // a non-object, so the type check comes first.
        event && typeof event === "object" && "clipboardData" in event ? event : null,
        editor,
        selection,
        data,
        isCut,
        copyLimit,
      );
    };
    return mergeRegister(
      editor.registerCommand(COPY_COMMAND, (event) => $copy(event, false), COMMAND_PRIORITY_NORMAL),
      editor.registerCommand(CUT_COMMAND, (event) => $copy(event, true), COMMAND_PRIORITY_NORMAL),
    );
  }, [editor, copyLimit]);

  return null;
}
