import {
  TEXT_SPACING_CLASS_NAME,
  FORMATTED_FONT_CLASS_NAME,
  MARKER_MODE_CLASS_NAME_PREFIX,
  NBSP_STAND_IN,
  VerseNode,
} from "shared";
import { ImmutableVerseNode } from "../nodes/usj/ImmutableVerseNode";
import {
  ViewMode,
  BLOCK_VERSE_VIEW_MODE,
  FORMATTED_VIEW_MODE,
  UNFORMATTED_VIEW_MODE,
  PARAGRAPH_STRUCTURE_VIEW_MODE,
  STANDARD_VIEW_MODE,
  viewModeToViewNames,
} from "./view-mode.model";
import { deepEqual } from "fast-equals";

/**
 * How USFM markers are displayed.
 *
 * @public
 */
export type MarkerMode =
  /** USFM markers are visible. */
  | "visible"
  /** USFM markers are editable. */
  | "editable"
  /** USFM markers are hidden. */
  | "hidden";

/**
 * How notes are displayed.
 *
 * @public
 */
export type NoteMode =
  /** All notes are always collapsed. Only the callers are displayed. */
  | "collapsed"
  /** A note is expanded inline when the cursor enters it via the caller and collapses on exit. */
  | "expandInline"
  /** All notes are always expanded. */
  | "expanded";

/**
 * How each verse is laid out in the document.
 *
 * @public
 */
export type VerseLayout =
  /** The verse marker is an inline milestone; verse text flows within its paragraph. */
  | "inline"
  /**
   * Each verse is a block-level element containing its own paragraphs, so it can be placed on a
   * layout row. Read-only: the editor forces read-only when this is selected, and neither USJ
   * export nor USJ-addressed selection is available, because a paragraph spanning several verses
   * is split across their blocks and no longer matches the source USJ's content indexes.
   */
  | "block";

/**
 * Configuration options for controlling the display and behavior of Scripture text views.
 *
 * @example
 * ```typescript
 * const viewOptions: ViewOptions = {
 *   markerMode: "hidden",
 *   noteMode: "collapsed",
 *   hasSpacing: true,
 *   isFormattedFont: true
 * };
 * ```
 *
 * @public
 */
