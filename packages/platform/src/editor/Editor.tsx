import editorUsjAdaptor from "./adaptors/editor-usj.adaptor";
import usjEditorAdaptor from "./adaptors/usj-editor.adaptor";
import {
  $extendCharacterMarkerAtSelection,
  $removeCharacterMarkerAtSelection,
  $replaceCharacterMarkerAtSelection,
  getUsjMarkerAction,
  isCharacterMarkerSupported,
  isUsjMarkerSupported,
} from "./adaptors/usj-marker-action.utils";
import { EditorOptions, EditorProps, EditorRef } from "./editor.model";
import editorTheme from "./editor.theme";
import { ActiveTextPlugin } from "./ActiveTextPlugin";
import { CopyLimitPlugin } from "./copyLimit/CopyLimitPlugin";
import {
  getEnterMenuItems,
  getMarkerMenuItems,
  MarkerMenuContext,
  MarkerMenuItem,
} from "./markerMenu/markerItemSource";
import {
  $applyMarkerMenuSelection,
  $commitTypedCloser,
  $commitTypedMarker,
  $splitParagraphWithMarker,
} from "./markerMenu/markerMenuApply.utils";
import { $getMarkerMenuContext } from "./markerMenu/markerMenuContext.utils";
import { $applyParaMarker } from "./markerEdit/applyParaMarker.utils";
import { EscapeKeyPlugin } from "./EscapeKeyPlugin";
import {
  COMMIT_PENDING_MARKERS_COMMAND,
  MarkerEditPlugin,
  SET_MARKER_SETTLE_SUSPENDED_COMMAND,
} from "./markerEdit/MarkerEditPlugin";
import { MarkerValidationPlugin } from "./markerEdit/MarkerValidationPlugin";
import { MarkersViewCopyPlugin } from "./MarkersViewCopyPlugin";
import {
  $settledUsj,
  AnchoredTransientInput,
  LastKnownCaret,
} from "./markerEdit/virtualSettle.utils";
import { ParaMarkerPrefixGuardPlugin } from "./ParaMarkerPrefixGuardPlugin";
import {
  isLiveSettledIdentical,
  SettledPositionContext,
  SettledScopeCache,
} from "./positions/settledPositions.model";
import {
  $liveSelectionFromSettled,
  $settledSelectionFromLive,
} from "./positions/settledPositions.utils";
import { $prepareSettleScopes } from "./positions/settledScopes.utils";
import { ScriptureReferencePlugin } from "./ScriptureReferencePlugin";
import TreeViewPlugin from "./TreeViewPlugin";
import { ToolbarPlugin } from "./toolbar/ToolbarPlugin";
import {
  ContentJsonPath,
  MarkerContent,
  Usj,
  USJ_VERSION,
  usjJsonPathFromIndexes,
} from "@eten-tech-foundation/scripture-utilities";
import { InitialConfigType, LexicalComposer } from "@lexical/react/LexicalComposer";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType } from "@lexical/selection";
import { $findMatchingParent } from "@lexical/utils";
import { deepEqual } from "fast-equals";
import {
  $addUpdateTag,
  $createRangeSelection,
  $getEditor,
  $getNodeByKey,
  $getSelection,
  $isElementNode,
  $isNodeSelection,
  $isRangeSelection,
  $isTextNode,
  $setSelection,
  EditorState,
  LexicalEditor,
  HISTORY_MERGE_TAG,
  LexicalNode,
  PointType,
  RangeSelection,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  SKIP_DOM_SELECTION_TAG,
  UNDO_COMMAND,
  UpdateListenerPayload,
} from "lexical";
import Delta from "quill-delta";
import {
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  $createParaNode,
  $getSelectedParaMarkerPara,
  $isBookNode,
  $isNoteNode,
  $isParaNode,
  blackListedChangeTags,
  createMarkerLookup,
  defaultStyleInfo,
  DELTA_CHANGE_TAG,
  ensurePendedDisplayOwnersCurrent,
  EXTERNAL_USJ_MUTATION_TAG,
  externalTypedMarkType,
  getApplyingUpdateSource,
  getPendedDisplayOwners,
  LoggerBasic,
  markApplyingUpdate,
  MarkerLookup,
  NoteNode,
  ParaNode,
  TypedMarkNode,
  TypedMarkOnClick,
  TypedMarkOnMouseEnter,
  TypedMarkOnMouseLeave,
  TypedMarkOnRemove,
} from "shared";
import {
  $applyUpdate,
  $getNodeFromLocation,
  $getNoteByKeyOrIndex,
  $getNoteIndex,
  $getOTPositionOfNode,
  $getParticularNodeOps,
  $getRangeFromUsjSelection,
  $collapseParaMarkerSelection,
  $getReplaceEmbedOps,
  $getUpdateOps,
  $getUsjSelectionFromEditor,
  $insertNote,
  $selectAfterNote,
  $selectNote,
  $selectNoteCategoryOffset,
  $selectNoteTextOffset,
  AnnotationPlugin,
  AnnotationRange,
  AnnotationRef,
  ArrowNavigationPlugin,
  CharNodePlugin,
  clearStaleDomSelection,
  ClipboardPlugin,
  CommandMenuPlugin,
  ContextMenuPlugin,
  copySelection,
  cutSelection,
  DecoratorBoundarySelectionPlugin,
  DeltaOp,
  DeltaSource,
  DisableHistoryShortcutsPlugin,
  editorHoldsDomFocus,
  EmptyNoteCaretGuardPlugin,
  EditableMarkerMenuHarness,
  EditablePlugin,
  EmptyVerseCaretGuardPlugin,
  KeyDownCaretSyncPlugin,
  getDefaultViewOptions,
  getInsertedNodeKey,
  getViewClassList,
  HiddenContentDeleteGuardPlugin,
  isBlockVerseLayout,
  LoadStatePlugin,
  NoteCallerHighlightHandle,
  NoteCallerHighlightPlugin,
  NoteEnterGuardPlugin,
  NoteNodePlugin,
  NoteShellCaretGuardPlugin,
  OnSelectionChangePlugin,
  OpaqueBlockGuardPlugin,
  ParaMarkerPrefixCursorGuardPlugin,
  ParaMarkerSelectionPlugin,
  ParaNodePlugin,
  pasteSelection,
  pasteSelectionAsPlainText,
  readLatest,
  releaseTagsAfterNextCommit,
  SelectionRange,
  shouldSkipUpdateForOps,
  StateChangePlugin,
  StateChangeSnapshot,
  StructureKeyboardPlugin,
  TextDirectionPlugin,
  TextSpacingPlugin,
  TrailingNoteCaretGuardPlugin,
  usjBlockVerseNodes,
  UsjNodeOptions,
  UsjNodesMenuPlugin,
  usjReactNodes,
  ViewOptions,
} from "shared-react";

const defaultViewOptions = getDefaultViewOptions();
const defaultNodeOptions: UsjNodeOptions = {};
const defaultOptions: EditorOptions = {};
/**
 * The change listener's blacklist: every tag that keeps a commit out of the host's USJ-change
 * handling except `DELTA_CHANGE_TAG`. The listener recognizes an apply by `getApplyingUpdateSource`,
 * not by that tag, because the tag outlives an apply whose commit dirties nothing and would
 * otherwise hide the user's next edit.
 */
const commitIgnoredTags = blackListedChangeTags.filter((tag) => tag !== DELTA_CHANGE_TAG);

function Placeholder(): ReactElement {
  return <div className="editor-placeholder">Enter some Scripture...</div>;
}

/**
 * Whether a selection point sits strictly inside a text run — neither at its start nor its end.
 * Lexical's own DOM `selectionchange` listener drops the resulting `SELECTION_CHANGE_COMMAND`
 * dispatch when both the anchor and the focus resolve to such a point (`shouldSkipSelectionChange`
 * in Lexical's core selection handling), on the reasoning that a caret move confined to a text
 * node's interior needs no further reconciliation. An element-type point, or one at a text node's
 * boundary, is never skipped.
 */
function $isInteriorTextPoint(point: PointType): boolean {
  return (
    point.type === "text" &&
    point.offset !== 0 &&
    point.offset !== point.getNode().getTextContentSize()
  );
}

/** The collapsed text caret of the state being read, or `undefined` when it holds anything else. */
function $collapsedTextCaret(): LastKnownCaret | undefined {
  const selection = $getSelection();
  if (!$isRangeSelection(selection) || !selection.isCollapsed()) return undefined;
  const node = selection.focus.getNode();
  return $isTextNode(node) ? { key: node.getKey(), offset: selection.focus.offset } : undefined;
}

/**
 * A caret at `caret`, the last one the editor observed, when its text is still in the document and
 * a caret there reports exactly `selection`. Several carets can share one location — spaces typed
 * after a line-final verse number, or the extra spaces of a typed run, are no bytes of their own —
 * so a host handing back a caret it read (a focus-out snapshot) would otherwise land it on the
 * first of them, in front of spaces the user typed.
 */
function $lastKnownCaretAt(
  caret: LastKnownCaret | undefined,
  selection: SelectionRange,
  viewOptions: ViewOptions | undefined,
): RangeSelection | undefined {
  if (!caret || (selection.end && !deepEqual(selection.end, selection.start))) return undefined;
  const node = $getNodeByKey(caret.key);
  if (!$isTextNode(node) || caret.offset > node.getTextContentSize()) return undefined;

  const candidate = $createRangeSelection();
  candidate.anchor.set(caret.key, caret.offset, "text");
  candidate.focus.set(caret.key, caret.offset, "text");
  const previous = $getSelection();
  $setSelection(candidate);
  const reported = $getUsjSelectionFromEditor(viewOptions);
  $setSelection(previous);
  return reported && deepEqual(reported.start, selection.start) ? candidate : undefined;
}

/** The jsonPath of every note in `usj`, in document order — what `selectNote`'s index counts
 * against, so a note still pending as a typed literal counts too. */
function settledNotePaths(usj: Usj | undefined): ContentJsonPath[] {
  const out: ContentJsonPath[] = [];
  const walk = (content: MarkerContent[] | undefined, indexes: number[]) =>
    content?.forEach((item, index) => {
      if (typeof item !== "object") return;
      const here = [...indexes, index];
      if (item.type === "note") out.push(usjJsonPathFromIndexes(here));
      walk(item.content, here);
    });
  walk(usj?.content, []);
  return out;
}

/** Everything `readSettledUsj`'s settle depends on, compared by identity or value. */
interface SettledUsjMemoKey {
  editorState: EditorState;
  /** The pended owner keys, sorted and joined: the engine mutates one Set in place. */
  pendedKeys: string;
  transientInput: AnchoredTransientInput | undefined;
  caretKey: string | undefined;
  caretOffset: number | undefined;
  viewOptions: ViewOptions;
  getMarker: MarkerLookup;
}

function isSameSettledUsjMemoKey(a: SettledUsjMemoKey, b: SettledUsjMemoKey): boolean {
  return (
    a.editorState === b.editorState &&
    a.pendedKeys === b.pendedKeys &&
    a.transientInput === b.transientInput &&
    a.caretKey === b.caretKey &&
    a.caretOffset === b.caretOffset &&
    a.viewOptions === b.viewOptions &&
    a.getMarker === b.getMarker
  );
}

/**
 * Registers `listener` for every commit of the composer's editor. A layout effect, so it is in
 * place before any plugin's passive effect can commit. Pass a stable `listener`: a new one is
 * re-registered at the END of Lexical's listener set.
 */
function UpdateListenerPlugin({
  listener,
}: {
  listener: (payload: UpdateListenerPayload, editor: LexicalEditor) => void;
}): null {
  const [editor] = useLexicalComposerContext();
  useLayoutEffect(
    () => editor.registerUpdateListener((payload) => listener(payload, editor)),
    [editor, listener],
  );
  return null;
}

