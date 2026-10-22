/**
 * The pending-equals-settled oracle (pendingSettledOracle.test-helpers.tsx) in the footnote
 * popover's view: expanded notes whose marker, caller and closer the host governs.
 * The cases known to fail are listed in `pendingSettledOracle.protectedNoteShell.expected-failures.json`.
 */
import {
  describePendingSettledOracle,
  PROTECTED_NOTE_SHELL_VIEW,
} from "./pendingSettledOracle.test-helpers";
import { pathToFileURL } from "node:url";

// Not `new URL(…, import.meta.url)`: the test transform rewrites that form to an http URL.
describePendingSettledOracle(
  PROTECTED_NOTE_SHELL_VIEW,
  pathToFileURL(
    `${import.meta.dirname}/pendingSettledOracle.protectedNoteShell.expected-failures.json`,
  ),
);
