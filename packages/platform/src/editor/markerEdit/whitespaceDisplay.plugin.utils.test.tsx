import { MarkerEditPlugin } from "./MarkerEditPlugin";
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import {
  copyEvent,
  execCommandSpy,
  findOnlyNote,
  pasteEvent,
  serializedState,
  testEnvironment,
  testEnvironmentWithDisplaySyncs,
  viewOptions,
} from "./markerEdit.test-helpers";
import {
  $getStandardViewClipboardData,
  $handleCopyForStandardView,
  $handlePasteForStandardView,
  getPastePayload,
  htmlPasteText,
  normalizePastedNbsp,
  stripPastedChapterAndBookId,
  usfmToClipboardHtml,
} from "./whitespaceDisplay.plugin.utils";
import { displayTextToUsj } from "./whitespaceDisplay.utils";
import { act } from "@testing-library/react";
import { LexicalClipboardData } from "@lexical/clipboard";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { baseTestEnvironment } from "../../../../../libs/shared-react/src/plugins/usj/react-test.utils";
import { Usj, usxStringToUsj } from "@eten-tech-foundation/scripture-utilities";
import { $dfs, mergeRegister } from "@lexical/utils";
import {
  $createNodeSelection,
  $createPoint,
  $createRangeSelection,
  $createTextNode,
  $getRoot,
  $isTextNode,
  $setSelection,
  $setState,
  COMMAND_PRIORITY_NORMAL,
  COPY_COMMAND,
  CUT_COMMAND,
  LexicalEditor,
  PASTE_COMMAND,
  TextNode,
} from "lexical";
import {
  $createCharNode,
  $createImmutableTypedTextNode,
  $createMarkerNode,
  $createParaNode,
  $isCharNode,
  $isMarkerNode,
  $isParaNode,
  $isSomeChapterNode,
  $isUnknownNode,
  NBSP,
  NoteNode,
  ParaNode,
  textTypeState,
} from "shared";
import { StructureKeyboardPlugin } from "shared-react";

/**
 * Null-event leg: ClipboardPlugin/ContextMenuPlugin/EditorRef dispatch COPY_COMMAND/
 * CUT_COMMAND with a `null` payload. `@lexical/clipboard`'s `copyToClipboard` is mocked so the
 * jsdom `execCommand`/synthetic-event dance (unimplemented in jsdom — verified: `execCommand` is
 * `undefined` and `instanceof ClipboardEvent` throws) never has to run; instead we assert the
 * handler calls through with the exact normalized payload. `$getLexicalContent` (also from this
 * module) stays real via the `importOriginal` spread, so the payload-builder unit tests below
 * exercise genuine Lexical-JSON generation.
 */
// Typed explicitly against the real `copyToClipboard` signature: an untyped `vi.fn(async () =>
// true)` infers a zero-arg mock, which narrows `.mock.calls[0]` to the empty tuple `[]` and
// breaks the positional destructuring below (TS2493) even though the mock is genuinely called
// with three arguments at runtime.
const copyToClipboardSpy = vi.hoisted(() =>
  vi.fn<
    (
      editor: LexicalEditor,
      event: null | ClipboardEvent,
      data?: LexicalClipboardData,
    ) => Promise<boolean>
  >(async () => true),
);
vi.mock("@lexical/clipboard", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@lexical/clipboard")>();
  return { ...actual, copyToClipboard: copyToClipboardSpy };
});

/**
 * Builds `<p>` + a marker-trailing-space NBSP + `text` as siblings. The trailing-space node's
 * `textType` state (matching the real adaptor's `createText(NBSP, "marker-trailing-space")`)
 * is required here for more than skip-list realism: without it, Lexical's built-in adjacent
 * simple-TextNode normalization would silently merge it into `text` on the very first commit,
 * leaving the `text` reference captured below pointing at a removed node.
 */
function $appendMarkerAndText(text: TextNode): void {
  const spaceNode = $createTextNode(NBSP);
  $setState(spaceNode, textTypeState, "marker-trailing-space");
  $getRoot().append($createParaNode("p").append($createMarkerNode("p"), spaceNode, text));
}

describe("typing invariant", () => {
  it("converts a typed double space to display-NBSP", async () => {
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      text = $createTextNode("a b");
      $appendMarkerAndText(text);
    });
    await act(async () => editor.update(() => text.setTextContent("a  b")));
    editor.getEditorState().read(() => expect(text.getTextContent()).toBe(`a${NBSP}${NBSP}b`));
  });

  it("leaves single spaces alone", async () => {
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      text = $createTextNode("a b c");
      $appendMarkerAndText(text);
    });
    await act(async () => editor.update(() => text.setTextContent("a b c d")));
    editor.getEditorState().read(() => expect(text.getTextContent()).toBe("a b c d"));
  });

  it("preserves text length (no caret adjustment needed)", async () => {
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      text = $createTextNode("a b");
      $appendMarkerAndText(text);
    });
    await act(async () => editor.update(() => text.setTextContent("a   b")));
    editor.getEditorState().read(() => expect(text.getTextContent().length).toBe(5));
  });

  // A char span's text children carry a STRUCTURAL leading NBSP (the glyph separator glued on by
  // the adaptor/materializer). It must not act as left context for the run mapping: a genuine
  // content-leading single space stays plain in the clean-loaded shape, and mapping it here made
  // edited (dirty) nodes emit different collab ops than clean-loaded ones for identical content.
  it("keeps a char span's content-leading space plain after the structural NBSP prefix", async () => {
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      text = $createTextNode(`${NBSP} Bx`);
      // Complete span (opening + closing glyphs) — a closer-less span would trigger the
      // missing-closer Tier-2 rebuild and replace the captured node reference.
      const span = $createCharNode("nd").append(
        $createMarkerNode("nd", "opening"),
        text,
        $createMarkerNode("nd", "closing"),
      );
      const sep = $createTextNode(NBSP);
      $setState(sep, textTypeState, "marker-trailing-space");
      $getRoot().append($createParaNode("p").append($createMarkerNode("p"), sep, span));
    });
    await act(async () => editor.update(() => text.setTextContent(`${NBSP} B`)));
    editor.getEditorState().read(() => expect(text.getTextContent()).toBe(`${NBSP} B`));
  });

  it("still maps space runs INSIDE char span content beyond the structural prefix", async () => {
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      text = $createTextNode(`${NBSP}a b`);
      const span = $createCharNode("nd").append(
        $createMarkerNode("nd", "opening"),
        text,
        $createMarkerNode("nd", "closing"),
      );
      const sep = $createTextNode(NBSP);
      $setState(sep, textTypeState, "marker-trailing-space");
      $getRoot().append($createParaNode("p").append($createMarkerNode("p"), sep, span));
    });
    await act(async () => editor.update(() => text.setTextContent(`${NBSP}a  b`)));
    editor
      .getEditorState()
      .read(() => expect(text.getTextContent()).toBe(`${NBSP}a${NBSP}${NBSP}b`));
  });
});

describe("clipboard normalization", () => {
  it("copies display-NBSP as plain spaces in text/plain via the real-event branch (not copyToClipboard)", async () => {
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      text = $createTextNode(`a${NBSP}${NBSP}b and 3~000`);
      $appendMarkerAndText(text);
    });
    // Selection set inside the initial-state builder doesn't survive mount (RichTextPlugin
    // resets it once the root element attaches) — set it in a separate post-mount update,
    // matching this suite's `updateSelection` precedent.
    await act(async () => editor.update(() => text.select(0, text.getTextContentSize())));
    const { event, getData } = copyEvent();
    copyToClipboardSpy.mockClear();
    await act(async () => {
      editor.dispatchCommand(COPY_COMMAND, event);
    });
    expect(getData("text/plain")).toBe("a  b and 3~000"); // NBSP→space; ~ stays (PT9 shows/copies ~)
    // The real (event-carrying) branch writes directly via clipboardData.setData; it must NOT
    // route through the null-event copyToClipboard path (which mock would otherwise mask).
    expect(copyToClipboardSpy).not.toHaveBeenCalled();
  });

  it("cuts via the real-event branch: payload written through clipboardData.setData, selected text removed", async () => {
    // Same partial-interior selection as the null-event cut test: cutting a TextNode's ENTIRE
    // content leaves it empty and Lexical garbage-collects empty text nodes on commit, killing
    // the captured reference — a partial cut asserts real removal via the surviving node.
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      text = $createTextNode(`a${NBSP}${NBSP}b`);
      $appendMarkerAndText(text);
    });
    await act(async () => editor.update(() => text.select(1, 3)));
    const { event, getData } = copyEvent();
    copyToClipboardSpy.mockClear();
    let handled: boolean | undefined;
    await act(async () => {
      handled = editor.dispatchCommand(CUT_COMMAND, event);
    });
    expect(handled).toBe(true);
    // The two display-NBSPs invert to plain spaces in the written payload — a cut that skipped
    // the normalization (or wrote nothing) would fail here.
    expect(getData("text/plain")).toBe("  ");
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
    // The real-event branch writes directly; routing a live event into copyToClipboard would
    // re-enter execCommand mid-dispatch (the exact hazard the branch split exists for).
    expect(copyToClipboardSpy).not.toHaveBeenCalled();
    // isCut removed exactly the selected text — a copy-shaped regression would leave it intact.
    editor.getEditorState().read(() => expect(text.getTextContent()).toBe("ab"));
  });
});

/** A paragraph with a figure between two plain-text runs. */
const FIGURE_USX =
  `<usx version="3.0"><book code="RUT" style="id" /><chapter number="1" style="c" />` +
  `<para style="p">Before <figure style="fig" file="cn01617.jpg" size="span" ref="1.18">caption</figure> after.</para></usx>`;

/**
 * Select from the start of the text BEFORE the figure to the end of the text AFTER it — the only
 * selection a user can make that reaches the block at all, since the block itself is
 * `contentEditable=false` and its glyph children are not keyboard-selectable.
 *
 * Mutating: call inside `editor.update()`.
 */
function $selectAcrossFigure(): void {
  const textNodes = $dfs($getRoot())
    .map(({ node }) => node)
    .filter($isTextNode);
  const before = textNodes.find((node) => node.getTextContent() === "Before ");
  const after = textNodes.find((node) => node.getTextContent() === " after.");
  if (!before || !after) throw new Error("Expected surrounding text nodes to exist");
  const selection = $createRangeSelection();
  selection.anchor = $createPoint(before.getKey(), 0, "text");
  selection.focus = $createPoint(after.getKey(), after.getTextContentSize(), "text");
  $setSelection(selection);
}

/**
 * Selects the figure and nothing else, as the two element points on its parent paragraph that sit
 * either side of it.
 *
 * That is ASSUMED to be what a browser resolves a real drag or click over a
 * `contentEditable=false` block into, on the reasoning that it will not put a selection
 * endpoint inside one — but jsdom cannot observe DOM-range → Lexical selection resolution, so
 * the assumption is untested here and the pin below states only what the copy walker does with
 * such a selection once it exists.
 *
 * Mutating: call inside `editor.update()`.
 */
