import { $isSomeVerseNode } from "../../../nodes/usj/node-react.utils";
import { hasStandardViewWhitespace, ViewOptions } from "../../../views/view-options.utils";
import { $blockToUsj, $getBlockUnits, $usjToBlock } from "./blockVerseLocations.utils";
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
  $isRootNode,
  $isTextNode,
  ElementNode,
  LexicalNode,
  RangeSelection,
  TextNode,
} from "lexical";
import {
  $chapterGlyphTextNode,
  $getLogicalContentItems,
  $getLogicalIndexOfChild,
  $getLogicalParent,
  $getLogicalPointBeforeNode,
  $getLogicalPointFromElementPoint,
  $getLogicalTextLocation,
  $getTextNodeAtLogicalOffset,
  $isBookNode,
  $isChapterNode,
  $isCharNode,
  $isImmutableTableCellNode,
  $isImmutableTableRowNode,
  $isImmutableTypedTextNode,
  $isImpliedParaNode,
  $isMarkerNode,
  $isMilestoneNode,
  $isNestedCharNode,
  $isNoteNode,
  $isParaNode,
  $isSomeChapterNode,
  $isTypedMarkNode,
  $isUnknownNode,
  $isVerseBlockNode,
  $isVerseNode,
  $isVisibleMarkerNode,
  $noteEditableCallerNode,
  $ownerOfRunPiece,
  $shouldIgnoreNodeForContentIndexes,
  closingMarkerText,
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
  unknownUsjAttributeName,
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
 * @param viewOptions - The editor's view options, which decide how its text maps to USJ offsets
 *   (see {@link $getNodeFromLocation}).
 * @returns A new editor RangeSelection object if the conversion is successful, or `undefined` if
 *   the required nodes or offsets cannot be found.
 *
 * @remarks
 * - If the 'end' property of the selection is undefined (indicating this is a location rather than
 *   a range), it defaults to the 'start' value.
 * - If either the start or end node cannot be found, or if their offsets are undefined, the
 *   function returns undefined.
 * - In the block verse layout, `start` and `end` are first restated in that layout's own tree
 *   coordinates ({@link $usjToBlock}), since it regroups paragraphs into verse blocks and so does
 *   not share the USJ's content indexes; a location naming nothing there returns `undefined` the
 *   same way a location naming nothing in the ordinary tree does.
 */
export function $getRangeFromUsjSelection(
  selection: SelectionRange | AnnotationRange,
  viewOptions: ViewOptions | undefined,
): RangeSelection | undefined {
  let { start } = selection;
  let end = selection.end ?? start;
  // The block verse layout regroups paragraphs into verse blocks, so its tree's indexes are not the
  // USJ's: restate both ends in block-tree coordinates first. `end === start` is kept as identity —
  // the closing-marker adjustment below tells a caret from a range by it.
  if ($hasVerseBlocks()) {
    const collapsesSpaceRuns = hasStandardViewWhitespace(viewOptions);
    const units = $getBlockUnits(collapsesSpaceRuns);
    const blockStart = $usjToBlock(start, units, collapsesSpaceRuns);
    const blockEnd = end === start ? blockStart : $usjToBlock(end, units, collapsesSpaceRuns);
    if (!blockStart || !blockEnd) return undefined;
    start = blockStart;
    end = blockEnd;
  }

  // Find the start and end nodes with offsets based on the location.
  let [startNode, startOffset] = $getNodeFromLocation(start, viewOptions);
  let [endNode, endOffset] = $getNodeFromLocation(end, viewOptions);
  if (!startNode || !endNode || startOffset === undefined || endOffset === undefined)
    return undefined;

  [startNode, startOffset] = $normalizeDecoratorPoint(startNode, startOffset);
  [endNode, endOffset] = $normalizeDecoratorPoint(endNode, endOffset);
  // A range that ends where a closing marker begins ends with the content before it. Standard view
  // can show presentation-only text between the two (the space before a note's `\f*` when its last
  // char span has no closer of its own), and a range reaching over that text would let typing over
  // the selection delete it — which the marker-edit engine settles by losing the text after the
  // note. A caret there is left alone: it names the closer, and nothing is replaced.
  if (end !== start && isUsjClosingMarkerLocation(end) && end.closingMarkerOffset === 0)
    [endNode, endOffset] = $pointBeforePresentationText(
      endNode,
      endOffset,
      hasStandardViewWhitespace(viewOptions),
    );

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
 * @param viewOptions - The editor's view options, which decide how its text maps to USJ offsets
 *   (see {@link $getLocationFromNode}).
 * @returns A USJ `SelectionRange` object containing the start and end positions of the selection,
 *   or `undefined` if there is no valid range selection, or the caret sits where the block verse
 *   layout's regrouping ({@link $blockToUsj}) has nothing in the USJ to name.
 */
export function $getUsjSelectionFromEditor(
  viewOptions: ViewOptions | undefined,
): SelectionRange | undefined {
  const editorSelection = $getSelection();
  if (!editorSelection || !$isRangeSelection(editorSelection)) return;

  const units = $hasVerseBlocks()
    ? $getBlockUnits(hasStandardViewWhitespace(viewOptions))
    : undefined;
  const $locate = (node: LexicalNode, offset: number): UsjDocumentLocation | undefined => {
    const location = $getLocationFromNode(node, offset, viewOptions);
    return units
      ? $blockToUsj(location, units, (unit) => $getLocationFromNode(unit, 0, viewOptions))
      : location;
  };

  const startNode = editorSelection.isBackward()
    ? editorSelection.focus.getNode()
    : editorSelection.anchor.getNode();
  const startOffset = editorSelection.isBackward()
    ? editorSelection.focus.offset
    : editorSelection.anchor.offset;
  const start = $locate(startNode, startOffset);
  if (!start) return undefined;
  if (editorSelection.isCollapsed()) return { start };

  const endNode = editorSelection.isBackward()
    ? editorSelection.anchor.getNode()
    : editorSelection.focus.getNode();
  const endOffset = editorSelection.isBackward()
    ? editorSelection.anchor.offset
    : editorSelection.focus.offset;
  const end = $locate(endNode, endOffset);
  if (!end) return undefined;

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

/**
 * How one attribute-marker display run is spelled, and which USJ attribute of its owner it
 * carries: `\va 2\va*` is `{ markerName: "va", keyName: "altnumber" }`.
 *
 * The marker name is stated rather than read off the run KIND. The two are separate namespaces
 * that happen to spell the same string for every kind registered today, and the offset arithmetic
 * needs the marker name's length — so a kind spelled with a different marker would otherwise
 * silently take the kind's own length instead.
 */
interface AttributeMarkerRun {
  readonly markerName: string;
  readonly keyName: string;
}

/** The attribute-marker run each display-run kind carries, `undefined` for a kind that carries
 * none. Exhaustive over the registry, so a newly registered kind has to say which it is. */
const ATTRIBUTE_MARKER_RUNS: { readonly [K in DisplayRunKind]: AttributeMarkerRun | undefined } = {
  va: { markerName: "va", keyName: "altnumber" },
  vp: { markerName: "vp", keyName: "pubnumber" },
  ca: { markerName: "ca", keyName: "altnumber" },
  cp: { markerName: "cp", keyName: "pubnumber" },
  cat: { markerName: "cat", keyName: "category" },
  char: undefined,
  milestone: undefined,
  optbreak: undefined,
  separator: undefined,
  nestedGlyph: undefined,
  opaqueUnknown: undefined,
};

/** The USJ attribute an attribute marker NAME carries, derived from {@link ATTRIBUTE_MARKER_RUNS}
 * so a run's two spellings cannot drift. */
const ATTRIBUTE_KEY_BY_MARKER_NAME: ReadonlyMap<string, string> = new Map(
  Object.values(ATTRIBUTE_MARKER_RUNS).flatMap((run): [string, string][] =>
    run ? [[run.markerName, run.keyName]] : [],
  ),
);

/**
 * Whether each display-run kind's pieces carry their owner's display bytes. Exhaustive over the
 * registry, so a newly registered kind has to decide rather than defaulting to carrying none, and
 * declared in the order a scan consults the carrying kinds.
 */
const RUN_KIND_CARRIES_BYTES: { readonly [K in DisplayRunKind]: boolean } = {
  va: true,
  vp: true,
  ca: true,
  cp: true,
  cat: true,
  milestone: true,
  char: true,
  optbreak: true,
  // A separator and a nested glyph are bytes of the char span they decorate and are addressed
  // through that span's own glyph spans; an opaque unknown renders its bytes as ordinary text.
  separator: false,
  nestedGlyph: false,
  opaqueUnknown: false,
};

/** The display-run kinds whose pieces carry their owner's bytes, in the order a scan consults them. */
const BYTE_CARRYING_RUN_KINDS: readonly DisplayRunKind[] =
  // `Object.keys` widens to `string[]`; the mapped type above is what guarantees every key is one.
  (Object.keys(RUN_KIND_CARRIES_BYTES) as DisplayRunKind[]).filter(
    (kind) => RUN_KIND_CARRIES_BYTES[kind],
  );

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
 * `usjAttributeName` names each key as USJ does, for bytes that spell it under its USFM name (a
 * figure's `src` is its USJ `file`).
 */
function pipeAttributeSpans(
  text: string,
  contentStart: number,
  defaultAttributeName: string | undefined,
  usjAttributeName: (usfmName: string) => string = (usfmName) => usfmName,
): DisplayByteSpan[] {
  const spans: DisplayByteSpan[] = [];
  // `matchAll` rather than repeated `exec`: it iterates a clone, so the shared regex's `lastIndex`
  // stays 0 and a second call cannot start mid-string.
  for (const pair of text.slice(contentStart).matchAll(ATTRIBUTE_PAIR_REGEX)) {
    const name = pair[1];
    const keyName = usjAttributeName(name);
    spans.push({
      start: contentStart + pair.index,
      base: 0,
      bytes: { kind: "attributeKey", keyName },
    });
    spans.push({
      // Past the key, its `=`, and its opening quote.
      start: contentStart + pair.index + name.length + 2,
      base: 0,
      bytes: { kind: "property", property: keyName },
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
  const keyName = ATTRIBUTE_KEY_BY_MARKER_NAME.get(markerName) ?? markerName;
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

/** The USJ node a marker glyph's bytes belong to: the element it sits in (looking through an
 * annotation mark) — except the loose read-only glyphs markerMode "visible" renders AFTER a
 * milestone (`\qt-s`, `\*`), which are that milestone's. Any other glyph that follows an element is
 * its own parent's (`\f*` after the note's last `\ft`, `\wj*` after a nested `\+nd*`). Editable
 * mode wraps a milestone's glyphs in a display run, which `$runPieceOf` resolves before this is
 * asked. */
function $glyphOwner(glyph: LexicalNode): LexicalNode {
  if ($isVisibleMarkerNode(glyph)) {
    const previous = $getPreviousContentSibling(glyph);
    const text = glyph.getTextContent();
    if (
      $isMilestoneNode(previous) &&
      (text === "\\*" || text.startsWith(openingMarkerText(previous.getMarker())))
    )
      return previous;
  }
  return $getLogicalParent(glyph) ?? glyph;
}

/** The spans of an editable `MarkerNode` glyph. */
function $markerGlyphBytes(glyph: MarkerNode): DisplayBytes {
  const length = glyph.getTextContentSize();
  const piece = $runPieceOf(glyph);
  if (piece && piece.role !== "value") {
    const attributeRun = ATTRIBUTE_MARKER_RUNS[piece.kind];
    if (attributeRun) {
      const { keyName } = attributeRun;
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
    }
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

  const attributeRun = ATTRIBUTE_MARKER_RUNS[kind];
  if (attributeRun) {
    const { markerName, keyName } = attributeRun;
    return {
      owner,
      length,
      spans: [
        // The separator before the value is the space after the attribute marker, which counts
        // into that marker name's offset space.
        { start: 0, base: markerName.length, bytes: { kind: "attributeKey", keyName } },
        { start: 1, base: 0, bytes: { kind: "property", property: keyName } },
      ],
    };
  }

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
      // The bytes spell an attribute the way USFM names it, which is not always USJ's name for it.
      ...pipeAttributeSpans(text, 1, undefined, (usfmName) =>
        unknownUsjAttributeName(owner.getTag(), usfmName),
      ),
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
    // The decorator's own text size is 0, so measure the value it stands for: every offset into
    // that value then resolves to the decorator rather than falling back to another carrier.
    return {
      owner: note,
      length: note.getCaller().length,
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
  // An annotation mark around the caller is transparent in USJ, so the note is the logical parent.
  const note = $getLogicalParent(node);
  if ($isNoteNode(note) && $noteEditableCallerNode(note)?.is(node)) {
    return {
      owner: note,
      length: node.getTextContentSize(),
      spans: [
        // The caller's leading space is the space after the note's own marker, which counts into
        // that marker name's offset space.
        {
          start: 0,
          base: note.getMarker().length,
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
      // The caller can sit inside an annotation mark, which is transparent in USJ.
      if (noteCaller && (noteCaller.is(child) || child.isParentOf(noteCaller)))
        carriers.push(noteCaller);
      else if (
        $isMarkerNode(child) ||
        $isVisibleMarkerNode(child) ||
        ($isImmutableTypedTextNode(child) && child.getTextType() === "attribute") ||
        child.getType() === IMMUTABLE_NOTE_CALLER_NODE_TYPE ||
        chapterGlyph?.is(child)
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
  collapsesSpaceRuns: boolean,
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
      return $precedingTextLocation(node, collapsesSpaceRuns);
  }
}

/**
 * Whether `node` is text that has no location of its own to report — neither display bytes nor a
 * place in the logical content model — so being asked for one only makes it defer to a neighbor.
 * An empty char span's NBSP placeholder is the shape that matters: `\w |lemma="x"\w*` renders as
 * the opening glyph, the placeholder, then the attribute run. Whoever asks such a node must not
 * take its answer, because for the run's own `|` that answer comes straight back to the run, and
 * the two hops then recurse until the stack blows.
 */
function $defersToNeighbor(node: LexicalNode, collapsesSpaceRuns: boolean): boolean {
  return (
    $isTextNode(node) &&
    !$displayBytesOf(node) &&
    !$getLogicalTextLocation(node, 0, collapsesSpaceRuns)
  );
}

/** Where the byte just before `node` sits — the answer for a byte with no representation of its own
 * (the `|` opening an attribute run), which keeps counting into that byte's offset space: the end
 * of the text before it, or the end of a nested span's closing glyph. Only what comes BEFORE
 * `node` counts, even when text after it joins the same USJ string (the run between them is
 * presentation-only). */
function $precedingTextLocation(
  node: LexicalNode,
  collapsesSpaceRuns: boolean,
): UsjDocumentLocation | undefined {
  // An annotation mark around the run is transparent: step out of it to find what precedes.
  let start: LexicalNode = node;
  for (let mark = start.getParent(); !start.getPreviousSibling() && $isTypedMarkNode(mark); ) {
    start = mark;
    mark = start.getParent();
  }
  // Walk back over text that would only defer to its neighbor — the deferral points forward, at
  // this run, so taking it would cycle. Stepping strictly backwards through siblings terminates.
  let previous = start.getPreviousSibling();
  while (previous && $defersToNeighbor(previous, collapsesSpaceRuns))
    previous = previous.getPreviousSibling();
  if (!previous) return undefined;
  const last = $isElementNode(previous) ? previous.getLastDescendant() : previous;
  if (last && ($isTextNode(last) || $isDisplayByteDecorator(last))) {
    // The same deferral one level down (a wrapper whose last descendant is that placeholder).
    // Nothing here can answer, so report no preceding byte rather than following it.
    if ($defersToNeighbor(last, collapsesSpaceRuns)) return undefined;
    return $locationFromNode(last, last.getTextContentSize(), collapsesSpaceRuns);
  }
  const parent = previous.getParent();
  if (!parent) return undefined;
  return $locationFromNode(parent, previous.getIndexWithinParent() + 1, collapsesSpaceRuns);
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

/**
 * Finds the live point a USJ location names.
 *
 * @param location - The location, in the coordinates of the USJ the editor serializes to.
 * @param viewOptions - The editor's view options. In Standard view serialization collapses a run of
 *   two or more spaces to one, so a text offset past such a run is that much further along in the
 *   live text.
 * @returns The node and offset, or `[undefined, undefined]` when nothing in the tree matches.
 */
export function $getNodeFromLocation(
  location: UsjDocumentLocation,
  viewOptions: ViewOptions | undefined,
): [LexicalNode | undefined, number | undefined] {
  const collapsesSpaceRuns = hasStandardViewWhitespace(viewOptions);

  // Handle UsjTextContentLocation first (most common case)
  if (isUsjTextContentLocation(location)) {
    const jsonPathIndexes = indexesFromUsjJsonPath(location.jsonPath);
    let currentNode: LexicalNode | undefined = $getRoot();
    for (let i = 0; i < jsonPathIndexes.length; i++) {
      if (!currentNode || !$isElementNode(currentNode)) return [undefined, undefined];

      const item: LogicalContentItem | undefined = $getLogicalContentItems(
        currentNode,
        collapsesSpaceRuns,
      )[jsonPathIndexes[i]];
      if (!item) return [undefined, undefined];

      if (item.type === "text") {
        // Text items are terminal — the path must end here.
        if (i !== jsonPathIndexes.length - 1) return [undefined, undefined];
        return (
          $getTextNodeAtLogicalOffset(item, location.offset) ??
          $documentEndPoint(location, collapsesSpaceRuns) ?? [undefined, undefined]
        );
      }
      currentNode = item.node;
    }

    // The jsonPath resolved to an ElementNode (e.g. "$.content[0]", or "$" for the root): the
    // older spelling of the gap in front of that container's content item `offset`. Resolve the
    // location that gap has.
    if (currentNode && $isElementNode(currentNode)) {
      return $getNodeFromLocation(
        $boundaryLocation(currentNode, jsonPathIndexes, location.offset, collapsesSpaceRuns),
        viewOptions,
      );
    }
    return [undefined, undefined];
  }

  // The document end is spelled one past the last token's own bytes, which a glyph that carries
  // its trailing separator would otherwise take for a byte of its own.
  if (
    isUsjPropertyValueLocation(location) ||
    isUsjClosingMarkerLocation(location) ||
    isUsjClosingAttributeMarkerLocation(location)
  ) {
    const documentEnd = $documentEndPoint(location, collapsesSpaceRuns);
    if (documentEnd) return documentEnd;
  }

  // Handle UsjAttributeKeyLocation and UsjAttributeMarkerLocation BEFORE UsjMarkerLocation
  // because UsjAttributeMarkerLocation has keyName but no offsets, similar to UsjMarkerLocation.
  // Checking for keyName first ensures correct type narrowing.
  if (isUsjAttributeKeyLocation(location) || isUsjAttributeMarkerLocation(location)) {
    const node = $navigateToNode(location.jsonPath, collapsesSpaceRuns);
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
    const node = $navigateToNode(location.jsonPath, collapsesSpaceRuns);
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
    const node = $navigateToNode(location.jsonPath, collapsesSpaceRuns);
    if (!node) return [undefined, undefined];

    const point = $pointFromDisplayBytes(node, { kind: "marker" }, 0);
    if (point) return point;

    // Fallback: no glyph bytes at all (markerMode "hidden"), so position at the element's start —
    // or, with no text there to stand in front of, in front of the node itself.
    const firstChild = $isElementNode(node) ? node.getFirstChild() : null;
    if (firstChild && $isTextNode(firstChild)) return [firstChild, 0];
    return $pointBeside(node, false);
  }

  // Handle UsjClosingMarkerLocation - position within the closing marker
  if (isUsjClosingMarkerLocation(location)) {
    const node = $navigateToNode(location.jsonPath, collapsesSpaceRuns);
    if (!node) return [undefined, undefined];

    const point = $pointFromDisplayBytes(
      node,
      { kind: "closingMarker" },
      location.closingMarkerOffset,
    );
    if (point) return point;

    // Fallback: no closing glyph. The character after the closer is past the node; anything
    // before it is the end of the node's content.
    const closingLength = $closingMarkerLength(node);
    if (closingLength !== undefined && location.closingMarkerOffset >= closingLength)
      return $pointBeside(node, true);
    if (!$isElementNode(node)) return [undefined, undefined];
    const lastChild = node.getLastChild();
    if (lastChild && $isTextNode(lastChild)) return [lastChild, lastChild.getTextContent().length];
    return [node, node.getChildrenSize()];
  }

  // Handle UsjPropertyValueLocation - position within a property value (e.g., marker name)
  if (isUsjPropertyValueLocation(location)) {
    // Extract the property name from the jsonPath (e.g., "$.content[0]['marker']" -> "marker")
    const propertyMatch = location.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/);
    const propertyName = propertyMatch?.[1] ?? propertyMatch?.[2] ?? propertyMatch?.[3];

    const node = $navigateToNode(location.jsonPath, collapsesSpaceRuns);
    if (!node || propertyName === undefined) return [undefined, undefined];

    const point = $pointFromDisplayBytes(
      node,
      { kind: "property", property: propertyName },
      location.propertyOffset,
    );
    if (point) return point;

    // Fallback: the property has no bytes on screen, so position at the element's start.
    if ($isElementNode(node)) {
      const firstChild = node.getFirstChild();
      if (firstChild && $isTextNode(firstChild)) return [firstChild, 0];
      return [node, 0];
    }
    // A leaf marker's property (a verse's number): in front of the marker, or past it from the
    // character after the value on.
    const value = $leafPropertyValue(node, propertyName);
    return $pointBeside(node, value !== undefined && location.propertyOffset >= value.length);
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
 * The one exception is the separator an opening glyph ends in (`\b `): it is the character after
 * the marker name, where the marker's content starts, so it is the boundary after the glyph.
 */
function $normalizeDecoratorPoint(node: LexicalNode, offset: number): [LexicalNode, number] {
  if (!$isDisplayByteDecorator(node)) return [node, offset];

  const parent = node.getParent();
  if (!parent || !$isElementNode(parent)) return [node, offset];

  const indexWithinParent = node.getIndexWithinParent();
  if (indexWithinParent < 0) return [node, offset];

  const size = node.getTextContentSize();
  const isPastEnd =
    (offset >= size && offset > 0) ||
    (offset === size - 1 && TRAILING_SEPARATOR_REGEX.test(node.getTextContent()));
  return [parent, isPastEnd ? indexWithinParent + 1 : indexWithinParent];
}

/** A glyph's trailing separator: the space (or NBSP) after its marker name. */
const TRAILING_SEPARATOR_REGEX = /[ \u00A0]$/;

/**
 * `[node, offset]` moved back over any presentation-only text directly in front of it — text that
 * is neither USJ content nor display bytes of its own — to the end of whatever precedes that text.
 * Unchanged when there is none, or when the point is not at the front of its node.
 */
function $pointBeforePresentationText(
  node: LexicalNode,
  offset: number,
  collapsesSpaceRuns: boolean,
): [LexicalNode, number] {
  let previous: LexicalNode | null;
  if ($isElementNode(node)) previous = offset > 0 ? node.getChildAtIndex(offset - 1) : null;
  else if (offset === 0) previous = node.getPreviousSibling();
  else return [node, offset];

  let skipped = false;
  while (
    $isTextNode(previous) &&
    !$displayBytesOf(previous) &&
    !$getLogicalTextLocation(previous, 0, collapsesSpaceRuns)
  ) {
    previous = previous.getPreviousSibling();
    skipped = true;
  }
  if (!skipped) return [node, offset];
  const last = $isElementNode(previous) ? previous.getLastDescendant() : previous;
  return $isTextNode(last) ? [last, last.getTextContentSize()] : [node, offset];
}

function $getPointType(node: LexicalNode | undefined): "text" | "element" {
  return $isElementNode(node) ? "element" : "text";
}

/**
 * Navigates to a node using jsonPath indexes.
 * @param jsonPath - The jsonPath string to navigate.
 * @param collapsesSpaceRuns - Whether serialization collapses space runs; see
 *   `$getLogicalContentItems`.
 * @returns The node at the path, or undefined if not found.
 */
function $navigateToNode(jsonPath: string, collapsesSpaceRuns: boolean): LexicalNode | undefined {
  // Extract just the content path portion (strip property suffix if present)
  const contentPathMatch = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(jsonPath);
  const contentPath = contentPathMatch ? contentPathMatch[1] : jsonPath;

  const jsonPathIndexes = indexesFromUsjJsonPath(contentPath);
  let currentNode: LexicalNode | undefined = $getRoot();
  for (const index of jsonPathIndexes) {
    if (!currentNode || !$isElementNode(currentNode)) return undefined;

    const item: LogicalContentItem | undefined = $getLogicalContentItems(
      currentNode,
      collapsesSpaceRuns,
    )[index];
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
 * @param viewOptions - The editor's view options. In Standard view serialization collapses a run of
 *   two or more spaces to one, so a text offset past such a run reports that many fewer characters,
 *   and a point inside the run reports the character after the space it keeps.
 * @returns The appropriate UsjDocumentLocation subtype.
 */
export function $getLocationFromNode(
  node: LexicalNode,
  offset: number,
  viewOptions: ViewOptions | undefined,
): UsjDocumentLocation {
  return $locationFromNode(node, offset, hasStandardViewWhitespace(viewOptions));
}

/** {@link $getLocationFromNode} with the view's whitespace decision already made. */
function $locationFromNode(
  node: LexicalNode,
  offset: number,
  collapsesSpaceRuns: boolean,
): UsjDocumentLocation {
  // Standard view renders USFM bytes as real nodes, so a point inside one of them is a point in
  // those bytes rather than in content.
  const displayLocation = $locationFromDisplayBytes(node, offset, collapsesSpaceRuns);
  if (displayLocation) return displayLocation;

  if ($isTypedMarkNode(node)) {
    // An element point on the annotation wrapper: convert to the equivalent point as if the
    // mark did not exist.
    const childrenSize = node.getChildrenSize();
    const childAtOffset = node.getChildAtIndex(Math.min(offset, childrenSize - 1));
    if ($isTextNode(childAtOffset)) {
      const localOffset = offset >= childrenSize ? childAtOffset.getTextContentSize() : 0;
      return $locationFromNode(childAtOffset, localOffset, collapsesSpaceRuns);
    }

    // A boundary between two of the mark's children is the point in front of the child it names
    // (a verse the mark spans, a char span), exactly as if the mark were not there.
    if (childAtOffset && offset > 0 && offset < childrenSize) {
      const inFront = $locationInFrontOfMarkChild(node, offset, collapsesSpaceRuns);
      if (inFront) return inFront;
    }

    // An edge of a mark whose child there is not text (e.g. a CharNode wrapped in the mark), or an
    // empty mark (childAtOffset is null): anchor on the mark's parent at the mark's own position
    // instead of falling through to treat the mark itself as the logical parent, which would drop
    // the mark's content index. The mark contributes no content of its own, so the boundary
    // before/after it is the boundary before/after its own position in its parent — which, for a
    // mark inside the root's implied paragraph, is itself a boundary among the root's items.
    const parent = node.getParent();
    if (parent) {
      const markIndex = node.getIndexWithinParent();
      const elementOffset = offset >= childrenSize ? markIndex + 1 : markIndex;
      return $locationFromNode(parent, elementOffset, collapsesSpaceRuns);
    }
  }

  // Element selection - offset is a child index, convert to a logical point.
  if ($isElementNode(node)) {
    const childAtOffset = node.getChildAtIndex(offset);
    // A boundary in front of displayed USFM bytes is at their first byte, so it reports what those
    // bytes are rather than a content boundary. For read-only bytes it is the only point that
    // addresses them at all.
    if (childAtOffset && $displayBytesOf(childAtOffset)) {
      const byteLocation = $locationFromDisplayBytes(childAtOffset, 0, collapsesSpaceRuns);
      if (byteLocation) return byteLocation;
    }
    if (childAtOffset && $isDisplayByteDecorator(childAtOffset))
      return {
        jsonPath: usjJsonPathFromIndexes($getJsonPathIndexes(node)),
      } satisfies UsjMarkerLocation;

    // Past the container's own closing glyph is past the container.
    const previous = offset > 0 ? node.getChildAtIndex(offset - 1) : null;
    if (!childAtOffset && previous && $isClosingGlyphOf(previous, node))
      return $locationBeside(node, true, collapsesSpaceRuns);

    // An element that holds only display — a chapter's glyph and runs, an attribute display run —
    // has no content gaps of its own: a point in it is beside the element itself.
    if ($isSomeChapterNode(node) || $shouldIgnoreNodeForContentIndexes(node))
      return $locationBeside(node, offset > 0, collapsesSpaceRuns);

    // The root's implied paragraph is spliced into the root, so a point in it is among the root's
    // items.
    const container =
      $isImpliedParaNode(node) && $isRootNode(node.getParent()) ? node.getParentOrThrow() : node;
    const containerIndexes = $getJsonPathIndexes(container);
    const logicalPoint = $getLogicalPointFromElementPoint(node, offset, collapsesSpaceRuns);
    if (logicalPoint.type === "text") {
      // The boundary falls inside a coalesced USJ text item (e.g. at an annotation edge).
      return {
        jsonPath: usjJsonPathFromIndexes([...containerIndexes, logicalPoint.index]),
        offset: logicalPoint.offset,
      };
    }
    return $boundaryLocation(container, containerIndexes, logicalPoint.index, collapsesSpaceRuns);
  }

  // Regular text node - UsjTextContentLocation in coalesced-USJ coordinates.
  if ($isTextNode(node)) {
    const logicalTextLocation = $getLogicalTextLocation(node, offset, collapsesSpaceRuns);
    if (logicalTextLocation) {
      return {
        jsonPath: usjJsonPathFromIndexes([
          ...$getJsonPathIndexes(logicalTextLocation.parent),
          logicalTextLocation.index,
        ]),
        offset: logicalTextLocation.offset,
      };
    }
    // Presentation-only text (the space Standard view shows after a paragraph's `\p` glyph, where
    // a caret at the paragraph's content start sits) is no USJ content of its own: a point in it
    // is the point beside it — the start of the text after it, or the end of the bytes before it.
    const isAfter = offset > 0;
    const neighbor = isAfter ? node.getNextSibling() : node.getPreviousSibling();
    if (
      $isTextNode(neighbor) &&
      ($displayBytesOf(neighbor) || $getLogicalTextLocation(neighbor, 0, collapsesSpaceRuns))
    )
      return $locationFromNode(
        neighbor,
        isAfter ? 0 : neighbor.getTextContentSize(),
        collapsesSpaceRuns,
      );
  }

  // Anything else — presentation text with nothing beside it to defer to, a decorator the model
  // counts as one item — is the gap in front of it, or after it for a point past its start.
  return $locationBeside(node, offset > 0, collapsesSpaceRuns);
}

/**
 * The location in front of `mark`'s child at `offset`, a child with siblings on both sides, or
 * `undefined` when nothing from that child onward in the mark is logical content (the mark's back
 * edge then answers).
 */
function $locationInFrontOfMarkChild(
  mark: ElementNode,
  offset: number,
  collapsesSpaceRuns: boolean,
): UsjDocumentLocation | undefined {
  for (let index = offset; index < mark.getChildrenSize(); index++) {
    const child = mark.getChildAtIndex(index);
    if (!child) return undefined;
    // Displayed USFM bytes answer with their first byte, as they do in front of any element point.
    if ($displayBytesOf(child)) return $locationFromDisplayBytes(child, 0, collapsesSpaceRuns);
    if ($isTextNode(child) && $getLogicalTextLocation(child, 0, collapsesSpaceRuns))
      return $locationFromNode(child, 0, collapsesSpaceRuns);
    // Presentation-only children hold no position of their own: the boundary is in front of what
    // follows them.
    if ($isTextNode(child) || $shouldIgnoreNodeForContentIndexes(child)) continue;
    const logical = $getLogicalPointBeforeNode(child, collapsesSpaceRuns);
    if (!logical) return undefined;
    const indexes = $getJsonPathIndexes(logical.parent);
    if (logical.point.type === "text")
      return {
        jsonPath: usjJsonPathFromIndexes([...indexes, logical.point.index]),
        offset: logical.point.offset,
      };
    return $boundaryLocation(logical.parent, indexes, logical.point.index, collapsesSpaceRuns);
  }
  return undefined;
}

/** Whether `glyph` is `owner`'s own closing marker glyph. */
function $isClosingGlyphOf(glyph: LexicalNode, owner: LexicalNode): boolean {
  const bytes = $displayBytesOf(glyph);
  return !!bytes && bytes.owner.is(owner) && bytes.spans[0]?.bytes.kind === "closingMarker";
}

/** The location of the gap in front of `node` in its parent, or after it when `after`. */
function $locationBeside(
  node: LexicalNode,
  after: boolean,
  collapsesSpaceRuns: boolean,
): UsjDocumentLocation {
  const parent = node.getParent();
  if (!parent) return { jsonPath: usjJsonPathFromIndexes($getJsonPathIndexes(node)) };
  return $locationFromNode(
    parent,
    node.getIndexWithinParent() + (after ? 1 : 0),
    collapsesSpaceRuns,
  );
}

// ---------------------------------------------------------------------------
// Content gaps
// ---------------------------------------------------------------------------

/**
 * The location of the gap in front of `container`'s logical content item `index`, or of the end of
 * its content when `index` is past its last item.
 *
 * USJ gives `offset` a meaning only on text, so a gap is never a container plus an index: every
 * USFM position has exactly one location, and a gap is the USFM position right after it. In front
 * of a marker object that is the marker's own location (at its backslash); in front of text, the
 * text's first character; at the end of a container, see {@link $contentEndLocation}.
 *
 * @param container - The logical parent the index counts in (the root for the root's implied
 *   paragraph).
 * @param containerIndexes - `container`'s own content path.
 */
function $boundaryLocation(
  container: ElementNode,
  containerIndexes: number[],
  index: number,
  collapsesSpaceRuns: boolean,
): UsjDocumentLocation {
  const items = $getLogicalContentItems(container, collapsesSpaceRuns);
  const item = items[index];
  if (!item) return $contentEndLocation(container, containerIndexes, items, collapsesSpaceRuns);
  const jsonPath = usjJsonPathFromIndexes([...containerIndexes, index]);
  return item.type === "text"
    ? { jsonPath, offset: 0 }
    : ({ jsonPath } satisfies UsjMarkerLocation);
}

/**
 * The location of the end of `container`'s content — the USFM position after its last item:
 *
 * - The root's is the end of the document, one past the final newline, spelled on the last token
 *   ({@link $afterLastTokenLocation} plus one).
 * - A span with a closing marker ends where that closer starts (`closingMarkerOffset: 0`), unless
 *   it ends in text, whose end names the same position.
 * - A paragraph-like line ends at its newline, which has no location of its own and so is the
 *   character after the line's last token.
 * - A span with no closer (note content that ParatextData leaves unclosed, a table cell) ends
 *   where whatever follows it in its parent starts.
 */
function $contentEndLocation(
  container: ElementNode,
  containerIndexes: number[],
  items: LogicalContentItem[],
  collapsesSpaceRuns: boolean,
): UsjDocumentLocation {
  if ($isRootNode(container))
    return $afterLastTokenLocation(container, containerIndexes, 1, collapsesSpaceRuns);
  if ($closingMarkerLength(container) !== undefined) {
    const lastIndex = items.length - 1;
    const last = items[lastIndex];
    if (last?.type === "text")
      return {
        jsonPath: usjJsonPathFromIndexes([...containerIndexes, lastIndex]),
        offset: last.length,
      };
    return {
      jsonPath: usjJsonPathFromIndexes(containerIndexes),
      closingMarkerOffset: 0,
    } satisfies UsjClosingMarkerLocation;
  }
  const parent = $getLogicalParent(container);
  const indexInParent = containerIndexes[containerIndexes.length - 1];
  if ($endsLine(container) || !parent || indexInParent === undefined)
    return $afterLastTokenLocation(container, containerIndexes, 0, collapsesSpaceRuns);
  return $boundaryLocation(
    parent,
    containerIndexes.slice(0, -1),
    indexInParent + 1,
    collapsesSpaceRuns,
  );
}

/**
 * The character after `node`'s last token, addressed on that token at its length, plus `extra`:
 * text `offset: length`, a closing marker's `closingMarkerOffset: <closer length>`, and for a
 * marker with no content the last of its opening's own tokens — `['marker']` at the marker
 * name's length for an empty paragraph, a verse's or chapter's number, or its last attribute
 * marker. `extra` is 1 for the end of the document, which is one past the final newline.
 */
function $afterLastTokenLocation(
  node: LexicalNode,
  indexes: number[],
  extra: number,
  collapsesSpaceRuns: boolean,
): UsjDocumentLocation {
  const jsonPath = usjJsonPathFromIndexes(indexes);
  const closingLength = $closingMarkerLength(node);
  if (closingLength !== undefined)
    return {
      jsonPath,
      closingMarkerOffset: closingLength + extra,
    } satisfies UsjClosingMarkerLocation;

  if ($isElementNode(node)) {
    const items = $getLogicalContentItems(node, collapsesSpaceRuns);
    const lastIndex = items.length - 1;
    const last = items[lastIndex];
    const lastPath = [...indexes, lastIndex];
    if (last?.type === "text")
      return { jsonPath: usjJsonPathFromIndexes(lastPath), offset: last.length + extra };
    if (last) return $afterLastTokenLocation(last.node, lastPath, extra, collapsesSpaceRuns);
  }

  const property = (name: string, value: string): UsjPropertyValueLocation => ({
    jsonPath: propertyJsonPath(jsonPath, name),
    propertyOffset: value.length + extra,
  });
  // A number's attribute markers follow it, `\va`…`\va*` before `\vp`…`\vp*`, and a chapter's
  // `\cp` line has no closer.
  const closingAttribute = (keyName: string, markerName: string) => ({
    jsonPath,
    keyName,
    keyClosingMarkerOffset: closingMarkerText(markerName).length + extra,
  });
  if ($isSomeVerseNode(node)) {
    if (node.getPubnumber() !== undefined) return closingAttribute("pubnumber", "vp");
    if (node.getAltnumber() !== undefined) return closingAttribute("altnumber", "va");
    return property("number", node.getNumber());
  }
  if ($isSomeChapterNode(node)) {
    const pubnumber = node.getPubnumber();
    if (pubnumber !== undefined) return property("pubnumber", pubnumber);
    if (node.getAltnumber() !== undefined) return closingAttribute("altnumber", "ca");
    return property("number", node.getNumber());
  }
  if ($isBookNode(node)) return property("code", node.getCode());
  if ($isNoteNode(node)) return property("caller", node.getCaller());
  const marker = $isUnknownNode(node) ? node.getMarker() : $markerOf(node);
  // A marker-less object (the document root, a table, an optbreak) has no token to count past,
  // so the character after it can only be named as the object itself.
  if (!marker) return { jsonPath } satisfies UsjMarkerLocation;
  return property("marker", marker);
}

/** The length of `node`'s USFM closing marker, or `undefined` when it has none: a span
 * ParatextData left unclosed (`closed="false"`) and a paragraph-like marker do not. */
function $closingMarkerLength(node: LexicalNode): number | undefined {
  if ($isCharNode(node))
    return node.getUnknownAttributes()?.closed === "false"
      ? undefined
      : closingMarkerText(node.getMarker(), $isNestedCharNode(node)).length;
  if ($isNoteNode(node))
    return node.getUnknownAttributes()?.closed === "false"
      ? undefined
      : closingMarkerText(node.getMarker()).length;
  if ($isMilestoneNode(node)) return closingMarkerText("").length;
  if ($isUnknownNode(node)) {
    const { closing } = unknownDisplayParts(
      node.getTag(),
      node.getMarker(),
      node.getUnknownAttributes(),
    );
    return closing === "" ? undefined : closing.length;
  }
  return undefined;
}

/** Whether `node`'s content runs to the end of a USFM line, so a newline follows it. A verse
 * block's children are root-level lines of the USJ the block layout regroups. */
function $endsLine(node: LexicalNode): boolean {
  const parent = $getLogicalParent(node);
  return (
    $isParaNode(node) ||
    $isImpliedParaNode(node) ||
    $isBookNode(node) ||
    $isImmutableTableRowNode(node) ||
    ($isUnknownNode(node) && node.getTag() === "table:row") ||
    $isRootNode(parent) ||
    $isVerseBlockNode(parent)
  );
}

/** `node`'s marker, when it has one. */
function $markerOf(node: LexicalNode): string | undefined {
  if (
    $isParaNode(node) ||
    $isCharNode(node) ||
    $isMilestoneNode(node) ||
    $isImmutableTableRowNode(node) ||
    $isImmutableTableCellNode(node)
  )
    return node.getMarker();
  return undefined;
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

  return $pointBeside(node, true);
}

/** The element point in front of `node` in its parent, or after it when `after`. */
function $pointBeside(
  node: LexicalNode,
  after: boolean,
): [LexicalNode | undefined, number | undefined] {
  const parent = node.getParent();
  if (!parent) return [undefined, undefined];
  return [parent, node.getIndexWithinParent() + (after ? 1 : 0)];
}

/** The value of a leaf marker's property, for the leaves that carry one on screen. */
function $leafPropertyValue(node: LexicalNode, property: string): string | undefined {
  if ($isSomeVerseNode(node) || $isSomeChapterNode(node)) {
    if (property === "number") return node.getNumber();
    if (property === "altnumber") return node.getAltnumber();
    if (property === "pubnumber") return node.getPubnumber();
    if (property === "marker") return node.getMarker();
  }
  if ($isMilestoneNode(node) && property === "marker") return node.getMarker();
  return undefined;
}

/**
 * The document-end point when `location` is the end of the document — one past the final newline,
 * spelled on the last token (see {@link $contentEndLocation}) — and `undefined` otherwise.
 */
function $documentEndPoint(
  location: UsjDocumentLocation,
  collapsesSpaceRuns: boolean,
): [LexicalNode, number] | undefined {
  const root = $getRoot();
  const end = $afterLastTokenLocation(root, [], 1, collapsesSpaceRuns);
  return locationKey(end) === locationKey(location) ? [root, root.getChildrenSize()] : undefined;
}

/** A location's fields in a fixed order, so two spellings of one location compare equal. */
function locationKey(location: UsjDocumentLocation): string {
  return JSON.stringify(Object.entries(location).sort(([a], [b]) => a.localeCompare(b)));
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
 * (annotation-transparent) content indexes — the path every location's `jsonPath` is built from,
 * and the answer for a node that is not itself a position (the first node of a region, a note a
 * path has to be prefixed with).
 * @param node - The node to get the path for.
 * @returns An array of indexes representing the path from root to node.
 */
export function $getJsonPathIndexes(node: LexicalNode): number[] {
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
 * USJ locations are indexes into the source USJ's content. That layout regroups verses into
 * blocks, splitting any paragraph that spans verses into one fragment per verse, so the editor's
 * content indexes no longer line up with the USJ's on their own - every position that crosses this
 * boundary is translated through `blockVerseLocations.utils` first ({@link $blockToUsj},
 * {@link $usjToBlock}).
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
