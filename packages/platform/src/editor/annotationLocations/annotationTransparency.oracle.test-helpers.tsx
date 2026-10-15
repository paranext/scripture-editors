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
 * At a site strictly inside a carrier a paste runs too: a byte of the carrier copied out of its
 * piece and pasted at the caret (`PASTE_KEYSTROKES`), with the carriers cut by the ranges over them
 * alone, so a paste between two pieces must join the carrier as a paste into the unsplit one does.
 *
 * The annotated run is also graded on its own: every annotation paints exactly the bytes it holds
 * (plus whitespace), nothing is painted in part, a byte the edit left in place in the same carrier
 * keeps its holds, and an annotation is reported removed exactly when its bytes are gone. Before any case runs, every planned annotation must hold the bytes it
 * was planned to hold.
 *
 * Every site × keystroke a row attempts is accounted for: compared, or skipped for a stated reason
 * (the plain run did nothing there; a keystroke on a content node a planned crossing cuts that is
 * not the plain run's keystroke there). The plain run reaches each site as the pending/settled
 * oracle does, and each site's restatement by document bytes must be that oracle's own caret, so a
 * case the plain run skips is one that oracle skips. Every spelling of a case the plain run applied
 * is compared, or skipped as such a cut, or — in the popover's view, whose caret guard keeps one
 * caret of a document position — moved by the guard onto another spelling that compared: a
 * spelling that did nothing else is a failure of its own (`[applied]`) even when another spelling
 * compared. A row's failure prints its accounting; `ANNOTATION_TRANSPARENCY_ACCOUNTING=1` prints
 * every row's, with every skip by label.
 *
 * The cases known to fail are listed per view in `annotationTransparency.<view>.expected-failures.json`,
 * in the pending/settled oracle's list format; `ANNOTATION_TRANSPARENCY_WRITE=1` rewrites a list.
 */

import {
  $byteLoc,
  $byteNodes,
  $heldIndexes,
  $paintedIndexes,
  $separatorLen,
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
  OracleKeystroke,
  oracleRows,
  outsideNotes,
  PASTE_KEYSTROKES,
  pendingOracleView,
  PositionReport,
  PROTECTED_NOTE_SHELL_VIEW,
  readExpectedFailures,
  runKeystrokeCase,
} from "../markerEdit/pendingSettledOracle.test-helpers";
import { copyEvent } from "../markerEdit/markerEdit.test-helpers";
import { drainNativeSelectionChange } from "../editor-test.utils";
import { UsjDocumentLocation } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getNodeByKey,
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  COPY_COMMAND,
  LexicalEditor,
  LexicalNode,
  NodeKey,
  SELECTION_CHANGE_COMMAND,
  TextNode,
} from "lexical";
import {
  $carrierHoldableRange,
  $isDisplayAnnotationCarrier,
  $isMarkerTrailingSeparator,
  $isTypedMarkNode,
  $logicalText,
  $pieceHead,
  $pieceStart,
  NBSP,
  TypedMarkOnRemove,
  ZWSP,
} from "shared";
import { AnnotationRange, DeltaOp, getEditorDelta, ViewOptions } from "shared-react";
import Delta from "quill-delta";
import { writeFileSync } from "node:fs";
import { afterAll, describe, expect, it, vi } from "vitest";

const WRITE = process.env.ANNOTATION_TRANSPARENCY_WRITE === "1";
const ACCOUNTING = process.env.ANNOTATION_TRANSPARENCY_ACCOUNTING === "1";

/**
 * The bytes a range crossing between content and a carrier is planned to hold, by byte index (the
 * indexing of {@link $byteNodes}): the first and the last. It holds every byte between them too,
 * but for a byte no hold has to cover ({@link $isGapByte}).
 */
interface PlannedCrossing {
  first: number;
  last: number;
}

