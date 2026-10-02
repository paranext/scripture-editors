import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  $createPoint,
  $getSelection,
  $isRangeSelection,
  $isElementNode,
  $isTextNode,
  $selectAll,
  COMMAND_PRIORITY_EDITOR,
  COMMAND_PRIORITY_HIGH,
  LexicalNode,
  PointType,
  RangeSelection,
  SELECT_ALL_COMMAND,
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

  if (!selection.isCollapsed()) return $confineRangeToProtectedNote(selection);

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

/** The protected note `node` is, or is inside, or `undefined`. */
function $protectedNoteOf(node: LexicalNode): NoteNode | undefined {
  for (let cursor: LexicalNode | null = node; cursor; cursor = cursor.getParent())
    if ($isNoteNode(cursor) && $noteShellNodes(cursor).length > 0) return cursor;
  return undefined;
}

/**
 * The protected note a RANGE touches: one an endpoint is in, beside or past the shell of, or one
 * the range spans. `undefined` when it touches none.
 */
function $protectedNoteTouchedBy(selection: RangeSelection): NoteNode | undefined {
  for (const point of [selection.anchor, selection.focus]) {
    const note =
      $protectedNoteOf(point.getNode()) ??
      $atOrBeforeProtectedOpener(point) ??
      $atOrPastProtectedCloser(point);
    if (note) return note;
  }
  for (const node of selection.getNodes()) {
    const note = $protectedNoteOf(node);
    if (note) return note;
  }
  return undefined;
}

/**
 * Keep a RANGE that touches a protected note to that note's content: an endpoint in front of the
 * content (before the note, in its opening glyph or caller) moves to the content's start, and one
 * past it (in or past the closer) to the content's end, the closer's front. So whatever replaces
 * or removes the range — typing over it, Backspace, select-all and either — edits the note's
 * content only and never its shell, the note itself, or anything outside it, which the host that
 * protects the shell does not save (the footnote popover saves only the note).
 */
function $confineRangeToProtectedNote(selection: RangeSelection): boolean {
  const note = $protectedNoteTouchedBy(selection);
  if (!note) return false;
  const shell = $noteShellNodes(note);
  const last = shell[shell.length - 1];
  const start = $isTextNode(last)
    ? $createPoint(last.getKey(), last.getTextContentSize(), "text")
    : $createPoint(note.getKey(), $contentStartIndex(note), "element");
  const closer = $protectedCloser(note);
  const end = closer
    ? $createPoint(closer.getKey(), 0, "text")
    : $createPoint(note.getKey(), note.getChildrenSize(), "element");
  let isMoved = false;
  for (const point of [selection.anchor, selection.focus]) {
    const bound = point.isBefore(start) ? start : end.isBefore(point) ? end : undefined;
    if (!bound || (point.key === bound.key && point.offset === bound.offset)) continue;
    point.set(bound.key, bound.offset, bound.type);
    isMoved = true;
  }
  return isMoved;
}

/**
 * Keeps the caret inside an expanded note's content when the host governs the note's shell — its
 * opening glyph, caller and closing glyph — through its own UI rather than as text
 * (`ViewOptions.isNoteShellEditable: false`; Paratext 10's footnote editor has a dropdown for the
 * marker and the caller, as does Paratext 9). Such a host edits that note alone (the footnote
 * popover saves only the note), so a caret in front of the note or among its opening glyph and
 * caller moves to the start of its content, and one inside or past its closer moves to the end of
 * its content. A keyboard move therefore cannot leave the note past either end of its shell; the
 * popover's document holds nothing there. A range that touches the note — Shift with an arrow,
 * Home or End, a drag, select-all — is kept to the note's content the same way, so no edit of it
 * reaches the shell, the note itself or anything outside it.
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
    // Command handlers already run inside an update, so the announcement joins that commit.
    // Announced rather than tagged: the guard moves only the caret, and a tag on a caret-only
    // commit would ride along on the user's next edit and hide it from the host.
    const $guard = () => {
      if ($guardCaretOutOfNoteShell()) editor.dispatchCommand(APP_PLACED_CARET_COMMAND, undefined);
    };
    return mergeRegister(
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          $guard();
          return false;
        },
        COMMAND_PRIORITY_EDITOR,
      ),
      // Select-all is the rich-text plugin's `$selectAll`, confined in the same update rather than
      // after the selection change it announces, which an edit may come before.
      editor.registerCommand(
        SELECT_ALL_COMMAND,
        () => {
          $selectAll();
          $guard();
          return true;
        },
        COMMAND_PRIORITY_HIGH,
      ),
    );
  }, [editor]);

  return null;
}
