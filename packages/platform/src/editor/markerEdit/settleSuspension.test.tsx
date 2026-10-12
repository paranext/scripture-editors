/**
 * Suspending the settle clocks a host did not ask for (`EditorRef.setMarkerSettleSuspended`).
 *
 * A host that opens its own surface over the editor — a marker palette — needs the document to
 * stop reformatting underneath it while that surface is open. Three clocks break that, all the
 * same way: a settle commits dirty nodes, and Lexical re-asserts the DOM selection on any such
 * commit, focusing the editor root whenever focus has left it. A surface that dismisses itself on
 * focus loss then closes.
 *
 * - The BLUR clock fires the instant the surface takes focus. Its existing caret-node exception
 *   already protects the literal the palette is about to consume, so what remains is every OTHER
 *   pending node — and settling those is what produces the commit.
 * - The IDLE clock fires one `markerSettleDelayMs` later, closing a surface the user is still
 *   looking at.
 * - The DEPARTURE clock is keyed off every commit, not off a gesture, so an ordinary commit while
 *   the surface is open settles underneath it with no user involved ("an ordinary commit while
 *   suspended does not settle" below).
 *
 * Why a delay change is not enough, which is what "CANCELS a timer that was already armed" pins:
 * the engine reads `markerSettleDelayMs` when it next ARMS the clock, so a timer armed before the
 * host changed the delay still fires. Suspending cancels the armed timer outright.
 */

import {
  COMMIT_PENDING_MARKERS_COMMAND,
  IDLE_SETTLE_DELAY_MS,
  SET_MARKER_SETTLE_SUSPENDED_COMMAND,
} from "./MarkerEditPlugin";
import { $appendCharPara, $pendGlyphEdit, testEnvironment } from "./markerEdit.test-helpers";
import { $createMarkerNode, $createParaNode, MarkerNode, NBSP, ParaNode } from "shared";
import { act } from "@testing-library/react";
import {
  $createTextNode,
  $getRoot,
  BLUR_COMMAND,
  CLICK_COMMAND,
  KEY_DOWN_COMMAND,
  LexicalEditor,
} from "lexical";

/** A heading para with its own marker glyph — same shape the Tier-1 blur tests use. */
function $appendHeadingPara(): { para: ParaNode; marker: MarkerNode } {
  const para = $createParaNode("s1");
  const marker = $createMarkerNode("s1");
  $getRoot().append(para.append(marker, $createTextNode(NBSP), $createTextNode("Heading")));
  return { para, marker };
}

if (typeof Range.prototype.getBoundingClientRect !== "function")
  Range.prototype.getBoundingClientRect = () => new DOMRect();

beforeEach(() => {
  vi.useFakeTimers({ toFake: ["setTimeout", "clearTimeout", "Date"] });
});
afterEach(() => {
  vi.useRealTimers();
});

/** Retype the char opener to a bare literal, caret left inside — pends without settling. */
async function $retypeOpenerBare(
  editor: LexicalEditor,
  parts: ReturnType<typeof $appendCharPara>,
): Promise<void> {
  await act(async () =>
    editor.update(() => {
      parts.marker.setTextContent("\\wj");
      parts.marker.select(3, 3);
    }),
  );
}

function expectPending(editor: LexicalEditor, parts: ReturnType<typeof $appendCharPara>) {
  editor.getEditorState().read(() => expect(parts.char.getMarker()).toBe("nd"));
}
function expectSettled(editor: LexicalEditor, parts: ReturnType<typeof $appendCharPara>) {
  editor.getEditorState().read(() => expect(parts.char.getMarker()).toBe("wj"));
}

/**
 * What `EditorRef.setMarkerSettleSuspended` does. That method is a thin dispatch of this command
 * (`Editor.tsx`), forwarded by `MarginalRef` — driving the command here tests the mechanism; that
 * wiring is not covered by this file.
 */
async function setSuspended(editor: LexicalEditor, suspended: boolean): Promise<void> {
  await act(async () => {
    editor.dispatchCommand(SET_MARKER_SETTLE_SUSPENDED_COMMAND, suspended);
  });
}

