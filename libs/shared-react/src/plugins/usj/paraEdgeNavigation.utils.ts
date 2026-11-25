import { $isSomeVerseNode } from "../../nodes/usj";
import { $isPassedOverInGutterView } from "./gutterHiddenNodes.utils";
import { $markLeadingVerseArrival } from "./LeadingVerseCaretGuardPlugin";
import { $placeCaretAfterParaChild, $placeCaretAtEnd } from "./structureKeyboard.utils";
import {
  $addUpdateTag,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  ElementNode,
  HISTORY_MERGE_TAG,
  LexicalNode,
} from "lexical";
import {
  $canSelectParaMarker,
  $getSelectableParaMarker,
  $getSelectedParaMarkerPara,
  $isCaretHost,
  $isNoteNode,
  $isParaLikeNode,
  $isParaNode,
  $placeCaretAtBoundary,
  $selectParaMarker,
  CURSOR_CHANGE_TAG,
  ParaLikeNode,
  ParaNode,
} from "shared";

/**
 * Arrow-key stops at a paragraph's edges in the gutter view, where a paragraph's marker is a glyph
 * in the gutter and its first verse number leads its text.
 *
 * Walking backward from the start of a paragraph's text, a plain arrow stops:
 *
 * 1. **Before the leading verse number** — a caret between the marker and the number, where text
 *    and markers can be typed in front of the verse. `LeadingVerseCaretGuardPlugin` draws it.
 * 2. **On the marker** — the glyph selected whole, which stands for the whole paragraph.
 * 3. **At the end of the previous paragraph.**
 *
 * Walking forward from the end of a paragraph visits the same stops in the opposite order: the
 * next paragraph's marker, the caret before its leading verse number, then its text. A paragraph
 * with no leading verse number has no first stop. When markers are protected the marker stop is
 * skipped. Each stop is a single press; the browser's own movement would otherwise rest on an
 * invisible position in front of the glyph, where the box and the reference disagree about which
 * paragraph the caret is in. A caret that has come to rest there anyway (a range collapsed to the
 * paragraph's start) moves on from it as from the paragraph's first stop.
 *
 * What the view hides (a milestone, its marker glyphs and attribute text) takes no press: a stop
 * is judged past it.
 */

/** Which way a press moves through the document, whatever the script direction. */
export type ParaEdgeDirection = "previous" | "next";

/**
 * The stop the current selection rests on at one paragraph's edge, or `undefined` when it rests
 * on none of them.
 */
export type ParaEdgeStop =
  | { stop: "paraStart"; para: ParaNode }
  | { stop: "marker"; para: ParaNode }
  | { stop: "beforeLeadingVerse"; para: ParaNode }
  | { stop: "contentStart"; para: ParaNode }
  | { stop: "end"; para: ElementNode };

/** `node`, or the nearest sibling before it that is not {@link $isPassedOverInGutterView}; `"start"` if none. */
function $shownAtOrBefore(node: LexicalNode | null): LexicalNode | "start" {
  let current = node;
  while (current && $isPassedOverInGutterView(current)) current = current.getPreviousSibling();
  return current ?? "start";
}

/** `node`, or the nearest sibling after it that is not {@link $isPassedOverInGutterView}. */
function $shownAtOrAfter(node: LexicalNode | null): LexicalNode | undefined {
  let current = node;
  while (current && $isPassedOverInGutterView(current)) current = current.getNextSibling();
  return current ?? undefined;
}

/** `para`'s first verse number, when nothing the view shows comes between it and the glyph. */
function $leadingVerse(para: ParaNode): LexicalNode | undefined {
  const next = $shownAtOrAfter(para.getFirstChild()?.getNextSibling() ?? null);
  return $isSomeVerseNode(next) ? next : undefined;
}

/**
 * The child that a collapsed caret sits right after, at `para`'s own level, passing over what the
 * view hides. `"start"` when the caret sits at the start of `para`; `undefined` when the caret is
 * not at a child boundary of `para`. A caret in a transient caret host counts as sitting where the
 * host is, and a caret at the very start of a child (the first text of a `\wj` or `\nd` span, say)
 * counts as sitting in front of it, even with a node the view hides before it in the span. Never
 * out of a note: a caret in an expanded note's text is at none of `para`'s boundaries.
 */
