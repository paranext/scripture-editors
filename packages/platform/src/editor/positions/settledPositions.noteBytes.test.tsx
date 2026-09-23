/**
 * Positions on bytes a scope's two documents spell differently around a NOTE, in both directions.
 *
 * A typed note literal (`\f + \ft note\f*` typed as plain text) settles into a real note. The
 * settled scope spells that note as one preserved-node placeholder byte, while the live scope still
 * spells every byte of the literal — so the settled side has a preserved run the live side has no
 * node for. Positions outside the literal still share the scope's bytes; positions inside it name
 * the note's own bytes, which the literal spells one for one.
 *
 * A note whose CONTENT is pending keeps its own marker, caller and closing glyph through the
 * content rebuild unchanged, but the note scope's fragment covers only the content — so a position
 * on those glyphs crosses by the note's own location rather than by a byte of the fragment.
 *
 * Every settled coordinate is derived from the document `getUsj()` actually returned.
 */
import { mountExpandedNoteEditor, mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { $prepareSettleScopes } from "./settledScopes.utils";
import {
  $livePointFromSettledLocation,
  $settledLocationFromLivePoint,
  $settledSelectionFromLive,
} from "./settledPositions.utils";
import {
  contentPath,
  huskBeforeNoteUsj,
  pendNoteInsideSettlingPara,
  propertyPath,
  settledNoteIndex,
  settledPara,
  settledParaIndex,
  settledPositionContext,
  settledTextIndex,
  twoParaUsj,
  typeOver,
  $textContaining,
} from "./positions.test-helpers";
import { $pendGlyphEdit } from "../markerEdit/markerEdit.test-helpers";
import { SettledPositionContext } from "./settledPositions.model";
import { MarkerObject, UsjDocumentLocation } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createTextNode,
  $getRoot,
  $isTextNode,
  LexicalEditor,
  LexicalNode,
  TextNode,
} from "lexical";
import {
  $isCharNode,
  $isMarkerNode,
  $isNoteNode,
  $isParaNode,
  getPendedDisplayOwners,
  NoteNode,
} from "shared";

/** The first paragraph's top-level content index in every fixture here (book, chapter, para). */
const PARA_TOP_INDEX = 2;

/** The paragraph text with a note literal typed into it, and the literal's own spelling. */
const LITERAL = "\\f + \\ft note\\f*";
const LIVE = `In the beginning ${LITERAL} made`;

/** The settled location of a live point. */
function settledLocationOf(
  lexical: LexicalEditor,
  context: SettledPositionContext,
  $point: () => [LexicalNode, number],
): UsjDocumentLocation | undefined {
  return lexical.getEditorState().read(() => {
    const prepared = $prepareSettleScopes(context);
    const [node, offset] = $point();
    return $settledLocationFromLivePoint(prepared, node, offset);
  });
}

/** The live point a settled location resolves to, as `[key, offset, type]`. */
function livePointOf(
  lexical: LexicalEditor,
  context: SettledPositionContext,
  location: UsjDocumentLocation,
) {
  return lexical
    .getEditorState()
    .read(() => $livePointFromSettledLocation(context, $prepareSettleScopes(context), location));
}

