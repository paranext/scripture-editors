/**
 * The marker-edit engine's positional-KIND rules: given a marker name, is it a paragraph-kind
 * marker, or a character-kind one?
 *
 * A leaf module by design. More than one part of the engine asks the question — Tier 1 to decide
 * whether a rename keeps a glyph in the same position, the paragraph-prefix transform
 * (`$suppliesOwnParaMarker`, markerEditDeletion.utils.ts) to recognize a split paragraph whose own
 * text already opens with its marker literal — and they must answer it identically or a rename
 * and a split disagree about what the same bytes mean. Its only inputs are a plain string and a
 * stylesheet lookup, so it needs nothing from any caller, and keeping it in its own module lets
 * each caller share the one rule without importing another's.
 *
 * Milestone-name heuristic shared with the fragment tokenizer (`isMilestoneHeuristicName`): only
 * stylesheet-family milestone names (`\qt#-s/-e`, `\ts-s/-e`) plus annotation comment markers —
 * see its doc comment for why bare `ts`/`t-s`/`t-e` and the z-prefix wildcard are deliberately
 * excluded. Keeping one predicate here and in the tokenizer means Tier-1 kind guards and Tier-2
 * re-tokenization can never disagree about what is positionally a milestone.
 */

import { isMilestoneHeuristicName, MarkerLookup, MarkerType, NoteNode } from "shared";

/**
 * Same-positional-kind rule for paragraph openers. Stylesheet-first: a marker the effective sheet
 * KNOWS classifies by its styleType; heuristics cover only markers absent from the sheet. Unknown
 * markers stay as typed (Tier-1 renames to unknown markers stay in place).
 *
 * `$suppliesOwnParaMarker` (markerEditDeletion.utils.ts) needs this exact rule too, to recognize a
 * split paragraph that already opens with its own marker literal. A second, narrower
 * `type === MarkerType.Paragraph` check there would disagree with it for any unknown/custom.sty
 * marker.
 */
export function isParaKindMarker(marker: string, getMarkerFn: MarkerLookup): boolean {
  return isKindMarker(marker, getMarkerFn, MarkerType.Paragraph);
}

/** Same-positional-kind rule for char openers (see {@link isParaKindMarker}). */
export function isCharKindMarker(marker: string, getMarkerFn: MarkerLookup): boolean {
  return isKindMarker(marker, getMarkerFn, MarkerType.Character);
}

/**
 * The one body both public rules run, differing only in the kind they compare the stylesheet's
 * answer against. One function rather than two parallel ones because the whole reason this module
 * exists is that the two tiers must never disagree about a marker's position — and two copies of
 * the same five lines is exactly how they would come to.
 *
 * The unknown fallback answers TRUE for BOTH kinds deliberately: a marker the effective sheet does
 * not know stays wherever it was typed, so neither kind rules it out.
 */
function isKindMarker(marker: string, getMarkerFn: MarkerLookup, kind: MarkerType): boolean {
  const clean = marker.replace(/^\+/, "");
  if (clean === "v" || clean === "c") return false;
  const sheetKind = getMarkerFn(clean)?.type;
  if (sheetKind !== undefined && sheetKind !== MarkerType.Unknown) return sheetKind === kind;
  if (NoteNode.isValidMarker(clean) || isMilestoneHeuristicName(clean)) return false;
  return true;
}
