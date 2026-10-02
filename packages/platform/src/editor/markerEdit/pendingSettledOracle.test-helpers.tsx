/**
 * A generated oracle for the pending-equals-settled contract: `getUsj()` read while an edit is
 * pending must equal `getUsj()` after that edit settles. The hand-picked suites
 * (`settledGetUsj.test.tsx`, `settleDifferential.test.tsx`) pin chosen shapes; this one enumerates
 * single keystrokes instead, so a shape nobody thought to list is covered by construction.
 *
 * For each document in a small corpus of paragraph, char span (plain, nested, with attributes,
 * beside a chapter), note, verse and milestone shapes, in each view, every editable text node of
 * the edited block is visited at every offset of a glyph-like node (marker glyphs, verse glyphs, attribute runs)
 * and at the first and last two offsets of plain text — the positions around marker glyphs and
 * separators. At each, one keystroke is applied to the bytes at that node: a name character, a
 * space, `*`, `\`, `|`, the removal of the character before (Backspace) or after (Delete) it, or —
 * once per node — `x` typed over the node's whole text (a caller, a glyph, a word selected and
 * replaced).
 * Typing is a direct splice into the node rather than `insertText`, so both nodes on either side
 * of a boundary are exercised: the editor can resolve a caret at a glyph's end to the end of the
 * glyph or to the start of the next text, and the two must settle alike.
 *
 * The settle is the departure an abandoned edit gets: a click into another paragraph, blur, and
 * `commitPendingMarkerEdits()`.
 *
 * After the settle, the screen must show what the file gets: the settled blocks' text, and the USFM
 * the settled document writes, carry the same bytes once whitespace — which a settle may place or
 * drop where a USFM reader treats it as structural — is set aside. Blocks showing a collapsed note,
 * whose caller and content the screen does not show, are not compared.
 *
 * Positions are held to the same contract while the edit is pending. Every caret position, node
 * boundaries included, reports (`getSelection()`'s translation) a location the same bytes report
 * after the settle — exactly, or, where the settled document reports nothing there, the closest
 * location to their left. And every report, handed back the way `setSelection` and `setAnnotation`
 * hand a host's location in, lands on the position it came from, on one across whitespace only that
 * reports the same, or on the closest position to its left the report names — never across a byte
 * to its right.
 *
 * One test file per view registers the oracle for that view
 * (`pendingSettledOracle.<view>.test.tsx`), so the views run in parallel.
 */
import { mountInView, oracleView } from "../annotationLocations/annotationLocations.test-helpers";
import { $textContaining, twoParaUsj } from "../positions/positions.test-helpers";
import { $prepareSettleScopes } from "../positions/settledScopes.utils";
import {
  $liveSelectionFromSettled,
  $settledLocationFromLivePoint,
} from "../positions/settledPositions.utils";
import { SettledPositionContext } from "../positions/settledPositions.model";
import { MarkerContent, Usj, UsjDocumentLocation } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $getState,
  $isElementNode,
  $isTextNode,
  CLICK_COMMAND,
  LexicalEditor,
  LexicalNode,
  NodeKey,
  TextNode,
} from "lexical";
import {
  $isMarkerNode,
  $isNoteNode,
  $isVerseNode,
  createMarkerLookup,
  defaultStyleInfo,
  canonicalAttributeText,
  defaultMarkerAttribute,
  getPendedDisplayOwners,
  NBSP,
  textTypeState,
  TypedMarkNode,
} from "shared";
import {
  $getLocationFromNode,
  $getNodeFromLocation,
  $getRangeFromUsjSelection,
  usjReactNodes,
  ViewOptions,
} from "shared-react";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { afterAll, describe, expect, it } from "vitest";

type Mounted = Awaited<ReturnType<typeof mountInView>>;

/** A char span's attribute, spread in because `MarkerObject` declares no attribute fields. */
const LEMMA: { [attribute: string]: string } = { lemma: "g" };

