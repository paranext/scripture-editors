import { LexicalNode } from "lexical";
import {
  $isAttributeDisplayRun,
  $isAttributeRunNode,
  $isCaretHost,
  $isGutterMarkerNode,
  $isImmutableTypedTextNode,
  $isMilestoneNode,
  MARKER_TEXT_TYPE,
} from "shared";

/**
 * Whether `node` renders nothing in the gutter view: a milestone, a marker glyph or attribute text
 * the view hides (every marker but a paragraph's own gutter glyph), or a run made only of those.
 *
 * Read-only: safe in any read.
 */
export function $rendersNothingInGutterView(node: LexicalNode): boolean {
  if ($isImmutableTypedTextNode(node))
    return node.getTextType() === MARKER_TEXT_TYPE && !$isGutterMarkerNode(node);
  if ($isAttributeRunNode(node)) return node.getChildren().every($rendersNothingInGutterView);
  return $isMilestoneNode(node) || $isAttributeDisplayRun(node);
}

/**
 * Whether a caret in the gutter view walks past `node` without a press of its own: a transient
 * caret host, or a node the view hides ({@link $rendersNothingInGutterView}).
 *
 * Read-only: safe in any read.
 */
export function $isPassedOverInGutterView(node: LexicalNode): boolean {
  return $isCaretHost(node) || $rendersNothingInGutterView(node);
}
