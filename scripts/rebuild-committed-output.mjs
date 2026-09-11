/**
 * Rebuilds the committed build output — every published package's `dist/` and `etc/` — leaving each
 * package's rolled-up artifact in place.
 *
 * Use this rather than `pnpm nx run-many -t extract-api`. That command runs the same work, but
 * finishes with `packages/utilities/dist/index.d.ts` holding tsc's re-export stub instead of
 * api-extractor's rollup, because nothing orders `utilities:extract-api` against a sibling's
 * `build`. `published-packages.mjs` has the mechanism and the ordering rule; the fix that removes
 * the ordering requirement altogether is
 * https://github.com/paranext/scripture-editors/issues/5.
 *
 * Pair it with `verify-committed-dist.mjs`, which proves the result matches what is committed.
 *
 * Zero dependencies; runs on bare Node.
 */

import { execSync } from "node:child_process";

import { PUBLISHED_PACKAGES } from "./published-packages.mjs";

// One nx invocation per package rather than a single `run-many`: within one invocation nx is free to
// schedule a sibling's `build` after this package's `extract-api`, which is the overwrite being
// avoided. Separate invocations each run to completion before the next begins.
for (const { nxProject } of PUBLISHED_PACKAGES) {
  // --skip-nx-cache so this is a real build: nx claims `dist` as a cached output, so a cache hit
  // restores its snapshot over the committed files, and the comparison that follows would grade the
  // cache rather than the source.
  const command = `pnpm nx run ${nxProject}:extract-api --skip-nx-cache`;
  console.log(`\n> ${command}`);
  execSync(command, { stdio: "inherit" });
}

console.log("\nRebuilt the committed build output of every published package. ✓");
