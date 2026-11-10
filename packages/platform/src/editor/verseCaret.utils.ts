import { $isElementNode, $isTextNode, ElementNode, TextNode } from "lexical";
import { $caretHostAtBoundary, $isNoteNode, $lastPiece, $placeCaretAtBoundary } from "shared";
import { $isSomeVerseNode, SomeVerseNode } from "shared-react";

/**
 * Parks the caret at the very start of `verse`'s content — immediately after the space that follows
 * the verse number, and BEFORE anything that content opens with: a note caller, a char span, a
 * milestone. Verse navigation and verse insertion both name a location in the text; neither may
 * step over content to reach it, so the caret lands on the same side of the verse's first thing
 * every time.
 *
 * That position is the boundary just past the verse marker. Naming it is easy; expressing it as a
 * point the browser will actually DRAW a caret at is the work, because the obvious spellings fail:
 *
 * - `verse.selectNext(0, 0)` selects INTO the following node. When that is a collapsed note, Lexical
 *   resolves it to the note's own `\f`/`\x` glyph — hidden while collapsed — and the caret vanishes.
 * - the boundary's element point (`para.select(i, i)`) draws nothing at all when no text node
 *   follows it. Measured in the app: `Range.getClientRects()` returns 0 there.
 * - walking FORWARD to the next node that can host a caret does draw one, but on the wrong side of
 *   the caller — the reported bug this replaces.
 *
 * So the position is expressed, in order of preference, as:
 *
 * 1. offset 0 of the text node that follows the boundary — plain content, the common case;
 * 2. the END of the verse marker itself, when the marker is editable text (Standard/Unformatted
 *    views, where a verse is a `VerseNode` whose text is literally `\v 9 `). That is the same screen
 *    location — after the marker's own trailing space, left of the caller — and it is already where
 *    arrow navigation rests when walking leftward out of the verse's content;
 * 3. the first text at the START of a char span that opens the verse, when the marker is an
 *    immutable decorator and so cannot host anything. Descending is still the boundary, not past it:
 *    only the first-child chain is followed, never a later sibling. A note is never descended into —
 *    a caller is an annotation hanging off the verse, not the start of its text;
 * 4. the boundary's element point. An empty verse (nothing follows, or the next verse marker does)
 *    takes this branch when its marker is an immutable decorator, deliberately: it is the state
 *    `EmptyVerseCaretGuardPlugin` detects and repairs with a caret host of its own, and the caret
 *    must not borrow the next verse's text. An EDITABLE marker of an empty verse takes (2) instead.
 *    The guard does not act there. Only the end of this verse's own marker is in this verse, so
 *    that is where the caret goes, whichever shape the empty verse has:
 *    - the next verse's marker follows: it is itself text, so the boundary has a text host — offset
 *      0 of that marker — which Lexical may or may not normalize back to the end of this one,
 *      depending on when the selection is next read, and which is the next verse's;
 *    - the verse ends its paragraph: nothing follows, so no host exists, and the marker's end is
 *      the one text point that belongs to this verse.
 *
 * Mutating (moves the selection): call inside `editor.update()`.
 */
export function $placeCaretAtVerseContentStart(verse: SomeVerseNode) {
  const para = verse.getParent();
  if (!para) return;
  // An editable marker an annotation cuts into pieces ends with its last piece.
  const marker = $lastPiece(verse);
  // eslint-disable-next-line scripture-editors/no-raw-carrier-accessors -- marker is the verse's last piece: the content starts past all of it
  const contentStart = marker.getIndexWithinParent() + 1;

  // The verse has no content of its own when nothing follows the marker or the next verse marker
  // does — and an editable verse marker is itself a TextNode, so this has to be asked before the
  // caret-host question, which would otherwise answer with the NEXT verse's marker.
  const opening = para.getChildAtIndex(contentStart);
  if (!opening || $isSomeVerseNode(opening)) {
    if ($isTextNode(marker)) marker.selectEnd();
    else $placeCaretAtBoundary(para, contentStart);
    return;
  }

  const host = $caretHostAtBoundary(para, contentStart);
  if (host) {
    host.select(0, 0);
    return;
  }

  // Content the caret must stay in front of, with nothing at the boundary able to carry a point.
  if ($isTextNode(marker)) {
    marker.selectEnd();
    return;
  }

  const nested =
    $isElementNode(opening) && !$isNoteNode(opening) ? $firstCaretHost(opening) : undefined;
  if (nested) nested.select(0, 0);
  else $placeCaretAtBoundary(para, contentStart);
}

/** The caret host at the very START of `element`'s content: its first-child chain only, so the
 * caret can never skip over content on its way to somewhere drawable. Notes are not entered. */
function $firstCaretHost(element: ElementNode): TextNode | undefined {
  const first = element.getFirstChild();
  if ($isTextNode(first)) return first;
  if ($isElementNode(first) && !$isNoteNode(first)) return $firstCaretHost(first);
  return undefined;
}
