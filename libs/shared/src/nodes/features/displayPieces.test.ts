import { $chapterGlyphTextNode } from "../usj/attributeDisplay.utils.js";
import { $createChapterNode, $isChapterNode } from "../usj/ChapterNode.js";
import { $createCharNode, CharNode } from "../usj/CharNode.js";
import { usjBaseNodes } from "../usj/index.js";
import { getVisibleOpenMarkerText } from "../usj/markerText.utils.js";
import { NBSP } from "../usj/node-constants.js";
import { $createParaNode, ParaNode } from "../usj/ParaNode.js";
import { createBasicTestEnvironment } from "../usj/test.utils.js";
import { $createVerseNode, VerseNode } from "../usj/VerseNode.js";
import { textTypeState } from "../collab/delta.state.js";
import {
  $addDisplayAnnotation,
  $carrierHoldableRange,
  $displayAnnotationsOf,
  $removeDisplayAnnotation,
  registerDisplayAnnotationBasis,
} from "./displayAnnotations.utils.js";
import {
  $deferToPieceHead,
  $isPieceContinuation,
  $isPieceOf,
  $lastPiece,
  isSerializedPieceContinuation,
  joinSerializedPieces,
  $logicalChildren,
  $logicalNextSibling,
  $logicalOffset,
  $logicalPointOffset,
  $logicalPreviousSibling,
  $logicalText,
  $pieceAtLogicalOffset,
  $pieceHead,
  $pieces,
  $pieceStart,
  $setLogicalText,
} from "./displayPieces.state.js";
import { $createMarkerNode, $isCanonicalMarkerNode, MarkerNode } from "./MarkerNode.js";
import { TypedMarkNode } from "./TypedMarkNode.js";
import {
  $createRangeSelection,
  $createTextNode,
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  $setSelection,
  $setState,
  HISTORY_MERGE_TAG,
  LexicalEditor,
  LexicalNode,
  NODE_STATE_KEY,
  SerializedLexicalNode,
  TextNode,
} from "lexical";
import { onTestFinished, vi } from "vitest";

function mount(): LexicalEditor {
  const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
  registerDisplayAnnotationBasis(editor);
  return editor;
}

/** `\w grace|lemma="grace" strong="G5485"\w*` as a char span's children; returns the span. */
function $span(): { char: CharNode; opener: MarkerNode; run: TextNode; closer: MarkerNode } {
  const opener = $createMarkerNode("w");
  const content = $createTextNode(`${NBSP}grace`);
  const run = $setState(
    $createTextNode('|lemma="grace" strong="G5485"'),
    textTypeState,
    "attribute",
  );
  const closer = $createMarkerNode("w", "closing");
  const char = $createCharNode("w").append(opener, content, run, closer);
  $getRoot().append($createParaNode().append(char));
  return { char, opener, run, closer };
}

function texts(nodes: LexicalNode[]): string[] {
  return nodes.map((node) => node.getTextContent());
}

function $holdIds(node: LexicalNode): string[] {
  return $displayAnnotationsOf(node).map((a) => `${a.id}[${a.start},${a.end})`);
}

