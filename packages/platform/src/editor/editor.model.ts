import { MarkerMenuContext, MarkerMenuItem } from "./markerMenu/markerItemSource";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { SerializedVerseRef } from "@sillsdev/scripture";
import { RefObject } from "react";
import {
  LoggerBasic,
  StyleInfo,
  TypedMarkOnClick,
  TypedMarkOnMouseEnter,
  TypedMarkOnMouseLeave,
  TypedMarkOnRemove,
} from "shared";
import {
  AnnotationRange,
  ContextMenuOptionConfig,
  DeltaOp,
  DeltaSource,
  HiddenContentDeleteHandler,
  SelectionRange,
  StateChangeSnapshot,
  StructureProtectionMode,
  TextDirection,
  UsjNodeOptions,
  ViewOptions,
} from "shared-react";

/**
 * In-progress input an in-editor command surface has declared to the editor. `kind` names the shape
 * of the claim so more can be added without widening the method; `run` is the exact byte sequence
 * the surface expects to find immediately before the caret.
 *
 * @public
 */
export interface TransientInput {
  kind: "marker-literal";
  run: string;
}

/**
 * Options for {@link EditorRef.commitTypedMarker}.
 *
 * @public
 */
export interface CommitTypedMarkerOptions {
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
 * EXPERIMENTAL: Options for {@link EditorRef.setUsj}.
 *
 * @public
 */
export interface SetUsjOptions {
  /**
   * EXPERIMENTAL: Load the document even when the editor already holds it. Defaults to `false`.
   *
   * Pass `true` to correct what is on screen while a marker edit may be in progress. The editor
   * keeps two versions of its document while such an edit is in progress: what is on screen, and
   * its own record from before the edit. A document equal to that record is skipped by default,
   * which keeps the edit from being thrown away by a host that re-sends the text as it was. The
   * same test skips a correction that happens to put back what the edit removed, such as a chapter
   * number the user backspaced away, so a host making that correction forces it. A forced load
   * replaces the edit in progress, and, like any load, takes the caret and the undo history with
   * it.
   */
  force?: boolean;
}

/**
 * Forward reference for the editor.
 *
 * @public
 */
export interface EditorRef {
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
  /**
   * Cut the selected text. With nothing selected it does nothing and the clipboard keeps whatever
   * it already held — see {@link EditorRef.copy}.
   * @throws Will throw an error if the editor is in readonly mode or uses the block verse layout
   *   (`ViewOptions.verseLayout: "block"`), which is read-only by construction.
   */
  cut(): void;
  /**
   * Copy the selected text. With nothing selected — no selection, or a collapsed caret — it does
   * nothing and the clipboard keeps whatever it already held, rather than receiving a placeholder
   * character the editor never contained. A selection made programmatically immediately before this
   * call still copies: the guard reads the live selection, not the last committed one.
   */
  copy(): void;
  /**
   * Paste text at the current cursor position.
   * @throws Will throw an error if the editor is in readonly mode or uses the block verse layout
   *   (`ViewOptions.verseLayout: "block"`), which is read-only by construction.
   */
  paste(): void;
  /**
   * Paste text as plain text at the current cursor position.
   * @throws Will throw an error if the editor is in readonly mode or uses the block verse layout
   *   (`ViewOptions.verseLayout: "block"`), which is read-only by construction.
   */
  pastePlainText(): void;
  /**
   * Get USJ Scripture data.
   *
   * @remarks
   * **Settled**: this is the settled document itself — pending marker edits count as already
   * settled. In editable marker modes a marker rename, a typed marker literal, or an edited
   * display run stays pending in the document until the caret departs; this returns the document
   * those bytes MEAN (the same re-tokenization a departure settle performs), computed without
   * touching the editor, so the user's edit stays pending on screen and their caret and undo
   * history are untouched. Settling is uniform: a half-typed `|stuf` settles to literal content,
   * because that is what those bytes mean to anything that parses them.
   *
   * Annotations are never part of it; a comment's `zmsc` milestones cover only the text it holds,
   * never display bytes (an attribute value is a string, and a glyph or verse number has no place
   * for a milestone). A host that needs such an annotation again after `setUsj` re-applies it from
   * its own anchor.
   */
  getUsj(): Usj | undefined;
  /**
   * Settle pending mid-edit marker text (Standard view's marker-editing engine) IN THE DOCUMENT,
   * so the screen shows the finished structure. NOT required before reading the USJ to save —
   * {@link EditorRef.getUsj} already returns settled output — so a host that only needs canonical
   * USJ should not call this at all: it mutates the document, which pushes a history entry and can
   * re-settle content the user just undid. Positions ({@link EditorRef.getSelection},
   * {@link EditorRef.setSelection}, {@link EditorRef.setAnnotation}) never require it either — they
   * already resolve against the settled document automatically.
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
   * EXPERIMENTAL: this signature may change. Suspends (or resumes) the three settle clocks a host
   * did not ask for: the idle debounce, the blur settle and the caret-departure settle. For a host
   * that opens a surface of its own over the editor — a marker palette — and needs the document to
   * stop reformatting underneath it while that surface is open.
   *
   * All three are a problem for such a surface, for the same underlying reason: a settle commits
   * dirty nodes, and Lexical re-asserts the DOM selection on any such commit — focusing the editor
   * root whenever focus has left it (`updateDOMSelection`). A surface that dismisses itself on
   * focus loss therefore closes. The blur clock fires the instant the surface takes focus; the
   * idle clock fires one `EditorOptions.markerSettleDelayMs` later, closing a surface the user is
   * still looking at; the departure clock is keyed off every COMMIT, so a commit the host or a
   * display-run sync makes while the surface is open does the same thing with no user involved.
   *
   * SUSPEND SYNCHRONOUSLY, BEFORE FOCUS MOVES to the surface — in the keydown that opens it, not
   * in a promise or an effect that runs after. `BLUR_COMMAND` fires on the focus move itself, and
   * a suspend that arrives afterwards cannot undo a settle that has already run. "Suspend when the
   * surface opens" is not precise enough: by the time the surface is showing, the blur settle has
   * been and gone.
   *
   * DRIVE IT FROM ONE DERIVED "any surface open" STATE. This is a single flag, not a reference
   * count, so the last call wins: if one surface closes while another is open, the closing one's
   * resume lifts the hold the open one still needs. A host with more than one such surface should
   * compute "is any of them open" and set that, rather than letting each surface call suspend and
   * resume for itself. Redispatching the value already in force is a no-op, so driving it from an
   * effect is safe.
   *
   * Suspending CANCELS an already-armed idle timer, which is the part a delay change cannot do:
   * `EditorOptions.markerSettleDelayMs` is read when the clock is next armed, so a timer armed
   * before the host changed it still fires.
   *
   * RESUMING SETTLES what the suspension held — everything pending except the node under the
   * caret, the same exception the blur and departure clocks use — and then re-arms the idle clock.
   * Resume is the moment Paratext 9 reformats, so held edits do not wait out another idle delay,
   * and they still settle when the idle clock is turned off entirely
   * (`EditorOptions.markerSettleDelayMs: -1`), where there is no clock to re-arm. The caret's own
   * node stays pending for whatever settles it next, so a palette's apply can still consume it.
   *
   * WHAT STILL SETTLES while suspended, because the host or the user explicitly asked for it:
   * Enter; {@link EditorRef.commitPendingMarkerEdits}; the settle-on-read inside
   * {@link EditorRef.getUsj}; and resolution that happens within the same update as the edit. A
   * forced commit is therefore NOT held back by the suspension — and `commitPendingMarkerEdits`'
   * own rule still binds: do not issue one while a palette session is open. A host whose pre-save
   * debounce can fire with the surface open must hold that save itself.
   *
   * IF A RESUME IS MISSED, the editor heals itself — but on sustained focus, not on focus alone.
   * When the editor holds DOM focus continuously for about a second while still suspended, the
   * suspension is lifted, held edits settle, and a warning is logged. Anything that suggests the
   * surface is still alive cancels it: another blur (a replacement surface taking focus back), or
   * the host resuming.
   *
   * Focus alone is not evidence, because a host's own commit path returns focus to the editor
   * mid-session, on purpose, to apply what the user chose — the marker palette's
   * commit-and-reopen does exactly that. What separates the two is how long the focus lasts: a
   * legitimate one is brief. Lifting late is also harmless, since a suspension only protects a
   * surface that HOLDS focus and a settle can only steal focus that is somewhere else.
   *
   * A surface left open for a long time is unaffected: the timer only runs while the editor itself
   * has focus. Until a lift, held marker text stays literal on screen; nothing is lost, since
   * `getUsj` settles on read.
   *
   * The flag is per-`Editor` and RESETS WHEN THE EDITOR REMOUNTS — including when
   * `ViewOptions.verseLayout` changes, which rebuilds the whole editor. A host that is suspended
   * across such a change must re-assert it.
   *
   * It is not readable back, and nothing else clears it: not {@link EditorRef.setUsj}, not a
   * plugin re-registration (surviving that is deliberate), and there is no timeout.
   *
   * No-op outside editable marker modes, and silently dropped if the editor is not mounted.
   */
  setMarkerSettleSuspended(suspended: boolean): void;
  /**
   * Declares in-progress input that an in-editor command surface (e.g. the marker palette) will
   * consume or discard — analogous to an IME composition string. While declared,
   * {@link EditorRef.getUsj} excludes these bytes from its settled output: the containing paragraph
   * settles as if they were absent, and so does the `usj` a later `onUsjChange` carries. Editor
   * state, on-screen content, and OT deltas are untouched. One declaration at a time; calling
   * again replaces it; `undefined` clears it.
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
  /**
   * Set the USJ Scripture data, replacing the editor's content.
   *
   * Does nothing when `usj` is a document the editor already holds, so the caret and the undo
   * history survive: the document {@link EditorRef.getUsj} returns now (what is on screen), or,
   * while a marker edit is in progress, the editor's own record from before that edit — so a host
   * re-sending the text as it was does not throw the edit away. Pass `options.force` to load it
   * regardless (see {@link SetUsjOptions.force}). `options` is EXPERIMENTAL
   * (see {@link SetUsjOptions}).
   */
  setUsj(usj: Usj, options?: SetUsjOptions): void;
  /**
   * EXPERIMENTAL: Apply Operational Transform delta update.
   *
   * @remarks
   * **Live**: refers to the editor's current tree as displayed, including marker text the user is
   * still typing that has not settled yet — delta ops address content by its position in that live
   * tree. In the block verse layout (`ViewOptions.verseLayout: "block"`), which regroups verses
   * into blocks, the live position no longer matches the source USJ's, so ops cannot be applied
   * there. A `"remote"` update is reported through the logger and dropped rather than thrown, so a
   * collaborator's op loop is not torn down; refresh such a view by handing it new USJ instead.
   *
   * Called inside an update of this editor (an `update` callback, a command handler, or an update
   * listener such as `onUsjChange`), the apply commits once that update finishes, so it is not yet
   * reflected when this call returns; its `onUsjChange` comes when it commits, with these ops and
   * `source`.
   *
   * @throws Will throw an error if the editor uses the block verse layout and `source` is
   *   `"local"`.
   */
  applyUpdate(ops: DeltaOp[], source?: DeltaSource): void;
  /**
   * EXPERIMENTAL: Replace an embed Operational Transform delta.
   *
   * @remarks
   * **Live**: refers to the editor's current tree as displayed, including marker text the user is
   * still typing that has not settled yet. Embed nodes are treated as atomic units. These include
   * chapter nodes, verse nodes, milestone nodes, note nodes, and unmatched nodes.
   *
   * @param embedNodeKey - The editor key of the embed node to replace.
   * @param insertEmbedOps - The delta operations that insert the new embed node. Any operations
   *   after the first are inserted right after the new embed (the old one is deleted first) - how a
   *   host's note editor hands back text that left its note (see {@link EditorRef.getOpsAfterNote}).
   */
  replaceEmbedUpdate(embedNodeKey: string, insertEmbedOps: DeltaOp[]): void;
  /**
   * Get the selection location or range.
   *
   * @remarks
   * **Settled**: positions and indexes refer to the document `getUsj()` returns at that moment —
   * pending marker edits count as already settled. While a marker edit is pending (Standard
   * view's marker-editing engine) the editor translates between the settled document and the live
   * tree automatically; when nothing is pending the two are identical.
   *
   * A position names the byte in front of which it sits, and maps through whatever contains that
   * byte on its own side. Where one side has bytes the other lacks, the position in front of them
   * snaps LEFT to the nearest byte both sides share, and the position just past them is exact —
   * one aligner serves both directions, and each end of a range resolves on its own. A caret behind
   * a verse number's (or a note caller's) trailing space reports the first byte after it — a
   * verse's text at offset 0, the next marker — since that space has no position of its own.
   * Outbound, every real caret has a location: this returns `undefined` only when there is no text
   * selection, never because a position could not be translated. Typed bytes a pending edit holds that the
   * settled document carries as an attribute — a typed `\cat …\cat*` becomes a note's `category`,
   * a typed figure's `|src="…"` its `file` — are reported as that attribute's location. With
   * `|lemma="grace"` pending (settles to `|grace`), the settled value start
   * (`['lemma'] propertyOffset 0`) lands at the start of the VALUE — before `grace` — because the
   * position sits in front of `grace`, and `grace` is a byte both sides carry. A caret with no
   * text beside it — in front of a marker, in an empty paragraph, at the end of the document — is
   * reported as the one location its USFM position has (see `UsjDocumentLocation`), never as a
   * container plus a content index; {@link EditorRef.setSelection} still accepts that older shape.
   *
   * @returns the selection location or range, or `undefined` only when there is no text selection
   *   (none, or a selected paragraph marker — see {@link EditorRef.getSelectedParaMarker}) — never
   *   because a position could not be expressed. The json-path in the selection assumes no
   *   comment Milestone nodes are present in the USJ.
   */
  getSelection(): SelectionRange | undefined;
  /**
   * The selected paragraph marker's name (e.g. `"li2"`), if a paragraph's gutter marker is
   * selected.
   *
   * @remarks
   * In the paragraph-structure view (`ViewOptions.hasGutterParaMarkers`) the user can select a
   * paragraph's marker itself — by clicking it in the gutter — rather than placing a caret in its
   * text. That selection names a paragraph, not a text range, so {@link EditorRef.getSelection}
   * reports `undefined` for it; this method reports it instead.
   * {@link EditorRef.formatPara} retags that paragraph. Always returns `undefined` in the block
   * verse layout, which renders no gutter markers, and while the editor is read-only.
   *
   * Reads the committed editor state. {@link EditorProps.onSelectionChange} fires before a
   * selection change commits, so a read inside that callback still reports the selection being
   * replaced; defer it (e.g. `queueMicrotask`), or use `onStateChange`'s `blockMarker`, which is
   * reported after the commit.
   *
   * @returns the selected paragraph marker's name, or `undefined`.
   */
  getSelectedParaMarker(): string | undefined;
  /**
   * Set the selection location or range.
   *
   * @remarks
   * **Settled**: positions and indexes refer to the document `getUsj()` returns at that moment —
   * pending marker edits count as already settled. See {@link EditorRef.getSelection} for the
   * full mapping contract. Inbound, this refuses (and logs the refusal) ONLY a location that
   * names nothing in the settled document at all; anything else not representable snaps LEFT the
   * same as outbound, each end of a range on its own. A position basis the live tree has moved on
   * from is rebuilt (and the rebuild logged as an error), never refused.
   *
   * @param selection - A selection location or range. The json-path in the selection assumes no
   *   comment Milestone nodes are present in the USJ.
   */
  setSelection(selection: SelectionRange): void;
  /**
   * Set an ephemeral annotation with optional event callbacks.
   *
   * @remarks
   * **Settled**: positions and indexes refer to the document `getUsj()` returns at that moment —
   * pending marker edits count as already settled. See {@link EditorRef.getSelection} for the
   * full mapping contract, including the inbound refusal rule.
   *
   * A range may cover display bytes as well as text: a marker glyph, a verse or chapter number, a
   * note caller, or an attribute run's text (`|lemma="grace"`, `\va 3\va*`, a milestone's
   * `|who="Pilate"`). Text is wrapped in a `<mark>`; display bytes keep their own element and hold
   * the annotation themselves. Setting an annotation never changes the document, a position, or
   * what `getSelection` reports.
   *
   * Painting is exact: an annotation paints the bytes it holds, plus the whitespace the editor
   * shows between two of them in one paragraph (a marker's separator, a verse number's trailing
   * space) — never whitespace at its edges, and never the rest of a display byte it holds only part
   * of. A display byte painted over all of its text gets the same class names a `<mark>` gets
   * (`<typedMark>-<type>`, `<typedMarkOverlap>-<type>` where two ids of a type overlap,
   * `annotationId-<id>`) plus `display-annotation`. A part of one is painted with a CSS Custom
   * Highlight instead, which the editor styles from the same class rules: it copies the
   * properties a highlight can paint (`background-color`, `color`, a `text-decoration` that draws
   * a line, `text-shadow`) and otherwise draws a bottom border as an underline. Other properties
   * and `:hover` rules apply only to elements, and the rules must not depend on ancestors inside
   * the editable content. Where the browser has no highlight API, a display byte is painted whole.
   * Find painted annotations with {@link EditorRef.getAnnotationRanges}, not by class.
   *
   * A read-only glyph, verse number or chapter number (the views without editable markers) holds
   * and paints exactly the part of what it shows that the range names. A range that names only
   * bytes such a glyph stands for without showing them (a verse's `\va` where markers are hidden)
   * holds the annotation on it but paints nothing, and gets no click or hover; its `onRemove` text
   * is the bytes it holds (`12a`).
   *
   * Display bytes keep the annotation through an edit the way text does: a hold follows the bytes
   * it holds (a collaborator renumbering `\v 12` to `\v 13` keeps a hold on `1`), and is dropped,
   * reporting `"destroyed"`, once none of them is left (a hold on `2`). A hold on bytes a glyph
   * does not show follows those bytes the same way. A change only in how a glyph draws the same
   * bytes (a hidden caller `-` shown as `*` while its note is collapsed, a caller CSS draws) keeps
   * the hold and reports nothing: it is held whole while its bytes are not drawn, and exactly
   * again once they are, whatever else is set on it meanwhile.
   *
   * The annotation holds exactly the bytes the range names. A range into part of a char span, note
   * or figure holds only the part it names: the span's own text is marked piece by piece and its
   * marker glyphs hold the annotation; a span the range covers whole is marked whole. A collapsed
   * range holds nothing. The whitespace a marker or number ends in is never held — a separator and
   * a carrier's own edge whitespace are excepted the same way, whether the range passes over them
   * or ends exactly there. A char span's opening or closing glyph can end up holding the annotation
   * on its own this way — as a display byte, not inside the `<mark>` that holds its content — from
   * a range starting exactly on the glyph, or from any settle of the span's paragraph; since
   * `getUsj()` carries no annotation state for a display byte, a save and reload then keeps the
   * content `<mark>`'s bytes but loses the glyph's own highlighting.
   *
   * A collapsed note's content, all of it hidden behind its caller, holds what a range names there
   * without showing it, as Paratext 9 shows no annotation inside a closed note: the caller holds
   * the annotation only when the range names the caller itself. A note's category the view does
   * not display names nothing, so a range inside it holds nothing.
   *
   * `onRemove`: each `<mark>` reports its own removal when it goes away — one call per `<mark>`,
   * whatever else still holds the annotation — and only once: a `<mark>` an undo brings back stays
   * quiet when it goes again. Beyond that, the annotation's last holder — a `<mark>` or a display
   * byte — leaving the document without any `<mark>` having reported the annotation's removal since
   * it was set fires ONE more report, through its display bytes: `"removed"` when
   * `removeAnnotation` or setting the same id again takes it away, `"destroyed"` when it drops out
   * of the document (an edit, a collaborator's edit, or a settle that discards those bytes). That
   * report's text is every `<mark>`'s and carrier's text joined in document order when they all
   * leave in the same edit; holders lost across separate edits leave only the text of the
   * piece(s) still present at the last one. A collapsed note caller's text is the note's caller.
   * Undo, redo, and a `setUsj` reload report nothing; setting the id again starts a fresh reporting
   * cycle for it. An `onRemove` that throws — in a `<mark>`'s own report or in the one more
   * report — does not stop the edit or call that removed the annotation, or the other reports: the
   * error is handed to the editor's error handler, which rethrows it, in a later microtask.
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
   * @remarks **Settled**: positions and indexes refer to the document `getUsj()` returns at that
   *   moment — pending marker edits count as already settled. See {@link EditorRef.getSelection}
   *   for the full mapping contract. See {@link EditorRef.setAnnotation} for the display-byte
   *   carrier and removal-semantics contract.
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
   * Remove an ephemeral annotation. Removes it from text and display bytes alike.
   * @param type - Type of the annotation.
   * @param id - ID of the annotation.
   */
  removeAnnotation(type: string, id: string): void;
  /**
   * DOM ranges over everything an annotation paints: each `<mark>` that holds its text, each
   * display byte it holds (only the part it holds), and the whitespace painted between them — in
   * document order, empty when nothing paints it. Measure, scroll to or hit-test an annotation with
   * these; an element lookup by its `annotationId-<id>` class misses the display bytes painted
   * with a highlight.
   *
   * @remarks **Live**: the ranges are over the editor's current DOM, including marker text the
   *   user is still typing; take them again after the next edit.
   * @param type - Type of the annotation.
   * @param id - ID of the annotation.
   * @experimental This member is unstable and may change shape or disappear without notice.
   */
  getAnnotationRanges(type: string, id: string): Range[];
  /**
   * Format the paragraph at the current cursor position — or the paragraph whose marker is
   * selected (see {@link EditorRef.getSelectedParaMarker}) — with the given block marker. A
   * selected marker stays selected on the retagged paragraph.
   * @throws Will throw an error if the editor is in readonly mode or uses the block verse layout
   *   (`ViewOptions.verseLayout: "block"`), which is read-only by construction.
   */
  formatPara(blockMarker: string): void;
  /**
   * Get the editor element for the given node key, if any.
   *
   * @remarks **Live**: refers to the editor's current tree as displayed, including marker text
   *   the user is still typing that has not settled yet — `nodeKey` names a node in that tree
   *   directly.
   */
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
   * @returns **Live**: the freshly-inserted note's node key in the editor's current tree (a true
   *   Lexical key) when `marker` is a note marker (e.g. `"f"`, `"x"`, `"fe"`); `undefined` for
   *   every other marker kind.
   * @throws Will throw an error if the editor is in readonly mode.
   * @throws Will throw an error if the `scrRef` prop was not provided to the editor.
   * @throws Will throw an error if the marker is not a supported para, char, note, chapter, or
   *   verse marker.
   */
  insertMarker(marker: string): string | undefined;
  /**
   * Starts chapter 1 in a book that has no chapters: inserts `\c 1`, then `verseCount` empty
   * verses, after the book's front matter (the `\id` line, running header, table of contents,
   * titles and introduction; a section heading such as `\s1` already belongs to the chapter). This
   * is where {@link EditorRef.insertMarker} with `"c"` and the `\` menu's `\c` put it too.
   *
   * When the chapter content after the front matter already holds anything (text, a verse, a
   * note, a milestone or a figure), as a book typed or imported without chapter markers does, no
   * verses are added: they would go above that content, leaving all of it in the last verse. A
   * section heading counts, so a book holding only one gets `\c 1` without verses.
   *
   * Where the markers show (Standard view), the caret goes at the end of the chapter line. Where
   * they are hidden there is no chapter line, so the caret goes after verse 1, or with no verses to
   * the start of the paragraph that follows; with neither, it stays where it was.
   *
   * @param verseCount - How many empty verses to add after the chapter marker, when the chapter
   *   content holds nothing yet. Defaults to none.
   * @returns `false`, changing nothing, unless the `scrRef` prop is chapter 1 and the document has
   *   no chapter yet.
   * @throws Will throw an error if the editor is in readonly mode.
   * @throws Will throw an error if the `scrRef` prop was not provided to the editor.
   */
  insertFirstChapter(verseCount?: number): boolean;
  /**
   * Snapshot of the marker-menu context at the current selection (standard-view marker menus).
   * Returns undefined when the editor is readonly or has no range selection.
   */
  getMarkerMenuContext():
    | (MarkerMenuContext & { anchorRect?: { x: number; y: number; width: number; height: number } })
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
   * @returns **Live**: the created note's node key in the editor's current tree (a true Lexical
   *   key) when the applied item inserted a note (hosts use it to track the note-editing session —
   *   the same contract as {@link EditorRef.insertMarker}); `undefined` for every other item kind.
   * @see {@link EditorRef.splitParagraphWithMarker} for the Enter-menu apply step.
   */
  applyMarkerMenuSelection(
    item: MarkerMenuItem,
    opts: { trigger: "backslash" | "enter"; literalPrefixLanded: boolean },
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
   * @param selection - **Settled**: expressed against the document `getUsj()` returns at that
   *   moment — pending marker edits count as already settled (see {@link EditorRef.getSelection}
   *   for the full mapping contract). Optional; defaults to the current selection in the editor.
   * @throws Will throw an error if the marker is not a valid note marker.
   * @throws Will throw an error if the editor is in readonly mode or uses the block verse layout
   *   (`ViewOptions.verseLayout: "block"`), which is read-only by construction.
   *
   * @deprecated Use {@link EditorRef.insertMarker} instead. `insertMarker` supports note markers
   *   and additionally provides readonly and scrRef guards.
   */
  insertNote(marker: string, caller?: string, selection?: SelectionRange): void;
  /**
   * EXPERIMENTAL: Select the note by editor key or at the given index in the editor, if any.
   *
   * @remarks
   * A `noteKeyOrIndex` key — **Live**: refers to the editor's current tree as displayed; it names
   * a node in that tree directly. A `noteKeyOrIndex` index — **Settled**: refers to the document
   * `getUsj()` returns at that moment — pending marker edits count as already settled; it counts
   * the notes of that document, in order (e.g. index=1 selects the second one), so a note still
   * pending as a typed literal counts too — selecting it puts a collapsed caret at the literal's
   * own `\`, since it is not a note yet in the live tree. Because of this, `getNoteOps(i)` and
   * `selectNote(i)` can name DIFFERENT notes while a whole note literal is pending: `getNoteOps`
   * always counts the LIVE notes, `selectNote`'s index counts the SETTLED ones.
   *
   * @param noteKeyOrIndex - The note key (LIVE) or index (SETTLED), e.g. index=1 would select the
   *   second note of the settled document.
   */
  selectNote(noteKeyOrIndex: string | number): void;
  /**
   * EXPERIMENTAL: Put the caret immediately AFTER the given note, where PT9 leaves it once the
   * user is done with a note - in a collapsed note (which renders as its caller alone) that is the
   * position just past the caller.
   *
   * @remarks
   * Never pulls DOM focus into this editor: when this editor's root does not hold focus the commit
   * carries Lexical's `SKIP_DOM_SELECTION_TAG`, so a host driving this from ANOTHER editor (a
   * footnotes pane's inline note editor, say) keeps the caret the user is actually typing in. The
   * selection is still recorded, so a later {@link EditorRef.focus} lands on it.
   *
   * @param noteKeyOrIndex - The note key or document-order index (see
   *   {@link EditorRef.getNoteIndex}).
   */
  selectAfterNote(noteKeyOrIndex: string | number): void;
  /**
   * EXPERIMENTAL: Put the caret at an offset within a note's own text.
   *
   * @remarks
   * The offset counts the note's CONTENT only. Every display artifact this editor's
   * {@link ViewOptions} add around that content - marker glyphs (`markerMode: "editable"` and
   * `"visible"` alike), attribute display runs, engine-owned NBSP spacers, an opening glyph's NBSP
   * separator prefix, and an expanded editable note's caller - is skipped, so the offset origin is
   * the note's USJ text and a host that captured a position over its OWN rendering of the same
   * note resolves to the same character whichever marker mode this editor is in.
   *
   * Text the source wrote directly inside the note rather than inside a `\ft`-style run is content
   * and counts, as it does in the note's USJ.
   *
   * An offset past the end of the note's text clamps to the end; a note with no content text falls
   * back to {@link EditorRef.selectNote}.
   *
   * Unlike {@link EditorRef.selectAfterNote}, this DOES take DOM focus when the editor does not
   * already hold it - the same behavior as {@link EditorRef.selectNote}, which it falls back to.
   * It is for a host putting the caret into an editor it is about to focus (pair it with
   * {@link EditorRef.focus}), not for driving one editor's caret from another.
   *
   * The caret is placed, not revealed: a note rendered COLLAPSED hides its content text, and
   * nothing here expands it, so land the caret with this only in a note mode that shows the note
   * ({@link ViewOptions.noteMode} `"expanded"`, as a host's own note editor uses).
   *
   * @param noteKeyOrIndex - The note key or document-order index (see
   *   {@link EditorRef.getNoteIndex}).
   * @param utf16Offset - Offset into the note's content text, in UTF-16 code units (the unit DOM
   *   Selection APIs and Lexical text nodes both count in).
   * @param options - Where else the offset may point.
   *
   *   - `field: "category"` addresses the note's `\cat` category value instead of its content (the
   *     value's display separator excluded). A note that shows no category run takes the caret at
   *     the start of its content instead.
   *   - `glyph` puts the caret inside a marker glyph rather than in text: the `glyph.index`-th glyph
   *     (from 0) among those at `utf16Offset` - `\ft*\fr` puts two between the same two
   *     characters - at `glyph.offset` into the glyph's own text (`\ft`, `\+nd*`; its display
   *     separator excluded). The glyphs counted are a run's opening and closing glyphs, a nested
   *     span's, and unmatched markers - in the category, `\cat` at offset 0 and `\cat*` at the
   *     value's end - never the note's own opening glyph, caller, or closing glyph. Offset 0 of a
   *     glyph that directly follows text the user can type in (content, or the caller) lands at that
   *     text's end instead. A glyph the note does not have falls back to the offset alone. Counting
   *     glyphs from the offset rather than into it keeps every content offset the same whether or
   *     not the host's own rendering shows markers.
   */
  selectNoteTextOffset(
    noteKeyOrIndex: string | number,
    utf16Offset: number,
    options?: { field?: "category"; glyph?: { index: number; offset: number } },
  ): void;
  /**
   * EXPERIMENTAL: Get the note operations by editor key or at the given index in the editor, if any.
   *
   * @remarks
   * Both a `noteKeyOrIndex` key and an index — **Live**: refer to the editor's current tree as
   * displayed, including marker text the user is still typing that has not settled yet; the index
   * counts the notes of that tree, not the settled document, so its ops round-trip into
   * {@link EditorRef.replaceEmbedUpdate} against the same tree they were read from. See
   * {@link EditorRef.selectNote} for how this can name a different note than a `selectNote` call
   * with the same index while a whole note literal is pending.
   *
   * @param noteKeyOrIndex - The note key or index, e.g. index=1 would get the second note in the
   *   editor.
   */
  getNoteOps(noteKeyOrIndex: string | number): DeltaOp[] | undefined;
  /**
   * EXPERIMENTAL: The operations for whatever follows a note in its paragraph, up to (not
   * including) the paragraph's end.
   *
   * A host's own note editor holds the note alone in a paragraph, so anything found after it there
   * has left the note: typing the note's closer (`\f*`) in the middle of an unclosed note closes
   * the note at that point, and the rest of what was typed in the note belongs after it. Appending
   * these ops after the note op in {@link EditorRef.replaceEmbedUpdate} puts that text after the
   * note in the editor the note is applied to.
   *
   * Safe to call from a host callback that runs during an update it is itself driving - such as
   * `onSelectionChange` - rather than only between updates: it reads the latest state directly in
   * that case instead of going through a plain read, which would force-flush the open update and
   * crash it.
   *
   * @param noteKeyOrIndex - The note key or document-order index (see
   *   {@link EditorRef.getNoteIndex}).
   * @returns The operations (empty when nothing follows the note), or `undefined` when there is no
   *   such note.
   */
  getOpsAfterNote(noteKeyOrIndex: string | number): DeltaOp[] | undefined;
  /**
   * EXPERIMENTAL: Removes whatever follows a note in its paragraph and returns its operations, as
   * {@link EditorRef.getOpsAfterNote} reads them.
   *
   * The removal joins the undo step of the edit that left the text there rather than being an undo
   * step of its own. A host's note editor takes the text that a typed closer (`\f*`) moved out of
   * the note, to apply it after the note in the Scripture text; one undo then puts the closer AND
   * that text back the way they were - the note open again, holding the text. Were the removal its
   * own step, the first undo would bring the text back after the note, where the host would take it
   * again.
   *
   * Safe to call from a host callback that runs during an update it is itself driving - such as
   * `onSelectionChange` - rather than only between updates: the ops are found the same way
   * {@link EditorRef.getOpsAfterNote} finds them, reading the latest state directly instead of
   * going through a plain read, which would force-flush the open update and crash it.
   *
   * @param noteKeyOrIndex - The note key or document-order index (see
   *   {@link EditorRef.getNoteIndex}).
   * @returns The operations removed (empty when nothing follows the note), or `undefined` when there
   *   is no such note.
   */
  takeOpsAfterNote(noteKeyOrIndex: string | number): DeltaOp[] | undefined;
  /**
   * EXPERIMENTAL: Document-order index of the note with the given key — the coordinate a USJ-built
   * notes list (e.g. a footnotes pane) addresses notes by, and the same index `noteCallerOnClick`
   * reports.
   * @param noteKey - The note node's key (e.g. from `insertMarker` or `noteCallerOnClick`).
   * @returns The index, or `undefined` when the key is not a note in the document.
   */
  getNoteIndex(noteKey: string): number | undefined;
  /**
   * EXPERIMENTAL: Key of the note at the given document-order index (the inverse of
   * {@link EditorRef.getNoteIndex}), so a host that addresses notes by index can hand the editor
   * the key `replaceEmbedUpdate` needs.
   * @param noteIndex - The document-order index of the note (e.g. from
   *   {@link EditorRef.getNoteIndex} or a USJ-built notes list).
   * @returns The key, or `undefined` when no note exists at that index.
   */
  getNoteKey(noteIndex: number): string | undefined;
  /**
   * EXPERIMENTAL: Highlights the caller of the given note in the text with PT9's selected-note
   * style (class `caller_highlight`: a yellow fill with thin blue top and bottom borders),
   * replacing any previous highlight. Pass `undefined` to clear. Purely presentational: never
   * changes the document. A host that vendors its own copy of `usj-nodes.css` needs that rule in
   * it, or this is a silent no-op visually.
   *
   * The style goes on the caller element whichever shape the note was built in: collapsed (an
   * immutable caller element, kept through an expand toggle) or expanded under
   * `markerMode: "editable"` (the caller's plain text, as for an unclosed note). The note is
   * resolved when this is called and never retried, so a call made before the document
   * has loaded, or with a stale key or an out-of-range index, is discarded and clears any
   * highlight already showing.
   * @param noteKeyOrIndex - Note key or document-order index (see
   *   {@link EditorRef.getNoteIndex}).
   */
  highlightNote(noteKeyOrIndex: string | number | undefined): void;
  /** Ref to the end of the toolbar - INTERNAL USE ONLY to dynamically add controls in the toolbar. */
  toolbarEndRef: RefObject<HTMLElement | null> | null;
}

/**
 * Props for the Editor component that provides Scripture editing functionality.
 *
 * @public
 */
export interface EditorProps<TLogger extends LoggerBasic> {
  /** Initial Scripture data in USJ format. */
  defaultUsj?: Usj;
  /** Scripture reference that controls the general cursor location of the Scripture. */
  scrRef?: SerializedVerseRef;
  /** Callback function when the Scripture reference has changed. */
  onScrRefChange?: (scrRef: SerializedVerseRef) => void;
  /**
   * Callback function when the cursor selection changes.
   *
   * @remarks
   * **Settled**: the `selection` passed refers to the document `getUsj()` returns at that moment —
   * pending marker edits count as already settled; see {@link EditorRef.getSelection} for the full
   * mapping contract. It is `undefined` only when there is no selection, as it is for
   * `getSelection`.
   */
  onSelectionChange?: (selection: SelectionRange | undefined) => void;
  /**
   * Callback function when USJ Scripture data has changed. Called synchronously, once per commit
   * that changes the settled document or carries delta ops, in commit order. A commit that does
   * neither calls nothing, and neither does a selection-only, annotation, or cursor change; the
   * block verse layout, being read-only, never calls it.
   *
   * - `usj` — **Settled**: the document `getUsj()` returns at that moment — pending marker edits
   *   count as already settled; this is what a host saves.
   * - `ops` — **Live**: refers to the editor's current tree as displayed, including marker text
   *   the user is still typing that has not settled yet; the change's delta ops in the live
   *   document's delta coordinates, absent when the change moved no delta (a marker glyph or
   *   attribute text edited, or its undo).
   * - `insertedNodeKey` — **Live**: refers to the editor's current tree as displayed; the editor
   *   key of a node the change inserted into it.
   */
  onUsjChange?: (usj: Usj, ops?: DeltaOp[], source?: DeltaSource, insertedNodeKey?: string) => void;
  /** Callback function when state changes. */
  onStateChange?: ({ canUndo, canRedo, blockMarker, contextMarker }: StateChangeSnapshot) => void;
  /**
   * Callback function when the user asks, by keyboard, to change the selected paragraph marker
   * (an unmodified Enter, or Alt+ArrowDown, while a paragraph marker is selected — see
   * {@link EditorRef.getSelectedParaMarker}). The marker stays selected; apply the choice with
   * {@link EditorRef.formatPara}. Not called in a read-only editor.
   */
  onParaMarkerMenuRequest?: () => void;
  /** Options to configure the editor. */
  options?: EditorOptions;
  /** Logger instance. */
  logger?: TLogger;
}

/**
 * Options to configure the editor.
 *
 * @public
 */
export interface EditorOptions {
  /**
   * Is the editor readonly or editable.
   *
   * Forced to `true` when `view.verseLayout` is `"block"`: that layout regroups verses into blocks
   * and so has no source USJ an edit could be written back to. Passing `false` alongside it is
   * reported through the logger and ignored.
   */
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
  /**
   * Asks the user before an edit removes content the view hides: figures, sidebars, `\periph` and
   * other constructs the editor carries unmodeled, hidden whenever `view.markerMode` is not
   * `"editable"`. Deletes that reach one, and any edit over a selection holding one, wait for the
   * answer (see {@link HiddenContentDeleteHandler}). Dragging such a selection, or cutting it while
   * {@link EditorOptions.copyLimit} is set, is refused. Unset, editing is native.
   */
  onHiddenContentDelete?: HiddenContentDeleteHandler;
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
   * Most text one copy or cut may take, in UTF-16 code units (`String.length`). Fractions round
   * down; negative or `NaN` means `0`; `undefined` means no limit.
   *
   * While set:
   * - A copy or cut that fits the limit is a normal copy or cut, except that Standard view leaves
   *   out the editor's own `application/x-lexical-editor` clipboard format.
   * - One over the limit is shortened silently. It keeps the selection's start and never splits a
   *   character, marker, note or construct (a table, figure or sidebar), so it may take less than
   *   the limit, or nothing. Standard view and the Markers view fit the USFM they copy; other views
   *   write plain text of what they show.
   * - A limited cut removes only what it copied, except that in Standard view a cut ending inside a
   *   character style also removes the style's closing marker, as any Standard-view cut does.
   * - The Select All shortcut is blocked, except in other text fields.
   * - `0` blocks copy and cut.
   */
  copyLimit?: number;
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
