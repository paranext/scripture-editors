/** One construct the current view cannot show, which an edit is about to remove. */
export interface HiddenContentItem {
  /** The construct's USJ type, e.g. `"figure"`, `"sidebar"`, `"periph"`. */
  tag: string;
  /** The construct's USFM marker without the backslash, e.g. `"fig"`, `"esb"`, when it has one. */
  marker?: string;
}

/**
 * What the user did that would remove hidden content.
 * - `"deleteBackward"` / `"deleteForward"`: Backspace / Delete (or a word or line chord of either)
 *   with a collapsed caret.
 * - `"replaceSelection"`: deleting, typing over, pasting over, or cutting a selection.
 */
export type HiddenContentDeleteAction = "deleteBackward" | "deleteForward" | "replaceSelection";

/** Passed to {@link HiddenContentDeleteHandler} when an edit would remove hidden content. */
export interface HiddenContentDeleteRequest {
  /** Each hidden construct the edit would remove, in document order. Never empty. */
  items: HiddenContentItem[];
  /** What the user did. */
  action: HiddenContentDeleteAction;
  /**
   * Whether `"keep"` moves the caret past the hidden content, leaving the user free to keep going.
   * When `false`, `"keep"` cancels the edit and the caret stays where it was. Only a caret delete
   * whose whole extent is the hidden content right at the caret can skip; a word or line delete
   * reaching hidden content further along, and any selection edit, cannot.
   */
  canSkip: boolean;
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
 * sidebar, ...). The editor holds the edit until this settles, refusing other edits meanwhile, so
 * the promise must settle: a modal dialog whose every way out answers is the intended shape. A
 * rejected promise counts as `"keep"`.
 */
export type HiddenContentDeleteHandler = (
  request: HiddenContentDeleteRequest,
) => HiddenContentDeleteDecision | Promise<HiddenContentDeleteDecision>;
