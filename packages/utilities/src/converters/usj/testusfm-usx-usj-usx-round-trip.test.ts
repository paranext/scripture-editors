import { MarkerContent, MarkerObject } from "./usj.model.js";
import { usjToUsxString } from "./usj-to-usx.js";
import { usxStringToUsj } from "./usx-to-usj.js";
import { DOMParser, Element, Node } from "@xmldom/xmldom";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * USX -> USJ -> USX round trip over the real provider captures in the vendored corpus's `pdp-usx/`
 * directory — the opposite composition of `testusfm-usj-usx-round-trip.test.ts`, so an asymmetric
 * converter pair cannot hide from both directions.
 *
 * This is a NET, not a localizer: a failure conflates the parser and the serializer. The captures
 * are what Paratext's provider serves, so they carry shapes no authored fixture does (incomplete
 * `sid`/`eid` values, top-level `<char>` placements, `status`/`vid` metadata). The composed suite
 * in `packages/platform` (`corpus-pdp-usx-composed-round-trip.test.tsx`) runs the same converter
 * leg beside its editor legs; this one keeps it in the utilities package so a converter regression
 * fails here without the editor. The tolerances below are no broader than that suite's.
 */

// Vitest's module transform does not preserve a usable `import.meta.url`, so locate the corpus
// relative to the working directory — the utilities project root under nx, the repo root
// otherwise. Same probing shape the USJ-first net uses.
const PDP_USX_DIR = [
  "../../libs/shared/src/converters/usfm/testUsfmCorpus/pdp-usx",
  "libs/shared/src/converters/usfm/testUsfmCorpus/pdp-usx",
].find((dir) => existsSync(dir));
if (!PDP_USX_DIR) throw new Error("pdp-usx capture directory not found from cwd");

// Discovered at run time so a newly captured chapter is covered without a code change.
const CAPTURES = readdirSync(PDP_USX_DIR)
  .filter((name) => name.endsWith(".usx"))
  .sort();

function readCapture(name: string): string {
  if (!PDP_USX_DIR) throw new Error("pdp-usx capture directory not found from cwd");
  return readFileSync(join(PDP_USX_DIR, name), "utf8");
}

/** The `version` the capture declares, handed back to `usjToUsxString` so it round-trips. */
function usxVersionOf(usx: string): string {
  const version = new DOMParser()
    .parseFromString(usx, "text/xml")
    .documentElement?.getAttribute("version");
  if (!version) throw new Error("capture declares no USX version");
  return version;
}

/**
 * `text` as a JSON string literal with every non-ASCII space-like character escaped, so a diff
 * shows a NBSP or a zero-width space as an escape instead of as a look-alike space.
 */
function quote(text: string): string {
  return JSON.stringify(text).replace(
    /[\u0080-\u00a0\u1680\u2000-\u200f\u2028-\u202f\u205f\u3000\ufeff]/g,
    (char) => `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}`,
  );
}

/**
 * A USX document as one line per element or text node, indented by depth, so two documents can be
 * compared with a readable diff. What this deliberately does NOT distinguish is listed here:
 *
 * - **XML spelling.** Attribute order and `<x />` versus `<x/>` are serialization choices, not
 *   data. Each element is printed with its attributes sorted. Text is compared byte for byte.
 * - **`eid`-only `<verse>`/`<chapter>` closers.** `usxStringToUsj` drops them and `usjToUsxString`
 *   regenerates them from each opener's `sid`: ParatextData places a verse's closer at the end of
 *   its last paragraph and the regenerated one lands at the start of the next verse's paragraph,
 *   and a closer whose opener's `sid` is empty (every chapter after the first) is not regenerated
 *   at all. A closer carries no data the opener lacks, so closers are left out; their openers,
 *   `sid` included, are still compared.
 * - **`vid` on `<para>` and `status` on any element.** `usxStringToUsj` drops both as derived
 *   metadata. `vid` is compared everywhere else it could appear.
 */
function canonicalUsxLines(usx: string): string[] {
  const lines: string[] = [];
  const visit = (node: Node, depth: number): void => {
    for (let child = node.firstChild; child; child = child.nextSibling) {
      const indent = "  ".repeat(depth);
      if (child.nodeType === child.TEXT_NODE) {
        lines.push(`${indent}${quote(child.nodeValue ?? "")}`);
        continue;
      }
      if (child.nodeType !== child.ELEMENT_NODE) continue;
      const element = child as Element;
      const attributes = Array.from(element.attributes);
      const isCloser =
        (element.nodeName === "verse" || element.nodeName === "chapter") &&
        attributes.length === 1 &&
        attributes[0].name === "eid";
      if (isCloser) continue;
      const kept = attributes
        .filter(({ name }) => name !== "status" && !(element.nodeName === "para" && name === "vid"))
        .map(({ name, value }) => `${name}=${JSON.stringify(value)}`)
        .sort();
      lines.push(`${indent}<${[element.nodeName, ...kept].join(" ")}>`);
      visit(element, depth + 1);
    }
  };
  visit(new DOMParser().parseFromString(usx, "text/xml"), 0);
  return lines;
}

function namelessParagraphs(content: MarkerContent[]): MarkerObject[] {
  return content.flatMap((item) => {
    if (typeof item === "string") return [];
    const nested = namelessParagraphs(item.content ?? []);
    const isNameless =
      item.type === "para" && (item.marker === "" || (item as { style?: unknown }).style === "");
    return isNameless ? [item, ...nested] : nested;
  });
}

describe("pdp-usx corpus round trip (USX -> USJ -> USX)", () => {
  it("found the captures", () => {
    expect(CAPTURES.length).toBeGreaterThan(0);
  });

  it.each(CAPTURES)("%s", (name) => {
    const usx = readCapture(name);
    const usxOut = usjToUsxString(usxStringToUsj(usx), { usxVersion: usxVersionOf(usx) });
    expect(canonicalUsxLines(usxOut)).toEqual(canonicalUsxLines(usx));
  });
});

describe('nameless-marker paragraphs (`<para style="">`)', () => {
  // The composed round trip above cannot tell the intended shape from a stray `style: ""`
  // property, because `usjToUsxString` writes either one as `style=""`. Assert the USJ directly.
  it("gives each nameless paragraph an empty marker and no stray style", () => {
    const usj = usxStringToUsj(readCapture("testUSFM-2SA-5-ch5.usx"));
    const nameless = namelessParagraphs(usj.content);
    expect(nameless).toHaveLength(3);
    for (const para of nameless) {
      expect(para.marker).toBe("");
      expect(para).not.toHaveProperty("style");
    }
  });
});
