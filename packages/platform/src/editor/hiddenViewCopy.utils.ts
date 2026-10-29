import { $getLexicalContent } from "@lexical/clipboard";
import { $findMatchingParent } from "@lexical/utils";
import { LexicalEditor, LexicalNode, RangeSelection } from "lexical";
import { $isGutterMarkerNode, $isUnknownNode } from "shared";

/**
 * Whether a hidden-marker view's copy leaves `node`'s text out of its plain text: a paragraph's
 * gutter marker glyph (`$isGutterMarkerNode`), which is a reading aid rather than text, and any
 * node that is, or is inside, an `UnknownNode` — a construct the view does not show, such as a
 * figure and its caption.
 *
 * A collapsed note's text is NOT left out: a plain-text paste is the only way that text reaches
 * another program.
 *
 * Read-only: call inside `editor.getEditorState().read()`, an update, or a command handler.
 */
export function $isLeftOutOfHiddenViewCopy(node: LexicalNode): boolean {
  return $isGutterMarkerNode(node) || $findMatchingParent(node, $isUnknownNode) !== null;
}

/**
 * The `application/x-lexical-editor` flavor a hidden-marker view's copy of `selection` writes:
 * Lexical's own serialization of the selected nodes. `undefined` when nothing is selected.
 *
 * Read-only: call inside a copy or cut command handler.
 */
export function $hiddenViewLexicalFlavor(
  editor: LexicalEditor,
  selection: RangeSelection,
): string | undefined {
  return $getLexicalContent(editor, selection) ?? undefined;
}
