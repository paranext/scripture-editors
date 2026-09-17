/**
 * Paste in a STRUCTURE-PROTECTED Standard view — the editor configuration Platform.Bible's Simple
 * interface mode produces (`structureProtectionMode: "protected"`; Power mode maps to `"off"`). A
 * pasted `\fig …\fig*` is the lead case, because a figure is the construct whose bytes a `text/html`
 * DOM export cannot express at all, so it is where a carrier mismatch shows up first.
 *
 * The rule these pins state: `$handlePasteForStandardView`
 * (`whitespaceDisplay.plugin.utils.ts`) handles a protected paste with the SAME bytes an
 * unprotected one gets, and protection changes only two things — a selection
 * `StructureKeyboardPlugin` refuses to replace is declined here so that refusal keeps one owner,
 * and a multi-line payload's newlines become single spaces instead of paragraph splits.
 *
 * Why the bytes cannot be left to the html sanitizer: declining the whole paste under protection
 * handed it to `StructureKeyboardPlugin.$sanitizeAndInsert`, which reads `text/html` and nothing
 * else. Standard view's paste contract is that the USFM TEXT is the fidelity carrier — markers are
 * real text there, so re-tokenizing pasted text is the same mechanism that recognizes typed markers
 * — and routing around it cost the protected mode three guarantees the unprotected mode has: the
 * `\c`/`\id` strip (a pasted chapter marker creates a SECOND chapter node, after which every save
 * fails with the data provider's "Multiple chapter markers present" — an error that surfaces only in
 * the renderer log), the positional NBSP rule, and the Paratext 9 `usfm:`-comment decode. The
 * sanitizer was never protecting this view from marker BYTES in the first place: the marker engine
 * has no protection gate, so a pasted or typed `\v`/`\p` literal tokenizes into a real marker in
 * both modes, and `$sanitizeNodesForProtectedStructure` only strips verse/para NODES out of an html
 * DOM import.
 */

import { pasteEvent } from "./markerEdit.test-helpers";
import { usfmToClipboardHtml } from "./whitespaceDisplay.plugin.utils";
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { $getHtmlContent } from "@lexical/clipboard";
import { act } from "@testing-library/react";
import { $getRoot, $isTextNode, LexicalEditor, PASTE_COMMAND, TextNode } from "lexical";
import { $isParaNode, NBSP } from "shared";
import { StructureProtectionMode } from "shared-react";

// jsdom implements neither `ClipboardEvent` nor `DragEvent`; Lexical's own paste fallback
// duck-types against both (`objectKlassEquals`). Same stub as the sibling clipboard suites.
const globalStubs: { DragEvent?: unknown; ClipboardEvent?: unknown } = globalThis;
if (typeof globalStubs.DragEvent === "undefined")
  globalStubs.DragEvent = class DragEvent extends Event {};
if (typeof globalStubs.ClipboardEvent === "undefined")
  globalStubs.ClipboardEvent = class ClipboardEvent extends Event {};

/** One figure's full USFM — the shape hand QA pasted. */
const FIGURE_USFM = `\\fig At once they left their nets.|src="avnt016.jpg" size="span" ref="1.18"\\fig*`;

const CAPTION = "At once they left their nets.";

/** The figure object those bytes mean: caption as the figure's own content, `src` under USX/USJ's
 * `file`. */
const figureObject: MarkerObject = {
  type: "figure",
  marker: "fig",
  file: "avnt016.jpg",
  size: "span",
  ref: "1.18",
  content: [CAPTION],
} as unknown as MarkerObject;

/** A two-paragraph document whose first paragraph holds `content`; the second is somewhere for the
 * caret to depart to, which is what makes the marker engine settle. */
function figureUsj(content: MarkerObject["content"]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
      { type: "chapter", marker: "c", number: "1" },
      { type: "para", marker: "p", content },
      { type: "para", marker: "p", content: ["depart here"] },
    ],
  } as unknown as Usj;
}

