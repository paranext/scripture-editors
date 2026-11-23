import { serializeEditorState } from "./adaptors/usj-editor.adaptor";
import { $selectionPlainText } from "./copyLimit/copyLimit.utils";
import {
  hiddenViewCopySpelling,
  normalizePastedNbsp,
  stripPastedChapterAndBookId,
} from "./markerEdit/whitespaceDisplay.plugin.utils";
import { controlCharactersToSpaces } from "./markerEdit/whitespaceDisplay.utils";
import { MarkerContent } from "@eten-tech-foundation/scripture-utilities";
import { $createRangeSelection, $getRoot, createEditor } from "lexical";
import {
  BOOK_MARKER,
  isAttributeMarker,
  isCharAttributeList,
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
import { graphemeSegments } from "unicode-segmenter/grapheme";

export interface PlainProseOptions {
  /** The project's marker lookup, which decides what in the text is a marker. */
  getMarker: MarkerLookup;
  /** `ViewOptions.allowInvisibleCharacters` of the project the text is pasted into. */
  allowInvisibleCharacters?: boolean;
  /** Told when the text cannot be converted. */
  logger?: LoggerBasic;
}

/**
 * Prose for a plain-text paste into an editor that shows Standard view's whitespace: `text`
 * unchanged when it holds no marker or cannot be converted without losing text, and `""` when its
 * prose shows nothing. Needs no live editor and is safe outside any update. It serializes through
 * the USJ adaptor, whose collaborators are module-wide: it sets the adaptor's view options, and the
 * adaptor calls the comment callback (`addMissingComments`) and logger of whichever editor
 * initialized it last, handing the callback the comment ids that editor's load left there. The
 * conversion adds no comment id of its own.
 *
 * The text is read as Standard view's paste reads it: a control character is a space, a `\c` or
 * `\id` token and its number or code are dropped (so a chapter in the middle of a line leaves one
 * line), and a pasted no-break space is a stored one unless it separates a marker from its text.
 * The prose is then what a hidden-marker view's copy of the same USFM writes as `text/plain`: the
 * text is tokenized as USFM, laid out as the Formatted view lays it out in a throwaway editor, and
 * copied from there with that view's copy (`$selectionPlainText`). So a note's words go inline,
 * markers, verse numbers and milestones leave no text, and each paragraph is a line. Book and
 * chapter lines are left out: their text is an identifier and a number, not prose. A line break
 * the text opens with, as a copy starting at a paragraph's end does, opens the prose too.
 *
 * What a copy that starts partway into a marker leaves behind is dropped where its shape is clear:
 * the `|attributes` before the closer of a character span that takes them (`gracious|grace\w*`
 * copies as `gracious`), and an attribute tail with no whitespace in it right before a milestone's
 * `\*` at the very start (`ilate"\*`). A milestone's tail with a space in it (`n Pilate"\*`) stays
 * as its bytes, and so does any other `\*`, the way a hidden-marker view shows a stray one.
 *
 * Two departures from a hidden-marker copy are deliberate, because each keeps text apart that the
 * copy runs together. An optbreak stays the `//` it is spelled with, where the copy drops every
 * optbreak (so `https://ebible.org` in a note copies as `https:ebible.org`). And a note's paragraph
 * run (`\fp`) is set off from the run before it by a space, where the copy writes the two runs
 * with nothing between them (`First.Second.`).
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
 * Ordinary text that mentions a marker is returned unchanged too: text where a verse's number does
 * not start with a digit (`use \v to mark verses`), or where a note's caller is not one character
 * (`\f See note\f*`). Text that mentions only marker names, with nothing such a check can catch
 * (`See C:\it\add file`), still converts and loses those names. So does text whose prose would
 * hold a backslash Standard view's paste reads as a marker (`a \\nd Lord\nd*` would paste `\Lord`).
 *
 * Text whose prose displays as nothing (a copy of only `\v 5 ` or `\c 2`, of two empty paragraphs,
 * or of a verse holding only a direction mark) gives `""`, which Standard view and its footnote
 * editors paste as nothing at all: the selection and the text it covers stay. Whitespace, a stored
 * no-break space (which displays as a space) and default-ignorable characters such as U+200E,
 * U+200F and U+2060 display as nothing, as `$selectionPlainText` weighs them. Prose with words in
 * it is never trimmed.
 *
 * The conversion is a function of the text alone: it knows nothing of where the text will land. So
 * multi-line prose pasted with the caret on the `\id` line joins the book line's text, as any
 * multi-line plain text pasted there does. It cannot tell USFM copied from this editor from USFM
 * copied from another program either. A bare `\` that opens the text stays in the prose as its
 * bytes (`\ x \nd y\nd*` gives `\ x y`), and a nested closer with no name (`\+*`) is dropped like
 * any other stray closer.
 */
export function usfmToPlainProse(text: string, options: PlainProseOptions): string {
  if (!text.includes("\\")) return text;
  const { getMarker, allowInvisibleCharacters, logger } = options;
  const formattedOptions = getViewOptions(FORMATTED_VIEW_MODE);
  if (!formattedOptions) return text;
  const hiddenOptions: ViewOptions = { ...formattedOptions, allowInvisibleCharacters };
  try {
    const pasted = controlCharactersToSpaces(text.replace(/\r\n?/g, "\n"));
    const isUsfmMarker = (marker: string) =>
      getMarker(marker) !== undefined || isAttributeMarker(marker) || marker.startsWith("z");
    if (!namesUsfmMarker(pasted, isUsfmMarker)) return text;
    const nbspSpelling = getNbspSpelling(hiddenOptions);
    // The tokenizer reads a line break that opens the text as whitespace before the first marker,
    // so the prose gets it back afterwards. It stays in the text tokenized, where it still makes
    // the marker after it one that opens a line.
    const leadingLineBreaks = LEADING_LINE_BREAKS.exec(pasted)?.[0] ?? "";
    const usfm = normalizePastedNbsp(
      stripPastedChapterAndBookId(pasted.replace(MILESTONE_ATTRIBUTE_TAIL, "")),
      nbspSpelling,
    );
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
    if (holdsUnknownMarker(content, isKnown) || mentionsMarker(content)) return text;
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
    const { shown, prose } = state.read(
      () => {
        const root = $getRoot();
        const selection = $createRangeSelection();
        selection.anchor.set(root.getKey(), 0, "element");
        selection.focus.set(root.getKey(), root.getChildrenSize(), "element");
        return {
          // Before a stored no-break space is respelled `~`, which would make it look like a word.
          shown: $selectionPlainText(selection),
          prose: $selectionPlainText(
            selection,
            undefined,
            hiddenViewCopySpelling(allowInvisibleCharacters),
          ),
        };
      },
      { editor },
    );
    if (DISPLAYS_AS_NOTHING.test(shown)) return "";
    if (READS_AS_MARKER.test(prose)) return text;
    return prose.startsWith(leadingLineBreaks) ? prose : leadingLineBreaks + prose;
  } catch (error) {
    logger?.warn("Pasting the text as it is: it could not be converted to plain prose.", error);
    return text;
  }
}

/** The line breaks a text opens with. */
const LEADING_LINE_BREAKS = /^\n+/;

/**
 * The end of a milestone's attribute run, where a copy starting inside it opens: bytes with no
 * whitespace in them, then the milestone's `\*`. No prose ends at a `\*` without a space or a
 * marker name before it, so this is an attribute value's tail (`ilate"`) or a marker name's.
 */
const MILESTONE_ATTRIBUTE_TAIL = /^[^\s\\]+\\\*/;

/** Prose made only of what displays as nothing: whitespace (a no-break space included) and
 * default-ignorable characters such as direction marks. */
const DISPLAYS_AS_NOTHING = /^[\s\p{Default_Ignorable_Code_Point}]*$/u;

/** A backslash the tokenizer would read a marker name after, as Standard view's paste does. */
const READS_AS_MARKER = /\\[^\\|\s\u200B*]/;

/** How every verse number starts: `5`, `3-4`, `2a`. */
const VERSE_NUMBER_START = /^\p{Nd}/u;

/** A footnote's paragraph run, the one note run a hidden-marker copy runs into the one before. */
const NOTE_PARAGRAPH_MARKER = "fp";

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
    const marker = closerName(name);
    if (marker && isUsfmMarker(marker)) return true;
  }
  return false;
}

