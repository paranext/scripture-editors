/**
 * The transient caret host in an empty verse, in the plugin combination the app actually mounts.
 *
 * `EmptyVerseCaretGuardPlugin`'s own tests (shared-react) pin its rule and its lifecycle against one
 * or two plugins. What only this combination can answer is whether the host survives contact with
 * the transforms that run when its insertion dirties the paragraph — the marker-edit engine's
 * pend/settle machinery, the char transforms, and the trailing-space transform, which is the one
 * that spaces text before a verse marker and so acts on exactly the position a host occupies — and
 * whether the character can reach the file. Loading real USJ through the production adaptor and
 * comparing the serialized USJ before and after the caret arrives is the sharpest form of that
 * question: any fabricated byte, from the host itself or from a transform the host woke, shows up
 * as a diff.
 *
 * The view is a marker-HIDDEN one deliberately. An empty verse only lacks a caret host where its
 * marker is a childless decorator; in the editable-marker views a verse is a `VerseNode`, which is a
 * `TextNode` and hosts the caret itself, so the guard declines and there is nothing here to test.
 *
 * jsdom performs no layout and no native caret movement, so whether a browser PAINTS a caret in the
 * host, and how many key presses a crossing costs, cannot be asserted anywhere headless. Those stay
 * manual checks. Arrow traversal out of a host is not driven here either: jsdom re-resolves the DOM
 * selection between a guard-made arrival and a key press, so the sequence is unreliable in this
 * harness. `ArrowNavigationPlugin`'s own tests pin that rule against a directly-built host instead.
 */

import editorUsjAdaptor, {
  deserializeSerializedEditorState,
  initialize as initializeDeserialize,
} from "./adaptors/editor-usj.adaptor";
import {
  initialize as initializeSerialize,
  reset,
  serializeEditorState,
} from "./adaptors/usj-editor.adaptor";
import { MarkerEditPlugin } from "./markerEdit/MarkerEditPlugin";
import { Usj, usxStringToUsj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  LexicalEditor,
  LexicalNode,
  SELECTION_CHANGE_COMMAND,
} from "lexical";
import {
  $isSomeVerseNode,
  CharNodePlugin,
  EmptyVerseCaretGuardPlugin,
  FORMATTED_VIEW_MODE,
  getViewOptions,
  SomeVerseNode,
  TextSpacingPlugin,
  ViewOptions,
} from "shared-react";
import { $isParaNode, CURSOR_PLACEHOLDER_CHAR, ParaNode } from "shared";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { baseTestEnvironment } from "../../../../libs/shared-react/src/plugins/usj/react-test.utils";

/** `\p \v 2 And the earth ... \v 3 \v 4 And there was light.` — verse 3 is empty, between two verses. */
const USX = `<usx version="3.0"><book code="GEN" style="id" /><chapter number="1" style="c" /><para style="p"><verse number="2" style="v" />And the earth was without form. <verse number="3" style="v" /><verse number="4" style="v" />And there was light.</para></usx>`;

function requireFormattedViewOptions(): ViewOptions {
  const options = getViewOptions(FORMATTED_VIEW_MODE);
  if (!options) throw new Error("Formatted view options are required for these tests.");
  return options;
}

/** Loads `USX` through the production adaptor and mounts the transform-registering plugins. */
async function mountLoaded(): Promise<{
  editor: LexicalEditor;
  usj: Usj;
  viewOptions: ViewOptions;
}> {
  const viewOptions = requireFormattedViewOptions();
  const usj = usxStringToUsj(USX);
  initializeSerialize(undefined, undefined);
  reset();
  initializeDeserialize(undefined);
  const state = serializeEditorState(usj, viewOptions);
  const { editor } = await baseTestEnvironment(
    JSON.stringify({ root: state.root }),
    <>
      <CharNodePlugin />
      <MarkerEditPlugin viewOptions={viewOptions} />
      <TextSpacingPlugin />
      <EmptyVerseCaretGuardPlugin />
    </>,
  );
  return { editor, usj, viewOptions };
}

/** The paragraph holding the verses. */
function readVerseParagraph(editor: LexicalEditor): ParaNode {
  return editor.getEditorState().read(() => {
    const para = $getRoot()
      .getChildren()
      .find((child): child is ParaNode => $isParaNode(child));
    if (!para) throw new Error("no paragraph");
    return para;
  });
}

