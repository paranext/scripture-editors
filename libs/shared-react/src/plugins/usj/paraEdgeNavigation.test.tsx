// Should only be used on nodes that are initialized in the test environment.
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import {
  $createImmutableNoteCallerNode,
  $createImmutableVerseNode,
  $isSomeVerseNode,
  $resolveVerseNode,
} from "../../nodes/usj";
import { EmptyVerseCaretGuardPlugin } from "./EmptyVerseCaretGuardPlugin";
import { LeadingVerseCaretGuardPlugin } from "./LeadingVerseCaretGuardPlugin";
import { ParaMarkerSelectionPlugin } from "./ParaMarkerSelectionPlugin";
import { baseTestEnvironment, settle, updateSelection } from "./react-test.utils";
import { StructureKeyboardPlugin } from "./StructureKeyboardPlugin";
import { $getParaEdgeStop } from "./paraEdgeNavigation.utils";
import { $deletePara } from "./structureKeyboard.utils";
import { StructureProtectionMode } from "./structure-protection.model";
import { TextDirectionPlugin } from "./TextDirectionPlugin";
import { createEmptyHistoryState, HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { act } from "@testing-library/react";
import {
  $createTextNode,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  $setSelection,
  BLUR_COMMAND,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  DELETE_CHARACTER_COMMAND,
  DELETE_LINE_COMMAND,
  DELETE_WORD_COMMAND,
  FOCUS_COMMAND,
  KEY_DOWN_COMMAND,
  LexicalEditor,
  LexicalNode,
  SELECTION_CHANGE_COMMAND,
  TextNode,
  UNDO_COMMAND,
} from "lexical";
import {
  $createCharNode,
  $createGutterMarkerNode,
  $createImmutableChapterNode,
  $createMilestoneNode,
  $createNoteNode,
  $createParaNode,
  $createUnknownNode,
  $getSelectedParaMarker,
  $isCaretHost,
  $isGutterMarkerNode,
  $isMilestoneNode,
  $isNoteNode,
  $isParaNode,
  NBSP,
  ParaNode,
} from "shared";

// jsdom implements no layout: Lexical reads a Range rect when it writes the DOM selection.
if (typeof Range.prototype.getBoundingClientRect !== "function")
  Range.prototype.getBoundingClientRect = () => new DOMRect();

/** A paragraph as the paragraph-structure view builds it: its gutter marker glyph, then content. */
function $createGutterParaNode(marker: string, ...content: LexicalNode[]): ParaNode {
  return $createParaNode(marker).append($createGutterMarkerNode(`\\${marker}${NBSP}`), ...content);
}

interface Texts {
  first: TextNode;
  second: TextNode;
  third: TextNode;
}

/** `\p \v 1 first`, `\li2 \v 2 second`, `\q1 third` in the paragraph-structure view. */
async function environment({
  structureProtectionMode = "off" as StructureProtectionMode,
  textDirection = "ltr" as "ltr" | "rtl",
  onParaMarkerMenuRequest = undefined as (() => void) | undefined,
  withHistory = false,
  historyState = createEmptyHistoryState(),
  withStructureKeyboard = false,
} = {}): Promise<{ editor: LexicalEditor } & Texts> {
  const texts = {} as Texts;
  const { editor } = await baseTestEnvironment(
    () => {
      texts.first = $createTextNode("first");
      texts.second = $createTextNode("second");
      texts.third = $createTextNode("third");
      $getRoot().append(
        $createGutterParaNode("p", $createImmutableVerseNode("1"), texts.first),
        $createGutterParaNode("li2", $createImmutableVerseNode("2"), texts.second),
        $createGutterParaNode("q1", texts.third),
      );
    },
    <>
      {withHistory && (
        // No time-based grouping, so the typing is its own step even right after the arrow press.
        <HistoryPlugin externalHistoryState={historyState} delay={0} />
      )}
      <ParaMarkerSelectionPlugin
        onParaMarkerMenuRequest={onParaMarkerMenuRequest}
        structureProtectionMode={structureProtectionMode}
      />
      {withStructureKeyboard && (
        <StructureKeyboardPlugin structureProtectionMode={structureProtectionMode} />
      )}
      <LeadingVerseCaretGuardPlugin />
      <EmptyVerseCaretGuardPlugin />
      <TextDirectionPlugin textDirection={textDirection} />
    </>,
  );
  // A user's arrow keys reach a focused editor. Unfocused, the focus the first press brings re-runs
  // the caret hosts' focus handling mid-press and moves the caret.
  act(() => {
    editor.getRootElement()?.focus();
  });
  return { editor, ...texts };
}

/**
 * Where the selection rests, described by content: a selected marker, a caret host (with what it
 * sits between), or a caret in text.
 */
function stopOf(editor: LexicalEditor): string {
  // `editor.read` commits pending updates first.
  return editor.read(() => {
    const selection = $getSelection();
    const marker = $getSelectedParaMarker(selection);
    if (marker) return `marker ${marker.getTextContent().trim()}`;
    if (!$isRangeSelection(selection) || !selection.isCollapsed()) return "other";
    const node = selection.anchor.getNode();
    if ($isCaretHost(node)) {
      const before = node.getPreviousSibling();
      const after = node.getNextSibling();
      const describe = (n: LexicalNode | null) =>
        $isGutterMarkerNode(n)
          ? "marker"
          : $isSomeVerseNode(n)
            ? n.getNumber()
            : $isMilestoneNode(n)
              ? "milestone"
              : "end";
      return `host between ${describe(before)} and ${describe(after)}`;
    }
    if ($isParaNode(node)) return `element ${node.getMarker()}@${selection.anchor.offset}`;
    return `"${node.getTextContent()}"@${selection.anchor.offset}`;
  });
}

/** Presses `key` (with any modifiers in `init`), synchronously, and returns the event. */
function pressNow(
  editor: LexicalEditor,
  key: string,
  init: Omit<KeyboardEventInit, "key"> = {},
): KeyboardEvent {
  const event = new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true, ...init });
  act(() => {
    editor.dispatchCommand(KEY_DOWN_COMMAND, event);
  });
  return event;
}