describe("a paragraph pending on a typed note literal", () => {
  /** The literal typed into the paragraph, with its settled coordinates read from `getUsj()`. */
  async function pendingNoteLiteral() {
    const mounted = await mountStandardViewEditor(twoParaUsj(["In the beginning made"]));
    const key = await typeOver(mounted.lexical, "In the beginning made", LIVE);
    expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);
    const para = settledPara(mounted.ref.current?.getUsj(), PARA_TOP_INDEX);
    const noteIndex = settledNoteIndex(para);
    const note = para.content?.[noteIndex] as MarkerObject;
    const charIndex = note.content?.findIndex(
      (item) => typeof item !== "string" && item.type === "char",
    );
    if (charIndex === undefined || charIndex < 0) throw new Error("no settled char in the note");
    const char = note.content?.[charIndex] as MarkerObject;
    const bodyText = char.content?.[0];
    if (typeof bodyText !== "string") throw new Error("no settled note body text");
    const literalStart = LIVE.indexOf(LITERAL);
    return {
      ...mounted,
      key,
      context: settledPositionContext(mounted.lexical),
      head: settledTextIndex(para, "In the beginning "),
      tail: settledTextIndex(para, " made"),
      notePath: [PARA_TOP_INDEX, noteIndex],
      bodyPath: [PARA_TOP_INDEX, noteIndex, charIndex, 0],
      charPath: [PARA_TOP_INDEX, noteIndex, charIndex],
      bodyText,
      literalStart,
      $live: (offset: number): [LexicalNode, number] => [$textContaining(LIVE), offset],
    };
  }

  describe("live to settled", () => {
    it("reports a caret before the literal at its settled text offset", async () => {
      const { lexical, context, head, $live } = await pendingNoteLiteral();

      expect(settledLocationOf(lexical, context, () => $live(3))).toEqual({
        jsonPath: contentPath([PARA_TOP_INDEX, head]),
        offset: 3,
      });
    });

    it("reports a caret after the literal against the settled text after the note", async () => {
      const { lexical, context, tail, $live } = await pendingNoteLiteral();

      expect(settledLocationOf(lexical, context, () => $live(LIVE.indexOf(" made") + 2))).toEqual({
        jsonPath: contentPath([PARA_TOP_INDEX, tail]),
        offset: 2,
      });
    });

    it("reports a caret inside the literal's body at the settled note's body text", async () => {
      const { lexical, context, bodyPath, bodyText, $live } = await pendingNoteLiteral();
      const liveOffset = LIVE.indexOf("note\\f*") + 2;

      expect(settledLocationOf(lexical, context, () => $live(liveOffset))).toEqual({
        jsonPath: contentPath(bodyPath),
        offset: bodyText.indexOf("note") + 2,
      });
    });

    it("reports a caret inside the literal's note marker as the settled note's marker bytes", async () => {
      const { lexical, context, notePath, literalStart, $live } = await pendingNoteLiteral();

      // Between `\` and `f`: the first byte of the marker NAME.
      expect(settledLocationOf(lexical, context, () => $live(literalStart + 1))).toEqual({
        jsonPath: propertyPath(notePath, "marker"),
        propertyOffset: 0,
      });
    });

    it("reports a caret beside the literal's caller as the settled note's caller", async () => {
      const { lexical, context, notePath, literalStart, $live } = await pendingNoteLiteral();
      const caller = literalStart + LITERAL.indexOf("+");

      expect(settledLocationOf(lexical, context, () => $live(caller))).toEqual({
        jsonPath: propertyPath(notePath, "caller"),
        propertyOffset: 0,
      });
      expect(settledLocationOf(lexical, context, () => $live(caller + 1))).toEqual({
        jsonPath: propertyPath(notePath, "caller"),
        propertyOffset: 1,
      });
    });

    it("reports a caret inside the literal's char marker as the settled span's marker bytes", async () => {
      const { lexical, context, charPath, literalStart, $live } = await pendingNoteLiteral();

      // Between `\f` and `t` of `\ft`.
      const offset = literalStart + LITERAL.indexOf("\\ft") + 2;
      expect(settledLocationOf(lexical, context, () => $live(offset))).toEqual({
        jsonPath: propertyPath(charPath, "marker"),
        propertyOffset: 1,
      });
    });

    it("reports a caret inside the literal's closing marker at that byte of the settled closer", async () => {
      const { lexical, context, notePath, literalStart, $live } = await pendingNoteLiteral();

      // Between `\f` and `*` of the closer.
      const offset = literalStart + LITERAL.lastIndexOf("\\f*") + 2;
      expect(settledLocationOf(lexical, context, () => $live(offset))).toEqual({
        jsonPath: contentPath(notePath),
        closingMarkerOffset: 2,
      });
    });

    it("reports the live selection with the caret inside the literal", async () => {
      const { lexical, context, bodyPath, bodyText } = await pendingNoteLiteral();
      await act(async () => {
        lexical.update(() => {
          const offset = LIVE.indexOf("note\\f*") + 1;
          $textContaining(LIVE).select(offset, offset);
        });
        await Promise.resolve();
      });

      const selection = lexical
        .getEditorState()
        .read(() => $settledSelectionFromLive($prepareSettleScopes(context)));

      expect(selection).toEqual({
        start: { jsonPath: contentPath(bodyPath), offset: bodyText.indexOf("note") + 1 },
      });
    });
  });

  describe("settled to live", () => {
    it("resolves a settled position before the note onto the live text before the literal", async () => {
      const { lexical, context, key, head } = await pendingNoteLiteral();

      expect(
        livePointOf(lexical, context, { jsonPath: contentPath([PARA_TOP_INDEX, head]), offset: 3 }),
      ).toEqual({ key, offset: 3, type: "text" });
    });

    it("resolves a settled position after the note onto the live text after the literal", async () => {
      const { lexical, context, key, tail } = await pendingNoteLiteral();

      expect(
        livePointOf(lexical, context, { jsonPath: contentPath([PARA_TOP_INDEX, tail]), offset: 2 }),
      ).toEqual({ key, offset: LIVE.indexOf(" made") + 2, type: "text" });
    });

    it("resolves a settled position in the note's body onto the literal's body bytes", async () => {
      const { lexical, context, key, bodyPath, bodyText } = await pendingNoteLiteral();

      expect(
        livePointOf(lexical, context, {
          jsonPath: contentPath(bodyPath),
          offset: bodyText.indexOf("note") + 2,
        }),
      ).toEqual({ key, offset: LIVE.indexOf("note\\f*") + 2, type: "text" });
    });

    it("resolves the settled note's marker location onto the literal's `\\`", async () => {
      const { lexical, context, key, notePath, literalStart } = await pendingNoteLiteral();

      expect(livePointOf(lexical, context, { jsonPath: contentPath(notePath) })).toEqual({
        key,
        offset: literalStart,
        type: "text",
      });
    });

    it("resolves the settled note's marker location onto a literal that starts its own text node", async () => {
      // The whitespace in front of the literal ends the previous text node, so stepping over it to
      // the literal's `\\` crosses from one node's bytes into the next's.
      const mounted = await mountStandardViewEditor(twoParaUsj(["In the beginning made"]));
      let literalKey = "";
      await act(async () => {
        mounted.lexical.update(() => {
          const head = $textContaining("In the beginning made");
          head.setTextContent("In the beginning ");
          // A different format keeps the two text nodes from merging back into one.
          head.toggleFormat("bold");
          const literal = $createTextNode(`${LITERAL} made`);
          head.insertAfter(literal);
          literal.select(0, 0);
          literalKey = literal.getKey();
        });
        await Promise.resolve();
        await Promise.resolve();
      });
      expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);
      const para = settledPara(mounted.ref.current?.getUsj(), PARA_TOP_INDEX);
      const context = settledPositionContext(mounted.lexical);

      expect(
        livePointOf(mounted.lexical, context, {
          jsonPath: contentPath([PARA_TOP_INDEX, settledNoteIndex(para)]),
        }),
      ).toEqual({ key: literalKey, offset: 0, type: "text" });
    });

    it("resolves the settled note's caller onto the literal's caller byte", async () => {
      const { lexical, context, key, notePath, literalStart } = await pendingNoteLiteral();

      expect(
        livePointOf(lexical, context, {
          jsonPath: propertyPath(notePath, "caller"),
          propertyOffset: 0,
        }),
      ).toEqual({ key, offset: literalStart + LITERAL.indexOf("+"), type: "text" });
    });

    it("resolves a position in the paragraph after the scope onto that live paragraph", async () => {
      const { lexical, context, ref } = await pendingNoteLiteral();
      const next = settledParaIndex(ref.current?.getUsj(), "depart here");
      const departKey = lexical
        .getEditorState()
        .read(() => $textContaining("depart here").getKey());

      expect(
        livePointOf(lexical, context, { jsonPath: contentPath([next, 0]), offset: 2 }),
      ).toEqual({ key: departKey, offset: 2, type: "text" });
    });

    it("resolves a byte of the settled note's closing marker onto the literal's closer", async () => {
      const { lexical, context, key, notePath, literalStart } = await pendingNoteLiteral();

      expect(
        livePointOf(lexical, context, { jsonPath: contentPath(notePath), closingMarkerOffset: 2 }),
      ).toEqual({ key, offset: literalStart + LITERAL.lastIndexOf("\\f*") + 2, type: "text" });
    });
  });
});

