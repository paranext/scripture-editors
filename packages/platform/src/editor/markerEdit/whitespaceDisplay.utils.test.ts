import {
  controlCharactersToSpaces,
  displayTextToUsj,
  opsForHost,
  opsFromHost,
  toUsfmNbspSpelling,
  usjTextToDisplay,
  usjWithoutControlCharacters,
} from "./whitespaceDisplay.utils";
import { NBSP, NBSP_STAND_IN } from "shared";

describe("usjTextToDisplay", () => {
  it("shows a stored NBSP as a tilde", () => {
    expect(usjTextToDisplay(`3${NBSP}000 men`)).toBe("3~000 men");
  });

  it("shows every space of a multi-space run as NBSP", () => {
    expect(usjTextToDisplay("a  b   c")).toBe(`a${NBSP}${NBSP}b${NBSP}${NBSP}${NBSP}c`);
  });

  it("leaves single spaces alone", () => {
    expect(usjTextToDisplay("a b c")).toBe("a b c");
  });

  it("leaves a single leading space alone (paragraph-leading display is createPara's job)", () => {
    expect(usjTextToDisplay(" lead")).toBe(" lead");
  });

  it("handles NBSP and runs together", () => {
    expect(usjTextToDisplay(`a${NBSP}  b`)).toBe(`a~${NBSP}${NBSP}b`);
  });
});

describe("displayTextToUsj", () => {
  it("maps tilde back to NBSP and display-NBSP back to space", () => {
    expect(displayTextToUsj(`3~000${NBSP}${NBSP}men`)).toBe(`3${NBSP}000  men`);
  });

  it("round-trips with usjTextToDisplay for normalized text", () => {
    const data = `In the days${NBSP}of the judges`;
    expect(displayTextToUsj(usjTextToDisplay(data))).toBe(data);
  });
});

describe("toUsfmNbspSpelling", () => {
  const standard = { markerMode: "editable", hasSpacing: true, isFormattedFont: true } as const;

  it("leaves displayed text alone when the project spells a no-break space `~`", () => {
    expect(toUsfmNbspSpelling(`a~b${NBSP_STAND_IN}c`, standard)).toBe(`a~b${NBSP_STAND_IN}c`);
    expect(toUsfmNbspSpelling("a~b", undefined)).toBe("a~b");
  });

  it("turns each displayed no-break space into U+00A0 when `~` is an ordinary character", () => {
    expect(
      toUsfmNbspSpelling(`a~b${NBSP_STAND_IN}c`, { ...standard, allowInvisibleCharacters: true }),
    ).toBe(`a~b${NBSP}c`);
  });
});

describe("controlCharactersToSpaces", () => {
  it("turns every C0 control character but tab, line feed and carriage return into a space", () => {
    const controls = Array.from({ length: 31 }, (_, index) => String.fromCharCode(index + 1));
    const kept = new Set(["\t", "\n", "\r"]);

    expect([...controlCharactersToSpaces(controls.join(""))]).toEqual(
      controls.map((character) => (kept.has(character) ? character : " ")),
    );
  });

  it("leaves U+0000, U+007F and text without them alone", () => {
    expect(controlCharactersToSpaces("a\u0000b\u007Fc")).toBe("a\u0000b\u007Fc");
  });

  it("is what usjTextToDisplay does first, so U+001A never displays as the stand-in", () => {
    expect(usjTextToDisplay(`a\u001Ab${NBSP}c`, NBSP_STAND_IN)).toBe(`a b${NBSP_STAND_IN}c`);
  });

  it("reaches attribute values and nested content of a document", () => {
    expect(
      usjWithoutControlCharacters({
        type: "USJ",
        version: "3.1",
        content: [
          "a\u001Ab",
          Object.assign(
            { type: "char", marker: "w", content: ["e\u001Ff"] },
            { lemma: "c\u0001d" },
          ),
        ],
      }).content,
    ).toEqual(["a b", { type: "char", marker: "w", lemma: "c d", content: ["e f"] }]);
  });
});

describe("opsForHost and opsFromHost", () => {
  const standard = { markerMode: "editable", hasSpacing: true, isFormattedFont: true } as const;
  const on = { ...standard, allowInvisibleCharacters: true };
  const note = (text: string) => ({
    insert: { note: { style: "f", caller: "+", contents: { ops: [{ insert: text }] } } },
  });

  it("give a host U+00A0 for the stand-in and a space for a run's NBSP, in notes too", () => {
    expect(
      opsForHost([{ insert: `a${NBSP_STAND_IN}b${NBSP}${NBSP}c` }, note(`d${NBSP_STAND_IN}e`)], on),
    ).toEqual([{ insert: `a${NBSP}b  c` }, note(`d${NBSP}e`)]);
  });

  it("keep a marker's own separator and a lone spacer, but not an NBSP after a closer", () => {
    expect(opsForHost([{ insert: `\\nd${NBSP}d\\nd*${NBSP}e` }, { insert: NBSP }], on)).toEqual([
      { insert: `\\nd${NBSP}d\\nd* e` },
      { insert: NBSP },
    ]);
  });

  it("take U+00A0 from a host as the stand-in, except a separator or lone spacer", () => {
    expect(
      opsFromHost(
        [{ insert: `\\nd${NBSP}a${NBSP}b\u001Ac` }, { insert: NBSP }, note(`d${NBSP}e`)],
        on,
      ),
    ).toEqual([
      { insert: `\\nd${NBSP}a${NBSP_STAND_IN}b c` },
      { insert: NBSP },
      note(`d${NBSP_STAND_IN}e`),
    ]);
  });

  it("round-trip the editor's ops", () => {
    const ops = [{ insert: `\\nd${NBSP}a${NBSP_STAND_IN}${NBSP_STAND_IN}b` }];
    expect(opsFromHost(opsForHost(ops, on), on)).toEqual(ops);
  });

  it("change nothing in other views, and only control characters with the option off", () => {
    const formatted = { markerMode: "hidden", hasSpacing: true, isFormattedFont: true } as const;
    const ops = [{ insert: `a${NBSP}${NBSP}b\u001Ac` }];
    expect(opsForHost(ops, { ...formatted, allowInvisibleCharacters: true })).toBe(ops);
    expect(opsFromHost(ops, { ...formatted, allowInvisibleCharacters: true })).toBe(ops);
    expect(opsForHost(ops, standard)).toBe(ops);
    expect(opsFromHost(ops, standard)).toEqual([{ insert: `a${NBSP}${NBSP}b c` }]);
  });
});
