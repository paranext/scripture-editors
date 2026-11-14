/**
 * Annotations requested while a document load is pending land on the loaded document.
 *
 * `LoadStatePlugin` commits USJ from inside a `queueMicrotask`, so a consumer that calls
 * `setAnnotation` right after mount — or right after `setUsj` — runs while the editor still holds
 * the empty initial document or the outgoing one. Applied then, the annotation would be lost one
 * of two ways:
 *   a) the range cannot resolve, so `$getRangeFromUsjSelection` returns undefined and the
 *      plugin only logs "Failed to find start or end node of the annotation.";
 *   b) the range does resolve against the outgoing document, and the load's
 *      `editor.setEditorState()` then replaces the whole state, discarding the mark.
 *
 * Neither surfaces to the caller, so the editor defers annotation calls until the load finishes.
 * These tests drive the real Editor through its ref, the way an app does.
 * The gate's own ordering rules are pinned in `use-load-gate.hook.test.ts`.
 */
import {
  allRange,
  chapterNumbers,
  createLogMock,
  createLoggerMock,
  earthRange,
  LogMock,
  markTexts,
  usjGen2,
  v1Text,
} from "./annotation.test-helpers";
import Editor from "./Editor";
import { EditorRef } from "./editor.model";
import { Usj, USJ_TYPE, USJ_VERSION } from "@eten-tech-foundation/scripture-utilities";
import { act, render } from "@testing-library/react";
import { createRef, useEffect, useLayoutEffect, useRef } from "react";
import { getViewOptions, ViewOptions } from "shared-react";
import { vi } from "vitest";

const NO_RANGE_LOGGED = "Failed to find start or end node of the annotation.";

/**
 * A second document, to exercise the same race on a later `setUsj` load. Same `v1Text` at the same
 * json-path as Genesis 2, so `earthRange` resolves against either — which is why the tests below
 * assert on the chapter number too, otherwise a load that never happened would look identical.
 */
const usjGen3: Usj = {
  type: USJ_TYPE,
  version: USJ_VERSION,
  content: [
    { type: "chapter", marker: "c", number: "3" },
    {
      type: "para",
      marker: "p",
      content: [{ type: "verse", marker: "v", number: "1" }, v1Text],
    },
  ],
};

/**
 * A consumer that annotates from its own mount effect — the realistic shape of this bug. The
 * effect runs right after the editor commits, while the load microtask is still pending, and it
 * is the first moment a consumer can legitimately touch the ref.
 */
function AnnotatingHost({
  annotate,
  logError,
}: {
  annotate: (editor: EditorRef) => void;
  logError: LogMock;
}) {
  const ref = useRef<EditorRef>(null);
  useEffect(() => {
    if (ref.current) annotate(ref.current);
  }, [annotate]);
  return <Editor ref={ref} defaultUsj={usjGen2} logger={createLoggerMock(logError)} />;
}

