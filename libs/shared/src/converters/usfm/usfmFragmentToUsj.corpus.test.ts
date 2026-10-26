/**
 * Cross-oracle corpus test: run `usfmFragmentToUsjContent` over the vendored testUSFM fixtures
 * and diff the output against Paratext 9.5's own USJ for the same bytes (see
 * `testUsfmCorpus/README.md`). This pins ParatextData parse fidelity — the tokenizer's reference
 * semantics — against a corpus that deliberately exercises USFM's edges.
 *
 * Every fixture must produce an empty diff unless its case pins a known divergence, and a pinned
 * case must produce exactly its pinned list, so a fix and a new loss both fail the test. Each
 * failure prints a self-describing entry list.
 *
 * Two deliberate framing choices:
 *
 * - **2SA-3 uses the corrected oracle**, not Paratext's raw output (see README): the raw file
 *   contains Paratext 9.5's acknowledged `\cp`-with-markers bug (partial `pubnumber` fold + a
 *   stranded top-level char). The tokenizer intentionally produces the spec-correct shape; the
 *   serialized bytes are identical either way, so nothing breaks P9.
 * - **`\id` lines are stripped** before tokenizing (with the oracle's `book` node): fragments
 *   are paragraph-scoped by design and never contain book identification.
 */
import { usfmFragmentToUsjContent } from "./usfmFragmentToUsj.js";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { MarkerContent, MarkerObject } from "@eten-tech-foundation/scripture-utilities";

// Vitest's module transform does not preserve a usable import.meta.url, so locate the corpus
// relative to the working directory (project root when run via nx, repo root otherwise).
const CORPUS_DIR = [
  "src/converters/usfm/testUsfmCorpus",
  "libs/shared/src/converters/usfm/testUsfmCorpus",
].find((dir) => existsSync(dir));

function readFixture(name: string): string {
  if (!CORPUS_DIR) throw new Error("testUsfmCorpus fixture directory not found from cwd");
  return readFileSync(join(CORPUS_DIR, name), "utf8");
}

/** Minimal normalization so the diff measures STRUCTURE and content bytes: collapse runs of
 * ASCII whitespace (raw-USFM line joins) and drop Paratext's positional attributes
 * (sid/eid/vid), which are derived metadata the writer never outputs. No edge trimming —
 * content whitespace must match the oracle exactly. Only ASCII whitespace is collapsed: NBSP,
 * ZWSP, and the other Unicode spaces are authored content that Paratext preserves verbatim, so
 * folding them in here would hide exactly the corruption this comparison exists to catch. */
function normalizeContent(items: MarkerContent[]): MarkerContent[] {
  const out: MarkerContent[] = [];
  for (const item of items) {
    if (typeof item === "string") {
      const text = item.replace(/[ \t\r\n]+/g, " ");
      if (typeof out[out.length - 1] === "string") {
        out[out.length - 1] = (out[out.length - 1] as string) + text;
      } else if (text !== "") out.push(text);
    } else {
      const object: MarkerObject & { sid?: string; eid?: string; vid?: string } = { ...item };
      delete object.sid;
      delete object.eid;
      delete object.vid;
      if (object.content) object.content = normalizeContent(object.content);
      out.push(object);
    }
  }
  return out;
}

function signature(item: MarkerContent): string {
  if (typeof item === "string") return "#text";
  return `${item.type}:${item.marker ?? ""}`;
}

/** LCS-align two content arrays by signature so one divergence does not cascade. */
function lcsAlign(
  a: MarkerContent[],
  b: MarkerContent[],
): [number | undefined, number | undefined][] {
  const dp: number[][] = Array.from({ length: a.length + 1 }, () =>
    new Array(b.length + 1).fill(0),
  );
  for (let i = a.length - 1; i >= 0; i--)
    for (let j = b.length - 1; j >= 0; j--)
      dp[i][j] =
        signature(a[i]) === signature(b[j])
          ? dp[i + 1][j + 1] + 1
          : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const pairs: [number | undefined, number | undefined][] = [];
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (signature(a[i]) === signature(b[j])) pairs.push([i++, j++]);
    else if (dp[i + 1][j] >= dp[i][j + 1]) pairs.push([i++, undefined]);
    else pairs.push([undefined, j++]);
  }
  while (i < a.length) pairs.push([i++, undefined]);
  while (j < b.length) pairs.push([undefined, j++]);
  return pairs;
}

function describeItem(item: MarkerContent): string {
  if (typeof item === "string") return `"${item.length > 50 ? `${item.slice(0, 47)}...` : item}"`;
  const attrs = Object.entries(item)
    .filter(([key]) => key !== "type" && key !== "marker" && key !== "content")
    .map(([key, value]) => `${key}=${JSON.stringify(value)}`)
    .join(" ");
  return `<${item.type}:${item.marker ?? ""}${attrs ? ` ${attrs}` : ""}>`;
}

