/**
 * Data-driven tests for USJ ↔ Lexical selection conversion using `usj2Sa` (2 Samuel 1-2).
 *
 * These tests use pre-generated serialized Lexical states for `usj2Sa` in all 3 marker modes
 * (editable, visible, hidden) and iterate over location entries adapted from paranext-core's
 * testUSFM-2SA-1-locations.ts.
 *
 * **Resolution tests** verify that `$getRangeFromUsjSelection` returns a defined selection for
 * every one of the 136 document locations across all 3 marker modes.  Tests that currently fail
 * (implementation gaps) assert the failure with `expect(…).toThrow()` so they stay visible
 * without breaking CI.
 *
 * **Round-trip tests** assert that a location survives USJ → Lexical → USJ unchanged.
 * `textContent` locations round-trip in all 3 modes.  Other location types
 * (marker, closingMarker, propertyValue, …) are tested for round-trip only in editable mode.
 * Entries that don't yet round-trip are also wrapped with `expect(…).toThrow()`.
 *
 * When you fix a gap the corresponding test will start *failing* because the function no longer
 * throws, so the `expect(…).toThrow()` assertion fails.  At that point remove the entry from
 * the `KNOWN_*_GAPS` set — the test will then run the body directly and pass normally.
 *
 * @see https://github.com/paranext/paranext-core/blob/main/lib/platform-bible-utils/src/scripture/usj-reader-writer-test-data/testUSFM-2SA-1-locations.ts
 */
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  createBasicTestEnvironment,
  updateSelection,
} from "../../../../../../libs/shared/src/nodes/usj/test.utils";
import { usjReactNodes } from "../../../nodes/usj";
import type { SelectionRange } from "./selection.model";
import { $getRangeFromUsjSelection, $getUsjSelectionFromEditor } from "./selection.utils";
import type { LexicalEditor, LexicalNode, SerializedEditorState } from "lexical";
import { TypedMarkNode } from "shared";
import type { LocationType, LocationEntry2Sa } from "test-data";
import {
  usjLocations2Sa,
  lexicalEditable2Sa,
  lexicalVisible2Sa,
  lexicalHidden2Sa,
} from "test-data";

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

/** Marker mode configuration for each test run. */
const MARKER_MODES = [
  { name: "editable", state: lexicalEditable2Sa },
  { name: "visible", state: lexicalVisible2Sa },
  { name: "hidden", state: lexicalHidden2Sa },
] as const;

/** Location types that can round-trip in all marker modes. */
const UNIVERSAL_ROUND_TRIP_TYPES: LocationType[] = ["textContent"];

/**
 * Location types that can only round-trip in editable mode (markers are editable
 * nodes).  In visible/hidden modes these locations normalize to parent elements
 * or nearby text so exact round-tripping is not possible.
 */
const EDITABLE_ONLY_ROUND_TRIP_TYPES: LocationType[] = [
  "marker",
  "closingMarker",
  "propertyValue",
  "attributeKey",
  "attributeMarker",
  "closingAttributeMarker",
];

// ---------------------------------------------------------------------------
// Known-gap tracking
// ---------------------------------------------------------------------------

/**
 * Resolution entries that return `undefined` instead of a Lexical selection. Each key is
 * `"<modeName>:<description>"`. When an entry starts resolving, remove the key — the test switches
 * from `expect(…).toThrow()` to running the body directly, and vitest then enforces that it holds.
 *
 * Every entry is in markerMode "visible" or "hidden", where the addressed bytes have no node at
 * all: those modes render marker glyphs as read-only text with no attribute markers, keep chapters
 * and verses as decorators with no glyph text of their own, and build no display runs — so there is
 * nothing in the tree for an attribute key, an attribute marker, a property value, or a marker
 * location on a node the mode renders no glyph for. Standard view (markerMode "editable") renders
 * all of those bytes and has no resolution gaps.
 */
