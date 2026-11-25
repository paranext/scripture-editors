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
import { deepEqual } from "fast-equals";
import {
  $getRoot,
  $isElementNode,
  $isTextNode,
  AnyStateConfig,
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
  authoredNbspState,
  BookNode,
  caretHostState,
  charIdState,
  CharNode,
  displayAnnotationsState,
  ImmutableChapterNode,
  ImmutableTableCellNode,
  ImmutableTableNode,
  ImmutableTableRowNode,
  ImmutableUnmatchedNode,
  ImpliedParaNode,
  isSomeSerializedParaNode,
  LoggerBasic,
  MARKER_TRAILING_SPACE_TEXT_TYPE,
  MilestoneNode,
  NODE_ATTRIBUTE_PREFIX,
  NoteNode,
  ParaNode,
  segmentState,
  SomeSerializedParaNode,
  textTypeState,
  UnknownNode,
  unmatchedGlyphText,
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
  // The carrier belongs to an inert document, which runs and loads nothing; only its markup leaves.
  const carrier = new DOMParser().parseFromString("", "text/html").createElement("span");
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
 * the editor's own, which `Editor` (platform) gives its composer and only a hidden-marker view
 * changes ({@link HIDDEN_VIEW_CLIPBOARD_NAMESPACE}). A paste carrying it, or
 * `MARKER_TEXT_HTML_ATTRIBUTE` (clipboard.utils.ts) on its html, has text flavors that are USFM or
 * show their markers, so a hidden-marker view strips their `\` tokens rather than treating them as
 * typed.
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
 * It also makes none when the copy is not one a hidden-marker view writes ({@link nodeCopyProblem}):
 * an entry, at any depth, of a type the view's document never holds (the root, a marker), in a place
 * it never holds it (a note caller outside its note, a paragraph in a paragraph), or with a field it
 * never holds (a marker that is not one, a verse number holding a space or a `\`, a styled text, an
 * attribute named for a field the save writes, a node state the editor does not define or would not
 * keep as it is), or a copy nested deeper than any document. Any web page can put a node copy in its html, and such
 * an entry could leave the editor throwing on every update, save USFM that reads back as other
 * markers, or show text the view never saves. The copy is checked before any node is made, because
 * making some types changes the document (`RootNode.importJSON` returns the live root).
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
  try {
    // Inside the try: describing a crafted entry nested deep enough overflows the stack.
    const problem = nodeCopyProblem(serialized);
    if (problem !== undefined) {
      logger?.warn(
        `A pasted node copy holds ${problem}, which a view that hides markers never holds there, so its html or plain text goes in instead`,
      );
      return undefined;
    }
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
 * How deep a node copy may nest. A hidden-marker view's own copy nests a few levels (a paragraph, a
 * char span, a note, the note's char span, its text); a deeper one is crafted, and making it, or
 * saving the document it went into, would overflow the stack.
 */
const MAX_NODE_COPY_DEPTH = 32;

/**
 * Where a node copy entry sits: at the copy's top level, or directly in an entry holding
 * paragraph-level blocks (a sidebar), inline content (a paragraph, a char span, a table cell), a
 * note's content, a table's rows or a row's cells.
 */
type Placement = "top" | "blocks" | "inline" | "note" | "table" | "row";

/** A node copy entry: one serialized node, read field by field before any node is made of it. */
interface Entry {
  readonly [field: string]: unknown;
}

/** What a hidden-marker view's document holds of one node type, and where. */
interface NodeCopyRule {
  /** Where an entry of the type may sit. */
  placements: readonly Placement[];
  /** Where the entry's children sit; a type without it holds no children, and is not an element. */
  holds?: Placement;
  /**
   * The fields the save writes for the type besides `type`, `marker` and `content`
   * (`editor-usj.adaptor.ts`, platform). The save spreads the attributes after them, so an
   * attribute of one of these names would replace the field.
   */
  savedFields?: readonly string[];
  /**
   * What is wrong with the entry's own fields, `undefined` when nothing.
   *
   * @param entry - The entry.
   * @param parent - The entry it sits in, `undefined` at the copy's top level.
   */
  fieldProblem?: (entry: Entry, parent: Entry | undefined) => string | undefined;
}

const BLOCK: readonly Placement[] = ["top", "blocks"];
const INLINE: readonly Placement[] = ["top", "inline", "note"];

/**
 * A marker name, as USFM spells one: letters, digits, `_` and `-`, starting with a letter. A space
 * or a `\` in a marker would throw when the node renders it as a class name, and save as more
 * markers than one.
 */
const MARKER_NAME = /^[A-Za-z][\w-]*$/;

/** The markers of the book, chapter and verse lines, which saved as any other construct's marker
 * read back as that line. */
const LINE_MARKERS: ReadonlySet<string> = new Set(["id", "c", "v"]);

/** A verse or chapter number: no whitespace, `\`, `/`, `|`, `*` or `"`, any of which would save as
 * text after the number, or as another marker. */
const NUMBER = /^[^\s\p{Cc}\\/|*"]*$/u;

/** A field saved as an attribute or a marker's text (a caller, a category, a `sid`): no `\`, which
 * would save as another marker, and no control character or line break. */
const FIELD = /^[^\\\p{Cc}\p{Zl}\p{Zp}]*$/u;

/** A note caller: a {@link FIELD} with no whitespace, which would save as note text. */
const CALLER = /^[^\s\\\p{Cc}]*$/u;

/** An unmatched marker: a closer (`nd*`, `+nd*`) or a lone `*`. Without its `*`, `v` would save as
 * an opening `\v`. */
const UNMATCHED_MARKER = /^\+?[\w-]*\*$/;

/** An attribute name, which saves as the name of an attribute only when it is one word. */
const ATTRIBUTE_NAME = /^[\w-]+$/;

/** The fields every type's save writes ahead of its attributes, and `style`, the marker as the USX
 * a document saves through spells it, which the USX writer writes ahead of them too. */
const ALWAYS_SAVED_FIELDS: readonly string[] = ["type", "marker", "content", "style"];

/** Names an attribute may not take, whatever the type: an object's own machinery. */
const OBJECT_KEYS: ReadonlySet<string> = new Set(["__proto__", "constructor", "prototype"]);

/** The modes a text takes (`TextNode.setMode`). */
const TEXT_MODES: ReadonlySet<unknown> = new Set(["normal", "token", "segmented"]);

/**
 * The node states (`$` of a serialized node) this editor defines, which a copy may hold. Lexical
 * keeps a state it does not know as it is, at any depth, on every later update.
 */
const NODE_STATES: ReadonlyMap<string, AnyStateConfig> = new Map(
  [
    authoredNbspState,
    caretHostState,
    charIdState,
    displayAnnotationsState,
    segmentState,
    startsMidParagraphState,
    textTypeState,
    verseBlockSourceState,
  ].map((state) => [state.key, state]),
);

/** The constructs a USJ document holds that the editor has no node of its own for, so holds in an
 * `UnknownNode` (`tag`): where each sits, and whether it holds paragraphs or inline content. */
const UNKNOWN_TAG_RULES: ReadonlyMap<string, NodeCopyRule> = new Map([
  ["figure", { placements: INLINE, holds: "inline" }],
  ["optbreak", { placements: INLINE, holds: "inline" }],
  ["ref", { placements: INLINE, holds: "inline" }],
  ["periph", { placements: BLOCK, holds: "blocks" }],
  ["sidebar", { placements: BLOCK, holds: "blocks" }],
]);

/**
 * The Lexical node types a hidden-marker view's node copy ({@link $hiddenViewLexicalFlavor}) holds,
 * where it holds them, and what their fields may hold: each field a type's `updateFromJSON` reads,
 * and each its save writes, is checked here or in {@link entryProblem}. Left out: the root; the
 * marker, editable chapter and verse, and attribute-run nodes that only views showing markers
 * build; the gutter glyphs and annotation marks a copy leaves out; and the block-verse layout's
 * wrapper, which a copy leaves out too.
 */
const NODE_COPY_RULES: ReadonlyMap<string, NodeCopyRule> = new Map<string, NodeCopyRule>([
  [
    BookNode.getType(),
    {
      placements: BLOCK,
      holds: "inline",
      savedFields: ["code"],
      fieldProblem: (entry) =>
        entry.marker !== "id" ||
        typeof entry.code !== "string" ||
        !BookNode.isValidBookCode(entry.code)
          ? "a book line that is not one"
          : undefined,
    },
  ],
  [
    ImmutableChapterNode.getType(),
    {
      placements: BLOCK,
      savedFields: ["number", "sid", "altnumber", "pubnumber"],
      fieldProblem: (entry) =>
        entry.marker === "c" ? numberProblem(entry, "a chapter") : "a chapter that is not one",
    },
  ],
  [
    ParaNode.getType(),
    {
      placements: BLOCK,
      holds: "inline",
      fieldProblem: (entry) => markerProblem(entry, "a paragraph", undefined, true),
    },
  ],
  [ImpliedParaNode.getType(), { placements: BLOCK, holds: "inline" }],
  [ImmutableTableNode.getType(), { placements: BLOCK, holds: "table" }],
  [
    ImmutableTableRowNode.getType(),
    {
      placements: ["table"],
      holds: "row",
      fieldProblem: (entry) => markerProblem(entry, "a table row", (marker) => marker !== "tr"),
    },
  ],
  [
    ImmutableTableCellNode.getType(),
    {
      placements: ["row"],
      holds: "inline",
      savedFields: ["align", "colspan"],
      fieldProblem: (entry) =>
        markerProblem(entry, "a table cell") ??
        fieldsProblem(entry, "a table cell", ["align", "colspan"]),
    },
  ],
  [
    CharNode.getType(),
    {
      placements: INLINE,
      holds: "inline",
      fieldProblem: (entry) => markerProblem(entry, "a char"),
    },
  ],
  [
    NoteNode.getType(),
    {
      placements: INLINE,
      holds: "note",
      savedFields: ["caller", "category"],
      fieldProblem: (entry) =>
        markerProblem(entry, "a note") ??
        (typeof entry.caller === "string" && CALLER.test(entry.caller)
          ? (fieldsProblem(entry, "a note", ["category"]) ??
            optionalProblem(entry, "a note", "isCollapsed", "boolean"))
          : `a note caller "${String(entry.caller)}"`),
    },
  ],
  [
    ImmutableNoteCallerNode.getType(),
    {
      placements: ["note"],
      // A caller shows its own text, while the note saves its own caller. Its preview text is
      // rebuilt from the note's content (`NoteNodePlugin`).
      fieldProblem: (entry, parent) =>
        entry.caller === parent?.caller && !("onClick" in entry)
          ? optionalProblem(entry, "a note caller", "previewText", "string")
          : "a note caller that is not its note's",
    },
  ],
  [
    ImmutableVerseNode.getType(),
    {
      placements: INLINE,
      savedFields: ["number", "sid", "altnumber", "pubnumber"],
      fieldProblem: (entry) =>
        entry.marker === "v" ? numberProblem(entry, "a verse") : "a verse that is not one",
    },
  ],
  [
    MilestoneNode.getType(),
    {
      placements: INLINE,
      savedFields: ["sid", "eid"],
      fieldProblem: (entry) =>
        markerProblem(entry, "a milestone") ??
        fieldsProblem(entry, "a milestone", ["sid", "eid"]) ??
        attributeOrderProblem(entry),
    },
  ],
  [
    ImmutableUnmatchedNode.getType(),
    {
      placements: INLINE,
      fieldProblem: (entry) =>
        typeof entry.marker === "string" &&
        UNMATCHED_MARKER.test(entry.marker) &&
        (entry.text === undefined || entry.text === unmatchedGlyphText(entry.marker))
          ? textProblem(entry, true)
          : "an unmatched marker that shows other text",
    },
  ],
  [UnknownNode.getType(), { placements: INLINE }],
  [LineBreakNode.getType(), { placements: INLINE }],
  [
    TabNode.getType(),
    {
      placements: INLINE,
      fieldProblem: (entry) => (entry.text === "\t" ? textProblem(entry) : "a tab that is text"),
    },
  ],
  [TextNode.getType(), { placements: INLINE, fieldProblem: (entry) => textProblem(entry) }],
]);

/**
 * Why `serialized` is not a node copy a hidden-marker view writes, so must not be made into nodes;
 * `undefined` when it is one. Every entry, at any depth, must be of a type the view's document
 * holds, sit where the document holds it, and hold only what the document saves and shows as it
 * saves it ({@link NODE_COPY_RULES}, {@link entryProblem}); the copy may nest no deeper than
 * {@link MAX_NODE_COPY_DEPTH}.
 */
function nodeCopyProblem(
  serialized: readonly unknown[],
  placement: Placement = "top",
  parent: Entry | undefined = undefined,
  depth = 1,
): string | undefined {
  if (depth > MAX_NODE_COPY_DEPTH) return `nesting deeper than ${MAX_NODE_COPY_DEPTH} levels`;
  for (const entry of serialized) {
    if (!isRecord(entry)) return `an entry that is not a node: ${String(entry)}`;
    const { type } = entry;
    const typeRule = typeof type === "string" ? NODE_COPY_RULES.get(type) : undefined;
    if (typeRule === undefined) return `a "${String(type)}" node`;
    const rule =
      type === UnknownNode.getType()
        ? typeof entry.tag === "string"
          ? UNKNOWN_TAG_RULES.get(entry.tag)
          : undefined
        : typeRule;
    if (rule === undefined) return `an unknown "${String(entry.tag)}" node`;
    if (!rule.placements.includes(placement))
      return `a "${type}" node ${placement === "top" ? "at the top level" : `in a "${String(parent?.type)}" node`}`;
    const problem =
      entryProblem(entry, rule) ??
      rule.fieldProblem?.(entry, parent) ??
      (type === UnknownNode.getType() && entry.marker !== undefined
        ? markerProblem(entry, "an unknown")
        : undefined);
    if (problem !== undefined) return problem;
    const { children } = entry;
    if (children === undefined) continue;
    if (!rule.holds || !Array.isArray(children)) return `a "${type}" node holding children`;
    const childProblem = nodeCopyProblem(children, rule.holds, entry, depth + 1);
    if (childProblem !== undefined) return childProblem;
  }
  return undefined;
}

/**
 * What is wrong with the fields any entry of its kind carries: its node state, its attributes, and
 * an element's own Lexical fields.
 */
function entryProblem(entry: Entry, rule: NodeCopyRule): string | undefined {
  return (
    stateProblem(entry) ??
    attributesProblem(entry, rule) ??
    (rule.holds === undefined ? undefined : elementProblem(entry))
  );
}

/**
 * How deep a node state's value may nest: as deep as display annotations (an object holding a list
 * of objects). Lexical keeps the value as it was pasted until the state is read, so a deeper one
 * would overflow the stack when the document is next serialized.
 */
const MAX_NODE_STATE_DEPTH = 3;

/**
 * What is wrong with `entry`'s node state (`$`): a state this editor does not define, or a value
 * its own `parse` would not give back as it is, or one nested deeper than
 * {@link MAX_NODE_STATE_DEPTH}.
 */
function stateProblem(entry: Entry): string | undefined {
  const state = entry[NODE_STATE_KEY];
  if (state === undefined) return undefined;
  if (!isRecord(state)) return "a node state that is not one";
  const key = Object.keys(state).find((name) => {
    const config = NODE_STATES.get(name);
    if (config === undefined) return true;
    const value = state[name];
    return nestsDeeperThan(value, MAX_NODE_STATE_DEPTH) || !deepEqual(config.parse(value), value);
  });
  return key === undefined ? undefined : `a node state "${key}"`;
}

/**
 * What is wrong with an element's Lexical fields: an alignment, indent, direction or text style its
 * paragraph would show, or give typed text, but never save.
 */
function elementProblem(entry: Entry): string | undefined {
  return (entry.format ?? "") === "" &&
    (entry.indent ?? 0) === 0 &&
    (entry.direction ?? null) === null &&
    (entry.textStyle ?? "") === "" &&
    (entry.textFormat ?? 0) === 0
    ? undefined
    : `a "${String(entry.type)}" node with a style`;
}

/**
 * What is wrong with `entry`'s marker: one that is not a {@link MARKER_NAME}, or a book, chapter or
 * verse line's ({@link LINE_MARKERS}), or one `isWrong` rejects. A marker no node class lists is
 * not wrong: a document holds a project's own markers (`\z` ones, or ones its stylesheet adds) and
 * markers a file uses outside their own kind, and a copy of them pastes them back as they were.
 *
 * @param entry - The entry.
 * @param kind - The entry's kind, as the problem names it.
 * @param isWrong - Whether the marker is wrong for this kind of entry.
 * @param allowsNone - Whether the marker may be empty: a paragraph with no marker.
 */
function markerProblem(
  entry: Entry,
  kind: string,
  isWrong: (marker: string) => boolean = () => false,
  allowsNone = false,
): string | undefined {
  const { marker } = entry;
  if (typeof marker !== "string") return `${kind} marker "${String(marker)}"`;
  if (allowsNone && marker === "") return undefined;
  return MARKER_NAME.test(marker) && !LINE_MARKERS.has(marker) && !isWrong(marker)
    ? undefined
    : `${kind} marker "${marker}"`;
}

/** What is wrong with a verse's or chapter's number and the fields it saves beside it. */
function numberProblem(entry: Entry, kind: string): string | undefined {
  return typeof entry.number === "string" && NUMBER.test(entry.number)
    ? (fieldsProblem(entry, kind, ["altnumber", "pubnumber", "sid"]) ??
        optionalProblem(entry, kind, "showMarker", "boolean"))
    : `${kind} number "${String(entry.number)}"`;
}

/** What is wrong with `entry`'s optional `keys`: one that is not a {@link FIELD}. */
function fieldsProblem(entry: Entry, kind: string, keys: readonly string[]): string | undefined {
  const key = keys.find((name) => {
    const value = entry[name];
    return value !== undefined && (typeof value !== "string" || !FIELD.test(value));
  });
  return key === undefined ? undefined : `${kind} ${key} "${String(entry[key])}"`;
}

/** What is wrong with `entry`'s optional `key`: a value not of `valueType`. */
function optionalProblem(
  entry: Entry,
  kind: string,
  key: string,
  valueType: "boolean" | "string",
): string | undefined {
  const value = entry[key];
  return value === undefined || typeof value === valueType
    ? undefined
    : `${kind} ${key} "${String(value)}"`;
}

/**
 * What is wrong with `entry`'s attributes, saved as they are named after the fields the save writes
 * for its type: a name that is not one, or is one of those fields, which it would replace; or a
 * value that is not a string.
 */
function attributesProblem(entry: Entry, rule: NodeCopyRule): string | undefined {
  const { unknownAttributes } = entry;
  if (unknownAttributes === undefined) return undefined;
  const savedFields = [...ALWAYS_SAVED_FIELDS, ...(rule.savedFields ?? [])];
  if (
    isRecord(unknownAttributes) &&
    Object.entries(unknownAttributes).every(
      ([name, value]) =>
        ATTRIBUTE_NAME.test(name) &&
        !OBJECT_KEYS.has(name) &&
        !savedFields.includes(name) &&
        (value === undefined || typeof value === "string"),
    )
  )
    return undefined;
  return `attributes ${JSON.stringify(unknownAttributes)}`;
}

/** What is wrong with a milestone's attribute order: one that is not a list of attribute names,
 * which every later update reads as one. */
function attributeOrderProblem(entry: Entry): string | undefined {
  const { attributeOrder } = entry;
  return attributeOrder === undefined ||
    (Array.isArray(attributeOrder) &&
      attributeOrder.every(
        (name) => typeof name === "string" && ATTRIBUTE_NAME.test(name) && !OBJECT_KEYS.has(name),
      ))
    ? undefined
    : `a milestone attribute order ${JSON.stringify(attributeOrder)}`;
}

/**
 * What is wrong with a text: text that is not a string; a style or format, which it would show but
 * never save; a mode or detail that is not one; a type, which marks text the save leaves out,
 * other than a note's layout spacer; or the start a save reads as a milestone's attributes and
 * leaves out.
 *
 * @param entry - The entry.
 * @param mayOmitText - Whether the entry may leave its text out: an unmatched marker's is its glyph.
 */
function textProblem(entry: Entry, mayOmitText = false): string | undefined {
  const { text } = entry;
  if (typeof text !== "string" && !(mayOmitText && text === undefined))
    return `a text "${String(text)}"`;
  const textType = isRecord(entry[NODE_STATE_KEY])
    ? entry[NODE_STATE_KEY][textTypeState.key]
    : undefined;
  if ((entry.style ?? "") !== "" || (entry.format ?? 0) !== 0) return "a text with a style";
  if (entry.mode !== undefined && !TEXT_MODES.has(entry.mode))
    return `a text mode "${String(entry.mode)}"`;
  const detail = entry.detail ?? 0;
  if (typeof detail !== "number" || !Number.isInteger(detail) || detail < 0 || detail > 3)
    return `a text detail "${String(detail)}"`;
  if (textType !== undefined && textType !== MARKER_TRAILING_SPACE_TEXT_TYPE)
    return `a text of type "${String(textType)}"`;
  if (typeof text === "string" && text.startsWith(NODE_ATTRIBUTE_PREFIX))
    return "a text that saves as attributes";
  return undefined;
}

/** Whether `value` holds objects or lists more than `levels` deep. Stops looking at that depth. */
function nestsDeeperThan(value: unknown, levels: number): boolean {
  if (typeof value !== "object" || value === null) return false;
  if (levels === 0) return true;
  return Object.values(value).some((child) => nestsDeeperThan(child, levels - 1));
}

function isRecord(value: unknown): value is Entry {
  return typeof value === "object" && value !== null && !Array.isArray(value);
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