/**
 * A typed literal whose settled node carries some of the typed bytes as ATTRIBUTES rather than as
 * content: `\cat x\cat*` settles into the note's `category`, and a figure's `|src="…" …` into its
 * `file`/`size`/`ref`. Those bytes are still USJ positions — an attribute marker, an attribute key,
 * a property value, a closing attribute marker — so a caret on any of them has one exact location.
 *
 * Every expected location is what core's `UsjReaderWriter` maps the byte's USFM index to
 * (`usfmVerseLocationToUsjDocumentLocation`, USJ 3.0) in the paragraph `getUsj()` returns — the
 * oracle for the one canonical location of each USFM position. The oracle lives in core, so the
 * values are hard-coded; in both settled paragraphs the literal becomes content item 1
 * (`["In the beginning ", node, " made"]`).
 */
describe("a typed literal the settle folds into attributes", () => {
  const CATEGORY_LITERAL = "\\f + \\cat x\\cat*\\ft note\\f*";
  const FIGURE_LITERAL = '\\fig cap|src="a.jpg" size="col" ref="1.1"\\fig*';
  const NODE_PATH = [PARA_TOP_INDEX, 1];
  const NODE = contentPath(NODE_PATH);

  /** Type `literal` into the paragraph, and check the settled paragraph has the literal's node at
   * {@link NODE_PATH} as the oracle's document does. */
  async function pendingLiteral(literal: string, type: string) {
    const live = `In the beginning ${literal} made`;
    const mounted = await mountStandardViewEditor(twoParaUsj(["In the beginning made"]));
    const key = await typeOver(mounted.lexical, "In the beginning made", live);
    expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);
    const para = settledPara(mounted.ref.current?.getUsj(), PARA_TOP_INDEX);
    expect(para.content?.[0]).toBe("In the beginning ");
    expect((para.content?.[1] as MarkerObject | undefined)?.type).toBe(type);
    return {
      ...mounted,
      key,
      live,
      literalStart: live.indexOf(literal),
      context: settledPositionContext(mounted.lexical),
    };
  }

  /** `[what the caret sits in front of, offset into the literal, the byte's settled location]`. */
  type ByteRow = readonly [string, number, UsjDocumentLocation];

  const categoryRows: readonly ByteRow[] = [
    ["the `\\` of `\\cat`", 5, { jsonPath: NODE, keyName: "category" }],
    ["the `c` of `\\cat`", 6, { jsonPath: NODE, keyName: "category", keyOffset: 0 }],
    ["the `t` of `\\cat`", 8, { jsonPath: NODE, keyName: "category", keyOffset: 2 }],
    ["the space after `\\cat`", 9, { jsonPath: NODE, keyName: "category", keyOffset: 3 }],
    [
      "the category value",
      10,
      { jsonPath: propertyPath(NODE_PATH, "category"), propertyOffset: 0 },
    ],
    [
      "the `\\` of `\\cat*`",
      11,
      { jsonPath: NODE, keyName: "category", keyClosingMarkerOffset: 0 },
    ],
    ["the `a` of `\\cat*`", 13, { jsonPath: NODE, keyName: "category", keyClosingMarkerOffset: 2 }],
    ["the `*` of `\\cat*`", 15, { jsonPath: NODE, keyName: "category", keyClosingMarkerOffset: 4 }],
    ["the `\\ft` after `\\cat*`", 16, { jsonPath: contentPath([...NODE_PATH, 0]) }],
  ];

  const figureRows: readonly ByteRow[] = [
    ["the `f` of `\\fig`", 1, { jsonPath: propertyPath(NODE_PATH, "marker"), propertyOffset: 0 }],
    [
      "the space after `\\fig`",
      4,
      { jsonPath: propertyPath(NODE_PATH, "marker"), propertyOffset: 3 },
    ],
    ["the caption", 5, { jsonPath: contentPath([...NODE_PATH, 0]), offset: 0 }],
    ["the `|`", 8, { jsonPath: contentPath([...NODE_PATH, 0]), offset: 3 }],
    ["the `s` of `src`", 9, { jsonPath: NODE, keyName: "file", keyOffset: 0 }],
    ["the `=` after `src`", 12, { jsonPath: NODE, keyName: "file", keyOffset: 3 }],
    ["the opening quote of the file value", 13, { jsonPath: NODE, keyName: "file", keyOffset: 4 }],
    ["the file value", 14, { jsonPath: propertyPath(NODE_PATH, "file"), propertyOffset: 0 }],
    [
      "the closing quote of the file value",
      19,
      { jsonPath: propertyPath(NODE_PATH, "file"), propertyOffset: 5 },
    ],
    [
      "the space between two attributes",
      20,
      { jsonPath: propertyPath(NODE_PATH, "file"), propertyOffset: 6 },
    ],
    ["the `s` of `size`", 21, { jsonPath: NODE, keyName: "size", keyOffset: 0 }],
    ["the size value", 27, { jsonPath: propertyPath(NODE_PATH, "size"), propertyOffset: 0 }],
    ["the `r` of `ref`", 32, { jsonPath: NODE, keyName: "ref", keyOffset: 0 }],
    [
      "the closing quote of the ref value",
      40,
      { jsonPath: propertyPath(NODE_PATH, "ref"), propertyOffset: 3 },
    ],
    ["the `\\` of `\\fig*`", 41, { jsonPath: NODE, closingMarkerOffset: 0 }],
    ["the `*` of `\\fig*`", 45, { jsonPath: NODE, closingMarkerOffset: 4 }],
  ];

  describe.each([
    ["a typed `\\cat` in a footnote literal", CATEGORY_LITERAL, "note", categoryRows],
    ["a typed figure's attribute list", FIGURE_LITERAL, "figure", figureRows],
  ] as const)("%s", (_, literal, type, rows) => {
    it.each(rows)(
      "reports a caret in front of %s at its settled location",
      async (__, at, location) => {
        const { lexical, context, literalStart } = await pendingLiteral(literal, type);

        expect(
          settledLocationOf(lexical, context, () => [$textContaining(literal), literalStart + at]),
        ).toEqual(location);
      },
    );

    it.each(rows)(
      "resolves the settled location of %s onto that live byte",
      async (__, at, location) => {
        const { lexical, context, key, literalStart } = await pendingLiteral(literal, type);

        expect(livePointOf(lexical, context, location)).toEqual({
          key,
          offset: literalStart + at,
          type: "text",
        });
      },
    );
  });

  it.each([
    ["a typed `\\cat`", CATEGORY_LITERAL, "note"],
    ["a figure", FIGURE_LITERAL, "figure"],
  ] as const)("carries a position after %s across in both directions", async (_, literal, type) => {
    const { lexical, context, key, live, ref } = await pendingLiteral(literal, type);
    const tail = settledTextIndex(settledPara(ref.current?.getUsj(), PARA_TOP_INDEX), " made");
    const settled = { jsonPath: contentPath([PARA_TOP_INDEX, tail]), offset: 2 };

    expect(
      settledLocationOf(lexical, context, () => [$textContaining(live), live.indexOf(" made") + 2]),
    ).toEqual(settled);
    expect(livePointOf(lexical, context, settled)).toEqual({
      key,
      offset: live.indexOf(" made") + 2,
      type: "text",
    });
  });

  it("carries a position in the note's body past a typed `\\cat` across in both directions", async () => {
    const { lexical, context, key, live } = await pendingLiteral(CATEGORY_LITERAL, "note");
    const body = { jsonPath: contentPath([...NODE_PATH, 0, 0]), offset: 2 };
    const liveOffset = live.indexOf("note\\f*") + 2;

    expect(settledLocationOf(lexical, context, () => [$textContaining(live), liveOffset])).toEqual(
      body,
    );
    expect(livePointOf(lexical, context, body)).toEqual({ key, offset: liveOffset, type: "text" });
  });
});