/** A document whose root holds the book, the chapter, `beside` — the root child the oracle
 * edits — and a paragraph to depart to. */
function chapterSideUsj(beside: MarkerContent): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
      { type: "chapter", marker: "c", number: "1" },
      beside,
      { type: "para", marker: "p", content: ["depart here"] },
    ],
  };
}

/** The documents the oracle edits; the root child after the chapter is the one edited — the
 * first body paragraph, or a `\ca`/`\cp` span beside the chapter. */
const CORPUS: { name: string; usj: Usj }[] = [
  {
    name: "closed char span",
    usj: twoParaUsj(["In the ", { type: "char", marker: "w", content: ["grace"] }, " of God"]),
  },
  {
    name: "nested char span",
    usj: twoParaUsj([
      "a ",
      {
        type: "char",
        marker: "nd",
        content: ["one ", { type: "char", marker: "wj", content: ["two"] }, " three"],
      },
      " b",
    ]),
  },
  {
    name: "char span with an attribute",
    usj: twoParaUsj(["a ", { type: "char", marker: "w", ...LEMMA, content: ["grace"] }, " b"]),
  },
  {
    name: "unclosed char span",
    usj: twoParaUsj(["a ", { type: "char", marker: "bd", closed: "false", content: ["bold"] }]),
  },
  {
    name: "verse",
    usj: twoParaUsj([{ type: "verse", marker: "v", number: "1" }, "In the beginning"]),
  },
  {
    name: "note",
    usj: twoParaUsj([
      "a",
      {
        type: "note",
        marker: "f",
        caller: "+",
        content: [{ type: "char", marker: "ft", content: ["note text"] }],
      },
      " b",
    ]),
  },
  {
    name: "milestone",
    usj: twoParaUsj(["a ", { type: "ms", marker: "qt-s" }, "b"]),
  },
  {
    name: "\\ca span beside its chapter",
    usj: chapterSideUsj({ type: "char", marker: "ca", content: ["3"] }),
  },
  {
    name: "\\cp span beside its chapter",
    usj: chapterSideUsj({ type: "char", marker: "cp", content: ["A"] }),
  },
];

/** One keystroke at a node offset: the new text and where the caret ends up, or `undefined` when
 * the keystroke does nothing there. */
type Keystroke = (text: string, offset: number) => { text: string; caret: number } | undefined;

const KEYSTROKES: { name: string; apply: Keystroke }[] = [
  ...["x", " ", "*", "\\", "|"].map((character) => ({
    name: `type ${JSON.stringify(character)}`,
    apply: (text: string, offset: number) => ({
      text: text.slice(0, offset) + character + text.slice(offset),
      caret: offset + 1,
    }),
  })),
  {
    // Selecting a whole text and typing over it — a caller, a glyph, a word. Once per text.
    name: 'type "x" over the whole text',
    apply: (text: string, offset: number) =>
      offset === 0 && text.length > 0 ? { text: "x", caret: 1 } : undefined,
  },
  {
    name: "Backspace",
    apply: (text: string, offset: number) =>
      offset === 0
        ? undefined
        : { text: text.slice(0, offset - 1) + text.slice(offset), caret: offset - 1 },
  },
  {
    name: "Delete",
    apply: (text: string, offset: number) =>
      offset >= text.length
        ? undefined
        : { text: text.slice(0, offset) + text.slice(offset + 1), caret: offset },
  },
];

/** Whether `node` is shown inside a collapsed note, where nothing can be typed. */
function $isInCollapsedNote(node: LexicalNode): boolean {
  for (let parent = node.getParent(); parent; parent = parent.getParent())
    if ($isNoteNode(parent) && parent.getIsCollapsed()) return true;
  return false;
}

/** Glyph-like nodes, whose every offset is a position around a marker. */
function $isGlyphLike(node: TextNode): boolean {
  return (
    $isMarkerNode(node) || $isVerseNode(node) || $getState(node, textTypeState) === "attribute"
  );
}

