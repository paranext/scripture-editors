/**
 * The one registry of views the editor suites run in, and the one way to mount the real `Editor`
 * in any of them.
 *
 * Every per-view list a suite iterates is a projection of {@link EDITOR_VIEWS}, so a view's options
 * are spelled once and a key written for one suite (`"paragraph-structure"`) reads the same in all
 * of them. {@link EDITING_VIEWS} is the subset a user edits Scripture in; a suite whose subject is
 * the document a user edits runs over them. {@link READ_ONLY_VIEWS} holds the read-only
 * views, which no editing suite runs.
 *
 * Each entry names the app surface it guards (`appSurface`): a `library-only` view is not offered
 * by paranext-core, and its rows run so the view does not decay, not because a user reaches it.
 *
 * Library-only views are OFF by default. Set `SE_TEST_LIBRARY_VIEWS=1`
 * ({@link LIBRARY_VIEWS_ENV_VAR}; `pnpm test:library-views` in `packages/platform`) to run them,
 * before a change to a library-only view or to code it shares with the app's views. Every
 * projection below passes through {@link isViewEnabled}, and so does every per-view list a suite
 * spells out itself ({@link enabledViews}); a suite written for one view alone registers through
 * {@link describeInView}, so it shows as skipped while that view is off. The rows a library-only
 * view gets from a shared test body are registered from the same body as the app's views, so
 * turning the variable on runs every test added since in that view too — only an expectation that
 * differs in that view (an expected-failure entry, a per-view table) is that view's own upkeep.
 * An expected-failure entry naming a view that is off is not stale ({@link knownFailureRunner}).
 * A test that builds a library-only view's options itself, rather than naming a registry view,
 * still runs: it is either about code every view shares, with the view incidental, or a
 * millisecond unit test of an option the library still publishes. The exception is Standard view
 * with notes expanded (`mountExpandedNoteEditor`, `testEnvironmentExpanded`, or the options spelled
 * out): those rows register through {@link isViewEnabled} under `standard+expandedNotes`, because
 * the app edits a note's content in the footnotes pane's row editor ({@link mountInPaneRow}), and
 * shows a note with no closer expanded in Standard view's own text.
 *
 * What an app view can reach is tested in an app view, by default; a library-only view's rows
 * carry only what no app view reaches. A suite that never edits (it loads, reads, annotates or
 * round-trips through the adaptors) names `preview` ({@link READ_ONLY_VIEWS}) where it would name
 * `formatted`: the same options, mounted read-only as Power mode's Preview and the read-only text
 * panels mount them. {@link editorView} and {@link isViewEnabled} take a read-only view's name like
 * any other, and {@link mountInView} mounts a read-only view's options read-only.
 *
 * A plain helper module rather than an export from one of the suites, so a suite that needs it
 * does not re-register another suite's tests by importing it.
 */
