/**
 * Copy, cut and paste over the rich testUSFM corpus, in every view a user edits Scripture in.
 *
 * Standard view writes and reads its own USFM clipboard (`markerEdit/clipboardCorpusRoundTrip`
 * sweeps it); the hidden-marker views (formatted, paragraph-structure) use Lexical's clipboard
 * flavors. This suite runs the same gestures in all three views, Standard as the reference, over a
 * deterministic sample of ranges from each fixture ({@link sampleRanges}: a whole verse, a range
 * starting or ending inside a char span, one holding a footnote, one across a paragraph boundary,
 * one spanning a whole paragraph, one across a verse number, one inside note content). For each it
 * asserts what matters most to a translator: a cut or paste changes exactly what was selected or
 * pasted and nothing else, what is pasted arrives intact, and undo and redo land exactly on the
 * states before and after.
 *
 * The oracle is a USJ-level model, not the editor: {@link sliceUsj}, {@link removeRange} and
 * {@link insertFragment} split the editor's own export at the range's ends and rejoin the pieces.
 * The join rule is the one Lexical's selection edits follow: the two halves of a split object rejoin
 * as one; at the top level a paragraph always absorbs the paragraph that follows it at a join and
 * keeps its own marker (a paste's first block merges into the host paragraph; the host's remainder
 * moves into the paste's last block; a cut across a paragraph boundary leaves one paragraph with the
 * first one's marker); adjacent strings concatenate.
 *
 * Where the model allows a difference, the difference is one the editor owns by design, and each is
 * argued where it is applied:
 * - the engine-owned space before a verse ({@link JoinOptions});
 * - the derived `sid`/`vid` a text flavor has no bytes for ({@link withoutDerivedAttributes});
 * - an empty derived `sid` that Standard view's rebuild after a pasted verse drops
 *   ({@link withoutEmptySidsIn});
 * - a hidden-marker view's plain-text paste arrives as prose ({@link plainFragment});
 * - `CommandMenuPlugin` refuses a hidden-view paste of content holding `\` or `/`
 *   ({@link isRefusedByPasteGate});
 * - Standard view sits out ranges with an end inside a char span ({@link viewsFor}).
 *
 * Every row mounts its own editor. The whole suite runs in about a minute.
 */
import {
  EditorViewName,
  editorView,
  enabledViews,
  knownFailureRunner,
  LIBRARY_VIEWS_ENABLED,
  mountInView,
} from "./editorViews.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  $setSelection,
  COPY_COMMAND,
  CUT_COMMAND,
  LexicalEditor,
  LexicalNode,
  PASTE_COMMAND,
  TextNode,
} from "lexical";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { NBSP } from "shared";
import { ViewOptions } from "shared-react";
import { describe, expect } from "vitest";

// Located relative to the working directory, as the other testUSFM corpus suites do: the platform
// project root under nx, the repo root otherwise.
const CORPUS_DIR = [
  "../../libs/shared/src/converters/usfm/testUsfmCorpus",
  "libs/shared/src/converters/usfm/testUsfmCorpus",
].find((dir) => existsSync(dir));

/** The Paratext-flavored oracles the editor round-trip suite loads (same selection, same reason
 * for using the corrected 2SA-3). */
const FIXTURES = [
  "testUSFM-1SA-1.usj",
  "testUSFM-2SA-1.usj",
  "testUSFM-2SA-2.usj",
  "testUSFM-2SA-3-corrected.usj",
  "testUSFM-2SA-4.usj",
  "testUSFM-2SA-5.usj",
  "web-matthew-1-and-2.usj",
  "web-matthew-5-section-header.usj",
];

function readFixture(name: string): Usj {
  if (!CORPUS_DIR) throw new Error("testUsfmCorpus fixture directory not found from cwd");
  return JSON.parse(readFileSync(join(CORPUS_DIR, name), "utf8")) as Usj;
}

// ------------------------------------------------------------------------------------------------
// USJ positions and the model
// ------------------------------------------------------------------------------------------------

/** A position inside one string of a USJ document: the string's index path from `usj.content`, and
 * a character offset into it. */
interface TextPoint {
  path: number[];
  offset: number;
}

type Item = MarkerContent;

/** The original object each half of a split object came from, so the halves can rejoin. */
const origins = new WeakMap<object, object>();
function originOf(item: MarkerObject): object {
  return origins.get(item) ?? item;
}
function withContent(item: MarkerObject, content: Item[], origin: object): MarkerObject {
  const copy: MarkerObject = { ...item, content };
  origins.set(copy, origin);
  return copy;
}

/** Splits `items` at the point `path`/`offset` (the path relative to `items`) into what lies before
 * and after it. */
