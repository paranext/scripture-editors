/**
 * The annotation-transparency oracle (annotationTransparency.oracle.test-helpers.tsx) in the
 * standard+protectedNoteShell view. The cases known to fail are listed in
 * `annotationTransparency.protectedNoteShell.expected-failures.json`.
 */
import { describeAnnotationTransparencyOracle } from "./annotationTransparency.oracle.test-helpers";
import { pathToFileURL } from "node:url";

// Not `new URL(…, import.meta.url)`: the test transform rewrites that form to an http URL.
describeAnnotationTransparencyOracle(
  "standard+protectedNoteShell",
  pathToFileURL(
    `${import.meta.dirname}/annotationTransparency.protectedNoteShell.expected-failures.json`,
  ),
);
