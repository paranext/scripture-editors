/**
 * Verifies that each published package's committed `dist/` matches what its source builds.
 *
 * Why the dist is committed at all: paranext-core consumes these packages by copying them out of a
 * checkout, so committing the build means consumers never need this repo's toolchain — no pnpm, no
 * nx, no build — just to run the app. The cost is that `dist/` can now go stale against `src/`, and
 * a stale one is invisible in review: the diff looks fine, and consumers silently get old code.
 * This check closes that gap by rebuilding and comparing.
 *
 * Run it after `nx run-many -t extract-api` (CI does exactly that), so it compares a fresh build
 * against what git has committed. Everything the packages publish is byte-deterministic;
 * `*.tsbuildinfo` is TypeScript's incremental cache rather than a shipped artifact, so it is
 * neither committed nor compared.
 *
 * Zero dependencies; runs on bare Node.
 */

import { execSync } from "node:child_process";

/** Paths whose committed contents must match a fresh build. */
const DIST_PATHS = ["packages/platform/dist", "packages/utilities/dist"];

function main() {
  // `git status --porcelain` reports untracked, modified, and deleted alike, which is exactly the
  // set of ways a committed dist can disagree with a fresh build.
  const status = execSync(`git status --porcelain -- ${DIST_PATHS.join(" ")}`, {
    encoding: "utf8",
  }).trim();

  if (!status) {
    console.log("Committed dist matches the build. ✓");
    return;
  }

  console.error(
    `The committed dist does not match what the source builds:\n\n${status}\n\n` +
      `paranext-core copies these files straight out of a checkout, so a stale dist ships stale\n` +
      `code to it. Rebuild and commit the result:\n\n` +
      `  pnpm nx run-many -t extract-api\n` +
      `  git add ${DIST_PATHS.join(" ")}\n` +
      `  git commit\n`,
  );
  // Print the actual diff, not just a summary: when this fails in CI the content is the only way
  // to tell a genuine source change from a build that is not reproducible across machines.
  const diff = execSync(`git diff --stat -- ${DIST_PATHS.join(" ")}`, { encoding: "utf8" });
  if (diff.trim()) console.error(`Changes:\n${diff}`);
  const patch = execSync(`git diff -U1 -- ${DIST_PATHS.join(" ")}`, {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  if (patch.trim()) {
    const MAX_PATCH_LINES = 200;
    const patchLines = patch.split("\n");
    console.error(`\nDiff:\n${patchLines.slice(0, MAX_PATCH_LINES).join("\n")}`);
    if (patchLines.length > MAX_PATCH_LINES)
      console.error(`... ${patchLines.length - MAX_PATCH_LINES} more line(s)`);
  }
  process.exit(1);
}

main();
