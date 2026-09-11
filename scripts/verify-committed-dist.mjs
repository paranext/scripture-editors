/**
 * Verifies that each published package's committed build output matches what its source builds.
 *
 * Two outputs are committed. `dist/` is what paranext-core copies out of a checkout, so committing
 * it means consumers never need this repo's toolchain — no pnpm, no nx, no build — just to run the
 * app. `etc/<package>.api.md` is API Extractor's report on the public type surface; nothing
 * consumes it at runtime, and it is committed so that a public API change arrives as a readable
 * diff in the pull request that makes it.
 *
 * Both can go stale against `src/`, and a stale one is invisible in review: the source diff looks
 * fine while consumers silently get old code and the report claims the API did not move. This
 * check closes that gap by rebuilding and comparing.
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
const COMMITTED_BUILD_PATHS = [
  "packages/platform/dist",
  "packages/platform/etc",
  "packages/utilities/dist",
  "packages/utilities/etc",
];

// Blind spot: `git status` cannot see ignored paths, and `.gitignore` ignores everything nested
// under the dist directories (`packages/*/dist/*/`) so tsc's per-file declarations stay untracked.
// A build that started emitting published output into a subdirectory would therefore be invisible
// here — the check would pass with files missing from the commit. Separating the published
// artifacts from the toolchain's scratch space removes the overlap entirely; see
// https://github.com/paranext/scripture-editors/issues/5.

function main() {
  // `git status --porcelain` reports untracked, modified, and deleted alike, which is exactly the
  // set of ways committed output can disagree with a fresh build.
  const status = execSync(`git status --porcelain -- ${COMMITTED_BUILD_PATHS.join(" ")}`, {
    encoding: "utf8",
  }).trim();

  if (!status) {
    console.log("Committed build output is current. ✓");
    return;
  }

  console.error(
    `The committed build output does not match what the source builds:\n\n${status}\n\n` +
      `paranext-core copies the dist straight out of a checkout, so a stale one ships stale code\n` +
      `to it, and a stale api.md hides a public API change from review. Rebuild and commit the\n` +
      `result:\n\n` +
      `  pnpm nx run-many -t extract-api\n` +
      `  git add ${COMMITTED_BUILD_PATHS.join(" ")}\n` +
      `  git commit\n`,
  );
  // Print the actual diff, not just a summary: when this fails in CI the content is the only way
  // to tell a genuine source change from a build that is not reproducible across machines.
  const diff = execSync(`git diff --stat -- ${COMMITTED_BUILD_PATHS.join(" ")}`, {
    encoding: "utf8",
  });
  if (diff.trim()) console.error(`Changes:\n${diff}`);
  const patch = execSync(`git diff -U1 -- ${COMMITTED_BUILD_PATHS.join(" ")}`, {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  if (patch.trim()) {
    // Bounded on both axes. The published bundles include `.js.map` files that are megabytes wide
    // on a single line, so a line budget alone does not bound what reaches the log.
    const MAX_PATCH_LINES = 200;
    const MAX_LINE_CHARS = 500;
    const patchLines = patch.split("\n");
    const excerpt = patchLines
      .slice(0, MAX_PATCH_LINES)
      .map((line) =>
        line.length > MAX_LINE_CHARS
          ? `${line.slice(0, MAX_LINE_CHARS)}... (${line.length - MAX_LINE_CHARS} more character(s) on this line)`
          : line,
      )
      .join("\n");
    console.error(`\nDiff:\n${excerpt}`);
    if (patchLines.length > MAX_PATCH_LINES)
      console.error(`... ${patchLines.length - MAX_PATCH_LINES} more line(s)`);
  }
  process.exit(1);
}

main();
