import { ATOMIC_SENTINEL } from "./settleShared.utils";
import {
  alignScopeBytes,
  alignUsfmBytes,
  ByteAlignment,
  mapCount,
  mapCountSnapped,
  PLACEHOLDER,
} from "./usfmByteAlignment.utils";

const nows = (s: string) => s.replace(/\s/g, "");

/** Every alignment must tile both strings, in order, with no gaps, overlaps, or reversed sides. */
function expectTiles(alignment: ByteAlignment, liveLength: number, settledLength: number): void {
  let live = 0;
  let settled = 0;
  for (const segment of alignment.segments) {
    expect(segment.liveStart).toBe(live);
    expect(segment.settledStart).toBe(settled);
    expect(segment.liveEnd).toBeGreaterThanOrEqual(segment.liveStart);
    expect(segment.settledEnd).toBeGreaterThanOrEqual(segment.settledStart);
    if (segment.same)
      expect(segment.liveEnd - segment.liveStart).toBe(segment.settledEnd - segment.settledStart);
    live = segment.liveEnd;
    settled = segment.settledEnd;
  }
  expect([live, settled]).toEqual([liveLength, settledLength]);
}

describe("alignUsfmBytes", () => {
  it("maps identical text one for one", () => {
    const a = alignUsfmBytes("abc", "abc");
    expect([0, 1, 2, 3].map((c) => mapCount(a, c, "live"))).toEqual([0, 1, 2, 3]);
  });

  it("collapses a named default attribute to its bare value, value bytes exact", () => {
    const live = nows('\\w grace|lemma="grace"\\w* of');
    const settled = nows("\\w grace|grace\\w* of");
    const a = alignUsfmBytes(live, settled);
    const bar = live.indexOf("|");
    expect(mapCount(a, bar, "live")).toBe(bar); // in front of `|`
    expect(mapCount(a, bar + 3, "live")).toBeUndefined(); // inside `lemma`
    expect(mapCountSnapped(a, bar + 3, "live")).toBe(bar + 1);
    const valueStart = live.indexOf('"') + 1;
    expect(mapCount(a, valueStart + 2, "live")).toBe(bar + 1 + 2); // "gr|ace"
    expect(mapCount(a, live.indexOf("of"), "live")).toBe(settled.indexOf("of"));
    expect(mapCount(a, settled.indexOf("of"), "settled")).toBe(live.indexOf("of"));
  });

  it("maps value bytes, not name bytes, when the value repeats the name", () => {
    const live = nows('\\w lemma|lemma="lemma"\\w*');
    const settled = nows("\\w lemma|lemma\\w*");
    const a = alignUsfmBytes(live, settled);
    const settledValue = settled.indexOf("|") + 1;
    const liveValue = live.indexOf('"') + 1;
    expect(mapCount(a, settledValue + 1, "settled")).toBe(liveValue + 1);
  });

  it("matches renamed keys positionally (figure file → src)", () => {
    const live = nows('\\fig a|file="x.jpg"\\fig*');
    const settled = nows('\\fig a|src="x.jpg"\\fig*');
    const a = alignUsfmBytes(live, settled);
    const lv = live.indexOf("x.jpg");
    expect(mapCount(a, lv + 1, "live")).toBe(settled.indexOf("x.jpg") + 1);
    expect(mapCount(a, live.indexOf("ile"), "live")).toBeUndefined();
    expect(mapCount(a, live.length, "live")).toBe(settled.length);
  });

  it("drops a reserved key and a duplicate name, keeping the surviving value exact", () => {
    const live = nows('\\w a|lemma="x" type="b"\\w*');
    const settled = nows("\\w a|x\\w*");
    const a = alignUsfmBytes(live, settled);
    expect(mapCount(a, live.indexOf("x"), "live")).toBe(settled.indexOf("x"));
    // Just after the value sits in front of the dropped `"`, so it snaps to the settled value's end.
    expect(mapCountSnapped(a, live.indexOf("x") + 1, "live")).toBe(settled.indexOf("x") + 1);
    expect(mapCount(a, live.length, "live")).toBe(settled.length);
  });

  it("treats unparseable attribute text as identical bytes", () => {
    for (const text of ["\\w a|lemma='x'\\w*", '\\qt-s |who=""\\*', "\\fig a|x.jpg|col|||\\fig*"]) {
      const s = nows(text);
      const a = alignUsfmBytes(s, s);
      expect(a.segments).toEqual([
        { liveStart: 0, liveEnd: s.length, settledStart: 0, settledEnd: s.length, same: true },
      ]);
    }
  });

  it("isolates an unexpected divergence and realigns the tail from the back", () => {
    const a = alignUsfmBytes("abXYZcd", "abQcd");
    expect(mapCount(a, 1, "live")).toBe(1);
    expect(mapCount(a, 2, "live")).toBeUndefined(); // in front of `X`, which has no counterpart
    expect(mapCountSnapped(a, 2, "live")).toBe(2);
    expect(mapCount(a, 4, "live")).toBeUndefined();
    expect(mapCountSnapped(a, 4, "live")).toBe(2);
    expect(mapCount(a, 5, "live")).toBe(3);
    expect(mapCount(a, 7, "live")).toBe(5);
  });
});

