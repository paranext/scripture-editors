import {
  AlignmentSpec,
  checkContract,
  contractMismatches,
  PositionScenario,
  specMapSnapped,
} from "./positionContract.test-helpers";
import {
  $textContaining,
  huskBeforeNoteUsj,
  pendNoteInsideSettlingPara,
  twoParaUsj,
  typeOver,
} from "./positions.test-helpers";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, $getState, LexicalEditor, TextNode } from "lexical";
import { $isMarkerNode, textTypeState } from "shared";

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
    name: "w-two-attributes",
    usj: twoParaUsj([BASE]),
    pend: typed('In the \\w grace|lemma="g" strong="G1"\\w* made'),
    liveNeedle: "grace",
    settledNeedle: "grace",
    alignment: {
      segments: [
        [
          '\\p In the \\w grace|lemma="g" strong="G1"\\w* made',
          '\\p In the \\w grace|lemma="g" strong="G1"\\w* made',
        ],
      ],
    },
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

/** Run `edit` in one update and let the commit's listeners settle. */
async function inOneUpdate(lexical: LexicalEditor, edit: () => void): Promise<void> {
  await act(async () => {
    lexical.update(edit);
    await Promise.resolve();
    await Promise.resolve();
  });
}

/** A paragraph holding one `marker` char span with `word` as its text, between "In the " and
 * " of God made". */
function spanUsj(marker: string, word: string, attributes: { [name: string]: string } = {}) {
  const span: MarkerObject = { type: "char", marker, ...attributes, content: [word] };
  return twoParaUsj(["In the ", span, " of God made"]);
}

/** Append `typed` to the text node holding `word`, caret at the end of what was typed. The node's
 * leading separator stays: overwriting it would corrupt the span's marker. */
function appended(word: string, typed: string): PositionScenario["pend"] {
  return (lexical) =>
    inOneUpdate(lexical, () => {
      const node = $textContaining(word);
      const text = `${node.getTextContent()}${typed}`;
      node.setTextContent(text);
      node.select(text.length, text.length);
    });
}

/** The bytes around a span's attribute section, for a span whose typed `|name="value"` settles to
 * the bare default `|value`. */
function collapsedDefault(opener: string, name: string, value: string, closer: string) {
  return {
    segments: [
      [opener, opener],
      [`${name}="`, ""],
      [value, value],
      ['"', ""],
      [closer, closer],
    ] as const,
  };
}

/** A char span whose text is `word`, with `|name="value"` typed after that text. */
function namedDefault(
  name: string,
  marker: string,
  word: string,
  attribute: string,
  value: string,
): PositionScenario {
  return {
    name,
    usj: spanUsj(marker, word),
    pend: appended(word, `|${attribute}="${value}"`),
    liveNeedle: "God",
    settledNeedle: "God",
    alignment: collapsedDefault(
      `\\p In the \\${marker} ${word}|`,
      attribute,
      value,
      `\\${marker}* of God made`,
    ),
  };
}

/**
 * A milestone typed fresh with a named attribute (`|name="value"`), which settles to the bare
 * default `|value`. Its closer is the milestone's own self-closing `\*`, typed along with it: a
 * caret inside a TYPED closer is a case of its own.
 */
function typedMilestone(
  name: string,
  marker: string,
  attribute: string,
  value: string,
): PositionScenario {
  return {
    name,
    usj: twoParaUsj([BASE]),
    pend: typed(`In the \\${marker} |${attribute}="${value}"\\* made`),
    liveNeedle: "made",
    settledNeedle: "made",
    alignment: collapsedDefault(`\\p In the \\${marker} |`, attribute, value, "\\* made"),
  };
}

/**
 * An ALREADY-SETTLED milestone whose attribute run is retyped as `|name="value"`, which settles to
 * the bare default `|value`. The milestone starts with a different attribute (`start`), so it has
 * a run to retype. Milestones ride as ordinary paragraph siblings with no enclosing CharNode
 * (`$milestoneDisplayRun`), so re-spelling an existing one's attribute run exercises a different
 * rebuild path than a char span's ({@link namedDefault}, `row5-collapse`) — distinct coverage from
 * {@link typedMilestone}'s fresh-typed shape, which never revisits already-settled bytes.
 */
