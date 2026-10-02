/**
 * A position a host reads while an edit is pending (`getSelection()`'s translation) and hands
 * straight back (`setSelection()`'s and `setAnnotation()`'s translation, resolved as `setSelection`
 * resolves it) lands where it was — or, where the settled document has no position for it, at the
 * closest one to its left, or on a position reporting the same location — never on a different
 * place to its right. The rows cover live bytes the settled document spells differently.
 *
 * Positions are translated in a read, as the editor translates them, rather than by moving the
 * caret: moving the caret off the edited node would settle it.
 */
import { mountInView, oracleView } from "../annotationLocations/annotationLocations.test-helpers";
import { $caretPositions, positionContext } from "../markerEdit/pendingSettledOracle.test-helpers";
import { $prepareSettleScopes } from "./settledScopes.utils";
import { $liveSelectionFromSettled, $settledLocationFromLivePoint } from "./settledPositions.utils";
import { twoParaUsj } from "./positions.test-helpers";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getNodeByKey, $getRoot, TextNode } from "lexical";
import { getPendedDisplayOwners, NBSP } from "shared";
import { $getRangeFromUsjSelection } from "shared-react";
import { describe, expect, it } from "vitest";

type Mounted = Awaited<ReturnType<typeof mountInView>>;

/** Mount `content` in `view`, rewrite the first text node whose bytes are `bytes` to `edited`, and
 * leave the caret at `caret` in it — the shape a keystroke leaves pending. `content` is the first
 * paragraph's content, or a whole document. */
async function pendingEdit(
  content: MarkerContent[] | Usj,
  view: string,
  bytes: string,
  edited: string,
  caret: number,
): Promise<{ mounted: Mounted; $node: () => TextNode }> {
  const usj = Array.isArray(content) ? twoParaUsj(content) : content;
  const mounted = await mountInView(usj, oracleView(view));
  let key = "";
  await act(async () => {
    mounted.lexical.update(() => {
      const node = $getRoot()
        .getAllTextNodes()
        .find((text) => text.getTextContent() === bytes);
      if (!node) throw new Error(`no text node spelling ${JSON.stringify(bytes)}`);
      node.setTextContent(edited);
      node.select(caret, caret);
      key = node.getKey();
    });
    await Promise.resolve();
    await Promise.resolve();
  });
  expect(getPendedDisplayOwners(mounted.lexical)?.size ?? 0).toBeGreaterThan(0);
  const $node = () => {
    const node = $getRoot()
      .getAllTextNodes()
      .find((text) => text.getKey() === key);
    if (!node) throw new Error("the edited node is gone");
    return node;
  };
  return { mounted, $node };
}

/** The live point `offset` into `$node()` read as a host reads it and handed back as a host hands
 * it back: where it was, what it reported, where it landed, and what the landing reports. */
function roundTrip(mounted: Mounted, view: string, $node: () => TextNode, offset: number) {
  const viewOptions = oracleView(view);
  const context = positionContext(mounted.lexical, viewOptions);
  return mounted.lexical.getEditorState().read(() => {
    const prepared = $prepareSettleScopes(context);
    const positions = $caretPositions();
    const positionOf = (key: string, at: number) =>
      positions.find((point) => point.node.getKey() === key && point.offset === at)?.position;
    const node = $node();
    const reported = $settledLocationFromLivePoint(prepared, node, offset);
    const live = reported && $liveSelectionFromSettled(context, prepared, { start: reported });
    const anchor = live && $getRangeFromUsjSelection(live, viewOptions)?.anchor;
    const landed = anchor && $getNodeByKey(anchor.key);
    return {
      from: positionOf(node.getKey(), offset),
      to: anchor && positionOf(anchor.key, anchor.offset),
      reported,
      again: landed && anchor && $settledLocationFromLivePoint(prepared, landed, anchor.offset),
    };
  });
}

/** It came back where it was or to its left — or to a place reporting the same location, which a
 * host cannot tell apart. */
