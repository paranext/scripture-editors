/**
 * A loaded document must be a TRANSFORM fixed point: loading it, dirtying every node, and
 * serializing back must reproduce the input USJ exactly.
 *
 * `corpus-round-trip.test.ts` already pins the ADAPTOR half of this — it calls
 * `serializeEditorState`/`deserializeSerializedEditorState` directly, with no editor instance and
 * no plugins mounted. That leaves the TRANSFORM layer uncovered, and the gap is not academic:
 * Lexical transforms do not run on `setEditorState`, only when a node is dirtied. So a transform
 * that fabricates or deletes content does so on the user's FIRST EDIT to a region — not at load —
 * and the adaptor-only round trip can never see it.
 *
 * `markDirty()` rather than a real edit is what makes the assertion sharp: it triggers every
 * transform without changing any content, so a non-empty diff is unambiguously the transforms'
 * doing rather than a consequence of the edit.
 *
 * The editor is the real `Editor`, every plugin a view mounts: which transforms run depends on the
 * view (the note, paragraph and paragraph-marker-prefix plugins in a view that hides markers; the
 * marker-edit engine in one that shows them editable), and a narrower hand-picked set would leave a
 * view's own transforms unexercised.
 *
 * All nodes are dirtied in ONE pass. That is the regression net. When it fails, re-run the failing
 * fixture dirtying one node at a time to localize which node's transform is responsible — that
 * diagnostic is deliberately not automated, because it is quadratic and only useful while chasing a
 * specific failure.
 *
 * Runs in each view a user edits Scripture in ({@link EDITING_VIEW_CONFIGS}): Standard, formatted,
 * and paragraph-structure. A transform that keys on what a node looks like can read a view without
 * marker glyphs differently. The remaining view configurations stay on the adaptor-only path in
 * `corpus-round-trip.test.ts`, so the fixture matrix does not multiply by an editor mount for views
 * nobody edits in.
 */

import {
  EDITING_VIEW_CONFIGS,
  knownFailureRunner,
  mountInView,
} from "../../editorViews.test-helpers";
import { corpusFixtures } from "./corpus-data";
import {
  expectEveryTextBearingNodeRendered,
  runEveryTransform,
} from "./corpusRendering.test-helpers";
import { usxStringToUsj } from "@eten-tech-foundation/scripture-utilities";

/**
 * Fixture-and-view combinations this suite is KNOWN to fail, keyed `"<fixture name> [<view label>]"`,
 * with the mechanism named. A listed test runs as `it.fails` rather than being left red, so the
 * branch every track builds on stays green — a standing red suite trains readers to ignore it, and
 * the next real regression lands invisibly.
 *
 * Each entry is a specification of a defect, not an excuse for one: the track named in the reason
 * deletes its entry as part of its fix, and the listed test fails once the defect is gone, so a fix
 * cannot leave a stale entry behind. Do NOT add an entry for a NEW failure without a named
 * mechanism and a named owner.
 */
const KNOWN_FAILURES: { [testKey: string]: string } = {};

const register = knownFailureRunner(
  KNOWN_FAILURES,
  corpusFixtures.flatMap((fixture) =>
    EDITING_VIEW_CONFIGS.map(({ label }) => `${fixture.name} [${label}]`),
  ),
);

describe("corpus transform fixed point (USJ -> editor state -> dirty -> USJ)", () => {
  for (const fixture of corpusFixtures) {
    for (const { label, viewOptions } of EDITING_VIEW_CONFIGS) {
      const testKey = `${fixture.name} [${label}]`;
      const skip = fixture.skipModes?.find((entry) => entry.startsWith(`${label}:`));
      const run = skip ? it.skip : register(testKey);
      run(`${testKey}${skip ? ` (${skip})` : ""}`, async () => {
        const usj = usxStringToUsj(fixture.usx);
        const { lexical } = await mountInView(usj, viewOptions);
        expectEveryTextBearingNodeRendered(lexical, `${testKey} after load`);

        const afterTransforms = await runEveryTransform(lexical, viewOptions, usj.version);

        expectEveryTextBearingNodeRendered(lexical, `${testKey} after the dirty pass`);
        expect(afterTransforms).toEqual(usj);
      });
    }
  }
});
