import {
  $isInCollapsedNote,
  isCopyFromOutsideEditor,
  $limitSelectionLength,
  $notePreviewLength,
  $selectionHoldsStructure,
  $selectionShownText,
  normalizeCopyLimit,
  SelectionLimitOptions,
  sliceToCopyLimit,
} from "./copyLimit.utils";
import { $selectionToUsfmViaStandardView } from "../MarkersViewCopyPlugin";
import {
  $selectionToUsfmText,
  $writeClipboardData,
} from "../markerEdit/whitespaceDisplay.plugin.utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { IS_APPLE, mergeRegister } from "@lexical/utils";
import {
  $getSelection,
  $isElementNode,
  $isNodeSelection,
  $isRangeSelection,
  $onUpdate,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_NORMAL,
  COPY_COMMAND,
  CUT_COMMAND,
  getDOMTextNode,
  isExactShortcutMatch,
  LexicalEditor,
  PointType,
  RangeSelection,
  SELECT_ALL_COMMAND,
} from "lexical";
import { useEffect, useRef } from "react";
import { NBSP } from "shared";
import { hasStandardViewWhitespace, ViewOptions } from "shared-react";

/**
 * Copy events a copy-limit page guard has already claimed, with the text the guards have left.
 * Every editor with a limit adds its own guard to the page, so a selection that spans several
 * editors reaches several guards; each shortens what the last left, so whichever order they run
 * in, the smallest limit wins.
 */
const guardedCopies = new WeakMap<Event, string>();

/**
 * Applies `EditorOptions.copyLimit`, whose TSDoc holds the contract. It adds:
 * - a CRITICAL copy and cut handler, the one fit, which shortens the selection until the view's
 *   copy of it fits ({@link $copyFit}) and blocks a copy or cut when nothing fits;
 * - a NORMAL writer for an over-limit copy or cut that no view-specific handler claims, which
 *   writes the plain text the view shows;
 * - page listeners, attached only while a limit is set: a copy guard for copies the browser makes
 *   itself (a selection that starts or ends outside the editor), which trims only the clipboard
 *   text, not the selection; and a block on the Select All shortcut.
 *
 * With no limit (`undefined`) it does nothing. Its command handlers are registered once, at mount,
 * and read the limit and the view at each copy or cut, so a limit that arrives later changes nothing
 * about their order: they stay ahead of same-priority handlers that plugins mounted after this one
 * register.
 */
