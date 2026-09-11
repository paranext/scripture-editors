/**
 * @packageDocumentation
 *
 * Scripture editor used in Platform. See https://platform.bible
 *
 * This package provides a Scripture editor React component that works on USJ Scripture data.
 * Please note:
 * - This is an [uncontrolled React component](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components).
 * - Use the `<Editorial />` component for an editor without commenting features.
 * - Use the `<Marginal />` component for an editor with comments (comments appear in the margin).
 *
 * The editor component is for editing Scripture text with these features:
 * - USJ editor with USX support
 * - Read-only and edit mode
 * - History - undo & redo
 * - Cut, copy, paste, paste as plain text - context menu and keyboard shortcuts
 * - Format block type - change `<para>` markers. The current implementation is a proof-of-concept and doesn't have all the markers available yet.
 * - Insert markers - type '\\' (backslash - configurable to another key) for a marker menu. If text is selected first the marker will apply to the selection if possible, e.g. use '\\wj' to "red-letter" selected text.
 * - Add comments to selected text, reply in comment threads, delete comments and threads.
 *   - To enable comments use the `<Marginal />` editor component (comments appear in the margin).
 *   - To use the editor without comments use the `<Editorial />` component.
 * - Add and remove different types of annotations. Style the different annotations types with CSS, e.g. style a spelling annotation with a red squiggly underline.
 * - Get and set the cursor location or selection range.
 * - Specify `textDirection` as `"ltr"`, `"rtl"`, or `"auto"` (`"auto"` is unlikely to be useful for minority languages).
 * - BCV linkage - change the book/chapter/verse externally and the cursor moves; move the cursor and it updates the external book/chapter/verse
 * - Nodes supported `<book>`, `<chapter>`, `<verse>`, `<para>`, `<char>`, `<note>`, `<ms>`
 * - Nodes not yet supported `<table>`, `<row>`, `<cell>`, `<sidebar>`, `<periph>`, `<figure>`, `<optbreak>`, `<ref>`
 * - Node options - callback for when a `<note>` link is clicked
 * - Apply [Delta Operation](https://github.com/slab/delta) changes to the editor and see Delta Operations when changes are made in the editor. For use with realtime collaborative editing.
 */

import { ForwardRefExoticComponent } from "react";
import { MouseEvent as MouseEvent_2 } from "react";
import { Op } from "quill-delta";
import { RefAttributes } from "react";
import { RefObject } from "react";
import { SerializedVerseRef } from "@sillsdev/scripture";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import type { UsjDocumentLocation } from "@eten-tech-foundation/scripture-utilities";

/**
 * A function type that adds missing comments to a USJ document.
 *
 * @param usjCommentIds - An array of comment IDs from the incoming USJ document.
 *
 * @deprecated Use of this method is deprecated. Consider managing missing comments through
 *   application state or other mechanisms instead.
 * @public
 */
export declare type AddMissingComments = (usjCommentIds: string[]) => void;

/**
 * Represents the range of an annotation within a USJ document, defined by a start and end location.
 *
 * @remarks
 * The `AnnotationRange` is used to specify the span of text or content that an annotation covers.
 *
 * @param start - The starting location of the annotation range.
 * @param end - The ending location of the annotation range.
 *
 * @public
 */
export declare interface AnnotationRange {
  /** The starting location of the annotation range. */
  start: UsjDocumentLocation;
  /** The ending location of the annotation range. */
  end: UsjDocumentLocation;
}

/** Generated file using `nx generate markers-data` with 'tools/usfm-markers/src/generators/markers-data/data/usfm.sty' */
/** @public */
export declare enum CategoryType {
  FileIdentification = "FileIdentification",
  Headers = "Headers",
  Remarks = "Remarks",
  Introduction = "Introduction",
  DivisionMarks = "DivisionMarks",
  Paragraphs = "Paragraphs",
  Poetry = "Poetry",
  TitlesHeadings = "TitlesHeadings",
  Tables = "Tables",
  CenterTables = "CenterTables",
  RightTables = "RightTables",
  Lists = "Lists",
  Footnotes = "Footnotes",
  CrossReferences = "CrossReferences",
  SpecialText = "SpecialText",
  CharacterStyling = "CharacterStyling",
  Breaks = "Breaks",
  SpecialFeatures = "SpecialFeatures",
  PeripheralReferences = "PeripheralReferences",
  PeripheralMaterials = "PeripheralMaterials",
  Uncategorized = "Uncategorized",
}

/**
 * Represents a single comment in a thread.
 *
 * @public
 */
export declare interface CommentBase {
  /** The author of the comment. */
  author: string;
  /** The content of the comment. */
  content: string;
  /** Whether the comment has been deleted. */
  deleted: boolean;
  /** Unique identifier for the comment. */
  id: string;
  /** Timestamp when the comment was created. */
  timeStamp: number;
  /** The type of this object, always "comment". */
  type: "comment";
}

/**
 * Represents a list of comments and threads.
 *
 * @public
 */
export declare type Comments = (Thread | CommentBase)[];

/**
 * Options for {@link EditorRef.commitTypedMarker}.
 *
 * @public
 */
export declare interface CommitTypedMarkerOptions {
  /**
   * Whether to emit the terminating space after the materialized marker. Defaults to `true`, the
   * palette's Space commit, which is byte-identical to passive typing.
   *
   * `false` is the palette's `\` commit: it commits what was typed and immediately reopens the
   * palette for the backslash the user just pressed, so the separator is unnecessary — a
   * marker-name scan terminates at the next `\`, and the reopened session's own commit supplies
   * it. The one shape where the two differ is mid-text with marker-name characters immediately
   * following the caret, where the unseparated literal glues onto them until the next commit
   * lands.
   */
  trailingSpace?: boolean;
}

/**
 * A context menu option to add to the editor context menu.
 *
 * @public
 */
export declare interface ContextMenuOptionConfig {
  /** Display title of the menu item. */
  title: string;
  /** Callback invoked when the menu item is selected. */
  onSelect: () => void;
  /** Whether the menu item is disabled. */
  isDisabled?: boolean;
}

/**
 * Default project `StyleInfo` derived from the bundled `usfm.sty` stylesheet.
 *
 * @public
 */
export declare const defaultStyleInfo: StyleInfo;

/**
 * Represents a Delta Operation in a collaborative editing environment.
 *
 * @remarks
 * This type is used for collaborative editing operations in the USJ (Unified Scripture JSON)
 * format for Scripture editing functionality. It can also be used to make a change to the editor
 * without reloading the editor (which would happen if the change was made by modifying the USJ).
 *
 * @public
 */
export declare type DeltaOp = Op;

/**
 * A Delta operation that inserts a Note embed.
 * @public
 */
export declare interface DeltaOpInsertNoteEmbed extends DeltaOp {
  /** note insert */
  insert: {
    note: OTNoteEmbed | null;
  };
}

/**
 * Represents the source of Delta Operations in a collaborative editing environment.
 *
 * @remarks
 * This type is used to distinguish between operations that originate from the local client
 * versus those that come from remote collaborators in a real-time editing session.
 *
 * @public
 */
export declare type DeltaSource = "local" | "remote";

/**
 * Maps text direction to their human-readable display names.
 * Used for UI components that need to show text direction options to users.
 *
 * @public
 */
export declare const directionToNames: {
  [textDirection in TextDirection]: string;
};

/**
 * DOM mouse event type.
 * @public
 */
export declare type DomMouseEvent = globalThis.MouseEvent;

/**
 * Scripture Editor for USJ. Created for use in [Platform](https://platform.bible).
 * @see https://github.com/usfm-bible/tcdocs/blob/usj/grammar/usj.js
 *
 * @param ref - Forward reference for the editor.
 * @param defaultUsj - Initial Scripture data in USJ format.
 * @param scrRef - Scripture reference that links the general cursor location of the
 *   Scripture.
 * @param onScrRefChange - Callback function when the Scripture reference changes in the
 *   editor as the cursor moves.
 * @param onSelectionChange - Callback function when the cursor selection changes.
 * @param onUsjChange - Callback function when USJ Scripture data has changed.
 * @param options - Options to configure the editor.
 * @param logger - Logger instance.
 * @returns the editor element.
 *
 * @public
 */
