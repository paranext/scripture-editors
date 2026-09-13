// @vitest-environment node
// (jsdom rewrites `import.meta.url` to an http URL, which breaks the stylesheet read; this test
// only reads a file, so the node environment is the correct one anyway.)
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

/**
 * In the gutter view (`.psc-gutter-markers`), each paragraph's marker glyph is absolutely
 * positioned at `left: calc(-(gutter width) + 0.5em - var(--para-indent))`, so `--para-indent`
 * must equal the paragraph's own text-spacing margin or the glyph lands inside the text. Likewise
 * the active focus box starts at `var(--verse-text-start)`, which must equal a hanging-indent
 * paragraph's negative `text-indent`.
 *
 * This test derives BOTH expectations from the base text-spacing rules in the same file, so a
 * marker that gains a margin or hanging indent without matching gutter compensation fails here by
 * construction. A hand-typed expected list cannot do that: it silently encodes whatever gap
 * existed when it was written.
 *
 * Base values follow the USFM stylesheet's LeftMargin / FirstLineIndent (inches x 20 = vw):
 * https://github.com/ubsicap/usfm/blob/master/sty/usfm.sty
 *
 * This stylesheet is mirrored into consumers, so the gutter block is contract: a gap here becomes a
 * gap there on the next sync. paranext-core runs the same derivation over its copies in
 * `extensions/src/platform-scripture-editor/src/usj-nodes-scss-coverage.test.ts`.
 */

const css = readFileSync(new URL("./usj-nodes.css", import.meta.url), "utf-8").replace(
  /\/\*[\s\S]*?\*\//g,
  "",
);

