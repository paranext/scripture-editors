import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $dfs, mergeRegister } from "@lexical/utils";
import {
  $getNearestNodeFromDOMNode,
  $getNodeByKey,
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
import { STRUCTURAL_MARKERS } from "./adaptors/verse-block.utils";
import { computeVerseOutlineBoxes, OutlineRect, VerseOutlineInput } from "./verseOutlineGeometry";
import { OutlineCornerStyle, outlinePathData } from "./verseOutlinePath";

/** Outlines the whole paragraph, where there is no verse to outline (a heading, say). */
const ACTIVE_CLASS = "psc-active-text";
/** The overlay the active verse's outline is drawn in, beside the editor's root element. */
export const VERSE_OUTLINE_CLASS = "psc-verse-outline";
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

// How the active verse's outline is drawn, in the editor's own CSS px (any CSS `zoom` around it
// scales them, as it does the whole-paragraph box's).
/** How far (px) the outline's line stands off the text. */
const OUTLINE_PADDING_PX = 2;
const OUTLINE_STROKE_PX = 2.5;
const OUTLINE_DEFAULT_COLOR = "#c4956a";
const OUTLINE_CORNERS: OutlineCornerStyle = "outward";
const OUTLINE_CORNER_RADIUS_PX = 4;
/**
 * Outline each line of the verse to its own text, stepping at every line, instead of running the
 * outline's sides straight down between the verse's first and last line. Centered and end-aligned
 * paragraphs are always hugged.
 */
const OUTLINE_HUGS_LINES = false;

export const EMPTY_CLASS = "psc-empty-text";
/**
 * Replaces {@link EMPTY_CLASS} on the empty verse the cursor is in. Its ellipsis is hidden but keeps
 * its width, so placing the cursor there doesn't reflow the line. `usj-nodes.css` pairs it with the
 * caret host right after the verse (EmptyVerseCaretGuardPlugin) to draw the caret after the number.
 */
export const ACTIVE_EMPTY_CLASS = "psc-empty-text-active";

/**
 * Plugin that outlines the verse under the cursor — across every line and paragraph it runs
 * through — and marks individual verses with no body content as empty. Where there is no verse to
 * outline (a heading, a paragraph with no verse marker before the chapter's first verse, an empty
 * line, a table, a selected paragraph marker) it outlines the whole paragraph instead. No-op unless `viewOptions.hasActiveTextFocusBox` is true.
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

    let overlay: SVGSVGElement | undefined;
    let outlinePath: SVGPathElement | undefined;

    /** Draws the active verse's outline, if there is one to draw. Returns whether it drew one. */
    function drawVerseOutline(): boolean {
      const root = editor.getRootElement();
      const host = overlay?.parentElement;
      const sections = isBlurredRef.current
        ? undefined
        : editor.getEditorState().read($getActiveVerseSections);
      const measurement = sections && measureVerseSections(editor, sections);
      // Measurements are in viewport px, which any CSS `zoom` around the editor has already scaled.
      const zoom = host?.currentCSSZoom || 1;
      const strokeWidth = OUTLINE_STROKE_PX * zoom;
      const boxes =
        measurement &&
        computeVerseOutlineBoxes({
          ...measurement,
          // The line is drawn centred on the outline, so it stops half its width short of the next
          // verse number to stay off it.
          following: measurement.following && {
            ...measurement.following,
            left: measurement.following.left - strokeWidth / 2,
            right: measurement.following.right + strokeWidth / 2,
          },
          hugLines: measurement.hugLines || OUTLINE_HUGS_LINES,
          padding: OUTLINE_PADDING_PX * zoom,
        });
      const d = boxes
        ? outlinePathData(boxes, OUTLINE_CORNERS, OUTLINE_CORNER_RADIUS_PX * zoom)
        : "";
      if (!d || !root || !host || !overlay || !outlinePath) {
        overlay?.style.setProperty("display", "none");
        return false;
      }
      // From the viewport's coordinates to the overlay's: its host's padding box, which scrolls with
      // the text, in the host's own (unzoomed) CSS px.
      const origin = host.getBoundingClientRect();
      outlinePath.setAttribute("d", d);
      outlinePath.setAttribute("stroke-width", String(strokeWidth));
      outlinePath.setAttribute(
        "transform",
        `translate(${host.scrollLeft - host.clientLeft} ${host.scrollTop - host.clientTop}) ` +
          `scale(${1 / zoom}) translate(${-origin.left} ${-origin.top})`,
      );
      // The overlay sits beside the root, so it doesn't inherit the root's accent colour.
      const accent = getComputedStyle(root).getPropertyValue("--scripture-accent").trim();
      if (accent) overlay.style.setProperty("--scripture-accent", accent);
      overlay.style.removeProperty("display");
      return true;
    }

    /**
     * Outlines what the cursor is in: its verse, or else its whole paragraph. Call once the DOM is
     * committed and the empty-verse classes are set, since they change verse numbers' widths.
     */
    function showActiveText(): void {
      const isDrawn = drawVerseOutline();
      const paraKey =
        isBlurredRef.current || isDrawn
          ? undefined
          : editor.getEditorState().read($getActiveParaKey);
      if (paraKey !== activeKeyRef.current) setActivePara(paraKey);
    }

    // A resize rewraps the text, so the outline is measured again. So do a change of the root's
    // direction or styling and a web font arriving, none of which need resize the root.
    const resizeObserver =
      typeof ResizeObserver === "undefined" ? undefined : new ResizeObserver(showActiveText);
    const rootObserver = new MutationObserver(showActiveText);
    let fonts: FontFaceSet | undefined;

    const unsubscribers = [
      editor.registerRootListener((root, previousRoot) => {
        if (previousRoot) resizeObserver?.unobserve(previousRoot);
        rootObserver.disconnect();
        fonts?.removeEventListener("loadingdone", showActiveText);
        fonts = undefined;
        overlay?.remove();
        overlay = undefined;
        outlinePath = undefined;
        if (!root?.parentElement) return;
        overlay = root.ownerDocument.createElementNS(SVG_NAMESPACE, "svg");
        overlay.classList.add(VERSE_OUTLINE_CLASS);
        overlay.setAttribute("aria-hidden", "true");
        // Inline, as hosts that keep their own copy of this package's stylesheets wouldn't have these
        // rules. It covers its container (Chromium paints nothing for a zero-size svg, overflow or
        // not); the path's own transform places it over the text.
        overlay.style.cssText =
          "display:none;position:absolute;top:0;left:0;width:100%;height:100%;" +
          "overflow:visible;pointer-events:none";
        outlinePath = root.ownerDocument.createElementNS(SVG_NAMESPACE, "path");
        outlinePath.style.cssText = `fill:none;stroke:var(--scripture-accent, ${OUTLINE_DEFAULT_COLOR})`;
        overlay.append(outlinePath);
        root.after(overlay);
        resizeObserver?.observe(root);
        rootObserver.observe(root, { attributeFilter: ["class", "dir", "style"] });
        fonts = root.ownerDocument.fonts;
        fonts?.addEventListener("loadingdone", showActiveText);
      }),
      () => {
        resizeObserver?.disconnect();
        rootObserver.disconnect();
        fonts?.removeEventListener("loadingdone", showActiveText);
        overlay?.remove();
      },
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
        const { activeVerseKey, emptyKeys, nonEmptyKeys } = editorState.read(() => {
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
          return { activeVerseKey, emptyKeys, nonEmptyKeys };
        });

        const isFocused = !isBlurredRef.current;

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
        showActiveText();
      }),
      editor.registerCommand(
        BLUR_COMMAND,
        () => {
          isBlurredRef.current = true;
          showActiveText();
          return false;
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        FOCUS_COMMAND,
        () => {
          isBlurredRef.current = false;
          showActiveText();
          return false;
        },
        COMMAND_PRIORITY_LOW,
      ),
    ];

    // Initial sync: registerUpdateListener does not fire on registration, so a mount with an
    // already-focused editor (route reload, focus restored by browser) would otherwise leave the
    // active outline missing until the user moves the cursor.
    showActiveText();

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
 * `\q1`) is this paragraph's intro here, while the toolbar names the verse it continues
 * ({@link $getActiveVerseSections} follows the verse there); and the toolbar looks only one char
 * span deep for a nested verse.
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
 * Whether a verse carries on through `node`: any paragraph but a heading or title (`\s`, `\qa`…),
 * where the verse blocks end a verse too.
 */
