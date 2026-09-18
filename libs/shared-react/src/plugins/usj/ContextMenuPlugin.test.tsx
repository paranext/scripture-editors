import { ContextMenuPlugin } from "./ContextMenuPlugin";
import { baseTestEnvironment } from "./react-test.utils";
import { act } from "@testing-library/react";
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
});