/** Every (node index, offset) the oracle edits in the first body paragraph. */
function $editSites(): { index: number; offset: number }[] {
  const sites: { index: number; offset: number }[] = [];
  $editableTexts().forEach((node, index) => {
    const length = node.getTextContentSize();
    const offsets = $isGlyphLike(node)
      ? Array.from({ length: length + 1 }, (_, offset) => offset)
      : [...new Set([0, 1, length - 1, length])].filter(
          (offset) => offset >= 0 && offset <= length,
        );
    offsets.forEach((offset) => sites.push({ index, offset }));
  });
  return sites;
}

/** The editable text nodes of the first body paragraph, in document order. */
function $editableTexts(): TextNode[] {
  const para = $getRoot().getChildren()[2];
  const out: TextNode[] = [];
  const visit = (node: LexicalNode): void => {
    if ($isTextNode(node)) {
      if (node.getMode() === "normal" && !$isInCollapsedNote(node)) out.push(node);
      return;
    }
    if ($isElementNode(node)) node.getChildren().forEach(visit);
  };
  if (para) visit(para);
  return out;
}

/** Click into the second paragraph, blur, and commit whatever is still pending. */
async function depart(mounted: Mounted): Promise<void> {
  await act(async () => {
    mounted.lexical.dispatchCommand(CLICK_COMMAND, new MouseEvent("click"));
    mounted.lexical.update(() => $textContaining("depart here").select(1, 1));
    await Promise.resolve();
    await Promise.resolve();
  });
  const rootElement = mounted.lexical.getRootElement();
  if (!rootElement) throw new Error("editor root not found");
  act(() => rootElement.blur());
  act(() => mounted.ref.current?.commitPendingMarkerEdits());
}

/** The marker lookup `Editor.tsx` classifies with when the host passes no stylesheet. */
const editorMarkerLookup = createMarkerLookup(defaultStyleInfo);

/** The position-translation context `Editor.tsx` builds, for `view`. Call outside a read. */
export function positionContext(lexical: LexicalEditor, view: ViewOptions): SettledPositionContext {
  return {
    pendedKeys: getPendedDisplayOwners(lexical) ?? new Set<NodeKey>(),
    transientInput: undefined,
    lastKnownCaret: undefined,
    tier2: { viewOptions: view, getMarker: editorMarkerLookup },
    nodes: [TypedMarkNode, ...usjReactNodes],
    cache: { entries: new Map() },
  };
}

/** One caret position: a text node's offset, and where it falls in the document's text — every
 * text node's bytes concatenated in document order. */
interface CaretPosition {
  readonly node: TextNode;
  readonly offset: number;
  readonly position: number;
}

/** Every caret position in the document's text nodes. */
export function $caretPositions(): CaretPosition[] {
  const out: CaretPosition[] = [];
  let position = 0;
  const visit = (node: LexicalNode): void => {
    if ($isTextNode(node)) {
      const length = node.getTextContentSize();
      for (let offset = 0; offset <= length; offset += 1)
        out.push({ node, offset, position: position + offset });
      position += length;
      return;
    }
    if ($isElementNode(node)) node.getChildren().forEach(visit);
  };
  visit($getRoot());
  return out;
}

/** The document's text-node bytes, concatenated. */
function $documentText(): string {
  return $getRoot()
    .getAllTextNodes()
    .map((node) => node.getTextContent())
    .join("");
}

/** What one caret position reports as — `getSelection()`'s translation, spelled as JSON, or
 * `undefined` when it reports nothing — at its document position. */
interface PositionReport {
  readonly position: number;
  readonly location: string | undefined;
}

/** What each live caret position reports as. A node boundary is two caret positions at one
 * document position. */
