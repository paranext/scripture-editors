import { ContextMenuPlugin } from "./ContextMenuPlugin";
import { baseTestEnvironment } from "./react-test.utils";
import { act, fireEvent } from "@testing-library/react";
import { $createTextNode, $getRoot, LexicalEditor } from "lexical";
import { $createParaNode } from "shared";

/** Mounts the plugin over a one-paragraph document, optionally with a portal container getter. */
async function contextMenuEnvironment(
  getContainer?: () => HTMLElement | undefined,
): Promise<{ editor: LexicalEditor }> {
  return baseTestEnvironment(
    () => {
      $getRoot().append($createParaNode("p").append($createTextNode("hello")));
    },
    <ContextMenuPlugin getContainer={getContainer} />,
  );
}

/**
 * Fires a `contextmenu` at the given viewport point on a node INSIDE the editor root. The plugin
 * ignores events whose target is the root element itself, so the first child is used.
 */
async function openMenu(
  editor: LexicalEditor,
  clientX: number,
  clientY: number,
): Promise<HTMLDivElement> {
  const root = editor.getRootElement();
  if (!root) throw new Error("editor root element not found");
  const target = root.firstElementChild ?? root;

  await act(async () => {
    target.dispatchEvent(
      new MouseEvent("contextmenu", { bubbles: true, cancelable: true, clientX, clientY }),
    );
  });

  const menu = document.querySelector<HTMLDivElement>(".auto-embed-menu");
  if (!menu) throw new Error("context menu did not open");
  return menu;
}

/** Presses Escape on the document, the same way the plugin's own Escape handler closes the menu. */
async function closeMenuWithEscape(): Promise<void> {
  await act(async () => {
    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true, cancelable: true }),
    );
  });
}

/**
 * A container element with `currentCSSZoom` and `getBoundingClientRect` stubbed, since jsdom
 * implements neither zoom nor layout. `rect` is the container's box in viewport pixels.
 */
function stubbedContainer(
  zoom: number,
  rect: { left: number; top: number; width: number; height: number },
): HTMLElement {
  const container = document.createElement("div");
  document.body.append(container);
  Object.defineProperty(container, "currentCSSZoom", { value: zoom, configurable: true });
  container.getBoundingClientRect = () =>
    ({
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
      right: rect.left + rect.width,
      bottom: rect.top + rect.height,
      x: rect.left,
      y: rect.top,
      toJSON: () => ({}),
    }) as DOMRect;
  return container;
}

describe("ContextMenuPlugin", () => {
  it("portals to document.body when no container getter is supplied", async () => {
    const { editor } = await contextMenuEnvironment();

    const menu = await openMenu(editor, 10, 10);

    expect(menu.parentElement).toBe(document.body);
  });

  it("portals into the element the container getter returns", async () => {
    const container = document.createElement("div");
    document.body.append(container);

    const { editor } = await contextMenuEnvironment(() => container);

    const menu = await openMenu(editor, 10, 10);

    expect(container.contains(menu)).toBe(true);
  });

  it("portals to document.body when the container getter returns undefined", async () => {
    const { editor } = await contextMenuEnvironment(() => undefined);

    const menu = await openMenu(editor, 10, 10);

    expect(menu.parentElement).toBe(document.body);
  });

  it("re-resolves the container the next time the menu opens", async () => {
    const containerA = document.createElement("div");
    const containerB = document.createElement("div");
    document.body.append(containerA, containerB);
    let opens = 0;
    const getContainer = () => (opens++ === 0 ? containerA : containerB);

    const { editor } = await contextMenuEnvironment(getContainer);

    const firstMenu = await openMenu(editor, 10, 10);
    expect(containerA.contains(firstMenu)).toBe(true);

    await closeMenuWithEscape();

    const secondMenu = await openMenu(editor, 20, 20);
    expect(containerB.contains(secondMenu)).toBe(true);
  });

  it("keeps the menu in the container resolved at open time across a re-render", async () => {
    const containerA = document.createElement("div");
    const containerB = document.createElement("div");
    document.body.append(containerA, containerB);
    let opens = 0;
    const getContainer = () => (opens++ === 0 ? containerA : containerB);

    const { editor } = await contextMenuEnvironment(getContainer);

    const menu = await openMenu(editor, 10, 10);
    expect(containerA.contains(menu)).toBe(true);

    // Hovering an item re-renders the plugin (it tracks the hovered/selected index) without
    // closing the menu. Confirm the hover actually re-rendered before trusting the container
    // assertion below, or a component that ignores hover entirely would pass this test for free.
    const item = menu.querySelector("li");
    if (!item) throw new Error("no menu item to hover");
    await act(async () => {
      fireEvent.mouseEnter(item);
    });
    expect(item.getAttribute("aria-selected")).toBe("true");

    expect(containerA.contains(menu)).toBe(true);
    expect(containerB.contains(menu)).toBe(false);
  });

  it("divides its coordinates by the container's zoom factor", async () => {
    // A large container so no clamping applies; the division is what is under test.
    const container = stubbedContainer(2, { left: 0, top: 0, width: 10000, height: 10000 });
    const { editor } = await contextMenuEnvironment(() => container);

    const menu = await openMenu(editor, 300, 400);

    // The menu must sit at viewport (300, 400); inside a zoom:2 element that is left/top 150/200.
    expect(menu.style.left).toBe("150px");
    expect(menu.style.top).toBe("200px");
  });

  it("does not divide when there is no container", async () => {
    const { editor } = await contextMenuEnvironment();

    const menu = await openMenu(editor, 300, 400);

    expect(menu.style.left).toBe("300px");
    expect(menu.style.top).toBe("400px");
  });
});
