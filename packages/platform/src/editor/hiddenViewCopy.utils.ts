import { $selectionTouchesBookOrChapter } from "./markerEdit/whitespaceDisplay.plugin.utils";
import { $sliceSelectedTextNodeContent } from "@lexical/selection";
import { $findMatchingParent } from "@lexical/utils";
import {
  $getRoot,
  $isElementNode,
  $isTextNode,
  LexicalNode,
  NodeKey,
  RangeSelection,
  SerializedLexicalNode,
} from "lexical";
import { $isGutterMarkerNode, $isUnknownNode } from "shared";
import { $rangeReachesIntoOpaqueBlock, HIDDEN_VIEW_CLIPBOARD_NAMESPACE } from "shared-react";

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
 * The `application/x-lexical-editor` flavor a hidden-marker view's copy of `selection` writes: the
 * selected nodes as Lexical serializes them, tagged {@link HIDDEN_VIEW_CLIPBOARD_NAMESPACE} so that
 * only a hidden-marker view reads them back (`UnstorableTextPlugin`, and `StructureKeyboardPlugin`
 * under protected structure). A paste of it reproduces the copy exactly: attributes, notes and
 * figures included.
 *
 * It differs from Lexical's own serialization (`$getLexicalContent`) twice:
 * - it holds no gutter marker glyph: a glyph is the view's reading aid, and
 *   `ParaMarkerPrefixGuardPlugin` builds one for each pasted paragraph;
 * - it holds every `UnknownNode` with no children the selection covers. Here every content-less
 *   construct is one — a caption-less figure, an optional break — since these views build no
 *   display children for a construct; `UnknownNode.excludeFromCopy` leaves it out of Lexical's
 *   serialization so that Standard view's two carriers agree, and a cut would then lose it.
 *
 * `undefined` — so a paste takes the html or plain text — when nothing is selected, when an end of
 * the selection lies inside an opaque construct (a node copy cannot carry part of one; it would
 * carry it whole), and when the selection touches a book or chapter line, which a paste must never
 * duplicate (`$selectionTouchesBookOrChapter`).
 *
 * Read-only: call inside a copy or cut command handler.
 */
export function $hiddenViewLexicalFlavor(selection: RangeSelection): string | undefined {
  if (
    selection.isCollapsed() ||
    $rangeReachesIntoOpaqueBlock(selection) ||
    $selectionTouchesBookOrChapter(selection)
  )
    return undefined;
  const selectedKeys = new Set(selection.getNodes().map((node) => node.getKey()));
  const nodes: SerializedLexicalNode[] = [];
  for (const child of $getRoot().getChildren())
    $appendToNodeCopy(selection, selectedKeys, child, nodes);
  if (nodes.length === 0) return undefined;
  return JSON.stringify({ namespace: HIDDEN_VIEW_CLIPBOARD_NAMESPACE, nodes });
}

/**
 * Appends `node`'s serialization to `target` as Lexical's own node copy does (`@lexical/clipboard`'s
 * `$appendNodesToJSON`): a selected node with its selected descendants, a text node sliced to the
 * selection, and in place of an unselected or excluded element, its selected descendants. Leaves
 * out a gutter marker glyph, and keeps a childless `UnknownNode` the selection covers (see
 * {@link $hiddenViewLexicalFlavor}).
 *
 * @returns Whether `node` itself was selected.
 */
function $appendToNodeCopy(
  selection: RangeSelection,
  selectedKeys: Set<NodeKey>,
  node: LexicalNode,
  target: SerializedLexicalNode[],
): boolean {
  if ($isGutterMarkerNode(node)) return false;
  const isChildlessUnknown = $isUnknownNode(node) && node.getChildrenSize() === 0;
  let isIncluded = isChildlessUnknown
    ? selectedKeys.has(node.getKey())
    : node.isSelected(selection);
  const isExcluded = !isChildlessUnknown && $isElementNode(node) && node.excludeFromCopy("html");
  const copied = $isTextNode(node) ? $sliceSelectedTextNodeContent(selection, node, "clone") : node;
  const serialized = copied.exportJSON();
  const serializedChildren: SerializedLexicalNode[] =
    "children" in serialized && Array.isArray(serialized.children) ? serialized.children : [];
  // A selection that starts or ends at the edge of a text node slices it to nothing.
  if ($isTextNode(copied) && copied.getTextContentSize() === 0) isIncluded = false;
  if ($isElementNode(copied))
    for (const child of copied.getChildren())
      if (
        $appendToNodeCopy(selection, selectedKeys, child, serializedChildren) &&
        !isIncluded &&
        $isElementNode(node) &&
        node.extractWithChild(child, selection, "clone")
      )
        isIncluded = true;
  if (isIncluded && !isExcluded) target.push(serialized);
  else target.push(...serializedChildren);
  return isIncluded;
}
