// Should only be used on nodes that are initialized in the test environment.
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { $createImmutableVerseNode } from "../../nodes/usj";
import { HistoryPlugin } from "../History/HistoryPlugin";
import {
  PARA_MARKER_SELECTED_CLASS_NAME,
  ParaMarkerSelectionPlugin,
} from "./ParaMarkerSelectionPlugin";
import { ParaMarkerPrefixCursorGuardPlugin } from "./ParaMarkerPrefixCursorGuardPlugin";
import { StructureProtectionMode } from "./structure-protection.model";
import { StructureKeyboardPlugin } from "./StructureKeyboardPlugin";
import { TextDirectionPlugin } from "./TextDirectionPlugin";
import { baseTestEnvironment, pressKey, sutUpdate, updateSelection } from "./react-test.utils";
import { act } from "@testing-library/react";
import {
  $createTextNode,
  $getRoot,
  $createNodeSelection,
  $getSelection,
  $isRangeSelection,
  $setSelection,
  $setState,
  COMMAND_PRIORITY_LOW,
  BEFORE_INPUT_COMMAND,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  COPY_COMMAND,
  CUT_COMMAND,
  DELETE_CHARACTER_COMMAND,
  DRAGSTART_COMMAND,
  DROP_COMMAND,
  FOCUS_COMMAND,
  KEY_DOWN_COMMAND,
  LexicalCommand,
  LexicalEditor,
  PASTE_COMMAND,
  TextNode,
  UNDO_COMMAND,
} from "lexical";
import {
  $createGutterMarkerNode,
  $createImmutableChapterNode,
  $createImmutableTypedTextNode,
  $createParaNode,
  $getSelectedParaMarker,
  $isGutterMarkerNode,
  $isParaNode,
  $selectParaMarker,
  createEmptyHistoryState,
  gutterMarkerState,
  ImmutableTypedTextNode,
  NBSP,
  ParaNode,
} from "shared";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { $expectSelectionToBe } from "../../../../shared/src/nodes/usj/test.utils";

/** The gutter marker glyph the paragraph-structure view builds as a `marker` paragraph's first child. */
function $createGutterGlyphNode(marker: string): ImmutableTypedTextNode {
  return $createGutterMarkerNode(`\\${marker}${NBSP}`);
}

/** The marker of the paragraph whose marker is selected, if any. */
function selectedMarkerOf(editor: LexicalEditor): string | undefined {
  return editor.getEditorState().read(() => {
    const owner = $getSelectedParaMarker($getSelection())?.getParent();
    return $isParaNode(owner) ? owner.getMarker() : undefined;
  });
}

/** The element the editor root's `aria-activedescendant` names, if any. */
function activeDescendant(editor: LexicalEditor): HTMLElement | undefined {
  const id = editor.getRootElement()?.getAttribute("aria-activedescendant");
  return (id && document.getElementById(id)) || undefined;
}

/** Elements under the editor root carrying the selected-marker highlight. */
function highlightedElements(editor: LexicalEditor): Element[] {
  return Array.from(
    editor.getRootElement()?.querySelectorAll(`.${PARA_MARKER_SELECTED_CLASS_NAME}`) ?? [],
  );
}

interface Doc {
  p: ParaNode;
  li2: ParaNode;
  q1: ParaNode;
  firstText: TextNode;
  secondText: TextNode;
  thirdText: TextNode;
}

/** `\p \v 1 first`, `\li2 \v 2 second`, `\q1 third` — every paragraph with a gutter marker. */
async function environment(
  textDirection: "ltr" | "rtl" = "ltr",
  onParaMarkerMenuRequest?: () => void,
): Promise<{ editor: LexicalEditor } & Doc> {
  const doc = {} as Doc;
  const { editor } = await baseTestEnvironment(
    () => {
      doc.firstText = $createTextNode("first");
      doc.secondText = $createTextNode("second");
      doc.thirdText = $createTextNode("third");
      doc.p = $createParaNode("p");
      doc.li2 = $createParaNode("li2");
      doc.q1 = $createParaNode("q1");
      $getRoot().append(
        doc.p.append($createGutterGlyphNode("p"), $createImmutableVerseNode("1"), doc.firstText),
        doc.li2.append(
          $createGutterGlyphNode("li2"),
          $createImmutableVerseNode("2"),
          doc.secondText,
        ),
        doc.q1.append($createGutterGlyphNode("q1"), doc.thirdText),
      );
    },
    <>
      <ParaMarkerSelectionPlugin onParaMarkerMenuRequest={onParaMarkerMenuRequest} />
      <TextDirectionPlugin textDirection={textDirection} />
    </>,
  );
  return { editor, ...doc };
}