describe("carrier pieces", () => {
  it("cuts a glyph held in part at the hold's edges into pieces of its own class", () => {
    const editor = mount();
    let closer!: MarkerNode;
    editor.update(
      () => {
        closer = $span().closer;
        $addDisplayAnnotation(closer, "check", "a", 2, 3);
      },
      { discrete: true },
    );
    editor.read(() => {
      const pieces = $pieces(closer);
      expect(texts(pieces)).toEqual(["\\w", "*"]);
      expect(pieces.every((piece) => piece instanceof MarkerNode)).toBe(true);
      expect(pieces.map($isPieceContinuation)).toEqual([false, true]);
      expect(pieces.map($holdIds)).toEqual([[], ["a[0,1)"]]);
      expect($logicalText(closer)).toBe("\\w*");
      expect($isCanonicalMarkerNode(closer)).toBe(true);
      expect($isCanonicalMarkerNode(pieces[1])).toBe(true);
      expect($pieceHead(pieces[1])).toBe(closer);
      expect($lastPiece(closer)).toBe(pieces[1]);
    });
  });

  it("keeps a run's pieces as one logical child, sibling and text", () => {
    const editor = mount();
    editor.update(
      () => {
        const { run } = $span();
        $addDisplayAnnotation(run, "check", "a", 23, 28);
      },
      { discrete: true },
    );
    editor.read(() => {
      const para = $getRoot().getFirstChild();
      const char = $isElementNode(para) ? para.getFirstChild() : null;
      if (!(char instanceof CharNode)) throw new Error("no span");
      expect(texts(char.getChildren())).toEqual([
        "\\w",
        `${NBSP}grace`,
        '|lemma="grace" strong="',
        "G5485",
        '"',
        "\\w*",
      ]);
      const logical = $logicalChildren(char);
      expect(texts(logical)).toEqual(["\\w", `${NBSP}grace`, '|lemma="grace" strong="', "\\w*"]);
      const run = logical[2];
      expect($logicalText(run)).toBe('|lemma="grace" strong="G5485"');
      expect($logicalNextSibling(run)?.getTextContent()).toBe("\\w*");
      expect($logicalPreviousSibling(logical[3])).toBe(run);
      expect($pieces(run).map($holdIds)).toEqual([[], ["a[0,5)"], []]);
    });
  });

  it("maps an offset into a piece to the whole carrier's offset and back", () => {
    const editor = mount();
    let run!: TextNode;
    editor.update(
      () => {
        run = $span().run;
        $addDisplayAnnotation(run, "check", "a", 23, 28);
      },
      { discrete: true },
    );
    editor.read(() => {
      const [first, held, last] = $pieces(run);
      expect([$logicalOffset(first, 0), $logicalOffset(held, 0), $logicalOffset(last, 1)]).toEqual([
        0, 23, 29,
      ]);
      expect($pieceAtLogicalOffset(run, 0)).toEqual([first, 0]);
      // On a cut, the end of the piece before it.
      expect($pieceAtLogicalOffset(held, 23)).toEqual([first, 23]);
      expect($pieceAtLogicalOffset(run, 24)).toEqual([held, 1]);
      expect($pieceAtLogicalOffset(run, 29)).toEqual([last, 1]);
      expect($pieceAtLogicalOffset(run, 40)).toEqual([last, 1]);
    });
  });

  it("joins the pieces again once the hold is gone", () => {
    const editor = mount();
    let run!: TextNode;
    editor.update(
      () => {
        run = $span().run;
        $addDisplayAnnotation(run, "check", "a", 23, 28);
      },
      { discrete: true },
    );
    editor.update(
      () => {
        for (const piece of $pieces(run)) $removeDisplayAnnotation(piece, "check", "a");
      },
      { discrete: true },
    );
    editor.read(() => {
      expect($pieces(run).length).toBe(1);
      expect(run.getTextContent()).toBe('|lemma="grace" strong="G5485"');
      expect(run.getNextSibling()?.getTextContent()).toBe("\\w*");
    });
  });

  it("cuts at every annotation's edges and holds each piece by the annotations covering it", () => {
    const editor = mount();
    let verse!: LexicalNode;
    editor.update(
      () => {
        verse = $createVerseNode("12", getVisibleOpenMarkerText("v", "12"));
        $getRoot().append($createParaNode().append(verse, $createTextNode("In the")));
        $addDisplayAnnotation(verse, "comment", "a", 0, 5);
        $addDisplayAnnotation(verse, "check", "b", 3, 5);
      },
      { discrete: true },
    );
    editor.read(() => {
      const pieces = $pieces(verse);
      expect(texts(pieces)).toEqual([`\\v${NBSP}`, "12", " "]);
      expect(pieces.map($holdIds)).toEqual([["a[0,3)"], ["a[0,2)", "b[0,2)"], []]);
      expect(pieces.map($pieceStart)).toEqual([0, 3, 5]);
      // The carrier's own edge whitespace is its trailing space; the separator inside it is
      // holdable, so the first piece is holdable whole.
      expect(pieces.map($carrierHoldableRange)).toEqual([
        [0, 3],
        [0, 2],
        [0, 0],
      ]);
    });
  });

  it("keeps a hold on its bytes when a byte is typed at a held piece's edge", () => {
    const editor = mount();
    let run!: TextNode;
    editor.update(
      () => {
        run = $span().run;
        $addDisplayAnnotation(run, "check", "a", 23, 28);
      },
      { discrete: true },
    );
    editor.update(
      () => {
        const held = $pieces(run)[1];
        held.setTextContent("G5485x");
      },
      { discrete: true },
    );
    editor.read(() => {
      expect(texts($pieces(run))).toEqual(['|lemma="grace" strong="', "G5485", 'x"']);
      expect($pieces(run).map($holdIds)).toEqual([[], ["a[0,5)"], []]);
    });
  });

  it("respells a split glyph whole and keeps the hold on the bytes it respells", () => {
    const editor = mount();
    let closer!: MarkerNode;
    editor.update(
      () => {
        closer = $span().closer;
        $addDisplayAnnotation(closer, "check", "a", 2, 3);
      },
      { discrete: true },
    );
    editor.update(
      () => {
        closer.setMarker("nd");
      },
      { discrete: true },
    );
    editor.read(() => {
      expect(texts($pieces(closer))).toEqual(["\\nd", "*"]);
      expect($pieces(closer).map($holdIds)).toEqual([[], ["a[0,1)"]]);
    });
  });

  it("moves a caret with its byte through a cut and a join", () => {
    const editor = mount();
    let closer!: MarkerNode;
    editor.update(
      () => {
        closer = $span().closer;
        const selection = $createRangeSelection();
        selection.anchor.set(closer.getKey(), 2, "text");
        selection.focus.set(closer.getKey(), 2, "text");
        $setSelection(selection);
        $addDisplayAnnotation(closer, "check", "a", 2, 3);
      },
      { discrete: true },
    );
    editor.read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("no range selection");
      expect(selection.anchor.key).toBe(closer.getKey());
      expect(selection.anchor.offset).toBe(2);
    });
    editor.update(
      () => {
        const [, star] = $pieces(closer);
        const selection = $createRangeSelection();
        selection.anchor.set(star.getKey(), 1, "text");
        selection.focus.set(star.getKey(), 1, "text");
        $setSelection(selection);
        $removeDisplayAnnotation(star, "check", "a");
      },
      { discrete: true },
    );
    editor.read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("no range selection");
      expect(selection.anchor.key).toBe(closer.getKey());
      expect(selection.anchor.offset).toBe(3);
    });
  });

  it("keeps a caret at a boundary of the parent on the same child through a cut and a join", () => {
    const editor = mount();
    let closer!: MarkerNode;
    let para!: LexicalNode;
    editor.update(
      () => {
        const span = $span();
        closer = span.closer;
        para = span.char;
        const after = $createMarkerNode("x");
        span.char.append(after);
        // The caret at the boundary in front of `after`, set while the closer is still one node.
        span.char.select(after.getIndexWithinParent(), after.getIndexWithinParent());
        $addDisplayAnnotation(closer, "check", "a", 2, 3);
      },
      { discrete: true },
    );
    const $caretChild = () => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection) || !$isElementNode(para)) throw new Error("no caret");
      expect(selection.anchor.type).toBe("element");
      expect(selection.anchor.key).toBe(para.getKey());
      return para.getChildAtIndex(selection.anchor.offset)?.getTextContent();
    };
    editor.read(() => {
      expect(texts($pieces(closer))).toEqual(["\\w", "*"]);
      expect($caretChild()).toBe("\\x");
    });
    editor.update(
      () => {
        if (!$isElementNode(para)) throw new Error("no span");
        para.select(para.getChildrenSize() - 1, para.getChildrenSize() - 1);
        $removeDisplayAnnotation($pieces(closer)[1], "check", "a");
      },
      { discrete: true },
    );
    editor.read(() => {
      expect($pieces(closer).length).toBe(1);
      expect($caretChild()).toBe("\\x");
    });
  });

  it("makes a continuation whose head is gone a carrier of its own", () => {
    const editor = mount();
    let closer!: MarkerNode;
    editor.update(
      () => {
        closer = $span().closer;
        $addDisplayAnnotation(closer, "check", "a", 2, 3);
      },
      { discrete: true },
    );
    editor.update(
      () => {
        closer.remove();
      },
      { discrete: true },
    );
    editor.read(() => {
      const para = $getRoot().getFirstChild();
      const char = $isElementNode(para) ? para.getFirstChild() : null;
      if (!(char instanceof CharNode)) throw new Error("no span");
      const last = char.getLastChild();
      expect(last?.getTextContent()).toBe("*");
      expect($isPieceContinuation(last)).toBe(false);
    });
  });

  it("makes a continuation whose head is gone a carrier of its own beside a carrier of its class", () => {
    const editor = mount();
    let first!: VerseNode;
    let second!: VerseNode;
    editor.update(
      () => {
        first = $createVerseNode("1", getVisibleOpenMarkerText("v", "1"));
        second = $createVerseNode("2", getVisibleOpenMarkerText("v", "2"));
        $getRoot().append($createParaNode().append(first, second, $createTextNode("text")));
        $addDisplayAnnotation(second, "check", "a", 3, 4);
      },
      { discrete: true },
    );
    editor.read(() => expect(texts($pieces(second))).toEqual([`\\v${NBSP}`, "2", " "]));
    // The `\v ` piece of verse 2 is its head, the verse node itself.
    editor.update(() => second.remove(), { discrete: true });
    editor.read(() => {
      expect($logicalText(first)).toBe(getVisibleOpenMarkerText("v", "1"));
      expect(texts($pieces(first))).toEqual([getVisibleOpenMarkerText("v", "1")]);
      const orphan = $logicalNextSibling(first);
      if (!orphan) throw new Error("the rest of verse 2 is gone");
      expect(orphan.getTextContent()).toBe("2");
      expect($isPieceContinuation(orphan)).toBe(false);
      expect(texts($pieces(orphan))).toEqual(["2", " "]);
      expect($pieces(orphan).map($holdIds)).toEqual([["a[0,1)"], []]);
    });
  });

  it("keeps a carrier's pieces apart when its tree is read back from JSON", () => {
    const glyphText = getVisibleOpenMarkerText("c", "1") ?? "";
    const editor = mount();
    editor.update(
      () => {
        const glyph = $createTextNode(glyphText);
        $getRoot().append($createChapterNode("1").append(glyph));
        $addDisplayAnnotation(glyph, "check", "a", 3, 4);
      },
      { discrete: true },
    );
    const $glyphPieces = (): TextNode[] => {
      const chapter = $getRoot().getFirstChild();
      const glyph = $isChapterNode(chapter) ? $chapterGlyphTextNode(chapter) : undefined;
      if (!glyph) throw new Error("no chapter glyph");
      return $pieces(glyph);
    };
    editor.read(() => expect(texts($glyphPieces())).toEqual([`\\c${NBSP}`, "1", " "]));

    const imported = mount();
    imported.setEditorState(imported.parseEditorState(JSON.stringify(editor.getEditorState())));
    // Any update that touches the glyph's text lets Lexical join adjacent plain texts it may merge.
    imported.update(() => $glyphPieces().forEach((piece) => piece.markDirty()), {
      discrete: true,
    });
    imported.read(() => {
      expect(texts($glyphPieces())).toEqual([`\\c${NBSP}`, "1", " "]);
      expect($glyphPieces().map($holdIds)).toEqual([[], ["a[0,1)"], []]);
    });
  });

  it("leaves a normalized carrier alone", () => {
    const editor = mount();
    let run!: TextNode;
    editor.update(
      () => {
        run = $span().run;
        $addDisplayAnnotation(run, "check", "a", 23, 28);
      },
      { discrete: true },
    );
    let keys: string[] = [];
    editor.read(() => {
      keys = $pieces(run).map((piece) => piece.getKey());
    });
    editor.update(
      () => {
        for (const piece of $pieces(run)) piece.markDirty();
      },
      { discrete: true },
    );
    editor.read(() => {
      expect($pieces(run).map((piece) => piece.getKey())).toEqual(keys);
    });
  });

  it("writes each chain as one node of a serialized tree, holds restated in its whole text", () => {
    const editor = mount();
    editor.update(
      () => {
        const { run, closer } = $span();
        $addDisplayAnnotation(run, "check", "a", 23, 28);
        $addDisplayAnnotation(closer, "check", "b", 2, 3);
        $getRoot().append($createParaNode().append($createTextNode("plain")));
      },
      { discrete: true },
    );
    const serialized = editor.getEditorState().toJSON();
    const before = JSON.stringify(serialized);
    const childrenOf = (
      node: SerializedLexicalNode | undefined,
    ): readonly SerializedLexicalNode[] =>
      node && "children" in node && Array.isArray(node.children) ? node.children : [];
    const textOf = (node: SerializedLexicalNode): string =>
      "text" in node && typeof node.text === "string" ? node.text : "";

    const joined = joinSerializedPieces(serialized.root.children);

    const char = childrenOf(childrenOf(joined[0])[0]);
    expect(char.map(textOf)).toEqual([
      "\\w",
      `${NBSP}grace`,
      '|lemma="grace" strong="G5485"',
      "\\w*",
    ]);
    expect(char.some(isSerializedPieceContinuation)).toBe(false);
    expect(char[2][NODE_STATE_KEY]?.displayAnnotations).toEqual({
      basis: '|lemma="grace" strong="G5485"',
      annotations: [{ type: "check", id: "a", start: 23, end: 28 }],
    });
    expect(char[3][NODE_STATE_KEY]?.displayAnnotations).toEqual({
      basis: "\\w*",
      annotations: [{ type: "check", id: "b", start: 2, end: 3 }],
    });
    // A subtree with no chain in it is the same object; the input is left as it was.
    expect(joined[1]).toBe(serialized.root.children[1]);
    expect(JSON.stringify(serialized)).toBe(before);
    expect(childrenOf(childrenOf(serialized.root.children[0])[0]).length).toBeGreaterThan(4);
  });
});

