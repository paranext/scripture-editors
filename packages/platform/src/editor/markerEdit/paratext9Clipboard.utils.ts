/**
 * Decoder for a Paratext 9 scripture-editor clipboard's `text/html` carrier.
 *
 * P9's clipboard is HTML-FIRST. Its copy (`CopySelectionToClipboard`,
 * `HtmlEditor/FirefoxHtmlEditor/IHtmlEditorCopyPaste.cs`) writes `text/plain` as the selection's
 * VISIBLE DOM text with NBSP→space, and `CF_HTML` as the selected range's serialized DOM fragment;
 * its paste converts that fragment back to USFM through the view's reverse XSLT
 * (`ParatextInternalShared/ScriptureViews/Standard-Reverse.xslt`). For anything P9 renders as
 * literal marker text — a paragraph's `\p `, a verse's `\v 1`, a char span's `\nd …\nd*` — the two
 * carriers say the same thing. For a NOTE they do not: a collapsed note renders as its caller glyph
 * alone (`a`, or `*` for a `-` caller) inside a `class="… exclude …"` span, and the note's real
 * bytes ride the fragment as an escaped `<!--usfm:…-->` comment. So P9's `text/plain` for a
 * footnote is the single character `a`, and reading it loses the whole note.
 *
 * {@link paratext9HtmlToUsfm} is the reverse-XSLT half of that model, so a P9→P10 paste recovers
 * what only the html carries. It implements Standard-Reverse's rules over the DOM directly:
 *
 * - `text()` contributes its bytes.
 * - A `<!--usfm:…-->` comment contributes its UNESCAPED USFM, with newlines flattened to spaces
 *   (P9's own `translate(…, '&#x0A;', ' ')`); every other comment contributes nothing.
 * - An element whose class contains `exclude` contributes NO text of its own or of its descendants
 *   — but their COMMENTS still do, and a descendant whose class contains `include` is processed
 *   normally again. This is what turns the caller-glyph span into the note's real bytes.
 * - `div` and `tr` put a newline before and after themselves; `br` is a newline.
 * - `span[class="attribute"]` contributes its text (a char span's `|src="…" size="span"` list).
 * - An element whose class contains `usfmopen`/`usfmclosed` emits `\<name> ` before and `\<name>*`
 *   after its content, where `<name>` comes from its own `usfm_<name>` class token and gains a `+`
 *   prefix when the class also contains `nested`.
 *
 * Two deliberate departures from the stylesheet, both documented at their site:
 * {@link markerNameFromClass} reads the `usfm_`-prefixed class TOKEN where P9 does literal
 * substring arithmetic, and the `usfmopen` emitter ignores `@colspan` (P9 re-encodes a table cell's
 * span into its marker name there). Neither can differ on html P9 actually writes for the
 * marker-bearing Standard view; see each comment for which shape they would differ on.
 *
 * NOT implemented: P9's `span[@id^='ruby:']` ruby-gloss reconstruction (`createRubyUsfm`,
 * `Base.xslt`), which needs the project's own ruby settings to rebuild `\rb …|gloss` bytes from the
 * rendered furigana. A ruby span therefore decodes as the plain text it displays.
 */

import { NBSP } from "shared";

/** The comment-data prefix marking P9's escaped-USFM fidelity comment. */
const USFM_COMMENT_PREFIX = "usfm:";

/** P9 inserts U+FEFF purely for caret positioning and strips it on every reformat, so it is never
 * document data. */
const ZERO_WIDTH_NO_BREAK_SPACE = "\uFEFF";

/** The `usfm_<name>` class token P9 stamps on every marker-bearing element. Requires at least one
 * name byte, so a bare `usfm_` (or the `usfm` wrapper class on P9's root div) is not a match. */
const MARKER_CLASS = /^usfm_(.+)$/;

/** True for a DOM node that is an element, so its `classList`/`tagName` can be read without a type
 * assertion. `Node` exposes neither, and the walk below has to branch on all three node kinds. */
function isElement(node: Node): node is Element {
  return node.nodeType === Node.ELEMENT_NODE;
}

/**
 * Reverses P9's comment escaping (`XsltExtensions.EscapeComment`, `ParatextInternalShared/
 * XsltExtensions.cs`): every character except `a-zA-Z` is written as `%` plus four uppercase hex
 * digits, so `\f + \fr 1.1 \ft text\f*` travels as
 * `%005Cf%0020%002B%0020%005Cfr%0020…`. The escape exists because an html comment may contain
 * neither `--` nor `>`; it is why a note body can carry any byte at all, including a literal `--`.
 *
 * Matches either hex case, as P9's own `Int32.Parse(…, AllowHexSpecifier)` does. A `%` the pattern
 * does not complete stays literal, and a DECODED `%` (from `%0025`) is never rescanned — `replace`
 * walks the original string, exactly like P9's index loop.
 */