/** Selects `para`'s gutter marker the way the click guard does. */
async function selectMarkerOf(editor: LexicalEditor, para: ParaNode): Promise<void> {
  await sutUpdate(editor, () => {
    const glyph = para.getFirstChild();
    if (!(glyph instanceof ImmutableTypedTextNode)) throw new Error("no gutter glyph");
    $selectParaMarker(glyph);
  });
}

describe("ParaMarkerSelectionPlugin — highlight", () => {
  it("marks the owning paragraph with the selected class and names the glyph as active descendant", async () => {
    const { editor, li2 } = await environment();

    await selectMarkerOf(editor, li2);

    const element = editor.getElementByKey(li2.getKey());
    expect(element?.classList.contains(PARA_MARKER_SELECTED_CLASS_NAME)).toBe(true);
    // A `<p>` supports no selection state, so none is set on it.
    expect(element?.hasAttribute("aria-selected")).toBe(false);
    expect(highlightedElements(editor)).toHaveLength(1);
    const glyphKey = editor.getEditorState().read(() => li2.getFirstChildOrThrow().getKey());
    const glyphElement = editor.getElementByKey(glyphKey);
    expect(glyphElement).not.toBeNull();
    expect(activeDescendant(editor)).toBe(glyphElement);
    expect(glyphElement?.getAttribute("role")).toBe("option");
    expect(glyphElement?.getAttribute("aria-selected")).toBe("true");
  });

  it("removes both when the selection leaves the marker", async () => {
    const { editor, li2, secondText } = await environment();
    await selectMarkerOf(editor, li2);

    updateSelection(editor, secondText, 0);

    const element = editor.getElementByKey(li2.getKey());
    expect(element?.classList.contains(PARA_MARKER_SELECTED_CLASS_NAME)).toBe(false);
    expect(editor.getRootElement()?.hasAttribute("aria-activedescendant")).toBe(false);
    expect(highlightedElements(editor)).toHaveLength(0);
  });

  it("moves both to the new marker's paragraph", async () => {
    const { editor, p, li2 } = await environment();
    await selectMarkerOf(editor, li2);

    await selectMarkerOf(editor, p);

    expect(highlightedElements(editor)).toEqual([editor.getElementByKey(p.getKey())]);
    const glyphKey = editor.getEditorState().read(() => p.getFirstChildOrThrow().getKey());
    const glyphElement = editor.getElementByKey(glyphKey);
    expect(glyphElement).not.toBeNull();
    expect(activeDescendant(editor)).toBe(glyphElement);
  });

  // The class is re-applied on every update, not only when the owner changes, so an element that
  // lost it (one Lexical re-created under the same key, say) gets it back.
  it("re-applies the highlight on the next update to an element that lost it", async () => {
    const { editor, li2, thirdText } = await environment();
    await selectMarkerOf(editor, li2);
    const element = editor.getElementByKey(li2.getKey())!;
    element.classList.remove(PARA_MARKER_SELECTED_CLASS_NAME);

    await sutUpdate(editor, () => thirdText.setTextContent("third, edited"));

    expect(element.classList.contains(PARA_MARKER_SELECTED_CLASS_NAME)).toBe(true);
  });

  // Replacing the paragraph node (new key, new element) while moving the glyph over with its key
  // intact — as an undo or a structural edit can — keeps the selection, but the element it must be
  // drawn on changes.
  it("recomputes the owner after the paragraph node is replaced", async () => {
    const { editor, li2 } = await environment();
    await selectMarkerOf(editor, li2);

    await sutUpdate(editor, () => {
      li2.replace($createParaNode("q2"), true);
    });

    expect(selectedMarkerOf(editor)).toBe("q2");
    const retagged = editor.getEditorState().read(() =>
      $getRoot()
        .getChildren()
        .find((n) => $isParaNode(n) && n.getMarker() === "q2"),
    );
    const highlighted = highlightedElements(editor);
    expect(highlighted).toHaveLength(1);
    expect(highlighted[0]).toBe(editor.getElementByKey(retagged!.getKey()));
  });

  it("leaves nothing behind when the selected paragraph is replaced by a reload", async () => {
    const { editor, li2 } = await environment();
    await selectMarkerOf(editor, li2);

    await sutUpdate(editor, () => {
      $getRoot()
        .clear()
        .append(
          $createParaNode("p").append(
            $createGutterGlyphNode("p"),
            $createTextNode("fresh document"),
          ),
        );
    });

    expect(selectedMarkerOf(editor)).toBeUndefined();
    expect(highlightedElements(editor)).toHaveLength(0);
    expect(editor.getRootElement()?.hasAttribute("aria-activedescendant")).toBe(false);
  });
});

