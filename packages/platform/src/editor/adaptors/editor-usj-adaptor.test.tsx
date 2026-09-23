// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { createBasicTestEnvironment } from "../../../../../libs/shared/src/nodes/usj/test.utils";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  baseTestEnvironment,
  deleteTextAtSelection,
} from "../../../../../libs/shared-react/src/plugins/usj/react-test.utils";
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  CHAPTER_1_INDEX,
  VERSE_2_EDITABLE_INDEX,
  VERSE_2_INDEX,
  VERSE_PARA_INDEX,
  editorStateEmpty,
  editorStateGen1v1,
  editorStateGen1v1Editable,
  editorStateGen1v1ImpliedPara,
  editorStateGen1v1ImpliedParaEmpty,
  editorStateGen1v1Nonstandard,
  editorStateMarks,
  editorStateWithUnknownItems,
  usjGen1v1,
  usjGen1v1ImpliedPara,
  usjGen1v1ImpliedParaEmpty,
  usjGen1v1Nonstandard,
  usjMarks,
  usjWithUnknownItems,
} from "../../../../utilities/src/converters/usj/converter-test.data";
import editorUsjAdaptor, {
  deserializeSerializedEditorState,
  initialize as initializeDeserialize,
} from "./editor-usj.adaptor";
import usjEditorAdaptor, {
  initialize as initializeSerialize,
  reset,
  serializeEditorState,
} from "./usj-editor.adaptor";
import {
  EMPTY_USJ,
  MarkerContent,
  MarkerObject,
  Usj,
  usxStringToUsj,
} from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { deepEqual } from "fast-equals";
import {
  $createTextNode,
  $getRoot,
  $isTextNode,
  $setState,
  LexicalEditor,
  SerializedEditorState,
  SerializedTextNode,
  TextNode,
} from "lexical";
import {
  $createImmutableVerseNode,
  FORMATTED_VIEW_MODE,
  getViewOptions,
  NoteCallerOnClick,
  STANDARD_VIEW_MODE,
  TextSpacingPlugin,
  UNFORMATTED_VIEW_MODE,
  usjReactNodes,
} from "shared-react";
import {
  $createAttributeRunNode,
  $createCharNode,
  $createMarkerNode,
  $createMilestoneNode,
  $createNoteNode,
  $createParaNode,
  $createTypedMarkNode,
  $createVerseNode,
  $isParaNode,
  CHAPTER_MARKER,
  CharNode,
  CURSOR_PLACEHOLDER_CHAR,
  getEditableCallerText,
  getVisibleOpenMarkerText,
  isSerializedCharNode,
  isSerializedImmutableTypedTextNode,
  isSerializedTextNode,
  isSerializedUnknownNode,
  MarkerNode,
  MILESTONE_VERSION,
  MilestoneNode,
  NBSP,
  NoteNode,
  ParaNode,
  SerializedCharNode,
  SerializedChapterNode,
  SerializedMarkerNode,
  SerializedMilestoneNode,
  SerializedNoteNode,
  SerializedParaNode,
  SerializedTypedMarkNode,
  SerializedVerseNode,
  ImmutableTableCellMarker,
  textTypeState,
  TypedMarkNode,
  VERSE_MARKER,
  COMMENT_MARK_TYPE,
} from "shared";

const nodes = [TypedMarkNode, ...usjReactNodes];
const { editor } = createBasicTestEnvironment(nodes);