describe("the boundary rule: a count maps through the segment holding the byte in front of it", () => {
  // `\w grace|lemma="grace"\w* of` settles as `\w grace|grace\w* of`.
  const live = nows('\\w grace|lemma="grace"\\w* of');
  const settled = nows("\\w grace|grace\\w* of");
  const a = alignUsfmBytes(live, settled);
  const bar = live.indexOf("|");
  const liveValue = live.indexOf('"') + 1;
  const settledValue = bar + 1;

  it("maps the settled value's start to the live value's start", () => {
    expect(mapCount(a, settledValue, "settled")).toBe(liveValue);
    expect(mapCountSnapped(a, settledValue, "settled")).toBe(liveValue);
  });

  it("snaps a live caret in front of the dropped name to the settled value's start", () => {
    expect(mapCount(a, bar + 1, "live")).toBeUndefined();
    expect(mapCountSnapped(a, bar + 1, "live")).toBe(settledValue);
  });

  it("snaps a live caret in front of the dropped closing quote to just after the settled value", () => {
    const closingQuote = liveValue + "grace".length;
    expect(live[closingQuote]).toBe('"');
    expect(mapCount(a, closingQuote, "live")).toBeUndefined();
    expect(mapCountSnapped(a, closingQuote, "live")).toBe(settledValue + "grace".length);
  });

  it("maps every caret after the attribute section exactly, both ways", () => {
    const liveCloser = live.indexOf("\\w*");
    const settledCloser = settled.indexOf("\\w*");
    for (let offset = 0; liveCloser + offset <= live.length; offset += 1) {
      expect(mapCount(a, liveCloser + offset, "live")).toBe(settledCloser + offset);
      expect(mapCount(a, settledCloser + offset, "settled")).toBe(liveCloser + offset);
    }
  });

  it("maps the count between two adjacent literals to the count between their placeholders", () => {
    const note = nows("\\f + \\ft n\\f*");
    const r = alignScopeBytes(
      `${note}${note}`,
      `${PLACEHOLDER}${PLACEHOLDER}`,
      new Map([
        [0, note],
        [1, note],
      ]),
    );
    expect(mapCount(r.alignment, note.length, "live")).toBeUndefined();
    expect(mapCountSnapped(r.alignment, note.length, "live")).toBe(1);
    expect(mapCount(r.alignment, 1, "settled")).toBeUndefined();
    expect(mapCountSnapped(r.alignment, 1, "settled")).toBe(note.length);
  });
});