export declare const Editorial: ForwardRefExoticComponent<
  EditorProps<LoggerBasic> & RefAttributes<EditorRef | null>
>;

/**
 * Options to configure the editor.
 *
 * @public
 */
export declare interface EditorOptions {
  /** Is the editor readonly or editable. */
  isReadonly?: boolean;
  /**
   * Structure-protection mode for paragraph/verse markers via keyboard, paste, and drop.
   * - "off": fully native editing, no protection or delete confirmation.
   * - "guarded": two-step intentional delete (first press arms the marker, second press deletes
   *   it); no hard blocking of paste/drop/typing.
   * - "protected": structural keystrokes and paste/drop of structural markers are blocked
   *   outright.
   * Defaults to "off".
   */
  structureProtectionMode?: StructureProtectionMode;
  /** Does the editor have external UI controls so disable the built-in toolbar and marker menu. */
  hasExternalUI?: boolean;
  /** Is the editor enabled for spell checking. */
  hasSpellCheck?: boolean;
  /** Text direction: "ltr" | "rtl" | "auto". */
  textDirection?: TextDirection;
  /** Key to trigger the marker menu. Defaults to '\'. */
  markerMenuTrigger?: string;
  /** Options for some editor nodes. */
  nodes?: UsjNodeOptions;
  /** Additional items to append to the editor context menu. */
  contextMenu?: ContextMenuOptionConfig[];
  /**
   * View options of the editor. Defaults to the formatted view mode. Named modes:
   * "formatted", "unformatted", "paragraph-structure", "standard".
   */
  view?: ViewOptions;
  /**
   * Project stylesheet data (merged usfm.sty + custom.sty, serialized by the
   * host). Drives marker classification, Tier-1 kind routing, and marker
   * validation (flagging unknown or invalid markers) in editable marker modes.
   * Falls back to the bundled default stylesheet data when absent.
   */
  styleInfo?: StyleInfo;
  /**
   * EXPERIMENTAL: Delay in milliseconds before pending marker edits settle in place while the
   * user is idle (Paratext 9's debounced-reformat cadence), in editable marker modes. Defaults
   * to 1000 when undefined. `0` settles on the first tick after each edit; `-1` disables the
   * idle clock entirely — pending edits then settle only on caret departure, Enter, blur, or
   * `getUsj()`.
   */
  markerSettleDelayMs?: number;
  /** EXPERIMENTAL: Is the editor being debugged using the TreeView. */
  debug?: boolean;
}

/**
 * Props for the Editor component that provides Scripture editing functionality.
 *
 * @public
 */
export declare interface EditorProps<TLogger extends LoggerBasic> {
  /** Initial Scripture data in USJ format. */
  defaultUsj?: Usj;
  /** Scripture reference that controls the general cursor location of the Scripture. */
  scrRef?: SerializedVerseRef;
  /** Callback function when the Scripture reference has changed. */
  onScrRefChange?: (scrRef: SerializedVerseRef) => void;
  /** Callback function when the cursor selection changes. */
  onSelectionChange?: (selection: SelectionRange | undefined) => void;
  /** Callback function when USJ Scripture data has changed. */
  onUsjChange?: (usj: Usj, ops?: DeltaOp[], source?: DeltaSource, insertedNodeKey?: string) => void;
  /** Callback function when state changes. */
  onStateChange?: ({ canUndo, canRedo, blockMarker, contextMarker }: StateChangeSnapshot) => void;
  /** Options to configure the editor. */
  options?: EditorOptions;
  /** Logger instance. */
  logger?: TLogger;
}

/**
 * Forward reference for the editor.
 *
 * @public
 */