/** Runs `$update` as a discrete update, synchronously. */
function updateNow(editor: LexicalEditor, $update: () => void): void {
  act(() => {
    editor.update($update, { discrete: true });
  });
}

/** Presses `key` and reports where the selection rests afterwards. */
function press(editor: LexicalEditor, key: string): string {
  pressNow(editor, key);
  return stopOf(editor);
}

describe("paragraph-edge arrow stops", () => {
  it("walks back from a paragraph's text: before its verse number, its marker, the previous paragraph's end", async () => {
    const { editor, second } = await environment();
    updateSelection(editor, second, 0);

    expect(press(editor, "ArrowLeft")).toBe("host between marker and 2");
    expect(press(editor, "ArrowLeft")).toBe("marker \\li2");
    expect(press(editor, "ArrowLeft")).toBe('"first"@5');
  });

  it("walks forward from the previous paragraph's end through the same stops in reverse", async () => {
    const { editor, first } = await environment();
    updateSelection(editor, first);

    expect(press(editor, "ArrowRight")).toBe("marker \\li2");
    expect(press(editor, "ArrowRight")).toBe("host between marker and 2");
    expect(press(editor, "ArrowRight")).toBe('"second"@0');
  });

  it("has no stop before a verse number, backward, in a paragraph with none", async () => {
    const { editor, third } = await environment();
    updateSelection(editor, third, 0);

    expect(press(editor, "ArrowLeft")).toBe("marker \\q1");
    expect(press(editor, "ArrowLeft")).toBe('"second"@6');
  });

  it("has no stop before a verse number, forward, in a paragraph with none", async () => {
    const { editor, second } = await environment();
    updateSelection(editor, second);

    expect(press(editor, "ArrowRight")).toBe("marker \\q1");
    expect(press(editor, "ArrowRight")).toBe('"third"@0');
  });

  it("mirrors the keys in right-to-left text", async () => {
    const { editor, second } = await environment({ textDirection: "rtl" });
    updateSelection(editor, second, 0);

    expect(press(editor, "ArrowRight")).toBe("host between marker and 2");
    expect(press(editor, "ArrowRight")).toBe("marker \\li2");
    expect(press(editor, "ArrowLeft")).toBe("host between marker and 2");
  });

  it("skips the marker, backward, when paragraph markers are protected", async () => {
    const { editor, second } = await environment({ structureProtectionMode: "protected" });
    updateSelection(editor, second, 0);

    expect(press(editor, "ArrowLeft")).toBe("host between marker and 2");
    expect(press(editor, "ArrowLeft")).toBe('"first"@5');
  });

  it("skips the marker, forward, when paragraph markers are protected", async () => {
    const { editor, first } = await environment({ structureProtectionMode: "protected" });
    updateSelection(editor, first);

    expect(press(editor, "ArrowRight")).toBe("host between marker and 2");
  });

  it("types in front of the verse number from the stop before it, and one undo takes it out", async () => {
    const historyState = createEmptyHistoryState();
    const { editor, second } = await environment({ withHistory: true, historyState });
    updateSelection(editor, second, 0);
    pressNow(editor, "ArrowLeft");
    // Reading commits the press on its own, as a browser does before the next keystroke arrives.
    expect(stopOf(editor)).toBe("host between marker and 2");

    act(() => {
      editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "XY");
    });

    const li2Text = () =>
      editor.read(() =>
        $getRoot()
          .getChildAtIndex<ParaNode>(1)!
          .getChildren()
          // A bare host is recognized by its mark, never by its text: an unmarked zero-width
          // space left behind would be saved as content, so it must show up here.
          .filter((child) => !$isCaretHost(child))
          .map((child) => child.getTextContent())
          .filter((text) => text !== ""),
      );
    // The verse number is a decorator with no text of its own.
    expect(li2Text()).toEqual([`\\li2${NBSP}`, "XY", "second"]);

    await settle();
    await act(async () => {
      editor.dispatchCommand(UNDO_COMMAND, undefined);
    });
    await settle();
    expect(li2Text()).toEqual([`\\li2${NBSP}`, "second"]);
  });

  it("asks for the marker menu on a backslash while the marker is selected", async () => {
    const onParaMarkerMenuRequest = vi.fn();
    const { editor, second } = await environment({ onParaMarkerMenuRequest });
    updateSelection(editor, second, 0);
    pressNow(editor, "ArrowLeft");
    pressNow(editor, "ArrowLeft");

    const event = pressNow(editor, "\\");
    expect(stopOf(editor)).toBe("marker \\li2");
    // The request is handed over outside the update, in a microtask.
    await act(async () => {
      await Promise.resolve();
    });

    expect(event.defaultPrevented).toBe(true);
    expect(onParaMarkerMenuRequest).toHaveBeenCalledTimes(1);
  });

  it("goes on from an empty paragraph to the next paragraph's marker", async () => {
    let empty: ParaNode;
    const { editor } = await baseTestEnvironment(
      () => {
        empty = $createGutterParaNode("b");
        $getRoot().append(empty, $createGutterParaNode("q1", $createTextNode("third")));
      },
      <ParaMarkerSelectionPlugin />,
    );
    updateNow(editor, () => {
      empty.select(1, 1);
    });

    expect(press(editor, "ArrowRight")).toBe("marker \\q1");
  });

  it("steps over a chapter number between two paragraphs", async () => {
    let before: TextNode;
    let after: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        before = $createTextNode("before");
        after = $createTextNode("after");
        $getRoot().append(
          $createGutterParaNode("p", before),
          $createImmutableChapterNode("2"),
          $createGutterParaNode("p", $createImmutableVerseNode("1"), after),
        );
      },
      <ParaMarkerSelectionPlugin />,
    );
    updateSelection(editor, before!);

    expect(press(editor, "ArrowRight")).toBe("marker \\p");
    expect(press(editor, "ArrowLeft")).toBe('"before"@6');
  });

  it("steps over a sidebar the view hides, both ways", async () => {
    let before: TextNode;
    let inside: TextNode;
    let after: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        before = $createTextNode("before");
        inside = $createTextNode("inside");
        after = $createTextNode("after");
        $getRoot().append(
          $createGutterParaNode("p", before),
          $createUnknownNode("sidebar", "esb").append($createGutterParaNode("q1", inside)),
          $createGutterParaNode("li2", $createImmutableVerseNode("6"), after),
        );
      },
      <ParaMarkerSelectionPlugin />,
    );

    // Backward from the paragraph after the sidebar: the third press lands before it, not inside.
    updateSelection(editor, after!, 0);
    expect(press(editor, "ArrowLeft")).toBe("element li2@1");
    expect(press(editor, "ArrowLeft")).toBe("marker \\li2");
    expect(press(editor, "ArrowLeft")).toBe('"before"@6');
    // Forward again, over the sidebar onto the next paragraph's marker.
    expect(press(editor, "ArrowRight")).toBe("marker \\li2");
    expect(editor.read(() => inside!.getTextContent())).toBe("inside");
  });
});