export function CopyLimitPlugin({
  limit,
  viewOptions,
}: {
  limit: number | undefined;
  viewOptions?: ViewOptions;
}): null {
  const [editor] = useLexicalComposerContext();
  const limitRef = useRef(normalizeCopyLimit(limit));
  const viewOptionsRef = useRef(viewOptions);
  // Set by the fit when it shortened an over-limit selection, for the plain-text writer below.
  const isOverLimitRef = useRef(false);
  // Re-attaches or removes the page listeners to match the current limit; set by the registration
  // effect below.
  const syncPageListenersRef = useRef<(() => void) | undefined>(undefined);

  useEffect(() => {
    limitRef.current = normalizeCopyLimit(limit);
    viewOptionsRef.current = viewOptions;
    syncPageListenersRef.current?.();
  }, [limit, viewOptions]);

  useEffect(() => {
    let rootDocument: Document | undefined;
    let listeningDocument: Document | undefined;

    const onDocumentCopy = (event: ClipboardEvent) => {
      const currentLimit = limitRef.current;
      if (currentLimit === undefined) return;
      const claimedEarlier = guardedCopies.get(event);
      // The editor calls `preventDefault` synchronously whenever it writes the copy itself, and it
      // has already applied the limit to what it wrote.
      if (event.defaultPrevented && claimedEarlier === undefined) return;
      const root = editor.getRootElement();
      if (!root) return;
      const domSelection = root.ownerDocument.getSelection();
      if (!domSelection || !coversContentOf(domSelection, root)) return;
      // Always claim the event — otherwise the browser copies the full selection natively. When
      // nothing is left to write (a limit of 0, or a selection with no text), nothing is written,
      // so the clipboard keeps what it held before, not an empty string; anything an earlier guard
      // wrote is cleared. No-break spaces are written as spaces, as the browser's own copy does.
      event.preventDefault();
      const text = sliceToCopyLimit(
        claimedEarlier ?? domSelection.toString().replaceAll(NBSP, " "),
        currentLimit,
      );
      guardedCopies.set(event, text);
      const clipboardData = event.clipboardData;
      if (!clipboardData) return;
      if (!text) {
        if (claimedEarlier !== undefined) clipboardData.clearData();
        return;
      }
      clipboardData.setData("text/plain", text);
    };

    const onDocumentKeyDown = (event: KeyboardEvent) => {
      if (limitRef.current === undefined) return;
      // Also matches on `event.code` when the key types a non-Latin letter, so Ctrl+A is still
      // found on such a layout.
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

    // Claims a copy or cut and writes nothing, since letting the event through would have the
    // browser copy, or cut, the whole selection it still shows.
    const block = (event: ClipboardEvent | KeyboardEvent | null) => {
      event?.preventDefault();
      return true;
    };

    // The one fit. A copy or cut that fits the limit is left to the view's normal handlers. One
    // over it has its selection shortened until the view's copy of it fits, then goes ahead, so
    // what is left selected is what is copied or cut; when nothing fits it is blocked.
    //
    // A copy dispatched with no clipboard event is dispatched again, from inside the handler that
    // writes it, with the clipboard event `@lexical/clipboard` provokes; a CRITICAL listener that
    // library registers after this one writes the payload. So on that second pass, which finds the
    // selection already fitted, this must return `false`: claiming it would leave the clipboard
    // unwritten until the library gives up waiting.
    const $fit = (event: ClipboardEvent | KeyboardEvent | null) => {
      const currentLimit = limitRef.current;
      if (currentLimit === undefined) return false;
      isOverLimitRef.current = false;
      if (isCopyFromOutsideEditor(editor, event)) return false;
      if (currentLimit <= 0) return block(event);
      const selection = $getSelection();
      if ($isNodeSelection(selection)) {
        const size = selection.getTextContent().length + $notePreviewLength(selection.getNodes());
        return size <= currentLimit ? false : block(event);
      }
      if (!$isRangeSelection(selection) || selection.isCollapsed()) return false;
      const fit = $copyFit(editor, viewOptionsRef.current);
      if (fit.$size(selection) <= currentLimit) return false;
      $limitSelectionLength(currentLimit, fit.options);
      if (selection.isCollapsed()) return block(event);
      // Only an editable editor carries its selection to the page when the update commits.
      if (!editor.isEditable()) $onUpdate(() => showSelectionOnPage(editor));
      isOverLimitRef.current = true;
      return false;
    };

    // Writes an over-limit copy or cut that no view-specific handler claimed (those run at HIGH)
    // as the plain text the view shows. Lexical's own copy would also write HTML and its internal
    // flavor, which carry text the view does not show, such as a collapsed footnote. A cut removes
    // the range only when the plain text carries all of it: never verse or chapter markers, notes
    // or other structure it leaves out.
    const $writePlainCopy = (event: ClipboardEvent | KeyboardEvent | null, isCut: boolean) => {
      if (limitRef.current === undefined || !isOverLimitRef.current) return false;
      isOverLimitRef.current = false;
      const selection = $getSelection();
      if (!$isRangeSelection(selection) || selection.isCollapsed()) return false;
      const shouldRemove = isCut && editor.isEditable() && !$selectionHoldsStructure(selection);
      return $writeClipboardData(
        event && typeof event === "object" && "clipboardData" in event ? event : null,
        editor,
        { "text/plain": $selectionShownText(selection, $isInCollapsedNote) },
        shouldRemove ? () => selection.removeText() : undefined,
      );
    };

    const unregister = mergeRegister(
      editor.registerCommand(COPY_COMMAND, $fit, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(CUT_COMMAND, $fit, COMMAND_PRIORITY_CRITICAL),
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
      // The page key-down listener's `preventDefault` does not stop an editable editor from
      // dispatching its own Select All, so this swallows it. A read-only editor never dispatches it.
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

/**
 * How the view `viewOptions` describes measures a copy of the live selection, which the fit
 * shortens in place:
 * - `$size`: how much its normal copy writes, to decide whether it fits;
 * - `options`: how {@link $limitSelectionLength} measures it when it does not.
 *
 * Standard view and the Markers view copy USFM, which both measure. Other views, and a Markers-view
 * selection that cannot be mapped to USFM, count the selection's text plus every note caller's
 * preview text, which their normal copy's HTML and internal flavors carry. Shortened, they write
 * the text the view shows, so they are fitted to that.
 */
function $copyFit(
  editor: LexicalEditor,
  viewOptions: ViewOptions | undefined,
): { $size: (selection: RangeSelection) => number; options: SelectionLimitOptions } {
  if (hasStandardViewWhitespace(viewOptions)) {
    const $usfmLength = (selection: RangeSelection) => $selectionToUsfmText(selection).length;
    return { $size: $usfmLength, options: { $measure: $usfmLength } };
  }
  const markersView = viewOptions?.markerMode === "visible" ? viewOptions : undefined;
  if (markersView && $selectionToUsfmViaStandardView(editor, markersView) !== undefined) {
    const $usfmLength = (selection: RangeSelection) =>
      $selectionToUsfmViaStandardView(editor, markersView)?.length ??
      $selectionShownText(selection, $isInCollapsedNote).length;
    return { $size: $usfmLength, options: { $measure: $usfmLength } };
  }
  return {
    $size: (selection) =>
      selection.getTextContent().length + $notePreviewLength(selection.getNodes()),
    options: { $isHidden: $isInCollapsedNote },
  };
}

/**
 * Sets the page's selection to `editor`'s committed range selection, as an editable editor does
 * itself when an update commits.
 */
function showSelectionOnPage(editor: LexicalEditor): void {
  editor.getEditorState().read(() => {
    const selection = $getSelection();
    const domSelection = editor.getRootElement()?.ownerDocument.getSelection();
    if (!$isRangeSelection(selection) || !domSelection) return;
    const anchor = $domPoint(editor, selection.anchor);
    const focus = $domPoint(editor, selection.focus);
    if (anchor && focus) domSelection.setBaseAndExtent(...anchor, ...focus);
  });
}

/** Where `point` falls in the editor's DOM; `undefined` if its node is not rendered. */
function $domPoint(editor: LexicalEditor, point: PointType): [Node, number] | undefined {
  const element = editor.getElementByKey(point.key);
  if (!element) return undefined;
  if (point.type === "text") {
    const text = getDOMTextNode(element);
    return text ? [text, point.offset] : undefined;
  }
  const node = point.getNode();
  const child = $isElementNode(node) ? node.getChildAtIndex(point.offset) : null;
  const childElement = child ? editor.getElementByKey(child.getKey()) : null;
  const parent = childElement?.parentNode;
  if (!childElement || !parent) return [element, element.childNodes.length];
  return [parent, Array.prototype.indexOf.call(parent.childNodes, childElement)];
}

/**
 * Whether any range of `selection` holds some of `root`'s contents, rather than none or only a
 * boundary point at one of its edges.
 */
function coversContentOf(selection: Selection, root: HTMLElement): boolean {
  const contents = root.ownerDocument.createRange();
  contents.selectNodeContents(root);
  for (let i = 0; i < selection.rangeCount; i++) {
    const range = selection.getRangeAt(i);
    const overlap = range.cloneRange();
    if (range.compareBoundaryPoints(range.START_TO_START, contents) < 0)
      overlap.setStart(contents.startContainer, contents.startOffset);
    if (range.compareBoundaryPoints(range.END_TO_END, contents) > 0)
      overlap.setEnd(contents.endContainer, contents.endOffset);
    if (!overlap.collapsed) return true;
  }
  return false;
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
