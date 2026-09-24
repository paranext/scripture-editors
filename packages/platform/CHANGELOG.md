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
- `generateUsjCss` — builds a project stylesheet from `StyleInfo`.
- `getMarkerMenuItems` / `getEnterMenuItems` / `filterAndRankItems` — the marker-menu item source and
  ranking a host needs to build its own marker palette.
- `defaultStyleInfo` and the `StyleInfo` / `MarkerStyleInfo` / `StyleType` types.
- `EditorOptions.styleInfo`, `EditorOptions.markerSettleDelayMs`,
  `ViewOptions.showParaMarkerPrefixes`, and the caller/separator fields on `UsjNodeOptions`.
- **Ctrl+Space removes character formatting from the selection.** On macOS this is ⌃Space rather than
  ⌘Space, which is Spotlight. It can collide with the macOS input-source switcher and with some IME
  on/off toggles; the handler declines while a composition is active.
- **A paragraph's marker can be selected** in the paragraph-structure view (`hasGutterParaMarkers`):
  click it in the gutter, or reach it with ←/→ at a paragraph boundary and walk the marker column
  with ↑/↓. The row is highlighted (`psc-para-marker-selected`, with the editor root's
  `aria-activedescendant` naming the marker), typing returns to the paragraph's text, and
  Backspace/Delete are refused with a
  `psc-para-marker-refused` / `data-para-marker-refused-intent` root signal for the host to render a
  hint from.
- `EditorRef.getSelectedParaMarker()` — the selected paragraph marker's name, or `undefined`.
- `EditorProps.onParaMarkerMenuRequest` — fired on Enter or Alt+↓ while a paragraph marker is
  selected, so the host can open its paragraph dropdown.

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
- A click on a paragraph's gutter marker selects the marker instead of moving the caret to the
  paragraph's text. Book (`\id`) and table markers still move the caret, and so does any click in a
  read-only editor.
- **While a paragraph marker is selected there is no text range.** `EditorRef.getSelection()`
  returns `undefined` after a gutter click where it used to return a caret, and selecting a marker
  by keyboard fires no `onSelectionChange` — the marker selection clears the browser's selection,
  which is what Lexical reports selection changes from. A host that derives the current paragraph
  from either must also read `EditorRef.getSelectedParaMarker()` (or `onStateChange`'s
  `blockMarker`), or its paragraph controls will act on a stale caret.
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

### Fixed

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
