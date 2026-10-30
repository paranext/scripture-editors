/**
 * Marker-menu context — builds a `MarkerMenuContext` snapshot from the live
 * Lexical selection. Port of PT9's `MarkerDropdownEditHandler.HandleBackslash` selection-shape
 * rule (`MarkerDropdownEditHandler.cs:96-139`): a non-collapsed selection is always character
 * source (`:130-137`); a collapsed caret is paragraph source only ON the paragraph's own marker
 * prefix — inside the glyph, at its edges, or directly right of it before the separator space
 * ({@link $isAtParagraphMarkerPrefix}) — otherwise character source. Directly AFTER the
 * separator, where content starts, `\` is a character action (owner-directed boundary; the
 * original port counted content start as paragraph source, which put the paragraph palette
 * where the user is about to type content). The `\id` line is the one block with no paragraph
 * arm at all: its prefix is immutable, so every caret in it is a content position and a collapsed
 * caret there is character source too.
 *
 * Called from `EditorRef.getMarkerMenuContext` (`Editor.tsx`) via
 * `editorRef.current?.getEditorState().read(...)` rather than `editor.read(...)` - the latter
 * force-flushes any in-flight update mid-dispatch, the hazard class fixed for
 * `OnSelectionChangePlugin`.
 */
import { MarkerMenuContext } from "./markerItemSource";
import { $canInsertChapterAtSelection } from "../markerEdit/firstChapter.utils";
import { $getParaTagMarker } from "../markerEdit/markerValidation.utils";
import { $findMatchingParent } from "@lexical/utils";
import {
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  BaseSelection,
  LexicalEditor,
  LexicalNode,
} from "lexical";
import {
  $findFirstAncestorNoteNode,
  $getSelectedParaMarker,
  $isBookNode,
  $isCharNode,
  $isMarkerTrailingSeparator,
  $isParaNode,
  $isPointInMarkerGlyphText,
  $isSomeChapterNode,
  $isSynthesizedMarkerNode,
  ParaNode,
  SomeParaNode,
} from "shared";
import { $getParaMarkerSelectionLocationNode } from "shared-react";

/**
 * `MarkerMenuContext` plus the caret's viewport rect for palette anchoring. `undefined` in
 * headless tests (jsdom's `Range` has no `getBoundingClientRect`) and whenever there is no
 * live DOM selection to read one from.
 *
 * Not re-exported from the package barrel (internal implementation detail, like
 * `markerEditDeletion.utils.ts`'s `$createMarkerPrefix`) - `EditorRef.getMarkerMenuContext`
 * spells the equivalent intersection type inline (`editor.model.ts`) since that IS public API.
 */
export type MarkerMenuContextSnapshot = MarkerMenuContext & {
  anchorRect?: { x: number; y: number; width: number; height: number };
};

/** `CharNode` ancestors of `node` (inclusive), innermost first. */
function $collectOpenCharMarkers(node: LexicalNode): string[] {
  const markers: string[] = [];
  let current: LexicalNode | null = node;
  while (current) {
    if ($isCharNode(current)) markers.push(current.getMarker());
    current = current.getParent();
  }
  return markers;
}

/**
 * Root's block-level children before the top-level element containing `node`, in document
 * order: the paragraph tag each opens, read by `$getParaTagMarker` — the same helper the
 * validation walk uses — so a decorator `ImmutableChapterNode` contributes its `\c` just like the
 * mutable variant.
 *
 * A `node` on a chapter line counts that chapter too: a paragraph applied there starts after the
 * chapter line (see `chapterLine.utils.ts`), so it is the chapter that precedes it.
 */
function $collectPreviousParaMarkers(node: LexicalNode): string[] {
  const topLevel = node.getTopLevelElement();
  const markers: string[] = [];
  for (const child of $getRoot().getChildren()) {
    const marker = $getParaTagMarker(child);
    if (topLevel && child.is(topLevel)) {
      // A paragraph's own marker isn't "before itself", so the general break below is right for
      // it — but the `\id` line's caret has the BookNode as its own top-level element, and the
      // book's marker still belongs in the stack the caret's own block validates against
      // (mirroring `$validateDocument`, which always joins the book's tag into an empty stack
      // before checking what follows it). Otherwise a caret in the line reports an empty stack,
      // and the Enter palette offers every paragraph marker, including ones invalid straight
      // after `\id`.
      if ($isBookNode(child) || $isSomeChapterNode(child)) markers.push(child.getMarker());
      break;
    }
    if (marker !== undefined) markers.push(marker);
  }
  return markers;
}

/** First leaf of `node`: descend through first children of element nodes (the node itself
 * when it is already a leaf or an empty element). */