describe("a typed note literal in front of a note the paragraph already has", () => {
  /** The existing note is carried through the paragraph's rebuild; the literal becomes a second
   * note in front of it, so the settled paragraph's runs are one longer than the live one's. */
  async function literalBeforeExistingNote() {
    const mounted = await mountStandardViewEditor(
      twoParaUsj([
        "In the beginning made ",
        {
          type: "note",
          marker: "f",
          caller: "+",
          content: [{ type: "char", marker: "fr", content: ["1.1"] }, "existing body"],
        },
        " after",
      ]),
    );
    await typeOver(mounted.lexical, "In the beginning made ", `In the beginning ${LITERAL} made `);
    expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);
    const para = settledPara(mounted.ref.current?.getUsj(), PARA_TOP_INDEX);
    const notes = para.content?.flatMap((item, index) =>
      typeof item !== "string" && item.type === "note" ? [index] : [],
    );
    if (notes?.length !== 2)
      throw new Error(`expected two settled notes in ${JSON.stringify(para)}`);
    const existing = para.content?.[notes[1]] as MarkerObject;
    return {
      ...mounted,
      context: settledPositionContext(mounted.lexical),
      existingBodyPath: [PARA_TOP_INDEX, notes[1], settledTextIndex(existing, "existing body")],
      tail: settledTextIndex(para, " after"),
    };
  }

  it("reports a live caret in the existing note at that note's settled location", async () => {
    const { lexical, context, existingBodyPath } = await literalBeforeExistingNote();

    expect(
      settledLocationOf(lexical, context, () => [$textContaining("existing body"), 3]),
    ).toEqual({ jsonPath: contentPath(existingBodyPath), offset: 3 });
  });

  it("resolves a settled position in the existing note onto the live note", async () => {
    const { lexical, context, existingBodyPath } = await literalBeforeExistingNote();
    const bodyKey = lexical.getEditorState().read(() => $textContaining("existing body").getKey());

    expect(
      livePointOf(lexical, context, { jsonPath: contentPath(existingBodyPath), offset: 3 }),
    ).toEqual({ key: bodyKey, offset: 3, type: "text" });
  });

  it("carries a position after the existing note across in both directions", async () => {
    const { lexical, context, tail } = await literalBeforeExistingNote();
    const afterKey = lexical.getEditorState().read(() => $textContaining(" after").getKey());
    const settled = { jsonPath: contentPath([PARA_TOP_INDEX, tail]), offset: 2 };

    expect(settledLocationOf(lexical, context, () => [$textContaining(" after"), 2])).toEqual(
      settled,
    );
    expect(livePointOf(lexical, context, settled)).toEqual({
      key: afterKey,
      offset: 2,
      type: "text",
    });
  });
});

