import {
  BookCode,
  EMPTY_USJ,
  MarkerContent,
  MarkerObject,
  USJ_TYPE,
  USJ_VERSION,
  Usj,
} from "@eten-tech-foundation/scripture-utilities";
import {
  EditorState,
  LineBreakNode,
  NODE_STATE_KEY,
  SerializedEditorState,
  SerializedLexicalNode,
  SerializedTextNode,
  TextNode,
} from "lexical";
import {
  AttributeRunNode,
  authoredNbspState,
  BookNode,
  ChapterNode,
  CharNode,
  collapseSpaceRuns,
  COMMENT_MARK_TYPE,
  ENDING_MS_COMMENT_MARKER,
  getEditableCallerText,
  ImmutableChapterNode,
  ImmutableTypedTextNode,
  ImmutableUnmatchedNode,
  isSerializedCharNode,
  isSerializedImpliedParaNode,
  isSerializedMarkerNode,
  isSerializedNoteNode,
  isSerializedSynthesizedMarkerNode,
  isSerializedTextNode,
  isSerializedTypedMarkNode,
  isCursorPlaceholderOnly,
  LoggerBasic,
  MarkerNode,
  MILESTONE_VERSION,
  MilestoneNode,
  NBSP,
  NODE_ATTRIBUTE_PREFIX,
  NoteNode,
  orderedAttributes,
  ParaNode,
  parseNumberFromMarkerText,
  removeUndefinedProperties,
  SerializedBookNode,
  SerializedChapterNode,
  SerializedCharNode,
  SerializedImmutableChapterNode,
  SerializedImmutableUnmatchedNode,
  SerializedMilestoneNode,
  SerializedNoteNode,
  SerializedParaNode,
  SerializedImmutableTableCellNode,
  SerializedImmutableTableNode,
  SerializedImmutableTableRowNode,
  SerializedTypedMarkNode,
  SerializedUnknownNode,
  SerializedVerseNode,
  STARTING_MS_COMMENT_MARKER,
  ImmutableTableCellNode,
  ImmutableTableNode,
  ImmutableTableRowNode,
  TABLE_CELL_TYPE,
  TABLE_ROW_TYPE,
  TABLE_TYPE,
  TypedMarkNode,
  typedCallerBytes,
  UnknownNode,
  UNMATCHED_TAG_NAME,
  UNMERGEABLE_TEXT_DETAIL,
  isSerializedVerseBlockNode,
  VerseBlockNode,
  VerseNode,
} from "shared";
import {
  getNbspSpelling,
  hasStandardViewWhitespace,
  ImmutableNoteCallerNode,
  ImmutableVerseNode,
  SerializedImmutableVerseNode,
  ViewOptions,
} from "shared-react";
import { displayTextToUsj } from "../markerEdit/whitespaceDisplay.utils";

interface EditorUsjAdaptor {
  initialize: typeof initialize;
  deserializeEditorState: typeof deserializeEditorState;
}

/** Logger instance */
let _logger: LoggerBasic;

/** Configures the module-scoped logger later deserialize calls report through. */
export function initialize(logger: LoggerBasic | undefined) {
  if (logger) _logger = logger;
}

/**
 * Standard-view whitespace display rules; they must not leak into other modes. Gated on the
 * standard-view whitespace fingerprint (editable + spaced + formatted, any `noteMode`) rather than
 * the named `standard` mode, so serialization inverts the display whitespace even when notes are
 * expanded — keeping it in lockstep with the editable marker engine. See
 * {@link hasStandardViewWhitespace}.
 *
 * The forward adaptor carries its own two-line twin of this wrapper (reading its module-scoped
 * view options instead of a parameter). Deliberately not merged: the substance is already the ONE
 * shared {@link hasStandardViewWhitespace}; the wrappers differ only in where the view options
 * come from.
 */
function isStandardView(viewOptions: ViewOptions | undefined): boolean {
  return hasStandardViewWhitespace(viewOptions);
}

/**
 * The REVERSE adaptor over a live `EditorState`: serializes it and delegates to
 * {@link deserializeSerializedEditorState}. An empty editor state short-circuits to an empty
 * document at `version`.
 */
export function deserializeEditorState(
  editorState: EditorState,
  viewOptions?: ViewOptions,
  version: string = USJ_VERSION,
): Usj | undefined {
  if (editorState.isEmpty()) return emptyUsj(version);

  return deserializeSerializedEditorState(editorState.toJSON(), viewOptions, version);
}

/** An empty document at `version` — `EMPTY_USJ` itself at its own version. */
function emptyUsj(version: string): Usj {
  return version === EMPTY_USJ.version ? EMPTY_USJ : { type: USJ_TYPE, version, content: [] };
}

