import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $dfs, mergeRegister } from "@lexical/utils";
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
  LexicalEditor,
  LexicalNode,
} from "lexical";
import { useEffect, useRef } from "react";
import {
  $getSelectedParaMarkerPara,
  $isCaretHost,
  $isImmutableTypedTextNode,
  $isMarkerNode,
  $isParaLikeNode,
  ParaLikeNode,
  ZWSP,
} from "shared";
import { $isSomeVerseNode, $paraContentStartIndex, ViewOptions } from "shared-react";
import { OutlineRect, VerseOutlineInput } from "./verseOutlineGeometry";

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
          // Only an empty verse's classes depend on the active verse, and only while focused.
          const activeVerseKey =
            emptyKeys.length > 0 && !isBlurredRef.current ? $getActiveVerseKey() : undefined;
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
 * paragraph's content), the cursor sits in a non-verse paragraph or a table, or the cursor is
 * before the first verse marker. Must run inside an editor read.
 */
export function $getActiveVerseKey(): string | undefined {
  return $getActiveVerseSection()?.verseKey;
}

/** The stretch of a paragraph from one verse marker (or the paragraph's start) to the next. */
export interface VerseSection {
  /**
   * The paragraph that holds the section. The keys below are its descendants, not necessarily its
   * children: a verse marker can sit inside a char span.
   */
  paraKey: string;
  /** The verse marker that opens the section; undefined for the intro before the first verse. */
  verseKey: string | undefined;
  /** The verse marker that closes the section; undefined when it runs to the paragraph's end. */
  nextVerseKey: string | undefined;
  /**
   * The section's first node: the verse marker, or what the intro opens with after the paragraph's
   * marker prefix — its first leaf, or the outermost span that leaf opens and that lies wholly in
   * the intro (an expanded footnote, say). Undefined when the intro has no content, or only
   * whitespace.
   */
  startKey: string | undefined;
}

/**
 * The verse section the caret is in. Its `verseKey` is the verse {@link $getActiveVerseKey}
 * reports. Verse markers are found anywhere in the paragraph, in document order, so a verse nested
 * in a char span that crosses a verse break (`\wj "Come. \v 2 Follow me."\wj*`) still bounds its
 * section. Returns undefined when there is no range selection (a selected paragraph marker counts
 * as the start of its paragraph's content) or the caret is in a table, whose top-level element is a
 * row of cells rather than a paragraph.
 *
 * The caret is read from the selection's anchor, as the toolbar's verse reference and paragraph
 * style do, so a range selection's two ends don't pick different paragraphs. The section is not the
 * toolbar's verse, though: a line that carries on the previous paragraph's verse (a `\q2` after a
 * `\q1`) is this paragraph's intro here, while the toolbar names the verse it continues; and the
 * toolbar looks only one char span deep for a nested verse.
 *
 * Read-only: safe in any read — `editor.getEditorState().read()`, an `editor.update()`, or a
 * command handler.
 */
export function $getActiveVerseSection(): VerseSection | undefined {
  const caret = $locateCaret();
  if (!caret) return undefined;
  const { para, order, boundary } = caret;

  let activeIndex = -1;
  for (let i = 0; i < boundary; i++) if ($isSomeVerseNode(order[i])) activeIndex = i;
  let nextIndex = activeIndex + 1;
  while (nextIndex < order.length && !$isSomeVerseNode(order[nextIndex])) nextIndex++;

  return {
    paraKey: para.getKey(),
    verseKey: activeIndex < 0 ? undefined : order[activeIndex].getKey(),
    nextVerseKey: order.at(nextIndex)?.getKey(),
    startKey: (activeIndex < 0
      ? $introStart(para, order, nextIndex)
      : order[activeIndex]
    )?.getKey(),
  };
}

/**
 * Where the caret is within its paragraph: the paragraph's descendants in document order, and how
 * many of them sit at or before the caret.
 */
