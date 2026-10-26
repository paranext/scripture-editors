import { $removeLeadingSpace, wasNodeCreated } from "../../nodes/usj/node-react.utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getNodeByKey, $isElementNode, LexicalEditor } from "lexical";
import { useEffect } from "react";
import { $isGutterMarkerNode, $isParaNode, ParaNode } from "shared";

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
 * middle of a paragraph — from its first text, past the gutter marker glyph that leads every
 * paragraph in the paragraph-structure view, so that view saves the break as the others do.
 * Update ParaNode to not contain text if it is a 'b' marker (blank line): text typed into an empty
 * one is removed. However, if the 'b' ParaNode already contained text, it
 * can be modified (backwards compatible with PT9 & USFM v3.0), and content a join moves into an
 * empty one from the paragraph after it is kept.
 * @param node - ParaNode thats needs updating.
 */
function $paraNodeTransform(node: ParaNode, editor: LexicalEditor): void {
  if (wasNodeCreated(editor, node.getKey())) {
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
  const { wasEmpty, nextKey } = prevEditorState.read(() => {
    const prevNode = $getNodeByKey(node.getKey());
    return {
      wasEmpty: $isParaNode(prevNode) && (prevNode?.isEmpty() ?? false),
      nextKey: prevNode?.getNextSibling()?.getKey(),
    };
  });
  if (!wasEmpty) return;

  // Only text typed into the blank line is refused. A join with the paragraph after it (Delete at
  // the blank line, Backspace at that paragraph's start, or a range across the break typed over)
  // moves that paragraph's content in, and clearing it would delete that paragraph's text.
  const next = nextKey === undefined ? null : $getNodeByKey(nextKey);
  if (nextKey !== undefined && (!next || !next.isAttached())) return;

  node.clear();
}
