import { $removeLeadingSpace, wasNodeCreated } from "../../nodes/usj/node-react.utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getNodeByKey,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  LexicalEditor,
  LexicalNode,
} from "lexical";
import { useEffect } from "react";
import {
  $isGutterMarkerNode,
  $isParaNode,
  $isVisibleMarkerNode,
  $orderedPoints,
  $syncParaMarkerGlyph,
  getApplyingUpdateSource,
  ParaNode,
} from "shared";

export function ParaNodePlugin(): null {
  const [editor] = useLexicalComposerContext();
  useParaNode(editor);
  return null;
}

function useParaNode(editor: LexicalEditor) {
  useEffect(() => {
    if (!editor.hasNodes([ParaNode])) {
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    }

    // Update ParaNode to remove leading space and to not contain text if it is a 'b' marker.
    return editor.registerNodeTransform(ParaNode, (node: ParaNode) =>
      $paraNodeTransform(node, editor),
    );
  }, [editor]);
}

/**
 * Remove any leading space if the node was just created, e.g. by hitting the enter key in the
 * middle of a paragraph. Update ParaNode to not contain text if it is a 'b' marker (blank line):
 * text typed into an empty one is removed. However, if the 'b' ParaNode already contained text, it
 * can be modified (backwards compatible with PT9 & USFM v3.0). A join of an empty one with the
 * paragraph after it keeps the paragraph whose text survives: its marker replaces the blank line's.
 * That is the paragraph after the blank line, or, when the user's own selection ran from the blank
 * line into a later paragraph, the one the selection ended in. An applied update
 * that removes that paragraph without moving any of its content into the blank line leaves the
 * blank line's marker alone.
 *
 * The leading space is looked for past a gutter marker glyph, so the paragraph-structure view saves
 * the break as the others do: in the gutter view another ParaNode transform gives a new paragraph
 * its glyph, and whether that transform runs before or after this one depends on the order the
 * plugins registered in. A paragraph an applied update creates keeps its leading space: the apply
 * reports its ops as given, so trimming here would leave this document out of step with the one
 * that sent them.
 * @param node - ParaNode thats needs updating.
 */
function $paraNodeTransform(node: ParaNode, editor: LexicalEditor): void {
  if (!getApplyingUpdateSource(editor) && wasNodeCreated(editor, node.getKey())) {
    const first = node.getFirstChild();
    $removeLeadingSpace($isGutterMarkerNode(first) ? first.getNextSibling() : first);
    // Lexical's history folds an update whose only dirty leaf is a text that kept its text into
    // the previous undo step. A paragraph break in front of a char span or a note is such an
    // update (only the text before the break is touched), so the new paragraph's first leaf is
    // marked too, and Undo takes the break back on its own.
    const firstLeaf = node.getFirstDescendant();
    if (firstLeaf && !$isElementNode(firstLeaf)) firstLeaf.markDirty();
  }

  if (!$isParaNode(node) || node.getMarker() !== "b" || node.isEmpty()) return;

  const prevEditorState = editor.getEditorState();
  const isUserEdit = !getApplyingUpdateSource(editor);
  const { wasEmpty, wasBlank, nextKey, nextPara, nextHeldContent } = prevEditorState.read(() => {
    const prevNode = $getNodeByKey(node.getKey());
    const prevNext = prevNode?.getNextSibling();
    // A range selection from the blank line over other paragraphs joins the paragraph it ends in,
    // not the blank line's next sibling. While an update is applied, the previous selection is the
    // local user's, unrelated to it.
    let survivor = prevNext;
    const selection = isUserEdit ? $getSelection() : undefined;
    if ($isRangeSelection(selection) && !selection.isCollapsed()) {
      const end = $orderedPoints(selection)[1].getNode();
      const endPara = end.getTopLevelElement();
      if ($isParaNode(endPara) && !endPara.is(prevNode)) survivor = endPara;
    }
    const holdsText = (para: LexicalNode | null | undefined) =>
      $isParaNode(para) && para.getChildren().some((child) => !$isVisibleMarkerNode(child));
    return {
      wasEmpty: $isParaNode(prevNode) && prevNode.isEmpty(),
      // Whether a paragraph the edit takes away held anything beyond a marker glyph.
      nextHeldContent: holdsText(prevNext) || holdsText(survivor),
      // Empty but for a marker glyph the view shows in front of it (a gutter or visible marker).
      wasBlank: $isParaNode(prevNode) && prevNode.getChildren().every($isVisibleMarkerNode),
      nextKey: prevNext?.getKey(),
      nextPara: $isParaNode(survivor)
        ? { marker: survivor.getMarker(), unknownAttributes: survivor.getUnknownAttributes() }
        : undefined,
    };
  });
  if (!wasBlank) return;

  // A join with the paragraph after it (Delete at the blank line, Backspace at that paragraph's
  // start, or a range across the break typed over) moves that paragraph's content in. Paratext 9
  // keeps the joined paragraph and drops the blank line: its formatted view joins two paragraphs
  // the way its HTML editor joins two blocks, keeping the second block.
  const next = nextKey === undefined ? undefined : ($getNodeByKey(nextKey) ?? undefined);
  if (nextKey !== undefined && (!next || !next.isAttached())) {
    // The blank line takes the marker only when content joined it: content now in the blank line,
    // or, for the user's own edit (Backspace, Delete, or a range typed over), a paragraph that
    // held content and was removed. Removing an empty paragraph moves nothing, so the blank line
    // keeps its marker, as does an applied update that removes a paragraph without bringing any
    // content in.
    const holdsContent = node.getChildren().some((child) => !$isVisibleMarkerNode(child));
    const isJoin = holdsContent || (isUserEdit && nextHeldContent);
    if (isJoin && nextPara) {
      $syncParaMarkerGlyph(node, nextPara.marker);
      node.setUnknownAttributes(nextPara.unknownAttributes);
    }
    return;
  }

  // Only text typed into the blank line is refused.
  if (wasEmpty) node.clear();
}
