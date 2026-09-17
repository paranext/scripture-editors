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

import { copyEvent } from "./markerEdit.test-helpers";
import { flushQueuedEvents } from "../editor-test.utils";
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $getSelection,
  $isRangeSelection,
  COPY_COMMAND,
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

/** The `text/plain` bytes a Ctrl+C would put on the clipboard right now — `""` when the copy wrote
 * nothing, which is what an unresolved selection produces. */
async function copiedText(editor: LexicalEditor): Promise<string> {
  const { event, getData } = copyEvent();
  await act(async () => {
    editor.dispatchCommand(COPY_COMMAND, event);
  });
  return getData("text/plain");
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
});
