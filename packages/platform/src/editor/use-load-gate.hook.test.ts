/**
 * The load gate's own rules, driven directly rather than through the editor: the races below
 * (a second load starting while an operation is still queued behind the first) cannot be
 * scheduled deterministically from a mounted `Editor`, because both loads and their finish reports
 * are microtasks React owns. `annotation-before-load.test.tsx` covers the same gate as an app uses
 * it.
 */
import { useLoadGate } from "./use-load-gate.hook";
import { act, renderHook } from "@testing-library/react";
import { StrictMode, useEffect } from "react";
import { LoggerBasic } from "shared";
import { vi } from "vitest";

/** Let queued microtasks (the gate's drain, and its teardown report) run. */
async function flushMicrotasks() {
  await act(async () => {
    await Promise.resolve();
  });
}

function createLogger() {
  return {
    error: vi.fn<(...params: unknown[]) => void>(),
    warn: vi.fn<(...params: unknown[]) => void>(),
    info: vi.fn<(...params: unknown[]) => void>(),
    debug: vi.fn<(...params: unknown[]) => void>(),
  } satisfies LoggerBasic;
}

/** The gate starts closed (a load always follows mount), so open it the way a load does. */
function renderOpenGate(logger: LoggerBasic = createLogger()) {
  const rendered = renderHook(() => useLoadGate(logger));
  act(() => {
    rendered.result.current.handleLoadingChange(true);
    rendered.result.current.handleLoadingChange(false);
  });
  return rendered;
}

