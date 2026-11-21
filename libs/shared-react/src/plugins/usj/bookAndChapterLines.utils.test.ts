import {
  $chapterLineToSplitAt,
  $isBookOrChapterLine,
  $isFirstChapterLine,
  $lineToJoinBeforeChapter,
  $paragraphSelectionStartsInside,
  $pasteAroundChapterLine,
  $removeBookAndChapterLines,
  $removeTextKeepingBookAndChapterLines,
  $selectionSpansBookOrChapterLine,
  $takeStartsMidParagraph,
  startsMidParagraphState,
} from "./bookAndChapterLines.utils";
import { $createImmutableVerseNode } from "../../nodes/usj/ImmutableVerseNode";
import { $createBookLine, baseTestEnvironment } from "./react-test.utils";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $createTextNode,
  $getRoot,
  $getSelection,
  $getState,
  $isElementNode,
  $isRangeSelection,
  $isRootNode,
  $setSelection,
  $setState,
  ElementNode,
  LexicalEditor,
  LexicalNode,
  RangeSelection,
  TextNode,
} from "lexical";
import {
  $createChapterNode,
  $createCharNode,
  $createGutterMarkerNode,
  $createImmutableChapterNode,
  $createParaNode,
  $isGutterMarkerNode,
  $isSomeChapterNode,
  NBSP,
  ParaNode,
} from "shared";

/** A top-level line as a hidden-marker view builds it, made inside the editor's first update. */
type Line = () => LexicalNode;

const $book: Line = () => $createBookLine("GEN", $createTextNode("Genesis title"));

/** A paragraph with its gutter marker glyph, and a verse number before its text if `verse`. */
function para(marker: string, text: string, verse?: string): Line {
  return () =>
    $createParaNode(marker).append(
      $createGutterMarkerNode(`\\${marker}${NBSP}`),
      ...(verse ? [$createImmutableVerseNode(verse)] : []),
      $createTextNode(text),
    );
}

function chapter(number = "1"): Line {
  return () => $createImmutableChapterNode(number);
}

/** Chapter 1's book line, front matter, chapter line and two lines of Scripture text. */
const CHAPTER_ONE: Line[] = [
  $book,
  para("h", "Genesis"),
  para("ip", "An introduction."),
  chapter(),
  para("p", "first words", "1"),
  para("q1", "second line", "2"),
];

async function editorOf(lines: Line[]): Promise<LexicalEditor> {
  const { editor } = await baseTestEnvironment(() =>
    $getRoot().append(...lines.map((line) => line())),
  );
  return editor;
}

/** Runs `$fn` in a discrete update and returns what it returned. */
function update<T>(editor: LexicalEditor, $fn: () => T): T {
  let result: T | undefined;
  act(() => {
    editor.update(
      () => {
        result = $fn();
      },
      { discrete: true },
    );
  });
  return result as T;
}

/** The `nth` text node whose text is exactly `text`. */
function $text(text: string, nth = 0): TextNode {
  const node = $getRoot()
    .getAllTextNodes()
    .filter((textNode) => textNode.getTextContent() === text)
    .at(nth);
  if (!node) throw new Error(`no text node is ${JSON.stringify(text)}`);
  return node;
}

function $line(index: number): LexicalNode {
  const line = $getRoot().getChildAtIndex(index);
  if (!line) throw new Error(`no line ${index}`);
  return line;
}

type Point = [key: string, offset: number, type: "text" | "element"];

const $inText = (text: string, offset: number, nth = 0): Point => [
  $text(text, nth).getKey(),
  offset,
  "text",
];
const $onRoot = (offset: number): Point => [$getRoot().getKey(), offset, "element"];
const $inLine = (index: number, offset: number): Point => [
  $line(index).getKey(),
  offset,
  "element",
];

/** A range from `anchor` to `focus` (a caret when `focus` is left out), made the selection. */
function $select(anchor: Point, focus: Point = anchor): RangeSelection {
  const selection = $createRangeSelection();
  selection.anchor.set(...anchor);
  selection.focus.set(...focus);
  $setSelection(selection);
  return selection;
}