export declare interface EditorRef {
  /** Focus the editor. */
  focus(): void;
  /**
   * Whether this editor's content-editable root currently holds DOM focus (i.e. the user is
   * actively editing in it). Resolves the actual root element of THIS editor instance, so hosts
   * do not have to guess it from a global `document.querySelector('.editor-input')` — a query
   * coupled to the CSS class name and to the main editor being the first `.editor-input` in
   * document order (a footnote-editor popover renders its own). Returns `false` when the editor
   * is unmounted or its root is not attached.
   */
  isFocused(): boolean;
  /** Undo the last action. */
  undo(): void;
  /** Redo the last undone action. */
  redo(): void;
  /** Cut the selected text. */
  cut(): void;
  /** Copy the selected text. */
  copy(): void;
  /** Paste text at the current cursor position. */
  paste(): void;
  /** Paste text as plain text at the current cursor position. */
  pastePlainText(): void;
  /**
   * Get USJ Scripture data — always SETTLED, whatever the screen currently shows mid-edit. In
   * editable marker modes a marker rename, a typed marker literal, or an edited display run stays
   * pending in the document until the caret departs; this returns the document those bytes MEAN
   * (the same re-tokenization a departure settle performs), computed without touching the editor,
   * so the user's edit stays pending on screen and their caret and undo history are untouched.
   * Settling is uniform: a half-typed `|stuf` settles to literal content, because that is what
   * those bytes mean to anything that parses them. While anything is pending, this settled
   * structure can differ from the LIVE tree {@link EditorRef.getSelection}'s `jsonPath` addresses —
   * do not resolve a live-selection `jsonPath` against a `getUsj()` snapshot without accounting for
   * that.
   */
  getUsj(): Usj | undefined;
  /**
   * Settle pending mid-edit marker text (Standard view's marker-editing engine) IN THE DOCUMENT,
   * so the screen shows the finished structure. NOT required before reading the USJ to save —
   * {@link EditorRef.getUsj} already returns settled output — so a host that only needs canonical
   * USJ should not call this at all: it mutates the document, which pushes a history entry and can
   * re-settle content the user just undid.
   *
   * Two carve-outs: while the app-placed-caret suppression window is armed (the caret was placed
   * by a programmatic scrRef move or an undo/redo restore, with no user gesture since), NOTHING
   * settles — the whole pending set stays pending, so a save-driven commit cannot re-settle
   * content the user just undid; pending literals serialize as literal bytes, which ParatextData
   * parses. Outside the window, everything settles except the node under a live caret (only while
   * the editor holds DOM focus) — a mid-typing pause never settles under the user.
   *
   * Do NOT call while a marker-menu/palette session is open: the palette's apply must be the
   * one to consume the typed literal. No-op outside editable marker modes.
   */
  commitPendingMarkerEdits(): void;
  /**
   * Declares in-progress input that an in-editor command surface (e.g. the marker palette) will
   * consume or discard — analogous to an IME composition string. While declared,
   * {@link EditorRef.getUsj} excludes these bytes from its settled output: the containing paragraph
   * settles as if they were absent. Editor state, on-screen content, `onUsjChange`, and OT deltas
   * are untouched. One declaration at a time; calling again replaces it; `undefined` clears it.
   *
   * The declaration is ADVISORY. It is anchored to the text node the caret sits in when declared,
   * and re-verified against the live caret at every `getUsj()`: it is ignored whenever it does not
   * hold — the caret moved off the anchoring node, the bytes immediately before the caret are not
   * exactly `run`, the node is gone, or the caller forgot to clear. The anchor is what stops an
   * uncleared declaration from re-verifying against unrelated bytes elsewhere that merely end with
   * the same run. A stale declaration therefore costs at most one save carrying a visible phantom
   * marker; it can never silently drop content the user typed. Callers should still clear it as
   * soon as the input is consumed or the surface closes. A `setUsj` document replacement clears
   * it implicitly.
   */
  setTransientInput(input: TransientInput | undefined): void;
  /** Set the USJ Scripture data. */
  setUsj(usj: Usj): void;
  /** EXPERIMENTAL: Apply Operational Transform delta update. */
  applyUpdate(ops: DeltaOp[], source?: DeltaSource): void;
  /**
   * EXPERIMENTAL: Replace an embed Operational Transform delta.
   *
   * @remarks Embed nodes are treated as atomic units. These include chapter nodes, verse nodes,
   *   milestone nodes, note nodes, and unmatched nodes.
   *
   * @param embedNodeKey - The editor key of the embed node to replace.
   * @param insertEmbedOps - The delta operations that insert the new embed node.
   */
  replaceEmbedUpdate(embedNodeKey: string, insertEmbedOps: DeltaOp[]): void;
  /**
   * Get the selection location or range.
   * @returns the selection location or range, or `undefined` if there is no selection. The
   *   json-path in the selection assumes no comment Milestone nodes are present in the USJ, and
   *   addresses the LIVE tree, not {@link EditorRef.getUsj}'s settled output — while anything is
   *   pending, resolving it against a `getUsj()` snapshot can land on shifted or stale content.
   */
  getSelection(): SelectionRange | undefined;
  /**
   * Set the selection location or range.
   * @param selection - A selection location or range. The json-path in the selection assumes no
   *   comment Milestone nodes are present in the USJ.
   */
  setSelection(selection: SelectionRange): void;
  /**
   * Set an ephemeral annotation with optional event callbacks.
   *
   * @param selection - An annotation range containing the start and end location. The json-path
   *   in an annotation location assumes no comment Milestone nodes are present in the USJ.
   * @param type - Type of the annotation.
   * @param id - ID of the annotation.
   * @param callbacks - Optional click / removal / hover handlers. Each is independently
   *   optional. Omit the argument entirely to register an annotation with no callbacks.
   */
  setAnnotation(
    selection: AnnotationRange,
    type: string,
    id: string,
    callbacks?: {
      onClick?: TypedMarkOnClick;
      onRemove?: TypedMarkOnRemove;
      onMouseEnter?: TypedMarkOnMouseEnter;
      onMouseLeave?: TypedMarkOnMouseLeave;
    },
  ): void;
  /**
   * Set an ephemeral annotation with positional click / remove handlers.
   *
   * @deprecated Pass a callbacks object instead. This positional form is preserved for backward
   *   compatibility and will be removed in a future release.
   *
   * @param selection - An annotation range containing the start and end location.
   * @param type - Type of the annotation.
   * @param id - ID of the annotation.
   * @param onClick - Optional onClick handler.
   * @param onRemove - Optional onRemove handler.
   */
  setAnnotation(
    selection: AnnotationRange,
    type: string,
    id: string,
    onClick?: TypedMarkOnClick,
    onRemove?: TypedMarkOnRemove,
  ): void;
  /**
   * Remove an ephemeral annotation.
   * @param type - Type of the annotation.
   * @param id - ID of the annotation.
   */
  removeAnnotation(type: string, id: string): void;
  /** Format the paragraph at the current cursor position with the given block marker. */
  formatPara(blockMarker: string): void;
  /** Get the editor element for the given node key, if any. */
  getElementByKey(nodeKey: string): HTMLElement | undefined;
  /**
   * Remove a character marker from the current editor selection, keeping its text content.
   *
   * Returns whether a marker was actually removed, so a caller can tell a real removal from a
   * refused or unmatched one. Works with both collapsed (removes the marker from the whole
   * enclosing marker) and range (splits the marker, leaving the uncovered text marked) selections.
   *
   * Returns `false` and does nothing, without throwing, when there is no matching character marker
   * enclosing the selection, when the selection is inside a note, when the removal could not be
   * confined to the selection (see below), or when there is no active selection at all. In every
   * one of those cases the document and the selection are left untouched — no undo entry is added.
   *
   * @remarks
   * Two narrowed edge cases, both preserving every character of the document's text content:
   *
   * - Nested markers: text left uncovered by the selection keeps its marker. Inner and outer
   *   markers of a nested pair can each be removed independently while the selection covers them
   *   fully. When a range selection covers only *part* of a nested character marker's text and the
   *   *outer* marker is the one being removed, the request is refused and the document is left
   *   unchanged: recursive splitting of a nested marker's text is not implemented, so the marker
   *   could only be removed from that nested marker's entire span, including text the caller never
   *   selected. Refusing keeps the guarantee that removal never alters unselected text.
   * - Marker display modes (paragraph structure and unformatted views): the marker's own visible
   *   representation is stripped from the span the marker is removed from, but when a range
   *   selection leaves unselected text between a marker's boundary and the selection, the marked
   *   sibling that keeps that unselected text is left with an unpaired marker half — a literal
   *   opening or closing marker (e.g. `\nd` or `\nd*`) stays visible in the editor. This is a
   *   presentation artifact only: it is excluded from USJ export and self-corrects the next time
   *   the document is loaded from USJ.
   *
   * @param marker - A USFM character marker string, e.g. `"nd"`, `"wj"`. Omit to remove the
   *   innermost character marker enclosing the selection. Footnote and cross-reference character
   *   markers (e.g. `"ft"`, `"xt"`) are not supported: they only occur inside notes, which removal
   *   skips, so they throw rather than silently doing nothing.
   * @returns `true` if a character marker was removed, `false` if the request was a no-op.
   * @throws Will throw an error if the editor is in readonly mode.
   * @throws Will throw an error if `marker` is given and is not a supported character marker.
   */
  removeCharacterMarker(marker?: string): boolean;
  /**
   * Replace the character marker on the current editor selection, keeping its text content.
   *
   * Returns whether a marker was actually changed, so a caller can tell a real replacement from a
   * refused or unmatched one. Works with both collapsed (changes the whole enclosing marker) and
   * range (splits the marker, leaving the uncovered text with its original marker) selections.
   *
   * Returns `false` and does nothing, without throwing, when there is no matching character marker
   * enclosing the selection, when that marker is already `toMarker`, when the selection is inside a
   * note, when the change could not be confined to the selection (see below), or when there is no
   * active selection at all. In every one of those cases the document and the selection are left
   * untouched — no undo entry is added.
   *
   * @remarks
   * Nested markers: text left uncovered by the selection keeps its original marker, and the inner
   * and outer markers of a nested pair can each be changed independently while the selection covers
   * them fully. When a range selection covers only *part* of a nested character marker's text and
   * the *outer* marker is the one being changed, the request is refused and the document is left
   * unchanged: recursive splitting of a nested marker's text is not implemented, so the marker
   * could only be changed across that nested marker's entire span, including text the caller never
   * selected. Refusing keeps the guarantee that replacement never alters unselected text.
   *
   * A replaced marker that ends up matching an adjacent sibling's is merged into it automatically.
   * That merge is clean in the default marker mode. In the marker-visible modes (`"editable"` and
   * `"visible"`), the merge can leave each side's synthesized marker text sitting side by side in
   * the interior of the merged node (e.g. `\bd Lord\bd*\bd God\bd*` on screen instead of
   * `\bd Lord God\bd*`). That stray interior marker text is excluded from USJ export and
   * self-corrects the next time the document is loaded from USJ.
   *
   * Also in the marker-visible modes (`"editable"` and `"visible"`): a range selection strictly
   * interior to a marker's text — touching neither its opening nor its closing boundary — leaves the
   * changed run with no visible marker at all, while the unselected text on either side keeps the
   * original marker (e.g. `\nd Lord\nd*` with the middle word changed renders as
   * `\nd Lo\nd*rd\nd \nd*` rather than showing the new marker around the middle). The synthesized
   * marker text lives at the boundaries, so the interior span that the split produces has none to
   * retarget. Like the merge artifact above, this is presentation only: the change is correct in USJ
   * export and self-corrects the next time the document is loaded from USJ.
   *
   * @param toMarker - The USFM character marker to change to, e.g. `"nd"`, `"wj"`. Footnote and
   *   cross-reference character markers (e.g. `"ft"`, `"xt"`) are not supported: they only occur
   *   inside notes, which replacement skips, so they throw rather than silently doing nothing.
   * @param fromMarker - A USFM character marker to match. Omit to change the innermost character
   *   marker enclosing the selection. Subject to the same footnote and cross-reference restriction
   *   as `toMarker`.
   * @returns `true` if a character marker was changed, `false` if the request was a no-op.
   * @throws Will throw an error if the editor is in readonly mode.
   * @throws Will throw an error if `toMarker` is not a supported character marker.
   * @throws Will throw an error if `fromMarker` is given and is not a supported character marker.
   */
  replaceCharacterMarker(toMarker: string, fromMarker?: string): boolean;
  /**
   * Extend a character marker to cover the whole current editor selection, keeping its text
   * content.
   *
   * "Extend" means *make the whole selection carry `marker`*, however much of it already does —
   * the mutation behind a toolbar's partial → all step. Only the parts of the selection not already
   * carrying `marker` are wrapped, so no nested identical markers are produced: a selection of
   * `kolo ` followed by a bold `Mulu`, extended with `"bd"`, becomes one bold run over the whole
   * thing. A selection with no existing run of `marker` is wrapped in full.
   *
   * Returns whether the document was changed, so a caller can tell a real mutation from a no-op.
   *
   * Returns `false` and does nothing, without throwing, when the selection is collapsed, when it is
   * already fully covered by `marker` and no conflicting marker is present, when it resolves to no
   * editable text (for example inside a note), or when there is no active selection at all. In
   * every one of those cases the document and the selection are left untouched — no undo entry is
   * added.
   *
   * @remarks
   * Text inside a *different* character marker is wrapped where it sits, nesting the new marker
   * inside the existing one. Unlike {@link EditorRef.removeCharacterMarker} and
   * {@link EditorRef.replaceCharacterMarker}, extension never rewrites the markup of text outside
   * the selection, so it has no partial-coverage refusal.
   *
   * A leading space is moved out of a new marker, matching the behavior of
   * {@link EditorRef.insertMarker}; trailing whitespace is left where the selection put it.
   *
   * Newly covered text is merged into an adjacent run carrying the same marker automatically. In
   * the marker-visible modes (`"editable"` and `"visible"`) a newly created run has no visible
   * marker text of its own until the document is reloaded from USJ. That is a presentation artifact
   * only: it is excluded from USJ export and self-corrects on reload. In those same modes, a new
   * wrapper can also absorb a neighboring run's synthesized marker text: the gap filter that finds
   * uncovered text does not exclude a neighbor's opening/closing marker nodes, so extending `"bd"`
   * over `\nd Mulu\nd*` can produce a `bd` run containing `\nd `, `Mulu`, `\nd*` rather than just
   * `Mulu`. Also presentation-only, for the same reason: excluded from USJ export and self-corrects
   * on reload.
   *
   * @param marker - The USFM character marker to extend, e.g. `"bd"`, `"nd"`, `"wj"`. Footnote and
   *   cross-reference character markers (e.g. `"ft"`, `"xt"`) are not supported: they only occur
   *   inside notes, which extension skips, so they throw rather than silently doing nothing.
   * @param conflictingMarkers - Character markers that cannot coexist with `marker`; each is
   *   removed from the selection before it is extended. Omit when nothing conflicts. Supplied by
   *   the caller rather than defined here — which markers are mutually exclusive is a project
   *   decision, not an editor one. Subject to the same footnote and cross-reference restriction as
   *   `marker`. An entry equal to `marker` itself is ignored, since removing and re-wrapping the
   *   same run would only lose that run's identity (e.g. its cid in a collab document) for no
   *   effect.
   * @returns `true` if the document was changed, `false` if the request was a no-op.
   * @throws Will throw an error if the editor is in readonly mode.
   * @throws Will throw an error if `marker` is not a supported character marker.
   * @throws Will throw an error if any entry of `conflictingMarkers` is not a supported character
   *   marker.
   */
  extendCharacterMarker(marker: string, conflictingMarkers?: readonly string[]): boolean;
  /**
   * Insert a marker at the current editor selection, replicating the behavior of the
   * built-in marker menu. Works with both collapsed (insertion point) and range selections.
   *
   * @param marker - A USFM marker string, e.g. `"wj"`, `"p"`, `"f"`, `"v"`, `"c"`.
   * @returns the freshly-inserted note's true Lexical node key when `marker` is a note marker
   *   (e.g. `"f"`, `"x"`, `"fe"`); `undefined` for every other marker kind.
   * @throws Will throw an error if the editor is in readonly mode.
   * @throws Will throw an error if the `scrRef` prop was not provided to the editor.
   * @throws Will throw an error if the marker is not a supported para, char, note, chapter, or
   *   verse marker.
   */
  insertMarker(marker: string): string | undefined;
  /**
   * Snapshot of the marker-menu context at the current selection (standard-view marker menus).
   * Returns undefined when the editor is readonly or has no range selection.
   */
  getMarkerMenuContext():
    | (MarkerMenuContext & {
        anchorRect?: {
          x: number;
          y: number;
          width: number;
          height: number;
        };
      })
    | undefined;
  /**
   * Apply a marker-menu selection at the current editor selection — the apply step for the
   * BACKSLASH-triggered marker menu. Mirrors PT9's `MarkerDropdownEditHandler` apply step:
   * paragraph kinds retag the paragraph in place when the caret is at paragraph content start
   * and split otherwise; character/note kinds run the structural insert action used by
   * {@link EditorRef.insertMarker}; `closeTag` kind closes the matching open character span.
   * When `literalPrefixLanded` is set, the typed literal `\marker` trigger prefix is deleted
   * before any of the above.
   *
   * Which method for which menu: route a backslash-menu selection here; route an
   * Enter-menu selection through {@link EditorRef.splitParagraphWithMarker} instead — the Enter
   * menu is paragraph-split-only (PT9 SmartEnter always starts a new paragraph, never retags),
   * has no typed literal prefix to clean up, and never inserts notes/chars. A paragraph item
   * passed here with `trigger: "enter"` does route to the split for that reason, but the
   * narrower method is the honest contract for the Enter path.
   *
   * @param item - The selected marker-menu item (from {@link getMarkerMenuItems} /
   *   {@link getEnterMenuItems}).
   * @param opts - `trigger` is which UI trigger produced the menu (`"backslash"` or `"enter"`);
   *   paragraph items with an `"enter"` trigger always split, never retag.
   *   `literalPrefixLanded` is whether a literal `\marker` trigger prefix was typed before the
   *   caret and must be deleted before applying the action; ignored for `closeTag` items.
   * @throws Will throw an error if the editor is in readonly mode.
   * @throws Will throw an error if the `scrRef` prop was not provided to the editor.
   * @throws Will throw an error if `item.kind` is not `"closeTag"` and `item.marker` is not a
   *   supported para, char, note, chapter, or verse marker.
   *
   * @returns the created note's TRUE Lexical node key when the applied item inserted a note
   *   (hosts use it to track the note-editing session — the same contract as
   *   {@link EditorRef.insertMarker}); `undefined` for every other item kind.
   * @see {@link EditorRef.splitParagraphWithMarker} for the Enter-menu apply step.
   */
  applyMarkerMenuSelection(
    item: MarkerMenuItem,
    opts: {
      trigger: "backslash" | "enter";
      literalPrefixLanded: boolean;
    },
  ): string | undefined;
  /**
   * Splits the paragraph at the current caret, giving the new paragraph `marker` with its
   * visible prefix injected in the same update — the apply step for the ENTER-triggered
   * paragraph-marker menu (PT9 SmartEnter semantics: Enter always starts a new paragraph, even
   * at paragraph content start where the backslash menu would retag instead).
   *
   * This deliberately does NOT go through {@link EditorRef.applyMarkerMenuSelection}: the split
   * calls `selection.insertParagraph()` directly (bypassing `INSERT_PARAGRAPH_COMMAND`, so the
   * marker engine's split bookkeeping stays untouched) and sets the marker + visible prefix
   * before the update commits, so the engine's deletion transform cannot misread the fresh
   * paragraph as marker-less and merge it away. The Enter menu also has no literal `\marker`
   * prefix to clean up and offers only paragraph items, so this narrower method is its whole
   * contract.
   *
   * @param marker - A USFM paragraph marker string, e.g. `"q1"`, `"p"`.
   * @throws Will throw an error if the editor is in readonly mode.
   * @see {@link EditorRef.applyMarkerMenuSelection} for the backslash-menu apply step.
   */
  splitParagraphWithMarker(marker: string): void;
  /**
   * Commits the marker the user literally TYPED into a host-rendered marker palette, with the
   * palette's Space semantics: materializes the same literal bytes passive typing would have put
   * in the document (`\` + `typedMarker` + space) at the collapsed caret in ONE update, and lets
   * the marker-edit engine resolve them. The Space end states therefore hold by construction,
   * identical to the in-editor palette's own Space commit: an inline marker settles as an open
   * span (`closed="false"`, no auto-closer), an unknown marker settles as typed, and a note
   * marker tokenizes to the full note. An empty `typedMarker` materializes the bare trigger byte
   * plus space, which stays literal — byte-identical to passive typing.
   *
   * Byte-fidelity is the whole contract, including its sharp edge: mid-text, a materialized note
   * literal (`\f ` with content after the caret) absorbs the following word as the note's CALLER
   * — the same end state passive typing produced, NOT the empty note an Enter commit inserts. A
   * host that wants note markers to commit like Enter must route them through
   * {@link EditorRef.applyMarkerMenuSelection} (the item commit) instead of this method.
   *
   * Collapsed caret only. With a non-collapsed selection the palette's Space commit must WRAP
   * the selection in a specific offered item via {@link EditorRef.applyMarkerMenuSelection}
   * (`trigger: "backslash"`) — materializing bytes here would replace the selected text — so
   * this method refuses and returns `false`, leaving the document untouched. Also returns
   * `false` when there is no range selection to materialize at.
   *
   * @param typedMarker - The palette query exactly as typed, without the leading `\` or the
   *   terminating space (e.g. `"nd"`, `"zz"`, `"f"`).
   * @param options - See {@link CommitTypedMarkerOptions}.
   * @returns `true` when the literal was materialized (and resolved by the engine in the same
   *   update); `false` when the selection shape refused the commit.
   * @throws Will throw an error if the editor is in readonly mode.
   * @see {@link EditorRef.applyMarkerMenuSelection} for the highlighted-item (Enter) apply and
   *   the selection-wrap commit.
   */
  commitTypedMarker(typedMarker: string, options?: CommitTypedMarkerOptions): boolean;
  /**
   * Commits the CLOSING marker the user typed into a marker palette — the palette's `*` commit,
   * the closing-marker counterpart to {@link EditorRef.commitTypedMarker}'s Space. Inserts NO
   * opening glyph and NO terminating space: `\` + `typedMarker` + `*` is the whole of it, and the
   * palette closes.
   *
   * What the closer MEANS is decided by the DOCUMENT, not the palette: the bytes LAND and the
   * marker-edit engine re-tokenizes them (governing invariant I). Against a character span
   * genuinely open there they settle as that span's real closer; with nothing matching open they
   * settle as an unmatched closer, flagged as typed — the behavior of every typed closer, and what
   * keeps this from silently swallowing the keystroke. Either way the caret ends up AFTER the
   * closing marker.
   *
   * Over a NON-COLLAPSED selection the selected content is DELETED and the closer lands in its
   * place — Paratext 9's behavior for typing `\nd*` with text selected. This never WRAPS the
   * selection; wrapping is the palette's Space commit, via
   * {@link EditorRef.applyMarkerMenuSelection}. Returns `false` only when there is no range
   * selection at all to commit against.
   *
   * @param typedMarker - The palette query exactly as typed, without the leading `\` and without
   *   the trailing `*` the user pressed to commit (e.g. `"nd"`, `"+wj"`).
   * @returns `true` when a closing marker was committed; `false` when there was no range selection.
   * @throws Will throw an error if the editor is in readonly mode.
   * @see {@link EditorRef.commitTypedMarker} for the Space (opening-marker) commit.
   */
  commitTypedCloser(typedMarker: string): boolean;
  /**
   * Insert a note at the specified selection, e.g. footnote, cross-reference, endnote.
   * @param marker - The marker type for the note.
   * @param caller - Optional note caller to override the default for the given marker.
   * @param selection - Optional selection range where the note should be inserted. By default it
   *   will use the current selection in the editor.
   * @throws Will throw an error if the marker is not a valid note marker.
   *
   * @deprecated Use {@link EditorRef.insertMarker} instead. `insertMarker` supports note markers
   *   and additionally provides readonly and scrRef guards.
   */
  insertNote(marker: string, caller?: string, selection?: SelectionRange): void;
  /**
   * EXPERIMENTAL: Select the note by editor key or at the given index in the editor, if any.
   * @param noteKeyOrIndex - The note key or index, e.g. index=1 would select the second note in the
   *   editor.
   */
  selectNote(noteKeyOrIndex: string | number): void;
  /**
   * EXPERIMENTAL: Get the note operations by editor key or at the given index in the editor, if any.
   * @param noteKeyOrIndex - The note key or index, e.g. index=1 would get the second note in the
   *   editor.
   */
  getNoteOps(noteKeyOrIndex: string | number): DeltaOp[] | undefined;
  /** Ref to the end of the toolbar - INTERNAL USE ONLY to dynamically add controls in the toolbar. */
  toolbarEndRef: RefObject<HTMLElement | null> | null;
}