function unescapeComment(escaped: string): string {
  return escaped.replace(/%([0-9a-fA-F]{4})/g, (_match, hex: string) =>
    String.fromCharCode(Number.parseInt(hex, 16)),
  );
}

/** The USFM a comment contributes: an escaped `usfm:` comment's own bytes with newlines flattened
 * to spaces, or `""` for every other comment (P9's tooltip/caller/style comments, and a CF_HTML
 * wrapper's own `StartFragment`/`EndFragment` markers).
 *
 * EVERY line-ending shape is flattened, `\r\n` and a bare `\r` included — the escaped bytes carry
 * whatever the note held, and P9 escapes a CR as `%000D`. A note's USFM has to come back as ONE
 * line: the decoder's own tail normalizes a surviving `\r` into a `\n`, which a paste then replays
 * as a paragraph split, leaving an unterminated `\f` on one line and orphaned note text on the
 * next. */
function usfmFromComment(data: string): string {
  if (!data.startsWith(USFM_COMMENT_PREFIX)) return "";
  return unescapeComment(data.slice(USFM_COMMENT_PREFIX.length)).replace(/\r\n?|\n/g, " ");
}

/**
 * The marker name encoded in an element's class list — the remainder of its `usfm_<name>` token.
 *
 * P9 spells this as `substring-before(substring-after(@class, 'usfm_'), ' ')`, which reads the
 * bytes after the first `usfm_` up to the next SPACE and therefore yields `""` when the
 * `usfm_`-prefixed token happens to be last in the class attribute. Reading the token itself is the
 * same answer for every class list P9 writes (it always emits `usfm_{style}` first, followed by a
 * space) and avoids emitting a nameless `\ ` marker pair for the ordering it does not.
 */
function markerNameFromClass(element: Element): string | undefined {
  for (const token of element.classList) {
    const match = MARKER_CLASS.exec(token);
    if (match) return match[1];
  }
  return undefined;
}

/** The marker name an `usfmopen`/`usfmclosed` element emits, `+`-prefixed for a nested char style
 * (P9 gates that prefix on its `usePlusOnNestedStyles` parameter, which every project at USFM 3.1
 * or later has on). `undefined` when the element carries no marker-name class to emit. */
function openClosedMarkerName(element: Element): string | undefined {
  const name = markerNameFromClass(element);
  if (name === undefined) return undefined;
  return element.classList.contains("nested") ? `+${name}` : name;
}

/**
 * Whether `html` came from a Paratext 9 scripture-editor view, and therefore carries USFM this
 * decoder can read that its own `text/plain` does not.
 *
 * The signature is deliberately NARROW — it must never fire on a word processor's, a browser's, or
 * this editor's own html, because firing routes the paste away from the `text/plain` carrier every
 * other source is authoritative in. Two shapes qualify:
 *
 * 1. A comment whose data starts with `usfm:`. Nothing but P9's own stylesheets writes one, and it
 *    is exactly the carrier P9's `text/plain` cannot express (a note's bytes; in the Formatted
 *    views, a verse's and a chapter's too).
 * 2. An element carrying BOTH a `usfm_<name>` class and `usfmopen`/`usfmclosed`. P9's
 *    Formatted/Preview views encode a marker's opener and closer in those classes rather than as
 *    literal text, so such a fragment needs decoding even with no comment in it. Platform.Bible's
 *    own DOM export stamps `usfm_<marker>` classes too, so the `usfmopen`/`usfmclosed` half is what
 *    keeps this clause off P10's own html — no P10 node emits either class.
 *
 * A P9 STANDARD-view fragment with no note in it matches NEITHER, on purpose rather than by
 * omission: P9 renders every marker there as real text, so its `text/plain` already IS the same
 * USFM bytes this decoder would produce, and the presence rule ({@link getPastePayload}
 * in `whitespaceDisplay.plugin.utils.ts`) is free to keep preferring it.
 */
function hasParatext9Signature(body: HTMLElement): boolean {
  const comments = body.ownerDocument.createTreeWalker(body, NodeFilter.SHOW_COMMENT);
  for (let node = comments.nextNode(); node; node = comments.nextNode())
    if ((node.nodeValue ?? "").startsWith(USFM_COMMENT_PREFIX)) return true;
  for (const element of body.querySelectorAll("*")) {
    const { classList } = element;
    if (!classList.contains("usfmopen") && !classList.contains("usfmclosed")) continue;
    if (markerNameFromClass(element) !== undefined) return true;
  }
  return false;
}

/** Appends the USFM `node` contributes to `out`. `excluded` is P9's reverse-XSLT `exclude` MODE: a
 * subtree whose text is suppressed while its comments (and any `include` descendant) still
 * contribute. */
