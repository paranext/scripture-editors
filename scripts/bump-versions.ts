/**
 * Sets the published packages' versions and commits the result on a new
 * `bump-versions-<platformVersion>` branch, mirroring paranext-core's script of the same name.
 *
 * Usage:
 *   pnpm bump-versions <platformVersion> [--utilities <utilitiesVersion>]
 *
 * e.g. `pnpm bump-versions 0.9.0 --utilities 0.2.0`
 *
 * Open a PR to merge the resulting branch into the branch you ran this from.
 */

import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

// Resolved from the working directory rather than the module's own path: this package is
// CommonJS, so `import.meta` is unavailable once tsx transpiles this file.
const REPO_ROOT = process.cwd();
if (!fs.existsSync(path.join(REPO_ROOT, "pnpm-workspace.yaml")))
  throw new Error(`Run this from the repository root; ${REPO_ROOT} is not it.`);

/** A package whose version this script maintains, keyed by the name used on the command line. */
const PACKAGES = {
  platform: path.join("packages", "platform"),
  utilities: path.join("packages", "utilities"),
} as const;

/** `platform` depends on `utilities`, so a utilities bump has to move that range too. */
const UTILITIES_PACKAGE_NAME = "@eten-tech-foundation/scripture-utilities";

function readManifest(packageDir: string) {
  const manifestPath = path.resolve(REPO_ROOT, packageDir, "package.json");
  return { manifestPath, manifest: JSON.parse(fs.readFileSync(manifestPath, "utf8")) };
}

function writeManifest(manifestPath: string, manifest: unknown) {
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, undefined, 2)}\n`);
}

function assertValidVersion(version: string, label: string) {
  // Deliberately permissive about prerelease suffixes (0.9.0-alpha.1) but strict about the shape.
  if (!/^\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?$/.test(version))
    throw new Error(`${label} version "${version}" is not a valid semantic version.`);
}

function bumpVersions(platformVersion: string, utilitiesVersion?: string) {
  assertValidVersion(platformVersion, "platform");
  if (utilitiesVersion) assertValidVersion(utilitiesVersion, "utilities");

  const platform = readManifest(PACKAGES.platform);
  platform.manifest.version = platformVersion;

  if (utilitiesVersion) {
    const utilities = readManifest(PACKAGES.utilities);
    utilities.manifest.version = utilitiesVersion;
    writeManifest(utilities.manifestPath, utilities.manifest);

    // Leave a `workspace:` specifier alone — pnpm resolves it, and paranext-core's staging step
    // rewrites it to the sibling build. Only a real range needs moving.
    const range = platform.manifest.dependencies?.[UTILITIES_PACKAGE_NAME];
    if (range && !range.startsWith("workspace:")) {
      const prefix = /^[\^~]/.exec(range)?.[0] ?? "";
      platform.manifest.dependencies[UTILITIES_PACKAGE_NAME] = `${prefix}${utilitiesVersion}`;
    }
  }

  writeManifest(platform.manifestPath, platform.manifest);

  const branch = `bump-versions-${platformVersion}`;
  execSync(`git checkout -b "${branch}"`, { stdio: "inherit", cwd: REPO_ROOT });
  execSync("git add packages/platform/package.json packages/utilities/package.json", {
    stdio: "inherit",
    cwd: REPO_ROOT,
  });
  const summary = utilitiesVersion
    ? `platform-editor ${platformVersion}, scripture-utilities ${utilitiesVersion}`
    : `platform-editor ${platformVersion}`;
  execSync(`git commit -m "chore: bump versions to ${summary}"`, {
    stdio: "inherit",
    cwd: REPO_ROOT,
  });

  console.log(`\nBumped ${summary} on branch ${branch}.`);
  console.log("Push it and open a PR into the branch you ran this from.");
}

const args = process.argv.slice(2);
const platformVersion = args[0];
if (!platformVersion) {
  console.error("Usage: pnpm bump-versions <platformVersion> [--utilities <utilitiesVersion>]");
  process.exit(1);
}
const utilitiesFlagIndex = args.indexOf("--utilities");
const utilitiesVersion = utilitiesFlagIndex === -1 ? undefined : args[utilitiesFlagIndex + 1];
if (utilitiesFlagIndex !== -1 && !utilitiesVersion) {
  console.error("--utilities requires a version, e.g. --utilities 0.2.0");
  process.exit(1);
}

bumpVersions(platformVersion, utilitiesVersion);