/**
 * Options for {@link filterAndRankItems}: the `query` to match, the `items` to search, and either
 * a `filterBy` key (default filter: case-insensitive containment on that key's value) or a custom
 * `filter` predicate. `sortBy` (defaulting to the filter key) names the value ranked against the
 * query.
 *
 * @public
 */
export declare interface FilterAndRankItems<T extends Item> {
  query: string;
  items: T[];
  filterBy?: keyof Pick<T, string>;
  filter?: (item: T, query: string) => boolean;
  sortBy?: keyof Pick<T, string>;
  sortingOptions?: SortingOptions;
}

/**
 * Filters `items` by `query` and ranks the matches exact-first — THE ranking behind the editor's
 * marker palettes (`NodeSelectionMenu` filters with `filterBy: "name"`, the marker code): exact
 * match, then prefix matches, then containment matches (nearest occurrence first), with ties
 * keeping the caller's item order (stable sort). Hosts rendering their own palette UI over the
 * editor's marker items should reuse this rather than reimplementing the ordering.
 *
 * @public
 */
export declare function filterAndRankItems<T extends Item>(
  options:
    | (Omit<FilterAndRankItems<T>, "filter"> & {
        filterBy: keyof Pick<T, string>;
      })
    | (Omit<FilterAndRankItems<T>, "filterBy"> & {
        filter: (item: T, query: string) => boolean;
      })
    | FilterAndRankItems<T>,
): T[];

