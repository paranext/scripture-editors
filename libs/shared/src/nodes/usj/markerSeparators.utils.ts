/**
 * Editable-mode display separators after opening char glyphs: the single place that owns HOW the
 * space the user sees after `\nd` is represented and kept in sync. Sibling of
 * nestedGlyphs.utils.ts, which owns the glyph `+` the same way.
 *
 * ## The convention
 *
 * In editable marker mode an opening char glyph (`\nd`) is followed on screen by a separator —
 * the space PT9 shows and the serializer writes after the marker. That separator is
 * PRESENTATION-ONLY state: the USFM writer emits the space after an opening marker structurally
 * and the tokenizer consumes it, so no separator ever lives in USJ content or in the saved bytes
 * as data. In the editor it is an NBSP (never a plain space, so it cannot word-wrap away from its
 * glyph), stored as:
 *
 * - a prefix of the following text (`\nd` + `⍽one`) when the glyph is directly followed by plain
 *   text — the shape `createChar` (usj-editor.adaptor), `$splitCharNodeAt`, and the marker-apply
 *   paths build, and the reverse adaptor strips on save;
 * - a standalone NBSP text node when the glyph is directly followed by an element (a nested char
 *   span, note, milestone, or verse: `\nd` + `⍽` + `\+wj …`) — NBSP-only text nodes are
 *   presentation-only by convention (`$shouldIgnoreNodeForContentIndexes`) and dropped by the
 *   editor→USJ conversion.
 *
 * ## Keeping it in sync
 *
 * Builders construct the separator (transforms do not run on `setEditorState`, so loaded states
 * must render correctly as-is), and {@link $syncOpenerSeparators} — registered as a CharNode
 * transform in CharNodePlugin — re-derives it whenever a span is dirtied, healing paths that
 * restructure spans without rebuilding them through an adaptor.
 *
 * A missing separator is healed back in place only when the displayed bytes tokenize IDENTICALLY
 * without it (`separatorRemovalTokenizesIdentically`, beside the tokenizer's own name scan): `\nd`
 * before `\`, `|` or more whitespace means the same with or without the space, so restoring it is
 * display canonicalization. Anything else is the user's bytes — `\ndthings` renames the marker and
 * `\nd*` is a closer, whether the separator was deleted or typed over — and healing it back would
 * rewrite what the screen shows. For those the marker-edit engine pends the span
 * ({@link $hasUnsettledSeparatorGap}), graces it while the caret is anywhere inside it
 * ({@link $hasCaretGracedSeparatorGap}), and settles it on caret departure by re-tokenizing, so the
 * displayed bytes win; the sync leaves a pended span alone and hands such a gap to the engine
 * instead of healing it. Deleting a separator must always be ALLOWED: while the collapsed caret sits
 * at the deletion point ({@link $hasCaretHeldSeparatorGap}) even a healable gap waits for departure.
 *
 * An annotation mark is transparent to all of this: a range into a span wraps its content in a
 * `TypedMarkNode`, and the text the gap is decided by — and the caret boundary — is the mark's
 * first text, not the mark element.
 *
 * Only char-span glyphs take a separator — a milestone's display run inside a span is left
 * alone — so which glyphs qualify is decided by the same classifier the nested-`+` sync uses
 * ({@link $charGlyphNestedValue}).
 */

import { separatorRemovalTokenizesIdentically } from "../../converters/usfm/usfmFragmentToUsj.js";
import { $isMarkerNode, MarkerNode } from "../features/MarkerNode.js";
import { $isTypedMarkNode } from "../features/TypedMarkNode.js";
import { textTypeState } from "../collab/delta.state.js";
import { $isCharNode, CharNode } from "./CharNode.js";
import { $isInLiteralOnlyBlock } from "./literalOnlyBlock.utils.js";
import { $charGlyphNestedValue } from "./nestedGlyphs.utils.js";
import { NBSP } from "./node-constants.js";
import {
  $isDisplayOwnerPended,
  $reportDestroyedDisplayOwner,
  getPendedDisplayOwners,
} from "./pendedDisplayOwners.utils.js";
import {
  $createTextNode,
  $getEditor,
  $getSelection,
  $getState,
  $isRangeSelection,
  $isTextNode,
  LexicalNode,
  TextNode,
} from "lexical";

