/**
 * `$signatureOf` (live nodes) and `serializedSignatureOf` (serialized JSON) are two hand-mirrored
 * walks that compute the settle's fixed-point signature. Both settles refuse a rebuild as a no-op
 * when the two match, so drift between them makes the editor either refuse to converge or silently
 * discard an edit. These rows pin their agreement directly: every live settle scope, deep-exported
 * to the shape a rebuild serializes to, must sign the same as the scope itself, in Standard view.
 *
 * Left out of the agreement rows, because the walks deliberately differ on them (see
 * `serializedSignatureOf`'s doc comment): a node that collapses to one sentinel only on the live
 * side, and a `TypedMarkNode`, transparent only on the live side. A rebuild's own output never
 * holds an annotation, and a freshly tokenized sentinel-class node is content the old live tree did
 * not hold in that opaque form, so neither difference can come into a comparison that a settle
 * would answer "no-op". The last describe pins each of them as UNEQUAL: if one of these ever does
 * reach the comparison, it forces a splice, never a false no-op.
 */
import { editorView, mountInView } from "../editorViews.test-helpers";
import {
  $buildBookFragment,
  $buildNoteFragment,
  $chapterAdjacentAttributeNodes,
  $isRebuildSentinel,
  $rebuildParas,
  $signatureOf,
  serializedSignatureOf,
} from "./tier2Rebuild.utils";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { $dfs } from "@lexical/utils";
import { act } from "@testing-library/react";
import {
  $createLineBreakNode,
  $createTextNode,
  $getRoot,
  $getState,
  $isElementNode,
  $isLineBreakNode,
  $isTextNode,
  LexicalNode,
  SerializedLexicalNode,
} from "lexical";
import {
  $createCaretHostNode,
  $createCharNode,
  $isBookNode,
  $isCaretHost,
  $isChapterNode,
  $isCharNode,
  $isImmutableUnmatchedNode,
  $isMarkerNode,
  $isMilestoneNode,
  $isNoteNode,
  $isParaNode,
  $isTypedMarkNode,
  $isVerseNode,
  getMarker,
  NBSP,
  ParaNode,
  textTypeState,
  ZWSP,
} from "shared";
import { ViewOptions } from "shared-react";
import { describe, expect, it } from "vitest";

const standard = editorView("standard");
const expandedNotes = editorView("standard+expandedNotes");

/** `node` as a rebuild serializes it: its `exportJSON()`, with its children exported the same way. */
function $exportDeep(node: LexicalNode): SerializedLexicalNode {
  const json: SerializedLexicalNode & { children?: SerializedLexicalNode[] } = node.exportJSON();
  if ($isElementNode(node)) json.children = node.getChildren().map($exportDeep);
  return json;
}

/** The settle scope a row compares: the node list each settle hands `$signatureOf`. */
type Scope = "paragraphs" | "book" | "note" | "chapter";

function $paragraphs(): ParaNode[] {
  return $getRoot().getChildren().filter($isParaNode);
}

/** The live nodes of `scope`, as `$rebuildParas`, `$rebuildBook`, `$rebuildNoteContent` and
 * `$rebuildChapter` each collect them. */
function $scopeNodes(scope: Scope, view: ViewOptions): LexicalNode[] {
  switch (scope) {
    case "paragraphs":
      return $paragraphs();
    case "book": {
      const book = $getRoot().getChildren().find($isBookNode);
      if (!book) throw new Error("no book");
      return $buildBookFragment(book, getMarker, view).contentNodes;
    }
    case "note": {
      const note = $dfs()
        .map(({ node }) => node)
        .find($isNoteNode);
      if (!note) throw new Error("no note");
      const fragment = $buildNoteFragment(note, getMarker, view);
      if (!fragment) throw new Error("the note has no re-tokenizable content");
      return fragment.contentNodes;
    }
    case "chapter": {
      const chapter = $getRoot().getChildren().find($isChapterNode);
      if (!chapter) throw new Error("no chapter");
      return [chapter, ...$chapterAdjacentAttributeNodes(chapter)];
    }
  }
}

