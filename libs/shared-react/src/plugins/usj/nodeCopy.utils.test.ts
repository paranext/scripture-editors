import { usjReactNodes } from "../../nodes/usj";
import { $nodesFromNodeCopy } from "./nodeCopy.utils";
import { createEditor, SerializedLexicalNode } from "lexical";
import { MARKER_TRAILING_SPACE_TEXT_TYPE, NODE_ATTRIBUTE_PREFIX } from "shared";

function element(type: string, children: object[] = [], fields: object = {}): object {
  return { type, version: 1, children, direction: null, format: "", indent: 0, ...fields };
}

function text(content: string, fields: object = {}): object {
  return {
    type: "text",
    version: 1,
    text: content,
    detail: 0,
    format: 0,
    mode: "normal",
    style: "",
    ...fields,
  };
}

function para(children: object[], fields: object = {}): object {
  return element("para", children, { marker: "p", textFormat: 0, textStyle: "", ...fields });
}

function char(marker: string, children: object[], fields: object = {}): object {
  return element("char", children, { marker, ...fields });
}

function note(children: object[], fields: object = {}): object {
  return element("note", children, { marker: "f", caller: "+", isCollapsed: false, ...fields });
}

function noteCaller(fields: object = {}): object {
  return { type: "immutable-note-caller", version: 1, caller: "+", previewText: "", ...fields };
}

function verse(number: string, fields: object = {}): object {
  return { type: "immutable-verse", version: 1, marker: "v", number, ...fields };
}

function chapter(fields: object = {}): object {
  return { type: "immutable-chapter", version: 1, marker: "c", number: "1", ...fields };
}

function milestone(fields: object = {}): object {
  return { type: "ms", version: 1, marker: "qt-s", sid: "q1", ...fields };
}

function unmatched(marker: string, fields: object = {}): object {
  return { type: "unmatched", version: 1, marker, ...fields };
}

function table(cellFields: object = {}): object {
  return element("immutable-table", [
    element(
      "immutable-table-row",
      [element("immutable-table-cell", [], { marker: "tc1", ...cellFields })],
      {
        marker: "tr",
      },
    ),
  ]);
}

/** `inner` inside `depth` char spans. */
function nested(depth: number, inner: object): object {
  let node = inner;
  for (let level = 0; level < depth; level += 1) node = char("w", [node]);
  return node;
}

/** What `$nodesFromNodeCopy` makes of `nodes`: how many nodes, or the warning it refused them with. */
function read(nodes: object[]): { made?: number; warning?: string } {
  const editor = createEditor({
    nodes: [...usjReactNodes],
    onError: (error) => {
      throw error;
    },
  });
  const warn = vi.fn();
  let made: number | undefined;
  editor.update(
    () => {
      made = $nodesFromNodeCopy(nodes as SerializedLexicalNode[], {
        warn,
        error: vi.fn(),
        info: vi.fn(),
        debug: vi.fn(),
      })?.length;
    },
    { discrete: true },
  );
  const warning = warn.mock.calls[0]?.[0] as string | undefined;
  return { made, warning };
}

