/**
 * The annotation-location oracle: for every range it builds from a view's settled locations, set
 * an annotation through the public `EditorRef` and compare the bytes that hold it with the bytes
 * the range names.
 *
 * What a range names comes from outbound labels alone, anchored in the fullest display (Standard
 * view, notes expanded, where every USFM byte is on screen): every byte there gets the locations
 * in front of and behind it, their first-appearance order is the document order of settled
 * locations (the universe), and a byte of the view under test covers the universe ranks between
 * its two labels. Inbound mapping is never used to decide what is expected. One product rule is
 * stated outright rather than derived: a note's category that the view under test does not
 * display names nothing ({@link undisplayedCategoryRanks}).
 *
 * The failures that exist are recorded per corpus and view in a committed expected-failure list;
 * {@link expectOracleMatchesList} fails on a failure the list does not name, on a listed entry that
 * no longer fails or fails with fewer classes, and on a listed entry that fails with a class it
 * was not listed with. Each section also pins the run's operation count and a hash of which
 * operations ran, its walk anomalies and the bytes it exempts, so a list cannot shrink by running
 * fewer or other operations or by exempting more.
 *
 * Environment switches: `ANNOTATION_ORACLE_WRITE=1` rewrites the list sections the run completed,
 * `ANNOTATION_ORACLE_SUMMARY=1` prints per-class counts, `ANNOTATION_ORACLE_VIEW=<name>` runs one
 * view, `ANNOTATION_ORACLE_2SA=1` enables the sampled `usj2Sa` files, and
 * `ANNOTATION_ORACLE_2SA_STRIDE` (default 10) sets their sampling stride.
 */
import {
  $anyTrace,
  $blockKey,
  $byteLoc,
  $byteNodes,
  $byteWalk,
  $caretWalk,
  $flatSignature,
  $heldIndexes,
  $paintedDecoratorChars,
  $paintedIndexes,
  carrierEdgeWhitespace,
  HELD_TYPE,
  locKey,
  mountInView,
  MountedInView,
  ORACLE_TYPE,
  oracleView,
} from "./annotationLocations.test-helpers";
import { Usj, UsjDocumentLocation } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { createHash } from "crypto";
import { readFileSync, writeFileSync } from "fs";
import { $isElementNode, $isTextNode, LexicalNode, PointType } from "lexical";
import { $displayAnnotationsOf, $decoratorRenderedText, NBSP } from "shared";
import { $getRangeFromUsjSelection, ViewOptions } from "shared-react";
import { expect } from "vitest";

/** Set to `1` to rewrite the list sections a run completed instead of comparing with them. */
const WRITE = process.env.ANNOTATION_ORACLE_WRITE === "1";
/** Set to `1` to print each run's per-class failure counts. */
const SUMMARY = process.env.ANNOTATION_ORACLE_SUMMARY === "1";

/** Only logs that mean a range was dropped are failures; other warnings are unrelated noise. */
const FAILURE_LOG = /refused|Failed to find/;

/** The settled locations in document order, and which of them name nothing holdable. */
export interface OracleUniverse {
  labels: string[];
  locs: UsjDocumentLocation[];
  rank: Map<string, number>;
  /** Ranks no non-separator, non-soft byte covers (separators, line ends): they name nothing
   * holdable. */
  sep: Set<number>;
  /** Caret labels no byte boundary produced, inserted where the caret walk met them. */
  extra: string[];
  /** Every character the fullest display shows that a range can hold, in document order, with
   * the ranks it covers — what a read-only decorator's characters are matched against. */
  chars: { ch: string; s: number; e: number; label: string }[];
}

/** Builds the universe of `usj` in Standard view with notes expanded. */
export async function buildOracleUniverse(usj: Usj): Promise<OracleUniverse> {
  const view = oracleView("standard+expandedNotes");
  const mounted = await mountInView(usj, view);
  const universe: OracleUniverse = {
    labels: [],
    locs: [],
    rank: new Map(),
    sep: new Set(),
    extra: [],
    chars: [],
  };
  mounted.lexical.getEditorState().read(() => {
    const order: string[] = [];
    const locOf = new Map<string, UsjDocumentLocation>();
    const add = (label: string, loc: UsjDocumentLocation): void => {
      if (label === "THREW" || locOf.has(label)) return;
      locOf.set(label, loc);
      order.push(label);
    };
    const bytes = $byteWalk(view);
    for (const byte of bytes) {
      add(byte.label, byte.loc);
      add(byte.afterLabel, $byteLoc(byte.node, byte.offset, true, view));
    }
    // A caret label no byte boundary produced goes just after the last known label the caret
    // walk passed before it.
    let lastKnown: string | undefined;
    for (const caret of $caretWalk(view)) {
      if (caret.label === "THREW" || !caret.loc) continue;
      if (locOf.has(caret.label)) {
        lastKnown = caret.label;
        continue;
      }
      universe.extra.push(caret.label);
      locOf.set(caret.label, caret.loc);
      const at = lastKnown === undefined ? 0 : order.indexOf(lastKnown) + 1;
      order.splice(at, 0, caret.label);
      lastKnown = caret.label;
    }
    order.forEach((label, i) => {
      const loc = locOf.get(label);
      if (!loc) throw new Error(`no location recorded for ${label}`);
      universe.rank.set(label, i);
      universe.labels.push(label);
      universe.locs.push(loc);
    });
    const covered = new Set<number>();
    for (const byte of bytes) {
      if (byte.separator || byte.soft) continue;
      const start = universe.rank.get(byte.label);
      if (start === undefined) continue;
      const end = Math.max(universe.rank.get(byte.afterLabel) ?? start + 1, start + 1);
      for (let r = start; r < end; r++) covered.add(r);
    }
    for (let r = 0; r < universe.labels.length; r++) if (!covered.has(r)) universe.sep.add(r);
    for (const byte of bytes) {
      const start = universe.rank.get(byte.label);
      if (byte.separator || byte.soft || start === undefined) continue;
      const end = Math.max(universe.rank.get(byte.afterLabel) ?? start + 1, start + 1);
      if (byte.offset >= 0) {
        universe.chars.push({ ch: byte.ch, s: start, e: end, label: byte.label });
        continue;
      }
      // A decorator here too (`\id`): its characters, without edge whitespace, share its ranks.
      for (const ch of $decoratorRenderedText(byte.node).trim())
        universe.chars.push({ ch, s: start, e: end, label: byte.label });
    }
  });
  mounted.unmount();
  return universe;
}

