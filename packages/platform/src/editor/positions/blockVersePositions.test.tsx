import Editor from "../Editor";
import { EditorRef } from "../editor.model";
import { Usj, UsjDocumentLocation } from "@eten-tech-foundation/scripture-utilities";
import { EditorRefPlugin } from "@lexical/react/LexicalEditorRefPlugin";
import { act, render } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  $setSelection,
  LexicalEditor,
  LexicalNode,
} from "lexical";
import { createRef, RefObject } from "react";
import { $isImmutableTableNode } from "shared";
import { BLOCK_VERSE_VIEW_MODE, getViewOptions, ViewOptions } from "shared-react";

/** One chapter exercising every regrouping shape the block layout has: content before any
 * paragraph (an implied paragraph at the root), a paragraph split across verses 2 and 3, a comment
 * spanning that split, a poetry line continuing verse 3 with a note in it, a heading, a paragraph
 * whose lead-in precedes its verse, an empty paragraph and a table kept with the open verse, and a
 * paragraph continuing verse 5 into verse 6. */
const blockVerseFixtureUsj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
    { type: "chapter", marker: "c", number: "1" },
    "Implied text before any paragraph ",
    { type: "verse", marker: "v", number: "1" },
    "verse one implied.",
    {
      type: "para",
      marker: "p",
      content: [
        { type: "verse", marker: "v", number: "2" },
        "In the beginning ",
        { type: "ms", marker: "zmsc-s", sid: "c1" },
        "commented start ",
        { type: "verse", marker: "v", number: "3" },
        "commented end",
        { type: "ms", marker: "zmsc-e", eid: "c1" },
        " rest of three",
      ],
    },
    {
      type: "para",
      marker: "q1",
      content: [
        "poetry continues three ",
        {
          type: "note",
          marker: "f",
          caller: "+",
          content: [{ type: "char", marker: "ft", content: ["a note"] }],
        },
        " after note",
      ],
    },
    { type: "para", marker: "s", content: ["A Heading"] },
    {
      type: "para",
      marker: "p",
      content: [
        "lead-in before five ",
        { type: "verse", marker: "v", number: "5" },
        "verse five text",
      ],
    },
    { type: "para", marker: "b" },
    {
      type: "table",
      content: [
        {
          type: "table:row",
          marker: "tr",
          content: [
            { type: "table:cell", marker: "tc1", align: "start", content: ["cell one"] },
            { type: "table:cell", marker: "tc2", align: "start", content: ["cell two"] },
          ],
        },
      ],
    },
    {
      type: "para",
      marker: "p",
      content: [
        "tail of five ",
        { type: "verse", marker: "v", number: "6" },
        "verse six",
        { type: "char", marker: "nd", content: ["LORD"] },
        ".",
      ],
    },
  ],
};

const blockOptions = getViewOptions(BLOCK_VERSE_VIEW_MODE) as ViewOptions;
/** The same view laid out inline: the reference the block layout's positions must agree with. */
const inlineOptions: ViewOptions = { ...blockOptions, verseLayout: undefined };

interface Mounted {
  ref: RefObject<EditorRef | null>;
  lexical: LexicalEditor;
}

async function mountReadonly(view: ViewOptions): Promise<Mounted> {
  const ref = createRef<EditorRef>();
  const lexicalRef = createRef<LexicalEditor>();
  await act(async () => {
    render(
      <Editor ref={ref} defaultUsj={blockVerseFixtureUsj} options={{ view, isReadonly: true }}>
        <EditorRefPlugin editorRef={lexicalRef} />
      </Editor>,
    );
  });
  if (!lexicalRef.current) throw new Error("lexical editor was not captured");
  return { ref, lexical: lexicalRef.current };
}

/** Every leaf in document order: text nodes, decorators, and empty elements. The two layouts hold
 * the same leaves in the same order — the block layout regroups containers, never leaves. */
function $leaves(): LexicalNode[] {
  const out: LexicalNode[] = [];
  const visit = (node: LexicalNode) => {
    if ($isElementNode(node) && node.getChildrenSize() > 0) node.getChildren().forEach(visit);
    else out.push(node);
  };
  $getRoot().getChildren().forEach(visit);
  return out;
}

interface Point {
  key: string;
  offset: number;
  type: "text" | "element";
}

/** Every text offset, every empty element, and both edges of every non-text leaf — including a leaf
 * inside a comment mark, whose edges are element points on the mark. */
function $points(): Point[] {
  const out: Point[] = [];
  for (const leaf of $leaves()) {
    if ($isTextNode(leaf)) {
      for (let offset = 0; offset <= leaf.getTextContentSize(); offset++)
        out.push({ key: leaf.getKey(), offset, type: "text" });
    } else if ($isElementNode(leaf)) out.push({ key: leaf.getKey(), offset: 0, type: "element" });
    else {
      const parent = leaf.getParentOrThrow();
      const index = leaf.getIndexWithinParent();
      out.push({ key: parent.getKey(), offset: index, type: "element" });
      out.push({ key: parent.getKey(), offset: index + 1, type: "element" });
    }
  }
  return out;
}

