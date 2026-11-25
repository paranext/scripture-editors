import { ImmutableNoteCallerNode } from "../../../nodes/usj/ImmutableNoteCallerNode";
import { ImmutableVerseNode } from "../../../nodes/usj/ImmutableVerseNode";
import { mergeRegister } from "@lexical/utils";
import {
  $findMatchingParent,
  $getSelection,
  $isDecoratorNode,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  $setState,
  BaseSelection,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_EDITOR,
  COMMAND_PRIORITY_LOW,
  INSERT_LINE_BREAK_COMMAND,
  INSERT_PARAGRAPH_COMMAND,
  INTERNAL_$isBlock,
  LexicalCommand,
  LexicalEditor,
  LexicalNode,
  RangeSelection,
  SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
} from "lexical";
import {
  $displayAnnotationsOf,
  $isSplitCarrier,
  $logicalOffset,
  $joinCarriersAtSelection,
  $removeRangeHeldByMarks,
  $restatePastedPieces,
  $splitCarrierAt,
  displayAnnotationsState,
  registerDisplayAnnotationBasis,
} from "shared";

/** How many holders each editor's {@link registerDisplayPieces} registration has. */
const registrations = new WeakMap<LexicalEditor, { references: number; unregister: () => void }>();

/**
 * Keep an editor's display-byte carriers whole or cut into pieces at their holds' edges, whatever
 * paints them: the hold-basis and piece transforms, the strip of annotations from pasted nodes, and
 * the split of a carrier where a paste or a line break goes in. An annotation can only be held
 * while these are registered, so register them wherever annotations are set (`AnnotationPlugin`
 * does, before it acquires the paint index); the paint index only paints.
 *
 * Counted per editor: a second registration adds a holder rather than registering everything
 * twice, and the transforms and commands go when the last holder releases.
 *
 * @returns Releases this holder's registration.
 */
export function registerDisplayPieces(editor: LexicalEditor): () => void {
  let entry = registrations.get(editor);
  if (!entry) {
    entry = { references: 0, unregister: registerEveryPieceHandler(editor) };
    registrations.set(editor, entry);
  }
  entry.references++;
  const held = entry;
  let isReleased = false;
  return () => {
    if (isReleased) return;
    isReleased = true;
    held.references--;
    if (held.references > 0) return;
    held.unregister();
    registrations.delete(editor);
  };
}

function registerEveryPieceHandler(editor: LexicalEditor): () => void {
  return mergeRegister(
    registerDisplayAnnotationBasis(editor, [ImmutableVerseNode, ImmutableNoteCallerNode]),
    editor.registerCommand(
      SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
      ({ nodes, selection }) => {
        // A check result or a comment names one place; a pasted copy of its bytes is not it.
        $stripDisplayAnnotations(nodes);
        if (nodes.length > 0 && $isRangeSelection(selection) && !selection.isCollapsed()) {
          // A carrier an annotation cut is removed from as one text, as the uncut carrier is:
          // removing whole pieces would take bytes past the range's ends out of it, or leave it.
          $joinCarriersAtSelection();
          // A range a mark holds an end of is removed first, as for any paste, so no handler types
          // over a range whose ends a mark alone puts in different parents.
          $removeRangeHeldByMarks(selection);
        }
        return false;
      },
      // Critical, and never handling the command, so a handler that does handle it cannot skip the
      // strip.
      COMMAND_PRIORITY_CRITICAL,
    ),
    editor.registerCommand(
      SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
      ({ nodes, selection }) => {
        $splitCarrierAtInsertion(nodes, selection);
        return false;
      },
      // Last, never handling the command: only when no handler inserts the nodes its own way (a
      // range one replaces itself, which a range removed here first would leave it no range to
      // replace) does Lexical's own insertion run, whose text split this is.
      COMMAND_PRIORITY_EDITOR,
    ),
    ...[INSERT_PARAGRAPH_COMMAND, INSERT_LINE_BREAK_COMMAND].map(
      (command: LexicalCommand<unknown>) =>
        editor.registerCommand(
          command,
          () => {
            $splitCarrierAtBreak();
            return false;
          },
          // Low, never handling the command: after every handler that claims a break (a guard that
          // refuses it, a split of its own) and before the generic one, whose text split this is.
          COMMAND_PRIORITY_LOW,
        ),
    ),
  );
}

