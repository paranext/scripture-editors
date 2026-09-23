/**
 * Interrupting character-styled text at the caret: Ctrl+Space's unformatted space (PT9
 * `KeyPressEditHandler.HandleCtrlSpace` applies the blank character style) and the paragraph
 * split. Both are the same close-and-reopen of the open character-style stack (charStack.utils.ts
 * in `shared`) with a different thing placed in the gap.
 *
 * The marker menu's close-tag entries used to be a third: a structural split-and-unwrap at the
 * caret (`$closeCharSpanAtCaret`, with `$splitCharNodeAt` under it). Both are gone, owner-directed
 * — the structural close wrote no closing-marker bytes, so nothing it did reached the saved
 * document. A picked close-tag entry now lands the literal `\marker*` through `$commitTypedCloser`
 * (markerMenu/markerMenuApply.utils.ts), the same primitive the `*` key uses, and the marker-edit
 * engine re-tokenizes those bytes.
 */

import {
  $createTextNode,
  $getCharacterOffsets,
  $getSelection,
  $getState,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  LexicalNode,
  PointType,
  RangeSelection,
  TextNode,
} from "lexical";
import {
  $innermostCharAncestor,
  $isCharNode,
  $isMarkerNode,
  $isPointInMarkerGlyphText,
  $isSomeParaNode,
  $isTypedMarkNode,
  $liftOutOfCharStack,
  $selectCharContentStart,
  NBSP,
  SomeParaNode,
  textTypeState,
  TypedMarkNode,
} from "shared";

/**
 * The first plain-text content node at or after `node` in document order, descending into element
 * spans and skipping marker glyphs — "the next character the user can see", which is what PT9's
 * one-space-lookahead is asking about. Marker glyph text is presentation, so a reopened span's
 * `\nd` sits between the caret and the content without being a character ahead of it.
 *
 * Read-only: safe inside `editor.update()` or either read form.
 */
function $firstContentTextFrom(node: LexicalNode | null): TextNode | undefined {
  if (!node) return undefined;
  if ($isMarkerNode(node)) return undefined;
  if ($isTextNode(node)) return node;
  if (!$isElementNode(node)) return undefined;
  for (const child of node.getChildren()) {
    const found = $firstContentTextFrom(child);
    if (found) return found;
  }
  return undefined;
}

/**
 * Strips character formatting from the current selection — the Ctrl+Space apply (PT9
 * `KeyPressEditHandler.HandleCtrlSpace`'s blank character style).
 *
 * A range selection unwraps fully covered char spans and splits partially covered ones at the
 * selection boundary (an interior range yields PT9's three segments: left styled, middle plain,
 * right styled) and inserts no space at all. A collapsed caret inside character-styled text emits
 * a genuinely UNFORMATTED space: the whole open character-style stack closes innermost-to-outermost
 * before it and reopens outermost-to-innermost after it, so the space belongs to no span — PT9's
 * insert-and-clear-a-space behavior, which is `StyleApplicator` applying the blank style to one
 * space. Returns `false` only when there is no range selection.
 *
 * Mutating: call inside `editor.update()` (dispatched from `MarkerEditPlugin`'s KEY_DOWN
 * command handler).
 */