function $childBeforeCaret(para: ElementNode): LexicalNode | "start" | undefined {
  const selection = $getSelection();
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return undefined;
  const { focus } = selection;
  let node: LexicalNode = focus.getNode();
  if (node.is(para)) {
    if (focus.type !== "element") return undefined;
    return $shownAtOrBefore(para.getChildAtIndex(focus.offset - 1));
  }
  const isAtNodeStart =
    $isCaretHost(node) || (($isTextNode(node) || focus.type === "element") && focus.offset === 0);
  if (!isAtNodeStart) return undefined;
  // Out of the spans the caret starts, to the child of `para` it is in front of.
  for (let parent = node.getParent(); !parent?.is(para); parent = node.getParent()) {
    if (!parent || $isNoteNode(parent)) return undefined;
    if ($shownAtOrBefore(node.getPreviousSibling()) !== "start") return undefined;
    node = parent;
  }
  return $shownAtOrBefore(node.getPreviousSibling());
}

/**
 * The gutter-view paragraph a caret or marker selection is in, whose edges these stops belong to:
 * a `ParaNode` led by a selectable gutter glyph.
 */
function $gutterParaOf(node: LexicalNode | null | undefined): ParaNode | undefined {
  let current: LexicalNode | null | undefined = node;
  while (current && !$isParaNode(current)) current = current.getParent();
  return $isParaNode(current) && $getSelectableParaMarker(current) ? current : undefined;
}

/**
 * The paragraph-edge stop the current selection rests on, if any.
 *
 * Read-only: safe in any read.
 */
export function $getParaEdgeStop(): ParaEdgeStop | undefined {
  const selection = $getSelection();
  const markerPara = $getSelectedParaMarkerPara(selection);
  if (markerPara && $getSelectableParaMarker(markerPara))
    return { stop: "marker", para: markerPara };
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return undefined;

  const caretNode = selection.focus.getNode();
  const para = $gutterParaOf(caretNode);
  if (para) {
    const before = $childBeforeCaret(para);
    const glyph = para.getFirstChild();
    // In front of the glyph: no stop of its own, so the next press moves on as from the first.
    if (before === "start") return { stop: "paraStart", para };
    if (before !== undefined) {
      const leadingVerse = $leadingVerse(para);
      if (leadingVerse && before.is(glyph)) return { stop: "beforeLeadingVerse", para };
      // Just past the leading verse number (or the glyph, with none): the first verse's text, even
      // when it is empty and another verse number follows at once.
      if (before.is(leadingVerse ?? glyph)) return { stop: "contentStart", para };
    }
  }

  const block = caretNode.getTopLevelElement();
  if ($isParaLikeNode(block) && $isCaretAtEndOf(block)) return { stop: "end", para: block };
  return undefined;
}

/**
 * Whether `node` shows nothing a caret can reach past the end of a paragraph's text: a transient
 * caret host, or a collapsed note, whose content is hidden.
 */
function $isInvisibleTrailer(node: LexicalNode | null): boolean {
  if (!node) return false;
  return $isPassedOverInGutterView(node) || ($isNoteNode(node) && node.getIsCollapsed() === true);
}

/** Whether `node` and every sibling after it are {@link $isInvisibleTrailer}, or there are none. */
function $isOnlyInvisibleFrom(node: LexicalNode | null): boolean {
  for (let current = node; current; current = current.getNextSibling())
    if (!$isInvisibleTrailer(current)) return false;
  return true;
}

/**
 * Whether a collapsed caret rests at the very end of `block`, counting a caret before a collapsed
 * note that ends the block as at its end: nothing a caret can reach is left between the two. A
 * caret in an expanded note's text is never at the block's end: the note's own end comes first.
 */
function $isCaretAtEndOf(block: ElementNode): boolean {
  const selection = $getSelection();
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return false;
  const { focus } = selection;
  let node: LexicalNode = focus.getNode();
  if ($isElementNode(node)) {
    if (!$isOnlyInvisibleFrom(node.getChildAtIndex(focus.offset))) return false;
  } else if (!$isCaretHost(node) && focus.offset !== node.getTextContentSize()) return false;
  while (!node.is(block)) {
    if (!$isOnlyInvisibleFrom(node.getNextSibling())) return false;
    const parent = node.getParent();
    if (!parent || $isNoteNode(parent)) return false;
    node = parent;
  }
  return true;
}

