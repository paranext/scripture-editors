/**
 * A generated keystroke oracle for the views whose markers are hidden (formatted, and
 * paragraph-structure), where no pending marker edit exists to settle: a keystroke must change only
 * what the user typed, and nothing else in the document.
 *
 * The expectation is derived from the loaded USJ alone, never from the editor. Each leaf block (a
 * paragraph, the book line, a table cell) is read as a sequence of units: every character of its
 * text, and one unit for each thing shown as a whole (a verse number, a collapsed note, a
 * milestone, a figure). Char spans are transparent: their text is the block's text. A caret is a
 * unit index, and each keystroke has an expected document computed by editing the USJ tree at that
 * index:
 *
 * - typing a letter, a space or a no-break space inserts it there — into a string touching the
 *   caret, or as a new string at a gap there, at any depth (a caret at a char span's edge may type
 *   inside or outside it);
 * - Backspace and Delete remove the unit before or after the caret (an atom whole), or, at the
 *   block's edge, merge the block with its sibling, or remove the chapter beside it (never under
 *   guarded structure protection, which refuses that key, and which removes an empty block beside a
 *   chapter only where another chapter or a block follows it);
 * - Enter splits the block there, splitting each char span the caret is inside into two same-marker
 *   spans and keeping both halves' text;
 * - a range selected and typed over is removed (atoms inside it with it) and the letter typed in its
 *   place, within a block or across into the next one, which merges the two.
 *
 * Every other block, marker, attribute, note and verse is expected byte-unchanged. A span the
 * keystroke emptied may go or stay; a span the keystroke did not empty may not appear empty. A
 * keystroke that removes structure (an atom, a block boundary) may also be refused, leaving the
 * document unchanged — the protected and guarded structure modes do that by design.
 *
 * The editor's own standing rules are allowed for, each where it applies and nowhere else: the
 * whitespace at a paragraph break may go (a block's edge whitespace is no content a USFM reader
 * keeps), and must go from the start of a new paragraph that starts with text; the continuation of
 * a split span may carry its marker alone (`CharNode.insertNewAfter`); text before a verse ends in
 * a space (TextSpacingPlugin; compared up to it); a space typed as an empty verse's whole content,
 * text typed into an empty `\b`, and any edit inside a table or a sidebar (read-only) are refused.
 * Two spans alike in all but content that a keystroke leaves side by side stay two spans, as they
 * do in Standard view.
 *
 * After every keystroke: the saved USJ must be one of the expected documents; Undo must restore
 * the pre-keystroke USJ exactly, and Redo must re-apply the keystroke's USJ exactly. Before any
 * keystroke, the loaded document must save as it was loaded.
 *
 * Keystrokes arrive the way a browser delivers them: the caret placed with a selection change
 * announced (so caret guards run), then a real `keydown` on the editor root (so every key command
 * handler runs), then, for a character, a `beforeinput` and — when nothing claimed it — the text
 * insertion the browser's own input would make. jsdom has no `Selection.modify`, which Lexical's
 * Backspace and Delete extend the selection with; {@link installSelectionModify} supplies the
 * character granularity, stepping over a decorator or a collapsed note as one unit the way a
 * browser steps over content it does not show as text.
 *
 * Failures are reported by SHAPE — the keystroke, the units around the caret and how the outcome
 * departs from the expectation — so one defect reached from many carets is one entry. Each view's
 * shapes known to fail are listed with a reason in its expected-failures JSON, which only shrinks:
 * an unlisted shape fails, and so does a listed one that no longer occurs.
 *
 * Every caret of the keystroke corpus is visited; a rich corpus chapter is visited at a sample of
 * carets spread over it, to keep each file fast (`TYPING_FIDELITY_ORACLE_CARETS=all` visits every
 * one). `TYPING_FIDELITY_ORACLE_WRITE=1` rewrites the expected-failures list from the run,
 * `TYPING_FIDELITY_ORACLE_DUMP=1` prints every failing case, `TYPING_FIDELITY_ORACLE_TRACE=1` every
 * case as it runs, and `TYPING_FIDELITY_ORACLE_FRESH=1` mounts the document afresh for each one.
 */
import {
  describeInView,
  EditorViewName,
  editorView,
  isViewEnabled,
  mountInView,
  MountedEditor,
} from "./editorViews.test-helpers";
import { KEYSTROKE_CORPUS } from "./markerEdit/pendingSettledOracle.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getNodeByKey,
  $getRoot,
  $getSelection,
  $isDecoratorNode,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  $setSelection,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  ElementNode,
  LexicalNode,
  NodeKey,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  UNDO_COMMAND,
} from "lexical";
import { $isNoteNode, NBSP } from "shared";
import { StructureProtectionMode } from "shared-react";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { afterAll, expect, it } from "vitest";

// ---------------------------------------------------------------------------------------------
// jsdom's missing `Selection.modify`

/** Elements a browser's caret steps over whole: decorators, and a collapsed note (whose content
 * the stylesheet hides, leaving only its caller). */
function isAtomicElement(element: Element): boolean {
  return (
    element.getAttribute("data-lexical-decorator") === "true" ||
    (element.classList.contains("note") && element.classList.contains("collapsed"))
  );
}

const BLOCK_TAGS = new Set(["P", "DIV", "TD", "TH", "TR", "TABLE", "LI", "H1", "H2", "H3"]);

/** One step of the caret's walk through the editable root: a character of a text node, a thing
 * stepped over whole, or the break between two blocks. */
type CaretItem =
  | { kind: "char"; node: Text; offset: number }
  | { kind: "atom"; element: Element }
  | { kind: "break"; before: Element; after: Element };

/** The nearest block element containing `node`, inside `root`. */
function blockOf(node: Node, root: Element): Element {
  for (let at: Node | null = node.parentNode; at && at !== root; at = at.parentNode)
    if (at instanceof Element && BLOCK_TAGS.has(at.tagName)) return at;
  return root;
}

/** Every caret step in `root`, in document order. */
function caretItems(root: Element): CaretItem[] {
  const items: CaretItem[] = [];
  let lastBlock: Element | undefined;
  const enter = (block: Element): void => {
    if (lastBlock && lastBlock !== block)
      items.push({ kind: "break", before: lastBlock, after: block });
    lastBlock = block;
  };
  const visit = (node: Node): void => {
    if (node instanceof Text) {
      if (node.data.length === 0) return;
      enter(blockOf(node, root));
      for (let offset = 0; offset < node.data.length; offset += 1)
        items.push({ kind: "char", node, offset });
      return;
    }
    if (!(node instanceof Element)) return;
    if (node !== root && isAtomicElement(node)) {
      enter(blockOf(node, root));
      items.push({ kind: "atom", element: node });
      return;
    }
    node.childNodes.forEach(visit);
  };
  visit(root);
  return items;
}

/** Whether DOM point (`node`, `offset`) is before `item` in document order. */
function isPointBefore(node: Node, offset: number, item: CaretItem): boolean {
  const range = document.createRange();
  range.setStart(node, offset);
  range.collapse(true);
  let target: Node;
  let targetOffset: number;
  if (item.kind === "char") {
    target = item.node;
    targetOffset = item.offset;
  } else {
    const element = item.kind === "atom" ? item.element : item.after;
    if (!element.parentNode) return false;
    target = element.parentNode;
    targetOffset = Array.prototype.indexOf.call(target.childNodes, element);
  }
  return range.comparePoint(target, targetOffset) >= 0;
}

/** The index of the caret step a DOM point sits in front of (the length when after all). */
function positionOf(items: CaretItem[], node: Node, offset: number): number {
  if (node instanceof Text) {
    const at = items.findIndex(
      (item) => item.kind === "char" && item.node === node && item.offset === offset,
    );
    if (at >= 0) return at;
    const last = items.findLastIndex((item) => item.kind === "char" && item.node === node);
    if (last >= 0 && offset >= node.data.length) return last + 1;
  }
  const at = items.findIndex((item) => isPointBefore(node, offset, item));
  return at < 0 ? items.length : at;
}

/** A DOM point for caret position `position` among `items`, as a browser would report it: in text
 * where text is beside it. */
