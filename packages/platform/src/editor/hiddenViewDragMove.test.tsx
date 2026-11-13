/**
 * A drag-move in a hidden-marker view never loses what was dragged, and lands where it was dropped.
 * A move removes the dragged text first (`deleteByDrag`) and then inserts it at the drop point
 * (`insertFromDrop`), where the insertion leaves out a `/` that would touch a `/` (or an optional
 * line break, stored as `//`) beside it. So a move whose text would lose any character at the drop
 * point is refused at the drop, before anything is removed, and the host is told once
 * (`source: "move"`). A move within the editor that loses nothing is made by the editor itself, in
 * one undo step, at the drop point. A copy-drop (Ctrl held; Option on macOS), a drop from outside
 * the document, and a move from other editable content of the document that loses nothing are left
 * to the browser, and the insertion's filter.
 *
 * jsdom has no native drag and drop: each test dispatches the `dragstart` and `drop` the browser
 * would, answers `caretRangeFromPoint` with the drop point, and, for a drop the editor did not take,
 * replays the browser's removal (for a move) and insertion as the commands Lexical dispatches for
 * them.
 */
import { MountedEditor, editorView, mountInView } from "./editorViews.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { IS_APPLE } from "@lexical/utils";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $setSelection,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  LexicalEditor,
  REMOVE_TEXT_COMMAND,
  TextNode,
  UNDO_COMMAND,
} from "lexical";
import { StructureProtectionMode, UnstorableTextRemovedHandler } from "shared-react";

const VERSE_1: MarkerContent = { type: "verse", marker: "v", number: "1" };

/** `\id`, `\c 1`, then one `\p` starting with `\v 1` and holding `content`. */
function usjWith(...content: MarkerContent[]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: [] },
      { type: "chapter", marker: "c", number: "1" },
      { type: "para", marker: "p", content: [VERSE_1, ...content] },
    ],
  };
}

interface Flavors {
  [type: string]: string | undefined;
}

/** A stand-in for a drag's data: jsdom has no `DataTransfer`. */
function transfer(flavors: Flavors): DataTransfer {
  return {
    types: Object.keys(flavors),
    files: [],
    getData: (type: string) => flavors[type] ?? "",
  } as unknown as DataTransfer;
}

/** What a drag of `text` within the editor carries: the browser's html and plain text of it. */
function dragged(text: string): Flavors {
  return { "text/html": `<span>${text}</span>`, "text/plain": text };
}

/** A place in the text: `offset` characters into the stored text node holding exactly `text`. */
interface At {
  text: string;
  offset: number;
}

function $textNodeHolding(text: string): TextNode {
  const node = $getRoot()
    .getAllTextNodes()
    .find((candidate) => candidate.getType() === "text" && candidate.getTextContent() === text);
  if (!node) throw new Error(`no text node holding ${JSON.stringify(text)}`);
  return node;
}

async function select(lexical: LexicalEditor, from: At, to: At = from): Promise<void> {
  await act(async () =>
    lexical.update(
      () => {
        const selection = $createRangeSelection();
        selection.anchor.set($textNodeHolding(from.text).getKey(), from.offset, "text");
        selection.focus.set($textNodeHolding(to.text).getKey(), to.offset, "text");
        $setSelection(selection);
      },
      { discrete: true },
    ),
  );
}

/** The DOM position of `at`, as `caretRangeFromPoint` answers for a drop there. */
function domRangeAt(lexical: LexicalEditor, at: At): Range {
  const key = lexical.getEditorState().read(() => $textNodeHolding(at.text).getKey());
  const textElement = lexical.getElementByKey(key);
  const domText = textElement?.firstChild;
  if (!domText) throw new Error(`no DOM text for ${JSON.stringify(at.text)}`);
  const range = document.createRange();
  range.setStart(domText, at.offset);
  range.collapse(true);
  return range;
}

