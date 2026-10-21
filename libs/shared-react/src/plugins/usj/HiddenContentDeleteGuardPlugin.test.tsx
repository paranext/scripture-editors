// Should only be used on nodes that are initialized in the test environment.
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { $createImmutableVerseNode } from "../../nodes/usj";
import {
  HiddenContentDeleteDecision,
  HiddenContentDeleteHandler,
  HiddenContentDeleteRequest,
} from "./hidden-content-delete.model";
import { HiddenContentDeleteGuardPlugin } from "./HiddenContentDeleteGuardPlugin";
import { baseTestEnvironment, pressKey, sutUpdate, updateSelection } from "./react-test.utils";
import { StructureProtectionMode } from "./structure-protection.model";
import { StructureKeyboardPlugin } from "./StructureKeyboardPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { act } from "@testing-library/react";
import {
  $createNodeSelection,
  $createRangeSelection,
  $createTextNode,
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $setSelection,
  COMMAND_PRIORITY_LOW,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  CUT_COMMAND,
  DELETE_CHARACTER_COMMAND,
  DELETE_LINE_COMMAND,
  DELETE_WORD_COMMAND,
  DRAGSTART_COMMAND,
  INSERT_LINE_BREAK_COMMAND,
  INSERT_PARAGRAPH_COMMAND,
  KEY_DOWN_COMMAND,
  PASTE_COMMAND,
  REMOVE_TEXT_COMMAND,
  LexicalEditor,
  RangeSelection,
  TextNode,
  UNDO_COMMAND,
} from "lexical";
import { ReactNode } from "react";
import {
  $createImmutableChapterNode,
  $createNoteNode,
  $createParaNode,
  $createUnknownNode,
  $isUnknownNode,
  LoggerBasic,
  ParaNode,
  UnknownNode,
} from "shared";

/** A hidden `\fig`, its caption token-mode text as the editor loads it. */
function $createFigureNode(caption = "caption"): UnknownNode {
  return $createUnknownNode("figure", "fig").append($createTextNode(caption).setMode("token"));
}

/** A hidden `\esb` sidebar holding one paragraph. */
function $createSidebarNode(text = "sidebar text"): UnknownNode {
  return $createUnknownNode("sidebar", "esb").append(
    $createParaNode("p").append($createTextNode(text)),
  );
}

// Settling an answer focuses the editor (the host's dialog took focus), and once the root has focus
// every commit scrolls the DOM selection into view through `Range.getBoundingClientRect`, which
// jsdom does not implement.
const rangeProto = Range.prototype as Partial<
  Pick<Range, "getBoundingClientRect" | "getClientRects">
>;
const originalGetBoundingClientRect = rangeProto.getBoundingClientRect;
const originalGetClientRects = rangeProto.getClientRects;
beforeAll(() => {
  rangeProto.getBoundingClientRect = () => new DOMRect();
  rangeProto.getClientRects = () => document.createElement("div").getClientRects();
});
afterAll(() => {
  rangeProto.getBoundingClientRect = originalGetBoundingClientRect;
  rangeProto.getClientRects = originalGetClientRects;
});

/** Lets the held edit's answer arrive and settle. */
async function settle() {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
}

async function guardedEnvironment(
  $init: () => void,
  handler: HiddenContentDeleteHandler | undefined,
  options: {
    isEnabled?: boolean;
    structureProtectionMode?: StructureProtectionMode;
    copyLimit?: number;
    logger?: LoggerBasic;
    children?: ReactNode;
  } = {},
) {
  const { isEnabled = true, structureProtectionMode, copyLimit, logger, children } = options;
  return baseTestEnvironment(
    $init,
    <>
      <HiddenContentDeleteGuardPlugin
        isEnabled={isEnabled}
        structureProtectionMode={structureProtectionMode}
        copyLimit={copyLimit}
        onHiddenContentDelete={handler}
        logger={logger}
      />
      {structureProtectionMode && (
        <StructureKeyboardPlugin structureProtectionMode={structureProtectionMode} />
      )}
      {children}
    </>,
  );
}

/**
 * Claims any keystroke nothing above it claimed, ahead of Lexical's own native delete - which jsdom
 * cannot perform (no `Selection.modify`) - so a test can see that the guard let a keystroke pass.
 */
function claimUnhandledKeys(editor: LexicalEditor) {
  editor.registerCommand(KEY_DOWN_COMMAND, () => true, COMMAND_PRIORITY_LOW);
}

function answering(decision: HiddenContentDeleteDecision) {
  return vi.fn<HiddenContentDeleteHandler>(() => decision);
}

/**
 * A handler whose answer the test gives later, through `answer`. The handler is called a task after
 * the keystroke, so `answer` may come before or after it is: either way the handler resolves with it.
 */
function answeringLater() {
  let answer: (decision: HiddenContentDeleteDecision) => void = () => undefined;
  const answered = new Promise<HiddenContentDeleteDecision>((resolve) => (answer = resolve));
  const handler = vi.fn<HiddenContentDeleteHandler>(() => answered);
  return { handler, answer: (decision: HiddenContentDeleteDecision) => answer(decision) };
}

/**
 * Presses `key` on the editor's root, through Lexical's own keydown handling: its chord mapping, and
 * the DELETE_*_COMMAND a delete becomes when no KEY_DOWN handler claims it. `pressKey` dispatches
 * KEY_DOWN_COMMAND alone, so a delete it leaves unclaimed never becomes a command.
 */
async function pressThroughDom(editor: LexicalEditor, key: string, init: KeyboardEventInit = {}) {
  const event = new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true, ...init });
  await act(async () => {
    editor.getRootElement()?.dispatchEvent(event);
  });
  return event;
}

/** Dispatches a keydown carrying modifiers as KEY_DOWN_COMMAND, as `pressKey` does a bare key. */
async function pressChord(editor: LexicalEditor, key: string, init: KeyboardEventInit) {
  const event = new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true, ...init });
  await act(async () => {
    editor.dispatchCommand(KEY_DOWN_COMMAND, event);
  });
  return event;
}

/**
 * Lets a word or line delete measure its extent, which jsdom cannot (it has no `Selection.modify`):
 * `extend` stands in for where the browser's extension leaves the measuring selection's focus.
 *
 * Measuring moves the DOM selection, so the guard marks the caret dirty and Lexical writes it back.
 * A browser's DOM selection then holds the caret again; jsdom's does not follow Lexical's writes, and
 * the `selectionchange` that follows would read the caret back from the root's start. That event is
 * swallowed while the stub is in place.
 *
 * @returns Undoes the stub.
 */
