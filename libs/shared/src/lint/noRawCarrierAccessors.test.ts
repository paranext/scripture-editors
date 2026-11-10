// @vitest-environment node
/**
 * The `scripture-editors/no-raw-carrier-accessors` lint rule (`tools/lint-rules/`): it needs the
 * receiver's type to tell a carrier an annotation can cut from any other text, so these cases are
 * linted with the TypeScript project service, as the repo's lint runs it. The classes are declared
 * in each case so the rule sees exactly the hierarchy named here.
 */
// The rule lives with the repo's lint config, outside every project, and runs in this project's
// tests so `nx affected -t test` covers it.
// eslint-disable-next-line @nx/enforce-module-boundaries
import noRawCarrierAccessors from "../../../../tools/lint-rules/no-raw-carrier-accessors.mjs";
import { RuleTester } from "eslint";
import tseslint from "typescript-eslint";
import { describe, it } from "vitest";

RuleTester.describe = describe;
RuleTester.it = it;
RuleTester.itOnly = it.only;

const tester = new RuleTester({
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      projectService: { allowDefaultProject: ["*.ts"] },
      tsconfigRootDir: __dirname,
    },
  },
});

const CLASSES = `
class TextNode {
  getTextContent(): string { return ""; }
  setTextContent(text: string): this { return this; }
  getNextSibling(): TextNode | null { return null; }
  getIndexWithinParent(): number { return 0; }
}
class MarkerNode extends TextNode {}
class TokenGlyph extends MarkerNode {}
class Caller extends TextNode {}
`;

tester.run("no-raw-carrier-accessors", noRawCarrierAccessors, {
  valid: [
    { code: `${CLASSES} export const read = (text: Caller) => text.getTextContent();` },
    {
      code: `${CLASSES} export class Own extends MarkerNode { read() { return this.getTextContent(); } }`,
    },
  ],
  invalid: [
    {
      code: `${CLASSES} export const read = (marker: MarkerNode) => marker.getTextContent();`,
      errors: [{ messageId: "raw" }],
    },
    {
      code: `${CLASSES} export const next = (glyph: TokenGlyph | Caller) => glyph.getNextSibling();`,
      errors: [{ messageId: "raw" }],
    },
    {
      code: `${CLASSES} export const write = (marker: MarkerNode) => marker.setTextContent("x");`,
      errors: [{ messageId: "raw" }],
    },
  ],
});
