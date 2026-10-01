/**
 * A generated oracle for the pending-equals-settled contract: `getUsj()` read while an edit is
 * pending must equal `getUsj()` after that edit settles. The hand-picked suites
 * (`settledGetUsj.test.tsx`, `settleDifferential.test.tsx`) pin chosen shapes; this one enumerates
 * single keystrokes instead, so a shape nobody thought to list is covered by construction.
 *
 * For each document in a small corpus of paragraph, char span (plain, nested, with attributes),
 * note, verse and milestone shapes, in each view, every editable text node of the edited paragraph
 * is visited at every offset of a glyph-like node (marker glyphs, verse glyphs, attribute runs)
 * and at the first and last two offsets of plain text — the positions around marker glyphs and
 * separators. At each, one keystroke is applied to the bytes at that node: a name character, a
 * space, `*`, `\`, `|`, or the removal of the character before (Backspace) or after (Delete) it.
 * Typing is a direct splice into the node rather than `insertText`, so both nodes on either side
 * of a boundary are exercised: the editor can resolve a caret at a glyph's end to the end of the
 * glyph or to the start of the next text, and the two must settle alike.
 *
 * The settle is the departure an abandoned edit gets: a click into another paragraph, blur, and
 * `commitPendingMarkerEdits()`.
 *
 * One test file per view registers the oracle for that view
 * (`pendingSettledOracle.<view>.test.tsx`), so the views run in parallel.
 */
import { mountInView, oracleView } from "../annotationLocations/annotationLocations.test-helpers";
import { $textContaining, twoParaUsj } from "../positions/positions.test-helpers";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $getRoot,
  $getState,
  $isElementNode,
  $isTextNode,
  CLICK_COMMAND,
  LexicalNode,
  TextNode,
} from "lexical";
import {
  $isMarkerNode,
  $isNoteNode,
  $isVerseNode,
  getPendedDisplayOwners,
  NBSP,
  textTypeState,
} from "shared";
import { describe, expect, it } from "vitest";

type Mounted = Awaited<ReturnType<typeof mountInView>>;

/** A char span's attribute, spread in because `MarkerObject` declares no attribute fields. */
const LEMMA: { [attribute: string]: string } = { lemma: "g" };

/** The documents the oracle edits; each one's first body paragraph is the one edited. */
const CORPUS: { name: string; content: MarkerContent[] }[] = [
  {
    name: "closed char span",
    content: ["In the ", { type: "char", marker: "w", content: ["grace"] }, " of God"],
  },
  {
    name: "nested char span",
    content: [
      "a ",
      {
        type: "char",
        marker: "nd",
        content: ["one ", { type: "char", marker: "wj", content: ["two"] }, " three"],
      },
      " b",
    ],
  },
  {
    name: "char span with an attribute",
    content: ["a ", { type: "char", marker: "w", ...LEMMA, content: ["grace"] }, " b"],
  },
  {
    name: "unclosed char span",
    content: ["a ", { type: "char", marker: "bd", closed: "false", content: ["bold"] }],
  },
  {
    name: "verse",
    content: [{ type: "verse", marker: "v", number: "1" }, "In the beginning"],
  },
  {
    name: "note",
    content: [
      "a",
      {
        type: "note",
        marker: "f",
        caller: "+",
        content: [{ type: "char", marker: "ft", content: ["note text"] }],
      },
      " b",
    ],
  },
  {
    name: "milestone",
    content: ["a ", { type: "ms", marker: "qt-s" }, "b"],
  },
];

/** One keystroke at a node offset: the new text and where the caret ends up, or `undefined` when
 * the keystroke does nothing there. */
type Keystroke = (text: string, offset: number) => { text: string; caret: number } | undefined;

const KEYSTROKES: { name: string; apply: Keystroke }[] = [
  ...["x", " ", "*", "\\", "|"].map((character) => ({
    name: `type ${JSON.stringify(character)}`,
    apply: (text: string, offset: number) => ({
      text: text.slice(0, offset) + character + text.slice(offset),
      caret: offset + 1,
    }),
  })),
  {
    name: "Backspace",
    apply: (text: string, offset: number) =>
      offset === 0
        ? undefined
        : { text: text.slice(0, offset - 1) + text.slice(offset), caret: offset - 1 },
  },
  {
    name: "Delete",
    apply: (text: string, offset: number) =>
      offset >= text.length
        ? undefined
        : { text: text.slice(0, offset) + text.slice(offset + 1), caret: offset },
  },
];

/** Whether `node` is shown inside a collapsed note, where nothing can be typed. */
function $isInCollapsedNote(node: LexicalNode): boolean {
  for (let parent = node.getParent(); parent; parent = parent.getParent())
    if ($isNoteNode(parent) && parent.getIsCollapsed()) return true;
  return false;
}