describe("ParaMarkerSelectionPlugin — browser caret", () => {
  // A click on the glyph leaves the browser's caret drawn inside it (a decorator Lexical cannot
  // address), and Lexical only removes DOM ranges for a non-range selection when the previous
  // selection was non-null — on the click path it is null.
  it("removes a DOM caret left inside the glyph when the marker is selected", async () => {
    const { editor, li2 } = await environment();
    const glyphKey = editor.getEditorState().read(() => li2.getFirstChild()!.getKey());
    const glyphElement = editor.getElementByKey(glyphKey)!;
    const range = document.createRange();
    range.setStart(glyphElement.firstChild!, 1);
    range.collapse(true);
    const domSelection = document.getSelection()!;
    domSelection.removeAllRanges();
    domSelection.addRange(range);

    await selectMarkerOf(editor, li2);

    const after = document.getSelection();
    const isCaretInGlyph =
      !!after && after.rangeCount > 0 && glyphElement.contains(after.getRangeAt(0).startContainer);
    expect(isCaretInGlyph).toBe(false);
  });
});

/** Presses a key with modifiers through `KEY_DOWN_COMMAND`, returning the event to inspect. */
async function pressKeyWith(
  editor: LexicalEditor,
  init: KeyboardEventInit & { key: string },
): Promise<KeyboardEvent> {
  const event = new KeyboardEvent("keydown", { bubbles: true, cancelable: true, ...init });
  await act(async () => {
    editor.dispatchCommand(KEY_DOWN_COMMAND, event);
  });
  return event;
}

describe.each([
  ["ltr", "ArrowRight", "ArrowLeft"],
  ["rtl", "ArrowLeft", "ArrowRight"],
] as const)("ParaMarkerSelectionPlugin — horizontal keys (%s)", (direction, forward, backward) => {
  it.each([forward, backward])(
    "%s puts the caret at the paragraph's first content position and moves no further",
    async (key) => {
      const { editor, li2, secondText } = await environment(direction);
      await selectMarkerOf(editor, li2);

      const event = await pressKey(editor, key);

      expect(event.defaultPrevented).toBe(true);
      editor.getEditorState().read(() => {
        $expectSelectionToBe(secondText, 0);
      });
    },
  );

  it(`${backward} on the first paragraph's marker returns to that paragraph's text`, async () => {
    const { editor, p, firstText } = await environment(direction);
    await selectMarkerOf(editor, p);

    await pressKey(editor, backward);

    editor.getEditorState().read(() => {
      $expectSelectionToBe(firstText, 0);
    });
  });

  it(`Shift+${backward} behaves like ${backward}`, async () => {
    const { editor, li2, secondText } = await environment(direction);
    await selectMarkerOf(editor, li2);

    await pressKeyWith(editor, { key: backward, shiftKey: true });

    editor.getEditorState().read(() => {
      $expectSelectionToBe(secondText, 0);
    });
  });
});

describe("ParaMarkerSelectionPlugin — vertical keys return to the text", () => {
  it.each([[{ key: "ArrowUp" }], [{ key: "ArrowDown" }], [{ key: "ArrowUp", shiftKey: true }]])(
    "%o puts the caret at the paragraph's first content position and moves no further",
    async (init) => {
      const { editor, li2, secondText } = await environment();
      await selectMarkerOf(editor, li2);

      const event = await pressKeyWith(editor, init);

      expect(event.defaultPrevented).toBe(true);
      editor.getEditorState().read(() => {
        $expectSelectionToBe(secondText, 0);
      });
    },
  );

  it("does so at either end of the document too", async () => {
    const { editor, p, q1, firstText, thirdText } = await environment();

    await selectMarkerOf(editor, p);
    await pressKey(editor, "ArrowUp");
    editor.getEditorState().read(() => {
      $expectSelectionToBe(firstText, 0);
    });

    await selectMarkerOf(editor, q1);
    await pressKey(editor, "ArrowDown");
    editor.getEditorState().read(() => {
      $expectSelectionToBe(thirdText, 0);
    });
  });
});

describe("ParaMarkerSelectionPlugin — modified arrows return to the text too", () => {
  it.each([
    [{ key: "ArrowUp", metaKey: true }],
    [{ key: "ArrowDown", ctrlKey: true }],
    [{ key: "ArrowUp", altKey: true }],
    [{ key: "ArrowRight", ctrlKey: true }],
    [{ key: "ArrowLeft", altKey: true }],
  ])("%o puts the caret at content start and claims the key", async (init) => {
    const { editor, li2, secondText } = await environment();
    await selectMarkerOf(editor, li2);

    const event = await pressKeyWith(editor, init);

    expect(event.defaultPrevented).toBe(true);
    editor.getEditorState().read(() => {
      $expectSelectionToBe(secondText, 0);
    });
  });
});

