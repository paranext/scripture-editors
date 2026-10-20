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
 * The plugin set mounted here is the three that register content-mutating transforms in Standard
 * view — `TextSpacingPlugin` (trailing space, verse spacing, the `\va`/`\vp` display-run sync),
 * `CharNodePlugin` (opener separators, nested glyphs, char attribute runs), and `MarkerEditPlugin`
 * (the marker-edit engine). Mounting the full `Editor` component instead would also drag in
 * navigation, collab, and load-state machinery that cannot mutate content on a bare dirty pass; the
 * narrower set keeps a failure here attributable to a transform.
 *
 * All nodes are dirtied in ONE pass. That is the regression net. When it fails, re-run the failing
 * fixture dirtying one node at a time to localize which node's transform is responsible — that
 * diagnostic is deliberately not automated, because it is quadratic and only useful while chasing a
 * specific failure.
 *
 * Runs in each view a user edits Scripture in ({@link EDITING_VIEW_CONFIGS}): Standard, formatted,
 * and paragraph-structure. The plugins register their transforms in every view, and a transform
 * that keys on what a node looks like can read a view without marker glyphs differently. The
 * remaining view configurations stay on the adaptor-only path in `corpus-round-trip.test.ts`, so
 * the fixture matrix does not multiply by an editor mount for views nobody edits in.
 */

import { corpusFixtures, EDITING_VIEW_CONFIGS } from "./corpus-data";
import { expectEveryTextBearingNodeRendered } from "./corpusRendering.test-helpers";
import {
  initialize as initializeSerialize,
  reset,
  serializeEditorState,
} from "../usj-editor.adaptor";
import {
  deserializeSerializedEditorState,
  initialize as initializeDeserialize,
} from "../editor-usj.adaptor";
import { MarkerEditPlugin } from "../../markerEdit/MarkerEditPlugin";
import { usxStringToUsj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, $isElementNode, LexicalEditor, LexicalNode } from "lexical";
import { CharNodePlugin, TextSpacingPlugin, ViewOptions } from "shared-react";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { baseTestEnvironment } from "../../../../../../libs/shared-react/src/plugins/usj/react-test.utils";

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
const KNOWN_FAILURES: { [fixtureName: string]: string } = {};

/** Marks `node` and every descendant dirty, so each one's registered transforms run. */
function $markSubtreeDirty(node: LexicalNode): void {
  node.markDirty();
  if ($isElementNode(node)) node.getChildren().forEach($markSubtreeDirty);
}

/**
 * Mounts the transform-registering plugins over `state` and returns the editor once React has
 * settled. The state arrives as JSON rather than as a builder callback so the tree under test is
 * byte-identical to what the adaptor produces at load time in the app.
 */
async function mountWithTransforms(
  state: ReturnType<typeof serializeEditorState>,
  viewOptions: ViewOptions,
): Promise<LexicalEditor> {
  const { editor } = await baseTestEnvironment(
    JSON.stringify({ root: state.root }),
    <>
      <CharNodePlugin />
      <MarkerEditPlugin viewOptions={viewOptions} />
      <TextSpacingPlugin />
    </>,
  );
  return editor;
}

describe("corpus transform fixed point (USJ -> editor state -> dirty -> USJ)", () => {
  beforeEach(() => {
    initializeSerialize(undefined, undefined);
  });

  for (const fixture of corpusFixtures) {
    for (const { label, viewOptions } of EDITING_VIEW_CONFIGS) {
      const testKey = `${fixture.name} [${label}]`;
      const skip = fixture.skipModes?.find((entry) => entry.startsWith(`${label}:`));
      const known = KNOWN_FAILURES[testKey];
      let run = known ? it.fails : it;
      if (skip) run = it.skip;
      run(
        `${testKey}${skip ? ` (${skip})` : ""}${known ? ` (known failure: ${known})` : ""}`,
        async () => {
          const usj = usxStringToUsj(fixture.usx);
          reset();
          initializeDeserialize(undefined);

          const state = serializeEditorState(usj, viewOptions);
          const editor = await mountWithTransforms(state, viewOptions);
          expectEveryTextBearingNodeRendered(editor, `${testKey} after load`);

          await act(async () => {
            editor.update(
              () => {
                $getRoot().getChildren().forEach($markSubtreeDirty);
              },
              { discrete: true },
            );
          });

          expectEveryTextBearingNodeRendered(editor, `${testKey} after the dirty pass`);

          const afterTransforms = deserializeSerializedEditorState(
            editor.getEditorState().toJSON(),
            viewOptions,
          );
          expect(afterTransforms).toEqual(usj);
        },
      );
    }
  }
});