/**
 * Generate CSS for a project's USJ Scripture editor from its stylesheet
 * (usfm.sty + custom.sty), mirroring PT9 CSSCreator.CreateUsfmCss. Emits a
 * base rule for the project default font/size followed by one
 * `.usfm_<marker>` rule per marker with any presentation fields the marker
 * declares. Rules with no declarations (e.g. an unstyled marker) are omitted.
 * A sheet that sizes any of `\c`/`\ca`/`\cp` also gets a trailing pair of
 * chapter-nested `\ca`/`\cp` rules, keeping those runs sized against the BASE
 * text like PT9 does rather than compounding against the chapter — see
 * {@link chapterNestedRunRules}.
 *
 * @public
 */
export declare function generateUsjCss(styleInfo: StyleInfo, options?: UsjCssOptions): string;

/**
 * Note caller will be auto-generated.
 * @public
 */
export declare const GENERATOR_NOTE_CALLER = "+";

/**
 * Gets the default view mode.
 *
 * @returns the default view mode.
 *
 * @public
 */
export declare const getDefaultViewMode: () =>
  | "formatted"
  | "unformatted"
  | "paragraph-structure"
  | "standard";

/**
 * Gets the default view options.
 *
 * @returns the default view options.
 *
 * @public
 */
export declare const getDefaultViewOptions: () => ViewOptions;

/**
 * Builds the Enter-triggered marker menu (KeyPressEditHandler.cs:189-201):
 * paragraph-source items with the SmartEnter choice — `ip` if valid at the
 * replayed stack, else `p` — moved to index 0. If the chosen marker isn't
 * offered (absent from the sheet, filtered, or invalid here), the plain
 * paragraph ordering is returned unchanged.
 *
 * @public
 */
export declare function getEnterMenuItems(
  styleInfo: StyleInfo,
  context: MarkerMenuContext,
  extraValidMarkers?: readonly string[],
): MarkerMenuItem[];

