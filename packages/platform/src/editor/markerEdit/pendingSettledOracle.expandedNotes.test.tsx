/**
 * The pending-equals-settled oracle (pendingSettledOracle.test-helpers.tsx) in the standard+expandedNotes view.
 * The cases known to fail are listed in `pendingSettledOracle.expandedNotes.expected-failures.json`.
 */
import { describePendingSettledOracle } from "./pendingSettledOracle.test-helpers";
import { pathToFileURL } from "node:url";

// Not `new URL(…, import.meta.url)`: the test transform rewrites that form to an http URL.
describePendingSettledOracle(
  "standard+expandedNotes",
  pathToFileURL(`${import.meta.dirname}/pendingSettledOracle.expandedNotes.expected-failures.json`),
);