/** Glyph-like nodes, whose every offset is a position around a marker. */
function $isGlyphLike(node: TextNode): boolean {
  return (
    $isMarkerNode(node) || $isVerseNode(node) || $getState(node, textTypeState) === "attribute"
  );
}

/** Every (node index, offset) the oracle edits in the first body paragraph. */
function $editSites(): { index: number; offset: number }[] {
  const sites: { index: number; offset: number }[] = [];
  $editableTexts().forEach((node, index) => {
    const length = node.getTextContentSize();
    const offsets = $isGlyphLike(node)
      ? Array.from({ length: length + 1 }, (_, offset) => offset)
      : [...new Set([0, 1, length - 1, length])].filter(
          (offset) => offset >= 0 && offset <= length,
        );
    offsets.forEach((offset) => sites.push({ index, offset }));
  });
  return sites;
}

/** The editable text nodes of the first body paragraph, in document order. */
function $editableTexts(): TextNode[] {
  const para = $getRoot().getChildren()[2];
  const out: TextNode[] = [];
  const visit = (node: LexicalNode): void => {
    if ($isTextNode(node)) {
      if (node.getMode() === "normal" && !$isInCollapsedNote(node)) out.push(node);
      return;
    }
    if ($isElementNode(node)) node.getChildren().forEach(visit);
  };
  if (para) visit(para);
  return out;
}

/** Click into the second paragraph, blur, and commit whatever is still pending. */
async function depart(mounted: Mounted): Promise<void> {
  await act(async () => {
    mounted.lexical.dispatchCommand(CLICK_COMMAND, new MouseEvent("click"));
    mounted.lexical.update(() => $textContaining("depart here").select(1, 1));
    await Promise.resolve();
    await Promise.resolve();
  });
  const rootElement = mounted.lexical.getRootElement();
  if (!rootElement) throw new Error("editor root not found");
  act(() => rootElement.blur());
  act(() => mounted.ref.current?.commitPendingMarkerEdits());
}

/** The edited paragraph of `usj`, spelled compactly for a failure message. */
function bodyOf(usj: Usj | undefined): string {
  return JSON.stringify(usj?.content.slice(2, -1));
}

/** Rows whose listed keystrokes are known to diverge, each list with the reason it diverges. A
 * listed keystroke that stops diverging fails its row until it leaves the list. */
const KNOWN_DIVERGENCES: { [row: string]: string[] } = {};

/** Register the oracle's rows for `view` (an `ORACLE_VIEWS` name). */
export function describePendingSettledOracle(view: string): void {
  const rows = CORPUS.map(({ name, content }) => [`${name} (${view} view)`, content] as const);

  describe(`pending getUsj() equals the settled document, for every single keystroke (${view} view)`, () => {
    it.each(rows)(
      "%s",
      async (row, content) => {
        const usj = twoParaUsj(content);
        const probe = await mountInView(usj, oracleView(view));
        const sites = probe.lexical.getEditorState().read($editSites);
        probe.unmount();

        const mismatches = new Map<string, string>();
        let pendingCases = 0;
        for (const { index, offset } of sites)
          for (const keystroke of KEYSTROKES) {
            const mounted = await mountInView(usj, oracleView(view));
            let label = "";
            let applied = false;
            await act(async () => {
              mounted.lexical.update(() => {
                const node = $editableTexts()[index];
                const text = node.getTextContent();
                label = `${node.getType()} ${JSON.stringify(text.replaceAll(NBSP, "~"))}@${offset} ${keystroke.name}`;
                const result = keystroke.apply(text, offset);
                if (!result) return;
                applied = true;
                node.setTextContent(result.text);
                node.select(result.caret, result.caret);
              });
              await Promise.resolve();
              await Promise.resolve();
            });
            if (!applied) {
              mounted.unmount();
              continue;
            }
            if ((getPendedDisplayOwners(mounted.lexical)?.size ?? 0) > 0) pendingCases += 1;
            const pending = mounted.ref.current?.getUsj();
            await depart(mounted);
            const settled = mounted.ref.current?.getUsj();
            if (JSON.stringify(pending) !== JSON.stringify(settled))
              mismatches.set(
                label,
                `${label}\n    pending ${bodyOf(pending)}\n    settled ${bodyOf(settled)}`,
              );
            mounted.unmount();
          }

        expect(pendingCases, "no keystroke left an edit pending").toBeGreaterThan(0);
        const known = new Set(KNOWN_DIVERGENCES[row] ?? []);
        expect(
          [...mismatches].filter(([label]) => !known.has(label)).map(([, detail]) => detail),
        ).toEqual([]);
        // A known divergence that no longer diverges must leave the list, so the list only ever
        // shrinks.
        expect([...known].filter((label) => !mismatches.has(label))).toEqual([]);
      },
      300_000,
    );
  });
}
