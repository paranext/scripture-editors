/**
 * An annotation requested while a load is in flight lands on the loaded document.
 *
 * `LoadStatePlugin` commits USJ from inside a `queueMicrotask`, so a consumer that calls
 * `setAnnotation` right after mount — or right after `setUsj` — runs while the document is
 * still the empty initial state. Applied then, the annotation would be lost one of two ways:
 *   a) the range cannot resolve, so `$getRangeFromUsjSelection` returns undefined and the
 *      plugin only logs "Failed to find start or end node of the annotation.";
 *   b) the range does resolve against the outgoing document, and the load's
 *      `editor.setEditorState()` then replaces the whole state, discarding the mark.
 *
 * Neither surfaces to the caller, so the editor defers annotation calls until the load settles.
 * These tests drive the real Editor through its ref, the way an app does.
 * The gate's own ordering rules are pinned in `use-load-gate.hook.test.ts`.
 */
import {
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

  it("keeps a set-then-remove pair behaving exactly as it does with no load in flight", async () => {
    // The paranext Insert-Comment shape: set then remove in one handler. Both are gated, so the
    // pair keeps its issue order and the gate changes WHEN it runs, not what it does. (What it
    // does, either way, is leave the mark: `AnnotationPlugin` resolves a removal through a map
    // its node-mutation listener fills at commit, which a same-tick set has not reached yet.)
    const logError = createLogMock();
    const ref = createRef<EditorRef>();

    await act(async () => {
      render(<Editor ref={ref} defaultUsj={usjGen2} logger={createLoggerMock(logError)} />);
    });

    // Nothing loading: both calls run immediately.
    await act(async () => {
      ref.current?.setAnnotation(earthRange, "translator-comment", "pending");
      ref.current?.removeAnnotation("translator-comment", "pending");
    });
    const withoutLoadInFlight = markTexts();
    expect(withoutLoadInFlight).toEqual(["earth"]);

    // Same pair, this time issued in the same tick as a document swap, so both are queued.
    await act(async () => {
      ref.current?.setUsj(usjGen3);
      ref.current?.setAnnotation(earthRange, "translator-comment", "pending");
      ref.current?.removeAnnotation("translator-comment", "pending");
    });

    expect(logError).not.toHaveBeenCalled();
    expect(chapterNumbers()).toEqual(["3"]);
    expect(markTexts()).toEqual(withoutLoadInFlight);
  });

  it("applies an annotation a host re-requests in its layout effect when it changes the view", async () => {
    // A view-option change reloads the document, and `LoadStatePlugin` reports that load from a
    // passive effect. A host's passive effect runs after it, but a host's LAYOUT effect runs before
    // every passive effect, so only the editor's own layout effect can close the gate in time.
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
