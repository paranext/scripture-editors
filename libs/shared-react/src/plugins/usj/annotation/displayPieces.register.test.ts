// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { createBasicTestEnvironment } from "../../../../../../libs/shared/src/nodes/usj/test.utils";
import { usjReactNodes } from "../../../nodes/usj";
import { registerDisplayPieces } from "./displayPieces.register";
import { $getRoot, LexicalEditor, LexicalNode } from "lexical";
import {
  $addDisplayAnnotation,
  $createParaNode,
  $createVerseNode,
  $pieces,
  getVisibleOpenMarkerText,
  TypedMarkNode,
} from "shared";
import { describe, expect, it } from "vitest";

/** A paragraph holding `\v 12 `; returns the verse. */
function mountVerse(): { editor: LexicalEditor; verse: LexicalNode } {
  const { editor } = createBasicTestEnvironment([TypedMarkNode, ...usjReactNodes]);
  let verse!: LexicalNode;
  editor.update(
    () => {
      verse = $createVerseNode("12", getVisibleOpenMarkerText("v", "12"));
      $getRoot().append($createParaNode().append(verse));
    },
    { discrete: true },
  );
  return { editor, verse };
}

/** Hold one digit of the verse number, then count the verse's pieces. */
function holdOneDigit(editor: LexicalEditor, verse: LexicalNode, id: string): number {
  editor.update(() => void $addDisplayAnnotation(verse, "check", id, 3, 4), { discrete: true });
  return editor.getEditorState().read(() => $pieces(verse).length);
}

describe("registerDisplayPieces", () => {
  it("cuts a carrier at its hold's edges with no paint index", () => {
    const { editor, verse } = mountVerse();
    registerDisplayPieces(editor);
    expect(holdOneDigit(editor, verse, "a")).toBe(3);
  });

  it("stays registered until its last holder releases", () => {
    const { editor, verse } = mountVerse();
    const releaseFirst = registerDisplayPieces(editor);
    const releaseSecond = registerDisplayPieces(editor);
    releaseFirst();
    releaseFirst();
    expect(holdOneDigit(editor, verse, "a")).toBe(3);

    releaseSecond();
    let next!: LexicalNode;
    editor.update(
      () => {
        next = $createVerseNode("13", getVisibleOpenMarkerText("v", "13"));
        $getRoot().append($createParaNode().append(next));
      },
      { discrete: true },
    );
    // With every holder released, nothing cuts a carrier any more.
    expect(holdOneDigit(editor, next, "b")).toBe(1);
  });
});
