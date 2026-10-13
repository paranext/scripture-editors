/**
 * The note helpers read a note whose display-byte carriers (its caller, its glyphs, its category
 * value) an annotation has cut into pieces (`displayPieces.state.ts`) exactly as they read the
 * uncut note: every caret lands at the same place in the same bytes.
 */
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { createBasicTestEnvironment } from "../../../../../libs/shared/src/nodes/usj/test.utils";
import {
  $describeLogicalPoint,
  $describeLogicalSelection,
  countContinuationPieces,
  cutEveryCarrierIntoPieces,
} from "../../plugins/usj/react-test.utils";
import { getDefaultViewOptions } from "../../views/view-options.utils";
import { usjReactNodes } from "./index";
import {
  $emptyNoteContentSlot,
  $selectNote,
  $selectNoteCategoryOffset,
  $selectNoteTextOffset,
  $stripSelectionToQuotation,
  NoteGlyphCaret,
} from "./note.utils";
import {
  $createRangeSelection,
  $createTextNode,
  $getRoot,
  $setSelection,
  $setState,
  LexicalEditor,
} from "lexical";
import {
  $createAttributeRunNode,
  $createCharNode,
  $createMarkerNode,
  $createNoteNode,
  $createParaNode,
  $createVerseNode,
  $isNoteNode,
  $logicalText,
  $pieceAtLogicalOffset,
  getEditableCallerText,
  NBSP,
  NoteNode,
  textTypeState,
  TypedMarkNode,
} from "shared";

/** `\f + \cat People\cat* \fr 3:2 \ft Hello\ft*\f*` as an expanded editable note, in a paragraph
 * after `\v 1 In ` and before `\v 2 the`. `content` false leaves the note's runs out. */
function $build(content = true): void {
  const value = $createTextNode(`${NBSP}People`);
  $setState(value, textTypeState, "attribute");
  const note = $createNoteNode("f", "+", false).append(
    $createMarkerNode("f"),
    $createTextNode(getEditableCallerText("+")).toggleUnmergeable(),
    $createAttributeRunNode("cat").append(
      $createMarkerNode("cat"),
      value,
      $createMarkerNode("cat", "closing"),
    ),
  );
  if (content)
    note.append(
      $createCharNode("fr").append($createMarkerNode("fr"), $createTextNode(`${NBSP}3:2 `)),
      $createCharNode("ft").append(
        $createMarkerNode("ft"),
        $createTextNode(`${NBSP}Hello`),
        $createMarkerNode("ft", "closing"),
      ),
    );
  note.append($createMarkerNode("f", "closing"));
  $getRoot().append(
    $createParaNode().append(
      $createVerseNode("1", "\\v 1 "),
      $createTextNode("In "),
      note,
      $createVerseNode("2", "\\v 2 "),
      $createTextNode("the beginning"),
    ),
  );
}

function $note(): NoteNode {
  const note = $getRoot()
    .getAllTextNodes()
    .map((node) => node.getParent())
    .find($isNoteNode);
  if (!note) throw new Error("no note");
  return note;
}

/** Run `$act` on the document `$build` builds, uncut and with every carrier cut into pieces, and
 * return both answers. */
async function both<T>($act: (editor: LexicalEditor) => T, content = true): Promise<T[]> {
  const answers: T[] = [];
  for (const cut of [false, true]) {
    const { editor } = createBasicTestEnvironment([TypedMarkNode, ...usjReactNodes], () =>
      $build(content),
    );
    if (cut) {
      await cutEveryCarrierIntoPieces(editor);
      expect(countContinuationPieces(editor)).toBeGreaterThan(5);
    }
    let answer: T | undefined;
    editor.update(
      () => {
        answer = $act(editor);
      },
      { discrete: true },
    );
    answers.push(answer as T);
  }
  return answers;
}

describe("a note whose carriers are cut into pieces", () => {
  it("places a content offset as the uncut note does", async () => {
    for (const offset of [0, 1, 4, 5, 6, 20]) {
      const [uncut, cut] = await both(() => {
        $selectNoteTextOffset($note(), offset);
        return $describeLogicalSelection();
      });
      expect([offset, cut]).toEqual([offset, uncut]);
    }
  });

  it("places a caret in a run's glyph as the uncut note does", async () => {
    const glyphs: [number, NoteGlyphCaret][] = [
      [0, { index: 0, offset: 0 }],
      [0, { index: 0, offset: 2 }],
      [4, { index: 0, offset: 1 }],
      [4, { index: 1, offset: 2 }],
      [9, { index: 0, offset: 3 }],
    ];
    for (const [offset, glyph] of glyphs) {
      const [uncut, cut] = await both(() => {
        $selectNoteTextOffset($note(), offset, glyph);
        return $describeLogicalSelection();
      });
      expect([offset, glyph, cut]).toEqual([offset, glyph, uncut]);
    }
  });

  it("places a category offset as the uncut note does", async () => {
    for (const [offset, glyph] of [
      [0, undefined],
      [3, undefined],
      [6, undefined],
      [0, { index: 0, offset: 2 }],
      [6, { index: 0, offset: 3 }],
    ] as const) {
      const [uncut, cut] = await both(() => {
        $selectNoteCategoryOffset($note(), offset, glyph);
        return $describeLogicalSelection();
      });
      expect([offset, glyph, cut]).toEqual([offset, glyph, uncut]);
    }
  });

  it("selects the end of the note's content in front of its closer", async () => {
    const [uncut, cut] = await both(() => {
      $selectNote($note(), {
        ...getDefaultViewOptions(),
        markerMode: "editable",
        noteMode: "expanded",
      });
      return $describeLogicalSelection();
    });
    expect(cut).toEqual(uncut);
  });

  it("finds an empty note's typing slot in front of its closer", async () => {
    const [uncut, cut] = await both(() => {
      const note = $note();
      const slot = $emptyNoteContentSlot(note);
      return slot === undefined ? "none" : $describeLogicalPoint(note, slot);
    }, false);
    expect(uncut).not.toBe("none");
    expect(cut).toEqual(uncut);
  });

  it("quotes a verse once, wherever the selection starts in it", async () => {
    for (const start of [0, 2, 3, 4]) {
      const [uncut, cut] = await both(() => {
        const nodes = $getRoot().getAllTextNodes();
        const verse = nodes.find((node) => $logicalText(node) === "\\v 2 ");
        const last = nodes.at(-1);
        if (!verse || !last) throw new Error("no verse");
        // `start` is an offset into the whole verse text: name the piece holding it.
        const [piece, at] = $pieceAtLogicalOffset(verse, start);
        const selection = $createRangeSelection();
        selection.anchor.set(piece.getKey(), at, "text");
        selection.focus.set(last.getKey(), 3, "text");
        $setSelection(selection);
        return $stripSelectionToQuotation(selection);
      });
      expect([start, cut]).toEqual([start, uncut]);
    }
  });
});
