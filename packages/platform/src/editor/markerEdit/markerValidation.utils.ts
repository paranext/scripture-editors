/**
 * Marker validation — a port of PT9's ValidateUsxStyles pass
 * (ViewUsfmXhtmlConverter.cs:288-345) + TagValidator.IsParagraphTagValid
 * (TagValidator.cs:18-57), run over the Lexical tree instead of USX.
 *
 * Two states, PT9 semantics:
 * - "unknown": marker absent from the effective stylesheet (bold red glyph).
 * - "invalid": known marker whose occursUnder/rank forbids this context
 *   (red underlined glyph). Unknown wins over invalid.
 *
 * Map keys are DOM-decoration targets: the flagged node's MarkerNode glyph
 * keys (opener AND closer — PT9 stamps both marker spans), or the VerseNode's
 * own key (its text IS the glyph). Note elements are NOT context-validated
 * (PT9's node set excludes //note); chars inside a note validate against the
 * note's marker; nested chars validate against the PARAGRAPH marker (PT9
 * ancestor::para[1]); chars under an `xq` ancestor are exempt. The `\id` line has no paragraph
 * ancestor, so its own chars and verses are only checked for being known; a note there still
 * validates its content against the note.
 */
import { $getRoot, $isElementNode, ElementNode, LexicalNode, NodeKey } from "lexical";
import {
  $isBookNode,
  $isCharNode,
  $isMarkerNode,
  $isNoteNode,
  $isParaNode,
  $isSomeChapterNode,
  $isUnknownNode,
  MarkerStyleInfo,
  StyleInfo,
} from "shared";
import { $isSomeVerseNode } from "shared-react";

export type MarkerValidity = "unknown" | "invalid";

export interface ParaStackEntry {
  marker: string;
  rank: number;
  occursUnder: readonly string[];
}

/**
 * The `+` nesting prefix. Hoisted because `getMarkerStyleInfo` runs once per paragraph, char span
 * and verse of the whole document on every commit, and a regex literal allocates a fresh RegExp
 * per call.
 */
const NESTING_PREFIX_REGEX = /^\+/;

/** The stylesheet's entry for `marker` (ignoring a `+` nesting prefix), if it declares one. */
export function getMarkerStyleInfo(
  styleInfo: StyleInfo,
  marker: string,
): MarkerStyleInfo | undefined {
  const name = marker.replace(NESTING_PREFIX_REGEX, "");
  // Own-property guard: `markers` is a plain object, so a bare index resolves Object.prototype
  // members (`constructor`, `toString`, `valueOf`, …) as if they were stylesheet entries — a
  // marker named after one would never be flagged unknown.
  return Object.hasOwn(styleInfo.markers, name) ? styleInfo.markers[name] : undefined;
}

/**
 * Whether a char or verse marker declared by `entry` may occur under `contextMarker`: an empty
 * `occursUnder` allows it anywhere (PT9 semantics).
 */
export function occursUnderAllows(entry: MarkerStyleInfo, contextMarker: string): boolean {
  const occursUnder = entry.occursUnder ?? [];
  return occursUnder.length === 0 || occursUnder.includes(contextMarker);
}

/**
 * `marker` as a validity-stack entry, read from the stylesheet; `undefined` when the stylesheet
 * does not declare it.
 */
export function toStackEntry(styleInfo: StyleInfo, marker: string): ParaStackEntry | undefined {
  const entry = getMarkerStyleInfo(styleInfo, marker);
  if (!entry) return undefined;
  return { marker, rank: entry.rank ?? 0, occursUnder: entry.occursUnder ?? [] };
}

/** What opening `tag` would do to a validity stack, when it is valid there at all. */
interface ParaTagPlacement {
  /** How many of the stack's entries survive the tag; everything above them is popped. */
  keep: number;
  /**
   * Whether the tag itself then joins the stack. An empty-occursUnder tag is valid anywhere and
   * deliberately does NOT join (PT9 TagValidator.cs:28-30 returns without Add).
   */
  joins: boolean;
}

/**
 * The decision half of PT9 TagValidator.IsParagraphTagValid (TagValidator.cs:18-57), with no
 * mutation: `undefined` when `tag` cannot open at the context `stack` describes, otherwise how
 * the stack would change if it did. Both public entry points below read this, so the predicate
 * and the mutator can never disagree about validity.
 */
function placeParaTag(
  stack: readonly ParaStackEntry[],
  tag: ParaStackEntry,
): ParaTagPlacement | undefined {
  if (stack.length === 0) return { keep: 0, joins: true };
  if (tag.occursUnder.length === 0) return { keep: stack.length, joins: false };
  for (let i = stack.length - 1; i >= 0; i--) {
    if (!tag.occursUnder.includes(stack[i].marker)) continue;
    if (i === stack.length - 1 || tag.rank === 0 || stack[i + 1].rank <= tag.rank)
      return { keep: i + 1, joins: true };
    // Matched ancestor but rank forbids — keep scanning lower entries (PT9 continues).
  }
  return undefined;
}

