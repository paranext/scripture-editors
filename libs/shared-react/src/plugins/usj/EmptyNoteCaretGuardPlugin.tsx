import { $emptyNoteContentSlot } from "../../nodes/usj/note.utils";
import { useTransientCaretHost } from "./transientCaretHost";
import { $getSelection, $isRangeSelection, $isTextNode, LexicalNode } from "lexical";
import { $isCursorPlaceholderOnlyText, $isNoteNode } from "shared";

/**
 * The node an empty note's content follows, when the caret is at that note's content slot, or
 * `undefined`.
 *
 * An expanded note with no content (`\f + \f*`) has no text node for its content to be typed into:
 * the slot between its caller and its closing glyph is only a boundary. Typed at, the browser's
 * character joins the neighbor Lexical resolves the boundary to - the closing glyph, whose bytes
 * are a picture of the marker, so the text shows but is never saved.
 *
 * Detected at that boundary however the caret describes it: an element point on the note, the end
 * of the node before the slot, or the start of the node after it (the closing glyph, or a host
 * already there).
 *
 * Limited to a note whose content slot follows a node that does not take typing itself - a marker
 * glyph, a caller the host has protected from editing (`ViewOptions.isNoteShellEditable: false`, as
 * in a host's note editor), or a caller decorator. Where the caller is ordinary editable text, the
 * end of it is also the end of the caller, and typing there is left to mean what it already means.
 *
 * Read-only: call inside `editor.getEditorState().read()` or a command listener.
 */
export function $emptyNoteContentAnchor(): LexicalNode | undefined {
  const selection = $getSelection();
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return undefined;
  const { anchor } = selection;
  const anchorNode = anchor.getNode();
  const note = $isNoteNode(anchorNode) ? anchorNode : anchorNode.getParent();
  if (!$isNoteNode(note)) return undefined;
  const slot = $emptyNoteContentSlot(note);
  if (slot === undefined) return undefined;

  let before = note.getChildAtIndex(slot - 1);
  while (before && $isCursorPlaceholderOnlyText(before)) before = before.getPreviousSibling();
  if (!before) return undefined;
  if ($isTextNode(before) && before.isSimpleText()) return undefined;

  const firstAfter = before.getIndexWithinParent() + 1;
  if (anchorNode.is(note))
    return anchor.offset >= firstAfter && anchor.offset <= slot ? before : undefined;
  if (anchorNode.is(before))
    return $isTextNode(before) && anchor.offset === before.getTextContentSize()
      ? before
      : undefined;
  const index = anchorNode.getIndexWithinParent();
  return index >= firstAfter && index <= slot && anchor.offset === 0 ? before : undefined;
}

/**
 * Gives an empty note's content slot a text node to type into, so what the user types there becomes
 * the note's content - written directly in the note (`\f + text\f*`), with no run marker added.
 *
 * {@link useTransientCaretHost} owns the host's lifetime (created on arrival, removed on departure
 * or blur, stripped the moment real text is typed) and keeps it out of saved Scripture; this file
 * supplies only the rule for WHERE one is needed.
 *
 * @returns Always `null`; this plugin renders no UI.
 */
export function EmptyNoteCaretGuardPlugin(): null {
  useTransientCaretHost($emptyNoteContentAnchor);
  return null;
}
