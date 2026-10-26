import { displayTextToUsj, toUsfmNbspSpelling, usjTextToDisplay } from "./whitespaceDisplay.utils";
import { NBSP, NBSP_SYMBOL } from "shared";

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
    expect(toUsfmNbspSpelling(`a~b${NBSP_SYMBOL}c`, standard)).toBe(`a~b${NBSP_SYMBOL}c`);
    expect(toUsfmNbspSpelling("a~b", undefined)).toBe("a~b");
  });

  it("turns each displayed no-break space into U+00A0 when `~` is an ordinary character", () => {
    expect(
      toUsfmNbspSpelling(`a~b${NBSP_SYMBOL}c`, { ...standard, allowInvisibleCharacters: true }),
    ).toBe(`a~b${NBSP}c`);
  });
});
