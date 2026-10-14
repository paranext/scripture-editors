# Standard View Invariants — the editor engine

> Read this before changing the marker-edit engine, the settle machinery, the display-run registry,
> or the USFM tokenizer. It is the contract those pieces keep with each other. Ignoring one of these
> is how the same defect class keeps coming back.

Standard view shows USFM markers as editable text. That one product decision generates everything
below: if a marker glyph is on screen and the caret can enter it, the glyph is part of the document,
and every layer has to agree on what "the document" means.

**This document covers what THIS repo owns.** The host repo (`paranext-core`) owns the USJ-to-USFM
writer, the markers map, the palette's key semantics, and the C# serialization gate, and carries its
own half at `.context/standards/Standard-View-Invariants.md`. Neither half assumes you have the
other checked out; if you do, read both.

**What this is not.** Not a design doc and not a work plan. It records only the rules that more than
one area depends on, so parallel work cannot drift.

---

## 1. Governing invariants

### I. Displayed bytes are the document

Every byte the user can place a caret in is document text. Changing it changes the file, by
**re-tokenizing the displayed bytes**.

Corollaries:

- **Never heal against a user edit.** Healing exists for drift introduced by non-user code paths.
- **Structural truth is re-tokenization.** In-place mutation is an optimization, valid only where
  re-tokenization is provably identity.
- **No silent no-ops.** A keystroke either changes the document or is visibly refused. Accepting a
  keystroke and discarding it later is the failure this rule exists to prevent.

The one ratified exception is space-run collapse — see §4.

### II. One position language

Display bytes (marker glyphs, separators, attribute-run text, verse glyphs, para prefixes) are
excluded from document positions in exactly ONE place. Caret anchoring across a rebuild, OT content
op offsets, and delta-doc positions all resolve through it.

The caret/selection half landed: `libs/shared/src/nodes/usj/glyphPositions.utils.ts` decides which
rendered bytes are display by the property that _a node's text is a picture of its own state_, and
re-expresses a point so no glyph is an operand of the edit about to run. Three separately-reported
bugs turned out to be one cut reached from three gestures.

The collab half is not unified yet: the ops stream
(`libs/shared-react/src/plugins/usj/collab/editor-delta.adaptor.ts`) and the delta-doc length side
(`delta-common.utils.ts`) still keep separate exclusion predicates, and they already differ by one
arm. **Do not add a third private exclusion; extend the shared one** — the reason this invariant is
written down is that every display-byte class which got its own exclusion had to be found and fixed
separately, once per consumer, each after a bug.

### III. One lifecycle for engine-owned display things

Every kind the engine owns — attribute runs, milestone runs, verse `\va`/`\vp` runs, opener glyphs,
closing glyphs, the nested `+`, opener separators, para-marker prefixes, optbreak bytes — carries
the same four duties:

1. **construct** canonically,
2. **heal** non-user drift,
3. **pend** on user edit or deletion,
4. **settle** on departure.

A kind wired for some duties and not others is the recurring defect shape ("missing quadrant"). New
kinds join `libs/shared/src/displayRun/displayRunRegistry.ts`; they do not hand-wire a fifth
quartet.

### IV. Settle has two clocks and one definition

- **On screen**: caret departure, OR a Paratext-9-style debounce timer.
- **For consumers**: `getUsj()` returns settled output without mutating the editor.

All paths run the SAME settle computation. Divergence between them is a defect, not a trade-off.

A settle is **never its own undo entry**. Undo undoes what the USER did, so every settle merges into
the history entry of the edit that provoked it. A settle commit is still a real content change and
must reach USJ-change consumers, which is why it carries `MARKER_SETTLE_TAG` alongside the merge
tag. A narrower gate — merge only settles that are USFM-equivalent, by comparing canonical USJ
before and after — was considered and **rejected on cost** (two full-document serializations per
settle, on both clocks). Do not reintroduce it.

### V. A loaded document is a transform fixed point

