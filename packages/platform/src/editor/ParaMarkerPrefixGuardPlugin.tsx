import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection, $isRangeSelection } from "lexical";
import { useEffect } from "react";
import {
  $createGutterMarkerNode,
  $isSynthesizedMarkerNode,
  LoggerBasic,
  NBSP,
  openingMarkerText,
  ParaNode,
  PARA_MARKER_DEFAULT,
} from "shared";
import { showParaMarkerPrefix, ViewOptions } from "shared-react";

/**
 * Keeps a paragraph's visible USFM-marker label (e.g. `\s2`, `\q1`) in agreement with its marker.
 *
 * In the gutter view every paragraph carries its marker's glyph, including one the editor creates
 * (an Enter split, a multi-line paste): a paragraph found without one is given it. The user cannot
 * delete a gutter glyph — removing a selected marker merges its paragraph instead — so a missing
 * one is never a request to change the marker. Elsewhere (markerMode "visible") the plugin reverts
 * a paragraph back to the default `\p` marker when the user deletes the label.
 *
 * In views that render a paragraph's marker as a visible node — either inline (markerMode
 * "editable"/"visible") or in the gutter (`hasGutterParaMarkers`) — the adaptor injects that
 * marker as the first child of every non-`\p` paragraph. That visible marker is the only
 * thing the user can directly select and delete to act on the paragraph's type, so when it
 * disappears we read that as "make this a plain paragraph" and rewrite the paragraph's
 * marker to `\p`. The plugin is a no-op in views that don't render the marker (markerMode
 * "hidden" without a gutter), since the user never has the affordance to delete one.
 *
 * In editable marker mode the MarkerEditPlugin owns marker-deletion semantics (merge into
 * the previous paragraph), so this guard stands down there.
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
 * {@link ParaMarkerPrefixGuardPlugin}. Shaped as the adaptor builds it (`createPara`,
 * usj-editor.adaptor.ts): the opening marker text plus NBSP, flagged as a gutter glyph.
 *
 * Mutating: call inside `editor.update()` (a node transform already runs inside one).
 */
export function $restoreGutterMarkerIfMissing(para: ParaNode): void {
  const first = para.getFirstChild();
  if ($isSynthesizedMarkerNode(first)) return;
  const glyph = $createGutterMarkerNode(openingMarkerText(para.getMarker()) + NBSP);
  if (first) first.insertBefore(glyph);
  else para.append(glyph);
  // A caret at the paragraph's start would now sit before the glyph, which is no caret position.
  const selection = $getSelection();
  if (!$isRangeSelection(selection)) return;
  for (const point of [selection.anchor, selection.focus])
    if (point.type === "element" && point.key === para.getKey() && point.offset === 0)
      point.set(para.getKey(), 1, "element");
}
