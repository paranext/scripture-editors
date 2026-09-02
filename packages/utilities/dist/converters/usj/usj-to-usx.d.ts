/**
 * Convert Scripture from USJ to USX.
 * Adapted to TypeScript from this file:
 * @see https://github.com/usfm-bible/usfmtc/blob/0afa385a1f282b286cc6bff7bbc953ae788aa10c/src/usfmtc/usjproc.py
 */
import { Document, Element } from "@xmldom/xmldom";
import { Usj } from "./usj.model.js";
/**
 * Converts a USJ object to a USX string.
 *
 * @param usj - The USJ object to convert
 * @returns The converted USX string.
 *
 * @public
 */
export declare function usjToUsxString(usj: Usj): string;
export declare function usjToUsxDom(usj: Usj, usxDoc: Document): Element | undefined;
//# sourceMappingURL=usj-to-usx.d.ts.map