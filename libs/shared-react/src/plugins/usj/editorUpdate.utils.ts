import { $getEditor, LexicalEditor } from "lexical";

/**
 * Whether `editor`'s content-editable root contains its document's active element.
 *
 * An update to an editor the user is NOT in must not pull DOM focus into it: Lexical reconciles
 * the DOM selection after every commit, and writing a selection inside a `contenteditable`
 * focuses that element as an intrinsic browser side effect - so a programmatic update would yank
 * the caret out of whatever the user IS typing in (a host's note editor beside the Scripture text,
 * say). Commits made while this returns `false` carry Lexical's `SKIP_DOM_SELECTION_TAG`. When the
 * editor DOES hold focus the reconcile is exactly right and stays.
 *
 * Broader than "the root is the active element": a focused decorator inside the editor - a
 * collapsed note's caller button, say - is the user being in this editor. Evaluate it outside the
 * update it gates, so a focus change the update itself causes cannot change the answer.
 *
 * @param editor - The editor to check.
 * @returns `true` when focus is inside the editor's root.
 */
export function editorHoldsDomFocus(editor: LexicalEditor): boolean {
  const rootElement = editor.getRootElement();
  return !!rootElement && rootElement.contains(rootElement.ownerDocument.activeElement);
}

/**
 * Makes `tags` belong to the next commit only.
 *
 * Lexical resets its pending update tags only after a commit that changed nodes, so a tag added to
 * a selection-only commit (placing a caret) stays pending and rides onto the next commit as well:
 * a leftover `SKIP_DOM_SELECTION_TAG` stops a later `focus()` from focusing the editor, and a
 * leftover `CURSOR_CHANGE_TAG` gets the user's next real edit dropped as a caret move by every
 * listener that ignores those.
 *
 * Call it immediately before the `editor.update` that adds the tags. The listener it registers is
 * then the last to run for that commit, so every other update listener still sees the tags on the
 * commit they were meant for.
 *
 * @param editor - The editor whose next commit carries the tags.
 * @param tags - The tags to drop once that commit's update listeners have run.
 */
export function releaseTagsAfterNextCommit(editor: LexicalEditor, ...tags: string[]): void {
  const unregister = editor.registerUpdateListener(({ tags: commitTags }) => {
    unregister();
    // When the commit changed nodes Lexical has already replaced its pending set, and this is the
    // spent one - deleting from it is harmless.
    for (const tag of tags) commitTags.delete(tag);
  });
}

/**
 * Clears the document selection when it still sits inside `editor`'s root.
 *
 * A commit tagged `SKIP_DOM_SELECTION_TAG` leaves the DOM selection where it was while Lexical's
 * own moves on. The next update that has no browser event - any imperative `EditorRef` call, and
 * `focus()` - rebuilds Lexical's selection from the DOM one whenever that lies inside the editor,
 * discarding the position the skipped commit set. With no DOM selection in the editor Lexical
 * keeps its own instead.
 *
 * A no-op when the DOM selection is elsewhere: it then belongs to whatever the user is in.
 *
 * @param editor - The editor whose stale DOM selection to clear.
 */
export function clearStaleDomSelection(editor: LexicalEditor): void {
  const rootElement = editor.getRootElement();
  const domSelection = rootElement?.ownerDocument.defaultView?.getSelection();
  if (!rootElement || !domSelection?.anchorNode) return;
  if (rootElement.contains(domSelection.anchorNode)) domSelection.removeAllRanges();
}

/**
 * Reads the editor's latest state, including an update still in flight.
 *
 * Outside an update this is `editor.read`, which commits pending updates first so the read sees
 * what the caller just produced. INSIDE one of this editor's own updates - a host callback run
 * from a command the update dispatched, such as `onSelectionChange` - that commit would freeze the
 * update in progress and make its next write throw, so the read runs directly against the active
 * state instead, which is already the latest.
 *
 * @param editor - The editor to read.
 * @param readFn - The read, run in a Lexical read context.
 * @returns What `readFn` returns.
 */
// Not `$`-prefixed on purpose: it is for callers OUTSIDE any read or update, and calls `$getEditor`
// only to find out whether it is inside one (see the probe below).
// eslint-disable-next-line @lexical/rules-of-lexical
export function readLatest<T>(editor: LexicalEditor, readFn: () => T): T {
  let activeEditor: LexicalEditor | undefined;
  try {
    // A probe for whether a read or update is active at all, which only `$getEditor` can answer:
    // it throws outside one, and that throw is the answer.
    activeEditor = $getEditor();
  } catch {
    // Not inside any read or update.
  }
  return activeEditor === editor ? readFn() : editor.read(readFn);
}
