/**
 * The annotation-transparency oracle: annotations held on display bytes change NOTHING but the
 * painting. For every row and keystroke case of the pending/settled oracle
 * (`pendingSettledOracle.test-helpers.tsx`), the case runs twice — once on the document as loaded
 * and once with a fixed set of annotations covering every display byte of the edited paragraph
 * (each carrier whole, a proper prefix, a proper suffix, an interior byte, and two ranges crossing
 * into and out of the content beside it) — and every observable must be identical: the pending
 * and settled `getUsj()`, the screen and document text, every caret position's report and its
 * round trip, and the collab delta. A site inside a carrier an annotation has cut into pieces is
 * reached at every spelling the cut gives it, and each spelling must agree with the unsplit run.
 *
 * The annotated run is also graded on its own: every annotation paints exactly the bytes it holds
 * (plus whitespace), nothing is painted in part, and an annotation is reported removed exactly
 * when its bytes are gone.
 *
 * The cases known to fail are listed per view in `annotationTransparency.<view>.expected-failures.json`,
 * in the pending/settled oracle's list format; `ANNOTATION_TRANSPARENCY_WRITE=1` rewrites a list.
 */

import {
  $byteLoc,
  $byteNodes,
  $heldIndexes,
  $paintedIndexes,
  HELD_TYPE,
  mountInView,
  MountedInView,
  ORACLE_TYPE,
} from "./annotationLocations.test-helpers";
import {
  $editableTexts,
  $editSites,
  $shellTexts,
  CaseRun,
  CaseSite,
  caseMismatches,
  expectMismatchesListed,
  ExpectedFailures,
  keystrokesFor,
  oracleRows,
  outsideNotes,
  pendingOracleView,
  readExpectedFailures,
  runKeystrokeCase,
} from "../markerEdit/pendingSettledOracle.test-helpers";
import { Usj, UsjDocumentLocation } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, $isElementNode, $isTextNode, LexicalNode, TextNode } from "lexical";
import {
  $carrierHoldableRange,
  $isDisplayAnnotationCarrier,
  $isMarkerTrailingSeparator,
  TypedMarkOnRemove,
} from "shared";
import { AnnotationRange, getEditorDelta, ViewOptions } from "shared-react";
import { writeFileSync } from "node:fs";
import { afterAll, describe, expect, it, vi } from "vitest";

const WRITE = process.env.ANNOTATION_TRANSPARENCY_WRITE === "1";

/** One annotation of the fixed set: where it is set, and the bytes it is expected to hold. */
interface PlannedAnnotation {
  id: string;
  range: AnnotationRange;
  bytes: string;
}

/** The leaves of the edited paragraph (the document's third block), in order. */
function $paragraphLeaves(): LexicalNode[] {
  const para = $getRoot().getChildren()[2];
  const out: LexicalNode[] = [];
  const visit = (node: LexicalNode): void => {
    if ($isElementNode(node)) node.getChildren().forEach(visit);
    else out.push(node);
  };
  if (para) visit(para);
  return out;
}

/** Whether `node` is plain content text a crossing range can start or end in. */
function $isContentText(node: LexicalNode): node is TextNode {
  return (
    $isTextNode(node) &&
    !$isDisplayAnnotationCarrier(node) &&
    !$isMarkerTrailingSeparator(node) &&
    node.getMode() === "normal" &&
    node.getTextContentSize() > 0
  );
}

/**
 * The annotation set for the mounted document: for every display-byte carrier of the edited
 * paragraph, the ranges listed in the module comment, addressed as the host addresses them
 * (`UsjDocumentLocation`s).
 */
