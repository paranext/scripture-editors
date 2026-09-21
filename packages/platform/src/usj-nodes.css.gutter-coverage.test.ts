// @vitest-environment node
// (jsdom rewrites `import.meta.url` to an http URL, which breaks the stylesheet read; this test
// only reads a file, so the node environment is the correct one anyway.)
import { readFileSync } from "node:fs";
import postcss, { type Rule } from "postcss";
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
 *
 * Known limits of the derivation. Approximations in play today, each benign as the sheet stands:
 * - Selectors are classified by class-name token, not resolved against the DOM, so a rule with no
 *   marker class is not modelled. That includes the blanket `.psc-gutter-markers .para` rule that
 *   sets the `0px` defaults every compensation rests on.
 * - A direction-agnostic `margin-right` counts as an inline-start margin. Thirteen base rules set
 *   one today; each also sets the same `margin-left`, which wins the merge.
 * Cases today's sheet does not reach:
 * - A descendant form such as `.psc-gutter-markers .text-spacing` still reads as a gutter rule.
 * - The cascade is approximated as "direction-qualified beats agnostic", ignoring
 *   equal-specificity source order.
 * - Padding is not tracked, only margins and `text-indent`.
 * - A `calc()` value is reported as unreadable rather than evaluated.
 * - Direction is read from `[dir=…]` and `:dir(…)` only, with `:not()` flipping it.
 */

describe("usj-nodes.css .psc-gutter-markers.text-spacing coverage", () => {
  it("can read every rule and value it derives from", () => {
    // A tracked property set anywhere but directly in a top-level marker rule (inside an at-rule,
    // or an at-rule nested in the rule) is scoped away by the browser and unread here.
    expect(nestedTrackedRules()).toEqual([]);
    // Reports margins spelled in a way the derivation cannot read, tracked properties in marker
    // rules outside the scopes it models, real margins inside a compensation rule, keyword or
    // `calc()` values, and `!important`.
    expect(unreadableDeclarations()).toEqual([]);
    // Both sides of the comparisons below come from the same parser, so a parser that started
    // reading less would shrink them in step. The floors sit well below the real sizes and well
    // above zero.
    expect(EXPECTED_PARA_INDENT.size).toBeGreaterThan(40);
    expect(EXPECTED_VERSE_TEXT_START.size).toBeGreaterThan(20);
    // The gutter values are identical for LTR and RTL by design, so no gutter rule may be
    // direction-qualified: it would leave one direction uncompensated while counting as covered.
    expect(directionQualifiedGutterRules("--para-indent")).toEqual([]);
    expect(directionQualifiedGutterRules("--verse-text-start")).toEqual([]);
  });

  it("spot-checks base margins and hanging indents against the USFM stylesheet", () => {
    expect(pick(EXPECTED_PARA_INDENT, Object.keys(USFM_LEFT_MARGIN))).toEqual(USFM_LEFT_MARGIN);
    expect(pick(EXPECTED_VERSE_TEXT_START, Object.keys(USFM_FIRST_LINE_INDENT))).toEqual(
      USFM_FIRST_LINE_INDENT,
    );
    // `p` has a positive first-line indent (2.5vw); only negative ones are hanging indents.
    expect(EXPECTED_VERSE_TEXT_START.has("p")).toBe(false);
    // The table-row exclusion is only meaningful while that marker still has a real margin.
    NOT_COMPENSATED.forEach((marker) =>
      expect(isNonZeroLength(BASE_INLINE_START_MARGIN.get(marker) ?? "0")).toBe(true),
    );
  });

  it("every indented marker sets --para-indent equal to its text-spacing margin", () => {
    // One value serves both directions only if the base margins agree, including a margin set
    // in only one direction.
    expect(directionAsymmetries("margin-left", "margin-right")).toEqual([]);
    expect(ACTUAL_PARA_INDENT).toEqual(EXPECTED_PARA_INDENT);
  });

  it("every hanging-indent marker sets --verse-text-start equal to its text-indent", () => {
    expect(directionAsymmetries("text-indent", "text-indent")).toEqual([]);
    expect(ACTUAL_VERSE_TEXT_START).toEqual(EXPECTED_VERSE_TEXT_START);
    // The focus box takes min(--verse-text-start, -(gutter) - --para-indent). A hanging indent on a
    // marker with no margin would win that min() and start the box outside the editor.
    const hangingWithoutMargin = [...EXPECTED_VERSE_TEXT_START.keys()].filter(
      (marker) => !EXPECTED_PARA_INDENT.has(marker),
    );
    expect(hangingWithoutMargin).toEqual([]);
    // The focus-box comments say the marker's own column wins that min() for every marker here.
    // That holds while no hanging indent reaches past its marker's margin.
    const hangingBeyondMargin = [...EXPECTED_VERSE_TEXT_START].filter(
      ([marker, indent]) => !isWithin(indent, EXPECTED_PARA_INDENT.get(marker) ?? "0"),
    );
    expect(hangingBeyondMargin).toEqual([]);
  });
});

