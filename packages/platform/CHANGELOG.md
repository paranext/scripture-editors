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
  note resolves to the same character in any `markerMode`.
- `generateUsjCss` — builds a project stylesheet from `StyleInfo`.
- `getMarkerMenuItems` / `getEnterMenuItems` / `filterAndRankItems` — the marker-menu item source and
  ranking a host needs to build its own marker palette.
- `defaultStyleInfo` and the `StyleInfo` / `MarkerStyleInfo` / `StyleType` types.
- `EditorOptions.styleInfo`, `EditorOptions.markerSettleDelayMs`,
  `ViewOptions.showParaMarkerPrefixes`, and the caller/separator fields on `UsjNodeOptions`.
- **Ctrl+Space removes character formatting from the selection.** On macOS this is ⌃Space rather than
  ⌘Space, which is Spotlight. It can collide with the macOS input-source switcher and with some IME
  on/off toggles; the handler declines while a composition is active.

### Changed

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

### Fixed

- Typing into an EXPANDED note that holds no content at all (`\f + \f*`) makes what is typed the
  note's content (`\f + text\f*`, no run marker added), where the note's caller is protected from
  typing (`isNoteShellEditable: false`, as in a host's note editor). The keystroke used to land in
  the closing glyph's bytes: shown, but never saved. `selectNote` on such a note puts the caret
  there, instead of leaving it wherever it happened to be.
- A caret-guard repair (an empty verse or note given a caret host, a caret moved past a trailing
  note) no longer leaves its cursor-change tag pending, which made the next keystroke read as a
  caret move and never reach `onUsjChange`.
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
