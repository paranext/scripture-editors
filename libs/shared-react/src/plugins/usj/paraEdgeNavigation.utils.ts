import { $isSomeVerseNode } from "../../nodes/usj";
import { $markLeadingVerseArrival } from "./LeadingVerseCaretGuardPlugin";
import { $placeCaretAfterParaChild } from "./structureKeyboard.utils";
import {
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  ElementNode,
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
 * paragraph the caret is in.
 */

/** Which way a press moves through the document, whatever the script direction. */
export type ParaEdgeDirection = "previous" | "next";

/**
 * The stop the current selection rests on at one paragraph's edge, or `undefined` when it rests
 * on none of them.
 */
export type ParaEdgeStop =
  | { stop: "marker"; para: ParaNode }
  | { stop: "beforeLeadingVerse"; para: ParaNode }
  | { stop: "contentStart"; para: ParaNode }
  | { stop: "end"; para: ElementNode };

/** The children of `para` that hold content or structure, ignoring a transient caret host. */
function $structuralChildren(para: ElementNode): LexicalNode[] {
  return para.getChildren().filter((child) => !$isCaretHost(child));
}

/** `para`'s first verse number, when it directly follows the marker glyph. */
function $leadingVerse(para: ParaNode): LexicalNode | undefined {
  const second = $structuralChildren(para)[1];
  return $isSomeVerseNode(second) ? second : undefined;
}

/**
 * The child that a collapsed caret sits right after, at `para`'s own level. `null` when the caret
 * sits at the start of `para`; `undefined` when the caret is not at a child boundary of `para`.
 * A caret in a transient caret host counts as sitting where the host is, and a caret at the very
 * start of a child (the first text of a `\wj` or `\nd` span, say) counts as sitting in front of it.
 */
function $childBeforeCaret(para: ElementNode): LexicalNode | null | undefined {
  const selection = $getSelection();
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return undefined;
  const { anchor } = selection;
  let node: LexicalNode = anchor.getNode();
  if (node.is(para)) {
    if (anchor.type !== "element") return undefined;
    const before = para.getChildAtIndex(anchor.offset - 1);
    return before && $isCaretHost(before) ? before.getPreviousSibling() : before;
  }
  const isAtNodeStart =
    $isCaretHost(node) || (($isTextNode(node) || anchor.type === "element") && anchor.offset === 0);
  if (!isAtNodeStart) return undefined;
  // Out of the spans the caret starts, to the child of `para` it is in front of.
  for (let parent = node.getParent(); !parent?.is(para); parent = node.getParent()) {
    if (!parent || node.getPreviousSibling()) return undefined;
    node = parent;
  }
  return node.getPreviousSibling();
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

  const anchorNode = selection.anchor.getNode();
  const para = $gutterParaOf(anchorNode);
  if (para) {
    const before = $childBeforeCaret(para);
    const glyph = para.getFirstChild();
    if (before !== undefined && before !== null) {
      const leadingVerse = $leadingVerse(para);
      if (leadingVerse && before.is(glyph)) return { stop: "beforeLeadingVerse", para };
      // Just past the leading verse number (or the glyph, with none): the first verse's text, even
      // when it is empty and another verse number follows at once.
      if (before.is(leadingVerse ?? glyph)) return { stop: "contentStart", para };
    }
  }

  const block = anchorNode.getTopLevelElement();
  if ($isParaLikeNode(block) && $isCaretAtEndOf(block)) return { stop: "end", para: block };
  return undefined;
}

/**
 * Whether `node` shows nothing a caret can reach past the end of a paragraph's text: a transient
 * caret host, or a collapsed note, whose content is hidden.
 */
function $isInvisibleTrailer(node: LexicalNode | null): boolean {
  return $isCaretHost(node) || ($isNoteNode(node) && node.getIsCollapsed() === true);
}

/** Whether `node` and every sibling after it are {@link $isInvisibleTrailer}, or there are none. */
function $isOnlyInvisibleFrom(node: LexicalNode | null): boolean {
  for (let current = node; current; current = current.getNextSibling())
    if (!$isInvisibleTrailer(current)) return false;
  return true;
}

/**
 * Whether a collapsed caret rests at the very end of `block`, counting a caret before a collapsed
 * note that ends the block as at its end: nothing a caret can reach is left between the two.
 */
function $isCaretAtEndOf(block: ElementNode): boolean {
  const selection = $getSelection();
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return false;
  const { anchor } = selection;
  let node: LexicalNode = anchor.getNode();
  if ($isElementNode(node)) {
    if (!$isOnlyInvisibleFrom(node.getChildAtIndex(anchor.offset))) return false;
  } else if (!$isCaretHost(node) && anchor.offset !== node.getTextContentSize()) return false;
  while (!node.is(block)) {
    if (!$isOnlyInvisibleFrom(node.getNextSibling())) return false;
    const parent = node.getParent();
    if (!parent) return false;
    node = parent;
  }
  return true;
}

/**
 * Collapses the caret at the end of `block`: past its last child, never inside it, so never in a
 * collapsed note's hidden content.
 */
function $placeCaretAtEndOf(block: ParaLikeNode): void {
  $placeCaretAfterParaChild(block, block.getLastChild());
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

/** Collapses the caret at the start of `para`'s first text, past its marker and leading verse. */
function $placeCaretAtContentStart(para: ParaNode): void {
  const before = $leadingVerse(para) ?? para.getFirstChildOrThrow();
  $placeCaretAtBoundary(para, before.getIndexWithinParent() + 1);
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