/**
 * Builds the `\`-triggered marker menu (MarkerDropdownEditHandler.cs:96-139).
 * Character-empty to paragraph fallback (rule 4, PT9, `:118-127`):
 * if the character source (close tags + character/note items) yields
 * nothing, recompute as paragraph source.
 *
 * @public
 */
export declare function getMarkerMenuItems(
  styleInfo: StyleInfo,
  context: MarkerMenuContext,
  extraValidMarkers?: readonly string[],
): MarkerMenuItem[];

/**
 * Convert view options to view mode if the view exists.
 *
 * @param viewOptions - View options of the editor.
 * @returns the view mode if the view is defined, `undefined` otherwise.
 *
 * @public
 */
export declare function getViewMode(viewOptions: ViewOptions | undefined): ViewMode | undefined;

/**
 * Get view option properties based on the view mode.
 *
 * @param viewMode - View mode of the editor.
 * @returns the view options if the view exists, the default options if the viewMode is undefined,
 *   `undefined` otherwise.
 *
 * @public
 */
export declare function getViewOptions(viewMode?: string | undefined): ViewOptions | undefined;

/**
 * Hidden note caller will not be auto-generated, and will not be displayed in some views.
 * @public
 */
export declare const HIDDEN_NOTE_CALLER = "-";

/**
 * Type guard to check if the given insert embed operation is for the specified embed type.
 *
 * @param embedType - The type of embed to check for, e.g. "note".
 * @param op - The OT delta operation to check.
 * @returns `true` if the operation is for the specified embed type, `false` otherwise.
 *
 * @public
 */
export declare function isInsertEmbedOpOfType<T extends keyof OTEmbedTypes>(
  embedType: T,
  op: DeltaOp | undefined,
): op is DeltaOp & {
  insert: {
    [K in T]: OTEmbedTypes[K] | null;
  };
};

/**
 * Anything {@link filterAndRankItems} can filter — a string-keyed record; the configured
 * `filterBy`/`sortBy` keys should hold strings.
 *
 * @public
 */
export declare interface Item {
  [key: string]: unknown;
}

/**
 * Basic logging interface providing standard log level methods.
 *
 * @remarks
 * This interface defines the contract for basic logging functionality with four standard log
 * levels: error, warn, info, and debug. Implementations should handle the variable arguments
 * appropriately for their logging backend.
 *
 * @example
 * ```typescript
 * const logger: LoggerBasic = new MyLogger();
 * logger.info('Application started');
 * logger.warn('Configuration missing, using defaults');
 * logger.error('Failed to connect to database');
 * ```
 *
 * @public
 */
export declare interface LoggerBasic {
  /** Log an error message */
  error(...params: any[]): void;
  /** Log a warning message */
  warn(...params: any[]): void;
  /** Log an informational message */
  info(...params: any[]): void;
  /** Log a debug message */
  debug(...params: any[]): void;
}

/**
 * Scripture Editor for USJ with comments in the margin. Created for use in [Platform](https://platform.bible).
 * @see https://github.com/usfm-bible/tcdocs/blob/usj/grammar/usj.js
 *
 * @param ref - Forward reference for the editor.
 * @param defaultUsj - Initial Scripture data in USJ format.
 * @param scrRef - Scripture reference that links the general cursor location in the
 *   Scripture.
 * @param onScrRefChange - Callback function when the Scripture reference changes in the
 *   editor as the cursor moves.
 * @param onSelectionChange - Callback function when the cursor selection changes.
 * @param onCommentChange - Callback function when comments have changed.
 * @param onUsjChange - Callback function when USJ Scripture data has changed.
 * @param options - Options to configure the editor.
 * @param logger - Logger instance.
 * @returns the editor element.
 *
 * @deprecated Marginal will be removed in a future release. Prefer {@link Editorial}.
 * @public
 */
export declare const Marginal: ForwardRefExoticComponent<
  MarginalProps<LoggerBasic> & RefAttributes<MarginalRef>
>;

/**
 * Props for the Marginal component that extends EditorProps with additional functionality for
 * handling comments and USJ Scripture data changes.
 *
 * @deprecated {@link Marginal} is deprecated. It will be removed in a future release.
 * @public
 */
export declare interface MarginalProps<TLogger extends LoggerBasic> extends Omit<
  EditorProps<TLogger>,
  "onUsjChange"
> {
  /** Callback function when comments have changed. */
  onCommentChange?: (comments: Comments | undefined) => void;
  /** Callback function when USJ Scripture data has changed. */
  onUsjChange?: (
    usj: Usj,
    comments: Comments | undefined,
    ops?: DeltaOp[],
    source?: DeltaSource,
    insertedNodeKey?: string,
  ) => void;
  /** Container ref for the show comments button - overrides internal toolbarEndRef if provided. */
  showCommentsContainerRef?: RefObject<HTMLElement | null> | null;
}

/**
 * Forward reference for the editor.
 *
 * @deprecated {@link Marginal} is deprecated. It will be removed in a future release.
 *   Migrate to {@link Editorial}.
 * @public
 */
export declare interface MarginalRef extends EditorRef {
  /** Set the comments to accompany USJ Scripture. */
  setComments?(comments: Comments): void;
}

/** @public */
export declare interface Marker {
  category: CategoryType;
  type: MarkerType;
  description: string;
  hasEndMarker: boolean;
  children?: Partial<{
    [K in CategoryType]: string[];
  }>;
}

/**
 * The `getMarker` seam shape — matches the bundled `getMarker` signature so it can be swapped in
 * directly.
 *
 * @public
 */
export declare type MarkerLookup = (marker: string) => Marker | undefined;

/**
 * Inputs describing the caret/selection context a marker menu is being built
 * for. Callers (`EditorRef.getMarkerMenuContext`) are responsible
 * for populating this from the live selection; this module only reads it.
 *
 * @public
 */
export declare interface MarkerMenuContext {
  /** Chosen per PT9 HandleBackslash (MarkerDropdownEditHandler.cs:96-139). */
  source: "paragraph" | "character";
  /** Current paragraph's marker (undefined at e.g. book level). */
  paraMarker?: string;
  /** styleType-paragraph markers before the caret, forward order (validity stack replay). */
  previousParaMarkers: string[];
  /** Currently open char-span markers, innermost first (SelectionStyleTags.CharacterStyles). */
  openCharMarkers: string[];
  /** Set when the caret is inside a note's content (note marker, e.g. "f"). */
  noteMarker?: string;
  /** Non-collapsed selection (wrap case). */
  hasTextSelection: boolean;
  /** Caret is inside visible marker glyph text (extension lets Enter pass through). */
  inMarkerText: boolean;
}

/**
 * One offered menu entry.
 *
 * @public
 */
export declare interface MarkerMenuItem {
  /** e.g. "q1" | "ft*" | "+wj*" | "f". */
  marker: string;
  /** "closeTag" entries terminate an open character span rather than opening one. */
  kind: "paragraph" | "character" | "note" | "closeTag";
  /**
   * StyleInfo description, when available — the user-visible title the host renders, with the
   * stylesheet's `(basic)` metadata token removed (it lives on `isBasic` instead).
   */
  description?: string;
  /** PT9 ScrTag.IsBasic — ordering + host greying (ScrTag.cs:425). */
  isBasic: boolean;
}

/**
 * How USFM markers are displayed.
 *
 * @public
 */
export declare type MarkerMode =
  /** USFM markers are visible. */
  | "visible"
  /** USFM markers are editable. */
  | "editable"
  /** USFM markers are hidden. */
  | "hidden";

/**
 * A single marker's entry in a project stylesheet (usfm.sty/custom.sty), as
 * serialized by the host.
 *
 * @public
 */
export declare interface MarkerStyleInfo {
  marker: string;
  styleType: StyleType;
  endMarker?: string;
  /** Allowed parent markers; absent/empty = valid anywhere (PT9 semantics). */
  occursUnder?: string[];
  rank?: number;
  textType?: string;
  textProperties?: string[];
  notRepeatable?: boolean;
  description?: string;
  fontName?: string;
  fontSize?: number;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  smallCaps?: boolean;
  subscript?: boolean;
  superscript?: boolean;
  color?: string;
  justification?: "left" | "center" | "right" | "both";
  firstLineIndent?: number;
  leftMargin?: number;
  rightMargin?: number;
  spaceBefore?: number;
  spaceAfter?: number;
  lineSpacing?: number;
}

