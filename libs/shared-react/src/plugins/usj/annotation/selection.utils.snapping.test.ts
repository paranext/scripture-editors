/**
 * The snapping table: one row per USFM byte a Standard-view document displays, asserted in BOTH
 * directions.
 *
 * Standard view (markerMode "editable") renders USFM bytes as real nodes — marker glyphs,
 * attribute display runs, the optbreak token, a chapter's and a verse's own glyph text — so every
 * one of those bytes has an exact `UsjDocumentLocation`. The rules are:
 *
 * - **Snap LEFT to the nearest representable position.** If that position has an offset space,
 *   keep counting into it (the space after `\ca` is `keyOffset` = the key length); if it does
 *   not, land on it exactly.
 * - **One-way collapses**: the `+` of a nested `\+nd` and the second `/` of `//` have no USJ
 *   representation of their own, so they report the location of the byte before them and resolve
 *   back to that byte. Rows with `resolvesTo` name the byte the location comes back to.
 *
 * The expected values come from paranext-core's `testUSFM-2SA-1-locations.ts` (the authoritative
 * USFM-offset ↔ USJ-location pairs), mirrored in `libs/test-data/src/data/2sa.usj-locations.ts`.
 * Shapes that 2SA's fixtures do not render — a nested glyph's closer, a collapsed note's caller —
 * are hand-built here.
 */
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { createBasicTestEnvironment } from "../../../../../../libs/shared/src/nodes/usj/test.utils";
import { $createImmutableNoteCallerNode } from "../../../nodes/usj/ImmutableNoteCallerNode";
import { usjReactNodes } from "../../../nodes/usj";
import { $getLocationFromNode, $getNodeFromLocation } from "./selection.utils";
import type { UsjDocumentLocation } from "@eten-tech-foundation/scripture-utilities";
import {
  $createTextNode,
  $getRoot,
  $setState,
  type LexicalEditor,
  type LexicalNode,
  type TextNode,
} from "lexical";
import {
  $createAttributeRunNode,
  $createBookNode,
  $createChapterNode,
  $createCharNode,
  $createImmutableTypedTextNode,
  $createMarkerNode,
  $createMilestoneNode,
  $createNoteNode,
  $createParaNode,
  $createTypedMarkNode,
  $createUnknownNode,
  $createVerseNode,
  getEditableCallerText,
  getVisibleOpenMarkerText,
  type MarkerNode,
  NBSP,
  textTypeState,
  TypedMarkNode,
} from "shared";

const NODES = [TypedMarkNode, ...usjReactNodes];

/** One byte of displayed USFM: the editor point that addresses it and the USJ location it maps to. */
interface SnapRow {
  /** What the byte is, for test output. */
  name: string;
  /** The node carrying the byte and the offset of the byte within that node's display text. */
  point: () => [LexicalNode, number];
  /** The location the byte maps to. */
  location: UsjDocumentLocation;
  /**
   * Where the location resolves back to, when that is not the point itself — the collapse target
   * of a byte USJ cannot address on its own.
   */
  resolvesTo?: () => [LexicalNode, number];
}

/** Builds an attribute display run's value node (textType "attribute"). */
function $attributeText(text: string): TextNode {
  const node = $createTextNode(text);
  $setState(node, textTypeState, "attribute");
  return node;
}

/** Runs a snapping table: every row outbound, and inbound to the row's point or collapse target. */
function runSnapRows(getEditor: () => LexicalEditor, rows: SnapRow[]) {
  it.each(rows)("$name", (row) => {
    getEditor()
      .getEditorState()
      .read(() => {
        const [node, offset] = row.point();
        expect($getLocationFromNode(node, offset, undefined)).toEqual(row.location);

        const [resolvedNode, resolvedOffset] = row.resolvesTo ? row.resolvesTo() : [node, offset];
        const [gotNode, gotOffset] = $getNodeFromLocation(row.location, undefined);
        expect(gotNode?.getKey()).toBe(resolvedNode.getKey());
        expect(gotOffset).toBe(resolvedOffset);
      });
  });
}