/** One annotation of the fixed set: where it is set, and the bytes it is expected to hold. */
interface PlannedAnnotation {
  id: string;
  range: AnnotationRange;
  /**
   * The text of the bytes it holds, in document order, a decorator spelled `[type]`, for a range
   * over one carrier; the byte indexes it spans for a range crossing between content and a carrier.
   */
  bytes: string | PlannedCrossing;
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
export function $planAnnotations(view: ViewOptions): PlannedAnnotation[] {
  const leaves = $paragraphLeaves();
  const byteIndexes = new Map(
    $byteNodes().map(([node, offset], index) => [`${node.getKey()}:${offset}`, index]),
  );
  /** The byte index of char `offset` of `node` (-1: a decorator), -1 when it is no byte. */
  const indexOf = (node: LexicalNode, offset: number): number =>
    byteIndexes.get(`${node.getKey()}:${offset}`) ?? -1;
  const plan: PlannedAnnotation[] = [];
  let next = 0;
  const add = (
    kind: string,
    start: UsjDocumentLocation,
    end: UsjDocumentLocation,
    bytes: PlannedAnnotation["bytes"],
  ): void => {
    next += 1;
    plan.push({ id: `${kind}${next}`, range: { start, end }, bytes });
  };
  leaves.forEach((leaf, index) => {
    if (!$isDisplayAnnotationCarrier(leaf)) return;
    const before = leaves.slice(0, index).reverse().find($isContentText);
    const after = leaves.slice(index + 1).find($isContentText);
    // A crossing starts or ends on a content byte that is not whitespace, never on the
    // whitespace beside the carrier: a mark whose edge falls on a space splits the space run it is
    // part of, which the editor's per-node whitespace rules (display mapping, the collapse on
    // save) then no longer see as one run — a limit of marks over content, not of the display
    // bytes under test. Carriers with no such byte beside them get no crossing on that side.
    const beforeText = before?.getTextContent() ?? "";
    const beforeStart = beforeText.trimEnd().length - 1;
    const afterText = after?.getTextContent() ?? "";
    const afterEnd = afterText.length - afterText.trimStart().length;
    const canCrossBefore = before !== undefined && beforeStart >= 0;
    const canCrossAfter = after !== undefined && afterEnd < afterText.length;
    if ($isTextNode(leaf)) {
      const text = leaf.getTextContent();
      const [low, high] = $carrierHoldableRange(leaf);
      // The carrier's caret positions a host can address: a caret whose location is the same as
      // the one before it is that one, the closest representable position to its left (the caret
      // between the `\` and the `+` of a nested `\+wj` has no location of its own inside the
      // marker), so a range starts and ends only at the first caret of each location, and holds
      // the bytes between those.
      const caretLoc = (offset: number) => $byteLoc(leaf, offset, false, view);
      const stops: number[] = [];
      for (let offset = low; offset <= high; offset += 1)
        if (
          offset === low ||
          JSON.stringify(caretLoc(offset)) !== JSON.stringify(caretLoc(offset - 1))
        )
          stops.push(offset);
      const units = stops.length - 1;
      if (units < 1) return;
      const first = stops[0];
      const last = stops[units];
      const span = (from: number, to: number) => text.slice(stops[from], stops[to]);
      add("whole", caretLoc(first), caretLoc(last), span(0, units));
      if (units >= 2) {
        add("prefix", caretLoc(first), caretLoc(stops[1]), span(0, 1));
        add("suffix", caretLoc(stops[units - 1]), caretLoc(last), span(units - 1, units));
      }
      if (units >= 3)
        add("inner", caretLoc(stops[1]), caretLoc(stops[units - 1]), span(1, units - 1));
      if (canCrossBefore && before)
        add("into", $byteLoc(before, beforeStart, false, view), caretLoc(stops[1]), {
          first: indexOf(before, beforeStart),
          last: indexOf(leaf, stops[1] - 1),
        });
      if (canCrossAfter && after)
        add("outof", caretLoc(stops[units - 1]), $byteLoc(after, afterEnd, true, view), {
          first: indexOf(leaf, stops[units - 1]),
          last: indexOf(after, afterEnd),
        });
      return;
    }
    // A read-only decorator: held whole, and crossed into and out of.
    const start = $byteLoc(leaf, -1, false, view);
    const end = $byteLoc(leaf, -1, true, view);
    const shown = `[${leaf.getType()}]`;
    add("whole", start, end, shown);
    if (canCrossBefore && before)
      add("into", $byteLoc(before, beforeStart, false, view), end, {
        first: indexOf(before, beforeStart),
        last: indexOf(leaf, -1),
      });
    if (canCrossAfter && after)
      add("outof", start, $byteLoc(after, afterEnd, true, view), {
        first: indexOf(leaf, -1),
        last: indexOf(after, afterEnd),
      });
  });
  return plan;
}

/** The annotations set on `mounted`, with the removal reports each received. */
interface AppliedAnnotations {
  ids: string[];
  /** The `<mark>`s holding each id once set: each reports its own removal when it goes. */
  marks: Map<string, NodeKey[]>;
  removals: Map<string, Parameters<TypedMarkOnRemove>[]>;
}

/**
 * Set every annotation of `plan` on `mounted`; only those that then hold a byte are kept, so a
 * plan entry holding nothing is reported once per row ({@link $holdMismatches}) rather than as a
 * removal failure in every case.
 */
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
  await act(async () => {
    await drainNativeSelectionChange();
  });
  return mounted.lexical.getEditorState().read(() => {
    const ids = plan.map(({ id }) => id).filter((id) => $heldIndexes(HELD_TYPE, id).size > 0);
    const marks = new Map(ids.map((id) => [id, $marksHolding(id)]));
    return { ids, marks, removals };
  });
}

/** The text of one byte of {@link $byteNodes}: its character, or a decorator's `[type]`. */
function byteText([node, offset]: [LexicalNode, number]): string {
  return offset >= 0 ? node.getTextContent()[offset] : `[${node.getType()}]`;
}

/** Bytes an annotation may paint without holding: whitespace between or beside held bytes. */
const FILLER = new RegExp(`^[\\s${NBSP}${ZWSP}]$`);

/**
 * Whether a range crossing over byte `[node, offset]` may leave it unheld: whitespace (a carrier's
 * edge whitespace, which no hold covers, or the space between content and a glyph), or a marker's
 * separator (`\w grace`'s space, a trailing separator node), which is no content a mark holds and
 * no carrier's either. Every other byte between a crossing's first and last is held.
 */
function $isGapByte([node, offset]: [LexicalNode, number]): boolean {
  if (offset < 0) return false;
  return FILLER.test(node.getTextContent()[offset]) || offset < $separatorLen(node);
}