describe("alignUsfmBytes edge cases", () => {
  it("handles empty sides", () => {
    for (const [live, settled] of [
      ["", ""],
      ["", "abc"],
      ["abc", ""],
    ]) {
      const a = alignUsfmBytes(live, settled);
      expectTiles(a, live.length, settled.length);
      expect(mapCountSnapped(a, 0, "live")).toBe(live.length === 0 ? settled.length : 0);
      expect(mapCountSnapped(a, 0, "settled")).toBe(settled.length === 0 ? live.length : 0);
      expect(mapCount(a, live.length, "live")).toBe(settled.length);
      expect(mapCount(a, settled.length, "settled")).toBe(live.length);
    }
  });

  it("maps a count in front of settled-only bytes past them, to the live byte after them", () => {
    const a = alignUsfmBytes("ab", "aXb");
    expectTiles(a, 2, 3);
    expect(mapCount(a, 1, "live")).toBe(2); // after the inserted byte, not before it
    expect(mapCount(a, 2, "settled")).toBe(1);
    expect(mapCount(a, 1, "settled")).toBeUndefined();
    expect(mapCountSnapped(a, 1, "settled")).toBe(1);
    expect(mapCount(a, 3, "settled")).toBe(2);
  });

  it("maps the surviving named-default value, not a dropped reserved key with the same value", () => {
    const live = nows('\\w a|lemma="grace" type="grace"\\w*');
    const settled = nows("\\w a|grace\\w*");
    const a = alignUsfmBytes(live, settled);
    expectTiles(a, live.length, settled.length);
    const lemmaValue = live.indexOf('"') + 1;
    expect(mapCount(a, lemmaValue + 2, "live")).toBe(settled.indexOf("|") + 3);
    expect(mapCount(a, settled.indexOf("|") + 3, "settled")).toBe(lemmaValue + 2);
  });

  it("maps an attribute name the settle keeps, when an attribute before it is dropped", () => {
    const live = nows('\\w a|lemma="x" type="b" strong="y"\\w*');
    const settled = nows('\\w a|lemma="x" strong="y"\\w*');
    const a = alignUsfmBytes(live, settled);
    expectTiles(a, live.length, settled.length);
    expect(mapCount(a, live.indexOf("strong") + 2, "live")).toBe(settled.indexOf("strong") + 2);
  });

  it("maps the bytes between two kept attributes one for one across a figure rename", () => {
    const live = nows('\\fig a|file="x.jpg" size="col"\\fig*');
    const settled = nows('\\fig a|src="x.jpg" size="col"\\fig*');
    const a = alignUsfmBytes(live, settled);
    expectTiles(a, live.length, settled.length);
    expect(mapCount(a, live.indexOf("size") + 2, "live")).toBe(settled.indexOf("size") + 2);
    expect(mapCount(a, live.indexOf("col") + 1, "live")).toBe(settled.indexOf("col") + 1);
  });

  it("matches a renamed figure file when a reserved key is dropped too", () => {
    const live = nows('\\fig a|file="x.jpg" type="t"\\fig*');
    const settled = nows('\\fig a|src="x.jpg"\\fig*');
    const a = alignUsfmBytes(live, settled);
    expectTiles(a, live.length, settled.length);
    expect(mapCount(a, live.indexOf("x.jpg") + 2, "live")).toBe(settled.indexOf("x.jpg") + 2);
  });

  it("keeps a value repeated inside another value on its own attribute", () => {
    const live = nows('\\fig a|file="x.jpg" alt="x.jpg.bak"\\fig*');
    const settled = nows('\\fig a|src="x.jpg" alt="x.jpg.bak"\\fig*');
    const a = alignUsfmBytes(live, settled);
    expectTiles(a, live.length, settled.length);
    expect(mapCount(a, live.lastIndexOf("x.jpg") + 1, "live")).toBe(
      settled.lastIndexOf("x.jpg") + 1,
    );
    expect(mapCount(a, live.indexOf("x.jpg") + 1, "live")).toBe(settled.indexOf("x.jpg") + 1);
  });

  it("maps the surviving duplicate's value when a later duplicate overrides an earlier one", () => {
    // The tokenizer keeps the FIRST occurrence's slot with the LAST occurrence's value.
    const live = nows('\\w a|lemma="p" strong="s" lemma="qq"\\w*');
    const settled = nows('\\w a|lemma="qq" strong="s"\\w*');
    const a = alignUsfmBytes(live, settled);
    expectTiles(a, live.length, settled.length);
    expect(mapCount(a, live.indexOf("qq") + 1, "live")).toBe(settled.indexOf("qq") + 1);
    expect(mapCount(a, live.length, "live")).toBe(settled.length);
  });
});

