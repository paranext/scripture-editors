/**
 * Convert Scripture from USX to USJ.
 * Adapted to TypeScript from this file:
 * @see https://github.com/usfm-bible/usfmtc/blob/0afa385a1f282b286cc6bff7bbc953ae788aa10c/src/usfmtc/usjproc.py
 */
import { Element } from "@xmldom/xmldom";
import { Usj } from "./usj.model.js";
/**
 * Converts a USX string to a USJ object.
 *
 * @param usxString - The USX string to convert.
 * @returns The converted USJ object.
 *
 * @public
 */
export declare function usxStringToUsj(usxString: string): Usj;
export declare function usxDomToUsj(inputUsxDom: Element | null): Usj;
//# sourceMappingURL=usx-to-usj.d.ts.map