describe("ParaMarkerSelectionPlugin — read-only", () => {
  it("hides the highlight while the editor is read-only, and restores it when editable", async () => {
    const { editor, li2 } = await environment();
    await selectMarkerOf(editor, li2);

    act(() => editor.setEditable(false));
    expect(highlightedElements(editor)).toHaveLength(0);
    expect(editor.getRootElement()?.hasAttribute("aria-activedescendant")).toBe(false);

    act(() => editor.setEditable(true));
    expect(highlightedElements(editor)).toEqual([editor.getElementByKey(li2.getKey())]);
  });
});

describe("ParaMarkerSelectionPlugin — asking to change the marker", () => {
  it.each([[{ key: "Enter" }], [{ key: "ArrowDown", altKey: true }]])(
    "%o requests the marker menu and keeps the selection",
    async (init) => {
      const onMenuRequest = vi.fn();
      const { editor, li2 } = await environment("ltr", onMenuRequest);
      await selectMarkerOf(editor, li2);

      const event = await pressKeyWith(editor, init);

      expect(event.defaultPrevented).toBe(true);
      expect(onMenuRequest).toHaveBeenCalledTimes(1);
      expect(selectedMarkerOf(editor)).toBe("li2");
    },
  );
});

describe("ParaMarkerSelectionPlugin — without a marker menu", () => {
  it("Enter acts as it would at the paragraph's content start", async () => {
    const { editor, li2 } = await deletionEnvironment("off");
    await selectMarkerOf(editor, li2);

    await pressKey(editor, "Enter");

    expect(selectedMarkerOf(editor)).toBeUndefined();
    expect(paragraphsOf(editor)).toEqual([
      { marker: "p", glyphs: 1, text: "first" },
      { marker: "li2", glyphs: 1, text: "" },
      { marker: "li2", glyphs: 0, text: "second" },
      { marker: "q1", glyphs: 1, text: "third" },
    ]);
  });

  it("Alt+ArrowDown returns to the paragraph's text like any other arrow", async () => {
    const { editor, li2, secondText } = await environment();
    await selectMarkerOf(editor, li2);

    const event = await pressKeyWith(editor, { key: "ArrowDown", altKey: true });

    expect(event.defaultPrevented).toBe(true);
    editor.getEditorState().read(() => {
      $expectSelectionToBe(secondText, 0);
    });
  });
});

describe("ParaMarkerSelectionPlugin — Escape", () => {
  it("returns the caret to the paragraph's first content position without stopping the event", async () => {
    const { editor, li2, secondText } = await environment();
    await selectMarkerOf(editor, li2);

    const event = await pressKey(editor, "Escape");

    expect(event.defaultPrevented).toBe(false);
    editor.getEditorState().read(() => {
      $expectSelectionToBe(secondText, 0);
    });
  });
});

describe("ParaMarkerSelectionPlugin — typing collapses to the content, then proceeds", () => {
  it("a printable key moves to content start without claiming, so the character lands there", async () => {
    const { editor, li2, secondText } = await environment();
    await selectMarkerOf(editor, li2);

    const event = await pressKey(editor, "a");
    expect(event.defaultPrevented).toBe(false);
    editor.getEditorState().read(() => {
      $expectSelectionToBe(secondText, 0);
    });
    await act(async () => {
      editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "a");
    });

    editor.getEditorState().read(() => {
      expect(li2.getTextContent()).toContain("asecond");
    });
  });

  it.each(["Process", "Dead", "Unidentified"])(
    "a %s keydown (IME composition or dead key) collapses before composing",
    async (key) => {
      const { editor, li2, secondText } = await environment();
      await selectMarkerOf(editor, li2);

      const event = await pressKey(editor, key);

      expect(event.defaultPrevented).toBe(false);
      editor.getEditorState().read(() => {
        $expectSelectionToBe(secondText, 0);
      });
    },
  );

  it("a character outside the BMP (an emoji) collapses too", async () => {
    const { editor, li2, secondText } = await environment();
    await selectMarkerOf(editor, li2);

    const event = await pressKey(editor, "😀");

    expect(event.defaultPrevented).toBe(false);
    editor.getEditorState().read(() => {
      $expectSelectionToBe(secondText, 0);
    });
  });

  it.each([
    [{ key: "z", ctrlKey: true }],
    [{ key: "Tab" }],
    [{ key: "Home" }],
    [{ key: "Shift", shiftKey: true }],
  ])("%o leaves the marker selected", async (init) => {
    const { editor, li2 } = await environment();
    await selectMarkerOf(editor, li2);

    await pressKeyWith(editor, init);

    expect(selectedMarkerOf(editor)).toBe("li2");
  });
});