describe("holds through a byte typed beside an identical one", () => {
  /** `\v 1 ` with its `\` held, so cut into `\` | `v 1 `; the caret at the front of the head. */
  function $heldBackslashVerse(): LexicalNode {
    const verse = $createVerseNode("1", getVisibleOpenMarkerText("v", "1"));
    $getRoot().append($createParaNode().append(verse, $createTextNode("In the")));
    $addDisplayAnnotation(verse, "check", "a", 0, 1);
    return verse;
  }

  function $caretAt(node: LexicalNode, offset: number): void {
    const selection = $createRangeSelection();
    selection.anchor.set(node.getKey(), offset, "text");
    selection.focus.set(node.getKey(), offset, "text");
    $setSelection(selection);
  }

  it("leaves the typed byte outside the hold, the way text typed beside a mark is", () => {
    const editor = mount();
    let verse!: LexicalNode;
    editor.update(() => void (verse = $heldBackslashVerse()), { discrete: true });
    editor.update(
      () => {
        $caretAt(verse, 0);
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) throw new Error("no range selection");
        selection.insertText("\\");
      },
      { discrete: true },
    );
    editor.read(() => {
      expect($logicalText(verse)).toBe(`\\\\v${NBSP}1 `);
      expect(texts($pieces(verse))).toEqual(["\\", "\\", `v${NBSP}1 `]);
      expect($pieces(verse).map($holdIds)).toEqual([[], ["a[0,1)"], []]);
    });
  });

  it("keeps the hold on its byte when a rewrite then drops the typed duplicate", () => {
    const editor = mount();
    let verse!: LexicalNode;
    editor.update(() => void (verse = $heldBackslashVerse()), { discrete: true });
    editor.update(
      () => {
        $caretAt(verse, 0);
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) throw new Error("no range selection");
        selection.insertText("\\");
      },
      { discrete: true },
    );
    editor.update(
      () => {
        // The caret is still in the carrier, right after the typed byte; the rewrite is not the
        // user's edit, so it must not be read as a deletion at the caret.
        $setLogicalText(verse, `\\v${NBSP}1 `);
      },
      { discrete: true },
    );
    editor.read(() => {
      expect($logicalText(verse)).toBe(`\\v${NBSP}1 `);
      expect($pieces(verse).map($holdIds)).toEqual([["a[0,1)"], []]);
    });
  });
});

