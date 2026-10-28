/**
 * No-break spaces and space runs in the delta ops one editor hands another: the footnotes pane's
 * row editor (`footnotes-pane-row`) over Power mode's Standard view and over Simple mode's
 * paragraph-structure main editor. The host passes the main editor's `getNoteOps` to the note
 * editor's `applyUpdate`, and the note editor's `getNoteOps` (and the text it carries out past the
 * note, `takeOpsAfterNote`) back to the main editor's `replaceEmbedUpdate`, as paranext-core's
 * `FootnoteEditor` does. A stored no-break space and a
 * space run must both come back as they went, in either setting of
 * `ViewOptions.allowInvisibleCharacters`.
 */
import { EditorViewName, editorView, mountInView, MountedEditor } from "./editorViews.test-helpers";
import { opsForHost, opsFromHost } from "./markerEdit/whitespaceDisplay.utils";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot } from "lexical";
import { NBSP, NBSP_STAND_IN } from "shared";
import { $getParticularNodeOps, ViewOptions } from "shared-react";
import { describe, expect, it } from "vitest";

function view(name: EditorViewName, allow: boolean): ViewOptions {
  return { ...editorView(name), allowInvisibleCharacters: allow };
}

function doc(content: MarkerContent[]): Usj {
  return { type: "USJ", version: "3.1", content: [{ type: "para", marker: "p", content }] };
}

function char(marker: string, content: MarkerContent[]): MarkerObject {
  return { type: "char", marker, content };
}

function footnote(content: MarkerContent[]): MarkerObject {
  return { type: "note", marker: "f", caller: "+", content };
}

function paraContent(mounted: MountedEditor): MarkerContent[] | undefined {
  const para = mounted.ref.current?.getUsj()?.content[0];
  return typeof para === "object" ? para.content : undefined;
}

function shownText(mounted: MountedEditor): string {
  return mounted.lexical.getEditorState().read(() => $getRoot().getTextContent());
}

/** What the note editor shows a stored no-break space as. */
function nbspShownAs(allow: boolean): string {
  return allow ? NBSP_STAND_IN : "~";
}

/**
 * Opens the main editor's first note in a note editor, then saves what the note editor gives back
 * into the main editor, as a session with an edit in it does.
 *
 * @returns The note editor, for what it shows.
 */
async function editNoteIn(main: MountedEditor, noteView: ViewOptions): Promise<MountedEditor> {
  const noteOps = main.ref.current?.getNoteOps(0);
  if (!noteOps) throw new Error("no note ops");
  const noteEditor = await mountInView(doc([]), noteView);
  act(() => noteEditor.ref.current?.applyUpdate(noteOps));
  const edited = noteEditor.ref.current?.getNoteOps(0);
  const key = main.ref.current?.getNoteKey(0);
  if (!edited || !key) throw new Error("no edited note");
  act(() => main.ref.current?.replaceEmbedUpdate(key, edited));
  return noteEditor;
}

const surfaces: { surface: string; main: EditorViewName }[] = [
  { surface: "the footnotes pane in Power mode's Standard view", main: "standard" },
  { surface: "the footnotes pane in Simple mode", main: "paragraph-structure" },
];

describe.each([true, false])("allowInvisibleCharacters %s", (allow) => {
  describe.each(surfaces)("$surface", ({ main: mainView }) => {
    const mainOptions = view(mainView, allow);
    const noteOptions = view("footnotes-pane-row", allow);

    async function expectNbspKept(content: MarkerContent[]): Promise<void> {
      const note = footnote(content);
      const main = await mountInView(doc(["a ", note, " b"]), mainOptions);

      const noteEditor = await editNoteIn(main, noteOptions);

      expect(shownText(noteEditor)).toContain(nbspShownAs(allow));
      expect(paraContent(main)).toEqual(["a ", note, " b"]);
    }

    it.each<[string, MarkerContent[]]>([
      ["inside the text", [char("ft", [`g${NBSP}h`])]],
      ["between a note's two char spans", [char("ft", ["g"]), NBSP, char("fq", ["h"])]],
      ["before a nested char span", [char("ft", [`g${NBSP}`, char("nd", ["h"])])]],
    ])("keeps a stored no-break space %s", async (_, content) => {
      await expectNbspKept(content);
    });

    it("keeps a stored no-break space as the whole text of a char span", async () => {
      await expectNbspKept([char("ft", [NBSP])]);
    });

    it("keeps a space run as spaces", async () => {
      const main = await mountInView(
        doc(["a ", footnote([char("ft", ["g  h"])]), " b"]),
        mainOptions,
      );
      // Standard view collapses a run when it saves; paragraph-structure keeps it.
      const before = paraContent(main);

      await editNoteIn(main, noteOptions);

      expect(paraContent(main)).toEqual(before);
      expect(JSON.stringify(paraContent(main))).not.toContain(NBSP);
    });

    it("keeps a stored no-break space in the text carried out past the note", async () => {
      const note = footnote([char("ft", ["x"])]);
      const noteEditor = await mountInView(doc([note, NBSP]), noteOptions);
      const main = await mountInView(doc(["a", note, " z"]), mainOptions);
      const noteOp = noteEditor.ref.current?.getNoteOps(0)?.at(0);
      const carried = noteEditor.ref.current?.takeOpsAfterNote(0);
      const key = main.ref.current?.getNoteKey(0);
      if (!noteOp || !carried || !key) throw new Error("no note session");

      act(() => main.ref.current?.replaceEmbedUpdate(key, [noteOp, ...carried]));

      expect(paraContent(main)).toEqual(["a", note, `${NBSP} z`]);
    });
  });

  it("give a host ops that come back in as the editor's own", async () => {
    const options = view("standard", allow);
    const content: MarkerContent[] = [
      "a ",
      char("nd", ["A"]),
      NBSP,
      char("nd", ["B"]),
      " ",
      char("nd", [char("wj", ["x"]), " y"]),
      " ",
      char("nd", [NBSP]),
      { type: "verse", marker: "v", number: "2" },
      NBSP,
      footnote([char("ft", [NBSP])]),
      NBSP,
      "z",
    ];
    const mounted = await mountInView(doc(content), options);
    const ops = mounted.lexical.getEditorState().read(() => $getParticularNodeOps());

    expect(opsFromHost(opsForHost(ops, options), options)).toEqual(ops);
  });
});