function $reported(context: SettledPositionContext): PositionReport[] {
  const prepared = $prepareSettleScopes(context);
  return $caretPositions().map(({ node, offset, position }) => {
    const location = $settledLocationFromLivePoint(prepared, node, offset);
    return { position, location: location && JSON.stringify(location) };
  });
}

/** Whether the document text between positions `a` and `b`, in either order, is whitespace only
 * (no byte at all included) — the bytes a landing may cross, as `$leftmostReporting` does. */
function isWhitespaceBetween(text: string, a: number, b: number): boolean {
  return /^[\s\u00A0\u200B]*$/.test(text.slice(Math.min(a, b), Math.max(a, b)));
}

/**
 * Where each pending caret position's report goes back to — the translation `setSelection` and
 * `setAnnotation` both run, resolved as `setSelection` resolves it — as a list of failures.
 * The landing must be the position itself — either caret at it, where it is a node boundary — or
 * report the same location, so `getSelection()` after `setSelection()` hands the host back what it
 * gave, from:
 *
 * - a position across whitespace only, on either side (several live positions are one settled
 *   position where whitespace the settle drops was typed);
 * - or, for a position that reports a location to its LEFT, the closest position to its left that
 *   reports it: every position from the landing up to the one the report came from reports it.
 *
 * A position the live document has no location for — bytes typed into a glyph — cannot be landed
 * on at all, so a report may land on the closest position the live document can spell at or to the
 * left of the place it names (where the run of positions reporting it starts), whatever that
 * reports.
 */
function $roundTripFailures(context: SettledPositionContext, view: ViewOptions): string[] {
  const prepared = $prepareSettleScopes(context);
  const positions = $caretPositions();
  const text = $documentText();
  const reports = positions.map(({ node, offset }) => {
    const location = $settledLocationFromLivePoint(prepared, node, offset);
    return location && JSON.stringify(location);
  });
  // Whether the live document's own location model can spell each caret position: its location
  // resolves back to the same position. A host's position can only be handed back onto one.
  const representable = positions.map(({ node, offset, position }) => {
    const [resolved, at] = $getNodeFromLocation($getLocationFromNode(node, offset, view), view);
    if (!resolved || at === undefined) return false;
    const found = positions.find(
      (candidate) => candidate.node.is(resolved) && candidate.offset === at,
    );
    return found?.position === position;
  });
  const indexOf = (key: NodeKey, offset: number): number =>
    positions.findIndex(
      (candidate) => candidate.node.getKey() === key && candidate.offset === offset,
    );
  const failures: string[] = [];
  positions.forEach(({ node, offset, position }, index) => {
    const reported: UsjDocumentLocation | undefined = $settledLocationFromLivePoint(
      prepared,
      node,
      offset,
    );
    if (!reported) return;
    const wanted = reports[index];
    const live = $liveSelectionFromSettled(context, prepared, { start: reported });
    const anchor = live && $getRangeFromUsjSelection(live, view)?.anchor;
    const landedIndex = anchor ? indexOf(anchor.key, anchor.offset) : -1;
    const landed = landedIndex < 0 ? undefined : positions[landedIndex].position;
    // Where the run of positions reporting the same location up to this one starts: the place
    // the report names, when this position reports a location to its left.
    let first = index;
    while (first > 0 && reports[first - 1] === wanted) first -= 1;
    const named = positions[first].position;
    const isFaithful =
      landed !== undefined &&
      (landed === position ||
        (reports[landedIndex] === wanted &&
          (isWhitespaceBetween(text, landed, position) ||
            (landedIndex < index &&
              reports.slice(landedIndex, index + 1).every((report) => report === wanted)))) ||
        (landed <= named &&
          !positions.some(
            (candidate, at) =>
              representable[at] && candidate.position > landed && candidate.position <= named,
          )));
    if (!isFaithful)
      failures.push(
        `${position} -> ${wanted} -> ${landed ?? "nothing"}` +
          (landed === undefined || reports[landedIndex] === wanted
            ? ""
            : ` reporting ${reports[landedIndex]}`),
      );
  });
  return failures;
}

