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
import { $insertDataTransferForRichText } from "@lexical/clipboard";
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
  LexicalEditor,
  LexicalNode,
  PASTE_COMMAND,
  PASTE_TAG,
  PasteCommandType,
  SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
} from "lexical";
import { useEffect, useRef } from "react";
import { LoggerBasic } from "shared";

/** The clipboard flavor Lexical writes its own node copy to. */
const LEXICAL_CLIPBOARD_TYPE = "application/x-lexical-editor";

/** Logs and reports one removal. */
function reportRemoved(
  event: UnstorableTextRemoved,
  onRemoved: UnstorableTextRemovedHandler | undefined,
  logger: LoggerBasic | undefined,
): void {
  logger?.info(
    `UnstorableTextPlugin: removed ${event.removed.join(" and ")} from a ${event.source}.`,
  );
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
 * Whether Lexical inserts `data` as plain text: it carries neither a node copy from an editor of
 * this namespace nor html, the two flavors Lexical prefers (`$insertDataTransferForRichText`).
 */
function takesPlainTextRoute(data: DataTransfer, editor: LexicalEditor): boolean {
  const lexicalString = data.getData(LEXICAL_CLIPBOARD_TYPE);
  if (lexicalString) {
    try {
      const payload: unknown = JSON.parse(lexicalString);
      if (
        payload &&
        typeof payload === "object" &&
        "namespace" in payload &&
        "nodes" in payload &&
        payload.namespace === editor._config.namespace &&
        Array.isArray(payload.nodes)
      )
        return false;
    } catch {
      // Unreadable: Lexical falls through to html and plain text too.
    }
  }
  const html = data.getData("text/html");
  // Lexical skips html identical to the plain text.
  return !html || html === data.getData("text/plain");
}

/**
 * Plain text as protected structure inserts it, in the paragraph at the caret: each run of line
 * breaks becomes one space, except a trailing one, which goes (Lexical's own plain-text paste
 * makes no empty paragraph for it either), and each tab becomes a space.
 */
function joinLines(text: string): string {
  return text
    .replace(/[\r\n]+$/, "")
    .replace(/[\r\n]+/g, " ")
    .replace(/\t/g, " ");
}

/**
 * Keeps text a hidden-marker view cannot store out of every paste and drop: each `\` and each `//`
 * goes and the rest goes in (see {@link removeUnstorableText}), and the host is told once per paste
 * or drop through `onRemoved`. A paste or drop left with nothing to insert changes nothing.
 *
 * Covers each route Lexical inserts by: a node copy from an editor of this namespace and html
 * (through `SELECTION_INSERT_CLIPBOARD_NODES_COMMAND`), and plain text, pasted (`PASTE_COMMAND`) or
 * dropped (`CONTROLLED_TEXT_INSERTION_COMMAND` with an `insertFromDrop` event). Under `"protected"`
 * structure, `StructureKeyboardPlugin` inserts html pastes and drops itself; give it
 * {@link $filterUnstorablePastedNodes} as its `$filterPastedNodes` to cover those too. Typed text is
 * not this plugin's concern.
 *
 * Under `"protected"` structure a plain-text paste or drop goes into the paragraph at the caret,
 * its lines joined by one space each, as protected structure's html route joins paragraphs:
 * Lexical would otherwise make each line a paragraph of its own.
 *
 * @param structureProtectionMode - The editor's structure protection.
 * @param onRemoved - Told once per paste or drop that lost unstorable text.
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

    /**
     * Inserts a plain-text paste or drop itself when it needs filtering, or line breaks joining
     * under protected structure. Returns whether it did; otherwise Lexical's own insertion runs.
     */
    const $insertPlainTransfer = (
      data: DataTransfer,
      source: UnstorableTextRemoved["source"],
    ): boolean => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection) || !takesPlainTextRoute(data, editor)) return false;
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
          return removed.length > 0 && $insertsNothing(nodes);
        },
        // Critical, so a handler that does insert the nodes cannot insert them unfiltered.
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(
        PASTE_COMMAND,
        (event: PasteCommandType) => {
          const data = "clipboardData" in event ? event.clipboardData : null;
          if (!data || !$insertPlainTransfer(data, "paste")) return false;
          event.preventDefault();
          return true;
        },
        // Below the guards that refuse a paste outright, and below protected structure's
        // sanitizer, which takes html pastes first.
        COMMAND_PRIORITY_NORMAL,
      ),
      editor.registerCommand(
        CONTROLLED_TEXT_INSERTION_COMMAND,
        (payload) => {
          if (typeof payload === "string" || payload.inputType !== "insertFromDrop") return false;
          const data = payload.dataTransfer;
          if (!data) return false;
          if ($insertPlainTransfer(data, "drop")) return true;
          isDropping = true;
          queueMicrotask(() => {
            isDropping = false;
          });
          return false;
        },
        // Below the guards that refuse an insertion outright (several at HIGH), above Lexical's own.
        COMMAND_PRIORITY_NORMAL,
      ),
    );
  }, [editor]);

  return null;
}