describe("alignScopeBytes", () => {
  it("finds a typed note literal by its spelling and maps the text after it", () => {
    const live = nows("In \\f + \\ft n\\f* made");
    const settled = nows(`In ${PLACEHOLDER} made`);
    const r = alignScopeBytes(
      live,
      settled,
      new Map([[settled.indexOf(PLACEHOLDER), nows("\\f + \\ft n\\f*")]]),
    );
    const lit = r.literals.get(settled.indexOf(PLACEHOLDER));
    expect(lit).toEqual(expect.objectContaining({ liveStart: 2, liveEnd: live.indexOf("made") }));
    expect(mapCount(r.alignment, live.indexOf("made") + 1, "live")).toBe(
      settled.indexOf("made") + 1,
    );
  });

  it("finds a re-spelled literal's extent from the front, so a later literal still pairs", () => {
    const live = nows('In \\fig a|file="x.jpg"\\fig* the \\f + \\ft n\\f* made');
    const spellFig = nows('\\fig a|src="x.jpg"\\fig*');
    const spellNote = nows("\\f + \\ft n\\f*");
    const settled = nows(`In ${PLACEHOLDER} the ${PLACEHOLDER} made`);
    const first = settled.indexOf(PLACEHOLDER);
    const second = settled.lastIndexOf(PLACEHOLDER);
    const r = alignScopeBytes(
      live,
      settled,
      new Map([
        [first, spellFig],
        [second, spellNote],
      ]),
    );
    expect(r.literals.size).toBe(2);
    expect(mapCount(r.alignment, live.indexOf("the") + 1, "live")).toBe(settled.indexOf("the") + 1);
    expect(mapCount(r.alignment, live.indexOf("made") + 2, "live")).toBe(
      settled.indexOf("made") + 2,
    );
  });

  it("pairs a live placeholder with a settled placeholder one for one", () => {
    const live = `a${PLACEHOLDER}b`;
    const r = alignScopeBytes(live, live, new Map());
    expect(r.literals.size).toBe(0);
    expect(mapCount(r.alignment, 2, "live")).toBe(2);
  });
});

