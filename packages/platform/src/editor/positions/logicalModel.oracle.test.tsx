/**
 * The logical content model's text coordinates must mean the SAME offsets the editor→USJ exporter
 * produces: a settled USJ offset resolves to the live character at that offset, and a live caret
 * reports the USJ offset of the character it sits before.
 *
 * The round-trip suites (USJ→Lexical→USJ) cannot see a disagreement here — a consistent shift
 * applied in both directions cancels out — so this suite anchors the model against the exporter
 * directly: the exported USJ string IS the oracle, and every offset the model reports must select
 * the same tail of it that the live text selects.
 */
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { baseTestEnvironment } from "../../../../../libs/shared-react/src/plugins/usj/react-test.utils";
import editorUsjAdaptor from "../adaptors/editor-usj.adaptor";
import { serializedState } from "../markerEdit/markerEdit.test-helpers";
import { displayTextToUsj } from "../markerEdit/whitespaceDisplay.utils";
import { MarkerContent, Usj, usxStringToUsj } from "@eten-tech-foundation/scripture-utilities";
import {
  $charGlyphNestedValue,
  $createTypedMarkNode,
  $getLogicalContentItems,
  $getLogicalTextLocation,
  $getTextNodeAtLogicalOffset,
  $isCharNode,
  $isMarkerNode,
  $isTypedMarkNode,
  CharNode,
  LogicalTextItem,
  MarkerNode,
  NBSP,
} from "shared";
import {
  $getRangeFromUsjSelection,
  $getUsjSelectionFromEditor,
  getViewOptions,
  hasStandardViewWhitespace,
  STANDARD_VIEW_MODE,
  ViewOptions,
} from "shared-react";
import {
  $createRangeSelection,
  $getRoot,
  $isElementNode,
  $isTextNode,
  $setSelection,
  ElementNode,
  LexicalNode,
  TextNode,
} from "lexical";
import { usj2Sa } from "test-data";

const usx =
  `<usx version="3.0"><book code="RUT" style="id">T</book><chapter number="1" style="c" />` +
  `<para style="p"><verse number="1" style="v" />In the beginning <char style="nd">LORD</char> made</para></usx>`;
const charTextPath = "$.content[2].content[2].content[0]";

const standardViewOptions = getViewOptions(STANDARD_VIEW_MODE);
if (!standardViewOptions) throw new Error("Standard view options are required for these tests.");

describe("Standard-view char span text coordinates", () => {
  it("resolves a settled text offset inside a char span past the separator prefix", async () => {
    const { editor } = await baseTestEnvironment(serializedState(usxStringToUsj(usx)));

    const [text, offset] = editor.getEditorState().read(() => {
      const range = $getRangeFromUsjSelection(
        { start: { jsonPath: charTextPath, offset: 2 } },
        standardViewOptions,
      );
      return [range?.anchor.getNode().getTextContent(), range?.anchor.offset] as const;
    });

    expect(text?.slice(offset ?? 0)).toBe("RD");
  });

  it("reports a live caret inside a char span in content offsets", async () => {
    const { editor } = await baseTestEnvironment(serializedState(usxStringToUsj(usx)));

    let reported: unknown;
    editor.update(
      () => {
        const para = $getRoot().getChildAtIndex(2);
        if (!$isElementNode(para)) throw new Error("expected a paragraph");
        const char = para.getChildren().find((node) => node.getType() === "char");
        if (!$isElementNode(char)) throw new Error("expected a char span");
        const text = char
          .getChildren()
          .find((node) => $isTextNode(node) && node.getTextContent().includes("LORD"));
        if (!$isTextNode(text)) throw new Error("expected the span text");
        const at = text.getTextContent().indexOf("LO") + 2;
        const selection = $createRangeSelection();
        selection.anchor.set(text.getKey(), at, "text");
        selection.focus.set(text.getKey(), at, "text");
        $setSelection(selection);
        reported = $getUsjSelectionFromEditor(standardViewOptions);
      },
      { discrete: true },
    );

    expect(reported).toEqual({ start: { jsonPath: charTextPath, offset: 2 } });
  });
});

// ---------------------------------------------------------------------------
// Exporter-oracle property: every offset of every text item, in every marker mode
// ---------------------------------------------------------------------------

/** A disagreement between the model and the exporter, with the USJ path that exposed it. */
interface Disagreement {
  path: string;
  detail: string;
}

/**
 * What one walk of a document found. The counters are what keep a green run meaningful: a walk
 * that silently checked nothing would otherwise pass, and the properties below are only as strong
 * as the number of positions they actually visited.
 */
