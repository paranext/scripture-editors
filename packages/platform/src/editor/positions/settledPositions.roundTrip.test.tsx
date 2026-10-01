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
import { MarkerContent } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getNodeByKey, $getRoot, TextNode } from "lexical";
import { getPendedDisplayOwners } from "shared";
import { $getRangeFromUsjSelection } from "shared-react";
import { describe, expect, it } from "vitest";

type Mounted = Awaited<ReturnType<typeof mountInView>>;

/** Mount `content` in `view`, rewrite the first text node whose bytes are `bytes` to `edited`, and
 * leave the caret at `caret` in it — the shape a keystroke leaves pending. */
async function pendingEdit(
  content: MarkerContent[],
  view: string,
  bytes: string,
  edited: string,
  caret: number,
): Promise<{ mounted: Mounted; $node: () => TextNode }> {
  const mounted = await mountInView(twoParaUsj(content), oracleView(view));
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
});
