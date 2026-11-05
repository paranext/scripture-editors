import { act } from "@testing-library/react";

/**
 * Flush queued macrotasks + microtasks inside act(). jsdom fires native `selectionchange` via
 * setTimeout(0), and the editor defers work (cursor placement, the verse-mutation
 * SELECTION_CHANGE_COMMAND dispatch) by a microtask, so tests that assert quiescence - or that
 * need a deferred effect to have run before asserting - must flush both first.
 */
export async function flushQueuedEvents(): Promise<void> {
  await act(async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 0);
    });
  });
}

/** More rounds than any answer to a selection change takes: each answer moves the caret at most
 * once more. */
const MAX_SELECTION_CHANGE_ROUNDS = 10;

/**
 * Let every native `selectionchange` the last step queued reach the editor, and the editor's
 * answer to it finish, before the next step reads or edits anything.
 *
 * When the DOM selection is written — by Lexical's commit, which runs in a microtask after the
 * update that moved the selection — jsdom queues the `selectionchange` a browser fires as a
 * zero-delay timer, not at once. Lexical answers it by reading the DOM selection back (where it
 * can resolve the caret to a different spelling of the same place) and announcing
 * `SELECTION_CHANGE_COMMAND`, which the editor's selection listeners — the protected note shell's
 * caret guard among them — act on. Left to the event loop, that answer lands before the next step
 * on some runs and after it on others, so the same case could run with or without it. In a browser
 * the event always arrives before the user's next key, so every step waits for it here.
 *
 * Each round waits two timer turns: a commit still pending in a microtask when the first timer is
 * queued writes the DOM selection, and so queues its event, before the second timer. Rounds repeat
 * until one delivers no event, since an answer that moves the selection queues another.
 */
export async function drainNativeSelectionChange(): Promise<void> {
  for (let round = 0; round < MAX_SELECTION_CHANGE_ROUNDS; round += 1) {
    let delivered = false;
    const onSelectionChange = () => {
      delivered = true;
    };
    document.addEventListener("selectionchange", onSelectionChange);
    for (let turn = 0; turn < 2; turn += 1)
      await new Promise<void>((resolve) => {
        setTimeout(resolve, 0);
      });
    document.removeEventListener("selectionchange", onSelectionChange);
    if (!delivered) return;
  }
  throw new Error(
    `the selection never settled: ${MAX_SELECTION_CHANGE_ROUNDS} rounds each delivered a native selectionchange`,
  );
}
