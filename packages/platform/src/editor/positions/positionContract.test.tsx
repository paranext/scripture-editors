import {
  AlignmentSpec,
  checkContract,
  contractMismatches,
  PositionScenario,
  specMapSnapped,
} from "./positionContract.test-helpers";
import { twoParaUsj, typeOver } from "./positions.test-helpers";

const BASE = "In the beginning made";

function typed(live: string): PositionScenario["pend"] {
  return async (lexical) => {
    await typeOver(lexical, BASE, live);
  };
}

const BASELINE: PositionScenario[] = [
  {
    name: "unclosed-nd",
    usj: twoParaUsj([BASE]),
    pend: typed("In the \\nd LORD made"),
    liveNeedle: "LORD",
    settledNeedle: "LORD",
    alignment: { segments: [["\\p In the \\nd LORD made", "\\p In the \\nd LORD made"]] },
  },
  {
    name: "typed-note-expanded",
    usj: twoParaUsj([BASE]),
    mount: "expandedNotes",
    pend: typed("In the \\f + \\ft note\\f* made"),
    liveNeedle: "note",
    settledNeedle: "note",
    alignment: {
      segments: [["\\p In the \\f + \\ft note\\f* made", "\\p In the \\f + \\ft note\\f* made"]],
    },
  },
  {
    name: "typed-note-collapsed",
    usj: twoParaUsj([BASE]),
    pend: typed("In the \\f + \\ft note\\f* made"),
    liveNeedle: "made",
    settledNeedle: "made",
    alignment: {
      segments: [["\\p In the \\f + \\ft note\\f* made", "\\p In the \\f + \\ft note\\f* made"]],
    },
  },
];

describe("position contract — baseline", () => {
  it.each(BASELINE.map((s) => [s.name, s] as const))("%s maps every position", async (_, s) => {
    const report = await checkContract(s);
    expect(report.outbound.length).toBeGreaterThan(0);
    expect(report.inbound.length).toBeGreaterThan(0);
    expect(contractMismatches(report)).toEqual([]);
  });
});

describe("specMapSnapped", () => {
  it("maps a count through the stretch holding the byte in front of it, snapping left", () => {
    // A named default attribute (`lemma="grace"`) collapsing to a bare `grace` on settle — the
    // same alignment shape as the `w-named-default-appended` contract scenario, used here to
    // exercise the pure mapping function directly.
    const spec: AlignmentSpec = {
      segments: [
        ["\\p In the \\w grace|", "\\p In the \\w grace|"],
        ['lemma="', ""],
        ["grace", "grace"],
        ['"', ""],
        ["\\w* of God made", "\\w* of God made"],
      ],
    };
    const bar = "\\pInthe\\wgrace|".length;
    const liveLength = '\\pInthe\\wgrace|lemma="grace"\\w*ofGodmade'.length;
    const settledLength = "\\pInthe\\wgrace|grace\\w*ofGodmade".length;
    expect(specMapSnapped(spec, bar - 1, "live→settled")).toBe(bar - 1);
    expect(specMapSnapped(spec, bar, "live→settled")).toBe(bar); // in front of `lemma`
    expect(specMapSnapped(spec, bar + 3, "live→settled")).toBe(bar);
    expect(specMapSnapped(spec, bar + 7 + 2, "live→settled")).toBe(bar + 2);
    expect(specMapSnapped(spec, bar + 7 + 5, "live→settled")).toBe(bar + 5); // in front of `"`
    expect(specMapSnapped(spec, bar + 7 + 5 + 1, "live→settled")).toBe(bar + 5); // `\w*`
    expect(specMapSnapped(spec, liveLength, "live→settled")).toBe(settledLength);
    expect(specMapSnapped(spec, bar, "settled→live")).toBe(bar + 7); // the value's start
    expect(specMapSnapped(spec, bar + 2, "settled→live")).toBe(bar + 7 + 2);
    expect(specMapSnapped(spec, bar + 5, "settled→live")).toBe(bar + 7 + 5 + 1);
    expect(specMapSnapped(spec, settledLength, "settled→live")).toBe(liveLength);
  });
});