describe("nested char glyphs", () => {
  // \p Nested \wj character \+nd markers\+nd*\wj*
  let editor: LexicalEditor;
  let opener: MarkerNode;
  let closer: MarkerNode;
  let content: TextNode;
  const charPath = "$.content[0].content[1].content[1]";

  beforeAll(() => {
    editor = createBasicTestEnvironment(NODES, () => {
      opener = $createMarkerNode("nd", "opening", true);
      closer = $createMarkerNode("nd", "closing", true);
      content = $createTextNode(`${NBSP}markers`);
      const nested = $createCharNode("nd").append(opener, content, closer);
      const outer = $createCharNode("wj").append(
        $createMarkerNode("wj", "opening"),
        $createTextNode(`${NBSP}character `),
        nested,
        $createMarkerNode("wj", "closing"),
      );
      $getRoot().append(
        $createParaNode("p").append(
          $createMarkerNode("p", "opening"),
          $createTextNode("Nested "),
          outer,
        ),
      );
    }).editor;
  });

  runSnapRows(
    () => editor,
    [
      {
        name: "`\\` of `\\+nd` is the char node's marker location",
        point: () => [opener, 0],
        location: { jsonPath: charPath },
      },
      {
        name: "`+` of `\\+nd` collapses onto the `\\`",
        point: () => [opener, 1],
        location: { jsonPath: charPath },
        resolvesTo: () => [opener, 0],
      },
      {
        name: "`n` of `\\+nd` is the marker name's first byte",
        point: () => [opener, 2],
        location: { jsonPath: `${charPath}['marker']`, propertyOffset: 0 },
      },
      {
        name: "`d` of `\\+nd` is the marker name's second byte",
        point: () => [opener, 3],
        location: { jsonPath: `${charPath}['marker']`, propertyOffset: 1 },
      },
      {
        name: "the end of `\\+nd` runs one past the marker name",
        point: () => [opener, 4],
        location: { jsonPath: `${charPath}['marker']`, propertyOffset: 2 },
      },
      {
        name: "`\\` of `\\+nd*` opens the closing marker's offset space",
        point: () => [closer, 0],
        location: { jsonPath: charPath, closingMarkerOffset: 0 },
      },
      {
        name: "`+` of `\\+nd*` counts into the closing marker's offset space",
        point: () => [closer, 1],
        location: { jsonPath: charPath, closingMarkerOffset: 1 },
      },
      {
        name: "`*` of `\\+nd*` is the closing marker's last byte",
        point: () => [closer, 4],
        location: { jsonPath: charPath, closingMarkerOffset: 4 },
      },
      {
        name: "the end of `\\+nd*` runs one past the closing marker",
        point: () => [closer, 5],
        location: { jsonPath: charPath, closingMarkerOffset: 5 },
      },
      {
        name: "the nested span's content is ordinary text",
        point: () => [content, 1],
        location: { jsonPath: `${charPath}.content[0]`, offset: 0 },
      },
    ],
  );
});