/** @public */
export declare enum MarkerType {
  Paragraph = "Paragraph",
  Character = "Character",
  Note = "Note",
  Milestone = "Milestone",
  Unknown = "Unknown",
}

/**
 * Option properties to use with each node.
 *
 * @public
 */
export declare interface NodeOptions {
  /** Configuration options for any node. */
  [prop: string]: unknown;
}

/**
 * A callback function type for handling click events.
 *
 * @param event - The synthetic event object from React containing event details.
 * @param noteNodeKey - The Lexical key of the associated NoteNode.
 * @param isCollapsed - A boolean indicating whether the note is collapsed or expanded.
 * @param getCaller - A function to retrieve the current caller string.
 * @param setCaller - A function to update the caller string. Valid callers are '+'
 *   (auto-generated caller), '-' (hidden caller), or a custom value.
 * @param getNoteOps - A function to retrieve the Operational Transform delta ops of the note.
 * @param getNoteIndex - A function to retrieve the clicked note's document-order index among all
 *   of the document's notes (the coordinate a USJ-built notes list addresses notes by, e.g. a
 *   footnotes pane), or `undefined` if the note is no longer attached. Computed inside the editor
 *   at call time — hosts should not re-derive it by content comparison, which cannot distinguish
 *   identical notes.
 *
 * @public
 */
export declare type NoteCallerOnClick = (
  event: MouseEvent_2<HTMLButtonElement>,
  noteNodeKey: string,
  isCollapsed: boolean | undefined,
  getCaller: () => string,
  setCaller: (caller: string) => void,
  getNoteOps: () => DeltaOpInsertNoteEmbed[] | undefined,
  getNoteIndex: () => number | undefined,
) => void;

/**
 * How notes are displayed.
 *
 * @public
 */
export declare type NoteMode =
  /** All notes are always collapsed. Only the callers are displayed. */
  | "collapsed"
  /** A note is expanded inline when the cursor enters it via the caller and collapses on exit. */
  | "expandInline"
  /** All notes are always expanded. */
  | "expanded";

/**
 * Callback for state changes
 * @public
 */
export declare type OnStateChange = (snapshot: StateChangeSnapshot) => void;

/**
 * Operational Transform Chapter Embed
 * @public
 */
export declare interface OTChapterEmbed extends OTParaAttribute {
  /** Chapter number */
  number: string;
  /** Start ID */
  sid?: string;
  /** Chapter number for an alternate versification scheme */
  altnumber?: string;
  /** Published chapter character */
  pubnumber?: string;
}

/**
 * All valid embed types for USJ Operational Transform docs.
 * @public
 */
export declare interface OTEmbedTypes {
  /** chapter embed */
  chapter: OTChapterEmbed;
  /** immutable chapter embed */
  "immutable-chapter": OTChapterEmbed;
  /** verse embed */
  verse: OTVerseEmbed;
  /** immutable verse embed */
  "immutable-verse": OTVerseEmbed;
  /** milestone embed */
  ms: OTMilestoneEmbed;
  /** note embed */
  note: OTNoteEmbed;
  /** unknown embed */
  unknown: OTUnknownEmbed;
  /** unmatched embed */
  unmatched: OTUnmatchedEmbed;
}

/**
 * Operational Transform Milestone Embed
 * @public
 */
export declare interface OTMilestoneEmbed extends OTParaAttribute {
  /**
   * A unique identifier which can be used to unambiguously identify the starting milestone, and to
   * clearly associate the starting milestone with the ending milestone (`eid`). The `sid` can be
   * composed of any mixture of numbers, letters, and underscores.
   */
  sid?: string;
  /**
   * A unique identifier which can be used to unambiguously identify the ending milestone, and to
   * clearly associate the ending milestone with the starting milestone (`sid`). If an `sid`
   * attribute is used for the starting milestone in a milestone pair, the ending milestone must
   * include `eid`.
   */
  eid?: string;
  /** The speaker of the quotation. */
  who?: string;
  /** Status */
  status?: "start" | "end";
  /**
   * The order the source document authored this milestone's attributes in, when that is NOT the
   * canonical (`sid`-first) order — mirrors `MilestoneNode.attributeOrder`, and must cross the
   * wire with the embed: a receiving client rebuilds the milestone from this embed alone, and
   * without the order its display run heals the attributes back to canonical order, writing
   * reordered bytes into the file on the next settle. Absent means canonical, so documents
   * written before this field existed keep their meaning.
   */
  attributeOrder?: string[];
}

/**
 * Operational Transform Note Embed
 * @public
 */
export declare interface OTNoteEmbed extends OTParaAttribute {
  /** Note caller */
  caller: string;
  /** Note category */
  category?: string;
  /** Character type note contents */
  contents?: {
    ops?: DeltaOp[];
  };
}

/**
 * A Delta operation attribute for a Para-like node.
 * @public
 */
export declare interface OTParaAttribute {
  /** USX style (USJ marker) attribute. */
  style: string;
}

/**
 * Operational Transform Unknown Embed - contains any unknown node and its children. It might be
 * unknown because it isn't in the USJ spec or it is known but hasn't yet been implemented.
 * @public
 */
export declare interface OTUnknownEmbed {
  /** Tag name of the unknown node */
  tag: string;
  /** Marker of the unknown node */
  marker?: string;
  /** Children contents */
  contents?: {
    ops?: DeltaOp[];
  };
}

/**
 * Operational Transform Unmatched Embed
 * @public
 */
export declare interface OTUnmatchedEmbed {
  /** Marker that is unmatched */
  marker: string;
}

/**
 * Operational Transform Verse Embed
 * @public
 */
export declare interface OTVerseEmbed extends OTParaAttribute {
  /** Verse number */
  number: string;
  /** Start ID */
  sid?: string;
  /** Verse number for an alternate versification scheme */
  altnumber?: string;
  /** Published verse character */
  pubnumber?: string;
}

/**
 * Constant representing the paragraph structure view mode.
 * Displays formatted text with visible USFM paragraph markers in a gutter column,
 * styled verse numbers, decorative chapter numbers, and an active-text outline on
 * the focused paragraph section.
 *
 * @public
 */
export declare const PARAGRAPH_STRUCTURE_VIEW_MODE = "paragraph-structure";

/**
 * Represents the range of a selection within a USJ document, defined by a start and end location.
 *
 * @remarks
 * The `SelectionRange` is used to specify the span of text or content that a selection covers. If
 * only the start location is specified, the end location will default to the start location
 * indicating a cursor location rather than a range selection.
 *
 * @param start - The starting location of the selection range.
 * @param end - The ending location of the selection range.
 *
 * @public
 */
export declare interface SelectionRange {
  /** The starting location of the selection range. */
  start: UsjDocumentLocation;
  /** Optional ending location of the selection range. */
  end?: UsjDocumentLocation;
}

/**
 * Ranking knobs for {@link filterAndRankItems}. `priorityOrder` defaults to
 * `["exact", "startsWith", "contains"]` — the marker palettes' exact-match-first ordering.
 *
 * @public
 */
export declare interface SortingOptions {
  caseSensitive?: boolean;
  priorityOrder?: ("exact" | "startsWith" | "contains")[];
}

/**
 * Constant representing the standard view mode (PT9 "Standard" equivalent).
 * Displays formatted text with USFM markers visible inline as editable text and
 * notes collapsed to callers.
 *
 * @public
 */
export declare const STANDARD_VIEW_MODE = "standard";

/**
 * Snapshot of externally used state.
 * @public
 */
export declare interface StateChangeSnapshot {
  /** Can undo the last change. */
  canUndo: boolean;
  /** Can redo the last undone change. */
  canRedo: boolean;
  /** The block marker that the current selection is contained in. A block is paragraph-like. */
  blockMarker: string | undefined;
  /** The actual marker of the current selection. */
  contextMarker: string | undefined;
}

