/**
 * The one registry of views the editor suites run in, and the one way to mount the real `Editor`
 * in any of them.
 *
 * Every per-view list a suite iterates is a projection of {@link EDITOR_VIEWS}, so a view's options
 * are spelled once and a key written for one suite (`"paragraph-structure"`) reads the same in all
 * of them. {@link EDITING_VIEWS} is the subset a user edits Scripture in; a suite whose subject is
 * the document a user edits runs over those three.
 *
 * A plain helper module rather than an export from one of the suites, so a suite that needs it
 * does not re-register another suite's tests by importing it.
 */
import Editor from "./Editor";
import { EditorProps, EditorRef } from "./editor.model";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { SerializedVerseRef } from "@sillsdev/scripture";
import { EditorRefPlugin } from "@lexical/react/LexicalEditorRefPlugin";
import { act, render } from "@testing-library/react";
import { LexicalEditor } from "lexical";
import { createRef, ReactElement, RefObject } from "react";
import { LoggerBasic, StyleInfo } from "shared";
import {
  FORMATTED_VIEW_MODE,
  getViewOptions,
  PARAGRAPH_STRUCTURE_VIEW_MODE,
  STANDARD_VIEW_MODE,
  StructureProtectionMode,
  UNFORMATTED_VIEW_MODE,
  ViewOptions,
} from "shared-react";
import { describe, it } from "vitest";

// jsdom doesn't implement `getBoundingClientRect` on `Range`; moving the caret gives the editor
// root DOM focus, and Lexical's post-commit scroll-into-view reads a Range rect. Stub it (a zero
// rect nothing asserts on), same as the marker-edit tests.
if (typeof Range.prototype.getBoundingClientRect !== "function") {
  Range.prototype.getBoundingClientRect = function (): DOMRect {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      toJSON() {
        return this;
      },
    };
  };
}

// jsdom's `HTMLElement.focus()` unconditionally collapses the document Selection to the start of
// the focused element; a real browser PRESERVES an existing in-element selection across `focus()`.
// Lexical's `updateDOMSelection` calls `rootElement.focus({ preventScroll: true })` on its "the DOM
// selection already matches the target" branch (a cursor-visibility ensure-focus) whenever the root
// isn't `document.activeElement` — which, after a mutating update that leaves the caret unmoved
// (the marker-edit engine's deferred settle pass), is exactly the branch taken. In a browser that
// call is a no-op for the selection; in jsdom it wipes the caret the reconcile just confirmed, and
// a later deferred native `selectionchange` reads the collapsed-to-start selection back into the
// editor state — so a correctly restored caret silently becomes "start of the first block".
// Restoring the pre-focus range models the browser and keeps the caret where Lexical put it.
// (`ScriptureReferencePlugin.test.tsx` carries its own copy of this shim for the same reason.)
const originalFocus = HTMLElement.prototype.focus;
HTMLElement.prototype.focus = function focus(options?: FocusOptions) {
  const selection = document.getSelection();
  const savedRange = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : undefined;
  originalFocus.call(this, options);
  if (savedRange && selection) {
    selection.removeAllRanges();
    selection.addRange(savedRange);
  }
};

function requireViewOptions(mode: string): ViewOptions {
  const options = getViewOptions(mode);
  if (!options) throw new Error(`no view options for ${mode}`);
  return options;
}

const standard = requireViewOptions(STANDARD_VIEW_MODE);

/** The name of a view in {@link EDITOR_VIEWS}. */
export type EditorViewName =
  | "standard"
  | "standard+expandedNotes"
  | "formatted"
  | "paragraph-structure"
  | "unformatted"
  | "visible"
  | "visible+collapsed"
  | "hidden+expanded";

/** A view in the registry: the name suites key rows by, and the options it mounts with. */
export interface NamedView<Name extends string = EditorViewName> {
  name: Name;
  view: ViewOptions;
}

/**
 * Every view the suites run, by name: the named view modes, Standard with expanded notes (the
 * combination `getViewMode` cannot name, so view-mode-keyed machinery sees it as no mode at all),
 * and the marker/note-mode combinations no named mode spells but a host can pass.
 */
export const EDITOR_VIEWS: readonly NamedView[] = [
  { name: "standard", view: standard },
  { name: "standard+expandedNotes", view: { ...standard, noteMode: "expanded" } },
  { name: "unformatted", view: requireViewOptions(UNFORMATTED_VIEW_MODE) },
  {
    name: "visible",
    view: {
      markerMode: "visible",
      noteMode: "expanded",
      hasSpacing: false,
      isFormattedFont: false,
    },
  },
  {
    name: "visible+collapsed",
    view: { markerMode: "visible", noteMode: "collapsed", hasSpacing: true, isFormattedFont: true },
  },
  { name: "formatted", view: requireViewOptions(FORMATTED_VIEW_MODE) },
  { name: "paragraph-structure", view: requireViewOptions(PARAGRAPH_STRUCTURE_VIEW_MODE) },
  {
    name: "hidden+expanded",
    view: { markerMode: "hidden", noteMode: "expanded", hasSpacing: false, isFormattedFont: false },
  },
];

