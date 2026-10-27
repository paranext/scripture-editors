/**
 * Note-serialization contract: in editable marker mode, note contents ops carry
 * CONTENT only (canonical, glyph-free — same shape as non-editable modes), and
 * `$applyUpdate` re-materializes the exact well-formed note shape the USJ adaptor builds.
 *
 * This drives the REAL FootnoteEditor popover flow end-to-end: a host `Editorial` in each view a
 * user edits Scripture in sources a note op via `getNoteOps`, a popover `Editorial` (the host's
 * options as the FootnoteEditor memo turns them into its own — `footnotePopoverView`) receives it
 * via `applyUpdate`, and the popover Save path writes it back into the host via
 * `replaceEmbedUpdate`. The acceptance property is IDEMPOTENCE: ops→apply→ops is a fixed point and
 * the serialized USJ deep-equals the source. Over an editable-marker host, a subsequent
 * `$rebuildNoteContent` must also neither refuse (sentinel mismatch) nor change anything (fixed
 * point); with markers hidden the marker-edit engine that rebuild belongs to is off.
 */
import { $rebuildNoteContent, Tier2Context } from "../markerEdit/tier2Rebuild.utils";
import Editorial from "../../Editorial";
import { EditorOptions, EditorRef } from "../editor.model";
import {
  EDITING_VIEWS,
  editorView,
  footnotePopoverView,
  forEachView,
} from "../editorViews.test-helpers";
import { optionsInView } from "../noteEditorRef.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act, render } from "@testing-library/react";
import { deepEqual } from "fast-equals";
import { createRef } from "react";
import {
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  INSERT_LINE_BREAK_COMMAND,
  INSERT_PARAGRAPH_COMMAND,
  KEY_ENTER_COMMAND,
  LexicalEditor,
  LexicalNode,
  SELECTION_CHANGE_COMMAND,
} from "lexical";
import { $dfs } from "@lexical/utils";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { getEmbeddedLexicalEditor } from "../../../../../libs/shared-react/src/plugins/usj/react-test.utils";
import {
  $isCharNode,
  $isImmutableUnmatchedNode,
  $isMarkerNode,
  $isNoteNode,
  getMarker as bundledGetMarker,
  LoggerBasic,
  NoteNode,
} from "shared";
import { DeltaOp, DeltaOpInsertNoteEmbed, ViewOptions } from "shared-react";

function requireDefined<T>(value: T | undefined | null, message: string): T {
  if (value === undefined || value === null) throw new Error(message);
  return value;
}

const standardHostView = editorView("standard");

/**
 * The popover's options over a host in `hostView`, exactly as FootnoteEditor's memo produces them
 * (`footnotePopoverView`). Its `showParaMarkerPrefixes: false` also makes this suite the
 * byte-identity proof for that option: the ops/USJ fixed points below hold with no prefix rendered,
 * so suppressing the display prefix changes nothing about what the popover Save path writes.
 */
function popoverOptionsOver(hostView: ViewOptions): EditorOptions {
  return {
    ...optionsInView(hostView),
    contextMenu: undefined,
    view: footnotePopoverView(hostView),
  };
}

/** The popover's default document (FootnoteEditor's `PARAGRAPH_USJ`). */
const PARAGRAPH_USJ: Usj = { type: "USJ", version: "3.1", content: [{ type: "para" }] };

/**
 * Closed note with \fr/\ft spans and a \fv verse-ref char. The \fv is a SIBLING char (the
 * engine-canonical shape): valid footnote char markers render no closer glyph in editable
 * mode, so a USJ-nested \fv is not representable in display text and the Tier-2 tokenizer
 * would flatten it — for a USJ-loaded note just as much as for an ops-materialized one.
 * (The nested-char ops round-trip itself is covered by the editor-delta.adaptor unit
 * tests.)
 */
/** `closed` is nonstandard derived USX/USJ metadata (ParatextData emits it on implicitly-closed
 * spans); it is not part of the published `MarkerObject` shape, so test data types it locally. */
type ClosableMarkerObject = MarkerObject & { closed?: string };

