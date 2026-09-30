// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { getEmbeddedLexicalEditor } from "../../../../libs/shared-react/src/plugins/usj/react-test.utils";
import { createComment, createThread } from "./comments/commenting";
import Marginal, { MarginalRef } from "./Marginal";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { act, fireEvent, render, screen } from "@testing-library/react";
import {
  $getNodeByKey,
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  LexicalNode,
  NodeKey,
} from "lexical";
import { createRef } from "react";
import { $addDisplayAnnotation, COMMENT_MARK_TYPE } from "shared";
import { $isImmutableNoteCallerNode, getViewOptions, STANDARD_VIEW_MODE } from "shared-react";
import { MockInstance, vi } from "vitest";

/** The first descendant of `root` (depth-first, root included) `predicate` accepts. */
function findDescendant(
  root: LexicalNode,
  predicate: (node: LexicalNode) => boolean,
): LexicalNode | undefined {
  if (predicate(root)) return root;
  if (!$isElementNode(root)) return undefined;
  for (const child of root.getChildren()) {
    const found = findDescendant(child, predicate);
    if (found) return found;
  }
  return undefined;
}

const sampleUsj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["Test Book"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [{ type: "verse", marker: "v", number: "1" }, "first verse text"],
    },
  ],
};

// Delegation smoke test only: Marginal's ref methods are one-line pass-throughs to the inner
// Editor, so one representative per pass-through style (boolean-returning, object-returning)
// proves the wiring without re-testing Editor behavior.
describe("Marginal ref delegation", () => {
  let consoleWarnSpy: MockInstance;

  beforeEach(() => {
    // Marginal logs a deprecation warning on mount; keep test output clean.
    consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => undefined);
  });

  afterEach(() => {
    consoleWarnSpy.mockRestore();
  });

  async function renderMarginal() {
    const ref = createRef<MarginalRef>();
    let mountedContainer: HTMLElement | undefined;
    await act(async () => {
      const { container } = render(
        <Marginal
          ref={ref}
          defaultUsj={sampleUsj}
          scrRef={{ book: "GEN", chapterNum: 1, verseNum: 1 }}
          options={{ view: getViewOptions(STANDARD_VIEW_MODE) }}
        />,
      );
      mountedContainer = container;
    });
    if (!ref.current) throw new Error("MarginalRef did not mount");
    if (!mountedContainer) throw new Error("container did not mount");
    // Marginal fills the inner Editor's children slot with its own CommentPlugin, so the
    // EditorRefPlugin-as-child capture is unavailable; reach in via the DOM back-reference.
    const lexical = getEmbeddedLexicalEditor(mountedContainer);
    return { marginal: ref.current, lexical, container: mountedContainer };
  }

  it("delegates isFocused to the inner editor", async () => {
    const { marginal, container } = await renderMarginal();
    const root = container.querySelector<HTMLElement>(".editor-input");
    if (!root) throw new Error("editor root not found");

    expect(marginal.isFocused()).toBe(false);

    await act(async () => root.focus());

    expect(marginal.isFocused()).toBe(true);
  });

  it("delegates getMarkerMenuContext to the inner editor", async () => {
    const { marginal, lexical } = await renderMarginal();
    await act(async () => {
      lexical.update(() => {
        const textNode = $getRoot()
          .getAllTextNodes()
          .find((node) => node.getTextContent().includes("first verse text"));
        if (!textNode || !$isTextNode(textNode)) throw new Error("seed text node not found");
        textNode.select(5, 5);
      });
      // Flush Lexical's microtask-deferred commit so the state read sees the selection.
      await Promise.resolve();
      await Promise.resolve();
    });

    const context = marginal.getMarkerMenuContext();

    if (!context) throw new Error("expected a marker-menu context from the inner editor");
    expect(context.source).toBe("character");
    expect(context.paraMarker).toBe("p");
  });
});

