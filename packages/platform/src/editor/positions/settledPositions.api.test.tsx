/**
 * The public position API, end to end: a host holds a `jsonPath` it read from `getUsj()` and hands
 * it straight back to `setAnnotation`. While an edit is pending those are two different documents,
 * and the top-level indexes of one do not name the same paragraphs as the other — so an untranslated
 * path either fails to resolve or, worse, resolves onto the wrong paragraph.
 */
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { contentPath, twoParaUsj, $textContaining } from "./positions.test-helpers";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, $isElementNode, $isTextNode, LexicalEditor, LexicalNode } from "lexical";
import { $isParaNode, $isTypedMarkNode, getPendedDisplayOwners, TypedMarkNode } from "shared";

/** Every `TypedMarkNode` in the tree, depth-first. */
function $marks(nodes: LexicalNode[] = $getRoot().getChildren()): TypedMarkNode[] {
  const out: TypedMarkNode[] = [];
  nodes.forEach((node) => {
    if ($isTypedMarkNode(node)) out.push(node);
    if ($isElementNode(node)) out.push(...$marks(node.getChildren()));
  });
  return out;
}

/** What the annotation ended up wrapping. */
function annotatedText(lexical: LexicalEditor): string[] {
  return lexical.getEditorState().read(() => $marks().map((mark) => mark.getTextContent()));
}

/** The markers of a settled document's top-level content, so a row can show the document the host
 * would actually have been reading. */
function settledMarkers(usj: Usj | undefined): (string | undefined)[] {
  return (usj?.content ?? []).map((item) =>
    typeof item === "string" ? undefined : (item as MarkerObject).marker,
  );
}

describe("setAnnotation while a paragraph is pending", () => {
  it("follows a settled index the split pushed down", async () => {
    const { ref, lexical } = await mountStandardViewEditor(twoParaUsj(["plain body"]));
    await act(async () => {
      lexical.update(() => {
        const node = $textContaining("plain body");
        node.setTextContent("plain \\q1 body");
        node.select(0, 0);
      });
      await Promise.resolve();
      await Promise.resolve();
    });
    expect(getPendedDisplayOwners(lexical)?.size ?? 0).toBeGreaterThan(0);
    // The host's view: the typed `\q1` has already become a paragraph of its own, so the last
    // paragraph is at settled index 4 while the live tree still has it at 3.
    expect(settledMarkers(ref.current?.getUsj())).toEqual(["id", "c", "p", "q1", "p"]);

    await act(async () => {
      ref.current?.setAnnotation(
        {
          start: { jsonPath: contentPath([4, 0]), offset: 0 },
          end: { jsonPath: contentPath([4, 0]), offset: 6 },
        },
        "test",
        "1",
      );
      await Promise.resolve();
    });

    expect(annotatedText(lexical)).toEqual(["depart"]);
  });

  it("follows a settled index the rejoin pulled up, rather than the paragraph that index names live", async () => {
    const { ref, lexical } = await mountStandardViewEditor({
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
    expect(settledMarkers(ref.current?.getUsj())).toEqual(["id", "c", "p", "p"]);

    await act(async () => {
      ref.current?.setAnnotation(
        {
          start: { jsonPath: contentPath([3, 0]), offset: 0 },
          end: { jsonPath: contentPath([3, 0]), offset: 4 },
        },
        "test",
        "1",
      );
      await Promise.resolve();
    });

    // Live index 3 is the artifact paragraph, whose own `"more"` is four characters long — so an
    // untranslated path resolves happily onto the wrong paragraph. This is the silent mis-anchor,
    // not a failure to resolve.
    expect(annotatedText(lexical)).toEqual(["depa"]);
  });
});
