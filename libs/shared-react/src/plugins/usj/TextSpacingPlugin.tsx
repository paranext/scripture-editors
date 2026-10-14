import { ImmutableVerseNode } from "../../nodes/usj/ImmutableVerseNode";
import {
  $addTrailingSpace,
  $isSomeVerseNode,
  SomeVerseNode,
  wasNodeCreated,
} from "../../nodes/usj/node-react.utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  $createTextNode,
  $getState,
  $hasUpdateTag,
  $isTextNode,
  LexicalEditor,
  LexicalNode,
  TextNode,
} from "lexical";
import { useEffect } from "react";
import {
  $isAttributeRunNode,
  $isCharNode,
  $isNoteNode,
  $isTypedMarkNode,
  $isPieceContinuation,
  $isUnknownNode,
  $nextSiblingThroughMarks,
  $parentOutsideMarks,
  $pieceHead,
  $previousSiblingThroughMarks,
  $syncDisplayRun,
  CharNode,
  displayRunDescriptor,
  NBSP,
  NoteNode,
  textTypeState,
  TYPED_MARK_WRAP_TAG,
  VerseNode,
} from "shared";

/** This plugin ensures that there is a space following a text node including before verse nodes. */
export function TextSpacingPlugin() {
  const [editor] = useLexicalComposerContext();
  useTextSpacing(editor);
  return null;
}

/**
 * This hook is responsible for handling a trailing space on a TextNode, and moving text nodes
 * that are created inside an UnknownNode. It also ensures verses are properly spaced.
 * @param editor - The LexicalEditor instance used to access the DOM.
 */
function useTextSpacing(editor: LexicalEditor) {
  useEffect(() => {
    if (!editor.hasNodes([CharNode, ImmutableVerseNode, NoteNode, TextNode, VerseNode])) {
      throw new Error(
        "TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!",
      );
    }

    return mergeRegister(
      editor.registerNodeTransform(TextNode, $textNodeTrailingSpaceTransform),
      editor.registerNodeTransform(TextNode, (node) => $textNodeInUnknownTransform(node, editor)),
      editor.registerNodeTransform(VerseNode, $verseNodeTransform),
      editor.registerNodeTransform(ImmutableVerseNode, $verseNodeTransform),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      // A verse cut into pieces by an annotation is one owner: its first piece.
      editor.registerNodeTransform(VerseNode, (node) => {
        const verse = $pieceHead(node);
        $syncDisplayRun(displayRunDescriptor("va"), verse);
        $syncDisplayRun(displayRunDescriptor("vp"), verse);
      }),
    );
  }, [editor]);
}

/**
 * Maintains the ONE engine-owned structural space in running text: a text run directly before a
 * verse ends with a space, matching the canonical USJ shape ParatextData itself produces on a
 * round trip to disk. Every other space is document content the user owns, so the transform adds
 * nothing anywhere else — spaces it once fabricated before milestones, block unknowns (figures),
 * table-cell ends, and unmatched closers were bytes the file never had, and under the writer's
 * no-separators rule each one changed the saved file.
 *
 * It also deletes almost nothing. The one deletion kept is an empty verse's space-only content
 * (a verse marker precedes the node, through any annotation mark) — see
 * {@link $isEmptyVerseContent} for why that space cannot round-trip and what limits the check. A lone space anywhere else — an
 * empty paragraph, before a milestone, at the end of a paragraph — is a byte the user or the
 * source put there and survives.
 *
 * The exemption early-returns keep the transform away from contexts that own their own spacing:
 * non-editable nodes, already-spaced text, note/char/typed-mark adjacency, unknown-node content,
 * adjacent same-run text nodes, inline unknowns (optbreak, ref), and attribute display runs.
 *
 * @param node - TextNode that might need updating.
 */
