/**
 * Inbound translation: a host can only ever SEE the settled document (`getUsj()` is its only
 * view), so every position it hands back — `setSelection`, `setAnnotation`, `insertNote` — is
 * settled-derived and has to be carried onto the live tree before it can be resolved.
 *
 * Every row derives its SETTLED coordinates from the document `getUsj()` actually returned rather
 * than transcribing them: the tokenizer is free to regularize whitespace a settle leaves behind,
 * and a row that hard-codes an offset would then be asserting against a document that does not
 * exist.
 */
import { mountExpandedNoteEditor, mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { $prepareSettleScopes } from "./settledScopes.utils";
import { $liveSelectionFromSettled, $livePointFromSettledLocation } from "./settledPositions.utils";
import {
  chapterCaCharUsj,
  contentPath,
  emptyOptbreakHusk,
  optbreakAndTwoNotesUsj,
  propertyPath,
  settledChapterIndex,
  settledCharIndex,
  settledNoteIndexes,
  settledPara,
  settledParaIndex,
  settledPositionContext,
  settledTextIndex,
  twoParaUsj,
  typeChapterCaValue,
  typeOver,
  $liveTopIndexContaining,
  $textContaining,
} from "./positions.test-helpers";
import { SettledPositionContext } from "./settledPositions.model";
import { FragmentPoint } from "../markerEdit/tier2Rebuild.utils";
import {
  getUsjDocumentLocationTypeName,
  UsjDocumentLocation,
} from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, $isTextNode, LexicalEditor } from "lexical";
import {
  $chapterGlyphTextNode,
  $isChapterNode,
  $isMarkerNode,
  $isParaNode,
  $isVerseNode,
  getPendedDisplayOwners,
  MarkerNode,
  NBSP,
} from "shared";
import { $getRangeFromUsjSelection, SelectionRange } from "shared-react";

/**
 * The LIVE location `location` becomes — the path production actually runs: `setSelection`,
 * `setAnnotation` and `insertNote` all hand `$liveSelectionFromSettled`'s output to the editor's
 * existing resolvers, so what those resolvers see is what this returns.
 */
function liveLocation(
  lexical: LexicalEditor,
  context: SettledPositionContext,
  location: UsjDocumentLocation,
): UsjDocumentLocation | undefined {
  return lexical.getEditorState().read(() => {
    const prepared = $prepareSettleScopes(context);
    return $liveSelectionFromSettled(context, prepared, { start: location })?.start;
  });
}

/** Resolve `location` against the live tree through the settled basis. */
function livePoint(
  lexical: LexicalEditor,
  context: SettledPositionContext,
  location: UsjDocumentLocation,
): FragmentPoint | undefined {
  return lexical.getEditorState().read(() => {
    const prepared = $prepareSettleScopes(context);
    return $livePointFromSettledLocation(context, prepared, location);
  });
}

describe("failure mode 1 — a pending literal re-tokenizes into structure", () => {
  const live = "In the beginning \\nd LORD\\nd* made";

  async function pendingSpan() {
    const mounted = await mountStandardViewEditor(twoParaUsj(["In the beginning made"]));
    const key = await typeOver(mounted.lexical, "In the beginning made", live);
    expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);
    const para = settledPara(mounted.ref.current?.getUsj(), 2);
    return { ...mounted, key, para, context: settledPositionContext(mounted.lexical) };
  }

  it("maps a settled text offset past the span back onto the live literal", async () => {
    const { lexical, key, para, context } = await pendingSpan();
    const tailIndex = settledTextIndex(para, " made");
    const location = { jsonPath: contentPath([2, tailIndex]), offset: 1 };

    const point = livePoint(lexical, context, location);

    // The settled `" made"` is three separate items in the settled paragraph but one run of bytes
    // in the live text node, where `m` sits at offset 30.
    expect(point).toEqual({ key, offset: live.indexOf(" made") + 1, type: "text" });
    // And what the editor's own resolvers are handed: the same offset, against the ONE live text
    // item the pending paragraph still has.
    expect(liveLocation(lexical, context, location)).toEqual({
      jsonPath: contentPath([2, 0]),
      offset: live.indexOf(" made") + 1,
    });
  });

  it("maps a settled offset INSIDE the span onto the literal bytes it came from", async () => {
    const { lexical, key, para, context } = await pendingSpan();
    const charIndex = settledCharIndex(para);

    const point = livePoint(lexical, context, {
      jsonPath: contentPath([2, charIndex, 0]),
      offset: 2,
    });

    expect(point).toEqual({ key, offset: live.indexOf("LORD") + 2, type: "text" });
  });

  it("maps the settled span's marker location onto the live `\\` that spells it", async () => {
    const { lexical, key, para, context } = await pendingSpan();
    const charIndex = settledCharIndex(para);
    const location = { jsonPath: contentPath([2, charIndex]) };

    const point = livePoint(lexical, context, location);

    expect(point).toEqual({ key, offset: live.indexOf("\\nd"), type: "text" });
    // The documented lossy round trip: the live tree has no glyph to name, because those bytes are
    // still plain text there — so a settled marker location comes back as a text location at the
    // `\` it is spelled with, which resolves to the same place.
    expect(liveLocation(lexical, context, location)).toEqual({
      jsonPath: contentPath([2, 0]),
      offset: live.indexOf("\\nd"),
    });
  });
});

