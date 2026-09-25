import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getNearestNodeFromDOMNode,
  $getNodeByKey,
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  CLICK_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_EDITOR,
  COMMAND_PRIORITY_HIGH,
  COMMAND_PRIORITY_NORMAL,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  CUT_COMMAND,
  DELETE_CHARACTER_COMMAND,
  DELETE_LINE_COMMAND,
  DELETE_WORD_COMMAND,
  isDOMNode,
  LexicalNode,
  PASTE_COMMAND,
  RangeSelection,
} from "lexical";
import { mergeRegister } from "@lexical/utils";
import { useEffect } from "react";
import {
  $caretHostAtBoundary,
  $getNextNode,
  $getPreviousNode,
  $isBookNode,
  $isGutterMarkerNode,
  $isImmutableTypedTextNode,
  $isParaLikeNode,
  $isSomeParaNode,
  $isSynthesizedMarkerNode,
  $isVisibleMarkerNode,
  $placeCaretAtBoundary,
  BookNode,
  ImmutableTypedTextNode,
  NBSP,
  ParaLikeNode,
} from "shared";
import { $isImmutableVerseNode, $isSomeVerseNode } from "../../nodes/usj";

/**
 * Whether `node` is the `\id` line's own immutable `\id GEN ` prefix — the book's first child,
 * and (per docs/standard-view-invariants.md) the one glyph in the line the caret can never enter.
 * Identity-based (the book's actual first child), not just "any visible marker glyph": a
 * paragraph's own marker prefix is the SAME node shape but takes the opposite, intentional path —
 * deleting it is a real marker-deletion gesture (`$paraMarkerDeletionTransform`,
 * markerEditDeletion.utils.ts), never something to refuse.
 */
export function $isBookPrefixNode(
  node: LexicalNode | null | undefined,
): node is ImmutableTypedTextNode {
  return (
    $isImmutableTypedTextNode(node) &&
    $isBookNode(node.getParent()) &&
    node.is(node.getParent()?.getFirstChild())
  );
}

/**
 * The point just past `book`'s own immutable prefix — the boundary any selection endpoint that has
 * landed ON or BEFORE the prefix should be clamped to. Follows the same hosting convention
 * `$placeCaretAtBoundary` does (a TEXT point at the following content's own start, or the ELEMENT
 * point when nothing hosts one yet), expressed as plain point pieces so a caller can move ONE
 * endpoint of an existing selection without collapsing the other — `$placeCaretAtBoundary` itself
 * replaces the whole active selection, which is only safe for a genuinely collapsed correction.
 */
function $pointJustPastBookPrefix(book: BookNode): {
  key: string;
  offset: number;
  type: "element" | "text";
} {
  const host = $caretHostAtBoundary(book, 1);
  return host
    ? { key: host.getKey(), offset: 0, type: "text" }
    : { key: book.getKey(), offset: 1, type: "element" };
}

/**
 * For a NON-collapsed selection whose span includes the book's own prefix, moves whichever of
 * anchor/focus is EARLIER in document order to the boundary just past it, so the range that
 * survives covers only real content.
 *
 * Delete, paste-over and cut all resolve to the same two primitives against this selection —
 * `RangeSelection.removeText()`/`insertText()` — and every one of them would otherwise consume the
 * prefix decorator along with whatever the user meant to replace, the same loss a collapsed caret's
 * `deleteCharacter` causes at the boundary (see {@link $shouldRefuseBookPrefixDeletion}). Narrowing
 * the selection BEFORE any of those run is the one fix that covers all of them.
 *
 * Mutating: call inside `editor.update()` (a command listener already runs inside one).
 *
 * @param selection - The selection to narrow in place.
 * @returns `true` if the selection touched the prefix and was narrowed, `false` if it did not.
 */
export function $narrowSelectionPastBookPrefix(selection: RangeSelection): boolean {
  if (selection.isCollapsed()) return false;
  const prefixNode = selection.getNodes().find($isBookPrefixNode);
  if (!prefixNode) return false;
  const book = prefixNode.getParent();
  if (!$isBookNode(book)) return false;

  const point = selection.isBackward() ? selection.focus : selection.anchor;
  const target = $pointJustPastBookPrefix(book);
  point.set(target.key, target.offset, target.type);
  return true;
}

