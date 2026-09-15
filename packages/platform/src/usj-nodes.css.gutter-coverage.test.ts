// @vitest-environment node
// (jsdom rewrites `import.meta.url` to an http URL, which breaks the stylesheet read; this test
// only reads a file, so the node environment is the correct one anyway.)
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

/**
 * In the gutter view (`.psc-gutter-markers`), each paragraph's marker glyph is absolutely
 * positioned at `left: calc(-(gutter width) + 0.5em - var(--para-indent))`, so `--para-indent`
 * must equal the paragraph's own text-spacing margin or the glyph lands inside the text. The active
 * focus box also reads `--verse-text-start`, a hanging-indent paragraph's negative `text-indent`,
 * as a fallback start. Both expectations are derived from the base text-spacing rules in the same
 * file, so a marker that gains a margin or hanging indent without matching compensation fails here.
 *
 * This stylesheet is mirrored into consumers, so the gutter block is contract: a gap here becomes a
 * gap there on the next sync. paranext-core runs the same derivation over its copies in
 * `extensions/src/platform-scripture-editor/src/usj-nodes-scss-coverage.test.ts`.
 */

describe("usj-nodes.css .psc-gutter-markers.text-spacing coverage", () => {
  it("derives a non-empty expectation from the base text-spacing rules", () => {
    // If the base parser ever reads nothing, both coverage checks below would pass vacuously.
    expect(EXPECTED_PARA_INDENT.size).toBeGreaterThan(40);
    expect(EXPECTED_VERSE_TEXT_START.size).toBeGreaterThan(20);
    // The parser must be able to see every margin it is asked to compensate.
    expect(unreadableMarginSpellings()).toEqual([]);
    expect(nestingProblems("margin-left")).toEqual([]);
    expect(nestingProblems("margin-right")).toEqual([]);
    expect(nestingProblems("text-indent")).toEqual([]);
  });

  it("spot-checks base margins and hanging indents against the USFM stylesheet", () => {
    expect(pick(EXPECTED_PARA_INDENT, Object.keys(USFM_LEFT_MARGIN))).toEqual(USFM_LEFT_MARGIN);
    expect(pick(EXPECTED_VERSE_TEXT_START, Object.keys(USFM_FIRST_LINE_INDENT))).toEqual(
      USFM_FIRST_LINE_INDENT,
    );
    // `p` has a positive first-line indent (2.5vw); only negative ones are hanging indents.
    expect(EXPECTED_VERSE_TEXT_START.has("p")).toBe(false);
    // The table-row exclusion is only meaningful while those markers still have a base margin.
    const ltrMargins = resolveBaseValues("margin-left", "ltr");
    NOT_COMPENSATED.forEach((marker) => expect(ltrMargins.has(marker)).toBe(true));
  });

  it("every indented marker sets --para-indent equal to its text-spacing margin", () => {
    expect(nestingProblems("--para-indent")).toEqual([]);
    expect(directionQualifiedGutterRules("--para-indent")).toEqual([]);
    // One value serves both directions only if the base margins agree.
    expect(directionAsymmetries(EXPECTED_PARA_INDENT)).toEqual([]);
    expect(valueMismatches(ACTUAL_PARA_INDENT, "--para-indent", EXPECTED_PARA_INDENT)).toEqual([]);
    expect(unexpectedMarkers(ACTUAL_PARA_INDENT, "--para-indent", EXPECTED_PARA_INDENT)).toEqual(
      [],
    );
  });

  it("every hanging-indent marker sets --verse-text-start equal to its text-indent", () => {
    expect(nestingProblems("--verse-text-start")).toEqual([]);
    expect(directionQualifiedGutterRules("--verse-text-start")).toEqual([]);
    expect(
      valueMismatches(ACTUAL_VERSE_TEXT_START, "--verse-text-start", EXPECTED_VERSE_TEXT_START),
    ).toEqual([]);
    expect(
      unexpectedMarkers(ACTUAL_VERSE_TEXT_START, "--verse-text-start", EXPECTED_VERSE_TEXT_START),
    ).toEqual([]);
  });
});

