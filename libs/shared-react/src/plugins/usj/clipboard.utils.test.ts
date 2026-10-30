import {
  HIDDEN_VIEW_CLIPBOARD_NAMESPACE,
  LEXICAL_CLIPBOARD_TYPE,
  MARKER_VIEW_CLIPBOARD_NAMESPACE,
  removeMarkerTokens,
  withoutMarkerTokens,
} from "./clipboard.utils";

describe("removeMarkerTokens", () => {
  it.each([
    ["an opening marker and its one separator space", "1 \\ft TR and ", "1 TR and "],
    ["only one separator space", "\\ft  two", " two"],
    ["a closer, keeping the space after it", "\\nd Lord\\nd* said", "Lord said"],
    ["a nested marker and its closer", "\\+nd Lord\\+nd*", "Lord"],
    ["a numbered marker", "\\q1 line", "line"],
    ["a milestone name and its bare closer", "a\\qt-s\\*b", "ab"],
    ["a bare backslash", "a\\", "a"],
    ["a backslash in an attribute value, as a marker", 'src="c:\\pics\\a.jpg"', 'src="c:.jpg"'],
    ["markers on each line, keeping the line breaks", "\\p one\n\\q1 two", "one\ntwo"],
  ])("removes %s", (_name, text, expected) => {
    expect(removeMarkerTokens(text)).toBe(expected);
  });

  it.each([
    ["the space after a bare backslash", "a\\ b", "a b"],
    ["the space after the nameless marker", "\\ text", " text"],
    ["the space after two backslashes in a row", "a\\\\ b", "a b"],
    ["the space after a nameless nested marker", "\\+ x", " x"],
    ["the space after a bare closer", "\\* x", " x"],
    ["a verse number", "\\v 9 x", "9 x"],
    ["a note's caller", "\\f + \\fr 1:1 \\ft note\\f*", "+ 1:1 note"],
    ["an attribute list", '\\w word|lemma="x"\\w*', 'word|lemma="x"'],
    ["a milestone's attribute list", '\\qt-s |who="x"\\*', '|who="x"'],
    ["a byte the marker name class does not hold", "\\é x", "é x"],
    ["a no-break space after a marker", "\\ft\u00A0x", "\u00A0x"],
    ["a lone slash and a `//`", "\\ft a/b // c", "a/b // c"],
    ["text with no marker at all", "plain text ", "plain text "],
  ])("keeps %s as text", (_name, text, expected) => {
    expect(removeMarkerTokens(text)).toBe(expected);
  });
});

describe("withoutMarkerTokens", () => {
  function transfer(flavors: { [type: string]: string }): DataTransfer {
    return { getData: (type: string) => flavors[type] ?? "" } as unknown as DataTransfer;
  }
  const nodeCopy = (namespace: string) => JSON.stringify({ namespace, nodes: [] });
  const USFM_HTML = '<p><span style="white-space: pre-wrap;">1 \\ft a &amp; \\nd b\\nd*</span></p>';

  it("removes the tokens from the html and plain text of a marker view's copy", () => {
    const stripped = withoutMarkerTokens(
      transfer({
        [LEXICAL_CLIPBOARD_TYPE]: nodeCopy(MARKER_VIEW_CLIPBOARD_NAMESPACE),
        "text/html": USFM_HTML,
        "text/plain": "1 \\ft a & \\nd b\\nd*",
      }),
    );

    expect(stripped?.getData("text/plain")).toBe("1 a & b");
    const dom = new DOMParser().parseFromString(stripped?.getData("text/html") ?? "", "text/html");
    expect(dom.querySelectorAll("p")).toHaveLength(1);
    expect(dom.querySelector("span")?.getAttribute("style")).toBe("white-space: pre-wrap;");
    expect(dom.body.textContent).toBe("1 a & b");
  });

  it("leaves a backslash in an html attribute or comment alone", () => {
    const stripped = withoutMarkerTokens(
      transfer({
        [LEXICAL_CLIPBOARD_TYPE]: nodeCopy(MARKER_VIEW_CLIPBOARD_NAMESPACE),
        "text/html": '<p title="\\keep"><!--\\keep-->\\ft x</p>',
        "text/plain": "\\ft x",
      }),
    );

    const html = stripped?.getData("text/html");
    expect(html).toContain('<p title="\\keep"><!--\\keep-->x</p>');
  });

  it("passes every other flavor through", () => {
    const flavor = nodeCopy(MARKER_VIEW_CLIPBOARD_NAMESPACE);
    const stripped = withoutMarkerTokens(
      transfer({
        [LEXICAL_CLIPBOARD_TYPE]: flavor,
        "text/plain": "\\ft x",
        "text/uri-list": "\\y",
      }),
    );

    expect(stripped?.getData(LEXICAL_CLIPBOARD_TYPE)).toBe(flavor);
    expect(stripped?.getData("text/uri-list")).toBe("\\y");
  });

  it.each([
    ["no node copy", {}],
    ["a hidden-marker view's node copy", { ns: HIDDEN_VIEW_CLIPBOARD_NAMESPACE }],
    ["another editor's node copy", { ns: "someOtherEditor" }],
  ])("returns a transfer with %s as it is", (_name, { ns }: { ns?: string }) => {
    const data = transfer({
      ...(ns && { [LEXICAL_CLIPBOARD_TYPE]: nodeCopy(ns) }),
      "text/html": "<p>\\v 9 x</p>",
      "text/plain": "\\v 9 x",
    });

    expect(withoutMarkerTokens(data)).toBe(data);
  });

  it("returns a transfer whose node copy cannot be read as it is", () => {
    const data = transfer({ [LEXICAL_CLIPBOARD_TYPE]: "{not json", "text/plain": "\\v 9 x" });

    expect(withoutMarkerTokens(data)).toBe(data);
  });

  it.each([
    ["one marker", "\\ft ", "<p><span>\\ft </span></p>"],
    ["markers on several lines", "\\p \n\\q1 ", "<p>\\p </p><p>\\q1 </p>"],
    ["html alone", "", "<p>\\ft </p>"],
  ])("returns `undefined` for a copy of nothing but %s", (_name, plain, html) => {
    const data = transfer({
      [LEXICAL_CLIPBOARD_TYPE]: nodeCopy(MARKER_VIEW_CLIPBOARD_NAMESPACE),
      "text/html": html,
      "text/plain": plain,
    });

    expect(withoutMarkerTokens(data)).toBeUndefined();
  });

  it("does not take the space after a bare backslash for nothing left", () => {
    const stripped = withoutMarkerTokens(
      transfer({
        [LEXICAL_CLIPBOARD_TYPE]: nodeCopy(MARKER_VIEW_CLIPBOARD_NAMESPACE),
        "text/plain": "\\ ",
      }),
    );

    expect(stripped?.getData("text/plain")).toBe(" ");
  });

  it("keeps a space a marker's separator leaves behind", () => {
    const stripped = withoutMarkerTokens(
      transfer({
        [LEXICAL_CLIPBOARD_TYPE]: nodeCopy(MARKER_VIEW_CLIPBOARD_NAMESPACE),
        "text/plain": "\\ft  ",
      }),
    );

    expect(stripped?.getData("text/plain")).toBe(" ");
  });
});
