/**
 * A text node holding nothing but one zero-width space, across the editor's output paths. There are
 * two kinds, byte for byte the same: a caret guard's transient host, which carries the caret-host
 * mark and is no part of the document, and an authored zero-width space (a line-break opportunity
 * in Thai, Khmer and Lao) that an annotation split off into a run of its own, which is content. The
 * editor→USJ conversion (what a save writes), the editor→delta producer (what collab sends) and
 * delta-doc positions must all tell them apart the same way: the host counts for nothing, and the
 * authored run counts as one unit.
 *
 * A note is one embed in its parent's stream, so a run in note content moves nothing past the note;
 * its unit is in the note's own ops.
 */
import { contentPath } from "../positions/positions.test-helpers";
import {
  EDITOR_VIEWS,
  editorView,
  enabledViews,
  footnotePopoverView,
  forEachView,
  isPopoverHostEnabled,
  mountInView,
  MountedEditor,
  NamedView,
} from "../editorViews.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { $dfs } from "@lexical/utils";
import { act } from "@testing-library/react";
import { $getRoot, TextNode } from "lexical";
import { $createCaretHostNode, $isCaretHost, $isTypedMarkNode, ZWSP } from "shared";
import { $getOTPositionOfNode, DeltaOp, getEditorDelta } from "shared-react";
import { describe, expect, it } from "vitest";

const NEXT_PARA_TEXT = "next.";

/** A paragraph holding `content`, then a paragraph whose text is where positions are measured. */
function doc(content: MarkerContent[]): Usj {
  return {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "para", marker: "p", content },
      { type: "para", marker: "p", content: [NEXT_PARA_TEXT] },
    ],
  };
}

function char(marker: string, content: MarkerContent[]): MarkerObject {
  return { type: "char", marker, content };
}

function footnote(content: MarkerContent[]): MarkerObject {
  return { type: "note", marker: "f", caller: "+", content };
}

interface ZwspCase {
  name: string;
  /** The text the zero-width space comes between; either side may be empty. */
  before: string;
  after: string;
  /** The first paragraph's content, around `text`. */
  content: (text: string) => MarkerContent[];
  /** The content indexes of `text`. */
  textPath: number[];
  isInNote?: boolean;
}

const CASES: ZwspCase[] = [
  {
    name: "at the start of a paragraph",
    before: "",
    after: "alpha",
    content: (text) => [text],
    textPath: [0, 0],
  },
  {
    name: "in the middle of a paragraph",
    before: "alpha",
    after: "beta",
    content: (text) => [text],
    textPath: [0, 0],
  },
  {
    name: "at the end of a paragraph",
    before: "alpha",
    after: "",
    content: (text) => [text],
    textPath: [0, 0],
  },
  {
    name: "in the middle of a char span",
    before: "al",
    after: "pha",
    content: (text) => ["a ", char("nd", [text]), " b"],
    textPath: [0, 1, 0],
  },
  {
    name: "at the end of a char span",
    before: "alpha",
    after: "",
    content: (text) => ["a ", char("nd", [text]), " b"],
    textPath: [0, 1, 0],
  },
  {
    name: "in a note's char span",
    before: "no",
    after: "te",
    content: (text) => ["a ", footnote([char("ft", [text])]), " b"],
    textPath: [0, 1, 0, 0],
    isInNote: true,
  },
];

/** The footnote popover over a view that hides markers; over Standard it is `footnotes-pane-row`. */
const POPOVER_HOST = "formatted";

const VIEWS: readonly NamedView<string>[] = [
  ...enabledViews<NamedView<string>>(EDITOR_VIEWS),
  ...(isPopoverHostEnabled(POPOVER_HOST)
    ? [
        {
          name: `footnote popover over ${POPOVER_HOST}`,
          view: footnotePopoverView(editorView(POPOVER_HOST)),
        },
      ]
    : []),
];

/** The ops stream as text, each embed counting as one unit. */
function streamOf(ops: DeltaOp[]): string {
  return ops.map(({ insert }) => (typeof insert === "string" ? insert : "￼")).join("");
}

/** The first note's own ops, as {@link streamOf} spells them. */
function noteStreamOf(ops: DeltaOp[]): string {
  for (const { insert } of ops) {
    if (insert && typeof insert === "object" && "note" in insert) {
      const noteOps = (insert.note as { contents?: { ops?: DeltaOp[] } }).contents?.ops;
      return streamOf(noteOps ?? []);
    }
  }
  throw new Error("the ops hold no note");
}