/** Collect divergences between the oracle (`a`) and tokenizer output (`b`). */
function diffContent(a: MarkerContent[], b: MarkerContent[], path: string, out: string[]): void {
  for (const [ai, bi] of lcsAlign(a, b)) {
    if (ai !== undefined && bi === undefined) {
      out.push(`${path}[${ai}] oracle has ${describeItem(a[ai])} — tokenizer lacks it`);
    } else if (ai === undefined && bi !== undefined) {
      out.push(`${path}[+${bi}] tokenizer emits ${describeItem(b[bi])} — oracle lacks it`);
    } else if (ai !== undefined && bi !== undefined) {
      const x = a[ai];
      const y = b[bi];
      if (typeof x === "string" || typeof y === "string") {
        if (x !== y)
          out.push(`${path}[${ai}] text: oracle ${describeItem(x)} vs ${describeItem(y)}`);
        continue;
      }
      const keys = new Set([...Object.keys(x), ...Object.keys(y)]);
      keys.delete("content");
      for (const key of keys) {
        // Read via entries: MarkerObject has no index signature, and a direct cast trips TS2352.
        const xValue = Object.entries(x).find(([name]) => name === key)?.[1];
        const yValue = Object.entries(y).find(([name]) => name === key)?.[1];
        if (JSON.stringify(xValue) !== JSON.stringify(yValue))
          out.push(
            `${path}[${ai}]<${x.type}:${x.marker ?? ""}>.${key}: oracle=${JSON.stringify(xValue)} tokenizer=${JSON.stringify(yValue)}`,
          );
      }
      diffContent(
        x.content ?? [],
        y.content ?? [],
        `${path}[${ai}]<${x.type}:${x.marker ?? ""}>`,
        out,
      );
    }
  }
}

function corpusDivergences(usfmFile: string, usjFile: string): string[] {
  // Fragments never contain \id — strip it (and the oracle's book node).
  const usfm = readFixture(usfmFile).replace(/^\\id [^\n]*\n/, "");
  const oracle = JSON.parse(readFixture(usjFile)) as { content?: MarkerContent[] };
  const oracleContent = (oracle.content ?? []).filter(
    (item) => typeof item === "string" || item.type !== "book",
  );
  const tokenized = usfmFragmentToUsjContent(usfm);
  const diffs: string[] = [];
  diffContent(normalizeContent(oracleContent), normalizeContent(tokenized), "$", diffs);
  return diffs;
}

/**
 * A divergence a case is KNOWN to have, pinned exactly: the case fails if its diff changes in
 * either direction, so the work named in `reason` deletes or trims the entry as part of its fix.
 */
interface KnownDivergence {
  reason: string;
  entries: string[];
}

const CASES: { label: string; usfm: string; usj: string; known?: KnownDivergence }[] = [
  { label: "testUSFM 2SA 1", usfm: "testUSFM-2SA-1.usfm", usj: "testUSFM-2SA-1.usj" },
  { label: "testUSFM 2SA 2", usfm: "testUSFM-2SA-2.usfm", usj: "testUSFM-2SA-2.usj" },
  {
    label: "testUSFM 2SA 3 (corrected oracle)",
    usfm: "testUSFM-2SA-3.usfm",
    usj: "testUSFM-2SA-3-corrected.usj",
  },
  { label: "web matthew 1-2", usfm: "web-matthew-1-and-2.usfm", usj: "web-matthew-1-and-2.usj" },
  {
    label: "spacing and word breaks",
    usfm: "spacing-word-break.usfm",
    usj: "spacing-word-break.usj",
  },
  {
    label: "web matthew 5",
    usfm: "web-matthew-5-section-header.usfm",
    usj: "web-matthew-5-section-header.usj",
  },
  { label: "testUSFM 2SA 4", usfm: "testUSFM-2SA-4.usfm", usj: "testUSFM-2SA-4.usj" },
  {
    label: "testUSFM 2SA 5",
    usfm: "testUSFM-2SA-5.usfm",
    usj: "testUSFM-2SA-5.usj",
    // TODO(PT-4388): read a bare `\` as a nameless marker once ParatextData 9.6 is in (parked on
    // branch `pt-4197-nameless-96`), then remove this pin.
    known: {
      reason: "bare `\\` read as text, not a nameless marker",
      entries: [
        // ParatextData reads a bare `\` at any token start as a marker with an empty name — here
        // three `<para style="">` paragraphs (`\ 2`, `\bd \ text`, the `\` ending verse 3). The
        // tokenizer keeps each one as literal text, so the `\ 2` stays in verse 1's paragraph and
        // the unclosed `\bd` runs on through verse 3. PR #11 reads a nameless marker only where a
        // fragment opens with one (`opensNamelessParagraph`).
        '$[3]<para:p>[1] text: oracle "Chapter 5 holds deliberately damaged USFM that ..." vs "Chapter 5 holds deliberately damaged USFM that ..."',
        '$[3]<para:p>[+2] tokenizer emits <verse:v number="2"> — oracle lacks it',
        '$[3]<para:p>[+3] tokenizer emits "A bare backslash after a character marker " — oracle lacks it',
        '$[3]<para:p>[+4] tokenizer emits <char:bd closed="false"> — oracle lacks it',
        "$[4] oracle has <para:> — tokenizer lacks it",
        "$[5] oracle has <para:> — tokenizer lacks it",
        "$[6] oracle has <para:> — tokenizer lacks it",
      ],
    },
  },
  { label: "testUSFM 1SA 1", usfm: "testUSFM-1SA-1.usfm", usj: "testUSFM-1SA-1.usj" },
];

describe("usfmFragmentToUsjContent — testUSFM cross-oracle corpus (Paratext 9.5 USJ)", () => {
  for (const { label, usfm, usj, known } of CASES) {
    const title = known
      ? `${label}: only the known divergence from ParatextData's own USJ (${known.reason})`
      : `${label}: zero divergence from ParatextData's own USJ`;
    it(title, () => {
      // Each diff entry names its path and both sides, so a failure is self-diagnosing.
      expect(corpusDivergences(usfm, usj)).toEqual(known?.entries ?? []);
    });
  }
});