export interface ViewOptions {
  /** How USFM markers are displayed */
  markerMode: MarkerMode;
  /** How notes are displayed. */
  noteMode?: NoteMode;
  /** Does the text have spacing including indenting. */
  hasSpacing: boolean;
  /** Is the text in a formatted font. */
  isFormattedFont: boolean;
  /**
   * When false, an expanded note's SHELL — its opening marker glyph, its caller and its closing
   * glyph — is rendered atomic: the caret cannot enter it and typing cannot change it. Only
   * meaningful in `editable` marker mode with an expanded note, which is the one shape that renders
   * those bytes as ordinary editable text.
   *
   * Use it only for a document that holds just that note (the footnote popover's): the note is
   * treated as the only thing being edited. A caret beside the note, in front of it or past it, is pulled
   * into its content, an arrow key cannot carry the caret across the shell out of the note, a
   * range that touches the note is kept to its content, and no edit removes the note. Text around
   * such a note cannot be reached by the keyboard.
   *
   * For a host that governs the marker and the caller through its own UI (Paratext 10's footnote
   * editor has a dropdown for each, and Paratext 9 works the same way), leaving them typeable is a
   * trap: the edit looks accepted, does not persist, and — because the note-scoped rebuild refuses
   * a caller it cannot recognize — takes anything else typed into that slot down with it.
   *
   * Default (undefined or true) keeps the shell editable, which is what a view with no such UI
   * needs: the main editor's Markers view expands notes precisely so the whole note can be edited
   * as text.
   */
  isNoteShellEditable?: boolean;
  /**
   * When false, `CharNode.createDOM` skips setting the `title=__marker` attribute on rendered
   * char spans. Useful for consumers that don't want the USFM marker name surfaced as a browser
   * tooltip. Default (undefined or true) preserves the marker hint for consumers authoring USFM.
   */
  showCharMarkerTitles?: boolean;
  /**
   * Show a fixed-width gutter at the inline-start of the editor containing paragraph-level USFM markers,
   * styled verse numbers, and decorative chapter numbers. When enabled, paragraph markers are
   * rendered as immutable typed-text nodes (so they exist in the DOM to be repositioned into the
   * gutter) regardless of `markerMode`. Inline char/verse/note markers are NOT shown.
   */
  hasGutterParaMarkers?: boolean;
  /**
   * Show an outline box around the active text section (the verse range under the cursor).
   * Can be used independently of `hasGutterParaMarkers`, though poetry-paragraph alignment of
   * the box relies on indent variables set by the gutter feature.
   */
  hasActiveTextFocusBox?: boolean;
  /**
   * When `false`, paragraphs render WITHOUT their marker prefix — no editable glyph and separator
   * under `markerMode: "editable"`, and no immutable marker text under `markerMode: "visible"` or
   * `hasGutterParaMarkers`. Default (undefined or true) renders the prefix each of those modes
   * calls for.
   *
   * For surfaces whose paragraph is scaffolding rather than content: the footnote editor wraps the
   * note it is editing in a marker-less paragraph purely so the editor has an element to host it,
   * and that paragraph is never saved (the save path reads the note subtree alone). Defaulting the
   * marker-less para to `\p` and displaying that glyph put a `\p ` prefix in front of the
   * footnote's own text.
   *
   * This suppresses the prefix in the ADAPTOR, so the glyph bytes are never built. Hiding them in
   * CSS instead would leave editable-but-invisible bytes in the document that the caret could
   * traverse into, breaking the rule that displayed bytes are the document. Inline markers
   * (char/verse/note) are unaffected — only the paragraph's own prefix is suppressed.
   */
  showParaMarkerPrefixes?: boolean;
  /**
   * How each verse is laid out. Default (undefined) is `"inline"`, which is what every view other
   * than block verse uses.
   *
   * Switching this between `"inline"` and `"block"` recreates the editor, because the node types a
   * Lexical editor can hold are fixed when it is created. That discards the undo history and any
   * annotations the host has applied since the last USJ change, so hosts should choose a layout
   * when they mount the editor rather than toggling a live one.
   */
  verseLayout?: VerseLayout;
  /**
   * Whether the project stores invisible characters literally: Paratext's per-project
   * `AllowInvisibleChars` setting ("Allow whitespace and invisible characters" in Paratext 9's
   * project properties), which Platform.Bible exposes as the project setting
   * `platformScripture.allowInvisibleCharacters`. A host passes that setting of the project whose
   * text the editor holds, whatever view it shows. It describes the project's text rather than the
   * view, so it never changes the mode {@link getViewMode} reports.
   *
   * Off (`undefined` or `false`, Paratext's default): the project's USFM spells a no-break space
   * as `~`, so the USJ the editor is given holds U+00A0 and never `~`. Standard view shows each
   * U+00A0 as `~`, saves a `~` the user types or pastes as U+00A0, and saves a U+00A0 typed as a
   * character as a space — the author's no-break space is typed as `~`, as in Paratext 9.
   *
   * On: `~` is an ordinary character and the project stores U+00A0 as itself, so the USJ can hold
   * both and they mean different things. Standard view keeps `~` as `~` and shows each U+00A0 as a
   * blank the width of a space, as a no-break space looks, and saves each as itself. A U+00A0 typed
   * or pasted is kept as one, and a copy writes `~` and U+00A0 as themselves. The Markers view's
   * copy and the Unformatted view's marker settle spell them the same way. Space runs still collapse
   * on save. ParatextData still drops a U+00A0 right after a marker or next to a space when it
   * saves, in both products.
   *
   * Inside the editor Standard view holds each such U+00A0 as an internal stand-in (U+001A,
   * `NBSP_STAND_IN` in shared), since its engine reads an on-screen U+00A0 as display spacing; the
   * `NBSP_STAND_IN_FONT_FAMILY` font face draws it as the blank. The stand-in never leaves the
   * editor: `getUsj`, `onUsjChange` and its delta ops, the note-op getters, the clipboard and drag
   * data, annotation callbacks and note-caller previews all give U+00A0. Delta ops coming in
   * (`applyUpdate`, `replaceEmbedUpdate`) take a U+00A0 that is not a marker's separator as a stored
   * no-break space; going out, an NBSP the view shows for a space in a run is that space. Text read
   * from the editor's DOM still holds the stand-in; `toUsfmNbspSpelling` turns it back. No project
   * text can hold U+001A — Paratext's reader turns U+0001-U+0008 and U+000E-U+001F into spaces — and
   * Standard view does the same to every C0 control character other than tab, line feed and
   * carriage return that comes in (a load, a paste, a drop, typing, applied ops), in either setting,
   * so the stand-in is never mistaken for one.
   *
   * Views that hide markers (formatted, paragraph-structure, block verse) show the stored
   * characters as they are either way, so they behave the same with this on or off.
   *
   * Passing the wrong value for the project corrupts text saved from Standard view: off for a
   * project that has it on turns every `~` into U+00A0; on for a project that has it off saves a
   * typed `~` as `~`, which that project reads back as a no-break space.
   */
  allowInvisibleCharacters?: boolean;
}

