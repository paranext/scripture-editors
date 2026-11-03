/**
 * Markers typed into a paragraph that continues a verse settle as markers in Standard view, as they
 * do in a paragraph that starts with one.
 *
 * ParatextData writes such a paragraph with a `vid` attribute (`<para style="q2" vid="">` in a
 * chapter after the first), and the marker-edit engine leaves a paragraph that carries an
 * attribute it does not know as it is, typed markers included. So the chapter is loaded the way
 * the app loads it, through `usxStringToUsj`, which drops that derived attribute.
 */
import { editorView, mountInView, MountedEditor } from "./editorViews.test-helpers";
import { installSelectionModify, press } from "./typingFidelityOracle.test-helpers";
import { MarkerObject, usxStringToUsj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot } from "lexical";
import { describe, expect, it } from "vitest";

installSelectionModify();

// Matthew 2:6 as the provider serves it: the `\q2` line continues verse 6.
const CHAPTER_USX =
  '<usx version="3.0"><book code="MAT" style="id" />' +
  '<chapter number="2" style="c" sid="" />' +
  '<para style="q1"><verse number="6" style="v" sid="" />‘You Bethlehem, land of Judah,</para>' +
  '<para style="q2" vid="">are in no way least among the princes of Judah;</para>' +
  "</usx>";

const LINE = "are in no way least among the princes of Judah;";

async function mountAtLineEnd(): Promise<MountedEditor> {
  const mounted = await mountInView(usxStringToUsj(CHAPTER_USX), editorView("standard"), {
    scrRef: { book: "MAT", chapterNum: 2, verseNum: 6 },
  });
  await act(async () =>
    mounted.lexical.update(() => {
      const text = $getRoot()
        .getAllTextNodes()
        .find((node) => node.getTextContent() === LINE);
      if (!text) throw new Error("fixture line not found");
      text.select(LINE.length, LINE.length);
    }),
  );
  return mounted;
}

/** The `\q2` line's content in the document the editor would save. */
function lineContent(mounted: MountedEditor) {
  return (mounted.ref.current?.getUsj()?.content[3] as MarkerObject | undefined)?.content;
}

describe("a marker typed into a paragraph that continues a verse", () => {
  it("settles as a marker when typed key by key", async () => {
    const mounted = await mountAtLineEnd();

    for (const key of [" ", "\\", "n", "d", " ", "x"]) await press(mounted, key, key);

    expect(lineContent(mounted)).toEqual([
      `${LINE} `,
      { type: "char", marker: "nd", closed: "false", content: ["x"] },
    ]);
  });

  it("settles as a marker when the marker palette commits it", async () => {
    const mounted = await mountAtLineEnd();

    await act(async () => {
      mounted.ref.current?.commitTypedMarker("nd");
    });
    await press(mounted, "x", "x");

    expect(lineContent(mounted)).toEqual([
      LINE,
      { type: "char", marker: "nd", closed: "false", content: ["x"] },
    ]);
  });
});