export function $removeCharFormattingFromSelection(): boolean {
  const selection = $getSelection();
  if (!$isRangeSelection(selection)) return false;

  if (selection.isCollapsed()) {
    const anchorNode = selection.anchor.getNode();
    const offset = selection.anchor.offset;
    const innermostChar =
      $isTextNode(anchorNode) && !$isMarkerNode(anchorNode)
        ? $innermostCharAncestor(anchorNode)
        : undefined;
    if (innermostChar && $isTextNode(anchorNode)) {
      // Place the space at the caret INSIDE the innermost span, then lift it out of the whole
      // stack: each level closes before it and reopens after it, so what lands in the container
      // is a space belonging to no character style. Splitting only the innermost span left the
      // "unformatted" space still carrying every outer marker.
      const space = $createTextNode(" ");
      if (offset <= 0) anchorNode.insertBefore(space);
      else if (offset >= anchorNode.getTextContentSize()) anchorNode.insertAfter(space);
      else {
        const [left] = anchorNode.splitText(offset);
        left.insertAfter(space);
      }
      $liftOutOfCharStack(space, { renderGlyphs: true, closeImplicitSpans: true });
      // PT9 (HandleCtrlSpace) inserts-and-clears exactly ONE space: when a space already sits
      // one character ahead it is REUSED as the unformatted separator rather than supplemented.
      // Looking forward only — a space BEHIND the caret is the previous word's, not this one's.
      const following = $firstContentTextFrom(space.getNextSibling());
      if (following) {
        const text = following.getTextContent();
        // The structural separator prefixes a reopened span's first text; the character ahead is
        // the one after it.
        const prefix = text.startsWith(NBSP) ? NBSP : "";
        const body = text.slice(prefix.length);
        if (body.startsWith(" ")) following.setTextContent(prefix + body.slice(1));
      }
      space.select(1, 1);
      return true;
    }
    // Outside any character style there is nothing to strip, so the key is a plain space —
    // reusing the next character when it is already one (the caret just moves past it).
    if ($isTextNode(anchorNode) && anchorNode.getTextContent()[offset] === " ") {
      anchorNode.select(offset + 1, offset + 1);
      return true;
    }
    selection.insertText(" ");
    return true;
  }

  // Range: unformat the covered text at EVERY level of the stack. Splitting the boundary text
  // nodes at the selection edges first leaves the covered text as whole nodes; lifting each out of
  // its entire enclosing stack then closes every level before it and reopens whatever of that
  // level still has content after it. A level the run covered completely is left with nothing and
  // is dropped, which is why clearing all of `\wj \+nd holy\+nd*\wj*` leaves a bare `holy` — both
  // spans are nothing without it — while a level that extends past the selection keeps its text on
  // both sides. An interior range still yields PT9's three segments (left styled, middle plain,
  // right styled); that is this same shape at depth one.
  for (const target of $coveredTextNodes(selection)) {
    if (!$innermostCharAncestor(target)) continue;
    $liftOutOfCharStack(target, { renderGlyphs: true, closeImplicitSpans: true });
    // Plain text now, so it sheds the structural separator it carried as a span's first content.
    // Shed on the LATEST instance: an earlier iteration's reopen may have prefixed the separator
    // onto this very node through a writable clone (a later covered node rides along in the
    // reopened span until its own turn), leaving `target` stale — and `setTextContent` compares
    // the new text against the STALE instance's own, so the shed would silently no-op exactly
    // when the pre-prefix text equals the post-shed text, leaving the separator byte in the file.
    const latest = target.getLatest();
    const text = latest.getTextContent();
    if (text.startsWith(NBSP)) latest.setTextContent(text.slice(NBSP.length));
  }
  // Always handled, even with nothing to strip. PT9 inserts no space on a range, so declining is
  // not "nothing happened" — it hands the keystroke to the browser, which types a literal space
  // OVER the selection and destroys it.
  return true;
}

/**
 * The text the selection covers, as whole nodes: each boundary node is split at the selection edge
 * so nothing partly-covered survives. Marker glyphs and display runs are excluded — they are
 * engine-owned presentation, not text the user selected.
 *
 * Shared with the non-NEST marker apply (`$applyNonNestAcrossNodes`,
 * adaptors/usj-marker-action.utils.ts), whose multi-node close-and-reopen is this same
 * split-then-lift shape with the new span wrapped around the lifted run.
 *
 * Mutating (splits the boundary text nodes): call inside `editor.update()`.
 */
export function $coveredTextNodes(selection: RangeSelection): TextNode[] {
  // Through Lexical's own `$getCharacterOffsets`, never raw `.offset`: an ELEMENT point's
  // offset is a CHILD INDEX (the shape `$placeCaretAtBoundary` produces whenever the boundary
  // child is not a TextNode), and using it as a character offset left the first `offset`
  // characters of the boundary node formatted — or, with the offsets crossed, skipped the node
  // entirely while the caller still claimed the keystroke as handled. The helper clamps an
  // element point to the real character extent.
  const [anchorOffset, focusOffset] = $getCharacterOffsets(selection);
  const [startOffset, endOffset] = selection.isBackward()
    ? [focusOffset, anchorOffset]
    : [anchorOffset, focusOffset];
  const nodes = selection.getNodes();
  const covered: TextNode[] = [];
  nodes.forEach((node, index) => {
    if (!$isTextNode(node) || $isMarkerNode(node)) return;
    if ($getState(node, textTypeState) === "attribute") return;
    const size = node.getTextContentSize();
    const start = index === 0 ? startOffset : 0;
    // The element-point clamp above is PARENT-scoped: a boundary at the end of a multi-child
    // parent resolves to the parent's total text length, which can exceed this node's own size.
    // Clamp to the node, or the `end === size` piece pick below reads "not at the node's end"
    // and returns the text BEFORE the selection instead of the covered piece.
    const end = index === nodes.length - 1 ? Math.min(endOffset, size) : size;
    if (start >= end) return;
    // splitText returns 1, 2, or 3 pieces depending on where the cuts land; the covered one is the
    // middle of three, the last of two when the range runs to the node's end, else the first.
    const parts = node.splitText(start, end);
    const piece = parts.length === 3 ? parts[1] : end === size ? parts[parts.length - 1] : parts[0];
    if (piece) covered.push(piece);
  });
  return covered;
}

