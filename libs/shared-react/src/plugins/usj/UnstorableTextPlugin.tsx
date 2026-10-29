import {
  HIDDEN_VIEW_CLIPBOARD_NAMESPACE,
  nodeCopyIn,
  removeMarkerGlyphElements,
  withoutNodeCopyOf,
} from "./clipboard.utils";
import { StructureProtectionMode } from "./structure-protection.model";
import {
  UnstorableCharacter,
  UnstorableTextRemoved,
  UnstorableTextRemovedHandler,
} from "./unstorable-text.model";
import {
  $insertsNothing,
  $removeUnstorableTextFromNodes,
  $textAroundSelection,
  removeUnstorableText,
} from "./unstorableText.utils";
import {
  $generateNodesFromSerializedNodes,
  $insertDataTransferForRichText,
  $insertGeneratedNodes,
} from "@lexical/clipboard";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  $addUpdateTag,
  $getSelection,
  $isRangeSelection,
  BaseSelection,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_NORMAL,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  isDOMNode,
  isSelectionCapturedInDecoratorInput,
  KEY_DOWN_COMMAND,
  LexicalNode,
  PASTE_COMMAND,
  PASTE_TAG,
  PasteCommandType,
  SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
} from "lexical";
import { useEffect, useRef } from "react";
import { LoggerBasic } from "shared";

/** Logs and reports one removal. */
function reportRemoved(
  event: UnstorableTextRemoved,
  onRemoved: UnstorableTextRemovedHandler | undefined,
  logger: LoggerBasic | undefined,
): void {
  const from = event.source === "typing" ? "typed text" : `a ${event.source}`;
  logger?.info(`UnstorableTextPlugin: removed ${event.removed.join(" and ")} from ${from}.`);
  onRemoved?.(event);
}

/**
 * Removes unstorable text (`\` and `//`, see {@link removeUnstorableText}) from nodes about to be
 * pasted or dropped at `selection`, and reports the removal once. For code that inserts pasted
 * nodes itself instead of through `SELECTION_INSERT_CLIPBOARD_NODES_COMMAND`, such as
 * `StructureKeyboardPlugin`'s protected-structure sanitizer.
 *
 * Mutating: call inside `editor.update()`.
 *
 * @param nodes - The nodes about to be inserted; changed in place, emptied text nodes removed.
 * @param selection - Where they will be inserted.
 * @param source - What brought them in.
 * @param onRemoved - Told when something was removed.
 * @param logger - Where a removal is logged, at `info`.
 * @returns What was removed; empty when nothing was.
 */
export function $filterUnstorablePastedNodes(
  nodes: LexicalNode[],
  selection: BaseSelection | null,
  source: UnstorableTextRemoved["source"],
  onRemoved?: UnstorableTextRemovedHandler,
  logger?: LoggerBasic,
): UnstorableCharacter[] {
  const { before, after } = $isRangeSelection(selection)
    ? $textAroundSelection(selection)
    : { before: "", after: "" };
  const removed = $removeUnstorableTextFromNodes(nodes, before, after);
  if (removed.length > 0) reportRemoved({ source, removed }, onRemoved, logger);
  return removed;
}

/**
 * `text` as typing it at the current selection would leave it (see {@link removeUnstorableText}),
 * judged by the document characters that will touch it: over a selection, the ones outside it,
 * since the typed text replaces what is selected.
 *
 * Read-only: call inside `editor.update()` or an editor read.
 */
function $filterTypedText(text: string): { text: string; removed: UnstorableCharacter[] } {
  const selection = $getSelection();
  const { before, after } = $isRangeSelection(selection)
    ? $textAroundSelection(selection)
    : { before: "", after: "" };
  return removeUnstorableText(text, before, after);
}

/**
 * Whether `event` is a shortcut chord rather than a typed character: Ctrl or Cmd held without Alt.
 * Ctrl+Alt is AltGr on Windows, which some keyboard layouts type `\` with.
 */
function isShortcutChord(event: KeyboardEvent): boolean {
  return (event.ctrlKey || event.metaKey) && !event.altKey;
}

/**
 * The flavor `data` is inserted from in a hidden-marker view: a node copy from a hidden-marker view
 * ({@link HIDDEN_VIEW_CLIPBOARD_NAMESPACE}) first, then html, then plain text, as Lexical's
 * `$insertDataTransferForRichText` picks once a node copy of any other view is hidden from it
 * ({@link withoutNodeCopyOf}).
 */
function insertionRoute(data: DataTransfer): "lexical" | "html" | "plain" {
  if (nodeCopyIn(data, HIDDEN_VIEW_CLIPBOARD_NAMESPACE)) return "lexical";
  const html = data.getData("text/html");
  // Lexical skips html identical to the plain text.
  return html && html !== data.getData("text/plain") ? "html" : "plain";
}