/** The verse marker carrying `number`, found by value rather than by a hard-coded index. */
function readVerse(editor: LexicalEditor, para: ParaNode, number: string): SomeVerseNode {
  return editor.getEditorState().read(() => {
    const verse = para
      .getChildren()
      .find(
        (child): child is SomeVerseNode => $isSomeVerseNode(child) && child.getNumber() === number,
      );
    if (!verse) throw new Error(`no verse ${number}`);
    return verse;
  });
}

/** Marks `node` and every descendant dirty, so each one's registered transforms run. */
function $markSubtreeDirty(node: LexicalNode): void {
  node.markDirty();
  if ($isElementNode(node)) node.getChildren().forEach($markSubtreeDirty);
}

/** Rest the caret at the empty verse's content start — the boundary just past its marker. */
async function restCaretInEmptyVerse(editor: LexicalEditor, para: ParaNode): Promise<void> {
  const verse = readVerse(editor, para, "3");
  await act(async () => {
    editor.update(
      () => {
        const boundary = verse.getIndexWithinParent() + 1;
        para.select(boundary, boundary);
      },
      { discrete: true },
    );
  });
  await act(async () => {
    editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
  });
  // A browser writes the repaired selection back out to the DOM once the update commits; jsdom does
  // not, so the fed-in position would otherwise be read back over the repair by a later
  // selectionchange — and the hook, seeing an anchor that is not the host, would reap the host it
  // had just made. Dropping the DOM range leaves the editor state authoritative, as reconciliation
  // would.
  document.getSelection()?.removeAllRanges();
}

/** The paragraph's one bare caret host, or `undefined`. */
function readHost(editor: LexicalEditor, para: ParaNode) {
  return editor
    .getEditorState()
    .read(() =>
      para
        .getChildren()
        .find((child) => $isTextNode(child) && child.getTextContent() === CURSOR_PLACEHOLDER_CHAR),
    );
}

describe("the caret host in an empty verse, with the production transforms mounted", () => {
  // Each test mounts its own editor, but the DOM selection is the document's, not the editor's, and
  // jsdom never clears it. Left in place it still points into the previous test's detached tree, and
  // the next editor reads it back over its own state. The adaptors are module singletons for the
  // same reason: state here is shared unless it is explicitly reset.
  afterEach(() => {
    document.getSelection()?.removeAllRanges();
  });

  it("hosts the caret without changing the document the transforms see", async () => {
    const { editor, viewOptions } = await mountLoaded();
    const para = readVerseParagraph(editor);
    const before = deserializeSerializedEditorState(editor.getEditorState().toJSON(), viewOptions);

    await restCaretInEmptyVerse(editor, para);

    editor.getEditorState().read(() => {
      const host = para
        .getChildren()
        .find((child) => $isTextNode(child) && child.getTextContent() === CURSOR_PLACEHOLDER_CHAR);
      // Exactly the host, and nothing else: no trailing space was fabricated onto it by the
      // transform that spaces text before a verse marker, and it was not then swallowed by that
      // transform's empty-verse-content branch.
      expect(host).toBeDefined();
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
      expect(selection.anchor.key).toBe(host?.getKey());
    });

    // The character never reaches the file: the serialized USJ is byte-identical either way.
    const after = deserializeSerializedEditorState(editor.getEditorState().toJSON(), viewOptions);
    expect(after).toEqual(before);
    expect(JSON.stringify(after)).not.toContain(CURSOR_PLACEHOLDER_CHAR);
  });

  it("fabricates no byte when the transforms run over its paragraph", async () => {
    // The host is a text node sitting immediately before a verse marker, which is precisely what the
    // trailing-space transform acts on. Dirtying the paragraph and its children runs every
    // registered transform over it, and the document must come out exactly as it was loaded — no
    // fabricated space, no swallowed content.
    //
    // Deliberately no assertion that the host is still THERE afterwards. A full-subtree dirty pass
    // re-resolves the DOM selection, and the hook drops a host the caret no longer anchors in; that
    // is the host's documented lifetime, not a transform padding or swallowing it, and it is the
    // question this file exists to ask. Whether the caret keeps its host across such a pass is the
    // hook's business and is pinned in its own tests.
    const { editor, usj, viewOptions } = await mountLoaded();
    const para = readVerseParagraph(editor);
    await restCaretInEmptyVerse(editor, para);
    expect(readHost(editor, para)).toBeDefined();

    await act(async () => {
      editor.update(() => {
        $markSubtreeDirty(para);
      });
    });

    const after = editorUsjAdaptor.deserializeEditorState(editor.getEditorState(), viewOptions);
    expect(after).toEqual(usj);
    expect(JSON.stringify(after)).not.toContain(CURSOR_PLACEHOLDER_CHAR);
  });
});