function pointAt(items: CaretItem[], position: number, root: Element): [Node, number] {
  const previous = items[position - 1];
  const next = items[position];
  if (previous?.kind === "char") return [previous.node, previous.offset + 1];
  if (next?.kind === "char") return [next.node, next.offset];
  const childIndex = (element: Element): [Node, number] => {
    const parent = element.parentNode ?? root;
    return [parent, Array.prototype.indexOf.call(parent.childNodes, element)];
  };
  if (previous?.kind === "atom") {
    const [parent, index] = childIndex(previous.element);
    return [parent, index + 1];
  }
  if (next?.kind === "atom") return childIndex(next.element);
  if (previous?.kind === "break") return [previous.after, 0];
  if (next?.kind === "break") return [next.before, next.before.childNodes.length];
  return [root, 0];
}

/**
 * `Selection.modify` at character granularity, which jsdom lacks and Lexical's `deleteCharacter`
 * extends the selection with: one step through the editable root's text, a decorator or a collapsed
 * note stepped over whole, and a block break counted as one step. Other granularities leave the
 * selection as it is.
 */
export function installSelectionModify(): void {
  if (typeof Selection.prototype.modify === "function") return;
  Selection.prototype.modify = function modify(
    alter?: string,
    direction?: string,
    granularity?: string,
  ): void {
    if (granularity !== "character" || !this.focusNode || !this.anchorNode) return;
    const start = this.focusNode instanceof Element ? this.focusNode : this.focusNode.parentElement;
    const root = start?.closest('[contenteditable="true"]');
    if (!root) return;
    const items = caretItems(root);
    const from = positionOf(items, this.focusNode, this.focusOffset);
    const isBackward = direction === "backward" || direction === "left";
    let to = Math.max(0, Math.min(items.length, from + (isBackward ? -1 : 1)));
    // A surrogate pair is one character.
    const stepped = items[isBackward ? to : from];
    if (stepped?.kind === "char") {
      const code = stepped.node.data.charCodeAt(stepped.offset);
      if (isBackward && code >= 0xdc00 && code <= 0xdfff && to > 0) to -= 1;
      if (!isBackward && code >= 0xd800 && code <= 0xdbff && to < items.length) to += 1;
    }
    const [node, offset] = pointAt(items, to, root);
    if (alter === "move") this.collapse(node, offset);
    else this.setBaseAndExtent(this.anchorNode, this.anchorOffset, node, offset);
  };
}

// ---------------------------------------------------------------------------------------------
// The USJ model the expectation is computed on

type Item = MarkerContent;

/** Inline things a caret steps over whole in a view whose markers and notes are hidden. */
const ATOM_TYPES = new Set(["verse", "note", "ms", "figure", "optbreak", "unmatched"]);

function isObject(item: Item | undefined): item is MarkerObject {
  return typeof item === "object" && item !== null;
}

function isInlineType(type: string): boolean {
  return type === "char" || ATOM_TYPES.has(type);
}

/** A unit of a block: one character of its text, or an atom. */
type Unit = { kind: "char"; ch: string } | { kind: "atom"; type: string };

/** The units of `content`, in order. */
function unitsOf(content: readonly Item[] | undefined): Unit[] {
  const out: Unit[] = [];
  for (const item of content ?? []) {
    if (typeof item === "string") for (const ch of item) out.push(...[...ch].map(charUnit));
    else if (item.type === "char") out.push(...unitsOf(item.content));
    else out.push({ kind: "atom", type: item.type });
  }
  return out;
}

function charUnit(ch: string): Unit {
  return { kind: "char", ch };
}

/** The number of units `item` spans. */
function sizeOf(item: Item): number {
  if (typeof item === "string") return item.length;
  if (item.type === "char")
    return (item.content ?? []).reduce((sum, child) => sum + sizeOf(child), 0);
  return 1;
}

/** The units of `content` spelled as one string, an atom as U+FFFC. */
function unitText(units: readonly Unit[]): string {
  return units.map((unit) => (unit.kind === "char" ? unit.ch : "￼")).join("");
}

/** A leaf block of a document: its index path through the `content` arrays, from the root. */
interface BlockRef {
  readonly path: readonly number[];
  readonly block: MarkerObject;
}

/** Whether `item` is a leaf block: not inline, not a chapter, holding no block of its own. */
function isLeafBlock(item: Item): boolean {
  return (
    isObject(item) &&
    !isInlineType(item.type) &&
    item.type !== "chapter" &&
    !(item.content ?? []).some((child) => isObject(child) && !isInlineType(child.type))
  );
}

/** Every leaf block of `usj`, in document order. */
function leafBlocks(usj: Usj): BlockRef[] {
  const out: BlockRef[] = [];
  const visit = (content: readonly Item[], path: number[]): void =>
    content.forEach((item, index) => {
      if (!isObject(item) || isInlineType(item.type)) return;
      if (isLeafBlock(item)) out.push({ path: [...path, index], block: item });
      else visit(item.content ?? [], [...path, index]);
    });
  visit(usj.content, []);
  return out;
}

function clone<T>(value: T): T {
  return structuredClone(value);
}

/** The content array holding the item at `path`, and its index there. */
function parentOf(usj: Usj, path: readonly number[]): [Item[], number] {
  let content: Item[] = usj.content;
  for (const index of path.slice(0, -1)) {
    const item = content[index];
    if (!isObject(item)) throw new Error("path runs through a string");
    item.content ??= [];
    content = item.content;
  }
  return [content, path[path.length - 1]];
}

/**
 * Adjacent strings merged, empty strings dropped, an empty `content` dropped — the spellings of
 * one document the editor may write either way. A keystroke's outcome (`isKeystroke`) is also
 * compared up to a rule the editor keeps on every edit: the text, or the char span, before a verse
 * is followed by a space (TextSpacingPlugin; the shape ParatextData writes a verse with on its
 * round trip to disk).
 */
function normalized(content: readonly Item[], isKeystroke = false): Item[] {
  const out: Item[] = [];
  for (const item of content) {
    if (typeof item === "string") {
      if (item === "") continue;
      if (typeof out.at(-1) === "string") out[out.length - 1] = `${out.at(-1)}${item}`;
      else out.push(item);
      continue;
    }
    const copy: MarkerObject = { ...item };
    if (item.content) {
      const inner = normalized(item.content, isKeystroke);
      if (inner.length > 0) copy.content = inner;
      else delete copy.content;
    }
    const previous = out.at(-1);
    if (isKeystroke && item.type === "verse") {
      if (typeof previous === "string" && !/\s$/.test(previous))
        out[out.length - 1] = `${previous} `;
      else if (isObject(previous) && previous.type === "char") out.push(" ");
    }
    out.push(copy);
  }
  return out;
}

/** `value` as JSON with every object's keys in order: the order a writer emits fields in is not
 * part of the document. */
function sortedJson(value: unknown): string {
  return JSON.stringify(value, (_, inner: unknown) =>
    inner && typeof inner === "object" && !Array.isArray(inner)
      ? Object.fromEntries(Object.entries(inner).sort(([a], [b]) => a.localeCompare(b)))
      : inner,
  );
}

function normalizedDoc(usj: Usj | undefined, isKeystroke = true): string {
  return sortedJson(usj ? { ...usj, content: normalized(usj.content, isKeystroke) } : undefined);
}

/** Marks a char span the keystroke's removal emptied (a symbol, so copies of the span keep it and
 * no serialization sees it). */
const EMPTIED = Symbol("emptied by the keystroke");

/** `content` with the units in `[from, to)` removed; char spans the removal empties are marked
 * {@link EMPTIED}. */
function withoutUnits(content: readonly Item[], from: number, to: number, start = 0): Item[] {
  const out: Item[] = [];
  let at = start;
  for (const item of content) {
    const size = sizeOf(item);
    if (typeof item === "string") {
      const keepBefore = Math.max(0, Math.min(size, from - at));
      const keepAfter = Math.max(0, Math.min(size, at + size - to));
      out.push(
        at + size <= from || at >= to
          ? item
          : item.slice(0, keepBefore) + item.slice(size - keepAfter),
      );
    } else if (item.type === "char") {
      const inner = withoutUnits(item.content ?? [], from, to, at);
      const copy: MarkerObject = { ...item, content: inner };
      if (size > 0 && inner.every((child) => sizeOf(child) === 0))
        Object.assign(copy, { [EMPTIED]: true });
      out.push(copy);
    } else if (at < from || at >= to) out.push(item);
    at += size;
  }
  return out;
}

