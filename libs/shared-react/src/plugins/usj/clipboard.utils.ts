import { $findMatchingParent, mergeRegister } from "@lexical/utils";
import {
  $createTextNode,
  $getState,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_LOW,
  COPY_COMMAND,
  CUT_COMMAND,
  LexicalEditor,
  LexicalNode,
  PASTE_COMMAND,
  SELECTION_INSERT_CLIPBOARD_NODES_COMMAND,
  TabNode,
  TextNode,
} from "lexical";
import { ENGINE_MARKER_NAME_BYTES, LoggerBasic, MARKER_TEXT_TYPE, textTypeState } from "shared";
import {
  LEXICAL_CLIPBOARD_TYPE,
  MARKER_VIEW_CLIPBOARD_NAMESPACE,
  nodeCopyIn,
  transferWith,
} from "./nodeCopy.utils";

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
 * EDITOR, which is the thing that synthesizes the event. A view with its own clipboard payload
 * claims at a higher priority (Standard view's USFM copy) or at this same one (the hidden-marker
 * views' prose copy, which claims only a selection with text to write, which this never claims), so
 * whichever runs first, the outcome is the same.
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
 * A selection point on the tab moves to the space's end, as `LexicalNode.replace` moves it. A tab
 * inside a text node is not a tab node, so it stays: Standard view's own paste, which inserts text,
 * can store one that way.
 */
export function registerTabsAsSpaces(editor: LexicalEditor): () => void {
  return editor.registerNodeTransform(TabNode, (tab) => {
    const space = $createTextNode(" ").setFormat(tab.getFormat()).setStyle(tab.getStyle());
    tab.replace(space);
  });
}

/**
 * Whether `node` is plain prose: a plain text node with no format and no engine role.
 *
 * Read-only: safe in any read — `editor.getEditorState().read()`, an `editor.update()`, or a
 * command handler.
 */
export function $isPlainProse(node: LexicalNode): node is TextNode {
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
 * span. Anything else (a char span, a verse, a note, a paragraph) is left to Lexical. In the views
 * that hide markers, a range over more than one text is `InlineRangeEditPlugin`'s and never gets
 * here.
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

/**
 * Pastes at the selection what `read` gets from the clipboard, as a paste event: unless the
 * clipboard held nothing, or the editor stopped taking a paste while it was read. A read that fails
 * (no permission to read the clipboard, say) pastes nothing and is logged at `warn`, to `logger`,
 * or the console when there is none.
 */
function pasteFromClipboardRead(
  editor: LexicalEditor,
  read: () => Promise<DataTransfer | undefined>,
  logger: LoggerBasic | undefined,
): void {
  read().then(
    (data) => {
      if (!data || !editor.isEditable()) return;
      editor.dispatchCommand(PASTE_COMMAND, new ClipboardEvent("paste", { clipboardData: data }));
    },
    (error: unknown) => {
      (logger ?? console).warn(`Could not read the clipboard to paste: ${String(error)}`);
    },
  );
}

/**
 * Pastes every flavor the clipboard holds at the selection, read with `navigator.clipboard.read()`
 * (which returns no custom flavor), each tab in it as a space. See {@link pasteFromClipboardRead}
 * for a failed read, an empty clipboard and an editor that stopped taking a paste.
 *
 * @param editor - The editor to paste into.
 * @param logger - Where a failed clipboard read is logged; the console when omitted.
 */
export const pasteSelection = (editor: LexicalEditor, logger?: LoggerBasic) => {
  pasteFromClipboardRead(
    editor,
    async () => {
      const [item] = await navigator.clipboard.read();
      if (!item) return undefined;
      const data = new DataTransfer();
      for (const type of item.types) {
        const dataString = await (await item.getType(type)).text();
        data.setData(type, cleanupText(dataString));
      }
      return data;
    },
    logger,
  );
};

/**
 * Pastes the clipboard's plain text at the selection, read with `navigator.clipboard.readText()`,
 * each tab in it as a space. See {@link pasteFromClipboardRead} for a failed read, an empty
 * clipboard and an editor that stopped taking a paste.
 *
 * @param editor - The editor to paste into.
 * @param logger - Where a failed clipboard read is logged; the console when omitted.
 */
export const pasteSelectionAsPlainText = (editor: LexicalEditor, logger?: LoggerBasic) => {
  pasteFromClipboardRead(
    editor,
    async () => {
      const text = await navigator.clipboard.readText();
      if (!text) return undefined;
      const data = new DataTransfer();
      data.setData("text/plain", cleanupText(text));
      return data;
    },
    logger,
  );
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

/**
 * Marks `text/html` from a view that shows markers (`usfmToClipboardHtml`), so a hidden-marker view
 * knows its `\` tokens are markup. It stands in for the node copy's namespace
 * ({@link MARKER_VIEW_CLIPBOARD_NAMESPACE}), which an async clipboard read does not return.
 */
export const MARKER_TEXT_HTML_ATTRIBUTE = "data-platform-editor-marker-text";

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
 * `usfm` without its marker tokens, and nothing else gone: a verse's or chapter's number, a note's
 * caller, an `\id` line's code and title and an attribute list are text here, so they stay
 * ({@link withoutMarkerTokens} drops a book line and a chapter token first). A `\` inside an
 * attribute value counts as a marker like any other (`src="c:\pics\a.jpg"` leaves `src="c:.jpg"`):
 * this does not parse USFM.
 *
 * @param usfm - USFM text, known to be USFM: every `\` in it is taken for a marker.
 */
export function removeMarkerTokens(usfm: string): string {
  return usfm.replace(MARKER_TOKEN_REGEX, "");
}

/** A `\c` chapter token ANYWHERE in a line: the marker, its separator, and the ONE
 * whitespace-delimited word the tokenizer reads as the chapter number (`getNextWord`,
 * usfmFragmentToUsj.ts) — and nothing more, because everything past that word is ordinary content
 * the paste must keep. Stops at a backslash too, so `\c\nd x` strips the bare `\c` and leaves
 * `\nd x` whole. Not anchored to the line's start: a chapter token can sit mid-line (`x \c 5 y`,
 * a paste landing mid-sentence), and an anchor there would silently miss it. Global so more than
 * one occurrence on the same line is fully swept, not just the first. */
const CHAPTER_TOKEN = new RegExp(
  String.raw`\\c(?![${ENGINE_MARKER_NAME_BYTES}])[ \u00A0]*[^\s\\]*`,
  "g",
);

/** A `\id` book-id token ANYWHERE in a line, capturing its payload up to — but not including —
 * the next marker or line end. Wider than {@link CHAPTER_TOKEN} on purpose: an `\id` line's whole
 * remainder IS the token's payload (book code plus an optional free-text description), so there is
 * no trailing content to preserve the way there is after a chapter number. */
const BOOK_ID_TOKEN = new RegExp(String.raw`\\id(?![${ENGINE_MARKER_NAME_BYTES}])[^\n\\]*`, "g");

/**
 * Either stripped token at the very START of a line — the one placement whose whole line may be
 * dropped. Non-global on purpose: `.test` on a global regex carries `lastIndex` between calls.
 */
const LINE_LEADING_STRIPPED_TOKEN = new RegExp(
  String.raw`^(?:${CHAPTER_TOKEN.source}|${BOOK_ID_TOKEN.source})`,
);

/**
 * Drops every pasted `\c`/`\id` token and its payload (the chapter number / book code, up to the
 * next marker or newline) before insertion. Both create a document-structural node PT9 allows
 * only once per book (a `ChapterNode`/`BookNode`, materialized from the marker name alone —
 * `usj-editor.adaptor.ts` — same as a real load), and Standard view has no per-paste "am I the
 * only one" check the way an initial document load does. A pasted bare `\c 2` mid-chapter would
 * otherwise create a second chapter node in the editor, and every subsequent save would then fail
 * with the PDP's "Multiple chapter markers present" (an error that surfaces only in the renderer
 * log — disk and other editors would silently stop updating). `\id` is the book-level twin of the
 * same hazard and is stripped identically. A token need not be its own line — `x \c 5 y`
 * mid-paragraph reaches the same tokenizer branch (chapter/book-id tokens are recognized wherever
 * they occur, not just at a fragment's start) and left unstripped produces the identical poisoned
 * shape: a second chapter node PLUS the trailing bytes (`y`) stranding as a bare top-level USJ
 * string outside any paragraph, since a chapter token closes the enclosing paragraph the same way
 * it does on a real load.
 *
 * Only the token's OWN bytes go: `\c` plus the one word the tokenizer reads as the chapter
 * number. Content that merely follows it on the same line is the user's and survives — `x \c 5 y`
 * strips to `x  y`, not to `x `. Removing more would trade one silent corruption for another, and
 * the poisoning this exists to prevent is fully undone once the marker and its number are gone.
 * A token sharing a line with a LATER marker — `\c 5\v 1 In the beginning` — likewise only loses
 * its own bytes: both token regexes stop at the next `\`.
 *
 * Splits on lines and strips per line (not one global pass over the whole text) so a token that
 * consumes an ENTIRE line can cleanly take that line's own newline with it too (no stray empty
 * paragraph left behind). Only a line the token OPENS may go whole: whatever whitespace trails it
 * is the glyph's own separator (a chapter line copies as `\c 5 `, and the token stops short of
 * that space), so it goes with the token. Whitespace BEFORE the token is the user's: a space or
 * NBSP ahead of `\c 5` survives as a one-character line instead of going with the token, because
 * a byte the user wrote is never dropped. A line that was ALREADY blank in the source paste
 * (nothing to do with `\c`/`\id`) is left alone.
 *
 * Exported for the in-note CRITICAL multi-line paste claim (`MarkerEditPlugin.tsx`), which shares
 * this strip the same way it shares `normalizePastedNbsp` — a `\c`/`\id` token pasted into note
 * content is just as reachable (the note-content Tier 2 rebuild tokenizes literal text the same
 * way a paragraph rebuild does) and just as harmful there.
 */
export function stripPastedChapterAndBookId(text: string): string {
  return text
    .split("\n")
    .map((line) => {
      const stripped = line.replace(CHAPTER_TOKEN, "").replace(BOOK_ID_TOKEN, "");
      // Anchored, so the line goes only when the token is what opened it. A token further in
      // leaves whatever preceded it behind, whitespace included: that byte is content the user
      // wrote, and dropping the line would take it — and the line break — with the token.
      const isTokenOnlyLine =
        LINE_LEADING_STRIPPED_TOKEN.test(line) && stripped.trim() === "" && line.trim() !== "";
      return isTokenOnlyLine ? undefined : stripped;
    })
    .filter((line): line is string => line !== undefined)
    .join("\n");
}

/**
 * `html`'s body, parsed, with the marker tokens gone from each of its text nodes; its elements, and
 * so its paragraphs, stay as they are.
 */
function bodyWithoutMarkerTokens(html: string): HTMLElement {
  const { body } = new DOMParser().parseFromString(html, "text/html");
  const lines = [...body.querySelectorAll("p")].filter((line) => line.textContent?.trim());
  const texts = body.ownerDocument.createTreeWalker(body, NodeFilter.SHOW_TEXT);
  while (texts.nextNode()) {
    const text = texts.currentNode;
    text.textContent = lineWithoutMarkers(text.textContent ?? "");
  }
  lines.filter((line) => !line.textContent).forEach((line) => line.remove());
  return body;
}

/** `usfm` without its marker tokens, its book line and its chapter tokens
 * ({@link removeMarkerTokens}, {@link stripPastedChapterAndBookId}). */
function lineWithoutMarkers(usfm: string): string {
  return removeMarkerTokens(stripPastedChapterAndBookId(usfm));
}

/** {@link lineWithoutMarkers} line by line, without a line it empties (a book or chapter line, a
 * bare paragraph marker). A line already blank stays, and so does a space the user wrote. */
function textWithoutMarkers(usfm: string): string {
  return usfm
    .split("\n")
    .flatMap((line) => {
      const kept = lineWithoutMarkers(line);
      return line.trim() && !kept.replace(/\r$/, "") ? [] : [kept];
    })
    .join("\n");
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
 * ({@link removeMarkerTokens}), so a marker's name does not go in as a word of Scripture, and
 * without its book line and chapter tokens ({@link stripPastedChapterAndBookId}), which a
 * hidden-marker view's paste never inserts from any flavor. A line that leaves empty (a book or
 * chapter line, a bare paragraph marker) goes with them, so it leaves no empty paragraph.
 * Any other `data`, whose `\` could be anything, comes back as it is.
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
  const plain = textWithoutMarkers(data.getData("text/plain"));
  const htmlBody = bodyWithoutMarkerTokens(data.getData("text/html"));
  const text = plain || (htmlBody.textContent ?? "");
  if (!text.replace(/[\r\n]/g, "")) return undefined;
  const html = data.getData("text/html") && htmlBody.ownerDocument.documentElement.outerHTML;
  return transferWith(data, { "text/plain": plain, "text/html": html });
}

/** A transfer holding `text` alone, as plain text (see {@link transferWith}). */
export function plainTextTransfer(text: string): DataTransfer {
  return transferWith(
    { getData: () => "", types: ["text/plain"], files: [] as unknown as FileList },
    { "text/plain": text },
  );
}

/**
 * Has every paste in `editor` leave the node copy flavor ({@link LEXICAL_CLIPBOARD_TYPE}) unread
 * while `isEnabled()` answers true, so a paste the browser delivers itself (macOS's Edit > Paste,
 * Shift+Insert) takes exactly what Ctrl+V takes: Ctrl+V, the context menu's Paste and
 * `EditorRef.paste()` read the clipboard with `navigator.clipboard.read()` ({@link pasteSelection}),
 * which returns no custom flavor. A paste carrying the flavor is claimed and dispatched again as
 * its own event seen through a clipboard without it, so every paste handler, Lexical's own among
 * them, reads the same transfer, and the event's target and `preventDefault` stay its own.
 *
 * Registered at `COMMAND_PRIORITY_CRITICAL`. Handlers of one priority run in the order they were
 * registered, so register it before other CRITICAL paste handlers. A handler registered earlier
 * sees each paste twice (with the flavor, then without), so it must return `false` for a paste it
 * leaves unchanged.
 *
 * @param editor - The editor.
 * @param isEnabled - Whether pastes leave the flavor unread, asked on each paste.
 */
export function registerPasteAsClipboardRead(
  editor: LexicalEditor,
  isEnabled: () => boolean,
): () => void {
  return editor.registerCommand(
    PASTE_COMMAND,
    (event) => {
      if (!isEnabled() || !event || typeof event !== "object" || !("clipboardData" in event))
        return false;
      const data = event.clipboardData;
      if (!data?.getData(LEXICAL_CLIPBOARD_TYPE)) return false;
      const clipboardRead = transferWith(data, { [LEXICAL_CLIPBOARD_TYPE]: "" });
      // Over an empty target, since a proxy must report a fixed property of its target as it is,
      // and an event's `clipboardData` can be one. It reads as the event's own class.
      const asRead = new Proxy<ClipboardEvent>(Object.create(null), {
        get(_target, property) {
          if (property === "clipboardData") return clipboardRead;
          // Read with the event itself as `this`: a DOM event's own getters and methods refuse
          // any other receiver.
          const value: unknown = Reflect.get(event, property, event);
          return typeof value === "function" ? value.bind(event) : value;
        },
        has: (_target, property) => property in event,
        getPrototypeOf: () => Object.getPrototypeOf(event),
      });
      editor.dispatchCommand(PASTE_COMMAND, asRead);
      return true;
    },
    COMMAND_PRIORITY_CRITICAL,
  );
}
