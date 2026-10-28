/**
 * A content string that is exactly one no-break space (an authored `~`) across the editor's output
 * paths. The editor→USJ conversion (what a save writes) and the editor→delta producer (what collab
 * sends, and what `getNoteOps` hands the footnote popover and the footnotes pane) must agree on
 * which lone NBSPs are content, delta-doc positions must count the same bytes the ops carry, and a
 * note's `~` must survive the note editors' save. Every view, in either setting of
 * `ViewOptions.allowInvisibleCharacters`.
 */
import {
  EditorViewName,
  editorView,
  footnotePopoverView,
  mountInView,
  MountedEditor,
} from "../editorViews.test-helpers";
import { opsForHost } from "../markerEdit/whitespaceDisplay.utils";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $getRoot, $getSelection, $isRangeSelection, $isTextNode, TextNode } from "lexical";
import { $isCharNode, $isMarkerNode, $isParaNode, NBSP } from "shared";
import { $getOTPositionOfNode, DeltaOp, getEditorDelta, ViewOptions } from "shared-react";
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

/**
 * A lone-NBSP content item, located by the char spans around it (outermost first) and whether it
 * sits in a note. Both projections below produce these, so they can be compared directly.
 */
function loneNbspKey(charStyles: string[], isInNote: boolean): string {
  return `${isInNote ? "note:" : ""}${charStyles.join("/")}`;
}

/** Every USJ content string that is exactly one NBSP. */
function usjLoneNbsps(content: MarkerContent[] | undefined): string[] {
  const found: string[] = [];
  const walk = (items: MarkerContent[] | undefined, charStyles: string[], isInNote: boolean) => {
    for (const item of items ?? []) {
      if (typeof item === "string") {
        if (item === NBSP) found.push(loneNbspKey(charStyles, isInNote));
        continue;
      }
      walk(
        item.content,
        item.type === "char" && item.marker ? [...charStyles, item.marker] : charStyles,
        isInNote || item.type === "note",
      );
    }
  };
  walk(content, [], false);
  return found.sort();
}

/**
 * An editable-mode text op outside a note carries its span's marker glyphs and the separator after
 * an opening glyph; strip those so only the span's content is left.
 */
function opContentText(insert: string): string {
  return insert
    .replace(/\\\+?[a-z0-9-]+\*/g, "")
    .replace(new RegExp(`\\\\\\+?[a-z0-9-]+${NBSP}?`, "g"), "");
}

function opCharStyles(op: DeltaOp): string[] {
  const charAttribute = op.attributes?.char;
  if (!charAttribute) return [];
  const items = Array.isArray(charAttribute) ? charAttribute : [charAttribute];
  return items.map((item) => String((item as { style: string }).style).replace(/^\+/, ""));
}

/** Every delta text op whose content (glyphs and separators stripped) is exactly one NBSP. */
function deltaLoneNbsps(ops: DeltaOp[]): string[] {
  const found: string[] = [];
  const walk = (opList: DeltaOp[], isInNote: boolean) => {
    for (const op of opList) {
      if (typeof op.insert === "string") {
        if (opContentText(op.insert) === NBSP) found.push(loneNbspKey(opCharStyles(op), isInNote));
      } else if (op.insert && typeof op.insert === "object" && "note" in op.insert) {
        const noteOps = (op.insert.note as { contents?: { ops?: DeltaOp[] } }).contents?.ops;
        walk(noteOps ?? [], true);
      }
    }
  };
  walk(ops, false);
  return found.sort();
}

/** Where `text` starts in the ops stream, each embed counting as one unit. */
function streamPositionOf(ops: DeltaOp[], text: string): number {
  const stream = ops.map(({ insert }) => (typeof insert === "string" ? insert : "￼")).join("");
  const position = stream.indexOf(text);
  if (position < 0) throw new Error(`the ops stream holds no ${JSON.stringify(text)}`);
  return position;
}

const TAIL = " end.";

/** Each lone `~` shape, in body text and in a note, before a plain tail text. */
const CASES: [string, MarkerContent[]][] = [
  ["a char span whose whole text is `~`", ["a ", char("nd", [NBSP]), TAIL]],
  ["a `~` between two char spans", ["a ", char("wj", ["glory"]), NBSP, char("nd", ["Lord"]), TAIL]],
  ["a `~` leading an element-first char span", ["a ", char("nd", [NBSP, char("wj", ["x"])]), TAIL]],
  ["a note's char span whose whole text is `~`", ["a ", footnote([char("ft", [NBSP])]), TAIL]],
  [
    "a `~` between a note's two char spans",
    ["a ", footnote([char("ft", ["x"]), NBSP, char("fq", ["y"])]), TAIL],
  ],
  [
    "a `~` leading a note's element-first char span",
    ["a ", footnote([char("fk", [NBSP, char("wj", ["x"])])]), TAIL],
  ],
];

const NOTE_CASES = CASES.filter(([, content]) =>
  content.some((item) => typeof item === "object" && item.type === "note"),
);

const VIEWS: EditorViewName[] = [
  "standard",
  "standard+expandedNotes",
  "formatted",
  "paragraph-structure",
  "unformatted",
  "visible",
  "hidden+expanded",
];

/**
 * Opens the main editor's first note in a note editor mounted with `noteView` (the note editor's
 * own options), then saves what the note editor gives back into the main editor, as
 * paranext-core's `FootnoteEditor` does.
 */