const closedNoteUsj: MarkerObject = {
  type: "note",
  marker: "f",
  caller: "+",
  // Footnote-content chars carry closed="false" in real ParatextData USJ (no explicit closers).
  content: [
    { type: "char", marker: "fr", content: ["1:1 "], closed: "false" } as ClosableMarkerObject,
    {
      type: "char",
      marker: "ft",
      content: ["see verse "],
      closed: "false",
    } as ClosableMarkerObject,
    { type: "char", marker: "fv", content: ["2"], closed: "false" } as ClosableMarkerObject,
  ],
};

/** Unterminated note (PT9 opennote): renders expanded inline, has no closer glyph. */
const unclosedNoteUsj: ClosableMarkerObject = {
  type: "note",
  marker: "f",
  caller: "+",
  closed: "false",
  content: [
    { type: "char", marker: "fr", content: ["1:2 "], closed: "false" } as ClosableMarkerObject,
    {
      type: "char",
      marker: "ft",
      content: ["unterminated"],
      closed: "false",
    } as ClosableMarkerObject,
  ],
};

/**
 * Note holding two ADJACENT `\fp` (footnote-paragraph) spans. `\fp` has no closer, so PT9
 * separates footnote paragraphs solely by the next `\fp` marker — the two entries are two
 * paragraphs, and their char ops are attribute-identical (same style, no `cid`). The round
 * trip must keep them separate spans; merging them collapses two paragraphs into one.
 */
const twoFpNoteUsj: MarkerObject = {
  type: "note",
  marker: "f",
  caller: "+",
  content: [
    { type: "char", marker: "fr", content: ["1:3 "], closed: "false" } as ClosableMarkerObject,
    {
      type: "char",
      marker: "ft",
      content: ["first paragraph "],
      closed: "false",
    } as ClosableMarkerObject,
    {
      type: "char",
      marker: "fp",
      content: ["second paragraph "],
      closed: "false",
    } as ClosableMarkerObject,
    {
      type: "char",
      marker: "fp",
      content: ["third paragraph"],
      closed: "false",
    } as ClosableMarkerObject,
  ],
};

const sampleUsj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["Test Book"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [
        { type: "verse", marker: "v", number: "1" },
        "first ",
        closedNoteUsj,
        "verse text ",
        unclosedNoteUsj,
        "tail ",
        twoFpNoteUsj,
        "end",
      ],
    },
  ],
};

const scrRef = { book: "GEN", chapterNum: 1, verseNum: 1 };

function makeLogger() {
  const messages: string[] = [];
  const log = (msg: unknown) => {
    messages.push(String(msg));
  };
  const logger: LoggerBasic = { debug: log, info: log, warn: log, error: log };
  return { messages, logger };
}

async function renderEditor(options: EditorOptions, defaultUsj: Usj) {
  const ref = createRef<EditorRef>();
  let container: HTMLElement | undefined;
  await act(async () => {
    const result = render(
      <Editorial
        ref={ref}
        defaultUsj={defaultUsj}
        scrRef={scrRef}
        onScrRefChange={() => undefined}
        options={options}
      />,
    );
    container = result.container;
  });
  const editorRef = requireDefined(ref.current, "editor ref");
  // This suite runs end-to-end through the public <Editorial> wrapper, which strips `children`, so
  // the cleaner EditorRefPlugin-child handle isn't reachable — read the editor off the mounted DOM.
  const lexical = getEmbeddedLexicalEditor(container);
  return { editorRef, lexical };
}

function $findNotes(): NoteNode[] {
  return $dfs($getRoot())
    .map(({ node }) => node)
    .filter($isNoteNode);
}

/** All descendants of the note (excluding the note itself). */
function noteDescendants(note: NoteNode): LexicalNode[] {
  const out: LexicalNode[] = [];
  const collect = (node: LexicalNode) => {
    if ($isElementNode(node))
      for (const child of node.getChildren()) {
        out.push(child);
        collect(child);
      }
  };
  collect(note);
  return out;
}

/**
 * Assert the note is well formed for `view`: no unmatched nodes, and with editable markers one
 * glyph per span; with markers hidden, no glyph at all.
 */