/**
 * Whether the current selection's `DELETE_CHARACTER_COMMAND` (the command both Backspace and
 * Delete fall through to) — and, by the same registration, `DELETE_WORD_COMMAND` and
 * `DELETE_LINE_COMMAND` — should be refused outright: a COLLAPSED caret sitting right at the
 * boundary the prefix occupies, where the command's own default handling
 * (`RangeSelection.deleteCharacter`) removes the adjacent DecoratorNode regardless of
 * `isKeyboardSelectable()` (`ImmutableTypedTextNode.ts`).
 *
 * `$getPreviousNode`/`$getNextNode` resolve a TEXT point's neighbor from its containing node's
 * sibling alone, ignoring the offset within it — meaningful only once the caret is actually AT
 * that text's boundary (offset 0 backward, or its own length forward). An ELEMENT point is
 * already offset-correct inside both helpers, so only the TEXT case needs the extra check.
 *
 * A NON-collapsed delete is a different failure mode: it removes every node the selection SPANS,
 * not only the two it is anchored on, so a range starting at an element point before the prefix
 * (e.g. `(book, 0)`) and ending in the content consumes the prefix along the way despite neither
 * endpoint resolving to it directly. Rather than refuse that outright — a silent no-op, against the
 * "a keystroke either changes the document or is visibly refused" rule
 * (docs/standard-view-invariants.md) — this narrows the selection past the prefix
 * ({@link $narrowSelectionPastBookPrefix}) and returns `false`, so the delete that follows removes
 * only the content the selection actually covers. Refusal is reserved for the one case narrowing
 * cannot fix: nothing left to delete once the prefix is excluded.
 *
 * Exported for direct unit testing, the same convention {@link $guardCursorAtParaStart} follows —
 * production callers reach it through {@link ParaMarkerPrefixCursorGuardPlugin}'s own registration.
 */
export function $shouldRefuseBookPrefixDeletion(isBackward: boolean): boolean {
  const selection = $getSelection();
  if (!$isRangeSelection(selection)) return false;
  if (selection.isCollapsed()) {
    const { anchor } = selection;
    if (anchor.type === "text") {
      const node = anchor.getNode();
      const atBoundary = isBackward
        ? anchor.offset === 0
        : $isTextNode(node) && anchor.offset === node.getTextContentSize();
      if (!atBoundary) return false;
    }
    const target = isBackward ? $getPreviousNode(selection) : $getNextNode(selection);
    return $isBookPrefixNode(target);
  }
  return $narrowSelectionPastBookPrefix(selection) && selection.isCollapsed();
}

/**
 * The `BookNode` enclosing `node` — its top-level ancestor, when that ancestor is a book — covering
 * a node nested inside the `\id` line's own character spans or notes, not only a direct child.
 */
function $getEnclosingBook(node: LexicalNode): BookNode | null {
  const top = node.getTopLevelElement();
  return $isBookNode(top) ? top : null;
}

/**
 * `DELETE_LINE_COMMAND`'s own fix for the case {@link $shouldRefuseBookPrefixDeletion} does not
 * catch: a COLLAPSED caret already past the boundary, mid-content, on the `\id` line. Lexical's own
 * `RangeSelection.deleteLine` extends the selection to the DOM's own visual line boundary before
 * removing it (`modify('extend', isBackward, 'lineboundary')`), and that extension steps the far
 * endpoint past an adjacent inline, non-isolated decorator
 * (`$modifySelectionAroundDecoratorsAndBlocks`'s trailing 'decorators' pass, run only for
 * `'lineboundary'`) — landing it AT or BEFORE the prefix whenever the visual line boundary sits
 * right past the glyph: the whole line for a short `\id` line, or a wrapped line's own start for a
 * long one. Left alone, the deletion that follows removes the prefix along with the content.
 *
 * Runs the same extension Lexical would, then clamps whichever endpoint moved onto or past the
 * prefix back to just past it, so the delete that follows only ever touches real content. Falls
 * back to Lexical's own collapsed-selection handling (`deleteCharacter`) when the extension finds
 * nothing to extend into, refusing instead if THAT would touch the prefix.
 *
 * `DELETE_WORD_COMMAND` needs no equivalent: `modify` with 'word' granularity never runs the
 * trailing 'decorators' pass (gated on `granularity === 'lineboundary'` alone), so a genuinely
 * mid-content collapsed caret cannot reach this stepping through it — only the boundary case
 * {@link $shouldRefuseBookPrefixDeletion} already refuses.
 *
 * @param isBackward - `true` for Cmd+Backspace, `false` for the forward line delete.
 */