describe("char attribute display runs", () => {
  // \p \w marker|lemma="stuff" strong="H1"\w*
  let editor: LexicalEditor;
  let run: TextNode;
  let content: TextNode;
  const charPath = "$.content[0].content[0]";

  beforeAll(() => {
    editor = createBasicTestEnvironment(NODES, () => {
      content = $createTextNode(`${NBSP}marker`);
      run = $attributeText('|lemma="stuff" strong="H1"');
      const char = $createCharNode("w", { lemma: "stuff", strong: "H1" }).append(
        $createMarkerNode("w", "opening"),
        content,
        run,
        $createMarkerNode("w", "closing"),
      );
      $getRoot().append($createParaNode("p").append($createMarkerNode("p", "opening"), char));
    }).editor;
  });

  runSnapRows(
    () => editor,
    [
      {
        name: "`|` snaps left onto the end of the preceding text content",
        point: () => [run, 0],
        location: { jsonPath: `${charPath}.content[0]`, offset: 6 },
        resolvesTo: () => [content, 7],
      },
      {
        name: "the first byte of an attribute key",
        point: () => [run, 1],
        location: { jsonPath: charPath, keyName: "lemma", keyOffset: 0 },
      },
      {
        name: "`=` runs one past the attribute key",
        point: () => [run, 6],
        location: { jsonPath: charPath, keyName: "lemma", keyOffset: 5 },
      },
      {
        name: 'the opening `"` runs two past the attribute key',
        point: () => [run, 7],
        location: { jsonPath: charPath, keyName: "lemma", keyOffset: 6 },
      },
      {
        name: "the first byte of an attribute value",
        point: () => [run, 8],
        location: { jsonPath: `${charPath}['lemma']`, propertyOffset: 0 },
      },
      {
        name: 'the closing `"` runs one past the attribute value',
        point: () => [run, 13],
        location: { jsonPath: `${charPath}['lemma']`, propertyOffset: 5 },
      },
      {
        name: "the space between attributes counts into the preceding value",
        point: () => [run, 14],
        location: { jsonPath: `${charPath}['lemma']`, propertyOffset: 6 },
      },
      {
        name: "the next attribute's key starts a new offset space",
        point: () => [run, 15],
        location: { jsonPath: charPath, keyName: "strong", keyOffset: 0 },
      },
      {
        name: "the second attribute's value",
        point: () => [run, 23],
        location: { jsonPath: `${charPath}['strong']`, propertyOffset: 0 },
      },
    ],
  );
});

describe("a char run collapsed to its default attribute", () => {
  // \p \w marker|stuff\w* — `lemma` is `\w`'s default attribute, so the run shows the bare value.
  let editor: LexicalEditor;
  let run: TextNode;
  const charPath = "$.content[0].content[0]";

  beforeAll(() => {
    editor = createBasicTestEnvironment(NODES, () => {
      run = $attributeText("|stuff");
      const char = $createCharNode("w", { lemma: "stuff" }).append(
        $createMarkerNode("w", "opening"),
        $createTextNode(`${NBSP}marker`),
        run,
        $createMarkerNode("w", "closing"),
      );
      $getRoot().append($createParaNode("p").append($createMarkerNode("p", "opening"), char));
    }).editor;
  });

  runSnapRows(
    () => editor,
    [
      {
        name: "a bare value belongs to the marker's default attribute",
        point: () => [run, 1],
        location: { jsonPath: `${charPath}['lemma']`, propertyOffset: 0 },
      },
      {
        name: "the end of a bare value runs one past it",
        point: () => [run, 6],
        location: { jsonPath: `${charPath}['lemma']`, propertyOffset: 5 },
      },
    ],
  );
});

describe("the `|` of an attribute run with content after it", () => {
  // \p \w marker|stuff more\w* — text typed after the run, before the span re-tokenizes. The `|`
  // has no USJ representation of its own and snaps LEFT, so it must land at the end of the text
  // BEFORE it, not at the end of the span's text.
  let editor: LexicalEditor;
  let run: TextNode;
  const charTextPath = "$.content[0].content[0].content[0]";

  beforeAll(() => {
    editor = createBasicTestEnvironment(NODES, () => {
      run = $attributeText("|stuff");
      const char = $createCharNode("w", { lemma: "stuff" }).append(
        $createMarkerNode("w", "opening"),
        $createTextNode(`${NBSP}marker`),
        run,
        $createTextNode(" more"),
        $createMarkerNode("w", "closing"),
      );
      $getRoot().append($createParaNode("p").append($createMarkerNode("p", "opening"), char));
    }).editor;
  });

  it("snaps to the end of the text before the run", () => {
    const location = editor.getEditorState().read(() => $getLocationFromNode(run, 0, undefined));

    expect(location).toEqual({ jsonPath: charTextPath, offset: "marker".length });
  });
});

