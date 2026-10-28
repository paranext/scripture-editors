import { $selectElementPoint } from "../../nodes/usj/note.utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  $addUpdateTag,
  $getNodeByKey,
  $getPreviousSelection,
  $getSelection,
  $getState,
  $isRangeSelection,
  $isTextNode,
  $setState,
  BLUR_COMMAND,
  COMMAND_PRIORITY_EDITOR,
  FOCUS_COMMAND,
  HISTORY_MERGE_TAG,
  LexicalEditor,
  LexicalNode,
  NodeKey,
  SELECTION_CHANGE_COMMAND,
  SKIP_DOM_SELECTION_TAG,
  TextNode,
} from "lexical";
import { useCallback, useEffect, useRef } from "react";
import {
  $caretHostAtBoundary,
  $createCaretHostNode,
  $isCaretHost,
  $isCursorPlaceholderOnlyText,
  $placeCaretAtBoundary,
  caretHostState,
  CURSOR_CHANGE_TAG,
  CURSOR_PLACEHOLDER_CHAR,
} from "shared";

/**
 * Answers "is the caret somewhere it cannot rest, and which node does it belong after" — the ONE
 * thing that differs between caret-host guards. Returns the node the caret belongs immediately
 * after, or `undefined` when the caret is somewhere this guard has no opinion about.
 *
 * The boundary just past that node is where the caret is put; whether a host has to be
 * materialized there is {@link useTransientCaretHost}'s question, not the rule's, so a rule may
 * name a node whose boundary already has one.
 *
 * Read-only: called inside `editor.getEditorState().read()`, and must not mutate.
 */
export type CaretHostAnchor = () => LexicalNode | undefined;

/**
 * Puts the caret at the boundary just past `target`, materializing a host there when nothing else
 * renders one, drops a host the caret has left behind, and takes over a host the caret rests in
 * that this instance does not track (one an undo brought back). Passing `undefined` does only the
 * last two.
 *
 * {@link useTransientCaretHost} returns this so a guard can drive the same repair from an arrival
 * the caret cannot report itself — a click Lexical resolved to no caret at all.
 *
 * It tags the active update (`CURSOR_CHANGE_TAG`, `HISTORY_MERGE_TAG`) only when it changed a node.
 * Lexical clears an update's tags only when the commit dirties a node, so tags on a selection-only
 * commit ride along on the user's NEXT update, hiding it from the USJ-change handler and merging it
 * into the previous undo step.
 *
 * Mutating: call inside `editor.update()`.
 */
export type CaretHostRepair = (target: LexicalNode | undefined) => void;

/**
 * The attribute a bare caret host's DOM element carries, so a stylesheet can target the host itself
 * rather than whatever text follows a node (`usj-nodes.css` keeps the line still around an empty
 * verse's host this way).
 */
export const CARET_HOST_ATTRIBUTE = "data-caret-host";

/** Per editor, the one host-attribute listener its guards share, and how many guards hold it. */
const hostAttributeSyncs = new WeakMap<
  LexicalEditor,
  { holders: number; unregister: () => void }
>();

/**
 * Keeps {@link CARET_HOST_ATTRIBUTE} on each bare host's DOM element in `editor`, and returns the
 * release. The DOM Lexical renders for a text node carries none of its state, so the mark is copied
 * onto it whenever a text node is created or changes. Every guard on an editor asks for this, and
 * one listener serves them all, so each commit is walked once.
 */
function retainHostAttributeSync(editor: LexicalEditor): () => void {
  let sync = hostAttributeSyncs.get(editor);
  if (!sync) {
    const unregister = editor.registerMutationListener(
      TextNode,
      (mutations) => {
        editor.getEditorState().read(() => {
          for (const [key, mutation] of mutations) {
            if (mutation === "destroyed") continue;
            editor
              .getElementByKey(key)
              ?.toggleAttribute(CARET_HOST_ATTRIBUTE, $isCaretHost($getNodeByKey(key)));
          }
        });
      },
      { skipInitialization: true },
    );
    sync = { holders: 0, unregister };
    hostAttributeSyncs.set(editor, sync);
  }
  sync.holders++;
  const held = sync;
  let released = false;
  return () => {
    if (released) return;
    released = true;
    held.holders--;
    if (held.holders > 0) return;
    held.unregister();
    if (hostAttributeSyncs.get(editor) === held) hostAttributeSyncs.delete(editor);
  };
}

