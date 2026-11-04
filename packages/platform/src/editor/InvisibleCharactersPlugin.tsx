import {
  registerTypedTextRewrite,
  $storedNbsps,
  withStoredNbspsAsTildes,
  $writeClipboardData,
  asClipboardEvent,
} from "./markerEdit/whitespaceDisplay.plugin.utils";
import {
  withoutZeroWidthNoBreakSpaces,
  ZERO_WIDTH_NO_BREAK_SPACE,
} from "./markerEdit/whitespaceDisplay.utils";
import { $getClipboardDataFromSelection } from "@lexical/clipboard";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  $getSelection,
  $isNodeSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_LOW,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  COPY_COMMAND,
  CUT_COMMAND,
  LexicalEditor,
  PASTE_COMMAND,
  PasteCommandType,
} from "lexical";
import { useEffect, useRef } from "react";
import { NBSP } from "shared";
import { hasStandardViewWhitespace, ViewOptions } from "shared-react";

/**
 * How the editor takes in and gives out two invisible characters, as Paratext 9's editor does:
 *
 * - A zero-width no-break space (U+FEFF) the user types, pastes or drops is dropped, in every view
 *   and whatever {@link ViewOptions.allowInvisibleCharacters} says: Paratext 9 uses the character
 *   only to position its caret and removes every one when it saves. One the text already holds is
 *   left as it is, so opening a text, or editing somewhere else in it, never changes it.
 * - With `allowInvisibleCharacters` off, a no-break space (U+00A0) typed as a character goes in as
 *   a space outside Standard view — the author's no-break space is typed as `~` — and a view that
 *   hides markers copies a stored no-break space as `~` in its plain text, as Paratext 9's views
 *   show and copy one. A pasted U+00A0 stays a no-break space. Standard view does both itself
 *   (`registerTypedNbspSpelling`, and its USFM copy), and so does the Markers view's USFM copy.
 *   With the setting on, a no-break space is typed and copied as itself.
 *
 * Mount it ahead of every plugin with a CRITICAL paste or text-insertion handler: at equal priority
 * handlers run in the order they were registered, and one that inserted the paste itself before
 * this saw it would take the U+FEFF with it. Its handlers are registered once and read the view
 * options at each event, so a change of options does not move them behind the others.
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
          (event) => redispatchPasteWithoutZeroWidthNoBreakSpaces(editor, event),
          COMMAND_PRIORITY_CRITICAL,
        ),
        editor.registerCommand(
          CONTROLLED_TEXT_INSERTION_COMMAND,
          (payload) => redispatchDropWithoutZeroWidthNoBreakSpaces(editor, payload),
          COMMAND_PRIORITY_CRITICAL,
        ),
        editor.registerCommand(
          COPY_COMMAND,
          (event) => $copyWithTildes(editor, viewOptionsRef.current, event, false),
          COMMAND_PRIORITY_LOW,
        ),
        editor.registerCommand(
          CUT_COMMAND,
          (event) => $copyWithTildes(editor, viewOptionsRef.current, event, true),
          COMMAND_PRIORITY_LOW,
        ),
      ),
    [editor],
  );

  // Standard view rewrites its own typing (`registerTypedNbspSpelling`, which also drops U+FEFF),
  // and one editor must not rewrite typing twice.
  const isStandardView = !!viewOptions && hasStandardViewWhitespace(viewOptions);
  useEffect(() => {
    if (isStandardView) return undefined;
    return registerTypedTextRewrite(editor, (text) => {
      const withoutZwnbsp = withoutZeroWidthNoBreakSpaces(text);
      return viewOptionsRef.current?.allowInvisibleCharacters
        ? withoutZwnbsp
        : withoutZwnbsp.replaceAll(NBSP, " ");
    });
  }, [editor, isStandardView]);

  return null;
}

/** The data flavors of a paste or a drop, with every U+FEFF dropped; `undefined` when there is
 * nothing to drop, or the transfer carries files, which are passed on as they are. */