/** Every way `text` can be inserted at unit index `position` of `content`: into a string touching
 * it, or as a new string at a gap there, at any depth. */
function insertions(content: readonly Item[], position: number, text: string, start = 0): Item[][] {
  const out: Item[][] = [];
  let at = start;
  content.forEach((item, index) => {
    if (at === position) out.push([...content.slice(0, index), text, ...content.slice(index)]);
    const size = sizeOf(item);
    if (typeof item === "string" && at <= position && position <= at + size) {
      const local = position - at;
      out.push([
        ...content.slice(0, index),
        item.slice(0, local) + text + item.slice(local),
        ...content.slice(index + 1),
      ]);
    } else if (isObject(item) && item.type === "char" && at <= position && position <= at + size)
      for (const inner of insertions(item.content ?? [], position, text, at))
        out.push([
          ...content.slice(0, index),
          { ...item, content: inner },
          ...content.slice(index + 1),
        ]);
    at += size;
  });
  if (at === position) out.push([...content, text]);
  return out;
}

/** `content` without the char spans the keystroke emptied and nothing has refilled, at any depth. */
function pruned(content: readonly Item[]): Item[] {
  return content.flatMap((item): Item[] => {
    if (!isObject(item)) return [item];
    if (EMPTIED in item && sizeOf(item) === 0) return [];
    return item.content ? [{ ...item, content: pruned(item.content) }] : [item];
  });
}

/** `content` split at unit index `position`: each char span the split falls inside is split into
 * two spans with its marker and attributes — or, `bare`, a continuation with its marker and
 * closed state only (`CharNode.insertNewAfter` deliberately copies no other attribute, which would
 * write its bytes twice) — and a span left empty on one side is dropped there. */
function splitContent(
  content: readonly Item[],
  position: number,
  start = 0,
  bare = false,
): [Item[], Item[]] {
  const left: Item[] = [];
  const right: Item[] = [];
  let at = start;
  for (const item of content) {
    const size = sizeOf(item);
    if (at + size <= position && !(size === 0 && at === position)) left.push(item);
    else if (at >= position) right.push(item);
    else if (typeof item === "string") {
      left.push(item.slice(0, position - at));
      right.push(item.slice(position - at));
    } else {
      const [innerLeft, innerRight] = splitContent(item.content ?? [], position, at, bare);
      if (innerLeft.some((child) => sizeOf(child) > 0)) left.push({ ...item, content: innerLeft });
      if (innerRight.some((child) => sizeOf(child) > 0)) {
        const { type, marker, closed } = item;
        const continuation = bare
          ? { type, marker, ...(closed !== undefined ? { closed } : {}) }
          : item;
        right.push({ ...continuation, content: innerRight });
      }
    }
    at += size;
  }
  return [left, right];
}

/** A keystroke, in the model's terms. */
type Edit =
  /** The units `[from, to)` of a block replaced by `text`. */
  | { kind: "replace"; block: number; from: number; to: number; text: string }
  /** The units from `from` in a block to `to` in the next leaf block replaced by `text`, the two
   * blocks merged. */
  | { kind: "merge"; block: number; from: number; to: number; text: string }
  /** Backspace at a block's start, or Delete at its end. */
  | { kind: "join"; block: number; direction: "backward" | "forward" }
  /** Enter. */
  | { kind: "split"; block: number; at: number };

/** Items that stand between two leaf blocks as a unit: a deletion across them removes them, and
 * Backspace or Delete beside one removes it unless structure protection refuses that. */
const BETWEEN_BLOCK_ATOMS = new Set(["chapter"]);

function isBetweenBlockAtom(item: Item | undefined): boolean {
  return isObject(item) && BETWEEN_BLOCK_ATOMS.has(item.type);
}

/** The number of space units `units` starts with (or ends with, `fromEnd`). */
function spaceRun(units: readonly Unit[], fromEnd = false): number {
  const ordered = fromEnd ? [...units].reverse() : units;
  const end = ordered.findIndex((unit) => unit.kind !== "char" || unit.ch !== " ");
  return end < 0 ? ordered.length : end;
}

/**
 * The documents `edit` may leave `before` as — every acceptable spelling, normalized — or none
 * when the model has no expectation for it (a block boundary at the edge of a sidebar or table).
 * `isGuarded` is whether the view edits under guarded structure protection.
 */
function expectedDocs(before: Usj, edit: Edit, isGuarded: boolean): Set<string> {
  const blocks = leafBlocks(before);
  const out = new Set<string>();
  const target = blocks[edit.block];
  if (!target) return out;
  const variants = (content: Item[], at: number, text: string): Item[][] =>
    (text === "" ? [content] : insertions(content, at, text)).flatMap((inserted) => [
      inserted,
      pruned(inserted),
    ]);
  /** `before` with the items `[index, index + count)` of the content array holding `path`
   * replaced by `items`. */
  const spliced = (path: readonly number[], count: number, ...items: Item[]): Usj => {
    const doc = clone(before);
    const [parent, index] = parentOf(doc, path);
    parent.splice(index, count, ...items);
    return doc;
  };
  /** The two leaf blocks at `first` and `first + count - 1` of one content array merged, the units
   * from `from` in the first to `to` in the second replaced by `text` and everything between
   * them removed. A first block left empty may be the one removed, the second keeping its own
   * marker. */
  const merge = (
    first: BlockRef,
    second: MarkerObject,
    count: number,
    from: number,
    to: number,
    text: string,
  ): void => {
    const merged = [
      ...withoutUnits(first.block.content ?? [], from, unitsOf(first.block.content).length),
      ...withoutUnits(second.content ?? [], 0, to),
    ];
    for (const owner of from === 0 ? [first.block, second] : [first.block])
      for (const variant of variants(merged, from, text))
        out.add(normalizedDoc(spliced(first.path, count, { ...clone(owner), content: variant })));
  };
  const [siblings, index] = parentOf(clone(before), target.path);
  if (edit.kind === "split") {
    for (const bare of [false, true]) {
      const [left, right] = splitContent(target.block.content ?? [], edit.at, 0, bare);
      const { type, marker } = target.block;
      // The whitespace at the break may go: a block's leading and trailing spaces are not content
      // a USFM reader keeps.
      const leftTrimmed = withoutUnits(
        left,
        unitsOf(left).length - spaceRun(unitsOf(left), true),
        unitsOf(left).length,
      );
      const rightTrimmed = withoutUnits(right, 0, spaceRun(unitsOf(right)));
      // A new paragraph that starts with text loses that text's leading space, in every view
      // (`ParaNodePlugin`); where it starts with an atom or a span, either is allowed.
      const dropsRightLead = typeof right[0] === "string" && right[0].startsWith(" ");
      for (const leftVariant of [left, pruned(leftTrimmed)])
        for (const rightVariant of dropsRightLead
          ? [pruned(rightTrimmed)]
          : [right, pruned(rightTrimmed)])
          out.add(
            normalizedDoc(
              spliced(
                target.path,
                1,
                { ...clone(target.block), content: leftVariant },
                { type, ...(marker !== undefined ? { marker } : {}), content: rightVariant },
              ),
            ),
          );
    }
    return out;
  }
  if (edit.kind === "replace") {
    const content = withoutUnits(target.block.content ?? [], edit.from, edit.to);
    for (const variant of variants(content, edit.from, edit.text))
      out.add(normalizedDoc(spliced(target.path, 1, { ...clone(target.block), content: variant })));
    return out;
  }
  if (edit.kind === "join") {
    const step = edit.direction === "backward" ? -1 : 1;
    const siblingIndex = index + step;
    const sibling = siblings[siblingIndex];
    const siblingPath = [...target.path.slice(0, -1), siblingIndex];
    // An empty block may be the one the key removes. Under guarded protection Delete in one right
    // before a chapter is refused, unless a chapter comes before it too, where the block goes blank
    // and saves as nothing.
    const isRefusedBeforeChapter =
      isGuarded &&
      edit.direction === "forward" &&
      isBetweenBlockAtom(sibling) &&
      !isBetweenBlockAtom(siblings[index - 1]);
    if (unitsOf(target.block.content).length === 0 && !isRefusedBeforeChapter)
      out.add(normalizedDoc(spliced(target.path, 1)));
    if (isBetweenBlockAtom(sibling)) {
      if (!isGuarded) out.add(normalizedDoc(spliced(siblingPath, 1)));
    } else if (isObject(sibling) && isLeafBlock(sibling)) {
      if (edit.direction === "backward")
        merge(
          { path: siblingPath, block: sibling },
          target.block,
          2,
          unitsOf(sibling.content).length,
          0,
          "",
        );
      else merge(target, sibling, 2, unitsOf(target.block.content).length, 0, "");
    } else if (sibling !== undefined && (!isObject(sibling) || isInlineType(sibling.type))) {
      // Inline content directly in the book's content array shows as a paragraph of its own (an
      // implied paragraph): joining with it unwraps this block into that run, or takes the run
      // into this block.
      if (edit.direction === "backward")
        out.add(normalizedDoc(spliced(target.path, 1, ...clone(target.block.content ?? []))));
      else {
        let end = siblingIndex;
        while (
          end < siblings.length &&
          !isLeafBlock(siblings[end]) &&
          !isBetweenBlockAtom(siblings[end])
        )
          end += 1;
        const run = siblings.slice(siblingIndex, end);
        out.add(
          normalizedDoc(
            spliced(target.path, 1 + run.length, {
              ...clone(target.block),
              content: [...clone(target.block.content ?? []), ...run],
            }),
          ),
        );
      }
    }
    return out;
  }
  // A range into the next leaf block: only one of the same content array merges, across nothing
  // but between-block atoms.
  const next = blocks[edit.block + 1];
  if (!next) return out;
  const nextIndex = next.path[next.path.length - 1];
  const isSameParent =
    next.path.length === target.path.length &&
    next.path.slice(0, -1).every((value, at) => value === target.path[at]);
  // What lies between the two is removed with the range: chapters, and an implied paragraph's
  // inline content.
  const isRemovable = (item: Item): boolean =>
    isBetweenBlockAtom(item) || !isObject(item) || isInlineType(item.type);
  if (!isSameParent || !siblings.slice(index + 1, nextIndex).every(isRemovable)) return out;
  merge(target, next.block, nextIndex - index + 1, edit.from, edit.to, edit.text);
  return out;
}