describe("LeadingVerseCaretGuardPlugin", () => {
  it("hosts the caret an arrow key brings between a paragraph's marker and its leading verse number", async () => {
    const { editor, second } = await environment();
    updateSelection(editor, second, 0);

    expect(press(editor, "ArrowLeft")).toBe("host between marker and 2");
  });

  it("leaves a caret put there any other way as it was", async () => {
    const { editor } = await environment();
    updateNow(editor, () => {
      $getRoot().getChildAtIndex<ParaNode>(1)!.select(1, 1);
    });
    updateNow(editor, () => {
      editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    });

    expect(stopOf(editor)).toBe("element li2@1");
  });

  it("puts no host after a marker that no verse number follows", async () => {
    const { editor } = await environment();
    updateNow(editor, () => {
      $getRoot().getChildAtIndex<ParaNode>(2)!.select(1, 1);
    });
    updateNow(editor, () => {
      editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    });

    // Lexical resolves the element point into the text that follows: no host was needed.
    expect(stopOf(editor)).toBe('"third"@0');
  });
});

describe("an empty verse", () => {
  it("→ goes on past the next verse number in one press", async () => {
    const { editor } = await environment();
    updateNow(editor, () => {
      $getRoot()
        .clear()
        .append(
          $createGutterParaNode(
            "p",
            $createImmutableVerseNode("4"),
            $createImmutableVerseNode("5"),
            $createTextNode("fifth"),
          ),
        );
      $getRoot().getFirstChildOrThrow<ParaNode>().select(2, 2);
    });
    updateNow(editor, () => {
      editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    });
    expect(stopOf(editor)).toBe("host between 4 and 5");

    expect(press(editor, "ArrowRight")).toBe('"fifth"@0');
  });

  it("→ into another empty verse hosts the caret there, and leaves no host behind", async () => {
    const { editor } = await environment();
    let selectionChanges = 0;
    editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      () => {
        selectionChanges += 1;
        return false;
      },
      0,
    );
    updateNow(editor, () => {
      $getRoot()
        .clear()
        .append(
          $createGutterParaNode(
            "p",
            $createImmutableVerseNode("4"),
            $createImmutableVerseNode("5"),
            $createImmutableVerseNode("6"),
            $createTextNode("sixth"),
          ),
        );
      $getRoot().getFirstChildOrThrow<ParaNode>().select(2, 2);
    });
    updateNow(editor, () => {
      editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    });
    expect(stopOf(editor)).toBe("host between 4 and 5");
    const before = selectionChanges;

    expect(press(editor, "ArrowRight")).toBe("host between 5 and 6");
    // Announced, so the scripture reference follows the caret.
    expect(selectionChanges).toBeGreaterThan(before);
    expect(editor.read(() => $getRoot().getAllTextNodes().filter($isCaretHost).length)).toBe(1);
  });
});

/** A collapsed footnote, whose body the view hides. */
function $createCollapsedNoteNode(body: string): LexicalNode {
  return $createNoteNode("f", "+").append(
    $createImmutableNoteCallerNode("+", "note preview"),
    $createCharNode("ft").append($createTextNode(body)),
  );
}