/** The length of the longest common prefix of `a` and `b`. */
function commonPrefix(a: string, b: string): number {
  let length = 0;
  while (length < a.length && length < b.length && a[length] === b[length]) length += 1;
  return length;
}

/**
 * The caret positions whose pending report is not where the same bytes report after the settle.
 * Each caret position is compared at the same bytes after the settle — the bytes both documents'
 * texts start or end with, which the settle left in place — and its pending report must be one of
 * the locations the settled caret positions there report (exact), or, only where the settled
 * document reports nothing there, one the closest position to their left that reports anything
 * reports (the closest representable location to the left).
 */
function positionsReportedAwayFromTheirBytes(
  before: { text: string; reported: PositionReport[] },
  after: { text: string; reported: PositionReport[] },
): string[] {
  const prefix = commonPrefix(before.text, after.text);
  const suffix = Math.min(
    commonPrefix([...before.text].reverse().join(""), [...after.text].reverse().join("")),
    before.text.length - prefix,
    after.text.length - prefix,
  );
  const settledAt = (position: number): (string | undefined)[] =>
    after.reported
      .filter((report) => report.position === position)
      .map((report) => report.location);
  const failures: string[] = [];
  for (const { position, location } of before.reported) {
    // Both bytes beside the position must be ones the settle left in place.
    const settledPosition =
      position < prefix
        ? position
        : position > before.text.length - suffix
          ? position - before.text.length + after.text.length
          : undefined;
    if (settledPosition === undefined) continue;
    const there = settledAt(settledPosition);
    if (there.includes(location)) continue;
    if (there.every((report) => report === undefined)) {
      const left = after.reported
        .filter((report) => report.position < settledPosition && report.location !== undefined)
        .at(-1);
      if (left && settledAt(left.position).includes(location)) continue;
    }
    failures.push(`${position}: pending ${location}, settled ${there.join(" | ")}`);
  }
  return failures;
}

/** The USFM a writer emits for `item`, the way the screen spells it: a marker and its separator,
 * its attribute text in canonical display form, its closer. */
function usfmOf(item: MarkerContent, nested = false): string {
  if (typeof item === "string") return item;
  const { type, marker = "", content = [], closed, ...fields } = item;
  const attributes = Object.fromEntries(
    Object.entries(fields).filter(
      (entry): entry is [string, string] => typeof entry[1] === "string",
    ),
  );
  const inner = (isNested: boolean) => content.map((child) => usfmOf(child, isNested)).join("");
  const closer = (spelled: string) => (closed === "false" ? "" : spelled);
  switch (type) {
    case "unmatched":
      return `\\${marker}`;
    case "optbreak":
      return "//";
    case "para":
      return `\\${marker} ${inner(false)}`;
    case "chapter":
      return (
        `\\c ${item.number ?? ""} ` +
        (item.altnumber !== undefined ? `\\ca ${item.altnumber}\\ca* ` : "") +
        (item.pubnumber !== undefined ? `\\cp ${item.pubnumber} ` : "")
      );
    case "verse":
      return (
        `\\v ${item.number ?? ""} ` +
        (item.altnumber !== undefined ? `\\va ${item.altnumber}\\va* ` : "") +
        (item.pubnumber !== undefined ? `\\vp ${item.pubnumber}\\vp* ` : "")
      );
    case "ms": {
      const { sid, eid, ...rest } = attributes;
      const named = {
        ...(sid !== undefined ? { sid } : {}),
        ...(eid !== undefined ? { eid } : {}),
        ...rest,
      };
      return `\\${marker}${canonicalAttributeText(named, undefined)}\\*`;
    }
    case "note":
      return (
        `\\${marker} ${item.caller ?? ""} ` +
        (item.category !== undefined ? `\\cat ${item.category}\\cat* ` : "") +
        `${inner(false)}${closer(`\\${marker}*`)}`
      );
    case "char": {
      const plus = nested ? "+" : "";
      const attributeText = canonicalAttributeText(attributes, defaultMarkerAttribute(marker));
      return `\\${plus}${marker} ${inner(true)}${attributeText}${closer(`\\${plus}${marker}*`)}`;
    }
    default:
      return JSON.stringify(item);
  }
}

