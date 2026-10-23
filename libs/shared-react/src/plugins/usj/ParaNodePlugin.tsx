import { $removeLeadingSpace, wasNodeCreated } from "../../nodes/usj/node-react.utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getNodeByKey, LexicalEditor } from "lexical";
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
 * middle of a paragraph. Update ParaNode to not contain text if it is a 'b' marker (blank line).
 * However, if the 'b' ParaNode already contained text, it can be modified (backwards compatible
 * with PT9 & USFM v3.0).
 *
 * The leading space is looked for past a gutter marker glyph: in the gutter view another
 * ParaNode transform gives a new paragraph its glyph, and whether that transform runs before or
 * after this one depends on the order the plugins registered in.
 * @param node - ParaNode thats needs updating.
 */
function $paraNodeTransform(node: ParaNode, editor: LexicalEditor): void {
  if (wasNodeCreated(editor, node.getKey())) {
    const first = node.getFirstChild();
    $removeLeadingSpace($isGutterMarkerNode(first) ? first.getNextSibling() : first);
  }

  if (!$isParaNode(node) || node.getMarker() !== "b" || node.isEmpty()) return;

  const prevEditorState = editor.getEditorState();
  const wasEmpty = prevEditorState.read(() => {
    const prevNode = $getNodeByKey(node.getKey());
    return $isParaNode(prevNode) && (prevNode?.isEmpty() ?? false);
  });
  if (!wasEmpty) return;

  node.clear();
}