function expectWellFormedNote(lexical: LexicalEditor, noteIndex: number, view: ViewOptions) {
  lexical.getEditorState().read(() => {
    const note = requireDefined($findNotes()[noteIndex], `note ${noteIndex} not found`);
    const descendants = noteDescendants(note);
    // No ImmutableUnmatchedNode materialized from a stray closing-glyph text op.
    expect(descendants.filter($isImmutableUnmatchedNode)).toEqual([]);
    if (view.markerMode !== "editable") {
      expect(descendants.filter($isMarkerNode)).toEqual([]);
      return;
    }
    // Each char span carries exactly ONE opening MarkerNode glyph (no doubling).
    descendants.filter($isCharNode).forEach((char) => {
      const glyphs = char
        .getChildren()
        .filter($isMarkerNode)
        .filter((glyph) => glyph.getMarkerSyntax() === "opening");
      expect(glyphs).toHaveLength(1);
      expect(glyphs[0].getMarker()).toBe(char.getMarker());
    });
    // The note's own opening glyph is single too.
    const directGlyphs = note
      .getChildren()
      .filter((child) => $isMarkerNode(child) && child.getMarkerSyntax() === "opening");
    expect(directGlyphs).toHaveLength(1);
  });
}

/** Replace the `noteIndex`-th note object (document order) in the USJ with `newNote`. */
function replaceUsjNote(usj: Usj, noteIndex: number, newNote: MarkerObject): boolean {
  let seen = 0;
  const walk = (content: MarkerContent[] | undefined): boolean => {
    if (!content) return false;
    for (let i = 0; i < content.length; i++) {
      const item = content[i];
      if (typeof item === "string") continue;
      if (item.type === "note") {
        if (seen === noteIndex) {
          content[i] = newNote;
          return true;
        }
        seen += 1;
      }
      if (walk(item.content)) return true;
    }
    return false;
  };
  return walk(usj.content);
}

/** Find the note MarkerObject in USJ content, in document order. */
function findUsjNotes(usj: Usj): MarkerObject[] {
  const notes: MarkerObject[] = [];
  const walk = (content: MarkerContent[] | undefined) => {
    for (const item of content ?? []) {
      if (typeof item === "string") continue;
      if (item.type === "note") notes.push(item);
      walk(item.content);
    }
  };
  walk(usj.content);
  return notes;
}

async function roundtripNote(
  hostView: ViewOptions,
  noteIndex: number,
  sourceNoteUsj: MarkerObject,
  sourceUsj = sampleUsj,
) {
  const host = await renderEditor(optionsInView(hostView), sourceUsj);

  // Guard: the host USJ adaptors round-trip the source note losslessly on their own.
  const hostUsj = requireDefined(host.editorRef.getUsj(), "host USJ");
  expect(findUsjNotes(hostUsj)[noteIndex]).toEqual(sourceNoteUsj);

  const hostNoteOps = requireDefined(
    host.editorRef.getNoteOps(noteIndex),
    "host note ops",
  ) as DeltaOp[];
  expect(hostNoteOps).toHaveLength(1);

  // Popover leg: applyUpdate materializes the note (the FootnoteEditor load path).
  const popover = await renderEditor(popoverOptionsOver(hostView), PARAGRAPH_USJ);
  await act(async () => {
    popover.editorRef.applyUpdate([hostNoteOps[0]]);
  });

  expectWellFormedNote(popover.lexical, 0, footnotePopoverView(hostView));

  // Idempotence at the op level: popover ops deep-equal the host ops.
  const popoverNoteOps = requireDefined(popover.editorRef.getNoteOps(0), "popover note ops");
  expect(popoverNoteOps).toEqual(hostNoteOps);

  // Idempotence at the USJ level: the popover's serialized note deep-equals the source.
  const popoverUsj = requireDefined(popover.editorRef.getUsj(), "popover USJ");
  expect(findUsjNotes(popoverUsj)[0]).toEqual(sourceNoteUsj);

  return { host, popover, hostNoteOps, popoverNoteOps };
}

/**
 * `$rebuildNoteContent` on the popover note must be a no-op fixed point (not a refusal). Only over
 * an editable-marker host: the rebuild is the marker-edit engine's, which is off when markers are
 * hidden.
 */