/**
 * The REVERSE adaptor: reads the DOCUMENT back out of a serialized editor state that was built
 * for `viewOptions`, stripping everything the forward adaptor added for display (marker glyphs
 * and their NBSP separators, display runs, note-layout scaffolding) and inverting the
 * standard-view whitespace mapping — so only DATA reaches the returned USJ.
 *
 * The tree carries no USJ version, so the returned document is stamped `version`: the caller
 * passes the version of the document the tree was loaded from (`Editor` remembers it), so a
 * document leaves the editor at the version it arrived at.
 *
 * Invariant: must invert `serializeEditorState` (usj-editor.adaptor.ts) exactly — the round-trip
 * identity the corpus suites pin (adaptors/corpus/). Its output over a settled state is what
 * `getUsj()` hands the host, so any display byte that leaks through here reaches the saved file
 * and any data byte dropped here is silent data loss.
 */
export function deserializeSerializedEditorState(
  serializedEditorState: SerializedEditorState,
  viewOptions?: ViewOptions,
  version: string = USJ_VERSION,
): Usj | undefined {
  if (!serializedEditorState.root || !serializedEditorState.root.children) return;

  const rootChildren = serializedEditorState.root.children;
  // check for default empty implied-para node
  if (
    rootChildren.length === 1 &&
    isSerializedImpliedParaNode(rootChildren[0]) &&
    (!rootChildren[0].children || rootChildren[0].children.length === 0)
  )
    return emptyUsj(version);

  // The block verse layout splits a paragraph that spans verses across their blocks, so this tree
  // no longer describes the source USJ's paragraphs. Report and give up rather than emit USJ that
  // looks right and has the wrong structure. Reported rather than thrown because this runs inside a
  // Lexical change listener, where `onError` would rethrow and tear the editor down, and because
  // every other unexpected-node case in this file reports and moves on.
  if (rootChildren.some(isSerializedVerseBlockNode)) {
    _logger?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; " +
        "use the source USJ instead.",
    );
    return;
  }

  const content = recurseRootNodes(rootChildren, viewOptions);
  if (!content) return;

  const usj: Usj = { type: USJ_TYPE, version, content };
  return usj;
}

function createBookMarker(
  node: SerializedBookNode,
  content: MarkerContent[] | undefined,
): MarkerObject {
  const { type, marker, unknownAttributes } = node;
  let code: BookCode | undefined;
  if (node.code !== "") code = node.code;
  return removeUndefinedProperties({
    type,
    marker,
    code,
    ...unknownAttributes,
    content,
  });
}

function createImmutableChapterMarker(node: SerializedImmutableChapterNode): MarkerObject {
  const { marker, number, sid, altnumber, pubnumber, unknownAttributes } = node;
  return removeUndefinedProperties({
    type: ChapterNode.getType(),
    marker,
    number,
    sid,
    altnumber,
    pubnumber,
    ...unknownAttributes,
  });
}

function createChapterMarker(
  node: SerializedChapterNode,
  content: MarkerContent[] | undefined,
): MarkerObject {
  const { marker, sid, altnumber, pubnumber, unknownAttributes } = node;
  const text = content && typeof content[0] === "string" ? content[0] : undefined;
  let { number } = node;
  number = parseNumberFromMarkerText(marker, text, number);
  return removeUndefinedProperties({
    type: ChapterNode.getType(),
    marker,
    number,
    sid,
    altnumber,
    pubnumber,
    ...unknownAttributes,
  });
}

function createVerseMarker(node: SerializedImmutableVerseNode | SerializedVerseNode): MarkerObject {
  const { marker, sid, altnumber, pubnumber, unknownAttributes } = node;
  const { text } = node as SerializedVerseNode;
  let { number } = node;
  number = parseNumberFromMarkerText(marker, text, number);
  return removeUndefinedProperties({
    type: VerseNode.getType(),
    marker,
    number,
    sid,
    altnumber,
    pubnumber,
    ...unknownAttributes,
  });
}

function createCharMarker(
  node: SerializedCharNode,
  content: MarkerContent[] | undefined,
): MarkerObject {
  // An empty marker is a span with no name (ParatextData reads a bare `\` in a note as
  // `<char style="">`), not a missing one, so it is kept as `marker: ""`.
  const { type, marker, unknownAttributes } = node;
  // The structural NBSP separator at the span's start is stripped in `recurseNodes`, from the
  // text node right after the opening glyph — positionally, so an authored leading `~` survives.
  return removeUndefinedProperties({
    type,
    marker,
    ...unknownAttributes,
    content,
  });
}

function createParaMarker(
  node: SerializedParaNode,
  content: MarkerContent[] | undefined,
): MarkerObject {
  const { type, marker, unknownAttributes } = node;
  return removeUndefinedProperties({
    type,
    marker,
    ...unknownAttributes,
    content,
  });
}

function createTableMarker(
  node: SerializedImmutableTableNode,
  content: MarkerContent[] | undefined,
): MarkerObject {
  const { unknownAttributes } = node;
  return removeUndefinedProperties({ type: TABLE_TYPE, ...unknownAttributes, content });
}

function createTableRowMarker(
  node: SerializedImmutableTableRowNode,
  content: MarkerContent[] | undefined,
): MarkerObject {
  const { marker, unknownAttributes } = node;
  return removeUndefinedProperties({ type: TABLE_ROW_TYPE, marker, ...unknownAttributes, content });
}