describe("paragraph-edge arrow stops around a collapsed note", () => {
  it("lands backward past a note that ends the previous paragraph, never in its hidden body", async () => {
    let third: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        third = $createTextNode("third");
        $getRoot().append(
          $createGutterParaNode("p", $createTextNode("first"), $createCollapsedNoteNode("body")),
          $createGutterParaNode("q1", third),
        );
      },
      <ParaMarkerSelectionPlugin />,
    );
    updateSelection(editor, third!, 0);

    expect(press(editor, "ArrowLeft")).toBe("marker \\q1");
    // The glyph, the text, the note: the boundary past all three.
    expect(press(editor, "ArrowLeft")).toBe("element p@3");
  });

  it("stops forward on the next paragraph's marker from text a collapsed note follows", async () => {
    let first: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        first = $createTextNode("first");
        $getRoot().append(
          $createGutterParaNode("p", first, $createCollapsedNoteNode("body")),
          $createGutterParaNode("li2", $createImmutableVerseNode("2"), $createTextNode("second")),
        );
      },
      <ParaMarkerSelectionPlugin />,
    );
    updateSelection(editor, first!);

    expect(press(editor, "ArrowRight")).toBe("marker \\li2");
  });
});

describe("paragraph-edge arrow stops around a milestone, which the view hides", () => {
  it("stops forward on the next paragraph's marker in one press from text a milestone ends", async () => {
    let quote: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        quote = $createTextNode("king?”");
        $getRoot().append(
          $createGutterParaNode("q1", quote, $createMilestoneNode("qt-e")),
          $createGutterParaNode("q2", $createImmutableVerseNode("3"), $createTextNode("Jesus")),
        );
      },
      <ParaMarkerSelectionPlugin />,
    );
    updateSelection(editor, quote!);

    expect(press(editor, "ArrowRight")).toBe("marker \\q2");
  });

  it("stops backward before the leading verse number from text a milestone opens", async () => {
    let words: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        words = $createTextNode("“Are you");
        $getRoot().append(
          $createGutterParaNode("p", $createTextNode("first")),
          $createGutterParaNode(
            "p",
            $createImmutableVerseNode("2"),
            $createMilestoneNode("qt-s"),
            words,
          ),
        );
      },
      <>
        <ParaMarkerSelectionPlugin />
        <LeadingVerseCaretGuardPlugin />
      </>,
    );
    act(() => {
      editor.getRootElement()?.focus();
    });
    updateSelection(editor, words!, 0);

    expect(press(editor, "ArrowLeft")).toBe("host between marker and 2");
    // And → comes back past the milestone, to the text.
    expect(press(editor, "ArrowRight")).toBe('"“Are you"@0');
  });
});

describe("paragraph-edge arrow stops with a milestone at a paragraph's start", () => {
  /** `\\p first`, then a `\\q1` of `content`, focused, with the caret at the end of `first`. */
  async function milestoneEnvironment($content: () => LexicalNode[]) {
    let first: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        first = $createTextNode("first");
        $getRoot().append(
          $createGutterParaNode("p", first),
          $createGutterParaNode("q1", ...$content()),
        );
      },
      <>
        <ParaMarkerSelectionPlugin />
        <LeadingVerseCaretGuardPlugin />
      </>,
    );
    act(() => {
      editor.getRootElement()?.focus();
    });
    updateSelection(editor, first!);
    return editor;
  }

  it("keeps the stop before a verse number a milestone comes before", async () => {
    const editor = await milestoneEnvironment(() => [
      $createMilestoneNode("qt-s"),
      $createImmutableVerseNode("3"),
      $createTextNode("text"),
    ]);

    expect(press(editor, "ArrowRight")).toBe("marker \\q1");
    expect(press(editor, "ArrowRight")).toBe("host between milestone and 3");
    expect(press(editor, "ArrowRight")).toBe('"text"@0');
    expect(press(editor, "ArrowLeft")).toBe("host between milestone and 3");
    expect(press(editor, "ArrowLeft")).toBe("marker \\q1");
  });

  it("hosts a caret put in front of the milestone, at the stop, while the arrival lasts", async () => {
    const editor = await milestoneEnvironment(() => [
      $createMilestoneNode("qt-s"),
      $createImmutableVerseNode("3"),
      $createTextNode("text"),
    ]);
    pressNow(editor, "ArrowRight");
    expect(press(editor, "ArrowRight")).toBe("host between milestone and 3");

    // The same stop, spelled in front of the milestone rather than past it.
    updateNow(editor, () => {
      const q1 = $getRoot().getLastChildOrThrow<ParaNode>();
      q1.getChildren()
        .filter($isCaretHost)
        .forEach((host) => host.remove());
      q1.select(1, 1);
    });
    updateNow(editor, () => {
      editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    });

    expect(stopOf(editor)).toBe("host between marker and milestone");
  });

  it("hosts the caret in front of a note a milestone comes before", async () => {
    const editor = await milestoneEnvironment(() => [
      $createImmutableVerseNode("1"),
      $createMilestoneNode("qt-s"),
      $createCollapsedNoteNode("body"),
      $createTextNode("In the beginning"),
    ]);
    pressNow(editor, "ArrowRight");
    expect(press(editor, "ArrowRight")).toBe("host between marker and 1");

    expect(press(editor, "ArrowRight")).toBe("host between milestone and end");
  });
});

describe("a caret in front of a paragraph's marker glyph", () => {
  /** Collapses the caret to the very start of `\\li2`, in front of its glyph. */
  function atLi2Start(editor: LexicalEditor) {
    updateNow(editor, () => {
      $getRoot().getChildAtIndex<ParaNode>(1)!.select(0, 0);
    });
  }

  it("→ moves on to the stop before the leading verse number", async () => {
    const { editor } = await environment();
    atLi2Start(editor);

    expect(press(editor, "ArrowRight")).toBe("host between marker and 2");
  });

  it("← stops on the marker", async () => {
    const { editor } = await environment();
    atLi2Start(editor);

    expect(press(editor, "ArrowLeft")).toBe("marker \\li2");
  });
});