function splitAt(items: Item[], path: number[], offset: number): [Item[], Item[]] {
  const [index, ...rest] = path;
  const item = items[index];
  const before = items.slice(0, index);
  const after = items.slice(index + 1);
  if (typeof item === "string") {
    if (rest.length > 0) throw new Error("path runs past a string");
    const head = item.slice(0, offset);
    const tail = item.slice(offset);
    return [head ? [...before, head] : before, tail ? [tail, ...after] : after];
  }
  if (!item) throw new Error(`no item at ${index}`);
  const [left, right] = splitAt(item.content ?? [], rest, offset);
  const origin = originOf(item);
  return [
    [...before, withContent(item, left, origin)],
    [withContent(item, right, origin), ...after],
  ];
}

/** How a join treats the seam beyond the structural rule. */
interface JoinOptions {
  /**
   * Whether a string that ends up directly before a verse gains one trailing space. The hidden-marker
   * views' `TextSpacingPlugin` maintains that engine-owned space (the canonical USJ shape
   * ParatextData writes); Standard view's verse is a text node, which the text transform exempts.
   */
  spaceBeforeVerse: boolean;
}

/** Rejoins two pieces of a document (see the file comment for the rule). */
function joinItems(left: Item[], right: Item[], options: JoinOptions, depth = 0): Item[] {
  if (left.length === 0) return right;
  if (right.length === 0) return left;
  const last = left[left.length - 1];
  const first = right[0];
  if (typeof last === "string" && typeof first === "string")
    return [...left.slice(0, -1), last + first, ...right.slice(1)];
  if (typeof last !== "string" && typeof first !== "string") {
    const sameOrigin = originOf(last) === originOf(first);
    const paragraphs = depth === 0 && last.type === "para" && first.type === "para";
    if (sameOrigin || paragraphs) {
      const merged = withContent(
        last,
        joinItems(last.content ?? [], first.content ?? [], options, depth + 1),
        originOf(last),
      );
      return [...left.slice(0, -1), merged, ...right.slice(1)];
    }
  }
  if (depth === 1 && typeof first !== "string" && first.type === "verse") {
    if (
      options.spaceBeforeVerse &&
      typeof last === "string" &&
      !last.endsWith(" ") &&
      !last.endsWith(NBSP)
    )
      return [...left.slice(0, -1), `${last} `, ...right];
    // `TextSpacingPlugin`'s verse transform: the space between a char span and the verse after it
    // is canonical USJ (ParatextData re-inserts it), and the transform keeps it in every view.
    if (typeof last !== "string" && last.type === "char") return [...left, " ", ...right];
  }
  return [...left, ...right];
}

/** The content between `start` and `end`, as a fragment of (partial) top-level items. */
function sliceUsj(content: Item[], start: TextPoint, end: TextPoint): Item[] {
  const [beforeEnd] = splitAt(content, end.path, end.offset);
  return splitAt(beforeEnd, start.path, start.offset)[1];
}

/** `content` with everything between `start` and `end` removed. */
function removeRange(
  content: Item[],
  start: TextPoint,
  end: TextPoint,
  options: JoinOptions,
): Item[] {
  const [before] = splitAt(content, start.path, start.offset);
  const [, after] = splitAt(content, end.path, end.offset);
  return joinItems(before, after, options);
}

/** `content` with `fragment` inserted at `at`. */
function insertFragment(
  content: Item[],
  at: TextPoint,
  fragment: Item[],
  options: JoinOptions,
): Item[] {
  const [before, after] = splitAt(content, at.path, at.offset);
  return joinItems(joinItems(before, fragment, options), after, options);
}

/** `text` wrapped in the same (partial) ancestors as the string at `path`, so it joins INTO that
 * string rather than beside its innermost container. */
function wrapLike(content: Item[], path: number[], text: string): Item[] {
  let wrapped: Item = text;
  for (let depth = path.length - 1; depth >= 1; depth -= 1) {
    const ancestor = itemAt(content, path.slice(0, depth));
    if (!ancestor || typeof ancestor === "string") throw new Error("no ancestor to wrap in");
    wrapped = withContent(ancestor, [wrapped], originOf(ancestor));
  }
  return [wrapped];
}

/**
 * `fragment` without the attributes USFM derives rather than spells — a verse's `sid`, a
 * paragraph's `vid` — which only the internal Lexical flavor carries. A text flavor has no bytes
 * for them, so a paste through one cannot reproduce them (the same carve-out the Standard-view
 * corpus sweep makes for the 2sa fixture's verse `sid`).
 */
function withoutDerivedAttributes(fragment: Item[]): Item[] {
  return fragment.map((item) => {
    if (typeof item === "string") return item;
    const copy = withContent(item, withoutDerivedAttributes(item.content ?? []), originOf(item));
    if (item.content === undefined) delete copy.content;
    if (copy.type === "verse") delete copy.sid;
    // `vid` is outside the `MarkerObject` type, though ParatextData writes it on a paragraph.
    if (copy.type === "para") Reflect.deleteProperty(copy, "vid");
    return copy;
  });
}