function $getFirstLeaf(node: LexicalNode): LexicalNode {
  let current = node;
  while ($isElementNode(current)) {
    const child: LexicalNode | null = current.getFirstChild();
    if (!child) break;
    current = child;
  }
  return current;
}

/**
 * True when `anchorNode`/`offset` sits at `para`'s CONTENT start: inside the marker prefix /
 * its trailing-space NBSP, or at offset 0 of the first LEAF of the first content child
 * (`MarkerDropdownEditHandler.cs:107-116` — PT9's probe is a flat character-position check,
 * blind to markup nesting, so ours must see through wrappers too).
 *
 * The leaf descent matters when the paragraph's visible content begins inside a char span —
 * e.g. `\p \wj Then Jesus said…\wj*`, an ordinary red-letter Gospel shape: Lexical anchors
 * the caret on the span's inner leaf, never on the span element itself. In editable mode a
 * CharNode's first leaf is its opener MarkerNode glyph — a caret at offset 0 of that glyph
 * IS the visible content start.
 *
 * Exported for `markerMenuApply.utils.ts`'s paragraph-kind retag-vs-split routing, which is
 * this probe's ONLY consumer now: a paragraph pick (from the Enter menu or any explicit flow)
 * still RETAGS at content start rather than splitting. The `\` palette's SOURCE no longer uses
 * it — the menu boundary is the deliberately narrower {@link $isAtParagraphMarkerPrefix}
 * (after-the-separator caret offers characters), and the two probes are split so changing the
 * menu boundary could not silently change how a pick applies.
 *
 * A line with no marker has no prefix, so its content starts at its first leaf, or at the line
 * itself when it is blank.
 */
export function $isAtParagraphContentStart(
  para: SomeParaNode,
  anchorNode: LexicalNode,
  offset: number,
): boolean {
  const firstChild = para.getFirstChild();
  if (!firstChild) return anchorNode.is(para) && offset === 0;

  let contentStart: LexicalNode | null = firstChild;
  if ($isSynthesizedMarkerNode(firstChild)) {
    if (anchorNode.is(firstChild)) return true;
    contentStart = firstChild.getNextSibling();
    if (contentStart && $isMarkerTrailingSeparator(contentStart)) {
      if (anchorNode.is(contentStart)) return true;
      contentStart = contentStart.getNextSibling();
    }
  }
  if (!contentStart) return false;
  return anchorNode.is($getFirstLeaf(contentStart)) && offset === 0;
}

/**
 * True when the collapsed caret sits ON `para`'s own marker prefix: inside the synthesized
 * glyph's text (its edges included), or directly right of the glyph BEFORE the separator space
 * (the separator node's offset 0). This is the `\` palette's SOURCE boundary: the paragraph
 * palette — whose pick retags the paragraph — belongs to the marker glyph itself, while the
 * caret directly AFTER the separator is where content starts, so `\` there offers the inline
 * (character) palette like any other content position.
 *
 * Deliberately narrower than {@link $isAtParagraphContentStart}: that probe also counts the
 * after-the-separator content start (and the first content leaf's offset 0), and it keeps that
 * wider boundary for its one remaining job — routing a paragraph PICK to retag-vs-split in
 * `markerMenuApply.utils.ts`. Menu SOURCE and apply ROUTING are separate probes on purpose.
 */
function $isAtParagraphMarkerPrefix(
  para: ParaNode,
  anchorNode: LexicalNode,
  offset: number,
): boolean {
  const firstChild = para.getFirstChild();
  if (!firstChild || !$isSynthesizedMarkerNode(firstChild)) return false;
  if (anchorNode.is(firstChild)) return true;
  const separator = firstChild.getNextSibling();
  return (
    separator !== null &&
    $isMarkerTrailingSeparator(separator) &&
    anchorNode.is(separator) &&
    offset === 0
  );
}

/** iframe-relative viewport coords of the live DOM selection, or `undefined` if unavailable. */
function getAnchorRect(): MarkerMenuContextSnapshot["anchorRect"] {
  if (typeof window === "undefined" || typeof window.getSelection !== "function") return undefined;
  const domSelection = window.getSelection();
  if (!domSelection || domSelection.rangeCount === 0) return undefined;

  const range = domSelection.getRangeAt(0);
  if (typeof range.getBoundingClientRect !== "function") return undefined;

  const { x, y, width, height } = range.getBoundingClientRect();
  return { x, y, width, height };
}