describe("paragraph-edge arrow stops before a note that opens a paragraph's text", () => {
  /** `\\p first`, then a `\\q1` whose text opens with a note, after a verse number if asked. */
  async function noteFirstEnvironment(hasLeadingVerse: boolean) {
    let first: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        first = $createTextNode("first");
        $getRoot().append(
          $createGutterParaNode("p", first),
          $createGutterParaNode(
            "q1",
            ...(hasLeadingVerse ? [$createImmutableVerseNode("1")] : []),
            $createCollapsedNoteNode("body"),
            $createTextNode("In the beginning"),
          ),
        );
      },
      <>
        <ParaMarkerSelectionPlugin />
        <LeadingVerseCaretGuardPlugin />
      </>,
    );
    act(() => {
      editor.getRootElement()?.focus();
    });
    updateSelection(editor, first!);
    return editor;
  }

  it("hosts the caret → brings past the leading verse number, and ← goes back", async () => {
    const editor = await noteFirstEnvironment(true);
    expect(press(editor, "ArrowRight")).toBe("marker \\q1");
    expect(press(editor, "ArrowRight")).toBe("host between marker and 1");

    expect(press(editor, "ArrowRight")).toBe("host between 1 and end");
    expect(press(editor, "ArrowLeft")).toBe("host between marker and 1");
  });

  it("Shift+→ from the caret in front of the note selects the note", async () => {
    const editor = await noteFirstEnvironment(true);
    pressNow(editor, "ArrowRight");
    pressNow(editor, "ArrowRight");
    expect(press(editor, "ArrowRight")).toBe("host between 1 and end");

    const event = pressNow(editor, "ArrowRight", { shiftKey: true });

    expect(event.defaultPrevented).toBe(true);
    const selected = editor.read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection) || selection.isCollapsed()) return undefined;
      return selection.getNodes().some($isNoteNode);
    });
    expect(selected).toBe(true);
  });

  it("hosts the caret → brings past the marker of a paragraph with no verse number", async () => {
    const editor = await noteFirstEnvironment(false);
    expect(press(editor, "ArrowRight")).toBe("marker \\q1");

    expect(press(editor, "ArrowRight")).toBe("host between marker and end");
  });
});

describe("paragraph-edge arrow stops when the text starts inside a character span", () => {
  it("stops backward on the marker from the start of a paragraph's first span", async () => {
    let lord: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        lord = $createTextNode("LORD");
        $getRoot().append(
          $createGutterParaNode("p", $createTextNode("first")),
          $createGutterParaNode("q1", $createCharNode("nd").append(lord), $createTextNode(" is")),
        );
      },
      <ParaMarkerSelectionPlugin />,
    );
    updateSelection(editor, lord!, 0);

    expect(press(editor, "ArrowLeft")).toBe("marker \\q1");
  });

  it("stops backward before the leading verse number from the start of a span that follows it", async () => {
    let words: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        words = $createTextNode("For God");
        $getRoot().append(
          $createGutterParaNode("p", $createTextNode("first")),
          $createGutterParaNode(
            "p",
            $createImmutableVerseNode("16"),
            $createCharNode("wj").append(words),
          ),
        );
      },
      <>
        <ParaMarkerSelectionPlugin />
        <LeadingVerseCaretGuardPlugin />
      </>,
    );
    act(() => {
      editor.getRootElement()?.focus();
    });
    updateSelection(editor, words!, 0);

    expect(press(editor, "ArrowLeft")).toBe("host between marker and 16");
  });

  it("→ from the stop before the leading verse number goes back into the span", async () => {
    let words: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        words = $createTextNode("For God");
        $getRoot().append(
          $createGutterParaNode("p", $createTextNode("first")),
          $createGutterParaNode(
            "q1",
            $createImmutableVerseNode("16"),
            $createCharNode("wj").append(words),
          ),
        );
      },
      <>
        <ParaMarkerSelectionPlugin />
        <LeadingVerseCaretGuardPlugin />
      </>,
    );
    act(() => {
      editor.getRootElement()?.focus();
    });
    updateSelection(editor, words!, 0);
    expect(press(editor, "ArrowLeft")).toBe("host between marker and 16");

    // In the span's text, so what is typed there takes the span's style.
    expect(press(editor, "ArrowRight")).toBe('"For God"@0');
  });

  it("→ from the marker goes back into the paragraph's first span", async () => {
    let lord: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        lord = $createTextNode("LORD");
        $getRoot().append(
          $createGutterParaNode("p", $createTextNode("first")),
          $createGutterParaNode("q1", $createCharNode("nd").append(lord), $createTextNode(" is")),
        );
      },
      <ParaMarkerSelectionPlugin />,
    );
    updateSelection(editor, lord!, 0);
    expect(press(editor, "ArrowLeft")).toBe("marker \\q1");

    expect(press(editor, "ArrowRight")).toBe('"LORD"@0');
  });

  it("← into a paragraph that ends in a span lands at the end of the span's text", async () => {
    let next: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        next = $createTextNode("next");
        $getRoot().append(
          $createGutterParaNode(
            "p",
            $createTextNode("Jesus said, "),
            $createCharNode("wj").append($createTextNode("I am the way")),
          ),
          $createGutterParaNode("q1", next),
        );
      },
      <ParaMarkerSelectionPlugin />,
    );
    updateSelection(editor, next!, 0);
    expect(press(editor, "ArrowLeft")).toBe("marker \\q1");

    // In the span's text, so what is typed there takes the span's style.
    expect(press(editor, "ArrowLeft")).toBe('"I am the way"@12');
  });
});

