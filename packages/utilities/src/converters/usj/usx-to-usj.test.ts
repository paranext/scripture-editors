import {
  usjGen1v1,
  usjGen1v1ImpliedPara,
  usjGen1v1ImpliedParaEmpty,
  usjGen1v1Nonstandard,
  usjGen1v1Whitespace,
  usjWithUnknownItems,
  usxGen1v1,
  usxGen1v1ImpliedPara,
  usxGen1v1ImpliedParaEmpty,
  usxGen1v1Nonstandard,
  usxGen1v1Whitespace,
  usxWithUnknownItems,
} from "./converter-test.data.js";
import { EMPTY_USJ, USJ_VERSION } from "./usj.model.js";
import { usxStringToUsj } from "./usx-to-usj.js";
import { usjToUsxString } from "./usj-to-usx.js";
import { EMPTY_USX } from "./usx.model.js";

describe("USX to USJ Converter", () => {
  it("should convert from empty USX to USJ", () => {
    const usj = usxStringToUsj(EMPTY_USX);
    expect(usj).toEqual(EMPTY_USJ);
  });

  it("should convert from USX to USJ", () => {
    const usj = usxStringToUsj(usxGen1v1);
    expect(usj).toEqual(usjGen1v1);
  });

  it("should convert from USX to USJ with empty implied paragraphs", () => {
    const usj = usxStringToUsj(usxGen1v1ImpliedParaEmpty);
    expect(usj).toEqual(usjGen1v1ImpliedParaEmpty);
  });

  it("should convert from USX to USJ with implied paragraphs", () => {
    const usj = usxStringToUsj(usxGen1v1ImpliedPara);
    expect(usj).toEqual(usjGen1v1ImpliedPara);
  });

  it("should convert from USX to USJ with unknown items", () => {
    const usj = usxStringToUsj(usxWithUnknownItems);
    expect(usj).toEqual(usjWithUnknownItems);
  });

  it("should convert from USX to USJ with special whitespace", () => {
    const usj = usxStringToUsj(usxGen1v1Whitespace);
    expect(usj).toEqual(usjGen1v1Whitespace);
  });

  it("should convert from USX to USJ with nonstandard features", () => {
    const usj = usxStringToUsj(usxGen1v1Nonstandard);
    expect(usj).toEqual(usjGen1v1Nonstandard);
  });

  describe("version", () => {
    it.each(["3.0", "3.1"])("should keep the version %s the USX declares", (version) => {
      const usj = usxStringToUsj(
        usxGen1v1.replace('<usx version="3.1">', `<usx version="${version}">`),
      );
      expect(usj.version).toBe(version);
      expect(usj.content).toEqual(usjGen1v1.content);
    });

    it("should use USJ_VERSION when the USX declares no version", () => {
      const usj = usxStringToUsj(usxGen1v1.replace('<usx version="3.1">', "<usx>"));
      expect(usj.version).toBe(USJ_VERSION);
    });

    it("should use USJ_VERSION when the USX declares an empty version", () => {
      const usj = usxStringToUsj(usxGen1v1.replace('<usx version="3.1">', '<usx version="">'));
      expect(usj.version).toBe(USJ_VERSION);
    });
  });

  describe("the \\usfm version header", () => {
    // What ParatextData 9.5 writes for `\id GEN\n\usfm 3.0\n\c 1 ...` under usfm.sty, where `usfm`
    // is a paragraph marker (UsfmVersionMarkerRoundTripCaptureTests in paranext-core pins it).
    const usxWithUsfmHeader =
      '<usx version="3.0"><book code="GEN" style="id" /><para style="usfm">3.0</para>' +
      '<chapter number="1" style="c" sid="GEN 1" /><para style="p">' +
      '<verse number="1" style="v" sid="GEN 1:1" />In the beginning.<verse eid="GEN 1:1" />' +
      '</para><chapter eid="GEN 1" /></usx>';

    it("should read the header as an ordinary paragraph, independent of the root version", () => {
      const usj = usxStringToUsj(usxWithUsfmHeader.replace('version="3.0"', 'version="3.1"'));
      expect(usj.version).toBe("3.1");
      expect(usj.content[1]).toEqual({ type: "para", marker: "usfm", content: ["3.0"] });
    });

    it("should round-trip the header and the version unchanged", () => {
      const usj = usxStringToUsj(usxWithUsfmHeader);
      const usx = usjToUsxString(usj);
      expect(usx.startsWith('<usx version="3.0">')).toBe(true);
      expect(usx).toContain('<para style="usfm">3.0</para>');
      expect(usxStringToUsj(usx)).toEqual(usj);
    });
  });
});