/** `content` with no empty `sid` on the verses of the block at `index`. */
function withoutEmptySidsIn(content: Item[], index: number): Item[] {
  return content.map((block, at) => {
    if (at !== index || typeof block === "string") return block;
    const items = (block.content ?? []).map((item) => {
      if (typeof item === "string" || item.type !== "verse" || item.sid !== "") return item;
      const { sid: _derived, ...verse } = item;
      return verse;
    });
    return withContent(block, items, originOf(block));
  });
}

/** A plain JSON copy: drops the identity the model tracks, and `undefined` fields an export never
 * carries. */
function plain(content: Item[]): Item[] {
  return JSON.parse(JSON.stringify(content)) as Item[];
}

function itemAt(content: Item[], path: number[]): Item | undefined {
  let items: Item[] | undefined = content;
  let item: Item | undefined;
  for (const index of path) {
    item = items?.[index];
    items = typeof item === "string" ? undefined : item?.content;
  }
  return item;
}

function stringAt(content: Item[], path: number[]): string {
  const item = itemAt(content, path);
  if (typeof item !== "string") throw new Error(`no string at ${path.join(".")}`);
  return item;
}

// ------------------------------------------------------------------------------------------------
// Range sampling
// ------------------------------------------------------------------------------------------------

/** Every string in the document, for the uniqueness test a locatable string must pass. */
function allStrings(content: Item[]): string[] {
  const out: string[] = [];
  const walk = (items: Item[] | undefined) =>
    items?.forEach((item) => {
      if (typeof item === "string") out.push(item);
      else walk(item.content);
    });
  walk(content);
  return out;
}

/**
 * Whether the string can be found in the editor without ambiguity in every view: long enough, and
 * contained in no other string of the document (Standard view adds marker bytes around a string,
 * so the lookup is by containment, not equality).
 */
function isLocatable(text: string, strings: string[]): boolean {
  if (text.trim().length < 4) return false;
  if (text.indexOf(text.trim()) !== text.lastIndexOf(text.trim())) return false;
  return strings.filter((other) => other.includes(text)).length === 1;
}

type RangeKind =
  | "whole verse"
  | "starts inside a char style"
  | "ends inside a char style"
  | "contains a footnote"
  | "across a paragraph boundary"
  | "spans a whole paragraph"
  | "across a verse number"
  | "inside note content";

interface SampledRange {
  kind: RangeKind;
  start: TextPoint;
  end: TextPoint;
}

/** Samples, per range kind, the middle candidate the document offers. Deterministic. */
function sampleRanges(usj: Usj): SampledRange[] {
  const content = usj.content;
  const strings = allStrings(content);
  const ok = (item: Item | undefined): item is string =>
    typeof item === "string" && isLocatable(item, strings);
  const candidates = new Map<RangeKind, SampledRange[]>();
  const add = (kind: RangeKind, start: TextPoint, end: TextPoint) => {
    const list = candidates.get(kind) ?? [];
    list.push({ kind, start, end });
    candidates.set(kind, list);
  };
  const isPara = (item: Item | undefined): item is MarkerObject =>
    typeof item !== "string" && item?.type === "para";

  content.forEach((block, blockIndex) => {
    if (!isPara(block)) return;
    const items = block.content ?? [];
    items.forEach((item, index) => {
      if (typeof item === "string") return;
      const prev = items[index - 1];
      const next = items[index + 1];
      const at = (i: number, offset: number): TextPoint => ({ path: [blockIndex, i], offset });
      if (item.type === "verse") {
        if (ok(prev) && ok(next))
          add("across a verse number", at(index - 1, prev.length - 2), at(index + 1, 2));
        // The verse marker and its text up to the next verse or the paragraph's end.
        if (ok(prev)) {
          let last = index + 1;
          while (last + 1 < items.length) {
            const following = items[last + 1];
            if (typeof following !== "string" && following.type === "verse") break;
            last += 1;
          }
          const lastItem = items[last];
          if (last > index && ok(lastItem))
            add("whole verse", at(index - 1, prev.length), at(last, lastItem.length));
        }
      }
      if (item.type === "char") {
        const inner = item.content?.[0];
        if (ok(inner) && inner.length >= 3) {
          if (ok(next))
            add(
              "starts inside a char style",
              { path: [blockIndex, index, 0], offset: 1 },
              at(index + 1, 1),
            );
          if (ok(prev))
            add("ends inside a char style", at(index - 1, prev.length - 1), {
              path: [blockIndex, index, 0],
              offset: inner.length - 1,
            });
        }
      }
      if (item.type === "note") {
        if (ok(prev) && ok(next))
          add("contains a footnote", at(index - 1, prev.length - 1), at(index + 1, 1));
        (item.content ?? []).forEach((noteItem, noteIndex) => {
          if (typeof noteItem === "string" || noteItem.type !== "char") return;
          const text = noteItem.content?.[0];
          if (ok(text) && text.length >= 4)
            add(
              "inside note content",
              { path: [blockIndex, index, noteIndex, 0], offset: 1 },
              { path: [blockIndex, index, noteIndex, 0], offset: text.length - 1 },
            );
        });
      }
    });
    const lastItem = items[items.length - 1];
    const firstTextIndex = (para: MarkerObject) =>
      (para.content ?? []).findIndex((entry, i) => i < 3 && ok(entry));
    const nextBlock = content[blockIndex + 1];
    if (ok(lastItem) && lastItem.length >= 3 && isPara(nextBlock)) {
      const firstIndex = firstTextIndex(nextBlock);
      if (firstIndex >= 0) {
        add(
          "across a paragraph boundary",
          { path: [blockIndex, items.length - 1], offset: lastItem.length - 2 },
          { path: [blockIndex + 1, firstIndex], offset: 2 },
        );
      }
      const afterNext = content[blockIndex + 2];
      if (isPara(afterNext) && (nextBlock.content?.length ?? 0) > 0) {
        const thirdIndex = firstTextIndex(afterNext);
        if (thirdIndex >= 0)
          add(
            "spans a whole paragraph",
            { path: [blockIndex, items.length - 1], offset: lastItem.length - 2 },
            { path: [blockIndex + 2, thirdIndex], offset: 2 },
          );
      }
    }
  });
  const ranges: SampledRange[] = [];
  candidates.forEach((list) => ranges.push(list[Math.floor(list.length / 2)]));
  return ranges;
}

