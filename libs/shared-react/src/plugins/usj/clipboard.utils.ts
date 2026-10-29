import { $findMatchingParent, mergeRegister } from "@lexical/utils";
import {
  $addUpdateTag,
  $getState,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  $setSelection,
  COMMAND_PRIORITY_LOW,
  COPY_COMMAND,
  CUT_COMMAND,
  LexicalEditor,
  LexicalNode,
  PASTE_COMMAND,
  SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
  SerializedLexicalNode,
  SKIP_SCROLL_INTO_VIEW_TAG,
  TextNode,
} from "lexical";
import { MARKER_TEXT_TYPE, textTypeState } from "shared";

function cleanupText(text: string): string {
  return text.replaceAll("\t", " ");
}

/**
 * Whether the selection holds content a copy could put on the clipboard: one exists and covers
 * something. A collapsed caret — or no selection at all — does not.
 *
 * Reads the ACTIVE editor state, so it must be called inside an update or a command listener. That
 * is the whole point: the committed state is a microtask behind, so a selection made earlier in the
 * same tick is invisible to `editor.getEditorState().read()` — a `copy()` right after a
 * programmatic select would read "nothing selected" and silently do nothing.
 */
export function $hasCopyableSelection(): boolean {
  const selection = $getSelection();
  return !!selection && !selection.isCollapsed();
}

/**
 * Stops a copy or cut that has nothing to copy, wherever it was dispatched from.
 *
 * A copy with no clipboard event of its own — the keyboard shortcuts below, the context menu's
 * Cut/Copy, an editor-ref `copy()` call — has to have one synthesized before anything can be
 * written: `@lexical/clipboard` appends a hidden placeholder element to the editor, points the DOM
 * selection at it, and runs `document.execCommand("copy")` to provoke a real clipboard event it can
 * fill in. With nothing selected, that filling step declines — and declines BEFORE suppressing the
 * browser's own copy — so the browser copies what it was pointed at, the placeholder, and the user
 * loses whatever the clipboard already held to a character that was never in the document.
 *
 * So the command is CLAIMED here and does nothing, which is what copying an empty selection means.
 * The guard lives on the command rather than in front of each dispatch for two reasons: a command
 * listener runs inside the update, where the selection is authoritative for both pending and
 * committed state, and every dispatcher is covered by the one registration.
 *
 * Registered at `COMMAND_PRIORITY_LOW` — above `@lexical/rich-text`'s own copy/cut fallback at
 * EDITOR, which is the thing that synthesizes the event, and below every feature handler, so a view
 * with its own clipboard payload (Standard view's USFM copy) still claims first and this never runs.
 */
export function registerEmptyCopyGuard(editor: LexicalEditor): () => void {
  const $claimWhenNothingToCopy = () => !$hasCopyableSelection();
  return mergeRegister(
    editor.registerCommand(COPY_COMMAND, $claimWhenNothingToCopy, COMMAND_PRIORITY_LOW),
    editor.registerCommand(CUT_COMMAND, $claimWhenNothingToCopy, COMMAND_PRIORITY_LOW),
  );
}

/** Whether `node` is plain prose: a plain text node with no format and no engine role. */
function $isPlainProse(node: LexicalNode): node is TextNode {
  return (
    $isTextNode(node) &&
    node.getType() === TextNode.getType() &&
    node.getMode() === "normal" &&
    node.getFormat() === 0 &&
    $getState(node, textTypeState) === undefined
  );
}

/**
 * Keeps pasted prose inside the char span or note it is pasted into.
 *
 * A paste carrying nodes (the internal Lexical flavor, or `text/html`, which is what Ctrl+V
 * delivers) is inserted by `RangeSelection.insertNodes`, which splits every inline ancestor of the
 * caret up to the paragraph and inserts the nodes there — so text pasted inside `\nd Lord\nd*`
 * lands between two halves of the span, and text pasted inside a note lands in the paragraph after
 * it. When every pasted node is plain prose and the paste starts in ordinary text, the paste means
 * exactly what typing that text would, so it is inserted as text at the caret, inside the caret's
 * span. Anything else (a char span, a verse, a note, a paragraph) is left to Lexical.
 */
export function registerInlineProsePaste(editor: LexicalEditor): () => void {
  return editor.registerCommand(
    SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
    ({ nodes, selection }) => {
      if (!$isRangeSelection(selection) || nodes.length === 0 || !nodes.every($isPlainProse))
        return false;
      const start = selection.isBackward() ? selection.focus : selection.anchor;
      const startNode = start.getNode();
      // Typing into a token or segmented node replaces it whole, so only a caret in ordinary text
      // takes the typing route.
      if (!$isTextNode(startNode) || startNode.getMode() !== "normal") return false;
      const isInInline = $findMatchingParent(
        startNode,
        (node) => $isElementNode(node) && node.isInline(),
      );
      if (!isInInline) return false;
      selection.insertText(nodes.map((node) => node.getTextContent()).join(""));
      return true;
    },
    COMMAND_PRIORITY_LOW,
  );
}

