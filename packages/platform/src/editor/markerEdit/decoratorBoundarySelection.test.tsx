/**
 * Selecting the read-only USFM bytes of an opaque construct — a figure's `\fig ` opener, its
 * `|src="…"` attribute run, its `\fig*` closer — must produce a usable selection, because those
 * bytes are selectable and copyable by design (`OpaqueBlockGuardPlugin`).
 *
 * Each of those byte runs is an `ImmutableTypedTextNode`, a DECORATOR whose glyph text is a plain
 * DOM text child of its own element. A DOM point inside a decorator is one Lexical refuses outright:
 * `$internalResolveSelectionPoint` returns `null` for it, `$internalResolveSelectionPoints` then
 * nulls the WHOLE selection, and the commit clears the DOM range as well. The measured symptoms in
 * Chromium: a drag begun on the `\fig ` glyph left the editor with no selection at all, so Ctrl+C
 * reached only the empty-copy guard and the clipboard was never written; and a drag from the caption
 * into the attribute run stopped dead at the caption's end.
 *
 * `DecoratorBoundarySelectionPlugin` (shared-react) normalizes such an end to the decorator's own
 * boundary. These pins drive it the way the browser does — a DOM selection, then the native
 * `selectionchange` jsdom fires from it — rather than by naming tree nodes, because Lexical's
 * resolution of the DOM point is the whole mechanism under test. They mount the real `Editor` (via
 * `mountStandardViewEditor`) so the production plugin wiring, and the Standard-view copy handler
 * that turns the selection into USFM bytes, are both in the picture.
 */

import { flushQueuedEvents } from "../editor-test.utils";
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getNodeByKey,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  LexicalEditor,
  PointType,
} from "lexical";
import { $isParaNode, $isUnknownNode, UnknownNode } from "shared";

// jsdom implements neither `ClipboardEvent` nor `DragEvent`; Lexical's own clipboard fallbacks
// duck-type against both (`objectKlassEquals`). Same stub as the sibling clipboard suites.
const globalStubs: { DragEvent?: unknown; ClipboardEvent?: unknown } = globalThis;
if (typeof globalStubs.DragEvent === "undefined")
  globalStubs.DragEvent = class DragEvent extends Event {};
if (typeof globalStubs.ClipboardEvent === "undefined")
  globalStubs.ClipboardEvent = class ClipboardEvent extends Event {};

/** The figure's display bytes, in the order `unknownDisplayParts` lays them out: the opener glyph,
 * the caption, the USFM 3 attribute run, then the closer glyph. */
const OPENER = "\\fig ";
const CAPTION = "cap";
const ATTRIBUTES = '|src="a.jpg" size="col"';
const CLOSER = "\\fig*";

/** `\p one \fig cap|src="a.jpg" size="col"\fig* two` — a figure between two prose runs, so a
 * selection can start or end on either side of it as well as inside it. `src` is stored under
 * USX/USJ's `file`, which the display bytes rename back. */
const figureUsj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [
        "one ",
        { type: "figure", marker: "fig", file: "a.jpg", size: "col", content: [CAPTION] },
        " two",
      ],
    },
  ],
} as unknown as Usj;

/** The DOM text node inside `element`, which is where a hit test on rendered glyph bytes lands. */
function textChild(element: Element | null | undefined, what: string): Text {
  const text = element?.firstChild;
  if (!text || text.nodeType !== Node.TEXT_NODE) throw new Error(`${what} rendered no text`);
  return text as Text;
}

/**
 * Every rendered DOM text node a selection in this fixture can be anchored in — the three decorator
 * glyph runs, the caption, and the prose after the figure.
 */
function figureDom(editor: LexicalEditor) {
  const root = editor.getRootElement();
  const figure = root?.querySelector('[data-tag="figure"]');
  if (!root || !figure) throw new Error("the figure did not render");
  const markers = figure.querySelectorAll('span[data-text-type="marker"]');
  const trailing = [...root.querySelectorAll('span[data-lexical-text="true"]')].find(
    (element) => element.textContent === " two",
  );
  return {
    // The `<unknown>` element every snapped boundary is an offset in, which is where a materialized
    // boundary lands in the DOM as well.
    figure,
    opener: textChild(markers[0], "the opener glyph"),
    caption: textChild(figure.querySelector('span[data-lexical-text="true"]'), "the caption"),
    attributes: textChild(figure.querySelector('span[data-text-type="attribute"]'), "the run"),
    closer: textChild(markers[1], "the closer glyph"),
    trailing: textChild(trailing, "the prose after the figure"),
  };
}

/** The one `UnknownNode` in the tree — the figure, and the element every snapped boundary is
 * expressed in. */
