import { serializeEditorState } from "./adaptors/usj-editor.adaptor";
import { $selectionPlainText } from "./copyLimit/copyLimit.utils";
import { hiddenViewCopySpelling } from "./markerEdit/whitespaceDisplay.plugin.utils";
import { MarkerContent } from "@eten-tech-foundation/scripture-utilities";
import { $createRangeSelection, $getRoot, createEditor } from "lexical";
import {
  BOOK_MARKER,
  isAttributeMarker,
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
 * without losing text. Needs no live editor and is safe outside any update. Like the other
 * side-serializers, it goes through the adaptor's module state: it sets the view options and calls
 * the host's comment callback (`addMissingComments`), with no comment ids.
 *
 * The prose is what a hidden-marker view's copy of the same USFM writes as `text/plain`: the text
 * is tokenized as USFM, laid out as the Formatted view lays it out in a throwaway editor, and
 * copied from there with that view's copy (`$selectionPlainText`). So a note's words go inline,
 * markers, verse numbers and milestones leave no text, and each paragraph is a line. Book and
 * chapter lines are left out: their text is an identifier and a number, not prose. An optbreak is
 * the one deliberate departure from a hidden-marker copy, which drops every optbreak (so
 * `https://ebible.org` in a note copies as `https:ebible.org`): the `//` the text spells is kept,
 * because keeping it loses no text.
 *
 * Every editable-marker view converts, not only Standard: the library's Unformatted view
 * (`markerMode` "editable") does too. Its copy is Lexical's display text rather than Standard's
 * USFM copy, so its own copies may not round-trip through this conversion as Standard's do.
 *
 * Text is read as USFM only when it names a marker USFM defines: one `getMarker` knows, `\cat` (a
 * note's category, which the tokenizer knows by name though the bundled stylesheet lacks it), or a
 * custom `\z…` marker. Other text (`C:\temp`, `\section{Intro}`) is returned unchanged.
 *
 * Text that is USFM but holds a marker `getMarker` does not know is returned unchanged as well,
 * rather than lose the bytes a guess at that marker would drop, with one exception: a name that
 * only ever opens a line after a line break is read as a paragraph marker, because Standard view's
 * copy writes every paragraph after the first that way (and a bare `\` there as a paragraph whose
 * marker has no name). That is still a guess: in USFM-looking text, a later line holding only a
 * backslash word (`\temp`) loses that word. A name that opens the text's first line is not read
 * this way, so a copy that starts at an unknown paragraph marker pastes unchanged. A `\z…` name
 * that opens a later line counts as USFM evidence by itself, so `See:\n\zebra stripes` loses
 * `\zebra`.
 *
 * Text whose prose comes out empty or whitespace-only (a copy of only `\v 5 ` or `\c 2`, or of two
 * empty paragraphs, `\p ` and `\p `, on lines of their own) is returned unchanged too: pasting
 * nothing, or only blanks, over a selection would wipe out the text it replaces. Prose with words
 * in it is never trimmed.
 */
export function usfmToPlainProse(text: string, options: PlainProseOptions): string {
  if (!text.includes("\\")) return text;
  const { getMarker, allowInvisibleCharacters, logger } = options;
  const formattedOptions = getViewOptions(FORMATTED_VIEW_MODE);
  if (!formattedOptions) return text;
  const hiddenOptions: ViewOptions = { ...formattedOptions, allowInvisibleCharacters };
  try {
    const usfm = text.replace(/\r\n?/g, "\n");
    const isUsfmMarker = (marker: string) =>
      getMarker(marker) !== undefined || isAttributeMarker(marker) || marker.startsWith("z");
    if (!namesUsfmMarker(usfm, isUsfmMarker)) return text;
    const nbspSpelling = getNbspSpelling(hiddenOptions);
    // The tokenizer reads a bare `\` as a nameless paragraph's marker only where a fragment opens,
    // so each line that opens with one is tokenized as a fragment of its own. A paragraph marker
    // closes whatever is open before it, so this reads the text as one fragment would.
    const content = usfm.split(NAMELESS_LINE_BREAK).flatMap((fragment, index) =>
      usfmFragmentToUsjContent(fragment.replace(LINE_BREAK_AFTER_SPACE, ""), {
        getMarker,
        nbspSpelling,
        opensNamelessParagraph: index > 0,
      }),
    );
    const linesOpenedOnly = markersOpeningLinesOnly(usfm);
    const isKnown = (marker: string, type: string) =>
      getMarker(marker) !== undefined ||
      isAttributeMarker(marker) ||
      (type === "para" && linesOpenedOnly.has(marker));
    if (holdsUnknownMarker(content, isKnown)) return text;
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
    const prose = state.read(
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
    return prose.trim() === "" ? text : prose;
  } catch (error) {
    logger?.warn("Pasting the text as it is: it could not be converted to plain prose.", error);
    return text;
  }
}

/**
 * A line break before a bare `\` — one followed by whitespace, another `\`, or nothing — the glyph
 * Standard view shows, and its copy writes, for a paragraph whose marker is the empty name.
 */
const NAMELESS_LINE_BREAK = /\n(?=\\(?:[\s\u00A0\u200B\\]|$))/;

/**
 * A line break after a space and before a marker. Standard view's copy ends each paragraph's line
 * with a line break, so a space in front of one is the paragraph's own last character; the
 * tokenizer would fold the space into the break and drop both before a paragraph marker. Without
 * the break the space stays, and still separates the marker from the text.
 */
const LINE_BREAK_AFTER_SPACE = /(?<=[ \t])\n(?=\\)/g;

/** A marker token: `\`, then its name, which ends where the tokenizer ends it (a `*` ends a
 * closer's name and is part of it). */
const MARKER_TOKEN = /\\([^\\|\s\u200B*]*\*?)/g;

/** Whether a marker token in `usfm` names a marker `isUsfmMarker` accepts, a nested `+` and a
 * closer's `*` aside. */
function namesUsfmMarker(usfm: string, isUsfmMarker: (marker: string) => boolean): boolean {
  for (const { 1: name } of usfm.matchAll(MARKER_TOKEN)) {
    const marker = name.replace(/^\+/, "").replace(/\*$/, "");
    if (marker && isUsfmMarker(marker)) return true;
  }
  return false;
}

/**
 * The names of the markers in `usfm` that only ever open a line after a line break. Standard view's
 * copy writes each paragraph on a line of its own, opening with its marker, so a name the
 * stylesheet does not know is still a paragraph marker there (the tokenizer reads it as one).
 * Elsewhere such a name may be no marker at all (`C:\temp`).
 */
function markersOpeningLinesOnly(usfm: string): Set<string> {
  const openingLines = new Set<string>();
  const elsewhere = new Set<string>();
  for (const { 1: name, index } of usfm.matchAll(MARKER_TOKEN))
    (index > 0 && usfm[index - 1] === "\n" ? openingLines : elsewhere).add(name);
  elsewhere.forEach((name) => openingLines.delete(name));
  return openingLines;
}

/** USJ object types whose marker names a stylesheet marker. */
const STYLED_TYPES = new Set(["para", "char", "note"]);

/**
 * Whether `content` holds a marker `isKnown` rejects. The tokenizer guesses at an unknown marker by
 * where it sits (a paragraph in body text, a character span in a note, keeping a nested `+` in its
 * name), so it shows up as a paragraph, span or note, or as a stray closer, named by a marker the
 * stylesheet lacks. A bare `\*`, which closes a milestone, names none, and neither does a nameless
 * paragraph, which the tokenizer reads only where a line opens with one. An empty name on anything
 * else is unknown.
 */
function holdsUnknownMarker(
  content: MarkerContent[],
  isKnown: (marker: string, type: string) => boolean,
): boolean {
  return content.some((item) => {
    if (typeof item === "string") return false;
    const marker =
      item.type === "unmatched" ? item.marker?.replace(/^\+/, "").replace(/\*$/, "") : item.marker;
    const isNameless = marker === "" && (item.type === "para" || item.type === "unmatched");
    const isNamed =
      (STYLED_TYPES.has(item.type) || item.type === "unmatched") &&
      marker !== undefined &&
      !isNameless;
    if (isNamed && !isKnown(marker, item.type)) return true;
    return item.content ? holdsUnknownMarker(item.content, isKnown) : false;
  });
}

/** USJ object types that stand for no prose: a stray closer, a milestone, a chapter line. */
const PROSELESS_TYPES = new Set(["unmatched", "ms", "chapter"]);

/**
 * `content` without what stands for no prose, and with each optbreak as the `//` it was. The
 * tokenizer reads a book line (`\id GEN …`) as an ordinary paragraph, so it is left out by its
 * marker.
 *
 * A stray `\*` stays as its bytes, the way a hidden-marker view shows it: it closes no milestone
 * (a copy cannot split one, so it never leaves half of one behind), and a named closer may be the
 * end of a span the copy started inside, which writes no prose.
 */
function proseContent(content: MarkerContent[]): MarkerContent[] {
  return content.flatMap((item): MarkerContent[] => {
    if (typeof item === "string") return [item];
    if (item.type === "unmatched" && item.marker === "*") return ["\\*"];
    if (PROSELESS_TYPES.has(item.type)) return [];
    if (item.type === "para" && item.marker === BOOK_MARKER) return [];
    if (item.type === "optbreak") return ["//"];
    return [item.content ? { ...item, content: proseContent(item.content) } : item];
  });
}