describe("alignScopeBytes edge cases", () => {
  it("finds a literal at the scope start and at the scope end", () => {
    const note = nows("\\f + \\ft n\\f*");
    for (const [live, settled] of [
      [`${note}made`, `${PLACEHOLDER}made`],
      [`made${note}`, `made${PLACEHOLDER}`],
      [`${note}${note}`, `${PLACEHOLDER}${PLACEHOLDER}`],
    ]) {
      const spellings = new Map<number, string>();
      [...settled].forEach((byte, index) => {
        if (byte === PLACEHOLDER) spellings.set(index, note);
      });
      const r = alignScopeBytes(live, settled, spellings);
      expectTiles(r.alignment, live.length, settled.length);
      expect(r.literals.size).toBe(spellings.size);
      for (const literal of r.literals.values()) {
        expect(live.slice(literal.liveStart, literal.liveEnd)).toBe(note);
        expectTiles(literal.inner, literal.liveEnd - literal.liveStart, note.length);
      }
      expect(mapCount(r.alignment, live.length, "live")).toBe(settled.length);
      expect(mapCountSnapped(r.alignment, 0, "live")).toBe(0);
    }
  });

  it("states a literal's inner alignment from the literal's first byte to the spelling", () => {
    const live = nows('In \\fig a|file="x.jpg"\\fig* made');
    const spelling = nows('\\fig a|src="x.jpg"\\fig*');
    const settled = nows(`In ${PLACEHOLDER} made`);
    const index = settled.indexOf(PLACEHOLDER);
    const r = alignScopeBytes(live, settled, new Map([[index, spelling]]));
    const literal = r.literals.get(index);
    if (!literal) throw new Error("no literal");
    expectTiles(literal.inner, literal.liveEnd - literal.liveStart, spelling.length);
    const within = live.indexOf("x.jpg") + 3 - literal.liveStart;
    expect(mapCount(literal.inner, within, "live")).toBe(spelling.indexOf("x.jpg") + 3);
    expect(mapCount(literal.inner, spelling.indexOf("x.jpg") + 3, "settled")).toBe(within);
  });

  it("does not swallow the rest of the scope when the spelling's closer never appears", () => {
    const live = nows("a \\f + \\ft nX bcd");
    const spelling = nows("\\f + \\ft nY\\f*");
    const settled = nows(`a ${PLACEHOLDER} bcd`);
    const r = alignScopeBytes(live, settled, new Map([[1, spelling]]));
    expectTiles(r.alignment, live.length, settled.length);
    const literal = r.literals.get(1);
    if (!literal) throw new Error("no literal");
    expectTiles(literal.inner, literal.liveEnd - literal.liveStart, spelling.length);
    expect(mapCount(r.alignment, live.indexOf("bcd") + 1, "live")).toBe(settled.indexOf("bcd") + 1);
  });

  it("keeps every segment forward when the divergence is inside the spelling's closer", () => {
    const live = nows("a \\f + \\ft n\\fZ\\f* bcd");
    const spelling = nows("\\f + \\ft n\\f*");
    const settled = nows(`a ${PLACEHOLDER} bcd`);
    const r = alignScopeBytes(live, settled, new Map([[1, spelling]]));
    expectTiles(r.alignment, live.length, settled.length);
    const literal = r.literals.get(1);
    if (!literal) throw new Error("no literal");
    expectTiles(literal.inner, literal.liveEnd - literal.liveStart, spelling.length);
  });

  it("ends a literal with extra bytes before its closer at that closer", () => {
    const live = nows("a \\f + \\ft nX\\f* bcd");
    const spelling = nows("\\f + \\ft n\\f*");
    const settled = nows(`a ${PLACEHOLDER} bcd`);
    const r = alignScopeBytes(live, settled, new Map([[1, spelling]]));
    expectTiles(r.alignment, live.length, settled.length);
    const literal = r.literals.get(1);
    if (!literal) throw new Error("no literal");
    expect(live.slice(literal.liveStart, literal.liveEnd)).toBe(nows("\\f + \\ft nX\\f*"));
    expect(mapCount(r.alignment, live.indexOf("bcd"), "live")).toBe(settled.indexOf("bcd"));
  });

  it("covers the whole spelling when the live scope ends inside the literal", () => {
    const live = nows("a \\f + \\ft");
    const spelling = nows("\\f + \\ft n\\f*");
    const settled = nows(`a ${PLACEHOLDER}`);
    const r = alignScopeBytes(live, settled, new Map([[1, spelling]]));
    expectTiles(r.alignment, live.length, settled.length);
    const literal = r.literals.get(1);
    if (!literal) throw new Error("no literal");
    expectTiles(literal.inner, literal.liveEnd - literal.liveStart, spelling.length);
    expect(mapCountSnapped(literal.inner, spelling.length, "settled")).toBe(
      literal.liveEnd - literal.liveStart,
    );
  });
});

describe("PLACEHOLDER", () => {
  it("is the byte a fragment spells a preserved node as", () => {
    expect(PLACEHOLDER).toBe(ATOMIC_SENTINEL);
  });
});