/**
 * The character that spells a stored no-break space (U+00A0) in Standard view's display text and
 * in the USFM its marker settle re-tokenizes: `~`, unless
 * {@link ViewOptions.allowInvisibleCharacters} is on, when `~` is an ordinary character and
 * `NBSP_STAND_IN` (U+001A, the editor's internal stand-in) spells it instead.
 *
 * @param viewOptions - View options of the editor.
 * @returns `~` or `NBSP_STAND_IN`.
 *
 * @public
 */
export function getNbspSpelling(viewOptions: ViewOptions | undefined): string {
  return viewOptions?.allowInvisibleCharacters ? NBSP_STAND_IN : "~";
}

/**
 * Whether `viewOptions` renders paragraph marker prefixes at all — the single spelling of the
 * `showParaMarkerPrefixes !== false` default. The adaptor (which builds the glyph), the
 * marker-edit transforms (which police or heal it), and the prefix-deletion guard (which reacts
 * to its absence) must all answer this identically: a surface that never builds the prefix must
 * never treat its absence as user intent to change the paragraph.
 *
 * @public
 */
export function showParaMarkerPrefix(viewOptions: ViewOptions | undefined): boolean {
  return viewOptions?.showParaMarkerPrefixes !== false;
}

let defaultViewMode: ViewMode;
let defaultViewOptions: ViewOptions;

/**
 * Sets the default view mode and options.
 *
 * @param viewMode - View mode of the editor.
 *
 * @public
 */
export function setDefaultView(viewMode: ViewMode) {
  const _viewOptions = getViewOptions(viewMode);
  if (!_viewOptions) throw new Error(`Invalid view mode: ${viewMode}`);
  defaultViewMode = viewMode;
  defaultViewOptions = _viewOptions;
}

setDefaultView(FORMATTED_VIEW_MODE);

/**
 * Gets the default view mode.
 *
 * @returns the default view mode.
 *
 * @public
 */
export const getDefaultViewMode = () => defaultViewMode;

/**
 * Gets the default view options.
 *
 * @returns the default view options.
 *
 * @public
 */
export const getDefaultViewOptions = () => defaultViewOptions;

/**
 * Get view option properties based on the view mode.
 *
 * @param viewMode - View mode of the editor.
 * @returns the view options if the view exists, the default options if the viewMode is undefined,
 *   `undefined` otherwise.
 *
 * @public
 */
