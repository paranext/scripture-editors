import { AnnotationRange, SelectionRange } from "./selection.model";
import {
  type PropertyJsonPath,
  type UsjClosingMarkerLocation,
  type UsjDocumentLocation,
  type UsjMarkerLocation,
  type UsjPropertyValueLocation,
  type UsjTextContentLocation,
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
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  ElementNode,
  LexicalNode,
  RangeSelection,
} from "lexical";
import {
  $getElementPointFromLogicalIndex,
  $getLogicalContentItems,
  $getLogicalIndexOfChild,
  $getLogicalParent,
  $getLogicalPointFromElementPoint,
  $getLogicalTextLocation,
  $getTextNodeAtLogicalOffset,
  $isLogicallyTransparent,
  $isMarkerNode,
  $isParaLikeNode,
  $isTypedMarkNode,
  $isVerseBlockNode,
  $isVisibleMarkerNode,
  $shouldIgnoreNodeForContentIndexes,
  ImmutableTypedTextNode,
  type LogicalContentItem,
  type LogicalPointAffinity,
  MarkerNode,
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

  // Find the start and end nodes with offsets based on the location. A boundary on a block break
  // the USJ does not record resolves into the selected content: the start forward, the end (and a
  // caret) backward.
  const isCaret = areLocationsEqual(start, end);
  let [startNode, startOffset] = $getNodeFromLocation(start, isCaret ? "backward" : "forward");
  let [endNode, endOffset] = $getNodeFromLocation(end, "backward");
  if (!startNode || !endNode || startOffset === undefined || endOffset === undefined)
    return undefined;

  [startNode, startOffset] = $normalizeVisibleMarkerPoint(startNode, startOffset);
  [endNode, endOffset] = $normalizeVisibleMarkerPoint(endNode, endOffset);

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

function areLocationsEqual(a: UsjDocumentLocation, b: UsjDocumentLocation): boolean {
  if (a === b) return true;
  const aEntries = Object.entries(a);
  const bValues = new Map<string, unknown>(Object.entries(b));
  return (
    aEntries.length === bValues.size && aEntries.every(([key, value]) => bValues.get(key) === value)
  );
}

function $getNodeFromLocation(
  location: UsjDocumentLocation,
  affinity: LogicalPointAffinity,
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
        return (
          $getTextNodeAtLogicalOffset(item, location.offset, affinity) ?? [undefined, undefined]
        );
      }
      currentNode = item.node;
    }

    // The jsonPath resolved to an ElementNode (e.g. "$.content[0]"): interpret offset as a
    // logical child boundary offset and return an element point.
    if (currentNode && $isElementNode(currentNode)) {
      return $getElementPointFromLogicalIndex(currentNode, location.offset, affinity);
    }
    return [undefined, undefined];
  }

  // Handle UsjAttributeKeyLocation and UsjAttributeMarkerLocation BEFORE UsjMarkerLocation
  // because UsjAttributeMarkerLocation has keyName but no offsets, similar to UsjMarkerLocation.
  // Checking for keyName first ensures correct type narrowing.
  // Note: Attribute markers are not yet represented in the editor, so we position at the closest
  // available location (the end of the element's content, since attributes come after content).
  if (isUsjAttributeKeyLocation(location) || isUsjAttributeMarkerLocation(location)) {
    const node = $navigateToNode(location.jsonPath);
    if (!node) return [undefined, undefined];

    // For ElementNodes, position at end of last text child
    if ($isElementNode(node)) {
      const lastChild = node.getLastChild();
      if (lastChild && $isTextNode(lastChild))
        return [lastChild, lastChild.getTextContent().length];
    }

    // For decorator nodes (e.g., ImmutableChapterNode) or elements with no children,
    // position at the start of the next sibling
    const nextSibling = node.getNextSibling();
    if (nextSibling && $isElementNode(nextSibling)) return [nextSibling, 0];

    return [undefined, undefined];
  }

  // Handle UsjClosingAttributeMarkerLocation BEFORE UsjMarkerLocation/UsjClosingMarkerLocation.
  // Note: Attribute markers are not yet represented in the editor, so we position at the closest
  // available location (the end of the element's content).
  if (isUsjClosingAttributeMarkerLocation(location)) {
    const node = $navigateToNode(location.jsonPath);
    if (!node) return [undefined, undefined];

    // For ElementNodes, position at end of last text child if it exists
    if ($isElementNode(node)) {
      const lastChild = node.getLastChild();
      if (lastChild && $isTextNode(lastChild))
        return [lastChild, lastChild.getTextContent().length];
    }

    // For decorator nodes (e.g., ImmutableChapterNode) or elements with no children,
    // position at the start of the next sibling
    const nextSibling = node.getNextSibling();
    if (nextSibling && $isElementNode(nextSibling)) return [nextSibling, 0];

    return [undefined, undefined];
  }

  // Handle UsjMarkerLocation - position at the beginning of the opening marker
  if (isUsjMarkerLocation(location)) {
    const node = $navigateToNode(location.jsonPath);
    if (!node || !$isElementNode(node)) return [undefined, undefined];

    const markerNode = $findMarkerNode(node, "opening");
    if (markerNode) return [markerNode, 0];

    // Fallback: if no marker node, position at start of first child
    const firstChild = node.getFirstChild();
    if (firstChild && $isTextNode(firstChild)) return [firstChild, 0];

    return [undefined, undefined];
  }

  // Handle UsjClosingMarkerLocation - position within the closing marker
  if (isUsjClosingMarkerLocation(location)) {
    const node = $navigateToNode(location.jsonPath);
    if (!node || !$isElementNode(node)) return [undefined, undefined];

    const markerNode = $findMarkerNode(node, "closing");
    if (markerNode) {
      // Validate offset is within bounds
      const text = markerNode.getTextContent();
      const offset = Math.min(location.closingMarkerOffset, text.length);
      return [markerNode, offset];
    }
    // Fallback: if no closing marker, position at end of last text child
    const lastChild = node.getLastChild();
    if (lastChild && $isTextNode(lastChild)) return [lastChild, lastChild.getTextContent().length];

    return [undefined, undefined];
  }

  // Handle UsjPropertyValueLocation - position within a property value (e.g., marker name)
  if (isUsjPropertyValueLocation(location)) {
    // Extract the property name from the jsonPath (e.g., "$.content[0].marker" -> "marker")
    const propertyMatch = location.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/);
    const propertyName = propertyMatch?.[1] ?? propertyMatch?.[2] ?? propertyMatch?.[3];

    const node = $navigateToNode(location.jsonPath);
    if (!node || !$isElementNode(node)) return [undefined, undefined];

    if (propertyName === "marker") {
      // Position within the marker name in the opening MarkerNode
      const markerNode = $findMarkerNode(node, "opening");
      if (markerNode) {
        // The text is "\marker " - propertyOffset 0 maps to offset 1 (after backslash)
        const offset = location.propertyOffset + 1;
        const text = markerNode.getTextContent();
        return [markerNode, Math.min(offset, text.length)];
      }
    }

    // Fallback for other properties or if marker node not found
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