function createTableCellMarker(
  node: SerializedImmutableTableCellNode,
  content: MarkerContent[] | undefined,
): MarkerObject {
  const { marker, align, colspan, unknownAttributes } = node;
  return removeUndefinedProperties({
    type: TABLE_CELL_TYPE,
    marker,
    align,
    colspan,
    ...unknownAttributes,
    content,
  });
}

/**
 * Drops the plain spaces Standard view's serialization does not keep at the start of a container's
 * content, where the USFM writer has already put one separator space in front of them:
 *
 * - A paragraph's content, under any paragraph marker or in the root's implied paragraph. Paratext
 *   9's tokenizer skips all whitespace after a paragraph marker's separator, so they are not
 *   content (`\p  \w a\w*` reads as `\p \w a\w*`): a space left at a paragraph's start — typed
 *   there, or a deleted char marker's separator — is shown while editing and not saved. The
 *   logical position model drops the same spaces (`$getLogicalContentItems` in `shared`), and the
 *   same ones after a verse number ({@link dropSpacesAfterVerseNumbers}).
 * - A char span's content, after its opener's separator, for the same reason: Paratext 9 skips all
 *   whitespace after any opening marker (`\nd  things\nd*` reads and saves as `\nd things\nd*`),
 *   so a space typed right after the opener is shown while editing and not saved. A span holding
 *   nothing but spaces (a selected space wrapped in a span) is empty to Paratext 9 too
 *   (`\nd  \nd*` saves as `\nd \nd*`, joining the words on either side in the file), so it
 *   saves as an empty span.
 * - A note's content, after its caller: content that starts with plain spaces (`\f +  text`, a
 *   space typed after an expanded note's caller) makes a run with the caller's separator that no
 *   single text node holds; Paratext 9 collapses it to `\f + text` on reformat, as it does any
 *   other run. Not for a note with a category: its `\cat …\cat*` is written between the caller and
 *   the content, so a space at the start of the content follows `\cat*` and is the note's own
 *   (`\f + \cat things\cat* \fr …`).
 *
 * Only a first item that is a string loses anything. An NBSP is data (`~`), not a space, and stays.
 *
 * @param content - The container's serialized content.
 * @returns `content` without leading plain spaces in its first string, dropping a string that held
 *   nothing else.
 */
function dropLeadingSpaces(content: MarkerContent[] | undefined): MarkerContent[] | undefined {
  const first = content?.[0];
  if (!content || typeof first !== "string" || !first.startsWith(" ")) return content;
  const trimmed = first.replace(/^ +/, "");
  return trimmed ? [trimmed, ...content.slice(1)] : content.slice(1);
}

/**
 * Drops the plain spaces a text right after a verse number starts with, in Standard view: the USFM
 * writer follows the verse number with a separator space, and Paratext 9 skips all whitespace
 * after a verse number (`\v 2  x` reads as `\v 2 x`), so they are not content. A text holding
 * nothing else goes. Not after a verse with a `\va` or `\vp`: the text follows that marker's
 * closing marker, so its spaces are content (`\v 1 \vp 1a\vp* text`). The logical position model
 * drops the same spaces (`$getLogicalContentItems` in `shared`).
 *
 * @param content - A container's serialized content.
 * @returns `content` with those spaces dropped.
 */
function dropSpacesAfterVerseNumbers(content: MarkerContent[]): MarkerContent[] {
  return content.flatMap((item, index) => {
    const previous = content[index - 1];
    if (typeof item !== "string" || !endsInVerseNumber(previous)) return [item];
    const trimmed = item.replace(/^ +/, "");
    return trimmed ? [trimmed] : [];
  });
}

/** Whether `item` is a verse whose number is the last thing its USFM writes — no `\va` or `\vp`. */
function endsInVerseNumber(item: MarkerContent | undefined): boolean {
  return (
    typeof item === "object" &&
    item.type === VerseNode.getType() &&
    item.altnumber === undefined &&
    item.pubnumber === undefined
  );
}

function createNoteMarker(
  node: SerializedNoteNode,
  content: MarkerContent[] | undefined,
): MarkerObject {
  const { type, marker, caller, category, unknownAttributes } = node;
  return removeUndefinedProperties({
    type,
    marker,
    caller,
    category,
    ...unknownAttributes,
    content,
  });
}

/**
 * `type` and `marker` stay ahead of everything — they are not attribute bytes and have no place in
 * the order. The attributes behind them are re-keyed into the milestone's authored order when it
 * carries one, because the USJ-to-USFM writer emits a marker's attributes in object key order:
 * re-emitting them sid-first would rewrite bytes in a file that never asked for it.
 */
function createMilestoneMarker(node: SerializedMilestoneNode): MarkerObject {
  const { type, marker: nodeMarker, sid, eid, unknownAttributes, attributeOrder } = node;
  const marker = nodeMarker === "" ? undefined : nodeMarker;
  return removeUndefinedProperties({
    type,
    marker,
    ...orderedAttributes({ sid, eid, ...unknownAttributes }, attributeOrder),
  });
}

