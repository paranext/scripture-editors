/**
 * @packageDocumentation
 * Utilities for Scripture data conversion and manipulation, including USJ/USX format conversion.
 */

/**
 * Avoid prototype pollution by disallowing unsafe keys.
 * @param key - The array key to validate.
 *
 * @public
 */
export declare function assertSafeKey(key: string): void;

/**
 * 3-letter Scripture book code
 * @public
 */
export declare type BookCode = (typeof VALID_BOOK_CODES)[number];

/**
 * JSON path to a {@link MarkerObject}, {@link Usj}, or text content string in the current USJ
 * document.
 *
 * This could actually have more content clauses at the end, but TS types are limited
 *
 * @public
 */
export declare type ContentJsonPath =
  | ""
  | `$`
  | `$.content[${number}]`
  | `$.content[${number}].content[${number}]`
  | `$.content[${number}].content[${number}].content[${number}]`
  | `$.content[${number}].content[${number}].content[${number}].content[${number}]`;

/**
 * An empty USJ object
 * @public
 */
export declare const EMPTY_USJ: Readonly<Usj>;

/**
 * An empty USX string
 * @public
 */
export declare const EMPTY_USX = '<usx version="3.1" />';

/**
 * Gets a human-readable name for the type of a {@link UsjDocumentLocation}.
 *
 * Useful for error messages when an unsupported location type is encountered.
 *
 * @param location - The location to get the type name for.
 * @returns A string describing the location type, or "undefined" / "null" if the location is not
 *   provided.
 *
 * @public
 */
export declare function getUsjDocumentLocationTypeName(
  location: UsjDocumentLocation | undefined | null,
): string;

/**
 * Converts a USJ JSONPath string into an array of indexes.
 *
 * @param jsonPath - The USJ JSONPath string to convert. It must start with `$` and contain `.content[index]` segments.
 * @returns An array of numeric indexes extracted from the JSONPath.
 * @throws Will throw an error if the JSONPath does not start with `$`.
 *
 * @public
 */
export declare function indexesFromUsjJsonPath(jsonPath: string): number[];

/**
 * Type guard to check if a location is a {@link UsjAttributeKeyLocation}.
 *
 * An attribute key location points to a specific character offset within an attribute's key string.
 *
 * @param location - The location to check.
 * @returns `true` if the location is a `UsjAttributeKeyLocation`, `false` otherwise.
 *
 * @public
 */
export declare function isUsjAttributeKeyLocation(
  location: UsjDocumentLocation | undefined | null,
): location is UsjAttributeKeyLocation;

/**
 * Type guard to check if a location is a {@link UsjAttributeMarkerLocation}.
 *
 * An attribute marker location points to the beginning of an attribute marker
 * (at the backslash in USFM, e.g., `\ca` for chapter alternate number).
 *
 * @param location - The location to check.
 * @returns `true` if the location is a `UsjAttributeMarkerLocation`, `false` otherwise.
 *
 * @public
 */
export declare function isUsjAttributeMarkerLocation(
  location: UsjDocumentLocation | undefined | null,
): location is UsjAttributeMarkerLocation;

/**
 * Type guard to check if a location is a {@link UsjClosingAttributeMarkerLocation}.
 *
 * A closing attribute marker location points to a specific point in the closing marker
 * representation of an attribute marker (e.g., `\ca*` in USFM).
 *
 * @param location - The location to check.
 * @returns `true` if the location is a `UsjClosingAttributeMarkerLocation`, `false` otherwise.
 *
 * @public
 */
export declare function isUsjClosingAttributeMarkerLocation(
  location: UsjDocumentLocation | undefined | null,
): location is UsjClosingAttributeMarkerLocation;

/**
 * Type guard to check if a location is a {@link UsjClosingMarkerLocation}.
 *
 * A closing marker location points to a specific point in the closing marker representation
 * of a marker object (e.g., `\nd*` in USFM).
 *
 * @param location - The location to check.
 * @returns `true` if the location is a `UsjClosingMarkerLocation`, `false` otherwise.
 *
 * @public
 */
