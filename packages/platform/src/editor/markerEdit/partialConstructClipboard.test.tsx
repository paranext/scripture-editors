/**
 * A copy whose selection stops PARTWAY THROUGH an opaque construct must put the selected bytes on
 * the clipboard and nothing more — in every flavor it writes.
 *
 * The hazard is specific to the internal `application/x-lexical-editor` flavor and comes from two
 * rules meeting. `createUnknown` (`usj-editor.adaptor.ts`) stamps `mode: "token"` on a construct's
 * text children, and `$sliceSelectedTextNodeContent` (`@lexical/selection`) refuses to slice a
 * token-mode TextNode — it carries the node whole or not at all. `UnknownNode.isSelected` then
 * answers true for the wrapper as soon as ONE child is in the selection, so a caption selected from
 * its third character to its seventh serializes as a COMPLETE construct: the wrapper, every
 * attribute on it, and the caption's full text. `text/plain` and `text/html`, which walk the same
 * `getNodes()` list character by character ({@link $selectionToUsfmText}), carry exactly the four
 * characters the user highlighted. Pasting the internal flavor therefore reproduces a whole second
 * figure where the user asked for four letters — bytes and attributes they never selected, saved
 * to the file without a word.
 *
 * So the rule is: the internal flavor exists to carry a construct WHOLE, and a selection that cuts
 * through one cannot be carried whole. When either END of the selection lies inside an opaque
 * construct ({@link $selectionReachesIntoOpaqueBlock}), the copy writes the two text flavors only —
 * they are exactly the selected bytes, and Tier 2 re-tokenizes them back into whatever construct
 * those bytes actually spell. A selection whose ends are both OUTSIDE still ships the internal
 * flavor, because there the construct is covered whole and the fast path rebuilds it exactly
 * (`unknownClipboardFidelity.test.tsx` sweeps that case across every kind).
 *
 * Which paste paths this reaches matters for reading these pins. The keyboard Ctrl+V and the
 * context-menu Paste both go through `pasteSelection` (`clipboard.utils.ts`, shared-react), which
 * rebuilds a `DataTransfer` from `navigator.clipboard.read()` — an API that exposes only sanctioned
 * MIME types, so the private flavor is never in it and those pastes always take the text path. The
 * internal flavor reaches a paste only through a NATIVE paste event (an OS/Electron Edit-menu
 * "Paste", a browser-delivered `paste`) or a programmatic `PASTE_COMMAND` carrying one. That is why
 * the over-carry is invisible in ordinary app use and why it still has to be fixed at the COPY:
 * which paste path a host happens to use is not something this editor controls.
 *
 * These pins mount the real `Editor` (via `mountStandardViewEditor`) so the plugin stack that takes
 * part in a paste is in the picture, and read the document back as USJ — what a save persists — so
 * an over-carry cannot hide behind a screen that looks right.
 */

import { pasteEvent } from "./markerEdit.test-helpers";
import { flushQueuedEvents } from "../editor-test.utils";
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createPoint,
  $createRangeSelection,
  $getRoot,
  $isElementNode,
  $isTextNode,
  $setSelection,
  LexicalEditor,
  LexicalNode,
  PASTE_COMMAND,
  PointType,
  TextNode,
} from "lexical";
import { NBSP } from "shared";

// jsdom implements neither `ClipboardEvent` nor `DragEvent`; Lexical's own rich-paste fallback —
// the path a lexical-flavor payload takes once the Standard-view handler declines — duck-types
// against both (`objectKlassEquals`). Same stub as the sibling clipboard suites.
const globalStubs: { DragEvent?: unknown; ClipboardEvent?: unknown } = globalThis;
if (typeof globalStubs.DragEvent === "undefined")
  globalStubs.DragEvent = class DragEvent extends Event {};
if (typeof globalStubs.ClipboardEvent === "undefined")
  globalStubs.ClipboardEvent = class ClipboardEvent extends Event {};

const PLAIN = "text/plain";
const HTML = "text/html";
const LEXICAL = "application/x-lexical-editor";

interface Payload {
  [mimeType: string]: string;
}

const CAPTION = "caption text";
/** `CAPTION.slice(2, 6)` — a span with the caption's own bytes on both sides of it, so a carrier
 * that over-reaches in either direction shows up. */
const PARTIAL_CAPTION = "ptio";

/** The figure the fixture carries, as a save writes it: `src` stored under USX/USJ's `file`. */
const figureObject: MarkerObject = {
  type: "figure",
  marker: "fig",
  file: "a.jpg",
  size: "col",
  content: [CAPTION],
} as unknown as MarkerObject;