import Editor from "./Editor";
import { EditorOptions, EditorProps, EditorRef } from "./editor.model";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { SerializedVerseRef } from "@sillsdev/scripture";
import { EditorRefPlugin } from "@lexical/react/LexicalEditorRefPlugin";
import { act, render } from "@testing-library/react";
import { LexicalEditor } from "lexical";
import { createRef, ReactElement, RefObject } from "react";
import { LoggerBasic, StyleInfo } from "shared";
import {
  BLOCK_VERSE_VIEW_MODE,
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

/**
 * The options the footnote popover mounts its editor with over a host editor in `host`: the host's
 * view with notes expanded, the note's marker and caller governed by the popover's dropdowns rather
 * than typed, and no marker prefix on the scaffolding paragraph that holds the note. Mirrors
 * paranext-core's `FootnoteEditor` options memo (`footnote-editor.component.tsx`).
 *
 * The app mounts that editor only as the footnotes pane's row editor, over Standard view's options:
 * the registry's `footnotes-pane-row`. Over any other host it is library-only — no view in the app
 * opens the footnote popover since PT-4777 — and those rows are kept so the popover over that host
 * does not decay if a host offers it again.
 */
export function footnotePopoverView(host: ViewOptions): ViewOptions {
  return {
    ...host,
    noteMode: "expanded",
    isNoteShellEditable: false,
    showParaMarkerPrefixes: false,
  };
}

/** The name of a view in {@link EDITOR_VIEWS}. */
export type EditorViewName =
  | "standard"
  | "standard+expandedNotes"
  | "footnotes-pane-row"
  | "formatted"
  | "paragraph-structure"
  | "unformatted"
  | "visible"
  | "visible+collapsed"
  | "hidden+expanded";

/**
 * Where paranext-core (Platform.Bible) offers a view, so a reader can tell the rows that guard a
 * surface a user reaches from the ones that keep a library view from decaying:
 *
 * - `power-standard`: Power mode's Standard view, editable.
 * - `simple`: Simple mode's text, editable.
 * - `footnotes-pane-row`: the footnotes pane's row editor, where Power mode's Standard view and
 *   Simple mode edit every note.
 * - `preview`: Power mode's read-only Preview.
 * - `read-only-panel`: the read-only text panels (resource and model texts, the text grid).
 * - `library-only`: not offered by the app; run so the view does not decay if a host offers it.
 */
export type AppSurface =
  | "power-standard"
  | "simple"
  | "footnotes-pane-row"
  | "preview"
  | "read-only-panel"
  | "library-only";

/** A view a suite runs: the name it keys rows by, and the options it mounts with. */
export interface NamedView<Name extends string = EditorViewName> {
  name: Name;
  view: ViewOptions;
}

/** A registry view: a {@link NamedView} labelled with the app surface it guards. */
export interface RegistryView<Name extends string = EditorViewName> extends NamedView<Name> {
  appSurface: AppSurface;
  /** What reaches the view in the app, or why a `library-only` view is still run. */
  note?: string;
}

/**
 * Every view the suites run, by name: the named view modes, Standard with expanded notes (the
 * combination `getViewMode` cannot name, so view-mode-keyed machinery sees it as no mode at all),
 * the footnotes pane's row editor, and the marker/note-mode combinations no named mode spells but a
 * host can pass. Each is labelled with the app surface it guards (see {@link AppSurface}).
 */
export const EDITOR_VIEWS: readonly RegistryView[] = [
  { name: "standard", view: standard, appSurface: "power-standard" },
  {
    name: "standard+expandedNotes",
    view: { ...standard, noteMode: "expanded" },
    appSurface: "library-only",
    note: "the app's Standard-view editor with notes expanded is footnotes-pane-row",
  },
  {
    name: "footnotes-pane-row",
    view: footnotePopoverView(standard),
    appSurface: "footnotes-pane-row",
    note:
      "paranext-core's FootnoteEditor over Standard view, the view resolveFootnotesPaneViewOptions " +
      "gives the pane in Simple mode and in Power mode's Standard view",
  },
  {
    name: "unformatted",
    view: requireViewOptions(UNFORMATTED_VIEW_MODE),
    appSurface: "library-only",
  },
  {
    name: "visible",
    view: {
      markerMode: "visible",
      noteMode: "expanded",
      hasSpacing: false,
      isFormattedFont: false,
    },
    appSurface: "library-only",
    note: "the Markers view's options, which the app no longer offers",
  },
  {
    name: "visible+collapsed",
    view: { markerMode: "visible", noteMode: "collapsed", hasSpacing: true, isFormattedFont: true },
    appSurface: "library-only",
  },
  {
    name: "formatted",
    view: requireViewOptions(FORMATTED_VIEW_MODE),
    appSurface: "library-only",
    note:
      "not offered editable by the app since PT-4777 (kept so the view doesn't decay); the app " +
      "mounts its options read-only as `preview` (READ_ONLY_VIEWS), which a suite that only " +
      "reads runs instead",
  },
  {
    name: "paragraph-structure",
    view: requireViewOptions(PARAGRAPH_STRUCTURE_VIEW_MODE),
    appSurface: "simple",
  },
  {
    name: "hidden+expanded",
    view: { markerMode: "hidden", noteMode: "expanded", hasSpacing: false, isFormattedFont: false },
    appSurface: "library-only",
    note: "the Markers view's options with markers hidden; the app no longer offers that view",
  },
];

/** The name of a view in {@link READ_ONLY_VIEWS}. */
export type ReadOnlyViewName = "preview" | "block-verse";

/** A read-only view: a registry-labelled view a host mounts with `isReadonly: true`. */
export interface ReadOnlyView extends RegistryView<ReadOnlyViewName> {
  isReadonly: true;
}

/**
 * The read-only views the app shows Scripture in, each mounted with `isReadonly: true`: Power
 * mode's Preview (formatted's options) and the text grid's aligned column (the block-verse layout,
 * read-only by construction). Kept apart from {@link EDITOR_VIEWS}, whose suites all edit; a suite
 * that only reads runs them by name ({@link editorView}), and {@link mountInView} mounts their
 * options read-only.
 */
export const READ_ONLY_VIEWS: readonly ReadOnlyView[] = [
  {
    name: "preview",
    // A copy, so the options identify the read-only view (see `readOnlyViewOptions`).
    view: { ...requireViewOptions(FORMATTED_VIEW_MODE) },
    isReadonly: true,
    appSurface: "preview",
    note: "also the default view of the read-only text panels",
  },
  {
    name: "block-verse",
    view: requireViewOptions(BLOCK_VERSE_VIEW_MODE),
    isReadonly: true,
    appSurface: "read-only-panel",
    note: "the text grid's aligned column",
  },
];

/** The options of every {@link READ_ONLY_VIEWS} entry, which {@link mountInView} mounts read-only
 * unless told otherwise. */
const readOnlyViewOptions = new WeakSet<ViewOptions>(READ_ONLY_VIEWS.map(({ view }) => view));

function registryEntry<Name extends EditorViewName>(name: Name): RegistryView<Name> {
  const found = EDITOR_VIEWS.find((entry) => entry.name === name);
  if (!found) throw new Error(`unknown editor view: ${name}`);
  return { ...found, name };
}

/** The environment variable that opts a run in to the library-only views, when set to `1`. */
export const LIBRARY_VIEWS_ENV_VAR = "SE_TEST_LIBRARY_VIEWS";

/** Whether this run includes the library-only views ({@link LIBRARY_VIEWS_ENV_VAR}). */
export const LIBRARY_VIEWS_ENABLED = process.env[LIBRARY_VIEWS_ENV_VAR] === "1";

/**
 * Whether this run registers rows in `view` (a registry name or entry, an {@link EDITOR_VIEWS} or a
 * {@link READ_ONLY_VIEWS} one): every view a user reaches in the app, and a `library-only` one only
 * when {@link LIBRARY_VIEWS_ENABLED}. Throws on a name the registry does not have, so a misspelt
 * view cannot silently drop out.
 */
export function isViewEnabled(view: string | { name: string }): boolean {
  const name = typeof view === "string" ? view : view.name;
  const entry = registryView(name);
  return LIBRARY_VIEWS_ENABLED || entry.appSurface !== "library-only";
}

/**
 * `views` (registry names, or entries with a registry `name`) less the ones this run leaves out
 * ({@link isViewEnabled}). For a per-view list a suite spells out itself.
 */
export function enabledViews<View extends string | { name: string }>(
  views: readonly View[],
): View[] {
  return views.filter((view) => isViewEnabled(view));
}

/** `rows` less the ones whose `view` (a registry name) this run leaves out ({@link isViewEnabled}):
 * for a table of cases that names each case's view. */
export function rowsInEnabledViews<Row extends { view: string }>(rows: readonly Row[]): Row[] {
  return rows.filter(({ view }) => isViewEnabled(view));
}

/** `describe`, skipped while {@link isViewEnabled} leaves `view` out: for a suite written for that
 * one view. */
export function describeInView(view: string): ReturnType<typeof describe.skipIf> {
  return describe.skipIf(!isViewEnabled(view));
}

/** `it`, skipped while {@link isViewEnabled} leaves `view` out: for a test written for that one
 * view. */
export function itInView(view: string): ReturnType<typeof it.skipIf> {
  return it.skipIf(!isViewEnabled(view));
}

/**
 * Whether this run includes the footnote popover over a host in `host` (a registry name). Over
 * Standard view the popover's options are the footnotes pane's row editor's, the note editor the
 * app mounts (`footnotes-pane-row`); over any other host it is library-only (see
 * {@link footnotePopoverView}).
 */
export function isPopoverHostEnabled(host: string): boolean {
  return LIBRARY_VIEWS_ENABLED || host === "standard";
}

/** The {@link EDITOR_VIEWS} or {@link READ_ONLY_VIEWS} entry called `name`. */
function registryView(name: string): RegistryView<string> {
  const found = [...EDITOR_VIEWS, ...READ_ONLY_VIEWS].find((entry) => entry.name === name);
  if (!found) throw new Error(`unknown editor view: ${name}`);
  return found;
}

/**
 * The options of the {@link EDITOR_VIEWS} or {@link READ_ONLY_VIEWS} entry called `name`. A
 * read-only view's are its own object, so {@link mountInView} knows to mount them read-only.
 */
export function editorView(name: EditorViewName | ReadOnlyViewName | string): ViewOptions {
  return registryView(name).view;
}

/** The views a user edits Scripture in, by name. */
export const EDITING_VIEW_NAMES = ["standard", "formatted", "paragraph-structure"] as const;

/** A view a user edits Scripture in. */
export type EditingViewName = (typeof EDITING_VIEW_NAMES)[number];

/**
 * The views a user edits Scripture in: Standard (Power mode), paragraph-structure (Simple mode),
 * and formatted, the library's default view — library-only: not offered editable by the app since
 * PT-4777, and kept so the view doesn't decay, so it is in the list only when this run includes
 * library-only views ({@link isViewEnabled}). Formatted and paragraph-structure hide markers, so
 * the marker-edit engine is off in both — a suite whose subject is that engine does not belong
 * here.
 */
export const EDITING_VIEWS: readonly RegistryView<EditingViewName>[] = enabledViews(
  EDITING_VIEW_NAMES.map(registryEntry),
);

/**
 * The view configurations every adaptor round-trip suite runs each fixture in: the named view
 * modes, plus Standard with expanded notes, less the ones this run leaves out. A round trip only
 * loads and exports, so formatted's options run as `preview`, the read-only view that mounts them.
 * The label is the view's registry name, and doubles as the `skipModes` key prefix of a corpus
 * fixture (`<label>: <reason>`).
 */
export const ROUND_TRIP_VIEW_CONFIGS: { label: string; viewOptions: ViewOptions | undefined }[] =
  enabledViews([
    "standard",
    "preview",
    "unformatted",
    "paragraph-structure",
    "standard+expandedNotes",
  ] as const).map((name) => ({ label: name, viewOptions: editorView(name) }));

/**
 * {@link EDITING_VIEWS} in the {@link ROUND_TRIP_VIEW_CONFIGS} shape, for the suites that mount an
 * editor per view and so cannot afford the whole matrix. Same labels, so a key written for one
 * suite reads the same in the others.
 */
export const EDITING_VIEW_CONFIGS: { label: string; viewOptions: ViewOptions }[] =
  EDITING_VIEWS.map(({ name, view }) => ({ label: name, viewOptions: view }));

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
 * registration, so a renamed or removed row cannot leave a stale entry behind. An entry that names
 * a view this run leaves out ({@link isViewEnabled}) — the registry name as a whole word of the
 * key — is not stale: its row is simply not registered this run.
 */
export function knownFailureRunner(
  knownFailures: { readonly [key: string]: string },
  validKeys: readonly string[],
): (key: string) => TestRegistrar {
  const valid = new Set(validKeys);
  const stale = Object.keys(knownFailures).filter(
    (key) => !valid.has(key) && !namesViewLeftOut(key),
  );
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

/**
 * Whether `key` names, as a whole word, a registry view this run leaves out. A word is a run of
 * word characters, `+` and `-`, the characters view names are made of.
 */
function namesViewLeftOut(key: string): boolean {
  const words = key.split(/[^\w+-]+/);
  return EDITOR_VIEWS.some((entry) => !isViewEnabled(entry) && words.includes(entry.name));
}

/**
 * The document the footnotes pane's row editor (`footnotes-pane-row`) holds while it edits `note`:
 * that note alone in a `\p`, the scaffold paranext-core's `FootnoteEditor` mounts (its paragraph is
 * unnamed there, which the editor reads as `\p`). The row editor never holds the chapter, so a row
 * that runs there runs in this shape, with the note at `$.content[0].content[0]`.
 */
export function paneRowScaffold(note: MarkerObject, version = "3.1"): Usj {
  return { type: "USJ", version, content: [{ type: "para", marker: "p", content: [note] }] };
}

/** Mounts `note` in the footnotes pane's row editor, over {@link paneRowScaffold}. */
export async function mountInPaneRow(
  note: MarkerObject,
  options: MountOptions = {},
): Promise<MountedEditor> {
  return mountInView(paneRowScaffold(note), editorView("footnotes-pane-row"), options);
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
  /** Defaults to whether `view` is a {@link READ_ONLY_VIEWS} entry's options. */
  isReadonly?: boolean;
  styleInfo?: StyleInfo;
  /**
   * `EditorOptions.structureProtectionMode` — the host option the real `Editor` must hand down to
   * `MarkerEditPlugin` (and to `StructureKeyboardPlugin`) for a protected document's paste to
   * reach the sanitizer.
   */
  structureProtectionMode?: StructureProtectionMode;
  /** `EditorOptions.nodes`: node options such as a note caller's click handler. */
  nodes?: EditorOptions["nodes"];
  /** `EditorOptions.copyLimit`: the most text one copy or cut may take. */
  copyLimit?: number;
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
  /** Re-render the same editor with different view options, the way a host passes a project
   * setting once it has loaded. */
  rerenderWithView: (view: ViewOptions) => Promise<void>;
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
    isReadonly = readOnlyViewOptions.has(view),
    styleInfo,
    structureProtectionMode,
    nodes,
    copyLimit,
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
  let currentView = view;
  const editorWith = (currentStyleInfo: StyleInfo | undefined): ReactElement => (
    <Editor
      ref={ref}
      defaultUsj={usj}
      scrRef={currentScrRef}
      onScrRefChange={onScrRefChange}
      options={{
        view: currentView,
        isReadonly,
        styleInfo: currentStyleInfo,
        structureProtectionMode,
        nodes,
        copyLimit,
      }}
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
    rerenderWithView: async (nextView) => {
      currentView = nextView;
      await act(async () => {
        rerenderEditor(editorWith(currentStyleInfo));
        await Promise.resolve();
      });
    },
  };
}