describe("useLoadGate", () => {
  it("runs an operation immediately when no load is in flight", () => {
    const { result } = renderOpenGate();
    const action = vi.fn();

    act(() => {
      result.current.runWhenLoaded(action);
    });

    expect(action).toHaveBeenCalledTimes(1);
  });

  it("lets an immediate operation throw to its caller", () => {
    const { result } = renderOpenGate();

    expect(() =>
      result.current.runWhenLoaded(() => {
        throw new Error("boom");
      }),
    ).toThrow("boom");
  });

  it("defers an operation issued while a load is in flight until that load finishes", async () => {
    const { result } = renderOpenGate();
    const action = vi.fn();

    act(() => {
      result.current.handleLoadingChange(true);
      result.current.runWhenLoaded(action);
    });
    expect(action).not.toHaveBeenCalled();

    act(() => {
      result.current.handleLoadingChange(false);
    });
    await flushMicrotasks();

    expect(action).toHaveBeenCalledTimes(1);
  });

  it("waits for a load requested before the previous load finishes", async () => {
    // Load A is finishing, but a load B has already been requested (a `setUsj`, or a view-option
    // change React has not re-rendered yet). Draining when A finishes would apply the operation to
    // a document B is about to replace.
    const { result } = renderOpenGate();
    await flushMicrotasks();
    const action = vi.fn();

    act(() => {
      result.current.handleLoadingChange(true); // load A starts
      result.current.runWhenLoaded(action);
      result.current.noteLoadRequested(); // load B is certain
      result.current.handleLoadingChange(false); // load A finishes
    });
    await flushMicrotasks();
    expect(action).not.toHaveBeenCalled();

    act(() => {
      result.current.handleLoadingChange(true); // load B starts
      result.current.handleLoadingChange(false); // load B finishes
    });
    await flushMicrotasks();

    // Once, against B's document — not twice, and not against A's.
    expect(action).toHaveBeenCalledTimes(1);
  });

  it("re-checks the gate when draining after another load is requested", async () => {
    const { result } = renderOpenGate();
    await flushMicrotasks();
    const action = vi.fn();

    act(() => {
      result.current.handleLoadingChange(true);
      result.current.runWhenLoaded(action);
      result.current.handleLoadingChange(false); // schedules the drain with the gate open
      result.current.noteLoadRequested(); // closes the gate before the drain runs
    });
    await flushMicrotasks();
    expect(action).not.toHaveBeenCalled();

    act(() => {
      result.current.handleLoadingChange(true);
      result.current.handleLoadingChange(false);
    });
    await flushMicrotasks();
    expect(action).toHaveBeenCalledTimes(1);
  });

  it("drains overlapping loads only once they have all finished", async () => {
    const { result } = renderOpenGate();
    const action = vi.fn();

    act(() => {
      result.current.handleLoadingChange(true);
      result.current.handleLoadingChange(true);
      result.current.runWhenLoaded(action);
      result.current.handleLoadingChange(false);
    });
    await flushMicrotasks();
    expect(action).not.toHaveBeenCalled();

    act(() => {
      result.current.handleLoadingChange(false);
    });
    await flushMicrotasks();

    expect(action).toHaveBeenCalledTimes(1);
  });

  it("drains in the order the operations were issued", async () => {
    const { result } = renderOpenGate();
    const calls: string[] = [];

    act(() => {
      result.current.handleLoadingChange(true);
      result.current.runWhenLoaded(() => calls.push("set"));
      result.current.runWhenLoaded(() => calls.push("remove"));
      result.current.handleLoadingChange(false);
    });
    await flushMicrotasks();

    expect(calls).toEqual(["set", "remove"]);
  });

  it("keeps only the last queued call for a key, in that call's position", async () => {
    // A queue drains in one tick, so two calls for one annotation would run as a same-tick pair.
    // The load drops whatever the earlier call would have done, so only the last one matters.
    const { result } = renderOpenGate();
    const calls: string[] = [];

    act(() => {
      result.current.handleLoadingChange(true);
      result.current.runWhenLoaded(() => calls.push("first a"), "a");
      result.current.runWhenLoaded(() => calls.push("b"), "b");
      result.current.runWhenLoaded(() => calls.push("second a"), "a");
      result.current.runWhenLoaded(() => calls.push("unkeyed"));
      result.current.runWhenLoaded(() => calls.push("unkeyed again"));
      result.current.handleLoadingChange(false);
    });
    await flushMicrotasks();

    expect(calls).toEqual(["b", "second a", "unkeyed", "unkeyed again"]);
  });

  it("queues a call made after a load finishes but before its drain, behind the waiting work", async () => {
    const { result } = renderOpenGate();
    await flushMicrotasks();
    const calls: string[] = [];

    act(() => {
      result.current.handleLoadingChange(true);
      result.current.runWhenLoaded(() => calls.push("queued"));
      result.current.handleLoadingChange(false); // schedules the drain; the gate now reads open
      result.current.runWhenLoaded(() => calls.push("after the finish"));
    });
    expect(calls).toEqual([]);
    await flushMicrotasks();

    expect(calls).toEqual(["queued", "after the finish"]);
  });

  it("isolates a failing deferred operation: the rest still run, and the failure is logged", async () => {
    const logger = createLogger();
    const { result } = renderOpenGate(logger);
    const after = vi.fn();

    act(() => {
      result.current.handleLoadingChange(true);
      result.current.runWhenLoaded(() => {
        throw new Error("boom");
      });
      result.current.runWhenLoaded(after);
      result.current.handleLoadingChange(false);
    });
    await flushMicrotasks();

    expect(after).toHaveBeenCalledTimes(1);
    expect(logger.error).toHaveBeenCalledWith(expect.stringContaining("boom"));
  });

  it("reports operations still waiting on a load when the editor unmounts", async () => {
    const logger = createLogger();
    const { result, unmount } = renderOpenGate(logger);

    act(() => {
      result.current.handleLoadingChange(true);
      result.current.runWhenLoaded(vi.fn());
    });
    unmount();
    await flushMicrotasks();

    expect(logger.error).toHaveBeenCalledWith(expect.stringContaining("1 operation(s)"));
  });

  it("says nothing about React's development-mode remount, and the re-queued operation still runs", async () => {
    // StrictMode unmounts and immediately remounts on first mount, re-running the consumer's
    // effects. The operation queued in the first pass is cleared at that unmount and queued again
    // by the second, so nothing has been lost and nothing should be reported.
    const logger = createLogger();
    const action = vi.fn();
    const { result } = renderHook(
      () => {
        const gate = useLoadGate(logger);
        const { runWhenLoaded } = gate;
        useEffect(() => {
          // The gate starts closed (a load always follows mount), so this queues.
          runWhenLoaded(action);
        }, [runWhenLoaded]);
        return gate;
      },
      { wrapper: StrictMode },
    );
    await flushMicrotasks();

    expect(logger.error).not.toHaveBeenCalled();

    act(() => {
      result.current.handleLoadingChange(true);
      result.current.handleLoadingChange(false);
    });
    await flushMicrotasks();

    // Once: the first pass's copy was dropped with the unmount it belonged to.
    expect(action).toHaveBeenCalledTimes(1);
  });

  it("says nothing at unmount when the queue is empty", async () => {
    const logger = createLogger();
    const { unmount } = renderOpenGate(logger);

    unmount();
    await flushMicrotasks();

    expect(logger.error).not.toHaveBeenCalled();
  });
});
