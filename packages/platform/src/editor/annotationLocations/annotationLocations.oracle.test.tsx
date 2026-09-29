/**
 * Every settled location range of the `rich` and `edges` corpora, in every oracle view: an
 * annotation set over the range must be held by exactly the bytes the range names. The failures
 * that exist are listed in `annotationLocations.expected-failures.json`; see
 * `annotationLocations.oracle.test-helpers.ts` for the rules and the environment switches.
 */
import {
  buildOracleUniverse,
  expectOracleMatchesList,
  flushOracleLists,
  OracleUniverse,
  runOracle,
} from "./annotationLocations.oracle.test-helpers";
import { edgesUsj, ORACLE_VIEWS, richUsj } from "./annotationLocations.test-helpers";
import { pathToFileURL } from "node:url";

// Not `new URL(…, import.meta.url)`: the test transform rewrites that form to an http URL.
const LIST = pathToFileURL(`${import.meta.dirname}/annotationLocations.expected-failures.json`);
const ONLY_VIEW = process.env.ANNOTATION_ORACLE_VIEW;

afterAll(flushOracleLists);

for (const [corpus, usj] of [
  ["rich", richUsj],
  ["edges", edgesUsj],
] as const) {
  describe(`annotation locations: ${corpus}`, () => {
    const built: { universe?: OracleUniverse } = {};
    beforeAll(async () => {
      built.universe = await buildOracleUniverse(usj);
    }, 120_000);

    for (const { name, view } of ORACLE_VIEWS.filter((v) => !ONLY_VIEW || v.name === ONLY_VIEW))
      it(
        `holds exactly the named bytes: ${corpus} ${name}`,
        { timeout: 240_000 },
        async ({ signal }) => {
          const { universe } = built;
          if (!universe) throw new Error("the universe was not built");
          const run = await runOracle(corpus, usj, name, view, {
            universe,
            sample: 1,
            usjEvery: 1,
            signal,
          });
          expectOracleMatchesList(LIST, corpus, name, run);
        },
      );
  });
}
