/**
 * The expected-failure list is a one-way ratchet only while `expectOracleMatchesList` enforces it.
 * These rows pin each rule against a temporary list, with synthetic runs, so an edit to the helper
 * cannot quietly stop it failing.
 */
import {
  expectOracleMatchesList,
  flushOracleLists,
  OracleFailure,
  OracleRun,
} from "./annotationLocations.oracle.test-helpers";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const REMOVE_TRACE = "remove-left-trace";
const LABEL_MOVED = "label-moved:1:a->b";

/** A failure keyed `v|A|<shape>|s|e`, classified from `flags` alone. */
function failure(shape: string, flags: string[]): OracleFailure {
  return {
    corpus: "c",
    view: "v",
    tier: "A",
    shape,
    a: 0,
    b: 1,
    start: "s",
    end: "e",
    missing: [],
    extra: [],
    flags,
    inbound: "",
    partialInlineExtras: 0,
    wholeInlineSeparatorExtras: 0,
    detail: "",
  };
}

function baseRun(): OracleRun {
  return {
    failures: [failure("one", [REMOVE_TRACE]), failure("two", [REMOVE_TRACE, LABEL_MOVED])],
    ops: 10,
    anomalies: [],
    exempt: ['text(sep):" "@$.content[0]'],
  };
}

/** A fresh list file holding `run` as section `c`/`v`. */
function recordedList(run: OracleRun, stride?: number): URL {
  const list = pathToFileURL(join(mkdtempSync(join(tmpdir(), "oracle-ratchet-")), "list.json"));
  // A new list file starts as an empty object.
  writeFileSync(list, "{}\n");
  expectOracleMatchesList(list, "c", "v", run, { stride, write: true });
  flushOracleLists();
  return list;
}

function compare(list: URL, run: OracleRun, stride?: number): void {
  expectOracleMatchesList(list, "c", "v", run, { stride, write: false });
}

/** The `actual` side of the assertion a failing comparison raised. */
function diffOf(check: () => void): { [key: string]: unknown } {
  try {
    check();
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "actual" in error &&
      typeof error.actual === "object" &&
      error.actual !== null
    )
      return { ...error.actual };
    throw error;
  }
  throw new Error("expected the comparison to fail");
}

describe("the oracle's expected-failure ratchet", () => {
  it("records a section and then passes against it", () => {
    const list = recordedList(baseRun());
    const written: unknown = JSON.parse(readFileSync(list, "utf-8"));
    expect(written).toEqual({
      c: {
        v: {
          ops: 10,
          anomalies: [],
          exempt: ['text(sep):" "@$.content[0]'],
          failures: {
            "v|A|one|s|e": ["REMOVE-TRACE"],
            "v|A|two|s|e": ["REMOVE-TRACE", "O2-LABEL-MOVES-ON-SPLIT"],
          },
        },
      },
    });
    expect(() => compare(list, baseRun())).not.toThrow();
  });

  it("fails on a failure the list does not name", () => {
    const list = recordedList(baseRun());
    const run = baseRun();
    run.failures.push(failure("three", [REMOVE_TRACE]));
    expect(diffOf(() => compare(list, run)).unexpected).toEqual([
      'v|A|three|s|e :: ["REMOVE-TRACE"] :: ',
    ]);
  });

  it("fails on a listed entry that no longer fails", () => {
    const list = recordedList(baseRun());
    const run = baseRun();
    run.failures.shift();
    expect(diffOf(() => compare(list, run)).fixed).toEqual(["v|A|one|s|e"]);
  });

  it("fails on a listed entry that fails with fewer classes", () => {
    const list = recordedList(baseRun());
    const run = baseRun();
    run.failures[1] = failure("two", [REMOVE_TRACE]);
    const diff = diffOf(() => compare(list, run));
    expect(diff.fixed).toEqual([
      'v|A|two|s|e :: listed ["REMOVE-TRACE","O2-LABEL-MOVES-ON-SPLIT"] now ["REMOVE-TRACE"]',
    ]);
    expect(diff.worse).toEqual([]);
  });

  it("fails on a listed entry that gained a class", () => {
    const list = recordedList(baseRun());
    const run = baseRun();
    run.failures[0] = failure("one", [REMOVE_TRACE, LABEL_MOVED]);
    const diff = diffOf(() => compare(list, run));
    expect(diff.worse).toEqual([
      'v|A|one|s|e :: listed ["REMOVE-TRACE"] now ["REMOVE-TRACE","O2-LABEL-MOVES-ON-SPLIT"]',
    ]);
    expect(diff.fixed).toEqual([]);
  });

  it("fails when the operation count changes", () => {
    const list = recordedList(baseRun());
    expect(diffOf(() => compare(list, { ...baseRun(), ops: 9 })).ops).toBe(9);
  });

  it("fails when the walk anomalies change", () => {
    const list = recordedList(baseRun());
    const run = { ...baseRun(), anomalies: ["caret threw: text:0"] };
    expect(diffOf(() => compare(list, run)).anomalies).toEqual(["caret threw: text:0"]);
  });

  it("fails when the exempt bytes change, listed by name", () => {
    const list = recordedList(baseRun());
    const run = { ...baseRun(), exempt: [...baseRun().exempt, 'verse*(soft):" "@x'] };
    expect(diffOf(() => compare(list, run)).exempt).toEqual(run.exempt);
  });

  it("fails when a long exempt list changes, pinned by count and hash", () => {
    const long = Array.from({ length: 2500 }, (_, i) => `text(sep):" "@$.content[${i}]`);
    const list = recordedList({ ...baseRun(), exempt: long });
    expect(() => compare(list, { ...baseRun(), exempt: long })).not.toThrow();
    const changed = [...long];
    changed[7] = `text(soft):" "@$.content[7]`;
    const diff = diffOf(() => compare(list, { ...baseRun(), exempt: changed }));
    expect(diff.exempt).toMatchObject({ count: 2500 });
  });

  it("fails when the list has no section for the run", () => {
    const list = recordedList(baseRun());
    expect(() => expectOracleMatchesList(list, "c", "w", baseRun(), { write: false })).toThrow(
      /no list section for c w/,
    );
  });

  it("refuses a run at another sampling stride, in both modes", () => {
    const list = recordedList(baseRun(), 10);
    expect(() => compare(list, baseRun(), 10)).not.toThrow();
    expect(() => compare(list, baseRun(), 5)).toThrow(/another sampling stride/);
    expect(() =>
      expectOracleMatchesList(list, "c", "v", baseRun(), { stride: 5, write: true }),
    ).toThrow(/recorded at stride 10/);
  });
});