/** Each top-level line as `marker: text`, without its marker glyph; a chapter line as `\c N`. */
function $lines(): string[] {
  return $getRoot()
    .getChildren()
    .map((line) => {
      if ($isSomeChapterNode(line)) return `\\c ${line.getNumber()}`;
      if (!$isElementNode(line)) return line.getType();
      const text = line
        .getChildren()
        .filter((child) => !$isGutterMarkerNode(child))
        .map((child) => child.getTextContent())
        .join("")
        .replace(/^\\[^\u00a0]*\u00a0/, "");
      return `${line instanceof ParaNode ? line.getMarker() : line.getType()}: ${text}`;
    });
}

/** Where the caret is: `root@offset`, or `line index: the line's text before it|`. */
function $caret(): string {
  const selection = $getSelection();
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return "no caret";
  const { anchor } = selection;
  const node = anchor.getNode();
  if ($isRootNode(node)) return `root@${anchor.offset}`;
  const line = node.getTopLevelElementOrThrow();
  const before = $createRangeSelection();
  before.anchor.set(line.getKey(), 0, "element");
  before.focus.set(anchor.key, anchor.offset, anchor.type);
  const text = before.getTextContent().replace(/^\\[^\u00a0]*\u00a0/, "");
  return `${line.getIndexWithinParent()}: ${text}|`;
}

describe("$isBookOrChapterLine", () => {
  it("is true of a book line, either chapter line, and a paragraph tagged `id`", async () => {
    const editor = await editorOf([]);
    const answers = update(editor, () =>
      [
        $book(),
        $createImmutableChapterNode("1"),
        $createChapterNode("1"),
        $createParaNode("id"),
        $createParaNode("p"),
        $createTextNode("text"),
      ].map($isBookOrChapterLine),
    );
    expect(answers).toEqual([true, true, true, true, false, false]);
  });
});

describe("$isFirstChapterLine", () => {
  it("is true of chapter 1 only, whatever its alternate or published number", async () => {
    const editor = await editorOf([]);
    const answers = update(editor, () =>
      [
        $createImmutableChapterNode("1"),
        $createImmutableChapterNode("1", false, undefined, "2", "A"),
        $createChapterNode("1"),
        $createImmutableChapterNode("2"),
        $createImmutableChapterNode("10"),
        $createParaNode("p"),
      ].map($isFirstChapterLine),
    );
    expect(answers).toEqual([true, true, true, false, false, false]);
  });
});

describe("$removeBookAndChapterLines", () => {
  it("takes every book and chapter line out, and says what came before the chapter line", async () => {
    const editor = await editorOf([]);
    const result = update(editor, () => {
      const nodes = [
        $book(),
        para("h", "Genesis")(),
        $createParaNode("id"),
        chapter()(),
        para("p", "first words", "1")(),
      ];
      const { isRemoved, holdsChapterLine, beforeChapter } = $removeBookAndChapterLines(nodes);
      return {
        isRemoved,
        holdsChapterLine,
        beforeChapter: beforeChapter.map((node) => node.getTextContent()),
        left: nodes.map((node) => node.getTextContent()),
      };
    });
    expect(result).toEqual({
      isRemoved: true,
      holdsChapterLine: true,
      beforeChapter: [`\\h${NBSP}Genesis`],
      left: [`\\h${NBSP}Genesis`, `\\p${NBSP}first words`],
    });
  });

  it("takes them out at any depth, and out of the tree when they are in it", async () => {
    const editor = await editorOf([para("p", "words")]);
    const result = update(editor, () => {
      const holder = $line(0);
      if (!$isElementNode(holder)) throw new Error("no paragraph");
      const nested = $createImmutableChapterNode("1");
      holder.append(nested);
      const nodes = [holder];
      const { isRemoved, holdsChapterLine } = $removeBookAndChapterLines(nodes);
      return { isRemoved, holdsChapterLine, isAttached: nested.isAttached(), lines: $lines() };
    });
    // A nested chapter line is not one at the top, so nothing goes before the document's.
    expect(result).toEqual({
      isRemoved: true,
      holdsChapterLine: false,
      isAttached: false,
      lines: ["p: words"],
    });
  });

  it("with two chapter lines, says what came before the first", async () => {
    const editor = await editorOf([]);
    const result = update(editor, () => {
      const nodes = [para("h", "front")(), chapter()(), para("p", "one")(), chapter("2")()];
      nodes.push(para("p", "two")());
      const { beforeChapter } = $removeBookAndChapterLines(nodes);
      return { beforeChapter: beforeChapter.length, left: nodes.length };
    });
    expect(result).toEqual({ beforeChapter: 1, left: 3 });
  });

  it("changes nothing when there is no book or chapter line", async () => {
    const editor = await editorOf([]);
    const result = update(editor, () => {
      const nodes = [para("p", "one")(), $createTextNode("two")];
      return { ...$removeBookAndChapterLines(nodes), left: nodes.length };
    });
    expect(result).toEqual({
      isRemoved: false,
      holdsChapterLine: false,
      beforeChapter: [],
      left: 2,
    });
  });
});

