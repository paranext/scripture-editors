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

    it("should preserve a version that is not 3.x unchanged", () => {
      const usj = usxStringToUsj(usxGen1v1.replace('<usx version="3.1">', '<usx version="2.5">'));
      expect(usj.version).toBe("2.5");
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

  // ParatextData writes USX as XML 1.0, where only CR and CR LF are line ends. XML 1.1 (xmldom's
  // default) also folds NEL, LINE SEPARATOR and PARAGRAPH SEPARATOR into a line feed, which the save
  // path then stores as a space.
  describe("line ends", () => {
    const usxWithText = (text: string, lemma = "x") =>
      `<usx version="3.0"><book code="GEN" style="id" /><para style="p">` +
      `his${text}royal<char style="w" lemma="${lemma}">word</char></para></usx>`;

    it.each([
      ["U+2028", "\u2028"],
      ["U+2029", "\u2029"],
      ["U+0085", "\u0085"],
    ])("should keep a stored %s in text exactly", (_, character) => {
      const usj = usxStringToUsj(usxWithText(character));
      expect(usj.content[1]).toEqual({
        type: "para",
        marker: "p",
        content: [
          `his${character}royal`,
          { type: "char", marker: "w", lemma: "x", content: ["word"] },
        ],
      });
    });

    it.each([
      ["U+2028", "\u2028"],
      ["U+2029", "\u2029"],
      ["U+0085", "\u0085"],
    ])("should keep a stored %s that is a whole text node", (_, character) => {
      const usj = usxStringToUsj(
        `<usx version="3.0"><book code="GEN" style="id" /><para style="p">` +
          `<char style="w">a</char>${character}<char style="w">b</char></para></usx>`,
      );
      expect(usj.content[1]).toEqual({
        type: "para",
        marker: "p",
        content: [
          { type: "char", marker: "w", content: ["a"] },
          character,
          { type: "char", marker: "w", content: ["b"] },
        ],
      });
    });

    it.each([
      ["U+2028", "\u2028"],
      ["U+2029", "\u2029"],
      ["U+0085", "\u0085"],
    ])("should keep a stored %s in an attribute value exactly", (_, character) => {
      const usj = usxStringToUsj(usxWithText(" ", `a${character}b`));
      expect(usj.content[1]).toMatchObject({
        content: ["his royal", { type: "char", marker: "w", lemma: `a${character}b` }],
      });
    });

    it.each([
      ["CR LF", "\r\n"],
      ["a lone CR", "\r"],
    ])("should still read %s in text as a line feed", (_, lineEnd) => {
      const usj = usxStringToUsj(usxWithText(`${lineEnd}x`));
      expect(usj.content[1]).toMatchObject({ content: ["his\nxroyal", expect.anything()] });
    });
  });

  // ParatextData writes `vid` on every paragraph that continues a verse, empty in a chapter after
  // the first. A paragraph attribute the editor does not know keeps its typed markers from being
  // read as markers, so the derived ones are dropped whatever their value.
  it.each([
    ["a filled vid", ' vid="GEN 1:1"'],
    ["an empty vid", ' vid=""'],
    ["a filled status", ' status="unknown"'],
    ["an empty status", ' status=""'],
  ])("drops %s from a paragraph", (_, attribute) => {
    const usj = usxStringToUsj(
      `<usx version="3.0"><book code="GEN" style="id" /><chapter number="2" style="c" sid="" />` +
        `<para style="q2"${attribute}>continued</para></usx>`,
    );
    expect(usj.content[2]).toEqual({ type: "para", marker: "q2", content: ["continued"] });
  });
});