function $locateCaret():
  | { para: ParaLikeNode; order: LexicalNode[]; boundary: number }
  | undefined {
  const selection = $getSelection();
  // A selected paragraph marker: the verse its content starts in — the verse a keystroke would
  // type into — is the active one, so its ellipsis stays hidden like a caret's would.
  // `$paraContentStartIndex` is the same measure of that paragraph's prefix the caret uses on the
  // way out, so the two cannot disagree about which verse the content starts in.
  const markerPara = $getSelectedParaMarkerPara(selection);
  if (markerPara) {
    const order = $descendantsInOrder(markerPara);
    const contentStart = markerPara.getChildAtIndex($paraContentStartIndex(markerPara));
    return {
      para: markerPara,
      order,
      boundary: contentStart ? $indexIn(order, contentStart) : order.length,
    };
  }
  if (!$isRangeSelection(selection)) return undefined;

  const anchor = selection.anchor;
  const anchorNode = anchor.getNode();
  const para = anchorNode.getTopLevelElement();
  if (!$isParaLikeNode(para)) return undefined;
  const order = $descendantsInOrder(para);

  let boundary: number;
  if (anchor.type === "element" && $isElementNode(anchorNode)) {
    // An element point sits before the child at its offset (e.g. set by the empty-verse click
    // handler above via `para.select(verseIndex + 1, verseIndex + 1)`), or after the element's
    // last descendant.
    const child = anchorNode.getChildAtIndex(anchor.offset);
    if (child) boundary = $indexIn(order, child);
    else if (anchorNode.is(para)) boundary = order.length;
    else boundary = $indexIn(order, anchorNode.getLastDescendant() ?? anchorNode) + 1;
  } else {
    // A point in a text node or on a decorator: that node itself counts as before the caret.
    boundary = $indexIn(order, anchorNode) + 1;
  }
  return { para, order, boundary };
}

/**
 * The intro's first node (see {@link VerseSection.startKey}), or undefined when the intro — the
 * nodes after the marker prefix and before `order[nextIndex]` — has nothing but whitespace.
 */
function $introStart(
  para: ParaLikeNode,
  order: LexicalNode[],
  nextIndex: number,
): LexicalNode | undefined {
  const contentStart = para.getChildAtIndex($paraContentStartIndex(para)) ?? undefined;
  const leaf = $isElementNode(contentStart)
    ? (contentStart.getFirstDescendant() ?? contentStart)
    : contentStart;
  if (!leaf) return undefined;
  // From the first leaf, so an intro whose char span opens with the first verse (`\wj \v 1 …`)
  // counts as empty.
  const leafIndex = $indexIn(order, leaf);
  const intro = order.slice(leafIndex, nextIndex);
  const hasContent = intro.some(
    (node) =>
      !$isElementNode(node) &&
      !($isTextNode(node) && node.getTextContent().replaceAll(ZWSP, "").trim() === ""),
  );
  if (!hasContent) return undefined;

  // Start before the outermost span the leaf opens, when it lies wholly in the intro, so the span's
  // own box (an expanded footnote's padding) is measured with its text.
  let start: LexicalNode = leaf;
  for (;;) {
    const parent = start.getParent();
    if (!parent || parent.is(para) || start.getPreviousSibling()) break;
    if ($indexIn(order, parent.getLastDescendant() ?? parent) >= nextIndex) break;
    start = parent;
  }
  return start;
}

/** `node`'s descendants in document order, not including `node` itself. */
function $descendantsInOrder(node: ElementNode): LexicalNode[] {
  return $dfs(node)
    .slice(1)
    .map(({ node: descendant }) => descendant);
}

function $indexIn(order: LexicalNode[], node: LexicalNode): number {
  return order.findIndex((candidate) => candidate.is(node));
}

/**
 * Measures a verse section's layout for `computeVerseOutlineSegments`: the client rects of its text
 * — from just before its first node to just before the next verse marker, or to the paragraph's
 * end — with the paragraph's content box, direction and alignment and the next verse marker's box,
 * all as plain objects. The range starts after the paragraph's marker prefix, so a gutter marker
 * glyph is never measured.
 *
 * Returns undefined for a paragraph without verse markers and for an intro with nothing visible
 * (no content, only whitespace, or only a milestone): the caller keeps outlining the whole
 * paragraph there. Also undefined when the section's elements aren't rendered inside the paragraph
 * or there is no layout engine (jsdom).
 *
 * Reads the DOM, so call it once the editor has committed the section and ActiveTextPlugin has set
 * its empty-verse classes for it — they change verse numbers' widths — e.g. from an update listener
 * registered after the plugin's, not from inside an update that may have changed it.
 */
