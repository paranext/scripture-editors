import { serializeEditorState } from "./adaptors/usj-editor.adaptor";
import { $selectionPlainText } from "./copyLimit/copyLimit.utils";
import { hiddenViewCopySpelling } from "./markerEdit/whitespaceDisplay.plugin.utils";
import { MarkerContent } from "@eten-tech-foundation/scripture-utilities";
import { $createRangeSelection, $getRoot, createEditor } from "lexical";
import {
  BOOK_MARKER,
  LoggerBasic,
  MarkerLookup,
  TypedMarkNode,
  usfmFragmentToUsjContent,
} from "shared";
import {
  FORMATTED_VIEW_MODE,
  getNbspSpelling,
  getViewOptions,
  usjReactNodes,
  ViewOptions,
} from "shared-react";

export interface PlainProseOptions {
  /** The project's marker lookup, which decides what in the text is a marker. */
  getMarker: MarkerLookup;
  /** `ViewOptions.allowInvisibleCharacters` of the project the text is pasted into. */
  allowInvisibleCharacters?: boolean;
  /** Told when the text cannot be converted. */
  logger?: LoggerBasic;
}

/**
 * Prose for a plain-text paste, or `text` unchanged when it holds no marker or cannot be converted
 * without losing text. Pure: no live-editor access; safe outside any update.
 *
 * The prose is what a hidden-marker view's copy of the same USFM writes as `text/plain`: the text
 * is tokenized as USFM, laid out as the Formatted view lays it out in a throwaway editor, and
 * copied from there with that view's copy (`$selectionPlainText`). So a note's words go inline,
 * markers, verse numbers and milestones leave no text, an optbreak stays the `//` the text spells,
 * and each paragraph is a line. Book and chapter lines are left out: their text is an identifier
 * and a number, not prose.
 *
 * Text holding a marker `getMarker` does not know (`C:\temp`, say) is not USFM that can be read
 * without guessing, so it is returned unchanged rather than lose the bytes the guess would drop.
 */
export function usfmToPlainProse(text: string, options: PlainProseOptions): string {
  if (!text.includes("\\")) return text;
  const { getMarker, allowInvisibleCharacters, logger } = options;
  const formattedOptions = getViewOptions(FORMATTED_VIEW_MODE);
  if (!formattedOptions) return text;
  const hiddenOptions: ViewOptions = { ...formattedOptions, allowInvisibleCharacters };
  try {
    const content = usfmFragmentToUsjContent(text.replace(/\r\n?/g, "\n"), {
      getMarker,
      nbspSpelling: getNbspSpelling(hiddenOptions),
    });
    if (holdsUnknownMarker(content, getMarker)) return text;
    const editor = createEditor({
      namespace: "plain-text-paste",
      nodes: [TypedMarkNode, ...usjReactNodes],
      onError: (error) => {
        throw error;
      },
    });
    // Removing milestones first also keeps a pasted comment milestone's id away from the comment
    // store the adaptor reports the document's comment ids to.
    const state = editor.parseEditorState(
      serializeEditorState(
        { type: "USJ", version: "3.1", content: proseContent(content) },
        hiddenOptions,
      ),
    );
    return state.read(
      () => {
        const root = $getRoot();
        const selection = $createRangeSelection();
        selection.anchor.set(root.getKey(), 0, "element");
        selection.focus.set(root.getKey(), root.getChildrenSize(), "element");
        return $selectionPlainText(
          selection,
          undefined,
          hiddenViewCopySpelling(allowInvisibleCharacters),
        );
      },
      { editor },
    );
  } catch (error) {
    logger?.warn("Pasting the text as it is: it could not be converted to plain prose.", error);
    return text;
  }
}

/** USJ object types whose marker names a stylesheet marker. */
const STYLED_TYPES = new Set(["para", "char", "note"]);

/**
 * Whether `content` holds a marker `getMarker` does not know. The tokenizer guesses at such a
 * marker by where it sits (a paragraph in body text, a character span in a note, keeping a nested
 * `+` in its name), so it shows up as a paragraph, span or note, or as a stray closer, named by a
 * marker the stylesheet lacks. A bare `\*`, which closes a milestone, names none.
 */
function holdsUnknownMarker(content: MarkerContent[], getMarker: MarkerLookup): boolean {
  return content.some((item) => {
    if (typeof item === "string") return false;
    const marker =
      item.type === "unmatched" ? item.marker?.replace(/^\+/, "").replace(/\*$/, "") : item.marker;
    const isNamed = STYLED_TYPES.has(item.type) || (item.type === "unmatched" && marker !== "");
    if (isNamed && marker !== undefined && !getMarker(marker)) return true;
    return item.content ? holdsUnknownMarker(item.content, getMarker) : false;
  });
}

/** USJ object types that stand for no prose: a stray closer, a milestone, a chapter line. */
const PROSELESS_TYPES = new Set(["unmatched", "ms", "chapter"]);

/**
 * `content` without what stands for no prose, and with each optbreak as the `//` it was. The
 * tokenizer reads a book line (`\id GEN …`) as an ordinary paragraph, so it is left out by its
 * marker.
 */
function proseContent(content: MarkerContent[]): MarkerContent[] {
  return content.flatMap((item): MarkerContent[] => {
    if (typeof item === "string") return [item];
    if (PROSELESS_TYPES.has(item.type)) return [];
    if (item.type === "para" && item.marker === BOOK_MARKER) return [];
    if (item.type === "optbreak") return ["//"];
    return [item.content ? { ...item, content: proseContent(item.content) } : item];
  });
}