/**
 * The paragraph a break at `node` would split: the first ancestor past every char span and
 * annotation mark wrapper (`TypedMarkNode`) enclosing `node`, in any interleaving, when that
 * ancestor is a paragraph. `undefined` otherwise — notably inside a NOTE, where the walk stops at
 * the NoteNode, because a break there is an `\fp`, not a paragraph split.
 *
 * Unlike `$charStackContainer`, it sees through mark wrappers: {@link $breakAndLiftCharStack}
 * splits them on the way out, so a wrapper between the stack and the paragraph does not stop the
 * split from reaching it.
 *
 * Read-only: safe inside `editor.update()` or either read form.
 */
function $charStackParagraph(node: LexicalNode): SomeParaNode | undefined {
  let parent = node.getParent();
  while ($isCharNode(parent) || $isTypedMarkNode(parent)) parent = parent.getParent();
  return $isSomeParaNode(parent) ? parent : undefined;
}

/**
 * Whether the selection sits inside a character-style stack that a PARAGRAPH split would tear —
 * the gate for routing an input that splits paragraphs through {@link $splitParagraphAtCharStack}
 * instead of the generic rich-text split.
 *
 * Read from the focus, the live end of the selection, so a range about to be replaced is judged by
 * where the replacement will land. The stack may be interleaved with annotation mark wrappers. A
 * stack inside a NOTE is excluded: a break there is an `\fp`, not a paragraph split.
 *
 * Read-only: safe inside `editor.update()` or either read form.
 */
export function $isSelectionInParagraphCharStack(): boolean {
  const selection = $getSelection();
  if (!$isRangeSelection(selection)) return false;
  const node = selection.focus.getNode();
  if (!$innermostCharAncestor(node)) return false;
  return !!$charStackParagraph(node);
}

/** What a break-and-lift left behind: where it came to rest, and what ended up after it. */
export interface CharStackBreak {
  /** The break point's resting parent after the lift — `null` only when no break point could be
   * created at all (a point with neither a text nor an element shape to cut). */
  parent: LexicalNode | null;
  /** The nodes originally after the break point, now siblings ready to move into a new container. */
  moving: LexicalNode[];
}

/**
 * Creates an empty break point at `point`, lifts it out of any open character-style stack
 * (`$liftOutOfCharStack` — each level closes before it and reopens after it) and out of any
 * annotation mark wrapper interleaved with that stack ({@link $liftOutOfTypedMark}), and reports
 * where it came to rest and what ended up after it — still attached, ready to move into whatever
 * new container the caller is building. `point` must already be normalized out of glyph text (see
 * `$normalizeSelectionOutOfGlyphText` in `shared`) — ANY text node it names, including a marker
 * glyph or an unmatched-closer glyph, is treated as an atomic leaf that only ever gets a sibling
 * inserted before or after it, never split through its own bytes.
 *
 * Shared by {@link $splitParagraphAtCharStack} and the `\id`-line split
 * (`$splitBookWithMarker`, markerMenu/markerMenuApply.utils.ts) — the two places PT9's
 * paragraph-marker split makes this same cut. The ELEMENT-point branch exists for the book split's
 * caller, which can arrive with a caret parked before/after a non-text child (or at a container's
 * end); the paragraph split always arrives with a TEXT point, so that branch never runs for it. The
 * reported resting `parent` is likewise only meaningful to the book split's caller, which — unlike
 * the paragraph split — cannot assume ahead of time that the lift reaches the container it wants.
 *
 * Mutating: call inside `editor.update()`.
 */