/**
 * Markers whose base rules indent them but which must NOT have gutter compensation. A real table
 * row (`\tr`) is a `<tr>` (`ImmutableTableRowNode`), not a `.para`, so the glyph rule never matches
 * it. `usfmFragmentToUsj` builds a table row only for a marker that is exactly `tr`; the obsolete
 * `\tr1` and `\tr2` come through as ordinary paragraphs and need an entry like any other indented
 * marker.
 */
const NOT_COMPENSATED = new Set(["tr"]);

// Spot check against the USFM stylesheet (LeftMargin / FirstLineIndent in inches x 20 = vw):
// https://github.com/ubsicap/usfm/blob/master/sty/usfm.sty. One marker per distinct value. The
// derivation below guarantees base-to-gutter consistency, not base-to-spec; this catches a drift in
// one of these markers; a re-sync that changes any other marker's base value is not caught here.
const USFM_LEFT_MARGIN: { [key: string]: string } = {
  p2: "2.5vw", // 0.125"
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

/** The properties this test derives from or checks; a nested or unreadable one of these fails. */
const TRACKED_PROPERTIES = new Set([
  "margin-left",
  "margin-right",
  "text-indent",
  "--para-indent",
  "--verse-text-start",
]);

/** The only properties a compensation rule may set; a margin there would be invisible. */
const GUTTER_PROPERTIES = new Set(["--para-indent", "--verse-text-start"]);

/** Margin spellings the derivation cannot read; a marker rule using one must fail loudly. */
const UNREADABLE_MARGIN_PROPERTIES = new Set([
  "margin",
  "margin-inline",
  "margin-inline-start",
  "margin-inline-end",
]);

type Direction = "ltr" | "rtl" | "agnostic";

/** One selector of a rule, with its `.usfm_<marker>` and the writing direction it is scoped to. */
interface MarkerSelector {
  selector: string;
  marker: string;
  direction: Direction;
}

/** A top-level rule that names at least one `.usfm_<marker>`. */
interface Block {
  rule: Rule;
  markers: MarkerSelector[];
}

const root = postcss.parse(readFileSync(new URL("./usj-nodes.css", import.meta.url), "utf-8"));

/**
 * The marker a selector styles: the LAST `.usfm_<marker>` class in it, since a rule such as
 * `.usfm_c .usfm_ca` styles the child. Marker classes may carry hyphens and capitals (`usfm_qt-s`,
 * `usfm_xtSeeAlso`), so each token is read to the end of the class name; a `.usfm_` token that is
 * not a whole class name is a parser gap and throws rather than being read as a shorter marker, and
 * so does a marker class inside a functional pseudo-class (`:not()`, `:is()`), which cannot be
 * attributed to one marker.
 */
function markerOf(selector: string): string | undefined {
  const inPseudoFunction = /:[a-z-]+\([^()]*\.usfm_/i.exec(selector);
  if (inPseudoFunction)
    throw new Error(`Cannot attribute the marker in "${inPseudoFunction[0]}…)" in "${selector}"`);
  const tokens = [...selector.matchAll(/\.usfm_[^\s.:#[>+~,)]*/g)].map((match) => match[0]);
  if (tokens.length === 0) return undefined;
  const last = tokens[tokens.length - 1];
  const match = /^\.usfm_([A-Za-z0-9-]+)$/.exec(last);
  if (!match) throw new Error(`Cannot read the marker class "${last}" in "${selector}"`);
  return match[1];
}

/** A `[dir=…]` attribute in any quoting or case, with or without a case flag, or a `:dir()`. */
const DIRECTION_SELECTOR =
  /\[\s*dir\s*=\s*["']?([a-z]+)["']?(?:\s+[is])?\s*\]|:dir\(\s*([a-z]+)\s*\)/i;

/**
 * The writing direction a selector is scoped to; a value other than `ltr` or `rtl` is neither. A
 * direction inside `:not()` scopes the selector to the other direction.
 */
function directionOf(selector: string): Direction {
  const match = DIRECTION_SELECTOR.exec(selector);
  const direction = (match?.[1] ?? match?.[2])?.toLowerCase();
  if (direction !== "ltr" && direction !== "rtl") return "agnostic";
  const negated = match && /:not\(\s*$/i.test(selector.slice(0, match.index));
  if (!negated) return direction;
  return direction === "ltr" ? "rtl" : "ltr";
}

/** Whether a selector mentions text direction at all, in any spelling. */
function isDirectionQualified(selector: string): boolean {
  return /\[\s*dir\b|:dir\(/i.test(selector);
}

/** A gutter compensation selector carries both scoping classes. */
function isGutterSelector(selector: string): boolean {
  return selector.includes("psc-gutter-markers") && selector.includes("text-spacing");
}

/** A base text-spacing selector: scoped by `.text-spacing` but not a gutter selector. */
function isBaseSelector(selector: string): boolean {
  return selector.includes("text-spacing") && !isGutterSelector(selector);
}

/** Standard property names are case-insensitive and fold to lower case; custom properties are not. */
function propertyName(prop: string): string {
  return prop.startsWith("--") ? prop : prop.toLowerCase();
}

/** The value a rule sets for `property`, whitespace-collapsed; the last declaration wins. */
function declarationValue(rule: Rule, property: string): string | undefined {
  let value: string | undefined;
  rule.each((node) => {
    if (node.type === "decl" && propertyName(node.prop) === property)
      value = node.value.replace(/\s+/g, " ");
  });
  return value;
}

// Top-level rules that name a marker class. Rules nested in at-rules are left out on purpose;
// `nestedTrackedRules` is what makes that safe, by failing when one of them sets a property this
// test would otherwise have read.
const BLOCKS: Block[] = [];
root.walkRules((rule) => {
  if (rule.parent?.type !== "root") return;
  const markers = rule.selectors.flatMap((selector) => {
    const marker = markerOf(selector);
    return marker ? [{ selector, marker, direction: directionOf(selector) }] : [];
  });
  if (markers.length > 0) BLOCKS.push({ rule, markers });
});

/**
 * Tracked properties of marker rules that are not set directly in a top-level rule: the rule sits
 * inside an at-rule, or the declaration sits inside an at-rule nested in the rule. The browser
 * scopes both away and the flat derivation reads neither. Rules with no marker class are ignored,
 * so an unrelated `@media print { .usfm .note { margin: 0 } }` does not trip this.
 */
function nestedTrackedRules(): string[] {
  const found = new Set<string>();
  root.walkRules((rule) => {
    if (!rule.selectors.some((selector) => markerOf(selector))) return;
    rule.walkDecls((decl) => {
      const property = propertyName(decl.prop);
      if (!TRACKED_PROPERTIES.has(property) && !UNREADABLE_MARGIN_PROPERTIES.has(property)) return;
      if (decl.parent !== rule || rule.parent?.type !== "root")
        found.add(`${property} inside a nested rule: ${rule.selector}`);
    });
  });
  return [...found];
}

/**
 * Marker declarations the derivation cannot read: a `margin` shorthand or logical margin; a tracked
 * property in a marker rule that is neither a base nor a gutter rule (the derivation only models
 * those two scopes); a real margin or indent inside a compensation rule (which may set only the two
 * custom properties); a keyword or `calc()` in place of a plain length; `!important`.
 */
function unreadableDeclarations(): string[] {
  const found: string[] = [];
  BLOCKS.forEach(({ rule, markers }) => {
    const isGutter = markers.some(({ selector }) => isGutterSelector(selector));
    const isBase = markers.some(({ selector }) => isBaseSelector(selector));
    rule.each((node) => {
      if (node.type !== "decl") return;
      const property = propertyName(node.prop);
      if (UNREADABLE_MARGIN_PROPERTIES.has(property))
        found.push(`${rule.selector}: ${property} is not derivable; use margin-left/right`);
      if (!TRACKED_PROPERTIES.has(property)) return;
      if (!isBase && !isGutter)
        found.push(
          `${rule.selector}: ${property} is outside .text-spacing; the derivation is blind to it`,
        );
      if (isGutter && !GUTTER_PROPERTIES.has(property))
        found.push(
          `${rule.selector}: a compensation rule may set only --para-indent/--verse-text-start`,
        );
      if (node.important) found.push(`${rule.selector}: ${property} !important`);
      if (!/^-?\d*\.?\d+[a-z%]+$|^0$/i.test(node.value.trim()))
        found.push(`${rule.selector}: ${property}: ${node.value} is not a plain length`);
    });
  });
  return found;
}

/** Maps each marker to the value the gutter rules give it for `property`. */
function gutterValues(property: string): Map<string, string> {
  const values = new Map<string, string>();
  BLOCKS.forEach(({ rule, markers }) => {
    const value = declarationValue(rule, property);
    if (value === undefined) return;
    markers.forEach(({ selector, marker }) => {
      if (isGutterSelector(selector)) values.set(marker, value);
    });
  });
  return values;
}

/**
 * Maps each marker to the value the BASE text-spacing rules resolve for `property` in the given
 * direction. A `[dir=…]` rule for that direction wins over a direction-agnostic one; this
 * approximates the cascade, where the qualified selector is usually the more specific (see the
 * known limits in the header for the case it misses). Zeros are kept: a `margin-left: 0` LTR
 * override must be allowed to beat an agnostic `5vw` before any filtering.
 */
function baseValues(property: string, direction: "ltr" | "rtl"): Map<string, string> {
  const agnostic = new Map<string, string>();
  const directed = new Map<string, string>();
  BLOCKS.forEach(({ rule, markers }) => {
    const value = declarationValue(rule, property);
    if (value === undefined) return;
    markers.forEach((entry) => {
      if (!isBaseSelector(entry.selector)) return;
      if (entry.direction === "agnostic") agnostic.set(entry.marker, value);
      else if (entry.direction === direction) directed.set(entry.marker, value);
    });
  });
  return new Map([...agnostic, ...directed]);
}

/** A length that moves the box: anything other than a zero (`0`, `0px`, `0vw`, `0in`, ...). */
function isNonZeroLength(value: string): boolean {
  return !/^-?0(\.0+)?[a-z%]*$/i.test(value);
}

/** A negative length: the hanging indent that pulls the first line before the border edge. */
function isNegativeLength(value: string): boolean {
  return value.startsWith("-") && isNonZeroLength(value);
}

/**
 * Whether a hanging indent stays within its marker's margin: the same unit and no larger a
 * magnitude. Lengths in different units cannot be compared here and count as beyond.
 */
function isWithin(indent: string, margin: string): boolean {
  const parse = (value: string) => /^(-?\d*\.?\d+)([a-z%]*)$/i.exec(value);
  const parsedIndent = parse(indent);
  const parsedMargin = parse(margin);
  if (!parsedIndent || !parsedMargin) return false;
  if (parsedIndent[2].toLowerCase() !== parsedMargin[2].toLowerCase()) return false;
  return Math.abs(Number(parsedIndent[1])) <= Math.abs(Number(parsedMargin[1]));
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

/**
 * Reports markers whose RTL value for `rtlProperty` differs from their LTR value for
 * `ltrProperty`, including a value set in only one direction. The same custom property feeds both
 * directions, so one value can only be right if the base rules agree.
 */
function directionAsymmetries(ltrProperty: string, rtlProperty: string): string[] {
  const ltr = baseValues(ltrProperty, "ltr");
  const rtl = baseValues(rtlProperty, "rtl");
  return [...new Set([...ltr.keys(), ...rtl.keys()])]
    .filter((marker) => (ltr.get(marker) ?? "0") !== (rtl.get(marker) ?? "0"))
    .map(
      (marker) =>
        `.usfm_${marker}: LTR ${ltrProperty} ${ltr.get(marker) ?? "none"} but RTL ` +
        `${rtlProperty} ${rtl.get(marker) ?? "none"}; one value cannot serve both directions`,
    );
}

/** Gutter rules for `property` that mention text direction at all, which the design forbids. */
function directionQualifiedGutterRules(property: string): string[] {
  return BLOCKS.filter(
    ({ rule, markers }) =>
      declarationValue(rule, property) !== undefined &&
      markers.some(({ selector }) => isGutterSelector(selector) && isDirectionQualified(selector)),
  ).map(({ rule }) => `${property}: direction-qualified selector "${rule.selector}"`);
}

/** Each marker's inline-start margin: the LTR `margin-left`, else the RTL `margin-right`. */
const BASE_INLINE_START_MARGIN = new Map([
  ...baseValues("margin-right", "rtl"),
  ...baseValues("margin-left", "ltr"),
]);

// Every base inline-start margin is a paragraph indent the glyph must be pulled back by.
const EXPECTED_PARA_INDENT = needingCompensation(BASE_INLINE_START_MARGIN, isNonZeroLength);

// Every base negative text-indent is a hanging indent the focus box can fall back to.
const EXPECTED_VERSE_TEXT_START = needingCompensation(
  baseValues("text-indent", "ltr"),
  isNegativeLength,
);

const ACTUAL_PARA_INDENT = gutterValues("--para-indent");
const ACTUAL_VERSE_TEXT_START = gutterValues("--verse-text-start");
