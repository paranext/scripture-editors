/**
 * A no-break space that delta ops carry into an editor (`applyUpdate`, `replaceEmbedUpdate`) is
 * content, however much of a char span it fills. The op producer leaves out an empty span's
 * placeholder, so an applied U+00A0 is always the author's: the views without a separator after a
 * span's opener (formatted, paragraph-structure) must save it even when it is the span's whole
 * text, the slot an empty span's placeholder takes.
 */
import { EditorViewName, editorView, mountInView, MountedEditor } from "./editorViews.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { NBSP } from "shared";
import { DeltaOp } from "shared-react";
import { describe, expect, it } from "vitest";

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

const views: EditorViewName[] = ["formatted", "paragraph-structure"];

describe.each(views)("in %s view", (viewName) => {
  const view = editorView(viewName);

  it("keeps a note's char span whose whole text is an applied no-break space", async () => {
    const main = await mountInView(doc(["a ", footnote([char("ft", ["x"])]), " b"]), view);
    const key = main.ref.current?.getNoteKey(0);
    if (!key) throw new Error("no note");
    const noteOp: DeltaOp = {
      insert: {
        note: {
          style: "f",
          caller: "+",
          contents: { ops: [{ insert: NBSP, attributes: { char: { style: "ft" } } }] },
        },
      },
    };

    act(() => main.ref.current?.replaceEmbedUpdate(key, [noteOp]));

    expect(paraContent(main)).toEqual(["a ", footnote([char("ft", [NBSP])]), " b"]);
  });

  it("keeps a char span inserted with a no-break space as its whole text", async () => {
    const main = await mountInView(doc(["ab"]), view);

    act(() =>
      main.ref.current?.applyUpdate([
        { retain: 1 },
        { insert: NBSP, attributes: { char: { style: "nd" } } },
      ]),
    );

    expect(paraContent(main)).toEqual(["a", char("nd", [NBSP]), "b"]);
  });

  it("keeps a no-break space inserted into a span whose other text is then deleted", async () => {
    const main = await mountInView(doc(["a", char("nd", ["xy"]), "b"]), view);

    act(() => main.ref.current?.applyUpdate([{ retain: 2 }, { insert: NBSP }, { delete: 1 }]));
    act(() => main.ref.current?.applyUpdate([{ retain: 1 }, { delete: 1 }]));

    expect(paraContent(main)).toEqual(["a", char("nd", [NBSP]), "b"]);
  });

  it("keeps a no-break space that replaces a span's text in one update", async () => {
    const main = await mountInView(doc(["a", char("nd", ["xyz"]), "b"]), view);

    act(() =>
      main.ref.current?.applyUpdate([
        { retain: 2 },
        { delete: 1 },
        { insert: NBSP },
        { delete: 1 },
      ]),
    );
    act(() => main.ref.current?.applyUpdate([{ retain: 1 }, { delete: 1 }]));

    expect(paraContent(main)).toEqual(["a", char("nd", [NBSP]), "b"]);
  });

  it("still saves an applied empty span as empty", async () => {
    const main = await mountInView(doc(["ab"]), view);

    act(() =>
      main.ref.current?.applyUpdate([
        { retain: 1 },
        { insert: "", attributes: { char: { style: "nd" } } },
      ]),
    );

    expect(paraContent(main)).toEqual(["a", { type: "char", marker: "nd" }, "b"]);
  });
});
