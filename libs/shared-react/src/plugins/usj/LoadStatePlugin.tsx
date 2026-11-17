import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $addUpdateTag, CLEAR_HISTORY_COMMAND, EditorState, SKIP_DOM_SELECTION_TAG } from "lexical";
import { RefObject, useEffect, useLayoutEffect, useRef } from "react";
import {
  clearSplitOrigins,
  EditorAdaptor,
  EXTERNAL_USJ_MUTATION_TAG,
  LoggerBasic,
  NodeOptions,
} from "shared";
import { editorHoldsDomFocus } from "./editorUpdate.utils";

/** Told `true` when a load starts and `false` when it finishes (see `onLoadingChange`). */
type LoadingChangeHandler = (isLoading: boolean) => void;

/**
 * A plugin component that updates the state of the lexical editor when incoming Scripture changes.
 * @param scripture - Scripture data.
 * @param scriptureRef - Optional ref to scripture data. If provided, reads from ref at update time
 *   to get the most current value (useful when options change triggers state updates).
 * @param nodeOptions - Options for each node.
 * @param editorAdaptor - Editor adaptor.
 * @param viewOptions - View options of the editor.
 * @param onLoadingChange - Called when a load starts and when it finishes.
 * @param logger - Logger instance.
 * @returns null, i.e. no DOM elements.
 */
