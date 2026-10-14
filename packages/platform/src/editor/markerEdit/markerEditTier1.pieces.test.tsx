/**
 * The marker-edit engine's per-node passes over display-byte carriers an annotation cuts into
 * pieces (`displayPieces.state.ts`): a cut glyph, verse or caller is one node to every transform,
 * so cutting it changes nothing the engine does with it.
 */
import { mountExpandedNoteEditor, mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { $textContaining, twoParaUsj } from "../positions/positions.test-helpers";
import { inOneUpdate } from "./displayAnnotations.test-helpers";
import { $keepProtectedNoteCloser } from "./markerEditTier1.utils";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { $createTextNode, $getRoot, $isElementNode, LexicalEditor, LexicalNode } from "lexical";
import {
  $addDisplayAnnotation,
  $coveredDisplayText,
  $displayAnnotationsOf,
  $isAttributeRunNode,
  $isCharNode,
  $isMarkerNode,
  $isNoteNode,
  $isParaNode,
  $isVerseNode,
  $lastPiece,
  $logicalChildren,
  $logicalText,
  $noteEditableCallerNode,
  $pieces,
  CharNode,
  getEditableCallerText,
  NoteNode,
  ParaNode,
} from "shared";

function $find<T extends LexicalNode>(guard: (node: LexicalNode) => node is T): T {
  let found: T | undefined;
  const walk = (node: LexicalNode): void => {
    if (found) return;
    if (guard(node)) found = node;
    else if ($isElementNode(node)) node.getChildren().forEach(walk);
  };
  walk($getRoot());
  if (!found) throw new Error("not found");
  return found;
}

/** Every annotation's held bytes, read across all its pieces. */
function heldBytes(editor: LexicalEditor): { [id: string]: string } {
  return editor.getEditorState().read(() => {
    const out: { [id: string]: string } = {};
    const walk = (node: LexicalNode): void => {
      for (const annotation of $displayAnnotationsOf(node))
        out[annotation.id] = (out[annotation.id] ?? "") + $coveredDisplayText(node, annotation);
      if ($isElementNode(node)) node.getChildren().forEach(walk);
    };
    walk($getRoot());
    return out;
  });
}

/** The first paragraph after the chapter: its logical children, as `type:text`. */
function firstParaShape(editor: LexicalEditor): string[] {
  return editor
    .getEditorState()
    .read(() =>
      $logicalChildren($getRoot().getChildren().filter($isParaNode)[0]).map(
        (child) =>
          `${child.getType()}:${$isElementNode(child) ? child.getTextContent() : $logicalText(child)}`,
      ),
    );
}

describe("a carrier an annotation cuts into pieces", () => {
  it("keeps a verse whose number is held whole, with its number and its one run", async () => {
    const verse: MarkerObject = { type: "verse", marker: "v", number: "2", altnumber: "3" };
    const mounted = await mountStandardViewEditor(twoParaUsj(["in the ", verse, "and the earth"]));
    const before = firstParaShape(mounted.lexical);
    await inOneUpdate(mounted.lexical, () => {
      // `\v 2 `: hold the `2` alone, so the verse is cut in three.
      $addDisplayAnnotation($find($isVerseNode), "test", "digit", 3, 4);
    });
    mounted.lexical.getEditorState().read(() => {
      const found = $find($isVerseNode);
      expect($pieces(found).length).toBe(3);
      expect(found.getNumber()).toBe("2");
      const para = $getRoot().getChildren().filter($isParaNode)[0];
      expect(para.getChildren().filter($isAttributeRunNode).length).toBe(1);
    });
    expect(firstParaShape(mounted.lexical)).toEqual(before);
    expect(heldBytes(mounted.lexical)).toEqual({ digit: "2" });
  });

  it("keeps a paragraph marker's separator after the whole glyph", async () => {
    const usj: Usj = {
      ...twoParaUsj(["first line"]),
      content: [
        ...twoParaUsj([]).content.slice(0, 2),
        { type: "para", marker: "q1", content: ["first line"] },
        { type: "para", marker: "p", content: ["depart here"] },
      ],
    };
    const mounted = await mountStandardViewEditor(usj);
    const before = firstParaShape(mounted.lexical);
    await inOneUpdate(mounted.lexical, () => {
      const para = $getRoot().getChildren().filter($isParaNode)[0];
      const glyph = para.getFirstChild();
      if (!$isMarkerNode(glyph)) throw new Error("no paragraph glyph");
      // `\q1`: hold the `1` alone.
      $addDisplayAnnotation(glyph, "test", "level", 2, 3);
    });
    mounted.lexical.getEditorState().read(() => {
      const para: ParaNode = $getRoot().getChildren().filter($isParaNode)[0];
      const glyph = para.getFirstChild();
      if (!glyph) throw new Error("no glyph");
      expect($pieces(glyph).map((piece) => piece.getTextContent())).toEqual(["\\q", "1"]);
    });
    expect(firstParaShape(mounted.lexical)).toEqual(before);
    expect(heldBytes(mounted.lexical)).toEqual({ level: "1" });
  });

  it("renames a char span to the name its whole opener spells", async () => {
    const word: MarkerObject = { type: "char", marker: "w", content: ["grace"] };
    const mounted = await mountStandardViewEditor(twoParaUsj(["the ", word, " of God"]));
    await inOneUpdate(mounted.lexical, () => {
      const opener = $find($isCharNode).getFirstChild();
      if (!$isMarkerNode(opener)) throw new Error("no opener");
      // The user types `j` at the opener's end; an annotation holds that `j`.
      opener.setTextContent("\\wj");
      opener.select(3, 3);
      $addDisplayAnnotation(opener, "test", "typed", 2, 3);
    });
    await inOneUpdate(mounted.lexical, () => $textContaining("depart here").select(1, 1));
    mounted.lexical.getEditorState().read(() => {
      const char: CharNode = $find($isCharNode);
      expect(char.getMarker()).toBe("wj");
      const glyphs = $logicalChildren(char).filter($isMarkerNode).map($logicalText);
      expect(glyphs).toEqual(["\\wj", "\\wj*"]);
    });
    expect(heldBytes(mounted.lexical)).toEqual({ typed: "j" });
  });

  it("keeps an expanded note's caller whole and out of the note's content", async () => {
    const note: MarkerObject = {
      type: "note",
      marker: "f",
      caller: "+",
      content: [{ type: "char", marker: "ft", content: ["a note"] }],
    };
    const mounted = await mountExpandedNoteEditor(twoParaUsj(["text", note, " more"]));
    const noteText = () =>
      mounted.lexical.getEditorState().read(() => $find($isNoteNode).getTextContent());
    const before = noteText();
    await inOneUpdate(mounted.lexical, () => {
      const caller = $noteEditableCallerNode($find($isNoteNode));
      if (!caller) throw new Error("no caller text");
      // ` + `: hold the `+` alone.
      $addDisplayAnnotation(caller, "test", "caller", 1, 2);
    });
    mounted.lexical.getEditorState().read(() => {
      const found: NoteNode = $find($isNoteNode);
      const caller = $noteEditableCallerNode(found);
      if (!caller) throw new Error("no caller text");
      expect($pieces(caller).length).toBe(3);
      expect($logicalText(caller)).toBe(getEditableCallerText("+"));
      expect(found.getCaller()).toBe("+");
      expect($lastPiece(caller).getNextSibling()?.getType()).toBe("char");
    });
    expect(noteText()).toBe(before);
    expect(heldBytes(mounted.lexical)).toEqual({ caller: "+" });
  });

  it("keeps a glyph edit pending while the caret moves between the glyph's pieces", async () => {
    const word: MarkerObject = { type: "char", marker: "w", content: ["grace"] };
    const mounted = await mountStandardViewEditor(twoParaUsj(["the ", word, " of God"]));
    await inOneUpdate(mounted.lexical, () => {
      const opener = $find($isCharNode).getFirstChild();
      if (!$isMarkerNode(opener)) throw new Error("no opener");
      opener.setTextContent("\\wj");
      opener.select(3, 3);
      $addDisplayAnnotation(opener, "test", "typed", 2, 3);
    });
    // Into the glyph's first piece, `\w`: the caret is still in the glyph being edited.
    await inOneUpdate(mounted.lexical, () => $find($isCharNode).getFirstChild()?.selectEnd());
    const read = () =>
      mounted.lexical.getEditorState().read(() => {
        const char = $find($isCharNode);
        const opener = char.getFirstChild();
        return [char.getMarker(), opener ? $logicalText(opener) : ""];
      });
    expect(read()).toEqual(["w", "\\wj"]);
    await inOneUpdate(mounted.lexical, () => $textContaining("depart here").select(1, 1));
    expect(read()).toEqual(["wj", "\\wj"]);
  });

  it("unwraps a note whose opener is deleted with its cut caller spelled as content", async () => {
    const note: MarkerObject = {
      type: "note",
      marker: "f",
      caller: "+",
      content: ["a note"],
    };
    const mounted = await mountExpandedNoteEditor(twoParaUsj(["text", note, " more"]));
    await inOneUpdate(mounted.lexical, () => {
      const caller = $noteEditableCallerNode($find($isNoteNode));
      if (!caller) throw new Error("no caller text");
      $addDisplayAnnotation(caller, "test", "caller", 1, 2);
    });
    await inOneUpdate(mounted.lexical, () => $find($isNoteNode).getFirstChild()?.remove());
    const paraText = mounted.lexical
      .getEditorState()
      .read(() => $getRoot().getChildren().filter($isParaNode)[0].getTextContent());
    expect(paraText.endsWith("text + a note more")).toBe(true);
  });

  it("keeps a protected note's closer whole when text typed after it moves in front of it", async () => {
    const note: MarkerObject = {
      type: "note",
      marker: "f",
      caller: "+",
      content: ["a note"],
    };
    const mounted = await mountExpandedNoteEditor(twoParaUsj(["text", note, " more"]));
    let closerText = "";
    await inOneUpdate(mounted.lexical, () => {
      const found = $find($isNoteNode);
      found.getChildren().forEach((child) => {
        if ($isMarkerNode(child)) child.setMode("token");
      });
      const closer = found.getLastChild();
      if (!$isMarkerNode(closer)) throw new Error("no closer");
      closerText = closer.getTextContent();
      // `\f*`: hold the `*` alone.
      $addDisplayAnnotation(closer, "test", "star", 2, 3);
    });
    await inOneUpdate(mounted.lexical, () => {
      const found = $find($isNoteNode);
      found.append($createTextNode("x"));
      $keepProtectedNoteCloser(found);
    });
    mounted.lexical.getEditorState().read(() => {
      const found = $find($isNoteNode);
      expect(found.getTextContent().endsWith(`a notex${closerText}`)).toBe(true);
    });
    expect(heldBytes(mounted.lexical)).toEqual({ star: "*" });
  });
});
