/**
 * The bytes the oracle exempts, written out by hand. The oracle decides which bytes are separators
 * or soft with the same predicates the wrap uses, so a byte both misclassify can never fail there.
 * These rows name the exempt bytes of a small paragraph in every oracle view without those
 * predicates: an authored no-break space either side misreads as a separator adds a row.
 */
import { $byteWalk, mountInView, ORACLE_VIEWS } from "./annotationLocations.test-helpers";
import { twoParaUsj } from "../positions/positions.test-helpers";
import { NBSP } from "shared";

/** The paragraph under test is `$.content[2]` of {@link twoParaUsj}. */
const PARAGRAPH = "$.content[2]";

const usj = twoParaUsj([
  "x ",
  // An authored no-break space leading a char span's content.
  { type: "char", marker: "w", content: [`${NBSP}grace`] },
  " y ",
  // An authored no-break space trailing a nested closer.
  {
    type: "char",
    marker: "w",
    content: ["a ", { type: "char", marker: "nd", content: ["Lord"] }, NBSP],
  },
  " z",
]);

/** Views that show each opener's separator as text after its glyph: the paragraph's own, both
 * `\w` openers' and the nested `\+nd` opener's, and nothing else. */
const OPENER_SEPARATORS = [
  `${PARAGRAPH}['marker']|propertyOffset=1 sep`,
  `${PARAGRAPH}.content[1]['marker']|propertyOffset=1 sep`,
  `${PARAGRAPH}.content[3]['marker']|propertyOffset=1 sep`,
  `${PARAGRAPH}.content[3].content[1]['marker']|propertyOffset=2 sep`,
];

/** Every oracle view, with the paragraph's exempt bytes by hand. A view whose glyphs are
 * decorators, or that shows no glyphs, shows no separator as text. */
const EXPECTED_EXEMPT: { [view: string]: string[] } = {
  standard: OPENER_SEPARATORS,
  "standard+expandedNotes": OPENER_SEPARATORS,
  unformatted: OPENER_SEPARATORS,
  visible: [],
  "visible+collapsed": [],
  formatted: [],
  "paragraph-structure": [],
  "hidden+expanded": [],
};

function inParagraph(jsonPath: string): boolean {
  return (
    jsonPath === PARAGRAPH ||
    jsonPath.startsWith(`${PARAGRAPH}.`) ||
    jsonPath.startsWith(`${PARAGRAPH}[`)
  );
}

describe("the oracle's exempt bytes, by hand", () => {
  it("names every oracle view", () => {
    expect(Object.keys(EXPECTED_EXEMPT).sort()).toEqual(
      ORACLE_VIEWS.map(({ name }) => name).sort(),
    );
  });

  it.each(ORACLE_VIEWS)(
    "exempts only the opener separators, never an authored no-break space ($name)",
    async ({ name, view }) => {
      const mounted = await mountInView(usj, view);
      const exempt = mounted.lexical.getEditorState().read(() =>
        $byteWalk(view)
          .filter((byte) => inParagraph(byte.loc.jsonPath) && (byte.separator || byte.soft))
          .map((byte) => `${byte.label} ${byte.separator ? "sep" : "soft"}`),
      );
      mounted.unmount();
      expect(exempt).toEqual(EXPECTED_EXEMPT[name]);
    },
  );
});