export function $breakAndLiftCharStack(point: PointType): CharStackBreak {
  const breakPoint = $createTextNode("");
  const node = point.getNode();
  const offset = point.offset;
  if ($isTextNode(node)) {
    if (offset <= 0) node.insertBefore(breakPoint);
    else if (offset >= node.getTextContentSize()) node.insertAfter(breakPoint);
    else {
      const [, tail] = node.splitText(offset) as [TextNode, TextNode];
      tail.insertBefore(breakPoint);
    }
  } else {
    // An ELEMENT point's offset is a CHILD INDEX, and a caret parked on a glyph belongs outside
    // it: both cut before the node the point names, or at the container's end when it names none.
    // A fresh, unnarrowed read: TypeScript's control-flow narrowing on `node` from the `if` above
    // (excluding `TextNode`) collapses the class hierarchy to `never` once `$isElementNode` narrows
    // it again below, even though a non-text, non-element node (a decorator) is a real case here.
    const elementOrLeaf: LexicalNode = point.getNode();
    const container = $isElementNode(elementOrLeaf) ? elementOrLeaf : elementOrLeaf.getParent();
    const nextNode = $isElementNode(elementOrLeaf)
      ? elementOrLeaf.getChildAtIndex(offset)
      : elementOrLeaf;
    if (nextNode) nextNode.insertBefore(breakPoint);
    else if (container) container.append(breakPoint);
    else return { parent: null, moving: [] };
  }
  for (let parent = breakPoint.getParent(); ; parent = breakPoint.getParent()) {
    if ($isCharNode(parent)) $liftOutOfCharStack(breakPoint, { renderGlyphs: true });
    else if (!$isTypedMarkNode(parent) || !$liftOutOfTypedMark(breakPoint, parent)) break;
  }
  const moving = breakPoint.getNextSiblings();
  const parent = breakPoint.getParent();
  breakPoint.remove();
  return { parent, moving };
}

/**
 * Lifts `node` out of the annotation mark wrapper `mark` to `mark`'s parent, splitting the wrapper
 * around it the way `RangeSelection.insertParagraph` splits one: the content after `node` moves
 * into the continuation `TypedMarkNode.insertNewAfter` builds, which carries the same typed ids, so
 * the annotation covers both halves. When `node` is at either edge of the wrapper it simply steps
 * out on that side, so no half is ever left empty — removing an emptied `TypedMarkNode` would
 * dispatch its "destroyed" remove callbacks, telling the host the annotation itself is gone.
 *
 * Returns `false`, mutating nothing, when there is no range selection to hand `insertNewAfter`.
 *
 * Mutating: call inside `editor.update()`.
 */
function $liftOutOfTypedMark(node: LexicalNode, mark: TypedMarkNode): boolean {
  const after = node.getNextSiblings();
  if (!node.getPreviousSibling()) {
    mark.insertBefore(node);
    return true;
  }
  if (after.length === 0) {
    mark.insertAfter(node);
    return true;
  }
  const selection = $getSelection();
  if (!$isRangeSelection(selection)) return false;
  const continuation = mark.insertNewAfter(selection, false);
  if (!continuation) return false;
  continuation.append(...after);
  mark.insertAfter(node);
  return true;
}

/**
 * Steps a collapsed selection off the trailing edge of a canonical closing glyph that ends its
 * whole immediate char span, landing it just after the span instead of leaving it parked on the
 * glyph itself. A caret there is genuinely PAST the span (see `$isPointInMarkerGlyphText`), not
 * inside it, so a split at that position must cut outside the span rather than treat the glyph as
 * its own break target. Deliberately only steps past ONE level: after a top-level span the caller's
 * own char-stack guard then declines (nothing left to lift), and after a NESTED closer the caret
 * lands in the outer span's content, where the close-and-reopen split proceeds from there.
 *
 * A no-op — returns `selection` unchanged — for any other caret position, including a caret already
 * past every glyph or one that is not on a canonical closer's trailing edge at all.
 *
 * Shared by {@link $splitParagraphAtCharStack} and the `\id`-line split (`$splitBookWithMarker`,
 * markerMenu/markerMenuApply.utils.ts) — the two places PT9's paragraph-marker split makes this
 * same cut.
 *
 * Returns `undefined` when stepping left no collapsed range selection at all (`selectNext` found no
 * position to land on) — the caller treats that the same as "nothing to split here".
 *
 * Mutating: call inside `editor.update()`.
 */