function createTextMarker(node: SerializedTextNode): string {
  return node.text;
}

function createUnknownMarker(
  node: SerializedUnknownNode,
  content: MarkerContent[] | undefined,
): MarkerObject {
  const { tag, marker, unknownAttributes } = node;
  return removeUndefinedProperties({
    type: tag,
    marker,
    ...unknownAttributes,
    content,
  });
}

function createUnmatchedMarker(node: SerializedImmutableUnmatchedNode): MarkerObject {
  const { marker: nodeMarker } = node;
  const marker = nodeMarker === "" ? undefined : nodeMarker;
  return {
    type: UNMATCHED_TAG_NAME,
    marker,
  };
}

/**
 * If the last added content is text then combine the new text content to it, otherwise add the new
 * text content.
 * @param markers - Markers accumulated so far.
 * @param textContent - New text content.
 */
function combineTextContentOrAdd(markers: MarkerContent[], textContent: string) {
  const lastContent: MarkerContent | undefined = markers[markers.length - 1];
  if (lastContent && typeof lastContent === "string")
    markers[markers.length - 1] = lastContent + textContent;
  else markers.push(textContent);
}

/**
 * Whether `node` is a mark that carries comment IDs, so a comment ending in front of it continues
 * into it. A mark of any other annotation type (a Find highlight) says nothing about comments.
 */
function isSerializedCommentMarkNode(node: SerializedLexicalNode | null | undefined): boolean {
  return isSerializedTypedMarkNode(node) && node.typedIDs[COMMENT_MARK_TYPE] !== undefined;
}

/**
 * Strip the mark and insert its children enclosed in milestone mark markers.
 * @param childMarkers - Children of the mark.
 * @param ids - Comment IDs from the current mark.
 * @param pids - Comment IDs from the previous mark.
 * @param nextNode - Next serialized node.
 * @param markers - Markers accumulated so far.
 */
function replaceMarkWithMilestones(
  childMarkers: MarkerContent[],
  ids: string[],
  pids: string[],
  nextNode: SerializedLexicalNode | undefined,
  markers: MarkerContent[],
) {
  // add the milestones in front of the children
  const type = MilestoneNode.getType();
  const sids = ids.filter((id) => !pids.includes(id));
  const eids = pids.filter((id) => !ids.includes(id));
  eids.forEach((eid) => {
    const milestone = createMilestoneMarker({
      type,
      marker: ENDING_MS_COMMENT_MARKER,
      eid,
      version: MILESTONE_VERSION,
    });
    markers.push(milestone);
  });
  sids.forEach((sid) => {
    const milestone = createMilestoneMarker({
      type,
      marker: STARTING_MS_COMMENT_MARKER,
      sid,
      version: MILESTONE_VERSION,
    });
    markers.push(milestone);
  });
  if (ids.length === 0) {
    const milestone = createMilestoneMarker({
      type,
      marker: STARTING_MS_COMMENT_MARKER,
      version: MILESTONE_VERSION,
    });
    markers.push(milestone);
  }
  // add the children
  markers.push(...childMarkers);
  // add any milestones needed after the children
  if (ids.length === 0) {
    const milestone = createMilestoneMarker({
      type,
      marker: ENDING_MS_COMMENT_MARKER,
      version: MILESTONE_VERSION,
    });
    markers.push(milestone);
  }
  const isLastEnd = !isSerializedCommentMarkNode(nextNode);
  if (isLastEnd) {
    ids.forEach((eid) => {
      const milestone = createMilestoneMarker({
        type,
        marker: ENDING_MS_COMMENT_MARKER,
        eid,
        version: MILESTONE_VERSION,
      });
      markers.push(milestone);
    });
  }
}

/**
 * Whether the node at `nodes[index]` sits immediately after an opening glyph that is `enclosingChar`'s
 * OWN opener, or a nested child span's own opener sitting loose among `enclosingChar`'s children —
 * the serialized twin of `$charSeparatorPrefixLength` (markerSeparators.utils.ts), whose own
 * classifier is `$charGlyphNestedValue` (nestedGlyphs.utils.ts). The previous sibling is read
 * through a `TypedMarkNode` on both sides exactly as the live predicate does: if it IS a mark, its
 * deepest last descendant stands in for it (a mark that ends right before this node hides the glyph
 * as its last child); if `nodes[index]` itself has no earlier sibling because `nodes` is a mark's
 * own unwrapped children, `precedingSibling` — threaded in from the enclosing call exactly like
 * `enclosingChar` — carries the search outward, ascending through as many mark levels as the live
 * predicate's `previous ??= child.getPreviousSibling()` loop does.
 *
 * An opening glyph found this way is not always `enclosingChar`'s own: a milestone's display run
 * (`\qt-s` … `\*`) can sit loose among a char span's children too (`$charGlyphNestedValue`'s third
 * case), and its NBSP is never a structural separator. Matching `previous`'s marker against
 * `enclosingChar`'s own marker, or against a nested child CharNode's, is what tells the two apart.
 */