function $selectOnlyTheFigure(): void {
  const para = $getRoot()
    .getChildren()
    .find((node) => $isParaNode(node));
  if (!para) throw new Error("Expected the loaded document to have a paragraph");
  const figureIndex = para.getChildren().findIndex((child) => $isUnknownNode(child));
  if (figureIndex < 0) throw new Error("Expected the paragraph to contain the figure");
  const selection = $createRangeSelection();
  selection.anchor = $createPoint(para.getKey(), figureIndex, "element");
  selection.focus = $createPoint(para.getKey(), figureIndex + 1, "element");
  $setSelection(selection);
}

async function copyEnvironmentWithFigure() {
  return baseTestEnvironment(
    serializedState(usxStringToUsj(FIGURE_USX)),
    <MarkerEditPlugin viewOptions={viewOptions} />,
  );
}

async function copyFigureWith($select: () => void) {
  const { editor } = await copyEnvironmentWithFigure();
  await act(async () => editor.update($select));
  const { event, getData } = copyEvent();
  await act(async () => {
    editor.dispatchCommand(COPY_COMMAND, event);
  });
  return getData;
}

async function copyAcrossFigure() {
  return copyFigureWith($selectAcrossFigure);
}

describe("copy across an UnknownNode (figure) — full USFM byte display", () => {
  it("copies the figure's exact USFM: opening marker, caption, then attributes and closer", async () => {
    const getData = await copyAcrossFigure();

    // The whole span, marker glyphs included: the figure's ImmutableTypedTextNode display
    // children (opening marker before the caption; attributes folded into the closing after it,
    // matching USFM 3.0's caption-first figure syntax) are real Lexical text to a range
    // selection, so the copy carries the figure's complete, valid USFM — not just its caption.
    expect(getData("text/plain")).toBe(
      'Before \\fig caption|src="cn01617.jpg" size="span" ref="1.18"\\fig* after.',
    );
  });

  it("keeps the block's bytes in BOTH the Lexical payload and text/html", async () => {
    const getData = await copyAcrossFigure();

    // The internal payload keeps the block whole, so a paste back into this editor is lossless.
    // (JSON-escaped, hence the doubled backslash.)
    expect(getData("application/x-lexical-editor")).toContain("\\\\fig ");

    // So does text/html, because it renders the copy walker's own USFM rather than Lexical's DOM
    // export. `UnknownNode.exportDOM` returns a null element for every kind, and Lexical's HTML
    // exporter reads that as "drop this subtree" BEFORE it recurses into children — so an export-
    // derived html reached a rich-text paste target with neither the marker name nor the block's
    // own content in it. Rendering the text carrier's bytes instead is what makes a read-only
    // block copyable to an html consumer at all.
    const html = getData("text/html");
    expect(htmlPasteText(html)).toBe(getData("text/plain"));
    expect(htmlPasteText(html)).toBe(
      'Before \\fig caption|src="cn01617.jpg" size="span" ref="1.18"\\fig* after.',
    );
  });

  it("copies the figure's own bytes when the selection covers the figure alone", async () => {
    const getData = await copyFigureWith($selectOnlyTheFigure);

    // The answer to "how does a user copy a read-only construct's marker text": by selecting the
    // construct, from outside it. Its glyphs cannot take a caret or a keyboard selection of their
    // own, but a selection that CONTAINS the block reaches every one of them through the same
    // walker the surrounding prose goes through, so the copied bytes are the figure's real USFM
    // with nothing of the neighbouring paragraph attached.
    expect(getData("text/plain")).toBe(
      '\\fig caption|src="cn01617.jpg" size="span" ref="1.18"\\fig*',
    );
  });
});

describe("$getStandardViewClipboardData", () => {
  it("returns undefined for a collapsed selection", async () => {
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      text = $createTextNode(`a${NBSP}b`);
      $appendMarkerAndText(text);
    });
    await act(async () => editor.update(() => text.select(1, 1)));
    let data: LexicalClipboardData | undefined;
    await act(async () => editor.update(() => (data = $getStandardViewClipboardData(editor))));
    expect(data).toBeUndefined();
  });

  it("builds a normalized text/plain payload (NBSP→space), the same bytes as html, plus lexical for a range selection", async () => {
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      text = $createTextNode(`a${NBSP}${NBSP}b`);
      $appendMarkerAndText(text);
    });
    await act(async () => editor.update(() => text.select(0, text.getTextContentSize())));
    let data: LexicalClipboardData | undefined;
    await act(async () => editor.update(() => (data = $getStandardViewClipboardData(editor))));
    // text/plain inverts every display-NBSP back to a plain space, and text/html carries those same
    // inverted bytes (see the dedicated describe below). The lexical payload keeps the on-screen
    // NBSPs so a paste back into a Standard-view editor round-trips exactly.
    expect(data?.["text/plain"]).toBe("a  b");
    expect(data?.["text/html"]).toBe(usfmToClipboardHtml("a  b"));
    expect(data?.["text/html"]).not.toContain("&nbsp;");
    // the lexical clipboard JSON is a single TextNode whose content still holds the NBSPs.
    const lexical = JSON.parse(data?.["application/x-lexical-editor"] ?? "{}");
    expect(lexical.nodes).toHaveLength(1);
    expect(lexical.nodes[0]).toMatchObject({ type: "text", text: `a${NBSP}${NBSP}b` });
  });
});

describe("text/html flavor — the same USFM bytes as text/plain", () => {
  /**
   * Selects from the start of `from` to the end of `to`.
   *
   * Mutating: call inside `editor.update()`.
   */
  function $selectSpan(from: TextNode, to: TextNode): void {
    const selection = from.select(0, 0);
    selection.focus.set(to.getKey(), to.getTextContentSize(), "text");
  }

  /** Copies the selection through the real `COPY_COMMAND` path and hands back both readable
   * flavors, plus the text an html consumer decodes out of the html one. */
  async function copiedFlavors(
    editor: LexicalEditor,
  ): Promise<{ plain: string; html: string; htmlText: string }> {
    const { event, getData } = copyEvent();
    await act(async () => {
      editor.dispatchCommand(COPY_COMMAND, event);
    });
    const html = getData("text/html");
    return { plain: getData("text/plain"), html, htmlText: htmlPasteText(html) };
  }

  it("ships a marker glyph and its separator space as html text, with no NBSP anywhere", async () => {
    let marker: TextNode;
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      marker = $createMarkerNode("p");
      const sep = $createTextNode(NBSP);
      $setState(sep, textTypeState, "marker-trailing-space");
      text = $createTextNode("a b c");
      $getRoot().append($createParaNode("p").append(marker, sep, text));
    });
    await act(async () => editor.update(() => $selectSpan(marker, text)));
    const { plain, html, htmlText } = await copiedFlavors(editor);
    expect(plain).toBe("\\p a b c");
    // The html carries the plain carrier's bytes verbatim: every display-NBSP is already inverted
    // to the plain space it stands for before the html is built, so nothing non-breaking reaches a
    // rich consumer and the two flavors cannot disagree.
    expect(html).not.toContain("&nbsp;");
    expect(html).not.toContain(NBSP);
    expect(htmlText).toBe(plain);
  });

  it("keeps a genuine data NBSP's `~` byte form in both flavors", async () => {
    // In Standard view a data NBSP never appears as an NBSP character: it displays as the
    // literal `~` (the USFM byte form PT9 also shows and copies), so BOTH flavors carry `~` —
    // not an NBSP. Every NBSP character in the display is a display artifact standing for a
    // plain space.
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      text = $createTextNode("pay 3~000 now");
      $appendMarkerAndText(text);
    });
    await act(async () => editor.update(() => text.select(0, text.getTextContentSize())));
    const { plain, html, htmlText } = await copiedFlavors(editor);
    expect(plain).toBe("pay 3~000 now");
    expect(html).toContain("3~000");
    expect(html).not.toContain("&nbsp;");
    expect(html).not.toContain(NBSP);
    expect(htmlText).toBe(plain);
  });

  it("survives a run of spaces and a fragment-edge space through the html carrier", async () => {
    // The two shapes an html consumer normally destroys: it collapses a run of spaces and drops
    // whitespace at a fragment's edge. `white-space: pre-wrap` on the emitted span is what keeps
    // both, so the run and the edge space are still there when the html is read back as text —
    // without either flavor having to carry an NBSP the other one does not.
    let sep: TextNode;
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      sep = $createTextNode(NBSP);
      $setState(sep, textTypeState, "marker-trailing-space");
      text = $createTextNode(`a${NBSP}${NBSP}${NBSP}b`);
      $getRoot().append($createParaNode("p").append($createMarkerNode("p"), sep, text));
    });
    await act(async () => editor.update(() => $selectSpan(sep, text)));
    const { plain, html, htmlText } = await copiedFlavors(editor);
    expect(plain).toBe(" a   b");
    expect(html).toContain("white-space: pre-wrap");
    expect(htmlText).toBe(plain);
  });

  it("both flavors decode to the same document text across glyphs, runs, `~`, and a char span", async () => {
    let marker: TextNode;
    let spanText: TextNode;
    const { editor } = await testEnvironment(() => {
      marker = $createMarkerNode("p");
      const sep = $createTextNode(NBSP);
      $setState(sep, textTypeState, "marker-trailing-space");
      const text = $createTextNode(`before${NBSP}${NBSP}mid 3~000 x`);
      spanText = $createTextNode(`${NBSP}deep waters`);
      $getRoot().append(
        $createParaNode("p").append(
          marker,
          sep,
          text,
          $createCharNode("nd").append(
            $createMarkerNode("nd", "opening"),
            spanText,
            $createMarkerNode("nd", "closing"),
          ),
        ),
      );
    });
    await act(async () => editor.update(() => $selectSpan(marker, spanText)));
    const { plain, htmlText } = await copiedFlavors(editor);
    expect(plain).toBe("\\p before  mid 3~000 x\\nd deep waters");
    // One selection, one document: the display→data inversion (display-NBSP → space, `~` →
    // data NBSP) must read both flavors as the same text, or the paste target's flavor choice
    // would change the content.
    expect(displayTextToUsj(htmlText)).toBe(displayTextToUsj(plain));
  });

  describe("usfmToClipboardHtml mechanics", () => {
    it("wraps one line in a pre-wrap span inside a block, so a re-import sees a paragraph of text", () => {
      expect(usfmToClipboardHtml("\\p one")).toBe(
        '<p><span style="white-space: pre-wrap;">\\p one</span></p>',
      );
    });

    it("emits one block per line, an empty line as a bare block", () => {
      expect(usfmToClipboardHtml("a\n\nb")).toBe(
        '<p><span style="white-space: pre-wrap;">a</span></p><p></p>' +
          '<p><span style="white-space: pre-wrap;">b</span></p>',
      );
    });

    it("escapes `&`, `<` and `>` so the bytes survive as text rather than becoming markup", () => {
      const html = usfmToClipboardHtml("a & b < c > d");
      expect(html).toContain("a &amp; b &lt; c &gt; d");
      expect(htmlPasteText(html)).toBe("a & b < c > d");
    });

    it("does not carry a blank line through a re-decode: `text/plain` is the only flavor that keeps one", () => {
      // `htmlPasteText` collapses newline runs and trims the outer ones for every html source it
      // reads, so an interior or trailing blank line (an empty top-level paragraph in the selection)
      // survives only in `text/plain`. Pinned so the limit stays a known one.
      expect(htmlPasteText(usfmToClipboardHtml("a\n\nb"))).toBe("a\nb");
      expect(htmlPasteText(usfmToClipboardHtml("a\nb\n"))).toBe("a\nb");
    });
  });
});

