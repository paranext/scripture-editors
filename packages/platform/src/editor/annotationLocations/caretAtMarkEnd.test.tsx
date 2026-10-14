/**
 * A caret at the end of content whose last byte an annotation mark holds is the same caret as with
 * no mark there once the browser has reported it back: the same place in the document, and what a
 * keystroke there does is the same.
 *
 * Lexical reads the caret back from the screen after every commit, and a caret at the end of a
 * mark's last text, with nothing after it in the mark, is read onto the start of the node after the
 * mark — a note's closing glyph, or a char span's attribute run — a different place from the
 * content's end.
 */
import { drainNativeSelectionChange } from "../editor-test.utils";
import {
  $caretPositions,
  $editSites,
  oracleRows,
  pendingOracleView,
  positionContext,
} from "../markerEdit/pendingSettledOracle.test-helpers";
import { $prepareSettleScopes } from "../positions/settledScopes.utils";
import { $settledLocationFromLivePoint } from "../positions/settledPositions.utils";
import { pasteEvent } from "../markerEdit/markerEdit.test-helpers";
import { mountInView, ORACLE_TYPE } from "./annotationLocations.test-helpers";
import {
  $globalSite,
  $planAnnotations,
  $spellings,
} from "./annotationTransparency.oracle.test-helpers";
import { act } from "@testing-library/react";
import {
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  DELETE_CHARACTER_COMMAND,
  PASTE_COMMAND,
  SELECTION_CHANGE_COMMAND,
} from "lexical";
import { $getLogicalTextLocation, $logicalText, getPendedDisplayOwners, NBSP } from "shared";

const VIEW = "standard+protectedNoteShell";

/** `Selection.modify("extend", "backward", "character")`, which jsdom lacks and Lexical's
 * `deleteCharacter` asks for: the focus moves one character back through the document's text. */
function extendBackwardOneCharacter(this: Selection): void {
  const { focusNode, focusOffset } = this;
  if (!focusNode) return;
  if (focusNode.nodeType === Node.TEXT_NODE && focusOffset > 0) {
    this.extend(focusNode, focusOffset - 1);
    return;
  }
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  walker.currentNode = focusNode;
  for (let text = walker.previousNode(); text; text = walker.previousNode()) {
    const length = text.textContent?.length ?? 0;
    if (length > 0) {
      this.extend(text, length - 1);
      return;
    }
  }
}

/** Where the caret is, as a content location (no location when it is not in content text), and
 * the paragraph's text after a Backspace from there — with or without the oracle's annotations. */
async function caretAtContentEnd(
  isAnnotated: boolean,
): Promise<{ location: string; afterBackspace: string }> {
  const row = oracleRows(VIEW).find(([name]) => name.startsWith("note ("));
  if (!row) throw new Error("no note row");
  const [, usj] = row;
  const view = pendingOracleView(VIEW);
  const mounted = await mountInView(usj, view);
  const { site, plan } = mounted.lexical.getEditorState().read(() => {
    const sites = $editSites().map(({ index, offset, shell }) =>
      $globalSite(index, offset, !!shell),
    );
    return {
      plan: $planAnnotations(view),
      site: sites.find((candidate) => {
        const spelling = $spellings(candidate)[0];
        return (
          !candidate.shell &&
          spelling !== undefined &&
          spelling.node.getTextContent().endsWith("note text") &&
          spelling.offset === spelling.node.getTextContentSize()
        );
      }),
    };
  });
  if (!site) throw new Error("no site at the end of the note's content");
  if (isAnnotated)
    for (const { id, range } of plan)
      await act(async () => {
        mounted.ref.current?.setAnnotation(range, ORACLE_TYPE, id);
        await Promise.resolve();
      });
  await act(async () => {
    await drainNativeSelectionChange();
  });
  await act(async () => {
    mounted.lexical.update(() => {
      // The spelling at the content's end: the end of the mark's text when a mark holds it.
      const [spelling] = $spellings(site);
      spelling.node.select(spelling.offset, spelling.offset);
      mounted.lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    });
    await drainNativeSelectionChange();
  });
  const location = mounted.lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection) || !selection.isCollapsed()) return "no caret";
    const node = selection.anchor.getNode();
    if (!$isTextNode(node)) return `element ${node.getType()}`;
    const location = $getLogicalTextLocation(node, selection.anchor.offset, true);
    return location
      ? `${location.parent.getType()} item ${location.index} offset ${location.offset}`
      : "not in content text";
  });
  const modify = Object.getOwnPropertyDescriptor(Selection.prototype, "modify");
  Selection.prototype.modify = extendBackwardOneCharacter;
  try {
    await act(async () => {
      mounted.lexical.update(() => {
        mounted.lexical.dispatchCommand(DELETE_CHARACTER_COMMAND, true);
      });
      await drainNativeSelectionChange();
    });
  } finally {
    if (modify) Object.defineProperty(Selection.prototype, "modify", modify);
    else Reflect.deleteProperty(Selection.prototype, "modify");
  }
  const afterBackspace = JSON.stringify(mounted.ref.current?.getUsj()?.content);
  mounted.unmount();
  return { location, afterBackspace };
}