/** A marker token's name without a nested `+` or a closer's `*`. */
function closerName(name: string): string {
  return name.replace(/^\+/, "").replace(/\*$/, "");
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
      item.type === "unmatched" && item.marker !== undefined
        ? closerName(item.marker)
        : item.marker;
    const isNameless = marker === "" && (item.type === "para" || item.type === "unmatched");
    const isNamed =
      (STYLED_TYPES.has(item.type) || item.type === "unmatched") &&
      marker !== undefined &&
      !isNameless;
    if (isNamed && !isKnown(marker, item.type)) return true;
    return item.content ? holdsUnknownMarker(item.content, isKnown) : false;
  });
}

/**
 * Whether `content` reads as ordinary text that mentions a marker rather than as USFM: a verse
 * whose number does not start with a digit (`use \v to mark verses` reads `to` as one), or a note
 * whose caller is not one character (`\f See note\f*` reads `See` as one).
 */
function mentionsMarker(content: MarkerContent[]): boolean {
  return content.some((item) => {
    if (typeof item === "string") return false;
    if (item.type === "verse" && !VERSE_NUMBER_START.test(String(item.number ?? ""))) return true;
    if (item.type === "note" && !isOneCharacter(String(item.caller ?? ""))) return true;
    return item.content ? mentionsMarker(item.content) : false;
  });
}

