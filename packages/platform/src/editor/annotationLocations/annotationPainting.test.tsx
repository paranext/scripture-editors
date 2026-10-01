/**
 * What an annotation PAINTS: exactly the bytes it holds, plus the bytes no range can hold that lie
 * between two of them in one block — never a whole display-byte node it holds only part of, and
 * never the whitespace at a held run's edges.
 */
import {
  $byteNodes,
  $heldBytes,
  $paintedIndexes,
  HELD_TYPE,
  MountedInView,
  mountInView,
  oracleView,
  ORACLE_TYPE,
} from "./annotationLocations.test-helpers";
import { settleByBlurAndCommit } from "../markerEdit/displayAnnotations.test-helpers";
import { typeOver } from "../positions/positions.test-helpers";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { NBSP } from "shared";
import { AnnotationRange } from "shared-react";

/** A marker object with attributes `MarkerObject` does not name. */
const attributed = (marker: MarkerObject & { [attribute: string]: unknown }): MarkerObject =>
  marker;

/** `\c 10` / `\p \v 12 In \w grace|lemma="grace" strong="G5485"\w* of \nd LORD\nd* now
 * \qt-s |sid="q1" who="Pilate"\*x end`. */
const paintUsj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "chapter", marker: "c", number: "10" },
    {
      type: "para",
      marker: "p",
      content: [
        { type: "verse", marker: "v", number: "12" },
        "In ",
        attributed({
          type: "char",
          marker: "w",
          lemma: "grace",
          strong: "G5485",
          content: ["grace"],
        }),
        " of ",
        { type: "char", marker: "nd", content: ["LORD"] },
        " now",
        attributed({ type: "ms", marker: "qt-s", sid: "q1", who: "Pilate" }),
        "x end",
      ],
    },
  ],
};

const para = "$.content[1]";

async function annotate(mounted: MountedInView, range: AnnotationRange, id: string) {
  await act(async () => {
    mounted.ref.current?.setAnnotation(range, ORACLE_TYPE, id);
    await Promise.resolve();
  });
}

/** The bytes painting `id`, in document order, a decorator as `[<type>]`. */
function paintedText(mounted: MountedInView, id: string): string {
  return mounted.lexical.getEditorState().read(() => {
    const painted = $paintedIndexes(mounted.lexical, id);
    return $byteNodes()
      .filter((_, index) => painted.has(index))
      .map(([node, offset]) =>
        offset >= 0 ? node.getTextContent()[offset] : `[${node.getType()}]`,
      )
      .join("");
  });
}

function heldText(mounted: MountedInView, id: string): string {
  return mounted.lexical.getEditorState().read(() => $heldBytes(HELD_TYPE, id));
}

