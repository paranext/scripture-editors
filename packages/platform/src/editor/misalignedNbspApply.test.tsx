/**
 * A no-break space a host inserts into a char span stays U+00A0, wherever the span sits in the
 * document. Ops are placed by the document as the update sees it, so the text the editor shows
 * before the position is not a guide to what the host meant.
 */
import { editorView, enabledViews, mountInView, MountedEditor } from "./editorViews.test-helpers";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { NBSP } from "shared";
import { ViewOptions } from "shared-react";
import { describe, expect, it } from "vitest";

const usj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: ["In the ", { type: "char", marker: "nd", content: ["abcd efg"] }, " of God made"],
    },
  ],
};

function paraContent(mounted: MountedEditor): MarkerContent[] | undefined {
  const para = mounted.ref.current?.getUsj()?.content[1];
  return typeof para === "object" ? para.content : undefined;
}

/**
 * Where an applied NBSP lands in the span `abcd efg`: the retain counts the paragraph's text in the
 * form ops apply to, which is not the form the editor shows. After 16 the text the editor shows
 * ends in the `\\nd` glyph, though the NBSP is inside the span.
 */
const CASES = [
  { retain: 16, expected: `a${NBSP}xbcd efg` },
  { retain: 17, expected: `ab${NBSP}xcd efg` },
  { retain: 18, expected: `abc${NBSP}xd efg` },
];

describe.each([true, false])("in Standard view, allowInvisibleCharacters %s", (allow) => {
  const options: ViewOptions = {
    ...editorView(enabledViews(["standard"])[0]),
    allowInvisibleCharacters: allow,
  };

  it.each(CASES)(
    "keeps a no-break space inserted inside a span after a retain of $retain",
    async ({ retain, expected }) => {
      const mounted = await mountInView(usj, options);

      act(() => mounted.ref.current?.applyUpdate([{ retain }, { insert: `${NBSP}x` }]));

      expect(paraContent(mounted)).toEqual([
        "In the ",
        { type: "char", marker: "nd", content: [expected] },
        " of God made",
      ]);
    },
  );
});
