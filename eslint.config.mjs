import lexicalPlugin from "@lexical/eslint-plugin";
import nx from "@nx/eslint-plugin";
import tseslint from "typescript-eslint";
import noRawCarrierAccessors from "./tools/lint-rules/no-raw-carrier-accessors.mjs";

/**
 * A display-byte carrier an annotation holds in part is cut into pieces of its own class, so a raw
 * text, sibling, insertion, selection or removal call on one acts on one piece
 * (`tools/lint-rules/no-raw-carrier-accessors.mjs`). The rule needs types, so these files are
 * parsed with the TypeScript project service. `libs/shared`, `libs/shared-react` and
 * `packages/platform` spread this block into their own configs; the default export carries a copy
 * scoped to those projects for a root-invoked `npx eslint`.
 */
export const noRawCarrierAccessorsConfig = {
  files: ["**/src/**/*.ts", "**/src/**/*.tsx"],
  ignores: [
    "**/*.test.ts",
    "**/*.test.tsx",
    "**/*.spec.ts",
    "**/*.spec.tsx",
    "**/*test-helpers*",
    "**/*test.utils*",
    "**/*test-utils*",
    "**/test-setup.ts",
  ],
  languageOptions: {
    parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
  },
  plugins: {
    "scripture-editors": { rules: { "no-raw-carrier-accessors": noRawCarrierAccessors } },
  },
  rules: { "scripture-editors/no-raw-carrier-accessors": "error" },
};

export default [
  ...nx.configs["flat/base"],
  ...nx.configs["flat/typescript"],
  ...nx.configs["flat/javascript"],
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    ignores: [
      "**/build",
      "**/dist",
      "**/out-tsc",
      "**/temp",
      "**/tmp",
      "**/coverage",
      "**/vite.config.*.timestamp*",
      "**/vitest.config.*.timestamp*",
      // These projects' own configs ignore `**/lib` (build outputs, and demos/platform's
      // vendored paranext-core copies), so their nx lint never sees those files. Mirror the
      // ignores here, scoped per project, so a root-invoked `npx eslint` skips them too.
      "demos/platform/lib",
      "packages/platform/lib",
    ],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    plugins: { "@lexical": lexicalPlugin },
    rules: {
      "@lexical/rules-of-lexical": "error",
      "@nx/enforce-module-boundaries": [
        "error",
        {
          enforceBuildableLibDependency: true,
          allow: ["^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$"],
          depConstraints: [
            {
              sourceTag: "*",
              onlyDependOnLibsWithTags: ["*"],
            },
          ],
        },
      ],
      // Add a few key rules from other standards:
      eqeqeq: ["error", "always", { null: "ignore" }], // We added `null: "ignore"`.
      "prefer-const": "error",
      "no-var": "error",
      "no-console": "warn",
      // Our custom overrides:
      // Prefer index-signature `{ [projectId: string]: number }` over `Record<string, number>`
      // since the additional information of the key name gives a hint to its usage.
      "@typescript-eslint/consistent-indexed-object-style": ["error", "index-signature"],
    },
  },
  // The React projects' shared overrides, scoped to their directories so a root-invoked
  // `npx eslint` (which resolves only THIS config — flat-config discovery searches upward from
  // the working directory, not per linted file) reports the same results as each project's own
  // lint. Each React project's eslint.config.mjs spreads the same `nx.configs["flat/react"]`
  // block unscoped for its project-local runs; there this scoped copy is inert, because flat
  // config evaluates `files` patterns relative to the config file's directory. The AND-array
  // entries (`[<project dir>, <original pattern>]`) preserve each config's own file coverage
  // while restricting it to the React projects.
  ...nx.configs["flat/react"].map((config) => ({
    ...config,
    files: [
      "demos/perf-react/**",
      "demos/platform/**",
      "libs/shared-react/**",
      "packages/platform/**",
    ].flatMap((projectDir) => (config.files ?? ["**/*"]).map((pattern) => [projectDir, pattern])),
  })),
  {
    files: [
      "**/*.ts",
      "**/*.tsx",
      "**/*.cts",
      "**/*.mts",
      "**/*.js",
      "**/*.jsx",
      "**/*.cjs",
      "**/*.mjs",
    ],
    // Override or add rules here
    rules: {},
  },
  // The carrier-accessor rule's root-invoked copy, scoped to the projects that hold carriers (as
  // the React block above is); each of those projects' own configs adds the unscoped block.
  {
    ...noRawCarrierAccessorsConfig,
    files: ["libs/shared/**", "libs/shared-react/**", "packages/platform/**"].flatMap(
      (projectDir) => noRawCarrierAccessorsConfig.files.map((pattern) => [projectDir, pattern]),
    ),
  },
  {
    files: ["**/*.json"],
    // Override or add rules here
    rules: {},
    languageOptions: {
      parser: await import("jsonc-eslint-parser"),
    },
  },
];
