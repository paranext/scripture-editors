/**
 * Verifies that paranext-core's `package-lock.json` is in sync with this repo's package
 * dependencies — or that an open core PR brings it in sync.
 *
 * Why: paranext-core consumes this repo's packages as staged `file:` dependencies, and its
 * lockfile records their dependency closure. When a dependency is added, removed, or its range
 * changed here, core's lockfile must be refreshed (`npm install` there, commit the diff) or every
 * core build breaks the moment `platform-yalc` moves: `npm ci` refuses to run on the mismatch.
 * This check runs on pushes to `platform-yalc` so whoever moves that branch finds out before the
 * breakage, not after.
 *
 * Only this repo's dependency lists are compared. Raising a package's OWN version number (e.g.
 * platform-editor 0.8.16 -> 0.8.17) is not something core's lockfile validates for a `file:`
 * dependency, so a release that changes nothing but versions passes untouched.
 *
 * The comparison mirrors what core's staging step produces from these manifests:
 * `devDependencies` are dropped, and pnpm `workspace:` specifiers become `file:` paths at the
 * sibling staged folder. Which packages are staged, and under which folder names, is read from
 * core's own `dev-packages.json` so the two repos cannot drift apart silently.
 *
 * Zero dependencies; runs on bare Node.
 */

const CORE_REPO = "paranext/paranext-core";
// Overridable for testing against a not-yet-merged core branch.
const CORE_BRANCH = process.env.CORE_BRANCH || "main";

/**
 * Sections whose entries npm records for a `file:` package and validates against the lockfile.
 *
 * `peerDependenciesMeta` belongs here even though it declares no package: it is what marks a peer
 * optional, so deleting an entry from it turns that peer into a required one and npm pulls it into
 * the closure. Verified against a staged `file:` dependency — making `yjs` required this way fails
 * every `npm ci` with "Missing: yjs from lock file" while both dependency lists are unchanged.
 */
const COMPARED_SECTIONS = ["dependencies", "peerDependencies", "peerDependenciesMeta"];

/**
 * How recently an open core PR must have been updated to be considered a possible in-flight
 * lockfile refresh. Deciding whether one PR touches the lockfile costs an API request, and core
 * routinely carries 150+ open, which exhausts the unauthenticated rate limit this runs under
 * locally. A refresh for the change being pushed right now is worked on alongside it, so anything
 * untouched for this long is not it. `move-platform-yalc --skip-verify` is the escape hatch if
 * that assumption ever fails.
 */
const RECENT_UPDATE_WINDOW_DAYS = 14;

async function fetchJson(url, init) {
  const response = await fetch(url, init);
  if (!response.ok) throw new Error(`GET ${url} -> ${response.status} ${response.statusText}`);
  return response.json();
}

function githubApiInit() {
  const headers = { accept: "application/vnd.github+json" };
  // Anonymous works for public repos but rate-limits aggressively; use the workflow token if given.
  if (process.env.GITHUB_TOKEN) headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  return { headers };
}

/**
 * Computes the dependency sections core's lockfile should record for one staged package, by
 * applying the same transforms core's staging applies to this repo's manifest.
 */
async function computeExpectedSections(packagePath, stagingFolderByName) {
  const fs = await import("node:fs");
  const manifest = JSON.parse(fs.readFileSync(`${packagePath}/package.json`, "utf8"));

  const expected = {};
  COMPARED_SECTIONS.forEach((section) => {
    const entries = manifest[section];
    if (!entries) return;
    expected[section] = Object.fromEntries(
      Object.entries(entries).map(([name, specifier]) => {
        // Only dependency sections hold specifier strings; `peerDependenciesMeta` holds objects,
        // which are carried through to the comparison as they are.
        if (typeof specifier !== "string" || !specifier.startsWith("workspace:"))
          return [name, specifier];
        const stagingFolder = stagingFolderByName.get(name);
        if (!stagingFolder)
          throw new Error(
            `${packagePath} depends on "${name}" via "${specifier}", but core does not stage "${name}" — core's install cannot resolve it. Add it to core's dev-packages.json.`,
          );
        return [name, `file:../${stagingFolder}`];
      }),
    );
  });
  return expected;
}

/** Returns a human-readable list of differences, empty when the lockfile matches. */
function diffAgainstLock(lock, stagingFolder, expectedSections) {
  const lockEntry = lock.packages?.[`dev-packages/staging/${stagingFolder}`];
  if (!lockEntry) return [`lockfile has no entry for dev-packages/staging/${stagingFolder}`];

  const problems = [];
  COMPARED_SECTIONS.forEach((section) => {
    const expected = expectedSections[section] ?? {};
    const recorded = lockEntry[section] ?? {};
    const names = new Set([...Object.keys(expected), ...Object.keys(recorded)]);
    names.forEach((name) => {
      // Structural, because `peerDependenciesMeta` entries are objects. Both sides are parsed from
      // JSON written by npm, so key order is stable.
      if (JSON.stringify(expected[name] ?? null) === JSON.stringify(recorded[name] ?? null)) return;
      problems.push(
        `${stagingFolder} ${section}.${name}: this repo declares ${JSON.stringify(
          expected[name] ?? null,
        )}, core's lockfile records ${JSON.stringify(recorded[name] ?? null)}`,
      );
    });
  });
  return problems;
}