/**
 * Where the marker menu reads the selection from: its FOCUS point, "the node the caret is in" —
 * the live cursor end, correct even for a backward range selection. (Reading the anchor put half
 * of all drags on the wrong end: dragging leftward out of a `\nd` span still offered its close-tag
 * for a cursor that had left the span.) A selected paragraph marker is a caret at its paragraph's
 * content start.
 */
function $getMenuFocus(
  selection: BaseSelection | null,
): { node: LexicalNode; offset: number; hasTextSelection: boolean } | undefined {
  const markerLocation = $getParaMarkerSelectionLocationNode(selection);
  if (markerLocation) return { node: markerLocation, offset: 0, hasTextSelection: false };
  if (!$isRangeSelection(selection)) return undefined;
  const { focus } = selection;
  return {
    node: focus.getNode(),
    offset: focus.offset,
    hasTextSelection: !selection.isCollapsed(),
  };
}

/**
 * Builds a `MarkerMenuContext` snapshot from the current selection. Call inside
 * `editor.getEditorState().read(...)` — NOT `editor.read(...)`, which force-flushes an in-flight
 * update when dispatched mid-update (see the module doc above; this hazard class caused real
 * frozen-state crashes, fixed for `OnSelectionChangePlugin`). A selected paragraph marker reads as
 * a caret at its paragraph's content start, where `applyMarkerMenuSelection` acts. Returns
 * `undefined` for any other non-range selection (another `NodeSelection`, or none at all).
 *
 * @param editor - The editor being read, to anchor at a selected paragraph marker's glyph; without
 *   it, a marker selection reports no `anchorRect`.
 * @param chapterNum - The chapter the document is, which decides `canInsertChapter`; without it,
 *   no chapter can be inserted.
 */
export function $getMarkerMenuContext(
  editor?: LexicalEditor,
  chapterNum?: number,
): MarkerMenuContextSnapshot | undefined {
  const selection = $getSelection();
  const focus = $getMenuFocus(selection);
  if (!focus) return undefined;
  const { node: focusNode, offset, hasTextSelection } = focus;

  const para = $findMatchingParent(focusNode, $isParaNode);
  // The `\id` line is a BookNode at document root, not a `ParaNode`, but its text is CONTENT like
  // any paragraph's — PT9 offers the inline palette there (character styles valid under `id`, plus
  // every note style, which is why a footnote is offered in the `\id` line). Its marker prefix is
  // one immutable `\id GEN ` decorator with no interior caret position, so every caret in the line
  // is a content position and none is ever "on the marker glyph": the book takes no
  // {@link $isAtParagraphMarkerPrefix} probe, it is unconditionally character source. The paragraph
  // list is still reachable there through the Enter trigger, whose pick inserts a paragraph after
  // the line (`$splitParagraphWithMarker`'s book arm, markerMenuApply.utils.ts).
  const book = para ? undefined : $findMatchingParent(focusNode, $isBookNode);
  // A collapsed caret with NO block owner around it at all is the remaining header region. There is
  // no block there to take a character style, so the paragraph list is what it can actually accept.
  // A text selection stays character source wherever it sits: wrapping is a character action.
  const source: MarkerMenuContext["source"] =
    !hasTextSelection && !book && (!para || $isAtParagraphMarkerPrefix(para, focusNode, offset))
      ? "paragraph"
      : "character";

  const note = $findFirstAncestorNoteNode(focusNode);

  return {
    source,
    // The book reports `id` as its own block marker: PT9's character source filters on the
    // enclosing paragraph's marker (`occursUnder` empty or containing it), and without one it
    // returns an empty list that falls back to the paragraph palette.
    paraMarker: para?.getMarker() ?? book?.getMarker(),
    previousParaMarkers: $collectPreviousParaMarkers(focusNode),
    openCharMarkers: $collectOpenCharMarkers(focusNode),
    noteMarker: note?.getMarker(),
    hasTextSelection,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: $isPointInMarkerGlyphText(focusNode, offset),
    canInsertChapter: $canInsertChapterAtSelection(chapterNum),
    anchorRect: getGlyphRect(editor, $getSelectedParaMarker(selection)) ?? getAnchorRect(),
  };
}

/**
 * Where a selected paragraph marker's glyph is on screen. The browser holds no range while one is
 * selected (`ParaMarkerSelectionPlugin` removes it), so a palette anchors at the glyph instead.
 */
function getGlyphRect(
  editor: LexicalEditor | undefined,
  glyph: LexicalNode | undefined,
): MarkerMenuContextSnapshot["anchorRect"] {
  const element = glyph && editor?.getElementByKey(glyph.getKey());
  if (!element) return undefined;
  const { x, y, width, height } = element.getBoundingClientRect();
  return { x, y, width, height };
}