export function $stepCaretPastClosingGlyphSpan(
  selection: RangeSelection,
): RangeSelection | undefined {
  const anchorNode = selection.anchor.getNode();
  if (
    $isMarkerNode(anchorNode) &&
    !$isPointInMarkerGlyphText(anchorNode, selection.anchor.offset)
  ) {
    const enclosing = anchorNode.getParent();
    if ($isCharNode(enclosing) && anchorNode.is(enclosing.getLastChild())) {
      enclosing.selectNext(0, 0);
      const stepped = $getSelection();
      return $isRangeSelection(stepped) && stepped.isCollapsed() ? stepped : undefined;
    }
  }
  return selection;
}

/**
 * Splits the paragraph at a caret sitting inside character-styled text, closing the whole open
 * character-style stack on the left and reopening it in the new paragraph — the tail keeps its
 * markers, its attributes, and its nesting. Annotation mark wrappers (`TypedMarkNode`) interleaved
 * with the stack split along with it, keeping their ids on both halves. Returns `false` (mutating
 * nothing) when the caret is not inside a char span whose container is a paragraph, leaving the
 * generic split to run.
 *
 * Paratext 9 DROPS character styles across a paragraph split; reopening them is a deliberate
 * divergence. Lexical's generic inline split is not merely different, though — it is destructive:
 * `CharNode.insertNewAfter` builds a continuation with no opening glyph, no closing glyph, and no
 * attributes, so the deletion transform reads the continuation as opener-deleted and unwraps it,
 * and the left half loses its closer to the split and gets routed through a Tier-2 rebuild. At two
 * levels the unwrap cascade runs twice and both closers go.
 *
 * The break is made by parking an empty marker node at the caret, lifting it out of the stack
 * ({@link $breakAndLiftCharStack} — each char level closes before it and reopens after it), and
 * then moving everything past it into the new paragraph. The caret lands at the new paragraph's start, which
 * is where `$injectMarkerPrefix` expects it in order to place it on the content side of the marker
 * prefix the split transform is about to inject.
 *
 * Mutating: call inside `editor.update()` (dispatched from `MarkerEditPlugin`'s
 * INSERT_PARAGRAPH command handler, ahead of the generic rich-text split).
 */
export function $splitParagraphAtCharStack(): boolean {
  const rawSelection = $getSelection();
  if (!$isRangeSelection(rawSelection) || !rawSelection.isCollapsed()) return false;
  // A caret at the TRAILING EDGE of a canonical closing glyph is genuinely AFTER the span, so the
  // split belongs past the WHOLE enclosing char — never inside the glyph or the span. Step the
  // caret out of the span before deciding.
  const selection = $stepCaretPastClosingGlyphSpan(rawSelection);
  if (!selection) return false;
  const anchorNode = selection.anchor.getNode();
  if (!$isTextNode(anchorNode) || $isMarkerNode(anchorNode)) return false;
  if (!$innermostCharAncestor(anchorNode)) return false;
  // Only paragraph-contained stacks. Inside a note the walk stops at the NoteNode, and a break
  // there is an `\fp` (markerEditNote.utils.ts), never a paragraph split.
  const para = $charStackParagraph(anchorNode);
  if (!para) return false;

  const { moving } = $breakAndLiftCharStack(selection.anchor);
  const newPara = para.insertNewAfter(selection, false);
  newPara.append(...moving);
  // A reopened span may sit inside the continuation of an annotation mark wrapper the break split.
  let reopened: LexicalNode | undefined = moving[0];
  while ($isTypedMarkNode(reopened)) reopened = reopened.getFirstChild() ?? undefined;
  if ($isCharNode(reopened)) {
    // Typing continues the reopened style: the caret goes to the start of its content, past the
    // separator, exactly where the user interrupted the run. `$injectMarkerPrefix` leaves a caret
    // that is not at the paragraph's start alone, so the prefix splices in around it.
    $selectCharContentStart(reopened);
  } else {
    // Nothing reopened, so there is no run to continue. An ELEMENT point at offset 0 is the shape
    // `RangeSelection.insertParagraph` leaves behind, and the shape `$injectMarkerPrefix`
    // recognizes to move the caret to the content side once it splices the prefix in.
    newPara.select(0, 0);
  }
  return true;
}