function precedesOpeningCharGlyph(
  nodes: SerializedLexicalNode[],
  index: number,
  precedingSibling: SerializedLexicalNode | undefined,
  enclosingChar: SerializedCharNode | undefined,
): boolean {
  if (!enclosingChar) return false;
  let previous = index > 0 ? nodes[index - 1] : precedingSibling;
  while (previous && isSerializedTypedMarkNode(previous)) {
    const { children } = previous;
    previous = children.length > 0 ? children[children.length - 1] : undefined;
  }
  if (!isSerializedMarkerNode(previous) || previous.markerSyntax !== "opening") return false;
  if (previous.marker === enclosingChar.marker) return true;
  return enclosingChar.children.some(
    (child) => isSerializedCharNode(child) && child.marker === previous.marker,
  );
}

/**
 * Whether the lone-NBSP text `nodes[index]` is content an annotation mark split off — the
 * serialized twin of `$isNbspContentAtMark` (node.utils.ts), which says why: a direct child of a
 * mark (`inMark`) or a direct sibling of one, untagged, not where a char opener's separator sits,
 * and, inside a char span, not the span's only content.
 */
function isNbspContentAtMark(
  nodes: SerializedLexicalNode[],
  index: number,
  precedingSibling: SerializedLexicalNode | undefined,
  enclosingChar: SerializedCharNode | undefined,
  inMark: boolean,
): boolean {
  const node = nodes[index];
  if (!isSerializedTextNode(node) || node.text !== NBSP) return false;
  const atMark =
    inMark ||
    isSerializedTypedMarkNode(nodes[index - 1]) ||
    isSerializedTypedMarkNode(nodes[index + 1]);
  if (!atMark) return false;
  if (node[NODE_STATE_KEY]?.textType !== undefined) return false;
  if (precedesOpeningCharGlyph(nodes, index, precedingSibling, enclosingChar)) return false;
  return !enclosingChar || hasOtherCharContent(enclosingChar.children, node);
}

/** Whether `children` (a char span's, read through marks) hold content besides `except`: the
 * serialized twin of `$hasOtherCharContent` (node.utils.ts). */
function hasOtherCharContent(
  children: SerializedLexicalNode[],
  except: SerializedTextNode,
): boolean {
  return children.some((child) => {
    if (child === except) return false;
    if (isSerializedTypedMarkNode(child)) return hasOtherCharContent(child.children, except);
    if (isSerializedMarkerNode(child)) return false;
    if (isSerializedTextNode(child))
      return (
        child[NODE_STATE_KEY]?.textType === undefined &&
        child.text !== "" &&
        child.text !== NBSP &&
        !isCursorPlaceholderOnly(child.text)
      );
    return "children" in child && child.type !== AttributeRunNode.getType();
  });
}

/**
 * Whether the lone-NBSP text `nodes[index]` is content rather than one of the engine's lone-NBSP
 * display nodes — the serialized twin of `$isLoneNbspContent` (node.utils.ts), which lists the
 * display slots this rules out. `parent` is the node `nodes` are the children of, when that is a
 * char span or a note; in or beside a mark, {@link isNbspContentAtMark} decides, as it does live.
 */
function isLoneNbspContent(
  nodes: SerializedLexicalNode[],
  index: number,
  parent: SerializedLexicalNode | undefined,
  precedingSibling: SerializedLexicalNode | undefined,
  enclosingChar: SerializedCharNode | undefined,
  inMark: boolean,
): boolean {
  const node = nodes[index];
  if (!isSerializedTextNode(node) || node.text !== NBSP) return false;
  const previous = index > 0 ? nodes[index - 1] : undefined;
  if (inMark || isSerializedTypedMarkNode(previous) || isSerializedTypedMarkNode(nodes[index + 1]))
    return isNbspContentAtMark(nodes, index, precedingSibling, enclosingChar, inMark);
  const state = node[NODE_STATE_KEY];
  if (node.mode !== "normal" || state?.textType !== undefined) return false;
  if (state?.[authoredNbspState.key] === true) return true;
  if (!previous) return !isSerializedCharNode(parent) && !isSerializedNoteNode(parent);
  if (isSerializedMarkerNode(previous)) return false;
  if (isSerializedCharNode(parent)) return !isSerializedSynthesizedMarkerNode(previous);
  if (
    isSerializedNoteNode(parent) &&
    parent.children.some((child) => child.type === ImmutableNoteCallerNode.getType())
  )
    return previous.type !== ImmutableNoteCallerNode.getType() && !isSerializedCharNode(previous);
  return true;
}

/** The serialized twin of `$throughMarks` (attributeDisplay.utils.ts): an annotation mark is
 * presentation this export splices away, so a slot identified by its position among its parent's
 * children has to see through one. */
function serializedThroughMarks(
  node: SerializedLexicalNode | undefined,
): SerializedLexicalNode | undefined {
  let current = node;
  while (isSerializedTypedMarkNode(current)) current = current.children[0];
  return current;
}

/** A note's editable caller text, and the caller it stands for. */
interface CallerSlot {
  node: SerializedTextNode;
  caller: string;
}

