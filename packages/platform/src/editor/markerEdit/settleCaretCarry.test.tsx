/**
 * The Tier-2 settle re-tokenizes a scope's bytes and splices fresh nodes in place, so the caret and
 * every comment mark inside the scope have to be carried from the live bytes to the settled ones.
 * Where the settle spells bytes differently from how they were typed — an attribute section it
 * re-spells (`|lemma="grace"` settles to the bare default `|grace`), or a typed note literal it
 * turns into one note — a raw byte count lands past the difference by its length. These rows pin
 * that positions are carried through the settle's byte alignment instead: every byte to the same
 * byte, and a caret inside a note the settle carries across whole left where it was.
 *
 * Standard view only — the marker-edit engine that settles a scope runs in no other view.
 */
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import {
  contentPath,
  twoParaUsj,
  typeOver,
  $textContaining,
} from "../positions/positions.test-helpers";
import { IDLE_SETTLE_DELAY_MS } from "./MarkerEditPlugin";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $getSelection,
  $getState,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  LexicalEditor,
  LexicalNode,
  PointType,
  $setSelection,
  TextNode,
} from "lexical";
import {
  $isMarkerNode,
  $isNoteNode,
  $isParaNode,
  $isTypedMarkNode,
  $wrapSelectionInTypedMarkNode,
  COMMENT_MARK_TYPE,
  getPendedDisplayOwners,
  NBSP,
  textTypeState,
  ZWSP,
} from "shared";

type Mounted = Awaited<ReturnType<typeof mountStandardViewEditor>>;

/** Where the caret sits in the text {@link caretText} spells. */
const CARET = "‸";
/** How {@link caretText} spells a note the caret is not inside. */
const NOTE = "⟨note⟩";

/** A `\w` span holding `word`, whose default attribute is `lemma`. */
const wordSpan = (word: string, attributes: { [name: string]: string } = {}): MarkerObject => ({
  type: "char",
  marker: "w",
  ...attributes,
  content: [word],
});

/** `In the \w grace\w* of God made`. */
const graceUsj = (attributes: { [name: string]: string } = {}): Usj =>
  twoParaUsj(["In the ", wordSpan("grace", attributes), " of God made"]);

const TYPED_ATTRIBUTE = '|lemma="grace"';

/** A typed note literal ahead of the paragraph's last words. */
const NOTE_LITERAL = " \\f + \\ft n\\f* of God made and the rest of it";

/** Run `edit` as one commit and let the engine's microtask-deferred work drain. */
async function inOneUpdate(lexical: LexicalEditor, edit: () => void): Promise<void> {
  await act(async () => {
    lexical.update(edit);
    await Promise.resolve();
    await Promise.resolve();
  });
}

/** Let the idle settle clock expire, which settles even the scope the caret is in. */
async function idleSettle(): Promise<void> {
  await act(async () => {
    await vi.advanceTimersByTimeAsync(IDLE_SETTLE_DELAY_MS + 50);
  });
}

/** Wrap a comment mark over `word`, which must sit in one text node — the shape `CommentPlugin`
 * creates. */
function $commentOver(word: string, id: string): void {
  const text = $textContaining(word);
  const start = text.getTextContent().indexOf(word);
  const selection = $createRangeSelection();
  selection.anchor.set(text.getKey(), start, "text");
  selection.focus.set(text.getKey(), start + word.length, "text");
  $wrapSelectionInTypedMarkNode(selection, COMMENT_MARK_TYPE, id);
}

/** Comment marks over "In", "of" and "God". */
async function commentOnThreeWords(lexical: LexicalEditor): Promise<void> {
  await inOneUpdate(lexical, () => {
    $commentOver("In", "c1");
    $commentOver("of", "c2");
    $commentOver("God", "c3");
  });
}

