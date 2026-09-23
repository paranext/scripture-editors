/** Serializable USJ locations relative to a specific USJ document (chapter or book) */

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- Used in TSDoc @link references
import type { MarkerContent, MarkerObject, Usj } from "./usj.model.js";

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
 * Every USFM position has exactly one location, and producers should emit only that one. `offset`
 * has a meaning only on text ({@link UsjTextContentLocation}), so a gap between content items is
 * never a container path plus a content index, and never the root path `$` plus one:
 *
 * 1. A gap immediately in front of a marker object is that marker's {@link UsjMarkerLocation} (at its
 *    backslash).
 * 2. An offset at a token's length addresses the character AFTER that token when that character has
 *    no other location of its own — the space after a marker name, or a line's newline. For text
 *    that is `offset: length`; for a marker name, `['marker']` at `propertyOffset: marker.length`;
 *    for a closing marker, `closingMarkerOffset` at the closing marker's length. So the caret inside
 *    an empty `\b` paragraph is its `['marker']` at `propertyOffset: 1`, and the end of a paragraph
 *    that ends in a note is the note's `closingMarkerOffset: 3` (the newline after `\f*`).
 * 3. The end of the document is one past the final newline, expressed on the last token: rule 2's
 *    form plus one (`propertyOffset: marker.length + 1` when the document ends in an empty
 *    paragraph, text `offset: length + 1` when it ends in text).
 * 4. A root point between two top-level blocks is the start of the next block (rule 1).
 *
 * To see many examples of the same point represented by both USFM and USJ locations, go to
 * https://github.com/paranext/paranext-core/tree/main/lib/platform-bible-utils/src/scripture/usj-reader-writer-test-data/testUSFM-2SA-1-locations.ts
 *
 * @public
 */
export type UsjDocumentLocation =
  | UsjMarkerLocation
  | UsjClosingMarkerLocation
  | UsjTextContentLocation
  | UsjPropertyValueLocation
  | UsjAttributeKeyLocation
  | UsjAttributeMarkerLocation
  | UsjClosingAttributeMarkerLocation;

/**
 * A JSONPath query to a {@link MarkerObject} or {@link Usj} node. Indicates the very beginning of
 * that marker (at the backslash in USFM).
 *
 * @public
 */
export interface UsjMarkerLocation {
  /** JSON path to the marker object the location is pointing to. */
  jsonPath: ContentJsonPath;
}

/**
 * A JSONPath query to a specific point in the closing marker representation of a
 * {@link MarkerObject} or {@link Usj} node.
 *
 * @public
 */
export interface UsjClosingMarkerLocation {
  /**
   * JSON path to the marker object whose closing marker the location is pointing to. The offset
   * applies to the closing marker representation of that marker (for example, `\nd*` in USFM).
   */
  jsonPath: ContentJsonPath;
  /**
   * The character index in the closing marker representation where this location is pointing. The
   * location is at this offset within the closing marker representation. At the representation's
   * length it is the character after the closing marker when that character has no other location
   * (see {@link UsjDocumentLocation}).
   */
  closingMarkerOffset: number;
}

/**
 * A JSONPath query to a specific point in a text content string in a {@link MarkerObject.content}
 * array.
 *
 * @public
 */
export interface UsjTextContentLocation {
  /**
   * JSON path to the text content string the location is pointing to. The offset applies to this
   * text string.
   */
  jsonPath: ContentJsonPath;
  /**
   * The character index in the text content string where this location is pointing. The location is
   * at this offset within the text content string. At the string's length it is the character after
   * the text when that character has no other location (see {@link UsjDocumentLocation}).
   *
   * `offset` means an index into a text content string only: `jsonPath` names that string, never
   * the marker object or `Usj` containing it.
   */
  offset: number;
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
export interface UsjPropertyValueLocation {
  /**
   * JSON path to the property the location is pointing to. The offset applies to this property's
   * value string.
   */
  jsonPath: PropertyJsonPath;
  /**
   * The character index in the property's value string where this location is pointing. The
   * location is at this offset within the property's value string. At the value's length it is the
   * character after the value when that character has no other location — for `marker`, the space or
   * newline after the marker name (see {@link UsjDocumentLocation}).
   */
  propertyOffset: number;
}

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
export interface UsjAttributeKeyLocation {
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
export interface UsjAttributeMarkerLocation {
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
export interface UsjClosingAttributeMarkerLocation {
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
 * JSON path to a {@link MarkerObject}, {@link Usj}, or text content string in the current USJ
 * document.
 *
 * Eight clauses cover every shape the editors render (table cell → char → nested char → text is
 * seven). Deeper paths are valid at runtime; the type is a bound, not a rule.
 *
 * @public
 */
export type ContentJsonPath =
  | ""
  | `$`
  | `$.content[${number}]`
  | `$.content[${number}].content[${number}]`
  | `$.content[${number}].content[${number}].content[${number}]`
  | `$.content[${number}].content[${number}].content[${number}].content[${number}]`
  | `$.content[${number}].content[${number}].content[${number}].content[${number}].content[${number}]`
  | `$.content[${number}].content[${number}].content[${number}].content[${number}].content[${number}].content[${number}]`
  | `$.content[${number}].content[${number}].content[${number}].content[${number}].content[${number}].content[${number}].content[${number}]`
  | `$.content[${number}].content[${number}].content[${number}].content[${number}].content[${number}].content[${number}].content[${number}].content[${number}]`;

/**
 * JSON path to the `marker` or an attribute on a {@link MarkerObject} or {@link Usj} in the current
 * USJ document. Note that it seems you must use `['bracket notation']` rather than `.dot` notation
 * if there are symbols other than underscore in the property name
 *
 * The catch-all template-literal member that matches anything starting `$.` subsumes every depth
 * member below it — a depth path starts `$.content[` in both notations — so any such path
 * type-checks, and the per-depth members document the shapes this type is expected to carry rather
 * than enforcing a bound. (`$['property']`, a property directly on the document root, and the empty
 * string `''` are the two members the catch-all does not cover, because neither starts `$.`.) Eight
 * depths cover every shape the editors render (table cell → char → nested char → text is seven).
 *
 * @public
 */
export type PropertyJsonPath =
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
  | `$.content[${number}].content[${number}].content[${number}].content[${number}]['${string}']`
  | `$.content[${number}].content[${number}].content[${number}].content[${number}].content[${number}].${string}`
  | `$.content[${number}].content[${number}].content[${number}].content[${number}].content[${number}]['${string}']`
  | `$.content[${number}].content[${number}].content[${number}].content[${number}].content[${number}].content[${number}].${string}`
  | `$.content[${number}].content[${number}].content[${number}].content[${number}].content[${number}].content[${number}]['${string}']`
  | `$.content[${number}].content[${number}].content[${number}].content[${number}].content[${number}].content[${number}].content[${number}].${string}`
  | `$.content[${number}].content[${number}].content[${number}].content[${number}].content[${number}].content[${number}].content[${number}]['${string}']`
  | `$.content[${number}].content[${number}].content[${number}].content[${number}].content[${number}].content[${number}].content[${number}].content[${number}].${string}`
  | `$.content[${number}].content[${number}].content[${number}].content[${number}].content[${number}].content[${number}].content[${number}].content[${number}]['${string}']`;
