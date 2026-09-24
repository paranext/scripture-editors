/**
 * The position contract, checked exhaustively: every caret in a pending paragraph reports the
 * settled location the same bytes have in the document `getUsj()` returns, and every settled
 * location in that paragraph resolves back to the live bytes it names — or, for bytes with no
 * counterpart on the other side, to the nearest one at or before them.
 *
 * The settled side is never computed by hand: a REFERENCE editor is mounted from `getUsj()`'s own
 * document, where nothing is pending, so its locations are canonical by construction. A scenario
 * only says how the two paragraphs' bytes line up ({@link AlignmentSpec}); the harness counts
 * positions in non-whitespace bytes, because the settle is free to move whitespace.
 */
import {
  mountExpandedNoteEditor,
  mountStandardViewEditor,
  requireStandardViewOptions,
} from "../settledGetUsj.test-helpers";
import { $liveSelectionFromSettled, $settledLocationFromLivePoint } from "./settledPositions.utils";
import { $prepareSettleScopes } from "./settledScopes.utils";
import { settledPositionContext } from "./positions.test-helpers";
import { Usj, UsjDocumentLocation } from "@eten-tech-foundation/scripture-utilities";
import {
  $getRoot,
  $isDecoratorNode,
  $isElementNode,
  $isTextNode,
  LexicalEditor,
  LexicalNode,
  NodeKey,
  TextNode,
} from "lexical";
import { $isNoteNode, getPendedDisplayOwners } from "shared";
import {
  $getLocationFromNode,
  $getNodeFromLocation,
  $isImmutableNoteCallerNode,
  ViewOptions,
} from "shared-react";
import { expect } from "vitest";

export interface AlignmentSpec {
  /** `[live, settled]` stretches, in order, whose concatenations are the two paragraphs' texts
   * (whitespace is ignored). A count names the byte in front of which it sits and maps through
   * the stretch whose side holds that byte: one for one where the sides are equal, and to the
   * other side's start where they differ (snap left). A stretch with no bytes on the counting side
   * holds none, so it is never the one; the count past the last byte maps to the other side's
   * length. */
  segments: readonly (readonly [live: string, settled: string])[];
}

export interface PositionScenario {
  name: string;
  usj: Usj;
  /** Mount options: "standard" (default) or "expandedNotes". Both editors use the same. */
  mount?: "standard" | "expandedNotes";
  /** Put the mounted editor into the pending state. Must leave at least one pend. */
  pend(lexical: LexicalEditor): Promise<void>;
  /** Text that identifies the live paragraph under test (a substring of its text content). */
  liveNeedle: string;
  /** Text that identifies the same paragraph in the reference editor. */
  settledNeedle: string;
  alignment: AlignmentSpec;
}

export interface ContractReport {
  outbound: { liveNonWs: number; expected: number; actual: number | "undefined" | "elsewhere" }[];
  inbound: { settledNonWs: number; expected: number; actual: number | "refused" | "elsewhere" }[];
  /** The two paragraphs' texts, for a failure message. */
  liveText: string;
  settledText: string;
}

/** JavaScript's `\s` includes the NBSP the display separates markers with. */
const stripWs = (text: string): string => text.replace(/\s/g, "");

/** How many non-whitespace characters of `text` precede `offset`. */
function nonWs(text: string, offset: number): number {
  return stripWs(text.slice(0, offset)).length;
}

/** `count` on one side of `spec` restated on the other — an implementation independent of the one
 * under test, so the harness cannot agree with a bug in it. */
export function specMapSnapped(
  spec: AlignmentSpec,
  count: number,
  direction: "live→settled" | "settled→live",
): number {
  let from = 0;
  let to = 0;
  for (const [live, settled] of spec.segments) {
    const [fromText, toText] =
      direction === "live→settled"
        ? [stripWs(live), stripWs(settled)]
        : [stripWs(settled), stripWs(live)];
    if (count >= from && count < from + fromText.length)
      return fromText === toText ? to + (count - from) : to;
    from += fromText.length;
    to += toText.length;
  }
  return to;
}

/** A paragraph's USFM bytes, spelled leaf by leaf, with where each node starts in them: text nodes
 * and decorators' display bytes as they render, and a collapsed note's caller — a decorator that
 * renders no text — as the caller it stands for. */
interface ParagraphText {
  text: string;
  starts: Map<NodeKey, number>;
  ends: Map<NodeKey, number>;
  /** Every text node, in order: the carets the contract ranges over. */
  textNodes: TextNode[];
  /** Every leaf that spells bytes (text nodes and decorators), in order, with its byte count:
   * the settled locations the inbound direction ranges over. */
  leaves: { node: LexicalNode; size: number }[];
}

function $paragraphText(paragraph: LexicalNode): ParagraphText {
  let text = "";
  const starts = new Map<NodeKey, number>();
  const ends = new Map<NodeKey, number>();
  const textNodes: TextNode[] = [];
  const leaves: { node: LexicalNode; size: number }[] = [];
  const visit = (node: LexicalNode): void => {
    starts.set(node.getKey(), text.length);
    let spelled: string | undefined;
    if ($isTextNode(node)) {
      textNodes.push(node);
      spelled = node.getTextContent();
    } else if ($isImmutableNoteCallerNode(node)) {
      const note = node.getParent();
      spelled = $isNoteNode(note) ? note.getCaller() : "";
    } else if ($isDecoratorNode(node)) spelled = node.getTextContent();
    else if ($isElementNode(node)) node.getChildren().forEach(visit);
    if (spelled !== undefined) {
      leaves.push({ node, size: spelled.length });
      text += spelled;
    }
    ends.set(node.getKey(), text.length);
  };
  visit(paragraph);
  return { text, starts, ends, textNodes, leaves };
}