describe("a rewrite in the update a byte was typed in", () => {
  it("reads the typed byte at the caret before re-measuring across the rewrite", () => {
    const editor = mount();
    let run!: TextNode;
    editor.update(
      () => {
        run = $setState($createTextNode("a"), textTypeState, "attribute");
        $getRoot().append($createParaNode().append(run));
        $addDisplayAnnotation(run, "check", "a", 0, 1);
      },
      { discrete: true },
    );
    editor.update(
      () => {
        run.select(0, 0);
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) throw new Error("no range selection");
        selection.insertText("a");
        $setLogicalText(run, "aab");
      },
      { discrete: true },
    );
    editor.read(() => {
      expect($logicalText(run)).toBe("aab");
      expect($pieces(run).map($holdIds)).toEqual([[], ["a[0,1)"], []]);
    });
  });
});

describe("a token carrier cut into pieces", () => {
  /** A para of `a`, a token `\f` glyph cut into `\` | `f` by a hold on its `\`, and `b`. */
  function $tokenGlyph(): { para: LexicalNode; glyph: MarkerNode } {
    const glyph = $createMarkerNode("f").setMode("token");
    const para = $createParaNode().append($createTextNode("a"), glyph, $createTextNode("b"));
    $getRoot().append(para);
    $addDisplayAnnotation(glyph, "check", "a", 0, 1);
    return { para, glyph };
  }

  function childTexts(para: LexicalNode): string[] {
    return $isElementNode(para) ? texts(para.getChildren()) : [];
  }

  it.each([
    ["its first piece", 0],
    ["its last piece", 1],
  ])("goes whole when %s is removed, as the unsplit token does", (_, index) => {
    const editor = mount();
    let para!: LexicalNode;
    let glyph!: MarkerNode;
    editor.update(() => void ({ para, glyph } = $tokenGlyph()), { discrete: true });
    editor.read(() => expect(texts($pieces(glyph))).toEqual(["\\", "f"]));
    editor.update(() => $pieces(glyph)[index].remove(), { discrete: true });
    // Lexical joins the plain text left on either side, as it does around a removed token.
    editor.read(() => expect(childTexts(para)).toEqual(["ab"]));
  });

  it.each([
    ["its first piece", 0],
    ["its middle piece", 1],
    ["its last piece", 2],
  ])("goes whole when text is typed in place of %s, keeping the typed text", (_, index) => {
    const editor = mount();
    let para!: LexicalNode;
    let caller!: TextNode;
    editor.update(
      () => {
        caller = $createTextNode(` +${NBSP}`).setMode("token");
        para = $createParaNode().append(caller);
        $getRoot().append(para);
        $addDisplayAnnotation(caller, "check", "a", 1, 2);
      },
      { discrete: true },
    );
    editor.read(() => expect(texts($pieces(caller))).toEqual([" ", "+", NBSP]));
    editor.update(() => $pieces(caller)[index].replace($createTextNode("x")), { discrete: true });
    editor.read(() => expect(childTexts(para)).toEqual(["x"]));
  });

  it("stays whole and cut through a rewrite of its text", () => {
    const editor = mount();
    let glyph!: MarkerNode;
    editor.update(() => void ({ glyph } = $tokenGlyph()), { discrete: true });
    editor.update(() => void glyph.setMarker("fe"), { discrete: true });
    editor.read(() => {
      expect(texts($pieces(glyph))).toEqual(["\\", "fe"]);
      expect($pieces(glyph).map($holdIds)).toEqual([["a[0,1)"], []]);
    });
  });

  it("writes no piece bookkeeping into the joined serialized node", () => {
    const editor = mount();
    editor.update(() => void $tokenGlyph(), { discrete: true });
    const serialized = editor.getEditorState().toJSON();
    const [para] = joinSerializedPieces(serialized.root.children);
    const children = "children" in para && Array.isArray(para.children) ? para.children : [];
    const glyph: SerializedLexicalNode = children[1];
    expect(Object.keys(glyph[NODE_STATE_KEY] ?? {})).toEqual(["displayAnnotations"]);
  });
});