/**
 * The key of the text node a collapsed caret rests in, or `undefined`. Any range — even one inside
 * a host's own placeholder — has left the host: a selected placeholder would otherwise be copied,
 * or quoted by a footnote inserted over it, as content.
 */
function $restingKey(): NodeKey | undefined {
  const selection = $getSelection();
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return undefined;
  return selection.anchor.type === "text" ? selection.anchor.key : undefined;
}

/**
 * Removes the host's own placeholder from `node` — a host, or a piece of one split by a pasted
 * line break — now that text has landed in it, but only where that placeholder is known to be.
 * Text typed or pasted where the caret rested before the placeholder leaves the caret right in
 * front of it; text that went in after it pushed it to the start of the host's original node. If
 * the caret was not resting there collapsed — the placeholder was selected, so what landed
 * replaced it — there is none left. Any other zero-width space is content (a word break in Thai or
 * Khmer), so nothing is removed on a guess.
 *
 * Mutating: call inside `editor.update()`.
 */
function $removeHostPlaceholder(node: TextNode): void {
  const previous = $getPreviousSelection();
  if (!$isRangeSelection(previous) || !previous.isCollapsed()) return;
  const text = node.getTextContent();
  const selection = $getSelection();
  const caretOffset =
    $isRangeSelection(selection) &&
    selection.isCollapsed() &&
    selection.anchor.key === node.getKey()
      ? selection.anchor.offset
      : undefined;
  let index: number | undefined;
  // From offset 0 the key is not checked: a placeholder right at the caret is the host's own, and
  // a caret that arrived from another node has a previous anchor elsewhere.
  if (previous.anchor.offset === 0) {
    if (caretOffset !== undefined && text[caretOffset] === CURSOR_PLACEHOLDER_CHAR) {
      index = caretOffset;
    }
  } else if (previous.anchor.key === node.getKey() && text[0] === CURSOR_PLACEHOLDER_CHAR) {
    index = 0;
  }
  if (index === undefined) return;
  node.setTextContent(text.slice(0, index) + text.slice(index + 1));
  if (caretOffset !== undefined) {
    const nextOffset = caretOffset > index ? caretOffset - 1 : caretOffset;
    node.select(nextOffset, nextOffset);
  }
}

/**
 * The transient caret-host lifecycle, shared by every guard that needs one.
 *
 * Some caret positions in this editor can only be expressed as an ELEMENT point — a boundary with
 * no text node on it — because what surrounds them renders no text the browser can draw an
 * insertion point in: a childless decorator such as an immutable verse number, or a collapsed note
 * whose content is hidden. Lexical is perfectly happy with such a caret; the browser paints
 * nothing, so the user sees no cursor and the next keypress becomes the page's rather than the
 * editor's. The repair is to materialize a zero-width-space text node at that position and move the
 * caret into it.
 *
 * The repair is stated once, as "put the caret at the boundary past this node, and give that
 * boundary something to render the caret in if nothing there already does". Stating it that way
 * lets a guard drive it from an arrival the caret's own resting place cannot express — a click that
 * came down inside hidden content, or produced no caret at all — and get the same position and the
 * same single host as the arrival that does announce itself.
 *
 * The host is TRANSIENT, and this hook is what makes that true in one place rather than once per
 * guard: it is created only when the caret comes to rest at such a position (or focus returns to
 * one), removed as soon as the caret leaves (a range selection counts) or the editor blurs, and
 * loses its own placeholder the moment text lands in it. It never accumulates and never appears in
 * a document nobody put a caret into.
 *
 * Every host creation and removal carries {@link CURSOR_CHANGE_TAG}, which is in
 * `blackListedChangeTags` — so the commit never reaches the host application's USJ-change handler
 * and produces no delta op — and `HISTORY_MERGE_TAG`, so creating or removing a host is no step of
 * its own in undo and never clears the redo stack. The text that lands in a host is the user's
 * edit, so the transform that turns the host into that text adds no tags. The USJ serializer drops
 * a marked host as well, and the outgoing delta gives it zero length, so a host cannot reach saved
 * Scripture or a peer even if one somehow outlived a commit. Both recognize a host by its mark
 * (`transientCaretHost.utils.ts` in `shared`), never by its text. (Applying a
 * peer's delta still counts a host as one unit, so a remote op past a host lands one unit off.) All
 * placeholder handling is scoped to nodes marked as hosts, and removes only a host's own
 * placeholder — a zero-width space is legitimate content in some scripts (Thai/Khmer/Lao line
 * breaks) and is never touched.
 *
 * Unlike the arrow-driven `CursorHandler` placeholder system (perf-react), this hosts a *resting*
 * caret.
 *
 * @param $caretHostAnchor - The guard's own rule for when a host is needed. Must be stable across
 *   renders (declare it at module scope), since it is an effect dependency.
 * @returns The repair step itself, for a guard that has an arrival of its own to drive it from.
 */
