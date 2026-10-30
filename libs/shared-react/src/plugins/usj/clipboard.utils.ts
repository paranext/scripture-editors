import { $generateNodesFromSerializedNodes } from "@lexical/clipboard";
import { $findMatchingParent, mergeRegister } from "@lexical/utils";
import {
  $createTextNode,
  $getState,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  COMMAND_PRIORITY_LOW,
  COPY_COMMAND,
  CUT_COMMAND,
  LexicalEditor,
  LexicalNode,
  PASTE_COMMAND,
  SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
  SerializedLexicalNode,
  TabNode,
  TextNode,
} from "lexical";
import { ENGINE_MARKER_NAME_BYTES, LoggerBasic, MARKER_TEXT_TYPE, textTypeState } from "shared";

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

/**
 * Turns every tab node into a space, as {@link pasteSelection} turns each pasted tab into one.
 *
 * Lexical inserts a tab in pasted plain text, or in html whose whitespace is preformatted (`<pre>`),
 * as a tab node, and USJ has nothing to save one as, so `word1⇥word2` would save as `word1word2`.
 * A transform covers every way a tab node gets in — the browser's own paste, which reaches the
 * editor without the clipboard read that cleans it, a drop, and pasted html — wherever it lands.
 * A caret on the tab stays where it was, on the space.
 */