/** Remove `displayAnnotationsState` from pasted sibling `nodes` and their whole subtrees, and
 * make the pieces among them pieces of the paste alone (`$restatePastedPieces`): a carrier pasted
 * whole stays one carrier, which the piece transform joins once the holds are gone, a piece
 * pasted without its head is a carrier of its own, and a part of a cut token is the whole token,
 * as a copy of the token takes it. Mutating (`nodes` too). */
function $stripDisplayAnnotations(nodes: LexicalNode[]): void {
  $restatePastedPieces(nodes);
  for (const node of nodes) {
    $setState(node, displayAnnotationsState, undefined);
    if ($isElementNode(node)) $stripDisplayAnnotations(node.getChildren());
  }
}

/**
 * Before pasted nodes go in at the caret, split the carrier the caret is inside where the insertion
 * splits a text (`$splitCarrierAt`): `RangeSelection.insertNodes` splits the text node at the
 * caret, but in a carrier cut into pieces the caret may sit between two of them, where no text is
 * left to split, and in one holding an annotation each part would re-measure the holds it copied
 * rather than keep its own. Only what the insertion itself does first is done here: nothing for no
 * nodes (it returns before touching the document), else a range removed. Mutating. */
function $splitCarrierAtInsertion(
  nodes: readonly LexicalNode[],
  insertion: BaseSelection | null,
): void {
  if (nodes.length === 0 || !$isRangeSelection(insertion)) return;
  if (!insertion.isCollapsed()) insertion.removeText();
  // The insertion splits the text at the editor's own range selection when there is one (Lexical's
  // `$removeTextAndSplitBlock`), else at its own anchor.
  const current = $getSelection();
  // Inline nodes go into the block the caret is in; with no block there the insertion refuses,
  // splitting nothing.
  const isInline = (pasted: LexicalNode) =>
    !($isElementNode(pasted) || $isDecoratorNode(pasted)) || pasted.isInline();
  $splitCarrierAtPoint($isRangeSelection(current) ? current : insertion, nodes.every(isInline));
}

/**
 * Before a paragraph or line break goes in at a collapsed caret, split the carrier the caret is
 * inside where the break splits a text, as {@link $splitCarrierAtInsertion} does for a paste:
 * `RangeSelection.insertParagraph`/`insertLineBreak` split the text at the caret, so the bytes of a
 * carrier after the caret go on as content (a glyph's tail, a verse's number moved to the next
 * paragraph), and between two pieces of a cut carrier the break would find no text to split and
 * leave the pieces after it the same carrier as those before. It splits the text with no block
 * around it too (a span beside its chapter). Mutating. */
function $splitCarrierAtBreak(): void {
  const selection = $getSelection();
  if ($isRangeSelection(selection) && selection.isCollapsed())
    $splitCarrierAtPoint(selection, false);
}

/**
 * Split the carrier `at`'s anchor is inside at the anchor, with `splitText` on its whole text
 * (`$splitCarrierAt`), when it is cut into pieces or holds an annotation, and restate `at`'s points
 * on the split: the end of the part before the caret. `needsBlock`: only inside a block, where an
 * insertion of inline nodes or a paragraph break goes in at all. Mutating. */
function $splitCarrierAtPoint(at: RangeSelection, needsBlock: boolean): void {
  const { anchor } = at;
  // A caret on the parent between two pieces is the end of the piece before it.
  const node =
    anchor.type === "text"
      ? anchor.getNode()
      : $isElementNode(anchor.getNode())
        ? anchor.getNode().getChildAtIndex(anchor.offset - 1)
        : null;
  if (!$isTextNode(node)) return;
  if (!$isSplitCarrier(node) && $displayAnnotationsOf(node).length === 0) return;
  if (needsBlock && !$isElementNode($findMatchingParent(node, INTERNAL_$isBlock))) return;
  const offset = anchor.type === "text" ? anchor.offset : node.getTextContentSize();
  const isCollapsed = at.isCollapsed();
  const before = $splitCarrierAt(node, $logicalOffset(node, offset));
  if (!before) return;
  // The split moves the editor's selection with its bytes and no other, so the point the insertion
  // reads is restated on the split: the end of the part before the caret.
  const points = isCollapsed ? [at.anchor, at.focus] : [at.anchor];
  for (const point of points) point.set(before.getKey(), before.getTextContentSize(), "text");
}