/**
 * Whether the caret steps into `node` rather than past it: an inline element such as a character
 * span, whose text is the paragraph's own. Never a note, whose content a collapsed note hides.
 */
function $isSteppedInto(node: LexicalNode | null | undefined): node is ElementNode {
  return $isElementNode(node) && node.isInline() && !$isNoteNode(node);
}

/**
 * Collapses the caret at the end of `block`, where walking to it would put it: at the end of its
 * last text, inside the character spans that end the block, so text typed there keeps their style.
 * Never inside a note, so never in a collapsed note's hidden content.
 */
function $placeCaretAtEndOf(block: ParaLikeNode): void {
  let container: ElementNode = block;
  let last = $lastShownChild(block);
  while ($isSteppedInto(last)) {
    container = last;
    last = $lastShownChild(last);
  }
  if (container.is(block)) $placeCaretAfterParaChild(block, last ?? null);
  else if ($isTextNode(last)) $placeCaretAtEnd(last);
  else {
    const boundary = last ? last.getIndexWithinParent() + 1 : 0;
    container.select(boundary, boundary);
  }
}

/** `element`'s last child that is not {@link $isPassedOverInGutterView}, if any. */
function $lastShownChild(element: ElementNode): LexicalNode | undefined {
  const last = $shownAtOrBefore(element.getLastChild());
  return last === "start" ? undefined : last;
}

/** The sibling of `node` one step in `direction`. */
function $siblingToward(node: LexicalNode, direction: ParaEdgeDirection): LexicalNode | null {
  return direction === "previous" ? node.getPreviousSibling() : node.getNextSibling();
}

/**
 * The nearest paragraph-like block before or after `block`, stepping over whatever between them
 * the gutter view shows no paragraph for: a chapter number, and a sidebar (`\esb`) or other
 * `UnknownNode` the view hides, whose paragraphs a caret must never be put in.
 */
function $adjacentBlock(
  block: ElementNode,
  direction: ParaEdgeDirection,
): ParaLikeNode | undefined {
  for (
    let sibling = $siblingToward(block, direction);
    sibling;
    sibling = $siblingToward(sibling, direction)
  ) {
    if ($isParaLikeNode(sibling)) return sibling;
  }
  return undefined;
}

/** Whether the marker stop is offered: markers can be selected and are not protected. */
function $canStopOnMarker(isProtected: boolean): boolean {
  return !isProtected && $canSelectParaMarker();
}

/** Collapses the caret before `para`'s leading verse number. */
function $placeCaretBeforeLeadingVerse(para: ParaNode): void {
  const leadingVerse = $leadingVerse(para);
  if (!leadingVerse) return;
  const index = leadingVerse.getIndexWithinParent();
  $markLeadingVerseArrival(para);
  para.select(index, index);
}

/**
 * Collapses the caret at the start of `para`'s first text, past its marker and leading verse, and
 * inside the character spans that start it, where a click on that text puts it.
 */
function $placeCaretAtContentStart(para: ParaNode): void {
  const before = $leadingVerse(para) ?? para.getFirstChildOrThrow();
  let container: ElementNode = para;
  let first = $shownAtOrAfter(before.getNextSibling());
  while ($isSteppedInto(first)) {
    container = first;
    first = $shownAtOrAfter(first.getFirstChild());
  }
  const fallback = container.is(para) ? before.getIndexWithinParent() + 1 : 0;
  // Before a note that opens the text there is no text to put the caret in, so the guard hosts it.
  if (container.is(para) && !$isTextNode(first)) $markLeadingVerseArrival(para);
  $placeCaretAtBoundary(container, first ? first.getIndexWithinParent() : fallback);
}

/**
 * Moves the selection one paragraph-edge stop in `direction`, when it rests on one and a plain
 * arrow press there should land on the next. Leaves every other press to the browser and the
 * other arrow handlers.
 *
 * Mutating: call inside `editor.update()` (a command handler already runs inside one).
 *
 * @param direction - Which way the press moves through the document.
 * @param isProtected - Whether paragraph markers are protected, which removes the marker stop.
 * @returns `true` if the press was handled (the selection may be unchanged at a document edge).
 */
