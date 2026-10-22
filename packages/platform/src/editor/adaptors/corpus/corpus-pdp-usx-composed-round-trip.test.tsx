/**
 * The COMPOSED round trip over REAL provider output: USX -> USJ -> editor -> USJ -> USX.
 *
 * A save in the app takes this whole trip. Paratext's provider hands the web view one chapter of
 * USX (`GetChapterUsx`); `usxStringToUsj` turns it into USJ; the editor loads it, runs its plugins
 * and transforms, and hands back USJ; `usjToUsxString` turns that into the USX the provider writes
 * to disk. paranext-core pins the C# halves of that trip (`UsfmUsxRoundTripCorpusSweepTests.cs`).
 * The other suites here each pin ONE leg against fixtures a TypeScript converter or a human
 * produced. This one composes the TypeScript legs over the bytes the provider actually serves,
 * which carry shapes no authored fixture does: incomplete `sid`/`eid` values on chapters after the
 * first, Paratext's own top-level `<char>` placements, `status`/`vid` metadata, an empty chapter.
 *
 * Each capture is compared three ways:
 *
 * - **Converter legs** (one test, view-independent): `usxStringToUsj` then `usjToUsxString`, no
 *   editor.
 * - **Editor leg** (per view): the USJ the editor exports against the USJ it was given.
 * - **Composed** (per view, same test as the editor leg): the USX the save would write against the
 *   USX that was served.
 *
 * Read together they localize a failure: a composed divergence with a clean editor leg is the
 * converters', and an editor-leg divergence names the editor. Divergences are reported as line
 * diffs of a canonical dump (see {@link canonicalUsxLines} for what the USX comparison tolerates,
 * and why) and must either be empty or match {@link KNOWN_DIVERGENCES}.
 *
 * The editor is the real `Editor` component, every plugin mounted, in each view a user can edit
 * Scripture in: Standard, formatted, and paragraph-structure (Simple mode's default). After the
 * load, every node is marked dirty so every registered transform runs once — what a user's first
 * edit does to the region it touches. The exported USJ is read with the adaptor `Editor` runs on
 * every local change (`deserializeEditorState` over the whole tree), NOT through `getUsj()`: until
 * the first edit `getUsj()` returns the USJ it was handed, unchanged, so reading it here would
 * compare the input with itself. The first edit's save writes the whole chapter from the tree, so
 * every paragraph the user did not touch reaches the disk through exactly this read.
 *
 * The captures live in the vendored corpus's `pdp-usx/` directory and are discovered at run time,
 * so a newly captured chapter is covered without a code change. Their source of truth is
 * paranext-core; see that directory's README.
 */

import Editor from "../../Editor";
import { flushQueuedEvents } from "../../editor-test.utils";
import { deserializeEditorState } from "../editor-usj.adaptor";
import { EDITING_VIEW_CONFIGS } from "../../editorViews.test-helpers";
import {
  MarkerContent,
  MarkerObject,
  Usj,
  usjToUsxString,
  usxStringToUsj,
} from "@eten-tech-foundation/scripture-utilities";
import { EditorRefPlugin } from "@lexical/react/LexicalEditorRefPlugin";
import { act, render } from "@testing-library/react";
import { $getRoot, $isElementNode, LexicalEditor, LexicalNode } from "lexical";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { createRef } from "react";
import { ViewOptions } from "shared-react";

// Vitest's module transform does not preserve a usable `import.meta.url`, so locate the vendored
// captures relative to the working directory — the platform project root under nx, the repo root
// otherwise. Same probing shape the other corpus tests use.
const PDP_USX_DIR = [
  "../../libs/shared/src/converters/usfm/testUsfmCorpus/pdp-usx",
  "libs/shared/src/converters/usfm/testUsfmCorpus/pdp-usx",
].find((dir) => existsSync(dir));
if (!PDP_USX_DIR) throw new Error("pdp-usx capture directory not found from cwd");

const CAPTURES = readdirSync(PDP_USX_DIR)
  .filter((name) => name.endsWith(".usx"))
  .sort();

function readCapture(name: string): string {
  if (!PDP_USX_DIR) throw new Error("pdp-usx capture directory not found from cwd");
  return readFileSync(join(PDP_USX_DIR, name), "utf8");
}

/** The `version` the served USX declares, handed back to `usjToUsxString` so it round-trips. */
function usxVersionOf(usx: string): string {
  const version = new DOMParser()
    .parseFromString(usx, "text/xml")
    .documentElement?.getAttribute("version");
  if (!version) throw new Error("capture declares no USX version");
  return version;
}

/**
 * `text` as a JSON string literal with every non-ASCII space-like character escaped, so a dump
 * shows a NBSP or a zero-width space as `\u00a0`/`\u200b` instead of as a look-alike space.
 */
function quote(text: string): string {
  return JSON.stringify(text).replace(
    /[\u0080-\u00a0\u1680\u2000-\u200f\u2028-\u202f\u205f\u3000\ufeff]/g,
    (char) => `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}`,
  );
}

// ---------------------------------------------------------------------------------------------
// USX comparison
// ---------------------------------------------------------------------------------------------