// ---------------------------------------------------------------------------------------------
// The editor side: the same units, read from the Lexical tree

/** Where a Lexical node's units fall: its leaf block's index, and its unit range there. */
interface NodeSpan {
  block: number;
  start: number;
  end: number;
  counted: boolean;
}

/** The editor's leaf blocks matched to the USJ's, by the USJ block's index: each node's unit span
 * and each matched block's key and counted text nodes. A block the two do not show alike is not
 * matched, and its nodes are not counted. */
interface EditorModel {
  blocks: Map<number, NodeKey>;
  spans: Map<NodeKey, NodeSpan>;
  texts: Map<number, [NodeKey, NodeSpan][]>;
}

/** Whether `node` is shown inside a collapsed note. */
function $isInCollapsedNote(node: LexicalNode): boolean {
  for (let parent = node.getParent(); parent; parent = parent.getParent())
    if ($isNoteNode(parent) && parent.getIsCollapsed()) return true;
  return false;
}

/** Whether `node` is a leaf block: a non-inline element holding no non-inline element. */
function $isLeafBlockNode(node: LexicalNode): node is ElementNode {
  return (
    $isElementNode(node) &&
    !node.isInline() &&
    !node.getChildren().some((child) => $isElementNode(child) && !child.isInline())
  );
}

/**
 * The editor's leaf blocks, matched in order with `usjTexts` (each USJ leaf block's units) by
 * equal units, skipping a few unmatched blocks on either side.
 */
function $editorModel(usjTexts: readonly string[]): EditorModel {
  const lexicalBlocks: { key: NodeKey; units: string }[] = [];
  const rawSpans = new Map<NodeKey, NodeSpan>();
  const visitInline = (node: LexicalNode, block: number, units: string[]): void => {
    const start = units.length;
    let counted = true;
    if ($isTextNode(node)) {
      if ($isInCollapsedNote(node)) counted = false;
      else units.push(...node.getTextContent());
    } else if ($isDecoratorNode(node)) {
      if (node.getType() === "immutable-typed-text") counted = false;
      else units.push("\uFFFC");
    } else if ($isNoteNode(node) && node.getIsCollapsed()) {
      units.push("\uFFFC");
      node.getChildren().forEach((child) => visitInline(child, block, []));
    } else if ($isElementNode(node))
      node.getChildren().forEach((child) => visitInline(child, block, units));
    rawSpans.set(node.getKey(), { block, start, end: units.length, counted });
  };
  const visit = (node: LexicalNode): void => {
    if ($isLeafBlockNode(node) && node.getParent() !== null) {
      const units: string[] = [];
      const block = lexicalBlocks.length;
      lexicalBlocks.push({ key: node.getKey(), units: "" });
      node.getChildren().forEach((child) => visitInline(child, block, units));
      rawSpans.set(node.getKey(), { block, start: 0, end: units.length, counted: true });
      lexicalBlocks[block].units = units.join("");
      return;
    }
    if ($isElementNode(node)) node.getChildren().forEach(visit);
  };
  visit($getRoot());

  const toUsj = new Map<number, number>();
  const LOOKAHEAD = 6;
  for (let lexical = 0, usj = 0; lexical < lexicalBlocks.length && usj < usjTexts.length; ) {
    if (lexicalBlocks[lexical].units === usjTexts[usj]) {
      toUsj.set(lexical, usj);
      lexical += 1;
      usj += 1;
      continue;
    }
    const usjAhead = usjTexts
      .slice(usj + 1, usj + 1 + LOOKAHEAD)
      .indexOf(lexicalBlocks[lexical].units);
    const lexicalAhead = lexicalBlocks
      .slice(lexical + 1, lexical + 1 + LOOKAHEAD)
      .findIndex(({ units }) => units === usjTexts[usj]);
    if (usjAhead >= 0 && (lexicalAhead < 0 || usjAhead <= lexicalAhead)) usj += usjAhead + 1;
    else if (lexicalAhead >= 0) lexical += lexicalAhead + 1;
    else {
      lexical += 1;
      usj += 1;
    }
  }
  const blocks = new Map<number, NodeKey>();
  const spans = new Map<NodeKey, NodeSpan>();
  const texts = new Map<number, [NodeKey, NodeSpan][]>();
  toUsj.forEach((usj, lexical) => blocks.set(usj, lexicalBlocks[lexical].key));
  rawSpans.forEach((span, key) => {
    const usj = toUsj.get(span.block);
    const mapped =
      usj === undefined ? { ...span, block: -1, counted: false } : { ...span, block: usj };
    spans.set(key, mapped);
    if (mapped.counted && $isTextNode($getNodeByKey(key))) {
      const list = texts.get(mapped.block) ?? [];
      list.push([key, mapped]);
      texts.set(mapped.block, list);
    }
  });
  return { blocks, spans, texts };
}

/** A caret the oracle places: a Lexical point, and the unit index it is at. */
interface Caret {
  key: NodeKey;
  offset: number;
  type: "text" | "element";
  block: number;
  unit: number;
}

/** Every caret in comparable blocks: each offset of each counted text node, and each child gap of
 * a leaf block that no text node sits beside. */
