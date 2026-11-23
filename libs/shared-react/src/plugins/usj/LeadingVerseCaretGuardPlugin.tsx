import { getEditorTextDirection } from "./ArrowNavigationPlugin";
import { $deleteFromCaretHost, useTransientCaretHost } from "./transientCaretHost";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  $addUpdateTag,
  $createRangeSelection,
  $getEditor,
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  $setSelection,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_LOW,
  DELETE_CHARACTER_COMMAND,
  DELETE_LINE_COMMAND,
  DELETE_WORD_COMMAND,
  HISTORY_MERGE_TAG,
  KEY_DOWN_COMMAND,
  LexicalCommand,
  LexicalEditor,
  LexicalNode,
  NodeKey,
  SELECTION_CHANGE_COMMAND,
  TextNode,
} from "lexical";
import { useCallback, useEffect } from "react";
import {
  $getSelectableParaMarker,
  $isCaretHost,
  $isParaNode,
  CURSOR_CHANGE_TAG,
  ParaNode,
} from "shared";
import { $isSomeVerseNode } from "../../nodes/usj";

/**
 * Per editor, the paragraph whose leading-verse stop an arrow key has just moved the caret to.
 * Only that arrival gets a host: a caret put at a paragraph's start any other way (a click, a
 * programmatic selection, the caret a merge leaves) keeps its existing handling. Kept while the
 * selection stays in that paragraph, so a caret or focus returning to the stop is hosted again;
 * dropped once the selection leaves the paragraph.
 */
const leadingVerseArrivals = new WeakMap<LexicalEditor, NodeKey>();

/**
 * Records that the caret is being moved to the stop before `para`'s leading verse number by an
 * arrow key, so {@link LeadingVerseCaretGuardPlugin} hosts it.
 *
 * Mutating: call inside the `editor.update()` that moves the caret.
 */
export function $markLeadingVerseArrival(para: ParaNode): void {
  leadingVerseArrivals.set($getEditor(), para.getKey());
}

/**
 * The gutter glyph a caret before a paragraph's leading verse number belongs after, or
 * `undefined`.
 *
 * In the gutter view a paragraph's marker is a glyph drawn in the gutter and its first verse number
 * is a decorator, so a caret between the two is an element point with no text to draw it in: the
 * browser shows no caret there and a keystroke lands nowhere. This names the glyph, so a host is
 * put just past it, before the number. The arrow keys stop there (`paraEdgeNavigation.utils.ts`).
 *
 * A caret already in a host there counts wherever it came from; a bare element point counts only
 * in `arrivalParaKey`'s paragraph.
 *
 * Read-only: safe in any read, including `editor.getEditorState().read()`.
 *
 * @param arrivalParaKey - The paragraph an arrow key last moved the caret to the stop of, if any.
 */
function $leadingVerseStopGlyph(arrivalParaKey: NodeKey | undefined): LexicalNode | undefined {
  const selection = $getSelection();
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return undefined;
  const { anchor } = selection;
  const node = anchor.getNode();
  let para: LexicalNode | null;
  let before: LexicalNode | null;
  let after: LexicalNode | null;
  if ($isCaretHost(node)) {
    para = node.getParent();
    before = node.getPreviousSibling();
    after = node.getNextSibling();
  } else if (anchor.type === "element" && $isParaNode(node) && node.getKey() === arrivalParaKey) {
    para = node;
    before = node.getChildAtIndex(anchor.offset - 1);
    after = node.getChildAtIndex(anchor.offset);
  } else {
    return undefined;
  }

  if (!$isParaNode(para)) return undefined;
  const glyph = $getSelectableParaMarker(para);
  if (!glyph || !before?.is(glyph) || !$isSomeVerseNode(after)) return undefined;
  return glyph;
}

/** Whether both ends of a range selection are in the paragraph keyed `paraKey`. */
function $isSelectionInPara(paraKey: NodeKey): boolean {
  const selection = $getSelection();
  if (!$isRangeSelection(selection)) return false;
  return [selection.anchor, selection.focus].every((point) => {
    const node = point.getNode();
    return node.getKey() === paraKey || node.getParents().some((p) => p.getKey() === paraKey);
  });
}