/** Where a resolved point sits in `paragraph`'s text, or `undefined` when it is outside it. */
function $offsetInParagraph(
  paragraph: ParagraphText,
  node: LexicalNode | undefined,
  offset: number | undefined,
): number | undefined {
  if (!node || offset === undefined) return undefined;
  const start = paragraph.starts.get(node.getKey());
  if (start === undefined) return undefined;
  if (!$isElementNode(node)) return start + offset;
  const child = node.getChildAtIndex(offset);
  return child ? paragraph.starts.get(child.getKey()) : paragraph.ends.get(node.getKey());
}

function $paragraphContaining(needle: string): LexicalNode {
  const paragraph = $getRoot()
    .getChildren()
    .find((child) => child.getTextContent().includes(needle));
  if (!paragraph) throw new Error(`no top-level element containing ${JSON.stringify(needle)}`);
  return paragraph;
}

function viewOptionsFor(mount: PositionScenario["mount"]): ViewOptions {
  const standard = requireStandardViewOptions();
  return mount === "expandedNotes" ? { ...standard, noteMode: "expanded" } : standard;
}

export async function checkContract(scenario: PositionScenario): Promise<ContractReport> {
  const mountFn =
    scenario.mount === "expandedNotes" ? mountExpandedNoteEditor : mountStandardViewEditor;
  const viewOptions = viewOptionsFor(scenario.mount);

  const pending = await mountFn(scenario.usj);
  await scenario.pend(pending.lexical);
  expect(
    getPendedDisplayOwners(pending.lexical)?.size ?? 0,
    "the scenario left nothing pending",
  ).toBeGreaterThan(0);
  const settled = pending.ref.current?.getUsj();
  if (!settled) throw new Error("getUsj() returned nothing");
  const reference = await mountFn(settled);

  // The context must translate in the pending editor's own view, or an expanded note's scope is
  // rebuilt as a collapsed one.
  const baseContext = settledPositionContext(pending.lexical);
  const context = { ...baseContext, tier2: { ...baseContext.tier2, viewOptions } };

  const live = pending.lexical
    .getEditorState()
    .read(() => $paragraphText($paragraphContaining(scenario.liveNeedle)));
  const ref = reference.lexical
    .getEditorState()
    .read(() => $paragraphText($paragraphContaining(scenario.settledNeedle)));

  expect(
    stripWs(scenario.alignment.segments.map(([l]) => l).join("")),
    "live side of the spec",
  ).toBe(stripWs(live.text));
  expect(
    stripWs(scenario.alignment.segments.map(([, s]) => s).join("")),
    "settled side of the spec",
  ).toBe(stripWs(ref.text));

  // Outbound: every live caret, in ONE read, without moving the selection (moving it can be a
  // caret departure that settles the very pend under test).
  const outboundLocations = pending.lexical.getEditorState().read(() => {
    const prepared = $prepareSettleScopes(context);
    return live.textNodes.flatMap((node) =>
      Array.from({ length: node.getTextContentSize() + 1 }, (_, offset) => ({
        liveNonWs: nonWs(live.text, (live.starts.get(node.getKey()) ?? 0) + offset),
        location: $settledLocationFromLivePoint(prepared, node, offset),
      })),
    );
  });
  const outbound = reference.lexical.getEditorState().read(() =>
    outboundLocations.map(({ liveNonWs, location }) => {
      const expected = specMapSnapped(scenario.alignment, liveNonWs, "live→settled");
      if (!location) return { liveNonWs, expected, actual: "undefined" as const };
      const [node, offset] = $getNodeFromLocation(location, viewOptions);
      const at = $offsetInParagraph(ref, node, offset);
      return {
        liveNonWs,
        expected,
        actual: at === undefined ? ("elsewhere" as const) : nonWs(ref.text, at),
      };
    }),
  );

  // Inbound: every reference caret's own (canonical) location, carried into the pending editor.
  const inboundLocations: { settledNonWs: number; location: UsjDocumentLocation }[] =
    reference.lexical.getEditorState().read(() =>
      ref.leaves.flatMap(({ node, size }) =>
        Array.from({ length: size + 1 }, (_, offset) => ({
          settledNonWs: nonWs(ref.text, (ref.starts.get(node.getKey()) ?? 0) + offset),
          location: $getLocationFromNode(node, offset, viewOptions),
        })),
      ),
    );
  const inbound = pending.lexical.getEditorState().read(() => {
    const prepared = $prepareSettleScopes(context);
    return inboundLocations.map(({ settledNonWs, location }) => {
      const expected = specMapSnapped(scenario.alignment, settledNonWs, "settled→live");
      const selection = $liveSelectionFromSettled(context, prepared, { start: location });
      if (!selection) return { settledNonWs, expected, actual: "refused" as const };
      const [node, offset] = $getNodeFromLocation(selection.start, viewOptions);
      const at = $offsetInParagraph(live, node, offset);
      return {
        settledNonWs,
        expected,
        actual: at === undefined ? ("elsewhere" as const) : nonWs(live.text, at),
      };
    });
  });

  return { outbound, inbound, liveText: live.text, settledText: ref.text };
}

/** The rows of `report` that break the contract, first ten, for `expect(...).toEqual([])`. */
export function contractMismatches(report: ContractReport) {
  return [
    ...report.outbound.filter((r) => r.actual !== r.expected).map((r) => ({ dir: "out", ...r })),
    ...report.inbound.filter((r) => r.actual !== r.expected).map((r) => ({ dir: "in", ...r })),
  ].slice(0, 10);
}
