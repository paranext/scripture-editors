/**
 * Adapted from https://github.com/facebook/lexical/blob/92c47217244f9d3c22a59728633fb41a10420724/packages/lexical-mark/src/MarkNode.ts
 * This adaption allows for different types of marks while still only requiring one mark to enclose
 * a selection.
 */

import { assertSafeKey } from "@eten-tech-foundation/scripture-utilities";
import { addClassNamesToElement, removeClassNamesFromElement } from "@lexical/utils";
import type {
  BaseSelection,
  EditorConfig,
  EditorThemeClasses,
  LexicalEditor,
  LexicalNode,
  LexicalUpdateJSON,
  NodeKey,
  RangeSelection,
  SerializedElementNode,
  SerializedLexicalNode,
  Spread,
  TextNode,
} from "lexical";
import {
  $applyNodeReplacement,
  $getEditor,
  $getNodeByKey,
  $isRangeSelection,
  $isTextNode,
  ElementNode,
} from "lexical";

export interface TypedIDs {
  [type: string]: string[];
}

/** Callbacks of one kind, by annotation type and then by id. */
export interface TypedCallbacks<T> {
  [type: string]: { [id: string]: T };
}

/**
 * DOM mouse event type.
 * @public
 */
export type DomMouseEvent = globalThis.MouseEvent;

/**
 * A callback function type for handling click events.
 *
 * @param event - The native DOM mouse event containing event details.
 * @param type - The type of the associated annotation.
 * @param id - The ID of the associated annotation.
 * @param textContent - The text content that was annotated when the click occurred.
 *
 * @public
 */
export type TypedMarkOnClick = (
  event: DomMouseEvent,
  type: string,
  id: string,
  textContent: string,
) => void;

export type TypedOnClicks = TypedCallbacks<TypedMarkOnClick>;

/**
 * Typed mark removal cause types.
 * @public
 */
export type TypedMarkRemovalCause = "removed" | "destroyed";

/**
 * A callback function type for handling removal events.
 *
 * @param type - The type of the associated annotation.
 * @param id - The ID of the associated annotation.
 * @param cause - The cause of the removal.
 * @param textContent - The text content that was annotated when the removal occurred.
 *
 * @public
 */
export type TypedMarkOnRemove = (
  type: string,
  id: string,
  cause: TypedMarkRemovalCause,
  textContent: string,
) => void;

export type TypedOnRemoves = TypedCallbacks<TypedMarkOnRemove>;

/**
 * A callback function type for handling mouse-enter events on annotated marks.
 *
 * Fires once when the cursor enters the rendered `<mark>` element. Uses native `mouseenter`
 * semantics (no bubbling, no re-fire as cursor crosses inner text-node boundaries).
 *
 * @public
 */
export type TypedMarkOnMouseEnter = (
  event: DomMouseEvent,
  type: string,
  id: string,
  textContent: string,
) => void;

export type TypedOnMouseEnters = TypedCallbacks<TypedMarkOnMouseEnter>;

/**
 * A callback function type for handling mouse-leave events on annotated marks.
 *
 * Fires once when the cursor leaves the rendered `<mark>` element. Uses native `mouseleave`
 * semantics (no bubbling).
 *
 * @public
 */
export type TypedMarkOnMouseLeave = (
  event: DomMouseEvent,
  type: string,
  id: string,
  textContent: string,
) => void;

export type TypedOnMouseLeaves = TypedCallbacks<TypedMarkOnMouseLeave>;

export type SerializedTypedMarkNode = Spread<
  {
    typedIDs: TypedIDs;
  },
  SerializedElementNode
>;

/** The callback each of a mark's callback slots holds. */
interface TypedMarkCallbackKinds {
  click: TypedMarkOnClick;
  remove: TypedMarkOnRemove;
  mouseEnter: TypedMarkOnMouseEnter;
  mouseLeave: TypedMarkOnMouseLeave;
}

type CallbackSlot = keyof TypedMarkCallbackKinds;

/** The slots a mouse event on the rendered `<mark>` fires. */
type DOMEventSlot = "click" | "mouseEnter" | "mouseLeave";

type SlotCallbacks<S extends CallbackSlot> = TypedCallbacks<TypedMarkCallbackKinds[S]>;

/** A mark's callbacks by slot; `S` narrows it to the slots one write touches. */
type TypedMarkCallbacks<S extends CallbackSlot = CallbackSlot> = {
  [Slot in S]?: SlotCallbacks<Slot>;
};

/** Every slot, in the order each lifecycle step visits them. */
const CALLBACK_SLOTS: readonly CallbackSlot[] = ["click", "remove", "mouseEnter", "mouseLeave"];