/**
 * The one child of `noteChildren` that renders a note's EDITABLE caller, if any — the serialized
 * twin of `$noteEditableCallerNode` (attributeDisplay.utils.ts): skip the leading opening
 * `marker` nodes, look through any annotation mark at that position, and the next child is the
 * caller slot when it is a serialized plain text node whose text equals
 * `getEditableCallerText(caller)`. A `marker` candidate there (an absent-caller shape, opening
 * glyph immediately followed by closing glyph) never carries that text, so failing the type check
 * first is equivalent to the live predicate's `$isTextNode` guard followed by the same text
 * comparison.
 *
 * It is also the slot while its bytes are damaged, waiting as the user typed them while the caret
 * is at it (the marker-edit engine's `$noteCallerTextTransform`): the unmergeable text the note
 * builders make for the caller and nothing else. The note still has its caller then, and the
 * caret's departure will put the text back, so it is read the way that departure leaves it.
 */
function noteCallerSlotNode(
  noteChildren: SerializedLexicalNode[],
  caller: string,
): CallerSlot | undefined {
  let index = 0;
  while (index < noteChildren.length) {
    const child = noteChildren[index];
    if (!isSerializedMarkerNode(child) || child.markerSyntax !== "opening") break;
    index++;
  }
  const candidate = serializedThroughMarks(noteChildren[index]);
  if (!isSerializedTextNode(candidate)) return undefined;
  if (candidate.text === getEditableCallerText(caller)) return { node: candidate, caller };
  // `detail` is Lexical's bit field, and the flag is one bit of it.
  const isUnmergeable = Math.floor(candidate.detail / UNMERGEABLE_TEXT_DETAIL) % 2 === 1;
  return isUnmergeable ? { node: candidate, caller } : undefined;
}