describe("annotation painting in Standard view", () => {
  let mounted: MountedInView;
  beforeEach(async () => {
    mounted = await mountInView(paintUsj, oracleView("standard"));
  });
  afterEach(() => mounted.unmount());

  it("paints only the attribute value a range names, not the whole attribute run", async () => {
    await annotate(
      mounted,
      {
        start: { jsonPath: `${para}.content[2]['strong']`, propertyOffset: 0 },
        end: { jsonPath: `${para}.content[2]['strong']`, propertyOffset: 5 },
      },
      "strong",
    );
    expect(heldText(mounted, "strong")).toBe("G5485");
    expect(paintedText(mounted, "strong")).toBe("G5485");
  });

  it("paints one digit of a verse number", async () => {
    const number = `${para}.content[0]['number']`;
    await annotate(
      mounted,
      {
        start: { jsonPath: number, propertyOffset: 1 },
        end: { jsonPath: number, propertyOffset: 2 },
      },
      "digit",
    );
    expect(paintedText(mounted, "digit")).toBe("2");
  });

  it("paints one letter of a marker glyph", async () => {
    const marker = `${para}.content[4]['marker']`;
    await annotate(
      mounted,
      {
        start: { jsonPath: marker, propertyOffset: 1 },
        end: { jsonPath: marker, propertyOffset: 2 },
      },
      "letter",
    );
    expect(paintedText(mounted, "letter")).toBe("d");
  });

  it("paints a milestone's attribute value without the run's leading space", async () => {
    const who = `${para}.content[6]['who']`;
    await annotate(
      mounted,
      { start: { jsonPath: who, propertyOffset: 0 }, end: { jsonPath: who, propertyOffset: 6 } },
      "who",
    );
    expect(paintedText(mounted, "who")).toBe("Pilate");
  });

  it("never paints the space a verse number ends in at the range's edge", async () => {
    const number = `${para}.content[0]['number']`;
    await annotate(
      mounted,
      {
        start: { jsonPath: number, propertyOffset: 0 },
        end: { jsonPath: number, propertyOffset: 2 },
      },
      "number",
    );
    expect(paintedText(mounted, "number")).toBe("12");
  });

  it("paints the space between a verse number and the text after it when both are held", async () => {
    await annotate(
      mounted,
      {
        start: { jsonPath: `${para}.content[0]['number']`, propertyOffset: 0 },
        end: { jsonPath: `${para}.content[1]`, offset: 2 },
      },
      "across",
    );
    expect(heldText(mounted, "across")).toBe("12In");
    expect(paintedText(mounted, "across")).toBe("12 In");
  });

  it("gives the host ranges over exactly what an annotation paints", async () => {
    const number = `${para}.content[0]['number']`;
    await annotate(
      mounted,
      {
        start: { jsonPath: number, propertyOffset: 1 },
        end: { jsonPath: number, propertyOffset: 2 },
      },
      "digit",
    );
    await annotate(
      mounted,
      {
        start: { jsonPath: number, propertyOffset: 0 },
        end: { jsonPath: `${para}.content[1]`, offset: 2 },
      },
      "across",
    );
    const texts = (id: string) =>
      (mounted.ref.current?.getAnnotationRanges(ORACLE_TYPE, id) ?? []).map((range) =>
        range.toString(),
      );
    expect(texts("digit")).toEqual(["2"]);
    expect(texts("across").join("")).toBe("12 In");
    expect(texts("missing")).toEqual([]);
  });

  it("paints a whole char span the same whether it moved into the mark whole or not", async () => {
    // From the text before the span: the span moves into the mark whole, its separator with it.
    await annotate(
      mounted,
      {
        start: { jsonPath: `${para}.content[3]`, offset: 3 },
        end: { jsonPath: `${para}.content[5]`, offset: 2 },
      },
      "whole",
    );
    // From the span's own opening glyph: glyph carriers and a mark inside the span.
    await annotate(
      mounted,
      {
        start: { jsonPath: `${para}.content[4]` },
        end: { jsonPath: `${para}.content[5]`, offset: 2 },
      },
      "inner",
    );
    const span = `\\nd${NBSP}LORD\\nd* n`;
    expect(paintedText(mounted, "whole")).toBe(` ${span}`);
    expect(paintedText(mounted, "inner")).toBe(span);

    await typeOver(mounted.lexical, "x end", "x end \\bd x\\bd*");
    settleByBlurAndCommit(mounted);

    expect(paintedText(mounted, "whole")).toBe(` ${span}`);
    expect(paintedText(mounted, "inner")).toBe(span);
  });
});

describe("annotation painting without the CSS Custom Highlight API", () => {
  const highlightApi = Object.getOwnPropertyDescriptor(globalThis, "Highlight");
  beforeEach(() => {
    Object.defineProperty(globalThis, "Highlight", { value: undefined, configurable: true });
  });
  afterEach(() => {
    if (highlightApi) Object.defineProperty(globalThis, "Highlight", highlightApi);
  });

  it("falls back to painting a display-byte node it holds part of whole", async () => {
    const mounted = await mountInView(paintUsj, oracleView("standard"));
    const number = `${para}.content[0]['number']`;
    await annotate(
      mounted,
      {
        start: { jsonPath: number, propertyOffset: 1 },
        end: { jsonPath: number, propertyOffset: 2 },
      },
      "digit",
    );
    expect(paintedText(mounted, "digit")).toBe(`\\v${NBSP}12 `);
    mounted.unmount();
  });
});