describe("annotating before the first content commit", () => {
  it("applies an annotation requested from the consumer's mount effect", async () => {
    const logError = createLogMock();

    await act(async () => {
      render(
        <AnnotatingHost
          logError={logError}
          annotate={(editor) => editor.setAnnotation(earthRange, "spelling", "a1")}
        />,
      );
    });

    expect(logError).not.toHaveBeenCalled();
    expect(markTexts()).toEqual(["earth"]);
  });

  it("applies an annotation requested in the same tick as setUsj", async () => {
    const logError = createLogMock();
    const ref = createRef<EditorRef>();

    await act(async () => {
      render(<Editor ref={ref} defaultUsj={usjGen2} logger={createLoggerMock(logError)} />);
    });

    // Swap the document and annotate immediately, without awaiting the reload.
    await act(async () => {
      ref.current?.setUsj(usjGen3);
      ref.current?.setAnnotation(earthRange, "spelling", "a2");
    });

    expect(logError).not.toHaveBeenCalled();
    // The Genesis 3 document really did load: without this the test would also pass if `setUsj`
    // had done nothing, since `earthRange` resolves against Genesis 2 as well.
    expect(chapterNumbers()).toEqual(["3"]);
    expect(markTexts()).toEqual(["earth"]);
  });

  it("applies a removal issued after a deferred set but before the load lands", async () => {
    // Both calls queue behind the load, so they would drain back to back — and `AnnotationPlugin`
    // resolves a removal through a map its node-mutation listener fills only at commit, so a
    // removal run in the same tick as its set finds nothing. The queue keeps only the last call
    // per annotation, so the set is dropped and nothing is left marked. `onRemove` does not fire:
    // the set never ran, so the host never saw a mark to lose.
    const logError = createLogMock();
    const onRemove = vi.fn();
    const ref = createRef<EditorRef>();

    await act(async () => {
      render(<Editor ref={ref} defaultUsj={usjGen2} logger={createLoggerMock(logError)} />);
    });

    await act(async () => {
      ref.current?.setUsj(usjGen3);
      ref.current?.setAnnotation(earthRange, "spelling", "a", { onRemove });
      // A later host message, still before React re-renders for the load.
      await Promise.resolve();
      await Promise.resolve();
      ref.current?.removeAnnotation("spelling", "a");
    });

    expect(logError).not.toHaveBeenCalled();
    expect(chapterNumbers()).toEqual(["3"]);
    expect(markTexts()).toEqual([]);
    expect(onRemove).not.toHaveBeenCalled();
  });

  it("leaves one mark when the same annotation is re-set before the load lands", async () => {
    // The Find shape: one fixed id re-set as the user steps through results.
    const logError = createLogMock();
    const ref = createRef<EditorRef>();

    await act(async () => {
      render(<Editor ref={ref} defaultUsj={usjGen2} logger={createLoggerMock(logError)} />);
    });

    await act(async () => {
      ref.current?.setUsj(usjGen3);
      ref.current?.setAnnotation(earthRange, "find", "current");
      await Promise.resolve();
      await Promise.resolve();
      ref.current?.setAnnotation(allRange, "find", "current");
    });

    expect(logError).not.toHaveBeenCalled();
    expect(chapterNumbers()).toEqual(["3"]);
    expect(markTexts()).toEqual(["all"]);
  });

  it("applies an annotation a host re-requests in its layout effect when it changes the view", async () => {
    // A view-option change reloads the document. A host's layout effect runs before every passive
    // effect, so the load's start has to be reported in the layout phase too: `LoadStatePlugin`, a
    // descendant of the host, reports it from its own layout effect, which runs first.
    const logError = createLogMock();
    const formatted = getViewOptions("formatted");
    if (!formatted) throw new Error("Expected formatted view options to exist");
    // Created once: a new logger object per render would itself reload the document every render.
    const logger = createLoggerMock(logError);

    function ViewSwitchingHost({ view }: { view: ViewOptions }) {
      const ref = useRef<EditorRef>(null);
      useLayoutEffect(() => {
        ref.current?.setAnnotation(earthRange, "spelling", "view-change");
      }, [view]);
      return <Editor ref={ref} defaultUsj={usjGen2} options={{ view }} logger={logger} />;
    }

    let rerender: ReturnType<typeof render>["rerender"] = () => undefined;
    await act(async () => {
      ({ rerender } = render(<ViewSwitchingHost view={formatted} />));
    });
    expect(markTexts()).toEqual(["earth"]);

    await act(async () => {
      rerender(<ViewSwitchingHost view={{ ...formatted, showCharMarkerTitles: true }} />);
    });

    expect(logError).not.toHaveBeenCalled();
    expect(markTexts()).toEqual(["earth"]);
  });

  it("applies an annotation requested in the same tick as a forced reload of the same document", async () => {
    // `setUsj` with `force` and an unchanged document reloads through the plugin's `key` remount
    // rather than a new `scripture` value.
    const logError = createLogMock();
    const ref = createRef<EditorRef>();

    await act(async () => {
      render(<Editor ref={ref} defaultUsj={usjGen2} logger={createLoggerMock(logError)} />);
    });

    await act(async () => {
      ref.current?.setUsj(usjGen2, { force: true });
      ref.current?.setAnnotation(earthRange, "spelling", "forced");
    });

    expect(logError).not.toHaveBeenCalled();
    expect(markTexts()).toEqual(["earth"]);
  });

  it("keeps deferred annotations of different types that share an id", async () => {
    // Only a later call for the SAME annotation replaces a deferred one; type and id together name
    // an annotation.
    const logError = createLogMock();
    const ref = createRef<EditorRef>();

    await act(async () => {
      render(<Editor ref={ref} defaultUsj={usjGen2} logger={createLoggerMock(logError)} />);
    });

    await act(async () => {
      ref.current?.setUsj(usjGen3);
      ref.current?.setAnnotation(earthRange, "spelling", "shared-id");
      ref.current?.setAnnotation(allRange, "find", "shared-id");
    });

    expect(logError).not.toHaveBeenCalled();
    expect(chapterNumbers()).toEqual(["3"]);
    expect(markTexts()).toEqual(["earth", "all"]);
  });

  it("reloads on a forced setUsj through an API object from an earlier render", async () => {
    // The ref's API object is rebuilt every render, so an older one compares the incoming document
    // against an older `usj`. A forced load must happen anyway: the gate is already closed for it.
    const logError = createLogMock();
    const ref = createRef<EditorRef>();

    await act(async () => {
      render(<Editor ref={ref} defaultUsj={usjGen2} logger={createLoggerMock(logError)} />);
    });
    const earlierApi = ref.current;

    await act(async () => {
      ref.current?.setUsj(usjGen3);
    });
    await act(async () => {
      earlierApi?.setUsj(usjGen3, { force: true });
    });

    // Nothing is loading now, so this has to land rather than wait for a load that never comes.
    await act(async () => {
      ref.current?.setAnnotation(earthRange, "spelling", "after-forced");
    });

    expect(logError).not.toHaveBeenCalled();
    expect(chapterNumbers()).toEqual(["3"]);
    expect(markTexts()).toEqual(["earth"]);
  });

  it("reloads on an unforced setUsj of the held document through an API object from an earlier render, after an edit", async () => {
    // The edit makes the document differ from the one re-sent, so the call loads. The earlier
    // object's own `usj` differs too, while the state already holds this very object, so the
    // decision to remount the loader cannot rest on either of those.
    const logError = createLogMock();
    const ref = createRef<EditorRef>();

    await act(async () => {
      render(<Editor ref={ref} defaultUsj={usjGen2} logger={createLoggerMock(logError)} />);
    });
    const earlierApi = ref.current;

    await act(async () => {
      ref.current?.setUsj(usjGen3);
    });
    // The fixture text has no capital Z, so it marks the edit on screen.
    await act(async () => {
      ref.current?.applyUpdate([{ retain: 3 }, { insert: "Z" }], "local");
    });
    expect(document.body.textContent).toContain("Z");

    await act(async () => {
      earlierApi?.setUsj(usjGen3);
    });
    // Read from the screen, not `getUsj()`, which reports the re-sent document whether or not it
    // loaded: the edit is gone only if the load really happened.
    expect(document.body.textContent).not.toContain("Z");

    // Nothing is loading now, so this has to land rather than wait for a load that never comes.
    await act(async () => {
      ref.current?.setAnnotation(earthRange, "spelling", "after-unforced");
    });

    expect(logError).not.toHaveBeenCalled();
    expect(chapterNumbers()).toEqual(["3"]);
    expect(markTexts()).toEqual(["earth"]);
  });

  it("still reports a range that can never resolve, instead of queueing it forever", async () => {
    const logError = createLogMock();

    await act(async () => {
      render(
        <AnnotatingHost
          logError={logError}
          annotate={(editor) =>
            editor.setAnnotation(
              {
                start: { jsonPath: "$.content[99].content[0]", offset: 0 },
                end: { jsonPath: "$.content[99].content[0]", offset: 3 },
              },
              "spelling",
              "bad",
            )
          }
        />,
      );
    });

    // Deferring must not swallow genuine failures: once the document is live the annotation is
    // attempted and fails loudly, with the same message an undeferred call logs, so this cannot go
    // green on an unrelated error.
    expect(logError).toHaveBeenCalledWith(NO_RANGE_LOGGED);
    expect(markTexts()).toEqual([]);
  });
});
