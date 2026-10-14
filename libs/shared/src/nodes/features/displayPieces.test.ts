import { $createCharNode, CharNode } from "../usj/CharNode.js";
import { usjBaseNodes } from "../usj/index.js";
import { getVisibleOpenMarkerText } from "../usj/markerText.utils.js";
import { NBSP } from "../usj/node-constants.js";
import { $createParaNode } from "../usj/ParaNode.js";
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
  $logicalChildren,
  $logicalNextSibling,
  $logicalPreviousSibling,
  $logicalOffset,
  $logicalText,
  $pieceAt,
  $pieceHead,
  $pieceOffset,
  $pieces,
  $pieceStart,
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
  $setSelection,
  $setState,
  LexicalEditor,
  LexicalNode,
  TextNode,
} from "lexical";

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
      expect(pieces.map($pieceOffset)).toEqual([0, 3, 5]);
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
      expect($logicalOffset(verse, pieces[1].getKey(), 1)).toBe(4);
      expect($logicalOffset(pieces[2], pieces[0].getKey(), 2)).toBe(2);
      expect($logicalOffset(verse, "not-a-piece", 0)).toBeUndefined();
      const at = (offset: number) => {
        const { piece, offset: into } = $pieceAt(verse, offset);
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
