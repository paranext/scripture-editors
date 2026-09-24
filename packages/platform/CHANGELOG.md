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

### Fixed

- The attribute-run hover color resolves against the host's `--foreground` instead of a fixed
  near-black, which was all but invisible against a dark theme.
- The in-editor marker menu no longer swallows modifier chords: a keystroke carrying Ctrl/Cmd/Alt
  while the menu is open closes the menu and reaches its normal handler instead of being appended to
  the filter.
- A marker flagged as unknown or invalid now carries an accessible description and a tooltip naming
  the problem, rather than communicating it through color alone.