describe("carrier offsets and per-node passes", () => {
  /** `\v 12 ` cut into `\v `, `12` and ` ` by a hold on its number. */
  function $cutVerse(): LexicalNode {
    const verse = $createVerseNode("12", getVisibleOpenMarkerText("v", "12"));
    $getRoot().append($createParaNode().append(verse, $createTextNode("In the")));
    $addDisplayAnnotation(verse, "check", "a", 3, 5);
    return verse;
  }

  it("maps whole-carrier offsets to pieces and back, ending a boundary on the piece before it", () => {
    const editor = mount();
    let verse!: LexicalNode;
    editor.update(() => void (verse = $cutVerse()), { discrete: true });
    editor.read(() => {
      const pieces = $pieces(verse);
      expect(texts(pieces)).toEqual([`\\v${NBSP}`, "12", " "]);
      expect(pieces.map($pieceStart)).toEqual([0, 3, 5]);
      expect(pieces.map((piece) => $isPieceOf(piece, pieces[2]))).toEqual([true, true, true]);
      expect($isPieceOf($logicalNextSibling(verse), verse)).toBe(false);
      expect($logicalPointOffset(verse, pieces[1].getKey(), 1)).toBe(4);
      expect($logicalPointOffset(pieces[2], pieces[0].getKey(), 2)).toBe(2);
      expect($logicalPointOffset(verse, "not-a-piece", 0)).toBeUndefined();
      const at = (offset: number) => {
        const [piece, into] = $pieceAtLogicalOffset(verse, offset);
        return [piece.getTextContent(), into];
      };
      expect([0, 3, 4, 5, 6, 9].map(at)).toEqual([
        [`\\v${NBSP}`, 0],
        [`\\v${NBSP}`, 3],
        ["12", 1],
        ["12", 2],
        [" ", 1],
        [" ", 1],
      ]);
    });
  });

  it("hands a continuation's per-node pass to its head", () => {
    const editor = mount();
    let verse!: LexicalNode;
    editor.update(() => void (verse = $cutVerse()), { discrete: true });
    const visited: string[] = [];
    const unregister = editor.registerNodeTransform(VerseNode, (node) => {
      if ($deferToPieceHead(node)) return;
      visited.push($logicalText(node));
    });
    editor.update(
      () => {
        $pieces(verse)[2].markDirty();
      },
      { discrete: true },
    );
    unregister();
    expect(visited.at(-1)).toBe(`\\v${NBSP}12 `);
    expect(visited.every((text) => text === `\\v${NBSP}12 `)).toBe(true);
    editor.read(() => {
      // A continuation whose head is gone is a carrier of its own: nothing to hand on.
      expect($deferToPieceHead($getRoot())).toBe(false);
    });
  });
});