/** A byte of the view under test, as the oracle grades it. */
interface ByteInfo {
  desc: string;
  separator: boolean;
  soft: boolean;
  /** The universe ranks `[s, e)` the byte covers. */
  s: number;
  e: number;
  label: string;
  /** Keys of the inline elements (char, note, unknown) around the byte, innermost first. */
  inline: string[];
  /** The key of the block element the byte is in. */
  block: string;
  /** The live byte (its index in `$byteNodes()`) this is, or a part of: one character a
   * read-only decorator renders, or the rest of the bytes it stands for but does not render. */
  unit:
    | { byte: number; kind: "byte" }
    | { byte: number; kind: "char"; char: number }
    | {
        byte: number;
        kind: "rest";
        /** The decorator renders no text at all, so only its element can show the annotation. */
        bare: boolean;
      };
  /** The ranks a decorator's `rest` covers, which need not be one run. */
  ranks?: number[];
}

/** `a` aligned to `b` by a longest common subsequence: each index of `a` matched to one of `b`, or
 * `undefined`. A space matches a no-break space. */
function alignChars(a: string[], b: string[]): (number | undefined)[] {
  const same = (x: string, y: string) => x.replace(NBSP, " ") === y.replace(NBSP, " ");
  const lcs = Array.from({ length: a.length + 1 }, () => new Array<number>(b.length + 1).fill(0));
  for (let i = a.length - 1; i >= 0; i--)
    for (let j = b.length - 1; j >= 0; j--)
      lcs[i][j] = same(a[i], b[j]) ? lcs[i + 1][j + 1] + 1 : Math.max(lcs[i + 1][j], lcs[i][j + 1]);
  const matched: (number | undefined)[] = new Array<number | undefined>(a.length).fill(undefined);
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (same(a[i], b[j])) {
      matched[i++] = j++;
    } else if (lcs[i + 1][j] >= lcs[i][j + 1]) i++;
    else j++;
  }
  return matched;
}

/** One failing operation. */
export interface OracleFailure {
  corpus: string;
  view: string;
  tier: "A" | "B";
  shape: string;
  /** Universe ranks of the range's start and end. */
  a: number;
  b: number;
  start: string;
  end: string;
  /** Descriptions of the named bytes nothing holds. */
  missing: string[];
  /** Descriptions of the held bytes the range does not name. */
  extra: string[];
  /** Descriptions of the bytes painted though neither held nor between two held bytes. */
  paintExtra: string[];
  /** Descriptions of the held (or between-held) bytes nothing paints. */
  paintMissing: string[];
  flags: string[];
  /** The live points inbound resolved the range to, and the node types `getNodes()` listed. */
  inbound?: string;
  /** Extra bytes (neither separator nor soft) inside an inline element the range covers only
   * partly and that is held whole. */
  partialInlineExtras: number;
  /** Extra separator or soft bytes inside an inline element the range covers wholly and that is
   * held whole. */
  wholeInlineSeparatorExtras: number;
  /** Missing and extra bytes and flags, for the assertion message. */
  detail: string;
}

/** What one run produced: its failures, and the facts the list pins beside them so that a list
 * cannot shrink by losing operations or by exempting more bytes. */
export interface OracleRun {
  failures: OracleFailure[];
  /** How many operations ran. */
  ops: number;
  /** SHA-256 of the operations that ran, each as its tier, shape and start and end labels, in run
   * order: a run that swaps one operation for another at the same count changes it. */
  opsSha256: string;
  /** Bytes and carets whose labels the universe could not place, in walk order. */
  anomalies: string[];
  /** The description of every byte no range is required to hold (separators and soft bytes), in
   * document order. */
  exempt: string[];
}

/** How the oracle samples one run. */
export interface OracleRunOptions {
  universe: OracleUniverse;
  /** Use every `sample`th location (1 = all). */
  sample: number;
  /** Compare `getUsj()` after every `usjEvery`th operation. */
  usjEvery: number;
  /** Stops the run between operations once aborted (a timed-out test). */
  signal?: AbortSignal;
}

const INLINE_TYPES = new Set(["char", "note", "unknown"]);

/** A label on a note's category: its value, or its `\cat` key, marker or closer. */
const CATEGORY_LABEL = /\['category'\]|[|,]keyName=category(,|$)/;

/** The path of the element a category label belongs to. */
function categoryOwner(label: string): string {
  return label.replace(/\['category'\].*$/, "").replace(/\|.*$/, "");
}

/**
 * The universe ranks of every note category no byte of the view under test displays. They name
 * nothing an annotation can hold, as Paratext 9 never anchors one to `\cat`: a collapsed note
 * shows nothing of its content but its caller, and an expanded note in a view without editable
 * markers leaves its category out. Stated here rather than derived, because the caret behind a
 * read-only caller steps over the category to the note's content, so the caller's byte covers the
 * category's ranks.
 */
