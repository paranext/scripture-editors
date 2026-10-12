/**
 * Suspending the gesture-free settle clocks (`EditorRef.setMarkerSettleSuspended`).
 *
 * A host that opens its own surface over the editor — a marker palette — needs the document to
 * hold still while it is open, and the two clocks that fire with NO user gesture are what break
 * that. Both do it the same way: a settle updates the editor, an update moves the selection, and
 * moving the selection makes Lexical focus the editor root — pulling focus out of the surface,
 * which the host then dismisses on the window blur that follows.
 *
 * - The BLUR clock fires the instant the surface takes focus. Its existing caret-node exception
 *   already protects the literal the palette is about to consume, so what remains is every OTHER
 *   pending node — and settling those is what produces the update.
 * - The IDLE clock fires about a second later, closing a surface the user is still looking at.
 *
 * Why a delay change is not enough, which is the case the last test here pins: the engine reads
 * `markerSettleDelayMs` when it next ARMS the clock, so a timer armed before the host changed the
 * delay still fires. Suspending cancels the armed timer outright.
 */

import {
  COMMIT_PENDING_MARKERS_COMMAND,
  IDLE_SETTLE_DELAY_MS,
  SET_MARKER_SETTLE_SUSPENDED_COMMAND,
} from "./MarkerEditPlugin";
import { $appendCharPara, $pendGlyphEdit, testEnvironment } from "./markerEdit.test-helpers";
import { $createMarkerNode, $createParaNode, MarkerNode, NBSP, ParaNode } from "shared";
import { act } from "@testing-library/react";
import { $createTextNode, $getRoot, BLUR_COMMAND, LexicalEditor } from "lexical";

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
 * What `EditorRef.setMarkerSettleSuspended` does — that method is a one-line dispatch of this
 * command, so driving the command here tests the mechanism rather than the wrapper.
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
      editor.dispatchCommand(BLUR_COMMAND, null as never);
    });

    editor.getEditorState().read(() => expect(para.getMarker()).toBe("s1"));
  });

  it("lets the BLUR clock run again once resumed", async () => {
    let para!: ParaNode;
    let marker!: MarkerNode;
    const { editor } = await testEnvironment(() => ({ para, marker } = $appendHeadingPara()));
    await act(async () => editor.update(() => $pendGlyphEdit(marker, "\\s2")));

    await setSuspended(editor, true);
    await setSuspended(editor, false);
    await act(async () => {
      editor.dispatchCommand(BLUR_COMMAND, null as never);
    });

    editor.getEditorState().read(() => expect(para.getMarker()).toBe("s2"));
  });

  it("leaves a GESTURE-driven settle alone while suspended", async () => {
    // Deliberately narrow: the user explicitly asking for a settle is not what this protects
    // against, so `commitPendingMarkerEdits` still works with a surface open.
    let parts!: ReturnType<typeof $appendCharPara>;
    const { editor } = await testEnvironment(() => {
      parts = $appendCharPara();
    });
    await $retypeOpenerBare(editor, parts);

    await setSuspended(editor, true);
    await forceCommit(editor);

    expectSettled(editor, parts);
  });
});