describe("an update that only re-cuts a carrier", () => {
  /** The tags each commit after mounting carried. */
  function $mountWithTags(): { editor: LexicalEditor; tags: string[][] } {
    const editor = mount();
    const tags: string[][] = [];
    editor.registerUpdateListener(({ tags: committed }) => void tags.push([...committed]));
    return { editor, tags };
  }

  it("joins the current undo step, as an edit a transform reverts in one node does", () => {
    const { editor, tags } = $mountWithTags();
    let verse!: LexicalNode;
    editor.update(
      () => {
        verse = $createVerseNode("1", getVisibleOpenMarkerText("v", "1"));
        $getRoot().append($createParaNode().append(verse, $createTextNode("In the")));
        $addDisplayAnnotation(verse, "check", "a", 3, 4);
      },
      { discrete: true },
    );
    tags.length = 0;
    // A rewrite and its reversal in one update: the document is as it was, but the pieces were
    // joined and cut again.
    editor.update(
      () => {
        $setLogicalText(verse, `\\v${NBSP}1  `);
        $setLogicalText(verse, `\\v${NBSP}1 `);
      },
      { discrete: true },
    );
    expect(tags.at(-1)).toContain(HISTORY_MERGE_TAG);
  });

  it("leaves an update that changes a byte to the history's own rules", () => {
    const { editor, tags } = $mountWithTags();
    let verse!: LexicalNode;
    editor.update(
      () => {
        verse = $createVerseNode("1", getVisibleOpenMarkerText("v", "1"));
        $getRoot().append($createParaNode().append(verse, $createTextNode("In the")));
        $addDisplayAnnotation(verse, "check", "a", 3, 4);
      },
      { discrete: true },
    );
    tags.length = 0;
    editor.update(() => void $setLogicalText(verse, `\\v${NBSP}2 `), { discrete: true });
    expect(tags.at(-1)).not.toContain(HISTORY_MERGE_TAG);
  });
});