/** The serialized document, to prove a refusal changed nothing at all. */
function documentJson(editor: LexicalEditor): string {
  return JSON.stringify(editor.getEditorState().toJSON().root);
}

/**
 * `\p first`, `\li2 second`, `\q1 third` — optionally after a chapter number — with the
 * plugins a Backspace/Delete on a selected marker passes through, and undo history.
 */
async function deletionEnvironment(
  structureProtectionMode: StructureProtectionMode,
  { afterChapter = false } = {},
): Promise<{ editor: LexicalEditor } & Doc> {
  const doc = {} as Doc;
  const { editor } = await baseTestEnvironment(
    () => {
      doc.firstText = $createTextNode("first");
      doc.secondText = $createTextNode("second");
      doc.thirdText = $createTextNode("third");
      doc.p = $createParaNode("p");
      doc.li2 = $createParaNode("li2");
      doc.q1 = $createParaNode("q1");
      if (afterChapter) $getRoot().append($createImmutableChapterNode("1"));
      $getRoot().append(
        doc.p.append($createGutterGlyphNode("p"), doc.firstText),
        doc.li2.append($createGutterGlyphNode("li2"), doc.secondText),
        doc.q1.append($createGutterGlyphNode("q1"), doc.thirdText),
      );
    },
    <>
      <StructureKeyboardPlugin structureProtectionMode={structureProtectionMode} />
      <ParaMarkerSelectionPlugin structureProtectionMode={structureProtectionMode} />
      <HistoryPlugin externalHistoryState={createEmptyHistoryState()} />
    </>,
  );
  return { editor, ...doc };
}

/** Each root-level paragraph's marker and text, with its gutter glyphs listed separately. */
function paragraphsOf(editor: LexicalEditor) {
  return editor.getEditorState().read(() =>
    $getRoot()
      .getChildren()
      .filter($isParaNode)
      .map((para) => ({
        marker: para.getMarker(),
        glyphs: para.getChildren().filter($isGutterMarkerNode).length,
        text: para
          .getChildren()
          .filter((child) => !$isGutterMarkerNode(child))
          .map((child) => child.getTextContent())
          .join(""),
      })),
  );
}

describe.each(["off", "guarded"] as const)(
  "ParaMarkerSelectionPlugin — Backspace/Delete merge the paragraph into the previous one (%s)",
  (structureProtectionMode) => {
    it.each(["Backspace", "Delete"])(
      "%s merges in one press, dropping the marker and leaving the caret at the join",
      async (key) => {
        const { editor, li2 } = await deletionEnvironment(structureProtectionMode);
        await selectMarkerOf(editor, li2);

        const event = await pressKey(editor, key);

        expect(event.defaultPrevented).toBe(true);
        expect(paragraphsOf(editor)).toEqual([
          { marker: "p", glyphs: 1, text: "firstsecond" },
          { marker: "q1", glyphs: 1, text: "third" },
        ]);
        expect(selectedMarkerOf(editor)).toBeUndefined();
        expect(editor.getRootElement()?.classList.contains("verse-delete-armed")).toBe(false);
        // The two texts normalize into one node, so the join is offset 5 of "firstsecond".
        editor.getEditorState().read(() => {
          const selection = $getSelection();
          expect($isRangeSelection(selection) && selection.isCollapsed()).toBe(true);
          if (!$isRangeSelection(selection)) return;
          expect(selection.anchor.getNode().getTextContent()).toBe("firstsecond");
          expect(selection.anchor.offset).toBe("first".length);
        });
      },
    );

    it("is undone, exactly, by a single Undo", async () => {
      const { editor, li2 } = await deletionEnvironment(structureProtectionMode);
      await selectMarkerOf(editor, li2);
      const before = documentJson(editor);
      await pressKey(editor, "Backspace");
      expect(documentJson(editor)).not.toBe(before);

      await act(async () => {
        editor.dispatchCommand(UNDO_COMMAND, undefined);
      });

      expect(documentJson(editor)).toBe(before);
    });

    it.each([
      ["the first paragraph of the book", false],
      ["the first paragraph after a chapter number", true],
    ])(
      "on %s, with nothing to merge into, changes nothing and keeps the marker selected",
      async (_name, afterChapter) => {
        const { editor, p } = await deletionEnvironment(structureProtectionMode, { afterChapter });
        await selectMarkerOf(editor, p);
        const before = documentJson(editor);

        const event = await pressKey(editor, "Backspace");

        expect(event.defaultPrevented).toBe(true);
        expect(documentJson(editor)).toBe(before);
        expect(selectedMarkerOf(editor)).toBe("p");
      },
    );
  },
);

