import { $getRoot, $isElementNode, LexicalEditor, LexicalNode } from "lexical";
import { $coveredDisplayText, $displayAnnotationsOf, NBSP } from "shared";

/** Every display-byte annotation in the tree, per id, as the bytes each range covers, in document
 * order — NBSPs read as spaces. Content marks are not included. */
export function displayAnnotated(lexical: LexicalEditor): { [id: string]: string[] } {
  return lexical.getEditorState().read(() => {
    const out: { [id: string]: string[] } = {};
    const walk = (node: LexicalNode): void => {
      for (const annotation of $displayAnnotationsOf(node))
        (out[annotation.id] ??= []).push(
          $coveredDisplayText(node, annotation).replaceAll(NBSP, " "),
        );
      if ($isElementNode(node)) node.getChildren().forEach(walk);
    };
    walk($getRoot());
    return out;
  });
}

/** The first node holding annotation `id`. Call inside a read or update. */
export function $carrierHolding(id: string): LexicalNode {
  let found: LexicalNode | undefined;
  const walk = (node: LexicalNode): void => {
    if (found) return;
    if ($displayAnnotationsOf(node).some((annotation) => annotation.id === id)) found = node;
    else if ($isElementNode(node)) node.getChildren().forEach(walk);
  };
  walk($getRoot());
  if (!found) throw new Error(`no node holds ${id}`);
  return found;
}