const KNOWN_RESOLUTION_GAPS = new Set<string>([
  // ── visible (48) ──
  "visible:attributeKey at $.content[20].content[1] key 'strong' offset 0",
  "visible:attributeKey at $.content[20].content[1] key 'strong' offset 1",
  "visible:attributeKey at $.content[20].content[1] key 'strong' offset 2",
  "visible:attributeKey at $.content[20].content[1] key 'strong' offset 3",
  "visible:attributeKey at $.content[20].content[1] key 'strong' offset 4",
  "visible:attributeKey at $.content[20].content[1] key 'strong' offset 5",
  "visible:attributeKey at $.content[20].content[1] key 'strong' offset 6",
  "visible:attributeKey at $.content[20].content[1] key 'strong' offset 7",
  "visible:attributeKey at $.content[65].content[1] key 'x-custom-attribute-1' offset 0",
  "visible:attributeMarker at $.content[10].content[1] key 'category'",
  "visible:closingMarker at $.content[140] offset 0",
  "visible:closingMarker at $.content[140] offset 1",
  "visible:closingMarker at $.content[140] offset 2",
  "visible:closingMarker at $.content[140] offset 3",
  "visible:closingMarker at $.content[140] offset 4",
  "visible:closingMarker at $.content[140] offset 5",
  "visible:marker at $.content[140]",
  "visible:marker at $.content[142]",
  "visible:marker at $.content[4]",
  "visible:marker at $.content[6].content[0]",
  "visible:marker at $.content[85].content[1]",
  "visible:propertyValue at $.content[140]['marker'] offset 0",
  "visible:propertyValue at $.content[140]['marker'] offset 1",
  "visible:propertyValue at $.content[140]['marker'] offset 2",
  "visible:propertyValue at $.content[140]['marker'] offset 3",
  "visible:propertyValue at $.content[18].content[1]['lemma'] offset 0",
  "visible:propertyValue at $.content[18].content[1]['lemma'] offset 1",
  "visible:propertyValue at $.content[18].content[1]['lemma'] offset 2",
  "visible:propertyValue at $.content[20].content[1]['strong'] offset 0",
  "visible:propertyValue at $.content[20].content[1]['strong'] offset 1",
  "visible:propertyValue at $.content[4]['altnumber'] offset 0",
  "visible:propertyValue at $.content[4]['altnumber'] offset 1",
  "visible:propertyValue at $.content[4]['altnumber'] offset 2",
  "visible:propertyValue at $.content[4]['altnumber'] offset 3",
  "visible:propertyValue at $.content[4]['marker'] offset 0",
  "visible:propertyValue at $.content[4]['marker'] offset 1",
  "visible:propertyValue at $.content[4]['number'] offset 0",
  "visible:propertyValue at $.content[4]['number'] offset 1",
  "visible:propertyValue at $.content[4]['number'] offset 2",
  "visible:propertyValue at $.content[4]['pubnumber'] offset 0",
  "visible:propertyValue at $.content[4]['pubnumber'] offset 1",
  "visible:propertyValue at $.content[4]['pubnumber'] offset 2",
  "visible:propertyValue at $.content[4]['pubnumber'] offset 3",
  "visible:propertyValue at $.content[4]['pubnumber'] offset 4",
  "visible:propertyValue at $.content[6].content[0]['marker'] offset 0",
  "visible:propertyValue at $.content[6].content[0]['marker'] offset 1",
  "visible:propertyValue at $.content[6].content[0]['number'] offset 0",
  "visible:propertyValue at $.content[6].content[0]['number'] offset 1",
  // ── hidden (37) ──
  "hidden:closingMarker at $.content[140] offset 0",
  "hidden:closingMarker at $.content[140] offset 1",
  "hidden:closingMarker at $.content[140] offset 2",
  "hidden:closingMarker at $.content[140] offset 3",
  "hidden:closingMarker at $.content[140] offset 4",
  "hidden:closingMarker at $.content[140] offset 5",
  "hidden:marker at $.content[10].content[1]",
  "hidden:marker at $.content[140]",
  "hidden:marker at $.content[142]",
  "hidden:marker at $.content[4]",
  "hidden:marker at $.content[6].content[0]",
  "hidden:marker at $.content[85].content[1]",
  "hidden:propertyValue at $.content[10].content[1]['marker'] offset 0",
  "hidden:propertyValue at $.content[10].content[1]['marker'] offset 1",
  "hidden:propertyValue at $.content[140]['marker'] offset 0",
  "hidden:propertyValue at $.content[140]['marker'] offset 1",
  "hidden:propertyValue at $.content[140]['marker'] offset 2",
  "hidden:propertyValue at $.content[140]['marker'] offset 3",
  "hidden:propertyValue at $.content[4]['altnumber'] offset 0",
  "hidden:propertyValue at $.content[4]['altnumber'] offset 1",
  "hidden:propertyValue at $.content[4]['altnumber'] offset 2",
  "hidden:propertyValue at $.content[4]['altnumber'] offset 3",
  "hidden:propertyValue at $.content[4]['marker'] offset 0",
  "hidden:propertyValue at $.content[4]['marker'] offset 1",
  "hidden:propertyValue at $.content[4]['number'] offset 0",
  "hidden:propertyValue at $.content[4]['number'] offset 1",
  "hidden:propertyValue at $.content[4]['number'] offset 2",
  "hidden:propertyValue at $.content[4]['pubnumber'] offset 0",
  "hidden:propertyValue at $.content[4]['pubnumber'] offset 1",
  "hidden:propertyValue at $.content[4]['pubnumber'] offset 2",
  "hidden:propertyValue at $.content[4]['pubnumber'] offset 3",
  "hidden:propertyValue at $.content[4]['pubnumber'] offset 4",
  "hidden:propertyValue at $.content[6].content[0]['marker'] offset 0",
  "hidden:propertyValue at $.content[6].content[0]['marker'] offset 1",
  "hidden:propertyValue at $.content[6].content[0]['number'] offset 0",
  "hidden:propertyValue at $.content[6].content[0]['number'] offset 1",
  "hidden:propertyValue at $.content[6]['marker'] offset 1",
]);