/**
 * Whether `tag` may open at the context `stack` describes — PT9
 * TagValidator.IsParagraphTagValid's `addTag: false` call (TagValidator.cs:18-57).
 *
 * Pure: `stack` is not modified. Use this to PROBE a candidate; use
 * {@link replayParaTag} to advance the stack over a tag that is actually there.
 */
export function isParagraphTagValid(
  stack: readonly ParaStackEntry[],
  tag: ParaStackEntry,
): boolean {
  return placeParaTag(stack, tag) !== undefined;
}

/**
 * Advance `stack` over `tag` — PT9 TagValidator.IsParagraphTagValid's `addTag: true` call
 * (TagValidator.cs:18-57), the replay used to walk the paragraphs before a point.
 *
 * MUTATES `stack` when the tag is valid: entries the tag closes are popped, and the tag itself is
 * pushed unless its occursUnder is empty (valid anywhere, never joins). An invalid tag leaves the
 * stack untouched. Returns the same verdict as {@link isParagraphTagValid}, so a caller that also
 * wants to flag the invalid case can read it.
 */
function pushParaTagIfValid(stack: ParaStackEntry[], tag: ParaStackEntry): boolean {
  const placement = placeParaTag(stack, tag);
  if (!placement) return false;
  if (placement.joins) {
    stack.length = placement.keep;
    stack.push(tag);
  }
  return true;
}

/**
 * Advance `stack` over the paragraph tag `marker`, reading it from the stylesheet, and report its
 * verdict there. Every walk over the paragraphs replays them through this, so they all agree.
 *
 * A tag the stylesheet does not declare is `"unknown"`. PT9 auto-creates it with an empty
 * occursUnder (ScrStylesheet.GetTagIndex:182-201): valid anywhere, so like every such tag it joins
 * only an empty stack (TagValidator.cs:28-30).
 *
 * MUTATES `stack` (see {@link pushParaTagIfValid}).
 */
export function replayParaTag(
  stack: ParaStackEntry[],
  styleInfo: StyleInfo,
  marker: string,
): MarkerValidity | "valid" {
  const tag = toStackEntry(styleInfo, marker);
  if (!tag) {
    pushParaTagIfValid(stack, { marker, rank: 0, occursUnder: [] });
    return "unknown";
  }
  return pushParaTagIfValid(stack, tag) ? "valid" : "invalid";
}

/**
 * Replays `markers` (paragraph tags, in document order) into a validity stack — PT9
 * GetValidParagraphTags's build pass (MarkerItemSource.cs:183-194). Only the stack the replay
 * leaves behind matters here, so each tag's verdict is discarded.
 */
export function buildParaStack(styleInfo: StyleInfo, markers: readonly string[]): ParaStackEntry[] {
  const stack: ParaStackEntry[] = [];
  for (const marker of markers) replayParaTag(stack, styleInfo, marker);
  return stack;
}

/**
 * The validity stack right after a `\c`: the `\id` line, then the chapter. A chapter closes
 * everything before it but the `\id` line, whatever rank the stylesheet gives `\c`. A sheet may
 * leave the rank out, and the rank-0 that leaves would let PT9's rank check keep the introduction's
 * ranked paragraphs open after the chapter.
 */
export function paraStackAfterChapter(styleInfo: StyleInfo): ParaStackEntry[] {
  const chapter = toStackEntry(styleInfo, "c") ?? { marker: "c", rank: 0, occursUnder: ["id"] };
  return [...buildParaStack(styleInfo, ["id"]), { ...chapter, rank: Number.POSITIVE_INFINITY }];
}

/**
 * The paragraph tag a top-level block opens, as the validity stack sees it: the `\id` line's `id`,
 * a chapter's `c`, or a paragraph's own marker. `undefined` for any other block: an implied
 * paragraph, or an opaque one such as a sidebar, which the stack skips.
 *
 * Read-only: call inside `editor.getEditorState().read(...)` or an update.
 */
export function $getParaTagMarker(node: LexicalNode): string | undefined {
  if ($isBookNode(node) || $isSomeChapterNode(node) || $isParaNode(node)) return node.getMarker();
  return undefined;
}

/** Flag a node's visible marker glyphs (opener and closer MarkerNodes). Decorator
 * variants (ImmutableChapterNode) have no MarkerNode children — flag the node itself. */
