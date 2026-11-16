import {
  $getSelection,
  $isRangeSelection,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  LexicalEditor,
} from "lexical";

/**
 * Inserts `text`, from a `beforeinput` `insertText` that a plugin claimed (stopping Lexical's own
 * handling), through `CONTROLLED_TEXT_INSERTION_COMMAND`, over the range the browser meant it to
 * replace. A mobile keyboard's suggestion or macOS text replacement sends the word it replaces as
 * the event's first target range; Lexical applies that range to a collapsed selection before it
 * inserts, and so does this, so the text replaces the word rather than going in beside it.
 *
 * Call from a DOM event listener, outside any update: the range is applied in an update of its own
 * before the insertion is dispatched.
 *
 * @param editor - The editor the event is for.
 * @param event - The claimed `beforeinput`.
 * @param text - The text to insert.
 */
export function insertClaimedBeforeInputText(
  editor: LexicalEditor,
  event: InputEvent,
  text: string,
): void {
  const targetRange = event.getTargetRanges?.()[0];
  if (targetRange)
    editor.update(
      () => {
        const selection = $getSelection();
        if ($isRangeSelection(selection) && selection.isCollapsed())
          selection.applyDOMRange(targetRange);
      },
      { discrete: true },
    );
  editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, text);
}
