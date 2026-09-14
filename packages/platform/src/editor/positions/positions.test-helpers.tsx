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
  MarkerObject,
  PropertyJsonPath,
  Usj,
  usjJsonPathFromIndexes,
} from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, LexicalEditor, NodeKey, TextNode } from "lexical";
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

/** The paragraph at `index` of a settled document, as a `MarkerObject`. */
export function settledPara(usj: Usj | undefined, index: number): MarkerObject {
  const para = usj?.content?.[index];
  if (!para || typeof para === "string") throw new Error(`no paragraph at content[${index}]`);
  return para;
}

/** The index of the settled content item that is exactly `text`, so a row's settled coordinates
 * come from the document the host would actually have read. */
export function settledTextIndex(para: MarkerObject, text: string): number {
  const index = para.content?.findIndex((item) => item === text) ?? -1;
  if (index < 0)
    throw new Error(`no settled text item ${JSON.stringify(text)} in ${JSON.stringify(para)}`);
  return index;
}

/** The index of the settled content item that is a `char` span. */
export function settledCharIndex(para: MarkerObject): number {
  const index =
    para.content?.findIndex((item) => typeof item !== "string" && item.type === "char") ?? -1;
  if (index < 0) throw new Error(`no settled char span in ${JSON.stringify(para)}`);
  return index;
}

/** Type `text` over the node containing `needle` and leave the caret at `caretOffset` (the start
 * of the paragraph by default — the shape that keeps a terminated literal pending rather than
 * re-tokenizing it inline in the same commit). */
export async function typeOver(
  lexical: LexicalEditor,
  needle: string,
  text: string,
  caretOffset = 0,
): Promise<NodeKey> {
  let key = "";
  await act(async () => {
    lexical.update(() => {
      const node = $textContaining(needle);
      node.setTextContent(text);
      node.select(caretOffset, caretOffset);
      key = node.getKey();
    });
    await Promise.resolve();
    await Promise.resolve();
  });
  return key;
}