function stubSelectionModify(
  editor: LexicalEditor,
  extend: (selection: RangeSelection) => void,
): () => void {
  const swallow = (event: Event) => event.stopImmediatePropagation();
  document.addEventListener("selectionchange", swallow, true);
  const nativeProto = Selection.prototype as { modify?: () => void };
  const hadNative = typeof nativeProto.modify === "function";
  if (!hadNative) nativeProto.modify = vi.fn();
  let rangeSelectionProto!: RangeSelection;
  editor.getEditorState().read(() => {
    rangeSelectionProto = Object.getPrototypeOf($createRangeSelection()) as RangeSelection;
  });
  const spy = vi.spyOn(rangeSelectionProto, "modify").mockImplementation(function (
    this: RangeSelection,
  ) {
    extend(this);
  });
  return () => {
    spy.mockRestore();
    if (!hadNative) delete nativeProto.modify;
    document.removeEventListener("selectionchange", swallow, true);
  };
}

/** A clipboard event carrying `text`, with clipboard data jsdom's own constructor would drop. */
function clipboardEvent(type: "paste" | "cut", text = "") {
  const event = new ClipboardEvent(type, { cancelable: true });
  const clipboardData = {
    types: text ? ["text/plain"] : [],
    files: [],
    getData: (format: string) => (format === "text/plain" ? text : ""),
    setData: vi.fn(),
  };
  Object.defineProperty(event, "clipboardData", { value: clipboardData });
  return event;
}

function spyLogger() {
  return { error: vi.fn(), warn: vi.fn(), info: vi.fn(), debug: vi.fn() };
}

function readTree(editor: LexicalEditor): string[] {
  return editor.getEditorState().read(() =>
    $getRoot()
      .getChildren()
      .map((block) =>
        $isUnknownNode(block) || !$isElementNode(block)
          ? `[${$isUnknownNode(block) ? block.getTag() : block.getType()}: ${block.getTextContent()}]`
          : block
              .getChildren()
              .map((child) =>
                $isUnknownNode(child)
                  ? `[${child.getTag()}: ${child.getTextContent()}]`
                  : child.getTextContent(),
              )
              .join(""),
      ),
  );
}

function readCaret(editor: LexicalEditor) {
  return editor.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) return undefined;
    const { key, offset } = selection.anchor;
    return { key, offset, isCollapsed: selection.isCollapsed() };
  });
}

