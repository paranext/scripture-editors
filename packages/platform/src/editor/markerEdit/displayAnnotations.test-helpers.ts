import { act } from "@testing-library/react";
import { $getRoot, $isElementNode, LexicalEditor, LexicalNode } from "lexical";
import { RefObject } from "react";
import { $coveredDisplayText, $displayAnnotationsOf, getPendedDisplayOwners, NBSP } from "shared";
import { EditorRef } from "../editor.model";
import { $textContaining } from "../positions/positions.test-helpers";

/** Every display-byte annotation in the tree, per id, as the bytes each range covers, in document
 * order — NBSPs read as spaces. Content marks are not included. */
export function displayAnnotated(lexical: LexicalEditor): { [id: string]: string[] } {
  return lexical.getEditorState().read(() => {
    const out: { [id: string]: string[] } = {};
    const walk = (node: LexicalNode): void => {
      for (const annotation of $displayAnnotationsOf(node))
        (out[annotation.id] ??= []).push(
          $coveredDisplayText(node, annotation).replaceAll(NBSP, " "),
        );
      if ($isElementNode(node)) node.getChildren().forEach(walk);
    };
    walk($getRoot());
    return out;
  });
}

/** The first node holding annotation `id`. Call inside a read or update. */
export function $carrierHolding(id: string): LexicalNode {
  let found: LexicalNode | undefined;
  const walk = (node: LexicalNode): void => {
    if (found) return;
    if ($displayAnnotationsOf(node).some((annotation) => annotation.id === id)) found = node;
    else if ($isElementNode(node)) node.getChildren().forEach(walk);
  };
  walk($getRoot());
  if (!found) throw new Error(`no node holds ${id}`);
  return found;
}

/** Settle the scope the way an abandoned edit does: blur, then commit the pending literal. */
export function settleByBlurAndCommit(mounted: {
  lexical: LexicalEditor;
  ref: RefObject<EditorRef | null>;
}): void {
  const rootElement = mounted.lexical.getRootElement();
  if (!rootElement) throw new Error("editor root not found");
  act(() => rootElement.blur());
  act(() => mounted.ref.current?.commitPendingMarkerEdits());
}

/** Run `edit` as one commit and let the engine's microtask-deferred work drain. */
export async function inOneUpdate(lexical: LexicalEditor, edit: () => void): Promise<void> {
  await act(async () => {
    lexical.update(edit);
    await Promise.resolve();
    await Promise.resolve();
  });
}

/** Append `typed` to the `\w` span's word, with the caret `caretFromEnd` bytes before its end. */
export async function appendToWord(
  lexical: LexicalEditor,
  typed: string,
  caretFromEnd = 0,
): Promise<void> {
  await inOneUpdate(lexical, () => {
    const word = $textContaining("grace");
    const text = `${word.getTextContent()}${typed}`;
    word.setTextContent(text);
    word.select(text.length - caretFromEnd, text.length - caretFromEnd);
  });
  expect(getPendedDisplayOwners(lexical)?.size ?? 0).toBeGreaterThan(0);
}
