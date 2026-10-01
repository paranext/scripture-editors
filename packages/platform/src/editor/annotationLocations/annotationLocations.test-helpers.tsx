/**
 * The location oracle's harness: mount the real `Editor` in any view, walk its display bytes and
 * caret points in document order with their outbound labels, and read which bytes hold an
 * annotation. Plus the two hand-made corpora the default suite runs.
 */
// Side-effect import: the `Range` rect and focus shims the mounted editor needs under jsdom.
import "../settledGetUsj.test-helpers";
import Editor from "../Editor";
import { EditorRef } from "../editor.model";
import {
  MarkerContent,
  MarkerObject,
  Usj,
  UsjDocumentLocation,
} from "@eten-tech-foundation/scripture-utilities";
import { EditorRefPlugin } from "@lexical/react/LexicalEditorRefPlugin";
import { act, render } from "@testing-library/react";
import {
  $getRoot,
  $isDecoratorNode,
  $isElementNode,
  $isTextNode,
  LexicalEditor,
  LexicalNode,
} from "lexical";
import { createRef, ReactElement, RefObject } from "react";
import {
  $charSeparatorPrefixLength,
  $displayAnnotationsOf,
  $isDisplayAnnotationCarrier,
  $isMarkerNode,
  $isMarkerTrailingSeparator,
  $isTypedMarkNode,
  LoggerBasic,
  NBSP,
} from "shared";
import {
  $getLocationFromNode,
  annotationHighlightClassNames,
  getViewOptions,
  STANDARD_VIEW_MODE,
  ViewOptions,
} from "shared-react";

/** The annotation type the oracle passes to `setAnnotation`. */
export const ORACLE_TYPE = "oracle";
/** What the Editor stores {@link ORACLE_TYPE} as on marks and carriers. */
export const HELD_TYPE = `external-${ORACLE_TYPE}`;

export interface MountedInView {
  ref: RefObject<EditorRef | null>;
  lexical: LexicalEditor;
  unmount: () => void;
  /** Every `error` and `warn` the Editor's logger received, prefixed `E ` or `W `. */
  logs: string[];
}

/** Mounts `usj` in the real `Editor` with `view`, collecting what its logger reports. */
export async function mountInView(usj: Usj, view: ViewOptions): Promise<MountedInView> {
  const ref = createRef<EditorRef>();
  const lexicalRef = createRef<LexicalEditor>();
  const logs: string[] = [];
  const logger: LoggerBasic = {
    error: (...params: unknown[]) => logs.push(`E ${params.map(String).join(" ")}`),
    warn: (...params: unknown[]) => logs.push(`W ${params.map(String).join(" ")}`),
    info: () => undefined,
    debug: () => undefined,
  };
  const ui: ReactElement = (
    <Editor ref={ref} defaultUsj={usj} options={{ view }} logger={logger}>
      <EditorRefPlugin editorRef={lexicalRef} />
    </Editor>
  );
  let unmount: (() => void) | undefined;
  await act(async () => {
    ({ unmount } = render(ui));
  });
  if (!lexicalRef.current || !unmount) throw new Error("mount failed");
  return { ref, lexical: lexicalRef.current, unmount, logs };
}

function requireViewOptions(mode: string): ViewOptions {
  const options = getViewOptions(mode);
  if (!options) throw new Error(`no view options for ${mode}`);
  return options;
}

const standard = requireViewOptions(STANDARD_VIEW_MODE);

/** The views the oracle runs, by name. */
export const ORACLE_VIEWS: { name: string; view: ViewOptions }[] = [
  { name: "standard", view: standard },
  { name: "standard+expandedNotes", view: { ...standard, noteMode: "expanded" } },
  { name: "unformatted", view: requireViewOptions("unformatted") },
  {
    name: "visible",
    view: {
      markerMode: "visible",
      noteMode: "expanded",
      hasSpacing: false,
      isFormattedFont: false,
    },
  },
  {
    name: "visible+collapsed",
    view: { markerMode: "visible", noteMode: "collapsed", hasSpacing: true, isFormattedFont: true },
  },
  { name: "formatted", view: requireViewOptions("formatted") },
  { name: "paragraph-structure", view: requireViewOptions("paragraph-structure") },
  {
    name: "hidden+expanded",
    view: { markerMode: "hidden", noteMode: "expanded", hasSpacing: false, isFormattedFont: false },
  },
];

