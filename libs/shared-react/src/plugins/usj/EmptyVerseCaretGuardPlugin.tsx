import { useTransientCaretHost } from "./transientCaretHost";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import { $getSelection, $isElementNode, $isRangeSelection, Klass, LexicalNode } from "lexical";
import { useEffect } from "react";
import { $caretHostAtBoundary, ImpliedParaNode, ParaNode } from "shared";
import { $isSomeVerseNode, SomeVerseNode } from "../../nodes/usj";

/**
 * The verse marker after which an empty-verse caret host is needed, or `undefined`.
 *
 * A verse whose content has all been deleted collapses to just its marker — an
 * `ImmutableVerseNode` is a childless decorator, so the caret can only land as an element point
 * wedged between markers, which the browser renders with no visible caret. This detects that state:
 * a collapsed element-type caret sitting immediately after a verse marker that is followed by
 * nothing, or by another verse marker (i.e. no `TextNode` to host the caret).
 *
 * Returns `undefined` when a text node already follows the marker (real content, or an existing
 * placeholder host), or when the caret is not at such a boundary.
 *
 * Read-only: call inside `editor.getEditorState().read()`.
 */
export function $emptyVerseNeedingHost(): SomeVerseNode | undefined {
  const selection = $getSelection();
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return undefined;
  const { anchor } = selection;
  if (anchor.type !== "element") return undefined;
  const element = anchor.getNode();
  if (!$isElementNode(element)) return undefined;

  const children = element.getChildren();
  const verse = children[anchor.offset - 1];
  if (!$isSomeVerseNode(verse)) return undefined;

  // A text node already hosts the caret at this boundary (real content or an existing placeholder).
  if ($caretHostAtBoundary(element, anchor.offset)) return undefined;

  const following = children[anchor.offset];
  // Nothing, or another verse marker, follows: this verse has no caret host.
  if (following === undefined || $isSomeVerseNode(following)) return verse;
  return undefined;
}

/**
 * The block types a verse's content can sit directly in. They are siblings rather than one
 * extending the other, so each needs its own transform registration.
 */
const PARA_KLASSES: Klass<LexicalNode>[] = [ParaNode, ImpliedParaNode];

/**
 * Keeps a visible caret in a verse whose text has been fully deleted.
 *
 * A verse number is rendered by a childless `ImmutableVerseNode` decorator, so once a verse has no
 * text the caret can only rest as an element point between decorators — which the browser draws
 * with no visible caret. This plugin drops a zero-width-space "caret host" text node into such an
 * empty verse and moves the caret into it, so the insertion point stays visible and typing lands in
 * the verse. {@link useTransientCaretHost} owns the host's lifetime — created on arrival, removed on
 * departure or blur, stripped the moment real text is typed — and the exclusions that keep it out of
 * saved Scripture and out of collaborative traffic; this file supplies only the rule for WHERE one
 * is needed. `TrailingNoteCaretGuardPlugin` supplies the other rule.
 *
 * The rule is driven from both arrivals a hostless verse has. The caret's own resting place
 * announces one, as a selection change. The other announces nothing — an edit that empties the
 * verse the caret is already in leaves the DOM selection where it was, so Lexical dispatches no
 * selection change — and is answered from the edit itself, in the same commit.
 *
 * Unlike the arrow-driven `CursorHandler` placeholder system (perf-react), this hosts a *resting*
 * caret and is aware of verse markers, so it fits the platform editor's immutable verse numbers.
 *
 * @returns Always `null`; this plugin renders no UI.
 */
export function EmptyVerseCaretGuardPlugin(): null {
  const [editor] = useLexicalComposerContext();
  const $repairCaret = useTransientCaretHost($emptyVerseNeedingHost);

  useEffect(() => {
    // The arrival the caret cannot announce: an edit that empties the verse it is resting in. The
    // caret ends up on the boundary's element point, but no selection change follows — Lexical
    // skips its dispatch when the DOM selection already matches the one the edit applied — so the
    // hook's SELECTION_CHANGE route never runs and the caret is stranded where nothing is drawn.
    //
    // Repaired from the edit itself, as a transform, so the host lands in the SAME commit: the
    // caret is never committed to a state it cannot be seen in, and there is no window for the
    // hook's stale-host pass to read a pre-repair anchor and take the new host back out.
    //
    // Deliberately NOT tagged CURSOR_CHANGE_TAG, unlike the hook's own commits. The tag suppresses
    // a whole commit for USJ-change consumers, and this commit is the user's edit. The host needs
    // no tag to stay out of the document: the USJ adaptor, the delta adaptor and the collab
    // coordinates each exclude a placeholder-only text node by its CONTENT.
    //
    // Converges: the repair dirties the block, the transform runs again, and the rule no longer
    // names a boundary once a host is on it.
    const registrable = PARA_KLASSES.filter((klass) => editor.hasNodes([klass]));
    return mergeRegister(
      ...registrable.map((klass) =>
        editor.registerNodeTransform(klass, () => {
          const target = $emptyVerseNeedingHost();
          if (target) $repairCaret(target);
        }),
      ),
    );
  }, [editor, $repairCaret]);

  return null;
}