/** Per slot, every mark's callbacks by node key. */
const callbackRegistries: { [S in CallbackSlot]: Map<NodeKey, SlotCallbacks<S>> } = {
  click: new Map(),
  remove: new Map(),
  mouseEnter: new Map(),
  mouseLeave: new Map(),
};

/** The mark field holding the DOM listener each mouse-event slot attaches. */
const DOM_LISTENER_FIELDS = {
  click: "__domOnClickListener",
  mouseEnter: "__domOnMouseEnterListener",
  mouseLeave: "__domOnMouseLeaveListener",
} as const;

/** Reserved mark type for CommentPlugin. */
export const COMMENT_MARK_TYPE = "internal-comment";

const reservedTypes = [COMMENT_MARK_TYPE];
const NO_IDS: TypedIDs = Object.freeze({});
const TYPED_MARK_VERSION = 1;

/** Per editor a reporter listens to, the `type`/`id` pairs whose `onRemove` a mark has called
 * since the last take. An editor nobody listens to has no entry, so nothing piles up for it. */
const removalReports = new WeakMap<LexicalEditor, [type: string, id: string][]>();

/** Per editor a reporter listens to, the marks that have reported each `type`/`id`'s removal since
 * it was last set (by {@link typedMarkIdKey}). An undo brings a mark back under its own key, so a
 * mark found here has already told the host and stays quiet the next time it goes. */
const reportedMarks = new WeakMap<LexicalEditor, Map<string, Set<NodeKey>>>();

/**
 * Start recording the `type`/`id` pairs whose `onRemove` a mark of `editor` calls, for
 * {@link takeTypedMarkRemovalReports}. Returns the function that stops it and drops what was not
 * taken. One reporter per editor: a second call restarts the record.
 */
export function listenForTypedMarkRemovalReports(editor: LexicalEditor): () => void {
  removalReports.set(editor, []);
  reportedMarks.set(editor, new Map());
  return () => {
    removalReports.delete(editor);
    reportedMarks.delete(editor);
  };
}

/**
 * The `type`/`id` pairs whose `onRemove` a mark of `editor` has called since the last take, so a
 * reporter that runs after the commit knows the host has already heard of them. Clears the list.
 * Empty unless {@link listenForTypedMarkRemovalReports} is recording for `editor`.
 */
export function takeTypedMarkRemovalReports(editor: LexicalEditor): [type: string, id: string][] {
  const taken = removalReports.get(editor);
  if (!taken) return [];
  removalReports.set(editor, []);
  return taken;
}

/** Per editor, the `type`/`id` pairs whose removal no mark reports any more. */
const silencedRemovals = new WeakMap<LexicalEditor, Set<string>>();

/** One key per `type`/`id` pair, for maps that key by annotation. JSON, not a delimiter join: a
 * type or id may itself contain any delimiter character, NUL included. */
export function typedMarkIdKey(type: string, id: string): string {
  return JSON.stringify([type, id]);
}

/**
 * Stop, or resume, every mark of `editor` reporting the removal of `type`/`id`. A reporter that has
 * already told the host an annotation is gone silences it, so a mark an undo brings back cannot
 * report it a second time. Resuming starts a new lifecycle, in which every mark may report once
 * again.
 */
export function setTypedMarkRemovalSilenced(
  editor: LexicalEditor,
  type: string,
  id: string,
  silenced: boolean,
): void {
  let keys = silencedRemovals.get(editor);
  if (silenced) {
    if (!keys) silencedRemovals.set(editor, (keys = new Set()));
    keys.add(typedMarkIdKey(type, id));
  } else {
    keys?.delete(typedMarkIdKey(type, id));
    reportedMarks.get(editor)?.delete(typedMarkIdKey(type, id));
  }
}

/** Resume reporting every silenced removal in `editor`. */
export function clearTypedMarkRemovalSilences(editor: LexicalEditor): void {
  silencedRemovals.delete(editor);
  reportedMarks.get(editor)?.clear();
}

/** Drop the callback for `type`/`id` from `slot`'s registry entry for `key`. */
function dropRegisteredCallback<S extends CallbackSlot>(
  slot: S,
  key: NodeKey,
  type: string,
  id: string,
): void {
  const registry = callbackRegistries[slot];
  const entry = registry.get(key);
  const typeCallbacks = entry?.[type];
  if (!entry || !typeCallbacks || !(id in typeCallbacks)) return;
  const next = omitTypedCallback(entry, type, id);
  if (next) registry.set(key, next);
  else registry.delete(key);
}

/**
 * Drop mark `key`'s callbacks for `type`/`id`, as `remove()` drops a mark's callbacks, for a mark
 * that left the document without `remove()` running.
 */