export function registerTabsAsSpaces(editor: LexicalEditor): () => void {
  return editor.registerNodeTransform(TabNode, (tab) => {
    const space = $createTextNode(" ").setFormat(tab.getFormat()).setStyle(tab.getStyle());
    const selection = $getSelection();
    const pointsOnTab = $isRangeSelection(selection)
      ? [selection.anchor, selection.focus].filter((point) => point.key === tab.getKey())
      : [];
    const offsets = pointsOnTab.map((point) => point.offset);
    tab.replace(space);
    pointsOnTab.forEach((point, index) => point.set(space.getKey(), offsets[index], "text"));
  });
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
 * The html attribute a hidden-marker view's copy holds its node copy in ({@link htmlWithNodeCopy}):
 * `navigator.clipboard.read()`, which Ctrl+V and every Paste command start with, returns no custom
 * flavor, but it returns html with its `data-*` attributes.
 */
export const NODE_COPY_HTML_ATTRIBUTE = "data-platform-editor-node-copy";

/**
 * The html attribute that says `text/html` is text with its markers showing, as a copy from a view
 * that shows them writes it (`usfmToClipboardHtml`): what an async clipboard read keeps of
 * {@link MARKER_VIEW_CLIPBOARD_NAMESPACE}, the node copy's tag, which it does not return.
 */
export const MARKER_TEXT_HTML_ATTRIBUTE = "data-platform-editor-marker-text";

/**
 * `html` inside an inline element holding `nodeCopy` in {@link NODE_COPY_HTML_ATTRIBUTE}; what it
 * shows does not change. Inline, because Lexical's html import makes a paragraph of a block
 * element's inline children, so another program's copy of this html would paste differently.
 *
 * The attribute holds all of the node copy, a hidden construct's text included, for any program
 * that reads the html to see. A browser's own paste into an editable element drops it, so a copy
 * that went through another editor no longer carries it.
 *
 * @param html - The html the copy shows.
 * @param nodeCopy - The node copy, as written to {@link LEXICAL_CLIPBOARD_TYPE}.
 */
export function htmlWithNodeCopy(html: string, nodeCopy: string): string {
  const value = nodeCopy
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
  return `<span ${NODE_COPY_HTML_ATTRIBUTE}="${value}">${html}</span>`;
}

/**
 * The namespace a hidden-marker view (`markerMode: "hidden"`) tags its node copy
 * ({@link LEXICAL_CLIPBOARD_TYPE}) with. Every editor shares one Lexical namespace, so Lexical's
 * own paste would rebuild a copy from any view in any other; a view family reads a node copy only
 * from its own family, and a copy from the other one through its html or plain text.
 */
export const HIDDEN_VIEW_CLIPBOARD_NAMESPACE = "platformEditor/hidden-markers";

/**
 * The namespace a view that shows markers leaves on its node copy ({@link LEXICAL_CLIPBOARD_TYPE}):
 * the Lexical namespace of every platform editor, which only a hidden-marker view changes
 * ({@link HIDDEN_VIEW_CLIPBOARD_NAMESPACE}). That is one way a hidden-marker view can tell a `\` that
 * spells a marker from one anyone else wrote ({@link MARKER_TEXT_HTML_ATTRIBUTE} is the other, for a
 * paste an async clipboard read delivers): the text flavors of a paste carrying it are USFM, from
 * Standard view's own copy, or text with its markers showing, from Lexical's own copy in the views
 * with no copy of their own (a Markers-view range `MarkersViewCopyPlugin` declines is one). The html
 * of Lexical's copy, which goes in ahead of the plain text, loses its marker glyphs as well.
 */
export const MARKER_VIEW_CLIPBOARD_NAMESPACE = "platformEditor";

/**
 * A whole marker token: the `\`, a nested marker's `+`, the name, and either a closer's `*` or an
 * opening marker's one separator space. The name may be empty: `\*` closes a milestone, and a bare
 * `\` is the nameless marker, whose following space stays, as it is probably the user's. A byte
 * outside the name class stays: it may be text.
 */
const MARKER_TOKEN_REGEX = new RegExp(
  String.raw`\\\+?(?:[${ENGINE_MARKER_NAME_BYTES}]+(?:\*| ?)|\*?)`,
  "g",
);

/**
 * `usfm` without its marker tokens, and nothing else gone: a verse's number, a note's caller and an
 * attribute list are text here, so they stay. A `\` inside an attribute value counts as a marker
 * like any other (`src="c:\pics\a.jpg"` leaves `src="c:.jpg"`): this does not parse USFM.
 *
 * @param usfm - USFM text, known to be USFM: every `\` in it is taken for a marker.
 */
export function removeMarkerTokens(usfm: string): string {
  return usfm.replace(MARKER_TOKEN_REGEX, "");
}

/**
 * `html`'s body, parsed, with the marker tokens gone from each of its text nodes; its elements, and
 * so its paragraphs, stay as they are.
 */
function bodyWithoutMarkerTokens(html: string): HTMLElement {
  const { body } = new DOMParser().parseFromString(html, "text/html");
  const texts = body.ownerDocument.createTreeWalker(body, NodeFilter.SHOW_TEXT);
  while (texts.nextNode()) {
    const text = texts.currentNode;
    text.textContent = removeMarkerTokens(text.textContent ?? "");
  }
  return body;
}

/** Whether `html` is marked as text with its markers showing ({@link MARKER_TEXT_HTML_ATTRIBUTE}). */
function isMarkedAsMarkerText(html: string): boolean {
  return (
    html.includes(MARKER_TEXT_HTML_ATTRIBUTE) &&
    new DOMParser()
      .parseFromString(html, "text/html")
      .querySelector(`[${MARKER_TEXT_HTML_ATTRIBUTE}]`) !== null
  );
}

/**
 * `data` as a hidden-marker view inserts it: when it comes from a view that shows markers — it
 * carries a node copy tagged {@link MARKER_VIEW_CLIPBOARD_NAMESPACE}, or html marked
 * {@link MARKER_TEXT_HTML_ATTRIBUTE} — without the marker tokens in its html and plain text
 * ({@link removeMarkerTokens}), so a marker's name does not go in as a word of Scripture. Any other
 * `data`, whose `\` could be anything, comes back as it is.
 *
 * @param data - The pasted or dropped transfer; the result reads only `getData` from it.
 * @returns The transfer to insert, or `undefined` when such a copy held nothing but marker tokens
 *   and line breaks, so there is nothing to insert.
 */
export function withoutMarkerTokens(data: DataTransfer): DataTransfer | undefined {
  if (
    !nodeCopyIn(data, MARKER_VIEW_CLIPBOARD_NAMESPACE) &&
    !isMarkedAsMarkerText(data.getData("text/html"))
  )
    return data;
  const plain = removeMarkerTokens(data.getData("text/plain"));
  const htmlBody = bodyWithoutMarkerTokens(data.getData("text/html"));
  const text = plain || (htmlBody.textContent ?? "");
  if (!text.replace(/[\r\n]/g, "")) return undefined;
  const html = data.getData("text/html") && htmlBody.ownerDocument.documentElement.outerHTML;
  // Lexical reads only `getData` from a transfer it inserts, and a real `DataTransfer` cannot be
  // constructed everywhere this runs.
  return {
    getData: (type: string) => {
      if (type === "text/plain") return plain;
      if (type === "text/html") return html;
      return data.getData(type);
    },
  } as Pick<DataTransfer, "getData"> as DataTransfer;
}

/**
 * The serialized nodes of the node copy in `data`, when it is tagged `namespace`; otherwise
 * `undefined`. A paste the browser runs itself carries the node copy as a flavor
 * ({@link LEXICAL_CLIPBOARD_TYPE}), and one an async clipboard read delivers carries it in its html
 * ({@link NODE_COPY_HTML_ATTRIBUTE}); html that does not name that attribute is not parsed. Read it
 * before sanitizing the html, whose attribute is not a sanitizer's to keep.
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
 * `data` without its node copy, flavor or html attribute ({@link nodeCopyIn}), whatever it holds, so
 * a paste takes the html or plain text instead; `data` itself when it carries none.
 *
 * @param data - The pasted transfer; the result reads only `getData` from it.
 */
export function withoutNodeCopy(data: DataTransfer): DataTransfer {
  const html = data.getData("text/html");
  const htmlHoldsCopy = html.includes(NODE_COPY_HTML_ATTRIBUTE);
  if (!htmlHoldsCopy && !data.getData(LEXICAL_CLIPBOARD_TYPE)) return data;
  const htmlWithoutCopy = htmlHoldsCopy ? htmlWithoutNodeCopy(html) : html;
  // Lexical reads only `getData` from a transfer it inserts, and a real `DataTransfer` cannot be
  // constructed everywhere this runs.
  return {
    getData: (type: string) => {
      if (type === LEXICAL_CLIPBOARD_TYPE) return "";
      return type === "text/html" ? htmlWithoutCopy : data.getData(type);
    },
  } as Pick<DataTransfer, "getData"> as DataTransfer;
}

/**
 * `html` as it was before {@link htmlWithNodeCopy} wrapped it: each element holding
 * {@link NODE_COPY_HTML_ATTRIBUTE} replaced by its children. So html that showed nothing is empty
 * again, and a paste takes the plain text, as it would have.
 */
function htmlWithoutNodeCopy(html: string): string {
  const dom = new DOMParser().parseFromString(html, "text/html");
  dom
    .querySelectorAll(`[${NODE_COPY_HTML_ATTRIBUTE}]`)
    .forEach((carrier) => carrier.replaceWith(...carrier.childNodes));
  return dom.body.hasChildNodes() ? dom.documentElement.outerHTML : "";
}

/**
 * The nodes a node copy's serialized nodes ({@link nodeCopyIn}) make, or `undefined` when it makes
 * none: it is empty, or an entry cannot be made into a node (a type this editor does not register,
 * an entry that is not a node at all, an `importJSON` that throws). Any program can write the
 * flavor, so a paste then goes on as if it carried no node copy, as Lexical's own paste does.
 *
 * Mutating (it creates nodes): call inside an update.
 *
 * @param serialized - The node copy's serialized nodes.
 * @param logger - Where an unreadable node copy is logged, at `warn`.
 */
export function $nodesFromNodeCopy(
  serialized: SerializedLexicalNode[],
  logger?: LoggerBasic,
): LexicalNode[] | undefined {
  if (serialized.length === 0) return undefined;
  try {
    const nodes = $generateNodesFromSerializedNodes(serialized);
    return nodes.length > 0 ? nodes : undefined;
  } catch (error) {
    logger?.warn(
      `A pasted node copy could not be read, so its html or plain text goes in instead: ${String(error)}`,
    );
    return undefined;
  }
}

/** The node copy in `data`, from its flavor or its html, or `undefined` when there is none or it is
 * unreadable. */
function parsedNodeCopy(
  data: Pick<DataTransfer, "getData">,
): { namespace: unknown; nodes: SerializedLexicalNode[] } | undefined {
  return (
    nodeCopyFromJson(data.getData(LEXICAL_CLIPBOARD_TYPE)) ??
    nodeCopyFromJson(nodeCopyJsonInHtml(data.getData("text/html")))
  );
}

/** What `html` holds in {@link NODE_COPY_HTML_ATTRIBUTE}. An inert parse: it runs nothing `html`
 * holds and loads nothing it points at. */
function nodeCopyJsonInHtml(html: string): string | undefined {
  if (!html.includes(NODE_COPY_HTML_ATTRIBUTE)) return undefined;
  return (
    new DOMParser()
      .parseFromString(html, "text/html")
      .querySelector(`[${NODE_COPY_HTML_ATTRIBUTE}]`)
      ?.getAttribute(NODE_COPY_HTML_ATTRIBUTE) ?? undefined
  );
}

/** A node copy as Lexical writes it, from its JSON, or `undefined` when it does not read as one. */
function nodeCopyFromJson(
  json: string | undefined,
): { namespace: unknown; nodes: SerializedLexicalNode[] } | undefined {
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
