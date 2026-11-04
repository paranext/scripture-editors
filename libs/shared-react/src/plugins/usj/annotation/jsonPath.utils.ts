/**
 * The content-path half of a USJ location's jsonPath, shared by every layer that re-addresses a
 * location (the block verse layout, the settled-position translation) so they read one spelling.
 */
import {
  indexesFromUsjJsonPath,
  usjJsonPathFromIndexes,
  type UsjDocumentLocation,
} from "@eten-tech-foundation/scripture-utilities";

/** The `$.content[…]` prefix of a jsonPath, with any property suffix (`['marker']`) stripped. */
const CONTENT_PATH = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;

/** The `$.content[…]` prefix of `jsonPath`, with any property suffix (`['marker']`) stripped. */
export function contentPathOf(jsonPath: string): string {
  return CONTENT_PATH.exec(jsonPath)?.[1] ?? jsonPath;
}

/** The content indexes `location`'s path names, with any property suffix ignored. */
export function contentIndexesOf(location: UsjDocumentLocation): number[] {
  return indexesFromUsjJsonPath(contentPathOf(location.jsonPath));
}

/** `location` re-addressed at `indexes`, keeping its subtype, its offsets, and any property
 * suffix — the path is the only part a translation ever changes. */
export function withContentIndexes<T extends UsjDocumentLocation>(
  location: T,
  indexes: number[],
): T {
  const suffix = location.jsonPath.slice(contentPathOf(location.jsonPath).length);
  return { ...location, jsonPath: `${usjJsonPathFromIndexes(indexes)}${suffix}` } as T;
}
