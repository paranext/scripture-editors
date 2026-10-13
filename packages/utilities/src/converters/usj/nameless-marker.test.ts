import type { MarkerObject } from "./usj.model.js";
import { usjToUsxString } from "./usj-to-usx.js";
import { usxStringToUsj } from "./usx-to-usj.js";

/**
 * Pins that a marker with no name survives the USX->USJ->USX round trip.
 *
 * A bare backslash in USFM (`\ 2`) is a marker whose name is empty: ParatextData reads it as
 * `<para style="">` and writes that back as `\ 2`, and Paratext 9 shows and saves those bytes as
 * they are. An empty `style` is therefore the author's own byte, not a missing one. Read as absent,
 * the paragraph came into the editor with no marker, which shows it as `\p`, and the next save wrote
 * `\p 2` over the author's `\ 2`.
 */
describe("a nameless marker survives the round trip", () => {
  const usxOf = (body: string) => `<usx version="3.1">${body}</usx>`;

  it("reads an empty style as an empty marker", () => {
    expect(usxStringToUsj(usxOf('<para style="" status="unknown">2</para>')).content).toEqual([
      { type: "para", marker: "", content: ["2"] },
    ]);
  });

  it("reads an empty paragraph with an empty style as an empty marker", () => {
    expect(usxStringToUsj(usxOf('<para style="" />')).content).toEqual([
      { type: "para", marker: "" },
    ]);
  });

  it("writes an empty marker as an empty style", () => {
    const content: MarkerObject[] = [{ type: "para", marker: "", content: ["2"] }];
    const usx = usjToUsxString({ type: "USJ", version: "3.1", content });
    expect(usx).toContain('<para style="">2</para>');
    expect(usxStringToUsj(usx).content).toEqual(content);
  });

  it("still omits a style for an element that has no marker at all", () => {
    const usx = usjToUsxString({ type: "USJ", version: "3.1", content: ["text"] });
    expect(usx).not.toContain("style");
    expect(usxStringToUsj(usxOf("<para>2</para>")).content).toEqual([
      { type: "para", content: ["2"] },
    ]);
  });
});
