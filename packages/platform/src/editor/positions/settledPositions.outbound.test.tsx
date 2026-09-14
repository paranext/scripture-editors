/**
 * Outbound translation: `getSelection` and `onSelectionChange` report where the caret IS, and the
 * only document a host can resolve that against is `getUsj()`'s — the settled one. While an edit
 * is pending the live tree the caret sits in and the settled document the host reads are two
 * different documents, so a live point has to be carried the other way before it is reported.
 *
 * Every row derives its SETTLED coordinates from the document `getUsj()` actually returned rather
 * than transcribing them: the tokenizer is free to regularize whitespace a settle leaves behind,
 * and a row that hard-codes an offset would then be asserting against a document that does not
 * exist.
 */
import { mountExpandedNoteEditor, mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { $prepareSettleScopes } from "./settledScopes.utils";
import { $settledLocationFromLivePoint, $settledSelectionFromLive } from "./settledPositions.utils";
import {
  contentPath,
  propertyPath,
  settledCharIndex,
  settledPara,
  settledPositionContext,
  settledTextIndex,
  twoParaUsj,
  typeOver,
  $textContaining,
} from "./positions.test-helpers";
import { $livePointFromSettledLocation } from "./settledPositions.utils";
import { SettledPositionContext } from "./settledPositions.model";
import { MarkerObject, UsjDocumentLocation } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getNodeByKey,
  $getRoot,
  $isElementNode,
  $isTextNode,
  LexicalEditor,
  LexicalNode,
} from "lexical";
import {
  $isMarkerNode,
  $isParaNode,
  $isVerseNode,
  getPendedDisplayOwners,
  MarkerNode,
} from "shared";
import { $getUsjSelectionFromEditor } from "shared-react";

/** A live point, resolved inside a read so the row can name its node by content. */
type $LivePoint = () => { node: LexicalNode; offset: number };

/** The SETTLED location a live point reports as. */
function settledLocation(
  lexical: LexicalEditor,
  context: SettledPositionContext,
  $point: $LivePoint,
): UsjDocumentLocation | undefined {
  return lexical.getEditorState().read(() => {
    const prepared = $prepareSettleScopes(context);
    const { node, offset } = $point();
    return $settledLocationFromLivePoint(prepared, node, offset);
  });
}

/** Put the caret at `$point` and read back what the whole selection reports as. */
async function settledSelectionAt(
  lexical: LexicalEditor,
  context: SettledPositionContext,
  $point: $LivePoint,
) {
  await act(async () => {
    lexical.update(() => {
      const { node, offset } = $point();
      if (!$isTextNode(node)) throw new Error("expected a text point");
      node.select(offset, offset);
    });
    await Promise.resolve();
  });
  return lexical
    .getEditorState()
    .read(() => $settledSelectionFromLive($prepareSettleScopes(context)));
}