/** The paste target: a verse whose prose the caret can land inside. */
const hostContent: MarkerObject["content"] = [
  { type: "verse", marker: "v", number: "18" } as unknown as MarkerObject,
  "Before after",
];

async function settle(): Promise<void> {
  await act(async () => {
    await Promise.resolve();
    await Promise.resolve();
  });
}

/** The paragraph text the editor displays, with display NBSPs read back as the plain spaces they
 * stand in for — byte ORDER is what these pins are about, not which whitespace codepoint carries a
 * separator. */
function displayText(editor: LexicalEditor): string {
  return editor
    .getEditorState()
    .read(() => $getRoot().getTextContent())
    .replaceAll(NBSP, " ");
}

/** The first paragraph's exported content, for asserting what the paste left behind. */
function firstParaContent(usj: Usj | undefined): MarkerObject["content"] {
  const para = (usj?.content ?? [])[2] as MarkerObject | undefined;
  return para?.content ?? [];
}

/** Whether the document exports a top-level `\\id` book-id PARAGRAPH — the shape a leaked `\\id`
 * token produces (a real book node is a `book`, not a `para`). */
function hasBookIdPara(usj: Usj | undefined): boolean {
  return (usj?.content ?? []).some(
    (item) =>
      typeof item === "object" &&
      (item as MarkerObject).type === "para" &&
      (item as MarkerObject).marker === "id",
  );
}

/** How many top-level chapter nodes the document exports. */
function chapterCount(usj: Usj | undefined): number {
  return (usj?.content ?? []).filter(
    (item) => typeof item === "object" && (item as MarkerObject).type === "chapter",
  ).length;
}

/**
 * Mounts a protected/unprotected Standard view over `hostContent`, dispatches `payload` as a paste
 * at the caret `$place` sets, then departs the caret and settles — the two steps the marker engine needs
 * before an exported USJ reflects a paste.
 */
async function pasteInto(
  structureProtectionMode: StructureProtectionMode,
  payload: { [mimeType: string]: string },
  $place: () => void = () => $placeMidProse(),
): Promise<{ usj: Usj | undefined; display: string; prevented: boolean }> {
  const { ref, lexical } = await mountStandardViewEditor(figureUsj(hostContent), {
    structureProtectionMode,
  });
  const { event, prevented } = pasteEvent(payload);
  await act(async () =>
    lexical.update(() => {
      $place();
      lexical.dispatchCommand(PASTE_COMMAND, event);
    }),
  );
  await settle();
  await act(async () =>
    lexical.update(() => {
      const departure = $getRoot().getChildren().filter($isParaNode)[1]?.getLastChild();
      if (departure && $isTextNode(departure)) departure.select(0, 0);
    }),
  );
  await settle();
  return { usj: ref.current?.getUsj(), display: displayText(lexical), prevented: prevented() };
}

/** The caret between `"Before "` and `"after"` — ordinary prose, nothing structural adjacent. */
function $placeMidProse(): void {
  const para = $getRoot().getChildren().filter($isParaNode)[0];
  const run = para
    .getChildren()
    .find(
      (node): node is TextNode => $isTextNode(node) && node.getTextContent().includes("Before"),
    );
  if (!run) throw new Error("expected the paragraph's `Before after` text run");
  run.select(7, 7);
}

/** The caret at the very end of the editable `\v 18 ` glyph — the same screen position as offset 0
 * of the prose that follows it, and where the app's own verse navigation parks the caret when the
 * verse's content opens with something that cannot host a point
 * (`$placeCaretAtVerseContentStart`, `ScriptureReferencePlugin.tsx`). */
function $placeAtVerseGlyphEnd(): void {
  const para = $getRoot().getChildren().filter($isParaNode)[0];
  const verse = para
    .getChildren()
    .find((node): node is TextNode => $isTextNode(node) && node.getTextContent().includes("\\v"));
  if (!verse) throw new Error("expected the paragraph's editable verse glyph");
  const end = verse.getTextContentSize();
  verse.select(end, end);
}

