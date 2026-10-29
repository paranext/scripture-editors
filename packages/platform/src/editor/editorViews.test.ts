/**
 * The registry's opt-in for library-only views: what a run with `SE_TEST_LIBRARY_VIEWS` unset
 * leaves out, that leaving a view out never reads as a stale expectation, and that the read-only
 * views the app shows always run, read-only. Each row holds in both kinds of run.
 */
import {
  EDITING_VIEWS,
  EDITOR_VIEWS,
  editorView,
  enabledViews,
  isPopoverHostEnabled,
  isViewEnabled,
  knownFailureRunner,
  LIBRARY_VIEWS_ENABLED,
  mountInView,
  READ_ONLY_VIEWS,
  ROUND_TRIP_VIEW_CONFIGS,
} from "./editorViews.test-helpers";
import { Usj } from "@eten-tech-foundation/scripture-utilities";

const usj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [{ type: "para", marker: "p", content: ["In the beginning"] }],
};

describe("the library-only views opt-in", () => {
  it("runs every view the app offers, and the library-only ones only when opted in", () => {
    for (const entry of EDITOR_VIEWS)
      expect(isViewEnabled(entry), entry.name).toBe(
        LIBRARY_VIEWS_ENABLED || entry.appSurface !== "library-only",
      );
    expect(EDITING_VIEWS.map(({ name }) => name)).toEqual(
      LIBRARY_VIEWS_ENABLED
        ? ["standard", "formatted", "paragraph-structure"]
        : ["standard", "paragraph-structure"],
    );
  });

  it("runs the read-only views the app shows, mounting their options read-only", async () => {
    for (const { name, view } of READ_ONLY_VIEWS) {
      expect(isViewEnabled(name), name).toBe(true);
      expect(editorView(name), name).toBe(view);
      const mounted = await mountInView(usj, view);
      expect(mounted.lexical.isEditable(), name).toBe(false);
      mounted.unmount();
    }
    // Preview mounts formatted's options read-only, so a suite that only reads runs it, not
    // formatted.
    expect(editorView("preview")).toEqual(editorView("formatted"));
    expect(ROUND_TRIP_VIEW_CONFIGS.map(({ label }) => label)).toContain("preview");
    expect(ROUND_TRIP_VIEW_CONFIGS.map(({ label }) => label)).not.toContain("formatted");
    const editable = await mountInView(usj, editorView("preview"), { isReadonly: false });
    expect(editable.lexical.isEditable()).toBe(true);
    editable.unmount();
  });

  it("runs the footnote popover over Standard view, its only host in the app", () => {
    expect(isPopoverHostEnabled("standard")).toBe(true);
    expect(isPopoverHostEnabled("paragraph-structure")).toBe(LIBRARY_VIEWS_ENABLED);
  });

  it("throws on a view the registry does not have", () => {
    expect(() => isViewEnabled("standrad")).toThrow("unknown editor view: standrad");
  });

  it("does not count an expectation for a view this run leaves out as stale", () => {
    const keys = enabledViews(["standard", "formatted", "unformatted"]).map(
      (name) => `${name}: row`,
    );
    expect(() =>
      knownFailureRunner({ "formatted: row": "why", "unformatted: row": "why" }, keys),
    ).not.toThrow();
    expect(() => knownFailureRunner({ "standard: other row": "why" }, keys)).toThrow(
      "known failures name no row: standard: other row",
    );
    // A view left out excuses only a key it is a whole word of.
    expect(() => knownFailureRunner({ "unformattedish: row": "why" }, keys)).toThrow();
  });
});