async function editNoteIn(main: MountedEditor, noteView: ViewOptions): Promise<void> {
  const noteOps = main.ref.current?.getNoteOps(0);
  if (!noteOps) throw new Error("no note ops");
  const noteEditor = await mountInView(doc([]), noteView);
  act(() => noteEditor.ref.current?.applyUpdate(noteOps));
  const edited = noteEditor.ref.current?.getNoteOps(0);
  const key = main.ref.current?.getNoteKey(0);
  if (!edited || !key) throw new Error("no edited note");
  act(() => main.ref.current?.replaceEmbedUpdate(key, edited));
}

describe.each([false, true])("allowInvisibleCharacters %s", (allow) => {
  describe.each(VIEWS)("in %s view", (viewName) => {
    const options = view(viewName, allow);

    it.each(CASES)("saves %s", async (_, content) => {
      const main = await mountInView(doc(content), options);

      expect(paraContent(main)).toEqual(content);
    });

    it.each(CASES)("gives the delta ops the same lone NBSPs as the USJ: %s", async (_, content) => {
      const main = await mountInView(doc(content), options);
      const ops = opsForHost(getEditorDelta(main.lexical.getEditorState()).ops, options);

      const fromUsj = usjLoneNbsps(paraContent(main));
      expect(fromUsj).toHaveLength(1);
      expect(deltaLoneNbsps(ops)).toEqual(fromUsj);
    });

    it.each(CASES)("counts delta-doc positions as the ops do after %s", async (_, content) => {
      const main = await mountInView(doc(content), options);
      const editorState = main.lexical.getEditorState();
      const expected = streamPositionOf(getEditorDelta(editorState).ops, TAIL);

      const position = editorState.read(() => {
        const para = $getRoot().getFirstChild();
        if (!$isParaNode(para)) throw new Error("no para");
        const tail = para.getChildren().findLast($isTextNode);
        if (tail?.getTextContent() !== TAIL) throw new Error("no tail text");
        return $getOTPositionOfNode(tail);
      });

      expect(position).toBe(expected);
    });

    it.each(NOTE_CASES)("keeps %s through a save of the note's own ops", async (_, content) => {
      const main = await mountInView(doc(content), options);
      const noteOps = main.ref.current?.getNoteOps(0);
      const key = main.ref.current?.getNoteKey(0);
      if (!noteOps || !key) throw new Error("no note");

      act(() => main.ref.current?.replaceEmbedUpdate(key, noteOps));

      expect(paraContent(main)).toEqual(content);
    });

    // Library-only outside Standard view: the app opens no footnote popover over any view (see
    // `footnotePopoverView`); these rows keep the popover from decaying.
    it.each(NOTE_CASES)(
      "keeps %s through the footnote popover's round trip",
      async (_, content) => {
        const main = await mountInView(doc(content), options);

        await editNoteIn(main, footnotePopoverView(options));

        expect(paraContent(main)).toEqual(content);
      },
    );

    it.each(NOTE_CASES)(
      "keeps %s through the footnotes pane's round trip (a Standard-view note editor)",
      async (_, content) => {
        const main = await mountInView(doc(content), options);

        await editNoteIn(main, view("footnotes-pane-row", allow));

        expect(paraContent(main)).toEqual(content);
      },
    );
  });
});

describe("text typed into one of the layout's lone NBSPs is saved as content", () => {
  /** Types `text` at offset 1 of the text node `$find` returns. */
  async function typeInto(main: MountedEditor, $find: () => TextNode | undefined, text: string) {
    await act(async () => {
      main.lexical.update(
        () => {
          const target = $find();
          if (!target) throw new Error("no text to type into");
          target.select(1, 1);
          const selection = $getSelection();
          if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
          selection.insertText(text);
        },
        { discrete: true },
      );
    });
  }

  it("keeps text typed at an element-first spacer (unformatted)", async () => {
    const main = await mountInView(
      doc([char("nd", [char("wj", ["x"])])]),
      editorView("unformatted"),
    );
    // The spacer: the lone NBSP between the span's opening glyph and its leading nested span.
    const $findSpacer = () =>
      $getRoot()
        .getAllTextNodes()
        .find(
          (node) =>
            node.getTextContent() === NBSP &&
            $isCharNode(node.getParent()) &&
            $isMarkerNode(node.getPreviousSibling()) &&
            $isCharNode(node.getNextSibling()),
        );
    expect(main.lexical.getEditorState().read(() => $findSpacer())).toBeDefined();

    await typeInto(main, $findSpacer, "a");

    expect(paraContent(main)).toEqual([char("nd", ["a", char("wj", ["x"])])]);
  });

  it("keeps text typed into an empty span's placeholder (formatted)", async () => {
    const main = await mountInView(
      doc(["Tell the ", { type: "char", marker: "nd" }]),
      editorView("formatted"),
    );
    const $findPlaceholder = () =>
      $getRoot()
        .getAllTextNodes()
        .find((node) => {
          const parent = node.getParent();
          return (
            node.getTextContent() === NBSP && $isCharNode(parent) && parent.getChildrenSize() === 1
          );
        });
    expect(main.lexical.getEditorState().read(() => $findPlaceholder())).toBeDefined();

    await typeInto(main, $findPlaceholder, "x");

    expect(paraContent(main)).toEqual(["Tell the ", char("nd", ["x"])]);
  });
});