/**
 * Structure-protection mode for paragraph/verse markers via keyboard, paste, and drop.
 * - "off": fully native editing, no protection or delete confirmation.
 * - "guarded": two-step intentional delete (first press arms the marker, second press deletes
 *   it); no hard blocking of paste/drop/typing.
 * - "protected": structural keystrokes and paste/drop of structural markers are blocked outright.
 *
 * @public
 */
export declare type StructureProtectionMode = "off" | "guarded" | "protected";

/**
 * Project stylesheet data (merged usfm.sty + custom.sty) as serialized by the
 * host.
 *
 * @public
 */
export declare interface StyleInfo {
  /** Project default font/size (ScrText settings) — drives the base CSS rule like PT9. */
  defaultFont?: string;
  defaultFontSize?: number;
  markers: {
    [marker: string]: MarkerStyleInfo;
  };
}

/**
 * The kind of USFM style a marker declares in the stylesheet.
 *
 * @public
 */
export declare type StyleType = "paragraph" | "character" | "note" | "milestone";

/**
 * Left-to-right or Right-to-left or Automatically determined from the content. "auto" is included
 * for completeness but it is not expected that "auto" will be of any use for minority languages.
 *
 * @public
 */
export declare type TextDirection = "ltr" | "rtl" | "auto";

/**
 * Represents a thread of comments, typically attached to a quote.
 *
 * @public
 */
export declare interface Thread {
  /** Array of comments in the thread. */
  comments: CommentBase[];
  /** Unique identifier for the thread. */
  id: string;
  /** The quoted text to which the thread is attached. */
  quote: string;
  /** The type of this object, always "thread". */
  type: "thread";
}

/**
 * In-progress input an in-editor command surface has declared to the editor. `kind` names the shape
 * of the claim so more can be added without widening the method; `run` is the exact byte sequence
 * the surface expects to find immediately before the caret.
 *
 * @public
 */
export declare interface TransientInput {
  kind: "marker-literal";
  run: string;
}

/**
 * A callback function type for handling click events.
 *
 * @param event - The native DOM mouse event containing event details.
 * @param type - The type of the associated annotation.
 * @param id - The ID of the associated annotation.
 * @param textContent - The text content that was annotated when the click occurred.
 *
 * @public
 */
export declare type TypedMarkOnClick = (
  event: DomMouseEvent,
  type: string,
  id: string,
  textContent: string,
) => void;

/**
 * A callback function type for handling mouse-enter events on annotated marks.
 *
 * Fires once when the cursor enters the rendered `<mark>` element. Uses native `mouseenter`
 * semantics (no bubbling, no re-fire as cursor crosses inner text-node boundaries).
 *
 * @public
 */
export declare type TypedMarkOnMouseEnter = (
  event: DomMouseEvent,
  type: string,
  id: string,
  textContent: string,
) => void;

/**
 * A callback function type for handling mouse-leave events on annotated marks.
 *
 * Fires once when the cursor leaves the rendered `<mark>` element. Uses native `mouseleave`
 * semantics (no bubbling).
 *
 * @public
 */
export declare type TypedMarkOnMouseLeave = (
  event: DomMouseEvent,
  type: string,
  id: string,
  textContent: string,
) => void;

/**
 * A callback function type for handling removal events.
 *
 * @param type - The type of the associated annotation.
 * @param id - The ID of the associated annotation.
 * @param cause - The cause of the removal.
 * @param textContent - The text content that was annotated when the removal occurred.
 *
 * @public
 */
export declare type TypedMarkOnRemove = (
  type: string,
  id: string,
  cause: TypedMarkRemovalCause,
  textContent: string,
) => void;

/**
 * Typed mark removal cause types.
 * @public
 */
export declare type TypedMarkRemovalCause = "removed" | "destroyed";

/**
 * Options controlling {@link generateUsjCss}'s output.
 *
 * @public
 */
export declare interface UsjCssOptions {
  /** PT9 zoom factor; scales the base font-size (pt) and vw/pt lengths. */
  zoom?: number;
  /** Swap left/right margins and justification (PT9 rtl handling). */
  rtl?: boolean;
  /**
   * Scope prefix; must at least match the static usj-nodes.css rules' specificity. Defaults to
   * `".editor-input.usfm"` (the editor ContentEditable carries both classes): at (0,2,0) the base
   * rule ties the static `.usfm.formatted-font` rules and wins by injection order, so the project
   * default font/size actually applies (project styles win where defined). A value carrying
   * anything outside {@link SAFE_SELECTOR_REGEX} is replaced by the default with a warning.
   */
  containerSelector?: string;
}

/**
 * Represents a specific location within a USJ document.
 *
 * @remarks
 * The `UsjLocation` interface is used to identify a position in a USJ document,
 * typically for annotation or selection purposes.
 *
 * @param jsonPath - The JSONPath string that points to a specific element in the USJ structure.
 * @param offset - The character offset within the targeted element.
 *
 * @deprecated Use {@link @eten-tech-foundation/scripture-utilities#UsjDocumentLocation} instead.
 * @public
 */
export declare interface UsjLocation {
  /** The JSONPath string that points to a specific element in the USJ structure. */
  jsonPath: string;
  /** The character offset within the targeted element. */
  offset: number;
}

/**
 * Configuration options for USJ (Unified Scripture JSON) nodes.
 *
 * @public
 */
export declare interface UsjNodeOptions extends NodeOptions {
  /** Possible note callers to use when caller is '+'. Defaults to lowercase Latin characters. */
  noteCallers?: string[];
  /** Possible cross-reference callers when caller is '+'. Default ['†']. */
  crossRefCallers?: string[];
  /** Chapter/verse separator for inserted note references (PT9 ChapterVerseSeparator). Default ":". */
  chapterVerseSeparator?: string;
  /** Verse-range separator for inserted note references. Default "-". */
  verseRangeSeparator?: string;
  /** Default caller for inserted footnotes (PT9 DefaultFootnoteCaller). Default "+". */
  defaultFootnoteCaller?: string;
  /** Default caller for inserted cross-references (PT9 DefaultCrossRefCaller). Default "-". */
  defaultCrossRefCaller?: string;
  /** Note caller click handler method. */
  noteCallerOnClick?: NoteCallerOnClick;
  /**
   * Method to add missing comments.
   * @deprecated Use of this method is deprecated. Consider managing missing comments through
   *   application state or other mechanisms instead.
   */
  addMissingComments?: AddMissingComments;
  /**
   * Additional marker names to treat as valid, beyond the built-in USFM lists. This prevents
   * "Unexpected <kind> marker" warnings when loading documents that use them. Applied to char,
   * para, note, and milestone markers alike. Markers that are neither built-in, z-prefixed
   * (custom), nor listed here still warn. Additive — never replaces the built-in lists.
   */
  extraValidMarkers?: readonly string[];
}

/**
 * Represents the available view modes for displaying content.
 *
 * @public
 */
export declare type ViewMode = keyof typeof viewModeToViewNames;

/**
 * Maps view mode keys to their human-readable display names.
 * Used for UI components that need to show view mode options to users.
 *
 * @public
 */
export declare const viewModeToViewNames: {
  formatted: string;
  unformatted: string;
  "paragraph-structure": string;
  standard: string;
};

/**
 * Configuration options for controlling the display and behavior of Scripture text views.
 *
 * @example
 * ```typescript
 * const viewOptions: ViewOptions = {
 *   markerMode: "hidden",
 *   hasSpacing: true,
 *   isFormattedFont: true
 * };
 * ```
 *
 * @public
 */
export declare interface ViewOptions {
  /** How USFM markers are displayed */
  markerMode: MarkerMode;
  /** How notes are displayed. */
  noteMode?: NoteMode;
  /** Does the text have spacing including indenting. */
  hasSpacing: boolean;
  /** Is the text in a formatted font. */
  isFormattedFont: boolean;
  /**
   * When false, an expanded note's SHELL — its opening marker glyph and its caller — is rendered
   * atomic: the caret cannot enter it and typing cannot change it. Only meaningful in `editable`
   * marker mode with an expanded note, which is the one shape that renders those bytes as ordinary
   * editable text.
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
}

export {};
