import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $findMatchingParent, mergeRegister } from "@lexical/utils";
import {
  $addUpdateTag,
  $createLineBreakNode,
  $createRangeSelection,
  $createTextNode,
  $getNodeByKey,
  $getSelection,
  $hasUpdateTag,
  $isElementNode,
  $isLineBreakNode,
  $isRangeSelection,
  $setSelection,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_HIGH,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  INSERT_LINE_BREAK_COMMAND,
  INSERT_PARAGRAPH_COMMAND,
  KEY_DOWN_COMMAND,
  KEY_ENTER_COMMAND,
  LexicalEditor,
  LexicalNode,
  LineBreakNode,
  PointType,
  SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
  TextNode,
} from "lexical";
import { useEffect, useRef } from "react";
import { $isNoteNode, $isSomeParaNode } from "shared";
import { StructureProtectionMode, ViewOptions } from "shared-react";
import { LINE_BREAK_IN_TEXT } from "./lineBreakText.utils";

/**
 * Runs Enter as the keyboard delivers it, without Shift: `KEY_DOWN_COMMAND` first (structure
 * protection refuses a paragraph break there), then `KEY_ENTER_COMMAND` (a note's `\fp` break, a
 * marker menu, Lexical's own split). Should nothing take it, the split itself.
 *
 * Mutating: call inside `editor.update()` or a command handler.
 */
function $runEnter(editor: LexicalEditor): void {
  const enter = new KeyboardEvent("keydown", { key: "Enter", bubbles: true, cancelable: true });
  if (editor.dispatchCommand(KEY_DOWN_COMMAND, enter)) return;
  if (editor.dispatchCommand(KEY_ENTER_COMMAND, enter)) return;
  editor.dispatchCommand(INSERT_PARAGRAPH_COMMAND, undefined);
}

/**
 * The character `nodes` end with (or, with `atStart`, start with), read past nodes that hold no
 * text; `undefined` when none holds any.
 */
function $edgeCharacter(nodes: LexicalNode[], atStart: boolean): string | undefined {
  for (const node of atStart ? nodes : [...nodes].reverse()) {
    const text = node.getTextContent();
    if (text) return atStart ? text.at(0) : text.at(-1);
  }
  return undefined;
}

/**
 * What a line break between the characters `previous` and `next` becomes where the paragraph cannot
 * be split: a space, or nothing beside whitespace, which already separates them. With no text on a
 * side (`undefined`) it is still a space: the text it lands beside may be a word.
 */
function joiningText(previous: string | undefined, next: string | undefined): string {
  return /\s/.test(previous ?? "") || /\s/.test(next ?? "") ? "" : " ";
}

type PointSnapshot = Pick<PointType, "key" | "offset" | "type">;

/** The selection's two points, to put back after a split elsewhere moves the active selection. */
function $snapshotPoints(): [PointSnapshot, PointSnapshot] | undefined {
  const selection = $getSelection();
  if (!$isRangeSelection(selection)) return undefined;
  const { anchor, focus } = selection;
  return [
    { key: anchor.key, offset: anchor.offset, type: anchor.type },
    { key: focus.key, offset: focus.offset, type: focus.type },
  ];
}

/** Whether `point` names a node in the document, and a place in it. */
function $isPointInDocument(point: PointSnapshot): boolean {
  const node = $getNodeByKey(point.key);
  if (!node?.isAttached()) return false;
  // A split moves what followed the line break out of its paragraph, so an element point past it
  // can be left past the paragraph's end.
  return (
    point.type !== "element" || ($isElementNode(node) && point.offset <= node.getChildrenSize())
  );
}

/**
 * Puts back the points {@link $snapshotPoints} took, when the places they name are still in the
 * document.
 *
 * Mutating: call inside `editor.update()`, a command handler or a transform.
 */