// Keep this function's content semantics in sync with `$getLogicalContentItems` in
// `libs/shared/src/nodes/usj/node.utils.ts` — the logical content model mirrors which nodes
// this export skips, splices (TypedMarkNodes), and coalesces into single text strings.
function recurseNodes(
  nodes: SerializedLexicalNode[],
  viewOptions: ViewOptions | undefined,
  // Identity, not text: the one node `noteCallerSlotNode` picked out as a note's editable
  // caller, threaded down so the TextNode case below can drop that exact node and no other —
  // never re-derived by comparing text, or content that coincidentally matches the caller's
  // rendered text anywhere else in the note would be dropped too.
  callerSlot?: CallerSlot,
  // The char span `nodes` are the (unwrapped, through marks) direct children of, or `undefined`
  // outside any char span — see `precedesOpeningCharGlyph`.
  enclosingChar?: SerializedCharNode,
  // The effective previous sibling for `nodes[0]`, when `nodes` is a TypedMarkNode's own
  // unwrapped children — see `precedesOpeningCharGlyph`.
  precedingSibling?: SerializedLexicalNode,
  // Whether `nodes` are a TypedMarkNode's own children — see `isNbspContentAtMark`.
  inMark = false,
  // The char span or note `nodes` are the direct children of — see `isLoneNbspContent`.
  parent?: SerializedCharNode | SerializedNoteNode,
): MarkerContent[] | undefined {
  const markers: MarkerContent[] = [];
  let childMarkers: MarkerContent[] | undefined;
  /** Previous comment IDs from TypedMarkNodes. */
  let pids: string[] = [];
  nodes.forEach((node, index) => {
    const serializedBookNode = node as SerializedBookNode;
    const serializedChapterNode = node as SerializedChapterNode;
    const serializedCharNode = node as SerializedCharNode;
    const serializedParaNode = node as SerializedParaNode;
    const serializedNoteNode = node as SerializedNoteNode;
    const serializedTextNode = node as SerializedTextNode;
    const serializedMarkNode = node as SerializedTypedMarkNode;
    const serializedUnknownNode = node as SerializedUnknownNode;
    switch (node.type) {
      case BookNode.getType():
        markers.push(
          createBookMarker(
            serializedBookNode,
            recurseNodes(serializedBookNode.children, viewOptions),
          ),
        );
        break;
      case ImmutableChapterNode.getType():
        markers.push(createImmutableChapterMarker(node as SerializedImmutableChapterNode));
        break;
      case ChapterNode.getType():
        markers.push(
          createChapterMarker(
            serializedChapterNode,
            recurseNodes(serializedChapterNode.children, viewOptions),
          ),
        );
        break;
      case ImmutableVerseNode.getType():
      case VerseNode.getType():
        markers.push(createVerseMarker(node as SerializedImmutableVerseNode | SerializedVerseNode));
        break;
      case CharNode.getType(): {
        let charContent = recurseNodes(
          serializedCharNode.children,
          viewOptions,
          undefined,
          serializedCharNode,
          undefined,
          false,
          serializedCharNode,
        );
        if (isStandardView(viewOptions)) charContent = dropLeadingSpaces(charContent);
        // A span that held only spaces has no content, as one that held nothing has none.
        markers.push(
          createCharMarker(serializedCharNode, charContent?.length ? charContent : undefined),
        );
        break;
      }
      case ParaNode.getType(): {
        let paraContent = recurseNodes(serializedParaNode.children, viewOptions);
        if (isStandardView(viewOptions)) paraContent = dropLeadingSpaces(paraContent);
        // A paragraph that held only spaces has no content, as one that held nothing has none.
        markers.push(
          createParaMarker(serializedParaNode, paraContent?.length ? paraContent : undefined),
        );
        break;
      }
      case ImmutableTableNode.getType():
        markers.push(
          createTableMarker(
            node as SerializedImmutableTableNode,
            recurseNodes((node as SerializedImmutableTableNode).children, viewOptions),
          ),
        );
        break;
      case ImmutableTableRowNode.getType():
        markers.push(
          createTableRowMarker(
            node as SerializedImmutableTableRowNode,
            recurseNodes((node as SerializedImmutableTableRowNode).children, viewOptions),
          ),
        );
        break;
      case ImmutableTableCellNode.getType():
        markers.push(
          createTableCellMarker(
            node as SerializedImmutableTableCellNode,
            recurseNodes((node as SerializedImmutableTableCellNode).children, viewOptions),
          ),
        );
        break;
      case NoteNode.getType(): {
        const noteContent = recurseNodes(
          serializedNoteNode.children,
          viewOptions,
          noteCallerSlotNode(serializedNoteNode.children, serializedNoteNode.caller),
          undefined,
          undefined,
          false,
          serializedNoteNode,
        );
        markers.push(
          createNoteMarker(
            serializedNoteNode,
            isStandardView(viewOptions) && serializedNoteNode.category === undefined
              ? dropLeadingSpaces(noteContent)
              : noteContent,
          ),
        );
        break;
      }
      case AttributeRunNode.getType():
      case ImmutableTypedTextNode.getType():
      case ImmutableNoteCallerNode.getType():
      case LineBreakNode.getType():
      case MarkerNode.getType():
        // These nodes are for presentation only so they don't go into the USJ. An
        // AttributeRunNode subtree is skipped WHOLESALE (never recursed into) — its own children
        // are exactly the same MarkerNode/attribute-tagged-TextNode pieces this switch already
        // skips individually below (the MarkerNode.getType() case here, and the textType
        // "attribute" check in the TextNode.getType() case), so skipping the wrapper as a unit is
        // equivalent to how those pieces are handled when unwrapped. Not removable once loose
        // pieces stop occurring: MarkerNode.getType() also covers every OTHER glyph kind (char
        // open/closer, para prefix, note glyphs), and the TextNode "attribute" check also covers a
        // char span's OWN `|…` run, which is never wrapped at all (see this module's top comment) —
        // both stay load-bearing regardless of verse/milestone run shape.
        break;
      case TypedMarkNode.getType():
        // An annotation mark is presentation the splice below strips, so its children serialize
        // exactly as if they were direct children here — the char-child context must survive the
        // re-entry, or a mark wrapping a char span's first text hides the structural NBSP from
        // the strip (a fabricated leading space in the file). `callerSlot` survives the re-entry
        // for the same reason: `noteCallerSlotNode` looks through a mark at the caller position,
        // so the anchored node can be nested inside one, and the drop below has to reach it or
        // the caller's display bytes are fabricated into the note's saved content.
        childMarkers = recurseNodes(
          serializedMarkNode.children,
          viewOptions,
          callerSlot,
          enclosingChar,
          index > 0 ? nodes[index - 1] : precedingSibling,
          true,
        );
        if (childMarkers) {
          const commentIDs = serializedMarkNode.typedIDs[COMMENT_MARK_TYPE];
          if (commentIDs) {
            const nextNode = nodes[index + 1];
            replaceMarkWithMilestones(childMarkers, commentIDs, pids, nextNode, markers);
            // A mark with no mark after it has already ended every comment it carries, so none of
            // them is open for the next comment mark to end.
            pids = isSerializedCommentMarkNode(nextNode) ? commentIDs : [];
          } else {
            // Strip the mark and insert its children.
            const firstChild = childMarkers.shift();
            if (firstChild) {
              if (typeof firstChild === "string") combineTextContentOrAdd(markers, firstChild);
              else markers.push(firstChild);
            }
            if (childMarkers.length > 0) markers.push(...childMarkers);
          }
        }
        break;
      case MilestoneNode.getType():
        markers.push(createMilestoneMarker(node as SerializedMilestoneNode));
        break;
      case TextNode.getType():
        if (callerSlot && node === callerSlot.node) {
          // The caller's own bytes are the note's caller; bytes typed into a damaged caller text
          // are the content the departure moves them to (`noteCallerSlotNode`).
          let typed = typedCallerBytes(callerSlot.node.text, callerSlot.caller);
          if (isStandardView(viewOptions))
            typed = displayTextToUsj(collapseSpaceRuns(typed), getNbspSpelling(viewOptions));
          if (typed) combineTextContentOrAdd(markers, typed);
          break;
        }
        if (
          serializedTextNode.text &&
          // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
          // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
          !isCursorPlaceholderOnly(serializedTextNode.text) &&
          // A lone-NBSP text is also what the engine's separators, spacers and empty-span
          // placeholder look like, untagged ones included, so it is content only outside their
          // slots (`isLoneNbspContent`).
          (serializedTextNode.text !== NBSP ||
            isLoneNbspContent(nodes, index, parent, precedingSibling, enclosingChar, inMark)) &&
          // The untagged NBSP-`|` form of milestone attribute text. Text right after a char span's
          // opening glyph is never that: its NBSP is the span's separator, and a `|…` after it is
          // content the attribute grammar left literal (`\w |lemma="g"grace\w*` — Paratext 9
          // parses attributes only when the whole `|…` tail before the closer matches), so it is
          // kept like any other content text.
          !(
            serializedTextNode.text.startsWith(NODE_ATTRIBUTE_PREFIX) &&
            !precedesOpeningCharGlyph(nodes, index, precedingSibling, enclosingChar)
          ) &&
          // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
          // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
          // the prefix check above can't catch them; the textType state tag is the only signal.
          serializedTextNode[NODE_STATE_KEY]?.textType !== "attribute"
        ) {
          let text = createTextMarker(serializedTextNode);
          // A char marker's leading NBSP separator (added by the forward adaptor's `createChar`
          // in markerMode "editable") is stripped from the one text that hosts it: the text right
          // after the opening glyph. Positional, never "the span's first string starts with
          // NBSP": once a mark splits the separator off into its own (dropped) node, the span's
          // first string is the author's own `~`, which must survive. In Standard view the strip
          // also has to come before whitespace inversion, so the separator isn't misread as a
          // collapsed space run.
          if (
            viewOptions?.markerMode === "editable" &&
            precedesOpeningCharGlyph(nodes, index, precedingSibling, enclosingChar) &&
            text.startsWith(NBSP)
          )
            text = text.slice(1);
          // Standard view stores display text; collapse space runs and invert on serialization.
          if (isStandardView(viewOptions))
            text = displayTextToUsj(collapseSpaceRuns(text), getNbspSpelling(viewOptions));
          combineTextContentOrAdd(markers, text);
        }
        break;
      case UnknownNode.getType():
        markers.push(
          createUnknownMarker(
            serializedUnknownNode,
            recurseNodes(serializedUnknownNode.children, viewOptions),
          ),
        );
        break;
      case ImmutableUnmatchedNode.getType():
        markers.push(createUnmatchedMarker(node as SerializedImmutableUnmatchedNode));
        break;
      case VerseBlockNode.getType():
        // Unreachable in practice: verse blocks are root children, and `deserializeSerializedEditorState`
        // gives up on the whole tree before recursing. Kept so a nested one cannot be emitted as if
        // its paragraphs were the source USJ's.
        _logger?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        _logger?.error(`Unexpected node type '${node.type}'!`);
    }
  });
  const content = isStandardView(viewOptions) ? dropSpacesAfterVerseNumbers(markers) : markers;
  // Ensure empty arrays are removed.
  return content.length > 0 ? content : undefined;
}