function figureNode(editor: LexicalEditor): UnknownNode {
  return editor.getEditorState().read(() => {
    const figure = $getRoot()
      .getChildren()
      .filter($isParaNode)
      .flatMap((para) => para.getChildren())
      .find($isUnknownNode);
    if (!figure) throw new Error("no figure in the tree");
    return figure;
  });
}

/**
 * Put the DOM selection where a drag or click leaves it, then let the native `selectionchange` jsdom
 * fires from it reach Lexical — the same entry point a browser uses, so what Lexical resolves the
 * points to is measured rather than assumed. The leading flush clears any selection write left over
 * from the mount, which Lexical would otherwise treat as its own DOM update and skip.
 */
async function dragSelect(
  anchorNode: Node,
  anchorOffset: number,
  focusNode: Node,
  focusOffset: number,
): Promise<void> {
  await flushQueuedEvents();
  const domSelection = document.getSelection();
  if (!domSelection) throw new Error("no DOM selection");
  await act(async () => {
    domSelection.setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset);
  });
  await flushQueuedEvents();
  // Drained twice on purpose. A snap that materializes writes the DOM selection inside its own
  // commit, which queues one MORE `selectionchange`; Lexical tracks "this change was mine" in a
  // module-global flag cleared only by the next `selectionchange` it actually sees, so leaving that
  // event undelivered makes the following test's first real selection change look like Lexical's own
  // and be skipped — no `SELECTION_CHANGE_COMMAND`, and the repair under test never runs.
  await flushQueuedEvents();
}

/** `{ key, offset, type }` of both ends of the editor's current selection — what the snap is
 * asserted on, since a snapped end becomes an ELEMENT point beside the decorator. */
function selectionPoints(editor: LexicalEditor): {
  anchor: Pick<PointType, "key" | "offset" | "type">;
  focus: Pick<PointType, "key" | "offset" | "type">;
} {
  return editor.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
    const describe = ({ key, offset, type }: PointType) => ({ key, offset, type });
    return { anchor: describe(selection.anchor), focus: describe(selection.focus) };
  });
}

/**
 * Hold the pointer button down the way a drag does. `pointerdown` goes to the root element, which is
 * where a press inside the editor lands; the plugin leaves the browser's DOM selection alone only for
 * as long as this is held.
 */
async function pressPointer(editor: LexicalEditor): Promise<void> {
  const root = editor.getRootElement();
  if (!root) throw new Error("the editor rendered no root element");
  await act(async () => {
    root.dispatchEvent(new Event("pointerdown", { bubbles: true }));
  });
}

/**
 * Let the pointer button up. `pointerup` goes to the DOCUMENT, because a drag begun in the editor can
 * be released anywhere, and that is where the plugin listens for it. jsdom implements no
 * `PointerEvent`, so a plain `Event` carries the type — the plugin reads nothing else off it.
 */
async function releasePointer(editor: LexicalEditor): Promise<void> {
  const root = editor.getRootElement();
  if (!root) throw new Error("the editor rendered no root element");
  await act(async () => {
    root.ownerDocument.dispatchEvent(new Event("pointerup", { bubbles: true }));
  });
  await flushQueuedEvents();
  // The materialization's own DOM write queues a further `selectionchange`; see `dragSelect`.
  await flushQueuedEvents();
}

/** `{ anchorNode, anchorOffset, focusNode, focusOffset }` of the document's DOM selection — the four
 * properties the browser owns, and the ones a repair must be able to leave alone. */
function domSelectionPoints(): {
  anchorNode: Node | null;
  anchorOffset: number;
  focusNode: Node | null;
  focusOffset: number;
} {
  const domSelection = document.getSelection();
  if (!domSelection) throw new Error("no DOM selection");
  const { anchorNode, anchorOffset, focusNode, focusOffset } = domSelection;
  return { anchorNode, anchorOffset, focusNode, focusOffset };
}

/**
 * The `text/plain` bytes a Ctrl+C would put on the clipboard right now — `""` when the copy wrote
 * nothing, which is what an unresolved selection produces.
 *
 * Driven by a real `copy` event on the root element, the way the browser reaches `COPY_COMMAND`
 * (Lexical registers `copy` as a pass-through root event), rather than by dispatching the command
 * directly. The entry point is load-bearing for these pins: `$internalCreateSelection`
 * (lexical/LexicalUpdates) re-derives an update's selection FROM THE DOM whenever the update is not
 * attributable to a DOM event it trusts — it consults `window.event` — and the snapped selection
 * lives in the editor state only. A directly dispatched command would therefore be answered with the
 * DOM's own interior points, the unresolvable form, instead of the boundaries the snap chose.
 */