describe("a verse's `\\va` attribute-marker run", () => {
  // \p \v 1 \va 3\va*In the beginning
  let editor: LexicalEditor;
  let verse: LexicalNode;
  let opener: MarkerNode;
  let value: TextNode;
  let closer: MarkerNode;
  const versePath = "$.content[0].content[0]";

  beforeAll(() => {
    editor = createBasicTestEnvironment(NODES, () => {
      verse = $createVerseNode("1", getVisibleOpenMarkerText("v", "1"), undefined, "3");
      opener = $createMarkerNode("va", "opening");
      value = $attributeText(`${NBSP}3`);
      closer = $createMarkerNode("va", "closing");
      const wrapper = $createAttributeRunNode("va").append(opener, value, closer);
      $getRoot().append(
        $createParaNode("p").append(
          $createMarkerNode("p", "opening"),
          $createTextNode(NBSP),
          verse,
          wrapper,
          $createTextNode("In the beginning"),
        ),
      );
    }).editor;
  });

  runSnapRows(
    () => editor,
    [
      {
        name: "`\\` of `\\v 1 ` is the verse's marker location",
        point: () => [verse, 0],
        location: { jsonPath: versePath },
      },
      {
        name: "`v` of `\\v 1 ` is the marker name",
        point: () => [verse, 1],
        location: { jsonPath: `${versePath}['marker']`, propertyOffset: 0 },
      },
      {
        name: "the separator after `\\v` runs one past the marker name",
        point: () => [verse, 2],
        location: { jsonPath: `${versePath}['marker']`, propertyOffset: 1 },
      },
      {
        name: "the verse number",
        point: () => [verse, 3],
        location: { jsonPath: `${versePath}['number']`, propertyOffset: 0 },
      },
      {
        name: "the space after the verse number runs one past it",
        point: () => [verse, 4],
        location: { jsonPath: `${versePath}['number']`, propertyOffset: 1 },
      },
      {
        name: "`\\` of `\\va` is the altnumber attribute marker",
        point: () => [opener, 0],
        location: { jsonPath: versePath, keyName: "altnumber" },
      },
      {
        name: "`v` of `\\va` is the attribute marker's name",
        point: () => [opener, 1],
        location: { jsonPath: versePath, keyName: "altnumber", keyOffset: 0 },
      },
      {
        name: "the end of `\\va` runs one past the attribute marker's name",
        point: () => [opener, 3],
        location: { jsonPath: versePath, keyName: "altnumber", keyOffset: 2 },
      },
      {
        name: "the separator before the value collapses onto the end of `\\va`",
        point: () => [value, 0],
        location: { jsonPath: versePath, keyName: "altnumber", keyOffset: 2 },
        resolvesTo: () => [opener, 3],
      },
      {
        name: "the altnumber value",
        point: () => [value, 1],
        location: { jsonPath: `${versePath}['altnumber']`, propertyOffset: 0 },
      },
      {
        name: "`\\` of `\\va*` opens the closing attribute marker's offset space",
        point: () => [closer, 0],
        location: { jsonPath: versePath, keyName: "altnumber", keyClosingMarkerOffset: 0 },
      },
      {
        name: "`*` of `\\va*` is the closing attribute marker's last byte",
        point: () => [closer, 3],
        location: { jsonPath: versePath, keyName: "altnumber", keyClosingMarkerOffset: 3 },
      },
      {
        name: "the end of `\\va*` runs one past the closing attribute marker",
        point: () => [closer, 4],
        location: { jsonPath: versePath, keyName: "altnumber", keyClosingMarkerOffset: 4 },
      },
    ],
  );
});