describe("$chapterLineToSplitAt", () => {
  /** Whether the chapter line comes back for the selection `$where` makes in chapter 1. */
  async function splitsAt($where: () => RangeSelection, lines = CHAPTER_ONE): Promise<string> {
    const editor = await editorOf(lines);
    return update(editor, () => {
      const chapterLine = $chapterLineToSplitAt($where());
      return chapterLine && $isSomeChapterNode(chapterLine)
        ? `\\c ${chapterLine.getNumber()}`
        : "nowhere";
    });
  }

  it.each<[string, () => RangeSelection]>([
    [
      "from a caret at the start of the line after it, past its glyph and verse",
      () => $select($inText("first words", 0)),
    ],
    [
      "from a caret at the very start of the line after it, before its glyph",
      () => $select($inLine(4, 0)),
    ],
    [
      "from a caret at the end of the line before it",
      () => $select($inText("An introduction.", 16)),
    ],
    ["from a caret on the root right before it", () => $select($onRoot(3))],
    ["from a caret on the root right after it", () => $select($onRoot(4))],
    [
      "over a selection holding it",
      () => $select($inText("Genesis", 2), $inText("first words", 3)),
    ],
    [
      "over a backward selection holding it",
      () => $select($inText("first words", 3), $inText("Genesis", 2)),
    ],
  ])("splits %s", async (_where, $where) => {
    expect(await splitsAt($where)).toBe("\\c 1");
  });

  it.each<[string, () => RangeSelection]>([
    ["from a caret mid-text in the line after it", () => $select($inText("first words", 3))],
    ["from a caret mid-text in the line before it", () => $select($inText("An introduction.", 3))],
    [
      "from a caret at the start of the line before it, with its text after",
      () => $select($inText("An introduction.", 0)),
    ],
    ["from a caret at the end of the document", () => $select($onRoot(6))],
    [
      "over a selection beside it, not holding it",
      () => $select($inText("first words", 0), $inText("second line", 3)),
    ],
  ])("does not split %s", async (_where, $where) => {
    expect(await splitsAt($where)).toBe("nowhere");
  });

  it("splits at the end of the book line when it comes right before the chapter line", async () => {
    expect(
      await splitsAt(
        () => $select($inText("Genesis title", 13)),
        [$book, chapter("2"), para("p", "x")],
      ),
    ).toBe("\\c 2");
  });

  it("splits at the last chapter line a selection holds", async () => {
    expect(
      await splitsAt(
        () => $select($inText("one", 0), $inText("two", 1)),
        [chapter("1"), para("p", "one"), chapter("2"), para("p", "two")],
      ),
    ).toBe("\\c 2");
  });
});

