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
  SUSPENSION_LIFT_DELAY_MS,
} from "./MarkerEditPlugin";
import {
  $appendCharPara,
  $pendGlyphEdit,
  testEnvironment,
  testEnvironmentWithDisplaySyncs,
} from "./markerEdit.test-helpers";
import {
  $createMarkerNode,
  $createParaNode,
  $isParaNode,
  MarkerNode,
  NBSP,
  ParaNode,
} from "shared";
import { act } from "@testing-library/react";
import {
  $createTextNode,
  $getRoot,
  BLUR_COMMAND,
  FOCUS_COMMAND,
  CLICK_COMMAND,
  KEY_DOWN_COMMAND,
  LexicalEditor,
  SKIP_DOM_SELECTION_TAG,
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

/** Let queued microtasks and the updates they open run, WITHOUT advancing any clock. */
async function flush(): Promise<void> {
  await act(async () => {
    await Promise.resolve();
  });
}

/**
 * Puts real DOM focus on the editor root. The focus-then-wait safeguard re-checks it when the
 * window expires, so a test that only dispatches FOCUS_COMMAND would never reach the lift.
 */
function focusEditorRoot(editor: LexicalEditor): void {
  editor.getRootElement()?.focus();
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
    // settles underneath the open surface about a tick later — well before the idle delay, so a
    // test that only advanced the idle clock would not see it.
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
    // NOT the filter keystrokes: a host that claims those (Platform.Bible stops propagation in a
    // capture-phase window listener) never lets them reach Lexical. What does reach the editor
    // while a session is open are the pass-through keys — modifier and lock keys on the way to a
    // chord, `Dead`, and IME keys — and any of them would re-arm the clock.
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

  it("settles a blur-held edit on RESUME, without waiting out an idle delay", async () => {
    // Paratext 9 reformats when its palette closes, so resume is the moment to settle — not an
    // idle delay later. A non-caret pend is the shape that reaches this: the caret's own node is
    // excepted on resume exactly as it is by the blur and departure clocks.
    let para!: ParaNode;
    let marker!: MarkerNode;
    const { editor } = await testEnvironment(() => ({ para, marker } = $appendHeadingPara()));
    await act(async () => editor.update(() => $pendGlyphEdit(marker, "\\s2")));

    await setSuspended(editor, true);
    await act(async () => {
      editor.dispatchCommand(BLUR_COMMAND, undefined as never);
    });
    editor.getEditorState().read(() => expect(para.getMarker()).toBe("s1"));

    await setSuspended(editor, false);
    await flush();

    // No timer advanced: the settle is the resume's own, not the re-armed idle clock's.
    editor.getEditorState().read(() => expect(para.getMarker()).toBe("s2"));
  });

  it("settles a held edit on RESUME even with the idle clock turned off", async () => {
    // `markerSettleDelayMs: -1` turns the idle clock off, so there is no clock for a resume to
    // re-arm, so a resume that only re-armed would leave a held edit pending until the next
    // keystroke or click, whenever that came.
    let para!: ParaNode;
    let marker!: MarkerNode;
    const { editor } = await testEnvironment(() => ({ para, marker } = $appendHeadingPara()), -1);
    await act(async () => editor.update(() => $pendGlyphEdit(marker, "\\s2")));

    await setSuspended(editor, true);
    await setSuspended(editor, false);
    await flush();

    editor.getEditorState().read(() => expect(para.getMarker()).toBe("s2"));
    // And nothing was waiting on a clock that does not exist.
    await advance(IDLE_SETTLE_DELAY_MS * 10);
    editor.getEditorState().read(() => expect(para.getMarker()).toBe("s2"));
  });

  it("does not settle a departure queued before the suspend but run after it", async () => {
    // The departure guard is checked TWICE: once where the microtask is queued, once where it
    // runs. Only the second check covers a suspend that lands in the gap between them, which is
    // real — the host suspends in its trigger keydown, and a commit from the same keystroke can
    // already have queued the settle. Removing either check alone must fail a test.
    let parts!: ReturnType<typeof $appendCharPara>;
    const { editor } = await testEnvironment(() => {
      parts = $appendCharPara();
    });
    await $retypeOpenerBare(editor, parts);

    await act(async () => {
      // Discrete: the update listener runs inside this call and queues the departure microtask
      // while nothing is suspended, so the queue-time guard lets it through...
      editor.update(
        () => {
          $getRoot().append($createParaNode("p"));
          const para = $getRoot().getFirstChild();
          if ($isParaNode(para)) para.selectEnd();
        },
        { discrete: true },
      );
      // ...and the suspend lands before that microtask runs, which only the run-time guard sees.
      editor.dispatchCommand(SET_MARKER_SETTLE_SUSPENDED_COMMAND, true);
    });
    await flush();

    expectPending(editor, parts);
  });

  it("lifts and settles when the editor keeps focus for the whole window — a missed resume", async () => {
    // Focus-then-wait. A mid-session focus is brief: a replacement surface retakes focus or the
    // host resumes. A focus still held when the window expires is a suspension nobody will release.
    const logger = { error: vi.fn(), warn: vi.fn(), info: vi.fn(), debug: vi.fn() };
    let para!: ParaNode;
    let marker!: MarkerNode;
    const { editor } = await testEnvironmentWithDisplaySyncs(
      () => ({ para, marker } = $appendHeadingPara()),
      logger,
    );
    await act(async () => editor.update(() => $pendGlyphEdit(marker, "\\s2")));
    focusEditorRoot(editor);

    await setSuspended(editor, true);
    await act(async () => {
      editor.dispatchCommand(BLUR_COMMAND, undefined as never);
    });
    await act(async () => {
      editor.dispatchCommand(FOCUS_COMMAND, undefined as never);
    });

    // Nothing cancels it: no surface takes focus back, no resume arrives.
    await advance(SUSPENSION_LIFT_DELAY_MS + 50);
    // The lift resumes, and the resume's settle runs on its own microtask and update.
    await flush();
    await advance(1);
    await flush();

    expect(logger.warn).toHaveBeenCalledWith(expect.stringContaining("held focus"));
    // Settling is RUNNING again, which is the point of the lift. Asserted through the idle clock
    // rather than through the resume's own settle: with focus in the editor the caret's own node
    // is excepted from that one, exactly as the blur and departure clocks except it.
    await advance(IDLE_SETTLE_DELAY_MS * 2);
    await flush();
    editor.getEditorState().read(() => expect(para.getMarker()).toBe("s2"));
  });

  it("does NOT lift when a surface takes focus back inside the window — the `\\` reopen", async () => {
    // The commit-and-reopen case this safeguard previously broke: the host returns focus to the
    // editor to apply the typed marker, then the replacement palette takes it ~70-230ms later.
    const logger = { error: vi.fn(), warn: vi.fn(), info: vi.fn(), debug: vi.fn() };
    let para!: ParaNode;
    let marker!: MarkerNode;
    const { editor } = await testEnvironmentWithDisplaySyncs(
      () => ({ para, marker } = $appendHeadingPara()),
      logger,
    );
    await act(async () => editor.update(() => $pendGlyphEdit(marker, "\\s2")));
    focusEditorRoot(editor);

    await setSuspended(editor, true);
    await act(async () => {
      editor.dispatchCommand(BLUR_COMMAND, undefined as never);
    });
    await act(async () => {
      editor.dispatchCommand(FOCUS_COMMAND, undefined as never);
    });
    await advance(200);
    // The replacement palette takes focus.
    await act(async () => {
      editor.dispatchCommand(BLUR_COMMAND, undefined as never);
    });
    await advance(SUSPENSION_LIFT_DELAY_MS * 2);
    await flush();

    editor.getEditorState().read(() => expect(para.getMarker()).toBe("s1"));
    expect(logger.warn).not.toHaveBeenCalled();
  });

  it("does NOT lift or warn when the host resumes inside the window — a normal close", async () => {
    const logger = { error: vi.fn(), warn: vi.fn(), info: vi.fn(), debug: vi.fn() };
    let marker!: MarkerNode;
    const { editor } = await testEnvironmentWithDisplaySyncs(
      () => ({ marker } = $appendHeadingPara()),
      logger,
    );
    await act(async () => editor.update(() => $pendGlyphEdit(marker, "\\s2")));
    focusEditorRoot(editor);

    await setSuspended(editor, true);
    await act(async () => {
      editor.dispatchCommand(BLUR_COMMAND, undefined as never);
    });
    await act(async () => {
      editor.dispatchCommand(FOCUS_COMMAND, undefined as never);
    });
    await advance(100);
    await setSuspended(editor, false);
    await advance(SUSPENSION_LIFT_DELAY_MS * 2);
    await flush();

    // The resume settled it, not the safeguard — and nothing was reported as a host mistake.
    expect(logger.warn).not.toHaveBeenCalled();
  });

  it("does NOT lift when the editor does not actually hold DOM focus", async () => {
    // FOCUS_COMMAND is a notification, not proof: Lexical dispatches it in situations where the
    // root is not the active element, and the window is long enough for focus to move afterwards
    // without a BLUR this handler saw. The lift re-checks real focus when it fires rather than
    // trusting the command that armed it.
    const logger = { error: vi.fn(), warn: vi.fn(), info: vi.fn(), debug: vi.fn() };
    let para!: ParaNode;
    let marker!: MarkerNode;
    const { editor } = await testEnvironmentWithDisplaySyncs(
      () => ({ para, marker } = $appendHeadingPara()),
      logger,
    );
    await act(async () => editor.update(() => $pendGlyphEdit(marker, "\\s2")));
    // Deliberately NO focusEditorRoot: the root never becomes the active element.

    await setSuspended(editor, true);
    await act(async () => {
      editor.dispatchCommand(BLUR_COMMAND, undefined as never);
    });
    await act(async () => {
      editor.dispatchCommand(FOCUS_COMMAND, undefined as never);
    });
    await advance(SUSPENSION_LIFT_DELAY_MS + 50);
    await flush();

    editor.getEditorState().read(() => expect(para.getMarker()).toBe("s1"));
    expect(logger.warn).not.toHaveBeenCalled();
  });

  it("does NOT lift while the whole iframe has lost focus, even with the root still active", async () => {
    // `activeElement` survives focus leaving the document: a root that was focused stays the
    // active element after the user clicks into another frame, so containment alone still reports
    // "focused". Lifting there would release a suspension the host is legitimately still holding
    // from the frame that now has focus.
    const logger = { error: vi.fn(), warn: vi.fn(), info: vi.fn(), debug: vi.fn() };
    let para!: ParaNode;
    let marker!: MarkerNode;
    const { editor } = await testEnvironmentWithDisplaySyncs(
      () => ({ para, marker } = $appendHeadingPara()),
      logger,
    );
    await act(async () => editor.update(() => $pendGlyphEdit(marker, "\\s2")));
    // The root IS the active element — only the document-level focus is gone.
    focusEditorRoot(editor);
    const rootDocument = editor.getRootElement()?.ownerDocument;
    if (!rootDocument) throw new Error("editor has no root element");
    const hasFocusSpy = vi.spyOn(rootDocument, "hasFocus").mockReturnValue(false);

    try {
      await setSuspended(editor, true);
      await act(async () => {
        editor.dispatchCommand(BLUR_COMMAND, undefined as never);
      });
      await act(async () => {
        editor.dispatchCommand(FOCUS_COMMAND, undefined as never);
      });
      await advance(SUSPENSION_LIFT_DELAY_MS + 50);
      await flush();

      editor.getEditorState().read(() => expect(para.getMarker()).toBe("s1"));
      expect(logger.warn).not.toHaveBeenCalled();
    } finally {
      hasFocusSpy.mockRestore();
    }
  });

  it("tags the RESUME settle to skip the DOM selection when the editor is blurred", async () => {
    // The resume usually arrives as the host's surface closes, with focus not yet back in the
    // editor. Without the tag Lexical re-asserts the DOM selection for this commit and drags the
    // caret — and focus with it — back into an editor the user has left.
    let marker!: MarkerNode;
    const { editor } = await testEnvironment(() => ({ marker } = $appendHeadingPara()));
    await act(async () => editor.update(() => $pendGlyphEdit(marker, "\\s2")));

    await setSuspended(editor, true);
    await act(async () => {
      editor.dispatchCommand(BLUR_COMMAND, undefined as never);
    });

    const settleTags: Set<string>[] = [];
    // Unregisters itself from inside the callback: a teardown called afterwards, or left to fire
    // during the environment's own unmount commit, throws inside Lexical.
    const stopWatching = editor.registerUpdateListener(({ tags }) => {
      settleTags.push(new Set(tags));
      stopWatching();
    });
    await setSuspended(editor, false);
    await flush();

    expect(settleTags.some((tags) => tags.has(SKIP_DOM_SELECTION_TAG))).toBe(true);
  });

  it("does NOT tag the resume settle when the editor still holds DOM focus", async () => {
    // Focused, the DOM selection is the user's own and Lexical should keep it in step as usual.
    let marker!: MarkerNode;
    const { editor } = await testEnvironment(() => ({ marker } = $appendHeadingPara()));
    await act(async () => editor.update(() => $pendGlyphEdit(marker, "\\s2")));
    focusEditorRoot(editor);

    await setSuspended(editor, true);
    const settleTags: Set<string>[] = [];
    // Unregisters itself from inside the callback: a teardown called afterwards, or left to fire
    // during the environment's own unmount commit, throws inside Lexical.
    const stopWatching = editor.registerUpdateListener(({ tags }) => {
      settleTags.push(new Set(tags));
      stopWatching();
    });
    await setSuspended(editor, false);
    await flush();

    expect(settleTags.some((tags) => tags.has(SKIP_DOM_SELECTION_TAG))).toBe(false);
  });

  it("does not lift the suspension on a focus that arrives before the surface took it", async () => {
    // A host suspends synchronously in its trigger keydown, BEFORE focus moves to the surface, so
    // there is a window where the suspension holds and the editor still has focus. A commit in
    // that window can make Lexical re-assert the DOM selection and focus the root, firing
    // FOCUS_COMMAND. Lifting there would release the suspension before the surface ever had
    // focus — defeating it on the very keystroke that armed it.
    let parts!: ReturnType<typeof $appendCharPara>;
    const { editor } = await testEnvironment(() => {
      parts = $appendCharPara();
    });
    await $retypeOpenerBare(editor, parts);
    await setSuspended(editor, true);

    // Focus, with no blur in between: not a return of focus, so not the safeguard's case.
    await act(async () => {
      editor.dispatchCommand(FOCUS_COMMAND, undefined as never);
    });
    await advance(IDLE_SETTLE_DELAY_MS * 3);

    expectPending(editor, parts);
  });
});
