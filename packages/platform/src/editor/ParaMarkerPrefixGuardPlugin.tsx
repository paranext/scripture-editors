import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection, $isRangeSelection } from "lexical";
import { useEffect } from "react";
import {
  $caretHostAtBoundary,
  $createGutterMarkerNode,
  $isGutterMarkerNode,
  $isSynthesizedMarkerNode,
  LoggerBasic,
  NBSP,
  openingMarkerText,
  ParaNode,
  PARA_MARKER_DEFAULT,
} from "shared";
import { $paraContentStartIndex, showParaMarkerPrefix, ViewOptions } from "shared-react";

/**
 * Keeps a paragraph's visible USFM-marker label (e.g. `\s2`, `\q1`) in agreement with its marker.
 *
 * - Gutter view (`hasGutterParaMarkers`): every paragraph leads with its marker's glyph, so one
 *   found without it (an Enter split, a multi-line paste) is given one.
 * - markerMode "visible": the inline label is the only direct handle on the paragraph's type, so
 *   deleting it resets the marker to `\p`.
 *
 * A no-op where no label is rendered, and in editable marker mode, where `MarkerEditPlugin` owns
 * marker deletion.
 */
export function ParaMarkerPrefixGuardPlugin({
  viewOptions,
  logger,
}: {
  viewOptions: ViewOptions | undefined;
  logger?: LoggerBasic;
}): null {
  const [editor] = useLexicalComposerContext();
  // The prefix-opt-out check rides in front: with `showParaMarkerPrefixes: false` the adaptor
  // builds no prefix glyph at all, so a prefix-less paragraph is the CANONICAL shape there —
  // running the guard anyway read every non-`\p` paragraph as "marker deleted" and rewrote it
  // (e.g. `\q1` → `\p`) on the first edit that dirtied it. Same predicate as the adaptor and
  // the marker-edit transforms, so the five sites cannot drift.
  const isEnabled =
    showParaMarkerPrefix(viewOptions) &&
    (viewOptions?.markerMode === "visible" || (viewOptions?.hasGutterParaMarkers ?? false));

  const hasGutterParaMarkers = viewOptions?.hasGutterParaMarkers ?? false;

  useEffect(() => {
    if (!isEnabled) return;
    return editor.registerNodeTransform(ParaNode, (para) =>
      hasGutterParaMarkers
        ? $restoreGutterMarkerIfMissing(para)
        : $resetMarkerIfPrefixDeleted(para, logger),
    );
  }, [editor, isEnabled, hasGutterParaMarkers, logger]);

  return null;
}

/**
 * Resets `para`'s marker to `\p` if it's a non-default paragraph whose first child is no
 * longer the visible USFM-marker node the adaptor injected.
 *
 * `createPara` (usj-editor.adaptor.ts) always injects that visible marker as the first
 * child of every paragraph in views that render one, so a non-default paragraph that has
 * content but no marker as its first child must have had it deleted by the user — and the
 * marker is the only direct affordance the user has for the paragraph's type, so deleting
 * it reads as "revert to default." Empty paragraphs are skipped because they're a transient
 * state during edits (e.g. select-all-then-type before the new content lands) where the
 * marker is also missing without user intent to demote the paragraph.
 *
 * The optional logger surfaces this: in normal use it fires when the user deletes a marker
 * on purpose, so the debug line is just informational. If it fires on initial document
 * load (before any typing), the adaptor failed to inject a marker for this paragraph type
 * — that is the bug to chase.
 */
export function $resetMarkerIfPrefixDeleted(para: ParaNode, logger?: LoggerBasic): void {
  if (para.getMarker() === PARA_MARKER_DEFAULT) return;
  if (para.isEmpty()) return;
  if ($isSynthesizedMarkerNode(para.getFirstChild())) return;
  logger?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${para.getMarker()}" → "${PARA_MARKER_DEFAULT}" (key ${para.getKey()})`,
  );
  para.setMarker(PARA_MARKER_DEFAULT);
}

/**
 * Gives `para` its gutter marker glyph if its first child is not one — see
 * {@link ParaMarkerPrefixGuardPlugin}. When content has landed in front of the paragraph's own glyph
 * (text typed at the paragraph's very start, say), that glyph is moved back to the front rather than
 * a second one created. Otherwise a new glyph is shaped as the adaptor builds it (`createPara`,
 * usj-editor.adaptor.ts): the opening marker text plus NBSP, flagged as a gutter glyph.
 *
 * Mutating: call inside `editor.update()` (a node transform already runs inside one).
 */
export function $restoreGutterMarkerIfMissing(para: ParaNode): void {
  const first = para.getFirstChild();
  if ($isSynthesizedMarkerNode(first)) return;
  const text = openingMarkerText(para.getMarker()) + NBSP;
  const glyph =
    para
      .getChildren()
      .find((child) => $isGutterMarkerNode(child) && child.getTextContent() === text) ??
    $createGutterMarkerNode(text);
  if (first) first.insertBefore(glyph);
  else para.append(glyph);
  // A caret that was at the paragraph's start is now inside its prefix (inserting the glyph shifts
  // an element point past it), which is no caret position: it goes to the first content position,
  // past any leading verse number too.
  const selection = $getSelection();
  if (!$isRangeSelection(selection)) return;
  const contentStart = $paraContentStartIndex(para);
  // Hosted by the text there when there is some (the convention `$placeCaretAtBoundary` follows),
  // so the point survives the browser's reading of it back.
  const host = $caretHostAtBoundary(para, contentStart);
  for (const point of [selection.anchor, selection.focus])
    if (point.type === "element" && point.key === para.getKey() && point.offset < contentStart) {
      if (host) point.set(host.getKey(), 0, "text");
      else point.set(para.getKey(), contentStart, "element");
    }
}
