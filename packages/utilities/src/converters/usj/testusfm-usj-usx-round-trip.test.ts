import { MarkerContent, MarkerObject, Usj } from "./usj.model.js";
import { usjToUsxString } from "./usj-to-usx.js";
import { usxStringToUsj } from "./usx-to-usj.js";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * USJ -> USX -> USJ round trip over the rich testUSFM oracles.
 *
 * This is a NET, not a localizer: a failure here conflates the serializer and the parser, so
 * diagnose against the direct parser assertions in `whitespace-only-text.test.ts` (the serializer
 * emits every USJ string verbatim — historically every loss in this pair has been the parser's).
 * The oracles are Paratext 9.5's own USJ output for the testUSFM corpus, so this pins the pair
 * against real-project shapes the hand-authored fixtures don't reach: attribute markers,
 * milestones, unclosed spans, figures, tables, sidebars, links.
 */

// Vitest's module transform does not preserve a usable `import.meta.url`, so locate the corpus
// relative to the working directory — the utilities project root under nx, the repo root
// otherwise. Same probing shape the platform-side corpus tests use.
const CORPUS_DIR = [
  "../../libs/shared/src/converters/usfm/testUsfmCorpus",
  "libs/shared/src/converters/usfm/testUsfmCorpus",
].find((dir) => existsSync(dir));

/**
 * Every oracle in the corpus, discovered at run time so a newly vendored fixture is covered without
 * a code change. `2SA-3` is vendored only as its CORRECTED oracle; Paratext's raw output carries an
 * acknowledged Paratext 9.5 bug (a `\cp` with markers is partially folded into `pubnumber` and the
 * remainder stranded as an invalid top-level char). The provider's real bytes for that chapter are
 * covered by `testusfm-usx-usj-usx-round-trip.test.ts`.
 */
const FIXTURES = CORPUS_DIR
  ? readdirSync(CORPUS_DIR)
      .filter((name) => name.endsWith(".usj"))
      .sort()
  : [];

function readOracle(name: string): Usj {
  if (!CORPUS_DIR) throw new Error("testUsfmCorpus fixture directory not found from cwd");
  return JSON.parse(readFileSync(join(CORPUS_DIR, name), "utf8")) as Usj;
}

/**
 * Drops EMPTY `sid` attributes, recursively — the artifact Paratext 9.5's USJ carries on verses in
 * a chapter after the first. The serializer omits empty attributes from USX, so `"" -> absent` is
 * the converter pair's deliberate normalization, not a loss — it carries no document bytes.
 * Deliberately NARROW: any OTHER attribute arriving empty and getting dropped should turn this net
 * red, so the drop is decided consciously rather than silently absorbed here.
 */
function withoutEmptyAttributes(content: MarkerContent[]): MarkerContent[] {
  return content.map((item) => {
    if (typeof item === "string") return item;
    const entries = Object.entries(item).filter(([key, value]) => !(key === "sid" && value === ""));
    const cleaned = Object.fromEntries(entries) as MarkerObject;
    if (cleaned.content) cleaned.content = withoutEmptyAttributes(cleaned.content);
    return cleaned;
  });
}

describe("testUSFM corpus round trip (USJ -> USX -> USJ)", () => {
  it("finds the corpus", () => {
    expect(FIXTURES.length).toBeGreaterThan(0);
  });

  it.each(FIXTURES)("%s", (name) => {
    const usj = readOracle(name);
    const roundTripped = usxStringToUsj(usjToUsxString(usj));
    expect({ ...roundTripped, content: withoutEmptyAttributes(roundTripped.content) }).toEqual({
      ...usj,
      content: withoutEmptyAttributes(usj.content),
    });
  });
});
