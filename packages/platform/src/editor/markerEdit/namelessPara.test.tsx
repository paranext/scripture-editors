/**
 * A nameless paragraph: ParatextData reads `\p \ df` as `<para style="" status="unknown">df</para>`,
 * a paragraph whose marker is the empty name. The editor shows its glyph as a bare `\`, hands it
 * back unchanged, and settles edits to it and inside it like any other paragraph's: the bare `\`
 * that opens the paragraph's bytes tokenizes as the nameless marker it shows.
 */
import {
  mountInView,
  ORACLE_VIEWS,
  oracleView,
} from "../annotationLocations/annotationLocations.test-helpers";
import {
  $screenBytes,
  depart,
  savedBytes,
  withoutLineBreaks,
} from "./pendingSettledOracle.test-helpers";
import {
  MarkerContent,
  Usj,
  usjToUsxString,
  usxStringToUsj,
} from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, $isElementNode, $isTextNode, TextNode } from "lexical";
import { describe, expect, it } from "vitest";

const NAMELESS_PARA_USX =
  '<usx version="3.1"><book code="GEN" style="id">GEN</book><chapter number="1" style="c" />' +
  '<para style="" status="unknown">df</para><para style="p">depart here</para></usx>';

function namelessParaUsj(): Usj {
  return usxStringToUsj(NAMELESS_PARA_USX);
}

type Mounted = Awaited<ReturnType<typeof mountInView>>;

/** Edits the nameless paragraph through its text nodes: its glyph, the separator after it, then its
 * content. */
function editNamelessPara(mounted: Mounted, edit: (texts: TextNode[]) => void): Promise<void> {
  return act(async () => {
    mounted.lexical.update(() => {
      const para = $getRoot().getChildren()[2];
      if ($isElementNode(para)) edit(para.getChildren().filter($isTextNode));
    });
  });
}

function namelessParaText(mounted: Mounted): string {
  return mounted.lexical.getEditorState().read(() => $getRoot().getChildren()[2].getTextContent());
}

describe("a nameless paragraph", () => {
  it("reads from ParatextData's USX as an empty marker", () => {
    expect(namelessParaUsj().content[2]).toEqual({ type: "para", marker: "", content: ["df"] });
  });

  it.each(ORACLE_VIEWS.map(({ name, view }) => [name, view] as const))(
    "loads and hands back unchanged, its glyph a bare backslash (%s view)",
    async (_name, view) => {
      const usj = namelessParaUsj();
      const mounted = await mountInView(usj, view);
      const shown = namelessParaText(mounted);
      const saved = mounted.ref.current?.getUsj();
      mounted.unmount();

      expect(saved).toEqual(usj);
      if (saved) expect(usjToUsxString(saved)).toContain('<para style="">df</para>');
      // Every view that shows paragraph markers shows this one as the backslash alone.
      if (view.markerMode !== "hidden" || view.hasGutterParaMarkers)
        expect(shown.replace(/\s/g, " ")).toBe("\\ df");
      else expect(shown).toBe("df");
    },
  );

  it.each(["standard", "unformatted"])(
    "saves a rename of its glyph (%s view)",
    async (viewName) => {
      const mounted = await mountInView(namelessParaUsj(), oracleView(viewName));
      await editNamelessPara(mounted, ([glyph]) => {
        glyph.setTextContent("\\q");
        glyph.select(2, 2);
      });
      const pending = mounted.ref.current?.getUsj();
      await depart(mounted);
      const settled = mounted.ref.current?.getUsj();
      mounted.unmount();

      expect(settled?.content[2]).toEqual({ type: "para", marker: "q", content: ["df"] });
      expect(pending).toEqual(settled);
    },
  );

  it.each(["standard", "unformatted"])(
    "keeps its backslash a marker when a marker is typed inside it (%s view)",
    async (viewName) => {
      const mounted = await mountInView(namelessParaUsj(), oracleView(viewName));
      await editNamelessPara(mounted, (texts) => {
        const content = texts[texts.length - 1];
        content.setTextContent("d\\bd x\\bd* f");
        content.select(10, 10);
      });
      const pending = mounted.ref.current?.getUsj();
      await depart(mounted);
      const settled = mounted.ref.current?.getUsj();
      const screen = mounted.lexical.getEditorState().read(() => $screenBytes());
      mounted.unmount();

      expect(settled?.content[2]).toEqual({
        type: "para",
        marker: "",
        content: ["d", { type: "char", marker: "bd", content: ["x"] }, " f"],
      });
      expect(pending).toEqual(settled);
      expect(withoutLineBreaks(screen ?? "")).toBe(withoutLineBreaks(savedBytes(settled)));
    },
  );

  // Each edit leaves the glyph naming no marker, and the paragraph's bytes then read the way
  // ParatextData reads them: a `\\` that opens them is the nameless marker, one after text is text.
  // The file gets every byte the screen shows, and getUsj() reports it before the edit settles.
  const GLYPH_EDITS: { name: string; glyph: string; caret: number; settled: MarkerContent }[] = [
    {
      name: "a byte typed before the backslash",
      glyph: "x\\",
      caret: 1,
      settled: { type: "para", marker: "p", content: ["x\\ df"] },
    },
    {
      name: "a star typed before the backslash",
      glyph: "*\\",
      caret: 1,
      settled: { type: "para", marker: "p", content: ["*\\ df"] },
    },
    {
      name: "a backslash typed after the backslash",
      glyph: "\\\\",
      caret: 2,
      settled: { type: "para", marker: "", content: ["\\ df"] },
    },
    {
      name: "the backslash deleted",
      glyph: "",
      caret: 0,
      settled: { type: "para", marker: "p", content: [" df"] },
    },
  ];
  describe.each(["standard", "unformatted"])("in the %s view", (viewName) => {
    it.each(GLYPH_EDITS)(
      "saves what the screen shows: $name",
      async ({ glyph, caret, settled }) => {
        const mounted = await mountInView(namelessParaUsj(), oracleView(viewName));
        await editNamelessPara(mounted, ([glyphText]) => {
          glyphText.setTextContent(glyph);
          glyphText.select(caret, caret);
        });
        const pending = mounted.ref.current?.getUsj();
        await depart(mounted);
        const saved = mounted.ref.current?.getUsj();
        const screen = mounted.lexical.getEditorState().read(() => $screenBytes());
        mounted.unmount();

        expect(saved?.content[2]).toEqual(settled);
        expect(withoutLineBreaks(screen ?? "")).toBe(withoutLineBreaks(savedBytes(saved)));
        expect(pending).toEqual(saved);
      },
    );
  });
});