function $restorePoints(points: [PointSnapshot, PointSnapshot] | undefined): void {
  if (!points) return;
  const [anchor, focus] = points;
  if (!$isPointInDocument(anchor) || !$isPointInDocument(focus)) return;
  const selection = $createRangeSelection();
  selection.anchor.set(anchor.key, anchor.offset, anchor.type);
  selection.focus.set(focus.key, focus.offset, focus.type);
  $setSelection(selection);
}

/**
 * Whether a paragraph break may go at `node`: not under protected structure, and only in a
 * paragraph (`\p`, `\q1`, a line with no marker), outside any note.
 */
function $canSplitAt(node: LexicalNode, isProtected: boolean): boolean {
  return (
    !isProtected &&
    ($isSomeParaNode(node) || !!$findMatchingParent(node, $isSomeParaNode)) &&
    !$isNoteNode(node) &&
    !$findMatchingParent(node, $isNoteNode)
  );
}

/**
 * Replaces `lineBreak` with what joins the text either side of it in its parent (see
 * {@link joiningText}).
 *
 * Mutating: call inside `editor.update()`, a command handler or a transform.
 */
function $spaceLineBreak(lineBreak: LineBreakNode): void {
  const joining = joiningText(
    $edgeCharacter(lineBreak.getPreviousSiblings(), false),
    $edgeCharacter(lineBreak.getNextSiblings(), true),
  );
  if (joining) lineBreak.replace($createTextNode(joining));
  else lineBreak.remove();
}

/**
 * Turns a line break in the document into what Enter makes there: the paragraph splits at it, its
 * second half a paragraph of the same marker (a line with no marker makes a `\p`, as Enter does).
 * Where a paragraph break is not the user's to make — protected structure, inside a note, the
 * `\id` line or any block that is not a paragraph — it becomes a space instead, as protected
 * structure's paste joins lines; or nothing beside whitespace (see {@link joiningText}).
 *
 * Mutating: call from a `LineBreakNode` transform.
 */
function $replaceLineBreak(lineBreak: LineBreakNode, isProtected: boolean): void {
  if (!$canSplitAt(lineBreak, isProtected)) {
    $spaceLineBreak(lineBreak);
    return;
  }
  const points = $snapshotPoints();
  const parent = lineBreak.getParentOrThrow();
  const index = lineBreak.getIndexWithinParent();
  lineBreak.remove();
  const at = $createRangeSelection();
  at.anchor.set(parent.getKey(), index, "element");
  at.focus.set(parent.getKey(), index, "element");
  $setSelection(at);
  at.insertParagraph();
  $restorePoints(points);
}

/**
 * Makes each line break among `nodes`, at any depth, a space (see {@link $spaceLineBreak}), for a
 * paste or drop where the paragraph cannot be split. Done before they are inserted, so pasted
 * text left with no line break can go in as the plain prose it is, inside the span or note at the
 * caret: inserted with a line break among it, it would be split off outside them.
 *
 * Mutating: call from a `SELECTION_INSERT_CLIPBOARD_NODES_COMMAND` handler.
 */
function $spaceLineBreaksAmong(nodes: LexicalNode[]): void {
  const lineBreaks = (node: LexicalNode): LineBreakNode[] =>
    $isLineBreakNode(node)
      ? [node]
      : $isElementNode(node)
        ? node.getChildren().flatMap(lineBreaks)
        : [];
  nodes.forEach((node, index) => {
    if (!$isLineBreakNode(node)) {
      lineBreaks(node).forEach($spaceLineBreak);
      return;
    }
    // A top-level node has no siblings of its own: judge it by its neighbours in the list.
    nodes[index] = $createTextNode(
      joiningText(
        $edgeCharacter(nodes.slice(0, index), false),
        $edgeCharacter(nodes.slice(index + 1), true),
      ),
    );
  });
}

/**
 * Tags an update that inserts text holding a line break, so that only there does
 * {@link $breakTextAtLineBreak} act: never on a load, nor on text the user did not just insert.
 */
const TEXT_WITH_LINE_BREAK_TAG = "platform-text-with-line-break";

