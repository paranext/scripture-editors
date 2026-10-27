import { $isCaretHost, useTransientCaretHost } from "./transientCaretHost";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  COMMAND_PRIORITY_LOW,
  DELETE_CHARACTER_COMMAND,
  LexicalEditor,
} from "lexical";
import { useEffect } from "react";
import { $caretHostAtBoundary } from "shared";
import { $isSomeVerseNode, SomeVerseNode } from "../../nodes/usj";

/**
 * The verse marker after which an empty-verse caret host is needed, or `undefined`.
 *
 * A verse whose content has all been deleted collapses to just its marker — an
 * `ImmutableVerseNode` is a childless decorator, so the caret can only land as an element point
 * wedged between markers, which the browser renders with no visible caret. This detects that state:
 * a collapsed element-type caret sitting immediately after a verse marker that is followed by
 * nothing, or by another verse marker (i.e. no `TextNode` to host the caret).
 *
 * Returns `undefined` when a text node already follows the marker (real content, or an existing
 * placeholder host), or when the caret is not at such a boundary.
 *
 * Read-only: call inside `editor.getEditorState().read()`.
 */
export function $emptyVerseNeedingHost(): SomeVerseNode | undefined {
  const selection = $getSelection();
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return undefined;
  const { anchor } = selection;
  if (anchor.type !== "element") return undefined;
  const element = anchor.getNode();
  if (!$isElementNode(element)) return undefined;

  const children = element.getChildren();
  const verse = children[anchor.offset - 1];
  if (!$isSomeVerseNode(verse)) return undefined;

  // A text node already hosts the caret at this boundary (real content or an existing placeholder).
  if ($caretHostAtBoundary(element, anchor.offset)) return undefined;

  const following = children[anchor.offset];
  // Nothing, or another verse marker, follows: this verse has no caret host.
  if (following === undefined || $isSomeVerseNode(following)) return verse;
  return undefined;
}

/**
 * A delete from a caret in an empty verse's host, run from the boundary the host stands for.
 *
 * Run as it is, a delete removes only the host's placeholder, whichever offset the caret is at and
 * whichever way it goes: the emptied host is removed, a new one is put back, and the verse marker
 * beyond is never reached. With structure protection on, `StructureKeyboardPlugin` arms that marker
 * before any delete runs; with it off, this is all that reaches it.
 *
 * Mutating: call inside `editor.update()` (a command handler is).
 */
function $deleteFromEmptyVerseHost(editor: LexicalEditor, isBackward: boolean): boolean {
  const selection = $getSelection();
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return false;
  const host = selection.anchor.getNode();
  if (!$isCaretHost(host) || !$isSomeVerseNode(host.getPreviousSibling())) return false;
  const parent = host.getParentOrThrow();
  const boundary = host.getIndexWithinParent();
  host.remove();
  parent.select(boundary, boundary);
  // Every other delete handler judges this one too. Handled either way: the host is gone, so the
  // delete it stood in for has been run.
  editor.dispatchCommand(DELETE_CHARACTER_COMMAND, isBackward);
  return true;
}

/**
 * Keeps a visible caret in a verse whose text has been fully deleted.
 *
 * A verse number is rendered by a childless `ImmutableVerseNode` decorator, so once a verse has no
 * text the caret can only rest as an element point between decorators — which the browser draws
 * with no visible caret. This plugin drops a zero-width-space "caret host" text node into such an
 * empty verse and moves the caret into it, so the insertion point stays visible and typing lands in
 * the verse. {@link useTransientCaretHost} owns the host's lifetime — created on arrival, removed on
 * departure or blur, stripped the moment real text is typed — and the exclusions that keep it out of
 * saved Scripture and out of collaborative traffic; this file supplies only the rule for WHERE one
 * is needed, and the delete a host must not swallow. `TrailingNoteCaretGuardPlugin` supplies the
 * other rule.
 *
 * The host is the verse marker's immediate next sibling, which `usj-nodes.css` relies on to draw the
 * caret right after the number (the `[data-caret-host]` rules).
 *
 * Unlike the arrow-driven `CursorHandler` placeholder system (perf-react), this hosts a *resting*
 * caret and is aware of verse markers, so it fits the platform editor's immutable verse numbers.
 *
 * @returns Always `null`; this plugin renders no UI.
 */
export function EmptyVerseCaretGuardPlugin(): null {
  const [editor] = useLexicalComposerContext();
  useTransientCaretHost($emptyVerseNeedingHost);
  useEffect(
    () =>
      editor.registerCommand(
        DELETE_CHARACTER_COMMAND,
        (isBackward) => $deleteFromEmptyVerseHost(editor, isBackward),
        COMMAND_PRIORITY_LOW,
      ),
    [editor],
  );
  return null;
}
