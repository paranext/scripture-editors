# Transferring work from the eten-tech-foundation repository

`paranext/scripture-editors` was seeded from
[`eten-tech-foundation/scripture-editors`](https://github.com/eten-tech-foundation/scripture-editors)
with a **curated** set of refs:

- branches `main`, `platform-yalc`, and `release-prep`
- all 80 release tags (`platform_v*`, `utilities_v*`, `scribe_v*`)

Everything else — feature branches, work-in-progress branches, and any personal tags — was
deliberately left behind. Nothing is lost: the other repository still has them, and because this
repo carries the same commit history, git can move any of them across at any time.

This guide covers moving that work over. It is all ordinary `git push`; none of it is destructive,
and every step is reversible.

## One-time setup

Add the other repository as a remote alongside `origin`. Use `eten-tech-foundation` as the name —
not `upstream`, which wrongly implies we track it.

```bash
git remote add eten-tech-foundation https://github.com/eten-tech-foundation/scripture-editors.git
git fetch eten-tech-foundation
```

### If your existing clone still points at eten-tech-foundation

You likely have a checkout whose `origin` is the old repository. Rather than overwriting that URL,
keep it under its own name so nothing is lost and the change is trivially undone:

```bash
git remote rename origin eten-tech-foundation
git remote add origin https://github.com/paranext/scripture-editors.git
git fetch --all
```

`git remote -v` should now show both. To undo, reverse the rename.

> paranext-core's `preinstall` checks this: if it finds a checkout whose `origin` is not the URL in
> `dev-packages.json`, it stops and prints the exact commands rather than silently building from the
> old remote.

## Moving a branch that exists on eten-tech-foundation

```bash
git fetch eten-tech-foundation
git push origin eten-tech-foundation/<branch>:refs/heads/<branch>
```

That copies the branch to this repo without needing a local checkout. Verify:

```bash
git ls-remote --heads origin <branch>
```

## Moving a branch that only exists locally

```bash
git push origin <branch>
```

Check first that it is based on something this repo has — a branch built on a commit that never
reached `main` will bring that history with it, which is usually fine but worth knowing:

```bash
git log --oneline origin/main..<branch> | wc -l
```

## Moving several branches at once

```bash
git fetch eten-tech-foundation
for branch in my-branch another-branch; do
  git push origin "eten-tech-foundation/$branch:refs/heads/$branch"
done
```

## Moving tags

Release tags are already here. For a personal or backup tag:

```bash
git push origin <tag>
```

## Open pull requests

A pull request cannot be moved between repositories. For each one still open against
`eten-tech-foundation/scripture-editors` that should continue here:

1. Push its branch to this repo using one of the recipes above.
2. Open a new PR here with that branch.
3. Close the old PR with a comment linking to the new one, so the trail is followable.

Because this repository is **not** a GitHub fork, opening a PR from a branch here defaults its base
to `paranext/scripture-editors`. That is the whole reason it was seeded as a standalone copy rather
than with the Fork button — a fork always defaults new PRs to the parent repository, and GitHub
offers no setting to change it.

## Verifying a transfer

```bash
# Same tip commit in both places?
git ls-remote --heads origin <branch>
git ls-remote --heads eten-tech-foundation <branch>

# Anything on the old branch that did not come across?
git fetch --all
git log --oneline origin/<branch>..eten-tech-foundation/<branch>
```

An empty third command means everything arrived.