/** Copies the selection. Dispatched unconditionally; an empty selection copies nothing because
 * {@link registerEmptyCopyGuard} claims the command, not because the dispatch is withheld. */
export const copySelection = (editor: LexicalEditor) => {
  editor.dispatchCommand(COPY_COMMAND, null);
};

/** Cuts the selection, under the same guard as {@link copySelection} — a cut copies first, so it
 * reaches the identical synthesized-copy path. */
export const cutSelection = (editor: LexicalEditor) => {
  editor.dispatchCommand(CUT_COMMAND, null);
};

export const pasteSelection = (editor: LexicalEditor) => {
  navigator.clipboard.read().then(async (items) => {
    const permission = await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read",
    });
    if (permission.state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }

    const data = new DataTransfer();
    const item = items[0];
    for (const type of item.types) {
      const dataString = await (await item.getType(type)).text();
      data.setData(type, cleanupText(dataString));
    }

    const event = new ClipboardEvent("paste", {
      clipboardData: data,
    });
    editor.dispatchCommand(PASTE_COMMAND, event);
  });
};

/**
 * How long {@link pasteNatively} waits for focus to come back to the editor before reading the
 * clipboard itself.
 */
const NATIVE_PASTE_FOCUS_WAIT_MS = 500;

/** Whether `rootElement`, or something inside it, holds focus in a document that has focus. */
function holdsFocus(rootElement: HTMLElement): boolean {
  const { activeElement } = rootElement.ownerDocument;
  return rootElement.ownerDocument.hasFocus() && rootElement.contains(activeElement);
}

/**
 * Pastes at the selection, through the host's native paste when the host offers one.
 *
 * A native paste is the browser's own: it fires a trusted `paste` event carrying every clipboard
 * format, including `@lexical/clipboard`'s `application/x-lexical-editor`, which
 * `navigator.clipboard.read()` cannot see. The host runs it into whatever has focus, so:
 * - focus is put back on the editor's root first (a click on a menu item takes it away), and the
 *   Lexical selection is re-asserted in the DOM so the paste lands where the caret was;
 * - the host is asked only after that update has committed, from a microtask, so the DOM caret is
 *   in place and no editor update is active while the host's callback runs;
 * - if focus is not in the root by then (something else took it after the refocus), the host is
 *   asked once focus comes back, for up to {@link NATIVE_PASTE_FOCUS_WAIT_MS}; after that the
 *   paste reads the clipboard itself, which does not depend on focus.
 *
 * Focus moving away AFTER the host has been asked is out of reach here: a caller that knows focus
 * will move (a menu that returns focus to its trigger on close) should call this once focus is
 * back in the editor.
 *
 * If the host declines (resolves `false`), its request fails, or the callback throws, the paste
 * falls back to {@link pasteSelection}: a failed request means the host did not paste, and losing
 * the paste is worse than pasting without the editor's own format. With no `requestNativePaste`,
 * this is {@link pasteSelection}.
 *
 * Callers apply the read-only gate; this pastes regardless of whether the editor is editable.
 *
 * @param editor - The editor to paste into.
 * @param requestNativePaste - Asks the host to run its native paste into the focused frame;
 *   resolves `true` only after it did.
 */
export const pasteNatively = (
  editor: LexicalEditor,
  requestNativePaste?: () => Promise<boolean>,
) => {
  const rootElement = editor.getRootElement();
  if (!requestNativePaste || !rootElement) {
    pasteSelection(editor);
    return;
  }

  const fallBack = () => pasteSelection(editor);

  function ask(request: () => Promise<boolean>) {
    let pasted: Promise<boolean>;
    try {
      pasted = request();
    } catch {
      fallBack();
      return;
    }
    pasted.then((didPaste) => {
      if (!didPaste) fallBack();
    }, fallBack);
  }

  function askOnceFocused(root: HTMLElement, request: () => Promise<boolean>) {
    if (holdsFocus(root)) {
      ask(request);
      return;
    }
    const stopWaiting = () => {
      root.removeEventListener("focusin", onFocusIn);
      clearTimeout(timeout);
    };
    const onFocusIn = () => {
      if (!holdsFocus(root)) return;
      stopWaiting();
      ask(request);
    };
    const timeout = setTimeout(() => {
      stopWaiting();
      fallBack();
    }, NATIVE_PASTE_FOCUS_WAIT_MS);
    root.addEventListener("focusin", onFocusIn);
  }

  if (holdsFocus(rootElement)) {
    // Still deferred, so the callback never runs inside the update or event handler this was
    // called from.
    queueMicrotask(() => askOnceFocused(rootElement, requestNativePaste));
    return;
  }
  rootElement.focus({ preventScroll: true });
  // A dirty selection is written back to the DOM on commit, which keeps the caret where Lexical has
  // it whatever focusing the root did to the DOM selection.
  editor.update(
    () => {
      $addUpdateTag(SKIP_SCROLL_INTO_VIEW_TAG);
      const selection = $getSelection();
      if (selection && !selection.dirty) $setSelection(selection.clone());
    },
    { onUpdate: () => queueMicrotask(() => askOnceFocused(rootElement, requestNativePaste)) },
  );
};