function $planAnnotations(view: ViewOptions): PlannedAnnotation[] {
  const leaves = $paragraphLeaves();
  const plan: PlannedAnnotation[] = [];
  let next = 0;
  const add = (
    kind: string,
    start: UsjDocumentLocation,
    end: UsjDocumentLocation,
    bytes: string,
  ): void => {
    next += 1;
    plan.push({ id: `${kind}${next}`, range: { start, end }, bytes });
  };
  leaves.forEach((leaf, index) => {
    if (!$isDisplayAnnotationCarrier(leaf)) return;
    const before = leaves.slice(0, index).reverse().find($isContentText);
    const after = leaves.slice(index + 1).find($isContentText);
    if ($isTextNode(leaf)) {
      const text = leaf.getTextContent();
      const [low, high] = $carrierHoldableRange(leaf);
      if (high <= low) return;
      const loc = (offset: number, afterByte: boolean) => $byteLoc(leaf, offset, afterByte, view);
      add("whole", loc(low, false), loc(high - 1, true), text.slice(low, high));
      if (high - low >= 2) {
        add("prefix", loc(low, false), loc(low, true), text.slice(low, low + 1));
        add("suffix", loc(high - 1, false), loc(high - 1, true), text.slice(high - 1, high));
      }
      if (high - low >= 3)
        add("inner", loc(low + 1, false), loc(high - 2, true), text.slice(low + 1, high - 1));
      if (before)
        add(
          "into",
          $byteLoc(before, before.getTextContentSize() - 1, false, view),
          loc(low, true),
          `${before.getTextContent().slice(-1)}…${text.slice(low, low + 1)}`,
        );
      if (after)
        add(
          "outof",
          loc(high - 1, false),
          $byteLoc(after, 0, true, view),
          `${text.slice(high - 1, high)}…${after.getTextContent().slice(0, 1)}`,
        );
      return;
    }
    // A read-only decorator: held whole, and crossed into and out of.
    const start = $byteLoc(leaf, -1, false, view);
    const end = $byteLoc(leaf, -1, true, view);
    const shown = `[${leaf.getType()}]`;
    add("whole", start, end, shown);
    if (before)
      add(
        "into",
        $byteLoc(before, before.getTextContentSize() - 1, false, view),
        end,
        `${before.getTextContent().slice(-1)}…${shown}`,
      );
    if (after)
      add("outof", start, $byteLoc(after, 0, true, view), `${shown}…${after.getTextContent()[0]}`);
  });
  return plan;
}

/** The annotations set on `mounted`, with the removal reports each received. */
interface AppliedAnnotations {
  ids: string[];
  removals: Map<string, Parameters<TypedMarkOnRemove>[]>;
}

/** Set every annotation of `plan` on `mounted`; only those that then hold a byte are kept. */
async function applyAnnotations(
  mounted: MountedInView,
  plan: PlannedAnnotation[],
): Promise<AppliedAnnotations> {
  const removals = new Map<string, Parameters<TypedMarkOnRemove>[]>();
  for (const { id, range } of plan) {
    removals.set(id, []);
    const onRemove = vi.fn<TypedMarkOnRemove>((...args) => {
      removals.get(id)?.push(args);
    });
    await act(async () => {
      mounted.ref.current?.setAnnotation(range, ORACLE_TYPE, id, undefined, onRemove);
      await Promise.resolve();
    });
  }
  const ids = mounted.lexical
    .getEditorState()
    .read(() => plan.map(({ id }) => id).filter((id) => $heldIndexes(HELD_TYPE, id).size > 0));
  return { ids, removals };
}

/** A caret position in the edited paragraph's editable texts, by the bytes before it. */
interface GlobalSite {
  at: number;
  /** Whether the plain site was the start of its node, its end, or strictly inside it. */
  edge: "start" | "end" | "inside";
  shell: boolean;
}

function $textsOf(shell: boolean): TextNode[] {
  return shell ? $shellTexts() : $editableTexts();
}

/** The plain run's site, restated by document bytes so the annotated tree can find it. */
function $globalSite(index: number, offset: number, shell: boolean): GlobalSite {
  const texts = $textsOf(shell);
  const node = texts[index];
  const at =
    texts.slice(0, index).reduce((sum, text) => sum + text.getTextContentSize(), 0) + offset;
  const edge = offset === 0 ? "start" : offset === node.getTextContentSize() ? "end" : "inside";
  return { at, edge, shell };
}