export function useTransientCaretHost($caretHostAnchor: CaretHostAnchor): CaretHostRepair {
  const [editor] = useLexicalComposerContext();
  const hostKeyRef = useRef<NodeKey | undefined>(undefined);

  // See CaretHostRepair. Deliberately free of `editor`: everything it touches is resolved from the
  // active editor state, so it is safe to hand to a caller that is already inside an update.
  const $repairCaret = useCallback<CaretHostRepair>((target) => {
    let mutated = false;
    const restingKey = $restingKey();
    const staleKey = hostKeyRef.current;
    // A tracked host that is no longer a bare host (text landed in it) is no longer ours.
    const staleIsBareHost = !!staleKey && $isCaretHost($getNodeByKey(staleKey));
    if (staleKey && !staleIsBareHost) hostKeyRef.current = undefined;

    // The host the caret was just put into, which is therefore not stale whatever it was before.
    let occupiedKey: NodeKey | undefined;
    if (target) {
      // The repair is the same however the caret got here: put it at the boundary just past the
      // named node, materializing a host there only when nothing already renders one. Reusing an
      // existing host is what keeps a second arrival at the same position — a click, once an
      // earlier arrival has already put a host there — from stacking hosts.
      const parent = target.getParentOrThrow();
      const boundary = target.getIndexWithinParent() + 1;
      // Only a placeholder-only node counts: any text node can carry a caret, but a rule names
      // this boundary because typing must land in a node of its own there, not in whatever text
      // follows it. An unmarked one — a zero-width space loaded or typed as content — is reused
      // rather than stacked behind, but being unmarked it is never stripped or removed.
      const atBoundary = $caretHostAtBoundary(parent, boundary);
      const existing = $isCursorPlaceholderOnlyText(atBoundary) ? atBoundary : undefined;
      if (existing) {
        // Track a reused host too, so the stale-host pass below and blur remove it when the caret
        // leaves. Neither ever removes an unmarked one, so tracking that is harmless.
        hostKeyRef.current = existing.getKey();
        occupiedKey = existing.getKey();
      } else {
        const host = $createCaretHostNode();
        target.insertAfter(host);
        hostKeyRef.current = host.getKey();
        occupiedKey = host.getKey();
        mutated = true;
      }
      $placeCaretAtBoundary(parent, boundary);
    }

    // A host the caret has left, and has not just been put back into, should go: the tracked one,
    // and the one the caret last rested in, which no instance may track yet — an undo brings a
    // host back with the caret in it but dispatches no selection change to adopt it.
    const previous = $getPreviousSelection();
    const previousKey =
      $isRangeSelection(previous) && previous.isCollapsed() ? previous.anchor.key : undefined;
    for (const key of new Set([staleIsBareHost ? staleKey : undefined, previousKey])) {
      if (!key || key === restingKey || key === occupiedKey) continue;
      const stale = $getNodeByKey(key);
      if (!$isCaretHost(stale) || !stale?.isAttached()) continue;
      stale.remove();
      mutated = true;
      if (hostKeyRef.current === key) hostKeyRef.current = undefined;
    }

    // A host the caret rests in that this instance does not track — one an undo brought back, say
    // — is adopted, so the caret leaving it removes it like any other.
    if (!occupiedKey && restingKey && restingKey !== hostKeyRef.current) {
      if ($isCaretHost($getNodeByKey(restingKey))) hostKeyRef.current = restingKey;
    }
    if (mutated) {
      $addUpdateTag(CURSOR_CHANGE_TAG);
      $addUpdateTag(HISTORY_MERGE_TAG);
    }
  }, []);

  useEffect(() => {
    // SELECTION_CHANGE runs inside the update that applies the new selection, so the repair reads
    // that pending selection directly. It converges: after the repair the caret sits in a host
    // past the anchor, so the next SELECTION_CHANGE finds nothing to repair and no stale host.
    const $syncCaretHost = (): void => {
      $repairCaret($caretHostAnchor());
    };

    /**
     * Once text lands in a host — typed, pasted as plain text, or dropped — the host becomes that
     * text: it stops being a host and loses its own placeholder. Every guard instance registers this
     * transform; the first to see the node clears its mark, so the placeholder is removed once.
     */
    const $stripPlaceholderOnEdit = (node: TextNode): void => {
      // Still a bare host: nothing has landed in it.
      if ($isCaretHost(node)) return;
      // Whichever instance strips it, this one no longer tracks it: an undo can bring the same
      // node back as a host, and a stale key would then take it for one the caret has left.
      if (hostKeyRef.current === node.getKey()) hostKeyRef.current = undefined;
      if (!$getState(node, caretHostState)) return;
      $setState(node, caretHostState, false);
      $removeHostPlaceholder(node);
    };

    // A focus's queued re-host must not run once this effect is torn down.
    let disposed = false;
    const unregister = mergeRegister(
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          $syncCaretHost();
          return false;
        },
        COMMAND_PRIORITY_EDITOR,
      ),
      editor.registerCommand(
        BLUR_COMMAND,
        () => {
          // Runs inside the blur's update. A caret in the host goes to the boundary it stood for,
          // unannounced so no guard re-hosts it. `SKIP_DOM_SELECTION_TAG`: writing the selection
          // back would refocus the editor. With nothing tracked, the host the caret rests in is
          // the one to remove — an undo brings a host back without any instance adopting it.
          const restingKey = $restingKey();
          const key =
            hostKeyRef.current ??
            (restingKey && $isCaretHost($getNodeByKey(restingKey)) ? restingKey : undefined);
          hostKeyRef.current = undefined;
          const host = key ? $getNodeByKey(key) : undefined;
          // Another guard instance tracking the same host may have removed it already.
          if (!$isTextNode(host) || !$isCaretHost(host) || !host.isAttached()) return false;
          const parent = host.getParentOrThrow();
          const boundary = host.getIndexWithinParent();
          const selection = $getSelection();
          const isInHost =
            $isRangeSelection(selection) &&
            selection.anchor.key === host.getKey() &&
            selection.focus.key === host.getKey();
          host.remove();
          // Not ElementNode.select, which descends into a char span's last child — a collapsed
          // note ending the span, putting the caret in its hidden content.
          if (isInHost) $selectElementPoint(parent, boundary, { announce: false });
          $addUpdateTag(CURSOR_CHANGE_TAG);
          $addUpdateTag(HISTORY_MERGE_TAG);
          $addUpdateTag(SKIP_DOM_SELECTION_TAG);
          return false;
        },
        COMMAND_PRIORITY_EDITOR,
      ),
      // Focus can return without a selectionchange (the host application refocusing the editor, a
      // menu closing), leaving the caret on the hostless point blur left. Re-host in a later
      // update, since Lexical can fire focus mid-commit against the frozen state, and only when
      // the committed caret lacks a host: an update outside any event reads its selection from
      // the DOM, which may not yet hold the committed caret. `editor.read` commits any pending
      // update first, so the re-host's tags never cover someone else's edit.
      editor.registerCommand(
        FOCUS_COMMAND,
        () => {
          queueMicrotask(() => {
            if (disposed) return;
            const needsHost = editor.read(() => {
              if (!$caretHostAnchor()) return false;
              const restingKey = $restingKey();
              return !restingKey || !$isCursorPlaceholderOnlyText($getNodeByKey(restingKey));
            });
            if (needsHost) editor.update($syncCaretHost);
          });
          return false;
        },
        COMMAND_PRIORITY_EDITOR,
      ),
      editor.registerNodeTransform(TextNode, $stripPlaceholderOnEdit),
      retainHostAttributeSync(editor),
    );
    // Drop the tracked key when the editor changes so it can't resolve into a different editor.
    return () => {
      disposed = true;
      unregister();
      hostKeyRef.current = undefined;
    };
  }, [editor, $caretHostAnchor, $repairCaret]);

  return $repairCaret;
}
