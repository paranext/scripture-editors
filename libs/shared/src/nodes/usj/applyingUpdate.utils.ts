/**
 * Editor-scoped signal that the commit in flight is an applied update — a collaborator's delta
 * (`"remote"`) or the host's own ops (`"local"`) handed to the editor's `applyUpdate` — rather than
 * a user edit made in the editor.
 *
 * Listeners that treat an applied update differently read this rather than `DELTA_CHANGE_TAG`:
 * Lexical clears an update's tags only when its commit dirties a node, so the tag on an apply whose
 * ops the tree already reflects stays on the editor and rides onto the user's next edit. This
 * signal covers the apply's own discrete commit and nothing after it.
 */
import { LexicalEditor } from "lexical";

/** Where an applied update came from: a collaborator (`"remote"`) or the host itself (`"local"`). */
export type AppliedUpdateSource = "local" | "remote";

const applyingByEditor = new WeakMap<LexicalEditor, AppliedUpdateSource>();

/**
 * Mark `editor` as committing an update applied from `source`, or as not applying one
 * (`undefined`). Set it around a DISCRETE update, cleared in a `finally`, so it covers exactly that
 * commit's transforms and listeners.
 */
export function markApplyingUpdate(
  editor: LexicalEditor,
  source: AppliedUpdateSource | undefined,
): void {
  if (source) applyingByEditor.set(editor, source);
  else applyingByEditor.delete(editor);
}

/** Where the update `editor` is committing was applied from, or `undefined` when it is not
 * committing an applied update (see {@link markApplyingUpdate}). */
export function getApplyingUpdateSource(editor: LexicalEditor): AppliedUpdateSource | undefined {
  return applyingByEditor.get(editor);
}
