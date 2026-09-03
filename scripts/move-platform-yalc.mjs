/**
 * Moves `platform-yalc` forward: rebases it onto `origin/main`, verifies paranext-core's lockfile
 * is (or is about to be) in sync, and force-pushes.
 *
 * Usage:
 *   npm run move-platform-yalc              # from a platform-yalc checkout: rebase, verify, push
 *   npm run move-platform-yalc -- --dry-run # rebase and verify only; print the push it would do
 *   npm run move-platform-yalc -- --skip-verify  # emergencies only: push without the check
 *
 * The verify step (`verify-consumer-lockfile-sync.mjs`) fails when a dependency was added, removed,
 * or re-ranged since the branch last moved and no paranext-core PR refreshes `package-lock.json` to
 * match — because in that state, every core build breaks the moment this push lands. The same check
 * runs in CI on the push itself; running it here just catches the problem before the breakage
 * instead of after.
 *
 * Run it with `platform-yalc` checked out and a clean tree. It updates that branch in place —
 * resetting it to `origin/platform-yalc` first (the branch moves by force-push, so a local copy is
 * stale by design; the script refuses if yours has commits of its own), then rebasing onto
 * `origin/main` — so when it finishes, your checkout IS the state that was pushed. On a rebase
 * conflict it aborts and leaves the branch at `origin/platform-yalc`.
 *
 * Zero dependencies; runs on bare Node.
 */

import { execSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const isDryRun = process.argv.includes("--dry-run");
const skipVerify = process.argv.includes("--skip-verify");

function run(command, options = {}) {
  return execSync(command, { encoding: "utf8", stdio: ["ignore", "pipe", "inherit"], ...options });
}

function movePlatformYalc() {
  let currentBranch = "";
  try {
    currentBranch = run("git symbolic-ref --quiet --short HEAD", { stdio: "pipe" }).trim();
  } catch {
    // Detached HEAD; handled below.
  }
  if (currentBranch !== "platform-yalc") {
    console.error(
      "Check out platform-yalc first (`git checkout platform-yalc`) — this script updates that branch in place, and refusing to run from anywhere else keeps it from touching a branch you did not mean it to.",
    );
    process.exit(1);
  }

  const status = run("git status --porcelain");
  if (status.trim().length > 0) {
    console.error(
      "This checkout has working changes. Commit or stash them first — the branch gets reset and rebased under you.",
    );
    process.exit(1);
  }

  // Snapshot the verify script BEFORE the branch moves: the rebased tree may not carry it (or may
  // carry a different version), and the check that should run is the one paired with this script.
  // It only reads repo files via cwd-relative paths, so it runs fine from a temp location.
  const verifyScriptSnapshot = path.join(
    os.tmpdir(),
    `verify-consumer-lockfile-sync-${process.pid}.mjs`,
  );
  fs.copyFileSync(
    fileURLToPath(new URL("./verify-consumer-lockfile-sync.mjs", import.meta.url)),
    verifyScriptSnapshot,
  );

  try {
    console.log("Fetching origin...");
    run("git fetch origin", { stdio: "inherit" });

    // The branch moves by force-push, so the local copy is stale by design and gets reset to the
    // remote before rebasing. Commits that exist only locally would be destroyed by that reset, so
    // their presence stops everything — they should not exist on this branch at all.
    const localOnly = run("git rev-list --count origin/platform-yalc..HEAD").trim();
    if (localOnly !== "0") {
      console.error(
        `Your local platform-yalc has ${localOnly} commit(s) that origin/platform-yalc does not. This branch should only ever be origin's state rebased onto main — move those commits to a normal branch, then reset this one (git reset --hard origin/platform-yalc) and rerun.`,
      );
      process.exit(1);
    }
    run("git reset --hard origin/platform-yalc", { stdio: "inherit" });

    console.log("Rebasing platform-yalc onto origin/main...");
    try {
      run("git rebase origin/main", { stdio: "inherit" });
    } catch {
      run("git rebase --abort", { stdio: "inherit" });
      throw new Error(
        "The rebase hit conflicts. Nothing was pushed; platform-yalc is back at origin's state. Rebase onto origin/main manually, resolve the conflicts, and push with --force-with-lease.",
      );
    }

    if (skipVerify) {
      console.log("Skipping the consumer lockfile check (--skip-verify).");
    } else {
      console.log("Checking that paranext-core is ready for this update...");
      // Runs against the rebased working tree, so it sees exactly the manifests this push would
      // publish. Its failure output includes the fix instructions.
      run(`node "${verifyScriptSnapshot}"`, { stdio: "inherit" });
    }

    const newTip = run("git rev-parse --short HEAD").trim();
    if (isDryRun) {
      console.log(
        `\nDry run: nothing pushed. Your local platform-yalc is at the rebased state (${newTip}); push it with\n  git push --force-with-lease\nor discard it with\n  git reset --hard origin/platform-yalc\n`,
      );
      return;
    }

    console.log(`Pushing ${newTip} as platform-yalc...`);
    run("git push --force-with-lease origin platform-yalc", { stdio: "inherit" });
    console.log(
      "\nplatform-yalc moved, and your local branch matches it. paranext-core builds pick this up on\ntheir next install; if the lockfile check pointed at an open core PR, merge that PR now.",
    );
  } finally {
    fs.rmSync(verifyScriptSnapshot, { force: true });
  }
}

try {
  movePlatformYalc();
} catch (error) {
  console.error(`\n${error instanceof Error ? error.message : error}`);
  process.exit(1);
}