describe("the cost of judging a re-cut update", () => {
  /** 200 paragraphs, each a verse and some text; returns the verses. */
  function $bigDocument(): LexicalNode[] {
    const verses: LexicalNode[] = [];
    for (let index = 1; index <= 200; index++) {
      const verse = $createVerseNode(`${index}`, getVisibleOpenMarkerText("v", `${index}`));
      verses.push(verse);
      $getRoot().append($createParaNode().append(verse, $createTextNode("In the beginning")));
    }
    return verses;
  }

  it("serializes only the paragraphs the update changed", () => {
    const editor = mount();
    let verses: LexicalNode[] = [];
    editor.update(() => void (verses = $bigDocument()), { discrete: true });
    const serialized: string[] = [];
    const exportJSON = ParaNode.prototype.exportJSON;
    const spy = vi.spyOn(ParaNode.prototype, "exportJSON").mockImplementation(function (
      this: ParaNode,
    ) {
      serialized.push(this.getKey());
      return exportJSON.call(this);
    });
    onTestFinished(() => spy.mockRestore());
    const touched = [10, 100, 190].map((index) => verses[index]);
    for (const verse of touched)
      editor.update(() => $addDisplayAnnotation(verse, "check", verse.getKey(), 3, 4), {
        discrete: true,
      });
    const touchedParas = editor
      .getEditorState()
      .read(() => new Set(touched.map((verse) => verse.getParentOrThrow().getKey())));
    expect(serialized.length).toBeGreaterThan(0);
    expect(serialized.every((key) => touchedParas.has(key))).toBe(true);
  });

  it("does not join an update that also changed a paragraph its cuts did not touch", () => {
    const editor = mount();
    const tags: string[][] = [];
    let verses: LexicalNode[] = [];
    editor.update(() => void (verses = $bigDocument()), { discrete: true });
    editor.update(() => $addDisplayAnnotation(verses[0], "check", "a", 3, 4), { discrete: true });
    editor.registerUpdateListener(({ tags: committed }) => void tags.push([...committed]));
    editor.update(
      () => {
        // A rewrite reverted in this update re-cuts verse 1; paragraph 2's text really changes.
        $setLogicalText(verses[0], `\\v${NBSP}1  `);
        $setLogicalText(verses[0], `\\v${NBSP}1 `);
        const text = verses[1].getNextSibling();
        if ($isTextNode(text)) text.setTextContent("In the end");
      },
      { discrete: true },
    );
    expect(tags.at(-1)).not.toContain(HISTORY_MERGE_TAG);
  });
});
