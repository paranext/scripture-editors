import nx from "@nx/eslint-plugin";
import baseConfig, { noRawCarrierAccessorsConfig } from "../../eslint.config.mjs";

export default [
  ...baseConfig,
  noRawCarrierAccessorsConfig,
  ...nx.configs["flat/react"],
  {
    ignores: ["**/lib"],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    // Override or add rules here
    rules: {},
  },
];