describe("$pasteAroundChapterLine", () => {
  /**
   * Chapter 1 with a caret where `$where` puts it, and a paste of the copy `$copy` makes, its first
   * `frontMatterCount` nodes the front matter. Returns what the call answered, the lines, the caret
   * and how many nodes it left for Lexical to insert.
   */
  async function pasteAround(
    $where: () => RangeSelection,
    $copy: () => LexicalNode[],
    frontMatterCount: number,
    $joinLine?: () => ElementNode,
  ) {
    const editor = await editorOf(CHAPTER_ONE);
    return update(editor, () => {
      const selection = $where();
      const nodes = $copy();
      const isDone = $pasteAroundChapterLine(
        nodes,
        nodes.slice(0, frontMatterCount),
        $line(3),
        selection,
        $joinLine?.(),
      );
      return { isDone, lines: $lines(), caret: $caret(), left: nodes.length };
    });
  }

  const copy = () => [para("mt1", "Title")(), para("p", "pasted one")(), para("p", "pasted two")()];

  it("from a caret after the chapter line, puts the front matter before it and leaves the rest at the caret", async () => {
    expect(await pasteAround(() => $select($inText("first words", 0)), copy, 1)).toEqual({
      isDone: false,
      lines: [
        "book: Genesis title",
        "h: Genesis",
        "ip: An introduction.",
        "mt1: Title",
        "\\c 1",
        "p: first words",
        "q1: second line",
      ],
      caret: "5: |",
      left: 2,
    });
  });

  it("joins the front matter's first paragraph to the join line, and puts the rest before the chapter line", async () => {
    const result = await pasteAround(
      () => $select($inText("first words", 0)),
      () => [para("ip", " more")(), para("mt1", "Title")(), para("p", "pasted")()],
      2,
      () => $line(2) as ElementNode,
    );
    expect(result.lines).toEqual([
      "book: Genesis title",
      "h: Genesis",
      "ip: An introduction. more",
      "mt1: Title",
      "\\c 1",
      "p: first words",
      "q1: second line",
    ]);
    expect(result.left).toBe(1);
  });

  it("puts the front matter in as lines of its own when the join line is not right before the chapter line", async () => {
    const result = await pasteAround(
      () => $select($inText("first words", 0)),
      () => [para("ip", " more")(), para("p", "pasted")()],
      1,
      () => $line(1) as ElementNode,
    );
    expect(result.lines.slice(1, 5)).toEqual([
      "h: Genesis",
      "ip: An introduction.",
      "ip:  more",
      "\\c 1",
    ]);
  });

  it("from a caret after the chapter line, is done when the copy held only front matter", async () => {
    const result = await pasteAround(
      () => $select($inText("first words", 0)),
      () => [para("mt1", "Title")()],
      1,
    );
    expect(result.isDone).toBe(true);
    expect(result.left).toBe(0);
  });

  it("from a caret before the chapter line, puts the rest right after it, the caret at its end", async () => {
    expect(await pasteAround(() => $select($inText("An introduction.", 16)), copy, 1)).toEqual({
      isDone: true,
      lines: [
        "book: Genesis title",
        "h: Genesis",
        "ip: An introduction.",
        "mt1: Title",
        "\\c 1",
        "p: pasted one",
        "p: pasted two",
        "p: first words",
        "q1: second line",
      ],
      caret: "6: pasted two|",
      left: 0,
    });
  });

  it("from a caret on the chapter line, puts the rest after it", async () => {
    const result = await pasteAround(() => $select($onRoot(3)), copy, 0);
    expect(result.isDone).toBe(true);
    expect(result.lines.slice(3, 8)).toEqual([
      "\\c 1",
      "mt1: Title",
      "p: pasted one",
      "p: pasted two",
      "p: first words",
    ]);
  });

  it("from a caret before the chapter line, puts the caret after a last block that is not an element, at the next line's start", async () => {
    const result = await pasteAround(
      () => $select($inText("An introduction.", 16)),
      () => [para("p", "pasted")(), $createImmutableChapterNode("9")],
      0,
    );
    expect(result.isDone).toBe(true);
    expect(result.lines.slice(3, 7)).toEqual(["\\c 1", "p: pasted", "\\c 9", "p: first words"]);
    expect(result.caret).toBe("6: |");
  });

  it.each<[string, () => LexicalNode]>([
    ["text", () => $createTextNode("loose text")],
    ["an inline element", () => $createCharNode("nd").append($createTextNode("Lord"))],
  ])(
    "inserts nothing, leaving the whole copy to the caret, when it holds %s",
    async (_what, $inline) => {
      expect(
        await pasteAround(
          () => $select($inText("An introduction.", 16)),
          () => [para("mt1", "Title")(), $inline(), para("p", "pasted")()],
          1,
        ),
      ).toEqual({
        isDone: false,
        lines: [
          "book: Genesis title",
          "h: Genesis",
          "ip: An introduction.",
          "\\c 1",
          "p: first words",
          "q1: second line",
        ],
        caret: "2: An introduction.|",
        left: 3,
      });
    },
  );
});

