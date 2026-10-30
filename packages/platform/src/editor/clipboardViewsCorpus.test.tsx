/**
 * Copy, cut and paste over the rich testUSFM corpus, in every view a user edits Scripture in.
 *
 * Standard view writes and reads its own USFM clipboard (`markerEdit/clipboardCorpusRoundTrip`
 * sweeps it); the hidden-marker views (formatted, paragraph-structure) use Lexical's clipboard
 * flavors. This suite runs the same gestures in all three views, Standard as the reference, over a
 * deterministic sample of ranges from each fixture ({@link sampleRanges}: a whole verse, a range
 * starting or ending inside a char span, one holding a footnote, one across a paragraph boundary,
 * one spanning a whole paragraph, one across a verse number, one inside note content, one holding
 * figures, one ending inside a figure's caption, and one holding a milestone, a verse with
 * alternate or published numbers, an optional break or a sidebar). For each it asserts what
 * matters most to a translator: a cut or paste changes exactly what was selected or pasted and
 * nothing else, what is pasted arrives intact, and undo and redo land exactly on the states before
 * and after. A copy in one view family pasted into the other ({@link runCrossViewRow}) goes in as
 * its html and plain text alone would, without its marker tokens where it comes from Standard view
 * into a hidden-marker view; one in another hidden-marker view pasted into paragraph-structure
 * ({@link hiddenCrossViewRowsFor}) goes in exactly.
 *
 * Simple mode's paragraph-structure view runs every row under each structure protection
 * ({@link protectionsFor}); `protected` is its default. There a paste keeps the document's
 * paragraphs and verses as they are ({@link protectedFragment}, and {@link plainFragment}'s joined
 * lines), and a cut that would change them is refused ({@link isRefusedCut}).
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
 * - an empty derived `sid` that Standard view's rebuild after a pasted verse or paragraph break
 *   drops ({@link settledAfterPaste});
 * - a hidden-marker view's plain-text paste arrives as prose ({@link plainFragment});
 * - a hidden-marker view's paste leaves `\` and `//` out of the text it inserts
 *   ({@link filterFragment});
 * - Standard view sits out ranges with an end inside a char span ({@link viewsFor}).
 *
 * Every row mounts its own editor. The whole suite runs in about three minutes.
 */
import {
  EditorViewName,
  editorView,
  enabledViews,
  knownFailureRunner,
  LIBRARY_VIEWS_ENABLED,
  mountInView,
} from "./editorViews.test-helpers";
import { usfmToClipboardHtml } from "./markerEdit/whitespaceDisplay.plugin.utils";
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
import {
  HIDDEN_VIEW_CLIPBOARD_NAMESPACE,
  removeUnstorableText,
  StructureProtectionMode,
  UnstorableTextRemovedHandler,
  ViewOptions,
} from "shared-react";
import { describe, expect, vi } from "vitest";

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

/**
 * Splits `items` at the point `path`/`offset` (the path relative to `items`) into what lies before
 * and after it. A nested object (a char span, a note) split at its very start or end leaves no
 * empty half behind, as the editor keeps no empty span there; a top-level block keeps both halves,
 * since the join rule rejoins them.
 */
