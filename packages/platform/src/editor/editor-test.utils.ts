import { act } from "@testing-library/react";
import { createRequire } from "node:module";

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

/** The `selectionchange` events jsdom has queued and not yet fired. */
interface SelectionChangeQueue {
  pending: number;
}

/** Where the queue is kept on jsdom's selection class, so every test file in a worker shares one. */
const SELECTION_CHANGE_QUEUE = Symbol.for("scripture-editors.test.selectionChangeQueue");

interface SelectionImplPrototype {
  _associateRange?: (...args: unknown[]) => unknown;
  [SELECTION_CHANGE_QUEUE]?: SelectionChangeQueue;
}

/**
 * Count the `selectionchange` events jsdom queues, by wrapping the one place it queues them (its
 * selection's `_associateRange`, which queues one as a zero-delay timer whenever the range
 * changes). Installed once per worker; `undefined` if this jsdom has no such method, in which case
 * {@link drainNativeSelectionChange} waits out timer turns instead.
 */
function selectionChangeQueue(): SelectionChangeQueue | undefined {
  let prototype: SelectionImplPrototype | undefined;
  try {
    // A jsdom internal, reached through the same module instance the test environment loaded.
    const selectionImpl: unknown = createRequire(import.meta.url)(
      "jsdom/lib/jsdom/living/selection/Selection-impl.js",
    );
    prototype = (selectionImpl as { implementation?: { prototype?: SelectionImplPrototype } })
      .implementation?.prototype;
  } catch {
    return undefined;
  }
  if (!prototype) return undefined;
  const installed = prototype[SELECTION_CHANGE_QUEUE];
  if (installed) return installed;
  const associateRange = prototype._associateRange;
  if (typeof associateRange !== "function") return undefined;
  const queue: SelectionChangeQueue = { pending: 0 };
  prototype._associateRange = function associateRangeCounted(this: unknown, ...args: unknown[]) {
    const realSetTimeout = globalThis.setTimeout;
    globalThis.setTimeout = ((callback: () => void, delay?: number) => {
      queue.pending += 1;
      return realSetTimeout(() => {
        queue.pending -= 1;
        callback();
      }, delay);
    }) as typeof setTimeout;
    try {
      return associateRange.apply(this, args);
    } finally {
      globalThis.setTimeout = realSetTimeout;
    }
  };
  prototype[SELECTION_CHANGE_QUEUE] = queue;
  return queue;
}

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
 * Each round first lets the microtasks run, so a commit still pending writes the DOM selection and
 * queues its event, then waits while jsdom has an event queued. Rounds repeat until one finds none
 * queued, since an answer that moves the selection queues another. A timer turn is at least a
 * millisecond, and the oracles drain thousands of times, so the wait is only for an event jsdom has
 * actually queued.
 */
export async function drainNativeSelectionChange(): Promise<void> {
  const queue = selectionChangeQueue();
  if (!queue) return drainByTimerTurns();
  for (let round = 0; round < MAX_SELECTION_CHANGE_ROUNDS; round += 1) {
    await new Promise<void>((resolve) => {
      setImmediate(resolve);
    });
    if (queue.pending === 0) return;
    while (queue.pending > 0)
      await new Promise<void>((resolve) => {
        setTimeout(resolve, 0);
      });
  }
  throw new Error(
    `the selection never settled: ${MAX_SELECTION_CHANGE_ROUNDS} rounds each delivered a native selectionchange`,
  );
}

/**
 * {@link drainNativeSelectionChange} without the queue count: each round waits two timer turns (a
 * commit still pending in a microtask when the first timer is queued writes the DOM selection, and
 * so queues its event, before the second timer), and rounds repeat until one delivers no event.
 */
async function drainByTimerTurns(): Promise<void> {
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