/** What each comment mark in the live tree wraps, by id. */
function liveComments(lexical: LexicalEditor): { [id: string]: string } {
  return lexical.getEditorState().read(() => {
    const out: { [id: string]: string } = {};
    const walk = (node: LexicalNode): void => {
      if ($isTypedMarkNode(node))
        for (const id of node.getTypedIDs()[COMMENT_MARK_TYPE] ?? [])
          out[id] = (out[id] ?? "") + node.getTextContent();
      else if ($isElementNode(node)) node.getChildren().forEach(walk);
    };
    walk($getRoot());
    return out;
  });
}

/** What each comment milestone pair in a settled paragraph wraps, by id — `getUsj()` writes a
 * comment mark as a `zmsc-s`/`zmsc-e` milestone pair. */
function settledComments(para: MarkerContent | undefined): { [id: string]: string } {
  const out: { [id: string]: string } = {};
  const open = new Set<string>();
  const walk = (item: MarkerContent): void => {
    if (typeof item === "string") {
      open.forEach((id) => (out[id] = (out[id] ?? "") + item));
      return;
    }
    if (item.marker === "zmsc-s" && typeof item.sid === "string") open.add(item.sid);
    else if (item.marker === "zmsc-e" && typeof item.eid === "string") open.delete(item.eid);
    else item.content?.forEach(walk);
  };
  walk(para ?? "");
  return out;
}

/** Whether the caret's node is `node` or inside it. */
function $isCaretInside(node: LexicalNode, point: PointType): boolean {
  const caretNode = point.getNode();
  return node.is(caretNode) || ($isElementNode(node) && node.isParentOf(caretNode));
}

/**
 * The first paragraph's text with {@link CARET} where the collapsed caret sits, NBSPs read as
 * spaces. A note the caret is not inside reads as {@link NOTE}, so the rows can say which side of
 * a note the caret is on without spelling the note's own bytes.
 */
function caretText(lexical: LexicalEditor): string {
  return lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection) || !selection.isCollapsed())
      throw new Error("expected a collapsed caret");
    const { anchor } = selection;
    const para = $getRoot().getChildren().find($isParaNode);
    if (!para) throw new Error("no paragraph");
    const walk = (node: LexicalNode): string => {
      if ($isNoteNode(node) && !$isCaretInside(node, anchor)) return NOTE;
      if ($isTextNode(node)) {
        const text = node.getTextContent();
        return anchor.key === node.getKey()
          ? `${text.slice(0, anchor.offset)}${CARET}${text.slice(anchor.offset)}`
          : text;
      }
      if (!$isElementNode(node)) return "";
      const children = node.getChildren();
      let out = "";
      children.forEach((child, index) => {
        if (anchor.type === "element" && anchor.key === node.getKey() && anchor.offset === index)
          out += CARET;
        out += walk(child);
      });
      if (
        anchor.type === "element" &&
        anchor.key === node.getKey() &&
        anchor.offset === children.length
      )
        out += CARET;
      return out;
    };
    return walk(para).replaceAll(NBSP, " ");
  });
}

/** Append `typed` to the `\w` span's word, with the caret `caretFromEnd` bytes before its end. */
async function appendToWord(
  lexical: LexicalEditor,
  typed: string,
  caretFromEnd = 0,
): Promise<void> {
  await inOneUpdate(lexical, () => {
    const word = $textContaining("grace");
    const text = `${word.getTextContent()}${typed}`;
    word.setTextContent(text);
    word.select(text.length - caretFromEnd, text.length - caretFromEnd);
  });
  expect(getPendedDisplayOwners(lexical)?.size ?? 0).toBeGreaterThan(0);
}

/** The settled first paragraph. */
function settledPara(mounted: Mounted): MarkerContent | undefined {
  return mounted.ref.current?.getUsj()?.content[2];
}

/** The `\w` span of the settled first paragraph. */
function settledWord(mounted: Mounted): MarkerObject | undefined {
  const para = settledPara(mounted);
  if (typeof para !== "object") return undefined;
  return para.content?.find(
    (item): item is MarkerObject => typeof item === "object" && item.marker === "w",
  );
}

