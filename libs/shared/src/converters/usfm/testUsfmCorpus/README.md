# testUSFM cross-oracle corpus

Vendored copies of paranext-core's `testUSFM` fixtures
(`lib/platform-bible-utils/src/scripture/usj-reader-writer-test-data/`) — **the source of truth
lives there**; re-copy when it changes (same convention as the vendored `usfm.sty` in
`tools/usfm-markers`).

Each `.usj` file is **Platform.Bible's USJ** for the paired `.usfm` file: ParatextData 9.5's own
USX for the chapter (`GetChapterUsx`) converted by this repo's `usxStringToUsj`
(`packages/utilities`). ParatextData has no USJ writer, so only the USX is independent of this
repo's code. The `.usj` files are therefore an oracle for `usfmFragmentToUsjContent`'s ParatextData
fidelity (`usfmFragmentToUsj.corpus.test.ts`), whose USFM → USJ path shares no code with
`usxStringToUsj`, but not an independent check of `usxStringToUsj` itself. The `testUSFM-2SA-*`
chapters deliberately exercise USFM's edges (attribute markers, milestones, unknown markers,
unclosed spans, figures, tables, sidebars, links); the `web-matthew-*` files are
conventional-content baselines.

`testUSFM-2SA-3-corrected.usj` replaces Paratext's raw chapter-3 output, which contains an
acknowledged Paratext 9.5 bug (a `\cp` with markers in its content is partially folded into
`pubnumber` and the remainder stranded as a **top-level char**, an invalid USJ shape). The
corrected file encodes the intended behavior; the tokenizer matches it exactly.

`testUSFM-2SA-4` (standard USFM chapters 1-3 do not use, plus known-bug anchors such as lone and
leading NBSPs), `testUSFM-2SA-5` (damaged USFM that can still exist at rest: a second `\ca`, text on
the `\c` line, nameless `\ 2` and bare `\` markers) and `testUSFM-1SA-1` (introduction material
before `\c 1`) are made the same way, from their `pdp-usx/` captures. `testUSFM-2SA-5.usj` carries one hand edit: its three
nameless paragraphs have `"marker": ""` where `usxStringToUsj` writes a stray `"style": ""` and no
marker (PR #19 fixes the converter). paranext-core's copy of that directory's README documents the
recipe and the edit in full.

`spacing-word-break.*` is the one fixture NOT captured from Paratext 9.5. Paratext has no exporter
here that emits USJ, so its `.usj` was written by hand — but every text expectation in it was taken
from `ParatextData.dll` itself, by calling `UsfmToken.RegularizeSpaces` on each string through the
`paratextdata` package that `c-sharp` already depends on. That run is the oracle: a ZWSP between two
words survives, a ZWSP surrounded by spaces is dropped, a non-breaking space between two letters
survives, and one sitting inside a run of spaces collapses with them. It covers the spacing the
other fixtures happen not to contain, which is the spacing that matters most for Thai, Khmer, and
Lao. Only the surrounding `\p`/`\v` shape is authored, and it is the simplest the corpus has.

Only the Paratext-flavored fixtures are targeted (not the `-canonical-3.1` spec variants): this
pipeline round-trips chapter data through ParatextData.

## `pdp-usx/` — the provider's real chapter USX

`pdp-usx/` is a vendored copy of paranext-core's
`lib/platform-bible-utils/src/scripture/usj-reader-writer-test-data/pdp-usx/` — again, **the source
of truth lives there**: copy the whole directory over when it changes, byte for byte (its
`README.md` included). Each `<fixture>-ch<N>.usx` is the exact string Paratext's provider
(`GetChapterUsx`) serves for chapter `N` of that fixture: what the editor really receives, with the
provider's own shapes (incomplete `sid`/`eid` values after the first chapter, `status`/`vid`
metadata, top-level `<char>` elements, an empty chapter) rather than a TypeScript converter's.
paranext-core's C# sweep writes and checks them; `pdp-usx/README.md` says how to regenerate them.

The composed round-trip suite
(`packages/platform/src/editor/adaptors/corpus/corpus-pdp-usx-composed-round-trip.test.tsx`) runs
every `.usx` file it finds here through USX -> USJ -> editor -> USJ -> USX, so a newly captured
chapter is covered as soon as it is copied in.