/**
 * Whether `node` is text that may carry a char-span separator NBSP as its own PREFIX: exactly a
 * plain `TextNode` — subclasses (`VerseNode`, `ImmutableUnmatchedNode`, `MarkerNode`) render their
 * own marker bytes, and splicing an NBSP into those rewrites a glyph — and not an attribute
 * display run (textType "attribute"), whose `|…` bytes are engine-owned canonical output that an
 * NBSP prefix would corrupt. THE one predicate for every site that splices a separator into
 * leading text ({@link $openerSeparatorGap} here, plus the continuation/absorb span builders in
 * charGlyphs.utils.ts and charStack.utils.ts), so the rule cannot drift between them; anything
 * else takes a standalone NBSP spacer instead.
 *
 * Read-only: safe inside `editor.update()` or either read form.
 */
export function $isSeparatorPrefixHostText(node: LexicalNode | null | undefined): node is TextNode {
  return (
    $isTextNode(node) &&
    node.getType() === TextNode.getType() &&
    $getState(node, textTypeState) !== "attribute"
  );
}

/**
 * How many of `node`'s leading characters are the char-span separator rather than content: `1`
 * when `node` is a plain TextNode carrying an opening char glyph's separator NBSP as its prefix,
 * `0` otherwise.
 *
 * The separator is display state the editor→USJ conversion strips, so that byte is not part of
 * the span's USJ text: anything that measures content or maps between live and settled text
 * offsets must skip it, or every offset inside a char span is off by one. Shape-based on purpose
 * — glyph adjacency, not view options, which this layer does not see. The editor→USJ
 * conversion's strip (`precedesOpeningCharGlyph` in `editor-usj.adaptor.ts`, every editable view)
 * decides the same way over the serialized tree, so an authored `~` right after a nested closer,
 * or leading a span's content once a mark split the separator off, survives the export.
 *
 * Read-only: safe inside `editor.update()` or either read form.
 */
export function $charSeparatorPrefixLength(node: TextNode): 0 | 1 {
  if (!$isSeparatorPrefixHostText(node) || !node.getTextContent().startsWith(NBSP)) return 0;
  // The span is the nearest non-annotation ancestor, and the glyph is whatever sits immediately
  // before the text in document order within it — annotation wrappers are transparent on BOTH
  // sides. A host can annotate a range that starts on the opening glyph (a marker location), so
  // the glyph can share the text's mark, sit in a mark of its own, or be a plain sibling of the
  // mark the text is in.
  let child: LexicalNode = node;
  let previous: LexicalNode | null = child.getPreviousSibling();
  let parent = child.getParent();
  while (parent && $isTypedMarkNode(parent)) {
    child = parent;
    parent = child.getParent();
    previous ??= child.getPreviousSibling();
  }
  if (!$isCharNode(parent)) return 0;
  // A mark that ends right before the text hides the glyph as its last descendant.
  while ($isTypedMarkNode(previous)) previous = previous.getLastChild();
  if (!$isMarkerNode(previous) || previous.getMarkerSyntax() !== "opening") return 0;
  // Only char-span glyphs take a separator (not a milestone's display run) — the same classifier
  // $openerSeparatorGap builds one with, so reading and writing can never disagree about which
  // glyphs own one.
  return $charGlyphNestedValue(previous, parent) === undefined ? 0 : 1;
}

/**
 * The node whose leading bytes follow `opener`'s separator site: the glyph's next sibling, read
 * through any annotation marks to the first node that is not one. A range into a span wraps the
 * content in a `TypedMarkNode`, which is presentation only — whether a separator is owed, and what
 * removing it would mean, is a question about that content.
 */
function $contentAfterOpener(opener: MarkerNode): LexicalNode | null {
  let node = opener.getNextSibling();
  while ($isTypedMarkNode(node)) node = node.getFirstChild();
  return node;
}

/**
 * Where a separator is missing after `opener` (a direct child of `char`):
 *
 * - `"prefix"` — the glyph is directly followed by plain text that lacks the NBSP prefix;
 * - `"spacer"` — the glyph is followed by an element (or, in the collab-flattened shape, a nested
 *   span's opening glyph) with no standalone NBSP spacer between them, or by an annotation mark
 *   whose text lacks the NBSP prefix (the separator then stands in front of the mark, the shape
 *   the wrap itself leaves);
 * - `undefined` — no separator is owed: the glyph is not a char-span glyph (a milestone's display
 *   run), has nothing after it, sits directly before a non-nested glyph, or its separator exists.
 */