/** The live first paragraph's bytes, NBSPs read as spaces. */
function liveParaText(lexical: LexicalEditor): string {
  return lexical
    .getEditorState()
    .read(() => $getRoot().getChildren().find($isParaNode)?.getTextContent() ?? "")
    .replaceAll(NBSP, " ");
}

/** What every annotation mark in the live tree wraps, of any type. */
function liveMarkTexts(lexical: LexicalEditor): string[] {
  return lexical.getEditorState().read(() => {
    const out: string[] = [];
    const walk = (node: LexicalNode): void => {
      if ($isTypedMarkNode(node)) out.push(node.getTextContent());
      else if ($isElementNode(node)) node.getChildren().forEach(walk);
    };
    walk($getRoot());
    return out;
  });
}

beforeEach(() => {
  vi.useFakeTimers({ toFake: ["setTimeout", "clearTimeout", "Date"] });
});
afterEach(() => {
  vi.useRealTimers();
});

describe("comment marks carried across a typed attribute the settle re-spells", () => {
  it("cover the same words in the settled read and after the settle", async () => {
    const mounted = await mountStandardViewEditor(graceUsj());
    await commentOnThreeWords(mounted.lexical);
    await appendToWord(mounted.lexical, TYPED_ATTRIBUTE);

    const expected = { c1: "In", c2: "of", c3: "God" };
    expect(settledComments(settledPara(mounted))).toEqual(expected);

    // Moving the caret to the paragraph's start departs the span it was typed in.
    await inOneUpdate(mounted.lexical, () => $textContaining("In").select(0, 0));
    expect(settledWord(mounted)).toEqual({
      type: "char",
      marker: "w",
      lemma: "grace",
      content: ["grace"],
    });
    expect(liveComments(mounted.lexical)).toEqual(expected);
  });
});

describe("the caret carried across a typed attribute the settle re-spells", () => {
  it("stays on the value byte it was on", async () => {
    const mounted = await mountStandardViewEditor(graceUsj());
    await appendToWord(mounted.lexical, TYPED_ATTRIBUTE, 'ace"'.length);
    expect(caretText(mounted.lexical)).toContain(`|lemma="gr${CARET}ace"`);

    await idleSettle();

    expect(settledWord(mounted)).toMatchObject({ lemma: "grace" });
    expect(caretText(mounted.lexical)).toContain(`|gr${CARET}ace\\w*`);
  });

  it("stays right after the value when it was at the end of what was typed", async () => {
    const mounted = await mountStandardViewEditor(graceUsj());
    await appendToWord(mounted.lexical, TYPED_ATTRIBUTE);

    await idleSettle();

    expect(settledWord(mounted)).toMatchObject({ lemma: "grace" });
    expect(caretText(mounted.lexical)).toContain(`|grace${CARET}\\w*`);
  });
});

describe("a caret held in an attribute run whose section is deleted", () => {
  /** The span's attribute display run. */
  function $attributeRun(): TextNode {
    const run = $getRoot()
      .getAllTextNodes()
      .find((node) => !$isMarkerNode(node) && $getState(node, textTypeState) === "attribute");
    if (!run) throw new Error("no attribute run");
    return run;
  }

  it("stays on the value byte it was on, and the marks stay put", async () => {
    const mounted = await mountStandardViewEditor(graceUsj({ lemma: "grace", strong: "G5485" }));
    await commentOnThreeWords(mounted.lexical);
    // Delete ` strong="G5485"`, leaving the caret in the value the run keeps.
    await inOneUpdate(mounted.lexical, () => {
      const run = $attributeRun();
      const leading = /^\s*/.exec(run.getTextContent())?.[0] ?? "";
      const text = `${leading}${TYPED_ATTRIBUTE}`;
      run.setTextContent(text);
      const caret = text.length - 'ace"'.length;
      run.select(caret, caret);
    });
    expect(caretText(mounted.lexical)).toContain(`|lemma="gr${CARET}ace"`);

    await idleSettle();

    expect(settledWord(mounted)).toEqual({
      type: "char",
      marker: "w",
      lemma: "grace",
      content: ["grace"],
    });
    expect(caretText(mounted.lexical)).toContain(`|gr${CARET}ace\\w*`);
    expect(liveComments(mounted.lexical)).toEqual({ c1: "In", c2: "of", c3: "God" });
  });
});