describe("ParaMarkerSelectionPlugin — deletion without a Backspace/Delete keydown", () => {
  const merged = [
    { marker: "p", glyphs: 1, text: "firstsecond" },
    { marker: "q1", glyphs: 1, text: "third" },
  ];

  it.each([true, false])(
    "DELETE_CHARACTER_COMMAND (backward: %s), as macOS Ctrl+H/Ctrl+D dispatch it, merges the paragraph",
    async (isBackward) => {
      const { editor, li2 } = await deletionEnvironment("off");
      await selectMarkerOf(editor, li2);

      await act(async () => {
        editor.dispatchCommand(DELETE_CHARACTER_COMMAND, isBackward);
      });

      expect(paragraphsOf(editor)).toEqual(merged);
    },
  );

  it("a virtual keyboard's deleteContentBackward input merges the paragraph", async () => {
    const { editor, li2 } = await deletionEnvironment("off");
    await selectMarkerOf(editor, li2);
    const event = new InputEvent("beforeinput", {
      inputType: "deleteContentBackward",
      cancelable: true,
    });

    await act(async () => {
      editor.dispatchCommand(BEFORE_INPUT_COMMAND, event);
    });

    expect(event.defaultPrevented).toBe(true);
    expect(paragraphsOf(editor)).toEqual(merged);
  });

  it("an insertText input with no keydown (dictation, the emoji picker) lands in the text", async () => {
    const { editor, li2, secondText } = await environment();
    await selectMarkerOf(editor, li2);
    let isCollapsedWhenHandled = false;
    const unregister = editor.registerCommand(
      BEFORE_INPUT_COMMAND,
      () => {
        const selection = $getSelection();
        isCollapsedWhenHandled =
          $isRangeSelection(selection) && selection.anchor.key === secondText.getKey();
        return true;
      },
      COMMAND_PRIORITY_LOW,
    );

    await act(async () => {
      editor.dispatchCommand(
        BEFORE_INPUT_COMMAND,
        new InputEvent("beforeinput", { inputType: "insertText", data: "x" }),
      );
    });
    unregister();

    expect(isCollapsedWhenHandled).toBe(true);
  });
});

describe("ParaMarkerSelectionPlugin — Backspace/Delete in protected structure", () => {
  it.each(["Backspace", "Delete"])(
    "%s changes nothing, as a paragraph merge is refused there",
    async (key) => {
      const { editor, li2 } = await deletionEnvironment("protected");
      await selectMarkerOf(editor, li2);
      const before = documentJson(editor);

      const event = await pressKey(editor, key);

      expect(event.defaultPrevented).toBe(true);
      expect(documentJson(editor)).toBe(before);
      expect(selectedMarkerOf(editor)).toBe("li2");
    },
  );
});

describe("ParaMarkerSelectionPlugin — commands that would make the glyph an operand", () => {
  const preventable = () => new Event("synthetic", { cancelable: true });
  it.each([
    ["CUT_COMMAND", CUT_COMMAND],
    ["COPY_COMMAND", COPY_COMMAND],
    ["DRAGSTART_COMMAND", DRAGSTART_COMMAND],
  ] as [string, LexicalCommand<unknown>][])(
    "%s is refused before any lower-priority handler",
    async (_name, command) => {
      const { editor, li2 } = await environment();
      await selectMarkerOf(editor, li2);
      const before = documentJson(editor);
      const spy = vi.fn(() => false);
      const unregister = editor.registerCommand(command, spy, COMMAND_PRIORITY_LOW);
      const dispatched = preventable();

      await act(async () => {
        editor.dispatchCommand(command, dispatched);
      });
      unregister();

      expect(spy).not.toHaveBeenCalled();
      expect(documentJson(editor)).toBe(before);
      expect(dispatched.defaultPrevented).toBe(true);
    },
  );

  it.each([
    ["PASTE_COMMAND", PASTE_COMMAND, preventable],
    ["CONTROLLED_TEXT_INSERTION_COMMAND", CONTROLLED_TEXT_INSERTION_COMMAND, () => "x"],
  ] as [string, LexicalCommand<unknown>, () => unknown][])(
    "%s collapses to the paragraph's text and passes on, as typing does",
    async (_name, command, payload) => {
      const { editor, li2, secondText } = await environment();
      await selectMarkerOf(editor, li2);
      let isCollapsedWhenHandled = false;
      const unregister = editor.registerCommand(
        command,
        () => {
          const selection = $getSelection();
          isCollapsedWhenHandled =
            $isRangeSelection(selection) && selection.anchor.key === secondText.getKey();
          return true;
        },
        COMMAND_PRIORITY_LOW,
      );

      await act(async () => {
        editor.dispatchCommand(command, payload());
      });
      unregister();

      expect(isCollapsedWhenHandled).toBe(true);
    },
  );

  it("pastes where the browser's selection moved to after a right-click on other text", async () => {
    const { editor, li2, thirdText } = await environment();
    await selectMarkerOf(editor, li2);
    // A right-click moves the browser's caret without Lexical rebuilding its selection.
    const textElement = editor.getElementByKey(thirdText.getKey())!;
    const range = document.createRange();
    range.setStart(textElement.firstChild!, 2);
    range.collapse(true);
    document.getSelection()?.removeAllRanges();
    document.getSelection()?.addRange(range);
    let landing: [string, number] | undefined;
    const unregister = editor.registerCommand(
      PASTE_COMMAND,
      () => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) landing = [selection.anchor.key, selection.anchor.offset];
        return true;
      },
      COMMAND_PRIORITY_LOW,
    );

    await act(async () => {
      editor.dispatchCommand(PASTE_COMMAND, preventable() as ClipboardEvent);
    });
    unregister();

    expect(landing).toEqual([thirdText.getKey(), 2]);
  });
});