/**
 * A Lexical DOM-EXPORT `text/html` for a range covering `"Before "`, the figure, and `"after"` — the
 * html flavor an older Platform.Bible build's copy produced, taken from Lexical's own exporter
 * against a real loaded document so it stays honest as that export changes rather than freezing a
 * hand-typed string. Standard view no longer builds its html this way ({@link usfmToClipboardHtml}),
 * but a clipboard written by an older build, or by any foreign source that exports a DOM, still
 * looks like this.
 */
async function figureRangeHtmlExport(): Promise<string> {
  const { lexical } = await mountStandardViewEditor(
    figureUsj([hostContent[0], "Before ", figureObject, "after"]),
  );
  let html = "";
  await act(async () =>
    lexical.update(() => {
      const para = $getRoot().getChildren().filter($isParaNode)[0];
      const figureIndex = para.getChildren().findIndex((child) => child.getType() === "unknown");
      if (figureIndex < 0) throw new Error("expected the figure to load as an `unknown` node");
      // From the prose run before the figure through the end of the paragraph — a selection with
      // no paragraph or verse glyph in it, so the html carries prose and the figure and nothing
      // structural.
      para.select(figureIndex - 1, para.getChildrenSize());
      html = $getHtmlContent(lexical);
    }),
  );
  return html;
}

/**
 * P9's `XsltExtensions.EscapeComment`: every character except `a-zA-Z` becomes `%` plus four
 * uppercase hex digits, because an html comment may contain neither `--` nor `>`. Same port as
 * `paratext9Clipboard.utils.test.ts`, so the fixture below states the USFM it carries.
 */
function escapeParatext9Comment(data: string): string {
  return data.replace(
    /[^a-zA-Z]/g,
    (character) => `%${character.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`,
  );
}

/** The footnote a Paratext 9 Standard-view copy puts on the clipboard: the caller GLYPH as the
 * span's only visible text (`exclude` tells P9's own reverse transform to drop it) and the note's
 * real bytes as an escaped `usfm:` comment. Its `text/plain` is that glyph and nothing more. */
const PARATEXT_9_NOTE_USFM = `\\f + \\fr 1.18 \\ft ${CAPTION}\\f*`;
const PARATEXT_9_NOTE_HTML =
  `<span class="caller caller_big exclude showtooltip" id="caller_x" attachmentId=""` +
  ` contenteditable="false"><!--note--><!--f--><!--%002B-->` +
  `<!--usfm:${escapeParatext9Comment(PARATEXT_9_NOTE_USFM)}-->a</span>`;