function $normalizeVisibleMarkerPoint(node: LexicalNode, offset: number): [LexicalNode, number] {
  if (!$isVisibleMarkerNode(node)) return [node, offset];

  const textLength = node.getTextContent().length;
  // If selection resolves inside or at the beginning of a visible marker,
  // normalize to a parent ElementNode point at the marker's child index.
  if (offset < 0 || offset >= textLength) return [node, offset];

  const parent = node.getParent();
  if (!parent || !$isElementNode(parent)) return [node, offset];

  const indexWithinParent = node.getIndexWithinParent();
  if (indexWithinParent < 0) return [node, offset];

  return [parent, indexWithinParent];
}

function $getPointType(node: LexicalNode | undefined): "text" | "element" {
  return $isElementNode(node) ? "element" : "text";
}

/**
 * Finds a MarkerNode or ImmutableTypedTextNode marker child with the specified syntax.
 * @param parent - The parent element node to search in.
 * @param syntax - The marker syntax to find ("opening" or "closing").
 * @returns The MarkerNode or ImmutableTypedTextNode if found, undefined otherwise.
 */
function $findMarkerNode(
  parent: ElementNode,
  syntax: "opening" | "closing",
): MarkerNode | ImmutableTypedTextNode | undefined {
  const children = parent.getChildren();
  for (const child of children) {
    // Check for editable MarkerNode
    if ($isMarkerNode(child) && child.getMarkerSyntax() === syntax) return child;

    // Also check for selfClosing when looking for closing
    if (syntax === "closing" && $isMarkerNode(child) && child.getMarkerSyntax() === "selfClosing") {
      return child;
    }

    if ($isVisibleMarkerNode(child)) {
      const text = child.getTextContent();
      const isClosing = text.endsWith("*");
      if ((syntax === "opening" && !isClosing) || (syntax === "closing" && isClosing)) {
        return child;
      }
    }
  }
  return undefined;
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
 * Gets the location from a Lexical node and offset, emitting the appropriate UsjDocumentLocation
 * subtype based on the node type.
 *
 * - For MarkerNode with "opening" syntax at offset 0: UsjMarkerLocation
 * - For MarkerNode with "opening" syntax at offset > 0: UsjPropertyValueLocation (within marker name)
 * - For MarkerNode with "closing" syntax: UsjClosingMarkerLocation
 * - For an element point before a read-only marker glyph: UsjMarkerLocation for the opening glyph,
 *   UsjClosingMarkerLocation for the closing one
 * - For regular TextNode: UsjTextContentLocation
 *
 * @param node - The Lexical node.
 * @param offset - The offset within the node's text content.
 * @returns The appropriate UsjDocumentLocation subtype.
 */
function $getLocationFromNode(node: LexicalNode, offset: number): UsjDocumentLocation {
  if ($isMarkerNode(node)) {
    const markerSyntax = node.getMarkerSyntax();

    // Prefer anchoring to the previous node if the marker is scaffolding for it.
    const anchorNode = $getMarkerAnchorNode(node);
    // A glyph whose anchor has no USJ location of its own (an implied paragraph, or the
    // AttributeRunNode holding a `\va`/`\vp`/milestone attribute run) has no marker location that
    // resolves back to it, so report the content position beside the glyph instead.
    if (
      anchorNode &&
      ($isLogicallyTransparent(anchorNode) || $shouldIgnoreNodeForContentIndexes(anchorNode))
    ) {
      const besideLocation = $getLocationBesideNode(node, offset > 0);
      if (besideLocation) return besideLocation;
    }
    const anchorJsonPath = anchorNode
      ? usjJsonPathFromIndexes($getJsonPathIndexes(anchorNode))
      : usjJsonPathFromIndexes($getJsonPathIndexes(node));

    if (markerSyntax === "closing" || markerSyntax === "selfClosing") {
      // UsjClosingMarkerLocation: position within the closing marker (e.g., \nd*)
      return {
        jsonPath: anchorJsonPath,
        closingMarkerOffset: offset,
      } satisfies UsjClosingMarkerLocation;
    }

    // Opening marker
    if (offset === 0) {
      // UsjMarkerLocation: at the very beginning (the backslash)
      return {
        jsonPath: anchorJsonPath,
      } satisfies UsjMarkerLocation;
    }

    // Within the marker name text (after the backslash)
    // The text is "\marker " so offset 1 is the first char of the marker name
    // UsjPropertyValueLocation points to the marker property value
    const propertyJsonPath = `${anchorJsonPath}.marker` as PropertyJsonPath;
    // propertyOffset is the offset within the marker name itself (not including backslash)
    // Text is "\p " - offset 1 is 'p', so propertyOffset = offset - 1
    const propertyOffset = Math.max(0, offset - 1);

    return {
      jsonPath: propertyJsonPath,
      propertyOffset,
    } satisfies UsjPropertyValueLocation;
  }

  // Element selection - offset is a child index, convert to a logical point. An element point on
  // a logically transparent wrapper (an annotation mark or an implied paragraph) is a point in its
  // logical parent's content.
  if ($isElementNode(node)) {
    const childAtOffset = node.getChildAtIndex(offset);
    // A transparent wrapper has no marker location of its own to report the glyph against.
    if ($isVisibleMarkerNode(childAtOffset) && !$isLogicallyTransparent(node)) {
      // Which glyph the point sits before decides which location this is, by the same
      // trailing-`*` test `$findMarkerNode` resolves them back with. Keyed only on the parent, an
      // element point before the CLOSING glyph resolved to the same location as one before the
      // opening glyph, so a range framing a whole char span (or note) mapped to a collapsed one.
      const isClosingGlyph = childAtOffset.getTextContent().endsWith("*");
      const jsonPath = usjJsonPathFromIndexes($getJsonPathIndexes(node));
      // Offset 0: the point is before the closing glyph's first byte, not inside it.
      return isClosingGlyph
        ? ({ jsonPath, closingMarkerOffset: 0 } satisfies UsjClosingMarkerLocation)
        : ({ jsonPath } satisfies UsjMarkerLocation);
    }

    return $getLocationFromElementPoint(node, offset);
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

  // Presentation-only text (e.g. a caret host, an NBSP spacer, attribute text) has no USJ location
  // of its own: report the content position beside it.
  if ($shouldIgnoreNodeForContentIndexes(node)) {
    const besideLocation = $getLocationBesideNode(node, offset > 0);
    if (besideLocation) return besideLocation;
  }

  // Fallback for other nodes outside the logical content model.
  return { jsonPath: usjJsonPathFromIndexes($getJsonPathIndexes(node)), offset };
}

/** The text-content location of an element point, in its logical parent's coordinates. */
function $getLocationFromElementPoint(node: ElementNode, offset: number): UsjTextContentLocation {
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

/**
 * The text-content location just before `node` (or just after it, when `after`), for a
 * presentation-only node with no USJ location of its own. Climbs out of presentation-only
 * wrappers (e.g. an `AttributeRunNode`) first, since a point inside one is not in any content.
 */
function $getLocationBesideNode(
  node: LexicalNode,
  after: boolean,
): UsjTextContentLocation | undefined {
  let target = node;
  let parent = node.getParent();
  while (parent && $shouldIgnoreNodeForContentIndexes(parent)) {
    target = parent;
    parent = parent.getParent();
  }
  if (!parent) return undefined;
  return $getLocationFromElementPoint(parent, target.getIndexWithinParent() + (after ? 1 : 0));
}

function $getMarkerAnchorNode(markerNode: MarkerNode): LexicalNode | undefined {
  const parent = markerNode.getParent();
  if (!parent || !$isElementNode(parent)) return undefined;

  const previousContentSibling = $getPreviousContentSibling(markerNode);
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

function $getPreviousContentSibling(child: LexicalNode): LexicalNode | undefined {
  let sibling: LexicalNode | null = child.getPreviousSibling();
  while (sibling) {
    if (!$shouldIgnoreNodeForContentIndexes(sibling)) return sibling;
    sibling = sibling.getPreviousSibling();
  }
  return undefined;
}

/**
 * Gets the jsonPath indexes from a node by traversing up to the root using logical content
 * indexes, in which annotation marks and implied paragraphs are transparent.
 * @param node - The node to get the path for.
 * @returns An array of indexes representing the path from root to node.
 */
function $getJsonPathIndexes(node: LexicalNode): number[] {
  const jsonPathIndexes: number[] = [];
  let current: LexicalNode | null = node;
  while (current) {
    const parent = $getLogicalParent(current);
    if (!parent) break;

    // A transparent wrapper has no index; skip the lookup rather than build the parent's items.
    const index = $isLogicallyTransparent(current) ? -1 : $getLogicalIndexOfChild(parent, current);
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