interface OracleReport {
  disagreements: Disagreement[];
  /** Text items whose every offset was checked, in both directions. */
  checkedItems: number;
  /** Segments carrying a char span's separator prefix. */
  leadSegments: number;
  /** Segments carrying a space run that serialization collapses. */
  collapsedSegments: number;
  /** Segments inside an annotation mark. */
  markedSegments: number;
}

/** The view options the 2SA fixture generator uses for each marker mode. */
function generatorViewOptions(markerMode: ViewOptions["markerMode"]): ViewOptions {
  return { markerMode, noteMode: "expanded", hasSpacing: false, isFormattedFont: false };
}

/** `hasSeparators` — only the editable marker modes render a char span's separator at all. */
const modes: { name: string; viewOptions: ViewOptions; hasSeparators: boolean }[] = [
  { name: "editable", viewOptions: generatorViewOptions("editable"), hasSeparators: true },
  { name: "visible", viewOptions: generatorViewOptions("visible"), hasSeparators: false },
  { name: "hidden", viewOptions: generatorViewOptions("hidden"), hasSeparators: false },
  { name: "standard", viewOptions: standardViewOptions, hasSeparators: true },
];

/**
 * Space runs in every place a text item can carry one: mid-paragraph, at either end of a
 * paragraph, right after a verse, around and inside char spans (a span whose content starts with
 * one space, and one whose content starts with a run), beside a data NBSP, and in a note. Standard
 * view displays each run as NBSPs, exactly as it displays a run the user types.
 */
const spaceRunUsx =
  `<usx version="3.0"><book code="RUT" style="id">T</book><chapter number="1" style="c" />` +
  `<para style="p"><verse number="1" style="v" />  In the   beginning <char style="nd"> LORD</char>` +
  `  made <char style="wj">  heaven</char>  and${NBSP}  earth.  </para>` +
  `<para style="p"><verse number="2" style="v" />The earth<note caller="+" style="f">` +
  `<char style="ft">empty  and   void</char></note> was  dark.</para></usx>`;

/** The first text node (not a marker glyph) whose content includes `needle`. */
function $contentText(needle: string): TextNode {
  const node = $getRoot()
    .getAllTextNodes()
    .find((text) => !$isMarkerNode(text) && text.getTextContent().includes(needle));
  if (!node) throw new Error(`no text node containing ${JSON.stringify(needle)}`);
  return node;
}

/** Wrap `nodes`, which must be adjacent siblings, in one annotation mark. */
function $wrapInMark(...nodes: LexicalNode[]): void {
  const mark = $createTypedMarkNode({ spelling: ["oracle"] });
  nodes[0].insertBefore(mark);
  mark.append(...nodes);
}

/** The space-run corpus plus a char span whose content starts with a word, so a separator the
 * exporter fails to strip shows as an extra leading space instead of merging into a run. */
const markedUsx = spaceRunUsx.replace(
  " was  dark.",
  ` was <char style="add">formless</char>  dark.`,
);

/**
 * Annotation marks where they meet the dropped characters: around a char span's separator-bearing
 * text with the opener outside the mark (one span whose text starts with a space, one whose text
 * starts with a word), around an opener AND its text, around an opener alone, and around the tail
 * of a text split inside a space run. A mark is presentation the exporter splices away, so the
 * model has to see through it exactly where the exporter does. A glyph is only wrapped where the
 * mode renders one.
 */
function $markCorpus(): void {
  $wrapInMark($contentText("LORD"));
  $wrapInMark($contentText("formless"));
  const heaven = $contentText("heaven");
  const heavenOpener = heaven.getPreviousSibling();
  if ($isMarkerNode(heavenOpener)) $wrapInMark(heavenOpener, heaven);
  const empty = $contentText("empty");
  const emptyOpener = empty.getPreviousSibling();
  if ($isMarkerNode(emptyOpener)) $wrapInMark(emptyOpener);
  const beginning = $contentText("beginning");
  const [, tail] = beginning.splitText(beginning.getTextContent().indexOf("the") + "the ".length);
  $wrapInMark(tail);
}

/** Content before the document's first paragraph, which loads inside an implied paragraph the
 * exporter splices into the root, followed by paragraphs whose indexes it shifts. */
const impliedParaUsx =
  `<usx version="3.0"><book code="RUT" style="id">T</book><chapter number="1" style="c" />` +
  `<verse number="1" style="v" />In the beginning <char style="nd">LORD</char> made ` +
  `<para style="p"><verse number="2" style="v" />The earth <char style="wj">was</char> void.</para>` +
  `<para style="p">And darkness.</para></usx>`;

