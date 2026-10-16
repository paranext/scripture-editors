import { releaseTagsAfterNextCommit } from "./editorUpdate.utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  $addUpdateTag,
  $createPoint,
  $createRangeSelection,
  $getPreviousSelection,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_EDITOR,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  CUT_COMMAND,
  DELETE_CHARACTER_COMMAND,
  DELETE_LINE_COMMAND,
  DELETE_WORD_COMMAND,
  INSERT_LINE_BREAK_COMMAND,
  INSERT_PARAGRAPH_COMMAND,
  LexicalEditor,
  LexicalNode,
  PASTE_COMMAND,
  PointType,
  RangeSelection,
  REMOVE_TEXT_COMMAND,
  SELECTION_CHANGE_COMMAND,
  TextNode,
} from "lexical";
import { useEffect, useRef } from "react";
import {
  $findFirstAncestorNoteNode,
  $isMarkerNode,
  $isNoteNode,
  $noteEditableCallerNode,
  $placeCaretAtBoundary,
  CURSOR_CHANGE_TAG,
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

/** `note`'s own child that contains `node`, or `undefined` when `node` is not inside `note`. */
function $noteChildContaining(note: NoteNode, node: LexicalNode): LexicalNode | undefined {
  for (let cursor: LexicalNode | null = node; cursor; cursor = cursor.getParent())
    if (note.is(cursor.getParent())) return cursor;
  return undefined;
}

/**
 * Whether the caret reached the shell from the note's CONTENT side — which is what a leftward move
 * out of the note looks like, and the one case where pushing it forward again would trap it.
 *
 * Taken from the PREVIOUS selection because the shell is crossed whole in either direction and the
 * landing point alone cannot say which way the user was going. Anything else — a rightward move
 * from before the note, no previous selection at all — reads as travelling forward, which is also
 * the safe default: forward lands in editable content.
 *
 * Only asked of a KEYBOARD move. A pointer is not travelling anywhere — it names a destination
 * outright — so the previous caret says nothing about the user's intent, and reading it as a
 * direction sends a click away from the note it landed in. That is not hypothetical: a popover
 * that focuses its editor with no selection parks the caret at the document end, which for a
 * document holding one note is that note's own closing glyph — so the FIRST click on the shell
 * read as "coming from the content side" and threw the caret past the whole note.
 */
function $arrivedFromContentSide(note: NoteNode): boolean {
  const previous = $getPreviousSelection();
  if (!$isRangeSelection(previous)) return false;
  const { anchor } = previous;
  const node = anchor.getNode();
  if (note.is(node)) return anchor.offset >= $contentStartIndex(note);
  const child = $noteChildContaining(note, node);
  return child !== undefined && child.getIndexWithinParent() >= $contentStartIndex(note);
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
 * Move a caret that has come to rest inside an expanded note's protected shell to the nearest
 * position outside it: the start of the note's own content, or — for a KEYBOARD move coming back
 * out of that content — the position before the whole note, so the shell can be crossed leftward
 * instead of trapping the caret against it.
 *
 * `isPointerGesture` says the caret was placed by a pointer, which is a destination rather than a
 * direction: such a caret always goes to the content, the position the user was pointing into.
 *
 * Returns `true` when the selection was corrected.
 *
 * Exported for direct unit testing; production reaches it through
 * {@link NoteShellCaretGuardPlugin}.
 *
 * Mutating (moves the selection): call inside `editor.update()` or a command handler.
 */
export function $guardCaretOutOfNoteShell(isPointerGesture = false): boolean {
  const selection = $getSelection();
  if (!$isRangeSelection(selection)) return false;

  if (!selection.isCollapsed()) return $narrowSelectionOutOfShell(selection);

  const ended = $noteEndAt(selection.anchor);
  if (ended) {
    const end = $contentEndPoint(ended);
    if (selection.anchor.is(end)) return false;
    $setCollapsed(selection, end);
    return true;
  }
  const note = $shellAt(selection.anchor);
  if (!note) return false;
  if (!isPointerGesture && $arrivedFromContentSide(note)) {
    const parent = note.getParent();
    if (!parent) return false;
    $placeCaretAtBoundary(parent, note.getIndexWithinParent());
  } else {
    $placeAtShellTrailingEdge(note);
  }
  return true;
}

/**
 * The shell's trailing edge as a point: the end of its last node, where a keystroke is redirected
 * into the note's content rather than into the shell (see {@link $shellAt}).
 */
function $shellTrailingEdge(note: NoteNode): PointType {
  const shell = $noteShellNodes(note);
  const last = shell[shell.length - 1];
  return $isTextNode(last)
    ? $createPoint(last.getKey(), last.getTextContentSize(), "text")
    : $createPoint(note.getKey(), $contentStartIndex(note), "element");
}

/** The index of `note`'s own closing glyph, or its child count when it has none. */
function $contentEndIndex(note: NoteNode): number {
  const last = note.getLastChild();
  const endsInCloser =
    $isMarkerNode(last) &&
    last.getMarkerSyntax() === "closing" &&
    last.getMarker() === note.getMarker();
  return endsInCloser ? note.getChildrenSize() - 1 : note.getChildrenSize();
}

/** Whether `point` is inside `note`'s closing glyph (anywhere but its leading edge). */
function $isInClosingGlyph(note: NoteNode, point: PointType): boolean {
  if (point.type !== "text") return false;
  const node = point.getNode();
  return (
    note.is(node.getParent()) &&
    node.getIndexWithinParent() === $contentEndIndex(note) &&
    $isMarkerNode(node) &&
    point.offset > 0
  );
}

/** `note`'s own closing glyph, or `undefined` when it has none (an unclosed note). */
function $closingGlyph(note: NoteNode): TextNode | undefined {
  const index = $contentEndIndex(note);
  if (index === note.getChildrenSize()) return undefined;
  const closer = note.getChildAtIndex(index);
  return $isTextNode(closer) ? closer : undefined;
}

/**
 * The end of `note`'s content as a TEXT point: the end of the last text before the closing glyph.
 * The mirror of {@link $shellTrailingEdge}. An element point at the closer's index is not a safe
 * caret: it resolves to the closer's own start, and the closer is ordinary text, so a keystroke there
 * is prepended to the glyph.
 */
function $contentEndPoint(note: NoteNode): PointType {
  const endIndex = $contentEndIndex(note);
  if (endIndex > $contentStartIndex(note)) {
    const before = note.getChildAtIndex(endIndex - 1);
    const text = $isElementNode(before) ? before.getLastDescendant() : before;
    if ($isTextNode(text)) return $createPoint(text.getKey(), text.getTextContentSize(), "text");
  }
  return $shellTrailingEdge(note);
}

/**
 * The protected note whose END `point` rests at illegitimately, or `undefined`: at or inside its
 * closing glyph, on the note past its content, or just past the whole note when nothing follows it
 * in its block (the end of a note editor's row).
 */
function $noteEndAt(point: PointType): NoteNode | undefined {
  const node = point.getNode();
  const parent = node.getParent();
  if ($isNoteNode(parent) && $noteShellNodes(parent).length > 0 && $closingGlyph(parent)?.is(node))
    return parent;
  if (point.type !== "element") return undefined;
  if ($isNoteNode(node) && $noteShellNodes(node).length > 0 && $closingGlyph(node))
    return point.offset > $contentEndIndex(node) ||
      (point.offset === $contentEndIndex(node) && point.offset > $contentStartIndex(node))
      ? node
      : undefined;
  if (!$isElementNode(node)) return undefined;
  const before = node.getChildAtIndex(point.offset - 1);
  return $isNoteNode(before) && $noteShellNodes(before).length > 0 && !before.getNextSibling()
    ? before
    : undefined;
}

function $setCollapsed(selection: RangeSelection, point: PointType): void {
  selection.anchor.set(point.key, point.offset, point.type);
  selection.focus.set(point.key, point.offset, point.type);
}

/** The note with a protected shell that `node` is, or sits inside, or `undefined`. */
function $protectedNoteOf(node: LexicalNode): NoteNode | undefined {
  const note = $findFirstAncestorNoteNode(node);
  return note && $noteShellNodes(note).length > 0 ? note : undefined;
}

/** Every expanded note with a protected shell that the range reaches into. */
function $protectedNotesIn(selection: RangeSelection): NoteNode[] {
  const notes: NoteNode[] = [];
  const add = (node: LexicalNode) => {
    const note = $protectedNoteOf(node);
    if (!note || notes.some((known) => known.is(note))) return;
    notes.push(note);
  };
  add(selection.anchor.getNode());
  add(selection.focus.getNode());
  selection.getNodes().forEach(add);
  return notes;
}

/**
 * Narrow a RANGE so it holds nothing of a protected note but the note's own content: an endpoint in
 * the shell or in the closing glyph moves to the content's near edge, and a range that crosses the
 * shell or the closing glyph from outside the note stops at the content instead. A range left with
 * nothing in it collapses to the start of the content.
 *
 * A range that reaches into the shell is the other way a keystroke gets at it - a double-click on
 * the caller selects the whole `\f + `, and typing or deleting then replaces it, unwrapping the
 * note. Taking the whole shell into the range would still let that edit remove it; narrowing keeps
 * the edit to the content the note lets the user change. It is also what select-all means in a
 * note editor: all the note's text, never its marker, caller, or closer.
 */
function $narrowSelectionOutOfShell(selection: RangeSelection): boolean {
  const notes = $protectedNotesIn(selection);
  if (notes.length === 0) return false;
  const isBackward = selection.isBackward();
  const copy = (point: PointType) => $createPoint(point.key, point.offset, point.type);
  let start = copy(isBackward ? selection.focus : selection.anchor);
  let end = copy(isBackward ? selection.anchor : selection.focus);
  let changed = false;
  for (const note of notes) {
    const contentStart = $createPoint(note.getKey(), $contentStartIndex(note), "element");
    const contentEnd = $createPoint(note.getKey(), $contentEndIndex(note), "element");
    // The shell's trailing edge is the content's start too, just spelled as a text point.
    const startsAtContent =
      start.type === "text" && $isShellTrailingEdge(note, start.getNode(), start.offset);
    const startsBeforeContent = start.isBefore(contentStart) && !startsAtContent;
    if ($shellAt(start) || $isInClosingGlyph(note, start) || startsBeforeContent) {
      if (!end.isBefore(contentStart) || $shellAt(end)) {
        start = $isInClosingGlyph(note, start) ? $contentEndPoint(note) : $shellTrailingEdge(note);
        changed = true;
      }
    }
    if ($shellAt(end) || $isInClosingGlyph(note, end) || contentEnd.isBefore(end)) {
      if (start.isBefore(contentEnd) || start.is(contentEnd)) {
        end = $shellAt(end) ? $shellTrailingEdge(note) : $contentEndPoint(note);
        changed = true;
      }
    }
  }
  if (!changed) return false;
  if (!start.isBefore(end)) end = start;
  const [anchor, focus] = isBackward ? [end, start] : [start, end];
  selection.anchor.set(anchor.key, anchor.offset, anchor.type);
  selection.focus.set(focus.key, focus.offset, focus.type);
  return true;
}

/** The text between two points of the document, `from` before `to`. */
function $textBetween(from: PointType, to: PointType): string {
  const range = $createRangeSelection();
  range.anchor.set(from.key, from.offset, from.type);
  range.focus.set(to.key, to.offset, to.type);
  return range.getTextContent();
}

/** Where `point` is drawn, as the top of its line box, or `undefined` when it cannot be measured. */
function lineTopOf(editor: LexicalEditor, point: PointType): number | undefined {
  const element = editor.getElementByKey(point.key);
  if (!element) return undefined;
  const range = element.ownerDocument.createRange();
  const container = point.type === "text" ? element.firstChild : element;
  if (!container) return undefined;
  const size =
    container.nodeType === 3 ? (container.textContent?.length ?? 0) : container.childNodes.length;
  range.setStart(container, Math.min(point.offset, size));
  range.collapse(true);
  if (typeof range.getClientRects !== "function") return undefined;
  const [rect] = Array.from(range.getClientRects());
  return rect?.top;
}

/**
 * Whether `a` and `b` are drawn on measurably different visual lines — far enough apart that a
 * line-granularity delete between them should stop at the nearer one rather than reaching across
 * into the other. `false` (treat as the same line) whenever either point cannot be measured,
 * which keeps the caller's existing clamp as the default when there is no layout to check it
 * against.
 */
function $onDifferentLines(editor: LexicalEditor, a: PointType, b: PointType): boolean {
  const topA = lineTopOf(editor, a);
  const topB = lineTopOf(editor, b);
  return topA !== undefined && topB !== undefined && Math.abs(topA - topB) >= 1;
}

/**
 * The node directly after `point`: the child at its offset for an ELEMENT point, or, for a TEXT
 * point resting at its node's end, that node's next sibling. `undefined` for a text point
 * anywhere else, where "directly after" is still inside the same node rather than a sibling.
 */
function $nodeAfter(point: PointType): LexicalNode | undefined {
  if (point.type === "element") {
    const parent = point.getNode();
    return $isElementNode(parent) ? (parent.getChildAtIndex(point.offset) ?? undefined) : undefined;
  }
  const node = point.getNode();
  return node.getTextContentSize() === point.offset
    ? (node.getNextSibling() ?? undefined)
    : undefined;
}

/**
 * Decides a DELETE of a COLLAPSED caret touching a note whose shell is protected: `true` when the
 * delete is handled here (refused, or narrowed and done), `false` to let it run.
 *
 * A caret resting just outside the note, with the note directly ahead, refuses a forward delete
 * too: deleting from there would eat the opening glyph and unwrap the whole note, the same damage
 * a delete from inside the shell would do.
 *
 * A caret is never inside the shell itself, but it rests at the shell's trailing edge - the start
 * of the note's content, where the caret guard itself puts it. A backward delete from there takes
 * the whole caller, a `token` node deleted as one, so it is refused whenever no text lies between
 * the edge and the caret. A forward delete from that same position is not refused outright: it is
 * the start of an ordinary delete into the note's content, handled below like any other caret past
 * the shell.
 *
 * A word delete that would run on past the content into the shell or the closing glyph (nothing
 * but separators and punctuation between the caret and it) deletes back to that edge instead. A
 * line delete does the same UNLESS the two ends are measurably on different visual lines, in which
 * case the delete is left to run on its own line rather than reaching across into the next one.
 * Everything else is the ordinary delete.
 */
function $guardCollapsedDeletion(
  editor: LexicalEditor,
  selection: RangeSelection,
  isBackward: boolean,
  granularity: "character" | "word" | "line",
): boolean {
  const caret = selection.anchor;
  const ended = $noteEndAt(caret);
  if (ended) {
    $setCollapsed(selection, $contentEndPoint(ended));
    return true;
  }
  const note = $protectedNoteOf(caret.getNode());
  if (!note) {
    if (isBackward) return false;
    const after = $nodeAfter(selection.focus);
    return $isNoteNode(after) && $noteShellNodes(after).length > 0;
  }
  if ($shellAt(caret)) return true;
  const edge = $shellTrailingEdge(note);
  if (isBackward) {
    if (!(edge.isBefore(caret) && !edge.is(caret))) return true;
    const between = $textBetween(edge, caret);
    if (between === "") return true;
    if (granularity === "character") return false;
    if (granularity === "word" && /[\p{L}\p{N}]/u.test(between)) return false;
    if (granularity === "line" && $onDifferentLines(editor, edge, caret)) return false;
    selection.anchor.set(edge.key, edge.offset, edge.type);
    selection.removeText();
    return true;
  }
  if (caret.isBefore(edge)) return true;
  const closer = $closingGlyph(note);
  if (!closer) return false;
  const closerStart = $createPoint(closer.getKey(), 0, "text");
  const ahead = $textBetween(caret, closerStart);
  if (ahead === "") return true;
  if (granularity === "character") return false;
  if (granularity === "word" && /[\p{L}\p{N}]/u.test(ahead)) return false;
  if (granularity === "line" && $onDifferentLines(editor, caret, closerStart)) return false;
  selection.focus.set(closerStart.key, closerStart.offset, closerStart.type);
  selection.removeText();
  return true;
}

/**
 * Keeps the caret out of an expanded note's shell — the opening glyph and caller a host governs
 * through its own UI rather than as text (`ViewOptions.isNoteShellEditable: false`; Paratext 10's
 * footnote editor has a dropdown for each, as does Paratext 9).
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
 * can be typed. It lands at the start of the note's content — where the note IS editable, and where
 * a `\cat` category run belongs. The one exception is a KEYBOARD move coming back out of that
 * content: that one lands before the whole note, so the shell is crossed in a single hop rather
 * than trapping the caret against it.
 *
 * A pointer is held to a destination, never a direction. It is read from the pointer being DOWN
 * when the selection lands, which is the order a click delivers (`pointerdown`, then the selection
 * change, then `pointerup`) — the click event itself arrives too late to answer in the same update,
 * and correcting twice would let other selection listeners see the wrong position in between.
 *
 * Not gated on view options: the rule reads the shell's own node mode, so it is structurally a
 * no-op in the views that build an editable shell (the main editor's Markers view expands notes
 * precisely so the whole note can be edited as text).
 *
 * @returns Always `null`; this plugin renders no UI.
 */
export function NoteShellCaretGuardPlugin(): null {
  const [editor] = useLexicalComposerContext();
  const isPointerDown = useRef(false);

  useEffect(() => {
    const markDown = () => {
      isPointerDown.current = true;
    };
    const markUp = () => {
      isPointerDown.current = false;
    };
    // Listened for on the DOCUMENT in the capture phase, and released on `pointercancel` as well
    // as `pointerup`: a drag that starts in the editor can finish anywhere, and a pointer flag
    // that fails to clear would make every later keyboard move read as a click.
    return editor.registerRootListener((rootElement, prevRootElement) => {
      const previous = prevRootElement?.ownerDocument;
      previous?.removeEventListener("pointerdown", markDown, true);
      previous?.removeEventListener("pointerup", markUp, true);
      previous?.removeEventListener("pointercancel", markUp, true);
      isPointerDown.current = false;
      const current = rootElement?.ownerDocument;
      current?.addEventListener("pointerdown", markDown, true);
      current?.addEventListener("pointerup", markUp, true);
      current?.addEventListener("pointercancel", markUp, true);
    });
  }, [editor]);

  // A drag is still under way when the user types or deletes over it (the mouse button still
  // down): the browser owns the DOM selection until then, and Lexical re-reads the range from it
  // for the edit, undoing the narrowing the selection change made. So the edit itself narrows the
  // range again, first, before anything acts on it. A range that held nothing but the shell is
  // left with nothing to delete.
  useEffect(() => {
    const narrowBeforeEdit = (isDeletion: boolean) => () => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection) || selection.isCollapsed()) return false;
      if (!$narrowSelectionOutOfShell(selection)) return false;
      return isDeletion && selection.isCollapsed();
    };
    const insertion = narrowBeforeEdit(false);
    const deletion = narrowBeforeEdit(true);
    const collapsedDeletion =
      (granularity: "character" | "word" | "line") => (isBackward: boolean) => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) return false;
        if (!selection.isCollapsed()) return deletion();
        return $guardCollapsedDeletion(editor, selection, isBackward, granularity);
      };
    return mergeRegister(
      editor.registerCommand(
        CONTROLLED_TEXT_INSERTION_COMMAND,
        insertion,
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(PASTE_COMMAND, insertion, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(INSERT_PARAGRAPH_COMMAND, insertion, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(INSERT_LINE_BREAK_COMMAND, insertion, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(
        DELETE_CHARACTER_COMMAND,
        collapsedDeletion("character"),
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(
        DELETE_WORD_COMMAND,
        collapsedDeletion("word"),
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(
        DELETE_LINE_COMMAND,
        collapsedDeletion("line"),
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(REMOVE_TEXT_COMMAND, deletion, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(CUT_COMMAND, deletion, COMMAND_PRIORITY_CRITICAL),
    );
  }, [editor]);

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      () => {
        // Command handlers already run inside an update, so the tag joins that commit rather than
        // opening a new one. Nothing here changes content, so tagging it costs nothing already
        // excluded from saved Scripture and collaborative traffic. The correction only moves the
        // caret, and a selection-only commit keeps its tags pending for the next one - the user's
        // next keystroke would then be taken for a caret move and never reach the host - so the
        // tag is released once this commit is done.
        if ($guardCaretOutOfNoteShell(isPointerDown.current)) {
          $addUpdateTag(CURSOR_CHANGE_TAG);
          releaseTagsAfterNextCommit(editor, CURSOR_CHANGE_TAG);
        }
        return false;
      },
      COMMAND_PRIORITY_EDITOR,
    );
  }, [editor]);

  return null;
}
