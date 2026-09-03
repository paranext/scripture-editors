# scripture-utilities

<div align="center">

[![Build Status][github-actions-status]][github-actions-url]
[![CodeQL][gitghub-codeql-status]][gitghub-codeql-url]
[![Github Tag][npm-version-image]][npm-version-url]

</div>

Utilities for working with Scripture data.

## Features

For data that conforms to [USX/USJ v3.1](https://docs.usfm.bible/usfm/3.1/):

- USJ to USX converter.
- USX to USJ converter.

## Install

```sh
npm install @eten-tech-foundation/scripture-utilities
```

## Usage

```ts
import { usxStringToUsj, usjToUsxString } from "@eten-tech-foundation/scripture-utilities";

const emptyUsx = '<usx version="3.1" />';
const usx = `
<?xml version="1.0" encoding="utf-8"?>
<usx version="3.1">
  <book code="PSA" style="id">World English Bible (WEB)</book>
  <para style="mt1">The Psalms</para>
  <chapter number="1" style="c" sid="PSA 1" />
  <para style="q1">
    <verse number="1" style="v" sid="PSA 1:1" />Blessed is the man who doesn’t walk in the counsel of the wicked,</para>
  <para style="q2" vid="PSA 1:1">nor stand on the path of sinners,</para>
  <para style="q2" vid="PSA 1:1">nor sit in the seat of scoffers;<verse eid="PSA 1:1" /></para>
</usx>
`;

const emptyUsj = usxStringToUsj(emptyUsx);
const usj = usxStringToUsj(usx);

const newUsx = usjToUsxString(usj);
```

## Building

Run `nx build utilities` to build the library.

## Running unit tests

Run `nx test utilities` to execute the unit tests via [Vitest](https://vitest.dev/).

## Develop in App

paranext-core consumes this package by staging a built copy out of a checkout of this repo, so
developing against a live app means restaging that copy — nothing is published.

1. Give core a checkout to stage from: clone this repo as a sibling of `paranext-core`, or into
   `paranext-core/dev-packages/`.
2. Make your changes here.
3. In `paranext-core`, restage them:
   ```bash
   npm run build:editor
   ```

`build:editor` stages your working tree as it stands, uncommitted changes included, and marks what
it produces so the next ordinary `npm install` replaces it with the pinned revision.

## License

[MIT][github-license] © [ETEN Tech Foundation](https://missionmutual.org)

<!-- define variables used above -->

[github-actions-status]: https://github.com/paranext/scripture-editors/actions/workflows/test.yml/badge.svg
[github-actions-url]: https://github.com/paranext/scripture-editors/actions
[gitghub-codeql-status]: https://github.com/paranext/scripture-editors/actions/workflows/codeql.yml/badge.svg
[gitghub-codeql-url]: https://github.com/paranext/scripture-editors/actions/workflows/codeql.yml
[npm-version-image]: https://img.shields.io/github/v/tag/paranext/scripture-editors
[npm-version-url]: https://github.com/paranext/scripture-editors/releases
[github-license]: https://github.com/paranext/scripture-editors/blob/main/packages/utilities/LICENSE
