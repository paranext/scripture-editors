/**
 * Typing into a hidden-marker view keeps `\` and `//` out of the text: a typed `\` is refused, and
 * so is a typed `/` that would touch a `/` beside it; a lone `/` goes in. Each refused keystroke is
 * reported to the host once through `onUnstorableTextRemoved`. Standard view stores a typed `\` as
 * the start of a marker, so nothing there is refused or reported.
 */
import { MountedEditor, editorView, mountInView } from "./editorViews.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $setSelection,
  CONTROLLED_TEXT_INSERTION_COMMAND,
} from "lexical";
import { UnstorableTextRemovedHandler } from "shared-react";

function usjWith(verseText: string): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: [] },
      { type: "chapter", marker: "c", number: "1" },
      {
        type: "para",
        marker: "p",
        content: [{ type: "verse", marker: "v", number: "1" }, verseText],
      },
    ],
  };
}

/**
 * Mounts `verseText` in `viewName` and selects from `anchor` to `focus` (offsets into
 * `verseText`; `focus` defaults to a collapsed caret).
 */
async function mount(
  viewName: string,
  verseText: string,
  anchor: number,
  focus = anchor,
): Promise<{ mounted: MountedEditor; onRemoved: ReturnType<typeof vi.fn> }> {
  const onRemoved = vi.fn<UnstorableTextRemovedHandler>();
  const mounted = await mountInView(usjWith(verseText), editorView(viewName), {
    onUnstorableTextRemoved: onRemoved,
  });
  await act(async () =>
    mounted.lexical.update(
      () => {
        const node = $getRoot()
          .getAllTextNodes()
          .find((text) => text.getType() === "text" && text.getTextContent().includes(verseText));
        if (!node) throw new Error("verse text not found");
        const start = node.getTextContent().indexOf(verseText);
        const selection = $createRangeSelection();
        selection.anchor.set(node.getKey(), start + anchor, "text");
        selection.focus.set(node.getKey(), start + focus, "text");
        $setSelection(selection);
      },
      { discrete: true },
    ),
  );
  return { mounted, onRemoved };
}

/** Puts the editor's selection into the DOM, where Lexical reads it back on `beforeinput`. */
function syncDomSelection({ lexical }: MountedEditor): void {
  const points = lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) return undefined;
    return [selection.anchor, selection.focus].map((point) => ({
      key: point.key,
      offset: point.offset,
    }));
  });
  if (!points) return;
  const [anchor, focus] = points.map(({ key, offset }) => {
    const text = lexical.getElementByKey(key)?.firstChild;
    if (!text) throw new Error("no DOM text for the selection");
    return [text, offset] as const;
  });
  document.getSelection()?.setBaseAndExtent(...anchor, ...focus);
}

/**
 * Types `character` as a keyboard does: a `keydown`, and unless that was refused, the `beforeinput`
 * for it, and unless Lexical took that, the insertion the browser would make. Returns whether the
 * `keydown` was refused.
 */
async function type(mounted: MountedEditor, character: string): Promise<boolean> {
  const root = mounted.lexical.getRootElement();
  if (!root) throw new Error("editor root not found");
  let isRefused = false;
  await act(async () => {
    syncDomSelection(mounted);
    const keydown = new KeyboardEvent("keydown", {
      key: character,
      bubbles: true,
      cancelable: true,
    });
    root.dispatchEvent(keydown);
    isRefused = keydown.defaultPrevented;
    if (isRefused) return;
    const beforeInput = new InputEvent("beforeinput", {
      inputType: "insertText",
      data: character,
      bubbles: true,
      cancelable: true,
    });
    root.dispatchEvent(beforeInput);
    if (!beforeInput.defaultPrevented)
      mounted.lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, character);
  });
  return isRefused;
}

/** Dispatches the `beforeinput` of typed `data` alone, as a virtual keyboard may. */
async function inputWithoutKeydown(mounted: MountedEditor, data: string): Promise<InputEvent> {
  const root = mounted.lexical.getRootElement();
  if (!root) throw new Error("editor root not found");
  const beforeInput = new InputEvent("beforeinput", {
    inputType: "insertText",
    data,
    bubbles: true,
    cancelable: true,
  });
  await act(async () => {
    syncDomSelection(mounted);
    root.dispatchEvent(beforeInput);
  });
  return beforeInput;
}

function textOf(content: MarkerContent[] | undefined): string {
  return (content ?? [])
    .map((item) =>
      typeof item === "string" ? item : item.type === "char" ? textOf(item.content) : "",
    )
    .join("");
}

/** The text of each `\p` paragraph the editor would save. */
function savedParas({ ref }: MountedEditor): string[] {
  const saved = ref.current?.getUsj();
  if (!saved) throw new Error("no USJ");
  return saved.content
    .filter((item): item is MarkerObject => typeof item !== "string" && item.type === "para")
    .map((para) => textOf(para.content));
}