export function forgetTypedMarkCallbacks(key: NodeKey, type: string, id: string): void {
  for (const slot of CALLBACK_SLOTS) dropRegisteredCallback(slot, key, type, id);
}

export class TypedMarkNode extends ElementNode {
  __typedIDs: TypedIDs;
  private __typedOn: TypedMarkCallbacks;
  __domOnClickListener?: (event: DomMouseEvent) => void;
  __domOnMouseEnterListener?: (event: DomMouseEvent) => void;
  __domOnMouseLeaveListener?: (event: DomMouseEvent) => void;
  __suppressOnRemoveCallbacks?: boolean;

  constructor(
    typedIds: TypedIDs = NO_IDS,
    typedOnClicks?: TypedOnClicks,
    typedOnRemoves?: TypedOnRemoves,
    typedOnMouseEnters?: TypedOnMouseEnters,
    typedOnMouseLeaves?: TypedOnMouseLeaves,
    key?: NodeKey,
  ) {
    super(key);
    this.__typedIDs = cloneTypedIDs(typedIds);
    this.__typedOn = {
      click: cloneTypedCallbacks(typedOnClicks),
      remove: cloneTypedCallbacks(typedOnRemoves),
      mouseEnter: cloneTypedCallbacks(typedOnMouseEnters),
      mouseLeave: cloneTypedCallbacks(typedOnMouseLeaves),
    };
    this.pruneCallbacks();
  }

  static override getType(): string {
    return "typed-mark";
  }

  static override clone(node: TypedMarkNode): TypedMarkNode {
    const { click, remove, mouseEnter, mouseLeave } = node.__typedOn;
    return new TypedMarkNode(node.__typedIDs, click, remove, mouseEnter, mouseLeave, node.__key);
  }

  static isReservedType(type: string): boolean {
    return reservedTypes.includes(type);
  }

  static override importDOM(): null {
    return null;
  }

  static override importJSON(serializedNode: SerializedTypedMarkNode): TypedMarkNode {
    return $createTypedMarkNode().updateFromJSON(serializedNode);
  }

