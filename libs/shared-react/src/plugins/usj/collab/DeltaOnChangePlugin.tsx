/**
 * Adapted from https://github.com/facebook/lexical/blob/d0456a81955bc6fef7cc7f87907f2a172d41bbf2/packages/lexical-react/src/LexicalOnChangePlugin.ts
 */

import { $getOTPositionOfNode, $isFastPathContentText, DeltaOp } from "./delta-common.utils";
import { $getParticularNodeOps, getEditorDelta } from "./editor-delta.adaptor";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import type {
  EditorState,
  LexicalEditor,
  LexicalNode,
  TextNode,
  UpdateListenerPayload,
} from "lexical";
import { $getNodeByKey, $isTextNode, HISTORY_MERGE_TAG } from "lexical";
import Delta from "quill-delta";
import { useLayoutEffect } from "react";
import {
  $findFirstAncestorNoteNode,
  $isParaLikeNode,
  ANNOTATION_MARKS_TAG,
  MARKER_SETTLE_TAG,
} from "shared";

/** Stable default for {@link DeltaOnChangePlugin}'s `ignoreTags` so the effect deps stay stable. */
const EMPTY_TAGS: readonly string[] = [];

/** Adapted from the LexicalOnChangePlugin to include collaborative editing operations. */
export function DeltaOnChangePlugin({
  ignoreHistoryMergeTagChange = true,
  ignoreSelectionChange = false,
  ignoreTags = EMPTY_TAGS,
  onChange,
}: {
  ignoreHistoryMergeTagChange?: boolean;
  ignoreSelectionChange?: boolean;
  /**
   * Update tags for which no delta should be computed or emitted. Updates carrying any of these
   * tags are skipped before `$getUpdateOps` runs. Use this for programmatic, non-collaborative
   * mutations (e.g. loading a new chapter via `EXTERNAL_USJ_MUTATION_TAG`): computing a delta for
   * a full-document replacement diffs the entire old text against the entire new text, which is
   * O(n×d) and can take minutes for large documents - and the result is discarded by consumers
   * that already filter these tags anyway.
   */
  ignoreTags?: readonly string[];
  onChange: (
    editorState: EditorState,
    editor: LexicalEditor,
    tags: Set<string>,
    ops: DeltaOp[],
    prevEditorState: EditorState,
  ) => void;
}): null {
  const [editor] = useLexicalComposerContext();

  useLayoutEffect(() => {
    if (!onChange) return;

    return editor.registerUpdateListener((payload) => {
      if (
        shouldSkipUpdateForOps(payload, {
          ignoreSelectionChange,
          ignoreHistoryMergeTagChange,
          ignoreTags,
        })
      )
        return;

      const ops = $getUpdateOps(editor, payload);
      // TODO: this may have been added because nodes are made dirty when they shouldn't be as a
      // result of NoteNode collapsing/expanding. If so, we should fix that instead.
      if (ops.length === 0) return;

      onChange(payload.editorState, editor, payload.tags, ops, payload.prevEditorState);
    });
  }, [editor, ignoreHistoryMergeTagChange, ignoreSelectionChange, ignoreTags, onChange]);

  return null;
}

/**
 * Whether a commit should produce no delta ops at all — the filter {@link DeltaOnChangePlugin}
 * applies before it computes any, exposed so a listener of its own can apply the same one.
 *
 * @param payload - The commit's update-listener payload.
 * @param options - The same switches {@link DeltaOnChangePlugin} takes as props.
 * @returns `true` when no ops should be computed for this commit.
 */
export function shouldSkipUpdateForOps(
  { dirtyElements, dirtyLeaves, prevEditorState, tags }: UpdateListenerPayload,
  options: {
    ignoreSelectionChange: boolean;
    ignoreHistoryMergeTagChange: boolean;
    ignoreTags: readonly string[];
  },
): boolean {
  return (
    (options.ignoreSelectionChange && dirtyElements.size === 0 && dirtyLeaves.size === 0) ||
    // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
    // stack — its bytes really did change, so it must reach `onChange` like any edit.
    // Without this exemption the cached USJ and the emitted delta both keep showing the
    // pre-settle bytes, and the host saves a document the editor is no longer displaying. A
    // comment's `ANNOTATION_MARKS_TAG` update is a change to the USJ too (its mark writes `zmsc`
    // milestones); it carries no merge tag of its own, but Lexical commits updates queued
    // together under all their tags, so it can share a commit with one that does.
    (options.ignoreHistoryMergeTagChange &&
      tags.has(HISTORY_MERGE_TAG) &&
      !tags.has(MARKER_SETTLE_TAG) &&
      !tags.has(ANNOTATION_MARKS_TAG)) ||
    options.ignoreTags.some((tag) => tags.has(tag)) ||
    prevEditorState.isEmpty()
  );
}

