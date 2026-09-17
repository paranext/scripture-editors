/**
 * Keyboard and scroll behavior of the editor context menu — the plugin's first tests.
 *
 * The menu's key handling sits on a CAPTURE-phase `keydown` listener on `document`, while Lexical
 * routes keys from a BUBBLE-phase listener on the root element, so the menu sees a press first and
 * decides whether Lexical ever sees it. Every assertion here drives a real DOM `keydown`
 * (`pressKeyThroughDom`) rather than dispatching `KEY_ENTER_COMMAND` directly: what these pin is
 * propagation BETWEEN those two listeners, which a direct command dispatch cannot see.
 */
import { ClipboardPlugin } from "./ClipboardPlugin";
import { ContextMenuPlugin } from "./ContextMenuPlugin";
import { baseTestEnvironment, pressKeyThroughDom } from "./react-test.utils";
import { act } from "@testing-library/react";
import {
  $createTextNode,
  $getRoot,
  COMMAND_PRIORITY_NORMAL,
  KEY_ENTER_COMMAND,
  LexicalEditor,
  TextNode,
} from "lexical";
import { $createParaNode } from "shared";

/** Opens the context menu the way a right-click does: a `contextmenu` event on a DESCENDANT of the
 * root element. The plugin deliberately ignores the root element itself, so targeting the root
 * would never open the menu. */
async function rightClick(rootElement: HTMLElement) {
  const target = rootElement.firstElementChild ?? rootElement;
  await act(async () => {
    target.dispatchEvent(new MouseEvent("contextmenu", { bubbles: true, cancelable: true }));
  });
}

/** Dispatches a real `keydown` on `document` — what the menu's own capture listener hears. Arrow
 * keys go through the document (not the editor root) because the menu, not the editor, is what is
 * being navigated. */
async function pressKeyOnDocument(key: string) {
  await act(async () => {
    document.dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true }));
  });
}

function menuList() {
  return document.querySelector(".typeahead-popover ul");
}

function menuItemTitles() {
  return Array.from(document.querySelectorAll(".typeahead-popover li .text")).map(
    (el) => el.textContent ?? "",
  );
}

function selectedMenuItemTitle() {
  return document.querySelector(".typeahead-popover li.selected .text")?.textContent;
}

async function openMenu(onSelect: () => void, isDisabled = false) {
  const { editor } = await baseTestEnvironment(
    () => {
      $getRoot().append($createParaNode().append($createTextNode("In the beginning")));
    },
    <ContextMenuPlugin options={[{ title: "Insert end note", onSelect, isDisabled }]} />,
  );
  const rootElement = editor.getRootElement();
  if (!rootElement) throw new Error("editor has no root element");
  await rightClick(rootElement);
  return { editor, rootElement };
}

async function openMenuWithEndNoteHighlighted(onSelect: () => void, isDisabled = false) {
  const { editor, rootElement } = await openMenu(onSelect, isDisabled);
  const indexOfEndNote = menuItemTitles().indexOf("Insert end note");
  expect(indexOfEndNote).toBeGreaterThanOrEqual(0);
  // Walk the highlight down onto the extra option, the way the user does.
  for (let i = 0; i <= indexOfEndNote; i++) await pressKeyOnDocument("ArrowDown");
  expect(selectedMenuItemTitle()).toBe("Insert end note");
  return { editor, rootElement };
}

