/**
 * A generated oracle for the pending-equals-settled contract: `getUsj()` read while an edit is
 * pending must equal `getUsj()` after that edit settles. The hand-picked suites
 * (`settledGetUsj.test.tsx`, `settleDifferential.test.tsx`) pin chosen shapes; this one enumerates
 * single keystrokes instead, so a shape nobody thought to list is covered by construction.
 *
 * For each document in a small corpus of paragraph, char span (plain, nested, with attributes,
 * beside a chapter), note, verse and milestone shapes, in each view, every editable text node of
 * the edited block is visited at every offset of a glyph-like node (marker glyphs, verse glyphs,
 * attribute runs) and at the first and last two offsets of plain text — the positions around
 * marker glyphs and separators. At each, one keystroke is applied to the bytes at that node: a
 * name character, a space, `*`, `\`, `|`, the removal of the character before (Backspace) or after
 * (Delete) it, or — once per node — `x` typed over the node's whole text (a caller, a glyph, a word
 * selected and replaced) — and, as the delete-then-type gesture, Backspace or Delete followed by
 * `x` typed at the caret it leaves.
 * Typing is a direct splice into the node rather than `insertText`, so both nodes on either side
 * of a boundary are exercised: the editor can resolve a caret at a glyph's end to the end of the
 * glyph or to the start of the next text, and the two must settle alike. At every node boundary
 * each character is also typed the way a click and a keystroke arrive — the caret placed in one
 * update, `insertText` in the next — so the caret is wherever the selection listeners leave it.
 *
 * In the footnote popover's view, whose note shell is `token` glyphs a user cannot splice, each
 * glyph is also visited at its two ends: a character typed with the caret placed there, and
 * Backspace or Delete removing the glyph's character the way Lexical removes a `token` node, whole.
 * Every caret there is placed with a selection change announced, which the shell's caret guard
 * answers; a place it does not let a caret rest (beside or past the note's shell) is not edited.
 * Each caret in the note's content is also extended into a range the keyboard makes (Shift with an
 * arrow, Home or End, and select-all) and the range typed over or removed. And since the popover
 * saves only its note, a keystroke made in the note must leave everything outside it as loaded.
 * And the delete-then-type gesture is also typed as two history entries and followed by leaving and
 * then Undo (or Undo, Undo and Redo), which brings back the document between the two keystrokes
 * without running a single transform; that document is then held to the same contract.
 *
 * The settle is the departure an abandoned edit gets: a click into another paragraph, blur, and
 * `commitPendingMarkerEdits()`.
 *
 * After the settle, the screen must show what the file gets: the settled blocks' text, and the USFM
 * the settled document writes, carry the same bytes, whitespace included, once only what a USFM
 * reader itself reads as the same is made the same (`asUsfmBytes`: a run of spaces is one, the
 * separator after a marker is structure). Blocks showing a collapsed note, whose caller and
 * content the screen does not show, are not compared. The settle must also only respell what the
 * screen showed while the edit was pending — supply a `\p`, nest or un-nest, normalize attributes,
 * rename a closer with its opener, supply a caller (`unrespelledChange`) — so a typed byte it drops
 * from the screen and the file alike still fails; in a view that shows a typed whitespace run as
 * typed (standard view), the two screens are compared with their runs kept, so a dropped space is
 * one of those bytes. And the same character typed at the same place on screen, in whichever node
 * a caret there is spelled in, saves the same file.
 *
 * Positions are held to the same contract while the edit is pending. Every caret position, node
 * boundaries included, reports (`getSelection()`'s translation) a location the same bytes report
 * after the settle — exactly, or, where the settled document reports nothing there, the closest
 * location to their left. And every report, handed back the way `setSelection` and `setAnnotation`
 * hand a host's location in, lands on the position it came from, on one across whitespace only that
 * reports the same, or on the closest position to its left the report names — never across a byte
 * to its right that the settled document has.
 *
 * One test file per view registers the oracle for that view
 * (`pendingSettledOracle.<view>.test.tsx`), so the views run in parallel.
 */
