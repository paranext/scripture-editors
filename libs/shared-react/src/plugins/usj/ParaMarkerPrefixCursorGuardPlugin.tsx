import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getNearestNodeFromDOMNode,
  $getNodeByKey,
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  CLICK_COMMAND,
  COMMAND_PRIORITY_EDITOR,
  COMMAND_PRIORITY_HIGH,
  DELETE_CHARACTER_COMMAND,
  isDOMNode,
  LexicalNode,
  RangeSelection,
} from "lexical";
import { useEffect } from "react";
import {
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
 * Whether the current selection's `DELETE_CHARACTER_COMMAND` (the command both Backspace and
 * Delete fall through to) would remove the book's own prefix glyph.
 *
 * `$getPreviousNode`/`$getNextNode` resolve a TEXT point's neighbor from its containing node's
 * sibling alone, ignoring the offset within it — meaningful only once the caret is actually AT
 * that text's boundary (offset 0 backward, or its own length forward). An ELEMENT point is
 * already offset-correct inside both helpers, so only the TEXT case needs the extra check.
 *
 * A non-collapsed delete removes every node the selection SPANS, not only the two it is anchored
 * on — a range starting at an element point before the prefix (e.g. `(book, 0)`) and ending in the
 * content consumes the prefix along the way despite neither endpoint resolving to it directly.
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
  return selection.getNodes().some($isBookPrefixNode);
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
 * Also refuses `DELETE_CHARACTER_COMMAND` (the command both Backspace and Delete fall through to)
 * whenever it would remove the book's own prefix glyph. Lexical's default `deleteCharacter`
 * removes an adjacent `DecoratorNode` outright regardless of `isKeyboardSelectable()`
 * (ImmutableTypedTextNode.ts), so without this a Backspace at the very start of the line's content
 * deletes the `\id GEN ` glyph from the screen while the file — which never stored the glyph as
 * its own node — is left unchanged, until the next reload silently brings it back.
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
    return editor.registerCommand<boolean>(
      DELETE_CHARACTER_COMMAND,
      $shouldRefuseBookPrefixDeletion,
      COMMAND_PRIORITY_HIGH,
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
