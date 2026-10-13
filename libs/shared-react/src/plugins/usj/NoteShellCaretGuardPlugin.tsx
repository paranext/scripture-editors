import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  $createPoint,
  $createRangeSelection,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  $selectAll,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_EDITOR,
  COMMAND_PRIORITY_HIGH,
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
  SELECT_ALL_COMMAND,
  SELECTION_CHANGE_COMMAND,
  TextNode,
} from "lexical";
import { useEffect } from "react";
import {
  $findFirstAncestorNoteNode,
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
 * past its closer goes to the end of the content ({@link $noteEndAt},
 * {@link $atOrPastProtectedCloser}). Such a host edits the note alone (a note editor saves only
 * the note), so the caret is kept where what it types is saved — however it got there: a click,
 * an arrow press, `End`, or a focus that falls back to the document's end.
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

  const ended = $noteEndAt(selection.anchor) ?? $atOrPastProtectedCloser(selection.anchor);
  if (ended) {
    const end = $contentEndCaret(ended);
    if (selection.anchor.is(end)) return false;
    $setCollapsed(selection, end);
    return true;
  }
  const note = $atOrBeforeProtectedOpener(selection.anchor) ?? $shellAt(selection.anchor);
  if (!note) return false;
  $placeAtShellTrailingEdge(note);
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
 * Where a caret past `note`'s content rests: the front of its protected closer, which is the end of
 * the content on screen — text typed there joins the content in front of it
 * (`$keepProtectedNoteCloser`, in the marker-edit engine) — or, for a closer the adaptor left
 * editable, the end of the content as a text point ({@link $contentEndPoint}).
 */
function $contentEndCaret(note: NoteNode): PointType {
  const closer = $protectedCloser(note);
  return closer ? $createPoint(closer.getKey(), 0, "text") : $contentEndPoint(note);
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

/**
 * The protected note a RANGE touches: one an endpoint is in, beside or past the shell of, or one
 * the range spans. `undefined` when it touches none.
 */
function $protectedNoteTouchedBy(selection: RangeSelection): NoteNode | undefined {
  for (const point of [selection.anchor, selection.focus]) {
    const note =
      $protectedNoteOf(point.getNode()) ??
      $atOrBeforeProtectedOpener(point) ??
      $atOrPastProtectedCloser(point) ??
      $noteEndAt(point);
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
 * past it (in or past the closer) to the content's end. So whatever replaces or removes the range
 * — typing over it, Backspace, select-all and either — edits the note's content only and never
 * its shell, the note itself, or anything outside it, which the host that protects the shell does
 * not save (a note editor saves only the note). A range left with nothing in it collapses.
 *
 * A double-click on the caller selects the whole `\f + `, and typing or deleting then replaces
 * it, unwrapping the note; taking the whole shell into the range would still let that edit remove
 * it. Confining keeps the edit to the content the note lets the user change. It is also what
 * select-all means in a note editor: all the note's text, never its marker, caller, or closer.
 */
function $confineRangeToProtectedNote(selection: RangeSelection): boolean {
  const note = $protectedNoteTouchedBy(selection);
  if (!note) return false;
  const start = $shellTrailingEdge(note);
  const end = $contentEndPoint(note);
  let isMoved = false;
  for (const point of [selection.anchor, selection.focus]) {
    const bound = point.isBefore(start) ? start : end.isBefore(point) ? end : undefined;
    if (!bound || point.is(bound)) continue;
    point.set(bound.key, bound.offset, bound.type);
    isMoved = true;
  }
  return isMoved;
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
 * Keeps the caret inside an expanded note's content when the host governs the note's shell — its
 * opening glyph, caller and closing glyph — through its own UI rather than as text
 * (`ViewOptions.isNoteShellEditable: false`; Paratext 10's footnote editor has a dropdown for the
 * marker and the caller, as does Paratext 9). Such a host edits that note alone (a note editor
 * saves only the note), so a caret in front of the note or among its opening glyph and caller
 * moves to the start of its content, and one inside or past its closer moves to the end of its
 * content. A keyboard move therefore cannot leave the note past either end of its shell; the note
 * editor's document holds nothing there. A range that touches the note — Shift with an arrow, Home
 * or End, a drag, select-all — is kept to the note's content the same way, and a delete that would
 * reach into the shell or the closer is refused or stopped at its edge, so no edit reaches the
 * shell, the note itself or anything outside it.
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

  // A drag is still under way when the user types or deletes over it (the mouse button still
  // down): the browser owns the DOM selection until then, and Lexical re-reads the range from it
  // for the edit, undoing the confinement the selection change made. So the edit itself confines
  // the range again, first, before anything acts on it. A range that held nothing but the shell is
  // left with nothing to delete.
  useEffect(() => {
    const narrowBeforeEdit = (isDeletion: boolean) => () => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection) || selection.isCollapsed()) return false;
      if (!$confineRangeToProtectedNote(selection)) return false;
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