/**
 * Every spelling of `site` in the current tree: the node and offset at the same document byte.
 * A start or end site keeps its edge; a site inside a node that the tree now cuts at that byte
 * is both the end of the piece before the cut and the start of the piece after it.
 */
function $spellings(site: GlobalSite): CaseSite[] {
  const texts = $textsOf(site.shell);
  const out: CaseSite[] = [];
  let start = 0;
  for (const node of texts) {
    const size = node.getTextContentSize();
    const offset = site.at - start;
    start += size;
    if (offset < 0 || offset > size) continue;
    const edge = offset === 0 ? "start" : offset === size ? "end" : "inside";
    if (site.edge === "inside" || edge === site.edge || edge === "inside")
      out.push({ node, offset, shell: site.shell });
  }
  if (site.edge !== "inside") return out.filter((s) => edgeOf(s) === site.edge).slice(0, 1);
  return out;
}

function edgeOf({ node, offset }: CaseSite): "start" | "end" | "inside" {
  return offset === 0 ? "start" : offset === node.getTextContentSize() ? "end" : "inside";
}

/** What the transparency comparison reads of a run, each as one string. */
function observables(run: CaseRun): { [name: string]: string } {
  return {
    applied: String(run.applied),
    pending: JSON.stringify(run.pending),
    settled: JSON.stringify(run.settled),
    "pending text": run.before.text,
    "pending screen": run.before.screen ?? "",
    "pending positions": JSON.stringify(run.before.reported),
    "pending round trip": JSON.stringify(run.before.roundTrip),
    "settled screen": run.shownLines ?? "",
    "settled text": run.after.text,
    "settled positions": JSON.stringify(run.after.reported),
  };
}

/** Bytes an annotation may paint without holding: whitespace between or beside held bytes. */
const FILLER = /^[\s ​]$/;

/**
 * The annotated run's own failures after `mounted` settled: a held byte nothing paints, a
 * non-whitespace byte painted but not held, a leaf painted in part, and a removal report that
 * disagrees with whether the annotation's bytes are gone.
 */
function annotatedFailures(
  mounted: MountedInView,
  applied: AppliedAnnotations,
  history: boolean,
): string[] {
  const failures: string[] = [];
  mounted.lexical.getEditorState().read(() => {
    const bytes = $byteNodes();
    for (const id of applied.ids) {
      const held = $heldIndexes(HELD_TYPE, id);
      const painted = $paintedIndexes(mounted.lexical, id);
      const missing = [...held.keys()].filter((index) => !painted.has(index));
      const extra = [...painted].filter((index) => {
        if (held.has(index)) return false;
        const [node, offset] = bytes[index];
        return offset >= 0 && !FILLER.test(node.getTextContent()[offset]);
      });
      if (missing.length > 0)
        failures.push(`${id}: held bytes not painted at ${missing.join(",")}`);
      if (extra.length > 0)
        failures.push(`${id}: painted but not held, non-whitespace, at ${extra.join(",")}`);
      const reports = applied.removals.get(id) ?? [];
      if (reports.length > 1) failures.push(`${id}: reported removed ${reports.length} times`);
      if (!history) {
        if (reports.length === 0 && held.size === 0)
          failures.push(`${id}: its bytes are gone but its removal was never reported`);
        if (reports.length === 1 && held.size > 0)
          failures.push(`${id}: reported removed (${reports[0][2]}) while it still holds bytes`);
      }
    }
  });
  for (const log of mounted.logs)
    if (log.includes("painted in part")) failures.push(`painted in part: ${log}`);
  return failures;
}

