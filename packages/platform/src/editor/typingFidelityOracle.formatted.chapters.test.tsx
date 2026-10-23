/**
 * The typing-fidelity oracle (typingFidelityOracle.test-helpers.tsx) over the long testUSFM and WEB chapters, in the formatted view, Power
 * mode's other tab, where structure protection is off.
 * The shapes known to fail are listed in `typingFidelityOracle.formatted.expected-failures.json`.
 */
import { describeTypingFidelityOracle } from "./typingFidelityOracle.test-helpers";
import { pathToFileURL } from "node:url";

// Not `new URL(…, import.meta.url)`: the test transform rewrites that form to an http URL.
describeTypingFidelityOracle(
  { name: "formatted" },
  "chapters",
  pathToFileURL(`${import.meta.dirname}/typingFidelityOracle.formatted.expected-failures.json`),
);