/** Every node in `nodes` and under them. */
function $flatten(nodes: LexicalNode[]): LexicalNode[] {
  return nodes.flatMap((node) =>
    $isElementNode(node) ? [node, ...$flatten(node.getChildren())] : [node],
  );
}

interface Row {
  name: string;
  content: MarkerContent[];
  scope?: Scope;
  view?: ViewOptions;
  /** An edit committed before the comparison, so the transforms it triggers have run. */
  $commit?: (view: ViewOptions) => void;
  /** An edit made in the comparison's own update: nothing gets to remove a resting caret host. */
  $beforeCompare?: () => void;
  /** The kind of node the row claims to hold, so a row whose shape did not load fails. */
  $holds: (node: LexicalNode) => boolean;
}

interface Signatures {
  live: string;
  serialized: string;
  holdsClaimedKind: boolean;
}

function doc(content: MarkerContent[]): Usj {
  return { type: "USJ", version: "3.1", content };
}

function para(...content: MarkerContent[]): MarkerObject {
  return { type: "para", marker: "p", content };
}

function char(marker: string, ...content: MarkerContent[]): MarkerObject {
  return { type: "char", marker, content };
}

function verse(number: string, attributes: { [name: string]: string } = {}): MarkerObject {
  return { type: "verse", marker: "v", number, ...attributes };
}

/** A marker object carrying attributes `MarkerObject` does not name. */
function withAttributes(
  marker: MarkerObject,
  attributes: { [name: string]: string },
): MarkerObject {
  return { ...marker, ...attributes };
}

function footnote(...content: MarkerContent[]): MarkerObject {
  return { type: "note", marker: "f", caller: "+", content };
}

async function signaturesOf(row: Row): Promise<Signatures> {
  const view = row.view ?? standard;
  const mounted = await mountInView(doc(row.content), view);
  if (row.$commit) {
    const $commit = row.$commit;
    await act(async () => {
      mounted.lexical.update(() => $commit(view), { discrete: true });
    });
  }
  return signaturesIn(mounted.lexical, row, view);
}

function signaturesIn(
  lexical: Awaited<ReturnType<typeof mountInView>>["lexical"],
  row: Pick<Row, "$beforeCompare" | "$holds" | "scope">,
  view: ViewOptions,
): Signatures {
  let result: Signatures | undefined;
  let failure: unknown;
  act(() => {
    lexical.update(
      () => {
        try {
          row.$beforeCompare?.();
          const nodes = $scopeNodes(row.scope ?? "paragraphs", view);
          result = {
            live: $signatureOf(nodes, getMarker),
            serialized: serializedSignatureOf(nodes.map($exportDeep), getMarker),
            holdsClaimedKind: $flatten(nodes).some(row.$holds),
          };
        } catch (error) {
          failure = error;
        }
      },
      { discrete: true },
    );
  });
  if (failure) throw failure;
  if (!result) throw new Error("the comparison did not run");
  return result;
}

const $isTextOf =
  (text: string) =>
  (node: LexicalNode): boolean =>
    $isTextNode(node) && node.getTextContent() === text && !$isCaretHost(node);

const $holdsText =
  (text: string) =>
  (node: LexicalNode): boolean =>
    $isTextNode(node) && node.getTextContent().includes(text) && !$isCaretHost(node);

const $isAttributeRunText = (node: LexicalNode): boolean =>
  $isTextNode(node) && $getState(node, textTypeState) === "attribute";

/** The first verse in the document. */
function $firstVerse(): LexicalNode {
  const found = $dfs()
    .map(({ node }) => node)
    .find($isVerseNode);
  if (!found) throw new Error("no verse");
  return found;
}

/** The first text in `isIn`'s node, past any glyph and separator. */
function $contentTextIn(isIn: (node: LexicalNode) => boolean, text: string): LexicalNode {
  const found = $dfs()
    .map(({ node }) => node)
    .find(
      (node) =>
        $isTextNode(node) &&
        node.getTextContent().includes(text) &&
        !$isMarkerNode(node) &&
        node.getParents().some(isIn),
    );
  if (!found) throw new Error(`no text holding ${text}`);
  return found;
}

