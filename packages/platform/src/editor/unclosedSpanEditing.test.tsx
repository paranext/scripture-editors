/**
 * A char span the USFM never closed (`closed="false"`: `\bd usfm marker` running to the paragraph
 * end, or a `\wj` that the next char marker closes implicitly) stays unclosed through ordinary
 * editing, in every view a user edits Scripture in.
 *
 * The flag is the only thing that keeps the save from writing a closing marker the author never
 * wrote: `usjToUsxString` writes a `<char>` without it as closed, and ParatextData then writes
 * `\bd*` to disk. So each gesture is judged on the USJ a host saves (`getUsj`) AND on the USX the
 * provider receives for it. ParatextData's own USX -> USFM step writes `closed="false"` with no
 * closer; paranext-core's provider sweep pins that.
 *
 * Loading such a span, and dirtying every node of it, is covered by the corpus suites; these are
 * the edits.
 */
import {
  EDITING_VIEW_NAMES,
  editorView,
  enabledViews,
  mountInView,
  MountedEditor,
} from "./editorViews.test-helpers";
import { installSelectionModify, press } from "./typingFidelityOracle.test-helpers";
import {
  MarkerContent,
  MarkerObject,
  Usj,
  usjToUsxString,
} from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $createRangeSelection, $getRoot, $setSelection, SELECTION_CHANGE_COMMAND } from "lexical";
import { $isCharNode } from "shared";
import { describe, expect, it } from "vitest";

installSelectionModify();

const scrRef = { book: "2SA", chapterNum: 1, verseNum: 1 };

const verse = (number: string): MarkerObject => ({ type: "verse", marker: "v", number });
const unclosed = (marker: string, text: string): MarkerObject => ({
  type: "char",
  marker,
  closed: "false",
  content: [text],
});

function chapterOf(...paras: MarkerContent[][]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "2SA", content: ["unclosed spans"] },
      { type: "chapter", marker: "c", number: "1" },
      ...paras.map((content): MarkerObject => ({ type: "para", marker: "p", content })),
    ],
  };
}

/** The unclosed spans the corpus carries, in their at-rest shapes. */
const SHAPES = [
  {
    // testUSFM-2SA-1 verse 1: `\v 1 \bd usfm marker` — the span runs to the paragraph end.
    name: "a span running to the paragraph end",
    marker: "bd",
    text: "usfm marker",
    usj: chapterOf([verse("1"), "Lead ", unclosed("bd", "usfm marker")]),
  },
  {
    // `\v 1 Lead \wj said this \nd Lord\nd* after`: `\nd` without `+` closes the `\wj`.
    name: "a span the next char marker closes",
    marker: "wj",
    text: "said this ",
    usj: chapterOf([
      verse("1"),
      "Lead ",
      unclosed("wj", "said this "),
      { type: "char", marker: "nd", content: ["Lord"] },
      " after",
    ]),
  },
];

/** Every char object in `content`, depth first. */
function charsIn(content: readonly MarkerContent[] | undefined): MarkerObject[] {
  return (content ?? []).flatMap((item) =>
    typeof item === "string"
      ? []
      : [...(item.type === "char" ? [item] : []), ...charsIn(item.content)],
  );
}

/** Places a collapsed caret `offset` characters into the content text of the `marker` span, or
 * into the `Lead ` text before it, with a selection change announced, as a click does. */
async function placeCaret(
  mounted: MountedEditor,
  where: { marker: string; offset: number } | { lead: number },
): Promise<void> {
  await act(async () => {
    mounted.lexical.update(() => {
      const text = $getRoot()
        .getAllTextNodes()
        .find((node) => {
          if (node.getType() !== "text") return false;
          const parent = node.getParent();
          if ("lead" in where) return node.getTextContent() === "Lead " && !$isCharNode(parent);
          return $isCharNode(parent) && parent.getMarker() === where.marker;
        });
      if (!text) throw new Error(`no text for ${JSON.stringify(where)}`);
      const offset = "lead" in where ? where.lead : where.offset;
      const selection = $createRangeSelection();
      selection.anchor.set(text.getKey(), offset, "text");
      selection.focus.set(text.getKey(), offset, "text");
      $setSelection(selection);
      mounted.lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    });
    await Promise.resolve();
  });
}

