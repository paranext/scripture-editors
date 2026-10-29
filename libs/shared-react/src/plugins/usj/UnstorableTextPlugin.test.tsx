// Should only be used on nodes that are initialized in the test environment.
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { baseTestEnvironment, updateSelection } from "./react-test.utils";
import { StructureKeyboardPlugin } from "./StructureKeyboardPlugin";
import { StructureProtectionMode } from "./structure-protection.model";
import { UnstorableTextRemovedHandler } from "./unstorable-text.model";
import { $filterUnstorablePastedNodes, UnstorableTextPlugin } from "./UnstorableTextPlugin";
import { act } from "@testing-library/react";
import {
  $createTextNode,
  $getRoot,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  DROP_COMMAND,
  KEY_DOWN_COMMAND,
  LexicalEditor,
  LexicalNode,
  PASTE_COMMAND,
  RangeSelection,
  TextNode,
} from "lexical";
import { $createParaNode, $isImmutableUnmatchedNode } from "shared";

interface Flavors {
  [type: string]: string | undefined;
}

/** A stand-in for a clipboard's or drop's data: jsdom has no `DataTransfer`. */
function transfer(flavors: Flavors): DataTransfer {
  return {
    types: Object.keys(flavors),
    files: [],
    getData: (type: string) => flavors[type] ?? "",
  } as unknown as DataTransfer;
}

function pasteEvent(flavors: Flavors): ClipboardEvent {
  return { clipboardData: transfer(flavors), preventDefault: vi.fn() } as unknown as ClipboardEvent;
}

/** What Lexical's `beforeinput` handler dispatches for a drop that is not files. */
function dropInputEvent(flavors: Flavors): InputEvent {
  return {
    inputType: "insertFromDrop",
    dataTransfer: transfer(flavors),
    preventDefault: vi.fn(),
  } as unknown as InputEvent;
}

function dropEvent(flavors: Flavors): DragEvent {
  return { dataTransfer: transfer(flavors), preventDefault: vi.fn() } as unknown as DragEvent;
}

/** A node copy as Lexical writes it to the clipboard. */
function lexicalFlavor(nodes: unknown[], namespace = "TestEditor"): string {
  return JSON.stringify({ namespace, nodes });
}

function serializedText(text: string) {
  return { type: "text", version: 1, text, detail: 0, format: 0, mode: "normal", style: "" };
}

function spyLogger() {
  return { error: vi.fn(), warn: vi.fn(), info: vi.fn(), debug: vi.fn() };
}

/** Each top-level block's text. */
function readParas(editor: LexicalEditor): string[] {
  return editor.getEditorState().read(() =>
    $getRoot()
      .getChildren()
      .map((block) => block.getTextContent()),
  );
}

async function dispatch(editor: LexicalEditor, $dispatch: () => boolean): Promise<boolean> {
  let isClaimed = false;
  await act(async () => {
    editor.update(() => {
      isClaimed = $dispatch();
    });
  });
  return isClaimed;
}

/**
 * One paragraph holding `text`, the caret (or a selection) in it, and `UnstorableTextPlugin`
 * mounted. `withStructureKeyboard` also mounts `StructureKeyboardPlugin` the way a hidden-marker
 * view does, its html sanitizer filtered by `$filterUnstorablePastedNodes`; pass `"unfiltered"` to
 * leave its filter out.
 */
async function environment(
  text: string,
  {
    anchor = text.length,
    focus = anchor,
    structureProtectionMode = "off",
    withStructureKeyboard,
  }: {
    anchor?: number;
    focus?: number;
    structureProtectionMode?: StructureProtectionMode;
    withStructureKeyboard?: "filtered" | "unfiltered";
  } = {},
) {
  const onRemoved = vi.fn<UnstorableTextRemovedHandler>();
  const logger = spyLogger();
  const $filterPastedNodes = (
    nodes: LexicalNode[],
    selection: RangeSelection,
    source: "paste" | "drop",
  ) => {
    $filterUnstorablePastedNodes(nodes, selection, source, onRemoved, logger);
  };
  let textNode: TextNode;
  const { editor } = await baseTestEnvironment(
    () => {
      textNode = $createTextNode(text);
      $getRoot().append($createParaNode("p").append(textNode));
    },
    <>
      {withStructureKeyboard && (
        <StructureKeyboardPlugin
          structureProtectionMode={structureProtectionMode}
          $filterPastedNodes={withStructureKeyboard === "filtered" ? $filterPastedNodes : undefined}
        />
      )}
      <UnstorableTextPlugin
        structureProtectionMode={structureProtectionMode}
        onRemoved={onRemoved}
        logger={logger}
      />
    </>,
  );
  updateSelection(editor, textNode!, anchor, textNode!, focus);
  return { editor, onRemoved, logger };
}