function flagGlyphs(
  node: LexicalNode,
  validity: MarkerValidity,
  out: Map<NodeKey, MarkerValidity>,
): void {
  const glyphs = $isElementNode(node) ? node.getChildren().filter($isMarkerNode) : [];
  if (glyphs.length === 0) {
    out.set(node.getKey(), validity);
    return;
  }
  for (const glyph of glyphs) out.set(glyph.getKey(), validity);
}

/**
 * `contextMarker` is the enclosing paragraph's or note's marker, or `undefined` where PT9 finds
 * neither (the `\id` line) and so checks nothing but whether the marker is known.
 */
function checkChar(
  node: ElementNode,
  marker: string,
  contextMarker: string | undefined,
  styleInfo: StyleInfo,
  out: Map<NodeKey, MarkerValidity>,
): void {
  const entry = getMarkerStyleInfo(styleInfo, marker);
  if (!entry) {
    flagGlyphs(node, "unknown", out);
    return;
  }
  if (contextMarker === undefined) return;
  if (!occursUnderAllows(entry, contextMarker)) flagGlyphs(node, "invalid", out);
}

function $validateInline(
  element: ElementNode,
  contextMarker: string | undefined,
  styleInfo: StyleInfo,
  out: Map<NodeKey, MarkerValidity>,
  insideXq: boolean,
): void {
  for (const child of element.getChildren()) {
    if ($isCharNode(child)) {
      const marker = child.getMarker();
      if (!insideXq) checkChar(child, marker, contextMarker, styleInfo, out);
      // Nested chars keep validating against the PARA/NOTE marker (PT9 ancestor::para[1]).
      $validateInline(child, contextMarker, styleInfo, out, insideXq || marker === "xq");
    } else if ($isSomeVerseNode(child)) {
      if (insideXq) continue;
      const entry = getMarkerStyleInfo(styleInfo, "v");
      if (!entry) out.set(child.getKey(), "unknown");
      else if (contextMarker !== undefined && !occursUnderAllows(entry, contextMarker))
        out.set(child.getKey(), "invalid");
    } else if ($isNoteNode(child)) {
      // The note element itself is not context-validated (PT9 excludes //note);
      // its content validates against the NOTE's marker.
      $validateInline(child, child.getMarker(), styleInfo, out, insideXq);
    } else if ($isUnknownNode(child)) {
      // Opaque blocks (sidebars, periph, …): never descend.
    } else if ($isElementNode(child)) {
      $validateInline(child, contextMarker, styleInfo, out, insideXq);
    }
  }
}

/**
 * Full-document validation pass. Call inside `editor.getEditorState().read()` (never
 * `editor.read()`, which force-flushes an in-flight update mid-dispatch). Returns the
 * decoration map keyed by glyph/verse node keys.
 *
 * `onlyParagraphs` scopes the per-leaf INLINE descent to the named top-level elements — the
 * expensive part of the walk, so a keystroke's pass costs one paragraph, not the document. The
 * paragraph-level stack walk always runs in full: it is one entry per ROOT CHILD (cheap) and a
 * tag's verdict depends on the stack built from every preceding paragraph, so it cannot be
 * scoped without changing answers. A scoped result therefore contains fresh paragraph-level
 * flags for EVERY root child but inline flags only for the scoped ones; the caller carries the
 * out-of-scope inline flags forward from its previous pass (and must fall back to an unscoped
 * pass whenever root-level structure changed, since that shifts the stack context of everything
 * after the change).
 */
export function $validateDocument(
  styleInfo: StyleInfo,
  onlyParagraphs?: ReadonlySet<NodeKey>,
): Map<NodeKey, MarkerValidity> {
  const out = new Map<NodeKey, MarkerValidity>();
  const stack: ParaStackEntry[] = [];

  const inScope = (child: LexicalNode): boolean =>
    !onlyParagraphs || onlyParagraphs.has(child.getKey());
  for (const child of $getRoot().getChildren()) {
    if ($isUnknownNode(child)) continue; // opaque blocks: skip entirely
    const marker = $getParaTagMarker(child);
    if (marker !== undefined) {
      const verdict = replayParaTag(stack, styleInfo, marker);
      if (verdict !== "valid") flagGlyphs(child, verdict, out);
    }
    if ($isBookNode(child)) {
      if (inScope(child)) $validateInline(child, undefined, styleInfo, out, false);
    } else if ($isSomeChapterNode(child)) {
      // A chapter has no inline content of its own to validate.
    } else if ($isParaNode(child)) {
      if (inScope(child)) $validateInline(child, child.getMarker(), styleInfo, out, false);
    } else if ($isElementNode(child)) {
      // ImpliedParaNode and other unmarked wrappers: no para-level flag; PT9's
      // implied paragraph context is the default \p.
      if (inScope(child)) $validateInline(child, "p", styleInfo, out, false);
    }
  }
  return out;
}