function $carets(model: EditorModel): Caret[] {
  const out: Caret[] = [];
  [...model.blocks]
    .sort(([a], [b]) => a - b)
    .forEach(([block, key]) => {
      const element = $getNodeByKey(key);
      if (!$isElementNode(element)) return;
      const visit = (node: LexicalNode): void => {
        const span = model.spans.get(node.getKey());
        if ($isTextNode(node) && span?.counted)
          for (let offset = 0; offset <= node.getTextContentSize(); offset += 1)
            out.push({
              key: node.getKey(),
              offset,
              type: "text",
              block,
              unit: span.start + offset,
            });
        else if ($isElementNode(node) && !($isNoteNode(node) && node.getIsCollapsed()))
          node.getChildren().forEach(visit);
      };
      const children = element.getChildren();
      children.forEach((child, index) => {
        const beside = [children[index - 1], child];
        // No caret sits on the far side of a paragraph's marker prefix (paragraph-structure
        // view's gutter marker): its cursor guard keeps one out.
        const isBesidePrefix = beside.some(
          (node) => node !== undefined && model.spans.get(node.getKey())?.counted === false,
        );
        if (!isBesidePrefix && !beside.some((node) => $isTextNode(node))) {
          const span = model.spans.get(child.getKey());
          if (span) out.push({ key, offset: index, type: "element", block, unit: span.start });
        }
        visit(child);
      });
      if (children.length === 0 || !$isTextNode(children.at(-1)))
        out.push({
          key,
          offset: children.length,
          type: "element",
          block,
          unit: model.spans.get(key)?.end ?? 0,
        });
    });
  return out;
}

/** The unit index of a Lexical point, or `undefined` where the model counts nothing there. */
function $unitOfPoint(
  model: EditorModel,
  key: NodeKey,
  offset: number,
  type: "text" | "element",
): { block: number; unit: number } | undefined {
  const span = model.spans.get(key);
  if (!span || !span.counted) return undefined;
  if (type === "text") return { block: span.block, unit: span.start + offset };
  const element = $getNodeByKey(key);
  if (!$isElementNode(element)) return undefined;
  const child = element.getChildAtIndex(offset);
  const childSpan = child ? model.spans.get(child.getKey()) : undefined;
  return { block: span.block, unit: childSpan ? childSpan.start : span.end };
}

/** A Lexical point at unit index `unit` of `block`: in a counted text node where one holds it
 * (`prefer` picks which of two at a boundary), else at the leaf block's child gap there. */
function $pointAtUnit(
  model: EditorModel,
  block: number,
  unit: number,
  prefer: "before" | "after",
): { key: NodeKey; offset: number; type: "text" | "element" } | undefined {
  const texts = (model.texts.get(block) ?? []).filter(
    ([, span]) => span.start <= unit && unit <= span.end,
  );
  const chosen =
    prefer === "before"
      ? (texts.find(([, span]) => span.start < unit) ?? texts[0])
      : (texts.find(([, span]) => unit < span.end) ?? texts.at(-1));
  if (chosen) return { key: chosen[0], offset: unit - chosen[1].start, type: "text" };
  const blockKey = model.blocks.get(block);
  const element = blockKey === undefined ? null : $getNodeByKey(blockKey);
  if (!$isElementNode(element)) return undefined;
  const index = element
    .getChildren()
    .findIndex((child) => (model.spans.get(child.getKey())?.start ?? Infinity) >= unit);
  return {
    key: element.getKey(),
    offset: index < 0 ? element.getChildrenSize() : index,
    type: "element",
  };
}

// ---------------------------------------------------------------------------------------------
// Keystrokes

/** A keystroke the oracle makes at each caret. */
interface Keystroke {
  name: string;
  /** For a typed character: the character. */
  text?: string;
  /** For a typed character the view puts in as something else: what it puts in. */
  inserts?: string;
  /** For a key: its `KeyboardEvent.key`. */
  key?: string;
  /** For a range typed over: how far it reaches. */
  range?: "two forward" | "into the next block";
}

const KEYSTROKES: Keystroke[] = [
  { name: 'type "x"', text: "x" },
  { name: "type a space", text: " " },
  // The oracle's views run with `allowInvisibleCharacters` off, where a no-break space typed as a
  // character goes in as a space, as in Paratext 9 (the author's no-break space is typed as `~`).
  { name: "type a no-break space", text: NBSP, inserts: " " },
  { name: "Backspace", key: "Backspace" },
  { name: "Delete", key: "Delete" },
  { name: "Enter", key: "Enter" },
  { name: 'select two units forward, then type "x"', text: "x", range: "two forward" },
  { name: 'select into the next block, then type "x"', text: "x", range: "into the next block" },
];

/**
 * The DOM point of a Lexical selection point: in the text node's own DOM text, or in an element's
 * DOM at the DOM position of its child at that offset.
 */
function domPoint(
  editor: MountedEditor["lexical"],
  point: { key: NodeKey; offset: number; type: "text" | "element" },
): [Node, number] | undefined {
  const element = editor.getElementByKey(point.key);
  if (!element) return undefined;
  if (point.type === "text") {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    const text = walker.nextNode();
    return text ? [text, point.offset] : [element, 0];
  }
  return editor.getEditorState().read(() => {
    const node = $getNodeByKey(point.key);
    if (!$isElementNode(node)) return undefined;
    const child = node.getChildAtIndex(point.offset);
    const childElement = child ? editor.getElementByKey(child.getKey()) : null;
    if (!childElement || childElement.parentNode !== element)
      return [element, element.childNodes.length] as [Node, number];
    return [element, Array.prototype.indexOf.call(element.childNodes, childElement)] as [
      Node,
      number,
    ];
  });
}

/**
 * Make the document's selection the editor's, as it is in a browser, where the selection the user
 * made is the DOM's and the editor's mirrors it: Lexical reads the DOM selection back on
 * `beforeinput`, and a host's `setSelection` may leave the DOM's where it was.
 */
function syncDomSelection(editor: MountedEditor["lexical"]): void {
  const points = editor.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) return undefined;
    const { anchor, focus } = selection;
    return [
      { key: anchor.key, offset: anchor.offset, type: anchor.type },
      { key: focus.key, offset: focus.offset, type: focus.type },
    ] as const;
  });
  if (!points) return;
  const anchor = domPoint(editor, points[0]);
  const focus = domPoint(editor, points[1]);
  if (anchor && focus) document.getSelection()?.setBaseAndExtent(...anchor, ...focus);
}

/** Dispatch `key` on the editor root as a browser does, and for a character, the input it makes. */
export async function press(mounted: MountedEditor, key: string, text?: string): Promise<string[]> {
  const root = mounted.lexical.getRootElement();
  if (!root) throw new Error("editor root not found");
  // An exception a key handler or a transform throws reaches the window as an error event, the
  // way a browser reports it; it is the keystroke's failure, not the test run's.
  const thrown: string[] = [];
  const onError = (event: ErrorEvent): void => {
    thrown.push(String(event.error?.message ?? event.message));
    event.preventDefault();
  };
  window.addEventListener("error", onError);
  try {
    await act(async () => {
      syncDomSelection(mounted.lexical);
      const keydown = new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true });
      root.dispatchEvent(keydown);
      if (text !== undefined && !keydown.defaultPrevented) {
        const beforeInput = new InputEvent("beforeinput", {
          inputType: "insertText",
          data: text,
          bubbles: true,
          cancelable: true,
        });
        root.dispatchEvent(beforeInput);
        if (!beforeInput.defaultPrevented)
          mounted.lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, text);
      }
      await Promise.resolve();
      await Promise.resolve();
    });
  } catch (error) {
    thrown.push(error instanceof Error ? error.message : String(error));
  } finally {
    window.removeEventListener("error", onError);
  }
  return thrown;
}

async function history(mounted: MountedEditor, command: "undo" | "redo"): Promise<void> {
  await act(async () => {
    mounted.lexical.dispatchCommand(command === "undo" ? UNDO_COMMAND : REDO_COMMAND, undefined);
    await Promise.resolve();
  });
}

/** Place a selection from `anchor` to `focus` with a selection change announced, as a click (or a
 * Shift-click) does; returns the selection the caret guards leave, in units. */
async function place(
  mounted: MountedEditor,
  model: EditorModel,
  anchor: { key: NodeKey; offset: number; type: "text" | "element" },
  focus = anchor,
): Promise<
  { anchor: { block: number; unit: number }; focus: { block: number; unit: number } } | undefined
> {
  await act(async () => {
    mounted.lexical.update(() => {
      const selection = $createRangeSelection();
      selection.anchor.set(anchor.key, anchor.offset, anchor.type);
      selection.focus.set(focus.key, focus.offset, focus.type);
      $setSelection(selection);
      mounted.lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    });
    await Promise.resolve();
  });
  return mounted.lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) return undefined;
    const at = (point: typeof selection.anchor) =>
      $unitOfPoint(model, point.key, point.offset, point.type);
    const placedAnchor = at(selection.anchor);
    const placedFocus = at(selection.focus);
    if (!placedAnchor || !placedFocus) return undefined;
    return { anchor: placedAnchor, focus: placedFocus };
  });
}