export declare function isUsjClosingMarkerLocation(
  location: UsjDocumentLocation | undefined | null,
): location is UsjClosingMarkerLocation;

/**
 * Type guard to check if a location is a {@link UsjMarkerLocation}.
 *
 * A marker location points to the very beginning of a marker (at the backslash in USFM).
 * It only has a `jsonPath` property with no offset properties.
 *
 * @param location - The location to check.
 * @returns `true` if the location is a `UsjMarkerLocation`, `false` otherwise.
 *
 * @public
 */
export declare function isUsjMarkerLocation(
  location: UsjDocumentLocation | undefined | null,
): location is UsjMarkerLocation;

/**
 * Type guard to check if a location is a {@link UsjPropertyValueLocation}.
 *
 * A property value location points to a specific character offset within a property value
 * (such as `marker` or an attribute value).
 *
 * @param location - The location to check.
 * @returns `true` if the location is a `UsjPropertyValueLocation`, `false` otherwise.
 *
 * @public
 */
export declare function isUsjPropertyValueLocation(
  location: UsjDocumentLocation | undefined | null,
): location is UsjPropertyValueLocation;

/**
 * Type guard to check if a location is a {@link UsjTextContentLocation}.
 *
 * A text content location points to a specific character offset within a text content string
 * in a marker's content array.
 *
 * @param location - The location to check.
 * @returns `true` if the location is a `UsjTextContentLocation`, `false` otherwise.
 *
 * @public
 */
export declare function isUsjTextContentLocation(
  location: UsjDocumentLocation | undefined | null,
): location is UsjTextContentLocation;

/**
 * Check if the given code is a valid 3-letter Scripture book code.
 * @public
 */
export declare function isValidBookCode(code: string): boolean;

/**
 * List of known properties of `MarkerObject`
 * @public
 */
export declare const MARKER_OBJECT_PROPS: (keyof MarkerObject)[];

/**
 * Single piece of Scripture content
 * @public
 */
export declare type MarkerContent = string | MarkerObject;

/**
 * A Scripture Marker and its contents
 * @public
 */
export declare interface MarkerObject {
  /**
   * The kind/category of node or element this is, corresponding the USFM marker and USX node
   * @example `para`, `verse`, `char`
   */
  type: string;
  /**
   * The corresponding marker in USFM or style in USX
   * @example `p`, `v`, `nd`
   */
  marker?: string;
  /** This marker's contents laid out in order */
  content?: MarkerContent[];
  /** Indicates the Book-chapter-verse value in the paragraph based structure */
  sid?: string;
  /** Milestone end ID, matches start ID (not currently included in USJ spec) */
  eid?: string;
  /** Chapter number or verse number */
  number?: string;
  /** The 3-letter book code in ID element */
  code?: BookCode;
  /** Alternate chapter number or verse number */
  altnumber?: string;
  /** Published character of chapter or verse */
  pubnumber?: string;
  /** Caller character for footnotes and cross-refs */
  caller?: string;
  /** Alignment of table cells */
  align?: string;
  /** Category of extended study bible sections */
  category?: string;
  /**
   * `"false"` when a character marker has no explicit closing marker in the USFM source (allowed
   * through USFM 3.0; ParatextData writes `closed="false"` for such spans). Omitted entirely when
   * the marker is explicitly closed.
   */
  closed?: string;
}

/**
 * JSON path to the `marker` or an attribute on a {@link MarkerObject} or {@link Usj} in the current
 * USJ document. Note that it seems you must use `['bracket notation']` rather than `.dot` notation
 * if there are symbols other than underscore in the property name
 *
 * This could actually have more content clauses at the end, but TS types are limited
 *
 * @public
 */