function opsOf(mounted: MountedEditor): DeltaOp[] {
  return getEditorDelta(mounted.lexical.getEditorState()).ops;
}

/** Where the next paragraph's text starts, by delta-doc position. */
function nextParaPosition(mounted: MountedEditor): number | undefined {
  return mounted.lexical.getEditorState().read(() => {
    const next = $getRoot()
      .getAllTextNodes()
      .find((node) => node.getTextContent() === NEXT_PARA_TEXT);
    if (!next) throw new Error("no next paragraph's text");
    return $getOTPositionOfNode(next);
  });
}

/** Annotates the zero-width space alone, which splits it off into a run of its own. */
async function annotateZwsp(mounted: MountedEditor, { before, textPath }: ZwspCase): Promise<void> {
  const jsonPath = contentPath(textPath);
  await act(async () => {
    mounted.ref.current?.setAnnotation(
      {
        start: { jsonPath, offset: before.length },
        end: { jsonPath, offset: before.length + 1 },
      },
      "test",
      "1",
    );
    await Promise.resolve();
  });
}

/** The text of every annotation mark in the document. */
function annotatedTexts(mounted: MountedEditor): string[] {
  return mounted.lexical.getEditorState().read(() =>
    $dfs()
      .map(({ node }) => node)
      .filter($isTypedMarkNode)
      .map((mark) => mark.getTextContent()),
  );
}

/** Puts a marked caret host between `before` and `after`, in the text that holds both. */
async function insertCaretHost(mounted: MountedEditor, { before, after }: ZwspCase): Promise<void> {
  const whole = before + after;
  await act(async () => {
    mounted.lexical.update(
      () => {
        const target = $getRoot()
          .getAllTextNodes()
          .find((node: TextNode) => node.getTextContent().includes(whole));
        if (!target) throw new Error(`no text holding ${whole}`);
        const start = target.getTextContent().indexOf(whole);
        const offset = start + before.length;
        const host = $createCaretHostNode();
        if (offset === 0) target.insertBefore(host);
        else if (offset === target.getTextContentSize()) target.insertAfter(host);
        else target.splitText(offset)[0].insertAfter(host);
      },
      { discrete: true },
    );
  });
}

function caretHostCount(mounted: MountedEditor): number {
  return mounted.lexical.getEditorState().read(
    () =>
      $dfs()
        .map(({ node }) => node)
        .filter($isCaretHost).length,
  );
}

describe("a text node of one zero-width space", () => {
  forEachView(VIEWS, ({ view }) => {
    describe.each(CASES)("$name", (testCase) => {
      const { before, after, content, isInNote } = testCase;
      const withoutZwsp = doc(content(before + after));
      const withZwsp = doc(content(`${before}${ZWSP}${after}`));

      it("is invisible to the save, the ops and positions when it is a marked caret host", async () => {
        const baseline = await mountInView(withoutZwsp, view);
        const mounted = await mountInView(withoutZwsp, view);

        await insertCaretHost(mounted, testCase);

        expect(caretHostCount(mounted)).toBe(1);
        expect(mounted.ref.current?.getUsj()).toEqual(withoutZwsp);
        expect(streamOf(opsOf(mounted))).toBe(streamOf(opsOf(baseline)));
        expect(nextParaPosition(mounted)).toBe(nextParaPosition(baseline));
        if (isInNote) expect(noteStreamOf(opsOf(mounted))).not.toContain(ZWSP);
      });

      it("is one real unit to the save, the ops and positions when it is authored", async () => {
        const baseline = await mountInView(withoutZwsp, view);
        const mounted = await mountInView(withZwsp, view);

        await annotateZwsp(mounted, testCase);

        // Positive control: the annotation really did split the zero-width space into its own run.
        expect(annotatedTexts(mounted)).toEqual([ZWSP]);
        expect(caretHostCount(mounted)).toBe(0);

        expect(mounted.ref.current?.getUsj()).toEqual(withZwsp);

        const stream = streamOf(opsOf(mounted));
        const noteStream = isInNote ? noteStreamOf(opsOf(mounted)) : undefined;
        const zwspStream = noteStream ?? stream;
        expect(zwspStream.split(ZWSP)).toHaveLength(2);
        expect(zwspStream.length).toBe(
          (isInNote ? noteStreamOf(opsOf(baseline)) : streamOf(opsOf(baseline))).length + 1,
        );

        const position = nextParaPosition(mounted);
        expect(position).toBe(stream.indexOf(NEXT_PARA_TEXT));
        expect(position).toBe((nextParaPosition(baseline) ?? 0) + (isInNote ? 0 : 1));
      });
    });
  });
});