function namedMilestone(
  name: string,
  marker: string,
  start: { [name: string]: string },
  attribute: string,
  value: string,
): PositionScenario {
  return {
    name,
    usj: twoParaUsj(["In the ", { type: "ms", marker, ...start }, " made"]),
    pend: retypedAttributeRun(`|${attribute}="${value}"`),
    liveNeedle: "made",
    settledNeedle: "made",
    alignment: collapsedDefault(`\\p In the \\${marker} |`, attribute, value, "\\* made"),
  };
}

/** The paragraph's attribute display run. */
function $attributeRun(): TextNode {
  const run = $getRoot()
    .getAllTextNodes()
    .find((node) => !$isMarkerNode(node) && $getState(node, textTypeState) === "attribute");
  if (!run) throw new Error("no attribute run");
  return run;
}

/** Retype the paragraph's attribute run as `typed`, keeping its leading separator, with the caret
 * in front of the closing quote. */
function retypedAttributeRun(typed: string): PositionScenario["pend"] {
  return (lexical) =>
    inOneUpdate(lexical, () => {
      const run = $attributeRun();
      const leading = /^\s*/.exec(run.getTextContent())?.[0] ?? "";
      const text = `${leading}${typed}`;
      run.setTextContent(text);
      run.select(text.length - 1, text.length - 1);
    });
}

const RESPELLINGS: PositionScenario[] = [
  namedDefault("w-named-default-appended", "w", "grace", "lemma", "grace"),
  namedDefault("w-lemma-repeated", "w", "lemma", "lemma", "lemma"),
  namedDefault("rb-gloss-named", "rb", "grace", "gloss", "x"),
  namedDefault("xt-link-href-named", "xt", "grace", "link-href", "GEN 1:1"),
  namedDefault("jmp-link-href-named", "jmp", "grace", "link-href", "GEN 1:1"),
  typedMilestone("qt-s-who-typed", "qt-s", "who", "Pilate"),
  namedMilestone("qt-s-who-retyped", "qt-s", { sid: "q1" }, "who", "Pilate"),
  typedMilestone("ts-s-sid-typed", "ts-s", "sid", "a"),
  namedMilestone("ts-s-sid-retyped", "ts-s", { eid: "z" }, "sid", "a"),
  typedMilestone("qt-e-eid-typed", "qt-e", "eid", "a"),
  namedMilestone("qt-e-eid-retyped", "qt-e", { sid: "z" }, "eid", "a"),
  {
    name: "w-duplicate-name",
    usj: spanUsj("w", "grace"),
    pend: appended("grace", '|lemma="a" lemma="b"'),
    liveNeedle: "God",
    settledNeedle: "God",
    alignment: {
      segments: [
        ["\\p In the \\w grace|", "\\p In the \\w grace|"],
        ['lemma="a" lemma="', ""],
        ["b", "b"],
        ['"', ""],
        ["\\w* of God made", "\\w* of God made"],
      ],
    },
  },
  {
    name: "w-reserved-key",
    usj: spanUsj("w", "grace"),
    pend: appended("grace", '|lemma="a" type="b"'),
    liveNeedle: "God",
    settledNeedle: "God",
    alignment: {
      segments: [
        ["\\p In the \\w grace|", "\\p In the \\w grace|"],
        ['lemma="', ""],
        ["a", "a"],
        ['" type="b"', ""],
        ["\\w* of God made", "\\w* of God made"],
      ],
    },
  },
  {
    name: "w-spaced-attribute",
    usj: spanUsj("w", "grace"),
    pend: appended("grace", '| lemma = "b" '),
    liveNeedle: "God",
    settledNeedle: "God",
    alignment: collapsedDefault("\\p In the \\w grace|", "lemma", "b", "\\w* of God made"),
  },
  {
    name: "w-single-quoted",
    usj: spanUsj("w", "grace"),
    pend: appended("grace", "|lemma='x'"),
    liveNeedle: "God",
    settledNeedle: "God",
    alignment: {
      segments: [
        [
          "\\p In the \\w grace|lemma='x'\\w* of God made",
          "\\p In the \\w grace|lemma='x'\\w* of God made",
        ],
      ],
    },
  },
  {
    name: "row5-collapse",
    usj: spanUsj("w", "grace", { lemma: "grace", strong: "G5485" }),
    pend: retypedAttributeRun('|lemma="grace"'),
    liveNeedle: "God",
    settledNeedle: "God",
    alignment: collapsedDefault("\\p In the \\w grace|", "lemma", "grace", "\\w* of God made"),
  },
];