export function $moveParaEdgeStop(direction: ParaEdgeDirection, isProtected: boolean): boolean {
  const at = $getParaEdgeStop();
  if (!at) return false;
  const canStopOnMarker = $canStopOnMarker(isProtected);

  if (direction === "previous") {
    switch (at.stop) {
      case "contentStart":
        if ($leadingVerse(at.para)) {
          $placeCaretBeforeLeadingVerse(at.para);
          return true;
        }
        return $leaveBackward(at.para, canStopOnMarker);
      case "beforeLeadingVerse":
      case "paraStart":
        return $leaveBackward(at.para, canStopOnMarker);
      case "marker": {
        const previous = $adjacentBlock(at.para, "previous");
        if (previous) $placeCaretAtEndOf(previous);
        return true;
      }
      case "end":
        return false;
    }
  }

  switch (at.stop) {
    case "end": {
      const next = $adjacentBlock(at.para, "next");
      if (!next || !$isParaNode(next) || !$getSelectableParaMarker(next)) return false;
      return $enterForward(next, canStopOnMarker);
    }
    case "marker":
    case "paraStart":
      if ($leadingVerse(at.para)) $placeCaretBeforeLeadingVerse(at.para);
      else $placeCaretAtContentStart(at.para);
      return true;
    case "beforeLeadingVerse":
      $placeCaretAtContentStart(at.para);
      return true;
    case "contentStart": {
      // An empty paragraph's text starts where it ends: the press goes on to the next one.
      if (!$isCaretAtEndOf(at.para)) return false;
      const next = $adjacentBlock(at.para, "next");
      if (!next || !$isParaNode(next) || !$getSelectableParaMarker(next)) return false;
      return $enterForward(next, canStopOnMarker);
    }
  }
}

/** The press backward out of `para`'s first caret stop: onto its marker, or past it. */
function $leaveBackward(para: ParaNode, canStopOnMarker: boolean): boolean {
  const glyph = $getSelectableParaMarker(para);
  if (canStopOnMarker && glyph && $selectParaMarker(glyph)) return true;
  // The previous paragraph's end, or nowhere at the document's start: never the invisible
  // position in front of the glyph.
  const previous = $adjacentBlock(para, "previous");
  if (previous) $placeCaretAtEndOf(previous);
  return true;
}

/** The press forward into `para` from the end of the paragraph before it. */
function $enterForward(para: ParaNode, canStopOnMarker: boolean): boolean {
  const glyph = $getSelectableParaMarker(para);
  if (canStopOnMarker && glyph && $selectParaMarker(glyph)) return true;
  if ($leadingVerse(para)) $placeCaretBeforeLeadingVerse(para);
  else $placeCaretAtContentStart(para);
  return true;
}

/**
 * A Shift+arrow backward from the caret before a leading verse number: extends the selection from
 * there to the previous paragraph's end, where the plain arrow's last stop is. Left to the browser,
 * the range leaves the caret's host, which removes the host and collapses the selection back.
 *
 * Mutating: call inside `editor.update()` (a command handler already runs inside one).
 *
 * @returns `true` if the selection was extended.
 */
export function $extendBackwardFromLeadingVerseStop(): boolean {
  const at = $getParaEdgeStop();
  if (at?.stop !== "beforeLeadingVerse") return false;
  const leadingVerse = $leadingVerse(at.para);
  const previous = $adjacentBlock(at.para, "previous");
  if (!leadingVerse || !previous) return false;
  const selection = $getSelection();
  const host = $isRangeSelection(selection) ? selection.focus.getNode() : undefined;
  if (host && $isCaretHost(host)) {
    host.remove();
    // Removing a host is no edit, as everywhere else one is removed.
    $addUpdateTag(CURSOR_CHANGE_TAG);
    $addUpdateTag(HISTORY_MERGE_TAG);
  }
  $placeCaretAtEndOf(previous);
  const range = $getSelection();
  if (!$isRangeSelection(range)) return false;
  const boundary = leadingVerse.getIndexWithinParent();
  range.anchor.set(at.para.getKey(), boundary, "element");
  return true;
}
