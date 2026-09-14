/**
 * Shared harness for the settled-position suites: a {@link SettledPositionContext} built from a
 * mounted editor exactly as `Editor.tsx` builds its own, plus the small tree lookups the rows
 * need. A plain helper module rather than an export from one of the suites, so a suite that needs
 * it does not re-register the other suite's tests by importing it.
 */
import { requireStandardViewOptions } from "../settledGetUsj.test-helpers";
import { AnchoredTransientInput } from "../markerEdit/virtualSettle.utils";
import { SettledPositionContext, SettledScopeCache } from "./settledPositions.model";
import {
  ContentJsonPath,
  PropertyJsonPath,
  Usj,
  usjJsonPathFromIndexes,
} from "@eten-tech-foundation/scripture-utilities";
import { $getRoot, LexicalEditor, TextNode } from "lexical";
import { getMarker as bundledGetMarker, getPendedDisplayOwners, TypedMarkNode } from "shared";
import { usjReactNodes } from "shared-react";

/** A doc shaped like the settled-output suites': a book, a chapter, `content` as the first
 * paragraph, and a second paragraph to depart to. */
export function twoParaUsj(content: Usj["content"]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
      { type: "chapter", marker: "c", number: "1" },
      { type: "para", marker: "p", content },
      { type: "para", marker: "p", content: ["depart here"] },
    ],
  };
}

/** Build the context `Editor.tsx` builds for its own position translation. Call outside a read —
 * `getPendedDisplayOwners` reads the engine's ledger, not the tree. */
export function settledPositionContext(
  lexical: LexicalEditor,
  options: {
    cache?: SettledScopeCache;
    transientInput?: AnchoredTransientInput;
  } = {},
): SettledPositionContext {
  return {
    pendedKeys: getPendedDisplayOwners(lexical) ?? new Set<string>(),
    transientInput: options.transientInput,
    lastKnownCaret: undefined,
    tier2: { viewOptions: requireStandardViewOptions(), getMarker: bundledGetMarker },
    nodes: [TypedMarkNode, ...usjReactNodes],
    cache: options.cache ?? { entries: new Map() },
  };
}

/** The first text node whose content includes `needle`. */
export function $textContaining(needle: string): TextNode {
  const node = $getRoot()
    .getAllTextNodes()
    .find((text) => text.getTextContent().includes(needle));
  if (!node) throw new Error(`no text node containing ${JSON.stringify(needle)}`);
  return node;
}

/** A `$.content[…]` path built from computed indexes — the declared literal-template type cannot
 * describe one, so the rows build theirs here. */
export function contentPath(indexes: number[]): ContentJsonPath {
  return usjJsonPathFromIndexes(indexes);
}

/** The same, with a `['property']` suffix. */
export function propertyPath(indexes: number[], property: string): PropertyJsonPath {
  return `${usjJsonPathFromIndexes(indexes)}['${property}']` as PropertyJsonPath;
}