function $textNodeTrailingSpaceTransform(node: TextNode): void {
  if (!node.isAttached()) return;

  const text = node.getTextContent();
  // Remove a space that is an empty verse's entire content.
  if ($isEmptyVerseContent(node, text)) {
    // Two separate loop protections, BOTH load-bearing — dropping either reintroduces an infinite
    // transform cycle, which Lexical escalates into a crash:
    //   - this `text !== ""` guard stops a self-loop, because `setTextContent` goes through
    //     `getWritable()`, which marks the node dirty even when the value is unchanged and so
    //     re-runs this transform;
    //   - the `text === ""` clause in `$isEmptyVerseContent` stops the re-add loop, because
    //     without it an already-emptied node falls through to `$addTrailingSpace` below, becomes
    //     " ", and is cleared again on the next pass.
    if (text !== "") node.setTextContent("");
    return;
  }

  const nextSibling = node.getNextSibling();
  const parent = node.getParent();
  if (
    (text.endsWith(" ") && text.length > 1) ||
    $isTypedMarkNode(parent) ||
    $isTypedMarkNode(nextSibling) ||
    $ownsItsSpacing(node, parent, nextSibling)
  )
    return;

  // The one canonical add. Anything else the next sibling might be — nothing, a milestone, a
  // block unknown, a table-cell end — canonically has NO engine space before it, so adding one
  // fabricates a byte. (A node with no next sibling is also how this covers "last child of a
  // paragraph": there is no verse to space against.)
  if ($isSomeVerseNode(nextSibling)) $addTrailingSpace(node);
}

/**
 * Whether text `node`, in `parent` and followed by `next`, is in a context that owns its own
 * spacing, so the trailing-space transform neither adds nor removes a space there:
 * non-editable text, note/char adjacency, unknown-node content, an adjacent text of the same run,
 * an inline unknown, and attribute display runs.
 */
function $ownsItsSpacing(
  node: TextNode,
  parent: LexicalNode | null,
  next: LexicalNode | null,
): boolean {
  return (
    node.getMode() !== "normal" ||
    $isNoteNode(next) ||
    $isCharNode(parent) ||
    $isCharNode(next) ||
    $isUnknownNode(parent) ||
    // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
    // splits leave runs as multiple nodes, e.g. a segmented composition node that Lexical
    // won't merge). No structural space belongs inside a run — inserting one corrupts the
    // word itself (#513, complex scripts worst). This also protects a space-only node from
    // the placeholder cleanup: between two text nodes it is real content.
    $isTextNode(next) ||
    // An optbreak (`//`) — like a ref — is an inline UnknownNode carrying SIGNIFICANT surrounding
    // whitespace (Paratext 9 preserves the spaces around `//` byte-for-byte). Forcing a trailing
    // space onto the text before one — or removing a lone space there — corrupts the authored form
    // and makes the space impossible to delete (the transform re-adds it every keystroke). Text
    // adjacent to an inline unknown is left exactly as authored, the same next-sibling exemption
    // already applied to notes, chars, and typed marks. Block-level unknowns (figures, sidebars)
    // keep the existing spacing behavior.
    ($isUnknownNode(next) && next.isInlineTag()) ||
    // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
    // presentation, not paragraph prose: it must never gain a trailing space of its own, even
    // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
    // exempt it the way a char span's own run is already protected).
    $getState(node, textTypeState) === "attribute" ||
    // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
    // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
    // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
    // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
    // presentation. The transform still exempts whichever shape — loose attribute text or a
    // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
    // too.
    $isAttributeRunNode(parent)
  );
}

/**
 * Whether text `node` (spelling `text`) is an empty verse's entire content: a space-only (or
 * already-emptied) text right after a verse marker, with nothing of the verse's content after it.
 * Core's round trip to disk (ParatextData) drops that space, so keeping it makes the editor's USJ
 * disagree with what core reads back — and core resolves that disagreement by reloading the whole
 * editor, destroying the caret. This is narrower than a space between a char node and a following
 * verse, which IS canonical USJ that Paratext re-inserts: only a space owned by an *empty verse*
 * round-trips away.
 *
 * Read as the unmarked document has it: an annotation mark holding the space, or beside it, is
 * looked through for the verse before it and the node after it (`throughMarks.utils.ts`), and the
 * spacing exemptions are read for the parent and neighbour that document has.
 *
 * Scope, deliberately limited: NBSP is excluded because it is meaningful content
 * (`$addTrailingSpace` likewise treats it as already-spaced), and only "" and " " match.
 */