describe("$paragraphSelectionStartsInside", () => {
  it.each<[string, string | undefined, () => RangeSelection]>([
    ["a caret", undefined, () => $select($inText("An introduction.", 3))],
    [
      "a range from partway into a line",
      "ip",
      () => $select($inText("An introduction.", 3), $inText("first words", 2)),
    ],
    [
      "a backward range, by where it starts",
      "ip",
      () => $select($inText("first words", 2), $inText("An introduction.", 3)),
    ],
    [
      "a range from a line's start, past its glyph",
      undefined,
      () => $select($inLine(2, 1), $inText("first words", 2)),
    ],
    [
      "a range from a line's text start",
      undefined,
      () => $select($inText("An introduction.", 0), $inText("first words", 2)),
    ],
    [
      "a range from before a line's glyph",
      undefined,
      () => $select($inLine(2, 0), $inText("first words", 2)),
    ],
    [
      "a range from just past a verse number, which is not text",
      undefined,
      () => $select($inLine(4, 2), $inText("second line", 2)),
    ],
    ["a range from the root", undefined, () => $select($onRoot(1), $inText("first words", 2))],
  ])("for %s, is %s", async (_what, expected, $where) => {
    const editor = await editorOf(CHAPTER_ONE);
    const paragraph = update(editor, () => {
      const found = $paragraphSelectionStartsInside($where());
      return found instanceof ParaNode ? found.getMarker() : found?.getType();
    });
    expect(paragraph).toBe(expected);
  });
});

describe("$takeStartsMidParagraph", () => {
  /** A copy of two paragraphs, the second with a span in it, `startsMidParagraphState` on each node
   * `marked` names. */
  function $copy(marked: ("first" | "second" | "span")[]): LexicalNode[] {
    const span = $createCharNode("nd").append($createTextNode("Lord"));
    const second = $createParaNode("p").append($createTextNode("the "), span);
    const nodes = { first: para("ip", "tro")(), second, span };
    marked.forEach((name) => $setState(nodes[name], startsMidParagraphState, true));
    return [nodes.first, nodes.second];
  }

  /** Every node, at any depth, still holding the state. */
  function $holding(nodes: LexicalNode[]): string[] {
    const held: string[] = [];
    const $visit = (node: LexicalNode) => {
      if ($getState(node, startsMidParagraphState)) held.push(node.getType());
      if ($isElementNode(node)) node.getChildren().forEach($visit);
    };
    nodes.forEach($visit);
    return held;
  }

  it.each<[string, ("first" | "second" | "span")[], boolean]>([
    ["the first node holds it", ["first"], true],
    ["only a later node holds it", ["second"], false],
    ["only a node inside a later one holds it", ["span"], false],
    ["no node holds it", [], false],
  ])("when %s, says %s and leaves it on no node", async (_when, marked, expected) => {
    const editor = await editorOf(CHAPTER_ONE);
    const result = update(editor, () => {
      const nodes = $copy(marked);
      return { startsMid: $takeStartsMidParagraph(nodes), holding: $holding(nodes) };
    });
    expect(result).toEqual({ startsMid: expected, holding: [] });
  });

  it("says false of no nodes", async () => {
    const editor = await editorOf(CHAPTER_ONE);
    expect(update(editor, () => $takeStartsMidParagraph([]))).toBe(false);
  });
});