/** The {@link ORACLE_VIEWS} entry called `name`. */
export function oracleView(name: string): ViewOptions {
  const found = ORACLE_VIEWS.find((entry) => entry.name === name);
  if (!found) throw new Error(`unknown oracle view: ${name}`);
  return found.view;
}

/** A location as one stable string: its path, then its other fields sorted by name. */
export function locKey(location: UsjDocumentLocation | undefined): string {
  if (!location) return "∅";
  const rest = Object.entries(location)
    .filter(([key]) => key !== "jsonPath")
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${String(value)}`)
    .join(",");
  return `${location.jsonPath}${rest ? `|${rest}` : ""}`;
}

/** One live "byte": a char of a text node, or a whole decorator. */
export interface Byte {
  node: LexicalNode;
  key: string;
  /** The char's offset in its text node; -1 for a decorator. */
  offset: number;
  ch: string;
  label: string;
  loc: UsjDocumentLocation;
  separator: boolean;
  /** Edge whitespace of a text carrier: display bytes no range is required to hold. */
  soft: boolean;
  carrier: boolean;
  nodeType: string;
}

/** Leaves in document order. */
export function $leaves(): LexicalNode[] {
  const out: LexicalNode[] = [];
  const walk = (node: LexicalNode): void => {
    if ($isElementNode(node)) node.getChildren().forEach(walk);
    else out.push(node);
  };
  $getRoot().getChildren().forEach(walk);
  return out;
}

/** How many leading bytes of `node` are a separator, with the predicates the wrap itself uses. */
export function $separatorLen(node: LexicalNode): number {
  if (!$isTextNode(node)) return 0;
  if ($isMarkerTrailingSeparator(node)) return node.getTextContentSize();
  if ($isMarkerNode(node)) return 0;
  return $charSeparatorPrefixLength(node);
}

/** The `[lead, end)` extent of a carrier text node without its edge whitespace — a glyph's
 * own separator (`\v 3 `, a caller's surrounding spaces). Deliberately written here, apart from
 * the production clamp, so the oracle does not grade the code with the code's own rule. */
export function carrierEdgeWhitespace(text: string): { lead: number; trail: number } {
  const lead = /^\s*/u.exec(text)?.[0].length ?? 0;
  const trail = lead === text.length ? 0 : (/\s*$/u.exec(text)?.[0].length ?? 0);
  return { lead, trail };
}

/** Whether char `offset` of `node` is edge whitespace of a text carrier. */
function $isSoftByte(node: LexicalNode, offset: number): boolean {
  if (offset < 0 || !$isTextNode(node) || !$isDisplayAnnotationCarrier(node)) return false;
  const text = node.getTextContent();
  const { lead, trail } = carrierEdgeWhitespace(text);
  return offset < lead || offset >= text.length - trail;
}

/** A decorator that displays bytes: a carrier, one with text, or a chapter decorator (which
 * displays its number). */
export function $isByteDecorator(node: LexicalNode): boolean {
  return (
    $isDecoratorNode(node) &&
    ($isDisplayAnnotationCarrier(node) ||
      node.getTextContentSize() > 0 ||
      node.getType() === "immutable-chapter")
  );
}

/** The byte sequence: `[node, offset]`, offset -1 for a decorator. */
export function $byteNodes(): [LexicalNode, number][] {
  const out: [LexicalNode, number][] = [];
  for (const node of $leaves()) {
    if ($isTextNode(node)) for (let i = 0; i < node.getTextContentSize(); i++) out.push([node, i]);
    else if ($isByteDecorator(node)) out.push([node, -1]);
  }
  return out;
}

/** Outbound label of the caret in front of (`after` false) or behind the byte. */
export function $byteLoc(
  node: LexicalNode,
  offset: number,
  after: boolean,
  view: ViewOptions,
): UsjDocumentLocation {
  if (offset >= 0) return $getLocationFromNode(node, offset + (after ? 1 : 0), view);
  const parent = node.getParentOrThrow();
  return $getLocationFromNode(parent, node.getIndexWithinParent() + (after ? 1 : 0), view);
}

/** Every byte in document order with the labels in front of and behind it. */
export function $byteWalk(view: ViewOptions): (Byte & { afterLabel: string })[] {
  return $byteNodes().map(([node, offset]) => {
    const loc = $byteLoc(node, offset, false, view);
    const after = $byteLoc(node, offset, true, view);
    return {
      node,
      key: node.getKey(),
      offset,
      ch:
        offset >= 0
          ? node.getTextContent()[offset]
          : `[${node.getType()}:${node.getTextContent()}]`,
      loc,
      label: locKey(loc),
      afterLabel: locKey(after),
      separator: offset >= 0 && offset < $separatorLen(node),
      soft: $isSoftByte(node, offset),
      carrier: $isDisplayAnnotationCarrier(node),
      nodeType: node.getType(),
    };
  });
}

/** One caret point with its outbound label; `label` is `"THREW"` when outbound threw. */
export interface CaretPoint {
  where: string;
  loc: UsjDocumentLocation | undefined;
  label: string;
}

/** Every caret point in document order with its outbound label (root element points included). */
export function $caretWalk(view: ViewOptions): CaretPoint[] {
  const out: CaretPoint[] = [];
  const push = (node: LexicalNode, offset: number, where: string): void => {
    try {
      const loc = $getLocationFromNode(node, offset, view);
      out.push({ where, loc, label: locKey(loc) });
    } catch (error) {
      out.push({ where: `${where} THREW ${String(error)}`, loc: undefined, label: "THREW" });
    }
  };
  const walk = (node: LexicalNode): void => {
    if ($isElementNode(node)) {
      const children = node.getChildren();
      const own = !$isTypedMarkNode(node);
      if (own) push(node, 0, `${node.getType()}#${node.getKey()}@0`);
      children.forEach((child, i) => {
        walk(child);
        if (own) push(node, i + 1, `${node.getType()}#${node.getKey()}@${i + 1}`);
      });
    } else if ($isTextNode(node)) {
      for (let i = 0; i <= node.getTextContentSize(); i++)
        push(node, i, `${node.getType()}#${node.getKey()}:${i}`);
    }
  };
  walk($getRoot());
  return out;
}

