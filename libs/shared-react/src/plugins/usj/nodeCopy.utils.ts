/**
 * The node-copy format a hidden-marker view's copy writes and its paste reads: the selected nodes
 * as Lexical serializes them (`{ namespace, nodes }`), on the {@link LEXICAL_CLIPBOARD_TYPE}
 * flavor and in an html attribute ({@link NODE_COPY_HTML_ATTRIBUTE}) that an async clipboard read
 * does return.
 *
 * Writers: {@link $hiddenViewLexicalFlavor} (the serialization) and {@link htmlWithNodeCopy} (the
 * html carrier). Readers: {@link nodeCopyIn}, {@link withoutNodeCopy} and
 * {@link $nodesFromNodeCopy}. Namespaces: {@link HIDDEN_VIEW_CLIPBOARD_NAMESPACE} and
 * {@link MARKER_VIEW_CLIPBOARD_NAMESPACE}. A change to the format belongs in this module, so the
 * writer and its readers change together.
 */
import { $sliceSelectedTextNodeContent } from "@lexical/selection";
import { $generateNodesFromSerializedNodes } from "@lexical/clipboard";
import {
  $getRoot,
  $isElementNode,
  $isTextNode,
  LexicalNode,
  LineBreakNode,
  NODE_STATE_KEY,
  NodeKey,
  RangeSelection,
  SerializedLexicalNode,
  TabNode,
  TextNode,
} from "lexical";
import {
  $isGutterMarkerNode,
  $isUnknownNode,
  BookNode,
  CharNode,
  ImmutableChapterNode,
  ImmutableTableCellNode,
  ImmutableTableNode,
  ImmutableTableRowNode,
  ImmutableTypedTextNode,
  ImmutableUnmatchedNode,
  ImpliedParaNode,
  isSomeSerializedParaNode,
  LoggerBasic,
  MilestoneNode,
  NoteNode,
  ParaNode,
  SomeSerializedParaNode,
  TypedMarkNode,
  UnknownNode,
  verseBlockSourceState,
} from "shared";
import { ImmutableNoteCallerNode } from "../../nodes/usj/ImmutableNoteCallerNode";
import { ImmutableVerseNode } from "../../nodes/usj/ImmutableVerseNode";
import {
  $paragraphSelectionStartsInside,
  startsMidParagraphState,
} from "./bookAndChapterLines.utils";
import { $rangeReachesIntoOpaqueBlock } from "./OpaqueBlockGuardPlugin";

/** The clipboard flavor Lexical writes its own node copy to, and reads one from. */
export const LEXICAL_CLIPBOARD_TYPE = "application/x-lexical-editor";

/**
 * The html attribute a hidden-marker view's copy holds its node copy in ({@link htmlWithNodeCopy}):
 * `navigator.clipboard.read()`, which Ctrl+V and every Paste command start with, returns no custom
 * flavor, but it returns html with its `data-*` attributes.
 */
export const NODE_COPY_HTML_ATTRIBUTE = "data-platform-editor-node-copy";

/**
 * `html` inside an inline element holding `nodeCopy` in {@link NODE_COPY_HTML_ATTRIBUTE}; what it
 * shows does not change. Inline, because Lexical's html import makes a paragraph of a block
 * element's inline children, so another program's copy of this html would paste differently.
 *
 * The attribute holds all of the node copy, a hidden construct's text included, for any program
 * that reads the html to see. Chromium's own paste into an editable element drops it, so a copy
 * that went through such an editor no longer carries it.
 *
 * @param html - The html the copy shows.
 * @param nodeCopy - The node copy, as written to {@link LEXICAL_CLIPBOARD_TYPE}.
 */
export function htmlWithNodeCopy(html: string, nodeCopy: string): string {
  // The browser's own serializer escapes the attribute value. The closing tag is cut from the end:
  // a serializer may leave `<` unescaped in an attribute, so the value can itself hold `</span>`.
  const carrier = document.createElement("span");
  carrier.setAttribute(NODE_COPY_HTML_ATTRIBUTE, nodeCopy);
  const openingTag = carrier.outerHTML.slice(0, -"</span>".length);
  return `${openingTag}${html}</span>`;
}