export function measureVerseSection(
  editor: LexicalEditor,
  section: VerseSection,
): VerseOutlineInput | undefined {
  if (!section.startKey || (!section.verseKey && !section.nextVerseKey)) return undefined;
  const paraEl = editor.getElementByKey(section.paraKey);
  const startEl = editor.getElementByKey(section.startKey) ?? undefined;
  const nextEl = section.nextVerseKey
    ? (editor.getElementByKey(section.nextVerseKey) ?? undefined)
    : undefined;
  const view = paraEl?.ownerDocument.defaultView;
  if (!paraEl || !view || !startEl || !paraEl.contains(startEl)) return undefined;
  if (section.nextVerseKey && !(nextEl && paraEl.contains(nextEl))) return undefined;

  const range = paraEl.ownerDocument.createRange();
  range.setStartBefore(startEl);
  if (nextEl) range.setEndBefore(nextEl);
  else range.setEnd(paraEl, paraEl.childNodes.length);
  if (typeof range.getClientRects !== "function") return undefined;

  // Computed lengths are unzoomed CSS px; client rects already carry any CSS `zoom` around the
  // editor.
  const zoom = paraEl.currentCSSZoom || 1;
  const px = (value: string) => (parseFloat(value) || 0) * zoom;
  const style = view.getComputedStyle(paraEl);
  const box = paraEl.getBoundingClientRect();
  const direction = style.direction === "rtl" ? "rtl" : "ltr";
  const hugLines = !isStartAligned(style.textAlign, direction);

  let rects = Array.from(range.getClientRects(), toOutlineRect);
  // Under `pre-wrap` the space a line wraps at hangs past its text as a rect of its own. Lines that
  // run to the content box ignore it; hugged lines would be a space wider on one side, so drop it.
  if (hugLines) {
    const spaces = whitespaceRects(range);
    rects = rects.filter((rect) => !spaces.some((space) => isSameRect(rect, space)));
  }
  if (!rects.some((rect) => rect.right > rect.left && rect.bottom > rect.top)) return undefined;

  // A section that opens at its verse number takes in the number's margin box, so its margin sits
  // inside the outline like the space before the next verse number does. Per fragment, so a verse
  // number that wraps (an editable `\v 12 ` with a typed space) adds a box to each line it's on.
  if (section.startKey === section.verseKey) {
    const startStyle = view.getComputedStyle(startEl);
    for (const fragment of Array.from(startEl.getClientRects())) {
      rects.push({
        left: fragment.left - px(startStyle.marginLeft),
        right: fragment.right + px(startStyle.marginRight),
        top: fragment.top,
        bottom: fragment.bottom,
      });
    }
  }

  return {
    rects,
    contentBox: {
      left: box.left + px(style.borderLeftWidth) + px(style.paddingLeft),
      right: box.right - px(style.borderRightWidth) - px(style.paddingRight),
    },
    following: nextEl ? toOutlineRect(nextEl.getBoundingClientRect()) : undefined,
    direction,
    hugLines,
  };
}

/** Copies a `DOMRect`, whose sides are prototype getters that spreading or `toEqual` don't see. */
function toOutlineRect({ left, right, top, bottom }: OutlineRect): OutlineRect {
  return { left, right, top, bottom };
}

function isSameRect(a: OutlineRect, b: OutlineRect): boolean {
  return (
    Math.abs(a.left - b.left) < 0.5 &&
    Math.abs(a.right - b.right) < 0.5 &&
    Math.abs(a.top - b.top) < 0.5 &&
    Math.abs(a.bottom - b.bottom) < 0.5
  );
}

/** The client rects of every run of whitespace in the text nodes `range` holds. */
function whitespaceRects(range: Range): OutlineRect[] {
  const doc = range.commonAncestorContainer.ownerDocument;
  if (!doc) return [];
  const rects: OutlineRect[] = [];
  const walker = doc.createTreeWalker(range.commonAncestorContainer, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    if (!range.intersectsNode(node)) continue;
    for (const match of (node.textContent ?? "").matchAll(/\s+/g)) {
      const space = doc.createRange();
      space.setStart(node, match.index);
      space.setEnd(node, match.index + match[0].length);
      rects.push(...Array.from(space.getClientRects(), toOutlineRect));
    }
  }
  return rects;
}

/** Whether lines of this `text-align` run from the inline-start edge (or edge to edge). */
function isStartAligned(textAlign: string, direction: "ltr" | "rtl"): boolean {
  // Chromium reports the `-webkit-` alignments as written.
  const align = textAlign.replace(/^-webkit-/, "");
  if (align === "" || align === "start" || align === "justify") return true;
  return align === (direction === "rtl" ? "right" : "left");
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