/** Where a copy is pasted: {@link paragraphEndDestination}; for a
 * range inside a note, the end of the same string (the only place inside the note a paste can
 * land without changing which char style it lands in). */
function pasteDestination(usj: Usj, range: SampledRange): TextPoint {
  if (range.kind === "inside note content")
    return { path: range.end.path, offset: stringAt(usj.content, range.end.path).length };
  return paragraphEndDestination(usj);
}

/** The end of the last paragraph that ends in a locatable string, else the end of the last
 * locatable string in a paragraph. */
function paragraphEndDestination(usj: Usj): TextPoint {
  const strings = allStrings(usj.content);
  for (let index = usj.content.length - 1; index >= 0; index -= 1) {
    const block = usj.content[index];
    if (typeof block === "string" || block.type !== "para") continue;
    const items = block.content ?? [];
    const last = items[items.length - 1];
    if (typeof last === "string" && isLocatable(last, strings))
      return { path: [index, items.length - 1], offset: last.length };
  }
  for (let index = usj.content.length - 1; index >= 0; index -= 1) {
    const block = usj.content[index];
    if (typeof block === "string" || block.type !== "para") continue;
    const items = block.content ?? [];
    for (let item = items.length - 1; item >= 0; item -= 1) {
      const text = items[item];
      if (typeof text === "string" && isLocatable(text, strings))
        return { path: [index, item], offset: text.length };
    }
  }
  throw new Error("no paragraph holds a locatable string");
}

// ------------------------------------------------------------------------------------------------
// Driving the editor
// ------------------------------------------------------------------------------------------------

/** The text node holding `text` (by containment; see {@link isLocatable}), and where `offset`
 * into `text` falls in it. Only plain `text` nodes: Standard view's marker and verse nodes are
 * text nodes of other types. */
function $locate(text: string, offset: number): { node: TextNode; offset: number } {
  // Standard view displays a data NBSP as `~`, one character for one.
  for (const shown of [text, text.replaceAll(NBSP, "~")]) {
    const hits: TextNode[] = [];
    const walk = (node: LexicalNode) => {
      if ($isTextNode(node) && node.getType() === "text" && node.getTextContent().includes(shown))
        hits.push(node);
      if ($isElementNode(node)) node.getChildren().forEach(walk);
    };
    walk($getRoot());
    if (hits.length > 1) throw new Error(`"${text}" is in ${hits.length} text nodes, not one`);
    if (hits.length === 1)
      return { node: hits[0], offset: hits[0].getTextContent().indexOf(shown) + offset };
  }
  throw new Error(`"${text}" is in no text node`);
}

function clipboardEvent(store: Map<string, string>): ClipboardEvent {
  const event = new ClipboardEvent("paste", { bubbles: true, cancelable: true });
  Object.defineProperty(event, "clipboardData", {
    value: {
      get types() {
        return [...store.keys()];
      },
      files: [],
      getData: (type: string) => store.get(type) ?? "",
      setData: (type: string, data: string) => store.set(type, data),
    },
  });
  return event;
}

async function settle(): Promise<void> {
  await act(async () => {
    for (let i = 0; i < 3; i += 1) await new Promise((resolve) => setTimeout(resolve, 0));
  });
}

