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

### Fixed

- The attribute-run hover color resolves against the host's `--foreground` instead of a fixed
  near-black, which was all but invisible against a dark theme.
- The in-editor marker menu no longer swallows modifier chords: a keystroke carrying Ctrl/Cmd/Alt
  while the menu is open closes the menu and reaches its normal handler instead of being appended to
  the filter.
- A marker flagged as unknown or invalid now carries an accessible description and a tooltip naming
  the problem, rather than communicating it through color alone.
