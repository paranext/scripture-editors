/**
 * The marker-edit engine arms paragraph deletion from the pre-delete selection on Backspace/Delete
 * (KEY_DOWN, HIGH) and on cut (CRITICAL). A selected paragraph marker is a node selection, which
 * must never arm either: the delete keys are refused before the engine's HIGH handler runs, and
 * the cut arm — which ties at CRITICAL and registers first — reads only range selections.
 */
import { $armCollapsedParaDeletion, $armWholeParaDeletion } from "./markerEditDeletion.utils";
import { MarkerEditContext } from "./markerEditTier1.utils";
import { $createTextNode, $getRoot, NodeKey } from "lexical";
import {
  $createGutterMarkerNode,
  $createParaNode,
  $selectParaMarker,
  ImmutableTypedTextNode,
  NBSP,
} from "shared";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { createBasicTestEnvironment } from "../../../../../libs/shared/src/nodes/usj/test.utils";

describe("paragraph deletion arms on a selected paragraph marker", () => {
  it("arm nothing", () => {
    let glyph!: ImmutableTypedTextNode;
    const { editor } = createBasicTestEnvironment(undefined, () => {
      glyph = $createGutterMarkerNode(`\\li2${NBSP}`);
      $getRoot().append(
        $createParaNode("p").append($createTextNode("first")),
        $createParaNode("li2").append(glyph, $createTextNode("second")),
      );
    });
    const wholeParaDeleteExpected = new Set<NodeKey>();
    const collapsedDeleteCaretParas = new Set<NodeKey>();
    // Only the two sets the arms write are read; the rest of the context is irrelevant here.
    const context = {
      wholeParaDeleteExpected,
      collapsedDeleteCaretParas,
    } as unknown as MarkerEditContext;

    editor.update(
      () => {
        $selectParaMarker(glyph);
        $armWholeParaDeletion(context);
        $armCollapsedParaDeletion(context);
      },
      { discrete: true },
    );

    expect(wholeParaDeleteExpected.size).toBe(0);
    expect(collapsedDeleteCaretParas.size).toBe(0);
  });
});