describe("failure mode 2 — declared bytes are missing from the settled document", () => {
  const live = "In the beginning \\nd made";

  async function declaredRun() {
    const mounted = await mountStandardViewEditor(twoParaUsj(["In the beginning made"]));
    act(() => mounted.ref.current?.setTransientInput({ kind: "marker-literal", run: "\\nd" }));
    // The caret sits right after the declared bytes, which is where the palette's own filter
    // leaves it and what `$verifiedTransientLiteral` verifies against.
    const key = await typeOver(
      mounted.lexical,
      "In the beginning made",
      live,
      live.indexOf(" made"),
    );
    const context = settledPositionContext(mounted.lexical, {
      transientInput: { input: { kind: "marker-literal", run: "\\nd" }, nodeKey: key },
    });
    const para = settledPara(mounted.ref.current?.getUsj(), 2);
    const settledText = para.content?.[0];
    if (typeof settledText !== "string") throw new Error("expected settled paragraph text");
    return { ...mounted, key, settledText, context };
  }

  it("omits the declared bytes from the settled document", async () => {
    const { settledText } = await declaredRun();
    expect(settledText).not.toContain("\\nd");
    expect(settledText).toContain("made");
  });

  it("shifts a settled offset past the declaration back over the declared bytes", async () => {
    const { lexical, key, settledText, context } = await declaredRun();
    const location = { jsonPath: contentPath([2, 0]), offset: settledText.indexOf("made") };

    const point = livePoint(lexical, context, location);

    expect(point).toEqual({ key, offset: live.indexOf("made"), type: "text" });
    expect(liveLocation(lexical, context, location)).toEqual({
      jsonPath: contentPath([2, 0]),
      offset: live.indexOf("made"),
    });
  });

  it("snaps the one settled space onto the left-hand live space of the run it stands for", async () => {
    const { lexical, key, settledText, context } = await declaredRun();

    const point = livePoint(lexical, context, {
      jsonPath: contentPath([2, 0]),
      offset: settledText.indexOf("made") - 1,
    });

    // Cutting the declared bytes leaves TWO live spaces where the settled document shows one (the
    // tokenizer regularizes the run), so that one settled space stands for both — and a position
    // with more than one byte to choose from snaps LEFT, onto the first of them.
    expect(point).toEqual({ key, offset: live.indexOf(" \\nd"), type: "text" });
  });

  it("leaves a settled offset BEFORE the declaration alone", async () => {
    const { lexical, key, settledText, context } = await declaredRun();

    const point = livePoint(lexical, context, {
      jsonPath: contentPath([2, 0]),
      offset: settledText.indexOf("beginning"),
    });

    expect(point).toEqual({ key, offset: live.indexOf("beginning"), type: "text" });
  });
});