/**
 * The namespace a hidden-marker view (`markerMode: "hidden"`) tags its node copy
 * ({@link LEXICAL_CLIPBOARD_TYPE}) with. Every editor shares one Lexical namespace, so Lexical's
 * own paste would rebuild a copy from any view in any other; a view family reads a node copy only
 * from its own family, and a copy from the other one through its html or plain text.
 */
export const HIDDEN_VIEW_CLIPBOARD_NAMESPACE = "platformEditor/hidden-markers";

/**
 * The namespace a view that shows markers leaves on its node copy ({@link LEXICAL_CLIPBOARD_TYPE}):
 * Lexical's default, which only a hidden-marker view changes
 * ({@link HIDDEN_VIEW_CLIPBOARD_NAMESPACE}). A paste carrying it, or
 * {@link MARKER_TEXT_HTML_ATTRIBUTE} on its html, has text flavors that are USFM or show their
 * markers, so a hidden-marker view strips their `\` tokens rather than treating them as typed.
 */
export const MARKER_VIEW_CLIPBOARD_NAMESPACE = "platformEditor";

/**
 * A transfer reading as `data` but for the types in `overrides`; a type overridden with `""` is
 * left out of its `types`. Lexical reads `getData` from a transfer it inserts, and its paste
 * handler `types` and `files` too; a real `DataTransfer` cannot be constructed everywhere this
 * runs.
 */
export function transferWith(
  data: Pick<DataTransfer, "getData" | "types" | "files">,
  overrides: { [type: string]: string },
): DataTransfer {
  return {
    getData: (type: string) => overrides[type] ?? data.getData(type),
    types: (data.types ?? []).filter((type) => overrides[type] !== ""),
    files: data.files ?? [],
  } as Pick<DataTransfer, "getData" | "types" | "files"> as DataTransfer;
}

/**
 * The node copy a hidden-marker view's copy of `selection` writes, to the
 * `application/x-lexical-editor` flavor and to an attribute of its html: the selected nodes as
 * Lexical serializes them, tagged {@link HIDDEN_VIEW_CLIPBOARD_NAMESPACE} so that only a
 * hidden-marker view reads them back (`UnstorableTextPlugin`, and `StructureKeyboardPlugin`
 * under protected structure). A paste of it reproduces the copy exactly: attributes, notes and
 * figures included.
 *
 * It differs from Lexical's own serialization (`$getLexicalContent`) four times:
 * - it holds no gutter marker glyph: a glyph is the view's reading aid, and
 *   `ParaMarkerPrefixGuardPlugin` builds one for each pasted paragraph;
 * - it holds every `UnknownNode` with no children the selection covers. Here every content-less
 *   construct is one — a caption-less figure, an optional break — since these views build no
 *   display children for a construct; `UnknownNode.excludeFromCopy` leaves it out of Lexical's
 *   serialization so that Standard view's two carriers agree, and a cut would then lose it;
 * - it holds the block-verse layout's paragraphs as the document has them, not as the layout cuts
 *   them to put each verse on a row ({@link rejoinVerseBlockFragments});
 * - a paragraph the selection starts partway into, after some of its text, says so
 *   (`startsMidParagraphState`), so a paste that puts it before a chapter line joins it to the line
 *   there, as a paste joins it to the line at the caret anywhere else.
 *
 * `undefined` — so a paste takes the html or plain text — when nothing is selected, and when an end
 * of the selection lies inside an opaque construct (a node copy cannot carry part of one; it would
 * carry it whole). A selection across a book or chapter line, such as Select All, carries that line
 * like any other: a hidden-marker view's paste inserts no book or chapter line from any flavor
 * (`$removeBookAndChapterLines`, shared-react), so a paste never duplicates one.
 *
 * Read-only: call inside a copy or cut command handler.
 */