describe.each(["paragraph-structure", "formatted"])("typing into %s view", (viewName) => {
  it("types a lone `/`, telling no one", async () => {
    const { mounted, onRemoved } = await mount(viewName, "and or", 3);

    expect(await type(mounted, "/")).toBe(false);

    expect(savedParas(mounted)).toEqual(["and/ or"]);
    expect(onRemoved).not.toHaveBeenCalled();
  });

  it.each([
    ["before", "a/b", 2],
    ["after", "a/b", 1],
  ])("refuses a `/` with a `/` just %s the caret, and says so once", async (_, text, offset) => {
    const { mounted, onRemoved } = await mount(viewName, text, offset);

    expect(await type(mounted, "/")).toBe(true);

    expect(savedParas(mounted)).toEqual([text]);
    expect(onRemoved).toHaveBeenCalledTimes(1);
    expect(onRemoved).toHaveBeenCalledWith({ source: "typing", removed: ["//"] });
  });

  it("refuses a `\\`, and says so once", async () => {
    const { mounted, onRemoved } = await mount(viewName, "ab", 1);

    expect(await type(mounted, "\\")).toBe(true);

    expect(savedParas(mounted)).toEqual(["ab"]);
    expect(onRemoved).toHaveBeenCalledTimes(1);
    expect(onRemoved).toHaveBeenCalledWith({ source: "typing", removed: ["\\"] });
  });

  it("judges a `/` typed over a selection by what will touch it, not by what it replaces", async () => {
    const { mounted, onRemoved } = await mount(viewName, "a/bc/d", 1, 5);

    expect(await type(mounted, "/")).toBe(false);

    expect(savedParas(mounted)).toEqual(["a/d"]);
    expect(onRemoved).not.toHaveBeenCalled();
  });

  it("refuses a `/` typed over a selection that a `/` touches, keeping the selection", async () => {
    const { mounted, onRemoved } = await mount(viewName, "a/bc/d", 2, 4);

    expect(await type(mounted, "/")).toBe(true);

    expect(savedParas(mounted)).toEqual(["a/bc/d"]);
    expect(onRemoved).toHaveBeenCalledTimes(1);
    expect(onRemoved).toHaveBeenCalledWith({ source: "typing", removed: ["//"] });
  });

  it("lets a shortcut chord on `/` through, telling no one", async () => {
    const { mounted, onRemoved } = await mount(viewName, "a/b", 2);
    const root = mounted.lexical.getRootElement();
    if (!root) throw new Error("editor root not found");
    const keydown = new KeyboardEvent("keydown", {
      key: "/",
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });

    await act(async () => {
      root.dispatchEvent(keydown);
    });

    expect(keydown.defaultPrevented).toBe(false);
    expect(onRemoved).not.toHaveBeenCalled();
  });

  it("refuses a `\\` typed with AltGr (Ctrl+Alt), as some keyboard layouts type it", async () => {
    const { mounted, onRemoved } = await mount(viewName, "ab", 1);
    const root = mounted.lexical.getRootElement();
    if (!root) throw new Error("editor root not found");
    const keydown = new KeyboardEvent("keydown", {
      key: "\\",
      ctrlKey: true,
      altKey: true,
      bubbles: true,
      cancelable: true,
    });

    await act(async () => {
      root.dispatchEvent(keydown);
    });

    expect(keydown.defaultPrevented).toBe(true);
    expect(onRemoved).toHaveBeenCalledWith({ source: "typing", removed: ["\\"] });
  });

  it("refuses a `\\` that arrives with no keydown, as from a virtual keyboard", async () => {
    const { mounted, onRemoved } = await mount(viewName, "ab", 1);

    const beforeInput = await inputWithoutKeydown(mounted, "\\");

    expect(beforeInput.defaultPrevented).toBe(true);
    expect(savedParas(mounted)).toEqual(["ab"]);
    expect(onRemoved).toHaveBeenCalledTimes(1);
    expect(onRemoved).toHaveBeenCalledWith({ source: "typing", removed: ["\\"] });
  });

  it("refuses a `/` that arrives with no keydown beside a `/`", async () => {
    const { mounted, onRemoved } = await mount(viewName, "a/b", 2);

    const beforeInput = await inputWithoutKeydown(mounted, "/");

    expect(beforeInput.defaultPrevented).toBe(true);
    expect(savedParas(mounted)).toEqual(["a/b"]);
    expect(onRemoved).toHaveBeenCalledTimes(1);
    expect(onRemoved).toHaveBeenCalledWith({ source: "typing", removed: ["//"] });
  });

  it("inserts typed text Lexical inserts itself without its `\\` and `//`, saying so once", async () => {
    const { mounted, onRemoved } = await mount(viewName, "ab", 1);

    await act(async () => {
      mounted.lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "x//y\\z");
    });

    expect(savedParas(mounted)).toEqual(["axyzb"]);
    expect(onRemoved).toHaveBeenCalledTimes(1);
    expect(onRemoved).toHaveBeenCalledWith({ source: "typing", removed: ["//", "\\"] });
  });

  it("puts in a replacement (autocorrect, spelling) without its `\\`, saying so once", async () => {
    const { mounted, onRemoved } = await mount(viewName, "ab", 1);

    // What Lexical's own `beforeinput` handler hands on for a replacement, once it has moved the
    // selection to the replaced text. jsdom's `InputEvent` lacks `getTargetRanges`, so Lexical
    // listens for no `beforeinput` here and the command is dispatched directly.
    await act(async () => {
      mounted.lexical.dispatchCommand(
        CONTROLLED_TEXT_INSERTION_COMMAND,
        new InputEvent("beforeinput", { inputType: "insertReplacementText", data: "x\\y" }),
      );
    });

    expect(savedParas(mounted)).toEqual(["axyb"]);
    expect(onRemoved).toHaveBeenCalledTimes(1);
    expect(onRemoved).toHaveBeenCalledWith({ source: "typing", removed: ["\\"] });
  });
});

describe("typing into Standard view", () => {
  it("lets a typed `\\` reach the marker-edit engine, telling no one", async () => {
    const { mounted, onRemoved } = await mount("standard", "ab", 1);

    expect(await type(mounted, "\\")).toBe(false);

    expect(mounted.lexical.getEditorState().read(() => $getRoot().getTextContent())).toContain(
      "a\\b",
    );
    expect(onRemoved).not.toHaveBeenCalled();
  });
});