describe("a chapter's own glyph text and `\\ca` run", () => {
  // \c 1 \ca 1 ca\ca*
  let editor: LexicalEditor;
  let glyph: TextNode;
  let opener: MarkerNode;
  let value: TextNode;
  let closer: MarkerNode;
  const chapterPath = "$.content[0]";

  beforeAll(() => {
    editor = createBasicTestEnvironment(NODES, () => {
      glyph = $createTextNode(getVisibleOpenMarkerText("c", "1"));
      opener = $createMarkerNode("ca", "opening");
      value = $attributeText(`${NBSP}1 ca`);
      closer = $createMarkerNode("ca", "closing");
      $getRoot().append(
        $createChapterNode("1", "2SA 1", "1 ca").append(
          glyph,
          $createAttributeRunNode("ca").append(opener, value, closer),
        ),
      );
    }).editor;
  });

  runSnapRows(
    () => editor,
    [
      {
        name: "`\\` of `\\c 1 ` is the chapter's marker location",
        point: () => [glyph, 0],
        location: { jsonPath: chapterPath },
      },
      {
        name: "`c` of `\\c 1 ` is the marker name",
        point: () => [glyph, 1],
        location: { jsonPath: `${chapterPath}['marker']`, propertyOffset: 0 },
      },
      {
        name: "the separator after `\\c` runs one past the marker name",
        point: () => [glyph, 2],
        location: { jsonPath: `${chapterPath}['marker']`, propertyOffset: 1 },
      },
      {
        name: "the chapter number",
        point: () => [glyph, 3],
        location: { jsonPath: `${chapterPath}['number']`, propertyOffset: 0 },
      },
      {
        name: "the space after the chapter number runs one past it",
        point: () => [glyph, 4],
        location: { jsonPath: `${chapterPath}['number']`, propertyOffset: 1 },
      },
      {
        name: "`\\` of `\\ca` is the altnumber attribute marker",
        point: () => [opener, 0],
        location: { jsonPath: chapterPath, keyName: "altnumber" },
      },
      {
        name: "`c` of `\\ca` is the attribute marker's name",
        point: () => [opener, 1],
        location: { jsonPath: chapterPath, keyName: "altnumber", keyOffset: 0 },
      },
      {
        name: "the altnumber value",
        point: () => [value, 1],
        location: { jsonPath: `${chapterPath}['altnumber']`, propertyOffset: 0 },
      },
      {
        name: "`\\` of `\\ca*` opens the closing attribute marker's offset space",
        point: () => [closer, 0],
        location: { jsonPath: chapterPath, keyName: "altnumber", keyClosingMarkerOffset: 0 },
      },
    ],
  );
});

describe("an optbreak token", () => {
  // \p Here // is one
  let editor: LexicalEditor;
  let token: LexicalNode;
  const optbreakPath = "$.content[0].content[1]";

  beforeAll(() => {
    editor = createBasicTestEnvironment(NODES, () => {
      token = $createImmutableTypedTextNode("marker", "//");
      $getRoot().append(
        $createParaNode("p").append(
          $createMarkerNode("p", "opening"),
          $createTextNode("Here "),
          $createUnknownNode("optbreak").append(token),
          $createTextNode(" is one"),
        ),
      );
    }).editor;
  });

  runSnapRows(
    () => editor,
    [
      {
        name: "the first `/` is the optbreak's marker location",
        point: () => [token, 0],
        location: { jsonPath: optbreakPath },
      },
      {
        name: "the second `/` collapses onto the first",
        point: () => [token, 1],
        location: { jsonPath: optbreakPath },
        resolvesTo: () => [token, 0],
      },
    ],
  );
});

