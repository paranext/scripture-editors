/**
 * A nameless paragraph: ParatextData reads `\p \ df` as `<para style="" status="unknown">df</para>`,
 * a paragraph whose marker is the empty name. The editor shows its glyph as a bare `\`, hands it
 * back unchanged, saves a rename of that glyph, and — until a typed nameless backslash tokenizes
 * as ParatextData reads it — keeps the paragraph as it is when the user types inside it rather
 * than re-tokenizing its `\ ` into literal text.
 */
import {
  mountInView,
  ORACLE_VIEWS,
  oracleView,
} from "../annotationLocations/annotationLocations.test-helpers";
import { depart } from "./pendingSettledOracle.test-helpers";
import { Usj, usjToUsxString, usxStringToUsj } from "@eten-tech-foundation/scripture-utilities";
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
      const shown = namelessParaText(mounted);
      mounted.unmount();

      expect(settled?.content[2]).toEqual({
        type: "para",
        marker: "",
        content: ["d\\bd x\\bd* f"],
      });
      expect(pending).toEqual(settled);
      expect(shown.replace(/\s/g, " ")).toBe("\\ d\\bd x\\bd* f");
    },
  );
});
