/**
 * The annotation-transparency oracle (annotationTransparency.oracle.test-helpers.tsx) in the
 * standard view. The cases known to fail are listed in
 * `annotationTransparency.standard.expected-failures.json`.
 */
import { describeAnnotationTransparencyOracle } from "./annotationTransparency.oracle.test-helpers";
import { pathToFileURL } from "node:url";

// Not `new URL(…, import.meta.url)`: the test transform rewrites that form to an http URL.
describeAnnotationTransparencyOracle(
  "standard",
  pathToFileURL(`${import.meta.dirname}/annotationTransparency.standard.expected-failures.json`),
);