/**
 * A USX document as one line per element or text node, indented by depth, so two documents can be
 * line-diffed. What this deliberately does NOT distinguish is listed here, each one verified
 * against these captures — anything else that differs is a divergence:
 *
 * - **XML spelling.** Attribute order and `<x />` versus `<x/>` are serialization choices, not
 *   data; every XML reader, the provider's `UsxFragmenter` included, reads both the same. Each
 *   element is printed with its attributes sorted. Text is compared byte for byte.
 * - **`eid`-only `<verse>`/`<chapter>` closers.** `usxStringToUsj` drops them and `usjToUsxString`
 *   regenerates them from each opener's `sid` (`usx-to-usj.ts`, `usj-to-usx.ts`): ParatextData
 *   places a verse's closer at the end of its last paragraph and the regenerated one lands at the
 *   start of the next verse's paragraph, and a verse closer whose opener's `sid` is empty (every
 *   chapter after the first) is not regenerated at all. A closer carries no data the opener lacks, so closers are
 *   left out of the comparison; their openers, `sid` included, are still compared.
 * - **`vid` on `<para>` and `status` on any element.** `usxStringToUsj` drops both as derived
 *   metadata (see its comments). `vid` is compared everywhere else it could appear.
 */
function canonicalUsxLines(usx: string): string[] {
  const lines: string[] = [];
  const visit = (node: Node, depth: number): void => {
    for (let child = node.firstChild; child; child = child.nextSibling) {
      const indent = "  ".repeat(depth);
      if (child.nodeType === child.TEXT_NODE) {
        lines.push(`${indent}${quote(child.nodeValue ?? "")}`);
        continue;
      }
      if (child.nodeType !== child.ELEMENT_NODE) continue;
      const element = child as Element;
      const attributes = Array.from(element.attributes);
      const isCloser =
        (element.nodeName === "verse" || element.nodeName === "chapter") &&
        attributes.length === 1 &&
        attributes[0].name === "eid";
      if (isCloser) continue;
      const kept = attributes
        .filter(({ name }) => name !== "status" && !(element.nodeName === "para" && name === "vid"))
        .map(({ name, value }) => `${name}=${JSON.stringify(value)}`)
        .sort();
      lines.push(`${indent}<${[element.nodeName, ...kept].join(" ")}>`);
      visit(element, depth + 1);
    }
  };
  visit(new DOMParser().parseFromString(usx, "text/xml"), 0);
  return lines;
}

// ---------------------------------------------------------------------------------------------
// USJ comparison
// ---------------------------------------------------------------------------------------------

/** A USJ document as one line per marker object or string, indented by depth, with every
 * property but `content` printed in sorted order. Nothing is tolerated here: the editor leg is
 * USJ in, USJ out, so any difference is the editor's. */
function canonicalUsjLines(usj: Usj): string[] {
  const lines: string[] = [`${usj.type} version=${JSON.stringify(usj.version)}`];
  const visit = (content: MarkerContent[] | undefined, depth: number): void => {
    for (const item of content ?? []) {
      const indent = "  ".repeat(depth);
      if (typeof item === "string") {
        lines.push(`${indent}${quote(item)}`);
        continue;
      }
      const properties = Object.entries(item as MarkerObject)
        .filter(([key]) => key !== "content")
        .map(([key, value]) => `${key}=${JSON.stringify(value)}`)
        .sort();
      lines.push(`${indent}{${properties.join(" ")}}`);
      visit(item.content, depth + 1);
    }
  };
  visit(usj.content, 1);
  return lines;
}

// ---------------------------------------------------------------------------------------------
// Line diff
// ---------------------------------------------------------------------------------------------

/**
 * The lines `actual` lacks (`-`) and adds (`+`) relative to `expected`, LCS-aligned so one
 * divergence does not cascade into every later line. Each entry names its line in `expected`
 * (`@N`, 1-based; for an added line, the expected line it follows), which keeps entries distinct
 * and lets a reader find them in a dump of the input.
 */
function lineDiff(expected: string[], actual: string[]): string[] {
  const rows = expected.length;
  const columns = actual.length;
  // Suffix LCS lengths, one row at a time from the bottom, kept in full for the walk below.
  const table: Uint32Array[] = Array.from({ length: rows + 1 }, () => new Uint32Array(columns + 1));
  for (let i = rows - 1; i >= 0; i--)
    for (let j = columns - 1; j >= 0; j--)
      table[i][j] =
        expected[i] === actual[j]
          ? table[i + 1][j + 1] + 1
          : Math.max(table[i + 1][j], table[i][j + 1]);
  const out: string[] = [];
  let i = 0;
  let j = 0;
  while (i < rows || j < columns) {
    if (i < rows && j < columns && expected[i] === actual[j]) {
      i += 1;
      j += 1;
    } else if (j >= columns || (i < rows && table[i + 1][j] >= table[i][j + 1])) {
      out.push(`@${i + 1} - ${expected[i].trim()}`);
      i += 1;
    } else {
      out.push(`@${i} + ${actual[j].trim()}`);
      j += 1;
    }
  }
  return out;
}