export const pasteSelectionAsPlainText = (editor: LexicalEditor) => {
  navigator.clipboard.read().then(async () => {
    const permission = await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read",
    });

    if (permission.state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }

    const data = new DataTransfer();
    const text = await navigator.clipboard.readText();
    data.setData("text/plain", cleanupText(text));

    const event = new ClipboardEvent("paste", {
      clipboardData: data,
    });
    editor.dispatchCommand(PASTE_COMMAND, event);
  });
};

/**
 * Removes every marker glyph element (`data-text-type="marker"`) under `root`, in place. A marker
 * glyph is presentation, not content: a paragraph's gutter marker (a triple-clicked heading copies
 * its `\s1`) and an inline marker glyph alike. Parsed back from pasted or dropped html, each would
 * arrive as plain text such as `\s1 ` or `\w `, and saved, as a real marker.
 *
 * @param root - Parsed html, such as a `DOMParser` document.
 * @returns Whether any glyph was removed.
 */
export function removeMarkerGlyphElements(root: ParentNode): boolean {
  const glyphs = root.querySelectorAll(`[data-text-type="${MARKER_TEXT_TYPE}"]`);
  glyphs.forEach((glyph) => glyph.remove());
  return glyphs.length > 0;
}

/** The clipboard flavor Lexical writes its own node copy to, and reads one from. */
export const LEXICAL_CLIPBOARD_TYPE = "application/x-lexical-editor";

/**
 * The namespace a hidden-marker view (`markerMode: "hidden"`) tags its node copy
 * ({@link LEXICAL_CLIPBOARD_TYPE}) with. Every editor shares one Lexical namespace, so Lexical's
 * own paste would rebuild a copy from any view in any other; a view family reads a node copy only
 * from its own family, and a copy from the other one through its html or plain text.
 */
export const HIDDEN_VIEW_CLIPBOARD_NAMESPACE = "platformEditor/hidden-markers";

/**
 * The serialized nodes of the node copy ({@link LEXICAL_CLIPBOARD_TYPE}) in `data`, when it is
 * tagged `namespace`; otherwise `undefined`.
 *
 * @param data - The pasted transfer; only `getData` is read.
 * @param namespace - The namespace the copy must be tagged with.
 */
export function nodeCopyIn(
  data: Pick<DataTransfer, "getData">,
  namespace: string,
): SerializedLexicalNode[] | undefined {
  const payload = parsedNodeCopy(data);
  return payload?.namespace === namespace ? payload.nodes : undefined;
}

/**
 * `data` without its node copy ({@link LEXICAL_CLIPBOARD_TYPE}) when that copy is tagged
 * `namespace`, so Lexical's own paste takes the html or plain text instead; otherwise `data` itself.
 *
 * @param data - The pasted transfer; the result reads only `getData` from it.
 * @param namespace - The namespace whose node copy is hidden.
 */
export function withoutNodeCopyOf(data: DataTransfer, namespace: string): DataTransfer {
  if (parsedNodeCopy(data)?.namespace !== namespace) return data;
  // Lexical reads only `getData` from a transfer it inserts, and a real `DataTransfer` cannot be
  // constructed everywhere this runs.
  return {
    getData: (type: string) => (type === LEXICAL_CLIPBOARD_TYPE ? "" : data.getData(type)),
  } as Pick<DataTransfer, "getData"> as DataTransfer;
}

/** The node copy in `data` as Lexical writes it, or `undefined` when there is none or it is
 * unreadable. */
function parsedNodeCopy(
  data: Pick<DataTransfer, "getData">,
): { namespace: unknown; nodes: SerializedLexicalNode[] } | undefined {
  const json = data.getData(LEXICAL_CLIPBOARD_TYPE);
  if (!json) return undefined;
  try {
    const payload: unknown = JSON.parse(json);
    if (
      payload &&
      typeof payload === "object" &&
      "namespace" in payload &&
      "nodes" in payload &&
      Array.isArray(payload.nodes)
    )
      return { namespace: payload.namespace, nodes: payload.nodes as SerializedLexicalNode[] };
  } catch {
    // Unreadable: Lexical's own paste falls through to html and plain text too.
  }
  return undefined;
}