  override exportJSON(): SerializedTypedMarkNode {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: TYPED_MARK_VERSION,
    };
  }

  override createDOM(config: EditorConfig, editor: LexicalEditor): HTMLElement {
    const element = document.createElement("mark");
    addClassNamesToElement(element, ...typedMarkClassNames(config.theme, this.__typedIDs));
    element.addEventListener("click", this.getOrCreateDOMListener("click", editor));
    element.addEventListener("mouseenter", this.getOrCreateDOMListener("mouseEnter", editor));
    element.addEventListener("mouseleave", this.getOrCreateDOMListener("mouseLeave", editor));
    return element;
  }

  override updateDOM(prevNode: TypedMarkNode, element: HTMLElement, config: EditorConfig): boolean {
    const types = new Set([
      ...Object.keys(prevNode.__typedIDs ?? {}),
      ...Object.keys(this.__typedIDs ?? {}),
    ]);

    for (const type of types) {
      const prevIDs = prevNode.__typedIDs[type] ?? [];
      const nextIDs = this.__typedIDs[type] ?? [];
      const prevIDsCount = prevIDs.length;
      const nextIDsCount = nextIDs.length;
      const markTheme = getTypedClassName(config.theme.typedMark, type);
      const overlapTheme = getTypedClassName(config.theme.typedMarkOverlap, type);

      if (prevIDsCount !== nextIDsCount) {
        if (prevIDsCount === 0) {
          if (nextIDsCount === 1) addClassNamesToElement(element, markTheme);
        } else if (nextIDsCount === 0) {
          removeClassNamesFromElement(element, markTheme);
        }

        if (prevIDsCount === 1) {
          if (nextIDsCount === 2) addClassNamesToElement(element, overlapTheme);
        } else if (nextIDsCount === 1) {
          removeClassNamesFromElement(element, overlapTheme);
        }
      }

      const prevIDsSet = new Set(prevIDs);
      const nextIDsSet = new Set(nextIDs);

      for (const id of prevIDs) {
        if (!nextIDsSet.has(id)) {
          removeClassNamesFromElement(element, getTypedClassName("annotationId", id));
        }
      }

      for (const id of nextIDs) {
        if (!prevIDsSet.has(id)) {
          addClassNamesToElement(element, getTypedClassName("annotationId", id));
        }
      }
    }

    return false;
  }

  override updateFromJSON(serializedNode: LexicalUpdateJSON<SerializedTypedMarkNode>): this {
    return super.updateFromJSON(serializedNode).setTypedIDs(serializedNode.typedIDs);
  }

  hasID(type: string, id: string): boolean {
    const typedIDs = this.getTypedIDs();
    const ids = typedIDs[type];
    if (!ids) return false;

    for (const existingId of ids) {
      if (id === existingId) {
        return true;
      }
    }
    return false;
  }

  getTypedIDs(): TypedIDs {
    const self = this.getLatest();
    return $isTypedMarkNode(self) ? self.__typedIDs : {};
  }

  setTypedIDs(ids: TypedIDs): this {
    const self = this.getWritable();
    const previousIDs = cloneTypedIDs(self.__typedIDs);
    self.__typedIDs = cloneTypedIDs(ids);
    self.dispatchRemovedIDs(previousIDs, self.__typedIDs, "removed");
    self.pruneCallbacks();
    const mergedNode = self.mergeWithAdjacentTypedMarks();
    if (mergedNode.hasNoIDsForEveryType() && mergedNode.getParent() !== null)
      $unwrapTypedMarkNode(mergedNode);
    return mergedNode;
  }

  setTypedOnClicks(typedOnClicks: TypedOnClicks): this {
    return this.setCallbacks("click", typedOnClicks);
  }

  getTypedOnClicks(): TypedOnClicks {
    return this.getCallbacks("click");
  }

  setTypedOnRemoves(typedOnRemoves: TypedOnRemoves): this {
    return this.setCallbacks("remove", typedOnRemoves);
  }

  getTypedOnRemoves(): TypedOnRemoves {
    return this.getCallbacks("remove");
  }

  setTypedOnMouseEnters(typedOnMouseEnters: TypedOnMouseEnters): this {
    return this.setCallbacks("mouseEnter", typedOnMouseEnters);
  }

  getTypedOnMouseEnters(): TypedOnMouseEnters {
    return this.getCallbacks("mouseEnter");
  }

  setTypedOnMouseLeaves(typedOnMouseLeaves: TypedOnMouseLeaves): this {
    return this.setCallbacks("mouseLeave", typedOnMouseLeaves);
  }

  getTypedOnMouseLeaves(): TypedOnMouseLeaves {
    return this.getCallbacks("mouseLeave");
  }

  addID(
    type: string,
    id: string,
    onClick?: TypedMarkOnClick,
    onRemove?: TypedMarkOnRemove,
    onMouseEnter?: TypedMarkOnMouseEnter,
    onMouseLeave?: TypedMarkOnMouseLeave,
  ): void {
    const self = this.getWritable();
    if (!$isTypedMarkNode(self)) return;

    assertSafeKey(type);
    assertSafeKey(id);

    let ids = self.__typedIDs[type];
    if (!ids) {
      ids = [];
      self.__typedIDs[type] = ids;
    }
    if (!ids.includes(id)) ids.push(id);
    const callbacks: { [S in CallbackSlot]?: TypedMarkCallbackKinds[S] } = {
      click: onClick,
      remove: onRemove,
      mouseEnter: onMouseEnter,
      mouseLeave: onMouseLeave,
    };
    for (const slot of CALLBACK_SLOTS) {
      const callback = callbacks[slot];
      if (callback) self.setCallbackFor(slot, type, id, callback);
    }
  }

  deleteID(type: string, id: string): void {
    const self = this.getWritable();
    if (!$isTypedMarkNode(self)) return;

    const ids = self.__typedIDs[type];
    if (!ids || ids.length === 0) return;

    for (let i = 0; i < ids.length; i++) {
      if (id === ids[i]) {
        ids.splice(i, 1);
        self.invokeOnRemove(type, id, "removed");
        break;
      }
    }

    for (const slot of CALLBACK_SLOTS) self.removeCallbackFor(slot, type, id);
    self.pruneCallbacks();
    const mergedNode = self.mergeWithAdjacentTypedMarks();
    if (mergedNode.hasNoIDsForEveryType() && mergedNode.getParent() !== null)
      $unwrapTypedMarkNode(mergedNode);
  }

  hasNoIDsForEveryType(): boolean {
    return Object.values(this.getTypedIDs()).every((ids) => ids === undefined || ids.length === 0);
  }

  override insertNewAfter(_selection: RangeSelection, restoreSelection = true): null | ElementNode {
    const node = $createTypedMarkNode(this.__typedIDs, this.getTypedOnClicks());
    this.insertAfter(node, restoreSelection);
    return node;
  }

  override canInsertTextBefore(): false {
    return false;
  }

  override canInsertTextAfter(): false {
    return false;
  }

  override canBeEmpty(): false {
    return false;
  }

  override isInline(): true {
    return true;
  }

  override extractWithChild(
    _child: LexicalNode,
    selection: BaseSelection,
    destination: "clone" | "html",
  ): boolean {
    if (!$isRangeSelection(selection) || destination === "html") {
      return false;
    }
    const anchor = selection.anchor;
    const focus = selection.focus;
    const anchorNode = anchor.getNode();
    const focusNode = focus.getNode();
    const isBackward = selection.isBackward();
    const selectionLength = isBackward
      ? anchor.offset - focus.offset
      : focus.offset - anchor.offset;
    return (
      this.isParentOf(anchorNode) &&
      this.isParentOf(focusNode) &&
      this.getTextContent().length === selectionLength
    );
  }

  override excludeFromCopy(destination: "clone" | "html"): boolean {
    return destination !== "clone";
  }

  override remove(preserveEmptyParent?: boolean): void {
    const self = this.getWritable();
    const typedIDs = this.getTypedIDs();
    if (self.__suppressOnRemoveCallbacks) {
      self.__suppressOnRemoveCallbacks = undefined;
    } else {
      self.dispatchOnRemoveForTypedIDs(typedIDs, "destroyed");
    }

    for (const slot of CALLBACK_SLOTS) callbackRegistries[slot].delete(self.getKey());
    self.__typedOn = {};

    super.remove.call(self, preserveEmptyParent);
  }

  private getCallbacks<S extends CallbackSlot>(slot: S): SlotCallbacks<S> {
    const self = this.getLatest();
    if (!$isTypedMarkNode(self)) return {};
    const stored = callbackRegistries[slot].get(self.getKey());
    return stored ?? {};
  }

  private setCallbacks<S extends CallbackSlot>(slot: S, callbacks: SlotCallbacks<S>): this {
    const self = this.getWritable();
    self.setSlot(slot, cloneTypedCallbacks(callbacks));
    self.pruneSlot(slot);
    return self;
  }

  /** The one write to a slot: TypeScript cannot check a write through a key it only knows
   * generically, so it is checked here against the slots `S` names. */
  private setSlot<S extends CallbackSlot>(slot: S, callbacks: SlotCallbacks<S> | undefined): void {
    (this.__typedOn as TypedMarkCallbacks<S>)[slot] = callbacks;
  }

  private getOrCreateDOMListener(
    slot: DOMEventSlot,
    editor: LexicalEditor,
  ): (event: DomMouseEvent) => void {
    const field = DOM_LISTENER_FIELDS[slot];
    let listener = this[field];
    if (!listener) {
      listener = (event: DomMouseEvent) => {
        this.handleDOMEvent(slot, event, editor);
      };
      this[field] = listener;
    }
    return listener;
  }

  private handleDOMEvent(slot: DOMEventSlot, event: DomMouseEvent, editor: LexicalEditor): void {
    const typedCallbacks = callbackRegistries[slot].get(this.getKey());
    if (!typedCallbacks) return;

    const callbacks: [TypedMarkOnClick, string, string][] = [];
    for (const [type, callbacksById] of Object.entries(typedCallbacks)) {
      for (const [id, callback] of Object.entries(callbacksById)) {
        if (callback) callbacks.push([callback, type, id]);
      }
    }

    if (callbacks.length === 0) return;

    const textContent = editor.read(() => this.getTextContent());
    for (const [callback, type, id] of callbacks) {
      callback(event, type, id, textContent);
    }
  }

  private ensureSlotMutable<S extends CallbackSlot>(slot: S): SlotCallbacks<S> {
    let callbacks: SlotCallbacks<S> | undefined = this.__typedOn[slot];
    if (callbacks === undefined) {
      callbacks = callbackRegistries[slot].get(this.getKey()) ?? {};
      this.setSlot(slot, callbacks);
    }
    return callbacks;
  }

  private syncSlotToRegistry<S extends CallbackSlot>(slot: S): void {
    const callbacks = this.__typedOn[slot];
    if (callbacks && Object.keys(callbacks).length > 0) {
      callbackRegistries[slot].set(this.getKey(), callbacks);
      return;
    }
    callbackRegistries[slot].delete(this.getKey());
    this.setSlot(slot, undefined);
  }

  private setCallbackFor<S extends CallbackSlot>(
    slot: S,
    type: string,
    id: string,
    callback: TypedMarkCallbackKinds[S],
  ): void {
    assertSafeKey(type);
    assertSafeKey(id);

    const callbacks = this.ensureSlotMutable(slot);
    const typeCallbacks = callbacks[type] ?? (callbacks[type] = {});
    typeCallbacks[id] = callback;
    this.syncSlotToRegistry(slot);
  }

  private removeCallbackFor<S extends CallbackSlot>(slot: S, type: string, id: string): void {
    const callbacks = this.__typedOn[slot];
    if (!callbacks?.[type]) return;
    this.setSlot(slot, omitTypedCallback(callbacks, type, id));
    this.syncSlotToRegistry(slot);
  }

  /** Keep only the callbacks for ids the mark holds, then sync the slot's registry entry. */
  private pruneSlot<S extends CallbackSlot>(slot: S): void {
    this.setSlot(slot, pruneTypedCallbacks(this.__typedOn[slot], this.__typedIDs));
    this.syncSlotToRegistry(slot);
  }

  private pruneCallbacks(): void {
    for (const slot of CALLBACK_SLOTS) this.pruneSlot(slot);
  }

  private invokeOnRemove(type: string, id: string, cause: TypedMarkRemovalCause): void {
    const callbacks = this.getTypedOnRemoves();
    const callback = callbacks[type]?.[id];
    if (!callback) return;

    const editor = $getEditor();
    const key = typedMarkIdKey(type, id);
    const reportedHere = reportedMarks.get(editor);
    if (silencedRemovals.get(editor)?.has(key) || reportedHere?.get(key)?.has(this.getKey())) {
      this.removeCallbackFor("remove", type, id);
      return;
    }
    removalReports.get(editor)?.push([type, id]);
    if (reportedHere) {
      let marks = reportedHere.get(key);
      if (!marks) reportedHere.set(key, (marks = new Set()));
      marks.add(this.getKey());
    }
    try {
      callback(type, id, cause, this.getTextContent());
    } catch (error) {
      // Thrown here, a host's error would make Lexical discard the whole update — the user's edit
      // with it — and skip this removal's other reports. The editor's error handler gets it once
      // the update is done instead.
      queueMicrotask(() =>
        editor._onError(error instanceof Error ? error : new Error(String(error))),
      );
    }
    this.removeCallbackFor("remove", type, id);
  }

  private dispatchRemovedIDs(
    previous: TypedIDs,
    next: TypedIDs,
    cause: TypedMarkRemovalCause,
  ): void {
    const removedPairs = collectRemovedTypeIdPairs(previous, next);
    if (removedPairs.length === 0) return;

    for (const [type, id] of removedPairs) this.invokeOnRemove(type, id, cause);
  }

  private dispatchOnRemoveForTypedIDs(typedIDs: TypedIDs, cause: TypedMarkRemovalCause): void {
    for (const [type, ids] of Object.entries(typedIDs)) {
      if (!ids) continue;

      for (const id of ids) this.invokeOnRemove(type, id, cause);
    }
  }

  private mergeWithAdjacentTypedMarks(): this {
    if (this.hasNoIDsForEveryType()) return this;

    let previousSibling = this.getPreviousSibling();
    while (
      $isTypedMarkNode(previousSibling) &&
      typedIDsAreEqual(previousSibling.getTypedIDs(), this.getTypedIDs())
    ) {
      this.mergeWithPreviousTypedMark(previousSibling);
      previousSibling = this.getPreviousSibling();
    }

    let nextSibling = this.getNextSibling();
    while (
      $isTypedMarkNode(nextSibling) &&
      typedIDsAreEqual(this.getTypedIDs(), nextSibling.getTypedIDs())
    ) {
      this.mergeWithNextTypedMark(nextSibling);
      nextSibling = this.getNextSibling();
    }

    return this;
  }

  private mergeWithPreviousTypedMark(previous: TypedMarkNode): void {
    this.mergeCallbacksFrom(previous);

    const previousChildren = previous.getChildren();
    if (previousChildren.length > 0) {
      this.splice(0, 0, previousChildren);
    }

    previous.getWritable().__suppressOnRemoveCallbacks = true;
    previous.remove();
  }

  private mergeWithNextTypedMark(next: TypedMarkNode): void {
    this.mergeCallbacksFrom(next);

    const nextChildren = next.getChildren();
    if (nextChildren.length > 0) {
      this.append(...nextChildren);
    }

    next.getWritable().__suppressOnRemoveCallbacks = true;
    next.remove();
  }

  private mergeCallbacksFrom(other: TypedMarkNode): void {
    for (const slot of CALLBACK_SLOTS) this.mergeSlotFrom(slot, other.getCallbacks(slot));
  }

  private mergeSlotFrom<S extends CallbackSlot>(slot: S, additional: SlotCallbacks<S>): void {
    if (!additional || Object.keys(additional).length === 0) return;
    const merged = mergeTypedCallbacks(this.getCallbacks(slot), additional);
    if (Object.keys(merged).length === 0) return;

    this.setCallbacks(slot, merged);
  }
}

