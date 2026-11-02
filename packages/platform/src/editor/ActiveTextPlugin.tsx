import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  $getNearestNodeFromDOMNode,
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  BaseSelection,
  BLUR_COMMAND,
  CLICK_COMMAND,
  COMMAND_PRIORITY_LOW,
  ElementNode,
  FOCUS_COMMAND,
  LexicalNode,
} from "lexical";
import { useEffect, useRef } from "react";
import {
  $getSelectedParaMarkerPara,
  $isCaretHost,
  $isImmutableTypedTextNode,
  $isMarkerNode,
  ZWSP,
} from "shared";
import { $isSomeVerseNode, $paraContentStartIndex, ViewOptions } from "shared-react";

const ACTIVE_CLASS = "psc-active-text";
export const EMPTY_CLASS = "psc-empty-text";
/**
 * Replaces {@link EMPTY_CLASS} on the empty verse the cursor is in. Its ellipsis is hidden but keeps
 * its width, so placing the cursor there doesn't reflow the line. `usj-nodes.css` pairs it with the
 * caret host right after the verse (EmptyVerseCaretGuardPlugin) to draw the caret after the number.
 */
export const ACTIVE_EMPTY_CLASS = "psc-empty-text-active";

/**
 * Plugin that outlines the paragraph under the cursor and marks individual verses with no
 * body content as empty. No-op unless `viewOptions.hasActiveTextFocusBox` is true.
 */