/** The {@link EDITOR_VIEWS} entry called `name`. */
export function editorView(name: EditorViewName | string): ViewOptions {
  const found = EDITOR_VIEWS.find((entry) => entry.name === name);
  if (!found) throw new Error(`unknown editor view: ${name}`);
  return found.view;
}

/** The views a user edits Scripture in, by name. */
export const EDITING_VIEW_NAMES = ["standard", "formatted", "paragraph-structure"] as const;

/** A view a user edits Scripture in. */
export type EditingViewName = (typeof EDITING_VIEW_NAMES)[number];

/**
 * The views a user edits Scripture in: Standard (Power mode), formatted (Power mode's other tab, the
 * library's default view), and paragraph-structure (Simple mode's default). Formatted and
 * paragraph-structure hide markers, so the marker-edit engine is off in both — a suite whose
 * subject is that engine does not belong here.
 */
export const EDITING_VIEWS: readonly NamedView<EditingViewName>[] = EDITING_VIEW_NAMES.map(
  (name) => ({ name, view: editorView(name) }),
);

/**
 * The view configurations every adaptor round-trip suite runs each fixture in: the named view
 * modes, plus Standard with expanded notes. The label is the view's registry name, and doubles as
 * the `skipModes` key prefix of a corpus fixture (`<label>: <reason>`).
 */
export const ROUND_TRIP_VIEW_CONFIGS: { label: string; viewOptions: ViewOptions | undefined }[] = (
  ["standard", "formatted", "unformatted", "paragraph-structure", "standard+expandedNotes"] as const
).map((name) => ({ label: name, viewOptions: editorView(name) }));

/**
 * {@link EDITING_VIEWS} in the {@link ROUND_TRIP_VIEW_CONFIGS} shape, for the suites that mount an
 * editor per view and so cannot afford the whole matrix. Same labels, so a key written for one
 * suite reads the same in the others.
 */
export const EDITING_VIEW_CONFIGS: { label: string; viewOptions: ViewOptions }[] =
  EDITING_VIEWS.map(({ name, view }) => ({ label: name, viewOptions: view }));

/**
 * The options the footnote popover mounts its editor with over a host editor in `host`: the host's
 * view with notes expanded, the note's marker and caller governed by the popover's dropdowns rather
 * than typed, and no marker prefix on the scaffolding paragraph that holds the note. Mirrors
 * paranext-core's `FootnoteEditor` options memo (`footnote-editor.component.tsx`).
 */
export function footnotePopoverView(host: ViewOptions): ViewOptions {
  return {
    ...host,
    noteMode: "expanded",
    isNoteShellEditable: false,
    showParaMarkerPrefixes: false,
  };
}

/**
 * Register `register` once per view, each inside a `describe` named for the view, so a row's name
 * says which view it ran in.
 */
export function forEachView<Name extends string>(
  views: readonly NamedView<Name>[],
  register: (entry: NamedView<Name>) => void,
): void {
  for (const entry of views) describe(`in ${entry.name} view`, () => register(entry));
}

/** Registers one test, the way `it` does. */
export type TestRegistrar = (name: string, fn: () => unknown, timeout?: number) => void;

/**
 * The registrar a row registers with: `it.fails` for a row listed in `knownFailures` (keyed by the
 * row's key, each value naming the mechanism, which is appended to the test's name), `it`
 * otherwise. A listed row that starts passing fails, so a fix has to delete its entry.
 *
 * `validKeys` is every key the suite generates; an entry naming none of them throws at
 * registration, so a renamed or removed row cannot leave a stale entry behind.
 */
export function knownFailureRunner(
  knownFailures: { readonly [key: string]: string },
  validKeys: readonly string[],
): (key: string) => TestRegistrar {
  const valid = new Set(validKeys);
  const stale = Object.keys(knownFailures).filter((key) => !valid.has(key));
  if (stale.length > 0) throw new Error(`known failures name no row: ${stale.join(", ")}`);
  return (key) => {
    if (!valid.has(key)) throw new Error(`row key ${key} is not among the suite's keys`);
    const reason = knownFailures[key];
    return (name, fn, timeout) => {
      if (reason) it.fails(`${name} (known failure: ${reason})`, fn, timeout);
      else it(name, fn, timeout);
    };
  };
}

