/**
 * The Tier-2 rebuild over display-byte carriers an annotation cuts into pieces
 * (`displayPieces.state.ts`): a cut carrier is one node to every settle scope, so a scope holding
 * pieces reaches its fixed point exactly as the same scope uncut does, and a rebuild that does run
 * carries every hold on the bytes it held and every verse's `sid`.
 */
import {
  initialize as initializeSerialize,
  reset,
  serializeEditorState,
} from "../adaptors/usj-editor.adaptor";
import { requireStandardViewOptions } from "../settledGetUsj.test-helpers";
import {
  $rebuildBook,
  $rebuildNoteContent,
  $rebuildParas,
  $signatureOf,
  Tier2Context,
} from "./tier2Rebuild.utils";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { $getRoot, $isElementNode, $isTextNode, LexicalEditor, LexicalNode } from "lexical";
import {
  $addDisplayAnnotation,
  $createTypedMarkNode,
  $carrierHoldableRange,
  $coveredDisplayText,
  $displayAnnotationsOf,
  $isBookNode,
  $isDisplayAnnotationCarrier,
  $isNoteNode,
  $isParaNode,
  $isPieceContinuation,
  $isVerseNode,
  $logicalText,
  $pieces,
  getMarker as bundledGetMarker,
  registerDisplayAnnotationBasis,
  TypedMarkNode,
  VerseNode,
} from "shared";
import { usjReactNodes, ViewOptions } from "shared-react";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { createBasicTestEnvironment } from "../../../../../libs/shared/src/nodes/usj/test.utils";

const verse2: MarkerObject = { type: "verse", marker: "v", number: "2", altnumber: "3" };
/** A span or milestone with an attribute, which `MarkerObject` leaves untyped. */
type WithAttributes = MarkerObject & { [attribute: string]: unknown };

const word: WithAttributes = { type: "char", marker: "w", lemma: "grace", content: ["grace"] };
const quote: WithAttributes = { type: "ms", marker: "qt-s", who: "Pilate" };
const note: MarkerObject = {
  type: "note",
  marker: "f",
  caller: "+",
  content: [
    { type: "char", marker: "fr", content: ["1.2 "] },
    { type: "char", marker: "ft", content: ["a note"] },
  ],
};

/** Every carrier kind a paragraph, a note and the `\id` line can hold. */
const richUsj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["the book"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "q1",
      content: ["In the ", verse2, "beginning ", word, " said ", quote, " to him", note, " end"],
    },
    {
      type: "para",
      marker: "p",
      content: [{ type: "verse", marker: "v", number: "4", sid: "GEN 1:4" }, "second"],
    },
  ],
};

function expandedViewOptions(): ViewOptions {
  return { ...requireStandardViewOptions(), noteMode: "expanded" };
}

function load(usj: Usj, viewOptions: ViewOptions): LexicalEditor {
  initializeSerialize(undefined, undefined);
  reset();
  const state = serializeEditorState(usj, viewOptions);
  const { editor } = createBasicTestEnvironment([TypedMarkNode, ...usjReactNodes]);
  editor.setEditorState(editor.parseEditorState(JSON.stringify({ root: state.root })));
  registerDisplayAnnotationBasis(editor);
  return editor;
}

/** Every editable text carrier under `node`, once each (its head). */
function $textCarriers(node: LexicalNode, out: LexicalNode[] = []): LexicalNode[] {
  if ($isTextNode(node) && !$isPieceContinuation(node) && $isDisplayAnnotationCarrier(node))
    out.push(node);
  if ($isElementNode(node)) node.getChildren().forEach((child) => $textCarriers(child, out));
  return out;
}

/** Hold one annotation per carrier on its first holdable byte, so every carrier at least two
 * holdable bytes long is cut inside; returns the bytes each annotation holds. */
