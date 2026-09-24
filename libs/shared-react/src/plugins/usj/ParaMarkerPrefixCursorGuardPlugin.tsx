import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  $getNearestNodeFromDOMNode,
  $getNodeByKey,
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  CLICK_COMMAND,
  COMMAND_PRIORITY_EDITOR,
  COMMAND_PRIORITY_LOW,
  isDOMNode,
  LexicalEditor,
  LexicalNode,
  RangeSelection,
} from "lexical";
import { useEffect } from "react";
import {
  $getSelectableParaMarker,
  $getSelectedParaMarker,
  $isGutterMarkerNode,
  $isSomeParaNode,
  $isSynthesizedMarkerNode,
  $isVisibleMarkerNode,
  $placeCaretAtBoundary,
  $selectParaMarker,
  NBSP,
  SomeParaNode,
} from "shared";
import { $isImmutableVerseNode, $isSomeVerseNode } from "../../nodes/usj";
import { $canSelectParaMarker } from "./paraMarkerSelectionOwner";

/**
 * Keeps the cursor out of the places a paragraph's structural prefix occupies but no caret may
 * rest in, and turns a click on a paragraph's gutter marker into a selection of that marker.
 *
 * WHICH marker is caret territory is decided one NODE at a time, never per view. A marker glyph has
 * three states: a marker rendered as editable text in the flow IS content the user clicks into on
 * purpose; a marker rendered in the gutter is an aid to reading and never a caret position; and a
 * gutter marker whose parent is a paragraph is a selection target — clicking it selects the marker
 * itself (a `NodeSelection`, see `$getSelectedParaMarker` in shared), so the user can retag that
 * paragraph. A document can carry all three at once, so every question here is asked of the nodes
 * in the tree.
 *
 * Two registrations, because the two corrections need different places in the click chain — see
 * {@link registerParaMarkerPrefixCursorGuard}.
 */
export function ParaMarkerPrefixCursorGuardPlugin(): null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => registerParaMarkerPrefixCursorGuard(editor), [editor]);

  return null;
}

/**
 * Registers the click policy on `editor`. Exported so tests register exactly what the plugin does.
 *
 * - A click ON a gutter glyph is answered at `COMMAND_PRIORITY_LOW` by
 *   {@link $guardGutterMarkerClick}, which CLAIMS the click when it selected a paragraph marker.
 *   Rich-text clears every `NodeSelection` on `CLICK_COMMAND` at EDITOR priority; claiming first is
 *   what keeps the marker selected. LOW listeners registered earlier still run first — the
 *   marker-edit engine's click bookkeeping is one — and it never shares a document with a gutter
 *   glyph anyway (it runs only in editable marker mode, where no glyph is built in the gutter).
 * - Everything else is judged at EDITOR priority from where the selection came to rest
 *   ({@link $guardCursorOnClick}). Using `CLICK_COMMAND` instead of `registerUpdateListener` +
 *   `editor.update` commits the correction in the click's own update, so other listeners (e.g.
 *   `OnSelectionChangePlugin`) never see the intermediate prefix position.
 *
 * @param editor - The editor to guard.
 * @returns a function that unregisters both listeners.
 */
export function registerParaMarkerPrefixCursorGuard(editor: LexicalEditor): () => void {
  return mergeRegister(
    editor.registerCommand<MouseEvent>(
      CLICK_COMMAND,
      $guardGutterMarkerClick,
      COMMAND_PRIORITY_LOW,
    ),
    editor.registerCommand<MouseEvent>(
      CLICK_COMMAND,
      (event) => {
        $guardCursorOnClick(event);
        return false;
      },
      COMMAND_PRIORITY_EDITOR,
    ),
  );
}

/**
 * The LOW-priority half of the click policy: a click that landed ON a gutter marker glyph.
 *
 * Mutating: runs inside the click's update; registered by
 * {@link registerParaMarkerPrefixCursorGuard}.
 *
 * @param event - The click that Lexical dispatched through `CLICK_COMMAND`.
 * @returns `true` — claiming the click — only when it selected a paragraph's marker; a caret
 *   placed past a book or table glyph leaves the rest of the click chain to run as before.
 */
export function $guardGutterMarkerClick(event: MouseEvent): boolean {
  if (!$guardCursorAtGutterMarker(event.target)) return false;
  return $getSelectedParaMarker($getSelection()) !== undefined;
}

/**
 * The EDITOR-priority half of the click policy: everything that did not land on a gutter glyph,
 * judged from where the selection came to rest. A click ON a gutter glyph was already answered at
 * LOW by {@link $guardGutterMarkerClick} — either claimed (a paragraph's marker is now selected)
 * or corrected to a caret past the glyph — so it is left alone here.
 *
 * Mutating: runs inside the click's update; registered by
 * {@link registerParaMarkerPrefixCursorGuard}.
 *
 * @param event - The click that Lexical dispatched through `CLICK_COMMAND`.
 */