function $openerSeparatorGap(opener: MarkerNode, char: CharNode): "prefix" | "spacer" | undefined {
  if (opener.getMarkerSyntax() !== "opening") return undefined;
  // Only char-span glyphs take a separator (not a milestone's display run).
  if ($charGlyphNestedValue(opener, char) === undefined) return undefined;
  const next = opener.getNextSibling();
  const content = $contentAfterOpener(opener);
  if (next === null || content === null) return undefined;
  if ($isMarkerNode(content)) {
    // Opening glyph directly before another glyph: in the collab-flattened shape that next glyph
    // opens a nested span (`\add\+wj …`) and the separator goes between them. Any other adjacent
    // glyph (the span's own closer on a degenerate empty span) takes none.
    return $charGlyphNestedValue(content, char) === true ? "spacer" : undefined;
  }
  // Plain text directly after the glyph carries the separator as its prefix — see
  // $isSeparatorPrefixHostText for what qualifies and why.
  if ($isSeparatorPrefixHostText(content)) {
    if (content.getTextContent().startsWith(NBSP)) return undefined;
    return content.is(next) ? "prefix" : "spacer";
  }
  // Element content (nested char span, note, milestone, verse), TextNode subclasses, and
  // attribute-run text: standalone NBSP spacer.
  return "spacer";
}

/**
 * Whether the bytes after `opener`'s separator site are the user's to decide rather than the
 * sync's to heal: the site is followed by plain content text (read through annotation marks) whose
 * first byte would change the token stream if the separator stayed gone — a name character that
 * the marker name runs into, or the `*` of a closer. Element content, glyphs and attribute runs
 * all begin with bytes the name scan stops at, so their gaps always heal. So does any gap in a
 * block no settle scope re-tokenizes ({@link $isInLiteralOnlyBlock}: a table cell, the `\id`
 * line, an opaque block): nothing could ever settle the new name there, and healing keeps the
 * screen equal to what the writer saves.
 */
function $isRenamingGap(opener: MarkerNode): boolean {
  if (!$isSeparatorPrefixHostText($contentAfterOpener(opener))) return false;
  if ($isInLiteralOnlyBlock(opener)) return false;
  return !separatorRemovalTokenizesIdentically(opener.getNextSibling()?.getTextContent() ?? "");
}

/**
 * The displayed bytes immediately after `char`'s first missing-separator site, or `undefined`
 * when every opening glyph's separator is present (or none is owed). This is the input the
 * tokenize-identity predicate (`separatorRemovalTokenizesIdentically`, the fragment tokenizer's
 * sibling) needs to decide whether the missing byte may be healed in place or the bytes now mean
 * something new and must re-tokenize. Read-only: call inside `editor.getEditorState().read(...)`
 * or an update.
 */
export function $openerSeparatorGapFollowingBytes(char: CharNode): string | undefined {
  if (!char.isAttached()) return undefined;
  for (const child of char.getChildren()) {
    if (!$isMarkerNode(child)) continue;
    if ($openerSeparatorGap(child, char) === undefined) continue;
    return child.getNextSibling()?.getTextContent() ?? "";
  }
  return undefined;
}

/**
 * Whether the collapsed caret sits at `opener`'s separator site — on the glyph itself, on the
 * span (an element point), or at the very start of the node after the glyph (read through any
 * annotation marks, so the start of a mark's first text counts). This is where the caret lands
 * when the user deletes the separator, and deleting must always be allowed: while the caret stays
 * here the sync leaves the gap alone (mid-edit grace), and the marker-edit engine settles the span
 * on caret departure (it pends spans reported by {@link $hasCaretHeldSeparatorGap}).
 */
function $isCaretAtOpenerBoundary(opener: MarkerNode, char: CharNode): boolean {
  const selection = $getSelection();
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return false;
  const anchorNode = selection.anchor.getNode();
  if (anchorNode.is(opener) || anchorNode.is(char)) return true;
  if (selection.anchor.offset !== 0) return false;
  for (let node = opener.getNextSibling(); node; ) {
    if (anchorNode.is(node)) return true;
    if (!$isTypedMarkNode(node)) return false;
    node = node.getFirstChild();
  }
  return false;
}

/**
 * Ensure every opening char glyph among `char`'s direct children is followed by its display
 * separator — except one whose separator site holds the collapsed caret (see
 * {@link $isCaretAtOpenerBoundary}), and, while a marker-edit engine is mounted, one whose
 * following bytes would read differently with the separator back: that span is reported to the
 * engine, which settles it by re-tokenizing what the screen shows. A span the engine already holds
 * pending is left alone entirely — its settle decides. Without an engine (a host with no editable
 * marker mode) every gap heals. Idempotent — a healed span passes untouched, so the registering
 * transform converges.
 *
 * The healed spacer is a plain NBSP text node, the same shape the forward adaptor builds for a span
 * whose content starts with an element: a char span's separator is recognized by position (the
 * NBSP right after its opening glyph), not by the tagged token separator a paragraph or note glyph
 * takes, and typing next to it must stay ordinary text editing.
 *
 * @param char - The char span whose separators to sync. Must be called inside `editor.update()`.
 */