describe("pasting a figure into a structure-protected Standard view", () => {
  describe("a plain-text-only payload — what a paste from a text editor delivers", () => {
    it("builds the figure under protection", async () => {
      const { usj } = await pasteInto("protected", { "text/plain": FIGURE_USFM });
      expect(firstParaContent(usj)).toEqual([hostContent[0], "Before ", figureObject, "after"]);
    });

    it("builds the same figure unprotected", async () => {
      const { usj } = await pasteInto("off", { "text/plain": FIGURE_USFM });
      expect(firstParaContent(usj)).toEqual([hostContent[0], "Before ", figureObject, "after"]);
    });
  });

  describe("a same-editor copy, whose readable flavors are both the USFM bytes", () => {
    it("builds the figure under protection", async () => {
      const { usj } = await pasteInto("protected", {
        "text/plain": FIGURE_USFM,
        "text/html": usfmToClipboardHtml(FIGURE_USFM),
      });
      expect(firstParaContent(usj)).toEqual([hostContent[0], "Before ", figureObject, "after"]);
    });

    it("builds the same figure unprotected", async () => {
      const { usj } = await pasteInto("off", {
        "text/plain": FIGURE_USFM,
        "text/html": usfmToClipboardHtml(FIGURE_USFM),
      });
      expect(firstParaContent(usj)).toEqual([hostContent[0], "Before ", figureObject, "after"]);
    });

    it("builds the figure from the html alone, so a clipboard that kept only `text/html` still carries it", async () => {
      const { usj } = await pasteInto("protected", {
        "text/html": usfmToClipboardHtml(FIGURE_USFM),
      });
      expect(firstParaContent(usj)).toEqual([hostContent[0], "Before ", figureObject, "after"]);
    });
  });

  it("inserts prose and no figure for a legacy DOM-export html with nothing beside it", async () => {
    // The shape an OLDER Platform.Bible build's clipboard has (and any foreign source whose html is
    // a Lexical DOM export): `UnknownNode.exportDOM()` returns `{ element: null }`, so the html has
    // no representation for the construct at all and its decoded text closes up around the gap.
    // Nothing can recover the figure from that payload — the point of the pin is that the paste
    // still inserts the prose the html DID carry rather than failing or inventing bytes. A real
    // Ctrl+V of such a copy also carried `text/plain`, which is why this needs an html-ONLY payload
    // to reach at all.
    const html = await figureRangeHtmlExport();
    expect(html).not.toContain(CAPTION);
    const { usj, display } = await pasteInto("protected", { "text/html": html });
    expect(display).toContain("Before Before after");
    expect(display).not.toContain(CAPTION);
    expect(JSON.stringify(usj)).not.toContain("figure");
  });

  it("refuses a paste outright at the end of the editable verse glyph, inserting nothing", async () => {
    // Structure protection's Rule 1 (`$shouldBlockSelectionReplacement`, structureKeyboard.utils.ts)
    // reads a collapsed caret inside the mutable `VerseNode` as touching a verse marker, and that
    // refusal has exactly one owner: this handler declines such a selection so
    // `StructureKeyboardPlugin`'s own block still governs it. The point is the same screen position
    // as offset 0 of the prose after the glyph, where the identical paste succeeds — so whether a
    // paste lands at the start of a verse's text depends on which of two equivalent points the
    // selection happens to hold. That equivalence gap belongs to the refusal rule, not to this
    // handler.
    const { usj, display, prevented } = await pasteInto(
      "protected",
      { "text/plain": FIGURE_USFM },
      $placeAtVerseGlyphEnd,
    );
    expect(prevented).toBe(true);
    expect(display).not.toContain(CAPTION);
    expect(firstParaContent(usj)).toEqual(hostContent);
  });
});

describe("the byte rules a structure-protected paste keeps", () => {
  it("strips a pasted `\\c`, so protection cannot be the mode that poisons the save loop", async () => {
    const { usj } = await pasteInto("protected", { "text/plain": "\\c 7 pasted chapter" });
    expect(chapterCount(usj)).toBe(1);
    expect(firstParaContent(usj)).toEqual([hostContent[0], "Before pasted chapterafter"]);
  });

  it("strips it identically when protection is off", async () => {
    const { usj } = await pasteInto("off", { "text/plain": "\\c 7 pasted chapter" });
    expect(chapterCount(usj)).toBe(1);
    expect(firstParaContent(usj)).toEqual([hostContent[0], "Before pasted chapterafter"]);
  });

  it("strips a pasted `\\id`, leaving no spurious book-id paragraph", async () => {
    const { usj } = await pasteInto("protected", { "text/plain": "\\id MAT Matthew" });
    expect(hasBookIdPara(usj)).toBe(false);
  });

  it("strips it identically when protection is off", async () => {
    const { usj } = await pasteInto("off", { "text/plain": "\\id MAT Matthew" });
    expect(hasBookIdPara(usj)).toBe(false);
  });

  it("decodes a Paratext 9 clipboard's `usfm:` comment into a real note", async () => {
    // P9's `text/plain` for this clipboard is the caller glyph `a`. Under the old decline the
    // sanitizer's html import inserted that glyph as literal text and the note was lost — in the
    // protected mode only, since an unprotected paste already decoded it.
    const { usj, display } = await pasteInto("protected", {
      "text/plain": "a",
      "text/html": PARATEXT_9_NOTE_HTML,
    });
    const note = firstParaContent(usj).find(
      (item) => typeof item !== "string" && item.type === "note",
    );
    expect(note).toBeDefined();
    expect(display).toContain(CAPTION);
  });
});