describe("Editor USJ Adaptor", () => {
  it("should convert to USJ from empty Lexical editor state JSON", () => {
    const editorState = editor.parseEditorState(editorStateEmpty);

    const usj = editorUsjAdaptor.deserializeEditorState(editorState);

    expect(usj).toEqual(EMPTY_USJ);
  });

  it("should convert to USJ from Lexical editor state JSON", () => {
    const editorState = editor.parseEditorState(editorStateGen1v1);

    const usj = editorUsjAdaptor.deserializeEditorState(editorState);

    expect(usj).toEqual(usjGen1v1);
  });

  it("should convert to USJ from Lexical editor state JSON with an empty implied para", () => {
    const editorState = editor.parseEditorState(editorStateGen1v1ImpliedParaEmpty);

    const usj = editorUsjAdaptor.deserializeEditorState(editorState);

    expect(usj).toEqual(usjGen1v1ImpliedParaEmpty);
  });

  it("should convert to USJ from Lexical editor state JSON with implied para", () => {
    const editorState = editor.parseEditorState(editorStateGen1v1ImpliedPara);

    const usj = editorUsjAdaptor.deserializeEditorState(editorState);

    expect(usj).toEqual(usjGen1v1ImpliedPara);
  });

  it("should convert to USJ from Lexical editor state JSON with nonstandard features", () => {
    const editorState = editor.parseEditorState(editorStateGen1v1Nonstandard);

    const usj = editorUsjAdaptor.deserializeEditorState(editorState);

    expect(usj).toEqual(usjGen1v1Nonstandard);
  });

  it("should convert to USJ from Lexical editor state JSON with edits", () => {
    const editorStateEdited = editorStateGen1v1Editable;
    const chapter1 = editorStateEdited.root.children[CHAPTER_1_INDEX] as SerializedChapterNode;
    const chapter1Number = "101";
    (chapter1.children[0] as SerializedTextNode).text = getVisibleOpenMarkerText(
      CHAPTER_MARKER,
      chapter1Number,
    );
    const verse2 = (editorStateEdited.root.children[VERSE_PARA_INDEX] as SerializedParaNode)
      .children[VERSE_2_EDITABLE_INDEX] as SerializedVerseNode;
    const verse2Number = "202";
    verse2.text = getVisibleOpenMarkerText(VERSE_MARKER, verse2Number);
    const editorState = editor.parseEditorState(editorStateEdited);

    // The fixture is the EDITABLE-marker-mode shape (NBSP separators after char openers), so the
    // deserialization must know the mode it was built in — the char-separator strip only runs
    // for editable-mode states, exactly as production callers always pass their view options.
    const usj = editorUsjAdaptor.deserializeEditorState(
      editorState,
      getViewOptions(UNFORMATTED_VIEW_MODE),
    );

    const usjGen1v1Edited = usjGen1v1;
    const usjChapter1 = usjGen1v1Edited.content[CHAPTER_1_INDEX] as MarkerObject;
    usjChapter1.number = chapter1Number;
    const usjVerse2 = (
      (usjGen1v1Edited.content[VERSE_PARA_INDEX] as MarkerObject).content as MarkerObject[]
    )[VERSE_2_INDEX];
    usjVerse2.number = verse2Number;
    expect(usj).toEqual(usjGen1v1Edited);
  });

  it("should convert USJ to Lexical editor state JSON and back again", () => {
    const serializedEditorState = usjEditorAdaptor.serializeEditorState(usjGen1v1);
    const editorState = editor.parseEditorState(serializedEditorState);

    const usj = editorUsjAdaptor.deserializeEditorState(editorState);

    const isEqual = deepEqual(usj, usjGen1v1);
    expect(usj).toEqual(usjGen1v1);
    expect(isEqual).toBe(true);
  });

  it("keys footnote-content closer/closed on state, not the marker family", () => {
    // Closer display keys on the span's ACTUAL closed state. A \fr the source marked
    // closed="false" (real ParatextData's genuinely-unclosed shape) renders closer-less and keeps
    // closed="false" on the round trip; a \fr the source did NOT mark closed is an explicitly-closed
    // span — it renders its \fr* closer and must NOT acquire a phantom closed="false" that a C#
    // writer would then use to DROP the real closer.
    const usj = usxStringToUsj(
      `<usx version="3.0"><book code="RUT" style="id" /><chapter number="1" style="c" /><para style="p"><verse number="1" style="v" />Text<note caller="+" style="f"><char style="fr" closed="false">1.1 </char><char style="xt">Gen 1:1</char></note></para></usx>`,
    );
    initializeSerialize(undefined, undefined);
    reset();
    initializeDeserialize(undefined);
    const serializedEditorState = serializeEditorState(usj);
    const editorState = editor.parseEditorState(serializedEditorState);

    const result = editorUsjAdaptor.deserializeEditorState(editorState);

    const flatten = (items: MarkerContent[] | undefined): MarkerObject[] =>
      (items ?? []).flatMap((item) =>
        typeof item === "string" ? [] : [item, ...flatten(item.content)],
      );
    const flat = flatten(result?.content);
    const frChar = flat.find((m) => m.marker === "fr");
    const xtChar = flat.find((m) => m.marker === "xt");
    expect(frChar).toBeDefined();
    expect((frChar as MarkerObject & { closed?: string }).closed).toBe("false");
    expect(xtChar).toBeDefined();
    expect((xtChar as MarkerObject & { closed?: string }).closed).toBeUndefined();
  });

  it("should convert to USJ from Lexical editor state JSON with Marks", () => {
    const editorState = editor.parseEditorState(editorStateMarks);

    const usj = editorUsjAdaptor.deserializeEditorState(editorState);

    expect(usj).toEqual(usjMarks);
  });

  it("should convert to USJ from Lexical editor state JSON with unknown items", () => {
    const editorState = editor.parseEditorState(editorStateWithUnknownItems);

    const usj = editorUsjAdaptor.deserializeEditorState(editorState);

    expect(usj).toEqual(usjWithUnknownItems);
  });

  it("serializes a table back to USJ", () => {
    const serializedEditorState = {
      root: {
        type: "root",
        format: "",
        indent: 0,
        version: 1,
        direction: null,
        children: [
          {
            type: "immutable-table",
            format: "",
            indent: 0,
            version: 1,
            direction: null,
            children: [
              {
                type: "immutable-table-row",
                marker: "tr",
                format: "",
                indent: 0,
                version: 1,
                direction: null,
                children: [
                  {
                    type: "immutable-table-cell",
                    marker: "tc1",
                    align: "start",
                    colspan: "2",
                    format: "",
                    indent: 0,
                    version: 1,
                    direction: null,
                    children: [
                      {
                        type: "text",
                        text: "Header",
                        detail: 0,
                        format: 0,
                        mode: "normal",
                        style: "",
                        version: 1,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    };

    const usj = deserializeSerializedEditorState(
      serializedEditorState as unknown as SerializedEditorState,
    );

    expect(usj?.content).toEqual([
      {
        type: "table",
        content: [
          {
            type: "table:row",
            marker: "tr",
            content: [
              {
                type: "table:cell",
                marker: "tc1",
                align: "start",
                colspan: "2",
                content: ["Header"],
              },
            ],
          },
        ],
      },
    ]);
  });

  it("round-trips a multi-row table (header + body) through both adaptors, preserving align/colspan", () => {
    const usj: Usj = {
      ...EMPTY_USJ,
      content: [
        {
          type: "table",
          content: [
            {
              type: "table:row",
              marker: "tr",
              content: [
                // Logical alignment (start/end) must survive so RTL rendering stays correct.
                { type: "table:cell", marker: "th1", align: "start", content: ["Name"] },
                { type: "table:cell", marker: "thr2", align: "end", content: ["Amount"] },
              ],
            },
            {
              type: "table:row",
              marker: "tr",
              content: [
                {
                  type: "table:cell",
                  marker: "tc1",
                  colspan: "2",
                  content: ["Total"],
                } as ImmutableTableCellMarker,
              ],
            },
          ],
        },
      ],
    };

    const serializedEditorState = usjEditorAdaptor.serializeEditorState(usj);
    const roundTripped = deserializeSerializedEditorState(serializedEditorState);

    expect(roundTripped).toEqual(usj);
  });
});

// EmptyVerseCaretGuardPlugin drops a transient zero-width-space "caret host" into an emptied verse
// so the insertion point stays visible (PT-4308). A node that is *only* placeholders carries no
// Scripture text and is skipped, but a zero-width space is legitimate content in some scripts
// (Thai/Khmer/Lao line breaks), so an embedded one in real text must survive.
describe("Editor USJ Adaptor — caret-host placeholder", () => {
  it("drops a bare zero-width-space caret host and keeps surrounding verse text", () => {
    editor.update(
      () => {
        $getRoot().clear();
        $getRoot().append(
          $createParaNode("p").append(
            $createImmutableVerseNode("1"),
            $createTextNode(CURSOR_PLACEHOLDER_CHAR), // caret host in the now-empty verse 1
            $createImmutableVerseNode("2"),
            $createTextNode("real text"),
          ),
        );
      },
      { discrete: true },
    );

    const usj = editorUsjAdaptor.deserializeEditorState(editor.getEditorState());
    const serialized = JSON.stringify(usj);

    expect(serialized.includes(CURSOR_PLACEHOLDER_CHAR)).toBe(false); // bare host never reaches USJ
    expect(serialized.includes("real text")).toBe(true); // verse 2's real text survives
  });

  it("drops a bare caret host past a trailing note and keeps the note", () => {
    // TrailingNoteCaretGuardPlugin's host sits after a note in an ordinary paragraph rather than
    // inside a verse; the serializer's rule is keyed on the node's own bare placeholder text, not
    // on what surrounds it, so the same exclusion covers it.
    editor.update(
      () => {
        $getRoot().clear();
        $getRoot().append(
          $createParaNode("p").append(
            $createTextNode("before "),
            $createNoteNode("f", "+").append(
              $createCharNode("ft").append($createTextNode("note body")),
            ),
            $createTextNode(CURSOR_PLACEHOLDER_CHAR), // caret host past the trailing note
          ),
        );
      },
      { discrete: true },
    );

    const usj = editorUsjAdaptor.deserializeEditorState(editor.getEditorState());
    const serialized = JSON.stringify(usj);

    expect(serialized.includes(CURSOR_PLACEHOLDER_CHAR)).toBe(false); // bare host never reaches USJ
    expect(serialized.includes("note body")).toBe(true); // the note itself survives
    expect(serialized.includes("before ")).toBe(true);
  });

  it("preserves a zero-width space embedded in real Scripture text", () => {
    const withZwsp = `first${CURSOR_PLACEHOLDER_CHAR}second`;
    editor.update(
      () => {
        $getRoot().clear();
        $getRoot().append(
          $createParaNode("p").append($createImmutableVerseNode("1"), $createTextNode(withZwsp)),
        );
      },
      { discrete: true },
    );

    const usj = editorUsjAdaptor.deserializeEditorState(editor.getEditorState());

    // The ZWSP is content here (not a bare host), so it must round-trip untouched.
    expect(JSON.stringify(usj).includes(withZwsp)).toBe(true);
  });

  function buildPatchedStandardState(displayText: string) {
    const usj = usxStringToUsj(
      `<usx version="3.0"><book code="RUT" style="id" /><chapter number="1" style="c" /><para style="p"><verse number="1" style="v" />in the days</para></usx>`,
    );
    initializeSerialize(undefined, undefined);
    reset();
    const state = serializeEditorState(usj, getViewOptions(STANDARD_VIEW_MODE));
    const para = state.root.children[2] as SerializedParaNode;
    const text = para.children.find(
      (child) => isSerializedTextNode(child) && child.text.includes("in the days"),
    ) as SerializedTextNode;
    text.text = displayText;
    return state;
  }

  it("inverts display whitespace when deserializing standard view", () => {
    // display tilde (= data NBSP) + display-NBSP run (= space run, collapses to one)
    const state = buildPatchedStandardState(`in~the${NBSP}${NBSP}days`);
    initializeDeserialize(undefined);
    const roundTripped = deserializeSerializedEditorState(
      state,
      getViewOptions(STANDARD_VIEW_MODE),
    );
    expect(JSON.stringify(roundTripped)).toContain(`in${NBSP}the days`);
  });

  it("inverts display whitespace when deserializing editable+expanded standard view", () => {
    // Expanded notes do not change that this is standard-view text: the display `~` (= data NBSP)
    // and display-NBSP space run MUST invert on deserialization exactly as in collapsed standard
    // view. Before the gating fix, editable+expanded skipped inversion, so a display `~` survived
    // into the saved data as a literal tilde.
    const state = buildPatchedStandardState(`in~the${NBSP}${NBSP}days`);
    initializeDeserialize(undefined);
    const standard = getViewOptions(STANDARD_VIEW_MODE);
    if (!standard) throw new Error("standard view options not found");
    const expandedStandard = { ...standard, noteMode: "expanded" as const };
    const roundTripped = deserializeSerializedEditorState(state, expandedStandard);
    expect(JSON.stringify(roundTripped)).toContain(`in${NBSP}the days`);
  });

  it("leaves whitespace untouched when deserializing without standard viewOptions", () => {
    const state = buildPatchedStandardState(`in~the${NBSP}${NBSP}days`);
    initializeDeserialize(undefined);
    const roundTripped = deserializeSerializedEditorState(state);
    expect(JSON.stringify(roundTripped)).toContain(`in~the${NBSP}${NBSP}days`);
  });

  /**
   * A standard-view state for `\nd LORD\+wj x\+wj*Y\nd*`: an outer char span carrying its own
   * glyph-adjacent separator (`LORD`), a nested char span, and plain text after the nested
   * span's closer (`Y`) — the shape `precedesOpeningCharGlyph` (editor-usj.adaptor.ts) has to
   * read correctly.
   */
  function buildNestedCharState() {
    const usx = `<usx version="3.0"><book code="RUT" style="id" /><chapter number="1" style="c" /><para style="p"><verse number="1" style="v" /><char style="nd">LORD<char style="wj">x</char>Y</char></para></usx>`;
    const usj = usxStringToUsj(usx);
    initializeSerialize(undefined, undefined);
    reset();
    return serializeEditorState(usj, getViewOptions(STANDARD_VIEW_MODE));
  }

  /** The outer `nd` char span within a state built by {@link buildNestedCharState}. */
  function findOuterChar(state: SerializedEditorState) {
    const para = state.root.children[2] as SerializedParaNode;
    const char = para.children.find(
      (child) => isSerializedCharNode(child) && child.marker === "nd",
    );
    if (!char || !isSerializedCharNode(char)) throw new Error("Expected the outer nd char span");
    return char;
  }

  it("standard view: round-trips an authored NBSP right after a nested char closer", () => {
    // `\nd LORD\+wj x\+wj*~y\nd*` — the byte after the nested span's closer is an authored data
    // NBSP (USFM `~`), not the glyph-adjacent display separator: only text directly after an
    // OPENING glyph carries that separator, and this text sits after a CLOSING glyph.
    // `usjTextToDisplay` (the forward adaptor's load-time whitespace map) already turns an
    // authored data NBSP into a display `~` before this text ever reaches the strip check, so it
    // never starts with NBSP here — pinning that this round-trips untouched.
    const usx = `<usx version="3.0"><book code="RUT" style="id" /><chapter number="1" style="c" /><para style="p"><verse number="1" style="v" /><char style="nd">LORD<char style="wj">x</char>${NBSP}y</char></para></usx>`;
    const usj = usxStringToUsj(usx);
    initializeSerialize(undefined, undefined);
    reset();
    const state = serializeEditorState(usj, getViewOptions(STANDARD_VIEW_MODE));
    initializeDeserialize(undefined);
    const roundTripped = deserializeSerializedEditorState(
      state,
      getViewOptions(STANDARD_VIEW_MODE),
    );
    // Exact equality, not just a substring: the outer span's own glyph-adjacent separator
    // ("LORD", right after the opening glyph) is still stripped, and the byte after the nested
    // closer survives untouched — a full byte-for-byte round trip, not merely "somewhere in the
    // output".
    expect(roundTripped).toEqual(usj);
  });

  it("standard view: does not strip a char-child text node's own leading NBSP unless it follows an opening glyph", () => {
    // Exercises the position check directly: a text node whose OWN leading byte is a real NBSP
    // — not the load-time-converted display `~` of the test above — but that sits right after a
    // CLOSING glyph rather than an opening one. Only the glyph-adjacent separator prefix may be
    // stripped; this byte is content and must survive (as a real space once inverted — the
    // reverse adaptor's unconditional NBSP-to-space mapping is unaffected by this fix), not be
    // silently dropped.
    const state = buildNestedCharState();
    const outerChar = findOuterChar(state);
    const trailingText = outerChar.children.find(
      (child) => isSerializedTextNode(child) && child.text === "Y",
    ) as SerializedTextNode | undefined;
    if (!trailingText) throw new Error("Expected the trailing text node");
    trailingText.text = `${NBSP}Y`;
    initializeDeserialize(undefined);
    const roundTripped = deserializeSerializedEditorState(
      state,
      getViewOptions(STANDARD_VIEW_MODE),
    );
    if (!roundTripped) throw new Error("Expected a round-tripped USJ");
    const outerContent = (roundTripped.content[2] as MarkerObject).content?.find(
      (item): item is MarkerObject => typeof item === "object" && item.marker === "nd",
    )?.content;
    expect(outerContent?.at(-1)).toBe(" Y");
  });

  it("standard view: still strips the separator when the first char-child text sits inside a TypedMarkNode", () => {
    // A comment/annotation mark wrapping the span's first text right after the opening glyph
    // must not hide the structural separator from the strip — TypedMarkNode is transparent on
    // both sides of the adjacency check, exactly as the live predicate treats it.
    const state = buildNestedCharState();
    const outerChar = findOuterChar(state);
    const firstTextIndex = outerChar.children.findIndex(
      (child) => isSerializedTextNode(child) && child.text.endsWith("LORD"),
    );
    const firstText = outerChar.children[firstTextIndex] as SerializedTextNode;
    expect(firstText.text.startsWith(NBSP)).toBe(true);
    const mark = {
      type: TypedMarkNode.getType(),
      typedIDs: { "external-test": ["1"] },
      direction: null,
      format: "",
      indent: 0,
      version: 1,
      children: [firstText],
    } as unknown as SerializedTypedMarkNode;
    outerChar.children.splice(firstTextIndex, 1, mark);
    initializeDeserialize(undefined);
    const roundTripped = deserializeSerializedEditorState(
      state,
      getViewOptions(STANDARD_VIEW_MODE),
    );
    if (!roundTripped) throw new Error("Expected a round-tripped USJ");
    const outerContent = (roundTripped.content[2] as MarkerObject).content?.find(
      (item): item is MarkerObject => typeof item === "object" && item.marker === "nd",
    )?.content;
    expect(outerContent?.[0]).toBe("LORD");
  });

  it("standard view: does not strip text that follows a char span's first-child milestone", () => {
    // Element-first content (here, a milestone) takes a STANDALONE NBSP spacer before it, never a
    // prefix on later text — so text after the milestone must be untouched by the strip, exactly
    // like text after a nested closer.
    const nd: SerializedCharNode = {
      type: CharNode.getType(),
      marker: "nd",
      direction: null,
      format: "",
      indent: 0,
      version: 1,
      children: [
        {
          type: MarkerNode.getType(),
          marker: "nd",
          markerSyntax: "opening",
          text: "",
          detail: 0,
          format: 0,
          mode: "normal",
          style: "",
          version: 1,
        } as SerializedMarkerNode,
        {
          type: "text",
          text: NBSP,
          detail: 0,
          format: 0,
          mode: "normal",
          style: "",
          version: 1,
        } as SerializedTextNode,
        {
          type: MilestoneNode.getType(),
          marker: "qt-s",
          sid: "1",
          version: MILESTONE_VERSION,
        } as SerializedMilestoneNode,
        {
          type: "text",
          text: `${NBSP}y`,
          detail: 0,
          format: 0,
          mode: "normal",
          style: "",
          version: 1,
        } as SerializedTextNode,
        {
          type: MarkerNode.getType(),
          marker: "nd",
          markerSyntax: "closing",
          text: "",
          detail: 0,
          format: 0,
          mode: "normal",
          style: "",
          version: 1,
        } as SerializedMarkerNode,
      ],
    };
    const state: SerializedEditorState = {
      root: {
        type: "root",
        direction: null,
        format: "",
        indent: 0,
        version: 1,
        children: [
          {
            type: ParaNode.getType(),
            marker: "p",
            direction: null,
            format: "",
            indent: 0,
            textFormat: 0,
            textStyle: "",
            version: 1,
            children: [nd],
          } as SerializedParaNode,
        ],
      },
    };
    initializeDeserialize(undefined);
    const roundTripped = deserializeSerializedEditorState(
      state,
      getViewOptions(STANDARD_VIEW_MODE),
    );
    if (!roundTripped) throw new Error("Expected a round-tripped USJ");
    const outerContent = (roundTripped.content[0] as MarkerObject).content?.find(
      (item): item is MarkerObject => typeof item === "object" && item.marker === "nd",
    )?.content;
    // The standalone spacer is dropped entirely (presentation-only), and the milestone survives.
    // The trailing text's leading NBSP is content, not a separator, so it is NOT stripped — it
    // inverts to a real space (the reverse adaptor's unconditional NBSP-to-space mapping applies
    // regardless), not silently dropped the way an incorrectly-stripped byte would be.
    expect(outerContent).toEqual([{ type: "ms", marker: "qt-s", sid: "1" }, " y"]);
  });

  describe("note export: drops only the caller slot, not look-alike content elsewhere", () => {
    /**
     * `\f +` renders its EDITABLE caller as a plain text node holding exactly
     * `getEditableCallerText("+")` (a leading space, the caller, a trailing NBSP —
     * {@link $noteEditableCallerNode} in attributeDisplay.utils.ts). This footnote's own body
     * repeats those exact bytes twice — once as loose text riding directly in the note (no `\ft`
     * wrapper, a shape real USFM footnotes can take) and once inside an `\ft` span — so both
     * occurrences coincide byte-for-byte with the caller slot without being it.
     */
    const callerLookalike = getEditableCallerText("+");

    function buildNoteState(viewOptions: ReturnType<typeof getViewOptions>) {
      const usx = `<usx version="3.0"><book code="RUT" style="id" /><chapter number="1" style="c" /><para style="p"><verse number="1" style="v" />text<note caller="+" style="f">${callerLookalike}<char style="ft">${callerLookalike}</char></note></para></usx>`;
      const usj = usxStringToUsj(usx);
      initializeSerialize(undefined, undefined);
      reset();
      return serializeEditorState(usj, viewOptions);
    }

    function findNote(usj: Usj): (MarkerObject & { category?: string }) | undefined {
      const para = usj.content[2] as MarkerObject;
      return para.content?.find(
        (item): item is MarkerObject => typeof item === "object" && item.marker === "f",
      );
    }

    /** The `SerializedNoteNode` a state built by {@link buildNoteState} carries. */
    function findSerializedNote(state: SerializedEditorState): SerializedNoteNode {
      const para = state.root.children[2] as SerializedParaNode;
      const note = para.children.find((child) => child.type === NoteNode.getType());
      if (!note) throw new Error("Expected the note built by buildNoteState");
      return note as SerializedNoteNode;
    }

    it("editable expanded caller: drops the true slot, keeps both look-alike occurrences", () => {
      const viewOptions = getViewOptions(UNFORMATTED_VIEW_MODE); // editable markerMode, expanded noteMode
      const state = buildNoteState(viewOptions);
      initializeDeserialize(undefined);
      const roundTripped = deserializeSerializedEditorState(state, viewOptions);
      if (!roundTripped) throw new Error("Expected a round-tripped USJ");

      const note = findNote(roundTripped);
      // The caller slot itself contributes nothing; the loose look-alike text and the `\ft`
      // look-alike text — both real data, neither of them the caller — both survive.
      expect(note?.content).toEqual([
        callerLookalike,
        { type: "char", marker: "ft", content: [callerLookalike] },
      ]);
    });

    it("collapsed caller (no editable caller shape): nothing is anchored, so nothing is dropped", () => {
      // The default `STANDARD_VIEW_MODE` noteMode ("collapsed") renders the caller as an
      // `ImmutableNoteCallerNode` (a decorator, not a plain text node), so the note's children
      // never present a text node matching `getEditableCallerText` at all — no caller slot is
      // ever identified here, structurally, regardless of what the body text happens to read.
      const viewOptions = getViewOptions(STANDARD_VIEW_MODE);
      const state = buildNoteState(viewOptions);
      initializeDeserialize(undefined);
      const roundTripped = deserializeSerializedEditorState(state, viewOptions);
      if (!roundTripped) throw new Error("Expected a round-tripped USJ");

      const note = findNote(roundTripped);
      expect(note?.content).toEqual([
        callerLookalike,
        { type: "char", marker: "ft", content: [callerLookalike] },
      ]);
    });

    it("keeps a note's \\cat category value even when it equals the caller-slot text", () => {
      // `category` is read directly off the note's own field by `createNoteMarker` — it never
      // passes through the content recursion the caller-slot check guards, so byte-for-byte
      // equality with the caller slot here cannot reach the drop check at all.
      const viewOptions = getViewOptions(UNFORMATTED_VIEW_MODE);
      const usj: Usj = {
        ...EMPTY_USJ,
        content: [
          {
            type: "para",
            marker: "p",
            content: [
              {
                type: "note",
                marker: "f",
                caller: "+",
                category: callerLookalike,
                content: [{ type: "char", marker: "ft", content: ["body"] }],
              } as MarkerObject,
            ],
          } as MarkerObject,
        ],
      };
      initializeSerialize(undefined, undefined);
      reset();
      const state = serializeEditorState(usj, viewOptions);
      initializeDeserialize(undefined);
      const roundTripped = deserializeSerializedEditorState(state, viewOptions);
      if (!roundTripped) throw new Error("Expected a round-tripped USJ");

      const note = (roundTripped.content[0] as MarkerObject).content?.[0] as MarkerObject & {
        category?: string;
      };
      expect(note.category).toBe(callerLookalike);
      expect(note.content).toEqual([{ type: "char", marker: "ft", content: ["body"] }]);
    });

    it("a drifted caller-slot text (no longer matching the caller) anchors nothing and survives as data", () => {
      // Simulates the tree mid-edit, after a keystroke has changed the caller-slot node's bytes
      // before the marker-edit engine has resettled it: the note's children no longer present the
      // exact `getEditableCallerText(caller)` shape `$noteEditableCallerNode` requires, so nothing
      // is anchored as the caller slot — the drifted text itself must round-trip untouched, not be
      // silently dropped because it once matched.
      const viewOptions = getViewOptions(UNFORMATTED_VIEW_MODE);
      const state = buildNoteState(viewOptions);
      const note = findSerializedNote(state);
      const callerNode = note.children[1] as SerializedTextNode;
      if (callerNode.text !== callerLookalike)
        throw new Error("Expected the note's caller-slot node at index 1");
      callerNode.text = `${callerLookalike}X`; // drift the caller slot's own bytes

      initializeDeserialize(undefined);
      const roundTripped = deserializeSerializedEditorState(state, viewOptions);
      if (!roundTripped) throw new Error("Expected a round-tripped USJ");

      const note2 = findNote(roundTripped);
      // The drifted text and the loose look-alike text are adjacent surviving plain-text nodes,
      // so they coalesce into one string exactly as any other adjacent text run would.
      expect(note2?.content).toEqual([
        `${callerLookalike}X${callerLookalike}`,
        { type: "char", marker: "ft", content: [callerLookalike] },
      ]);
    });

    it("still drops the caller slot when an annotation mark wraps it", () => {
      // An annotation mark is presentation both the exporter and the logical content model splice
      // away, so the caller slot has to be recognized THROUGH one: a comment placed on the caller
      // must not turn the caller's display bytes (` + ` with an NBSP tail) into note content. It
      // would come back as a second, fabricated caller on the next load, and compound on every
      // save/load cycle after that.
      const viewOptions = getViewOptions(UNFORMATTED_VIEW_MODE);
      const state = buildNoteState(viewOptions);
      const note = findSerializedNote(state);
      const callerNode = note.children[1] as SerializedTextNode;
      if (callerNode.text !== callerLookalike)
        throw new Error("Expected the note's caller-slot node at index 1");
      const mark = {
        type: TypedMarkNode.getType(),
        typedIDs: { "external-test": ["1"] },
        direction: null,
        format: "",
        indent: 0,
        version: 1,
        children: [callerNode],
      } as unknown as SerializedTypedMarkNode;
      note.children.splice(1, 1, mark);

      initializeDeserialize(undefined);
      const roundTripped = deserializeSerializedEditorState(state, viewOptions);
      if (!roundTripped) throw new Error("Expected a round-tripped USJ");

      const note2 = findNote(roundTripped);
      // Identical to the unmarked case: the caller slot contributes nothing, and the look-alike
      // body text — which is data, not a caller — still round-trips.
      expect(note2?.content).toEqual([
        callerLookalike,
        { type: "char", marker: "ft", content: [callerLookalike] },
      ]);
    });
  });

  it("uses per-call viewOptions, not a latched module singleton (task zero)", () => {
    // Build a standard-view state with a stored NBSP (renders as display `~`).
    const usj = usxStringToUsj(
      `<usx version="3.0"><book code="RUT" style="id" /><chapter number="1" style="c" /><para style="p"><verse number="1" style="v" />3${NBSP}000 men</para></usx>`,
    );
    initializeSerialize(undefined, undefined);
    initializeDeserialize(undefined); // no viewOptions latched
    reset();
    const standardState = serializeEditorState(usj, getViewOptions(STANDARD_VIEW_MODE));

    // Deserializing WITH standard viewOptions inverts display `~` back to a data NBSP...
    const asStandard = deserializeSerializedEditorState(
      standardState,
      getViewOptions(STANDARD_VIEW_MODE),
    );
    expect(JSON.stringify(asStandard)).toContain(`3${NBSP}000 men`);

    // ...and deserializing the SAME state WITHOUT standard viewOptions leaves display `~` literal,
    // proving the result depends on the per-call arg, not on whatever `initialize` last saw.
    const asDefault = deserializeSerializedEditorState(standardState, undefined);
    expect(JSON.stringify(asDefault)).toContain(`3~000 men`);
  });

  it("excludes a char span's attribute display run from saved USJ content", () => {
    // \w word|lemma="grace"\w* — the attribute belongs in USJ as a MarkerObject prop
    // (unknownAttributes), not as literal `|…` text in the char's content array.
    const usj: Usj = {
      ...EMPTY_USJ,
      content: [
        {
          type: "para",
          marker: "p",
          content: [
            { type: "char", marker: "w", lemma: "grace", content: ["word"] } as MarkerObject,
          ],
        } as MarkerObject,
      ],
    };
    initializeSerialize(undefined, undefined);
    reset();
    const standardViewOptions = getViewOptions(STANDARD_VIEW_MODE);
    const state = serializeEditorState(usj, standardViewOptions);
    const editorState = editor.parseEditorState(state);
    initializeDeserialize(undefined);

    const result = editorUsjAdaptor.deserializeEditorState(editorState, standardViewOptions);

    const para = result?.content?.[0] as MarkerObject;
    const char = para.content?.[0] as MarkerObject & { lemma?: string };
    expect(char.lemma).toBe("grace");
    expect(char.content).toEqual(["word"]);
  });

  it("excludes a verse's \\va/\\vp display runs from saved USJ content", () => {
    // \v 1 \va 2\va*\vp 1b\vp* — altnumber/pubnumber belong in USJ as verse MarkerObject props,
    // not as literal glyph/value text riding alongside the verse in the paragraph's content.
    const usj: Usj = {
      ...EMPTY_USJ,
      content: [
        {
          type: "para",
          marker: "p",
          content: [
            {
              type: "verse",
              marker: "v",
              number: "1",
              altnumber: "2",
              pubnumber: "1b",
            } as MarkerObject,
            "text after",
          ],
        } as MarkerObject,
      ],
    };
    initializeSerialize(undefined, undefined);
    reset();
    const standardViewOptions = getViewOptions(STANDARD_VIEW_MODE);
    const state = serializeEditorState(usj, standardViewOptions);
    // Sanity check: the intermediate serialized state genuinely carries the display runs, wrapped
    // in an attribute-run node (the round-trip assertion below would pass vacuously if there were
    // nothing to exclude).
    const serializedPara = state.root.children[0] as SerializedParaNode;
    expect(
      serializedPara.children.some(
        (n) => n.type === "attribute-run" && "runKind" in n && n.runKind === "va",
      ),
    ).toBe(true);
    const editorState = editor.parseEditorState(state);
    initializeDeserialize(undefined);

    const result = editorUsjAdaptor.deserializeEditorState(editorState, standardViewOptions);

    const para = result?.content?.[0] as MarkerObject;
    const verse = para.content?.[0] as MarkerObject & { altnumber?: string; pubnumber?: string };
    expect(verse.altnumber).toBe("2");
    expect(verse.pubnumber).toBe("1b");
    expect(para.content).toEqual([
      { type: "verse", marker: "v", number: "1", altnumber: "2", pubnumber: "1b" },
      "text after",
    ]);
  });

  // AttributeRunNode is registered in `nodes` above via `...usjReactNodes`. The forward adaptor
  // (usj-editor.adaptor.ts) always builds this shape now — these tests build it by hand anyway to
  // pin the REVERSE (editor -> USJ) exclusion directly, independent of the forward adaptor's own
  // output (a hand-built tree also covers a wrapper healed forward from a pre-flip state, which
  // the adaptor itself would never produce). Each uses its OWN freshly-created editor (rather than
  // the module-level `editor` other tests in this file share) so hand-built nodes never leak
  // across tests.
  it("excludes a verse's \\va/\\vp display runs from saved USJ content when wrapped in AttributeRunNode (dual-read)", () => {
    const standardViewOptions = getViewOptions(STANDARD_VIEW_MODE);
    initializeDeserialize(undefined);
    const { editor: localEditor } = createBasicTestEnvironment(nodes);
    localEditor.update(
      () => {
        const verse = $createVerseNode(
          "1",
          getVisibleOpenMarkerText("v", "1"),
          undefined,
          "2",
          "1b",
        );
        const vaWrapper = $createAttributeRunNode("va");
        const vaValue = $createTextNode(`${NBSP}2`);
        $setState(vaValue, textTypeState, "attribute");
        vaWrapper.append(
          $createMarkerNode("va", "opening"),
          vaValue,
          $createMarkerNode("va", "closing"),
        );
        const vpWrapper = $createAttributeRunNode("vp");
        const vpValue = $createTextNode(`${NBSP}1b`);
        $setState(vpValue, textTypeState, "attribute");
        vpWrapper.append(
          $createMarkerNode("vp", "opening"),
          vpValue,
          $createMarkerNode("vp", "closing"),
        );
        $getRoot().append(
          $createParaNode("p").append(
            $createTextNode(NBSP),
            verse,
            vaWrapper,
            vpWrapper,
            $createTextNode("text after"),
          ),
        );
      },
      { discrete: true },
    );

    const result = editorUsjAdaptor.deserializeEditorState(
      localEditor.getEditorState(),
      standardViewOptions,
    );

    const para = result?.content?.[0] as MarkerObject;
    // Identical to the loose-shape assertion above: the two wrappers contribute NOTHING beyond
    // the verse's own altnumber/pubnumber fields (already carried on the VerseNode itself,
    // independent of whichever shape its display run rides in).
    expect(para.content).toEqual([
      { type: "verse", marker: "v", number: "1", altnumber: "2", pubnumber: "1b" },
      "text after",
    ]);
  });

  it("excludes a milestone's display run from saved USJ content when wrapped in AttributeRunNode (dual-read)", () => {
    const standardViewOptions = getViewOptions(STANDARD_VIEW_MODE);
    initializeDeserialize(undefined);
    const { editor: localEditor } = createBasicTestEnvironment(nodes);
    localEditor.update(
      () => {
        const ms = $createMilestoneNode("qt-s", "q1");
        const wrapper = $createAttributeRunNode("milestone");
        const attribute = $createTextNode(`${NBSP}|sid="q1"`);
        $setState(attribute, textTypeState, "attribute");
        wrapper.append(
          $createMarkerNode("qt-s", "opening"),
          attribute,
          $createMarkerNode("", "selfClosing"),
        );
        $getRoot().append(
          $createParaNode("p").append(
            $createTextNode("before "),
            ms,
            wrapper,
            $createTextNode(" after"),
          ),
        );
      },
      { discrete: true },
    );

    const result = editorUsjAdaptor.deserializeEditorState(
      localEditor.getEditorState(),
      standardViewOptions,
    );

    const para = result?.content?.[0] as MarkerObject;
    expect(para.content).toEqual(["before ", { type: "ms", marker: "qt-s", sid: "q1" }, " after"]);
  });

  it("excludes an unknown node's display marker/attribute runs from saved USJ content", () => {
    // \fig caption|src="image.jpg" size="span" ref="1.18"\fig* — the marker/attribute display
    // children `createUnknown` adds in editable mode are presentation only; they must not leak
    // into the saved USJ's unknownAttributes or content array.
    const usj: Usj = {
      ...EMPTY_USJ,
      content: [
        {
          type: "para",
          marker: "p",
          content: [
            {
              type: "figure",
              marker: "fig",
              file: "image.jpg",
              size: "span",
              ref: "1.18",
              content: ["figure content"],
            } as MarkerObject,
          ],
        } as MarkerObject,
      ],
    };
    initializeSerialize(undefined, undefined);
    reset();
    const standardViewOptions = getViewOptions(STANDARD_VIEW_MODE);
    const state = serializeEditorState(usj, standardViewOptions);
    // Sanity check: the intermediate serialized state genuinely carries the display children
    // (the round-trip assertion below would pass vacuously if there were nothing to exclude).
    const serializedPara = state.root.children[0] as SerializedParaNode;
    const serializedUnknown = serializedPara.children.find(isSerializedUnknownNode);
    if (!serializedUnknown) throw new Error("No unknown node found in the serialized state");
    expect(serializedUnknown.children.some(isSerializedImmutableTypedTextNode)).toBe(true);
    const editorState = editor.parseEditorState(state);
    initializeDeserialize(undefined);

    const result = editorUsjAdaptor.deserializeEditorState(editorState, standardViewOptions);

    const para = result?.content?.[0] as MarkerObject;
    expect(para.content).toEqual([
      {
        type: "figure",
        marker: "fig",
        file: "image.jpg",
        size: "span",
        ref: "1.18",
        content: ["figure content"],
      },
    ]);
  });

  it("round-trips a `//` optbreak to a single clean {type:'optbreak'} — one `//` child, no duplicate", () => {
    // Live bug: a single `//` optbreak DISPLAYED as `////` and drove an endless PDP deferral loop.
    // This pins the editor's contract from both angles:
    //   (1) standard view renders the optbreak's `//` token as exactly ONE real
    //       ImmutableTypedTextNode child — so any extra `//` on screen (the observed `////`) comes
    //       from OUTSIDE the editor (a stale vendored CSS `::before`), not from the editor emitting
    //       it twice; and
    //   (2) the editor -> USJ round-trip is idempotent: `{type:'optbreak'}` in yields
    //       `{type:'optbreak'}` out — no `marker`/`content` added, no second optbreak — so the
    //       editor is NOT the source of any editorUsj-vs-PDP difference that would sustain the loop
    //       (that difference is the PDP's USFM round-trip of `//`, not the editor's).
    const usj: Usj = {
      ...EMPTY_USJ,
      content: [
        {
          type: "para",
          marker: "p",
          content: [{ type: "optbreak" } as MarkerObject],
        } as MarkerObject,
      ],
    };
    initializeSerialize(undefined, undefined);
    reset();
    const standardViewOptions = getViewOptions(STANDARD_VIEW_MODE);
    const state = serializeEditorState(usj, standardViewOptions);
    // (1) Display pin: exactly one `//` marker text node renders for the optbreak.
    const serializedPara = state.root.children[0] as SerializedParaNode;
    const serializedUnknown = serializedPara.children.find(isSerializedUnknownNode);
    if (!serializedUnknown) throw new Error("No unknown node found in the serialized state");
    const slashChildren = serializedUnknown.children.filter(
      (child) => isSerializedImmutableTypedTextNode(child) && child.text === "//",
    );
    expect(slashChildren).toHaveLength(1);
    const editorState = editor.parseEditorState(state);
    initializeDeserialize(undefined);

    const result = editorUsjAdaptor.deserializeEditorState(editorState, standardViewOptions);

    // (2) Round-trip pin: a single clean optbreak, no duplicate and no added props.
    const para = result?.content?.[0] as MarkerObject;
    expect(para.content).toEqual([{ type: "optbreak" }]);
  });

  // The spaces around an optbreak are SIGNIFICANT (Paratext 9 preserves them byte-for-byte). Each
  // of the four spacing variants must round-trip through the editor unchanged and stay distinct
  // from the others — a lone single space next to the optbreak stays a plain space (Standard view
  // only maps runs of 2+ spaces to NBSP), so it survives the serialize -> parse -> deserialize trip.
  it.each([
    { name: "tight (one//two)", content: ["one", { type: "optbreak" }, "two"] },
    { name: "spaced both sides (one // two)", content: ["one ", { type: "optbreak" }, " two"] },
    { name: "leading space only (one //two)", content: ["one ", { type: "optbreak" }, "two"] },
    { name: "trailing space only (one// two)", content: ["one", { type: "optbreak" }, " two"] },
  ])("round-trips optbreak spacing variant $name unchanged", ({ content }) => {
    const usj: Usj = {
      ...EMPTY_USJ,
      content: [{ type: "para", marker: "p", content } as MarkerObject],
    };
    initializeSerialize(undefined, undefined);
    reset();
    const standardViewOptions = getViewOptions(STANDARD_VIEW_MODE);
    const state = serializeEditorState(usj, standardViewOptions);
    const editorState = editor.parseEditorState(state);
    initializeDeserialize(undefined);

    const result = editorUsjAdaptor.deserializeEditorState(editorState, standardViewOptions);

    const para = result?.content?.[0] as MarkerObject;
    expect(para.content).toEqual(content);
  });

  // Hardening pin composing the two pins above with TextSpacingPlugin.test.tsx's live "delete the
  // space before an optbreak" pin: a user deleting the space in a LIVE editor (TextSpacingPlugin
  // mounted, so the trailing-space transform is active and must not re-add what was just deleted)
  // must survive all the way to the editor -> USJ export — not just to the in-memory TextNode's
  // content, which TextSpacingPlugin.test.tsx already covers on its own.
  it("keeps a user-deleted space before an optbreak out of the serialized USJ", async () => {
    // Starting point: the "leading space only" variant pinned above.
    const usj: Usj = {
      ...EMPTY_USJ,
      content: [
        {
          type: "para",
          marker: "p",
          content: ["one ", { type: "optbreak" }, "two"],
        } as MarkerObject,
      ],
    };
    initializeSerialize(undefined, undefined);
    reset();
    const standardViewOptions = getViewOptions(STANDARD_VIEW_MODE);
    const initialState = serializeEditorState(usj, standardViewOptions);

    const { editor: liveEditor } = await baseTestEnvironment(
      JSON.stringify({ root: initialState.root }),
      <TextSpacingPlugin />,
    );

    let textBeforeOptbreak: TextNode | undefined;
    let spaceOffset = 0;
    liveEditor.getEditorState().read(() => {
      const para = $getRoot().getFirstChild();
      if (!$isParaNode(para)) throw new Error("Expected a ParaNode");
      const found = para
        .getChildren()
        .find((child) => $isTextNode(child) && child.getTextContent() === "one ");
      if (!$isTextNode(found))
        throw new Error("Expected to find the 'one ' TextNode before the optbreak");
      textBeforeOptbreak = found;
      spaceOffset = found.getTextContentSize() - 1;
    });
    if (!textBeforeOptbreak) throw new Error("Failed to locate the TextNode before the optbreak");

    // Delete the trailing space live, with TextSpacingPlugin mounted — it must not re-add it.
    await deleteTextAtSelection(
      liveEditor,
      textBeforeOptbreak,
      spaceOffset,
      textBeforeOptbreak,
      spaceOffset + 1,
    );

    initializeDeserialize(undefined);
    const result = editorUsjAdaptor.deserializeEditorState(
      liveEditor.getEditorState(),
      standardViewOptions,
    );

    // The deletion survives the export: the space-less "tight" form pinned above, not "one "
    // reappearing because the transform re-added it.
    const para = result?.content?.[0] as MarkerObject;
    expect(para.content).toEqual(["one", { type: "optbreak" }, "two"]);
  });
});

// A note caller's click payload carries the clicked note's document-order index, and its whole
// point is that the index is a coordinate into a notes list built from the document's USJ (a
// footnotes pane): the host reads `usjNotes[index]` instead of hunting for a matching note by
// content. These pin that equivalence through the real adaptors in both directions — USJ in via
// the load adaptor, a real click on a rendered caller, and the same document back out via the
// editor -> USJ adaptor.
describe("Note caller index vs the USJ note walk", () => {
  const standardViewOptions = getViewOptions(STANDARD_VIEW_MODE);

  /** A footnote whose single `\ft` span carries `text`. */
  function footnote(text: string): MarkerObject {
    return {
      type: "note",
      marker: "f",
      caller: "+",
      content: [{ type: "char", marker: "ft", content: [text] }],
    };
  }

  /** The document's notes in the order a USJ walk yields them. */
  function usjNotesInOrder(usj: Usj | undefined): MarkerObject[] {
    const notes: MarkerObject[] = [];
    const walk = (items: MarkerContent[] | undefined) => {
      (items ?? []).forEach((item) => {
        if (typeof item === "string") return;
        if (item.type === "note") notes.push(item);
        else walk(item.content);
      });
    };
    walk(usj?.content);
    return notes;
  }

  /** Every string a note holds, joined — enough to name which note an entry is. */
  function noteText(note: MarkerObject): string {
    const strings: string[] = [];
    const walk = (items: MarkerContent[] | undefined) => {
      (items ?? []).forEach((item) => {
        if (typeof item === "string") strings.push(item);
        else walk(item.content);
      });
    };
    walk(note.content);
    return strings.join("");
  }

  function createNoteIndexCapture() {
    let capturedGetNoteIndex: (() => number | undefined) | undefined;

    const noteCallerOnClick: NoteCallerOnClick = (
      _event,
      _noteNodeKey,
      _isCollapsed,
      _getCaller,
      _setCaller,
      _getNoteOps,
      getNoteIndex,
    ) => {
      capturedGetNoteIndex = getNoteIndex;
    };

    const captureGetNoteIndex = () => {
      if (!capturedGetNoteIndex) throw new Error("getNoteIndex was not captured");
      return capturedGetNoteIndex();
    };

    return { captureGetNoteIndex, noteCallerOnClick };
  }

  /** Loads `usj` into a rendered editor whose callers report their clicks to `noteCallerOnClick`. */
  async function loadNotesEditor(usj: Usj, noteCallerOnClick: NoteCallerOnClick) {
    initializeSerialize({ noteCallerOnClick }, undefined);
    reset();
    const serializedState = serializeEditorState(usj, standardViewOptions);
    const { editor: liveEditor } = await baseTestEnvironment();
    // Parsed from the serialized OBJECT, not a JSON string: the caller nodes carry the click
    // callback as a live function, which stringifying would drop.
    await act(async () => {
      liveEditor.setEditorState(liveEditor.parseEditorState(serializedState));
    });
    return liveEditor;
  }

  /** Clicks the caller at `callerIndex` in rendered order and returns the index it reported. */
  async function clickCallerNoteIndex(
    liveEditor: LexicalEditor,
    callerIndex: number,
    captureGetNoteIndex: () => number | undefined,
  ): Promise<number> {
    const button = liveEditor.getRootElement()?.querySelectorAll("button")[callerIndex];
    if (!button) throw new Error(`No caller button at index ${callerIndex}`);

    await act(async () => {
      button.click();
    });
    const noteIndex = captureGetNoteIndex();
    if (noteIndex === undefined) throw new Error(`No index reported for caller ${callerIndex}`);
    return noteIndex;
  }

  it("indexes each clicked caller to that note's own entry in the USJ walk", async () => {
    const usj: Usj = {
      ...EMPTY_USJ,
      content: [
        { type: "para", marker: "p", content: ["In the beginning ", footnote("First note")] },
        {
          type: "para",
          marker: "p",
          content: ["and the earth ", footnote("Second note"), " was ", footnote("Third note")],
        },
      ],
    };
    const { captureGetNoteIndex, noteCallerOnClick } = createNoteIndexCapture();
    const liveEditor = await loadNotesEditor(usj, noteCallerOnClick);

    // The second note in the document is the FIRST in its own paragraph, so a per-paragraph count
    // would report 0 for it and 1 for the third.
    const firstIndex = await clickCallerNoteIndex(liveEditor, 0, captureGetNoteIndex);
    const secondIndex = await clickCallerNoteIndex(liveEditor, 1, captureGetNoteIndex);
    const thirdIndex = await clickCallerNoteIndex(liveEditor, 2, captureGetNoteIndex);

    initializeDeserialize(undefined);
    const roundTripped = editorUsjAdaptor.deserializeEditorState(
      liveEditor.getEditorState(),
      standardViewOptions,
    );

    // The list a footnotes pane builds from the saved USJ — the coordinates the index addresses.
    const noteTexts = usjNotesInOrder(roundTripped).map(noteText);
    expect(noteTexts).toEqual(["First note", "Second note", "Third note"]);
    expect(noteTexts[firstIndex]).toBe("First note");
    expect(noteTexts[secondIndex]).toBe("Second note");
    expect(noteTexts[thirdIndex]).toBe("Third note");
  });

  it("tells two identical notes apart, which their USJ entries cannot", async () => {
    const usj: Usj = {
      ...EMPTY_USJ,
      content: [
        {
          type: "para",
          marker: "p",
          content: ["In the beginning ", footnote("Same note"), " and ", footnote("Same note")],
        },
      ],
    };
    const { captureGetNoteIndex, noteCallerOnClick } = createNoteIndexCapture();
    const liveEditor = await loadNotesEditor(usj, noteCallerOnClick);

    const secondIndex = await clickCallerNoteIndex(liveEditor, 1, captureGetNoteIndex);

    initializeDeserialize(undefined);
    const roundTripped = editorUsjAdaptor.deserializeEditorState(
      liveEditor.getEditorState(),
      standardViewOptions,
    );

    // Deep-equal entries: the content comparison this API replaced would answer 0 for both, so the
    // index is the only thing that can name the note the user actually clicked.
    const notes = usjNotesInOrder(roundTripped);
    expect(notes).toHaveLength(2);
    expect(notes[0]).toEqual(notes[1]);
    expect(secondIndex).toBe(1);
  });

  // A paragraph-leading whitespace-only content string is where the standard-view display
  // mapping and the reverse adaptor's lone-NBSP structural-spacer drop can meet: a lone " "
  // rewritten to display NBSP becomes byte-identical to the engine's untagged spacers, so it
  // was swallowed on save. Each variant pins the exact round trip.
  describe("paragraph-leading whitespace-only content string round trip", () => {
    function roundTripLeading(lead: string, viewMode: string): MarkerContent[] | undefined {
      const usj: Usj = {
        ...EMPTY_USJ,
        content: [
          {
            type: "para",
            marker: "p",
            content: [lead, { type: "verse", marker: "v", number: "1" }, "in the days"],
          } as MarkerObject,
        ],
      };
      initializeSerialize(undefined, undefined);
      reset();
      const viewOptions = getViewOptions(viewMode);
      const state = serializeEditorState(usj, viewOptions);
      const editorState = editor.parseEditorState(state);
      initializeDeserialize(undefined);
      const result = editorUsjAdaptor.deserializeEditorState(editorState, viewOptions);
      return (result?.content?.[0] as MarkerObject).content;
    }

    it("standard view: preserves a lone leading space", () => {
      expect(roundTripLeading(" ", STANDARD_VIEW_MODE)).toEqual([
        " ",
        { type: "verse", marker: "v", number: "1" },
        "in the days",
      ]);
    });

    it("standard view: preserves a lone leading data NBSP (displays as ~)", () => {
      expect(roundTripLeading(NBSP, STANDARD_VIEW_MODE)).toEqual([
        NBSP,
        { type: "verse", marker: "v", number: "1" },
        "in the days",
      ]);
    });

    it("standard view: collapses a leading two-space run to one space (space-run normalization)", () => {
      expect(roundTripLeading("  ", STANDARD_VIEW_MODE)).toEqual([
        " ",
        { type: "verse", marker: "v", number: "1" },
        "in the days",
      ]);
    });

    it("formatted view: preserves a lone leading space", () => {
      expect(roundTripLeading(" ", FORMATTED_VIEW_MODE)).toEqual([
        " ",
        { type: "verse", marker: "v", number: "1" },
        "in the days",
      ]);
    });

    // Known cost of the reverse adaptor's lone-NBSP byte test (documented at the test itself in
    // editor-usj.adaptor.ts): outside standard view there is no display mapping to disguise a
    // data NBSP, so a content string that is EXACTLY one NBSP is indistinguishable from an
    // untagged structural spacer and is dropped. Pinned as-is: fixing it needs a per-context
    // story for the untagged spacer shapes, not a byte-test tweak.
    it("formatted view: drops a lone leading data NBSP (byte-test cost, pinned)", () => {
      expect(roundTripLeading(NBSP, FORMATTED_VIEW_MODE)).toEqual([
        { type: "verse", marker: "v", number: "1" },
        "in the days",
      ]);
    });

    it("formatted view: preserves a leading two-space run byte-for-byte", () => {
      expect(roundTripLeading("  ", FORMATTED_VIEW_MODE)).toEqual([
        "  ",
        { type: "verse", marker: "v", number: "1" },
        "in the days",
      ]);
    });
  });
});

describe("Editor USJ Adaptor — comment milestones", () => {
  it("ends each of two separate comments once", () => {
    const { editor: markEditor } = createBasicTestEnvironment(nodes, () => {
      $getRoot().append(
        $createParaNode("p").append(
          $createTypedMarkNode({ [COMMENT_MARK_TYPE]: ["c1"] }).append($createTextNode("alpha")),
          $createTextNode(" bravo "),
          $createTypedMarkNode({ [COMMENT_MARK_TYPE]: ["c2"] }).append($createTextNode("charlie")),
        ),
      );
    });

    const usj = editorUsjAdaptor.deserializeEditorState(markEditor.getEditorState());

    expect(usj?.content).toEqual([
      {
        type: "para",
        marker: "p",
        content: [
          { type: "ms", marker: "zmsc-s", sid: "c1" },
          "alpha",
          { type: "ms", marker: "zmsc-e", eid: "c1" },
          " bravo ",
          { type: "ms", marker: "zmsc-s", sid: "c2" },
          "charlie",
          { type: "ms", marker: "zmsc-e", eid: "c2" },
        ],
      },
    ]);
  });
});