describe("top-level index shifts", () => {
  it("follows a paragraph that splits — everything after it moves down one", async () => {
    const { lexical, ref } = await mountStandardViewEditor(twoParaUsj(["plain body"]));
    await typeOver(lexical, "plain body", "plain \\q1 body");
    const context = settledPositionContext(lexical);
    const settled = ref.current?.getUsj();
    // The split really happened: the settled document carries one more paragraph than the live
    // tree does, so the paragraph to depart to is at settled index 4.
    expect(settledPara(settled, 4).content?.[0]).toBe("depart here");

    const point = livePoint(lexical, context, { jsonPath: contentPath([4, 0]), offset: 0 });

    const departKey = lexical.getEditorState().read(() => $textContaining("depart here").getKey());
    expect(point).toEqual({ key: departKey, offset: 0, type: "text" });
  });

  it("follows a rejoin — everything after the merged pair moves up one", async () => {
    const { lexical, ref } = await mountStandardViewEditor({
      type: "USJ",
      version: "3.1",
      content: [
        { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
        { type: "chapter", marker: "c", number: "1" },
        { type: "para", marker: "p", content: ["stuff"] },
        { type: "para", marker: "asdf", content: ["more"] },
        { type: "para", marker: "p", content: ["depart here"] },
      ],
    });
    // Losing its backslash dissolves the unknown-split artifact back into the paragraph before it.
    await act(async () => {
      lexical.update(() => {
        const para = $getRoot().getChildren().filter($isParaNode)[1];
        const glyph = para.getFirstChild();
        if (!$isTextNode(glyph)) throw new Error("expected a prefix glyph");
        glyph.setTextContent("asdf");
        glyph.selectEnd();
      });
      await Promise.resolve();
      await Promise.resolve();
    });
    const context = settledPositionContext(lexical);
    expect(settledPara(ref.current?.getUsj(), 3).content?.[0]).toBe("depart here");

    const point = livePoint(lexical, context, { jsonPath: contentPath([3, 0]), offset: 0 });

    const departKey = lexical.getEditorState().read(() => $textContaining("depart here").getKey());
    expect(point).toEqual({ key: departKey, offset: 0, type: "text" });
  });
});

describe("a settling note", () => {
  it("maps a settled location inside the note's content into the live note", async () => {
    // Only an EXPANDED note has inline-editable content to pend an edit in at all.
    const { lexical, ref } = await mountExpandedNoteEditor({
      type: "USJ",
      version: "3.1",
      content: [
        { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
        { type: "chapter", marker: "c", number: "1" },
        {
          type: "para",
          marker: "p",
          content: [
            "before ",
            {
              type: "note",
              marker: "f",
              caller: "+",
              // The reference span keeps the body text off the caller's own slot, so retyping
              // the body cannot coalesce into the caller and cost the note its recognizable
              // shape (which the note-content rebuild refuses outright).
              content: [{ type: "char", marker: "fr", content: ["1.1"] }, "note body"],
            },
            " after",
          ],
        },
        { type: "para", marker: "p", content: ["depart here"] },
      ],
    });
    const liveNoteText = "note \\nd body\\nd* tail";
    const key = await typeOver(lexical, "note body", liveNoteText);
    const context = settledPositionContext(lexical);
    const note = settledPara(ref.current?.getUsj(), 2).content?.[1];
    if (!note || typeof note === "string") throw new Error("expected a settled note");
    const tailIndex = settledTextIndex(note, " tail");

    const point = livePoint(lexical, context, {
      jsonPath: contentPath([2, 1, tailIndex]),
      offset: 1,
    });

    expect(point).toEqual({ key, offset: liveNoteText.indexOf(" tail") + 1, type: "text" });
  });
});

describe("a pending chapter", () => {
  /** Editing the value of a first-class `\ca` span beside its chapter pends the CHAPTER scope,
   * whose rebuild folds the span onto the chapter's `altnumber`. It is the one scope kind whose
   * region CONTRACTS — two top-level items settle to one — so everything after it moves up. */
  async function pendingChapter() {
    const mounted = await mountStandardViewEditor(chapterCaCharUsj());
    await typeChapterCaValue(mounted.lexical, `${NBSP}4`);
    expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);
    const settled = mounted.ref.current?.getUsj();
    return { ...mounted, settled, context: settledPositionContext(mounted.lexical) };
  }

  it("shifts a settled position after the chapter back over the region's collapse", async () => {
    const { lexical, settled, context } = await pendingChapter();
    const settledBodyIndex = settledParaIndex(settled, "body text");
    const liveBodyIndex = lexical.getEditorState().read(() => $liveTopIndexContaining("body text"));
    // The fold really contracted the region: the `\ca` span is a top-level item of its own live
    // and none of the settled document, so the body paragraph is one index earlier there.
    expect(settledBodyIndex).toBe(liveBodyIndex - 1);

    const point = livePoint(lexical, context, {
      jsonPath: contentPath([settledBodyIndex, 0]),
      offset: 5,
    });

    const bodyKey = lexical.getEditorState().read(() => $textContaining("body text").getKey());
    expect(point).toEqual({ key: bodyKey, offset: 5, type: "text" });
  });

  it("resolves the settled chapter's own number onto the live chapter glyph", async () => {
    const { lexical, settled, context } = await pendingChapter();
    const chapterIndex = settledChapterIndex(settled);
    const chapter = settled?.content?.[chapterIndex];
    if (!chapter || typeof chapter === "string") throw new Error("expected a settled chapter");
    // The span folded: its value is the chapter's alternate number in the document the host reads.
    expect(chapter.altnumber).toBe("4");

    const point = livePoint(lexical, context, {
      jsonPath: propertyPath([chapterIndex], "number"),
      propertyOffset: 0,
    });

    // The live chapter's own displayed bytes are `\c 1 `, so its number's first byte is the `1`.
    const $glyph = () => {
      const chapterNode = $getRoot().getChildren().find($isChapterNode);
      const glyph = chapterNode && $chapterGlyphTextNode(chapterNode);
      if (!glyph) throw new Error("expected the live chapter glyph");
      return { key: glyph.getKey(), offset: glyph.getTextContent().indexOf("1"), type: "text" };
    };
    expect(point).toEqual(lexical.getEditorState().read($glyph));
  });
});

describe("a preserved run the settle drops from one side only", () => {
  /**
   * Preserved nodes cross between the two trees by their POSITION in their fragment's preserved-run
   * list, and the two lists are built over different trees: the live one still carries the dead
   * optbreak husk, the settled one has spliced it out. Every run after the husk therefore sits one
   * index earlier on the settled side, so crossing by raw index reaches the note BEFORE the one
   * asked about — and two shape-compatible notes in one paragraph is an ordinary document, so the
   * child-path walk succeeds and the position simply lands in the wrong note.
   */
  async function huskBeforeTwoNotes() {
    const mounted = await mountExpandedNoteEditor(optbreakAndTwoNotesUsj());
    await emptyOptbreakHusk(mounted.lexical);
    expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);
    const para = settledPara(mounted.ref.current?.getUsj(), 2);
    // The husk really is gone from the settled document while both notes survive it.
    expect(para.content?.some((item) => typeof item !== "string" && item.type === "optbreak")).toBe(
      false,
    );
    return { ...mounted, para, context: settledPositionContext(mounted.lexical) };
  }

  it("refuses a settled position in the note past the dropped husk", async () => {
    const { lexical, para, context } = await huskBeforeTwoNotes();
    const noteIndexes = settledNoteIndexes(para);
    expect(noteIndexes).toHaveLength(2);
    const secondNote = para.content?.[noteIndexes[1]];
    if (!secondNote || typeof secondNote === "string") throw new Error("expected a settled note");
    const location = {
      jsonPath: contentPath([2, noteIndexes[1], settledTextIndex(secondNote, "note two")]),
      offset: 2,
    };

    const point = livePoint(lexical, context, location);

    // Specifically NOT the FIRST note, which is where crossing by raw index lands.
    expect(point).not.toEqual({
      key: lexical.getEditorState().read(() => $textContaining("note one").getKey()),
      offset: 2,
      type: "text",
    });
    expect(point).toBeUndefined();
    expect(liveLocation(lexical, context, location)).toBeUndefined();
  });
});

