/**
 * The editor round trip, run over the RICH corpus.
 *
 * Three corpora already exist, and until now they covered three different legs with two different
 * fixture sets:
 *
 * - `usfmFragmentToUsj.corpus.test.ts` (shared) — USFM to USJ only, against the testUSFM fixtures
 *   with Paratext 9.5's own USJ as the oracle. This is where the edge cases live: attribute
 *   markers, milestones, unknown markers, unclosed spans, figures, tables, sidebars, links.
 * - `corpus-round-trip.test.ts` (here) — USJ to editor state to USJ, against a smaller set of
 *   hand-authored USX fixtures.
 * - `tier2Rebuild.corpus.test.tsx` — the Tier-2 fixed-point property over the 2SA data.
 *
 * The seam: the tokenizer leg gets the rich fixtures, the editor leg gets the authored ones, and
 * nothing runs the rich fixtures THROUGH the editor. A defect in the USJ-to-editor-to-USJ leg, on a
 * shape only the rich corpus contains, falls straight between them — which is how a deleted space
 * after an attribute marker's closer survived a green board.
 *
 * This suite closes that seam by feeding each testUSFM oracle USJ through the same adaptor pair the
 * app loads and saves with, then through the transform leg below. Both run in each view a user
 * edits Scripture in ({@link EDITING_VIEW_CONFIGS}: Standard, formatted, and paragraph-structure),
 * since the adaptors and the transforms both branch on the view.
 *
 * These fixtures are vendored copies whose source of truth lives in paranext-core
 * (`lib/platform-bible-utils/src/scripture/usj-reader-writer-test-data/`); see the corpus README.
 */

import {
  initialize as initializeSerialize,
  reset,
  serializeEditorState,
} from "../usj-editor.adaptor";
import {
  deserializeSerializedEditorState,
  initialize as initializeDeserialize,
} from "../editor-usj.adaptor";
import { EDITING_VIEW_CONFIGS } from "./corpus-data";
import { expectEveryTextBearingNodeRendered } from "./corpusRendering.test-helpers";
import { MarkerEditPlugin } from "../../markerEdit/MarkerEditPlugin";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, $isElementNode, LexicalNode } from "lexical";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { CharNodePlugin, TextSpacingPlugin } from "shared-react";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { baseTestEnvironment } from "../../../../../../libs/shared-react/src/plugins/usj/react-test.utils";

// Vitest's module transform does not preserve a usable `import.meta.url`, so locate the vendored
// corpus relative to the working directory — the platform project root under nx, the repo root
// otherwise. Same probing shape the shared-side corpus test uses.
const CORPUS_DIR = [
  "../../libs/shared/src/converters/usfm/testUsfmCorpus",
  "libs/shared/src/converters/usfm/testUsfmCorpus",
].find((dir) => existsSync(dir));

/**
 * The Paratext-flavored oracles, matching the shared-side corpus test's selection. `2SA-3` uses the
 * CORRECTED oracle rather than Paratext's raw output, which carries an acknowledged Paratext 9.5
 * bug (a `\cp` with markers is partially folded into `pubnumber` and the remainder stranded as an
 * invalid top-level char). Our tokenizer deliberately produces the corrected shape.
 */
const FIXTURES = [
  "testUSFM-2SA-1.usj",
  "testUSFM-2SA-2.usj",
  "testUSFM-2SA-3-corrected.usj",
  "web-matthew-1-and-2.usj",
  "web-matthew-5-section-header.usj",
  "testUSFM-2SA-4.usj",
  "testUSFM-2SA-5.usj",
  "testUSFM-1SA-1.usj",
];

/**
 * Fixture-and-view combinations this suite is KNOWN to fail, keyed `"<fixture> [<view label>]"`,
 * with the mechanism named. A listed test runs as `it.fails` rather than being left red, so the
 * branch every track builds on stays green, and fails once the defect is gone. Each entry is a
 * specification of a defect: the named track deletes its entry as part of its fix.
 */
const KNOWN_FAILURES: { [fixtureName: string]: string } = {};

/** The same contract as {@link KNOWN_FAILURES}, for the transform leg below. */
const KNOWN_TRANSFORM_FAILURES: { [fixtureName: string]: string } = {};

function readOracle(name: string): Usj {
  if (!CORPUS_DIR) throw new Error("testUsfmCorpus fixture directory not found from cwd");
  return JSON.parse(readFileSync(join(CORPUS_DIR, name), "utf8")) as Usj;
}

describe("testUSFM corpus editor round-trip (USJ -> editor state -> USJ)", () => {
  beforeEach(() => {
    initializeSerialize(undefined, undefined);
  });

  for (const name of FIXTURES) {
    for (const { label, viewOptions } of EDITING_VIEW_CONFIGS) {
      const testKey = `${name} [${label}]`;
      const known = KNOWN_FAILURES[testKey];
      const run = known ? it.fails : it;
      run(`${testKey}${known ? ` (known failure: ${known})` : ""}`, () => {
        const usj = readOracle(name);
        reset();
        initializeDeserialize(undefined);

        const editorState = serializeEditorState(usj, viewOptions);
        const roundTripped = deserializeSerializedEditorState(editorState, viewOptions);
        // The oracles are Paratext 9.5's output and carry `version: "3.0"`; the editor emits USJ
        // 3.1. That is the documented output version, not a round-trip loss, so compare CONTENT —
        // the bytes and structure this suite exists to protect — rather than the version stamp.
        expect(roundTripped?.content).toEqual(usj.content);
      });
    }
  }
});

/** Marks `node` and every descendant dirty, so each one's registered transforms run. */
function $markSubtreeDirty(node: LexicalNode): void {
  node.markDirty();
  if ($isElementNode(node)) node.getChildren().forEach($markSubtreeDirty);
}

/**
 * The TRANSFORM leg over the same rich fixtures — the other half of the seam.
 *
 * `corpus-transform-fixed-point.test.tsx` pins the same property against the hand-authored
 * fixtures; this runs it against the edge cases. Transforms do not run on `setEditorState`, only on
 * dirty nodes, so a transform that fabricates or deletes content does so on the user's first edit
 * to a region — invisible to the adaptor leg above, which passes cleanly on every fixture here.
 *
 * `markDirty()` rather than a real edit keeps any diff attributable to the transforms alone.
 */
describe("testUSFM corpus transform fixed point (USJ -> editor state -> dirty -> USJ)", () => {
  beforeEach(() => {
    initializeSerialize(undefined, undefined);
  });

  for (const name of FIXTURES) {
    for (const { label, viewOptions } of EDITING_VIEW_CONFIGS) {
      const testKey = `${name} [${label}]`;
      const known = KNOWN_TRANSFORM_FAILURES[testKey];
      const run = known ? it.fails : it;
      run(`${testKey}${known ? ` (known failure: ${known})` : ""}`, async () => {
        const usj = readOracle(name);
        reset();
        initializeDeserialize(undefined);

        const state = serializeEditorState(usj, viewOptions);
        const { editor } = await baseTestEnvironment(
          JSON.stringify({ root: state.root }),
          <>
            <CharNodePlugin />
            <MarkerEditPlugin viewOptions={viewOptions} />
            <TextSpacingPlugin />
          </>,
        );
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
        expect(afterTransforms?.content).toEqual(usj.content);
      });
    }
  }
});
