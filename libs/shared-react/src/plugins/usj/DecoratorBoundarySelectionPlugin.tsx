import { $isImmutableNoteCallerNode } from "../../nodes/usj";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $createRangeSelectionFromDom,
  $getNearestNodeFromDOMNode,
  $getSelection,
  $isDecoratorNode,
  $isRangeSelection,
  $setSelection,
  COMMAND_PRIORITY_CRITICAL,
  getDOMSelection,
  isDOMTextNode,
  isSelectionWithinEditor,
  LexicalEditor,
  LexicalNode,
  SELECTION_CHANGE_COMMAND,
} from "lexical";
import { useEffect, useRef } from "react";

/** One end of a DOM selection — the container node plus the offset within it. */
interface DomPoint {
  node: Node;
  offset: number;
}

/** Which edge of a decorator a point is being moved to, expressed in its PARENT's child list. */
type Boundary = "before" | "after";

/**
 * The whole of a `Selection` that `$createRangeSelectionFromDom` looks at, given no previous Lexical
 * selection to reuse: `$internalCreateRangeSelection` (lexical/LexicalSelection) takes the four point
 * properties off it and hands them to `$internalResolveSelectionPoints`, and touches no other member
 * — the `isSelectionWithinEditor` shortcut beside them needs a previous RANGE selection and so cannot
 * be reached from that entry point. A plain object carrying the snapped ends is therefore a complete
 * stand-in, which is what lets the boundary points reach Lexical without the DOM selection being
 * written.
 */
type DomSelectionPoints = Pick<
  Selection,
  "anchorNode" | "anchorOffset" | "focusNode" | "focusOffset"
>;

/**
 * Whether `point` is the DOM-ORDER START of `range` — which is what decides the direction a point
 * inside a decorator has to grow, and cannot be read off anchor/focus: a backward drag makes the
 * anchor the range's end. Both the node and the offset are compared, so a range whose two ends sit
 * in the SAME container is still told apart by its offsets.
 */
function isRangeStart(range: Range, point: DomPoint): boolean {
  return range.startContainer === point.node && range.startOffset === point.offset;
}

/**
 * The edge of the decorator a COLLAPSED point is nearest to. A caret is a single position rather
 * than a direction, so the only thing to honour is which side of the glyph the user pointed at:
 * the first half of a text node goes before it, the rest after it. A point that is not in text
 * names no position within the glyph at all, so it takes the leading edge.
 */
function nearestBoundary(point: DomPoint): Boundary {
  if (!isDOMTextNode(point.node)) return "before";
  const length = point.node.nodeValue?.length ?? 0;
  // Doubled rather than halved so the comparison stays in integers for an odd-length glyph.
  return point.offset * 2 < length ? "before" : "after";
}

/**
 * Whether another rule already owns where a selection landing on this decorator belongs, so
 * normalizing it here would take the landing away from that rule.
 *
 * A note caller is the one such decorator. `TrailingNoteCaretGuardPlugin` answers a landing on the
 * caller of a collapsed note that ends its block by hosting a caret PAST the whole note, and it
 * recognizes that landing precisely by the selection being unresolved — so supplying a selection
 * for it silently disables the repair and leaves the caret in the note's hidden body, which is the
 * position that repair exists to avoid. Every boundary of the caller is inside the note anyway:
 * between the note's opening glyph and the caller, or between the caller and its hidden content.
 * Neither is a position a collapsed note can draw a caret at, so there is nothing here to win.
 */
function $hasDedicatedSelectionOwner(node: LexicalNode): boolean {
  return $isImmutableNoteCallerNode(node);
}

/**
 * The DOM point at `boundary` of the decorator that CONTAINS `point`, or `undefined` when `point`
 * is not inside one.
 *
 * "Inside" means strictly inside: the decorator's own element with an offset — the boundary form
 * Lexical already resolves to an element point beside the decorator — is left alone, and so is a
 * point in any node the decorator does not contain.
 *
 * Mutating context only in the sense that it reads the active editor state; it changes nothing.
 */
