import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $createRangeSelectionFromDom,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $setSelection,
  COMMAND_PRIORITY_CRITICAL,
  KEY_DOWN_COMMAND,
  LexicalEditor,
  PointType,
} from "lexical";
import { useEffect } from "react";

/** The DOM text node `element` renders its text into: itself, or its first descendant that is. */
function domTextNodeOf(element: Node | null | undefined): Node | undefined {
  let node: Node | null | undefined = element;
  while (node && node.nodeType !== Node.TEXT_NODE) node = node.firstChild;
  return node ?? undefined;
}

/** Whether the DOM selection's anchor is where Lexical renders the element caret `point`. */
function $isDomPointOfElementCaret(
  editor: LexicalEditor,
  point: PointType,
  domSelection: Selection,
): boolean {
  const node = point.getNode();
  const element = editor.getElementByKey(point.key);
  if (!$isElementNode(node) || !element) return false;
  const slot = node.getDOMSlot(element);
  return (
    domSelection.anchorNode === slot.element &&
    domSelection.anchorOffset === point.offset + slot.getFirstChildOffset()
  );
}

/**
 * Brings Lexical's caret up to the DOM's when the browser has moved it and Lexical has not heard yet.
 *
 * The browser moves the caret itself for most keys and tells Lexical only through `selectionchange`,
 * which it fires asynchronously, so a key pressed before that event is handled would act on where
 * the caret WAS: Home then ArrowRight pressed quickly on a chapter line would hop to the next
 * paragraph, because the arrow handler would still see the caret at the end of the line. A collapsed
 * caret is replaced only when the DOM's is somewhere else: where the DOM's caret is exactly where
 * Lexical's renders, or reads back as the position Lexical holds, Lexical's is kept, since several
 * Lexical positions can render at one DOM position and the editor chooses among them on purpose.
 *
 * Mutating: call inside `editor.update()` or a command listener.
 */
export function $syncCaretFromDom(editor: LexicalEditor): void {
  const selection = $getSelection();
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return;
  const rootElement = editor.getRootElement();
  const domSelection = rootElement?.ownerDocument.defaultView?.getSelection();
  const domAnchor = domSelection?.anchorNode;
  if (!domSelection?.isCollapsed || !domAnchor || !rootElement?.contains(domAnchor)) return;
  const { anchor } = selection;
  // Where Lexical rendered its caret, the DOM's is still there: nothing has moved it.
  if (
    anchor.type === "text" &&
    domAnchor === domTextNodeOf(editor.getElementByKey(anchor.key)) &&
    domSelection.anchorOffset === anchor.offset
  )
    return;
  // The same for an element caret, rendered at its child index in the element's DOM slot. Read
  // back, that DOM position resolves INTO the child after it: an element caret between a char span
  // and a collapsed note would become a caret inside the note, where Backspace removes nothing.
  if (anchor.type === "element" && $isDomPointOfElementCaret(editor, anchor, domSelection)) return;
  const fromDom = $createRangeSelectionFromDom(domSelection, editor);
  if (!fromDom) return;
  // The DOM's caret read back as the position Lexical already holds is the same caret.
  if (
    fromDom.anchor.key === anchor.key &&
    fromDom.anchor.offset === anchor.offset &&
    fromDom.anchor.type === anchor.type
  )
    return;
  $setSelection(fromDom);
}

/**
 * Makes every key act on the caret the user can see (see {@link $syncCaretFromDom}). Mount it before
 * every other plugin with a critical-priority key handler: at equal priority, handlers run in the
 * order they were registered.
 *
 * @returns `null`. This plugin has no DOM presence.
 */
export function KeyDownCaretSyncPlugin(): null {
  const [editor] = useLexicalComposerContext();

  useEffect(
    () =>
      editor.registerCommand(
        KEY_DOWN_COMMAND,
        () => {
          $syncCaretFromDom(editor);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
    [editor],
  );

  return null;
}
