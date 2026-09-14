import type { ContentJsonPath, PropertyJsonPath } from "./usj-document-location.model.js";
import { describe, expect, expectTypeOf, it } from "vitest";

// `expectTypeOf` below is not checked by `vitest run --typecheck` (which only type-checks
// `*.test-d.ts` files by default): these plain `const` assignments are the real RED/GREEN gate,
// caught by `nx typecheck utilities` typechecking this `.test.ts` file via `tsconfig.spec.json`.
describe("jsonPath depth", () => {
  it("accepts eight content clauses", () => {
    const deep =
      "$.content[0].content[1].content[2].content[3].content[4].content[5].content[6].content[7]";
    expectTypeOf<typeof deep>().toMatchTypeOf<ContentJsonPath>();
    const deepContentPath: ContentJsonPath = deep;
    expect(deepContentPath).toBe(deep);

    const prop = `${deep}['lemma']` as const;
    expectTypeOf<typeof prop>().toMatchTypeOf<PropertyJsonPath>();
    const deepPropertyPath: PropertyJsonPath = prop;
    expect(deepPropertyPath).toBe(prop);
  });
});
