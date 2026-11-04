import { mergeRegister } from "@lexical/utils";
import {
  $createRangeSelectionFromDom,
  $getEditor,
  $getSelection,
  $isRangeSelection,
  CommandListener,
  CommandListenerPriority,
  LexicalCommand,
  LexicalEditor,
} from "lexical";

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
 * An update that changes nothing (e.g. dispatching a command whose handler finds no work to do)
 * hits Lexical's no-op branch and commits nothing at all, so the listener never fires and stays
 * armed - ready to strip the tags off whatever unrelated commit happens next. A caller that knows
 * its `editor.update` runs synchronously and returns before the next commit (a `discrete` update,
 * or any update called outside of one already in progress) should call the returned function right
 * after that `editor.update` to disarm a listener the update never consumed. A caller that
 * registers from inside a command handler already mid-commit (`transientCaretHost.ts`) cannot do
 * this - its own update is the commit the listener is waiting for - and keeps relying on the
 * listener firing on its own.
 *
 * @param editor - The editor whose next commit carries the tags.
 * @param tags - The tags to drop once that commit's update listeners have run.
 * @returns A function that unregisters the listener early, for a caller that can tell its update
 *   produced no commit. Calling it after the listener has already fired is a harmless no-op.
 */
export function releaseTagsAfterNextCommit(editor: LexicalEditor, ...tags: string[]): () => void {
  const unregister = editor.registerUpdateListener(({ tags: commitTags }) => {
    unregister();
    // When the commit changed nodes Lexical has already replaced its pending set, and this is the
    // spent one - deleting from it is harmless.
    for (const tag of tags) commitTags.delete(tag);
  });
  return unregister;
}

/**
 * The document's DOM selection when its anchor is inside `root` (an editor's root element), or
 * `undefined` when it is elsewhere — it then belongs to whatever the user is in — or there is none.
 *
 * @param root - The editor's root element.
 * @returns The DOM selection, when it is in the editor.
 */
export function getDomSelectionInRoot(root: HTMLElement | null | undefined): Selection | undefined {
  if (!root) return undefined;
  const domSelection = root.ownerDocument.defaultView?.getSelection();
  if (!domSelection?.anchorNode || !root.contains(domSelection.anchorNode)) return undefined;
  return domSelection;
}

/**
 * Clears the document selection when it still sits inside `editor`'s root AND disagrees with what
 * Lexical committed.
 *
 * A commit tagged `SKIP_DOM_SELECTION_TAG` leaves the DOM selection where it was while Lexical's
 * own moves on. The next update that has no browser event - any imperative `EditorRef` call, and
 * `focus()` - rebuilds Lexical's selection from the DOM one whenever that lies inside the editor,
 * discarding the position the skipped commit set. With no DOM selection in the editor Lexical
 * keeps its own instead.
 *
 * A no-op when the DOM selection is elsewhere: it then belongs to whatever the user is in. Also a
 * no-op when the DOM selection already matches what Lexical committed - a range the user made (or
 * a plugin corrected) that happens to still be current, e.g. selecting text and then clicking a
 * toolbar button before a remote `applyUpdate` lands. That DOM selection is not stale; it is
 * exactly the one the next commit is about to reconcile anyway, so wiping it first would only
 * flash the highlight away and back, and the interval it is gone is a real place for the user to
 * notice the loss.
 *
 * @param editor - The editor whose stale DOM selection to clear.
 */