async function copiedText(editor: LexicalEditor): Promise<string> {
  const root = editor.getRootElement();
  if (!root) throw new Error("the editor rendered no root element");
  const store = new Map<string, string>();
  const clipboardData = {
    getData: (type: string) => store.get(type) ?? "",
    setData: (type: string, data: string) => {
      store.set(type, data);
    },
  };
  const event = new ClipboardEvent("copy", { bubbles: true, cancelable: true });
  Object.defineProperty(event, "clipboardData", { value: clipboardData });
  await act(async () => {
    root.dispatchEvent(event);
  });
  return clipboardData.getData("text/plain");
}

describe("a selection landing inside a read-only construct's decorator glyphs", () => {
  it("carries the whole opener glyph when the drag begins inside it", async () => {
    const { lexical } = await mountStandardViewEditor(figureUsj);
    const dom = figureDom(lexical);

    // Two characters into `\fig `, out to the third character of the prose after the figure.
    await dragSelect(dom.opener, 2, dom.trailing, 3);

    expect(selectionPoints(lexical)).toEqual({
      // Before the figure's first child: the opener glyph is wholly inside the selection.
      anchor: { key: figureNode(lexical).getKey(), offset: 0, type: "element" },
      focus: { key: expect.any(String), offset: 3, type: "text" },
    });
    expect(await copiedText(lexical)).toBe(`${OPENER}${CAPTION}${ATTRIBUTES}${CLOSER} tw`);
  });

  it("carries the whole attribute run when the drag runs into it", async () => {
    const { lexical } = await mountStandardViewEditor(figureUsj);
    const dom = figureDom(lexical);

    // From inside the caption (`c|ap`) into the middle of `|src="…"`.
    await dragSelect(dom.caption, 1, dom.attributes, 5);

    const figure = figureNode(lexical);
    expect(selectionPoints(lexical)).toEqual({
      anchor: { key: expect.any(String), offset: 1, type: "text" },
      // Past the attribute run, which is the figure's third child.
      focus: { key: figure.getKey(), offset: 3, type: "element" },
    });
    expect(await copiedText(lexical)).toBe(`ap${ATTRIBUTES}`);
  });

  it("grows a BACKWARD drag outward too, by the range's direction and not the anchor's", async () => {
    const { lexical } = await mountStandardViewEditor(figureUsj);
    const dom = figureDom(lexical);

    // The same span as the first pin, dragged right to left: the FOCUS is the offending end now.
    await dragSelect(dom.trailing, 3, dom.opener, 2);

    expect(selectionPoints(lexical)).toEqual({
      anchor: { key: expect.any(String), offset: 3, type: "text" },
      focus: { key: figureNode(lexical).getKey(), offset: 0, type: "element" },
    });
    expect(await copiedText(lexical)).toBe(`${OPENER}${CAPTION}${ATTRIBUTES}${CLOSER} tw`);
  });

  it("carries a glyph whole when BOTH ends land inside the same one", async () => {
    const { lexical } = await mountStandardViewEditor(figureUsj);
    const dom = figureDom(lexical);

    // A short drag entirely within `\fig `, from its second character to its fourth.
    await dragSelect(dom.opener, 1, dom.opener, 3);

    expect(selectionPoints(lexical)).toEqual({
      anchor: { key: figureNode(lexical).getKey(), offset: 0, type: "element" },
      // Lexical normalizes "past the opener" to the start of the next child, the caption text.
      focus: { key: expect.any(String), offset: 0, type: "text" },
    });
    expect(await copiedText(lexical)).toBe(OPENER);
  });

  it("puts a caret on the nearer side of the glyph it was clicked in", async () => {
    const { lexical } = await mountStandardViewEditor(figureUsj);
    const dom = figureDom(lexical);
    const figure = figureNode(lexical);

    // `\fig*` is the figure's LAST child (index 3), so its two boundaries are offsets 3 and 4 in
    // the figure. A caret in the glyph's trailing half takes the trailing one.
    await dragSelect(dom.closer, 4, dom.closer, 4);
    expect(selectionPoints(lexical)).toEqual({
      anchor: { key: figure.getKey(), offset: 4, type: "element" },
      focus: { key: figure.getKey(), offset: 4, type: "element" },
    });

    await dragSelect(dom.closer, 1, dom.closer, 1);
    expect(selectionPoints(lexical)).toEqual({
      anchor: { key: figure.getKey(), offset: 3, type: "element" },
      focus: { key: figure.getKey(), offset: 3, type: "element" },
    });
  });

  it("leaves a selection whose ends are both ordinary text exactly where it landed", async () => {
    const { lexical } = await mountStandardViewEditor(figureUsj);
    const dom = figureDom(lexical);
    const caption = lexical
      .getEditorState()
      .read(() => figureNode(lexical).getChildAtIndex(1)?.getKey());

    await dragSelect(dom.caption, 0, dom.caption, 3);

    // TEXT points on the caption itself, at the offsets handed in: a normalization that had run
    // here would have replaced them with element points beside the caption's decorator neighbours,
    // so the points ARE the assertion that nothing touched this selection.
    expect(selectionPoints(lexical)).toEqual({
      anchor: { key: caption, offset: 0, type: "text" },
      focus: { key: caption, offset: 3, type: "text" },
    });
    expect(await copiedText(lexical)).toBe(CAPTION);
  });

  it("leaves the browser's own DOM points untouched while the button is down", async () => {
    const { lexical } = await mountStandardViewEditor(figureUsj);
    const dom = figureDom(lexical);
    await pressPointer(lexical);

    await dragSelect(dom.opener, 2, dom.trailing, 3);

    // The asymmetry a drag depends on: Chromium extends one only from a base it placed itself, so
    // while the button is held the four DOM properties have to come back exactly as handed in even
    // though the editor state now holds the figure's leading boundary instead.
    expect(domSelectionPoints()).toEqual({
      anchorNode: dom.opener,
      anchorOffset: 2,
      focusNode: dom.trailing,
      focusOffset: 3,
    });
    expect(selectionPoints(lexical).anchor).toEqual({
      key: figureNode(lexical).getKey(),
      offset: 0,
      type: "element",
    });
  });

  it("materializes the boundary form into the DOM when the button comes up", async () => {
    const { lexical } = await mountStandardViewEditor(figureUsj);
    const dom = figureDom(lexical);
    await pressPointer(lexical);
    await dragSelect(dom.opener, 2, dom.trailing, 3);
    const snapped = selectionPoints(lexical);

    await releasePointer(lexical);

    // The release is the moment the raw interior points stop being needed and start being a hazard,
    // so the boundary the snap chose is written where the browser can be asked about it again. The
    // editor's own selection is the same one throughout — the release moves the DOM, not the state.
    expect(domSelectionPoints().anchorNode).toBe(dom.figure);
    expect(domSelectionPoints().anchorOffset).toBe(0);
    expect(selectionPoints(lexical)).toEqual(snapped);
  });

  it("writes the DOM straight away for an arrival with no button down", async () => {
    const { lexical } = await mountStandardViewEditor(figureUsj);
    const dom = figureDom(lexical);

    // No `pointerdown`: the shape of a keyboard extend (Shift+Arrow into the glyph) or a programmatic
    // move. Nothing is mid-drag, so there is no base to protect and the repair is materialized at
    // once rather than waiting for a release that will never come.
    await dragSelect(dom.opener, 2, dom.trailing, 3);

    expect(domSelectionPoints().anchorNode).toBe(dom.figure);
    expect(domSelectionPoints().anchorOffset).toBe(0);
  });

  it("survives an event-less update once the DOM holds the boundary form", async () => {
    const { lexical } = await mountStandardViewEditor(figureUsj);
    const dom = figureDom(lexical);
    await pressPointer(lexical);
    await dragSelect(dom.opener, 2, dom.trailing, 3);
    await releasePointer(lexical);
    const snapped = selectionPoints(lexical);

    // An update opened from no DOM event at all — a timer, a microtask, a React effect. Lexical
    // re-derives such an update's selection FROM THE DOM, so interior points left there would come
    // back unresolvable and the commit would clear the browser's range along with the selection.
    await act(async () => {
      lexical.update(() => {
        // Reads the document and changes nothing: what is under test is that an update opened and
        // committed at all, not anything it did.
        $getRoot().getChildrenSize();
      });
    });
    await flushQueuedEvents();

    expect(selectionPoints(lexical)).toEqual(snapped);
  });

  it("stops skipping the DOM write at the end of the snap's own commit", async () => {
    const { lexical } = await mountStandardViewEditor(figureUsj);
    const dom = figureDom(lexical);
    const captionKey = lexical
      .getEditorState()
      .read(() => figureNode(lexical).getChildAtIndex(1)?.getKey());
    await pressPointer(lexical);

    await dragSelect(dom.opener, 2, dom.trailing, 3);

    // An ordinary later update, of the kind any plugin makes, while the button is still down. The
    // snap holds the reconciler's DOM-selection pass back for its OWN commit only, so this one must
    // reach the browser normally — otherwise every programmatic caret move during a drag would leave
    // the caret visibly behind.
    await act(async () => {
      lexical.update(() => {
        const caption = captionKey ? $getNodeByKey(captionKey) : undefined;
        if (!$isTextNode(caption)) throw new Error("the caption is not a text node");
        caption.select(1, 1);
      });
    });
    await flushQueuedEvents();

    expect(domSelectionPoints()).toEqual({
      anchorNode: dom.caption,
      anchorOffset: 1,
      focusNode: dom.caption,
      focusOffset: 1,
    });
  });
});
