/**
 * The packages this repo publishes, in the order their API must be extracted.
 *
 * **The order is load-bearing.** `extract-api` writes each package's rolled-up `dist/index.d.ts`,
 * but a package's `dist/` is also written by any *sibling* whose `tsconfig.lib.json` carries a
 * TypeScript project reference to it: `tsc` builds referenced projects too, emitting their
 * declarations into their own `outDir`. `packages/platform`, `libs/shared`, `libs/shared-react` and
 * `libs/test-data` all reference `packages/utilities`, so building any of them replaces
 * `utilities`' rolled-up declarations with tsc's per-file re-export stub.
 *
 * That write happens one level below nx's task graph, so nx cannot order around it: `build`
 * dependsOn `^build`, and `extract-api` dependsOn only its own `build`. Nothing orders
 * `utilities:extract-api` against `platform-editor:build`, and whichever writes last wins.
 *
 * Listing dependents before the packages they depend on — and running one nx invocation per entry,
 * in this order, as `rebuild-committed-output.mjs` does — makes the last write always an
 * `extract-api`. A new published package belongs ahead of everything it depends on. Getting that
 * wrong is not silent: `verify-committed-dist.mjs` fails on the package whose rollup was
 * overwritten.
 *
 * Removing the need for any ordering here is
 * https://github.com/paranext/scripture-editors/issues/5.
 */
export const PUBLISHED_PACKAGES = [
  { nxProject: "@eten-tech-foundation/platform-editor", directory: "packages/platform" },
  { nxProject: "utilities", directory: "packages/utilities" },
];

/**
 * Paths whose committed contents must match a fresh build: each published package's `dist/` (what
 * paranext-core copies out of a checkout) and `etc/` (API Extractor's report on the public type
 * surface).
 */
export const COMMITTED_BUILD_PATHS = PUBLISHED_PACKAGES.flatMap(({ directory }) => [
  `${directory}/dist`,
  `${directory}/etc`,
]);
