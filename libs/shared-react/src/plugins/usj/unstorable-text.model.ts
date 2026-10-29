/**
 * Text a hidden-marker view keeps out of what is pasted, dropped or typed into it, because saved it
 * would stop being text: `\` starts a USFM marker, and `//` is USFM's optional line break.
 */
export type UnstorableCharacter = "\\" | "//";

/** Passed to {@link UnstorableTextRemovedHandler} when an edit's text lost unstorable characters. */
export interface UnstorableTextRemoved {
  /**
   * What brought the text in. More sources may be added; a host that branches on this should handle
   * values it does not know.
   */
  readonly source: "paste" | "drop" | "typing";
  /** What was removed or refused, each kind once, in the order first met. Never empty. */
  readonly removed: UnstorableCharacter[];
}

/**
 * Told once per paste, drop or refused keystroke that removed or refused unstorable text, so the
 * host can tell the user why some of what they pasted, dropped or typed is missing.
 */
export type UnstorableTextRemovedHandler = (event: UnstorableTextRemoved) => void;