describe("every location subtype, while the paragraph is pending for an unrelated edit", () => {
  const versePath = contentPath([2, 0]);

  async function pendingParagraph() {
    const mounted = await mountStandardViewEditor({
      type: "USJ",
      version: "3.1",
      content: [
        { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
        { type: "chapter", marker: "c", number: "1" },
        {
          type: "para",
          marker: "p",
          content: [
            { type: "verse", marker: "v", number: "1", altnumber: "2" },
            "In the beginning ",
            { type: "char", marker: "nd", content: ["LORD"] },
            " made",
          ],
        },
        { type: "para", marker: "p", content: ["depart here"] },
      ],
    });
    // The pend is somewhere else entirely in the paragraph, so every construct below is
    // untouched — but the whole paragraph still re-tokenizes around it.
    await typeOver(mounted.lexical, " made", " made \\bd bold\\bd* end");
    expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);
    return { ...mounted, context: settledPositionContext(mounted.lexical) };
  }

  /** The live glyph carrying `marker` in syntax `syntax`. */
  function $glyph(marker: string, syntax: "opening" | "closing"): MarkerNode {
    const glyph = $getRoot()
      .getAllTextNodes()
      .find(
        (node): node is MarkerNode =>
          $isMarkerNode(node) && node.getMarker() === marker && node.getMarkerSyntax() === syntax,
      );
    if (!glyph) throw new Error(`no ${syntax} \\${marker} glyph`);
    return glyph;
  }

  const rows: {
    name: string;
    location: UsjDocumentLocation;
    /** The subtype the LIVE location must still be — these bytes are real nodes in the live tree,
     * so nothing about the host's position has to be approximated away. */
    liveType: string;
    $expected: () => FragmentPoint;
  }[] = [
    {
      name: "UsjMarkerLocation — the char span's opening `\\`",
      liveType: "UsjMarkerLocation",
      location: { jsonPath: contentPath([2, 2]) },
      $expected: () => ({
        key: $glyph("nd", "opening").getKey(),
        offset: 0,
        type: "text" as const,
      }),
    },
    {
      name: "UsjPropertyValueLocation — the char span's marker name",
      liveType: "UsjPropertyValueLocation",
      location: { jsonPath: propertyPath([2, 2], "marker"), propertyOffset: 1 },
      $expected: () => ({
        key: $glyph("nd", "opening").getKey(),
        offset: 2,
        type: "text" as const,
      }),
    },
    {
      name: "UsjClosingMarkerLocation — a byte of `\\nd*`",
      liveType: "UsjClosingMarkerLocation",
      location: { jsonPath: contentPath([2, 2]), closingMarkerOffset: 1 },
      $expected: () => ({
        key: $glyph("nd", "closing").getKey(),
        offset: 1,
        type: "text" as const,
      }),
    },
    {
      name: "UsjTextContentLocation — ordinary content",
      liveType: "UsjTextContentLocation",
      location: { jsonPath: contentPath([2, 1]), offset: 3 },
      $expected: () => ({
        key: $textContaining("In the beginning").getKey(),
        offset: 3,
        type: "text" as const,
      }),
    },
    {
      name: "UsjAttributeMarkerLocation — the `\\` of `\\va`",
      liveType: "UsjAttributeMarkerLocation",
      location: { jsonPath: versePath, keyName: "altnumber" },
      $expected: () => ({
        key: $glyph("va", "opening").getKey(),
        offset: 0,
        type: "text" as const,
      }),
    },
    {
      name: "UsjAttributeKeyLocation — a byte of the `\\va` marker name",
      liveType: "UsjAttributeKeyLocation",
      location: { jsonPath: versePath, keyName: "altnumber", keyOffset: 1 },
      $expected: () => ({
        key: $glyph("va", "opening").getKey(),
        offset: 2,
        type: "text" as const,
      }),
    },
    {
      name: "UsjClosingAttributeMarkerLocation — a byte of `\\va*`",
      liveType: "UsjClosingAttributeMarkerLocation",
      location: { jsonPath: versePath, keyName: "altnumber", keyClosingMarkerOffset: 1 },
      $expected: () => ({
        key: $glyph("va", "closing").getKey(),
        offset: 1,
        type: "text" as const,
      }),
    },
    {
      name: "UsjPropertyValueLocation — the verse's own number",
      liveType: "UsjPropertyValueLocation",
      location: { jsonPath: propertyPath([2, 0], "number"), propertyOffset: 0 },
      $expected: () => {
        const verse = $getRoot().getAllTextNodes().find($isVerseNode);
        if (!verse) throw new Error("no verse node");
        return { key: verse.getKey(), offset: 3, type: "text" as const };
      },
    },
  ];

  it.each(rows)("$name", async ({ location, liveType, $expected }) => {
    const { lexical, context } = await pendingParagraph();

    const point = livePoint(lexical, context, location);

    expect(point).toEqual(lexical.getEditorState().read($expected));
    // And through the path production takes: the live location the editor's own resolvers are
    // handed. Every construct here survives the settle as the same node, so the host's position
    // comes back unchanged — subtype included, which is what byte addressing buys (caret
    // addressing reports the end of the preceding text instead, losing the subtype).
    const live = liveLocation(lexical, context, location);
    expect(live).toBeDefined();
    expect(live && getUsjDocumentLocationTypeName(live)).toBe(liveType);
    expect(live).toEqual(location);
  });
});

describe("identity", () => {
  it("resolves exactly as the untranslated resolver does when nothing is pending", async () => {
    const { lexical } = await mountStandardViewEditor(
      twoParaUsj(["In the beginning ", { type: "char", marker: "nd", content: ["LORD"] }, " made"]),
    );
    const context = settledPositionContext(lexical);
    const settled: SelectionRange = {
      start: { jsonPath: contentPath([2, 1, 0]), offset: 2 },
      end: { jsonPath: contentPath([2, 2]), offset: 3 },
    };

    const { translated, direct } = lexical.getEditorState().read(() => {
      const prepared = $prepareSettleScopes(context);
      const point = $livePointFromSettledLocation(context, prepared, settled.start);
      const range = $getRangeFromUsjSelection(settled);
      return {
        translated: point,
        direct: range && {
          key: range.anchor.key,
          offset: range.anchor.offset,
          type: range.anchor.type,
        },
      };
    });

    expect(direct).toBeDefined();
    expect(translated).toEqual(direct);
  });
});