/** The bytes that are not whitespace. Where a settle may place or drop whitespace a USFM reader
 * treats as structural is a matter of spelling; a byte that is not whitespace is on the screen
 * and in the file, or the two disagree. */
function asUsfmBytes(text: string): string {
  return text.replace(/[\s\u00A0\u200B]+/g, "");
}

/** The settled document's chapter and edited blocks — everything but the book line and the
 * paragraph the caret departs to — as the screen shows them and as the file gets them; `undefined`
 * when the screen hides bytes the file has (a collapsed note's caller and content). */
function $screenAndSaved(usj: Usj | undefined): { screen: string; saved: string } | undefined {
  const blocks = $getRoot().getChildren().slice(1, -1);
  const hidesBytes = (node: LexicalNode): boolean =>
    ($isNoteNode(node) && node.getIsCollapsed()) ||
    ($isElementNode(node) && node.getChildren().some(hidesBytes));
  if (blocks.some(hidesBytes) || !usj) return undefined;
  return {
    screen: asUsfmBytes(blocks.map((block) => block.getTextContent()).join("")),
    saved: asUsfmBytes(
      usj.content
        .slice(1, -1)
        .map((item) => usfmOf(item))
        .join(""),
    ),
  };
}

/** The edited paragraph of `usj`, spelled compactly for a failure message. */
function bodyOf(usj: Usj | undefined): string {
  return JSON.stringify(usj?.content.slice(2, -1));
}

/** Rewrite each view's expected-failures list from this run instead of comparing with it. */
const WRITE = process.env.PENDING_SETTLED_ORACLE_WRITE === "1";
/** Print every failing case's detail, listed or not, with the document text before and after. */
const DUMP = process.env.PENDING_SETTLED_ORACLE_DUMP === "1";

/** A view's expected-failures list: per row, the keystroke cases known to fail, by label, each
 * with the reason it is left failing. */
interface ExpectedFailures {
  [row: string]: { [label: string]: string };
}

function readExpectedFailures(listFile: URL): ExpectedFailures {
  if (!existsSync(listFile)) return {};
  const listed: ExpectedFailures = JSON.parse(readFileSync(listFile, "utf8"));
  return listed;
}

/**
 * Register the oracle's rows for `view` (an `ORACLE_VIEWS` name), compared with the cases
 * `listFile` lists as known to fail: a failure the list does not name fails its row, and so does a
 * listed case that no longer fails, so the list only shrinks. Each listed case names the reason
 * it is left failing. `PENDING_SETTLED_ORACLE_WRITE=1` rewrites the list from the run instead,
 * keeping the reasons of the cases still listed.
 */
