import {
  HIDDEN_VIEW_CLIPBOARD_NAMESPACE,
  htmlWithNodeCopy,
  LEXICAL_CLIPBOARD_TYPE,
  MARKER_TEXT_HTML_ATTRIBUTE,
  MARKER_VIEW_CLIPBOARD_NAMESPACE,
  NODE_COPY_HTML_ATTRIBUTE,
  nodeCopyIn,
  pasteSelection,
  removeMarkerTokens,
  withoutMarkerTokens,
  withoutNodeCopy,
} from "./clipboard.utils";
import { createEditor, PASTE_COMMAND, SerializedLexicalNode } from "lexical";

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

describe("the node copy in a copy's html", () => {
  const transfer = (flavors: { [type: string]: string }) => ({
    getData: (type: string) => flavors[type] ?? "",
  });
  const node = (text: string) =>
    ({ type: "text", version: 1, text }) as unknown as SerializedLexicalNode;
  const copyOf = (nodes: SerializedLexicalNode[], namespace = HIDDEN_VIEW_CLIPBOARD_NAMESPACE) =>
    JSON.stringify({ namespace, nodes });

  it.each([
    ["a double quote", 'say "hi"'],
    ["an apostrophe", "it's"],
    ["angle brackets", "a <b> c"],
    ["an ampersand and what looks like an entity", "a & b &amp; &quot;"],
    ["a backslash", "c:\\pics \\nd"],
    [
      "Hebrew, with its points",
      "\u05D1\u05B0\u05BC\u05E8\u05B5\u05D0\u05E9\u05C1\u05B4\u05D9\u05EA",
    ],
    ["a no-break space", "a\u00A0b"],
    ["a line break and a tab", "a\nb\tc"],
    ["markup that closes the attribute", '"></span><script>alert(1)</script>'],
  ])("carries %s exactly", (_name, text) => {
    const nodes = [node(text)];

    const html = htmlWithNodeCopy("<span>shown</span>", copyOf(nodes));

    expect(nodeCopyIn(transfer({ "text/html": html }), HIDDEN_VIEW_CLIPBOARD_NAMESPACE)).toEqual(
      nodes,
    );
  });

  it("leaves what the html shows as it was", () => {
    const html = htmlWithNodeCopy("<p>one</p><p>two</p>", copyOf([node("x")]));

    const { body } = new DOMParser().parseFromString(html, "text/html");

    expect(body.textContent).toBe("onetwo");
    expect(body.querySelectorAll("p")).toHaveLength(2);
    // An inline wrapper: Lexical's html import makes a block wrapper's inline children a paragraph.
    expect(body.firstElementChild?.tagName).toBe("SPAN");
  });

  it("is passed over for a node copy flavor, which any native paste carries", () => {
    const html = htmlWithNodeCopy("<span>shown</span>", copyOf([node("from the html")]));

    const data = transfer({
      "text/html": html,
      [LEXICAL_CLIPBOARD_TYPE]: copyOf([node("from the flavor")]),
    });

    expect(nodeCopyIn(data, HIDDEN_VIEW_CLIPBOARD_NAMESPACE)).toEqual([node("from the flavor")]);
  });

  it("answers for its own namespace only", () => {
    const html = htmlWithNodeCopy("<span>shown</span>", copyOf([node("x")]));

    expect(nodeCopyIn(transfer({ "text/html": html }), "another namespace")).toBeUndefined();
  });

  it.each([
    ["JSON that does not parse", `<span ${NODE_COPY_HTML_ATTRIBUTE}="{not json">x</span>`],
    ["an empty value", `<span ${NODE_COPY_HTML_ATTRIBUTE}="">x</span>`],
    [
      "JSON with no nodes",
      `<span ${NODE_COPY_HTML_ATTRIBUTE}="{&quot;namespace&quot;:1}">x</span>`,
    ],
    ["JSON that is not an object", `<span ${NODE_COPY_HTML_ATTRIBUTE}="null">x</span>`],
    ["the attribute's name as text alone", `<span>${NODE_COPY_HTML_ATTRIBUTE}="[]"</span>`],
  ])("finds no node copy in %s", (_name, html) => {
    expect(
      nodeCopyIn(transfer({ "text/html": html }), HIDDEN_VIEW_CLIPBOARD_NAMESPACE),
    ).toBeUndefined();
  });

  it("does not parse html that does not name the attribute", () => {
    const parse = vi.spyOn(DOMParser.prototype, "parseFromString");
    try {
      const data = transfer({ "text/html": "<p>an ordinary paste</p>", "text/plain": "ordinary" });

      expect(nodeCopyIn(data, HIDDEN_VIEW_CLIPBOARD_NAMESPACE)).toBeUndefined();
      expect(withoutNodeCopy(data as DataTransfer)).toBe(data);
      expect(withoutMarkerTokens(data as DataTransfer)).toBe(data);
      expect(parse).not.toHaveBeenCalled();
    } finally {
      parse.mockRestore();
    }
  });

  it("is gone from the transfer `withoutNodeCopy` returns, so its html goes in as html", () => {
    const html = htmlWithNodeCopy("<span>shown</span>", copyOf([node("x")]));
    const data = transfer({ "text/html": html, "text/plain": "shown" }) as DataTransfer;

    const without = withoutNodeCopy(data);

    expect(nodeCopyIn(without, HIDDEN_VIEW_CLIPBOARD_NAMESPACE)).toBeUndefined();
    expect(without.getData("text/html")).not.toContain(NODE_COPY_HTML_ATTRIBUTE);
    expect(without.getData("text/html")).toContain("<span>shown</span>");
    expect(without.getData("text/plain")).toBe("shown");
  });

  it("leaves html that showed nothing empty, so a paste takes the plain text", () => {
    const html = htmlWithNodeCopy("", copyOf([node("x")]));
    const data = transfer({ "text/html": html, "text/plain": "shown" }) as DataTransfer;

    expect(withoutNodeCopy(data).getData("text/html")).toBe("");
  });

  describe("through the clipboard read a Ctrl+V starts with", () => {
    afterEach(() => vi.unstubAllGlobals());

    it("reaches the paste whole: only a tab outside its JSON becomes a space", async () => {
      const nodes = [node('a\tb \\nd "q" \u05D0')];
      const html = htmlWithNodeCopy("<span>a\tb</span>", copyOf(nodes));
      const flavors: { [type: string]: string } = { "text/html": html, "text/plain": "a\tb" };
      vi.stubGlobal("navigator", {
        permissions: { query: () => Promise.resolve({ state: "granted" }) },
        clipboard: {
          read: () =>
            Promise.resolve([
              {
                types: Object.keys(flavors),
                getType: (type: string) => Promise.resolve(new Blob([flavors[type]])),
              },
            ]),
        },
      });
      // jsdom has neither of these: all the read does with them is hand the flavors to the command.
      vi.stubGlobal(
        "DataTransfer",
        class {
          data = new Map<string, string>();
          setData(type: string, value: string) {
            this.data.set(type, value);
          }
          getData(type: string) {
            return this.data.get(type) ?? "";
          }
        },
      );
      const editor = createEditor({
        onError: (error) => {
          throw error;
        },
      });
      const pasted = new Promise<DataTransfer>((resolve) => {
        const dispatch = vi.spyOn(editor, "dispatchCommand");
        dispatch.mockImplementation((command, payload) => {
          if (command === PASTE_COMMAND)
            resolve((payload as ClipboardEvent).clipboardData as DataTransfer);
          return true;
        });
      });
      vi.stubGlobal(
        "ClipboardEvent",
        class {
          clipboardData: DataTransfer;
          constructor(_type: string, init: { clipboardData: DataTransfer }) {
            this.clipboardData = init.clipboardData;
          }
        },
      );

      pasteSelection(editor);
      const data = await pasted;

      expect(nodeCopyIn(data, HIDDEN_VIEW_CLIPBOARD_NAMESPACE)).toEqual(nodes);
      expect(data.getData("text/plain")).toBe("a b");
    });
  });
});