/** `indexes` as text: each byte's text, a byte left out between two spelled `…`. */
function heldText(bytes: readonly [LexicalNode, number][], indexes: readonly number[]): string {
  return indexes
    .map(
      (index, i) => `${i > 0 && index !== indexes[i - 1] + 1 ? "…" : ""}${byteText(bytes[index])}`,
    )
    .join("");
}

/**
 * Every planned annotation whose held bytes, just after the whole plan was set, are not the bytes
 * it was planned to hold — including one that holds nothing — keyed `hold <id>`. A range over one
 * carrier holds exactly the planned text. A crossing holds its planned first and last byte and
 * every byte between them but a gap byte ({@link $isGapByte}).
 */
function $holdMismatches(plan: readonly PlannedAnnotation[]): Map<string, string> {
  const out = new Map<string, string>();
  const bytes = $byteNodes();
  for (const { id, bytes: planned } of plan) {
    const indexes = [...$heldIndexes(HELD_TYPE, id).keys()].sort((a, b) => a - b);
    const held = new Set(indexes);
    let plannedText: string;
    let holds: boolean;
    if (typeof planned === "string") {
      plannedText = JSON.stringify(planned);
      holds = indexes.map((index) => byteText(bytes[index])).join("") === planned;
    } else {
      const { first, last } = planned;
      const between = Array.from({ length: Math.max(last - first + 1, 0) }, (_, i) => first + i);
      const required = between.filter((index) => !$isGapByte(bytes[index]));
      plannedText = `bytes ${first}..${last} ${JSON.stringify(heldText(bytes, required))}`;
      holds =
        first >= 0 &&
        indexes[0] === first &&
        indexes.at(-1) === last &&
        required.every((index) => held.has(index));
    }
    if (holds) continue;
    const heldRange =
      indexes.length === 0
        ? "nothing"
        : `bytes ${indexes[0]}..${indexes.at(-1)} ${JSON.stringify(heldText(bytes, indexes))}`;
    out.set(`hold ${id}`, `hold ${id}\n    planned ${plannedText}\n    holds   ${heldRange}`);
  }
  return out;
}

/** Why a site × keystroke attempt compared nothing. */
type SkipReason =
  | "plain run did not apply"
  | "keystroke on a cut content node"
  | "no annotated spelling applied";

/** What became of every site × keystroke a row attempted. */
interface Accounting {
  attempted: number;
  compared: number;
  skipped: { label: string; reason: SkipReason }[];
  /** Spellings of a compared case that compared nothing, each for a stated reason. */
  skippedSpellings: { label: string; reason: string }[];
}

/**
 * `accounting` as text: the counts, by reason, and every skip by label — with `all`, the plain
 * run's own too (`ANNOTATION_TRANSPARENCY_ACCOUNTING=1`).
 */
function describeAccounting(row: string, accounting: Accounting, all: boolean): string {
  const byReason = new Map<SkipReason, number>();
  for (const { reason } of accounting.skipped)
    byReason.set(reason, (byReason.get(reason) ?? 0) + 1);
  const counts = [...byReason].map(([reason, count]) => `${count} ${reason}`).join(", ");
  return [
    `${row}: ${accounting.attempted} attempted, ${accounting.compared} compared (${accounting.skippedSpellings.length} of their spellings skipped), ${accounting.skipped.length} skipped${counts ? ` (${counts})` : ""}`,
    ...accounting.skipped
      .filter(({ reason }) => all || reason !== "plain run did not apply")
      .map(({ label, reason }) => `  skipped ${label}: ${reason}`),
    ...accounting.skippedSpellings.map(
      ({ label, reason }) => `  skipped spelling ${label}: ${reason}`,
    ),
  ].join("\n");
}

/** One edit site of the pending/settled oracle, with what the transparency run reads of it. */
interface RowSite {
  /** The site as the pending/settled oracle reaches it: an index into its texts, an offset. */
  index: number;
  offset: number;
  global: GlobalSite;
  /** The site's node and offset as a case label spells them, for a skip the plain run made. */
  label: string;
  /** The text of the site's node in the unannotated tree, before any keystroke. */
  text: string;
  /** Whether a planned crossing range starts or ends in the site's node, cutting it. */
  isCrossed: boolean;
  /** Whether the site is strictly inside a display-byte carrier: where a paste splits it, and
   * where the plan's ranges over it cut it into pieces. */
  isInsideCarrier: boolean;
}

/**
 * Every edit site of the pending/settled oracle in the unannotated tree, and every one whose
 * restatement by document bytes ({@link $globalSite}, {@link $spellings}) is not the oracle's own
 * caret there: the annotated run finds its spellings by that restatement, so a site it got wrong
 * would be compared at another caret, or skipped, without a word.
 */
