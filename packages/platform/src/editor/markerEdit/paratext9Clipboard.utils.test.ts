/**
 * Unit pins for the Paratext 9 clipboard-html decoder. Every fixture is built the way P9's own
 * stylesheets build it — the caller-span shape comes straight from P9's own test corpus
 * (`ParatextInternalShared.Tests/UsfmUtils/UsfmUtilsTests.cs`), and {@link escapeComment} below is a
 * port of `XsltExtensions.EscapeComment` so a fixture states the USFM it means rather than a wall of
 * hex.
 *
 * The negatives matter as much as the positives: the decoder's return value REDIRECTS the paste
 * carrier away from `text/plain`, so anything it claims wrongly is a paste that ignores the
 * authoritative carrier. Word, Google Docs, this editor's own copy, and a marker-bearing P9
 * Standard-view fragment with no note in it must all come back `undefined`.
 */
import { paratext9HtmlToUsfm } from "./paratext9Clipboard.utils";
import { usfmToClipboardHtml } from "./whitespaceDisplay.plugin.utils";
import { NBSP } from "shared";

/**
 * P9's `XsltExtensions.EscapeComment`: every character except `a-zA-Z` becomes `%` plus four
 * uppercase hex digits. Ported here (rather than hand-writing escaped fixtures) so each fixture
 * below reads as the USFM it carries, and so a decoder change cannot be "fixed" by quietly
 * rewriting an opaque fixture string. Walks UTF-16 code units, as P9's `foreach (char c)` does.
 */
function escapeComment(data: string): string {
  return data
    .split("")
    .map((char) =>
      /[a-zA-Z]/.test(char)
        ? char
        : `%${char.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`,
    )
    .join("");
}

/**
 * P9's collapsed-note html: a `class="… exclude …"` span whose visible text is only the rendered
 * caller GLYPH, carrying the note's real USFM as the last of five comments (`note`, the style, the
 * escaped caller, the escaped body for the hover tooltip, then the `usfm:` fidelity comment). P9
 * assembles that comment as `\<style> <caller> <body>\<style>*` (`Standard.xslt`'s `note` template).
 */
function callerSpan(style: string, caller: string, body: string, glyph: string): string {
  const usfm = `\\${style} ${caller} ${body}\\${style}*`;
  return (
    `<span class="caller caller_big exclude showtooltip " id="caller_ID0EHB" attachmentid=""` +
    ` contenteditable="false">` +
    `<!--note--><!--${style}--><!--${escapeComment(caller)}--><!--${escapeComment(body)}-->` +
    `<!--usfm:${escapeComment(usfm)}-->${glyph}</span>`
  );
}

describe("paratext9HtmlToUsfm — notes (the bytes P9's own text/plain cannot carry)", () => {
  it("decodes a footnote with a generated `+` caller, whose text/plain is the glyph `a` alone", () => {
    expect(paratext9HtmlToUsfm(callerSpan("f", "+", "\\fr 1.1 \\ft text", "a"))).toBe(
      "\\f + \\fr 1.1 \\ft text\\f*",
    );
  });

  it("decodes a cross-reference with a `-` caller, whose glyph renders as `*`", () => {
    const html = callerSpan("x", "-", "\\xo 1:26: \\xo*\\xt 1Cor 11:7\\xt*", "*");
    expect(paratext9HtmlToUsfm(html)).toBe("\\x - \\xo 1:26: \\xo*\\xt 1Cor 11:7\\xt*\\x*");
  });

  it("decodes a literal caller, which renders as itself", () => {
    expect(paratext9HtmlToUsfm(callerSpan("f", "b", "\\ft note", "b"))).toBe("\\f b \\ft note\\f*");
  });

  it("decodes a note carrying a literal `--` and a non-ASCII character — bytes an html comment cannot hold unescaped", () => {
    const body = "\\ft an em—dash, a -- pair, and a “quote”";
    expect(paratext9HtmlToUsfm(callerSpan("f", "+", body, "a"))).toBe(`\\f + ${body}\\f*`);
  });

  it("keeps a category span P9 folds into the note's marker line", () => {
    // P9 concatenates `$category` between the caller and the body, so the decoder needs no
    // category-specific rule — the bytes arrive inside the one `usfm:` comment.
    const html = callerSpan("f", "+", "\\cat People\\cat*\\ft note", "a");
    expect(paratext9HtmlToUsfm(html)).toBe("\\f + \\cat People\\cat*\\ft note\\f*");
  });
});