Load a document, dirty every node, run the update, serialize. The output must equal the input.

Any difference means a transform fabricated content, deleted content, or the load shape was not
canonical. All three are bugs. This is machine-checkable, and it is checked:
`packages/platform/src/editor/markerEdit/tier2Rebuild.corpus.test.tsx` runs it over the 2SA corpus.
Transforms do not run on `setEditorState` — they run when a node is dirtied — so a transform that
fabricates or deletes content does so on the user's first edit to a region, not at load. That is why
the net has to dirty nodes rather than merely load them.

---

## 2. Derived rules

Each was settled by investigation or product decision. Do not re-derive them.

### Heal by provenance, never by caret proximity

Whether to restore an engine-owned byte depends on WHO removed it, not on where the caret is.
Caret-proximity heuristics are what let deletions silently miss their pend. Machine drift heals; a
user edit pends.

### The tokenize-identity predicate

> Restore a removed engine-owned byte iff the bytes tokenize IDENTICALLY without it.

Applied to the opener separator:

| Bytes               | Without the space | Same meaning?                                           |
| ------------------- | ----------------- | ------------------------------------------------------- |
| `\nd` + `\wj stuff` | `\nd\wj stuff`    | yes — the name scan stops at `\` either way. **Heal.**  |
| `\nd` + `\|x="y"`   | `\nd\|x="y"`      | yes — the name scan stops at `\|` either way. **Heal.** |
| `\nd` + `things`    | `\ndthings`       | no — the marker is now `ndthings`. **Rename.**          |
| `\nd` + `*stuff`    | `\nd*stuff`       | **no — that is a CLOSING marker.** Do not heal.         |

The last row is why the rule is defined by MEANING and not by a character class: `*` is one of the
tokenizer's four name-scan terminators (`\`, `|`, whitespace, `*`), so an allowlist built from
terminators would wrongly heal it and silently stop the user typing a closer.

The predicate lives beside the tokenizer, in `libs/shared/src/nodes/usj/markerSeparators.utils.ts`,
so it cannot drift from it.

### Leading-attribute whitespace collapses

Whitespace between a marker and its leading-attribute value is structural and collapses to one.

Which markers have leading attributes, and in what order, comes from the host's markers map field
`leadingAttributes` — **not** from a list maintained here. So `\v  5` is verse 5, `\c  3` is chapter
3, `\f  +` has caller `+`, `\id  MAT` has code `MAT`: one rule, no per-marker exceptions.

Consequence: a space typed next to a verse cannot demote its number. Only a non-space character
after the number does that — `\v 7 5` is verse 7 followed by body text `5`.

### Note callers are atomic in Standard view

A collapsed note caller is ONE unit: arrow keys step over it whole, deletion removes it whole, and
its text is not editable by typing. This matches Paratext 9; the caller is changed through the host's
footnote-editor UI instead.

This is a VIEW-level rule keyed on `noteMode === "collapsed"`, not a node-level one. **The expanded
note shape is used by two surfaces with opposite needs** — the host's footnote-editor popover, where
the marker and caller are governed by dropdowns and should not be typeable, and the main editor's
Markers view, which has no such UI and wants direct caller editing. Any rule about editing a note's
shell has to be keyed on a view option, never on `noteMode: "expanded"` alone.

**`token` mode alone does NOT make the shell atomic.** `ViewOptions.isNoteShellEditable: false`
renders the opening glyph and the caller in Lexical's `token` mode, which is necessary but not
sufficient: `token` only redirects an insertion at a token node's BOUNDARY, and even there it picks
the right sibling at exactly one of them. A caret strictly INSIDE a token node replaces the whole
node with the typed character — the measured results are a caller replaced by the keystroke (which
then leaks into the note's content on save) and, for the opening glyph, a note destroyed outright,
since a note that has lost its opener is unwrapped as deletion damage. `NoteShellCaretGuardPlugin`
(shared-react) is what actually keeps the caret out: it corrects any caret that comes to rest in the
shell, in the same update, before anything can be typed.

The shell has exactly ONE caret position: the **trailing edge of its last node** — the caller's own
end — which is where `token` mode redirects typing forward into the note's content. At the shell's
leading edge Lexical inserts INSIDE the note before the opening glyph (a `NoteNode` does not refuse
text before it), and at the seam between the glyph and the caller it inserts between them.

A RANGE that reaches into the shell (a double-click on the caller, a drag from the shell into the
content, select-all) is narrowed to the note's content, never grown to take in the whole shell:
typing or deleting over a range that holds the shell removes it and unwraps the note. A range
wholly inside the shell collapses to its trailing edge.

**Text written directly in a note is content, even in a collapsed note.** A collapsed note's layout
puts a tagged NBSP spacer (`$createMarkerTrailingSeparator`) after each of its top-level nodes, and
`NoteNodePlugin` resets only those spacers. Untagged text directly in the note (`\f + x\ft a\f*`,
`\f + x\f*`, as a host's note editor applies it) must survive: losing it on apply also strands the
host's session, since the apply still replaces the note node.

Consequence for tests: asserting that the mode is `token` proves nothing about whether the shell is
protected. Assert what the DOCUMENT does under a keystroke.

### Annotations never restructure display bytes — they cut them into pieces

An annotation covers content text with a `TypedMarkNode` and covers display bytes — marker glyphs,
attribute-run text, a verse, a note caller, a chapter glyph, read-only glyph decorators — by state
held on the node itself (`displayAnnotationsState`, `libs/shared/src/nodes/features/`). A display
node is never moved into a mark. Separators hold nothing — they have no position of their own.

Painting is by element only: every painted element carries the class names a `<mark>` does. Since
Lexical maps one DOM text node to one `TextNode`, an editable carrier held only in PART is cut at
every hold boundary into **pieces** (`displayPieces.state.ts`): adjacent siblings of the same class
and identity, the first the carrier's own node, every later one carrying the continuation state,
each held whole or not at all, joined again where neighbours are held by the same annotations. Every
piece carries its chain's id, and a continuation continues only the piece before it with the same
id: a class match alone is not a chain, so when a carrier's first piece is deleted the rest becomes
a carrier of its own rather than joining a neighbour of its class (in `\v 1 \v 2 ` with a hold on
the `2`, deleting verse 2's `\v ` piece never makes the `2` part of verse 1). The piece transform
beside the hold-basis transform keeps that so after every update. A read-only
decorator never splits; held in part it draws sub-spans of its own text from the per-editor paint
store (`decoratorPaint.ts`).

**A piece chain is one node to every reader of structure.** Display runs are found by position and
read as single nodes, so each reader goes through the chain helpers: `$logicalText` for a carrier's
bytes (a glyph's canonical check, a run's value compare, an exporter, an ops count), `$logicalNextSibling`
/ `$lastPiece` for the node after a carrier (a run scan, an insertion anchor), `$logicalChildren` for
a parent's children (one item per carrier), `$pieceHead` for a transform or owner walk that must act
once per carrier, and `$setLogicalText` / the glyph setters for a rewrite, which joins the chain
first so the holds remap through the basis as on an unsplit carrier. A reader that takes a
continuation piece for a carrier of its own duplicates a run, a verse, an op or a position — the
corruption the annotation-transparency oracle
(`packages/platform/src/editor/annotationLocations/annotationTransparency.*`) exists to catch: with
annotations covering every display byte of a paragraph, every keystroke case of the pending/settled
oracle must give the same documents, screen, positions and delta as the same case with none.

The settle carries both representations by bytes: kept or re-spelled bytes carry their annotation to
the settled counterpart, discarded bytes drop it. `getUsj()` carries no display-byte annotation.

The wrap measures coverage by caret order: an inline element moves into a mark only when the range
covers it whole; otherwise its text is split and its glyphs hold the annotation. The wrap tags its
update (`TYPED_MARK_WRAP_TAG`) so no transform takes the text it splits for typed text.

**A mark is transparent to every reader, and so is an annotation update.** A mark cuts one run of
content into several text nodes and puts a parent between a text and its neighbours, so any rule
that reads "the node before/after" or "the text run" by direct siblings sees a different document
once something is annotated. Those readers go through `libs/shared/src/nodes/features/throughMarks.utils.ts`
(`$nextSiblingThroughMarks`, `$textRunThroughMarks`, `$isRangeSplitByMarks`, …), which also treat a
piece chain as one node: the note-shell caret guard, the caret shield around a pending glyph, the
chapter scope's fixed-point signature, the Standard-view space-run rule (a run of spaces is
collapsed on save and shown as NBSPs as ONE run even when a mark splits it — the display rule, the
exporter's text join and the position model all read the run across the join), and the
leading-space move onto a verse. Typing or pasting over a range whose two ends sit in different
parents only because a mark holds one of them first removes the range
(`$removeRangeSplitByMarks`), since Lexical's own replacement would climb to the paragraph and pull
the text after the span into it.

A hold follows its bytes like a mark follows its text. When a carrier's text changes, the holds are
re-measured through a character alignment; a byte typed at either edge of a held range stays
outside it and a byte typed strictly inside grows it, so the alignment reads the user's edit at the
caret first (an insertion of n bytes ending at the caret, a deletion of n bytes starting there) and
only falls back to the longest common subsequence — held bytes preferred where one edit can slide
over identical bytes — for an engine rewrite with no caret (`displayAnnotations.state.ts`). A
`token` carrier (a protected note shell's glyphs) cut into pieces is one token: deleting any piece
removes the chain, so the deletion transforms see what they see with no annotation. Cutting or
joining pieces keeps an element point between a parent's children in place.

Setting or removing an annotation edits no byte, so the marker-edit engine sits out an update that
carries an annotation tag and changes no block's text (the mark wrap and the piece cut dirty the
nodes beside them, which must not pend or settle anything), and the update adds no undo step
(`HISTORY_MERGE_TAG`): an undo that reverts the edit an annotation was set on reverts the
annotation with it, silently. A mark Lexical drops without `remove()` (a selection delete that
empties it) still makes its one removal report, read from the previous state, unless the
annotation was handed on to another holder in the same commit.

### The `\id` line is content, not a header

`\id` is a `BookNode` at document root, not a `ParaNode` — but Paratext 9 treats the text after the
book code as ordinary content, character styles and notes included, and so does this engine. Every
place that asks "is this a paragraph?" on the way to editing content has to accept the book too.
What follows from that:

- **The line's marker prefix is ONE immutable decorator** (`\id GEN ` plus its separator) that the
  caret cannot enter. So the line has **no paragraph arm**: it takes no marker-prefix probe, every
  caret in it is a content position, and a collapsed caret there is CHARACTER source with
  `paraMarker: "id"` — which is what makes the character list (styles valid under `id`, plus every
  note style) non-empty and keeps the empty-to-paragraph fallback from firing.
- **The prefix is always the book's first child, and nothing comes before it.** The browser puts a
  keyboard caret on the boundary IN FRONT of the prefix (Home, Ctrl+Home), so a collapsed caret
  that lands at `(book, 0)` is moved just past it on selection change, the same place a click there
  is moved to. Anything that still lands in front (a drop, a programmatic insert) is moved after it
  by a `BookNode` transform, in order — the save drops the prefix wherever it sits, so that is
  exactly where the file puts it. Both live in `ParaMarkerPrefixCursorGuardPlugin`.
- **A book is never RETAGGED.** `\id` names the book, so a paragraph pick in the line can only
  SPLIT: the tail after the caret becomes a new paragraph inserted directly after the book, with an
  open character span closed on the left and reopened in it. Typed `\p`, `\ip` or `\c ` bytes end
  the line the same way, where the file bytes would.
- **The line settles.** `$rebuildBook` is the fourth settle scope beside paragraphs, note content
  and chapters; like the note scope it re-tokenizes only the content and preserves the book node,
  its code and its prefix, which are never re-derived from displayed bytes. Without it, typed
  markers stayed literal on screen while the save wrote real spans — invariant I violated in the
  one block that had no scope.
- **A paragraph below it merges INTO it** when its whole marker is deleted, exactly as it would
  merge into a paragraph above.

**A menu offers nothing it cannot insert.** The offered list and the commit paths are one contract:
a list that includes a marker the caret's block cannot take is a defect wherever it happens, and so
is a commit path that accepts the pick and mutates nothing. The `\id` line is where both failed at
once — it was offered the paragraph list and had no paragraph to apply it to — which is why the rule
is written down here rather than left to each block. `markerMenuApply.utils.test.tsx` commits every
entry the line offers and asserts the document changed.

### `\cat` is the attribute marker the stylesheet does not declare

`ATTRIBUTE_MARKERS` holds `ca`, `cp`, `va`, `vp`, and `cat`. All but `cat` are also usfm.sty
entries, so `cat` is the single marker for which "is this in the stylesheet?" and "can the tokenizer
re-derive this?" give different answers.

Any re-derivability test keyed on the stylesheet must therefore exempt attribute markers
(`isAttributeMarker`): for those the parser's own table is the authority, because the fold is what
defines the round trip. Tier-2's `$charNeedsSentinel` is the one that matters. Classified as an
unknown custom marker, a first-class `\cat` span is preserved as an opaque sentinel — its bytes stop
reaching the tokenizer, the category fold never fires, and every later pass reports a fixed point,
so a `\cat` run typed after a note's caller becomes a `category` only by round-tripping through the
file. That also strands the caret: with the span opaque, a byte anchor captured inside it resolves
past the following marker glyph, so the rest of what the user types lands in the NEXT span.

Keep that predicate in ONE place. The fragment builder and the signature/live-walk classification
decide the same thing about the same node, and silently corrupt the rebuild if they disagree.

### Prefer a declared property over a new exception list

Before adding a per-marker special case, check whether the host's markers map already declares the
property. `leadingAttributes`, `attributeMarkers`, `textContentAttribute`, and `defaultAttribute`
are all declared there, ordered, and versioned.

But the map cannot express everything, and the duplication with this repo's own `ATTRIBUTE_MARKERS`
table is deliberate. The two were checked against each other and **agree on every marker, attribute
name, shape, and host**; each holds facts the other cannot represent:

- **Map only:** `hasStructuralSpaceAfterCloseAttributeMarker`; the map-level
  `isSpaceAfterAttributeMarkersContent` spec-vs-Paratext switch; version and spec/Paratext variants.
- **Here, and load-bearing:** a same-line space before an attribute marker BLOCKS the fold (Paratext
  parse behavior, no map representation); markup inside the content aborts the fold; an empty span
  is never an empty attribute; `cat` is receptive only directly after `\esb` or right after a note's
  caller.

The map models the SERIALIZER (USJ to USFM, spec-declarative). This table models the PARSER (USFM to
USJ, deliberately matching ParatextData rather than the spec). **Derive the shared facts from the
map; keep the parser-behavior deltas local, explicit, and named.** Do not collapse one into the
other.

### The Paratext 9 parse rules the tokenizer reproduces (USFM ≤ 3.0)

Runtime-verified against ParatextData 9.5.0.22 — the build paranext-core links, and the only one
reachable: a project migrated to USFM 3.1 sets `MinParatextDataVersion 9.6.1.1` and cannot open
against it. These are therefore the only semantics in play, and the tokenizer implements them
deliberately rather than incidentally. **USFM 3.1 inverts most of them**; that whole delta, with
Paratext 9 file:line citations, is the checklist in paranext-core's
`c-sharp-tests/Usfm31NestingTripwireTests.cs`, which self-activates on a ParatextData upgrade.

- **A bare char marker closes ALL open char styles, then opens.** Not just the innermost — `\ft`
  with `\+nd` open, then a bare `\fq`, pops both. A `+` marker closes nothing and nests.
- **Whether the closed span has a matching closer later is irrelevant.** Close-on-bare fires
  anyway, and the orphaned closer becomes an `unmatched` node that stays literally in the file.
- **Closers pop until they match.** A mismatched closer (`\qt*` with only `\nd` open) still closes
  everything, then becomes `unmatched` itself.
- **An outer closer auto-closes the inner span** as `closed="false"` — no error.
- **`+` with nothing open is an unknown marker literally named `+w`.** The `+` is not stripped.
- **Verse boundaries do NOT close char styles.** An unclosed `\nd` continues across `\v`, with the
  verse nesting inside the char. The marker check flags it; the structure keeps it open.
- **Notes nest inside open char spans** — `\nd a \f …\f* b` puts the whole note inside the `nd`.

This is why the editable glyphs carry the nested `+`: Tier-2 rebuilds by re-tokenizing visible
glyph text, so a genuinely nested span whose glyphs read `\nd Lo\w rd\nd*` would be re-interpreted
by close-on-bare and silently flattened. Glyph text mirrors the writer exactly so that loop stays
lossless — the same reason invariant V holds.

### Attribute display grammar

Three Paratext 9 sites agree on it (`UsfmToken.ToAttributeString`, `NamedAttribute.ToString`,
`UsfmXsltExtensions.GetStyleAttributeStr`), and `canonicalAttributeText` is the single
implementation:

- A lone attribute that is the marker's **default** renders bare: `|value`. Anything else renders
  `|name="value" name2="value2"` — double quotes always, single spaces, parse order preserved.
  Whitespace around `=` and between attributes is discarded on parse.
- **Bare `|value` parses as the default attribute only if the marker declares one.** Otherwise —
  and for any text the attribute grammar cannot fully match — the `|…` stays literal inline
  content. It is never dropped and never becomes opaque data. So `|gloss` before `\w*` becomes
  `lemma="gloss"`, while `|gloss` before `\nd*` stays char text.
- **Typing the named form of a default attribute settles to the collapsed form in the editor**, with
  no file round-trip: `\w thing|lemma="gloss"\w*` settles to `\w thing|gloss\w*`.

### A position has one spelling

Every USFM position has exactly ONE `UsjDocumentLocation`, and the editor emits only that one —
`getSelection`, `onSelectionChange`, and anything else built on `$getLocationFromNode`. USJ gives
`offset` a meaning only on text, so a caret with no text beside it is never a container plus a
content index (`{ jsonPath: "$.content[2]", offset: 0 }`) and never the root plus one
(`{ jsonPath: "$", offset: 3 }`). The host's `UsjReaderWriter`
(`usfmVerseLocationToUsjDocumentLocation`) is the oracle:

1. A gap in front of a marker object is that marker's location, `{ jsonPath: <item> }` — at its
   backslash.
2. The character after a token that has no other home — the space after a marker name, a line's
   newline — is addressed on that token at its length: text `offset: length`, `['marker']`
   `propertyOffset: marker.length` (the caret inside an empty `\b`), `closingMarkerOffset` at the
   closer's length (a paragraph ending in a note is `\f*` at 3). A verse or chapter ending a line is
   its `['number']` at the number's length, or its last attribute marker (`\va*`, `\vp*`, `\ca*`,
   `\cp`).
3. The end of the document is one past the final newline, on the last token: rule 2's form plus one
   (`['marker']` `propertyOffset: 2` after a final empty `\b`; text `offset: length + 1`).
4. A root point between two blocks is the start of the next block.

The end of a span's content is where its closer starts (`closingMarkerOffset: 0`); a span with no
closer (`closed="false"` note content, a table cell) ends where whatever follows it starts. One
shape has no distinct answer: an `optbreak` ending a line, where `UsjReaderWriter` gives every byte
after it — the newline and the document end included — the optbreak's own marker location.

The editor keeps ACCEPTING the older spellings a host may still hand it: a container and an index is
resolved as the location of that gap, and the settled-position layer restates a root index like any
other top-level index. The rules live in `$boundaryLocation` and its helpers in
`libs/shared-react/src/plugins/usj/annotation/selection.utils.ts`; while a block is pending, the
document end is spelled on the SETTLED last token (`$settledDocumentEnd` in
`packages/platform/src/editor/positions/settledPositions.utils.ts`).

**Every caret has a location, pending edit or not.** A position names the byte in front of which
it sits, and maps through whatever contains that byte on its own side. Where one side has bytes the
other lacks, the position in front of them snaps LEFT to the nearest byte both sides share, and the
position just past them is exact — one aligner
(`packages/platform/src/editor/markerEdit/usfmByteAlignment.utils.ts`) serves BOTH directions, each
end of a range resolved on its own; there is no separate outbound-snap/inbound-refuse split.

- **Outbound** (`getSelection`, `onSelectionChange`) never answers `undefined` for a real caret —
  `undefined` means there is no selection. Typed bytes the settle carries as an attribute map
  exactly (a typed `\cat x\cat*` is the note's `category`, a figure's `|src="…"` its `file`), by
  `UsjReaderWriter`'s locations. So does an attribute the settle moves: a repeated name keeps its
  first slot with its last value, and every attribute that survives maps byte for byte wherever it
  lands, while the overridden duplicate's bytes snap LEFT. Bytes with no settled counterpart at
  all — a typed literal the settle spells differently from how it was typed — snap LEFT to the
  nearest translatable position at or before them, the same rule a USFM byte with no USJ
  representation follows.
- **Inbound** (`setSelection`, `setAnnotation`, `insertNote`) refuses (and logs the refusal) ONLY a
  host location that names nothing in the settled document at all. A location inside a scope the
  editor can pair only in part is not a whole-scope refusal — it snaps LEFT the same as outbound. A
  position basis the live tree has moved on from is rebuilt, and the rebuild logged as an error,
  never refused.

**`onUsjChange`'s `usj` payload is a SETTLED, synchronous snapshot.** It equals `getUsj()` at the
moment of emission, fires synchronously within the commit's own listener pass, once per commit that
changes the settled document or carries delta ops, in commit order — including once, not twice,
after a `setUsj` reload. A commit that does neither emits nothing, and so does a selection-only
commit or one tagged as an annotation, cursor, or selection change. The block verse layout emits
nothing: it is read-only. `ops` stay a LIVE view of the same commit.

**Notes are counted in the SETTLED document.** `selectNote(index)` counts and selects against
`getUsj()`'s notes; a note still pending as a typed literal gets the caret placed at the literal's
`\`, not at a note index that does not exist yet. `getNoteOps` stays LIVE for both key and index, so
`getNoteOps(i)` and `selectNote(i)` can legitimately name different notes while a whole note literal
is pending.

**A typed table cell settles as `table:cell` under ParatextData parity.** The settle applies
`UsfmParser.IsCell`'s own rule: a Character-typed or undeclared cell-named marker inside an open row
is a cell; the same marker `+`-nested under another marker is never a cell; with no open row, it is
an ordinary character marker. The position and note-counting rules above apply to a settled cell the
same as to any other settled content.

Recorded as-is, not position defects: `\c 2 made` settles to a chapter followed by a bare root
string `"made"` — ParatextData produces the same USJ from that input. The settle keeps the space
before a typed `\c`, `\tr`, `\esb` or `\esbe` that ParatextData trims on save; positions count only
non-whitespace bytes, so the kept space never moves one.

---

## 3. What applying a marker DOES to the document

The host owns which KEY does what (see its half); this repo owns the resulting document change.

- **Commit at a collapsed caret** materializes the typed literal and lets Tier 2 resolve it. The
  span records `closed="false"` — no closing marker.
- **Commit over a selection WRAPS** it in a CLOSED span, whatever the marker's insertion default is.
  The note-content families (`\ft`, `\xt`, `\fq`, `\fr`, `\xo` …) are inserted closer-less by
  convention, but "wrap this text" means a closed span, so the wrap adds the closer. Getting this
  wrong is invisible rather than loud: a fresh wrapper with an opener and no closer loses that
  opener to the wrap primitive's strip branch, and the marker-edit engine then unwraps the
  glyph-less span again — the apply does nothing at all.
- **A paragraph pick in the `\id` line** splits the line and starts the new paragraph AFTER the
  book — the book itself is never retagged. See "The `\id` line is content, not a header".
- **A closing marker typed over a selection** DELETES the selected content and lands the literal
  closer in its place (Paratext 9 parity). That is a different gesture from the wrap, so the two are
  not interchangeable over a selection.
- **A non-NEST style applied INSIDE an open char span** closes every enclosing style before the
  point and reopens the ones with content after it — it never nests. `$applyNonNestInsideChar`
  (`packages/platform/src/editor/adaptors/usj-marker-action.utils.ts`) implements this for a
  collapsed caret and a selection within one text node; `$applyNonNestAcrossNodes` (same file)
  extends it to selections spanning several nodes — the covered text takes the new style while
  each crossed span keeps its uncovered tail. **Multi-node selections its eligibility probe
  declines** (`$isCloseAndReopenEligible`: a decorator, attribute run, or marker-byte-rendering
  text leaf in range, or leaves in different char-stack containers) **still fall back to the
  generic wrap and are known to mangle the spans they cross.**

---

## 4. Ratified behavior — do not "fix" these

**Space runs collapse on save; the display is deliberately NOT collapsed to match.** Type `a  b` and
after a settle the screen keeps both spaces while the file gets one, indefinitely. That is a real,
permanent screen-vs-file divergence, ratified anyway: it models Paratext 9's `RegularizeSpaces`, and
normalizing the display instead would delete a byte under the user's caret.

Positions do not diverge with it. The logical content model drops a displayed run's extra spaces
from its coordinates exactly where serialization drops them, from one shared definition
(`collapsedSpaceRunRanges` in `libs/shared/src/nodes/usj/spaceRuns.utils.ts`), so a settled offset
past the run still names the character the host expects. That makes the position layer
view-dependent: every position function takes the editor's view options.

**This is a one-off and must not be generalized.** It is the single place where the answer to "the
screen and the file disagree" is "leave it". Every other divergence is a defect. If a new case looks
like this one, it is not — bring it to the owner rather than reasoning from this row.

The related-but-opposite rule, and NOT an exception to anything: a space the user TYPES beside a
marker is inserted, stays visible, and leaves the caret immediately after it — in a verse or chapter
glyph's separator run, after a char opener, and inside any of the five display runs (`va`, `vp`,
`ca`, `cp`, `cat`). The file is unaffected either way because the writer emits structural whitespace
itself. Accepting that keystroke and discarding it would be the no-silent-no-ops failure.

**Multi-step undo for a palette item apply** is intentional. (Settles are not part of this — see
Invariant IV.)

---

## 5. Fixed points

Extend these; never weaken them.

- The tokenizer and losslessness core: `usfmFragmentToUsjContent`, `extractAttributes`,
  `scanMilestone`, NBSP/space flattening.
- `canonicalAttributeText`.
- The editor-to-USJ and delta exclusion gating.
- Tier 2's preserve-or-refuse machinery: fixed-point signature, sentinel symmetry, guard rails.
- The corpus losslessness and round-trip property tests, at zero skips.