export function $hiddenViewLexicalFlavor(selection: RangeSelection): string | undefined {
  if (selection.isCollapsed() || $rangeReachesIntoOpaqueBlock(selection)) return undefined;
  const selectedKeys = new Set(selection.getNodes().map((node) => node.getKey()));
  const startParagraph = $paragraphSelectionStartsInside(selection);
  const copiedNodes: SerializedLexicalNode[] = [];
  for (const child of $getRoot().getChildren())
    $appendToNodeCopy(selection, selectedKeys, child, copiedNodes, startParagraph);
  const nodes = rejoinVerseBlockFragments(copiedNodes);
  if (nodes.length === 0) return undefined;
  return JSON.stringify({ namespace: HIDDEN_VIEW_CLIPBOARD_NAMESPACE, nodes });
}

/**
 * Appends `node`'s serialization to `target` as Lexical's own node copy does (`@lexical/clipboard`'s
 * `$appendNodesToJSON`): a selected node with its selected descendants, a text node sliced to the
 * selection, and in place of an unselected or excluded element, its selected descendants. Leaves
 * out a gutter marker glyph, keeps a childless `UnknownNode` the selection covers, and marks
 * `startParagraph`, the paragraph the selection starts partway into (see
 * {@link $hiddenViewLexicalFlavor}).
 *
 * @returns Whether `node` itself was selected.
 */
function $appendToNodeCopy(
  selection: RangeSelection,
  selectedKeys: Set<NodeKey>,
  node: LexicalNode,
  target: SerializedLexicalNode[],
  startParagraph: LexicalNode | undefined,
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
        $appendToNodeCopy(selection, selectedKeys, child, serializedChildren, startParagraph) &&
        !isIncluded &&
        $isElementNode(node) &&
        node.extractWithChild(child, selection, "clone")
      )
        isIncluded = true;
  if (isIncluded && !isExcluded) {
    if (startParagraph && node.is(startParagraph))
      serialized[NODE_STATE_KEY] = {
        ...serialized[NODE_STATE_KEY],
        [startsMidParagraphState.key]: true,
      };
    target.push(serialized);
  } else target.push(...serializedChildren);
  return isIncluded;
}

/**
 * Writes the block-verse layout's paragraph fragments (`verseBlockSourceState`) back as the
 * paragraphs they were cut from: consecutive fragments of one source paragraph become one
 * paragraph, without the layout's state. The `VerseBlockNode` around them is already gone
 * (`excludeFromCopy`), and a unit without that state stays as it is, so a stanza break or a heading
 * stays its own paragraph.
 *
 * A selection that stays within one source paragraph comes back as that paragraph's selected
 * content alone, with no paragraph around it: what a node copy of such a range holds in
 * paragraph-structure.
 */
function rejoinVerseBlockFragments(nodes: SerializedLexicalNode[]): SerializedLexicalNode[] {
  const rejoined: SerializedLexicalNode[] = [];
  let open: { source: number; paragraph: SomeSerializedParaNode } | undefined;
  for (const node of nodes) {
    const source = verseBlockSourceOf(node);
    if (source === undefined || !isSomeSerializedParaNode(node)) {
      open = undefined;
      rejoined.push(node);
    } else if (open?.source === source) {
      open.paragraph.children.push(...node.children);
    } else {
      open = { source, paragraph: withoutVerseBlockSource(node) };
      rejoined.push(open.paragraph);
    }
  }
  return open && rejoined.length === 1 && nodes.length > 1 ? open.paragraph.children : rejoined;
}

/** The source paragraph a serialized fragment was cut from, if it is one. */
function verseBlockSourceOf(node: SerializedLexicalNode): number | undefined {
  const source = node[NODE_STATE_KEY]?.[verseBlockSourceState.key];
  return typeof source === "number" ? source : undefined;
}

/** A copy of `paragraph` without `verseBlockSourceState`, with its own children array to add to. */
function withoutVerseBlockSource(paragraph: SomeSerializedParaNode): SomeSerializedParaNode {
  const { [NODE_STATE_KEY]: nodeState, ...rest } = paragraph;
  const { [verseBlockSourceState.key]: _source, ...otherState } = nodeState ?? {};
  return {
    ...rest,
    children: [...paragraph.children],
    ...(Object.keys(otherState).length > 0 ? { [NODE_STATE_KEY]: otherState } : {}),
  };
}