function undisplayedCategoryRanks(universe: OracleUniverse, info: ByteInfo[]): Set<number> {
  const displayed = new Set(
    info.filter((byte) => CATEGORY_LABEL.test(byte.label)).map((byte) => categoryOwner(byte.label)),
  );
  const ranks = new Set<number>();
  universe.labels.forEach((label, rank) => {
    if (CATEGORY_LABEL.test(label) && !displayed.has(categoryOwner(label))) ranks.add(rank);
  });
  return ranks;
}

/** `text` with every character outside printable ASCII written as a backslash-u escape of its
 * hex code point, so the committed lists hold no invisible bytes such as an NBSP separator. */
function asciiOnly(text: string): string {
  return text.replace(
    /[^\x20-\x7e]/gu,
    (char) => `\\u${(char.codePointAt(0) ?? 0).toString(16).padStart(4, "0")}`,
  );
}

function $inlineAncestors(node: LexicalNode): string[] {
  const keys: string[] = [];
  for (let parent = node.getParent(); parent; parent = parent.getParent())
    if (INLINE_TYPES.has(parent.getType())) keys.push(parent.getKey());
  return keys;
}

function describePoint(point: PointType): string {
  const node = point.getNode();
  const size = $isTextNode(node)
    ? `(${node.getTextContentSize()})`
    : `[${$isElementNode(node) ? node.getChildrenSize() : "-"}]`;
  return `${point.type}:${node.getType()}${size}@${point.offset}`;
}

function failureKey(failure: OracleFailure): string {
  return `${failure.view}|${failure.tier}|${failure.shape}|${failure.start}|${failure.end}`;
}

/** Runs every range of `view` over `usj`; returns the operations that failed and what the run
 * covered. */