// ---------------------------------------------------------------------------------------------
// Shapes

/** How a unit reads in a shape: a letter, a space, a no-break space, an atom by type, or the
 * block's edge. */
function unitShape(units: readonly Unit[], index: number): string {
  const unit = units[index];
  if (!unit) return "edge";
  if (unit.kind === "atom") return unit.type;
  if (unit.ch === NBSP) return "nbsp";
  if (/\s/.test(unit.ch)) return "space";
  return "letter";
}

/** Whether unit index `position` of `content` is at a char span's start or end, as a shape word. */
function spanEdgeShape(content: readonly Item[], position: number, start = 0): string[] {
  const out: string[] = [];
  let at = start;
  for (const item of content) {
    const size = sizeOf(item);
    if (isObject(item) && item.type === "char" && at <= position && position <= at + size) {
      if (at === position) out.push("span-start");
      if (at + size === position) out.push("span-end");
      out.push(...spanEdgeShape(item.content ?? [], position, at).map((word) => `nested-${word}`));
    }
    at += size;
  }
  return [...new Set(out)];
}

/** The leaf blocks of `usj` and the structure between them, one JSON string each. */
function blockSequence(usj: Usj | undefined): string[] {
  const out: string[] = [];
  const visit = (content: readonly Item[]): void => {
    for (const item of content) {
      if (!isObject(item) || isInlineType(item.type)) {
        out.push(JSON.stringify(item));
        continue;
      }
      if (isLeafBlock(item)) {
        out.push(JSON.stringify({ ...item, content: normalized(item.content ?? []) }));
        continue;
      }
      const { content: inner, ...rest } = item;
      out.push(`open ${JSON.stringify(rest)}`);
      visit(inner ?? []);
      out.push("close");
    }
  };
  visit(usj?.content ?? []);
  return out;
}

/** Where strings `a` and `b` differ, with some context on each side, for a failure message. */
function difference(a: string, b: string, context = 80): string {
  let start = 0;
  while (start < a.length && start < b.length && a[start] === b[start]) start += 1;
  let end = 0;
  while (
    end < a.length - start &&
    end < b.length - start &&
    a[a.length - 1 - end] === b[b.length - 1 - end]
  )
    end += 1;
  const from = Math.max(0, start - context);
  const show = (text: string) =>
    `${from > 0 ? "…" : ""}${text.slice(from, Math.min(text.length, text.length - end + context))}${end > context ? "…" : ""}`;
  return `${show(a)}\n      vs ${show(b)}`;
}

/** The blocks two sequences do not share at their start or end. */
function changedWindow(a: readonly string[], b: readonly string[]): [string[], string[]] {
  let prefix = 0;
  while (prefix < a.length && prefix < b.length && a[prefix] === b[prefix]) prefix += 1;
  let suffix = 0;
  while (
    suffix < a.length - prefix &&
    suffix < b.length - prefix &&
    a[a.length - 1 - suffix] === b[b.length - 1 - suffix]
  )
    suffix += 1;
  return [a.slice(prefix, a.length - suffix), b.slice(prefix, b.length - suffix)];
}

/** The text of serialized blocks, an atom as U+FFFC, blocks joined by line breaks. */
function textOf(blocks: readonly string[]): string {
  return blocks
    .map((json) => {
      if (json.startsWith("open") || json === "close") return "";
      const item: Item = JSON.parse(json);
      return typeof item === "string"
        ? item
        : unitText(unitsOf(isLeafBlock(item) ? (item.content ?? []) : [item]));
    })
    .join("\n");
}

/** How `actual` departs from `expected` (one acceptable document), as a shape word. */
function departureShape(before: Usj, expected: Usj, actual: Usj | undefined): string {
  if (normalizedDoc(actual) === normalizedDoc(before)) return "ignored";
  const [wantBlocks, gotBlocks] = changedWindow(blockSequence(expected), blockSequence(actual));
  const [touched] = changedWindow(blockSequence(before), blockSequence(expected));
  const [, actuallyTouched] = changedWindow(blockSequence(before), blockSequence(actual));
  const words: string[] = [];
  if (actuallyTouched.length > Math.max(1, touched.length + 1)) words.push("changed other blocks");
  const want = textOf(wantBlocks);
  const got = textOf(gotBlocks);
  if (want !== got) {
    let start = 0;
    while (start < want.length && start < got.length && want[start] === got[start]) start += 1;
    let end = 0;
    while (
      end < want.length - start &&
      end < got.length - start &&
      want[want.length - 1 - end] === got[got.length - 1 - end]
    )
      end += 1;
    const lost = want.slice(start, want.length - end);
    const gained = got.slice(start, got.length - end);
    const describe = (bytes: string): string =>
      [
        ...new Set(
          [...bytes].map((ch) =>
            ch === NBSP
              ? "nbsp"
              : ch === "\n"
                ? "block break"
                : ch === "￼"
                  ? "atom"
                  : /\s/.test(ch)
                    ? "space"
                    : "text",
          ),
        ),
      ].join("+");
    if (lost) words.push(`lost ${describe(lost)}`);
    if (gained) words.push(`gained ${describe(gained)}`);
  } else {
    const count = (blocks: readonly string[], pattern: RegExp) =>
      blocks.join("").match(pattern)?.length ?? 0;
    const emptySpan = /"type":"char"(,"[^"]+":"[^"]*")*}/g;
    if (count(gotBlocks, emptySpan) > count(wantBlocks, emptySpan)) words.push("empty span left");
    else if (count(gotBlocks, /"type":"char"/g) !== count(wantBlocks, /"type":"char"/g))
      words.push("span count differs");
    else if (gotBlocks.length !== wantBlocks.length) words.push("block count differs");
    else words.push("markup differs");
  }
  return words.join(", ");
}

// ---------------------------------------------------------------------------------------------
// The rows

/** The vendored testUSFM corpus chapters (see that directory's README). */
const RICH_CORPUS_DIR = [
  "../../libs/shared/src/converters/usfm/testUsfmCorpus",
  "libs/shared/src/converters/usfm/testUsfmCorpus",
].find((dir) => existsSync(dir));

/** The rich corpus chapters, by the part of the oracle that edits them: the short ones beside the
 * keystroke corpus, the long ones in a part of their own, so each test file stays fast. */
const RICH_CORPUS: { [part in OraclePart]: string[] } = {
  corpus: [
    "testUSFM-1SA-1.usj",
    "testUSFM-2SA-2.usj",
    "testUSFM-2SA-4.usj",
    "testUSFM-2SA-5.usj",
    "spacing-word-break.usj",
  ],
  chapters: [
    "testUSFM-2SA-1.usj",
    "testUSFM-2SA-3-corrected.usj",
    "web-matthew-1-and-2.usj",
    "web-matthew-5-section-header.usj",
  ],
};

/** A part of the oracle's rows: the keystroke corpus with the short rich corpus chapters, or the
 * long chapters. */
export type OraclePart = "corpus" | "chapters";

/** How many carets a rich corpus chapter is visited at by default: spread evenly over the
 * document, three in four at a text node's edge or between atoms, where a keystroke meets
 * structure, the rest inside text. `TYPING_FIDELITY_ORACLE_CARETS=all` visits every caret, and a
 * number visits that many. */
const RICH_CARETS = 32;

const CARETS_OVERRIDE: number | "all" | undefined =
  process.env.TYPING_FIDELITY_ORACLE_CARETS === "all"
    ? "all"
    : Number(process.env.TYPING_FIDELITY_ORACLE_CARETS) || undefined;
const WRITE = process.env.TYPING_FIDELITY_ORACLE_WRITE === "1";
const DUMP = process.env.TYPING_FIDELITY_ORACLE_DUMP === "1";
/** Mount the document afresh for every keystroke, to tell a failure that depends on the keystrokes
 * before it (and their undo and redo) from one that does not. */