/** A point named by leaves rather than containers, so the two layouts' points compare. */
function $describePoint(): string {
  const selection = $getSelection();
  if (!$isRangeSelection(selection)) return "no selection";
  const node = selection.anchor.getNode();
  const { offset } = selection.anchor;
  const leaves = $leaves();
  const leafIndex = (target: LexicalNode) => leaves.findIndex((leaf) => leaf.is(target));
  if ($isTextNode(node)) return `leaf ${leafIndex(node)} at ${offset}`;
  if (!$isElementNode(node)) return `leaf ${leafIndex(node)}`;
  if (node.getChildrenSize() === 0) return `empty leaf ${leafIndex(node)}`;
  const child = node.getChildAtIndex(offset);
  let edge: LexicalNode = child ?? node;
  if (child)
    while ($isElementNode(edge) && edge.getChildrenSize() > 0) edge = edge.getFirstChildOrThrow();
  else while ($isElementNode(edge) && edge.getChildrenSize() > 0) edge = edge.getLastChildOrThrow();
  return `${child ? "before" : "after"} leaf ${leafIndex(edge)}`;
}

function placeCaret(lexical: LexicalEditor, point: Point): void {
  lexical.update(
    () => {
      const selection = $createRangeSelection();
      selection.anchor.set(point.key, point.offset, point.type);
      selection.focus.set(point.key, point.offset, point.type);
      $setSelection(selection);
    },
    { discrete: true },
  );
}

/** `setSelection(location)`, then where the caret landed and what `getSelection()` reports. */
function landAt(mounted: Mounted, location: UsjDocumentLocation) {
  // A refused location leaves the caret where it was, so start every landing from no selection.
  mounted.lexical.update(() => $setSelection(null), { discrete: true });
  act(() => mounted.ref.current?.setSelection({ start: location }));
  return {
    // `read`, not `getEditorState().read`: `setSelection` commits in a queued update, which only
    // `read` flushes first.
    point: mounted.lexical.read($describePoint),
    reported: mounted.ref.current?.getSelection(),
  };
}

describe("positions in the block verse layout", () => {
  it("reports and accepts the inline layout's locations at every point", async () => {
    const inline = await mountReadonly(inlineOptions);
    const block = await mountReadonly(blockOptions);
    const inlinePoints = inline.lexical.getEditorState().read($points);
    const blockPoints = block.lexical.getEditorState().read($points);
    expect(blockPoints.length).toBe(inlinePoints.length);

    const mismatches: unknown[] = [];
    inlinePoints.forEach((inlinePoint, index) => {
      placeCaret(inline.lexical, inlinePoint);
      placeCaret(block.lexical, blockPoints[index]);
      const location = inline.ref.current?.getSelection()?.start;
      if (!location) throw new Error(`inline point ${index} reported no location`);

      // Outbound: the same caret reports the same location in both layouts.
      const reported = block.ref.current?.getSelection();
      if (JSON.stringify(reported) !== JSON.stringify({ start: location }))
        mismatches.push({ index, check: "getSelection", location, reported });

      // Inbound: the location lands on the same leaf position in both layouts, and reads back the
      // same way (a location a caret cannot rest on reads back as the one it lands on).
      const inlineLanding = landAt(inline, location);
      const blockLanding = landAt(block, location);
      if (JSON.stringify(blockLanding) !== JSON.stringify(inlineLanding))
        mismatches.push({ index, check: "setSelection", location, inlineLanding, blockLanding });
    });
    expect(mismatches).toEqual([]);
  });

  it("accepts the older root and container spellings the inline layout accepts", async () => {
    const inline = await mountReadonly(inlineOptions);
    const block = await mountReadonly(blockOptions);
    const older: UsjDocumentLocation[] = [];
    for (let offset = 0; offset <= blockVerseFixtureUsj.content.length; offset++)
      older.push({ jsonPath: "$", offset });
    blockVerseFixtureUsj.content.forEach((item, top) => {
      if (typeof item === "string" || !item.content) return;
      for (let offset = 0; offset <= item.content.length; offset++)
        older.push({ jsonPath: `$.content[${top}]`, offset } as UsjDocumentLocation);
    });
    const mismatches = older
      .map((location) => ({
        location,
        inline: landAt(inline, location),
        block: landAt(block, location),
      }))
      .filter((row) => JSON.stringify(row.inline) !== JSON.stringify(row.block));
    expect(mismatches).toEqual([]);
  });

  it("reports the same location for an element point at the end of a table", async () => {
    // The every-point oracle cannot reach this point: nothing follows the last cell inside the
    // table. Pins `$endsLine` treating a verse block's child as a line end.
    const inline = await mountReadonly(inlineOptions);
    const block = await mountReadonly(blockOptions);
    const $tableEnd = (): Point => {
      // A substring match on the type name is too loose here: "immutable-chapter" and
      // "immutable-verse" both contain "table" (immu-TABLE), so it has to be the exact table type.
      const findTable = (node: LexicalNode): LexicalNode | undefined => {
        if ($isImmutableTableNode(node)) return node;
        return $isElementNode(node) ? node.getChildren().map(findTable).find(Boolean) : undefined;
      };
      const table = findTable($getRoot());
      if (!table || !$isElementNode(table)) throw new Error("no table");
      return { key: table.getKey(), offset: table.getChildrenSize(), type: "element" };
    };
    placeCaret(inline.lexical, inline.lexical.getEditorState().read($tableEnd));
    placeCaret(block.lexical, block.lexical.getEditorState().read($tableEnd));
    expect(block.ref.current?.getSelection()).toEqual(inline.ref.current?.getSelection());
  });
});
