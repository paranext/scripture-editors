/**
 * Shared harness for the `EditorRef` note-affordance suites (`applyUpdateDomSelection`,
 * `noteCaretPlacement`, `noteIndexAndHighlight`): mounting the public `<Editorial>` wrapper under
 * Standard view, a one-note-content builder, and the small reads every suite needs off the
 * resulting editor. A plain helper module rather than an export from one of the suites, so a
 * suite that needs it does not re-register the other suites' tests by importing it.
 */
import Editorial from "../Editorial";
import { EditorOptions, EditorProps, EditorRef } from "./editor.model";
import { flushQueuedEvents } from "./editor-test.utils";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act, render } from "@testing-library/react";
import { createRef } from "react";
import { $getRoot, LexicalEditor } from "lexical";
import { $dfs } from "@lexical/utils";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { getEmbeddedLexicalEditor } from "../../../../libs/shared-react/src/plugins/usj/react-test.utils";
import { $isNoteNode, LoggerBasic, NoteNode } from "shared";
import { getViewOptions, STANDARD_VIEW_MODE } from "shared-react";

export function requireDefined<T>(value: T | undefined | null, message: string): T {
  if (value === undefined || value === null) throw new Error(message);
  return value;
}

export const options: EditorOptions = {
  hasSpellCheck: false,
  markerMenuTrigger: "\\",
  view: requireDefined(getViewOptions(STANDARD_VIEW_MODE), "standard view options"),
  hasExternalUI: true,
};

export const scrRef = { book: "GEN", chapterNum: 1, verseNum: 1 };

/** A one-note-content note: `\fr 1:1 ` then `\ft <text>` — the fixture every suite here builds
 * its documents' notes from. */
export function note(text: string): MarkerObject {
  return {
    type: "note",
    marker: "f",
    caller: "+",
    content: [
      { type: "char", marker: "fr", content: ["1:1 "] },
      { type: "char", marker: "ft", content: [text] },
    ],
  };
}

/**
 * Mount `<Editorial>` on `defaultUsj` and hand back its public ref, the raw Lexical editor, and
 * the rendered container.
 *
 * @param editorOptions - Defaults to Standard view (`options`); pass a different `EditorOptions`
 *   for a suite that needs another marker or note mode.
 */
export async function renderEditor(
  defaultUsj: Usj,
  editorOptions: EditorOptions = options,
  onSelectionChange?: EditorProps<LoggerBasic>["onSelectionChange"],
): Promise<{ editorRef: EditorRef; lexical: LexicalEditor; container: HTMLElement }> {
  const ref = createRef<EditorRef>();
  let container: HTMLElement | undefined;
  await act(async () => {
    const result = render(
      <Editorial
        ref={ref}
        defaultUsj={defaultUsj}
        scrRef={scrRef}
        onScrRefChange={() => undefined}
        onSelectionChange={onSelectionChange}
        options={editorOptions}
      />,
    );
    container = result.container;
  });
  // A fresh editor puts its caret at the start of `scrRef`'s verse a few microtasks after the
  // document loads. Let that land first, or it can overwrite the caret a test is about to place.
  await flushQueuedEvents();
  const editorRef = requireDefined(ref.current, "editor ref");
  // This suite runs end-to-end through the public <Editorial> wrapper, which strips `children`, so
  // the cleaner EditorRefPlugin-child handle isn't reachable — read the editor off the mounted DOM.
  const lexical = getEmbeddedLexicalEditor(container);
  return { editorRef, lexical, container: requireDefined(container, "container") };
}

/** Every note in the document, in document order, by key. */
export function noteKeys(lexical: LexicalEditor): string[] {
  return lexical.getEditorState().read(() =>
    $dfs($getRoot())
      .map(({ node }) => node)
      .filter($isNoteNode)
      .map((n: NoteNode) => n.getKey()),
  );
}

/** Collects the update tags of every commit that happens while `run` executes. */
export async function tagsOfUpdatesDuring(
  lexical: LexicalEditor,
  run: () => void,
): Promise<Set<string>> {
  const seen = new Set<string>();
  const unregister = lexical.registerUpdateListener(({ tags }) => {
    tags.forEach((tag) => seen.add(tag));
  });
  await act(async () => {
    run();
  });
  unregister();
  return seen;
}
