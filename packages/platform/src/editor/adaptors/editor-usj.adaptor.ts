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
  isSerializedImpliedParaNode,
  isSerializedMarkerNode,
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
  SerializedImpliedParaNode,
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
  UnknownNode,
  UNMATCHED_TAG_NAME,
  isSerializedVerseBlockNode,
  VerseBlockNode,
  VerseNode,
} from "shared";
import {
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
 * {@link deserializeSerializedEditorState}. An empty editor state short-circuits to `EMPTY_USJ`.
 */
export function deserializeEditorState(
  editorState: EditorState,
  viewOptions?: ViewOptions,
): Usj | undefined {
  if (editorState.isEmpty()) return EMPTY_USJ;

  return deserializeSerializedEditorState(editorState.toJSON(), viewOptions);
}

/**
 * The REVERSE adaptor: reads the DOCUMENT back out of a serialized editor state that was built
 * for `viewOptions`, stripping everything the forward adaptor added for display (marker glyphs
 * and their NBSP separators, display runs, note-layout scaffolding) and inverting the
 * standard-view whitespace mapping — so only DATA reaches the returned USJ (emitted at
 * `USJ_VERSION`).
 *
 * Invariant: must invert `serializeEditorState` (usj-editor.adaptor.ts) exactly — the round-trip
 * identity the corpus suites pin (adaptors/corpus/). Its output over a settled state is what
 * `getUsj()` hands the host, so any display byte that leaks through here reaches the saved file
 * and any data byte dropped here is silent data loss.
 */
export function deserializeSerializedEditorState(
  serializedEditorState: SerializedEditorState,
  viewOptions?: ViewOptions,
): Usj | undefined {
  if (!serializedEditorState.root || !serializedEditorState.root.children) return;

  const rootChildren = serializedEditorState.root.children;
  // check for default empty implied-para node
  if (
    rootChildren.length === 1 &&
    isSerializedImpliedParaNode(rootChildren[0]) &&
    (!rootChildren[0].children || rootChildren[0].children.length === 0)
  )
    return EMPTY_USJ;

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

  const children = removeImpliedParasRecurse(rootChildren);
  const content = recurseNodes(children, viewOptions);
  if (!content) return;

  const usj: Usj = { type: USJ_TYPE, version: USJ_VERSION, content };
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
  viewOptions: ViewOptions | undefined,
): MarkerObject {
  const { type, marker: nodeMarker, unknownAttributes } = node;
  const marker = nodeMarker === "" ? undefined : nodeMarker;
  // Remove the structural NBSP separator at the span's START only. The strip mirrors the ADD:
  // the forward adaptor (`createChar`) prepends the separator only in markerMode "editable", and
  // solely to the first child — never to text following a nested closer (the `ht` in
  // `\wj li\+nd g\+nd*ht\wj*`) — so the strip is gated and positional to match. In the
  // non-editable modes (Formatted's "hidden", Markers' "visible") nothing added a separator, so a
  // leading NBSP there is the author's own `~` and must survive; a leading NBSP on any LATER
  // string is authored data in every mode. In standard view this separator is stripped earlier,
  // before whitespace inversion, so a real leading NBSP in the data isn't misread as the
  // separator here (see the `recurseNodes` TextNode branch).
  if (viewOptions?.markerMode === "editable" && !isStandardView(viewOptions) && content) {
    const [first] = content;
    if (typeof first === "string" && first.startsWith(NBSP)) content[0] = first.slice(1);
  }
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
  const isLastEnd = !nextNode || !isSerializedTypedMarkNode(nextNode);
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
 * Whether the node at `nodes[index]` sits immediately after an opening char-span glyph — the
 * serialized twin of `$charSeparatorPrefixLength` (markerSeparators.utils.ts). The previous
 * sibling is read through a `TypedMarkNode` on both sides exactly as the live predicate does: if
 * it IS a mark, its deepest last descendant stands in for it (a mark that ends right before this
 * node hides the glyph as its last child); if `nodes[index]` itself has no earlier sibling
 * because `nodes` is a mark's own unwrapped children, `precedingSibling` — threaded in from the
 * enclosing call exactly like `isCharChild` — carries the search outward, ascending through as
 * many mark levels as the live predicate's `previous ??= child.getPreviousSibling()` loop does.
 *
 * `isCharChild` stands in for the live predicate's char-span-glyph classifier
 * (`$charGlyphNestedValue`), approximated rather than reproduced: this codebase's adaptors never
 * place a bare "opening" marker sibling here for anything but a char span's own opener — a
 * milestone or verse-attribute display run's glyphs live inside an `AttributeRunNode` wrapper
 * (`recurseNodes` skips it wholesale below) or a textType "attribute" `TextNode` (filtered out
 * before this runs) — so "found inside a char span's children" already is the distinction.
 */
function precedesOpeningCharGlyph(
  nodes: SerializedLexicalNode[],
  index: number,
  precedingSibling: SerializedLexicalNode | undefined,
  isCharChild: boolean,
): boolean {
  if (!isCharChild) return false;
  let previous = index > 0 ? nodes[index - 1] : precedingSibling;
  while (previous && isSerializedTypedMarkNode(previous)) {
    const { children } = previous;
    previous = children.length > 0 ? children[children.length - 1] : undefined;
  }
  return isSerializedMarkerNode(previous) && previous.markerSyntax === "opening";
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

/**
 * The one child of `noteChildren` that renders a note's EDITABLE caller, if any — the serialized
 * twin of `$noteEditableCallerNode` (attributeDisplay.utils.ts): skip the leading opening
 * `marker` nodes, look through any annotation mark at that position, and the next child is the
 * caller slot only when it is a serialized plain text node whose text equals
 * `getEditableCallerText(caller)`. A `marker` candidate there (an absent-caller shape, opening
 * glyph immediately followed by closing glyph) never carries that text, so failing the type check
 * first is equivalent to the live predicate's `$isTextNode` guard followed by the same text
 * comparison.
 */
function noteCallerSlotNode(
  noteChildren: SerializedLexicalNode[],
  caller: string,
): SerializedTextNode | undefined {
  let index = 0;
  while (index < noteChildren.length) {
    const child = noteChildren[index];
    if (!isSerializedMarkerNode(child) || child.markerSyntax !== "opening") break;
    index++;
  }
  const candidate = serializedThroughMarks(noteChildren[index]);
  if (isSerializedTextNode(candidate) && candidate.text === getEditableCallerText(caller))
    return candidate;
  return undefined;
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
  callerSlot?: SerializedTextNode,
  isCharChild = false,
  // The effective previous sibling for `nodes[0]`, when `nodes` is a TypedMarkNode's own
  // unwrapped children — see `precedesOpeningCharGlyph`.
  precedingSibling?: SerializedLexicalNode,
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
      case CharNode.getType():
        markers.push(
          createCharMarker(
            serializedCharNode,
            recurseNodes(serializedCharNode.children, viewOptions, undefined, true),
            viewOptions,
          ),
        );
        break;
      case ParaNode.getType():
        markers.push(
          createParaMarker(
            serializedParaNode,
            recurseNodes(serializedParaNode.children, viewOptions),
          ),
        );
        break;
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
      case NoteNode.getType():
        markers.push(
          createNoteMarker(
            serializedNoteNode,
            recurseNodes(
              serializedNoteNode.children,
              viewOptions,
              noteCallerSlotNode(serializedNoteNode.children, serializedNoteNode.caller),
            ),
          ),
        );
        break;
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
          isCharChild,
          index > 0 ? nodes[index - 1] : precedingSibling,
        );
        if (childMarkers) {
          const commentIDs = serializedMarkNode.typedIDs[COMMENT_MARK_TYPE];
          if (commentIDs) {
            replaceMarkWithMilestones(childMarkers, commentIDs, pids, nodes[index + 1], markers);
            pids = commentIDs;
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
        if (
          serializedTextNode.text &&
          // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
          // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
          !isCursorPlaceholderOnly(serializedTextNode.text) &&
          // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
          // text node stands in for THREE presentation shapes — the tagged separators the
          // forward adaptor builds, the empty-char placeholder, and an orphaned structural
          // prefix a split or deletion strands in its own (untagged) node. The known cost is
          // that a CONTENT string which is exactly one NBSP is dropped too; fixing that needs
          // a per-context story for the untagged shapes, not a tag test alone. The forward
          // side keeps its own output clear of the ambiguity: `createPara` leaves a
          // spaces-only paragraph-leading string plain instead of rewriting a lone " " into
          // exactly this shape, so in standard view only an authored lone-NBSP data string
          // (displayed as `~`, never as a bare NBSP node) is at stake — leaving the drop to
          // genuinely structural nodes.
          serializedTextNode.text !== NBSP &&
          !serializedTextNode.text.startsWith(NODE_ATTRIBUTE_PREFIX) &&
          // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
          // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
          // the prefix check above can't catch them; the textType state tag is the only signal.
          serializedTextNode[NODE_STATE_KEY]?.textType !== "attribute" &&
          // Identity, not text equality: only the ONE node `noteCallerSlotNode` anchored as the
          // note's caller is excluded, so note content that coincidentally reads the same as the
          // caller (anywhere else in the note) still round-trips as data.
          node !== callerSlot
        ) {
          let text = createTextMarker(serializedTextNode);
          // Standard view stores display text; collapse space runs and invert on serialization. A
          // char marker's leading NBSP separator (added by the forward adaptor's `createChar`)
          // must be stripped before inversion so it isn't misread as a collapsed space run — but
          // only when this text is the glyph-adjacent separator host, not any text that merely
          // happens to start with NBSP (e.g. an authored NBSP right after a nested span's
          // closer), or the byte is eaten instead of round-tripping as data.
          if (isStandardView(viewOptions)) {
            if (
              precedesOpeningCharGlyph(nodes, index, precedingSibling, isCharChild) &&
              text.startsWith(NBSP)
            )
              text = text.slice(1);
            text = displayTextToUsj(collapseSpaceRuns(text));
          }
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
  // Ensure empty arrays are removed.
  return markers && markers.length > 0 ? markers : undefined;
}

/**
 * Remove implied paras.
 * @param nodes - serialized nodes.
 * @returns nodes with all implied paras removed.
 */
function removeImpliedParasRecurse(nodes: SerializedLexicalNode[]): SerializedLexicalNode[] {
  const impliedParaIndex = nodes.findIndex((node) => isSerializedImpliedParaNode(node));
  if (impliedParaIndex >= 0) {
    const nodesBefore = nodes.slice(0, impliedParaIndex);
    const nodesFromImpliedPara = (nodes[impliedParaIndex] as SerializedImpliedParaNode).children;
    const nodesAfter = removeImpliedParasRecurse(nodes.slice(impliedParaIndex + 1));
    nodes = [...nodesBefore, ...nodesFromImpliedPara, ...nodesAfter];
  }
  return nodes;
}

const editorUsjAdaptor: EditorUsjAdaptor = {
  initialize,
  deserializeEditorState,
};
export default editorUsjAdaptor;