describe("$nodesFromNodeCopy", () => {
  it("makes the nodes of a copy holding what a hidden-marker view's document holds", () => {
    const nodes = [
      para(
        [
          verse("2-3a"),
          text("a", { mode: "token", detail: 2, $: { isAuthoredNbsp: true } }),
          char("w", [text("word")], { unknownAttributes: { lemma: "x", closed: "false" } }),
          note(
            [
              noteCaller(),
              char("ft", [text(" ", { $: { textType: MARKER_TRAILING_SPACE_TEXT_TYPE } })]),
            ],
            {
              category: "things",
            },
          ),
          milestone({ attributeOrder: ["who", "sid"], unknownAttributes: { who: "Jesus" } }),
          unmatched("+nd*"),
          { type: "tab", version: 1, text: "\t", detail: 2, format: 0, mode: "normal", style: "" },
          { type: "linebreak", version: 1 },
          element("unknown", [], {
            tag: "figure",
            marker: "fig",
            unknownAttributes: { src: "a.png" },
          }),
        ],
        { $: { startsMidParagraph: true } },
      ),
      element("unknown", [para([text("side")])], {
        tag: "sidebar",
        marker: "esb",
        unknownAttributes: { category: "things" },
      }),
      table({ align: "start", colspan: "2" }),
      chapter({ altnumber: "2", pubnumber: "B", showMarker: false }),
    ];

    expect(read(nodes)).toEqual({ made: nodes.length, warning: undefined });
  });

  it("makes the nodes of a copy nested as deep as it may", () => {
    expect(read([para([nested(30, text("deep"))])]).made).toBe(1);
  });

  it.each([
    // Placement.
    ["a note caller outside a note", [para([noteCaller()])], "immutable-note-caller"],
    [
      "a table row outside a table",
      [element("immutable-table-row", [], { marker: "tr" })],
      "immutable-table-row",
    ],
    ["a paragraph in a paragraph", [para([para([])])], '"para" node in'],
    ["a leaf holding children", [para([{ ...verse("1"), children: [] }])], "holding children"],
    ["nesting deeper than any document", [para([nested(32, text("deep"))])], "nesting deeper"],
    // Types and tags.
    ["the root", [element("root")], '"root" node'],
    [
      "an unknown tag no USJ holds",
      [para([element("unknown", [], { tag: "script" })])],
      'an unknown "script" node',
    ],
    // Markers.
    ["a char marker with a space", [para([char("a b", [])])], 'char marker "a b"'],
    ["a paragraph marked as a verse", [para([], { marker: "v" })], 'paragraph marker "v"'],
    [
      "an unknown node's marker with a space",
      [para([element("unknown", [], { tag: "ref", marker: "a b" })])],
      "unknown marker",
    ],
    [
      "a book line with no book code",
      [element("book", [], { marker: "id", code: "XYZ" })],
      "book line",
    ],
    ["a chapter marked as something else", [chapter({ marker: "p" })], "chapter that is not one"],
    // Numbers and saved fields.
    ["a verse number holding a verse", [para([verse("2\\v 3")])], "verse number"],
    [
      "a verse that shows its marker as text",
      [para([verse("2", { showMarker: "yes" })])],
      "showMarker",
    ],
    ["a milestone id holding a marker", [para([milestone({ sid: "a\\b" })])], "milestone sid"],
    [
      "a note category holding a line break",
      [para([note([noteCaller()], { category: "a\nb" })])],
      "note category",
    ],
    [
      "a note collapsed as text",
      [para([note([noteCaller()], { isCollapsed: "yes" })])],
      "isCollapsed",
    ],
    ["a table cell alignment holding a marker", [table({ align: "\\v 1" })], "table cell align"],
    [
      "a note caller unlike its note's",
      [para([note([noteCaller({ caller: "x" })])])],
      "not its note's",
    ],
    [
      "a note caller with a click handler",
      [para([note([noteCaller({ onClick: {} })])])],
      "not its note's",
    ],
    [
      "a note caller's preview that is not text",
      [para([note([noteCaller({ previewText: 5 })])])],
      "previewText",
    ],
    // Attributes.
    [
      "an attribute name with a space",
      [para([char("w", [], { unknownAttributes: { "a b": "c" } })])],
      "attributes",
    ],
    [
      "an attribute value that is not text",
      [para([char("w", [], { unknownAttributes: { x: 1 } })])],
      "attributes",
    ],
    [
      "an attribute named for a char's marker",
      [para([char("w", [], { unknownAttributes: { marker: "a b" } })])],
      "attributes",
    ],
    [
      "an attribute named for a char's type",
      [para([char("w", [], { unknownAttributes: { type: "chapter" } })])],
      "attributes",
    ],
    [
      "an attribute named for a char's content",
      [para([char("w", [], { unknownAttributes: { content: "x" } })])],
      "attributes",
    ],
    [
      "an attribute named for a verse's number",
      [para([verse("2", { unknownAttributes: { number: "3" } })])],
      "attributes",
    ],
    [
      "an attribute named for a chapter's id",
      [chapter({ unknownAttributes: { sid: "GEN 2" } })],
      "attributes",
    ],
    [
      "an attribute named for a book's code",
      [element("book", [], { marker: "id", code: "GEN", unknownAttributes: { code: "EXO" } })],
      "attributes",
    ],
    [
      "an attribute named for a note's caller",
      [para([note([noteCaller()], { unknownAttributes: { caller: "x" } })])],
      "attributes",
    ],
    [
      "an attribute named for a milestone's end id",
      [para([milestone({ unknownAttributes: { eid: "q2" } })])],
      "attributes",
    ],
    [
      "an attribute named for a cell's span",
      [table({ unknownAttributes: { colspan: "9" } })],
      "attributes",
    ],
    [
      "an attribute named for an object's prototype",
      [para([char("w", [], { unknownAttributes: JSON.parse('{"__proto__": "x"}') as object })])],
      "attributes",
    ],
    // A milestone's attribute order.
    [
      "an attribute order that is not a list",
      [para([milestone({ attributeOrder: "who" })])],
      "attribute order",
    ],
    [
      "an attribute order holding a non-name",
      [para([milestone({ attributeOrder: [1] })])],
      "attribute order",
    ],
    // Node state.
    [
      "a node state the editor does not define",
      [para([text("a", { $: { x: {} } })])],
      'node state "x"',
    ],
    ["a node state that is not one", [para([text("a", { $: "x" })])], "node state that is not one"],
    [
      "a node state value its parse would not keep",
      [para([], { $: { startsMidParagraph: "yes" } })],
      'node state "startsMidParagraph"',
    ],
    [
      "a node state holding an object it reads as text",
      [para([text("a", { $: { textType: { a: { b: {} } } } })])],
      'node state "textType"',
    ],
    [
      "display annotations that are not",
      [para([], { $: { displayAnnotations: { basis: "x", annotations: [{}] } } })],
      'node state "displayAnnotations"',
    ],
    // An element's Lexical fields.
    ["a centered paragraph", [para([], { format: "center" })], "with a style"],
    ["an indented paragraph", [para([], { indent: 3 })], "with a style"],
    ["a right-to-left paragraph", [para([], { direction: "rtl" })], "with a style"],
    ["a paragraph with a text style", [para([], { textStyle: "color:red" })], "with a style"],
    [
      "a char giving typed text a format",
      [para([char("w", [], { textFormat: 1 })])],
      "with a style",
    ],
    // Text.
    ["a text that is not text", [para([text("a", { text: null })])], 'a text "null"'],
    ["a text with a style", [para([text("a", { style: "display:none" })])], "text with a style"],
    ["a text with a format", [para([text("a", { format: 1 })])], "text with a style"],
    ["a text with a mode that is not one", [para([text("a", { mode: "x" })])], "text mode"],
    ["a text with a detail that is not one", [para([text("a", { detail: 9 })])], "text detail"],
    [
      "a text the save leaves out",
      [para([text("a", { $: { textType: "attribute" } })])],
      'a text of type "attribute"',
    ],
    [
      "a text that saves as attributes",
      [para([text(`${NODE_ATTRIBUTE_PREFIX}x="y"`)])],
      "saves as attributes",
    ],
    [
      "a tab holding text",
      [
        para([
          { type: "tab", version: 1, text: "x", detail: 0, format: 0, mode: "normal", style: "" },
        ]),
      ],
      "tab",
    ],
    // Unmatched markers.
    ["an unmatched marker that is an opener", [para([unmatched("v")])], "unmatched marker"],
    [
      "an unmatched marker showing other text",
      [para([unmatched("nd*", { text: "\\v 5" })])],
      "unmatched marker",
    ],
    [
      "an unmatched marker's text that is not text",
      [para([unmatched("nd*", { text: 5 })])],
      "unmatched marker",
    ],
  ])("refuses a copy holding %s", (_, nodes, problem) => {
    const { made, warning } = read(nodes);

    expect(made).toBeUndefined();
    expect(warning).toContain(problem);
  });
});