/**
 * The caret host the caret rests in before a paragraph's leading verse number, or `undefined`.
 *
 * Read-only: safe in any read.
 */
function $leadingVerseHost(): TextNode | undefined {
  const selection = $getSelection();
  if (!$isRangeSelection(selection)) return undefined;
  const host = selection.anchor.getNode();
  if (!$isTextNode(host) || !$isCaretHost(host)) return undefined;
  return $leadingVerseStopGlyph(undefined) ? host : undefined;
}

/** The deletes a caret in a host must not swallow: by character, by word, and to the line's end. */
const DELETE_COMMANDS: readonly LexicalCommand<boolean>[] = [
  DELETE_CHARACTER_COMMAND,
  DELETE_WORD_COMMAND,
  DELETE_LINE_COMMAND,
];

/**
 * A Shift+arrow forward from the host before a leading verse number: selects the verse number.
 * Left to the browser, the first step covers only the host's own placeholder, and a range that has
 * left the host removes it and collapses back to where it stood, so the selection never grows.
 *
 * Mutating: call inside `editor.update()` (a command handler is).
 *
 * @returns `true` if the selection now covers the verse number.
 */
function $extendForwardFromLeadingVerseHost(): boolean {
  const host = $leadingVerseHost();
  if (!host) return false;
  const para = host.getParentOrThrow();
  const boundary = host.getIndexWithinParent();
  host.remove();
  const range = $createRangeSelection();
  range.anchor.set(para.getKey(), boundary, "element");
  range.focus.set(para.getKey(), boundary + 1, "element");
  $setSelection(range);
  // Removing a host is no edit, as everywhere else one is removed.
  $addUpdateTag(CURSOR_CHANGE_TAG);
  $addUpdateTag(HISTORY_MERGE_TAG);
  return true;
}

/**
 * Keeps a visible, typeable caret between a paragraph's gutter marker and its leading verse number,
 * where text and markers can be added in front of the verse.
 *
 * {@link useTransientCaretHost} owns the host's lifetime and keeps it out of saved Scripture; this
 * file supplies the rule for where one is needed, the delete a host must not swallow (run from the
 * boundary the host stands for, `$deleteFromCaretHost`), and a Shift+arrow forward from it, which
 * selects the verse number.
 *
 * @returns Always `null`; this plugin renders no UI.
 */
export function LeadingVerseCaretGuardPlugin(): null {
  const [editor] = useLexicalComposerContext();
  const $caretHostAnchor = useCallback(
    () => $leadingVerseStopGlyph(leadingVerseArrivals.get(editor)),
    [editor],
  );
  useTransientCaretHost($caretHostAnchor);
  useEffect(
    () =>
      mergeRegister(
        // Ahead of the host sync (COMMAND_PRIORITY_EDITOR), which still sees an arrival the caret
        // has just made. Once the selection leaves the arrival's paragraph, the arrival is over;
        // until then a caret coming back to the stop (Shift+→ then ←, say) is hosted again.
        editor.registerCommand(
          SELECTION_CHANGE_COMMAND,
          () => {
            const arrival = leadingVerseArrivals.get(editor);
            if (arrival !== undefined && !$isSelectionInPara(arrival))
              leadingVerseArrivals.delete(editor);
            return false;
          },
          COMMAND_PRIORITY_LOW,
        ),
        editor.registerCommand(
          KEY_DOWN_COMMAND,
          (event) => {
            if (!event.shiftKey || event.altKey || event.ctrlKey || event.metaKey) return false;
            const root = editor.getRootElement();
            if (!root) return false;
            const forwardKey = getEditorTextDirection(root) === "rtl" ? "ArrowLeft" : "ArrowRight";
            if (event.key !== forwardKey || !$extendForwardFromLeadingVerseHost()) return false;
            event.preventDefault();
            return true;
          },
          COMMAND_PRIORITY_CRITICAL,
        ),
        ...DELETE_COMMANDS.map((command) =>
          editor.registerCommand(
            command,
            (isBackward) => {
              const host = $leadingVerseHost();
              return !!host && $deleteFromCaretHost(editor, host, command, isBackward);
            },
            COMMAND_PRIORITY_LOW,
          ),
        ),
      ),
    [editor],
  );
  return null;
}