/** What holds annotation `type`/`id` now, by byte index (the indexing of {@link $byteNodes}): a
 * `TypedMarkNode` around the byte, or a carrier range over it (a decorator counts whole). A byte
 * both hold counts as `"mark"`. */
export function $heldIndexes(type: string, id: string): Map<number, "mark" | "carrier"> {
  const held = new Map<number, "mark" | "carrier">();
  $byteNodes().forEach(([node, offset], index) => {
    let inMark = false;
    for (let parent = node.getParent(); parent; parent = parent.getParent())
      if ($isTypedMarkNode(parent) && (parent.getTypedIDs()[type] ?? []).includes(id))
        inMark = true;
    if (inMark) {
      held.set(index, "mark");
      return;
    }
    const byCarrier = $displayAnnotationsOf(node)
      .filter((annotation) => annotation.type === type && annotation.id === id)
      .some((range) =>
        offset < 0 || range.start === range.end
          ? true
          : range.start <= offset && offset < range.end,
      );
    if (byCarrier) held.set(index, "carrier");
  });
  return held;
}

/** Whether `element` or an ancestor of it carries class `className`. */
function hasClassAround(element: HTMLElement | null, className: string): boolean {
  for (let current = element; current; current = current.parentElement)
    if (current.classList.contains(className)) return true;
  return false;
}

/** Every range of every editor highlight painting with class `className`. */
function highlightRangesWith(className: string): AbstractRange[] {
  return [...CSS.highlights].flatMap(([name, highlight]) =>
    annotationHighlightClassNames(name)?.includes(className) ? [...highlight] : [],
  );
}

/**
 * What paints annotation `id` on screen now, by byte index (the indexing of {@link $byteNodes}):
 * an element whose classes name it — a `<mark>`, or a display byte painted whole — or an editor
 * highlight over the byte's character. A decorator counts when any of it is painted. Read from the
 * DOM, never from the model.
 */