/** A typed `\fig` whose `file="…"` the settled figure spells `src="…"`. */
const FIGURE_LIVE = 'In \\fig a|file="x.jpg"\\fig* made';
const FIGURE_ALIGNMENT: AlignmentSpec = {
  segments: [
    ["\\p In \\fig a|", "\\p In \\fig a|"],
    ["file", "src"],
    ['="x.jpg"\\fig* made', '="x.jpg"\\fig* made'],
  ],
};

const LITERALS: PositionScenario[] = [
  {
    name: "typed-figure-standard",
    usj: twoParaUsj([BASE]),
    pend: typed(FIGURE_LIVE),
    liveNeedle: "made",
    settledNeedle: "made",
    alignment: FIGURE_ALIGNMENT,
  },
  {
    name: "typed-figure-expanded",
    usj: twoParaUsj([BASE]),
    mount: "expandedNotes",
    pend: typed(FIGURE_LIVE),
    liveNeedle: "made",
    settledNeedle: "made",
    alignment: FIGURE_ALIGNMENT,
  },
  {
    name: "fig-usfm2-positional",
    usj: twoParaUsj([BASE]),
    pend: typed("In \\fig a|x.jpg|col|||\\fig* made"),
    liveNeedle: "made",
    settledNeedle: "made",
    alignment: {
      segments: [
        ["\\p In \\fig a|x.jpg|col|||\\fig* made", "\\p In \\fig a|x.jpg|col|||\\fig* made"],
      ],
    },
  },
  {
    name: "note-with-named-default",
    usj: twoParaUsj([BASE]),
    mount: "expandedNotes",
    pend: typed('In\\f + \\ft see \\w w|lemma="x"\\w*\\f* made'),
    liveNeedle: "made",
    settledNeedle: "made",
    alignment: collapsedDefault("\\p In\\f + \\ft see \\w w|", "lemma", "x", "\\w*\\f* made"),
  },
  {
    name: "B-named-then-note",
    // The span and its closer are the document's, and so is the note's literal text, which the
    // paragraph's settle turns into a note once the attribute typed into the span pends it.
    usj: twoParaUsj([
      "In the ",
      { type: "char", marker: "w", content: ["beginning"] },
      "\\f + \\ft n\\f* made",
    ]),
    mount: "expandedNotes",
    pend: appended("beginning", '|lemma="b"'),
    liveNeedle: "made",
    settledNeedle: "made",
    alignment: collapsedDefault(
      "\\p In the \\w beginning|",
      "lemma",
      "b",
      "\\w*\\f + \\ft n\\f* made",
    ),
  },
  {
    name: "D-fig-then-note",
    usj: twoParaUsj([BASE]),
    mount: "expandedNotes",
    pend: typed('In \\fig a|file="x.jpg"\\fig* the\\f + \\ft n\\f* made'),
    liveNeedle: "made",
    settledNeedle: "made",
    alignment: {
      segments: [
        ["\\p In \\fig a|", "\\p In \\fig a|"],
        ["file", "src"],
        ['="x.jpg"\\fig* the\\f + \\ft n\\f* made', '="x.jpg"\\fig* the\\f + \\ft n\\f* made'],
      ],
    },
  },
  {
    name: "D-fig-then-optbreak",
    usj: twoParaUsj([BASE]),
    pend: typed('In \\fig a|file="x.jpg"\\fig* the // begin ning made'),
    liveNeedle: "made",
    settledNeedle: "made",
    alignment: {
      segments: [
        ["\\p In \\fig a|", "\\p In \\fig a|"],
        ["file", "src"],
        ['="x.jpg"\\fig* the // begin ning made', '="x.jpg"\\fig* the // begin ning made'],
      ],
    },
  },
  {
    name: "nested-note-in-settling-para",
    usj: huskBeforeNoteUsj(),
    mount: "expandedNotes",
    pend: (lexical) => pendNoteInsideSettlingPara(lexical),
    liveNeedle: "before",
    settledNeedle: "before",
    alignment: {
      segments: [
        [
          "\\q1 before \\f + \\fq 1.1\\fq*note body\\f* after",
          "\\q1 before \\f + \\fq 1.1\\fq*note body\\f* after",
        ],
      ],
    },
  },
];

