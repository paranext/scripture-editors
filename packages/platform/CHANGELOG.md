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
  sidebar, `\periph`, ...), which is hidden in every view whose `markerMode` is not `"editable"`
  (all but Standard and Unformatted). Answering `"delete"` lets the edit remove it; `"keep"` moves a
  caret past it or cancels the edit, and the request's `canSkip` says which, so a host can label its
  choice to match. The answered edit is dropped, and the drop logged, if the document's text
  changed, the held content was removed, the selection moved or the editor became read-only while
  the host was asking. Under guarded structure protection, a selection holding a verse marker still
  takes two presses: the first arms the delete as before, a press the other way still cancels it,
  and the question is asked on the press that deletes. While the option is set, dragging a
  selection that holds such content is refused, and so is cutting one while `copyLimit` is set.
  Without the option editing is unchanged.

### Fixed

- With `EditorOptions.onHiddenContentDelete` set, edits no longer remove hidden figures, sidebars
  and other constructs the editor does not model without asking, in views that hide them (every
  view whose `markerMode` is not `"editable"`). Before, a character delete next to a figure emptied
  its caption and left the caret stuck in the empty figure; at a paragraph's edge it merged the
  paragraph into a hidden sidebar or dissolved the sidebar into the paragraph; and a word or line
  delete, or any edit over a selection, removed whatever hidden content it covered. Confirmed, a
  character delete removes just the hidden constructs at the caret, without merging or dissolving
  any paragraph.
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
