/**
 * The clipboard of a selection in an annotated document, written as the same document with no
 * annotation writes it, without touching the document.
 *
 * Annotations change the tree a copy is written from, not the document: a mark wraps the content
 * it holds (and so cuts the text it starts or ends in), and a display byte held in part is cut
 * into pieces (`displayPieces.state.ts`). Lexical writes a copy node by node — each node of the
 * selection its own element in the HTML, its own object in the internal flavor, a mark excluded
 * but its children kept apart — so the copy of an annotated range carries the cuts: a verse in four
 * pieces pastes back from the HTML as four verses, and content a mark cut is several spans that a
 * paste reads apart. So the copy is written from the tree without the annotations instead: the
 * blocks the selection touches are serialized with every mark's children in its place, each
 * carrier's pieces written as the one node they are, the texts a mark cut written as the one text
 * they are, and no piece or hold state; that tree is read into a scratch editor, the selection
 * restated on it, and the copy written there. The live editor is only read. A selection touching
 * nothing an annotation puts in the tree is copied by Lexical as it stands.
 */

import { $getClipboardDataFromSelection, LexicalClipboardData } from "@lexical/clipboard";
import {
  $createRangeSelection,
  $getRoot,
  $isElementNode,
  $isRootNode,
  $isTextNode,
  createEditor,
  EditorState,
  ElementNode,
  LexicalEditor,
  LexicalNode,
  NODE_STATE_KEY,
  NodeKey,
  PointType,
  RangeSelection,
  SerializedLexicalNode,
} from "lexical";
import {
  $isPieceContinuation,
  $isTypedMarkNode,
  $pieceHead,
  displayAnnotationsState,
  displayPieceChainState,
  displayPieceContinuationState,
  displayPieceTokenTextState,
} from "shared";

/** The node states a hold or a cut puts on a node: none of them is in the uncut document. */
const ANNOTATION_STATE_KEYS: ReadonlySet<string> = new Set([
  displayAnnotationsState.key,
  displayPieceChainState.key,
  displayPieceContinuationState.key,
  displayPieceTokenTextState.key,
]);

/** Lexical's `unmergeable` text detail flag. */
const IS_UNMERGEABLE = 1 << 1;

/** A serialized node with the children an element is written with. */
type SerializedNode = SerializedLexicalNode & { children?: SerializedNode[]; text?: string };

/**
 * Where a live node is in the uncut serialized tree: the path of child indexes from the root to
 * the node it is written as, and, for a text, where its own text starts in that node's text.
 */
interface Place {
  path: number[];
  offset: number;
}

/** What {@link $serializeUncut} writes, and where each live node went. */
interface UncutTree {
  children: SerializedNode[];
  places: Map<NodeKey, Place>;
}

/** `node`'s JSON without the states a hold or a cut puts on it. */
function exportWithoutAnnotations(node: LexicalNode): SerializedNode {
  const json: SerializedNode = node.exportJSON();
  const state = json[NODE_STATE_KEY];
  if (!state || !Object.keys(state).some((key) => ANNOTATION_STATE_KEYS.has(key))) return json;
  const kept = Object.fromEntries(
    Object.entries(state).filter(([key]) => !ANNOTATION_STATE_KEYS.has(key)),
  );
  const { [NODE_STATE_KEY]: _annotated, ...rest } = json;
  return Object.keys(kept).length > 0 ? { ...rest, [NODE_STATE_KEY]: kept } : rest;
}

/** Whether serialized texts `a` and `b`, written apart only because a mark cut them, are the one
 * text Lexical keeps them as with no mark: simple text, mergeable, and alike in all but text. */
function isOneText(a: SerializedNode, b: SerializedNode): boolean {
  if (a.type !== "text" || b.type !== "text") return false;
  const isSimple = (node: SerializedNode) =>
    "mode" in node &&
    node.mode === "normal" &&
    "detail" in node &&
    typeof node.detail === "number" &&
    (node.detail & IS_UNMERGEABLE) === 0;
  if (!isSimple(a) || !isSimple(b)) return false;
  return JSON.stringify({ ...a, text: "" }) === JSON.stringify({ ...b, text: "" });
}

/** The last node written into a sibling list, and whether a mark's edge has been passed since. */
interface Run {
  last?: { node: LexicalNode; index: number };
  isPastMark: boolean;
}