/**
 * `html` without its marker glyphs (see {@link removeMarkerGlyphElements}), or `undefined` when it
 * holds none.
 */
function htmlWithoutMarkerGlyphs(html: string): string | undefined {
  const dom = new DOMParser().parseFromString(html, "text/html");
  return removeMarkerGlyphElements(dom) ? dom.documentElement.outerHTML : undefined;
}

/**
 * Plain text as protected structure inserts it, in the paragraph at the caret: each run of line
 * breaks becomes one space, except a trailing one, which goes, since under protection it would
 * only split the paragraph; and each tab becomes a space.
 */
function joinLines(text: string): string {
  return text
    .replace(/[\r\n]+$/, "")
    .replace(/[\r\n]+/g, " ")
    .replace(/\t/g, " ");
}

/**
 * Keeps text a hidden-marker view cannot store out of every paste, drop and keystroke: each `\` and
 * each `//` goes and the rest goes in (see {@link removeUnstorableText}), and the host is told once
 * per paste, drop or refused keystroke through `onRemoved`. A paste or drop left with nothing to
 * insert changes nothing.
 *
 * Reads a node copy (`application/x-lexical-editor`) only from a hidden-marker view, which tags it
 * {@link HIDDEN_VIEW_CLIPBOARD_NAMESPACE}: pasted, it goes in exactly as copied, attributes, notes
 * and figures included. A node copy from any other view, such as Standard view, whose node shapes
 * differ, is passed over for its html or plain text.
 *
 * Covers each route a paste or drop inserts by: a node copy and html (through
 * `SELECTION_INSERT_CLIPBOARD_NODES_COMMAND`), and plain text, pasted (`PASTE_COMMAND`) or dropped
 * (`CONTROLLED_TEXT_INSERTION_COMMAND` with an `insertFromDrop` event). Under `"protected"`
 * structure, `StructureKeyboardPlugin` inserts node copies, html pastes and drops itself; give it
 * {@link $filterUnstorablePastedNodes} as its `$filterPastedNodes` to cover those too.
 *
 * Html pasted or dropped loses every marker glyph element (`data-text-type="marker"`) before it is
 * parsed, as protected structure's sanitizer drops them: a glyph is presentation, and parsed back
 * it would be marker text. A node copy is not touched.
 *
 * Typing a `\` is refused, and so is typing a `/` that would touch a `/` beside it (over a
 * selection, one outside it); a lone `/` goes in. A keystroke is refused at its `keydown`
 * (`KEY_DOWN_COMMAND`; a shortcut chord such as Ctrl+/ is let through), so the browser never
 * inputs it. Typed text that arrives without a `keydown` — a virtual keyboard, autocorrect or a
 * spelling replacement — is filtered on its way in, whichever route carries it:
 * `CONTROLLED_TEXT_INSERTION_COMMAND` (a string, or an `insertReplacementText` event), or a
 * `beforeinput` `insertText` the browser would apply to the DOM itself, which is claimed in the
 * capture phase ahead of Lexical's own listener and inserted through the command. Text that loses
 * a character still puts in the rest, and is reported once. Text being composed by an input method
 * is not filtered, so a `\` or `//` an IME commits goes in.
 *
 * Under `"protected"` structure a plain-text paste or drop goes into the paragraph at the caret,
 * its lines joined by one space each, as protected structure's html route joins paragraphs:
 * Lexical would otherwise make each line a paragraph of its own.
 *
 * @param structureProtectionMode - The editor's structure protection.
 * @param onRemoved - Told once per paste, drop or keystroke that lost or refused unstorable text.
 * @param logger - Where each removal is logged, at `info`.
 * @returns `null`. This plugin has no DOM presence.
 */