const ORDINARY_ROWS: Row[] = [
  { name: "plain text", content: [para("plain words")], $holds: $isTextOf("plain words") },
  {
    name: "a stored no-break space in text",
    content: [para(`a${NBSP}b`)],
    $holds: $isTextNode,
  },
  { name: "an empty paragraph", content: [para()], $holds: $isParaNode },
  { name: "a paragraph's marker glyph", content: [para("x")], $holds: $isMarkerNode },
  { name: "a char span", content: [para("a ", char("nd", "name"), " b")], $holds: $isCharNode },
  {
    name: "an empty char span",
    content: [para("a ", { type: "char", marker: "nd" }, " b")],
    $holds: $isCharNode,
  },
  {
    name: "an unclosed char span",
    content: [para({ type: "char", marker: "nd", closed: "false", content: ["x"] })],
    $holds: $isCharNode,
  },
  {
    name: "a nested char span",
    content: [para(char("nd", "out ", char("wj", "in"), " out"))],
    $holds: (node) => $isCharNode(node) && node.getParents().some((parent) => $isCharNode(parent)),
  },
  {
    name: "a char span that starts with a nested span",
    content: [para(char("nd", char("wj", "in")))],
    $holds: (node) => $isCharNode(node) && node.getParents().some((parent) => $isCharNode(parent)),
  },
  {
    name: "a char span holding a lone no-break space",
    content: [para("a ", char("nd", NBSP), " b")],
    $holds: $isCharNode,
  },
  {
    name: "a char span whose text starts with a no-break space",
    content: [para(char("nd", `${NBSP}lead`))],
    $holds: $isCharNode,
  },
  {
    name: "a char span with an attribute run",
    content: [
      para(withAttributes({ type: "char", marker: "w", content: ["grace"] }, { lemma: "gloss" })),
    ],
    $holds: $isAttributeRunText,
  },
  {
    name: "a char span with several attributes",
    content: [
      para(
        withAttributes(
          { type: "char", marker: "w", content: ["x"] },
          { lemma: "g", strong: "H1", srcloc: "s" },
        ),
      ),
    ],
    $holds: $isAttributeRunText,
  },
  { name: "a verse", content: [para(verse("1"), "text")], $holds: $isVerseNode },
  {
    name: "a verse with \\va",
    content: [para(verse("1", { altnumber: "1a" }), "text")],
    $holds: $isVerseNode,
  },
  {
    name: "a verse with \\vp",
    content: [para(verse("1", { pubnumber: "1b" }), "text")],
    $holds: $isVerseNode,
  },
  {
    name: "a verse with \\va and \\vp",
    content: [para(verse("1", { altnumber: "1a", pubnumber: "1b" }), "text")],
    $holds: $isVerseNode,
  },
  {
    name: "a verse with a sid",
    content: [para(verse("1", { sid: "GEN 1:1" }), "text", verse("2", { sid: "GEN 1:2" }))],
    $holds: $isVerseNode,
  },
  {
    name: "a verse inside a char span",
    content: [para(char("nd", "a ", verse("1"), "b"))],
    $holds: $isVerseNode,
  },
  {
    name: "a re-tokenizable milestone with no attributes",
    content: [para("a", { type: "ms", marker: "qt-e" }, "b")],
    $holds: $isMilestoneNode,
  },
  {
    name: "a re-tokenizable milestone with a sid",
    content: [para("a", { type: "ms", marker: "qt-s", sid: "q1" }, "b")],
    $holds: $isMilestoneNode,
  },
  {
    name: "a re-tokenizable milestone with attributes",
    content: [
      para(
        "a",
        withAttributes({ type: "ms", marker: "qt-s", sid: "q1" }, { who: "Pilate", x: "y" }),
        "b",
      ),
    ],
    $holds: (node) => $isMilestoneNode(node) && !!node.getUnknownAttributes(),
  },
  {
    name: "a re-tokenizable milestone inside a char span",
    content: [
      para(char("nd", "a", withAttributes({ type: "ms", marker: "qt-s" }, { who: "Pilate" }), "b")),
    ],
    $holds: $isMilestoneNode,
  },
  {
    name: "unmatched markers",
    content: [
      para("a ", { type: "unmatched", marker: "wj*" }, " b", { type: "unmatched", marker: "*" }),
    ],
    $holds: $isImmutableUnmatchedNode,
  },
  {
    name: "a line break before text",
    content: [para("before", char("nd", "x"), "after")],
    $beforeCompare: () => {
      $contentTextIn($isParaNode, "after").insertBefore($createLineBreakNode());
    },
    $holds: $isLineBreakNode,
  },
  {
    name: "a line break before a verse",
    content: [para("before", verse("1"), "after")],
    $beforeCompare: () => {
      $firstVerse().insertBefore($createLineBreakNode());
    },
    $holds: $isLineBreakNode,
  },
  {
    name: "a collapsed note",
    content: [para("a", footnote(char("ft", "note")), "b")],
    $holds: $isNoteNode,
  },
  {
    name: "an expanded note, seen from its paragraph",
    content: [para("a", footnote(char("ft", "note")), "b")],
    view: expandedNotes,
    $holds: $isNoteNode,
  },
  {
    name: "a marked caret host after a verse",
    content: [para(verse("1"), char("nd", "x"))],
    $beforeCompare: () => {
      $firstVerse().insertAfter($createCaretHostNode());
    },
    $holds: $isCaretHost,
  },
  {
    name: "a marked caret host in a char span",
    content: [para(char("nd", "x"))],
    $beforeCompare: () => {
      $contentTextIn($isCharNode, "x").insertAfter($createCaretHostNode());
    },
    $holds: $isCaretHost,
  },
  {
    name: "an authored zero-width-space run at a paragraph's start",
    content: [para(ZWSP, char("nd", "x"))],
    $holds: $isTextOf(ZWSP),
  },
  {
    name: "an authored zero-width-space run mid-paragraph",
    content: [para(char("nd", "x"), ZWSP, char("wj", "y"))],
    $holds: $isTextOf(ZWSP),
  },
  {
    name: "an authored zero-width-space run at a paragraph's end",
    content: [para(char("nd", "x"), ZWSP)],
    $holds: $isTextOf(ZWSP),
  },
  {
    name: "an authored zero-width-space run in a char span",
    content: [para("a ", char("nd", ZWSP), " b")],
    $holds: $holdsText(ZWSP),
  },
  {
    name: "an authored zero-width-space run beside a nested span",
    content: [para(char("nd", ZWSP, char("wj", "y")))],
    $holds: $holdsText(ZWSP),
  },
  {
    name: "a document settled from typed markers",
    content: [
      para(
        verse("1"),
        String.raw`\nd name\nd* \w g|lemma="h"\w* \qt-s |who="P"\* \+wj x\+wj* \v 2 \va 3\va*text`,
      ),
    ],
    $commit: (view) => {
      if (!$rebuildParas($paragraphs(), { viewOptions: view, getMarker }))
        throw new Error("the typed markers did not settle");
    },
    $holds: $isCharNode,
  },
  {
    name: "a book line with text and a char span",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["front ", char("nd", "x"), " back"] },
    ],
    scope: "book",
    $holds: $isCharNode,
  },
  {
    name: "a book line with a verse-free milestone",
    content: [
      {
        type: "book",
        marker: "id",
        code: "GEN",
        content: ["a", withAttributes({ type: "ms", marker: "qt-s" }, { who: "P" }), "b"],
      },
    ],
    scope: "book",
    $holds: $isMilestoneNode,
  },
  {
    name: "an expanded note's char spans",
    content: [para("a", footnote(char("fr", "1:1 "), char("ft", "text")))],
    scope: "note",
    view: expandedNotes,
    $holds: $isCharNode,
  },
  {
    name: "an expanded note's nested span and attributes",
    content: [
      para(
        "a",
        footnote(
          char("ft", "out ", char("nd", "in")),
          withAttributes({ type: "char", marker: "w", content: ["x"] }, { lemma: "g" }),
        ),
      ),
    ],
    scope: "note",
    view: expandedNotes,
    $holds: $isAttributeRunText,
  },
  {
    name: "an expanded note's undeclared char span",
    content: [para("a", footnote(char("zzz", "text")))],
    scope: "note",
    view: expandedNotes,
    $holds: $isCharNode,
  },
  {
    name: "an authored zero-width-space run in an expanded note",
    content: [para("a", footnote(char("ft", "x"), ZWSP, char("fq", "y")))],
    scope: "note",
    view: expandedNotes,
    $holds: $isTextOf(ZWSP),
  },
  {
    name: "a marked caret host in an expanded note",
    content: [para("a", footnote(char("ft", "x")))],
    scope: "note",
    view: expandedNotes,
    $beforeCompare: () => {
      $contentTextIn($isCharNode, "x").insertAfter($createCaretHostNode());
    },
    $holds: $isCaretHost,
  },
  {
    name: "a chapter",
    content: [{ type: "chapter", marker: "c", number: "1" }, para("x")],
    scope: "chapter",
    $holds: $isChapterNode,
  },
  {
    name: "a chapter with \\ca and \\cp",
    content: [
      { type: "chapter", marker: "c", number: "1", altnumber: "2", pubnumber: "A" },
      para("x"),
    ],
    scope: "chapter",
    $holds: $isChapterNode,
  },
];