/**
 * {@link recurseNodes} over the root's children, splicing each implied paragraph's content into the
 * root's in its place — an implied paragraph has no USJ object of its own. Its content is still a
 * paragraph's, so in Standard view it loses its leading spaces as any paragraph's does
 * ({@link dropLeadingSpaces}) — except after a chapter with a `\ca` or `\cp`, whose closing marker
 * or text the content follows instead.
 * @param nodes - The root's serialized children.
 * @param viewOptions - The view options the editor state was built for.
 * @returns the root's USJ content, or `undefined` when there is none.
 */
function recurseRootNodes(
  nodes: SerializedLexicalNode[],
  viewOptions: ViewOptions | undefined,
): MarkerContent[] | undefined {
  const content: MarkerContent[] = [];
  let blocks: SerializedLexicalNode[] = [];
  const flushBlocks = () => {
    content.push(...(recurseNodes(blocks, viewOptions) ?? []));
    blocks = [];
  };
  for (const node of nodes) {
    if (!isSerializedImpliedParaNode(node)) {
      blocks.push(node);
      continue;
    }
    flushBlocks();
    let impliedContent = recurseNodes(node.children, viewOptions);
    const previous = content.at(-1);
    const followsChapterAttribute =
      typeof previous === "object" &&
      previous.type === ChapterNode.getType() &&
      (previous.altnumber !== undefined || previous.pubnumber !== undefined);
    if (isStandardView(viewOptions) && !followsChapterAttribute)
      impliedContent = dropLeadingSpaces(impliedContent);
    impliedContent?.forEach((item) =>
      typeof item === "string" ? combineTextContentOrAdd(content, item) : content.push(item),
    );
  }
  flushBlocks();
  return content.length > 0 ? content : undefined;
}

const editorUsjAdaptor: EditorUsjAdaptor = {
  initialize,
  deserializeEditorState,
};
export default editorUsjAdaptor;
