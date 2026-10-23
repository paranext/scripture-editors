# Changelog

All notable changes to `@eten-tech-foundation/scripture-utilities` are recorded here. The format
follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this package follows
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Entries under **Unreleased** describe changes that are committed but not yet published. Move them
under a version heading when that version of this package is published. (No workflow automates
this package's publish today — `Publish Scribe Package` publishes only `packages/scribe`.)

## [Unreleased]

### Added

- `MarkerObject.closed` — an optional marker attribute carrying a character span's explicit
  `closed="false"` state, so a span the author has not closed survives a USJ round trip instead of
  being silently normalized to closed.

### Changed

- **`Usj.version` is now typed `string`** instead of the literal `typeof USJ_VERSION` (`"3.1"`).
  This is a public type change: a document can legitimately be any version (Paratext 9.5 serves
  3.0), and the converters now carry it. Code that assigned a non-3.1 version through a
  `as typeof USJ_VERSION` cast no longer needs the cast; code that relied on the literal type to
  narrow `version` to `"3.1"` must compare at run time instead. `USJ_VERSION` and `EMPTY_USJ` are
  unchanged.
- **`usxStringToUsj` keeps the source version.** The USJ `version` is the root `<usx version>` the
  USX declares (USX, USJ and USFM share one version numbering); a USX that declares none, or an
  empty one, gets `USJ_VERSION`. Previously every result was stamped `USJ_VERSION`. **Consumers
  reading 3.0 USX now get `version: "3.0"`.**
- **`usjToUsxString` writes the USJ's own `version`** on the root `<usx>`, falling back to
  `USX_VERSION` only when the USJ has none. Previously it always wrote `USX_VERSION`. Together with
  the change above, a USX → USJ → USX round trip now returns the version it started at.
- **`usxStringToUsj` keeps whitespace-only text.** A USX text node consisting only of whitespace is
  now retained as document text unless it contains a line break; previously any text that trimmed to
  the empty string was dropped (with a narrow exception for a single space between siblings). USFM
  treats that whitespace as content, so dropping it lost bytes the author typed. **Consumers parsing
  USX will see text nodes where none appeared before.**
- **`usjToUsxString` emits attributes that are present, not merely truthy.** An attribute whose value
  is the empty string (`\qt-s |who=""\*`) now round-trips instead of being dropped, because the check
  changed from a truthiness test to an explicit `undefined`/`null` test. An empty value is an
  unambiguous "present but not yet filled in", so parsing it loses nothing. **Consumers will see
  `attr=""` in output that previously omitted the attribute entirely.**