export function $paintedIndexes(lexical: LexicalEditor, id: string): Set<number> {
  const className = `annotationId-${id}`;
  const ranges = highlightRangesWith(className).filter((range) => range instanceof Range);
  const painted = new Set<number>();
  $byteNodes().forEach(([node, offset], index) => {
    const element = lexical.getElementByKey(node.getKey());
    if (!element) return;
    if (hasClassAround(element, className)) {
      painted.add(index);
      return;
    }
    if (offset < 0) {
      if (ranges.some((range) => range.intersectsNode(element))) painted.add(index);
      return;
    }
    const text = [...element.childNodes].find((child) => child.nodeType === Node.TEXT_NODE);
    if (!text) return;
    if (
      ranges.some(
        (range) =>
          !range.collapsed &&
          range.comparePoint(text, offset) === 0 &&
          range.comparePoint(text, offset + 1) === 0,
      )
    )
      painted.add(index);
  });
  return painted;
}

/**
 * Which characters of decorator `node`'s rendered text paint annotation `id`, read from the DOM:
 * `whole` when its element or an ancestor carries the annotation's class, else the characters an
 * editor highlight covers; `any` when any highlight touches the element at all.
 */
export function $paintedDecoratorChars(
  lexical: LexicalEditor,
  node: LexicalNode,
  id: string,
): { whole: boolean; chars: Set<number>; any: boolean } {
  const className = `annotationId-${id}`;
  const element = lexical.getElementByKey(node.getKey());
  const chars = new Set<number>();
  if (!element) return { whole: false, chars, any: false };
  if (hasClassAround(element, className)) return { whole: true, chars, any: true };
  const ranges = highlightRangesWith(className).filter((range) => range instanceof Range);
  const walker = element.ownerDocument.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  let offset = 0;
  for (let text = walker.nextNode(); text; text = walker.nextNode()) {
    const length = text.textContent?.length ?? 0;
    for (let i = 0; i < length; i++)
      if (
        ranges.some(
          (range) =>
            !range.collapsed &&
            range.comparePoint(text, i) === 0 &&
            range.comparePoint(text, i + 1) === 0,
        )
      )
        chars.add(offset + i);
    offset += length;
  }
  return { whole: false, chars, any: ranges.some((range) => range.intersectsNode(element)) };
}

/** The key of the nearest block element around `node` — a paragraph, a table cell, the root. */
export function $blockKey(node: LexicalNode): string {
  for (let parent = node.getParent(); parent; parent = parent.getParent())
    if ($isElementNode(parent) && !parent.isInline()) return parent.getKey();
  return "";
}

/** The held bytes of `type`/`id` in document order, a decorator as `[<type>]`, concatenated. */
export function $heldBytes(type: string, id: string): string {
  const held = $heldIndexes(type, id);
  return $byteNodes()
    .filter((_, index) => held.has(index))
    .map(([node, offset]) => (offset >= 0 ? node.getTextContent()[offset] : `[${node.getType()}]`))
    .join("");
}

/** How many nodes still carry `id` at all (marks, or display state on any node incl. elements). */
export function $anyTrace(id: string, type = HELD_TYPE): number {
  let count = 0;
  const walk = (node: LexicalNode): void => {
    if ($isTypedMarkNode(node) && (node.getTypedIDs()[type] ?? []).includes(id)) count++;
    if ($displayAnnotationsOf(node).some((a) => a.type === type && a.id === id)) count++;
    if ($isElementNode(node)) node.getChildren().forEach(walk);
  };
  walk($getRoot());
  return count;
}

/** The byte sequence's content, independent of how text is split into nodes. */
export function $flatSignature(): string {
  return $byteNodes()
    .map(([node, offset]) => (offset >= 0 ? node.getTextContent()[offset] : `[${node.getType()}]`))
    .join("");
}

const usj = (content: MarkerContent[]): Usj => ({ type: "USJ", version: "3.1", content });

/** A marker object with attributes `MarkerObject` does not name (`lemma`, `who`, `file`, …). */
const attributed = (marker: MarkerObject & { [attribute: string]: unknown }): MarkerObject =>
  marker;