/**
 * Records `noteNode`'s key in `expandedNoteKeyRef` when it is expanded, so `NoteNodePlugin` knows
 * to collapse that note once the caret leaves it. No-op for a collapsed note or no note at all.
 * Call inside `editor.update()`.
 */
function $rememberExpandedNote(
  noteNode: NoteNode | null | undefined,
  expandedNoteKeyRef: React.MutableRefObject<string | undefined>,
): void {
  if (noteNode && !noteNode.getIsCollapsed()) expandedNoteKeyRef.current = noteNode.getKey();
}

/** The ops for whatever follows `noteNode` in its paragraph (see `EditorRef.getOpsAfterNote`). */
function $getOpsAfterNote(noteNode: NoteNode): DeltaOp[] {
  const following = noteNode.getNextSiblings();
  const first = following.at(0);
  const last = following.at(-1);
  if (!first || !last) return [];
  const end = $isElementNode(last) ? (last.getLastDescendant() ?? last) : last;
  return $getParticularNodeOps(first, end);
}

/**
 * Retags every paragraph `selection` touches to `blockMarker`, keeping every paragraph's own
 * text — the `EditorRef.formatPara` core, shared by its non-book path and (after splitting the
 * `\id` line) its book path so the two cannot drift. `$setBlocksType` moves each affected block's
 * children into a fresh `ParaNode` carrying the new marker state; it has no notion that a marker
 * glyph is content it should rewrite, so it moves the OLD marker's visible prefix over unchanged —
 * `$applyParaMarker` re-runs over every affected paragraph afterward to bring the glyph (editable
 * marker mode) back into agreement with the new marker.
 *
 * Mutating: call inside `editor.update()`, with `selection` the live RangeSelection to retag.
 */
function $retagBlocksInSelection(
  selection: RangeSelection,
  blockMarker: string,
  viewOptions: ViewOptions | undefined,
): void {
  $setBlocksType(selection, () => $createParaNode(blockMarker));
  const updated = $getSelection();
  if (!$isRangeSelection(updated)) return;
  const affectedParas = new Set<ParaNode>();
  updated.getNodes().forEach((node) => {
    const block = node.getTopLevelElement();
    if ($isParaNode(block)) affectedParas.add(block);
  });
  affectedParas.forEach((para) => $applyParaMarker(para, blockMarker, viewOptions));
}

/**
 * Scripture Editor for USJ. Created for use in [Platform](https://platform.bible).
 * @see https://github.com/usfm-bible/tcdocs/blob/usj/grammar/usj.js
 *
 * @param ref - Forward reference for the editor.
 * @param defaultUsj - Default USJ Scripture data.
 * @param scrRef - Scripture reference that controls the cursor in the Scripture.
 * @param onScrRefChange - Scripture reference set callback function when the reference
 *   changes in the editor as the cursor moves.
 * @param onSelectionChange - Callback function when the cursor selection changes.
 * @param onUsjChange - Callback function when USJ Scripture data has changed.
 * @param onParaMarkerMenuRequest - Callback function when the user asks, by keyboard, to change
 *   the selected paragraph marker.
 * @param options - Options to configure the editor.
 * @param logger - Logger instance.
 * @returns the editor element.
 */
