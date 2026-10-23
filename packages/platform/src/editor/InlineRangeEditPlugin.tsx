import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getNearestBlockElementAncestorOrThrow, mergeRegister } from "@lexical/utils";
import {
  $getEditor,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  COMMAND_PRIORITY_HIGH,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  DELETE_CHARACTER_COMMAND,
  ElementNode,
  LexicalNode,
  PointType,
  RangeSelection,
  TextNode,
} from "lexical";
import { $isNoteNode, NoteNode } from "shared";
import { useEffect } from "react";

/**
 * Typing over, or deleting, a range that spans more than one text within one paragraph — across a
 * char span's edge, or across a collapsed note. Lexical's own `RangeSelection.insertText` moves the
 * content after the range's last text to after its first text, and first moves a start at a text's
 * end into the inline element that follows. So the text after an enclosing span would be pulled
 * into the span the range starts in (saved in the wrong place, with the wrong style), and a range
 * starting just before a collapsed note would put the typed text, and the text after the range,
 * into the note, which is then removed for having lost its caller — losing both. Here only the
 * selected bytes go: the two edge texts are cut, the nodes between them removed, and each span or
 * note the removal leaves empty with them.
 *
 * Only in the views whose markers are hidden: there a span is its content alone, with no glyph of
 * its own that the range could take. The marker-edit engine owns Standard view's range edits.
 */
export function InlineRangeEditPlugin(): null {
  const [editor] = useLexicalComposerContext();
  useEffect(
    () =>
      mergeRegister(
        editor.registerCommand(
          CONTROLLED_TEXT_INSERTION_COMMAND,
          (payload) => {
            const text = typeof payload === "string" ? payload : payload.data;
            return typeof text === "string" && $replaceInlineRange(text);
          },
          COMMAND_PRIORITY_HIGH,
        ),
        editor.registerCommand(
          DELETE_CHARACTER_COMMAND,
          () => $replaceInlineRange(""),
          COMMAND_PRIORITY_HIGH,
        ),
      ),
    [editor],
  );
  return null;
}

/** A text and an offset in it: one end of the range. */
interface Edge {
  node: TextNode;
  offset: number;
}

/** The collapsed note `node` is shown in, if any. */
function $collapsedNoteOf(node: LexicalNode): NoteNode | undefined {
  for (let at: LexicalNode | null = node; at; at = at.getParent())
    if ($isNoteNode(at) && at.getIsCollapsed()) return at;
  return undefined;
}

/**
 * `point` as an edge text. A collapsed note shows only its caller, so a point Lexical resolved into
 * one — it moves a range's start at a text's end into the inline element after it, and its end
 * at a text's start into the one before — is put back at the text on that side of the note. An
 * element point is at the text beside it.
 */
function $edgeText(point: PointType, side: "start" | "end"): Edge | undefined {
  const node = point.getNode();
  const note = $collapsedNoteOf(node);
  if (note) {
    const beside = side === "start" ? note.getPreviousSibling() : note.getNextSibling();
    if (!$isTextNode(beside)) return undefined;
    return { node: beside, offset: side === "start" ? beside.getTextContentSize() : 0 };
  }
  if (point.type === "text") return $isTextNode(node) ? { node, offset: point.offset } : undefined;
  if (!$isElementNode(node)) return undefined;
  const before = node.getChildAtIndex(point.offset - 1);
  const after = node.getChildAtIndex(point.offset);
  if ($isTextNode(before)) return { node: before, offset: before.getTextContentSize() };
  if ($isTextNode(after)) return { node: after, offset: 0 };
  return undefined;
}

/** The selection's two edge texts, in document order, when it is a range over more than one text
 * of one paragraph; `undefined` for any other selection. */
function $inlineRangeEdges(selection: RangeSelection): [start: Edge, end: Edge] | undefined {
  if (selection.isCollapsed()) return undefined;
  const [startPoint, endPoint] = selection.isBackward()
    ? [selection.focus, selection.anchor]
    : [selection.anchor, selection.focus];
  const start = $edgeText(startPoint, "start");
  const end = $edgeText(endPoint, "end");
  if (!start || !end || start.node.is(end.node)) return undefined;
  if (start.node.getMode() !== "normal" || end.node.getMode() !== "normal") return undefined;
  if (!start.node.isBefore(end.node)) return undefined;
  const block = $getNearestBlockElementAncestorOrThrow(start.node);
  if (!block.is($getNearestBlockElementAncestorOrThrow(end.node))) return undefined;
  // With both edge texts wholly selected there is no text left to hold the caret; Lexical's own
  // path is left to place it.
  if (start.offset === 0 && end.offset === end.node.getTextContentSize()) return undefined;
  return [start, end];
}

/** Remove `element` and each inline ancestor it leaves empty, when it is an empty inline element. */
function $removeIfEmptyInline(element: ElementNode | null): void {
  let current: ElementNode | null = element;
  while (current && current.isInline() && current.isAttached() && current.getChildrenSize() === 0) {
    const parent: ElementNode | null = current.getParent();
    current.remove();
    current = parent;
  }
}

/** Replace the selected range with `text`, when it is one {@link $inlineRangeEdges} takes. */
function $replaceInlineRange(text: string): boolean {
  const selection = $getSelection();
  if (!$isRangeSelection(selection) || $getEditor().isComposing()) return false;
  const edges = $inlineRangeEdges(selection);
  if (!edges) return false;
  const [start, end] = edges;
  const emptied = new Set<ElementNode | null>([start.node.getParent(), end.node.getParent()]);
  // The leaves wholly inside the range; an element whose content all is goes with its content.
  const inside = start.node
    .getNodesBetween(end.node)
    .filter((node) => !node.is(start.node) && !node.is(end.node) && !$isElementNode(node));
  for (const node of inside) {
    emptied.add(node.getParent());
    node.remove();
  }
  const endNode = end.node.spliceText(0, end.offset, "");
  const startNode = start.node.spliceText(
    start.offset,
    start.node.getTextContentSize() - start.offset,
    text,
  );
  if (startNode.getTextContentSize() > 0)
    startNode.select(start.offset + text.length, start.offset + text.length);
  else {
    endNode.select(0, 0);
    emptied.add(startNode.getParent());
    startNode.remove();
  }
  if (endNode.getTextContentSize() === 0 && !endNode.isSelected()) {
    emptied.add(endNode.getParent());
    endNode.remove();
  }
  emptied.forEach($removeIfEmptyInline);
  return true;
}