function cloneTypedIDs(typedIds: TypedIDs = NO_IDS): TypedIDs {
  const clone: TypedIDs = {};
  for (const [type, ids] of Object.entries(typedIds)) {
    assertSafeKey(type);
    if (!Array.isArray(ids)) {
      clone[type] = [];
      continue;
    }

    const clonedIds: string[] = [];
    for (const id of ids) {
      assertSafeKey(id);
      clonedIds.push(id);
    }

    clone[type] = clonedIds;
  }
  return clone;
}

function cloneTypedCallbacks<T>(callbacks?: TypedCallbacks<T>): TypedCallbacks<T> | undefined {
  if (!callbacks) return undefined;

  const clone: TypedCallbacks<T> = {};
  for (const [type, callbacksById] of Object.entries(callbacks)) {
    assertSafeKey(type);
    const clonedCallbacks: { [id: string]: T } = {};
    for (const [id, callback] of Object.entries(callbacksById)) {
      assertSafeKey(id);
      clonedCallbacks[id] = callback;
    }
    if (Object.keys(clonedCallbacks).length > 0) clone[type] = clonedCallbacks;
  }

  return Object.keys(clone).length > 0 ? clone : undefined;
}

/** `callbacks` without those for ids `typedIDs` no longer holds; undefined when none are left. */
function pruneTypedCallbacks<T>(
  callbacks: TypedCallbacks<T> | undefined,
  typedIDs: TypedIDs,
): TypedCallbacks<T> | undefined {
  if (!callbacks) return undefined;

  const next: TypedCallbacks<T> = {};
  for (const [type, callbacksById] of Object.entries(callbacks)) {
    const ids = typedIDs[type];
    if (!ids || ids.length === 0) continue;

    const idSet = new Set(ids);
    const filteredCallbacks: { [id: string]: T } = {};
    for (const [id, callback] of Object.entries(callbacksById)) {
      if (idSet.has(id)) filteredCallbacks[id] = callback;
    }
    if (Object.keys(filteredCallbacks).length > 0) next[type] = filteredCallbacks;
  }

  return Object.keys(next).length > 0 ? next : undefined;
}

