# Scripture Editors

This monorepo contains packages for various Scripture editors.

Each Scripture application's editor will have many behaviors in common with other Scripture applications. Each will need some features that are unique. We are developing all of these parts in a compatible way and in one place in order to maximize collaboration and sharing.

In this monorepo:

- Each application produces their own editor package - the application uses the package produced from this repo because the source is there.
- Common nodes, plugins, and formatters for the toolbar plugin.
- Specific sets of nodes, plugins, and formatters for each data type extending from the common items where applicable.

Sharing in this monorepo is a commitment to maintain and organize it. Each application package is free to move in its own direction but keeping in mind items that can be pushed up outside the specific editor package to be used in common.

## Where this repository lives

This repository is maintained by the [Paratext 10 Studio](https://github.com/paranext) team at
`paranext/scripture-editors`, and it is the source of truth for the editor packages. Day-to-day
development happens here.

It began as a copy of [`eten-tech-foundation/scripture-editors`][eten-repo], carrying that repo's
full history, its MIT license, and its attribution. It was seeded with a curated set of refs —
`main`, `platform-yalc`, `release-prep`, and the release tags — so if you need a branch that was left
behind, see [Transferring work from the eten-tech-foundation
repository](docs/transferring-work-from-eten-tech-foundation.md). It is **not** a GitHub fork: while a repository
is a fork, GitHub always defaults new pull requests to the upstream repository and offers no setting
to change that, which makes it far too easy to open a PR against the wrong repo. Everything a fork
would give us still works through an ordinary git remote — see
[Working with the eten-tech-foundation repository](#working-with-the-eten-tech-foundation-repository).

### Relationship to paranext-core

[Platform.Bible][paranext-core] consumes two of this repo's packages —
`@eten-tech-foundation/platform-editor` and `@eten-tech-foundation/scripture-utilities` — but **not
from the npm registry**. Its `preinstall` step clones this repo (or finds an existing checkout),
builds those two packages, and stages a copy of each into `paranext-core/dev-packages/staging/`,
which its `package.json` files then reference with `file:` specifiers.

The practical consequence for anyone working here: **this repo's `package.json` files are
authoritative for its own dependencies.** Adding, bumping, or removing a dependency here flows into
paranext-core on its next `npm install`, with nothing to restate on the consuming side. See
[paranext-core's README][paranext-core-dev-packages] for the consuming half, including how to get
your changes here into a running Platform.Bible.

Which revision paranext-core builds is pinned in its `dev-packages.json`, normally the
[`platform-yalc`](#the-platform-yalc-branch) branch.


## Developer Quick Start

1. Install [Volta](https://docs.volta.sh/guide/getting-started).
2. Clone the monorepo:
   ```bash
   git clone https://github.com/paranext/scripture-editors.git
   cd scripture-editors
   pnpm install
   ```
3. Install [Nx](https://nx.dev/) globally (note we intentionally use `npm` rather than `pnpm` for global installs, see [JavaScript Tool Manager](#javascript-tool-manager)):
   ```bash
   npm i -g nx
   ```
4. Run one of the top level developer environments (see the **Nx Graph** below), e.g.:
   ```bash
   nx dev perf-react
   ```

## JavaScript Tool Manager

You can use [Volta](https://volta.sh/) with this repo to use the right version of tools such as Node.js and PNPM.

If you don't use Volta just look at the `volta` property in [package.json](/package.json) to see the right tool versions to install in your preferred way.

NOTE: there is a [known limitation using PNPM with Volta](https://docs.volta.sh/advanced/pnpm). So set your environment variable `VOLTA_FEATURE_PNPM` to 1. Also to install packages globally, use NPM instead of PNPM (only for global installs). For an example, see step 2 of [Developer Quick Start](#developer-quick-start).

## Nx Monorepo Build System

| Source                              | Demo App               |
| ----------------------------------- | ---------------------- |
| [perf-vanilla](/demos/perf-vanilla) | `nx dev perf-vanilla`  |
| [perf-react](/demos/perf-react)     | `nx dev perf-react`    |
| [platform](/demos/platform)         | `nx dev platform`      |
| [scribe-editor](/packages/scribe)\* | `nx dev scribe-editor` |

\* This item appears in 2 lists as it has both the Demo App and Package in the same source folder.

| Source                                | Package                                                                 |
| ------------------------------------- | ----------------------------------------------------------------------- |
| [platform-editor](/packages/platform) | [![Github Tag][npm-platform-version-image]][npm-platform-version-url]   |
| [scribe-editor](/packages/scribe)     | [![Github Tag][npm-scribe-version-image]][npm-scribe-version-url]\*     |
| [utilities](/packages/utilities)      | [![Github Tag][npm-utilities-version-image]][npm-utilities-version-url] |

\* This package has not yet been published to the new NPM organization. The previous version of `scribe-editor` is here [![Github Tag][npm-bnf-scribe-version-image]][npm-bnf-scribe-version-url].

| Source                             | Library                |
| ---------------------------------- | ---------------------- |
| [shared-react](/libs/shared-react) | internal non-published |
| [shared](/libs/shared)             | internal non-published |
| [test-data](/libs/test-data)       | internal non-published |

```mermaid
---
title: Nx Graph
---
graph TB
  V(perf-vanilla) --> T(test-data)
  V --> S(shared)
  S --> T
  S --> U(utilities)
  R(perf-react) --> T
  R --> S
  R --> SR(shared-react)
  SR --> S
  SR --> U
  SB(scribe-editor) --> SR
  SB --> S
  SB --> U
  P(platform) --> PE(platform-editor)
  P --> T
  P --> U
  PE --> SR
  PE --> S
  PE --> U
```

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

### Nx Installed Globally?

If you haven't installed Nx globally (as recommended in step 2 of [Developer Quick Start](#developer-quick-start)), then just prefix each call to `nx` with `pnpm`, e.g. `pnpm nx build perf-react`.

### Running tasks

To execute tasks with Nx use the following syntax:

```bash
nx <target> <project> <...options>
# e.g.
nx build perf-react
```

You can also run multiple targets:

```bash
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```bash
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

### Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

### Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

### Ready to deploy?

Just run `nx build perf-react` to build that application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

### Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/core-features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/core-features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

### Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)

## Testing

The unit tests run automatically on each GitHub PR (see [test.yml](/.github/workflows/test.yml)).

To run all TS unit tests:

```bash
nx run-many -t test
```

To run all TS unit tests for a single package (in this example the **shared** package):

```bash
nx test shared
```

To run all TS unit tests watching for file changes:

- On Windows:
  ```bash
  nx watch --all -- nx test %NX_PROJECT_NAME%
  ```
- On Linux or macOS:
  ```bash
  nx watch --all -- nx test \$NX_PROJECT_NAME
  ```

You can also use the [recommended VS Code extensions](/.vscode/extensions.json) to run tests there. This is particularly useful for running individual tests and debugging.

## API Extraction

If you change the public API of a package, run `nx extract-api` to update its API report:

```bash
nx extract-api <package-name>  # e.g., nx extract-api platform-editor
```

Or update all packages at once:

```bash
nx run-many -t extract-api
```

The generated API report files should be committed alongside your changes.

## Formatting, Linting and Typechecking

Formatting happens automatically when you commit — the pre-commit hook runs Prettier over your staged files, and that is the gate. If you use VS Code with this repo's recommended extensions, files will also be formatted when you save. You shouldn't normally need to format anything by hand.

To check TypeScript for readability, maintainability, and functionality errors, run the following from the repo root (or just use VS Code with this repo's recommended extensions).

```bash
nx run-many -t lint # to check linting
nx run-many -t typecheck # to check types
npx prettier --write <files> # only if you need to format something by hand
```

Use Prettier directly rather than `nx format:write`. CI runs `nx format:check` purely as a backstop for commits that bypassed the hook; it exists because `nx format` once resolved a Prettier configuration that didn't quite match invoking Prettier directly. Several Nx majors have passed and that may well be fixed, but it has never been reconfirmed — so prefer the tool the hook uses.

Note `.prettierignore` excludes some files that still get staged, notably `pnpm-lock.yaml` and `**/tsconfig*.json`. Prettier leaves those alone by design; that isn't the hook failing.

## Dependency Updates

Dependabot is configured to open **security PRs only**, so any dependabot PR on this repo is an
advisory rather than a routine bump. We supersede those PRs with a single hand-made batch commit,
because dependabot resolves pnpm monorepo trees poorly and because a version bump often fails to
clear the advisory on its own.

See [docs/dependency-updates.md](/docs/dependency-updates.md) for the procedure, how to write the
`pnpm-workspace.yaml` overrides, and why a green CI run is not evidence that a vulnerability is
fixed. Claude Code users can invoke the
[`update-dependencies`](/.claude/skills/update-dependencies) skill, which follows that doc.

## TypeScript Code Intelligence

This repo gives Claude Code a TypeScript language server (jump-to-definition, find-references, and
type-error diagnostics across the monorepo). It works on Windows, macOS, and Linux with **no manual
setup** beyond `pnpm install`.

`typescript-language-server` is a repo **devDependency**, so `pnpm install` provides it (and the
`typescript` it needs is already in the workspace). A committed Claude Code plugin
([`.claude/skills/typescript-lsp-volta`](/.claude/skills/typescript-lsp-volta)) launches it and
loads automatically when you start Claude Code from the repo root — no global install, no `/plugin`
install step.

It uses a custom plugin rather than the official `typescript-lsp`, which fails under Volta on Windows;
see the [plugin README](/.claude/skills/typescript-lsp-volta/README.md) for why and how.

### Linux / WSL override

The custom plugin works on Windows and macOS but currently has a loading issue on Linux / WSL where
Claude Code recognises the plugin yet fails to start its LSP server. On Linux the official plugin
works fine (Volta shims are real executables, not `.cmd` files), so add this override to
`.claude/settings.local.json` (gitignored):

```jsonc
{
  // ... keep any existing keys ...
  "enabledPlugins": {
    "typescript-lsp@claude-plugins-official": true,
    "typescript-lsp-volta@skills-dir": false,
  },
}
```

Then run `/reload-plugins` inside Claude Code.

Notes:

- Start Claude Code from the repo root; project-scope plugins don't load from a subdirectory. After
  changing directories, run `/reload-plugins`.
- The `typescript-language-server` dev dependency is installed for everyone via `pnpm install` but is
  only used by Claude Code. If you don't use Claude Code, you can ignore this feature.

## Collaborative Web Development Environment

Thanks to [CodeSandbox](https://codesandbox.io/) for the instant dev environment: https://codesandbox.io/p/github/eten-tech-foundation/scripture-editors/main

## Plain Vanilla JS and React

Lexical works with plain-vanilla JS/TS as well as with React. To that end, the editor packages in this repo `perf-react` and `perf-vanilla` are 2 editor components that behave the same to edit the [PERF](https://github.com/Proskomma/proskomma-json-tools/blob/main/doc/schema/perf.html) data format.

If you are using a framework other than React and need to wrap a plain-vanilla JS editor for your framework, you could add your own vanilla TS editor package to this repo. By comparing `perf-vanilla` and `perf-react` you can see how to take any existing React plugins you might want and convert them to vanilla TS.

## The `platform-yalc` branch

`paranext-core` and `paratext-10-studio` pin the `platform-yalc` branch rather than `main`. It
exists so that a change here can be coordinated with the change that consumes it: a breaking edit
lands on `main` first, and `platform-yalc` is moved forward only once the consuming side is ready,
so build servers never pick up a half-finished handoff.

To move it forward, rebase it onto `main` and force-push:

```bash
git fetch origin
git checkout platform-yalc
git rebase origin/main
git push --force-with-lease
```

The name is historical — it refers to [yalc](https://github.com/wclr/yalc), which paranext-core no
longer uses. The branch's coordination role is still real, so it stays.

## Working with the eten-tech-foundation repository

This repo carries the full history of [`eten-tech-foundation/scripture-editors`][eten-repo], so the
two share a common ancestry and git can move commits between them. Set it up as a second remote:

```bash
git remote add eten-tech-foundation https://github.com/eten-tech-foundation/scripture-editors.git
git fetch eten-tech-foundation
```

`origin` stays this repository. Nothing about your existing checkout changes.

### Pulling changes from eten-tech-foundation

```bash
git fetch eten-tech-foundation
git checkout -b merge-eten main
git merge eten-tech-foundation/main
```

Resolve any conflicts, then open a PR into `main` here as usual.

### Contributing a change back to eten-tech-foundation

We are not committed to upstreaming routinely, but the option is deliberately kept open. Push a
branch to their repo and open the PR there:

```bash
git fetch eten-tech-foundation
git checkout -b my-contribution eten-tech-foundation/main
git cherry-pick <commits from this repo>
git push eten-tech-foundation my-contribution
```

Then open a pull request on `eten-tech-foundation/scripture-editors` with `my-contribution` as the
compare branch. Because this repository is not a fork, GitHub will not silently offer their repo as
the base for PRs opened from `origin` — you have to target it explicitly, which is the intent.

## Releasing

Consumers pin a *revision of this repository* — a branch or tag in `dev-packages.json` and
`productInfo.json` — rather than a published package version. A release is therefore a **repository
tag**, and one tag pins both packages at once. Tags are named `v<platform-editor version>`, e.g.
`v0.8.17`, since `platform-editor` is the package this repo exists to ship.

These packages are **not published to npm**. paranext-core builds them from source; see
[Relationship to paranext-core](#relationship-to-paranext-core).

The flow mirrors [paranext-core's][paranext-core-publishing]:

1. Decide which branch you are releasing from. For a stable release, rebase `release-prep` onto
   `main` if it has not already been rebased this cycle. For a pre-release, `main` is normally fine.
2. Make sure the package versions are what you want to release. If not, dispatch the **Bump
   Versions** workflow against that branch, then merge the `bump-versions-<version>` branch it
   creates.
3. Dispatch the **Publish** workflow against the branch you are releasing from. It tags the commit,
   creates a GitHub release, and — if you give it `newVersionAfterPublishing` — opens a follow-up
   `bump-versions-<version>` branch so later work applies to a new in-progress version rather than
   to the one just released.
4. Merge that `bump-versions-<version>` branch.
5. Point consumers at the new tag: `dev-packages.json` in paranext-core and `productInfo.json` in
   paratext-10-studio. **Change both in the same window** — paranext-core's build matches the two by
   exact string equality on the clone URL, and a mismatch is only a warning, so a half-done change
   silently builds the wrong revision.

## License

[MIT][github-license] © [ETEN Tech Foundation](https://missionmutual.org),
[SIL Global](https://www.sil.org/) and [United Bible Societies](https://unitedbiblesocieties.org/)

This repository stays MIT-licensed. Platform.Bible itself is moving to AGPL-3.0-or-later; MIT is
compatible in that direction, and keeping this repo MIT is also what keeps contributing changes back
to [`eten-tech-foundation/scripture-editors`][eten-repo] possible.

<!-- define variables used above -->

[npm-platform-version-image]: https://img.shields.io/npm/v/@eten-tech-foundation/platform-editor
[npm-platform-version-url]: https://www.npmjs.com/package/@eten-tech-foundation/platform-editor
[npm-scribe-version-image]: https://img.shields.io/npm/v/@eten-tech-foundation/scribe-editor
[npm-scribe-version-url]: https://www.npmjs.com/package/@eten-tech-foundation/scribe-editor
[npm-bnf-scribe-version-image]: https://img.shields.io/npm/v/@biblionexus-foundation/scribe-editor
[npm-bnf-scribe-version-url]: https://www.npmjs.com/package/@biblionexus-foundation/scribe-editor
[npm-utilities-version-image]: https://img.shields.io/npm/v/@eten-tech-foundation/scripture-utilities
[npm-utilities-version-url]: https://www.npmjs.com/package/@eten-tech-foundation/scripture-utilities
[github-license]: https://github.com/paranext/scripture-editors/blob/main/LICENSE
[eten-repo]: https://github.com/eten-tech-foundation/scripture-editors
[paranext-core]: https://github.com/paranext/paranext-core
[paranext-core-dev-packages]: https://github.com/paranext/paranext-core?tab=readme-ov-file#linking-local-development-packages-automatic
[paranext-core-publishing]: https://github.com/paranext/paranext-core?tab=readme-ov-file#publishing
