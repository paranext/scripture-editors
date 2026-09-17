import { $isImmutableNoteCallerNode } from "../../nodes/usj";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $createRangeSelectionFromDom,
  $getNearestNodeFromDOMNode,
  $getSelection,
  $isDecoratorNode,
  $setSelection,
  COMMAND_PRIORITY_CRITICAL,
  getDOMSelection,
  isDOMTextNode,
  isSelectionWithinEditor,
  LexicalEditor,
  LexicalNode,
  SELECTION_CHANGE_COMMAND,
} from "lexical";
import { useEffect } from "react";

/** One end of a DOM selection — the container node plus the offset within it. */
interface DomPoint {
  node: Node;
  offset: number;
}

/** Which edge of a decorator a point is being moved to, expressed in its PARENT's child list. */
type Boundary = "before" | "after";

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
 * Normalize a DOM selection whose end(s) land inside a decorator to the decorator's own boundaries,
 * and hand Lexical the selection it refused to resolve. Returns nothing; the work is the selection
 * it sets.
 *
 * Mutating (moves the selection): call inside `editor.update()` or a command handler.
 */
function $snapSelectionToDecoratorBoundaries(editor: LexicalEditor): void {
  // Only an UNRESOLVED arrival is this plugin's business. A DOM point inside a decorator always
  // nulls the WHOLE selection (see the plugin doc comment), so a selection Lexical did produce
  // cannot have an end inside one — and reading the DOM over it would clobber a caret that
  // something else placed deliberately, since a programmatic move leaves the DOM a commit behind.
  if ($getSelection()) return;

  const rootElement = editor.getRootElement();
  const domSelection = getDOMSelection(rootElement?.ownerDocument.defaultView ?? null);
  if (!domSelection || domSelection.rangeCount === 0) return;
  const { anchorNode, anchorOffset, focusNode, focusOffset } = domSelection;
  if (!anchorNode || !focusNode) return;
  if (!isSelectionWithinEditor(editor, anchorNode, focusNode)) return;

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
  if (!snappedAnchor && !snappedFocus) return;

  const nextAnchor = snappedAnchor ?? anchor;
  const nextFocus = snappedFocus ?? focus;
  domSelection.setBaseAndExtent(
    nextAnchor.node,
    nextAnchor.offset,
    nextFocus.node,
    nextFocus.offset,
  );
  // Moving the DOM selection is not enough on its own: the editor state still holds no selection,
  // and committing that null over the selection the editor had makes Lexical's reconciler call
  // `removeAllRanges()` and throw away the very range just written. The snapped points have to
  // become a LEXICAL selection inside this same update.
  const selection = $createRangeSelectionFromDom(domSelection, editor);
  if (selection) $setSelection(selection);
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
 * so the glyph is wholly in or wholly out and never clipped; a caret takes the nearer side. The
 * snapped points are then turned into a Lexical selection in the same update, because moving the
 * DOM selection alone would still leave a null pending selection for the reconciler to clear.
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

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      () => {
        $snapSelectionToDecoratorBoundaries(editor);
        return false;
      },
      COMMAND_PRIORITY_CRITICAL,
    );
  }, [editor]);

  return null;
}
