/**
 * The repair step's report of whether it moved a node.
 *
 * Its callers tag their commit `CURSOR_CHANGE_TAG`, which keeps that commit out of the host
 * application's USJ-change handler. Lexical clears an update's tags only when the commit dirties a
 * node, so a tag on a repair that only moved the caret would ride along on the user's NEXT commit
 * and hide that edit from the host — which is why the repair has to say which kind it was.
 */
import { $createImmutableVerseNode } from "../../nodes/usj";
import { baseTestEnvironment } from "./react-test.utils";
import { CaretHostRepair, useTransientCaretHost } from "./transientCaretHost";
import { act } from "@testing-library/react";
import {
  $createTextNode,
  $getRoot,
  $getSelection,
  $hasAncestor,
  $isRangeSelection,
  $isTextNode,
  LexicalEditor,
  TextNode,
} from "lexical";
import { $createParaNode, $isParaNode, CURSOR_PLACEHOLDER_CHAR, ParaNode } from "shared";
import { useEffect } from "react";

// jsdom implements no layout: Lexical reads a Range rect when it writes the DOM selection.
if (typeof Range.prototype.getBoundingClientRect !== "function") {
  Range.prototype.getBoundingClientRect = function getBoundingClientRect(): DOMRect {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      toJSON() {
        return this;
      },
    };
  };
}

function hostCount(editor: LexicalEditor): number {
  return editor.getEditorState().read(
    () =>
      $getRoot()
        .getAllTextNodes()
        .filter((node: TextNode) => node.getTextContent().includes(CURSOR_PLACEHOLDER_CHAR)).length,
  );
}

async function mountRepair(): Promise<{
  editor: LexicalEditor;
  para: ParaNode;
  repair: CaretHostRepair;
}> {
  let anchorPara: ParaNode | undefined;
  let repair: CaretHostRepair | undefined;

  // The anchor a guard would state: the verse decorator this paragraph opens with renders no text
  // of its own, so the boundary past it wants a host whenever the caret rests in that paragraph —
  // the empty-verse guard's own rule, stated against this fixture.
  const $anchor = () => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection) || !selection.isCollapsed()) return undefined;
    const versePara = $getRoot().getChildren().filter($isParaNode)[0];
    const caretNode = selection.anchor.getNode();
    if (!versePara || !(versePara.is(caretNode) || $hasAncestor(caretNode, versePara)))
      return undefined;
    return versePara.getFirstChild() ?? undefined;
  };

  function CaptureRepair(): null {
    const $repairCaret = useTransientCaretHost($anchor);
    useEffect(() => {
      repair = $repairCaret;
    }, [$repairCaret]);
    return null;
  }

  const { editor } = await baseTestEnvironment(
    () => {
      anchorPara = $createParaNode("p");
      $getRoot().append(
        anchorPara.append($createImmutableVerseNode("1")),
        $createParaNode("p").append($createTextNode("elsewhere")),
      );
    },
    <CaptureRepair />,
  );
  if (!repair || !anchorPara) throw new Error("the repair or its paragraph was not captured");
  return { editor, para: anchorPara, repair };
}

describe("the transient caret host's repair", () => {
  it("reports that it moved a node when it materializes a host", async () => {
    const { editor, para, repair } = await mountRepair();
    let moved: boolean | undefined;

    await act(async () => {
      editor.update(
        () => {
          const anchor = para.getFirstChild();
          if (!anchor) throw new Error("expected an anchor");
          moved = repair(anchor);
        },
        { discrete: true },
      );
    });

    expect(moved).toBe(true);
    expect(hostCount(editor)).toBe(1);
  });

  it("reports that it moved nothing when it adopts the host already there", async () => {
    const { editor, para, repair } = await mountRepair();
    const $repairFromAnchor = () => {
      const anchor = para.getFirstChild();
      if (!anchor) throw new Error("expected an anchor");
      return repair(anchor);
    };
    await act(async () => {
      editor.update(() => $repairFromAnchor(), { discrete: true });
    });
    let moved: boolean | undefined;

    // A second arrival at the same position — a click once an earlier arrival has put a host
    // there — finds that host and only puts the caret back into it.
    await act(async () => {
      editor.update(
        () => {
          moved = $repairFromAnchor();
        },
        { discrete: true },
      );
    });

    expect(moved).toBe(false);
    expect(hostCount(editor)).toBe(1);
  });

  it("reports that it moved a node when it drops a host the caret has left", async () => {
    const { editor, para, repair } = await mountRepair();
    await act(async () => {
      editor.update(
        () => {
          const anchor = para.getFirstChild();
          if (!anchor) throw new Error("expected an anchor");
          repair(anchor);
        },
        { discrete: true },
      );
    });
    let moved: boolean | undefined;

    // The caret leaves, and the repair is driven with nothing to host.
    await act(async () => {
      editor.update(
        () => {
          // The caret leaves the host for text in the next paragraph.
          const elsewhere = $getRoot().getLastChild();
          const text = $isParaNode(elsewhere) ? elsewhere.getFirstChild() : undefined;
          if (!$isTextNode(text)) throw new Error("expected text to put the caret in");
          text.select(1, 1);
          moved = repair(undefined);
        },
        { discrete: true },
      );
    });

    expect(moved).toBe(true);
    expect(hostCount(editor)).toBe(0);
  });
});