/**
 * Makes the first line break written in `node`'s text (see {@link LINE_BREAK_IN_TEXT}) a line break
 * node, which the `LineBreakNode` transform then splits the paragraph at, or makes a space; the text
 * after it is a node of its own, so this runs again for any further line break. Only in an update
 * tagged {@link TEXT_WITH_LINE_BREAK_TAG}.
 *
 * Mutating: call from a `TextNode` transform.
 */
function $breakTextAtLineBreak(node: TextNode): void {
  if (!$hasUpdateTag(TEXT_WITH_LINE_BREAK_TAG)) return;
  const match = LINE_BREAK_IN_TEXT.exec(node.getTextContent());
  if (!match) return;
  const parts = node.splitText(match.index, match.index + match[0].length);
  const written = parts[match.index === 0 ? 0 : 1];
  const lineBreak = $createLineBreakNode();
  written.insertAfter(lineBreak);
  // A point in the written line break moves past it before the text goes: removing the text would
  // otherwise leave the point on the line break node, which holds none.
  const selection = $getSelection();
  if ($isRangeSelection(selection))
    for (const point of [selection.anchor, selection.focus])
      if (point.key === written.getKey())
        point.set(
          lineBreak.getParentOrThrow().getKey(),
          lineBreak.getIndexWithinParent() + 1,
          "element",
        );
  written.remove();
}

/**
 * The text of an insertion that a replacement or a yank carries (`insertReplacementText`,
 * `insertFromYank`), as data or as a transfer's plain text; `undefined` for any other insertion.
 */
function replacementText(payload: InputEvent): string | undefined {
  if (payload.inputType !== "insertReplacementText" && payload.inputType !== "insertFromYank")
    return undefined;
  return payload.data ?? payload.dataTransfer?.getData("text/plain");
}

/**
 * A line break (`LineBreakNode`) has no USFM representation: no paragraph saves one, so the text
 * either side of it saved run together. USFM's own `//` is an optional break a typesetter may use,
 * not a line break, and the views that hide markers cannot store it. So the editor holds no line
 * break of the user's:
 *
 * - **Shift+Enter is Enter**, as in Paratext 9, whose editor has no Shift+Enter of its own. A line
 *   break requested any way (`INSERT_LINE_BREAK_COMMAND`: Shift+Enter, macOS Ctrl+O, a `beforeinput`
 *   `insertLineBreak`, a typed `\n`) runs Enter instead — refused where Enter is refused, a note's
 *   `\fp` break in Standard view, a marker menu where Enter opens one.
 * - **Any other line break becomes a paragraph split**, as a line break of pasted plain text does:
 *   one pasted or dropped html brings in (`<br>`), or a node copy holds. Where a split is not
 *   allowed it becomes a space, or nothing beside whitespace (see {@link $replaceLineBreak}).
 * - **So does a line break written inside inserted text** ({@link LINE_BREAK_IN_TEXT}): one string
 *   that dictation, autocorrect, a text replacement, a yank or an extension inserts through
 *   `CONTROLLED_TEXT_INSERTION_COMMAND`. The text goes in whole, through every handler of that
 *   command — `UnstorableTextPlugin`'s filter judges and reports it once, as one string — and then
 *   each line break in it is split at, or made a space, as above. A replacement or yank is inserted
 *   as the string it carries, since Lexical's insertion of a transfer splits at `\n` alone, under
 *   protected structure and in a note too. A `beforeinput` `insertText` holding one, which the
 *   browser would otherwise put into the page itself, is inserted through the command. Text being
 *   composed by an input method is left alone, as the filter leaves it (Lexical runs no transform
 *   on the node being composed, and a commit, `insertFromComposition`, is not re-inserted):
 *   splitting a paragraph under a live composition would lose its place.
 *
 * A view without spacing (`hasSpacing: false`) puts a line break before each verse as its layout,
 * and its saving skips them, so its line breaks are left alone: only the first rule applies there,
 * and a line break written in inserted text stays in the text.
 *
 * Registered at `COMMAND_PRIORITY_HIGH`, below the guards that refuse or ask about a line break at
 * `CRITICAL` (inside a note, over hidden content, the note shell), which treat one as they treat a
 * paragraph break.
 *
 * @param viewOptions - The view's options: whether it has spacing.
 * @param structureProtectionMode - The editor's structure protection; `"protected"` makes a line
 *   break that arrives as content a space rather than a split.
 * @returns `null`. This plugin has no DOM presence.
 */