describe("a milestone's attribute display run", () => {
  // \p \qt-s |sid="q1"\*
  let editor: LexicalEditor;
  let milestone: LexicalNode;
  let opener: MarkerNode;
  let value: TextNode;
  let closer: MarkerNode;
  const milestonePath = "$.content[0].content[0]";

  beforeAll(() => {
    editor = createBasicTestEnvironment(NODES, () => {
      milestone = $createMilestoneNode("qt-s", "q1");
      opener = $createMarkerNode("qt-s", "opening");
      value = $attributeText(`${NBSP}|sid="q1"`);
      closer = $createMarkerNode("", "selfClosing");
      $getRoot().append(
        $createParaNode("p").append(
          $createMarkerNode("p", "opening"),
          milestone,
          $createAttributeRunNode("milestone").append(opener, value, closer),
        ),
      );
    }).editor;
  });

  runSnapRows(
    () => editor,
    [
      {
        name: "`\\` of `\\qt-s` is the milestone's marker location",
        point: () => [opener, 0],
        location: { jsonPath: milestonePath },
      },
      {
        name: "`q` of `\\qt-s` is the marker name",
        point: () => [opener, 1],
        location: { jsonPath: `${milestonePath}['marker']`, propertyOffset: 0 },
      },
      {
        name: "the space before the attribute run runs one past the marker name",
        point: () => [value, 0],
        location: { jsonPath: `${milestonePath}['marker']`, propertyOffset: 4 },
        resolvesTo: () => [opener, 5],
      },
      {
        name: "`|` counts into the marker name's offset space",
        point: () => [value, 1],
        location: { jsonPath: `${milestonePath}['marker']`, propertyOffset: 5 },
      },
      {
        name: "the attribute key",
        point: () => [value, 2],
        location: { jsonPath: milestonePath, keyName: "sid", keyOffset: 0 },
      },
      {
        name: "the attribute value",
        point: () => [value, 7],
        location: { jsonPath: `${milestonePath}['sid']`, propertyOffset: 0 },
      },
      {
        name: "`\\` of `\\*` opens the closing marker's offset space",
        point: () => [closer, 0],
        location: { jsonPath: milestonePath, closingMarkerOffset: 0 },
      },
    ],
  );
});

describe("a note's glyph, caller, and `\\cat` run", () => {
  // \p \f + \cat things\cat*\ft Some footnote text.\f*
  let editor: LexicalEditor;
  let glyph: MarkerNode;
  let caller: TextNode;
  let catOpener: MarkerNode;
  let catValue: TextNode;
  let catCloser: MarkerNode;
  const notePath = "$.content[0].content[0]";

  beforeAll(() => {
    editor = createBasicTestEnvironment(NODES, () => {
      glyph = $createMarkerNode("f", "opening");
      caller = $createTextNode(getEditableCallerText("+"));
      catOpener = $createMarkerNode("cat", "opening");
      catValue = $attributeText(`${NBSP}things`);
      catCloser = $createMarkerNode("cat", "closing");
      const note = $createNoteNode("f", "+", false, "things").append(
        glyph,
        caller,
        $createAttributeRunNode("cat").append(catOpener, catValue, catCloser),
        $createCharNode("ft").append(
          $createMarkerNode("ft", "opening"),
          $createTextNode(`${NBSP}Some footnote text.`),
        ),
        $createMarkerNode("f", "closing"),
      );
      $getRoot().append($createParaNode("p").append($createMarkerNode("p", "opening"), note));
    }).editor;
  });

  runSnapRows(
    () => editor,
    [
      {
        name: "`\\` of `\\f` is the note's marker location",
        point: () => [glyph, 0],
        location: { jsonPath: notePath },
      },
      {
        name: "`f` of `\\f` is the marker name",
        point: () => [glyph, 1],
        location: { jsonPath: `${notePath}['marker']`, propertyOffset: 0 },
      },
      {
        name: "the space after `\\f` runs one past the marker name",
        point: () => [glyph, 2],
        location: { jsonPath: `${notePath}['marker']`, propertyOffset: 1 },
      },
      {
        name: "the caller",
        point: () => [caller, 1],
        location: { jsonPath: `${notePath}['caller']`, propertyOffset: 0 },
      },
      {
        name: "the space after the caller runs one past it",
        point: () => [caller, 2],
        location: { jsonPath: `${notePath}['caller']`, propertyOffset: 1 },
      },
      {
        name: "`\\` of `\\cat` is the category attribute marker",
        point: () => [catOpener, 0],
        location: { jsonPath: notePath, keyName: "category" },
      },
      {
        name: "`c` of `\\cat` is the attribute marker's name",
        point: () => [catOpener, 1],
        location: { jsonPath: notePath, keyName: "category", keyOffset: 0 },
      },
      {
        name: "the category value",
        point: () => [catValue, 1],
        location: { jsonPath: `${notePath}['category']`, propertyOffset: 0 },
      },
      {
        name: "`\\` of `\\cat*` opens the closing attribute marker's offset space",
        point: () => [catCloser, 0],
        location: { jsonPath: notePath, keyName: "category", keyClosingMarkerOffset: 0 },
      },
    ],
  );
});