function $isRunningTextPara(node: LexicalNode | null | undefined): node is ParaLikeNode {
  return $isParaLikeNode(node) && !STRUCTURAL_MARKERS.has(node.getMarker());
}

/**
 * The caret's whole verse, as one {@link VerseSection} per paragraph it runs through, in document
 * order. A verse carries on past its paragraph's end into the running-text paragraphs after it (a
 * `\q1`'s verse through the `\q2` lines below it, or a `\p` break mid-verse) up to the next verse
 * marker, stopping at a heading, a table or a chapter. So the caret on any of those lines gets the
 * same sections. A carried-on paragraph's piece is its intro (no `verseKey`), and one with nothing
 * but whitespace (a stanza break) is left out.
 *
 * Elsewhere it is just {@link $getActiveVerseSection}'s section: in a heading, in text before the
 * chapter's first verse, on an empty line (which has nothing of the verse to show, so the caret's
 * own line isn't left unmarked), or in a verse that ends in its own paragraph. Undefined where that
 * is, and while a paragraph's marker is selected: that acts on the paragraph, not on a verse.
 *
 * Read-only, like {@link $getActiveVerseSection}.
 */
export function $getActiveVerseSections(): VerseSection[] | undefined {
  if ($getSelectedParaMarkerPara($getSelection())) return undefined;
  const section = $getActiveVerseSection();
  if (!section) return undefined;
  if (!section.verseKey && !section.startKey) return [section];
  const para = $getNodeByKey(section.paraKey);
  const sections = [section];
  if (!$isParaLikeNode(para)) return sections;

  // An intro in running text carries on the verse last opened in the paragraphs before it.
  if (!section.verseKey) {
    if (!$isRunningTextPara(para)) return sections;
    const before: VerseSection[] = [];
    let previous = para.getPreviousSibling();
    for (; $isParaLikeNode(previous); previous = previous.getPreviousSibling()) {
      const order = $descendantsInOrder(previous);
      const lastVerse = order.findLast($isSomeVerseNode);
      if (lastVerse) {
        const verseKey = lastVerse.getKey();
        before.unshift({
          paraKey: previous.getKey(),
          verseKey,
          nextVerseKey: undefined,
          startKey: verseKey,
        });
        break;
      }
      if (!$isRunningTextPara(previous)) return sections;
      const startKey = $introStart(previous, order, order.length)?.getKey();
      if (startKey)
        before.unshift({
          paraKey: previous.getKey(),
          verseKey: undefined,
          nextVerseKey: undefined,
          startKey,
        });
    }
    if (!before[0]?.verseKey) return sections;
    sections.unshift(...before);
  }

  // A verse that runs to its paragraph's end carries on through the running text after it.
  if (section.nextVerseKey) return sections;
  for (let next = para.getNextSibling(); $isRunningTextPara(next); next = next.getNextSibling()) {
    const order = $descendantsInOrder(next);
    const nextVerse = order.find($isSomeVerseNode);
    const end = nextVerse ? $indexIn(order, nextVerse) : order.length;
    const startKey = $introStart(next, order, end)?.getKey();
    if (startKey)
      sections.push({
        paraKey: next.getKey(),
        verseKey: undefined,
        nextVerseKey: nextVerse?.getKey(),
        startKey,
      });
    if (nextVerse) break;
  }
  return sections;
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
  if (!section.verseKey && !section.nextVerseKey) return undefined;
  return measurePiece(editor, section);
}