/** What `EditorRef.commitPendingMarkerEdits` does: a discrete forced settle. */
async function forceCommit(editor: LexicalEditor): Promise<void> {
  await act(async () =>
    editor.update(() => editor.dispatchCommand(COMMIT_PENDING_MARKERS_COMMAND, undefined), {
      discrete: true,
    }),
  );
}

async function advance(ms: number): Promise<void> {
  await act(async () => {
    await vi.advanceTimersByTimeAsync(ms);
  });
}

describe("setMarkerSettleSuspended", () => {
  it("holds the idle clock while suspended, and settles once resumed", async () => {
    let parts!: ReturnType<typeof $appendCharPara>;
    const { editor } = await testEnvironment(() => {
      parts = $appendCharPara();
    });
    await $retypeOpenerBare(editor, parts);

    await setSuspended(editor, true);

    // Well past the delay: suspended, so nothing settles under the open surface.
    await advance(IDLE_SETTLE_DELAY_MS * 3);
    expectPending(editor, parts);

    await setSuspended(editor, false);
    await advance(IDLE_SETTLE_DELAY_MS + 50);
    expectSettled(editor, parts);
  });

  it("CANCELS a timer that was already armed — the thing a delay change cannot do", async () => {
    let parts!: ReturnType<typeof $appendCharPara>;
    const { editor } = await testEnvironment(() => {
      parts = $appendCharPara();
    });
    // Arm the clock, then let most of the delay elapse before suspending.
    await $retypeOpenerBare(editor, parts);
    await advance(IDLE_SETTLE_DELAY_MS - 100);
    expectPending(editor, parts);

    await setSuspended(editor, true);

    // The original expiry (100ms away) must NOT fire. `markerSettleDelayMs: -1` would not have
    // stopped it: that value is only read the next time something arms the clock.
    await advance(5000);
    expectPending(editor, parts);
  });

  it("re-arms a FULL delay on resume, not the remainder of the cancelled one", async () => {
    let parts!: ReturnType<typeof $appendCharPara>;
    const { editor } = await testEnvironment(() => {
      parts = $appendCharPara();
    });
    await $retypeOpenerBare(editor, parts);
    await advance(IDLE_SETTLE_DELAY_MS - 100);
    await setSuspended(editor, true);
    await advance(5000);
    await setSuspended(editor, false);

    // If the remainder had been preserved this would already have settled.
    await advance(IDLE_SETTLE_DELAY_MS - 100);
    expectPending(editor, parts);

    await advance(200);
    expectSettled(editor, parts);
  });

  it("holds the BLUR clock while suspended", async () => {
    // A pend with NO caret in it — the shape the blur sweep actually settles, since its
    // caret-node exception cannot except anything here. That exception already protects the
    // literal a palette is about to consume; what this covers is every OTHER pending node, and
    // settling one is what produces the update that steals focus back from the palette.
    let para!: ParaNode;
    let marker!: MarkerNode;
    const { editor } = await testEnvironment(() => ({ para, marker } = $appendHeadingPara()));
    await act(async () => editor.update(() => $pendGlyphEdit(marker, "\\s2")));

    await setSuspended(editor, true);
    await act(async () => {
      editor.dispatchCommand(BLUR_COMMAND, undefined as never);
    });

    editor.getEditorState().read(() => expect(para.getMarker()).toBe("s1"));
  });

  // A guard-rail against OVER-suspension rather than a test of the feature: it passes with the
  // feature removed, and fails if a suspension ever stops releasing.
  it("lets the BLUR clock run again once resumed", async () => {
    let para!: ParaNode;
    let marker!: MarkerNode;
    const { editor } = await testEnvironment(() => ({ para, marker } = $appendHeadingPara()));
    await act(async () => editor.update(() => $pendGlyphEdit(marker, "\\s2")));

    await setSuspended(editor, true);
    await setSuspended(editor, false);
    await act(async () => {
      editor.dispatchCommand(BLUR_COMMAND, undefined as never);
    });

    editor.getEditorState().read(() => expect(para.getMarker()).toBe("s2"));
  });

  // Also a guard-rail against over-suspension: it fails the moment someone adds a suspension
  // check to COMMIT_PENDING_MARKERS_COMMAND. Note the host-side rule that makes this safe —
  // `commitPendingMarkerEdits`' own doc forbids issuing one while a palette session is open.
  it("leaves a FORCED commit alone while suspended", async () => {
    // Deliberately narrow: what the host explicitly asks for is not what this protects against,
    // so `commitPendingMarkerEdits` still works with a surface open.
    let parts!: ReturnType<typeof $appendCharPara>;
    const { editor } = await testEnvironment(() => {
      parts = $appendCharPara();
    });
    await $retypeOpenerBare(editor, parts);

    await setSuspended(editor, true);
    await forceCommit(editor);

    expectSettled(editor, parts);
  });

  it("does not settle on an ordinary commit while suspended", async () => {
    // The DEPARTURE clock is keyed off every commit, not off a user gesture, so without its own
    // suspension guard a commit the host or a display-run sync makes — nothing the user did —
    // settles underneath the open surface about a tick later. Regression test: before the guard
    // this settled to "wj" roughly 1ms after the commit, long before the idle delay.
    let parts!: ReturnType<typeof $appendCharPara>;
    const { editor } = await testEnvironment(() => {
      parts = $appendCharPara();
    });
    await $retypeOpenerBare(editor, parts);
    await setSuspended(editor, true);

    await act(async () => editor.update(() => $getRoot().append($createParaNode("p"))));
    await advance(1);
    expectPending(editor, parts);
    await advance(IDLE_SETTLE_DELAY_MS * 2);
    expectPending(editor, parts);
  });

  it("does not let a CLICK re-arm the idle clock while suspended", async () => {
    // `armIdleSettle`'s own guard, which only a re-arm attempt DURING a suspension reaches: the
    // CLICK and KEY_DOWN handlers and every commit re-arm the clock, so without it an open
    // palette that sees any of those settles one idle delay later anyway.
    let parts!: ReturnType<typeof $appendCharPara>;
    const { editor } = await testEnvironment(() => {
      parts = $appendCharPara();
    });
    await $retypeOpenerBare(editor, parts);
    await setSuspended(editor, true);

    await act(async () => {
      editor.dispatchCommand(CLICK_COMMAND, new MouseEvent("click") as never);
    });
    await advance(IDLE_SETTLE_DELAY_MS * 3);

    expectPending(editor, parts);
  });

  it("does not let a KEY_DOWN re-arm the idle clock while suspended", async () => {
    // The palette filters on keystrokes the editor still sees, so this is the re-arm attempt that
    // actually happens in use.
    let parts!: ReturnType<typeof $appendCharPara>;
    const { editor } = await testEnvironment(() => {
      parts = $appendCharPara();
    });
    await $retypeOpenerBare(editor, parts);
    await setSuspended(editor, true);

    await act(async () => {
      editor.dispatchCommand(KEY_DOWN_COMMAND, new KeyboardEvent("keydown", { key: "s" }));
    });
    await advance(IDLE_SETTLE_DELAY_MS * 3);

    expectPending(editor, parts);
  });

  it("ignores a resume dispatched when already resumed", async () => {
    // The resume branch re-arms a FULL delay, so a host driving this from an effect without a
    // change guard would push the settle out on every render and starve the clock. Redispatching
    // the value already in force must therefore do nothing at all.
    let parts!: ReturnType<typeof $appendCharPara>;
    const { editor } = await testEnvironment(() => {
      parts = $appendCharPara();
    });
    await $retypeOpenerBare(editor, parts);

    // Most of one delay goes by, then a redundant resume lands.
    await advance(IDLE_SETTLE_DELAY_MS - 100);
    expectPending(editor, parts);
    await setSuspended(editor, false);

    // The clock the first pend armed is still the one running, so the remaining 100ms settles it.
    await advance(200);
    expectSettled(editor, parts);
  });
});
