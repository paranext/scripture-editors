/**
 * A scrRef navigation's caret placement must not swallow the edit that follows it.
 *
 * Its own file on purpose: state an earlier test in a shared file leaves behind lets a later
 * update clear Lexical's pending tags, which hides the leak this pins.
 */
import Editor from "./Editor";
import { EditorRef } from "./editor.model";
import { flushQueuedEvents } from "./editor-test.utils";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { act, render } from "@testing-library/react";
import { createRef, ReactElement } from "react";
import { getViewOptions, STANDARD_VIEW_MODE } from "shared-react";
import { vi } from "vitest";

describe("scrRef navigation followed immediately by a content edit", () => {
  // A scrRef-driven caret placement (ScriptureReferencePlugin's onPropChanged /
  // schedulePlacingCaretAtVerseStart) is a selection-only commit tagged CURSOR_CHANGE_TAG.
  // Lexical resets its pending update tags only after a commit that dirties nodes, so that tag
  // rides onto whatever commit comes next unless it is explicitly released - and
  // DeltaOnChangePlugin skips any commit carrying a blacklisted tag (CURSOR_CHANGE_TAG among
  // them), which silently drops the next edit from onUsjChange. In Standard view this is a
  // footnote inserted right after navigating to a new reference.

  const twoVerseUsj: Usj = {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN", content: ["Test Book"] },
      { type: "chapter", marker: "c", number: "1" },
      {
        type: "para",
        marker: "p",
        content: [
          { type: "verse", marker: "v", number: "1" },
          "first verse text",
          { type: "verse", marker: "v", number: "2" },
          "second verse text",
        ],
      },
    ],
  };

  it("still reports insertMarker('f') to onUsjChange right after a scrRef navigation", async () => {
    const ref = createRef<EditorRef>();
    const onUsjChange = vi.fn();
    const scrRefVerse1 = { book: "GEN", chapterNum: 1, verseNum: 1 };
    const scrRefVerse2 = { book: "GEN", chapterNum: 1, verseNum: 2 };

    let rerender: ((element: ReactElement) => void) | undefined;
    await act(async () => {
      const result = render(
        <Editor
          ref={ref}
          defaultUsj={twoVerseUsj}
          scrRef={scrRefVerse1}
          onScrRefChange={() => undefined}
          onUsjChange={onUsjChange}
          options={{ view: getViewOptions(STANDARD_VIEW_MODE) }}
        />,
      );
      rerender = result.rerender;
    });
    await flushQueuedEvents();
    if (!rerender) throw new Error("render did not return a rerender function");
    if (!ref.current) throw new Error("EditorRef did not mount");
    const rerenderEditor = rerender;

    // Navigate to a new reference - a genuinely different scrRef object, exactly as a host
    // passes one down. Flushed to completion (its own commit) BEFORE the marker insert below,
    // so the insert lands as the NEXT, separate commit rather than being batched into the same
    // one - the shape the leaked tag actually reaches in the app (a later keystroke or, here, a
    // later palette action).
    await act(async () => {
      rerenderEditor(
        <Editor
          ref={ref}
          defaultUsj={twoVerseUsj}
          scrRef={scrRefVerse2}
          onScrRefChange={() => undefined}
          onUsjChange={onUsjChange}
          options={{ view: getViewOptions(STANDARD_VIEW_MODE) }}
        />,
      );
    });
    await flushQueuedEvents();
    onUsjChange.mockClear();

    await act(async () => {
      ref.current?.insertMarker("f");
      await Promise.resolve();
      await Promise.resolve();
    });
    await flushQueuedEvents();

    expect(onUsjChange).toHaveBeenCalled();
  });
});
