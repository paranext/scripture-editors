/**
 * The oracle over `usj2Sa`, sampled every `ANNOTATION_ORACLE_2SA_STRIDE`th location (default
 * 10), in the oracle views at even indexes (`annotationLocations.2sa-b.oracle.test.tsx` runs the
 * others, so the two files run in parallel forks). Opt-in: it runs only with
 * `ANNOTATION_ORACLE_2SA=1`. The failures that exist are listed in
 * `annotationLocations.2sa-a.expected-failures.json`.
 */
import {
  buildOracleUniverse,
  expectOracleMatchesList,
  flushOracleLists,
  OracleUniverse,
  runOracle,
} from "./annotationLocations.oracle.test-helpers";
import { ORACLE_VIEWS } from "./annotationLocations.test-helpers";
import { usj2Sa } from "test-data";
import { pathToFileURL } from "node:url";

// Not `new URL(…, import.meta.url)`: the test transform rewrites that form to an http URL.
const LIST = pathToFileURL(
  `${import.meta.dirname}/annotationLocations.2sa-a.expected-failures.json`,
);
const ONLY_VIEW = process.env.ANNOTATION_ORACLE_VIEW;
const STRIDE = Number(process.env.ANNOTATION_ORACLE_2SA_STRIDE ?? 10);

afterAll(flushOracleLists);

describe.skipIf(!process.env.ANNOTATION_ORACLE_2SA)(
  "2SA annotation locations (opt-in: set ANNOTATION_ORACLE_2SA=1)",
  () => {
    const built: { universe?: OracleUniverse } = {};
    beforeAll(async () => {
      built.universe = await buildOracleUniverse(usj2Sa);
    }, 600_000);

    for (const { name, view } of ORACLE_VIEWS.filter(
      (v, i) => i % 2 === 0 && (!ONLY_VIEW || v.name === ONLY_VIEW),
    ))
      it(
        `holds exactly the named bytes: 2SA ${name}`,
        { timeout: 3_600_000 },
        async ({ signal }) => {
          const { universe } = built;
          if (!universe) throw new Error("the universe was not built");
          const run = await runOracle("2SA", usj2Sa, name, view, {
            universe,
            sample: STRIDE,
            usjEvery: 1,
            signal,
          });
          expectOracleMatchesList(LIST, "2SA", name, run, { stride: STRIDE });
        },
      );
  },
);
