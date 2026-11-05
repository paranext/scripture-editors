/**
 * Typing or pasting over a range inside a char span replaces exactly that range whether or not an
 * annotation mark cuts the span's text at one of the range's ends. Lexical reads a range end at a
 * mark's edge into the mark, and its `insertText` over a range whose ends then sit in different
 * inline parents climbs to the paragraph and moves the paragraph's text after the span into it.
 */
import { MarkerEditPlugin } from "./MarkerEditPlugin";
import { deserializeEditorState } from "../adaptors/editor-usj.adaptor";
import { plainTextPasteEvent, testEnvironment, viewOptions } from "./markerEdit.test-helpers";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $createTextNode,
  $getRoot,
  $setSelection,
  $setState,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  ElementNode,
  LexicalEditor,
  PASTE_COMMAND,
  TextNode,
} from "lexical";
import {
  $createCharNode,
  $createMarkerNode,
  $createNoteNode,
  $createParaNode,
  $createTypedMarkNode,
  getEditableCallerText,
  NBSP,
  textTypeState,
} from "shared";
import { NoteShellCaretGuardPlugin, ViewOptions } from "shared-react";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { baseTestEnvironment } from "../../../../../libs/shared-react/src/plugins/usj/react-test.utils";

/** The footnote popover's view: notes expanded, their shell governed by the host. */
const protectedShell: ViewOptions = {
  ...viewOptions,
  noteMode: "expanded",
  isNoteShellEditable: false,
};

/** `\p In the \w grace\w* of God`, with `gra` held by an annotation mark or not. */
function $build(isMarked: boolean): void {
  const separator = $createTextNode(NBSP);
  $setState(separator, textTypeState, "marker-trailing-space");
  $getRoot().append(
    $createParaNode("p").append(
      $createMarkerNode("p"),
      separator,
      $createTextNode("In the "),
      $createCharNode("w").append(
        $createMarkerNode("w"),
        ...(isMarked
          ? [
              $createTextNode(NBSP),
              $createTypedMarkNode({ annotation: ["1"] }).append($createTextNode("gra")),
              $createTextNode("ce"),
            ]
          : [$createTextNode(`${NBSP}grace`)]),
        $createMarkerNode("w", "closing"),
      ),
      $createTextNode(" of God"),
    ),
  );
}

/** The text node of the span's content that holds `text`. */
function $textOf(text: string): TextNode {
  const node = $getRoot()
    .getAllTextNodes()
    .find((candidate) => candidate.getTextContent() === text);
  if (!node) throw new Error(`no text ${JSON.stringify(text)}`);
  return node;
}

/**
 * Select `grac` (the span's content from after its separator to before its last letter) — with
 * the range's start where Lexical reads it from the screen, inside the mark that holds `gra` when
 * one does — and replace it through `edit`. Returns what the paragraph shows and saves.
 */
async function replaceGrac(
  isMarked: boolean,
  edit: (editor: LexicalEditor) => void,
): Promise<{ screen: string; content: unknown }> {
  const { editor } = await testEnvironment(() => $build(isMarked));
  await act(async () => {
    editor.update(() => {
      const selection = $createRangeSelection();
      if (isMarked) {
        selection.anchor.set($textOf("gra").getKey(), 0, "text");
        selection.focus.set($textOf("ce").getKey(), 1, "text");
      } else {
        const text = $textOf(`${NBSP}grace`);
        selection.anchor.set(text.getKey(), 1, "text");
        selection.focus.set(text.getKey(), 5, "text");
      }
      $setSelection(selection);
      edit(editor);
    });
  });
  const screen = editor
    .getEditorState()
    .read(() => $getRoot().getFirstChildOrThrow<ElementNode>().getTextContent());
  return { screen, content: deserializeEditorState(editor.getEditorState(), viewOptions)?.content };
}

describe("replacing a range an annotation mark cuts inside a char span", () => {
  it("types over it as over the unmarked range, leaving the text after the span outside it", async () => {
    const type = (editor: LexicalEditor) =>
      editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "x");
    const plain = await replaceGrac(false, type);
    const marked = await replaceGrac(true, type);
    expect(plain.screen).toBe(`\\p${NBSP}In the \\w${NBSP}xe\\w* of God`);
    expect(marked.screen).toBe(plain.screen);
    expect(marked.content).toEqual(plain.content);
  });

  it("pastes over it as over the unmarked range, leaving the text after the span outside it", async () => {
    const paste = (editor: LexicalEditor) =>
      editor.dispatchCommand(PASTE_COMMAND, plainTextPasteEvent("x"));
    const plain = await replaceGrac(false, paste);
    const marked = await replaceGrac(true, paste);
    expect(plain.screen).toBe(`\\p${NBSP}In the \\w${NBSP}xe\\w* of God`);
    expect(marked.screen).toBe(plain.screen);
    expect(marked.content).toEqual(plain.content);
  });

  it("types over a protected note's content as over the unmarked range, leaving the paragraph's text outside the note", async () => {
    const typedOverNote = async (isMarked: boolean) => {
      const { editor } = await baseTestEnvironment(
        () =>
          $getRoot().append(
            $createParaNode("p").append(
              $createTextNode("In"),
              $createNoteNode("f", "+", false).append(
                $createMarkerNode("f").setMode("token"),
                $createTextNode(getEditableCallerText("+")).setMode("token").toggleUnmergeable(),
                $createCharNode("ft").append(
                  $createMarkerNode("ft"),
                  ...(isMarked
                    ? [
                        $createTextNode(NBSP),
                        $createTypedMarkNode({ annotation: ["1"] }).append($createTextNode("Hel")),
                        $createTextNode("lo"),
                      ]
                    : [$createTextNode(`${NBSP}Hello`)]),
                  $createMarkerNode("ft", "closing"),
                ),
                $createMarkerNode("f", "closing").setMode("token"),
              ),
              $createTextNode(" the"),
            ),
          ),
        <>
          <MarkerEditPlugin viewOptions={protectedShell} />
          <NoteShellCaretGuardPlugin />
        </>,
      );
      await act(async () => {
        editor.update(() => {
          const selection = $createRangeSelection();
          if (isMarked) {
            selection.anchor.set($textOf("Hel").getKey(), 0, "text");
            selection.focus.set($textOf("lo").getKey(), 1, "text");
          } else {
            const text = $textOf(`${NBSP}Hello`);
            selection.anchor.set(text.getKey(), 1, "text");
            selection.focus.set(text.getKey(), 5, "text");
          }
          $setSelection(selection);
          editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "x");
        });
      });
      return editor
        .getEditorState()
        .read(() => $getRoot().getFirstChildOrThrow<ElementNode>().getTextContent());
    };
    const plain = await typedOverNote(false);
    const marked = await typedOverNote(true);
    expect(plain).toBe(`\\p${NBSP}In\\f${getEditableCallerText("+")}\\ft${NBSP}xo\\ft*\\f* the`);
    expect(marked).toBe(plain);
  });
});