function appendNodeUsfm(node: Node, excluded: boolean, out: string[]): void {
  if (node.nodeType === Node.TEXT_NODE) {
    if (!excluded) out.push(node.nodeValue ?? "");
    return;
  }
  // A comment contributes identically in both modes: P9's exclude-mode comment template re-applies
  // the node in the DEFAULT mode, which is what lets a suppressed caller span still emit the note.
  if (node.nodeType === Node.COMMENT_NODE) {
    out.push(usfmFromComment(node.nodeValue ?? ""));
    return;
  }
  if (!isElement(node)) return;
  const { classList } = node;
  const appendChildren = (childrenExcluded: boolean) =>
    node.childNodes.forEach((child) => appendNodeUsfm(child, childrenExcluded, out));
  if (excluded) {
    // `include` hands the subtree back to normal processing. P9 applies its templates to the
    // element's CHILDREN, so the `include` element's own marker/newline bytes are not emitted.
    appendChildren(!classList.contains("include"));
    return;
  }
  if (classList.contains("exclude")) {
    // Same shape in reverse: the `exclude` template replaces whatever template the element would
    // otherwise have matched, so an excluded `div` contributes no newlines and an excluded
    // `usfmopen` span no marker bytes — only its descendants' comments survive.
    appendChildren(true);
    return;
  }
  const tag = node.tagName.toLowerCase();
  if (tag === "br") {
    out.push("\n");
    return;
  }
  // `span[@class='attribute']` is matched on the EXACT class, and reads the element's whole string
  // value — P9 does this so a partially-highlighted attribute list still round-trips complete.
  if (tag === "span" && node.getAttribute("class") === "attribute") {
    out.push(node.textContent ?? "");
    return;
  }
  const isBlock = tag === "div" || tag === "tr";
  // Only the tags Standard-Reverse gives a template to emit marker bytes; everything else
  // (`table`, `tbody`, `body`, and any wrapper a clipboard intermediary added) falls through to
  // XSLT's built-in "recurse into children" behavior.
  const marker =
    isBlock || tag === "span" || tag === "th" || tag === "td"
      ? openClosedMarkerName(node)
      : undefined;
  const opens = marker !== undefined && classList.contains("usfmopen");
  const closes = marker !== undefined && classList.contains("usfmclosed");
  if (isBlock) out.push("\n");
  // P9 re-encodes a table cell's `@colspan` into the emitted marker name here
  // (`ScrStylesheet.RangeMarker`: `\tc1` + colspan 3 → `\tc1-3`). Not implemented: only the
  // Formatted and Preview views ever put `usfmopen` on a cell, and a copy from those is not a
  // verified path (see docs/clipboard-semantics.md).
  if (opens || closes) out.push(`\\${marker} `);
  appendChildren(false);
  if (closes) out.push(`\\${marker}*`);
  if (isBlock) out.push("\n");
}

/**
 * The USFM a Paratext 9 clipboard's `text/html` means, or `undefined` when `html` is not a P9
 * scripture-editor fragment ({@link hasParatext9Signature}) and its own `text/plain` should
 * therefore stay authoritative.
 *
 * Every NBSP in the result becomes a plain space. That is P9's own copy rule, stated in
 * `CopySelectionToClipboard`'s comment: NBSPs are "added to HTML for display purposes and not user
 * data" — its stylesheets emit one after every opening marker and after every verse number — and
 * "user supplied NBSP will be converted to ~ before text is displayed", so a genuine data NBSP
 * reaches the clipboard as the `~` byte and needs no recovery. A U+FEFF zero-width no-break space is dropped for the same
 * reason (P9 inserts them purely for caret positioning and strips them on every reformat).
 *
 * Newline runs are then collapsed and the outermost ones trimmed — P9 defers the same cleanup to
 * its own `NormalizeUsfm` pass ("Double returns and initial returns will be stripped out later"),
 * and it matches what `htmlPasteText` does for every other html source, so a P9 paste splits into
 * the same line shape every other multi-line paste does.
 */
export function paratext9HtmlToUsfm(html: string): string | undefined {
  // DOMParser yields an inert document: parsing never executes scripts or loads subresources, and
  // no node from the parsed document is ever adopted into the live DOM — only text is read out.
  const { body } = new DOMParser().parseFromString(html, "text/html");
  body.querySelectorAll("script,style,template").forEach((element) => element.remove());
  if (!hasParatext9Signature(body)) return undefined;
  const out: string[] = [];
  body.childNodes.forEach((child) => appendNodeUsfm(child, false, out));
  return out
    .join("")
    .replaceAll(ZERO_WIDTH_NO_BREAK_SPACE, "")
    .replaceAll(NBSP, " ")
    .replace(/\r\n?/g, "\n")
    .replace(/\n+/g, "\n")
    .replace(/^\n|\n$/g, "");
}