/** Write `children` of the element at `path` into `out`, the uncut way ({@link $serializeUncut}). */
function $appendUncut(
  children: readonly LexicalNode[],
  out: SerializedNode[],
  path: number[],
  places: Map<NodeKey, Place>,
  run: Run,
): void {
  for (const child of children) {
    if ($isTypedMarkNode(child)) {
      run.isPastMark = true;
      $appendUncut(child.getChildren(), out, path, places, run);
      run.isPastMark = true;
      continue;
    }
    const json = exportWithoutAnnotations(child);
    const { last } = run;
    if ($isTextNode(child) && last && $isTextNode(last.node)) {
      const target = out[last.index];
      const isPiece = $isPieceContinuation(child) && $pieceHead(child).is($pieceHead(last.node));
      if (isPiece || (run.isPastMark && isOneText(target, json))) {
        const offset = target.text?.length ?? 0;
        target.text = `${target.text ?? ""}${child.getTextContent()}`;
        places.set(child.getKey(), { path: [...path, last.index], offset });
        run.last = { node: child, index: last.index };
        run.isPastMark = false;
        continue;
      }
    }
    const index = out.length;
    out.push(json);
    places.set(child.getKey(), { path: [...path, index], offset: 0 });
    if ($isElementNode(child)) {
      const inner: SerializedNode[] = [];
      json.children = inner;
      $appendUncut(child.getChildren(), inner, [...path, index], places, { isPastMark: false });
    }
    run.last = { node: child, index };
    run.isPastMark = false;
  }
}

/**
 * The root's children `from` to `to` (inclusive) as they are with no annotation, serialized as the
 * whole document, and where each live node went. A block is written alone, so only the blocks a
 * selection touches are written for its copy.
 */
function $serializeUncut(from: number, to: number): UncutTree {
  const children: SerializedNode[] = [];
  const places = new Map<NodeKey, Place>();
  const blocks = $getRoot()
    .getChildren()
    .slice(from, to + 1);
  $appendUncut(blocks, children, [], places, { isPastMark: false });
  return { children, places };
}

/** The index among the root's children of the block `point` is in (the last for a root point at
 * the end). */
function $blockIndex(point: PointType): number {
  const node = point.getNode();
  if ($isRootNode(node)) return Math.max(0, Math.min(point.offset, node.getChildrenSize() - 1));
  return (node.getTopLevelElement() ?? node).getIndexWithinParent();
}

/** A point of the uncut tree: a node's path, an offset, and the point's type. */
interface UncutPoint {
  path: number[];
  offset: number;
  type: "text" | "element";
}

/** The uncut point just before `node`. */
function $pointBefore(node: LexicalNode, places: Map<NodeKey, Place>): UncutPoint | undefined {
  if ($isTypedMarkNode(node)) {
    const first = node.getFirstChild();
    return first ? $pointBefore(first, places) : $pointAfterMarkEdge(node, places);
  }
  const place = places.get(node.getKey());
  if (!place) return undefined;
  if ($isTextNode(node) && place.offset > 0)
    return { path: place.path, offset: place.offset, type: "text" };
  return {
    path: place.path.slice(0, -1),
    offset: place.path[place.path.length - 1],
    type: "element",
  };
}

/** The uncut point just after `node`. */
function $pointAfter(node: LexicalNode, places: Map<NodeKey, Place>): UncutPoint | undefined {
  if ($isTypedMarkNode(node)) {
    const last = node.getLastChild();
    return last ? $pointAfter(last, places) : $pointAfterMarkEdge(node, places);
  }
  const place = places.get(node.getKey());
  if (!place) return undefined;
  if ($isTextNode(node))
    return { path: place.path, offset: place.offset + node.getTextContentSize(), type: "text" };
  return {
    path: place.path.slice(0, -1),
    offset: place.path[place.path.length - 1] + 1,
    type: "element",
  };
}

/** The uncut point where an empty mark stands: before what follows it, or after what precedes it. */
function $pointAfterMarkEdge(
  mark: ElementNode,
  places: Map<NodeKey, Place>,
): UncutPoint | undefined {
  const next = mark.getNextSibling();
  if (next) return $pointBefore(next, places);
  const previous = mark.getPreviousSibling();
  if (previous) return $pointAfter(previous, places);
  const parent = mark.getParent();
  return parent ? $elementPoint(parent, 0, places) : undefined;
}

