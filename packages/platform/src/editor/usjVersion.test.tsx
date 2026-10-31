/**
 * The editor hands back every document at the `version` it was given. USX, USJ and USFM share one
 * version numbering, and a host that writes the USJ back (through `usjToUsxString`, which stamps
 * the USJ's own version) must get the version its source served — a 3.0 project's USX must not come
 * back labelled 3.1 because it passed through the editor. Every outgoing path is pinned: the
 * untouched load, an ordinary edit (and its `onUsjChange`), a settled read of a pending edit, and a
 * reload with `setUsj`.
 */
import { mountStandardViewEditor, spanUsj } from "./settledGetUsj.test-helpers";
import { Usj, USJ_VERSION } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, $getState, $isTextNode, TextNode } from "lexical";
import {
  $isCharNode,
  $isMarkerNode,
  CharNode,
  getPendedDisplayOwners,
  textTypeState,
} from "shared";

const SECOND_PARAGRAPH = "a second paragraph to depart to";

function withVersion(version: string): Usj {
  return { ...spanUsj, version };
}

function $secondParagraphText(): TextNode {
  const node = $getRoot()
    .getAllTextNodes()
    .find((candidate) => candidate.getTextContent() === SECOND_PARAGRAPH);
  if (!node) throw new Error("second paragraph text not found");
  return node;
}

function $ndChar(): CharNode {
  const content = $getRoot()
    .getAllTextNodes()
    .find((node) => !$isMarkerNode(node) && $isCharNode(node.getParent()));
  const char = content?.getParent();
  if (!char || !$isCharNode(char)) throw new Error("nd char span not found");
  return char;
}

async function settle(): Promise<void> {
  await Promise.resolve();
  await Promise.resolve();
}

describe("the editor preserves the USJ version it was given", () => {
  it.each(["3.0", "3.1"])("reports version %s for the untouched load", async (version) => {
    const { ref, logs } = await mountStandardViewEditor(withVersion(version));
    expect(ref.current?.getUsj()?.version).toBe(version);
    expect(logs.filter((line) => line.includes("version"))).toEqual([]);
  });

  it.each(["3.0", "3.1"])("reports version %s after an edit", async (version) => {
    const changes: Usj[] = [];
    const { ref, lexical } = await mountStandardViewEditor(withVersion(version), {
      onUsjChange: (usj) => changes.push(usj),
    });

    await act(async () => {
      lexical.update(() => $secondParagraphText().setTextContent(`${SECOND_PARAGRAPH}!`));
      await settle();
    });

    const usj = ref.current?.getUsj();
    expect(JSON.stringify(usj)).toContain(`${SECOND_PARAGRAPH}!`);
    expect(usj?.version).toBe(version);
    expect(changes.length).toBeGreaterThan(0);
    expect(changes.map((change) => change.version)).toEqual(changes.map(() => version));
  });

  it.each(["3.0", "3.1"])(
    "reports version %s for a settled read of a pending edit",
    async (version) => {
      const { ref, lexical } = await mountStandardViewEditor(withVersion(version));

      // An attribute display run half-typed over, caret inside: the edit stays pending, so `getUsj`
      // has to settle it rather than hand back the cached serialization.
      await act(async () => {
        lexical.update(() => $ndChar().setUnknownAttributes({ mykey: "myval" }));
        await settle();
      });
      await act(async () => {
        lexical.update(() => {
          const run = $ndChar()
            .getChildren()
            .find(
              (child): child is TextNode =>
                $isTextNode(child) && $getState(child, textTypeState) === "attribute",
            );
          if (!run) throw new Error("attribute run not found");
          run.setTextContent("|stuf");
          run.select(5, 5);
        });
        await settle();
      });
      expect(getPendedDisplayOwners(lexical)?.size ?? 0).toBeGreaterThan(0);

      const usj = ref.current?.getUsj();
      expect(JSON.stringify(usj)).toContain("|stuf");
      expect(usj?.version).toBe(version);
    },
  );

  it("takes the version of a document loaded with setUsj", async () => {
    const changes: Usj[] = [];
    const { ref, lexical } = await mountStandardViewEditor(withVersion(USJ_VERSION), {
      onUsjChange: (usj) => changes.push(usj),
    });

    await act(async () => {
      ref.current?.setUsj(withVersion("3.0"));
      await settle();
    });
    expect(ref.current?.getUsj()?.version).toBe("3.0");

    await act(async () => {
      lexical.update(() => $secondParagraphText().setTextContent(`${SECOND_PARAGRAPH}!`));
      await settle();
    });
    expect(ref.current?.getUsj()?.version).toBe("3.0");
    expect(changes.at(-1)?.version).toBe("3.0");
  });

  it("reloads a document whose only difference is its version", async () => {
    const { ref } = await mountStandardViewEditor(withVersion(USJ_VERSION));

    await act(async () => {
      ref.current?.setUsj(withVersion("3.0"));
      await settle();
    });

    expect(ref.current?.getUsj()).toEqual(withVersion("3.0"));
  });
});