function $clampLineDeletionPastBookPrefix(isBackward: boolean): boolean {
  const selection = $getSelection();
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return false;

  const book = $getEnclosingBook(selection.anchor.getNode());
  if (!book || !$isBookPrefixNode(book.getFirstChild())) return false;

  selection.modify("extend", isBackward, "lineboundary");

  if (selection.isCollapsed()) {
    // Nothing to extend into: fall back to exactly what Lexical's own deleteLine would have done,
    // refusing only if that fallback would itself remove the prefix.
    if ($shouldRefuseBookPrefixDeletion(isBackward)) return true;
    selection.deleteCharacter(isBackward);
    return true;
  }

  if (selection.getNodes().some($isBookPrefixNode)) {
    const target = $pointJustPastBookPrefix(book);
    selection.focus.set(target.key, target.offset, target.type);
  }
  if (!selection.isCollapsed()) selection.removeText();
  return true;
}

/**
 * Narrows the current selection past the book's own prefix ({@link $narrowSelectionPastBookPrefix})
 * before `CONTROLLED_TEXT_INSERTION_COMMAND`, `PASTE_COMMAND` or `CUT_COMMAND` runs — each of those
 * resolves to `RangeSelection.insertText()`/`removeText()` against whatever selection is current,
 * and a selection spanning the prefix loses it the same way an un-narrowed delete would. Always
 * returns `false`: this never claims the command, only corrects the selection those commands' own
 * handlers (registered lower) go on to read.
 */
function $narrowSelectionBeforeCommand(): boolean {
  const selection = $getSelection();
  if ($isRangeSelection(selection)) $narrowSelectionPastBookPrefix(selection);
  return false;
}

/**
 * Keeps the cursor out of the places a paragraph's structural prefix occupies but no caret may
 * rest in, correcting a click to the first content position in the same update cycle.
 *
 * WHICH marker is caret territory is decided one NODE at a time, never per view: a marker rendered
 * in the gutter is an aid to reading, so it is never a caret position, while a marker rendered as
 * editable text in the flow IS content the user clicks into on purpose. A document can carry both
 * at once, so the two questions this asks — "did the click land on a gutter marker?" and "does the
 * prefix at this paragraph's start host a caret at all?" — are asked of the nodes in the tree.
 *
 * Using `CLICK_COMMAND` instead of `registerUpdateListener` + `editor.update` ensures the
 * correction is committed in a single cycle — other listeners (e.g. `OnSelectionChangePlugin`)
 * see only the corrected cursor, never the intermediate prefix position.
 *
 * Also refuses `DELETE_CHARACTER_COMMAND` (the command both Backspace and Delete fall through to),
 * `DELETE_WORD_COMMAND` (Ctrl/Alt+Backspace) and `DELETE_LINE_COMMAND` (Cmd+Backspace) whenever a
 * COLLAPSED caret sitting right at the prefix's own boundary would remove it. A collapsed word/line
 * delete that finds nothing left to extend into falls back to `RangeSelection.deleteCharacter`, and
 * Lexical's default `deleteCharacter` removes an adjacent `DecoratorNode` outright regardless of
 * `isKeyboardSelectable()` (ImmutableTypedTextNode.ts) — so without refusing all three, any of
 * these keystrokes at the very start of the line's content deletes the `\id GEN ` glyph from the
 * screen while the file — which never stored the glyph as its own node — is left unchanged, until
 * the next reload silently brings it back.
 *
 * A COLLAPSED caret already past that boundary, mid-content, gets its own fix for
 * `DELETE_LINE_COMMAND` specifically ({@link $clampLineDeletionPastBookPrefix}): Cmd+Backspace
 * extends to the visual line boundary before deleting, which can step onto or past the prefix the
 * same way.
 *
 * A NON-collapsed selection spanning the prefix — Ctrl+A's selection normalizes to an anchor right
 * before it — is narrowed past it rather than refused, for `DELETE_CHARACTER_COMMAND`,
 * `DELETE_WORD_COMMAND`, `DELETE_LINE_COMMAND` (all three via
 * {@link $shouldRefuseBookPrefixDeletion}'s own non-collapsed branch), and — since typing over such
 * a selection or pasting/cutting it away is the same removal, just through
 * `RangeSelection.insertText()`/`removeText()` instead of a delete command —
 * `CONTROLLED_TEXT_INSERTION_COMMAND`, `PASTE_COMMAND` and `CUT_COMMAND` too, each narrowed by
 * {@link $narrowSelectionBeforeCommand} ahead of every other handler registered for them.
 */