/** Register the transparency oracle's rows for `view`, compared with `listFile`. */
export function describeAnnotationTransparencyOracle(view: string, listFile: URL): void {
  const rows = oracleRows(view);
  const listed = readExpectedFailures(listFile);
  const written: ExpectedFailures = {};
  afterAll(() => {
    if (WRITE) writeFileSync(listFile, `${JSON.stringify(written, null, 2)}\n`);
  });

  describe(`annotations on display bytes change nothing but the painting (${view} view)`, () => {
    it.each(rows)(
      "%s",
      async (row, usj) => {
        const viewOptions = pendingOracleView(view);
        const probe = await mountInView(usj, viewOptions);
        const { sites, plan, loadedOutsideNotes } = probe.lexical.getEditorState().read(() => ({
          sites: $editSites().map(({ index, offset, shell }) =>
            $globalSite(index, offset, !!shell),
          ),
          plan: $planAnnotations(viewOptions),
          loadedOutsideNotes: outsideNotes(probe.ref.current?.getUsj()),
        }));
        probe.unmount();
        expect(plan.length, "the paragraph has display bytes to annotate").toBeGreaterThan(0);

        const mismatches = new Map<string, string>();
        let comparedCases = 0;
        let heldAnnotations = 0;
        for (const site of sites)
          for (const keystroke of keystrokesFor(view, site.shell)) {
            const plainMounted = await mountInView(usj, viewOptions);
            const plain = await runKeystrokeCase(
              plainMounted,
              view,
              () => $spellings(site)[0],
              keystroke,
            );
            if (!plain) continue;
            const expected = observables(plain);
            expected.delta = JSON.stringify(getEditorDelta(plainMounted.lexical.getEditorState()));
            plainMounted.unmount();
            // Every spelling the annotated tree gives the site, each run on a fresh mount.
            let spellings: CaseSite[] | undefined;
            for (let which = 0; spellings === undefined || which < spellings.length; which += 1) {
              const mounted = await mountInView(usj, viewOptions);
              const applied = await applyAnnotations(mounted, plan);
              heldAnnotations = Math.max(heldAnnotations, applied.ids.length);
              spellings ??= mounted.lexical.getEditorState().read(() => $spellings(site));
              const spelling = spellings[which];
              if (!spelling) {
                mounted.unmount();
                break;
              }
              const annotated = await runKeystrokeCase(
                mounted,
                view,
                () => {
                  const found = $spellings(site)[which];
                  return found && edgeOf(found) === edgeOf(spelling) ? found : undefined;
                },
                keystroke,
              );
              const label = `${plain.label}${spellings.length > 1 ? ` [spelling ${which + 1}/${spellings.length}]` : ""}`;
              if (!annotated) {
                mismatches.set(
                  `${label} [applied]`,
                  `${label} [applied]\n    plain applied, annotated did not`,
                );
                continue;
              }
              comparedCases += 1;
              const actual = observables(annotated);
              actual.delta = JSON.stringify(getEditorDelta(mounted.lexical.getEditorState()));
              for (const [name, value] of Object.entries(expected))
                if (actual[name] !== value)
                  mismatches.set(
                    `${label} [${name}]`,
                    `${label} [${name}]\n    plain     ${value}\n    annotated ${actual[name]}`,
                  );
              const paint = annotatedFailures(mounted, applied, annotated.history);
              if (paint.length > 0)
                mismatches.set(`${label} [paint]`, `${label} [paint]\n    ${paint.join("\n    ")}`);
              // The annotated run also keeps the pending/settled oracle's own invariants.
              for (const [key, detail] of caseMismatches(
                annotated,
                view,
                loadedOutsideNotes,
                new Map(),
              ))
                if (!key.includes("[same place]"))
                  mismatches.set(`${key} [annotated]`, `${detail}\n    (annotated run)`);
              mounted.unmount();
            }
          }
        expect(comparedCases, "no case was compared").toBeGreaterThan(0);
        expect(heldAnnotations, "no annotation held a byte").toBeGreaterThan(0);
        expectMismatchesListed(row, mismatches, listed, written, WRITE);
      },
      1_200_000,
    );
  });
}