describe("clipboard normalization — null-event leg (ClipboardPlugin/ContextMenuPlugin/EditorRef)", () => {
  it("COPY_COMMAND(null) writes the normalized payload via copyToClipboard(editor, null, data), selection intact", async () => {
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      text = $createTextNode(`a${NBSP}${NBSP}b`);
      $appendMarkerAndText(text);
    });
    await act(async () => editor.update(() => text.select(0, text.getTextContentSize())));
    copyToClipboardSpy.mockClear();
    let handled: boolean | undefined;
    await act(async () => {
      handled = editor.dispatchCommand(COPY_COMMAND, null);
    });
    expect(handled).toBe(true);
    expect(copyToClipboardSpy).toHaveBeenCalledTimes(1);
    const [calledEditor, calledEvent, calledData] = copyToClipboardSpy.mock.calls[0];
    expect(calledEditor).toBe(editor);
    expect(calledEvent).toBeNull();
    expect(calledData?.["text/plain"]).toBe("a  b");
    editor.getEditorState().read(() => expect(text.getTextContent()).toBe(`a${NBSP}${NBSP}b`)); // copy: unchanged
  });

  it("CUT_COMMAND(null) also removes the selected text after handing off to copyToClipboard", async () => {
    // Selects only the two interior NBSPs (leaving "a"/"b" behind) rather than the whole node:
    // cutting the *entire* content of a TextNode leaves it empty, and Lexical garbage-collects
    // empty text nodes on commit — the `text` reference would then point at a node no longer in
    // the committed state ("Lexical node does not exist in active editor state"). A partial cut
    // asserts real removal via the surviving node without hitting that GC edge case.
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      text = $createTextNode(`a${NBSP}${NBSP}b`);
      $appendMarkerAndText(text);
    });
    await act(async () => editor.update(() => text.select(1, 3)));
    copyToClipboardSpy.mockClear();
    let handled: boolean | undefined;
    await act(async () => {
      handled = editor.dispatchCommand(CUT_COMMAND, null);
    });
    expect(handled).toBe(true);
    expect(copyToClipboardSpy).toHaveBeenCalledTimes(1);
    const [, , calledData] = copyToClipboardSpy.mock.calls[0];
    expect(calledData?.["text/plain"]).toBe("  ");
    editor.getEditorState().read(() => expect(text.getTextContent()).toBe("ab"));
  });

  it("CUT_COMMAND(null) against a read-only editor copies but removes nothing", async () => {
    // `ClipboardPlugin`'s Ctrl+X listener dispatches CUT_COMMAND with no editability check of its
    // own, and it is bound to the root element in every view — so a read-only surface reaches this
    // handler with `isCut` set, and only the editor's own `isEditable` stands between the
    // keystroke and a removal the surface exists to prevent.
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      text = $createTextNode(`a${NBSP}${NBSP}b`);
      $appendMarkerAndText(text);
    });
    await act(async () => editor.update(() => text.select(1, 3)));
    await act(async () => editor.setEditable(false));
    copyToClipboardSpy.mockClear();
    let handled: boolean | undefined;
    await act(async () => {
      handled = editor.dispatchCommand(CUT_COMMAND, null);
    });
    expect(handled).toBe(true);
    expect(copyToClipboardSpy).toHaveBeenCalledTimes(1);
    expect(copyToClipboardSpy.mock.calls[0][2]?.["text/plain"]).toBe("  ");
    editor.getEditorState().read(() => expect(text.getTextContent()).toBe(`a${NBSP}${NBSP}b`));
  });

  it("declines an event-shaped payload whose clipboardData is null (no dispatch, no removal)", async () => {
    // A real ClipboardEvent can carry a null clipboardData (the DOM data store is only
    // guaranteed during dispatch of a trusted clipboard event). The pre-null-leg code declined
    // this case outright, and the spec requires the real-event branch to stay behaviorally
    // identical — it must NOT fall into the null-dispatch leg, which would re-enter
    // document.execCommand from inside an in-flight native copy and never preventDefault the
    // original event. Direct handler call for the same jsdom-fallback reason as below.
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      text = $createTextNode(`a${NBSP}${NBSP}b`);
      $appendMarkerAndText(text);
    });
    await act(async () => editor.update(() => text.select(1, 3)));
    copyToClipboardSpy.mockClear();
    const event = { clipboardData: null, preventDefault: vi.fn() } as unknown as ClipboardEvent;
    let handled: boolean | undefined;
    await act(async () =>
      editor.update(() => {
        handled = $handleCopyForStandardView(event, editor, true);
      }),
    );
    expect(handled).toBe(false);
    expect(copyToClipboardSpy).not.toHaveBeenCalled();
    expect(event.preventDefault).not.toHaveBeenCalled();
    editor.getEditorState().read(() => expect(text.getTextContent()).toBe(`a${NBSP}${NBSP}b`));
  });

  it("declines a real clipboard event at a collapsed caret, writing nothing and suppressing nothing", async () => {
    // A native copy event needs no help with an empty selection: the browser's own copy of an
    // empty DOM selection writes nothing, so declining — and NOT calling preventDefault — is what
    // leaves the clipboard exactly as the user left it.
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      text = $createTextNode(`a${NBSP}b`);
      $appendMarkerAndText(text);
    });
    await act(async () => editor.update(() => text.select(1, 1)));
    const { event, getData } = copyEvent();
    copyToClipboardSpy.mockClear();
    let handled: boolean | undefined;
    await act(async () =>
      editor.update(() => {
        handled = $handleCopyForStandardView(event, editor, false);
      }),
    );
    expect(handled).toBe(false);
    expect(getData("text/plain")).toBe("");
    expect(event.preventDefault).not.toHaveBeenCalled();
    expect(copyToClipboardSpy).not.toHaveBeenCalled();
  });
});

/**
 * A copy with nothing selected must leave the clipboard holding whatever it already held.
 *
 * These dispatch the real command rather than calling the handler directly, because what matters
 * is what happens when the handler DECLINES: the command carries on to `@lexical/rich-text`, which
 * asks `@lexical/clipboard` to synthesize the clipboard event a null-payload dispatch never had —
 * appending a hidden placeholder element to the editor, pointing the DOM selection at it, and
 * running `document.execCommand("copy")` to provoke a real event to fill in. With nothing
 * selected, that filling step bails before it can suppress the browser's own copy, so the browser
 * copies the placeholder and whatever the user had on the clipboard is gone. Without this guard,
 * trying to copy the marker text of a read-only construct puts a single stray character on the
 * clipboard; a plain collapsed caret anywhere in the view does the same, and so does cut.
 *
 * Two observables, because either alone can lie. `belowTheClaim` watches at a priority between this
 * handler's HIGH and rich-text's EDITOR: reached means the command was NOT claimed here, which is
 * the leak's first step and is immune to any module state. `document.execCommand` — which jsdom
 * does not implement, so `execCommandSpy` supplies it — is the clipboard outcome itself: called
 * means a write reached the browser. Note what is NOT asserted: the dispatch's own return value
 * says nothing (rich-text's handlers return `true` unconditionally, so a leaked copy still reports
 * "handled"), and `copyToClipboardSpy` says nothing either (`@lexical/rich-text` is externalized
 * and imports the REAL `@lexical/clipboard`, which this file's `vi.mock` cannot reach). The
 * placeholder's own content belongs to `@lexical/clipboard` and is not pinned here.
 */
describe("copying an empty selection leaves the clipboard alone", () => {
  const execCommand = execCommandSpy();

  /**
   * Watches for the dispatch reaching PAST the Standard-view claim, without consuming it — so a
   * regression runs the whole real chain and trips this AND the clipboard assertion, rather than
   * being masked by the watcher itself. NORMAL sits below the claim's HIGH and above rich-text's
   * EDITOR.
   */
  function watchBelowTheClaim(editor: LexicalEditor) {
    const reached = vi.fn(() => false);
    const unregister = mergeRegister(
      editor.registerCommand(COPY_COMMAND, reached, COMMAND_PRIORITY_NORMAL),
      editor.registerCommand(CUT_COMMAND, reached, COMMAND_PRIORITY_NORMAL),
    );
    return { reached, unregister };
  }

  afterEach(async () => {
    // `@lexical/clipboard` keeps a MODULE-level timer handle while it waits for the clipboard event
    // its `execCommand` call should provoke, and refuses to start another copy until that handle
    // clears. A test that reaches the real copy path therefore silences the `execCommand` assertion
    // in the NEXT test unless the window is drained here — which would make a regression fail only
    // the first of these pins. The window is `EVENT_LATENCY`, 50ms.
    await new Promise((resolve) => setTimeout(resolve, 60));
  });

  it("COPY_COMMAND(null) at a collapsed caret is claimed and writes nothing", async () => {
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      text = $createTextNode(`a${NBSP}b`);
      $appendMarkerAndText(text);
    });
    await act(async () => editor.update(() => text.select(1, 1)));
    const { reached, unregister } = watchBelowTheClaim(editor);
    await act(async () => {
      editor.dispatchCommand(COPY_COMMAND, null);
    });
    unregister();
    // Claimed here, so nothing downstream gets the chance to synthesize the copy this declined.
    expect(reached).not.toHaveBeenCalled();
    expect(execCommand()).not.toHaveBeenCalled();
    editor.getEditorState().read(() => expect(text.getTextContent()).toBe(`a${NBSP}b`));
  });

  it("CUT_COMMAND(null) at a collapsed caret is claimed, writes nothing and removes nothing", async () => {
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      text = $createTextNode(`a${NBSP}b`);
      $appendMarkerAndText(text);
    });
    await act(async () => editor.update(() => text.select(1, 1)));
    const { reached, unregister } = watchBelowTheClaim(editor);
    await act(async () => {
      editor.dispatchCommand(CUT_COMMAND, null);
    });
    unregister();
    expect(reached).not.toHaveBeenCalled();
    expect(execCommand()).not.toHaveBeenCalled();
    editor.getEditorState().read(() => expect(text.getTextContent()).toBe(`a${NBSP}b`));
  });

  it("COPY_COMMAND(null) with the caret beside a read-only figure is claimed and writes nothing", async () => {
    // A figure renders `contentEditable="false"` and its marker/attribute glyphs are display
    // decorators that are not keyboard-selectable, so an attempt to select the marker text inside
    // one leaves the caret in the prose beside it rather than in the figure.
    const { editor } = await copyEnvironmentWithFigure();
    await act(async () =>
      editor.update(() => {
        const before = $getRoot()
          .getAllTextNodes()
          .find((node) => node.getTextContent() === "Before ");
        if (!before) throw new Error("expected the text before the figure to exist");
        before.select(before.getTextContentSize(), before.getTextContentSize());
      }),
    );
    const { reached, unregister } = watchBelowTheClaim(editor);
    await act(async () => {
      editor.dispatchCommand(COPY_COMMAND, null);
    });
    unregister();
    expect(reached).not.toHaveBeenCalled();
    expect(execCommand()).not.toHaveBeenCalled();
  });

  it("does NOT claim a node selection — it has content, and Lexical's own copy handles it", async () => {
    // The deliberate carve-out in the claim's condition, pinned because it is the one way this
    // guard could go wrong in the other direction: narrowing the test to "is this a RANGE
    // selection" would swallow a copy that has real content behind it. The opposite outcome to
    // every pin above — the dispatch passes through and the copy is made.
    let decorator: ReturnType<typeof $createImmutableTypedTextNode>;
    const { editor } = await testEnvironment(() => {
      const text = $createTextNode(`a${NBSP}b`);
      $appendMarkerAndText(text);
      decorator = $createImmutableTypedTextNode("marker", "\\p");
      $getRoot().append($createParaNode("p").append(decorator));
    });
    await act(async () =>
      editor.update(() => {
        const nodeSelection = $createNodeSelection();
        nodeSelection.add(decorator.getKey());
        $setSelection(nodeSelection);
      }),
    );
    const { reached, unregister } = watchBelowTheClaim(editor);
    await act(async () => {
      editor.dispatchCommand(COPY_COMMAND, null);
    });
    unregister();
    expect(reached).toHaveBeenCalled();
    expect(execCommand()).toHaveBeenCalledWith("copy");
  });
});