function $isEmptyVerseContent(node: TextNode, text: string): boolean {
  if (text !== "" && text !== " ") return false;
  if (!$isSomeVerseNode($previousSiblingThroughMarks(node))) return false;
  return !$ownsItsSpacing(node, $parentOutsideMarks(node), $nextSiblingThroughMarks(node));
}

/**
 * Moves a TextNode out of an UnknownNode when it was planted there by an edit, so a read-only
 * opaque block never gains prose of its own. Text a mark wrap splits off stays where it is.
 * @param node - The TextNode to check.
 * @param editor - The LexicalEditor instance.
 */
function $textNodeInUnknownTransform(node: TextNode, editor: LexicalEditor): void {
  const unknownNode = node.getParent();
  if (!$isUnknownNode(unknownNode) || !node.isAttached()) return;

  // A mark wrap splits caption text into pieces that are new nodes but no new text. Lexical
  // unions the tags of every update batched into one commit, so the skip covers the whole commit:
  // text typed into a figure in an update batched with a wrap would stay in the figure too. A
  // host's annotation call and DOM input arrive in separate tasks, so they are not batched.
  if ($hasUpdateTag(TYPED_MARK_WRAP_TAG)) return;

  // Only text planted inside a PRE-EXISTING opaque block is an intrusion (e.g. typing into a
  // figure). A wrapper that appeared in this SAME update brought its own content with it — a
  // Tier-2 rebuild materializing a pasted `\fig caption|src="…"\fig*`, a document load, a collab
  // insert, an undo restore — and every one of those creates the wrapper and its content children
  // together. Ejecting there strands the construct's own text outside it: a figure's caption
  // lands after the `\fig*` glyph as ordinary paragraph prose, and the exported USJ keeps a
  // `figure` object with no content at all.
  if (wasNodeCreated(editor, node.getKey()) && !wasNodeCreated(editor, unknownNode.getKey()))
    unknownNode.insertAfter(node);
}

/** Transform for a verse node (handles non-TextNode predecessors) */
function $verseNodeTransform(node: SomeVerseNode): void {
  if (!node.isAttached()) return;

  // A verse cut into pieces is one verse: its first piece stands beside what precedes it.
  if ($isPieceContinuation(node)) return;
  // Annotation wrappers (TypedMarkNode) are presentation-only, so the spacing decision depends
  // on the content INSIDE them: the node before the verse as the unmarked document has it.
  const previousSibling = $previousSiblingThroughMarks(node);

  // Insert the structural space ONLY before the predecessors whose canonical disk shape carries
  // one — an allowlist, not an exclusion list, because every predecessor class outside it
  // (milestones, block unknowns, notes, attribute runs, marker prefixes) canonically abuts the
  // verse with NO space, and inserting one there fabricates a byte the file never had. The
  // exclusion-list form this replaced fabricated exactly that way each time a new node class
  // appeared (most recently MilestoneNode).
  //
  // - A char span before a verse: canonical USJ that ParatextData re-inserts on its own round
  //   trip — the one predecessor where the space is engine-owned.
  // - Text inside an annotation wrapper: bare text gets its structural space from
  //   $textNodeTrailingSpaceTransform, but wrapped text can't (that transform skips
  //   TypedMarkNode parents), so the space is inserted here instead and coalesces onto the same
  //   USJ text run. Only when that text does not already end in one — the rule
  //   `$addTrailingSpace` applies to bare text — or a comment ending beside the verse writes a
  //   second space into the document — and only where bare text would get one: never where the
  //   text owns its spacing, read as the unmarked document has it (`$ownsItsSpacing`; an
  //   editable verse is a text, so the text before it gets none).
  if (
    $isCharNode(previousSibling) ||
    ($isTextNode(previousSibling) &&
      $isTypedMarkNode(previousSibling.getParent()) &&
      !$endsInSpace(previousSibling) &&
      !$ownsItsSpacing(previousSibling, $parentOutsideMarks(previousSibling), node))
  )
    node.insertBefore($createTextNode(" "));
}

/** Whether `node`'s text already ends in a space or NBSP — the same test `$addTrailingSpace` uses
 * to decide text is already spaced. */
function $endsInSpace(node: TextNode): boolean {
  const text = node.getTextContent();
  return text.endsWith(" ") || text.endsWith(NBSP);
}