/**
 * Markers whose base rules indent them but which must NOT have gutter compensation. A real table
 * row is a `<tr>` (`ImmutableTableRowNode`), not a `.para`, so the glyph rule never matches it.
 */
const NOT_COMPENSATED = new Set(["tr", "tr1", "tr2"]);

// Spot check against the USFM stylesheet (LeftMargin / FirstLineIndent in inches x 20 = vw):
// https://github.com/ubsicap/usfm/blob/master/sty/usfm.sty. One marker per distinct value. The
// derivation below guarantees base-to-gutter consistency, not base-to-spec; this catches a drift in
// one of these six, and a re-sync that changes any other marker's base value is not caught here.
const USFM_LEFT_MARGIN: { [key: string]: string } = {
  pi: "5vw", // 0.25"
  li1: "10vw", // 0.5"
  q1: "15vw", // 0.75"
  qm1: "20vw", // 1.0"
  li4: "25vw", // 1.25"
  lim4: "30vw", // 1.5"
};
const USFM_FIRST_LINE_INDENT: { [key: string]: string } = {
  qm1: "-15vw", // -0.75"
  q1: "-10vw", // -0.5"
  li1: "-7.5vw", // -0.375"
  q3: "-5vw", // -0.25"
  q4: "-2.5vw", // -0.125"
};

type Direction = "ltr" | "rtl" | "agnostic";

/** One `.usfm_<marker>` selector from a rule, with the writing direction it is scoped to. */
interface MarkerSelector {
  marker: string;
  direction: Direction;
}

interface Block {
  /** The rule's selector list, whitespace-collapsed and attribute quotes normalised to `'`. */
  selectors: string;
  /** Each `.usfm_<marker>` in the selector list, classified per selector, not per list. */
  markers: MarkerSelector[];
  declarations: string;
}

const MARKER_CLASS = /\.usfm_([a-z0-9]+)/;

/**
 * Classifies one selector (not a comma list) by the writing direction it is scoped to. Attribute
 * quotes are normalised so `[dir="ltr"]` and `[dir='ltr']` compare equal: this file uses double
 * quotes, the paranext-core SCSS copy single quotes.
 */
function directionOf(selector: string): Direction {
  if (selector.includes("[dir='rtl']")) return "rtl";
  if (selector.includes("[dir='ltr']")) return "ltr";
  return "agnostic";
}

const css = readFileSync(new URL("./usj-nodes.css", import.meta.url), "utf-8").replace(
  /\/\*[\s\S]*?\*\//g,
  "",
);

