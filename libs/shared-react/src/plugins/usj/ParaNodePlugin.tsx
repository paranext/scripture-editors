import { $removeLeadingSpace, wasNodeCreated } from "../../nodes/usj/node-react.utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getNodeByKey, $isElementNode, LexicalEditor } from "lexical";
import { useEffect } from "react";
import { $isParaNode, $isVisibleMarkerNode, ParaNode } from "shared";
import { $syncParaMarkerGlyph } from "./collab/delta-apply-update.utils";

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
 * paragraph after it keeps that paragraph: its marker replaces the blank line's.
 * @param node - ParaNode thats needs updating.
 */
function $paraNodeTransform(node: ParaNode, editor: LexicalEditor): void {
  if (wasNodeCreated(editor, node.getKey())) {
    $removeLeadingSpace(node.getFirstChild());
    // Lexical's history folds an update whose only dirty leaf is a text that kept its text into
    // the previous undo step. A paragraph break in front of a char span or a note is such an
    // update (only the text before the break is touched), so the new paragraph's first leaf is
    // marked too, and Undo takes the break back on its own.
    const first = node.getFirstDescendant();
    if (first && !$isElementNode(first)) first.markDirty();
  }

  if (!$isParaNode(node) || node.getMarker() !== "b" || node.isEmpty()) return;

  const prevEditorState = editor.getEditorState();
  const { wasEmpty, wasBlank, nextKey, nextPara } = prevEditorState.read(() => {
    const prevNode = $getNodeByKey(node.getKey());
    const prevNext = prevNode?.getNextSibling();
    return {
      wasEmpty: $isParaNode(prevNode) && prevNode.isEmpty(),
      // Empty but for a marker glyph the view shows in front of it (a gutter or visible marker).
      wasBlank: $isParaNode(prevNode) && prevNode.getChildren().every($isVisibleMarkerNode),
      nextKey: prevNext?.getKey(),
      nextPara: $isParaNode(prevNext)
        ? { marker: prevNext.getMarker(), unknownAttributes: prevNext.getUnknownAttributes() }
        : undefined,
    };
  });
  if (!wasBlank) return;

  // A join with the paragraph after it (Delete at the blank line, Backspace at that paragraph's
  // start, or a range across the break typed over) moves that paragraph's content in. Paratext 9
  // keeps the joined paragraph and drops the blank line: its formatted view joins two paragraphs
  // the way its HTML editor joins two blocks, keeping the second block.
  const next = nextKey === undefined ? null : $getNodeByKey(nextKey);
  if (nextKey !== undefined && (!next || !next.isAttached())) {
    if (nextPara) {
      $syncParaMarkerGlyph(node, nextPara.marker);
      node.setUnknownAttributes(nextPara.unknownAttributes);
    }
    return;
  }

  // Only text typed into the blank line is refused.
  if (wasEmpty) node.clear();
}
