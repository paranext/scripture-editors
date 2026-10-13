/**
 * Carrier-piece invariance tests for USJ ↔ Lexical selection conversion.
 *
 * An annotation held over part of a display-byte carrier (a marker glyph, a verse, an attribute
 * run's text, a note's caller, a chapter's `\c N` glyph, an unmatched closer) cuts it into pieces
 * of its own class (`displayPieces.state.ts`). The pieces are one carrier, so every location must
 * resolve to the same place, round-trip to the same answer, and every caret must report the same
 * location, as in the uncut document.
 *
 * @see selection.utils.data-driven.test.ts for the uncut baseline suite.
 */
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  createBasicTestEnvironment,
  updateSelection,
} from "../../../../../../libs/shared/src/nodes/usj/test.utils";
import { usjReactNodes } from "../../../nodes/usj";
import { countContinuationPieces, cutEveryCarrierIntoPieces } from "../react-test.utils";
import {
  $getLocationFromNode,
  $getRangeFromUsjSelection,
  $getUsjSelectionFromEditor,
} from "./selection.utils";
import { $getNodeByKey, $getRoot, $isElementNode, LexicalEditor, LexicalNode } from "lexical";
import {
  $isDisplayAnnotationCarrier,
  $isPieceContinuation,
  $logicalChildren,
  $logicalOffset,
  $logicalText,
  $pieceAtLogicalOffset,
  $pieceHead,
  $pieces,
  TypedMarkNode,
} from "shared";
import { lexicalEditable2Sa, usjLocations2Sa } from "test-data";

/** A point as the uncut document spells it: a text point on a carrier's first piece at an offset
 * into the whole carrier, or an element point counting carriers once. */
function $logicalPoint(node: LexicalNode, offset: number): string {
  if ($isElementNode(node)) {
    const child = node.getChildAtIndex(offset);
    // In front of a later piece is inside its carrier: name that place in the carrier's text.
    if (child && $isPieceContinuation(child))
      return `text ${$pieceHead(child).getKey()} ${$logicalOffset(child, 0)}`;
    const before = node.getChildren().slice(0, offset);
    return `element ${node.getKey()} ${before.filter((c) => !$isPieceContinuation(c)).length}`;
  }
  return `text ${$pieceHead(node).getKey()} ${$logicalOffset(node, offset)}`;
}

/** Each location's resolved point and round trip, as text so a failure reads plainly. */
function readLocations(editor: LexicalEditor): string[] {
  return usjLocations2Sa.map((entry) => {
    let resolved: string;
    let anchor: [LexicalNode, number] | undefined;
    try {
      resolved = editor.getEditorState().read(() => {
        const selection = $getRangeFromUsjSelection({ start: entry.documentLocation }, undefined);
        if (!selection) return "unresolved";
        anchor = [selection.anchor.getNode(), selection.anchor.offset];
        return $logicalPoint(selection.anchor.getNode(), selection.anchor.offset);
      });
    } catch (error) {
      resolved = `throws ${String(error)}`;
    }
    let roundTrip = "none";
    if (anchor) {
      updateSelection(editor, anchor[0], anchor[1]);
      roundTrip = editor
        .getEditorState()
        .read(() => JSON.stringify($getUsjSelectionFromEditor(undefined)?.start));
    }
    return `${entry.description}: ${resolved} -> ${roundTrip}`;
  });
}

/** Every text carrier's text, by key, with no piece cut off. */
function readCarriers(editor: LexicalEditor): Map<string, string> {
  return editor.getEditorState().read(
    () =>
      new Map(
        $getRoot()
          .getAllTextNodes()
          .filter((node) => $isDisplayAnnotationCarrier(node) && !$isPieceContinuation(node))
          .map((node) => [node.getKey(), $logicalText(node)]),
      ),
  );
}

/** The location a caret at `offset` into carrier `key` reports, from every point that spells it:
 * the piece holding it, and the start of the next piece when the offset is on a cut. */
function readCarrierLocations(editor: LexicalEditor, key: string, offset: number): string[] {
  return editor.getEditorState().read(() => {
    const carrier = $getNodeByKey(key);
    if (!carrier) return ["missing"];
    const [piece, local] = $pieceAtLogicalOffset(carrier, offset);
    const points: [LexicalNode, number][] = [[piece, local]];
    const next = piece.getNextSibling();
    if (local === piece.getTextContentSize() && next && $pieces(carrier).some((p) => p.is(next)))
      points.push([next, 0]);
    return points.map(([node, at]) => JSON.stringify($getLocationFromNode(node, at, undefined)));
  });
}

describe("data-driven: usj2Sa locations through carriers cut into pieces", () => {
  let editor: LexicalEditor;
  let uncutLocations: string[];
  let cutLocations: string[];
  const uncutCarrierLocations = new Map<string, string>();
  let carriers: Map<string, string>;

  beforeAll(async () => {
    ({ editor } = createBasicTestEnvironment([TypedMarkNode, ...usjReactNodes]));
    editor.setEditorState(editor.parseEditorState(lexicalEditable2Sa));
    uncutLocations = readLocations(editor);
    carriers = readCarriers(editor);
    for (const [key, text] of carriers)
      for (let offset = 0; offset <= text.length; offset++)
        uncutCarrierLocations.set(`${key}@${offset}`, readCarrierLocations(editor, key, offset)[0]);

    await cutEveryCarrierIntoPieces(editor);
    cutLocations = readLocations(editor);
  });

  it("cuts carriers into pieces", () => {
    expect(countContinuationPieces(editor)).toBeGreaterThan(100);
    // The cut leaves every carrier's bytes as they were.
    expect(readCarriers(editor)).toEqual(carriers);
    editor.getEditorState().read(() => {
      expect($logicalChildren($getRoot()).length).toBe($getRoot().getChildrenSize());
    });
  });

  it("resolves and round-trips every location as the uncut document does", () => {
    expect(cutLocations).toEqual(uncutLocations);
  });

  it("reports every caret in a carrier as the uncut document does", () => {
    const mismatches: string[] = [];
    for (const [key, text] of carriers)
      for (let offset = 0; offset <= text.length; offset++) {
        const expected = uncutCarrierLocations.get(`${key}@${offset}`);
        for (const actual of readCarrierLocations(editor, key, offset))
          if (actual !== expected)
            mismatches.push(`${JSON.stringify(text)}@${offset}: ${actual} ≠ ${expected}`);
      }
    expect(mismatches).toEqual([]);
  });
});