function splitAt(items: Item[], path: number[], offset: number, depth = 0): [Item[], Item[]] {
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
  const [left, right] = splitAt(item.content ?? [], rest, offset, depth + 1);
  const origin = originOf(item);
  const isNested = depth > 0;
  return [
    isNested && left.length === 0 ? before : [...before, withContent(item, left, origin)],
    isNested && right.length === 0 ? after : [withContent(item, right, origin), ...after],
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

/** `content` with no empty `sid` on the verses of the blocks at `first` through `last`. */
function withoutEmptySidsIn(content: Item[], first: number, last = first): Item[] {
  return content.map((block, at) => {
    if (at < first || at > last || typeof block === "string") return block;
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
  | "inside note content"
  | "holds a figure"
  | "ends inside a figure's caption"
  | "holds a milestone"
  | "holds a verse with attributes"
  | "holds an optional break"
  | "holds a sidebar";

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
      if (item.type === "ms" || item.type === "optbreak")
        if (ok(prev) && ok(next))
          add(
            item.type === "ms" ? "holds a milestone" : "holds an optional break",
            at(index - 1, prev.length - 2),
            at(index + 1, 2),
          );
      // From the end of the text before `item`: in its paragraph, or in the paragraph before.
      const startBefore = (): TextPoint | undefined => {
        if (ok(prev)) return at(index - 1, prev.length - 2);
        const previousBlock = content[blockIndex - 1];
        if (!isPara(previousBlock)) return undefined;
        const lastIndex = (previousBlock.content ?? []).length - 1;
        const lastText = previousBlock.content?.[lastIndex];
        return ok(lastText)
          ? { path: [blockIndex - 1, lastIndex], offset: lastText.length - 2 }
          : undefined;
      };
      if (item.type === "verse" && ("altnumber" in item || "pubnumber" in item) && ok(next)) {
        const start = (ok(prev) || index === 0) && startBefore();
        if (start) add("holds a verse with attributes", start, at(index + 1, 2));
      }
      if (item.type === "figure" && ok(item.content?.[0])) {
        const start = startBefore();
        if (start)
          add("ends inside a figure's caption", start, { path: [blockIndex, index, 0], offset: 3 });
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
  // From the end of the paragraph before a sidebar to the start of the one after it.
  content.forEach((block, blockIndex) => {
    if (typeof block === "string" || block.type !== "sidebar") return;
    const before = content[blockIndex - 1];
    const after = content[blockIndex + 1];
    if (!isPara(before) || !isPara(after)) return;
    const lastIndex = (before.content ?? []).length - 1;
    const lastText = before.content?.[lastIndex];
    const firstText = after.content?.[0];
    if (ok(lastText) && ok(firstText))
      add(
        "holds a sidebar",
        { path: [blockIndex - 1, lastIndex], offset: lastText.length - 2 },
        { path: [blockIndex + 1, 0], offset: 2 },
      );
  });
  // From just before the first figure to just after the last: in a fixture with figures in
  // successive paragraphs, one range holds each of them and the paragraph boundary between.
  const figures: [number, number][] = [];
  content.forEach((block, blockIndex) => {
    if (!isPara(block)) return;
    (block.content ?? []).forEach((item, index) => {
      if (typeof item !== "string" && item.type === "figure") figures.push([blockIndex, index]);
    });
  });
  const firstFigure = figures[0];
  const lastFigure = figures[figures.length - 1];
  if (firstFigure && lastFigure) {
    const before = itemAt(content, [firstFigure[0], firstFigure[1] - 1]);
    const after = itemAt(content, [lastFigure[0], lastFigure[1] + 1]);
    if (ok(before) && ok(after))
      add(
        "holds a figure",
        { path: [firstFigure[0], firstFigure[1] - 1], offset: before.length - 2 },
        { path: [lastFigure[0], lastFigure[1] + 1], offset: 2 },
      );
  }
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
 * Standard view sits out the ranges with an end inside a char span or a figure. There the end lies
 * past the construct's opening glyph or before its closing one, so the range holds marker bytes
 * without their pair — a marker edit, not the range of text this suite models: a cut that takes the
 * opener unwraps the span as deletion damage, one that takes the closer leaves it running on
 * unclosed, and a copy carries an opener with no closer (`closed="false"`). The marker-edit and
 * `partialConstructClipboard` suites own that.
 */
function viewsFor(kind: RangeKind | undefined): { name: string; view: ViewOptions }[] {
  const isPartialConstruct =
    kind === "starts inside a char style" ||
    kind === "ends inside a char style" ||
    kind === "ends inside a figure's caption";
  const names: EditorViewName[] = isPartialConstruct
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
 * The paste payloads. "Ctrl+V" in a hidden-marker view is everything the copy wrote, the view's own
 * node copy (`application/x-lexical-editor`) included: there Ctrl+V, the context menu's Paste and
 * the Edit menu's Paste run the host's native paste (`EditorOptions.requestNativePaste`), which
 * delivers every flavor. In Standard view they read the clipboard itself, which delivers the html
 * and plain text alone ({@link isWithoutLexicalFlavor}). "another app's html" is the html and plain
 * text alone, as a copy that went through another program arrives. "plain text" is Ctrl+Shift+V
 * (`pasteSelectionAsPlainText`). A cut is pasted back where it was cut from, both ways.
 */
type Operation =
  | "copy, Ctrl+V"
  | "copy, paste from another app's html"
  | "copy, paste plain text"
  | "cut"
  | "cut, Ctrl+V back"
  | "cut, paste back from another app's html";

const OPERATIONS: Operation[] = [
  "copy, Ctrl+V",
  "copy, paste from another app's html",
  "copy, paste plain text",
  "cut",
  "cut, Ctrl+V back",
  "cut, paste back from another app's html",
];

const isCut = (operation: Operation) => operation.startsWith("cut");

/**
 * Whether a range row's paste carries no node copy: every operation but Ctrl+V, and Ctrl+V in a
 * view without the host's native paste, which only the hidden-marker views use.
 */
const isWithoutLexicalFlavor = ({ operation, view }: Pick<RangeRow, "operation" | "view">) =>
  (operation !== "copy, Ctrl+V" && operation !== "cut, Ctrl+V back") ||
  view.markerMode !== "hidden";

const LEXICAL_FLAVOR = "application/x-lexical-editor";

/**
 * Plain text pasted where a copy would be: text that looks like USFM, and text holding a `/` — a
 * lone one, which every view keeps, and a `//`, which a hidden-marker view cannot store as text.
 * Each with what a hidden-marker view inserts for it and the notice's `removed` (none: no notice).
 */
const PLAIN_TEXTS = [
  { text: "\\v 9 x", hiddenInserts: "v 9 x", removed: ["\\"] },
  { text: "\\nd y\\nd*", hiddenInserts: "nd ynd*", removed: ["\\"] },
  { text: "and/or", hiddenInserts: "and/or", removed: [] },
  { text: "1/2", hiddenInserts: "1/2", removed: [] },
  { text: "https://example.org", hiddenInserts: "https:example.org", removed: ["//"] },
] as const;

type PlainText = (typeof PLAIN_TEXTS)[number];

/**
 * The structure protections a view runs under. Simple mode, the app's paragraph-structure view,
 * offers all three and defaults to `protected` (`computeEffectiveStructureProtection`); the other
 * views run as Power mode and the library mounts them, `off`.
 */
function protectionsFor(viewName: string): StructureProtectionMode[] {
  return viewName === "paragraph-structure" ? ["off", "guarded", "protected"] : ["off"];
}

interface RangeRow {
  key: string;
  range: SampledRange;
  viewName: string;
  view: ViewOptions;
  protection: StructureProtectionMode;
  operation: Operation;
  /** The document the row mounts, when it is not the fixture: see {@link inNoteScaffold}. */
  usj?: Usj;
  /** The view the copy is made in, when it is not the row's own: see {@link hiddenCrossViewRowsFor}. */
  copyFrom?: { name: string; view: ViewOptions };
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

interface PlainRow {
  key: string;
  viewName: string;
  view: ViewOptions;
  protection: StructureProtectionMode;
  text: PlainText["text"];
  /** What a hidden-marker view inserts, and what its one notice names as removed. */
  hidden: Pick<PlainText, "hiddenInserts" | "removed">;
}

/**
 * A copy in one view family pasted into the other with Ctrl+V: Standard view into Simple mode's
 * paragraph-structure view, under each of its protections, and back.
 */
interface CrossViewRow {
  key: string;
  range: SampledRange;
  from: { name: string; view: ViewOptions };
  to: { name: string; view: ViewOptions };
  protection: StructureProtectionMode;
}

/** The cross-view rows ({@link CrossViewRow}) for the ranges both views run. */
function crossViewRowsFor(fixture: string, ranges: SampledRange[]): CrossViewRow[] {
  const views = enabledViews(["standard", "paragraph-structure"]);
  if (views.length < 2) return [];
  const standard = { name: "standard", view: editorView("standard") };
  const hidden = { name: "paragraph-structure", view: editorView("paragraph-structure") };
  const rows: CrossViewRow[] = [];
  for (const range of ranges) {
    if (!viewsFor(range.kind).some(({ name }) => name === "standard")) continue;
    for (const [from, to] of [
      [standard, hidden],
      [hidden, standard],
    ])
      for (const protection of protectionsFor(to.name))
        rows.push({
          key: `${fixture} | ${range.kind} | ${from.name} to ${to.name} | ${protection} | copy, Ctrl+V`,
          range,
          from,
          to,
          protection,
        });
  }
  return rows;
}

/**
 * A copy in another hidden-marker view pasted into Simple mode's paragraph-structure view with
 * Ctrl+V, under each of its protections: from Power mode's Preview and the text grid's block-verse
 * column (read-only, so a copy is all a user does there) and, in a run with the library-only views,
 * from the formatted view. Every hidden-marker view reads the others' node copy, so the paste is
 * exactly what a copy and paste within paragraph-structure gives; paragraph-structure's own gutter
 * glyphs, which no node copy holds, are rebuilt for each pasted paragraph.
 */
function hiddenCrossViewRowsFor(fixture: string, usj: Usj): RangeRow[] {
  const sources = enabledViews(["preview", "block-verse", "formatted"]);
  const to = { name: "paragraph-structure", view: editorView("paragraph-structure") };
  const rows: RangeRow[] = [];
  for (const range of sampleRanges(usj)) {
    if (!viewsFor(range.kind).some(({ name }) => name === to.name)) continue;
    for (const from of sources)
      for (const protection of protectionsFor(to.name))
        rows.push({
          key: `${fixture} | ${range.kind} | ${from} to ${to.name} | ${protection} | copy, Ctrl+V`,
          range,
          viewName: to.name,
          view: to.view,
          protection,
          operation: "copy, Ctrl+V",
          copyFrom: { name: from, view: editorView(from) },
        });
  }
  return rows;
}

function rowsFor(fixture: string, usj: Usj): { ranges: RangeRow[]; plainTexts: PlainRow[] } {
  const ranges: RangeRow[] = [];
  for (const range of sampleRanges(usj))
    for (const { name: viewName, view } of viewsFor(range.kind)) {
      const scaffold = viewName === "footnotes-pane-row" ? inNoteScaffold(usj, range) : undefined;
      for (const protection of protectionsFor(viewName))
        for (const operation of OPERATIONS)
          ranges.push({
            key: `${fixture} | ${range.kind} | ${viewName} | ${protection} | ${operation}`,
            range: scaffold?.range ?? range,
            viewName,
            view,
            protection,
            operation,
            usj: scaffold?.usj,
          });
    }
  const plainTexts: PlainRow[] = [];
  for (const { name: viewName, view } of viewsFor(undefined))
    for (const protection of protectionsFor(viewName))
      for (const { text, ...hidden } of PLAIN_TEXTS)
        plainTexts.push({
          key: `${fixture} | ${viewName} | ${protection} | paste plain ${text}`,
          viewName,
          view,
          protection,
          text,
          hidden,
        });
  return { ranges, plainTexts };
}

/** How a row's paste reaches the editor. */
type PasteRoute = "lexical" | "html" | "plain";

/**
 * The route a range row's paste takes: plain text for Ctrl+Shift+V; html for the payloads without
 * a node copy, and for a copy that writes none ({@link writesNodeCopy}); the node copy otherwise —
 * under `protected` structure too, whose sanitizer (`StructureKeyboardPlugin`) flattens it as it
 * flattens html.
 */
function pasteRoute(row: RangeRow): PasteRoute {
  if (row.operation === "copy, paste plain text") return "plain";
  if (isWithoutLexicalFlavor(row) || !writesNodeCopy(row.range)) return "html";
  return "lexical";
}

/**
 * Whether a copy of `range` writes the editor's own node copy. Neither Standard view nor a
 * hidden-marker view writes one for a range ending inside a figure, which a node copy can carry
 * only whole.
 */
function writesNodeCopy(range: SampledRange): boolean {
  return range.kind !== "ends inside a figure's caption";
}

/**
 * Whether a cut of the row's range is refused: one ending inside a figure in every view, and under
 * `protected` structure (`$shouldBlockSelectionReplacement`) one crossing a paragraph boundary or
 * holding a verse or chapter marker. A refused cut changes nothing and writes nothing to the
 * clipboard.
 */
function isRefusedCut(row: RangeRow, copied: Item[]): boolean {
  if (!isCut(row.operation)) return false;
  // A cut that would take part of a figure is refused in every view (`OpaqueBlockGuardPlugin`).
  if (row.range.kind === "ends inside a figure's caption") return true;
  if (row.protection !== "protected") return false;
  const { start, end } = row.range;
  return start.path[0] !== end.path[0] || holdsStructuralMarker(copied);
}

/** Whether `fragment` holds a verse or chapter marker anywhere. */
function holdsStructuralMarker(fragment: Item[]): boolean {
  return fragment.some(
    (item) =>
      typeof item !== "string" &&
      (item.type === "verse" ||
        item.type === "chapter" ||
        holdsStructuralMarker(item.content ?? [])),
  );
}

/**
 * Why a row is known to fail, or `undefined`. Each reason names a finding in paranext-core's
 * Scripture-Data-Fidelity-Catalog, led by the ticket that will fix it where one is filed, or by
 * "accepted" where the loss is the intended behavior; a row that starts passing fails, so a fix
 * deletes its rule.
 */
function knownFailure(fixture: string, usj: Usj, row: RangeRow | PlainRow): string | undefined {
  if ("range" in row) {
    const { kind, start, end } = row.range;
    const copied = sliceUsj(usj.content, start, end);
    // Accepted: html carries less than the editor's own node copy, which a paste within the
    // editor takes instead (clipboard-semantics S5).
    if (
      isMarkerHidden(row.view) &&
      row.operation !== "cut" &&
      !isRefusedCut(row, copied) &&
      // Inside one string, the copy carries only text, never the note or span around it.
      kind !== "inside note content" &&
      pasteRoute(row) === "html" &&
      // Protected structure drops verses, numbers and all, whichever flavor brings them.
      holdsHtmlLossyContent(row.protection === "protected" ? protectedFragment(copied) : copied)
    )
      return "accepted: html from another program, or from a copy ending inside a figure, carries no char attributes (`closed`), note details, milestones, alternate or published verse numbers, or figures, and brings a note's display spacers back as text";
    // Not yet tracked: the block-verse layout builds each verse as a block of its own, and its node
    // copy carries those blocks.
    if (row.copyFrom?.name === "block-verse" && holdsVerseBlockBreak(copied, start, row.protection))
      return "not yet tracked: the block-verse layout's node copy carries each verse as a block of its own, so pasted into paragraph-structure it starts a paragraph at each verse, the space before the verse moving with it and, after a nameless paragraph, leaving an empty `\\p` (under `protected`, it joins the blocks with an extra space)";
    // Not yet tracked: a hidden-marker view's plain-text paste leaves out the leading spaces of a
    // line it starts a new paragraph with, which the node copy keeps.
    if (
      isMarkerHidden(row.view) &&
      pasteRoute(row) === "plain" &&
      row.protection !== "protected" &&
      startsALaterParagraphWithASpace(copied)
    )
      return "not yet tracked: a hidden-marker view's plain-text paste drops the leading spaces of each line it starts a new paragraph with";
  }
  // TODO(PT-4388): read a bare `\` as a nameless marker once ParatextData 9.6 is in; the
  // tokenizer change waits on that upgrade.
  if (row.viewName === "standard" && fixture === "testUSFM-2SA-5.usj") {
    if (
      // A paste of text holding no marker and no `//` tokenizes to that text either way.
      ("text" in row && /\\|\/\//.test(row.text)) ||
      ("range" in row &&
        // Standard view's Ctrl+V reads the html and plain text, as another app's html arrives.
        (row.operation === "copy, Ctrl+V" ||
          row.operation === "copy, paste from another app's html" ||
          row.operation === "copy, paste plain text" ||
          ((row.operation === "cut, Ctrl+V back" ||
            row.operation === "cut, paste back from another app's html") &&
            (row.range.kind === "across a paragraph boundary" ||
              row.range.kind === "spans a whole paragraph"))))
    )
      return "PT-4388: Standard's text path over deliberately damaged USFM: a nameless marker re-tokenizes as text, and a bare backslash keeps the paste a pending literal";
  }
  return undefined;
}

/**
 * Whether a copy of `fragment`, which starts at `start`, in the block-verse layout holds a verse
 * block's edge that a paste into paragraph-structure turns into structure: a verse that does not
 * open a named paragraph opens a block of its own there. Under `protected`, which joins the blocks,
 * only such a verse after the copy's start does.
 */
function holdsVerseBlockBreak(
  fragment: Item[],
  start: TextPoint,
  protection: StructureProtectionMode,
): boolean {
  return fragment.some(
    (block, blockIndex) =>
      typeof block !== "string" &&
      (block.content ?? []).some((item, index) => {
        if (typeof item === "string" || item.type !== "verse") return false;
        const indexInParagraph = blockIndex === 0 ? start.path[1] + index : index;
        if (indexInParagraph === 0 && block.marker) return false;
        return protection !== "protected" || blockIndex > 0 || index > 0;
      }),
  );
}

/** Whether a fragment holds what the html flavor cannot carry: a note, a milestone, a verse's or
 * chapter's alternate or published number, an unknown construct (a figure, an optional break), or
 * an implicitly closed char span. */
function holdsHtmlLossyContent(fragment: Item[]): boolean {
  return fragment.some(
    (item) =>
      typeof item !== "string" &&
      (item.type === "note" ||
        item.type === "ms" ||
        ((item.type === "verse" || item.type === "chapter") &&
          ("altnumber" in item || "pubnumber" in item)) ||
        !KNOWN_TYPES.has(item.type) ||
        (item.type === "char" && Reflect.get(item, "closed") === "false") ||
        holdsHtmlLossyContent(item.content ?? [])),
  );
}

/** The USJ types the editor builds a node of its own for; any other becomes an unknown construct. */
const KNOWN_TYPES = new Set([
  "book",
  "chapter",
  "verse",
  "char",
  "para",
  "note",
  "ms",
  "unmatched",
  "table",
  "table:row",
  "table:cell",
]);

/** Whether a paragraph after the first in `fragment` starts its text with a space, ahead of any verse
 * marker (a plain-text copy has none). */
function startsALaterParagraphWithASpace(fragment: Item[]): boolean {
  return fragment
    .slice(1)
    .some(
      (item) =>
        typeof item !== "string" &&
        item.type === "para" &&
        /^\s/.test(
          contentText(
            (item.content ?? []).filter(
              (child) => typeof child === "string" || child.type !== "verse",
            ),
          ),
        ),
    );
}

const isMarkerHidden = (view: ViewOptions) => view.markerMode !== "editable";

/** The document characters a paste at `at` lands between: the filter's context. */
interface PasteContext {
  before: string;
  after: string;
}

/** The characters of the string at `at` on either side of it ({@link PasteContext}). */
function contextAt(content: Item[], at: TextPoint): PasteContext {
  const text = stringAt(content, at.path);
  return { before: text[at.offset - 1] ?? "", after: text[at.offset] ?? "" };
}

/**
 * The string a paste of `fragment` puts right at the insertion point on `edge`, if any: inserting
 * merges a leading (or trailing) paragraph's content into the paragraph there, so the walk goes
 * down through paragraphs, never into an inline span, whose markers keep its text apart from the
 * document's.
 */
function stringAtEdge(fragment: Item[], edge: "first" | "last"): string | undefined {
  const item = edge === "first" ? fragment[0] : fragment[fragment.length - 1];
  if (typeof item === "string") return item;
  if (item?.type === "para") return stringAtEdge(item.content ?? [], edge);
  return undefined;
}

/**
 * What a hidden-marker view's paste of `fragment` at a point with `context` inserts: its text
 * without `\` and `//` (`UnstorableTextPlugin`), which these views cannot store as text — and
 * without a `/` at either end that would make `//` with a `/` already in the document there. Only
 * text is filtered: a stray marker (`unmatched`) a node or html flavor carries arrives as that node,
 * its `\` intact. A plain text flavor carries the stray marker as text, so it reaches here as a
 * string and loses its `\`.
 */
function filterFragment(fragment: Item[], context: PasteContext, removed: string[] = []): Item[] {
  const first = stringAtEdge(fragment, "first");
  const last = stringAtEdge(fragment, "last");
  const filter = (items: Item[]): Item[] =>
    items.flatMap((item): Item[] => {
      if (typeof item === "string") {
        const filtered = removeUnstorableText(
          item,
          item === first ? context.before : "",
          item === last ? context.after : "",
        );
        for (const character of filtered.removed)
          if (!removed.includes(character)) removed.push(character);
        return filtered.text ? [filtered.text] : [];
      }
      if (item.type === "unmatched" || item.content === undefined) return [item];
      return [withContent(item, filter(item.content), originOf(item))];
    });
  return filter(fragment);
}

/**
 * What a paste of `fragment` at a point with `context` inserts in `view`, and what it reports: in a
 * hidden-marker view, {@link filterFragment}'s text and one notice naming what that removed, if
 * anything; elsewhere, the fragment and no notice.
 */
function pastedIn(
  view: ViewOptions,
  fragment: Item[],
  context: PasteContext,
): { inserted: Item[]; notices: number; removed: string[] } {
  if (!isMarkerHidden(view)) return { inserted: fragment, notices: 0, removed: [] };
  const removed: string[] = [];
  const inserted = filterFragment(fragment, context, removed);
  return { inserted, notices: removed.length > 0 ? 1 : 0, removed };
}

/** The text `fragment` holds, a stray marker (`unmatched`, shown as its own bytes in every view)
 * included. With `isHidden`, without the content of an unknown construct (a figure's caption, a
 * sidebar), which a hidden-marker view hides. */
function contentText(fragment: Item[], isHidden = false): string {
  return fragment
    .map((item) => {
      if (typeof item === "string") return item;
      if (item.type === "unmatched") return `\\${item.marker ?? ""}`;
      if (isHidden && !KNOWN_TYPES.has(item.type)) return "";
      return contentText(item.content ?? [], isHidden);
    })
    .join("");
}

/** Every item of `type` in `fragment`, at any depth. */
function itemsOfType(fragment: Item[], type: string): MarkerObject[] {
  return fragment.flatMap((item) =>
    typeof item === "string"
      ? []
      : [...(item.type === type ? [item] : []), ...itemsOfType(item.content ?? [], type)],
  );
}

/** How many `\` and `/` characters `text` holds: the characters a hidden-marker view's paste
 * filter acts on. */
function slashCounts(text: string): { backslashes: number; slashes: number } {
  return {
    backslashes: text.split("\\").length - 1,
    slashes: text.split("/").length - 1,
  };
}

/**
 * Checks a hidden-marker view's text/plain copy of `copied` against what the view shows. The paste
 * filter strips `\` and `//` from this text, so a paste cannot reveal one the copy added: a gutter
 * glyph (`\q1 `) or a marker leaking into the copy. So every `\` and `/` there must be one the
 * content itself holds, and no paragraph's gutter glyph and no figure caption (hidden) may appear;
 * a collapsed note's text must (a plain-text paste needs it).
 */
function expectHiddenViewPlainCopy(text: string, copied: Item[]): void {
  const shown = contentText(copied, true);
  expect(slashCounts(text), "the copy's text/plain adds no `\\` or `/`").toEqual(
    slashCounts(contentText(copied)),
  );
  for (const para of itemsOfType(copied, "para"))
    if (para.marker && !shown.includes(`\\${para.marker}`))
      expect(text, `the copy's text/plain holds no \\${para.marker} gutter glyph`).not.toContain(
        `\\${para.marker}`,
      );
  for (const figure of itemsOfType(copied, "figure")) {
    const caption = contentText(figure.content ?? []);
    if (caption && !shown.includes(caption))
      expect(text, "the copy's text/plain holds no figure caption").not.toContain(caption);
  }
  for (const note of itemsOfType(copied, "note"))
    for (const noteText of allStrings(note.content ?? []))
      if (noteText.trim())
        expect(text, "the copy's text/plain holds the collapsed note's text").toContain(
          noteText.trim(),
        );
}

/**
 * What a plain-text paste into a hidden-marker view inserts: the text itself — into the string at
 * the caret for one line; one paragraph per line otherwise, each new paragraph with the host's
 * marker (`ParaNode.insertNewAfter`). These views have no USFM tokenizer, so a copy's text/plain —
 * prose, no markers — arrives as prose: the documented hidden-view copy-out (clipboard-semantics
 * S5), not a loss this suite can hold the paste to.
 *
 * Under `protected` structure the lines go into the paragraph at the caret instead
 * (`UnstorableTextPlugin`): each run of line breaks becomes one space, a trailing one goes, and
 * each tab becomes a space.
 */
function plainFragment(
  content: Item[],
  at: TextPoint,
  text: string,
  protection: StructureProtectionMode,
): Item[] {
  if (protection === "protected" && /[\r\n]/.test(text)) {
    const joined = text
      .replace(/[\r\n]+$/, "")
      .replace(/[\r\n]+/g, " ")
      .replace(/\t/g, " ");
    return wrapLike(content, at.path, joined);
  }
  const lines = text.split(/\r?\n/);
  if (lines.length === 1) return wrapLike(content, at.path, text);
  const host = itemAt(content, at.path.slice(0, 1));
  const marker = typeof host === "string" ? undefined : host?.marker;
  return lines.map((line) => ({ type: "para", marker, content: line ? [line] : [] }));
}

/**
 * What `protected` structure's html paste inserts for `fragment` (`$sanitizeNodesForProtectedStructure`):
 * every paragraph unwrapped into the paragraph at the caret, a space between one paragraph's
 * content and the next so their words do not fuse; every verse and chapter marker in or between
 * them dropped; everything else (text, char spans, notes) as it is. A paragraph left with nothing
 * adds no space.
 */
function protectedFragment(fragment: Item[]): Item[] {
  const flatten = (item: Item): Item[] => {
    if (typeof item === "string") return [item];
    if (item.type === "verse" || item.type === "chapter") return [];
    if (item.type === "para") return (item.content ?? []).flatMap(flatten);
    return [item];
  };
  const result: Item[] = [];
  for (const item of fragment) {
    const flattened = flatten(item);
    if (flattened.length === 0) continue;
    if (typeof item !== "string" && item.type === "para" && result.length > 0) result.push(" ");
    result.push(...flattened);
  }
  // Adjacent text nodes merge once inserted.
  return result.reduce<Item[]>((merged, item) => {
    const last = merged[merged.length - 1];
    if (typeof item === "string" && typeof last === "string")
      merged[merged.length - 1] = last + item;
    else merged.push(item);
    return merged;
  }, []);
}

/** `fragment` with each stray marker (`unmatched`) replaced by the text its glyph shows. */
function strayMarkersAsText(fragment: Item[]): Item[] {
  return fragment.map((item) => {
    if (typeof item === "string") return item;
    if (item.type === "unmatched") return `\\${item.marker ?? ""}`;
    if (item.content === undefined) return item;
    return withContent(item, strayMarkersAsText(item.content), originOf(item));
  });
}

/** `items` (inline content) inside the top-level block holding `at`, so they join into it. */
function inHostBlock(content: Item[], at: TextPoint, items: Item[]): Item[] {
  const host = itemAt(content, at.path.slice(0, 1));
  if (!host || typeof host === "string") throw new Error("no block to paste into");
  return [withContent(host, items, originOf(host))];
}

/**
 * What a range row's paste of `copied` (whose text/plain is `text`) at `at` in `content` puts in
 * the document, before the paste filter ({@link pastedIn}).
 */
function pasteFragment(
  row: RangeRow,
  content: Item[],
  at: TextPoint,
  copied: Item[],
  text: string,
): Item[] {
  const route = pasteRoute(row);
  if (route === "plain" && isMarkerHidden(row.view))
    return plainFragment(content, at, text, row.protection);
  if (route === "lexical")
    // Protected structure flattens a node copy as it flattens html, but keeps every node it
    // leaves, a stray marker among them.
    return row.protection === "protected"
      ? inHostBlock(content, at, protectedFragment(copied))
      : copied;
  const fragment = withoutDerivedAttributes(copied);
  if (row.protection === "protected" && route === "html")
    // The locked html route doesn't rebuild a stray marker: its sanitizer keeps the glyph's text
    // but not its element, so the `\` is filtered like any pasted `\`.
    return inHostBlock(content, at, protectedFragment(strayMarkersAsText(fragment)));
  return fragment;
}

/**
 * How a range row reads the document after its paste: as it is, except where Standard view
 * rebuilds. A paste through a text flavor that brings a verse or a paragraph break makes Standard
 * view rebuild the paragraphs it lands in, re-deriving their verses, and an empty derived `sid`
 * there (the 2SA-3 and web-matthew-5 fixtures') does not survive that. Dropping derived metadata
 * is accepted (data-fidelity catalog F-8), so in those paragraphs an empty `sid` is left out on
 * both sides.
 */
function settledAfterPaste(
  row: RangeRow,
  at: TextPoint,
  inserted: Item[],
): (content: Item[] | undefined) => Item[] | undefined {
  const blocks = inserted.length;
  if (
    isMarkerHidden(row.view) ||
    pasteRoute(row) === "lexical" ||
    (itemsOfType(inserted, "verse").length === 0 && blocks < 2)
  )
    return (content) => content;
  return (content) => content && withoutEmptySidsIn(content, at.path[0], at.path[0] + blocks - 1);
}

/** Selects `start`..`end` and copies it, returning what reached the clipboard. */
async function copyHere(
  editor: LexicalEditor,
  usj: Usj,
  start: TextPoint,
  end: TextPoint,
): Promise<Map<string, string>> {
  await select(editor, usj, start, end);
  return dispatchClipboard(editor, COPY_COMMAND);
}

/** Copies `start`..`end` of `usj` in an editor of its own mounted in `view`. */
async function copyIn(
  view: ViewOptions,
  usj: Usj,
  start: TextPoint,
  end: TextPoint,
): Promise<Map<string, string>> {
  const source = await mountInView(usj, view);
  try {
    return await copyHere(source.lexical, usj, start, end);
  } finally {
    source.unmount();
  }
}

/** Selects `start`..`end` and cuts it, returning what reached the clipboard. */
async function cut(
  editor: LexicalEditor,
  usj: Usj,
  start: TextPoint,
  end: TextPoint,
): Promise<Map<string, string>> {
  await select(editor, usj, start, end);
  return dispatchClipboard(editor, CUT_COMMAND);
}

async function runRangeRow(row: RangeRow, usj: Usj): Promise<void> {
  const onRemoved = vi.fn<UnstorableTextRemovedHandler>();
  const mounted = await mountInView(usj, row.view, {
    onUnstorableTextRemoved: onRemoved,
    structureProtectionMode: row.protection,
  });
  try {
    const original = contentOf(mounted);
    // The load round trip is another suite's subject; this one starts from what loaded.
    expect(original).toEqual(usj.content);
    if (!original) throw new Error("no USJ");
    const { start, end } = row.range;
    const { lexical } = mounted;
    const options: JoinOptions = { spaceBeforeVerse: isMarkerHidden(row.view) };
    const copied = sliceUsj(original, start, end);

    if (isCut(row.operation)) {
      const clipboard = await cut(lexical, usj, start, end);
      if (isRefusedCut(row, copied)) {
        expect(contentOf(mounted), "after the refused cut").toEqual(original);
        expect([...clipboard.keys()], "what the refused cut wrote").toEqual([]);
        return;
      }
      // The model, not its plain copy, keeps the identity a split object's halves rejoin by.
      const cutModel = removeRange(original, start, end, options);
      const cutContent = plain(cutModel);
      expect(contentOf(mounted), "after the cut").toEqual(cutContent);
      if (row.operation === "cut") {
        await undo(mounted);
        expect(contentOf(mounted), "after undoing the cut").toEqual(original);
        await redo(mounted);
        expect(contentOf(mounted), "after redoing the cut").toEqual(cutContent);
        return;
      }
      const payload = new Map(clipboard);
      if (isWithoutLexicalFlavor(row)) payload.delete(LEXICAL_FLAVOR);
      // The caret the cut leaves where the range started.
      await paste(lexical, payload);
      const { inserted, notices, removed } = pastedIn(
        row.view,
        pasteFragment(row, cutModel, start, copied, clipboard.get("text/plain") ?? ""),
        contextAt(cutModel, start),
      );
      const settled = settledAfterPaste(row, start, inserted);
      const expected = settled(plain(insertFragment(cutModel, start, inserted, options)));
      expect(settled(contentOf(mounted)), "after pasting the cut back").toEqual(expected);
      expect(onRemoved, "notices").toHaveBeenCalledTimes(notices);
      if (notices > 0) expect(onRemoved).toHaveBeenCalledWith({ source: "paste", removed });
      await undo(mounted);
      expect(contentOf(mounted), "after undoing the paste").toEqual(cutContent);
      await redo(mounted);
      expect(settled(contentOf(mounted)), "after redoing the paste").toEqual(expected);
      return;
    }

    const copyView = row.copyFrom?.view ?? row.view;
    const clipboard = row.copyFrom
      ? await copyIn(row.copyFrom.view, usj, start, end)
      : await copyHere(lexical, usj, start, end);
    const text = clipboard.get("text/plain") ?? "";
    expect(text, "the copy wrote text/plain").toBeTruthy();
    expect(clipboard.has(LEXICAL_FLAVOR), "the copy wrote its node copy").toBe(
      writesNodeCopy(row.range),
    );
    if (isMarkerHidden(copyView) && writesNodeCopy(row.range))
      expect(JSON.parse(clipboard.get(LEXICAL_FLAVOR) ?? "{}").namespace).toBe(
        HIDDEN_VIEW_CLIPBOARD_NAMESPACE,
      );
    if (isMarkerHidden(copyView)) expectHiddenViewPlainCopy(text, copied);
    const payload = new Map(clipboard);
    if (isWithoutLexicalFlavor(row)) payload.delete(LEXICAL_FLAVOR);
    if (row.operation === "copy, paste plain text") payload.delete("text/html");

    const destination = pasteDestination(usj, row.range);
    await select(lexical, usj, destination);
    await paste(lexical, payload);

    const { inserted, notices, removed } = pastedIn(
      row.view,
      pasteFragment(row, original, destination, copied, text),
      contextAt(original, destination),
    );
    const settled = settledAfterPaste(row, destination, inserted);
    const expected = settled(plain(insertFragment(original, destination, inserted, options)));
    expect(settled(contentOf(mounted)), "after the paste").toEqual(expected);
    expect(onRemoved, "notices").toHaveBeenCalledTimes(notices);
    if (notices > 0) expect(onRemoved).toHaveBeenCalledWith({ source: "paste", removed });
    await undo(mounted);
    expect(contentOf(mounted), "after undoing the paste").toEqual(original);
    await redo(mounted);
    expect(settled(contentOf(mounted)), "after redoing the paste").toEqual(expected);
  } finally {
    mounted.unmount();
  }
}

/**
 * Plain text pasted at a paragraph's end. Standard view tokenizes a paste (clipboard-semantics S3),
 * so USFM markers arrive as structure. The hidden-marker views have no tokenizer and cannot store a
 * `\` or a `//` as text, so the text goes in without them ({@link filterFragment}) and the host is
 * told once; a lone `/` goes in as it is, untold.
 */
async function runPlainRow(row: PlainRow, usj: Usj): Promise<void> {
  const onRemoved = vi.fn<UnstorableTextRemovedHandler>();
  const mounted = await mountInView(usj, row.view, {
    onUnstorableTextRemoved: onRemoved,
    structureProtectionMode: row.protection,
  });
  try {
    const original = contentOf(mounted);
    expect(original).toEqual(usj.content);
    if (!original) throw new Error("no USJ");
    const destination = paragraphEndDestination(usj);
    await select(mounted.lexical, usj, destination);
    await paste(mounted.lexical, new Map([["text/plain", row.text]]));
    if (isMarkerHidden(row.view)) {
      // The literal expectations hold only away from a `/` already in the document, which a
      // pasted `/` beside it would make `//`.
      const { before, after } = contextAt(original, destination);
      expect([before, after], "no `/` beside the paste").not.toContain("/");
      const { hiddenInserts, removed } = row.hidden;
      const expected = plain(
        insertFragment(
          original,
          destination,
          plainFragment(original, destination, hiddenInserts, row.protection),
          { spaceBeforeVerse: true },
        ),
      );
      expect(contentOf(mounted), "after the paste").toEqual(expected);
      expect(onRemoved, "notices").toHaveBeenCalledTimes(removed.length > 0 ? 1 : 0);
      if (removed.length > 0)
        expect(onRemoved).toHaveBeenCalledWith({ source: "paste", removed: [...removed] });
      await undo(mounted);
      expect(contentOf(mounted), "after undoing the paste").toEqual(original);
      await redo(mounted);
      expect(contentOf(mounted), "after redoing the paste").toEqual(expected);
      return;
    }
    const tokens: Item[] =
      row.text === "\\v 9 x"
        ? [{ type: "verse", marker: "v", number: "9" }, "x"]
        : row.text === "\\nd y\\nd*"
          ? [{ type: "char", marker: "nd", content: ["y"] }]
          : // USFM's optional line break.
            row.text
              .split("//")
              .flatMap((part, index): Item[] => [
                ...(index > 0 ? [{ type: "optbreak" }] : []),
                ...(part ? [part] : []),
              ]);
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

/**
 * `usfm` with its marker tokens gone: each `\`, with a nested marker's `+`, its name, and a closer's
 * `*` or, after a name, one separator space; a bare `\` leaves the space after it. Spelled here
 * rather than taken from the editor, so the model does not lean on what it checks.
 */
function withoutMarkers(usfm: string): string {
  return usfm.replace(/\\\+?(?:[\w-]+(?:\*| ?)|\*?)/g, "");
}

/**
 * A copy in one view family, pasted into the other with every flavor it wrote, goes in as its html
 * and plain text alone would: each family's node copy holds node shapes only that family builds
 * (Standard view's marker text, a hidden-marker view's display nodes), so neither reads the other's.
 * Into a hidden-marker view that means Standard view's text with its marker tokens gone
 * ({@link withoutMarkers}), which the node copy's presence is what permits.
 * What the html and plain text make of a copy is the other rows' subject; this pins that the node
 * copy is passed over. Into Standard view, whose Ctrl+V reads the html and plain text itself, every
 * flavor is what a native paste (a host menu's own Paste) delivers.
 */
async function runCrossViewRow(row: CrossViewRow, usj: Usj): Promise<void> {
  const { start, end } = row.range;
  const source = await mountInView(usj, row.from.view);
  let clipboard: Map<string, string>;
  try {
    await select(source.lexical, usj, start, end);
    clipboard = await dispatchClipboard(source.lexical, COPY_COMMAND);
  } finally {
    source.unmount();
  }
  expect(clipboard.has(LEXICAL_FLAVOR), "the copy wrote its node copy").toBe(true);
  const withoutNodeCopy = new Map(clipboard);
  withoutNodeCopy.delete(LEXICAL_FLAVOR);
  // Standard view's copy is USFM, and its node copy tells a hidden-marker view so: the view takes
  // the marker tokens out, so what goes in is that text without them.
  if (isMarkerHidden(row.to.view)) {
    const text = withoutMarkers(clipboard.get("text/plain") ?? "");
    withoutNodeCopy.set("text/plain", text);
    withoutNodeCopy.set("text/html", usfmToClipboardHtml(text));
  }

  const target = await mountInView(usj, row.to.view, { structureProtectionMode: row.protection });
  try {
    const original = contentOf(target);
    const destination = pasteDestination(usj, row.range);
    await select(target.lexical, usj, destination);
    await paste(target.lexical, clipboard);
    const pasted = contentOf(target);
    expect(pasted, "the paste changed the document").not.toEqual(original);
    await undo(target);
    expect(contentOf(target), "after undoing the paste").toEqual(original);
    await select(target.lexical, usj, destination);
    await paste(target.lexical, withoutNodeCopy);
    expect(pasted, "as the html and plain text alone go in").toEqual(contentOf(target));
  } finally {
    target.unmount();
  }
}

const fixtureRows = FIXTURES.map((fixture) => {
  const usj = readFixture(fixture);
  return {
    fixture,
    usj,
    ...rowsFor(fixture, usj),
    crossViews: crossViewRowsFor(fixture, sampleRanges(usj)),
    hiddenCrossViews: hiddenCrossViewRowsFor(fixture, usj),
  };
});

const KNOWN_FAILURES: { [key: string]: string } = Object.fromEntries(
  fixtureRows.flatMap(({ fixture, usj, ranges, plainTexts, hiddenCrossViews }) =>
    [...ranges, ...plainTexts, ...hiddenCrossViews].flatMap((row) => {
      const reason = knownFailure(fixture, ("usj" in row && row.usj) || usj, row);
      return reason ? [[row.key, reason]] : [];
    }),
  ),
);

const register = knownFailureRunner(
  KNOWN_FAILURES,
  fixtureRows.flatMap(({ ranges, plainTexts, crossViews, hiddenCrossViews }) =>
    [...ranges, ...plainTexts, ...crossViews, ...hiddenCrossViews].map((row) => row.key),
  ),
);

describe("clipboard over the testUSFM corpus, per editing view", () => {
  for (const { fixture, usj, ranges, plainTexts, crossViews, hiddenCrossViews } of fixtureRows)
    describe(fixture, () => {
      for (const row of ranges)
        register(row.key)(
          `${row.range.kind} | ${row.viewName} | ${row.protection} | ${row.operation}`,
          () => runRangeRow(row, row.usj ?? usj),
          30_000,
        );
      for (const row of plainTexts)
        register(row.key)(
          `${row.viewName} | ${row.protection} | paste plain ${row.text}`,
          () => runPlainRow(row, usj),
          30_000,
        );
      for (const row of crossViews)
        register(row.key)(
          `${row.range.kind} | ${row.from.name} to ${row.to.name} | ${row.protection} | copy, Ctrl+V`,
          () => runCrossViewRow(row, usj),
          30_000,
        );
      for (const row of hiddenCrossViews)
        register(row.key)(
          `${row.range.kind} | ${row.copyFrom?.name} to ${row.viewName} | ${row.protection} | copy, Ctrl+V`,
          () => runRangeRow(row, usj),
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
