/**
 * The registry's opt-in for library-only views: what a run with `SE_TEST_LIBRARY_VIEWS` unset
 * leaves out, and that leaving a view out never reads as a stale expectation. Each row holds in
 * both kinds of run.
 */
import {
  EDITING_VIEWS,
  EDITOR_VIEWS,
  enabledViews,
  isPopoverHostEnabled,
  isViewEnabled,
  knownFailureRunner,
  LIBRARY_VIEWS_ENABLED,
  ROUND_TRIP_VIEW_CONFIGS,
} from "./editorViews.test-helpers";

const libraryOnly = EDITOR_VIEWS.filter(({ appSurface }) => appSurface === "library-only").map(
  ({ name }) => name,
);

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

  it("keeps formatted in a suite that only reads, as Preview's options", () => {
    expect(isViewEnabled("formatted", { readsOnly: true })).toBe(true);
    expect(ROUND_TRIP_VIEW_CONFIGS.map(({ label }) => label)).toContain("formatted");
    expect(enabledViews(libraryOnly, { readsOnly: true })).toEqual(
      LIBRARY_VIEWS_ENABLED ? libraryOnly : ["formatted"],
    );
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
