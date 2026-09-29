/**
 * The two edges of {@link DecoratorBoundarySelectionPlugin}'s scope, which the figure pins in
 * `decoratorBoundarySelection.test.tsx` (platform) cannot reach: the DOM point form Lexical resolves
 * by a route of its own, and the one decorator whose landings belong to another rule.
 */

import { $createImmutableNoteCallerNode } from "../../nodes/usj";
import { DecoratorBoundarySelectionPlugin } from "./DecoratorBoundarySelectionPlugin";
import { baseTestEnvironment } from "./react-test.utils";
import { TrailingNoteCaretGuardPlugin } from "./TrailingNoteCaretGuardPlugin";
import { act } from "@testing-library/react";
import {
  $createTextNode,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  LexicalEditor,
} from "lexical";
import {
  $createCharNode,
  $createImmutableTypedTextNode,
  $createMarkerNode,
  $createMarkerTrailingSeparator,
  $createNoteNode,
  $createParaNode,
  $createUnknownNode,
  $isParaNode,
  CURSOR_PLACEHOLDER_CHAR,
  ParaNode,
} from "shared";
import { ReactNode } from "react";

/** Flush the macrotask jsdom fires its native `selectionchange` on, plus the microtasks the caret
 * guards defer their work by. */
async function flushSelectionChange(): Promise<void> {
  await act(async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 0);
    });
  });
}

/** Point the DOM selection at one position and let the native `selectionchange` carry it into
 * Lexical, the way a click does. */
async function putDomCaret(node: Node, offset: number): Promise<void> {
  await flushSelectionChange();
  const domSelection = document.getSelection();
  if (!domSelection) throw new Error("no DOM selection");
  await act(async () => {
    domSelection.setBaseAndExtent(node, offset, node, offset);
  });
  await flushSelectionChange();
}

/** The document's one paragraph. */
function readParagraph(editor: LexicalEditor): ParaNode {
  return editor.getEditorState().read(() => {
    const para = $getRoot().getChildren().find($isParaNode);
    if (!para) throw new Error("no paragraph in the tree");
    return para;
  });
}

describe("a DOM point that IS a decorator's own element", () => {
  /** `\p before \fig cap\fig*` — a read-only construct whose opening and closing USFM bytes are
   * `ImmutableTypedTextNode` decorators, the shape Standard view renders. */
  async function figureEnvironment(): Promise<{ editor: LexicalEditor }> {
    return baseTestEnvironment(
      () => {
        const figure = $createUnknownNode("figure", "fig");
        $getRoot().append(
          $createParaNode("p").append(
            $createTextNode("before "),
            figure.append(
              $createImmutableTypedTextNode("marker", "\\fig "),
              $createTextNode("cap"),
              $createImmutableTypedTextNode("marker", "\\fig*"),
            ),
          ),
        );
      },
      <DecoratorBoundarySelectionPlugin />,
    );
  }

  it("is left to Lexical, whose own answer for that form the caret guards depend on", async () => {
    // The plugin's job is the form Lexical REFUSES to resolve — a point strictly INSIDE a
    // decorator's element. A point that IS the element resolves by a different route: Lexical makes
    // an element point beside the decorator out of it, and then deliberately nulls a selection whose
    // BOTH ends came from decorator DOM, which is the arrival `TrailingNoteCaretGuardPlugin` reads.
    // Answering it here would take that arrival away from the rules that can already see it.
    const { editor } = await figureEnvironment();
    const openerDom = editor.getRootElement()?.querySelector('[data-text-type="marker"]');
    if (!openerDom) throw new Error("the opener glyph did not render");

    await putDomCaret(openerDom, 0);

    editor.getEditorState().read(() => {
      expect($getSelection()).toBeNull();
    });
  });
});

describe("a landing on a collapsed note's caller", () => {
  /** `\p before |note|` — a collapsed note nothing renders past, the shape
   * `TrailingNoteCaretGuardPlugin` hosts a caret for. */
  async function noteEnvironment(children: ReactNode): Promise<{ editor: LexicalEditor }> {
    return baseTestEnvironment(() => {
      const note = $createNoteNode("f", "+");
      $getRoot().append(
        $createParaNode("p").append(
          $createTextNode("before "),
          note.append(
            $createMarkerNode("f", "opening"),
            $createImmutableNoteCallerNode("+", "note preview"),
            $createMarkerTrailingSeparator(),
            $createCharNode("ft").append(
              $createMarkerNode("ft", "opening"),
              $createTextNode("note body"),
            ),
            $createMarkerNode("f", "closing"),
          ),
        ),
      );
    }, children);
  }

  /** The caller's rendered `<button>` — the innermost DOM a hit test on the caller can land in, and
   * so a position a click at the blank end of that line produces. */
  function callerButton(editor: LexicalEditor): Element {
    const button = editor.getRootElement()?.querySelector(".immutable-note-caller button");
    if (!button) throw new Error("the note caller did not render");
    return button;
  }

  it("goes to the trailing-note guard, which needs the arrival to stay unresolved", async () => {
    // Snapping here would hand the note guard a selection, and that guard stands down whenever there
    // is one — leaving the caret between the note's opening glyph and its caller, inside content a
    // collapsed note does not render at all. The host past the note is the repair that must survive.
    const { editor } = await noteEnvironment(
      <>
        <DecoratorBoundarySelectionPlugin />
        <TrailingNoteCaretGuardPlugin />
      </>,
    );
    const para = readParagraph(editor);

    await putDomCaret(callerButton(editor), 0);

    editor.getEditorState().read(() => {
      const host = para.getLastChild();
      if (!$isTextNode(host)) throw new Error("expected a text host past the note");
      expect(host.getTextContent()).toBe(CURSOR_PLACEHOLDER_CHAR);
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      expect(selection.anchor.key).toBe(host.getKey());
    });
  });
});