// ---------------------------------------------------------------------------------------------
// Editor
// ---------------------------------------------------------------------------------------------

/** Marks `node` and every descendant dirty, so each one's registered transforms run. */
function $markSubtreeDirty(node: LexicalNode): void {
  node.markDirty();
  if ($isElementNode(node)) node.getChildren().forEach($markSubtreeDirty);
}

/** Load `usj` into a mounted `Editor` under `view`, run every transform once, and read the
 * document back the way `Editor` reads it on a local change. */
async function throughEditor(usj: Usj, view: ViewOptions | undefined): Promise<Usj | undefined> {
  const lexicalRef = createRef<LexicalEditor>();
  await act(async () => {
    render(
      <Editor defaultUsj={usj} options={{ view }}>
        <EditorRefPlugin editorRef={lexicalRef} />
      </Editor>,
    );
  });
  const lexical = lexicalRef.current;
  if (!lexical) throw new Error("lexical editor was not captured");
  await act(async () => {
    lexical.update(() => $getRoot().getChildren().forEach($markSubtreeDirty), { discrete: true });
  });
  await flushQueuedEvents();
  return deserializeEditorState(lexical.getEditorState(), view);
}

// ---------------------------------------------------------------------------------------------
// Expected divergences
// ---------------------------------------------------------------------------------------------

/** The legs a capture's tests compare, as {@link lineDiff} output. */
interface LegDivergences {
  /** USX in against `usjToUsxString(usxStringToUsj(usx))`, no editor. */
  converter?: string[];
  /** USJ in against the USJ the editor exports. */
  editor?: string[];
  /** USX in against the USX the composed trip produces. */
  composed?: string[];
}

/**
 * Captures KNOWN to diverge, pinned at their current divergence so a change in either direction
 * fails: a new loss on an already-listed capture shows up as a changed list, and a fix shows up as
 * a list that no longer matches — delete the entry as part of the fix. Keyed
 * `"<capture> [converter]"` or `"<capture> [<view label>]"`. Each entry names the mechanism, the
 * leg it is in, and the work that owns it. A divergence that is not listed fails its test.
 */
const KNOWN_DIVERGENCES: { [testKey: string]: LegDivergences & { reason: string } } = {};

/** Every test key this file generates, so an entry naming no test is caught as stale. */
const TEST_KEYS = new Set(
  CAPTURES.flatMap((name) => [
    `${name} [converter]`,
    ...EDITING_VIEW_CONFIGS.map(({ label }) => `${name} [${label}]`),
  ]),
);

function expectLeg(testKey: string, leg: keyof LegDivergences, actual: string[]): void {
  // Soft, so a test reports every leg that diverges rather than stopping at the first.
  expect.soft(actual, `${testKey}: ${leg} leg`).toEqual(KNOWN_DIVERGENCES[testKey]?.[leg] ?? []);
}

function suffixFor(testKey: string): string {
  const known = KNOWN_DIVERGENCES[testKey];
  return known ? ` (known divergence: ${known.reason})` : "";
}

// ---------------------------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------------------------

describe("provider USX captures: expected-divergence list", () => {
  it("found the captures", () => {
    expect(CAPTURES.length).toBeGreaterThan(0);
  });

  it("names only tests that exist, and pins a divergence in each entry", () => {
    for (const [testKey, entry] of Object.entries(KNOWN_DIVERGENCES)) {
      expect(TEST_KEYS.has(testKey), `${testKey}: no such test`).toBe(true);
      const pinned = [entry.converter, entry.editor, entry.composed].flatMap((leg) => leg ?? []);
      expect(pinned.length, `${testKey}: pins no divergence`).toBeGreaterThan(0);
    }
  });
});

describe("provider USX captures: converter legs (USX -> USJ -> USX)", () => {
  for (const name of CAPTURES) {
    const testKey = `${name} [converter]`;
    it(`${testKey}${suffixFor(testKey)}`, () => {
      const usx = readCapture(name);
      const usxOut = usjToUsxString(usxStringToUsj(usx), { usxVersion: usxVersionOf(usx) });
      expectLeg(testKey, "converter", lineDiff(canonicalUsxLines(usx), canonicalUsxLines(usxOut)));
    });
  }
});

describe("provider USX captures: composed round trip through the editor", () => {
  for (const name of CAPTURES) {
    for (const { label, viewOptions } of EDITING_VIEW_CONFIGS) {
      const testKey = `${name} [${label}]`;
      it(`${testKey}${suffixFor(testKey)}`, async () => {
        const usx = readCapture(name);
        const usjIn = usxStringToUsj(usx);
        const usjOut = await throughEditor(usjIn, viewOptions);
        if (!usjOut) throw new Error("the editor exported no USJ");
        const usxOut = usjToUsxString(usjOut, { usxVersion: usxVersionOf(usx) });
        expectLeg(testKey, "editor", lineDiff(canonicalUsjLines(usjIn), canonicalUsjLines(usjOut)));
        expectLeg(testKey, "composed", lineDiff(canonicalUsxLines(usx), canonicalUsxLines(usxOut)));
      });
    }
  }
});