/**
 * `\p one \fig caption text|src="a.jpg" size="col"\fig* two` followed by a second paragraph.
 *
 * The prose on both sides of the figure is what lets a selection start or end outside it as well as
 * inside, and the second paragraph is both a paste target away from the figure and somewhere for the
 * caret to depart to (a pasted literal settles only once the caret leaves the paragraph it landed
 * in).
 */
function documentUsj(
  firstParaContent: MarkerObject["content"] = ["one ", figureObject, " two"],
  secondParaContent: MarkerObject["content"] = ["depart here"],
): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
      { type: "chapter", marker: "c", number: "1" },
      { type: "para", marker: "p", content: firstParaContent },
      { type: "para", marker: "p", content: secondParaContent },
    ],
  } as unknown as Usj;
}

/** Every object of `type` anywhere in `usj`, at any depth. */
function objectsOfType(usj: Usj, type: string): MarkerObject[] {
  const found: MarkerObject[] = [];
  const walk = (items: MarkerObject["content"]) =>
    items?.forEach((item) => {
      if (typeof item === "string") return;
      if (item.type === type) found.push(item);
      walk(item.content);
    });
  walk(usj.content);
  return found;
}

/** Every TextNode in the tree, depth-first. */
function $allTextNodes(): TextNode[] {
  const found: TextNode[] = [];
  const walk = (node: LexicalNode) => {
    if ($isTextNode(node)) found.push(node);
    if ($isElementNode(node)) node.getChildren().forEach(walk);
  };
  $getRoot().getChildren().forEach(walk);
  return found;
}

/** The TextNode DISPLAYING `text` — matched with display-NBSP read back as the plain space it
 * stands in for, so a fixture can be named in the bytes a reader recognizes. */
function $textNodeShowing(text: string): TextNode {
  const found = $allTextNodes().find(
    (node) => node.getTextContent().replaceAll(NBSP, " ") === text,
  );
  if (!found) throw new Error(`no text node displaying ${JSON.stringify(text)}`);
  return found;
}

/** A selection end: an offset into the TextNode displaying `text`. */
interface End {
  text: string;
  offset: number;
}

/** Selects from `anchor` to `focus` and lets the DOM write settle, so the copy below reads the same
 * selection the browser would hand it back. */
async function select(editor: LexicalEditor, anchor: End, focus: End): Promise<void> {
  const $point = ({ text, offset }: End): PointType =>
    $createPoint($textNodeShowing(text).getKey(), offset, "text");
  await act(async () =>
    editor.update(() => {
      const selection = $createRangeSelection();
      selection.anchor = $point(anchor);
      selection.focus = $point(focus);
      $setSelection(selection);
    }),
  );
  await flushQueuedEvents();
}

/**
 * Every flavor a Ctrl+C writes for the current selection, harvested from a real `copy` event
 * dispatched on the editor root — the way the browser reaches `COPY_COMMAND`. A flavor the copy did
 * not write reads back as `""`, which is how these pins state "this flavor is absent".
 */
async function copyPayload(editor: LexicalEditor): Promise<Payload> {
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
  return {
    [PLAIN]: store.get(PLAIN) ?? "",
    [HTML]: store.get(HTML) ?? "",
    [LEXICAL]: store.get(LEXICAL) ?? "",
  };
}

async function settle(): Promise<void> {
  await act(async () => {
    await Promise.resolve();
    await Promise.resolve();
  });
}

/**
 * Pastes `payload` into a fresh copy of the fixture, with the caret at the end of the TextNode
 * displaying `at`, and returns the USJ a host would save.
 *
 * Dispatching `PASTE_COMMAND` (rather than calling the Standard-view handler) is what lets a payload
 * carrying the internal flavor reach Lexical's own rich-paste fallback once that handler declines —
 * the shape a native paste event has.
 */
async function pasteInto(payload: Payload, at: string): Promise<Usj> {
  const { ref, lexical } = await mountStandardViewEditor(documentUsj());
  await act(async () =>
    lexical.update(() => {
      const host = $textNodeShowing(at);
      host.select(host.getTextContentSize(), host.getTextContentSize());
      lexical.dispatchCommand(PASTE_COMMAND, pasteEvent(payload).event);
    }),
  );
  await settle();
  // A pasted literal that pends (a marker completed under the caret) settles only once the caret
  // DEPARTS the paragraph it landed in.
  await act(async () =>
    lexical.update(() => {
      $getRoot().getFirstChild()?.selectEnd();
    }),
  );
  await settle();
  const usj = ref.current?.getUsj();
  if (!usj) throw new Error("the editor produced no USJ");
  return usj;
}

/** `payload` with the internal flavor dropped — the shape `navigator.clipboard.read()` hands back,
 * and so the shape every Ctrl+V and context-menu Paste in the app actually pastes. */
function asyncClipboardShape(payload: Payload): Payload {
  return { [PLAIN]: payload[PLAIN], [HTML]: payload[HTML] };
}