function $decoratorBoundary(
  editor: LexicalEditor,
  point: DomPoint,
  boundary: Boundary,
): DomPoint | undefined {
  const node = $getNearestNodeFromDOMNode(point.node);
  if (!$isDecoratorNode(node) || $hasDedicatedSelectionOwner(node)) return undefined;
  const element = editor.getElementByKey(node.getKey());
  if (!element || element === point.node || !element.contains(point.node)) return undefined;
  const parent = element.parentNode;
  if (!parent) return undefined;
  const index = Array.prototype.indexOf.call(parent.childNodes, element);
  if (index < 0) return undefined;
  return { node: parent, offset: boundary === "before" ? index : index + 1 };
}

/**
 * Hand Lexical the selection it refused to resolve, with each end that lands inside a decorator moved
 * to that decorator's own boundaries.
 *
 * The DOM selection is READ here and written only by Lexical's own reconciler pass, which
 * `isPointerDown` decides the timing of — see the plugin doc comment for the rule and why it turns on
 * the button.
 *
 * Mutating (sets the editor's selection): call inside `editor.update()` or a command handler.
 *
 * @param isPointerDown Whether a pointer button is held, i.e. whether a drag is in flight.
 * @returns Whether the browser's DOM selection has been left holding points Lexical cannot resolve,
 *   so it still has to be materialized when the button comes up.
 */
function $snapSelectionToDecoratorBoundaries(
  editor: LexicalEditor,
  isPointerDown: boolean,
): boolean {
  // Only an UNRESOLVED arrival is this plugin's business. A DOM point inside a decorator always
  // nulls the WHOLE selection (see the plugin doc comment), so a selection Lexical did produce
  // cannot have an end inside one — and reading the DOM over it would clobber a caret that
  // something else placed deliberately, since a programmatic move leaves the DOM a commit behind.
  if ($getSelection()) return false;

  const rootElement = editor.getRootElement();
  const domSelection = getDOMSelection(rootElement?.ownerDocument.defaultView ?? null);
  if (!domSelection || domSelection.rangeCount === 0) return false;
  const { anchorNode, anchorOffset, focusNode, focusOffset } = domSelection;
  if (!anchorNode || !focusNode) return false;
  if (!isSelectionWithinEditor(editor, anchorNode, focusNode)) return false;

  const anchor: DomPoint = { node: anchorNode, offset: anchorOffset };
  const focus: DomPoint = { node: focusNode, offset: focusOffset };
  let snappedAnchor: DomPoint | undefined;
  let snappedFocus: DomPoint | undefined;
  if (domSelection.isCollapsed) {
    snappedAnchor = $decoratorBoundary(editor, anchor, nearestBoundary(anchor));
    snappedFocus = snappedAnchor;
  } else {
    // A range grows OUTWARD, so the decorator ends up wholly inside the selection rather than
    // clipped: whichever end leads in DOM order takes the leading edge and the other the trailing
    // one. That is what makes a drag begun on `\fig ` carry the whole glyph, and a drag that runs
    // into `|src="…"` carry the whole attribute run.
    const anchorLeads = isRangeStart(domSelection.getRangeAt(0), anchor);
    snappedAnchor = $decoratorBoundary(editor, anchor, anchorLeads ? "before" : "after");
    snappedFocus = $decoratorBoundary(editor, focus, anchorLeads ? "after" : "before");
  }
  if (!snappedAnchor && !snappedFocus) return false;

  const nextAnchor = snappedAnchor ?? anchor;
  const nextFocus = snappedFocus ?? focus;
  // The snapped ends reach Lexical as a selection-SHAPED value rather than by this plugin writing
  // them into the DOM, because mid-drag the browser's own points have to survive untouched (see the
  // plugin doc comment); the DOM write, when it happens, is Lexical's own reconciler pass. Everything
  // `$createRangeSelectionFromDom` reads is present — see {@link DomSelectionPoints}, which is what
  // makes the one cast honest rather than a widening of a partial object.
  const snapped: DomSelectionPoints = {
    anchorNode: nextAnchor.node,
    anchorOffset: nextAnchor.offset,
    focusNode: nextFocus.node,
    focusOffset: nextFocus.offset,
  };
  const selection = $createRangeSelectionFromDom(snapped as Selection, editor);
  if (!selection) return false;
  $setSelection(selection);
  // `dirty` is how a selection asks `$commitPendingUpdates` (lexical/LexicalUpdates) to sync itself
  // to the browser; with it clear, the commit's `updateDOMSelection` — the ONE place in the commit
  // path that touches the browser's selection, `removeAllRanges()` included — is not reached for an
  // update that dirties no nodes. So clearing it mid-drag is what leaves the browser's base alone,
  // and leaving it set everywhere else is what keeps the DOM in the resolvable boundary form. Order
  // matters: `$setSelection` sets the flag.
  //
  // `SKIP_DOM_SELECTION_TAG` expresses the same intent and is read in the same guard, but it is not
  // confined to one commit: `$commitPendingUpdates` only empties `editor._updateTags` when the update
  // dirtied nodes, and a selection repair dirties none — so the tag would survive into the next
  // commit and swallow the DOM write for the caret move after it.
  selection.dirty = !isPointerDown;
  return isPointerDown;
}