/** The rich hand-made corpus: char spans with and without attributes, nested `+` chars,
 * `\va`/`\vp`/`\ca`/`\cp`, milestones with attributes, notes, a figure, an optbreak, a table, `\id`,
 * an empty paragraph, a verse at a paragraph end, a second chapter. */
export const richUsj: Usj = usj([
  { type: "book", marker: "id", code: "GEN", content: ["Genesis test"] },
  { type: "chapter", marker: "c", number: "1", altnumber: "2", pubnumber: "A" },
  {
    type: "para",
    marker: "p",
    content: [
      { type: "verse", marker: "v", number: "1", altnumber: "1a", pubnumber: "1b" },
      "In the ",
      { type: "char", marker: "nd", content: ["LORD"] },
      " God ",
      attributed({ type: "char", marker: "w", lemma: "grace", strong: "H1", content: ["grace"] }),
      " and ",
      {
        type: "char",
        marker: "add",
        content: ["a ", { type: "char", marker: "nd", content: ["b"] }, " c"],
      },
      " end.",
    ],
  },
  {
    type: "para",
    marker: "q1",
    content: [
      { type: "verse", marker: "v", number: "2" },
      "Then ",
      attributed({ type: "ms", marker: "qt-s", sid: "q1", who: "Pilate" }),
      "said",
      { type: "ms", marker: "qt-e", eid: "q1" },
      " done",
      {
        type: "note",
        marker: "f",
        caller: "+",
        content: [
          { type: "char", marker: "fr", content: ["1.1 "] },
          { type: "char", marker: "ft", content: ["body text"] },
        ],
      },
      " after.",
    ],
  },
  {
    type: "para",
    marker: "p",
    content: [
      { type: "verse", marker: "v", number: "3" },
      "fig ",
      attributed({
        type: "figure",
        marker: "fig",
        file: "x.jpg",
        size: "col",
        content: ["caption"],
      }),
      " break",
      { type: "optbreak" },
      "more",
    ],
  },
  { type: "para", marker: "b" },
  {
    type: "table",
    content: [
      {
        type: "table:row",
        marker: "tr",
        content: [
          { type: "table:cell", marker: "th1", align: "start", content: ["A"] },
          { type: "table:cell", marker: "tc1", align: "start", content: ["B"] },
        ],
      },
    ],
  },
  {
    type: "para",
    marker: "p",
    content: [
      { type: "verse", marker: "v", number: "4" },
      "end ",
      {
        type: "note",
        marker: "x",
        caller: "-",
        content: [
          { type: "char", marker: "xo", content: ["1.1 "] },
          { type: "char", marker: "xt", content: ["Gen 1"] },
        ],
      },
      { type: "verse", marker: "v", number: "5" },
    ],
  },
  { type: "chapter", marker: "c", number: "2" },
  { type: "para", marker: "p", content: [{ type: "verse", marker: "v", number: "1" }, "last"] },
]);

/** Document edges: a chapter first, a verse first in its paragraph, a char span ending the
 * document's last paragraph, and a chapter last. Plus no-break spaces the text itself contains, at
 * the edges of words a range can name on either side: leading a paragraph's text, French
 * punctuation (`mot~:`), a number (`1~000`), ending a text before a char span, leading and ending
 * a char span's content, and between two words (`a~b`). */
export const edgesUsj: Usj = usj([
  { type: "chapter", marker: "c", number: "1" },
  {
    type: "para",
    marker: "p",
    content: [
      { type: "verse", marker: "v", number: "1" },
      { type: "char", marker: "wj", content: ["first"] },
    ],
  },
  {
    type: "para",
    marker: "p",
    content: [
      `${NBSP}mot${NBSP}: 1${NBSP}000 end${NBSP}`,
      { type: "char", marker: "w", content: [`${NBSP}a${NBSP}`] },
      ` a${NBSP}b`,
    ],
  },
  { type: "para", marker: "p", content: ["x ", { type: "char", marker: "bd", content: ["tail"] }] },
  { type: "chapter", marker: "c", number: "2" },
]);