async function expectRebuildFixedPoint(popover: { lexical: LexicalEditor }, hostView: ViewOptions) {
  if (hostView.markerMode !== "editable") return;
  const { messages, logger } = makeLogger();
  const context: Tier2Context = {
    viewOptions: footnotePopoverView(hostView),
    getMarker: bundledGetMarker,
    logger,
  };
  await act(async () => {
    popover.lexical.update(() => {
      const note = requireDefined($findNotes()[0], "popover note");
      expect($rebuildNoteContent(note, context)).toBe(false);
    });
  });
  expect(messages.some((m) => m.includes("no-op (fixed point)"))).toBe(true);
  expect(messages.some((m) => m.includes("sentinel/preserved-node count mismatch"))).toBe(false);
  expect(messages.some((m) => m.includes("excluded by guard rails"))).toBe(false);
}

/** Place the popover caret at the end of note 0's `\ft` content text. */
function $selectEndOfFtContent(): void {
  const note = requireDefined($findNotes()[0], "popover note");
  const ftChar = requireDefined(
    note
      .getChildren()
      .filter($isCharNode)
      .find((char) => char.getMarker() === "ft"),
    "popover ft char",
  );
  const contentText = requireDefined(
    ftChar
      .getChildren()
      .filter($isTextNode)
      .find((child) => !$isMarkerNode(child)),
    "popover ft content text",
  );
  contentText.select(contentText.getTextContentSize(), contentText.getTextContentSize());
}

/**
 * Start a footnote paragraph the way the engine does — Enter inside expanded note content is
 * the `\fp` break (PT9 SmartEnter) — then type the paragraph's text at the break caret.
 */
async function typeFpParagraph(popover: { lexical: LexicalEditor }, text: string): Promise<void> {
  await act(async () => {
    popover.lexical.dispatchCommand(KEY_ENTER_COMMAND, null);
  });
  await act(async () => {
    popover.lexical.update(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("expected a range selection after Enter");
      selection.insertText(text);
    });
  });
}

/** Whether the op is a text insert attributed as a plain (non-nested) `\fp` char span. */
function isFpContentOp(op: DeltaOp): boolean {
  if (typeof op.insert !== "string") return false;
  const char = op.attributes?.char;
  if (typeof char !== "object" || char === null || Array.isArray(char)) return false;
  return "style" in char && char.style === "fp";
}

/** The note USJ's direct `\fp` char entries, in document order. */
function fpCharEntries(noteUsj: MarkerObject): MarkerObject[] {
  return (noteUsj.content ?? []).filter(
    (item): item is MarkerObject =>
      typeof item !== "string" && item.type === "char" && item.marker === "fp",
  );
}

/** The note's text, every string in it concatenated in document order. */
function noteText(note: MarkerObject): string {
  return (note.content ?? [])
    .map((item) => (typeof item === "string" ? item : noteText(item)))
    .join("");
}

