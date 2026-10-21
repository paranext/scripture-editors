import type { Usj } from "./usj.model.js";
import { usjToUsxString } from "./usj-to-usx.js";
import { usxStringToUsj } from "./usx-to-usj.js";

/**
 * A marker with no name is a real shape: ParatextData reads `\p \ df` as a paragraph whose style is
 * empty (`<para style="" status="unknown">df</para>`). The empty name is the marker the file has,
 * not a missing one, so it round-trips as `marker: ""` — never as the default paragraph, and never
 * as a leftover `style` attribute beside some other marker.
 */
describe("a nameless marker round-trips", () => {
  const namelessParaUsx =
    '<usx version="3.1"><book code="GEN" style="id" /><para style="" status="unknown">df</para></usx>';
  const namelessParaUsj: Usj = {
    type: "USJ",
    version: "3.1",
    content: [
      { type: "book", marker: "id", code: "GEN" },
      { type: "para", marker: "", content: ["df"] },
    ],
  };

  it("reads an empty style as an empty marker", () => {
    expect(usxStringToUsj(namelessParaUsx)).toEqual(namelessParaUsj);
  });

  it("writes an empty marker as an empty style", () => {
    const usx = usjToUsxString(namelessParaUsj);
    expect(usx).toContain('<para style="">df</para>');
    expect(usxStringToUsj(usx)).toEqual(namelessParaUsj);
  });

  it("keeps the empty style through USX to USJ and back", () => {
    const usx = usjToUsxString(usxStringToUsj(namelessParaUsx));
    expect(usx).toContain('<para style="">df</para>');
  });

  it("still gives an element with no style no marker", () => {
    const usj = usxStringToUsj('<usx version="3.1"><para style="p">a<optbreak />b</para></usx>');
    expect(usj.content).toEqual([
      { type: "para", marker: "p", content: ["a", { type: "optbreak" }, "b"] },
    ]);
    expect(usjToUsxString(usj)).toContain("<optbreak/>");
  });
});
