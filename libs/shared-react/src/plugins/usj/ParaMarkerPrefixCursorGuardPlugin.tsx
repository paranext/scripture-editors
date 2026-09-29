import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  $getEditor,
  $getNearestNodeFromDOMNode,
  $getNodeByKey,
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  BaseSelection,
  CLICK_COMMAND,
  COMMAND_PRIORITY_EDITOR,
  COMMAND_PRIORITY_LOW,
  createCommand,
  isDOMNode,
  LexicalCommand,
  LexicalEditor,
  LexicalNode,
  RangeSelection,
} from "lexical";
import { useEffect } from "react";
import {
  $getSelectedParaMarkerPara,
  $isGutterMarkerNode,
  $isSomeParaNode,
  $isSynthesizedMarkerNode,
  $isVisibleMarkerNode,
  $placeCaretAtBoundary,
  NBSP,
  SomeParaNode,
} from "shared";
import { $isImmutableVerseNode, $isSomeVerseNode } from "../../nodes/usj";

/**
 * Keeps the cursor out of the places a paragraph's structural prefix occupies but no caret may
 * rest in. WHICH marker is caret territory is decided one node at a time, never per view — see
 * `gutterMarkerState` (shared). A click that selects a paragraph's gutter marker never reaches this
 * plugin: `ParaMarkerSelectionPlugin` claims it first. See
 * {@link registerParaMarkerPrefixCursorGuard} for the click policy.
 */
export function ParaMarkerPrefixCursorGuardPlugin(): null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => registerParaMarkerPrefixCursorGuard(editor), [editor]);

  return null;
}

/**
 * Registers the click policy on `editor`. Exported so tests register exactly what the plugin does.
 *
 * A click ON a gutter glyph is answered at LOW, ahead of rich-text's EDITOR-priority handler, which
 * would otherwise clear a selected marker and claim the click before the caret moves. Every other
 * click is judged at EDITOR priority, from where the selection came to rest. Both correct the
 * caret inside the click's own update, so other listeners (e.g. `OnSelectionChangePlugin`) never
 * see the intermediate prefix position.
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
 * The LOW-priority half of the click policy, for a click ON a gutter glyph. Mutating: runs inside
 * the click's update.
 *
 * @returns always `false`, so the rest of the click chain runs as before.
 */
function $guardGutterMarkerClick(event: MouseEvent): boolean {
  $guardCursorAtGutterMarker(event.target);
  return false;
}

/**
 * The EDITOR-priority half of the click policy, for every click not on a gutter glyph. Mutating:
 * runs inside the click's update.
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
 * marker for its content (`$collapseParaMarkerSelection`).
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
 * Collapses the caret to `para`'s first content position ({@link $advancePastParaPrefixes}), or to
 * its start when nothing leads its content.
 *
 * Mutating: call inside `editor.update()`.
 */
export function $placeCaretAtParaContentStart(para: SomeParaNode): void {
  if (!$advancePastParaPrefixes(para)) para.selectStart();
}

/**
 * Answers a click that landed ON a gutter marker glyph, which is never a caret position: the
 * cursor moves to the first place past it that is one — past a paragraph's whole structural prefix
 * (its glyph and any leading verse, see {@link $advancePastParaPrefixes}), or just past the glyph
 * for any other owner (a book's `\id` line, a table cell).
 *
 * Takes the click's DOM TARGET rather than the selection because a click on a gutter marker leaves
 * no selection to inspect: the glyph is a decorator, which Lexical renders `contenteditable="false"`,
 * so the browser's caret lands inside a node Lexical cannot resolve and the editor's selection is
 * left null.
 *
 * Scoped to the GUTTER flavor by {@link $isGutterMarkerNode}, not to the node class: markerMode
 * "visible" renders the same class of node INLINE among the words, and this rule has no opinion
 * about that glyph.
 *
 * Mutating: call inside `editor.update()` (the click's update, via {@link $guardGutterMarkerClick}).
 *
 * @param target - The click's `event.target`.
 * @returns `true` if the cursor moved, and `false` if the click was not on a gutter marker.
 */
export function $guardCursorAtGutterMarker(target: EventTarget | null): boolean {
  if (!isDOMNode(target)) return false;

  const glyph = $getNearestNodeFromDOMNode(target);
  if (!$isGutterMarkerNode(glyph)) return false;

  const owner = glyph.getParent();
  if (!owner) return false;
  if ($isSomeParaNode(owner) && $advancePastParaPrefixes(owner)) return true;
  $placeCaretAtBoundary(owner, glyph.getIndexWithinParent() + 1);
  return true;
}

/**
 * Collapses a selected paragraph marker to a caret at its paragraph's content start — the position
 * the rest of the editor treats a marker selection as. Call before running an edit written for a
 * caret, so it acts on the paragraph's text rather than on the glyph.
 *
 * Mutating: call inside `editor.update()`.
 *
 * A marker selection a remote edit orphaned (its paragraph removed) is repaired the same way the
 * next key would repair it, through {@link REPAIR_PARA_MARKER_SELECTION_COMMAND}.
 *
 * Mutating: call inside `editor.update()`.
 *
 * @returns `true` if a marker was selected and is now collapsed, `false` if nothing changed.
 */
export function $collapseParaMarkerSelection(): boolean {
  if ($getEditor().dispatchCommand(REPAIR_PARA_MARKER_SELECTION_COMMAND, undefined)) return true;
  const para = $getSelectedParaMarkerPara($getSelection());
  if (!para) return false;
  $placeCaretAtParaContentStart(para);
  return true;
}

/**
 * Asks `ParaMarkerSelectionPlugin` to collapse a marker selection whose paragraph a remote edit
 * removed. Handlers return `true` if they repaired one. Dispatched from inside an update.
 */
export const REPAIR_PARA_MARKER_SELECTION_COMMAND: LexicalCommand<void> = createCommand(
  "REPAIR_PARA_MARKER_SELECTION_COMMAND",
);

/**
 * The node a selected paragraph marker counts as selecting for location purposes (which verse,
 * which chapter): the first child of its paragraph's content, or the paragraph's last prefix child
 * (a leading verse, or the glyph) when it has no content yet.
 *
 * Read-only: safe in any read — `editor.getEditorState().read()`, an `editor.update()`, or a
 * command handler.
 *
 * @param selection - The selection to inspect, e.g. `$getSelection()`.
 * @returns the node, or `undefined` when no paragraph marker is selected.
 */
export function $getParaMarkerSelectionLocationNode(
  selection: BaseSelection | null | undefined,
): LexicalNode | undefined {
  const para = $getSelectedParaMarkerPara(selection);
  if (!para) return undefined;
  const index = $paraContentStartIndex(para);
  return para.getChildAtIndex(index) ?? para.getChildAtIndex(index - 1) ?? para;
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
