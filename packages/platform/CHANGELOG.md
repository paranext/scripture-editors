# Changelog

All notable changes to `@eten-tech-foundation/platform-editor` are recorded here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this package follows
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Entries under **Unreleased** describe changes that are committed but not yet published. Move them
under a version heading when that version of this package is published. (No workflow automates
this package's publish today — `Publish Scribe Package` publishes only `packages/scribe`.)

## [Unreleased]

Paratext 9's **Standard view** ported to Paratext 10: marker glyphs are rendered as editable text,
and typing, deleting, or picking a marker resolves through a marker-edit engine rather than being
refused. The public surface grew substantially; nothing was removed.

### Added

- `STANDARD_VIEW_MODE`, plus `"standard"` in `getDefaultViewMode()` and `viewModeToViewNames`.
- `EditorRef` methods: `isFocused`, `commitPendingMarkerEdits`, `setTransientInput`,
  `getMarkerMenuContext`, `applyMarkerMenuSelection`, `splitParagraphWithMarker`,
  `commitTypedMarker`, `commitTypedCloser`.
- `EditorRef.getNoteIndex` — the document-order index of the note with the given key, the
  coordinate a USJ-built notes list (e.g. a footnotes pane) addresses notes by.
- `EditorRef.getNoteKey` — the inverse: the key of the note at a document-order index, so a host
  that addresses notes by index can hand the editor the key `replaceEmbedUpdate` needs.
- `EditorRef.getOpsAfterNote` — the operations for whatever follows a note in its paragraph. A host's
  own note editor holds the note alone, so text found after it there has left the note (a `\f*`
  typed mid-note in an unclosed note); passed after the note op to `replaceEmbedUpdate`, it lands
  after the note in the editor the note is applied to. `replaceEmbedUpdate` inserts any ops after
  the first right after the new embed, once the old one is deleted.
- `EditorRef.takeOpsAfterNote` — removes what follows a note in its paragraph and returns its
  operations, as part of the undo step that left it there, so one undo puts a typed closer and the
  text it moved back as they were. Both are safe to call from a host callback such as
  `onSelectionChange` or `onUsjChange`: a removal made from inside `onUsjChange` shows in `getUsj()`
  and is reported by its own `onUsjChange`.
- `EditorRef.highlightNote` — applies PT9's selected-caller style (class `caller_highlight`: a
  yellow fill with thin blue top and bottom borders) to one note's caller at a time, through
  `NoteCallerHighlightPlugin`; purely presentational, and `undefined` clears it. A host that
  vendors its own copy of `usj-nodes.css` needs that rule in it.
- `EditorRef.selectAfterNote` — puts the caret immediately after a note (past its caller in a
  collapsed note), where PT9 leaves it once the user is done with the note. Never pulls DOM focus
  into an editor that does not already hold it, so a host can park the Scripture caret while the
  user goes on typing in a note editor elsewhere.
- `EditorRef.selectNoteTextOffset` — puts the caret at an offset within a note's own text, counting
  the note's CONTENT only: marker glyphs, attribute display runs, NBSP spacers, an opening glyph's
  separator prefix, and an expanded editable note's caller are all skipped. That makes the offset
  origin the note's USJ text, so a host that captured a position over its own rendering of the same
  note resolves to the same character in any `markerMode`. An optional third argument addresses
  the note's `\cat` category value instead of its content (`field: "category"`), or puts the caret
  inside a marker glyph (`glyph: { index, offset }`: the glyph's order among those at that offset,
  and how far into its text) - a run's `\ft`, `\ft*` or `\+nd`, an unmatched marker, or `\cat` /
  `\cat*`.
- `generateUsjCss` — builds a project stylesheet from `StyleInfo`.
- `getMarkerMenuItems` / `getEnterMenuItems` / `filterAndRankItems` — the marker-menu item source and
  ranking a host needs to build its own marker palette.
- `defaultStyleInfo` and the `StyleInfo` / `MarkerStyleInfo` / `StyleType` types.
- `EditorOptions.styleInfo`, `EditorOptions.markerSettleDelayMs`,
  `ViewOptions.showParaMarkerPrefixes`, and the caller/separator fields on `UsjNodeOptions`.
- `EditorOptions.copyLimit`: the most text one copy or cut may take, in UTF-16 code units
  (fractions round down, negative or `NaN` is `0`, `undefined` is no limit). A copy that fits is a
  normal copy. One over the limit is shortened silently, keeping its start and never splitting a
  character, marker, note or construct, so it may take less than the limit or nothing; Standard
  and Markers views fit the USFM they copy, and other views write plain text of what they show. A
  limited cut removes only what it copied, except that in Standard view a cut ending inside a
  character style also removes the style's closing marker, as any Standard-view cut does. The
  Select All shortcut is blocked, except in other text fields, and `0` blocks copy and cut.
- Dependency on `unicode-segmenter` (`^0.17.3`), which keeps a shortened copy on grapheme cluster
  boundaries whatever the runtime's own segmenter does. It is imported, not bundled.
- **Ctrl+Space removes character formatting from the selection.** On macOS this is ⌃Space rather than
  ⌘Space, which is Spotlight. It can collide with the macOS input-source switcher and with some IME
  on/off toggles; the handler declines while a composition is active.
