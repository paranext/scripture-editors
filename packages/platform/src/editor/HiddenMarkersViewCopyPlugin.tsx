import { $selectionPlainText, isCopyFromOutsideEditor } from "./copyLimit/copyLimit.utils";
import { $isLeftOutOfHiddenViewCopy } from "./hiddenViewCopy.utils";
import { $uncutClipboardData } from "./markerEdit/uncutClipboard.utils";
import {
  hiddenViewCopySpelling,
  registerViewCopyWriter,
} from "./markerEdit/whitespaceDisplay.plugin.utils";
import { $getHtmlContent, LexicalClipboardData } from "@lexical/clipboard";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $isElementNode,
  $isTextNode,
  COMMAND_PRIORITY_LOW,
  LexicalEditor,
  RangeSelection,
} from "lexical";
import { useEffect } from "react";
import { $isGutterMarkerNode, $isUnknownNode } from "shared";
import {
  $hiddenViewLexicalFlavor,
  $removeTextKeepingBookAndChapterLines,
  htmlWithNodeCopy,
} from "shared-react";

/** A payload with no plain text, which claims a copy or cut and writes nothing. */
const EMPTY_COPY: LexicalClipboardData = { "text/plain": "" };

/**
 * Whether `selection` holds a gutter marker glyph and nothing else but the lines holding one and
 * text at its edge. Asked only of a selection whose plain text is empty, so any text node in it
 * contributes nothing: a selection of a glyph alone holds the text beside it on a line led by text.
 */
function $selectsOnlyGutterMarkers(selection: RangeSelection): boolean {
  const nodes = selection.getNodes();
  return (
    nodes.some($isGutterMarkerNode) &&
    nodes.every(
      (node) =>
        $isGutterMarkerNode(node) ||
        $isTextNode(node) ||
        ($isElementNode(node) && !$isUnknownNode(node)),
    )
  );
}

/**
 * The `text/html` and `application/x-lexical-editor` flavors of a hidden-marker view's copy of
 * `selection` in `editor` (see {@link HiddenMarkersViewCopyPlugin}), with an empty `text/plain`.
 *
 * Read-only: call inside a copy or cut command handler, or a read of the editor `selection` is in.
 */
function $hiddenViewFlavors(
  selection: RangeSelection,
  editor: LexicalEditor,
): LexicalClipboardData {
  const html = $getHtmlContent(editor, selection);
  const nodeCopy = $hiddenViewLexicalFlavor(selection);
  const data: LexicalClipboardData = {
    "text/plain": "",
    "text/html": nodeCopy === undefined ? html : htmlWithNodeCopy(html, nodeCopy),
  };
  if (nodeCopy !== undefined) data["application/x-lexical-editor"] = nodeCopy;
  return data;
}

/**
 * Copies a hidden-marker view's selection as the text it shows. Lexical's own copy would write
 * every selected node's text, putting a paragraph's gutter marker glyph (`\q1 `), the caption of a
 * figure the view hides, and the NBSP spacers the view lays out around a collapsed note's caller and
 * runs into the plain text, and the glyph into the HTML.
 *
 * Writes three flavors:
 * - `text/plain`: {@link $selectionPlainText}, prose without what {@link $isLeftOutOfHiddenViewCopy}
 *   picks and without the view's layout bytes (note spacers, an empty span's placeholder), which
 *   read as doubled spaces once pasted as plain text. One ordinary space separates a note's text
 *   from the text around it where neither side has whitespace. A collapsed note's text stays in: a
 *   plain-text paste is the only way that text reaches another program. With
 *   `allowInvisibleCharacters` (`ViewOptions.allowInvisibleCharacters`) off, a no-break space the
 *   text stores is written as `~`, as Paratext 9's views show and copy one; on, as itself.
 * - `text/html`: Lexical's HTML export, which leaves out gutter glyphs and hidden constructs
 *   through their own `exportDOM`, holding {@link $hiddenViewLexicalFlavor} in an attribute
 *   (`htmlWithNodeCopy`): an async clipboard read, which is how Ctrl+V and every Paste command get
 *   the clipboard, returns no custom flavor. It and the node copy keep U+00A0, since this editor's
 *   own paste reads them, and a `~` would come back as a literal tilde.
 * - `application/x-lexical-editor`: {@link $hiddenViewLexicalFlavor}, for a paste the browser runs
 *   itself, such as the macOS app menu's Paste.
 *
 * The `text/html` and internal flavors are written from the tree without annotations when the
 * selection touches one (`$uncutClipboardData`), so a mark or a carrier an annotation cut does not
 * paste back as separate spans or pieces.
 *
 * Declines, leaving the command to Lexical's own handler, when the selection has no text to write
 * (only a verse number, say, which Lexical's flavors carry), except that it claims a copy or cut
 * of nothing but gutter marker glyphs and writes nothing, as a copy of nothing does: Lexical's
 * would write the glyph's text (`\q1 `). Such a cut removes nothing either, since a glyph is the
 * view's and `ParaMarkerPrefixGuardPlugin` keeps one on each line. It declines a copy, not a cut, when a
 * browser copy's page selection runs outside the editor, which Lexical's copy leaves to the
 * browser. Lexical's cut still removes its own range then, so this writes that range rather than
 * let it go uncopied, unless a copy limit is set: the fit does not shorten a range the page
 * selection does not match, so `$writeCopyPayload` declines it rather than write it whole.
 *
 * A cut in a read-only editor copies but removes nothing (`$writeCopyPayload` owns that rule). A
 * cut that runs across a book or chapter line keeps that line, and removes the rest of the
 * selection ({@link $removeTextKeepingBookAndChapterLines}): a cut of Select All leaves the
 * chapter document its book and chapter lines, and a paste of it back, which inserts neither,
 * restores the document.
 *
 * Registered at `COMMAND_PRIORITY_LOW`: after the CRITICAL guards and copy-limit fit, and after
 * `CopyLimitPlugin`'s over-limit plain copy (NORMAL), but before Lexical's own copy (EDITOR), which
 * it replaces. So with `EditorOptions.copyLimit` set, it only writes copies that fit: one that does
 * not is shortened by the fit and written by `CopyLimitPlugin`, which writes the same prose except
 * that it leaves out the text of collapsed notes, as the view shows them, and writes no HTML or node
 * copy, which would carry that text. The limit is passed on as `$writeCopyPayload`'s backstop,
 * which also declines the outside-the-editor cut above. Mount it only for `markerMode: "hidden"`.
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
        (selection, event, isCut) => {
          if (!isCut && isCopyFromOutsideEditor(editor, event)) return undefined;
          const plain = $selectionPlainText(
            selection,
            $isLeftOutOfHiddenViewCopy,
            hiddenViewCopySpelling(allowInvisibleCharacters),
          );
          if (plain === "") return $selectsOnlyGutterMarkers(selection) ? EMPTY_COPY : undefined;
          return {
            ...($uncutClipboardData(editor, selection, undefined, $hiddenViewFlavors) ??
              $hiddenViewFlavors(selection, editor)),
            "text/plain": plain,
          };
        },
        copyLimit,
        $removeTextKeepingBookAndChapterLines,
      ),
    [editor, allowInvisibleCharacters, copyLimit],
  );

  return null;
}
