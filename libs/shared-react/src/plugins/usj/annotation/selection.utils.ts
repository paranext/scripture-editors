import { AnnotationRange, SelectionRange } from "./selection.model";
import {
  type PropertyJsonPath,
  type UsjClosingMarkerLocation,
  type UsjDocumentLocation,
  type UsjMarkerLocation,
  type UsjPropertyValueLocation,
  getUsjDocumentLocationTypeName,
  indexesFromUsjJsonPath,
  isUsjAttributeKeyLocation,
  isUsjAttributeMarkerLocation,
  isUsjClosingAttributeMarkerLocation,
  isUsjClosingMarkerLocation,
  isUsjMarkerLocation,
  isUsjPropertyValueLocation,
  isUsjTextContentLocation,
  usjJsonPathFromIndexes,
} from "@eten-tech-foundation/scripture-utilities";
import {
  $createPoint,
  $createRangeSelection,
  $getRoot,
  $getSelection,
  $getState,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  LexicalNode,
  RangeSelection,
  TextNode,
} from "lexical";
import {
  $chapterGlyphTextNode,
  $getElementOffsetFromLogicalIndex,
  $getLogicalContentItems,
  $getLogicalIndexOfChild,
  $getLogicalParent,
  $getLogicalPointFromElementPoint,
  $getLogicalTextLocation,
  $getTextNodeAtLogicalOffset,
  $isBookNode,
  $isChapterNode,
  $isCharNode,
  $isImmutableTypedTextNode,
  $isMarkerNode,
  $isMilestoneNode,
  $isNoteNode,
  $isParaLikeNode,
  $isTypedMarkNode,
  $isUnknownNode,
  $isVerseBlockNode,
  $isVerseNode,
  $isVisibleMarkerNode,
  $noteEditableCallerNode,
  $ownerOfRunPiece,
  $shouldIgnoreNodeForContentIndexes,
  defaultMarkerAttribute,
  displayRunDescriptor,
  type DisplayRunKind,
  IMMUTABLE_NOTE_CALLER_NODE_TYPE,
  ImmutableTypedTextNode,
  type LogicalContentItem,
  MarkerNode,
  milestoneDefaultAttribute,
  openingMarkerText,
  textTypeState,
  unknownDisplayParts,
} from "shared";

/**
 * Converts a USJ SelectionRange or AnnotationRange to an editor RangeSelection.
 *
 * This function takes a USJ selection object and creates a corresponding editor RangeSelection.
 * It determines the start and end nodes based on the provided selection range and creates a new
 * RangeSelection with appropriate anchor and focus points.
 *
 * @param selection - The USJ selection range to convert. Can be either a SelectionRange or
 *   AnnotationRange.
 * @returns A new editor RangeSelection object if the conversion is successful, or `undefined` if
 *   the required nodes or offsets cannot be found.
 *
 * @remarks
 * - If the 'end' property of the selection is undefined (indicating this is a location rather than
 *   a range), it defaults to the 'start' value.
 * - If either the start or end node cannot be found, or if their offsets are undefined, the
 *   function returns undefined.
 * - In the block verse layout it always returns `undefined`: that layout splits a paragraph
 *   spanning verses across their blocks, so the editor's content indexes no longer match the
 *   source USJ's and no location can be resolved. Callers that need to tell a host why report it
 *   through their own logger - these are `$` functions with none threaded in.
 */
export function $getRangeFromUsjSelection(
  selection: SelectionRange | AnnotationRange,
): RangeSelection | undefined {
  if ($hasVerseBlocks()) return undefined;

  const { start } = selection;
  let { end } = selection;
  end ??= start;

  // Find the start and end nodes with offsets based on the location.
  let [startNode, startOffset] = $getNodeFromLocation(start);
  let [endNode, endOffset] = $getNodeFromLocation(end);
  if (!startNode || !endNode || startOffset === undefined || endOffset === undefined)
    return undefined;

  [startNode, startOffset] = $normalizeDecoratorPoint(startNode, startOffset);
  [endNode, endOffset] = $normalizeDecoratorPoint(endNode, endOffset);

  // Create selection range.
  const editorSelection = $createRangeSelection();
  editorSelection.anchor = $createPoint(startNode.getKey(), startOffset, $getPointType(startNode));
  editorSelection.focus = $createPoint(endNode.getKey(), endOffset, $getPointType(endNode));
  return editorSelection;
}

/**
 * Retrieves the current USJ selection range from the editor.
 *
 * This function extracts the selection range from the editor's current state. It handles both
 * forward and backward selections, as well as collapsed (single point) selections.
 *
 * @returns A USJ `SelectionRange` object containing the start and end positions of the selection,
 *   or `undefined` if there is no valid range selection. Always `undefined` in the block verse
 *   layout - see {@link $getRangeFromUsjSelection} for why.
 */
export function $getUsjSelectionFromEditor(): SelectionRange | undefined {
  if ($hasVerseBlocks()) return undefined;

  const editorSelection = $getSelection();
  if (!editorSelection || !$isRangeSelection(editorSelection)) return;

  const startNode = editorSelection.isBackward()
    ? editorSelection.focus.getNode()
    : editorSelection.anchor.getNode();
  const startOffset = editorSelection.isBackward()
    ? editorSelection.focus.offset
    : editorSelection.anchor.offset;
  const start = $getLocationFromNode(startNode, startOffset);
  if (editorSelection.isCollapsed()) return { start };

  const endNode = editorSelection.isBackward()
    ? editorSelection.anchor.getNode()
    : editorSelection.focus.getNode();
  const endOffset = editorSelection.isBackward()
    ? editorSelection.anchor.offset
    : editorSelection.focus.offset;
  const end = $getLocationFromNode(endNode, endOffset);

  return { start, end };
}

