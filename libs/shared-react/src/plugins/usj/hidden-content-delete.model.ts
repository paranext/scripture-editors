/** One construct the current view cannot show, which an edit is about to remove. */
export interface HiddenContentItem {
  /** The construct's USJ type, e.g. `"figure"`, `"sidebar"`, `"periph"`. */
  readonly tag: string;
  /** The construct's USFM marker without the backslash, e.g. `"fig"`, `"esb"`, when it has one. */
  readonly marker?: string;
}

/**
 * What the user did that would remove hidden content.
 * - `"deleteBackward"` / `"deleteForward"`: Backspace / Delete (or a word or line chord of either)
 *   with a collapsed caret.
 * - `"replaceSelection"`: deleting, typing over, pressing Enter over, pasting over, or cutting a
 *   selection.
 *
 * More actions may be added; a host that branches on this should handle values it does not know.
 */
export type HiddenContentDeleteAction = "deleteBackward" | "deleteForward" | "replaceSelection";

/** Passed to {@link HiddenContentDeleteHandler} when an edit would remove hidden content. */
export interface HiddenContentDeleteRequest {
  /** Each hidden construct the edit would remove, in document order. Never empty. */
  readonly items: readonly HiddenContentItem[];
  /** What the user did. */
  readonly action: HiddenContentDeleteAction;
  /**
   * Whether `"keep"` moves the caret past the hidden content, leaving the user free to keep going.
   * When `false`, `"keep"` cancels the edit and the caret stays where it was. `true` only for a
   * caret delete whose only hidden content is the run right at the caret, with visible content
   * beyond it to move to; a word or line delete reaching hidden content further along, a run with
   * nothing beyond it, and any selection edit cannot skip.
   */
  readonly canSkip: boolean;
}

/**
 * The user's answer.
 * - `"delete"`: go ahead and remove the hidden content along with the edit.
 * - `"keep"`: keep it. The caret moves past it when the request's `canSkip` is `true`; otherwise
 *   the edit is cancelled.
 */
export type HiddenContentDeleteDecision = "delete" | "keep";

/**
 * Asks the user whether an edit may remove content the current view does not show (a figure, a
 * sidebar, ...).
 *
 * The editor holds the edit until this settles and refuses typing, deleting, pasting and cutting
 * meanwhile, so it must settle: a modal dialog whose every way out answers is the intended shape.
 * Until it does, editing stays held. A rejected promise, a thrown error, and any answer other than
 * `"delete"` count as `"keep"`.
 */
export type HiddenContentDeleteHandler = (
  request: HiddenContentDeleteRequest,
) => HiddenContentDeleteDecision | Promise<HiddenContentDeleteDecision>;
