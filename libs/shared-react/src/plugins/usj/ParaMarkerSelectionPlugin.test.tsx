// Should only be used on nodes that are initialized in the test environment.
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { $createImmutableVerseNode } from "../../nodes/usj";
import {
  PARA_MARKER_REFUSED_CLASS_NAME,
  PARA_MARKER_REFUSED_INTENT_ATTRIBUTE,
  PARA_MARKER_SELECTED_CLASS_NAME,
  ParaMarkerSelectionPlugin,
} from "./ParaMarkerSelectionPlugin";
import { StructureKeyboardPlugin } from "./StructureKeyboardPlugin";
import { TextDirectionPlugin } from "./TextDirectionPlugin";
import { baseTestEnvironment, pressKey, sutUpdate, updateSelection } from "./react-test.utils";
import { act } from "@testing-library/react";
import {
  $createTextNode,
  $getRoot,
  $getSelection,
  COMMAND_PRIORITY_LOW,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  COPY_COMMAND,
  CUT_COMMAND,
  DRAGSTART_COMMAND,
  DROP_COMMAND,
  KEY_DOWN_COMMAND,
  LexicalCommand,
  LexicalEditor,
  LexicalNode,
  PASTE_COMMAND,
  TextNode,
} from "lexical";
import {
  $createGutterMarkerNode,
  $createParaNode,
  $getSelectedParaMarker,
  $isParaNode,
  $selectParaMarker,
  ImmutableTypedTextNode,
  NBSP,
  ParaNode,
} from "shared";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { $expectSelectionToBe } from "../../../../shared/src/nodes/usj/test.utils";

/** A paragraph as the paragraph-structure view builds it: its gutter marker glyph, then content. */
function $createGutterParaNode(marker: string, ...content: LexicalNode[]): ParaNode {
  return $createParaNode(marker).append($createGutterMarkerNode(`\\${marker}${NBSP}`), ...content);
}