describe("UnstorableTextPlugin — paste", () => {
  it("pastes plain text with a lone slash as it is, telling no one", async () => {
    const { editor, onRemoved } = await environment("x ");

    await dispatch(editor, () =>
      editor.dispatchCommand(PASTE_COMMAND, pasteEvent({ "text/plain": "and/or" })),
    );

    expect(readParas(editor)).toEqual(["x and/or"]);
    expect(onRemoved).not.toHaveBeenCalled();
  });

  it("pastes plain text without its `//`, and says so once", async () => {
    const { editor, onRemoved, logger } = await environment("see ");
    const event = pasteEvent({ "text/plain": "https://example.org" });

    const isClaimed = await dispatch(editor, () => editor.dispatchCommand(PASTE_COMMAND, event));

    expect(isClaimed).toBe(true);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(readParas(editor)).toEqual(["see https:example.org"]);
    expect(onRemoved).toHaveBeenCalledTimes(1);
    expect(onRemoved).toHaveBeenCalledWith({ source: "paste", removed: ["//"] });
    expect(logger.info).toHaveBeenCalledTimes(1);
  });

  it("drops a pasted slash that would touch the document's slash", async () => {
    const { editor, onRemoved } = await environment("a/");

    await dispatch(editor, () =>
      editor.dispatchCommand(PASTE_COMMAND, pasteEvent({ "text/plain": "/b" })),
    );

    expect(readParas(editor)).toEqual(["a/b"]);
    expect(onRemoved).toHaveBeenCalledWith({ source: "paste", removed: ["//"] });
  });

  it("pastes html without its `\\`", async () => {
    const { editor, onRemoved } = await environment("x");

    await dispatch(editor, () =>
      editor.dispatchCommand(
        PASTE_COMMAND,
        pasteEvent({ "text/html": "<p>a \\v 9 b</p>", "text/plain": "a \\v 9 b" }),
      ),
    );

    expect(readParas(editor).join("|")).toContain("xa v 9 b");
    expect(readParas(editor).join("")).not.toContain("\\");
    expect(onRemoved).toHaveBeenCalledTimes(1);
    expect(onRemoved).toHaveBeenCalledWith({ source: "paste", removed: ["\\"] });
  });

  it("pastes a node copy without its `\\`, keeping an unmatched marker's glyph", async () => {
    const { editor, onRemoved } = await environment("x");

    await dispatch(editor, () =>
      editor.dispatchCommand(
        PASTE_COMMAND,
        pasteEvent({
          "application/x-lexical-editor": lexicalFlavor([
            serializedText("a\\b "),
            { type: "unmatched", version: 2, marker: "*" },
          ]),
          "text/plain": "a\\b \\*",
        }),
      ),
    );

    expect(readParas(editor)).toEqual(["xab \\*"]);
    const hasUnmatched = editor
      .getEditorState()
      .read(() => $getRoot().getAllTextNodes().some($isImmutableUnmatchedNode));
    expect(hasUnmatched).toBe(true);
    expect(onRemoved).toHaveBeenCalledWith({ source: "paste", removed: ["\\"] });
  });

  it("pastes a node copy from another editor's namespace as its plain text, filtered", async () => {
    const { editor, onRemoved } = await environment("x");

    await dispatch(editor, () =>
      editor.dispatchCommand(
        PASTE_COMMAND,
        pasteEvent({
          "application/x-lexical-editor": lexicalFlavor([serializedText("a\\b")], "Other"),
          "text/plain": "a\\b",
        }),
      ),
    );

    expect(readParas(editor)).toEqual(["xab"]);
    expect(onRemoved).toHaveBeenCalledTimes(1);
  });

  it.each([
    ["plain text", { "text/plain": "\\\\" }],
    ["html", { "text/html": "<span>\\\\//</span>", "text/plain": "\\\\//" }],
  ])(
    "changes nothing for a paste of nothing but unstorable %s over a selection",
    async (_, flavors) => {
      const { editor, onRemoved } = await environment("keep this", { anchor: 0, focus: 4 });

      let isClaimed = false;
      await act(async () => {
        isClaimed = editor.dispatchCommand(PASTE_COMMAND, pasteEvent(flavors));
      });

      expect(isClaimed).toBe(true);
      expect(readParas(editor)).toEqual(["keep this"]);
      expect(onRemoved).toHaveBeenCalledTimes(1);
    },
  );

  it.each<StructureProtectionMode>(["off", "guarded"])(
    "makes each line of a plain-text paste a paragraph when structure is %s",
    async (structureProtectionMode) => {
      const { editor, onRemoved } = await environment("ab", {
        anchor: 1,
        structureProtectionMode,
        withStructureKeyboard: "filtered",
      });

      await dispatch(editor, () =>
        editor.dispatchCommand(PASTE_COMMAND, pasteEvent({ "text/plain": "line one\nline two" })),
      );

      expect(readParas(editor)).toEqual(["aline one", "line twob"]);
      expect(onRemoved).not.toHaveBeenCalled();
    },
  );

  it.each([
    ["a blank line", "a\n\nb", "[a b]"],
    ["Windows line breaks and a trailing one", "line one\r\nline two\n", "[line one line two]"],
    ["a tab alongside a line break", "a\tb\nc", "[a b c]"],
  ])(
    "joins the lines of a plain-text paste with one space when structure is protected: %s",
    async (_, text, expected) => {
      const { editor, onRemoved } = await environment("[]", {
        anchor: 1,
        structureProtectionMode: "protected",
        withStructureKeyboard: "filtered",
      });

      await dispatch(editor, () =>
        editor.dispatchCommand(PASTE_COMMAND, pasteEvent({ "text/plain": text })),
      );

      expect(readParas(editor)).toEqual([expected]);
      expect(onRemoved).not.toHaveBeenCalled();
    },
  );

  it.each([
    ["a bold run of nothing but `\\`", "<p>a<b>\\\\</b></p>", "a\\\\", "xa"],
    ["a second paragraph of nothing but `//`", "<p>y</p><p>//</p>", "y\n//", "xy "],
  ])(
    "leaves out text the filter empties from a protected html paste: %s",
    async (_, html, plain, expected) => {
      const { editor, onRemoved } = await environment("x", {
        structureProtectionMode: "protected",
        withStructureKeyboard: "filtered",
      });

      await dispatch(editor, () =>
        editor.dispatchCommand(
          PASTE_COMMAND,
          pasteEvent({ "text/html": html, "text/plain": plain }),
        ),
      );

      expect(readParas(editor)).toEqual([expected]);
      expect(onRemoved).toHaveBeenCalledTimes(1);
    },
  );

  it("changes nothing for a protected html paste of a character span holding only `\\` over a selection", async () => {
    const { editor, onRemoved } = await environment("keep this", {
      anchor: 0,
      focus: 4,
      structureProtectionMode: "protected",
      withStructureKeyboard: "filtered",
    });

    await dispatch(editor, () =>
      editor.dispatchCommand(
        PASTE_COMMAND,
        pasteEvent({
          "text/html": '<p><span data-marker="w" class="char">\\\\</span></p>',
          "text/plain": "\\\\",
        }),
      ),
    );

    expect(readParas(editor)).toEqual(["keep this"]);
    expect(onRemoved).toHaveBeenCalledTimes(1);
  });

  it("filters a protected html paste the sanitizer inserts, through its filter", async () => {
    const { editor, onRemoved } = await environment("x", {
      structureProtectionMode: "protected",
      withStructureKeyboard: "filtered",
    });

    await dispatch(editor, () =>
      editor.dispatchCommand(
        PASTE_COMMAND,
        pasteEvent({ "text/html": "<p>a \\v 9 b</p>", "text/plain": "a \\v 9 b" }),
      ),
    );

    expect(readParas(editor)).toEqual(["xa v 9 b"]);
    expect(onRemoved).toHaveBeenCalledTimes(1);
    expect(onRemoved).toHaveBeenCalledWith({ source: "paste", removed: ["\\"] });
  });

  it("leaves a protected html paste alone when the sanitizer has no filter", async () => {
    const { editor, onRemoved } = await environment("x", {
      structureProtectionMode: "protected",
      withStructureKeyboard: "unfiltered",
    });

    await dispatch(editor, () =>
      editor.dispatchCommand(
        PASTE_COMMAND,
        pasteEvent({ "text/html": "<p>a \\v 9 b</p>", "text/plain": "a \\v 9 b" }),
      ),
    );

    expect(readParas(editor)).toEqual(["xa \\v 9 b"]);
    expect(onRemoved).not.toHaveBeenCalled();
  });

  it("changes nothing for a protected html paste of nothing but unstorable text over a selection", async () => {
    const { editor, onRemoved } = await environment("keep this", {
      anchor: 0,
      focus: 4,
      structureProtectionMode: "protected",
      withStructureKeyboard: "filtered",
    });

    await dispatch(editor, () =>
      editor.dispatchCommand(
        PASTE_COMMAND,
        pasteEvent({ "text/html": "<span>\\\\</span>", "text/plain": "\\\\" }),
      ),
    );

    expect(readParas(editor)).toEqual(["keep this"]);
    expect(onRemoved).toHaveBeenCalledTimes(1);
  });
});

