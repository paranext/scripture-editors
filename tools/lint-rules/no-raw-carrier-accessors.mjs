/**
 * Flags a raw Lexical text or sibling accessor called on a display-byte carrier node.
 *
 * An annotation that holds part of a carrier (a marker glyph, a verse, an unmatched closer) cuts it
 * into sibling pieces of its own class (`libs/shared/src/nodes/features/displayPieces.state.ts`).
 * `getTextContent()` on a piece reads that piece's text only, `getNextSibling()` from it may return
 * the next piece of the same carrier, `setTextContent()` rewrites one piece, `insertAfter()` and
 * `insertBefore()` can land between two pieces, `select*()` puts the caret inside the carrier, and
 * `remove()` or `replace()` takes one piece and leaves the rest. A reader that
 * means the carrier goes through the chain helpers instead: `$logicalText`, `$setLogicalText`,
 * `$pieceHead`, `$lastPiece`, `$logicalNextSibling`, `$logicalPreviousSibling`, `$logicalOffset`.
 * A call that means the piece itself (the piece machinery, a node's own DOM) says so with an
 * `eslint-disable-next-line` comment giving the reason.
 *
 * Type-aware: the receiver's static type must be one of {@link CARRIER_CLASSES} or a subclass. A
 * carrier typed only as `TextNode` (an attribute run's text, a note's editable caller, a chapter's
 * glyph) is not seen, and neither is a parent's child walk (`getChildren()`, `getFirstChild()`),
 * which sees every piece; those still need the helpers by review. A call on `this`, inside a node
 * class's own implementation, is left alone.
 */

/** The node classes a display-byte annotation cuts into pieces that a type can name. */
const CARRIER_CLASSES = new Set(["MarkerNode", "VerseNode", "ImmutableUnmatchedNode"]);

/** Each raw accessor, and the helper to reach for instead. */
const ACCESSORS = new Map([
  ["getTextContent", "$logicalText"],
  ["getTextContentSize", "$logicalText(...).length"],
  ["setTextContent", "$setLogicalText"],
  ["getNextSibling", "$logicalNextSibling (from $lastPiece)"],
  ["getPreviousSibling", "$logicalPreviousSibling (from $pieceHead)"],
  ["getNextSiblings", "$logicalNextSibling"],
  ["getPreviousSiblings", "$logicalPreviousSibling"],
  ["getIndexWithinParent", "the index of $pieceHead"],
  ["isFirstChild", "$pieceHead(...).isFirstChild"],
  ["isLastChild", "$lastPiece(...).isLastChild"],
  ["insertBefore", "$pieceHead(...).insertBefore"],
  ["insertAfter", "$lastPiece(...).insertAfter"],
  ["selectStart", "$pieceHead(...).selectStart"],
  ["selectEnd", "$lastPiece(...).selectEnd"],
  ["selectPrevious", "$pieceHead(...).selectPrevious"],
  ["selectNext", "$lastPiece(...).selectNext"],
  ["select", "a point from $pieceAtLogicalOffset"],
  ["remove", "removing every piece ($pieces)"],
  ["replace", "replacing the whole chain ($pieces)"],
]);

/** Whether `type`, or a member of it if it is a union or an intersection, is a carrier class or
 * extends one. */
function isCarrierType(checker, type, seen = new Set()) {
  if (seen.has(type)) return false;
  seen.add(type);
  if (type.isUnion() || type.isIntersection())
    return type.types.some((member) => isCarrierType(checker, member, seen));
  const symbol = type.getSymbol();
  if (symbol && CARRIER_CLASSES.has(symbol.getName())) return true;
  if (!type.isClassOrInterface()) return false;
  return (checker.getBaseTypes(type) ?? []).some((base) => isCarrierType(checker, base, seen));
}

export default {
  meta: {
    type: "problem",
    docs: {
      description:
        "Disallow raw text, sibling, insertion, selection and removal calls on display-byte carriers an annotation may cut into pieces",
    },
    messages: {
      raw:
        "`{{method}}()` on a {{type}} reads or writes one piece of a carrier an annotation may have " +
        "cut into pieces. Use {{helper}} for the whole carrier, or disable this line with the reason " +
        "the piece itself is meant.",
    },
    schema: [],
  },
  create(context) {
    const services = context.sourceCode.parserServices;
    // Without type information the rule could see nothing, and would pass every file silently.
    if (!services?.program || !services.esTreeNodeToTSNodeMap)
      throw new Error(
        `no-raw-carrier-accessors needs type information (parserOptions.projectService) for ${context.filename}`,
      );
    const checker = services.program.getTypeChecker();
    return {
      CallExpression(node) {
        const { callee } = node;
        if (callee.type !== "MemberExpression" || callee.computed) return;
        if (callee.property.type !== "Identifier") return;
        const method = callee.property.name;
        const helper = ACCESSORS.get(method);
        if (!helper || callee.object.type === "ThisExpression") return;
        const type = checker.getTypeAtLocation(services.esTreeNodeToTSNodeMap.get(callee.object));
        if (!isCarrierType(checker, type)) return;
        context.report({
          node: callee.property,
          messageId: "raw",
          data: { method, helper, type: checker.typeToString(type) },
        });
      },
    };
  },
};
