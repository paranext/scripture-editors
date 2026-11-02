import { $placeCaretAtParaContentStart } from "./ParaMarkerPrefixCursorGuardPlugin";
import {
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isRootNode,
  LexicalNode,
  PointType,
  RangeSelection,
} from "lexical";
import { $isBookNode, $isParaLikeNode, $isParaNode, $isSomeChapterNode } from "shared";

/**
 * Whether `node` is a book (`\id`) line or a chapter line: a `BookNode`, a chapter node (Standard
 * view's `ChapterNode`, the hidden-marker views' `ImmutableChapterNode`), or a paragraph tagged
 * `id`, which is what html carrying a book line parses to. USFM allows one book line and one line
 * per chapter, and the editor's chapter document holds exactly one of each.
 */
export function $isBookOrChapterLine(node: LexicalNode): boolean {
  return (
    $isBookNode(node) ||
    $isSomeChapterNode(node) ||
    ($isParaNode(node) && node.getMarker() === "id")
  );
}

/**
 * Removes every book and chapter line ({@link $isBookOrChapterLine}) from nodes about to be pasted
 * or dropped, at any depth: in place, so a handler of `SELECTION_INSERT_CLIPBOARD_NODES_COMMAND`
 * changes what Lexical goes on to insert. A copy of a whole chapter carries both lines, and the
 * document already has its own.
 *
 * Mutating: call inside `editor.update()`.
 *
 * @param nodes - The nodes about to be inserted; changed in place.
 * @returns Whether anything was removed.
 */
export function $removeBookAndChapterLines(nodes: LexicalNode[]): boolean {
  let isRemoved = false;
  for (let index = nodes.length - 1; index >= 0; index -= 1) {
    const node = nodes[index];
    if ($isBookOrChapterLine(node)) {
      nodes.splice(index, 1);
      if (node.getParent()) node.remove();
      isRemoved = true;
    } else if ($isElementNode(node) && $removeBookAndChapterLines(node.getChildren()))
      isRemoved = true;
  }
  return isRemoved;
}

/**
 * The top-level nodes `selection` runs across, first to last, or `undefined` when an end has no
 * top-level node (an empty document).
 */
function $topLevelNodesOf(selection: RangeSelection): LexicalNode[] | undefined {
  const [start, end] = selection.isBackward()
    ? [selection.focus, selection.anchor]
    : [selection.anchor, selection.focus];
  const first = $topLevelNodeAt(start, false);
  const last = $topLevelNodeAt(end, true);
  if (!first || !last) return undefined;
  const children = $getRoot().getChildren();
  const from = children.indexOf(first);
  const to = children.indexOf(last);
  return from < 0 || to < from ? undefined : children.slice(from, to + 1);
}

/** The top-level node `point` is in; for a point on the root itself, the node after it (`isEnd`
 * false) or before it (`isEnd` true). */
function $topLevelNodeAt(point: PointType, isEnd: boolean): LexicalNode | undefined {
  const node = point.getNode();
  if ($isRootNode(node))
    return node.getChildAtIndex(isEnd ? point.offset - 1 : point.offset) ?? undefined;
  return node.getTopLevelElement() ?? undefined;
}

/**
 * Whether `selection` runs from one top-level line into another, at least one of them a book or
 * chapter line ({@link $isBookOrChapterLine}). Removing such a selection as Lexical does would take
 * that line with it (see {@link $removeTextKeepingBookAndChapterLines}).
 *
 * Read-only: call inside `editor.getEditorState().read()`, an update, or a command handler.
 */
export function $selectionSpansBookOrChapterLine(selection: RangeSelection): boolean {
  if (selection.isCollapsed()) return false;
  const lines = $topLevelNodesOf(selection);
  return !!lines && lines.length > 1 && lines.some($isBookOrChapterLine);
}

/**
 * Removes what `selection` holds as `RangeSelection.removeText` does, but keeps every book and
 * chapter line ({@link $isBookOrChapterLine}) it runs across whole, text and all, so a cut of, or a
 * paste over, Select All leaves the document its book and chapter lines. Each run of other lines
 * between them goes as one range: from the selection's start, or the run's first line's start, to
 * the selection's end, or the run's last line's end. A selection within one line is removed as
 * Lexical removes it.
 *
 * Leaves `selection` collapsed where the first run was removed, so an insertion that follows goes
 * there. With no other line in it, nothing is removed, and the caret goes to the content start of
 * the paragraph after the selection, or stays at the selection's start when there is none.
 *
 * Mutating: call inside `editor.update()`.
 */
export function $removeTextKeepingBookAndChapterLines(selection: RangeSelection): void {
  const lines = $topLevelNodesOf(selection);
  if (!lines || lines.length < 2 || !lines.some($isBookOrChapterLine)) {
    selection.removeText();
    return;
  }
  const [start, end] = (
    selection.isBackward()
      ? [selection.focus, selection.anchor]
      : [selection.anchor, selection.focus]
  ).map((point) => ({ key: point.key, offset: point.offset, type: point.type }));
  const runs: LexicalNode[][] = [];
  let run: LexicalNode[] = [];
  for (const line of lines)
    if ($isBookOrChapterLine(line)) {
      if (run.length > 0) runs.push(run);
      run = [];
    } else run.push(line);
  if (run.length > 0) runs.push(run);

  if (runs.length === 0) {
    const after = lines[lines.length - 1].getNextSibling();
    let caret: { key: string; offset: number; type: "text" | "element" } = start;
    if ($isParaLikeNode(after)) {
      $placeCaretAtParaContentStart(after);
      // That set a selection of its own; an insertion that follows goes in at `selection`.
      const placed = $getSelection();
      if ($isRangeSelection(placed))
        caret = { key: placed.anchor.key, offset: placed.anchor.offset, type: placed.anchor.type };
    }
    selection.anchor.set(caret.key, caret.offset, caret.type);
    selection.focus.set(caret.key, caret.offset, caret.type);
    return;
  }
  // Last run first, so the lines and points of the runs before it stay as they were.
  for (const lineRun of runs.reverse()) {
    const firstLine = lineRun[0];
    const lastLine = lineRun[lineRun.length - 1];
    const from = firstLine === lines[0] ? start : $lineStart(firstLine);
    const to = lastLine === lines[lines.length - 1] ? end : $lineEnd(lastLine);
    selection.anchor.set(from.key, from.offset, from.type);
    selection.focus.set(to.key, to.offset, to.type);
    selection.removeText();
  }
}

/** The point at the start of top-level `line`: inside it when it is an element, otherwise on the
 * root before it. */
function $lineStart(line: LexicalNode): { key: string; offset: number; type: "element" } {
  return $isElementNode(line)
    ? { key: line.getKey(), offset: 0, type: "element" }
    : { key: $getRoot().getKey(), offset: line.getIndexWithinParent(), type: "element" };
}

/** The point at the end of top-level `line`: inside it when it is an element, otherwise on the root
 * after it. */
function $lineEnd(line: LexicalNode): { key: string; offset: number; type: "element" } {
  return $isElementNode(line)
    ? { key: line.getKey(), offset: line.getChildrenSize(), type: "element" }
    : { key: $getRoot().getKey(), offset: line.getIndexWithinParent() + 1, type: "element" };
}