const corpora: {
  name: string;
  usj: Usj;
  minimumCheckedItems: number;
  hasSpaceRuns: boolean;
  /** Decorates the loaded editor before it is exported; a corpus that has one must have marks. */
  $decorate?: () => void;
}[] = [
  { name: "2SA", usj: usj2Sa, minimumCheckedItems: 100, hasSpaceRuns: false },
  {
    name: "space runs",
    usj: usxStringToUsj(spaceRunUsx),
    minimumCheckedItems: 8,
    hasSpaceRuns: true,
  },
  {
    name: "implied paragraph",
    usj: usxStringToUsj(impliedParaUsx),
    minimumCheckedItems: 4,
    hasSpaceRuns: false,
  },
  {
    name: "annotation marks",
    usj: usxStringToUsj(markedUsx),
    minimumCheckedItems: 8,
    hasSpaceRuns: true,
    $decorate: $markCorpus,
  },
];

/** The display→data inversion serialization applies to each text node, character for character. */
function invertDisplay(text: string, isStandard: boolean): string {
  return isStandard ? displayTextToUsj(text) : text;
}

/**
 * The whole per-text-node conversion serialization applies, written independently of the editor's
 * own: invert the display text, then collapse runs of plain spaces in the data.
 */
function toSettledText(text: string, isStandard: boolean): string {
  return isStandard ? displayTextToUsj(text).replace(/ {2,}/g, " ") : text;
}

/**
 * Checks one logical text item against the USJ string the exporter emitted for it: the item's
 * converted text must BE that string, every live point must report the offset whose USJ prefix is
 * what serialization makes of the live text before the point, and every USJ offset must resolve
 * to the live character it names and report itself back.
 */
function $checkTextItem(
  item: LogicalTextItem,
  usjString: string,
  index: number,
  path: string,
  isStandard: boolean,
  report: OracleReport,
): void {
  report.leadSegments += item.segments.filter((segment) => segment.lead > 0).length;
  report.collapsedSegments += item.segments.filter(
    (segment) => segment.collapsed.length > 0,
  ).length;
  report.markedSegments += item.segments.filter((segment) =>
    $isTypedMarkNode(segment.node.getParent()),
  ).length;
  const contents = item.segments.map((segment) =>
    segment.node.getTextContent().slice(segment.lead),
  );
  const settledContents = contents.map((text) => toSettledText(text, isStandard));
  if (settledContents.join("") !== usjString) {
    report.disagreements.push({
      path,
      detail: `item text ${JSON.stringify(settledContents.join(""))} vs USJ ${JSON.stringify(usjString)}`,
    });
    return;
  }
  report.checkedItems++;

  if (item.length !== usjString.length)
    report.disagreements.push({
      path,
      detail: `item length ${item.length} vs USJ ${usjString.length}`,
    });

  // Forward: a live (node, offset) point reports the offset whose USJ prefix is the converted
  // live text before the point.
  for (let segmentIndex = 0; segmentIndex < item.segments.length; segmentIndex++) {
    const segment = item.segments[segmentIndex];
    const before = settledContents.slice(0, segmentIndex).join("");
    const size = segment.node.getTextContentSize();
    for (let offset = 0; offset <= size; offset++) {
      const location = $getLogicalTextLocation(segment.node, offset, isStandard);
      if (location?.index !== index) {
        report.disagreements.push({
          path,
          detail: `offset ${offset} reported item index ${location?.index}`,
        });
        return;
      }
      const livePrefix =
        before +
        toSettledText(
          contents[segmentIndex].slice(0, Math.max(0, offset - segment.lead)),
          isStandard,
        );
      if (usjString.slice(0, location.offset) !== livePrefix) {
        report.disagreements.push({
          path,
          detail:
            `offset ${offset} reported ${location.offset}, whose prefix is ` +
            `${JSON.stringify(usjString.slice(0, location.offset))} not ${JSON.stringify(livePrefix)}`,
        });
        return;
      }
    }
  }

  // Inverse: every USJ offset resolves to a live point on the character it names, and that point
  // reports the offset back.
  for (let offset = 0; offset <= usjString.length; offset++) {
    const resolved = $getTextNodeAtLogicalOffset(item, offset);
    if (!resolved) {
      report.disagreements.push({ path, detail: `USJ offset ${offset} resolved to no live point` });
      return;
    }
    const [node, local] = resolved;
    const named = offset < usjString.length ? usjString[offset] : undefined;
    const liveCharacter = node.getTextContent()[local];
    if (named !== undefined && invertDisplay(liveCharacter ?? "", isStandard) !== named) {
      report.disagreements.push({
        path,
        detail:
          `USJ offset ${offset} names ${JSON.stringify(named)} but resolved onto ` +
          `${JSON.stringify(liveCharacter)}`,
      });
      return;
    }
    const back = $getLogicalTextLocation(node, local, isStandard);
    if (back?.index !== index || back.offset !== offset) {
      report.disagreements.push({
        path,
        detail: `USJ offset ${offset} resolved to a point reporting ${back?.index}/${back?.offset}`,
      });
      return;
    }
  }
}