describe("a caret at the end of a note's content whose last byte a mark holds", () => {
  it("is read back to the same place as with no mark, and Backspace removes the same byte", async () => {
    const plain = await caretAtContentEnd(false);
    const annotated = await caretAtContentEnd(true);
    expect(plain.location).toBe("char item 0 offset 9");
    expect(plain.afterBackspace).toContain('"note tex"');
    expect(annotated.location).toBe(plain.location);
    expect(annotated.afterBackspace).toBe(plain.afterBackspace);
  });
});

const ATTRIBUTE_VIEW = "standard";

/**
 * Place the caret at one edge of `\w grace|g\w*` — the end of its content, or the start of its
 * attribute run — let the browser report it back, and type or paste `x`: where the caret was read
 * back, whether an edit pends after the keystroke, and every caret position's settled location
 * then, as one sorted set per document position (a carrier an annotation cuts into pieces spells a
 * boundary twice) — with or without the oracle's annotations.
 */
async function typedAtAttributeRunEdge(
  isAnnotated: boolean,
  edge: "content end" | "run start",
  keystroke: "type" | "paste",
): Promise<{ caret: string; isPending: boolean; reports: [number, string[]][] }> {
  const row = oracleRows(ATTRIBUTE_VIEW).find(([name]) =>
    name.startsWith("char span with an attribute ("),
  );
  if (!row) throw new Error("no attribute row");
  const [, usj] = row;
  const view = pendingOracleView(ATTRIBUTE_VIEW);
  const mounted = await mountInView(usj, view);
  const { site, plan } = mounted.lexical.getEditorState().read(() => {
    const sites = $editSites().map(({ index, offset, shell }) =>
      $globalSite(index, offset, !!shell),
    );
    return {
      plan: $planAnnotations(view),
      site: sites.find((candidate) => {
        const spelling = $spellings(candidate)[0];
        if (!spelling) return false;
        const text = $logicalText(spelling.node);
        return edge === "content end"
          ? text === `${NBSP}grace` && spelling.offset === text.length
          : text === "|g" && spelling.offset === 0;
      }),
    };
  });
  if (!site) throw new Error(`no site at the ${edge}`);
  if (isAnnotated)
    for (const { id, range } of plan)
      await act(async () => {
        mounted.ref.current?.setAnnotation(range, ORACLE_TYPE, id);
        await Promise.resolve();
      });
  await act(async () => {
    await drainNativeSelectionChange();
  });
  await act(async () => {
    mounted.lexical.update(() => {
      const [spelling] = $spellings(site);
      spelling.node.select(spelling.offset, spelling.offset);
    });
    await drainNativeSelectionChange();
  });
  const caret = mounted.lexical.getEditorState().read(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection) || !selection.isCollapsed()) return "no caret";
    const node = selection.anchor.getNode();
    if (!$isTextNode(node)) return `element ${node.getType()}`;
    const location = $getLogicalTextLocation(node, selection.anchor.offset, true);
    return location
      ? `${location.parent.getType()} item ${location.index} offset ${location.offset}`
      : "not in content text";
  });
  await act(async () => {
    mounted.lexical.update(() => {
      if (keystroke === "type")
        mounted.lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, "x");
      else mounted.lexical.dispatchCommand(PASTE_COMMAND, pasteEvent({ "text/plain": "x" }).event);
    });
    await Promise.resolve();
    await drainNativeSelectionChange();
  });
  const isPending = (getPendedDisplayOwners(mounted.lexical)?.size ?? 0) > 0;
  const context = positionContext(mounted.lexical, view);
  const reports = mounted.lexical.getEditorState().read(() => {
    const prepared = $prepareSettleScopes(context);
    const byPosition = new Map<number, Set<string>>();
    for (const { node, offset, position } of $caretPositions()) {
      const location = $settledLocationFromLivePoint(prepared, node, offset);
      let set = byPosition.get(position);
      if (!set) byPosition.set(position, (set = new Set()));
      set.add(JSON.stringify(location ?? null));
    }
    return [...byPosition].map(([position, set]): [number, string[]] => [
      position,
      [...set].sort(),
    ]);
  });
  mounted.unmount();
  return { caret, isPending, reports };
}

describe("a caret at the end of a char span's content whose last byte a mark holds, before the span's attribute run", () => {
  it.each([
    ["content end", "type"],
    ["run start", "type"],
    ["content end", "paste"],
    ["run start", "paste"],
  ] as const)(
    "placed at the %s, is read back to the same place as with no mark, and a %s goes into the content",
    async (edge, keystroke) => {
      const plain = await typedAtAttributeRunEdge(false, edge, keystroke);
      const annotated = await typedAtAttributeRunEdge(true, edge, keystroke);
      expect(plain.caret).toBe("char item 0 offset 5");
      expect(plain.isPending).toBe(false);
      // The attribute run's end and the closer's front are one document position: both spellings
      // report there, the value's end and the closer's start.
      expect(plain.reports).toContainEqual([
        expect.any(Number),
        [
          JSON.stringify({ jsonPath: "$.content[2].content[1]", closingMarkerOffset: 0 }),
          JSON.stringify({ jsonPath: "$.content[2].content[1]['lemma']", propertyOffset: 1 }),
        ],
      ]);
      expect(annotated.caret).toBe(plain.caret);
      expect(annotated.isPending).toBe(plain.isPending);
      expect(annotated.reports).toEqual(plain.reports);
    },
  );
});
