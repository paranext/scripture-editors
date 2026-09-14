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
import editorUsjAdaptor, {
  initialize as initializeDeserialize,
} from "../adaptors/editor-usj.adaptor";
import {
  initialize as initializeSerialize,
  reset,
  serializeEditorState,
} from "../adaptors/usj-editor.adaptor";
import { serializedState } from "../markerEdit/markerEdit.test-helpers";
import { displayTextToUsj, normalizeSpaceRuns } from "../markerEdit/whitespaceDisplay.utils";
import { MarkerContent, Usj, usxStringToUsj } from "@eten-tech-foundation/scripture-utilities";
import {
  $getLogicalContentItems,
  $getLogicalParent,
  $getLogicalTextLocation,
  $getTextNodeAtLogicalOffset,
  $isAttributeRunNode,
  $isChapterNode,
  $isNoteNode,
  getEditableCallerText,
  LogicalContentItem,
  LogicalTextItem,
} from "shared";
import {
  $getRangeFromUsjSelection,
  $getUsjSelectionFromEditor,
  $isImmutableNoteCallerNode,
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
} from "lexical";
import { usj2Sa } from "test-data";

const usx =
  `<usx version="3.0"><book code="RUT" style="id">T</book><chapter number="1" style="c" />` +
  `<para style="p"><verse number="1" style="v" />In the beginning <char style="nd">LORD</char> made</para></usx>`;
const charTextPath = "$.content[2].content[2].content[0]";

