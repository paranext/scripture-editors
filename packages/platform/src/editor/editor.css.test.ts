// @vitest-environment node
// (jsdom rewrites `import.meta.url` to an http URL, which breaks the stylesheet read; this test
// only reads a file, so the node environment is the correct one anyway.)
import { readFileSync } from "node:fs";
import { PARA_MARKER_SELECTED_CLASS_NAME } from "shared-react";
import { describe, expect, it } from "vitest";

/**
 * Pins the selected-paragraph-marker rules to the class `ParaMarkerSelectionPlugin` (shared-react)
 * toggles. The rules must stay off pseudo-elements: the same paragraph element carries the active
 * text focus box on `::after` and the book code on `::before`.
 */
describe("editor.css selected paragraph marker", () => {
  const css = readFileSync(new URL("./editor.css", import.meta.url), "utf-8");
  const flatCss = css.replace(/\s+/g, " ");
  const selected = PARA_MARKER_SELECTED_CLASS_NAME;

  it("styles the paragraph and its gutter glyph through the plugin's class", () => {
    expect(flatCss).toContain(`.psc-gutter-markers .para.${selected} {`);
    expect(flatCss).toContain(
      `.psc-gutter-markers .para.${selected} > .marker:not(.verse):not(.chapter):first-child {`,
    );
  });

  it("mirrors the gutter extension in RTL", () => {
    expect(flatCss).toContain(`.psc-gutter-markers[dir="rtl"] .para.${selected} {`);
  });

  it("uses no pseudo-element on the selected class", () => {
    expect(css).not.toMatch(new RegExp(`${selected}[^{]*::?(before|after)`));
  });

  it("sizes the gutter offset by a length computed on the root, not the paragraph's em", () => {
    expect(flatCss).toContain('@property --psc-para-marker-gutter-width { syntax: "<length>";');
    expect(flatCss).not.toMatch(new RegExp(`${selected} \\{[^}]*--psc-gutter-width`));
  });
});