/**
 * Pastes `payload` at the current selection, settles Tier 2's structural rebuild, then selects
 * the whole document and copies it back out, returning the round-tripped `text/plain`. A raw
 * literal marker pair like `\nd`…`\nd*` only becomes its canonical node shape once Tier 2
 * rebuilds it — and that rebuild re-derives its OWN structural separator byte regardless of
 * whether this handler inserted a plain space or left an NBSP, so asserting on raw post-paste
 * text content pins Tier 2's rebuild timing, not this handler's contract. Comparing USFM strings
 * before and after a full round trip is what these pins care about: whether the marker was
 * recognized and the data survived — not which byte an about-to-be-rebuilt separator held for one
 * commit. `$selectionToUsfmText` (the copy leg) inverts every
 * STRUCTURAL NBSP back to a plain space regardless of which one Tier 2 chose, so the round trip
 * is meaningful however Tier 2 shapes the interim tree.
 */
async function pasteAndCopyBack(
  editor: LexicalEditor,
  payload: { [key: string]: string },
): Promise<string> {
  let handled = false;
  await act(async () =>
    editor.update(() => {
      handled = $handlePasteForStandardView(pasteEvent(payload).event);
    }),
  );
  expect(handled).toBe(true);
  // Settle Tier 2 the same way neighboring suites do (a double microtask flush).
  await act(async () => {
    await Promise.resolve();
    await Promise.resolve();
  });
  await act(async () =>
    editor.update(() => {
      const root = $getRoot();
      root.select(0, root.getChildrenSize());
    }),
  );
  const { event, getData } = copyEvent();
  await act(async () => editor.dispatchCommand(COPY_COMMAND, event));
  return getData("text/plain");
}

/**
 * The `application/x-lexical-editor` flavor shape that makes a paste INTERNAL: one Lexical's own
 * `$insertDataTransferForRichText` would reconstruct as nodes, which is namespace-scoped. Read off
 * the editor rather than spelled literally so these pins keep meaning what they say if the test
 * harness ever renames its editor. The node list's CONTENTS are irrelevant here — every claim
 * under test declines before looking at them — so it is left empty.
 */
function sameNamespaceLexicalFlavor(editor: LexicalEditor): string {
  return JSON.stringify({ namespace: editor._config.namespace, nodes: [] });
}