interface DragMove {
  /** What is selected and dragged. */
  from: At;
  to: At;
  /** Where it is dropped, in the text before the drag. */
  dropAt: At;
  /** The same place once the dragged text is gone, where the browser inserts it; left out for a
   * drop the editor takes. */
  landAt?: At;
  flavors: Flavors;
  /** Held for a copy-drop: Ctrl, or Option on macOS. */
  isCopy?: boolean;
  /** Where the drag starts; the editor's root when left out, `null` for another program. */
  dragSource?: Element | null;
}

/**
 * Drags `from`…`to` and drops it at `dropAt`, as the browser does. Returns whether the editor took
 * the drop (prevented its default), in which case the browser does nothing more; otherwise the
 * browser's removal of the dragged text (for a move) and its insertion at `landAt` follow.
 */
async function dragAndDrop(mounted: MountedEditor, move: DragMove): Promise<boolean> {
  const { lexical } = mounted;
  const root = lexical.getRootElement();
  if (!root) throw new Error("no root element");
  await select(lexical, move.from, move.to);
  const dropRange = domRangeAt(lexical, move.dropAt);
  const source = move.dragSource === undefined ? root : move.dragSource;
  const modifier = move.isCopy ? (IS_APPLE ? { altKey: true } : { ctrlKey: true }) : {};
  const data = transfer(move.flavors);
  // jsdom's drag events carry no data.
  const withData = (event: DragEvent) => {
    Object.defineProperty(event, "dataTransfer", { value: data });
    return event;
  };

  Object.defineProperty(document, "caretRangeFromPoint", {
    configurable: true,
    value: () => dropRange,
  });
  try {
    await act(async () => {
      source?.dispatchEvent(
        withData(new DragEvent("dragstart", { bubbles: true, cancelable: true })),
      );
    });
    const drop = withData(new DragEvent("drop", { bubbles: true, cancelable: true }));
    // jsdom's `DragEvent` takes no mouse event fields.
    for (const [field, value] of Object.entries({ clientX: 10, clientY: 10, ...modifier }))
      Object.defineProperty(drop, field, { value });
    await act(async () => {
      root.dispatchEvent(drop);
    });
    if (drop.defaultPrevented) return true;
    if (!move.landAt) throw new Error("the editor left the drop to the browser, with no landAt");

    const isMove = !!source && !move.isCopy;
    if (isMove)
      await act(async () => {
        lexical.update(() => {
          lexical.dispatchCommand(
            REMOVE_TEXT_COMMAND,
            new InputEvent("beforeinput", { inputType: "deleteByDrag", cancelable: true }),
          );
        });
      });
    await select(lexical, move.landAt);
    await act(async () => {
      lexical.update(() => {
        lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, {
          inputType: "insertFromDrop",
          dataTransfer: data,
          preventDefault: () => undefined,
        } as unknown as InputEvent);
      });
    });
    return false;
  } finally {
    await act(async () => {
      source?.dispatchEvent(withData(new DragEvent("dragend", { bubbles: true })));
    });
    Reflect.deleteProperty(document, "caretRangeFromPoint");
  }
}

function textOf(content: MarkerContent[] | undefined): string {
  return (content ?? [])
    .map((item) => {
      if (typeof item === "string") return item;
      if (item.type === "optbreak") return "|";
      return item.type === "char" ? textOf(item.content) : "";
    })
    .join("");
}

/** The text of each `\p` paragraph the editor would save; `|` for an optional line break. */
function savedParas({ ref }: MountedEditor): string[] {
  const saved = ref.current?.getUsj();
  if (!saved) throw new Error("no USJ");
  return saved.content
    .filter((item): item is MarkerObject => typeof item !== "string" && item.type === "para")
    .map((para) => textOf(para.content));
}

async function mount(
  viewName: string,
  structureProtectionMode: StructureProtectionMode,
  ...content: MarkerContent[]
) {
  const onRemoved = vi.fn<UnstorableTextRemovedHandler>();
  const mounted = await mountInView(usjWith(...content), editorView(viewName), {
    structureProtectionMode,
    onUnstorableTextRemoved: onRemoved,
  });
  return { mounted, onRemoved };
}

const REFUSED_MOVE = { source: "move", removed: ["//"] };