/**
 * Selects `start`..`end` (`end` defaults to `start`, a caret) in its own committed update, so the
 * DOM selection follows it before a command reads it — Lexical's copy writes nothing when the DOM
 * selection lies outside the editor.
 */
async function select(
  editor: LexicalEditor,
  usj: Usj,
  start: TextPoint,
  end: TextPoint = start,
): Promise<void> {
  const startText = stringAt(usj.content, start.path);
  const endText = stringAt(usj.content, end.path);
  await act(async () =>
    editor.update(
      () => {
        const anchor = $locate(startText, start.offset);
        const focus = $locate(endText, end.offset);
        const selection = $createRangeSelection();
        selection.anchor.set(anchor.node.getKey(), anchor.offset, "text");
        selection.focus.set(focus.node.getKey(), focus.offset, "text");
        $setSelection(selection);
      },
      { discrete: true },
    ),
  );
}

/** Dispatches `command` against the current selection and returns what reached the clipboard. */
async function dispatchClipboard(
  editor: LexicalEditor,
  command: typeof COPY_COMMAND | typeof CUT_COMMAND,
): Promise<Map<string, string>> {
  const store = new Map<string, string>();
  await act(async () =>
    editor.update(() => {
      if (!$isRangeSelection($getSelection())) throw new Error("no range selection to copy");
      editor.dispatchCommand(command, clipboardEvent(store));
    }),
  );
  await settle();
  return store;
}

async function paste(editor: LexicalEditor, payload: Map<string, string>): Promise<void> {
  await act(async () =>
    editor.update(() => {
      editor.dispatchCommand(PASTE_COMMAND, clipboardEvent(new Map(payload)));
    }),
  );
  await settle();
}

type Mounted = Awaited<ReturnType<typeof mountInView>>;

function contentOf(mounted: Mounted): Item[] | undefined {
  return mounted.ref.current?.getUsj()?.content;
}

async function undo(mounted: Mounted): Promise<void> {
  await act(async () => mounted.ref.current?.undo());
  await settle();
}

async function redo(mounted: Mounted): Promise<void> {
  await act(async () => mounted.ref.current?.redo());
  await settle();
}

// ------------------------------------------------------------------------------------------------
// The rows
// ------------------------------------------------------------------------------------------------

/**
 * The views each range runs in. A range inside note content runs where the note's content is in
 * the document itself: the footnotes pane's row editor, where the app edits every note, and — in a
 * run that includes the library-only views — each editing view with its notes expanded.
 *
 * Standard view sits out the ranges with an end inside a char span. There the end lies past the
 * span's opening glyph or before its closing one, so the range holds marker bytes without their
 * pair — a marker edit, not the range of text this suite models: a cut that takes the opener
 * unwraps the span as deletion damage, one that takes the closer leaves it running on unclosed, and
 * a copy carries an opener with no closer (`closed="false"`). The marker-edit and
 * `partialConstructClipboard` suites own that.
 */
function viewsFor(kind: RangeKind | undefined): { name: string; view: ViewOptions }[] {
  const isPartialSpan =
    kind === "starts inside a char style" || kind === "ends inside a char style";
  const names: EditorViewName[] = isPartialSpan
    ? ["formatted", "paragraph-structure"]
    : ["standard", "formatted", "paragraph-structure"];
  if (kind !== "inside note content")
    return enabledViews(names).map((name) => ({ name, view: editorView(name) }));
  return [
    { name: "footnotes-pane-row", view: editorView("footnotes-pane-row") },
    ...(LIBRARY_VIEWS_ENABLED
      ? names.map((name) => ({
          name: `${name}+expandedNotes`,
          view: { ...editorView(name), noteMode: "expanded" as const },
        }))
      : []),
  ];
}

/**
 * The paste payloads. "all flavors" is everything the copy wrote, which a native paste event (the
 * Electron Edit menu) delivers. "html and plain" is what Ctrl+V and the context menu's Paste
 * deliver: `pasteSelection` rebuilds the payload from `navigator.clipboard.read()`, which exposes
 * no private MIME type, so the internal Lexical flavor never reaches them. "plain text" is
 * Ctrl+Shift+V (`pasteSelectionAsPlainText`).
 */
type Operation =
  | "copy, paste all flavors"
  | "copy, paste html and plain"
  | "copy, paste plain text"
  | "cut"
  | "cut, paste back";

const OPERATIONS: Operation[] = [
  "copy, paste all flavors",
  "copy, paste html and plain",
  "copy, paste plain text",
  "cut",
  "cut, paste back",
];

/** Plain text that looks like USFM, pasted where a copy would be. */
const USFM_LOOKING_TEXTS = ["\\v 9 x", "\\nd y\\nd*"] as const;