export function $syncOpenerSeparators(char: CharNode): void {
  // An earlier transform in the same pass may have merged/removed the span.
  if (!char.isAttached()) return;
  if ($isDisplayOwnerPended(char)) return;
  const isEngineMounted = getPendedDisplayOwners($getEditor()) !== undefined;
  char.getChildren().forEach((child: LexicalNode) => {
    if (!$isMarkerNode(child)) return;
    const gap = $openerSeparatorGap(child, char);
    if (gap === undefined) return;
    if ($isCaretAtOpenerBoundary(child, char)) return;
    if (isEngineMounted && $isRenamingGap(child)) {
      $reportDestroyedDisplayOwner(char);
      return;
    }
    if (gap === "spacer") {
      child.insertAfter($createTextNode(NBSP));
      return;
    }
    const next = child.getNextSibling();
    if ($isTextNode(next)) $prefixSeparator(next);
  });
}

/** Prefix `text` with the separator NBSP, keeping any selection point inside it on the same
 * character it was on. */
function $prefixSeparator(text: TextNode): void {
  text.setTextContent(NBSP + text.getTextContent());
  const selection = $getSelection();
  if (!$isRangeSelection(selection)) return;
  for (const point of [selection.anchor, selection.focus])
    if (point.type === "text" && point.key === text.getKey())
      point.set(point.key, point.offset + 1, "text");
}

/**
 * True when `char` has a separator gap the sync is deliberately leaving alone because the caret
 * sits at it (a just-deleted separator). The marker-edit engine pends such spans so caret
 * departure settles them.
 */
export function $hasCaretHeldSeparatorGap(char: CharNode): boolean {
  if (!char.isAttached()) return false;
  return char
    .getChildren()
    .some(
      (child: LexicalNode) =>
        $isMarkerNode(child) &&
        $openerSeparatorGap(child, char) !== undefined &&
        $isCaretAtOpenerBoundary(child, char),
    );
}

/**
 * True when `char` has a separator gap the sync must leave for the marker-edit engine: the caret
 * sits at its site (see {@link $hasCaretHeldSeparatorGap}), or the bytes after it would read
 * differently with the separator back (a letter the marker name runs into, or the `*` of a closer)
 * — the gap a type-over leaves as readily as a deletion. The engine pends such a span and settles
 * it on caret departure: a healable gap in place, any other by re-tokenizing the displayed bytes.
 *
 * Read-only: call inside `editor.getEditorState().read(...)` or an update.
 */
export function $hasUnsettledSeparatorGap(char: CharNode): boolean {
  if (!char.isAttached()) return false;
  return char
    .getChildren()
    .some(
      (child: LexicalNode) =>
        $isMarkerNode(child) &&
        $openerSeparatorGap(child, char) !== undefined &&
        ($isCaretAtOpenerBoundary(child, char) || $isRenamingGap(child)),
    );
}

/**
 * True when `char` has a separator gap that settles by re-tokenizing rather than healing in place:
 * the bytes after it would read differently with the separator back, in a block that has a settle
 * scope. The settle's in-place heal and the sync decide by this same rule, so a gap the sync would
 * heal is never re-tokenized on departure, and the reverse.
 *
 * Read-only: call inside `editor.getEditorState().read(...)` or an update.
 */
export function $hasRenamingSeparatorGap(char: CharNode): boolean {
  if (!char.isAttached()) return false;
  return char
    .getChildren()
    .some(
      (child: LexicalNode) =>
        $isMarkerNode(child) &&
        $openerSeparatorGap(child, char) !== undefined &&
        $isRenamingGap(child),
    );
}

/**
 * Whether the collapsed caret holds `char`'s separator gap for the user: it sits at the gap's site
 * ({@link $hasCaretHeldSeparatorGap}), or anywhere inside the span while the gap is one the bytes
 * decide ({@link $hasUnsettledSeparatorGap}) — the user is still typing the new marker name, and
 * settling now would split the paragraph under the caret after the first keystroke.
 *
 * Read-only: call inside `editor.getEditorState().read(...)` or an update.
 */
export function $hasCaretGracedSeparatorGap(char: CharNode): boolean {
  if ($hasCaretHeldSeparatorGap(char)) return true;
  const selection = $getSelection();
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return false;
  const anchorNode = selection.anchor.getNode();
  const isCaretInSpan = anchorNode.is(char) || char.isParentOf(anchorNode);
  return isCaretInSpan && $hasUnsettledSeparatorGap(char);
}