/** The uncut point of the live element point `offset` in `element`. */
function $elementPoint(
  element: ElementNode,
  offset: number,
  places: Map<NodeKey, Place>,
): UncutPoint | undefined {
  const child = element.getChildAtIndex(offset);
  if (child) return $pointBefore(child, places);
  const last = element.getLastChild();
  if (last) return $pointAfter(last, places);
  if ($isTypedMarkNode(element)) return $pointAfterMarkEdge(element, places);
  const place = $isRootNode(element) ? { path: [], offset: 0 } : places.get(element.getKey());
  return place && { path: place.path, offset: 0, type: "element" };
}

/** The uncut point of live `point`. */
function $uncutPoint(point: PointType, places: Map<NodeKey, Place>): UncutPoint | undefined {
  const node = point.getNode();
  if (point.type === "text") {
    const place = places.get(node.getKey());
    return place && { path: place.path, offset: place.offset + point.offset, type: "text" };
  }
  return $isElementNode(node) ? $elementPoint(node, point.offset, places) : undefined;
}

/** Whether `node` carries a state a hold or a cut puts on a node. */
function $hasAnnotationState(node: LexicalNode): boolean {
  const state = node.exportJSON()[NODE_STATE_KEY];
  return !!state && Object.keys(state).some((key) => ANNOTATION_STATE_KEYS.has(key));
}

/** Whether `selection` touches anything an annotation puts in the tree: a mark, a piece, a hold. */
function $touchesAnnotations(selection: RangeSelection): boolean {
  return selection
    .getNodes()
    .some(
      (node) =>
        $isTypedMarkNode(node) ||
        node.getParents().some($isTypedMarkNode) ||
        $hasAnnotationState(node),
    );
}

/** The scratch editor each live editor's uncut copies are written in, built like it. */
const scratchEditors = new WeakMap<LexicalEditor, LexicalEditor>();

function scratchEditorOf(editor: LexicalEditor): LexicalEditor {
  let scratch = scratchEditors.get(editor);
  if (!scratch) {
    scratch = createEditor({
      namespace: editor._config.namespace,
      theme: editor._config.theme,
      nodes: [...editor._nodes.values()].map(({ klass }) => klass),
      onError: (error) => {
        throw error;
      },
    });
    scratchEditors.set(editor, scratch);
  }
  return scratch;
}

/** The node at `path` of `state`'s root. Read inside `state`. */
function $nodeAt(path: readonly number[]): LexicalNode | undefined {
  let node: LexicalNode | null = $getRoot();
  for (const index of path) node = $isElementNode(node) ? node.getChildAtIndex(index) : null;
  return node ?? undefined;
}

/**
 * Every flavor a copy of `selection` writes, as the same selection in the document with no
 * annotation writes it ({@link $serializeUncut}); `undefined` when the selection touches nothing an
 * annotation puts in the tree, so the copy is the editor's own. Read-only: the live editor is
 * only read, and nothing of it is written.
 */
export function $uncutClipboardData(
  editor: LexicalEditor,
  selection: RangeSelection,
): LexicalClipboardData | undefined {
  if (!$touchesAnnotations(selection)) return undefined;
  const anchorBlock = $blockIndex(selection.anchor);
  const focusBlock = $blockIndex(selection.focus);
  const { children, places } = $serializeUncut(
    Math.min(anchorBlock, focusBlock),
    Math.max(anchorBlock, focusBlock),
  );
  const anchor = $uncutPoint(selection.anchor, places);
  const focus = $uncutPoint(selection.focus, places);
  if (!anchor || !focus) return undefined;
  const scratch = scratchEditorOf(editor);
  const state: EditorState = scratch.parseEditorState({
    root: { ...$getRoot().exportJSON(), children },
  });
  return state.read(
    () => {
      const anchorNode = $nodeAt(anchor.path);
      const focusNode = $nodeAt(focus.path);
      if (!anchorNode || !focusNode) return undefined;
      const uncut = $createRangeSelection();
      uncut.anchor.set(anchorNode.getKey(), anchor.offset, anchor.type);
      uncut.focus.set(focusNode.getKey(), focus.offset, focus.type);
      return $getClipboardDataFromSelection(uncut);
    },
    { editor: scratch },
  );
}