/** A copy of `callbacks` without the one for `type`/`id`, dropping a type left with none; undefined
 * when no type is left. */
function omitTypedCallback<T>(
  callbacks: TypedCallbacks<T>,
  type: string,
  id: string,
): TypedCallbacks<T> | undefined {
  const remaining = omitRecordKey(callbacks[type] ?? {}, id);
  if (Object.keys(remaining).length > 0) return { ...callbacks, [type]: remaining };
  const otherTypes = omitRecordKey(callbacks, type);
  return Object.keys(otherTypes).length > 0 ? otherTypes : undefined;
}

function omitRecordKey<T>(source: { [key: string]: T }, keyToOmit: string): { [key: string]: T } {
  const result: { [key: string]: T } = {};
  for (const [currentKey, value] of Object.entries(source)) {
    if (currentKey !== keyToOmit) {
      result[currentKey] = value;
    }
  }
  return result;
}

function normalizeTypedIDs(source: TypedIDs): { [type: string]: string[] } {
  const normalized: { [type: string]: string[] } = {};
  for (const [type, ids] of Object.entries(source)) {
    if (!ids || ids.length === 0) continue;
    normalized[type] = [...ids].sort();
  }
  return normalized;
}

function collectRemovedTypeIdPairs(previous: TypedIDs, next: TypedIDs): [string, string][] {
  const removed: [string, string][] = [];
  for (const [type, previousIds] of Object.entries(previous)) {
    const nextIds = new Set(next[type] ?? []);
    for (const id of previousIds ?? []) {
      if (!nextIds.has(id)) removed.push([type, id]);
    }
  }
  return removed;
}