describe("paratext9HtmlToUsfm — Standard-Reverse's structural rules", () => {
  it("drops an excluded subtree's text while keeping its comments and any `include` descendant", () => {
    const html =
      `<span class="exclude">glyph only` +
      `<!--usfm:${escapeComment("\\f + \\ft note\\f*")}-->` +
      `<span class="include">kept</span>and more glyph</span>`;
    expect(paratext9HtmlToUsfm(html)).toBe("\\f + \\ft note\\f*kept");
  });

  it("puts a newline around every `div` and at every `br`, and reads an NBSP separator as the space it stands for", () => {
    const html =
      `<div class="usfm_p "><span class="marker">\\p</span>&nbsp;one</div>` +
      `<div class="usfm_p "><span class="marker">\\p</span>&nbsp;two<br>three` +
      `${callerSpan("f", "+", "\\ft n", "a")}</div>`;
    expect(paratext9HtmlToUsfm(html)).toBe("\\p one\n\\p two\nthree\\f + \\ft n\\f*");
  });

  it("emits the opener and closer a `usfmopen`/`usfmclosed` class encodes, `+`-prefixed when `nested`", () => {
    // The Formatted/Preview views encode markers in classes instead of as literal text; the
    // `usfm_<name>` + `usfmopen` pair is this decoder's second signature for exactly that reason.
    const html =
      `<div class="usfm_p usfmopen">In the ` +
      `<span class="usfm_nd usfmclosed">Lord<span class="usfm_it usfmclosed nested">emph</span>` +
      `</span> reigns</div>`;
    expect(paratext9HtmlToUsfm(html)).toBe("\\p In the \\nd Lord\\+it emph\\+it*\\nd* reigns");
  });

  it("reads a `span.attribute` list as the `|…` bytes it displays", () => {
    const html =
      `<div class="usfm_p usfmopen">` +
      `<span class="usfm_fig usfmclosed">caption` +
      `<span class="attribute">|src="cn01617.jpg" size="span"</span></span></div>`;
    expect(paratext9HtmlToUsfm(html)).toBe('\\p \\fig caption|src="cn01617.jpg" size="span"\\fig*');
  });

  it("maps every NBSP to a plain space and leaves a data `~` alone", () => {
    // P9's own copy rule: an NBSP in its DOM is display whitespace, and user-supplied non-breaking
    // space reaches the clipboard as the USFM `~` byte, so nothing here needs recovering.
    const html = `<div class="usfm_p usfmopen">pay${NBSP}3~000${NBSP}${NBSP}now</div>`;
    expect(paratext9HtmlToUsfm(html)).toBe("\\p pay 3~000  now");
  });

  it("collapses newline runs and trims the outermost ones, the way every other html paste is decoded", () => {
    const html =
      `<div class="usfm_p usfmopen"><div class="usfm_q1 usfmopen">line</div></div>` +
      `<div class="usfm_p usfmopen">after</div>`;
    expect(paratext9HtmlToUsfm(html)).toBe("\\p \n\\q1 line\n\\p after");
  });

  it("decodes the marker-span spelling that carries its own trailing space, with no trailing class byte", () => {
    // P9 emits the separator as an NBSP SIBLING of the glyph span and a trailing space in the class
    // attribute (`class="usfm_p "`), but neither is load-bearing here and a clipboard intermediary
    // may normalize either away — the same fragment spelled with the space inside the span and a
    // bare class token has to decode identically. This is also the shape paranext-core's
    // Standard-view clipboard E2E puts on the real OS clipboard.
    const html =
      `<div class="usfm_p"><span class="marker">\\p </span>In the beginning` +
      `${callerSpan("f", "+", "\\fr 1.1 \\ft text", "a")} God</div>`;
    expect(paratext9HtmlToUsfm(html)).toBe("\\p In the beginning\\f + \\fr 1.1 \\ft text\\f* God");
  });

  it("decodes a note inside a real verse+paragraph fragment, note bytes in the caller's place", () => {
    const html =
      `<div class="usfm_p "><span class="marker">\\p</span>&nbsp;` +
      `<span class="usfm_v" id="cv1_1"><span class="marker">\\v</span>&nbsp;1</span>&nbsp;` +
      `In the beginning${callerSpan("f", "+", "\\fr 1.1 \\ft text", "a")} God</div>`;
    expect(paratext9HtmlToUsfm(html)).toBe(
      "\\p \\v 1 In the beginning\\f + \\fr 1.1 \\ft text\\f* God",
    );
  });
});

describe("paratext9HtmlToUsfm — html it must not claim", () => {
  it("returns undefined for Microsoft Word html", () => {
    const html =
      `<html xmlns:o="urn:schemas-microsoft-com:office:office">` +
      `<head><meta name=Generator content="Microsoft Word 15">` +
      `<style>p.MsoNormal{margin:0in;font-size:11.0pt}</style></head>` +
      `<body lang=EN-US><p class=MsoNormal><span style='font-size:11.0pt'>Hello ` +
      `<b>world</b></span></p></body></html>`;
    expect(paratext9HtmlToUsfm(html)).toBeUndefined();
  });

  it("returns undefined for Google Docs html", () => {
    const html =
      `<meta charset="utf-8"><b style="font-weight:normal;" id="docs-internal-guid-abc123">` +
      `<p dir="ltr" style="line-height:1.38;"><span style="font-size:11pt;font-family:Arial;">` +
      `Hello world</span></p></b>`;
    expect(paratext9HtmlToUsfm(html)).toBeUndefined();
  });

  it("returns undefined for this editor's own copy html", () => {
    // Built by the real producer, not a hand-written lookalike: if Standard view's `text/html`
    // shape ever changes, this negative fails instead of quietly going stale.
    const html = usfmToClipboardHtml("\\p \\v 1 In the beginning\\f + \\fr 1.1 \\ft text\\f*");
    expect(paratext9HtmlToUsfm(html)).toBeUndefined();
  });

  it("returns undefined for a marker-bearing P9 Standard-view fragment with no note in it", () => {
    // Deliberate, not an oversight: P9 renders every marker in that view as literal text, so its
    // own `text/plain` already carries the same USFM bytes and stays the authoritative carrier.
    const html = `<div class="usfm_p "><span class="marker">\\p</span>&nbsp;plain prose</div>`;
    expect(paratext9HtmlToUsfm(html)).toBeUndefined();
  });

  it("returns undefined for html carrying a non-`usfm:` comment", () => {
    // A CF_HTML wrapper's own fragment markers must not read as a P9 signature.
    const html = `<!--StartFragment--><p>Hello world</p><!--EndFragment-->`;
    expect(paratext9HtmlToUsfm(html)).toBeUndefined();
  });
});
