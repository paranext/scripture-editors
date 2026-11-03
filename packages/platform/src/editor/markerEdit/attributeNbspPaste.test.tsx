/**
 * A no-break space in a char span's attribute value, copied and pasted in Standard view with the
 * invisible-characters setting off. Copy writes the value's no-break space as U+00A0; paste must
 * keep it a no-break space in the value rather than spelling it `~`, which a value reads as an
 * ordinary character.
 */
import { pasteEvent } from "./markerEdit.test-helpers";
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, $isTextNode, PASTE_COMMAND, TextNode } from "lexical";
import { $isParaNode, NBSP } from "shared";
import { describe, expect, it } from "vitest";

// jsdom implements neither `ClipboardEvent` nor `DragEvent`; Lexical's own paste fallback
// duck-types against both. Same stub as the sibling clipboard suites.
const globalStubs: { DragEvent?: unknown; ClipboardEvent?: unknown } = globalThis;
if (typeof globalStubs.DragEvent === "undefined")
  globalStubs.DragEvent = class DragEvent extends Event {};
if (typeof globalStubs.ClipboardEvent === "undefined")
  globalStubs.ClipboardEvent = class ClipboardEvent extends Event {};

const HOST: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
    { type: "chapter", marker: "c", number: "1" },
    { type: "para", marker: "p", content: ["Before after"] },
    { type: "para", marker: "p", content: ["a second paragraph to depart to"] },
  ],
};

/** Pastes `text` as plain text between "Before " and "after" and returns the first paragraph. */
async function pastedPara(text: string): Promise<unknown[] | undefined> {
  const { ref, lexical } = await mountStandardViewEditor(HOST);
  const { event } = pasteEvent({ "text/plain": text });
  await act(async () =>
    lexical.update(() => {
      const run = $getRoot()
        .getChildren()
        .filter($isParaNode)[0]
        .getChildren()
        .find(
          (node): node is TextNode => $isTextNode(node) && node.getTextContent().includes("Before"),
        );
      run?.select(7, 7);
      lexical.dispatchCommand(PASTE_COMMAND, event);
    }),
  );
  await act(async () => {
    await Promise.resolve();
    await Promise.resolve();
  });
  await act(async () =>
    lexical.update(() => {
      const departure = $getRoot().getChildren().filter($isParaNode)[1]?.getLastChild();
      if (departure && $isTextNode(departure)) departure.select(0, 0);
    }),
  );
  await act(async () => {
    await Promise.resolve();
    await Promise.resolve();
  });
  const para = ref.current?.getUsj()?.content[2];
  return typeof para === "object" && "content" in para ? para.content : undefined;
}

function spanIn(content: unknown[] | undefined): MarkerObject | undefined {
  return content?.find(
    (item): item is MarkerObject =>
      typeof item === "object" && item !== null && "marker" in item && item.marker === "w",
  );
}

function lemmaOf(content: unknown[] | undefined): unknown {
  const span = spanIn(content);
  return span && "lemma" in span ? span.lemma : undefined;
}

describe("a pasted char span's attribute value, with the invisible-characters setting off", () => {
  it("keeps a no-break space in the value", async () => {
    const content = await pastedPara(`\\w de|lemma="h${NBSP}i"\\w*`);

    expect(lemmaOf(content)).toBe(`h${NBSP}i`);
  });

  it("leaves a `~` in the value as the character it is", async () => {
    const content = await pastedPara(`\\w de|lemma="h~i"\\w*`);

    expect(lemmaOf(content)).toBe("h~i");
  });

  it("keeps a no-break space in the span's body", async () => {
    const content = await pastedPara(`\\w d${NBSP}e|lemma="x"\\w*`);

    expect(spanIn(content)?.content).toEqual([`d${NBSP}e`]);
    expect(lemmaOf(content)).toBe("x");
  });
});