function expectBackInPlace(trip: ReturnType<typeof roundTrip>): void {
  expect(trip.from).toBeDefined();
  expect(trip.to).toBeDefined();
  if ((trip.to ?? 0) > (trip.from ?? 0)) expect(trip.again).toEqual(trip.reported);
}

const VIEWS = ["standard", "standard+expandedNotes", "unformatted"];

describe.each(VIEWS)("getSelection() handed back to setSelection() (%s view)", (view) => {
  it("keeps a position in a milestone glyph the user is still typing in", async () => {
    const { mounted, $node } = await pendingEdit(
      ["a ", { type: "ms", marker: "qt-s" }, "b"],
      view,
      "\\qt-s",
      "\\qtx-s",
      4,
    );
    for (let offset = 0; offset <= "\\qtx-s".length; offset += 1)
      expectBackInPlace(roundTrip(mounted, view, $node, offset));
  });

  it("keeps a position in a milestone glyph a byte was typed in front of inside the glyph", async () => {
    // The live document has no location inside `x\qt-s`; a position there is handed back at the
    // closest one to its left it does have — in front of the glyph — not at the paragraph's own
    // marker.
    const { mounted, $node } = await pendingEdit(
      ["a ", { type: "ms", marker: "qt-s" }, "b"],
      view,
      "\\qt-s",
      "x\\qt-s",
      1,
    );
    const glyphStart = roundTrip(mounted, view, $node, 0).from ?? 0;
    for (let offset = 1; offset <= "x\\qt-s".length; offset += 1) {
      const trip = roundTrip(mounted, view, $node, offset);
      expect(trip.to).toBeGreaterThanOrEqual(glyphStart);
      expect(trip.to).toBeLessThanOrEqual(trip.from ?? 0);
    }
  });

  it("keeps a position inside a closer the user damaged", async () => {
    const { mounted, $node } = await pendingEdit(
      ["In the ", { type: "char", marker: "w", content: ["grace"] }, " of God"],
      view,
      "\\w*",
      "\\ w*",
      2,
    );
    for (let offset = 1; offset < "\\ w*".length; offset += 1) {
      const trip = roundTrip(mounted, view, $node, offset);
      expect(trip.to).toBe(trip.from);
    }
  });

  it("keeps a position inside the closer of a span a pending opener rename renames", async () => {
    const { mounted, $node: $opener } = await pendingEdit(
      [
        "a ",
        {
          type: "char",
          marker: "nd",
          content: ["one ", { type: "char", marker: "wj", content: ["two"] }, " three"],
        },
        " b",
      ],
      view,
      "\\+wj",
      "\\+j",
      2,
    );
    // `\+wj*` settles as `\+j*`: in front of its `*` is closer offset 3 in the settled document.
    const $closer = () => {
      const closer = $opener().getParentOrThrow().getLastChild();
      if (!(closer instanceof TextNode)) throw new Error("expected the span's closer");
      return closer;
    };
    const trip = roundTrip(mounted, view, $closer, "\\+wj".length);
    expect(trip.reported).toMatchObject({ closingMarkerOffset: "\\+j".length });
    expect(trip.to).toBe(trip.from);
  });

  it("keeps the end of the closer of a span a pending opener rename lengthens", async () => {
    const { mounted, $node: $opener } = await pendingEdit(
      ["In the ", { type: "char", marker: "w", content: ["grace"] }, " of God"],
      view,
      "\\w",
      "\\wx",
      3,
    );
    // `\w*` settles as `\wx*`: its end is closer offset 4 in the settled document.
    const $closer = () => {
      const closer = $opener().getParentOrThrow().getLastChild();
      if (!(closer instanceof TextNode)) throw new Error("expected the span's closer");
      return closer;
    };
    const trip = roundTrip(mounted, view, $closer, "\\w*".length);
    expect(trip.reported).toMatchObject({ closingMarkerOffset: "\\wx*".length });
    expect(trip.to).toBe(trip.from);
  });

  it("keeps a position at a paragraph's content start when its marker glyph is damaged", async () => {
    // `x\p` settles as a paragraph `\p x` before this one; the start of `In the` is behind the
    // separator, not in front of it at the end of the glyph.
    const { mounted } = await pendingEdit(
      ["In the ", { type: "char", marker: "w", content: ["grace"] }, " of God"],
      view,
      "\\p",
      "x\\p",
      1,
    );
    const $content = () => {
      const content = $getRoot()
        .getAllTextNodes()
        .find((text) => text.getTextContent() === "In the ");
      if (!content) throw new Error("no paragraph content");
      return content;
    };
    const trip = roundTrip(mounted, view, $content, 0);
    expect(trip.to).toBe(trip.from);
    expect(trip.again).toEqual(trip.reported);
  });

  it("keeps a position in a nested span the settle un-nests", async () => {
    // Deleting the `\` of `\nd` leaves the inner span on its own: `\+wj two\+wj*` settles as
    // `\wj two\wj*`, and every byte but the `+` is still where it was.
    const { mounted } = await pendingEdit(
      [
        "a ",
        {
          type: "char",
          marker: "nd",
          content: ["one ", { type: "char", marker: "wj", content: ["two"] }, " three"],
        },
        " b",
      ],
      view,
      "\\nd",
      "nd",
      0,
    );
    const $text = (bytes: string) => () => {
      const found = $getRoot()
        .getAllTextNodes()
        .find((text) => text.getTextContent() === bytes);
      if (!found) throw new Error(`no text node spelling ${JSON.stringify(bytes)}`);
      return found;
    };
    const twoEnd = roundTrip(mounted, view, $text(`${NBSP}two`), `${NBSP}two`.length);
    expect(twoEnd.reported).toMatchObject({ offset: "two".length });
    expect(twoEnd.to).toBe(twoEnd.from);
    // In front of `w`, of `j`, and past the name: the settled glyph's own name offsets.
    for (const offset of [2, 3, 4]) {
      const trip = roundTrip(mounted, view, $text("\\+wj"), offset);
      expect(trip.reported).toMatchObject({ propertyOffset: offset - 2 });
      expect(trip.to).toBe(trip.from);
    }
  });

  it("keeps a position in front of a nesting `+` the settle drops", async () => {
    // The `+` deleted from the opener `\+wj`: the span settles un-nested, and its closer `\+wj*`
    // as `\wj*`. Behind the closer's `\` is settled offset 1 — in front of the `+`, not past it.
    const { mounted, $node: $opener } = await pendingEdit(
      [
        "a ",
        {
          type: "char",
          marker: "nd",
          content: ["one ", { type: "char", marker: "wj", content: ["two"] }, " three"],
        },
        " b",
      ],
      view,
      "\\+wj",
      "\\wj",
      1,
    );
    const $closer = () => {
      const closer = $opener().getParentOrThrow().getLastChild();
      if (!(closer instanceof TextNode)) throw new Error("expected the span's closer");
      return closer;
    };
    const trip = roundTrip(mounted, view, $closer, 1);
    expect(trip.reported).toMatchObject({ closingMarkerOffset: 1 });
    expect(trip.to).toBe(trip.from);
  });

  // Notes are collapsed in the standard view, where their glyphs are not typed into.
  it.runIf(view !== "standard")(
    "keeps a position in a note's content when a byte typed into its opener makes it a literal",
    async () => {
      // `\f\` settles with the typed `\` moved behind the caller, into the note's content; the
      // `\ft` span after it is the same bytes in both documents.
      const { mounted } = await pendingEdit(
        [
          "a",
          {
            type: "note",
            marker: "f",
            caller: "+",
            content: [{ type: "char", marker: "ft", content: ["note text"] }],
          },
          " b",
        ],
        view,
        "\\f",
        "\\f\\",
        3,
      );
      const $ft = () => {
        const found = $getRoot()
          .getAllTextNodes()
          .find((text) => text.getTextContent() === "\\ft");
        if (!found) throw new Error("no \\ft glyph");
        return found;
      };
      for (const offset of [1, 2, 3]) {
        const trip = roundTrip(mounted, view, $ft, offset);
        expect(trip.reported).toMatchObject({ propertyOffset: offset - 1 });
        expect(trip.reported?.jsonPath).toMatch(/\['marker'\]$/);
        expect(trip.to).toBe(trip.from);
      }
    },
  );

  it.runIf(view !== "standard")(
    "keeps a position in bytes typed into a note's closer, which settle as its content",
    async () => {
      // `x\f*` settles with `x` the note's last content; in front of it, and inside the closer
      // after it, are places in the closer the live note still shows.
      const { mounted, $node } = await pendingEdit(
        [
          "a",
          {
            type: "note",
            marker: "f",
            caller: "+",
            content: [{ type: "char", marker: "ft", content: ["note text"] }],
          },
          " b",
        ],
        view,
        "\\f*",
        "x\\f*",
        1,
      );
      for (let offset = 0; offset <= "x\\f*".length; offset += 1) {
        const trip = roundTrip(mounted, view, $node, offset);
        expect(trip.to).toBe(trip.from);
      }
    },
  );

  it.runIf(view !== "standard")(
    "reports the end of a note's caller as the front of its content, as the settled note does",
    async () => {
      // `x` typed in front of `\ft` settles as text starting the note's content; the end of the
      // caller text is in front of it.
      const { mounted } = await pendingEdit(
        [
          "a",
          {
            type: "note",
            marker: "f",
            caller: "+",
            content: [{ type: "char", marker: "ft", content: ["note text"] }],
          },
          " b",
        ],
        view,
        "\\ft",
        "x\\ft",
        1,
      );
      const caller = ` +${NBSP}`;
      const $caller = () => {
        const found = $getRoot()
          .getAllTextNodes()
          .find((text) => text.getTextContent() === caller);
        if (!found) throw new Error("no caller text");
        return found;
      };
      const trip = roundTrip(mounted, view, $caller, caller.length);
      expect(trip.reported).toEqual({ jsonPath: "$.content[2].content[1].content[0]", offset: 0 });
      expect(trip.to).toBe(trip.from);
    },
  );

  it("keeps a position in front of a note that a typed marker now opens a paragraph before", async () => {
    // `\a` typed in front of the note settles as a paragraph marker, with the note as the new
    // paragraph's first content; the end of its name is in front of the note.
    const { mounted, $node } = await pendingEdit(
      [
        "a",
        {
          type: "note",
          marker: "f",
          caller: "+",
          content: [{ type: "char", marker: "ft", content: ["note text"] }],
        },
        " b",
      ],
      view,
      "a",
      "\\a",
      1,
    );
    for (let offset = 0; offset <= "\\a".length; offset += 1)
      expectBackInPlace(roundTrip(mounted, view, $node, offset));
  });

  it("keeps a position in a `\\ca` span beside its chapter that settles as a paragraph", async () => {
    // Deleting the separator of `\ca 3\ca*` spells `\ca3\ca*`: no longer a span the chapter
    // folds, it settles as a `\ca3` paragraph with an unmatched `\ca*`, beside the chapter.
    const usj: Usj = {
      type: "USJ",
      version: "3.1",
      content: [
        { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
        { type: "chapter", marker: "c", number: "1" },
        { type: "char", marker: "ca", content: ["3"] },
        { type: "para", marker: "p", content: ["depart here"] },
      ],
    };
    const { mounted, $node } = await pendingEdit(usj, view, `${NBSP}3`, "3", 0);
    for (let offset = 0; offset <= 1; offset += 1)
      expectBackInPlace(roundTrip(mounted, view, $node, offset));
    // In front of the `3` is in the settled `\ca3` paragraph, not on the chapter.
    expect(roundTrip(mounted, view, $node, 0).reported?.jsonPath).toMatch(/^\$\.content\[2\]/);
  });

  it("keeps the end of a `\\ca` span's closer when the span ends its settle scope", async () => {
    // `x` typed in front of `\ca` settles beside the chapter as text, with the span after it; the
    // span's closer ends the chapter's scope, and its end is closer offset 4, not one past it.
    const usj: Usj = {
      type: "USJ",
      version: "3.1",
      content: [
        { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
        { type: "chapter", marker: "c", number: "1" },
        { type: "char", marker: "ca", content: ["3"] },
        { type: "para", marker: "p", content: ["depart here"] },
      ],
    };
    const { mounted } = await pendingEdit(usj, view, "\\ca", "x\\ca", 1);
    const $closer = () => {
      const closer = $getRoot()
        .getAllTextNodes()
        .find((text) => text.getTextContent() === "\\ca*");
      if (!closer) throw new Error("no \\ca closer");
      return closer;
    };
    const trip = roundTrip(mounted, view, $closer, "\\ca*".length);
    expect(trip.reported).toMatchObject({ closingMarkerOffset: "\\ca*".length });
    expect(trip.to).toBe(trip.from);
  });

  it("keeps the end of a `\\ca` closer that folds onto its chapter", async () => {
    // `\ca 3x\ca*` folds onto the chapter as altnumber `3x`; the end of the typed closer is the
    // end of the chapter's `\ca` run closer, not the end of the value in front of it.
    const usj: Usj = {
      type: "USJ",
      version: "3.1",
      content: [
        { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
        { type: "chapter", marker: "c", number: "1" },
        { type: "char", marker: "ca", content: ["3"] },
        { type: "para", marker: "p", content: ["depart here"] },
      ],
    };
    const { mounted, $node } = await pendingEdit(usj, view, "\\ca*", "x\\ca*", 1);
    const trip = roundTrip(mounted, view, $node, "x\\ca*".length);
    expect(trip.reported).toMatchObject({
      keyName: "altnumber",
      keyClosingMarkerOffset: "\\ca*".length,
    });
    expect(trip.to).toBe(trip.from);
  });

  it("keeps a position behind a space typed after a `\\ca` closer that folds onto its chapter", async () => {
    // The settle drops the space; behind it is the end of the chapter's `\ca` run closer, not the
    // end of the value in front of the closer.
    const usj: Usj = {
      type: "USJ",
      version: "3.1",
      content: [
        { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
        { type: "chapter", marker: "c", number: "1" },
        { type: "char", marker: "ca", content: ["3"] },
        { type: "para", marker: "p", content: ["depart here"] },
      ],
    };
    const { mounted, $node } = await pendingEdit(usj, view, "\\ca*", "\\ca* ", 5);
    const trip = roundTrip(mounted, view, $node, "\\ca* ".length);
    expect(trip.reported).toMatchObject({
      keyName: "altnumber",
      keyClosingMarkerOffset: "\\ca*".length,
    });
  });

  it("keeps a position at the end of a `\\ca` value when a space is typed in front of its closer", async () => {
    // `\ca 3 \ca*` folds onto the chapter as altnumber `3`: the end of the value is in front of
    // the typed space, where it was read from, not behind it.
    const usj: Usj = {
      type: "USJ",
      version: "3.1",
      content: [
        { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
        { type: "chapter", marker: "c", number: "1" },
        { type: "char", marker: "ca", content: ["3"] },
        { type: "para", marker: "p", content: ["depart here"] },
      ],
    };
    const { mounted } = await pendingEdit(usj, view, "\\ca*", " \\ca*", 1);
    const $value = () => {
      const value = $getRoot()
        .getAllTextNodes()
        .find((text) => text.getTextContent() === `${NBSP}3`);
      if (!value) throw new Error("no \\ca value text");
      return value;
    };
    const trip = roundTrip(mounted, view, $value, `${NBSP}3`.length);
    expect(trip.to).toBe(trip.from);
  });
});
