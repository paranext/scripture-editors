/**
 * Shared harness for the settled-output suites: one Standard-view `Editor` mount behind its public
 * `EditorRef`, plus the raw Lexical editor the tests drive edits through (both thin wrappers over
 * `mountInView`, which mounts any view). A plain helper module
 * rather than an export from one of the suites, so a suite that needs it does not re-register the
 * other suite's tests by importing it.
 */
import {
  initialize as initializeSerialize,
  reset,
  serializeEditorState,
} from "./adaptors/usj-editor.adaptor";
import { MountedEditor, mountInView, MountOptions } from "./editorViews.test-helpers";
import {
  $rebuildBook,
  $rebuildNoteContent,
  $rebuildParas,
  Tier2Context,
} from "./markerEdit/tier2Rebuild.utils";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { $getRoot, $isElementNode, LexicalEditor, LexicalNode } from "lexical";
import {
  $isBookNode,
  $isNoteNode,
  $isParaNode,
  getMarker as bundledGetMarker,
  NoteNode,
  TypedMarkNode,
} from "shared";
import { getViewOptions, STANDARD_VIEW_MODE, usjReactNodes, ViewOptions } from "shared-react";
import { expect } from "vitest";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { createBasicTestEnvironment } from "../../../../libs/shared/src/nodes/usj/test.utils";

export function requireStandardViewOptions(): ViewOptions {
  const options = getViewOptions(STANDARD_VIEW_MODE);
  if (!options) throw new Error("Standard view options are required for these tests.");
  return options;
}

/** Standard view options with `noteMode: "expanded"` — see `mountExpandedNoteEditor`'s doc
 * comment for why an expanded note needs a dedicated view. */
function expandedNoteViewOptions(): ViewOptions {
  return { ...requireStandardViewOptions(), noteMode: "expanded" };
}

export const spanUsj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [
        { type: "verse", marker: "v", number: "1" },
        "start ",
        { type: "char", marker: "nd", content: ["name"] },
        " end",
      ],
    },
    { type: "para", marker: "p", content: ["a second paragraph to depart to"] },
  ],
};

/**
 * Mount `Editor` in Standard view and hand back its public ref plus the raw Lexical editor.
 *
 * `onUsjChange` wires the editor's host-facing change notification — the callback a host
 * (paranext-core's Scripture editor web view) subscribes to in order to schedule a save. Pass it
 * when a test needs to observe that a document change actually REACHED the host, as distinct from
 * merely being true of the editor's own state. `onSelectionChange` is the same host wiring for
 * the caret.
 *
 * `scrRef` is only needed by the ref methods that guard on it (`applyMarkerMenuSelection`,
 * `insertMarker`); the rest of the suite leaves it off, and those methods then throw by design.
 *
 * `logger` is for a row that asserts what the editor reports, such as a ref method's refusal.
 * `isReadonly` mounts the editor a host shows a resource in, and `styleInfo` a project stylesheet.
 */
export async function mountStandardViewEditor(
  usj: Usj,
  options: MountOptions = {},
): Promise<MountedEditor> {
  return mountInView(usj, requireStandardViewOptions(), options);
}

/**
 * Like `mountStandardViewEditor`, but with `noteMode: "expanded"` — needed for any shape whose
 * pend targets a note's own glyph or its inline-editable content, both of which require the
 * note's content to be genuinely inline-editable in the mounted editor (the default Standard view
 * collapses notes to a caller preview, never inline-editable).
 */
export async function mountExpandedNoteEditor(
  usj: Usj,
  options: MountOptions = {},
): Promise<MountedEditor> {
  return mountInView(usj, expandedNoteViewOptions(), options);
}

/** Like `mountStandardViewEditor`, but under `view` — e.g. a view with the markers hidden. */
export async function mountViewEditor(
  usj: Usj,
  view: ViewOptions,
  options: MountOptions = {},
): Promise<MountedEditor> {
  return mountEditor(usj, view, options);
}

/** Load `usj` into a fresh headless editor under `viewOptions`; mirrors
 * tier2Rebuild.corpus.test.tsx's `loadEditor`. */