function $rowSites(plan: readonly PlannedAnnotation[]): {
  sites: RowSite[];
  unrestated: string[];
} {
  const bytes = $byteNodes();
  const crossed = new Set<NodeKey>();
  for (const { bytes: planned } of plan)
    if (typeof planned !== "string")
      for (const index of [planned.first, planned.last]) {
        const node = bytes[index]?.[0];
        if (node && $isContentText(node)) crossed.add(node.getKey());
      }
  const sites: RowSite[] = [];
  const unrestated: string[] = [];
  for (const { index, offset, shell } of $editSites()) {
    const node = $textsOf(!!shell)[index];
    const global = $globalSite(index, offset, !!shell);
    const label = `${shell ? "shell " : ""}${node.getType()} ${JSON.stringify($logicalText(node).replaceAll(NBSP, "~"))}@${offset}`;
    const [restated] = $spellings(global);
    if (!restated?.node.is(node) || restated.offset !== offset)
      unrestated.push(
        `${label} restates as ${restated ? `${JSON.stringify(restated.node.getTextContent())}@${restated.offset}` : "nothing"}`,
      );
    sites.push({
      index,
      offset,
      global,
      label,
      text: node.getTextContent(),
      isCrossed: crossed.has(node.getKey()),
      isInsideCarrier:
        $isDisplayAnnotationCarrier(node) && offset > 0 && offset < node.getTextContentSize(),
    });
  }
  return { sites, unrestated };
}

/** The keys of the `<mark>`s holding `id` now, in document order. */
function $marksHolding(id: string): NodeKey[] {
  const keys: NodeKey[] = [];
  const visit = (node: LexicalNode): void => {
    if ($isTypedMarkNode(node) && (node.getTypedIDs()[HELD_TYPE] ?? []).includes(id))
      keys.push(node.getKey());
    if ($isElementNode(node)) node.getChildren().forEach(visit);
  };
  visit($getRoot());
  return keys;
}

/** A caret position in the edited paragraph's editable texts, by the bytes before it. */
export interface GlobalSite {
  at: number;
  /** Whether the plain site was the start of its node, its end, or strictly inside it. */
  edge: "start" | "end" | "inside";
  shell: boolean;
}

function $textsOf(shell: boolean): TextNode[] {
  return shell ? $shellTexts() : $editableTexts();
}

/** The plain run's site, restated by document bytes so the annotated tree can find it. */
export function $globalSite(index: number, offset: number, shell: boolean): GlobalSite {
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
export function $spellings(site: GlobalSite): CaseSite[] {
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

/**
 * The locations each document position reports, as one sorted set per position: a carrier cut
 * into pieces spells a boundary position twice (the end of one piece, the start of the next), and
 * both spellings report the same places, so the raw per-caret list is longer, not different.
 */
function positionSets(reports: readonly PositionReport[]): string {
  const byPosition = new Map<number, Set<string>>();
  for (const { position, location } of reports) {
    let set = byPosition.get(position);
    if (!set) byPosition.set(position, (set = new Set()));
    set.add(location ?? "");
  }
  return JSON.stringify(
    [...byPosition].sort(([a], [b]) => a - b).map(([position, set]) => [position, [...set].sort()]),
  );
}

/**
 * `ops` as a `Delta` pushes them: every run of adjacent inserts that share attributes joined,
 * recursively through an embed's own `contents.ops`. The host composes ops, and a mark over
 * content has always split one text into several nodes, each sending its own insert.
 */
function composedOps(ops: readonly DeltaOp[]): DeltaOp[] {
  const delta = new Delta();
  for (const op of ops) {
    const copy: DeltaOp = { ...op };
    const insert: unknown = copy.insert;
    if (insert && typeof insert === "object" && "note" in insert) {
      const note: unknown = insert.note;
      if (note && typeof note === "object" && "contents" in note) {
        const contents: unknown = note.contents;
        if (
          contents &&
          typeof contents === "object" &&
          "ops" in contents &&
          Array.isArray(contents.ops)
        )
          copy.insert = {
            note: { ...note, contents: { ...contents, ops: composedOps(contents.ops) } },
          };
      }
    }
    delta.push(copy);
  }
  return delta.ops;
}

/** `value` as JSON with every object's keys sorted, so two ops that differ only in key order
 * read the same. */
function canonicalJson(value: unknown): string {
  return JSON.stringify(value, (_key, inner: unknown) =>
    inner && typeof inner === "object" && !Array.isArray(inner)
      ? Object.fromEntries(Object.entries(inner).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)))
      : inner,
  );
}

/** The net change of a run's `onUsjChange` ops: every commit's ops composed in order. */
function composedChange(commits: readonly (readonly DeltaOp[])[]): string {
  const net = commits.reduce(
    (acc, commit) => acc.compose(new Delta(composedOps(commit))),
    new Delta(),
  );
  return canonicalJson(net.ops);
}

/** What the transparency comparison reads of a run, each as one string. */
function observables(run: CaseRun): { [name: string]: string } {
  return {
    pending: JSON.stringify(run.pending),
    settled: JSON.stringify(run.settled),
    "pending text": run.before.text,
    "pending screen": run.before.screen ?? "",
    "pending positions": positionSets(run.before.reported),
    // Per document position, as the reports are: a cut inside a carrier is two caret positions at
    // one document position, and the same failure from both is one failure there.
    "pending round trip": JSON.stringify([...new Set(run.before.roundTrip)]),
    "settled screen": run.shownLines ?? "",
    "settled text": run.after.text,
    "settled positions": positionSets(run.after.reported),
    "paste errors": JSON.stringify(run.pasteErrors),
  };
}