describe("the caret carried across a typed note literal", () => {
  it("stays on the byte it was on past the literal", async () => {
    const mounted = await mountStandardViewEditor(graceUsj());
    await typeOver(
      mounted.lexical,
      " of God made",
      NOTE_LITERAL,
      NOTE_LITERAL.indexOf(" of") + " o".length,
    );

    await idleSettle();

    expect(caretText(mounted.lexical)).toContain(`${NOTE} o${CARET}f God`);
  });

  it("stays right after the note when it was right after the literal's closer", async () => {
    const mounted = await mountStandardViewEditor(graceUsj());
    await typeOver(
      mounted.lexical,
      " of God made",
      NOTE_LITERAL,
      NOTE_LITERAL.indexOf("\\f*") + "\\f*".length,
    );

    await idleSettle();

    expect(caretText(mounted.lexical)).toContain(`${NOTE}${CARET} of God`);
  });
});

describe("a caret inside a note the settle carries across whole", () => {
  it("stays where it was in the note's text when a literal beside the note settles", async () => {
    const mounted = await mountStandardViewEditor(
      twoParaUsj([
        "In the ",
        {
          type: "note",
          marker: "f",
          caller: "+",
          content: [{ type: "char", marker: "fr", content: ["1.1"] }, "note body text"],
        },
        " of God made",
      ]),
    );
    await typeOver(mounted.lexical, " of God made", " of \\nd God\\nd* made", 1);
    await inOneUpdate(mounted.lexical, () =>
      $textContaining("note body text").select("note ".length, "note ".length),
    );

    await idleSettle();

    expect(JSON.stringify(settledPara(mounted))).toContain('"marker":"nd"');
    expect(caretText(mounted.lexical)).toContain(`note ${CARET}body text`);
  });
});

describe('a comment mark over the `|lemma="` of a typed attribute section', () => {
  /** Type `|lemma="grace"` after the span's word, wrap a comment mark over its `|lemma="`, and
   * put the caret where `placeCaret` puts it. */
  async function markOverAttributeName(placeCaret: () => void): Promise<Mounted> {
    const mounted = await mountStandardViewEditor(graceUsj());
    await appendToWord(mounted.lexical, TYPED_ATTRIBUTE);
    await inOneUpdate(mounted.lexical, () => {
      const text = $textContaining(TYPED_ATTRIBUTE);
      const start = text.getTextContent().indexOf('|lemma="');
      const selection = $createRangeSelection();
      selection.anchor.set(text.getKey(), start, "text");
      selection.focus.set(text.getKey(), start + '|lemma="'.length, "text");
      $wrapSelectionInTypedMarkNode(selection, COMMENT_MARK_TYPE, "c1");
      placeCaret();
    });
    return mounted;
  }

  const settledGrace = { type: "char", marker: "w", lemma: "grace", content: ["grace"] };

  it("settles the attribute exactly once with the caret held at the end of what was typed", async () => {
    const mounted = await markOverAttributeName(() => {
      const tail = $textContaining('grace"');
      tail.select(tail.getTextContentSize(), tail.getTextContentSize());
    });
    expect(settledWord(mounted)).toEqual(settledGrace);

    await idleSettle();

    expect(settledWord(mounted)).toEqual(settledGrace);
    expect(liveParaText(mounted.lexical)).toBe("\\p In the \\w grace|grace\\w* of God made");
    expect(caretText(mounted.lexical)).toContain(`|grace${CARET}\\w*`);
    expect(liveComments(mounted.lexical)).toEqual({});
  });

  it("settles the attribute exactly once with the caret in another paragraph", async () => {
    const mounted = await markOverAttributeName(() => $textContaining("depart here").select(1, 1));
    expect(settledWord(mounted)).toEqual(settledGrace);

    await idleSettle();

    expect(settledWord(mounted)).toEqual(settledGrace);
    expect(liveParaText(mounted.lexical)).toBe("\\p In the \\w grace|grace\\w* of God made");
    expect(liveComments(mounted.lexical)).toEqual({});
  });

  it("keeps covering the word in front of the attribute and settles the attribute once", async () => {
    const mounted = await mountStandardViewEditor(graceUsj());
    await appendToWord(mounted.lexical, TYPED_ATTRIBUTE);
    await inOneUpdate(mounted.lexical, () => {
      const text = $textContaining(TYPED_ATTRIBUTE);
      const content = text.getTextContent();
      const selection = $createRangeSelection();
      selection.anchor.set(text.getKey(), content.indexOf("ace|"), "text");
      selection.focus.set(text.getKey(), content.indexOf("lemma"), "text");
      $wrapSelectionInTypedMarkNode(selection, COMMENT_MARK_TYPE, "c1");
      $textContaining("depart here").select(1, 1);
    });

    await idleSettle();

    expect(settledWord(mounted)).toMatchObject({ lemma: "grace" });
    expect(liveParaText(mounted.lexical)).toBe("\\p In the \\w grace|grace\\w* of God made");
    expect(liveComments(mounted.lexical)).toEqual({ c1: "ace" });
  });
});