export function LoadStatePlugin<TLogger extends LoggerBasic>({
  scripture,
  scriptureRef,
  nodeOptions,
  editorAdaptor,
  viewOptions,
  onLoadingChange,
  logger,
}: {
  scripture?: unknown;
  scriptureRef?: RefObject<unknown>;
  nodeOptions?: NodeOptions;
  editorAdaptor: EditorAdaptor;
  viewOptions?: unknown;
  /**
   * Called `true` when a load starts and `false` once it finishes. Calls are always balanced, so a
   * caller may count them, and when `false` is reported the document this load leaves behind is
   * live: the loaded one if it committed, or the previous one if the load was skipped (nothing to
   * serialize) or failed. Use it to defer work that has to address the loaded content.
   *
   * Held in a ref internally, so an inline lambda is safe — the identity of this callback never
   * triggers a reload.
   */
  onLoadingChange?: LoadingChangeHandler;
  logger?: TLogger;
}): null {
  const [editor] = useLexicalComposerContext();
  // Held in a ref, deliberately NOT a dependency of either effect that a load runs through — the
  // start report and the load itself. The load replaces the document and clears undo/redo every
  // time it fires, so a consumer passing an inline lambda would wipe both on every one of its
  // renders — the footgun the `viewOptions`/`logger` memos in the platform `Editor` exist to close,
  // closed here once for every consumer.
  const onLoadingChangeRef = useRef(onLoadingChange);

  // A layout effect, so the start report below already sees the latest callback.
  useLayoutEffect(() => {
    onLoadingChangeRef.current = onLoadingChange;
  }, [onLoadingChange]);

  // The callback a start was reported to from the layout phase, waiting for the load effect below
  // to pick it up and report the finish to the same one.
  const startedLoadRef = useRef<{ reportLoading?: LoadingChangeHandler }>();
  // The load inputs the last start was reported for.
  const startedForRef = useRef<unknown[]>();

  // Reports the load's start in the layout phase of the commit that renders the new inputs: before
  // any ancestor's layout effect, so a host touching the editor from its own layout effect already
  // sees the load coming. Keep these dependencies identical to the load effect's below, so the two
  // fire on the same commits.
  useLayoutEffect(() => {
    const loadInputs = [editor, editorAdaptor, logger, scripture, scriptureRef, viewOptions];
    // Re-showing content a Suspense boundary hid re-runs layout effects but not passive ones, so a
    // start reported then would have no load, and no finish, to balance it.
    const startedFor = startedForRef.current;
    if (startedFor?.every((input, index) => Object.is(input, loadInputs[index]))) return;
    startedForRef.current = loadInputs;

    const reportLoading = onLoadingChangeRef.current;
    startedLoadRef.current = { reportLoading };
    reportStart(reportLoading, logger);
  }, [editor, editorAdaptor, logger, scripture, scriptureRef, viewOptions]);

  useEffect(() => {
    editorAdaptor.initialize?.(nodeOptions, logger);
  }, [editorAdaptor, logger, nodeOptions]);

  useEffect(() => {
    // Read scripture from ref if available (to get latest value after state updates),
    // otherwise fall back to the prop value
    const currentScripture = scriptureRef?.current ?? scripture;
    // Usually the layout phase reported this load's start. When it did not — StrictMode's second
    // run of this effect, which follows no new layout report — report it here, so every finish
    // below has its start.
    const startedLoad = startedLoadRef.current;
    startedLoadRef.current = undefined;
    // Captured once, so both halves of a load report to the same callback even if the prop
    // changes while the load is in flight.
    const reportLoading = startedLoad ? startedLoad.reportLoading : onLoadingChangeRef.current;
    if (!startedLoad) {
      // Recorded here too, so the layout report's guard matches whichever effect reported last.
      startedForRef.current = [editor, editorAdaptor, logger, scripture, scriptureRef, viewOptions];
      reportStart(reportLoading, logger);
    }
    // Every exit from this effect reports `false` exactly once — including a throw out of the
    // adaptor — otherwise a caller that gates work on the load waits forever.
    let isSettled = false;
    const settle = () => {
      if (isSettled) return;
      isSettled = true;
      // Reported from the load's microtask, where an escaping error would be an unhandled one.
      try {
        reportLoading?.(false);
      } catch (error) {
        logger?.error(`LoadStatePlugin: onLoadingChange(false) threw. ${error}`);
      }
    };

    let editorState: EditorState;
    try {
      editorAdaptor.reset?.();
      const serializedEditorState = editorAdaptor.serializeEditorState(
        currentScripture,
        viewOptions,
      );
      if (serializedEditorState == null) {
        logger?.warn(
          "LoadStatePlugin: serializedEditorState was null or undefined. Skipping editor update.",
        );
        settle();
        return;
      }

      editorState = editor.parseEditorState(serializedEditorState);
    } catch (error) {
      logger?.error(`LoadStatePlugin: error parsing editor state. ${error}`);
      settle();
      return;
    }

    // Use queueMicrotask to defer the editor update outside of React's lifecycle,
    // preventing flushSync warnings when this is triggered by a parent component update
    queueMicrotask(() => {
      try {
        // An external replace parses to a null selection; reconciling that against the
        // SHARED document selection clears/moves the caret of whatever DOES have focus — observed
        // live as the parent editor's PDP echo (~150-250ms after an edit) stealing DOM focus out
        // of the footnote-editor popover mid-typing. An editor without focus has no claim on the
        // DOM selection, so skip DOM-selection reconciliation entirely in that case. Evaluated at
        // apply time (inside the microtask), not schedule time, so a focus change in between is
        // honored. A focused editor keeps the existing behavior.
        const editorHasFocus = editorHoldsDomFocus(editor);
        // `discrete` so the loaded document is live before `update` returns, which is what lets
        // `settle` below be a plain statement. Without it Lexical schedules the commit itself,
        // and only when the update cloned the editor state — so whether the settle lands after
        // the commit would depend on Lexical's internal ordering rather than on anything here.
        // Same reason the platform `Editor`'s content-mutating ref methods use it.
        editor.update(
          () => {
            if (!editorHasFocus) $addUpdateTag(SKIP_DOM_SELECTION_TAG);
            editor.setEditorState(editorState);
            editor.dispatchCommand(CLEAR_HISTORY_COMMAND, undefined);
            // No undo can restore a span of the replaced document, so its split record goes too.
            clearSplitOrigins(editor);
          },
          { tag: EXTERNAL_USJ_MUTATION_TAG, discrete: true },
        );
      } catch (error) {
        logger?.error(`LoadStatePlugin: error setting editor state. ${error}`);
      } finally {
        settle();
      }
    });
  }, [editor, editorAdaptor, logger, scripture, scriptureRef, viewOptions]);

  return null;
}

/**
 * Reports a load starting. A throwing callback is the consumer's bug: it is logged, and the
 * document loads regardless.
 */
function reportStart(
  reportLoading: LoadingChangeHandler | undefined,
  logger: LoggerBasic | undefined,
): void {
  try {
    reportLoading?.(true);
  } catch (error) {
    logger?.error(`LoadStatePlugin: onLoadingChange(true) threw; loading anyway. ${error}`);
  }
}