interface RangeRow {
  key: string;
  range: SampledRange;
  viewName: string;
  view: ViewOptions;
  operation: Operation;
  /** The document the row mounts, when it is not the fixture: see {@link inNoteScaffold}. */
  usj?: Usj;
}

/**
 * The footnotes pane's row editor never holds the chapter: it mounts a scaffold paragraph holding
 * the one note it edits (paranext-core's `FootnoteEditor`; the paragraph is unnamed there, which
 * the editor reads as `\p`). So a range inside note content runs there in that shape — the note
 * the range lies in, alone in a `\p` — with the range moved onto it.
 */
function inNoteScaffold(usj: Usj, range: SampledRange): { usj: Usj; range: SampledRange } {
  const notePath = range.start.path.slice(0, 2);
  const note = itemAt(usj.content, notePath);
  if (!note || typeof note === "string") throw new Error("the range lies in no note");
  const rebase = (point: TextPoint): TextPoint => ({
    ...point,
    path: [0, 0, ...point.path.slice(2)],
  });
  return {
    usj: {
      type: "USJ",
      version: usj.version,
      content: [{ type: "para", marker: "p", content: [note] }],
    },
    range: { ...range, start: rebase(range.start), end: rebase(range.end) },
  };
}

interface UsfmRow {
  key: string;
  viewName: string;
  view: ViewOptions;
  text: (typeof USFM_LOOKING_TEXTS)[number];
}

function rowsFor(fixture: string, usj: Usj): { ranges: RangeRow[]; usfm: UsfmRow[] } {
  const ranges: RangeRow[] = [];
  for (const range of sampleRanges(usj))
    for (const { name: viewName, view } of viewsFor(range.kind)) {
      const scaffold = viewName === "footnotes-pane-row" ? inNoteScaffold(usj, range) : undefined;
      for (const operation of OPERATIONS)
        ranges.push({
          key: `${fixture} | ${range.kind} | ${viewName} | ${operation}`,
          range: scaffold?.range ?? range,
          viewName,
          view,
          operation,
          usj: scaffold?.usj,
        });
    }
  const usfm: UsfmRow[] = [];
  for (const { name: viewName, view } of viewsFor(undefined))
    for (const text of USFM_LOOKING_TEXTS)
      usfm.push({ key: `${fixture} | ${viewName} | paste plain ${text}`, viewName, view, text });
  return { ranges, usfm };
}

/**
 * Why a row is known to fail, or `undefined`. Each reason names a finding in paranext-core's
 * Scripture-Data-Fidelity-Catalog, led by the ticket that will fix it where one is filed; a row
 * that starts passing fails, so a fix deletes its rule.
 */
function knownFailure(fixture: string, usj: Usj, row: RangeRow | UsfmRow): string | undefined {
  if ("range" in row) {
    const { kind, start, end } = row.range;
    const copied = sliceUsj(usj.content, start, end);
    // TODO(PT-4911): write a hidden view's text/plain without the gutter glyph text.
    if (
      row.viewName === "paragraph-structure" &&
      (kind === "across a paragraph boundary" || kind === "spans a whole paragraph") &&
      row.operation !== "cut" &&
      !isRefusedByPasteGate(row.view, copied)
    )
      return "PT-4911: the copy's text/plain carries the next paragraph's gutter glyph (`\\q1 `), so CommandMenuPlugin refuses its paste";
    // TODO(PT-4921): carry what the html flavor loses (char and note attributes, figures), and
    // keep a note's display spacers out of it.
    if (
      isMarkerHidden(row.view) &&
      row.operation === "copy, paste html and plain" &&
      // Inside one string, the copy carries only text, never the note or span around it.
      kind !== "inside note content" &&
      holdsHtmlLossyContent(copied)
    )
      return "PT-4921: text/html carries no char attributes (`closed`) and brings a note's display spacers back as text";
  }
  // TODO(PT-4388): read a bare `\` as a nameless marker once ParatextData 9.6 is in; the
  // tokenizer change waits on that upgrade.
  if (row.viewName === "standard" && fixture === "testUSFM-2SA-5.usj") {
    if (
      "text" in row ||
      row.operation === "copy, paste html and plain" ||
      row.operation === "copy, paste plain text"
    )
      return "PT-4388: Standard's text path over deliberately damaged USFM: a nameless marker re-tokenizes as text, and a bare backslash keeps the paste a pending literal";
  }
  return undefined;
}

/** Whether a fragment holds what the html flavor cannot carry: a note, or an implicitly closed
 * char span. */
function holdsHtmlLossyContent(fragment: Item[]): boolean {
  return fragment.some(
    (item) =>
      typeof item !== "string" &&
      (item.type === "note" ||
        (item.type === "char" && Reflect.get(item, "closed") === "false") ||
        holdsHtmlLossyContent(item.content ?? [])),
  );
}