forEachView(EDITING_VIEWS, ({ name, view: hostView }) => {
  describe("popover note ops round-trip (canonical glyph-free contract)", () => {
    it("is idempotent for a note with \\fr/\\ft spans and a \\fv verse-ref char", async () => {
      const { popover } = await roundtripNote(hostView, 0, closedNoteUsj);
      await expectRebuildFixedPoint(popover, hostView);
    }, 30000);

    it('is idempotent for an unclosed note (closed="false")', async () => {
      const { popover } = await roundtripNote(hostView, 1, unclosedNoteUsj);

      // An unterminated note has no closer glyph in the popover either.
      popover.lexical.getEditorState().read(() => {
        const note = requireDefined($findNotes()[0], "popover note");
        expect(
          note
            .getChildren()
            .some((child) => $isMarkerNode(child) && child.getMarkerSyntax() === "closing"),
        ).toBe(false);
      });
      await expectRebuildFixedPoint(popover, hostView);
    }, 30000);

    // A nested span materialized from the FIRST op of a run takes the same shape as one nested
    // mid-run: its glyphs inside it. Built with them outside, the editor's marker engine re-reads the
    // run's bytes and the nested span is gone, so a note that opens with `\+nd LORD\+nd*` lost it.
    it.each([
      {
        name: "a closed run that opens with a nested span",
        run: {
          type: "char",
          marker: "ft",
          content: [{ type: "char", marker: "nd", content: ["LORD"] }, " said"],
        },
      },
      {
        name: "an unclosed run that opens with a nested span",
        run: {
          type: "char",
          marker: "ft",
          content: [{ type: "char", marker: "nd", content: ["LORD"] }, " said"],
          closed: "false",
        } as ClosableMarkerObject,
      },
      {
        name: "a closed run with a nested span mid-run",
        run: {
          type: "char",
          marker: "ft",
          content: ["the ", { type: "char", marker: "nd", content: ["LORD"] }, " said"],
        },
      },
      {
        name: "a run that is only a nested span",
        run: {
          type: "char",
          marker: "ft",
          content: [{ type: "char", marker: "nd", content: ["LORD"] }],
        },
      },
    ] satisfies { name: string; run: MarkerObject }[])(
      "is idempotent for $name",
      async ({ run }) => {
        const noteUsj: MarkerObject = { type: "note", marker: "f", caller: "+", content: [run] };
        const hostUsj: Usj = {
          ...sampleUsj,
          content: [
            ...sampleUsj.content.slice(0, 2),
            {
              type: "para",
              marker: "p",
              content: [{ type: "verse", marker: "v", number: "1" }, "first ", noteUsj, "end"],
            },
          ],
        };

        await roundtripNote(hostView, 0, noteUsj, hostUsj);
      },
    );

    it("writes a clean note back into the host via replaceEmbedUpdate (popover Save path)", async () => {
      const { host, popover } = await roundtripNote(hostView, 0, closedNoteUsj);

      // Mutate the popover note BEFORE saving (mirrors the in-app QA: type into the \ft span),
      // so the assertion below can only be satisfied by a write that actually happened — an
      // unmodified save would leave the host indistinguishable from its pre-save state.
      const sentinel = "task14-review-sentinel";
      await act(async () => {
        popover.lexical.update(() => {
          const note = requireDefined($findNotes()[0], "popover note");
          const ftChar = note
            .getChildren()
            .filter($isCharNode)
            .find((char) => char.getMarker() === "ft");
          const contentText = requireDefined(ftChar, "popover ft char")
            .getChildren()
            .filter($isTextNode)
            .find((child) => !$isMarkerNode(child));
          requireDefined(contentText, "popover ft content text").setTextContent(
            `${requireDefined(contentText, "popover ft content text").getTextContent()}${sentinel}`,
          );
        });
      });
      const popoverNoteOps = requireDefined(popover.editorRef.getNoteOps(0), "popover note ops");
      expect(JSON.stringify(popoverNoteOps)).toContain(sentinel);

      const hostNoteKey = host.lexical.getEditorState().read(() => {
        return requireDefined($findNotes()[0], "host note").getKey();
      });
      const preSaveNoteCount = host.lexical.getEditorState().read(() => $findNotes().length);
      const preSaveUsj = requireDefined(host.editorRef.getUsj(), "host USJ before save");
      await act(async () => {
        host.editorRef.replaceEmbedUpdate(hostNoteKey, popoverNoteOps);
      });

      // Contract-owned invariants: the sentinel-carrying note WAS written into the host, its
      // USJ deep-equals the popover's serialized note, and every note in the host document is
      // CLEAN — no doubled glyphs, no unmatched nodes.
      const popoverUsj = requireDefined(popover.editorRef.getUsj(), "popover USJ after edit");
      const popoverNoteUsj = requireDefined(findUsjNotes(popoverUsj)[0], "popover note USJ");
      expect(JSON.stringify(popoverNoteUsj)).toContain(sentinel);

      const hostUsj = requireDefined(host.editorRef.getUsj(), "host USJ after save");
      const hostNotes = findUsjNotes(hostUsj);
      const writtenNote = hostNotes.find((note) => JSON.stringify(note).includes(sentinel));
      expect(writtenNote).toBeDefined();
      expect(deepEqual(writtenNote, popoverNoteUsj)).toBe(true);

      const noteCount = host.lexical.getEditorState().read(() => $findNotes().length);
      for (let i = 0; i < noteCount; i++) expectWellFormedNote(host.lexical, i, hostView);

      // Replace POSITION: `$getReplaceEmbedOps` computes its retain in "apply"
      // coordinates — the coordinate system `$applyUpdate`'s insert/delete traversals use,
      // where an editable chapter is an opaque embed (1 unit, glyph text child not counted).
      // The replacement therefore lands exactly where the old note was:
      // - the note count is unchanged (old note deleted, new note inserted — not appended);
      expect(noteCount).toBe(preSaveNoteCount);
      // - the sentinel note sits AT the original note's position (note index 0);
      expect(JSON.stringify(hostNotes[0])).toContain(sentinel);
      // - and the whole document deep-equals the pre-save document with ONLY note 0 swapped
      //   for the popover's note — no character eaten from adjacent text, nothing displaced.
      const expectedUsj = JSON.parse(JSON.stringify(preSaveUsj)) as Usj;
      expect(replaceUsjNote(expectedUsj, 0, popoverNoteUsj)).toBe(true);
      expect(hostUsj).toEqual(expectedUsj);
    }, 30000);

    it("is idempotent for a note with two adjacent \\fp paragraphs (spans stay separate)", async () => {
      const { host, popover, popoverNoteOps } = await roundtripNote(hostView, 2, twoFpNoteUsj);
      await expectRebuildFixedPoint(popover, hostView);

      // Save WITHOUT edits (open the popover, hit Save): the host must still hold the exact
      // source note — two `\fp` paragraphs, not one merged span.
      const hostNoteKey = host.lexical
        .getEditorState()
        .read(() => requireDefined($findNotes()[2], "host two-fp note").getKey());
      await act(async () => {
        host.editorRef.replaceEmbedUpdate(hostNoteKey, popoverNoteOps);
      });
      const hostUsj = requireDefined(host.editorRef.getUsj(), "host USJ after no-edit save");
      expect(findUsjNotes(hostUsj)[2]).toEqual(twoFpNoteUsj);
    }, 30000);

    // Two adjacent `\w` spans are two words, each with its own `lemma`; their ops differ only in
    // that attribute. Built as one span, the second word's lemma is gone from the note.
    it("is idempotent for a note with two adjacent \\w spans of different lemmas", async () => {
      const twoWordsNoteUsj: MarkerObject = {
        type: "note",
        marker: "f",
        caller: "+",
        content: [
          { type: "char", marker: "ft", content: ["n "] },
          { type: "char", marker: "w", lemma: "x", content: ["a"] } as MarkerObject,
          { type: "char", marker: "w", lemma: "y", content: ["b"] } as MarkerObject,
        ],
      };
      const hostUsj: Usj = {
        ...sampleUsj,
        content: [
          ...sampleUsj.content.slice(0, 2),
          {
            type: "para",
            marker: "p",
            content: [
              { type: "verse", marker: "v", number: "1" },
              "first ",
              twoWordsNoteUsj,
              "end",
            ],
          },
        ],
      };
      const { host, popoverNoteOps } = await roundtripNote(hostView, 0, twoWordsNoteUsj, hostUsj);

      const hostNoteKey = host.lexical
        .getEditorState()
        .read(() => requireDefined($findNotes()[0], "host note").getKey());
      await act(async () => {
        host.editorRef.replaceEmbedUpdate(hostNoteKey, popoverNoteOps);
      });
      expect(host.editorRef.getUsj()).toEqual(hostUsj);
    }, 30000);

    // Only Standard view has an `\fp` break to create; elsewhere Enter in a note does nothing.
    it.runIf(name === "standard")(
      "keeps two engine-created \\fp paragraphs separate through the popover save path",
      async () => {
        const { host, popover } = await roundtripNote(hostView, 0, closedNoteUsj);

        // Create two footnote paragraphs the way a user does in the popover: Enter (the `\fp`
        // break), type; Enter, type.
        await act(async () => {
          popover.lexical.update(() => $selectEndOfFtContent(), { discrete: true });
        });
        await typeFpParagraph(popover, "second paragraph");
        await typeFpParagraph(popover, "third paragraph");

        // The popover TREE holds two separate `\fp` spans (in-editor combining exempts `\fp`)…
        popover.lexical.getEditorState().read(() => {
          const note = requireDefined($findNotes()[0], "popover note");
          const fpSpans = note
            .getChildren()
            .filter($isCharNode)
            .filter((char) => char.getMarker() === "fp");
          expect(fpSpans).toHaveLength(2);
        });

        // …and so do the ops the popover Save path sends to the host.
        const popoverNoteOps = requireDefined(
          popover.editorRef.getNoteOps(0),
          "popover note ops",
        ) as DeltaOpInsertNoteEmbed[];
        const contentsOps = requireDefined(
          popoverNoteOps[0]?.insert.note?.contents?.ops,
          "popover note contents ops",
        );
        expect(contentsOps.filter(isFpContentOp)).toHaveLength(2);

        const hostNoteKey = host.lexical
          .getEditorState()
          .read(() => requireDefined($findNotes()[0], "host note").getKey());
        await act(async () => {
          host.editorRef.replaceEmbedUpdate(hostNoteKey, popoverNoteOps);
        });

        // The USJ the host serializes for the save path must still hold TWO `\fp` char entries —
        // PT9 keeps them separate paragraphs; merging collapses them into one.
        const hostUsj = requireDefined(host.editorRef.getUsj(), "host USJ after save");
        const noteUsj = requireDefined(findUsjNotes(hostUsj)[0], "host note USJ");
        expect(fpCharEntries(noteUsj).map((entry) => entry.content)).toEqual([
          ["second paragraph"],
          ["third paragraph"],
        ]);
      },
      30000,
    );
  });

  describe("Enter inside the popover's note content", () => {
    /** Enter at the end of the `\ft` content, then `typed` at the caret it leaves. */
    async function enterThenType(
      popover: { lexical: LexicalEditor },
      typed: string,
    ): Promise<void> {
      await act(async () => {
        popover.lexical.update(() => $selectEndOfFtContent(), { discrete: true });
      });
      await typeFpParagraph(popover, typed);
    }

    it("keeps the note whole: one note, nothing it held lost", async () => {
      const { popover } = await roundtripNote(hostView, 0, closedNoteUsj);
      await act(async () => {
        popover.lexical.update(() => $selectEndOfFtContent(), { discrete: true });
      });
      await act(async () => {
        popover.lexical.dispatchCommand(KEY_ENTER_COMMAND, null);
      });

      const notes = findUsjNotes(requireDefined(popover.editorRef.getUsj(), "popover USJ"));
      expect(notes).toHaveLength(1);
      expect(notes[0]).toMatchObject({ marker: "f", caller: "+" });
      expect(noteText(notes[0])).toBe(noteText(closedNoteUsj));
    }, 30000);

    it("saves what is typed after Enter as part of the note", async () => {
      const { popover } = await roundtripNote(hostView, 0, closedNoteUsj);
      const typed = "typed after Enter";
      await enterThenType(popover, typed);

      // What the popover's Save writes: its first note op, which must carry the keystrokes.
      const ops = requireDefined(popover.editorRef.getNoteOps(0), "popover note ops");
      expect(JSON.stringify(ops)).toContain(typed);
      // Nothing outside the note, where Save would drop it.
      expect(popover.editorRef.getUsj()?.content).toHaveLength(1);
    }, 30000);

    describe.runIf(name !== "standard")("where Enter has no meaning in a note", () => {
      async function setUp() {
        const { popover } = await roundtripNote(hostView, 0, closedNoteUsj);
        await act(async () => {
          popover.lexical.update(() => $selectEndOfFtContent(), { discrete: true });
        });
        return popover;
      }

      it("does nothing on Enter: no \\fp, no split, the note keeps its text", async () => {
        const popover = await setUp();
        const before = JSON.stringify(popover.editorRef.getUsj());
        await act(async () => {
          popover.lexical.dispatchCommand(KEY_ENTER_COMMAND, null);
        });
        expect(JSON.stringify(popover.editorRef.getUsj())).toBe(before);
        expect(
          fpCharEntries(
            requireDefined(
              findUsjNotes(requireDefined(popover.editorRef.getUsj(), "USJ"))[0],
              "note",
            ),
          ),
        ).toHaveLength(0);
      }, 30000);

      it.each([
        ["INSERT_PARAGRAPH_COMMAND", INSERT_PARAGRAPH_COMMAND],
        ["INSERT_LINE_BREAK_COMMAND", INSERT_LINE_BREAK_COMMAND],
      ] as const)(
        "swallows a direct dispatch of %s",
        async (_label, command) => {
          const popover = await setUp();
          const before = JSON.stringify(popover.editorRef.getUsj());
          await act(async () => {
            popover.lexical.dispatchCommand(command, undefined);
          });
          expect(JSON.stringify(popover.editorRef.getUsj())).toBe(before);
          // The caret is still in the note: what is typed next is saved with it.
          await act(async () => {
            popover.lexical.update(() => {
              const selection = $getSelection();
              if ($isRangeSelection(selection)) selection.insertText("still inside");
            });
          });
          const ops = requireDefined(popover.editorRef.getNoteOps(0), "popover note ops");
          expect(JSON.stringify(ops)).toContain("still inside");
        },
        30000,
      );
    });
  });
});

