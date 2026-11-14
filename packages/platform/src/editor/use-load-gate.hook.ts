import { useCallback, useEffect, useRef } from "react";
import { LoggerBasic } from "shared";

/** An operation waiting on a load, and what it addresses (see `runWhenLoaded`'s `key`). */
interface QueuedAction {
  action: () => void;
  key?: string;
}

/**
 * Defers imperative work that has to address the loaded document until the load carrying it has
 * finished.
 *
 * `LoadStatePlugin` commits USJ from a microtask, and `editor.setEditorState()` replaces the whole
 * state, so an operation issued while a load is in flight either can't resolve its target or is
 * thrown away by the commit that follows. Callers shouldn't have to know that: they hold a ref and
 * may reasonably use it the moment they have one.
 *
 * When no load is pending the operation runs immediately. When one is, the operation runs at the
 * first moment a load finishes with nothing else loading or requested — so it addresses a live
 * document, and an operation that can never succeed still fails there rather than waiting.
 *
 * @param logger - Reports work that no longer has a caller to fail to: a deferred operation that
 *   throws, and operations still queued when the editor unmounts.
 */
export function useLoadGate(logger?: LoggerBasic) {
  // A load always follows mount, and this hook runs before LoadStatePlugin's effect reports it.
  const isLoadRequestedRef = useRef(true);
  const activeLoadCountRef = useRef(0);
  const queuedActionsRef = useRef<QueuedAction[]>([]);
  const isTornDownRef = useRef(false);
  // Read at call time so the gate's callbacks stay referentially stable while a logger swap is
  // still picked up (and so teardown can report against the logger the editor last had).
  const loggerRef = useRef(logger);
  useEffect(() => {
    loggerRef.current = logger;
  }, [logger]);

  /** The document is stable: nothing is loading, and no load is known to be coming. */
  const isDocumentLoaded = useCallback(
    () => !isLoadRequestedRef.current && activeLoadCountRef.current === 0,
    [],
  );

  const drain = useCallback(() => {
    // Re-check the gate: a load can be requested between the load finish that scheduled this drain
    // and the drain itself. Leaving the actions queued lets the next load to finish run them
    // against a document that is actually live, rather than one about to be replaced.
    if (!isDocumentLoaded()) return;

    const actions = queuedActionsRef.current;
    queuedActionsRef.current = [];
    for (const { action } of actions) {
      try {
        action();
      } catch (error) {
        // These run from a microtask, so there is no caller left to throw to: an escaping error
        // would be an unhandled global one and would drop the rest of the queue with it.
        loggerRef.current?.error(`Editor: a deferred operation failed after the load. ${error}`);
      }
    }
  }, [isDocumentLoaded]);

  /** Report a load starting or finishing. Calls must be balanced. */
  const handleLoadingChange = useCallback(
    (isLoading: boolean) => {
      if (isLoading) {
        isLoadRequestedRef.current = false;
        activeLoadCountRef.current += 1;
        return;
      }
      activeLoadCountRef.current = Math.max(0, activeLoadCountRef.current - 1);
      if (!isDocumentLoaded()) return;
      // A microtask, not a direct call: this runs from inside the finish report, and deferring
      // keeps the queued work out of it (and off React's commit phase).
      queueMicrotask(drain);
    },
    [drain, isDocumentLoaded],
  );

  /**
   * Note that a load is certain but hasn't been reported yet — `LoadStatePlugin` reports one only
   * when React renders it, which is later than `setUsj` returning. Cleared by the next
   * `handleLoadingChange(true)`, which comes in the layout phase of the commit that renders that
   * load.
   */
  const noteLoadRequested = useCallback(() => {
    isLoadRequestedRef.current = true;
  }, []);

  /**
   * Run now if the document is loaded and nothing is waiting, otherwise once the load in flight
   * finishes.
   *
   * @param action - The operation to run.
   * @param key - Identifies what the operation addresses. A queued operation with the same key is
   *   replaced: the queue drains in one tick, so two calls for one target would run as a same-tick
   *   pair, and the load drops whatever the earlier one would have done anyway.
   */
  const runWhenLoaded = useCallback(
    (action: () => void, key?: string) => {
      // Waiting work runs first even once the gate reads open: between a load finishing and its
      // drain, running this now would overtake operations issued before it.
      // Deliberately not wrapped: with the gate open this is still the caller's own call stack, so
      // a throw reaches the caller directly.
      if (isDocumentLoaded() && queuedActionsRef.current.length === 0) {
        action();
        return;
      }
      const queue = queuedActionsRef.current;
      queuedActionsRef.current = [
        ...(key === undefined ? queue : queue.filter((queued) => queued.key !== key)),
        { action, key },
      ];
    },
    [isDocumentLoaded],
  );

  useEffect(() => {
    isTornDownRef.current = false;
    return () => {
      // Whatever is queued belongs to the instance going away, so a remount starts clean.
      const droppedCount = queuedActionsRef.current.length;
      queuedActionsRef.current = [];
      if (droppedCount === 0) return;

      isTornDownRef.current = true;
      // Deferred, and re-checked: React's dev-only double-invoke unmounts and immediately remounts
      // this instance, and the consumer's effect re-queues its work in that second pass — which is
      // not the loss worth reporting. A real teardown has nothing to re-set the flag.
      queueMicrotask(() => {
        if (!isTornDownRef.current) return;
        loggerRef.current?.error(
          `Editor: ${droppedCount} operation(s) waiting on a load were dropped when the editor` +
            " unmounted.",
        );
      });
    };
  }, []);

  return { handleLoadingChange, noteLoadRequested, runWhenLoaded };
}