const FRESH = process.env.TYPING_FIDELITY_ORACLE_FRESH === "1";
/** Print each keystroke case as it runs, to find the keystrokes before a failure. */
const TRACE = process.env.TYPING_FIDELITY_ORACLE_TRACE === "1";

interface Row {
  name: string;
  usj: Usj;
  /** How many carets the row visits, or every one. */
  carets: number | "all";
}

function rows(part: OraclePart): Row[] {
  if (!RICH_CORPUS_DIR) throw new Error("testUsfmCorpus directory not found");
  const rich = RICH_CORPUS[part].map((file) => ({
    name: file,
    usj: JSON.parse(readFileSync(`${RICH_CORPUS_DIR}/${file}`, "utf8")) as Usj,
    carets: RICH_CARETS,
  }));
  if (part === "chapters") return rich;
  return [
    ...KEYSTROKE_CORPUS.map(({ name, usj }) => ({ name, usj, carets: "all" as const })),
    ...rich,
  ];
}

/** `count` of `items`, spread evenly over them. */
function spread<T>(items: readonly T[], count: number): T[] {
  if (items.length <= count) return [...items];
  return Array.from({ length: count }, (_, at) => items[Math.floor((at * items.length) / count)]);
}

/** Which carets a row visits: every one, or `count` of them spread over the document, three in
 * four where a keystroke meets structure (a text node's edge, a gap between atoms). */
function sampled(carets: Caret[], count: number | "all"): Caret[] {
  if (count === "all" || carets.length <= count) return carets;
  const isEdge = (caret: Caret, index: number): boolean =>
    caret.type === "element" ||
    carets[index - 1]?.key !== caret.key ||
    carets[index + 1]?.key !== caret.key;
  const edges = carets.filter(isEdge);
  const inside = carets.filter((caret, index) => !isEdge(caret, index));
  const edgeCount = Math.ceil((count * 3) / 4);
  const chosen = new Set([...spread(edges, edgeCount), ...spread(inside, count - edgeCount)]);
  return carets.filter((caret) => chosen.has(caret));
}

/** A view the oracle runs in. */
export interface TypingOracleView {
  name: EditorViewName;
  structureProtectionMode?: StructureProtectionMode;
}

interface ExpectedFailures {
  [row: string]: { [shape: string]: string };
}

/**
 * Register the oracle's rows for `view`, compared with the shapes `listFile` lists as known to
 * fail: an unlisted shape fails its row, and so does a listed shape the run no longer produces (at
 * the default carets), so the list only shrinks.
 */