function typedIDsAreEqual(a: TypedIDs, b: TypedIDs): boolean {
  const normalizedA = normalizeTypedIDs(a);
  const normalizedB = normalizeTypedIDs(b);

  const typesA = Object.keys(normalizedA).sort();
  const typesB = Object.keys(normalizedB).sort();
  if (typesA.length !== typesB.length) return false;

  for (let i = 0; i < typesA.length; i++) {
    const type = typesA[i];
    if (type !== typesB[i]) return false;

    const idsA = normalizedA[type];
    const idsB = normalizedB[type];
    if (!idsA || !idsB || idsA.length !== idsB.length) return false;
    for (let j = 0; j < idsA.length; j++) {
      if (idsA[j] !== idsB[j]) return false;
    }
  }

  return true;
}

/** Both maps' callbacks, `primary`'s winning where both hold one for the same `type`/`id`: a merge
 * keeps the surviving mark's callback and drops the absorbed mark's. */
function mergeTypedCallbacks<T>(
  primary: TypedCallbacks<T>,
  secondary: TypedCallbacks<T>,
): TypedCallbacks<T> {
  const merged: TypedCallbacks<T> = {};
  const types = new Set([...Object.keys(primary), ...Object.keys(secondary)]);

  for (const type of types) {
    const primaryCallbacks = primary[type] ?? {};
    const secondaryCallbacks = secondary[type] ?? {};
    const ids = new Set([...Object.keys(primaryCallbacks), ...Object.keys(secondaryCallbacks)]);

    const mergedCallbacks: { [id: string]: T } = {};
    for (const id of ids) {
      const callback = primaryCallbacks[id] ?? secondaryCallbacks[id];
      if (callback) mergedCallbacks[id] = callback;
    }

    if (Object.keys(mergedCallbacks).length > 0) merged[type] = mergedCallbacks;
  }

  return merged;
}