export function getViewOptions(viewMode?: string | undefined): ViewOptions | undefined {
  let viewOptions: ViewOptions | undefined;
  switch (viewMode ?? defaultViewMode) {
    case FORMATTED_VIEW_MODE:
      viewOptions = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: true,
        isFormattedFont: true,
      };
      break;
    case UNFORMATTED_VIEW_MODE:
      viewOptions = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: false,
        isFormattedFont: false,
      };
      break;
    case PARAGRAPH_STRUCTURE_VIEW_MODE:
      viewOptions = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: true,
        isFormattedFont: true,
        hasGutterParaMarkers: true,
        hasActiveTextFocusBox: true,
      };
      break;
    case STANDARD_VIEW_MODE:
      viewOptions = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: true,
        isFormattedFont: true,
      };
      break;
    case BLOCK_VERSE_VIEW_MODE:
      viewOptions = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: true,
        isFormattedFont: true,
        verseLayout: "block",
      };
      break;
    default:
      break;
  }
  return viewOptions;
}

/**
 * Convert view options to view mode if the view exists.
 *
 * Inverts {@link getViewOptions} by comparison, so a view option added later cannot be forgotten
 * here and leave two modes indistinguishable. Matching is exact once each unset optional field is
 * filled in with its default, so spelling a default out still matches, but options derived from a
 * mode and then genuinely tweaked describe a view that is no longer that mode and yield
 * `undefined`.
 *
 * @remarks
 * This is narrower than the field-by-field matching it replaced, which tested only `markerMode`,
 * `hasSpacing`, `isFormattedFont`, `hasGutterParaMarkers` and `hasActiveTextFocusBox`. Every other
 * field now counts, `noteMode` included - it has no default to fill in (call sites read `undefined`
 * inconsistently, some as collapsed and some as not), so it is part of what identifies a mode and
 * has to be given. Options built from a mode with `noteMode` changed - say
 * `{ ...getViewOptions(PARAGRAPH_STRUCTURE_VIEW_MODE), noteMode: "expanded" }` - used to return the
 * mode they started from and now return `undefined`.
 *
 * @param viewOptions - View options of the editor.
 * @returns the view mode if the view is defined, `undefined` otherwise.
 *
 * @public
 */
export function getViewMode(viewOptions: ViewOptions | undefined): ViewMode | undefined {
  if (!viewOptions) return undefined;

  const normalized = canonicalize(viewOptions);
  return (Object.keys(viewModeToViewNames) as ViewMode[]).find((viewMode) =>
    deepEqual(canonicalize(getViewOptions(viewMode)), normalized),
  );
}

/**
 * Each optional field's documented default, so options that spell a default out compare equal to
 * options that leave it out - they describe the same view, and the comparison counts keys.
 *
 * `noteMode` is absent deliberately: it has no default (call sites read `undefined` inconsistently,
 * some as collapsed and some as not), so it is part of what identifies a mode and has to be given.
 */
const optionalViewOptionDefaults = {
  showCharMarkerTitles: true,
  hasGutterParaMarkers: false,
  hasActiveTextFocusBox: false,
  verseLayout: "inline",
} as const satisfies Partial<ViewOptions>;

/** The options with every unset optional field filled in with its default. */
function canonicalize(viewOptions: ViewOptions | undefined) {
  if (!viewOptions) return viewOptions;

  // Strip the `undefined`-valued keys first - spreading them over the defaults would reinstate the
  // very "not set" state the defaults exist to resolve. `allowInvisibleCharacters` describes the
  // project's text, not the view, so it is no part of what identifies a mode.
  const setOptions = Object.fromEntries(
    Object.entries(viewOptions).filter(
      ([key, value]) => value !== undefined && key !== "allowInvisibleCharacters",
    ),
  );
  return { ...optionalViewOptionDefaults, ...setOptions };
}