/** The payload a copy of the given selection writes, from a fresh mount of the fixture. */
async function copyOf(anchor: End, focus: End): Promise<Payload> {
  const { lexical } = await mountStandardViewEditor(documentUsj());
  await select(lexical, anchor, focus);
  return copyPayload(lexical);
}

describe("a copy that stops partway through a construct's caption", () => {
  const anchor: End = { text: CAPTION, offset: 2 };
  const focus: End = { text: CAPTION, offset: 6 };

  it("writes the selected bytes as text, and writes no internal flavor at all", async () => {
    const payload = await copyOf(anchor, focus);

    expect(payload[PLAIN]).toBe(PARTIAL_CAPTION);
    expect(payload[HTML]).toContain(PARTIAL_CAPTION);
    expect(payload[HTML]).not.toContain(CAPTION);
    // The whole point: there is no third flavor for this selection. Carrying one would mean
    // carrying the figure — wrapper, `file`, `size`, and the caption's full text — because none of
    // those three can be sliced down to the four selected characters.
    expect(payload[LEXICAL]).toBe("");
  });

  it("pastes back as exactly those bytes through a NATIVE paste event, adding no second figure", async () => {
    const payload = await copyOf(anchor, focus);

    const pasted = await pasteInto(payload, " two");

    expect(pasted).toEqual(documentUsj(["one ", figureObject, ` two${PARTIAL_CAPTION}`]));
    expect(objectsOfType(pasted, "figure")).toEqual([figureObject]);
  });

  it("pastes back as exactly those bytes through the async clipboard shape a Ctrl+V delivers", async () => {
    const payload = await copyOf(anchor, focus);

    const pasted = await pasteInto(asyncClipboardShape(payload), " two");

    // The path every keyboard and context-menu paste in the app takes, and the reason the
    // over-carry never showed up in hand testing: `navigator.clipboard.read()` exposes no private
    // MIME type, so this shape is all a real Ctrl+V ever sees.
    expect(pasted).toEqual(documentUsj(["one ", figureObject, ` two${PARTIAL_CAPTION}`]));
  });
});

describe("a copy that starts in the prose before a construct and stops partway through its caption", () => {
  const anchor: End = { text: "one ", offset: 1 };
  const focus: End = { text: CAPTION, offset: 6 };

  it("writes the selected bytes as text, and writes no internal flavor at all", async () => {
    const payload = await copyOf(anchor, focus);

    // The opening glyph is inside the selection and the caption is cut six characters in, so the
    // bytes spell an UNCLOSED `\fig` — which is what the user selected.
    expect(payload[PLAIN]).toBe("ne \\fig captio");
    expect(payload[LEXICAL]).toBe("");
  });

  it("pastes back as the bytes it carried, inventing neither the rest of the caption nor the figure's attributes", async () => {
    const payload = await copyOf(anchor, focus);

    const pasted = await pasteInto(payload, "depart here");

    // An unclosed `\fig` re-tokenizes as a char span, not a figure: the construct's `file`/`size`
    // attributes and the six unselected caption characters are absent because the selection never
    // covered the bytes that carry them.
    expect(pasted).toEqual(
      documentUsj(undefined, [
        "depart herene ",
        { type: "char", marker: "fig", closed: "false", content: ["captio"] } as MarkerObject,
      ]),
    );
    expect(objectsOfType(pasted, "figure")).toEqual([figureObject]);
    // Identical to the async-clipboard shape, which is the standing property: for a cut-through
    // selection there is only one carrier, so there is only one possible paste result.
    expect(await pasteInto(asyncClipboardShape(payload), "depart here")).toEqual(pasted);
  });
});

describe("a copy whose ends are both OUTSIDE the construct", () => {
  const anchor: End = { text: "one ", offset: 0 };
  const focus: End = { text: " two", offset: " two".length };

  it("still writes the internal flavor, carrying the construct whole", async () => {
    const payload = await copyOf(anchor, focus);

    expect(payload[PLAIN]).toBe(`one \\fig ${CAPTION}|src="a.jpg" size="col"\\fig* two`);
    expect(payload[LEXICAL]).toContain('"figure"');
    expect(payload[LEXICAL]).toContain(CAPTION);
    expect(payload[LEXICAL]).toContain('"file":"a.jpg"');
  });

  it("reproduces the figure intact through a native paste event — caption and attributes included", async () => {
    const payload = await copyOf(anchor, focus);

    const pasted = await pasteInto(payload, "depart here");

    expect(pasted).toEqual(documentUsj(undefined, ["depart hereone ", figureObject, " two"]));
    expect(objectsOfType(pasted, "figure")).toEqual([figureObject, figureObject]);
  });
});
