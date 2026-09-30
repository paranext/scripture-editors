import { $createCharNode } from "./CharNode.js";
import { $separatorPrefixLength } from "./markerSeparators.utils.js";
import { NBSP } from "./node-constants.js";
import { $createParaNode } from "./ParaNode.js";
import { createBasicTestEnvironment } from "./test.utils.js";
import { textTypeState } from "../collab/delta.state.js";
import { $createMarkerNode } from "../features/MarkerNode.js";
import { $createTextNode, $getRoot, $setState, LexicalNode, TextNode } from "lexical";
import { describe, expect, it } from "vitest";

/**
 * Builds `<p><char nd>…children</char></p>` from `$children` and returns `$separatorPrefixLength`
 * of the node `$children` marks as the one to measure.
 */
function prefixLengthOf($children: () => { children: LexicalNode[]; measured: TextNode }): number {
  const { editor } = createBasicTestEnvironment();
  let length = -1;
  editor.update(
    () => {
      const { children, measured } = $children();
      $getRoot().append($createParaNode("p").append($createCharNode("nd").append(...children)));
      length = $separatorPrefixLength(measured);
    },
    { discrete: true },
  );
  return length;
}

describe("$separatorPrefixLength", () => {
  it("counts the NBSP prefix of the text directly after the span's opening glyph", () => {
    expect(
      prefixLengthOf(() => {
        const measured = $createTextNode(`${NBSP}one`);
        return {
          children: [$createMarkerNode("nd"), measured, $createMarkerNode("nd", "closing")],
          measured,
        };
      }),
    ).toBe(NBSP.length);
  });

  it("counts a standalone NBSP spacer after the opening glyph as separator in its entirety", () => {
    expect(
      prefixLengthOf(() => {
        const measured = $createTextNode(NBSP);
        return {
          children: [
            $createMarkerNode("nd"),
            measured,
            $createCharNode("wj").append(
              $createMarkerNode("wj", "opening", true),
              $createTextNode(`${NBSP}x`),
              $createMarkerNode("wj", "closing", true),
            ),
            $createMarkerNode("nd", "closing"),
          ],
          measured,
        };
      }),
    ).toBe(NBSP.length);
  });

  it("counts the prefix after a nested child span's opener in the collab-flattened shape", () => {
    expect(
      prefixLengthOf(() => {
        const measured = $createTextNode(`${NBSP}x`);
        return {
          children: [
            $createMarkerNode("nd"),
            $createTextNode(NBSP),
            $createMarkerNode("wj", "opening", true),
            measured,
            $createCharNode("wj").append($createTextNode("y")),
            $createMarkerNode("nd", "closing"),
          ],
          measured,
        };
      }),
    ).toBe(NBSP.length);
  });

  it("is 0 when the text after the opening glyph has no NBSP prefix", () => {
    expect(
      prefixLengthOf(() => {
        const measured = $createTextNode("one");
        return { children: [$createMarkerNode("nd"), measured], measured };
      }),
    ).toBe(0);
  });

  it("is 0 for the author's own leading NBSP after a nested closer", () => {
    // `\nd A\+wj x\+wj*~B\nd*` — the `~` after the nested closer is content.
    expect(
      prefixLengthOf(() => {
        const measured = $createTextNode(`${NBSP}B`);
        return {
          children: [
            $createMarkerNode("nd"),
            $createTextNode(`${NBSP}A`),
            $createCharNode("wj").append(
              $createMarkerNode("wj", "opening", true),
              $createTextNode(`${NBSP}x`),
              $createMarkerNode("wj", "closing", true),
            ),
            measured,
            $createMarkerNode("nd", "closing"),
          ],
          measured,
        };
      }),
    ).toBe(0);
  });

  it("is 0 after a nested closer in the collab-flattened shape", () => {
    expect(
      prefixLengthOf(() => {
        const measured = $createTextNode(`${NBSP}B`);
        return {
          children: [
            $createMarkerNode("nd"),
            $createTextNode(`${NBSP}A`),
            $createMarkerNode("wj", "opening", true),
            $createCharNode("wj").append($createTextNode("x")),
            $createMarkerNode("wj", "closing", true),
            measured,
            $createMarkerNode("nd", "closing"),
          ],
          measured,
        };
      }),
    ).toBe(0);
  });

  it("is 0 for a leading NBSP in a span rendered without glyphs", () => {
    expect(
      prefixLengthOf(() => {
        const measured = $createTextNode(`${NBSP}one`);
        return { children: [measured], measured };
      }),
    ).toBe(0);
  });

  it("is 0 after a glyph that is not a char-span glyph (a milestone's display run)", () => {
    expect(
      prefixLengthOf(() => {
        const measured = $createTextNode(`${NBSP}one`);
        return {
          children: [$createMarkerNode("nd"), $createMarkerNode("qt-s"), measured],
          measured,
        };
      }),
    ).toBe(0);
  });

  it("is 0 for attribute display text, whose bytes an NBSP prefix never rides on", () => {
    expect(
      prefixLengthOf(() => {
        const measured = $createTextNode(`${NBSP}|x`);
        $setState(measured, textTypeState, "attribute");
        return { children: [$createMarkerNode("nd"), measured], measured };
      }),
    ).toBe(0);
  });
});