describe("UnstorableTextPlugin — drop", () => {
  it("drops plain text without its `\\`, and says it was a drop", async () => {
    const { editor, onRemoved } = await environment("x");
    const event = dropInputEvent({ "text/plain": "a\\b" });

    const isClaimed = await dispatch(editor, () =>
      editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, event),
    );

    expect(isClaimed).toBe(true);
    expect(readParas(editor)).toEqual(["xab"]);
    expect(onRemoved).toHaveBeenCalledTimes(1);
    expect(onRemoved).toHaveBeenCalledWith({ source: "drop", removed: ["\\"] });
  });

  it("drops html without its `\\`, says it was a drop, and then a paste is a paste again", async () => {
    const { editor, onRemoved } = await environment("x");

    await dispatch(editor, () =>
      editor.dispatchCommand(
        CONTROLLED_TEXT_INSERTION_COMMAND,
        dropInputEvent({ "text/html": "<span>a\\b</span>", "text/plain": "a\\b" }),
      ),
    );
    await dispatch(editor, () =>
      editor.dispatchCommand(
        PASTE_COMMAND,
        pasteEvent({ "text/html": "<span>c\\d</span>", "text/plain": "c\\d" }),
      ),
    );

    expect(readParas(editor)).toEqual(["xabcd"]);
    expect(onRemoved.mock.calls).toEqual([
      [{ source: "drop", removed: ["\\"] }],
      [{ source: "paste", removed: ["\\"] }],
    ]);
  });

  it("joins the lines of a plain-text drop with a space when structure is protected", async () => {
    const { editor } = await environment("ab", {
      anchor: 1,
      structureProtectionMode: "protected",
      withStructureKeyboard: "filtered",
    });

    await dispatch(editor, () =>
      editor.dispatchCommand(
        CONTROLLED_TEXT_INSERTION_COMMAND,
        dropInputEvent({ "text/plain": "one\ntwo" }),
      ),
    );

    expect(readParas(editor)).toEqual(["aone twob"]);
  });

  it("filters a protected html drop the sanitizer inserts, and says it was a drop", async () => {
    const { editor, onRemoved } = await environment("x", {
      structureProtectionMode: "protected",
      withStructureKeyboard: "filtered",
    });

    await dispatch(editor, () =>
      editor.dispatchCommand(
        DROP_COMMAND,
        dropEvent({ "text/html": "<span>a\\b</span>", "text/plain": "a\\b" }),
      ),
    );

    expect(readParas(editor)).toEqual(["xab"]);
    expect(onRemoved).toHaveBeenCalledWith({ source: "drop", removed: ["\\"] });
  });
});

