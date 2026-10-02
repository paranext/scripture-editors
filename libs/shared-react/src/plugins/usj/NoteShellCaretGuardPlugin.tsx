import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $isRangeSelection,
  $isElementNode,
  $isTextNode,
  COMMAND_PRIORITY_EDITOR,
  LexicalNode,
  PointType,
  SELECTION_CHANGE_COMMAND,
  TextNode,
} from "lexical";
import { useEffect } from "react";
import {
  $isMarkerNode,
  $isNoteNode,
  $noteEditableCallerNode,
  $placeCaretAtBoundary,
  APP_PLACED_CARET_COMMAND,
  NoteNode,
} from "shared";

/**
 * An expanded note's SHELL — its leading opening glyph(s) and its editable caller, the `\f + ` a
 * reader sees — as the nodes that carry it, or an empty list when this note has no protected shell.
 *
 * Read off the nodes' MODE rather than the view options, the same way every other note rule is read
 * off the tree: the adaptor puts exactly these nodes in `token` mode when the host governs the
 * marker and the caller through its own UI (`ViewOptions.isNoteShellEditable: false`), so a view
 * that leaves the shell editable builds `normal` nodes and every rule here is structurally a no-op
 * for it. Nothing has to stay in sync with a flag.
 */
function $noteShellNodes(note: NoteNode): LexicalNode[] {
  if (note.getIsCollapsed() !== false) return [];
  const shell: LexicalNode[] = [];
  for (const child of note.getChildren()) {
    if (!$isMarkerNode(child) || child.getMarkerSyntax() !== "opening") break;
    shell.push(child);
  }
  const caller = $noteEditableCallerNode(note);
  if (caller) shell.push(caller);
  // Protected only when the adaptor marked it so. A partly-token shell is not a shape the adaptor
  // builds; requiring ALL of it keeps this from half-applying to one it did not.
  return shell.length > 0 && shell.every((node) => $isTextNode(node) && node.getMode() === "token")
    ? shell
    : [];
}

/**
 * An expanded note's protected CLOSING glyph — the `\f*` that ends the shell's other side — or
 * `undefined` when the note has none or leaves it editable. Read off the node's mode, as
 * {@link $noteShellNodes} is: the adaptor builds it in `token` mode exactly when it builds the
 * opening glyph and the caller that way.
 */
function $protectedCloser(note: NoteNode): TextNode | undefined {
  if (note.getIsCollapsed() !== false) return undefined;
  const last = note.getLastChild();
  return $isMarkerNode(last) && last.getMarkerSyntax() === "closing" && last.getMode() === "token"
    ? last
    : undefined;
}

/**
 * The note whose protected closer `point` rests strictly inside, or `undefined`. An insertion
 * strictly inside a `token` node replaces it outright, so a RANGE endpoint there is pushed to one
 * of the closer's ends ({@link $expandSelectionPastShell}).
 */
function $closerInteriorAt(point: PointType): NoteNode | undefined {
  if (point.type !== "text") return undefined;
  const node = point.getNode();
  const note = node.getParent();
  if (!$isNoteNode(note) || !$protectedCloser(note)?.is(node)) return undefined;
  return point.offset > 0 && point.offset < node.getTextContentSize() ? note : undefined;
}

/**
 * The note whose protected closer a collapsed caret at `point` is inside or past, or `undefined`:
 * strictly inside the closer, at its end, or at any position that is the same place on screen —
 * the note's own boundary behind the closer, the boundary right after the note, or the start of a
 * text right after it.
 *
 * None of those is a place the caret may rest. The host that protects a note's shell edits that
 * note alone — the footnote popover saves only the note — so a byte typed past the closer would
 * be shown and then dropped. The closer's front, the end of the note's content, is where such a
 * caret goes instead.
 */
function $atOrPastProtectedCloser(point: PointType): NoteNode | undefined {
  const node = point.getNode();
  if (point.type === "text") {
    const note = node.getParent();
    if ($isNoteNode(note) && $protectedCloser(note)?.is(node))
      return point.offset > 0 ? note : undefined;
    if (point.offset !== 0) return undefined;
    const previous = node.getPreviousSibling();
    return $isNoteNode(previous) && $protectedCloser(previous) ? previous : undefined;
  }
  if ($isNoteNode(node)) {
    const closer = $protectedCloser(node);
    return closer && point.offset > closer.getIndexWithinParent() ? node : undefined;
  }
  if (!$isElementNode(node) || point.offset === 0) return undefined;
  const previous = node.getChildAtIndex(point.offset - 1);
  return $isNoteNode(previous) && $protectedCloser(previous) ? previous : undefined;
}