export declare type PropertyJsonPath =
  | ""
  | `$.${string}`
  | `$['${string}']`
  | `$.content[${number}].${string}`
  | `$.content[${number}]['${string}']`
  | `$.content[${number}].content[${number}].${string}`
  | `$.content[${number}].content[${number}]['${string}']`
  | `$.content[${number}].content[${number}].content[${number}].${string}`
  | `$.content[${number}].content[${number}].content[${number}]['${string}']`
  | `$.content[${number}].content[${number}].content[${number}].content[${number}].${string}`
  | `$.content[${number}].content[${number}].content[${number}].content[${number}]['${string}']`;

/**
 * Scripture data represented in JSON format. Data compatible transformation from USX/USFM
 * @public
 */
export declare interface Usj {
  /** The USJ spec type */
  type: typeof USJ_TYPE;
  /** The USJ spec version */
  version: typeof USJ_VERSION;
  /** The JSON representation of scripture contents from USFM/USX */
  content: MarkerContent[];
}

/**
 * The USJ spec type
 * @public
 */
export declare const USJ_TYPE = "USJ";

/**
 * The USJ spec version
 * @public
 */
export declare const USJ_VERSION = "3.1";

/**
 * A JSONPath query to a specific point in an attribute key string in a {@link MarkerObject} or
 * {@link Usj}. The property cannot be `type` or `marker` because these properties' keys have no
 * representation in USFM. The property also cannot be any special attribute whose key doesn't have
 * a text representation in USFM like default attribute, leading attribute, text content attribute
 *
 * To represent a location in an attribute's value, use {@link UsjPropertyValueLocation}.
 *
 * @public
 */
export declare interface UsjAttributeKeyLocation {
  /**
   * JSON path to the marker whose attribute key the location is pointing to. The offset applies to
   * this attribute's key string unless the attribute is an attribute marker in USFM.
   */
  jsonPath: ContentJsonPath;
  /** Attribute name on the marker object whose key this location is pointing to. */
  keyName: string;
  /**
   * The character index in the attribute's key string where this location is pointing.
   *
   * If the attribute is an attribute marker in USFM, the location is at this offset within the
   * marker name for this attribute marker (for example, `c`'s `altnumber` attribute has attribute
   * marker `ca`, so its `keyOffset` applies to `ca`).
   *
   * If the attribute is not an attribute marker in USFM, the location is at this offset within the
   * attribute's key string.
   */
  keyOffset: number;
}

/**
 * A JSONPath query to an attribute marker derived from an attribute on a {@link MarkerObject} or
 * {@link Usj}. Indicates the very beginning of that marker (at the backslash in USFM).
 *
 * @public
 */
export declare interface UsjAttributeMarkerLocation {
  /** JSON path to the marker whose attribute marker the location is pointing to. */
  jsonPath: ContentJsonPath;
  /**
   * Attribute name on the marker object whose key this location is pointing to. This attribute is
   * an attribute marker in USFM.
   */
  keyName: string;
}

/**
 * A JSONPath query to a specific point in the closing marker representation of an attribute marker
 * derived from an attribute on a {@link MarkerObject} or {@link Usj}.
 *
 * @public
 */
export declare interface UsjClosingAttributeMarkerLocation {
  /**
   * JSON path to the marker whose attribute marker's closing marker the location is pointing to.
   * The offset applies to the closing marker representation of that attribute marker (for example,
   * `\ca*` in USFM).
   */
  jsonPath: ContentJsonPath;
  /**
   * Attribute name on the marker object whose key this location is pointing to. This attribute is
   * an attribute marker in USFM.
   */
  keyName: string;
  /**
   * The character index in the closing marker representation where this location is pointing. The
   * location is at this offset within the closing marker representation of the attribute marker.
   */
  keyClosingMarkerOffset: number;
}

/**
 * A JSONPath query to a specific point in the closing marker representation of a
 * {@link MarkerObject} or {@link Usj} node.
 *
 * @public
 */
