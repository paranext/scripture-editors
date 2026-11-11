import { registerTypedTextRewrite } from "./markerEdit/whitespaceDisplay.plugin.utils";
import { normalizeEnteredText } from "./markerEdit/whitespaceDisplay.utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  COMMAND_PRIORITY_CRITICAL,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  LexicalEditor,
  PASTE_COMMAND,
  PasteCommandType,
} from "lexical";
import { useEffect, useRef } from "react";
import { NBSP } from "shared";
import {
  hasStandardViewWhitespace,
  LEXICAL_CLIPBOARD_TYPE,
  NODE_COPY_HTML_ATTRIBUTE,
  ViewOptions,
} from "shared-react";

/**
 * How the editor takes in and gives out invisible characters, as Paratext 9's editor does:
 *
 * - A zero-width no-break space (U+FEFF) the user types, pastes or drops is dropped, in every view
 *   and whatever {@link ViewOptions.allowInvisibleCharacters} says: Paratext 9 uses the character
 *   only to position its caret and removes every one when it saves. One the text already holds is
 *   left as it is, so opening a text, or editing somewhere else in it, never changes it.
 * - A C0 control character other than tab, line feed and carriage return that the user types,
 *   pastes or drops goes in as a space, in every view: ParatextData reads each one as a space, and
 *   the editors keep two of them for themselves (`enteredControlCharactersToSpaces`). One the text
 *   already holds is left as it is, as a U+FEFF is.
 * - With `allowInvisibleCharacters` off, a no-break space (U+00A0) typed as a character goes in as
 *   a space outside Standard view — the author's no-break space is typed as `~` — and a view that
 *   hides markers copies a stored no-break space as `~` in its plain text, as Paratext 9's views
 *   show and copy one. A pasted U+00A0 stays a no-break space. The typing rule is this plugin's; the
 *   copy is the view's own (`HiddenMarkersViewCopyPlugin`), which writes the view's prose with
 *   `$withStoredNbspsAsTilde`. Standard view does both itself (`registerTypedNbspSpelling`, and its
 *   USFM copy), and so does the Markers view's USFM copy. With the setting on, a no-break space is
 *   typed and copied as itself.
 *
 * Mount it ahead of every plugin with a CRITICAL paste or text-insertion handler: at equal priority
 * handlers run in the order they were registered, and one that inserted the paste itself before
 * this saw it would take the U+FEFF or the control character in with it. Its paste and drop handlers are registered once, at
 * mount; the typed-text rewrite reads the view options at each insertion, and is registered again
 * only when the view switches into or out of Standard view, which rewrites its own typing.
 */
export function InvisibleCharactersPlugin({ viewOptions }: { viewOptions?: ViewOptions }): null {
  const [editor] = useLexicalComposerContext();
  const viewOptionsRef = useRef(viewOptions);
  useEffect(() => {
    viewOptionsRef.current = viewOptions;
  }, [viewOptions]);

  useEffect(
    () =>
      mergeRegister(
        editor.registerCommand(
          PASTE_COMMAND,
          (event) => redispatchPasteAsEnteredText(editor, event),
          COMMAND_PRIORITY_CRITICAL,
        ),
        editor.registerCommand(
          CONTROLLED_TEXT_INSERTION_COMMAND,
          (payload) => redispatchDropAsEnteredText(editor, payload),
          COMMAND_PRIORITY_CRITICAL,
        ),
      ),
    [editor],
  );

  // Standard view rewrites its own typing (`registerTypedNbspSpelling`, which also takes typed text
  // in as `normalizeEnteredText` does), and one editor must not rewrite typing twice.
  const isStandardView = !!viewOptions && hasStandardViewWhitespace(viewOptions);
  useEffect(() => {
    if (isStandardView) return undefined;
    return registerTypedTextRewrite(editor, (text) => {
      const entered = normalizeEnteredText(text);
      return viewOptionsRef.current?.allowInvisibleCharacters
        ? entered
        : entered.replaceAll(NBSP, " ");
    });
  }, [editor, isStandardView]);

  return null;
}

/**
 * A JSON string escape of a control character {@link normalizeEnteredText} turns into a space
 * (`\u000b`, and the short `\b` and `\f`), or an escaped backslash, matched first so the backslash
 * it ends with never starts an escape of its own.
 */
const JSON_ESCAPE_OF_ENTERED_CONTROL = /\\(?:\\|u00(?:0[0-8bcefBCEF]|1[0-9a-fA-F])|[bf])/g;