describe("Marginal comments panel", () => {
  let consoleWarnSpy: MockInstance;

  beforeEach(() => {
    consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => undefined);
  });

  afterEach(() => {
    consoleWarnSpy.mockRestore();
  });

  /** A footnote's caller renders as `ImmutableNoteCallerNode` — a collapsed decorator, even in
   * Standard view (`noteMode: "collapsed"`) — unlike the seed verse marker, which Standard view
   * keeps as editable text. */
  const sampleUsjWithNote: Usj = {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["Test Book"] },
      { type: "chapter", marker: "c", number: "1" },
      {
        type: "para",
        marker: "p",
        content: [
          { type: "verse", marker: "v", number: "1" },
          "first verse text",
          {
            type: "note",
            marker: "f",
            caller: "+",
            content: [{ type: "char", marker: "ft", content: ["a note"] }],
          },
        ],
      },
    ],
  };

  /** Mounts Marginal over `sampleUsjWithNote` and holds comment `"c1"` on the seed note caller's
   * display bytes alone — no mark. */
  async function renderMarginalWithCallerComment() {
    const ref = createRef<MarginalRef>();
    let mountedContainer: HTMLElement | undefined;
    await act(async () => {
      const { container } = render(
        <Marginal
          ref={ref}
          defaultUsj={sampleUsjWithNote}
          scrRef={{ book: "GEN", chapterNum: 1, verseNum: 1 }}
          options={{ view: getViewOptions(STANDARD_VIEW_MODE) }}
        />,
      );
      mountedContainer = container;
    });
    if (!ref.current) throw new Error("MarginalRef did not mount");
    if (!mountedContainer) throw new Error("container did not mount");
    const lexical = getEmbeddedLexicalEditor(mountedContainer);

    let callerKey!: NodeKey;
    await act(async () => {
      lexical.update(() => {
        const callerNode = findDescendant($getRoot(), $isImmutableNoteCallerNode);
        if (!callerNode) throw new Error("expected a note-caller decorator in the seed content");
        callerKey = callerNode.getKey();
        $addDisplayAnnotation(callerNode, COMMENT_MARK_TYPE, "c1", 0, 0);
      });
      await Promise.resolve();
      await Promise.resolve();
    });

    return { marginal: ref.current, lexical, container: mountedContainer, callerKey };
  }

  it("selects the start of the carrier and activates the thread when clicked, for a comment held only on display bytes", async () => {
    const { marginal, lexical, container, callerKey } = await renderMarginalWithCallerComment();

    await act(async () => {
      marginal.setComments?.([
        createThread("1", [createComment("looks good", "Reviewer", "cm1")], "c1"),
      ]);
    });

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /show comments/i }));
    });

    const threadItem = container.querySelector<HTMLLIElement>(
      ".CommentPlugin_CommentsPanel_List_Thread",
    );
    if (!threadItem) throw new Error("expected the comment thread to render in the panel");
    expect(threadItem.classList.contains("active")).toBe(false);

    await act(async () => {
      fireEvent.click(threadItem);
      await Promise.resolve();
      await Promise.resolve();
    });

    lexical.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      expect(selection.isCollapsed()).toBe(true);
      expect(selection.anchor.type).toBe("element");
      const callerNode = $getNodeByKey(callerKey);
      if (!callerNode) throw new Error("caller node missing");
      expect(selection.anchor.offset).toBe(callerNode.getIndexWithinParent());
    });

    const activeThreadItem = container.querySelector<HTMLLIElement>(
      ".CommentPlugin_CommentsPanel_List_Thread",
    );
    expect(activeThreadItem?.classList.contains("active")).toBe(true);
  });

  it("names a comment held on a collapsed carrier from an element-point caret in front of it", async () => {
    const { lexical, container, callerKey } = await renderMarginalWithCallerComment();

    await act(async () => {
      lexical.update(() => {
        const callerNode = $getNodeByKey(callerKey);
        if (!callerNode) throw new Error("caller node missing");
        const note = callerNode.getParent();
        if (!note) throw new Error("caller node has no parent");
        note.select(callerNode.getIndexWithinParent(), callerNode.getIndexWithinParent());
      });
      // The effect that marks an active carrier "selected" schedules its own commit on a 0ms timer.
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    const callerElement = container.querySelector(".immutable-note-caller");
    if (!callerElement) throw new Error("expected the note caller to render");
    expect(callerElement.classList.contains("selected")).toBe(true);
  });
});
