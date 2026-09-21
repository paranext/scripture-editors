import editorUsjAdaptor from "./adaptors/editor-usj.adaptor";
import usjEditorAdaptor from "./adaptors/usj-editor.adaptor";
import {
  $selectionToUsfmText,
  $writeCopyPayload,
  usfmToClipboardHtml,
} from "./markerEdit/whitespaceDisplay.plugin.utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_HIGH,
  COPY_COMMAND,
  createEditor,
  CUT_COMMAND,
  LexicalEditor,
} from "lexical";
import { useEffect } from "react";
import { TypedMarkNode } from "shared";
import {
  $getRangeFromUsjSelection,
  $getUsjSelectionFromEditor,
  getViewOptions,
  STANDARD_VIEW_MODE,
  usjReactNodes,
  ViewOptions,
} from "shared-react";

/**
 * The USFM of the current selection in an editor showing its document under `viewOptions` — the
 * same bytes a Standard-view copy of the same range produces.
 *
 * Built from the document rather than the display: a view whose markers are read-only glyphs shows
 * them in shapes the Standard-view copy walker ({@link $selectionToUsfmText}) cannot read as USFM
 * (verse and chapter numbers in decorators, no separator after a char marker, a note caller with
 * no text, layout spacers in notes, no glyphs at all for a figure). So the selection is mapped to
 * USJ locations, the document is rebuilt as Standard view in a throwaway editor, and the walker
 * runs over the same USJ range there.
 *
 * `undefined` when there is no range to copy or the range cannot be mapped (the block verse layout
 * has no USJ locations).
 *
 * Read-only against `editor`: call inside its update or read — in practice, a copy or cut command
 * handler.
 */
export function $selectionToUsfmViaStandardView(
  editor: LexicalEditor,
  viewOptions: ViewOptions,
): string | undefined {
  const standardViewOptions = getViewOptions(STANDARD_VIEW_MODE);
  const range = $getUsjSelectionFromEditor();
  if (!standardViewOptions || !range?.end) return undefined;
  const usj = editorUsjAdaptor.deserializeEditorState(editor.getEditorState(), viewOptions);
  if (!usj) return undefined;
  const standardEditor = createEditor({
    namespace: "markers-view-copy",
    nodes: [TypedMarkNode, ...usjReactNodes],
    onError: (error) => {
      throw error;
    },
  });
  const standardState = standardEditor.parseEditorState(
    usjEditorAdaptor.serializeEditorState(usj, standardViewOptions),
  );
  return standardState.read(
    () => {
      const selection = $getRangeFromUsjSelection(range);
      return selection ? $selectionToUsfmText(selection) : undefined;
    },
    { editor: standardEditor },
  );
}

/**
 * Copies the Markers view's selection as the USFM it shows, in both readable flavors — the same
 * bytes a Standard-view copy of that range writes ({@link $selectionToUsfmViaStandardView}).
 * Lexical's own copy wrote the display text instead, which is not USFM here: `\f <NBSP>\fr1:1 …`,
 * with the caller missing and no space after a char marker.
 *
 * No `application/x-lexical-editor` flavor is written: it would carry this view's display-shaped
 * nodes, which a native paste into an editable view would rebuild verbatim.
 *
 * A cut in a read-only editor copies and removes nothing; Ctrl+X reaches the command there too.
 *
 * Registered at `COMMAND_PRIORITY_HIGH`, above the empty-copy guard and Lexical's own copy. Mount it
 * only for `markerMode: "visible"`. A range it cannot map is left to Lexical's own copy.
 */
export function MarkersViewCopyPlugin({ viewOptions }: { viewOptions: ViewOptions }): null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const $copy = (event: ClipboardEvent | KeyboardEvent | null, isCut: boolean): boolean => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection) || selection.isCollapsed()) return false;
      const usfm = $selectionToUsfmViaStandardView(editor, viewOptions);
      if (usfm === undefined) return false;
      return $writeCopyPayload(
        event && "clipboardData" in event ? event : null,
        editor,
        selection,
        { "text/plain": usfm, "text/html": usfmToClipboardHtml(usfm) },
        isCut && editor.isEditable(),
      );
    };
    return mergeRegister(
      editor.registerCommand(COPY_COMMAND, (event) => $copy(event, false), COMMAND_PRIORITY_HIGH),
      editor.registerCommand(CUT_COMMAND, (event) => $copy(event, true), COMMAND_PRIORITY_HIGH),
    );
  }, [editor, viewOptions]);

  return null;
}