function $cutEveryCarrier(): { [id: string]: string } {
  const held: { [id: string]: string } = {};
  $textCarriers($getRoot()).forEach((carrier, index) => {
    const [low, high] = $carrierHoldableRange(carrier);
    if (high - low < 2) return;
    $addDisplayAnnotation(carrier, "test", `a${index}`, low, low + 1);
    held[`a${index}`] = $logicalText(carrier).slice(low, low + 1);
  });
  return held;
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

function splitCarrierCount(editor: LexicalEditor): number {
  return editor
    .getEditorState()
    .read(() => $textCarriers($getRoot()).filter((carrier) => $pieces(carrier).length > 1).length);
}

describe("a Tier-2 rebuild over carriers an annotation cuts into pieces", () => {
  it("signs a cut paragraph exactly as the same paragraph uncut", () => {
    const viewOptions = expandedViewOptions();
    const plain = load(richUsj, viewOptions);
    const cut = load(richUsj, viewOptions);
    cut.update(() => void $cutEveryCarrier(), { discrete: true });
    expect(splitCarrierCount(cut)).toBeGreaterThanOrEqual(6);
    const signatures = (editor: LexicalEditor) =>
      editor.getEditorState().read(() =>
        $getRoot()
          .getChildren()
          .map((block) => $signatureOf([block], bundledGetMarker)),
      );
    expect(signatures(cut)).toEqual(signatures(plain));
  });

  it("signs a span whose content a mark cuts right after its separator as the span uncut", () => {
    // `\ca 3\ca*` beside the chapter: the separator and the `3` are one text uncut, and a mark
    // over the `3` leaves the separator a text of its own.
    const caUsj: Usj = {
      type: "USJ",
      version: "3.1",
      content: [
        { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
        { type: "chapter", marker: "c", number: "1" },
        { type: "char", marker: "ca", content: ["3"] },
      ],
    };
    const viewOptions = requireStandardViewOptions();
    const plain = load(caUsj, viewOptions);
    const marked = load(caUsj, viewOptions);
    marked.update(
      () => {
        const char = $getRoot().getLastChild();
        const content = $isElementNode(char) ? char.getChildAtIndex(1) : null;
        if (!$isTextNode(content)) throw new Error("expected the span's content text");
        const [, three] = content.splitText(1);
        const mark = $createTypedMarkNode({ test: ["m"] });
        three.insertBefore(mark);
        mark.append(three);
      },
      { discrete: true },
    );
    const signature = (editor: LexicalEditor) =>
      editor
        .getEditorState()
        .read(() => $signatureOf($getRoot().getChildren().slice(1), bundledGetMarker));
    expect(signature(marked)).toBe(signature(plain));
  });

  it("refuses every unedited scope as a fixed point, and leaves every hold on its bytes", () => {
    const viewOptions = expandedViewOptions();
    const editor = load(richUsj, viewOptions);
    let held: { [id: string]: string } = {};
    editor.update(() => void (held = $cutEveryCarrier()), { discrete: true });
    const context: Tier2Context = { viewOptions, getMarker: bundledGetMarker };
    const rebuilt: string[] = [];
    editor.update(
      () => {
        const blocks = $getRoot().getChildren();
        blocks.filter($isParaNode).forEach((para, index) => {
          if ($rebuildParas([para], context)) rebuilt.push(`para#${index}`);
        });
        blocks.filter($isBookNode).forEach((book) => {
          if ($rebuildBook(book, context)) rebuilt.push("book");
        });
        const notes: LexicalNode[] = [];
        const walk = (node: LexicalNode): void => {
          if ($isNoteNode(node)) notes.push(node);
          if ($isElementNode(node)) node.getChildren().forEach(walk);
        };
        walk($getRoot());
        notes.filter($isNoteNode).forEach((found, index) => {
          if ($rebuildNoteContent(found, context)) rebuilt.push(`note#${index}`);
        });
      },
      { discrete: true },
    );
    expect(rebuilt).toEqual([]);
    expect(heldBytes(editor)).toEqual(held);
  });

  it("carries a cut verse's hold and the next verse's sid through a rebuild that runs", () => {
    const viewOptions = requireStandardViewOptions();
    const usj: Usj = {
      type: "USJ",
      version: "3.1",
      content: [
        { type: "book", marker: "id", code: "GEN", content: [] },
        { type: "chapter", marker: "c", number: "1" },
        {
          type: "para",
          marker: "p",
          content: [
            "In the ",
            { type: "verse", marker: "v", number: "12" },
            "beginning ",
            { type: "verse", marker: "v", number: "13", sid: "GEN 1:13" },
            "God",
          ],
        },
      ],
    };
    const editor = load(usj, viewOptions);
    editor.update(
      () => {
        const verse = $textCarriers($getRoot()).find(
          (node): node is VerseNode => $isVerseNode(node) && node.getNumber() === "12",
        );
        if (!verse) throw new Error("no verse 12");
        // `\v 12 `: hold the `2` alone, so the verse is cut in three.
        $addDisplayAnnotation(verse, "test", "digit", 4, 5);
      },
      { discrete: true },
    );
    const context: Tier2Context = { viewOptions, getMarker: bundledGetMarker };
    let spliced = false;
    editor.update(
      () => {
        const beginning = $getRoot()
          .getAllTextNodes()
          .find((node) => node.getTextContent() === "beginning ");
        if (!beginning) throw new Error("no content text");
        beginning.setTextContent("beginning \\wj x\\wj* ");
        const para = $getRoot().getChildren().find($isParaNode);
        if (!para) throw new Error("no paragraph");
        spliced = $rebuildParas([para], context);
      },
      { discrete: true },
    );
    expect(spliced).toBe(true);
    editor.getEditorState().read(() => {
      const verses = $textCarriers($getRoot()).filter($isVerseNode);
      expect(verses.map((verse) => [verse.getNumber(), verse.getSid() ?? null])).toEqual([
        ["12", null],
        ["13", "GEN 1:13"],
      ]);
    });
    expect(heldBytes(editor)).toEqual({ digit: "2" });
  });
});