describe("paste normalization ($handlePasteForStandardView)", () => {
  it("rewrites a pasted data-NBSP to the `~` display form (data round-trips to a real NBSP)", async () => {
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      const para = $createParaNode("p");
      const sep = $createTextNode(NBSP);
      $setState(sep, textTypeState, "marker-trailing-space");
      text = $createTextNode("before after");
      $getRoot().append(para.append($createMarkerNode("p"), sep, text));
    });
    await act(async () => editor.update(() => text.select(7, 7))); // between "before " and "after"

    const { event, prevented } = pasteEvent({ "text/plain": `3${NBSP}000` });
    let handled = false;
    await act(async () =>
      editor.update(() => {
        handled = $handlePasteForStandardView(event);
      }),
    );

    expect(handled).toBe(true);
    expect(prevented()).toBe(true);
    editor.getEditorState().read(() => {
      // The NBSP shows as `~` on screen; serialization inverts `~` → NBSP, so the data keeps it.
      expect($getRoot().getTextContent()).toContain("3~000");
    });
  });

  it("pastes `text/plain` when a Paratext 9 html fragment decodes to nothing", async () => {
    // A fragment can carry P9's signature and still contribute no bytes — everything visible sits
    // in an `exclude` span, with no `usfm:` comment to stand in for it. The html carrier wins only
    // when its decode has something to say.
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      const para = $createParaNode("p");
      text = $createTextNode("before after");
      $getRoot().append(para.append($createMarkerNode("p"), text));
    });
    await act(async () => editor.update(() => text.select(7, 7)));

    const { event } = pasteEvent({
      "text/plain": "plain words ",
      "text/html": '<span class="exclude usfmopen usfm_f">a</span>',
    });
    let handled = false;
    await act(async () =>
      editor.update(() => {
        handled = $handlePasteForStandardView(event);
      }),
    );

    expect(handled).toBe(true);
    editor.getEditorState().read(() => {
      expect($getRoot().getTextContent()).toContain("before plain words after");
    });
  });

  it("parses no html for a paste whose `text/plain` wins and whose html is not Paratext 9's", () => {
    // Word, Outlook and browser clipboards routinely carry hundreds of KB of html next to the
    // `text/plain` that wins; parsing it on every paste claim is main-thread time for nothing.
    const parse = vi.spyOn(DOMParser.prototype, "parseFromString");
    try {
      const { event } = pasteEvent({
        "text/plain": "plain words",
        "text/html": '<html><body><p class="MsoNormal">plain&nbsp;words</p></body></html>',
      });
      expect(getPastePayload(event, "TestEditor")?.text).toBe("plain words");
      expect(parse).not.toHaveBeenCalled();
    } finally {
      parse.mockRestore();
    }
  });

  it("declines internal pastes (a same-namespace `application/x-lexical-editor` payload is present)", async () => {
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      const para = $createParaNode("p");
      text = $createTextNode("body");
      $getRoot().append(para.append($createMarkerNode("p"), text));
    });
    await act(async () => editor.update(() => text.select(0, 0)));

    const internal = pasteEvent({
      "application/x-lexical-editor": sameNamespaceLexicalFlavor(editor),
      "text/plain": `x${NBSP}y`,
    });
    let handled = true;
    await act(async () =>
      editor.update(() => {
        handled = $handlePasteForStandardView(internal.event);
      }),
    );
    expect(handled).toBe(false);
    expect(internal.prevented()).toBe(false);
  });

  it("claims a FOREIGN Lexical editor's payload — the internal fast path would never reconstruct it", async () => {
    // `$insertDataTransferForRichText` (`@lexical/clipboard`) takes its node-tree branch only for a
    // payload whose namespace matches THIS editor's, and falls through to the `text/html` DOM
    // import for every other one. So declining on the mere PRESENCE of the flavor hands a foreign
    // payload — the `"Commenting"` editor `CommentPlugin.tsx` mounts in this same app writes one —
    // to a path that runs none of this handler's byte rules: the `\\c`/`\\id` strip and the
    // positional NBSP mapping. A `\\c` copied out of a comment box would reach the document and
    // poison the save with a second chapter marker.
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      const para = $createParaNode("p");
      text = $createTextNode("body");
      $getRoot().append(para.append($createMarkerNode("p"), text));
    });
    await act(async () => editor.update(() => text.select(0, 0)));

    const foreign = pasteEvent({
      "application/x-lexical-editor": JSON.stringify({
        namespace: "Commenting",
        nodes: [{ type: "text", text: "\\c 2 from a comment" }],
      }),
      "text/plain": "\\c 2 from a comment",
    });
    let handled = false;
    await act(async () =>
      editor.update(() => {
        handled = $handlePasteForStandardView(foreign.event);
      }),
    );

    expect(handled).toBe(true);
    expect(foreign.prevented()).toBe(true);
    editor.getEditorState().read(() => {
      // The strip ran: the chapter bytes are gone and only the prose landed.
      expect($getRoot().getTextContent()).not.toContain("\\c 2");
      expect($getRoot().getTextContent()).toContain("from a comment");
    });
  });

  it("claims an external plain-text paste with no NBSP at all, inserting it unchanged", async () => {
    // This handler claims every non-lexical paste, not just NBSP-bearing ones — Standard view has
    // no fidelity carrier but plain text, so an NBSP-free paste must re-tokenize the same way an
    // NBSP-bearing one does.
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      const para = $createParaNode("p");
      text = $createTextNode("body");
      $getRoot().append(para.append($createMarkerNode("p"), text));
    });
    await act(async () => editor.update(() => text.select(0, 0)));

    const { event, prevented } = pasteEvent({ "text/plain": "no nbsp here" });
    let handled = false;
    await act(async () =>
      editor.update(() => {
        handled = $handlePasteForStandardView(event);
      }),
    );
    expect(handled).toBe(true);
    expect(prevented()).toBe(true);
    editor.getEditorState().read(() => {
      expect($getRoot().getTextContent()).toContain("no nbsp here");
    });
  });

  it("rewrites an NBSP found only in a `text/html` payload (word-processor `&nbsp;`) to `~`, with no `text/plain` data", async () => {
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      const para = $createParaNode("p");
      const sep = $createTextNode(NBSP);
      $setState(sep, textTypeState, "marker-trailing-space");
      text = $createTextNode("before after");
      $getRoot().append(para.append($createMarkerNode("p"), sep, text));
    });
    await act(async () => editor.update(() => text.select(7, 7))); // between "before " and "after"

    // No `text/plain` key at all — some clipboard sources only populate `text/html`.
    const { event, prevented } = pasteEvent({ "text/html": "<p>3&nbsp;000</p>" });
    let handled = false;
    await act(async () =>
      editor.update(() => {
        handled = $handlePasteForStandardView(event);
      }),
    );

    expect(handled).toBe(true);
    expect(prevented()).toBe(true);
    editor.getEditorState().read(() => {
      expect($getRoot().getTextContent()).toContain("3~000");
    });
  });

  it("separates blocks (and `<br>`) into paragraphs so a multi-paragraph html paste doesn't merge words", async () => {
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      const para = $createParaNode("p");
      const sep = $createTextNode(NBSP);
      $setState(sep, textTypeState, "marker-trailing-space");
      text = $createTextNode("before after");
      $getRoot().append(para.append($createMarkerNode("p"), sep, text));
    });

    // Dispatched through PASTE_COMMAND (not a direct handler call): a multi-line insert only
    // gets its fresh paragraphs correctly prefixed when it goes through MarkerEditPlugin's own
    // registration, which arms `context.splitExpected` before inserting — see "multi-line paste
    // interplay" below.
    let handled: boolean | undefined;
    await act(async () =>
      editor.update(() => {
        text.select(7, 7); // between "before " and "after"
        handled = editor.dispatchCommand(
          PASTE_COMMAND,
          pasteEvent({ "text/html": "<p>one&nbsp;two</p><p>three<br>four</p>" }).event,
        );
      }),
    );

    // Claimed, so Lexical's own html import never gets the payload. The content assertion below
    // cannot tell the two paths apart on its own — both would produce plausible text.
    expect(handled).toBe(true);
    editor.getEditorState().read(() => {
      // Block boundaries and <br> become newlines, so "two"/"three" don't fuse into one word —
      // and each newline is then replayed as a real paragraph split (see the line-replay
      // describe at the bottom of this file), since no USFM line can carry a `\n` byte.
      expect(
        $getRoot()
          .getChildren()
          .map((child) => child.getTextContent().replaceAll(NBSP, " ")),
      ).toEqual(["\\p before one~two", "\\p three", "\\p fourafter"]);
    });
  });

  it("excludes body-level style/script text from the inserted content", async () => {
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      const para = $createParaNode("p");
      const sep = $createTextNode(NBSP);
      $setState(sep, textTypeState, "marker-trailing-space");
      text = $createTextNode("before after");
      $getRoot().append(para.append($createMarkerNode("p"), sep, text));
    });
    await act(async () => editor.update(() => text.select(7, 7)));

    // A leading <style>/<script> would be hoisted into <head> by the parser (already excluded);
    // placing them AFTER body content keeps them body-level — the case that leaked.
    const { event } = pasteEvent({
      "text/html": '<p>a&nbsp;b</p><style>p{color:red}</style><script>alert("x")</script>',
    });
    let handled = false;
    await act(async () =>
      editor.update(() => {
        handled = $handlePasteForStandardView(event);
      }),
    );

    expect(handled).toBe(true);
    editor.getEditorState().read(() => {
      const content = $getRoot().getTextContent();
      expect(content).toContain("a~b");
      expect(content).not.toContain("color");
      expect(content).not.toContain("alert");
    });
  });

  it("triggers on a literal NBSP byte in the raw html, not just the `&nbsp;` entity", async () => {
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      const para = $createParaNode("p");
      const sep = $createTextNode(NBSP);
      $setState(sep, textTypeState, "marker-trailing-space");
      text = $createTextNode("before after");
      $getRoot().append(para.append($createMarkerNode("p"), sep, text));
    });
    await act(async () => editor.update(() => text.select(7, 7)));

    const { event, prevented } = pasteEvent({ "text/html": `<p>3${NBSP}000</p>` });
    let handled = false;
    await act(async () =>
      editor.update(() => {
        handled = $handlePasteForStandardView(event);
      }),
    );

    expect(handled).toBe(true);
    expect(prevented()).toBe(true);
    editor.getEditorState().read(() => {
      expect($getRoot().getTextContent()).toContain("3~000");
    });
  });

  it("claims Word-style external HTML, inserting plain text with no formatting nodes", async () => {
    // This handler claims every non-lexical paste and never imports the html at all — a
    // text/html-only fallback here would run Lexical's own HTML import instead and create a
    // bold-formatted TextNode from the `<b>`.
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      const para = $createParaNode("p");
      text = $createTextNode("body");
      $getRoot().append(para.append($createMarkerNode("p"), text));
    });
    await act(async () => editor.update(() => text.select(0, 0)));

    const { event, prevented } = pasteEvent({
      "text/html": "<p><b>bold</b> text</p>",
      "text/plain": "bold text",
    });
    let handled = false;
    await act(async () =>
      editor.update(() => {
        handled = $handlePasteForStandardView(event);
      }),
    );

    expect(handled).toBe(true);
    expect(prevented()).toBe(true);
    editor.getEditorState().read(() => {
      expect($getRoot().getTextContent()).toContain("bold text");
      // No formatting survived the plain-text carrier: every text node is unformatted, unlike a
      // real Lexical HTML import of `<b>`, which would set the bold flag on a new TextNode.
      const textNodes = $getRoot().getAllTextNodes();
      textNodes.forEach((node) => expect(node.getFormat()).toBe(0));
    });
  });

  it("keeps current behavior (declines) when an `application/x-lexical-editor` payload is present, even if `text/html` carries NBSP", async () => {
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      const para = $createParaNode("p");
      text = $createTextNode("body");
      $getRoot().append(para.append($createMarkerNode("p"), text));
    });
    await act(async () => editor.update(() => text.select(0, 0)));

    const { event, prevented } = pasteEvent({
      "application/x-lexical-editor": sameNamespaceLexicalFlavor(editor),
      "text/html": "<p>3&nbsp;000</p>",
    });
    let handled = true;
    await act(async () =>
      editor.update(() => {
        handled = $handlePasteForStandardView(event);
      }),
    );

    expect(handled).toBe(false);
    expect(prevented()).toBe(false);
  });

  it("does not double a Standard-view-shaped `<span data-marker>` glyph — the paste never reaches Lexical's HTML import", async () => {
    // Shaped like Standard view's own exported markup (a data-marker span, marker glyph as real
    // text) — the shape that would, if this ever reached Lexical's `$generateNodesFromDOM`
    // import, produce a structural CharNode from the span AND a second, literal "\nd" from the
    // marker glyph's own text (MarkerNode has no importDOM). Both text/html and text/plain carry
    // the same bytes, matching a real Standard-view copy. Round-tripped through copy (rather than
    // read as raw post-paste text) so an exact-equality check is meaningful: a doubled glyph
    // would show up as extra "\nd"/"\nd*" occurrences in the copied USFM.
    let text: TextNode;
    const { editor } = await testEnvironment(() => {
      const para = $createParaNode("p");
      text = $createTextNode("body");
      $getRoot().append(para.append($createMarkerNode("p"), text));
    });
    await act(async () => editor.update(() => text.select(0, 0)));

    const source = `\\nd${NBSP}light\\nd*`;
    const roundTripped = await pasteAndCopyBack(editor, {
      "text/html": `<span data-marker="nd">${source}</span>`,
      "text/plain": source,
    });

    expect(roundTripped).toContain("\\nd light\\nd*body");
    // "\nd" appears exactly twice: the opener itself, and the "\nd" prefix of "\nd*". A doubled
    // glyph (the HTML-import path this handler must never reach) would show four.
    expect(roundTripped.split("\\nd").length - 1).toBe(2);
    // Round-tripped bytes alone can't distinguish "tokenized into a real CharNode" from "survived
    // as literal, never-recognized text" (both would copy back the same bytes) — so check the
    // node shape directly: Tier 2 (settled inside `pasteAndCopyBack`) must have produced exactly
    // one real `nd` CharNode, not left the pasted span as literal text.
    editor.getEditorState().read(() => {
      const chars = $dfs($getRoot())
        .map(({ node }) => node)
        .filter($isCharNode);
      expect(chars.filter((char) => char.getMarker() === "nd")).toHaveLength(1);
    });
  });

  describe("positional NBSP normalization", () => {
    // Direct pins on the pure string passes. The round-trip tests below exercise the same rules
    // through a real editor, but a rebuild re-derives its own separators, which hides exactly the
    // marker-RECOGNITION question these two ask.
    describe("marker recognition (the byte class the token regexes are built from)", () => {
      it("recognizes a marker name the ENGINE class allows but canonical USFM does not", () => {
        // The engine's name class is `\w` plus `-` — deliberately wider than canonical USFM, so a
        // wrong-case or underscored name is still a marker-shaped run the tokenizer will read as a
        // marker (markerName.pattern.ts). The positional NBSP rules have to agree with it: a name
        // this normalization fails to recognize keeps its separator NBSP, which then survives into
        // content as a literal `~` right where the tokenizer expects a space.
        expect(normalizePastedNbsp(`\\my_marker${NBSP}light`)).toBe("\\my_marker light");
        expect(normalizePastedNbsp(`\\ND${NBSP}light`)).toBe("\\ND light");
        expect(normalizePastedNbsp(`light${NBSP}\\my_marker*`)).toBe("light \\my_marker*");
      });

      it("leaves an NBSP that is not adjacent to any marker as data", () => {
        expect(normalizePastedNbsp(`a${NBSP}b`)).toBe("a~b");
      });

      it("keeps every NBSP before a marker as a space, outside a note's layout spacers", () => {
        // A space between two runs is content wherever it came from, including right before a
        // closing marker and after another space.
        expect(normalizePastedNbsp(`the${NBSP}\\nd Lord\\nd* said`)).toBe(
          "the \\nd Lord\\nd* said",
        );
        expect(normalizePastedNbsp(`\\nd Lord${NBSP}\\nd* said`)).toBe("\\nd Lord \\nd* said");
        expect(normalizePastedNbsp(`a ${NBSP}\\nd x`)).toBe("a  \\nd x");
        // Inside a note, too, wherever the note layout puts no spacer: before a nested marker, or
        // before a char's own closer.
        expect(
          normalizePastedNbsp(`\\f + \\ft see \\fq a${NBSP}\\fq*${NBSP}\\+nd b\\+nd*\\f*`),
        ).toBe("\\f + \\ft see \\fq a \\fq* \\+nd b\\+nd*\\f*");
        expect(normalizePastedNbsp(`a${NBSP}\n${NBSP}\\nd x`)).toBe("a~\n \\nd x");
      });

      it("keeps a note display's layout NBSPs as spaces rather than dropping anything", () => {
        // A note's non-editable layout puts an NBSP after its caller and after every child, so a
        // copy of that display carries one before each child marker and before `\\f*`. Nothing in
        // the text tells those apart from a space the user typed in the same place, and losing a
        // user's space is worse than keeping a stray one, so they all come through as spaces.
        expect(normalizePastedNbsp(`\\f +${NBSP}\\fr 1:1${NBSP}\\ft note.${NBSP}\\f*`)).toBe(
          "\\f + \\fr 1:1 \\ft note. \\f*",
        );
      });

      it("maps EVERY member of a leading NBSP run to a plain space, not just the first", () => {
        // A Standard-view paragraph-leading space run is stored as all-NBSP, so a run at a line's
        // start is display spacing from its first member to its last, never data.
        expect(normalizePastedNbsp(`${NBSP}${NBSP}word`)).toBe("  word");
        expect(normalizePastedNbsp(`a\n${NBSP}${NBSP}${NBSP}word`)).toBe("a\n   word");
      });
    });

    describe("chapter/book-id strip takes the token and nothing else", () => {
      it("keeps content that follows the chapter number", () => {
        // `\c` takes exactly one whitespace-delimited word as its number (`getNextWord`,
        // usfmFragmentToUsj.ts); everything after that is the user's content, and a strip that ate
        // to the newline would drop it silently.
        expect(stripPastedChapterAndBookId("x \\c 5 y")).toBe("x  y");
        expect(stripPastedChapterAndBookId("x \\c 5")).toBe("x ");
      });

      it("stops at the next marker rather than swallowing it", () => {
        expect(stripPastedChapterAndBookId("\\c 5\\v 1 In the beginning")).toBe(
          "\\v 1 In the beginning",
        );
        expect(stripPastedChapterAndBookId("\\c\\nd x")).toBe("\\nd x");
      });

      it("takes an `\\id` line's whole remainder — book code plus description are all payload", () => {
        expect(stripPastedChapterAndBookId("text \\id GEN more")).toBe("text ");
      });

      it("drops a line the token filled but for its own trailing separator", () => {
        // A chapter line copies as `\\c 5 `: the glyph's trailing separator is part of the line,
        // and the token (marker plus one word) stops just short of it.
        expect(stripPastedChapterAndBookId("\\c 5 ")).toBe("");
        expect(stripPastedChapterAndBookId("\\id MAT ")).toBe("");
        expect(stripPastedChapterAndBookId("before\n\\c 5 \nafter")).toBe("before\nafter");
        // A line that was blank before any token was stripped is the user's, and stays.
        expect(stripPastedChapterAndBookId("before\n  \nafter")).toBe("before\n  \nafter");
      });

      it("keeps whitespace the user wrote AHEAD of the token, and the line it sits on", () => {
        // Only a line the token OPENS may go whole. A space or NBSP in front of it is content,
        // and dropping the line would take that byte — and the line break — with the token.
        expect(stripPastedChapterAndBookId(" \\c 5")).toBe(" ");
        expect(stripPastedChapterAndBookId(`${NBSP}\\c 5`)).toBe(NBSP);
        expect(stripPastedChapterAndBookId(" \\id MAT")).toBe(" ");
        expect(stripPastedChapterAndBookId("before\n \\c 5\nafter")).toBe("before\n \nafter");
      });

      it("leaves a name that merely starts with `c`/`id` alone", () => {
        expect(stripPastedChapterAndBookId(`\\cls${NBSP}x`)).toBe(`\\cls${NBSP}x`);
        expect(stripPastedChapterAndBookId("\\ide UTF-8")).toBe("\\ide UTF-8");
      });
    });

    it("keeps an NBSP pasted between `\\va*` and `\\vp` as a space, which unfolds `\\vp` — the byte is the user's", () => {
      // The tokenizer treats any same-line whitespace between a verse and its attribute marker as
      // content, so the space this leaves behind makes `\\vp` a standalone span instead of the
      // verse's pubnumber (usfmFragmentToUsj.ts, the `attrTarget` text branch). That is the same
      // outcome Paratext 9 reaches from the same bytes: with `AllowInvisibleChars` off — the
      // default, and the semantics Standard view adopts — its own paste postprocessing turns every
      // literal NBSP into a space too. Dropping the byte to preserve the fold would lose content
      // the user pasted, which is the worse trade.
      expect(normalizePastedNbsp(`\\v 12 \\va 12b\\va*${NBSP}\\vp 12p\\vp*`)).toBe(
        "\\v 12 \\va 12b\\va* \\vp 12p\\vp*",
      );
    });

    // The pins above hold byte-for-byte under the positional rule wherever the pasted text carries
    // no marker adjacent to an NBSP (nothing there to normalize). These add the marker-adjacent
    // cases the positional rule exists for.
    it("an NBSP immediately after a marker token is treated as a display artifact, not corrupted into `~` (the 2026-08-07 live-repro shape, fixed)", async () => {
      // A same-editor paste of a copied footnote would otherwise turn every display-NBSP into a
      // literal `~`, corrupting `\f`/`\fr`/`\ft` into unknown-marker soup (see the round-trip
      // regression below for the full footnote). This is the minimal reproduction of one such
      // position — the required separator right after an opening glyph. Round-tripped through
      // copy (see `pasteAndCopyBack`'s doc comment): once Tier 2 recognizes the full `\nd`…`\nd*`
      // pair it rebuilds its own canonical structural separator regardless of which byte this
      // handler inserted, so the meaningful check is that the marker was recognized at all
      // (round-trips clean) rather than which byte survives for one commit pre-rebuild.
      let text: TextNode;
      const { editor } = await testEnvironment(() => {
        const para = $createParaNode("p");
        text = $createTextNode("body");
        $getRoot().append(para.append($createMarkerNode("p"), text));
      });
      await act(async () => editor.update(() => text.select(0, 0)));

      const roundTripped = await pasteAndCopyBack(editor, {
        "text/plain": `\\nd${NBSP}light\\nd*`,
      });

      expect(roundTripped).toContain("\\nd light\\nd*");
      expect(roundTripped).not.toContain("~");
    });

    it("a double NBSP after a marker token: only the first is marker-adjacent — the second is interior data (`\\nd ~light`)", async () => {
      // Only ONE NBSP per marker adjacency is treated as a display artifact — a SECOND,
      // unexplained NBSP right after it is preserved as data rather than silently dropped, since
      // losing user data is worse than the reverse. `\nd` + NBSP + NBSP + `light`: the
      // after-marker pass matches `\nd` + the FIRST NBSP only (consuming that pair), so the
      // second NBSP is left with nothing recognized immediately before or after it and falls
      // through to the interior/data pass. Round-tripped through copy (see `pasteAndCopyBack`'s
      // doc comment): `\nd` alone (no closer) is still a real opener Tier 1 recognizes and
      // re-derives its own canonical separator for, discarding whichever byte this handler
      // inserted there — the same interim-shape caveat the closed-pair positional tests above
      // sidestep the same way. The SECOND NBSP is untouched by any such rebuild (it is already a
      // literal `~` character by the time Tier 1/2 sees it), so it survives the round trip as-is.
      let text: TextNode;
      const { editor } = await testEnvironment(() => {
        const para = $createParaNode("p");
        text = $createTextNode("body");
        $getRoot().append(para.append($createMarkerNode("p"), text));
      });
      await act(async () => editor.update(() => text.select(0, 0)));

      const roundTripped = await pasteAndCopyBack(editor, {
        "text/plain": `\\nd${NBSP}${NBSP}light`,
      });

      expect(roundTripped).toContain("\\nd ~light");
    });

    it("an NBSP with no adjacent marker token is genuine data and stays `~`", async () => {
      let text: TextNode;
      const { editor } = await testEnvironment(() => {
        const para = $createParaNode("p");
        text = $createTextNode("body");
        $getRoot().append(para.append($createMarkerNode("p"), text));
      });
      await act(async () => editor.update(() => text.select(0, 0)));

      const { event } = pasteEvent({ "text/plain": `word${NBSP}word` });
      let handled = false;
      await act(async () =>
        editor.update(() => {
          handled = $handlePasteForStandardView(event);
        }),
      );

      expect(handled).toBe(true);
      editor.getEditorState().read(() => {
        expect($getRoot().getTextContent()).toContain("word~word");
      });
    });

    it("an NBSP sitting before a closing marker outside a note is kept as the space it is", async () => {
      // `\nd` + NBSP + `Lord` + NBSP + `\nd*`. The first NBSP follows the opening marker (its
      // separator → space). The second is a space the text has before the closer: only a note's
      // layout puts a spacer in front of a closer, and only in front of the note's OWN closer, so
      // out here it is content and stays — the span's text is `Lord `. Round-tripped through copy
      // (see `pasteAndCopyBack`) to sidestep asserting on Tier 2's pre-rebuild interim text.
      let text: TextNode;
      const { editor } = await testEnvironment(() => {
        const para = $createParaNode("p");
        text = $createTextNode("body");
        $getRoot().append(para.append($createMarkerNode("p"), text));
      });
      await act(async () => editor.update(() => text.select(0, 0)));

      const roundTripped = await pasteAndCopyBack(editor, {
        "text/plain": `\\nd${NBSP}Lord${NBSP}\\nd*`,
      });

      expect(roundTripped).toContain("\\nd Lord \\nd*");
      expect(roundTripped).not.toContain("~");
    });

    it("normalizes a leading NBSP with no preceding marker literal (a partial selection starting at a char span's structural separator)", async () => {
      let text: TextNode;
      const { editor } = await testEnvironment(() => {
        const para = $createParaNode("p");
        text = $createTextNode("body");
        $getRoot().append(para.append($createMarkerNode("p"), text));
      });
      await act(async () => editor.update(() => text.select(0, 0)));

      const { event } = pasteEvent({ "text/plain": `${NBSP}Lord` });
      let handled = false;
      await act(async () =>
        editor.update(() => {
          handled = $handlePasteForStandardView(event);
        }),
      );

      expect(handled).toBe(true);
      editor.getEditorState().read(() => {
        const content = $getRoot().getTextContent();
        expect(content).toContain(" Lord");
        expect(content).not.toContain("~Lord");
      });
    });

    it("html-only payload (no text/plain): text derived via `htmlPasteText` is positionally normalized the same way", async () => {
      let text: TextNode;
      const { editor } = await testEnvironment(() => {
        const para = $createParaNode("p");
        text = $createTextNode("body");
        $getRoot().append(para.append($createMarkerNode("p"), text));
      });
      await act(async () => editor.update(() => text.select(0, 0)));

      const roundTripped = await pasteAndCopyBack(editor, {
        "text/html": `<p>\\nd${NBSP}light\\nd*</p>`,
      });

      expect(roundTripped).toContain("\\nd light\\nd*");
    });

    it("recognizes a nested char marker (`\\+nd`) as a marker token — the NBSP after it does not gain `~`", async () => {
      // Round-tripped through copy (see `pasteAndCopyBack`'s doc comment): `\wj`/`\+nd` are real
      // recognized char markers, so Tier 2 rebuilds both the outer and nested span, re-deriving
      // its own canonical structural leading separator for each (discarding whatever byte this
      // handler inserted) — the same interim-shape caveat the simple single-marker positional
      // tests above sidestep the same way.
      let text: TextNode;
      const { editor } = await testEnvironment(() => {
        const para = $createParaNode("p");
        text = $createTextNode("body");
        $getRoot().append(para.append($createMarkerNode("p"), text));
      });
      await act(async () => editor.update(() => text.select(0, 0)));

      const roundTripped = await pasteAndCopyBack(editor, {
        "text/plain": `\\wj li\\+nd${NBSP}g\\+nd*ht\\wj*`,
      });

      expect(roundTripped).toContain("\\wj li\\+nd g\\+nd*ht\\wj*");
      expect(roundTripped).not.toContain("~");
    });

    it("recognizes a milestone's anonymous self-closer (`\\*`) as a marker token — the NBSP after it does not gain `~`", async () => {
      let text: TextNode;
      const { editor } = await testEnvironment(() => {
        const para = $createParaNode("p");
        text = $createTextNode("body");
        $getRoot().append(para.append($createMarkerNode("p"), text));
      });
      await act(async () => editor.update(() => text.select(0, 0)));

      const { event } = pasteEvent({ "text/plain": `\\qt-s\\*${NBSP}after` });
      let handled = false;
      await act(async () =>
        editor.update(() => {
          handled = $handlePasteForStandardView(event);
        }),
      );

      expect(handled).toBe(true);
      editor.getEditorState().read(() => {
        const content = $getRoot().getTextContent();
        expect(content).toContain("\\qt-s\\* after");
        expect(content).not.toContain("~");
      });
    });
  });

  describe("multi-line paste interplay (splitExpected arming)", () => {
    it("an NBSP-bearing multi-line paste both splits into prefixed paragraphs AND normalizes NBSPs positionally", async () => {
      // Without paragraph-splitting logic, calling `selection.insertText` on the WHOLE multi-line
      // string would leave a pasted "\n" as a literal character inside one text run instead of a
      // paragraph break, so an NBSP-bearing multi-line paste would never actually split.
      // Dispatched via PASTE_COMMAND (not
      // a direct handler call) so MarkerEditPlugin's own registration arms
      // `context.splitExpected` before inserting; a direct call defaults that callback to a
      // no-op and the freshly split paragraphs would be merged back as "marker deleted".
      let text: TextNode;
      const { editor } = await testEnvironment(() => {
        const para = $createParaNode("p");
        const sep = $createTextNode(NBSP);
        $setState(sep, textTypeState, "marker-trailing-space");
        text = $createTextNode("before after");
        $getRoot().append(para.append($createMarkerNode("p"), sep, text));
      });

      await act(async () =>
        editor.update(() => {
          text.select(7, 7); // between "before " and "after"
          editor.dispatchCommand(
            PASTE_COMMAND,
            pasteEvent({ "text/plain": `one${NBSP}two\nthree${NBSP}four` }).event,
          );
        }),
      );

      editor.getEditorState().read(() => {
        const paras = $getRoot().getChildren().filter($isParaNode);
        expect(paras).toHaveLength(2);
        expect(paras.map((p) => p.getMarker())).toEqual(["p", "p"]);
        paras.forEach((p) => expect($isMarkerNode(p.getFirstChild())).toBe(true));
        // Neither NBSP is marker-adjacent (no `\marker` anywhere in this paste), so both stay
        // data (`~`) across the paragraph split.
        expect(paras[0].getTextContent()).toContain("before one~two");
        expect(paras[1].getTextContent()).toContain("three~four");
      });
    });

    it("a leading NBSP on a SECOND line (right after an internal `\\n`, not string-start) also normalizes to a space, under the `gm`-flagged leading-NBSP pass", async () => {
      // `normalizePastedNbsp`'s leading-NBSP pass uses the `gm` flags, so `^` matches after
      // every `\n`, not just at the very start of the whole paste — a later paragraph of a
      // multi-line paste can itself start mid-span (a partial selection spanning a paragraph
      // boundary) and reads as the same structural separator the string-start case does.
      let text: TextNode;
      const { editor } = await testEnvironment(() => {
        const para = $createParaNode("p");
        const sep = $createTextNode(NBSP);
        $setState(sep, textTypeState, "marker-trailing-space");
        text = $createTextNode("before after");
        $getRoot().append(para.append($createMarkerNode("p"), sep, text));
      });

      await act(async () =>
        editor.update(() => {
          text.select(7, 7); // between "before " and "after"
          editor.dispatchCommand(
            PASTE_COMMAND,
            pasteEvent({ "text/plain": `one\n${NBSP}two` }).event,
          );
        }),
      );

      editor.getEditorState().read(() => {
        const paras = $getRoot().getChildren().filter($isParaNode);
        expect(paras).toHaveLength(2);
        expect(paras[0].getTextContent()).toContain("before one");
        // The second line's leading NBSP became a plain space, not data — no `~` anywhere.
        expect(paras[1].getTextContent()).toContain(" twoafter");
        expect(paras[1].getTextContent()).not.toContain("~");
      });
    });

    it("normalizes a bare `\\r` (no `\\n`) to a paragraph break instead of inserting a control character", async () => {
      let text: TextNode;
      const { editor } = await testEnvironment(() => {
        const para = $createParaNode("p");
        text = $createTextNode("body");
        $getRoot().append(para.append($createMarkerNode("p"), text));
      });

      await act(async () =>
        editor.update(() => {
          text.select(0, 0);
          editor.dispatchCommand(
            PASTE_COMMAND,
            pasteEvent({ "text/plain": "first\rsecond" }).event,
          );
        }),
      );

      editor.getEditorState().read(() => {
        const paras = $getRoot().getChildren().filter($isParaNode);
        expect(paras).toHaveLength(2);
        expect(paras[0].getTextContent()).toContain("first");
        expect(paras[1].getTextContent()).toContain("second");
        expect($getRoot().getTextContent()).not.toContain("\r");
      });
    });
  });

  describe("structure protection", () => {
    async function protectedTestEnvironment($initialEditorState: () => void) {
      return baseTestEnvironment(
        $initialEditorState,
        <>
          <MarkerEditPlugin viewOptions={viewOptions} structureProtectionMode="protected" />
          <StructureKeyboardPlugin structureProtectionMode="protected" />
        </>,
      );
    }

    /** A `\p hello world` host with the caret after `"hello"`. Both plugins register
     * `PASTE_COMMAND` at `COMMAND_PRIORITY_HIGH` and `MarkerEditPlugin` mounts first (matching
     * `Editor.tsx`'s real order), so whichever of the two claims the paste is what these pins
     * measure. */
    async function protectedHost(): Promise<{ editor: LexicalEditor; text: TextNode }> {
      let text!: TextNode;
      const { editor } = await protectedTestEnvironment(() => {
        const sep = $createTextNode(NBSP);
        $setState(sep, textTypeState, "marker-trailing-space");
        text = $createTextNode("hello world");
        $getRoot().append($createParaNode("p").append($createMarkerNode("p"), sep, text));
      });
      await act(async () => editor.update(() => text.select(5, 5)));
      return { editor, text };
    }

    async function pasteAt(editor: LexicalEditor, payload: { [key: string]: string }) {
      const { event } = pasteEvent(payload);
      await act(async () =>
        editor.update(() => {
          editor.dispatchCommand(PASTE_COMMAND, event);
        }),
      );
    }

    it("claims a protected paste and applies the same byte rules an unprotected one gets", async () => {
      // Protection governs selection replacement and paragraph splitting, not marker BYTES: the
      // marker engine has no protection gate, so pasted `\marker` literals tokenize in both modes
      // exactly as typed ones do. What the old decline lost was the byte normalization — the
      // `\c`/`\id` strip in particular, whose absence let a protected paste create a second chapter
      // node and poison every save.
      const { editor } = await protectedHost();
      await pasteAt(editor, { "text/plain": `\\c 7 pasted tail${NBSP}end` });

      editor.getEditorState().read(() => {
        // Read with display NBSPs mapped back to the spaces they stand for: the space run the strip
        // leaves behind is shown as NBSP while typing, which is display, not content.
        const content = $getRoot().getTextContent().replaceAll(NBSP, " ");
        // The chapter token and its number are gone; every byte around them survives, and the
        // pasted NBSP — adjacent to no marker token — is read as data and takes the `~` display form
        // a typed data-NBSP gets. Both are normalization the protected mode used to skip entirely.
        expect(content).not.toContain("\\c");
        expect(content).toBe("\\p hello pasted tail~end world");
      });
    });

    it("never splits a paragraph under protection: a multi-line payload joins with single spaces", async () => {
      const { editor } = await protectedHost();
      await pasteAt(editor, { "text/plain": "first\nsecond" });

      editor.getEditorState().read(() => {
        // One block in, one block out. Unprotected, this same payload dispatches
        // INSERT_PARAGRAPH_COMMAND and produces a second paragraph (pinned in the
        // "multi-line paste interplay" describe above, and both ways round in the Editor pin below).
        expect($getRoot().getChildren().filter($isParaNode)).toHaveLength(1);
        expect($getRoot().getTextContent()).toContain("hellofirst second");
      });
    });

    it("declines a selection StructureKeyboardPlugin refuses to replace, leaving that refusal one owner", async () => {
      // `$shouldBlockSelectionReplacement` (structureKeyboard.utils.ts) blocks a range spanning a
      // paragraph boundary. Claiming it here would starve `StructureKeyboardPlugin`'s own block and
      // leave the rule with two owners that could disagree; declining keeps the sanitizer's refusal
      // the only answer, and it refuses the whole paste.
      let first!: TextNode;
      let second!: TextNode;
      const { editor } = await protectedTestEnvironment(() => {
        first = $createTextNode("hello world");
        second = $createTextNode("second para");
        $getRoot().append(
          $createParaNode("p").append($createMarkerNode("p"), first),
          $createParaNode("p").append($createMarkerNode("p"), second),
        );
      });
      await act(async () =>
        editor.update(() => {
          const selection = $createRangeSelection();
          selection.anchor = $createPoint(first.getKey(), 5, "text");
          selection.focus = $createPoint(second.getKey(), 6, "text");
          $setSelection(selection);
        }),
      );
      await pasteAt(editor, { "text/plain": "pasted" });

      editor.getEditorState().read(() => {
        const content = $getRoot().getTextContent();
        expect(content).not.toContain("pasted");
        expect(content).toContain("hello world");
        expect(content).toContain("second para");
      });
    });

    it("declines a CUT of a selection StructureKeyboardPlugin refuses to replace, so the refusal keeps it", async () => {
      // The same one-owner rule as paste. Claiming the cut here removed the selected range —
      // the paragraph boundary protection exists to keep — before the refusal ever ran.
      let first!: TextNode;
      let second!: TextNode;
      const { editor } = await protectedTestEnvironment(() => {
        first = $createTextNode("hello world");
        second = $createTextNode("second para");
        $getRoot().append(
          $createParaNode("p").append($createMarkerNode("p"), first),
          $createParaNode("p").append($createMarkerNode("p"), second),
        );
      });
      await act(async () =>
        editor.update(() => {
          const selection = $createRangeSelection();
          selection.anchor = $createPoint(first.getKey(), 5, "text");
          selection.focus = $createPoint(second.getKey(), 6, "text");
          $setSelection(selection);
        }),
      );
      const { event } = copyEvent();
      await act(async () => {
        editor.dispatchCommand(CUT_COMMAND, event);
      });

      editor.getEditorState().read(() => {
        expect($getRoot().getChildren().filter($isParaNode)).toHaveLength(2);
        const content = $getRoot().getTextContent();
        expect(content).toContain("hello world");
        expect(content).toContain("second para");
      });
    });

    it("the real `Editor` hands its `structureProtectionMode` down, so the protected rule reaches the plugin", async () => {
      // The pins above pass the mode straight to `MarkerEditPlugin`, which proves the rule but not
      // the wiring that reaches it. Both `Editor` and the plugin default the prop to `"off"`, so a
      // dropped pass-through is invisible to every other test in the suite: the plugin would simply
      // never be told, and would split paragraphs in a document whose structure must not change.
      // Measured as a DIFFERENCE between the two modes, so the pin cannot pass on a mount that
      // ignores the prop in either direction.
      async function paraCountAfterTwoLinePaste(
        structureProtectionMode: "off" | "protected",
      ): Promise<number> {
        const { lexical } = await mountStandardViewEditor(
          {
            type: "USJ",
            version: "3.1",
            content: [{ type: "para", marker: "p", content: ["hello world"] }],
          },
          { structureProtectionMode },
        );
        await act(async () =>
          lexical.update(() => {
            const paragraph = $getRoot().getChildren().filter($isParaNode)[0];
            paragraph.selectEnd();
            lexical.dispatchCommand(
              PASTE_COMMAND,
              pasteEvent({ "text/plain": "first\nsecond" }).event,
            );
          }),
        );
        return lexical
          .getEditorState()
          .read(() => $getRoot().getChildren().filter($isParaNode).length);
      }

      expect(await paraCountAfterTwoLinePaste("protected")).toBe(1);
      expect(await paraCountAfterTwoLinePaste("off")).toBe(2);
    });

    it("strips a pasted `\\c` in BOTH modes through the real `Editor`, so protection is never the unsafe mode", async () => {
      async function chapterCountAfterChapterPaste(
        structureProtectionMode: "off" | "protected",
      ): Promise<number> {
        const { lexical } = await mountStandardViewEditor(
          {
            type: "USJ",
            version: "3.1",
            content: [
              { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
              { type: "chapter", marker: "c", number: "1" },
              { type: "para", marker: "p", content: ["hello world"] },
            ],
          } as unknown as Usj,
          { structureProtectionMode },
        );
        await act(async () =>
          lexical.update(() => {
            const paragraph = $getRoot().getChildren().filter($isParaNode)[0];
            paragraph.selectEnd();
            lexical.dispatchCommand(PASTE_COMMAND, pasteEvent({ "text/plain": "x \\c 7 y" }).event);
          }),
        );
        await act(async () => {
          await Promise.resolve();
          await Promise.resolve();
        });
        return lexical
          .getEditorState()
          .read(() => $dfs($getRoot()).filter(({ node }) => $isSomeChapterNode(node)).length);
      }

      expect(await chapterCountAfterChapterPaste("protected")).toBe(1);
      expect(await chapterCountAfterChapterPaste("off")).toBe(1);
    });
  });

  describe("tilde-corruption regression (2026-08-07 live repro)", () => {
    /** The footnote shape this describe block pins: `\f - \fr 1:1 \ft Caller test.\f*`. */
    function footnoteUsj(): Usj {
      return {
        type: "USJ",
        version: "3.1",
        content: [
          {
            type: "para",
            marker: "p",
            content: [
              {
                type: "note",
                marker: "f",
                caller: "-",
                content: [
                  { type: "char", marker: "fr", content: ["1:1 "], closed: "false" },
                  { type: "char", marker: "ft", content: ["Caller test."], closed: "false" },
                ],
              },
            ],
          },
        ],
      } as unknown as Usj;
    }

    it("a same-editor paste of a just-copied footnote round-trips byte-exact — no NBSP is corrupted into `~`", async () => {
      // `pasteSelection` (clipboard.utils.ts) rebuilds its `DataTransfer` from Chromium's async
      // `navigator.clipboard.read()`, which exposes only standard MIME types — the private
      // `application/x-lexical-editor` flavor written on copy never comes back on a real Ctrl+V,
      // so even a same-editor paste rides text/html and text/plain like any external source. This
      // reproduces exactly that: copy captures all three flavors below, but the paste payload
      // deliberately omits the lexical one, matching what a real Ctrl+V actually delivers.
      const { editor: sourceEditor } = await baseTestEnvironment(
        serializedState(footnoteUsj()),
        <MarkerEditPlugin viewOptions={viewOptions} />,
      );
      let note: NoteNode | undefined;
      sourceEditor.getEditorState().read(() => {
        note = findOnlyNote($getRoot());
      });
      if (!note) throw new Error("expected exactly one note");
      const noteNode = note;
      await act(async () =>
        sourceEditor.update(() => {
          const first = noteNode.getFirstDescendant();
          const last = noteNode.getLastDescendant();
          if (!first || !last) throw new Error("note has no descendants");
          const selection = $createRangeSelection();
          selection.anchor = $createPoint(first.getKey(), 0, "text");
          selection.focus = $createPoint(last.getKey(), last.getTextContentSize(), "text");
          $setSelection(selection);
        }),
      );
      const copyStub = copyEvent();
      await act(async () => sourceEditor.dispatchCommand(COPY_COMMAND, copyStub.event));
      const sourceText = copyStub.getData("text/plain");
      // Ground truth: no NBSP at all in a correct copy (matches
      // clipboardCopyFidelity.test.tsx's pin for this exact footnote).
      expect(sourceText).toBe("\\f - \\fr 1:1 \\ft Caller test.\\f*");

      let text: TextNode;
      const { editor: targetEditor } = await testEnvironment(() => {
        const para = $createParaNode("p");
        text = $createTextNode("body");
        $getRoot().append(para.append($createMarkerNode("p"), text));
      });
      await act(async () => targetEditor.update(() => text.select(0, 0)));

      const roundTripped = await pasteAndCopyBack(targetEditor, {
        "text/plain": sourceText,
        "text/html": copyStub.getData("text/html"),
      });

      expect(roundTripped).not.toContain("~");
      expect(roundTripped).toContain("\\f - \\fr 1:1 \\ft Caller test.\\f*");
    });

    it("a browser-hop/html-derived collapsed-footnote shape (display NBSPs before `\\ft` and `\\f*`, not only after `\\f`/`\\fr`) round-trips with no `~` and no lost space", async () => {
      // `createNote` (usj-editor.adaptor.ts) appends a display NBSP after EVERY child of a
      // collapsed note, so a copy of that display carries one between `\\fr`'s content and `\\ft`,
      // and another between `\\ft`'s content and `\\f*`. Standard view's own copy never carries
      // that shape (the copy walker drops those spacers); a foreign carrier holding the display
      // still can. None becomes a `~` — the corruption this describe pins — and none is dropped:
      // the text cannot tell them from a space the user typed there, so each stays a space.
      let text: TextNode;
      const { editor } = await testEnvironment(() => {
        const para = $createParaNode("p");
        text = $createTextNode("body");
        $getRoot().append(para.append($createMarkerNode("p"), text));
      });
      await act(async () => editor.update(() => text.select(0, 0)));

      const roundTripped = await pasteAndCopyBack(editor, {
        "text/plain": `\\f - \\fr 1:1${NBSP}\\ft Caller test.${NBSP}\\f*`,
      });

      expect(roundTripped).not.toContain("~");
      expect(roundTripped).toContain("\\f - \\fr 1:1 \\ft Caller test. \\f*");
    });
  });
});

