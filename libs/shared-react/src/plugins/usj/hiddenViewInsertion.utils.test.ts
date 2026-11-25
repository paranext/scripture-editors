import { $plainInsertion } from "./hiddenViewInsertion.utils";
import { $createRangeSelection, $createTextNode, $getRoot, createEditor, TextNode } from "lexical";
import { $createNoteNode, $createParaNode, NoteNode, ParaNode } from "shared";

describe("$plainInsertion", () => {
  /** A paragraph `before ` + a note + ` after`, and whether a two-line plain paste over the range
   * from `anchor` to `focus` (each picked from its three texts) joins its lines. */
  function joinsLines(
    pick: (texts: { before: TextNode; note: TextNode; after: TextNode }) => [TextNode, TextNode],
  ): boolean | undefined {
    const editor = createEditor({
      nodes: [ParaNode, NoteNode],
      onError: (error) => {
        throw error;
      },
    });
    const data = {
      getData: (type: string) => (type === "text/plain" ? "one\ntwo" : ""),
    } as unknown as DataTransfer;
    let result: boolean | undefined;
    editor.update(
      () => {
        const before = $createTextNode("before ");
        const note = $createTextNode("note text");
        const after = $createTextNode(" after");
        $getRoot().append(
          $createParaNode("p").append(before, $createNoteNode("f", "+").append(note), after),
        );
        const [anchor, focus] = pick({ before, note, after });
        const selection = $createRangeSelection();
        selection.anchor.set(anchor.getKey(), 2, "text");
        selection.focus.set(focus.getKey(), 2, "text");
        result = $plainInsertion(data, selection, false)?.joinsLines;
      },
      { discrete: true },
    );
    return result;
  }

  // Judged where the selection starts, which is its focus when it was made backward.
  it.each([
    ["forward", false, ({ before, note }) => [before, note]],
    ["backward", false, ({ before, note }) => [note, before]],
    ["forward", true, ({ note, after }) => [note, after]],
    ["backward", true, ({ note, after }) => [after, note]],
  ] satisfies [string, boolean, Parameters<typeof joinsLines>[0]][])(
    "judges a %s selection by where it starts (joins: %s)",
    (_, joins, pick) => {
      expect(joinsLines(pick)).toBe(joins);
    },
  );
});