// ---------------------------------------------------------------------------
// USFM display bytes
// ---------------------------------------------------------------------------

/**
 * What one span of a node's display text is, in USJ terms. `precedingText` is the snap-left answer
 * for a byte whose nearest representable position is the content BEFORE the node — the `|` that
 * opens a char span's attribute run.
 */
type DisplayByteKind =
  | { kind: "marker" }
  | { kind: "closingMarker" }
  | { kind: "property"; property: string }
  | { kind: "attributeKey"; keyName: string }
  | { kind: "attributeMarker"; keyName: string }
  | { kind: "closingAttributeMarker"; keyName: string }
  | { kind: "precedingText" };

/**
 * One run of display bytes that share a USJ location. A span covers every offset from `start` up
 * to the next span's `start` (or the end of the text for the last one), and the offset it reports
 * is `base + (offset - start)` — so a span whose bytes continue an earlier offset space (the space
 * after `\ca`, which counts into the attribute marker name) starts counting from `base` rather
 * than 0.
 */
interface DisplayByteSpan {
  start: number;
  base: number;
  bytes: DisplayByteKind;
}

/** A node's display bytes: which USJ node they belong to, and what each one is. */
interface DisplayBytes {
  /** The USJ node whose bytes these are — the span's char, the run's verse, the note. */
  owner: LexicalNode;
  /** Spans in document order; the first starts at 0. */
  spans: DisplayByteSpan[];
  /** The length of the display text the spans index into. */
  length: number;
}

/** The USJ attribute each attribute-marker display run carries, keyed by the run's marker name. */
const ATTRIBUTE_MARKER_KEYS: { readonly [markerName: string]: string | undefined } = {
  va: "altnumber",
  vp: "pubnumber",
  ca: "altnumber",
  cp: "pubnumber",
  cat: "category",
};

/** The display-run kinds whose pieces carry their owner's bytes, in the order a scan consults them. */
const BYTE_CARRYING_RUN_KINDS: readonly DisplayRunKind[] = [
  "va",
  "vp",
  "ca",
  "cp",
  "cat",
  "milestone",
  "char",
  "optbreak",
];