describe("HiddenContentDeleteGuardPlugin", () => {
  describe("a figure in running text", () => {
    let before: TextNode;
    let after: TextNode;
    const $init = () => {
      before = $createTextNode("before");
      after = $createTextNode("after");
      $getRoot().append($createParaNode("p").append(before, $createFigureNode(), after));
    };

    it("asks before Backspace reaches it, naming the figure", async () => {
      const handler = answering("keep");
      const { editor } = await guardedEnvironment($init, handler);
      updateSelection(editor, after!, 0);

      const event = await pressKey(editor, "Backspace");
      await settle();

      expect(event.defaultPrevented).toBe(true);
      expect(handler).toHaveBeenCalledWith<[HiddenContentDeleteRequest]>({
        items: [{ tag: "figure", marker: "fig" }],
        action: "deleteBackward",
        canSkip: true,
      });
    });

    it("keeps the figure and moves the caret past it on 'keep'", async () => {
      const { editor } = await guardedEnvironment($init, answering("keep"));
      updateSelection(editor, after!, 0);

      await pressKey(editor, "Backspace");
      await settle();

      expect(readTree(editor)).toEqual(["before[figure: caption]after"]);
      expect(readCaret(editor)).toEqual({
        key: before!.getKey(),
        offset: "before".length,
        isCollapsed: true,
      });
    });

    it("removes the whole figure, and only the figure, on 'delete'", async () => {
      const { editor } = await guardedEnvironment($init, answering("delete"));
      updateSelection(editor, after!, 0);

      await pressKey(editor, "Backspace");
      await settle();

      expect(readTree(editor)).toEqual(["beforeafter"]);
    });

    it("asks before Delete reaches it from the other side", async () => {
      const handler = answering("delete");
      const { editor } = await guardedEnvironment($init, handler);
      updateSelection(editor, before!, "before".length);

      await pressKey(editor, "Delete");
      await settle();

      expect(handler).toHaveBeenCalledWith(expect.objectContaining({ action: "deleteForward" }));
      expect(readTree(editor)).toEqual(["beforeafter"]);
    });

    it("leaves editing native when there is no handler to ask", async () => {
      const { editor } = await guardedEnvironment($init, undefined);
      claimUnhandledKeys(editor);
      updateSelection(editor, after!, 0);

      const event = await pressKey(editor, "Backspace");

      expect(event.defaultPrevented).toBe(false);
    });

    it("asks before a word delete reaches it, and skips past it on 'keep'", async () => {
      const handler = answering("keep");
      const { editor } = await guardedEnvironment($init, handler);
      updateSelection(editor, after!, 0);

      await act(async () => {
        editor.dispatchCommand(DELETE_WORD_COMMAND, true);
      });
      await settle();

      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler).toHaveBeenCalledWith(expect.objectContaining({ canSkip: true }));
      expect(readTree(editor)).toEqual(["before[figure: caption]after"]);
      expect(readCaret(editor)).toEqual({
        key: before!.getKey(),
        offset: "before".length,
        isCollapsed: true,
      });
    });

    it("removes the word and the figure in one edit on 'delete', which one undo restores", async () => {
      const { editor } = await guardedEnvironment($init, answering("delete"), {
        children: <HistoryPlugin />,
      });
      updateSelection(editor, after!, 0);
      // The browser's word extent from the caret: back over the figure and the word before it.
      const restore = stubSelectionModify(editor, (probe) =>
        probe.focus.set(before.getKey(), 0, "text"),
      );

      try {
        await act(async () => {
          editor.dispatchCommand(DELETE_WORD_COMMAND, true);
        });
        await settle();
      } finally {
        restore();
      }

      expect(readTree(editor)).toEqual(["after"]);
      await act(async () => {
        editor.dispatchCommand(UNDO_COMMAND, undefined);
      });
      expect(readTree(editor)).toEqual(["before[figure: caption]after"]);
    });

    it("asks before Ctrl+Backspace, Lexical's word delete off Apple platforms, reaches it", async () => {
      const handler = answering("keep");
      const { editor } = await guardedEnvironment($init, handler);
      updateSelection(editor, after!, 0);

      const event = await pressChord(editor, "Backspace", { ctrlKey: true });
      await settle();

      expect(event.defaultPrevented).toBe(true);
      expect(handler).toHaveBeenCalledTimes(1);
    });

    it("leaves chords Lexical does not delete with alone, like Alt+Backspace (Undo off Apple)", async () => {
      const handler = answering("delete");
      const { editor } = await guardedEnvironment($init, handler);
      claimUnhandledKeys(editor);
      updateSelection(editor, after!, 0);

      const undo = await pressChord(editor, "Backspace", { altKey: true });
      const unbound = await pressChord(editor, "Backspace", { ctrlKey: true, altKey: true });
      await settle();

      expect(undo.defaultPrevented).toBe(false);
      expect(unbound.defaultPrevented).toBe(false);
      expect(handler).not.toHaveBeenCalled();
    });

    it("drops the edit when the editor became read-only while asking", async () => {
      const { handler, answer } = answeringLater();
      const { editor } = await guardedEnvironment($init, handler);
      updateSelection(editor, after!, 0);

      await pressKey(editor, "Backspace");
      await act(async () => editor.setEditable(false));
      await act(async () => answer("delete"));
      await settle();

      expect(readTree(editor)).toEqual(["before[figure: caption]after"]);
    });

    it("drops the edit when the caret moved while asking", async () => {
      const { handler, answer } = answeringLater();
      const { editor } = await guardedEnvironment($init, handler);
      updateSelection(editor, after!, 0);

      await pressKey(editor, "Backspace");
      updateSelection(editor, before!, 2);
      await act(async () => answer("delete"));
      await settle();

      expect(readTree(editor)).toEqual(["before[figure: caption]after"]);
      expect(readCaret(editor)).toEqual({ key: before!.getKey(), offset: 2, isCollapsed: true });
    });

    it("leaves Shift+Delete, the cut chord off Apple platforms, to the cut handler", async () => {
      const handler = answering("delete");
      const { editor } = await guardedEnvironment($init, handler);
      claimUnhandledKeys(editor);
      updateSelection(editor, before!, "before".length);

      const event = new KeyboardEvent("keydown", {
        key: "Delete",
        shiftKey: true,
        cancelable: true,
      });
      await act(async () => {
        editor.dispatchCommand(KEY_DOWN_COMMAND, event);
      });

      expect(event.defaultPrevented).toBe(false);
      expect(handler).not.toHaveBeenCalled();
    });

    it("leaves ordinary deletes alone", async () => {
      const handler = answering("delete");
      const { editor } = await guardedEnvironment($init, handler);
      claimUnhandledKeys(editor);
      updateSelection(editor, after!, 3);

      const event = await pressKey(editor, "Backspace");

      expect(event.defaultPrevented).toBe(false);
      expect(handler).not.toHaveBeenCalled();
    });

    it("does nothing when disabled (the content is visible)", async () => {
      const handler = answering("delete");
      const { editor } = await guardedEnvironment($init, handler, { isEnabled: false });
      claimUnhandledKeys(editor);
      updateSelection(editor, after!, 0);

      const event = await pressKey(editor, "Backspace");

      expect(event.defaultPrevented).toBe(false);
      expect(handler).not.toHaveBeenCalled();
    });

    it("refuses other edits while the question is open, and asks once", async () => {
      const { handler, answer } = answeringLater();
      const { editor } = await guardedEnvironment($init, handler);
      updateSelection(editor, after!, 0);

      await pressKey(editor, "Backspace");
      const second = await pressKey(editor, "Backspace");
      const typed = await pressKey(editor, "x");
      const moved = await pressKey(editor, "ArrowLeft");
      await act(async () => answer("delete"));
      await settle();

      expect(second.defaultPrevented).toBe(true);
      expect(typed.defaultPrevented).toBe(true);
      expect(moved.defaultPrevented).toBe(false);
      expect(handler).toHaveBeenCalledTimes(1);
      expect(readTree(editor)).toEqual(["beforeafter"]);
    });

    it("drops the edit when what it covers changed while asking", async () => {
      const { handler, answer } = answeringLater();
      const { editor } = await guardedEnvironment($init, handler);
      updateSelection(editor, after!, 0);

      await pressKey(editor, "Backspace");
      await sutUpdate(editor, () => {
        after.getWritable().insertBefore($createTextNode("inserted"));
      });
      await act(async () => answer("delete"));
      await settle();

      expect(readTree(editor)).toEqual(["before[figure: caption]insertedafter"]);
    });

    it("drops the edit, without moving the caret, when the document was replaced while asking", async () => {
      const { handler, answer } = answeringLater();
      const { editor } = await guardedEnvironment($init, handler);
      updateSelection(editor, after!, 0);

      await pressKey(editor, "Backspace");
      await sutUpdate(editor, () => {
        $getRoot()
          .clear()
          .append($createParaNode("p").append($createTextNode("reloaded")));
        $setSelection(null);
      });
      await act(async () => answer("delete"));
      await settle();

      expect(readTree(editor)).toEqual(["reloaded"]);
      expect(readCaret(editor)).toBeUndefined();
    });

    it("calls the handler only once the keystroke's dispatch has finished", async () => {
      let isDispatching = false;
      let wasCalledWhileDispatching: boolean | undefined;
      const handler = vi.fn<HiddenContentDeleteHandler>(() => {
        wasCalledWhileDispatching = isDispatching;
        return "keep";
      });
      const { editor } = await guardedEnvironment($init, handler);
      updateSelection(editor, after!, 0);

      await act(async () => {
        isDispatching = true;
        editor.dispatchCommand(
          KEY_DOWN_COMMAND,
          new KeyboardEvent("keydown", { key: "Backspace", cancelable: true }),
        );
        isDispatching = false;
      });
      await settle();

      expect(handler).toHaveBeenCalledTimes(1);
      expect(wasCalledWhileDispatching).toBe(false);
    });

    it("asks again once a question is answered, so editing never stays held", async () => {
      const handler = answering("keep");
      const { editor } = await guardedEnvironment($init, handler);

      updateSelection(editor, after!, 0);
      await pressKey(editor, "Backspace");
      await settle();
      updateSelection(editor, after!, 0);
      const again = await pressKey(editor, "Backspace");
      await settle();

      expect(again.defaultPrevented).toBe(true);
      expect(handler).toHaveBeenCalledTimes(2);
    });

    it("lets editing go on after an answer is dropped", async () => {
      const { handler, answer } = answeringLater();
      const { editor } = await guardedEnvironment($init, handler);
      claimUnhandledKeys(editor);
      updateSelection(editor, after!, 0);

      await pressKey(editor, "Backspace");
      updateSelection(editor, after!, 3);
      await act(async () => answer("delete"));
      await settle();
      const typed = await pressKey(editor, "x");

      expect(typed.defaultPrevented).toBe(false);
    });

    it("logs a failing handler and keeps the figure", async () => {
      const logger = spyLogger();
      const failure = new Error("dialog failed");
      const { editor } = await guardedEnvironment(
        $init,
        vi.fn<HiddenContentDeleteHandler>(() => Promise.reject(failure)),
        { logger },
      );
      updateSelection(editor, after!, 0);

      await pressKey(editor, "Backspace");
      await settle();

      expect(logger.error).toHaveBeenCalledWith(expect.any(String), failure);
      expect(readTree(editor)).toEqual(["before[figure: caption]after"]);
    });

    it("warns about an answer that is neither 'delete' nor 'keep', and keeps the figure", async () => {
      const logger = spyLogger();
      const { editor } = await guardedEnvironment(
        $init,
        // A host answering outside the contract, as a misspelled string from JavaScript would.
        vi.fn(() => "Delete") as unknown as HiddenContentDeleteHandler,
        { logger },
      );
      updateSelection(editor, after!, 0);

      await pressKey(editor, "Backspace");
      await settle();

      expect(logger.warn).toHaveBeenCalledTimes(1);
      expect(readTree(editor)).toEqual(["before[figure: caption]after"]);
    });

    it("logs an answer it drops", async () => {
      const logger = spyLogger();
      const { handler, answer } = answeringLater();
      const { editor } = await guardedEnvironment($init, handler, { logger });
      updateSelection(editor, after!, 0);

      await pressKey(editor, "Backspace");
      updateSelection(editor, before!, 2);
      await act(async () => answer("delete"));
      await settle();

      expect(logger.info).toHaveBeenCalledWith(expect.stringContaining("selection moved"));
    });

    it("counts a node selected while asking as a move, and drops the edit", async () => {
      const { handler, answer } = answeringLater();
      const { editor } = await guardedEnvironment($init, handler);
      updateSelection(editor, after!, 0);

      await pressKey(editor, "Backspace");
      await sutUpdate(editor, () => {
        const nodeSelection = $createNodeSelection();
        nodeSelection.add($getRoot().getFirstChildOrThrow().getKey());
        $setSelection(nodeSelection);
      });
      await act(async () => answer("delete"));
      await settle();

      expect(readTree(editor)).toEqual(["before[figure: caption]after"]);
    });

    it("does not count focus leaving for the host's prompt (no selection) as a move", async () => {
      const { handler, answer } = answeringLater();
      const { editor } = await guardedEnvironment($init, handler);
      updateSelection(editor, after!, 0);

      await pressKey(editor, "Backspace");
      await sutUpdate(editor, () => $setSelection(null));
      await act(async () => answer("delete"));
      await settle();

      expect(readTree(editor)).toEqual(["beforeafter"]);
    });

    it("still asks next to a figure under protected structure, where nothing structural is at stake", async () => {
      const handler = answering("keep");
      const { editor } = await guardedEnvironment($init, handler, {
        structureProtectionMode: "protected",
      });
      updateSelection(editor, after!, 0);

      const event = await pressKey(editor, "Backspace");
      await settle();

      expect(event.defaultPrevented).toBe(true);
      expect(handler).toHaveBeenCalledTimes(1);
    });
  });

  describe("a sidebar between paragraphs", () => {
    let first: TextNode;
    let second: TextNode;
    const $init = () => {
      first = $createTextNode("first");
      second = $createTextNode("second");
      $getRoot().append(
        $createParaNode("p").append(first),
        $createSidebarNode(),
        $createParaNode("q1").append(second),
      );
    };

    it("keeps it on 'keep', moving the caret to the paragraph before it", async () => {
      const handler = answering("keep");
      const { editor } = await guardedEnvironment($init, handler);
      updateSelection(editor, second!, 0);

      await pressKey(editor, "Backspace");
      await settle();

      expect(handler).toHaveBeenCalledWith({
        items: [{ tag: "sidebar", marker: "esb" }],
        action: "deleteBackward",
        canSkip: true,
      });
      expect(readTree(editor)).toEqual(["first", "[sidebar: sidebar text]", "second"]);
      expect(readCaret(editor)).toEqual({
        key: first!.getKey(),
        offset: "first".length,
        isCollapsed: true,
      });
    });

    it("removes only the sidebar on Backspace + 'delete', never merging the paragraphs", async () => {
      const { editor } = await guardedEnvironment($init, answering("delete"));
      updateSelection(editor, second!, 0);

      await pressKey(editor, "Backspace");
      await settle();

      expect(readTree(editor)).toEqual(["first", "second"]);
    });

    it("removes only the sidebar on Delete + 'delete', never dissolving it into the paragraph", async () => {
      const { editor } = await guardedEnvironment($init, answering("delete"));
      updateSelection(editor, first!, "first".length);

      await pressKey(editor, "Delete");
      await settle();

      expect(readTree(editor)).toEqual(["first", "second"]);
    });

    it("steps aside where protected structure blocks the delete outright", async () => {
      const handler = answering("delete");
      const { editor } = await guardedEnvironment($init, handler, {
        structureProtectionMode: "protected",
      });
      updateSelection(editor, second!, 0);

      const event = await pressKey(editor, "Backspace");
      await settle();

      expect(handler).not.toHaveBeenCalled();
      expect(event.defaultPrevented).toBe(true); // blocked by StructureKeyboardPlugin
      expect(readTree(editor)).toEqual(["first", "[sidebar: sidebar text]", "second"]);
    });

    it("removes only the sidebar for a line delete at the paragraph's start, never replaying it", async () => {
      const { editor } = await guardedEnvironment($init, answering("delete"));
      // Stands in for Lexical's native line delete, which jsdom cannot perform: a replay here would
      // merge the paragraphs.
      let isReplayed = false;
      editor.registerCommand(
        DELETE_LINE_COMMAND,
        () => {
          isReplayed = true;
          return true;
        },
        COMMAND_PRIORITY_LOW,
      );
      updateSelection(editor, second!, 0);

      await act(async () => {
        editor.dispatchCommand(DELETE_LINE_COMMAND, true);
      });
      await settle();

      expect(isReplayed).toBe(false);
      expect(readTree(editor)).toEqual(["first", "second"]);
    });

    it("asks ahead of the guarded two-step delete", async () => {
      const handler = answering("keep");
      const { editor } = await guardedEnvironment($init, handler, {
        structureProtectionMode: "guarded",
      });
      updateSelection(editor, second!, 0);

      await pressKey(editor, "Backspace");
      await settle();

      expect(handler).toHaveBeenCalledTimes(1);
      expect(readTree(editor)).toEqual(["first", "[sidebar: sidebar text]", "second"]);
    });
  });

  describe("a sidebar with no paragraph on its far side", () => {
    it("cancels on 'keep' rather than offering a skip with nowhere to go (backward)", async () => {
      let text: TextNode;
      const handler = answering("keep");
      const { editor } = await guardedEnvironment(() => {
        text = $createTextNode("text");
        $getRoot().append(
          $createImmutableChapterNode("1"),
          $createSidebarNode(),
          $createParaNode("p").append(text),
        );
      }, handler);
      updateSelection(editor, text!, 0);

      await pressKey(editor, "Backspace");
      await settle();

      expect(handler).toHaveBeenCalledWith(expect.objectContaining({ canSkip: false }));
      expect(readCaret(editor)).toEqual({ key: text!.getKey(), offset: 0, isCollapsed: true });
    });

    it("cancels on 'keep' rather than offering a skip with nowhere to go (forward)", async () => {
      let text: TextNode;
      const handler = answering("keep");
      const { editor } = await guardedEnvironment(() => {
        text = $createTextNode("text");
        $getRoot().append(
          $createParaNode("p").append(text),
          $createSidebarNode(),
          $createImmutableChapterNode("2"),
        );
      }, handler);
      updateSelection(editor, text!, "text".length);

      await pressKey(editor, "Delete");
      await settle();

      expect(handler).toHaveBeenCalledWith(expect.objectContaining({ canSkip: false }));
      expect(readCaret(editor)).toEqual({
        key: text!.getKey(),
        offset: "text".length,
        isCollapsed: true,
      });
    });
  });

  describe("a selection covering hidden content", () => {
    let before: TextNode;
    let after: TextNode;
    const $init = () => {
      before = $createTextNode("before");
      after = $createTextNode("after");
      $getRoot().append(
        $createParaNode("p").append(
          $createImmutableVerseNode("1"),
          before,
          $createFigureNode(),
          after,
        ),
      );
    };

    it("cancels a delete on 'keep'", async () => {
      const handler = answering("keep");
      const { editor } = await guardedEnvironment($init, handler);
      updateSelection(editor, before!, 3, after!, 2);

      const event = await pressThroughDom(editor, "Backspace");
      await settle();

      expect(event.defaultPrevented).toBe(true);
      expect(handler).toHaveBeenCalledWith({
        items: [{ tag: "figure", marker: "fig" }],
        action: "replaceSelection",
        canSkip: false,
      });
      expect(readTree(editor)).toEqual(["before[figure: caption]after"]);
    });

    it("deletes the selection, figure included, on 'delete'", async () => {
      const { editor } = await guardedEnvironment($init, answering("delete"));
      updateSelection(editor, before!, 3, after!, 2);

      await pressThroughDom(editor, "Backspace");
      await settle();

      expect(readTree(editor)).toEqual(["befter"]);
    });

    it("types text read from a live input event on 'delete'", async () => {
      const { editor } = await guardedEnvironment($init, answering("delete"));
      updateSelection(editor, before!, 3, after!, 2);

      await act(async () => {
        editor.dispatchCommand(
          CONTROLLED_TEXT_INSERTION_COMMAND,
          new InputEvent("beforeinput", { data: "Q", inputType: "insertReplacementText" }),
        );
      });
      await settle();

      expect(readTree(editor)).toEqual(["befQter"]);
    });

    it("refuses a cut over it under a copy limit, without asking", async () => {
      const handler = answering("delete");
      const { editor } = await guardedEnvironment($init, handler, { copyLimit: 1000 });
      updateSelection(editor, before!, 3, after!, 2);

      const cut = new ClipboardEvent("cut", { cancelable: true });
      let isRefused = false;
      await act(async () => {
        isRefused = editor.dispatchCommand(CUT_COMMAND, cut);
      });
      await settle();

      expect(isRefused).toBe(true);
      expect(cut.defaultPrevented).toBe(true);
      expect(handler).not.toHaveBeenCalled();
      expect(readTree(editor)).toEqual(["before[figure: caption]after"]);
    });

    it("asks before a paste over it, then pastes the copied clipboard on 'delete'", async () => {
      const handler = answering("delete");
      const { editor } = await guardedEnvironment($init, handler);
      updateSelection(editor, before!, 3, after!, 2);

      const paste = clipboardEvent("paste", "P");
      await act(async () => {
        editor.dispatchCommand(PASTE_COMMAND, paste);
      });
      await settle();

      expect(paste.defaultPrevented).toBe(true);
      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({ action: "replaceSelection", canSkip: false }),
      );
      expect(readTree(editor)).toEqual(["befPter"]);
    });

    it("replays a paste from the clipboard copied out while it was readable", async () => {
      // jsdom has no `DataTransfer`, and its `ClipboardEvent` drops `clipboardData` from its init.
      class TestDataTransfer {
        private readonly data = new Map<string, string>();
        readonly files: File[] = [];
        readonly items = { add: () => undefined };
        get types() {
          return [...this.data.keys()];
        }
        setData(type: string, value: string) {
          this.data.set(type, value);
        }
        getData(type: string) {
          return this.data.get(type) ?? "";
        }
        clearData() {
          this.data.clear();
        }
      }
      class TestClipboardEvent extends ClipboardEvent {
        constructor(type: string, init?: ClipboardEventInit) {
          super(type, init);
          Object.defineProperty(this, "clipboardData", { value: init?.clipboardData ?? null });
        }
      }
      vi.stubGlobal("DataTransfer", TestDataTransfer);
      vi.stubGlobal("ClipboardEvent", TestClipboardEvent);
      try {
        const { editor } = await guardedEnvironment($init, answering("delete"));
        updateSelection(editor, before!, 3, after!, 2);
        const clipboard = new TestDataTransfer();
        clipboard.setData("text/plain", "P");

        await act(async () => {
          editor.dispatchCommand(
            PASTE_COMMAND,
            new TestClipboardEvent("paste", {
              clipboardData: clipboard as unknown as DataTransfer,
              cancelable: true,
            }),
          );
        });
        // The browser empties a paste event's clipboard once its dispatch ends.
        clipboard.clearData();
        await settle();

        expect(readTree(editor)).toEqual(["befPter"]);
      } finally {
        vi.unstubAllGlobals();
      }
    });

    it("cancels a paste over it on 'keep'", async () => {
      const { editor } = await guardedEnvironment($init, answering("keep"));
      updateSelection(editor, before!, 3, after!, 2);

      await act(async () => {
        editor.dispatchCommand(PASTE_COMMAND, clipboardEvent("paste", "P"));
      });
      await settle();

      expect(readTree(editor)).toEqual(["before[figure: caption]after"]);
    });

    it("refuses a second paste while the question is open", async () => {
      const { handler, answer } = answeringLater();
      const { editor } = await guardedEnvironment($init, handler);
      updateSelection(editor, before!, 3, after!, 2);

      await act(async () => {
        editor.dispatchCommand(PASTE_COMMAND, clipboardEvent("paste", "P"));
      });
      const second = clipboardEvent("paste", "Q");
      let isRefused = false;
      await act(async () => {
        isRefused = editor.dispatchCommand(PASTE_COMMAND, second);
      });
      await act(async () => answer("keep"));
      await settle();

      expect(isRefused).toBe(true);
      expect(second.defaultPrevented).toBe(true);
      expect(handler).toHaveBeenCalledTimes(1);
      expect(readTree(editor)).toEqual(["before[figure: caption]after"]);
    });

    it("asks before a cut over it, then removes the selection on 'delete'", async () => {
      const handler = answering("delete");
      const { editor } = await guardedEnvironment($init, handler);
      updateSelection(editor, before!, 3, after!, 2);

      const cut = clipboardEvent("cut");
      await act(async () => {
        editor.dispatchCommand(CUT_COMMAND, cut);
      });
      await settle();

      expect(cut.defaultPrevented).toBe(true);
      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({ action: "replaceSelection", canSkip: false }),
      );
      expect(readTree(editor)).toEqual(["befter"]);
    });

    it("leaves the document intact after a cut over it on 'keep'", async () => {
      const { editor } = await guardedEnvironment($init, answering("keep"));
      updateSelection(editor, before!, 3, after!, 2);

      await act(async () => {
        editor.dispatchCommand(CUT_COMMAND, clipboardEvent("cut"));
      });
      await settle();

      expect(readTree(editor)).toEqual(["before[figure: caption]after"]);
    });

    it("refuses to start dragging it, and refuses its removal by a drag-move", async () => {
      const handler = answering("delete");
      const { editor } = await guardedEnvironment($init, handler);
      updateSelection(editor, before!, 3, after!, 2);

      const dragStart = new DragEvent("dragstart", { cancelable: true });
      let isDragRefused = false;
      let isRemovalRefused = false;
      await act(async () => {
        isDragRefused = editor.dispatchCommand(DRAGSTART_COMMAND, dragStart);
        isRemovalRefused = editor.dispatchCommand(REMOVE_TEXT_COMMAND, null);
      });

      expect(isDragRefused).toBe(true);
      expect(dragStart.defaultPrevented).toBe(true);
      expect(isRemovalRefused).toBe(true);
      expect(handler).not.toHaveBeenCalled();
      expect(readTree(editor)).toEqual(["before[figure: caption]after"]);
    });

    it("asks before typing over it, then types on 'delete'", async () => {
      const handler = answering("delete");
      const { editor } = await guardedEnvironment($init, handler);
      updateSelection(editor, before!, 3, after!, 2);

      await act(async () => {
        editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "X");
      });
      await settle();

      expect(handler).toHaveBeenCalledTimes(1);
      expect(readTree(editor)).toEqual(["befXter"]);
    });

    it("writes the clipboard for a cut over it, whatever the answer", async () => {
      for (const decision of ["delete", "keep"] as const) {
        const { editor } = await guardedEnvironment($init, answering(decision));
        updateSelection(editor, before!, 3, after!, 2);

        const cut = clipboardEvent("cut");
        await act(async () => {
          editor.dispatchCommand(CUT_COMMAND, cut);
        });
        await settle();

        expect(cut.clipboardData?.setData).toHaveBeenCalledWith("text/plain", expect.any(String));
      }
    });

    it("leaves a cut of visible text alone under a copy limit", async () => {
      const handler = answering("delete");
      const { editor } = await guardedEnvironment($init, handler, { copyLimit: 1000 });
      // Stands in for the handlers that perform a cut, to see that this one reaches them.
      let isCutPerformed = false;
      editor.registerCommand(
        CUT_COMMAND,
        () => {
          isCutPerformed = true;
          return true;
        },
        COMMAND_PRIORITY_LOW,
      );
      updateSelection(editor, before!, 1, before!, 4);

      const cut = clipboardEvent("cut");
      await act(async () => {
        editor.dispatchCommand(CUT_COMMAND, cut);
      });

      expect(handler).not.toHaveBeenCalled();
      expect(cut.defaultPrevented).toBe(false);
      expect(isCutPerformed).toBe(true);
    });

    it("asks before Enter over it, cancels on 'keep', and splits on 'delete'", async () => {
      const keeping = answering("keep");
      const kept = await guardedEnvironment($init, keeping);
      updateSelection(kept.editor, before!, 3, after!, 2);
      await act(async () => {
        kept.editor.dispatchCommand(INSERT_PARAGRAPH_COMMAND, undefined);
      });
      await settle();

      expect(keeping).toHaveBeenCalledWith(
        expect.objectContaining({ action: "replaceSelection", canSkip: false }),
      );
      expect(readTree(kept.editor)).toEqual(["before[figure: caption]after"]);

      const deleted = await guardedEnvironment($init, answering("delete"));
      updateSelection(deleted.editor, before!, 3, after!, 2);
      await act(async () => {
        deleted.editor.dispatchCommand(INSERT_PARAGRAPH_COMMAND, undefined);
      });
      await settle();

      expect(readTree(deleted.editor)).toEqual(["bef", "ter"]);
    });

    it("removes the selection, inserting nothing, for an IME composition's opening placeholder", async () => {
      const { editor } = await guardedEnvironment($init, answering("delete"));
      updateSelection(editor, before!, 3, after!, 2);
      const isComposing = vi.spyOn(editor, "isComposing").mockReturnValue(true);

      await act(async () => {
        // Lexical's composition placeholder outside Firefox and WebKit: a zero-width space.
        editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "\u200b");
      });
      isComposing.mockRestore();
      await settle();

      expect(readTree(editor)).toEqual(["befter"]);
    });

    it("asks on the first press under guarded structure when the selection holds no verse marker", async () => {
      const handler = answering("keep");
      const { editor } = await guardedEnvironment($init, handler, {
        structureProtectionMode: "guarded",
      });
      updateSelection(editor, before!, 3, after!, 2);

      await pressThroughDom(editor, "Backspace");
      await settle();

      expect(handler).toHaveBeenCalledTimes(1);
    });

    it("leaves a guarded selection delete armed one way and pressed the other way to cancel", async () => {
      let verseText: TextNode;
      const handler = answering("delete");
      const { editor } = await guardedEnvironment(
        () => {
          verseText = $createTextNode("text");
          $init();
          $getRoot().append($createParaNode("p").append($createImmutableVerseNode("2"), verseText));
        },
        handler,
        { structureProtectionMode: "guarded" },
      );
      updateSelection(editor, before!, 3, verseText!, 2);

      await pressKey(editor, "Backspace", 0);
      await settle();
      const cancelling = await pressKey(editor, "Delete", 0);
      await settle();

      expect(cancelling.defaultPrevented).toBe(true); // cancelled by StructureKeyboardPlugin
      expect(handler).not.toHaveBeenCalled();
      expect(readTree(editor)).toEqual(["before[figure: caption]after", "text"]);
    });

    it("lets the guarded two-step delete of a selection holding a verse arm, and asks on the press that fires", async () => {
      let verseText: TextNode;
      const handler = answering("delete");
      const { editor } = await guardedEnvironment(
        () => {
          verseText = $createTextNode("text");
          $init();
          $getRoot().append($createParaNode("p").append($createImmutableVerseNode("2"), verseText));
        },
        handler,
        { structureProtectionMode: "guarded" },
      );
      updateSelection(editor, before!, 3, verseText!, 2);

      const arming = await pressKey(editor, "Backspace", 0);
      await settle();

      expect(arming.defaultPrevented).toBe(true); // armed by StructureKeyboardPlugin
      expect(editor.getRootElement()?.classList.contains("verse-delete-armed")).toBe(true);
      expect(handler).not.toHaveBeenCalled();
      expect(readTree(editor)).toEqual(["before[figure: caption]after", "text"]);

      await pressKey(editor, "Backspace", 0);
      await settle();

      expect(handler).toHaveBeenCalledTimes(1);
      expect(readTree(editor)).toEqual(["befxt"]);
    });
  });

  it("steps aside where protected structure refuses typing over a selection outright", async () => {
    let first: TextNode;
    let second: TextNode;
    const handler = answering("delete");
    const { editor } = await guardedEnvironment(
      () => {
        first = $createTextNode("first");
        second = $createTextNode("second");
        $getRoot().append(
          $createParaNode("p").append(first, $createFigureNode()),
          $createParaNode("p").append(second),
        );
      },
      handler,
      { structureProtectionMode: "protected" },
    );
    updateSelection(editor, first!, 2, second!, 2);

    await act(async () => {
      editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "X");
    });
    await settle();

    expect(handler).not.toHaveBeenCalled();
    expect(readTree(editor)).toEqual(["first[figure: caption]", "second"]);
  });

  describe("a line delete", () => {
    it("asks when hidden content lies anywhere toward the line's start", async () => {
      let end: TextNode;
      const handler = answering("keep");
      const { editor } = await guardedEnvironment(() => {
        end = $createTextNode(" b end");
        $getRoot().append(
          $createParaNode("p").append($createTextNode("a "), $createFigureNode(), end),
        );
      }, handler);
      updateSelection(editor, end!, " b end".length);

      await act(async () => {
        editor.dispatchCommand(DELETE_LINE_COMMAND, true);
      });
      await settle();

      expect(handler).toHaveBeenCalledWith({
        items: [{ tag: "figure", marker: "fig" }],
        action: "deleteBackward",
        canSkip: false,
      });
      expect(readTree(editor)).toEqual(["a [figure: caption] b end"]);
    });

    it("names everything on the line, not just the figure at the caret, and cancels on 'keep'", async () => {
      let end: TextNode;
      const handler = answering("keep");
      const { editor } = await guardedEnvironment(() => {
        end = $createTextNode("end");
        $getRoot().append(
          $createParaNode("p").append(
            $createTextNode("a "),
            $createFigureNode("one"),
            $createTextNode(" b"),
            $createFigureNode("two"),
            end,
          ),
        );
      }, handler);
      updateSelection(editor, end!, 0);

      await act(async () => {
        editor.dispatchCommand(DELETE_LINE_COMMAND, true);
      });
      await settle();

      expect(handler).toHaveBeenCalledWith({
        items: [
          { tag: "figure", marker: "fig" },
          { tag: "figure", marker: "fig" },
        ],
        action: "deleteBackward",
        canSkip: false,
      });
      // Cancelled, not skipped: a skip past the figure at the caret would leave the line delete's
      // next press free to take the other one.
      expect(readCaret(editor)).toEqual({ key: end!.getKey(), offset: 0, isCollapsed: true });
      expect(readTree(editor)).toEqual(["a [figure: one] b[figure: two]end"]);
    });
  });

  describe("a guarded paragraph merge next to hidden content", () => {
    let firstPara: ParaNode;
    let first: TextNode;
    let second: TextNode;
    const $init = () => {
      firstPara = $createParaNode("p");
      first = $createTextNode("first");
      second = $createTextNode("second");
      $getRoot().append(
        firstPara.append(first),
        $createParaNode("p").append(second, $createFigureNode(), $createTextNode(" more")),
      );
    };

    it("merges on the second Backspace, figure kept, and never asks", async () => {
      const handler = answering("delete");
      const { editor } = await guardedEnvironment($init, handler, {
        structureProtectionMode: "guarded",
      });
      updateSelection(editor, second!, 0);

      await pressKey(editor, "Backspace");
      await settle();
      await pressKey(editor, "Backspace");
      await settle();

      expect(handler).not.toHaveBeenCalled();
      expect(readTree(editor)).toEqual(["firstsecond[figure: caption] more"]);
    });

    it("merges on the second Delete at the paragraph before's end, and never asks", async () => {
      const handler = answering("delete");
      const { editor } = await guardedEnvironment($init, handler, {
        structureProtectionMode: "guarded",
      });
      updateSelection(editor, first!, "first".length);

      await pressKey(editor, "Delete");
      await settle();
      await pressKey(editor, "Delete");
      await settle();

      expect(handler).not.toHaveBeenCalled();
      expect(readTree(editor)).toEqual(["firstsecond[figure: caption] more"]);
    });
  });

  describe("a guarded selection delete", () => {
    let before: TextNode;
    let verseText: TextNode;
    const $init = () => {
      before = $createTextNode("before");
      verseText = $createTextNode("text");
      $getRoot().append(
        $createParaNode("p").append(before, $createFigureNode(), $createTextNode("after")),
        $createParaNode("p").append($createImmutableVerseNode("2"), verseText),
      );
    };

    it("clears the armed delete, and its hint, on 'keep'", async () => {
      const handler = answering("keep");
      const { editor } = await guardedEnvironment($init, handler, {
        structureProtectionMode: "guarded",
      });
      updateSelection(editor, before!, 3, verseText!, 2);

      await pressKey(editor, "Backspace", 0);
      await pressKey(editor, "Backspace", 0);
      await settle();

      expect(handler).toHaveBeenCalledTimes(1);
      expect(editor.getRootElement()?.classList.contains("verse-delete-armed")).toBe(false);
      expect(readTree(editor)).toEqual(["before[figure: caption]after", "text"]);
    });

    it("asks before Shift+Delete, a forward delete to StructureKeyboardPlugin, fires", async () => {
      const handler = answering("keep");
      const { editor } = await guardedEnvironment($init, handler, {
        structureProtectionMode: "guarded",
      });
      updateSelection(editor, before!, 3, verseText!, 2);

      await pressChord(editor, "Delete", { shiftKey: true });
      await settle();
      await pressChord(editor, "Delete", { shiftKey: true });
      await settle();

      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({ action: "replaceSelection", canSkip: false }),
      );
      expect(readTree(editor)).toEqual(["before[figure: caption]after", "text"]);
    });
  });

  describe("a word or line delete measured by the browser", () => {
    it("removes only the figure for a line delete already at the line's start, never merging", async () => {
      let second: TextNode;
      const { editor } = await guardedEnvironment(() => {
        second = $createTextNode("second");
        $getRoot().append(
          $createParaNode("p").append($createTextNode("first")),
          $createSidebarNode(),
          $createParaNode("p").append($createFigureNode(), second),
        );
      }, answering("delete"));
      updateSelection(editor, second!, 0);
      // The figure is hidden, so the caret is already at the visual line's start: the extension
      // moves nothing.
      const restore = stubSelectionModify(editor, () => undefined);

      try {
        await act(async () => {
          editor.dispatchCommand(DELETE_LINE_COMMAND, true);
        });
        await settle();
      } finally {
        restore();
      }

      expect(readTree(editor)).toEqual(["first", "[sidebar: sidebar text]", "second"]);
    });

    it("stops a word delete at the paragraph's edge, taking only the figure there", async () => {
      let first: TextNode;
      let second: TextNode;
      const handler = answering("delete");
      const { editor } = await guardedEnvironment(
        () => {
          first = $createTextNode("first");
          second = $createTextNode("second");
          $getRoot().append(
            $createParaNode("p").append(first),
            $createParaNode("p").append($createFigureNode(), second),
          );
        },
        handler,
        { structureProtectionMode: "protected" },
      );
      updateSelection(editor, second!, 0);
      // The browser's word extent crosses the hidden figure into the paragraph before.
      const restore = stubSelectionModify(editor, (probe) =>
        probe.focus.set(first.getKey(), 0, "text"),
      );

      try {
        await act(async () => {
          editor.dispatchCommand(DELETE_WORD_COMMAND, true);
        });
        await settle();
      } finally {
        restore();
      }

      expect(handler).toHaveBeenCalledWith(expect.objectContaining({ canSkip: true }));
      expect(readTree(editor)).toEqual(["first", "second"]);
    });

    it("names hidden content the measured extent reaches beyond the caret's run", async () => {
      let start: TextNode;
      let end: TextNode;
      const handler = answering("keep");
      const { editor } = await guardedEnvironment(() => {
        start = $createTextNode("start ");
        end = $createTextNode(" end");
        $getRoot().append($createParaNode("p").append(start, $createFigureNode(), end));
      }, handler);
      updateSelection(editor, end!, " end".length);
      const restore = stubSelectionModify(editor, (probe) =>
        probe.focus.set(start.getKey(), 0, "text"),
      );

      try {
        await act(async () => {
          editor.dispatchCommand(DELETE_LINE_COMMAND, true);
        });
        await settle();
      } finally {
        restore();
      }

      expect(handler).toHaveBeenCalledWith({
        items: [{ tag: "figure", marker: "fig" }],
        action: "deleteBackward",
        canSkip: false,
      });
      expect(readTree(editor)).toEqual(["start [figure: caption] end"]);
    });
  });

  describe("command-level edits", () => {
    let before: TextNode;
    let after: TextNode;
    const $init = () => {
      before = $createTextNode("before");
      after = $createTextNode("after");
      $getRoot().append($createParaNode("p").append(before, $createFigureNode(), after));
    };

    it("refuses every edit command while a question is open", async () => {
      const { handler, answer } = answeringLater();
      const { editor } = await guardedEnvironment($init, handler);
      updateSelection(editor, after!, 0);
      await pressKey(editor, "Backspace");
      updateSelection(editor, after!, 3);

      const refusals: boolean[] = [];
      await act(async () => {
        refusals.push(
          editor.dispatchCommand(DELETE_CHARACTER_COMMAND, true),
          editor.dispatchCommand(DELETE_WORD_COMMAND, true),
          editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "x"),
          editor.dispatchCommand(INSERT_PARAGRAPH_COMMAND, undefined),
          editor.dispatchCommand(INSERT_LINE_BREAK_COMMAND, false),
          editor.dispatchCommand(CUT_COMMAND, clipboardEvent("cut")),
        );
      });
      await act(async () => answer("keep"));
      await settle();

      expect(refusals).toEqual([true, true, true, true, true, true]);
      expect(readTree(editor)).toEqual(["before[figure: caption]after"]);
    });

    it("asks before a delete command over a selection protected structure does not refuse there", async () => {
      let first: TextNode;
      let second: TextNode;
      const handler = answering("keep");
      const { editor } = await guardedEnvironment(
        () => {
          first = $createTextNode("first");
          second = $createTextNode("second");
          $getRoot().append(
            $createParaNode("p").append(first, $createFigureNode()),
            $createParaNode("p").append(second),
          );
        },
        handler,
        { structureProtectionMode: "protected" },
      );
      updateSelection(editor, first!, 2, second!, 2);

      await act(async () => {
        editor.dispatchCommand(DELETE_CHARACTER_COMMAND, true);
        editor.dispatchCommand(INSERT_LINE_BREAK_COMMAND, false);
      });
      await settle();

      expect(handler).toHaveBeenCalledTimes(1);
      expect(readTree(editor)).toEqual(["first[figure: caption]", "second"]);
    });

    it("does not ask about a cut in a read-only editor", async () => {
      const handler = answering("delete");
      const { editor } = await guardedEnvironment($init, handler);
      updateSelection(editor, before!, 3, after!, 2);
      await act(async () => editor.setEditable(false));

      await act(async () => {
        editor.dispatchCommand(CUT_COMMAND, clipboardEvent("cut"));
      });
      await settle();

      expect(handler).not.toHaveBeenCalled();
    });

    it("does not ask about a paste the command menu refuses, or one of files alone", async () => {
      const handler = answering("delete");
      const { editor } = await guardedEnvironment($init, handler);
      updateSelection(editor, before!, 3, after!, 2);
      const filesOnly = clipboardEvent("paste");
      Object.defineProperty(filesOnly.clipboardData, "types", { value: ["Files"] });

      await act(async () => {
        editor.dispatchCommand(PASTE_COMMAND, clipboardEvent("paste", "and/or"));
        editor.dispatchCommand(PASTE_COMMAND, filesOnly);
      });
      await settle();

      expect(handler).not.toHaveBeenCalled();
    });

    it("drops a selection edit when a verse marker was added inside the selection while asking", async () => {
      const { handler, answer } = answeringLater();
      const { editor } = await guardedEnvironment($init, handler);
      updateSelection(editor, before!, 3, after!, 2);

      await act(async () => {
        editor.dispatchCommand(DELETE_CHARACTER_COMMAND, true);
      });
      await sutUpdate(editor, () => {
        after.getWritable().insertBefore($createImmutableVerseNode("2"));
      });
      await act(async () => answer("delete"));
      await settle();

      expect(readTree(editor)).toEqual(["before[figure: caption]after"]);
    });
  });

  it("asks before Delete at the end of an expanded note leaves it into a hidden sidebar", async () => {
    let noteText: TextNode;
    const handler = answering("keep");
    const { editor } = await guardedEnvironment(() => {
      noteText = $createTextNode("note text");
      $getRoot().append(
        $createParaNode("p").append(
          $createTextNode("text"),
          $createNoteNode("f", "+").append($createTextNode("+ ").setMode("token"), noteText),
        ),
        $createSidebarNode(),
        $createParaNode("p").append($createTextNode("next")),
      );
    }, handler);
    updateSelection(editor, noteText!, "note text".length);

    await pressKey(editor, "Delete");
    await settle();

    expect(handler).toHaveBeenCalledWith(
      expect.objectContaining({ items: [{ tag: "sidebar", marker: "esb" }] }),
    );
  });
});
