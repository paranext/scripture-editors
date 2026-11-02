/**
 * In the views that show markers, a paste the browser delivers itself (macOS's Edit > Paste,
 * Shift+Insert) takes exactly what Ctrl+V takes. Ctrl+V, the context menu's Paste and
 * `EditorRef.paste()` read the clipboard with `navigator.clipboard.read()`, which returns html and
 * plain text alone; a native paste event also carries the editor's node copy
 * (`application/x-lexical-editor`), which those views leave unread.
 *
 * The cases are PT-4872's 2, 4, 5 and 8, each of which goes wrong only when that node copy is read:
 * a throw, a paste landing outside a note, and a screen that does not match the save. Each runs the
 * same copy and paste twice, in editors of their own, once pasting every flavor and once the html
 * and plain text, and compares the two.
 */
import { depart, $screenBytes } from "./markerEdit/pendingSettledOracle.test-helpers";
import { copyEvent, pasteEvent } from "./markerEdit/markerEdit.test-helpers";
import { editorView, MountedEditor, mountInView } from "./editorViews.test-helpers";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getRoot,
  COPY_COMMAND,
  CUT_COMMAND,
  PASTE_COMMAND,
  SELECTION_CHANGE_COMMAND,
  TextNode,
} from "lexical";

const LEXICAL_FLAVOR = "application/x-lexical-editor";

/** The book, the chapter, `blocks`, and a paragraph to depart to. */
function usjOf(...blocks: MarkerContent[]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
      { type: "chapter", marker: "c", number: "1" },
      ...blocks,
      { type: "para", marker: "p", content: ["depart here"] },
    ],
  };
}

const GRACE_PARA: MarkerContent = {
  type: "para",
  marker: "p",
  content: ["In the ", { type: "char", marker: "w", content: ["grace"] }, " of God"],
};

/** A point: the `nth` text node (in document order) whose text is exactly `text`, or holds it when
 * `exact` is false, at `offset`. */
interface At {
  text: string;
  offset: number;
  exact?: boolean;
  nth?: number;
}

function $textAt({ text, exact = true, nth = 0 }: At): TextNode {
  const hits = $getRoot()
    .getAllTextNodes()
    .filter((node) =>
      exact ? node.getTextContent() === text : node.getTextContent().includes(text),
    );
  const hit = hits.at(nth);
  if (!hit) throw new Error(`no text node ${exact ? "is" : "holds"} ${JSON.stringify(text)}`);
  return hit;
}

async function select(mounted: MountedEditor, from: At, to: At = from): Promise<void> {
  await act(async () => {
    mounted.lexical.update(
      () => {
        const anchor = $textAt(from);
        const focus = $textAt(to);
        const selection = anchor.select(from.offset, from.offset);
        selection.focus.set(focus.getKey(), to.offset, "text");
        mounted.lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
      },
      { discrete: true },
    );
    await Promise.resolve();
  });
}

async function copyOrCut(
  mounted: MountedEditor,
  command: typeof COPY_COMMAND | typeof CUT_COMMAND,
): Promise<{ [type: string]: string }> {
  const { event, getData } = copyEvent();
  await act(async () => {
    mounted.lexical.update(() => {
      mounted.lexical.dispatchCommand(command, event);
    });
    await Promise.resolve();
  });
  const flavors: { [type: string]: string } = {};
  for (const type of [LEXICAL_FLAVOR, "text/html", "text/plain"])
    if (getData(type)) flavors[type] = getData(type);
  return flavors;
}

/** Pastes `flavors`, and returns what was thrown on the way, if anything. */
async function paste(
  mounted: MountedEditor,
  flavors: { [type: string]: string },
): Promise<string[]> {
  const thrown: string[] = [];
  const onError = (event: ErrorEvent): void => {
    thrown.push(String(event.error?.message ?? event.message));
    event.preventDefault();
  };
  window.addEventListener("error", onError);
  try {
    await act(async () => {
      try {
        mounted.lexical.update(() => {
          mounted.lexical.dispatchCommand(PASTE_COMMAND, pasteEvent(flavors).event);
        });
      } catch (error) {
        thrown.push(String(error instanceof Error ? error.message : error));
      }
      await Promise.resolve();
      await Promise.resolve();
    });
  } finally {
    window.removeEventListener("error", onError);
  }
  return thrown;
}

interface PasteCase {
  name: string;
  /** The views it runs in: where PT-4872 found it, and the footnotes pane's row editor for the note
   * cases. That editor shows no paragraph marker, which the paragraph-marker cases start in. */
  views: string[];
  usj: Usj;
  /** The copy (or cut) and where its paste goes: run in a fresh editor. */
  run: (
    mounted: MountedEditor,
    pasteFlavors: (flavors: { [type: string]: string }) => { [type: string]: string },
  ) => Promise<string[]>;
}

