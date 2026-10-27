/**
 * Text a host's note editor carries out past its note (`takeOpsAfterNote`, after the user closes
 * the note mid-note) and the host applies after the note in the Scripture text
 * (`replaceEmbedUpdate` with the note op followed by the carried ops), as paranext-core's
 * `FootnoteEditor` does. Whatever markup the carried text holds — a char span, a milestone — must
 * arrive as that markup, whichever view either editor is in, and must leave the note editor.
 */
import {
  EditorViewName,
  editorView,
  footnotePopoverView,
  mountInView,
  MountedEditor,
} from "./editorViews.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { describe, expect, it } from "vitest";

function doc(content: MarkerContent[]): Usj {
  return { type: "USJ", version: "3.1", content: [{ type: "para", marker: "p", content }] };
}

function char(marker: string, content: MarkerContent[]): MarkerObject {
  return { type: "char", marker, content };
}

function paraContent(mounted: MountedEditor): MarkerContent[] | undefined {
  const para = mounted.ref.current?.getUsj()?.content[0];
  return typeof para === "object" ? para.content : undefined;
}

const note: MarkerObject = {
  type: "note",
  marker: "f",
  caller: "+",
  content: [char("ft", ["x"])],
};

const surfaces: { surface: string; main: EditorViewName; noteEditor: EditorViewName }[] = [
  { surface: "the footnote popover over Standard view", main: "standard", noteEditor: "standard" },
  {
    surface: "the footnotes pane over paragraph-structure view",
    main: "paragraph-structure",
    noteEditor: "standard",
  },
  {
    surface: "the footnote popover over formatted view",
    main: "formatted",
    noteEditor: "formatted",
  },
];

const carriedContent: [string, MarkerContent[]][] = [
  ["a char span", [char("nd", ["L"]), " y"]],
  ["a nested char span", [char("nd", ["L ", char("wj", ["M"])]), " y"]],
  ["a milestone", [" a", { type: "ms", marker: "qt-s" }, "b"]],
];

/**
 * Rows that fail, by `<main view>: <carried content>`. Standard view keeps two adjacent spans of
 * one marker apart (their glyphs are the bytes it shows), and the applier builds a nested span's op
 * that follows its outer span's text as a span of its own, so `\nd L \+wj M\+wj*\nd*` arrives as
 * `\nd L \nd*\nd \+wj M\+wj*\nd*`. The views without glyphs merge the two spans again.
 */
const knownFailures = new Set(["standard: a nested char span"]);

describe.each(surfaces)("$surface", ({ main: mainView, noteEditor: noteView }) => {
  for (const [name, carried] of carriedContent) {
    (knownFailures.has(`${mainView}: ${name}`) ? it.fails : it)(
      `carries ${name} out past the note`,
      async () => {
        const noteEditor = await mountInView(
          doc([note, ...carried]),
          footnotePopoverView(editorView(noteView)),
        );
        const main = await mountInView(doc(["a", note, "z"]), editorView(mainView));
        const noteOp = noteEditor.ref.current?.getNoteOps(0)?.at(0);
        const carriedOps = noteEditor.ref.current?.takeOpsAfterNote(0);
        const key = main.ref.current?.getNoteKey(0);
        if (!noteOp || !carriedOps || !key) throw new Error("no note session");

        act(() => main.ref.current?.replaceEmbedUpdate(key, [noteOp, ...carriedOps]));

        expect(paraContent(noteEditor)).toEqual([note]);
        expect(paraContent(main)).toEqual(normalizedText(["a", note, ...carried, "z"]));
      },
    );
  }
});

/** `content` with adjacent strings joined, as a save writes them. */
function normalizedText(content: MarkerContent[]): MarkerContent[] {
  return content.reduce<MarkerContent[]>((joined, item) => {
    const last = joined.at(-1);
    if (typeof item === "string" && typeof last === "string")
      joined[joined.length - 1] = last + item;
    else joined.push(item);
    return joined;
  }, []);
}