/**
 * Keeps a selection that lands inside a DECORATOR usable, by normalizing the offending end(s) to
 * the decorator's own boundaries.
 *
 * A decorator is atomic: no selection point exists inside one, and Lexical says so by refusing such
 * a point outright. `$internalResolveSelectionPoint` (lexical/LexicalSelection) resolves a DOM
 * point whose node sits INSIDE a decorator's element to `null` — the walk up from the DOM node
 * reaches the decorator, which is not a `TextNode`, and the text branch returns `null` — and
 * `$internalResolveSelectionPoints` then nulls the WHOLE selection, not just that end. On commit,
 * `updateDOMSelection` calls `domSelection.removeAllRanges()` because the previous selection was
 * inside the editor, so the visible selection is destroyed too. (A Lexical upgrade that changes
 * either function is the thing to re-read before trusting this plugin.)
 *
 * That matters because Standard view renders read-only USFM bytes as decorators whose glyph text is
 * an ordinary DOM text child of the decorator's own element: an `UnknownNode`'s `\fig `, its
 * `|src="…"` attribute run, and its `\fig*` closer are each an `ImmutableTypedTextNode`. Those bytes
 * are selectable and copyable by design — that is what a read-only block is FOR
 * (`OpaqueBlockGuardPlugin`) — but pointing at them is exactly what produces the interior DOM point
 * Lexical will not resolve. The measured results: a drag begun on the `\fig ` glyph left the editor
 * with no selection at all, so Ctrl+C reached only the empty-copy guard and the clipboard was never
 * written; and a drag from the caption into the attribute run stopped dead at the caption's end.
 *
 * So each offending end is moved to the decorator's boundary IN ITS PARENT — the one form of the
 * position Lexical does resolve, into an element point beside the decorator. A range grows outward,
 * so the glyph is wholly in or wholly out and never clipped; a caret takes the nearer side.
 *
 * WHERE those boundary points go turns on one thing: whether a pointer button is down.
 *
 * While it is down — a drag in flight — they go to the editor state ALONE, and the browser's DOM
 * selection is left exactly as the browser wrote it. Chromium extends a drag only from a base it
 * placed itself, so replacing that base with a scripted element point stops the drag dead: each
 * further mouse move only re-places a collapsed caret under the pointer, no range is ever formed, and
 * Ctrl+C reaches the empty-copy guard again — the very failure this repair exists to fix. (Chromium
 * also clamps a drag begun inside a `contenteditable="false"` island to that island, which is not
 * ours to change either.) So mid-drag the editor state carries the boundary form that copy and every
 * plugin read, while the browser keeps the text position it is willing to extend from.
 *
 * On the release — and immediately for any arrival with NO button down, which is to say a keyboard
 * extend such as Shift+Arrow into a glyph, or a programmatic move — the boundary form is written to
 * the DOM through Lexical's ordinary reconciler pass. That is the hazard this rule closes rather than
 * a cosmetic touch: Lexical re-derives an update's selection FROM THE DOM whenever the update is not
 * attributable to a DOM event it trusts (`$internalCreateRangeSelection` in lexical/LexicalSelection
 * consults `window.event`), so a DOM selection left on raw interior points turns the next event-less
 * `editor.update()` — one opened from a timer, a microtask or a React effect — into a `null`
 * selection, and that commit's `removeAllRanges()` takes the user's visible selection with it.
 * Whenever no drag is in flight the DOM holds the boundary form, so any such re-derivation lands back
 * on the same selection.
 *
 * The release is a safe moment to materialize from: inside a `pointerup` listener `window.event.type`
 * is `"pointerup"`, which is not one of the types `$internalCreateRangeSelection` re-reads the DOM
 * for, so that update clones the snapped selection out of the editor state instead of re-resolving
 * the interior points it is there to replace.
 *
 * Runs at `COMMAND_PRIORITY_CRITICAL` so the caret guards that read the selection see the repaired
 * one rather than none, and never claims the command — a selection change is nobody's to own.
 * Lexical dispatches `SELECTION_CHANGE_COMMAND` even for a selection it resolved to `null`, and at
 * that moment the DOM selection is still intact, which is what makes the repair possible at all.
 *
 * Not gated on view options: decorators exist in every view. The one decorator it steps around is
 * the note caller, whose landings another rule already owns — see
 * {@link $hasDedicatedSelectionOwner}.
 *
 * @returns Always `null`; this plugin renders no UI.
 */