export function LineBreakPlugin({
  viewOptions,
  structureProtectionMode,
}: {
  viewOptions: ViewOptions | undefined;
  structureProtectionMode: StructureProtectionMode | undefined;
}): null {
  const [editor] = useLexicalComposerContext();
  const isProtectedRef = useRef(structureProtectionMode === "protected");
  useEffect(() => {
    isProtectedRef.current = structureProtectionMode === "protected";
  }, [structureProtectionMode]);
  const hasSpacing = !!viewOptions?.hasSpacing;

  useEffect(() => {
    // Set while text holding a line break goes back in, so it is not claimed again.
    let isReinserting = false;

    /**
     * Claims a `beforeinput` `insertText` holding a line break, which the browser would put into
     * the page itself, and inserts it through `CONTROLLED_TEXT_INSERTION_COMMAND`. Not a lone
     * `\n` or `\n\n`, which Lexical runs as a line break and a paragraph break.
     */
    const onBeforeInput = (event: InputEvent) => {
      if (event.inputType !== "insertText" || event.isComposing || editor.isComposing()) return;
      if (event.data === "\n" || event.data === "\n\n") return;
      const text = event.data ?? event.dataTransfer?.getData("text/plain");
      if (!text || !LINE_BREAK_IN_TEXT.test(text)) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, text);
    };

    return mergeRegister(
      editor.registerCommand(
        INSERT_LINE_BREAK_COMMAND,
        () => {
          $runEnter(editor);
          return true;
        },
        COMMAND_PRIORITY_HIGH,
      ),
      // Critical, and never handling the command, so a handler that does insert the nodes
      // cannot insert a line break where the paragraph cannot take one.
      editor.registerCommand(
        SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
        ({ nodes, selection }) => {
          if (
            $isRangeSelection(selection) &&
            !$canSplitAt(selection.anchor.getNode(), isProtectedRef.current)
          )
            $spaceLineBreaksAmong(nodes);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
      // Critical, so the text goes back in within this update, where its tag is: dispatched from
      // outside an update, each priority's handlers run in an update of their own. Every handler
      // sees the text again, whole, in the re-dispatch.
      editor.registerCommand(
        CONTROLLED_TEXT_INSERTION_COMMAND,
        (payload) => {
          // Text being composed goes back in too, harmlessly: Lexical runs no transform on the node
          // being composed, so its line break stays where the input method put it.
          if (isReinserting) return false;
          const text = typeof payload === "string" ? payload : replacementText(payload);
          if (!text || !LINE_BREAK_IN_TEXT.test(text)) return false;
          $addUpdateTag(TEXT_WITH_LINE_BREAK_TAG);
          isReinserting = true;
          try {
            editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, text);
          } finally {
            isReinserting = false;
          }
          return true;
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerRootListener((root, previousRoot) => {
        previousRoot?.removeEventListener("beforeinput", onBeforeInput, true);
        root?.addEventListener("beforeinput", onBeforeInput, true);
      }),
      () => editor.getRootElement()?.removeEventListener("beforeinput", onBeforeInput, true),
      hasSpacing
        ? mergeRegister(
            editor.registerNodeTransform(TextNode, $breakTextAtLineBreak),
            editor.registerNodeTransform(LineBreakNode, (lineBreak) =>
              $replaceLineBreak(lineBreak, isProtectedRef.current),
            ),
          )
        : () => undefined,
    );
  }, [editor, hasSpacing]);

  return null;
}
