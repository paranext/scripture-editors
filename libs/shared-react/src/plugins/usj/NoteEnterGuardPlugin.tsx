import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $findMatchingParent, mergeRegister } from "@lexical/utils";
import {
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_CRITICAL,
  INSERT_LINE_BREAK_COMMAND,
  INSERT_PARAGRAPH_COMMAND,
  KEY_ENTER_COMMAND,
  LexicalNode,
} from "lexical";
import { useEffect } from "react";
import { $isNoteNode } from "shared";

/** Whether `node` is, or sits inside, an expanded note. */
function $isInExpandedNote(node: LexicalNode): boolean {
  const note = $isNoteNode(node) ? node : $findMatchingParent(node, $isNoteNode);
  return $isNoteNode(note) && note.getIsCollapsed() === false;
}

/**
 * Whether either end of the selection touches an expanded note. A collapsed note holds no caret,
 * so only an expanded one can.
 *
 * Read-only: call inside `editor.getEditorState().read()` or a command listener.
 */
function $isSelectionInExpandedNote(): boolean {
  const selection = $getSelection();
  if (!$isRangeSelection(selection)) return false;
  return (
    $isInExpandedNote(selection.anchor.getNode()) || $isInExpandedNote(selection.focus.getNode())
  );
}

/**
 * Makes Enter do nothing inside an expanded note, for views that give Enter no meaning there.
 *
 * Left alone, Lexical's own Enter splits the paragraph that holds the (inline) note and parks the
 * caret after it, outside the note, so what the user types next is outside the note and is lost
 * when the note is saved. Standard view turns Enter in a note into a `\fp` break instead, so a host
 * disables this plugin there.
 *
 * Claims the Enter key, the paragraph insertion and the line-break insertion, so a direct dispatch
 * of any of them is swallowed as well as the keystroke.
 *
 * @param isEnabled - Whether to swallow Enter inside a note.
 * @returns Always `null`; this plugin renders no UI.
 */
export function NoteEnterGuardPlugin({ isEnabled }: { isEnabled: boolean }): null {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    if (!isEnabled) return undefined;
    const swallowInNote = (event?: KeyboardEvent | null): boolean => {
      if (!$isSelectionInExpandedNote()) return false;
      event?.preventDefault();
      return true;
    };
    return mergeRegister(
      editor.registerCommand(KEY_ENTER_COMMAND, swallowInNote, COMMAND_PRIORITY_CRITICAL),
      editor.registerCommand(
        INSERT_PARAGRAPH_COMMAND,
        () => swallowInNote(),
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(
        INSERT_LINE_BREAK_COMMAND,
        () => swallowInNote(),
        COMMAND_PRIORITY_CRITICAL,
      ),
    );
  }, [editor, isEnabled]);
  return null;
}