function loadHeadless(usj: Usj, viewOptions: ViewOptions): LexicalEditor {
  initializeSerialize(undefined, undefined);
  reset();
  const state = serializeEditorState(usj, viewOptions);
  const { editor } = createBasicTestEnvironment([TypedMarkNode, ...usjReactNodes]);
  editor.setEditorState(editor.parseEditorState(JSON.stringify({ root: state.root })));
  return editor;
}

/** Every NoteNode under `nodes`, depth-first — mirrors tier2Rebuild.corpus.test.tsx's
 * `$collectParas` collection style, for the note-scope half of `expectTier2FixedPoint`. */
function $collectNotes(nodes: LexicalNode[], out: NoteNode[] = []): NoteNode[] {
  for (const node of nodes) {
    if ($isNoteNode(node)) out.push(node);
    if ($isElementNode(node)) $collectNotes(node.getChildren(), out);
  }
  return out;
}

/**
 * Assert `usj` is a Tier-2 fixed point: re-loaded on its own, every paragraph REFUSES a
 * `$rebuildParas` rebuild (returns false) and mutates nothing. Anything else means a consumer was
 * handed USJ that still had settling left in it, which is the standing acceptance for settled
 * output.
 *
 * `$rebuildParas` alone is not the whole property: it treats a NoteNode as one opaque sentinel and
 * never looks inside it (`$isRebuildSentinel`, tier2Rebuild.utils.ts), so a note's own CONTENT is a
 * separate re-tokenization scope with no fixed-point coverage from the paragraph walk alone. Every
 * EXPANDED note in the reloaded tree is additionally driven through `$rebuildNoteContent`
 * (mirroring `$rebuildParas`'s own refusal expectation) to close that gap. A COLLAPSED note is
 * skipped, not asserted on: `$buildNoteFragment` always refuses a collapsed note regardless of
 * content, so calling `$rebuildNoteContent` on one would only prove that guard rail exists, not
 * anything about settled output. Every root `BookNode` (the `\id` line) is likewise driven through
 * `$rebuildBook`, the fourth settle scope.
 *
 * `expandedNotes` must match how `usj` would actually be displayed for any note it carries — the
 * same flag `PendingShape.expandedNotes` (settledGetUsj.test.tsx) already threads into
 * `mountStandardViewEditor`/`mountExpandedNoteEditor` for the live mount this settled output came
 * from, so this reload sees the SAME note layout the original edit did.
 */
export function expectTier2FixedPoint(usj: Usj, expandedNotes = false): void {
  const viewOptions = expandedNotes ? expandedNoteViewOptions() : requireStandardViewOptions();
  const headless = loadHeadless(usj, viewOptions);
  const context: Tier2Context = { viewOptions, getMarker: bundledGetMarker };
  const changed: string[] = [];
  let rebuildScopes = 0;
  headless.update(
    () => {
      $getRoot()
        .getChildren()
        .filter($isParaNode)
        .forEach((para, index) => {
          rebuildScopes += 1;
          if ($rebuildParas([para], context)) changed.push(`#${index} \\${para.getMarker()}`);
        });
      $getRoot()
        .getChildren()
        .filter($isBookNode)
        .forEach((book, index) => {
          rebuildScopes += 1;
          if ($rebuildBook(book, context)) changed.push(`book#${index} \\${book.getMarker()}`);
        });
      $collectNotes($getRoot().getChildren())
        .filter((note) => note.getIsCollapsed() === false)
        .forEach((note, index) => {
          rebuildScopes += 1;
          if ($rebuildNoteContent(note, context))
            changed.push(`note#${index} \\${note.getMarker()}`);
        });
    },
    { discrete: true },
  );
  expect(changed).toEqual([]);
  // An empty refusal list says nothing unless something was actually driven through a rebuild: USJ
  // that reloaded as an empty tree would otherwise satisfy the fixed point vacuously.
  expect(rebuildScopes, "no paragraph or note was driven through a Tier-2 rebuild").toBeGreaterThan(
    0,
  );
}
