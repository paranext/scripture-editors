import editorUsjAdaptor from "./adaptors/editor-usj.adaptor";
import usjEditorAdaptor from "./adaptors/usj-editor.adaptor";
import { $fitOrBlock } from "./copyLimit/copyLimit.utils";
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
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_HIGH,
  COPY_COMMAND,
  createEditor,
  CUT_COMMAND,
  LexicalEditor,
} from "lexical";
import { useEffect, useRef } from "react";
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
 * A cut in a read-only editor copies and removes nothing ({@link $writeCopyPayload} owns that
 * rule); Ctrl+X reaches the command there too.
 *
 * `copyLimit` caps the UTF-16 code units written, as `Editor`'s option of the same name does: the
 * selection is shortened until the USFM it writes fits, so what stays selected is exactly what is
 * copied ({@link $writeCopyPayload} shortens the payload as a backstop).
 *
 * Registered at `COMMAND_PRIORITY_HIGH`, above the empty-copy guard and Lexical's own copy, once, at
 * mount; it acts only while `viewOptions` is the Markers view (`markerMode: "visible"`), so it can
 * stay mounted in every view. A range it cannot map is left to Lexical's own copy, or, when a
 * copy limit is set, to `CopyLimitPlugin`'s plain-text copy.
 */
export function MarkersViewCopyPlugin({
  viewOptions,
  copyLimit,
}: {
  viewOptions: ViewOptions | undefined;
  copyLimit?: number;
}): null {
  const [editor] = useLexicalComposerContext();
  // Read at each copy or cut, so a changed limit, view or view option never re-registers the
  // handlers: re-registering would move them behind the opaque-block guard's, which has to judge
  // the fitted selection.
  const copyLimitRef = useRef(copyLimit);
  const viewOptionsRef = useRef(viewOptions);

  useEffect(() => {
    copyLimitRef.current = copyLimit;
    viewOptionsRef.current = viewOptions;
  }, [copyLimit, viewOptions]);

  useEffect(() => {
    /** The Markers view's options while it is showing; `undefined` in any other view. */
    const markersView = () => {
      const current = viewOptionsRef.current;
      return current?.markerMode === "visible" ? current : undefined;
    };
    const $copy = (event: ClipboardEvent | KeyboardEvent | null, isCut: boolean): boolean => {
      const view = markersView();
      if (!view) return false;
      const selection = $getSelection();
      if (!$isRangeSelection(selection) || selection.isCollapsed()) return false;
      const usfm = $selectionToUsfmViaStandardView(editor, view);
      if (usfm === undefined) return false;
      return $writeCopyPayload(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        event && typeof event === "object" && "clipboardData" in event ? event : null,
        editor,
        selection,
        { "text/plain": usfm, "text/html": usfmToClipboardHtml(usfm) },
        isCut,
        {
          copyLimit: copyLimitRef.current,
          $payloadFor: () => {
            const current = $selectionToUsfmViaStandardView(editor, view) ?? "";
            return { "text/plain": current, "text/html": usfmToClipboardHtml(current) };
          },
        },
      );
    };
    // Shortens a limited copy or cut until the USFM it writes fits, so what stays selected is
    // exactly what is copied; `CopyLimitPlugin` has already shortened it by its text. Blocks it
    // when nothing fits, or the browser would copy the whole selection it still shows.
    const $fit = (event: ClipboardEvent | KeyboardEvent | null): boolean => {
      const view = markersView();
      if (!view) return false;
      return $fitOrBlock(event, copyLimitRef.current, (selection) => {
        const usfm = $selectionToUsfmViaStandardView(editor, view);
        return usfm === undefined ? selection.getTextContent().length : usfm.length;
      });
    };
    return mergeRegister(
      editor.registerCommand(COPY_COMMAND, $fit, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(CUT_COMMAND, $fit, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(COPY_COMMAND, (event) => $copy(event, false), COMMAND_PRIORITY_HIGH),
      editor.registerCommand(CUT_COMMAND, (event) => $copy(event, true), COMMAND_PRIORITY_HIGH),
    );
  }, [editor]);

  return null;
}