describe("the popover's protected note shell", () => {
  // The popover's own view: the host's, expanded, with the note's marker and caller governed by its
  // dropdowns rather than typed (FootnoteEditor's `isNoteShellEditable: false`).
  const protectedPopoverOptions = popoverOptionsOver(standardHostView);
  const hostOptions = optionsInView(standardHostView);

  it.each([1, 2])(
    "saves one closed note, keystroke included, when the caret lands inside the closer at %i",
    async (offset) => {
      const host = await renderEditor(hostOptions, sampleUsj);
      const hostNoteOps = requireDefined(host.editorRef.getNoteOps(0), "host note ops");
      const popover = await renderEditor(protectedPopoverOptions, PARAGRAPH_USJ);
      await act(async () => {
        popover.editorRef.applyUpdate([hostNoteOps[0]]);
      });
      await act(async () => {
        popover.lexical.update(() => {
          const note = requireDefined($findNotes()[0], "popover note");
          const closer = note.getLastChild();
          if (!$isMarkerNode(closer)) throw new Error("expected the note's closing glyph");
          closer.select(offset, offset);
          popover.lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
        });
      });
      await act(async () => {
        popover.lexical.update(() => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) selection.insertText("X");
        });
      });
      act(() => popover.editorRef.commitPendingMarkerEdits());

      // What the popover's Save writes: its first note op, which must be the whole note.
      const ops = requireDefined(popover.editorRef.getNoteOps(0), "popover note ops");
      expect(ops).toHaveLength(1);
      expect(ops[0]).not.toHaveProperty(["insert", "note", "closed"]);
      // Typed at the closer's front, the keystroke ends the `\fv` span the screen shows it in: that
      // span has no closer of its own, so its bytes run on to the note's.
      expect(JSON.stringify(ops[0])).toContain('"2X"');
    },
    30000,
  );

  it("saves a keystroke typed after a focus that parks the caret at the document's end", async () => {
    const host = await renderEditor(hostOptions, sampleUsj);
    const hostNoteOps = requireDefined(host.editorRef.getNoteOps(0), "host note ops");
    const popover = await renderEditor(protectedPopoverOptions, PARAGRAPH_USJ);
    await act(async () => {
      popover.editorRef.applyUpdate([hostNoteOps[0]]);
    });
    // `focus()` with no selection to restore falls back to the document's end: past the note,
    // which is all the popover's document holds and all its Save writes.
    await act(async () => {
      popover.lexical.update(() => {
        $getRoot().selectEnd();
        popover.lexical.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
      });
    });
    await act(async () => {
      popover.lexical.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) selection.insertText("X");
      });
    });
    act(() => popover.editorRef.commitPendingMarkerEdits());

    const ops = requireDefined(popover.editorRef.getNoteOps(0), "popover note ops");
    expect(ops).toHaveLength(1);
    expect(JSON.stringify(ops[0])).toContain('"2X"');
    // Nothing outside the note, where Save would drop it.
    const para = popover.editorRef.getUsj()?.content[0];
    expect(typeof para === "object" ? para.content?.length : undefined).toBe(1);
  }, 30000);
});