function getTypedClassName(className: string, type: string): string {
  return `${className}-${type}`;
}

/**
 * The CSS class names an annotation carrying `typedIDs` is painted with: per type
 * `<theme.typedMark>-<type>`, `<theme.typedMarkOverlap>-<type>` whenever two ids of the type paint
 * the same text, and `annotationId-<id>` per id. A `<mark>` and the display bytes an annotation is
 * held on are painted with the same names, so one host stylesheet styles both.
 */
export function typedMarkClassNames(theme: EditorThemeClasses, typedIDs: TypedIDs): string[] {
  const names: string[] = [];
  for (const [type, ids] of Object.entries(typedIDs)) {
    names.push(getTypedClassName(theme.typedMark, type));
    if (ids.length > 1) names.push(getTypedClassName(theme.typedMarkOverlap, type));
    for (const id of ids) names.push(getTypedClassName("annotationId", id));
  }
  return names;
}

/**
 * Gets the external typed mark type.
 *
 * @remarks
 * This is used to ensure unique identification of external typed marks. Along with reserved types
 * prefaced with 'internal-' for internal typed marks @see {@link COMMENT_MARK_TYPE}.
 */
export function externalTypedMarkType(type: string): string {
  return `external-${type}`;
}

export function $createTypedMarkNode(
  typedIds?: TypedIDs,
  typedOnClicks?: TypedOnClicks,
  typedOnRemoves?: TypedOnRemoves,
  typedOnMouseEnters?: TypedOnMouseEnters,
  typedOnMouseLeaves?: TypedOnMouseLeaves,
): TypedMarkNode {
  return $applyNodeReplacement(
    new TypedMarkNode(
      typedIds,
      typedOnClicks,
      typedOnRemoves,
      typedOnMouseEnters,
      typedOnMouseLeaves,
    ),
  );
}

export function $isTypedMarkNode(node: LexicalNode | null | undefined): node is TypedMarkNode {
  return node instanceof TypedMarkNode;
}

export function isSerializedTypedMarkNode(
  node: SerializedLexicalNode | null | undefined,
): node is SerializedTypedMarkNode {
  return node?.type === TypedMarkNode.getType();
}

/**
 * Remove `type`/`id` from every mark in `markKeys` still holding it (`deleteID`), unwrapping any
 * mark `deleteID` leaves holding no id of any type. Returns how many marks held it.
 */
export function $removeTypedMarkId(type: string, id: string, markKeys: Iterable<NodeKey>): number {
  let count = 0;
  for (const key of markKeys) {
    const node = $getNodeByKey(key);
    if (!$isTypedMarkNode(node) || !node.hasID(type, id)) continue;
    count++;
    node.deleteID(type, id);
    if (node.hasNoIDsForEveryType()) $unwrapTypedMarkNode(node);
  }
  return count;
}

// #region adapted from https://github.com/facebook/lexical/blob/92c47217244f9d3c22a59728633fb41a10420724/packages/lexical-mark/src/index.ts

export function $unwrapTypedMarkNode(node: TypedMarkNode): void {
  const children = node.getChildren();
  let target: LexicalNode | null = null;
  for (const child of children) {
    if (target === null) {
      node.insertBefore(child);
    } else {
      target.insertAfter(child);
    }
    target = child;
  }
  node.remove();
}

export function $getMarkIDs(node: TextNode, type: string, offset: number): string[] | undefined {
  let currentNode: LexicalNode | null = node;
  while (currentNode !== null) {
    if ($isTypedMarkNode(currentNode)) {
      return currentNode.getTypedIDs()[type];
    } else if ($isTextNode(currentNode) && offset === currentNode.getTextContentSize()) {
      const nextSibling = currentNode.getNextSibling();
      if ($isTypedMarkNode(nextSibling)) {
        return nextSibling.getTypedIDs()[type];
      }
    }
    currentNode = currentNode.getParent();
  }
  return undefined;
}

// #endregion