/**
 * A newline is not a byte any USFM line can carry, so a pasted `\n` must become a paragraph
 * split — never a literal character inside a text node (invariants Invariant I). The NBSP claim
 * above runs at HIGH ahead of every other paste claim, so an NBSP-carrying multi-line paste
 * reaches nothing else: the split has to happen inside that claim.
 *
 * Driven through the real `PASTE_COMMAND` ladder rather than by calling the handler directly (as
 * the tests above do), because the split runs through `INSERT_PARAGRAPH_COMMAND` and only the
 * mounted plugin chain answers it.
 */
describe("multi-line paste carrying an NBSP", () => {
  const globalStubs: { DragEvent?: unknown; ClipboardEvent?: unknown } = globalThis;
  if (typeof globalStubs.DragEvent === "undefined")
    globalStubs.DragEvent = class DragEvent extends Event {};
  if (typeof globalStubs.ClipboardEvent === "undefined")
    globalStubs.ClipboardEvent = class ClipboardEvent extends Event {};

  /**
   * Duck-typed paste event carrying `types`/`files` as well, since dispatching through the whole
   * ladder reaches `@lexical/clipboard`, which reads both (jsdom implements neither
   * `ClipboardEvent` nor `DataTransfer`).
   */
  function pasteEventWith(flavors: { [mime: string]: string }): ClipboardEvent {
    return {
      clipboardData: {
        types: Object.keys(flavors),
        files: [],
        getData: (type: string) => flavors[type] ?? "",
      },
      preventDefault: () => undefined,
    } as unknown as ClipboardEvent;
  }

  function $paras(): ParaNode[] {
    return $getRoot().getChildren().filter($isParaNode);
  }

  /**
   * Asserted per TEXT NODE, not on the root's text content: `getTextContent()` on an element
   * JOINS its block children with newlines of its own, so a root-level read can never tell a
   * literal pasted `\n` from a genuine paragraph boundary.
   */
  function $noTextNodeHoldsANewline(): boolean {
    return $getRoot()
      .getAllTextNodes()
      .every((textNode) => !textNode.getTextContent().includes("\n"));
  }

  /** The USFM bytes a subtree stands for, structural NBSP separators rendered as plain spaces. */
  function $usfmBytes(para: ParaNode): string {
    return para
      .getAllTextNodes()
      .map((textNode) => textNode.getTextContent())
      .join("")
      .replaceAll(NBSP, " ");
  }

  /** `\p \nd thing\nd*` — one paragraph holding a single character-styled run. */
  function $appendCharPara(): TextNode {
    const content = $createTextNode(`${NBSP}thing`);
    $getRoot().append(
      $createParaNode("p").append(
        $createMarkerNode("p"),
        $createTextNode(NBSP),
        $createCharNode("nd").append(
          $createMarkerNode("nd"),
          content,
          $createMarkerNode("nd", "closing"),
        ),
      ),
    );
    return content;
  }

  it("splits paragraphs inside a character stack, closing and reopening it per line", async () => {
    let content: TextNode;
    const { editor } = await testEnvironmentWithDisplaySyncs(() => (content = $appendCharPara()));
    await act(async () => editor.update(() => content.select(4, 4))); // "thi|ng"

    await act(async () => {
      editor.dispatchCommand(PASTE_COMMAND, pasteEventWith({ "text/plain": `one${NBSP}x\ntwo` }));
    });

    editor.getEditorState().read(() => {
      const paras = $paras();
      expect(paras).toHaveLength(2);
      // The pasted NBSP takes its `~` display form; serialization inverts it back to an NBSP.
      expect($usfmBytes(paras[0])).toBe("\\p \\nd thione~x\\nd*");
      expect($usfmBytes(paras[1])).toBe("\\p \\nd twong\\nd*");
      expect($noTextNodeHoldsANewline()).toBe(true);
    });
  });

  it("splits paragraphs in plain text too, keeping the NBSP's display form", async () => {
    let text: TextNode;
    const { editor } = await testEnvironmentWithDisplaySyncs(() => {
      text = $createTextNode("plain");
      $appendMarkerAndText(text);
    });
    await act(async () => editor.update(() => text.select(5, 5))); // "plain|"

    await act(async () => {
      editor.dispatchCommand(PASTE_COMMAND, pasteEventWith({ "text/plain": `a${NBSP}b\nc` }));
    });

    editor.getEditorState().read(() => {
      const paras = $paras();
      expect(paras).toHaveLength(2);
      expect($usfmBytes(paras[0])).toBe("\\p plaina~b");
      expect($usfmBytes(paras[1])).toBe("\\p c");
      expect($noTextNodeHoldsANewline()).toBe(true);
    });
  });
});
