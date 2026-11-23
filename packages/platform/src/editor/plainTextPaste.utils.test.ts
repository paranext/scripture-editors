import { initialize } from "./adaptors/usj-editor.adaptor";
import { usfmToPlainProse } from "./plainTextPaste.utils";
import { createMarkerLookup, defaultStyleInfo, LoggerBasic, MarkerLookup } from "shared";

const getMarker = createMarkerLookup(defaultStyleInfo);

function prose(text: string, allowInvisibleCharacters?: boolean): string {
  return usfmToPlainProse(text, { getMarker, allowInvisibleCharacters });
}

describe("usfmToPlainProse", () => {
  it("puts a footnote's words inline", () => {
    expect(prose("Yahweh’s\\f + \\fr 1:2 \\ft “Yahweh” is God’s proper Name.\\f* law.")).toBe(
      "Yahweh’s 1:2 “Yahweh” is God’s proper Name. law.",
    );
  });

  it("drops a char style's markers", () => {
    expect(prose("the \\nd Lord\\nd* said")).toBe("the Lord said");
  });

  it("drops the closer of a char span the copy started inside", () => {
    expect(prose("ord\\nd* x")).toBe("ord x");
  });

  it("drops the closer of a note the copy started inside", () => {
    expect(prose("Name.\\f* law.")).toBe("Name. law.");
  });

  it("keeps the words of a note the copy ended inside", () => {
    expect(prose("law \\f + \\fr 1:2 \\ft Yah")).toBe("law 1:2 Yah");
  });

  it("keeps lines as lines", () => {
    expect(prose("\\p one\n\\q1 two")).toBe("one\ntwo");
  });

  it("keeps the space a paragraph's line ends with", () => {
    expect(prose("\\p one \n\\q1 two")).toBe("one \ntwo");
    // Before an inline marker the line break is a space either way.
    expect(prose("\\p one \n\\v 2 two")).toBe("one two");
  });

  it("normalizes CRLF line breaks", () => {
    expect(prose("\\p one\r\n\\p two")).toBe("one\ntwo");
  });

  it("writes no prose for book and chapter lines", () => {
    expect(prose("\\c 2\n\\p \\v 1 text")).toBe("text");
    expect(prose("\\id GEN x\n\\p y")).toBe("y");
  });

  it("drops a chapter in the middle of a line without splitting the line", () => {
    expect(prose("x \\c 5 y")).toBe("x y");
    expect(prose("\\v 3 end. \\c 5 \\v 1 start")).toBe("end. start");
  });

  it("pastes nothing for text whose prose would be empty", () => {
    expect(prose("\\v 5 ")).toBe("");
    expect(prose("\\c 2")).toBe("");
  });

  it("pastes nothing for text whose prose would be only whitespace", () => {
    // Two empty paragraphs convert to a lone line break.
    expect(prose("\\p \n\\p ")).toBe("");
    expect(prose("\\q1 \n\\q2 ")).toBe("");
    expect(prose("\\p\n\\b\n\\p")).toBe("");
  });

  it("pastes nothing for text whose prose displays as nothing", () => {
    // A direction mark or word joiner shows nothing, as `$selectionPlainText` weighs text.
    expect(prose("\\v 5 \u200F")).toBe("");
    expect(prose("\\v 5 \u200E\u2060 ")).toBe("");
  });

  it("counts a stored no-break space as blank, like the space it displays as", () => {
    expect(prose("\\v 5 ~")).toBe("");
    expect(prose("\\v 5 \u00A0", true)).toBe("");
  });

  it("does not trim prose that has words in it", () => {
    expect(prose("a \\nd b\\nd* ")).toBe("a b ");
    expect(prose("\\p one \n\\p ")).toBe("one \n");
  });

  it("drops verse numbers", () => {
    expect(prose("\\v 1 a \\v 2 b")).toBe("a b");
    expect(prose("a \\v 3-4 b")).toBe("a b");
    expect(prose("a \\v 2a b")).toBe("a b");
  });

  it("leaves text that mentions a verse marker unchanged when what follows is no verse number", () => {
    expect(prose("use \\v to mark verses")).toBe("use \\v to mark verses");
  });

  it("leaves text that mentions a note marker unchanged when what follows is no caller", () => {
    expect(prose("\\f See note\\f*")).toBe("\\f See note\\f*");
  });

  it("reads a note with any one-character caller", () => {
    for (const caller of ["+", "-", "*", "a"])
      expect(prose(`x\\f ${caller} \\ft note\\f* y`)).toBe("x note y");
  });

  it("keeps a copy's leading line break, as a copy starting at a paragraph's end writes it", () => {
    expect(prose("\n\\q1 two \\nd Lord\\nd* end text")).toBe("\ntwo Lord end text");
    // After it, a marker still opens a line: an unknown name, or a bare `\`, reads as a paragraph.
    expect(prose("\n\\zunk Un")).toBe("\nUn");
    expect(prose("\n\\ 2 \\v 2 A ")).toBe("\n2 A ");
  });

  it("separates a note's paragraphs with a space, which a hidden-marker copy does not", () => {
    expect(prose("\\f + \\fr 1:1 \\ft First.\\fp Second.\\f*")).toBe("1:1 First. Second.");
    // A paragraph run after whitespace gets no second space.
    expect(prose("\\f + \\ft First. \\fp Second.\\f*")).toBe("First. Second.");
  });

  it("drops the attributes of a char span the copy started inside", () => {
    expect(prose("gracious|grace\\w* and more")).toBe("gracious and more");
    expect(prose('gracious|lemma="grace"\\w* and more')).toBe("gracious and more");
    expect(prose("ruby|gloss\\rb* and more")).toBe("ruby and more");
    expect(prose('Gen 1:1|link-href="GEN 1:1"\\xt* and more')).toBe("Gen 1:1 and more");
    expect(prose('site|link-href="https://ebible.org"\\jmp* and more')).toBe("site and more");
  });

  it("leaves text unchanged when its prose would hold a backslash Standard view reads as a marker", () => {
    expect(prose("a \\\\nd Lord\\nd* end")).toBe("a \\\\nd Lord\\nd* end");
  });

  it("reads a footnote character style that a footnote editor holds on its own", () => {
    expect(prose("\\fq Yahweh\\fq*")).toBe("Yahweh");
  });

  it("keeps an optbreak as its `//`, which a hidden-marker copy drops", () => {
    expect(prose("\\ft see https://ebible.org\\f*")).toBe("see https://ebible.org");
    expect(prose("\\f + \\ft see https://ebible.org\\f*")).toBe("see https://ebible.org");
    expect(prose("a // \\nd b\\nd*")).toBe("a // b");
  });

  it("leaves text holding a marker the stylesheet does not know unchanged", () => {
    expect(prose("C:\\temp\\new")).toBe("C:\\temp\\new");
    expect(prose("x \\zzz y")).toBe("x \\zzz y");
    expect(prose("x \\zzz* y")).toBe("x \\zzz* y");
    expect(prose("x \\+zzz y\\+zzz*")).toBe("x \\+zzz y\\+zzz*");
    expect(prose("x \\f + \\zzz y\\f*")).toBe("x \\f + \\zzz y\\f*");
  });

  it("reads the note category marker, which the stylesheet lacks but USFM defines", () => {
    expect(
      prose(" \\f + \\cat \\+wj stuff \\+wj*\\cat* \\fr 1:2 \\ft Other footnote text.\\f*."),
    ).toBe(" stuff  1:2 Other footnote text. .");
  });

  it("reads a marker the stylesheet does not know as a paragraph where it opens a line", () => {
    expect(prose("r \n\\zunk Unknown marker content.\n\\p Au")).toBe(
      "r \nUnknown marker content.\nAu",
    );
    // A custom `\z…` marker shows the text is USFM, as a marker the stylesheet knows does.
    expect(prose("r \n\\zunk Un")).toBe("r \nUn");
    expect(prose("r \n\\qqq Un\n\\p Au")).toBe("r \nUn\nAu");
    // The same name anywhere but at a line's start is not read as a marker.
    expect(prose("a\n\\zzz b \\zzz c")).toBe("a\n\\zzz b \\zzz c");
    expect(prose("\\zzz b")).toBe("\\zzz b");
    // Nor at the first line's start: a copy that starts at an unknown paragraph marker is pasted
    // as it is.
    expect(prose("\\zunk text\n\\p more")).toBe("\\zunk text\n\\p more");
  });

  it("leaves text that names no USFM marker unchanged, whatever opens its lines", () => {
    for (const text of ["Copy to:\n\\Program Files", "a\n\\temp", "Steps:\n\\section{Intro}"])
      expect(prose(text)).toBe(text);
    for (const text of ["a\n\\", "a\n\\ b"]) expect(prose(text)).toBe(text);
  });

  it("reads a bare backslash that opens a line as a paragraph whose marker has no name", () => {
    expect(prose(". \n\\ 2 \\v 2 A \\bd \n\\ te")).toBe(". \n2 A \nte");
  });

  it("keeps a stray `\\*` that ends no attribute tail at the text's start as its bytes", () => {
    expect(prose("s \n\\t-s \\* and t-e\n\\p Fo")).toBe("s \n\\* and t-e\nFo");
  });

  it("drops the markers of a nested char style", () => {
    expect(prose("\\nd a \\+bd b\\+bd* c\\nd*")).toBe("a b c");
  });

  it("leaves text with no backslash unchanged", () => {
    for (const text of ["plain", "and/or", "a // b", "x~y", "a\u00A0b"])
      expect(prose(text)).toBe(text);
  });

  it("writes a stored no-break space as `~` with invisible characters off", () => {
    expect(prose("a~b \\nd c\\nd*")).toBe("a~b c");
  });

  it("writes a stored no-break space as itself with invisible characters on", () => {
    expect(prose("a\u00A0b \\nd c\\nd*", true)).toBe("a\u00A0b c");
    expect(prose("a~b \\nd c\\nd*", true)).toBe("a~b c");
  });

  it("keeps every stored no-break space, as Standard view's paste reads them", () => {
    expect(prose("alpha \u00A0beta \\nd \u00A0Lord\\nd* gamma\u00A0\u00A0delta", true)).toBe(
      "alpha \u00A0beta \u00A0Lord gamma\u00A0\u00A0delta",
    );
    expect(prose("alpha \u00A0beta \\nd \u00A0Lord\\nd* gamma\u00A0\u00A0delta")).toBe(
      "alpha ~beta ~Lord gamma~~delta",
    );
  });

  it("reads a control character as a space, as Standard view's paste does", () => {
    // U+001A is the editor's stand-in for a stored no-break space with invisible characters on.
    expect(prose("a\u001Ab \\nd c\\nd*", true)).toBe("a b c");
    expect(prose("a\u001Ab \\nd c\\nd*")).toBe("a b c");
  });

  it("drops a milestone's attribute tail that the copy started inside", () => {
    expect(prose("ilate\\*quoted \\nd Lord\\nd* end")).toBe("quoted Lord end");
    expect(prose('ilate"\\*quoted \\nd Lord\\nd* end')).toBe("quoted Lord end");
    // A tail with a space in it is not cleanly an attribute's: its bytes stay.
    expect(prose('n Pilate"\\*quoted \\nd Lord\\nd* end')).toBe('n Pilate"\\*quoted Lord end');
  });

  it("writes no prose for milestones and comments, and adds no comment id of its own", () => {
    const addMissingComments = vi.fn<(usjCommentIds: string[]) => void>();
    // Installs the spy as the adaptor's comment callback. The ids it is handed are whatever the
    // adaptor holds from the last load, so only the pasted comment's own id is checked for.
    initialize({ addMissingComments }, undefined);
    try {
      expect(prose('a \\qt-s |sid="x"\\*b\\qt-e\\* c')).toBe("a b c");
      expect(prose('a \\zmsc-s |sid="c1"\\*b\\zmsc-e |eid="c1"\\* c')).toBe("a b c");
      expect(addMissingComments).toHaveBeenCalled();
      expect(addMissingComments.mock.calls.flatMap(([ids]) => ids)).not.toContain("c1");
    } finally {
      // `initialize` ignores undefined, so this does not uninstall the spy. That is harmless:
      // Vitest isolates files, and no later test in this file serializes.
      initialize(undefined, undefined);
    }
  });

  it("leaves the text unchanged, and warns, when the conversion throws", () => {
    const throwingGetMarker: MarkerLookup = () => {
      throw new Error("no stylesheet");
    };
    const logger: LoggerBasic = { error: vi.fn(), warn: vi.fn(), info: vi.fn(), debug: vi.fn() };
    expect(usfmToPlainProse("\\nd x\\nd*", { getMarker: throwingGetMarker, logger })).toBe(
      "\\nd x\\nd*",
    );
    expect(logger.warn).toHaveBeenCalledTimes(1);
  });
});