import { mountInView, oracleView } from "../annotationLocations/annotationLocations.test-helpers";
import { $textContaining, twoParaUsj } from "../positions/positions.test-helpers";
import { $prepareSettleScopes } from "../positions/settledScopes.utils";
import { $anchorForPoint } from "./tier2Rebuild.utils";
import {
  $liveSelectionFromSettled,
  $settledLocationFromLivePoint,
} from "../positions/settledPositions.utils";
import { SettledPositionContext } from "../positions/settledPositions.model";
import { MarkerContent, Usj, UsjDocumentLocation } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $getSelection,
  $getState,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  CLICK_COMMAND,
  HISTORY_PUSH_TAG,
  LexicalEditor,
  LexicalNode,
  NodeKey,
  REDO_COMMAND,
  SELECT_ALL_COMMAND,
  SELECTION_CHANGE_COMMAND,
  TextNode,
  UNDO_COMMAND,
} from "lexical";
import {
  $isCharNode,
  $isMarkerNode,
  $isNoteNode,
  $isVerseNode,
  createMarkerLookup,
  defaultStyleInfo,
  canonicalAttributeText,
  defaultMarkerAttribute,
  getPendedDisplayOwners,
  leadingAttributeNames,
  isMilestoneHeuristicName,
  MarkerType,
  NBSP,
  NoteNode,
  textTypeState,
  TypedMarkNode,
} from "shared";
import {
  $getLocationFromNode,
  $getNodeFromLocation,
  $getRangeFromUsjSelection,
  hasStandardViewWhitespace,
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
    name: "char span right after a verse",
    usj: twoParaUsj([
      { type: "verse", marker: "v", number: "1" },
      { type: "char", marker: "w", content: ["grace"] },
      " b",
    ]),
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

/**
 * The view the footnote popover edits its note in: the host's editable view with notes expanded,
 * and the note's marker, caller and closer governed by the popover's own controls rather than
 * typed (`isNoteShellEditable: false`), so they are `token` glyphs the caret steps around.
 */
export const PROTECTED_NOTE_SHELL_VIEW = "standard+protectedNoteShell";

/** The documents the oracle edits in {@link PROTECTED_NOTE_SHELL_VIEW}: only a note has a shell
 * to protect, so only the note rows — the corpus's, and one whose content span runs on to the
 * note's closer, as ParatextData writes footnote text. */
const PROTECTED_NOTE_SHELL_CORPUS: { name: string; usj: Usj }[] = [
  ...CORPUS.filter(({ name }) => name === "note"),
  {
    name: "note whose content span runs to its closer",
    usj: twoParaUsj([
      "a",
      {
        type: "note",
        marker: "f",
        caller: "+",
        content: [{ type: "char", marker: "ft", closed: "false", content: ["note text"] }],
      },
      " b",
    ]),
  },
];

/** The view options the oracle runs `view` in: an `ORACLE_VIEWS` name, or
 * {@link PROTECTED_NOTE_SHELL_VIEW}. */
function pendingOracleView(view: string): ViewOptions {
  if (view !== PROTECTED_NOTE_SHELL_VIEW) return oracleView(view);
  return { ...oracleView("standard+expandedNotes"), isNoteShellEditable: false };
}

/** One keystroke at a node offset: the new text and where the caret ends up, or `undefined` when
 * the keystroke does nothing there. */
type Keystroke = (text: string, offset: number) => { text: string; caret: number } | undefined;

/** The characters the oracle types. */
const TYPED = ["x", " ", "*", "\\", "|"];

/**
 * Keystrokes typed the way a user's click and keystroke arrive: the caret placed at a node
 * boundary in one update, the character inserted at the selection in the next. Between the two,
 * selection listeners may move the caret to the other node at that boundary (the end of a glyph
 * rather than the start of the text after it), so this reaches the node a splice does not.
 */
const PLACED_KEYSTROKES: { name: string; character: string }[] = TYPED.map((character) => ({
  name: `place the caret, then type ${JSON.stringify(character)}`,
  character,
}));

/** Backspace: the character before the offset removed. */
const backspace: Keystroke = (text, offset) =>
  offset === 0
    ? undefined
    : { text: text.slice(0, offset - 1) + text.slice(offset), caret: offset - 1 };

/** Delete: the character after the offset removed. */
const deleteForward: Keystroke = (text, offset) =>
  offset >= text.length
    ? undefined
    : { text: text.slice(0, offset) + text.slice(offset + 1), caret: offset };

/**
 * One keystroke at a node offset, as {@link Keystroke}; `typed` is the character it types, and
 * `then` a character typed next at the caret it leaves (`insertText`, in an update of its own) —
 * the delete-then-type gesture, which reaches what a deletion leaves waiting for the next key (a
 * note's caller retyped after being deleted).
 */
interface KeystrokeCase {
  name: string;
  apply: Keystroke;
  typed?: string;
  then?: string;
  /** After `then`, typed as an edit of its own, the caret leaves (a settle) and these history
   * commands run, in order: the document then is one undo or redo brought back. */
  history?: ("undo" | "redo")[];
}

const KEYSTROKES: KeystrokeCase[] = [
  ...TYPED.map((character) => ({
    name: `type ${JSON.stringify(character)}`,
    typed: character,
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
  { name: "Backspace", apply: backspace },
  { name: "Delete", apply: deleteForward },
  { name: 'Backspace, then type "x"', apply: backspace, then: "x" },
  { name: 'Delete, then type "x"', apply: deleteForward, then: "x" },
  {
    // Undo after leaving brings back the state between the two keystrokes — the one a deletion
    // leaves waiting for the next key — which no transform has seen since.
    name: 'Backspace, then type "x", leave, then Undo',
    apply: backspace,
    then: "x",
    history: ["undo"],
  },
  {
    name: 'Backspace, then type "x", leave, then Undo, Undo and Redo',
    apply: backspace,
    then: "x",
    history: ["undo", "undo", "redo"],
  },
  {
    name: 'Delete, then type "x", leave, then Undo',
    apply: deleteForward,
    then: "x",
    history: ["undo"],
  },
];

/**
 * The keystrokes at a protected note shell's glyphs (`token` nodes), which a user cannot splice:
 * a character typed with the caret placed at either end of one — the selection change announced,
 * so the shell's caret guard moves a caret it does not allow there — and Backspace at its end or
 * Delete at its front, which Lexical's `deleteCharacter` turns into removing a one-character range
 * reaching into the glyph (the native selection's `modify`, which jsdom lacks, is what extends it).
 */
type ShellKeystroke =
  | { name: string; character: string }
  | { name: string; deletes: "before" | "after" };

const SHELL_KEYSTROKES: ShellKeystroke[] = [
  ...PLACED_KEYSTROKES,
  { name: "Backspace at its end", deletes: "before" },
  { name: "Delete at its front", deletes: "after" },
];

/**
 * A range made from a caret in a note's content the way the keyboard makes one — Shift with Left
 * or Right (one caret position), Home or End (the paragraph's edge), or select-all — announced as
 * a selection change, then typed over with `x` or removed (Backspace), as edits of their own. Run
 * in the popover's view, whose shell guard keeps such a range to the note's content.
 */
interface RangeKeystroke {
  name: string;
  extend: "left" | "right" | "home" | "end" | "all";
  edit: "x" | "";
}

const RANGE_KEYSTROKES: RangeKeystroke[] = (
  [
    ["Shift+Left", "left"],
    ["Shift+Right", "right"],
    ["Shift+Home", "home"],
    ["Shift+End", "end"],
    ["select-all", "all"],
  ] as const
).flatMap(([gesture, extend]) => [
  { name: `${gesture}, then type "x"`, extend, edit: "x" as const },
  { name: `${gesture}, then Backspace`, extend, edit: "" as const },
]);

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

/** A place the oracle edits: a node of {@link $editableTexts} (or, for `shell`, of
 * {@link $shellTexts}) by index, and an offset in it. */
interface EditSite {
  index: number;
  offset: number;
  shell?: boolean;
}

/** Every place the oracle edits in the first body paragraph. */
function $editSites(): EditSite[] {
  const sites: EditSite[] = [];
  $shellTexts().forEach((node, index) =>
    [...new Set([0, node.getTextContentSize()])].forEach((offset) =>
      sites.push({ index, offset, shell: true }),
    ),
  );
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

/** The glyphs of every protected note shell in the first body paragraph — the `token` text an
 * expanded note's opener, caller and closer are built as when the host governs them — in document
 * order. */
function $shellTexts(): TextNode[] {
  const para = $getRoot().getChildren()[2];
  const out: TextNode[] = [];
  const visit = (node: LexicalNode): void => {
    if ($isNoteNode(node) && !node.getIsCollapsed())
      node.getChildren().forEach((child) => {
        if ($isTextNode(child) && child.getMode() === "token") out.push(child);
      });
    if ($isElementNode(node)) node.getChildren().forEach(visit);
  };
  if (para) visit(para);
  return out;
}

/** Click into the second paragraph, blur, and commit whatever is still pending. */
export async function depart(mounted: Mounted): Promise<void> {
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
 *   position where whitespace the settle drops was typed), or to its right across only bytes the
 *   settled document does not have (a nesting `+` the settle drops), which are one settled
 *   position too;
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
  /** Whether every byte from caret `from` to caret `to` is a nesting `+` the settled document does
   * not have — a live-only byte in the scope's byte alignment that is a known respelling — so the
   * two are one position in settled terms. Live-only bytes of any other kind are bytes the settle
   * moved or dropped, and a landing may not cross them. */
  const crossesOnlyUnsettledBytes = (from: number, to: number): boolean => {
    const crossed = text.slice(positions[from].position, positions[to].position);
    if (!/^\+$/.test(crossed) || text[positions[from].position - 1] !== "\\") return false;
    const plan = prepared.planContaining(positions[from].node);
    if (!plan || plan !== prepared.planContaining(positions[to].node)) return false;
    const { liveFragment, alignment } = plan;
    if (!liveFragment || !alignment) return false;
    const start = $anchorForPoint(liveFragment, positions[from].node, positions[from].offset);
    const end = $anchorForPoint(liveFragment, positions[to].node, positions[to].offset);
    if (!start || !end || end.anchor.nonWsBefore <= start.anchor.nonWsBefore) return false;
    for (let count = start.anchor.nonWsBefore; count < end.anchor.nonWsBefore; count += 1) {
      const segment = alignment.segments.find(
        (candidate) => candidate.liveStart <= count && count < candidate.liveEnd,
      );
      if (!segment || segment.same || segment.settledEnd > segment.settledStart) return false;
    }
    return true;
  };
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
            (landedIndex > index && crossesOnlyUnsettledBytes(index, landedIndex)) ||
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

/** A marker token: `\`, an optional `+`, a name, an optional `*`. */
const MARKER_TOKEN_REGEX = /\\\+?[\w-]*\*?/g;

/**
 * `boundary` moved off a marker token `text` has across it: to the token's start for the front end
 * of a shared stretch, to its end for the back one.
 */
function outsideMarkerToken(text: string, boundary: number, end: "front" | "back"): number {
  for (const match of text.matchAll(MARKER_TOKEN_REGEX)) {
    const start = match.index;
    const stop = start + match[0].length;
    if (start < boundary && boundary < stop) return end === "front" ? start : stop;
  }
  return boundary;
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
  // The bytes both texts start and end with. Where the changed bytes could equally be placed a
  // little further left or right (a settle inserting `\p⍽` in front of a `\` the user typed), the
  // bytes they could slide over are not known to be the same ones, so neither end claims them.
  const longestPrefix = commonPrefix(before.text, after.text);
  const longestSuffix = Math.min(
    commonPrefix([...before.text].reverse().join(""), [...after.text].reverse().join("")),
    before.text.length,
    after.text.length,
  );
  // A marker token either text has across an end is not the same bytes on both sides either: a
  // `\` the user typed reads as the first byte of a `\p` the settle supplied.
  const shorter = Math.min(before.text.length, after.text.length);
  // Only bytes added or removed outright (no byte changed in place) can slide.
  const canSlide =
    before.text.length !== after.text.length && longestPrefix + longestSuffix >= shorter;
  const sharedPrefix = canSlide ? shorter - longestSuffix : longestPrefix;
  const prefix = Math.min(
    outsideMarkerToken(before.text, sharedPrefix, "front"),
    outsideMarkerToken(after.text, sharedPrefix, "front"),
  );
  const suffix = Math.min(
    longestSuffix,
    before.text.length - longestPrefix,
    after.text.length - longestPrefix,
  );
  const shift = after.text.length - before.text.length;
  const suffixStart = Math.max(
    outsideMarkerToken(before.text, before.text.length - suffix, "back"),
    outsideMarkerToken(after.text, after.text.length - suffix, "back") - shift,
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
        : position > suffixStart
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
        (item.altnumber !== undefined ? `\\ca ${item.altnumber}\\ca*` : "") +
        (item.pubnumber !== undefined ? `\\cp ${item.pubnumber}` : "")
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
      // A node the corpus does not hold has no spelling here; guessing one would compare nothing.
      throw new Error(`usfmOf: no USFM spelling for a "${type}" node`);
  }
}

/** A marker token at a position: `\`, an optional nesting `+`, a name, an optional closing `*`. */
const MARKER_AT_REGEX = /\\(\+?)([\w-]+)(\*?)/y;

/** Whether `byte` is whitespace as USFM reads it, a no-break space included. */
function isUsfmSpace(byte: string | undefined): boolean {
  return byte !== undefined && /[\s\u00A0]/.test(byte);
}

/** Markers whose content a USFM reader folds onto an attribute of the marker before them (a
 * chapter's or verse's alternate or published number, a note's category), trimmed. */
const ATTRIBUTE_SPAN_MARKERS: ReadonlySet<string> = new Set(["ca", "va", "vp", "cat"]);

/**
 * How a marker scopes what follows it, for finding the attribute sections in a line: by its kind in
 * the stylesheet, or — for a marker the stylesheet does not know (a name being typed) — by where it
 * stands, as the tokenizer reads one: a block at the start of a line, a char span inside one.
 */
function markerScope(
  name: string,
  isLineStart: boolean,
): "block" | "note" | "char" | "milestone" | "none" {
  if (name === "v" || name === "c") return "none";
  switch (editorMarkerLookup(name)?.type) {
    case MarkerType.Paragraph:
      return "block";
    case MarkerType.Character:
      return "char";
    case MarkerType.Note:
      return "note";
    case MarkerType.Milestone:
      return "milestone";
    default:
      if (NoteNode.isValidMarker(name)) return "note";
      if (isMilestoneHeuristicName(name)) return "milestone";
      return isLineStart ? "block" : "char";
  }
}

/**
 * Bytes as USFM reads them ({@link normalizeUsfm}), with what the normalization knows about them
 * that their spelling no longer says once a marker's separator is gone.
 */
interface UsfmBytes {
  readonly text: string;
  /** Per byte: whether it is in the attribute section of a char span or a milestone — from the
   * `|` that starts it to the closer that ends that marker. */
  readonly attribute: readonly boolean[];
  /** Where each note's caller is, as `[start, end)`. */
  readonly callers: readonly (readonly [number, number])[];
  /** Where each marker that starts a line is, as `[start, end)`. */
  readonly lineMarkers: readonly (readonly [number, number])[];
}

/**
 * Bytes — as the screen shows them or as the file gets them, one line per block — as USFM reads
 * them, so the two compare byte for byte, whitespace included. Only what a USFM reader itself
 * takes as the same (ParatextData, and `usfmFragmentToUsjContent` after it) is made the same:
 *
 * - A run of whitespace is one space: the reader collapses every run (`UsfmToken.RegularizeSpaces`;
 *   `regularizeSpaces` in usfmFragmentToUsj.ts), so a file cannot hold one. A no-break space is a
 *   space here too: the view chooses which of the two it shows a space as (standard view shows a
 *   run with no-break spaces so it stays visible while typed), and a separator is a no-break
 *   space on screen and a space in the file. Data no-break spaces are held to the file by the
 *   unformatted view's own suite (unformattedContentNbsp.test.tsx).
 * - The whitespace directly after an opening marker, and after the number or caller a `\c`, `\v`
 *   or note marker takes (its leading attribute), is the separator the writer emits itself; the
 *   reader takes it as structure, and it is dropped.
 * - Whitespace ending the content of a span the reader folds onto an attribute (`\ca 3 \ca*`) is
 *   trimmed off the value, and is dropped.
 * - Whitespace at the start or end of a line is not kept by the reader either, and is dropped.
 *   The line breaks themselves are kept for the pending/settled comparison to read; where one
 *   block ends and the next begins is spelled by the next one's marker, so the screen/file
 *   comparisons set them aside ({@link withoutLineBreaks}).
 * - A zero-width space is dropped: the editor's empty-verse caret host, never a byte of the file.
 *
 * Every other byte — a space in content, in an attribute value or in a caller's slot included — is
 * compared as it is.
 *
 * `keepRuns` keeps a run of whitespace in content as long as it is (each byte a space), for
 * comparing two SCREENS of a view that shows runs as typed (standard view keeps a typed run on
 * screen while the file collapses it — the ratified exception in docs/standard-view-invariants.md
 * §4): there a settle that drops a typed space from the screen is losing a byte, which a collapsed
 * comparison cannot see. A separator run is still dropped whole: how much of the whitespace after
 * a marker a screen shows as its separator is the view's choice, and moves with a settle that
 * changes what reads as a marker.
 */
function normalizeUsfm(text: string, keepRuns = false): UsfmBytes {
  const out: string[] = [];
  const attribute: boolean[] = [];
  const callers: [number, number][] = [];
  const lineMarkers: [number, number][] = [];
  // The markers open at this point of the line, innermost last.
  let open: { name: string; scope: ReturnType<typeof markerScope> }[] = [];
  // Where the attribute section being read starts, while one is.
  let section: number | undefined;
  const append = (byte: string): void => {
    out.push(byte);
    attribute.push(section !== undefined);
  };
  const trimEnd = (): void => {
    while (out.at(-1) === " ") {
      out.pop();
      attribute.pop();
    }
  };
  /** End the attribute section being read: it is one only when a closer ends it. */
  const endSection = (byCloser: boolean): void => {
    if (section !== undefined && !byCloser)
      for (let at = section; at < attribute.length; at += 1) attribute[at] = false;
    section = undefined;
  };
  let at = 0;
  const skipSeparator = (): void => {
    while (text[at] !== "\n" && isUsfmSpace(text[at])) at += 1;
  };
  while (at < text.length) {
    MARKER_AT_REGEX.lastIndex = at;
    const marker = text[at] === "\\" ? MARKER_AT_REGEX.exec(text) : null;
    if (!marker) {
      const byte = text[at];
      at += 1;
      if (byte === "\n") {
        endSection(false);
        open = [];
        trimEnd();
        if (out.length > 0 && out.at(-1) !== "\n") append(byte);
      } else if (byte === "\\" && text[at] === "*") {
        // A milestone's closer.
        endSection(true);
        if (open.at(-1)?.scope === "milestone") open.pop();
        append(byte);
      } else if (byte === "|") {
        const scope = open.at(-1)?.scope;
        if (section === undefined && (scope === "char" || scope === "milestone"))
          section = out.length;
        append(byte);
      } else if (isUsfmSpace(byte)) {
        if (out.length > 0 && out.at(-1) !== "\n" && (keepRuns || out.at(-1) !== " ")) append(" ");
      } else if (byte !== "\u200B") append(byte);
      continue;
    }
    const [token, , name, closing] = marker;
    endSection(!!closing);
    if (closing && ATTRIBUTE_SPAN_MARKERS.has(name)) trimEnd();
    const start = out.length;
    for (const byte of token) append(byte);
    if (start === 0 || out[start - 1] === "\n") lineMarkers.push([start, out.length]);
    at += token.length;
    if (closing) {
      const opener = open.map((entry) => entry.name).lastIndexOf(name);
      open = opener >= 0 ? open.slice(0, opener) : open.slice(0, -1);
      continue;
    }
    const scope = markerScope(name, start === 0 || out[start - 1] === "\n");
    if (scope === "block") open = [];
    else if (scope !== "none") open.push({ name, scope });
    skipSeparator();
    const leading = leadingAttributeNames(name);
    if (!leading) continue;
    const valueStart = out.length;
    while (at < text.length && !isUsfmSpace(text[at]) && text[at] !== "\\") {
      append(text[at]);
      at += 1;
    }
    if (leading.includes("caller")) callers.push([valueStart, out.length]);
    skipSeparator();
  }
  endSection(false);
  trimEnd();
  while (out.at(-1) === "\n") {
    out.pop();
    attribute.pop();
    trimEnd();
  }
  return { text: out.join(""), attribute, callers, lineMarkers };
}

/** {@link normalizeUsfm}'s bytes alone, every whitespace run collapsed as the reader does. */
function asUsfmBytes(text: string): string {
  return normalizeUsfm(text).text;
}

/** A marker token anywhere: `\`, an optional nesting `+`, a name (possibly empty), an optional
 * closing `*`. */
const MARKER_TOKEN_ANYWHERE_REGEX = /\\\+?[\w-]*\*?/g;

/**
 * Whether the byte at `index` of normalized screen lines is one a settle may respell rather than
 * one the user typed:
 *
 * - a line break (the settle splits or joins blocks);
 * - a nesting `+` (the settle nests or un-nests a span);
 * - a byte of a char span's or a milestone's attribute section (the settle normalizes it);
 * - a byte of a closer's name (a closer renamed with its opener);
 * - on the settled side, whitespace right after a marker token (the separator the settle writes
 *   after what now reads as a marker);
 * - on the pending side, whitespace the settle turned into a line break (`atLineBreak`: a block
 *   starts there now, and a line keeps no whitespace at its edge).
 */
function isRespelledByte(
  bytes: UsfmBytes,
  index: number,
  side: "pending" | "settled",
  atLineBreak: boolean,
): boolean {
  const { text } = bytes;
  const byte = text[index];
  if (byte === "\n") return true;
  if (byte === "+" && text[index - 1] === "\\") return true;
  if (byte === " ") {
    if (side === "pending") return atLineBreak;
    return /\\\+?[\w-]*$/.test(text.slice(0, index));
  }
  if (bytes.attribute[index]) return true;
  for (const match of text.matchAll(MARKER_TOKEN_ANYWHERE_REGEX)) {
    const start = match.index;
    const end = start + match[0].length;
    if (index >= start && index < end)
      return match[0].endsWith("*") && index > start && index < end - 1;
  }
  return false;
}

/** A longest common subsequence of `a` and `b`, as the index of `b` each byte of `a` is matched
 * with, or -1 for a byte of `a` it leaves out. */
function matchedIndexes(a: string, b: string): Int32Array {
  const rows = Array.from({ length: a.length + 1 }, () => new Uint16Array(b.length + 1));
  for (let i = a.length - 1; i >= 0; i -= 1)
    for (let j = b.length - 1; j >= 0; j -= 1)
      rows[i][j] =
        a[i] === b[j] ? rows[i + 1][j + 1] + 1 : Math.max(rows[i + 1][j], rows[i][j + 1]);
  const match = new Int32Array(a.length).fill(-1);
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      match[i] = j;
      i += 1;
      j += 1;
    } else if (rows[i + 1][j] >= rows[i][j + 1]) i += 1;
    else j += 1;
  }
  return match;
}

/** The bytes the settle lost and gained, beyond respelling ({@link isRespelledByte}), with a byte
 * that only moved counted on neither side; `undefined` when there are none. */
function unrespelledBytes(pending: UsfmBytes, settled: UsfmBytes): string | undefined {
  const match = matchedIndexes(pending.text, settled.text);
  const matchedInSettled = new Set(match);
  const lost: string[] = [];
  for (let index = 0; index < pending.text.length; index += 1) {
    if (match[index] >= 0) continue;
    // Where the byte would sit in the settled lines: in front of the next byte that is kept.
    let next = index + 1;
    while (next < pending.text.length && match[next] < 0) next += 1;
    const at = next < pending.text.length ? match[next] : settled.text.length;
    if (!isRespelledByte(pending, index, "pending", settled.text[at - 1] === "\n"))
      lost.push(pending.text[index]);
  }
  const gained: string[] = [];
  for (let index = 0; index < settled.text.length; index += 1)
    if (!matchedInSettled.has(index) && !isRespelledByte(settled, index, "settled", false))
      gained.push(settled.text[index]);
  const unmatched = lost.filter((byte) => {
    const at = gained.indexOf(byte);
    if (at < 0) return true;
    gained.splice(at, 1);
    return false;
  });
  if (unmatched.length === 0 && gained.length === 0) return undefined;
  return `lost ${JSON.stringify(unmatched.join(""))}, gained ${JSON.stringify(gained.join(""))}`;
}

/** `bytes` with the `[start, end)` ranges taken out, what is known of each byte kept with it. */
function withoutRanges(
  bytes: UsfmBytes,
  ranges: readonly (readonly [number, number])[],
): UsfmBytes {
  const dropped = (index: number): boolean =>
    ranges.some(([start, end]) => index >= start && index < end);
  const kept = [...bytes.text].map((_, index) => index).filter((index) => !dropped(index));
  return {
    text: kept.map((index) => bytes.text[index]).join(""),
    attribute: kept.map((index) => bytes.attribute[index]),
    callers: [],
    lineMarkers: [],
  };
}

/**
 * How the settle changed what the screen shows, beyond respelling it: the bytes the pending screen
 * showed that the settled one lost, and the ones it gained ({@link unrespelledBytes}) — or
 * `undefined` when the settle only respelled. Two more respellings supply bytes a reader needs
 * and the screen lacked, so the comparison is also tried with each, and each pair, taken back out
 * of the settled lines: a marker supplied at the start of a line (the `\p` that opens a paragraph
 * for bytes typed in front of one), and a note's caller supplied where the screen showed none (a
 * caller deleted and not retyped is put back; a note whose bytes give no caller gets `+`) — each
 * exactly the bytes the normalization read as that marker or that caller. A typed byte the settle
 * drops from the screen and the file alike is invisible to the screen-equals-file check; this is
 * what sees it.
 */
function unrespelledChange(pending: UsfmBytes, settled: UsfmBytes): string | undefined {
  const change = unrespelledBytes(pending, settled);
  if (!change) return undefined;
  const supplied = [...settled.lineMarkers, ...settled.callers];
  // Either respelling alone, or both together (a `\p` and a caller supplied for one note).
  const combinations = supplied.flatMap((first, index) => [
    [first],
    ...supplied
      .slice(index + 1)
      .filter((second) => second[0] >= first[1] || second[1] <= first[0])
      .map((second) => [first, second]),
  ]);
  return combinations.some((ranges) => !unrespelledBytes(pending, withoutRanges(settled, ranges)))
    ? undefined
    : change;
}

/** Normalized lines as one string: where blocks break is spelled by their markers. */
export function withoutLineBreaks(lines: string): string {
  return lines.replaceAll("\n", "");
}

/** The settled document's chapter and edited blocks — everything but the book line and the
 * paragraph the caret departs to — as the file gets them, one normalized line per block. */
export function savedBytes(usj: Usj | undefined): string {
  const lines = (usj?.content ?? [])
    .slice(1, -1)
    .map((item) => (isBlockItem(item) ? "\n" : "") + usfmOf(item))
    .join("");
  return asUsfmBytes(lines);
}

/** Whether `item` starts a line of its own in USFM — a block, not inline content beside one. */
function isBlockItem(item: MarkerContent): boolean {
  return typeof item === "object" && ["para", "chapter", "book"].includes(item.type);
}

/** The bytes `node` shows: its text nodes' text, in document order. (`getTextContent` would add a
 * line break around every block-level element inside it.) */
function $bytesOf(node: LexicalNode): string {
  return $isElementNode(node)
    ? node
        .getAllTextNodes()
        .map((text) => text.getTextContent())
        .join("")
    : node.getTextContent();
}

/** Whether root child `node` is a block — a line of its own in USFM — rather than inline content
 * beside one (a `\ca` span beside its chapter). */
function $isBlockNode(node: LexicalNode): boolean {
  return $isElementNode(node) && !$isCharNode(node);
}

/** The same blocks as the screen shows them, one line per block, not yet normalized; `undefined`
 * when the screen hides bytes the file has (a collapsed note's caller and content). */
function $screenLines(): string | undefined {
  const blocks = $getRoot().getChildren().slice(1, -1);
  const hidesBytes = (node: LexicalNode): boolean =>
    ($isNoteNode(node) && node.getIsCollapsed()) ||
    ($isElementNode(node) && node.getChildren().some(hidesBytes));
  if (blocks.some(hidesBytes)) return undefined;
  return blocks.map((block) => ($isBlockNode(block) ? "\n" : "") + $bytesOf(block)).join("");
}

/** The same blocks as the screen shows them, one normalized line per block; `undefined` when the
 * screen hides bytes the file has (a collapsed note's caller and content). */
export function $screenBytes(): string | undefined {
  const lines = $screenLines();
  return lines === undefined ? undefined : asUsfmBytes(lines);
}

/** The edited paragraph of `usj` with its notes taken out, spelled as one string. */
function outsideNotes(usj: Usj | undefined): string {
  const para = usj?.content[2];
  const content = typeof para === "object" ? (para.content ?? []) : [];
  return JSON.stringify(content.filter((item) => typeof item !== "object" || item.type !== "note"));
}

/** Whether `node` is inside a note. */
function $hasNoteAncestor(node: LexicalNode): boolean {
  for (let parent = node.getParent(); parent; parent = parent.getParent())
    if ($isNoteNode(parent)) return true;
  return false;
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
  const corpus = view === PROTECTED_NOTE_SHELL_VIEW ? PROTECTED_NOTE_SHELL_CORPUS : CORPUS;
  const rows = corpus.map(({ name, usj }) => [`${name} (${view} view)`, usj] as const);
  const listed = readExpectedFailures(listFile);
  const written: ExpectedFailures = {};
  afterAll(() => {
    if (WRITE) writeFileSync(listFile, `${JSON.stringify(written, null, 2)}\n`);
  });

  describe(`pending getUsj() equals the settled document, for every single keystroke (${view} view)`, () => {
    it.each(rows)(
      "%s",
      async (row, usj) => {
        const probe = await mountInView(usj, pendingOracleView(view));
        const sites = probe.lexical.getEditorState().read($editSites);
        const loadedOutsideNotes = outsideNotes(probe.ref.current?.getUsj());
        probe.unmount();

        const mismatches = new Map<string, string>();
        // The first case that typed each character at each document position, and what it saved.
        const savedByPlace = new Map<string, { label: string; saved: string }>();
        let pendingCases = 0;
        for (const { index, offset, shell } of sites)
          for (const keystroke of shell
            ? SHELL_KEYSTROKES
            : [
                ...KEYSTROKES,
                ...PLACED_KEYSTROKES,
                ...(view === PROTECTED_NOTE_SHELL_VIEW ? RANGE_KEYSTROKES : []),
              ]) {
            const mounted = await mountInView(usj, pendingOracleView(view));
            let label = "";
            let applied = false;
            let place: string | undefined;
            let isInNote = false;
            // In the popover's view every caret placement is announced as a selection change, as a
            // click or an arrow press announces it, so the shell's caret guard moves a caret it
            // does not let rest there. A splice at such a place is no keystroke a user can make
            // there, and is skipped.
            const isAnnounced = view === PROTECTED_NOTE_SHELL_VIEW && !("deletes" in keystroke);
            if (isAnnounced && !("character" in keystroke)) {
              await act(async () => {
                mounted.lexical.update(() => {
                  (shell ? $shellTexts() : $editableTexts())[index].select(offset, offset);
                  mounted.lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
                });
              });
              const isReachable = mounted.lexical.getEditorState().read(() => {
                const selection = $getSelection();
                const node = (shell ? $shellTexts() : $editableTexts())[index];
                return (
                  $isRangeSelection(selection) &&
                  selection.anchor.key === node.getKey() &&
                  selection.anchor.offset === offset
                );
              });
              if (!isReachable) {
                mounted.unmount();
                continue;
              }
            }
            await act(async () => {
              mounted.lexical.update(() => {
                const node = (shell ? $shellTexts() : $editableTexts())[index];
                const text = node.getTextContent();
                isInNote = shell || $hasNoteAncestor(node);
                label = `${shell ? "shell " : ""}${node.getType()} ${JSON.stringify(text.replaceAll(NBSP, "~"))}@${offset} ${keystroke.name}`;
                if ("deletes" in keystroke) {
                  if (offset !== (keystroke.deletes === "before" ? text.length : 0)) return;
                  applied = true;
                  node.select(offset, offset);
                  const selection = $getSelection();
                  if (!$isRangeSelection(selection)) return;
                  selection.focus.set(
                    node.getKey(),
                    keystroke.deletes === "before" ? offset - 1 : offset + 1,
                    "text",
                  );
                  selection.removeText();
                  return;
                }
                if ("extend" in keystroke) {
                  if (!isInNote) return;
                  applied = true;
                  node.select(offset, offset);
                  const selection = $getSelection();
                  if (!$isRangeSelection(selection)) return;
                  if (keystroke.extend === "all") {
                    mounted.lexical.dispatchCommand(SELECT_ALL_COMMAND, undefined);
                    return;
                  }
                  const para = $getRoot().getChildren()[2];
                  if (!$isElementNode(para)) return;
                  const positions = $caretPositions();
                  const at = positions.find(
                    (caret) => caret.node.is(node) && caret.offset === offset,
                  );
                  const neighbor =
                    keystroke.extend === "left"
                      ? positions
                          .filter((caret) => caret.position === (at?.position ?? 0) - 1)
                          .at(-1)
                      : positions.find((caret) => caret.position === (at?.position ?? 0) + 1);
                  if (keystroke.extend === "home") selection.focus.set(para.getKey(), 0, "element");
                  else if (keystroke.extend === "end")
                    selection.focus.set(para.getKey(), para.getChildrenSize(), "element");
                  else if (neighbor)
                    selection.focus.set(neighbor.node.getKey(), neighbor.offset, "text");
                  mounted.lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
                  return;
                }
                const typed = "character" in keystroke ? keystroke.character : keystroke.typed;
                const at = $caretPositions().find(
                  (caret) => caret.node.is(node) && caret.offset === offset,
                );
                if (typed !== undefined && at) place = `${JSON.stringify(typed)}@${at.position}`;
                if ("character" in keystroke) {
                  if (offset !== 0 && offset !== text.length) return;
                  applied = true;
                  node.select(offset, offset);
                  if (isAnnounced)
                    mounted.lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
                  return;
                }
                const result = keystroke.apply(text, offset);
                if (!result) return;
                applied = true;
                node.setTextContent(result.text);
                node.select(result.caret, result.caret);
              });
              await Promise.resolve();
              await Promise.resolve();
            });
            // An empty `next` replaces a range with nothing: Backspace.
            const next =
              "character" in keystroke
                ? keystroke.character
                : "then" in keystroke
                  ? keystroke.then
                  : "edit" in keystroke
                    ? keystroke.edit
                    : undefined;
            const history = "history" in keystroke ? keystroke.history : undefined;
            if (applied && next !== undefined)
              await act(async () => {
                mounted.lexical.update(
                  () => {
                    const selection = $getSelection();
                    if ($isRangeSelection(selection)) selection.insertText(next);
                  },
                  // Its own history entry, so an undo can stop between the two keystrokes.
                  history ? { tag: HISTORY_PUSH_TAG } : undefined,
                );
                await Promise.resolve();
                await Promise.resolve();
              });
            if (applied && history) {
              await depart(mounted);
              for (const command of history)
                await act(async () => {
                  mounted.lexical.dispatchCommand(
                    command === "undo" ? UNDO_COMMAND : REDO_COMMAND,
                    undefined,
                  );
                  await Promise.resolve();
                });
            }
            if (!applied) {
              mounted.unmount();
              continue;
            }
            const isPending = (getPendedDisplayOwners(mounted.lexical)?.size ?? 0) > 0;
            if (isPending) pendingCases += 1;
            const pending = mounted.ref.current?.getUsj();
            const viewOptions = pendingOracleView(view);
            const pendingContext = positionContext(mounted.lexical, viewOptions);
            const before = mounted.lexical.getEditorState().read(() => ({
              text: $documentText(),
              screen: $screenLines(),
              reported: $reported(pendingContext),
              roundTrip: $roundTripFailures(pendingContext, viewOptions),
            }));
            await depart(mounted);
            const settled = mounted.ref.current?.getUsj();
            // The same character typed at the same place on screen — at a glyph's end or at the
            // start of the text after it — saves the same file.
            // Compared as the saved document's structure, not its normalized bytes: a whitespace
            // node a reader skips (between a verse and a span) collapses away in the bytes, but
            // the file still has it, and a reload drops it.
            if (place !== undefined) {
              const saved = bodyOf(settled);
              const first = savedByPlace.get(place);
              if (!first) savedByPlace.set(place, { label, saved });
              else if (first.saved !== saved)
                mismatches.set(
                  `${label} [same place]`,
                  `${label} [same place]\n    saved ${JSON.stringify(saved)}\n    but ${first.label} saved ${JSON.stringify(first.saved)}`,
                );
            }
            // The popover saves only its note, so a keystroke made in the note must leave
            // everything outside it as loaded: a byte that lands there is lost on save.
            if (
              view === PROTECTED_NOTE_SHELL_VIEW &&
              isInNote &&
              outsideNotes(settled) !== loadedOutsideNotes
            )
              mismatches.set(
                `${label} [outside the note]`,
                `${label} [outside the note]\n    settled ${bodyOf(settled)}`,
              );
            if (JSON.stringify(pending) !== JSON.stringify(settled))
              mismatches.set(
                label,
                `${label}\n    pending ${bodyOf(pending)}\n    settled ${bodyOf(settled)}`,
              );
            // What the screen shows is what the file gets.
            const shownLines = mounted.lexical.getEditorState().read(() => $screenLines());
            const shown = shownLines === undefined ? undefined : asUsfmBytes(shownLines);
            const saved = savedBytes(settled);
            if (shown !== undefined && withoutLineBreaks(shown) !== withoutLineBreaks(saved))
              mismatches.set(
                `${label} [screen]`,
                `${label} [screen]\n    screen ${JSON.stringify(shown)}\n    saved  ${JSON.stringify(saved)}`,
              );
            // And the settle only respelled what the screen showed while the edit was pending: a
            // typed byte it dropped from the screen and the file alike is not on either.
            // A view that shows a typed whitespace run as typed is held to keeping it.
            const keepRuns = hasStandardViewWhitespace(viewOptions);
            const pendingScreen =
              before.screen === undefined ? undefined : normalizeUsfm(before.screen, keepRuns);
            const settledScreen =
              shownLines === undefined ? undefined : normalizeUsfm(shownLines, keepRuns);
            const change =
              pendingScreen && settledScreen
                ? unrespelledChange(pendingScreen, settledScreen)
                : undefined;
            if (change)
              mismatches.set(
                `${label} [respelled]`,
                `${label} [respelled] ${change}\n    pending ${JSON.stringify(pendingScreen?.text)}\n    settled ${JSON.stringify(settledScreen?.text)}`,
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
              for (const key of [
                label,
                `${label} [screen]`,
                `${label} [positions]`,
                `${label} [same place]`,
                `${label} [respelled]`,
                `${label} [outside the note]`,
              ])
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