/** One `name="value"` pair of a USFM pipe-attribute list. */
const ATTRIBUTE_PAIR_REGEX = /([^\s="|]+)="([^"]*)"/g;

/** An attribute marker opening a run of display bytes, e.g. the `\cat ` of `\cat Missions\cat*`. */
const ATTRIBUTE_MARKER_RUN_REGEX = /^[ \u00A0]*\\([^\s\\*]+)[ \u00A0]/;

/** A property path, always in bracket notation — the one spelling that survives an attribute name
 * carrying anything but word characters (`x-custom-attribute-1`), and the spelling
 * `UsjReaderWriter` emits. */
function propertyJsonPath(ownerPath: string, property: string): PropertyJsonPath {
  return `${ownerPath}['${property}']` as PropertyJsonPath;
}

/** The spans of an opening marker glyph: the `\` (plus a nested span's `+`, which has no location
 * of its own and collapses onto it), then the marker name. */
function markerGlyphSpans(prefixLength: number): DisplayByteSpan[] {
  return [
    { start: 0, base: 0, bytes: { kind: "marker" } },
    { start: prefixLength, base: 0, bytes: { kind: "property", property: "marker" } },
  ];
}

/** A single span covering a whole closing marker glyph. */
function closingGlyphSpans(keyName?: string): DisplayByteSpan[] {
  return [
    {
      start: 0,
      base: 0,
      bytes:
        keyName === undefined
          ? { kind: "closingMarker" }
          : { kind: "closingAttributeMarker", keyName },
    },
  ];
}

/** Which piece of which display run `node` is, or `undefined` when it is not a run piece. */
function $runPieceOf(
  node: LexicalNode,
): { owner: LexicalNode; kind: DisplayRunKind; role: "opener" | "value" | "closer" } | undefined {
  const reference = $ownerOfRunPiece(node);
  if (!reference) return undefined;
  const pieces = displayRunDescriptor(reference.kind).scanPieces(reference.owner);
  if (pieces.opener?.is(node)) return { ...reference, role: "opener" };
  if (pieces.value?.is(node)) return { ...reference, role: "value" };
  if (pieces.closer?.is(node)) return { ...reference, role: "closer" };
  return undefined;
}

/**
 * The spans of a USFM pipe-attribute list (`|lemma="grace" strong="G5485"`, `|grace`), starting at
 * the byte after the `|`. A key's span reaches through its `=` and opening quote (so those bytes
 * run one and two past the key), and a value's span reaches through its closing quote and the
 * space before the next key (so those run one and two past the value). A list with no
 * `name="value"` pair at all is the bare form a marker's default attribute collapses to.
 */
function pipeAttributeSpans(
  text: string,
  contentStart: number,
  defaultAttributeName: string | undefined,
): DisplayByteSpan[] {
  const spans: DisplayByteSpan[] = [];
  // `matchAll` rather than repeated `exec`: it iterates a clone, so the shared regex's `lastIndex`
  // stays 0 and a second call cannot start mid-string.
  for (const pair of text.slice(contentStart).matchAll(ATTRIBUTE_PAIR_REGEX)) {
    const name = pair[1];
    spans.push({
      start: contentStart + pair.index,
      base: 0,
      bytes: { kind: "attributeKey", keyName: name },
    });
    spans.push({
      // Past the key, its `=`, and its opening quote.
      start: contentStart + pair.index + name.length + 2,
      base: 0,
      bytes: { kind: "property", property: name },
    });
  }
  if (spans.length > 0) return spans;
  if (defaultAttributeName === undefined) return [];
  return [
    { start: contentStart, base: 0, bytes: { kind: "property", property: defaultAttributeName } },
  ];
}

/**
 * The spans of an attribute marker's display run written as ONE string — the shape an opaque block
 * renders (`\esb \cat Missions\cat*`), as opposed to the glyph/value/glyph node triplet an
 * editable owner carries. A leading space counts into the enclosing marker's own name offset space.
 */
function attributeMarkerRunSpans(text: string, enclosingMarkerLength: number): DisplayByteSpan[] {
  const opener = ATTRIBUTE_MARKER_RUN_REGEX.exec(text);
  if (!opener) return [];
  const markerName = opener[1];
  const openerStart = opener[0].length - markerName.length - 2;
  const keyName = ATTRIBUTE_MARKER_KEYS[markerName] ?? markerName;
  const spans: DisplayByteSpan[] = [];
  if (openerStart > 0)
    spans.push({
      start: 0,
      base: enclosingMarkerLength,
      bytes: { kind: "property", property: "marker" },
    });
  spans.push({ start: openerStart, base: 0, bytes: { kind: "attributeMarker", keyName } });
  spans.push({ start: openerStart + 1, base: 0, bytes: { kind: "attributeKey", keyName } });
  spans.push({ start: opener[0].length, base: 0, bytes: { kind: "property", property: keyName } });
  const closer = text.lastIndexOf(`\\${markerName}*`);
  if (closer > opener[0].length)
    spans.push({ start: closer, base: 0, bytes: { kind: "closingAttributeMarker", keyName } });
  return spans;
}

/** The USJ node an editable marker glyph's bytes belong to: the sibling it is scaffolding for, or
 * else the element it opens. */
function $glyphOwner(glyph: LexicalNode): LexicalNode {
  const parent = glyph.getParent();
  if (!parent || !$isElementNode(parent)) return glyph;

  const previousContentSibling = $getPreviousContentSibling(glyph);
  if (
    previousContentSibling &&
    !$isParaLikeNode(previousContentSibling) &&
    !$isTextNode(previousContentSibling) &&
    !$isTypedMarkNode(previousContentSibling)
  ) {
    return previousContentSibling;
  }

  return parent;
}

/** The spans of an editable `MarkerNode` glyph. */
function $markerGlyphBytes(glyph: MarkerNode): DisplayBytes {
  const length = glyph.getTextContentSize();
  const piece = $runPieceOf(glyph);
  if (piece && piece.role !== "value") {
    const keyName = ATTRIBUTE_MARKER_KEYS[piece.kind];
    if (keyName !== undefined)
      return {
        owner: piece.owner,
        length,
        spans:
          piece.role === "closer"
            ? closingGlyphSpans(keyName)
            : [
                { start: 0, base: 0, bytes: { kind: "attributeMarker", keyName } },
                { start: 1, base: 0, bytes: { kind: "attributeKey", keyName } },
              ],
      };
    if (piece.kind === "milestone")
      return {
        owner: piece.owner,
        length,
        spans: piece.role === "closer" ? closingGlyphSpans() : markerGlyphSpans(1),
      };
  }

  const syntax = glyph.getMarkerSyntax();
  return {
    owner: $glyphOwner(glyph),
    length,
    spans:
      syntax === "opening"
        ? // A nested span's `+` rides between the backslash and the marker name, so the name's
          // offsets start one byte later.
          markerGlyphSpans(glyph.getNested() ? 2 : 1)
        : closingGlyphSpans(),
  };
}

/** The spans of a read-only glyph (`ImmutableTypedTextNode` with text type "marker"). */
function $visibleGlyphBytes(glyph: ImmutableTypedTextNode): DisplayBytes {
  const text = glyph.getTextContent();
  const length = text.length;

  // An optbreak's whole `//` token is the node's marker location: USJ has nothing to say about the
  // second slash, so it collapses onto the first.
  const piece = $runPieceOf(glyph);
  if (piece?.kind === "optbreak")
    return {
      owner: piece.owner,
      length,
      spans: [{ start: 0, base: 0, bytes: { kind: "marker" } }],
    };

  const owner = $glyphOwner(glyph);

  // A book's glyph carries its code as well as its marker (`\id 2SA `).
  if ($isBookNode(owner)) {
    const markerLength = openingMarkerText(owner.getMarker()).length;
    if (text.startsWith(openingMarkerText(owner.getMarker())))
      return {
        owner,
        length,
        spans: [
          ...markerGlyphSpans(1),
          { start: markerLength + 1, base: 0, bytes: { kind: "property", property: "code" } },
        ],
      };
  }

  // An opaque block's glyphs spell whatever its kind renders, which is not always `*`-terminated
  // (`\esb` opens and `\esbe` closes a sidebar), so the bytes themselves decide which glyph it is.
  if ($isUnknownNode(owner)) {
    const parts = unknownDisplayParts(
      owner.getTag(),
      owner.getMarker(),
      owner.getUnknownAttributes(),
    );
    if (parts.closing !== "" && text === parts.closing)
      return { owner, length, spans: closingGlyphSpans() };
    if (parts.opening !== "" && text === parts.opening)
      return { owner, length, spans: markerGlyphSpans(1) };
  }

  return {
    owner,
    length,
    spans: text.endsWith("*")
      ? closingGlyphSpans()
      : markerGlyphSpans(text.startsWith("\\+") ? 2 : 1),
  };
}

/** The spans of an attribute display run's value node. */
function $attributeRunValueBytes(value: TextNode): DisplayBytes | undefined {
  const piece = $runPieceOf(value);
  if (piece?.role !== "value") return undefined;
  const { owner, kind } = piece;
  const text = value.getTextContent();
  const length = text.length;

  const keyName = ATTRIBUTE_MARKER_KEYS[kind];
  if (keyName !== undefined)
    return {
      owner,
      length,
      spans: [
        // The separator before the value is the space after the attribute marker, which counts
        // into that marker name's offset space.
        { start: 0, base: kind.length, bytes: { kind: "attributeKey", keyName } },
        { start: 1, base: 0, bytes: { kind: "property", property: keyName } },
      ],
    };

  if (kind === "char")
    return {
      owner,
      length,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        ...pipeAttributeSpans(
          text,
          1,
          $isCharNode(owner) ? defaultMarkerAttribute(owner.getMarker()) : undefined,
        ),
      ],
    };

  if (kind === "milestone" && $isMilestoneNode(owner)) {
    const markerLength = owner.getMarker().length;
    return {
      owner,
      length,
      spans: [
        // A milestone has no text content of its own, so the separator and the `|` both keep
        // counting into its marker name's offset space.
        { start: 0, base: markerLength, bytes: { kind: "property", property: "marker" } },
        ...pipeAttributeSpans(text, 2, milestoneDefaultAttribute(owner.getMarker())),
      ],
    };
  }

  return undefined;
}

/** The spans of an opaque block's folded attribute display run (an `ImmutableTypedTextNode` with
 * text type "attribute"), which spells a whole attribute-marker run or pipe-attribute list. */
function $opaqueAttributeBytes(node: ImmutableTypedTextNode): DisplayBytes | undefined {
  const owner = node.getParent();
  if (!$isUnknownNode(owner)) return undefined;
  const text = node.getTextContent();
  const length = text.length;
  const markerRun = attributeMarkerRunSpans(text, (owner.getMarker() ?? "").length);
  if (markerRun.length > 0) return { owner, length, spans: markerRun };
  if (!text.startsWith("|")) return undefined;
  return {
    owner,
    length,
    spans: [
      { start: 0, base: 0, bytes: { kind: "precedingText" } },
      ...pipeAttributeSpans(text, 1, undefined),
    ],
  };
}

/** The spans of a glyph whose text spells `\marker<separator><number><separator>` — a verse's own
 * text and a chapter's glyph child. */
function markerAndNumberSpans(marker: string, text: string): DisplayByteSpan[] | undefined {
  const openingText = openingMarkerText(marker);
  if (!text.startsWith(openingText)) return undefined;
  return [
    ...markerGlyphSpans(1),
    { start: openingText.length + 1, base: 0, bytes: { kind: "property", property: "number" } },
  ];
}

/** The USFM display bytes `node` carries, or `undefined` when it carries none. */
function $displayBytesOf(node: LexicalNode): DisplayBytes | undefined {
  if ($isMarkerNode(node)) return $markerGlyphBytes(node);
  if ($isVisibleMarkerNode(node)) return $visibleGlyphBytes(node);
  if ($isImmutableTypedTextNode(node) && node.getTextType() === "attribute")
    return $opaqueAttributeBytes(node);
  if (node.getType() === IMMUTABLE_NOTE_CALLER_NODE_TYPE) {
    const note = node.getParent();
    if (!$isNoteNode(note)) return undefined;
    // A collapsed caller renders no glyph bytes of its own; the caller value is what it stands for.
    return {
      owner: note,
      length: node.getTextContentSize(),
      spans: [{ start: 0, base: 0, bytes: { kind: "property", property: "caller" } }],
    };
  }

  if ($isVerseNode(node)) {
    const spans = markerAndNumberSpans(node.getMarker(), node.getTextContent());
    return spans ? { owner: node, length: node.getTextContentSize(), spans } : undefined;
  }

  if (!$isTextNode(node)) return undefined;

  if ($getState(node, textTypeState) === "attribute") return $attributeRunValueBytes(node);

  const parent = node.getParent();
  if ($isChapterNode(parent) && $chapterGlyphTextNode(parent)?.is(node)) {
    const spans = markerAndNumberSpans(parent.getMarker(), node.getTextContent());
    return spans ? { owner: parent, length: node.getTextContentSize(), spans } : undefined;
  }
  if ($isNoteNode(parent) && $noteEditableCallerNode(parent)?.is(node)) {
    return {
      owner: parent,
      length: node.getTextContentSize(),
      spans: [
        // The caller's leading space is the space after the note's own marker, which counts into
        // that marker name's offset space.
        {
          start: 0,
          base: parent.getMarker().length,
          bytes: { kind: "property", property: "marker" },
        },
        { start: 1, base: 0, bytes: { kind: "property", property: "caller" } },
      ],
    };
  }
  return undefined;
}

/**
 * Whether `node` renders display bytes as a decorator. Such a node holds no text of its own, so
 * the editor can put no caret inside it and the element boundary beside it is the only point that
 * addresses its bytes.
 */
function $isDisplayByteDecorator(node: LexicalNode): boolean {
  return (
    $isVisibleMarkerNode(node) ||
    ($isImmutableTypedTextNode(node) && node.getTextType() === "attribute") ||
    node.getType() === IMMUTABLE_NOTE_CALLER_NODE_TYPE
  );
}

/** Every node carrying `owner`'s own display bytes, in the order a location resolves against them
 * — the owner's glyphs first, then the pieces of the display runs that ride on it. */
function $displayByteCarriers(owner: LexicalNode): LexicalNode[] {
  const carriers: LexicalNode[] = [];
  if ($isVerseNode(owner)) carriers.push(owner);
  if ($isElementNode(owner)) {
    const chapterGlyph = $isChapterNode(owner) ? $chapterGlyphTextNode(owner) : undefined;
    const noteCaller = $isNoteNode(owner) ? $noteEditableCallerNode(owner) : undefined;
    for (const child of owner.getChildren()) {
      if (
        $isMarkerNode(child) ||
        $isVisibleMarkerNode(child) ||
        ($isImmutableTypedTextNode(child) && child.getTextType() === "attribute") ||
        child.getType() === IMMUTABLE_NOTE_CALLER_NODE_TYPE ||
        chapterGlyph?.is(child) ||
        noteCaller?.is(child)
      )
        carriers.push(child);
    }
  }
  for (const kind of BYTE_CARRYING_RUN_KINDS) {
    const descriptor = displayRunDescriptor(kind);
    if (!descriptor.ownerPredicate(owner)) continue;
    const { opener, value, closer } = descriptor.scanPieces(owner);
    if (opener) carriers.push(opener);
    if (value) carriers.push(value);
    if (closer) carriers.push(closer);
  }
  return carriers;
}

/** Whether a span's bytes are the ones a location is asking for. */
function isSameByteKind(span: DisplayByteKind, wanted: DisplayByteKind): boolean {
  if (span.kind !== wanted.kind) return false;
  if (span.kind === "property" && wanted.kind === "property")
    return span.property === wanted.property;
  if (
    (span.kind === "attributeKey" ||
      span.kind === "attributeMarker" ||
      span.kind === "closingAttributeMarker") &&
    "keyName" in wanted
  )
    return span.keyName === wanted.keyName;
  return true;
}

/**
 * The location `offset` bytes into `node`'s display text, or `undefined` when `node` carries no
 * display bytes. Snaps LEFT: the offset lands in the last span that starts at or before it, and
 * keeps counting into that span's offset space.
 */
function $locationFromDisplayBytes(
  node: LexicalNode,
  offset: number,
): UsjDocumentLocation | undefined {
  const bytes = $displayBytesOf(node);
  if (!bytes || bytes.spans.length === 0) return undefined;

  const clamped = Math.max(0, Math.min(offset, bytes.length));
  let span = bytes.spans[0];
  for (const candidate of bytes.spans) {
    if (candidate.start > clamped) break;
    span = candidate;
  }
  const within = span.base + (clamped - span.start);
  const jsonPath = usjJsonPathFromIndexes($getJsonPathIndexes(bytes.owner));

  switch (span.bytes.kind) {
    case "marker":
      return { jsonPath } satisfies UsjMarkerLocation;
    case "closingMarker":
      return { jsonPath, closingMarkerOffset: within } satisfies UsjClosingMarkerLocation;
    case "property":
      return {
        jsonPath: propertyJsonPath(jsonPath, span.bytes.property),
        propertyOffset: within,
      } satisfies UsjPropertyValueLocation;
    case "attributeKey":
      return { jsonPath, keyName: span.bytes.keyName, keyOffset: within };
    case "attributeMarker":
      return { jsonPath, keyName: span.bytes.keyName };
    case "closingAttributeMarker":
      return { jsonPath, keyName: span.bytes.keyName, keyClosingMarkerOffset: within };
    case "precedingText":
      return $precedingTextLocation(node);
  }
}

/** The end of the last text content before `node` — where a byte with no representation of its own
 * (the `|` opening an attribute run) snaps to. */
function $precedingTextLocation(node: LexicalNode): UsjDocumentLocation | undefined {
  const parent = $getLogicalParent(node);
  if (!parent) return undefined;
  const items = $getLogicalContentItems(parent);
  for (let index = items.length - 1; index >= 0; index--) {
    const item = items[index];
    if (item.type !== "text") continue;
    return {
      jsonPath: usjJsonPathFromIndexes([...$getJsonPathIndexes(parent), index]),
      offset: item.length,
    };
  }
  return undefined;
}

/**
 * The node and offset holding `owner`'s `wanted` bytes at `offset` within them, or `undefined`
 * when nothing in the tree carries them. The first carrier whose span covers the offset wins, so
 * a position two nodes can express (the end of `\ca` and the separator before its value) resolves
 * to the node whose own bytes it is.
 */
function $pointFromDisplayBytes(
  owner: LexicalNode,
  wanted: DisplayByteKind,
  offset: number,
): [LexicalNode, number] | undefined {
  for (const carrier of $displayByteCarriers(owner)) {
    const bytes = $displayBytesOf(carrier);
    if (!bytes || !bytes.owner.is(owner)) continue;
    for (let index = 0; index < bytes.spans.length; index++) {
      const span = bytes.spans[index];
      if (!isSameByteKind(span.bytes, wanted)) continue;
      const nextSpan = bytes.spans[index + 1];
      // The last span owns the position at the very end of the text; every other span stops one
      // byte before the next span starts.
      const highest = nextSpan
        ? span.base + (nextSpan.start - span.start) - 1
        : span.base + (bytes.length - span.start);
      if (offset < span.base || offset > highest) continue;
      return [carrier, span.start + (offset - span.base)];
    }
  }
  return undefined;
}

export function $getNodeFromLocation(
  location: UsjDocumentLocation,
): [LexicalNode | undefined, number | undefined] {
  // Handle UsjTextContentLocation first (most common case)
  if (isUsjTextContentLocation(location)) {
    const jsonPathIndexes = indexesFromUsjJsonPath(location.jsonPath);
    let currentNode: LexicalNode | undefined = $getRoot();
    for (let i = 0; i < jsonPathIndexes.length; i++) {
      if (!currentNode || !$isElementNode(currentNode)) return [undefined, undefined];

      const item: LogicalContentItem | undefined =
        $getLogicalContentItems(currentNode)[jsonPathIndexes[i]];
      if (!item) return [undefined, undefined];

      if (item.type === "text") {
        // Text items are terminal — the path must end here.
        if (i !== jsonPathIndexes.length - 1) return [undefined, undefined];
        return $getTextNodeAtLogicalOffset(item, location.offset) ?? [undefined, undefined];
      }
      currentNode = item.node;
    }

    // The jsonPath resolved to an ElementNode (e.g. "$.content[0]"): interpret offset as a
    // logical child boundary offset and return an element point.
    if (currentNode && $isElementNode(currentNode)) {
      return [currentNode, $getElementOffsetFromLogicalIndex(currentNode, location.offset)];
    }
    return [undefined, undefined];
  }

  // Handle UsjAttributeKeyLocation and UsjAttributeMarkerLocation BEFORE UsjMarkerLocation
  // because UsjAttributeMarkerLocation has keyName but no offsets, similar to UsjMarkerLocation.
  // Checking for keyName first ensures correct type narrowing.
  if (isUsjAttributeKeyLocation(location) || isUsjAttributeMarkerLocation(location)) {
    const node = $navigateToNode(location.jsonPath);
    if (!node) return [undefined, undefined];

    const { keyName } = location;
    const point = isUsjAttributeKeyLocation(location)
      ? $pointFromDisplayBytes(node, { kind: "attributeKey", keyName }, location.keyOffset)
      : $pointFromDisplayBytes(node, { kind: "attributeMarker", keyName }, 0);
    if (point) return point;

    return $nearestPointAfterContent(node);
  }

  // Handle UsjClosingAttributeMarkerLocation BEFORE UsjMarkerLocation/UsjClosingMarkerLocation.
  if (isUsjClosingAttributeMarkerLocation(location)) {
    const node = $navigateToNode(location.jsonPath);
    if (!node) return [undefined, undefined];

    const point = $pointFromDisplayBytes(
      node,
      { kind: "closingAttributeMarker", keyName: location.keyName },
      location.keyClosingMarkerOffset,
    );
    if (point) return point;

    return $nearestPointAfterContent(node);
  }

  // Handle UsjMarkerLocation - position at the beginning of the opening marker
  if (isUsjMarkerLocation(location)) {
    const node = $navigateToNode(location.jsonPath);
    if (!node) return [undefined, undefined];

    const point = $pointFromDisplayBytes(node, { kind: "marker" }, 0);
    if (point) return point;

    if (!$isElementNode(node)) return [undefined, undefined];
    // Fallback: no glyph bytes at all (markerMode "hidden"), so position at the element's start.
    const firstChild = node.getFirstChild();
    if (firstChild && $isTextNode(firstChild)) return [firstChild, 0];

    return [undefined, undefined];
  }

  // Handle UsjClosingMarkerLocation - position within the closing marker
  if (isUsjClosingMarkerLocation(location)) {
    const node = $navigateToNode(location.jsonPath);
    if (!node) return [undefined, undefined];

    const point = $pointFromDisplayBytes(
      node,
      { kind: "closingMarker" },
      location.closingMarkerOffset,
    );
    if (point) return point;

    if (!$isElementNode(node)) return [undefined, undefined];
    // Fallback: no closing glyph, so position at the end of the element's last text child.
    const lastChild = node.getLastChild();
    if (lastChild && $isTextNode(lastChild)) return [lastChild, lastChild.getTextContent().length];

    return [undefined, undefined];
  }

  // Handle UsjPropertyValueLocation - position within a property value (e.g., marker name)
  if (isUsjPropertyValueLocation(location)) {
    // Extract the property name from the jsonPath (e.g., "$.content[0]['marker']" -> "marker")
    const propertyMatch = location.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/);
    const propertyName = propertyMatch?.[1] ?? propertyMatch?.[2] ?? propertyMatch?.[3];

    const node = $navigateToNode(location.jsonPath);
    if (!node || propertyName === undefined) return [undefined, undefined];

    const point = $pointFromDisplayBytes(
      node,
      { kind: "property", property: propertyName },
      location.propertyOffset,
    );
    if (point) return point;

    if (!$isElementNode(node)) return [undefined, undefined];
    // Fallback: the property has no bytes on screen, so position at the element's start.
    const firstChild = node.getFirstChild();
    if (firstChild && $isTextNode(firstChild)) return [firstChild, 0];

    return [undefined, undefined];
  }

  // All UsjDocumentLocation subtypes should be handled above
  throw new Error(
    `Unsupported UsjDocumentLocation type: ${getUsjDocumentLocationTypeName(location)}. ` +
      "All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, " +
      "UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, " +
      "UsjAttributeKeyLocation, UsjAttributeMarkerLocation, and" +
      `UsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(location)}`,
  );
}

/**
 * The caret a point on read-only display bytes stands for. Those bytes render as decorator nodes,
 * which hold no text of their own — Lexical throws on a text point whose node is not a `TextNode`
 * — so every offset inside them becomes an element boundary beside them: in front of the node for
 * a point within its bytes, and after it for a point at their very end.
 *
 * Interior bytes therefore collapse onto the boundary in front of the node: a read-only glyph is
 * addressable as a whole, never byte by byte. {@link $getLocationFromNode} reports what those
 * boundaries stand for, so the surviving positions still name the bytes rather than the element.
 */
function $normalizeDecoratorPoint(node: LexicalNode, offset: number): [LexicalNode, number] {
  if (!$isDisplayByteDecorator(node)) return [node, offset];

  const parent = node.getParent();
  if (!parent || !$isElementNode(parent)) return [node, offset];

  const indexWithinParent = node.getIndexWithinParent();
  if (indexWithinParent < 0) return [node, offset];

  const isPastEnd = offset >= node.getTextContentSize() && offset > 0;
  return [parent, isPastEnd ? indexWithinParent + 1 : indexWithinParent];
}

function $getPointType(node: LexicalNode | undefined): "text" | "element" {
  return $isElementNode(node) ? "element" : "text";
}

/**
 * Navigates to a node using jsonPath indexes.
 * @param jsonPath - The jsonPath string to navigate.
 * @returns The node at the path, or undefined if not found.
 */
function $navigateToNode(jsonPath: string): LexicalNode | undefined {
  // Extract just the content path portion (strip property suffix if present)
  const contentPathMatch = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(jsonPath);
  const contentPath = contentPathMatch ? contentPathMatch[1] : jsonPath;

  const jsonPathIndexes = indexesFromUsjJsonPath(contentPath);
  let currentNode: LexicalNode | undefined = $getRoot();
  for (const index of jsonPathIndexes) {
    if (!currentNode || !$isElementNode(currentNode)) return undefined;

    const item: LogicalContentItem | undefined = $getLogicalContentItems(currentNode)[index];
    currentNode = item?.type === "element" ? item.node : undefined;
  }
  return currentNode;
}

/**
 * Gets the location from a Lexical node and offset, emitting the `UsjDocumentLocation` subtype
 * that names what those bytes are.
 *
 * A point inside displayed USFM bytes — a marker glyph, an attribute display run, the optbreak
 * token, a chapter's or verse's own glyph text, a note's caller — names the byte it sits on
 * ({@link $locationFromDisplayBytes}); everything else is a point in USJ content, reported as a
 * `UsjTextContentLocation` in coalesced-USJ coordinates.
 *
 * @param node - The Lexical node.
 * @param offset - The offset within the node's text content.
 * @returns The appropriate UsjDocumentLocation subtype.
 */
export function $getLocationFromNode(node: LexicalNode, offset: number): UsjDocumentLocation {
  // Standard view renders USFM bytes as real nodes, so a point inside one of them is a point in
  // those bytes rather than in content.
  const displayLocation = $locationFromDisplayBytes(node, offset);
  if (displayLocation) return displayLocation;

  if ($isTypedMarkNode(node)) {
    // An element point on the annotation wrapper: convert to the equivalent point as if the
    // mark did not exist.
    const childrenSize = node.getChildrenSize();
    const childAtOffset = node.getChildAtIndex(Math.min(offset, childrenSize - 1));
    if ($isTextNode(childAtOffset)) {
      const localOffset = offset >= childrenSize ? childAtOffset.getTextContentSize() : 0;
      return $getLocationFromNode(childAtOffset, localOffset);
    }

    // Non-text child (e.g. a CharNode wrapped in the mark) or an empty mark (childAtOffset is
    // null): anchor on the logical parent at the mark's own position instead of falling through
    // to treat the mark itself as the logical parent, which would drop the mark's content index.
    // The mark contributes no content of its own, so the boundary before/after it is the
    // boundary before/after its own position in the logical parent.
    // Known approximation: for a mark with several children of different kinds, an INTERIOR
    // boundary (offset between two of the mark's children) does not place the point between
    // those exact children — it snaps to the front (or back) edge of the whole mark, so the
    // reported position can be off by the length of the mark's preceding text. That is a valid
    // nearby point in the correct text run; placing it exactly would require the resolution
    // side to express points inside a mark.
    const logicalParent = $getLogicalParent(node);
    if (logicalParent?.is(node.getParent())) {
      const markIndex = node.getIndexWithinParent();
      const elementOffset = offset >= childrenSize ? markIndex + 1 : markIndex;
      return $getLocationFromNode(logicalParent, elementOffset);
    }
  }

  // Element selection - offset is a child index, convert to a logical point.
  if ($isElementNode(node)) {
    const childAtOffset = node.getChildAtIndex(offset);
    // A boundary in front of read-only display bytes is the only point that addresses them, so it
    // reports what those bytes are rather than a content boundary.
    if (childAtOffset && $isDisplayByteDecorator(childAtOffset)) {
      const byteLocation = $locationFromDisplayBytes(childAtOffset, 0);
      if (byteLocation) return byteLocation;
      return {
        jsonPath: usjJsonPathFromIndexes($getJsonPathIndexes(node)),
      } satisfies UsjMarkerLocation;
    }

    const logicalPoint = $getLogicalPointFromElementPoint(node, offset);
    if (logicalPoint.type === "text") {
      // The boundary falls inside a coalesced USJ text item (e.g. at an annotation edge).
      return {
        jsonPath: usjJsonPathFromIndexes([...$getJsonPathIndexes(node), logicalPoint.index]),
        offset: logicalPoint.offset,
      };
    }
    return {
      jsonPath: usjJsonPathFromIndexes($getJsonPathIndexes(node)),
      offset: logicalPoint.index,
    };
  }

  // Regular text node - UsjTextContentLocation in coalesced-USJ coordinates.
  if ($isTextNode(node)) {
    const logicalTextLocation = $getLogicalTextLocation(node, offset);
    if (logicalTextLocation) {
      return {
        jsonPath: usjJsonPathFromIndexes([
          ...$getJsonPathIndexes(logicalTextLocation.parent),
          logicalTextLocation.index,
        ]),
        offset: logicalTextLocation.offset,
      };
    }
  }

  // Fallback for nodes outside the logical content model (e.g. presentation-only text).
  return { jsonPath: usjJsonPathFromIndexes($getJsonPathIndexes(node)), offset };
}

/**
 * The closest point to bytes the current view does not render at all: the end of the node's
 * content, since USFM attribute bytes come after it. The answer for markerMode "visible" and
 * "hidden", where attribute markers and their values have no nodes of their own.
 */
function $nearestPointAfterContent(
  node: LexicalNode,
): [LexicalNode | undefined, number | undefined] {
  if ($isElementNode(node)) {
    const lastChild = node.getLastChild();
    if (lastChild && $isTextNode(lastChild)) return [lastChild, lastChild.getTextContent().length];
  }

  // A decorator (e.g. ImmutableChapterNode) or an element with no children: the start of what
  // follows it is the nearest point there is.
  const nextSibling = node.getNextSibling();
  if (nextSibling && $isElementNode(nextSibling)) return [nextSibling, 0];

  return [undefined, undefined];
}

function $getPreviousContentSibling(child: LexicalNode): LexicalNode | undefined {
  let sibling: LexicalNode | null = child.getPreviousSibling();
  while (sibling) {
    if (!$shouldIgnoreNodeForContentIndexes(sibling)) return sibling;
    sibling = sibling.getPreviousSibling();
  }
  return undefined;
}

/**
 * Gets the jsonPath indexes from a node by traversing up to the root using logical
 * (annotation-transparent) content indexes.
 * @param node - The node to get the path for.
 * @returns An array of indexes representing the path from root to node.
 */
function $getJsonPathIndexes(node: LexicalNode): number[] {
  const jsonPathIndexes: number[] = [];
  let current: LexicalNode | null = node;
  while (current) {
    const parent = $getLogicalParent(current);
    if (!parent) break;

    const index = $getLogicalIndexOfChild(parent, current);
    if (index >= 0) jsonPathIndexes.unshift(index);
    current = parent;
  }
  return jsonPathIndexes;
}

/**
 * Whether the document uses the block verse layout.
 *
 * USJ locations are indexes into the source USJ's content. That layout regroups verses into blocks,
 * splitting any paragraph that spans verses into one fragment per verse, so the editor's content
 * indexes no longer line up with the USJ's - and no amount of treating the block itself as
 * transparent fixes the renumbering underneath. Locations are therefore unavailable there, rather
 * than confidently wrong.
 */
function $hasVerseBlocks(): boolean {
  // Both callers run on every selection change, so this walks siblings and exits at the first
  // block rather than calling `getChildren()`, which would build an array of every root child.
  //
  // The layout is known from `ViewOptions.verseLayout`, and an editor registers `VerseBlockNode`
  // only for that layout, so `editor.hasNodes([VerseBlockNode])` looks like a cheaper answer. It
  // is not available here: `$getEditor()` needs an active *editor*, and these functions are
  // called from `editorState.read()` as well, which establishes only an active editor state.
  // Reading the layout instead would mean threading `ViewOptions` through every caller.
  for (let child = $getRoot().getFirstChild(); child; child = child.getNextSibling()) {
    if ($isVerseBlockNode(child)) return true;
  }
  return false;
}
