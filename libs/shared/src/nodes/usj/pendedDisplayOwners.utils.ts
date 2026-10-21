/**
 * Editor-scoped registry of display-run OWNER keys the marker-edit engine currently holds
 * pending. The engine (MarkerEditPlugin, platform) registers its live pending set here so the
 * self-healing display syncs — which live in shared/shared-react and cannot import the engine —
 * can leave a pended owner's run alone instead of resurrecting a deletion the engine has not
 * settled yet. Keyed per editor (main editor and footnote popover each register their own set).
 */
import {
  $getEditor,
  EditorState,
  HISTORIC_TAG,
  LexicalEditor,
  LexicalNode,
  NodeKey,
} from "lexical";

interface PendedOwnersEntry {
  owners: Set<NodeKey>;
  /** Rebuilds `owners` from the bytes of a state that undo/redo restored. */
  rederive?: (editorState: EditorState) => void;
  /** The history-restored state `owners` was last rebuilt for. */
  derivedFor?: EditorState;
}

const pendedOwnersByEditor = new WeakMap<LexicalEditor, PendedOwnersEntry>();

/**
 * Publishes the engine's live pending set for `editor`.
 *
 * @param rederive - Rebuilds `owners` from a history-restored state's bytes. Lexical restores an
 *   undo/redo state without running node transforms, so nothing re-pends a restored literal unless
 *   this runs; see {@link ensurePendedDisplayOwnersCurrent}.
 * @returns A function that unregisters the set, if it is still the registered one.
 */
export function registerPendedDisplayOwners(
  editor: LexicalEditor,
  owners: Set<NodeKey>,
  rederive?: (editorState: EditorState) => void,
): () => void {
  const entry: PendedOwnersEntry = { owners, rederive };
  pendedOwnersByEditor.set(editor, entry);
  return () => {
    if (pendedOwnersByEditor.get(editor) === entry) pendedOwnersByEditor.delete(editor);
  };
}

/**
 * Re-derive the pend set for a history-restored state if not yet done for that state. Idempotent.
 *
 * Any update listener that reads the pend set for a commit calls this first, so what it reads does
 * not depend on whether the engine's own listener ran before it: listener order follows
 * registration order, which a re-mounted plugin changes. Only a commit tagged `HISTORIC_TAG` is
 * re-derived; every other commit's pends are already current, because the engine's node transforms
 * maintain them inside the update. Keyed on the state object, which is safe because Lexical clones
 * a restored state before committing it, so no two restores ever commit the same object.
 */
export function ensurePendedDisplayOwnersCurrent(
  editor: LexicalEditor,
  editorState: EditorState,
  tags: ReadonlySet<string>,
): void {
  const entry = pendedOwnersByEditor.get(editor);
  if (!entry?.rederive || !tags.has(HISTORIC_TAG) || entry.derivedFor === editorState) return;
  entry.rederive(editorState);
  entry.derivedFor = editorState;
}

/**
 * The live pending-owner set registered for `editor`, or `undefined` when no marker-edit engine is
 * mounted on it (a non-editable marker mode, or an editor that has torn down). The SAME mutable Set
 * the engine holds, not a snapshot — a reader that keeps the reference sees later pends — so
 * callers must treat it as read-only. Takes the editor explicitly rather than reading `$getEditor()`
 * so it can be called from outside a read/update (the editor-facing `getUsj()` path decides whether
 * to enter a read at all based on whether anything is pending).
 */
export function getPendedDisplayOwners(editor: LexicalEditor): ReadonlySet<NodeKey> | undefined {
  return pendedOwnersByEditor.get(editor)?.owners;
}

/** Whether `node`'s key is pended in the active editor. Call inside a read/update. */
export function $isDisplayOwnerPended(node: LexicalNode): boolean {
  return pendedOwnersByEditor.get($getEditor())?.owners.has(node.getKey()) ?? false;
}

/**
 * Lets the shared self-healing display-run sync (`$syncDisplayRun`, displayRunSync.utils.ts)
 * report that it just found an owner's run destroyed by something other than itself, so the
 * marker-edit engine settles it on caret departure instead of the sync resurrecting it. Writes
 * directly into the SAME mutable Set `registerPendedDisplayOwners` was given, rather than
 * routing the report back through one of the engine's own node transforms: which plugin's
 * transform runs first on a shared dirty node depends on mount order (the sync and the engine
 * are registered by separate, independently ordered plugins), so a report that only took effect
 * via a later engine-side transform would still lose the race whenever the sync happens to run
 * first. A direct write has no such ordering dependency. Call inside a read/update. No-op if no
 * engine is currently registered for the active editor.
 */
export function $reportDestroyedDisplayOwner(node: LexicalNode): void {
  pendedOwnersByEditor.get($getEditor())?.owners.add(node.getKey());
}
