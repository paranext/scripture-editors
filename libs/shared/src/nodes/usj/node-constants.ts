/** This file avoids a circular dependency between `CharNode.ts` and `node.utils.ts`. */

import { createCommand, LexicalCommand } from "lexical";

export interface UnknownAttributes {
  [name: string]: string | undefined;
}

/** Non-breaking space (U+00A0). */
export const NBSP = "\u00A0";
/** Zero-width space (U+200B). */
export const ZWSP = "\u200B";

export const EMPTY_CHAR_PLACEHOLDER_TEXT = NBSP;

export const NODE_ATTRIBUTE_PREFIX = `${NBSP}|`;

export const PARA_MARKER_DEFAULT = "p";

/**
 * Note caller will be auto-generated.
 * @public
 */
export const GENERATOR_NOTE_CALLER = "+";
/**
 * Hidden note caller will not be auto-generated, and will not be displayed in some views.
 * @public
 */
export const HIDDEN_NOTE_CALLER = "-";

/**
 * Registered type name of the decorator node a collapsed note renders its caller with
 * (shared-react's `ImmutableNoteCallerNode`). Declared here because this layer must recognize the
 * node — the editor→USJ conversion emits nothing for it, so it holds no USJ content position —
 * while being unable to import a react-layer class. The class itself returns this constant from
 * `getType()`, so the name lives in exactly one place.
 */
export const IMMUTABLE_NOTE_CALLER_NODE_TYPE = "immutable-note-caller";

export const CHAPTER_CLASS_NAME = "chapter";
export const VERSE_CLASS_NAME = "verse";
export const INVALID_CLASS_NAME = "invalid";
export const TEXT_SPACING_CLASS_NAME = "text-spacing";
export const FORMATTED_FONT_CLASS_NAME = "formatted-font";
export const MARKER_MODE_CLASS_NAME_PREFIX = "marker-";

export const EXTERNAL_USJ_MUTATION_TAG = "external-usj-mutation";
export const SELECTION_CHANGE_TAG = "selection-change";
/**
 * Tags a commit that moves the caret AND changes a node on the editor's own initiative (a transient
 * caret host created or dropped), keeping it out of the host's USJ-change handling. Never put it on
 * an update that only moves the caret: Lexical clears an update's tags only when its commit changes
 * a node, so the tag would ride along on the user's next edit and hide that edit from the host. Use
 * {@link APP_PLACED_CARET_COMMAND} for a caret-only move.
 */
export const CURSOR_CHANGE_TAG = "cursor-change";
/**
 * Dispatched inside an update that moves ONLY the caret on the editor's own initiative — following
 * a scripture-reference navigation, or steering the caret off something it cannot rest on — so a
 * listener can tell that move from the user's own. A command rather than {@link CURSOR_CHANGE_TAG}
 * because a tag on a caret-only update outlives it (see the tag's own comment).
 */
export const APP_PLACED_CARET_COMMAND: LexicalCommand<void> = createCommand(
  "APP_PLACED_CARET_COMMAND",
);
export const ANNOTATION_CHANGE_TAG = "annotation-change";
export const DELTA_CHANGE_TAG = "delta-change";
/**
 * Marks a commit that carries Lexical's `HISTORY_MERGE_TAG` yet still CHANGES the document — a
 * marker-edit settle, which must never become its own undo entry but is a real content change the
 * host has to see. The merge tag carries two meanings that normally coincide ("do not push a
 * history entry" and "nothing to report"); this tag is how such a commit says it means only the
 * first, so USJ-change consumers do not skip it.
 */
export const MARKER_SETTLE_TAG = "marker-settle";
/** Tags that should not be present when handling a USJ change. */
export const blackListedChangeTags = [
  EXTERNAL_USJ_MUTATION_TAG,
  SELECTION_CHANGE_TAG,
  CURSOR_CHANGE_TAG,
  ANNOTATION_CHANGE_TAG,
  DELTA_CHANGE_TAG,
];