describe("Standard-view char span text coordinates", () => {
  it("resolves a settled text offset inside a char span past the separator prefix", async () => {
    const { editor } = await baseTestEnvironment(serializedState(usxStringToUsj(usx)));

    const [text, offset] = editor.getEditorState().read(() => {
      const range = $getRangeFromUsjSelection({ start: { jsonPath: charTextPath, offset: 2 } });
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
        reported = $getUsjSelectionFromEditor();
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
  /** Segments carrying a char span's separator prefix — the coordinates this suite exists for. */
  leadSegments: number;
  /** Items the exporter's space-run collapse rewrote, so no offset could be checked. */
  collapsedItems: string[];
}

const standardViewOptions = getViewOptions(STANDARD_VIEW_MODE);
if (!standardViewOptions) throw new Error("Standard view options are required for these tests.");

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

/** Serializes `usj` to an editor state string for `viewOptions` — the shape the editor loads. */
function modeState(usj: Usj, viewOptions: ViewOptions): string {
  initializeSerialize(undefined, undefined);
  initializeDeserialize(undefined);
  reset();
  return JSON.stringify({ root: serializeEditorState(usj, viewOptions).root });
}

/**
 * The per-text-node display→data inversion the exporter applies, minus the space-run collapse.
 * Character-for-character, so an offset into the live text is the same offset into the result.
 */
function invertDisplay(text: string, isStandard: boolean): string {
  return isStandard ? displayTextToUsj(text) : text;
}

/** The full per-text-node transform the exporter applies, collapse included. */
function toSettledText(text: string, isStandard: boolean): string {
  return isStandard ? normalizeSpaceRuns(displayTextToUsj(text)) : text;
}

/**
 * Whether `item` is one the exporter emits nothing for, so it occupies no USJ position.
 *
 * Each of these is a node the editor→USJ conversion skips WHOLE while
 * `$shouldIgnoreNodeForContentIndexes` still counts it, so the model numbers one more content
 * item than the USJ has. That is a CONTENT-INDEX disagreement inside notes, chapters, and around
 * display runs — a different defect from the text-OFFSET agreement this suite pins, and one whose
 * fix needs decisions of its own (the note caller decorator lives in `shared-react`, which
 * `libs/shared` may not import; the chapter glyph is arguably the forward adaptor's shape to fix).
 * Dropping them here keeps the offset property covering every real text item instead of stopping
 * at the first element whose items do not line up. When the model learns to skip them this
 * predicate goes away and nothing else in the suite changes.
 */
function $isSkippedByTheExporter(item: LogicalContentItem): boolean {
  if (item.type === "element")
    // An attribute display run wrapper (`\va`/`\vp`, `\ca`/`\cp`, a milestone's or note
    // category's run) and a collapsed note's caller decorator.
    return $isAttributeRunNode(item.node) || $isImmutableNoteCallerNode(item.node);

  const parent = $getLogicalParent(item.segments[0].node);
  // An editable ChapterNode holds its `\c N` glyph as plain text, and the USJ chapter marker
  // carries no content at all.
  if ($isChapterNode(parent)) return true;
  // An expanded note's editable caller text (`+ `), which the exporter matches and drops.
  return (
    $isNoteNode(parent) &&
    item.segments.length === 1 &&
    item.segments[0].node.getTextContent() === getEditableCallerText(parent.getCaller())
  );
}

/** A text item's live content — every segment's text with its presentation-only lead removed. */
function $itemContent(item: LogicalTextItem): string[] {
  return item.segments.map((segment) => segment.node.getTextContent().slice(segment.lead));
}

/**
 * Checks one logical text item against the USJ string the exporter emitted for it: the strings
 * must match, and every offset must select the same tail from both sides.
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
  const contents = $itemContent(item);
  const settled = contents.map((text) => toSettledText(text, isStandard)).join("");
  if (settled !== usjString) {
    report.disagreements.push({
      path,
      detail: `item text ${JSON.stringify(settled)} vs USJ ${JSON.stringify(usjString)}`,
    });
    return;
  }
  const inverted = contents.map((text) => invertDisplay(text, isStandard));
  // The exporter's space-run collapse is the one transform that is not character-for-character,
  // so where it fires no positional model can line up with the emitted string. That is intrinsic
  // normalization rather than a coordinate bug, so the offset property skips such an item — and
  // records it, because a skip is coverage lost.
  if (inverted.join("") !== usjString) {
    report.collapsedItems.push(path);
    return;
  }
  report.checkedItems++;

  if (item.length !== usjString.length)
    report.disagreements.push({
      path,
      detail: `item length ${item.length} vs USJ ${usjString.length}`,
    });

  // Forward: a live (node, offset) point must report the USJ offset selecting the same tail.
  for (let segmentIndex = 0; segmentIndex < item.segments.length; segmentIndex++) {
    const segment = item.segments[segmentIndex];
    const rest = inverted.slice(segmentIndex + 1).join("");
    const size = segment.node.getTextContentSize();
    for (let offset = segment.lead; offset <= size; offset++) {
      const location = $getLogicalTextLocation(segment.node, offset);
      if (location?.index !== index) {
        report.disagreements.push({
          path,
          detail: `offset ${offset} reported item index ${location?.index}`,
        });
        return;
      }
      const liveTail =
        invertDisplay(segment.node.getTextContent().slice(offset), isStandard) + rest;
      if (usjString.slice(location.offset) !== liveTail) {
        report.disagreements.push({
          path,
          detail:
            `offset ${offset} reported ${location.offset}, selecting ` +
            `${JSON.stringify(usjString.slice(location.offset))} not ${JSON.stringify(liveTail)}`,
        });
        return;
      }
    }
  }

  // Inverse: every USJ offset must resolve to a live point that reports it back.
  for (let offset = 0; offset <= usjString.length; offset++) {
    const resolved = $getTextNodeAtLogicalOffset(item, offset);
    if (!resolved) {
      report.disagreements.push({ path, detail: `USJ offset ${offset} resolved to no live point` });
      return;
    }
    const [node, local] = resolved;
    const back = $getLogicalTextLocation(node, local);
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
  // Keep each item's own index alongside its USJ position: the model still numbers the items the
  // exporter skips (see $isSkippedByTheExporter), and the coordinates it reports use that
  // numbering, so the two must be carried separately.
  const modeled = $getLogicalContentItems(parent)
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => !$isSkippedByTheExporter(item));
  const content = usjContent ?? [];
  if (modeled.length !== content.length) {
    const kinds = modeled
      .map(({ item }) => (item.type === "text" ? "text" : item.node.getType()))
      .join(",");
    const usjKinds = content
      .map((entry) => (typeof entry === "string" ? "text" : entry.type))
      .join(",");
    report.disagreements.push({ path, detail: `items [${kinds}] vs USJ [${usjKinds}]` });
    return;
  }
  modeled.forEach(({ item, index }, position) => {
    const entry = content[position];
    const itemPath = `${path}.content[${position}]`;
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
    if ($isElementNode(item.node))
      $checkElement(item.node, entry.content, itemPath, isStandard, report);
  });
}

describe.each(modes)(
  "logical text coordinates agree with the exporter ($name)",
  ({ viewOptions, hasSeparators }) => {
    it("maps every offset of every text item to the character the exporter emits there", async () => {
      const { editor } = await baseTestEnvironment(modeState(usj2Sa, viewOptions));
      const usj = editorUsjAdaptor.deserializeEditorState(editor.getEditorState(), viewOptions);
      if (!usj) throw new Error("the editor state did not serialize to USJ");

      const report: OracleReport = {
        disagreements: [],
        checkedItems: 0,
        leadSegments: 0,
        collapsedItems: [],
      };
      editor.getEditorState().read(() => {
        $checkElement($getRoot(), usj.content, "$", hasStandardViewWhitespace(viewOptions), report);
      });

      expect(report.disagreements).toEqual([]);
      // The corpus holds no space runs, so nothing may be lost to the collapse.
      expect(report.collapsedItems).toEqual([]);
      // A floor, not a pin: it only has to be far enough above zero that a walk which stopped
      // early cannot pass, and low enough that editing the corpus does not churn it.
      expect(report.checkedItems).toBeGreaterThan(100);
      // The separator prefix is what this suite exists for, so a mode that renders one must
      // actually have met some.
      expect(report.leadSegments > 0).toBe(hasSeparators);
    });
  },
);