/** `getEditorDelta`'s ops composed ({@link composedOps}), as one string. */
function composedDelta(editor: LexicalEditor): string {
  return canonicalJson(composedOps(getEditorDelta(editor.getEditorState()).ops));
}

/**
 * The pending/settled oracle's own checks of `run`, as the mismatch each produced by the check's
 * key with the case label taken off (both runs' labels spell the same site). The same-place
 * check needs the whole row's history and is not read here.
 */
function invariantResults(
  run: CaseRun,
  view: string,
  loadedOutsideNotes: string,
): Map<string, string> {
  const out = new Map<string, string>();
  for (const [key, detail] of caseMismatches(run, view, loadedOutsideNotes, new Map()))
    if (!key.includes("[same place]"))
      out.set(key.startsWith(run.label) ? key.slice(run.label.length).trim() : key, detail);
  return out;
}

/** Whether `keystroke` acts on a node as a whole rather than at an offset in it. A content node a
 * mark splits is not the node the plain run edits, so such a case compares nothing there. */
function isNodeShaped(keystroke: OracleKeystroke): boolean {
  return keystroke.name.includes("over the whole text");
}

/**
 * The `text/plain` a copy of the whole edited paragraph puts on the clipboard. In the popover's
 * view the selection is announced as a change in the same update, as every caret placement there
 * is, and the native `selectionchange` it queues is drained ({@link drainNativeSelectionChange}),
 * so the shell's caret guard has always confined it to the note before the copy reads it. The
 * event is one Lexical's default copy handler fills in (`native`), so a view with no copy plugin
 * of its own still yields the bytes it copies rather than an `execCommand` fallback.
 */
async function copiedBytes(mounted: MountedInView, view: string): Promise<string> {
  await act(async () => {
    mounted.lexical.update(() => {
      const para = $getRoot().getChildren()[2];
      if ($isElementNode(para)) para.select(0, para.getChildrenSize());
      if (view === PROTECTED_NOTE_SHELL_VIEW)
        mounted.lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    });
    await drainNativeSelectionChange();
  });
  const { event, getData } = copyEvent({ native: true });
  await act(async () => {
    mounted.lexical.dispatchCommand(COPY_COMMAND, event);
    await drainNativeSelectionChange();
  });
  return getData("text/plain");
}

/** A byte of a carrier: the key of the carrier's head piece, and the byte's offset in the whole
 * carrier's text (0 for a decorator, which is one byte). */
interface CarrierByte {
  carrier: NodeKey;
  offset: number;
}

/** Each carrier byte of the current tree ({@link $byteNodes}' indexing): where it is in its
 * carrier, or `undefined` for a byte of no carrier. Read-only. */
function $carrierBytes(): (CarrierByte | undefined)[] {
  return $byteNodes().map(([node, offset]) =>
    $isDisplayAnnotationCarrier(node)
      ? { carrier: $pieceHead(node).getKey(), offset: offset < 0 ? 0 : $pieceStart(node) + offset }
      : undefined,
  );
}

/** The text of the carrier whose head is `key` now, a decorator spelled `[type]`; `undefined` when
 * it is gone or no carrier. Read-only. */
function $carrierText(key: NodeKey): string | undefined {
  const head = $getNodeByKey(key);
  if (!head || !head.isAttached() || !$isDisplayAnnotationCarrier(head)) return undefined;
  return $isTextNode(head) ? $logicalText(head) : `[${head.getType()}]`;
}

/** What a run's carriers held before its keystroke ({@link $carrierHolds}). */
interface CarrierHolds {
  /** Each carrier's text, by its head's key. */
  texts: Map<NodeKey, string>;
  /**
   * The carrier bytes each annotation holds — but for the bytes of the carrier the keystroke is
   * made in from the caret on (from the byte before it, for a keystroke that may delete it), which
   * the keystroke may delete or split off the carrier as content (a paste), and which the engine
   * may then spell anew (a glyph's canonical text restored): what became of them is not known
   * from the bytes alone.
   */
  held: Map<string, CarrierByte[]>;
}

/** The carrier bytes each of `ids` holds now ({@link CarrierHolds.held}), with every carrier's
 * text, the caret of the keystroke about to be made at `site`; `keepsByteBeforeCaret` for a
 * keystroke that leaves the byte before the caret in its carrier (a paste). Read-only. */
function $carrierHolds(
  ids: readonly string[],
  site: CaseSite,
  keepsByteBeforeCaret: boolean,
): CarrierHolds {
  const carrierBytes = $carrierBytes();
  const texts = new Map<NodeKey, string>();
  for (const byte of carrierBytes)
    if (byte && !texts.has(byte.carrier)) {
      const text = $carrierText(byte.carrier);
      if (text !== undefined) texts.set(byte.carrier, text);
    }
  const edited = $pieceHead(site.node).getKey();
  const caret = $pieceStart(site.node) + site.offset;
  const firstUnknown = keepsByteBeforeCaret ? caret : caret - 1;
  const held = new Map(
    ids.map((id) => [
      id,
      [...$heldIndexes(HELD_TYPE, id).keys()].flatMap((index) => {
        const byte = carrierBytes[index];
        if (!byte || (byte.carrier === edited && byte.offset >= firstUnknown)) return [];
        return [byte];
      }),
    ]),
  );
  return { texts, held };
}