describe("a typed note literal in front of a char span's glyph", () => {
  /** A caret inside a marker glyph is anchored in every byte rather than in document bytes, so
   * this is the shape that carries a position past the literal in full-byte counts. */
  async function literalBeforeCharSpan() {
    const mounted = await mountStandardViewEditor(
      twoParaUsj(["In the beginning made ", { type: "char", marker: "nd", content: ["LORD"] }]),
    );
    await typeOver(mounted.lexical, "In the beginning made ", `In the beginning ${LITERAL} made `);
    expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);
    const para = settledPara(mounted.ref.current?.getUsj(), PARA_TOP_INDEX);
    const charIndex = para.content?.findIndex(
      (item) => typeof item !== "string" && item.type === "char",
    );
    if (charIndex === undefined || charIndex < 0) throw new Error("no settled char span");
    return {
      ...mounted,
      context: settledPositionContext(mounted.lexical),
      charPath: [PARA_TOP_INDEX, charIndex],
    };
  }

  /** The live char span's opening glyph. */
  function $opener(): TextNode {
    const glyph = $getRoot()
      .getAllTextNodes()
      .find((text) => $isMarkerNode(text) && text.getTextContent() === "\\nd");
    if (!glyph) throw new Error("no \\nd glyph");
    return glyph;
  }

  it("reports a caret inside the glyph as the settled span's marker bytes", async () => {
    const { lexical, context, charPath } = await literalBeforeCharSpan();

    expect(settledLocationOf(lexical, context, () => [$opener(), 2])).toEqual({
      jsonPath: propertyPath(charPath, "marker"),
      propertyOffset: 1,
    });
  });

  it("resolves the settled span's marker bytes onto the live glyph", async () => {
    const { lexical, context, charPath } = await literalBeforeCharSpan();
    const opener = lexical.getEditorState().read(() => $opener().getKey());

    expect(
      livePointOf(lexical, context, {
        jsonPath: propertyPath(charPath, "marker"),
        propertyOffset: 1,
      }),
    ).toEqual({ key: opener, offset: 2, type: "text" });
  });
});