export async function runOracle(
  corpusName: string,
  usj: Usj,
  viewName: string,
  view: ViewOptions,
  options: OracleRunOptions,
): Promise<OracleRun> {
  const { universe } = options;
  const started = Date.now();
  let mounted: MountedInView = await mountInView(usj, view);
  const anomalies: string[] = [];
  const info: ByteInfo[] = [];
  /** Each live byte's outbound label, by its index in `$byteNodes()`. */
  const byteLabels: string[] = [];
  const { producible, signature } = mounted.lexical.getEditorState().read(() => {
    let previousStart = -1;
    let previousEnd = 0;
    for (const byte of $byteWalk(view)) {
      let s = universe.rank.get(byte.label);
      const after = universe.rank.get(byte.afterLabel);
      if (s === undefined) {
        anomalies.push(`byte label not in universe: ${byte.nodeType} ${JSON.stringify(byte.ch)}`);
        s = previousEnd;
      } else if (s < previousStart) {
        anomalies.push(
          `byte label out of order: ${byte.nodeType} ${JSON.stringify(byte.ch)} ${byte.label}`,
        );
        s = previousEnd;
      }
      const e = Math.max(after ?? s + 1, s + 1);
      const marks = `${byte.carrier ? "*" : ""}${byte.separator ? "(sep)" : ""}${byte.soft ? "(soft)" : ""}`;
      const inline = $inlineAncestors(byte.node);
      const block = $blockKey(byte.node);
      byteLabels.push(byte.label);
      const byteIndex = byteLabels.length - 1;
      if (byte.offset >= 0) {
        info.push({
          desc: asciiOnly(`${byte.nodeType}${marks}:${JSON.stringify(byte.ch)}@${byte.label}`),
          separator: byte.separator,
          soft: byte.soft,
          s,
          e,
          label: byte.label,
          inline,
          block,
          unit: { byte: byteIndex, kind: "byte" },
        });
      } else {
        // A read-only decorator: each character it renders is matched to the character of the
        // fullest display it shows, within the ranks the decorator covers; the ranks no rendered
        // character takes are the bytes it stands for without showing them.
        const shown = universe.chars.filter((char) => char.s >= s && char.e <= e);
        const text = [...$decoratorRenderedText(byte.node)];
        // Edge whitespace is the decorator's own display, never a byte it shows.
        const { lead, trail } = carrierEdgeWhitespace(text.join(""));
        const matched = [
          ...new Array<undefined>(lead).fill(undefined),
          ...alignChars(
            text.slice(lead, text.length - trail),
            shown.map((char) => char.ch),
          ),
          ...new Array<undefined>(trail).fill(undefined),
        ];
        // A decorator that shows its bytes some other way (a hidden caller as `*`, a caller CSS
        // draws) is graded whole: only its element shows the annotation.
        const rendered = matched.some((at) => at !== undefined) ? text : [];
        const taken = new Set<number>();
        rendered.forEach((ch, char) => {
          const at = matched[char];
          const twin = at === undefined ? undefined : shown[at];
          if (twin) for (let r = twin.s; r < twin.e; r++) taken.add(r);
          info.push({
            desc: asciiOnly(
              `${byte.nodeType}*${twin ? "" : "(soft)"}:${JSON.stringify(ch)}@${twin?.label ?? byte.label}`,
            ),
            separator: false,
            soft: !twin,
            s: twin?.s ?? s,
            e: twin?.e ?? s,
            label: twin?.label ?? byte.label,
            inline,
            block,
            unit: { byte: byteIndex, kind: "char", char },
          });
        });
        const ranks = Array.from({ length: e - s }, (_, n) => s + n).filter((r) => !taken.has(r));
        if (ranks.length > 0 || rendered.length === 0)
          info.push({
            desc: asciiOnly(`${byte.nodeType}*(rest):${JSON.stringify(byte.ch)}@${byte.label}`),
            separator: false,
            soft: ranks.every((r) => universe.sep.has(r)),
            s,
            e,
            ranks,
            label: byte.label,
            inline,
            block,
            unit: { byte: byteIndex, kind: "rest", bare: rendered.length === 0 },
          });
      }
      previousStart = s;
      previousEnd = e;
    }
    const seen = new Set<number>();
    for (const caret of $caretWalk(view)) {
      const rank = universe.rank.get(caret.label);
      // Node keys depend on what ran before in the fork, so they are left out of the record.
      if (caret.label === "THREW")
        anomalies.push(`caret threw: ${caret.where.replace(/#\d+/g, "")}`);
      else if (rank === undefined) anomalies.push(`caret label not in universe: ${caret.label}`);
      else seen.add(rank);
    }
    return { producible: [...seen].sort((x, y) => x - y), signature: $flatSignature() };
  });
  if (producible.length === 0) throw new Error(`${corpusName} ${viewName}: no settled locations`);
  const usj0 = JSON.stringify(mounted.ref.current?.getUsj());
  const holdable = (i: number): boolean => !info[i].separator && !info[i].soft;
  const namesNothing = new Set([...universe.sep, ...undisplayedCategoryRanks(universe, info)]);
  /** Byte indexes of each inline element, by key. */
  const inlineBytes = new Map<string, number[]>();
  info.forEach((byte, i) =>
    byte.inline.forEach((key) => {
      const list = inlineBytes.get(key) ?? [];
      list.push(i);
      inlineBytes.set(key, list);
    }),
  );

  const ranges: { tier: "A" | "B"; shape: string; a: number; b: number }[] = [];
  const stride = options.sample;
  for (let i = 0; i < producible.length; i++) {
    if (i % stride !== 0) continue;
    const at = (k: number): number => producible[Math.min(i + k, producible.length - 1)];
    const here = producible[i];
    ranges.push({ tier: "A", shape: "1", a: here, b: at(1) });
    ranges.push({ tier: "A", shape: "2", a: here, b: at(2) });
    ranges.push({ tier: "A", shape: "3", a: here, b: at(3) });
    ranges.push({ tier: "A", shape: "collapsed", a: here, b: here });
    if (i % (4 * stride) === 0) {
      ranges.push({ tier: "A", shape: "6", a: here, b: at(6) });
      ranges.push({ tier: "A", shape: "12", a: here, b: at(12) });
    }
    if (i % (5 * stride) === 0) ranges.push({ tier: "A", shape: "reversed2", a: at(2), b: here });
    if (i % (3 * stride) === 0) {
      ranges.push({ tier: "A", shape: "25", a: here, b: at(25) });
      ranges.push({ tier: "A", shape: "50", a: here, b: at(50) });
    }
  }
  const producibleSet = new Set(producible);
  const last = universe.labels.length - 1;
  let tierBIndex = 0;
  for (let q = 0; q < universe.labels.length; q++) {
    if (producibleSet.has(q)) continue;
    if (tierBIndex++ % stride !== 0) continue;
    ranges.push({ tier: "B", shape: "1", a: q, b: Math.min(q + 1, last) });
    ranges.push({ tier: "B", shape: "3", a: q, b: Math.min(q + 3, last) });
  }

  const failures: OracleFailure[] = [];
  let opIndex = 0;
  let remounts = 0;
  try {
    for (const range of ranges) {
      if (options.signal?.aborted) throw new Error("oracle run aborted");
      // This operation's mount; a corrupting operation replaces `mounted` for the next one.
      const m = mounted;
      opIndex++;
      const id = `o${opIndex}`;
      const start = universe.locs[range.a];
      const end = universe.locs[range.b];
      const lo = Math.min(range.a, range.b);
      const hi = Math.max(range.a, range.b);
      const expected = new Set<number>();
      info.forEach((byte, i) => {
        if (!holdable(i)) return;
        const ranks = byte.ranks ?? Array.from({ length: byte.e - byte.s }, (_, n) => byte.s + n);
        if (ranks.some((r) => r >= lo && r < hi && !namesNothing.has(r))) expected.add(i);
      });
      // A decorator's undisplayed rest is required only when the range names none of what the
      // decorator shows: otherwise the characters it shows are what holds the annotation.
      const namesShown = new Set(
        [...expected].filter((i) => info[i].unit.kind === "char").map((i) => info[i].unit.byte),
      );
      for (const i of [...expected]) {
        const { unit } = info[i];
        if (unit.kind === "rest" && !unit.bare && namesShown.has(unit.byte)) expected.delete(i);
      }
      const flags: string[] = [];
      let inbound = "";
      m.lexical.getEditorState().read(() => {
        // The range as `setAnnotation` resolves it.
        const selection = $getRangeFromUsjSelection({ start, end }, view, { forAnnotation: true });
        if (!selection) {
          inbound = "unresolved";
          return;
        }
        const nodes = selection
          .getNodes()
          .map((node) => node.getType())
          .join(",");
        inbound =
          `${describePoint(selection.anchor)} -> ${describePoint(selection.focus)}` +
          `${selection.isCollapsed() ? " COLLAPSED" : ""}${selection.isBackward() ? " BACKWARD" : ""}` +
          ` nodes=${nodes}`;
      });
      const logsBefore = m.logs.length;
      try {
        await act(async () => {
          m.ref.current?.setAnnotation({ start, end }, ORACLE_TYPE, id);
          await Promise.resolve();
        });
      } catch (error) {
        flags.push(`threw:${String(error).slice(0, 160)}`);
      }
      flags.push(
        ...m.logs
          .slice(logsBefore)
          .filter((log) => FAILURE_LOG.test(log))
          .map((log) => `log:${log.slice(0, 160)}`),
      );
      const held = new Map<number, "mark" | "carrier">();
      const painted = new Set<number>();
      /** Held units nothing on screen shows: a decorator held only for bytes it does not show. */
      const heldUnshown = new Set<number>();
      let touched: number[] = [];
      /** The first byte in a window around `touched` whose outbound label moved, as a flag. */
      const $movedLabel = (prefix: string): string | undefined => {
        if (touched.length === 0) return undefined;
        const nodes = $byteNodes();
        const from = Math.max(0, Math.min(...touched) - 2);
        const to = Math.min(nodes.length - 1, Math.max(...touched) + 2);
        for (let i = from; i <= to; i++) {
          const [node, offset] = nodes[i];
          const label = locKey($byteLoc(node, offset, false, view));
          if (label !== byteLabels[i]) return `${prefix}:${i}:${byteLabels[i]}->${label}`;
        }
        return undefined;
      };
      m.lexical.getEditorState().read(() => {
        const heldBytes = $heldIndexes(HELD_TYPE, id);
        const paintedBytes = $paintedIndexes(m.lexical, id);
        const nodes = $byteNodes();
        const shownByByte = new Map<number, ReturnType<typeof $paintedDecoratorChars>>();
        info.forEach(({ unit }, i) => {
          if (unit.kind === "byte") {
            const holder = heldBytes.get(unit.byte);
            if (holder) held.set(i, holder);
            if (paintedBytes.has(unit.byte)) painted.add(i);
            return;
          }
          const node = nodes[unit.byte]?.[0];
          if (!node) return;
          let shown = shownByByte.get(unit.byte);
          if (!shown) {
            shown = $paintedDecoratorChars(m.lexical, node, id);
            shownByByte.set(unit.byte, shown);
          }
          // A decorator inside a mark (a span moved into it whole) is held, all of it, by the mark.
          if (heldBytes.get(unit.byte) === "mark") {
            held.set(i, "mark");
            if (shown.whole || (unit.kind === "char" && shown.chars.has(unit.char))) painted.add(i);
            return;
          }
          const annotations = $displayAnnotationsOf(node).filter(
            (annotation) => annotation.type === HELD_TYPE && annotation.id === id,
          );
          const whole = annotations.some(
            (annotation) => annotation.start === annotation.end && !annotation.undisplayed,
          );
          if (unit.kind === "char") {
            const holds =
              whole ||
              annotations.some(
                // An undisplayed hold's offsets index the bytes the decorator stands for, not
                // the characters it renders.
                (annotation) =>
                  !annotation.undisplayed &&
                  annotation.start <= unit.char &&
                  unit.char < annotation.end,
              );
            if (holds) held.set(i, "carrier");
            if (shown.whole || shown.chars.has(unit.char)) painted.add(i);
            return;
          }
          const shownHeld = whole || (unit.bare && annotations.some((a) => !a.undisplayed));
          if (shownHeld || annotations.some((annotation) => annotation.undisplayed))
            held.set(i, "carrier");
          // Held only for bytes the decorator does not show: nothing on screen is the annotation's.
          if (!shownHeld) heldUnshown.add(i);
          if (unit.bare && (shown.whole || shown.any)) painted.add(i);
        });
        if ($flatSignature() !== signature) flags.push("bytes-changed");
        // Outbound labels in a window around the range must not move.
        touched = [...new Set([...expected, ...held.keys()].map((i) => info[i].unit.byte))];
        const moved = $movedLabel("label-moved");
        if (moved) flags.push(moved);
      });
      if (opIndex % options.usjEvery === 0) {
        const now = JSON.stringify(m.ref.current?.getUsj());
        if (now !== usj0) {
          let k = 0;
          while (k < now.length && now[k] === usj0[k]) k++;
          const was = usj0.slice(Math.max(0, k - 60), k + 60);
          flags.push(`usj-changed@${k}: was ${was} NOW ${now.slice(Math.max(0, k - 60), k + 60)}`);
        }
      }
      /** A separator or soft byte a mark holds between two held bytes: a whole element's own. */
      const betweenHeld = (i: number): boolean => {
        let before = i - 1;
        while (before >= 0 && !holdable(before)) before--;
        let after = i + 1;
        while (after < info.length && !holdable(after)) after++;
        return before >= 0 && after < info.length && held.has(before) && held.has(after);
      };
      const missing = [...expected].filter((i) => !held.has(i)).sort((x, y) => x - y);
      // Painted: every held byte the view shows, and the filler bytes between two of them in one
      // block. A decorator's undisplayed rest shows nothing, unless the decorator renders no text
      // (a caller CSS draws), when its element is what shows the annotation.
      const shows = (i: number) => info[i].unit.kind !== "rest" || info[i].unit.bare;
      const shouldPaint = new Set([...held.keys()].filter((i) => shows(i) && !heldUnshown.has(i)));
      const heldOrder = [...shouldPaint].sort((x, y) => x - y);
      heldOrder.forEach((from, k) => {
        const to = heldOrder[k + 1];
        if (to === undefined || to === from + 1) return;
        const between = Array.from({ length: to - from - 1 }, (_, n) => from + 1 + n).filter(shows);
        const sameBlock = between.every((i) => info[i].block === info[from].block);
        if (sameBlock && info[to].block === info[from].block && between.every((i) => !holdable(i)))
          between.forEach((i) => shouldPaint.add(i));
      });
      const paintExtra = [...painted]
        .filter((i) => shows(i) && !shouldPaint.has(i))
        .sort((x, y) => x - y)
        .map((i) => info[i]?.desc ?? `#${i}`);
      const paintMissing = [...shouldPaint]
        .filter((i) => !painted.has(i))
        .sort((x, y) => x - y)
        .map((i) => info[i]?.desc ?? `#${i}`);
      const extra = [...held]
        .filter(([i, holder]) => {
          if (expected.has(i)) return false;
          const { unit } = info[i];
          if (unit.kind === "rest" && !unit.bare && namesShown.has(unit.byte)) return false;
          return holdable(i) || holder !== "mark" || !betweenHeld(i);
        })
        .map(([i]) => i)
        .sort((x, y) => x - y);
      const heldWhole = (key: string): boolean =>
        (inlineBytes.get(key) ?? []).every((i) => !holdable(i) || held.has(i));
      const coveredWhole = (key: string): boolean =>
        (inlineBytes.get(key) ?? []).every((i) => !holdable(i) || expected.has(i));
      const partialInlineExtras = extra.filter(
        (i) => holdable(i) && info[i].inline.some((key) => heldWhole(key) && !coveredWhole(key)),
      ).length;
      const wholeInlineSeparatorExtras = extra.filter(
        (i) => !holdable(i) && info[i].inline.some((key) => heldWhole(key) && coveredWhole(key)),
      ).length;
      await act(async () => {
        m.ref.current?.removeAnnotation(ORACLE_TYPE, id);
        await Promise.resolve();
      });
      const flagsBeforeRemove = flags.length;
      m.lexical.getEditorState().read(() => {
        if ($anyTrace(id) > 0) flags.push("remove-left-trace");
        if ($flatSignature() !== signature) flags.push("bytes-changed-after-remove");
        const moved = $movedLabel("remove-left-label-moved");
        if (moved) flags.push(moved);
      });
      // Any residue of this operation would shape the next one: start it from a fresh mount.
      if (
        flags.length > flagsBeforeRemove ||
        flags.some((flag) => flag.startsWith("usj-changed") || flag.startsWith("bytes-changed"))
      ) {
        m.unmount();
        mounted = await mountInView(usj, view);
        remounts++;
      }
      if (
        missing.length === 0 &&
        extra.length === 0 &&
        flags.length === 0 &&
        paintExtra.length === 0 &&
        paintMissing.length === 0
      )
        continue;
      const missingDescs = missing.map((i) => info[i]?.desc ?? `#${i}`);
      const extraDescs = extra.map((i) => info[i]?.desc ?? `#${i}`);
      failures.push({
        corpus: corpusName,
        view: viewName,
        tier: range.tier,
        shape: range.shape,
        a: range.a,
        b: range.b,
        start: universe.labels[range.a],
        end: universe.labels[range.b],
        missing: missingDescs,
        extra: extraDescs,
        paintExtra,
        paintMissing,
        flags,
        inbound,
        partialInlineExtras,
        wholeInlineSeparatorExtras,
        detail: (
          `missing ${JSON.stringify(missingDescs)} extra ${JSON.stringify(extraDescs)} ` +
          `paint-extra ${JSON.stringify(paintExtra)} paint-missing ${JSON.stringify(paintMissing)} ` +
          `flags ${JSON.stringify(flags)}`
        ).slice(0, 400),
      });
    }
  } finally {
    mounted.unmount();
  }
  if (SUMMARY)
    // eslint-disable-next-line no-console -- ANNOTATION_ORACLE_SUMMARY asks for this output.
    console.info(
      `oracle ${corpusName} ${viewName}: ${ranges.length} ops, ${failures.length} failing, ` +
        `${remounts} remounts, ${Date.now() - started} ms` +
        `${anomalies.length ? `, anomalies ${JSON.stringify(anomalies)}` : ""}`,
    );
  const exempt = info.filter((_, i) => !holdable(i)).map((byte) => byte.desc);
  const opsSha256 = createHash("sha256")
    .update(
      JSON.stringify(
        ranges.map(({ tier, shape, a, b }) => [
          tier,
          shape,
          universe.labels[a],
          universe.labels[b],
        ]),
      ),
    )
    .digest("hex");
  return {
    failures,
    ops: ranges.length,
    opsSha256,
    anomalies: anomalies.map(asciiOnly),
    exempt,
  };
}