describe("ContextMenuPlugin keyboard selection", () => {
  it("routes Enter to the highlighted menu item instead of letting Lexical claim the keystroke", async () => {
    const onSelect = vi.fn();
    /** Stands in for anything of Lexical's that acts on Enter (rich text's paragraph split, the
     * marker menu's `KEY_ENTER_COMMAND` claim). While the menu is open none of it may run. */
    const lexicalSawEnter = vi.fn();

    const { editor } = await openMenuWithEndNoteHighlighted(onSelect);
    editor.registerCommand(
      KEY_ENTER_COMMAND,
      () => {
        lexicalSawEnter();
        return true;
      },
      COMMAND_PRIORITY_NORMAL,
    );

    await pressKeyThroughDom(editor, "Enter");

    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(lexicalSawEnter).not.toHaveBeenCalled();
  });

  it("lets Lexical have Enter once the menu has closed", async () => {
    const lexicalSawEnter = vi.fn();
    const { editor } = await openMenuWithEndNoteHighlighted(vi.fn());
    editor.registerCommand(
      KEY_ENTER_COMMAND,
      () => {
        lexicalSawEnter();
        return true;
      },
      COMMAND_PRIORITY_NORMAL,
    );

    await pressKeyOnDocument("Escape");
    expect(menuList()).toBeNull();
    await pressKeyThroughDom(editor, "Enter");

    // The control for the test above: the harness DOES route Enter to Lexical when the menu is not
    // the one holding the keyboard, so "Lexical never saw Enter" there means the menu claimed it.
    expect(lexicalSawEnter).toHaveBeenCalled();
  });

  // The menu owns Enter for as long as it is up, not only while it holds something to invoke. A
  // press it hands back reaches an editor that still has DOM focus behind the menu, and a host that
  // gates its own Enter behavior on this menu would start a second keyboard mode over a menu that
  // is still armed.
  it("swallows Enter with nothing highlighted, leaving the menu open", async () => {
    const lexicalSawEnter = vi.fn();
    const { editor } = await openMenu(vi.fn());
    editor.registerCommand(
      KEY_ENTER_COMMAND,
      () => {
        lexicalSawEnter();
        return true;
      },
      COMMAND_PRIORITY_NORMAL,
    );
    expect(selectedMenuItemTitle()).toBeUndefined();

    await pressKeyThroughDom(editor, "Enter");

    expect(lexicalSawEnter).not.toHaveBeenCalled();
    expect(menuList()).not.toBeNull();
  });

  // Specifically NOT by handing the press back: a disabled highlighted option is still the menu
  // holding the keyboard, and letting Enter through there is the tempting wrong fix for its being a
  // dead key.
  it("swallows Enter on a disabled option without running it, leaving the menu open", async () => {
    const onSelect = vi.fn();
    const lexicalSawEnter = vi.fn();
    const { editor } = await openMenuWithEndNoteHighlighted(onSelect, true);
    editor.registerCommand(
      KEY_ENTER_COMMAND,
      () => {
        lexicalSawEnter();
        return true;
      },
      COMMAND_PRIORITY_NORMAL,
    );

    await pressKeyThroughDom(editor, "Enter");

    expect(onSelect).not.toHaveBeenCalled();
    expect(lexicalSawEnter).not.toHaveBeenCalled();
    expect(menuList()).not.toBeNull();
  });
});

describe("ContextMenuPlugin accessibility", () => {
  it("names the option list as a listbox so its options are announceable", async () => {
    await openMenuWithEndNoteHighlighted(vi.fn());

    const list = menuList();
    if (!list) throw new Error("menu list did not render");
    // `role="option"` is only meaningful inside a listbox; on a bare `ul` a screen reader has no
    // list to announce a position within.
    expect(list.getAttribute("role")).toBe("listbox");
    expect(list.getAttribute("aria-label")).toBeTruthy();
    expect(list.id).toBeTruthy();
  });

  it("points the focused editor at the highlighted option", async () => {
    const { rootElement } = await openMenuWithEndNoteHighlighted(vi.fn());

    // Focus stays in the contenteditable while the menu is open (that is what keeps the selection
    // the chosen item acts on), so the highlight has to be announced from there.
    const list = menuList();
    expect(rootElement.getAttribute("aria-controls")).toBe(list?.id);
    const highlighted = document.querySelector(".typeahead-popover li.selected");
    expect(highlighted?.id).toBeTruthy();
    expect(rootElement.getAttribute("aria-activedescendant")).toBe(highlighted?.id);
  });

  it("stops pointing at an option once the menu closes", async () => {
    const { rootElement } = await openMenuWithEndNoteHighlighted(vi.fn());

    await pressKeyOnDocument("Escape");

    expect(menuList()).toBeNull();
    expect(rootElement.hasAttribute("aria-activedescendant")).toBe(false);
    expect(rootElement.hasAttribute("aria-controls")).toBe(false);
  });
});

describe("ContextMenuPlugin scrolling", () => {
  it("stays open when the scroll happens INSIDE the menu", async () => {
    await openMenuWithEndNoteHighlighted(vi.fn());
    const list = menuList();
    if (!list) throw new Error("menu list did not render");

    // A real scroll event on an element does not bubble, but the plugin's close-on-scroll listener
    // is registered on `window` in CAPTURE phase, which fires for a descendant's non-bubbling
    // event all the same — so scrolling the menu's own list used to close the menu, leaving the
    // items below the fold unreachable by mouse.
    await act(async () => {
      list.dispatchEvent(new Event("scroll", { bubbles: false }));
    });

    expect(menuList()).not.toBeNull();
  });

  it("closes when the scroll happens outside the menu", async () => {
    const { rootElement } = await openMenuWithEndNoteHighlighted(vi.fn());

    // The case the close-on-scroll listener exists for: the page moves under a menu that is
    // positioned in fixed viewport coordinates, so the menu no longer points at anything.
    await act(async () => {
      rootElement.dispatchEvent(new Event("scroll", { bubbles: false }));
    });

    expect(menuList()).toBeNull();
  });
});