const isMarkerHidden = (view: ViewOptions) => view.markerMode !== "editable";

/**
 * Whether `CommandMenuPlugin` refuses this paste: in a hidden-marker view it swallows any paste
 * whose text/plain holds `\` or `/`, whatever other flavor it carries — the documented over-broad
 * gate (clipboard-semantics S5, deferred). Only a range whose own content holds one of those is
 * excused by it; a `\` the copy added that the content never had is the copy's defect, not the
 * gate's.
 */
function isRefusedByPasteGate(view: ViewOptions, fragment: Item[]): boolean {
  return isMarkerHidden(view) && /[\\/]/.test(contentText(fragment));
}

/** The text `fragment` holds, a stray marker (`unmatched`, shown as its own bytes in every view)
 * included. */
function contentText(fragment: Item[]): string {
  return fragment
    .map((item) => {
      if (typeof item === "string") return item;
      if (item.type === "unmatched") return `\\${item.marker ?? ""}`;
      return contentText(item.content ?? []);
    })
    .join("");
}

/**
 * What a plain-text paste into a hidden-marker view inserts: the text itself — into the string at
 * the caret for one line; one paragraph per line otherwise, each new paragraph with the host's
 * marker (`ParaNode.insertNewAfter`). These views have no USFM tokenizer, so a copy's text/plain —
 * prose, no markers — arrives as prose: the documented hidden-view copy-out (clipboard-semantics
 * S5), not a loss this suite can hold the paste to.
 */
function plainFragment(content: Item[], at: TextPoint, text: string): Item[] {
  const lines = text.split(/\r?\n/);
  if (lines.length === 1) return wrapLike(content, at.path, text);
  const host = itemAt(content, at.path.slice(0, 1));
  const marker = typeof host === "string" ? undefined : host?.marker;
  return lines.map((line) => ({ type: "para", marker, content: line ? [line] : [] }));
}

async function runRangeRow(row: RangeRow, usj: Usj): Promise<void> {
  const mounted = await mountInView(usj, row.view);
  try {
    const original = contentOf(mounted);
    // The load round trip is another suite's subject; this one starts from what loaded.
    expect(original).toEqual(usj.content);
    if (!original) throw new Error("no USJ");
    const { start, end } = row.range;
    const { lexical } = mounted;
    const options: JoinOptions = { spaceBeforeVerse: isMarkerHidden(row.view) };
    const copied = sliceUsj(original, start, end);

    if (row.operation === "cut" || row.operation === "cut, paste back") {
      await select(lexical, usj, start, end);
      const clipboard = await dispatchClipboard(lexical, CUT_COMMAND);
      const cutContent = plain(removeRange(original, start, end, options));
      expect(contentOf(mounted), "after the cut").toEqual(cutContent);
      if (row.operation === "cut") {
        await undo(mounted);
        expect(contentOf(mounted), "after undoing the cut").toEqual(original);
        await redo(mounted);
        expect(contentOf(mounted), "after redoing the cut").toEqual(cutContent);
        return;
      }
      await paste(lexical, clipboard);
      if (isRefusedByPasteGate(row.view, copied)) {
        expect(contentOf(mounted), "after the refused paste").toEqual(cutContent);
        return;
      }
      expect(contentOf(mounted), "after pasting the cut back").toEqual(original);
      await undo(mounted);
      expect(contentOf(mounted), "after undoing the paste").toEqual(cutContent);
      await redo(mounted);
      expect(contentOf(mounted), "after redoing the paste").toEqual(original);
      return;
    }

    await select(lexical, usj, start, end);
    const clipboard = await dispatchClipboard(lexical, COPY_COMMAND);
    const text = clipboard.get("text/plain") ?? "";
    expect(text, "the copy wrote text/plain").toBeTruthy();
    const payload = new Map(clipboard);
    const isInternal = row.operation === "copy, paste all flavors";
    if (!isInternal) payload.delete("application/x-lexical-editor");
    if (row.operation === "copy, paste plain text") payload.delete("text/html");

    const destination = pasteDestination(usj, row.range);
    await select(lexical, usj, destination);
    await paste(lexical, payload);

    let expected: Item[];
    if (isRefusedByPasteGate(row.view, copied)) {
      expected = original;
    } else if (isMarkerHidden(row.view) && row.operation === "copy, paste plain text") {
      expected = plain(
        insertFragment(original, destination, plainFragment(original, destination, text), options),
      );
    } else {
      const fragment = isInternal ? copied : withoutDerivedAttributes(copied);
      expected = plain(insertFragment(original, destination, fragment, options));
    }
    expect(contentOf(mounted), "after the paste").toEqual(expected);
    if (expected === original) return;
    await undo(mounted);
    expect(contentOf(mounted), "after undoing the paste").toEqual(original);
    await redo(mounted);
    expect(contentOf(mounted), "after redoing the paste").toEqual(expected);
  } finally {
    mounted.unmount();
  }
}