export declare interface UsjClosingMarkerLocation {
  /**
   * JSON path to the marker object whose closing marker the location is pointing to. The offset
   * applies to the closing marker representation of that marker (for example, `\nd*` in USFM).
   */
  jsonPath: ContentJsonPath;
  /**
   * The character index in the closing marker representation where this location is pointing. The
   * location is at this offset within the closing marker representation.
   */
  closingMarkerOffset: number;
}

/** Serializable USJ locations relative to a specific USJ document (chapter or book) */
/**
 * A JSONPath query to a {@link MarkerContent}, {@link Usj}, or property within a USJ document and
 * additional information that point to a specific location in that USJ document.
 *
 * This type does not include a verse reference because the JSONPath is relative to a specific USJ
 * document; that USJ document may have a book, a chapter, or something else in it. Use
 * `UsjLocation` to specify which USJ document this location is relative to, making the
 * location an absolute verse reference location. The closest equivalent concept in USFM to this
 * relative document location is a string character index in a USFM document; such an index is
 * relative to a specific USFM document rather than indicating an absolute position in a Scripture
 * text.
 *
 * This type intends to represent USFM positions (`UsfmVerseLocation`) in USJ space. However,
 * there are some USFM positions that are not currently representable with these types:
 *
 * - The second slash in `optbreak`'s USFM representation `//` (literally not representable)
 * - Nested marker prefix on opening markers like `+` for character markers (literally not
 *   representable)
 * - The bar `|` that indicates the start of closing marker attributes (no official representation)
 * - The equals sign for closing marker attributes (no official representation)
 * - The quotes around closing marker attribute values (no official representation)
 * - The space between closing marker attributes (no official representation)
 *
 * Also note that the following types do not specify a concrete location that is actually in the USJ
 * document but represent a USFM location relative to the most similar thing in USJ that there is:
 *
 * - {@link UsjClosingMarkerLocation} - there are no distinct closing objects in JSON; there is a
 *   common syntax for closing every object, but it is only one character and is on every single
 *   object as opposed to USFM closing markers which are multiple characters long and are only
 *   sometimes present.
 * - {@link UsjAttributeKeyLocation} - when the attribute whose key is being pointed to is an
 *   attribute marker in USFM, the `keyOffset` does not apply to the USJ attribute name (e.g.
 *   `altnumber`) but to the USFM attribute marker name (e.g. `ca`).
 * - {@link UsjAttributeMarkerLocation} - attribute markers are just properties in JSON; they do not
 *   have their own object such that they would have an opening that can be pointed to in the JSON
 *   like they have their own opening in USFM.
 * - {@link UsjClosingAttributeMarkerLocation} - attribute markers are just properties in JSON, plus
 *   they are in the same situation as {@link UsjClosingMarkerLocation} as detailed above.
 *
 * To see many examples of the same point represented by both USFM and USJ locations, go to
 * https://github.com/paranext/paranext-core/tree/main/lib/platform-bible-utils/src/scripture/usj-reader-writer-test-data/testUSFM-2SA-1-locations.ts
 *
 * @public
 */
export declare type UsjDocumentLocation =
  | UsjMarkerLocation
  | UsjClosingMarkerLocation
  | UsjTextContentLocation
  | UsjPropertyValueLocation
  | UsjAttributeKeyLocation
  | UsjAttributeMarkerLocation
  | UsjClosingAttributeMarkerLocation;

/**
 * Converts an array of indexes into a USJ JSONPath string.
 *
 * @param indexes - An array of numeric indexes to convert.
 * @returns A USJ JSONPath string constructed from the indexes.
 *
 * @public
 */
export declare function usjJsonPathFromIndexes(indexes: number[]): ContentJsonPath;

/**
 * A JSONPath query to a {@link MarkerObject} or {@link Usj} node. Indicates the very beginning of
 * that marker (at the backslash in USFM).
 *
 * @public
 */
export declare interface UsjMarkerLocation {
  /** JSON path to the marker object the location is pointing to. */
  jsonPath: ContentJsonPath;
}