const Editor = forwardRef(function Editor<TLogger extends LoggerBasic>(
  {
    defaultUsj,
    scrRef,
    onScrRefChange,
    onSelectionChange,
    onUsjChange,
    onStateChange,
    onParaMarkerMenuRequest,
    options,
    logger,
    children,
  }: PropsWithChildren<EditorProps<TLogger>>,
  ref: ForwardedRef<EditorRef>,
): ReactElement {
  const editorRef = useRef<LexicalEditor | null>(null);
  const annotationRef = useRef<AnnotationRef | null>(null);
  const noteCallerHighlightRef = useRef<NoteCallerHighlightHandle | null>(null);
  const toolbarEndRef = useRef<HTMLDivElement>(null);
  const editedUsjRef = useRef(defaultUsj);
  // The version of the document the editor was last handed (`defaultUsj`, then each `setUsj`).
  // The tree carries no version, so every USJ the editor builds from it is stamped with this one:
  // a document leaves at the version it arrived at.
  const documentVersionRef = useRef(defaultUsj?.version || USJ_VERSION);
  // Set when a commit may have moved the tree without the change listener refreshing
  // `editedUsjRef` (see `handleCommit`); the next settled read re-serializes instead of trusting it.
  const isEditedUsjStaleRef = useRef(false);
  const expandedNoteKeyRef = useRef<string>(undefined);
  // In-progress input an in-editor command surface has claimed (see `EditorRef.setTransientInput`),
  // anchored to the text node the caret sat in when it was declared (see AnchoredTransientInput).
  // A per-instance ref, not an editor-scoped side channel: writer and reader are both in this
  // package, so threading it explicitly into the settle keeps that computation a pure function of
  // its arguments and keeps two Editor instances (main and footnote popover) independent for free.
  const transientInputRef = useRef<AnchoredTransientInput | undefined>(undefined);
  // Last collapsed text-caret the editor OBSERVED (node key + offset), overwritten only when a
  // commit's live selection actually is one — a null-selection commit (the cross-frame blur this
  // exists for) leaves the last real caret in place. Tracked the same way MarkerEditPlugin's own
  // BLUR_COMMAND handler preserves its `lastAnchorKey` (MarkerEditPlugin.tsx), for the identical
  // reason: a renderer-overlay palette click lives outside this editor's iframe and can null
  // Lexical's live selection before a getUsj() read that races it. Consumed only as
  // `$verifiedTransientLiteral`'s fallback (virtualSettle.utils.ts) — see its own doc comment.
  const lastKnownCaretRef = useRef<LastKnownCaret | undefined>(undefined);
  // Settle scopes memoized on their content, so the position APIs reuse one basis across a run of
  // calls against an unchanged pending state instead of re-settling per call. Per-instance for the
  // same reason `transientInputRef` is.
  const settledScopeCacheRef = useRef<SettledScopeCache>({ entries: new Map() });
  // The last settle `readSettledUsj` computed, with everything it was computed from. The change
  // listener settles once per content commit and a host typically calls `getUsj()` from inside the
  // `onUsjChange` that commit fires, so the second read of one commit is a comparison, not a settle.
  const settledUsjMemoRef = useRef<{ key: SettledUsjMemoKey; usj: Usj } | undefined>(undefined);
  // Which deferred selection report is still the current one. Every dispatch takes the next
  // ticket, so when several arrive in one tick only the last one's deferred report is delivered.
  const selectionReportTicketRef = useRef(0);
  // Whether this instance is still mounted. `editorRef` cannot answer that: `EditorRefPlugin`
  // assigns it in an effect with NO cleanup, so it still names this editor after the tree is gone,
  // and a deferred report that trusted it would force-commit a detached editor and call back into
  // a torn-down view.
  const isMountedRef = useRef(true);
  // The document the host most recently KNOWS — announced via `onUsjChange`, or handed in by a
  // load. The yardstick a commit with no delta ops (a display-byte edit, or its undo) measures
  // against, so it announces only a document the host has not already been told about. Written on
  // every emission (typed, applied, historic) because a miss here is a lost save: if this held only
  // some emissions, an ordinary edit followed by an undo back to an earlier state would compare
  // equal to that earlier state and suppress the one notification that matters.
  const lastNotifiedUsjRef = useRef<Usj | undefined>(undefined);
  const [usj, setUsj] = useState(defaultUsj);
  const [loadTrigger, setLoadTrigger] = useState(0);
  const [contextMarker, setContextMarker] = useState<string>();

  const {
    isReadonly = false,
    structureProtectionMode = "off",
    onHiddenContentDelete,
    hasExternalUI = false,
    hasSpellCheck = false,
    textDirection = "ltr",
    markerMenuTrigger = "\\",
    view,
    nodes,
    debug = false,
    contextMenu,
    styleInfo,
    markerSettleDelayMs,
    copyLimit,
  } = options ?? defaultOptions;

  // Stabilize the destructured option objects so plugin props don't churn when the parent passes
  // a fresh `options` object every render. Pairs with the per-instance `initialConfig` below -
  // any state derived from `options` should follow the same pattern to avoid cross-instance
  // surprises with multiple Editor instances in one WebView.
  //
  // `viewOptions` needs a VALUE-based (not just reference-based) memo: it's a dependency of
  // `LoadStatePlugin`'s reload effect, which unconditionally calls `setEditorState` +
  // `CLEAR_HISTORY_COMMAND` on every fire. A plain `useMemo(() => view ?? defaultViewOptions,
  // [view])` only helps once `view` itself is referentially stable, which the caller is not
  // guaranteed to provide - a parent re-render that passes a fresh-but-equal `options.view` object
  // (e.g. one triggered by `applyUpdate`'s own `onUsjChange` round-trip) would otherwise re-fire
  // `LoadStatePlugin` and silently wipe the undo/redo stacks moments after an edit, with no
  // document or view change to justify it. Comparing by value keeps the reference stable across
  // such re-renders while still producing a new one - correctly triggering a reload - when a view
  // option genuinely changes.
  //
  // `nodeOptions` and `contextMenuOptions`, destructured just below, don't need this treatment:
  // `nodeOptions` is only a dependency of `LoadStatePlugin`'s separate adaptor-*initialize* effect,
  // not its reload effect, and `contextMenuOptions` isn't passed to `LoadStatePlugin` at all - so
  // of the three, only `viewOptions`'s identity can trigger the spurious reload this fix addresses.
  const requestedViewOptions = view ?? defaultViewOptions;
  // Paragraph-level features that cannot work once a verse owns the block:
  // - a visible or editable `markerMode`, and gutter markers, both put a marker prefix in the
  //   source paragraph only, so the fragments a verse block is split into keep their para marker
  //   but lose the prefix - and ParaMarkerPrefixGuardPlugin, which those same settings enable,
  //   then resets each fragment to `\p`, wiping the poetry indentation this layout preserves;
  // - the active-text box resolves the caret's top-level element, which is now the verse block
  //   rather than a paragraph, so it would outline the whole verse and never find its verses;
  // - without spacing the adaptor emits a line break before each verse marker, which belongs to
  //   the run before it and so lands at the end of the *previous* verse's block.
  // None is set by the block verse view itself; this only covers hand-composed options.
  // Normalizing before the deep-equality check below keeps the fresh object this spread produces
  // on every render from churning `viewOptions`'s identity.
  const resolvedViewOptions: ViewOptions =
    isBlockVerseLayout(requestedViewOptions) &&
    (requestedViewOptions.markerMode !== "hidden" ||
      !requestedViewOptions.hasSpacing ||
      requestedViewOptions.hasGutterParaMarkers ||
      requestedViewOptions.hasActiveTextFocusBox)
      ? {
          ...requestedViewOptions,
          markerMode: "hidden",
          hasSpacing: true,
          hasGutterParaMarkers: false,
          hasActiveTextFocusBox: false,
        }
      : requestedViewOptions;
  const viewOptionsRef = useRef(resolvedViewOptions);
  if (!deepEqual(viewOptionsRef.current, resolvedViewOptions)) {
    viewOptionsRef.current = resolvedViewOptions;
  }
  const viewOptions = viewOptionsRef.current;
  const nodeOptions = useMemo(() => nodes ?? defaultNodeOptions, [nodes]);
  const contextMenuOptions = useMemo(() => contextMenu, [contextMenu]);
  // The same `?? defaultStyleInfo` fallback the palette/validator consumers use (menuStyleInfo
  // below): with no host styleInfo, classifying from the smaller bundled markers table while the
  // palette offers the full default stylesheet made markers like `wa` tokenize as unknown
  // PARAGRAPH markers — picking `\wa` mid-sentence split the paragraph instead of opening a span.
  const markerLookup = useMemo(
    () => createMarkerLookup(styleInfo ?? defaultStyleInfo),
    [styleInfo],
  );

  // `logger` is also a dependency of `LoadStatePlugin`'s reload effect (see the `viewOptions`
  // comment above for what that effect does on every fire), so the same reference-instability
  // risk applies here if a caller ever passes a fresh-but-equivalent logger object. Deep-equality
  // is still the right comparison for an object whose properties are mostly methods: two
  // genuinely different loggers won't have the same function references and will correctly be
  // treated as different, while a caller that re-wraps the same underlying stable methods in a
  // new object each render will correctly be treated as unchanged.
  const loggerRef = useRef(logger);
  if (!deepEqual(loggerRef.current, logger)) {
    loggerRef.current = logger;
  }
  const stableLogger = loggerRef.current;

  // The block verse layout regroups each verse into its own element, splitting paragraphs that span
  // verses. That shape cannot be exported back to USJ, so the layout is read-only by construction
  // rather than by the host remembering to ask for it.
  const isBlockVerse = isBlockVerseLayout(viewOptions);
  const effectiveIsReadonly = isReadonly || isBlockVerse;

  // Reported from an effect, not the render body: a render can run many times (twice per render in
  // StrictMode) for one misconfiguration, and repeating the message would bury it. Derived from
  // whether normalization above actually replaced the requested options, so the condition can't
  // drift out of step with the list of features it neutralizes.
  const isIgnoringParaFeatures = resolvedViewOptions !== requestedViewOptions;
  // `stableLogger`, not `logger`: a host passing a fresh-but-equivalent logger object each render
  // must not re-run this effect and re-emit the message - the repetition it exists to avoid.
  useEffect(() => {
    if (isBlockVerse && !isReadonly)
      stableLogger?.error(
        "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set " +
          "`isReadonly: true` alongside `verseLayout: 'block'`.",
      );
    if (isIgnoringParaFeatures)
      stableLogger?.warn(
        "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and " +
          "`hasActiveTextFocusBox` are not supported with the block verse layout and are ignored.",
      );
    // The marker-edit engine that heals a damaged glyph, merges a paragraph whose prefix was
    // deleted and polices what an edit to marker bytes MEANS is gated to `markerMode: "editable"`.
    // A visible-marker surface left editable therefore takes ordinary edits — a typed character
    // inside a glyph, a Ctrl+X across one — with none of that repair behind them.
    if (viewOptions?.markerMode === "visible" && !isReadonly)
      stableLogger?.warn(
        "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is " +
          "editable and no marker repair runs there. Pass `isReadonly: true` alongside it.",
      );
  }, [isBlockVerse, isReadonly, isIgnoringParaFeatures, stableLogger, viewOptions?.markerMode]);

  // Editable-mode document-first marker-menu harness (drives shared-react's `UsjNodesMenuPlugin`
  // "editableHarness" branch; see its doc comment). `undefined` outside markerMode "editable" so
  // the plugin falls back to its legacy typeahead unaffected. Built from the same `EditorRef`
  // methods a host would call, plus the module-level marker-item source - not a separate
  // implementation. It only ever reaches the screen while `hasExternalUI` is false: the plugin
  // this feeds is rendered under that condition, so a host with its own marker-menu UI
  // (Platform.Bible, whose overlay service renders them) never mounts the in-editor menu.
  // Mirror of the handle handed to `ref` below, so the editor's own internals can reach its API
  // whichever ref form the consumer passed. `ref` itself cannot be read back: a callback ref has no
  // `.current`, and a consumer that passes no ref at all makes `ref` null, so reading `.current` off
  // it throws on the first marker keystroke.
  const editorApiRef = useRef<EditorRef | null>(null);

  const editableMarkerMenuHarness = useMemo<EditableMarkerMenuHarness | undefined>(() => {
    if (viewOptions.markerMode !== "editable") return undefined;

    const menuStyleInfo = styleInfo ?? defaultStyleInfo;
    return {
      getContext: () => editorApiRef.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (context) =>
        getMarkerMenuItems(
          menuStyleInfo,
          context as MarkerMenuContext,
          nodeOptions.extraValidMarkers,
        ),
      getEnterItems: (context) =>
        getEnterMenuItems(
          menuStyleInfo,
          context as MarkerMenuContext,
          nodeOptions.extraValidMarkers,
        ),
      apply: (item, opts) => {
        const editorApi = editorApiRef.current;
        if (!editorApi) return;
        if (opts.trigger === "enter") editorApi.splitParagraphWithMarker(item.marker);
        else editorApi.applyMarkerMenuSelection(item as MarkerMenuItem, opts);
      },
      commitTypedCloser: (typedMarker) => {
        editorApiRef.current?.commitTypedCloser(typedMarker);
      },
    };
  }, [viewOptions, styleInfo, nodeOptions.extraValidMarkers]);

  // `showCharMarkerTitles` rides on the Lexical theme so `CharNode.createDOM` can read it via
  // `EditorConfig.theme`. Theme is the channel because its map permits arbitrary keys and is the
  // lowest-friction way to thread a node-rendering flag through `EditorConfig` without
  // introducing a new option object.
  /**
   * Refuses an operation that would change the document in the block verse layout. Its paragraphs
   * are split across verse blocks, so an edit has no correct USJ to go back to; refusing is what
   * keeps the rendered document and `getUsj()` from silently diverging.
   */
  const assertNotBlockVerse = (operation: string) => {
    if (isBlockVerse)
      throw new Error(
        `Cannot ${operation} in the block verse layout; it is a read-only view whose structure ` +
          "does not match the source USJ.",
      );
  };

  /**
   * Refuses an operation that would change the document in a read-only editor, block verse or not.
   *
   * Lexical does not block `editor.update()` on `editable: false`, so a host calling one of these
   * on a read-only editor would otherwise mutate the document while `getUsj()` kept returning the
   * unedited USJ. Reads the same way as the character-marker methods below, which already refuse on
   * `effectiveIsReadonly`.
   */
  const assertEditable = (operation: string) => {
    assertNotBlockVerse(operation);
    if (effectiveIsReadonly) throw new Error(`Cannot ${operation} in readonly mode`);
  };

  // Registered per layout so an editor that isn't using block verse never holds its node. Named
  // rather than inlined into `initialConfig` because a settled-position scratch editor has to
  // register the SAME nodes to parse a settled rebuild at all.
  const editorNodes = useMemo(
    () => [TypedMarkNode, ...(isBlockVerse ? usjBlockVerseNodes : usjReactNodes)],
    [isBlockVerse],
  );
  /** See {@link editorHoldsDomFocus}. */
  const holdsDomFocus = () => !!editorRef.current && editorHoldsDomFocus(editorRef.current);

  const initialConfig = useMemo<InitialConfigType>(
    () => ({
      namespace: "platformEditor",
      theme: { ...editorTheme, showCharMarkerTitles: viewOptions.showCharMarkerTitles },
      editable: !effectiveIsReadonly,
      editorState: undefined,
      // Handling of errors during update
      onError(error) {
        throw error;
      },
      nodes: editorNodes,
    }),
    [effectiveIsReadonly, editorNodes, viewOptions.showCharMarkerTitles],
  );
  editorUsjAdaptor.initialize(stableLogger);

  /**
   * Throws if `marker` is given but isn't a character marker the character marker actions can act
   * on. An omitted marker is always allowed - it means "whatever marker is at the selection".
   */
  function assertCharacterMarkerSupported(marker: string | undefined) {
    if (marker !== undefined && !isCharacterMarkerSupported(marker, nodeOptions.extraValidMarkers))
      throw new Error(`Unsupported character marker '${marker}'`);
  }

  /**
   * The settled document — what a host actually writes to the file. Backs BOTH `EditorRef.getUsj()`
   * and every `onUsjChange` payload, so the document a host is TOLD about and the document it then
   * SAVES are one computation (Invariant IV: all settle paths run the same one).
   */
  const readSettledUsj = useCallback((): Usj | undefined => {
    const editor = editorRef.current;
    if (!editor) return editedUsjRef.current;
    /**
     * Re-serialize the cache when a commit carrying a blacklisted tag moved the tree without the
     * change listener refreshing it. Every path that can HAND BACK the cache calls this first.
     * The flag is cleared only on success: a tree the adaptor cannot express (the block-verse
     * layout) would otherwise leave the stale document in place with nothing left to mark it, so
     * no later read would ever try again.
     */
    const refreshEditedUsjIfStale = () => {
      if (!isEditedUsjStaleRef.current) return;
      const fresh = editorUsjAdaptor.deserializeEditorState(
        editor.getEditorState(),
        viewOptions,
        documentVersionRef.current,
      );
      if (!fresh) return;
      editedUsjRef.current = fresh;
      isEditedUsjStaleRef.current = false;
    };
    // Nothing pending and nothing declared: the cached serialization IS the settled document, and
    // skipping the recompute keeps the common read as cheap as it has always been.
    const pendedKeys = getPendedDisplayOwners(editor);
    const transientInput = transientInputRef.current;
    if ((!pendedKeys || pendedKeys.size === 0) && !transientInput) {
      refreshEditedUsjIfStale();
      return editedUsjRef.current;
    }
    // `getEditorState().read`, NOT `editor.read` - the latter force-flushes any in-flight update
    // mid-dispatch, and this is called from host save paths that can run during one.
    const editorState = editor.getEditorState();
    const lastKnownCaret = lastKnownCaretRef.current;
    // Caret by VALUE: the ref is handed a fresh object on every commit, including those that leave
    // the caret where it was.
    const key: SettledUsjMemoKey = {
      editorState,
      pendedKeys: pendedKeys ? [...pendedKeys].sort().join(",") : "",
      transientInput,
      caretKey: lastKnownCaret?.key,
      caretOffset: lastKnownCaret?.offset,
      viewOptions,
      getMarker: markerLookup,
    };
    const memo = settledUsjMemoRef.current;
    if (memo && isSameSettledUsjMemoKey(memo.key, key)) return memo.usj;
    const serializedState = editorState.toJSON();
    const settled = editorState.read(() =>
      $settledUsj(
        serializedState,
        pendedKeys ?? new Set<string>(),
        { viewOptions, getMarker: markerLookup, logger: stableLogger },
        transientInput,
        lastKnownCaret,
        documentVersionRef.current,
      ),
    );
    if (settled) {
      settledUsjMemoRef.current = { key, usj: settled };
      return settled;
    }
    // The settle rebuilt nothing — every pended key names a node that is no longer attached — so
    // the cache stands in for it, and it has to be a current one.
    refreshEditedUsjIfStale();
    return editedUsjRef.current;
  }, [viewOptions, markerLookup, stableLogger]);

  /**
   * Everything a settled↔live position translation needs about the editor's pending state
   * (positions/settledPositions.model.ts). Built the same way `readSettledUsj` builds its settle
   * arguments, so the document a host is told about and the coordinates it is told in are one
   * pending state. Does not need to be inside a read — `getPendedDisplayOwners` consults the
   * marker-edit engine's ledger, not the tree — so a caller that already holds one
   * (`readSettledSelection`) and a caller with none are equally free to call it.
   */
  const buildSettledPositionContext = useCallback((): SettledPositionContext | undefined => {
    const editor = editorRef.current;
    if (!editor) return undefined;
    const context: SettledPositionContext = {
      pendedKeys: getPendedDisplayOwners(editor) ?? new Set<string>(),
      transientInput: transientInputRef.current,
      lastKnownCaret: lastKnownCaretRef.current,
      tier2: { viewOptions, getMarker: markerLookup, logger: stableLogger },
      nodes: editorNodes,
      cache: settledScopeCacheRef.current,
    };
    // Nothing pending and nothing declared means no cached plan can still be valid, and each one
    // holds a scratch editor plus references to live nodes the tree may have since replaced. Every
    // caller skips the read on that path, so this is the only place the sweep can run.
    if (isLiveSettledIdentical(context)) context.cache.entries.clear();
    return context;
  }, [viewOptions, markerLookup, stableLogger, editorNodes]);

  /**
   * A host's position restated in LIVE coordinates. Every `jsonPath` a host holds came from
   * `getUsj()`, which is the SETTLED document, and the resolvers below all walk the live tree — so
   * while anything is pending those are two different documents and the position has to be carried
   * across before it is resolved (positions/settledPositions.utils.ts).
   *
   * `undefined` means the position could not be carried across, which callers must treat as a
   * refusal: resolving it against the live tree anyway is exactly the silent mis-anchor this
   * exists to prevent.
   *
   * `getEditorState().read`, NOT `editor.read` — the latter force-flushes an in-flight update
   * mid-dispatch, and a host can call these from anywhere.
   */
  const liveSelectionFromSettled = useCallback(
    <T extends SelectionRange | AnnotationRange>(settled: T): T | undefined => {
      const editor = editorRef.current;
      const context = buildSettledPositionContext();
      if (!editor || !context) return undefined;
      // The two documents are the same one, so skipping the read keeps the common call as cheap
      // as it has always been.
      if (isLiveSettledIdentical(context)) return settled;
      return editor.getEditorState().read(() => {
        const prepared = $prepareSettleScopes(context);
        return $liveSelectionFromSettled(context, prepared, settled);
      });
    },
    [buildSettledPositionContext],
  );

  // Clears the mount flag above. Declared beside its only consumers rather than with the other
  // effects, since the flag is meaningless apart from them.
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  /**
   * The editor's selection in the coordinates the host reads — the SETTLED ones — flushing any
   * in-flight update first, so what is reported is the committed document rather than a half-built
   * one.
   *
   * The pending state is read INSIDE the flush rather than before it, because the commit this
   * forces can settle the very pend that made a translation necessary in the first place.
   *
   * `undefined` means there is nothing to report: no range selection. A position whose own bytes
   * have no settled counterpart reports the nearest one before it instead — including one whose
   * basis the tree has moved on from under it, which rebuilds from what the tree still has rather
   * than refusing (logged).
   */
  const readSettledSelection = useCallback(
    (editor: LexicalEditor, caller: string): SelectionRange | undefined =>
      editor.read(() => {
        const context = buildSettledPositionContext();
        const settled = context && $settledSelectionFromLive($prepareSettleScopes(context));
        if (!settled && $isRangeSelection($getSelection()))
          stableLogger?.warn(
            `${caller} refused: the selection could not be expressed against the document the ` +
              "host is reading",
          );
        return settled;
      }),
    [buildSettledPositionContext, stableLogger],
  );

  /**
   * The host-facing selection report, deferred past the commit whenever a translation is needed.
   *
   * `OnSelectionChangePlugin` fires inside the ACTIVE, UNCOMMITTED update that moved the
   * selection — deliberately, so an ordinary caret move is not reported one interaction late.
   * Preparing a settle scope creates nodes (in a scratch editor), which must not happen there, and
   * the committed state a scope would be prepared against is still the PRE-move one. So a report
   * that needs translating waits for the commit and is coalesced to one per tick; a report that
   * needs none keeps the plugin's own timing exactly.
   *
   * Which of the two it is, is decided against the marker-edit engine's ledger as it stands DURING
   * the dispatch, while the synchronous report carries the plugin's in-flight coordinates. Those
   * two agree except in one shape: an update that creates the document's FIRST pend and dispatches
   * a selection change within itself is still identity at dispatch time, so that one report goes
   * out in live coordinates. It is a single report, immediately followed by a settle whose own
   * dispatch reports settled coordinates — deliberately preferred over deferring every report on
   * the chance that a pend appears later in the same update.
   */
  const handleSelectionChange = useCallback(
    (liveSelection: SelectionRange | undefined) => {
      if (!onSelectionChange) return;
      const editor = editorRef.current;
      const context = buildSettledPositionContext();
      // Take a ticket on BOTH paths. A synchronous report is still the newest report, so it has to
      // supersede a deferred one already queued from an earlier dispatch in the same tick —
      // otherwise that microtask still matches the current ticket and reports a second time.
      selectionReportTicketRef.current += 1;
      const ticket = selectionReportTicketRef.current;
      if (!editor || !context || isLiveSettledIdentical(context)) {
        onSelectionChange(liveSelection);
        return;
      }
      queueMicrotask(() => {
        if (!isMountedRef.current) return;
        if (ticket !== selectionReportTicketRef.current || editorRef.current !== editor) return;
        // `editor.read`, NOT `getEditorState().read`: the commit this is waiting for may still be
        // Lexical's own pending microtask, and only `read` flushes it first. The force-flush that
        // is a hazard inside a command listener is exactly what is wanted here, where the update
        // it would flush is no longer in flight.
        const settled = readSettledSelection(editor, "onSelectionChange");
        // That flush can dispatch a further selection change of its own, whose report supersedes
        // this one.
        if (ticket !== selectionReportTicketRef.current) return;
        onSelectionChange(settled);
      });
    },
    [onSelectionChange, buildSettledPositionContext, readSettledSelection],
  );

  /**
   * `EditorRef.applyUpdate`, with `extraTag` (when given) riding on the update as well - how
   * `takeOpsAfterNote` joins its removal to the undo step of the edit that left the text there.
   */
  function applyOps(ops: DeltaOp[], source: DeltaSource, extraTag?: string) {
    // Delta ops address content by its position in the USJ, which this layout's regrouping
    // changes, so applying them would edit the wrong nodes rather than fail. A remote op is not
    // a caller error, and throwing into a host's op loop would tear it down, so report and drop
    // it - a read-only view refreshes by being handed new USJ, not by replaying deltas.
    if (isBlockVerse && source === "remote") {
      loggerRef.current?.error(
        "Editor: ignoring a remote update in the block verse layout; reload the view with the " +
          "new USJ instead.",
      );
      return;
    }
    // Block verse only, not `effectiveIsReadonly`: a read-only pane in a collaborative session is
    // a supported flow, and it stays current by having remote deltas applied to it. Throwing here
    // would tear down the host's op loop for the same reason the remote branch above reports and
    // drops instead of throwing.
    assertNotBlockVerse("apply an update");
    const editor = editorRef.current;
    if (!editor) return;
    const holdsFocus = holdsDomFocus();
    const unregisterTagRelease = holdsFocus
      ? undefined
      : releaseTagsAfterNextCommit(editor, SKIP_DOM_SELECTION_TAG);
    let failed = false;
    editor.update(
      () => {
        // Either source's one announcement is the one in `onUpdate` below, with the caller's ops
        // and "apply" coordinates, so the change listener and the display-run syncs recognize the
        // apply's commit by a signal set for it (`markApplyingUpdate`), never by a tag. Lexical
        // clears an update's tags only when its commit dirties a node, so a tag on an apply whose
        // ops the tree already reflects (a retain-only op, a replayed attribute-only retain) stays
        // on the editor when the commit carries only a caret the DOM moved, and rides onto the
        // user's next edit. Set here, inside the update, rather than around the call: a call made
        // from inside another commit's update listener is queued until that commit finishes, and
        // the signal must cover the apply's own commit whenever it runs.
        //
        // A remote apply is still tagged `DELTA_CHANGE_TAG` for listeners outside this package. A
        // local apply is the user's own edit, so it is not.
        markApplyingUpdate(editor, source);
        if (source === "remote") $addUpdateTag(DELTA_CHANGE_TAG);
        if (!holdsFocus) $addUpdateTag(SKIP_DOM_SELECTION_TAG);
        if (extraTag) $addUpdateTag(extraTag);
        try {
          $applyUpdate(ops, viewOptions, nodeOptions, stableLogger);
        } catch (error) {
          // Lexical discards a throwing update but keeps its `onUpdate` for the next commit that
          // lands - the user's next edit - so end the signal here and make that callback a no-op,
          // or the edit would be reported as this apply.
          failed = true;
          markApplyingUpdate(editor, undefined);
          unregisterTagRelease?.();
          throw error;
        }
      },
      {
        discrete: true,
        // Reads the committed state and reports the change from `onUpdate` rather than right
        // after this call, because `editor.update()` does not always run synchronously: a caller
        // reached from inside another commit's own update listener (a host's `onUsjChange`
        // calling back into `takeOpsAfterNote`, say) finds the editor already mid-commit, so
        // Lexical queues this discrete update and applies it only once that outer commit's
        // listeners finish. `onUpdate` fires exactly when THIS update's own commit lands, after
        // its update listeners, whether that is synchronously (the ordinary case, before
        // `editor.update()` even returns) or after such a deferral, so the report is correct
        // either way - and the signal and the unfocused tag release end only once the commit they
        // guard has actually happened, never before.
        onUpdate: () => {
          if (failed) return;
          markApplyingUpdate(editor, undefined);
          unregisterTagRelease?.();
          if (!holdsFocus) clearStaleDomSelection(editor);
          const editorState = editor.getEditorState();
          const newUsj = editorUsjAdaptor.deserializeEditorState(
            editorState,
            viewOptions,
            documentVersionRef.current,
          );
          if (!newUsj) return;
          const isEdited = !deepEqual(editedUsjRef.current, newUsj);
          if (isEdited) editedUsjRef.current = newUsj;
          const settled = readSettledUsj();
          if (settled && (isEdited || !deepEqual(usj, newUsj))) {
            // "apply" coordinates: `$applyUpdate` placed the inserted node by interpreting the
            // retain with its own traversals (every embed opaque), so the reverse lookup must
            // count the same way to find the node that was actually inserted.
            const insertedNodeKey = getInsertedNodeKey(ops, editorState, "apply");
            lastNotifiedUsjRef.current = settled;
            onUsjChange?.(settled, ops, source, insertedNodeKey);
          }
        },
      },
    );
  }

  // Built as a plain object (rebuilt per render, same as the previous inline useImperativeHandle
  // factory) and assigned to editorApiRef UNCONDITIONALLY below — never inside the
  // useImperativeHandle factory, which React only invokes when the consumer actually attached a
  // ref, so a factory-side assignment leaves the mirror null (and the in-editor marker menu dead)
  // for exactly the no-ref consumer the mirror exists to serve.
  const editorApi: EditorRef = {
    focus() {
      const editor = editorRef.current;
      if (!editor) return;
      editor.focus();
      // Lexical's `focus()` focuses the root only for a range selection, so a selected paragraph
      // marker (a node selection) would leave keyboard focus wherever the host put it — its marker
      // dropdown, say.
      const hasNodeSelection = editor
        .getEditorState()
        .read(() => $isNodeSelection($getSelection()));
      if (hasNodeSelection) editor.getRootElement()?.focus({ preventScroll: true });
    },
    // Delegates to `holdsDomFocus` (above), the same check every internal caller here uses,
    // rather than comparing `activeElement` to the root directly: a focused decorator inside the
    // editor - a collapsed note's caller button, say - is the user being in THIS editor, and a
    // host gating a keyboard shortcut or a PDP-sync deferral on `isFocused()` needs that answer,
    // not a narrower one that reads such a caret as unfocused.
    isFocused() {
      return holdsDomFocus();
    },
    undo() {
      editorRef.current?.dispatchCommand(UNDO_COMMAND, undefined);
    },
    redo() {
      editorRef.current?.dispatchCommand(REDO_COMMAND, undefined);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      assertEditable("cut");
      if (editorRef.current) cutSelection(editorRef.current);
    },
    copy() {
      if (editorRef.current) copySelection(editorRef.current);
    },
    paste() {
      assertEditable("paste");
      if (editorRef.current) pasteSelection(editorRef.current);
    },
    pastePlainText() {
      assertEditable("paste as plain text");
      if (editorRef.current) pasteSelectionAsPlainText(editorRef.current);
    },
    getUsj() {
      return readSettledUsj();
    },
    commitPendingMarkerEdits() {
      const editor = editorRef.current;
      if (!editor) return;
      // A host settles this editor on the user's way OUT of it (into a note editor elsewhere, say),
      // so the settle follows the same focus rule as `applyUpdate`: it must not write the DOM
      // selection, and with it focus, back into this editor.
      const skipDomSelection = !holdsDomFocus();
      const unregisterTagRelease = skipDomSelection
        ? releaseTagsAfterNextCommit(editor, SKIP_DOM_SELECTION_TAG)
        : undefined;
      // Discrete so the settle commits synchronously: the change listener then refreshes
      // `editedUsjRef` before this method returns, letting callers read fresh USJ via
      // `getUsj()` immediately (the host save path depends on this ordering).
      editor.update(
        () => {
          if (skipDomSelection) $addUpdateTag(SKIP_DOM_SELECTION_TAG);
          editor.dispatchCommand(COMMIT_PENDING_MARKERS_COMMAND, undefined);
        },
        { discrete: true },
      );
      // With nothing pending, `COMMIT_PENDING_MARKERS_COMMAND` finds no work and the update above
      // commits nothing - disarm the listener rather than leave it to strip the tag off whatever
      // commit happens next.
      unregisterTagRelease?.();
      if (skipDomSelection) clearStaleDomSelection(editor);
    },
    setMarkerSettleSuspended(suspended) {
      // Dispatched bare. Lexical opens an update around every command listener regardless
      // (`triggerCommandListeners` → `updateEditorSync`), and the handler dirties no node, so that
      // update USUALLY finds nothing to commit. Not always: dispatched outside an event — after an
      // `await`, or from a timer — `$beginUpdate` re-reads the DOM selection, which can differ from
      // the state's and produce a selection-only commit. That commit runs `updateDOMSelection`, the
      // path that focuses the editor root. So dispatch this synchronously from the event that opens
      // the surface, which is what the `EditorRef` doc asks for anyway.
      //
      // NOT `{ discrete: true }`, unlike `commitPendingMarkerEdits` above: a discrete update
      // force-flushes whatever else is already queued, turning a flag flip into someone else's
      // reconciliation — and a reconciliation is what re-asserts the DOM selection and pulls focus
      // back to the editor root, the very thing the suspension exists to prevent.
      editorRef.current?.dispatchCommand(SET_MARKER_SETTLE_SUSPENDED_COMMAND, suspended);
    },
    setTransientInput(input) {
      if (!input) {
        transientInputRef.current = undefined;
        return;
      }
      // Anchor the declaration to the caret's text node NOW: `{kind, run}` alone carries no
      // identity, so a declaration a surface forgot to clear could later re-verify against
      // unrelated bytes that merely end with the same run — ordinary typed prose included —
      // and the excision would reach the saved file. Resolved from the live collapsed
      // selection, falling back to the last observed caret (the same cross-frame-blur race the
      // settle's own fallback covers); unresolvable stays unanchored, which keeps the
      // byte-check-only verification a declaration always had.
      const liveKey = editorRef.current?.getEditorState().read(() => {
        const selection = $getSelection();
        return $isRangeSelection(selection) && selection.isCollapsed()
          ? selection.focus.key
          : undefined;
      });
      transientInputRef.current = { input, nodeKey: liveKey ?? lastKnownCaretRef.current?.key };
    },
    setUsj(incomingUsj, options) {
      // While a marker edit is pending the editor holds two documents: the SETTLED one on screen,
      // and `editedUsjRef`, the node state from before the edit. Either one means there is nothing
      // to load: the settled one is already on screen, and a host re-sending the pre-edit one must
      // not throw the edit in progress away (with the caret and the undo history). A host that
      // means to correct the screen forces the load, because its correction can equal the pre-edit
      // document: backspace a chapter's number out of its glyph and `editedUsjRef` still says
      // `\c 2`, the very document a host putting that number back sends.
      const isAlreadyHeld =
        deepEqual(editedUsjRef.current, incomingUsj) || deepEqual(readSettledUsj(), incomingUsj);
      if (options?.force || !isAlreadyHeld) {
        editedUsjRef.current = incomingUsj;
        documentVersionRef.current = incomingUsj.version || USJ_VERSION;
        // The loaded tree is the outgoing document until the reload commits, so neither a stale
        // flag nor a memoized read of that tree may overwrite or outrank the incoming document.
        isEditedUsjStaleRef.current = false;
        settledUsjMemoRef.current = undefined;
        // A replaced document invalidates any in-progress declaration: its anchor node key
        // belongs to the outgoing tree, and the surface that declared it is now stale too.
        transientInputRef.current = undefined;
        // This can happen when using `applyUpdate` since `usj` won't change.
        const shouldForceReload = deepEqual(usj, incomingUsj);
        setUsj(incomingUsj);
        if (shouldForceReload) setLoadTrigger((prev) => prev + 1);
      }
    },
    applyUpdate(ops, source = "remote") {
      applyOps(ops, source);
    },
    replaceEmbedUpdate(embedNodeKey, insertEmbedOps) {
      const ops = editorRef.current?.read(() => $getReplaceEmbedOps(embedNodeKey, insertEmbedOps));
      if (ops) this.applyUpdate(ops);
      // A missing/stale key must be LOUD: this is the footnote popover's save path, and a key
      // invalidated by a full `setUsj` re-render (every Lexical key regenerates) otherwise turns
      // Save into a silent no-op that looks like it worked.
      else
        logger?.warn(
          `replaceEmbedUpdate: no embed found for key "${embedNodeKey}" — update dropped (stale key after a setUsj reload?)`,
        );
    },
    getSelection() {
      const editor = editorRef.current;
      if (!editor) return undefined;
      // The host resolves what this returns against `getUsj()`, which is the SETTLED document, so
      // a live position has to be carried across before it is reported
      // (positions/settledPositions.utils.ts).
      //
      // `editor.read` here, where the inbound entry points below use `getEditorState().read`: this
      // is a host QUESTION, asked from outside any dispatch, and the answer has to describe the
      // document the host would get from `getUsj()` — so flushing an update that is merely queued
      // is the point, not a hazard. The inbound methods are called from anywhere, including from
      // inside an in-flight update, where the same flush is the frozen-commit crash. Flush before
      // reading the pending state below, too: a commit can itself change it (the historic re-pend
      // on undo, owner pends from mutation listeners).
      editor.read(() => undefined);
      const context = buildSettledPositionContext();
      if (!context || isLiveSettledIdentical(context))
        return editor.read(() => $getUsjSelectionFromEditor(viewOptions));
      return readSettledSelection(editor, "getSelection");
    },
    getSelectedParaMarker() {
      // `getEditorState().read`, NOT `editor.read` — a host reads this from its own selection
      // handlers, which can run mid-dispatch.
      const editor = editorRef.current;
      if (!editor?.isEditable()) return undefined;
      return editor
        .getEditorState()
        .read(() => $getSelectedParaMarkerPara($getSelection())?.getMarker());
    },
    setSelection(selection) {
      const live = liveSelectionFromSettled(selection);
      if (!live) {
        stableLogger?.warn(
          "setSelection refused: the position could not be resolved against the document " +
            "currently being edited",
        );
        return;
      }
      editorRef.current?.update(() => {
        const editorSelection =
          $lastKnownCaretAt(lastKnownCaretRef.current, live, viewOptions) ??
          $getRangeFromUsjSelection(live, viewOptions);
        if (editorSelection !== undefined) {
          // No update tag here, deliberately: Lexical clears an update's tags only when its commit
          // dirties a node, so a tag on this selection-only update would ride along on the user's
          // next edit — and `SELECTION_CHANGE_TAG` is in `blackListedChangeTags`, so that edit
          // would never reach `onUsjChange`. A selection-only update emits no change anyway.
          $setSelection(editorSelection);
          // A placement whose anchor and focus both land inside a text run's interior is exactly
          // the shape Lexical's own selectionchange listener drops (see `$isInteriorTextPoint`),
          // so the host would otherwise never hear the caret moved. Dispatching here instead of
          // there is safe: `OnSelectionChangePlugin` registers `SELECTION_CHANGE_COMMAND` as a
          // bare `$` listener, and Lexical runs command listeners for the currently active editor
          // inline (`triggerCommandListeners` -> `updateEditorSync`), so this still executes inside
          // THIS update, against the pending selection just set above, exactly once. A boundary or
          // element-type endpoint is left alone in an editable editor: Lexical's own listener
          // already reports those, and dispatching again here would report the same placement
          // twice. A read-only editor gets no such report at all — Lexical never writes the DOM
          // selection of a non-editable editor, so no selectionchange follows — so it is always
          // dispatched here.
          if (
            !$getEditor().isEditable() ||
            ($isInteriorTextPoint(editorSelection.anchor) &&
              $isInteriorTextPoint(editorSelection.focus))
          ) {
            editorRef.current?.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
          }
        }
      });
    },
    setAnnotation(
      selection: AnnotationRange,
      type: string,
      id: string,
      fourth?:
        | TypedMarkOnClick
        | {
            onClick?: TypedMarkOnClick;
            onRemove?: TypedMarkOnRemove;
            onMouseEnter?: TypedMarkOnMouseEnter;
            onMouseLeave?: TypedMarkOnMouseLeave;
          },
      fifth?: TypedMarkOnRemove,
    ) {
      let onClick: TypedMarkOnClick | undefined;
      let onRemove: TypedMarkOnRemove | undefined;
      let onMouseEnter: TypedMarkOnMouseEnter | undefined;
      let onMouseLeave: TypedMarkOnMouseLeave | undefined;

      if (typeof fourth === "function" || fourth === undefined) {
        // Legacy positional form: (selection, type, id, onClick?, onRemove?)
        onClick = fourth;
        onRemove = fifth;
      } else {
        // New options-object form: (selection, type, id, callbacks?)
        onClick = fourth.onClick;
        onRemove = fourth.onRemove;
        onMouseEnter = fourth.onMouseEnter;
        onMouseLeave = fourth.onMouseLeave;
      }

      const live = liveSelectionFromSettled(selection);
      if (!live) {
        stableLogger?.warn(
          `setAnnotation refused for ${type} "${id}": the range could not be resolved against ` +
            "the document currently being edited",
        );
        return;
      }

      annotationRef.current?.setAnnotation(
        live,
        externalTypedMarkType(type),
        id,
        onClick,
        onRemove,
        onMouseEnter,
        onMouseLeave,
      );
    },
    removeAnnotation(type, id) {
      annotationRef.current?.removeAnnotation(externalTypedMarkType(type), id);
    },
    getAnnotationRanges(type, id) {
      return annotationRef.current?.getAnnotationRanges(externalTypedMarkType(type), id) ?? [];
    },
    formatPara(blockMarker) {
      assertEditable("format a paragraph");
      // `discrete` for the same reason every other content-mutating method here uses it: a
      // deferred commit leaves the committed state behind the live tree, and anything the caller
      // does next against `editor.getEditorState()` — a copy, most visibly — reads the document
      // as it was before this call.
      editorRef.current?.update(
        () => {
          const selection = $getSelection();
          // A selected paragraph marker names the paragraph outright, so it is retagged in place —
          // no `$setBlocksType`, which would swap in a fresh ParaNode and drop the paragraph's
          // attributes and identity. The glyph is rewritten in place too, so the selection stays
          // on it.
          const owner = $getSelectedParaMarkerPara(selection);
          if (owner) {
            $applyParaMarker(owner, blockMarker, viewOptions);
            return;
          }
          // A caller with no live selection has nothing to retag. Say so rather than returning
          // quietly: this is the toolbar's paragraph-marker path, and the popover that drives it
          // takes focus off the editor — whose blur processing can null the editor-state selection
          // — so an unheard refusal here looks exactly like a dropdown that does not work.
          if (!$isRangeSelection(selection)) {
            logger?.warn(
              `formatPara refused: no range selection or selected paragraph marker to retag with ` +
                `"${blockMarker}" (restore the caret before applying, as the marker palettes do)`,
            );
            return;
          }
          // A book is never retagged: `\id` names the book, so a paragraph pick with the caret in
          // the line can only SPLIT it, the tail after the caret becoming a new paragraph inserted
          // directly after the book (docs/standard-view-invariants.md). `$setBlocksType` has no such
          // rule — it would happily convert the BookNode itself into a `ParaNode`, dropping the book
          // object (and its code) from the file while the stale `\id GEN` glyph stayed on screen
          // inside the new paragraph. Route off the selection's START point, not its end: a
          // selection can run either direction, and a forward selection out of the `\id` line
          // leaves `focus` in the following paragraph while `anchor` is still in the book.
          const start = selection.isBackward() ? selection.focus : selection.anchor;
          const book = $findMatchingParent(start.getNode(), $isBookNode);
          if (book) {
            // `$splitBookWithMarker` deletes a non-collapsed selection before splitting — correct
            // for a marker-palette pick (which replaces the selection), wrong for a retag, which
            // must never delete text. Collapse to the START point before calling it, then reapply
            // the SAME retag the non-book path below runs, over whatever the original selection
            // still reached past the split.
            const endPoint = selection.isBackward() ? selection.anchor : selection.focus;
            // A selection that never leaves the `\id` line is entirely absorbed by the split below
            // (everything from the caret to the end of the line's content becomes ONE new,
            // already-tagged paragraph) — there is no later paragraph left to retag. It also isn't
            // safe to remember: splitting can `splitText()` the very node `endPoint` names, which
            // reassigns the moved half a NEW key and leaves the original key's remaining text too
            // short for the remembered offset. Only remember an end point that reaches OUTSIDE the
            // book, where the split cannot touch the node it names.
            const endsOutsideBook =
              !selection.isCollapsed() &&
              !book.is(endPoint.getNode()) &&
              !book.isParentOf(endPoint.getNode());
            const originalEnd = endsOutsideBook
              ? { key: endPoint.key, offset: endPoint.offset, type: endPoint.type }
              : undefined;
            const collapsedAtStart = $createRangeSelection();
            collapsedAtStart.anchor.set(start.key, start.offset, start.type);
            collapsedAtStart.focus.set(start.key, start.offset, start.type);
            $setSelection(collapsedAtStart);
            if (!$splitParagraphWithMarker(blockMarker, viewOptions)) {
              logger?.warn(
                `formatPara refused: could not split the \\id line at the caret to retag with "${blockMarker}"`,
              );
              return;
            }
            if (!originalEnd) return;
            // Defensive: nothing in the split above is expected to detach the node the remembered
            // end point named (it lives outside the book, which is all the split touches), but the
            // retag below is meaningless against a point whose node is gone.
            const endNode = $getNodeByKey(originalEnd.key);
            if (!endNode?.isAttached()) return;
            // The TOP-LEVEL block the selection ends in, not the nearest PARAGRAPH ancestor: the
            // end point can land in a non-paragraph root sibling — a `\c` chapter line — which has
            // no paragraph ancestor to find at all.
            const endBlock = endNode.getTopLevelElement();
            if (!endBlock) return;
            const newPara = book.getNextSibling();
            if (!$isParaNode(newPara)) return;
            // Retag every PARAGRAPH between the split's new paragraph and the block the original
            // selection reached, one at a time — never as a single selection spanning the whole
            // reach: a `\c` chapter marker sits between the book and its first paragraph as a
            // root-level sibling like any of them, and `$setBlocksType` has no notion of "skip
            // this sibling" — given a selection that merely passes over a chapter on its way to a
            // later paragraph, it converts the chapter into a paragraph right along with them. The
            // `$isParaNode(sibling)` guard below is what keeps the chapter itself from ever being
            // retagged even when it is the END block the walk stops at.
            let sibling: LexicalNode | null = newPara.getNextSibling();
            while (sibling) {
              const isEndBlock = sibling.is(endBlock);
              const next = sibling.getNextSibling();
              if ($isParaNode(sibling)) {
                const paraSelection = $createRangeSelection();
                paraSelection.anchor.set(sibling.getKey(), 0, "element");
                paraSelection.focus.set(sibling.getKey(), sibling.getChildrenSize(), "element");
                $setSelection(paraSelection);
                $retagBlocksInSelection(paraSelection, blockMarker, viewOptions);
              }
              if (isEndBlock) break;
              sibling = next;
            }
            return;
          }
          $retagBlocksInSelection(selection, blockMarker, viewOptions);
        },
        { discrete: true },
      );
    },
    getElementByKey(nodeKey: string): HTMLElement | undefined {
      return editorRef.current?.read(
        () => editorRef.current?.getElementByKey(nodeKey) ?? undefined,
      );
    },
    removeCharacterMarker(marker) {
      if (effectiveIsReadonly) throw new Error("Cannot remove character marker in readonly mode");
      assertCharacterMarkerSupported(marker);

      // `discrete` so the update runs now rather than being deferred behind an in-progress one,
      // which would leave `didRemove` reporting `false` for a removal that did happen. Same reason
      // `applyUpdate` above uses it.
      let didRemove = false;
      editorRef.current?.update(
        () => {
          const selection = $getSelection();
          if ($isRangeSelection(selection))
            didRemove = $removeCharacterMarkerAtSelection(selection, marker, viewOptions);
        },
        { discrete: true },
      );
      return didRemove;
    },
    replaceCharacterMarker(toMarker, fromMarker) {
      if (effectiveIsReadonly) throw new Error("Cannot replace character marker in readonly mode");
      assertCharacterMarkerSupported(toMarker);
      assertCharacterMarkerSupported(fromMarker);

      // No `viewOptions` argument, unlike removeCharacterMarker above: replacement changes no text
      // and strips no children, so it has nothing marker-mode-dependent to undo.
      //
      // `discrete` so the update runs now rather than being deferred behind an in-progress one,
      // which would leave `didReplace` reporting `false` for a replacement that did happen. Same
      // reason `removeCharacterMarker` above uses it.
      let didReplace = false;
      editorRef.current?.update(
        () => {
          const selection = $getSelection();
          if ($isRangeSelection(selection))
            didReplace = $replaceCharacterMarkerAtSelection(selection, toMarker, fromMarker);
        },
        { discrete: true },
      );
      return didReplace;
    },
    extendCharacterMarker(marker, conflictingMarkers) {
      if (effectiveIsReadonly) throw new Error("Cannot extend character marker in readonly mode");
      assertCharacterMarkerSupported(marker);
      conflictingMarkers?.forEach((conflictingMarker) =>
        assertCharacterMarkerSupported(conflictingMarker),
      );

      // `viewOptions` is forwarded for the same reason `removeCharacterMarker` above needs it:
      // removing a conflicting marker has to strip that marker's synthesized content.
      //
      // `discrete` so the update runs now rather than being deferred behind an in-progress one,
      // which would leave `didExtend` reporting `false` for an extension that did happen. Same
      // reason `removeCharacterMarker` above uses it.
      let didExtend = false;
      editorRef.current?.update(
        () => {
          const selection = $getSelection();
          if ($isRangeSelection(selection))
            didExtend = $extendCharacterMarkerAtSelection(
              selection,
              marker,
              conflictingMarkers,
              viewOptions,
            );
        },
        { discrete: true },
      );
      return didExtend;
    },
    insertMarker(marker) {
      if (effectiveIsReadonly) throw new Error("Cannot insert marker in readonly mode");
      if (!scrRef) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!editorRef.current) return undefined;

      if (!isUsjMarkerSupported(marker, nodeOptions.extraValidMarkers))
        throw new Error(`Unsupported marker '${marker}'`);

      // Every edit below is written for a caret; a selected paragraph marker counts as one at its
      // paragraph's content start, so collapse to there first rather than act on the glyph.
      editorRef.current.update($collapseParaMarkerSelection, { discrete: true });
      const markerAction = getUsjMarkerAction(
        marker,
        expandedNoteKeyRef,
        viewOptions,
        nodeOptions,
        stableLogger,
        undefined,
        styleInfo,
      );
      markerAction.action({ editor: editorRef.current, reference: scrRef });
      // Read the note branch's captured key right after `action(...)` returns - Lexical's
      // `editor.update()` callback runs synchronously, so this is already populated. Gives the
      // host the note's TRUE key directly instead of re-deriving it from "delta-doc" OT
      // coordinates (`getInsertedNodeKey`, used by `handleCommit`'s `onUsjChange` below): the key
      // is known exactly here, so it cannot drift with the coordinate systems.
      return markerAction.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (isReadonly) return undefined;
      // `getEditorState().read`, NOT `editor.read` - the latter force-flushes any in-flight
      // update mid-dispatch (the same hazard as reading during an `OnSelectionChangePlugin`
      // callback).
      const editor = editorRef.current;
      return editor?.getEditorState().read(() => $getMarkerMenuContext(editor));
    },
    applyMarkerMenuSelection(item, opts) {
      if (isReadonly) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!scrRef)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)",
        );
      if (!editorRef.current) return undefined;

      if (
        item.kind !== "closeTag" &&
        !isUsjMarkerSupported(item.marker, nodeOptions.extraValidMarkers)
      )
        throw new Error(`Unsupported marker '${item.marker}'`);

      // The update callback runs synchronously; captures the created note's TRUE key (if the
      // applied item inserted a note) so hosts can track the popover editing session.
      let insertedNoteKey: string | undefined;
      const editor = editorRef.current;
      editor.update(() => {
        $collapseParaMarkerSelection();
        insertedNoteKey = $applyMarkerMenuSelection(item, opts, scrRef, {
          expandedNoteKeyRef,
          viewOptions,
          nodeOptions,
          logger,
          styleInfo,
        });
      });
      return insertedNoteKey;
    },
    splitParagraphWithMarker(marker) {
      if (isReadonly) throw new Error("Cannot split paragraph in readonly mode");
      if (!editorRef.current) return;

      editorRef.current.update(() => {
        $collapseParaMarkerSelection();
        $splitParagraphWithMarker(marker, viewOptions);
      });
    },
    commitTypedMarker(typedMarker, options) {
      if (isReadonly) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!editorRef.current) return false;

      // `$commitTypedMarker` owns what lands (the passive literal bytes, with or without the
      // terminating separator); this handle only supplies the update and the refusal warning.
      let committed = false;
      editorRef.current.update(() => {
        $collapseParaMarkerSelection();
        committed = $commitTypedMarker(typedMarker, options);
        if (!committed)
          logger?.warn(
            "commitTypedMarker refused: requires a collapsed range selection " +
              "(wrap a selection via applyMarkerMenuSelection instead)",
          );
      });
      return committed;
    },
    commitTypedCloser(typedMarker) {
      if (isReadonly) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!editorRef.current) return false;

      // The palette's `*` commit. `$commitTypedCloser` owns what lands (the typed closer bytes,
      // replacing any selected content) and the caret; this handle only supplies the update and
      // the refusal warning, matching `commitTypedMarker`.
      let committed = false;
      editorRef.current.update(() => {
        $collapseParaMarkerSelection();
        committed = $commitTypedCloser(typedMarker);
        if (!committed)
          logger?.warn(
            "commitTypedCloser refused: requires a range selection to commit the closer at",
          );
      });
      return committed;
    },
    insertNote(marker, caller, selection) {
      assertEditable("insert a note");
      const live = selection && liveSelectionFromSettled(selection);
      if (selection && !live) {
        stableLogger?.warn(
          `insertNote refused for \\${marker}: the position could not be resolved against the ` +
            "document currently being edited",
        );
        return;
      }
      // `discrete` for the same reason `formatPara` above uses it.
      editorRef.current?.update(
        () => {
          $collapseParaMarkerSelection();
          const noteNode = $insertNote(
            marker,
            caller,
            live,
            scrRef,
            viewOptions,
            nodeOptions,
            stableLogger,
          );
          $rememberExpandedNote(noteNode, expandedNoteKeyRef);
        },
        { discrete: true },
      );
    },
    selectNote(noteKeyOrIndex) {
      const editor = editorRef.current;
      if (!editor) return;
      const context = buildSettledPositionContext();
      // A key already names a live node directly, and with nothing pending the settled and live
      // documents count notes the same way either side — both share the live lookup below.
      if (typeof noteKeyOrIndex === "string" || !context || isLiveSettledIdentical(context)) {
        editor.update(() => {
          const noteNode = $getNoteByKeyOrIndex(noteKeyOrIndex);
          if (!noteNode) return;
          $selectNote(noteNode, viewOptions);
          $rememberExpandedNote(noteNode, expandedNoteKeyRef);
        });
        return;
      }
      // Otherwise the index counts the SETTLED document's notes: find the index-th one there, and
      // carry its location to the live tree — where it lands inside an actual NoteNode when that
      // note is settled already, or on the literal's own `\` when it is still pending as typed text.
      const jsonPath = settledNotePaths(readSettledUsj())[noteKeyOrIndex];
      const live = jsonPath ? liveSelectionFromSettled({ start: { jsonPath } }) : undefined;
      if (!live) return;
      editor.update(() => {
        const [node, offset] = $getNodeFromLocation(live.start, viewOptions);
        if (!node || offset === undefined) return;
        const note = $isNoteNode(node) ? node : $findMatchingParent(node, $isNoteNode);
        if ($isNoteNode(note)) {
          $selectNote(note, viewOptions);
          $rememberExpandedNote(note, expandedNoteKeyRef);
        } else if ($isTextNode(node)) node.select(offset, offset);
      });
    },
    selectAfterNote(noteKeyOrIndex) {
      const editor = editorRef.current;
      if (!editor) return;
      // Placing a caret is a selection-only commit, so the focus rule matters more here than
      // anywhere: a host putting the caret past a note it is showing elsewhere (a footnotes pane
      // whose row editor holds focus) must not have that editor blurred underneath it. The skipped
      // write must still leave the parked caret as the one a later `focus()` lands on: a
      // selection-only commit does not retire its tag, and the stale DOM selection would be read
      // back over the parked one.
      const skipDomSelection = !holdsDomFocus();
      const unregisterTagRelease = skipDomSelection
        ? releaseTagsAfterNextCommit(editor, SKIP_DOM_SELECTION_TAG)
        : undefined;
      editor.update(
        () => {
          if (skipDomSelection) $addUpdateTag(SKIP_DOM_SELECTION_TAG);
          const noteNode = $getNoteByKeyOrIndex(noteKeyOrIndex);
          if (noteNode) $selectAfterNote(noteNode);
        },
        { discrete: true },
      );
      // A stale `noteKeyOrIndex` leaves nothing to select, and the update above then commits
      // nothing - disarm rather than leave the listener armed for whatever commit happens next.
      unregisterTagRelease?.();
      if (skipDomSelection) {
        clearStaleDomSelection(editor);
        // With no DOM selectionchange to fire, SELECTION_CHANGE_COMMAND never dispatches on its
        // own, so ScriptureReferencePlugin (which reports scrRef only from that command) and
        // OnSelectionChangePlugin (which drives `onSelectionChange`) never hear about this move.
        // Dispatch it explicitly, the same way a live caret move would, so the host learns both.
        // Wrapped in its own SKIP_DOM_SELECTION_TAG update, the same protection the placement
        // update above carries: a caret-guard plugin reacting to this command (a trailing note
        // host, say) can still correct the selection or even insert a node, and without the tag
        // that correction's own DOM-selection reconcile would write a selection into this
        // unfocused root and, as an intrinsic browser side effect, focus it - the exact steal this
        // whole branch exists to avoid.
        const unregisterDispatchTagRelease = releaseTagsAfterNextCommit(
          editor,
          SKIP_DOM_SELECTION_TAG,
        );
        editor.update(
          () => {
            $addUpdateTag(SKIP_DOM_SELECTION_TAG);
            editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
          },
          { discrete: true },
        );
        unregisterDispatchTagRelease();
      }
    },
    selectNoteTextOffset(noteKeyOrIndex, utf16Offset, options) {
      editorRef.current?.update(() => {
        const noteNode = $getNoteByKeyOrIndex(noteKeyOrIndex);
        if (!noteNode) return;
        const glyph = options?.glyph;
        // A note that shows no category run has no category to land in; its content's start is
        // the position that follows the category everywhere else.
        const placed =
          options?.field === "category"
            ? $selectNoteCategoryOffset(noteNode, utf16Offset, glyph) ||
              $selectNoteTextOffset(noteNode, 0)
            : $selectNoteTextOffset(noteNode, utf16Offset, glyph);
        // A note with no content text has nowhere to put an offset; land where an offset-less
        // request would, so the caret is always somewhere sensible inside the note.
        if (!placed) $selectNote(noteNode, viewOptions);
        $rememberExpandedNote(noteNode, expandedNoteKeyRef);
      });
    },
    getNoteOps(noteKeyOrIndex) {
      const editor = editorRef.current;
      return editor
        ? readLatest(editor, () => {
            const noteNode = $getNoteByKeyOrIndex(noteKeyOrIndex);
            if (!noteNode) return undefined;

            return $getParticularNodeOps(noteNode);
          })
        : undefined;
    },
    getOpsAfterNote(noteKeyOrIndex) {
      const editor = editorRef.current;
      return editor
        ? readLatest(editor, () => {
            const noteNode = $getNoteByKeyOrIndex(noteKeyOrIndex);
            return noteNode ? $getOpsAfterNote(noteNode) : undefined;
          })
        : undefined;
    },
    takeOpsAfterNote(noteKeyOrIndex) {
      const editor = editorRef.current;
      const found = editor
        ? readLatest(editor, () => {
            const noteNode = $getNoteByKeyOrIndex(noteKeyOrIndex);
            if (!noteNode) return undefined;
            const notePosition = $getOTPositionOfNode(noteNode, "apply");
            return { ops: $getOpsAfterNote(noteNode), notePosition };
          })
        : undefined;
      if (!found) return undefined;
      const { ops, notePosition } = found;
      if (ops.length === 0 || notePosition === undefined) return ops;
      const length = ops.reduce(
        (total, op) => total + (typeof op.insert === "string" ? op.insert.length : 1),
        0,
      );
      applyOps([{ retain: notePosition + 1 }, { delete: length }], "remote", HISTORY_MERGE_TAG);
      return ops;
    },
    getNoteIndex(noteKey) {
      const editor = editorRef.current;
      return editor ? readLatest(editor, () => $getNoteIndex(noteKey)) : undefined;
    },
    getNoteKey(noteIndex) {
      const editor = editorRef.current;
      return editor
        ? readLatest(editor, () => $getNoteByKeyOrIndex(noteIndex)?.getKey())
        : undefined;
    },
    highlightNote(noteKeyOrIndex) {
      noteCallerHighlightRef.current?.setHighlightedNote(noteKeyOrIndex);
    },
    get toolbarEndRef() {
      return toolbarEndRef;
    },
  };
  editorApiRef.current = editorApi;
  useImperativeHandle(ref, () => editorApi);

  // Populates `lastKnownCaretRef` (see its own doc comment above) on every commit, selection-only
  // ones included. Runs after `EditorRefPlugin`'s own mount effect (a child's effect commits before
  // its parent's in the same pass), so `editorRef.current` is already set the first time this fires.
  useEffect(() => {
    const editor = editorRef.current;
    if (!editor) return undefined;
    return editor.registerUpdateListener(({ editorState }) => {
      const caret = editorState.read($collapsedTextCaret);
      if (caret) lastKnownCaretRef.current = caret;
    });
  }, []);

  // What `handleCommit` reads that can change between renders. Through a ref, so the listener is
  // registered once per editor and never moves in Lexical's listener order.
  const commitInputsRef = useRef({ onUsjChange, viewOptions, isBlockVerse, readSettledUsj });
  commitInputsRef.current = { onUsjChange, viewOptions, isBlockVerse, readSettledUsj };

  // The editor's one change listener: it keeps `editedUsjRef` (the tree-leg cache) current and
  // announces each content commit to the host, exactly once, through `onUsjChange`.
  //
  // The document it announces is the SETTLED one, `getUsj()`'s, because that is what the host
  // saves. The delta ops stay in LIVE coordinates, and they alone cannot drive the announcement:
  // display bytes — marker glyphs, attribute runs, separators — are excluded from delta coordinates
  // by design (Invariant II), yet the settle re-tokenizes exactly those bytes. So a commit with no
  // ops is announced when its settled document differs from the last one announced
  // (`lastNotifiedUsjRef`). That covers two edit families that move no delta at all:
  //
  // - UNDO/REDO of a display-byte edit: a marker edit occupies two history entries — the typed
  //   glyph bytes and the Tier-2 settle that moves them into node state — and undoing walks them
  //   back in the opposite order, so the press that restores the displayed bytes can be
  //   delta-invisible.
  // - LIVE display-byte edits: typing into a glyph, editing or deleting an attribute run's bytes.
  //   The edit pends until the caret departs, and the file must not lag the screen for as long as
  //   the caret stays at the edit.
  //
  // ONE listener, so ordering holds by construction. Lexical calls update listeners in
  // registration order, and a listener that re-registers (a changed effect dependency, a reload
  // re-rendering its plugin) moves to the end of it. Two listeners that could each announce would
  // double-announce once a reload reordered them, and a listener that reads the pend set could run
  // before the marker-edit engine re-derives it for an undo. So this one brings the pend set current
  // itself (`ensurePendedDisplayOwnersCurrent`), takes the caret the settle falls back on from THIS
  // commit, and never re-registers.
  //
  // SYNCHRONOUS, in the commit's own listener pass, because the ops must pair with the document
  // they produced: a host that applies them, or calls `getUsj()` from the callback, must see this
  // commit's document and not one a later commit moved on. Settling here is safe: `readSettledUsj`
  // reads the committed state without flushing, and the scratch editor a settle may create saves
  // and restores Lexical's active state. A host that calls `getUsj()` from the callback gets the
  // memoized document, not a second settle.
  const handleCommit = useCallback((payload: UpdateListenerPayload, editor: LexicalEditor) => {
    const { editorState, dirtyElements, dirtyLeaves, tags } = payload;
    // A selection-only commit moves no bytes.
    if (dirtyElements.size === 0 && dirtyLeaves.size === 0) return;
    // A load (`setUsj`) and any apply (`applyUpdate`) set the cache themselves, and `applyUpdate`
    // announces its own change, with the caller's ops. A loaded document came FROM the host, so it
    // becomes the yardstick: a later commit that moves no bytes (a note toggling open) must not
    // announce it back as a change. The yardstick is the tree's own export, not the host's USJ,
    // because every later comparison is against an export and the round trip can be lossy (a run
    // of spaces collapses). The cache takes the same export, so `getUsj()` reports the tree's
    // document from the load on rather than switching to it, unannounced, at the next commit. The
    // block verse layout has no export, so its cache keeps the host's USJ.
    if (tags.has(EXTERNAL_USJ_MUTATION_TAG)) {
      const inputs = commitInputsRef.current;
      const loaded =
        !inputs.isBlockVerse &&
        editorUsjAdaptor.deserializeEditorState(
          editorState,
          inputs.viewOptions,
          documentVersionRef.current,
        );
      if (loaded) editedUsjRef.current = loaded;
      lastNotifiedUsjRef.current = editedUsjRef.current;
      return;
    }
    if (getApplyingUpdateSource(editor)) return;
    // Any other blacklisted commit is not the user's edit and is not announced, but it can still
    // move the tree: an annotation over a pending paragraph settles it inside the annotation's own
    // update, and once nothing is pending `readSettledUsj` hands out the cache as the settled
    // document — the typed literal, not the paragraph it settled into. Mark the cache stale so the
    // next read re-serializes.
    if (commitIgnoredTags.some((tag) => tags.has(tag))) {
      isEditedUsjStaleRef.current = true;
      return;
    }
    const inputs = commitInputsRef.current;
    // Nothing to report in the block verse layout: its paragraphs are split across verse blocks,
    // so there is no USJ this tree corresponds to. Unreachable through the public API - the editor
    // is not editable and every mutating entry point refuses (see `assertEditable`) - and even if
    // it were reached, `deserializeEditorState` reports and returns `undefined` for such a tree, so
    // no change could be emitted. This just keeps that error out of the log.
    if (inputs.isBlockVerse) return;

    ensurePendedDisplayOwnersCurrent(editor, editorState, tags);
    const caret = editorState.read($collapsedTextCaret);
    if (caret) lastKnownCaretRef.current = caret;

    // The same filter `DeltaOnChangePlugin` applies: a history-merge commit that is not a settle
    // carries no ops, and neither does the first load into an empty editor. Chopped, because a
    // text node marked dirty without changing yields a lone trailing retain, which edits nothing
    // and must not count as a change.
    const isSkippedForOps = shouldSkipUpdateForOps(payload, {
      ignoreSelectionChange: true,
      ignoreHistoryMergeTagChange: true,
      ignoreTags: commitIgnoredTags,
    });
    const ops = isSkippedForOps
      ? []
      : new Delta(editorState.read(() => $getUpdateOps(editor, payload))).chop().ops;
    // Refreshed whether or not any ops survived: the ops only see TEXT, and a commit can change
    // the document without changing any text. Retagging a one-text paragraph moves its only child
    // into a new paragraph node, so the one dirty leaf reads the same, the delta is a lone retain
    // (or nothing, at the document's start), and only a fresh serialization shows the new marker.
    if (!isSkippedForOps) {
      const treeUsj = editorUsjAdaptor.deserializeEditorState(
        editorState,
        inputs.viewOptions,
        documentVersionRef.current,
      );
      if (treeUsj) editedUsjRef.current = treeUsj;
    }

    if (!inputs.onUsjChange) return;
    const settled = inputs.readSettledUsj();
    if (!settled) return;
    if (ops.length === 0 && deepEqual(lastNotifiedUsjRef.current, settled)) return;
    lastNotifiedUsjRef.current = settled;
    // No ops means no inserted-node key either: a display-byte edit or its undo is not an
    // incremental content edit, so there is no delta to hand a collaborator and no newly inserted
    // node to open an editor on. Consumers treat both as absent (the host's note-popover branches
    // are keyed on `insertedNodeKey && ops`). With ops, "delta-doc" coordinates: these ops are
    // doc-delta diff positions, so the reverse lookup must count the same way.
    if (ops.length === 0) {
      inputs.onUsjChange(settled, undefined, "local", undefined);
      return;
    }
    // An edit inside an existing note diffs as that note replaced by its new self, so the ops
    // alone read as an insertion of it. Only a node the previous state did not have is one:
    // reporting an edited note as inserted is how a host comes to open a new-note editor on the
    // note the user is typing in.
    const opsNodeKey = getInsertedNodeKey(ops, editorState);
    const insertedNodeKey =
      opsNodeKey && !payload.prevEditorState.read(() => $getNodeByKey(opsNodeKey))
        ? opsNodeKey
        : undefined;
    inputs.onUsjChange(settled, ops, "local", insertedNodeKey);
  }, []);

  const handleStateChange = useCallback(
    (snapshot: StateChangeSnapshot) => {
      setContextMarker(snapshot.contextMarker);
      onStateChange?.(snapshot);
    },
    [onStateChange],
  );

  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    <LexicalComposer key={viewOptions.verseLayout ?? "inline"} initialConfig={initialConfig}>
      <EditablePlugin isEditable={!effectiveIsReadonly} />
      {/* First among the critical-priority key handlers, so each of them sees the caret the user
          can see. */}
      <KeyDownCaretSyncPlugin />
      <div className="editor-container">
        {hasExternalUI ? (
          <StateChangePlugin onStateChange={handleStateChange} />
        ) : (
          <div
            className={
              "editor-toolbar-container" + (effectiveIsReadonly ? "-readonly" : "-editable")
            }
          >
            <ToolbarPlugin
              ref={toolbarEndRef}
              editorRef={editorApiRef}
              isReadonly={effectiveIsReadonly}
              onStateChange={handleStateChange}
            />
          </div>
        )}
        <div className="editor-inner">
          <EditorRefPlugin editorRef={editorRef} />
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className={`editor-input usfm ${getViewClassList(viewOptions).join(" ")}${viewOptions.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${viewOptions.hasActiveTextFocusBox ? " psc-active-focus" : ""}`}
                spellCheck={hasSpellCheck}
              />
            }
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          {hasExternalUI && <DisableHistoryShortcutsPlugin />}
          <HistoryPlugin />
          {scrRef && onScrRefChange && (
            <ScriptureReferencePlugin scrRef={scrRef} onScrRefChange={onScrRefChange} />
          )}
          {scrRef && !hasExternalUI && (
            <UsjNodesMenuPlugin
              trigger={markerMenuTrigger}
              scrRef={scrRef}
              contextMarker={contextMarker}
              getMarkerAction={(marker) =>
                getUsjMarkerAction(
                  marker,
                  expandedNoteKeyRef,
                  viewOptions,
                  nodeOptions,
                  stableLogger,
                  undefined,
                  styleInfo,
                )
              }
              editableHarness={editableMarkerMenuHarness}
            />
          )}
          <LoadStatePlugin
            key={loadTrigger}
            scripture={usj}
            scriptureRef={editedUsjRef}
            nodeOptions={nodeOptions}
            editorAdaptor={usjEditorAdaptor}
            viewOptions={viewOptions}
            logger={stableLogger}
          />
          <OnSelectionChangePlugin onChange={handleSelectionChange} viewOptions={viewOptions} />
          <UpdateListenerPlugin listener={handleCommit} />
          <ActiveTextPlugin viewOptions={viewOptions} />
          <AnnotationPlugin ref={annotationRef} logger={stableLogger} viewOptions={viewOptions} />
          <ArrowNavigationPlugin viewOptions={viewOptions} />
          <CharNodePlugin />
          <ClipboardPlugin />
          {/* Editable marker modes require literal backslash input (the marker-edit engine and
              the `\` marker menu consume it), so CommandMenuPlugin - which preventDefaults typed
              or pasted `\` and `/` - only guards the non-editable views. */}
          {viewOptions?.markerMode !== "editable" && <CommandMenuPlugin logger={stableLogger} />}
          <ContextMenuPlugin options={contextMenuOptions} />
          {/* Must mount before every plugin with a CRITICAL cut handler (MarkerEditPlugin,
              OpaqueBlockGuardPlugin, StructureKeyboardPlugin). Its CRITICAL fit shortens the
              selection of a limited copy or cut, and at equal priority handlers run in the order
              they were registered: the guards and the whole-paragraph cut arm have to judge the
              selection the cut will actually take. */}
          <CopyLimitPlugin limit={copyLimit} viewOptions={viewOptions} />
          {/* Not gated on viewOptions: a decorator is atomic in every view, so the selection
              normalization that keeps a point out of one is too. */}
          <DecoratorBoundarySelectionPlugin />
          {/* Not gated on viewOptions: it acts only on an EXPANDED note with no content. */}
          <EmptyNoteCaretGuardPlugin />
          <EmptyVerseCaretGuardPlugin />
          <EscapeKeyPlugin />
          {/* Enter has no meaning inside a note outside Standard view (its `\fp` break is
              MarkerEditPlugin's); left alone it splits the note's paragraph and strands the caret. */}
          <NoteEnterGuardPlugin isEnabled={viewOptions?.markerMode !== "editable"} />
          <HiddenContentDeleteGuardPlugin
            isEnabled={viewOptions?.markerMode !== "editable"}
            structureProtectionMode={structureProtectionMode}
            copyLimit={copyLimit}
            onHiddenContentDelete={onHiddenContentDelete}
            logger={stableLogger}
          />
          {/* Both take `stableLogger`, never the raw `logger` prop: their registration effects
              depend on it, so a host handing over a fresh-but-equivalent logger object each
              render would re-register their command listeners at the END of Lexical's
              listener set — flipping who wins same-priority ties (the opaque-block paste
              refusal among them) nondeterministically. */}
          <MarkerEditPlugin
            viewOptions={viewOptions}
            getMarker={markerLookup}
            logger={stableLogger}
            markerSettleDelayMs={markerSettleDelayMs}
            structureProtectionMode={structureProtectionMode}
            copyLimit={copyLimit}
          />
          {/* Standard view writes its own USFM copy (MarkerEditPlugin); the read-only Markers view
              needs one too, since its display text is not USFM. The hidden-marker views copy prose. */}
          {viewOptions?.markerMode === "visible" && (
            <MarkersViewCopyPlugin viewOptions={viewOptions} copyLimit={copyLimit} />
          )}
          <MarkerValidationPlugin
            styleInfo={styleInfo}
            viewOptions={viewOptions}
            logger={stableLogger}
          />
          <NoteCallerHighlightPlugin ref={noteCallerHighlightRef} />
          <NoteNodePlugin
            expandedNoteKeyRef={expandedNoteKeyRef}
            nodeOptions={nodeOptions}
            viewOptions={viewOptions}
            logger={stableLogger}
          />
          {/* Not gated on viewOptions: it reads the note shell's own node mode, so it is
              structurally a no-op wherever the shell is built editable. */}
          <NoteShellCaretGuardPlugin />
          {/* Not gated on viewOptions either: a construct the editor cannot model is read-only in
              every marker mode, so the guard that keeps edits out of one is too. */}
          <OpaqueBlockGuardPlugin />
          <ParaMarkerPrefixCursorGuardPlugin />
          <ParaMarkerPrefixGuardPlugin viewOptions={viewOptions} logger={stableLogger} />
          <ParaMarkerSelectionPlugin
            onParaMarkerMenuRequest={onParaMarkerMenuRequest}
            structureProtectionMode={structureProtectionMode}
          />
          <ParaNodePlugin />
          <StructureKeyboardPlugin structureProtectionMode={structureProtectionMode} />
          <TextDirectionPlugin textDirection={textDirection} />
          <TextSpacingPlugin />
          <TrailingNoteCaretGuardPlugin />
          {children}
        </div>
        {debug && <TreeViewPlugin />}
      </div>
    </LexicalComposer>
  );
});

export default Editor;