/**
 * Walks `parent`'s logical content items alongside the USJ content the exporter emitted for the
 * same element, recursing into element items, and collects every disagreement.
 */
function $checkElement(
  parent: ElementNode,
  usjContent: MarkerContent[] | undefined,
  path: string,
  isStandard: boolean,
  report: OracleReport,
): void {
  const modeled = $getLogicalContentItems(parent, isStandard);
  const content = usjContent ?? [];
  if (modeled.length !== content.length) {
    const kinds = modeled
      .map((item) => (item.type === "text" ? "text" : item.node.getType()))
      .join(",");
    const usjKinds = content
      .map((entry) => (typeof entry === "string" ? "text" : entry.type))
      .join(",");
    report.disagreements.push({ path, detail: `items [${kinds}] vs USJ [${usjKinds}]` });
    return;
  }
  modeled.forEach((item, index) => {
    const entry = content[index];
    const itemPath = `${path}.content[${index}]`;
    if (item.type === "text") {
      if (typeof entry !== "string") {
        report.disagreements.push({
          path: itemPath,
          detail: `text item vs USJ ${JSON.stringify(entry)}`,
        });
        return;
      }
      $checkTextItem(item, entry, index, itemPath, isStandard, report);
      return;
    }
    if (typeof entry === "string") {
      report.disagreements.push({
        path: itemPath,
        detail: `element item ${item.node.getType()} vs USJ text ${JSON.stringify(entry)}`,
      });
      return;
    }
    if ($isCharNode(item.node)) $checkCharGlyphs(item.node, itemPath, report);
    if ($isElementNode(item.node))
      $checkElement(item.node, entry.content, itemPath, isStandard, report);
  });
}

/**
 * The exporter's separator strip decides "an opening char glyph precedes this text" by finding ANY
 * opening marker among a char span's children, where the live model asks `$charGlyphNestedValue`
 * whether that glyph really describes a char span (`precedesOpeningCharGlyph`,
 * editor-usj.adaptor.ts). The two agree only while every opening glyph the editor builds inside a
 * span is a char glyph, so every one the walk meets must be.
 */
function $checkCharGlyphs(char: CharNode, path: string, report: OracleReport): void {
  const $children = (parent: ElementNode): LexicalNode[] =>
    parent.getChildren().flatMap((child) => ($isTypedMarkNode(child) ? $children(child) : [child]));
  $children(char)
    .filter(
      (child): child is MarkerNode => $isMarkerNode(child) && child.getMarkerSyntax() === "opening",
    )
    .filter((glyph) => $charGlyphNestedValue(glyph, char) === undefined)
    .forEach((glyph) =>
      report.disagreements.push({
        path,
        detail: `opening glyph \\${glyph.getMarker()} inside \\${char.getMarker()} is not a char glyph`,
      }),
    );
}

describe.each(corpora)(
  "the $name corpus",
  ({ usj: corpus, minimumCheckedItems, hasSpaceRuns, $decorate }) => {
    describe.each(modes)(
      "logical text coordinates agree with the exporter ($name)",
      ({ viewOptions, hasSeparators }) => {
        it("maps every offset of every text item to the character the exporter emits there", async () => {
          const { editor } = await baseTestEnvironment(serializedState(corpus, viewOptions));
          if ($decorate) editor.update($decorate, { discrete: true });
          const usj = editorUsjAdaptor.deserializeEditorState(editor.getEditorState(), viewOptions);
          if (!usj) throw new Error("the editor state did not serialize to USJ");
          const isStandard = hasStandardViewWhitespace(viewOptions);

          const report: OracleReport = {
            disagreements: [],
            checkedItems: 0,
            leadSegments: 0,
            collapsedSegments: 0,
            markedSegments: 0,
          };
          editor.getEditorState().read(() => {
            $checkElement($getRoot(), usj.content, "$", isStandard, report);
          });

          expect(report.disagreements).toEqual([]);
          // A floor, not a pin: it only has to be far enough above zero that a walk which stopped
          // early cannot pass, and low enough that editing the corpus does not churn it.
          expect(report.checkedItems).toBeGreaterThan(minimumCheckedItems);
          // Each kind of dropped character is what this suite exists for, so a view that drops it
          // must actually have met some, and no other view may.
          expect(report.leadSegments > 0).toBe(hasSeparators);
          expect(report.collapsedSegments > 0).toBe(hasSpaceRuns && isStandard);
          expect(report.markedSegments > 0).toBe($decorate !== undefined);
        });
      },
    );
  },
);