/** Decorators a range end inside of can drop. */
const DECORATORS = new Set(["immutable-verse", "immutable-typed-text", "immutable-note-caller"]);
const TEXT_LIKE = new Set(["text", "marker", "verse", "unmatched"]);
const INBOUND =
  /^(\w+):(\S+?)[([].*?@(\d+) -> (\w+):(\S+?)[([].*?@(\d+)( COLLAPSED)?( BACKWARD)?.*nodes=(.*)$/;

/** The node type a byte description starts with, without its carrier and separator marks. */
function descType(desc: string): string {
  return desc
    .split(":")[0]
    .replace(/\(sep\)|\(soft\)/g, "")
    .replace(/\*+$/, "");
}

function isSoftDesc(desc: string): boolean {
  return desc.split(":")[0].includes("(soft)");
}

function isSeparatorDesc(desc: string): boolean {
  return desc.split(":")[0].includes("(sep)");
}

/** The root-cause classes of a failure, from its bytes, flags and inbound points. */
export function classifyOracleFailure(f: OracleFailure): string[] {
  const c: string[] = [];
  const fl = f.flags;
  const inbound = f.inbound ?? "";
  const anyFlag = (prefix: string): boolean => fl.some((flag) => flag.startsWith(prefix));
  if (f.paintExtra.length) c.push("PAINT-EXTRA");
  if (f.paintMissing.length) c.push("PAINT-MISSING");
  if (!(f.missing.length || f.extra.length || fl.length)) return c.length ? c : ["NOISE-ONLY"];
  if (anyFlag("usj-changed") || anyFlag("bytes-changed")) c.push("R6-CORRUPT-figure-split");
  if (anyFlag("threw")) c.push("THREW");
  if (anyFlag("remove-left")) c.push("REMOVE-TRACE");
  if (
    inbound === "unresolved" ||
    fl.some((flag) => flag.includes("Failed to find") || flag.includes("refused"))
  )
    c.push("R8-INBOUND-UNRESOLVED");
  if (f.extra.some(isSoftDesc)) c.push("M4-SOFT-HELD");
  if (f.extra.some(isSeparatorDesc)) c.push("SEPARATOR-HELD");
  const m = INBOUND.exec(inbound);
  if (m) {
    const [, startType, , , endType, , , col, back, nodeList] = m;
    const nodes = nodeList ? nodeList.split(",") : [];
    if (f.a === f.b && f.extra.length) c.push("R3-COLLAPSED-HOLDS");
    else if (col && f.extra.length) c.push("R3-COLLAPSED-HOLDS(ends snap together)");
    // The document-order first and last point types.
    const [ft, lt] = back ? [endType, startType] : [startType, endType];
    // A soft byte a carrier range holds is its own class, not text wrapped at the wrong offset.
    const nonDecorator = [...f.extra, ...f.missing].filter(
      (desc) => TEXT_LIKE.has(descType(desc)) && !isSoftDesc(desc),
    );
    if (
      lt === "element" &&
      nodes.length &&
      TEXT_LIKE.has(nodes[nodes.length - 1]) &&
      nonDecorator.length &&
      !col
    )
      c.push("R2-ELEM-OFFSET-AS-TEXT(end)");
    if (ft === "element" && nodes.length && TEXT_LIKE.has(nodes[0]) && nonDecorator.length && !col)
      c.push("R2-ELEM-OFFSET-AS-TEXT(start)");
    const inline = nodes.filter((node) => INLINE_TYPES.has(node));
    if (f.extra.length && inline.length && f.a !== f.b && !col) {
      if (f.partialInlineExtras > 0) c.push("R1a-CASE3-PARTIAL-INLINE-WRAPPED-WHOLE");
      else if (f.wholeInlineSeparatorExtras > 0)
        c.push("R1b-FULL-INLINE-WRAPPED-WITH-ITS-SEPARATOR");
    }
    if (back && f.tier === "B" && f.extra.length && f.a < f.b)
      c.push("R9-UNDISPLAYED-SNAP-INVERTS");
  }
  if (anyFlag("label-moved")) c.push("O2-LABEL-MOVES-ON-SPLIT");
  if (f.missing.some((desc) => desc.startsWith("immutable-chapter")))
    c.push("R5-CHAPTER-NOT-CARRIER");
  if ([...f.missing, ...f.extra].some((desc) => desc.startsWith("unmatched")))
    c.push("O3-UNMATCHED-MISLABEL");
  if (
    !c.some((x) => x.startsWith("R1") || x.startsWith("R3") || x.startsWith("R8")) &&
    f.missing.some((desc) => DECORATORS.has(descType(desc)))
  )
    c.push("R10-DECORATOR-DROPPED(end snaps in front)");
  if (f.tier === "B" && f.extra.length && !c.some((x) => x.startsWith("R")))
    c.push("R9-UNDISPLAYED-SNAP-INVERTS");
  if (!c.length) c.push("UNCLASSIFIED");
  return c;
}

/** Up to this many exempt bytes are pinned by name; a longer list is pinned by count and hash. */
const EXEMPT_LIST_LIMIT = 2000;

/** The pinned form of a run's exempt bytes. */
type OracleExempt = string[] | { count: number; sha256: string };

function exemptSignature(exempt: string[]): OracleExempt {
  if (exempt.length <= EXEMPT_LIST_LIMIT) return exempt;
  const sha256 = createHash("sha256").update(JSON.stringify(exempt)).digest("hex");
  return { count: exempt.length, sha256 };
}

/** One list section: what the run covered, and each failure key → its classes. */
interface OracleSection {
  ops: number;
  /** Absent in a list recorded before operations were hashed; such a list fails every comparison
   * until it is rewritten. */
  opsSha256?: string;
  anomalies: string[];
  exempt: OracleExempt;
  failures: { [key: string]: string[] };
}

/** An expected-failure list file: an optional sampling stride, then corpus → view → section. */
interface OracleList {
  stride?: number;
  corpora: { [corpus: string]: { [view: string]: OracleSection } };
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isRecord(value: unknown): value is { [key: string]: unknown } {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readExempt(value: unknown, where: string): OracleExempt {
  if (isStringArray(value)) return value;
  if (isRecord(value) && typeof value.count === "number" && typeof value.sha256 === "string")
    return { count: value.count, sha256: value.sha256 };
  throw new Error(`${where}.exempt is neither a string array nor { count, sha256 }`);
}

function readSection(value: unknown, where: string): OracleSection {
  if (!isRecord(value)) throw new Error(`${where} is not an object`);
  const { ops, opsSha256, anomalies, exempt, failures } = value;
  if (typeof ops !== "number") throw new Error(`${where}.ops is not a number`);
  if (opsSha256 !== undefined && typeof opsSha256 !== "string")
    throw new Error(`${where}.opsSha256 is not a string`);
  if (!isStringArray(anomalies)) throw new Error(`${where}.anomalies is not a string array`);
  if (!isRecord(failures)) throw new Error(`${where}.failures is not an object`);
  const entries: OracleSection["failures"] = {};
  for (const [key, classes] of Object.entries(failures)) {
    if (!isStringArray(classes))
      throw new Error(`${where}.failures["${key}"] is not a string array`);
    entries[key] = classes;
  }
  return { ops, opsSha256, anomalies, exempt: readExempt(exempt, where), failures: entries };
}

function readOracleList(listFile: URL): OracleList {
  const raw: unknown = JSON.parse(readFileSync(listFile, "utf-8"));
  const path = listFile.pathname;
  if (!isRecord(raw)) throw new Error(`${path}: not a JSON object`);
  const list: OracleList = { corpora: {} };
  for (const [corpus, views] of Object.entries(raw)) {
    if (corpus === "stride") {
      if (typeof views !== "number") throw new Error(`${path}: stride not a number`);
      list.stride = views;
      continue;
    }
    if (!isRecord(views)) throw new Error(`${path}: ${corpus} is not an object`);
    list.corpora[corpus] = {};
    for (const [view, section] of Object.entries(views))
      list.corpora[corpus][view] = readSection(section, `${path}: ${corpus}.${view}`);
  }
  return list;
}

/** Lists this test file changed in write mode, by file path; written by {@link flushOracleLists}. */
const pendingLists = new Map<string, { file: URL; list: OracleList }>();

/** Writes every list {@link expectOracleMatchesList} changed in write mode. Call it from the test
 * file's `afterAll`, so only the sections of `it`s that completed are written. */
export function flushOracleLists(): void {
  for (const { file, list } of pendingLists.values()) {
    const out: { [key: string]: unknown } = {};
    if (list.stride !== undefined) out.stride = list.stride;
    Object.assign(out, list.corpora);
    writeFileSync(file, `${JSON.stringify(out, null, 2)}\n`);
  }
  pendingLists.clear();
}

/** The failures keyed as the list keys them; throws on a duplicate key. */
function keyedFailures(failures: OracleFailure[]): Map<string, OracleFailure> {
  const keyed = new Map<string, OracleFailure>();
  for (const failure of failures) {
    const key = failureKey(failure);
    if (keyed.has(key)) throw new Error(`duplicate oracle failure key: ${key}`);
    keyed.set(key, failure);
  }
  return keyed;
}

const sameClasses = (a: string[], b: string[]): boolean =>
  a.length === b.length && a.every((name) => b.includes(name));

/**
 * Compares a run with the `[corpusName][viewName]` section of `listFile`, or, in write mode,
 * records it as that section (written by {@link flushOracleLists}). Call it last in the `it`, after
 * the run completed.
 *
 * The comparison fails on a changed operation count or set, walk anomalies or exempt bytes; on
 * a failure the list does not name (`unexpected`); on a listed entry that no longer fails or fails
 * with fewer classes (`fixed` — rewrite the list); and on a listed entry that fails with a class
 * it was not listed with (`worse`).
 *
 * @param options.stride - The sampling stride of a sampled run. A list records the stride it was
 *   written at, and a run at another stride fails instead of comparing.
 * @param options.write - Record instead of comparing; defaults to `ANNOTATION_ORACLE_WRITE=1`.
 */
export function expectOracleMatchesList(
  listFile: URL,
  corpusName: string,
  viewName: string,
  run: OracleRun,
  options: { stride?: number; write?: boolean } = {},
): void {
  const keyed = keyedFailures(run.failures);
  const current: OracleSection = {
    ops: run.ops,
    opsSha256: run.opsSha256,
    anomalies: run.anomalies,
    exempt: exemptSignature(run.exempt),
    failures: {},
  };
  [...keyed.keys()]
    .sort((x, y) => x.localeCompare(y))
    .forEach((key) => {
      const failure = keyed.get(key);
      if (failure) current.failures[key] = classifyOracleFailure(failure);
    });
  if (SUMMARY) {
    const counts: { [name: string]: number } = {};
    Object.values(current.failures).forEach((classes) =>
      classes.forEach((name) => (counts[name] = (counts[name] ?? 0) + 1)),
    );
    const sorted = Object.entries(counts).sort(([a], [b]) => a.localeCompare(b));
    // eslint-disable-next-line no-console -- ANNOTATION_ORACLE_SUMMARY asks for this output.
    console.info(
      `oracle classes ${corpusName} ${viewName}: ${run.failures.length} failing ${JSON.stringify(Object.fromEntries(sorted))}`,
    );
  }

  if (options.write ?? WRITE) {
    const path = listFile.pathname;
    const list = pendingLists.get(path)?.list ?? readOracleList(listFile);
    if (list.stride !== options.stride) {
      const hasSections = Object.values(list.corpora).some((views) => Object.keys(views).length);
      if (hasSections && list.stride !== undefined)
        throw new Error(
          `${path} was recorded at stride ${list.stride}; this run uses ${options.stride}`,
        );
      list.stride = options.stride;
    }
    list.corpora[corpusName] = { ...list.corpora[corpusName], [viewName]: current };
    pendingLists.set(path, { file: listFile, list });
    return;
  }

  const list = readOracleList(listFile);
  expect(
    { stride: list.stride },
    "the list was recorded at another sampling stride; regenerate it",
  ).toEqual({ stride: options.stride });
  const section = list.corpora[corpusName]?.[viewName];
  expect(section, `no list section for ${corpusName} ${viewName}; record one`).toBeDefined();
  if (!section) return;
  const listed = section.failures;
  const now = current.failures;
  const unexpected = Object.keys(now).filter((key) => !(key in listed));
  const worse = Object.keys(listed).filter(
    (key) => key in now && now[key].some((name) => !listed[key].includes(name)),
  );
  const fixed = Object.keys(listed).filter(
    (key) => !(key in now) || (!worse.includes(key) && !sameClasses(now[key], listed[key])),
  );
  expect({
    ops: current.ops,
    opsSha256: current.opsSha256,
    anomalies: current.anomalies,
    exempt: current.exempt,
    unexpected: unexpected.map((key) => {
      const failure = keyed.get(key);
      return `${key} :: ${JSON.stringify(now[key])} :: ${failure?.detail ?? ""}`;
    }),
    fixed: fixed.map((key) =>
      key in now
        ? `${key} :: listed ${JSON.stringify(listed[key])} now ${JSON.stringify(now[key])}`
        : key,
    ),
    worse: worse.map(
      (key) => `${key} :: listed ${JSON.stringify(listed[key])} now ${JSON.stringify(now[key])}`,
    ),
  }).toEqual({
    ops: section.ops,
    opsSha256: section.opsSha256,
    anomalies: section.anomalies,
    exempt: section.exempt,
    unexpected: [],
    fixed: [],
    worse: [],
  });
}