export function DecoratorBoundarySelectionPlugin(): null {
  const [editor] = useLexicalComposerContext();
  const isPointerDown = useRef(false);
  const isMaterializePending = useRef(false);

  useEffect(() => {
    // Only the PRIMARY button starts a drag Chromium will extend a selection from, and only a
    // press that starts one may set this flag: a secondary-button press can open the platform's
    // NATIVE context menu (`ContextMenuPlugin` deliberately lets it through for some targets),
    // which on Windows and Linux grabs the mouse so the page never sees the matching `pointerup`.
    // The flag would then stay set with no drag in flight, and every later arrival — a click, a
    // Shift+Arrow extend — would be treated as one, leaving the DOM selection stranded on points
    // Lexical cannot resolve.
    const markDown = (event: Event) => {
      if (event instanceof PointerEvent && event.button !== 0) return;
      isPointerDown.current = true;
    };
    // BOTH ends are listened for on the DOCUMENT in the capture phase, and the release on
    // `pointercancel` as well as `pointerup`: a drag that starts in the editor can finish anywhere,
    // and a flag that fails to clear would leave every later keyboard move reading as a drag and the
    // DOM selection stranded on points Lexical cannot resolve. The press has to be heard on the
    // document rather than the root for the mirror-image reason — Chromium places a caret INSIDE
    // the editor for a press that lands in the container just outside the contenteditable root, so
    // a root-scoped listener misses the start of a real drag and the first snap is materialized into
    // the DOM, which is exactly what stops a drag dead. A press with no editor selection behind it
    // costs nothing: the flag is only ever read while repairing a selection inside the editor.
    // (`NoteShellCaretGuardPlugin` registers all three on the document for the same reason.)
    const release = () => {
      isPointerDown.current = false;
      if (!isMaterializePending.current) return;
      isMaterializePending.current = false;
      // Re-dirty the snapped selection so Lexical's ordinary reconciler pass writes the boundary form
      // into the DOM, now that no drag needs the browser's own base any more.
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) selection.dirty = true;
      });
    };
    // One listener does both the wiring and the unwiring: Lexical calls it with the current root at
    // registration, with each replacement root on a swap, and with `(null, previous)` on teardown.
    return editor.registerRootListener((rootElement, prevRootElement) => {
      const previousDocument = prevRootElement?.ownerDocument;
      previousDocument?.removeEventListener("pointerdown", markDown, true);
      previousDocument?.removeEventListener("pointerup", release, true);
      previousDocument?.removeEventListener("pointercancel", release, true);
      isPointerDown.current = false;
      isMaterializePending.current = false;
      const currentDocument = rootElement?.ownerDocument;
      currentDocument?.addEventListener("pointerdown", markDown, true);
      currentDocument?.addEventListener("pointerup", release, true);
      currentDocument?.addEventListener("pointercancel", release, true);
    });
  }, [editor]);

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      () => {
        if ($snapSelectionToDecoratorBoundaries(editor, isPointerDown.current))
          isMaterializePending.current = true;
        return false;
      },
      COMMAND_PRIORITY_CRITICAL,
    );
  }, [editor]);

  return null;
}