describe("the live and serialized signatures of ordinary content agree", () => {
  it.each(ORDINARY_ROWS.map((row) => [row.name, row] as const))("%s", async (_, row) => {
    const { live, serialized, holdsClaimedKind } = await signaturesOf(row);

    expect(holdsClaimedKind).toBe(true);
    expect(serialized).toBe(live);
  });
});

describe("the walks' deliberate asymmetries only ever force a splice", () => {
  it("a char span with unrecoverable attributes signs differently from its export", async () => {
    const { live, serialized, holdsClaimedKind } = await signaturesOf({
      name: "sentinel char span",
      content: [para("a")],
      // No loaded span has this shape: a loaded span's attributes get a display run. It takes a
      // span whose attributes never had one.
      $beforeCompare: () => {
        $paragraphs()[0].append(
          $createCharNode("xt", { "link-href": "GEN 1:1" }).append($createTextNode("y")),
        );
      },
      $holds: (node) => $isCharNode(node) && $isRebuildSentinel(node, getMarker),
    });

    expect(holdsClaimedKind).toBe(true);
    expect(serialized).not.toBe(live);
  });

  it("a char span the stylesheet does not declare signs differently from its export", async () => {
    const { live, serialized, holdsClaimedKind } = await signaturesOf({
      name: "undeclared char span",
      content: [para("a ", char("zzz", "y"))],
      $holds: (node) => $isCharNode(node) && $isRebuildSentinel(node, getMarker),
    });

    expect(holdsClaimedKind).toBe(true);
    expect(serialized).not.toBe(live);
  });

  it("a milestone that does not re-tokenize signs differently from its export", async () => {
    const { live, serialized, holdsClaimedKind } = await signaturesOf({
      name: "sentinel milestone",
      content: [para("a", { type: "ms", marker: "ts", sid: "t1" }, "b")],
      $holds: (node) => $isMilestoneNode(node) && $isRebuildSentinel(node, getMarker),
    });

    expect(holdsClaimedKind).toBe(true);
    expect(serialized).not.toBe(live);
  });

  it("an annotation mark signs differently from its export", async () => {
    const mounted = await mountInView(doc([para("alpha beta")]), standard);
    await act(async () => {
      mounted.ref.current?.setAnnotation(
        {
          start: { jsonPath: "$.content[0].content[0]", offset: 0 },
          end: { jsonPath: "$.content[0].content[0]", offset: 5 },
        },
        "test",
        "1",
      );
      await Promise.resolve();
    });

    const { live, serialized, holdsClaimedKind } = signaturesIn(
      mounted.lexical,
      { $holds: $isTypedMarkNode },
      standard,
    );

    expect(holdsClaimedKind).toBe(true);
    expect(serialized).not.toBe(live);
  });
});