describe("the stop before a leading verse number", () => {
  /** Puts the caret at the stop before verse 2, from the start of its text. */
  async function atStopBeforeVerse2(options: Parameters<typeof environment>[0] = {}) {
    const result = await environment(options);
    updateSelection(result.editor, result.second, 0);
    pressNow(result.editor, "ArrowLeft");
    expect(stopOf(result.editor)).toBe("host between marker and 2");
    return result;
  }

  /** Each paragraph's marker and text, a caret host left out. */
  function paragraphs(editor: LexicalEditor): string[] {
    return editor.read(() =>
      $getRoot()
        .getChildren()
        .map((para) => para.getTextContent().replace(NBSP, " ")),
    );
  }

  /** Whether a bare caret host is anywhere but where the caret is. */
  function hasStrayHost(editor: LexicalEditor): boolean {
    return editor.read(() => {
      const selection = $getSelection();
      const caretKey = $isRangeSelection(selection) ? selection.anchor.key : undefined;
      return $getRoot()
        .getAllTextNodes()
        .some((node) => $isCaretHost(node) && node.getKey() !== caretKey);
    });
  }

  it("reports the verse after it, as an element caret there does", async () => {
    const { editor } = await atStopBeforeVerse2();

    const verse = editor.read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) return undefined;
      return $resolveVerseNode(selection.anchor.getNode(), selection)?.getNumber();
    });

    expect(verse).toBe("2");
  });

  it("Shift+→ selects the verse number", async () => {
    const { editor } = await atStopBeforeVerse2();

    const event = pressNow(editor, "ArrowRight", { shiftKey: true });

    expect(event.defaultPrevented).toBe(true);
    const selected = editor.read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection) || selection.isCollapsed()) return undefined;
      return selection
        .getNodes()
        .filter($isSomeVerseNode)
        .map((verse) => verse.getNumber());
    });
    expect(selected).toEqual(["2"]);
    expect(hasStrayHost(editor)).toBe(false);
  });

  it("Backspace merges the paragraph and leaves no host behind", async () => {
    const { editor } = await atStopBeforeVerse2();

    act(() => {
      editor.dispatchCommand(DELETE_CHARACTER_COMMAND, true);
    });
    await settle();

    expect(paragraphs(editor)).toEqual(["\\p firstsecond", "\\q1 third"]);
    expect(hasStrayHost(editor)).toBe(false);
  });

  it("a backward word delete merges the paragraph, as Backspace does, and keeps its marker", async () => {
    const { editor } = await atStopBeforeVerse2();
    const glyphKey = editor.read(() =>
      $getRoot().getChildAtIndex<ParaNode>(0)!.getFirstChild()!.getKey(),
    );

    act(() => {
      editor.dispatchCommand(DELETE_WORD_COMMAND, true);
    });
    await settle();

    expect(paragraphs(editor)).toEqual(["\\p firstsecond", "\\q1 third"]);
    expect(
      editor.read(() => $getRoot().getChildAtIndex<ParaNode>(0)!.getFirstChild()!.getKey()),
    ).toBe(glyphKey);
  });

  describe("a line delete", () => {
    // jsdom has no `Selection.modify`, which Lexical's line delete extends the DOM selection with.
    // Standing in for it, this extends nothing, so the delete runs from where the caret is.
    let originalModify: unknown;
    beforeEach(() => {
      originalModify = (Selection.prototype as { modify?: unknown }).modify;
      (Selection.prototype as { modify?: () => void }).modify = () => undefined;
    });
    afterEach(() => {
      (Selection.prototype as { modify?: unknown }).modify = originalModify;
    });

    it("forward runs once the host is gone from the DOM, without losing the editor", async () => {
      const { editor } = await atStopBeforeVerse2();

      act(() => {
        editor.dispatchCommand(DELETE_LINE_COMMAND, false);
      });
      await settle();

      expect(hasStrayHost(editor)).toBe(false);
      // The editor still takes edits: a broken selection would throw here.
      updateSelection(
        editor,
        editor.read(() =>
          $getRoot().getLastChildOrThrow<ParaNode>().getLastChildOrThrow<TextNode>(),
        ),
        0,
      );
      act(() => {
        editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "Z");
      });
      expect(paragraphs(editor).at(-1)).toBe("\\q1 Zthird");
    });

    it("backward merges the paragraph, as Backspace does", async () => {
      const { editor } = await atStopBeforeVerse2();

      act(() => {
        editor.dispatchCommand(DELETE_LINE_COMMAND, true);
      });
      await settle();

      expect(paragraphs(editor)).toEqual(["\\p firstsecond", "\\q1 third"]);
    });

    it("forward, then Undo, puts the caret back at the stop with its host", async () => {
      const { editor } = await atStopBeforeVerse2({ withHistory: true });

      act(() => {
        editor.dispatchCommand(DELETE_LINE_COMMAND, false);
      });
      await settle();
      updateNow(editor, () => {
        editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
      });
      act(() => {
        editor.dispatchCommand(UNDO_COMMAND, undefined);
      });
      await settle();

      expect(stopOf(editor)).toBe("host between marker and 2");
    });
  });

  it("a caret put there after an arrival has ended gets no host", async () => {
    const { editor, third } = await atStopBeforeVerse2();
    // The caret leaves the stop, ending the arrival.
    updateSelection(editor, third, 0);
    updateNow(editor, () => {
      editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    });

    updateNow(editor, () => {
      $getRoot().getChildAtIndex<ParaNode>(1)!.select(1, 1);
    });
    updateNow(editor, () => {
      editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    });

    expect(stopOf(editor)).toBe("element li2@1");
  });

  it("is hosted again when the caret comes back to it from a selection in its paragraph", async () => {
    const { editor } = await atStopBeforeVerse2();
    pressNow(editor, "ArrowRight", { shiftKey: true });
    updateNow(editor, () => {
      editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    });

    // ←, as the browser collapses the range to its start.
    updateNow(editor, () => {
      $getRoot().getChildAtIndex<ParaNode>(1)!.select(1, 1);
    });
    updateNow(editor, () => {
      editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    });

    expect(stopOf(editor)).toBe("host between marker and 2");
  });

  it("is hosted again when focus returns, after a split has carried it into a new paragraph", async () => {
    const { editor } = await atStopBeforeVerse2();
    // Enter at the stop, as the editor splits there: the host, the verse number and the text go
    // to a new paragraph with a glyph of its own.
    updateNow(editor, () => {
      const li2 = $getRoot().getChildAtIndex<ParaNode>(1)!;
      const moved = li2.getChildren().slice(1);
      const split = $createGutterParaNode("li2");
      li2.insertAfter(split);
      split.append(...moved);
    });

    act(() => {
      editor.dispatchCommand(BLUR_COMMAND, new FocusEvent("blur"));
    });
    expect(stopOf(editor)).toBe("element li2@1");
    act(() => {
      editor.dispatchCommand(FOCUS_COMMAND, new FocusEvent("focus"));
    });
    await settle();

    expect(stopOf(editor)).toBe("host between marker and 2");
    expect(editor.getEditorState().read(() => $getRoot().getChildrenSize())).toBe(4);
  });

  it("is hosted again after an update that leaves no selection", async () => {
    const { editor } = await atStopBeforeVerse2();
    // Focus leaves, which takes the host away, then an update commits no selection at all: the
    // editor has lost it, not moved it.
    act(() => {
      editor.dispatchCommand(BLUR_COMMAND, new FocusEvent("blur"));
    });
    updateNow(editor, () => {
      $setSelection(null);
    });

    updateNow(editor, () => {
      $getRoot().getChildAtIndex<ParaNode>(1)!.select(1, 1);
    });
    updateNow(editor, () => {
      editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    });

    expect(stopOf(editor)).toBe("host between marker and 2");
  });

  it("Backspace removes an empty paragraph before it and leaves the caret at the stop", async () => {
    let second: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        second = $createTextNode("second");
        $getRoot().append(
          $createGutterParaNode("p", $createImmutableVerseNode("1"), $createTextNode("first")),
          $createGutterParaNode("b"),
          $createGutterParaNode("li2", $createImmutableVerseNode("2"), second),
        );
      },
      <>
        <ParaMarkerSelectionPlugin structureProtectionMode="off" />
        <StructureKeyboardPlugin structureProtectionMode="off" />
        <LeadingVerseCaretGuardPlugin />
        <EmptyVerseCaretGuardPlugin />
      </>,
    );
    act(() => {
      editor.getRootElement()?.focus();
    });
    updateSelection(editor, second!, 0);
    expect(press(editor, "ArrowLeft")).toBe("host between marker and 2");

    act(() => {
      editor.dispatchCommand(DELETE_CHARACTER_COMMAND, true);
    });
    await settle();

    expect(
      editor.read(() =>
        $getRoot()
          .getChildren()
          .map((para) => ($isParaNode(para) ? para.getMarker() : "?")),
      ),
    ).toEqual(["p", "li2"]);
    // Not past the verse number, where a second Backspace would delete it.
    expect(stopOf(editor)).toBe("host between marker and 2");
  });

  it("a delete that removes an empty paragraph moves a caret in front of the next glyph to its text", async () => {
    let third: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        third = $createTextNode("third");
        $getRoot().append(
          $createGutterParaNode("p", $createTextNode("first")),
          $createGutterParaNode("b"),
          $createGutterParaNode("q1", third),
        );
      },
      <StructureKeyboardPlugin structureProtectionMode="off" />,
    );
    updateNow(editor, () => {
      // In front of the glyph: the invisible position the stops never leave a caret at.
      $getRoot().getChildAtIndex<ParaNode>(2)!.select(0, 0);
      $deletePara($getRoot().getChildAtIndex<ParaNode>(1)!, "deleteForward");
    });

    expect(stopOf(editor)).toBe('"third"@0');
  });
});