export function clearStaleDomSelection(editor: LexicalEditor): void {
  const domSelection = getDomSelectionInRoot(editor.getRootElement());
  if (!domSelection) return;
  // `{ editor }` is required: `$createRangeSelectionFromDom` resolves the DOM nodes to Lexical
  // keys through the active editor context, which only this option supplies outside of an update.
  const matchesCommitted = editor.getEditorState().read(
    () => {
      const committed = $getSelection();
      if (!$isRangeSelection(committed)) return false;
      const domAsLexical = $createRangeSelectionFromDom(domSelection, editor);
      return !!domAsLexical && committed.is(domAsLexical);
    },
    { editor },
  );
  if (!matchesCommitted) domSelection.removeAllRanges();
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

/**
 * Registers one `listener` at one `priority` for each of `commands`, in list order: among each
 * command's other listeners at that priority it runs where a `registerCommand` call made at the
 * same point would. Every command gets what `listener` returns.
 *
 * @param editor - The editor to register on.
 * @param commands - The commands to listen to.
 * @param listener - The handler every command shares.
 * @param priority - The priority of every registration.
 * @returns A function that removes every registration made here.
 */
export function registerCommands<P>(
  editor: LexicalEditor,
  commands: readonly LexicalCommand<P>[],
  listener: CommandListener<P>,
  priority: CommandListenerPriority,
): () => void {
  return mergeRegister(
    ...commands.map((command) => editor.registerCommand(command, listener, priority)),
  );
}

/**
 * Hears primary-button pointer presses and their release anywhere in the document holding
 * `editor`'s root, following the root when it changes.
 *
 * Only the PRIMARY button counts: a secondary-button press can open the platform's NATIVE context
 * menu (`ContextMenuPlugin` deliberately lets it through for some targets), which on Windows and
 * Linux grabs the mouse so the page never sees the matching `pointerup`. The button is duck-typed
 * rather than read through `instanceof PointerEvent`: not every host defines that global (jsdom
 * before 27 has none), and a press that carries no button at all still counts as a primary one.
 *
 * Both ends are heard on the DOCUMENT in the capture phase, so a press just outside the root - which
 * still places a caret inside it - and a release anywhere are both heard. `pointercancel` is a
 * release as `pointerup` is: a drag, or a touch that turns into a scroll, never sends `pointerup`.
 *
 * @param editor - The editor whose root's document to listen on.
 * @param handlers - `onPress` runs on a primary-button `pointerdown`; `onRelease` on every
 *   `pointerup` and `pointercancel`; `onRootChange`, when given, each time Lexical reports the root -
 *   at registration, on each swap and on teardown - after the previous document's listeners are
 *   removed and before the new one's are added.
 * @returns A function that removes the listeners.
 */
export function registerPrimaryPointerPress(
  editor: LexicalEditor,
  {
    onPress,
    onRelease,
    onRootChange,
  }: { onPress: () => void; onRelease: () => void; onRootChange?: () => void },
): () => void {
  const handlePointerDown = (event: Event) => {
    if ("button" in event && event.button !== 0) return;
    onPress();
  };
  // One listener does both the wiring and the unwiring: Lexical calls it with the current root at
  // registration, with each replacement root on a swap, and with `(null, previous)` on teardown.
  return editor.registerRootListener((root, previousRoot) => {
    const previousDocument = previousRoot?.ownerDocument;
    previousDocument?.removeEventListener("pointerdown", handlePointerDown, true);
    previousDocument?.removeEventListener("pointerup", onRelease, true);
    previousDocument?.removeEventListener("pointercancel", onRelease, true);
    onRootChange?.();
    const currentDocument = root?.ownerDocument;
    currentDocument?.addEventListener("pointerdown", handlePointerDown, true);
    currentDocument?.addEventListener("pointerup", onRelease, true);
    currentDocument?.addEventListener("pointercancel", onRelease, true);
  });
}

/**
 * Makes a resource each editor has at most one of, shared by everything on that editor that holds
 * it: the first `acquire` for an editor creates it, and the release of its last holder disposes of
 * it. Each holder's `release` counts once, however often it is called.
 *
 * @param create - Makes an editor's resource: its value, and how to dispose of it.
 * @returns `acquire`, which hands out the editor's resource with that holder's release.
 */
export function createPerEditorResource<T>(
  create: (editor: LexicalEditor) => { value: T; dispose: () => void },
): (editor: LexicalEditor) => { value: T; release: () => void } {
  const resources = new WeakMap<
    LexicalEditor,
    { value: T; dispose: () => void; holders: number }
  >();
  return (editor) => {
    let resource = resources.get(editor);
    if (!resource) {
      resource = { ...create(editor), holders: 0 };
      resources.set(editor, resource);
    }
    resource.holders++;
    const held = resource;
    let released = false;
    return {
      value: held.value,
      release: () => {
        if (released) return;
        released = true;
        held.holders--;
        if (held.holders > 0) return;
        held.dispose();
        // Only the entry this holder held: a later one for the same editor belongs to others.
        if (resources.get(editor) === held) resources.delete(editor);
      },
    };
  };
}