describe("a note's caller wrapped in an annotation mark", () => {
  // \p \f + \ft Some footnote text.\f* — with a comment placed on the caller. The mark is
  // transparent in USJ, so the caller's bytes keep their locations.
  let editor: LexicalEditor;
  let caller: TextNode;
  const notePath = "$.content[0].content[0]";

  beforeAll(() => {
    editor = createBasicTestEnvironment(NODES, () => {
      caller = $createTextNode(getEditableCallerText("+"));
      const note = $createNoteNode("f", "+").append(
        $createMarkerNode("f", "opening"),
        $createTypedMarkNode({ comment: ["1"] }).append(caller),
        $createCharNode("ft").append(
          $createMarkerNode("ft", "opening"),
          $createTextNode(`${NBSP}Some footnote text.`),
        ),
        $createMarkerNode("f", "closing"),
      );
      $getRoot().append($createParaNode("p").append($createMarkerNode("p", "opening"), note));
    }).editor;
  });

  runSnapRows(
    () => editor,
    [
      {
        name: "the caller",
        point: () => [caller, 1],
        location: { jsonPath: `${notePath}['caller']`, propertyOffset: 0 },
      },
      {
        name: "the space after the caller runs one past it",
        point: () => [caller, 2],
        location: { jsonPath: `${notePath}['caller']`, propertyOffset: 1 },
      },
    ],
  );
});

describe("a collapsed note's caller decorator", () => {
  // Standard view renders a note's caller as a decorator; its bytes are the note's `\f + `.
  let editor: LexicalEditor;
  let glyph: MarkerNode;
  let callerDecorator: LexicalNode;
  const notePath = "$.content[0].content[0]";

  beforeAll(() => {
    editor = createBasicTestEnvironment(NODES, () => {
      glyph = $createMarkerNode("f", "opening");
      callerDecorator = $createImmutableNoteCallerNode("+", "Some footnote text.");
      const note = $createNoteNode("f", "+", true).append(
        glyph,
        callerDecorator,
        $createCharNode("ft").append(
          $createMarkerNode("ft", "opening"),
          $createTextNode(`${NBSP}Some footnote text.`),
        ),
        $createMarkerNode("f", "closing"),
      );
      $getRoot().append($createParaNode("p").append($createMarkerNode("p", "opening"), note));
    }).editor;
  });

  runSnapRows(
    () => editor,
    [
      {
        name: "`\\` of `\\f` is the note's marker location",
        point: () => [glyph, 0],
        location: { jsonPath: notePath },
      },
      {
        name: "the collapsed caller carries the caller's bytes",
        point: () => [callerDecorator, 0],
        location: { jsonPath: `${notePath}['caller']`, propertyOffset: 0 },
      },
    ],
  );
});

