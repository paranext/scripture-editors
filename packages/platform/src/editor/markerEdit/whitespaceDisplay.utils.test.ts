import {
  controlCharactersToSpaces,
  displayTextToUsj,
  opsForHost,
  opsFromHost,
  textBeforeFromDocumentOps,
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

  it("maps the attribute spelling back to NBSP too, whatever the body text's spelling", () => {
    expect(displayTextToUsj(`a${NBSP_STAND_IN}b~c`)).toBe(`a${NBSP}b${NBSP}c`);
  });

  it("round-trips with usjTextToDisplay for normalized text", () => {
    const data = `In the days${NBSP}of the judges`;
    expect(displayTextToUsj(usjTextToDisplay(data))).toBe(data);
  });
});

describe("toUsfmNbspSpelling", () => {
  const standard = { markerMode: "editable", hasSpacing: true, isFormattedFont: true } as const;

  it("leaves `~` alone when the project spells a no-break space `~`", () => {
    expect(toUsfmNbspSpelling("a~b", standard)).toBe("a~b");
    expect(toUsfmNbspSpelling("a~b", undefined)).toBe("a~b");
  });

  it("turns an attribute value's displayed no-break space into U+00A0 either way", () => {
    expect(toUsfmNbspSpelling(`|h${NBSP_STAND_IN}i~j`, standard)).toBe(`|h${NBSP}i~j`);
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

  it("keep a marker's own separator and spacer, but not an NBSP after a closer", () => {
    expect(
      opsForHost(
        [
          { insert: `\\nd${NBSP}d\\nd*${NBSP}e` },
          { insert: "\\nd" },
          { insert: NBSP },
          { insert: "\\+wj" },
          { insert: `${NBSP}f` },
          { insert: "\\+wj*" },
          { insert: NBSP },
        ],
        on,
      ),
    ).toEqual([
      { insert: `\\nd${NBSP}d\\nd* e` },
      { insert: "\\nd" },
      { insert: NBSP },
      { insert: "\\+wj" },
      { insert: `${NBSP}f` },
      { insert: "\\+wj*" },
      { insert: " " },
    ]);
  });

  it("take U+00A0 from a host as the stand-in, except a separator or spacer", () => {
    expect(
      opsFromHost(
        [
          { insert: `\\nd${NBSP}a${NBSP}b\u001Ac` },
          { insert: "\\nd" },
          { insert: NBSP },
          { insert: `${NBSP}g` },
          note(`d${NBSP}e`),
        ],
        on,
      ),
    ).toEqual([
      { insert: `\\nd${NBSP}a${NBSP_STAND_IN}b c` },
      { insert: "\\nd" },
      { insert: NBSP },
      { insert: `${NBSP_STAND_IN}g` },
      note(`d${NBSP_STAND_IN}e`),
    ]);
  });

  it("take a no-break space that is a whole op's text as one, in notes too", () => {
    const glyph = { insert: "\\nd*", attributes: { char: { style: "nd" } } };
    expect(opsFromHost([glyph, { insert: NBSP }, note(NBSP), { insert: NBSP }], on)).toEqual([
      glyph,
      { insert: NBSP_STAND_IN },
      note(NBSP_STAND_IN),
      { insert: NBSP_STAND_IN },
    ]);
  });

  it("round-trip the editor's ops", () => {
    const ops = [{ insert: `\\nd${NBSP}a${NBSP_STAND_IN}${NBSP_STAND_IN}b` }];
    expect(opsFromHost(opsForHost(ops, on), on)).toEqual(ops);
  });

  it("give and take U+00A0 for the `~` a stored no-break space shows as with the option off", () => {
    expect(opsForHost([{ insert: `a~b${NBSP}${NBSP}c` }, note("d~e")], standard)).toEqual([
      { insert: `a${NBSP}b  c` },
      note(`d${NBSP}e`),
    ]);
    expect(
      opsFromHost([{ insert: `a${NBSP}b\u001Ac` }, { insert: "\\nd" }, { insert: NBSP }], standard),
    ).toEqual([{ insert: "a~b c" }, { insert: "\\nd" }, { insert: NBSP }]);
  });

  it("change nothing in other views", () => {
    const formatted = { markerMode: "hidden", hasSpacing: true, isFormattedFont: true } as const;
    const ops = [{ insert: `a${NBSP}${NBSP}b\u001Ac~` }];
    for (const allowInvisibleCharacters of [true, false]) {
      expect(opsForHost(ops, { ...formatted, allowInvisibleCharacters })).toBe(ops);
      expect(opsFromHost(ops, { ...formatted, allowInvisibleCharacters })).toBe(ops);
    }
  });
});

describe("opsForHost and opsFromHost with the text before an insert", () => {
  const on = {
    markerMode: "editable",
    hasSpacing: true,
    isFormattedFont: true,
    allowInvisibleCharacters: true,
  } as const;
  const before = (document: string) => (position: number) => document.slice(0, position);

  describe("going out, in the document the ops produced", () => {
    it("keeps the separator an insert after a retain starts with, after an opening glyph", () => {
      const document = `In \\nd${NBSP}grace`;
      expect(opsForHost([{ retain: 6 }, { insert: `${NBSP}grace` }], on, before(document))).toEqual(
        [{ retain: 6 }, { insert: `${NBSP}grace` }],
      );
      expect(opsForHost([{ retain: 6 }, { insert: NBSP }], on, before(document))).toEqual([
        { retain: 6 },
        { insert: NBSP },
      ]);
    });

    it("sends an NBSP after a closing glyph as a space", () => {
      const document = `\\nd grace\\nd*${NBSP}of`;
      expect(opsForHost([{ retain: 13 }, { insert: `${NBSP}of` }], on, before(document))).toEqual([
        { retain: 13 },
        { insert: " of" },
      ]);
    });

    it("counts inserts and embeds, but not deletes, on the way to an insert", () => {
      const document = `\\nd\ufffc\\nd${NBSP}b`;
      const embed = { note: { style: "f", caller: "+", contents: { ops: [] } } };
      expect(
        opsForHost(
          [{ retain: 3 }, { delete: 4 }, { insert: embed }, { retain: 3 }, { insert: `${NBSP}b` }],
          on,
          before(document),
        ),
      ).toEqual([
        { retain: 3 },
        { delete: 4 },
        { insert: embed },
        { retain: 3 },
        { insert: `${NBSP}b` },
      ]);
    });

    it("prefers the text insert before an op over the document", () => {
      expect(opsForHost([{ insert: "\\nd*" }, { insert: NBSP }], on, () => "\\nd")).toEqual([
        { insert: "\\nd*" },
        { insert: " " },
      ]);
    });

    it("reads the text of a document's ops, an embed counting as one character", () => {
      const textBefore = textBeforeFromDocumentOps(() => [
        { insert: "ab" },
        { insert: { note: {} } },
        { insert: "c" },
      ]);
      expect(textBefore(0)).toBe("");
      expect(textBefore(3)).toBe("ab\ufffc");
      expect(textBefore(4)).toBe("ab\ufffcc");
    });

    it("does not read the document when no NBSP starts the insert", () => {
      const textBefore = vi.fn(() => "");
      opsForHost(
        [{ retain: 3 }, { insert: "grace" }, { retain: 1 }, { insert: " x" }],
        on,
        textBefore,
      );
      expect(textBefore).not.toHaveBeenCalled();
    });

    it("keeps a note's contents as they were", () => {
      const note = (text: string) => ({
        insert: { note: { style: "f", caller: "+", contents: { ops: [{ insert: text }] } } },
      });
      expect(opsForHost([note(`${NBSP}a`)], on, () => "\\fr")).toEqual([note(" a")]);
    });
  });

  describe("coming in, in the document before the ops apply", () => {
    const document = `In \\nd${NBSP}grace\\nd*${NBSP}of`;

    it("does not respell the separator an insert after a retain starts with", () => {
      expect(opsFromHost([{ retain: 6 }, { insert: `${NBSP}x` }], on, before(document))).toEqual([
        { retain: 6 },
        { insert: `${NBSP}x` },
      ]);
    });

    it("respells an NBSP after a closing glyph", () => {
      expect(opsFromHost([{ retain: 16 }, { insert: `${NBSP}x` }], on, before(document))).toEqual([
        { retain: 16 },
        { insert: `${NBSP_STAND_IN}x` },
      ]);
    });

    it("reads the text before the deleted range for an insert after a delete", () => {
      expect(
        opsFromHost([{ retain: 6 }, { delete: 5 }, { insert: `${NBSP}x` }], on, before(document)),
      ).toEqual([{ retain: 6 }, { delete: 5 }, { insert: `${NBSP}x` }]);
      expect(
        opsFromHost([{ retain: 16 }, { delete: 2 }, { insert: `${NBSP}x` }], on, before(document)),
      ).toEqual([{ retain: 16 }, { delete: 2 }, { insert: `${NBSP_STAND_IN}x` }]);
    });

    it("counts a delete between a retain and the next insert", () => {
      expect(
        opsFromHost([{ delete: 3 }, { retain: 13 }, { insert: `${NBSP}x` }], on, before(document)),
      ).toEqual([{ delete: 3 }, { retain: 13 }, { insert: `${NBSP_STAND_IN}x` }]);
    });
  });
});
