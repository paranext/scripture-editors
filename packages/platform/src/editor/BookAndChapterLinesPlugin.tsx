import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_LOW,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  DELETE_CHARACTER_COMMAND,
  DELETE_LINE_COMMAND,
  DELETE_WORD_COMMAND,
  INSERT_PARAGRAPH_COMMAND,
  REMOVE_TEXT_COMMAND,
} from "lexical";
import { useEffect } from "react";
import {
  $removeTextKeepingBookAndChapterLines,
  $selectionSpansBookOrChapterLine,
} from "shared-react";

/**
 * Removes the current selection keeping its book and chapter lines, when it runs across one
 * ({@link $selectionSpansBookOrChapterLine}). Returns whether it did.
 *
 * Mutating: call inside `editor.update()` or a command handler.
 */
function $removeKeepingLines(): boolean {
  const selection = $getSelection();
  if (!$isRangeSelection(selection) || !$selectionSpansBookOrChapterLine(selection)) return false;
  $removeTextKeepingBookAndChapterLines(selection);
  return true;
}

/**
 * Keeps the book (`\id`) line and the chapter line through an edit that replaces a selection
 * running across either, Select All among them: a delete (Backspace, Delete and their word and
 * line chords), a drag-move's removal of what it moved, typed text and Enter. The selection is
 * removed as a cut of it is ({@link $removeTextKeepingBookAndChapterLines}): both lines stay
 * whole, text and all, and the rest goes, so typed text or a new paragraph goes in after the
 * chapter line, never in the `\id` line. A paste over such a selection is `UnstorableTextPlugin`'s,
 * and a cut `HiddenMarkersViewCopyPlugin`'s.
 *
 * Registered at `COMMAND_PRIORITY_LOW`, below every guard that refuses, arms or asks about the
 * edit (`StructureKeyboardPlugin`'s two-step delete and protected refusal, the hidden-content
 * question, the `//` refusal), so it acts only on an edit they let through, and above Lexical's
 * own handlers (`COMMAND_PRIORITY_EDITOR`). A delete it carries out itself; for typed text and
 * Enter it removes the selection and leaves the insertion to Lexical, at the caret it leaves.
 *
 * Mount it only for `markerMode: "hidden"`. Standard view shows these lines as marker text the
 * user edits, which its own engine judges.
 *
 * A requested line break needs nothing here: `LineBreakPlugin` runs it as Enter.
 */
export function BookAndChapterLinesPlugin(): null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // A delete is carried out here; typed text and a new paragraph Lexical goes on to insert.
    const $delete = () => editor.isEditable() && $removeKeepingLines();
    const $clearForInsertion = () => {
      if (editor.isEditable()) $removeKeepingLines();
      return false;
    };
    return mergeRegister(
      editor.registerCommand(DELETE_CHARACTER_COMMAND, $delete, COMMAND_PRIORITY_LOW),
      editor.registerCommand(DELETE_WORD_COMMAND, $delete, COMMAND_PRIORITY_LOW),
      editor.registerCommand(DELETE_LINE_COMMAND, $delete, COMMAND_PRIORITY_LOW),
      editor.registerCommand(REMOVE_TEXT_COMMAND, $delete, COMMAND_PRIORITY_LOW),
      editor.registerCommand(
        CONTROLLED_TEXT_INSERTION_COMMAND,
        $clearForInsertion,
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(INSERT_PARAGRAPH_COMMAND, $clearForInsertion, COMMAND_PRIORITY_LOW),
    );
  }, [editor]);

  return null;
}
