/**
 * What an annotation PAINTS: exactly the bytes it holds, plus the bytes no range can hold that lie
 * between two of them in one block — never a whole display-byte node it holds only part of, and
 * never the whitespace at a held run's edges.
 */
import {
  $byteNodes,
  $heldBytes,
  $paintedDecoratorChars,
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
import { vi } from "vitest";
import { $decoratorRenderedText, $displayAnnotationsOf, NBSP, TypedMarkOnRemove } from "shared";
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

/** The characters painting `id` on screen, in document order: a text's, and each a decorator
 * renders. */
function paintedText(mounted: MountedInView, id: string): string {
  return mounted.lexical.getEditorState().read(() => {
    const painted = $paintedIndexes(mounted.lexical, id);
    return $byteNodes()
      .map(([node, offset], index) => {
        if (offset >= 0) return painted.has(index) ? node.getTextContent()[offset] : "";
        const rendered = $decoratorRenderedText(node);
        const { whole, chars } = $paintedDecoratorChars(mounted.lexical, node, id);
        return [...rendered].filter((_, char) => whole || chars.has(char)).join("");
      })
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

describe("annotation painting on read-only decorators", () => {
  const number = `${para}.content[0]['number']`;
  const digit: AnnotationRange = {
    start: { jsonPath: number, propertyOffset: 1 },
    end: { jsonPath: number, propertyOffset: 2 },
  };

  it.each(["formatted", "visible", "hidden+expanded"])(
    "paints one digit of a verse number (%s)",
    async (view) => {
      const mounted = await mountInView(paintUsj, oracleView(view));
      const onRemove = vi.fn<TypedMarkOnRemove>();
      await act(async () => {
        mounted.ref.current?.setAnnotation(digit, ORACLE_TYPE, "digit", { onRemove });
        await Promise.resolve();
      });
      expect(paintedText(mounted, "digit")).toBe("2");
      await act(async () => mounted.ref.current?.removeAnnotation(ORACLE_TYPE, "digit"));
      expect(onRemove).toHaveBeenCalledWith(HELD_TYPE, "digit", "removed", "2");
      mounted.unmount();
    },
  );

  it("paints a whole verse number without the space its glyph ends in (visible)", async () => {
    const mounted = await mountInView(paintUsj, oracleView("visible"));
    await annotate(
      mounted,
      {
        start: { jsonPath: number, propertyOffset: 0 },
        end: { jsonPath: number, propertyOffset: 2 },
      },
      "number",
    );
    expect(paintedText(mounted, "number")).toBe("12");
    mounted.unmount();
  });

  it("paints one digit of a chapter number (formatted)", async () => {
    const mounted = await mountInView(paintUsj, oracleView("formatted"));
    const chapter = "$.content[0]['number']";
    await annotate(
      mounted,
      {
        start: { jsonPath: chapter, propertyOffset: 1 },
        end: { jsonPath: chapter, propertyOffset: 2 },
      },
      "zero",
    );
    expect(paintedText(mounted, "zero")).toBe("0");
    mounted.unmount();
  });

  it("paints one letter of a read-only marker glyph (visible)", async () => {
    const mounted = await mountInView(paintUsj, oracleView("visible"));
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
    mounted.unmount();
  });

  it("paints only the attribute value of a read-only attribute run (visible)", async () => {
    const mounted = await mountInView(paintUsj, oracleView("visible"));
    const who = `${para}.content[6]['who']`;
    await annotate(
      mounted,
      { start: { jsonPath: who, propertyOffset: 0 }, end: { jsonPath: who, propertyOffset: 6 } },
      "who",
    );
    expect(paintedText(mounted, "who")).toBe("Pilate");
    mounted.unmount();
  });

  describe("bytes a decorator stands for but does not show", () => {
    /** `\v 12 \va 12a\va*`: the alternate number shows only where markers do. */
    const altUsj: Usj = {
      type: "USJ",
      version: "3.1",
      content: [
        {
          type: "para",
          marker: "p",
          content: [{ type: "verse", marker: "v", number: "12", altnumber: "12a" }, "In"],
        },
      ],
    };
    const alt = "$.content[0].content[0]['altnumber']";

    it("holds the annotation but paints nothing", async () => {
      const mounted = await mountInView(altUsj, oracleView("hidden+expanded"));
      await annotate(
        mounted,
        { start: { jsonPath: alt, propertyOffset: 0 }, end: { jsonPath: alt, propertyOffset: 3 } },
        "alt",
      );
      const holders = mounted.lexical
        .getEditorState()
        .read(() =>
          $byteNodes().flatMap(([node]) =>
            $displayAnnotationsOf(node).filter((annotation) => annotation.id === "alt"),
          ),
        );
      expect(holders).toEqual([
        expect.objectContaining({ type: HELD_TYPE, id: "alt", undisplayed: true }),
      ]);
      expect(paintedText(mounted, "alt")).toBe("");
      mounted.unmount();
    });

    it("paints only what the decorator shows of a range over shown and unshown bytes", async () => {
      const mounted = await mountInView(altUsj, oracleView("hidden+expanded"));
      await annotate(
        mounted,
        {
          start: { jsonPath: "$.content[0].content[0]['number']", propertyOffset: 1 },
          end: { jsonPath: alt, propertyOffset: 3 },
        },
        "both",
      );
      expect(paintedText(mounted, "both")).toBe("2");
      mounted.unmount();
    });
  });
});