/**
 * Round-trip entries that do not survive the trip unchanged. Key format is
 * `"<modeName>:<description>"`.
 *
 * Every entry addresses a byte INSIDE a read-only glyph — a book's `\\id 2SA `, and an opaque
 * block's `\\esb`, `\\cat …\\cat*`, and `\\esbe` — which render as decorator nodes. A decorator
 * holds no text of its own, so Lexical rejects a selection point inside one and the point
 * normalizes to the element boundary beside it. That boundary names the glyph as a whole, which is
 * why a glyph's FIRST byte round-trips while its later bytes report the first one back. An editor
 * node that could host a caret in those bytes is what would close this.
 */
const KNOWN_ROUND_TRIP_GAPS = new Set<string>([
  // ── editable (17) ──
  "editable:attributeMarker at $.content[140] key 'category'",
  "editable:closingAttributeMarker at $.content[140] key 'category' offset 5",
  "editable:closingMarker at $.content[140] offset 1",
  "editable:closingMarker at $.content[140] offset 2",
  "editable:closingMarker at $.content[140] offset 3",
  "editable:closingMarker at $.content[140] offset 4",
  "editable:closingMarker at $.content[140] offset 5",
  "editable:propertyValue at $.content[0]['code'] offset 0",
  "editable:propertyValue at $.content[0]['code'] offset 1",
  "editable:propertyValue at $.content[0]['code'] offset 2",
  "editable:propertyValue at $.content[0]['code'] offset 3",
  "editable:propertyValue at $.content[0]['marker'] offset 0",
  "editable:propertyValue at $.content[0]['marker'] offset 1",
  "editable:propertyValue at $.content[0]['marker'] offset 2",
  "editable:propertyValue at $.content[140]['marker'] offset 0",
  "editable:propertyValue at $.content[140]['marker'] offset 1",
  "editable:propertyValue at $.content[140]['marker'] offset 2",
]);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Create a Lexical editor pre-loaded with a serialized state. */
function createEditorWithState(serializedState: SerializedEditorState): LexicalEditor {
  const nodes = [TypedMarkNode, ...usjReactNodes];
  const { editor } = createBasicTestEnvironment(nodes);
  const editorState = editor.parseEditorState(serializedState);
  editor.setEditorState(editorState);
  return editor;
}