describe.each(["paragraph-structure", "formatted"])("a drag-move in %s view", (viewName) => {
  describe.each<StructureProtectionMode>(["off", "guarded"])("with structure %s", (mode) => {
    describe.each([
      ["html and plain text", dragged],
      ["plain text only", (text: string): Flavors => ({ "text/plain": text })],
    ])("carrying %s", (_flavorsName, flavorsOf) => {
      it("refuses a lone `/` dropped against a `/`, keeping it where it was", async () => {
        const { mounted, onRemoved } = await mount(viewName, mode, "a/b c/ d");

        const isTaken = await dragAndDrop(mounted, {
          from: { text: "a/b c/ d", offset: 1 },
          to: { text: "a/b c/ d", offset: 2 },
          dropAt: { text: "a/b c/ d", offset: 6 },
          landAt: { text: "ab c/ d", offset: 5 },
          flavors: flavorsOf("/"),
        });

        expect(savedParas(mounted)).toEqual(["a/b c/ d"]);
        expect(isTaken).toBe(true);
        expect(onRemoved).toHaveBeenCalledTimes(1);
        expect(onRemoved).toHaveBeenCalledWith(REFUSED_MOVE);
      });

      it("refuses text ending in `/` dropped before a `/`", async () => {
        const { mounted, onRemoved } = await mount(viewName, mode, "x/ a /b");

        const isTaken = await dragAndDrop(mounted, {
          from: { text: "x/ a /b", offset: 0 },
          to: { text: "x/ a /b", offset: 2 },
          dropAt: { text: "x/ a /b", offset: 5 },
          landAt: { text: " a /b", offset: 3 },
          flavors: flavorsOf("x/"),
        });

        expect(savedParas(mounted)).toEqual(["x/ a /b"]);
        expect(isTaken).toBe(true);
        expect(onRemoved).toHaveBeenCalledWith(REFUSED_MOVE);
      });

      it("moves a `/` that touches no `/` to where it was dropped after it, telling no one", async () => {
        const { mounted, onRemoved } = await mount(viewName, mode, "a/b c d");

        const isTaken = await dragAndDrop(mounted, {
          from: { text: "a/b c d", offset: 1 },
          to: { text: "a/b c d", offset: 2 },
          dropAt: { text: "a/b c d", offset: 5 },
          flavors: flavorsOf("/"),
        });

        expect(savedParas(mounted)).toEqual(["ab c/ d"]);
        expect(isTaken).toBe(true);
        expect(onRemoved).not.toHaveBeenCalled();
      });

      it("moves text to where it was dropped before it", async () => {
        const { mounted, onRemoved } = await mount(viewName, mode, "a b/c d");

        const isTaken = await dragAndDrop(mounted, {
          from: { text: "a b/c d", offset: 3 },
          to: { text: "a b/c d", offset: 5 },
          dropAt: { text: "a b/c d", offset: 1 },
          flavors: flavorsOf("/c"),
        });

        expect(savedParas(mounted)).toEqual(["a/c b d"]);
        expect(isTaken).toBe(true);
        expect(onRemoved).not.toHaveBeenCalled();
      });

      it("undoes a move in one step", async () => {
        const { mounted } = await mount(viewName, mode, "a/b c d");
        await dragAndDrop(mounted, {
          from: { text: "a/b c d", offset: 1 },
          to: { text: "a/b c d", offset: 2 },
          dropAt: { text: "a/b c d", offset: 5 },
          flavors: flavorsOf("/"),
        });

        await act(async () => {
          mounted.lexical.dispatchCommand(UNDO_COMMAND, undefined);
        });

        expect(savedParas(mounted)).toEqual(["a/b c d"]);
      });

      it.each([
        ["end", 2],
        ["start", 1],
      ])(
        "leaves a `/` dropped at its own %s where it was, telling no one",
        async (_edge, offset) => {
          const { mounted, onRemoved } = await mount(viewName, mode, "a/b");

          const isTaken = await dragAndDrop(mounted, {
            from: { text: "a/b", offset: 1 },
            to: { text: "a/b", offset: 2 },
            dropAt: { text: "a/b", offset },
            flavors: flavorsOf("/"),
          });

          expect(savedParas(mounted)).toEqual(["a/b"]);
          expect(isTaken).toBe(true);
          expect(onRemoved).not.toHaveBeenCalled();
        },
      );

      it("refuses a `/` dropped against an optional line break, which the file stores as `//`", async () => {
        const { mounted, onRemoved } = await mount(
          viewName,
          mode,
          "a/b c",
          { type: "optbreak" },
          " d",
        );

        const isTaken = await dragAndDrop(mounted, {
          from: { text: "a/b c", offset: 1 },
          to: { text: "a/b c", offset: 2 },
          dropAt: { text: "a/b c", offset: 5 },
          landAt: { text: "ab c", offset: 4 },
          flavors: flavorsOf("/"),
        });

        expect(savedParas(mounted)).toEqual(["a/b c| d"]);
        expect(isTaken).toBe(true);
        expect(onRemoved).toHaveBeenCalledWith(REFUSED_MOVE);
      });

      it("refuses a move from another editable element of the document the same way", async () => {
        const { mounted, onRemoved } = await mount(viewName, mode, "a c/ d");
        const otherEditor = document.createElement("div");
        otherEditor.contentEditable = "true";
        // jsdom does not compute `isContentEditable`.
        Object.defineProperty(otherEditor, "isContentEditable", { value: true });
        document.body.append(otherEditor);

        try {
          const isTaken = await dragAndDrop(mounted, {
            from: { text: "a c/ d", offset: 0 },
            to: { text: "a c/ d", offset: 0 },
            dropAt: { text: "a c/ d", offset: 4 },
            landAt: { text: "a c/ d", offset: 4 },
            flavors: flavorsOf("/"),
            dragSource: otherEditor,
          });

          expect(savedParas(mounted)).toEqual(["a c/ d"]);
          expect(isTaken).toBe(true);
          expect(onRemoved).toHaveBeenCalledWith(REFUSED_MOVE);
        } finally {
          otherEditor.remove();
        }
      });

      it("filters a copy-drop as any drop, since it removes nothing", async () => {
        const { mounted, onRemoved } = await mount(viewName, mode, "a/b c/ d");

        const isTaken = await dragAndDrop(mounted, {
          from: { text: "a/b c/ d", offset: 1 },
          to: { text: "a/b c/ d", offset: 2 },
          dropAt: { text: "a/b c/ d", offset: 6 },
          landAt: { text: "a/b c/ d", offset: 6 },
          flavors: flavorsOf("/"),
          isCopy: true,
        });

        expect(isTaken).toBe(false);
        expect(savedParas(mounted)).toEqual(["a/b c/ d"]);
        expect(onRemoved).toHaveBeenCalledWith({ source: "drop", removed: ["//"] });
      });

      it("filters a drop from another program as any drop", async () => {
        const { mounted, onRemoved } = await mount(viewName, mode, "a c/ d");

        const isTaken = await dragAndDrop(mounted, {
          from: { text: "a c/ d", offset: 0 },
          to: { text: "a c/ d", offset: 0 },
          dropAt: { text: "a c/ d", offset: 4 },
          landAt: { text: "a c/ d", offset: 4 },
          flavors: flavorsOf("/x"),
          dragSource: null,
        });

        expect(isTaken).toBe(false);
        expect(savedParas(mounted)).toEqual(["a c/x d"]);
        expect(onRemoved).toHaveBeenCalledWith({ source: "drop", removed: ["//"] });
      });
    });
  });

  it("with structure protected, leaves a drop to protected structure, which removes nothing", async () => {
    const { mounted, onRemoved } = await mount(viewName, "protected", "a/b c/ d");

    await dragAndDrop(mounted, {
      from: { text: "a/b c/ d", offset: 1 },
      to: { text: "a/b c/ d", offset: 2 },
      dropAt: { text: "a/b c/ d", offset: 6 },
      landAt: { text: "ab c/ d", offset: 5 },
      flavors: dragged("/"),
    });

    expect(savedParas(mounted)).toEqual(["a/b c/ d"]);
    expect(onRemoved).not.toHaveBeenCalledWith(REFUSED_MOVE);
  });
});