/**
 * A JSONPath query to a specific point in a property (`marker` or an attribute) value string in a
 * {@link MarkerObject} or {@link Usj}. The property cannot be `type` because `type`'s value has no
 * representation in USFM.
 *
 * To represent a location in an attribute's key, use {@link UsjAttributeKeyLocation}.
 *
 * @public
 */
export declare interface UsjPropertyValueLocation {
  /**
   * JSON path to the property the location is pointing to. The offset applies to this property's
   * value string.
   */
  jsonPath: PropertyJsonPath;
  /**
   * The character index in the property's value string where this location is pointing. The
   * location is at this offset within the property's value string.
   */
  propertyOffset: number;
}

/**
 * A JSONPath query to a specific point in a text content string in a {@link MarkerObject.content}
 * array.
 *
 * @public
 */
export declare interface UsjTextContentLocation {
  /**
   * JSON path to the text content string the location is pointing to. The offset applies to this
   * text string.
   */
  jsonPath: ContentJsonPath;
  /**
   * The character index in the text content string where this location is pointing. The location is
   * at this offset within the text content string.
   */
  offset: number;
}

/**
 * Converts a USJ object to a USX string.
 *
 * @param usj - The USJ object to convert
 * @returns The converted USX string.
 *
 * @public
 */
export declare function usjToUsxString(usj: Usj): string;

/**
 * The USX spec type
 * @public
 */
export declare const USX_TYPE = "usx";

/**
 * The USX spec version
 * @public
 */
export declare const USX_VERSION = "3.1";

/**
 * Converts a USX string to a USJ object.
 *
 * @param usxString - The USX string to convert.
 * @returns The converted USJ object.
 *
 * @public
 */
export declare function usxStringToUsj(usxString: string): Usj;

/**
 * List of valid 3-letter Scripture book codes
 * @public
 */
export declare const VALID_BOOK_CODES: readonly [
  "GEN",
  "EXO",
  "LEV",
  "NUM",
  "DEU",
  "JOS",
  "JDG",
  "RUT",
  "1SA",
  "2SA",
  "1KI",
  "2KI",
  "1CH",
  "2CH",
  "EZR",
  "NEH",
  "EST",
  "JOB",
  "PSA",
  "PRO",
  "ECC",
  "SNG",
  "ISA",
  "JER",
  "LAM",
  "EZK",
  "DAN",
  "HOS",
  "JOL",
  "AMO",
  "OBA",
  "JON",
  "MIC",
  "NAM",
  "HAB",
  "ZEP",
  "HAG",
  "ZEC",
  "MAL",
  "MAT",
  "MRK",
  "LUK",
  "JHN",
  "ACT",
  "ROM",
  "1CO",
  "2CO",
  "GAL",
  "EPH",
  "PHP",
  "COL",
  "1TH",
  "2TH",
  "1TI",
  "2TI",
  "TIT",
  "PHM",
  "HEB",
  "JAS",
  "1PE",
  "2PE",
  "1JN",
  "2JN",
  "3JN",
  "JUD",
  "REV",
  "TOB",
  "JDT",
  "ESG",
  "WIS",
  "SIR",
  "BAR",
  "LJE",
  "S3Y",
  "SUS",
  "BEL",
  "1MA",
  "2MA",
  "3MA",
  "4MA",
  "1ES",
  "2ES",
  "MAN",
  "PS2",
  "ODA",
  "PSS",
  "EZA",
  "5EZ",
  "6EZ",
  "DAG",
  "PS3",
  "2BA",
  "LBA",
  "JUB",
  "ENO",
  "1MQ",
  "2MQ",
  "3MQ",
  "REP",
  "4BA",
  "LAO",
  "FRT",
  "BAK",
  "OTH",
  "INT",
  "CNC",
  "GLO",
  "TDX",
  "NDX",
  "XXA",
  "XXB",
  "XXC",
  "XXD",
  "XXE",
  "XXF",
  "XXG",
];

export {};