/**
 * Measures a verse that runs through several paragraphs ({@link $getActiveVerseSections}) as one
 * outline: every piece's rects together, inside the content boxes of all their paragraphs, ending
 * at the next verse marker in the last. Its direction is the first paragraph's, and it hugs its
 * lines if any paragraph is centered or end-aligned. A piece with nothing visible adds nothing.
 *
 * A single section is measured as {@link measureVerseSection} measures it, so a paragraph without
 * verse markers is still left to the whole-paragraph outline. Returns undefined when no piece has
 * anything to outline. Reads the DOM, with the same timing as {@link measureVerseSection}.
 */
export function measureVerseSections(
  editor: LexicalEditor,
  sections: readonly VerseSection[],
): VerseOutlineInput | undefined {
  if (sections.length === 1) return measureVerseSection(editor, sections[0]);
  const pieces = sections.flatMap((section) => measurePiece(editor, section) ?? []);
  if (pieces.length === 0) return undefined;
  return {
    rects: pieces.flatMap((piece) => piece.rects),
    contentBox: {
      left: Math.min(...pieces.map((piece) => piece.contentBox.left)),
      right: Math.max(...pieces.map((piece) => piece.contentBox.right)),
    },
    following: pieces.at(-1)?.following,
    direction: pieces[0].direction,
    hugLines: pieces.some((piece) => piece.hugLines),
  };
}

/** {@link measureVerseSection} for any section, one of a verse's several pieces included. */
function measurePiece(editor: LexicalEditor, section: VerseSection): VerseOutlineInput | undefined {
  if (!section.startKey) return undefined;
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

  // Under `pre-wrap` the space a line wraps at hangs past its text as a rect of its own. The outline
  // ends where the text ends, so drop it.
  const measured = Array.from(range.getClientRects(), toOutlineRect);
  const spaces = whitespaceRects(range);
  const rects = measured.filter((rect) => !spaces.some((space) => isSameRect(rect, space)));
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