/** Fetches a repo file as JSON at a ref, via raw.githubusercontent. */
function fetchRepoFile(repoFullName, ref, filePath) {
  // Same credentials as the API calls: raw.githubusercontent rate-limits anonymous reads, and
  // these fetch multi-megabyte lockfiles.
  return fetchJson(
    `https://raw.githubusercontent.com/${repoFullName}/${ref}/${filePath}`,
    githubApiInit(),
  );
}

async function verify() {
  const devPackagesConfig = await fetchRepoFile(CORE_REPO, CORE_BRANCH, "dev-packages.json");
  const stagedPackages = devPackagesConfig.repos.flatMap((repo) => repo.devPackages);
  if (stagedPackages.some((devPackage) => !devPackage.packagePath || !devPackage.stagingFolder))
    throw new Error(
      `${CORE_REPO}@${CORE_BRANCH}'s dev-packages.json does not describe staged file: packages ` +
        `(no packagePath/stagingFolder) — that core branch predates staged-dependency consumption, ` +
        `so there is no lockfile contract to verify against it.`,
    );

  const fs = await import("node:fs");
  const stagingFolderByName = new Map(
    stagedPackages.map((devPackage) => [
      JSON.parse(fs.readFileSync(`${devPackage.packagePath}/package.json`, "utf8")).name,
      devPackage.stagingFolder,
    ]),
  );

  const expectedByFolder = new Map();
  await Promise.all(
    stagedPackages.map(async (devPackage) => {
      expectedByFolder.set(
        devPackage.stagingFolder,
        await computeExpectedSections(devPackage.packagePath, stagingFolderByName),
      );
    }),
  );

  const diffLock = (lock) =>
    [...expectedByFolder].flatMap(([folder, expected]) => diffAgainstLock(lock, folder, expected));

  // Happy path: core's main is already in sync (dependency-affecting changes are rarer than pushes).
  const mainLock = await fetchRepoFile(CORE_REPO, CORE_BRANCH, "package-lock.json");
  const mainProblems = diffLock(mainLock);
  if (mainProblems.length === 0) {
    console.log(`package dependencies are in sync with ${CORE_REPO}@${CORE_BRANCH}'s lockfile.`);
    return;
  }

  console.log(
    `Dependencies differ from ${CORE_REPO}@${CORE_BRANCH}'s lockfile:\n  ${mainProblems.join(
      "\n  ",
    )}\n\nLooking for an open ${CORE_REPO} PR that brings the lockfile in sync...`,
  );

  // A matching open PR is fine: the lockfile refresh is in flight. Only PRs that touch the
  // lockfile can match, so filter on that before fetching any 2 MB lockfiles.
  // Newest-updated first — a lockfile refresh for this change will be recent — and paginated,
  // since the repo routinely has more than one page of open PRs.
  const openPrs = [];
  for (let page = 1; page <= 3; page += 1) {
    const prPage = await fetchJson(
      `https://api.github.com/repos/${CORE_REPO}/pulls?state=open&sort=updated&direction=desc&per_page=100&page=${page}`,
      githubApiInit(),
    );
    openPrs.push(...prPage);
    if (prPage.length < 100) break;
  }

  const cutoff = Date.now() - RECENT_UPDATE_WINDOW_DAYS * 24 * 60 * 60 * 1000;
  const recentPrs = openPrs.filter((pr) => Date.parse(pr.updated_at) >= cutoff);

  let checkedCount = 0;

  /** Finds an open PR whose lockfile matches, or undefined. */
  async function findMatchingPr(prs) {
    for (const pr of prs) {
      // Sequential on purpose: candidates are rare and this respects API rate limits.
      const files = await fetchJson(
        `https://api.github.com/repos/${CORE_REPO}/pulls/${pr.number}/files?per_page=100`,
        githubApiInit(),
      );
      // A response at the page limit may be truncated, and this endpoint gives no way to page
      // further here. Treat it as a candidate: one extra lockfile fetch is cheaper than declaring
      // a real refresh missing because its PR happened to touch a lot of files.
      const touchesLock =
        files.length === 100 || files.some((file) => file.filename === "package-lock.json");
      if (!touchesLock) continue;
      // The head fork can be deleted while the PR stays open; there is nothing left to read.
      if (!pr.head.repo) continue;
      checkedCount += 1;
      const prLock = await fetchRepoFile(pr.head.repo.full_name, pr.head.sha, "package-lock.json");
      if (diffLock(prLock).length === 0) return pr;
    }
    return undefined;
  }

  const match = await findMatchingPr(recentPrs);
  if (match) {
    console.log(
      `Open PR ${CORE_REPO}#${match.number} ("${match.title}") has a matching lockfile.\n` +
        `Merge that PR together with this platform-yalc update — core builds break until it lands.`,
    );
    return;
  }

  console.error(
    `\nNo open ${CORE_REPO} PR updates package-lock.json to match (checked ${checkedCount} candidate PR(s) among the ${recentPrs.length} of ${openPrs.length} open PRs updated in the last ${RECENT_UPDATE_WINDOW_DAYS} days).\n` +
      `\nEvery paranext-core build will fail until its lockfile is refreshed. To fix:\n` +
      `  1. In a paranext-core checkout (with this repo's checkout beside it or in core's dev-packages/), run: npm install\n` +
      `  2. Commit the package-lock.json change and open a PR.\n` +
      `  3. Merge that PR together with this platform-yalc update, then re-run this workflow.\n`,
  );
  process.exit(1);
}

verify().catch((error) => {
  console.error("verify-consumer-lockfile-sync failed:", error);
  process.exit(1);
});