/** The note whose protected shell `node` belongs to, or `undefined`. */
function $shellOwner(node: LexicalNode): NoteNode | undefined {
  const note = node.getParent();
  if (!$isNoteNode(note)) return undefined;
  return $noteShellNodes(note).some((shellNode) => shellNode.is(node)) ? note : undefined;
}

/**
 * The boundary index just past `note`'s shell — the start of the note's own content, and the only
 * caret position at the shell's trailing edge that is inside the note.
 */
function $contentStartIndex(note: NoteNode): number {
  const shell = $noteShellNodes(note);
  const last = shell[shell.length - 1];
  return last ? last.getIndexWithinParent() + 1 : 0;
}

/**
 * The note whose protected shell a collapsed caret at `point` is in front of, or `undefined`: at
 * the end of a text right before the note, at the boundary right before it, or inside the note
 * before its content starts. Each is the same place on screen as the shell's leading edge.
 *
 * None of those is a place the caret may rest. The host that protects a note's shell edits that
 * note alone — the footnote popover saves only the note — so a byte typed in front of it would be
 * shown and then dropped. The start of the note's content is where such a caret goes instead.
 */
function $atOrBeforeProtectedOpener(point: PointType): NoteNode | undefined {
  const node = point.getNode();
  const isProtected = (candidate: LexicalNode | null | undefined): candidate is NoteNode =>
    $isNoteNode(candidate) && $noteShellNodes(candidate).length > 0;
  if (point.type === "text") {
    if (point.offset !== node.getTextContentSize()) return undefined;
    const next = node.getNextSibling();
    return isProtected(next) ? next : undefined;
  }
  if (isProtected(node)) return point.offset < $contentStartIndex(node) ? node : undefined;
  if (!$isElementNode(node)) return undefined;
  const next = node.getChildAtIndex(point.offset);
  return isProtected(next) ? next : undefined;
}

/**
 * The note whose shell `point` rests in ILLEGITIMATELY, or `undefined`.
 *
 * Exactly one offset in the whole shell is a caret position: the trailing edge of its last node.
 * Lexical's `token` mode redirects an insertion at a token node's boundary to a sibling, and only
 * there does it pick the right one — a fresh node after the caller, which is the start of the
 * note's content. At the shell's LEADING edge it inserts a text node inside the note before the
 * opening glyph (a `NoteNode` does not refuse text before it), and at the seam between the glyph
 * and the caller it inserts BETWEEN them. Every other offset is strictly inside a token node,
 * where an insertion replaces that node outright.
 *
 * So the trailing edge is where this guard puts the caret, and the one place it leaves alone —
 * which is also what stops it from correcting its own correction.
 */
function $shellAt(point: PointType): NoteNode | undefined {
  if (point.type !== "text") return undefined;
  const node = point.getNode();
  const note = $shellOwner(node);
  if (!note) return undefined;
  return $isShellTrailingEdge(note, node, point.offset) ? undefined : note;
}

/** Whether `point` is at the shell's trailing edge — the caret position just past `\f + `. */
function $isShellTrailingEdge(note: NoteNode, node: LexicalNode, offset: number): boolean {
  const shell = $noteShellNodes(note);
  const last = shell[shell.length - 1];
  return last !== undefined && last.is(node) && offset === last.getTextContentSize();
}

/** Collapse the caret to the shell's trailing edge, the start of the note's own content. */
function $placeAtShellTrailingEdge(note: NoteNode): void {
  const shell = $noteShellNodes(note);
  const last = shell[shell.length - 1];
  if ($isTextNode(last)) last.select(last.getTextContentSize(), last.getTextContentSize());
  else $placeCaretAtBoundary(note, $contentStartIndex(note));
}

/**
 * Move a caret that has come to rest in or beside an expanded note's protected shell into the
 * note's own content: one in front of the note or among its opening glyph and caller goes to the
 * start of the content ({@link $atOrBeforeProtectedOpener}, {@link $shellAt}), and one inside or
 * past its closer goes to the closer's front, the end of the content
 * ({@link $atOrPastProtectedCloser}). Such a host edits the note alone (the footnote popover saves
 * only the note), so the caret is kept where what it types is saved — however it got there: a
 * click, an arrow press, `End`, or a focus that falls back to the document's end.
 *
 * Returns `true` when the selection was corrected.
 *
 * Exported for direct unit testing; production reaches it through
 * {@link NoteShellCaretGuardPlugin}.
 *
 * Mutating (moves the selection): call inside `editor.update()` or a command handler.
 */