/**
 * Plain text that looks like USFM. Standard view tokenizes a paste (clipboard-semantics S3), so the
 * markers arrive as structure. The hidden-marker views have no tokenizer and refuse any paste
 * holding `\` (`CommandMenuPlugin`, S5): nothing is inserted, and nothing else changes.
 */
async function runUsfmRow(row: UsfmRow, usj: Usj): Promise<void> {
  const mounted = await mountInView(usj, row.view);
  try {
    const original = contentOf(mounted);
    expect(original).toEqual(usj.content);
    if (!original) throw new Error("no USJ");
    const destination = paragraphEndDestination(usj);
    await select(mounted.lexical, usj, destination);
    await paste(mounted.lexical, new Map([["text/plain", row.text]]));
    if (isMarkerHidden(row.view)) {
      expect(contentOf(mounted), "after the refused paste").toEqual(original);
      return;
    }
    const tokens: Item[] =
      row.text === "\\v 9 x"
        ? [{ type: "verse", marker: "v", number: "9" }, "x"]
        : [{ type: "char", marker: "nd", content: ["y"] }];
    const pasted = insertFragment(original, destination, [{ type: "para", content: tokens }], {
      spaceBeforeVerse: false,
    });
    // A pasted verse makes Standard view rebuild part of the paragraph it lands in, re-deriving
    // its verses, and an empty derived `sid` (the 2SA-3 fixture's) does not survive that.
    // Dropping derived metadata is accepted (data-fidelity catalog F-8), so in that paragraph an
    // empty `sid` may be dropped; everything else, non-empty `sid`s included, must survive exactly.
    const settled = (content: Item[] | undefined) =>
      content && row.text === "\\v 9 x"
        ? withoutEmptySidsIn(content, destination.path[0])
        : content;
    const expected = settled(plain(pasted));
    expect(settled(contentOf(mounted)), "after the paste").toEqual(expected);
    await undo(mounted);
    expect(contentOf(mounted), "after undoing the paste").toEqual(original);
    await redo(mounted);
    expect(settled(contentOf(mounted)), "after redoing the paste").toEqual(expected);
  } finally {
    mounted.unmount();
  }
}

const fixtureRows = FIXTURES.map((fixture) => {
  const usj = readFixture(fixture);
  return { fixture, usj, ...rowsFor(fixture, usj) };
});

const KNOWN_FAILURES: { [key: string]: string } = Object.fromEntries(
  fixtureRows.flatMap(({ fixture, usj, ranges, usfm }) =>
    [...ranges, ...usfm].flatMap((row) => {
      const reason = knownFailure(fixture, ("usj" in row && row.usj) || usj, row);
      return reason ? [[row.key, reason]] : [];
    }),
  ),
);

const register = knownFailureRunner(
  KNOWN_FAILURES,
  fixtureRows.flatMap(({ ranges, usfm }) => [...ranges, ...usfm].map((row) => row.key)),
);

describe("clipboard over the testUSFM corpus, per editing view", () => {
  for (const { fixture, usj, ranges, usfm } of fixtureRows)
    describe(fixture, () => {
      for (const row of ranges)
        register(row.key)(
          `${row.range.kind} | ${row.viewName} | ${row.operation}`,
          () => runRangeRow(row, row.usj ?? usj),
          30_000,
        );
      for (const row of usfm)
        register(row.key)(
          `${row.viewName} | paste plain ${row.text}`,
          () => runUsfmRow(row, usj),
          30_000,
        );
    });
});

/**
 * HTML another program put on the clipboard — a web page's paragraphs, with no internal Lexical
 * flavor — pasted into a hidden-marker view: the first paragraph joins the one the caret is in, and
 * each one after it arrives as a `\p` (an HTML paragraph names no marker), its layout styles
 * dropped.
 */
describe.each(enabledViews(["formatted", "paragraph-structure"]))(
  "another program's HTML paragraphs, pasted in the %s view",
  (name) => {
    it("arrive as paragraphs", async () => {
      const usj: Usj = {
        type: "USJ",
        version: "3.1",
        content: [{ type: "para", marker: "q1", content: ["Host text"] }],
      };
      const mounted = await mountInView(usj, editorView(name));
      try {
        await select(mounted.lexical, usj, { path: [0, 0], offset: "Host text".length });
        await paste(
          mounted.lexical,
          new Map([
            ["text/html", '<p style="text-align: center; text-indent: 40px">One</p><p>Two</p>'],
            ["text/plain", "One\n\nTwo"],
          ]),
        );

        expect(contentOf(mounted)).toEqual([
          { type: "para", marker: "q1", content: ["Host textOne"] },
          { type: "para", marker: "p", content: ["Two"] },
        ]);
      } finally {
        mounted.unmount();
      }
    });
  },
);