- `EditorOptions.onHiddenContentDelete`, with the types `HiddenContentDeleteHandler`,
  `HiddenContentDeleteRequest`, `HiddenContentDeleteDecision`, `HiddenContentDeleteAction` and
  `HiddenContentItem`: asks before an edit removes content the view does not show (a figure, a
  sidebar, `\periph`, ...), which is hidden in every view whose `markerMode` is not `"editable"`.
  Left native, such an edit can empty a figure's caption, merge a paragraph into a hidden sidebar
  or dissolve the sidebar into it, all unseen. With the option set, a delete that reaches hidden
  content, and any edit over a selection holding some, waits for the answer. `"delete"` lets the
  edit remove it, and a delete that stops at a paragraph's edge never merges or dissolves a
  paragraph; `"keep"` moves a caret past it or cancels the edit, as the request's `canSkip` says,
  so a host can label its choice to match. Dragging a selection that holds such content is
  refused, and so is cutting one while `copyLimit` is set.
- **A paragraph's marker can be selected** in the paragraph-structure view (`hasGutterParaMarkers`):
  click it in the gutter. Arrow keys do not stop on a marker; arrow movement is unchanged.
  - The row is highlighted (`psc-para-marker-selected`), and the editor root's
    `aria-activedescendant` names the marker, which carries `role="option"` and `aria-selected`.
  - Everywhere else a selected marker counts as a caret at the start of its paragraph's text. The
    scripture reference reports the verse that text starts in, and `insertMarker`, `insertNote`,
    `applyMarkerMenuSelection`, `splitParagraphWithMarker`, `commitTypedMarker` and
    `commitTypedCloser` act there.
  - Any arrow key returns the caret to that position without moving further. Typing, dictation,
    pasting and the emoji picker insert there. A spellcheck replacement or a drop acts where it
    was aimed.
  - Enter with no modifier (a virtual keyboard's too) and Alt+↓ call `onParaMarkerMenuRequest`
    when it is set. Without it, or with a modifier (Shift+Enter, a host's Ctrl+Enter), Enter acts
    at that position, and Alt+↓ acts like any other arrow.
  - Backspace or Delete, or any other deletion such as macOS ⌃H/⌃D or a virtual keyboard's, merges
    the paragraph into the one before it in a single undo step, as removing a paragraph marker
    does. Nothing happens on the first paragraph of a book or chapter, and `"protected"`
    `structureProtectionMode` refuses the merge. Under `"guarded"`, selecting the marker is the
    arming step, so one press merges.
  - Cut, copy and drag are refused, since the marker is not content, unless the browser's selection
    has moved to other text (a right-click, say), which they then use.
- `ViewOptions.allowInvisibleCharacters`: a host passes the project's Paratext
  `AllowInvisibleChars` setting (Platform.Bible's `platformScripture.allowInvisibleCharacters`).
  Such a project stores a no-break space as U+00A0 itself and `~` as an ordinary character, so
  with the option on Standard view keeps `~` as `~`, shows a stored U+00A0 as a blank the width of
  a space (as a no-break space looks), and saves both as themselves — loaded, typed, pasted,
  dropped, copied, and through a marker settle. A U+00A0 typed or pasted is kept as one. The
  Markers view's copy and the Unformatted view's marker settle follow the same spelling. Views
  that hide markers are unaffected, and so is `getViewMode`. Off (the default) is unchanged: `~`
  is a no-break space. Standard view holds such a U+00A0 as an internal stand-in (U+001A), which
  never leaves the editor: `getUsj`, `onUsjChange` and its ops, `getNoteOps`, `getOpsAfterNote`,
  `takeOpsAfterNote`, the clipboard and drag data, annotation callbacks and note-caller previews
  all give U+00A0, and ops given to `applyUpdate`/`replaceEmbedUpdate` may carry U+00A0 for a
  no-break space. With the option on, the ops Standard view hands out carry a space, not U+00A0,
  where the view shows a space of a run as an NBSP.
- `toUsfmNbspSpelling(displayText, viewOptions)`: for a host that reads text from the editor's
  display (a DOM selection, an element's `textContent`) to copy or search it — turns the editor's
  internal stand-in for a stored no-break space back into U+00A0 when
  `ViewOptions.allowInvisibleCharacters` is on, and leaves the text unchanged when it is off (`~`
  is already the project's spelling then). Experimental: expected to be removed once Standard view
  holds a stored no-break space as itself.
- The font family `PlatformEditorNbspStandIn` draws that stand-in as a blank. The editor adds its
  face (`unicode-range: U+1A`) to its document itself; a host stylesheet that sets its own
  Scripture `font-family` must name `PlatformEditorNbspStandIn` FIRST, since a browser draws a
  control character as a box unless the first family has a glyph for it. `generateUsjCss` already
  puts it first in every family it emits, and the `.usfm.formatted-font` rule in `usj-nodes.css`
  leads with it.
- `EditorRef.getSelectedParaMarker()` — the selected paragraph marker's name, or `undefined`.
- `EditorProps.onParaMarkerMenuRequest` — fired on unmodified Enter or Alt+↓ while a paragraph marker is
  selected, so the host can open its paragraph dropdown.
- `EditorRef.insertFirstChapter(verseCount?)` — starts chapter 1 in a book with no chapters: `\c 1`
  and optional empty verses after the book's front matter, the same place the `\` menu's `\c` puts
  it. The verses are left out when the chapter content already holds anything (text, a verse, a
  note, a milestone or a figure), which they would otherwise go above. A no-break space counts as
  whitespace in every view. Returns `false`, changing nothing, outside chapter 1 or once the
  document has a chapter.
- `MarkerMenuContext.canInsertChapter` — set in chapter 1 of a document with no chapter yet, where
  `getMarkerMenuItems` offers `\c`.
- `EditorOptions.onUnstorableTextRemoved`, with the types `UnstorableTextRemovedHandler`,
  `UnstorableTextRemoved` and `UnstorableCharacter`: called once per paste, drop or refused
  keystroke in a view whose `markerMode` is `"hidden"` that removed or refused `\` or `//`, with its
  `source` (`"paste"`, `"drop"` or `"typing"`) and what was `removed` (`"\\"` and `"//"`, each once,
  in the order first met), so the host can tell the user why some of what they pasted, dropped or
  typed is missing. Never called in Standard or Markers view, or when nothing was removed.
- `EditorOptions.requestNativePaste`: asks the host to run the platform's native paste into the
  focused frame (paranext-core runs Electron's `webContents.paste()`), so in the views that hide
  markers Ctrl/Cmd+V, the context menu's Paste and `EditorRef.paste()` carry every clipboard
  format, the view's own node copy included. Standard view never calls it: it pastes the USFM text
  its copy writes, which reading the clipboard delivers.
  The editor calls it from a microtask once its root has focus again; the host resolves `true`
  only after the paste ran, and `false` or rejects only if none did, so the editor falls back to
  reading the clipboard itself. Unset, every paste reads the clipboard asynchronously.

### Changed

- **Delta ops carry a milestone under `ms`**, the key `OTEmbedTypes` declares and
  `isInsertEmbedOpOfType("ms", op)` finds (`{ insert: { ms: { style: "qt-s", sid: "q1" } } }`);
  they carried it under `milestone`. `applyUpdate` and `replaceEmbedUpdate` still accept
  `milestone`, so ops from earlier builds keep their milestones.
- **Standard view turns incoming control characters into spaces.** Every C0 control character but
  tab, line feed and carriage return in a loaded document (text and attribute values), a paste, a
  drop, typed text or applied delta ops becomes a space, so none can be saved as the stand-in for a
  no-break space. Paratext's reader makes the same of all of them but vertical tab (U+000B) and
  form feed (U+000C), which become spaces here on purpose, since JavaScript reads them as
  whitespace.
- **A drop into Standard view goes in as a paste of the same data does** (`\c`/`\id` stripped,
  no-break spaces resolved positionally, lines replayed), instead of through Lexical's own
  insertion, and a drag out of Standard view carries the same USFM text and html a copy writes.
- **`generateUsjCss` names `PlatformEditorNbspStandIn` first in every `font-family` it emits.**
- **The editor hands back every document at the USJ `version` it was given.** `getUsj()`,
  `onUsjChange` and every settled read report the `version` of `defaultUsj` or of the latest
  `setUsj` document (`USJ_VERSION` when it has none), instead of always `USJ_VERSION`, so a host
  that writes the USJ back with `usjToUsxString` gets the version its source served. A `setUsj`
  whose document differs only in `version` reloads, as any other differing document does. Loading
  a document whose version is not `USJ_VERSION` no longer logs a warning.
- **A book with no chapters can start chapter 1 from the `\` menu.** In chapter 1 with no chapter
  yet, the menu offers `\c`; picking it, or `EditorRef.insertMarker("c")`, inserts `\c 1` after the
  book's front matter (the `\id` line, running header, table of contents, titles and introduction)
  and before the first paragraph that needs a chapter, such as a `\s1` or a `\p`, whatever the
  caret position. `\c` stays out of the Enter menu, and out of the `\` menu in every other chapter,
  which already has its marker. `insertMarker("c")` used to do nothing in the `\id` line.
- **Paragraphs the editor creates in the paragraph-structure view get their gutter marker.** An
  Enter split or a multi-line paste used to create a paragraph with no marker glyph, which the
  marker-prefix guard then reset to `\p`; the new paragraph now keeps its marker (an Enter in a `\li2`
  makes another `\li2`) and shows it in the gutter, where it can be selected. Like a split in any
  other view, it drops the space the split leaves at its start. A paragraph-style change made with
  the caret in the paragraph (not its selected marker) now drops that paragraph's leading spaces
  too, as the formatted and standard views already did.
- **Backspace at the start of a line with no verse number merges it into the paragraph before**, in
  the paragraph-structure view, as removing its selected marker does. It used to delete the line's
  gutter glyph and reset its marker to `\p`. `"guarded"` asks for a second press, and
  `"protected"` refuses it.
- **`"guarded"` arms a chapter marker for its two-press delete**, in the formatted and
  paragraph-structure views: Backspace or Delete beside `\c N` first selects the chapter, and the
  second press removes it. While a chapter is armed, the editor root carries
  `data-verse-delete-kind="chapter"` beside `data-verse-delete-intent`, as it does `verse` and
  `selection`, so a host that renders the "press again" hint from these attributes should handle
  the new value.
- **`EditorRef.copy()` and `EditorRef.cut()` with nothing selected now leave the clipboard alone.**
  Previously either one, called at a collapsed caret or with no selection, still wrote to the system
  clipboard — it put a lone `#` there, because `@lexical/clipboard` synthesizes a copy event by
  appending a hidden placeholder element and declines to fill it in before suppressing the browser's
  own copy. A host calling `copy()` speculatively therefore destroyed whatever the user had on the
  clipboard. The signatures are unchanged, so this arrives with no compile-time signal: a host that
  worked around the old behavior (clearing the clipboard first, or reading it back and treating `#`
  as empty) should drop that workaround.
- **Standard view's `text/html` clipboard flavor now carries the same USFM bytes as `text/plain`.** It was
  Lexical's DOM export, which is lossy in two independent ways: `ImmutableNoteCallerNode.exportDOM` puts a
  collapsed note's caller in a `data-caller` attribute with no text, and `UnknownNode.exportDOM` returns a
  null element for every kind, which stops the html walk before the construct's own display children. A
  consumer that reads the fragment's text as USFM — Paratext 9 does — therefore received notes with an empty
  caller and no figures, sidebars, peripherals, refs or optbreaks at all. The flavor is now the selection's
  USFM, HTML-escaped, one `<p><span style="white-space: pre-wrap;">…</span></p>` per line, so both readable
  flavors decode to one document. `application/x-lexical-editor` is unchanged, so an internal paste keeps its
  node-tree fast path. A host that parsed the old export-shaped html (reading `data-caller`, `data-marker` or
  node class names out of it) must read the USFM text instead.
- **A structure-protected editor's pastes now get the same byte normalization as an unprotected one.**
  With `structureProtectionMode: "protected"` the Standard-view paste handler used to decline outright,
  handing every paste to `StructureKeyboardPlugin`'s html sanitizer — which reads `text/html` only. That
  made the protected mode strictly less safe than the unprotected one: a pasted `\c 7` was never
  stripped, so it created a second chapter node and every later save failed in the data provider; NBSPs
  were never normalized positionally; and a Paratext 9 clipboard's note was never decoded. The handler
  now owns a protected paste too. Two things still differ under protection: a selection
  `StructureKeyboardPlugin` refuses to replace (a range spanning a paragraph boundary, or containing a
  verse marker) is declined so that refusal keeps one owner, and a multi-line payload's newlines become
  single spaces instead of paragraph splits, so a protected document never gains a block from a paste.
- **A Paratext 9 clipboard's `text/html` is now decoded to USFM on paste, and wins over that clipboard's own
  `text/plain`.** P9 writes `text/plain` as the selection's visible text and keeps the USFM its own paste
  reads in `CF_HTML`, as escaped `<!--usfm:…-->` comments, so pasting a P9 footnote inserted the caller glyph
  alone and lost the note. Every other source's `text/plain` still wins whenever present: the decoder
  recognizes P9's html by signature (a `usfm:` comment, or an element carrying both a `usfm_<name>` class and
  `usfmopen`/`usfmclosed`) and declines everything else, this editor's own html included.
- `EditorRef.insertMarker` returns `string | undefined` (was `void`) — the created node's key.
- `NoteCallerOnClick` takes a 7th parameter, `getNoteIndex: () => number | undefined`.
- **Marker menu descriptions no longer carry the `(basic)` token.** `usfm.sty` marks commonly-used
  markers by appending `(basic)` to the description; that token is metadata, and hosts render
  `description` as the visible label, so it was reaching users as "Introduction prose paragraph
  (basic)". `MarkerMenuItem.description` is now the description without it. **The information is not
  lost — read `MarkerMenuItem.isBasic`**, which is still derived from the original description.
- `getUsj()` returns the settled document in editable marker modes. When nothing is pending and no
  transient input is declared it short-circuits to the previous behavior, so the other view modes are
  unaffected.
- A click on a paragraph's gutter marker selects the marker instead of moving the caret to the
  paragraph's text. Book (`\id`) and table markers still move the caret, and so does any click in a
  read-only editor, which puts it past the paragraph's leading verse number.
- **While a paragraph marker is selected there is no text range.** Every marker selection fires
  `onSelectionChange(undefined)`, and `EditorRef.getSelection()` returns `undefined` where it used to
  return a caret. A host that derives the current paragraph from them must also read
  `EditorRef.getSelectedParaMarker()` (or `onStateChange`'s `blockMarker`), or its paragraph controls
  will act on a stale caret. `getSelectedParaMarker()` reads the committed state, so call it after
  `onSelectionChange` returns rather than inside it.
- `EditorRef.focus()` returns keyboard focus to the editor while a paragraph marker is selected;
  Lexical's own focus handling did so only for a text range.
- `EditorRef.formatPara` accepts a selected paragraph marker: it retags that paragraph in place —
  keeping its attributes and identity — and keeps the marker selected.
- **A Standard-view copy whose selection cuts through an opaque construct — a figure, sidebar,
  periph, ref, table or optbreak — no longer writes the private `application/x-lexical-editor`
  flavor.** That flavor carries a construct WHOLE and cannot carry part of one: a construct's text is
  token-mode, which `@lexical/selection` refuses to slice, so a caption selected from its third
  character to its seventh went on the clipboard as a COMPLETE figure — wrapper, attributes and the
  whole caption — while the two readable flavors carried the four selected characters. Pasting that
  through a native paste event inserted a second figure, and a save persisted it. `text/plain` and
  `text/html` are unchanged and still carry exactly the selected bytes. A host that reads the private
  flavor off the clipboard must handle its absence for such a selection; a host pasting through
  `navigator.clipboard.read()` (the editor's own Ctrl+V and context-menu Paste) sees no change, since
  that API never exposed the flavor.
- **A Standard-view copy whose selection touches a book or chapter line no longer writes the private
  `application/x-lexical-editor` flavor either.** A native paste event rebuilt the copied
  `ChapterNode`/`BookNode` from it verbatim, past the `\c`/`\id` strip every text paste gets, and a
  second chapter node made every later save of that chapter fail. The readable flavors are unchanged.
- **The read-only Markers view (`markerMode: "visible"`) now copies USFM.** Its copy used to be the
  display text — no note caller, no space after a char marker, no verse or chapter numbers, no
  figure markers, and a note layout's spacer NBSPs — so pasting it anywhere produced broken USFM.
  It now writes the same bytes a Standard-view copy of the same range writes, in `text/plain` and
  `text/html`, and no `application/x-lexical-editor` flavor. A cut in a read-only editor copies and
  removes nothing.
- **A structure-protected editor's cut of a selection `StructureKeyboardPlugin` refuses to replace is
  now refused whole.** With `structureProtectionMode: "protected"`, the Standard-view cut handler
  claimed the cut ahead of that refusal and removed the range — a paragraph boundary or a verse
  marker included. It now declines, as the paste handler already did, so nothing is copied or
  removed.
- **The views that hide markers leave `\` and `//` out of a paste, drop or typing, and keep the
  rest.** A paste or drop whose plain text held any `\` or `/` was refused whole, without a word
  to the user, so a URL, a date or "and/or" could not be pasted, while a paste carrying only html
  went in unchecked. Now every `\` is removed, then every `//` (paired from the left, so `///`
  leaves `/`), then a `/` that would touch a `/` already in the document; a lone `/` stays, and
  `https://example.org` goes in as `https:example.org`. This covers plain text, html, the editor's
  own node copy and, under `"protected"` structure, what `StructureKeyboardPlugin`'s sanitizer
  inserts. A stray marker the document shows (`\*`) survives a cut and paste back through the html
  or node copy, except under `"protected"` structure, whose sanitizer keeps no such element, and a
  plain-text paste of it loses its `\`. Typing a `\`, or a `/` beside a `/`, is refused at the
  keystroke; text typed without a keystroke (a virtual keyboard, autocorrect) is filtered the same
  way, and text an input method composes is not filtered. A paste or drop left with nothing to
  insert changes nothing. Html pasted or dropped there loses its marker glyph elements first, as it
  already did under `"protected"` structure: a glyph is presentation, and read back it went in as
  marker text, so a drag-move across a paragraph break in the paragraph-structure view (which
  carries the next paragraph's gutter glyph) or a paste of a Markers-view copy would have inserted
  text such as `q1 ` that the user never wrote. The read-only Markers view still refuses `\` and
  `/`, and Standard view is unchanged.
- **A copy in the views that hide markers tags its node copy (`application/x-lexical-editor`)
  with the namespace `"platformEditor/hidden-markers"`**, and only those views read it back. A
  copy from Standard view pasted into one of them, or one of theirs pasted into Standard view,
  goes in by its html or plain text instead of rebuilding the other view's node shapes. The node
  copy holds no gutter marker glyph, and is not written for a selection with either end inside a
  construct the view hides (a figure, an optional break, any other unknown construct, or a table)
  or one that touches a book or chapter line.

### Fixed

- **A copy from the block-verse layout pastes as normal paragraphs.** The text grid's aligned column
  cuts a paragraph into one fragment per verse for its rows, and its node copy carried those
  fragments, so a Ctrl+V into paragraph-structure started a paragraph at each verse, moved the space
  before the verse with it and could leave an empty `\p`; under `"protected"` structure the pieces
  joined with an extra space. The node copy now rejoins the fragments of one paragraph. What the
  column shows, and its plain text and html, are unchanged.
- **A copy from a view that shows markers pastes into a view that hides them without its markers.**
  Standard view and the Footnotes pane's row editor write USFM as their html and plain text, so a
  copy of `1 \ft TR and ` saved as `1 ft TR and `, a marker's name as a word of Scripture. A paste
  that carries their `"platformEditor"` node copy now loses its marker tokens first (`1 TR and `),
  with no `onUnstorableTextRemoved` report for them. A verse's number, a note's caller and an
  attribute list stay as text. A paste without that node copy (another program's, or from a host
  with no native paste) is unchanged, as are Standard and Markers views.
- Ctrl+V and Ctrl+Shift+V no longer paste into a read-only editor (`isReadonly`, e.g. a preview or a
  resource text). `ClipboardPlugin` listens for its shortcuts on the editor root itself, outside
  Lexical's read-only gate, so the clipboard was inserted and reported through `onUsjChange`. A
  read-only editor still copies on Ctrl+C; Ctrl+X no longer dispatches a cut there.
- In Standard view, a no-break space in an attribute value (a char span's `|lemma`, a milestone's
  `who`, a figure's `src`, a note's `\cat`, a verse's `\va`/`\vp`, a chapter's `\ca`/`\cp`) shows
  as the body text spells one (`~`, or a blank where `ViewOptions.allowInvisibleCharacters` is on)
  and stays a no-break space through a settle of its paragraph, an edit to the value, copy and
  paste, and an unwrap of its span; it was saved as a plain space. Unformatted view's settle keeps
  it too.
- Placing the caret in an empty verse no longer moves the next verse number onto a new line, and the
  caret is drawn right after the empty verse's number. The verse holding the caret now carries
  `psc-empty-text-active` instead of no class, and its caret host carries `data-caret-host`. A host
  that vendors its own copy of `usj-nodes.css` needs the `psc-empty-text-active` and
  `[data-caret-host]` rules and the `--psc-empty-verse-ellipsis-width` variable in it, or it keeps
  the old reflow.
- A paragraph that `applyUpdate` creates keeps a space at the start of its text. The editor used to
  drop it as it does for an Enter split, without reporting the change, so the document fell one
  character out of step with the ops applied.
- Changing the paragraph style with the caret at the end of a paragraph whose text starts with a
  space no longer throws. Dropping that space left the caret past the end of the shortened text.
- The caller of an unclosed note (which renders expanded, its caller as text) can be deleted; the
  note keeps an empty caller and shows both separators (`\f  \fr …`), as Paratext 9 does.
- Typing a note's own closer (`\f*`) into an unclosed note closes it there; what followed the
  closer moves after the note. The note stays the same node, so `onUsjChange` does not report it as
  an inserted note.
- After typing an undeclared marker (`\df `) the caret stays where it was typed instead of landing
  in the next closing glyph.
- A drag across a protected note shell that is typed or deleted over leaves the shell intact.
- In a note editor that protects the note's shell (`isNoteShellEditable: false`), a forward Delete
  with the caret just before the note no longer removes its opening glyph and unwraps the note;
  a forward Delete with the caret right after the caller deletes the content that follows it; and a
  forward line delete in content that wraps onto more lines stops at the end of the visual line
  rather than at the note's closer.
- Typing a note's own closer (`\f*`) in a view that shows the note expanded (Unformatted) leaves the
  caret after the note, so what is typed next joins the paragraph instead of the note's last run.
- `selectAfterNote` on a note that ends an unclosed char span (`\wj … \f + …\f*` with no `\wj*`)
  leaves the caret after the note instead of inside its hidden content.
- Text typed right after a note's closing glyph (`\f*Z`) moves after the note as it is typed, the
  way text typed after a char span's closer already did, instead of going into the glyph and being
  lost on save. A browser puts the caret there when it reads back a caret at the end of a line a
  note ends: clicking at the end of such a line in Unformatted view, or typing after closing a note
  that ends an unclosed char span.
- A selection that reaches into a collapsed note (select to the end of the document from a paragraph
  that a footnote ends) takes the whole note, since only its caller is on screen. Copying it
  carried `\f + ` with the note's content missing, and cutting or typing over it left half a note.
- End, Ctrl+End and Cmd+Down in a block that a collapsed note ends leave the caret past the note.
  The browser selected the note instead, so the next typing, paste or deletion replaced it.
- `getNoteOps`, `getOpsAfterNote` and `takeOpsAfterNote` no longer break an update in progress when
  a host calls them from a callback that runs during one.
- Standard view saves spaces at the start of a note's content as part of the caller's separator
  (`\f +  text` saves as `\f + text`, as Paratext 9 reformats it), so a space typed after an
  expanded note's caller no longer becomes note content. A note with a category keeps a space after
  its `\cat*`, and a no-break space (`~`) stays.
- A forward Delete through an opening glyph removes one character at a time: the press that
  removes the glyph's last character keeps its separator as the text's own space and leaves the
  caret where it was, instead of also removing the separator and jumping to the end of the span.
- Backspace, a word delete or a line delete with the caret at a protected note shell's trailing
  edge (`isNoteShellEditable: false`) no longer removes the caller; such a delete is refused or
  stops at the shell's edge.
- A note's closing glyph is protected where its shell is (`isNoteShellEditable: false`): a caret
  in, on or past the closer moves to the end of the note's content, and Backspace, forward Delete
  and typing over a range can no longer remove or prepend to it.
- An undeclared marker typed in a note that has a `\cat` run stays a sibling of the run it ends,
  instead of being spliced back inside the open `\ft` (shown as `\+df`) with the caret landing on
  the `\cat`.
- `onUsjChange` reports `insertedNodeKey` only for a node the change added. An edit inside an
  existing note (an unclosed note, which renders expanded) was reported as inserting that note.
- Applying a note to an editor that shows it collapsed keeps text written directly in the note
  (`\f + x\ft a\f*`); it was replaced by the collapsed layout's spacer.
- A selection reaching into a protected note shell (`ViewOptions.isNoteShellEditable: false`) is
  narrowed to the note's content, so typing or deleting over it can no longer remove the shell.
- Clicking or arrowing past a collapsed note that ends an unclosed char span leaves a visible caret
  after the note instead of losing it.
- Deleting the backslash of a char marker the stylesheet does not declare turns it back into text,
  as it does for a declared marker.
- Typing into an EXPANDED note that holds no content at all (`\f + \f*`) makes what is typed the
  note's content (`\f + text\f*`, no run marker added), where the note's caller is protected from
  typing (`isNoteShellEditable: false`, as in a host's note editor). The keystroke used to land in
  the closing glyph's bytes: shown, but never saved. `selectNote` on such a note puts the caret
  there, instead of leaving it wherever it happened to be.
- A caret-guard repair (an empty verse or note given a caret host, a caret moved past a trailing
  note) no longer leaves its cursor-change tag pending, which made the next keystroke read as a
  caret move and never reach `onUsjChange`.
- In the paragraph-structure view, a guarded two-step paragraph merge no longer leaves the merged
  paragraph's gutter marker in the middle of the paragraph it joined.
- In the paragraph-structure view, Undo after a guarded two-step delete removes an empty paragraph
  (an empty `\b`) brings the paragraph back. It used to fold the removal into the undo step before
  it, so Undo either did nothing or also took back the edit before.
- Redo works after an Undo leaves the caret beside an empty verse or a trailing note. The invisible
  caret host the editor gives such a caret no longer becomes an undo step of its own, which cleared
  the redo history.
- In the paragraph-structure view, Enter at a word break (`In| the`) no longer leaves the break's
  space at the start of the new paragraph: `getUsj()` reports `the`, as the other views do, where it
  reported ` the`.

- In Standard view, the USJ positions the editor reports and accepts (selections, annotations)
  after a milestone, a verse's `\va`/`\vp`, or a chapter's `\ca` were one content item too far:
  the wrapper that carries the attribute display run was counted as content.
- The attribute-run hover color resolves against the host's `--foreground` instead of a fixed
  near-black, which was all but invisible against a dark theme.
- The in-editor marker menu no longer swallows modifier chords: a keystroke carrying Ctrl/Cmd/Alt
  while the menu is open closes the menu and reaches its normal handler instead of being appended to
  the filter.
- A marker flagged as unknown or invalid now carries an accessible description and a tooltip naming
  the problem, rather than communicating it through color alone.
- `applyUpdate` (and `replaceEmbedUpdate`, which goes through it) no longer pulls DOM focus into an
  editor that does not hold focus. Lexical reconciles the DOM selection after every commit, and
  setting a DOM selection inside a `contenteditable` focuses it, so a host editing a note in a
  separate editor lost its caret to the main editor on each apply. A focused editor still
  reconciles, and the explicit caret APIs (`focus`, `setSelection`, `selectNote`) are unchanged.
- A caret parked by `selectAfterNote` while the editor was unfocused is where a later `focus()`
  lands. The parking commit's skip-DOM-selection tag no longer outlives it (Lexical keeps a
  selection-only commit's tags for the next commit, so `focus()` focused nothing), and the stale
  DOM selection it left inside the editor is cleared rather than read back over the parked caret.
- `commitPendingMarkerEdits` follows `applyUpdate`'s focus rule: called while another element holds
  focus (a host settling this editor as the user leaves it), it no longer writes the DOM selection,
  and with it focus, back into this editor.
- `selectAfterNote` reports the parked caret through `onSelectionChange` when it writes no DOM
  selection, so a host acting "at the selection" (inserting a comment) uses where the caret now is.
- A caret before a verse number reports the verse the chapter actually has before it: `\v 1-2`
  before `\v 3`, `\v 2a` before `\v 2b`, `\v 20` before `\v 22`, rather than the number minus
  one. A scroll-reference navigation to the verse the caret already reports - including verse 0 for
  a heading before verse 1 - no longer moves it.
- `selectNote` on an expanded note whose last run is explicitly closed (`\ft a\ft*`) lands ahead
  of the run's closing glyph, where typing extends the run.
- `selectNoteTextOffset` counts text written directly in a note (outside any `\ft`-style run) and
  never lands inside an unmatched closer's glyph.
- `highlightNote` highlights the caller of a note built expanded (an unclosed note) too.
- `getNoteIndex`, `getNoteKey` and `highlightNote` are safe to call from a callback that runs
  inside one of the editor's own updates, such as `onSelectionChange`.
- A scrRef-driven caret placement (an external navigation, or the caret's own mount-time placement)
  no longer leaves its cursor-change tag pending on the next commit, which could make a marker
  inserted (or a character typed) right after navigating to a new reference read as a caret move
  and never reach `onUsjChange`.
- `commitPendingMarkerEdits`, `applyUpdate`, and `selectAfterNote` no longer leave a stale
  tag-release listener armed when their own update commits nothing at all (nothing pending to
  settle, an empty `ops`, or a stale note key) - it stayed registered and could later strip a tag
  from an unrelated commit.
- A remote `applyUpdate` (while the editor is unfocused) no longer clears a DOM selection that
  already matches what Lexical committed - a selection the user made just before the update lands
  is left alone instead of being wiped with nothing to restore it.
- `selectAfterNote`, called while unfocused, reports the new reference through `onScrRefChange` the
  same way a live caret move would; parking the caret writes no DOM selection to drive that report
  on its own.
- `isFocused()` agrees with the internal focus check every other method here uses: a focused
  decorator inside the editor (a collapsed note's caller button) counts as the user being in this
  editor, not just the root element itself.
- `selectNote` lands at the end of a closed run that holds a nested span, in a note loaded through
  `applyUpdate`, instead of before the span or inside it.
- The right-click menu claims the Escape that closes it (`preventDefault`), so a host listening
  for Escape further along can tell it was spent closing the menu.
- Typing right after an expanded note's editable caller (`\f + `, shell left editable — Standard
  view's Markers view, or any unclosed note) saves what was typed as the note's own content,
  instead of the whole diverged caller slot leaking into content while the caller itself stayed
  `+` in the saved USJ.
- `applyUpdate` keeps a nested char span that opens a run (`\ft \+nd LORD\+nd* said`): it builds
  the nested span with its glyphs inside it, as it already did for one mid-run, and no longer
  loses it. Text continuing a closed run lands inside the run, ahead of its closing glyph.
- The note-shell and trailing-note caret guards release their cursor-change tag after a
  correction, so the keystroke right after it reaches `onUsjChange`.
- Enter inside an expanded note does nothing in a view whose `markerMode` is not `"editable"`. It
  split the paragraph holding the note and left the caret outside it, so what was typed next was
  lost on save.
- Standard view saves no space typed right after a char span's opener (`\nd  things\nd*` saves as
  `\nd things\nd*`), and a span holding only spaces saves empty, as Paratext 9 saves both. The
  screen keeps the typed spaces; a no-break space (`~`) after the opener stays.
- A nameless character marker (`\f + \ft \ b\f*`, which ParatextData reads as `<char style="">`)
  keeps `marker: ""` in `getUsj()` instead of losing its marker, so the USX written from it is the
  USX loaded.
- In the views without a span separator (those that hide markers, and the read-only Markers view),
  an author's no-break space left alone in a char span, after the rest of `\nd ~x\nd*` is deleted
  or typed into an empty span, is saved instead of being dropped as the empty span's placeholder,
  and a note's `\ft ~x` keeps its `~`.
- In the views that hide markers, typing over or deleting a range that crosses a char span's edge
  or a collapsed note takes only the selected text: the text after the span stays outside it, and
  a range starting just before a collapsed note no longer loses the typed text and the rest of the
  range into the note.
- In the views that hide markers, joining a paragraph into an empty `\b` before it (Backspace at
  the paragraph's start, Delete in the blank line, or typing over a range across the break) keeps
  the paragraph, with its own marker, and drops the blank line, as Paratext 9 does. It kept `\b`
  on the joined text, and in the formatted view could delete that text.
- Undo takes back an Enter typed in front of a char span or a note in the formatted view, instead
  of folding it into the step before.
- Delete just before a collapsed note in the views that hide markers removes the note and keeps
  the text around it, instead of throwing and discarding the edit.
- Two alike char spans (same marker and attributes) that a deletion leaves side by side stay two
  spans in the views that hide markers, as in Standard view and Paratext 9. Deleting the space
  between `\w one|x\w*` and `\w two|x\w*`, or joining the paragraphs they end and start, made them
  one word. A span that Enter cut in two is still one span again when Backspace joins the
  paragraphs back.
- Plain text pasted inside a char span or a note stays inside it. Lexical's own paste split the
  span around the text, or put the text after the note.
- Marking the text right after a char span with the span's own marker makes a second span in the
  views that hide markers, as in Standard view and Paratext 9: `\nd` on "God" after `\nd Lord\nd*`
  saved `\nd LordGod\nd*`. A selection that reaches into part of such a span and past it extends
  the span over the selection instead of nesting a copy inside it (Paratext 9 mangles the line
  there).
- Applying a character marker to a selection that starts or ends inside a char span, or holds a
  whole span from the text around it, no longer freezes the editor. A span the selection holds
  whole moves into the new span (`\wj \+nd Lord\+nd* \wj*`), including one selected from its
  opening glyph to its closing glyph in Standard view, which lost the span (`\wj Lord\wj**`).
- Standard view refuses to apply a character marker across a marker border — a selection whose two
  ends sit in different spans, so it holds part of a span's glyphs, or with an end inside a closing
  marker — and logs a warning instead of changing anything. It nested a copy of the span, left an empty span, an unmatched closer or the
  glyph's bytes as text, or lost the span. Marking text beside a span, inside one, or a whole span
  from the text around it still works, and so does applying a footnote or cross-reference content
  marker across a nested span, which closes and reopens the spans it crosses.
- Standard view refuses to apply a character marker to a selection lying inside one marker glyph,
  which holds none of the text, and logs a warning. The glyph's bytes became the new span's text,
  and for a footnote content marker (`\fq` over part of `\ft`) the edit looped until Lexical
  aborted it.
- Applying a character marker to a selection holding a whole note (`\wj` over a verse with a
  footnote in it) moves the note into the new span, its content untouched. It marked the note's
  content instead, and in Standard view replaced the note's `\ft`.
- Marking a whole span together with the text after it keeps the space between them; it moved to
  before the new span, and in Standard view was lost. A selection that starts with a space leaves
  the space outside the new span, where Standard view keeps it; it was dropped from the file there,
  joining the words either side.
- In the unformatted view, a note's `\ft ~\ft*` or `\fk ~\+wj x\+wj*\fk*` keeps its `~` in
  `getNoteOps` and `getEditorDelta`, and through the footnote popover's save and the footnotes
  pane's round trip, which lost it.
- Delta-doc positions after a char span whose whole text is an author's no-break space
  (`\nd ~\nd*`) count that `~`, as the ops stream does; in the views without a separator after the
  opener they were one short, so a keystroke after such a span went out with a retain one too
  small.
- In the views that hide markers, removing or replacing a character marker over a whole span
  selected up to the start of the text after it — where a double-click or drag over the span ends
  — acts on the whole span. Lexical records that end as a child index on the span, which was read
  as a text offset, so `removeCharacterMarker()` over `\add God\add*` left `G\add od\add*`, and removing `\nd`
  from a span holding a nested one changed nothing.
- A copy in the views that hide markers no longer carries text the view does not show. The
  paragraph-structure view put each paragraph's gutter marker (`\q1 `) into `text/plain` and
  `text/html`, and every such view put a hidden figure's caption into `text/plain`. A collapsed
  note's text stays in `text/plain`, since a plain-text paste is the only way it reaches another
  program; a copy over `copyLimit` still writes plain text alone and leaves the note text out, and
  now leaves out gutter markers and hidden constructs too.
- A multi-line plain-text paste or drop under `"protected"` structure in the views that hide markers
  stays in the paragraph at the caret, its lines joined by one space (a run of line breaks counts
  as one, a trailing one is dropped, and each tab in it becomes a space), as an html paste's
  paragraphs are.
  It made a new paragraph per line, which protected structure exists to prevent.
- A copy and paste within the views that hide markers reproduces the copied Scripture exactly:
  character and note attributes, note details, milestones, alternate and published verse numbers,
  optional breaks and figures all survive, under every structure protection (under `"protected"`
  the paste still joins paragraphs and drops verses and chapters). The paste took the html, which
  carries none of these; it now takes the node copy whenever the paste carries one — Ctrl+V, the
  context menu's Paste and the Edit menu's Paste, when the host runs a native paste
  (`EditorOptions.requestNativePaste`). A cut and paste back of a caption-less figure or an optional
  break restores it; the node copy left it out. Html from another program is pasted as before.
- A note pasted in the editor opens like the one copied: clicking its caller calls
  `nodes.noteCallerOnClick`. A caller rebuilt from the editor's own node copy had no click handler,
  so the click did nothing, in every view.
- In the views that hide markers, a pasted tab is saved as a space however it arrives, as a paste
  that reads the clipboard itself already saved it: a native paste (`EditorOptions.requestNativePaste`,
  or a host menu's own Paste), a drop, and html whose whitespace is preformatted. Such a tab was
  saved as nothing, joining the words either side of it.