export function describeTypingFidelityOracle(
  oracleView: TypingOracleView,
  part: OraclePart,
  listFile: URL,
): void {
  installSelectionModify();
  const view = editorView(oracleView.name);
  const label = `${oracleView.name}${oracleView.structureProtectionMode ? ` (${oracleView.structureProtectionMode})` : ""}`;
  const listed: ExpectedFailures = existsSync(listFile)
    ? JSON.parse(readFileSync(listFile, "utf8"))
    : {};
  const written: ExpectedFailures = {};
  const partRows = rows(part);
  // The list is shared by the view's parts: a rewrite replaces this part's rows only.
  afterAll(() => {
    // A view this run leaves out writes nothing, so a rewrite keeps its rows.
    if (!WRITE || !isViewEnabled(oracleView.name)) return;
    const current: ExpectedFailures = existsSync(listFile)
      ? JSON.parse(readFileSync(listFile, "utf8"))
      : {};
    const ownRows = new Set(partRows.map(({ name }) => name));
    const merged = Object.fromEntries(
      [
        ...Object.entries(current).filter(([row]) => !ownRows.has(row)),
        ...Object.entries(written),
      ].sort(([a], [b]) => a.localeCompare(b)),
    );
    writeFileSync(listFile, `${JSON.stringify(merged, null, 2)}\n`);
  });

  const describeView = describeInView(oracleView.name);
  describeView(`every keystroke changes only what it typed (${label} view, ${part})`, () => {
    it.each(partRows.map((row) => [row.name, row] as const))(
      "%s",
      async (rowName, row) => {
        const mount = () =>
          mountInView(row.usj, view, {
            structureProtectionMode: oracleView.structureProtectionMode,
          });
        let mounted = await mount();
        const failures = new Map<string, { count: number; examples: string[] }>();
        const fail = (shape: string, detail: string): void => {
          const entry = failures.get(shape) ?? { count: 0, examples: [] };
          entry.count += 1;
          if (entry.examples.length < 2) entry.examples.push(detail);
          failures.set(shape, entry);
          // eslint-disable-next-line no-console -- TYPING_FIDELITY_ORACLE_DUMP asks for this output.
          if (DUMP) console.info(`DUMP ${label} ${rowName} :: ${shape}\n    ${detail}`);
        };

        const loaded = mounted.ref.current?.getUsj();
        if (!loaded) throw new Error("no USJ loaded");
        // The editor writes the USJ version it speaks.
        if (
          normalizedDoc(loaded, false) !==
          normalizedDoc({ ...row.usj, version: loaded.version }, false)
        ) {
          fail(
            "load-save fixed point",
            `authored ${difference(normalizedDoc({ ...row.usj, version: loaded.version }, false), normalizedDoc(loaded, false))}`,
          );
        }
        const base = JSON.stringify(loaded);
        const usjBlocks = leafBlocks(loaded);
        const usjTexts = usjBlocks.map(({ block }) => unitText(unitsOf(block.content)));
        const snapshot = () =>
          mounted.lexical.getEditorState().read(() => {
            const editorModel = $editorModel(usjTexts);
            return {
              model: editorModel,
              carets: sampled($carets(editorModel), CARETS_OVERRIDE ?? row.carets),
            };
          });
        let { model, carets } = snapshot();
        const comparable = new Set(model.blocks.keys());
        // Most blocks must be comparable for the row to test anything.
        expect(
          comparable.size,
          "leaf blocks whose text the editor shows as loaded",
        ).toBeGreaterThan(usjBlocks.length / 2);
        /** Whether the nodes of the snapshot's block `block` are still the editor's. */
        const isCurrent = (block: number): boolean =>
          mounted.lexical.getEditorState().read(() => {
            const key = model.blocks.get(block);
            return (
              key !== undefined &&
              $getNodeByKey(key) !== null &&
              (model.texts.get(block) ?? []).every(([text]) => $getNodeByKey(text) !== null)
            );
          });

        let cases = 0;
        // By index: a re-snapshot replaces `carets` with the same carets under new node keys.
        for (const caretIndex of Array.from(carets.keys()))
          for (const keystroke of KEYSTROKES) {
            if (FRESH) {
              mounted.unmount();
              mounted = await mount();
              ({ model, carets } = snapshot());
            }
            // The document is the loaded one again, but an undo may have rebuilt its nodes under
            // new keys.
            const caretBlock = carets[caretIndex].block;
            if (!isCurrent(caretBlock) || !isCurrent(caretBlock + 1)) {
              // Mounted afresh rather than re-read: the document is the loaded one again, but the
              // editor state an undo brought back need not show it the same way.
              mounted.unmount();
              mounted = await mount();
              ({ model, carets } = snapshot());
            }
            const caret = carets[caretIndex];
            const units = unitsOf(usjBlocks[caret.block].block.content);
            if (keystroke.range === "into the next block" && caret.unit !== units.length) continue;
            if (keystroke.range === "two forward" && caret.unit + 2 > units.length) continue;
            const caretModel = model;
            const focusPoint = mounted.lexical.getEditorState().read(() => {
              if (keystroke.range === "two forward")
                return $pointAtUnit(caretModel, caret.block, caret.unit + 2, "before");
              if (keystroke.range === "into the next block") {
                const nextBlock = caret.block + 1;
                if (!comparable.has(nextBlock)) return undefined;
                const nextSize = unitsOf(usjBlocks[nextBlock]?.block.content).length;
                return $pointAtUnit(caretModel, nextBlock, Math.min(1, nextSize), "before");
              }
              return caret;
            });
            if (!focusPoint) continue;
            let placed: Awaited<ReturnType<typeof place>>;
            try {
              placed = await place(mounted, model, caret, focusPoint);
            } catch {
              // The snapshot's nodes are gone (an undo rebuilt them).
              mounted.unmount();
              mounted = await mount();
              ({ model, carets } = snapshot());
              continue;
            }
            if (!placed) continue;
            const { anchor, focus } = placed;
            const [first, last] =
              anchor.block < focus.block ||
              (anchor.block === focus.block && anchor.unit <= focus.unit)
                ? [anchor, focus]
                : [focus, anchor];
            const blockUnits = unitsOf(usjBlocks[first.block].block.content);
            let edit: Edit | undefined;
            let isStructural = false;
            const isCollapsed = first.block === last.block && first.unit === last.unit;
            if (!isCollapsed && keystroke.range === undefined) continue;
            const inserted = keystroke.inserts ?? keystroke.text;
            if (inserted !== undefined) {
              if (first.block === last.block)
                edit = {
                  kind: "replace",
                  block: first.block,
                  from: first.unit,
                  to: last.unit,
                  text: inserted,
                };
              else if (last.block === first.block + 1)
                edit = {
                  kind: "merge",
                  block: first.block,
                  from: first.unit,
                  to: last.unit,
                  text: inserted,
                };
              isStructural =
                first.block !== last.block ||
                blockUnits.slice(first.unit, last.unit).some((unit) => unit.kind === "atom");
            } else if (keystroke.key === "Enter") {
              edit = { kind: "split", block: first.block, at: first.unit };
              // Only a paragraph splits; the book line or a table cell may refuse to.
              isStructural = usjBlocks[first.block].block.type !== "para";
            } else if (keystroke.key === "Backspace") {
              if (first.unit > 0) {
                const width = /[\uDC00-\uDFFF]/.test(
                  unitText(blockUnits.slice(first.unit - 1, first.unit)),
                )
                  ? 2
                  : 1;
                edit = {
                  kind: "replace",
                  block: first.block,
                  from: first.unit - width,
                  to: first.unit,
                  text: "",
                };
                isStructural = blockUnits[first.unit - 1]?.kind === "atom";
              } else {
                isStructural = true;
                edit = { kind: "join", block: first.block, direction: "backward" };
              }
            } else if (keystroke.key === "Delete") {
              if (first.unit < blockUnits.length) {
                edit = {
                  kind: "replace",
                  block: first.block,
                  from: first.unit,
                  to: first.unit + 1,
                  text: "",
                };
                isStructural = blockUnits[first.unit]?.kind === "atom";
              } else {
                isStructural = true;
                edit = { kind: "join", block: first.block, direction: "forward" };
              }
            }
            const before = edit ? usjBlocks[first.block] : undefined;
            const context = [
              `${unitShape(blockUnits, first.unit - 1)}|${unitShape(blockUnits, first.unit)}`,
              ...spanEdgeShape(before?.block.content ?? [], first.unit),
              ...(isCollapsed
                ? []
                : [`to ${unitShape(unitsOf(usjBlocks[last.block].block.content), last.unit)}`]),
            ].join(" ");
            const caretLabel = `block ${first.block} unit ${first.unit}${isCollapsed ? "" : ` to block ${last.block} unit ${last.unit}`}`;

            // eslint-disable-next-line no-console -- TYPING_FIDELITY_ORACLE_TRACE asks for this output.
            if (TRACE) console.info(`TRACE ${rowName} ${keystroke.name} at ${caretLabel}`);
            const thrown = await press(
              mounted,
              keystroke.key ?? keystroke.text ?? "",
              keystroke.text,
            );
            const shape = (words: string) => `${keystroke.name} at ${context}: ${words}`;
            if (thrown.length > 0) {
              fail(
                shape(`threw "${thrown[0].replace(/\d+/g, "N")}"`),
                `${caretLabel}: ${thrown[0]}`,
              );
              // The editor may be left inconsistent by an exception mid-update.
              mounted.unmount();
              mounted = await mount();
              ({ model, carets } = snapshot());
              continue;
            }
            let after = mounted.ref.current?.getUsj();
            // A guarded structure mode arms a structural deletion on the first press and makes it
            // on the second.
            if (
              isStructural &&
              oracleView.structureProtectionMode === "guarded" &&
              (keystroke.key === "Backspace" || keystroke.key === "Delete") &&
              JSON.stringify(after) === base
            ) {
              thrown.push(...(await press(mounted, keystroke.key)));
              after = mounted.ref.current?.getUsj();
            }
            cases += 1;
            const expected = edit
              ? expectedDocs(loaded, edit, oracleView.structureProtectionMode === "guarded")
              : new Set<string>();
            const got = normalizedDoc(after);
            const isUnchanged = JSON.stringify(after) === base;
            // A space typed as an empty verse's whole content is dropped (TextSpacingPlugin): the
            // round trip to disk drops it too.
            // A table or a sidebar is read-only (OpaqueBlockGuardPlugin): an edit inside one is
            // refused.
            const isInReadOnlyConstruct =
              usjBlocks[first.block].path.length > 1 || usjBlocks[last.block].path.length > 1;
            // Text typed into an empty blank line (`\b`) is refused (ParaNodePlugin).
            const isIntoBlankLine =
              keystroke.text !== undefined &&
              isCollapsed &&
              usjBlocks[first.block].block.marker === "b" &&
              blockUnits.length === 0;
            const isEmptyVerseSpace =
              inserted === " " &&
              isCollapsed &&
              blockUnits[first.unit - 1]?.kind === "atom" &&
              (blockUnits[first.unit] === undefined || blockUnits[first.unit].kind === "atom");
            if (
              !(
                expected.has(got) ||
                (isUnchanged &&
                  (isStructural || isEmptyVerseSpace || isIntoBlankLine || isInReadOnlyConstruct))
              )
            ) {
              const [want] = [...expected];
              const words =
                want === undefined
                  ? isUnchanged
                    ? "ignored"
                    : "changed where no change was expected"
                  : departureShape(loaded, { ...loaded, content: JSON.parse(want).content }, after);
              const [wantWindow, gotWindow] = changedWindow(
                blockSequence(want === undefined ? loaded : JSON.parse(want)),
                blockSequence(after),
              );
              fail(
                shape(words),
                `${caretLabel}\n    expected ${difference(wantWindow.join("\n"), gotWindow.join("\n"))}`,
              );
            }
            if (!isUnchanged) {
              const afterJson = JSON.stringify(after);
              await history(mounted, "undo");
              const undone = JSON.stringify(mounted.ref.current?.getUsj());
              if (undone !== base) {
                const [wantWindow, gotWindow] = changedWindow(
                  blockSequence(loaded),
                  blockSequence(JSON.parse(undone)),
                );
                fail(
                  shape("Undo does not restore the document"),
                  `${caretLabel}\n    loaded ${difference(wantWindow.join("\n"), gotWindow.join("\n"))}`,
                );
              } else {
                await history(mounted, "redo");
                const redone = JSON.stringify(mounted.ref.current?.getUsj());
                if (redone !== afterJson)
                  fail(
                    shape("Redo does not re-apply the keystroke"),
                    `${caretLabel}\n    typed  ${difference(afterJson, redone)}`,
                  );
                await history(mounted, "undo");
              }
              if (JSON.stringify(mounted.ref.current?.getUsj()) !== base) {
                mounted.unmount();
                mounted = await mount();
              }
            }
          }
        mounted.unmount();

        expect(cases, "no keystroke was made").toBeGreaterThan(0);
        const reasons = listed[rowName] ?? {};
        if (WRITE) {
          if (failures.size > 0)
            written[rowName] = Object.fromEntries(
              [...failures.keys()].sort().map((shape) => [shape, reasons[shape] ?? ""]),
            );
          return;
        }
        const known = new Set(Object.keys(reasons));
        expect(
          [...failures]
            .filter(([shape]) => !known.has(shape))
            .map(
              ([shape, { count, examples }]) => `${shape} (${count}x)\n  ${examples.join("\n  ")}`,
            ),
        ).toEqual([]);
        if (CARETS_OVERRIDE === undefined)
          expect(
            [...known].filter((shape) => !failures.has(shape)),
            "listed as failing but not produced — rewrite the list",
          ).toEqual([]);
        expect(
          [...known].filter((shape) => !reasons[shape]),
          "listed without the reason it is left failing",
        ).toEqual([]);
      },
      600_000,
    );
  });
}
