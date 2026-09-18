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

/**
 * Gives the portalled menu the measured size and the laid-out position that jsdom has neither of,
 * standing in for a browser's layout: the menu's `left`/`top` are written in the units of whatever
 * establishes its containing block, so the reported viewport position is those offsets scaled by
 * the parent's zoom and shifted by `origin`. `origin` is where that containing block starts — the
 * viewport's own 0,0 unless an ancestor's `transform` (or `filter`, `contain`, …) has taken the
 * role over. Instance stubs on individual containers still win, since they shadow the prototype.
 * Returns a restore function.
 */
function stubMenuLayout(
  width: number,
  height: number,
  origin: { left: number; top: number } = { left: 0, top: 0 },
): () => void {
  const original = Element.prototype.getBoundingClientRect;
  Element.prototype.getBoundingClientRect = function stubbed(this: Element) {
    if (!(this instanceof HTMLElement) || !this.classList.contains("auto-embed-menu"))
      return original.call(this);
    const zoom = this.parentElement?.currentCSSZoom ?? 1;
    const left = zoom * (Number.parseFloat(this.style.left) || 0) + origin.left;
    const top = zoom * (Number.parseFloat(this.style.top) || 0) + origin.top;
    return {
      left,
      top,
      width,
      height,
      right: left + width,
      bottom: top + height,
      x: left,
      y: top,
      toJSON: () => ({}),
    } as DOMRect;
  };
  return () => {
    Element.prototype.getBoundingClientRect = original;
  };
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
    // The container is larger than the jsdom viewport (1024x768), so the visible box reduces to
    // the viewport itself, and a 200x100 menu at 300/400 sits well within it; no clamping applies
    // here, so the division is what is under test.
    const container = stubbedContainer(2, { left: 0, top: 0, width: 10000, height: 10000 });
    const { editor } = await contextMenuEnvironment(() => container);

    const restoreMenuLayout = stubMenuLayout(200, 100);
    try {
      const menu = await openMenu(editor, 300, 400);

      // The menu must sit at viewport (300, 400); inside a zoom:2 element that is left/top
      // 150/200, and since the viewport is the containing block that is where it lands.
      expect(menu.style.left).toBe("150px");
      expect(menu.style.top).toBe("200px");
    } finally {
      restoreMenuLayout();
    }
  });

  it("shifts the menu back when the containing block is not the viewport", async () => {
    const container = stubbedContainer(2, { left: 0, top: 0, width: 10000, height: 10000 });
    const { editor } = await contextMenuEnvironment(() => container);

    // An ancestor carrying a transform takes over as the containing block, so the menu's offsets
    // are measured from (120, 60) instead of from the viewport's corner.
    const restoreMenuLayout = stubMenuLayout(200, 100, { left: 120, top: 60 });
    try {
      const menu = await openMenu(editor, 300, 400);

      // Written straight, 150/200 would land at 2*150 + 120 = 420 and 2*200 + 60 = 460. Taking
      // the error back out in pre-zoom units gives (300 - 120)/2 = 90 and (400 - 60)/2 = 170,
      // which render at 2*90 + 120 = 300 and 2*170 + 60 = 400: the point that was right-clicked.
      expect(menu.style.left).toBe("90px");
      expect(menu.style.top).toBe("170px");
    } finally {
      restoreMenuLayout();
    }
  });

  it("does not read the menu's placement back when there is no container", async () => {
    const { editor } = await contextMenuEnvironment();

    // The same displaced containing block. Portalled to `document.body` the menu is placed in
    // plain viewport pixels, so the coordinates are written once and left alone.
    const restoreMenuLayout = stubMenuLayout(200, 100, { left: 120, top: 60 });
    try {
      const menu = await openMenu(editor, 300, 400);

      expect(menu.style.left).toBe("300px");
      expect(menu.style.top).toBe("400px");
    } finally {
      restoreMenuLayout();
    }
  });

  it("does not divide when there is no container", async () => {
    const { editor } = await contextMenuEnvironment();

    const menu = await openMenu(editor, 300, 400);

    expect(menu.style.left).toBe("300px");
    expect(menu.style.top).toBe("400px");
  });

  it("clamps into the container's box rather than the viewport", async () => {
    // A narrow container far from the viewport's right edge. Zoom 1 isolates the clamp.
    const container = stubbedContainer(1, { left: 0, top: 0, width: 400, height: 400 });
    const { editor } = await contextMenuEnvironment(() => container);

    // The menu is measured at 200x100; jsdom otherwise reports zero and lets any left through.
    const restoreMenuLayout = stubMenuLayout(200, 100);
    try {
      // Right-click near the container's right edge.
      const menu = await openMenu(editor, 380, 10);

      // Without container clamping it would sit at 380; clamped, it's min(380, 400 - 200) = 200.
      expect(menu.style.left).toBe("200px");
    } finally {
      restoreMenuLayout();
    }
  });

  it("clamps against a clipping ancestor, not just the container", async () => {
    // The pane: a short scroll parent that clips.
    const pane = document.createElement("div");
    pane.style.overflow = "auto";
    pane.getBoundingClientRect = () =>
      ({
        left: 0,
        top: 0,
        width: 400,
        height: 300,
        right: 400,
        bottom: 300,
        x: 0,
        y: 0,
        toJSON: () => ({}),
      }) as DOMRect;
    document.body.append(pane);

    // The container: the scrollable content, far taller than the pane that clips it.
    const container = stubbedContainer(1, { left: 0, top: 0, width: 400, height: 5000 });
    pane.append(container);

    const { editor } = await contextMenuEnvironment(() => container);

    // The menu is measured at 200x100; jsdom otherwise reports zero and lets any top through.
    const restoreMenuLayout = stubMenuLayout(200, 100);
    try {
      // Right-click near the pane's bottom edge.
      const menu = await openMenu(editor, 10, 290);

      // The container alone allows min(290, 5000 - 100) = 290; the pane clamps it to
      // min(290, 300 - 100) = 200, proving the ancestor walk, not just the container, bounds it.
      expect(menu.style.top).toBe("200px");
    } finally {
      restoreMenuLayout();
    }
  });

  it("caps its height at the visible box divided by the zoom factor", async () => {
    // A 300px-tall pane at zoom 2: the menu's own max-height must be 150 pre-zoom pixels.
    const container = stubbedContainer(2, { left: 0, top: 0, width: 400, height: 300 });
    const { editor } = await contextMenuEnvironment(() => container);

    const restoreMenuLayout = stubMenuLayout(200, 100);
    try {
      const menu = await openMenu(editor, 10, 10);

      expect(menu.style.maxHeight).toBe("150px");
      expect(menu.style.overflowY).toBe("auto");
    } finally {
      restoreMenuLayout();
    }
  });

  it("sets no height cap when there is no container", async () => {
    const { editor } = await contextMenuEnvironment();

    const menu = await openMenu(editor, 10, 10);

    expect(menu.style.maxHeight).toBe("");
  });

  it("stays open while the user scrolls the menu itself", async () => {
    const { editor } = await contextMenuEnvironment();

    const menu = await openMenu(editor, 10, 10);
    const list = menu.querySelector("ul");
    if (!list) throw new Error("no menu list to scroll");

    await act(async () => {
      list.dispatchEvent(new Event("scroll"));
    });

    expect(document.querySelector(".auto-embed-menu")).not.toBeNull();
  });

  it("closes when the page scrolls beneath it", async () => {
    const { editor } = await contextMenuEnvironment();

    await openMenu(editor, 10, 10);

    await act(async () => {
      document.dispatchEvent(new Event("scroll"));
    });

    expect(document.querySelector(".auto-embed-menu")).toBeNull();
  });
});