/** Groups location entries by locationType for organized test output. */
function groupByType(entries: LocationEntry2Sa[]): Map<LocationType, LocationEntry2Sa[]> {
  const map = new Map<LocationType, LocationEntry2Sa[]>();
  for (const entry of entries) {
    const group = map.get(entry.locationType) ?? [];
    group.push(entry);
    map.set(entry.locationType, group);
  }
  return map;
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("data-driven: usj2Sa location conversion", () => {
  const groupedLocations = groupByType(usjLocations2Sa);

  describe.each(MARKER_MODES)("'$name' mode", ({ name: modeName, state: serializedState }) => {
    let editor: LexicalEditor;

    beforeAll(() => {
      editor = createEditorWithState(serializedState);
    });

    // ── Resolution: every location must produce a valid Lexical selection ──
    describe("resolution (USJ → Lexical)", () => {
      for (const [locationType, entries] of groupedLocations) {
        describe(locationType, () => {
          for (const entry of entries) {
            const gapKey = `${modeName}:${entry.description}`;
            const isGap = KNOWN_RESOLUTION_GAPS.has(gapKey);
            const testName = isGap
              ? `${entry.description} (implementation gap)`
              : entry.description;

            it(testName, () => {
              const run = () => {
                editor.getEditorState().read(() => {
                  const usjSelection: SelectionRange = {
                    start: entry.documentLocation,
                  };
                  const editorSelection = $getRangeFromUsjSelection(usjSelection, undefined);

                  expect(editorSelection).toBeDefined();
                  if (!editorSelection) {
                    throw new Error(
                      `Expected editorSelection to be defined for ${entry.description}`,
                    );
                  }
                  expect(editorSelection.anchor).toBeDefined();
                  expect(editorSelection.focus).toBeDefined();
                });
              };
              if (isGap) expect(run).toThrow();
              else run();
            });
          }
        });
      }
    });

    // ── Round-trip: USJ → Lexical → USJ should be identity ──
    describe("round-trip (USJ → Lexical → USJ)", () => {
      /**
       * Resolve USJ→Lexical, set the selection, then read it back as USJ.
       * `updateSelection` must be called outside `editor.read()` so the
       * discrete update commits before we read back the result.
       */
      function roundTrip(entry: LocationEntry2Sa) {
        let anchorNode: LexicalNode | undefined;
        let anchorOffset: number | undefined;
        let focusNode: LexicalNode | undefined;
        let focusOffset: number | undefined;

        // Step 1 — resolve USJ to Lexical
        editor.getEditorState().read(() => {
          const usjSelection: SelectionRange = { start: entry.documentLocation };
          const editorSelection = $getRangeFromUsjSelection(usjSelection, undefined);
          if (!editorSelection)
            throw new Error(`Expected editorSelection to be defined for ${entry.description}`);
          anchorNode = editorSelection.anchor.getNode();
          anchorOffset = editorSelection.anchor.offset;
          focusNode = editorSelection.focus.getNode();
          focusOffset = editorSelection.focus.offset;
        });

        // Step 2 — set the Lexical selection
        if (
          anchorNode === undefined ||
          anchorOffset === undefined ||
          focusNode === undefined ||
          focusOffset === undefined
        ) {
          throw new Error(`Expected resolved selection values for ${entry.description}`);
        }
        updateSelection(editor, anchorNode, anchorOffset, focusNode, focusOffset);

        // Step 3 — read back as USJ
        editor.getEditorState().read(() => {
          const roundTripped = $getUsjSelectionFromEditor(undefined);
          if (!roundTripped)
            throw new Error(
              `Expected round-tripped selection to be defined for ${entry.description}`,
            );

          expect(roundTripped.start).toEqual(entry.documentLocation);
        });
      }

      // textContent can round-trip in every mode
      for (const locationType of UNIVERSAL_ROUND_TRIP_TYPES) {
        const entries = groupedLocations.get(locationType);
        if (!entries?.length) continue;

        describe(locationType, () => {
          for (const entry of entries) {
            const gapKey = `${modeName}:${entry.description}`;
            const isGap = KNOWN_ROUND_TRIP_GAPS.has(gapKey);
            const testName = isGap
              ? `${entry.description} (implementation gap)`
              : entry.description;

            it(testName, () => {
              if (isGap) expect(() => roundTrip(entry)).toThrow();
              else roundTrip(entry);
            });
          }
        });
      }

      // All other types only in editable mode
      if (modeName === "editable") {
        for (const locationType of EDITABLE_ONLY_ROUND_TRIP_TYPES) {
          const entries = groupedLocations.get(locationType);
          if (!entries?.length) continue;

          describe(locationType, () => {
            for (const entry of entries) {
              const gapKey = `${modeName}:${entry.description}`;
              const isGap = KNOWN_ROUND_TRIP_GAPS.has(gapKey);
              const testName = isGap
                ? `${entry.description} (implementation gap)`
                : entry.description;

              it(testName, () => {
                if (isGap) expect(() => roundTrip(entry)).toThrow();
                else roundTrip(entry);
              });
            }
          });
        }
      }
    });
  });
});
