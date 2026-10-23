/**
 * The typing-fidelity oracle (typingFidelityOracle.test-helpers.tsx) over the keystroke corpus and the short testUSFM chapters, in the paragraph-structure
 * view, Simple mode's default, with the structure protection Simple mode edits under when the
 * project is not locked (`guarded`: a structural deletion is armed by the first press and made by
 * the second).
 * The shapes known to fail are listed in `typingFidelityOracle.paragraphStructure.expected-failures.json`.
 */
import { describeTypingFidelityOracle } from "./typingFidelityOracle.test-helpers";
import { pathToFileURL } from "node:url";

// Not `new URL(…, import.meta.url)`: the test transform rewrites that form to an http URL.
describeTypingFidelityOracle(
  { name: "paragraph-structure", structureProtectionMode: "guarded" },
  "corpus",
  pathToFileURL(
    `${import.meta.dirname}/typingFidelityOracle.paragraphStructure.expected-failures.json`,
  ),
);