/** A paragraph whose typed text settles into several top-level items: the paragraph itself, then
 * what the typed block marker opens. Each side spells the same non-whitespace bytes, so every
 * position maps one for one. */
function splitScenario(
  name: string,
  live: string,
  settledItems: number,
  usj: Usj = twoParaUsj([BASE]),
): PositionScenario {
  const bytes = `\\p ${live}`;
  return {
    name,
    usj,
    pend: typed(live),
    liveNeedle: "In the",
    settledNeedle: "In the",
    settledItems,
    alignment: { segments: [[bytes, bytes]] },
  };
}

/** {@link twoParaUsj} without its trailing paragraph, so the typed paragraph is the document's last
 * item. */
function lastParaUsj(): Usj {
  const usj = twoParaUsj([BASE]);
  return { ...usj, content: usj.content.slice(0, -1) };
}

const SPLITS: PositionScenario[] = [
  // The paragraph, the chapter, and `made` as a bare root string.
  splitScenario("typed-chapter", "In the \\c 2 made", 3),
  // The paragraph, the chapter, and the unclosed `\ca` span at root, which does not fold.
  splitScenario("typed-chapter-ca", "In the \\c 2 \\ca 3 made", 3),
  // The paragraph and a table of one row.
  splitScenario("typed-table-row", "In the \\tr \\tc1 a \\tc2 b", 2),
  // The paragraph and the sidebar, which the settled side spells as one preserved run.
  splitScenario("typed-sidebar", "In the \\esb \\p side \\esbe", 2),
  // The same sidebar typed into the document's last paragraph: the scope is then the last root item,
  // and its end is the end of its last leaf, not one past the document's final newline.
  splitScenario("typed-sidebar-last", "In the \\esb \\p side \\esbe", 2, lastParaUsj()),
  // The paragraph, the chapter, and the closed `\nd` span at root as the scope's last item: the end
  // of the scope is just past the span's closer.
  splitScenario("typed-char-at-scope-end", "In the \\c 2 \\nd LORD\\nd*", 3),
];

describe("position contract — attribute re-spellings", () => {
  it.each(RESPELLINGS.map((s) => [s.name, s] as const))("%s maps every position", async (_, s) => {
    const report = await checkContract(s);
    expect(report.outbound.length).toBeGreaterThan(0);
    expect(report.inbound.length).toBeGreaterThan(0);
    expect(contractMismatches(report)).toEqual([]);
  });
});

describe("position contract — literals the settle turns into nodes", () => {
  it.each(LITERALS.map((s) => [s.name, s] as const))("%s maps every position", async (_, s) => {
    const report = await checkContract(s);
    expect(report.outbound.length).toBeGreaterThan(0);
    expect(report.inbound.length).toBeGreaterThan(0);
    expect(contractMismatches(report)).toEqual([]);
  });
});

describe("position contract — baseline", () => {
  it.each(BASELINE.map((s) => [s.name, s] as const))("%s maps every position", async (_, s) => {
    const report = await checkContract(s);
    expect(report.outbound.length).toBeGreaterThan(0);
    expect(report.inbound.length).toBeGreaterThan(0);
    expect(contractMismatches(report)).toEqual([]);
  });
});

describe("position contract — scopes that settle into several top-level items", () => {
  it.each(SPLITS.map((s) => [s.name, s] as const))("%s maps every position", async (_, s) => {
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