describe("$lineToJoinBeforeChapter", () => {
  /** The line it answers for `lines`' chapter line (`chapterAt`), from `$where`, as `marker: text`. */
  async function joinLineOf(
    lines: Line[],
    chapterAt: number,
    $where: () => RangeSelection,
  ): Promise<string | undefined> {
    const editor = await editorOf(lines);
    return update(editor, () => {
      const line = $lineToJoinBeforeChapter($where(), $line(chapterAt));
      return line && $lines()[line.getIndexWithinParent()];
    });
  }

  it.each<[string, string | undefined, () => RangeSelection]>([
    [
      "a caret after the chapter line",
      "ip: An introduction.",
      () => $select($inText("first words", 0)),
    ],
    [
      "a caret at the end of the line before it",
      "ip: An introduction.",
      () => $select($inText("An introduction.", 16)),
    ],
    [
      "a range from partway into the line before it",
      "ip: An introduction.",
      () => $select($inText("An introduction.", 3), $inText("first words", 2)),
    ],
    [
      "a range from partway into an earlier line",
      "h: Genesis",
      () => $select($inText("Genesis", 3), $inText("first words", 2)),
    ],
    [
      "a range from the start of the line before it",
      undefined,
      () => $select($inLine(2, 1), $inText("first words", 2)),
    ],
    [
      "a range from partway into a line after it",
      undefined,
      () => $select($inText("first words", 2), $inText("second line", 2)),
    ],
  ])("from %s, is %s", async (_where, expected, $where) => {
    expect(await joinLineOf(CHAPTER_ONE, 3, $where)).toBe(expected);
  });

  it("is never the book line", async () => {
    expect(
      await joinLineOf([$book, chapter(), para("p", "first words", "1")], 1, () =>
        $select($inText("first words", 0)),
      ),
    ).toBeUndefined();
  });

  it("is not a line with nothing in it but its glyph", async () => {
    expect(
      await joinLineOf([$book, para("ip", ""), chapter(), para("p", "first words", "1")], 2, () =>
        $select($inText("first words", 0)),
      ),
    ).toBeUndefined();
  });
});

describe("$selectionSpansBookOrChapterLine", () => {
  it.each<[string, boolean, () => RangeSelection]>([
    ["a caret", false, () => $select($inText("first words", 0))],
    [
      "a range in one line",
      false,
      () => $select($inText("first words", 0), $inText("first words", 5)),
    ],
    [
      "a range in the book line",
      false,
      () => $select($inText("Genesis title", 0), $inText("Genesis title", 5)),
    ],
    [
      "a range across two lines of text",
      false,
      () => $select($inText("first words", 3), $inText("second line", 3)),
    ],
    [
      "a range from the book line into the front matter",
      true,
      () => $select($inText("Genesis title", 3), $inText("Genesis", 3)),
    ],
    [
      "a range across the chapter line",
      true,
      () => $select($inText("An introduction.", 3), $inText("first words", 3)),
    ],
    [
      "a backward range across the chapter line",
      true,
      () => $select($inText("first words", 3), $inText("An introduction.", 3)),
    ],
    ["a range holding the chapter line alone", true, () => $select($onRoot(3), $onRoot(4))],
  ])("for %s is %s", async (_what, expected, $where) => {
    const editor = await editorOf(CHAPTER_ONE);
    expect(update(editor, () => $selectionSpansBookOrChapterLine($where()))).toBe(expected);
  });
});