describe("UnstorableTextPlugin — typing", () => {
  it("refuses a typed `\\`, says it was typing, and logs it", async () => {
    const { editor, onRemoved, logger } = await environment("x");

    const isClaimed = await dispatch(editor, () =>
      editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "\\"),
    );

    expect(isClaimed).toBe(true);
    expect(readParas(editor)).toEqual(["x"]);
    expect(onRemoved).toHaveBeenCalledTimes(1);
    expect(onRemoved).toHaveBeenCalledWith({ source: "typing", removed: ["\\"] });
    expect(logger.info).toHaveBeenCalledWith("UnstorableTextPlugin: removed \\ from typed text.");
  });

  it("refuses the `keydown` of a `/` beside a `/`", async () => {
    const { editor, onRemoved } = await environment("a/b", { anchor: 2 });
    const event = new KeyboardEvent("keydown", { key: "/", cancelable: true });

    await dispatch(editor, () => editor.dispatchCommand(KEY_DOWN_COMMAND, event));

    expect(event.defaultPrevented).toBe(true);
    expect(onRemoved).toHaveBeenCalledTimes(1);
    expect(onRemoved).toHaveBeenCalledWith({ source: "typing", removed: ["//"] });
  });

  it("lets the `keydown` of a lone `/` through", async () => {
    const { editor, onRemoved } = await environment("a/b", { anchor: 0 });
    const event = new KeyboardEvent("keydown", { key: "/", cancelable: true });

    await dispatch(editor, () => editor.dispatchCommand(KEY_DOWN_COMMAND, event));

    expect(event.defaultPrevented).toBe(false);
    expect(onRemoved).not.toHaveBeenCalled();
  });

  it("leaves typed text with nothing to remove to Lexical", async () => {
    const { editor, onRemoved } = await environment("x");

    await dispatch(editor, () => editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "a/b"));

    expect(readParas(editor)).toEqual(["xa/b"]);
    expect(onRemoved).not.toHaveBeenCalled();
  });
});

describe("$filterUnstorablePastedNodes", () => {
  it("reports nothing when nothing was removed", async () => {
    const onRemoved = vi.fn<UnstorableTextRemovedHandler>();
    const { editor } = await baseTestEnvironment();
    let removed: string[] = [];
    await act(async () => {
      editor.update(() => {
        const nodes: LexicalNode[] = [$createTextNode("and/or")];
        removed = $filterUnstorablePastedNodes(nodes, null, "paste", onRemoved);
      });
    });

    expect(removed).toEqual([]);
    expect(onRemoved).not.toHaveBeenCalled();
  });
});