export function $guardCaretOutOfNoteShell(): boolean {
  const selection = $getSelection();
  if (!$isRangeSelection(selection)) return false;

  if (!selection.isCollapsed()) return $expandSelectionPastShell(selection.anchor, selection.focus);

  const closedNote = $atOrPastProtectedCloser(selection.anchor);
  const closer = closedNote && $protectedCloser(closedNote);
  if (closer) {
    closer.select(0, 0);
    return true;
  }

  const note = $atOrBeforeProtectedOpener(selection.anchor) ?? $shellAt(selection.anchor);
  if (!note) return false;
  $placeAtShellTrailingEdge(note);
  return true;
}

/**
 * Push a RANGE's endpoints out of any shell they land in, away from the other endpoint, so the
 * shell ends up wholly inside the selection or wholly outside it.
 *
 * A range that stops partway through the shell is the other way a keystroke reaches it: replacing
 * such a selection edits the shell node the range clipped. Growing the range instead makes the
 * shell behave as the single unit it is drawn as — the same treatment `token` mode gives deletion.
 */
function $expandSelectionPastShell(anchor: PointType, focus: PointType): boolean {
  const anchorNote = $shellAt(anchor);
  const focusNote = $shellAt(focus);
  const anchorCloser = $closerInteriorAt(anchor);
  const focusCloser = $closerInteriorAt(focus);
  if (!anchorNote && !focusNote && !anchorCloser && !focusCloser) return false;
  // Which endpoint leads is the range's own direction; each offending one moves to the shell edge
  // that is farther from the other, which is what grows rather than shrinks the selection.
  const anchorLeads = anchor.isBefore(focus);
  if (anchorNote) $movePointPastShell(anchor, anchorNote, anchorLeads);
  if (focusNote) $movePointPastShell(focus, focusNote, !anchorLeads);
  if (anchorCloser) $movePointPastCloser(anchor, anchorCloser, anchorLeads);
  if (focusCloser) $movePointPastCloser(focus, focusCloser, !anchorLeads);
  return true;
}

/** Move `point` from inside `note`'s protected closer to its front (`toStart`) or its end. */
function $movePointPastCloser(point: PointType, note: NoteNode, toStart: boolean): void {
  const closer = $protectedCloser(note);
  if (closer) point.set(closer.getKey(), toStart ? 0 : closer.getTextContentSize(), "text");
}

/** Move `point` to the shell's leading edge (`toStart`) or to the start of the note's content. */
function $movePointPastShell(point: PointType, note: NoteNode, toStart: boolean): void {
  const parent = note.getParent();
  if (toStart && parent) point.set(parent.getKey(), note.getIndexWithinParent(), "element");
  else point.set(note.getKey(), $contentStartIndex(note), "element");
}

/**
 * Keeps the caret inside an expanded note's content when the host governs the note's shell — its
 * opening glyph, caller and closing glyph — through its own UI rather than as text
 * (`ViewOptions.isNoteShellEditable: false`; Paratext 10's footnote editor has a dropdown for the
 * marker and the caller, as does Paratext 9). Such a host edits that note alone (the footnote
 * popover saves only the note), so a caret in front of the note or among its opening glyph and
 * caller moves to the start of its content, and one inside or past its closer moves to the end of
 * its content. A keyboard move therefore cannot leave the note past either end of its shell; the
 * popover's document holds nothing there.
 *
 * Rendering those nodes in Lexical's `token` mode is what makes them atomic to the operations that
 * ASK a node whether it can be split, but it does not keep a caret from landing among their
 * characters, and a caret that does land there is not inert: an insertion with the caret strictly
 * inside a token node replaces the WHOLE node with the typed character. The measured results are a
 * caller replaced by the keystroke — which then leaks into the note's content on save — and, for
 * the opening glyph, a note destroyed outright, since a note that has lost its opener is unwrapped
 * as deletion damage. Both read on screen as an edit that was accepted and then quietly reverted.
 *
 * So the caret is corrected the moment it comes to rest there, in the same update, before anything
 * can be typed.
 *
 * Not gated on view options: the rule reads the shell's own node mode, so it is structurally a
 * no-op in the views that build an editable shell (the main editor's Markers view expands notes
 * precisely so the whole note can be edited as text).
 *
 * @returns Always `null`; this plugin renders no UI.
 */
export function NoteShellCaretGuardPlugin(): null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      () => {
        // Command handlers already run inside an update, so the announcement joins that commit.
        // Announced rather than tagged: the guard moves only the caret, and a tag on a caret-only
        // commit would ride along on the user's next edit and hide it from the host.
        if ($guardCaretOutOfNoteShell())
          editor.dispatchCommand(APP_PLACED_CARET_COMMAND, undefined);
        return false;
      },
      COMMAND_PRIORITY_EDITOR,
    );
  }, [editor]);

  return null;
}