/**
 * The context menu's Cut/Copy dispatch the same commands the keyboard shortcuts do, so they are
 * covered by the same empty-copy guard (`registerEmptyCopyGuard`). This pins that the leg really
 * does go through it, rather than dispatching around it — both in the shape the shipped editors
 * mount (alongside `ClipboardPlugin`, which registers the guard too) and with `ContextMenuPlugin`
 * mounted alone, which a host consuming the plugin on its own is free to do.
 *
 * Note where `onSelect` runs: inside `editor.update()` (see the plugin's Enter handler). That is
 * why the guard has to live on the COMMAND and read the live selection — a check in front of the
 * dispatch reading the last committed state would be both stale and, via `editor.read()`, unsafe
 * to call from there.
 *
 * `document.execCommand("copy")` is the observable, as everywhere else in this suite: called means
 * a clipboard write reached the browser, not called means the clipboard is untouched.
 */
let execCommand: ReturnType<typeof vi.fn>;

beforeEach(() => {
  execCommand = vi.fn(() => true);
  Object.defineProperty(document, "execCommand", {
    configurable: true,
    writable: true,
    value: execCommand,
  });
});

afterEach(async () => {
  // Drain `@lexical/clipboard`'s module-level `EVENT_LATENCY` (50ms) handle, which otherwise makes
  // a test that reached the real copy path silence the next test's assertion.
  await new Promise((resolve) => setTimeout(resolve, 60));
  Reflect.deleteProperty(document, "execCommand");
});

async function contextMenuEnvironment(
  withClipboardPlugin = true,
): Promise<{ editor: LexicalEditor; text: TextNode }> {
  let text: TextNode | undefined;
  const { editor } = await baseTestEnvironment(
    () => {
      text = $createTextNode("In the beginning");
      $getRoot().append($createParaNode("p").append(text));
    },
    <>
      {withClipboardPlugin && <ClipboardPlugin />}
      <ContextMenuPlugin />
    </>,
  );
  if (!text) throw new Error("expected the initial text node to exist");
  return { editor, text };
}

/**
 * Opens the context menu over the editor's content and activates the option at `index` the way a
 * keyboard user would (the plugin's own arrow/Enter handling), rather than by reaching for the
 * rendered menu's markup. Built-in order: Cut, Copy, Paste, Paste as Plain Text.
 */
async function chooseContextMenuOption(editor: LexicalEditor, index: number): Promise<void> {
  const rootElement = editor.getRootElement();
  const target = rootElement?.firstElementChild;
  if (!target) throw new Error("expected the editor to have rendered content to right-click");
  await act(async () => {
    target.dispatchEvent(new MouseEvent("contextmenu", { bubbles: true, cancelable: true }));
  });
  for (let step = 0; step <= index; step++) {
    await act(async () => {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }));
    });
  }
  await act(async () => {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
  });
}

const COPY_OPTION = 1;
const CUT_OPTION = 0;

describe("ContextMenuPlugin — Cut/Copy go through the empty-copy guard", () => {
  it("Copy with a collapsed caret leaves the clipboard untouched", async () => {
    const { editor, text } = await contextMenuEnvironment();
    await act(async () => editor.update(() => text.select(3, 3)));

    await chooseContextMenuOption(editor, COPY_OPTION);

    expect(execCommand).not.toHaveBeenCalled();
  });

  it("Cut with a collapsed caret leaves the clipboard untouched and removes nothing", async () => {
    const { editor, text } = await contextMenuEnvironment();
    await act(async () => editor.update(() => text.select(3, 3)));

    await chooseContextMenuOption(editor, CUT_OPTION);

    expect(execCommand).not.toHaveBeenCalled();
    editor.getEditorState().read(() => expect(text.getTextContent()).toBe("In the beginning"));
  });

  it("Copy with a selection copies — the menu leg is really wired to the command", async () => {
    const { editor, text } = await contextMenuEnvironment();
    await act(async () => editor.update(() => text.select(0, text.getTextContentSize())));

    await chooseContextMenuOption(editor, COPY_OPTION);

    expect(execCommand).toHaveBeenCalledWith("copy");
  });
});

describe("ContextMenuPlugin mounted without ClipboardPlugin", () => {
  it("Copy with a collapsed caret still leaves the clipboard untouched — the plugin carries its own guard", async () => {
    const { editor, text } = await contextMenuEnvironment(false);
    await act(async () => editor.update(() => text.select(3, 3)));

    await chooseContextMenuOption(editor, COPY_OPTION);

    expect(execCommand).not.toHaveBeenCalled();
  });

  it("Copy with a selection still copies — the standalone guard does not over-claim", async () => {
    const { editor, text } = await contextMenuEnvironment(false);
    await act(async () => editor.update(() => text.select(0, text.getTextContentSize())));

    await chooseContextMenuOption(editor, COPY_OPTION);

    expect(execCommand).toHaveBeenCalledWith("copy");
  });
});