/** A note whose CONTENT is pending: its reference span's glyphs are retyped. */
async function noteContentPending() {
  const mounted = await mountExpandedNoteEditor(
    twoParaUsj([
      "before ",
      {
        type: "note",
        marker: "f",
        caller: "+",
        content: [{ type: "char", marker: "fr", content: ["1.1"] }, "note body"],
      },
      " after",
    ]),
  );
  await act(async () => {
    mounted.lexical.update(() => {
      const reference = $liveNote().getChildren().find($isCharNode);
      const glyphs = reference?.getChildren().filter($isMarkerNode) ?? [];
      if (glyphs.length < 2) throw new Error("expected the reference span's glyph pair");
      $pendGlyphEdit(glyphs[0], "\\fq");
      $pendGlyphEdit(glyphs[glyphs.length - 1], "\\fq*");
    });
    await Promise.resolve();
    await Promise.resolve();
  });
  const para = settledPara(mounted.ref.current?.getUsj(), PARA_TOP_INDEX);
  return {
    ...mounted,
    notePath: [PARA_TOP_INDEX, settledNoteIndex(para)],
    context: settledPositionContext(mounted.lexical),
  };
}

/** The first paragraph's note, live. */
function $liveNote(): NoteNode {
  const note = $getRoot().getChildren().filter($isParaNode)[0].getChildren().find($isNoteNode);
  if (!note) throw new Error("no note");
  return note;
}