describe("ParaMarkerSelectionPlugin — clicks", () => {
  it("a click on a verse number while a marker is selected puts the caret past it", async () => {
    const { editor, li2, p, firstText } = await environment();
    await selectMarkerOf(editor, li2);
    const verseKey = editor.getEditorState().read(() => p.getChildAtIndex(1)!.getKey());

    await act(async () => {
      editor.getElementByKey(verseKey)?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(selectedMarkerOf(editor)).toBeUndefined();
    editor.getEditorState().read(() => {
      $expectSelectionToBe(firstText, 0);
    });
  });
});

describe("ParaMarkerSelectionPlugin — focus returning without a click", () => {
  it("removes the caret the browser draws, keeping the marker selected", async () => {
    const { editor, li2, firstText } = await environment();
    await selectMarkerOf(editor, li2);
    const range = document.createRange();
    range.setStart(editor.getElementByKey(firstText.getKey())!.firstChild!, 0);
    document.getSelection()?.removeAllRanges();
    document.getSelection()?.addRange(range);

    await act(async () => {
      editor.dispatchCommand(FOCUS_COMMAND, new FocusEvent("focus"));
    });

    expect(document.getSelection()?.rangeCount).toBe(0);
    expect(selectedMarkerOf(editor)).toBe("li2");
  });
});

describe("ParaMarkerSelectionPlugin — a selection whose marker goes away", () => {
  // A remote edit, say. (Removing only the glyph needs no repair: Lexical itself turns a node
  // selection of a removed decorator into a caret where it was.) The key that follows acts from the
  // repaired caret.
  it("collapses to the end of the previous paragraph when the whole paragraph is removed", async () => {
    const { editor, li2, firstText } = await environment();
    await selectMarkerOf(editor, li2);
    await sutUpdate(editor, () => li2.remove());

    await pressKey(editor, "a");

    editor.getEditorState().read(() => {
      $expectSelectionToBe(firstText, "first".length);
    });
  });
});

describe("ParaMarkerSelectionPlugin — while read-only", () => {
  it("lets copy through, since nothing can be done with the marker there", async () => {
    const { editor, li2 } = await environment();
    await selectMarkerOf(editor, li2);
    act(() => editor.setEditable(false));
    // Claims the copy, so rich-text's clipboard write (which jsdom cannot run) never starts.
    const spy = vi.fn(() => true);
    const unregister = editor.registerCommand(COPY_COMMAND, spy, COMMAND_PRIORITY_LOW);

    await act(async () => {
      editor.dispatchCommand(
        COPY_COMMAND,
        new Event("copy", { cancelable: true }) as ClipboardEvent,
      );
    });
    unregister();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});

/** A cancelable DROP event whose `target` is `domNode` — the drop-target judging DROP_COMMAND reads. */
function dropEventOn(domNode: Node): DragEvent {
  const event = new Event("drop", { cancelable: true }) as unknown as DragEvent;
  Object.defineProperty(event, "target", { value: domNode });
  return event;
}

describe("ParaMarkerSelectionPlugin — drop is refused only onto the selected marker", () => {
  it("refuses a drop targeting the selected glyph", async () => {
    const { editor, li2 } = await environment();
    await selectMarkerOf(editor, li2);
    const before = documentJson(editor);
    const glyphKey = editor.getEditorState().read(() => li2.getFirstChild()!.getKey());
    const glyphElement = editor.getElementByKey(glyphKey)!;
    const spy = vi.fn(() => false);
    const unregister = editor.registerCommand(DROP_COMMAND, spy, COMMAND_PRIORITY_LOW);
    const event = dropEventOn(glyphElement.firstChild ?? glyphElement);

    await act(async () => {
      editor.dispatchCommand(DROP_COMMAND, event);
    });
    unregister();

    expect(event.defaultPrevented).toBe(true);
    expect(spy).not.toHaveBeenCalled();
    expect(documentJson(editor)).toBe(before);
  });

  it("does not claim a drop targeting another paragraph's text while a marker is selected", async () => {
    const { editor, li2, secondText } = await environment();
    await selectMarkerOf(editor, li2);
    const targetElement = editor.getElementByKey(secondText.getKey())!;
    const spy = vi.fn(() => false);
    const unregister = editor.registerCommand(DROP_COMMAND, spy, COMMAND_PRIORITY_LOW);
    const event = dropEventOn(targetElement.firstChild ?? targetElement);

    await act(async () => {
      editor.dispatchCommand(DROP_COMMAND, event);
    });
    unregister();

    expect(event.defaultPrevented).toBe(false);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe.each(["guarded", "protected"] as const)(
  "ParaMarkerSelectionPlugin alongside StructureKeyboardPlugin (%s)",
  (structureProtectionMode) => {
    it("lets a typed character through to the paragraph's text", async () => {
      const { editor, li2, secondText } = await deletionEnvironment(structureProtectionMode);
      await selectMarkerOf(editor, li2);

      const event = await pressKey(editor, "a");

      expect(event.defaultPrevented).toBe(false);
      editor.getEditorState().read(() => {
        $expectSelectionToBe(secondText, 0);
      });
    });
  },
);

// Power and Standard view build no gutter glyph: a paragraph's marker is inline, either as an
// editable `MarkerNode` or as a marker glyph without `gutterMarkerState`. Whether a glyph can be
// selected is decided by that state on the node, not by the view, so these tests build the same
// paragraph both ways and flip only the state.
describe.each([
  ["a gutter marker (paragraph-structure view)", true],
  ["an inline marker glyph (no gutter state)", false],
] as const)("ParaMarkerSelectionPlugin — %s", (_name, isGutter) => {
  async function glyphEnvironment({ withSelectionPlugin = true } = {}) {
    let glyph!: ImmutableTypedTextNode;
    let first!: TextNode;
    let second!: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        glyph = $setState(
          $createImmutableTypedTextNode("marker", `\\li2${NBSP}`),
          gutterMarkerState,
          isGutter,
        );
        first = $createTextNode("first");
        second = $createTextNode("second");
        $getRoot().append(
          $createParaNode("p").append(first),
          $createParaNode("li2").append(glyph, second),
        );
      },
      <>
        <ParaMarkerPrefixCursorGuardPlugin />
        {withSelectionPlugin && <ParaMarkerSelectionPlugin />}
      </>,
    );
    return { editor, glyph, first, second };
  }

  it(isGutter ? "is selected by a click" : "is not selected by a click", async () => {
    const { editor, glyph } = await glyphEnvironment();

    await act(async () => {
      editor
        .getElementByKey(glyph.getKey())
        ?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(selectedMarkerOf(editor)).toBe(isGutter ? "li2" : undefined);
    expect(highlightedElements(editor)).toHaveLength(isGutter ? 1 : 0);
  });

  /** Presses `key` with the glyph node-selected, reporting what came of it. */
  async function pressOnNodeSelectedGlyph(key: string, withSelectionPlugin = true) {
    const { editor, glyph } = await glyphEnvironment({ withSelectionPlugin });
    await sutUpdate(editor, () => {
      const selection = $createNodeSelection();
      selection.add(glyph.getKey());
      $setSelection(selection);
    });
    const event = await pressKey(editor, key);
    return { isPrevented: event.defaultPrevented, document: documentJson(editor) };
  }

  const keys = ["Backspace", "Delete", "ArrowLeft", "ArrowUp", "Enter", "a"];

  if (isGutter) {
    it.each(keys)("owns %s while selected", async (key) => {
      const { isPrevented } = await pressOnNodeSelectedGlyph(key);

      // Typing is redirected to the paragraph's text but never claimed.
      expect(isPrevented).toBe(key !== "a");
    });
  } else {
    it.each(keys)(
      "leaves %s exactly as it is without the plugin, even when the glyph is node-selected",
      async (key) => {
        const withPlugin = await pressOnNodeSelectedGlyph(key);
        const withoutPlugin = await pressOnNodeSelectedGlyph(key, false);

        expect(withPlugin).toEqual(withoutPlugin);
      },
    );
  }
});