/**
 * Where each character of `before` is in `after` when an edit between them left it in place: a
 * character of their common prefix or common suffix. Measured both ways (the prefix first, and the
 * suffix first), and a character the two place differently maps nowhere: the edit could have been
 * made on either side of it (a byte typed beside an identical one), so which of the two is the old
 * one is not known from the text alone.
 */
function offsetsLeftInPlace(before: string, after: string): Map<number, number> {
  const prefix = (limit: number): number => {
    let length = 0;
    while (length < limit && before[length] === after[length]) length += 1;
    return length;
  };
  const suffix = (limit: number): number => {
    let length = 0;
    while (
      length < limit &&
      before[before.length - 1 - length] === after[after.length - 1 - length]
    )
      length += 1;
    return length;
  };
  const shortest = Math.min(before.length, after.length);
  const prefixFirst = prefix(shortest);
  const suffixAfterPrefix = suffix(shortest - prefixFirst);
  const suffixFirst = suffix(shortest);
  const prefixAfterSuffix = prefix(shortest - suffixFirst);
  const shift = after.length - before.length;
  const place = (offset: number, start: number, end: number): number | undefined => {
    if (offset < start) return offset;
    if (offset >= before.length - end) return offset + shift;
    return undefined;
  };
  const out = new Map<number, number>();
  for (let offset = 0; offset < before.length; offset += 1) {
    const one = place(offset, prefixFirst, suffixAfterPrefix);
    if (one !== undefined && one === place(offset, prefixAfterSuffix, suffixFirst))
      out.set(offset, one);
  }
  return out;
}

/**
 * A hold goes only with its bytes, or when they stop being a carrier's: every byte `before` lists
 * as held that is still a byte of the same carrier (the same head node) and that the edit left in
 * place in that carrier's text ({@link offsetsLeftInPlace}) still holds each annotation of `ids` it
 * held. This is what reads a hold dropped while its carrier was briefly no carrier, which the
 * removal checks accept as "its bytes are gone" once nothing holds the annotation. Read-only.
 */
function $droppedHolds(ids: readonly string[], before: CarrierHolds): string[] {
  const bytes = $byteNodes();
  const indexOf = new Map(
    $carrierBytes().flatMap((byte, index) =>
      byte ? [[`${byte.carrier}:${byte.offset}`, index] as const] : [],
    ),
  );
  const inPlace = new Map<NodeKey, Map<number, number>>();
  const offsetsOf = (carrier: NodeKey): Map<number, number> => {
    let offsets = inPlace.get(carrier);
    if (!offsets) {
      const was = before.texts.get(carrier);
      const now = $carrierText(carrier);
      offsets = was === undefined || now === undefined ? new Map() : offsetsLeftInPlace(was, now);
      inPlace.set(carrier, offsets);
    }
    return offsets;
  };
  const failures: string[] = [];
  for (const id of ids) {
    const heldNow = $heldIndexes(HELD_TYPE, id);
    const dropped = (before.held.get(id) ?? []).flatMap(({ carrier, offset }) => {
      const now = offsetsOf(carrier).get(offset);
      const index = now === undefined ? undefined : indexOf.get(`${carrier}:${now}`);
      return index !== undefined && !heldNow.has(index) ? [index] : [];
    });
    if (dropped.length > 0)
      failures.push(
        `${id}: dropped its hold on ${JSON.stringify(heldText(bytes, dropped))} (bytes ${dropped.join(",")}), left in place in the same carrier`,
      );
  }
  return failures;
}

/**
 * The annotated run's own failures after `mounted` settled: a held byte nothing paints, a
 * non-whitespace byte painted but not held, a leaf painted in part, a hold dropped from a byte the
 * edit left in place in a carrier that is still there, and a removal report that disagrees with
 * `setAnnotation`'s `onRemove` contract — an annotation whose bytes are all gone reports once; one
 * still held reports nothing, unless a `<mark>` that held it once it was set has gone (that mark
 * reports its own removal, whatever else still holds the annotation). `before` is what the
 * carriers held before the keystroke.
 */
function annotatedFailures(
  mounted: MountedInView,
  applied: AppliedAnnotations,
  history: boolean,
  before: CarrierHolds | undefined,
): string[] {
  const failures: string[] = [];
  mounted.lexical.getEditorState().read(() => {
    const bytes = $byteNodes();
    if (before) failures.push(...$droppedHolds(applied.ids, before));
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
        const nowMarks = new Set($marksHolding(id));
        const aMarkWent = (applied.marks.get(id) ?? []).some((key) => !nowMarks.has(key));
        if (reports.length === 1 && held.size > 0 && !aMarkWent)
          failures.push(`${id}: reported removed (${reports[0][2]}) while it still holds bytes`);
      }
    }
  });
  for (const log of mounted.logs)
    if (log.includes("painted in part")) failures.push(`painted in part: ${log}`);
  return failures;
}

/**
 * In the popover's view, the spelling of `site` that the caret is at once it is placed at spelling
 * `which` and announced — as `runKeystrokeCase` places it there — when that is another spelling:
 * the shell's caret guard keeps one caret of a document position, so a keystroke at the other
 * spelling is the keystroke at this one. `undefined` when the caret stays or goes anywhere else.
 */