/** The live note's opening glyph, editable caller and closing glyph. */
function $noteOwnNodes(): { opener: TextNode; caller: TextNode; closer: TextNode } {
  const children = $liveNote().getChildren();
  const opener = children[0];
  const closer = children[children.length - 1];
  const caller = children.find(
    (child): child is TextNode =>
      $isTextNode(child) && !$isMarkerNode(child) && child.getTextContent().includes("+"),
  );
  if (!$isMarkerNode(opener) || !$isMarkerNode(closer) || !caller)
    throw new Error("expected the note's opening glyph, caller and closing glyph");
  return { opener, caller, closer };
}

describe("a caret on the own glyphs of a note whose content is pending", () => {
  it("reports a caret in the opening glyph as the settled note's marker bytes", async () => {
    const { lexical, context, notePath } = await noteContentPending();
    // The premise: the note is its own scope, whose fragment spells only the note's content.
    const kinds = lexical
      .getEditorState()
      .read(() => [...$prepareSettleScopes(context).byFirstLiveKey.values()].map((p) => p.kind));
    expect(kinds).toEqual(["note"]);

    expect(settledLocationOf(lexical, context, () => [$noteOwnNodes().opener, 1])).toEqual({
      jsonPath: propertyPath(notePath, "marker"),
      propertyOffset: 0,
    });
    expect(settledLocationOf(lexical, context, () => [$noteOwnNodes().opener, 0])).toEqual({
      jsonPath: contentPath(notePath),
    });
  });

  it("reports a caret in the caller as the settled note's caller", async () => {
    const { lexical, context, notePath } = await noteContentPending();

    expect(
      settledLocationOf(lexical, context, () => {
        const { caller } = $noteOwnNodes();
        return [caller, caller.getTextContent().indexOf("+")];
      }),
    ).toEqual({ jsonPath: propertyPath(notePath, "caller"), propertyOffset: 0 });
  });

  it("reports a caret in the closing glyph at that byte of the settled closer", async () => {
    const { lexical, context, notePath } = await noteContentPending();

    expect(settledLocationOf(lexical, context, () => [$noteOwnNodes().closer, 2])).toEqual({
      jsonPath: contentPath(notePath),
      closingMarkerOffset: 2,
    });
  });

  it("resolves the settled note's marker bytes onto the live opening glyph", async () => {
    const { lexical, context, notePath } = await noteContentPending();
    const opener = lexical.getEditorState().read(() => $noteOwnNodes().opener.getKey());

    expect(
      livePointOf(lexical, context, {
        jsonPath: propertyPath(notePath, "marker"),
        propertyOffset: 0,
      }),
    ).toEqual({ key: opener, offset: 1, type: "text" });
    expect(livePointOf(lexical, context, { jsonPath: contentPath(notePath) })).toEqual({
      key: opener,
      offset: 0,
      type: "text",
    });
  });

  it("resolves the settled note's caller onto the live caller", async () => {
    const { lexical, context, notePath } = await noteContentPending();
    const [callerKey, plusOffset] = lexical.getEditorState().read(() => {
      const { caller } = $noteOwnNodes();
      return [caller.getKey(), caller.getTextContent().indexOf("+")] as const;
    });

    expect(
      livePointOf(lexical, context, {
        jsonPath: propertyPath(notePath, "caller"),
        propertyOffset: 0,
      }),
    ).toEqual({ key: callerKey, offset: plusOffset, type: "text" });
  });

  it("resolves a byte of the settled closer onto the live closing glyph", async () => {
    const { lexical, context, notePath } = await noteContentPending();
    const closer = lexical.getEditorState().read(() => $noteOwnNodes().closer.getKey());

    expect(
      livePointOf(lexical, context, { jsonPath: contentPath(notePath), closingMarkerOffset: 2 }),
    ).toEqual({ key: closer, offset: 2, type: "text" });
  });
});