/** The marker of the paragraph whose marker is selected, if any. */
function selectedMarkerOf(editor: LexicalEditor): string | undefined {
  return editor.getEditorState().read(() => {
    const owner = $getSelectedParaMarker($getSelection())?.getParent();
    return $isParaNode(owner) ? owner.getMarker() : undefined;
  });
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
      doc.p = $createGutterParaNode("p", $createImmutableVerseNode("1"), doc.firstText);
      doc.li2 = $createGutterParaNode("li2", $createImmutableVerseNode("2"), doc.secondText);
      doc.q1 = $createGutterParaNode("q1", doc.thirdText);
      $getRoot().append(doc.p, doc.li2, doc.q1);
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
  it("marks the owning paragraph with the selected class and aria-selected", async () => {
    const { editor, li2 } = await environment();

    await selectMarkerOf(editor, li2);

    const element = editor.getElementByKey(li2.getKey());
    expect(element?.classList.contains(PARA_MARKER_SELECTED_CLASS_NAME)).toBe(true);
    expect(element?.getAttribute("aria-selected")).toBe("true");
    expect(highlightedElements(editor)).toHaveLength(1);
  });

  it("removes both when the selection leaves the marker", async () => {
    const { editor, li2, secondText } = await environment();
    await selectMarkerOf(editor, li2);

    updateSelection(editor, secondText, 0);

    const element = editor.getElementByKey(li2.getKey());
    expect(element?.classList.contains(PARA_MARKER_SELECTED_CLASS_NAME)).toBe(false);
    expect(element?.hasAttribute("aria-selected")).toBe(false);
    expect(highlightedElements(editor)).toHaveLength(0);
  });

  it("moves both to the new marker's paragraph", async () => {
    const { editor, p, li2 } = await environment();
    await selectMarkerOf(editor, li2);

    await selectMarkerOf(editor, p);

    expect(highlightedElements(editor)).toEqual([editor.getElementByKey(p.getKey())]);
    expect(editor.getElementByKey(li2.getKey())?.hasAttribute("aria-selected")).toBe(false);
  });

  // A retag replaces the paragraph node (new key, new element) and moves the glyph over with its
  // key intact, so the selection survives but the element it must be drawn on changes.
  it("recomputes the owner after a retag replaces the paragraph", async () => {
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
    expect(highlighted[0].getAttribute("aria-selected")).toBe("true");
  });

  it("leaves nothing behind when the selected paragraph is replaced by a reload", async () => {
    const { editor, li2 } = await environment();
    await selectMarkerOf(editor, li2);

    await sutUpdate(editor, () => {
      $getRoot()
        .clear()
        .append($createGutterParaNode("p", $createTextNode("fresh document")));
    });

    expect(selectedMarkerOf(editor)).toBeUndefined();
    expect(highlightedElements(editor)).toHaveLength(0);
    expect(editor.getRootElement()?.querySelectorAll("[aria-selected]")).toHaveLength(0);
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
  it(`${forward} puts the caret at the paragraph's first content position`, async () => {
    const { editor, li2, secondText } = await environment(direction);
    await selectMarkerOf(editor, li2);

    const event = await pressKey(editor, forward);

    expect(event.defaultPrevented).toBe(true);
    editor.getEditorState().read(() => {
      $expectSelectionToBe(secondText, 0);
    });
  });

  it(`${backward} puts the caret at the end of the previous paragraph`, async () => {
    const { editor, li2, firstText } = await environment(direction);
    await selectMarkerOf(editor, li2);

    const event = await pressKey(editor, backward);

    expect(event.defaultPrevented).toBe(true);
    editor.getEditorState().read(() => {
      $expectSelectionToBe(firstText);
    });
  });

  it(`${backward} with no previous paragraph keeps the marker selected`, async () => {
    const { editor, p } = await environment(direction);
    await selectMarkerOf(editor, p);

    const event = await pressKey(editor, backward);

    expect(event.defaultPrevented).toBe(true);
    expect(selectedMarkerOf(editor)).toBe("p");
  });

  it(`Shift+${forward} behaves like ${forward}`, async () => {
    const { editor, li2, secondText } = await environment(direction);
    await selectMarkerOf(editor, li2);

    await pressKeyWith(editor, { key: forward, shiftKey: true });

    editor.getEditorState().read(() => {
      $expectSelectionToBe(secondText, 0);
    });
  });
});

describe("ParaMarkerSelectionPlugin — vertical keys walk the marker column", () => {
  it("ArrowUp selects the previous paragraph's marker, ArrowDown the next one's", async () => {
    const { editor, li2 } = await environment();
    await selectMarkerOf(editor, li2);

    await pressKey(editor, "ArrowUp");
    expect(selectedMarkerOf(editor)).toBe("p");

    await pressKey(editor, "ArrowDown");
    await pressKey(editor, "ArrowDown");
    expect(selectedMarkerOf(editor)).toBe("q1");
  });

  it("stays selected at either end of the column, still claiming the key", async () => {
    const { editor, p, q1 } = await environment();
    await selectMarkerOf(editor, p);
    const up = await pressKey(editor, "ArrowUp");
    expect(up.defaultPrevented).toBe(true);
    expect(selectedMarkerOf(editor)).toBe("p");

    await selectMarkerOf(editor, q1);
    const down = await pressKey(editor, "ArrowDown");
    expect(down.defaultPrevented).toBe(true);
    expect(selectedMarkerOf(editor)).toBe("q1");
  });

  it("Shift+ArrowUp behaves like ArrowUp", async () => {
    const { editor, li2 } = await environment();
    await selectMarkerOf(editor, li2);

    await pressKeyWith(editor, { key: "ArrowUp", shiftKey: true });

    expect(selectedMarkerOf(editor)).toBe("p");
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

  it("does not request the menu in a read-only editor, where nothing can be changed", async () => {
    const onMenuRequest = vi.fn();
    const { editor, li2 } = await environment("ltr", onMenuRequest);
    await selectMarkerOf(editor, li2);
    act(() => editor.setEditable(false));

    const event = await pressKey(editor, "Enter");

    expect(event.defaultPrevented).toBe(true);
    expect(onMenuRequest).not.toHaveBeenCalled();
    expect(selectedMarkerOf(editor)).toBe("li2");
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

describe("ParaMarkerSelectionPlugin — deletion is refused visibly", () => {
  it.each([
    ["Backspace", "deleteBackward"],
    ["Delete", "deleteForward"],
  ])("%s changes nothing and publishes the refusal signal", async (key, intent) => {
    const { editor, li2 } = await environment();
    await selectMarkerOf(editor, li2);
    const before = documentJson(editor);

    const event = await pressKey(editor, key);

    expect(event.defaultPrevented).toBe(true);
    expect(documentJson(editor)).toBe(before);
    expect(selectedMarkerOf(editor)).toBe("li2");
    const root = editor.getRootElement();
    expect(root?.classList.contains(PARA_MARKER_REFUSED_CLASS_NAME)).toBe(true);
    expect(root?.getAttribute(PARA_MARKER_REFUSED_INTENT_ATTRIBUTE)).toBe(intent);
  });

  it("clears the signal on the next selection change", async () => {
    const { editor, li2 } = await environment();
    await selectMarkerOf(editor, li2);
    await pressKey(editor, "Backspace");

    await pressKey(editor, "ArrowUp");

    const root = editor.getRootElement();
    expect(root?.classList.contains(PARA_MARKER_REFUSED_CLASS_NAME)).toBe(false);
    expect(root?.hasAttribute(PARA_MARKER_REFUSED_INTENT_ATTRIBUTE)).toBe(false);
  });

  it("publishes no hint in a read-only editor, though the key is still refused", async () => {
    const { editor, li2 } = await environment();
    await selectMarkerOf(editor, li2);
    act(() => editor.setEditable(false));
    const before = documentJson(editor);

    const event = await pressKey(editor, "Backspace");

    expect(event.defaultPrevented).toBe(true);
    expect(documentJson(editor)).toBe(before);
    expect(editor.getRootElement()?.classList.contains(PARA_MARKER_REFUSED_CLASS_NAME)).toBe(false);
  });
});

describe("ParaMarkerSelectionPlugin — commands that would make the glyph an operand", () => {
  const preventable = () => new Event("synthetic", { cancelable: true });
  it.each([
    ["CUT_COMMAND", CUT_COMMAND, preventable],
    ["COPY_COMMAND", COPY_COMMAND, preventable],
    ["PASTE_COMMAND", PASTE_COMMAND, preventable],
    ["DRAGSTART_COMMAND", DRAGSTART_COMMAND, preventable],
    ["DROP_COMMAND", DROP_COMMAND, preventable],
    ["CONTROLLED_TEXT_INSERTION_COMMAND", CONTROLLED_TEXT_INSERTION_COMMAND, () => "x"],
  ] as [string, LexicalCommand<unknown>, () => unknown][])(
    "%s is refused before any lower-priority handler",
    async (_name, command, payload) => {
      const { editor, li2 } = await environment();
      await selectMarkerOf(editor, li2);
      const before = documentJson(editor);
      const spy = vi.fn(() => false);
      const unregister = editor.registerCommand(command, spy, COMMAND_PRIORITY_LOW);
      const dispatched = payload();

      await act(async () => {
        editor.dispatchCommand(command, dispatched);
      });
      unregister();

      expect(spy).not.toHaveBeenCalled();
      expect(documentJson(editor)).toBe(before);
      if (dispatched instanceof Event) expect(dispatched.defaultPrevented).toBe(true);
    },
  );
});

describe.each(["guarded", "protected"] as const)(
  "ParaMarkerSelectionPlugin alongside StructureKeyboardPlugin (%s)",
  (structureProtectionMode) => {
    async function coexistingEnvironment() {
      const doc = {} as Doc;
      const { editor } = await baseTestEnvironment(
        () => {
          doc.firstText = $createTextNode("first");
          doc.secondText = $createTextNode("second");
          doc.thirdText = $createTextNode("third");
          doc.p = $createGutterParaNode("p", doc.firstText);
          doc.li2 = $createGutterParaNode("li2", doc.secondText);
          doc.q1 = $createGutterParaNode("q1", doc.thirdText);
          $getRoot().append(doc.p, doc.li2, doc.q1);
        },
        <>
          <StructureKeyboardPlugin structureProtectionMode={structureProtectionMode} />
          <ParaMarkerSelectionPlugin />
        </>,
      );
      return { editor, ...doc };
    }

    it("refuses Backspace twice without arming a paragraph merge", async () => {
      const { editor, li2 } = await coexistingEnvironment();
      await selectMarkerOf(editor, li2);
      const before = documentJson(editor);

      await pressKey(editor, "Backspace");
      await pressKey(editor, "Backspace");

      expect(documentJson(editor)).toBe(before);
      expect(editor.getRootElement()?.classList.contains("verse-delete-armed")).toBe(false);
      expect(editor.getRootElement()?.classList.contains(PARA_MARKER_REFUSED_CLASS_NAME)).toBe(
        true,
      );
    });

    it("lets a typed character through to the paragraph's text", async () => {
      const { editor, li2, secondText } = await coexistingEnvironment();
      await selectMarkerOf(editor, li2);

      const event = await pressKey(editor, "a");

      expect(event.defaultPrevented).toBe(false);
      editor.getEditorState().read(() => {
        $expectSelectionToBe(secondText, 0);
      });
    });
  },
);
