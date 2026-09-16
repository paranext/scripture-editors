import type { ContentJsonPath, PropertyJsonPath } from "./usj-document-location.model.js";
import { describe, expect, expectTypeOf, it } from "vitest";

// `expectTypeOf` below is not checked by `vitest run --typecheck` (which only type-checks
// `*.test-d.ts` files by default): the annotated `const` assignments are the real RED/GREEN gate,
// caught by `nx typecheck utilities` typechecking this `.test.ts` file via `tsconfig.spec.json`.
//
// Keep this file mirrored with paranext-core's copy
// (`lib/platform-bible-utils/src/scripture/usj-reader-writer.model.test.ts`). The two declarations
// must be widened in lock-step or the cross-repo assignment stops type-checking.
const EIGHT_CLAUSES =
  "$.content[0].content[1].content[2].content[3].content[4].content[5].content[6].content[7]";

describe("jsonPath depth", () => {
  it("accepts eight content clauses", () => {
    expectTypeOf<typeof EIGHT_CLAUSES>().toMatchTypeOf<ContentJsonPath>();
    const deepContentPath: ContentJsonPath = EIGHT_CLAUSES;
    expect(deepContentPath).toBe(EIGHT_CLAUSES);
  });

  it("accepts a property on the eighth content clause", () => {
    const prop = `${EIGHT_CLAUSES}['lemma']` as const;
    // `PropertyJsonPath`'s catch-all `` `$.${string}` `` member matches any string starting with
    // `$.`, so this assertion type-checks regardless of how many `.content[${number}]` clauses
    // precede `['lemma']` — it does not, on its own, guard the eight-clause depth bound. It is
    // kept for shape parity with the `ContentJsonPath` case above. For the same reason there is no
    // nine-clause rejection counterpart: a too-deep property path still matches the catch-all.
    expectTypeOf<typeof prop>().toMatchTypeOf<PropertyJsonPath>();
    const deepPropertyPath: PropertyJsonPath = prop;
    expect(deepPropertyPath).toBe(prop);
  });

  it("rejects nine content clauses", () => {
    const nineClauses = `${EIGHT_CLAUSES}.content[8]` as const;
    // @ts-expect-error ts(2322) - nine content clauses exceed the eight-clause bound
    const tooDeep: ContentJsonPath = nineClauses;
    expect(tooDeep).toBe(nineClauses);
  });
});