describe("a caret on the own glyphs of a pending note inside its own settling paragraph", () => {
  /** The note's content and its paragraph both pending, with an emptied husk in front of the note
   * so the note's settled index differs from its live one. */
  async function nested() {
    const mounted = await mountExpandedNoteEditor(huskBeforeNoteUsj());
    await pendNoteInsideSettlingPara(mounted.lexical);
    const para = settledPara(mounted.ref.current?.getUsj(), PARA_TOP_INDEX);
    return {
      ...mounted,
      notePath: [PARA_TOP_INDEX, settledNoteIndex(para)],
      context: settledPositionContext(mounted.lexical),
    };
  }

  it("reports a caret in the opening glyph at the note's SETTLED path", async () => {
    const { lexical, context, notePath } = await nested();

    expect(settledLocationOf(lexical, context, () => [$noteOwnNodes().opener, 1])).toEqual({
      jsonPath: propertyPath(notePath, "marker"),
      propertyOffset: 0,
    });
  });

  it("reports a caret in the closing glyph at the note's SETTLED path", async () => {
    const { lexical, context, notePath } = await nested();

    expect(settledLocationOf(lexical, context, () => [$noteOwnNodes().closer, 1])).toEqual({
      jsonPath: contentPath(notePath),
      closingMarkerOffset: 1,
    });
  });

  it("resolves the settled note's marker bytes onto the live opening glyph", async () => {
    const { lexical, context, notePath } = await nested();
    const opener = lexical.getEditorState().read(() => $noteOwnNodes().opener.getKey());

    expect(
      livePointOf(lexical, context, {
        jsonPath: propertyPath(notePath, "marker"),
        propertyOffset: 0,
      }),
    ).toEqual({ key: opener, offset: 1, type: "text" });
  });

  it("resolves a byte of the settled closer onto the live closing glyph", async () => {
    const { lexical, context, notePath } = await nested();
    const closer = lexical.getEditorState().read(() => $noteOwnNodes().closer.getKey());

    expect(
      livePointOf(lexical, context, { jsonPath: contentPath(notePath), closingMarkerOffset: 1 }),
    ).toEqual({ key: closer, offset: 1, type: "text" });
  });
});