describe("$removeTextKeepingBookAndChapterLines", () => {
  async function removeKeeping($where: () => RangeSelection, lines = CHAPTER_ONE) {
    const editor = await editorOf(lines);
    return update(editor, () => {
      const selection = $where();
      $removeTextKeepingBookAndChapterLines(selection);
      return { lines: $lines(), caret: $caret() };
    });
  }

  it("removes a range with no book or chapter line in it as Lexical does", async () => {
    expect(
      await removeKeeping(() => $select($inText("first words", 3), $inText("second line", 3))),
    ).toEqual({
      lines: [
        "book: Genesis title",
        "h: Genesis",
        "ip: An introduction.",
        "\\c 1",
        "p: firond line",
      ],
      caret: "4: fir|",
    });
  });

  it.each<[string, () => RangeSelection]>([
    ["forward", () => $select($onRoot(0), $onRoot(6))],
    ["backward", () => $select($onRoot(6), $onRoot(0))],
  ])(
    "over everything, %s, keeps both lines and empties the Scripture text to its first line",
    async (_direction, $where) => {
      expect(await removeKeeping($where)).toEqual({
        lines: ["book: Genesis title", "\\c 1", "p: "],
        caret: "2: |",
      });
    },
  );

  it("removes a run in part from the selection's start, and keeps the book line's text", async () => {
    expect(
      await removeKeeping(() => $select($inText("Genesis title", 8), $inText("first words", 3))),
    ).toEqual({
      lines: ["book: Genesis title", "\\c 1", "p: st words", "q1: second line"],
      caret: "2: |",
    });
  });

  it("removes the front matter run in part, and the Scripture text up to the selection's end", async () => {
    expect(
      await removeKeeping(() => $select($inText("An introduction.", 2), $inText("first words", 3))),
    ).toEqual({
      lines: [
        "book: Genesis title",
        "h: Genesis",
        "ip: An",
        "\\c 1",
        "p: st words",
        "q1: second line",
      ],
      caret: "4: |",
    });
  });

  it("over a range ending on the chapter line, puts the caret at the next paragraph's content start", async () => {
    expect(await removeKeeping(() => $select($inText("Genesis", 0), $onRoot(4)))).toEqual({
      lines: ["book: Genesis title", "\\c 1", "p: first words", "q1: second line"],
      caret: "2: |",
    });
  });

  it("over a range holding the chapter line alone, keeps it and puts the caret after it", async () => {
    expect(await removeKeeping(() => $select($onRoot(3), $onRoot(4)))).toEqual({
      lines: [
        "book: Genesis title",
        "h: Genesis",
        "ip: An introduction.",
        "\\c 1",
        "p: first words",
        "q1: second line",
      ],
      caret: "4: |",
    });
  });

  describe("with no paragraph after the chapter line", () => {
    const LAST: Line[] = [$book, para("h", "Genesis"), para("ip", "An introduction."), chapter()];
    const BEFORE_TABLE: Line[] = [...LAST, () => $createImmutableChapterNode("9")];

    it.each<[string, Line[], () => RangeSelection, string]>([
      [
        "the chapter line ends the document; the start went with its run",
        LAST,
        () => $select($inText("Genesis", 0), $onRoot(4)),
        "root@2",
      ],
      [
        "the chapter line ends the document; the start is in the book line",
        LAST,
        () => $select($inText("Genesis title", 8), $onRoot(4)),
        "root@2",
      ],
      [
        "the start is in the front matter",
        LAST,
        () => $select($inText("An introduction.", 2), $onRoot(4)),
        "root@4",
      ],
      [
        "another block follows; the start is in the book line",
        BEFORE_TABLE,
        () => $select($inText("Genesis title", 8), $onRoot(4)),
        "root@2",
      ],
    ])("puts the caret right after it: %s", async (_case, lines, $where, caret) => {
      expect((await removeKeeping($where, lines)).caret).toBe(caret);
    });
  });

  it("with no chapter line, hosts the caret in the last run", async () => {
    expect(
      await removeKeeping(
        () => $select($inText("Genesis title", 8), $inText("An introduction.", 3)),
        [$book, para("h", "Genesis"), para("ip", "An introduction.")],
      ),
    ).toEqual({
      lines: ["book: Genesis title", "h: introduction."],
      caret: "1: |",
    });
  });
});
