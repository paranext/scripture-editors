/**
 * A host's annotation is not a user's edit: setting or removing one adds no undo step. An undo
 * reverts the user's edits exactly as it does in a document with no annotation, and an annotation
 * set after the edit it reverts goes with it, silently; a redo brings the edit back with it.
 */
import { mountInView, MountedInView, oracleView } from "./annotationLocations.test-helpers";
import { $textContaining, twoParaUsj } from "../positions/positions.test-helpers";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $getSelection,
  $isRangeSelection,
  LexicalNode,
  REDO_COMMAND,
  UNDO_COMMAND,
} from "lexical";
import { $isTypedMarkNode } from "shared";
import { vi } from "vitest";

const usj = twoParaUsj(["In the beginning"]);

/** The edited paragraph's text. */
function paraText(mounted: MountedInView): string {
  return mounted.lexical.getEditorState().read(() => $getRoot().getChildren()[2].getTextContent());
}

/** How many annotation marks the document holds. */
function markCount(mounted: MountedInView): number {
  return mounted.lexical.getEditorState().read(() => {
    let count = 0;
    const walk = (node: LexicalNode): void => {
      if ($isTypedMarkNode(node)) count += 1;
      if ("getChildren" in node && typeof node.getChildren === "function")
        (node.getChildren() as LexicalNode[]).forEach(walk);
    };
    walk($getRoot());
    return count;
  });
}

async function typeAtStart(mounted: MountedInView, text: string): Promise<void> {
  await act(async () => {
    mounted.lexical.update(() => {
      $textContaining("In the").select(0, 0);
      const selection = $getSelection();
      if ($isRangeSelection(selection)) selection.insertText(text);
    });
    await Promise.resolve();
  });
}

async function history(mounted: MountedInView, command: "undo" | "redo"): Promise<void> {
  await act(async () => {
    mounted.lexical.dispatchCommand(command === "undo" ? UNDO_COMMAND : REDO_COMMAND, undefined);
    await Promise.resolve();
  });
}

describe("an annotation and the undo stack", () => {
  it("adds no undo step: one undo reverts the edit before it, silently, and a redo brings both back", async () => {
    const plain = await mountInView(usj, oracleView("standard"));
    await typeAtStart(plain, "x");
    await history(plain, "undo");
    const plainUndone = paraText(plain);
    await history(plain, "redo");
    const plainRedone = paraText(plain);
    plain.unmount();

    const mounted = await mountInView(usj, oracleView("standard"));
    await typeAtStart(mounted, "x");
    const onRemove = vi.fn();
    await act(async () => {
      mounted.ref.current?.setAnnotation(
        {
          start: { jsonPath: "$.content[2].content[0]", offset: 1 },
          end: { jsonPath: "$.content[2].content[0]", offset: 3 },
        },
        "test",
        "a",
        { onRemove },
      );
      await Promise.resolve();
    });
    expect(markCount(mounted)).toBe(1);

    await history(mounted, "undo");
    expect(paraText(mounted)).toBe(plainUndone);
    expect(markCount(mounted)).toBe(0);

    await history(mounted, "redo");
    expect(paraText(mounted)).toBe(plainRedone);
    expect(markCount(mounted)).toBe(1);
    expect(onRemove).not.toHaveBeenCalled();
    mounted.unmount();
  });

  it("adds no undo step for a removal either", async () => {
    const mounted = await mountInView(usj, oracleView("standard"));
    await typeAtStart(mounted, "x");
    const before = paraText(mounted);
    await act(async () => {
      mounted.ref.current?.setAnnotation(
        {
          start: { jsonPath: "$.content[2].content[0]", offset: 1 },
          end: { jsonPath: "$.content[2].content[0]", offset: 3 },
        },
        "test",
        "a",
      );
      await Promise.resolve();
    });
    await act(async () => {
      mounted.ref.current?.removeAnnotation("test", "a");
      await Promise.resolve();
    });
    expect(paraText(mounted)).toBe(before);
    // The one undo step is the typed `x`.
    await history(mounted, "undo");
    expect(paraText(mounted)).not.toContain("x");
    mounted.unmount();
  });
});