/**
 * The serialized nodes of the node copy in `data`, when it is tagged `namespace`; otherwise
 * `undefined`. A paste the browser runs itself carries the node copy as a flavor
 * ({@link LEXICAL_CLIPBOARD_TYPE}), and one an async clipboard read delivers carries it in its html
 * ({@link NODE_COPY_HTML_ATTRIBUTE}); html that does not name that attribute is not parsed. Read it
 * before sanitizing the html, whose attribute is not a sanitizer's to keep.
 *
 * @param data - The pasted transfer; only `getData` is read.
 * @param namespace - The namespace the copy must be tagged with.
 */
export function nodeCopyIn(
  data: Pick<DataTransfer, "getData">,
  namespace: string,
): SerializedLexicalNode[] | undefined {
  const payload = parsedNodeCopy(data);
  return payload?.namespace === namespace ? payload.nodes : undefined;
}

/**
 * `data` without its node copy, flavor or html attribute ({@link nodeCopyIn}), whatever it holds, so
 * a paste takes the html or plain text instead; `data` itself when it carries none.
 *
 * @param data - The pasted transfer; the result reads only `getData` from it.
 */
export function withoutNodeCopy(data: DataTransfer): DataTransfer {
  const html = data.getData("text/html");
  const htmlHoldsCopy = html.includes(NODE_COPY_HTML_ATTRIBUTE);
  if (!htmlHoldsCopy && !data.getData(LEXICAL_CLIPBOARD_TYPE)) return data;
  return transferWith(data, {
    [LEXICAL_CLIPBOARD_TYPE]: "",
    "text/html": htmlHoldsCopy ? htmlWithoutNodeCopy(html) : html,
  });
}

/**
 * `html` as it was before {@link htmlWithNodeCopy} wrapped it: each element holding
 * {@link NODE_COPY_HTML_ATTRIBUTE} replaced by its children. So html that showed nothing is empty
 * again, and a paste takes the plain text, as it would have.
 */
function htmlWithoutNodeCopy(html: string): string {
  const dom = new DOMParser().parseFromString(html, "text/html");
  dom
    .querySelectorAll(`[${NODE_COPY_HTML_ATTRIBUTE}]`)
    .forEach((carrier) => carrier.replaceWith(...carrier.childNodes));
  return dom.body.hasChildNodes() ? dom.documentElement.outerHTML : "";
}

/**
 * The nodes a node copy's serialized nodes ({@link nodeCopyIn}) make, or `undefined` when it makes
 * none: it is empty, or an entry cannot be made into a node (a type this editor does not register,
 * an entry that is not a node at all, an `importJSON` that throws). Any program can write the
 * flavor, so a paste then goes on as if it carried no node copy, as Lexical's own paste does.
 *
 * It also makes none when an entry, at any depth, is of a type a hidden-marker view's document
 * never holds ({@link HIDDEN_VIEW_NODE_COPY_TYPES}), such as the root or a marker. Any web page can
 * put a node copy in its html, and such an entry would crash the editor or show text the view never
 * saves. The types are checked before any node is made, because making some of them changes the
 * document (`RootNode.importJSON` returns the live root).
 *
 * Mutating (it creates nodes): call inside an update.
 *
 * @param serialized - The node copy's serialized nodes.
 * @param logger - Where an unreadable node copy is logged, at `warn`.
 */
export function $nodesFromNodeCopy(
  serialized: SerializedLexicalNode[],
  logger?: LoggerBasic,
): LexicalNode[] | undefined {
  if (serialized.length === 0) return undefined;
  const foreignType = typeOutsideHiddenView(serialized);
  if (foreignType !== undefined) {
    logger?.warn(
      `A pasted node copy holds a "${foreignType}" node, which a view that hides markers never holds, so its html or plain text goes in instead`,
    );
    return undefined;
  }
  try {
    const nodes = $generateNodesFromSerializedNodes(serialized);
    if (nodes.some((node) => node.isAttached()))
      throw new Error("a node it makes is already in the document");
    return nodes.length > 0 ? nodes : undefined;
  } catch (error) {
    logger?.warn(
      `A pasted node copy could not be read, so its html or plain text goes in instead: ${String(error)}`,
    );
    return undefined;
  }
}