describe("an annotation mark wrapped over an attribute display run", () => {
  it("covers only the content when a comment is made across the run", async () => {
    const mounted = await mountStandardViewEditor(graceUsj({ lemma: "grace" }));
    // The shape `CommentPlugin` makes from a selection that runs from the word into the span's
    // attribute run: `gr[ace|gr]ace`.
    await inOneUpdate(mounted.lexical, () => {
      const word = $textContaining("grace");
      const run = $getRoot()
        .getAllTextNodes()
        .find((node) => $getState(node, textTypeState) === "attribute");
      if (!run) throw new Error("no attribute run");
      const selection = $createRangeSelection();
      selection.anchor.set(word.getKey(), word.getTextContent().indexOf("ace"), "text");
      selection.focus.set(run.getKey(), run.getTextContent().indexOf("|") + "|gr".length, "text");
      $wrapSelectionInTypedMarkNode(selection, COMMENT_MARK_TYPE, "c1");
    });

    expect(settledWord(mounted)).toMatchObject({ lemma: "grace" });
    expect(liveParaText(mounted.lexical)).toBe("\\p In the \\w grace|grace\\w* of God made");
    expect(liveComments(mounted.lexical)).toEqual({ c1: "ace" });
  });

  it("leaves the run whole when a mark that begins with the span is carried through a settle", async () => {
    const mounted = await mountStandardViewEditor(
      twoParaUsj(["start ", wordSpan("name", { lemma: "grace" }), " end words"]),
    );
    await act(async () => {
      mounted.ref.current?.setAnnotation(
        {
          start: { jsonPath: contentPath([2, 0]), offset: 2 },
          end: { jsonPath: contentPath([2, 2]), offset: 4 },
        },
        "test",
        "1",
      );
      await Promise.resolve();
    });
    // The shape a user leaves by deleting the mark's leading text: the char span is now the
    // mark's first child.
    await inOneUpdate(mounted.lexical, () => {
      const lead = $getRoot()
        .getAllTextNodes()
        .find((node) => node.getTextContent() === "art ");
      if (!lead) throw new Error("expected leading text in the mark");
      lead.remove();
    });

    await typeOver(mounted.lexical, " words", " words \\wj x\\wj*");
    await idleSettle();

    expect(settledWord(mounted)).toMatchObject({ lemma: "grace" });
    expect(liveParaText(mounted.lexical)).toContain("name|grace\\w* end");
    expect(liveMarkTexts(mounted.lexical).join("")).not.toContain("|");
  });
});

