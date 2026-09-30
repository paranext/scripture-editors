import { $isImmutableNoteCallerNode } from "../../nodes/usj/ImmutableNoteCallerNode";
import { $getNoteIndex } from "../../nodes/usj/note-index.utils";
import { $getNoteByKeyOrIndex } from "../../nodes/usj/note.utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import { NodeKey } from "lexical";
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from "react";
import { $noteEditableCallerNode, EXTERNAL_USJ_MUTATION_TAG, NoteNode } from "shared";
import { readLatest } from "./editorUpdate.utils";

/** PT9's selected-caller style: a yellow fill and thin blue top/bottom borders on the caller. */
export const NOTE_CALLER_HIGHLIGHT_CLASS = "caller_highlight";

/** Forward reference for the note caller highlight. */
export interface NoteCallerHighlightHandle {
  /**
   * Highlights the caller of the given note (by key or document-order index); `undefined` clears
   * the highlight. Only one note is highlighted at a time.
   *
   * The class goes on the caller element: the ImmutableNoteCallerNode a note is built with
   * collapsed (which it keeps through an expand toggle), or the caller's plain text for a note
   * BUILT expanded under `markerMode: "editable"` (an unclosed note, say). The note is resolved
   * here and never retried, so a call made before the document has loaded, or with a stale key or an
   * out-of-range index, is discarded and clears any highlight already showing.
   */
  setHighlightedNote(noteKeyOrIndex: string | number | undefined): void;
}

/**
 * Keeps `caller_highlight` on exactly one note's caller element. Lexical recreates a note's DOM
 * on collapse toggles, so the class is re-applied after every commit rather than set once; and it
 * is added imperatively, never through node state, so a highlight cannot dirty the document.
 *
 * The highlighted note is tracked by key. A commit that destroys that note keeps the highlight
 * only when the note was replaced IN PLACE — `EditorRef.replaceEmbedUpdate` re-keys the note it
 * rewrites — recognized as a note created in the same commit at the destroyed note's
 * document-order index (the coordinate a host's notes pane addresses). A note that simply left
 * the document drops the highlight rather than sliding it onto whichever note shifted into its
 * place, and so does a wholesale document load, whose fresh notes are a different chapter's.
 */
export const NoteCallerHighlightPlugin = forwardRef<NoteCallerHighlightHandle>(
  function NoteCallerHighlightPlugin(_props, ref) {
    const [editor] = useLexicalComposerContext();
    const highlightedKeyRef = useRef<NodeKey | undefined>(undefined);
    const highlightedElementRef = useRef<HTMLElement | undefined>(undefined);

    const applyHighlight = useCallback(() => {
      const noteKey = highlightedKeyRef.current;
      const callerKey =
        noteKey === undefined
          ? undefined
          : editor.getEditorState().read(() => {
              const note = $getNoteByKeyOrIndex(noteKey);
              if (!note) return undefined;
              // The caller is not the note's first child: in editable marker mode the note opens
              // with its marker glyph.
              const caller =
                note.getChildren().find($isImmutableNoteCallerNode) ??
                $noteEditableCallerNode(note);
              return caller?.getKey();
            });
      const element = callerKey ? (editor.getElementByKey(callerKey) ?? undefined) : undefined;
      if (highlightedElementRef.current && highlightedElementRef.current !== element)
        highlightedElementRef.current.classList.remove(NOTE_CALLER_HIGHLIGHT_CLASS);
      element?.classList.add(NOTE_CALLER_HIGHLIGHT_CLASS);
      highlightedElementRef.current = element;
    }, [editor]);

    useImperativeHandle(
      ref,
      () => ({
        setHighlightedNote(noteKeyOrIndex) {
          // Read the latest state, as `EditorRef.getNoteIndex` does, so an index resolves against
          // the document the caller just produced rather than the one before its last edit.
          highlightedKeyRef.current =
            noteKeyOrIndex === undefined
              ? undefined
              : readLatest(editor, () => $getNoteByKeyOrIndex(noteKeyOrIndex)?.getKey());
          applyHighlight();
        },
      }),
      [editor, applyHighlight],
    );

    useEffect(
      () =>
        mergeRegister(
          // Runs before the update listener below, so the key it re-points to is the one the
          // re-application then resolves the caller element from.
          editor.registerMutationListener(
            NoteNode,
            (mutations, { prevEditorState, updateTags }) => {
              const noteKey = highlightedKeyRef.current;
              if (noteKey === undefined || mutations.get(noteKey) !== "destroyed") return;
              // Only a note created in this same commit can be its in-place replacement.
              if (![...mutations.values()].includes("created")) {
                highlightedKeyRef.current = undefined;
                return;
              }

              // A load replaces the whole document and regenerates every key, so no note in the
              // new document is this one, whatever sits at its index. The host re-addresses the
              // highlight against the reloaded notes.
              const noteIndex = updateTags.has(EXTERNAL_USJ_MUTATION_TAG)
                ? undefined
                : prevEditorState.read(() => $getNoteIndex(noteKey));
              const replacementKey =
                noteIndex === undefined
                  ? undefined
                  : editor.getEditorState().read(() => $getNoteByKeyOrIndex(noteIndex)?.getKey());
              highlightedKeyRef.current =
                replacementKey !== undefined && mutations.get(replacementKey) === "created"
                  ? replacementKey
                  : undefined;
            },
            { skipInitialization: true },
          ),
          editor.registerUpdateListener(() => applyHighlight()),
        ),
      [editor, applyHighlight],
    );

    useEffect(
      () => () => highlightedElementRef.current?.classList.remove(NOTE_CALLER_HIGHLIGHT_CLASS),
      [],
    );

    return null;
  },
);