export function describePendingSettledOracle(view: string, listFile: URL): void {
  const rows = CORPUS.map(({ name, usj }) => [`${name} (${view} view)`, usj] as const);
  const listed = readExpectedFailures(listFile);
  const written: ExpectedFailures = {};
  afterAll(() => {
    if (WRITE) writeFileSync(listFile, `${JSON.stringify(written, null, 2)}\n`);
  });

  describe(`pending getUsj() equals the settled document, for every single keystroke (${view} view)`, () => {
    it.each(rows)(
      "%s",
      async (row, usj) => {
        const probe = await mountInView(usj, oracleView(view));
        const sites = probe.lexical.getEditorState().read($editSites);
        probe.unmount();

        const mismatches = new Map<string, string>();
        let pendingCases = 0;
        for (const { index, offset } of sites)
          for (const keystroke of KEYSTROKES) {
            const mounted = await mountInView(usj, oracleView(view));
            let label = "";
            let applied = false;
            await act(async () => {
              mounted.lexical.update(() => {
                const node = $editableTexts()[index];
                const text = node.getTextContent();
                label = `${node.getType()} ${JSON.stringify(text.replaceAll(NBSP, "~"))}@${offset} ${keystroke.name}`;
                const result = keystroke.apply(text, offset);
                if (!result) return;
                applied = true;
                node.setTextContent(result.text);
                node.select(result.caret, result.caret);
              });
              await Promise.resolve();
              await Promise.resolve();
            });
            if (!applied) {
              mounted.unmount();
              continue;
            }
            const isPending = (getPendedDisplayOwners(mounted.lexical)?.size ?? 0) > 0;
            if (isPending) pendingCases += 1;
            const pending = mounted.ref.current?.getUsj();
            const viewOptions = oracleView(view);
            const pendingContext = positionContext(mounted.lexical, viewOptions);
            const before = mounted.lexical.getEditorState().read(() => ({
              text: $documentText(),
              reported: $reported(pendingContext),
              roundTrip: $roundTripFailures(pendingContext, viewOptions),
            }));
            await depart(mounted);
            const settled = mounted.ref.current?.getUsj();
            if (JSON.stringify(pending) !== JSON.stringify(settled))
              mismatches.set(
                label,
                `${label}\n    pending ${bodyOf(pending)}\n    settled ${bodyOf(settled)}`,
              );
            // What the screen shows is what the file gets.
            const shown = mounted.lexical.getEditorState().read(() => $screenAndSaved(settled));
            if (shown && shown.screen !== shown.saved)
              mismatches.set(
                `${label} [screen]`,
                `${label} [screen]\n    screen ${JSON.stringify(shown.screen)}\n    saved  ${JSON.stringify(shown.saved)}`,
              );
            const settledContext = positionContext(mounted.lexical, viewOptions);
            const after = mounted.lexical.getEditorState().read(() => ({
              text: $documentText(),
              reported: $reported(settledContext),
            }));
            const moved = isPending ? positionsReportedAwayFromTheirBytes(before, after) : [];
            const roundTrip = isPending ? before.roundTrip : [];
            if (moved.length > 0 || roundTrip.length > 0)
              mismatches.set(
                `${label} [positions]`,
                `${label} [positions]\n    ${[...moved, ...roundTrip].join("\n    ")}`,
              );
            if (DUMP)
              for (const key of [label, `${label} [screen]`, `${label} [positions]`])
                if (mismatches.has(key))
                  // eslint-disable-next-line no-console -- PENDING_SETTLED_ORACLE_DUMP asks for this output.
                  console.info(
                    `DUMP ${row} :: ${mismatches.get(key)}\n    before ${JSON.stringify(before.text)}\n    after  ${JSON.stringify(after.text)}`,
                  );
            mounted.unmount();
          }

        expect(pendingCases, "no keystroke left an edit pending").toBeGreaterThan(0);
        const reasons = listed[row] ?? {};
        if (WRITE) {
          // A case still failing keeps the reason it was listed with; a new one is listed without
          // one, which the comparison below rejects until it is given one.
          if (mismatches.size > 0)
            written[row] = Object.fromEntries(
              [...mismatches.keys()].sort().map((label) => [label, reasons[label] ?? ""]),
            );
          return;
        }
        const known = new Set(Object.keys(reasons));
        expect(
          [...mismatches].filter(([label]) => !known.has(label)).map(([, detail]) => detail),
        ).toEqual([]);
        expect(
          [...known].filter((label) => !mismatches.has(label)),
          "listed as failing but passing — rewrite the list",
        ).toEqual([]);
        expect(
          [...known].filter((label) => !reasons[label]),
          "listed without the reason it is left failing",
        ).toEqual([]);
      },
      300_000,
    );
  });
}