export function ParaMarkerPrefixCursorGuardPlugin(): null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerCommand<MouseEvent>(
      CLICK_COMMAND,
      (event) => {
        $guardCursorOnClick(event);
        return false;
      },
      COMMAND_PRIORITY_EDITOR,
    );
  }, [editor]);

  useEffect(() => {
    return mergeRegister(
      editor.registerCommand<boolean>(
        DELETE_CHARACTER_COMMAND,
        $shouldRefuseBookPrefixDeletion,
        COMMAND_PRIORITY_HIGH,
      ),
      editor.registerCommand<boolean>(
        DELETE_WORD_COMMAND,
        $shouldRefuseBookPrefixDeletion,
        COMMAND_PRIORITY_HIGH,
      ),
      editor.registerCommand<boolean>(
        DELETE_LINE_COMMAND,
        $shouldRefuseBookPrefixDeletion,
        COMMAND_PRIORITY_HIGH,
      ),
      // Below the boundary refusal above (which still runs first and can refuse outright), and
      // above Lexical's own default DELETE_LINE_COMMAND handling (COMMAND_PRIORITY_EDITOR) — the
      // default is exactly what this replaces for a book line, so it must never run for one.
      editor.registerCommand<boolean>(
        DELETE_LINE_COMMAND,
        $clampLineDeletionPastBookPrefix,
        COMMAND_PRIORITY_NORMAL,
      ),
      // CRITICAL: other handlers for these commands (StructureKeyboardPlugin's CUT_COMMAND/
      // PASTE_COMMAND, OpaqueBlockGuardPlugin's CUT_COMMAND) are registered at HIGH or CRITICAL
      // too, so this must match the top priority to have any guarantee of running before them —
      // CRITICAL-tier order among plugins otherwise follows mount order, which this plugin does
      // not control. Always returns `false` (never claims the command), so running before or after
      // another CRITICAL handler that also returns `false` changes nothing either way; it only
      // matters relative to a handler that would itself remove the prefix.
      editor.registerCommand(
        CONTROLLED_TEXT_INSERTION_COMMAND,
        $narrowSelectionBeforeCommand,
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(
        PASTE_COMMAND,
        $narrowSelectionBeforeCommand,
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(CUT_COMMAND, $narrowSelectionBeforeCommand, COMMAND_PRIORITY_CRITICAL),
    );
  }, [editor]);

  return null;
}

/**
 * The whole click policy, in the order the two corrections must be tried: a click that landed ON a
 * gutter marker is answered from the click's target, because such a click leaves NO selection to
 * inspect; everything else is judged from where the selection came to rest.
 *
 * Exported so the registration above is the only thing a test has to duplicate.
 *
 * @param event - The click that Lexical dispatched through `CLICK_COMMAND`.
 */
export function $guardCursorOnClick(event: MouseEvent): void {
  if ($guardCursorAtGutterMarker(event.target)) return;

  const selection = $getSelection();
  if ($isRangeSelection(selection)) $guardCursorAtParaStart(selection);
}

/**
 * Advances the cursor past all structural prefix nodes at the start of `para`:
 * - Para-marker prefix (`MarkerNode` or `ImmutableTypedTextNode`) and its trailing NBSP.
 * - Leading verse nodes (`VerseNode` or `ImmutableVerseNode`).
 *
 * Places the cursor at the content boundary just past them, under the shared convention for what a
 * boundary's caret position is (`$placeCaretAtBoundary`): the start of the first content `TextNode`
 * that follows, or an element point at that boundary when no `TextNode` hosts it yet.
 *
 * Also called directly when programmatically navigating to a verse whose paragraph has a
 * non-text first child (e.g. in `ScriptureReferencePlugin`).
 *
 * Accepts a `BookNode` too: the `\id` line's own immutable `\id GEN ` prefix is the same shape as
 * a paragraph's marker prefix, just with no leading verse ever preceding it.
 */
export function $advancePastParaPrefixes(para: ParaLikeNode): boolean {
  let child: LexicalNode | null = para.getFirstChild();
  let skipCount = 0;

  while (child !== null) {
    if ($isSynthesizedMarkerNode(child)) {
      skipCount++;
      child = child.getNextSibling();
      // In editable mode the para-marker prefix is followed by a NBSP TextNode (marker-trailing-space).
      if ($isTextNode(child) && child.getTextContent() === NBSP) {
        skipCount++;
        child = child.getNextSibling();
      }
    } else if ($isSomeVerseNode(child)) {
      skipCount++;
      child = child.getNextSibling();
    } else {
      break;
    }
  }

  if (skipCount === 0) return false;

  $placeCaretAtBoundary(para, skipCount);
  return true;
}

/**
 * Corrects a click that landed ON a gutter marker glyph, moving the cursor to the next visible text
 * position — normally the first content text of the paragraph the glyph belongs to.
 *
 * Takes the click's DOM TARGET rather than the selection because a click on a gutter marker leaves
 * no selection at all to correct: the glyph is a decorator, which Lexical renders
 * `contenteditable="false"`, so the browser's caret lands inside a node Lexical cannot resolve to
 * any point in its tree and the editor's selection is left null. (Measured in Chrome: the DOM
 * selection anchors in the glyph's own text with a drawn caret, while `$getSelection()` is null.)
 *
 * Scoped to the GUTTER flavor by {@link $isGutterMarkerNode}, not to the node class: markerMode
 * "visible" renders the same class of node INLINE among the words, and where that glyph is part of
 * the text this rule has no opinion about it.
 *
 * @param target - The click's `event.target`.
 * @returns `true` if the cursor was moved, `false` if the click was not on a gutter marker.
 */
export function $guardCursorAtGutterMarker(target: EventTarget | null): boolean {
  if (!isDOMNode(target)) return false;

  const glyph = $getNearestNodeFromDOMNode(target);
  if (!$isGutterMarkerNode(glyph)) return false;

  const owner = glyph.getParent();
  if (!owner) return false;
  // A paragraph can carry further structure after its marker (a leading verse number), and its own
  // rule already knows how much of that to skip. Anywhere else a gutter marker appears — a book's
  // `\id` line, a table cell — the boundary just past the glyph is the next content position.
  if ($isSomeParaNode(owner)) return $advancePastParaPrefixes(owner);
  $placeCaretAtBoundary(owner, glyph.getIndexWithinParent() + 1);
  return true;
}

/**
 * Corrects the cursor when it lands at the very start of a paragraph, before a structural prefix
 * that renders no caret of its own: an immutable marker glyph (the gutter aid, or markerMode
 * "visible"'s inline glyph) or an `ImmutableVerseNode`. This happens when the user clicks in the
 * hanging-indent gutter of any marker that sets a negative `text-indent` (e.g. `\li`, `\li1`,
 * `\li2`, `\ili`, `\ili1`, `\ili2`, and poetry markers), which resolves to an element-typed anchor
 * at offset 0 of the `ParaNode`.
 *
 * The cursor is advanced past all structural prefix nodes (marker glyph, trailing NBSP, and leading
 * verse nodes) to the first content `TextNode`, or to the element offset just after all those
 * structural nodes when no content `TextNode` follows yet.
 *
 * An EDITABLE marker glyph (`MarkerNode`, markerMode "editable") is deliberately not corrected: it
 * is a `TextNode`, so it hosts a caret, and the user clicks into it on purpose to edit the marker.
 * Hauling that click to the content would both fight the intent and make a position the arrow keys
 * can reach unreachable by mouse. So the question this asks is about the NODE at the paragraph's
 * start — can it hold the caret? — never about which view is on screen.
 *
 * Also corrects a `BookNode`'s `\id` line the same way: its immutable `\id GEN ` prefix hosts no
 * caret either, and the line has no paragraph arm to fall back on.
 *
 * Returns `true` if the selection was corrected, `false` if no correction was needed.
 *
 * Exported only for direct unit testing; production callers reach it through
 * {@link $guardCursorOnClick}.
 */
export function $guardCursorAtParaStart(selection: RangeSelection): boolean {
  if (!selection.isCollapsed()) return false;

  const { anchor } = selection;
  if (anchor.type !== "element" || anchor.offset !== 0) return false;

  const para = $getNodeByKey(anchor.key);
  if (!$isParaLikeNode(para)) return false;
  const first = para.getFirstChild();
  if (!$isVisibleMarkerNode(first) && !$isImmutableVerseNode(first)) return false;
  return $advancePastParaPrefixes(para);
}