/** One edit: where the caret goes, then the keys pressed (or, in Standard view, `standard`). */
interface Gesture {
  name: string;
  at: (text: string) => { offset: number } | { lead: number };
  keys: { key: string; text?: string }[];
  /** What Standard view does instead of `keys`, where they mean something else there. */
  standard?: (mounted: MountedEditor) => void;
  /** How many spans of the marker the paragraph holds afterwards. */
  spans: number;
  /** Text the gesture types, which must land inside the span. */
  typed?: string;
}

const GESTURES: Gesture[] = [
  {
    name: "typing in the middle of the span",
    at: (text: string) => ({ offset: Math.floor(text.length / 2) }),
    keys: [{ key: "x", text: "x" }],
    spans: 1,
    typed: "x",
  },
  {
    name: "typing at the span's content end",
    at: (text: string) => ({ offset: text.length }),
    keys: [{ key: "x", text: "x" }],
    spans: 1,
    typed: "x",
  },
  {
    name: "Backspace in the middle of the span",
    at: (text: string) => ({ offset: Math.floor(text.length / 2) }),
    keys: [{ key: "Backspace" }],
    spans: 1,
  },
  {
    name: "splitting the paragraph in the middle of the span",
    at: (text: string) => ({ offset: Math.floor(text.length / 2) }),
    keys: [{ key: "Enter" }],
    // Standard view's Enter opens the marker menu; picking `\p` there splits the paragraph.
    standard: (mounted: MountedEditor) => mounted.ref.current?.splitParagraphWithMarker("p"),
    spans: 2,
  },
  {
    name: "typing in the paragraph before the span",
    at: () => ({ lead: 2 }),
    keys: [{ key: "x", text: "x" }],
    spans: 1,
  },
];

const VIEW_NAMES = enabledViews([...EDITING_VIEW_NAMES]);

describe("editing inside a span the USFM never closed", () => {
  it.each(
    VIEW_NAMES.flatMap((view) =>
      SHAPES.flatMap((shape) => GESTURES.map((gesture) => ({ view, shape, gesture }))),
    ),
  )("$gesture.name keeps $shape.name unclosed ($view)", async ({ view, shape, gesture }) => {
    const mounted = await mountInView(shape.usj, editorView(view), { scrRef });
    const at = gesture.at(shape.text);
    await placeCaret(mounted, "lead" in at ? at : { marker: shape.marker, ...at });
    const { standard } = gesture;
    if (view === "standard" && standard) {
      await act(async () => {
        standard(mounted);
      });
    } else {
      for (const { key, text } of gesture.keys) {
        expect(await press(mounted, key, text)).toEqual([]);
      }
    }

    const saved = mounted.ref.current?.getUsj();
    expect(saved).not.toEqual(shape.usj);
    const spans = charsIn(saved?.content).filter((char) => char.marker === shape.marker);
    expect(spans).toHaveLength(gesture.spans);
    for (const span of spans) expect(span.closed).toBe("false");
    if (gesture.typed)
      expect(spans.map((span) => (span.content ?? []).join("")).join("")).toContain(gesture.typed);

    // Every span of the marker reaches the provider still marked unclosed.
    const usx = saved ? usjToUsxString(saved) : "";
    const opened = usx.match(new RegExp(`<char style="${shape.marker}"[^>]*>`, "g")) ?? [];
    expect(opened).toHaveLength(gesture.spans);
    for (const tag of opened) expect(tag).toContain('closed="false"');
    mounted.unmount();
  });
});