describe("html marked as a marker view's text", () => {
  const data = (html: string, plain: string) =>
    ({
      getData: (type: string) => (type === "text/html" ? html : type === "text/plain" ? plain : ""),
    }) as DataTransfer;

  it("loses its marker tokens with no node copy on the transfer", () => {
    const usfmHtml = `<p ${MARKER_TEXT_HTML_ATTRIBUTE}><span>1 \\ft TR</span></p>`;

    const result = withoutMarkerTokens(data(usfmHtml, "1 \\ft TR"));

    expect(result?.getData("text/plain")).toBe("1 TR");
    expect(result?.getData("text/html")).toContain("1 TR");
    expect(result?.getData("text/html")).not.toContain("\\ft");
  });

  it("holding nothing but marker tokens has nothing to insert", () => {
    const usfmHtml = `<p ${MARKER_TEXT_HTML_ATTRIBUTE}><span>\\ft </span></p>`;

    expect(withoutMarkerTokens(data(usfmHtml, "\\ft "))).toBeUndefined();
  });

  it("is not recognized from the mark's name written as text", () => {
    const transfer = data(`<p>${MARKER_TEXT_HTML_ATTRIBUTE} \\ft x</p>`, "\\ft x");

    expect(withoutMarkerTokens(transfer)).toBe(transfer);
  });
});