// The stylesheet is parsed as a flat list of `selector { declarations }` blocks. This regex cannot
// reliably read a rule nested inside another block (a media query or a keyframes at-rule), so a
// rule wrapped in one could be mis-parsed and its markers silently uncovered. `nestingProblems()`
// catches that by brace depth before the coverage checks run. Selector lists are split on commas
// and each selector classified on its own, so a group that mixes directions cannot misfile the
// whole group.
const blocks: Block[] = [...css.matchAll(/([^{}]+)\{([^}]+)\}/g)].map(
  ([, selectors, declarations]) => {
    const normalised = selectors.replace(/\s+/g, " ").replace(/"/g, "'").trim();
    const markers = normalised
      .split(",")
      .map((selector) => selector.trim())
      .flatMap((selector) => {
        const marker = MARKER_CLASS.exec(selector)?.[1];
        return marker ? [{ marker, direction: directionOf(selector) }] : [];
      });
    return { selectors: normalised, markers, declarations };
  },
);

/** Brace nesting depth at a character offset: 1 inside a top-level rule, >1 inside a nested one. */
function braceDepthAt(index: number): number {
  const before = css.slice(0, index);
  return (before.match(/\{/g) ?? []).length - (before.match(/\}/g) ?? []).length;
}

/**
 * Reports `property` setters that sit deeper than one block, where a browser would scope them
 * away but the flat block parser cannot reliably see them.
 */
function nestingProblems(property: string): string[] {
  const setter = new RegExp(`${property}\\s*:`, "g");
  const nested = [...css.matchAll(setter)].filter((match) => braceDepthAt(match.index ?? 0) > 1);
  return nested.length === 0
    ? []
    : [
        `${property}: ${nested.length} setter(s) are nested inside an @media/@keyframes block; ` +
          `the flat parser below cannot reliably see them. Update the parser.`,
      ];
}

/**
 * Reads the value of one `property: value;` declaration out of a rule's declaration block.
 *
 * Only a setter of exactly that property counts. The name must start the block or follow a `;` or
 * whitespace, so `margin-left` is not found inside `scroll-margin-left`; and it must be followed by
 * `:`, so `margin-left-foo` and a `var(--x)` read of a custom property do not count as setting it.
 *
 * @param declarations The text between a rule's `{` and `}`.
 * @param property The property name to read, e.g. `margin-left` or `--para-indent`.
 * @returns The trimmed value, or `undefined` when the block does not set that property.
 */
function declarationValue(declarations: string, property: string): string | undefined {
  const match = new RegExp(`(?:^|;|\\s)${property}\\s*:\\s*([^;]+)`).exec(declarations);
  return match ? match[1].trim() : undefined;
}

/** A block is a gutter compensation rule when its selector carries both scoping classes. */
function isGutterBlock(selectors: string): boolean {
  return selectors.includes("psc-gutter-markers") && selectors.includes("text-spacing");
}

/** A block is a base text-spacing rule: scoped by `.text-spacing` but not a gutter rule. */
function isBaseBlock(selectors: string): boolean {
  return selectors.includes("text-spacing") && !isGutterBlock(selectors);
}

/** Maps each `.usfm_<marker>` to the value the gutter rules give it for `property`. */
function getGutterMarkerValues(property: string): Map<string, string> {
  const values = new Map<string, string>();
  blocks
    .filter((block) => isGutterBlock(block.selectors))
    .forEach((block) => {
      const value = declarationValue(block.declarations, property);
      if (value === undefined) return;
      block.markers.forEach(({ marker }) => values.set(marker, value));
    });
  return values;
}

/**
 * Maps each `.usfm_<marker>` to the value the BASE text-spacing rules resolve for `property` in the
 * given direction: a `[dir=…]` rule for that direction wins over a direction-agnostic one, matching
 * the cascade (the qualified selector is more specific). Every value is kept here, zero included —
 * a `margin-left: 0` LTR override must be allowed to beat an agnostic `5vw` before any filtering,
 * or the filter would discard the winner and enforce the loser.
 */
function resolveBaseValues(property: string, direction: "ltr" | "rtl"): Map<string, string> {
  const agnostic = new Map<string, string>();
  const directed = new Map<string, string>();
  blocks
    .filter((block) => isBaseBlock(block.selectors))
    .forEach((block) => {
      const value = declarationValue(block.declarations, property);
      if (value === undefined) return;
      block.markers.forEach((entry) => {
        if (entry.direction === "agnostic") agnostic.set(entry.marker, value);
        else if (entry.direction === direction) directed.set(entry.marker, value);
      });
    });
  return new Map([...agnostic, ...directed]);
}

/**
 * Maps each marker with an inline-start margin in EITHER direction to the margin `--para-indent`
 * must equal: the LTR `margin-left` where there is one, else the RTL `margin-right`. Deriving from
 * the union means a marker indented only in RTL is still required to have an entry;
 * `directionAsymmetries` then reports that its two margins disagree.
 */
function resolveInlineStartMargins(): Map<string, string> {
  const ltr = resolveBaseValues("margin-left", "ltr");
  const rtl = resolveBaseValues("margin-right", "rtl");
  return new Map([...rtl, ...ltr]);
}

/** A length that moves the box: anything other than a zero (`0`, `0px`, `0vw`, `0in`, ...). */
function isNonZeroLength(value: string): boolean {
  return !/^-?0(\.0+)?[a-z%]*$/.test(value);
}

/** A negative length — the hanging indent that pulls the first line before the border edge. */
function isNegativeLength(value: string): boolean {
  return value.startsWith("-") && isNonZeroLength(value);
}

/** The `markers` entries of `values`, as an object, so a whole oracle can be compared in one go. */
function pick(
  values: Map<string, string>,
  markers: string[],
): { [marker: string]: string | undefined } {
  return Object.fromEntries(markers.map((marker) => [marker, values.get(marker)]));
}

/** Keeps the entries `accept` approves, minus the markers that must never be compensated. */
function needingCompensation(
  resolved: Map<string, string>,
  accept: (value: string) => boolean,
): Map<string, string> {
  return new Map(
    [...resolved].filter(([marker, value]) => accept(value) && !NOT_COMPENSATED.has(marker)),
  );
}

/** Reports each expected marker whose actual `property` value is missing or wrong. */
function valueMismatches(
  actual: Map<string, string>,
  property: string,
  expected: Map<string, string>,
): string[] {
  return [...expected]
    .filter(([marker, value]) => actual.get(marker) !== value)
    .map(
      ([marker, value]) =>
        `.usfm_${marker}: expected ${property}: ${value}, got ${actual.get(marker) ?? "none"}`,
    );
}

/**
 * Reports gutter markers that set `property` but have no base rule calling for it — the reverse of
 * `valueMismatches`, so a table-row entry or a stale entry left behind after a marker loses its
 * margin is flagged too.
 */
function unexpectedMarkers(
  actual: Map<string, string>,
  property: string,
  expected: Map<string, string>,
): string[] {
  return [...actual]
    .filter(([marker]) => !expected.has(marker))
    .map(
      ([marker, value]) =>
        `.usfm_${marker}: sets ${property}: ${value} but no base text-spacing rule calls for it`,
    );
}

/**
 * Reports gutter `property` rules qualified by writing direction (`[dir=…]`). The gutter values are
 * identical for LTR and RTL by design, so a qualifier would leave one direction uncompensated while
 * still counting as covered.
 */
function directionQualifiedGutterRules(property: string): string[] {
  const setter = new RegExp(`${property}\\s*:`);
  return blocks
    .filter(
      (block) =>
        isGutterBlock(block.selectors) &&
        setter.test(block.declarations) &&
        block.selectors.includes("[dir="),
    )
    .map((block) => `${property}: direction-qualified selector "${block.selectors}"`);
}

/**
 * Reports base marker rules that set a margin through a spelling `declarationValue` does not read
 * (the `margin` shorthand or a logical `margin-inline-*`). Such a rule would give a marker a
 * margin that neither side of the coverage check can see, so it must fail loudly rather than pass
 * silently.
 */
function unreadableMarginSpellings(): string[] {
  return blocks
    .filter((block) => isBaseBlock(block.selectors) && block.markers.length > 0)
    .filter((block) =>
      /(?:^|;|\s)(?:margin|margin-inline(?:-start|-end)?)\s*:/.test(block.declarations),
    )
    .map(
      (block) =>
        `"${block.selectors}" sets a margin with a spelling this test does not read; use ` +
        `margin-left / margin-right so the gutter compensation can be derived`,
    );
}

/**
 * Reports markers whose RTL inline-start margin differs from their LTR one, including a margin set
 * in only one direction. The same `--para-indent` feeds both the LTR `left` and the RTL `right`
 * glyph calculation, so a marker whose two margins disagree cannot be compensated correctly in both
 * directions by one value.
 */
function directionAsymmetries(expected: Map<string, string>): string[] {
  const ltr = resolveBaseValues("margin-left", "ltr");
  const rtl = resolveBaseValues("margin-right", "rtl");
  return [...expected.keys()]
    .filter((marker) => ltr.get(marker) !== rtl.get(marker))
    .map(
      (marker) =>
        `.usfm_${marker}: LTR margin-left ${ltr.get(marker) ?? "none"} but RTL margin-right ` +
        `${rtl.get(marker) ?? "none"}; one --para-indent cannot serve both directions`,
    );
}

// Every base inline-start margin is a paragraph indent the glyph must be pulled back by.
const EXPECTED_PARA_INDENT = needingCompensation(resolveInlineStartMargins(), isNonZeroLength);

// Every base negative text-indent is a hanging indent the focus box can fall back to.
const EXPECTED_VERSE_TEXT_START = needingCompensation(
  resolveBaseValues("text-indent", "ltr"),
  isNegativeLength,
);

const ACTUAL_PARA_INDENT = getGutterMarkerValues("--para-indent");
const ACTUAL_VERSE_TEXT_START = getGutterMarkerValues("--verse-text-start");