describe("a book's `\\id` glyph", () => {
  // \id 2SA - TJs USFM Test
  let editor: LexicalEditor;
  let glyph: LexicalNode;
  const bookPath = "$.content[0]";

  beforeAll(() => {
    editor = createBasicTestEnvironment(NODES, () => {
      glyph = $createImmutableTypedTextNode("marker", `\\id 2SA${NBSP}`);
      $getRoot().append($createBookNode("2SA").append(glyph, $createTextNode("- TJs USFM Test")));
    }).editor;
  });

  runSnapRows(
    () => editor,
    [
      {
        name: "`\\` of `\\id` is the book's marker location",
        point: () => [glyph, 0],
        location: { jsonPath: bookPath },
      },
      {
        name: "`i` of `\\id` is the marker name",
        point: () => [glyph, 1],
        location: { jsonPath: `${bookPath}['marker']`, propertyOffset: 0 },
      },
      {
        name: "the space after `\\id` runs one past the marker name",
        point: () => [glyph, 3],
        location: { jsonPath: `${bookPath}['marker']`, propertyOffset: 2 },
      },
      {
        name: "the book code",
        point: () => [glyph, 4],
        location: { jsonPath: `${bookPath}['code']`, propertyOffset: 0 },
      },
      {
        name: "the space after the book code runs one past it",
        point: () => [glyph, 7],
        location: { jsonPath: `${bookPath}['code']`, propertyOffset: 3 },
      },
    ],
  );
});

describe("an opaque sidebar block's read-only bytes", () => {
  // \esb \cat Test Category\cat* … \esbe
  let editor: LexicalEditor;
  let opening: LexicalNode;
  let attributes: LexicalNode;
  let closing: LexicalNode;
  const sidebarPath = "$.content[0]";

  beforeAll(() => {
    editor = createBasicTestEnvironment(NODES, () => {
      opening = $createImmutableTypedTextNode("marker", "\\esb");
      attributes = $createImmutableTypedTextNode("attribute", " \\cat Test Category\\cat*");
      closing = $createImmutableTypedTextNode("marker", "\\esbe");
      $getRoot().append(
        $createUnknownNode("sidebar", "esb", { category: "Test Category" }).append(
          opening,
          attributes,
          $createParaNode("p").append(
            $createMarkerNode("p", "opening"),
            $createTextNode("In the sidebar."),
          ),
          closing,
        ),
      );
    }).editor;
  });

  runSnapRows(
    () => editor,
    [
      {
        name: "`\\` of `\\esb` is the sidebar's marker location",
        point: () => [opening, 0],
        location: { jsonPath: sidebarPath },
      },
      {
        name: "`e` of `\\esb` is the marker name",
        point: () => [opening, 1],
        location: { jsonPath: `${sidebarPath}['marker']`, propertyOffset: 0 },
      },
      {
        name: "the end of `\\esb` runs one past the marker name",
        point: () => [opening, 4],
        location: { jsonPath: `${sidebarPath}['marker']`, propertyOffset: 3 },
      },
      {
        name: "`\\` of `\\cat` is the category attribute marker",
        point: () => [attributes, 1],
        location: { jsonPath: sidebarPath, keyName: "category" },
      },
      {
        name: "`c` of `\\cat` is the attribute marker's name",
        point: () => [attributes, 2],
        location: { jsonPath: sidebarPath, keyName: "category", keyOffset: 0 },
      },
      {
        name: "the category value",
        point: () => [attributes, 6],
        location: { jsonPath: `${sidebarPath}['category']`, propertyOffset: 0 },
      },
      {
        name: "`\\` of `\\cat*` opens the closing attribute marker's offset space",
        point: () => [attributes, 19],
        location: { jsonPath: sidebarPath, keyName: "category", keyClosingMarkerOffset: 0 },
      },
      {
        name: "the end of `\\cat*` runs one past the closing attribute marker",
        point: () => [attributes, 24],
        location: { jsonPath: sidebarPath, keyName: "category", keyClosingMarkerOffset: 5 },
      },
      {
        name: "`\\` of `\\esbe` opens the closing marker's offset space",
        point: () => [closing, 0],
        location: { jsonPath: sidebarPath, closingMarkerOffset: 0 },
      },
      {
        name: "the end of `\\esbe` runs one past the closing marker",
        point: () => [closing, 5],
        location: { jsonPath: sidebarPath, closingMarkerOffset: 5 },
      },
    ],
  );
});
