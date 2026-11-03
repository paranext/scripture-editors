/**
 * A nameless character marker: ParatextData reads a bare `\` inside a footnote (`\f + \ft \ b\f*`)
 * as a character span whose style is empty, `<char style="" status="unknown">`. The empty name is
 * the marker the file has, so the editor hands it back as `marker: ""`, and the USX written from
 * that is the USX it was loaded from (in the converters' own form: they drop the derived `status`
 * and write `style` first).
 */
import { EDITING_VIEWS, forEachView, mountInView } from "../editorViews.test-helpers";
import {
  MarkerObject,
  usjToUsxString,
  usxStringToUsj,
} from "@eten-tech-foundation/scripture-utilities";
import { describe, expect, it } from "vitest";

/**
 * What ParatextData's USX provider hands over for `\f + \fr 1.1 \ft \ b\f*` (an unclosed nameless
 * span, its note closed by `\f*`) and `\f + \ft \ b\* c\f*` (one closed by a bare `\*`), each in
 * its own paragraph.
 */
const NAMELESS_CHAR_USX =
  '<usx version="3.0"><book code="2SA" style="id">testUSFM corpus capture</book>' +
  '<chapter number="1" style="c" sid="2SA 1"/>' +
  '<para style="p">text<note caller="+" style="f"><char style="fr" closed="false">1.1 </char>' +
  '<char style="ft" closed="false"/><char style="" status="unknown" closed="false">b</char>' +
  "</note> end</para>" +
  '<para style="p">text<note caller="+" style="f"><char style="ft" closed="false"/>' +
  '<char style="" status="unknown">b</char> c</note> end</para>' +
  '<chapter eid="2SA 1"/></usx>';

/** {@link NAMELESS_CHAR_USX} as the converters write it. */
const CONVERTED_USX =
  '<usx version="3.0"><book style="id" code="2SA">testUSFM corpus capture</book>' +
  '<chapter style="c" number="1" sid="2SA 1"/>' +
  '<para style="p">text<note style="f" caller="+"><char style="fr" closed="false">1.1 </char>' +
  '<char style="ft" closed="false"/><char style="" closed="false">b</char></note> end</para>' +
  '<para style="p">text<note style="f" caller="+"><char style="ft" closed="false"/>' +
  '<char style="">b</char> c</note> end</para>' +
  '<chapter eid="2SA 1"/></usx>';

/** The nameless spans in `content`, wherever they are nested. */
function namelessChars(content: MarkerObject["content"]): MarkerObject[] {
  return (content ?? []).flatMap((item) => {
    if (typeof item === "string") return [];
    const inner = namelessChars(item.content);
    return item.type === "char" && item.marker === "" ? [item, ...inner] : inner;
  });
}

describe("a nameless character marker", () => {
  it("reads from ParatextData's USX as an empty marker", () => {
    expect(namelessChars(usxStringToUsj(NAMELESS_CHAR_USX).content)).toEqual([
      { type: "char", marker: "", closed: "false", content: ["b"] },
      { type: "char", marker: "", content: ["b"] },
    ]);
  });

  it("converts USX to USJ and back keeping the empty style", () => {
    const converted = usjToUsxString(usxStringToUsj(NAMELESS_CHAR_USX));
    expect(converted).toBe(CONVERTED_USX);
    expect(usjToUsxString(usxStringToUsj(converted))).toBe(CONVERTED_USX);
  });

  forEachView(EDITING_VIEWS, ({ view }) => {
    it("loads and hands back unchanged, its USX byte-identical", async () => {
      const usj = usxStringToUsj(NAMELESS_CHAR_USX);
      const mounted = await mountInView(usj, view);
      const saved = mounted.ref.current?.getUsj();
      mounted.unmount();

      expect(saved).toEqual(usj);
      expect(saved && usjToUsxString(saved)).toBe(CONVERTED_USX);
    });
  });
});
