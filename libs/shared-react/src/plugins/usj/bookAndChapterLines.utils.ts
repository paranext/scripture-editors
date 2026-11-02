import { $placeCaretAtParaContentStart } from "./ParaMarkerPrefixCursorGuardPlugin";
import {
  $createRangeSelection,
  $getNodeByKey,
  $getRoot,
  $getSelection,
  $isDecoratorNode,
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
 * @returns Whether anything was removed, and the remaining top-level nodes that came before the
 *   first top-level chapter line removed: chapter 1's front matter (`\h`, `\mt1`, an
 *   introduction), which belongs before the document's chapter line
 *   ({@link $insertBeforeChapterLine}). Empty when the nodes held no chapter line.
 */
export function $removeBookAndChapterLines(nodes: LexicalNode[]): {
  isRemoved: boolean;
  beforeChapter: LexicalNode[];
} {
  const chapterAt = nodes.findIndex($isSomeChapterNode);
  const beforeChapter = chapterAt < 0 ? [] : nodes.slice(0, chapterAt);
  const isRemoved = $removeLinesFrom(nodes);
  return { isRemoved, beforeChapter: beforeChapter.filter((node) => nodes.includes(node)) };
}

/** Removes every book and chapter line from `nodes`, at any depth; whether it removed any. */
function $removeLinesFrom(nodes: LexicalNode[]): boolean {
  let isRemoved = false;
  for (let index = nodes.length - 1; index >= 0; index -= 1) {
    const node = nodes[index];
    if ($isBookOrChapterLine(node)) {
      nodes.splice(index, 1);
      if (node.getParent()) node.remove();
      isRemoved = true;
    } else if ($isElementNode(node) && $removeLinesFrom(node.getChildren())) isRemoved = true;
  }
  return isRemoved;
}

/**
 * Inserts pasted block `nodes` just before the chapter line the collapsed `selection` follows, the
 * last chapter line before the line its caret is in, where a copy's front matter belongs: a paste
 * of a whole chapter 1 puts its `\h`, `\mt1` and introduction there and its Scripture text at the
 * caret.
 *
 * Mutating: call inside `editor.update()`.
 *
 * @returns Whether it inserted them: not when a node is not a block, or no chapter line comes
 *   before the caret's line (the caret is in the front matter itself), and they then go in at the
 *   caret with the rest.
 */
export function $insertBeforeChapterLine(nodes: LexicalNode[], selection: RangeSelection): boolean {
  const isBlock = (node: LexicalNode) =>
    ($isElementNode(node) || $isDecoratorNode(node)) && !node.isInline();
  if (nodes.length === 0 || !nodes.every(isBlock)) return false;
  let line = $topLevelNodeAt(selection.anchor, false) ?? $getRoot().getLastChild() ?? undefined;
  while (line && !$isSomeChapterNode(line)) line = line.getPreviousSibling() ?? undefined;
  if (!line) return false;
  const chapter = line;
  nodes.forEach((node) => chapter.insertBefore(node));
  return true;
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
 * paste over, Select All leaves the document its book and chapter lines. The other lines between
 * them come in runs. A run the selection covers whole goes, lines and all, and leaves no empty
 * paragraph; one it covers in part goes as Lexical removes a range, from the selection's start or
 * the run's first line's start to the selection's end or the run's last line's end. A selection
 * within one line is removed as Lexical removes it.
 *
 * One run hosts the caret, and so what a paste puts in after the removal: the run right after the
 * last chapter line the selection holds, the Scripture text, rather than chapter 1's front matter
 * (`\h`, `\mt1`, an introduction) before it; with no chapter line, the last run. It is emptied as
 * Lexical empties a range, leaving its first line, whose marker a paste of the same copy then
 * fills. When the selection ends on a chapter line, the caret goes to the content start of the
 * paragraph after it, or, when there is none, stays at the selection's start, or goes after the
 * chapter line when that start went with its run.
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
  const lastChapterAt = lines.findLastIndex($isSomeChapterNode);
  const host =
    lastChapterAt < 0
      ? runs.at(-1)
      : runs.find((lineRun) => lineRun[0] === lines[lastChapterAt + 1]);

  let caret: Snapshot | undefined;
  // Last run first, so the lines and points of the runs before it stay as they were.
  for (const lineRun of [...runs].reverse()) {
    const firstLine = lineRun[0];
    const lastLine = lineRun[lineRun.length - 1];
    const from = firstLine === lines[0] ? start : $lineStart(firstLine);
    const to = lastLine === lines[lines.length - 1] ? end : $lineEnd(lastLine);
    if (lineRun !== host && $holdsNoTextOutside(from, firstLine, to, lastLine)) {
      lineRun.forEach((line) => line.remove());
      continue;
    }
    selection.anchor.set(from.key, from.offset, from.type);
    selection.focus.set(to.key, to.offset, to.type);
    selection.removeText();
    if (lineRun === host) caret = snapshotOf(selection.anchor);
  }

  if (!caret) {
    const lastLine = lines[lines.length - 1];
    caret = $getNodeByKey(start.key)?.isAttached()
      ? start
      : { key: $getRoot().getKey(), offset: lastLine.getIndexWithinParent() + 1, type: "element" };
    const after = lastLine.getNextSibling();
    if (!host && $isParaLikeNode(after)) {
      $placeCaretAtParaContentStart(after);
      // That set a selection of its own; an insertion that follows goes in at `selection`.
      const placed = $getSelection();
      if ($isRangeSelection(placed)) caret = snapshotOf(placed.anchor);
    }
  }
  selection.anchor.set(caret.key, caret.offset, caret.type);
  selection.focus.set(caret.key, caret.offset, caret.type);
}

/** A point's position, kept to set a point to later. */
interface Snapshot {
  key: string;
  offset: number;
  type: "text" | "element";
}

function snapshotOf(point: PointType): Snapshot {
  return { key: point.key, offset: point.offset, type: point.type };
}

/**
 * Whether a range from `from` to `to` takes the whole of the lines `firstLine` to `lastLine`: no
 * text of theirs lies before `from` or after `to`.
 */
function $holdsNoTextOutside(
  from: Snapshot,
  firstLine: LexicalNode,
  to: Snapshot,
  lastLine: LexicalNode,
): boolean {
  return (
    $textBetween($lineStart(firstLine), from) === "" && $textBetween(to, $lineEnd(lastLine)) === ""
  );
}

/** The text a range from `from` to `to` holds. Read-only: the range is never made the selection. */
function $textBetween(from: Snapshot, to: Snapshot): string {
  const range = $createRangeSelection();
  range.anchor.set(from.key, from.offset, from.type);
  range.focus.set(to.key, to.offset, to.type);
  return range.getTextContent();
}

/** The point at the start of top-level `line`: inside it when it is an element, otherwise on the
 * root before it. */
function $lineStart(line: LexicalNode): Snapshot {
  return $isElementNode(line)
    ? { key: line.getKey(), offset: 0, type: "element" }
    : { key: $getRoot().getKey(), offset: line.getIndexWithinParent(), type: "element" };
}

/** The point at the end of top-level `line`: inside it when it is an element, otherwise on the root
 * after it. */
function $lineEnd(line: LexicalNode): Snapshot {
  return $isElementNode(line)
    ? { key: line.getKey(), offset: line.getChildrenSize(), type: "element" }
    : { key: $getRoot().getKey(), offset: line.getIndexWithinParent() + 1, type: "element" };
}