/** Whether `text` is one user-perceived character: one grapheme cluster. */
function isOneCharacter(text: string): boolean {
  return [...graphemeSegments(text)].length === 1;
}

/** USJ object types that stand for no prose: a milestone, a chapter line. */
const PROSELESS_TYPES = new Set(["ms", "chapter"]);

/**
 * `content` without what stands for no prose, and with each optbreak as the `//` it was. The
 * tokenizer reads a book line (`\id GEN …`) as an ordinary paragraph, so it is left out by its
 * marker.
 *
 * A stray closer is dropped: it may be the end of a span or note the copy started inside, which
 * writes no prose. A character span's closer takes with it the `|attributes` run before it, when
 * the tokenizer would read that run as the span's attributes. A bare `\*` stays as its bytes, the
 * way a hidden-marker view shows a stray one: the one a copy starting inside a milestone's
 * attributes leaves is gone already where its shape is clear (`MILESTONE_ATTRIBUTE_TAIL`).
 *
 * A note's paragraph run (`\fp`) opens with a space when the text before it does not end in
 * whitespace, so the paragraphs do not run together.
 */
function proseContent(content: MarkerContent[]): MarkerContent[] {
  const prose: MarkerContent[] = [];
  for (const item of content) {
    if (typeof item === "string") prose.push(item);
    else if (item.type === "unmatched" && item.marker === "*") prose.push("\\*");
    else if (item.type === "unmatched") dropAttributeRun(prose, closerName(item.marker ?? ""));
    else if (item.type === "optbreak") prose.push("//");
    else if (
      !PROSELESS_TYPES.has(item.type) &&
      !(item.type === "para" && item.marker === BOOK_MARKER)
    ) {
      const itemProse = item.content ? proseContent(item.content) : undefined;
      const textBefore = lastText(prose);
      if (
        item.type === "char" &&
        item.marker === NOTE_PARAGRAPH_MARKER &&
        textBefore !== undefined &&
        !/\s$/.test(textBefore)
      )
        prose.push({ ...item, content: [" ", ...(itemProse ?? [])] });
      else prose.push(itemProse ? { ...item, content: itemProse } : item);
    }
  }
  return prose;
}

/**
 * Drops the `|attributes` run at the end of `prose` when the tokenizer would read it as the
 * attributes of a `marker` character span: the closer that follows is that span's, and the copy
 * started inside it.
 */
function dropAttributeRun(prose: MarkerContent[], marker: string): void {
  let runStart = prose.length;
  while (runStart > 0 && typeof prose[runStart - 1] === "string") runStart -= 1;
  const run = prose.slice(runStart).join("");
  const pipeIndex = run.indexOf("|");
  if (pipeIndex < 0 || !isCharAttributeList(run.slice(pipeIndex + 1), marker)) return;
  prose.length = runStart;
  if (pipeIndex > 0) prose.push(run.slice(0, pipeIndex));
}

/** The last non-empty text in `content`, looking inside its objects. */
function lastText(content: MarkerContent[]): string | undefined {
  for (let index = content.length - 1; index >= 0; index -= 1) {
    const item = content[index];
    const text = typeof item === "string" ? item : item.content && lastText(item.content);
    if (text) return text;
  }
  return undefined;
}