describe("failure mode 1 — a pending literal re-tokenizes into structure", () => {
  const live = "In the beginning \\nd LORD\\nd* made";

  async function pendingSpan() {
    const mounted = await mountStandardViewEditor(twoParaUsj(["In the beginning made"]));
    await typeOver(mounted.lexical, "In the beginning made", live);
    expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);
    const para = settledPara(mounted.ref.current?.getUsj(), 2);
    const $literal: $LivePoint = () => ({ node: $textContaining(live), offset: 0 });
    return { ...mounted, para, $literal, context: settledPositionContext(mounted.lexical) };
  }

  it("reports a live offset past the literal against the settled item that holds it", async () => {
    const { lexical, para, $literal, context } = await pendingSpan();
    const tailIndex = settledTextIndex(para, " made");

    const location = settledLocation(lexical, context, () => ({
      ...$literal(),
      offset: live.indexOf(" made") + 1,
    }));

    // Live the whole paragraph is one text node, so `m` sits at offset 30; settled it is the
    // second byte of the third content item.
    expect(location).toEqual({ jsonPath: contentPath([2, tailIndex]), offset: 1 });
  });

  it("reports a live offset inside the literal's content against the settled span", async () => {
    const { lexical, para, $literal, context } = await pendingSpan();
    const charIndex = settledCharIndex(para);

    const location = settledLocation(lexical, context, () => ({
      ...$literal(),
      offset: live.indexOf("LORD") + 2,
    }));

    expect(location).toEqual({ jsonPath: contentPath([2, charIndex, 0]), offset: 2 });
  });

  it("reports a live offset inside the literal's marker name as the settled marker property", async () => {
    const { lexical, para, $literal, context } = await pendingSpan();
    const charIndex = settledCharIndex(para);

    const location = settledLocation(lexical, context, () => ({
      ...$literal(),
      offset: live.indexOf("\\nd") + 2,
    }));

    expect(location).toEqual({
      jsonPath: propertyPath([2, charIndex], "marker"),
      propertyOffset: 1,
    });
  });

  it("reports a caret at the live `\\` as the end of the settled text it leaves", async () => {
    const { lexical, para, $literal, context } = await pendingSpan();
    const headIndex = settledTextIndex(para, "In the beginning ");

    const location = settledLocation(lexical, context, () => ({
      ...$literal(),
      offset: live.indexOf("\\nd"),
    }));

    // Settled, those bytes are the `\` a marker is spelled with — but the caret is not IN them,
    // it is in front of them, and a caret in ordinary content keeps the content's own spelling.
    // The documented lossy half of the round trip: the inbound direction carries the settled
    // span's marker location onto exactly this byte, and reporting it back names the same
    // document position under the spelling a caret has there.
    expect(location).toEqual({ jsonPath: contentPath([2, headIndex]), offset: 17 });
  });

  it("reports a caret INSIDE the literal's marker glyph as the settled marker bytes", async () => {
    const { lexical, para, $literal, context } = await pendingSpan();
    const charIndex = settledCharIndex(para);

    const location = settledLocation(lexical, context, () => ({
      ...$literal(),
      offset: live.indexOf("\\nd") + 1,
    }));

    // One byte further in and the caret IS in the glyph, so the settled position names the
    // marker's own bytes — the front edge is the only position that collapses onto the text.
    expect(location).toEqual({
      jsonPath: propertyPath([2, charIndex], "marker"),
      propertyOffset: 0,
    });
  });

  it("reports the whole selection, both endpoints translated", async () => {
    const { lexical, para, context } = await pendingSpan();
    const charIndex = settledCharIndex(para);
    await act(async () => {
      lexical.update(() => {
        const node = $textContaining(live);
        if (!$isTextNode(node)) throw new Error("expected a text node");
        node.select(live.indexOf("LORD"), live.indexOf("LORD") + 4);
      });
      await Promise.resolve();
    });

    const selection = lexical
      .getEditorState()
      .read(() => $settledSelectionFromLive($prepareSettleScopes(context)));

    expect(selection).toEqual({
      start: { jsonPath: contentPath([2, charIndex, 0]), offset: 0 },
      end: { jsonPath: contentPath([2, charIndex, 0]), offset: 4 },
    });
  });

  it("reports a backward selection as the same range a forward one gives", async () => {
    const { lexical, para, context } = await pendingSpan();
    const charIndex = settledCharIndex(para);
    await act(async () => {
      lexical.update(() => {
        const node = $textContaining(live);
        if (!$isTextNode(node)) throw new Error("expected a text node");
        // Anchor past focus: the same bytes, selected right to left.
        node.select(live.indexOf("LORD") + 4, live.indexOf("LORD"));
      });
      await Promise.resolve();
    });

    const selection = lexical
      .getEditorState()
      .read(() => $settledSelectionFromLive($prepareSettleScopes(context)));

    // A range is a span of the document, not a gesture: the endpoints come back in document
    // order whichever way the user dragged.
    expect(selection).toEqual({
      start: { jsonPath: contentPath([2, charIndex, 0]), offset: 0 },
      end: { jsonPath: contentPath([2, charIndex, 0]), offset: 4 },
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
    const settledText = settledPara(mounted.ref.current?.getUsj(), 2).content?.[0];
    if (typeof settledText !== "string") throw new Error("expected settled paragraph text");
    const $literal: $LivePoint = () => ({ node: $textContaining(live), offset: 0 });
    return { ...mounted, settledText, $literal, context };
  }

  it("shifts a live offset past the declaration back over the declared bytes", async () => {
    const { lexical, settledText, $literal, context } = await declaredRun();

    const location = settledLocation(lexical, context, () => ({
      ...$literal(),
      offset: live.indexOf("made"),
    }));

    expect(location).toEqual({
      jsonPath: contentPath([2, 0]),
      offset: settledText.indexOf("made"),
    });
  });

  it("reports a live offset INSIDE the declared run at the byte the run started before", async () => {
    const { lexical, settledText, $literal, context } = await declaredRun();

    const location = settledLocation(lexical, context, () => ({
      ...$literal(),
      offset: live.indexOf("\\nd") + 1,
    }));

    // The declared bytes have no settled existence at all, so every position inside them collapses
    // onto the one the run started at — which, once the tokenizer regularizes the two spaces the
    // cut leaves behind, is the first byte of the word that followed it.
    expect(location).toEqual({
      jsonPath: contentPath([2, 0]),
      offset: settledText.indexOf("made"),
    });
  });

  it("leaves a live offset BEFORE the declaration alone", async () => {
    const { lexical, settledText, $literal, context } = await declaredRun();

    const location = settledLocation(lexical, context, () => ({
      ...$literal(),
      offset: live.indexOf("beginning"),
    }));

    expect(location).toEqual({
      jsonPath: contentPath([2, 0]),
      offset: settledText.indexOf("beginning"),
    });
  });
});

describe("top-level index shifts", () => {
  it("follows a paragraph that splits — everything after it moves down one", async () => {
    const { lexical, ref } = await mountStandardViewEditor(twoParaUsj(["plain body"]));
    await typeOver(lexical, "plain body", "plain \\q1 body");
    const context = settledPositionContext(lexical);
    // The split really happened: the settled document carries one more paragraph than the live
    // tree does, so the paragraph to depart to is at settled index 4.
    expect(settledPara(ref.current?.getUsj(), 4).content?.[0]).toBe("depart here");

    const location = settledLocation(lexical, context, () => ({
      node: $textContaining("depart here"),
      offset: 0,
    }));

    expect(location).toEqual({ jsonPath: contentPath([4, 0]), offset: 0 });
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

    const location = settledLocation(lexical, context, () => ({
      node: $textContaining("depart here"),
      offset: 0,
    }));

    expect(location).toEqual({ jsonPath: contentPath([3, 0]), offset: 0 });
  });
});

describe("a settling note", () => {
  it("reports a live point inside the note's content against the settled note", async () => {
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
    await typeOver(lexical, "note body", liveNoteText);
    const context = settledPositionContext(lexical);
    const note = settledPara(ref.current?.getUsj(), 2).content?.[1];
    if (!note || typeof note === "string") throw new Error("expected a settled note");
    const tailIndex = settledTextIndex(note, " tail");

    const location = settledLocation(lexical, context, () => ({
      node: $textContaining(liveNoteText),
      offset: liveNoteText.indexOf(" tail") + 1,
    }));

    expect(location).toEqual({ jsonPath: contentPath([2, 1, tailIndex]), offset: 1 });
  });
});

describe("every location subtype, while the paragraph is pending for an unrelated edit", () => {
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

  const versePath = contentPath([2, 0]);

  const rows: { name: string; $point: $LivePoint; location: UsjDocumentLocation }[] = [
    {
      name: "UsjMarkerLocation — the char span's opening `\\`",
      $point: () => ({ node: $glyph("nd", "opening"), offset: 0 }),
      location: { jsonPath: contentPath([2, 2]) },
    },
    {
      name: "UsjPropertyValueLocation — the char span's marker name",
      $point: () => ({ node: $glyph("nd", "opening"), offset: 2 }),
      location: { jsonPath: propertyPath([2, 2], "marker"), propertyOffset: 1 },
    },
    {
      name: "UsjClosingMarkerLocation — a byte of `\\nd*`",
      $point: () => ({ node: $glyph("nd", "closing"), offset: 1 }),
      location: { jsonPath: contentPath([2, 2]), closingMarkerOffset: 1 },
    },
    {
      name: "UsjTextContentLocation — ordinary content",
      $point: () => ({ node: $textContaining("In the beginning"), offset: 3 }),
      location: { jsonPath: contentPath([2, 1]), offset: 3 },
    },
    {
      name: "UsjAttributeMarkerLocation — the `\\` of `\\va`",
      $point: () => ({ node: $glyph("va", "opening"), offset: 0 }),
      location: { jsonPath: versePath, keyName: "altnumber" },
    },
    {
      name: "UsjAttributeKeyLocation — a byte of the `\\va` marker name",
      $point: () => ({ node: $glyph("va", "opening"), offset: 2 }),
      location: { jsonPath: versePath, keyName: "altnumber", keyOffset: 1 },
    },
    {
      name: "UsjClosingAttributeMarkerLocation — a byte of `\\va*`",
      $point: () => ({ node: $glyph("va", "closing"), offset: 1 }),
      location: { jsonPath: versePath, keyName: "altnumber", keyClosingMarkerOffset: 1 },
    },
    {
      name: "UsjPropertyValueLocation — the verse's own number",
      $point: () => {
        const verse = $getRoot().getAllTextNodes().find($isVerseNode);
        if (!verse) throw new Error("no verse node");
        return { node: verse, offset: 3 };
      },
      location: { jsonPath: propertyPath([2, 0], "number"), propertyOffset: 0 },
    },
  ];

  it.each(rows)("$name", async ({ $point, location }) => {
    const { lexical, context } = await pendingParagraph();

    // Every construct here survives the settle as the same node, so the live position comes back
    // as the settled location that names the same bytes — subtype included. This is the exact
    // reverse of the inbound suite's own subtype rows.
    expect(settledLocation(lexical, context, $point)).toEqual(location);
  });

  it("keeps the text spelling for a caret at the end of a text run", async () => {
    const { lexical, context } = await pendingParagraph();
    const run = "In the beginning ";

    const location = settledLocation(lexical, context, () => {
      const node = $textContaining(run);
      return { node, offset: node.getTextContentSize() };
    });

    // The same document position as the marker location of the span that follows, but a caret
    // resting at the end of a run is a boundary, not a byte — so it keeps the run's own spelling
    // rather than being reported as sitting on the next construct's `\`.
    expect(location).toEqual({ jsonPath: contentPath([2, 1]), offset: run.length });
  });
});

describe("bytes with no settled location of their own", () => {
  /**
   * Three constructs whose USFM spelling carries bytes that no `UsjDocumentLocation` names on its
   * own — a nested marker's `+`, an optbreak's second `/`, and the `=` and `"` that separate an
   * attribute's key from its value — all in a paragraph pending for an unrelated edit, so every
   * one of them is carried across a real settle.
   */
  async function pendingConstructs() {
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
            {
              type: "char",
              marker: "add",
              content: ["Lo", { type: "char", marker: "nd", content: ["rd"] }],
            },
            " ",
            { type: "optbreak" },
            " ",
            { type: "char", marker: "w", content: ["grace"], strong: "G5485" } as MarkerObject,
            " tail",
          ],
        },
        { type: "para", marker: "p", content: ["depart here"] },
      ],
    });
    await typeOver(mounted.lexical, " tail", " tail \\bd bold\\bd* end");
    expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);
    const para = settledPara(mounted.ref.current?.getUsj(), 2);
    const indexOf = (predicate: (item: MarkerObject) => boolean): number => {
      const index =
        para.content?.findIndex((item) => typeof item !== "string" && predicate(item)) ?? -1;
      if (index < 0) throw new Error(`no such item in ${JSON.stringify(para)}`);
      return index;
    };
    return { ...mounted, indexOf, context: settledPositionContext(mounted.lexical) };
  }

  /** The settled location again, after being resolved onto the live tree and reported back. */
  function roundTrip(
    lexical: LexicalEditor,
    context: SettledPositionContext,
    location: UsjDocumentLocation,
  ): UsjDocumentLocation | undefined {
    return lexical.getEditorState().read(() => {
      const prepared = $prepareSettleScopes(context);
      const point = $livePointFromSettledLocation(context, prepared, location);
      const node = point && $getNodeByKey(point.key);
      return node ? $settledLocationFromLivePoint(prepared, node, point.offset) : undefined;
    });
  }

  /** The deepest live node whose content is exactly `text` — deepest because the display bytes a
   * row addresses are the leaf, not the construct that wraps it. */
  function $exactly(text: string): LexicalNode {
    const match = (node: LexicalNode): LexicalNode | undefined => {
      if ($isElementNode(node)) {
        for (const child of node.getChildren()) {
          const hit = match(child);
          if (hit) return hit;
        }
      }
      return node.getTextContent() === text ? node : undefined;
    };
    const node = match($getRoot());
    if (!node) throw new Error(`no node spelling ${JSON.stringify(text)}`);
    return node;
  }

  it("collapses a nested marker's `+` onto the `\\` it qualifies", async () => {
    const { lexical, indexOf, context } = await pendingConstructs();
    const addIndex = indexOf((item) => item.marker === "add");
    // The nested span is the second content item of the `\add` span that holds it.
    const nested = { jsonPath: contentPath([2, addIndex, 1]) };
    const $glyph = () => $exactly("\\+nd");

    const backslash = settledLocation(lexical, context, () => ({ node: $glyph(), offset: 0 }));
    const plus = settledLocation(lexical, context, () => ({ node: $glyph(), offset: 1 }));

    // The `+` is depth notation, not part of the marker's name and not a location of its own, so
    // both bytes report the span's marker location — and that location resolves back onto the
    // `\`, which reports as itself.
    expect(backslash).toEqual(nested);
    expect(plus).toEqual(nested);
    expect(roundTrip(lexical, context, nested)).toEqual(nested);
  });

  it("collapses an optbreak's second `/` onto its first", async () => {
    const { lexical, indexOf, context } = await pendingConstructs();
    const optbreak = { jsonPath: contentPath([2, indexOf((item) => item.type === "optbreak")]) };
    const $token = () => $exactly("//");

    const first = settledLocation(lexical, context, () => ({ node: $token(), offset: 0 }));
    const second = settledLocation(lexical, context, () => ({ node: $token(), offset: 1 }));

    expect(first).toEqual(optbreak);
    expect(second).toEqual(optbreak);
    expect(roundTrip(lexical, context, optbreak)).toEqual(optbreak);
  });

  it("reports an attribute list's `=` and `\"` at the key offsets that reach through them", async () => {
    const { lexical, indexOf, context } = await pendingConstructs();
    const wordPath = contentPath([2, indexOf((item) => item.marker === "w")]);
    const keyName = "strong";
    const run = `|${keyName}="G5485"`;
    const $run = () => $exactly(run);

    const equals = settledLocation(lexical, context, () => ({
      node: $run(),
      offset: run.indexOf("="),
    }));
    const quote = settledLocation(lexical, context, () => ({
      node: $run(),
      offset: run.indexOf('"'),
    }));

    // A key's location reaches through its `=` and its opening quote, so those two bytes are the
    // offsets one and two past the key's own name — an exact round trip, unlike the collapsing
    // bytes above.
    expect(equals).toEqual({ jsonPath: wordPath, keyName, keyOffset: keyName.length });
    expect(quote).toEqual({ jsonPath: wordPath, keyName, keyOffset: keyName.length + 1 });
    if (!equals || !quote) throw new Error("expected both attribute-byte locations");
    expect(roundTrip(lexical, context, equals)).toEqual(equals);
    expect(roundTrip(lexical, context, quote)).toEqual(quote);
  });
});

describe("identity", () => {
  it("reports exactly what the untranslated reporter does when nothing is pending", async () => {
    const { lexical } = await mountStandardViewEditor(
      twoParaUsj(["In the beginning ", { type: "char", marker: "nd", content: ["LORD"] }, " made"]),
    );
    const context = settledPositionContext(lexical);

    const settled = await settledSelectionAt(lexical, context, () => ({
      node: $textContaining("LORD"),
      offset: 3,
    }));

    const direct = lexical.getEditorState().read($getUsjSelectionFromEditor);
    expect(direct).toBeDefined();
    expect(settled).toEqual(direct);
  });
});
