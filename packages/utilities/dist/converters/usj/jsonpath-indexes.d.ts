import type { ContentJsonPath } from "./usj-document-location.model.js";
/**
 * Converts a USJ JSONPath string into an array of indexes.
 *
 * @param jsonPath - The USJ JSONPath string to convert. It must start with `$` and contain `.content[index]` segments.
 * @returns An array of numeric indexes extracted from the JSONPath.
 * @throws Will throw an error if the JSONPath does not start with `$`.
 *
 * @public
 */
export declare function indexesFromUsjJsonPath(jsonPath: string): number[];
/**
 * Converts an array of indexes into a USJ JSONPath string.
 *
 * @param indexes - An array of numeric indexes to convert.
 * @returns A USJ JSONPath string constructed from the indexes.
 *
 * @public
 */
export declare function usjJsonPathFromIndexes(indexes: number[]): ContentJsonPath;
//# sourceMappingURL=jsonpath-indexes.d.ts.map