export function UnstorableTextPlugin({
  structureProtectionMode = "off",
  onRemoved,
  logger,
}: {
  structureProtectionMode?: StructureProtectionMode;
  onRemoved?: UnstorableTextRemovedHandler;
  logger?: LoggerBasic;
}): null {
  const [editor] = useLexicalComposerContext();
  // Refs, so a host handing fresh props each render does not re-register every command (which
  // would move this plugin's handlers to the end of their priority and flip same-priority ties).
  const structureProtectionModeRef = useRef(structureProtectionMode);
  const onRemovedRef = useRef(onRemoved);
  const loggerRef = useRef(logger);
  useEffect(() => {
    structureProtectionModeRef.current = structureProtectionMode;
    onRemovedRef.current = onRemoved;
    loggerRef.current = logger;
  }, [structureProtectionMode, onRemoved, logger]);

  useEffect(() => {
    // Set while a drop that Lexical inserts as nodes is being inserted: its nodes reach
    // `SELECTION_INSERT_CLIPBOARD_NODES_COMMAND` from the same, synchronous dispatch, which is over
    // by the next microtask. This relies on Lexical dispatching that insertion synchronously.
    let isDropping = false;
    // Set while typed text that lost unstorable characters goes in, so what is left is not
    // filtered, or reported, again.
    let isInsertingFiltered = false;
    // Set while html that lost its marker glyphs goes in, so nodes left with nothing to insert
    // change nothing, as a filtered paste left with nothing does.
    let isInsertingWithoutGlyphs = false;

    /**
     * Filters typed `text` at the selection. When it loses anything, puts in what is left, reports
     * the loss, and returns `true`; otherwise returns `false`, leaving the insertion to Lexical.
     */
    const $insertTypedText = (text: string): boolean => {
      const filtered = $filterTypedText(text);
      if (filtered.removed.length === 0) return false;
      if (filtered.text) {
        isInsertingFiltered = true;
        try {
          editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, filtered.text);
        } finally {
          isInsertingFiltered = false;
        }
      }
      reportRemoved(
        { source: "typing", removed: filtered.removed },
        onRemovedRef.current,
        loggerRef.current,
      );
      return true;
    };

    /** A `beforeinput` the browser would apply itself, without telling Lexical in a command. */
    const onBeforeInput = (event: InputEvent) => {
      if (event.inputType !== "insertText" || !editor.isEditable() || editor.isComposing()) return;
      const text = event.data ?? event.dataTransfer?.getData("text/plain");
      if (!text || editor.read(() => $filterTypedText(text)).removed.length === 0) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, text);
    };

    /**
     * Inserts a plain-text paste or drop itself when it needs filtering, or line breaks joining
     * under protected structure. Returns whether it did; otherwise Lexical's own insertion runs.
     */
    const $insertPlainTransfer = (
      data: DataTransfer,
      source: UnstorableTextRemoved["source"],
    ): boolean => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection) || insertionRoute(data) !== "plain") return false;
      const text = data.getData("text/plain") || data.getData("text/uri-list");
      if (!text) return false;
      const joinsLines = structureProtectionModeRef.current === "protected" && /[\r\n]/.test(text);
      const { before, after } = $textAroundSelection(selection);
      const filtered = removeUnstorableText(joinsLines ? joinLines(text) : text, before, after);
      if (filtered.removed.length === 0 && !joinsLines) return false;
      if (source === "paste") $addUpdateTag(PASTE_TAG);
      if (filtered.text) {
        // Lexical reads only `getData` from the transfer, and finds no flavor here but plain text,
        // so its own plain-text insertion runs on the filtered text; a real `DataTransfer` cannot
        // be constructed everywhere this runs.
        const plainOnly = {
          getData: (type: string) => (type === "text/plain" ? filtered.text : ""),
        } as Pick<DataTransfer, "getData"> as DataTransfer;
        $insertDataTransferForRichText(plainOnly, selection, editor);
      }
      if (filtered.removed.length > 0)
        reportRemoved(
          { source, removed: filtered.removed },
          onRemovedRef.current,
          loggerRef.current,
        );
      return true;
    };

    /**
     * Inserts an html paste or drop itself, without its marker glyphs, when its html holds any: a
     * glyph is presentation, so it would otherwise go in as marker text such as `\q1 `, which the
     * filter would then leave as `q1 `. The browser's own serialization of a drag-move across a
     * paragraph break carries the next paragraph's gutter glyph, and a Markers-view copy carries
     * every marker as one. Returns whether it inserted; otherwise Lexical's own insertion runs.
     */
    const $insertHtmlWithoutGlyphs = (
      data: DataTransfer,
      source: UnstorableTextRemoved["source"],
    ): boolean => {
      const selection = $getSelection();
      if (!selection || insertionRoute(data) !== "html") return false;
      const html = htmlWithoutMarkerGlyphs(data.getData("text/html"));
      if (html === undefined) return false;
      if (source === "paste") $addUpdateTag(PASTE_TAG);
      // As for plain text above: Lexical reads only `getData`, and finds the same flavors as
      // before but for the html.
      const withoutGlyphs = {
        getData: (type: string) => (type === "text/html" ? html : data.getData(type)),
      } as Pick<DataTransfer, "getData"> as DataTransfer;
      isInsertingWithoutGlyphs = true;
      try {
        $insertDataTransferForRichText(withoutGlyphs, selection, editor);
      } finally {
        isInsertingWithoutGlyphs = false;
      }
      return true;
    };

    /**
     * Inserts a paste or drop itself where a hidden-marker view has to, and returns whether it did;
     * otherwise Lexical's own insertion runs:
     * - a node copy from a hidden-marker view ({@link HIDDEN_VIEW_CLIPBOARD_NAMESPACE}), which
     *   Lexical does not read (its namespace is not the editor's). It goes in as Lexical inserts its
     *   own node copy, through `SELECTION_INSERT_CLIPBOARD_NODES_COMMAND`, so the filter there sees
     *   it;
     * - a transfer whose node copy is tagged with the editor's own namespace — another view's copy,
     *   such as Standard view's — by its html or plain text, so that view's node shapes are never
     *   rebuilt here;
     * - plain text or html that the filter or the glyph strip changes.
     */
    const $insertTransfer = (
      transfer: DataTransfer,
      source: UnstorableTextRemoved["source"],
    ): boolean => {
      const selection = $getSelection();
      if (!selection) return false;
      const nodeCopy = nodeCopyIn(transfer, HIDDEN_VIEW_CLIPBOARD_NAMESPACE);
      if (nodeCopy) {
        if (source === "paste") $addUpdateTag(PASTE_TAG);
        $insertGeneratedNodes(editor, $generateNodesFromSerializedNodes(nodeCopy), selection);
        return true;
      }
      const data = withoutNodeCopyOf(transfer, editor._config.namespace);
      if ($insertPlainTransfer(data, source) || $insertHtmlWithoutGlyphs(data, source)) return true;
      if (data === transfer) return false;
      if (source === "paste") $addUpdateTag(PASTE_TAG);
      $insertDataTransferForRichText(data, selection, editor);
      return true;
    };

    return mergeRegister(
      editor.registerCommand(
        SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
        ({ nodes, selection }) => {
          const removed = $filterUnstorablePastedNodes(
            nodes,
            selection,
            isDropping ? "drop" : "paste",
            onRemovedRef.current,
            loggerRef.current,
          );
          // Claimed only when nothing is left: inserting nothing over a selection would delete it.
          return (removed.length > 0 || isInsertingWithoutGlyphs) && $insertsNothing(nodes);
        },
        // Critical, so a handler that does insert the nodes cannot insert them unfiltered.
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(
        PASTE_COMMAND,
        (event: PasteCommandType) => {
          const data = "clipboardData" in event ? event.clipboardData : null;
          if (!data) return false;
          // A paste into an input inside a decorator is that input's own, as Lexical's paste
          // leaves it.
          if (isDOMNode(event.target) && isSelectionCapturedInDecoratorInput(event.target))
            return false;
          if (!$insertTransfer(data, "paste")) return false;
          event.preventDefault();
          return true;
        },
        // Below the guards that refuse a paste outright, and below protected structure's
        // sanitizer, which takes node copies and html pastes first.
        COMMAND_PRIORITY_NORMAL,
      ),
      editor.registerCommand(
        CONTROLLED_TEXT_INSERTION_COMMAND,
        (payload) => {
          if (typeof payload === "string" || payload.inputType !== "insertFromDrop") return false;
          const data = payload.dataTransfer;
          if (!data) return false;
          isDropping = true;
          queueMicrotask(() => {
            isDropping = false;
          });
          return $insertTransfer(data, "drop");
        },
        // Below the guards that refuse an insertion outright (several at HIGH), above Lexical's own.
        COMMAND_PRIORITY_NORMAL,
      ),
      editor.registerCommand(
        KEY_DOWN_COMMAND,
        (event: KeyboardEvent) => {
          if (event.key !== "\\" && event.key !== "/") return false;
          if (isShortcutChord(event) || event.isComposing || editor.isComposing()) return false;
          const { removed } = $filterTypedText(event.key);
          if (removed.length === 0) return false;
          event.preventDefault();
          reportRemoved({ source: "typing", removed }, onRemovedRef.current, loggerRef.current);
          return true;
        },
        COMMAND_PRIORITY_NORMAL,
      ),
      editor.registerCommand(
        CONTROLLED_TEXT_INSERTION_COMMAND,
        (payload) => {
          if (isInsertingFiltered || editor.isComposing()) return false;
          const text =
            typeof payload === "string"
              ? payload
              : payload.inputType === "insertReplacementText"
                ? (payload.data ?? payload.dataTransfer?.getData("text/plain"))
                : undefined;
          return !!text && $insertTypedText(text);
        },
        // Critical, so no handler that inserts typed text can insert it unfiltered.
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerRootListener((root, previousRoot) => {
        previousRoot?.removeEventListener("beforeinput", onBeforeInput, true);
        root?.addEventListener("beforeinput", onBeforeInput, true);
      }),
      () => editor.getRootElement()?.removeEventListener("beforeinput", onBeforeInput, true),
    );
  }, [editor]);

  return null;
}