/**
 * The Lexical node types a hidden-marker view's document holds, so the only ones its node copy
 * ({@link $hiddenViewLexicalFlavor}) can hold. Left out: the root; the marker, editable chapter
 * and verse, and attribute-run nodes that only views showing markers build; and the block-verse
 * layout's wrapper, which a copy leaves out.
 */
const HIDDEN_VIEW_NODE_COPY_TYPES: ReadonlySet<string> = new Set([
  BookNode.getType(),
  CharNode.getType(),
  ImmutableChapterNode.getType(),
  ImmutableNoteCallerNode.getType(),
  ImmutableTableCellNode.getType(),
  ImmutableTableNode.getType(),
  ImmutableTableRowNode.getType(),
  ImmutableTypedTextNode.getType(),
  ImmutableUnmatchedNode.getType(),
  ImmutableVerseNode.getType(),
  ImpliedParaNode.getType(),
  LineBreakNode.getType(),
  MilestoneNode.getType(),
  NoteNode.getType(),
  ParaNode.getType(),
  TabNode.getType(),
  TextNode.getType(),
  TypedMarkNode.getType(),
  UnknownNode.getType(),
]);

/** The first type in `serialized`, at any depth, outside {@link HIDDEN_VIEW_NODE_COPY_TYPES}, or
 * `undefined` when every entry's type is in it. */
function typeOutsideHiddenView(serialized: readonly unknown[]): string | undefined {
  for (const entry of serialized) {
    if (typeof entry !== "object" || entry === null) return String(entry);
    const type = "type" in entry ? entry.type : undefined;
    if (typeof type !== "string" || !HIDDEN_VIEW_NODE_COPY_TYPES.has(type)) return String(type);
    const children = "children" in entry ? entry.children : undefined;
    if (children === undefined) continue;
    if (!Array.isArray(children)) return type;
    const childType = typeOutsideHiddenView(children);
    if (childType !== undefined) return childType;
  }
  return undefined;
}

/** The node copy in `data`, from its flavor or its html, or `undefined` when there is none or it is
 * unreadable. */
function parsedNodeCopy(
  data: Pick<DataTransfer, "getData">,
): { namespace: unknown; nodes: SerializedLexicalNode[] } | undefined {
  return (
    nodeCopyFromJson(data.getData(LEXICAL_CLIPBOARD_TYPE)) ??
    nodeCopyFromJson(nodeCopyJsonInHtml(data.getData("text/html")))
  );
}

/** What `html` holds in {@link NODE_COPY_HTML_ATTRIBUTE}. An inert parse: it runs nothing `html`
 * holds and loads nothing it points at. */
function nodeCopyJsonInHtml(html: string): string | undefined {
  if (!html.includes(NODE_COPY_HTML_ATTRIBUTE)) return undefined;
  return (
    new DOMParser()
      .parseFromString(html, "text/html")
      .querySelector(`[${NODE_COPY_HTML_ATTRIBUTE}]`)
      ?.getAttribute(NODE_COPY_HTML_ATTRIBUTE) ?? undefined
  );
}

/** A node copy as Lexical writes it, from its JSON, or `undefined` when it does not read as one. */
function nodeCopyFromJson(
  json: string | undefined,
): { namespace: unknown; nodes: SerializedLexicalNode[] } | undefined {
  if (!json) return undefined;
  try {
    const payload: unknown = JSON.parse(json);
    if (
      payload &&
      typeof payload === "object" &&
      "namespace" in payload &&
      "nodes" in payload &&
      Array.isArray(payload.nodes)
    )
      return { namespace: payload.namespace, nodes: payload.nodes as SerializedLexicalNode[] };
  } catch {
    // Unreadable: Lexical's own paste falls through to html and plain text too.
  }
  return undefined;
}