export function $guardCursorOnClick(event: MouseEvent): void {
  const target = event.target;
  if (isDOMNode(target) && $isGutterMarkerNode($getNearestNodeFromDOMNode(target))) return;

  const selection = $getSelection();
  if ($isRangeSelection(selection)) $guardCursorAtParaStart(selection);
}

/**
 * The boundary index of `para`'s first content position: how many structural prefix children
 * lead it — the para-marker prefix (`MarkerNode` or `ImmutableTypedTextNode`) with its trailing
 * NBSP, then any leading verse nodes (`VerseNode` or `ImmutableVerseNode`). `0` when nothing
 * leads the content.
 *
 * Read-only: safe in any read — `editor.getEditorState().read()`, an `editor.update()`, or a
 * command handler.
 *
 * @param para - The paragraph to measure.
 */
export function $paraContentStartIndex(para: SomeParaNode): number {
  let child: LexicalNode | null = para.getFirstChild();
  let index = 0;

  while (child !== null) {
    if ($isSynthesizedMarkerNode(child)) {
      index++;
      child = child.getNextSibling();
      // In editable mode the para-marker prefix is followed by a NBSP TextNode (marker-trailing-space).
      if ($isTextNode(child) && child.getTextContent() === NBSP) {
        index++;
        child = child.getNextSibling();
      }
    } else if ($isSomeVerseNode(child)) {
      index++;
      child = child.getNextSibling();
    } else {
      break;
    }
  }

  return index;
}

/**
 * Advances the cursor past all structural prefix nodes at the start of `para` (see
 * {@link $paraContentStartIndex}), placing it at the content boundary just past them under the
 * shared convention for a boundary's caret position (`$placeCaretAtBoundary`): the start of the
 * first content `TextNode` that follows, or an element point at that boundary when no `TextNode`
 * hosts it yet.
 *
 * Also called directly when programmatically navigating to a verse whose paragraph has a
 * non-text first child (e.g. in `ScriptureReferencePlugin`), and to leave a selected paragraph
 * marker for its content.
 *
 * Mutating: call inside `editor.update()`.
 *
 * @returns `false` (and moves nothing) when `para` has no structural prefix.
 */
export function $advancePastParaPrefixes(para: SomeParaNode): boolean {
  const index = $paraContentStartIndex(para);
  if (index === 0) return false;

  $placeCaretAtBoundary(para, index);
  return true;
}

/**
 * Answers a click that landed ON a gutter marker glyph. A paragraph's glyph is SELECTED (see
 * `$getSelectedParaMarker`, shared) — re-clicking the selected glyph keeps it selected. Any other
 * owner (a book's `\id` line, a table cell) moves the cursor to the boundary just past the glyph,
 * and so does a paragraph's glyph when the editor cannot select it (`$canSelectParaMarker`: it is
 * read-only, or no `ParaMarkerSelectionPlugin` protects the selection).
 *
 * Takes the click's DOM TARGET rather than the selection because a click on a gutter marker leaves
 * no selection to inspect: the glyph is a decorator, which Lexical renders `contenteditable="false"`,
 * so the browser's caret lands inside a node Lexical cannot resolve and the editor's selection is
 * left null. (Measured in Chrome: the DOM selection anchors in the glyph's own text with a drawn
 * caret, while `$getSelection()` is null.) `ParaMarkerSelectionPlugin` removes that stray caret.
 *
 * Scoped to the GUTTER flavor by {@link $isGutterMarkerNode}, not to the node class: markerMode
 * "visible" renders the same class of node INLINE among the words, and this rule has no opinion
 * about that glyph.
 *
 * Mutating: call inside `editor.update()` (the click's update, via {@link $guardGutterMarkerClick}).
 *
 * @param target - The click's `event.target`.
 * @returns `true` if the click was handled — a marker selected or the cursor moved — and `false`
 *   if it was not on a gutter marker.
 */
export function $guardCursorAtGutterMarker(target: EventTarget | null): boolean {
  if (!isDOMNode(target)) return false;

  const glyph = $getNearestNodeFromDOMNode(target);
  if (!$isGutterMarkerNode(glyph)) return false;

  const owner = glyph.getParent();
  if (!owner) return false;
  if ($getSelectableParaMarker(owner)?.is(glyph) && $canSelectParaMarker()) {
    $selectParaMarker(glyph);
    return true;
  }
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
  if (!$isSomeParaNode(para)) return false;
  const first = para.getFirstChild();
  if (!$isVisibleMarkerNode(first) && !$isImmutableVerseNode(first)) return false;
  return $advancePastParaPrefixes(para);
}