async function caretRespelledAt(
  usj: Parameters<typeof mountInView>[0],
  viewOptions: ViewOptions,
  plan: PlannedAnnotation[],
  site: GlobalSite,
  which: number,
): Promise<number | undefined> {
  const mounted = await mountInView(usj, viewOptions);
  await applyAnnotations(mounted, plan);
  await act(async () => {
    mounted.lexical.update(() => {
      const found = $spellings(site)[which];
      if (!found) return;
      found.node.select(found.offset, found.offset);
      mounted.lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    });
    await drainNativeSelectionChange();
  });
  const target = mounted.lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection) || !selection.isCollapsed()) return undefined;
    const { key, offset } = selection.anchor;
    const at = $spellings(site).findIndex(
      (spelling) => spelling.node.getKey() === key && spelling.offset === offset,
    );
    return at >= 0 && at !== which ? at : undefined;
  });
  mounted.unmount();
  return target;
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
        const { plan, loadedOutsideNotes, sites, unrestated } = probe.lexical
          .getEditorState()
          .read(() => {
            const planned = $planAnnotations(viewOptions);
            return {
              plan: planned,
              loadedOutsideNotes: outsideNotes(probe.ref.current?.getUsj()),
              ...$rowSites(planned),
            };
          });
        expect(plan.length, "the paragraph has display bytes to annotate").toBeGreaterThan(0);
        expect(unrestated, "every site restates as the oracle's own caret").toEqual([]);
        await applyAnnotations(probe, plan);
        const mismatches = probe.lexical.getEditorState().read(() => $holdMismatches(plan));
        probe.unmount();
        // A paste is compared with the carriers cut by the ranges over them alone: a crossing's
        // mark beside the pasted bytes would cut the whitespace run they can form with the content
        // there, the limit of marks over content the plan's crossings already keep clear of.
        const piecePlan = plan.filter(({ bytes }) => typeof bytes === "string");

        const accounting: Accounting = {
          attempted: 0,
          compared: 0,
          skipped: [],
          skippedSpellings: [],
        };
        for (const {
          index,
          offset,
          global: site,
          label: siteLabel,
          text,
          isCrossed,
          isInsideCarrier,
        } of sites)
          for (const keystroke of [
            ...keystrokesFor(view, site.shell),
            ...(isInsideCarrier ? PASTE_KEYSTROKES : []),
          ]) {
            const casePlan = "copies" in keystroke ? piecePlan : plan;
            accounting.attempted += 1;
            const plainMounted = await mountInView(usj, viewOptions);
            // The plain run reaches the site as the pending/settled oracle does, so a case it
            // skips is one that oracle skips too.
            const plain = await runKeystrokeCase(
              plainMounted,
              view,
              () => ({ node: $textsOf(site.shell)[index], offset, shell: site.shell }),
              keystroke,
            );
            if (!plain) {
              accounting.skipped.push({
                label: `${siteLabel} ${keystroke.name}`,
                reason: "plain run did not apply",
              });
              continue;
            }
            const expected = observables(plain);
            expected.delta = composedDelta(plainMounted.lexical);
            expected.ops = composedChange(plainMounted.ops);
            expected.copy = await copiedBytes(plainMounted, view);
            const plainInvariants = invariantResults(plain, view, loadedOutsideNotes);
            plainMounted.unmount();
            /** The spellings compared, by their place in the site's spellings. */
            const comparedAt = new Set<number>();
            const cutSpellings: string[] = [];
            /** Spellings the caret guard moved to another spelling: label, and that one. */
            const respelled: [label: string, to: number][] = [];
            /** Each spelling the plain run's case did not run at: its failure's key, and why. */
            const unrun: [key: string, why: string][] = [];
            // Every spelling the annotated tree gives the site, each run on a fresh mount (a
            // node belongs to the editor it was read from, so each mount reads its own).
            let spellingCount: number | undefined;
            for (let which = 0; spellingCount === undefined || which < spellingCount; which += 1) {
              const mounted = await mountInView(usj, viewOptions);
              const applied = await applyAnnotations(mounted, casePlan);
              const holdsBefore = mounted.lexical.getEditorState().read(() => {
                const found = $spellings(site)[which];
                return found && $carrierHolds(applied.ids, found, "copies" in keystroke);
              });
              // Setting an annotation emits no change, so the ops streams start equal here.
              const opsBefore = mounted.ops.length;
              const { spelling, count, isCutNode, isSpliceable } = mounted.lexical
                .getEditorState()
                .read(() => {
                  const all = $spellings(site);
                  const found = all[which];
                  const logical = found && $logicalText(found.node);
                  return {
                    spelling: found && { edge: edgeOf(found) },
                    count: all.length,
                    // A content node a planned crossing cuts: this spelling's node holds only
                    // part of the plain node's bytes.
                    isCutNode: isCrossed && logical !== undefined && logical !== text,
                    // Whether the keystroke's splice can be made in this spelling's node.
                    isSpliceable:
                      !found ||
                      !("apply" in keystroke) ||
                      !!keystroke.apply(logical ?? "", $pieceStart(found.node) + found.offset),
                  };
                });
              spellingCount ??= count;
              const label = `${plain.label}${spellingCount > 1 ? ` [spelling ${which + 1}/${spellingCount}]` : ""}`;
              if (count !== spellingCount)
                unrun.push([
                  `${label} [spellings]`,
                  `this mount spells the site ${count} times, the first ${spellingCount}`,
                ]);
              if (!spelling) {
                mounted.unmount();
                break;
              }
              // A node-shaped keystroke on a content node a crossing mark has cut is not the
              // plain run's keystroke: the plain node and this one hold different bytes.
              if (isNodeShaped(keystroke) && isCutNode) {
                cutSpellings.push(label);
                mounted.unmount();
                continue;
              }
              const annotated = await runKeystrokeCase(
                mounted,
                view,
                () => {
                  const found = $spellings(site)[which];
                  return found && edgeOf(found) === spelling.edge ? found : undefined;
                },
                keystroke,
              );
              // `runKeystrokeCase` has unmounted a mount it did not run. The oracle splices a
              // keystroke into the one node at its caret, so at a cut in a content node a splice
              // across the cut (Backspace at the start of the piece after it) is no keystroke
              // there. Anywhere else a spelling that did nothing is a failure, unless the
              // popover's caret guard moved its caret onto a spelling that compared (below).
              if (!annotated) {
                const to =
                  view === PROTECTED_NOTE_SHELL_VIEW && !(isCutNode && !isSpliceable)
                    ? await caretRespelledAt(usj, viewOptions, casePlan, site, which)
                    : undefined;
                if (isCutNode && !isSpliceable) cutSpellings.push(label);
                else if (to !== undefined) respelled.push([label, to]);
                else
                  unrun.push([
                    `${label} [applied]`,
                    "plain applied, this annotated spelling did not",
                  ]);
                continue;
              }
              comparedAt.add(which);
              const actual = observables(annotated);
              actual.delta = composedDelta(mounted.lexical);
              actual.ops = composedChange(mounted.ops.slice(opsBefore));
              actual.copy = await copiedBytes(mounted, view);
              for (const [name, value] of Object.entries(expected))
                if (actual[name] !== value)
                  mismatches.set(
                    `${label} [${name}]`,
                    `${label} [${name}]\n    plain     ${value}\n    annotated ${actual[name]}`,
                  );
              const paint = annotatedFailures(mounted, applied, annotated.history, holdsBefore);
              if (paint.length > 0)
                mismatches.set(`${label} [paint]`, `${label} [paint]\n    ${paint.join("\n    ")}`);
              // The annotated run keeps the pending/settled oracle's own invariants exactly as
              // the plain run does: a case that violates one does so identically in both.
              const annotatedInvariants = invariantResults(annotated, view, loadedOutsideNotes);
              for (const key of new Set([
                ...plainInvariants.keys(),
                ...annotatedInvariants.keys(),
              ])) {
                const inPlain = plainInvariants.get(key);
                const inAnnotated = annotatedInvariants.get(key);
                if (inPlain === inAnnotated) continue;
                mismatches.set(
                  `${label} [invariant] ${key}`,
                  `${label} [invariant] ${key}\n    plain     ${inPlain ?? "(holds)"}\n    annotated ${inAnnotated ?? "(holds)"}`,
                );
              }
              mounted.unmount();
            }
            // A spelling the caret guard moved is covered by the spelling it moved to, when
            // that one compared.
            for (const [label, to] of respelled)
              if (!comparedAt.has(to))
                unrun.push([
                  `${label} [applied]`,
                  `the view moves this caret to spelling ${to + 1}, which compared nothing`,
                ]);
            // Every spelling of a case the plain run applied is compared or skipped for a stated
            // reason: one that did nothing is a failure, even when another one compared.
            for (const [key, why] of unrun) mismatches.set(key, `${key}\n    ${why}`);
            if (comparedAt.size > 0) {
              accounting.compared += 1;
              accounting.skippedSpellings.push(
                ...cutSpellings.map((label) => ({
                  label,
                  reason: "keystroke on a cut content node",
                })),
                ...respelled.map(([label, to]) => ({
                  label,
                  reason: `the view moves this caret to spelling ${to + 1}`,
                })),
              );
            } else if (cutSpellings.length > 0 && unrun.length === 0)
              accounting.skipped.push({
                label: plain.label,
                reason: "keystroke on a cut content node",
              });
            else {
              accounting.skipped.push({
                label: plain.label,
                reason: "no annotated spelling applied",
              });
              if (unrun.length === 0)
                mismatches.set(
                  `${plain.label} [applied]`,
                  `${plain.label} [applied]\n    the annotated tree has no spelling of the site`,
                );
            }
          }
        const summary = describeAccounting(row, accounting, false);
        if (ACCOUNTING)
          // eslint-disable-next-line no-console -- ANNOTATION_TRANSPARENCY_ACCOUNTING asks for this output.
          console.info(describeAccounting(row, accounting, true));
        expect(accounting.compared, `no case was compared\n${summary}`).toBeGreaterThan(0);
        expectMismatchesListed(row, mismatches, listed, written, WRITE, summary);
      },
      1_200_000,
    );
  });
}