function withoutZeroWidthNoBreakSpacesIn(
  dataTransfer: DataTransfer | null | undefined,
): { types: string[]; files: File[]; getData: (type: string) => string } | undefined {
  if (!dataTransfer) return undefined;
  const types = Array.from(dataTransfer.types);
  if (types.includes("Files")) return undefined;
  const flavors = new Map(types.map((type) => [type, dataTransfer.getData(type)]));
  if (![...flavors.values()].some((value) => value.includes(ZERO_WIDTH_NO_BREAK_SPACE)))
    return undefined;
  for (const [type, value] of flavors) flavors.set(type, withoutZeroWidthNoBreakSpaces(value));
  return { types, files: [], getData: (type) => flavors.get(type) ?? "" };
}

/**
 * A paste whose clipboard holds a U+FEFF is claimed and dispatched again with that character
 * dropped from every flavor, so every paste handler — this editor's own, and Lexical's — reads it
 * without one. The clipboard is readable only while its event is dispatched, so its flavors are
 * copied out now.
 */
function redispatchPasteWithoutZeroWidthNoBreakSpaces(
  editor: LexicalEditor,
  event: PasteCommandType,
): boolean {
  if (typeof ClipboardEvent === "undefined" || !(event instanceof ClipboardEvent)) return false;
  const clipboardData = withoutZeroWidthNoBreakSpacesIn(event.clipboardData);
  if (!clipboardData) return false;
  const replay = new ClipboardEvent("paste", { cancelable: true });
  Object.defineProperty(replay, "clipboardData", { value: clipboardData });
  event.preventDefault();
  editor.dispatchCommand(PASTE_COMMAND, replay);
  return true;
}

/** A drop whose data holds a U+FEFF, dispatched again without it, as a paste is. */
function redispatchDropWithoutZeroWidthNoBreakSpaces(
  editor: LexicalEditor,
  payload: InputEvent | string,
): boolean {
  if (typeof payload === "string") return false;
  const dataTransfer = withoutZeroWidthNoBreakSpacesIn(payload.dataTransfer);
  if (!dataTransfer) return false;
  const replay = new InputEvent("beforeinput", { inputType: payload.inputType, cancelable: true });
  Object.defineProperty(replay, "dataTransfer", { value: dataTransfer });
  payload.preventDefault();
  editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, replay);
  return true;
}

/**
 * In a view that hides markers, with `allowInvisibleCharacters` off, writes a copy or cut holding a
 * stored no-break space with each one as `~` in its plain text, as Paratext 9 copies one; a
 * no-break space the view shows for its layout stays as it is. The html and the internal flavor
 * keep U+00A0: they are what this editor's own paste reads, where a `~` would come back as a
 * literal tilde rather than the no-break space it was. A copy without a stored one, or one whose
 * plain text cannot be matched to the selection's text, is left to the view's usual handling.
 * Standard view and the Markers view copy USFM themselves; the Unformatted view's copy, which only
 * the library offers, is not respelled.
 */
function $copyWithTildes(
  editor: LexicalEditor,
  viewOptions: ViewOptions | undefined,
  event: ClipboardEvent | KeyboardEvent | null,
  isCut: boolean,
): boolean {
  if (
    viewOptions?.allowInvisibleCharacters ||
    viewOptions?.markerMode !== "hidden" ||
    (isCut && !editor.isEditable())
  )
    return false;
  const selection = $getSelection();
  if (!selection) return false;
  const stored = $storedNbsps(selection);
  if (!stored.includes(true)) return false;
  const data = $getClipboardDataFromSelection(selection);
  const plainText = withStoredNbspsAsTildes(data["text/plain"], stored);
  if (plainText === undefined) return false;
  data["text/plain"] = plainText;
  const $remove = () => {
    if ($isRangeSelection(selection)) selection.removeText();
    else if ($isNodeSelection(selection)) selection.getNodes().forEach((node) => node.remove());
  };
  return $writeClipboardData(asClipboardEvent(event), editor, data, isCut ? $remove : undefined);
}