/**
 * The delta ops a commit produced, in "delta-doc" coordinates. Call from an update listener, with
 * that listener's payload: it reads the editor's current state as the commit's result.
 *
 * @param editor - The editor that committed.
 * @param payload - The commit's update-listener payload.
 * @returns The ops that turn the previous state's delta into the current one's.
 */
export function $getUpdateOps(
  editor: LexicalEditor,
  { dirtyLeaves, prevEditorState }: UpdateListenerPayload,
): DeltaOp[] {
  let update = new Delta();
  editor.getEditorState().read(() => {
    const nodeKey = dirtyLeaves.values().next().value ?? "";
    const dirtyNode = $getNodeByKey(nodeKey);
    // Note-internal edits must NOT take the fast path: a note is ONE opaque embed unit in
    // delta-doc coordinates, so $getOTPositionOfNode for a text node INSIDE it resolves to the
    // note's OUTER position and the emitted op would land the edit AFTER the note. The full-diff
    // fallback replaces the note embed wholesale instead.
    const isInsideNote = dirtyNode !== null && $findFirstAncestorNoteNode(dirtyNode) !== undefined;
    // Presentation-carrying text (a `\q1` prefix glyph, a `\va 2\va*` run, attribute text)
    // takes the full diff, whose $handleTextNodes applies the one authoritative exclusion list.
    // $isFastPathContentText derives eligibility from the same delta-doc counting instead of
    // re-listing the exclusions.
    if (
      dirtyLeaves.size === 1 &&
      $isTextNode(dirtyNode) &&
      !isInsideNote &&
      $isFastPathContentText(dirtyNode)
    ) {
      // Handle the most common case of text changing in a single text node.
      // Default "delta-doc" coordinates (NOT "apply"): this fast path and the `getEditorDelta`
      // diff fallback below feed the same doc-delta op stream emitted to the host via
      // `onChange`, so they must agree. They do: `$getOTPositionOfNode` counts a preceding
      // editable verse as its 1-unit embed (matching the doc delta, which emits only the verse
      // embed op — the glyph text is engine-owned display, excluded from content ops), and a
      // preceding editable chapter as its glyph-length body text (matching the doc delta too).
      // See `OTCoordinateSystem` in delta-common.utils.ts.
      const blockOps = $blockUpdateOps(dirtyNode, prevEditorState);
      if (blockOps) update = blockOps;
      else {
        const prevDoc = getEditorDelta(prevEditorState);
        const currentDoc = getEditorDelta(editor.getEditorState());
        update = prevDoc.diff(currentDoc);
      }
    } else {
      const prevDoc = getEditorDelta(prevEditorState);
      const currentDoc = getEditorDelta(editor.getEditorState());
      update = prevDoc.diff(currentDoc);
    }
  });
  return update.ops;
}

/**
 * The ops for an edit inside one text node, computed as the whole-document diff computes them but
 * over the node's block alone: the block's ops before and after, diffed, behind a retain to the
 * block's start. A diff of the node's text alone is not the same diff. It carries none of the
 * attributes the node's ancestors give its bytes (a char span's `char`), and where an edit could
 * sit among equal bytes it decides from the node's own edges, which an annotation mark over
 * content moves, so one keystroke would be sent differently in a text a mark has cut.
 *
 * The block is preceded by the last op of the block before it: an edit inside one text node can
 * slide across no line end or embed, so what the diff weighs around the edit is all inside this
 * window, as it is in the whole document. `undefined` when the node is in no block (or the block
 * has no position), for the caller's full diff to answer.
 */
function $blockUpdateOps(node: TextNode, prevEditorState: EditorState): Delta | undefined {
  const block = node.getTopLevelElement();
  if (!$isParaLikeNode(block)) return undefined;
  const close = $getOTPositionOfNode(block);
  if (close === undefined) return undefined;
  const blockKey = block.getKey();
  const current = $blockWindow(block);
  const previous = prevEditorState.read(() => {
    const previousBlock = $getNodeByKey(blockKey);
    return previousBlock ? $blockWindow(previousBlock) : undefined;
  });
  if (!previous) return undefined;
  const start = close + 1 - current.length();
  if (start < 0) return undefined;
  return new Delta(start > 0 ? [{ retain: start }] : []).concat(previous.diff(current));
}

/** `block`'s ops, behind the last op of the nearest block before it that has any. */
function $blockWindow(block: LexicalNode): Delta {
  let context: DeltaOp[] = [];
  for (
    let before = block.getPreviousSibling();
    before && context.length === 0;
    before = before.getPreviousSibling()
  )
    context = $getParticularNodeOps(before).slice(-1);
  return new Delta([...context, ...$getParticularNodeOps(block)]);
}