/** The editor's host-facing change-notification callback type. */
type OnUsjChange = EditorProps<LoggerBasic>["onUsjChange"];

/** Optional wiring a mounted test editor may need; all default to absent. */
export interface MountOptions {
  /** The host-facing change notification a host schedules a save from. */
  onUsjChange?: OnUsjChange;
  onSelectionChange?: EditorProps<LoggerBasic>["onSelectionChange"];
  /** Only needed by the ref methods that guard on it (`applyMarkerMenuSelection`, `insertMarker`). */
  scrRef?: SerializedVerseRef;
  onScrRefChange?: (scrRef: SerializedVerseRef) => void;
  /** Receives everything the editor logs, in addition to {@link MountedEditor.logs}. */
  logger?: LoggerBasic;
  isReadonly?: boolean;
  styleInfo?: StyleInfo;
  /**
   * `EditorOptions.structureProtectionMode` — the host option the real `Editor` must hand down to
   * `MarkerEditPlugin` (and to `StructureKeyboardPlugin`) for a protected document's paste to
   * reach the sanitizer.
   */
  structureProtectionMode?: StructureProtectionMode;
}

/** A mounted test editor: its public ref, the raw Lexical editor, and the teardown a row needs
 * when what it is pinning is what happens after the view goes away. */
export interface MountedEditor {
  ref: RefObject<EditorRef | null>;
  lexical: LexicalEditor;
  unmount: () => void;
  /** Every `error` and `warn` the Editor's logger received, prefixed `E ` or `W `. */
  logs: string[];
  /** Re-render the same editor with a different project stylesheet, the way a host passes one in
   * once it has loaded. */
  rerenderWithStyleInfo: (styleInfo: StyleInfo | undefined) => Promise<void>;
  /** Re-render the same editor at a different scripture reference, the way a host navigates it. */
  rerenderWithScrRef: (scrRef: SerializedVerseRef) => Promise<void>;
}

/** Mounts `usj` in the real `Editor` with `view`, collecting what its logger reports. */
export async function mountInView(
  usj: Usj,
  view: ViewOptions,
  {
    onUsjChange,
    onSelectionChange,
    scrRef,
    onScrRefChange,
    logger,
    isReadonly,
    styleInfo,
    structureProtectionMode,
  }: MountOptions = {},
): Promise<MountedEditor> {
  const ref = createRef<EditorRef>();
  const lexicalRef = createRef<LexicalEditor>();
  const logs: string[] = [];
  const collectingLogger: LoggerBasic = {
    error: (...params: unknown[]) => {
      logs.push(`E ${params.map(String).join(" ")}`);
      logger?.error(...params);
    },
    warn: (...params: unknown[]) => {
      logs.push(`W ${params.map(String).join(" ")}`);
      logger?.warn(...params);
    },
    info: (...params: unknown[]) => logger?.info(...params),
    debug: (...params: unknown[]) => logger?.debug(...params),
  };
  const capture: ReactElement = <EditorRefPlugin editorRef={lexicalRef} />;
  let currentScrRef = scrRef;
  const editorWith = (currentStyleInfo: StyleInfo | undefined): ReactElement => (
    <Editor
      ref={ref}
      defaultUsj={usj}
      scrRef={currentScrRef}
      onScrRefChange={onScrRefChange}
      options={{ view, isReadonly, styleInfo: currentStyleInfo, structureProtectionMode }}
      onUsjChange={onUsjChange}
      onSelectionChange={onSelectionChange}
      logger={collectingLogger}
    >
      {capture}
    </Editor>
  );
  let unmount: (() => void) | undefined;
  let rerender: ((ui: ReactElement) => void) | undefined;
  await act(async () => {
    ({ unmount, rerender } = render(editorWith(styleInfo)));
  });
  if (!lexicalRef.current) throw new Error("lexical editor was not captured");
  if (!unmount || !rerender) throw new Error("render did not return a teardown");
  const rerenderEditor = rerender;
  let currentStyleInfo = styleInfo;
  return {
    ref,
    lexical: lexicalRef.current,
    unmount,
    logs,
    rerenderWithStyleInfo: async (nextStyleInfo) => {
      currentStyleInfo = nextStyleInfo;
      await act(async () => {
        rerenderEditor(editorWith(nextStyleInfo));
        await Promise.resolve();
      });
    },
    rerenderWithScrRef: async (nextScrRef) => {
      currentScrRef = nextScrRef;
      await act(async () => {
        rerenderEditor(editorWith(currentStyleInfo));
        await Promise.resolve();
        await Promise.resolve();
      });
    },
  };
}