// The stylesheet is parsed as a flat list of `selector { declarations }` blocks. This regex cannot
// reliably read a rule nested inside another block (an @media query or @keyframes), so a gutter
// rule wrapped in one could be mis-parsed and its markers silently uncovered. `nestingProblems()`
// catches that by brace depth before the coverage checks run.
const RULE_BLOCK = /([^{}]+)\{([^}]+)\}/g;
const blocks = [...css.matchAll(RULE_BLOCK)].map(([, selectors, declarations]) => ({
  // Attribute quotes are normalised so `[dir="ltr"]` and `[dir='ltr']` compare equal: this file
  // uses double quotes, the paranext-core SCSS copy single quotes.
  selectors: selectors.replace(/\s+/g, " ").replace(/"/g, "'").trim(),
  declarations,
}));

const MARKER_CLASS = /\.usfm_([a-z0-9]+)/g;

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
 * Only a setter of exactly that property counts: the property name must start the block or follow
 * a `;` or whitespace, so `margin-left` does not match inside `margin-left-foo` and a `var(--x)`
 * read of a custom property does not count as setting it.
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

/**
 * A block is a base text-spacing rule for a paragraph marker when it is scoped by `.text-spacing`
 * but is not a gutter rule. RTL blocks are excluded: the gutter variables are direction-agnostic
 * (the RTL glyph rule reads the same `--para-indent`), so the LTR/direction-agnostic margin is the
 * one the compensation must mirror.
 */
function isNonRtlBaseBlock(selectors: string): boolean {
  return (
    selectors.includes("text-spacing") &&
    !isGutterBlock(selectors) &&
    !selectors.includes("[dir='rtl']")
  );
}

/** Maps each `.usfm_<marker>` to the value the gutter rules give it for `property`. */
function getGutterMarkerValues(property: string): Map<string, string> {
  const values = new Map<string, string>();
  blocks
    .filter((block) => isGutterBlock(block.selectors))
    .forEach((block) => {
      const value = declarationValue(block.declarations, property);
      if (value === undefined) return;
      [...block.selectors.matchAll(MARKER_CLASS)].forEach(([, marker]) =>
        values.set(marker, value),
      );
    });
  return values;
}

/**
 * Maps each `.usfm_<marker>` to the value the BASE text-spacing rules give it for `property`,
 * keeping only values `accept` approves. When a marker has both a direction-agnostic rule
 * (`.text-spacing .usfm_x`) and an LTR rule (`.text-spacing[dir='ltr'] .usfm_x`) the LTR value
 * wins, matching the cascade for an LTR document.
 */
function getBaseMarkerValues(
  property: string,
  accept: (value: string) => boolean,
): Map<string, string> {
  const agnostic = new Map<string, string>();
  const ltr = new Map<string, string>();
  blocks
    .filter((block) => isNonRtlBaseBlock(block.selectors))
    .forEach((block) => {
      const value = declarationValue(block.declarations, property);
      if (value === undefined || !accept(value)) return;
      const target = block.selectors.includes("[dir='ltr']") ? ltr : agnostic;
      [...block.selectors.matchAll(MARKER_CLASS)].forEach(([, marker]) =>
        target.set(marker, value),
      );
    });
  return new Map([...agnostic, ...ltr]);
}

/** A length that moves the box: anything other than a zero (`0`, `0px`, `0vw`, `0in`, ...). */
function isNonZeroLength(value: string): boolean {
  return !/^-?0(\.0+)?[a-z%]*$/.test(value);
}

/** A negative length — the hanging indent that pulls the first line before the border edge. */
function isNegativeLength(value: string): boolean {
  return value.startsWith("-") && isNonZeroLength(value);
}

/** Reports each expected marker whose actual `property` value is missing or wrong. */
function valueMismatches(property: string, expected: Map<string, string>): string[] {
  const actual = getGutterMarkerValues(property);
  return [...expected]
    .filter(([marker, value]) => actual.get(marker) !== value)
    .map(
      ([marker, value]) =>
        `.usfm_${marker}: expected ${property}: ${value}, got ${actual.get(marker) ?? "none"}`,
    );
}

/**
 * Reports gutter markers that set `property` but have no base rule calling for it — the reverse of
 * `valueMismatches`, so a stale entry left behind after a marker loses its margin is flagged too.
 */
function unexpectedMarkers(property: string, expected: Map<string, string>): string[] {
  const actual = getGutterMarkerValues(property);
  return [...actual]
    .filter(([marker]) => !expected.has(marker))
    .map(
      ([marker, value]) =>
        `.usfm_${marker}: sets ${property}: ${value} but no base text-spacing rule calls for it`,
    );
}

/**
 * Reports gutter `property` rules qualified by writing direction (`[dir=…]`). The gutter values are
 * identical for LTR and RTL, so a qualifier would leave one direction uncompensated while still
 * counting as covered.
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

// Every base text-spacing margin-left is a paragraph indent the gutter glyph must be pulled back by.
const EXPECTED_PARA_INDENT = getBaseMarkerValues("margin-left", isNonZeroLength);

// Every base negative text-indent is a hanging indent the focus box must start at.
const EXPECTED_VERSE_TEXT_START = getBaseMarkerValues("text-indent", isNegativeLength);

describe("usj-nodes.css .psc-gutter-markers.text-spacing coverage", () => {
  it("derives a non-empty expectation from the base text-spacing rules", () => {
    // If the base parser ever reads nothing, both coverage checks below would pass vacuously.
    expect(EXPECTED_PARA_INDENT.size).toBeGreaterThan(40);
    expect(EXPECTED_VERSE_TEXT_START.size).toBeGreaterThan(20);
    // Spot checks pinning the derivation to known USFM values, so a parser regression that reads
    // the wrong property or block shows up as a wrong number rather than a shorter list.
    expect(EXPECTED_PARA_INDENT.get("li2")).toBe("15vw");
    expect(EXPECTED_PARA_INDENT.get("qm2")).toBe("20vw");
    expect(EXPECTED_VERSE_TEXT_START.get("li2")).toBe("-7.5vw");
    expect(EXPECTED_VERSE_TEXT_START.get("iq1")).toBe("-15vw");
    expect(EXPECTED_VERSE_TEXT_START.has("p")).toBe(false);
  });

  it("every indented marker sets --para-indent equal to its text-spacing margin", () => {
    expect(nestingProblems("--para-indent")).toEqual([]);
    expect(directionQualifiedGutterRules("--para-indent")).toEqual([]);
    expect(valueMismatches("--para-indent", EXPECTED_PARA_INDENT)).toEqual([]);
    expect(unexpectedMarkers("--para-indent", EXPECTED_PARA_INDENT)).toEqual([]);
  });

  it("every hanging-indent marker sets --verse-text-start equal to its text-indent", () => {
    expect(nestingProblems("--verse-text-start")).toEqual([]);
    expect(directionQualifiedGutterRules("--verse-text-start")).toEqual([]);
    expect(valueMismatches("--verse-text-start", EXPECTED_VERSE_TEXT_START)).toEqual([]);
    expect(unexpectedMarkers("--verse-text-start", EXPECTED_VERSE_TEXT_START)).toEqual([]);
  });
});