/**
 * Whether the standard-view whitespace/display normalization rules apply to these view options.
 *
 * These rules — the display NBSP/`~` mapping at load time, the live display-whitespace transform
 * and clipboard normalization, and the inverse normalization on serialization — are all gated on
 * this ONE predicate, so a document always serializes under the same whitespace regime it was
 * loaded with; no combination of options can apply the display mapping without its inversion.
 *
 * The invariant is the STANDARD view fingerprint with the `noteMode` axis dropped: editable
 * markers in a spacing+formatted view with NEITHER `hasGutterParaMarkers` NOR
 * `hasActiveTextFocusBox`. It is `true` for both collapsed (the named `standard` mode) and
 * expanded notes. It is `false` for the Unformatted view (editable but neither spaced nor
 * formatted, where whitespace is shown literally) and for gutter/focus-box views: those render
 * paragraph markers as immutable typed text — a different whitespace regime with no
 * display-mapped text to invert (their named mode hides markers entirely, so the editable
 * engine's separators never combine with them). Deliberately NOT expressed via
 * {@link getViewMode}: expanded is not the named `standard` mode, and overloading `getViewMode`
 * would break its invertibility contract and the user-facing mode labels. `getViewMode` compares
 * whole option objects against {@link getViewOptions}, so this predicate stays independent of it:
 * it is the one place the whitespace fingerprint — the STANDARD options with the `noteMode` axis
 * dropped — is written down.
 *
 * @param viewOptions - View options of the editor.
 * @returns `true` when standard-view whitespace normalization applies.
 *
 * @public
 */
export function hasStandardViewWhitespace(viewOptions: ViewOptions | undefined): boolean {
  if (!viewOptions) return false;

  const { markerMode, hasSpacing, isFormattedFont, hasGutterParaMarkers, hasActiveTextFocusBox } =
    viewOptions;
  return (
    markerMode === "editable" &&
    hasSpacing &&
    isFormattedFont &&
    !hasGutterParaMarkers &&
    !hasActiveTextFocusBox
  );
}

/**
 * Get the verse node class for the given view options.
 *
 * @param viewOptions - View options of the editor.
 * @returns the verse node class if the view is defined, `undefined` otherwise.
 *
 * @public
 */
export function getVerseNodeClass(viewOptions: ViewOptions | undefined) {
  if (!viewOptions) return;

  // Block verse is read-only, so its marker is never the editable `VerseNode`. Today the marker
  // mode below would reach the same answer - block verse hides markers - but dispatching on the
  // layout first keeps that independent of how markers happen to be configured.
  if (isBlockVerseLayout(viewOptions)) return ImmutableVerseNode;

  return viewOptions.markerMode === "editable" ? VerseNode : ImmutableVerseNode;
}

/**
 * Whether the view options select the block verse layout.
 *
 * That layout is read-only: its paragraphs are split across verse blocks, so an edit has no
 * correct USJ to go back to. Anything that offers editing - or an affordance that depends on
 * editing, such as comment authoring - should treat it as read-only whatever `isReadonly` says.
 *
 * @param viewOptions - View options of the editor.
 * @returns `true` if verses are laid out as blocks.
 *
 * @public
 */
export function isBlockVerseLayout(viewOptions: ViewOptions | undefined): boolean {
  return viewOptions?.verseLayout === "block";
}

/**
 * Get the class name list for the given view options.
 *
 * @param viewOptions - View options of the editor.
 * @returns the element class name list based on view options.
 *
 * @public
 */
export function getViewClassList(viewOptions: ViewOptions | undefined) {
  const classList: string[] = [];
  const _viewOptions = viewOptions ?? defaultViewOptions;
  if (_viewOptions) {
    classList.push(`${MARKER_MODE_CLASS_NAME_PREFIX}${_viewOptions.markerMode}`);
    if (_viewOptions.hasSpacing) classList.push(TEXT_SPACING_CLASS_NAME);
    if (_viewOptions.isFormattedFont) classList.push(FORMATTED_FONT_CLASS_NAME);
  }
  return classList;
}