export function ActiveTextPlugin({ viewOptions }: { viewOptions: ViewOptions | undefined }): null {
  const [editor] = useLexicalComposerContext();
  const activeKeyRef = useRef<string>(undefined);
  // Set from a blur until focus returns. Updates still commit while the editor is blurred (a caret
  // guard removes its host on blur), and the selection they read is the one the user left.
  const isBlurredRef = useRef(false);
  const isEnabled = viewOptions?.hasActiveTextFocusBox ?? false;

  useEffect(() => {
    if (!isEnabled) return;

    function setActivePara(key: string | undefined): void {
      if (activeKeyRef.current) {
        editor.getElementByKey(activeKeyRef.current)?.classList.remove(ACTIVE_CLASS);
      }
      activeKeyRef.current = key;
      if (key) {
        editor.getElementByKey(key)?.classList.add(ACTIVE_CLASS);
      }
    }

    const unsubscribers = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      editor.registerCommand(
        CLICK_COMMAND,
        (event) => {
          const target = event.target;
          if (!(target instanceof Element)) return false;
          const verseEl = target.closest(`.${EMPTY_CLASS}, .${ACTIVE_EMPTY_CLASS}`);
          if (!verseEl) return false;
          const node = $getNearestNodeFromDOMNode(verseEl);
          if (!$isSomeVerseNode(node)) return false;
          const para = node.getParent();
          if (!$isElementNode(para)) return false;
          // Leave alone a click that selected something (a double or triple click), and one that
          // landed inside an editable verse marker's own text (`\v 2`): only the ellipsis after
          // it moves the caret.
          const selection = $getSelection();
          if ($isRangeSelection(selection)) {
            if (!selection.isCollapsed()) return false;
            const { anchor } = selection;
            if (anchor.key === node.getKey() && anchor.offset < node.getTextContentSize())
              return false;
          }
          // Into the caret host already there, if any: the element point in front of one is drawn
          // in it only because the browser re-resolves it there. Not `$placeCaretAtBoundary`, which
          // would put the caret in an editable next verse marker's own text.
          const after = node.getIndexWithinParent() + 1;
          const host = para.getChildAtIndex(after);
          if ($isTextNode(host) && $isCaretHost(host)) host.select(0, 0);
          else para.select(after, after);
          return false;
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerUpdateListener(({ editorState }) => {
        const { newActiveKey, activeVerseKey, emptyKeys, nonEmptyKeys } = editorState.read(() => {
          const newActiveKey = $getActiveParaKey();
          const activeVerseKey = $getActiveVerseKey();
          const emptyKeys: string[] = [];
          const nonEmptyKeys: string[] = [];
          $getRoot()
            .getChildren()
            .forEach((child) => {
              if (!$isElementNode(child)) return;
              const { emptyKeys: e, nonEmptyKeys: n } = $getEmptyVerseStatus(child);
              emptyKeys.push(...e);
              nonEmptyKeys.push(...n);
            });
          return { newActiveKey, activeVerseKey, emptyKeys, nonEmptyKeys };
        });

        const isFocused = !isBlurredRef.current;
        const activeParaKey = isFocused ? newActiveKey : undefined;
        if (activeParaKey !== activeKeyRef.current) setActivePara(activeParaKey);

        // The active verse (the one whose section currently contains the cursor) hides its
        // ellipsis placeholder while the user is positioned to type there, and shows it again on
        // the next update when the cursor moves to a different verse. It is marked rather than
        // just unmarked so the stylesheet can keep the ellipsis's width: dropping it reflowed the
        // line and drew the caret at the wrap.
        emptyKeys.forEach((key) => {
          const isActive = isFocused && key === activeVerseKey;
          const classList = editor.getElementByKey(key)?.classList;
          classList?.toggle(EMPTY_CLASS, !isActive);
          classList?.toggle(ACTIVE_EMPTY_CLASS, isActive);
        });
        nonEmptyKeys.forEach((key) =>
          editor.getElementByKey(key)?.classList.remove(EMPTY_CLASS, ACTIVE_EMPTY_CLASS),
        );
      }),
      editor.registerCommand(
        BLUR_COMMAND,
        () => {
          isBlurredRef.current = true;
          setActivePara(undefined);
          return false;
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        FOCUS_COMMAND,
        () => {
          isBlurredRef.current = false;
          const newActiveKey = editor.getEditorState().read($getActiveParaKey);
          if (newActiveKey !== activeKeyRef.current) setActivePara(newActiveKey);
          return false;
        },
        COMMAND_PRIORITY_LOW,
      ),
    ];

    // Initial sync: registerUpdateListener does not fire on registration, so a mount with an
    // already-focused editor (route reload, focus restored by browser) would otherwise leave the
    // active outline missing until the user moves the cursor.
    setActivePara(editor.getEditorState().read($getActiveParaKey));

    return mergeRegister(...unsubscribers);
  }, [editor, isEnabled]);

  return null;
}

/** Reads the active paragraph's key from the current selection. Must run inside an editor read. */
function $getActiveParaKey(): string | undefined {
  return $getParaFromSelection($getSelection() ?? undefined)?.getKey();
}

/**
 * Returns the key of the verse whose section currently contains the cursor — that is, the most
 * recent verse marker at or before the cursor's position within its paragraph. Returns undefined
 * when there is no range selection (a selected paragraph marker counts as the start of its
 * paragraph's content), the cursor sits in a non-verse paragraph, or the cursor is before the
 * first verse marker. Must run inside an editor read.
 */
export function $getActiveVerseKey(): string | undefined {
  const selection = $getSelection();
  // A selected paragraph marker: the verse its content starts in — the verse a keystroke would
  // type into — is the active one, so its ellipsis stays hidden like a caret's would.
  // `$paraContentStartIndex` is the same measure of that paragraph's prefix the caret uses on the
  // way out, so the two cannot disagree about which verse the content starts in.
  const markerPara = $getSelectedParaMarkerPara(selection);
  if (markerPara) {
    const prefix = markerPara.getChildren().slice(0, $paraContentStartIndex(markerPara));
    return prefix.findLast($isSomeVerseNode)?.getKey();
  }
  if (!$isRangeSelection(selection)) return undefined;

  const anchor = selection.anchor;
  const anchorNode = anchor.getNode();
  const para = anchorNode.getTopLevelElement();
  if (!$isElementNode(para)) return undefined;

  // Translate the cursor into a boundary index within the paragraph's children. Verse markers at
  // index < boundary sit at or before the cursor; the latest one is the active verse.
  let boundary: number;
  if (anchorNode.is(para)) {
    // Element selection on the para itself — offset is a child index, e.g. set by
    // placeCursorAfterEmptyVerse via `para.select(verseIndex + 1, verseIndex + 1)`.
    boundary = anchor.offset;
  } else {
    // Selection inside a descendant — walk up to the direct paragraph child and treat the
    // cursor as positioned just past that child's start (so the child itself counts).
    let topChild: LexicalNode | undefined = anchorNode;
    while (topChild && !topChild.getParent()?.is(para)) {
      topChild = topChild.getParent() ?? undefined;
    }
    if (!topChild) return undefined;
    boundary = topChild.getIndexWithinParent() + 1;
  }

  const children = para.getChildren();
  let activeKey: string | undefined;
  for (let i = 0; i < boundary && i < children.length; i++) {
    if ($isSomeVerseNode(children[i])) activeKey = children[i].getKey();
  }
  return activeKey;
}

/**
 * Returns the top-level paragraph for the cursor, or undefined if there is no range selection.
 * This is any paragraph the cursor lands in — verse-bearing paragraphs, section headings, book
 * code paragraph, empty paragraphs, etc. — or, while a paragraph's marker is selected, that
 * paragraph.
 *
 * Read-only: safe in any read — `editor.getEditorState().read()`, an `editor.update()`, or a
 * command handler.
 */
export function $getParaFromSelection(
  selection: BaseSelection | undefined,
): ElementNode | undefined {
  const markerPara = $getSelectedParaMarkerPara(selection);
  if (markerPara) return markerPara.getTopLevelElement() ?? markerPara;
  if (!$isRangeSelection(selection)) return undefined;
  return selection.anchor.getNode().getTopLevelElement() ?? undefined;
}

/**
 * Classifies each verse in the paragraph by whether its "section" — the children between this
 * verse marker and the next verse marker (or end of paragraph) — has any non-whitespace body text.
 * Marker-prefix nodes (the paragraph's leading `\p` marker / immutable typed text) and ZWSPs are
 * ignored. Used to apply `psc-empty-text` per verse so the ellipsis placeholder renders next to
 * every empty verse number, not just verses that occupy their own paragraph.
 */
export function $getEmptyVerseStatus(para: ElementNode): {
  emptyKeys: string[];
  nonEmptyKeys: string[];
} {
  const children = para.getChildren();
  const emptyKeys: string[] = [];
  const nonEmptyKeys: string[] = [];
  for (let i = 0; i < children.length; i++) {
    const verse = children[i];
    if (!$isSomeVerseNode(verse)) continue;
    let sectionHasBody = false;
    for (let j = i + 1; j < children.length; j++) {
      const sibling = children[j];
      if ($isSomeVerseNode(sibling)) break;
      if ($isImmutableTypedTextNode(sibling) || $isMarkerNode(sibling)) continue;
      if (sibling.getTextContent().replaceAll(ZWSP, "").trim() !== "") {
        sectionHasBody = true;
        break;
      }
    }
    (sectionHasBody ? nonEmptyKeys : emptyKeys).push(verse.getKey());
  }
  return { emptyKeys, nonEmptyKeys };
}