/**
 * A node copy's JSON as {@link normalizeEnteredText} takes in each string it holds; `json` itself
 * when nothing changes or it does not parse. JSON writes a control character as an escape, so the
 * text itself never shows one.
 */
function nodeCopyJsonEntered(json: string): string {
  const entered = normalizeEnteredText(json);
  const hasEscapedControl = [...entered.matchAll(JSON_ESCAPE_OF_ENTERED_CONTROL)].some(
    ([escape]) => escape !== "\\\\",
  );
  if (!hasEscapedControl) return entered;
  try {
    return JSON.stringify(
      JSON.parse(entered, (_key, value: unknown) =>
        typeof value === "string" ? normalizeEnteredText(value) : value,
      ),
    );
  } catch {
    return entered;
  }
}

/** `html` with each string of the node copy it holds in {@link NODE_COPY_HTML_ATTRIBUTE} as
 * {@link normalizeEnteredText} takes it in; `html` itself when that changes nothing. */
function htmlWithNodeCopyEntered(html: string): string {
  if (!html.includes(NODE_COPY_HTML_ATTRIBUTE)) return html;
  const dom = new DOMParser().parseFromString(html, "text/html");
  let isChanged = false;
  dom.querySelectorAll(`[${NODE_COPY_HTML_ATTRIBUTE}]`).forEach((carrier) => {
    const json = carrier.getAttribute(NODE_COPY_HTML_ATTRIBUTE) ?? "";
    const entered = nodeCopyJsonEntered(json);
    if (entered === json) return;
    carrier.setAttribute(NODE_COPY_HTML_ATTRIBUTE, entered);
    isChanged = true;
  });
  return isChanged ? dom.documentElement.outerHTML : html;
}

/** A flavor of a paste or a drop as {@link normalizeEnteredText} takes in the text it carries,
 * however the flavor writes that text. */
function enteredFlavor(type: string, value: string): string {
  if (type === LEXICAL_CLIPBOARD_TYPE) return nodeCopyJsonEntered(value);
  const entered = normalizeEnteredText(value);
  return type === "text/html" ? htmlWithNodeCopyEntered(entered) : entered;
}

/** The data flavors of a paste or a drop, each as {@link enteredFlavor} gives it; `undefined` when
 * that changes none of them, or the transfer carries files, which are passed on as they are. */
function enteredTransfer(
  dataTransfer: DataTransfer | null | undefined,
): { types: string[]; files: File[]; getData: (type: string) => string } | undefined {
  if (!dataTransfer) return undefined;
  const types = Array.from(dataTransfer.types);
  if (types.includes("Files")) return undefined;
  let isChanged = false;
  const flavors = new Map(
    types.map((type) => {
      const value = dataTransfer.getData(type);
      const entered = enteredFlavor(type, value);
      if (entered !== value) isChanged = true;
      return [type, entered];
    }),
  );
  if (!isChanged) return undefined;
  return { types, files: [], getData: (type) => flavors.get(type) ?? "" };
}

/**
 * A paste whose clipboard holds a character entered text does not keep ({@link enteredFlavor}) is
 * claimed and dispatched again with every flavor as entered text, so every paste handler — this
 * editor's own, and Lexical's — reads it that way. The clipboard is readable only while its event
 * is dispatched, so its flavors are copied out now.
 */
function redispatchPasteAsEnteredText(editor: LexicalEditor, event: PasteCommandType): boolean {
  if (typeof ClipboardEvent === "undefined" || !(event instanceof ClipboardEvent)) return false;
  const clipboardData = enteredTransfer(event.clipboardData);
  if (!clipboardData) return false;
  const replay = new ClipboardEvent("paste", { cancelable: true });
  Object.defineProperty(replay, "clipboardData", { value: clipboardData });
  event.preventDefault();
  editor.dispatchCommand(PASTE_COMMAND, replay);
  return true;
}

/** A drop whose data holds a character entered text does not keep, dispatched again as entered
 * text, as a paste is. */
function redispatchDropAsEnteredText(editor: LexicalEditor, payload: InputEvent | string): boolean {
  if (typeof payload === "string") return false;
  const dataTransfer = enteredTransfer(payload.dataTransfer);
  if (!dataTransfer) return false;
  const replay = new InputEvent("beforeinput", { inputType: payload.inputType, cancelable: true });
  Object.defineProperty(replay, "dataTransfer", { value: dataTransfer });
  payload.preventDefault();
  editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, replay);
  return true;
}