describe("the verse a caret before a leading verse number reads", () => {
  it("is that verse, with a milestone between the glyph and the verse number", async () => {
    let second: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        second = $createTextNode("second");
        $getRoot().append(
          $createGutterParaNode("p", $createImmutableVerseNode("1"), $createTextNode("first")),
          $createGutterParaNode(
            "li2",
            $createMilestoneNode("zaln-s"),
            $createImmutableVerseNode("2"),
            second,
          ),
        );
      },
      <>
        <ParaMarkerSelectionPlugin />
        <LeadingVerseCaretGuardPlugin />
      </>,
    );
    act(() => {
      editor.getRootElement()?.focus();
    });
    updateSelection(editor, second!, 0);
    expect(press(editor, "ArrowLeft")).toBe("host between milestone and 2");

    const verse = editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) return undefined;
      return $resolveVerseNode(selection.anchor.getNode(), selection)?.getNumber();
    });
    expect(verse).toBe("2");
  });
});

describe("Shift+← from the caret before a leading verse number", () => {
  it("extends the selection back to the previous paragraph's end", async () => {
    const { editor, first, second } = await environment();
    updateSelection(editor, second, 0);
    expect(press(editor, "ArrowLeft")).toBe("host between marker and 2");

    const event = pressNow(editor, "ArrowLeft", { shiftKey: true });

    expect(event.defaultPrevented).toBe(true);
    const range = editor.read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) return undefined;
      return {
        focus: selection.focus.getNode().is(first) ? `first@${selection.focus.offset}` : "other",
        hosts: $getRoot().getAllTextNodes().filter($isCaretHost).length,
      };
    });
    expect(range?.focus).toBe("first@5");
    expect(range?.hosts).toBe(0);
    // Anchored where the caret stood: in front of the verse number.
    expect(
      editor.read(() => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) return undefined;
        const { anchor } = selection;
        const node = anchor.getNode();
        return $isParaNode(node) && $isSomeVerseNode(node.getChildAtIndex(anchor.offset));
      }),
    ).toBe(true);
  });
});