describe("an annotation mark that begins with a whole char span", () => {
  it("keeps the span's separator a display byte when the paragraph settles", async () => {
    const mounted = await mountStandardViewEditor(
      twoParaUsj(["start ", { type: "char", marker: "nd", content: ["name"] }, " end words"]),
    );
    await act(async () => {
      mounted.ref.current?.setAnnotation(
        {
          start: { jsonPath: contentPath([2, 0]), offset: "st".length },
          end: { jsonPath: contentPath([2, 2]), offset: 0 },
        },
        "test",
        "1",
      );
      await Promise.resolve();
    });
    // The shape a user leaves by deleting the mark's leading text: the char span is now the
    // mark's first child.
    await inOneUpdate(mounted.lexical, () => {
      const lead = $getRoot()
        .getAllTextNodes()
        .find((node) => node.getTextContent() === "art ");
      if (!lead) throw new Error("expected leading text in the mark");
      lead.remove();
    });
    expect(liveMarkTexts(mounted.lexical).join("").replaceAll(NBSP, " ")).toBe("\\nd name\\nd*");

    await typeOver(mounted.lexical, " end words", " end words \\wj x\\wj*");
    await idleSettle();

    const para = settledPara(mounted);
    expect(typeof para === "object" && para.content?.[1]).toEqual({
      type: "char",
      marker: "nd",
      content: ["name"],
    });
    expect(liveParaText(mounted.lexical)).toContain("st\\nd name\\nd* end words");
    expect(liveMarkTexts(mounted.lexical)).toEqual(["name"]);
  });
});

describe("an element-point caret in a paragraph whose literal settles", () => {
  const LITERAL = "In the \\nd LORD\\nd* of God ";

  /** A footnote with the body `note body text`. */
  const footnote: MarkerObject = {
    type: "note",
    marker: "f",
    caller: "+",
    content: [{ type: "char", marker: "fr", content: ["1.1"] }, "note body text"],
  };

  /** Mount `content` as the first paragraph, type {@link LITERAL} over its `lord` text, then put
   * the caret on the paragraph element at the child offset `offsetOf` picks, which departs the
   * literal. */
  async function elementCaretAfterLiteral(
    content: Usj["content"],
    offsetOf: (childrenSize: number) => number,
  ): Promise<Mounted> {
    const mounted = await mountStandardViewEditor(twoParaUsj(content));
    await typeOver(mounted.lexical, "lord", LITERAL, LITERAL.indexOf("nd "));
    await inOneUpdate(mounted.lexical, () => {
      const para = $getRoot().getChildren().find($isParaNode);
      if (!para) throw new Error("no paragraph");
      const offset = offsetOf(para.getChildrenSize());
      const selection = $createRangeSelection();
      selection.anchor.set(para.getKey(), offset, "element");
      selection.focus.set(para.getKey(), offset, "element");
      $setSelection(selection);
    });
    await idleSettle();
    const literalLeft = mounted.lexical.getEditorState().read(() =>
      $getRoot()
        .getAllTextNodes()
        .some((node) => node.getTextContent().includes("LORD\\nd*")),
    );
    expect(literalLeft).toBe(false);
    expect(liveParaText(mounted.lexical)).toContain("\\nd LORD\\nd*");
    return mounted;
  }

  it("stays after a trailing note when it was past the paragraph's last child", async () => {
    const mounted = await elementCaretAfterLiteral(["lord ", footnote], (size) => size);

    // A caret past a trailing note gets a display-only caret host after the note.
    expect(caretText(mounted.lexical).replaceAll(ZWSP, "")).toMatch(new RegExp(`${NOTE}${CARET}$`));
  });

  it("stays in front of a note it was in front of", async () => {
    const mounted = await elementCaretAfterLiteral(
      ["lord ", footnote, " made"],
      (size) => size - 2,
    );

    expect(caretText(mounted.lexical)).toContain(`of God ${CARET}${NOTE} made`);
  });

  it("stays at the paragraph's start when it was in front of every child", async () => {
    const mounted = await elementCaretAfterLiteral(["lord ", footnote], () => 0);

    expect(caretText(mounted.lexical)).toMatch(new RegExp(`^${CARET}`));
  });
});
