// @vitest-environment node
/**
 * The `scripture-editors/no-raw-carrier-accessors` lint rule (`tools/lint-rules/`): it needs the
 * receiver's type to tell a carrier an annotation can cut from any other text, so these cases are
 * linted with the TypeScript project service, as the repo's lint runs it. The classes are declared
 * in each case so the rule sees exactly the hierarchy named here; each carries a field of its own,
 * as the real classes do, so a type guard narrows to it.
 */
// The rule lives with the repo's lint config, outside every project, and runs in this project's
// tests so `nx affected -t test` covers it.
// eslint-disable-next-line @nx/enforce-module-boundaries
import noRawCarrierAccessors from "../../../../tools/lint-rules/no-raw-carrier-accessors.mjs";
import { RuleTester } from "eslint";
import tseslint from "typescript-eslint";
import { describe, it } from "vitest";

// The first case to run starts the TypeScript project service, which on a CI runner can take longer
// than the default 5 s. Only that case gets longer; every later one keeps the default.
const PROJECT_SERVICE_START_TIMEOUT_MS = 60_000;
let startsProjectService = true;
const startTimeout = () => {
  const timeout = startsProjectService ? PROJECT_SERVICE_START_TIMEOUT_MS : undefined;
  startsProjectService = false;
  return timeout;
};
RuleTester.describe = describe;
RuleTester.it = (name: string, test: () => void) => it(name, test, startTimeout());
RuleTester.itOnly = (name: string, test: () => void) => it.only(name, test, startTimeout());

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
  getTextContentSize(): number { return 0; }
  setTextContent(text: string): this { return this; }
  getNextSibling(): TextNode | null { return null; }
  getPreviousSibling(): TextNode | null { return null; }
  getIndexWithinParent(): number { return 0; }
  insertAfter(node: TextNode): TextNode { return node; }
  selectEnd(): void {}
  remove(): void {}
}
class MarkerNode extends TextNode { __marker = ""; }
class VerseNode extends TextNode { __number = ""; }
class ImmutableUnmatchedNode extends TextNode { __closer = ""; }
class TokenGlyph extends MarkerNode { __token = true; }
class Caller extends TextNode { __caller = ""; }
declare function $isMarkerNode(node: TextNode | null): node is MarkerNode;
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
    {
      code: `${CLASSES} export const size = (verse: VerseNode) => verse.getTextContentSize();`,
      errors: [{ messageId: "raw" }],
    },
    {
      code: `${CLASSES} export const before = (closer: ImmutableUnmatchedNode) => closer.getPreviousSibling();`,
      errors: [{ messageId: "raw" }],
    },
    {
      code: `${CLASSES} export const read = (marker: MarkerNode | null) => marker?.getTextContent();`,
      errors: [{ messageId: "raw" }],
    },
    {
      code: `${CLASSES} export const read = (node: TextNode) => $isMarkerNode(node) ? node.getTextContent() : "";`,
      errors: [{ messageId: "raw" }],
    },
    {
      code: `${CLASSES} export const read = (marker: MarkerNode & { tag: 1 }) => marker.getIndexWithinParent();`,
      errors: [{ messageId: "raw" }],
    },
    {
      code: `${CLASSES} export const put = (marker: MarkerNode, text: TextNode) => marker.insertAfter(text);`,
      errors: [{ messageId: "raw" }],
    },
    {
      code: `${CLASSES} export const caret = (verse: VerseNode) => verse.selectEnd();`,
      errors: [{ messageId: "raw" }],
    },
    {
      code: `${CLASSES} export const drop = (marker: MarkerNode) => marker.remove();`,
      errors: [{ messageId: "raw" }],
    },
  ],
});