describe("paragraph-edge arrow stops at a span that opens with a hidden node", () => {
  it("← from the start of a span whose first child is a milestone selects the marker", async () => {
    let quote: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        quote = $createTextNode("I am the way");
        $getRoot().append(
          $createGutterParaNode("p", $createTextNode("first")),
          $createGutterParaNode(
            "q1",
            $createCharNode("wj").append($createMilestoneNode("zmsc-s"), quote),
          ),
        );
      },
      <ParaMarkerSelectionPlugin />,
    );
    updateSelection(editor, quote!, 0);

    expect(press(editor, "ArrowLeft")).toBe("marker \\q1");
  });
});

describe("paragraph-edge arrow stops inside an expanded note", () => {
  it("is no stop at the end of a note that ends the paragraph", async () => {
    let body: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        body = $createTextNode("body");
        $getRoot().append(
          $createGutterParaNode(
            "p",
            $createTextNode("first"),
            $createNoteNode("f", "+", false).append(
              $createImmutableNoteCallerNode("+", "note preview"),
              $createCharNode("ft").append(body),
            ),
          ),
          $createGutterParaNode("q1", $createTextNode("third")),
        );
      },
      <ParaMarkerSelectionPlugin />,
    );
    updateSelection(editor, body!, 4);

    expect(editor.getEditorState().read($getParaEdgeStop)).toBeUndefined();
  });

  it("is no stop at the start of a note that opens the paragraph's text", async () => {
    let body: TextNode;
    const { editor } = await baseTestEnvironment(
      () => {
        body = $createTextNode("body");
        $getRoot().append(
          $createGutterParaNode("p", $createTextNode("first")),
          $createGutterParaNode(
            "q1",
            $createNoteNode("f", "+", false).append($createCharNode("ft").append(body)),
            $createTextNode("third"),
          ),
        );
      },
      <ParaMarkerSelectionPlugin />,
    );
    updateSelection(editor, body!, 0);

    expect(editor.getEditorState().read($getParaEdgeStop)).toBeUndefined();
  });
});

describe("a two-step Delete armed at a paragraph's end", () => {
  it("ends when → moves on to the next paragraph's marker", async () => {
    const { editor, first } = await environment({
      structureProtectionMode: "guarded",
      withStructureKeyboard: true,
    });
    updateSelection(editor, first);
    pressNow(editor, "Delete");
    expect(editor.read(() => $getRoot().getChildrenSize())).toBe(3);

    expect(press(editor, "ArrowRight")).toBe("marker \\li2");
    await settle();
    pressNow(editor, "Delete");
    await settle();

    // A Delete on the marker arms its own removal; it does not fire the arm the → left behind.
    expect(editor.read(() => $getRoot().getChildrenSize())).toBe(3);
  });
});

describe("a backslash on a selected marker", () => {
  async function onMarker(onParaMarkerMenuRequest: () => void) {
    const result = await environment({ onParaMarkerMenuRequest });
    updateSelection(result.editor, result.second, 0);
    pressNow(result.editor, "ArrowLeft");
    pressNow(result.editor, "ArrowLeft");
    expect(stopOf(result.editor)).toBe("marker \\li2");
    return result;
  }

  it("typed through AltGr asks for the marker menu", async () => {
    const onParaMarkerMenuRequest = vi.fn();
    const { editor } = await onMarker(onParaMarkerMenuRequest);

    // A browser reports AltGr as Ctrl+Alt with the AltGraph modifier state set.
    const event = pressNow(editor, "\\", {
      ctrlKey: true,
      altKey: true,
      modifierAltGraph: true,
    } as KeyboardEventInit);
    await act(async () => {
      await Promise.resolve();
    });

    expect(event.defaultPrevented).toBe(true);
    expect(onParaMarkerMenuRequest).toHaveBeenCalledTimes(1);
  });

  it("in a Ctrl chord leaves the marker selected and asks for nothing", async () => {
    const onParaMarkerMenuRequest = vi.fn();
    const { editor } = await onMarker(onParaMarkerMenuRequest);

    pressNow(editor, "\\", { ctrlKey: true });
    await act(async () => {
      await Promise.resolve();
    });

    expect(stopOf(editor)).toBe("marker \\li2");
    expect(onParaMarkerMenuRequest).not.toHaveBeenCalled();
  });
});