/** What Ctrl+V's clipboard read delivers of a copy: its html and plain text alone. */
function asClipboardRead(flavors: { [type: string]: string }): { [type: string]: string } {
  const { [LEXICAL_FLAVOR]: _nodeCopy, ...read } = flavors;
  return read;
}

const CASES: PasteCase[] = [
  {
    name: "2: a cut collapsed footnote pasted back",
    views: ["standard", "footnotes-pane-row"],
    usj: usjOf({
      type: "para",
      marker: "p",
      content: [
        "a",
        {
          type: "note",
          marker: "f",
          caller: "+",
          content: [{ type: "char", marker: "ft", content: ["note text"] }],
        },
        " b",
      ],
    }),
    run: async (mounted, pasteFlavors) => {
      await select(mounted, { text: "a", offset: 1 }, { text: " b", offset: 0 });
      const flavors = await copyOrCut(mounted, CUT_COMMAND);
      expect(flavors[LEXICAL_FLAVOR]).toBeTruthy();
      return paste(mounted, pasteFlavors(flavors));
    },
  },
  {
    name: "4: a footnote's content pasted over its own content marker's name",
    views: ["standard+expandedNotes", "footnotes-pane-row"],
    usj: usjOf({
      type: "para",
      marker: "p",
      content: [
        "a",
        {
          type: "note",
          marker: "f",
          caller: "+",
          content: [{ type: "char", marker: "ft", closed: "false", content: ["note text"] }],
        },
      ],
    }),
    run: async (mounted, pasteFlavors) => {
      await select(
        mounted,
        { text: "\\ft", offset: 0, exact: false },
        { text: "note text", offset: 10, exact: false },
      );
      const flavors = await copyOrCut(mounted, COPY_COMMAND);
      expect(flavors[LEXICAL_FLAVOR]).toBeTruthy();
      await select(
        mounted,
        { text: "\\ft", offset: 1, exact: false },
        { text: "\\ft", offset: 3, exact: false },
      );
      return paste(mounted, pasteFlavors(flavors));
    },
  },
  {
    name: "5: a copy starting inside a paragraph's marker, pasted inside its text",
    views: ["standard"],
    usj: usjOf(GRACE_PARA),
    run: async (mounted, pasteFlavors) => {
      await select(
        mounted,
        { text: "\\p", offset: 1, exact: false },
        { text: "In the ", offset: 4 },
      );
      const flavors = await copyOrCut(mounted, COPY_COMMAND);
      expect(flavors[LEXICAL_FLAVOR]).toBeTruthy();
      await select(mounted, { text: "In the ", offset: 1 });
      return paste(mounted, pasteFlavors(flavors));
    },
  },
  {
    name: "8: a whole paragraph pasted inside another",
    views: ["standard"],
    usj: usjOf(GRACE_PARA, { type: "para", marker: "p", content: ["one target"] }),
    run: async (mounted, pasteFlavors) => {
      await select(
        mounted,
        { text: "\\p", offset: 0, exact: false },
        { text: " of God", offset: 7 },
      );
      const flavors = await copyOrCut(mounted, COPY_COMMAND);
      expect(flavors[LEXICAL_FLAVOR]).toBeTruthy();
      await select(mounted, { text: "one target", offset: 3 });
      return paste(mounted, pasteFlavors(flavors));
    },
  },
];

/** What one run leaves: what was thrown, the screen before the caret departs, and the save. */
async function outcome(
  viewName: string,
  { usj, run }: PasteCase,
  pasteFlavors: (flavors: { [type: string]: string }) => { [type: string]: string },
): Promise<{ thrown: string[]; screen: string | undefined; saved: unknown }> {
  const mounted = await mountInView(usj, editorView(viewName));
  try {
    const thrown = await run(mounted, pasteFlavors);
    const screen = mounted.lexical.getEditorState().read(() => $screenBytes());
    await depart(mounted as Parameters<typeof depart>[0]);
    return { thrown, screen, saved: mounted.ref.current?.getUsj()?.content };
  } finally {
    mounted.unmount();
  }
}

describe.each(["standard", "standard+expandedNotes", "footnotes-pane-row"])(
  "a native paste in the %s view, against Ctrl+V",
  (viewName) => {
    it.each(CASES.filter(({ views }) => views.includes(viewName)))("$name", async (pasteCase) => {
      const native = await outcome(viewName, pasteCase, (flavors) => flavors);
      const ctrlV = await outcome(viewName, pasteCase, asClipboardRead);

      expect(ctrlV.thrown).toEqual([]);
      expect(native).toEqual(ctrlV);
    });
  },
);
